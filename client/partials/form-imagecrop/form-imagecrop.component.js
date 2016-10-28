angular.module('form-imagecrop', []);

angular.module('app').requires.push('form-imagecrop');

angular.module('form-imagecrop')
.component('formImagecrop', {
    templateUrl: 'partials/form-imagecrop/form-imagecrop.template.html',
    controller: function($scope,$theme,dataFactoryModel) {
		$scope.cropped = false;
		var imgBounds;
		$scope.setBounds = function(bounds) {
		  imgBounds = bounds;
		};
		$scope.selected = function(coords) {
		  $scope.imageWidth = imgBounds[0];
		  $scope.containerWidth = coords.w;
		  $scope.containerHeight = coords.h;
		  $scope.imageTop = -coords.y;
		  $scope.imageLeft = -coords.x;
		  $scope.cropped = true;
		};
    }
  });
