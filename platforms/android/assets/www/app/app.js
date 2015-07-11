// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('codefam', ['ionic', "ngCordova", "ngAnimate", "codefam.usercontroller", "codefam.maincontroller"])

.run(function($ionicPlatform, $cordovaNetwork, $ionicPopup, $cordovaGoogleAnalytics) {
  $ionicPlatform.ready(function() {
    // if(window.cordova && window.cordova.plugins.Keyboard) {
    //   cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    // }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

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
  })

  .state('home.index', {
    url: "/index",
    views: {
      "content-index": {
        templateUrl: "app/views/main/index.html",
      }
    }
  })

// Logins
  .state('login', {
    url: "/",
    templateUrl: "app/views/users/login.html",
    controller: "UserCtrlLogin",
  });
  
  $urlRouterProvider.otherwise('/home/index');
})