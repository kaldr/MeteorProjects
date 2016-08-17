{ Meteor } = require 'meteor/meteor'
{Chats,Messages} = require "/lib/collections"
Meteor.methods
    newMessage:(message) =>
        check message,
            text:String
            chatId:String
            type:String
        message.timestamp=new Date()
        messageId=Messages.insert message
        Chats.update message.chatId,
            $set:
                lastMessage:message
        messageId
