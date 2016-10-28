angular.module('layout-horizontal2', []);

angular.module('app').requires.push('layout-horizontal2');

angular.module('layout-horizontal2')
.component('layoutHorizontal2', {
    templateUrl: 'partials/layout-horizontal2/layout-horizontal2.template.html',
    controller: function($scope,$theme,dataFactoryModel) {
	  'use strict';
		var isHorizontal = $theme.get('layoutHorizontal');
		var isLargeIcons = $theme.get('layoutHorizontalLargeIcons');
		$theme.set('layoutHorizontal', true);
		$theme.set('layoutHorizontalLargeIcons', true);

		$scope.$on('$destroy', function() {
		  if (!isHorizontal) {
			$theme.set('layoutHorizontal', false);
		  }
		  if (!isLargeIcons) {
			$theme.set('layoutHorizontalLargeIcons', false);
		  }
		});
    }
  });
