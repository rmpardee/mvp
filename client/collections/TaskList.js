
app.TaskList = Backbone.Collection.extend({
  model: app.TaskModel
  // localStorage: new Store("backbone-dontforget")
});

app.taskList = new app.TaskList();