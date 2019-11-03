/* app.json */
// import Litedom from 'res/litedom.es.js';
yodasws.on('site-loaded', () => {
	document.querySelectorAll('body > nav a:not([href])').forEach((link) => {
		link.addEventListener('click', toggleMenu);
	});

	function toggleMenu(evt) {
		let next = evt.currentTarget;
		do next = next.nextElementSibling;
		while (next && next.nodeName.toLowerCase() !== 'ul');
		const isHidden = next && next.hasAttribute('hidden');
		const parent = evt.currentTarget.closest('ul, nav');
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
		console.log('mutationsList:', mutationsList);
		switch (mutationsList[0].oldValue) {
			case 'home': {
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
			}
			case null:
				// Be sure all menus are collapsed
				document.querySelectorAll('body > nav ul').forEach((list) => {
					list.setAttribute('hidden', '');
				});
		}
	}).observe(document.body, {
		attributeFilter: ['y-section'],
		attributeOldValue: true,
		attributes: true,
	});

	// Site loaded, show nav menu
	const nav = document.querySelector('body > nav[hidden]');
	if (nav instanceof Element) nav.removeAttribute('hidden');
});

yodasws.on('page-loaded', (evt) => {
	// Close Menu on Navigation
	document.querySelectorAll('body > nav ul:not([hidden])').forEach((list) => {
		list.setAttribute('hidden', '');
	});
	document.body.setAttribute('y-section', evt.detail.page);
});
yodasws.page('home').setRoute({
	template: 'pages/home.html',
	route: '/',
});

yodasws.page('etcsl').setRoute({
	template: 'etcsl/$1.html',
	route: /^\/etcsl\/([^\/]*)$/,
});
