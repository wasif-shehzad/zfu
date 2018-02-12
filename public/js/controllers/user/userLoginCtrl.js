
'use strict';
angular.module('app')
    .controller('userLoginCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
        'localStorageService', 'sharedDatasvc', 'globalsvc', '$location',
        function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                 sharedDatasvc, globalsvc, $location) {

            $scope.user={};
            $scope.view={}
            $scope.switchView=function(e) {
                $scope.view.sign=e;
            };
            $scope.signIN=function(){
                debugger;
                var signINPromise=globalsvc.GetData("users/signin","post",$scope.user);

                signINPromise.then(function (data) {
                    debugger;
                    sharedDatasvc.setUser(data.data);
                    $state.go("app.user.profile");
                });

            };
            $scope.signUP=function () {
                if($scope.user.password && $scope.user.password===$scope.user.cPassword){
                    delete $scope.user.cPassword;
                    var singupPromise=globalsvc.GetData("users/signup","post",$scope.user);
                    singupPromise.then(function (data) {
                        $state.reload();
                    });
                }

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


