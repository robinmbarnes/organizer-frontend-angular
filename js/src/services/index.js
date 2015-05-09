var app = require('angular').module('OrganizerApp');

app.service('TodoManager', [
  '$http',
  '$q',
  'apiUrl',
  require('./TodoManager')
]);

app.factory('MonthDaysGenerator', [require('./MonthDaysGenerator')]);
app.factory('DayHoursGenerator', [require('./DayHoursGenerator')]);
app.service('MonthInformation', [require('./MonthInformation')]);