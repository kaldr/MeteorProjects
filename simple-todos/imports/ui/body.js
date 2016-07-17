
import { Template } from 'meteor/templating'
import { ReactiveDict } from 'meteor/reactive-dict'
import { Tasks } from '../api/tasks.js'
import './task.js'
import './body.html'

;
var bodyOnCreated, incompleteCount, tasks;

tasks = function() {
  var instance;
  instance = Template.instance();
  if (instance.state.get('hideCompleted')) {
    return Tasks.find({
      checked: {
        $ne: true
      }
    }, {
      sort: {
        createdAt: -1
      }
    });
  }
  return Tasks.find({}, {
    sort: {
      createdAt: -1
    }
  });
};

incompleteCount = function() {
  return Tasks.find({
    checked: {
      $ne: true
    }
  }).count();
};

bodyOnCreated = function() {
  this.state = new ReactiveDict();
  return true;
};

Template.body.onCreated(bodyOnCreated);

Template.body.helpers({
  tasks: tasks,
  incompleteCount: incompleteCount
});

Template.body.events({
  "submit .new-task": function(event, template) {
    var target, text;
    event.preventDefault();
    target = event.target;
    console.log(target);
    text = target.text.value;
    Tasks.insert({
      text: text,
      createdAt: new Date()
    });
    return target.text.value = '';
  },
  'change .hide-completed input': function(event, instance) {
    return instance.state.set('hideCompleted', event.target.checked);
  }
});
