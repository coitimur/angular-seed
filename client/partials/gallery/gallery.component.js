angular.module('gallery', []);

angular.module('app').requires.push('gallery');

angular.module('gallery')
.component('gallery', {
    templateUrl: 'partials/gallery/gallery.template.html',
    controller: function($scope, $modal,$timeout) {
		
		$scope.galleryFilter = 'all';

		$scope.openImageModal = function($event) {
		  $event.preventDefault();
		  $event.stopPropagation();
		  
		  $modal.open({
			templateUrl: 'imageModalContent.html',
			controller: ['$scope', '$modalInstance', 'src', function($scope, $modalInstance, src) {
			  $scope.src = src;
			  $scope.cancel = function() {
				$modalInstance.dismiss('cancel');
			  };
			}],
			size: 'lg',
			resolve: {
			  src: function() {
				console.log($event.target.src.replace('thumb_', ''));
				return $event.target.src.replace('thmb_', '');
			  }
			}
		  });
		  
		};
    }
});
  


