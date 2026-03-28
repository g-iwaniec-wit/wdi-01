import {
	a9 as Z,
	o as z,
	aa as ee,
	ab as W,
	k as te,
	ac as H,
	ad as A,
	f as g,
	h as v,
	U as b,
	ae as P,
	E as re,
	F as se,
	af as ie,
	ag as V,
	b as p,
	c as J,
	p as k,
	e as q,
	m as ne,
	ah as ae,
	ai as N,
	aj as D,
	ak as L,
	al as fe,
	am as oe,
	an as U,
	i as G,
	ao as he,
	d as x,
	K as F,
	ap as le,
	J as de,
	aq as w,
	G as ce,
	ar as ue,
	as as _e,
	at as pe,
	au as ge,
	av as C,
	a2 as ve,
	aw as K,
	ax as ye,
	ay as me,
	az as I,
	M as S,
	aA as be,
	aB as Ee,
	aC as Te,
	aD as we,
	x as Se,
	aE as Re,
	aF as Ae,
	A as Ne
} from './CQd7E61n.js';
import { b as De } from './CcKL1eOP.js';
function Fe(r) {
	let e = 0,
		t = W(0),
		i;
	return () => {
		Z() &&
			(z(t),
			ee(
				() => (
					e === 0 && (i = te(() => r(() => H(t)))),
					(e += 1),
					() => {
						A(() => {
							((e -= 1), e === 0 && (i?.(), (i = void 0), H(t)));
						});
					}
				)
			));
	};
}
var Oe = ce | ue;
function ke(r, e, t, i) {
	new xe(r, e, t, i);
}
class xe {
	parent;
	is_pending = !1;
	transform_error;
	#t;
	#_ = v ? g : null;
	#i;
	#h;
	#e;
	#n = null;
	#r = null;
	#s = null;
	#a = null;
	#l = 0;
	#o = 0;
	#d = !1;
	#p = new Set();
	#g = new Set();
	#f = null;
	#m = Fe(
		() => (
			(this.#f = W(this.#l)),
			() => {
				this.#f = null;
			}
		)
	);
	constructor(e, t, i, f) {
		((this.#t = e),
			(this.#i = t),
			(this.#h = (s) => {
				var n = b;
				((n.b = this), (n.f |= P), i(s));
			}),
			(this.parent = b.b),
			(this.transform_error = f ?? this.parent?.transform_error ?? ((s) => s)),
			(this.#e = re(() => {
				if (v) {
					const s = this.#_;
					se();
					const n = s.data === ie;
					if (s.data.startsWith(V)) {
						const a = JSON.parse(s.data.slice(V.length));
						this.#E(a);
					} else n ? this.#T() : this.#b();
				} else this.#v();
			}, Oe)),
			v && (this.#t = g));
	}
	#b() {
		try {
			this.#n = p(() => this.#h(this.#t));
		} catch (e) {
			this.error(e);
		}
	}
	#E(e) {
		const t = this.#i.failed;
		t &&
			(this.#s = p(() => {
				t(
					this.#t,
					() => e,
					() => () => {}
				);
			}));
	}
	#T() {
		const e = this.#i.pending;
		e &&
			((this.is_pending = !0),
			(this.#r = p(() => e(this.#t))),
			A(() => {
				var t = (this.#a = document.createDocumentFragment()),
					i = J();
				(t.append(i),
					(this.#n = this.#u(() => p(() => this.#h(i)))),
					this.#o === 0 &&
						(this.#t.before(t),
						(this.#a = null),
						k(this.#r, () => {
							this.#r = null;
						}),
						this.#c(q)));
			}));
	}
	#v() {
		try {
			if (
				((this.is_pending = this.has_pending_snippet()),
				(this.#o = 0),
				(this.#l = 0),
				(this.#n = p(() => {
					this.#h(this.#t);
				})),
				this.#o > 0)
			) {
				var e = (this.#a = document.createDocumentFragment());
				ne(this.#n, e);
				const t = this.#i.pending;
				this.#r = p(() => t(this.#t));
			} else this.#c(q);
		} catch (t) {
			this.error(t);
		}
	}
	#c(e) {
		((this.is_pending = !1), e.transfer_effects(this.#p, this.#g));
	}
	defer_effect(e) {
		ae(e, this.#p, this.#g);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#i.pending;
	}
	#u(e) {
		var t = b,
			i = U,
			f = G;
		(N(this.#e), D(this.#e), L(this.#e.ctx));
		try {
			return (fe.ensure(), e());
		} catch (s) {
			return (oe(s), null);
		} finally {
			(N(t), D(i), L(f));
		}
	}
	#y(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#y(e, t);
			return;
		}
		((this.#o += e),
			this.#o === 0 &&
				(this.#c(t),
				this.#r &&
					k(this.#r, () => {
						this.#r = null;
					}),
				this.#a && (this.#t.before(this.#a), (this.#a = null))));
	}
	update_pending_count(e, t) {
		(this.#y(e, t),
			(this.#l += e),
			!(!this.#f || this.#d) &&
				((this.#d = !0),
				A(() => {
					((this.#d = !1), this.#f && he(this.#f, this.#l));
				})));
	}
	get_effect_pending() {
		return (this.#m(), z(this.#f));
	}
	error(e) {
		var t = this.#i.onerror;
		let i = this.#i.failed;
		if (!t && !i) throw e;
		(this.#n && (x(this.#n), (this.#n = null)),
			this.#r && (x(this.#r), (this.#r = null)),
			this.#s && (x(this.#s), (this.#s = null)),
			v && (F(this.#_), le(), F(de())));
		var f = !1,
			s = !1;
		const n = () => {
				if (f) {
					pe();
					return;
				}
				((f = !0),
					s && _e(),
					this.#s !== null &&
						k(this.#s, () => {
							this.#s = null;
						}),
					this.#u(() => {
						this.#v();
					}));
			},
			c = (a) => {
				try {
					((s = !0), t?.(a, n), (s = !1));
				} catch (o) {
					w(o, this.#e && this.#e.parent);
				}
				i &&
					(this.#s = this.#u(() => {
						try {
							return p(() => {
								var o = b;
								((o.b = this),
									(o.f |= P),
									i(
										this.#t,
										() => a,
										() => n
									));
							});
						} catch (o) {
							return (w(o, this.#e.parent), null);
						}
					}));
			};
		A(() => {
			var a;
			try {
				a = this.transform_error(e);
			} catch (o) {
				w(o, this.#e && this.#e.parent);
				return;
			}
			a !== null && typeof a == 'object' && typeof a.then == 'function'
				? a.then(c, (o) => w(o, this.#e && this.#e.parent))
				: c(a);
		});
	}
}
const Ce = ['touchstart', 'touchmove'];
function Ie(r) {
	return Ce.includes(r);
}
const T = Symbol('events'),
	Q = new Set(),
	M = new Set();
function He(r, e, t) {
	(e[T] ??= {})[r] = t;
}
function Pe(r) {
	for (var e = 0; e < r.length; e++) Q.add(r[e]);
	for (var t of M) t(r);
}
let $ = null;
function j(r) {
	var e = this,
		t = e.ownerDocument,
		i = r.type,
		f = r.composedPath?.() || [],
		s = f[0] || r.target;
	$ = r;
	var n = 0,
		c = $ === r && r[T];
	if (c) {
		var a = f.indexOf(c);
		if (a !== -1 && (e === document || e === window)) {
			r[T] = e;
			return;
		}
		var o = f.indexOf(e);
		if (o === -1) return;
		a <= o && (n = a);
	}
	if (((s = f[n] || r.target), s !== e)) {
		ge(r, 'currentTarget', {
			configurable: !0,
			get() {
				return s || t;
			}
		});
		var y = U,
			E = b;
		(D(null), N(null));
		try {
			for (var _, l = []; s !== null; ) {
				var h = s.assignedSlot || s.parentNode || s.host || null;
				try {
					var d = s[T]?.[i];
					d != null && (!s.disabled || r.target === s) && d.call(s, r);
				} catch (u) {
					_ ? l.push(u) : (_ = u);
				}
				if (r.cancelBubble || h === e || h === null) break;
				s = h;
			}
			if (_) {
				for (let u of l)
					queueMicrotask(() => {
						throw u;
					});
				throw _;
			}
		} finally {
			((r[T] = e), delete r.currentTarget, D(y), N(E));
		}
	}
}
function Ve(r, e) {
	var t = e == null ? '' : typeof e == 'object' ? `${e}` : e;
	t !== (r.__t ??= r.nodeValue) && ((r.__t = t), (r.nodeValue = `${t}`));
}
function Me(r, e) {
	return X(r, e);
}
function qe(r, e) {
	(C(), (e.intro = e.intro ?? !1));
	const t = e.target,
		i = v,
		f = g;
	try {
		for (var s = ve(t); s && (s.nodeType !== K || s.data !== ye); ) s = me(s);
		if (!s) throw I;
		(S(!0), F(s));
		const n = X(r, { ...e, anchor: s });
		return (S(!1), n);
	} catch (n) {
		if (
			n instanceof Error &&
			n.message
				.split(
					`
`
				)
				.some((c) => c.startsWith('https://svelte.dev/e/'))
		)
			throw n;
		return (
			n !== I && console.warn('Failed to hydrate: ', n),
			e.recover === !1 && be(),
			C(),
			Ee(t),
			S(!1),
			Me(r, e)
		);
	} finally {
		(S(i), F(f));
	}
}
const R = new Map();
function X(
	r,
	{ target: e, anchor: t, props: i = {}, events: f, context: s, intro: n = !0, transformError: c }
) {
	C();
	var a = void 0,
		o = Te(() => {
			var y = t ?? e.appendChild(J());
			ke(
				y,
				{ pending: () => {} },
				(l) => {
					Se({});
					var h = G;
					if (
						(s && (h.c = s),
						f && (i.$$events = f),
						v && De(l, null),
						(a = r(l, i) || {}),
						v && ((b.nodes.end = g), g === null || g.nodeType !== K || g.data !== Re))
					)
						throw (Ae(), I);
					Ne();
				},
				c
			);
			var E = new Set(),
				_ = (l) => {
					for (var h = 0; h < l.length; h++) {
						var d = l[h];
						if (!E.has(d)) {
							E.add(d);
							var u = Ie(d);
							for (const O of [e, document]) {
								var m = R.get(O);
								m === void 0 && ((m = new Map()), R.set(O, m));
								var B = m.get(d);
								B === void 0
									? (O.addEventListener(d, j, { passive: u }), m.set(d, 1))
									: m.set(d, B + 1);
							}
						}
					}
				};
			return (
				_(we(Q)),
				M.add(_),
				() => {
					for (var l of E)
						for (const u of [e, document]) {
							var h = R.get(u),
								d = h.get(l);
							--d == 0
								? (u.removeEventListener(l, j), h.delete(l), h.size === 0 && R.delete(u))
								: h.set(l, d);
						}
					(M.delete(_), y !== t && y.parentNode?.removeChild(y));
				}
			);
		});
	return (Y.set(a, o), a);
}
let Y = new WeakMap();
function Le(r, e) {
	const t = Y.get(r);
	return t ? (Y.delete(r), t(e)) : Promise.resolve();
}
export { He as a, Pe as d, qe as h, Me as m, Ve as s, Le as u };
