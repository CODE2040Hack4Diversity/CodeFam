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
    $scope.tab = 1;
    $scope.filter = false;
    $scope.index = 0;
    $scope.persons = persons;

    google.maps.event.addDomListener(window, 'load', function() {
      var myLatlng = new google.maps.LatLng(37.3000, -120.4833);

      var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      var map = new google.maps.Map(document.getElementById("tab-maps"), mapOptions);

      navigator.geolocation.getCurrentPosition(function(pos) {
          map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          var myLocation = new google.maps.Marker({
              position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
              map: map,
              title: "My Location"
          });
      });

      $scope.map = map;
    });

    $scope.see_more = function(){
      $scope.clicked = !$scope.clicked;
    };

    $scope.set_tab = function(id){
      $scope.tab = id;
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