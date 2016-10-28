angular.module('ui-panels', []);

angular.module('app').requires.push('ui-panels');

angular.module('ui-panels')
.component('uiPanels', {
    templateUrl: 'partials/ui-panels/ui-panels.template.html',
    controller: function($scope, $theme,$timeout) {
		 
	
    }
});
  


