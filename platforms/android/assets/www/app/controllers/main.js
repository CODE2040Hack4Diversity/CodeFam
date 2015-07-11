(function() {
	'use strict';
  var persons = [
  {},
  {},
  {},

  ];
	var app = angular.module('codefam.maincontroller', []);

  app.controller('MainCtrlIndex', function($scope, $ionicPopover){
    $scope.clicked = false;

    $scope.see_more = function(){
      $scope.clicked = !$scope.clicked;
    };

    $scope.get_next = function(){
      console.log("Next");
    };
  });
})();