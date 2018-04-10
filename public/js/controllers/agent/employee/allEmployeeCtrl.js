
'use strict';
angular.module('app')
    .controller('allEmployeeCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
        'localStorageService', 'sharedDatasvc', 'globalsvc', '$location',
        function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                 sharedDatasvc, globalsvc, $location) {

        $scope.user=sharedDatasvc.getUser();
            var allEmployeesGetCallPromise= globalsvc.GetData("employees/getAll","Post",
                {"addedBy.UserId":$scope.user.AgentId,
                "addedBy.type":"agent"});
            allEmployeesGetCallPromise.then(function (data) {
                $scope.employees=data.data;
            });
            $scope.editEmployee=function(employee){
                sharedDatasvc.setEmployeeEditState(employee);
                $state.go("app.agent.addEmployee");
            };

            $scope.deleteEmployee=function (employee) {
                var deleteEmployeePromise=globalsvc.GetData("employees/deleteEmployee","Delete",employee);
                deleteEmployeePromise.then(function (data) {
                    debugger;
                    var allEmployeesGetCallPromise= globalsvc.GetData("employees/getAll","Post",{addedBy:{UserId:$scope.user.UserId}});
                    allEmployeesGetCallPromise.then(function (data) {
                        $scope.employees=data.data;
                    });
                });
            };

            $scope.addAgent=function(){
                $state.go("app.admin.addAgent");
            };
            $scope.EmployeeFilter={};
            $scope.filterEmployees =function () {
                for(var a in $scope.EmployeeFilter)
                {
                    if($scope.EmployeeFilter[a]=="Select All")
                    {
                        delete $scope.EmployeeFilter[a];
                    }
                }
                $scope.EmployeeFilter.type="employee";
                $scope.EmployeeFilter["addedBy.type"]="agent";
                $scope.EmployeeFilter["addedBy.UserId"]=$scope.user.AgentId;
                var getFilterAgentPromise=globalsvc.GetData("employees/filterEmployees","post",$scope.EmployeeFilter);
                getFilterAgentPromise.then(function (data) {
                    $scope.employees=data.data;
                });
            };



        }
    ]);


