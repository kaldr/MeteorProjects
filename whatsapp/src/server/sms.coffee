{Meteor} = require 'meteor/meteor'
{Accounts} = require 'meteor/accounts-base'
if Meteor.settings and Meteor.settings.ACCOUNTS_PHONE
    Accounts._options.adminPhoneNumbers=Meteor.settings.ACCOUNTS_PHONE.ADMIN_NUMBERS
    Accounts._options.phoneVerificationMasterCode=Meteor.settings.ACCOUNTS_PHONE.MASTER_CODE
