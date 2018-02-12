
'use strict';
angular.module('app')
    .controller('searchCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
        'localStorageService', 'sharedDatasvc', 'globalsvc', '$location',
        function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                 sharedDatasvc, globalsvc, $location) {


            $scope.user=sharedDatasvc.getUser();

            $scope.filterProperty={};
            $scope.showDate=function (date) {
                var days=Math.floor(( Date.parse(date) - new Date() ) / 86400000)===-1?1:Math.floor(( Date.parse(date) - new Date() ) / 86400000);
              if(days>0){
                  return days;
              }else{
                  return -days;
              }
            };
            $scope.makeFavouriteProperty = function (property) {
                if(!$scope.user.favouriteProperties){
                    $scope.user.favouriteProperties=[];
                }
              $scope.user.favouriteProperties.push(property.PropertyId);
                var saveUserPromise=globalsvc.GetData("users/save","post",{UserId:$scope.user.UserId,data:$scope.user});
                saveUserPromise.then(function (data) {
                    sharedDatasvc.setUser($scope.user);
                });
            };
            $scope.search = function () {
                var userPropertyfilter=globalsvc.GetData("users/filterPropertiesForUser","post",$scope.filterProperty);
                userPropertyfilter.then(function (data) {
                    $scope.properties=data.data;
                });
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


