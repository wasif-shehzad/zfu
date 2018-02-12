
    'use strict';
    angular.module('app')
        .controller('adminDashboardCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
            'localStorageService', 'sharedDatasvc', 'globalsvc', '$location',
            function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                     sharedDatasvc, globalsvc, $location) {

            $scope.user=sharedDatasvc.getUser();
            $scope.obj={};
            var state=$state.$current.self.url;
                state = state.substr(1)
            $scope.obj[state]="theme_color";
            $scope.clickToView=function(e){
                if(e=="admin")
                {
                    $scope.obj={};
                    $scope.obj.admin="theme_color";
                    $state.go("app.admin");
                }else if(e=="addProperty")
                {
                    $scope.obj={};
                    $scope.obj.addProperty="theme_color";
                    $state.go("app.admin.addProperty");
                }else if(e=='pendingProperty')
                {
                    $scope.obj={};
                    $scope.obj.pendingProperty="theme_color";
                    $state.go("app.admin.pendingProperty")
                }
                else if (e=="allProperty")
                {
                    $scope.obj={};
                    $scope.obj.allProperty="theme_color";
                    $state.go("app.admin.allProperty");
                }else if(e=="addAgent")
                {
                    $scope.obj={};
                    $scope.obj.addAgent="theme_color";
                    $state.go("app.admin.addAgent");
                }else if(e=='pendingAgent')
                {
                    $scope.obj={};
                    $scope.obj.pendingAgent="theme_color";
                    $state.go("app.admin.pendingAgent")
                }
                else if (e=="allAgent")
                {
                    $scope.obj={};
                    $scope.obj.allAgent="theme_color";
                    $state.go("app.admin.allAgent");
                }
                else if(e=="emailSetting")
                {
                    $scope.obj={};
                    $scope.obj.emailSetting="theme_color";
                    $state.go("app.admin.emailSetting");
                }
                else if(e=="composeEmail")
                {
                    $scope.obj={};
                    $scope.obj.composeEmail="theme_color";
                    $state.go("app.admin.composeEmail");
                }
                else if(e=="profile")
                {
                    $state.go("app.admin.profile");
                }else if(e=="help")
                {
                    $state.go("app.admin.help");
                }else if(e=="logout")
                {
                    $state.go("app.adminLogin");
                }




                // clicktoview ends

            };

            $scope.approveAgent=function (agent) {
                var data={};
                data.adminApproved=true;
                data.AgentId=agent.AgentId;
                var saveAgentPromise=globalsvc.GetData("agents/saveAgent","post",data);
                saveAgentPromise.then(function (_data) {
                    var pendingAgentsPromise= globalsvc.GetData("agents/pendingAgents","get",{});
                    pendingAgentsPromise.then(function (data) {
                        $scope.pendingAgents=data.data;
                    });
                })
            };
            $scope.approveProperty = function(property){
                property.adminApproved=true;
                var savePropertyPromise=globalsvc.GetData("properties/saveProperty","post",property);
                savePropertyPromise.then(function (data) {
                    var pendingPropertiesPromise= globalsvc.GetData("properties/pendingProperties","get",{});
                    pendingPropertiesPromise.then(function (data) {
                        $scope.pendingProperties=data.data;
                    });

                });
            };

            var userCountPromise=globalsvc.GetData("users/getUserCount","get",null);
                userCountPromise.then(function (data) {
                   $scope.usersCount=data.count;
                });
            var agentCountPromise=globalsvc.GetData("agents/getAgentCount","get",null);
                agentCountPromise.then(function (data) {
                $scope.agentsCount=data.count;
            });
            var pendingAgentsPromise= globalsvc.GetData("agents/pendingAgents","get",{});
            pendingAgentsPromise.then(function (data) {
                $scope.pendingAgents=data.data;
            });
            var pendingPropertiesPromise= globalsvc.GetData("properties/pendingProperties","get",{});
                pendingPropertiesPromise.then(function (data) {
                $scope.pendingProperties=data.data;
            });
            // var visitorCountPromise=globalsvc.GetData("getVisitorCount","get",null);
            // promise.then(function (data) {
            //     $scope.visitorsCount=data.count;
            // });
            var propertyCountPromise=globalsvc.GetData("properties/getPropertyCount","get",null);
                propertyCountPromise.then(function (data) {
                $scope.propertiesCount=data.count;
            });




            }
        ]);


