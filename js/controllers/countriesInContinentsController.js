'use strict';
define(['angular'], function(angular) {
    angular.module('WorldCountriesApp.controllers').
    controller('countriesInContinentsController', function($scope , $routeParams, $location, worldCountriesAPIservice) {
        $scope.nameFilter = null;
        $scope.allCountriesList = [];
        $scope.countriesByContinentsList = [] ;
        $scope.countriesRegion = null;
        $scope.id = $routeParams.code;	
        $scope.searchFilter = function (country) {
            var keyword = new RegExp($scope.nameFilter, 'i');
            return !$scope.nameFilter || keyword.test(country.name);
        };	
        worldCountriesAPIservice.getCountrieByContinent($routeParams.region).
        success(function (response) {
            //Dig into the respond to get the relevant data
            $scope.countriesRegion = $routeParams.region;
            $scope.countriesByContinentsList = response;            
        }).
        error(function (error) {
            $location.url('/500');
            console.log("error ---------------------- response" + error);
        })
    });
});