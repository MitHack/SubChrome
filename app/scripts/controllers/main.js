'use strict';

app.controller('MainCtrl', function ($scope, $timeout, $window) {
	$scope.commands = [];
	$scope.command = null;
	$scope.term = "";

	$scope.search = function(term) {
		$scope.commands = _.filter(document.getElementsByTagName("a"),function(a){ 
			return a.innerText.toLowerCase().indexOf(term.toLowerCase()) !== -1 && a.innerText !== ""
		})
	};

	$scope.select = function(item) {
		$scope.command = item;
		$scope.term = "";
		
		var elem = $(item);

		if(0 == elem.length){
			return;
		}

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
	};
});