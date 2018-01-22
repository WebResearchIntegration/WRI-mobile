'use strict';

/**
 * @ngdoc function
 * @name wriMobileApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the wriMobileApp
 */
angular.module('wriMobileApp')
  .controller('NavCtrl', function ($scope, $location) {
    var ctrl = this;
    ctrl.tab = ['articles' , 'authors' , 'notes' , 'questions']

    init();
        
    ctrl.activeTab = function(currentTab) {
        ctrl.tab.forEach(function(tab){
            $scope[tab] = false;
        })
        $scope[currentTab] = true;

        $scope.$emit("activeTab", currentTab);
    }

    function initTab(){
        switch($location.path()){
            case "/articles":
                $scope.articles = true
                break;
            case "/authors":
                $scope.authors = true
                break;
            case "/notes":
                $scope.notes = true
                break;
            case "/questions":
                $scope.questions = true
                break;
        }
    }

    function init() {
        initTab()
    }
  });
