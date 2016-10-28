angular.module('extras-search', []);

angular.module('app').requires.push('extras-search');

angular.module('extras-search')
.component('extrasSearch', {
    templateUrl: 'partials/extras-search/extras-search.template.html',
    controller: function($scope, $modal,$timeout) {
	
    }
});
  


