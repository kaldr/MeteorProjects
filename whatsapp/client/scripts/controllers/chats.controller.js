var Chats, ChatsCtrl, Controller, Moment,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Moment = require('moment');

Controller = require('angular-ecmascript/module-helpers').Controller;

Chats = require('../../../lib/collections').Chats;

ChatsCtrl = (function(superClass) {
  extend(ChatsCtrl, superClass);

  function ChatsCtrl(_arguments) {
    this["arguments"] = _arguments;
    ChatsCtrl.__super__.constructor.call(this, this["arguments"]);
    this.helpers({
      data: function() {
        return Chats.find();
      }
    });
  }

  ChatsCtrl.prototype.remove = function(chat) {
    return Chats.remove(chat._id);
  };

  return ChatsCtrl;

})(Controller);

exports.ChatsCtrl = ChatsCtrl;
