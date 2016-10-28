angular.module('ui-tabs', []);

angular.module('app').requires.push('ui-tabs');

angular.module('ui-tabs')
.component('uiTabs', {
    templateUrl: 'partials/ui-tabs/ui-tabs.template.html',
    controller: function($scope, $theme,$timeout) {
		$scope.oneAtATime = true;

		$scope.groups = [{
		  title: 'Dynamic Group Header - 1',
		  content: 'Dynamic Group Body - 1'
		}, {
		  title: 'Dynamic Group Header - 2',
		  content: 'Dynamic Group Body - 2'
		}];

		$scope.items = ['Item 1', 'Item 2', 'Item 3'];

		$scope.addItem = function() {
		  var newItemNo = $scope.items.length + 1;
		  $scope.items.push('Item ' + newItemNo);
		};

		$scope.status = {
		  isFirstOpen: true,
		  isFirstDisabled: false
		};
	
    }
});
  


