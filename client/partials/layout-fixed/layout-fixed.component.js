angular.module('layout-fixed', []);

angular.module('app').requires.push('layout-fixed');

angular.module('layout-fixed')
.component('layoutFixed', {
    templateUrl: 'partials/layout-fixed/layout-fixed.template.html',
    controller: function($scope,$theme,dataFactoryModel) {
		
		$theme.set('layoutBoxed', true);

		$scope.$on('$destroy', function() {
		  $theme.set('layoutBoxed', false);
		});
    }
  });
