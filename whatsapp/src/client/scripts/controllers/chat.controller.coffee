`
import {Controller} from 'angular-ecmascript/module-helpers'
import {Chats,Messages} from '../../../lib/collections'
`
class ChatCtrl extends Controller
  constructor:()->
    console.log this.$stateProvider

    console.log this.$state
    console.log this.$stateParams
    super @arguments
    this.chatId=this.$stateParams.chatId
    this.helpers
      data:()->Chats.findOne this.chatId
      messages:()->Messages.find
        chatId:this.chatId
    true
ChatCtrl.$inject = ['$state','$stateParams']
`
export default ChatCtrl
`
