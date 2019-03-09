/* app.json */
angular.module('cuneiformTextCorpus', modules)
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(false)
	$routeProvider.when('/', {
		templateUrl: 'pages/home.html',
		controllerAs: '$ctrl',
		controller() {
			document.body.setAttribute('ng-section', 'home')
		},
	})
	.when('/etcsl/:href', {
		templateUrl($routeParams) {
			return `etcsl/${$routeParams['href']}.html`;
		},
		controllerAs: '$ctrl',
		controller() {
			document.body.setAttribute('ng-section', 'etcsl')
		},
	})
	.otherwise({redirectTo: '/'});

	function toggleMenu(e) {
		let next = e.currentTarget;
		do next = next.nextElementSibling;
		while (next && next.nodeName.toLowerCase() !== 'ul');
		if (next instanceof Element) {
			next.toggleAttribute('hidden');
		}
	}

	document.querySelectorAll('body > nav li > a').forEach((link) => {
		link.addEventListener('click', toggleMenu);
	});

	// Close Menu on Navigation
	window.addEventListener('hashchange', () => {
		document.querySelectorAll('body > nav ul:not([hidden])').forEach((list) => {
			list.setAttribute('hidden', '');
		});
	});

	const nav = document.querySelector('body > nav[hidden]');
	if (nav instanceof Element) nav.removeAttribute('hidden');
}])
