'use strict';

app.controller('MainCtrl', function ($scope) {
	var commands = [
		"update status",
		"add photos or videos",
		"go back to home page",
		"edit profile",
		"go to your photos",
		"friend requests"
	];

	$scope.commands = commands;
	$scope.command = null;
	$scope.term = "";

	$scope.search = function(term) {
		$scope.commands = _.filter(commands, function(v){
			return v.toLowerCase().indexOf(term.toLowerCase()) !== -1;
		});
	};

	$scope.select = function(item) {
		$scope.command = item;
		$scope.term = "";
	};
});