(function() {
	'use strict';
	var app = angular.module('coins.cache', []);
  app.factory('coinsCache', function(){
		return {
			// User Caching
			set_user: function(user){
				window.localStorage["actual_user"] = JSON.stringify(user);
			},
			get_user: function(){
				return JSON.parse(window.localStorage["actual_user"]);
			},
			// State Caching
			set_state: function(state){
				window.localStorage["actual_state"] = state;
			},
			get_state: function(){
				return window.localStorage["actual_state"];
			},
		}
  });
})();