angular.module('phone-list', []);

angular.module('app').requires.push('phone-list');

angular.module('phone-list')
.component('phoneList', {
    templateUrl: 'partials/phone-list/phone-list.template.html',
    controller: function PhoneListController(dataFactoryModel) {
	  var modelPhones=dataFactoryModel('api/phones');
      var self = this;
      self.orderProp = 'age';

      /*$http.get('api/phones').then(function(response) {
        self.phones = response.data;
      });
	  */
		modelPhones.getAll({}, function(phones) {
          //self.setImage(phone.images[0].img);
		  self.phones=phones;
        }); 
    }
  });
