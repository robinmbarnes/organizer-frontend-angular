var app = require('angular').module('OrganizerApp');

app.service('TodoManager', [
  '$http',
  '$q',
  'apiUrl',
  require('./TodoManager')
]);

app.factory('MonthDaysGenerator', [require('./MonthDaysGenerator')]);
app.service('MonthInformation', [require('./MonthInformation')]);