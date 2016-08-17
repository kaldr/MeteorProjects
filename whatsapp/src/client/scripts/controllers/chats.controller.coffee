
Moment = require 'moment'
{Controller} = require 'angular-ecmascript/module-helpers'
{Chats} = require '../../../lib/collections'

class ChatsCtrl extends Controller
    constructor:(@arguments)->
        super(@arguments)
        this.helpers
          data:()->Chats.find()
    remove:(chat)->
      Chats.remove chat._id;

exports.ChatsCtrl=ChatsCtrl
