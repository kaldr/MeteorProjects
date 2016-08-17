
Ionic = require 'ionic-scripts'
{_} = require 'meteor/underscore'
{Meteor} = require 'meteor/meteor'
{Controller} = require 'angular-ecmascript/module-helpers'
{Chats,Messages} = require '../../../lib/collections'

class ChatCtrl extends Controller
    constructor:(@arguments...)->
        super @arguments...
        this.chatId=this.$stateParams.chatId
        this.isIOS=Ionic.Platform.isWebView() && Ionic.Platform.isIOS()
        this.isCordova=Meteor.isCordova

        this.helpers
            data:()->Chats.findOne this.chatId
            messages:()->Messages.find
                chatId:this.chatId

    sendMessage:()->
        if _.isEmpty this.message
            return
        this.callMethod 'newMessage',
            text:this.message
            type:'text'
            chatId:this.chatId
        delete this.message

    inputUp:()->
        if this.isIOS
            this.keyboardHeight=216
        this.scrollBottom true
    inputDown:()->
        if this.isIOS
            this.keyboardHeight=0
        this.$ionicScrollDelegate.$getByHandle 'chatScroll'
        .resize()
    closeKeyboard:()->
        if this.isCordova
            cordova.plugins.Keyboard.close()
    scrollBottom:(animate)->
        this.$timeout ()=>
            this.$ionicScrollDelegate.$getByHandle 'chatScroll'
            .scrollBottom animate
        ,300

exports.ChatCtrl=ChatCtrl
ChatCtrl.$inject = ['$stateParams','$timeout',"$ionicScrollDelegate"]
