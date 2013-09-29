'use strict';

app.controller('MainCtrl', function ($scope, permissions) {
	$scope.permissions = permissions.all();
});