angular
.module('app.header.nav', [])
.component('appHeaderNav', {
    templateUrl: 'layout/app-header-nav/app-header-nav.template.html',
    controller: function($scope, $theme, $timeout, progressLoader,navigation) {
		
		$scope.layoutLoading = true;

		$scope.getLayoutOption = function(key) {
		  return $theme.get(key);
		};
		
		this.nav=navigation;
    }
   }
  );
  
