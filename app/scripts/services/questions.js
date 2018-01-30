'use strict';

/**
 * @ngdoc service
 * @name wriMobileApp.questions
 * @description
 * # questions
 * Service in the wriMobileApp.
 */
angular.module('wriMobileApp')
    .service('Questions', [ 'Restangular', function (Restangular) {
        var service = this;

        /**
         * Will get all questions from the database.
         * @param NoParam
         */
        service.getAll = function() {
            return Restangular.all('questions').getList();
        };

        /**
         * Will get an note by it's id.
         * This method is async so you'll be able to use the then() method.
         */
        service.getById =  function(id) {
            return Restangular.one('note', id).get();
        };

        return service;
    }]);
