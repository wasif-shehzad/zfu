
'use strict';
angular.module('app')
    .controller('addEmployeeCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
        'localStorageService', 'sharedDatasvc', 'globalsvc', '$location',
        function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                 sharedDatasvc, globalsvc, $location) {

            $scope.employee={};
            $scope.Employee={};
            $scope.user=sharedDatasvc.getUser();
            if(sharedDatasvc.getEmployeeEditState())
            {
                $scope.Employee.edit=true;
                $scope.employee=sharedDatasvc.getEmployeeEditState();
             //   sharedDatasvc.setEmployeeEditState(null);
            }else {

                $scope.Employee.edit=false;
            }
            $scope.submitEmployee=function(){
                if($scope.employee.password== $scope.confirmPassword){
                    $scope.employee.addedBy={};
                    $scope.employee.addedBy.name=$scope.user.firstName;
                    $scope.employee.addedBy.type="agent";
                    $scope.employee.addedBy.email=$scope.user.email;
                    $scope.employee.addedBy.UserId=$scope.user.AgentId;
                    $scope.employee.type="employee";
                    var addEmployeePromise=globalsvc.GetData("employees/addEmployee","Put",$scope.employee);
                    addEmployeePromise.then(function (data) {
                        if(data.status){
                            $scope.errorPassword="";
                            $state.go("app.agent.allEmployee");
                        }else{
                            $scope.errorPassword=data.message;
                        }

                    });

                }else {
                    $scope.errorPassword="Password doesn't match";
                }


            };
            $scope.editEmployee=function () {
                var data={};
                data.firstName=$scope.employee.firstName;
                data.lastName=$scope.employee.lastName;
                data.password=$scope.employee.password;
                data.contact=$scope.employee.contact;
                data.email=$scope.employee.email;
                data.EmployeeId=$scope.employee.EmployeeId;
                var saveEmployeePromise=globalsvc.GetData("employees/saveEmployee","post",data);
                saveEmployeePromise.then(function (_data) {
                    $state.go("app.agent.allEmployee");
                });
            }


        }
    ]);


