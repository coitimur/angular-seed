angular
.module('app.side.bar', [])
.component('appSideBar', {
    templateUrl: 'layout/app-side-bar/app-side-bar.template.html',
    controller: function($scope, $theme, $timeout,$location, progressLoader,navigation) {
		this.nav=navigation;
        
	//	$scope.$watch('nav.searchQuery', function(newVal, oldVal) {
	//		var a=newVal;
	//	});
       // this.contacts = contacts;

		$scope.$watch(function () {
			return navigation.searchQuery;
		}, function (newValue, oldValue) {
			var a=newValue;
			
		});	
    }
   }
  );
  
