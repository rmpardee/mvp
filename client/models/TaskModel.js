var app = {};

app.TaskModel = Backbone.Model.extend({
  defaults: {
    name: '',
    frequency: {
      options: ['weekly', 'fortnightly', 'monthly', 'six-months', 'annually']
    }
  }
});