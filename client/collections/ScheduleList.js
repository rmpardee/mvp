
app.ScheduleList = Backbone.Collection.extend({
  model: app.ScheduleModel,
  comparator: function(m) {
        return m.get('date').getTime();
  }
});

app.scheduleList = new app.ScheduleList();