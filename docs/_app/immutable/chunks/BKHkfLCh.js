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
	j as Y,
	O as U,
	P as x,
	Q as F,
	q as h,
	R as $,
	S as q,
	T as w,
	U as C,
	V as G,
	W as Z,
	X as j,
	l as z,
	Y as H,
	Z as J,
	v as K,
	_ as Q,
	$ as V,
	a0 as W
} from './B8weEiwe.js';
import { B as X } from './Dwjcs2lI.js';
let g = !1;
function p(r) {
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
	var i = new X(r),
		u = f ? B : 0;
	function o(a, t) {
		if (I) {
			var d = L(_);
			if (a !== parseInt(d.substring(1))) {
				var s = D();
				(M(s), (i.anchor = s), R(!1), i.ensure(a, t), R(!0));
				return;
			}
		}
		i.ensure(a, t);
	}
	m(() => {
		var a = !1;
		(n((t, d = 0) => {
			((a = !0), o(d, t));
		}),
			a || o(-1, null));
	}, u);
}
function ae(r, n, f, _) {
	var i = !z || (f & H) !== 0,
		u = (f & j) !== 0,
		o = (f & Z) !== 0,
		a = _,
		t = !0,
		d = () => (t && ((t = !1), (a = o ? Y(_) : _)), a);
	let s;
	if (u) {
		var T = V in r || W in r;
		s = U(r, n)?.set ?? (T && n in r ? (e) => (r[n] = e) : void 0);
	}
	var l,
		b = !1;
	(u ? ([l, b] = p(() => r[n])) : (l = r[n]),
		l === void 0 && _ !== void 0 && ((l = d()), s && (i && x(), s(l))));
	var v;
	if (
		(i
			? (v = () => {
					var e = r[n];
					return e === void 0 ? d() : ((t = !0), e);
				})
			: (v = () => {
					var e = r[n];
					return (e !== void 0 && (a = void 0), e === void 0 ? a : e);
				}),
		i && (f & F) === 0)
	)
		return v;
	if (s) {
		var A = r.$$legacy;
		return function (e, S) {
			return arguments.length > 0 ? ((!i || !S || A || b) && s(S ? v() : e), e) : v();
		};
	}
	var P = !1,
		c = ((f & J) !== 0 ? K : Q)(() => ((P = !1), v()));
	u && h(c);
	var O = C;
	return function (e, S) {
		if (arguments.length > 0) {
			const E = S ? h(c) : i && u ? $(e) : e;
			return (q(c, E), (P = !0), a !== void 0 && (a = E), e);
		}
		return (w && P) || (O.f & G) !== 0 ? c.v : h(c);
	};
}
export { re as i, ae as p };
