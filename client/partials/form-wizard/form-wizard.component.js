angular.module('form-wizard', []);

angular.module('app').requires.push('form-wizard');

angular.module('form-wizard')
.component('formWizard', {
    templateUrl: 'partials/form-wizard/form-wizard.template.html',
    controller: function($scope, $modal,$timeout) {
	
    }
});
  


