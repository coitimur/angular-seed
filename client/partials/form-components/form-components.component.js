angular.module('form-components', []);

angular.module('app').requires.push('form-components');

angular.module('form-components')
.component('formComponents', {
    templateUrl: 'partials/form-components/form-components.template.html',
    controller: function($scope,$http, $modal,$timeout,$window) {
		$scope.getBrandColor = function(color) {
		  return $theme.getBrandColor(color);
		};
		$scope.switchStatus = 1;
		$scope.switchStatus2 = 1;
		$scope.switchStatus3 = 1;
		$scope.switchStatus4 = 1;
		$scope.switchStatus5 = 1;
		$scope.switchStatus6 = 1;

		$scope.getLocation = function(val) {
		  return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
			params: {
			  address: val,
			  sensor: false
			}
		  }).then(function(res) {
			var addresses = [];
			angular.forEach(res.data.results, function(item) {
			  addresses.push(item.formatted_address);
			});
			return addresses;
		  });
		};

		$scope.colorPicked = '#fa4d4d';

		$scope.tagList = ['tag1', 'tag2'];
		$scope.select2TaggingOptions = {
		  'multiple': true,
		  'simple_tags': true,
		  'tags': ['tag1', 'tag2', 'tag3', 'tag4'] // Can be empty list.
		};

		$scope.clear = function() {
		  $scope.person.selected = undefined;
		  $scope.address.selected = undefined;
		  $scope.country.selected = undefined;
		};

		$scope.someGroupFn = function(item) {

		  if (item.name[0] >= 'A' && item.name[0] <= 'M') {
			return 'From A - M';
		  }

		  if (item.name[0] >= 'N' && item.name[0] <= 'Z') {
			return 'From N - Z';
		  }
		};

		// ui-select stuff
		$scope.availableColors = ['Red', 'Green', 'Blue', 'Yellow', 'Magenta', 'Maroon', 'Umbra', 'Turquoise'];

		$scope.multipleDemo = {};
		$scope.multipleDemo.colors = ['Blue', 'Red'];
		$scope.multipleDemo.colors2 = ['Blue', 'Red'];

		$scope.address = {};
		$scope.refreshAddresses = function(address) {
		  var params = {
			address: address,
			sensor: false
		  };
		  return $http.get(
			'http://maps.googleapis.com/maps/api/geocode/json', {
			  params: params
			}
		  ).then(function(response) {
			$scope.addresses = response.data.results;
		  });
		};

		$scope.selectedCountry = {};
		$scope.selectedCountries = {};
		$scope.countries = [];
		$http.get('assets/demo/countries.json').success(function(response) {
		  $scope.countries = response;
		});
		//----------------//
		//  DatePicker    //
		//----------------//
		$scope.today = function() {
		  $scope.dt = new Date();
		};
		$scope.today();

		$scope.clear = function() {
		  $scope.dt = null;
		};

		// Disable weekend selection
		$scope.disabled = function(date, mode) {
		  return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
		};

		$scope.toggleMin = function() {
		  $scope.minDate = $scope.minDate ? null : new Date();
		};
		$scope.toggleMin();

		$scope.open = function($event) {
		  $event.preventDefault();
		  $event.stopPropagation();

		  $scope.opened = true;
		};

		$scope.dateOptions = {
		  formatYear: 'yy',
		  startingDay: 1
		};

		$scope.initDate = new Date('2016-15-20');
		$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
		$scope.format = $scope.formats[0];
		
		//---------------------------//
		// DateRangePicker           //
		//---------------------------//
		var moment = $window.moment;
		$scope.drp_start = moment().subtract(1, 'days').format('MMMM D, YYYY');
		$scope.drp_end = moment().add(31, 'days').format('MMMM D, YYYY');
		$scope.drp_options = {
		  ranges: {
			'Today': [moment(), moment()],
			'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
			'Last 7 Days': [moment().subtract(6, 'days'), moment()],
			'Last 30 Days': [moment().subtract(29, 'days'), moment()],
			'This Month': [moment().startOf('month'), moment().endOf('month')],
			'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
		  },
		  opens: 'left',
		  startDate: moment().subtract(29, 'days'),
		  endDate: moment()
		};	  
		//---------------------------//
		// TimePicker                //
		//---------------------------//  
		$scope.mytime = new Date();

		$scope.hstep = 1;
		$scope.mstep = 15;

		$scope.options = {
		  hstep: [1, 2, 3],
		  mstep: [1, 5, 10, 15, 25, 30]
		};

		$scope.ismeridian = true;
		$scope.toggleMode = function() {
		  $scope.ismeridian = !$scope.ismeridian;
		};

		$scope.update = function() {
		  var d = new Date();
		  d.setHours(14);
		  d.setMinutes(0);
		  $scope.mytime = d;
		};

		$scope.changed = function() {
		  console.log('Time changed to: ' + $scope.mytime);
		};

		$scope.clear = function() {
		  $scope.mytime = null;
		};
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}
});
  


