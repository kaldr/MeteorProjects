
import {Meteor} from 'meteor/meteor'
import {Random} from 'meteor/random'
import { assert } from 'meteor/practicalmeteor:chai';
import {Tasks} from './tasks.js'
;
if (Meteor.isServer) {
  describe('Tasks', (function(_this) {
    return function() {
      return describe('methods', function() {
        var taskId, userId;
        userId = Random.id();
        taskId = '';
        beforeEach(function() {
          Tasks.remove({});
          return taskId = Tasks.insert({
            text: 'test task',
            createdAt: new Date(),
            owner: userId,
            username: "tmeasday"
          });
        });
        return it('can delete owned task', function() {
          var deleteTask, invocation;
          deleteTask = Meteor.server.method_handlers['tasks.remove'];
          invocation = {
            userId: userId
          };
          deleteTask.apply(invocation, [taskId]);
          return assert.equal(Tasks.find().count(), 0);
        });
      });
    };
  })(this));
}
