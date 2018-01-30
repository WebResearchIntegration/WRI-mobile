'use strict';

/**
 * @ngdoc service
 * @name wriMobileApp.notes
 * @description
 * # notes
 * Service in the wriMobileApp.
 */
angular.module('wriMobileApp')
    .service('Notes', [ 'Restangular', function (Restangular) {
        var service = this;

        /**
         * Will get all notes from the database.
         * @param NoParam
         */
        service.getAll = function() {
            return Restangular.all('notes').getList();
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
