
var TaskEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><%= name %></td>'),

  initialize: function() {
    console.log("TaskEntryView initialize");
    this.render();
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});