angular.module('extras-profile', []);

angular.module('app').requires.push('extras-profile');

angular.module('extras-profile')
.component('extrasProfile', {
    templateUrl: 'partials/extras-profile/extras-profile.template.html',
    controller: function($scope, $modal,$timeout) {
	
    }
});
  


