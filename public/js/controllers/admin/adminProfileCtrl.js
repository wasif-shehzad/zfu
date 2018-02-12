
    'use strict';
    angular.module('app')
        .controller('adminProfileCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
            'localStorageService', 'sharedDatasvc', 'globalsvc', '$location',
            function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                     sharedDatasvc, globalsvc, $location) {

                $scope.view=''
                    $scope.user=sharedDatasvc.getUser();
                $scope.changeView=function(e){
                    $scope.view=e;
                    if(e=='about')
                    {
                        $scope.view='about';
                    }else if(e=='edit-profile')
                    {
                        $scope.view='edit-profile';
                    }else if(e== 'user-activities')
                    {
                        $scope.view='user-activities';
                    }else if(e=='mymessage')
                    {
                        $scope.view='mymessage';
                    }
                }



            }
        ]);


