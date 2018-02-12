
'use strict';
angular.module('app')
    .controller('pendingAgentCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
        'localStorageService', 'sharedDatasvc', 'globalsvc', '$location',
        function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                 sharedDatasvc, globalsvc, $location) {

            var pendingAgentsPromise= globalsvc.GetData("agents/pendingAgents","get",{});
            pendingAgentsPromise.then(function (data) {
                $scope.agents=data.data;
            });

            $scope.approveAgent=function (agent) {
                var data={};
                data.adminApproved=true;
                data.AgentId=agent.AgentId;
                var saveAgentPromise=globalsvc.GetData("agents/saveAgent","post",data);
                saveAgentPromise.then(function (_data) {
                    $state.go("app.admin.allAgent");
                })
            }



        }
    ]);


