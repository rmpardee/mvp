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

  createTaskOnSubmit: function(e) {
    e.preventDefault();
    // add the new task item to the existing taskList collection
    var name = this.input[0].value;
    var frequency = this.frequency[0].value;
    app.taskList.add({name: name, frequency: frequency});
    // reset the form to its original state
    this.input.val('');
    this.frequency.val('weekly');

    // pass the name onto the next helper function
    this.createScheduledTasks(name, frequency);    
  },

  createScheduledTasks: function(name, frequency) {
    // add the new scheduled items to the existing scheduleList collection

    var conversion = {
      weekly: 7,
      fortnightly: 14,
      monthly: 30,
      'six-months': 30*6,
      annually: 365
    }

    var todaysDate = new Date();

    for (var i = 0; i < 3; i++) {
      var incrementedDate = todaysDate.getDate() + conversion[frequency];
      var newDate = new Date(todaysDate.setDate(incrementedDate));
      app.scheduleList.add({name: name, date: newDate});
    }
  }
});

var appView = new AppView();
