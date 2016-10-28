angular.module('form-layout', []);

angular.module('app').requires.push('form-layout');

angular.module('form-layout')
.component('formLayout', {
    templateUrl: 'partials/form-layout/form-layout.template.html',
    controller: function($scope, $modal,$timeout) {
	
    }
});
  


