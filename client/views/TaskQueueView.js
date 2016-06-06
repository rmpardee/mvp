
var TaskQueueView = Backbone.View.extend({
  tagName: 'table',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Tasks</th>').append(
      this.collection.map(function(task){
        return new TaskQueueEntryView({model: task}).render();
      })
    );
  }
});
