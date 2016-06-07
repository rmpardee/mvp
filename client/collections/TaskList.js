
app.TaskList = Backbone.Collection.extend({
  model: app.TaskModel
});

app.taskList = new app.TaskList();