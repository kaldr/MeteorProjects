var Accounts, Meteor;

Meteor = require('meteor/meteor').Meteor;

Accounts = require('meteor/accounts-base').Accounts;

if (Meteor.settings && Meteor.settings.ACCOUNTS_PHONE) {
  Accounts._options.adminPhoneNumbers = Meteor.settings.ACCOUNTS_PHONE.ADMIN_NUMBERS;
  Accounts._options.phoneVerificationMasterCode = Meteor.settings.ACCOUNTS_PHONE.MASTER_CODE;
}
