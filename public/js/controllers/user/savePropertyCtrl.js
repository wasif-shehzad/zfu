
'use strict';
angular.module('app')
    .controller('savePropertyCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
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
            var getFavouritePropertiesPromise= globalsvc.GetData("properties/favouriteProperties","post",{data:$scope.user.favouriteProperties});
            getFavouritePropertiesPromise.then(function (data) {
               $scope.properties=data.data;
            });
            $scope.showProperty = function (item) {
                sharedDatasvc.setProperty(item);
                $state.go("app.user.property");
            };

            // var userCountPromise=globalsvc.GetData("users/getUserCount","get",null);
            //     userCountPromise.then(function (data) {
            //        $scope.usersCount=data.count;
            //     });
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


