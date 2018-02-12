
'use strict';
angular.module('app')
    .controller('allAgentPropertyCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
        'localStorageService', 'sharedDatasvc', 'globalsvc', '$location',
        function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                 sharedDatasvc, globalsvc, $location) {

        $scope.propertyFilter={};
        $scope.user=sharedDatasvc.getUser();
        $scope.user=sharedDatasvc.getUser();

            var allPropertiesGetCallPromise= globalsvc.GetData("properties/getAllByAgent","Post",
                {"addedBy.UserId":$scope.user.AgentId,"addedBy.type":"agent","adminApproved":true});
            allPropertiesGetCallPromise.then(function (data) {
                $scope.properties=data.data;
            });

            $scope.deleteProperty=function (property) {
                var deletePropertyPromise=globalsvc.GetData("properties/deleteProperty","Delete",property);
                deletePropertyPromise.then(function (data) {
                    var data={"addedBy.UserId":$scope.user.AgentId,
                        "addedBy.type":"agent",
                        "adminApproved":true
                    };

                    var allPropertiesGetCallPromise= globalsvc.GetData("properties/getAllByAgent","Post",data);
                    allPropertiesGetCallPromise.then(function (data) {
                        $scope.properties=data.data;
                    });

                });
            };

            $scope.editProperty=function (property) {
                sharedDatasvc.setPropertyEditState(property);
                $state.go("app.agent.editProperty");
            };

            $scope.addNewProperty =function(){
                $state.go('app.agent.addProperty');
            };
            $scope.filterProperties= function(e){
                for(var a in $scope.propertyFilter)
                {
                    if($scope.propertyFilter[a]=="Select All")
                    {
                        delete $scope.propertyFilter[a];
                    }

                }
                $scope.propertyFilter["addedBy.type"]="agent";
                $scope.propertyFilter["addedBy.UserId"]=$scope.user.AgentId;

               var getFilterPropertyPromise=globalsvc.GetData("properties/filterPropertiesForAgent","post",$scope.propertyFilter);
                getFilterPropertyPromise.then(function (data) {
                    $scope.properties=data.data;
                });
            };



        }
    ]);


