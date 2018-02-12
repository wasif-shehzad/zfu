
    'use strict';
    angular.module('app')
        .controller('agentDashboardCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
            'localStorageService', 'sharedDatasvc', 'globalsvc', '$location',
            function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                     sharedDatasvc, globalsvc, $location) {

            $scope.obj={};
            $scope.user=sharedDatasvc.getUser();
            var state=$state.$current.self.url;
                state = state.substr(1)
            $scope.obj[state]="theme_color";
            $scope.clickToView=function(e){
                if(e=="agent")
                {
                    $scope.obj={};
                    $scope.obj.agent="theme_color";
                    $state.go("app.agent");
                }else if(e=="addProperty")
                {
                    $scope.obj={};
                    $scope.obj.addProperty="theme_color";
                    $state.go("app.agent.addProperty");
                }else if(e=='pendingProperty')
                {
                    $scope.obj={};
                    $scope.obj.pendingProperty="theme_color";
                    $state.go("app.agent.pendingProperty")
                }
                else if (e=="allProperty")
                {
                    $scope.obj={};
                    $scope.obj.allProperty="theme_color";
                    $state.go("app.agent.allProperty");
                }else if(e=="addEmployee")
                {
                    $scope.obj={};
                    $scope.obj.addEmployee="theme_color";
                    $state.go("app.agent.addEmployee");
                }
                else if (e=="allEmployee")
                {
                    $scope.obj={};
                    $scope.obj.allEmployee="theme_color";
                    $state.go("app.agent.allEmployee");
                }
                else if(e=="profile")
                {
                    $state.go("app.agent.profile");
                }else if(e=="help")
                {
                    $state.go("app.agent.help");
                }else if(e=="logout")
                {
                    $state.go("app.agentLogin");
                }




                // clicktoview ends

            };

            // var userCountPromise=globalsvc.GetData("users/getUserCount","get",null);
            //     userCountPromise.then(function (data) {
            //        $scope.usersCount=data.count;
            //     });
            var employeeCountPromise=globalsvc.GetData("employees/getCount","post",
                {"addedBy.UserId":$scope.user.AgentId,"addedBy.type":"agent"});
                employeeCountPromise.then(function (data) {
                $scope.employeesCount=data.count;
            });
            // // var visitorCountPromise=globalsvc.GetData("getVisitorCount","get",null);
            // // promise.then(function (data) {
            // //     $scope.visitorsCount=data.count;
            // // });
            var propertyCountPromise=globalsvc.GetData("properties/getPropertyCountForAgent","Post",
                {"addedBy.UserId":$scope.user.AgentId,"addedBy.type":"agent"});
                propertyCountPromise.then(function (data) {
                $scope.propertiesCount=data.count;
            });




            }
        ]);


