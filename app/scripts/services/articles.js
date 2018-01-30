'use strict';

/**
 * @ngdoc service
 * @name wriMobileApp.articles
 * @description
 * # articles
 * Service in the wriMobileApp.
 */
angular.module('wriMobileApp')
    .service('Articles', [ 'Restangular', function (Restangular) {
        var service = this;

        /**
         * Will get all articles from the database.
         * @param NoParam
         */
        service.getAll = function() {
            return Restangular.all('articles').getList();
        };

        /**
         * Will get an article by it's id.
         * This method is async so you'll be able to use the then() method.
         */
        service.getById =  function(id) {
            return Restangular.one('article', id).get();
        };

        return service;
    }]);
