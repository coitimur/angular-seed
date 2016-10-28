angular.module('form-fileupload', []);

angular.module('app').requires.push('form-fileupload');

angular.module('form-fileupload')
.component('formFileupload', {
    templateUrl: 'partials/form-fileupload/form-fileupload.template.html',
    controller: function($scope,$theme,dataFactoryModel) {
	  
    }
  });
