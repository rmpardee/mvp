
var TaskListView = Backbone.View.extend({
  el: '#task-list',

  initialize: function() {
    this.input = this.$('#new-task');

    app.taskList.on('add', this.addOne, this);
    app.taskList.on('reset', this.addAll, this);
    app.taskList.fetch();
  },

  events: {
    'keypress #new-task': 'createTaskOnEnter'
  },

  createTaskOnEnter: function(e) {
    app.taskList.create(this.newAttributes());
    this.input.val('');
  },

  addOne: function(task) {
    var view = new app.TaskEntryView({model: task});
    $('#task-list').append(view.render().el)
  },

  addAll: function() {
    this.$('#task-list').html('');
    app.taskList.each(this.addOne, this);
  },

  newAttributes: function() {
    return {
      name: this.input.val().trim(),
      completed: false
    }
  }


  // render: function() {
  //   this.$el.children().detach();

  //   this.$el.html('<th>Task</th>').append(
  //     this.collection.map(function(task){
  //       return new TaskEntryView({model: task}).render();
  //     })
  //   );
  // }
});

app.taskListView = new TaskListView();
