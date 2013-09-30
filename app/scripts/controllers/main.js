'use strict';

// $scope.permissions = permissions.all(); permissions
app.controller('MainCtrl', function ($scope, androidapps, simplepermissions) {
	var permissions = simplepermissions.all();
	$scope.apps = androidapps.all();
	$scope.selected_app = null;
	$scope.term = "";


	function merge(selected_app){
		return _.transform(selected_app.perms, function(result, perms, group){ 
		    result[permissions[group].text] = _.map(perms, function(perm){ 
		        return permissions[group].perms[perm]; 
		    });
		    return result;
		});
	};

	$scope.search = function(term) {
		$scope.apps = androidapps.query(term);
	};

	$scope.select = function(item) {
		var sel = _.cloneDeep(item);
		sel.permissions = merge(sel);
		$scope.selected_app = sel;
		$scope.term = item.name;
	};

	$scope.select($scope.apps[1]);
});