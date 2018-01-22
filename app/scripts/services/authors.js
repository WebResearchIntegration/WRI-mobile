'use strict';

/**
 * @ngdoc service
 * @name wriMobileApp.authors
 * @description
 * # authors
 * Service in the wriMobileApp.
 */
angular.module('wriMobileApp')
    .service('Authors', [ 'Restangular', function (Restangular) {
        var service = this;

        /**
         * Will get all articles from the database.
         * @param NoParam
         */
        service.getAll = function() {
            return Restangular.all('authors').getList();
        };

        /**
         * Will get an article by it's id.
         * This method is async so you'll be able to use the then() method.
         */
        service.getById =  function(id) {
            return Restangular.one('authors', id).get();
        };

        return service;
    }]);
