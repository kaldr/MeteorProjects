require 'angular-animate'
require 'angular-meteor'
require 'angular-meteor-auth'
require 'angular-moment'
require 'angular-sanitize'
require 'angular-ui-router'
require 'ionic-scripts'
Angular = require 'angular'
Loader = require 'angular-ecmascript/module-loader'
{ Meteor } = require 'meteor/meteor'
ChatsCtrl = require "../controllers/chats.controller"
ChatCtrl = require '../controllers/chat.controller'
InputDirective = require '../directives/input.directive'
CalendarFilter = require '../filters/calendar.filter'
RoutesConfig = require '../routes'

App="Whatsapp"
Angular.module App,[
    'angular-meteor'
    'angular-meteor.auth'
    'angularMoment'
    'ionic'
]

new Loader App
.load ChatsCtrl
.load ChatCtrl
.load InputDirective
.load CalendarFilter
.load RoutesConfig

onReady=()->
    Angular.bootstrap document,[App]

if Meteor.isCordova
    Angular.element document
    .on 'deviceready',onReady
else
    Angular.element document
    .ready onReady
