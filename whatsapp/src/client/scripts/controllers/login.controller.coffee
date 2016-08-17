{_} = require 'meteor/underscore'
{Accounts} = require 'meteor/accounts-base'
{Controller} = require "angular-ecmascript/module-helpers"

class LoginCtrl extends Controller
    constructor:(@arguments...)->
        super @arguments...
    login:()->

    handleError:(err)->

LoginCtrl.$inject=['$state','$ionicLoading','$ionicPopup','$log']
exports.LoginCtrl=LoginCtrl
