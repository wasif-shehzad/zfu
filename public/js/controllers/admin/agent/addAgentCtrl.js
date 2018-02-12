
'use strict';
angular.module('app')
    .controller('addAgentCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
        'localStorageService', 'sharedDatasvc', 'globalsvc', '$location',
        function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                 sharedDatasvc, globalsvc, $location) {

        $scope.agent={};
        $scope.Agent={};
        if(sharedDatasvc.getAgetEditState())
        {
            $scope.Agent.edit=true;
            $scope.agent=sharedDatasvc.getAgetEditState();
            sharedDatasvc.setAgetEditState(null);
        }else {

            $scope.Agent.edit=false;
        }
            $scope.submitAgent=function(){
                if($scope.agent.password== $scope.confirmPassword){
                    $scope.agent.userName= $scope.agent.email;
                    $scope.agent.adminApproved=true;
                    $scope.agent.type="agent";
                    var addAgentPromise=globalsvc.GetData("agents/addAgent","Put",$scope.agent);
                    addAgentPromise.then(function (data) {
                        if(data.status){
                            $scope.errorPassword="";
                            $state.go("app.admin.allAgent");
                        }else{
                            $scope.errorPassword=data.message;
                        }

                    });

                }else {
                    $scope.errorPassword="Password doesn't match";
                }


            };
        $scope.editAgent=function () {
            var data={};
            data.firstName=$scope.agent.firstName;
            data.lastName=$scope.agent.lastName;
            data.password=$scope.agent.password;
            data.contact=$scope.agent.contact;
            data.autoApprove=$scope.agent.autoApprove;
            data.email=$scope.agent.email;
            data.AgentId=$scope.agent.AgentId;
            var saveAgentPromise=globalsvc.GetData("agents/saveAgent","post",data);
            saveAgentPromise.then(function (_data) {
                $state.go("app.admin.allAgent");
            })
        }


        }
    ]);


