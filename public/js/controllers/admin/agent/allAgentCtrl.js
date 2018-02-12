
'use strict';
angular.module('app')
    .controller('allAgentCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
        'localStorageService', 'sharedDatasvc', 'globalsvc', '$location',
        function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                 sharedDatasvc, globalsvc, $location) {

       var allAgentsGetCallPromise= globalsvc.GetData("agents/getAll","Get",null);
            allAgentsGetCallPromise.then(function (data) {
               $scope.agents=data.data;
            });
       // var allCitiesPromise= globalsvc.GetData("agents/AllCities","Get",null);
       //      allCitiesPromise.then(function (data) {
       //         $scope.cities=data.data;
       //      });
       $scope.editAgent=function(agent){
           sharedDatasvc.setAgetEditState(agent);
           $state.go("app.admin.addAgent");
       };

       $scope.deleteAgent=function (agent) {
           var deleteAgentPromise=globalsvc.GetData("agents/deleteAgent","Delete",agent);
           deleteAgentPromise.then(function (data) {
             var  updateAllAgentsGetCallPromise= globalsvc.GetData("agents/getAll","Get",null);
               updateAllAgentsGetCallPromise.then(function (data) {
                   $scope.agents=data.data;
               });
           });
       };

       $scope.addAgent=function(){
            $state.go("app.admin.addAgent");
        };
        $scope.agentFilter={};
       $scope.filterAgents =function () {
           for(var a in $scope.agentFilter)
           {
               if($scope.agentFilter[a]=="Select All")
               {
                   delete $scope.agentFilter[a];
               }
           }
           $scope.agentFilter.type="agent";
           var getFilterAgentPromise=globalsvc.GetData("agents/filterAgents","post",$scope.agentFilter);
           getFilterAgentPromise.then(function (data) {
               $scope.agents=data.data;
           });
       };



        }
    ]);


