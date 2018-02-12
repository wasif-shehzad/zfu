
    'use strict';
    angular.module('app')
        .controller('appCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
            'localStorageService', 'sharedDatasvc', 'globalsvc', '$location',
            function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                     sharedDatasvc, globalsvc, $location) {
                $scope.routeToAdmin=function(){
                    $state.go("app.adminLogin");
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
                    }


                };

            }


        ]);


