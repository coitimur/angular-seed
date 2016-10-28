angular.module('extras-registration', []);

angular.module('app').requires.push('extras-registration');

angular.module('extras-registration')
.component('extrasRegistration', {
    templateUrl: 'partials/extras-registration/extras-registration.template.html',
    controller: function($scope, $modal,$timeout) {
		$scope.checking = false;
		$scope.checked = false;
		$scope.checkAvailability = function() {
		  if ($scope.reg_form.username.$dirty === false) {
			return;
		  }
		  $scope.checking = true;
		  $timeout(function() {
			$scope.checking = false;
			$scope.checked = true;
		  }, 500);
		};
    }
});
  


