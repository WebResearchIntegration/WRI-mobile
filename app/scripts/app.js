'use strict';

/**
 * @ngdoc overview
 * @name wriMobileApp
 * @description
 * # wriMobileApp
 *
 * Main module of the application.
 */
angular
  .module('wriMobileApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider, localStorageServiceProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      }).when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
          access: ["Auth", function(Auth) {return Auth.isAuthenticated()}]
        }
      })
      .otherwise({
        redirectTo: '/main'
      });

    // [RESTANGuLAR CONFIG: START]
    RestangularProvider.setBaseUrl('https://api-wri.herokuapp.com/api/');
    // [RESTANGuLAR CONFIG: END]

    // [LOCALSTORAGECONFIG]
    localStorageServiceProvider.setStorageType('localStorage');
    // [LOCALSTORAGECONFIG: END]

  }).run(function ($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {
      if (rejection === 'Not Authenticated') {
        console.log(">>> USER NOT AUTHENTICATED");
        $location.path('/login');
      }
    });
  }).run(function ($http, localStorageService, $location) {
    if(localStorageService.get("token")) {
      var token = localStorageService.get("token");
      $http.defaults.headers.common['Authorization'] = token;
    } else {
      $location.path('/login');
    }
  });
