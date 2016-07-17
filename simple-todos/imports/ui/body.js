
import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { ReactiveDict } from 'meteor/reactive-dict'
import { Tasks } from '../api/tasks.js'
import './task.js'
import './body.html'
;
var bodyOnCreated, incompleteCount, tasks, text;

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
  Meteor.subscribe("tasks");
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
    text = target.text.value;
    Meteor.call('tasks.insert', text);
    return target.text.value = '';
  },
  'change .hide-completed input': function(event, instance) {
    return instance.state.set('hideCompleted', event.target.checked);
  }
});

text = "重要通知：\n由于最近新系统仍然存在很多问题，经过董事会和信息中心的讨论，我们决定下周一启用老系统。本周（7月9日-7月17日）所有在新系统中添加的订单，今晚会导入回老系统，届时，新系统依旧开放可供数据对比。\n下周一开始请在旧系统中操作。\n由于时间关系，无法将所有数据恢复，本周所有审批流程请重新提交，重新审核，其他如意向客户、导游排班、物品认领等数据，下周逐步导回老系统。";
