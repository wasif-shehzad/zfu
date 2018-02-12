
'use strict';
angular.module('app')
    .controller('adminLoginCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
        'localStorageService', 'sharedDatasvc', 'globalsvc', '$location',
        function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                 sharedDatasvc, globalsvc, $location) {

            $scope.submit=function(e){
                var url = 'users/signin';
                var method = "post";
                var data = {"userName": $scope.userName,"password": $scope.password};
                var promise = globalsvc.GetData(url, method, data);
              promise.then(function (data) {
                if(data.status && data.code==200)
                {
                    if(data.data.type=="admin")
                    {
                        sharedDatasvc.setUser(data.data);
                        $state.go("app.admin");
                    }else{
                        $state.go("app.adminLogin");
                    }
                }else{
                   $scope.error="invalid userName and Password";
                }
              });
            }





        }
    ]);


