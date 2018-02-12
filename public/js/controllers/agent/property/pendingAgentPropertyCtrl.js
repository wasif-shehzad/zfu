
'use strict';
angular.module('app')
    .controller('pendingAgentPropertyCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
        'localStorageService', 'sharedDatasvc', 'globalsvc', '$location',
        function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                 sharedDatasvc, globalsvc, $location) {

        $scope.user=sharedDatasvc.getUser();


            var agentPendingProperties=globalsvc.GetData("properties/pendingAgentProperties","post",
                {AgentId: $scope.user.AgentId});
            agentPendingProperties.then(function (data) {
                $scope.properties=data.data;
            });



        }
    ]);


