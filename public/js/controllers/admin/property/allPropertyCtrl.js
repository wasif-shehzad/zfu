
'use strict';
angular.module('app')
    .controller('allPropertyCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
        'localStorageService', 'sharedDatasvc', 'globalsvc', '$location',
        function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                 sharedDatasvc, globalsvc, $location) {

        $scope.propertyFilter={};
            var allPropertiesGetCallPromise= globalsvc.GetData("properties/getAll","Post",{});
            allPropertiesGetCallPromise.then(function (data) {
                $scope.properties=data.data;
            });

            $scope.deleteProperty=function (property) {
                debugger;
                var deletePropertyPromise=globalsvc.GetData("properties/deleteProperty","Delete",property);
                deletePropertyPromise.then(function (data) {
                    var  updateAllPropertiesGetCallPromise= globalsvc.GetData("properties/getAll","Get",null);
                    updateAllPropertiesGetCallPromise.then(function (data) {
                        $scope.properties=data.data;
                        $scope.filterProperties();
                    });
                });
            };

            $scope.editProperty=function (property) {
                sharedDatasvc.setPropertyEditState(property);
                $state.go("app.admin.editProperty");
            };

            $scope.addNewProperty =function(){
                $state.go('app.admin.addProperty');
            };
            $scope.filterProperties= function(e){
                $scope.propertyFilter;
                for(var a in $scope.propertyFilter)
                {
                    if($scope.propertyFilter[a]=="Select All")
                    {
                        delete $scope.propertyFilter[a];
                    }
                }
               var getFilterPropertyPromise=globalsvc.GetData("properties/filterProperties","post",$scope.propertyFilter);
                getFilterPropertyPromise.then(function (data) {
                    $scope.properties=data.data;
                });
            };



        }
    ]);


