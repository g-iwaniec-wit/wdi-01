var qt = Array.isArray,
	Ut = Array.prototype.indexOf,
	ie = Array.prototype.includes,
	Mn = Array.from,
	Fn = Object.defineProperty,
	de = Object.getOwnPropertyDescriptor,
	Vt = Object.getOwnPropertyDescriptors,
	Bt = Object.prototype,
	zt = Array.prototype,
	it = Object.getPrototypeOf,
	Ze = Object.isExtensible;
const Gt = () => {};
function jn(e) {
	return e();
}
function Kt(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function at() {
	var e,
		t,
		n = new Promise((r, s) => {
			((e = r), (t = s));
		});
	return { promise: n, resolve: e, reject: t };
}
const E = 2,
	ae = 4,
	we = 8,
	ft = 1 << 24,
	G = 16,
	M = 32,
	Q = 64,
	$t = 128,
	O = 512,
	g = 1024,
	T = 2048,
	F = 4096,
	C = 8192,
	P = 16384,
	se = 32768,
	We = 1 << 25,
	Ae = 65536,
	Je = 1 << 17,
	Xt = 1 << 18,
	ye = 1 << 19,
	ut = 1 << 20,
	Ln = 1 << 25,
	ee = 65536,
	Pe = 1 << 21,
	He = 1 << 22,
	U = 1 << 23,
	W = Symbol('$state'),
	Yn = Symbol('legacy props'),
	Hn = Symbol(''),
	Y = new (class extends Error {
		name = 'StaleReactionError';
		message = 'The reaction that called `getAbortSignal()` was re-run or destroyed';
	})(),
	Un = !!globalThis.document?.contentType && globalThis.document.contentType.includes('xml'),
	ke = 3,
	ot = 8;
function Zt() {
	throw new Error('https://svelte.dev/e/async_derived_orphan');
}
function Vn(e, t, n) {
	throw new Error('https://svelte.dev/e/each_key_duplicate');
}
function Wt(e) {
	throw new Error('https://svelte.dev/e/effect_in_teardown');
}
function Jt() {
	throw new Error('https://svelte.dev/e/effect_in_unowned_derived');
}
function Qt(e) {
	throw new Error('https://svelte.dev/e/effect_orphan');
}
function en() {
	throw new Error('https://svelte.dev/e/effect_update_depth_exceeded');
}
function Bn() {
	throw new Error('https://svelte.dev/e/hydration_failed');
}
function zn(e) {
	throw new Error('https://svelte.dev/e/props_invalid_value');
}
function tn() {
	throw new Error('https://svelte.dev/e/state_descriptors_fixed');
}
function nn() {
	throw new Error('https://svelte.dev/e/state_prototype_fixed');
}
function rn() {
	throw new Error('https://svelte.dev/e/state_unsafe_mutation');
}
function Gn() {
	throw new Error('https://svelte.dev/e/svelte_boundary_reset_onerror');
}
const Kn = 1,
	$n = 2,
	Xn = 4,
	Zn = 8,
	Wn = 16,
	Jn = 1,
	Qn = 2,
	er = 4,
	tr = 8,
	nr = 16,
	rr = 1,
	sr = 2,
	sn = '[',
	ln = '[!',
	lr = '[?',
	an = ']',
	qe = {},
	m = Symbol(),
	fn = 'http://www.w3.org/1999/xhtml';
function Ue(e) {
	console.warn('https://svelte.dev/e/hydration_mismatch');
}
function ir() {
	console.warn('https://svelte.dev/e/select_multiple_invalid_value');
}
function ar() {
	console.warn('https://svelte.dev/e/svelte_boundary_reset_noop');
}
let te = !1;
function fr(e) {
	te = e;
}
let S;
function fe(e) {
	if (e === null) throw (Ue(), qe);
	return (S = e);
}
function ur() {
	return fe(K(S));
}
function or(e) {
	if (te) {
		if (K(S) !== null) throw (Ue(), qe);
		S = e;
	}
}
function cr(e = 1) {
	if (te) {
		for (var t = e, n = S; t--; ) n = K(n);
		S = n;
	}
}
function _r(e = !0) {
	for (var t = 0, n = S; ; ) {
		if (n.nodeType === ot) {
			var r = n.data;
			if (r === an) {
				if (t === 0) return n;
				t -= 1;
			} else (r === sn || r === ln || (r[0] === '[' && !isNaN(Number(r.slice(1))))) && (t += 1);
		}
		var s = K(n);
		(e && n.remove(), (n = s));
	}
}
function vr(e) {
	if (!e || e.nodeType !== ot) throw (Ue(), qe);
	return e.data;
}
function ct(e) {
	return e === this.v;
}
function un(e, t) {
	return e != e
		? t == t
		: e !== t || (e !== null && typeof e == 'object') || typeof e == 'function';
}
function _t(e) {
	return !un(e, this.v);
}
let Ne = !1;
function dr() {
	Ne = !0;
}
let b = null;
function Se(e) {
	b = e;
}
function hr(e, t = !1, n) {
	b = {
		p: b,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: d,
		l: Ne && !t ? { s: null, u: null, $: [] } : null
	};
}
function pr(e) {
	var t = b,
		n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) kt(r);
	}
	return ((t.i = !0), (b = t.p), {});
}
function ge() {
	return !Ne || (b !== null && b.l === null);
}
let X = [];
function vt() {
	var e = X;
	((X = []), Kt(e));
}
function Qe(e) {
	if (X.length === 0 && !he) {
		var t = X;
		queueMicrotask(() => {
			t === X && vt();
		});
	}
	X.push(e);
}
function on() {
	for (; X.length > 0; ) vt();
}
function cn(e) {
	var t = d;
	if (t === null) return ((v.f |= U), e);
	if ((t.f & se) === 0 && (t.f & ae) === 0) throw e;
	Re(e, t);
}
function Re(e, t) {
	for (; t !== null; ) {
		if ((t.f & $t) !== 0) {
			if ((t.f & se) === 0) throw e;
			try {
				t.b.error(e);
				return;
			} catch (n) {
				e = n;
			}
		}
		t = t.parent;
	}
	throw e;
}
const _n = -7169;
function y(e, t) {
	e.f = (e.f & _n) | t;
}
function Ve(e) {
	(e.f & O) !== 0 || e.deps === null ? y(e, g) : y(e, F);
}
function dt(e) {
	if (e !== null)
		for (const t of e) (t.f & E) === 0 || (t.f & ee) === 0 || ((t.f ^= ee), dt(t.deps));
}
function vn(e, t, n) {
	((e.f & T) !== 0 ? t.add(e) : (e.f & F) !== 0 && n.add(e), dt(e.deps), y(e, g));
}
const H = new Set();
let w = null,
	I = null,
	Me = null,
	he = !1,
	De = !1,
	le = null,
	be = null;
var et = 0;
let dn = 1;
class B {
	id = dn++;
	current = new Map();
	previous = new Map();
	#a = new Set();
	#f = new Set();
	#r = new Map();
	#t = new Map();
	#_ = null;
	#e = [];
	#l = new Set();
	#s = new Set();
	#n = new Map();
	is_fork = !1;
	#u = !1;
	#i = new Set();
	#o() {
		return this.is_fork || this.#t.size > 0;
	}
	#h() {
		for (const r of this.#i)
			for (const s of r.#t.keys()) {
				for (var t = !1, n = s; n.parent !== null; ) {
					if (this.#n.has(n)) {
						t = !0;
						break;
					}
					n = n.parent;
				}
				if (!t) return !0;
			}
		return !1;
	}
	skip_effect(t) {
		this.#n.has(t) || this.#n.set(t, { d: [], m: [] });
	}
	unskip_effect(t) {
		var n = this.#n.get(t);
		if (n) {
			this.#n.delete(t);
			for (var r of n.d) (y(r, T), this.schedule(r));
			for (r of n.m) (y(r, F), this.schedule(r));
		}
	}
	#c() {
		if ((et++ > 1e3 && (H.delete(this), pn()), !this.#o())) {
			for (const i of this.#l) (this.#s.delete(i), y(i, T), this.schedule(i));
			for (const i of this.#s) (y(i, F), this.schedule(i));
		}
		const t = this.#e;
		((this.#e = []), this.apply());
		var n = (le = []),
			r = [],
			s = (be = []);
		for (const i of t)
			try {
				this.#v(i, n, r);
			} catch (f) {
				throw (yt(i), f);
			}
		if (((w = null), s.length > 0)) {
			var l = B.ensure();
			for (const i of s) l.schedule(i);
		}
		if (((le = null), (be = null), this.#o() || this.#h())) {
			(this.#d(r), this.#d(n));
			for (const [i, f] of this.#n) wt(i, f);
		} else {
			(this.#r.size === 0 && H.delete(this), this.#l.clear(), this.#s.clear());
			for (const i of this.#a) i(this);
			(this.#a.clear(), tt(r), tt(n), this.#_?.resolve());
		}
		var u = w;
		if (this.#e.length > 0) {
			const i = (u ??= this);
			i.#e.push(...this.#e.filter((f) => !i.#e.includes(f)));
		}
		(u !== null && (H.add(u), u.#c()), H.has(this) || this.#p());
	}
	#v(t, n, r) {
		t.f ^= g;
		for (var s = t.first; s !== null; ) {
			var l = s.f,
				u = (l & (M | Q)) !== 0,
				i = u && (l & g) !== 0,
				f = i || (l & C) !== 0 || this.#n.has(s);
			if (!f && s.fn !== null) {
				u
					? (s.f ^= g)
					: (l & ae) !== 0
						? n.push(s)
						: Ee(s) && ((l & G) !== 0 && this.#s.add(s), oe(s));
				var a = s.first;
				if (a !== null) {
					s = a;
					continue;
				}
			}
			for (; s !== null; ) {
				var o = s.next;
				if (o !== null) {
					s = o;
					break;
				}
				s = s.parent;
			}
		}
	}
	#d(t) {
		for (var n = 0; n < t.length; n += 1) vn(t[n], this.#l, this.#s);
	}
	capture(t, n, r = !1) {
		(n !== m && !this.previous.has(t) && this.previous.set(t, n),
			(t.f & U) === 0 && (this.current.set(t, [t.v, r]), I?.set(t, t.v)));
	}
	activate() {
		w = this;
	}
	deactivate() {
		((w = null), (I = null));
	}
	flush() {
		try {
			((De = !0), (w = this), this.#c());
		} finally {
			((et = 0),
				(Me = null),
				(le = null),
				(be = null),
				(De = !1),
				(w = null),
				(I = null),
				V.clear());
		}
	}
	discard() {
		for (const t of this.#f) t(this);
		(this.#f.clear(), H.delete(this));
	}
	#p() {
		for (const a of H) {
			var t = a.id < this.id,
				n = [];
			for (const [o, [_, c]] of this.current) {
				if (a.current.has(o)) {
					var r = a.current.get(o)[0];
					if (t && _ !== r) a.current.set(o, [_, c]);
					else continue;
				}
				n.push(o);
			}
			var s = [...a.current.keys()].filter((o) => !this.current.has(o));
			if (s.length === 0) t && a.discard();
			else if (n.length > 0) {
				a.activate();
				var l = new Set(),
					u = new Map();
				for (var i of n) ht(i, s, l, u);
				if (a.#e.length > 0) {
					a.apply();
					for (var f of a.#e) a.#v(f, [], []);
					a.#e = [];
				}
				a.deactivate();
			}
		}
		for (const a of H)
			a.#i.has(this) && (a.#i.delete(this), a.#i.size === 0 && !a.#o() && (a.activate(), a.#c()));
	}
	increment(t, n) {
		let r = this.#r.get(n) ?? 0;
		if ((this.#r.set(n, r + 1), t)) {
			let s = this.#t.get(n) ?? 0;
			this.#t.set(n, s + 1);
		}
	}
	decrement(t, n, r) {
		let s = this.#r.get(n) ?? 0;
		if ((s === 1 ? this.#r.delete(n) : this.#r.set(n, s - 1), t)) {
			let l = this.#t.get(n) ?? 0;
			l === 1 ? this.#t.delete(n) : this.#t.set(n, l - 1);
		}
		this.#u ||
			r ||
			((this.#u = !0),
			Qe(() => {
				((this.#u = !1), this.flush());
			}));
	}
	transfer_effects(t, n) {
		for (const r of t) this.#l.add(r);
		for (const r of n) this.#s.add(r);
		(t.clear(), n.clear());
	}
	oncommit(t) {
		this.#a.add(t);
	}
	ondiscard(t) {
		this.#f.add(t);
	}
	settled() {
		return (this.#_ ??= at()).promise;
	}
	static ensure() {
		if (w === null) {
			const t = (w = new B());
			De ||
				(H.add(w),
				he ||
					Qe(() => {
						w === t && t.flush();
					}));
		}
		return w;
	}
	apply() {
		{
			I = null;
			return;
		}
	}
	schedule(t) {
		if (((Me = t), t.b?.is_pending && (t.f & (ae | we | ft)) !== 0 && (t.f & se) === 0)) {
			t.b.defer_effect(t);
			return;
		}
		for (var n = t; n.parent !== null; ) {
			n = n.parent;
			var r = n.f;
			if (le !== null && n === d && (v === null || (v.f & E) === 0)) return;
			if ((r & (Q | M)) !== 0) {
				if ((r & g) === 0) return;
				n.f ^= g;
			}
		}
		this.#e.push(n);
	}
}
function hn(e) {
	var t = he;
	he = !0;
	try {
		for (var n; ; ) {
			if ((on(), w === null)) return n;
			w.flush();
		}
	} finally {
		he = t;
	}
}
function pn() {
	try {
		en();
	} catch (e) {
		Re(e, Me);
	}
}
let L = null;
function tt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t; ) {
			var r = e[n++];
			if (
				(r.f & (P | C)) === 0 &&
				Ee(r) &&
				((L = new Set()),
				oe(r),
				r.deps === null &&
					r.first === null &&
					r.nodes === null &&
					r.teardown === null &&
					r.ac === null &&
					It(r),
				L?.size > 0)
			) {
				V.clear();
				for (const s of L) {
					if ((s.f & (P | C)) !== 0) continue;
					const l = [s];
					let u = s.parent;
					for (; u !== null; ) (L.has(u) && (L.delete(u), l.push(u)), (u = u.parent));
					for (let i = l.length - 1; i >= 0; i--) {
						const f = l[i];
						(f.f & (P | C)) === 0 && oe(f);
					}
				}
				L.clear();
			}
		}
		L = null;
	}
}
function ht(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null))
		for (const s of e.reactions) {
			const l = s.f;
			(l & E) !== 0
				? ht(s, t, n, r)
				: (l & (He | G)) !== 0 && (l & T) === 0 && pt(s, t, r) && (y(s, T), Be(s));
		}
}
function pt(e, t, n) {
	const r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null)
		for (const s of e.deps) {
			if (ie.call(t, s)) return !0;
			if ((s.f & E) !== 0 && pt(s, t, n)) return (n.set(s, !0), !0);
		}
	return (n.set(e, !1), !1);
}
function Be(e) {
	w.schedule(e);
}
function wt(e, t) {
	if (!((e.f & M) !== 0 && (e.f & g) !== 0)) {
		((e.f & T) !== 0 ? t.d.push(e) : (e.f & F) !== 0 && t.m.push(e), y(e, g));
		for (var n = e.first; n !== null; ) (wt(n, t), (n = n.next));
	}
}
function yt(e) {
	y(e, g);
	for (var t = e.first; t !== null; ) (yt(t), (t = t.next));
}
function wn(e, t, n, r) {
	const s = ge() ? ze : En;
	var l = e.filter((c) => !c.settled);
	if (n.length === 0 && l.length === 0) {
		r(t.map(s));
		return;
	}
	var u = d,
		i = yn(),
		f = l.length === 1 ? l[0].promise : l.length > 1 ? Promise.all(l.map((c) => c.promise)) : null;
	function a(c) {
		i();
		try {
			r(c);
		} catch (p) {
			(u.f & P) === 0 && Re(p, u);
		}
		xe();
	}
	if (n.length === 0) {
		f.then(() => a(t.map(s)));
		return;
	}
	var o = gt();
	function _() {
		Promise.all(n.map((c) => gn(c)))
			.then((c) => a([...t.map(s), ...c]))
			.catch((c) => Re(c, u))
			.finally(() => o());
	}
	f
		? f.then(() => {
				(i(), _(), xe());
			})
		: _();
}
function yn() {
	var e = d,
		t = v,
		n = b,
		r = w;
	return function (l = !0) {
		(ue(e), z(t), Se(n), l && (e.f & P) === 0 && (r?.activate(), r?.apply()));
	};
}
function xe(e = !0) {
	(ue(null), z(null), Se(null), e && w?.deactivate());
}
function gt() {
	var e = d,
		t = e.b,
		n = w,
		r = t.is_rendered();
	return (
		t.update_pending_count(1, n),
		n.increment(r, e),
		(s = !1) => {
			(t.update_pending_count(-1, n), n.decrement(r, e, s));
		}
	);
}
function ze(e) {
	var t = E | T,
		n = v !== null && (v.f & E) !== 0 ? v : null;
	return (
		d !== null && (d.f |= ye),
		{
			ctx: b,
			deps: null,
			effects: null,
			equals: ct,
			f: t,
			fn: e,
			reactions: null,
			rv: 0,
			v: m,
			wv: 0,
			parent: n ?? d,
			ac: null
		}
	);
}
function gn(e, t, n) {
	let r = d;
	r === null && Zt();
	var s = void 0,
		l = Ke(m),
		u = !v,
		i = new Map();
	return (
		kn(() => {
			var f = d,
				a = at();
			s = a.promise;
			try {
				Promise.resolve(e()).then(a.resolve, a.reject).finally(xe);
			} catch (p) {
				(a.reject(p), xe());
			}
			var o = w;
			if (u) {
				if ((f.f & se) !== 0) var _ = gt();
				if (r.b.is_rendered()) (i.get(o)?.reject(Y), i.delete(o));
				else {
					for (const p of i.values()) p.reject(Y);
					i.clear();
				}
				i.set(o, a);
			}
			const c = (p, h = void 0) => {
				if (_) {
					var N = h === Y;
					_(N);
				}
				if (!(h === Y || (f.f & P) !== 0)) {
					if ((o.activate(), h)) ((l.f |= U), je(l, h));
					else {
						((l.f & U) !== 0 && (l.f ^= U), je(l, p));
						for (const [ce, me] of i) {
							if ((i.delete(ce), ce === o)) break;
							me.reject(Y);
						}
					}
					o.deactivate();
				}
			};
			a.promise.then(c, (p) => c(null, p || 'unknown'));
		}),
		On(() => {
			for (const f of i.values()) f.reject(Y);
		}),
		new Promise((f) => {
			function a(o) {
				function _() {
					o === s ? f(l) : a(s);
				}
				o.then(_, _);
			}
			a(s);
		})
	);
}
function wr(e) {
	const t = ze(e);
	return (Pt(t), t);
}
function En(e) {
	const t = ze(e);
	return ((t.equals = _t), t);
}
function mn(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) ne(t[n]);
	}
}
function bn(e) {
	for (var t = e.parent; t !== null; ) {
		if ((t.f & E) === 0) return (t.f & P) === 0 ? t : null;
		t = t.parent;
	}
	return null;
}
function Ge(e) {
	var t,
		n = d;
	ue(bn(e));
	try {
		((e.f &= ~ee), mn(e), (t = Lt(e)));
	} finally {
		ue(n);
	}
	return t;
}
function Et(e) {
	var t = e.v,
		n = Ge(e);
	if (
		!e.equals(n) &&
		((e.wv = Ft()),
		(!w?.is_fork || e.deps === null) && ((e.v = n), w?.capture(e, t, !0), e.deps === null))
	) {
		y(e, g);
		return;
	}
	re || (I !== null ? (Ot() || w?.is_fork) && I.set(e, n) : Ve(e));
}
function Tn(e) {
	if (e.effects !== null)
		for (const t of e.effects)
			(t.teardown || t.ac) &&
				(t.teardown?.(), t.ac?.abort(Y), (t.teardown = Gt), (t.ac = null), pe(t, 0), Xe(t));
}
function mt(e) {
	if (e.effects !== null) for (const t of e.effects) t.teardown && oe(t);
}
let Fe = new Set();
const V = new Map();
let bt = !1;
function Ke(e, t) {
	var n = { f: 0, v: e, reactions: null, equals: ct, rv: 0, wv: 0 };
	return n;
}
function q(e, t) {
	const n = Ke(e);
	return (Pt(n), n);
}
function yr(e, t = !1, n = !0) {
	const r = Ke(e);
	return (t || (r.equals = _t), Ne && n && b !== null && b.l !== null && (b.l.s ??= []).push(r), r);
}
function $(e, t, n = !1) {
	v !== null &&
		(!D || (v.f & Je) !== 0) &&
		ge() &&
		(v.f & (E | G | He | Je)) !== 0 &&
		(k === null || !ie.call(k, e)) &&
		rn();
	let r = n ? _e(t) : t;
	return je(e, r, be);
}
function je(e, t, n = null) {
	if (!e.equals(t)) {
		var r = e.v;
		(re ? V.set(e, t) : V.set(e, r), (e.v = t));
		var s = B.ensure();
		if ((s.capture(e, r), (e.f & E) !== 0)) {
			const l = e;
			((e.f & T) !== 0 && Ge(l), I === null && Ve(l));
		}
		((e.wv = Ft()),
			Tt(e, T, n),
			ge() &&
				d !== null &&
				(d.f & g) !== 0 &&
				(d.f & (M | Q)) === 0 &&
				(x === null ? Cn([e]) : x.push(e)),
			!s.is_fork && Fe.size > 0 && !bt && An());
	}
	return t;
}
function An() {
	bt = !1;
	for (const e of Fe) ((e.f & g) !== 0 && y(e, F), Ee(e) && oe(e));
	Fe.clear();
}
function Ce(e) {
	$(e, e.v + 1);
}
function Tt(e, t, n) {
	var r = e.reactions;
	if (r !== null)
		for (var s = ge(), l = r.length, u = 0; u < l; u++) {
			var i = r[u],
				f = i.f;
			if (!(!s && i === d)) {
				var a = (f & T) === 0;
				if ((a && y(i, t), (f & E) !== 0)) {
					var o = i;
					(I?.delete(o), (f & ee) === 0 && (f & O && (i.f |= ee), Tt(o, F, n)));
				} else if (a) {
					var _ = i;
					((f & G) !== 0 && L !== null && L.add(_), n !== null ? n.push(_) : Be(_));
				}
			}
		}
}
function _e(e) {
	if (typeof e != 'object' || e === null || W in e) return e;
	const t = it(e);
	if (t !== Bt && t !== zt) return e;
	var n = new Map(),
		r = qt(e),
		s = q(0),
		l = J,
		u = (i) => {
			if (J === l) return i();
			var f = v,
				a = J;
			(z(null), lt(l));
			var o = i();
			return (z(f), lt(a), o);
		};
	return (
		r && n.set('length', q(e.length)),
		new Proxy(e, {
			defineProperty(i, f, a) {
				(!('value' in a) || a.configurable === !1 || a.enumerable === !1 || a.writable === !1) &&
					tn();
				var o = n.get(f);
				return (
					o === void 0
						? u(() => {
								var _ = q(a.value);
								return (n.set(f, _), _);
							})
						: $(o, a.value, !0),
					!0
				);
			},
			deleteProperty(i, f) {
				var a = n.get(f);
				if (a === void 0) {
					if (f in i) {
						const o = u(() => q(m));
						(n.set(f, o), Ce(s));
					}
				} else ($(a, m), Ce(s));
				return !0;
			},
			get(i, f, a) {
				if (f === W) return e;
				var o = n.get(f),
					_ = f in i;
				if (
					(o === void 0 &&
						(!_ || de(i, f)?.writable) &&
						((o = u(() => {
							var p = _e(_ ? i[f] : m),
								h = q(p);
							return h;
						})),
						n.set(f, o)),
					o !== void 0)
				) {
					var c = ve(o);
					return c === m ? void 0 : c;
				}
				return Reflect.get(i, f, a);
			},
			getOwnPropertyDescriptor(i, f) {
				var a = Reflect.getOwnPropertyDescriptor(i, f);
				if (a && 'value' in a) {
					var o = n.get(f);
					o && (a.value = ve(o));
				} else if (a === void 0) {
					var _ = n.get(f),
						c = _?.v;
					if (_ !== void 0 && c !== m)
						return { enumerable: !0, configurable: !0, value: c, writable: !0 };
				}
				return a;
			},
			has(i, f) {
				if (f === W) return !0;
				var a = n.get(f),
					o = (a !== void 0 && a.v !== m) || Reflect.has(i, f);
				if (a !== void 0 || (d !== null && (!o || de(i, f)?.writable))) {
					a === void 0 &&
						((a = u(() => {
							var c = o ? _e(i[f]) : m,
								p = q(c);
							return p;
						})),
						n.set(f, a));
					var _ = ve(a);
					if (_ === m) return !1;
				}
				return o;
			},
			set(i, f, a, o) {
				var _ = n.get(f),
					c = f in i;
				if (r && f === 'length')
					for (var p = a; p < _.v; p += 1) {
						var h = n.get(p + '');
						h !== void 0 ? $(h, m) : p in i && ((h = u(() => q(m))), n.set(p + '', h));
					}
				if (_ === void 0)
					(!c || de(i, f)?.writable) && ((_ = u(() => q(void 0))), $(_, _e(a)), n.set(f, _));
				else {
					c = _.v !== m;
					var N = u(() => _e(a));
					$(_, N);
				}
				var ce = Reflect.getOwnPropertyDescriptor(i, f);
				if ((ce?.set && ce.set.call(o, a), !c)) {
					if (r && typeof f == 'string') {
						var me = n.get('length'),
							Ie = Number(f);
						Number.isInteger(Ie) && Ie >= me.v && $(me, Ie + 1);
					}
					Ce(s);
				}
				return !0;
			},
			ownKeys(i) {
				ve(s);
				var f = Reflect.ownKeys(i).filter((_) => {
					var c = n.get(_);
					return c === void 0 || c.v !== m;
				});
				for (var [a, o] of n) o.v !== m && !(a in i) && f.push(a);
				return f;
			},
			setPrototypeOf() {
				nn();
			}
		})
	);
}
function nt(e) {
	try {
		if (e !== null && typeof e == 'object' && W in e) return e[W];
	} catch {}
	return e;
}
function gr(e, t) {
	return Object.is(nt(e), nt(t));
}
var rt, Sn, Rn, At, St;
function Er() {
	if (rt === void 0) {
		((rt = window), (Sn = document), (Rn = /Firefox/.test(navigator.userAgent)));
		var e = Element.prototype,
			t = Node.prototype,
			n = Text.prototype;
		((At = de(t, 'firstChild').get),
			(St = de(t, 'nextSibling').get),
			Ze(e) &&
				((e.__click = void 0),
				(e.__className = void 0),
				(e.__attributes = null),
				(e.__style = void 0),
				(e.__e = void 0)),
			Ze(n) && (n.__t = void 0));
	}
}
function Oe(e = '') {
	return document.createTextNode(e);
}
function Le(e) {
	return At.call(e);
}
function K(e) {
	return St.call(e);
}
function mr(e, t) {
	if (!te) return Le(e);
	var n = Le(S);
	if (n === null) n = S.appendChild(Oe());
	else if (t && n.nodeType !== ke) {
		var r = Oe();
		return (n?.before(r), fe(r), r);
	}
	return (t && $e(n), fe(n), n);
}
function br(e, t = !1) {
	if (!te) {
		var n = Le(e);
		return n instanceof Comment && n.data === '' ? K(n) : n;
	}
	if (t) {
		if (S?.nodeType !== ke) {
			var r = Oe();
			return (S?.before(r), fe(r), r);
		}
		$e(S);
	}
	return S;
}
function Tr(e, t = 1, n = !1) {
	let r = te ? S : e;
	for (var s; t--; ) ((s = r), (r = K(r)));
	if (!te) return r;
	if (n) {
		if (r?.nodeType !== ke) {
			var l = Oe();
			return (r === null ? s?.after(l) : r.before(l), fe(l), l);
		}
		$e(r);
	}
	return (fe(r), r);
}
function Ar(e) {
	e.textContent = '';
}
function Sr() {
	return !1;
}
function Rr(e, t, n) {
	return document.createElementNS(fn, e, void 0);
}
function $e(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === ke; )
		(t.remove(), (e.nodeValue += t.nodeValue), (t = e.nextSibling));
}
function Rt(e) {
	var t = v,
		n = d;
	(z(null), ue(null));
	try {
		return e();
	} finally {
		(z(t), ue(n));
	}
}
function xt(e) {
	(d === null && (v === null && Qt(), Jt()), re && Wt());
}
function xn(e, t) {
	var n = t.last;
	n === null ? (t.last = t.first = e) : ((n.next = e), (e.prev = n), (t.last = e));
}
function j(e, t) {
	var n = d;
	n !== null && (n.f & C) !== 0 && (e |= C);
	var r = {
			ctx: b,
			deps: null,
			nodes: null,
			f: e | T | O,
			first: null,
			fn: t,
			last: null,
			next: null,
			parent: n,
			b: n && n.b,
			prev: null,
			teardown: null,
			wv: 0,
			ac: null
		},
		s = r;
	if ((e & ae) !== 0) le !== null ? le.push(r) : B.ensure().schedule(r);
	else if (t !== null) {
		try {
			oe(r);
		} catch (u) {
			throw (ne(r), u);
		}
		s.deps === null &&
			s.teardown === null &&
			s.nodes === null &&
			s.first === s.last &&
			(s.f & ye) === 0 &&
			((s = s.first), (e & G) !== 0 && (e & Ae) !== 0 && s !== null && (s.f |= Ae));
	}
	if (
		s !== null &&
		((s.parent = n), n !== null && xn(s, n), v !== null && (v.f & E) !== 0 && (e & Q) === 0)
	) {
		var l = v;
		(l.effects ??= []).push(s);
	}
	return r;
}
function Ot() {
	return v !== null && !D;
}
function On(e) {
	const t = j(we, null);
	return (y(t, g), (t.teardown = e), t);
}
function xr(e) {
	xt();
	var t = d.f,
		n = !v && (t & M) !== 0 && (t & se) === 0;
	if (n) {
		var r = b;
		(r.e ??= []).push(e);
	} else return kt(e);
}
function kt(e) {
	return j(ae | ut, e);
}
function Or(e) {
	return (xt(), j(we | ut, e));
}
function kr(e) {
	B.ensure();
	const t = j(Q | ye, e);
	return (n = {}) =>
		new Promise((r) => {
			n.outro
				? Dn(t, () => {
						(ne(t), r(void 0));
					})
				: (ne(t), r(void 0));
		});
}
function Nr(e) {
	return j(ae, e);
}
function kn(e) {
	return j(He | ye, e);
}
function Ir(e, t = 0) {
	return j(we | t, e);
}
function Dr(e, t = [], n = [], r = []) {
	wn(r, t, n, (s) => {
		j(we, () => e(...s.map(ve)));
	});
}
function Cr(e, t = 0) {
	var n = j(G | t, e);
	return n;
}
function Pr(e) {
	return j(M | ye, e);
}
function Nt(e) {
	var t = e.teardown;
	if (t !== null) {
		const n = re,
			r = v;
		(st(!0), z(null));
		try {
			t.call(null);
		} finally {
			(st(n), z(r));
		}
	}
}
function Xe(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null; ) {
		const s = n.ac;
		s !== null &&
			Rt(() => {
				s.abort(Y);
			});
		var r = n.next;
		((n.f & Q) !== 0 ? (n.parent = null) : ne(n, t), (n = r));
	}
}
function Nn(e) {
	for (var t = e.first; t !== null; ) {
		var n = t.next;
		((t.f & M) === 0 && ne(t), (t = n));
	}
}
function ne(e, t = !0) {
	var n = !1;
	((t || (e.f & Xt) !== 0) &&
		e.nodes !== null &&
		e.nodes.end !== null &&
		(In(e.nodes.start, e.nodes.end), (n = !0)),
		y(e, We),
		Xe(e, t && !n),
		pe(e, 0));
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (const l of r) l.stop();
	(Nt(e), (e.f ^= We), (e.f |= P));
	var s = e.parent;
	(s !== null && s.first !== null && It(e),
		(e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null));
}
function In(e, t) {
	for (; e !== null; ) {
		var n = e === t ? null : K(e);
		(e.remove(), (e = n));
	}
}
function It(e) {
	var t = e.parent,
		n = e.prev,
		r = e.next;
	(n !== null && (n.next = r),
		r !== null && (r.prev = n),
		t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n)));
}
function Dn(e, t, n = !0) {
	var r = [];
	Dt(e, r, !0);
	var s = () => {
			(n && ne(e), t && t());
		},
		l = r.length;
	if (l > 0) {
		var u = () => --l || s();
		for (var i of r) i.out(u);
	} else s();
}
function Dt(e, t, n) {
	if ((e.f & C) === 0) {
		e.f ^= C;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (const i of r) (i.is_global || n) && t.push(i);
		for (var s = e.first; s !== null; ) {
			var l = s.next,
				u = (s.f & Ae) !== 0 || ((s.f & M) !== 0 && (e.f & G) !== 0);
			(Dt(s, t, u ? n : !1), (s = l));
		}
	}
}
function Mr(e) {
	Ct(e, !0);
}
function Ct(e, t) {
	if ((e.f & C) !== 0) {
		((e.f ^= C), (e.f & g) === 0 && (y(e, T), B.ensure().schedule(e)));
		for (var n = e.first; n !== null; ) {
			var r = n.next,
				s = (n.f & Ae) !== 0 || (n.f & M) !== 0;
			(Ct(n, s ? t : !1), (n = r));
		}
		var l = e.nodes && e.nodes.t;
		if (l !== null) for (const u of l) (u.is_global || t) && u.in();
	}
}
function Fr(e, t) {
	if (e.nodes)
		for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
			var s = n === r ? null : K(n);
			(t.append(n), (n = s));
		}
}
let Te = !1,
	re = !1;
function st(e) {
	re = e;
}
let v = null,
	D = !1;
function z(e) {
	v = e;
}
let d = null;
function ue(e) {
	d = e;
}
let k = null;
function Pt(e) {
	v !== null && (k === null ? (k = [e]) : k.push(e));
}
let A = null,
	R = 0,
	x = null;
function Cn(e) {
	x = e;
}
let Mt = 1,
	Z = 0,
	J = Z;
function lt(e) {
	J = e;
}
function Ft() {
	return ++Mt;
}
function Ee(e) {
	var t = e.f;
	if ((t & T) !== 0) return !0;
	if ((t & E && (e.f &= ~ee), (t & F) !== 0)) {
		for (var n = e.deps, r = n.length, s = 0; s < r; s++) {
			var l = n[s];
			if ((Ee(l) && Et(l), l.wv > e.wv)) return !0;
		}
		(t & O) !== 0 && I === null && y(e, g);
	}
	return !1;
}
function jt(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(k !== null && ie.call(k, e)))
		for (var s = 0; s < r.length; s++) {
			var l = r[s];
			(l.f & E) !== 0 ? jt(l, t, !1) : t === l && (n ? y(l, T) : (l.f & g) !== 0 && y(l, F), Be(l));
		}
}
function Lt(e) {
	var t = A,
		n = R,
		r = x,
		s = v,
		l = k,
		u = b,
		i = D,
		f = J,
		a = e.f;
	((A = null),
		(R = 0),
		(x = null),
		(v = (a & (M | Q)) === 0 ? e : null),
		(k = null),
		Se(e.ctx),
		(D = !1),
		(J = ++Z),
		e.ac !== null &&
			(Rt(() => {
				e.ac.abort(Y);
			}),
			(e.ac = null)));
	try {
		e.f |= Pe;
		var o = e.fn,
			_ = o();
		e.f |= se;
		var c = e.deps,
			p = w?.is_fork;
		if (A !== null) {
			var h;
			if ((p || pe(e, R), c !== null && R > 0))
				for (c.length = R + A.length, h = 0; h < A.length; h++) c[R + h] = A[h];
			else e.deps = c = A;
			if (Ot() && (e.f & O) !== 0) for (h = R; h < c.length; h++) (c[h].reactions ??= []).push(e);
		} else !p && c !== null && R < c.length && (pe(e, R), (c.length = R));
		if (ge() && x !== null && !D && c !== null && (e.f & (E | F | T)) === 0)
			for (h = 0; h < x.length; h++) jt(x[h], e);
		if (s !== null && s !== e) {
			if ((Z++, s.deps !== null)) for (let N = 0; N < n; N += 1) s.deps[N].rv = Z;
			if (t !== null) for (const N of t) N.rv = Z;
			x !== null && (r === null ? (r = x) : r.push(...x));
		}
		return ((e.f & U) !== 0 && (e.f ^= U), _);
	} catch (N) {
		return cn(N);
	} finally {
		((e.f ^= Pe), (A = t), (R = n), (x = r), (v = s), (k = l), Se(u), (D = i), (J = f));
	}
}
function Pn(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var r = Ut.call(n, e);
		if (r !== -1) {
			var s = n.length - 1;
			s === 0 ? (n = t.reactions = null) : ((n[r] = n[s]), n.pop());
		}
	}
	if (n === null && (t.f & E) !== 0 && (A === null || !ie.call(A, t))) {
		var l = t;
		((l.f & O) !== 0 && ((l.f ^= O), (l.f &= ~ee)), Ve(l), Tn(l), pe(l, 0));
	}
}
function pe(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Pn(e, n[r]);
}
function oe(e) {
	var t = e.f;
	if ((t & P) === 0) {
		y(e, g);
		var n = d,
			r = Te;
		((d = e), (Te = !0));
		try {
			((t & (G | ft)) !== 0 ? Nn(e) : Xe(e), Nt(e));
			var s = Lt(e);
			((e.teardown = typeof s == 'function' ? s : null), (e.wv = Mt));
			var l;
		} finally {
			((Te = r), (d = n));
		}
	}
}
async function jr() {
	(await Promise.resolve(), hn());
}
function Lr() {
	return B.ensure().settled();
}
function ve(e) {
	var t = e.f,
		n = (t & E) !== 0;
	if (v !== null && !D) {
		var r = d !== null && (d.f & P) !== 0;
		if (!r && (k === null || !ie.call(k, e))) {
			var s = v.deps;
			if ((v.f & Pe) !== 0)
				e.rv < Z &&
					((e.rv = Z),
					A === null && s !== null && s[R] === e ? R++ : A === null ? (A = [e]) : A.push(e));
			else {
				(v.deps ??= []).push(e);
				var l = e.reactions;
				l === null ? (e.reactions = [v]) : ie.call(l, v) || l.push(v);
			}
		}
	}
	if (re && V.has(e)) return V.get(e);
	if (n) {
		var u = e;
		if (re) {
			var i = u.v;
			return ((((u.f & g) === 0 && u.reactions !== null) || Ht(u)) && (i = Ge(u)), V.set(u, i), i);
		}
		var f = (u.f & O) === 0 && !D && v !== null && (Te || (v.f & O) !== 0),
			a = (u.f & se) === 0;
		(Ee(u) && (f && (u.f |= O), Et(u)), f && !a && (mt(u), Yt(u)));
	}
	if (I?.has(e)) return I.get(e);
	if ((e.f & U) !== 0) throw e.v;
	return e.v;
}
function Yt(e) {
	if (((e.f |= O), e.deps !== null))
		for (const t of e.deps)
			((t.reactions ??= []).push(e), (t.f & E) !== 0 && (t.f & O) === 0 && (mt(t), Yt(t)));
}
function Ht(e) {
	if (e.v === m) return !0;
	if (e.deps === null) return !1;
	for (const t of e.deps) if (V.has(t) || ((t.f & E) !== 0 && Ht(t))) return !0;
	return !1;
}
function Yr(e) {
	var t = D;
	try {
		return ((D = !0), e());
	} finally {
		D = t;
	}
}
function Hr(e) {
	if (!(typeof e != 'object' || !e || e instanceof EventTarget)) {
		if (W in e) Ye(e);
		else if (!Array.isArray(e))
			for (let t in e) {
				const n = e[t];
				typeof n == 'object' && n && W in n && Ye(n);
			}
	}
}
function Ye(e, t = new Set()) {
	if (typeof e == 'object' && e !== null && !(e instanceof EventTarget) && !t.has(e)) {
		(t.add(e), e instanceof Date && e.getTime());
		for (let r in e)
			try {
				Ye(e[r], t);
			} catch {}
		const n = it(e);
		if (
			n !== Object.prototype &&
			n !== Array.prototype &&
			n !== Map.prototype &&
			n !== Set.prototype &&
			n !== Date.prototype
		) {
			const r = Vt(n);
			for (let s in r) {
				const l = r[s].get;
				if (l)
					try {
						l.call(e);
					} catch {}
			}
		}
	}
}
export {
	W as $,
	pr as A,
	mr as B,
	or as C,
	Tr as D,
	Cr as E,
	ur as F,
	Ae as G,
	vr as H,
	Un as I,
	_r as J,
	fe as K,
	Hn as L,
	fr as M,
	fn as N,
	de as O,
	zn as P,
	er as Q,
	_e as R,
	$ as S,
	re as T,
	d as U,
	P as V,
	nr as W,
	tr as X,
	Qn as Y,
	Jn as Z,
	En as _,
	Vt as a,
	On as a$,
	Yn as a0,
	Rr as a1,
	Le as a2,
	Rn as a3,
	rr as a4,
	sr as a5,
	se as a6,
	ke as a7,
	$e as a8,
	Ot as a9,
	Bn as aA,
	Ar as aB,
	kr as aC,
	Mn as aD,
	an as aE,
	Ue as aF,
	Xt as aG,
	Nr as aH,
	Sn as aI,
	We as aJ,
	hn as aK,
	yr as aL,
	jr as aM,
	q as aN,
	wr as aO,
	Gt as aP,
	un as aQ,
	Xn as aR,
	Ln as aS,
	Vn as aT,
	qt as aU,
	Kn as aV,
	Wn as aW,
	$n as aX,
	C as aY,
	M as aZ,
	Zn as a_,
	Ir as aa,
	Ke as ab,
	Ce as ac,
	Qe as ad,
	$t as ae,
	ln as af,
	lr as ag,
	vn as ah,
	ue as ai,
	z as aj,
	Se as ak,
	B as al,
	cn as am,
	v as an,
	je as ao,
	cr as ap,
	Re as aq,
	ye as ar,
	Gn as as,
	ar as at,
	Fn as au,
	Er as av,
	ot as aw,
	sn as ax,
	K as ay,
	qe as az,
	Pr as b,
	ir as b0,
	gr as b1,
	Lr as b2,
	Oe as c,
	ne as d,
	w as e,
	S as f,
	it as g,
	te as h,
	b as i,
	xr as j,
	Yr as k,
	Kt as l,
	Fr as m,
	jn as n,
	ve as o,
	Dn as p,
	Hr as q,
	Mr as r,
	Sr as s,
	ze as t,
	Or as u,
	dr as v,
	Ne as w,
	hr as x,
	br as y,
	Dr as z
};
