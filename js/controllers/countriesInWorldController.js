'use strict';

define(['angular'], function(angular) {		
    angular.module('WorldCountriesApp.controllers',[]).
    controller('countriesInWorldController', function($scope , $sce, worldCountriesAPIservice) {
        $scope.nameFilter = null;
        $scope.allCountriesList = [];
        $scope.searchFilter = function (country) {
            var keyword = new RegExp($scope.nameFilter, 'i');
            return !$scope.nameFilter || keyword.test(country.name);
        };
        worldCountriesAPIservice.getCountries().
        success(function (response) {
            //Dig into the respond to get the relevant data
            $scope.allCountriesList = response;
            console.log("success ---------------------- response");
        }).
        error(function (error) {
            $location.url('/500');
            console.log("error ---------------------- response" + error);
        });		
    });
});