(function() {
	'use strict';
  var offers = [];
	var app = angular.module('coins.offercontroller', []);

  app.controller('OfferCtrlIndex', function($scope, ionicMaterialInk, $ionicPopover){
    ionicMaterialInk.displayEffect();
  	$scope.height = window.innerHeight;
  	$scope.width = window.innerWidth;
  });

  app.controller('OfferCtrlShow', function($scope, ionicMaterialInk, $stateParams){
    ionicMaterialInk.displayEffect();
  });
  
  app.controller('OfferCtrlInvoice', function($scope, ionicMaterialInk, $stateParams){
    ionicMaterialInk.displayEffect();
  });
})();