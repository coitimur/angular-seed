angular.module('form-wysiwyg', []);

angular.module('app').requires.push('form-wysiwyg');

angular.module('form-wysiwyg')
.component('formWysiwyg', {
    templateUrl: 'partials/form-wysiwyg/form-wysiwyg.template.html',
    controller: function($scope,$theme,dataFactoryModel) {
	  
    }
  });
