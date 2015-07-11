// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('brainstorm', ['ionic', "ngCordova", 'ngOpenFB' , "ngAnimate", 'ionic-material', 'coins.usercontroller', 'coins.offercontroller'])

.run(function($ionicPlatform, $cordovaNetwork, $ionicPopup, $cordovaGoogleAnalytics, ngFB) {
  $ionicPlatform.ready(function() {
    // if(window.cordova && window.cordova.plugins.Keyboard) {
    //   cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    // }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    ngFB.init({appId: '105834603091932'});

    if(ionic.Platform.isWebView() && $cordovaGoogleAnalytics) {
    } 

    if(window.Connection){
      if($cordovaNetwork.isOffline()) {
        $ionicPopup.alert({
          title: "Internet Disconnected",
          content: "The internet is disconnected on your device."
        })
        .then(function(result) {
            ionic.Platform.exitApp();
        });
      }
    }
  });
})

.config(function($ionicConfigProvider) {
  if(!ionic.Platform.isIOS())$ionicConfigProvider.scrolling.jsScrolling(false);
})


.config(function($stateProvider, $urlRouterProvider){
  $stateProvider

// Home States
  .state('home', {
    abstract: true,
    url: "/home",
    templateUrl: "app/views/layout/side-menu.html",
    controller: "UserCtrlMenu"
  })

  .state('home.index', {
    url: "/index",
    views: {
      "content-index": {
        templateUrl: "app/views/offers/index.html",
        controller: "OfferCtrlIndex",
      }
    }
  })
  .state('home.show', {
    url: "/show/:id",
    views: {
      "content-index": {
        templateUrl: "app/views/offers/show.html",
        controller: "OfferCtrlShow",
      }
    }
  })
  .state('home.invoice', {
    url: "/invoice/:id",
    views: {
      "content-index": {
        templateUrl: "app/views/offers/invoice.html",
        controller: "OfferCtrlInvoice",
      }
    }
  })
// Logins
  .state('login', {
    url: "/login",
    templateUrl: "app/views/users/login.html",
    controller: "UserCtrlLogin",
  });

  if(window.localStorage["actual_state"] == "connected" ) { $urlRouterProvider.otherwise('/home/index'); }
  else { $urlRouterProvider.otherwise('/login'); }
})