
'use strict';
angular.module('app')
    .controller('agentLoginCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
        'localStorageService', 'sharedDatasvc', 'globalsvc', '$location',
        function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                 sharedDatasvc, globalsvc, $location) {

            $scope.submit=function(e){
                var url = 'agents/signin';
                var method = "post";
                var data = {"userName": $scope.userName,"password": $scope.password};
                var promise = globalsvc.GetData(url, method, data);
              promise.then(function (data) {
                if(data.status && data.code==200)
                {
                   if(data.data.type=="agent")
                    {
                        sharedDatasvc.setUser(data.data);
                        $state.go("app.agent");
                    }else{
                        $state.go("app.agentLogin");
                    }
                }else{
                    $scope.error="invalid userName and Password";
                }
              });
            }





        }
    ]);


