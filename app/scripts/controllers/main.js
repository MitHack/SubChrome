'use strict';

// $scope.permissions = permissions.all(); permissions
app.controller('MainCtrl', function ($scope, androidapps) {
	$scope.apps = [];
	$scope.selected = null;

	$scope.search = function(term) {
		$scope.apps = androidapps.query(term);
	};

	$scope.select = function(item) {
		$scope.selected = item;
		$scope.term = item.name;
	};
});