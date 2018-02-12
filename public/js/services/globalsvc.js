

angular.module('app')
    .factory('globalsvc', ['$http','$log', '$q', '$state', 'localStorageService', 'sharedDatasvc',
        function($http, $log, $q, $state, localStorageService, sharedDatasvc) {
        return {
            GetData: function(url, method, data) {
                var deferred = $q.defer();
                $http({
                    url: url,
                    method: method,
                    dataType: "json",
                    data: data,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).error(function (data, status, headers, config) {
                         $state.go("app.loginAgent");
                        deferred.resolve(data);

                });
                return deferred.promise;

                }
            }

}]);
