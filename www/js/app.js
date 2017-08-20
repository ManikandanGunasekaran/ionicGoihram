// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'Goihram' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('Goihram', ['ionic','ngCordova', 'ngCordovaOauth'])

app.config(function($stateProvider, $urlRouterProvider,socialProvider) {

    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'home.html',
      controller: 'loginController'
    })
    // socialProvider.setGoogleKey("864592943770-k01l3bkp56i95v112fe2t9ovltn8gqku.apps.googleusercontent.com");
    $stateProvider.state('userDetails', {
        url: '/userDetails',
        templateUrl: 'userDetails.html',
        controller: 'userDetailsController'
    });

    // socialProvider.setFbKey({appId: "1330034267115606", apiVersion: "v2.9"});

   $urlRouterProvider.otherwise("/home");
   

});

//  function onSignIn(googleUser) {
//   var profile = googleUser.getBasicProfile();
//   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//   console.log('Name: ' + profile.getName());
//   console.log('Image URL: ' + profile.getImageUrl());
//   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
// }

// window.plugins.googleplus.login(
//         {},
//         function (user_data) {
//           console.log(user_data);
//         },
//         function (msg) {
//           console.log(msg);
//         }
//     );

// window.fbAsyncInit = function() {
//     FB.init({
//         appId: '1330034267115606',
//         autoLogAppEvents: true,
//         xfbml: true,
//         version: 'v2.9'
//     });
//     FB.AppEvents.logPageView();
// };



// (function(d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) {
//         return;
//     }
//     js = d.createElement(s);
//     js.id = id;
//     js.src = "//connect.facebook.net/en_US/sdk.js";
//     fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));


app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})
