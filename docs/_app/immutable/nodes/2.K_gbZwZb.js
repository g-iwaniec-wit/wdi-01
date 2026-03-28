import { a as x, f as S, c as _e } from '../chunks/CZKBnRv4.js';
import { i as fe } from '../chunks/MlJNJat9.js';
import {
	c as j,
	E as be,
	aO as ue,
	h as U,
	K as Q,
	a2 as ze,
	F as ye,
	q as g,
	H as we,
	af as Ee,
	J as te,
	M as Z,
	f as P,
	aw as Re,
	aE as xe,
	ao as se,
	e as Se,
	aP as D,
	b as ee,
	aQ as ke,
	s as Te,
	_ as Ae,
	aR as Ce,
	aD as ne,
	aS as Ne,
	aT as De,
	aK as ce,
	ab as ie,
	aU as He,
	V as Ie,
	r as ve,
	p as de,
	aV as $,
	ad as Me,
	aW as Oe,
	aX as Fe,
	aB as qe,
	m as Ue,
	d as Be,
	ay as Ve,
	x as W,
	z as I,
	A as X,
	B as m,
	C as h,
	D as M,
	aN as Le,
	y as ae,
	S as Ke
} from '../chunks/B8weEiwe.js';
import { s as A, d as Pe, a as Ye } from '../chunks/Bn5dPT6J.js';
import { s as Y } from '../chunks/BOERzKb6.js';
import { p as Je, i as G } from '../chunks/BKHkfLCh.js';
function We(e, n, a) {
	for (var r = [], o = n.length, l, t = n.length, f = 0; f < o; f++) {
		let z = n[f];
		de(
			z,
			() => {
				if (l) {
					if ((l.pending.delete(z), l.done.add(z), l.pending.size === 0)) {
						var p = e.outrogroups;
						(re(e, ne(l.done)), p.delete(l), p.size === 0 && (e.outrogroups = null));
					}
				} else t -= 1;
			},
			!1
		);
	}
	if (t === 0) {
		var i = r.length === 0 && a !== null;
		if (i) {
			var c = a,
				u = c.parentNode;
			(qe(u), u.append(c), e.items.clear());
		}
		re(e, n, !i);
	} else ((l = { pending: new Set(n), done: new Set() }), (e.outrogroups ??= new Set()).add(l));
}
function re(e, n, a = !0) {
	var r;
	if (e.pending.size > 0) {
		r = new Set();
		for (const t of e.pending.values()) for (const f of t) r.add(e.items.get(f).e);
	}
	for (var o = 0; o < n.length; o++) {
		var l = n[o];
		if (r?.has(l)) {
			l.f |= D;
			const t = document.createDocumentFragment();
			Ue(l, t);
		} else Be(n[o], a);
	}
}
var le;
function J(e, n, a, r, o, l = null) {
	var t = e,
		f = new Map(),
		i = (n & ue) !== 0;
	if (i) {
		var c = e;
		t = U ? Q(ze(c)) : c.appendChild(j());
	}
	U && ye();
	var u = null,
		z = Ae(() => {
			var d = a();
			return Ce(d) ? d : d == null ? [] : ne(d);
		}),
		p,
		R = new Map(),
		E = !0;
	function k(d) {
		(b.effect.f & Ie) === 0 &&
			(b.pending.delete(d),
			(b.fallback = u),
			Xe(b, p, t, n, r),
			u !== null &&
				(p.length === 0
					? (u.f & D) === 0
						? ve(u)
						: ((u.f ^= D), V(u, null, t))
					: de(u, () => {
							u = null;
						})));
	}
	function s(d) {
		b.pending.delete(d);
	}
	var v = be(() => {
			p = g(z);
			var d = p.length;
			let _ = !1;
			if (U) {
				var T = we(t) === Ee;
				T !== (d === 0) && ((t = te()), Q(t), Z(!1), (_ = !0));
			}
			for (var w = new Set(), y = Se, O = Te(), F = 0; F < d; F += 1) {
				U && P.nodeType === Re && P.data === xe && ((t = P), (_ = !0), Z(!1));
				var C = p[F],
					K = r(C, F),
					H = E ? null : f.get(K);
				(H
					? (H.v && se(H.v, C), H.i && se(H.i, F), O && y.unskip_effect(H.e))
					: ((H = je(f, E ? t : (le ??= j()), C, K, F, o, n, a)), E || (H.e.f |= D), f.set(K, H)),
					w.add(K));
			}
			if (
				(d === 0 &&
					l &&
					!u &&
					(E ? (u = ee(() => l(t))) : ((u = ee(() => l((le ??= j())))), (u.f |= D))),
				d > w.size && ke(),
				U && d > 0 && Q(te()),
				!E)
			)
				if ((R.set(y, w), O)) {
					for (const [he, me] of f) w.has(he) || y.skip_effect(me.e);
					(y.oncommit(k), y.ondiscard(s));
				} else k(y);
			(_ && Z(!0), g(z));
		}),
		b = { effect: v, items: f, pending: R, outrogroups: null, fallback: u };
	((E = !1), U && (t = P));
}
function B(e) {
	for (; e !== null && (e.f & Oe) === 0; ) e = e.next;
	return e;
}
function Xe(e, n, a, r, o) {
	var l = (r & Fe) !== 0,
		t = n.length,
		f = e.items,
		i = B(e.effect.first),
		c,
		u = null,
		z,
		p = [],
		R = [],
		E,
		k,
		s,
		v;
	if (l)
		for (v = 0; v < t; v += 1)
			((E = n[v]),
				(k = o(E, v)),
				(s = f.get(k).e),
				(s.f & D) === 0 && (s.nodes?.a?.measure(), (z ??= new Set()).add(s)));
	for (v = 0; v < t; v += 1) {
		if (((E = n[v]), (k = o(E, v)), (s = f.get(k).e), e.outrogroups !== null))
			for (const C of e.outrogroups) (C.pending.delete(s), C.done.delete(s));
		if (
			((s.f & $) !== 0 && (ve(s), l && (s.nodes?.a?.unfix(), (z ??= new Set()).delete(s))),
			(s.f & D) !== 0)
		)
			if (((s.f ^= D), s === i)) V(s, null, a);
			else {
				var b = u ? u.next : i;
				(s === e.effect.last && (e.effect.last = s.prev),
					s.prev && (s.prev.next = s.next),
					s.next && (s.next.prev = s.prev),
					q(e, u, s),
					q(e, s, b),
					V(s, b, a),
					(u = s),
					(p = []),
					(R = []),
					(i = B(u.next)));
				continue;
			}
		if (s !== i) {
			if (c !== void 0 && c.has(s)) {
				if (p.length < R.length) {
					var d = R[0],
						_;
					u = d.prev;
					var T = p[0],
						w = p[p.length - 1];
					for (_ = 0; _ < p.length; _ += 1) V(p[_], d, a);
					for (_ = 0; _ < R.length; _ += 1) c.delete(R[_]);
					(q(e, T.prev, w.next),
						q(e, u, T),
						q(e, w, d),
						(i = d),
						(u = w),
						(v -= 1),
						(p = []),
						(R = []));
				} else
					(c.delete(s),
						V(s, i, a),
						q(e, s.prev, s.next),
						q(e, s, u === null ? e.effect.first : u.next),
						q(e, u, s),
						(u = s));
				continue;
			}
			for (p = [], R = []; i !== null && i !== s; )
				((c ??= new Set()).add(i), R.push(i), (i = B(i.next)));
			if (i === null) continue;
		}
		((s.f & D) === 0 && p.push(s), (u = s), (i = B(s.next)));
	}
	if (e.outrogroups !== null) {
		for (const C of e.outrogroups)
			C.pending.size === 0 && (re(e, ne(C.done)), e.outrogroups?.delete(C));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (i !== null || c !== void 0) {
		var y = [];
		if (c !== void 0) for (s of c) (s.f & $) === 0 && y.push(s);
		for (; i !== null; ) ((i.f & $) === 0 && i !== e.fallback && y.push(i), (i = B(i.next)));
		var O = y.length;
		if (O > 0) {
			var F = (r & ue) !== 0 && t === 0 ? a : null;
			if (l) {
				for (v = 0; v < O; v += 1) y[v].nodes?.a?.measure();
				for (v = 0; v < O; v += 1) y[v].nodes?.a?.fix();
			}
			We(e, y, F);
		}
	}
	l &&
		Me(() => {
			if (z !== void 0) for (s of z) s.nodes?.a?.apply();
		});
}
function je(e, n, a, r, o, l, t, f) {
	var i = (t & Ne) !== 0 ? ((t & De) === 0 ? ce(a, !1, !1) : ie(a)) : null,
		c = (t & He) !== 0 ? ie(o) : null;
	return {
		v: i,
		i: c,
		e: ee(
			() => (
				l(n, i ?? a, c ?? o, f),
				() => {
					e.delete(r);
				}
			)
		)
	};
}
function V(e, n, a) {
	if (e.nodes)
		for (
			var r = e.nodes.start, o = e.nodes.end, l = n && (n.f & D) === 0 ? n.nodes.start : a;
			r !== null;
		) {
			var t = Ve(r);
			if ((l.before(r), r === o)) return;
			r = t;
		}
}
function q(e, n, a) {
	(n === null ? (e.effect.first = a) : (n.next = a),
		a === null ? (e.effect.last = n) : (a.prev = n));
}
const oe = [
	...` 	
\r\f \v\uFEFF`
];
function Qe(e, n, a) {
	var r = '' + e;
	if (a) {
		for (var o of Object.keys(a))
			if (a[o]) r = r ? r + ' ' + o : o;
			else if (r.length)
				for (var l = o.length, t = 0; (t = r.indexOf(o, t)) >= 0; ) {
					var f = t + l;
					(t === 0 || oe.includes(r[t - 1])) && (f === r.length || oe.includes(r[f]))
						? (r = (t === 0 ? '' : r.substring(0, t)) + r.substring(f + 1))
						: (t = f);
				}
	}
	return r === '' ? null : r;
}
function Ze(e, n, a, r, o, l) {
	var t = e.__className;
	if (U || t !== a || t === void 0) {
		var f = Qe(a, r, l);
		((!U || f !== e.getAttribute('class')) &&
			(f == null ? e.removeAttribute('class') : (e.className = f)),
			(e.__className = a));
	} else if (l && o !== l)
		for (var i in l) {
			var c = !!l[i];
			(o == null || c !== !!o[i]) && e.classList.toggle(i, c);
		}
	return l;
}
const L = {
	title: 'Analiza heurystyczna',
	rulesHeading: 'Reguły zasad heurystycznych',
	emptyRule: 'Opis dla tej reguły jest w przygotowaniu.',
	missingRule: 'Reguła nie została znaleziona.',
	heroSections: [
		{ title: 'Czemu służy?', text: 'Opis analizy' },
		{
			title: 'Kto opracował zbiór zasad heurystycznych?',
			text: 'Zbiór zasad heurystycznych został opracowany przez Jakoba Nielsena w 1994 roku.'
		}
	]
};
var $e = S(
	'<header class="svelte-1elxaub"><h1 id="page-title" class="svelte-1elxaub"> </h1></header>'
);
function Ge(e, n) {
	(W(n, !1), fe());
	var a = $e(),
		r = m(a),
		o = m(r, !0);
	(h(r), h(a), I(() => A(o, L.title)), x(e, a), X());
}
var ea = S(
		'<article class="svelte-1q37ri0"><h2 class="svelte-1q37ri0"> </h2> <p class="svelte-1q37ri0"> </p></article>'
	),
	aa = S('<section class="hero-content svelte-1q37ri0"></section>');
function ra(e, n) {
	(W(n, !1), fe());
	var a = aa();
	(J(
		a,
		5,
		() => L.heroSections,
		(r) => r.title,
		(r, o) => {
			var l = ea(),
				t = m(l),
				f = m(t, !0);
			h(t);
			var i = M(t, 2),
				c = m(i, !0);
			(h(i),
				h(l),
				I(() => {
					(A(f, g(o).title), A(c, g(o).text));
				}),
				x(r, l));
		}
	),
		h(a),
		x(e, a),
		X());
}
var na = S(
	'<section class="front-screen svelte-j5qb5f" aria-labelledby="page-title"><!> <!></section>'
);
function ta(e) {
	var n = na(),
		a = m(n);
	Ge(a, {});
	var r = M(a, 2);
	(ra(r, {}), h(n), x(e, n));
}
const N = (e, n, a = [], r = []) => ({ number: e, title: n, content: a, images: r }),
	pe = 3,
	ge = [
		N(1, 'Visibility of System Status'),
		N(2, 'Match Between the System and the Real World'),
		N(3, 'User Control and Freedom', [
			{
				lang: 'en',
				text: 'Users often perform actions by mistake. They need a clearly marked emergency exit to leave an unwanted action without going through a long process.'
			},
			{
				lang: 'pl',
				text: 'Użytkownicy często wykonują czynności przez pomyłkę. Potrzebują wyraźnie oznaczonego wyjścia awaryjnego, aby opuścić niepożądaną czynność bez konieczności przechodzenia przez długotrwały proces.'
			}
		]),
		N(4, 'Consistency and Standards'),
		N(5, 'Error Prevention'),
		N(6, 'Recognition Rather Than Recall'),
		N(7, 'Flexibility and Efficiency of Use'),
		N(8, 'Aesthetic and Minimalist Design'),
		N(9, 'Help Users Recognize, Diagnose, and Recover from Errors'),
		N(10, 'Help and Documentation')
	],
	sa = new Map(ge.map((e) => [e.number, e])),
	ia = (e) => sa.get(e) ?? null;
var la = S(
		'<li class="rule-item svelte-dbbk9z"><button type="button" aria-controls="rule-view"><span class="rule-number svelte-dbbk9z"> </span> <span> </span></button></li>'
	),
	oa = S(
		'<nav class="rules-nav svelte-dbbk9z"><h2 id="rules-heading" class="svelte-dbbk9z"> </h2> <ol class="svelte-dbbk9z"></ol></nav>'
	);
function fa(e, n) {
	W(n, !0);
	let a = Je(n, 'selectedRule', 3, pe);
	var r = oa(),
		o = m(r),
		l = m(o, !0);
	h(o);
	var t = M(o, 2);
	(J(
		t,
		21,
		() => ge,
		(f) => f.number,
		(f, i) => {
			var c = la(),
				u = m(c);
			let z;
			var p = m(u),
				R = m(p, !0);
			h(p);
			var E = M(p, 2),
				k = m(E, !0);
			(h(E),
				h(u),
				h(c),
				I(() => {
					((z = Ze(u, 1, 'rule-button svelte-dbbk9z', null, z, { active: a() === g(i).number })),
						Y(u, 'aria-pressed', a() === g(i).number),
						A(R, g(i).number),
						A(k, g(i).title));
				}),
				Ye('click', u, () => n.onRuleSelected(g(i).number)),
				x(f, c));
		}
	),
		h(t),
		h(r),
		I(() => A(l, L.rulesHeading)),
		x(e, r),
		X());
}
Pe(['click']);
var ua = S('<p class="svelte-10a4o85"> </p>'),
	ca = S('<p class="svelte-10a4o85"> </p>'),
	va = S(
		'<figure class="image svelte-10a4o85"><img loading="lazy" class="svelte-10a4o85"/> <figcaption class="svelte-10a4o85"> </figcaption></figure>'
	),
	da = S('<section class="images svelte-10a4o85"></section>'),
	pa = S(
		'<h2 class="svelte-10a4o85"> </h2> <section class="content svelte-10a4o85"><!></section> <!>',
		1
	),
	ga = S('<p class="svelte-10a4o85"> </p>'),
	ha = S('<article class="rule-view svelte-10a4o85" id="rule-view"><!></article>');
function ma(e, n) {
	W(n, !0);
	const a = Le(() => ia(n.number));
	var r = ha(),
		o = m(r);
	{
		var l = (f) => {
				var i = pa(),
					c = ae(i),
					u = m(c);
				h(c);
				var z = M(c, 2),
					p = m(z);
				{
					var R = (v) => {
							var b = _e(),
								d = ae(b);
							(J(
								d,
								17,
								() => g(a).content,
								(_) => `${g(a).number}-${_.lang}`,
								(_, T) => {
									var w = ua(),
										y = m(w, !0);
									(h(w),
										I(() => {
											(Y(w, 'lang', g(T).lang), A(y, g(T).text));
										}),
										x(_, w));
								}
							),
								x(v, b));
						},
						E = (v) => {
							var b = ca(),
								d = m(b, !0);
							(h(b), I(() => A(d, L.emptyRule)), x(v, b));
						};
					G(p, (v) => {
						g(a).content.length ? v(R) : v(E, -1);
					});
				}
				h(z);
				var k = M(z, 2);
				{
					var s = (v) => {
						var b = da();
						(J(
							b,
							21,
							() => g(a).images,
							(d) => d.src,
							(d, _) => {
								var T = va(),
									w = m(T),
									y = M(w, 2),
									O = m(y, !0);
								(h(y),
									h(T),
									I(() => {
										(Y(w, 'src', g(_).src), Y(w, 'alt', g(_).alt), A(O, g(_).caption));
									}),
									x(d, T));
							}
						),
							h(b),
							x(v, b));
					};
					G(k, (v) => {
						g(a).images.length && v(s);
					});
				}
				(I(() => A(u, `${g(a).number ?? ''}. ${g(a).title ?? ''}`)), x(f, i));
			},
			t = (f) => {
				var i = ga(),
					c = m(i, !0);
				(h(i), I(() => A(c, L.missingRule)), x(f, i));
			};
		G(o, (f) => {
			g(a) ? f(l) : f(t, -1);
		});
	}
	(h(r), x(e, r), X());
}
var _a = S('<!> <main class="rules-container svelte-1uha8ag"><!> <!></main>', 1);
function xa(e) {
	let n = ce(pe);
	var a = _a(),
		r = ae(a);
	ta(r);
	var o = M(r, 2),
		l = m(o);
	fa(l, {
		onRuleSelected: (f) => Ke(n, f),
		get selectedRule() {
			return g(n);
		}
	});
	var t = M(l, 2);
	(ma(t, {
		get number() {
			return g(n);
		}
	}),
		h(o),
		x(e, a));
}
export { xa as component };
