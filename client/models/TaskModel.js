var app = {};

app.TaskModel = Backbone.Model.extend({
  defaults: {
    name: '',
    frequency: 1
  }
});