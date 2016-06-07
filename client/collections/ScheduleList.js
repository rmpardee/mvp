
app.ScheduleList = Backbone.Collection.extend({
  model: app.ScheduleModel
});

app.scheduleList = new app.ScheduleList();