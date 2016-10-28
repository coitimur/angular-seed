angular.module('extras-invoice', []);

angular.module('app').requires.push('extras-invoice');

angular.module('extras-invoice')
.component('extrasInvoice', {
    templateUrl: 'partials/extras-invoice/extras-invoice.template.html',
    controller: function($scope, $modal,$timeout) {
	
    }
});
  


