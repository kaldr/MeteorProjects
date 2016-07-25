
import {_} from 'meteor/underscore'
import {Accounts} from 'meteor/accounts-base'
import {Controller} from "angular-ecmascript/module-helpers"
;
var LoginCtrl,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  slice = [].slice;

LoginCtrl = (function(superClass) {
  extend(LoginCtrl, superClass);

  function LoginCtrl() {
    var _arguments;
    _arguments = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    this["arguments"] = _arguments;
    LoginCtrl.__super__.constructor.apply(this, this["arguments"]);
  }

  LoginCtrl.prototype.login = function() {};

  LoginCtrl.prototype.handleError = function(err) {};

  return LoginCtrl;

})(Controller);

LoginCtrl.$inject = ['$state', '$ionicLoading', '$ionicPopup', '$log'];

export default LoginCtrl;
