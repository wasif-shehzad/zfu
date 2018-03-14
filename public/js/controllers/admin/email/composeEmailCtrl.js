
'use strict';
angular.module('app')
    .controller('composeEmailCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
        'localStorageService', 'sharedDatasvc', 'globalsvc', '$location',
        function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                 sharedDatasvc, globalsvc, $location) {
        $scope.user=sharedDatasvc.getUser();

            $scope.draft={};
            $scope.toUser;
            $scope.toCC;

            $scope.saveAsDraft=function () {
                debugger;
                if(!$scope.user.drafts){
                    $scope.user.drafts=[];
                }

                $scope.draft.name="draft"+$scope.user.drafts.length;
                debugger;
                if(!$scope.user.drafts.includes($scope.draft))
                {
                  $scope.user.drafts.push($scope.draft);
                }

                var data={
                    data: {drafts:$scope.user.drafts},
                    UserId:$scope.user.UserId
                };
                $scope.user.emailSetting=$scope.emailSetting;
                sharedDatasvc.setUser($scope.user);
                var saveEmailSettingPromise=globalsvc.GetData("users/save","Post",data);
                saveEmailSettingPromise.then(function (data) {
                    $state.go("app.admin.composeEmail")
                });

            };

        $scope.goToDraft=function(draft)
        {
            $scope.draft=draft;
        };
        $scope.composeEmail=function(){
            $scope.draft.subject="";
            $scope.draft.message="";

        };
        $scope.sendEmail = function () {
          debugger;
          var data={
                To:$scope.toUser,
                CC:$scope.toCC,
            Subject:$scope.draft.subject,
            Message:$scope.draft.message

          }
            var sendEmail=globalsvc.GetData("emails/send","Post",data);
            sendEmail.then(function (data) {

            });

        };

        }
    ]);


