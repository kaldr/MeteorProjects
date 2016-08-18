var Email, Meteor, Parties, _, check, getContactEmail, invite;

_ = require('underscore');

Meteor = require('meteor/meteor').Meteor;

check = require('meteor/check').check;

Email = require('meteor/email').Email;

Parties = require('./collection').Parties;

getContactEmail = function(user) {
  var ref, ref1, ref2;
  if ((ref = user.emails) != null ? ref.length : void 0) {
    return user.emails[0].address;
  }
  if ((ref1 = user.services) != null ? (ref2 = ref1.facebook) != null ? ref2.email : void 0 : void 0) {
    return user.services.facebook.email;
  }
  return null;
};

invite = function(partyId, userId) {
  var party, replyTo, to;
  check(partyId, String);
  check(userId, String);
  if (!this.userId) {
    throw new Meteor.Error(400, "You have to be logged in!");
  }
  party = Parties.findOne(partyId);
  if (!party) {
    throw new Meteor.Error(404, "No such party!");
  }
  if (party["public"]) {
    throw new Meteor.Error(400, 'That party is public. No need to invite people.');
  }
  if ((userId !== party.owner) && (!_.contains(party.invited, userId))) {
    Parties.update(partyId, {
      $addToSet: {
        invited: userId
      }
    });
    replyTo = getContactEmail(Meteor.users.findOne(this.Meteor.userId()));
    to = getContactEmail(Meteor.users.findOne(userId));
    if (Meteor.isServer && to) {
      return Email.send({
        to: to,
        replyTo: replyTo,
        from: "noreplay@socially.com",
        subject: "PARTY:" + party.title,
        text: "Hey, I just invited you to " + party.title + " on Socially. Come check it out: " + (Meteor.absoluteUrl())
      });
    }
  }
};

exports.invite = invite;

Meteor.methods({
  invite: invite
});
