var app = require('angular').module('OrganizerApp');

app.config(['$routeProvider', function ($routeProvider) {console.log('run');
  $routeProvider
    .when('/todos', {
      controller: 'TodoController',
      templateUrl: 'partials/todos.html'
    })
    .otherwise({
      redirectTo: '/todos'
    });
}]);
