
var TaskEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><%= name %></td><td><%= frequency %></td>'),

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});