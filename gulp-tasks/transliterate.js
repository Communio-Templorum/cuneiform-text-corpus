const fs = require('fs')
const path = require('path');
const logs = false;

function elementLang(el) {
	while (el && typeof el.hasAttribute === 'function') {
		if (el.hasAttribute('lang')) {
			return el.getAttribute('lang');
		}
		el = el.parentElement;
	}
}

const json = JSON.parse(fs.readFileSync(`./src/cuneiform.json`));
if (Array.isArray(json.unicode)) {
	json.unicode = json.unicode.reverse().filter((d) => {
		d = d.pattern || d[0];
		// Don't replace numbers yet
		if (d.match(/^[0-9,]+$/)) return false;
		if (d.match(/\b(or|one|two|three|four|five|six|seven|eight|nine)\b/)) return false;
		return true;
	});
}

module.exports = (gulp, plugins, options, argv) => gulp.series(
	// First, simplify markup and wrap with <ruby>
	gulp.parallel(
		// Correct Markup in ETCSL Texts
		() => {
			return gulp.src([
				`src/etcsl/**/*.html`,
			])
			// Simplify HTML
				.pipe(plugins.replaceString(
					new RegExp('(<(!DOCTYPE html|hr)[^>]*>|<(?<tag>(center|head|h[23456]|p))\\b[^>]*>(.|\n)*?</\\k<tag>>)(\s|\n)*', 'g'),
					'',
					{ logs },
				))
				.pipe(plugins.replaceString(
					new RegExp('<\/?(html|body)>(\\s|\n)*', 'g'),
					'',
					{ logs },
				))
				.pipe(plugins.replaceString(
					new RegExp('<(ol|table|header)\\b[^>]*>(\\s|\n)*', 'gi'),
					'<$1>',
					{ logs },
				))
				.pipe(plugins.replaceString(
					new RegExp('<table[^>]*>(\\s|\n)*(<tbody[^>]*>(\\s|\n)*)?', 'g'),
					'<ol>\n',
					{ logs },
				))
				.pipe(plugins.replaceString(
					new RegExp('<tr><td[^>]*>(<a[^>]*>[^<]*</a>)+</td><td[^>]*>(\\s|\n)*', 'g'),
					'\t<li>',
					{ logs },
				))
				.pipe(plugins.replaceString(
					new RegExp(`<span onMouseover=[^']+'([^']+)'[^>]*>`, 'g'),
					'<span title="$1">',
					{ logs },
				))
				.pipe(plugins.replaceString(
					new RegExp('\\s*</td></tr>', 'g'),
					'</li>',
					{ logs },
				))
				.pipe(plugins.replaceString(
					new RegExp('(</tbody>(\\s|\n)*)?</table>(\\s|\n)*', 'g'),
					'</ol>',
					{ logs },
				))
				.pipe(plugins.dom(function () {
					this.querySelectorAll('span[title]').forEach((el) => {
						let html = ' <ruby ';
						if (el.hasAttribute('class')) {
							html += `class="${el.getAttribute('class') || ''}" `;
						}
						html += `lang="${elementLang(el) || 'sux'}" translate="no"><rb translate="no">${el.innerHTML}</rb>`;

						if (el.getAttribute('title').indexOf('(') > -1) {
							const [rt, rtc] = el.getAttribute('title').split(/\s*\([^\)]*\)\s*/g);
							if (rt && rt !== 'X' && rt !== '…') {
								html += `<rt lang="${elementLang(el) || 'sux'}-Latn" translate="no">${rt}</rt>`;
							}
							if (rtc && rtc !== 'X' && rtc !== '…') {
								html += `<rtc lang="en" translate="yes">${rtc}</rtc>`;
							}
						} else {
							const rtc = el.getAttribute('title');
							if (rtc && rtc !== 'X' && rtc !== '…') {
								html += `<rtc lang="en" translate="yes">${rtc}</rtc>`;
							}
						}
						html += `</ruby> `;
						el.outerHTML = html;
					});
				}))
				.pipe(gulp.dest('build/etcsl'));
		},
		// Correct Markup in CDLI Texts
		() => {
			const numberRegex = /(\d+)\s*\(([^)]+)\)-?/g;
			return gulp.src([
				'src/cdli/{P,Q}*.html',
			])
				.pipe(plugins.replaceString(
					new RegExp('<table\\b[^>]*>', 'gi'),
					'<ol>',
					{ logs },
				))
				.pipe(plugins.replaceString(
					new RegExp('<\/table>', 'gi'),
					'</ol>',
					{ logs },
				))
				.pipe(plugins.replaceString(
					new RegExp('\\s*(<tr\\b[^>]*>|<\/tr>)(\\s|\n)*', 'gi'),
					'',
					{ logs },
				))
				.pipe(plugins.replaceString(
					new RegExp('\\s*<td>(Q\\d{6}).*?<\/td>(\\s|\n)*', 'gi'),
					'<li>',
					{ logs },
				))
			// Remove useless empty rows
				.pipe(plugins.replaceString(
					new RegExp('\\s*<td>\&nbsp;<\/td>(\\s|\n)*', 'gi'),
					'',
					{ logs },
				))
			// An alternate writing of the same line
				.pipe(plugins.replaceString(
					new RegExp('\\s*<td>\&nbsp;.*?<\/td>(\\s|\n)*', 'gi'),
					'<br>',
					{ logs },
				))
				.pipe(plugins.replaceString(
					new RegExp('<(\/)?td[^>]*>', 'gi'),
					'<$1span>',
					{ logs },
				))
				.pipe(plugins.replaceString(
					new RegExp('\\.\\.\\.', 'g'),
					'…',
					{ logs },
				))
			// Wrap each cuneiform word in <ruby>
			.pipe(plugins.dom(function () {
				this.querySelectorAll('li > span').forEach((line) => {
					line.outerHTML = line.innerHTML.trim().split(' ').map((word) => {
						if (/\[?[x…]\]?/i.test(word)) return word;
						const rt = word.replace(/^NU:/, '').replace(/_/g, ' ');
						// Handle numbers, e.g. 1(diš)
						if (Array.isArray(json.cdli)) {
							json.cdli.forEach((d) => {
								word = word.replace(new RegExp(d[0], 'g'), d[1]);
							});
						}
						return `<ruby lang="${elementLang(line) || 'und'}" translate="no"><rb translate="no">${word}</rb><rt lang="${elementLang(line) || 'und'}-Latn" translate="no">${rt}</rt></ruby>`;
					}).join(' ');
				});
			}))
				.pipe(plugins.replaceString(
					new RegExp('&amp;', 'g'),
					' / ',
					{ logs },
				))
			// Simplify HTML
				.pipe(plugins.replaceString(
					new RegExp('<(!DOCTYPE html)[^>]*>(.|\n)*?<(ol|header)>', 'gi'),
					'<$3>',
					{ logs },
				))
				.pipe(plugins.replaceString(
					new RegExp('<\/ol>(.|\n)*?</html>', 'gi'),
					'</ol>',
					{ logs },
				))
			// Our transliterator expects superscripts
				.pipe(plugins.replaceString(
					new RegExp('\\{([^\\\}]+)\\}', 'g'),
					'<sup>$1</sup>',
					{ logs },
				))
				.pipe(gulp.dest('build/cdli'));
		},
		// Correct markup in Enuma Elish
		() => {
			return gulp.src([
				'src/enuma-elish.html',
			])
				.pipe(plugins.replaceString(
					new RegExp('<strong>([a-z0-9.\\-’]+)</strong>', 'gi'),
					(str, signs) => `<ruby lang="akk" translate="no"><rb translate="no">${signs.replace(/\b(sh)|sh\b/gi, 'š')}</rb><rt lang="akk-Latn" translate="no">${signs}</rt></ruby>`,
					{ logs },
				))
				.pipe(plugins.replaceString(
					new RegExp('\\.\\.\\.', 'g'),
					'…',
					{ logs },
				))
				.pipe(gulp.dest('build'));
		},
	),
	(done) => {
		// Convert pattern to RegExp
		const patternToRegExp = (pattern) => {
			if (typeof pattern === 'string') {
				pattern = pattern.replace(/-/g, '\-');
				pattern = pattern.replace(/(^|[^\\])\w$/i, '$&\\b');
				pattern = pattern.replace(/^\w/i, '\\b$&');
				pattern = new RegExp(pattern, 'g');
			}
			return pattern;
		};

		// Now Transliterate!
		(argv.file || [
			'etcsl/{1,2,3,4,5,6}.*',
			'cdli/{P,Q}*.html',
			'enuma-elish.html',
		]).map(file => {
			let folder = '';
			if (file.includes('/')) {
				[folder, file] = file.split('/', 2);
			}
			return {
				folder,
				selection: `${file}{,.html}`,
			};
		}).forEach((obj) => {
			let stream = gulp.src([
				path.join('build', obj.folder, obj.selection),
			]);

			stream = stream.pipe(plugins.dom(function () {
				this.querySelectorAll('rb').forEach((rb) => {
					if (Array.isArray(json.remove)) {
						rb.innerHTML = rb.innerHTML.replace(new RegExp(`(?:${json.remove.join('|')})`, 'g'), '');
					}

					// Transliterate special characters and special/peculiar words
					let list = []
					if (Array.isArray(json['special-chars'])) {
						list = list.concat(json['special-chars']);
					}
					if (Array.isArray(json.dictionary)) {
						list = list.concat(json.dictionary);
					}
					list.forEach((d) => {
						rb.innerHTML = rb.innerHTML.replace(patternToRegExp(d[0]), d[1]);
					});

					// Transliterate number codes
					if (Array.isArray(json.numbers)) {
						rb.innerHTML = rb.innerHTML.replace(/^NU:(.*)+$/i, (str, signs) => signs.split(/-|(&#x12[0-9a-f]{3};)/i).map((s) => {
							const sym = json.numbers.find(d => new RegExp(`^${d.pattern || d[0]}$`).test(s));
							return (typeof sym === 'object' && (sym.replacement || sym[1])) || s;
						}).join(''));
					}

					// Transliterate individual cuneiform signs
					if (Array.isArray(json.unicode)) {
						// Break up compounds and search for constituent characters
						// e.g., ed3-de3-a-ba => [ ed3, de3, a, ba ] => [ &#x12313;&#x200D;&#x1207a;, &#x12248;, &#x12000;, &#x12040; ]
						rb.innerHTML = rb.innerHTML.replace(/\s*(&#x12[0-9a-f]{3};)?(?:[a-z0-9ÀàÁáÉéĜĝḪḫÍíŠšÙùÚúÛû×]+)(?:&#x12[0-9a-f]{3};|[-\.](&#x12[0-9a-f]{3};)?(?:[a-z0-9ÀàÁáÉéĜĝḪḫÍíŠšÙùÚúÛû×]+))*\s*/gi, (word) => {
							return word.trim().split(/[-\.]|(&#x12[0-9a-f]{3};)/i).map((p) => {
								const sym = json.unicode.find(d => new RegExp(`^${d.pattern || d[0]}$`).test(p));
								return (typeof sym === 'object' && (sym.replacement || sym[1])) || p;
							}).join('');
						});
					}
				});
			}));

			// Remove superscript around cuneiform
			stream.pipe(plugins.replaceString(/<sup>((?:\uD808[\uDC00-\uDFFF]|\uD809[\uDC00-\uDD4F])+)<\/sup>/gi, (str, signs) => signs, { logs }))

			// Remove unwanted HTML for subpage content
			stream = stream.pipe(plugins.replaceString(
				new RegExp('</?(!DOCTYPE html|html|head\\b|meta|link|body)[^>]*>', 'gi'),
				'',
				{ logs },
			));

			// Output Results
			stream.pipe(gulp.dest(path.join(options.dest, obj.folder !== '**' ? obj.folder : '')))
		});
		done();
	},
);
