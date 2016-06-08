
var TaskEntryView = Backbone.View.extend({

  tagName: 'tr',

  // attributes: {
  //   class: '.col-xs-12'
  // },

  template: _.template('<td><%= name %></td><td><%= frequency %></td>'),

  render: function() {
    var formattedAttribs = {
      name: this.model.attributes.name,
      frequency: formatFrequency(this.model.attributes.frequency)
    }
    return this.$el.html(this.template(formattedAttribs));
  }
});