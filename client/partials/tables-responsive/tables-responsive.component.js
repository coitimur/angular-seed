angular.module('tables-responsive', []);

angular.module('app').requires.push('tables-responsive');

angular.module('tables-responsive')
.component('tablesResponsive', {
    templateUrl: 'partials/tables-responsive/tables-responsive.template.html',
    controller: function($scope, $modal,$timeout,$theme) {
		
    }
});
  


