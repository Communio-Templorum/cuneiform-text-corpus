'use strict';

(function(window) {
	// Define Global Object
	const yodasws = ensure(window, 'yodasws', () => {
		return new Proxy({}, superHandler([
			ComponentEventTarget,
		].map(parent => new parent(...arguments))));
	});

	// Define Item Collections
	[
		'pages',
		'routes',
		'components',
	].forEach((key) => {
		Object.defineProperty(yodasws, key, {
			value: {},
		});
	});

	// Define Class Hierarchy
	const objects = {
		component: {
			parent: Component,
			collection: 'components',
			parents: [
				ComponentEventTarget,
			],
		},
		page: {
			parent: Page,
			collection: 'pages',
			parents: [
				Component,
				ComponentEventTarget,
			],
		},
	};

	// Component Class Definition
	function Component(componentName, element = undefined) {
		Object.defineProperties(this, {
			element: {
				enumerable: true,
				value: element,
			},
		});
		if (element instanceof Element) {
			element.setAttribute('y-component', componentName);
		}
		return Object.assign(this, {
			name: componentName,
		});
	}
	Object.defineProperties(Component.prototype, {
		adapter: {
			enumerable: true,
			value() {
				return this;
			},
		},
		init: {
			enumerable: true,
			value() {
				return this;
			},
		},
	});

	// Page Class Definition
	function Page(pageName) {
		Object.assign(this, {
		});
		return this;
	}
	Object.defineProperties(Page.prototype, {
		setRoute: {
			enumerable: true,
			value(obj) {
				ensure(yodasws.routes, obj.route, () => new Route(Object.assign(obj, {
					page: this,
				})));
				return this;
			},
		},
	});

	// Route Class Definition
	function Route(obj) {
		return Object.assign(this, obj, {
		});
	}

	let eventCount = 0;
	// Non-DOM Event Target
	function ComponentEventTarget() {
		const eventTarget = new EventTarget();
		const events = {};
		Object.defineProperties(this, {
			on: {
				enumerable: true,
				value(evts, cb) {
					evts.split(' ').forEach((evt) => {
						let [type, name] = evt.split('.');
						if (!name) {
							name = `evt${eventCount++}`;
						}
						console.log(`I'm listening for ${type}.${name}`);
						events[type] = events[type] || {};
						events[type][name] = events[type][name] || []
						events[type][name].push(cb);
						eventTarget.addEventListener(type, cb);
					});
					return this;
				},
			},
			off: {
				enumerable: true,
				value(evt) {
					let [type, name] = evt.split('.');
					if (typeof events[type] !== 'object' || Object.values(events[type]).length === 0) {
						return this;
					}
					(name === undefined ? [].concat(...Object.values(events[type])) : events[type][name] || []).forEach((cb) => {
						eventTarget.removeEventListener(type, cb);
					});
					return this;
				},
			},
			fire: {
				enumerable: true,
				value(type, detail = undefined) {
					console.log('firing', type);
					eventTarget.dispatchEvent(new CustomEvent(type, {
						detail,
					}));
					return this;
				},
			},
		});
		return this;
	}

	function superHandler(parents) {
		return {
			get: (target, key) => {
				const parent = parents.find(parent => Reflect.has(parent, key));
				if (parent !== undefined) {
					return Reflect.get(parent, key);
				}
				return Reflect.get(target, key);
			},
			has: (target, key) => {
				return Reflect.has(target, key) || parents.find(parent => Reflect.has(parent, key)) !== undefined;
			},
		};
	}

	// Build Class Hierarchy
	Object.entries(objects).forEach(([key, obj]) => {
		ensure(yodasws, key, () => (...args) => new (function () {
			return ensure(yodasws[obj.collection], args[0], () => new Proxy(
				new obj.parent(...arguments),
				superHandler(obj.parents.map(parent => new parent(...arguments))),
			));
		})(...args));
	});

	// <main> Element
	let main;

	// Load First Route
	window.onload = () => {
		if (!window.location.hash) {
			history.replaceState({}, null, '#!/');
		}
		main = document.querySelector('main');
		window.onpopstate();
	};

	document.addEventListener('DOMContentLoaded', () => {
		if (document.querySelector('body > nav') instanceof Element) {
			yodasws.component('topNav', document.querySelector('body > nav'));
		}
	});

	// Load Route Template
	function loadRoute(route) {
		console.log('Route:', route);
		const xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4) {
				// Page Loaded
				if (Math.floor(xhr.status / 100) === 2) {
					// Unload Old Page
					const oldPage = main.getAttribute('y-page');
					yodasws.page(oldPage).fire('unload');
					delete yodasws.page(oldPage).element;

					// Display Page
					main.innerHTML = xhr.response;
					main.setAttribute('y-page', route.page.name);
					Object.defineProperty(route.page, 'element', {
						configurable: true,
						enumerable: true,
						value: main,
					});
					route.page.fire('load');
					const scrollTop = {
						behavior: 'auto',
						top: 0,
					};
					main.scrollTo(scrollTop);
					window.scrollTo(scrollTop);
				} else switch (xhr.status) {
					case 404:
						// Page not found
						if (yodasws.routes['404'] instanceof Route) {
							loadRoute(yodasws.routes['404']);
						} else {
							main.innerHTML = '<p>Page not found</p>';
						}
						break;
					default:
						main.innerHTML = '<p>Error</p>';
				}
			}
		};
		xhr.open('GET', route.template);
		xhr.send();
	}

	// Route Handling
	window.onpopstate = () => {
		const route = yodasws.routes[window.location.hash.replace('#!', '')];
		if (route && route.template) {
			loadRoute(route);
		} else if (false) {
			// TODO: Check regex routes
		} else {
			loadRoute(yodasws.page('404').setRoute({
				template: 'pages/404.html',
				route: '404',
			}));
		}
	};

	// Declare each property/method only once
	function ensure(obj, name, factory) {
		return obj[name] || (obj[name] = factory());
	}

})(window);
