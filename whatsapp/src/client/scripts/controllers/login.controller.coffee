`
import {_} from 'meteor/underscore'
import {Accounts} from 'meteor/accounts-base'
import {Controller} from "angular-ecmascript/module-helpers"
`
class LoginCtrl extends Controller
    constructor:(@arguments...)->
        super @arguments...
    login:()->

    handleError:(err)->

LoginCtrl.$inject=['$state','$ionicLoading','$ionicPopup','$log']
`export default LoginCtrl`
