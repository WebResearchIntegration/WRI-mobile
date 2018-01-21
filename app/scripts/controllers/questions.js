'use strict';

/**
 * @ngdoc function
 * @name wriMobileApp.controller:QuestionsCtrl
 * @description
 * # QuestionsCtrl
 * Controller of the wriMobileApp
 */
angular.module('wriMobileApp')
  .controller('QuestionsCtrl', function ($scope) {
    var ctrl = this;
        $scope.viewer = false;
        ctrl.currentQuestion;

        ctrl.questions = [
            {
                'problematic' : 'jzhfkjen ?',
                'solution' : 'azerty',
                'createdAt' : 'fkhzfejnlk',
            },{
                'problematic' : 'jzhfkjen ?',
                'solution' : 'azerty',
                'createdAt' : 'fkhzfejnlk',
            },{
                'problematic' : 'jzhfkjen ?',
                'solution' : 'azerty',
                'createdAt' : 'fkhzfejnlk',
            },{
                'problematic' : 'jzhfkjen ?',
                'solution' : 'azerty',
                'createdAt' : 'fkhzfejnlk',
            },{
                'problematic' : 'jzhfkjen ?',
                'solution' : 'azerty',
                'createdAt' : 'fkhzfejnlk',
            },{
                'problematic' : 'jzhfkjen ?',
                'solution' : 'azerty',
                'createdAt' : 'fkhzfejnlk',
            },{
                'problematic' : 'jzhfkjen ?',
                'solution' : 'azerty',
                'createdAt' : 'fkhzfejnlk',
            },
        ]

        ctrl.openViewer = function (question){
          ctrl.currentQuestion = question
          $scope.viewer = true;
        }

        ctrl.closeViewer = function (){
          ctrl.currentQuestion = null;
          $scope.viewer = false;
        }
  });