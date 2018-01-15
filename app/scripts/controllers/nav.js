'use strict';

/**
 * @ngdoc function
 * @name wriMobileApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the wriMobileApp
 */
angular.module('wriMobileApp')
  .controller('NavCtrl', function () {
    var ctrl = this;
    ctrl.isMenuOpen = false;

    ctrl.toggleMenu = function() {
      console.log(ctrl.isMenuOpen);
      ctrl.isMenuOpen ? ctrl.isMenuOpen = false : ctrl.isMenuOpen = true;
    }
  });
