(function(){

	function hereDoc(f) {
		return f.toString().
		  replace(/^[^\/]+\/\*!?/, '').
		  replace(/\*\/[^\/]+$/, '');
	}
	var inject = hereDoc(function() {
	/*!
<div ng-controller="MainCtrl" id='SubChrome'>
	<typeahead class="search" items="commands" term="term" search="search(term)" select="select(item)">
	  <ul class="dropdown-menu" role="menu">
	    <li typeahead-item="command" ng-repeat="command in commands" role="presentation" class="results">
	       <a href="#" role="menuitem" class="name">{{ command.name }}</a>
	    </li>
	  </ul>
	</typeahead>
</div
	*/});
	var div = $("<div>").html(inject)[0];
	angular.bootstrap(div, ['TheApp']);

	$(document.body).prepend(div);
})();