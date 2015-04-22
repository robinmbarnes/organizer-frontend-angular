var angular = require('angular');
var angularAnimate = require('angular-animate');
var angularRoute = require('angular-route');
var app = angular.module('OrganizerApp', ['ngAnimate', 'ngRoute']);
var conf = require('./conf/conf');

app.value('apiUrl', conf.apiUrl);

require('./routes');
require('./services');
require('./directives');
require('./controllers');