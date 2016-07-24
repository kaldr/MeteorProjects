
import {Controller} from 'angular-ecmascript/module-helpers'
import {Chats,Messages} from '../../../lib/collections'
;
var ChatCtrl,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ChatCtrl = (function(superClass) {
  extend(ChatCtrl, superClass);

  function ChatCtrl() {
    console.log(this.$stateProvider);
    console.log(this.$state);
    console.log(this.$stateParams);
    ChatCtrl.__super__.constructor.call(this, this["arguments"]);
    this.chatId = this.$stateParams.chatId;
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
    true;
  }

  return ChatCtrl;

})(Controller);

ChatCtrl.$inject = ['$state', '$stateParams'];


export default ChatCtrl
;
