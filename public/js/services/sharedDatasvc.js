

angular.module('app')
    .factory('sharedDatasvc', ['$log', 'localStorageService','$state',
        function ($log, localStorageService,$state) {
        var user;
         var properties;
         var property;
         var agentEditState;
         var employeeEditState;
         var propertyEditState;
         var searchProperty;

        return {
            setProperty:function(item){
                property={};
                property=item;
                localStorageService.remove('property');
                localStorageService.set('property', item);
            },
            getProperty:function(){
                if (typeof property == "undefined" || property == null) {
                    property = localStorageService.get('property');
                    return property;
                }
                else if (Object.keys(property).length != 0) {
                    return property
                }
                else {
                    property = localStorageService.get('property');
                    return property;
                }
            },
            setUser: function (data) {
                user = {};
                user = data;
                localStorageService.remove('user');
                localStorageService.set('user', data);
            },

            getUser: function () {
                if (typeof user == "undefined" || user == null) {
                    user = localStorageService.get('user');
                    return user;
                }
                else if (Object.keys(user).length != 0) {
                    return user
                }
                else {
                    user = localStorageService.get('user');
                    return user;
                }
            },
            getAgetEditState:function(){
                return agentEditState;
            },
            setAgetEditState:function(value){
                agentEditState={};
                agentEditState=value;
            },
            setEmployeeEditState:function (value) {
                employeeEditState={};
                employeeEditState=value;
            },
            getEmployeeEditState:function () {
              return  employeeEditState;
            },
            setPropertyEditState:function (value) {
                propertyEditState={};
                propertyEditState=value;
                localStorageService.remove('property');
                localStorageService.set('property', value);

            },
            getPropertyEditState:function () {
                if (typeof propertyEditState == "undefined" || propertyEditState == null) {
                    propertyEditState = localStorageService.get('property');
                    return propertyEditState;
                }
                else if (Object.keys(propertyEditState).length != 0) {
                    return propertyEditState;
                }
                else {
                    propertyEditState = localStorageService.get('property');
                    return propertyEditState;
                }
            },
            setDataForPropertySearch:function(data){
                searchProperty={};
                searchProperty=data;
            },
            getDataForPropertySearch:function(){
                    return searchProperty;
            }

        };
    }]);
