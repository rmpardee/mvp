
// DATE HELPERS

var monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];

var formatDate = function(date) {
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return monthNames[monthIndex] + ' ' + day + ', ' + year;
};

var frequencyNames = {
  weekly: 'Every Week',
  fortnightly: 'Every Two Weeks',
  monthly: 'Every Month',
  'six-months': 'Every 6 Months',
  annually: 'Every Year'
}

var formatFrequency = function(freq) {
  return frequencyNames[freq];
}