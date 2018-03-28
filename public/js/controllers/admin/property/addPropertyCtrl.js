
'use strict';
angular.module('app')
    .controller('addPropertyCtrl', ['$scope', '$rootScope', '$timeout', '$log', '$window', '$state',
        'localStorageService', 'sharedDatasvc', 'globalsvc', '$location','googlePlacesApi',
        function($scope, $rootScope, $timeout, $log, $window, $state, localStorageService,
                 sharedDatasvc, globalsvc, $location,google) {


        $scope.property={};
        $scope.property.type={};
        $scope.user=sharedDatasvc.getUser();
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
            $scope.saveFeatures = function () {
                if($scope.property.type.type=="plot")
                {
                    $("#plotModal").modal('hide');
                }else {
                    $("#propertyModal").modal('hide');
                }
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
                $scope.property.addedBy.name=$scope.user.name;
                $scope.property.addedBy.email=$scope.user.email;
                $scope.property.addedBy.UserId=$scope.user.UserId;
                $scope.property.addedBy.type="admin";
                $scope.property.adminApproved=true;
               var submitProperyPromise=globalsvc.GetData("properties/addProperty","Put",$scope.property);
                submitProperyPromise.then(function (data) {
                   $state.go("app.admin.allProperty");
                });
            };
            $scope.saveProperty=function () {
                $scope.property;
                var savePropertyPromise=globalsvc.GetData("properties/saveProperty","post",$scope.property);
                savePropertyPromise.then(function (data) {
                   $state.go("app.admin.allProperty");
                    sharedDatasvc.setPropertyEditState(null);

                });

            };
             $scope.initMap=function(){
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


