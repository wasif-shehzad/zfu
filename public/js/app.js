
var app=angular.module('app',[
    'ui.router',
    'LocalStorageModule'
])
    .config(function (localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('app');
    });

angular.module('app')
    .config(function (localStorageServiceProvider) {
        localStorageServiceProvider
            .setStorageType('localStorage');
    });
angular.module('app')
    .config(function (localStorageServiceProvider) {
        localStorageServiceProvider
            .setNotify(true, true);
    });
