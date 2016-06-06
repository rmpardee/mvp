$(function(){

  // build a view for the top level of the whole app
  var taskView = new TaskQueueView();

  // put the view onto the screen
  $('body').append(taskView.render());
});
