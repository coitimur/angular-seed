angular.module('icons-fontawesome', []);

angular.module('app').requires.push('icons-fontawesome');

angular.module('icons-fontawesome')
.component('iconsFontawesome', {
    templateUrl: 'partials/icons-fontawesome/icons-fontawesome.template.html',
    controller: function($scope, $modal,$timeout,$theme) {
		
    }
});
  


