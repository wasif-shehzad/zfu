
'use strict';
angular.module('app')
    .controller('submitPropertyCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
        'localStorageService', 'sharedDatasvc', 'globalsvc', '$location',
        function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                 sharedDatasvc, globalsvc, $location) {

            $scope.property={};
            $scope.property.type={};
            $scope.property.images = [];
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
                    $scope.property.images.push(e.target.result);
                });
            };
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
            $scope.propertyPurpose=function (e) {
              $scope.property.purpose=e;
            };
            $scope.propertyType=function (e) {
              $scope.property.type.type=e;
            };
            $scope.propertySubType=function (e) {
                debugger;
              $scope.property.type.subType=e;
            };
            $scope.submitProperty = function () {
                debugger;
                $scope.property.addedBy={};
                $scope.property.addedBy.name=$scope.user.name;
                $scope.property.addedBy.email=$scope.user.email;
                $scope.property.addedBy.UserId=$scope.user.UserId;
                $scope.property.addedBy.type="user";

                var userSubmitProperty=globalsvc.GetData("properties/addProperty","put",$scope.property);
                userSubmitProperty.then(function (data) {
                    sharedDatasvc.setProperty(data.data);
                    $state.go("app.user.property");
                      debugger;
                    });
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


