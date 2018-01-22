'use strict';

/**
 * @ngdoc function
 * @name wriMobileApp.controller:AuthorsCtrl
 * @description
 * # AuthorsCtrl
 * Controller of the wriMobileApp
 */
angular.module('wriMobileApp')
  .controller('AuthorsCtrl', function ($scope, Authors) {
        var ctrl = this;
        $scope.viewer = false;
        ctrl.currentAuthor;

        // ctrl.authors = [
        //     {
        //         'name' : 'jzhfkjen',
        //         'email' : 'zbfef@«adnkz.fr' ,  
        //         'linkedIn' : 'zbfefjn.fr'  , 
        //         'rating' : 5   ,
        //         'birthDate' : 'zbfef@'  , 
        //         'gender' : 'zbfef@'   ,
        //         'photoUrl' : 'zbfef@'  , 
        //         'description' : 'zbfef@' ,  
        //         'articles' : ['zbfef@', 'ezfget', 'efzge']   
        //     },{
        //         'name' : 'jzhfkjen',
        //         'email' : 'zbfef@«adnkz.fr' ,  
        //         'linkedIn' : 'zbfefjn.fr'  , 
        //         'rating' : 5   ,
        //         'birthDate' : 'zbfef@'  , 
        //         'gender' : 'zbfef@'   ,
        //         'photoUrl' : 'zbfef@'  , 
        //         'description' : 'zbfef@' ,  
        //         'articles' : 'zbfef@'   
        //     },{
        //         'name' : 'jzhfkjen',
        //         'email' : 'zbfef@«adnkz.fr' ,  
        //         'linkedIn' : 'zbfefjn.fr'  , 
        //         'rating' : 5   ,
        //         'birthDate' : 'zbfef@'  , 
        //         'gender' : 'zbfef@'   ,
        //         'photoUrl' : 'zbfef@'  , 
        //         'description' : 'zbfef@' ,  
        //         'articles' : 'zbfef@'   
        //     },{
        //         'name' : 'jzhfkjen',
        //         'email' : 'zbfef@«adnkz.fr' ,  
        //         'linkedIn' : 'zbfefjn.fr'  , 
        //         'rating' : 5   ,
        //         'birthDate' : 'zbfef@'  , 
        //         'gender' : 'zbfef@'   ,
        //         'photoUrl' : 'zbfef@'  , 
        //         'description' : 'zbfef@' ,  
        //         'articles' : 'zbfef@'   
        //     },
        // ]

        init()

        ctrl.openViewer = function (author){
          ctrl.currentAuthor = author
          $scope.viewer = true;
        }

        ctrl.closeViewer = function (){
          ctrl.currentAuthor = null;
          $scope.viewer = false;
        }

        function init() {
            Authors.getAll().then(function(authors) {
                ctrl.authors = authors;
            }, function (err) {
                console.log('Error get all authors ', err );  
            });
        }

  });
