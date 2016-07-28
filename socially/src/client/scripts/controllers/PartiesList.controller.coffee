`
import {Controller} from 'angular-ecmascript/module-helpers'
import Parties from '../../../collections/parties'
`
class PartiesList extends Controller
  constructor:(@arguments...)->
    super @arguments...
    this.helpers
      parties:()->Parties.find({})
    # this.$scope.parties=[
    #   {
    #     name:'Dubstep-Free Zone'
    #     description:'Can we please just for an evening not listen to dubstep.'
    #   },
    #   {
    #     name:"All dubstep all the time"
    #     description:"Get it on!"
    #   },
    #   {
    #     name:"Savage lounging"
    #     description:'Leisure suit required. And only fiercest manners.'
    #   }
    # ]

PartiesList.$inject=["$scope"]
PartiesList.$name="PartiesListCtrl"
`
export default PartiesList
`
