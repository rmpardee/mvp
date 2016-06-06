
// var AppView = Backbone.View.extend({

//   el: '#dont-forget-app',

//   // template: _.template('<td>(<%= name %>)</td><td><%= frequency %></td>'),
//   template: _.template('<h3>Hello (<%= name %>)</h3>'),

//   initialize: function() {
//     this.input = this.$('#new-task');

//     app.taskList.on('add', this.addOne, this);
//     app.taskList.on('reset', this.addAll, this);
//     app.taskList.fetch();
//   },

  // render: function(){
  //   // this = appView (instance of AppView view)
  //   // this.$el = Backbone placeholder for templated content
  //   this.$el.html(this.template({name: 'Ruth!'}));
  // },

  // events: {
  //   'keypress #new-task': 'createTaskOnEnter'
  // },

  // createTaskOnEnter: function(e) {
  //   app.taskList.create(this.newAttributes());
  //   this.input.val('');
  // },

  // addOne: function(task) {
  //   var view = new app.TaskEntryView({model: task});
  //   $('#task-list').append(view.render().el)
  // },

  // addAll: function() {
  //   this.$('#task-list').html('');
  //   app.taskList.each(this.addOne, this);
  // },

  // newAttributes: function() {
  //   return {
  //     name: this.input.val().trim(),
  //     completed: false
  //   }
  // }
// });


