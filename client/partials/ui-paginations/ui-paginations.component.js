angular.module('ui-paginations', []);

angular.module('app').requires.push('ui-paginations');

angular.module('ui-paginations')
.component('uiPaginations', {
    templateUrl: 'partials/ui-paginations/ui-paginations.template.html',
    controller: function($scope, $window) {
		$scope.totalItems = 64;
		$scope.currentPage = 4;

		$scope.pageChanged = function() {
		  console.log('Page changed to: ' + $scope.currentPage);
		};

		$scope.maxSize = 5;
		$scope.bigTotalItems = 175;
		$scope.bigCurrentPage = 1;

		$scope.dpWithCallback = {
		  onSelectedDateChanged: function(event, date) {
			$window.alert('Selected date: ' + $window.moment(date).format('Do, MMM YYYY'));
		  }
		};
    }
});
  


