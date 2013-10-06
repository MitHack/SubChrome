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
		var elem = $(item.targetEl);

		function highlight(elem){
			var originalBorder = elem.css("border");
			elem.css("border","5px solid yellow");
			$timeout(function(){
				elem.css("border",originalBorder);
			},2000);
		}

		if(elem.length) {
			elem[0].click();
			highlight(elem);
		}
		if(item.focusEl){
			highlight($(item.focusEl));
			$timeout(function(){
				$(item.focusEl).focus();
			},400);
		}
	};
});