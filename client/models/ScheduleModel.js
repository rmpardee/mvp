
app.ScheduleModel = Backbone.Model.extend({
  defaults: {
    name: '',
    date: {
      options: ['today', 'tomorrow']
    }
  }
});