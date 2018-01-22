'use strict';

/**
 * @ngdoc function
 * @name wriMobileApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wriMobileApp
 */
angular.module('wriMobileApp')
    .controller('MainCtrl', function ($scope) {

        var ctrl = this;
        $scope.articles = true;
        ctrl.tab = ['articles' , 'authors' , 'notes' , 'questions']


        ctrl.activeTab = function(currentTab) {
            ctrl.tab.forEach(function(tab){
                $scope[tab] = false;
            })
            $scope[currentTab] = true;
        }

        function init() {
            
        }

        $scope.$on("activeTab", function(event, data){
            ctrl[data] = true;
        })
    });
