angular = require 'angular'
angularMeteor = require 'angular-meteor'
uiRouter=require 'angular-ui-router'
utilsPagination=require 'angular-utils-pagination'
{Counts}=require 'meteor/tmeasday:publish-counts'

{Parties}=require '../../../api/parties/index'
{PartyAdd}=require '../partyAdd/partyAdd'
{PartyRemove}=require '../partyRemove/partyRemove'
{PartiesSort}=require '../partiesSort/partiesSort'

`import templateUrl from './partiesList.html'`

class PartiesListCtrl
    constructor:($scope,$reactive)->
      'ngInject'
      $reactive this
        .attach $scope

      this.perPage=3
      this.page=1
      this.sort=
        name:1

      this.searchText=''

      `this.subscribe('parties', () => [{
        limit: parseInt(this.perPage),
        skip: parseInt((this.getReactively('page') - 1) * this.perPage),
        sort: this.getReactively('sort')
      }, this.getReactively('searchText')
    ]);`
      this.helpers {
        parties:->Parties.find {},{
          sort:this.getReactively 'sort'
        }
        partiesCount:->Counts.get 'numberOfParties'
      }
    pageChanged:(newPage)->this.page=newPage
    sortChanged:(sort)->this.sort=sort

config=($stateProvider)->
  'ngInject'
  $stateProvider
    .state 'parties',{
      url:'/parties'
      template:'<parties-list></parties-list>'
    }

name = 'partiesList'

exports.PartiesList=angular.module name,[
  angularMeteor
  uiRouter
  PartyAdd
  PartyRemove
  PartiesSort
  utilsPagination
]
  .component name,{
    templateUrl:templateUrl
    controllerAs:name
    controller:PartiesListCtrl
  }
  .config config
  .name
