(function() {
	'use strict';
	var app = angular.module('coins.api', []);

	app.config(['$httpProvider', function($httpProvider) {
      $httpProvider.defaults.useXDomain = true;
 	    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
	]);

  app.factory('coinsApi', function($http){
		return {
			post_user_data: function(user){
				return true
			},
		}
  });
})();