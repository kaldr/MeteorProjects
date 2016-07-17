`
import { Template } from 'meteor/templating'
import { ReactiveDict } from 'meteor/reactive-dict'
import { Tasks } from '../api/tasks.js'
import './task.js'
import './body.html'

`
tasks=()->
    instance=Template.instance()
    if instance.state.get 'hideCompleted'
        return Tasks.find {checked:{$ne:true}},{sort:{createdAt:-1}}
    return Tasks.find {},{sort:{createdAt:-1}}
incompleteCount=()->
    Tasks.find
        checked:
            $ne:true
    .count()
bodyOnCreated=()->
    this.state = new ReactiveDict()
    true

Template.body.onCreated bodyOnCreated

Template.body.helpers
    tasks:tasks
    incompleteCount:incompleteCount

Template.body.events
    "submit .new-task": (event, template) ->
        event.preventDefault()
        target=event.target
        console.log target
        text=target.text.value
        Tasks.insert
            text:text
            createdAt:new Date()
        target.text.value=''
    'change .hide-completed input':(event,instance)->
        instance.state.set 'hideCompleted',event.target.checked
