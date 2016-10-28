angular
.module('app.info.bar', [])
.component('appInfoBar', {
    templateUrl: 'layout/app-info-bar/app-info-bar.template.html',
    controller: function($scope, $theme, $timeout, progressLoader, $location) {

		$scope.getLayoutOption = function(key) {
		  return $theme.get(key);
		};

		$scope.chatters = [ {
		  id: 1,
		  status: 'online',
		  avatar: 'tennant.png',
		  name: 'David Tennant'
		}, {
		  id: 6,
		  status: 'away',
		  avatar: 'tennant.png',
		  name: 'David Tennant'
		}];
		
		$scope.currentChatterId = null;
		
		$scope.hideChatBox = function() {
		  $theme.set('showChatBox', false);
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

		$scope.rightbarAccordionsShowOne = false;
		$scope.rightbarAccordions = [{
		  open: true
		}, {
		  open: true
		}, {
		  open: true
		}, {
		  open: true
		}, {
		  open: true
		}, {
		  open: true
		}, {
		  open: true
		}];

    }
   }
  );
  
