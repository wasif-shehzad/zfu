
'use strict';
angular.module('app')
    .controller('pendingPropertyCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
        'localStorageService', 'sharedDatasvc', 'globalsvc', '$location',
        function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                 sharedDatasvc, globalsvc, $location) {

        $scope.user=sharedDatasvc.getUser();
            var pendingPropertiesPromise= globalsvc.GetData("properties/pendingProperties","get",{});
            pendingPropertiesPromise.then(function (data) {
                $scope.pendingProperties=data.data;
            });

        $scope.deleteProperty=function (property) {
            var deletePropertyPromise=globalsvc.GetData("properties/deleteProperty","Delete",property);
            deletePropertyPromise.then(function (data) {
                var pendingPropertiesPromise= globalsvc.GetData("properties/pendingProperties","get",{});
                pendingPropertiesPromise.then(function (data) {
                    $scope.pendingProperties=data.data;
                });
            });
        };


        }
    ]);


