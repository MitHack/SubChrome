'use strict';

app.controller('MainCtrl', function ($scope, $timeout) {
	$scope.commands = typeof site !== "undefined" ? site.commands : null;
	$scope.command = null;
	$scope.term = "";

	$scope.search = function(term) {
        if (typeof site === "undefined") return;
		$scope.commands = _.filter(site.commands, function(v){
			return v.name.toLowerCase().indexOf(term.toLowerCase()) !== -1;
		});
	};

	$scope.select = function(item) {
		$scope.command = item;
		$scope.term = "";
		$(item.targetEl)[0].click();
		var foo = $(item.targetEl);
		if(item.focusEl){
			$timeout(function(){
				$(item.focusEl).focus();
			},400);
		}
	};
});