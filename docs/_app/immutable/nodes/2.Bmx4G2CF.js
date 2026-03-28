import { a as R, f as I, c as je } from '../chunks/CcKL1eOP.js';
import { i as be } from '../chunks/DdSHj5C-.js';
import {
	c as J,
	E as Ee,
	aR as ge,
	h as U,
	K as $,
	a2 as Re,
	F as Ae,
	o as g,
	H as Ie,
	af as Se,
	J as ue,
	M as G,
	f as Y,
	aw as Ce,
	aE as Te,
	ao as ce,
	e as Ne,
	aS as O,
	b as re,
	aT as De,
	s as He,
	_ as Me,
	aU as me,
	aD as le,
	aV as Oe,
	aW as Fe,
	aL as ze,
	ab as fe,
	aX as qe,
	V as Le,
	r as he,
	p as _e,
	aY as Q,
	ad as Ue,
	aZ as Pe,
	a_ as Be,
	aB as We,
	m as Ke,
	d as Ve,
	ay as Ye,
	a$ as Xe,
	b0 as Ze,
	b1 as Je,
	x as X,
	z as D,
	A as Z,
	B as z,
	C as m,
	D as T,
	aO as ee,
	y as te,
	S as $e
} from '../chunks/CQd7E61n.js';
import { s as C, d as Ge, a as ae } from '../chunks/BYxOKeWw.js';
import { s as M } from '../chunks/BYw6Z0mQ.js';
import { b as Qe } from '../chunks/GrsC0733.js';
import { p as ea, i as ne } from '../chunks/C-fdw_vk.js';
function aa(e, a, n) {
	for (var r = [], c = a.length, t, o = a.length, d = 0; d < c; d++) {
		let w = a[d];
		_e(
			w,
			() => {
				if (t) {
					if ((t.pending.delete(w), t.done.add(w), t.pending.size === 0)) {
						var h = e.outrogroups;
						(ie(e, le(t.done)), h.delete(t), h.size === 0 && (e.outrogroups = null));
					}
				} else o -= 1;
			},
			!1
		);
	}
	if (o === 0) {
		var u = r.length === 0 && n !== null;
		if (u) {
			var p = n,
				f = p.parentNode;
			(We(f), f.append(p), e.items.clear());
		}
		ie(e, a, !u);
	} else ((t = { pending: new Set(a), done: new Set() }), (e.outrogroups ??= new Set()).add(t));
}
function ie(e, a, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = new Set();
		for (const o of e.pending.values()) for (const d of o) r.add(e.items.get(d).e);
	}
	for (var c = 0; c < a.length; c++) {
		var t = a[c];
		if (r?.has(t)) {
			t.f |= O;
			const o = document.createDocumentFragment();
			Ke(t, o);
		} else Ve(a[c], n);
	}
}
var de;
function V(e, a, n, r, c, t = null) {
	var o = e,
		d = new Map(),
		u = (a & ge) !== 0;
	if (u) {
		var p = e;
		o = U ? $(Re(p)) : p.appendChild(J());
	}
	U && Ae();
	var f = null,
		w = Me(() => {
			var s = n();
			return me(s) ? s : s == null ? [] : le(s);
		}),
		h,
		j = new Map(),
		_ = !0;
	function N(s) {
		(b.effect.f & Le) === 0 &&
			(b.pending.delete(s),
			(b.fallback = f),
			na(b, h, o, a, r),
			f !== null &&
				(h.length === 0
					? (f.f & O) === 0
						? he(f)
						: ((f.f ^= O), K(f, null, o))
					: _e(f, () => {
							f = null;
						})));
	}
	function i(s) {
		b.pending.delete(s);
	}
	var l = Ee(() => {
			h = g(w);
			var s = h.length;
			let v = !1;
			if (U) {
				var k = Ie(o) === Se;
				k !== (s === 0) && ((o = ue()), $(o), G(!1), (v = !0));
			}
			for (var x = new Set(), y = Ne, E = He(), S = 0; S < s; S += 1) {
				U && Y.nodeType === Ce && Y.data === Te && ((o = Y), (v = !0), G(!1));
				var A = h[S],
					P = r(A, S),
					F = _ ? null : d.get(P);
				(F
					? (F.v && ce(F.v, A), F.i && ce(F.i, S), E && y.unskip_effect(F.e))
					: ((F = ra(d, _ ? o : (de ??= J()), A, P, S, c, a, n)), _ || (F.e.f |= O), d.set(P, F)),
					x.add(P));
			}
			if (
				(s === 0 &&
					t &&
					!f &&
					(_ ? (f = re(() => t(o))) : ((f = re(() => t((de ??= J())))), (f.f |= O))),
				s > x.size && De(),
				U && s > 0 && $(ue()),
				!_)
			)
				if ((j.set(y, x), E)) {
					for (const [ke, xe] of d) x.has(ke) || y.skip_effect(xe.e);
					(y.oncommit(N), y.ondiscard(i));
				} else N(y);
			(v && G(!0), g(w));
		}),
		b = { effect: l, items: d, pending: j, outrogroups: null, fallback: f };
	((_ = !1), U && (o = Y));
}
function W(e) {
	for (; e !== null && (e.f & Pe) === 0; ) e = e.next;
	return e;
}
function na(e, a, n, r, c) {
	var t = (r & Be) !== 0,
		o = a.length,
		d = e.items,
		u = W(e.effect.first),
		p,
		f = null,
		w,
		h = [],
		j = [],
		_,
		N,
		i,
		l;
	if (t)
		for (l = 0; l < o; l += 1)
			((_ = a[l]),
				(N = c(_, l)),
				(i = d.get(N).e),
				(i.f & O) === 0 && (i.nodes?.a?.measure(), (w ??= new Set()).add(i)));
	for (l = 0; l < o; l += 1) {
		if (((_ = a[l]), (N = c(_, l)), (i = d.get(N).e), e.outrogroups !== null))
			for (const A of e.outrogroups) (A.pending.delete(i), A.done.delete(i));
		if (
			((i.f & Q) !== 0 && (he(i), t && (i.nodes?.a?.unfix(), (w ??= new Set()).delete(i))),
			(i.f & O) !== 0)
		)
			if (((i.f ^= O), i === u)) K(i, null, n);
			else {
				var b = f ? f.next : u;
				(i === e.effect.last && (e.effect.last = i.prev),
					i.prev && (i.prev.next = i.next),
					i.next && (i.next.prev = i.prev),
					L(e, f, i),
					L(e, i, b),
					K(i, b, n),
					(f = i),
					(h = []),
					(j = []),
					(u = W(f.next)));
				continue;
			}
		if (i !== u) {
			if (p !== void 0 && p.has(i)) {
				if (h.length < j.length) {
					var s = j[0],
						v;
					f = s.prev;
					var k = h[0],
						x = h[h.length - 1];
					for (v = 0; v < h.length; v += 1) K(h[v], s, n);
					for (v = 0; v < j.length; v += 1) p.delete(j[v]);
					(L(e, k.prev, x.next),
						L(e, f, k),
						L(e, x, s),
						(u = s),
						(f = x),
						(l -= 1),
						(h = []),
						(j = []));
				} else
					(p.delete(i),
						K(i, u, n),
						L(e, i.prev, i.next),
						L(e, i, f === null ? e.effect.first : f.next),
						L(e, f, i),
						(f = i));
				continue;
			}
			for (h = [], j = []; u !== null && u !== i; )
				((p ??= new Set()).add(u), j.push(u), (u = W(u.next)));
			if (u === null) continue;
		}
		((i.f & O) === 0 && h.push(i), (f = i), (u = W(i.next)));
	}
	if (e.outrogroups !== null) {
		for (const A of e.outrogroups)
			A.pending.size === 0 && (ie(e, le(A.done)), e.outrogroups?.delete(A));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (u !== null || p !== void 0) {
		var y = [];
		if (p !== void 0) for (i of p) (i.f & Q) === 0 && y.push(i);
		for (; u !== null; ) ((u.f & Q) === 0 && u !== e.fallback && y.push(u), (u = W(u.next)));
		var E = y.length;
		if (E > 0) {
			var S = (r & ge) !== 0 && o === 0 ? n : null;
			if (t) {
				for (l = 0; l < E; l += 1) y[l].nodes?.a?.measure();
				for (l = 0; l < E; l += 1) y[l].nodes?.a?.fix();
			}
			aa(e, y, S);
		}
	}
	t &&
		Ue(() => {
			if (w !== void 0) for (i of w) i.nodes?.a?.apply();
		});
}
function ra(e, a, n, r, c, t, o, d) {
	var u = (o & Oe) !== 0 ? ((o & Fe) === 0 ? ze(n, !1, !1) : fe(n)) : null,
		p = (o & qe) !== 0 ? fe(c) : null;
	return {
		v: u,
		i: p,
		e: re(
			() => (
				t(a, u ?? n, p ?? c, d),
				() => {
					e.delete(r);
				}
			)
		)
	};
}
function K(e, a, n) {
	if (e.nodes)
		for (
			var r = e.nodes.start, c = e.nodes.end, t = a && (a.f & O) === 0 ? a.nodes.start : n;
			r !== null;
		) {
			var o = Ye(r);
			if ((t.before(r), r === c)) return;
			r = o;
		}
}
function L(e, a, n) {
	(a === null ? (e.effect.first = n) : (a.next = n),
		n === null ? (e.effect.last = a) : (n.prev = a));
}
const ve = [
	...` 	
\r\f \v\uFEFF`
];
function ta(e, a, n) {
	var r = '' + e;
	if (n) {
		for (var c of Object.keys(n))
			if (n[c]) r = r ? r + ' ' + c : c;
			else if (r.length)
				for (var t = c.length, o = 0; (o = r.indexOf(c, o)) >= 0; ) {
					var d = o + t;
					(o === 0 || ve.includes(r[o - 1])) && (d === r.length || ve.includes(r[d]))
						? (r = (o === 0 ? '' : r.substring(0, o)) + r.substring(d + 1))
						: (o = d);
				}
	}
	return r === '' ? null : r;
}
function ia(e, a, n, r, c, t) {
	var o = e.__className;
	if (U || o !== n || o === void 0) {
		var d = ta(n, r, t);
		((!U || d !== e.getAttribute('class')) &&
			(d == null ? e.removeAttribute('class') : (e.className = d)),
			(e.__className = n));
	} else if (t && c !== t)
		for (var u in t) {
			var p = !!t[u];
			(c == null || p !== !!c[u]) && e.classList.toggle(u, p);
		}
	return t;
}
function we(e, a, n = !1) {
	if (e.multiple) {
		if (a == null) return;
		if (!me(a)) return Ze();
		for (var r of e.options) r.selected = a.includes(pe(r));
		return;
	}
	for (r of e.options) {
		var c = pe(r);
		if (Je(c, a)) {
			r.selected = !0;
			return;
		}
	}
	(!n || a !== void 0) && (e.selectedIndex = -1);
}
function oa(e) {
	var a = new MutationObserver(() => {
		we(e, e.__value);
	});
	(a.observe(e, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ['value'] }),
		Xe(() => {
			a.disconnect();
		}));
}
function pe(e) {
	return '__value' in e ? e.__value : e.value;
}
var sa = I(
	'<footer class="site-footer svelte-jz8lnl"><p class="svelte-jz8lnl">&copy; Grzegorz Iwaniec</p></footer>'
);
function la(e) {
	var a = sa();
	R(e, a);
}
const B = {
	title: 'Analiza heurystyczna',
	rulesHeading: 'Reguły zasad heurystycznych',
	emptyRule: 'Opis dla tej reguły jest w przygotowaniu.',
	missingRule: 'Reguła nie została znaleziona.',
	heroSections: [
		{
			title: 'Czemu służy?',
			text: 'Analiza heurystyczna to metoda oceny użyteczności interfejsu użytkownika, która polega na porównaniu jego cech z ustalonymi zasadami heurystycznymi. Celem analizy jest identyfikacja problemów z użytecznością i zaproponowanie rozwiązań, które poprawią doświadczenie użytkownika.'
		},
		{
			title: 'Kto opracował zbiór zasad heurystycznych?',
			text: 'Zbiór zasad heurystycznych został opracowany przez Jakoba Nielsena w 1994 roku.'
		}
	]
};
var ua = I(
	'<header class="svelte-1elxaub"><div class="header-content svelte-1elxaub"><h1 id="page-title" class="svelte-1elxaub"> </h1> <img class="header-icon svelte-1elxaub" alt="Ikona UX"/></div></header>'
);
function ca(e, a) {
	X(a, !1);
	const n = `${Qe}/images/ux-icon.png`;
	be();
	var r = ua(),
		c = z(r),
		t = z(c),
		o = z(t, !0);
	m(t);
	var d = T(t, 2);
	(m(c),
		m(r),
		D(() => {
			(C(o, B.title), M(d, 'src', n));
		}),
		R(e, r),
		Z());
}
var fa = I(
		'<section class="hero-section svelte-1q37ri0"><h2 class="svelte-1q37ri0"> </h2> <p class="svelte-1q37ri0"> </p></section>'
	),
	da = I('<section class="hero-content svelte-1q37ri0" aria-label="Wprowadzenie"></section>');
function va(e, a) {
	(X(a, !1), be());
	var n = da();
	(V(
		n,
		5,
		() => B.heroSections,
		(r) => r.title,
		(r, c) => {
			var t = fa(),
				o = z(t),
				d = z(o, !0);
			m(o);
			var u = T(o, 2),
				p = z(u, !0);
			(m(u),
				m(t),
				D(() => {
					(C(d, g(c).title), C(p, g(c).text));
				}),
				R(r, t));
		}
	),
		m(n),
		R(e, n),
		Z());
}
var pa = I(
	'<section class="front-screen svelte-j5qb5f" aria-labelledby="page-title"><!> <!></section>'
);
function ba(e) {
	var a = pa(),
		n = z(a);
	ca(n, {});
	var r = T(n, 2);
	(va(r, {}), m(a), R(e, a));
}
const H = (e, a, n = [], r = []) => ({ number: e, title: a, content: n, images: r }),
	ye = 3,
	oe = (e) => `rule-tab-${e}`,
	se = (e) => `rule-panel-${e}`,
	q = [
		H(1, 'Widoczność stanu systemu'),
		H(2, 'Dopasowanie systemu do świata rzeczywistego'),
		H(
			3,
			'Kontrola i swoboda użytkownika',
			[
				{
					text: 'Użytkownicy często wykonują czynności przez pomyłkę. Potrzebują wyraźnie oznaczonego wyjścia awaryjnego, aby opuścić niepożądaną czynność bez konieczności przechodzenia przez długotrwały proces. Wyjście powinno być łatwe do znalezienia i użycia. Każda akcja powinna zapewniać szybki powrót do poprzedniego stanu. Akcje zajmujące dużo czasu powinny mieć opcję anulowania, aby użytkownicy mogli zatrzymać proces, jeśli popełnią błąd lub zmienią zdanie.'
				}
			],
			[
				{
					src: '/wdi-01/images/undo_button.png',
					alt: 'Przykład funkcji "Cofnij" w edytorze tekstu',
					caption:
						'Funkcja "Cofnij" pozwala użytkownikom łatwo cofnąć ostatnią akcję, co jest kluczowe dla kontroli i swobody użytkownika. W przypadku przeglądarki internetowej, przycisk "Cofnij" umożliwia szybkie przywrócenie poprzedniej strony, co jest szczególnie przydatne, gdy użytkownik przypadkowo kliknie zły link lub wprowadzi niepożądane dane.'
				},
				{
					src: '/wdi-01/images/action_snackbar_undo.png',
					alt: 'Przykład przycisku "Undo" w aplikacji',
					caption:
						'Przycisk "Undo" umożliwia użytkownikom szybkie cofnięcie ostatniej akcji, co jest ważne dla kontroli i swobody użytkownika. W tym przypadku po usunięciu elementu pojawia się snackbar z opcją "Undo", pozwalającą na łatwe przywrócenie usuniętego elementu.'
				}
			]
		),
		H(4, 'Spójność i standardy'),
		H(5, 'Zapobieganie błędom'),
		H(6, 'Rozpoznawanie zamiast przypominania sobie'),
		H(7, 'Elastyczność i efektywność użytkowania'),
		H(8, 'Estetyka i minimalistyczny design'),
		H(9, 'Pomoc w rozpoznawaniu, diagnozowaniu i naprawianiu błędów'),
		H(10, 'Pomoc i dokumentacja')
	],
	ga = new Map(q.map((e) => [e.number, e])),
	ma = (e) => ga.get(e) ?? null;
var za = I('<option> </option>'),
	ha = I(
		'<li class="rule-item svelte-dbbk9z" role="presentation"><button role="tab" type="button"><span class="rule-number svelte-dbbk9z"> </span> <span> </span></button></li>'
	),
	_a = I(
		'<section class="rules-nav svelte-dbbk9z" aria-labelledby="rules-heading"><h2 id="rules-heading" class="rules-heading svelte-dbbk9z"> </h2> <div class="rules-select-wrap svelte-dbbk9z"><label class="visually-hidden" for="rules-select"> </label> <div class="select-shell svelte-dbbk9z"><select id="rules-select" class="rules-select svelte-dbbk9z"></select></div></div> <ol class="rules-list svelte-dbbk9z" role="tablist" aria-labelledby="rules-heading" aria-orientation="vertical"></ol></section>'
	);
function wa(e, a) {
	X(a, !0);
	let n = ea(a, 'selectedRule', 3, ye);
	const r = (l) => a.onRuleSelected(l),
		c = (l) => {
			document.getElementById(oe(l))?.focus();
		},
		t = (l, b) => {
			const v = (q.findIndex((k) => k.number === l) + b + q.length) % q.length;
			return q[v]?.number ?? l;
		},
		o = (l, b) => {
			let s = b;
			switch (l.key) {
				case 'ArrowDown':
				case 'ArrowRight':
					s = t(b, 1);
					break;
				case 'ArrowUp':
				case 'ArrowLeft':
					s = t(b, -1);
					break;
				case 'Home':
					s = q[0]?.number ?? b;
					break;
				case 'End':
					s = q.at(-1)?.number ?? b;
					break;
				default:
					return;
			}
			(l.preventDefault(), r(s), queueMicrotask(() => c(s)));
		};
	var d = _a(),
		u = z(d),
		p = z(u, !0);
	m(u);
	var f = T(u, 2),
		w = z(f),
		h = z(w, !0);
	m(w);
	var j = T(w, 2),
		_ = z(j);
	(V(
		_,
		21,
		() => q,
		(l) => l.number,
		(l, b) => {
			var s = za(),
				v = z(s);
			m(s);
			var k = {};
			(D(() => {
				(C(v, `${g(b).number ?? ''}. ${g(b).title ?? ''}`),
					k !== (k = g(b).number) && (s.value = (s.__value = g(b).number) ?? ''));
			}),
				R(l, s));
		}
	),
		m(_));
	var N;
	(oa(_), m(j), m(f));
	var i = T(f, 2);
	(V(
		i,
		21,
		() => q,
		(l) => l.number,
		(l, b) => {
			var s = ha(),
				v = z(s);
			let k;
			var x = z(v),
				y = z(x, !0);
			m(x);
			var E = T(x, 2),
				S = z(E, !0);
			(m(E),
				m(v),
				m(s),
				D(
					(A, P) => {
						((k = ia(v, 1, 'rule-button svelte-dbbk9z', null, k, { active: n() === g(b).number })),
							M(v, 'id', A),
							M(v, 'aria-selected', n() === g(b).number),
							M(v, 'aria-controls', P),
							M(v, 'tabindex', n() === g(b).number ? 0 : -1),
							C(y, g(b).number),
							C(S, g(b).title));
					},
					[() => oe(g(b).number), () => se(g(b).number)]
				),
				ae('click', v, () => r(g(b).number)),
				ae('keydown', v, (A) => o(A, g(b).number)),
				R(l, s));
		}
	),
		m(i),
		m(d),
		D(
			(l) => {
				(C(p, B.rulesHeading),
					C(h, B.rulesHeading),
					M(_, 'aria-controls', l),
					N !== (N = n()) && ((_.value = (_.__value = n()) ?? ''), we(_, n())));
			},
			[() => se(n())]
		),
		ae('change', _, (l) => r(Number(l.currentTarget.value))),
		R(e, d),
		Z());
}
Ge(['change', 'click', 'keydown']);
var ya = I('<p class="svelte-10a4o85"> </p>'),
	ka = I('<p class="svelte-10a4o85"> </p>'),
	xa = I(
		'<figure class="image svelte-10a4o85"><img loading="lazy" class="svelte-10a4o85"/> <figcaption class="svelte-10a4o85"> </figcaption></figure>'
	),
	ja = I('<div class="images svelte-10a4o85"></div>'),
	Ea = I(
		'<h2 class="rule-title svelte-10a4o85"> </h2> <div class="content svelte-10a4o85"><!></div> <!>',
		1
	),
	Ra = I('<p class="svelte-10a4o85"> </p>'),
	Aa = I('<div class="rule-view svelte-10a4o85" role="tabpanel" tabindex="0"><!></div>');
function Ia(e, a) {
	X(a, !0);
	const n = ee(() => ma(a.number)),
		r = ee(() => se(a.number)),
		c = ee(() => oe(a.number));
	var t = Aa(),
		o = z(t);
	{
		var d = (p) => {
				var f = Ea(),
					w = te(f),
					h = z(w);
				m(w);
				var j = T(w, 2),
					_ = z(j);
				{
					var N = (s) => {
							var v = je(),
								k = te(v);
							(V(
								k,
								17,
								() => g(n).content,
								(x) => x.text,
								(x, y) => {
									var E = ya(),
										S = z(E, !0);
									(m(E), D(() => C(S, g(y).text)), R(x, E));
								}
							),
								R(s, v));
						},
						i = (s) => {
							var v = ka(),
								k = z(v, !0);
							(m(v), D(() => C(k, B.emptyRule)), R(s, v));
						};
					ne(_, (s) => {
						g(n).content.length ? s(N) : s(i, -1);
					});
				}
				m(j);
				var l = T(j, 2);
				{
					var b = (s) => {
						var v = ja();
						(V(
							v,
							21,
							() => g(n).images,
							(k) => k.src,
							(k, x) => {
								var y = xa(),
									E = z(y),
									S = T(E, 2),
									A = z(S, !0);
								(m(S),
									m(y),
									D(() => {
										(M(E, 'src', g(x).src), M(E, 'alt', g(x).alt), C(A, g(x).caption));
									}),
									R(k, y));
							}
						),
							m(v),
							R(s, v));
					};
					ne(l, (s) => {
						g(n).images.length && s(b);
					});
				}
				(D(() => C(h, `${g(n).number ?? ''}. ${g(n).title ?? ''}`)), R(p, f));
			},
			u = (p) => {
				var f = Ra(),
					w = z(f, !0);
				(m(f), D(() => C(w, B.missingRule)), R(p, f));
			};
		ne(o, (p) => {
			g(n) ? p(d) : p(u, -1);
		});
	}
	(m(t),
		D(() => {
			(M(t, 'id', g(r)), M(t, 'aria-labelledby', g(c)));
		}),
		R(e, t),
		Z());
}
var Sa = I(
	'<main class="page-content svelte-1uha8ag"><!> <section class="rules-container svelte-1uha8ag" aria-labelledby="rules-heading"><!> <!></section></main> <!>',
	1
);
function Fa(e) {
	let a = ze(ye);
	var n = Sa(),
		r = te(n),
		c = z(r);
	ba(c);
	var t = T(c, 2),
		o = z(t);
	wa(o, {
		onRuleSelected: (p) => $e(a, p),
		get selectedRule() {
			return g(a);
		}
	});
	var d = T(o, 2);
	(Ia(d, {
		get number() {
			return g(a);
		}
	}),
		m(t),
		m(r));
	var u = T(r, 2);
	(la(u), R(e, n));
}
export { Fa as component };
