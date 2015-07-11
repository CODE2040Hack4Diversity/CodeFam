(function() {
	'use strict';
	var app = angular.module('coins.usercontroller', ['ngOpenFB', 'coins.cache', 'coins.api']);

  app.controller('UserCtrlLogin', function($scope, $state, $ionicViewSwitcher, ngFB, $cordovaToast, coinsCache, $cordovaGoogleAnalytics, coinsApi){
    if(ionic.Platform.isWebView() && $cordovaGoogleAnalytics) {
    }

  	$scope.login = {}
		$scope.fbLogin = function () {
      // Login on Facebook
	    ngFB.login({scope: 'email,read_stream,publish_actions'}).then(
        function (response) {
          if (response.status === 'connected') {
            coinsCache.set_state(response.status); // Save state of Connection
            // Request user data
            ngFB.api({
              path: '/me',
              params: {fields: 'id,name,email'}
            }).then(
            function (user) {
              coinsApi.post_user_data(user);
              coinsCache.set_user(user); // Save user data locally
              if(ionic.Platform.isWebView() && $cordovaGoogleAnalytics) {
                $cordovaGoogleAnalytics.trackEvent('Login', user.id); // Event Tracking
              } 
            },
            function (error) {
            });

            //Switch to home
            $ionicViewSwitcher.nextDirection('forward');
            $state.go('home.index');
          } 
          else {  

            // Toast for Error in Login
            $cordovaToast.showShortTop('Sorry, Login Failed').then(function(success) {
              // success
            }, function (error) {
              // error
            });
          }
        });
		};
  });

  app.controller('UserCtrlMenu', function($scope, $state, $ionicViewSwitcher, coinsCache){
    $scope.user = coinsCache.get_user();
  });
})();