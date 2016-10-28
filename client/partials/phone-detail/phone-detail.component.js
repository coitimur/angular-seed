angular.module('phone-detail',[]);

angular.module('app').requires.push('phone-detail');

angular.module('app')
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/phone-detail/:id', {
        template: '<phone-detail></phone-detail>',
      });
  }])
.component('phoneDetail', {
    templateUrl: 'partials/phone-detail/phone-detail.template.html',
    controller: 
      function (dataFactoryModel, $routeParams) {
		var modelPhones=dataFactoryModel('api/phones/:id');
        var self = this;

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };

		
		modelPhones.get({'id': $routeParams.id}, function(phone) {
		  self.phone=phone;
		  if(phone.images.length>0)  self.setImage(phone.images[0].img);
        }); 
		
		
      }
  });
