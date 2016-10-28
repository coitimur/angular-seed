angular.module('extras-500', []);

angular.module('app').requires.push('extras-500');

angular.module('extras-500')
.component('extras500', {
    templateUrl: 'partials/extras-500/extras-500.template.html',
    controller: function($scope, $modal,$timeout,$theme) {
		$theme.set('fullscreen', true);

		$scope.$on('$destroy', function() {
		  $theme.set('fullscreen', false);
		});
    }
});
  


