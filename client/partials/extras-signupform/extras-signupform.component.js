angular.module('extras-signupform', []);

angular.module('app').requires.push('extras-signupform');

angular.module('extras-signupform')
.component('extrasSignupform', {
    templateUrl: 'partials/extras-signupform/extras-signupform.template.html',
    controller: function($scope, $modal,$timeout, $theme) {
		$theme.set('fullscreen', true);

		$scope.$on('$destroy', function() {
		  $theme.set('fullscreen', false);
		});
    }
});
  


