var ScheduleEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><%= name %></td><td><%= date %></td>'),

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});