
'use strict';
angular.module('app')
    .controller('submitPropertyCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
        'localStorageService', 'sharedDatasvc', 'globalsvc', '$location',
        function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                 sharedDatasvc, globalsvc, $location) {

            $scope.property={};
            $scope.property.type={};
            $scope.property.images = [];
            $scope.imageUpload = function(event){
                var files = event.target.files; //FileList object
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    var reader = new FileReader();
                    reader.onload = $scope.imageIsLoaded;
                    reader.readAsDataURL(file);
                }
            };

            $scope.imageIsLoaded = function(e){
                $scope.$apply(function() {
                    $scope.property.images.push(e.target.result);
                });
            };
            $scope.user=sharedDatasvc.getUser();
            if(!$scope.user){
                $state.go("app.user.login");
            }
            $scope.clickToView=function(e){
                if(e=="logout")
                {
                    sharedDatasvc.setUser(null);
                    $state.go("app.user.login");
                }
                else if(e=="myProperties")
                {
                    $state.go("app.user.myProperties");
                }
                else if(e=="submitProperty")
                {
                    $state.go("app.user.submitProperty");
                }else if(e=="saveProperty")
                {
                    $state.go("app.user.saveProperty");
                }else if(e=="profile")
                {
                    $state.go("app.user.profile");
                }





                // clicktoview ends

            };
            $scope.propertyPurpose=function (e) {
              $scope.property.purpose=e;
            };
            $scope.propertyType=function (e) {
              $scope.property.type.type=e;
            };
            $scope.propertySubType=function (e) {
              $scope.property.type.subType=e;
            };
            $scope.removeImage=function(e){
                $scope.property.images.splice(e,1);

            };
            $scope.submitProperty = function () {
               if(!$scope.property.address || !$scope.property.price || !$scope.property.title || !$scope.property.purpose || !$scope.property.type.type){
                   return;
               }
               $scope.property.address= $('#pac-input')[0].value;
                $scope.property.addedBy={};
                $scope.property.addedBy.name=$scope.user.name;
                $scope.property.addedBy.email=$scope.user.email;
                $scope.property.addedBy.UserId=$scope.user.UserId;
                $scope.property.addedBy.type="user";

                var userSubmitProperty=globalsvc.GetData("properties/addProperty","put",$scope.property);
                userSubmitProperty.then(function (data) {
                    sharedDatasvc.setProperty(data.data);
                    $state.go("app.user.property");
                    });
            };


            // var employeeCountPromise=globalsvc.GetData("employees/getCount","post",
            //     {"addedBy.UserId":$scope.user.AgentId,"addedBy.type":"agent"});
            // employeeCountPromise.then(function (data) {
            //     $scope.employeesCount=data.count;
            // });
            // // var visitorCountPromise=globalsvc.GetData("getVisitorCount","get",null);
            // // promise.then(function (data) {
            // //     $scope.visitorsCount=data.count;
            // // });
            // var propertyCountPromise=globalsvc.GetData("properties/getPropertyCountForAgent","Post",
            //     {"addedBy.UserId":$scope.user.AgentId,"addedBy.type":"agent"});
            // propertyCountPromise.then(function (data) {
            //     $scope.propertiesCount=data.count;
            // });

 $scope.initMap=function()
             {
                var map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: 31.5204, lng: 74.3587},
                    zoom: 13
                });
                var card = document.getElementById('pac-card');
                var input = document.getElementById('pac-input');
                var types = document.getElementById('type-selector');
                var strictBounds = document.getElementById('strict-bounds-selector');

                map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);
                var autocomplete = new google.maps.places.Autocomplete(input);

                // Bind the map's bounds (viewport) property to the autocomplete object,
                // so that the autocomplete requests use the current map bounds for the
                // bounds option in the request.
                autocomplete.bindTo('bounds', map);

                var infowindow = new google.maps.InfoWindow();
                var infowindowContent = document.getElementById('infowindow-content');
                infowindow.setContent(infowindowContent);
                var marker = new google.maps.Marker({
                    map: map,
                    anchorPoint: new google.maps.Point(0, -29)
                });

                autocomplete.addListener('place_changed', function() {
                    infowindow.close();
                    marker.setVisible(false);
                    var place = autocomplete.getPlace();
                    if (!place.geometry) {
                        // User entered the name of a Place that was not suggested and
                        // pressed the Enter key, or the Place Details request failed.
                        window.alert("No details available for input: '" + place.name + "'");
                        return;
                    }

                    // If the place has a geometry, then present it on a map.
                    if (place.geometry.viewport) {
                        map.fitBounds(place.geometry.viewport);
                    } else {
                        map.setCenter(place.geometry.location);
                        map.setZoom(17);  // Why 17? Because it looks good.
                    }
                    marker.setPosition(place.geometry.location);
                    marker.setVisible(true);

                    var address = '';
                    if (place.address_components) {
                        address = [
                            (place.address_components[0] && place.address_components[0].short_name || ''),
                            (place.address_components[1] && place.address_components[1].short_name || ''),
                            (place.address_components[2] && place.address_components[2].short_name || '')
                        ].join(' ');
                    }

                    infowindowContent.children['place-icon'].src = place.icon;
                    infowindowContent.children['place-name'].textContent = place.name;
                    infowindowContent.children['place-address'].textContent = address;
                    infowindow.open(map, marker);
                });

                // Sets a listener on a radio button to change the filter type on Places
                // Autocomplete.
                function setupClickListener(id, types) {
                    var radioButton = document.getElementById(id);
                    radioButton.addEventListener('click', function() {
                        autocomplete.setTypes(types);
                    });
                }

                setupClickListener('changetype-all', []);
                setupClickListener('changetype-address', ['address']);
                setupClickListener('changetype-establishment', ['establishment']);
                setupClickListener('changetype-geocode', ['geocode']);

                document.getElementById('use-strict-bounds')
                    .addEventListener('click', function() {
                        console.log('Checkbox clicked! New state=' + this.checked);
                        autocomplete.setOptions({strictBounds: this.checked});
                    });

}
        }
    ]);


