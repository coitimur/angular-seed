angular.module('maps-vector', []);

angular.module('app').requires.push('maps-vector');

angular.module('maps-vector')
.config(['$routeProvider', function($routeProvider) {
    'use strict';
    $routeProvider
      .when('/maps-vector', {
        template: '<maps-vector></maps-vector>',
        resolve: {
          loadJqvmap: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([
			  'bower_components/jqvmap/dist/jqvmap.min.css',
			  'bower_components/jqvmap/dist/jquery.vmap.min.js',
	          'bower_components/jqvmap/dist/maps/jquery.vmap.world.js',
              'bower_components/jqvmap/dist/maps/jquery.vmap.europe.js',
              'bower_components/jqvmap/dist/maps/jquery.vmap.usa.js',
			  'bower_components/jqvmap/dist/maps/continents/jquery.vmap.north-america.js'
            ]);
          }]
        }
      });
  }])
.component('mapsVector', {
    templateUrl: 'partials/maps-vector/maps-vector.template.html',
    controller: function($scope,$window,dataFactoryModel) {
		$scope.jqvmapWorld = {
		  map: 'world_en',
		  backgroundColor: 'transparent',
		  color: '#f5f5f5',
		  hoverOpacity: 0.7,
		  selectedColor: '#1880c4',
		  enableZoom: true,
		  showTooltip: true,
		  values: $window.sample_data,
		  scaleColors: ['#90c2e3', '#4697ce'],
		  normalizeFunction: 'polynomial'
		};

		$scope.jqvmapUSA = {
		  map: 'usa_en',
		  backgroundColor: 'transparent',
		  color: '#509BBD',
		  hoverOpacity: 0.7,
		  selectedColor: '#1278a6',
		  enableZoom: true,
		  showTooltip: true,
		  values: $window.sample_data,
		  scaleColors: ['#C8EEFF', '#006491'],
		  normalizeFunction: 'polynomial'
		};

		$scope.jqvmapEurope = {
		  map: 'europe_en',
		  backgroundColor: 'transparent',
		  color: '#dddddd',
		  hoverOpacity: 0.7,
		  selectedColor: '#1dda1d',
		  enableZoom: true,
		  showTooltip: true,
		  values: $window.sample_data,
		  scaleColors: ['#b6ddb7', '#51d951'],
		  normalizeFunction: 'polynomial'
		};

    }
  });
