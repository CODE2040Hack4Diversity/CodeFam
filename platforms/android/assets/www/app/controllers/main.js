(function() {
	'use strict';
  var persons = [
  { name: "Guilherme Carneiro",
    user: "@glopes",
    liked: false,
  },
  { name: "Something",
    user: "@something",
    liked: false,
  },

  ];
	var app = angular.module('codefam.maincontroller', []);

  app.controller('MainCtrlIndex', function($scope, $ionicPopover){
    $scope.clicked = false;
    $scope.filter = false;
    $scope.index = 0;
    $scope.persons = persons;

    $scope.see_more = function(){
      $scope.clicked = !$scope.clicked;
    };

    $scope.see_filter = function(){
      $scope.filter = !$scope.filter;
    };

    $scope.open_filter = function(){
      if($scope.filter == false){
        $scope.filter = true;
      }
    };

    $scope.close_filter = function(){
      if($scope.filter == true){
        $scope.filter = false;
      }
    };

    $scope.like = function(person){
      person.liked = true;
      $scope.clicked = false;
      $scope.index = $scope.index + 1;
    };


    $scope.get_next = function(){
      $scope.clicked = false;
      $scope.index = $scope.index + 1;
    };
  });
})();