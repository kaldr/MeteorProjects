{Meteor}=require 'meteor/meteor'

if Meteor.isServer
  Meteor.publish 'users',->
    Meteor.users.find {},{
      fields:
        emails:1
        profile:1
    }
