define(['angular','ngRoute','controllers','services', 'bootstrap'], function () {
  'use strict';

  var app = angular.module('WorldCountriesApp', ['WorldCountriesApp.services', 'controllers','ngRoute']);

  app.init = function () {
      angular.bootstrap(document, ['WorldCountriesApp']);
  };

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/", {templateUrl: "views/countriesInWorldList.html", controller: "countriesInWorldController"}).
	when("/current_location", {templateUrl: "views/currentLocation.html", controller: "currentLocationController"}).
	when("/continent/:region", {templateUrl: "views/countriesInContinentsList.html", controller: "countriesInContinentsController"}).
	when("/country/:code", {templateUrl: "views/countryDetails.html", controller: "countryDetailsController"}).
	when("/about", {templateUrl: "views/about.html"}).
    when("/404", {templateUrl: "views/404.html"}).
    when("/500", {templateUrl: "views/500.html"}).
	otherwise({redirectTo: '/404'});
}]);

  return app;
});