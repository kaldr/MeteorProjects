
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader'
import { Meteor } from 'meteor/meteor';

import ChatsCtrl from "../controllers/chats.controller"
import CalendarFilter from '../filters/calendar.filter'
import RoutesConfig from '../routes'
;
var App, onReady;

App = "Whatsapp";

Angular.module(App, ['angular-meteor', 'ui.router', 'ionic']);

new Loader(App).load(ChatsCtrl).load(CalendarFilter).load(RoutesConfig);

onReady = function() {
  return Angular.bootstrap(document, [App]);
};

if (Meteor.isCordova) {
  Angular.element(document).on('deviceready', onReady);
} else {
  Angular.element(document).ready(onReady);
}
