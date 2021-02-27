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

const strokemap = {
	'a': '𒀸 U+12038 AŠ',
	'd': '𒁹 U+12079 DIŠ',
	'ddd': '𒀀 U+12000 A',
	'u': '𒌋 U+1230B U',
	'uu': '𒎙 U+12399 U U, MIN<sub>3</sub>',
	'uuu': '𒌍 U+1230D U U U, ES<sub>2</sub>, EŠ',
	'uaad': '𒌌 U+1230C U GUD, DU<sub>7</sub>, UL',
};

const numbers = {
	1: '𒀸',
	2: '𒋰',
	3: '𒐻',
	4: '𒐂',
	5: '𒐃',
	6: '𒑀',
	7: '𒑁',
	8: '𒑅',
	9: '𒑇',
	10: '𒌋',
	20: '𒌋\u200D𒌋',
	30: '𒌍',
	40: '𒐏',
	50: '𒐐',
	60: '𒐕',
	120: '𒐖',
	180: '𒐗',
	240: '𒐘',
	300: '𒐙',
	360: '𒐚',
	420: '𒐛',
	480: '𒐜',
	540: '𒐝',
	600: '𒐞',
	1200: '𒐟',
	1800: '𒐠',
	2400: '𒐡',
	3000: '𒐢',
};

yodasws.page('home').setRoute({
	template: 'pages/home.html',
	route: '/',
}).on('load', () => {
	const output = {
		number: document.getElementById('cuneiform-number-out'),
		strokes: document.getElementById('cuneiform-strokes-out'),
	};
	const input = {
		strokes: document.getElementById('cuneiform-strokes'),
	};
	input.strokes.addEventListener('input', (evt) => {
		const options = [];
		if (evt.target.value === '') {
			output.strokes.innerHTML = [
				`a ${strokemap.a}`,
				`d ${strokemap.d}`,
				`u ${strokemap.u}`,
			].map(t => `<li>${t}</li>`).join('');
			return;
		}
		Object.entries(strokemap).forEach(([keys, txt]) => {
			if (keys.indexOf(evt.target.value) === 0) options.push(txt);
		});
		output.strokes.innerHTML = options.map(t => `<li>${t}</li>`).join('');
	});
	input.strokes.dispatchEvent(new Event('input'));
	document.getElementById('cuneiform-number').addEventListener('input', (evt) => {
		let out = '';
		if (evt.target.value === '') {
			output.number.innerHTML = '';
			return;
		}
		let num = Number.parseFloat(evt.target.value);
		console.log('Sam, num:', num);
		Object.entries(numbers).sort((a, b) => b[0] - a[0]).forEach(([val, str]) => {
			console.log('Sam, val:', val);
			if (num >= val) {
				out += str;
				num -= val;
			}
		});
		output.number.innerHTML = out;
	});
});

yodasws.page('enuma-elish').setRoute({
	template: 'enuma-elish.html',
	canonicalRoute: '/enuma-elish',
	route: /^\/enuma-elish\/?$/,
});

yodasws.page('etcsl').setRoute({
	template: 'etcsl/$1.html',
	route: /^\/etcsl\/([^\/]*)$/,
});

yodasws.page('cdli').setRoute({
	template: 'cdli/$1.html',
	route: /^\/cdli\/([^\/]*)$/,
});
