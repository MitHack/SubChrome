'use strict';

app.controller('MainCtrl', function ($scope) {
	$scope.commands = [1,2,3];
	$scope.command = null;
	$scope.term = "";

	$scope.search = function(term) {
		$scope.commands = [1,2,3];
	};

	$scope.select = function(item) {
		$scope.command = item;
		$scope.term = "";
	};
});