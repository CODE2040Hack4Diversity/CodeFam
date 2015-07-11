(function() {
	'use strict';
	var app = angular.module('codefam.usercontroller', []);

  app.controller('UserCtrlLogin', function($scope, $state, $ionicViewSwitcher){
    if(ionic.Platform.isWebView() && $cordovaGoogleAnalytics) {
    }
  });

  app.controller('UserCtrlMenu', function($scope, $state, $ionicViewSwitcher){
  });
})();

