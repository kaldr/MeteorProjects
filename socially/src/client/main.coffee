angular=require 'angular'
angularMeteor=require 'angular-meteor'
{Parties}=require '../collections/parties.js'
PartiesListCtrl=($scope,$reactive)->
    'ngInject'
    $reactive this
        .attach $scope
    this.helpers {
        parties:()->Parties.find()
    }

    # $scope.parties=[{
    #     'name': 'Dubstep-Free Zone',
    #     'description': 'Can we please just for an evening not listen to dubstep.'
    #     }, {
    #         'name': 'All dubstep all the time',
    #         'description': 'Get it on!'
    #     }, {
    #         'name': 'Savage lounging',
    #         'description': 'Leisure suit required. And only fiercest manners.'
    #     }];

angular.module 'socially',[angularMeteor]
    .controller 'PartiesListCtrl',PartiesListCtrl
