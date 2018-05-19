'use strict';
define(['angular', 'async!gMaps'], function(angular) {
	angular.module('WorldCountriesApp.controllers').
    controller('currentLocationController', function ($scope, $location, worldCountriesAPIservice) {        
        var mapOptions = {
            zoom: 8,       
            mapTypeId: google.maps.MapTypeId.TERRAIN
        }	
        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);	
        worldCountriesAPIservice.getCurrentLocation().
		success(function (response) {
            //Dig into the respond to get the relevant data
            $scope.latitude = response.lat;
            $scope.longitude = response.lon;
            $scope.address = '<span>' + response.city + ', ' + response.regionName + ' </span> <br/><span><img src="./assets/img/flag/16/' + response.countryCode + '.png" />  ' + '<a href="#/country/' + response.countryCode + '">' + response.country + '</a>' + ', ' + response.zip + '</span>';
            $scope.pos = new google.maps.LatLng($scope.latitude, $scope.longitude);
            var infowindow = new google.maps.InfoWindow({
                map: $scope.map,
                position: $scope.pos,
                content: '<div id="mm" class="alert alert-danger">You are at ' + $scope.address + '</div>'
            });
            $scope.map.setCenter($scope.pos);            
        }).
        error(function (error) {
            $location.url('/500');
            console.log("error -----------My location----------- response" + error);
        })
    });
});