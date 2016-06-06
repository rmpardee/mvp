
var TaskEntryView = Backbone.View.extend({

  tagName: 'li',

  template: _.template($('#item-template').html()),

  render: function() {
    return this.$el.html(this.template(this.model.toJSON()));
  }


});