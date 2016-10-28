angular.module('layout.services.messages',[])
  .service('messages', function($rootScope,$filter) {
	 
	 var self=this;
	  
     this.items = [{
      name: 'Polly Paton',
      message: 'Uploaded all the files to server',
      time: '3m',
      class: 'notification-danger',
      thumb: 'assets/demo/avatar/paton.png',
      read: false
    }, {
      name: 'Simon Corbett',
      message: 'I am signing off for today',
      time: '17m',
      class: 'notification-danger',
      thumb: 'assets/demo/avatar/corbett.png',
      read: false
    }, {
      name: 'Matt Tennant',
      message: 'Everything is working just fine here',
      time: '2h',
      class: 'notification-danger',
      thumb: 'assets/demo/avatar/tennant.png',
      read: true
    }, {
      name: 'Alan Doyle',
      message: 'Please mail me the files by tonight',
      time: '5d',
      class: 'notification-danger',
      thumb: 'assets/demo/avatar/doyle.png',
      read: false
    }, {
      name: 'Polly Paton',
      message: 'Uploaded all the files to server',
      time: '3m',
      class: 'notification-danger',
      thumb: 'assets/demo/avatar/paton.png',
      read: false
    }, {
      name: 'Simon Corbett',
      message: 'I am signing off for today',
      time: '17m',
      class: 'notification-danger',
      thumb: 'assets/demo/avatar/corbett.png',
      read: false
    }, {
      name: 'Matt Tennant',
      message: 'Everything is working just fine here',
      time: '2h',
      class: 'notification-danger',
      thumb: 'assets/demo/avatar/tennant.png',
      read: true
    }, {
      name: 'Alan Doyle',
      message: 'Please mail me the files by tonight',
      time: '5d',
      class: 'notification-danger',
      thumb: 'assets/demo/avatar/doyle.png',
      read: false
    }, ];

    this.setRead = function(item, $event) {
      $event.preventDefault();
      $event.stopPropagation();
      item.read = true;
    };

    this.setUnread = function(item, $event) {
      $event.preventDefault();
      $event.stopPropagation();
      item.read = false;
    };

    this.setReadAll = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      angular.forEach(this.items, function(item) {
        item.read = true;
      });
    };

    this.unseenCount = $filter('filter')(this.items, {
      read: false
    }).length;
	
    
    $rootScope.$watch(function () {
				return self.items;
	}, function(items) {
      self.unseenCount = $filter('filter')(items, {
        read: false
      }).length;
    }, true);
	
   
  
  })