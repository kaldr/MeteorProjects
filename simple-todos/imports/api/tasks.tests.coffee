`
import {Meteor} from 'meteor/meteor'
import {Random} from 'meteor/random'
import { assert } from 'meteor/practicalmeteor:chai';
import {Tasks} from './tasks.js'
`
if Meteor.isServer
    describe 'Tasks',()=>
        describe 'methods',()=>
            userId=Random.id()
            taskId=''
            beforeEach ()=>
                Tasks.remove {}
                taskId=Tasks.insert
                    text:'test task'
                    createdAt:new Date()
                    owner:userId
                    username:"tmeasday"
            it 'can delete owned task',()=>
                deleteTask=Meteor.server.method_handlers['tasks.remove']
                invocation={userId}
                deleteTask.apply invocation,[taskId]
                assert.equal Tasks.find().count(),0
