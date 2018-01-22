'use strict';

/**
 * @ngdoc function
 * @name wriMobileApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the wriMobileApp
 */
angular.module('wriMobileApp')
  .controller('LoginCtrl', function ($location, Auth, UserFactory) {
    var ctrl = this;

    Auth.isAuthenticated().then(function (result) {
      $location.path('/articles');
    }, function (err) {
      console.log('Not connected');
    });

    /**
     * @name handleRequest
     * @desc  Will handle the request actionned by the user
     * @param {String} event that is coming from the form
     * @returns {void}
     * @memberOf Controllers.LoginCtrl
     */
    ctrl.handleRequest = function (event) {
      Auth.signIn(ctrl.email, ctrl.password, function (err, authenticatedUser) {
        if (err) {
          console.log(ctrl.notifError);
          ctrl.notifError = true;
        } else {
          console.log(authenticatedUser);
          UserFactory.currentUser = authenticatedUser;
          $location.path('/');
          ctrl.notifError = false;
        }
      });
    };

  });
