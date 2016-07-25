
import {Config} from 'angular-ecmascript/module-helpers'
;
var RoutesConfig,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

RoutesConfig = (function(superClass) {
  extend(RoutesConfig, superClass);

  function RoutesConfig() {
    return RoutesConfig.__super__.constructor.apply(this, arguments);
  }

  RoutesConfig.prototype.configure = function() {
    this.$stateProvider.state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'client/templates/tabs.html'
    }).state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'client/templates/chats.html',
          controller: "ChatsCtrl as chats"
        }
      }
    }).state('tab.chat', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'client/templates/chat.html',
          controller: "ChatCtrl as chat"
        }
      }
    }).state('login', {
      url: '/login',
      templateUrl: 'client/templates/login.html',
      controller: 'LoginCtrl as logger'
    }).state('confirmation', {
      url: "/confirmation/:phone",
      templateUrl: 'client/templates/confirmation.html',
      controller: 'ConfirmationCtrl as confirmation'
    }).state('profile', {
      url: '/profile',
      templateUrl: 'client/templates/profile.html',
      controller: "ProfileCtrl as profile"
    });
    return this.$urlRouterProvider.otherwise('tab/chats');
  };

  return RoutesConfig;

})(Config);

RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];


export default RoutesConfig
;
