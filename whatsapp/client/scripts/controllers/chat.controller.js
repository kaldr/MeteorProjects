var ChatCtrl, Chats, Controller, Ionic, Messages, Meteor, _, ref,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  slice = [].slice;

Ionic = require('ionic-scripts');

_ = require('meteor/underscore')._;

Meteor = require('meteor/meteor').Meteor;

Controller = require('angular-ecmascript/module-helpers').Controller;

ref = require('../../../lib/collections'), Chats = ref.Chats, Messages = ref.Messages;

ChatCtrl = (function(superClass) {
  extend(ChatCtrl, superClass);

  function ChatCtrl() {
    var _arguments;
    _arguments = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    this["arguments"] = _arguments;
    ChatCtrl.__super__.constructor.apply(this, this["arguments"]);
    this.chatId = this.$stateParams.chatId;
    this.isIOS = Ionic.Platform.isWebView() && Ionic.Platform.isIOS();
    this.isCordova = Meteor.isCordova;
    this.helpers({
      data: function() {
        return Chats.findOne(this.chatId);
      },
      messages: function() {
        return Messages.find({
          chatId: this.chatId
        });
      }
    });
  }

  ChatCtrl.prototype.sendMessage = function() {
    if (_.isEmpty(this.message)) {
      return;
    }
    this.callMethod('newMessage', {
      text: this.message,
      type: 'text',
      chatId: this.chatId
    });
    return delete this.message;
  };

  ChatCtrl.prototype.inputUp = function() {
    if (this.isIOS) {
      this.keyboardHeight = 216;
    }
    return this.scrollBottom(true);
  };

  ChatCtrl.prototype.inputDown = function() {
    if (this.isIOS) {
      this.keyboardHeight = 0;
    }
    return this.$ionicScrollDelegate.$getByHandle('chatScroll').resize();
  };

  ChatCtrl.prototype.closeKeyboard = function() {
    if (this.isCordova) {
      return cordova.plugins.Keyboard.close();
    }
  };

  ChatCtrl.prototype.scrollBottom = function(animate) {
    return this.$timeout((function(_this) {
      return function() {
        return _this.$ionicScrollDelegate.$getByHandle('chatScroll').scrollBottom(animate);
      };
    })(this), 300);
  };

  return ChatCtrl;

})(Controller);

exports.ChatCtrl = ChatCtrl;

ChatCtrl.$inject = ['$stateParams', '$timeout', "$ionicScrollDelegate"];
