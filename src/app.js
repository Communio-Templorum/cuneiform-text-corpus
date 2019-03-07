/* app.json */
angular.module('cuneiformTextCorpus', modules)
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(false)
	$routeProvider.when('/', {
		templateUrl: 'pages/home.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageHome')
		},
	})
	.when('/etcsl/:href', {
		templateUrl($routeParams) {
			return `etcsl/${$routeParams['href']}.html`;
		},
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageEtcsl')
		},
	})
	.otherwise({redirectTo: '/'})
}])
