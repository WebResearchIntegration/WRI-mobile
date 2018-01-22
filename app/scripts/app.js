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
      }).when('/articles', {
        templateUrl: 'views/articles.html',
        controller: 'ArticlesCtrl',
        controllerAs: 'article',
        resolve: {
          access: ["Auth", function(Auth) {return Auth.isAuthenticated()}]
        }
      })
      .when('/authors', {
        templateUrl: 'views/authors.html',
        controller: 'AuthorsCtrl',
        controllerAs: 'author',
        resolve: {
          access: ["Auth", function(Auth) {return Auth.isAuthenticated()}]
        }
      })
      .when('/notes', {
        templateUrl: 'views/notes.html',
        controller: 'NotesCtrl',
        controllerAs: 'note',
        resolve: {
          access: ["Auth", function(Auth) {return Auth.isAuthenticated()}]
        }
      })
      .when('/questions', {
        templateUrl: 'views/questions.html',
        controller: 'QuestionsCtrl',
        controllerAs: 'question',
        resolve: {
          access: ["Auth", function(Auth) {return Auth.isAuthenticated()}]
        }
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile',
        resolve: {
          access: ["Auth", function(Auth) {return Auth.isAuthenticated()}]
        }
      })
      .otherwise({
        redirectTo: '/articles'
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
      $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    } else {
      $location.path('/login');
    }
  });
