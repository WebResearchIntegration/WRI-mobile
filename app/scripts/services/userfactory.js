'use strict';

/**
 * @ngdoc service
 * @name wriMobileApp.UserFactory
 * @description
 * # UserFactory
 * Factory in the wriMobileApp.
 */
angular.module('wriMobileApp')
  .factory('UserFactory', function (localStorageService) {
    var UserFactory = this;

    UserFactory.currentUser = null;

    UserFactory.getCurrentUser = function (callback) {
      var user = localStorageService.get("user");

      if (user) {
        // console.log("Get the user: ", user);
        callback(user);
      } else {
        callback(null);
      }
    }

    return UserFactory;

  });
