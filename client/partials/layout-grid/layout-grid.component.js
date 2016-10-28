angular.module('layout-grid', []);

angular.module('app').requires.push('layout-grid');

angular.module('layout-grid')
.component('layoutGrid', {
    templateUrl: 'partials/layout-grid/layout-grid.template.html',
    controller: function(dataFactoryModel) {
	  
    }
  });
