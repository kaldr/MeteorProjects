
import { Template } from 'meteor/templating'
import { Tasks } from '../api/tasks.js'
import './task.html'
;
Template.task.helpers({
  create: function() {},
  rendered: function() {},
  destroyed: function() {}
});

Template.task.events({
  "click .toggle-checked": function(event, template) {
    return Tasks.update(this._id, {
      $set: {
        checked: !this.checked
      }
    });
  },
  'click .delete': function() {
    return Tasks.remove(this._id);
  }
});
