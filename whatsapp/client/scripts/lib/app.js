
import 'angular-animate'
import 'angular-meteor'
import 'angular-meteor-auth'
import 'angular-moment'
import 'angular-sanitize'
import 'angular-ui-router'
import 'ionic-scripts'
import Angular from 'angular'
import Loader from 'angular-ecmascript/module-loader'
import { Meteor } from 'meteor/meteor'

import ChatsCtrl from "../controllers/chats.controller"
import ChatCtrl from '../controllers/chat.controller'
import InputDirective from '../directives/input.directive'
import CalendarFilter from '../filters/calendar.filter'
import RoutesConfig from '../routes'
;
var App, onReady;

App = "Whatsapp";

Angular.module(App, ['angular-meteor', 'angular-meteor.auth', 'angularMoment', 'ionic']);

new Loader(App).load(ChatsCtrl).load(ChatCtrl).load(InputDirective).load(CalendarFilter).load(RoutesConfig);

onReady = function() {
  return Angular.bootstrap(document, [App]);
};

if (Meteor.isCordova) {
  Angular.element(document).on('deviceready', onReady);
} else {
  Angular.element(document).ready(onReady);
}
