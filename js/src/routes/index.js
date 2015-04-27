var app = require('angular').module('OrganizerApp');

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/todos', {
      controller: 'TodoController',
      templateUrl: 'partials/todos.html'
    })
    .when('/calendar', {
      controller: 'CalendarMonthController',
      templateUrl: 'partials/calendar-month.html'
    })
    .when('/calendar/:year/:month', {
      controller: 'CalendarMonthController',
      templateUrl: 'partials/calendar-month.html'
    })
    .otherwise({
      redirectTo: '/todos'
    });
}]);
