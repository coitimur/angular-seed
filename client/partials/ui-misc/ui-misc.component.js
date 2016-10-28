angular.module('ui-misc', []);

angular.module('app').requires.push('ui-misc');

angular.module('ui-misc')
.component('uiMisc', {
    templateUrl: 'partials/ui-misc/ui-misc.template.html',
    controller: function($scope, $theme,$timeout) {
		$scope.rate = 7;
		$scope.max = 10;
		$scope.isReadonly = false;

		$scope.hoveringOver = function(value) {
		  this.overStar = value;
		  this.percent = 100 * (value / $scope.max);
		};

		$scope.ratingStates = [{
		  stateOn: 'fa-check-circle',
		  stateOff: 'fa-check-circle-o'
		}, {
		  stateOn: 'fa-star',
		  stateOff: 'fa-star-o'
		}, {
		  stateOn: 'fa-heart',
		  stateOff: 'fa-heart-o'
		}, {
		  stateOn: 'fa-heart'
		}, {
		  stateOff: 'fa-heart-o'
		}];
		
		// Carousel
		$scope.myInterval = 5000;
		var slides = $scope.slides = [];
		var images = ['carousel1.jpg', 'carousel2.jpg', 'carousel3.jpg'];
		$scope.addSlide = function() {
		  slides.push({
			image: 'assets/demo/images/' + images[slides.length],
			text: images[slides.length]
		  });
		};
		for (var i = 0; i < 3; i++) {
		  $scope.addSlide();
		}
    }
});
  


