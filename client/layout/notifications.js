angular.module('layout.services.notifications',[])
.service('notifications', function($rootScope,$filter) {
		var self=this;
		this.items = [{
		  text: 'Server #1 is live',
		  time: '4m',
		  class: 'notification-success',
		  iconClasses: 'glyphicon glyphicon-ok',
		  seen: true
		}, {
		  text: 'New user Registered',
		  time: '10m',
		  class: 'notification-user',
		  iconClasses: 'glyphicon glyphicon-user',
		  seen: false
		}, {
		  text: 'CPU at 92% on server#3!',
		  time: '22m',
		  class: 'notification-danger',
		  iconClasses: 'glyphicon glyphicon-exclamation-sign',
		  seen: false
		}, {
		  text: 'Database overloaded',
		  time: '30m',
		  class: 'notification-warning',
		  iconClasses: 'glyphicon glyphicon-warning-sign',
		  seen: false
		}, {
		  text: 'New order received',
		  time: '1h',
		  class: 'notification-order',
		  iconClasses: 'glyphicon glyphicon-shopping-cart',
		  seen: true
		}, {
		  text: 'Application error!',
		  time: '9d',
		  class: 'notification-danger',
		  iconClasses: 'glyphicon glyphicon-remove',
		  seen: true
		}, {
		  text: 'Installation Succeeded',
		  time: '1d',
		  class: 'notification-success',
		  iconClasses: 'glyphicon glyphicon-ok',
		  seen: false
		}, {
		  text: 'Account Created',
		  time: '2d',
		  class: 'notification-success',
		  iconClasses: 'glyphicon glyphicon-ok',
		  seen: false
		}, ];

		this.setSeen = function(item, $event) {
		  $event.preventDefault();
		  $event.stopPropagation();
		  item.seen = true;
		};

		this.setUnseen = function(item, $event) {
		  $event.preventDefault();
		  $event.stopPropagation();
		  item.seen = false;
		};

		this.setSeenAll = function($event) {
		  $event.preventDefault();
		  $event.stopPropagation();
		  angular.forEach(this.items, function(item) {
			item.seen = true;
		  });
		};

		this.unseenCount = $filter('filter')(this.items, {
		  seen: false
		}).length;

	 
		$rootScope.$watch(function () {
					return self.items;
		}, function(items) {
		  self.unseenCount = $filter('filter')(items, {
			read: false
		  }).length;
		}, true);
  
  })