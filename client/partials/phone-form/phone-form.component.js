angular.module('phone-form', []);

angular.module('app').requires.push('phone-form');

angular.module('phone-form')
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/phone-form/:id', {
        template: '<phone-form></phone-form>',
      });
  }])
.component('phoneForm', {
	templateUrl: 'partials/phone-form/phone-form.template.html',
	controller:  function PhoneFormController(dataFactoryModel, $routeParams) {
		var modelPhone=dataFactoryModel('api/phones/:id');
		
		var self = this;

		self.setImage = function setImage(imageUrl) {
		  self.mainImageUrl = imageUrl;
		};

		modelPhone.get({'id': $routeParams.id}, function(phone) {
			self.phone= phone;
			if(phone.images.length>0) self.setImage(phone.images[0].img);
		}); 
		
		self.update=function(){
			modelPhone.update(self.phone,function (result) {     
				if(result.success){
					  alert('OK','UPDATE PHONE','La modificación se ha realizado correctamente');
				}else{
					alert('error','UPDATE PHONE','No ha sido posible realizar las modificaciones');
				}
				
			},function(err){
				alert('error','UPDATE PHONE',angular.toJson(err));
			});
		
		}
		
		
		self.metaFields={
					   "id":{"name":"Id", "type":"text", "required":true,"showInForm":false,"showInDetails":false,"category":"Identity"},
					   "images":{"name":"images", "type":"array", "required":false,"showInForm":false,"showInDetails":false,"category":"Identity"},
					   
					   "identifier":{"name":"Identifier", "type":"text", "required":false,"showInForm":true,"showInDetails":false,"category":"Identity"},
					   "name":{"name":"Name", "type":"text", "required":true,"showInForm":true,"showInDetails":false,"category":"Identity"},
					   "description":{"name":"Descripcion", "type":"textarea", "required":false,"showInDetails":false,"showInForm":true,"category":"Identity"},
					   "date":{"name":"Date", "type":"date", "required":false,"showInForm":true,"showInDetails":false,"category":"Identity"},
					   "email":{"name":"Email", "type":"email", "required":false,"showInForm":true,"showInDetails":false,"category":"Identity"},
					   
					   "availability":{"name":"Avalaibility", "type":"text", "required":false,"showInForm":true,"showInDetails":true,"category":"Availability and Networks"},
					   
					   "battery_standbytime":{"name":"Battery Standby Time", "type":"text", "required":false,"showInForm":true,"showInDetails":true,"category":"Battery"},
					   "battery_talktime":{"name":"Battery Talk Time", "type":"text", "required":false,"showInForm":true,"showInDetails":true,"category":"Battery"},
					   "battery_type":{"name":"Battery Type", "type":"text", "required":false,"showInForm":true,"showInDetails":true,"category":"Battery"},
					   
					   "storage_flash":{"name":"Storage Flash", "type":"text", "required":false,"showInForm":true,"showInDetails":true,"category":"Storage and Memory"},
					   "storage_ram":{"name":"Storage Ram", "type":"text", "required":false,"showInForm":true,"showInDetails":true,"category":"Storage and Memory"},
					   
					   "connectivity_bluetooth":{"name":"Connecitivity Bluetooth", "type":"text", "required":false,"showInForm":true,"showInDetails":true,"category":"Connectivity"},
					   "connectivity_cell":{"name":"Connectivity Cell", "type":"textarea", "required":false,"showInForm":true,"showInDetails":true,"category":"Connectivity"},
					   "connectivity_gps":{"name":"Connectivity GPS", "type":"checkbox", "required":false,"showInForm":true,"showInDetails":true,"category":"Connectivity"},
					   "connectivity_infrared":{"name":"Connectivity Infrared", "type":"checkbox", "required":false,"showInForm":true,"showInDetails":true,"category":"Connectivity"},
					   "connectivity_wifi":{"name":"Connectiviby Wifi", "type":"text", "required":false,"showInForm":true,"showInDetails":true,"category":"Connectivity"},
					   
					   "android_os":{"name":"Android OS", "type":"text", "required":false,"showInForm":true,"showInDetails":true,"category":"Android"},
					   "android_ui":{"name":"Android UI", "type":"text", "required":false,"showInForm":true,"showInDetails":true,"category":"Android"},
					   
					   "sizeandweight_dimensions":{"name":"Dimension", "type":"text", "required":false,"showInForm":true,"showInDetails":true,"category":"Size and Weight"},
					   "sizeandweight_weight":{"name":"Weight", "type":"text", "required":false,"showInForm":true,"showInDetails":true,"category":"Size and Weight"},
					   
					   "display_screenresolution":{"name":"Display Screen Resolution", "type":"text", "required":false,"showInForm":true,"showInDetails":true,"category":"Display"},
					   "display_screensize":{"name":"Display Screen Size", "type":"text", "required":false,"showInForm":true,"showInDetails":true,"category":"Display"},
					   "display_touchscreen":{"name":"Display Touch Screen", "type":"checkbox", "required":false,"showInForm":true,"showInDetails":true,"category":"Display"},
					   
					   "hardware_accelerometer":{"name":"Hardware Accelerometer", "type":"text", "required":false,"showInForm":true,"showInDetails":true,"category":"Hardware"},
					   "hardware_audiojack":{"name":"Hardware Audio Jack", "type":"text", "required":false,"showInForm":true,"showInDetails":true,"category":"Hardware"},
					   "hardware_cpu":{"name":"Hardware CPU", "type":"text", "required":false,"showInForm":true,"showInDetails":true,"category":"Hardware"},
					   "hardware_fmradio":{"name":"Hardware FM Radio", "type":"checkbox", "required":false,"showInForm":true,"showInDetails":true,"category":"Hardware"},
					   "hardware_physicalkeyboard":{"name":"Hardware Physical Keyboard", "type":"checkbox", "required":false,"showInForm":true,"showInDetails":true,"category":"Hardware"},
					   "hardware_usb":{"name":"Hardware USB", "type":"text", "required":false,"showInForm":true,"showInDetails":true,"category":"Hardware"},
					   
					   "camera_features":{"name":"Camera Feactures", "type":"text", "required":false,"showInForm":true,"showInDetails":true,"category":"Camera"},
					   "camera_features_primary":{"name":"Camera Feactures Primary", "type":"text", "required":false,"showInForm":true,"showInDetails":true,"category":"Camera"},
					   
					   "additionalfeatures":{"name":"Adicional Feactures", "type":"textarea", "required":false,"showInForm":true,"showInDetails":true,"category":"Additional Features"}
					   
					
					}
				
			}
			
})
.filter('orderProperties',function(){
		return function(obj){
			return _.sortKeysBy(obj);
		}
});
  


