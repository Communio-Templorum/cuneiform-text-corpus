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
		const isHidden = next && next.hasAttribute('hidden');
		const parent = e.currentTarget.closest('ul, nav');
		if (parent instanceof Element) {
			parent.querySelectorAll('ul:not([hidden])').forEach((list) => {
				list.setAttribute('hidden', '');
			});
		}
		if (next instanceof Element && isHidden) {
			next.removeAttribute('hidden');
		}
	}

	// Show Nav on Page Load, but Only Need to Check Once
	const showNavOnPageLoad = new MutationObserver(() => {
		// Page loaded, show nav menu
		const nav = document.querySelector('body > nav[hidden]');
		if (nav instanceof Element) nav.removeAttribute('hidden');
		showNavOnPageLoad.disconnect();
	}).observe(document.body, {
		attributeFilter: ['ng-section'],
		attributes: true,
	});

	document.querySelectorAll('body > nav li > a').forEach((link) => {
		link.addEventListener('click', toggleMenu);
	});

	// Close Menu on Navigation
	window.addEventListener('hashchange', () => {
		document.querySelectorAll('body > nav ul:not([hidden])').forEach((list) => {
			list.setAttribute('hidden', '');
		});
	});
}])
