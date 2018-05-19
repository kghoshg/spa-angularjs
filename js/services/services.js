'use strict';

define(['angular'], function(angular) {
    angular.module('WorldCountriesApp.services', []).
    factory('worldCountriesAPIservice', function($http, $rootScope) {
        
    //setting the year for copy right
    $rootScope.date = new Date().getFullYear(); 
    var worldCountriesAPI = {};
    
	//get list of all countries
    worldCountriesAPI.getCountries = function() {
	  return $http({        
        url: 'http://restcountries.eu/rest/v1/all'
      });
    }
	
	//get list of all countries by continent 
	worldCountriesAPI.getCountrieByContinent = function(region) {
	  if(region == 'Northern America' || region == 'South America'){
		  return $http({        
			url: 'http://restcountries.eu/rest/v1/subregion/' + region
		  });
	  }else{
		  return $http({        
			url: 'http://restcountries.eu/rest/v1/region/' + region
		  });
	  }
    }
	
	//get details about a country
	worldCountriesAPI.getCountryDetails = function(code) {
	  return $http({        
        url: 'http://restcountries.eu/rest/v1/alpha?codes=' + code
      });
    }
	
	//get user's current location based on his or her IP
	worldCountriesAPI.getCurrentLocation = function() {
	  return $http({        
        url: 'http://ip-api.com/json'
      });
    }
		
    return worldCountriesAPI;
  });
  
});