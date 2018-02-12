angular.module('app')
    .factory('googlePlacesApi', ['$window', function ($window) {
        debugger;
    if (!$window.google) throw 'Global `google` var missing. Did you forget to include the places API script?';

    return $window.google;
}])