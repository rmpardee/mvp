var ScheduleEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><%= name %></td><td><%= date %></td>'),

  render: function() {
    // var attribs = this.model.attributes;
    var formattedAttribs = {
      name: this.model.attributes.name,
      date: formatDate(this.model.attributes.date)
    }
    return this.$el.html(this.template(formattedAttribs));
  }
});