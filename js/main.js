require.config({
    paths: {
	  'async' : '//cdnjs.cloudflare.com/ajax/libs/requirejs-plugins/1.0.3/async.min',
      'gMaps' : '//maps.googleapis.com/maps/api/js?v=3.exp',
      'angular' : '//ajax.googleapis.com/ajax/libs/angularjs/1.4.6/angular.min',
      'ngRoute': '//ajax.googleapis.com/ajax/libs/angularjs/1.4.6/angular-route',
      'jQuery': '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
      'bootstrap': '//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min',
	  'controllers' : './controllers/controllers',
	  'services' : './services/services',
      'countriesInWorldController' : './controllers/countriesInWorldController',
	  'countriesInContinentsController'	: './controllers/countriesInContinentsController', 
	  'countryDetailsController'	: './controllers/countryDetailsController', 
	  'currentLocationController'	: './controllers/currentLocationController', 
    },
    shim: {
      ngRoute: {
          deps: ['angular'],
          exports: 'ngRoute'
      },
      angular: {
          exports : 'angular'
      },
      jQuery: {
          exports : 'jQuery'
      },
      bootstrap: {
          deps: ['jQuery'],
          exports : 'bootstrap'
      }
    },
    baseUrl: 'js'
});

require(['app'], function (app) {
  app.init();
});