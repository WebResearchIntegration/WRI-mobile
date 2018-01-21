'use strict';

/**
 * @ngdoc function
 * @name wriMobileApp.controller:NotesCtrl
 * @description
 * # NotesCtrl
 * Controller of the wriMobileApp
 */
angular.module('wriMobileApp')
  .controller('NotesCtrl', function ($scope) {
        var ctrl = this;
        $scope.viewer = false;
        ctrl.currentNote;

        ctrl.notes = [
            {
                'text' : 'jzhfkjen',
                'createdAt' : 'fkhzfejnlk',
                'isDocument' : 'azerty'
            },{
                'text' : 'jzhfkjen',
                'createdAt' : 'fkhzfejnlk',
                'isDocument' : 'azerty'
            },{
                'text' : 'jzhfkjen',
                'createdAt' : 'fkhzfejnlk',
                'isDocument' : 'azerty'
            },{
                'text' : 'jzhfkjen',
                'createdAt' : 'fkhzfejnlk',
                'isDocument' : 'azerty'
            },{
                'text' : 'jzhfkjen',
                'createdAt' : 'fkhzfejnlk',
                'isDocument' : 'azerty'
            },{
                'text' : 'jzhfkjen',
                'createdAt' : 'fkhzfejnlk',
                'isDocument' : 'azerty'
            },{
                'text' : 'jzhfkjen',
                'createdAt' : 'fkhzfejnlk',
                'isDocument' : 'azerty'
            },{
                'text' : 'jzhfkjen',
                'createdAt' : 'fkhzfejnlk',
                'isDocument' : 'azerty'
            },
        ]

        ctrl.openViewer = function (note){
          ctrl.currentNote = note
          $scope.viewer = true;
        }

        ctrl.closeViewer = function (){
          ctrl.currentNote = null;
          $scope.viewer = false;
        }
  });
