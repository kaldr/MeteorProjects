var Chats, Messages, Meteor, ref;

Meteor = require('meteor/meteor').Meteor;

ref = require("/lib/collections"), Chats = ref.Chats, Messages = ref.Messages;

Meteor.methods({
  newMessage: (function(_this) {
    return function(message) {
      var messageId;
      check(message, {
        text: String,
        chatId: String,
        type: String
      });
      message.timestamp = new Date();
      messageId = Messages.insert(message);
      Chats.update(message.chatId, {
        $set: {
          lastMessage: message
        }
      });
      return messageId;
    };
  })(this)
});
