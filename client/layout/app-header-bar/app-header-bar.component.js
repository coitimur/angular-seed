angular
.module('app.header.bar', [])
.component('appHeaderBar', {
    templateUrl: 'layout/app-header-bar/app-header-bar.template.html',
    controller: function($scope, $theme, $timeout, progressLoader) {
		
		$scope.layoutLoading = true;

		$scope.getLayoutOption = function(key) {
		  return $theme.get(key);
		};
		
		this.bar=[
						{
			name:'Create Post',
			icon:'glyphicon-star',
			color:'tiles-brown',
			action:'url',
			url:'wwww.google.es'	
		},
		{
			name:'Contacts',
			icon:'glyphicon-user',
			color:'tiles-grape',
			action:'url',
			url:'wwww.google.es',
			count:2
		},
		{
			name:'Messages',
			icon:'glyphicon-envelope',
			color:'tiles-primary',
			action:'url',
			url:'wwww.google.es',
		    count:10
		},
		{
			name:'Gallery',
			icon:'glyphicon-camera',
			color:'tiles-inverse',
			action:'url',
			url:'wwww.google.es',
		    count:3
		},
		{
			name:'Settings',
			icon:'glyphicon-cog',
			color:'tiles-midnightblue',
			action:'url',
			url:'wwww.google.es'
		},
		{
			name:'Plugins',
			icon:'glyphicon-wrench',
			color:'tiles-orange',
			action:'url',
			url:'wwww.google.es'
		}
	  ]
		
		
		
    }
   }
  );
  
