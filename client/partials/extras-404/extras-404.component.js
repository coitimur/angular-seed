angular.module('extras-404', []);

angular.module('app').requires.push('extras-404');

angular.module('extras-404')
.component('extras404', {
    templateUrl: 'partials/extras-404/extras-404.template.html',
    controller: function($scope, $modal,$timeout,$theme) {
		$theme.set('fullscreen', true);

		$scope.$on('$destroy', function() {
		  $theme.set('fullscreen', false);
		});
    }
});
  


