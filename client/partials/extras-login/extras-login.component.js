angular.module('extras-login', []);

angular.module('app').requires.push('extras-login');

angular.module('extras-login')
.component('extrasLogin', {
    templateUrl: 'partials/extras-login/extras-login.template.html',
    controller: function($scope, $modal,$timeout,$theme) {
		$theme.set('fullscreen', true);

		$scope.$on('$destroy', function() {
		  $theme.set('fullscreen', false);
		});
    }
});
  


