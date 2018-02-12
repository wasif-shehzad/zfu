
'use strict';
angular.module('app')
    .controller('addAgentPropertyCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
        'localStorageService', 'sharedDatasvc', 'globalsvc', '$location',
        function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                 sharedDatasvc, globalsvc, $location) {
        $scope.property={};
        $scope.user=sharedDatasvc.getUser();
            $scope.selectPropertyPurose=function (e) {
                $scope.property.purpose=e;
            };
            $scope.selectPropertyType=function (e) {
                $scope.property.type={};
                $scope.property.type.type=e;
            };

            $scope.selectPropertySubtype=function (e) {
              $scope.property.type.subType=e;
            };

            $scope.selectFeatures =function(){
              if($scope.property.type.type=="plot")
              {
                  $("#plotModal").modal('show');
              }else {
                  $("#propertyModal").modal('show');
              }
            };
            $scope.submitProperty=function(){
                $scope.property.addedBy={};
                $scope.property.addedBy.name=$scope.user.firstName;
                $scope.property.addedBy.email=$scope.user.email;
                $scope.property.addedBy.UserId=$scope.user.AgentId;
                $scope.property.addedBy.type="agent";
               var submitProperyPromise=globalsvc.GetData("properties/addProperty","Put",$scope.property);
                submitProperyPromise.then(function (data) {
                   $state.go("app.agent.pendingProperty");
                });
            }
            $scope.saveProperty=function () {
                $scope.property;
                var savePropertyPromise=globalsvc.GetData("properties/saveProperty","post",$scope.property);
                savePropertyPromise.then(function (data) {
                   $state.go("app.agent.allProperty");
                    sharedDatasvc.setPropertyEditState(null);

                });

            }

        }
    ]);


