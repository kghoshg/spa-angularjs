'use strict';

define(['angular'], function(angular) {
	angular.module('WorldCountriesApp.controllers').
    controller('countryDetailsController', function($scope , $routeParams, $location, worldCountriesAPIservice) {    
        $scope.countryDetails = [];
        $scope.id = $routeParams.code;	
        worldCountriesAPIservice.getCountryDetails($routeParams.code).
        success(function (response) {
            //Dig into the respond to get the relevant data
            if(angular.isUndefined(response[0]) || response[0] === null ){
                $location.url('/404');
            }else{
                $scope.countryDetails = response;		
        }}).
        error(function (error) {
            console.log('--------------countryDetailsController.js---------------' + error);
            $location.url('/500');		
        })	
    });
});