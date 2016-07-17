
import {Meteor} from 'meteor/meteor'
import {check} from 'meteor/check'
import { Mongo } from 'meteor/mongo'
export const Tasks= new Mongo.Collection('tasks')
;
if (Meteor.isServer) {
  Meteor.publish("tasks", function() {
    return Tasks.find({
      $or: [
        {
          "private": {
            $ne: true
          }
        }, {
          owner: this.userId
        }
      ]
    });
  });
}

Meteor.methods({
  'tasks.insert': function(text) {
    check(text, String);
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    return Tasks.insert({
      text: text,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username
    });
  },
  'tasks.remove': function(taskId) {
    check(taskId, String);
    return Tasks.remove(taskId);
  },
  'tasks.setChecked': function(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);
    return Tasks.update(taskId, {
      $set: {
        checked: setChecked
      }
    });
  },
  'tasks.setPrivate': function(taskId, setToPrivate) {
    var task;
    check(taskId, String);
    check(setToPrivate, Boolean);
    task = Tasks.findOne(taskId);
    if (task.owner !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    return Tasks.update(taskId, {
      $set: {
        "private": setToPrivate
      }
    });
  }
});
