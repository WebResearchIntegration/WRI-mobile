'use strict';
/**
 * @ngdoc function
 * @name wriMobileApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the wriMobileApp
 */
angular.module('wriMobileApp').controller('NavCtrl', function($scope, $location) {

    var ctrl = this;
    ctrl.tab = ['articles', 'authors', 'notes', 'questions']

    init();

    function activeTab(currentTab) {
        ctrl.tab.forEach(function(tab) {
            $scope[tab] = false;
        })
        $scope[currentTab] = true;
    }

    function init() {
        var tab = $location.$$path.substring(1);
        activeTab(tab)
    }
});