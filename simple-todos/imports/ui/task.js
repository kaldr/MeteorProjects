
import {Meteor} from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Tasks } from '../api/tasks.js'
import './task.html'
;
Template.task.helpers({
  isOwner: function() {
    return this.owner === Meteor.userId();
  }
});

Template.task.events({
  "click .toggle-checked": function(event, template) {
    return Meteor.call('tasks.setChecked', this._id, !this.checked);
  },
  'click .delete': function() {
    return Meteor.call('tasks.remove', this._id);
  },
  "click .toggle-private": function() {
    return Meteor.call("tasks.setPrivate", this._id, !this["private"]);
  }
});
