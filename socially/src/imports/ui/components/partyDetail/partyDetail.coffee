angular=require 'angular'
angularMeteor=require 'angular-meteor'
uiRouter=require 'angular-ui-router'
{Meteor}=require 'meteor/meteor'
{Parties}=require '../../../api/parties/index'
{PartyUninvited}=require '../partyUninvited/partyUninvited'
`
import template from './partyDetail.html'
`
class PartyDetailCtrl
    constructor:($stateParams,$scope,$reactive)->
        'ngInject'
        $reactive this
            .attach $scope
        this.partyId=$stateParams.partyId

        this.subscribe 'parties'
        this.subscribe 'users'

        this.helpers {
            party:->Parties.findOne {
                _id:$stateParams.partyId
            }
            users:->Meteor.users.find()
        }
    save:->Parties.update {
        _id:this.partyId
    },{
        $set:
            name:this.party.name
            description:this.party.description
            public:this.party.public
    },(error)=>
        if error
            console.log 'Oops,unable to update the party'
        else
            console.log "Done!"

name='partyDetail'

config=($stateProvider)->
    'ngInject'
    $stateProvider.state 'partyDetail',{
        url:"/parties/:partyId"
        template:'<party-detail></party-detail>'
        resolve:
            currentUser:($q)->
                if Meteor.userId()==null
                    $q.reject("AUTH_REQUIRED")
                else
                    $q.resolve()
    }

exports.PartyDetail=angular.module name,[
    angularMeteor,uiRouter,PartyUninvited
]
    .component name,{
        templateUrl:template
        controllerAs:name
        controller:PartyDetailCtrl
    }
    .config config
    .name
