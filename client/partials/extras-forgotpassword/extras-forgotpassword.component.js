angular.module('extras-forgotpassword', []);

angular.module('app').requires.push('extras-forgotpassword');

angular.module('extras-forgotpassword')
.component('extrasForgotpassword', {
    templateUrl: 'partials/extras-forgotpassword/extras-forgotpassword.template.html',
    controller: function($scope, $modal,$timeout,$theme) {
		$theme.set('fullscreen', true);

		$scope.$on('$destroy', function() {
		  $theme.set('fullscreen', false);
		});
    }
});
  


