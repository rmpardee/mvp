// view (essentially a controller - no render fn) to handle submission of task item from form
var AppView = Backbone.View.extend({

  el: '#new-task-form',

  // you have to save the events you want the view to care about, otherwise you can't use them later
  events: {
    'submit': 'createTaskOnSubmit'
  },


  initialize: function() {
    // save the text that was input
    this.input = this.$('#task-text');
    // save the frequency that was selected from the dropdown
    this.frequency = this.$('#frequencies-dropdown');
    // whenever the form submits, run the createTaskOnSubmit method
    app.taskList.on('submit', this.createTaskOnSubmit, this);
  },

  //this.input[0].value
  createTaskOnSubmit: function(e) {
    e.preventDefault();
    // add the new task item to the existing taskList collection
    app.taskList.add({name: this.input[0].value, frequency: this.frequency[0].value});
    // reset the input bar to empty
    this.input.val('');
  }
});

var appView = new AppView();
