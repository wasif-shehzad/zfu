
'use strict';
angular.module('app')
    .controller('userProfileCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
        'localStorageService', 'sharedDatasvc', 'globalsvc', '$location',
        function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                 sharedDatasvc, globalsvc, $location) {

            $scope.obj={};
            $scope.user=sharedDatasvc.getUser();
            if(!$scope.user){
                $state.go("app.user.login");
            }
            $scope.imageUpload = function(event){
                var files = event.target.files; //FileList object
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    var reader = new FileReader();
                    reader.onload = $scope.imageIsLoaded;
                    reader.readAsDataURL(file);
                }
            };

            $scope.imageIsLoaded = function(e){
                $scope.$apply(function() {
                    $scope.user.image=e.target.result;
                });
            };
            $scope.clickToView=function(e){
             if(e=="login")
                {
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
             }




                // clicktoview ends

            };
            $scope.saveUser = function () {
                var saveUserPromise=globalsvc.GetData("users/save","post",{UserId:$scope.user.UserId,data:$scope.user});
                saveUserPromise.then(function (data) {
                    sharedDatasvc.setUser($scope.user);
                    });
            };
            $scope.changePassword = function () {
                if($scope.password && $scope.password == $scope.cPassword){
                    $scope.user.password=$scope.password;
                    var saveUserPromises=globalsvc.GetData("users/save","post",{UserId:$scope.user.UserId,data:$scope.user});
                    saveUserPromises.then(function (data) {
                        $scope.password="";
                        $scope.cPassword="";
                        sharedDatasvc.setUser($scope.user);
                    });
                }

            };
            $scope.uploadPicture=function(){
                $('picModal').modal('show');
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


