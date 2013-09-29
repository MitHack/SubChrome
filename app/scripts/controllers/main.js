'use strict';

app.controller('MainCtrl', function ($scope) {
	$scope.msg = hereDoc(function() {
/*!allo*/
	});
	$scope.awesomeThings = ['a', 'b'];
});