
var TaskListView = Backbone.View.extend({

  tagName: 'table',

  el: '#task-list-div',

  collection: app.taskList,

  initialize: function() {
    this.collection.on('add', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    // this.$el.empty();

    this.$el.html('<th>Task List</th>').append(this.collection/*.models*/.map(function(task){
      console.log("task: ", task);
      return new TaskEntryView({model: task}).render();
    }));

    // console.log("tasksRendered: ", tasksRendered);
    // this.$el.append(tasksRendered);
  }
});

app.taskListView = new TaskListView();
// $('body').append(app.taskListView.render());
