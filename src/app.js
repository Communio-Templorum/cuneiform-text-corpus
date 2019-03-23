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
		if (document.body.getAttribute('ng-section') === 'home') return;
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

	// Adjustments to Display of Nav for UX
	new MutationObserver((mutationsList) => {
		switch (mutationsList[0].oldValue) {
			case 'home':
				const navLists = document.querySelectorAll('body > nav ul');
				// No Transition
				navLists.forEach((list) => {
					list.style.transition = 'none';
					list.setAttribute('hidden', '');
				});
				// Reallow Transition after page change
				setTimeout(() => {
					navLists.forEach((list) => {
						list.style.transition = '';
					});
				}, 0);
				break;
			case null:
				// Be sure all menus are collapsed
				document.querySelectorAll('body > nav ul').forEach((list) => {
					list.setAttribute('hidden', '');
				});
				// Page loaded, show nav menu
				const nav = document.querySelector('body > nav[hidden]');
				if (nav instanceof Element) nav.removeAttribute('hidden');
		}
	}).observe(document.body, {
		attributeFilter: ['ng-section'],
		attributeOldValue: true,
		attributes: true,
	});

	document.querySelectorAll('body > nav a:not([href])').forEach((link) => {
		link.addEventListener('click', toggleMenu);
	});

	// Close Menu on Navigation
	window.addEventListener('hashchange', () => {
		document.querySelectorAll('body > nav ul:not([hidden])').forEach((list) => {
			list.setAttribute('hidden', '');
		});
	});
}])
