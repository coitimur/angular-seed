angular.module('layout-horizontal', []);

angular.module('app').requires.push('layout-horizontal');

angular.module('layout-horizontal')
.component('layoutHorizontal', {
    templateUrl: 'partials/layout-horizontal/layout-horizontal.template.html',
    controller: function($scope,$theme,dataFactoryModel) {
		var isHorizontal = $theme.get('layoutHorizontal');
		$theme.set('layoutHorizontal', true);

		$scope.$on('$destroy', function() {
		  if (!isHorizontal) {
			$theme.set('layoutHorizontal', false);
		  }
		});
    }
  });
