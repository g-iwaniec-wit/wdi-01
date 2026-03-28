import {
	E as m,
	h as I,
	F as y,
	G as B,
	H as L,
	J as D,
	K as M,
	M as R,
	f as N,
	k as Y,
	O as U,
	P as w,
	Q as x,
	o as h,
	R as F,
	S as $,
	T as C,
	U as G,
	V as Z,
	W as q,
	X as z,
	w as H,
	Y as J,
	Z as K,
	t as Q,
	_ as V,
	$ as W,
	a0 as X
} from './CQd7E61n.js';
import { B as j } from './Ce4fD9sE.js';
let g = !1;
function k(r) {
	var n = g;
	try {
		return ((g = !1), [r(), g]);
	} finally {
		g = n;
	}
}
function re(r, n, f = !1) {
	var _;
	I && ((_ = N), y());
	var t = new j(r),
		u = f ? B : 0;
	function o(a, i) {
		if (I) {
			var d = L(_);
			if (a !== parseInt(d.substring(1))) {
				var s = D();
				(M(s), (t.anchor = s), R(!1), t.ensure(a, i), R(!0));
				return;
			}
		}
		t.ensure(a, i);
	}
	m(() => {
		var a = !1;
		(n((i, d = 0) => {
			((a = !0), o(d, i));
		}),
			a || o(-1, null));
	}, u);
}
function ae(r, n, f, _) {
	var t = !H || (f & J) !== 0,
		u = (f & z) !== 0,
		o = (f & q) !== 0,
		a = _,
		i = !0,
		d = () => (i && ((i = !1), (a = o ? Y(_) : _)), a);
	let s;
	if (u) {
		var T = W in r || X in r;
		s = U(r, n)?.set ?? (T && n in r ? (e) => (r[n] = e) : void 0);
	}
	var l,
		b = !1;
	(u ? ([l, b] = k(() => r[n])) : (l = r[n]),
		l === void 0 && _ !== void 0 && ((l = d()), s && (t && w(), s(l))));
	var v;
	if (
		(t
			? (v = () => {
					var e = r[n];
					return e === void 0 ? d() : ((i = !0), e);
				})
			: (v = () => {
					var e = r[n];
					return (e !== void 0 && (a = void 0), e === void 0 ? a : e);
				}),
		t && (f & x) === 0)
	)
		return v;
	if (s) {
		var A = r.$$legacy;
		return function (e, S) {
			return arguments.length > 0 ? ((!t || !S || A || b) && s(S ? v() : e), e) : v();
		};
	}
	var P = !1,
		c = ((f & K) !== 0 ? Q : V)(() => ((P = !1), v()));
	u && h(c);
	var O = G;
	return function (e, S) {
		if (arguments.length > 0) {
			const E = S ? h(c) : t && u ? F(e) : e;
			return ($(c, E), (P = !0), a !== void 0 && (a = E), e);
		}
		return (C && P) || (O.f & Z) !== 0 ? c.v : h(c);
	};
}
export { re as i, ae as p };
