
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

var testDate = 'Tue Jun 14 2016 15:11:35 GMT-0700 (PDT)';
// console.log("testDate: ", formatDate(testDate));
var today = new Date();
console.log("today's date: ", formatDate(today));

