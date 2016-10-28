angular.module('extras-login2', []);

angular.module('app').requires.push('extras-login2');

angular.module('extras-login2')
.component('extrasLogin2', {
    templateUrl: 'partials/extras-login2/extras-login2.template.html',
    controller: function($scope, $modal,$timeout,$theme) {
		$theme.set('fullscreen', true);

		$scope.$on('$destroy', function() {
		  $theme.set('fullscreen', false);
		});
    }
});
  


