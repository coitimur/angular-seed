angular.module('icons-glyphicons', []);

angular.module('app').requires.push('icons-glyphicons');

angular.module('icons-glyphicons')
.component('iconsGlyphicons', {
    templateUrl: 'partials/icons-glyphicons/icons-glyphicons.template.html',
    controller: function($scope, $modal,$timeout,$theme) {
		
    }
});
  


