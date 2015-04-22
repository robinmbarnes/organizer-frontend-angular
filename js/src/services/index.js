var app = require('angular').module('OrganizerApp');

app.service('TodoManager', [
  '$http',
  '$q',
  'apiUrl',
  require('./TodoManager')
]);