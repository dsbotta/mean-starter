angular.module('app').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'mainCtrl'
		})

		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'aboutCtrl'
		})

		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'contactCtrl'	
		});

	$locationProvider.html5Mode(true);

}]);