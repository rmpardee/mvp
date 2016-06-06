var app = {};

app.TaskModel = Backbone.Model.extend({
  defaults: {
    name: '',
    completed: false
  }
});