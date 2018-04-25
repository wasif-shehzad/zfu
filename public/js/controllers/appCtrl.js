
    'use strict';
    angular.module('app')
        .controller('appCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
            'localStorageService', 'sharedDatasvc', 'globalsvc', '$location',
            function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                     sharedDatasvc, globalsvc, $location) {
            $scope.property={};
            $scope.property.type={};
            $scope.property.features={};
                $scope.routeToAdmin=function(){
                    $state.go("app.adminLogin");
                };
                if(sharedDatasvc.getUser()){
                    $scope.loggedIN=true;
                }else{
                    $scope.loggedIN=false;
                }
                $scope.logout = function(){
                    sharedDatasvc.setUser(null);
                    $state.go("app.user.login");
                };
                $scope.selectRange = function(e){
                  debugger;
                };
                $scope.goToSearch = function (e) {
                    debugger;
                    $scope.property.price=+$('.leftLabel')[e].innerText;
                    $scope.property.maxPrice=+$('.rightLabel')[e].innerText;
                    sharedDatasvc.setDataForPropertySearch($scope.property);
    //                $state.go("app.user.search");
                };
                $scope.selectBaths = function (e) {
                    debugger;
                    $scope.property.features.bathrooms=4;
                };

                $scope.clickToView=function(e){
                    if(e=="login")
                    {
                        $state.go("app.user.login");
                    }
                    else if(e=="profile")
                    {
                        $state.go("app.user.profile");
                    } else if(e=="myProperties")
                    {
                        $state.go("app.user.myProperties");
                    } else if(e=="saveProperty")
                    {
                        $state.go("app.user.saveProperty");
                    } else if(e=="submitProperty")
                    {
                        $state.go("app.user.submitProperty");
                    }else if(e=="search")
                    {
                        $state.go("app.user.search");
                    }else if(e=="agents")
                    {
                        $state.go("app.user.agents");
                    }else if(e=="contact")
                    {
                        $state.go("app.user.contact");
                    }else if(e=="home")
                    {
                        $state.go("app");
                    }


                };

            }


        ]);


