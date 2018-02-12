
'use strict';
angular.module('app')
    .controller('editAgentPropertyCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
        'localStorageService', 'sharedDatasvc', 'globalsvc', '$location',
        function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                 sharedDatasvc, globalsvc, $location) {
            $scope.property= sharedDatasvc.getPropertyEditState();
            debugger;
            $scope.selectPropertyPurpose=function (e) {
                $scope.property.purpose=e;
            };
            $scope.selectPropertyType=function (e) {
                $scope.property.type={};
                $scope.property.type.type=e;
            };

            $scope.selectPropertySubtype=function (e) {
                $scope.property.type.subType=e;
            };

            $scope.selectFeatures =function(){
                if($scope.property.type.type=="plot")
                {
                    $("#plotModal").modal('show');
                }else {
                    $("#propertyModal").modal('show');
                }
            };
            $scope.saveProperty=function () {
                var savePropertyPromise=globalsvc.GetData("properties/saveProperty","post",$scope.property);
                savePropertyPromise.then(function (data) {
                    $state.go("app.agent.allProperty");

                });

            }

        }
    ]);


