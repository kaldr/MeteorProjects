`
import Moment from 'moment'
import {Controller} from 'angular-ecmascript/module-helpers'
import {Chats} from '../../../lib/collections'
`
class ChatsCtrl extends Controller
    constructor:(@arguments)->
        super(@arguments)
        this.helpers
          data:()->Chats.find()
    remove:(chat)->
      Chats.remove chat._id;
`
export default ChatsCtrl
`
