import { a as u, f as h } from '../chunks/CcKL1eOP.js';
import { i as g } from '../chunks/DdSHj5C-.js';
import { x as l, y as v, z as d, A as x, B as a, C as e, D as _ } from '../chunks/CQd7E61n.js';
import { s as o } from '../chunks/BYxOKeWw.js';
import { p } from '../chunks/GrsC0733.js';
import { s as $ } from '../chunks/DU--gb9m.js';
const k = {
	get error() {
		return p.error;
	},
	get status() {
		return p.status;
	}
};
$.updated.check;
const m = k;
var b = h('<h1> </h1> <p> </p>', 1);
function E(i, f) {
	(l(f, !1), g());
	var t = b(),
		r = v(t),
		n = a(r, !0);
	e(r);
	var s = _(r, 2),
		c = a(s, !0);
	(e(s),
		d(() => {
			(o(n, m.status), o(c, m.error?.message));
		}),
		u(i, t),
		x());
}
export { E as component };
