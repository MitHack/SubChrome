'use strict';
function hereDoc(f) {
	return f.toString().
	  replace(/^[^\/]+\/\*!?/, '').
	  replace(/\*\/[^\/]+$/, '');
}

var app = angular.module('TheApp', []);
// app.config(function ($routeProvider) {
//   $routeProvider
//     .when('/', {
//       templateUrl: 'views/main.html',
//       controller: 'MainCtrl'
//     })
// });