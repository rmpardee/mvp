var AppView = Backbone.View.extend({

  el: '#new-task',

  events: {
    'submit': 'createTaskOnSubmit'
  },


  initialize: function() {
    this.input = this.$('#task-text');

    app.taskList.on('submit', this.createTaskOnSubmit, this);
    app.taskList.fetch();
  },

  createTaskOnSubmit: function(e) {
    e.preventDefault();
    app.taskList.add({name: this.input[0].value});
    this.input.val('');
    console.log("app.taskList: ", app.taskList);
  }

});

var appView = new AppView();
