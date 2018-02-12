/* ============================================================
 * File: config.js
 * Configure routing
 * ============================================================ */
angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider',

        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider
                .otherwise('app');
            $stateProvider
                .state('app', {
                    url: "/app",
                    templateUrl: "views/app.html",
                    controller: 'appCtrl'
                })

        }]);