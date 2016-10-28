angular.module('tables-basic', []);

angular.module('app').requires.push('tables-basic');

angular.module('tables-basic')
.component('tablesBasic', {
    templateUrl: 'partials/tables-basic/tables-basic.template.html',
    controller: function($scope, $theme,$timeout) {
		$scope.data = {
			headings: ['#', 'First Name', 'Last Name', 'Username'],
			rows: [
				['1', 'Mark', 'Otto', '@mdo'],
				['2', 'Jacob', 'Thornton', '@fat'],
				['3', 'Larry', 'the Bird', '@twitter']
			]
		};
	
	
	
    }
});
  


