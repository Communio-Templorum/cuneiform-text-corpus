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

	const autofocus = document.querySelector('[autofocus]');
	if (autofocus instanceof Element) {
		autofocus.focus();
	}
});

const strokemap = {
	a: '𒀸 U+12038, AŠ',
	aa: '𒋰 U+122F0, TAB',
	aaa: '𒀼 U+1203C, AŠ / AŠ / AŠ, EŠ<sub>16</sub>',
	'ad.': '𒈦 U+12226, MAŠ',
	ama: '𒋥 U+122E5, SUD<sub>2</sub>, ŠITA<sub>3</sub>',
	aamd: '𒂷 U+120B7, GA<sub>2</sub>',
	aammd: '𒃷 U+120F7, GAN<sub>2</sub>',
	ammd: '𒉣 U+12263, NUN, SIL<sub>2</sub>, ZI',
	'am.m.u.d.': '𒉅 U+12245, NAM NUTILLU',
	amzgav: '𒁔 U+12054, BUR<sub>2</sub>, SUN<sub>5</sub>',
	'amzg.zg': '𒁴 U+12074, DIM',
	au: '𒁁 U+12041, BAD, BA<sub>9</sub>, BE',
	'au\'': '𒍗 U+12357, UŠ2',
	auaad: '𒁺 U+1207A, DU, RE6, GUB, ŠA4',
	auav: '𒆰 U+121B0, KUL',
	'azdu.': '𒆐 U+12190, KAD<sub>2</sub>',
	azg: '𒄬 U+1212C, ḪAL',
	'azmm.': '𒋂 U+122C2, ŠEŠLAM',
	d: '𒁹 U+12079, DIŠ',
	'da/': '𒁇 U+12047, BAR',
	da: '𒈨 U+12228, ME, BA<sub>13</sub>, IŠIB, MEN<sub>2</sub>',
	'da\'': '𒇲 U+121F2, LAL, LA<sub>2</sub>',
	dauuu: '𒎌 U+1238C, MEŠ',
	dd: '𒈫 U+1222B, MIN',
	ddd: '𒀀 U+12000, A, AYA<sub>2</sub>, DURU<sub>5</sub>, E<sub>4</sub>, EA',
	datad: '𒉇 U+12247, NAM<sub>2</sub>',
	'ddd\'g': '𒃻 U+120FB, GAR, ĜAR, NINDA, NI<sub>3</sub>, NIG<sub>2</sub>, NIĜ<sub>2</sub>',
	dgaz: '𒊩 U+122A9, SAL, GAL<sub>4</sub>, MI<sub>2</sub>, MUNUS, RAK',
	du: '𒋙 U+122D9, ŠU<sub>2</sub>, ŠUŠ<sub>2</sub>',
	dzg: '𒆕 U+12195, KAK, DA<sub>3</sub>, DU<sub>3</sub>, GAG',
	dzgd: '𒋖 U+122D6, ŠITA',
	'dzagdaaa.d': '𒎐 U+12390, NIN<sub>9</sub>, SAL KU',
	'dzagdata.d': '𒎏 U+1238F, NIN, E5, EREŠ, SAL TUG<sub>2</sub>',
	'dzagdaaa.du': '𒁮 U+1206E, DAM',
	g: '𒍻 U+1237B, GE<sub>22</sub>',
	gazd: '𒀭 U+1202D, AN, AM<sub>6</sub>, AN, DIĜIR, IL<sub>3</sub>, NAGGA<sub>X</sub>',
	gzad: '𒁀 U+12040, BA',
	gzazg: '𒀪 U+1202A, aleph, AḪ',
	gzd: '𒀶 U+12036, ARKAB, NIG<sub>2</sub>.IB, ARGAB, ARKAB<sub>2</sub>',
	'gzd\'': '𒃰 U+120F0, GAD',
	'gzd.d': '𒇬 U+121EC, LAGAR',
	gzdtd: '𒊔 U+12294, SAG NUTILLU',
	'gzd\.dtd': '𒊕 U+12295, SAG, DUL<sub>7</sub>, SA<sub>12</sub>, SAĜ, ŠAK',
	gzdzg: '𒌒 U+12312, UB',
	gzzg: '𒄭 U+1212D, ḪI, DUB<sub>3</sub>, DUG<sub>3</sub>, ŠAR<sub>2</sub>',
	'gzzg\'': '𒌓 U+12313, UD, A<sub>12</sub>, AḪ<sub>3</sub>, BABBAR, ḪAD<sub>2</sub>, ḪUD<sub>2</sub>, PIRIĜ<sub>2</sub>, U<sub>4</sub>, UT',
	'g\'ztzg\'': '𒁲 U+12072, DI, SA<sub>2</sub>',
	'g\'zzg\'': '𒋝 U+122DD, SIG, SIK',
	m: '𒈫 U+1222B, MIN',
	mm: '𒍝	U+1235D	ZA, LIMMU<sub>5</sub>, NIGIDALIMMU',
	'mtmta.zg\'': '𒁖 U+12056, DAG, PAR<sub>3</sub>',
	mzgav: '𒄖 U+12116, GU',
	t: '𒋰 U+122F0, TAB',
	ta: '𒀼 U+1203C, AŠ / AŠ / AŠ, EŠ<sub>16</sub>',
	tava: '𒉒 U+12252, NINDA<sub>2</sub>',
	td: '𒄑 U+12111, GIŠ, GEŠ, ĜIŠ, IZ',
	'td.': '𒉺 U+1227A, PA, ĜIDRU, SAG<sub>3</sub>, SIG<sub>3</sub>, UGULA',
	'td.d': '𒄥 U+12125, GUR',
	tdzg: '𒄞 U+1211E, GUD, GU<sub>4</sub>, EŠTUB',
	tdzgu: '𒃴 U+120F4, GALAM, SUKUD',
	tdzgtd: '𒄐 U+12110, GISAL',
	tgzd: '𒀊 U+1200A, AB, ABA, ABBA, AP, EŠ<sub>3</sub>, IRI<sub>12</sub>, IS<sub>3</sub>',
	tgzdd: '𒆯 U+121AF, KU<sub>7</sub>',
	tm: '𒄥 U+12125, GUR',
	tma: '𒈥 U+12225, MAR, GIŠ ME',
	'tm.m.': '𒌑 U+12311, U2, KUŠ<sub>3</sub>',
	ttd: '𒆦 U+121A6, KISAL',
	'ttd.': '𒀾 U+1203E, AŠ2',
	ttda: '𒃲 U+120F2, GAL',
	'ttda.': '𒋗 U+122D7, ŠU',
	'ttdadzzzgm.d.': '𒈗 U+12217, LUGAL',
	'ttdzg\'': '𒁓 U+12053, BUR, NIG<sub>2</sub> gunû',
	ttuzg: '𒃼 U+120FC, GAR<sub>3</sub>, QAR',
	'ttu.da': '𒅊 U+1214A, IGI gunû, AGAR<sub>4</sub>, IMMA<sub>3</sub>, SE<sub>12</sub>, SIG<sub>7</sub>, ŠEX, UGARX, UGUR<sub>2</sub>',
	u: '𒌋 U+1230B, U',
	uu: '𒎙 U+12399, U U, MIN<sub>3</sub>',
	'uu.': '𒑱 U+12471, vertical colon',
	uuu: '𒌍 U+1230D, U U U, ES<sub>2</sub>, EŠ',
	uaad: '𒌌 U+1230C, U GUD, DU<sub>7</sub>, UL',
	uda: '𒅆 U+12146, IGI, LIM, ŠI',
	'udddg\'': '𒉻 U+1227B, PAD, ŠUK, U GAR',
	utdauad: '𒄢 U+12122, GUL, SI<sub>23</sub>, SUN<sub>2</sub>',
	utttt: '𒈪 U+1222A, MI, GE<sub>6</sub>, GI<sub>6</sub>, GIGGI, ĜI<sub>6</sub>',
	'u\'ttttda': '𒀝 U+1201D, AK, AG',
	uttttgzdzggzdzg: '𒍼 U+1237C, GIG, GI<sub>17</sub>, MI NUNUZ, SIM<sub>X</sub>',
	'uu\'uu\'': '𒌐 U+12310, MAŠGI, BARGI',
	uzg: '𒀖 U+12016, AB<sub>2</sub>, LID',
	uzgu: '𒆨 U+121A8, KISIM<sub>5</sub>',
	uzgud: '𒉏 U+1224F, NIM, NUM',
	v: '𒑱 U+12471, vertical colon',
	'vaa.uu.': '𒀫 U+1202B, AMAR, ZUR',
	'vv\'': '𒌐 U+12310, MAŠGI, BARGI',
	vzg: '𒁷 U+12077, DIN',
	z: '𒀹 U+12039, AŠ ZIDA tenû, DIŠ tenû, GE<sub>23</sub>',
	zz: '𒃵 U+120F5, GAM, GUR<sub>2</sub>, GURUM',
	zaaud: '𒁺 U+1207A, DU, DE<sub>6</sub>, GUB, ĜEN, GIN, RA<sub>2</sub>, RE<sub>6</sub>, ŠA<sub>4</sub>, TUM<sub>2</sub>',
	zd: '𒇺 U+121FA, LIŠ, DILIM<sub>2</sub>',
	zdg: '𒆕 U+12195, KAK, DA<sub>3</sub>, DU<sub>3</sub>, GAG',
	zdgd: '𒋖 U+122D6, ŠITA',
	zzd: '𒋻 U+122FB, TAR, HAŠ, KU<sub>5</sub>, KUD, SILA',
	zg: '𒉽 U+1227D, PAP, PAB, KUR<sub>2</sub>',
	zgd: '𒋡 U+122E1, SILA<sub>3</sub>, QA, SAL<sub>4</sub>',
	'zgm.': '𒉌 U+1224C, NI, BE<sub>3</sub>, DIG, I<sub>3</sub>, IA<sub>3</sub>, LE<sub>2</sub>, LI<sub>2</sub>, LID<sub>2</sub>, NE<sub>2</sub>, SUŠ<sub>2</sub>, ZAL, ZAR<sub>2</sub>',
	'zgm.d.': '𒅕 U+12155, IR, ER, GAG gunû',
	'zgm.gzzg\'': '𒎎 U+1238E, NA<sub>4</sub>, NI UD',
	zgzg: '𒉼 U+1227C, PAN',
	'zg\'zga': '𒁍 U+1204D, BU, BUR<sub>12</sub>, DUR<sub>7</sub>, GID<sub>2</sub>, KIM<sub>3</sub>, PU, SIR<sub>2</sub>, SU<sub>13</sub>, SUD<sub>4</sub>, TUR<sub>8</sub>',
	zuaad: '𒁺 U+1207A, DU, RE<sub>6</sub>, GUB, ŠA<sub>4</sub>',
	zzz: '𒆳 U+121B3, KUR, GIN<sub>3</sub>',
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
	3600: '𒄭',
	7200: '𒐣',
	10800: '𒐥',
	14400: '𒐦',
	18000: '𒐧',
	21600: '𒐨',
	25200: '𒐩',
	28800: '𒐪',
	32400: '𒐫',
	36000: '𒐬',
	72000: '𒐭',
	108000: '𒐯',
	144000: '𒐰',
	180000: '𒐱',
	216000: '𒐲',
	432000: '𒐳',
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
				`<kbd>a</kbd> ${strokemap.a}`,
				`<kbd>t</kbd> ${strokemap.t}`,
				`<kbd>d</kbd> ${strokemap.d}`,
				`<kbd>m</kbd> ${strokemap.m}`,
				`<kbd>g</kbd> ${strokemap.g}`,
				`<kbd>z</kbd> ${strokemap.z}`,
				`<kbd>u</kbd> ${strokemap.u}`,
				`<kbd>v</kbd> ${strokemap.v}`,
			].map(t => `${t}<br>`).join('');
			return;
		}
		const userInput = evt.target.value.toLowerCase();
		Object.entries(strokemap).forEach(([keys, txt]) => {
			if (keys.indexOf(userInput) === 0) options.push(`${txt}<br><kbd>${keys}</kbd>`);
		});
		Object.entries(strokemap).forEach(([keys, txt]) => {
			if (keys.indexOf(userInput) > 0) options.push(`${txt}<br><kbd>${keys}</kbd>`);
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
		if (evt.target.hasAttribute('max') && num > Number.parseInt(evt.target.getAttribute('max'))) {
			num = Number.parseInt(evt.target.getAttribute('max'))
			evt.target.value = num;
		}
		if (evt.target.hasAttribute('min') && num < Number.parseInt(evt.target.getAttribute('min'))) {
			num = Number.parseInt(evt.target.getAttribute('min'))
			evt.target.value = num;
		}
		Object.entries(numbers).sort((a, b) => b[0] - a[0]).forEach(([val, str]) => {
			if (num >= val) {
				out += `<abbr title="${val.replace(/(\d)(\d\d\d)+$/g, '$1,$2')}">${str}</abbr>`;
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
