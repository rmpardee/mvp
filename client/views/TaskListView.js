
var TaskListView = Backbone.View.extend({

  tagName: 'table',

  el: '#task-list',

  collection: app.taskList,

  initialize: function() {
    // whenever something is added to the collection (which happens in the AppView controller), rerender
    this.collection.on('add', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    // inside the <table> html, add the <th> and then append each thing in the collection
    this.$el.html('<h1>My Tasks</h1>').append(
      this.collection.map(function(task){
        return new TaskEntryView({model: task}).render();
      })
    );
  }
});

app.taskListView = new TaskListView();
