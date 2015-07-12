(function() {
	'use strict';
  var persons = [
  { name: "Guilherme Carneiro",
    user: "@glopes",
  },
  { name: "Something",
    user: "@something",
  },

  ];
	var app = angular.module('codefam.maincontroller', []);

  app.controller('MainCtrlIndex', function($scope, $ionicPopover){
    $scope.clicked = false;
    $scope.index = 0;
    $scope.persons = persons;

    $scope.see_more = function(){
      $scope.clicked = !$scope.clicked;
    };

    $scope.get_next = function(){
      $scope.clicked = false;
      $scope.index = $scope.index + 1;
    };
  });
})();