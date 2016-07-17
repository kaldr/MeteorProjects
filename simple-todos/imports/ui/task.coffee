`
import { Template } from 'meteor/templating'
import { Tasks } from '../api/tasks.js'
import './task.html'
`

Template.task.helpers
    create: ->

    rendered: ->

    destroyed: ->


Template.task.events
    "click .toggle-checked": (event, template) ->
        Tasks.update this._id,{
            $set:
                checked:!this.checked
        }
    'click .delete':()->
        Tasks.remove this._id
