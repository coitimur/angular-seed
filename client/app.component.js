angular
  .module('app', [
	'oc.lazyLoad',
    'flow',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'ui.sortable',
	'ui.tree',
    'easypiechart',
	'ngGrid',
    'NgSwitchery',
    'sun.scrollable',
    'ui.bootstrap',
    'ui.select',
	'ngDraggable',
	'textAngular',
	'xeditable',
	'angular-skycons',
	
    'app.header',
    'app.header.bar',
	'app.header.nav',
	'app.side.bar',
	'app.footer',
	'app.info.bar', 
	
	'layout.services.theme',
	'layout.services.notifications',
	'layout.services.navigation',
	'layout.services.messages',
	
	'core.services',
	'core.factories.model',
	'core.directives.form',
	'core.directives.ui',
	'core.directives.panels',
	'core.directives.calendar',
	'core.directives.gallery',
	'core.directives.gmaps',
	'core.directives.jqvmaps',
	'core.directives.chart.morris',
	'core.directives.chart.flot',
	'core.directives.chart.canvas',
	'core.directives.chart.sparklines',
	'core.templates',
	'core.decorator.template_overrides', 
	
	
	'tiles.panel',
	'task.panel',
	'vector.maps.panel'
	

  ])
  .config(['$provide', '$routeProvider', function($provide, $routeProvider) {
    'use strict';
    $routeProvider
      .when('/', {
        template: '<home></home>',
        resolve: {
          loadCalendar: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([
              'bower_components/fullcalendar/fullcalendar.js',
            ]);
          }]
        }
      })
      .when('/:templateFile', {
        template: function(param) {
          return '<' + param.templateFile + '></'+ param.templateFile + '>';
        }
      })
      .otherwise({
        redirectTo: '/'
      });
	  
  }])
  .component('app', {
    templateUrl: 'app.template.html',
    controller: function($scope, $theme, $timeout, progressLoader, $location) {
		 // $scope.layoutIsSmallScreen = false;
		$scope.layoutFixedHeader = $theme.get('fixedHeader');
		$scope.layoutPageTransitionStyle = $theme.get('pageTransitionStyle');
		$scope.layoutDropdownTransitionStyle = $theme.get('dropdownTransitionStyle');
		$scope.layoutPageTransitionStyleList = ['bounce',
		  'flash',
		  'pulse',
		  'bounceIn',
		  'bounceInDown',
		  'bounceInLeft',
		  'bounceInRight',
		  'bounceInUp',
		  'fadeIn',
		  'fadeInDown',
		  'fadeInDownBig',
		  'fadeInLeft',
		  'fadeInLeftBig',
		  'fadeInRight',
		  'fadeInRightBig',
		  'fadeInUp',
		  'fadeInUpBig',
		  'flipInX',
		  'flipInY',
		  'lightSpeedIn',
		  'rotateIn',
		  'rotateInDownLeft',
		  'rotateInDownRight',
		  'rotateInUpLeft',
		  'rotateInUpRight',
		  'rollIn',
		  'zoomIn',
		  'zoomInDown',
		  'zoomInLeft',
		  'zoomInRight',
		  'zoomInUp'
		];

		$scope.layoutLoading = true;

		$scope.getLayoutOption = function(key) {
		  return $theme.get(key);
		};

		$scope.hideHeaderBar = function() {
		  $theme.set('headerBarHidden', true);
		};

		$scope.showHeaderBar = function($event) {
		  $event.stopPropagation();
		  $theme.set('headerBarHidden', false);
		};
		
		$scope.toggleChatBox = function(chatter, $event) {
		  $event.preventDefault();
		  if ($scope.currentChatterId === chatter.id) {
			$theme.set('showChatBox', !$theme.get('showChatBox'));
		  } else {
			$theme.set('showChatBox', true);
		  }
		  $scope.currentChatterId = chatter.id;
		};

		$scope.hideChatBox = function() {
		  $theme.set('showChatBox', false);
		};
		
		$scope.$on('$routeChangeStart', function() {
		  if ($location.path() === '') {
			return $location.path('/');
		  }
		  progressLoader.start();
		  progressLoader.set(50);
		});
		
		$scope.$on('$routeChangeSuccess', function() {
		  progressLoader.end();
		  if ($scope.layoutLoading) {
			$scope.layoutLoading = false;
		  }
		});
    
    }
   }
  );
  