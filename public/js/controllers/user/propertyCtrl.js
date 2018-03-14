
'use strict';
angular.module('app')
    .controller('propertyCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
        'localStorageService', 'sharedDatasvc', 'globalsvc', '$location',
        function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                 sharedDatasvc, globalsvc, $location) {

            $scope.property=sharedDatasvc.getProperty();
            $scope.Date =new Date($scope.property.addedAt).toLocaleDateString("en-US")
                $scope.user=sharedDatasvc.getUser();

            var id;
            var url;
            id=$scope.property.addedBy.UserId;
            debugger;
            if($scope.property.addedBy.type==="agent"){
                url="agents/agent/";
            }else if($scope.property.addedBy.type ==="user"){
                url="users/user/";
                if(!$scope.property.addedBy.UserId)
                {
                    id=$scope.property.addedBy.AgentId;
                }

            }
            var getUser=globalsvc.GetData(url+id,"get",null);
            debugger;
            getUser.then(function (data) {
                debugger;
                   $scope.agent=data.data[0];
                });
            $scope.clickToView=function(e){
             if(e=="login")
                {
                    $state.go("app.user.login");
                }
             else if(e=="profile")
                {
                    $state.go("app.user.profile");
                }
            else if(e=="myProperties")
                {
                    $state.go("app.user.myProperties");
                }
            else if(e=="search")
                {
                 $state.go("app.user.search");
                }
            else if(e=="agents")
             {
                 $state.go("app.user.agents");
             }
            else if(e=="contact")
             {
                 $state.go("app.user.contact");
             }
             else if(e=="home")
             {
                 $state.go("app.user");
             }




                // clicktoview ends

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


