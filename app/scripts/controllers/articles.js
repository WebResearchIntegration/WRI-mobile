'use strict';

/**
 * @ngdoc function
 * @name wriMobileApp.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the wriMobileApp
 */
angular.module('wriMobileApp')
    .controller('ArticlesCtrl', function ($scope, Articles) {

        var ctrl = this;
        $scope.viewer = false;
        ctrl.currentArticle;

        init()

        ctrl.openViewer = function (article){
            ctrl.currentArticle = article
            var momentDate = moment(ctrl.currentArticle.publishedDate)
            ctrl.currentArticle.publishedDate = momentDate.format("DD/MM/YYYY"); 
            $scope.viewer = true;
            $scope.searchIsActive =  false;
        }

        ctrl.closeViewer = function (){
          ctrl.currentArticle = null;
          $scope.viewer = false;
        }

        ctrl.cancelSearch = function () {
            $scope.search.name = ""
        }


        function init() {
            Articles.getAll().then(function(articles) {
                ctrl.articles = articles;
            }, function (err) {
                console.log('Erreur get all articles ', err );  
            });
        }
    })
    
