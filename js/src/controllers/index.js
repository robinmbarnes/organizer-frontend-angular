var app = require('angular').module('OrganizerApp');

app.controller('TodoController', [
  '$scope',
  'TodoManager',
  require('./TodoController')
]);

app.controller('CalendarMonthController', [
  '$scope',
  '$routeParams',
  'MonthDaysGenerator',
  'MonthInformation',
  require('./CalendarMonthController')
]);

app.controller('CalendarDayController', [
  '$scope',
  'DayHoursGenerator',
  require('./CalendarDayController')
]);