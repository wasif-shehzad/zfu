
'use strict';
angular.module('app')
    .controller('emailSettingCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
        'localStorageService', 'sharedDatasvc', 'globalsvc', '$location',
        function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                 sharedDatasvc, globalsvc, $location) {
        $scope.user=sharedDatasvc.getUser();
        debugger;

            $scope.emailSetting={};
            $scope.emailSetting=$scope.user.emailSetting;

            $scope.saveEmailSetting=function(){
                var data={
                    data:{emailSetting:$scope.emailSetting},
                    UserId:$scope.user.UserId
                };
                $scope.user.emailSetting=$scope.emailSetting;
                sharedDatasvc.setUser($scope.user);
                var saveEmailSettingPromise=globalsvc.GetData("users/save","Post",data);
                saveEmailSettingPromise.then(function (data) {
                    $state.go("app.admin.composeEmail")
                });
            }




        }
    ]);


