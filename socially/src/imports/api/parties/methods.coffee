_=require 'underscore'
{Meteor}=require 'meteor/meteor'
{check}=require 'meteor/check'
{Email}=require 'meteor/email'
{Parties}=require './collection'

getContactEmail=(user)->
    return user.emails[0].address if user.emails?.length
    return user.services.facebook.email if user.services?.facebook?.email
    return null

invite=(partyId,userId)->
    check partyId,String
    check userId,String

    if not this.userId
        throw new Meteor.Error 400,"You have to be logged in!"
    party=Parties.findOne partyId

    if not party
        throw new Meteor.Error 404,"No such party!"

    if party.public
        throw new Meteor.Error 400,'That party is public. No need to invite people.'

    if (userId != party.owner) and (not _.contains party.invited,userId)
        Parties.update partyId,{
            $addToSet:
                invited:userId
        }
        replyTo=getContactEmail Meteor.users.findOne this.Meteor.userId()
        to=getContactEmail Meteor.users.findOne userId

        if Meteor.isServer and to
            Email.send {
                to:to
                replyTo:replyTo
                from:"noreplay@socially.com"
                subject: "PARTY:#{party.title}"
                text:"Hey, I just invited you to #{party.title} on Socially. Come check it out: #{Meteor.absoluteUrl()}"
                }
exports.invite=invite
Meteor.methods {
    invite:invite
}
