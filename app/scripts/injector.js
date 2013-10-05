(function(){

	function hereDoc(f) {
		return f.toString().
		  replace(/^[^\/]+\/\*!?/, '').
		  replace(/\*\/[^\/]+$/, '');
	}
	var inject = hereDoc(function() {
	/*!
<typeahead class="search" items="commands" term="term" search="search(term)" select="select(item)">
  <ul>
    <li typeahead-item="command" ng-repeat="command in commands" class="results">
      <h3 class="name">{{ command }}</h3>
    </li>
  </ul>
</typeahead>
	*/});
	var div = $("<div>").html(inject)[0];
	angular.bootstrap(div, ['TheApp']);

	$(document.body).prepend(div);
})();