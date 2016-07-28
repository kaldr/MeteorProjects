
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import Loader from 'angular-ecmascript/module-loader'
import PartiesListCtrl from './scripts/controllers/PartiesList.controller'
;
var App;

App = 'socially';

angular.module(App, [angularMeteor]);

new Loader(App).load(PartiesListCtrl);
