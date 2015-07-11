(function() {
	'use strict';
  var offers = [];
	var app = angular.module('codefam.maincontroller', []);

  app.controller('MainCtrlIndex', function($scope, $ionicPopover){
    $scope.clicked = false;

    $scope.see_more = function(){
      $scope.clicked = !$scope.clicked;
    };
  });
})();