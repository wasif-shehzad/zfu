
'use strict';
angular.module('app')
    .controller('myPropertiesCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
        'localStorageService', 'sharedDatasvc', 'globalsvc', '$location',
        function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                 sharedDatasvc, globalsvc, $location) {

            $scope.obj={};
            $scope.user=sharedDatasvc.getUser();
            if(!$scope.user){
                $state.go("app.user.login")
            }
            $scope.clickToView=function(e){
                if(e=="logout")
                {
                    sharedDatasvc.setUser(null);
                    $state.go("app.user.login");
                }
                else if(e=="myProperties")
                {
                    $state.go("app.user.myProperties");
                }
                else if(e=="submitProperty")
                {
                    $state.go("app.user.submitProperty");
                }else if(e=="saveProperty")
                {
                    $state.go("app.user.saveProperty");
                }else if(e=="profile")
                {
                    $state.go("app.user.profile");
                }




                // clicktoview ends

            };

            var getUserproperties=globalsvc.GetData("users/getUserProperties","post",$scope.user);
            getUserproperties.then(function (data) {
                   $scope.myProperties=data.data;
                });
            $scope.editProperty = function(property){
                sharedDatasvc.setPropertyEditState(property);
                $state.go("app.user.editProperty");
            };

            $scope.showProperty = function (item) {
                sharedDatasvc.setProperty(item);
                $state.go("app.user.property");
            };
            // var employeeCountPromise=globalsvc.GetData("employees/getCount","post",
            //     {"addedBy.UserId":$scope.user.AgentId,"addedBy.type":"agent"});
            // employeeCountPromise.then(function (data) {
            //     $scope.employeesCount=data.count;
            // });
            // // var visitorCountPromise=globalsvc.GetData("getVisitorCount","get",null);
            // // promise.then(function (data) {
            // //     $scope.visitorsCount=data.count;
            // // });
            // var propertyCountPromise=globalsvc.GetData("properties/getPropertyCountForAgent","Post",
            //     {"addedBy.UserId":$scope.user.AgentId,"addedBy.type":"agent"});
            // propertyCountPromise.then(function (data) {
            //     $scope.propertiesCount=data.count;
            // });




        }
    ]);


