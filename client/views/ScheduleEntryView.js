var ScheduleEntryView = Backbone.View.extend({

  tagName: 'tr',

  // attributes: {
  //   class: '.col-xs-12'
  // },

  template: _.template('<td><%= name %></td><td><%= date %></td>'),

  render: function() {
    var formattedAttribs = {
      name: this.model.attributes.name,
      date: formatDate(this.model.attributes.date)
    }
    return this.$el.html(this.template(formattedAttribs));
  }
});