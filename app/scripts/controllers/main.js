'use strict';

app.controller('MainCtrl', function ($scope) {
	var commands = null;
    if (site) {
        commands = site.actions;
    }

	$scope.commands = commands;
	$scope.command = null;
	$scope.term = "";

	$scope.search = function(term) {
		$scope.commands = _.filter(commands, function(v){
			return v.name.toLowerCase().indexOf(term.toLowerCase()) !== -1;
		});
	};

	$scope.select = function(item) {
		$scope.command = item;
		$scope.term = "";
	};
});