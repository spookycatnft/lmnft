/*! For license information please see bundle91589d92f1641ae8163b.js.LICENSE.txt */
(() => {
    var t = {
        1506: t => {
            t.exports = function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        }, 8926: t => {
            function e(t, e, r, n, i, o, s) {
                try {
                    var a = t[o](s), u = a.value
                } catch (t) {
                    return void r(t)
                }
                a.done ? e(u) : Promise.resolve(u).then(n, i)
            }

            t.exports = function (t) {
                return function () {
                    var r = this, n = arguments;
                    return new Promise((function (i, o) {
                        var s = t.apply(r, n);

                        function a(t) {
                            e(s, i, o, a, u, "next", t)
                        }

                        function u(t) {
                            e(s, i, o, a, u, "throw", t)
                        }

                        a(void 0)
                    }))
                }
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        }, 4575: t => {
            t.exports = function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        }, 3913: t => {
            function e(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            t.exports = function (t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), Object.defineProperty(t, "prototype", {writable: !1}), t
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        }, 9754: t => {
            function e(r) {
                return t.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, t.exports.__esModule = !0, t.exports.default = t.exports, e(r)
            }

            t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
        }, 2205: (t, e, r) => {
            var n = r(9489);
            t.exports = function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(t, "prototype", {writable: !1}), e && n(t, e)
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        }, 5318: t => {
            t.exports = function (t) {
                return t && t.__esModule ? t : {default: t}
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        }, 8585: (t, e, r) => {
            var n = r(8).default, i = r(1506);
            t.exports = function (t, e) {
                if (e && ("object" === n(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return i(t)
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        }, 9489: t => {
            function e(r, n) {
                return t.exports = e = Object.setPrototypeOf || function (t, e) {
                    return t.__proto__ = e, t
                }, t.exports.__esModule = !0, t.exports.default = t.exports, e(r, n)
            }

            t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
        }, 8: t => {
            function e(r) {
                return t.exports = e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, t.exports.__esModule = !0, t.exports.default = t.exports, e(r)
            }

            t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
        }, 7757: (t, e, r) => {
            t.exports = r(5666)
        }, 9386: (t, e, r) => {
            "use strict";
            e._O = e.Jq = e.KB = e.u8 = e.cv = void 0, e.Ik = e.A9 = e.n_ = e.gM = void 0;
            const n = r(8779);

            function i(t) {
                if (!(t instanceof Uint8Array)) throw new TypeError("b must be a Uint8Array")
            }

            function o(t) {
                return i(t), n.Buffer.from(t.buffer, t.byteOffset, t.length)
            }

            class s {
                constructor(t, e) {
                    if (!Number.isInteger(t)) throw new TypeError("span must be an integer");
                    this.span = t, this.property = e
                }

                makeDestinationObject() {
                    return {}
                }

                getSpan(t, e) {
                    if (0 > this.span) throw new RangeError("indeterminate span");
                    return this.span
                }

                replicate(t) {
                    const e = Object.create(this.constructor.prototype);
                    return Object.assign(e, this), e.property = t, e
                }

                fromArray(t) {
                }
            }

            function a(t, e) {
                return e.property ? t + "[" + e.property + "]" : t
            }

            class u extends s {
                isCount() {
                    throw new Error("ExternalLayout is abstract")
                }
            }

            class c extends u {
                constructor(t, e = 0, r) {
                    if (!(t instanceof s)) throw new TypeError("layout must be a Layout");
                    if (!Number.isInteger(e)) throw new TypeError("offset must be integer or undefined");
                    super(t.span, r || t.property), this.layout = t, this.offset = e
                }

                isCount() {
                    return this.layout instanceof f || this.layout instanceof h
                }

                decode(t, e = 0) {
                    return this.layout.decode(t, e + this.offset)
                }

                encode(t, e, r = 0) {
                    return this.layout.encode(t, e, r + this.offset)
                }
            }

            class f extends s {
                constructor(t, e) {
                    if (super(t, e), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
                }

                decode(t, e = 0) {
                    return o(t).readUIntLE(e, this.span)
                }

                encode(t, e, r = 0) {
                    return o(e).writeUIntLE(t, r, this.span), this.span
                }
            }

            class h extends s {
                constructor(t, e) {
                    if (super(t, e), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
                }

                decode(t, e = 0) {
                    return o(t).readUIntBE(e, this.span)
                }

                encode(t, e, r = 0) {
                    return o(e).writeUIntBE(t, r, this.span), this.span
                }
            }

            const d = Math.pow(2, 32);

            function l(t) {
                const e = Math.floor(t / d);
                return {hi32: e, lo32: t - e * d}
            }

            function p(t, e) {
                return t * d + e
            }

            class b extends s {
                constructor(t) {
                    super(8, t)
                }

                decode(t, e = 0) {
                    const r = o(t), n = r.readUInt32LE(e);
                    return p(r.readUInt32LE(e + 4), n)
                }

                encode(t, e, r = 0) {
                    const n = l(t), i = o(e);
                    return i.writeUInt32LE(n.lo32, r), i.writeUInt32LE(n.hi32, r + 4), 8
                }
            }

            class g extends s {
                constructor(t) {
                    super(8, t)
                }

                decode(t, e = 0) {
                    const r = o(t), n = r.readUInt32LE(e);
                    return p(r.readInt32LE(e + 4), n)
                }

                encode(t, e, r = 0) {
                    const n = l(t), i = o(e);
                    return i.writeUInt32LE(n.lo32, r), i.writeInt32LE(n.hi32, r + 4), 8
                }
            }

            class y extends s {
                constructor(t, e, r) {
                    if (!(t instanceof s)) throw new TypeError("elementLayout must be a Layout");
                    if (!(e instanceof u && e.isCount() || Number.isInteger(e) && 0 <= e)) throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
                    let n = -1;
                    !(e instanceof u) && 0 < t.span && (n = e * t.span), super(n, r), this.elementLayout = t, this.count = e
                }

                getSpan(t, e = 0) {
                    if (0 <= this.span) return this.span;
                    let r = 0, n = this.count;
                    if (n instanceof u && (n = n.decode(t, e)), 0 < this.elementLayout.span) r = n * this.elementLayout.span; else {
                        let i = 0;
                        for (; i < n;) r += this.elementLayout.getSpan(t, e + r), ++i
                    }
                    return r
                }

                decode(t, e = 0) {
                    const r = [];
                    let n = 0, i = this.count;
                    for (i instanceof u && (i = i.decode(t, e)); n < i;) r.push(this.elementLayout.decode(t, e)), e += this.elementLayout.getSpan(t, e), n += 1;
                    return r
                }

                encode(t, e, r = 0) {
                    const n = this.elementLayout, i = t.reduce(((t, i) => t + n.encode(i, e, r + t)), 0);
                    return this.count instanceof u && this.count.encode(t.length, e, r), i
                }
            }

            class m extends s {
                constructor(t, e, r) {
                    if (!Array.isArray(t) || !t.reduce(((t, e) => t && e instanceof s), !0)) throw new TypeError("fields must be array of Layout instances");
                    "boolean" == typeof e && void 0 === r && (r = e, e = void 0);
                    for (const e of t) if (0 > e.span && void 0 === e.property) throw new Error("fields cannot contain unnamed variable-length layout");
                    let n = -1;
                    try {
                        n = t.reduce(((t, e) => t + e.getSpan()), 0)
                    } catch (t) {
                    }
                    super(n, e), this.fields = t, this.decodePrefixes = !!r
                }

                getSpan(t, e = 0) {
                    if (0 <= this.span) return this.span;
                    let r = 0;
                    try {
                        r = this.fields.reduce(((r, n) => {
                            const i = n.getSpan(t, e);
                            return e += i, r + i
                        }), 0)
                    } catch (t) {
                        throw new RangeError("indeterminate span")
                    }
                    return r
                }

                decode(t, e = 0) {
                    i(t);
                    const r = this.makeDestinationObject();
                    for (const n of this.fields) if (void 0 !== n.property && (r[n.property] = n.decode(t, e)), e += n.getSpan(t, e), this.decodePrefixes && t.length === e) break;
                    return r
                }

                encode(t, e, r = 0) {
                    const n = r;
                    let i = 0, o = 0;
                    for (const n of this.fields) {
                        let s = n.span;
                        if (o = 0 < s ? s : 0, void 0 !== n.property) {
                            const i = t[n.property];
                            void 0 !== i && (o = n.encode(i, e, r), 0 > s && (s = n.getSpan(e, r)))
                        }
                        i = r, r += s
                    }
                    return i + o - n
                }

                fromArray(t) {
                    const e = this.makeDestinationObject();
                    for (const r of this.fields) void 0 !== r.property && 0 < t.length && (e[r.property] = t.shift());
                    return e
                }

                layoutFor(t) {
                    if ("string" != typeof t) throw new TypeError("property must be string");
                    for (const e of this.fields) if (e.property === t) return e
                }

                offsetOf(t) {
                    if ("string" != typeof t) throw new TypeError("property must be string");
                    let e = 0;
                    for (const r of this.fields) {
                        if (r.property === t) return e;
                        0 > r.span ? e = -1 : 0 <= e && (e += r.span)
                    }
                }
            }

            class w extends s {
                constructor(t, e) {
                    if (!(t instanceof u && t.isCount() || Number.isInteger(t) && 0 <= t)) throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
                    let r = -1;
                    t instanceof u || (r = t), super(r, e), this.length = t
                }

                getSpan(t, e) {
                    let r = this.span;
                    return 0 > r && (r = this.length.decode(t, e)), r
                }

                decode(t, e = 0) {
                    let r = this.span;
                    return 0 > r && (r = this.length.decode(t, e)), o(t).slice(e, e + r)
                }

                encode(t, e, r) {
                    let n = this.length;
                    if (this.length instanceof u && (n = t.length), !(t instanceof Uint8Array && n === t.length)) throw new TypeError(a("Blob.encode", this) + " requires (length " + n + ") Uint8Array as src");
                    if (r + n > e.length) throw new RangeError("encoding overruns Uint8Array");
                    const i = o(t);
                    return o(e).write(i.toString("hex"), r, n, "hex"), this.length instanceof u && this.length.encode(n, e, r), n
                }
            }

            e.cv = (t, e, r) => new c(t, e, r), e.u8 = t => new f(1, t), e.KB = t => new f(2, t), e.Jq = t => new f(4, t), e._O = t => new b(t), e.gM = t => new g(t), e.n_ = (t, e, r) => new m(t, e, r), e.A9 = (t, e, r) => new y(t, e, r), e.Ik = (t, e) => new w(t, e)
        }, 8779: (t, e, r) => {
            "use strict";
            const n = r(9742), i = r(645),
                o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
            e.Buffer = u, e.SlowBuffer = function (t) {
                return +t != t && (t = 0), u.alloc(+t)
            }, e.INSPECT_MAX_BYTES = 50;
            const s = 2147483647;

            function a(t) {
                if (t > s) throw new RangeError('The value "' + t + '" is invalid for option "size"');
                const e = new Uint8Array(t);
                return Object.setPrototypeOf(e, u.prototype), e
            }

            function u(t, e, r) {
                if ("number" == typeof t) {
                    if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
                    return h(t)
                }
                return c(t, e, r)
            }

            function c(t, e, r) {
                if ("string" == typeof t) return function (t, e) {
                    if ("string" == typeof e && "" !== e || (e = "utf8"), !u.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
                    const r = 0 | b(t, e);
                    let n = a(r);
                    const i = n.write(t, e);
                    return i !== r && (n = n.slice(0, i)), n
                }(t, e);
                if (ArrayBuffer.isView(t)) return function (t) {
                    if (G(t, Uint8Array)) {
                        const e = new Uint8Array(t);
                        return l(e.buffer, e.byteOffset, e.byteLength)
                    }
                    return d(t)
                }(t);
                if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                if (G(t, ArrayBuffer) || t && G(t.buffer, ArrayBuffer)) return l(t, e, r);
                if ("undefined" != typeof SharedArrayBuffer && (G(t, SharedArrayBuffer) || t && G(t.buffer, SharedArrayBuffer))) return l(t, e, r);
                if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
                const n = t.valueOf && t.valueOf();
                if (null != n && n !== t) return u.from(n, e, r);
                const i = function (t) {
                    if (u.isBuffer(t)) {
                        const e = 0 | p(t.length), r = a(e);
                        return 0 === r.length || t.copy(r, 0, 0, e), r
                    }
                    return void 0 !== t.length ? "number" != typeof t.length || Z(t.length) ? a(0) : d(t) : "Buffer" === t.type && Array.isArray(t.data) ? d(t.data) : void 0
                }(t);
                if (i) return i;
                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return u.from(t[Symbol.toPrimitive]("string"), e, r);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
            }

            function f(t) {
                if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
                if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
            }

            function h(t) {
                return f(t), a(t < 0 ? 0 : 0 | p(t))
            }

            function d(t) {
                const e = t.length < 0 ? 0 : 0 | p(t.length), r = a(e);
                for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
                return r
            }

            function l(t, e, r) {
                if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
                if (t.byteLength < e + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
                let n;
                return n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r), Object.setPrototypeOf(n, u.prototype), n
            }

            function p(t) {
                if (t >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
                return 0 | t
            }

            function b(t, e) {
                if (u.isBuffer(t)) return t.length;
                if (ArrayBuffer.isView(t) || G(t, ArrayBuffer)) return t.byteLength;
                if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                const r = t.length, n = arguments.length > 2 && !0 === arguments[2];
                if (!n && 0 === r) return 0;
                let i = !1;
                for (; ;) switch (e) {
                    case"ascii":
                    case"latin1":
                    case"binary":
                        return r;
                    case"utf8":
                    case"utf-8":
                        return J(t).length;
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return 2 * r;
                    case"hex":
                        return r >>> 1;
                    case"base64":
                        return V(t).length;
                    default:
                        if (i) return n ? -1 : J(t).length;
                        e = ("" + e).toLowerCase(), i = !0
                }
            }

            function g(t, e, r) {
                let n = !1;
                if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                if ((r >>>= 0) <= (e >>>= 0)) return "";
                for (t || (t = "utf8"); ;) switch (t) {
                    case"hex":
                        return R(this, e, r);
                    case"utf8":
                    case"utf-8":
                        return E(this, e, r);
                    case"ascii":
                        return B(this, e, r);
                    case"latin1":
                    case"binary":
                        return x(this, e, r);
                    case"base64":
                        return k(this, e, r);
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return P(this, e, r);
                    default:
                        if (n) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), n = !0
                }
            }

            function y(t, e, r) {
                const n = t[e];
                t[e] = t[r], t[r] = n
            }

            function m(t, e, r, n, i) {
                if (0 === t.length) return -1;
                if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), Z(r = +r) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
                    if (i) return -1;
                    r = t.length - 1
                } else if (r < 0) {
                    if (!i) return -1;
                    r = 0
                }
                if ("string" == typeof e && (e = u.from(e, n)), u.isBuffer(e)) return 0 === e.length ? -1 : w(t, e, r, n, i);
                if ("number" == typeof e) return e &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : w(t, [e], r, n, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function w(t, e, r, n, i) {
                let o, s = 1, a = t.length, u = e.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (t.length < 2 || e.length < 2) return -1;
                    s = 2, a /= 2, u /= 2, r /= 2
                }

                function c(t, e) {
                    return 1 === s ? t[e] : t.readUInt16BE(e * s)
                }

                if (i) {
                    let n = -1;
                    for (o = r; o < a; o++) if (c(t, o) === c(e, -1 === n ? 0 : o - n)) {
                        if (-1 === n && (n = o), o - n + 1 === u) return n * s
                    } else -1 !== n && (o -= o - n), n = -1
                } else for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
                    let r = !0;
                    for (let n = 0; n < u; n++) if (c(t, o + n) !== c(e, n)) {
                        r = !1;
                        break
                    }
                    if (r) return o
                }
                return -1
            }

            function v(t, e, r, n) {
                r = Number(r) || 0;
                const i = t.length - r;
                n ? (n = Number(n)) > i && (n = i) : n = i;
                const o = e.length;
                let s;
                for (n > o / 2 && (n = o / 2), s = 0; s < n; ++s) {
                    const n = parseInt(e.substr(2 * s, 2), 16);
                    if (Z(n)) return s;
                    t[r + s] = n
                }
                return s
            }

            function S(t, e, r, n) {
                return H(J(e, t.length - r), t, r, n)
            }

            function M(t, e, r, n) {
                return H(function (t) {
                    const e = [];
                    for (let r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                    return e
                }(e), t, r, n)
            }

            function _(t, e, r, n) {
                return H(V(e), t, r, n)
            }

            function A(t, e, r, n) {
                return H(function (t, e) {
                    let r, n, i;
                    const o = [];
                    for (let s = 0; s < t.length && !((e -= 2) < 0); ++s) r = t.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n);
                    return o
                }(e, t.length - r), t, r, n)
            }

            function k(t, e, r) {
                return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r))
            }

            function E(t, e, r) {
                r = Math.min(t.length, r);
                const n = [];
                let i = e;
                for (; i < r;) {
                    const e = t[i];
                    let o = null, s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
                    if (i + s <= r) {
                        let r, n, a, u;
                        switch (s) {
                            case 1:
                                e < 128 && (o = e);
                                break;
                            case 2:
                                r = t[i + 1], 128 == (192 & r) && (u = (31 & e) << 6 | 63 & r, u > 127 && (o = u));
                                break;
                            case 3:
                                r = t[i + 1], n = t[i + 2], 128 == (192 & r) && 128 == (192 & n) && (u = (15 & e) << 12 | (63 & r) << 6 | 63 & n, u > 2047 && (u < 55296 || u > 57343) && (o = u));
                                break;
                            case 4:
                                r = t[i + 1], n = t[i + 2], a = t[i + 3], 128 == (192 & r) && 128 == (192 & n) && 128 == (192 & a) && (u = (15 & e) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & a, u > 65535 && u < 1114112 && (o = u))
                        }
                    }
                    null === o ? (o = 65533, s = 1) : o > 65535 && (o -= 65536, n.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), n.push(o), i += s
                }
                return function (t) {
                    const e = t.length;
                    if (e <= I) return String.fromCharCode.apply(String, t);
                    let r = "", n = 0;
                    for (; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += I));
                    return r
                }(n)
            }

            e.kMaxLength = s, u.TYPED_ARRAY_SUPPORT = function () {
                try {
                    const t = new Uint8Array(1), e = {
                        foo: function () {
                            return 42
                        }
                    };
                    return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
                } catch (t) {
                    return !1
                }
            }(), u.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(u.prototype, "parent", {
                enumerable: !0,
                get: function () {
                    if (u.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(u.prototype, "offset", {
                enumerable: !0, get: function () {
                    if (u.isBuffer(this)) return this.byteOffset
                }
            }), u.poolSize = 8192, u.from = function (t, e, r) {
                return c(t, e, r)
            }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array), u.alloc = function (t, e, r) {
                return function (t, e, r) {
                    return f(t), t <= 0 ? a(t) : void 0 !== e ? "string" == typeof r ? a(t).fill(e, r) : a(t).fill(e) : a(t)
                }(t, e, r)
            }, u.allocUnsafe = function (t) {
                return h(t)
            }, u.allocUnsafeSlow = function (t) {
                return h(t)
            }, u.isBuffer = function (t) {
                return null != t && !0 === t._isBuffer && t !== u.prototype
            }, u.compare = function (t, e) {
                if (G(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), G(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)), !u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (t === e) return 0;
                let r = t.length, n = e.length;
                for (let i = 0, o = Math.min(r, n); i < o; ++i) if (t[i] !== e[i]) {
                    r = t[i], n = e[i];
                    break
                }
                return r < n ? -1 : n < r ? 1 : 0
            }, u.isEncoding = function (t) {
                switch (String(t).toLowerCase()) {
                    case"hex":
                    case"utf8":
                    case"utf-8":
                    case"ascii":
                    case"latin1":
                    case"binary":
                    case"base64":
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, u.concat = function (t, e) {
                if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return u.alloc(0);
                let r;
                if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
                const n = u.allocUnsafe(e);
                let i = 0;
                for (r = 0; r < t.length; ++r) {
                    let e = t[r];
                    if (G(e, Uint8Array)) i + e.length > n.length ? (u.isBuffer(e) || (e = u.from(e)), e.copy(n, i)) : Uint8Array.prototype.set.call(n, e, i); else {
                        if (!u.isBuffer(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                        e.copy(n, i)
                    }
                    i += e.length
                }
                return n
            }, u.byteLength = b, u.prototype._isBuffer = !0, u.prototype.swap16 = function () {
                const t = this.length;
                if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (let e = 0; e < t; e += 2) y(this, e, e + 1);
                return this
            }, u.prototype.swap32 = function () {
                const t = this.length;
                if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (let e = 0; e < t; e += 4) y(this, e, e + 3), y(this, e + 1, e + 2);
                return this
            }, u.prototype.swap64 = function () {
                const t = this.length;
                if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (let e = 0; e < t; e += 8) y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), y(this, e + 3, e + 4);
                return this
            }, u.prototype.toString = function () {
                const t = this.length;
                return 0 === t ? "" : 0 === arguments.length ? E(this, 0, t) : g.apply(this, arguments)
            }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function (t) {
                if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === u.compare(this, t)
            }, u.prototype.inspect = function () {
                let t = "";
                const r = e.INSPECT_MAX_BYTES;
                return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">"
            }, o && (u.prototype[o] = u.prototype.inspect), u.prototype.compare = function (t, e, r, n, i) {
                if (G(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), !u.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length) throw new RangeError("out of range index");
                if (n >= i && e >= r) return 0;
                if (n >= i) return -1;
                if (e >= r) return 1;
                if (this === t) return 0;
                let o = (i >>>= 0) - (n >>>= 0), s = (r >>>= 0) - (e >>>= 0);
                const a = Math.min(o, s), c = this.slice(n, i), f = t.slice(e, r);
                for (let t = 0; t < a; ++t) if (c[t] !== f[t]) {
                    o = c[t], s = f[t];
                    break
                }
                return o < s ? -1 : s < o ? 1 : 0
            }, u.prototype.includes = function (t, e, r) {
                return -1 !== this.indexOf(t, e, r)
            }, u.prototype.indexOf = function (t, e, r) {
                return m(this, t, e, r, !0)
            }, u.prototype.lastIndexOf = function (t, e, r) {
                return m(this, t, e, r, !1)
            }, u.prototype.write = function (t, e, r, n) {
                if (void 0 === e) n = "utf8", r = this.length, e = 0; else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0; else {
                    if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                }
                const i = this.length - e;
                if ((void 0 === r || r > i) && (r = i), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                let o = !1;
                for (; ;) switch (n) {
                    case"hex":
                        return v(this, t, e, r);
                    case"utf8":
                    case"utf-8":
                        return S(this, t, e, r);
                    case"ascii":
                    case"latin1":
                    case"binary":
                        return M(this, t, e, r);
                    case"base64":
                        return _(this, t, e, r);
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return A(this, t, e, r);
                    default:
                        if (o) throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), o = !0
                }
            }, u.prototype.toJSON = function () {
                return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
            };
            const I = 4096;

            function B(t, e, r) {
                let n = "";
                r = Math.min(t.length, r);
                for (let i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
                return n
            }

            function x(t, e, r) {
                let n = "";
                r = Math.min(t.length, r);
                for (let i = e; i < r; ++i) n += String.fromCharCode(t[i]);
                return n
            }

            function R(t, e, r) {
                const n = t.length;
                (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                let i = "";
                for (let n = e; n < r; ++n) i += Y[t[n]];
                return i
            }

            function P(t, e, r) {
                const n = t.slice(e, r);
                let i = "";
                for (let t = 0; t < n.length - 1; t += 2) i += String.fromCharCode(n[t] + 256 * n[t + 1]);
                return i
            }

            function O(t, e, r) {
                if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                if (t + e > r) throw new RangeError("Trying to access beyond buffer length")
            }

            function T(t, e, r, n, i, o) {
                if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
                if (r + n > t.length) throw new RangeError("Index out of range")
            }

            function U(t, e, r, n, i) {
                K(e, n, i, t, r, 7);
                let o = Number(e & BigInt(4294967295));
                t[r++] = o, o >>= 8, t[r++] = o, o >>= 8, t[r++] = o, o >>= 8, t[r++] = o;
                let s = Number(e >> BigInt(32) & BigInt(4294967295));
                return t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, r
            }

            function L(t, e, r, n, i) {
                K(e, n, i, t, r, 7);
                let o = Number(e & BigInt(4294967295));
                t[r + 7] = o, o >>= 8, t[r + 6] = o, o >>= 8, t[r + 5] = o, o >>= 8, t[r + 4] = o;
                let s = Number(e >> BigInt(32) & BigInt(4294967295));
                return t[r + 3] = s, s >>= 8, t[r + 2] = s, s >>= 8, t[r + 1] = s, s >>= 8, t[r] = s, r + 8
            }

            function N(t, e, r, n, i, o) {
                if (r + n > t.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range")
            }

            function z(t, e, r, n, o) {
                return e = +e, r >>>= 0, o || N(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4
            }

            function C(t, e, r, n, o) {
                return e = +e, r >>>= 0, o || N(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8
            }

            u.prototype.slice = function (t, e) {
                const r = this.length;
                (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
                const n = this.subarray(t, e);
                return Object.setPrototypeOf(n, u.prototype), n
            }, u.prototype.readUintLE = u.prototype.readUIntLE = function (t, e, r) {
                t >>>= 0, e >>>= 0, r || O(t, e, this.length);
                let n = this[t], i = 1, o = 0;
                for (; ++o < e && (i *= 256);) n += this[t + o] * i;
                return n
            }, u.prototype.readUintBE = u.prototype.readUIntBE = function (t, e, r) {
                t >>>= 0, e >>>= 0, r || O(t, e, this.length);
                let n = this[t + --e], i = 1;
                for (; e > 0 && (i *= 256);) n += this[t + --e] * i;
                return n
            }, u.prototype.readUint8 = u.prototype.readUInt8 = function (t, e) {
                return t >>>= 0, e || O(t, 1, this.length), this[t]
            }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function (t, e) {
                return t >>>= 0, e || O(t, 2, this.length), this[t] | this[t + 1] << 8
            }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function (t, e) {
                return t >>>= 0, e || O(t, 2, this.length), this[t] << 8 | this[t + 1]
            }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function (t, e) {
                return t >>>= 0, e || O(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function (t, e) {
                return t >>>= 0, e || O(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }, u.prototype.readBigUInt64LE = X((function (t) {
                F(t >>>= 0, "offset");
                const e = this[t], r = this[t + 7];
                void 0 !== e && void 0 !== r || D(t, this.length - 8);
                const n = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
                    i = this[++t] + 256 * this[++t] + 65536 * this[++t] + r * 2 ** 24;
                return BigInt(n) + (BigInt(i) << BigInt(32))
            })), u.prototype.readBigUInt64BE = X((function (t) {
                F(t >>>= 0, "offset");
                const e = this[t], r = this[t + 7];
                void 0 !== e && void 0 !== r || D(t, this.length - 8);
                const n = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
                    i = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r;
                return (BigInt(n) << BigInt(32)) + BigInt(i)
            })), u.prototype.readIntLE = function (t, e, r) {
                t >>>= 0, e >>>= 0, r || O(t, e, this.length);
                let n = this[t], i = 1, o = 0;
                for (; ++o < e && (i *= 256);) n += this[t + o] * i;
                return i *= 128, n >= i && (n -= Math.pow(2, 8 * e)), n
            }, u.prototype.readIntBE = function (t, e, r) {
                t >>>= 0, e >>>= 0, r || O(t, e, this.length);
                let n = e, i = 1, o = this[t + --n];
                for (; n > 0 && (i *= 256);) o += this[t + --n] * i;
                return i *= 128, o >= i && (o -= Math.pow(2, 8 * e)), o
            }, u.prototype.readInt8 = function (t, e) {
                return t >>>= 0, e || O(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            }, u.prototype.readInt16LE = function (t, e) {
                t >>>= 0, e || O(t, 2, this.length);
                const r = this[t] | this[t + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, u.prototype.readInt16BE = function (t, e) {
                t >>>= 0, e || O(t, 2, this.length);
                const r = this[t + 1] | this[t] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, u.prototype.readInt32LE = function (t, e) {
                return t >>>= 0, e || O(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }, u.prototype.readInt32BE = function (t, e) {
                return t >>>= 0, e || O(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }, u.prototype.readBigInt64LE = X((function (t) {
                F(t >>>= 0, "offset");
                const e = this[t], r = this[t + 7];
                void 0 !== e && void 0 !== r || D(t, this.length - 8);
                const n = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24);
                return (BigInt(n) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24)
            })), u.prototype.readBigInt64BE = X((function (t) {
                F(t >>>= 0, "offset");
                const e = this[t], r = this[t + 7];
                void 0 !== e && void 0 !== r || D(t, this.length - 8);
                const n = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
                return (BigInt(n) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r)
            })), u.prototype.readFloatLE = function (t, e) {
                return t >>>= 0, e || O(t, 4, this.length), i.read(this, t, !0, 23, 4)
            }, u.prototype.readFloatBE = function (t, e) {
                return t >>>= 0, e || O(t, 4, this.length), i.read(this, t, !1, 23, 4)
            }, u.prototype.readDoubleLE = function (t, e) {
                return t >>>= 0, e || O(t, 8, this.length), i.read(this, t, !0, 52, 8)
            }, u.prototype.readDoubleBE = function (t, e) {
                return t >>>= 0, e || O(t, 8, this.length), i.read(this, t, !1, 52, 8)
            }, u.prototype.writeUintLE = u.prototype.writeUIntLE = function (t, e, r, n) {
                t = +t, e >>>= 0, r >>>= 0, n || T(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                let i = 1, o = 0;
                for (this[e] = 255 & t; ++o < r && (i *= 256);) this[e + o] = t / i & 255;
                return e + r
            }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function (t, e, r, n) {
                t = +t, e >>>= 0, r >>>= 0, n || T(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                let i = r - 1, o = 1;
                for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;
                return e + r
            }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function (t, e, r) {
                return t = +t, e >>>= 0, r || T(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
            }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function (t, e, r) {
                return t = +t, e >>>= 0, r || T(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
            }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function (t, e, r) {
                return t = +t, e >>>= 0, r || T(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
            }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function (t, e, r) {
                return t = +t, e >>>= 0, r || T(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
            }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function (t, e, r) {
                return t = +t, e >>>= 0, r || T(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
            }, u.prototype.writeBigUInt64LE = X((function (t, e = 0) {
                return U(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
            })), u.prototype.writeBigUInt64BE = X((function (t, e = 0) {
                return L(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
            })), u.prototype.writeIntLE = function (t, e, r, n) {
                if (t = +t, e >>>= 0, !n) {
                    const n = Math.pow(2, 8 * r - 1);
                    T(this, t, e, r, n - 1, -n)
                }
                let i = 0, o = 1, s = 0;
                for (this[e] = 255 & t; ++i < r && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1), this[e + i] = (t / o >> 0) - s & 255;
                return e + r
            }, u.prototype.writeIntBE = function (t, e, r, n) {
                if (t = +t, e >>>= 0, !n) {
                    const n = Math.pow(2, 8 * r - 1);
                    T(this, t, e, r, n - 1, -n)
                }
                let i = r - 1, o = 1, s = 0;
                for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1), this[e + i] = (t / o >> 0) - s & 255;
                return e + r
            }, u.prototype.writeInt8 = function (t, e, r) {
                return t = +t, e >>>= 0, r || T(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
            }, u.prototype.writeInt16LE = function (t, e, r) {
                return t = +t, e >>>= 0, r || T(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
            }, u.prototype.writeInt16BE = function (t, e, r) {
                return t = +t, e >>>= 0, r || T(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
            }, u.prototype.writeInt32LE = function (t, e, r) {
                return t = +t, e >>>= 0, r || T(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
            }, u.prototype.writeInt32BE = function (t, e, r) {
                return t = +t, e >>>= 0, r || T(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
            }, u.prototype.writeBigInt64LE = X((function (t, e = 0) {
                return U(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            })), u.prototype.writeBigInt64BE = X((function (t, e = 0) {
                return L(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            })), u.prototype.writeFloatLE = function (t, e, r) {
                return z(this, t, e, !0, r)
            }, u.prototype.writeFloatBE = function (t, e, r) {
                return z(this, t, e, !1, r)
            }, u.prototype.writeDoubleLE = function (t, e, r) {
                return C(this, t, e, !0, r)
            }, u.prototype.writeDoubleBE = function (t, e, r) {
                return C(this, t, e, !1, r)
            }, u.prototype.copy = function (t, e, r, n) {
                if (!u.isBuffer(t)) throw new TypeError("argument should be a Buffer");
                if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
                const i = n - r;
                return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, r, n) : Uint8Array.prototype.set.call(t, this.subarray(r, n), e), i
            }, u.prototype.fill = function (t, e, r, n) {
                if ("string" == typeof t) {
                    if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                    if ("string" == typeof n && !u.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                    if (1 === t.length) {
                        const e = t.charCodeAt(0);
                        ("utf8" === n && e < 128 || "latin1" === n) && (t = e)
                    }
                } else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
                if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
                if (r <= e) return this;
                let i;
                if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t) for (i = e; i < r; ++i) this[i] = t; else {
                    const o = u.isBuffer(t) ? t : u.from(t, n), s = o.length;
                    if (0 === s) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                    for (i = 0; i < r - e; ++i) this[i + e] = o[i % s]
                }
                return this
            };
            const q = {};

            function W(t, e, r) {
                q[t] = class extends r {
                    constructor() {
                        super(), Object.defineProperty(this, "message", {
                            value: e.apply(this, arguments),
                            writable: !0,
                            configurable: !0
                        }), this.name = `${this.name} [${t}]`, this.stack, delete this.name
                    }

                    get code() {
                        return t
                    }

                    set code(t) {
                        Object.defineProperty(this, "code", {configurable: !0, enumerable: !0, value: t, writable: !0})
                    }

                    toString() {
                        return `${this.name} [${t}]: ${this.message}`
                    }
                }
            }

            function j(t) {
                let e = "", r = t.length;
                const n = "-" === t[0] ? 1 : 0;
                for (; r >= n + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
                return `${t.slice(0, r)}${e}`
            }

            function K(t, e, r, n, i, o) {
                if (t > r || t < e) {
                    const n = "bigint" == typeof e ? "n" : "";
                    let i;
                    throw i = o > 3 ? 0 === e || e === BigInt(0) ? `>= 0${n} and < 2${n} ** ${8 * (o + 1)}${n}` : `>= -(2${n} ** ${8 * (o + 1) - 1}${n}) and < 2 ** ${8 * (o + 1) - 1}${n}` : `>= ${e}${n} and <= ${r}${n}`, new q.ERR_OUT_OF_RANGE("value", i, t)
                }
                !function (t, e, r) {
                    F(e, "offset"), void 0 !== t[e] && void 0 !== t[e + r] || D(e, t.length - (r + 1))
                }(n, i, o)
            }

            function F(t, e) {
                if ("number" != typeof t) throw new q.ERR_INVALID_ARG_TYPE(e, "number", t)
            }

            function D(t, e, r) {
                if (Math.floor(t) !== t) throw F(t, r), new q.ERR_OUT_OF_RANGE(r || "offset", "an integer", t);
                if (e < 0) throw new q.ERR_BUFFER_OUT_OF_BOUNDS;
                throw new q.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${e}`, t)
            }

            W("ERR_BUFFER_OUT_OF_BOUNDS", (function (t) {
                return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
            }), RangeError), W("ERR_INVALID_ARG_TYPE", (function (t, e) {
                return `The "${t}" argument must be of type number. Received type ${typeof e}`
            }), TypeError), W("ERR_OUT_OF_RANGE", (function (t, e, r) {
                let n = `The value of "${t}" is out of range.`, i = r;
                return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? i = j(String(r)) : "bigint" == typeof r && (i = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = j(i)), i += "n"), n += ` It must be ${e}. Received ${i}`, n
            }), RangeError);
            const $ = /[^+/0-9A-Za-z-_]/g;

            function J(t, e) {
                let r;
                e = e || 1 / 0;
                const n = t.length;
                let i = null;
                const o = [];
                for (let s = 0; s < n; ++s) {
                    if (r = t.charCodeAt(s), r > 55295 && r < 57344) {
                        if (!i) {
                            if (r > 56319) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === n) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = r;
                            continue
                        }
                        if (r < 56320) {
                            (e -= 3) > -1 && o.push(239, 191, 189), i = r;
                            continue
                        }
                        r = 65536 + (i - 55296 << 10 | r - 56320)
                    } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null, r < 128) {
                        if ((e -= 1) < 0) break;
                        o.push(r)
                    } else if (r < 2048) {
                        if ((e -= 2) < 0) break;
                        o.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((e -= 3) < 0) break;
                        o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((e -= 4) < 0) break;
                        o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return o
            }

            function V(t) {
                return n.toByteArray(function (t) {
                    if ((t = (t = t.split("=")[0]).trim().replace($, "")).length < 2) return "";
                    for (; t.length % 4 != 0;) t += "=";
                    return t
                }(t))
            }

            function H(t, e, r, n) {
                let i;
                for (i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
                return i
            }

            function G(t, e) {
                return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
            }

            function Z(t) {
                return t != t
            }

            const Y = function () {
                const t = "0123456789abcdef", e = new Array(256);
                for (let r = 0; r < 16; ++r) {
                    const n = 16 * r;
                    for (let i = 0; i < 16; ++i) e[n + i] = t[r] + t[i]
                }
                return e
            }();

            function X(t) {
                return "undefined" == typeof BigInt ? Q : t
            }

            function Q() {
                throw new Error("BigInt not supported")
            }
        }, 9191: (t, e, r) => {
            "use strict";
            var n = r(9509).Buffer;
            t.exports = function (t) {
                if (t.length >= 255) throw new TypeError("Alphabet too long");
                for (var e = new Uint8Array(256), r = 0; r < e.length; r++) e[r] = 255;
                for (var i = 0; i < t.length; i++) {
                    var o = t.charAt(i), s = o.charCodeAt(0);
                    if (255 !== e[s]) throw new TypeError(o + " is ambiguous");
                    e[s] = i
                }
                var a = t.length, u = t.charAt(0), c = Math.log(a) / Math.log(256), f = Math.log(256) / Math.log(a);

                function h(t) {
                    if ("string" != typeof t) throw new TypeError("Expected String");
                    if (0 === t.length) return n.alloc(0);
                    for (var r = 0, i = 0, o = 0; t[r] === u;) i++, r++;
                    for (var s = (t.length - r) * c + 1 >>> 0, f = new Uint8Array(s); t[r];) {
                        var h = e[t.charCodeAt(r)];
                        if (255 === h) return;
                        for (var d = 0, l = s - 1; (0 !== h || d < o) && -1 !== l; l--, d++) h += a * f[l] >>> 0, f[l] = h % 256 >>> 0, h = h / 256 >>> 0;
                        if (0 !== h) throw new Error("Non-zero carry");
                        o = d, r++
                    }
                    for (var p = s - o; p !== s && 0 === f[p];) p++;
                    var b = n.allocUnsafe(i + (s - p));
                    b.fill(0, 0, i);
                    for (var g = i; p !== s;) b[g++] = f[p++];
                    return b
                }

                return {
                    encode: function (e) {
                        if ((Array.isArray(e) || e instanceof Uint8Array) && (e = n.from(e)), !n.isBuffer(e)) throw new TypeError("Expected Buffer");
                        if (0 === e.length) return "";
                        for (var r = 0, i = 0, o = 0, s = e.length; o !== s && 0 === e[o];) o++, r++;
                        for (var c = (s - o) * f + 1 >>> 0, h = new Uint8Array(c); o !== s;) {
                            for (var d = e[o], l = 0, p = c - 1; (0 !== d || l < i) && -1 !== p; p--, l++) d += 256 * h[p] >>> 0, h[p] = d % a >>> 0, d = d / a >>> 0;
                            if (0 !== d) throw new Error("Non-zero carry");
                            i = l, o++
                        }
                        for (var b = c - i; b !== c && 0 === h[b];) b++;
                        for (var g = u.repeat(r); b < c; ++b) g += t.charAt(h[b]);
                        return g
                    }, decodeUnsafe: h, decode: function (t) {
                        var e = h(t);
                        if (e) return e;
                        throw new Error("Non-base" + a + " character")
                    }
                }
            }
        }, 11: (t, e, r) => {
            var n = r(9191);
            t.exports = n("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
        }, 8162: t => {
            "use strict";
            t.exports = function (t) {
                if (t.length >= 255) throw new TypeError("Alphabet too long");
                for (var e = new Uint8Array(256), r = 0; r < e.length; r++) e[r] = 255;
                for (var n = 0; n < t.length; n++) {
                    var i = t.charAt(n), o = i.charCodeAt(0);
                    if (255 !== e[o]) throw new TypeError(i + " is ambiguous");
                    e[o] = n
                }
                var s = t.length, a = t.charAt(0), u = Math.log(s) / Math.log(256), c = Math.log(256) / Math.log(s);

                function f(t) {
                    if ("string" != typeof t) throw new TypeError("Expected String");
                    if (0 === t.length) return new Uint8Array;
                    for (var r = 0, n = 0, i = 0; t[r] === a;) n++, r++;
                    for (var o = (t.length - r) * u + 1 >>> 0, c = new Uint8Array(o); t[r];) {
                        var f = e[t.charCodeAt(r)];
                        if (255 === f) return;
                        for (var h = 0, d = o - 1; (0 !== f || h < i) && -1 !== d; d--, h++) f += s * c[d] >>> 0, c[d] = f % 256 >>> 0, f = f / 256 >>> 0;
                        if (0 !== f) throw new Error("Non-zero carry");
                        i = h, r++
                    }
                    for (var l = o - i; l !== o && 0 === c[l];) l++;
                    for (var p = new Uint8Array(n + (o - l)), b = n; l !== o;) p[b++] = c[l++];
                    return p
                }

                return {
                    encode: function (e) {
                        if (e instanceof Uint8Array || (ArrayBuffer.isView(e) ? e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : Array.isArray(e) && (e = Uint8Array.from(e))), !(e instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
                        if (0 === e.length) return "";
                        for (var r = 0, n = 0, i = 0, o = e.length; i !== o && 0 === e[i];) i++, r++;
                        for (var u = (o - i) * c + 1 >>> 0, f = new Uint8Array(u); i !== o;) {
                            for (var h = e[i], d = 0, l = u - 1; (0 !== h || d < n) && -1 !== l; l--, d++) h += 256 * f[l] >>> 0, f[l] = h % s >>> 0, h = h / s >>> 0;
                            if (0 !== h) throw new Error("Non-zero carry");
                            n = d, i++
                        }
                        for (var p = u - n; p !== u && 0 === f[p];) p++;
                        for (var b = a.repeat(r); p < u; ++p) b += t.charAt(f[p]);
                        return b
                    }, decodeUnsafe: f, decode: function (t) {
                        var e = f(t);
                        if (e) return e;
                        throw new Error("Non-base" + s + " character")
                    }
                }
            }
        }, 9742: (t, e) => {
            "use strict";
            e.byteLength = function (t) {
                var e = u(t), r = e[0], n = e[1];
                return 3 * (r + n) / 4 - n
            }, e.toByteArray = function (t) {
                var e, r, o = u(t), s = o[0], a = o[1], c = new i(function (t, e, r) {
                    return 3 * (e + r) / 4 - r
                }(0, s, a)), f = 0, h = a > 0 ? s - 4 : s;
                for (r = 0; r < h; r += 4) e = n[t.charCodeAt(r)] << 18 | n[t.charCodeAt(r + 1)] << 12 | n[t.charCodeAt(r + 2)] << 6 | n[t.charCodeAt(r + 3)], c[f++] = e >> 16 & 255, c[f++] = e >> 8 & 255, c[f++] = 255 & e;
                return 2 === a && (e = n[t.charCodeAt(r)] << 2 | n[t.charCodeAt(r + 1)] >> 4, c[f++] = 255 & e), 1 === a && (e = n[t.charCodeAt(r)] << 10 | n[t.charCodeAt(r + 1)] << 4 | n[t.charCodeAt(r + 2)] >> 2, c[f++] = e >> 8 & 255, c[f++] = 255 & e), c
            }, e.fromByteArray = function (t) {
                for (var e, n = t.length, i = n % 3, o = [], s = 16383, a = 0, u = n - i; a < u; a += s) o.push(c(t, a, a + s > u ? u : a + s));
                return 1 === i ? (e = t[n - 1], o.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === i && (e = (t[n - 2] << 8) + t[n - 1], o.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "=")), o.join("")
            };
            for (var r = [], n = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, a = o.length; s < a; ++s) r[s] = o[s], n[o.charCodeAt(s)] = s;

            function u(t) {
                var e = t.length;
                if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var r = t.indexOf("=");
                return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4]
            }

            function c(t, e, n) {
                for (var i, o, s = [], a = e; a < n; a += 3) i = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
                return s.join("")
            }

            n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63
        }, 475: (t, e, r) => {
            "use strict";
            var n = r(4976).Buffer;
            e.oU = function (t) {
                {
                    const e = n.from(t);
                    e.reverse();
                    const r = e.toString("hex");
                    return 0 === r.length ? BigInt(0) : BigInt(`0x${r}`)
                }
            }, e.k$ = function (t, e) {
                {
                    const r = t.toString(16), i = n.from(r.padStart(2 * e, "0").slice(0, 2 * e), "hex");
                    return i.reverse(), i
                }
            }
        }, 3550: function (t, e, r) {
            !function (t, e) {
                "use strict";

                function n(t, e) {
                    if (!t) throw new Error(e || "Assertion failed")
                }

                function i(t, e) {
                    t.super_ = e;
                    var r = function () {
                    };
                    r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                }

                function o(t, e, r) {
                    if (o.isBN(t)) return t;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== e && "be" !== e || (r = e, e = 10), this._init(t || 0, e || 10, r || "be"))
                }

                var s;
                "object" == typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
                try {
                    s = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : r(6601).Buffer
                } catch (t) {
                }

                function a(t, e) {
                    var r = t.charCodeAt(e);
                    return r >= 48 && r <= 57 ? r - 48 : r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : void n(!1, "Invalid character in " + t)
                }

                function u(t, e, r) {
                    var n = a(t, r);
                    return r - 1 >= e && (n |= a(t, r - 1) << 4), n
                }

                function c(t, e, r, i) {
                    for (var o = 0, s = 0, a = Math.min(t.length, r), u = e; u < a; u++) {
                        var c = t.charCodeAt(u) - 48;
                        o *= i, s = c >= 49 ? c - 49 + 10 : c >= 17 ? c - 17 + 10 : c, n(c >= 0 && s < i, "Invalid character"), o += s
                    }
                    return o
                }

                function f(t, e) {
                    t.words = e.words, t.length = e.length, t.negative = e.negative, t.red = e.red
                }

                if (o.isBN = function (t) {
                    return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                }, o.max = function (t, e) {
                    return t.cmp(e) > 0 ? t : e
                }, o.min = function (t, e) {
                    return t.cmp(e) < 0 ? t : e
                }, o.prototype._init = function (t, e, r) {
                    if ("number" == typeof t) return this._initNumber(t, e, r);
                    if ("object" == typeof t) return this._initArray(t, e, r);
                    "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
                    var i = 0;
                    "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (i++, this.negative = 1), i < t.length && (16 === e ? this._parseHex(t, i, r) : (this._parseBase(t, e, i), "le" === r && this._initArray(this.toArray(), e, r)))
                }, o.prototype._initNumber = function (t, e, r) {
                    t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (n(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), e, r)
                }, o.prototype._initArray = function (t, e, r) {
                    if (n("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                    this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                    for (var i = 0; i < this.length; i++) this.words[i] = 0;
                    var o, s, a = 0;
                    if ("be" === r) for (i = t.length - 1, o = 0; i >= 0; i -= 3) s = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++); else if ("le" === r) for (i = 0, o = 0; i < t.length; i += 3) s = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);
                    return this._strip()
                }, o.prototype._parseHex = function (t, e, r) {
                    this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
                    for (var n = 0; n < this.length; n++) this.words[n] = 0;
                    var i, o = 0, s = 0;
                    if ("be" === r) for (n = t.length - 1; n >= e; n -= 2) i = u(t, e, n) << o, this.words[s] |= 67108863 & i, o >= 18 ? (o -= 18, s += 1, this.words[s] |= i >>> 26) : o += 8; else for (n = (t.length - e) % 2 == 0 ? e + 1 : e; n < t.length; n += 2) i = u(t, e, n) << o, this.words[s] |= 67108863 & i, o >= 18 ? (o -= 18, s += 1, this.words[s] |= i >>> 26) : o += 8;
                    this._strip()
                }, o.prototype._parseBase = function (t, e, r) {
                    this.words = [0], this.length = 1;
                    for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
                    n--, i = i / e | 0;
                    for (var o = t.length - r, s = o % n, a = Math.min(o, o - s) + r, u = 0, f = r; f < a; f += n) u = c(t, f, f + n, e), this.imuln(i), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
                    if (0 !== s) {
                        var h = 1;
                        for (u = c(t, f, t.length, e), f = 0; f < s; f++) h *= e;
                        this.imuln(h), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u)
                    }
                    this._strip()
                }, o.prototype.copy = function (t) {
                    t.words = new Array(this.length);
                    for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                    t.length = this.length, t.negative = this.negative, t.red = this.red
                }, o.prototype._move = function (t) {
                    f(t, this)
                }, o.prototype.clone = function () {
                    var t = new o(null);
                    return this.copy(t), t
                }, o.prototype._expand = function (t) {
                    for (; this.length < t;) this.words[this.length++] = 0;
                    return this
                }, o.prototype._strip = function () {
                    for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                    return this._normSign()
                }, o.prototype._normSign = function () {
                    return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                }, "undefined" != typeof Symbol && "function" == typeof Symbol.for) try {
                    o.prototype[Symbol.for("nodejs.util.inspect.custom")] = h
                } catch (t) {
                    o.prototype.inspect = h
                } else o.prototype.inspect = h;

                function h() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                }

                var d = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    l = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    p = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                function b(t, e, r) {
                    r.negative = e.negative ^ t.negative;
                    var n = t.length + e.length | 0;
                    r.length = n, n = n - 1 | 0;
                    var i = 0 | t.words[0], o = 0 | e.words[0], s = i * o, a = 67108863 & s, u = s / 67108864 | 0;
                    r.words[0] = a;
                    for (var c = 1; c < n; c++) {
                        for (var f = u >>> 26, h = 67108863 & u, d = Math.min(c, e.length - 1), l = Math.max(0, c - t.length + 1); l <= d; l++) {
                            var p = c - l | 0;
                            f += (s = (i = 0 | t.words[p]) * (o = 0 | e.words[l]) + h) / 67108864 | 0, h = 67108863 & s
                        }
                        r.words[c] = 0 | h, u = 0 | f
                    }
                    return 0 !== u ? r.words[c] = 0 | u : r.length--, r._strip()
                }

                o.prototype.toString = function (t, e) {
                    var r;
                    if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                        r = "";
                        for (var i = 0, o = 0, s = 0; s < this.length; s++) {
                            var a = this.words[s], u = (16777215 & (a << i | o)).toString(16);
                            o = a >>> 24 - i & 16777215, (i += 2) >= 26 && (i -= 26, s--), r = 0 !== o || s !== this.length - 1 ? d[6 - u.length] + u + r : u + r
                        }
                        for (0 !== o && (r = o.toString(16) + r); r.length % e != 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    if (t === (0 | t) && t >= 2 && t <= 36) {
                        var c = l[t], f = p[t];
                        r = "";
                        var h = this.clone();
                        for (h.negative = 0; !h.isZero();) {
                            var b = h.modrn(f).toString(t);
                            r = (h = h.idivn(f)).isZero() ? b + r : d[c - b.length] + b + r
                        }
                        for (this.isZero() && (r = "0" + r); r.length % e != 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    n(!1, "Base should be between 2 and 36")
                }, o.prototype.toNumber = function () {
                    var t = this.words[0];
                    return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                }, o.prototype.toJSON = function () {
                    return this.toString(16, 2)
                }, s && (o.prototype.toBuffer = function (t, e) {
                    return this.toArrayLike(s, t, e)
                }), o.prototype.toArray = function (t, e) {
                    return this.toArrayLike(Array, t, e)
                }, o.prototype.toArrayLike = function (t, e, r) {
                    this._strip();
                    var i = this.byteLength(), o = r || Math.max(1, i);
                    n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0");
                    var s = function (t, e) {
                        return t.allocUnsafe ? t.allocUnsafe(e) : new t(e)
                    }(t, o);
                    return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](s, i), s
                }, o.prototype._toArrayLikeLE = function (t, e) {
                    for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
                        var s = this.words[i] << o | n;
                        t[r++] = 255 & s, r < t.length && (t[r++] = s >> 8 & 255), r < t.length && (t[r++] = s >> 16 & 255), 6 === o ? (r < t.length && (t[r++] = s >> 24 & 255), n = 0, o = 0) : (n = s >>> 24, o += 2)
                    }
                    if (r < t.length) for (t[r++] = n; r < t.length;) t[r++] = 0
                }, o.prototype._toArrayLikeBE = function (t, e) {
                    for (var r = t.length - 1, n = 0, i = 0, o = 0; i < this.length; i++) {
                        var s = this.words[i] << o | n;
                        t[r--] = 255 & s, r >= 0 && (t[r--] = s >> 8 & 255), r >= 0 && (t[r--] = s >> 16 & 255), 6 === o ? (r >= 0 && (t[r--] = s >> 24 & 255), n = 0, o = 0) : (n = s >>> 24, o += 2)
                    }
                    if (r >= 0) for (t[r--] = n; r >= 0;) t[r--] = 0
                }, Math.clz32 ? o.prototype._countBits = function (t) {
                    return 32 - Math.clz32(t)
                } : o.prototype._countBits = function (t) {
                    var e = t, r = 0;
                    return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, e >>>= 2), r + e
                }, o.prototype._zeroBits = function (t) {
                    if (0 === t) return 26;
                    var e = t, r = 0;
                    return 0 == (8191 & e) && (r += 13, e >>>= 13), 0 == (127 & e) && (r += 7, e >>>= 7), 0 == (15 & e) && (r += 4, e >>>= 4), 0 == (3 & e) && (r += 2, e >>>= 2), 0 == (1 & e) && r++, r
                }, o.prototype.bitLength = function () {
                    var t = this.words[this.length - 1], e = this._countBits(t);
                    return 26 * (this.length - 1) + e
                }, o.prototype.zeroBits = function () {
                    if (this.isZero()) return 0;
                    for (var t = 0, e = 0; e < this.length; e++) {
                        var r = this._zeroBits(this.words[e]);
                        if (t += r, 26 !== r) break
                    }
                    return t
                }, o.prototype.byteLength = function () {
                    return Math.ceil(this.bitLength() / 8)
                }, o.prototype.toTwos = function (t) {
                    return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                }, o.prototype.fromTwos = function (t) {
                    return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                }, o.prototype.isNeg = function () {
                    return 0 !== this.negative
                }, o.prototype.neg = function () {
                    return this.clone().ineg()
                }, o.prototype.ineg = function () {
                    return this.isZero() || (this.negative ^= 1), this
                }, o.prototype.iuor = function (t) {
                    for (; this.length < t.length;) this.words[this.length++] = 0;
                    for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                    return this._strip()
                }, o.prototype.ior = function (t) {
                    return n(0 == (this.negative | t.negative)), this.iuor(t)
                }, o.prototype.or = function (t) {
                    return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                }, o.prototype.uor = function (t) {
                    return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                }, o.prototype.iuand = function (t) {
                    var e;
                    e = this.length > t.length ? t : this;
                    for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
                    return this.length = e.length, this._strip()
                }, o.prototype.iand = function (t) {
                    return n(0 == (this.negative | t.negative)), this.iuand(t)
                }, o.prototype.and = function (t) {
                    return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                }, o.prototype.uand = function (t) {
                    return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                }, o.prototype.iuxor = function (t) {
                    var e, r;
                    this.length > t.length ? (e = this, r = t) : (e = t, r = this);
                    for (var n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n];
                    if (this !== e) for (; n < e.length; n++) this.words[n] = e.words[n];
                    return this.length = e.length, this._strip()
                }, o.prototype.ixor = function (t) {
                    return n(0 == (this.negative | t.negative)), this.iuxor(t)
                }, o.prototype.xor = function (t) {
                    return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                }, o.prototype.uxor = function (t) {
                    return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                }, o.prototype.inotn = function (t) {
                    n("number" == typeof t && t >= 0);
                    var e = 0 | Math.ceil(t / 26), r = t % 26;
                    this._expand(e), r > 0 && e--;
                    for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
                    return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this._strip()
                }, o.prototype.notn = function (t) {
                    return this.clone().inotn(t)
                }, o.prototype.setn = function (t, e) {
                    n("number" == typeof t && t >= 0);
                    var r = t / 26 | 0, i = t % 26;
                    return this._expand(r + 1), this.words[r] = e ? this.words[r] | 1 << i : this.words[r] & ~(1 << i), this._strip()
                }, o.prototype.iadd = function (t) {
                    var e, r, n;
                    if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                    this.length > t.length ? (r = this, n = t) : (r = t, n = this);
                    for (var i = 0, o = 0; o < n.length; o++) e = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                    for (; 0 !== i && o < r.length; o++) e = (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                    if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++; else if (r !== this) for (; o < r.length; o++) this.words[o] = r.words[o];
                    return this
                }, o.prototype.add = function (t) {
                    var e;
                    return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                }, o.prototype.isub = function (t) {
                    if (0 !== t.negative) {
                        t.negative = 0;
                        var e = this.iadd(t);
                        return t.negative = 1, e._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                    var r, n, i = this.cmp(t);
                    if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    i > 0 ? (r = this, n = t) : (r = t, n = this);
                    for (var o = 0, s = 0; s < n.length; s++) o = (e = (0 | r.words[s]) - (0 | n.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
                    for (; 0 !== o && s < r.length; s++) o = (e = (0 | r.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
                    if (0 === o && s < r.length && r !== this) for (; s < r.length; s++) this.words[s] = r.words[s];
                    return this.length = Math.max(this.length, s), r !== this && (this.negative = 1), this._strip()
                }, o.prototype.sub = function (t) {
                    return this.clone().isub(t)
                };
                var g = function (t, e, r) {
                    var n, i, o, s = t.words, a = e.words, u = r.words, c = 0, f = 0 | s[0], h = 8191 & f, d = f >>> 13,
                        l = 0 | s[1], p = 8191 & l, b = l >>> 13, g = 0 | s[2], y = 8191 & g, m = g >>> 13,
                        w = 0 | s[3], v = 8191 & w, S = w >>> 13, M = 0 | s[4], _ = 8191 & M, A = M >>> 13,
                        k = 0 | s[5], E = 8191 & k, I = k >>> 13, B = 0 | s[6], x = 8191 & B, R = B >>> 13,
                        P = 0 | s[7], O = 8191 & P, T = P >>> 13, U = 0 | s[8], L = 8191 & U, N = U >>> 13,
                        z = 0 | s[9], C = 8191 & z, q = z >>> 13, W = 0 | a[0], j = 8191 & W, K = W >>> 13,
                        F = 0 | a[1], D = 8191 & F, $ = F >>> 13, J = 0 | a[2], V = 8191 & J, H = J >>> 13,
                        G = 0 | a[3], Z = 8191 & G, Y = G >>> 13, X = 0 | a[4], Q = 8191 & X, tt = X >>> 13,
                        et = 0 | a[5], rt = 8191 & et, nt = et >>> 13, it = 0 | a[6], ot = 8191 & it, st = it >>> 13,
                        at = 0 | a[7], ut = 8191 & at, ct = at >>> 13, ft = 0 | a[8], ht = 8191 & ft, dt = ft >>> 13,
                        lt = 0 | a[9], pt = 8191 & lt, bt = lt >>> 13;
                    r.negative = t.negative ^ e.negative, r.length = 19;
                    var gt = (c + (n = Math.imul(h, j)) | 0) + ((8191 & (i = (i = Math.imul(h, K)) + Math.imul(d, j) | 0)) << 13) | 0;
                    c = ((o = Math.imul(d, K)) + (i >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, n = Math.imul(p, j), i = (i = Math.imul(p, K)) + Math.imul(b, j) | 0, o = Math.imul(b, K);
                    var yt = (c + (n = n + Math.imul(h, D) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, $) | 0) + Math.imul(d, D) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, $) | 0) + (i >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, n = Math.imul(y, j), i = (i = Math.imul(y, K)) + Math.imul(m, j) | 0, o = Math.imul(m, K), n = n + Math.imul(p, D) | 0, i = (i = i + Math.imul(p, $) | 0) + Math.imul(b, D) | 0, o = o + Math.imul(b, $) | 0;
                    var mt = (c + (n = n + Math.imul(h, V) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, H) | 0) + Math.imul(d, V) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, H) | 0) + (i >>> 13) | 0) + (mt >>> 26) | 0, mt &= 67108863, n = Math.imul(v, j), i = (i = Math.imul(v, K)) + Math.imul(S, j) | 0, o = Math.imul(S, K), n = n + Math.imul(y, D) | 0, i = (i = i + Math.imul(y, $) | 0) + Math.imul(m, D) | 0, o = o + Math.imul(m, $) | 0, n = n + Math.imul(p, V) | 0, i = (i = i + Math.imul(p, H) | 0) + Math.imul(b, V) | 0, o = o + Math.imul(b, H) | 0;
                    var wt = (c + (n = n + Math.imul(h, Z) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, Y) | 0) + Math.imul(d, Z) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, Y) | 0) + (i >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, n = Math.imul(_, j), i = (i = Math.imul(_, K)) + Math.imul(A, j) | 0, o = Math.imul(A, K), n = n + Math.imul(v, D) | 0, i = (i = i + Math.imul(v, $) | 0) + Math.imul(S, D) | 0, o = o + Math.imul(S, $) | 0, n = n + Math.imul(y, V) | 0, i = (i = i + Math.imul(y, H) | 0) + Math.imul(m, V) | 0, o = o + Math.imul(m, H) | 0, n = n + Math.imul(p, Z) | 0, i = (i = i + Math.imul(p, Y) | 0) + Math.imul(b, Z) | 0, o = o + Math.imul(b, Y) | 0;
                    var vt = (c + (n = n + Math.imul(h, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, tt) | 0) + Math.imul(d, Q) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, tt) | 0) + (i >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, n = Math.imul(E, j), i = (i = Math.imul(E, K)) + Math.imul(I, j) | 0, o = Math.imul(I, K), n = n + Math.imul(_, D) | 0, i = (i = i + Math.imul(_, $) | 0) + Math.imul(A, D) | 0, o = o + Math.imul(A, $) | 0, n = n + Math.imul(v, V) | 0, i = (i = i + Math.imul(v, H) | 0) + Math.imul(S, V) | 0, o = o + Math.imul(S, H) | 0, n = n + Math.imul(y, Z) | 0, i = (i = i + Math.imul(y, Y) | 0) + Math.imul(m, Z) | 0, o = o + Math.imul(m, Y) | 0, n = n + Math.imul(p, Q) | 0, i = (i = i + Math.imul(p, tt) | 0) + Math.imul(b, Q) | 0, o = o + Math.imul(b, tt) | 0;
                    var St = (c + (n = n + Math.imul(h, rt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, nt) | 0) + Math.imul(d, rt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, nt) | 0) + (i >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n = Math.imul(x, j), i = (i = Math.imul(x, K)) + Math.imul(R, j) | 0, o = Math.imul(R, K), n = n + Math.imul(E, D) | 0, i = (i = i + Math.imul(E, $) | 0) + Math.imul(I, D) | 0, o = o + Math.imul(I, $) | 0, n = n + Math.imul(_, V) | 0, i = (i = i + Math.imul(_, H) | 0) + Math.imul(A, V) | 0, o = o + Math.imul(A, H) | 0, n = n + Math.imul(v, Z) | 0, i = (i = i + Math.imul(v, Y) | 0) + Math.imul(S, Z) | 0, o = o + Math.imul(S, Y) | 0, n = n + Math.imul(y, Q) | 0, i = (i = i + Math.imul(y, tt) | 0) + Math.imul(m, Q) | 0, o = o + Math.imul(m, tt) | 0, n = n + Math.imul(p, rt) | 0, i = (i = i + Math.imul(p, nt) | 0) + Math.imul(b, rt) | 0, o = o + Math.imul(b, nt) | 0;
                    var Mt = (c + (n = n + Math.imul(h, ot) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, st) | 0) + Math.imul(d, ot) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, st) | 0) + (i >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, n = Math.imul(O, j), i = (i = Math.imul(O, K)) + Math.imul(T, j) | 0, o = Math.imul(T, K), n = n + Math.imul(x, D) | 0, i = (i = i + Math.imul(x, $) | 0) + Math.imul(R, D) | 0, o = o + Math.imul(R, $) | 0, n = n + Math.imul(E, V) | 0, i = (i = i + Math.imul(E, H) | 0) + Math.imul(I, V) | 0, o = o + Math.imul(I, H) | 0, n = n + Math.imul(_, Z) | 0, i = (i = i + Math.imul(_, Y) | 0) + Math.imul(A, Z) | 0, o = o + Math.imul(A, Y) | 0, n = n + Math.imul(v, Q) | 0, i = (i = i + Math.imul(v, tt) | 0) + Math.imul(S, Q) | 0, o = o + Math.imul(S, tt) | 0, n = n + Math.imul(y, rt) | 0, i = (i = i + Math.imul(y, nt) | 0) + Math.imul(m, rt) | 0, o = o + Math.imul(m, nt) | 0, n = n + Math.imul(p, ot) | 0, i = (i = i + Math.imul(p, st) | 0) + Math.imul(b, ot) | 0, o = o + Math.imul(b, st) | 0;
                    var _t = (c + (n = n + Math.imul(h, ut) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ct) | 0) + Math.imul(d, ut) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, ct) | 0) + (i >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, n = Math.imul(L, j), i = (i = Math.imul(L, K)) + Math.imul(N, j) | 0, o = Math.imul(N, K), n = n + Math.imul(O, D) | 0, i = (i = i + Math.imul(O, $) | 0) + Math.imul(T, D) | 0, o = o + Math.imul(T, $) | 0, n = n + Math.imul(x, V) | 0, i = (i = i + Math.imul(x, H) | 0) + Math.imul(R, V) | 0, o = o + Math.imul(R, H) | 0, n = n + Math.imul(E, Z) | 0, i = (i = i + Math.imul(E, Y) | 0) + Math.imul(I, Z) | 0, o = o + Math.imul(I, Y) | 0, n = n + Math.imul(_, Q) | 0, i = (i = i + Math.imul(_, tt) | 0) + Math.imul(A, Q) | 0, o = o + Math.imul(A, tt) | 0, n = n + Math.imul(v, rt) | 0, i = (i = i + Math.imul(v, nt) | 0) + Math.imul(S, rt) | 0, o = o + Math.imul(S, nt) | 0, n = n + Math.imul(y, ot) | 0, i = (i = i + Math.imul(y, st) | 0) + Math.imul(m, ot) | 0, o = o + Math.imul(m, st) | 0, n = n + Math.imul(p, ut) | 0, i = (i = i + Math.imul(p, ct) | 0) + Math.imul(b, ut) | 0, o = o + Math.imul(b, ct) | 0;
                    var At = (c + (n = n + Math.imul(h, ht) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, dt) | 0) + Math.imul(d, ht) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, dt) | 0) + (i >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, n = Math.imul(C, j), i = (i = Math.imul(C, K)) + Math.imul(q, j) | 0, o = Math.imul(q, K), n = n + Math.imul(L, D) | 0, i = (i = i + Math.imul(L, $) | 0) + Math.imul(N, D) | 0, o = o + Math.imul(N, $) | 0, n = n + Math.imul(O, V) | 0, i = (i = i + Math.imul(O, H) | 0) + Math.imul(T, V) | 0, o = o + Math.imul(T, H) | 0, n = n + Math.imul(x, Z) | 0, i = (i = i + Math.imul(x, Y) | 0) + Math.imul(R, Z) | 0, o = o + Math.imul(R, Y) | 0, n = n + Math.imul(E, Q) | 0, i = (i = i + Math.imul(E, tt) | 0) + Math.imul(I, Q) | 0, o = o + Math.imul(I, tt) | 0, n = n + Math.imul(_, rt) | 0, i = (i = i + Math.imul(_, nt) | 0) + Math.imul(A, rt) | 0, o = o + Math.imul(A, nt) | 0, n = n + Math.imul(v, ot) | 0, i = (i = i + Math.imul(v, st) | 0) + Math.imul(S, ot) | 0, o = o + Math.imul(S, st) | 0, n = n + Math.imul(y, ut) | 0, i = (i = i + Math.imul(y, ct) | 0) + Math.imul(m, ut) | 0, o = o + Math.imul(m, ct) | 0, n = n + Math.imul(p, ht) | 0, i = (i = i + Math.imul(p, dt) | 0) + Math.imul(b, ht) | 0, o = o + Math.imul(b, dt) | 0;
                    var kt = (c + (n = n + Math.imul(h, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, bt) | 0) + Math.imul(d, pt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, bt) | 0) + (i >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, n = Math.imul(C, D), i = (i = Math.imul(C, $)) + Math.imul(q, D) | 0, o = Math.imul(q, $), n = n + Math.imul(L, V) | 0, i = (i = i + Math.imul(L, H) | 0) + Math.imul(N, V) | 0, o = o + Math.imul(N, H) | 0, n = n + Math.imul(O, Z) | 0, i = (i = i + Math.imul(O, Y) | 0) + Math.imul(T, Z) | 0, o = o + Math.imul(T, Y) | 0, n = n + Math.imul(x, Q) | 0, i = (i = i + Math.imul(x, tt) | 0) + Math.imul(R, Q) | 0, o = o + Math.imul(R, tt) | 0, n = n + Math.imul(E, rt) | 0, i = (i = i + Math.imul(E, nt) | 0) + Math.imul(I, rt) | 0, o = o + Math.imul(I, nt) | 0, n = n + Math.imul(_, ot) | 0, i = (i = i + Math.imul(_, st) | 0) + Math.imul(A, ot) | 0, o = o + Math.imul(A, st) | 0, n = n + Math.imul(v, ut) | 0, i = (i = i + Math.imul(v, ct) | 0) + Math.imul(S, ut) | 0, o = o + Math.imul(S, ct) | 0, n = n + Math.imul(y, ht) | 0, i = (i = i + Math.imul(y, dt) | 0) + Math.imul(m, ht) | 0, o = o + Math.imul(m, dt) | 0;
                    var Et = (c + (n = n + Math.imul(p, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, bt) | 0) + Math.imul(b, pt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(b, bt) | 0) + (i >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n = Math.imul(C, V), i = (i = Math.imul(C, H)) + Math.imul(q, V) | 0, o = Math.imul(q, H), n = n + Math.imul(L, Z) | 0, i = (i = i + Math.imul(L, Y) | 0) + Math.imul(N, Z) | 0, o = o + Math.imul(N, Y) | 0, n = n + Math.imul(O, Q) | 0, i = (i = i + Math.imul(O, tt) | 0) + Math.imul(T, Q) | 0, o = o + Math.imul(T, tt) | 0, n = n + Math.imul(x, rt) | 0, i = (i = i + Math.imul(x, nt) | 0) + Math.imul(R, rt) | 0, o = o + Math.imul(R, nt) | 0, n = n + Math.imul(E, ot) | 0, i = (i = i + Math.imul(E, st) | 0) + Math.imul(I, ot) | 0, o = o + Math.imul(I, st) | 0, n = n + Math.imul(_, ut) | 0, i = (i = i + Math.imul(_, ct) | 0) + Math.imul(A, ut) | 0, o = o + Math.imul(A, ct) | 0, n = n + Math.imul(v, ht) | 0, i = (i = i + Math.imul(v, dt) | 0) + Math.imul(S, ht) | 0, o = o + Math.imul(S, dt) | 0;
                    var It = (c + (n = n + Math.imul(y, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(y, bt) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(m, bt) | 0) + (i >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, n = Math.imul(C, Z), i = (i = Math.imul(C, Y)) + Math.imul(q, Z) | 0, o = Math.imul(q, Y), n = n + Math.imul(L, Q) | 0, i = (i = i + Math.imul(L, tt) | 0) + Math.imul(N, Q) | 0, o = o + Math.imul(N, tt) | 0, n = n + Math.imul(O, rt) | 0, i = (i = i + Math.imul(O, nt) | 0) + Math.imul(T, rt) | 0, o = o + Math.imul(T, nt) | 0, n = n + Math.imul(x, ot) | 0, i = (i = i + Math.imul(x, st) | 0) + Math.imul(R, ot) | 0, o = o + Math.imul(R, st) | 0, n = n + Math.imul(E, ut) | 0, i = (i = i + Math.imul(E, ct) | 0) + Math.imul(I, ut) | 0, o = o + Math.imul(I, ct) | 0, n = n + Math.imul(_, ht) | 0, i = (i = i + Math.imul(_, dt) | 0) + Math.imul(A, ht) | 0, o = o + Math.imul(A, dt) | 0;
                    var Bt = (c + (n = n + Math.imul(v, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(v, bt) | 0) + Math.imul(S, pt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(S, bt) | 0) + (i >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, n = Math.imul(C, Q), i = (i = Math.imul(C, tt)) + Math.imul(q, Q) | 0, o = Math.imul(q, tt), n = n + Math.imul(L, rt) | 0, i = (i = i + Math.imul(L, nt) | 0) + Math.imul(N, rt) | 0, o = o + Math.imul(N, nt) | 0, n = n + Math.imul(O, ot) | 0, i = (i = i + Math.imul(O, st) | 0) + Math.imul(T, ot) | 0, o = o + Math.imul(T, st) | 0, n = n + Math.imul(x, ut) | 0, i = (i = i + Math.imul(x, ct) | 0) + Math.imul(R, ut) | 0, o = o + Math.imul(R, ct) | 0, n = n + Math.imul(E, ht) | 0, i = (i = i + Math.imul(E, dt) | 0) + Math.imul(I, ht) | 0, o = o + Math.imul(I, dt) | 0;
                    var xt = (c + (n = n + Math.imul(_, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(_, bt) | 0) + Math.imul(A, pt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(A, bt) | 0) + (i >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n = Math.imul(C, rt), i = (i = Math.imul(C, nt)) + Math.imul(q, rt) | 0, o = Math.imul(q, nt), n = n + Math.imul(L, ot) | 0, i = (i = i + Math.imul(L, st) | 0) + Math.imul(N, ot) | 0, o = o + Math.imul(N, st) | 0, n = n + Math.imul(O, ut) | 0, i = (i = i + Math.imul(O, ct) | 0) + Math.imul(T, ut) | 0, o = o + Math.imul(T, ct) | 0, n = n + Math.imul(x, ht) | 0, i = (i = i + Math.imul(x, dt) | 0) + Math.imul(R, ht) | 0, o = o + Math.imul(R, dt) | 0;
                    var Rt = (c + (n = n + Math.imul(E, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(E, bt) | 0) + Math.imul(I, pt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(I, bt) | 0) + (i >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, n = Math.imul(C, ot), i = (i = Math.imul(C, st)) + Math.imul(q, ot) | 0, o = Math.imul(q, st), n = n + Math.imul(L, ut) | 0, i = (i = i + Math.imul(L, ct) | 0) + Math.imul(N, ut) | 0, o = o + Math.imul(N, ct) | 0, n = n + Math.imul(O, ht) | 0, i = (i = i + Math.imul(O, dt) | 0) + Math.imul(T, ht) | 0, o = o + Math.imul(T, dt) | 0;
                    var Pt = (c + (n = n + Math.imul(x, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(x, bt) | 0) + Math.imul(R, pt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(R, bt) | 0) + (i >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, n = Math.imul(C, ut), i = (i = Math.imul(C, ct)) + Math.imul(q, ut) | 0, o = Math.imul(q, ct), n = n + Math.imul(L, ht) | 0, i = (i = i + Math.imul(L, dt) | 0) + Math.imul(N, ht) | 0, o = o + Math.imul(N, dt) | 0;
                    var Ot = (c + (n = n + Math.imul(O, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(O, bt) | 0) + Math.imul(T, pt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(T, bt) | 0) + (i >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, n = Math.imul(C, ht), i = (i = Math.imul(C, dt)) + Math.imul(q, ht) | 0, o = Math.imul(q, dt);
                    var Tt = (c + (n = n + Math.imul(L, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(L, bt) | 0) + Math.imul(N, pt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(N, bt) | 0) + (i >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863;
                    var Ut = (c + (n = Math.imul(C, pt)) | 0) + ((8191 & (i = (i = Math.imul(C, bt)) + Math.imul(q, pt) | 0)) << 13) | 0;
                    return c = ((o = Math.imul(q, bt)) + (i >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, u[0] = gt, u[1] = yt, u[2] = mt, u[3] = wt, u[4] = vt, u[5] = St, u[6] = Mt, u[7] = _t, u[8] = At, u[9] = kt, u[10] = Et, u[11] = It, u[12] = Bt, u[13] = xt, u[14] = Rt, u[15] = Pt, u[16] = Ot, u[17] = Tt, u[18] = Ut, 0 !== c && (u[19] = c, r.length++), r
                };

                function y(t, e, r) {
                    r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
                    for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                        var s = i;
                        i = 0;
                        for (var a = 67108863 & n, u = Math.min(o, e.length - 1), c = Math.max(0, o - t.length + 1); c <= u; c++) {
                            var f = o - c, h = (0 | t.words[f]) * (0 | e.words[c]), d = 67108863 & h;
                            a = 67108863 & (d = d + a | 0), i += (s = (s = s + (h / 67108864 | 0) | 0) + (d >>> 26) | 0) >>> 26, s &= 67108863
                        }
                        r.words[o] = a, n = s, s = i
                    }
                    return 0 !== n ? r.words[o] = n : r.length--, r._strip()
                }

                function m(t, e, r) {
                    return y(t, e, r)
                }

                function w(t, e) {
                    this.x = t, this.y = e
                }

                Math.imul || (g = b), o.prototype.mulTo = function (t, e) {
                    var r = this.length + t.length;
                    return 10 === this.length && 10 === t.length ? g(this, t, e) : r < 63 ? b(this, t, e) : r < 1024 ? y(this, t, e) : m(this, t, e)
                }, w.prototype.makeRBT = function (t) {
                    for (var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0; n < t; n++) e[n] = this.revBin(n, r, t);
                    return e
                }, w.prototype.revBin = function (t, e, r) {
                    if (0 === t || t === r - 1) return t;
                    for (var n = 0, i = 0; i < e; i++) n |= (1 & t) << e - i - 1, t >>= 1;
                    return n
                }, w.prototype.permute = function (t, e, r, n, i, o) {
                    for (var s = 0; s < o; s++) n[s] = e[t[s]], i[s] = r[t[s]]
                }, w.prototype.transform = function (t, e, r, n, i, o) {
                    this.permute(o, t, e, r, n, i);
                    for (var s = 1; s < i; s <<= 1) for (var a = s << 1, u = Math.cos(2 * Math.PI / a), c = Math.sin(2 * Math.PI / a), f = 0; f < i; f += a) for (var h = u, d = c, l = 0; l < s; l++) {
                        var p = r[f + l], b = n[f + l], g = r[f + l + s], y = n[f + l + s], m = h * g - d * y;
                        y = h * y + d * g, g = m, r[f + l] = p + g, n[f + l] = b + y, r[f + l + s] = p - g, n[f + l + s] = b - y, l !== a && (m = u * h - c * d, d = u * d + c * h, h = m)
                    }
                }, w.prototype.guessLen13b = function (t, e) {
                    var r = 1 | Math.max(e, t), n = 1 & r, i = 0;
                    for (r = r / 2 | 0; r; r >>>= 1) i++;
                    return 1 << i + 1 + n
                }, w.prototype.conjugate = function (t, e, r) {
                    if (!(r <= 1)) for (var n = 0; n < r / 2; n++) {
                        var i = t[n];
                        t[n] = t[r - n - 1], t[r - n - 1] = i, i = e[n], e[n] = -e[r - n - 1], e[r - n - 1] = -i
                    }
                }, w.prototype.normalize13b = function (t, e) {
                    for (var r = 0, n = 0; n < e / 2; n++) {
                        var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
                        t[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0
                    }
                    return t
                }, w.prototype.convert13b = function (t, e, r, i) {
                    for (var o = 0, s = 0; s < e; s++) o += 0 | t[s], r[2 * s] = 8191 & o, o >>>= 13, r[2 * s + 1] = 8191 & o, o >>>= 13;
                    for (s = 2 * e; s < i; ++s) r[s] = 0;
                    n(0 === o), n(0 == (-8192 & o))
                }, w.prototype.stub = function (t) {
                    for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
                    return e
                }, w.prototype.mulp = function (t, e, r) {
                    var n = 2 * this.guessLen13b(t.length, e.length), i = this.makeRBT(n), o = this.stub(n),
                        s = new Array(n), a = new Array(n), u = new Array(n), c = new Array(n), f = new Array(n),
                        h = new Array(n), d = r.words;
                    d.length = n, this.convert13b(t.words, t.length, s, n), this.convert13b(e.words, e.length, c, n), this.transform(s, o, a, u, n, i), this.transform(c, o, f, h, n, i);
                    for (var l = 0; l < n; l++) {
                        var p = a[l] * f[l] - u[l] * h[l];
                        u[l] = a[l] * h[l] + u[l] * f[l], a[l] = p
                    }
                    return this.conjugate(a, u, n), this.transform(a, u, d, o, n, i), this.conjugate(d, o, n), this.normalize13b(d, n), r.negative = t.negative ^ e.negative, r.length = t.length + e.length, r._strip()
                }, o.prototype.mul = function (t) {
                    var e = new o(null);
                    return e.words = new Array(this.length + t.length), this.mulTo(t, e)
                }, o.prototype.mulf = function (t) {
                    var e = new o(null);
                    return e.words = new Array(this.length + t.length), m(this, t, e)
                }, o.prototype.imul = function (t) {
                    return this.clone().mulTo(t, this)
                }, o.prototype.imuln = function (t) {
                    var e = t < 0;
                    e && (t = -t), n("number" == typeof t), n(t < 67108864);
                    for (var r = 0, i = 0; i < this.length; i++) {
                        var o = (0 | this.words[i]) * t, s = (67108863 & o) + (67108863 & r);
                        r >>= 26, r += o / 67108864 | 0, r += s >>> 26, this.words[i] = 67108863 & s
                    }
                    return 0 !== r && (this.words[i] = r, this.length++), e ? this.ineg() : this
                }, o.prototype.muln = function (t) {
                    return this.clone().imuln(t)
                }, o.prototype.sqr = function () {
                    return this.mul(this)
                }, o.prototype.isqr = function () {
                    return this.imul(this.clone())
                }, o.prototype.pow = function (t) {
                    var e = function (t) {
                        for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                            var n = r / 26 | 0, i = r % 26;
                            e[r] = t.words[n] >>> i & 1
                        }
                        return e
                    }(t);
                    if (0 === e.length) return new o(1);
                    for (var r = this, n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr()) ;
                    if (++n < e.length) for (var i = r.sqr(); n < e.length; n++, i = i.sqr()) 0 !== e[n] && (r = r.mul(i));
                    return r
                }, o.prototype.iushln = function (t) {
                    n("number" == typeof t && t >= 0);
                    var e, r = t % 26, i = (t - r) / 26, o = 67108863 >>> 26 - r << 26 - r;
                    if (0 !== r) {
                        var s = 0;
                        for (e = 0; e < this.length; e++) {
                            var a = this.words[e] & o, u = (0 | this.words[e]) - a << r;
                            this.words[e] = u | s, s = a >>> 26 - r
                        }
                        s && (this.words[e] = s, this.length++)
                    }
                    if (0 !== i) {
                        for (e = this.length - 1; e >= 0; e--) this.words[e + i] = this.words[e];
                        for (e = 0; e < i; e++) this.words[e] = 0;
                        this.length += i
                    }
                    return this._strip()
                }, o.prototype.ishln = function (t) {
                    return n(0 === this.negative), this.iushln(t)
                }, o.prototype.iushrn = function (t, e, r) {
                    var i;
                    n("number" == typeof t && t >= 0), i = e ? (e - e % 26) / 26 : 0;
                    var o = t % 26, s = Math.min((t - o) / 26, this.length), a = 67108863 ^ 67108863 >>> o << o, u = r;
                    if (i -= s, i = Math.max(0, i), u) {
                        for (var c = 0; c < s; c++) u.words[c] = this.words[c];
                        u.length = s
                    }
                    if (0 === s) ; else if (this.length > s) for (this.length -= s, c = 0; c < this.length; c++) this.words[c] = this.words[c + s]; else this.words[0] = 0, this.length = 1;
                    var f = 0;
                    for (c = this.length - 1; c >= 0 && (0 !== f || c >= i); c--) {
                        var h = 0 | this.words[c];
                        this.words[c] = f << 26 - o | h >>> o, f = h & a
                    }
                    return u && 0 !== f && (u.words[u.length++] = f), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                }, o.prototype.ishrn = function (t, e, r) {
                    return n(0 === this.negative), this.iushrn(t, e, r)
                }, o.prototype.shln = function (t) {
                    return this.clone().ishln(t)
                }, o.prototype.ushln = function (t) {
                    return this.clone().iushln(t)
                }, o.prototype.shrn = function (t) {
                    return this.clone().ishrn(t)
                }, o.prototype.ushrn = function (t) {
                    return this.clone().iushrn(t)
                }, o.prototype.testn = function (t) {
                    n("number" == typeof t && t >= 0);
                    var e = t % 26, r = (t - e) / 26, i = 1 << e;
                    return !(this.length <= r || !(this.words[r] & i))
                }, o.prototype.imaskn = function (t) {
                    n("number" == typeof t && t >= 0);
                    var e = t % 26, r = (t - e) / 26;
                    if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) return this;
                    if (0 !== e && r++, this.length = Math.min(r, this.length), 0 !== e) {
                        var i = 67108863 ^ 67108863 >>> e << e;
                        this.words[this.length - 1] &= i
                    }
                    return this._strip()
                }, o.prototype.maskn = function (t) {
                    return this.clone().imaskn(t)
                }, o.prototype.iaddn = function (t) {
                    return n("number" == typeof t), n(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                }, o.prototype._iaddn = function (t) {
                    this.words[0] += t;
                    for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                    return this.length = Math.max(this.length, e + 1), this
                }, o.prototype.isubn = function (t) {
                    if (n("number" == typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                    if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1; else for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
                    return this._strip()
                }, o.prototype.addn = function (t) {
                    return this.clone().iaddn(t)
                }, o.prototype.subn = function (t) {
                    return this.clone().isubn(t)
                }, o.prototype.iabs = function () {
                    return this.negative = 0, this
                }, o.prototype.abs = function () {
                    return this.clone().iabs()
                }, o.prototype._ishlnsubmul = function (t, e, r) {
                    var i, o, s = t.length + r;
                    this._expand(s);
                    var a = 0;
                    for (i = 0; i < t.length; i++) {
                        o = (0 | this.words[i + r]) + a;
                        var u = (0 | t.words[i]) * e;
                        a = ((o -= 67108863 & u) >> 26) - (u / 67108864 | 0), this.words[i + r] = 67108863 & o
                    }
                    for (; i < this.length - r; i++) a = (o = (0 | this.words[i + r]) + a) >> 26, this.words[i + r] = 67108863 & o;
                    if (0 === a) return this._strip();
                    for (n(-1 === a), a = 0, i = 0; i < this.length; i++) a = (o = -(0 | this.words[i]) + a) >> 26, this.words[i] = 67108863 & o;
                    return this.negative = 1, this._strip()
                }, o.prototype._wordDiv = function (t, e) {
                    var r = (this.length, t.length), n = this.clone(), i = t, s = 0 | i.words[i.length - 1];
                    0 != (r = 26 - this._countBits(s)) && (i = i.ushln(r), n.iushln(r), s = 0 | i.words[i.length - 1]);
                    var a, u = n.length - i.length;
                    if ("mod" !== e) {
                        (a = new o(null)).length = u + 1, a.words = new Array(a.length);
                        for (var c = 0; c < a.length; c++) a.words[c] = 0
                    }
                    var f = n.clone()._ishlnsubmul(i, 1, u);
                    0 === f.negative && (n = f, a && (a.words[u] = 1));
                    for (var h = u - 1; h >= 0; h--) {
                        var d = 67108864 * (0 | n.words[i.length + h]) + (0 | n.words[i.length + h - 1]);
                        for (d = Math.min(d / s | 0, 67108863), n._ishlnsubmul(i, d, h); 0 !== n.negative;) d--, n.negative = 0, n._ishlnsubmul(i, 1, h), n.isZero() || (n.negative ^= 1);
                        a && (a.words[h] = d)
                    }
                    return a && a._strip(), n._strip(), "div" !== e && 0 !== r && n.iushrn(r), {div: a || null, mod: n}
                }, o.prototype.divmod = function (t, e, r) {
                    return n(!t.isZero()), this.isZero() ? {
                        div: new o(0),
                        mod: new o(0)
                    } : 0 !== this.negative && 0 === t.negative ? (a = this.neg().divmod(t, e), "mod" !== e && (i = a.div.neg()), "div" !== e && (s = a.mod.neg(), r && 0 !== s.negative && s.iadd(t)), {
                        div: i,
                        mod: s
                    }) : 0 === this.negative && 0 !== t.negative ? (a = this.divmod(t.neg(), e), "mod" !== e && (i = a.div.neg()), {
                        div: i,
                        mod: a.mod
                    }) : 0 != (this.negative & t.negative) ? (a = this.neg().divmod(t.neg(), e), "div" !== e && (s = a.mod.neg(), r && 0 !== s.negative && s.isub(t)), {
                        div: a.div,
                        mod: s
                    }) : t.length > this.length || this.cmp(t) < 0 ? {
                        div: new o(0),
                        mod: this
                    } : 1 === t.length ? "div" === e ? {
                        div: this.divn(t.words[0]),
                        mod: null
                    } : "mod" === e ? {div: null, mod: new o(this.modrn(t.words[0]))} : {
                        div: this.divn(t.words[0]),
                        mod: new o(this.modrn(t.words[0]))
                    } : this._wordDiv(t, e);
                    var i, s, a
                }, o.prototype.div = function (t) {
                    return this.divmod(t, "div", !1).div
                }, o.prototype.mod = function (t) {
                    return this.divmod(t, "mod", !1).mod
                }, o.prototype.umod = function (t) {
                    return this.divmod(t, "mod", !0).mod
                }, o.prototype.divRound = function (t) {
                    var e = this.divmod(t);
                    if (e.mod.isZero()) return e.div;
                    var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod, n = t.ushrn(1), i = t.andln(1), o = r.cmp(n);
                    return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                }, o.prototype.modrn = function (t) {
                    var e = t < 0;
                    e && (t = -t), n(t <= 67108863);
                    for (var r = (1 << 26) % t, i = 0, o = this.length - 1; o >= 0; o--) i = (r * i + (0 | this.words[o])) % t;
                    return e ? -i : i
                }, o.prototype.modn = function (t) {
                    return this.modrn(t)
                }, o.prototype.idivn = function (t) {
                    var e = t < 0;
                    e && (t = -t), n(t <= 67108863);
                    for (var r = 0, i = this.length - 1; i >= 0; i--) {
                        var o = (0 | this.words[i]) + 67108864 * r;
                        this.words[i] = o / t | 0, r = o % t
                    }
                    return this._strip(), e ? this.ineg() : this
                }, o.prototype.divn = function (t) {
                    return this.clone().idivn(t)
                }, o.prototype.egcd = function (t) {
                    n(0 === t.negative), n(!t.isZero());
                    var e = this, r = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var i = new o(1), s = new o(0), a = new o(0), u = new o(1), c = 0; e.isEven() && r.isEven();) e.iushrn(1), r.iushrn(1), ++c;
                    for (var f = r.clone(), h = e.clone(); !e.isZero();) {
                        for (var d = 0, l = 1; 0 == (e.words[0] & l) && d < 26; ++d, l <<= 1) ;
                        if (d > 0) for (e.iushrn(d); d-- > 0;) (i.isOdd() || s.isOdd()) && (i.iadd(f), s.isub(h)), i.iushrn(1), s.iushrn(1);
                        for (var p = 0, b = 1; 0 == (r.words[0] & b) && p < 26; ++p, b <<= 1) ;
                        if (p > 0) for (r.iushrn(p); p-- > 0;) (a.isOdd() || u.isOdd()) && (a.iadd(f), u.isub(h)), a.iushrn(1), u.iushrn(1);
                        e.cmp(r) >= 0 ? (e.isub(r), i.isub(a), s.isub(u)) : (r.isub(e), a.isub(i), u.isub(s))
                    }
                    return {a, b: u, gcd: r.iushln(c)}
                }, o.prototype._invmp = function (t) {
                    n(0 === t.negative), n(!t.isZero());
                    var e = this, r = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var i, s = new o(1), a = new o(0), u = r.clone(); e.cmpn(1) > 0 && r.cmpn(1) > 0;) {
                        for (var c = 0, f = 1; 0 == (e.words[0] & f) && c < 26; ++c, f <<= 1) ;
                        if (c > 0) for (e.iushrn(c); c-- > 0;) s.isOdd() && s.iadd(u), s.iushrn(1);
                        for (var h = 0, d = 1; 0 == (r.words[0] & d) && h < 26; ++h, d <<= 1) ;
                        if (h > 0) for (r.iushrn(h); h-- > 0;) a.isOdd() && a.iadd(u), a.iushrn(1);
                        e.cmp(r) >= 0 ? (e.isub(r), s.isub(a)) : (r.isub(e), a.isub(s))
                    }
                    return (i = 0 === e.cmpn(1) ? s : a).cmpn(0) < 0 && i.iadd(t), i
                }, o.prototype.gcd = function (t) {
                    if (this.isZero()) return t.abs();
                    if (t.isZero()) return this.abs();
                    var e = this.clone(), r = t.clone();
                    e.negative = 0, r.negative = 0;
                    for (var n = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1);
                    for (; ;) {
                        for (; e.isEven();) e.iushrn(1);
                        for (; r.isEven();) r.iushrn(1);
                        var i = e.cmp(r);
                        if (i < 0) {
                            var o = e;
                            e = r, r = o
                        } else if (0 === i || 0 === r.cmpn(1)) break;
                        e.isub(r)
                    }
                    return r.iushln(n)
                }, o.prototype.invm = function (t) {
                    return this.egcd(t).a.umod(t)
                }, o.prototype.isEven = function () {
                    return 0 == (1 & this.words[0])
                }, o.prototype.isOdd = function () {
                    return 1 == (1 & this.words[0])
                }, o.prototype.andln = function (t) {
                    return this.words[0] & t
                }, o.prototype.bincn = function (t) {
                    n("number" == typeof t);
                    var e = t % 26, r = (t - e) / 26, i = 1 << e;
                    if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;
                    for (var o = i, s = r; 0 !== o && s < this.length; s++) {
                        var a = 0 | this.words[s];
                        o = (a += o) >>> 26, a &= 67108863, this.words[s] = a
                    }
                    return 0 !== o && (this.words[s] = o, this.length++), this
                }, o.prototype.isZero = function () {
                    return 1 === this.length && 0 === this.words[0]
                }, o.prototype.cmpn = function (t) {
                    var e, r = t < 0;
                    if (0 !== this.negative && !r) return -1;
                    if (0 === this.negative && r) return 1;
                    if (this._strip(), this.length > 1) e = 1; else {
                        r && (t = -t), n(t <= 67108863, "Number is too big");
                        var i = 0 | this.words[0];
                        e = i === t ? 0 : i < t ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -e : e
                }, o.prototype.cmp = function (t) {
                    if (0 !== this.negative && 0 === t.negative) return -1;
                    if (0 === this.negative && 0 !== t.negative) return 1;
                    var e = this.ucmp(t);
                    return 0 !== this.negative ? 0 | -e : e
                }, o.prototype.ucmp = function (t) {
                    if (this.length > t.length) return 1;
                    if (this.length < t.length) return -1;
                    for (var e = 0, r = this.length - 1; r >= 0; r--) {
                        var n = 0 | this.words[r], i = 0 | t.words[r];
                        if (n !== i) {
                            n < i ? e = -1 : n > i && (e = 1);
                            break
                        }
                    }
                    return e
                }, o.prototype.gtn = function (t) {
                    return 1 === this.cmpn(t)
                }, o.prototype.gt = function (t) {
                    return 1 === this.cmp(t)
                }, o.prototype.gten = function (t) {
                    return this.cmpn(t) >= 0
                }, o.prototype.gte = function (t) {
                    return this.cmp(t) >= 0
                }, o.prototype.ltn = function (t) {
                    return -1 === this.cmpn(t)
                }, o.prototype.lt = function (t) {
                    return -1 === this.cmp(t)
                }, o.prototype.lten = function (t) {
                    return this.cmpn(t) <= 0
                }, o.prototype.lte = function (t) {
                    return this.cmp(t) <= 0
                }, o.prototype.eqn = function (t) {
                    return 0 === this.cmpn(t)
                }, o.prototype.eq = function (t) {
                    return 0 === this.cmp(t)
                }, o.red = function (t) {
                    return new E(t)
                }, o.prototype.toRed = function (t) {
                    return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                }, o.prototype.fromRed = function () {
                    return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, o.prototype._forceRed = function (t) {
                    return this.red = t, this
                }, o.prototype.forceRed = function (t) {
                    return n(!this.red, "Already a number in reduction context"), this._forceRed(t)
                }, o.prototype.redAdd = function (t) {
                    return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                }, o.prototype.redIAdd = function (t) {
                    return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                }, o.prototype.redSub = function (t) {
                    return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                }, o.prototype.redISub = function (t) {
                    return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                }, o.prototype.redShl = function (t) {
                    return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                }, o.prototype.redMul = function (t) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                }, o.prototype.redIMul = function (t) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                }, o.prototype.redSqr = function () {
                    return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, o.prototype.redISqr = function () {
                    return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, o.prototype.redSqrt = function () {
                    return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, o.prototype.redInvm = function () {
                    return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, o.prototype.redNeg = function () {
                    return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, o.prototype.redPow = function (t) {
                    return n(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                };
                var v = {k256: null, p224: null, p192: null, p25519: null};

                function S(t, e) {
                    this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function M() {
                    S.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function _() {
                    S.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function A() {
                    S.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function k() {
                    S.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function E(t) {
                    if ("string" == typeof t) {
                        var e = o._prime(t);
                        this.m = e.p, this.prime = e
                    } else n(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                }

                function I(t) {
                    E.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }

                S.prototype._tmp = function () {
                    var t = new o(null);
                    return t.words = new Array(Math.ceil(this.n / 13)), t
                }, S.prototype.ireduce = function (t) {
                    var e, r = t;
                    do {
                        this.split(r, this.tmp), e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                    } while (e > this.n);
                    var n = e < this.n ? -1 : r.ucmp(this.p);
                    return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                }, S.prototype.split = function (t, e) {
                    t.iushrn(this.n, 0, e)
                }, S.prototype.imulK = function (t) {
                    return t.imul(this.k)
                }, i(M, S), M.prototype.split = function (t, e) {
                    for (var r = 4194303, n = Math.min(t.length, 9), i = 0; i < n; i++) e.words[i] = t.words[i];
                    if (e.length = n, t.length <= 9) return t.words[0] = 0, void (t.length = 1);
                    var o = t.words[9];
                    for (e.words[e.length++] = o & r, i = 10; i < t.length; i++) {
                        var s = 0 | t.words[i];
                        t.words[i - 10] = (s & r) << 4 | o >>> 22, o = s
                    }
                    o >>>= 22, t.words[i - 10] = o, 0 === o && t.length > 10 ? t.length -= 10 : t.length -= 9
                }, M.prototype.imulK = function (t) {
                    t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var n = 0 | t.words[r];
                        e += 977 * n, t.words[r] = 67108863 & e, e = 64 * n + (e / 67108864 | 0)
                    }
                    return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                }, i(_, S), i(A, S), i(k, S), k.prototype.imulK = function (t) {
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var n = 19 * (0 | t.words[r]) + e, i = 67108863 & n;
                        n >>>= 26, t.words[r] = i, e = n
                    }
                    return 0 !== e && (t.words[t.length++] = e), t
                }, o._prime = function (t) {
                    if (v[t]) return v[t];
                    var e;
                    if ("k256" === t) e = new M; else if ("p224" === t) e = new _; else if ("p192" === t) e = new A; else {
                        if ("p25519" !== t) throw new Error("Unknown prime " + t);
                        e = new k
                    }
                    return v[t] = e, e
                }, E.prototype._verify1 = function (t) {
                    n(0 === t.negative, "red works only with positives"), n(t.red, "red works only with red numbers")
                }, E.prototype._verify2 = function (t, e) {
                    n(0 == (t.negative | e.negative), "red works only with positives"), n(t.red && t.red === e.red, "red works only with red numbers")
                }, E.prototype.imod = function (t) {
                    return this.prime ? this.prime.ireduce(t)._forceRed(this) : (f(t, t.umod(this.m)._forceRed(this)), t)
                }, E.prototype.neg = function (t) {
                    return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                }, E.prototype.add = function (t, e) {
                    this._verify2(t, e);
                    var r = t.add(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                }, E.prototype.iadd = function (t, e) {
                    this._verify2(t, e);
                    var r = t.iadd(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r
                }, E.prototype.sub = function (t, e) {
                    this._verify2(t, e);
                    var r = t.sub(e);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
                }, E.prototype.isub = function (t, e) {
                    this._verify2(t, e);
                    var r = t.isub(e);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r
                }, E.prototype.shl = function (t, e) {
                    return this._verify1(t), this.imod(t.ushln(e))
                }, E.prototype.imul = function (t, e) {
                    return this._verify2(t, e), this.imod(t.imul(e))
                }, E.prototype.mul = function (t, e) {
                    return this._verify2(t, e), this.imod(t.mul(e))
                }, E.prototype.isqr = function (t) {
                    return this.imul(t, t.clone())
                }, E.prototype.sqr = function (t) {
                    return this.mul(t, t)
                }, E.prototype.sqrt = function (t) {
                    if (t.isZero()) return t.clone();
                    var e = this.m.andln(3);
                    if (n(e % 2 == 1), 3 === e) {
                        var r = this.m.add(new o(1)).iushrn(2);
                        return this.pow(t, r)
                    }
                    for (var i = this.m.subn(1), s = 0; !i.isZero() && 0 === i.andln(1);) s++, i.iushrn(1);
                    n(!i.isZero());
                    var a = new o(1).toRed(this), u = a.redNeg(), c = this.m.subn(1).iushrn(1), f = this.m.bitLength();
                    for (f = new o(2 * f * f).toRed(this); 0 !== this.pow(f, c).cmp(u);) f.redIAdd(u);
                    for (var h = this.pow(f, i), d = this.pow(t, i.addn(1).iushrn(1)), l = this.pow(t, i), p = s; 0 !== l.cmp(a);) {
                        for (var b = l, g = 0; 0 !== b.cmp(a); g++) b = b.redSqr();
                        n(g < p);
                        var y = this.pow(h, new o(1).iushln(p - g - 1));
                        d = d.redMul(y), h = y.redSqr(), l = l.redMul(h), p = g
                    }
                    return d
                }, E.prototype.invm = function (t) {
                    var e = t._invmp(this.m);
                    return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                }, E.prototype.pow = function (t, e) {
                    if (e.isZero()) return new o(1).toRed(this);
                    if (0 === e.cmpn(1)) return t.clone();
                    var r = new Array(16);
                    r[0] = new o(1).toRed(this), r[1] = t;
                    for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
                    var i = r[0], s = 0, a = 0, u = e.bitLength() % 26;
                    for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
                        for (var c = e.words[n], f = u - 1; f >= 0; f--) {
                            var h = c >> f & 1;
                            i !== r[0] && (i = this.sqr(i)), 0 !== h || 0 !== s ? (s <<= 1, s |= h, (4 == ++a || 0 === n && 0 === f) && (i = this.mul(i, r[s]), a = 0, s = 0)) : a = 0
                        }
                        u = 26
                    }
                    return i
                }, E.prototype.convertTo = function (t) {
                    var e = t.umod(this.m);
                    return e === t ? e.clone() : e
                }, E.prototype.convertFrom = function (t) {
                    var e = t.clone();
                    return e.red = null, e
                }, o.mont = function (t) {
                    return new I(t)
                }, i(I, E), I.prototype.convertTo = function (t) {
                    return this.imod(t.ushln(this.shift))
                }, I.prototype.convertFrom = function (t) {
                    var e = this.imod(t.mul(this.rinv));
                    return e.red = null, e
                }, I.prototype.imul = function (t, e) {
                    if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                    var r = t.imul(e), n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift), o = i;
                    return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
                }, I.prototype.mul = function (t, e) {
                    if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
                    var r = t.mul(e), n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift), s = i;
                    return i.cmp(this.m) >= 0 ? s = i.isub(this.m) : i.cmpn(0) < 0 && (s = i.iadd(this.m)), s._forceRed(this)
                }, I.prototype.invm = function (t) {
                    return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(t = r.nmd(t), this)
        }, 5532: function (t, e, r) {
            "use strict";
            var n = r(4976).Buffer, i = this && this.__createBinding || (Object.create ? function (t, e, r, n) {
                void 0 === n && (n = r), Object.defineProperty(t, n, {
                    enumerable: !0, get: function () {
                        return e[r]
                    }
                })
            } : function (t, e, r, n) {
                void 0 === n && (n = r), t[n] = e[r]
            }), o = this && this.__setModuleDefault || (Object.create ? function (t, e) {
                Object.defineProperty(t, "default", {enumerable: !0, value: e})
            } : function (t, e) {
                t.default = e
            }), s = this && this.__decorate || function (t, e, r, n) {
                var i, o = arguments.length, s = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(e, r, s) : i(e, r)) || s);
                return o > 3 && s && Object.defineProperty(e, r, s), s
            }, a = this && this.__importStar || function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) "default" !== r && Object.hasOwnProperty.call(t, r) && i(e, t, r);
                return o(e, t), e
            }, u = this && this.__importDefault || function (t) {
                return t && t.__esModule ? t : {default: t}
            };
            Object.defineProperty(e, "__esModule", {value: !0}), e.deserializeUnchecked = e.deserialize = e.serialize = e.BinaryReader = e.BinaryWriter = e.BorshError = e.baseDecode = e.baseEncode = void 0;
            const c = u(r(3550)), f = u(r(7304)), h = a(r(1379)),
                d = new ("function" != typeof TextDecoder ? h.TextDecoder : TextDecoder)("utf-8", {fatal: !0});
            e.baseEncode = function (t) {
                return "string" == typeof t && (t = n.from(t, "utf8")), f.default.encode(n.from(t))
            }, e.baseDecode = function (t) {
                return n.from(f.default.decode(t))
            };
            const l = 1024;

            class p extends Error {
                constructor(t) {
                    super(t), this.fieldPath = [], this.originalMessage = t
                }

                addToFieldPath(t) {
                    this.fieldPath.splice(0, 0, t), this.message = this.originalMessage + ": " + this.fieldPath.join(".")
                }
            }

            e.BorshError = p;

            class b {
                constructor() {
                    this.buf = n.alloc(l), this.length = 0
                }

                maybeResize() {
                    this.buf.length < 16 + this.length && (this.buf = n.concat([this.buf, n.alloc(l)]))
                }

                writeU8(t) {
                    this.maybeResize(), this.buf.writeUInt8(t, this.length), this.length += 1
                }

                writeU16(t) {
                    this.maybeResize(), this.buf.writeUInt16LE(t, this.length), this.length += 2
                }

                writeU32(t) {
                    this.maybeResize(), this.buf.writeUInt32LE(t, this.length), this.length += 4
                }

                writeU64(t) {
                    this.maybeResize(), this.writeBuffer(n.from(new c.default(t).toArray("le", 8)))
                }

                writeU128(t) {
                    this.maybeResize(), this.writeBuffer(n.from(new c.default(t).toArray("le", 16)))
                }

                writeU256(t) {
                    this.maybeResize(), this.writeBuffer(n.from(new c.default(t).toArray("le", 32)))
                }

                writeU512(t) {
                    this.maybeResize(), this.writeBuffer(n.from(new c.default(t).toArray("le", 64)))
                }

                writeBuffer(t) {
                    this.buf = n.concat([n.from(this.buf.subarray(0, this.length)), t, n.alloc(l)]), this.length += t.length
                }

                writeString(t) {
                    this.maybeResize();
                    const e = n.from(t, "utf8");
                    this.writeU32(e.length), this.writeBuffer(e)
                }

                writeFixedArray(t) {
                    this.writeBuffer(n.from(t))
                }

                writeArray(t, e) {
                    this.maybeResize(), this.writeU32(t.length);
                    for (const r of t) this.maybeResize(), e(r)
                }

                toArray() {
                    return this.buf.subarray(0, this.length)
                }
            }

            function g(t, e, r) {
                const n = r.value;
                r.value = function (...t) {
                    try {
                        return n.apply(this, t)
                    } catch (t) {
                        if (t instanceof RangeError) {
                            const e = t.code;
                            if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(e) >= 0) throw new p("Reached the end of buffer when deserializing")
                        }
                        throw t
                    }
                }
            }

            e.BinaryWriter = b;

            class y {
                constructor(t) {
                    this.buf = t, this.offset = 0
                }

                readU8() {
                    const t = this.buf.readUInt8(this.offset);
                    return this.offset += 1, t
                }

                readU16() {
                    const t = this.buf.readUInt16LE(this.offset);
                    return this.offset += 2, t
                }

                readU32() {
                    const t = this.buf.readUInt32LE(this.offset);
                    return this.offset += 4, t
                }

                readU64() {
                    const t = this.readBuffer(8);
                    return new c.default(t, "le")
                }

                readU128() {
                    const t = this.readBuffer(16);
                    return new c.default(t, "le")
                }

                readU256() {
                    const t = this.readBuffer(32);
                    return new c.default(t, "le")
                }

                readU512() {
                    const t = this.readBuffer(64);
                    return new c.default(t, "le")
                }

                readBuffer(t) {
                    if (this.offset + t > this.buf.length) throw new p(`Expected buffer length ${t} isn't within bounds`);
                    const e = this.buf.slice(this.offset, this.offset + t);
                    return this.offset += t, e
                }

                readString() {
                    const t = this.readU32(), e = this.readBuffer(t);
                    try {
                        return d.decode(e)
                    } catch (t) {
                        throw new p(`Error decoding UTF-8 string: ${t}`)
                    }
                }

                readFixedArray(t) {
                    return new Uint8Array(this.readBuffer(t))
                }

                readArray(t) {
                    const e = this.readU32(), r = Array();
                    for (let n = 0; n < e; ++n) r.push(t());
                    return r
                }
            }

            function m(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }

            function w(t, e, r, n, i) {
                try {
                    if ("string" == typeof n) i[`write${m(n)}`](r); else if (n instanceof Array) if ("number" == typeof n[0]) {
                        if (r.length !== n[0]) throw new p(`Expecting byte array of length ${n[0]}, but got ${r.length} bytes`);
                        i.writeFixedArray(r)
                    } else if (2 === n.length && "number" == typeof n[1]) {
                        if (r.length !== n[1]) throw new p(`Expecting byte array of length ${n[1]}, but got ${r.length} bytes`);
                        for (let e = 0; e < n[1]; e++) w(t, null, r[e], n[0], i)
                    } else i.writeArray(r, (r => {
                        w(t, e, r, n[0], i)
                    })); else if (void 0 !== n.kind) switch (n.kind) {
                        case"option":
                            null == r ? i.writeU8(0) : (i.writeU8(1), w(t, e, r, n.type, i));
                            break;
                        case"map":
                            i.writeU32(r.size), r.forEach(((r, o) => {
                                w(t, e, o, n.key, i), w(t, e, r, n.value, i)
                            }));
                            break;
                        default:
                            throw new p(`FieldType ${n} unrecognized`)
                    } else v(t, r, i)
                } catch (t) {
                    throw t instanceof p && t.addToFieldPath(e), t
                }
            }

            function v(t, e, r) {
                if ("function" == typeof e.borshSerialize) return void e.borshSerialize(r);
                const n = t.get(e.constructor);
                if (!n) throw new p(`Class ${e.constructor.name} is missing in schema`);
                if ("struct" === n.kind) n.fields.map((([n, i]) => {
                    w(t, n, e[n], i, r)
                })); else {
                    if ("enum" !== n.kind) throw new p(`Unexpected schema kind: ${n.kind} for ${e.constructor.name}`);
                    {
                        const i = e[n.field];
                        for (let o = 0; o < n.values.length; ++o) {
                            const [s, a] = n.values[o];
                            if (s === i) {
                                r.writeU8(o), w(t, s, e[s], a, r);
                                break
                            }
                        }
                    }
                }
            }

            function S(t, e, r, n) {
                try {
                    if ("string" == typeof r) return n[`read${m(r)}`]();
                    if (r instanceof Array) {
                        if ("number" == typeof r[0]) return n.readFixedArray(r[0]);
                        if ("number" == typeof r[1]) {
                            const e = [];
                            for (let i = 0; i < r[1]; i++) e.push(S(t, null, r[0], n));
                            return e
                        }
                        return n.readArray((() => S(t, e, r[0], n)))
                    }
                    if ("option" === r.kind) return n.readU8() ? S(t, e, r.type, n) : void 0;
                    if ("map" === r.kind) {
                        let i = new Map;
                        const o = n.readU32();
                        for (let s = 0; s < o; s++) {
                            const o = S(t, e, r.key, n), s = S(t, e, r.value, n);
                            i.set(o, s)
                        }
                        return i
                    }
                    return M(t, r, n)
                } catch (t) {
                    throw t instanceof p && t.addToFieldPath(e), t
                }
            }

            function M(t, e, r) {
                if ("function" == typeof e.borshDeserialize) return e.borshDeserialize(r);
                const n = t.get(e);
                if (!n) throw new p(`Class ${e.name} is missing in schema`);
                if ("struct" === n.kind) {
                    const n = {};
                    for (const [i, o] of t.get(e).fields) n[i] = S(t, i, o, r);
                    return new e(n)
                }
                if ("enum" === n.kind) {
                    const i = r.readU8();
                    if (i >= n.values.length) throw new p(`Enum index: ${i} is out of range`);
                    const [o, s] = n.values[i];
                    return new e({[o]: S(t, o, s, r)})
                }
                throw new p(`Unexpected schema kind: ${n.kind} for ${e.constructor.name}`)
            }

            s([g], y.prototype, "readU8", null), s([g], y.prototype, "readU16", null), s([g], y.prototype, "readU32", null), s([g], y.prototype, "readU64", null), s([g], y.prototype, "readU128", null), s([g], y.prototype, "readU256", null), s([g], y.prototype, "readU512", null), s([g], y.prototype, "readString", null), s([g], y.prototype, "readFixedArray", null), s([g], y.prototype, "readArray", null), e.BinaryReader = y, e.serialize = function (t, e, r = b) {
                const n = new r;
                return v(t, e, n), n.toArray()
            }, e.deserialize = function (t, e, r, n = y) {
                const i = new n(r), o = M(t, e, i);
                if (i.offset < r.length) throw new p(`Unexpected ${r.length - i.offset} bytes after deserialized data`);
                return o
            }, e.deserializeUnchecked = function (t, e, r, n = y) {
                return M(t, e, new n(r))
            }
        }, 1709: (t, e, r) => {
            "use strict";
            var n = r(9509).Buffer;
            t.exports = function (t) {
                if (t.length >= 255) throw new TypeError("Alphabet too long");
                for (var e = new Uint8Array(256), r = 0; r < e.length; r++) e[r] = 255;
                for (var i = 0; i < t.length; i++) {
                    var o = t.charAt(i), s = o.charCodeAt(0);
                    if (255 !== e[s]) throw new TypeError(o + " is ambiguous");
                    e[s] = i
                }
                var a = t.length, u = t.charAt(0), c = Math.log(a) / Math.log(256), f = Math.log(256) / Math.log(a);

                function h(t) {
                    if ("string" != typeof t) throw new TypeError("Expected String");
                    if (0 === t.length) return n.alloc(0);
                    for (var r = 0, i = 0, o = 0; t[r] === u;) i++, r++;
                    for (var s = (t.length - r) * c + 1 >>> 0, f = new Uint8Array(s); t[r];) {
                        var h = e[t.charCodeAt(r)];
                        if (255 === h) return;
                        for (var d = 0, l = s - 1; (0 !== h || d < o) && -1 !== l; l--, d++) h += a * f[l] >>> 0, f[l] = h % 256 >>> 0, h = h / 256 >>> 0;
                        if (0 !== h) throw new Error("Non-zero carry");
                        o = d, r++
                    }
                    for (var p = s - o; p !== s && 0 === f[p];) p++;
                    var b = n.allocUnsafe(i + (s - p));
                    b.fill(0, 0, i);
                    for (var g = i; p !== s;) b[g++] = f[p++];
                    return b
                }

                return {
                    encode: function (e) {
                        if ((Array.isArray(e) || e instanceof Uint8Array) && (e = n.from(e)), !n.isBuffer(e)) throw new TypeError("Expected Buffer");
                        if (0 === e.length) return "";
                        for (var r = 0, i = 0, o = 0, s = e.length; o !== s && 0 === e[o];) o++, r++;
                        for (var c = (s - o) * f + 1 >>> 0, h = new Uint8Array(c); o !== s;) {
                            for (var d = e[o], l = 0, p = c - 1; (0 !== d || l < i) && -1 !== p; p--, l++) d += 256 * h[p] >>> 0, h[p] = d % a >>> 0, d = d / a >>> 0;
                            if (0 !== d) throw new Error("Non-zero carry");
                            i = l, o++
                        }
                        for (var b = c - i; b !== c && 0 === h[b];) b++;
                        for (var g = u.repeat(r); b < c; ++b) g += t.charAt(h[b]);
                        return g
                    }, decodeUnsafe: h, decode: function (t) {
                        var e = h(t);
                        if (e) return e;
                        throw new Error("Non-base" + a + " character")
                    }
                }
            }
        }, 7304: (t, e, r) => {
            var n = r(1709);
            t.exports = n("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
        }, 9931: (t, e, r) => {
            var n;

            function i(t) {
                this.rand = t
            }

            if (t.exports = function (t) {
                return n || (n = new i(null)), n.generate(t)
            }, t.exports.Rand = i, i.prototype.generate = function (t) {
                return this._rand(t)
            }, i.prototype._rand = function (t) {
                if (this.rand.getBytes) return this.rand.getBytes(t);
                for (var e = new Uint8Array(t), r = 0; r < e.length; r++) e[r] = this.rand.getByte();
                return e
            }, "object" == typeof self) self.crypto && self.crypto.getRandomValues ? i.prototype._rand = function (t) {
                var e = new Uint8Array(t);
                return self.crypto.getRandomValues(e), e
            } : self.msCrypto && self.msCrypto.getRandomValues ? i.prototype._rand = function (t) {
                var e = new Uint8Array(t);
                return self.msCrypto.getRandomValues(e), e
            } : "object" == typeof window && (i.prototype._rand = function () {
                throw new Error("Not implemented yet")
            }); else try {
                var o = r(9214);
                if ("function" != typeof o.randomBytes) throw new Error("Not supported");
                i.prototype._rand = function (t) {
                    return o.randomBytes(t)
                }
            } catch (t) {
            }
        }, 7191: (t, e, r) => {
            const n = r(8162);
            t.exports = n("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
        }, 4976: (t, e, r) => {
            "use strict";
            const n = r(9742), i = r(645),
                o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
            e.Buffer = u, e.SlowBuffer = function (t) {
                return +t != t && (t = 0), u.alloc(+t)
            }, e.INSPECT_MAX_BYTES = 50;
            const s = 2147483647;

            function a(t) {
                if (t > s) throw new RangeError('The value "' + t + '" is invalid for option "size"');
                const e = new Uint8Array(t);
                return Object.setPrototypeOf(e, u.prototype), e
            }

            function u(t, e, r) {
                if ("number" == typeof t) {
                    if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
                    return h(t)
                }
                return c(t, e, r)
            }

            function c(t, e, r) {
                if ("string" == typeof t) return function (t, e) {
                    if ("string" == typeof e && "" !== e || (e = "utf8"), !u.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
                    const r = 0 | b(t, e);
                    let n = a(r);
                    const i = n.write(t, e);
                    return i !== r && (n = n.slice(0, i)), n
                }(t, e);
                if (ArrayBuffer.isView(t)) return function (t) {
                    if (G(t, Uint8Array)) {
                        const e = new Uint8Array(t);
                        return l(e.buffer, e.byteOffset, e.byteLength)
                    }
                    return d(t)
                }(t);
                if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                if (G(t, ArrayBuffer) || t && G(t.buffer, ArrayBuffer)) return l(t, e, r);
                if ("undefined" != typeof SharedArrayBuffer && (G(t, SharedArrayBuffer) || t && G(t.buffer, SharedArrayBuffer))) return l(t, e, r);
                if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
                const n = t.valueOf && t.valueOf();
                if (null != n && n !== t) return u.from(n, e, r);
                const i = function (t) {
                    if (u.isBuffer(t)) {
                        const e = 0 | p(t.length), r = a(e);
                        return 0 === r.length || t.copy(r, 0, 0, e), r
                    }
                    return void 0 !== t.length ? "number" != typeof t.length || Z(t.length) ? a(0) : d(t) : "Buffer" === t.type && Array.isArray(t.data) ? d(t.data) : void 0
                }(t);
                if (i) return i;
                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return u.from(t[Symbol.toPrimitive]("string"), e, r);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
            }

            function f(t) {
                if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
                if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
            }

            function h(t) {
                return f(t), a(t < 0 ? 0 : 0 | p(t))
            }

            function d(t) {
                const e = t.length < 0 ? 0 : 0 | p(t.length), r = a(e);
                for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
                return r
            }

            function l(t, e, r) {
                if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
                if (t.byteLength < e + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
                let n;
                return n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r), Object.setPrototypeOf(n, u.prototype), n
            }

            function p(t) {
                if (t >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
                return 0 | t
            }

            function b(t, e) {
                if (u.isBuffer(t)) return t.length;
                if (ArrayBuffer.isView(t) || G(t, ArrayBuffer)) return t.byteLength;
                if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                const r = t.length, n = arguments.length > 2 && !0 === arguments[2];
                if (!n && 0 === r) return 0;
                let i = !1;
                for (; ;) switch (e) {
                    case"ascii":
                    case"latin1":
                    case"binary":
                        return r;
                    case"utf8":
                    case"utf-8":
                        return J(t).length;
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return 2 * r;
                    case"hex":
                        return r >>> 1;
                    case"base64":
                        return V(t).length;
                    default:
                        if (i) return n ? -1 : J(t).length;
                        e = ("" + e).toLowerCase(), i = !0
                }
            }

            function g(t, e, r) {
                let n = !1;
                if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                if ((r >>>= 0) <= (e >>>= 0)) return "";
                for (t || (t = "utf8"); ;) switch (t) {
                    case"hex":
                        return R(this, e, r);
                    case"utf8":
                    case"utf-8":
                        return E(this, e, r);
                    case"ascii":
                        return B(this, e, r);
                    case"latin1":
                    case"binary":
                        return x(this, e, r);
                    case"base64":
                        return k(this, e, r);
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return P(this, e, r);
                    default:
                        if (n) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), n = !0
                }
            }

            function y(t, e, r) {
                const n = t[e];
                t[e] = t[r], t[r] = n
            }

            function m(t, e, r, n, i) {
                if (0 === t.length) return -1;
                if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), Z(r = +r) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
                    if (i) return -1;
                    r = t.length - 1
                } else if (r < 0) {
                    if (!i) return -1;
                    r = 0
                }
                if ("string" == typeof e && (e = u.from(e, n)), u.isBuffer(e)) return 0 === e.length ? -1 : w(t, e, r, n, i);
                if ("number" == typeof e) return e &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : w(t, [e], r, n, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function w(t, e, r, n, i) {
                let o, s = 1, a = t.length, u = e.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (t.length < 2 || e.length < 2) return -1;
                    s = 2, a /= 2, u /= 2, r /= 2
                }

                function c(t, e) {
                    return 1 === s ? t[e] : t.readUInt16BE(e * s)
                }

                if (i) {
                    let n = -1;
                    for (o = r; o < a; o++) if (c(t, o) === c(e, -1 === n ? 0 : o - n)) {
                        if (-1 === n && (n = o), o - n + 1 === u) return n * s
                    } else -1 !== n && (o -= o - n), n = -1
                } else for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
                    let r = !0;
                    for (let n = 0; n < u; n++) if (c(t, o + n) !== c(e, n)) {
                        r = !1;
                        break
                    }
                    if (r) return o
                }
                return -1
            }

            function v(t, e, r, n) {
                r = Number(r) || 0;
                const i = t.length - r;
                n ? (n = Number(n)) > i && (n = i) : n = i;
                const o = e.length;
                let s;
                for (n > o / 2 && (n = o / 2), s = 0; s < n; ++s) {
                    const n = parseInt(e.substr(2 * s, 2), 16);
                    if (Z(n)) return s;
                    t[r + s] = n
                }
                return s
            }

            function S(t, e, r, n) {
                return H(J(e, t.length - r), t, r, n)
            }

            function M(t, e, r, n) {
                return H(function (t) {
                    const e = [];
                    for (let r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                    return e
                }(e), t, r, n)
            }

            function _(t, e, r, n) {
                return H(V(e), t, r, n)
            }

            function A(t, e, r, n) {
                return H(function (t, e) {
                    let r, n, i;
                    const o = [];
                    for (let s = 0; s < t.length && !((e -= 2) < 0); ++s) r = t.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n);
                    return o
                }(e, t.length - r), t, r, n)
            }

            function k(t, e, r) {
                return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r))
            }

            function E(t, e, r) {
                r = Math.min(t.length, r);
                const n = [];
                let i = e;
                for (; i < r;) {
                    const e = t[i];
                    let o = null, s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
                    if (i + s <= r) {
                        let r, n, a, u;
                        switch (s) {
                            case 1:
                                e < 128 && (o = e);
                                break;
                            case 2:
                                r = t[i + 1], 128 == (192 & r) && (u = (31 & e) << 6 | 63 & r, u > 127 && (o = u));
                                break;
                            case 3:
                                r = t[i + 1], n = t[i + 2], 128 == (192 & r) && 128 == (192 & n) && (u = (15 & e) << 12 | (63 & r) << 6 | 63 & n, u > 2047 && (u < 55296 || u > 57343) && (o = u));
                                break;
                            case 4:
                                r = t[i + 1], n = t[i + 2], a = t[i + 3], 128 == (192 & r) && 128 == (192 & n) && 128 == (192 & a) && (u = (15 & e) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & a, u > 65535 && u < 1114112 && (o = u))
                        }
                    }
                    null === o ? (o = 65533, s = 1) : o > 65535 && (o -= 65536, n.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), n.push(o), i += s
                }
                return function (t) {
                    const e = t.length;
                    if (e <= I) return String.fromCharCode.apply(String, t);
                    let r = "", n = 0;
                    for (; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += I));
                    return r
                }(n)
            }

            e.kMaxLength = s, u.TYPED_ARRAY_SUPPORT = function () {
                try {
                    const t = new Uint8Array(1), e = {
                        foo: function () {
                            return 42
                        }
                    };
                    return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
                } catch (t) {
                    return !1
                }
            }(), u.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(u.prototype, "parent", {
                enumerable: !0,
                get: function () {
                    if (u.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(u.prototype, "offset", {
                enumerable: !0, get: function () {
                    if (u.isBuffer(this)) return this.byteOffset
                }
            }), u.poolSize = 8192, u.from = function (t, e, r) {
                return c(t, e, r)
            }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array), u.alloc = function (t, e, r) {
                return function (t, e, r) {
                    return f(t), t <= 0 ? a(t) : void 0 !== e ? "string" == typeof r ? a(t).fill(e, r) : a(t).fill(e) : a(t)
                }(t, e, r)
            }, u.allocUnsafe = function (t) {
                return h(t)
            }, u.allocUnsafeSlow = function (t) {
                return h(t)
            }, u.isBuffer = function (t) {
                return null != t && !0 === t._isBuffer && t !== u.prototype
            }, u.compare = function (t, e) {
                if (G(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), G(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)), !u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (t === e) return 0;
                let r = t.length, n = e.length;
                for (let i = 0, o = Math.min(r, n); i < o; ++i) if (t[i] !== e[i]) {
                    r = t[i], n = e[i];
                    break
                }
                return r < n ? -1 : n < r ? 1 : 0
            }, u.isEncoding = function (t) {
                switch (String(t).toLowerCase()) {
                    case"hex":
                    case"utf8":
                    case"utf-8":
                    case"ascii":
                    case"latin1":
                    case"binary":
                    case"base64":
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, u.concat = function (t, e) {
                if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return u.alloc(0);
                let r;
                if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
                const n = u.allocUnsafe(e);
                let i = 0;
                for (r = 0; r < t.length; ++r) {
                    let e = t[r];
                    if (G(e, Uint8Array)) i + e.length > n.length ? (u.isBuffer(e) || (e = u.from(e)), e.copy(n, i)) : Uint8Array.prototype.set.call(n, e, i); else {
                        if (!u.isBuffer(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                        e.copy(n, i)
                    }
                    i += e.length
                }
                return n
            }, u.byteLength = b, u.prototype._isBuffer = !0, u.prototype.swap16 = function () {
                const t = this.length;
                if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (let e = 0; e < t; e += 2) y(this, e, e + 1);
                return this
            }, u.prototype.swap32 = function () {
                const t = this.length;
                if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (let e = 0; e < t; e += 4) y(this, e, e + 3), y(this, e + 1, e + 2);
                return this
            }, u.prototype.swap64 = function () {
                const t = this.length;
                if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (let e = 0; e < t; e += 8) y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), y(this, e + 3, e + 4);
                return this
            }, u.prototype.toString = function () {
                const t = this.length;
                return 0 === t ? "" : 0 === arguments.length ? E(this, 0, t) : g.apply(this, arguments)
            }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function (t) {
                if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === u.compare(this, t)
            }, u.prototype.inspect = function () {
                let t = "";
                const r = e.INSPECT_MAX_BYTES;
                return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">"
            }, o && (u.prototype[o] = u.prototype.inspect), u.prototype.compare = function (t, e, r, n, i) {
                if (G(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), !u.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length) throw new RangeError("out of range index");
                if (n >= i && e >= r) return 0;
                if (n >= i) return -1;
                if (e >= r) return 1;
                if (this === t) return 0;
                let o = (i >>>= 0) - (n >>>= 0), s = (r >>>= 0) - (e >>>= 0);
                const a = Math.min(o, s), c = this.slice(n, i), f = t.slice(e, r);
                for (let t = 0; t < a; ++t) if (c[t] !== f[t]) {
                    o = c[t], s = f[t];
                    break
                }
                return o < s ? -1 : s < o ? 1 : 0
            }, u.prototype.includes = function (t, e, r) {
                return -1 !== this.indexOf(t, e, r)
            }, u.prototype.indexOf = function (t, e, r) {
                return m(this, t, e, r, !0)
            }, u.prototype.lastIndexOf = function (t, e, r) {
                return m(this, t, e, r, !1)
            }, u.prototype.write = function (t, e, r, n) {
                if (void 0 === e) n = "utf8", r = this.length, e = 0; else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0; else {
                    if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                }
                const i = this.length - e;
                if ((void 0 === r || r > i) && (r = i), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                let o = !1;
                for (; ;) switch (n) {
                    case"hex":
                        return v(this, t, e, r);
                    case"utf8":
                    case"utf-8":
                        return S(this, t, e, r);
                    case"ascii":
                    case"latin1":
                    case"binary":
                        return M(this, t, e, r);
                    case"base64":
                        return _(this, t, e, r);
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return A(this, t, e, r);
                    default:
                        if (o) throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), o = !0
                }
            }, u.prototype.toJSON = function () {
                return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
            };
            const I = 4096;

            function B(t, e, r) {
                let n = "";
                r = Math.min(t.length, r);
                for (let i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
                return n
            }

            function x(t, e, r) {
                let n = "";
                r = Math.min(t.length, r);
                for (let i = e; i < r; ++i) n += String.fromCharCode(t[i]);
                return n
            }

            function R(t, e, r) {
                const n = t.length;
                (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                let i = "";
                for (let n = e; n < r; ++n) i += Y[t[n]];
                return i
            }

            function P(t, e, r) {
                const n = t.slice(e, r);
                let i = "";
                for (let t = 0; t < n.length - 1; t += 2) i += String.fromCharCode(n[t] + 256 * n[t + 1]);
                return i
            }

            function O(t, e, r) {
                if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                if (t + e > r) throw new RangeError("Trying to access beyond buffer length")
            }

            function T(t, e, r, n, i, o) {
                if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
                if (r + n > t.length) throw new RangeError("Index out of range")
            }

            function U(t, e, r, n, i) {
                K(e, n, i, t, r, 7);
                let o = Number(e & BigInt(4294967295));
                t[r++] = o, o >>= 8, t[r++] = o, o >>= 8, t[r++] = o, o >>= 8, t[r++] = o;
                let s = Number(e >> BigInt(32) & BigInt(4294967295));
                return t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, r
            }

            function L(t, e, r, n, i) {
                K(e, n, i, t, r, 7);
                let o = Number(e & BigInt(4294967295));
                t[r + 7] = o, o >>= 8, t[r + 6] = o, o >>= 8, t[r + 5] = o, o >>= 8, t[r + 4] = o;
                let s = Number(e >> BigInt(32) & BigInt(4294967295));
                return t[r + 3] = s, s >>= 8, t[r + 2] = s, s >>= 8, t[r + 1] = s, s >>= 8, t[r] = s, r + 8
            }

            function N(t, e, r, n, i, o) {
                if (r + n > t.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range")
            }

            function z(t, e, r, n, o) {
                return e = +e, r >>>= 0, o || N(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4
            }

            function C(t, e, r, n, o) {
                return e = +e, r >>>= 0, o || N(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8
            }

            u.prototype.slice = function (t, e) {
                const r = this.length;
                (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
                const n = this.subarray(t, e);
                return Object.setPrototypeOf(n, u.prototype), n
            }, u.prototype.readUintLE = u.prototype.readUIntLE = function (t, e, r) {
                t >>>= 0, e >>>= 0, r || O(t, e, this.length);
                let n = this[t], i = 1, o = 0;
                for (; ++o < e && (i *= 256);) n += this[t + o] * i;
                return n
            }, u.prototype.readUintBE = u.prototype.readUIntBE = function (t, e, r) {
                t >>>= 0, e >>>= 0, r || O(t, e, this.length);
                let n = this[t + --e], i = 1;
                for (; e > 0 && (i *= 256);) n += this[t + --e] * i;
                return n
            }, u.prototype.readUint8 = u.prototype.readUInt8 = function (t, e) {
                return t >>>= 0, e || O(t, 1, this.length), this[t]
            }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function (t, e) {
                return t >>>= 0, e || O(t, 2, this.length), this[t] | this[t + 1] << 8
            }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function (t, e) {
                return t >>>= 0, e || O(t, 2, this.length), this[t] << 8 | this[t + 1]
            }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function (t, e) {
                return t >>>= 0, e || O(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function (t, e) {
                return t >>>= 0, e || O(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }, u.prototype.readBigUInt64LE = X((function (t) {
                F(t >>>= 0, "offset");
                const e = this[t], r = this[t + 7];
                void 0 !== e && void 0 !== r || D(t, this.length - 8);
                const n = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
                    i = this[++t] + 256 * this[++t] + 65536 * this[++t] + r * 2 ** 24;
                return BigInt(n) + (BigInt(i) << BigInt(32))
            })), u.prototype.readBigUInt64BE = X((function (t) {
                F(t >>>= 0, "offset");
                const e = this[t], r = this[t + 7];
                void 0 !== e && void 0 !== r || D(t, this.length - 8);
                const n = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
                    i = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r;
                return (BigInt(n) << BigInt(32)) + BigInt(i)
            })), u.prototype.readIntLE = function (t, e, r) {
                t >>>= 0, e >>>= 0, r || O(t, e, this.length);
                let n = this[t], i = 1, o = 0;
                for (; ++o < e && (i *= 256);) n += this[t + o] * i;
                return i *= 128, n >= i && (n -= Math.pow(2, 8 * e)), n
            }, u.prototype.readIntBE = function (t, e, r) {
                t >>>= 0, e >>>= 0, r || O(t, e, this.length);
                let n = e, i = 1, o = this[t + --n];
                for (; n > 0 && (i *= 256);) o += this[t + --n] * i;
                return i *= 128, o >= i && (o -= Math.pow(2, 8 * e)), o
            }, u.prototype.readInt8 = function (t, e) {
                return t >>>= 0, e || O(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            }, u.prototype.readInt16LE = function (t, e) {
                t >>>= 0, e || O(t, 2, this.length);
                const r = this[t] | this[t + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, u.prototype.readInt16BE = function (t, e) {
                t >>>= 0, e || O(t, 2, this.length);
                const r = this[t + 1] | this[t] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, u.prototype.readInt32LE = function (t, e) {
                return t >>>= 0, e || O(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }, u.prototype.readInt32BE = function (t, e) {
                return t >>>= 0, e || O(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }, u.prototype.readBigInt64LE = X((function (t) {
                F(t >>>= 0, "offset");
                const e = this[t], r = this[t + 7];
                void 0 !== e && void 0 !== r || D(t, this.length - 8);
                const n = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24);
                return (BigInt(n) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24)
            })), u.prototype.readBigInt64BE = X((function (t) {
                F(t >>>= 0, "offset");
                const e = this[t], r = this[t + 7];
                void 0 !== e && void 0 !== r || D(t, this.length - 8);
                const n = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
                return (BigInt(n) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r)
            })), u.prototype.readFloatLE = function (t, e) {
                return t >>>= 0, e || O(t, 4, this.length), i.read(this, t, !0, 23, 4)
            }, u.prototype.readFloatBE = function (t, e) {
                return t >>>= 0, e || O(t, 4, this.length), i.read(this, t, !1, 23, 4)
            }, u.prototype.readDoubleLE = function (t, e) {
                return t >>>= 0, e || O(t, 8, this.length), i.read(this, t, !0, 52, 8)
            }, u.prototype.readDoubleBE = function (t, e) {
                return t >>>= 0, e || O(t, 8, this.length), i.read(this, t, !1, 52, 8)
            }, u.prototype.writeUintLE = u.prototype.writeUIntLE = function (t, e, r, n) {
                t = +t, e >>>= 0, r >>>= 0, n || T(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                let i = 1, o = 0;
                for (this[e] = 255 & t; ++o < r && (i *= 256);) this[e + o] = t / i & 255;
                return e + r
            }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function (t, e, r, n) {
                t = +t, e >>>= 0, r >>>= 0, n || T(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                let i = r - 1, o = 1;
                for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;
                return e + r
            }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function (t, e, r) {
                return t = +t, e >>>= 0, r || T(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
            }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function (t, e, r) {
                return t = +t, e >>>= 0, r || T(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
            }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function (t, e, r) {
                return t = +t, e >>>= 0, r || T(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
            }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function (t, e, r) {
                return t = +t, e >>>= 0, r || T(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
            }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function (t, e, r) {
                return t = +t, e >>>= 0, r || T(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
            }, u.prototype.writeBigUInt64LE = X((function (t, e = 0) {
                return U(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
            })), u.prototype.writeBigUInt64BE = X((function (t, e = 0) {
                return L(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
            })), u.prototype.writeIntLE = function (t, e, r, n) {
                if (t = +t, e >>>= 0, !n) {
                    const n = Math.pow(2, 8 * r - 1);
                    T(this, t, e, r, n - 1, -n)
                }
                let i = 0, o = 1, s = 0;
                for (this[e] = 255 & t; ++i < r && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1), this[e + i] = (t / o >> 0) - s & 255;
                return e + r
            }, u.prototype.writeIntBE = function (t, e, r, n) {
                if (t = +t, e >>>= 0, !n) {
                    const n = Math.pow(2, 8 * r - 1);
                    T(this, t, e, r, n - 1, -n)
                }
                let i = r - 1, o = 1, s = 0;
                for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1), this[e + i] = (t / o >> 0) - s & 255;
                return e + r
            }, u.prototype.writeInt8 = function (t, e, r) {
                return t = +t, e >>>= 0, r || T(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
            }, u.prototype.writeInt16LE = function (t, e, r) {
                return t = +t, e >>>= 0, r || T(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
            }, u.prototype.writeInt16BE = function (t, e, r) {
                return t = +t, e >>>= 0, r || T(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
            }, u.prototype.writeInt32LE = function (t, e, r) {
                return t = +t, e >>>= 0, r || T(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
            }, u.prototype.writeInt32BE = function (t, e, r) {
                return t = +t, e >>>= 0, r || T(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
            }, u.prototype.writeBigInt64LE = X((function (t, e = 0) {
                return U(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            })), u.prototype.writeBigInt64BE = X((function (t, e = 0) {
                return L(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            })), u.prototype.writeFloatLE = function (t, e, r) {
                return z(this, t, e, !0, r)
            }, u.prototype.writeFloatBE = function (t, e, r) {
                return z(this, t, e, !1, r)
            }, u.prototype.writeDoubleLE = function (t, e, r) {
                return C(this, t, e, !0, r)
            }, u.prototype.writeDoubleBE = function (t, e, r) {
                return C(this, t, e, !1, r)
            }, u.prototype.copy = function (t, e, r, n) {
                if (!u.isBuffer(t)) throw new TypeError("argument should be a Buffer");
                if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
                const i = n - r;
                return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, r, n) : Uint8Array.prototype.set.call(t, this.subarray(r, n), e), i
            }, u.prototype.fill = function (t, e, r, n) {
                if ("string" == typeof t) {
                    if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                    if ("string" == typeof n && !u.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                    if (1 === t.length) {
                        const e = t.charCodeAt(0);
                        ("utf8" === n && e < 128 || "latin1" === n) && (t = e)
                    }
                } else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
                if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
                if (r <= e) return this;
                let i;
                if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t) for (i = e; i < r; ++i) this[i] = t; else {
                    const o = u.isBuffer(t) ? t : u.from(t, n), s = o.length;
                    if (0 === s) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                    for (i = 0; i < r - e; ++i) this[i + e] = o[i % s]
                }
                return this
            };
            const q = {};

            function W(t, e, r) {
                q[t] = class extends r {
                    constructor() {
                        super(), Object.defineProperty(this, "message", {
                            value: e.apply(this, arguments),
                            writable: !0,
                            configurable: !0
                        }), this.name = `${this.name} [${t}]`, this.stack, delete this.name
                    }

                    get code() {
                        return t
                    }

                    set code(t) {
                        Object.defineProperty(this, "code", {configurable: !0, enumerable: !0, value: t, writable: !0})
                    }

                    toString() {
                        return `${this.name} [${t}]: ${this.message}`
                    }
                }
            }

            function j(t) {
                let e = "", r = t.length;
                const n = "-" === t[0] ? 1 : 0;
                for (; r >= n + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
                return `${t.slice(0, r)}${e}`
            }

            function K(t, e, r, n, i, o) {
                if (t > r || t < e) {
                    const n = "bigint" == typeof e ? "n" : "";
                    let i;
                    throw i = o > 3 ? 0 === e || e === BigInt(0) ? `>= 0${n} and < 2${n} ** ${8 * (o + 1)}${n}` : `>= -(2${n} ** ${8 * (o + 1) - 1}${n}) and < 2 ** ${8 * (o + 1) - 1}${n}` : `>= ${e}${n} and <= ${r}${n}`, new q.ERR_OUT_OF_RANGE("value", i, t)
                }
                !function (t, e, r) {
                    F(e, "offset"), void 0 !== t[e] && void 0 !== t[e + r] || D(e, t.length - (r + 1))
                }(n, i, o)
            }

            function F(t, e) {
                if ("number" != typeof t) throw new q.ERR_INVALID_ARG_TYPE(e, "number", t)
            }

            function D(t, e, r) {
                if (Math.floor(t) !== t) throw F(t, r), new q.ERR_OUT_OF_RANGE(r || "offset", "an integer", t);
                if (e < 0) throw new q.ERR_BUFFER_OUT_OF_BOUNDS;
                throw new q.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${e}`, t)
            }

            W("ERR_BUFFER_OUT_OF_BOUNDS", (function (t) {
                return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
            }), RangeError), W("ERR_INVALID_ARG_TYPE", (function (t, e) {
                return `The "${t}" argument must be of type number. Received type ${typeof e}`
            }), TypeError), W("ERR_OUT_OF_RANGE", (function (t, e, r) {
                let n = `The value of "${t}" is out of range.`, i = r;
                return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? i = j(String(r)) : "bigint" == typeof r && (i = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = j(i)), i += "n"), n += ` It must be ${e}. Received ${i}`, n
            }), RangeError);
            const $ = /[^+/0-9A-Za-z-_]/g;

            function J(t, e) {
                let r;
                e = e || 1 / 0;
                const n = t.length;
                let i = null;
                const o = [];
                for (let s = 0; s < n; ++s) {
                    if (r = t.charCodeAt(s), r > 55295 && r < 57344) {
                        if (!i) {
                            if (r > 56319) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === n) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = r;
                            continue
                        }
                        if (r < 56320) {
                            (e -= 3) > -1 && o.push(239, 191, 189), i = r;
                            continue
                        }
                        r = 65536 + (i - 55296 << 10 | r - 56320)
                    } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null, r < 128) {
                        if ((e -= 1) < 0) break;
                        o.push(r)
                    } else if (r < 2048) {
                        if ((e -= 2) < 0) break;
                        o.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((e -= 3) < 0) break;
                        o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((e -= 4) < 0) break;
                        o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return o
            }

            function V(t) {
                return n.toByteArray(function (t) {
                    if ((t = (t = t.split("=")[0]).trim().replace($, "")).length < 2) return "";
                    for (; t.length % 4 != 0;) t += "=";
                    return t
                }(t))
            }

            function H(t, e, r, n) {
                let i;
                for (i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
                return i
            }

            function G(t, e) {
                return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
            }

            function Z(t) {
                return t != t
            }

            const Y = function () {
                const t = "0123456789abcdef", e = new Array(256);
                for (let r = 0; r < 16; ++r) {
                    const n = 16 * r;
                    for (let i = 0; i < 16; ++i) e[n + i] = t[r] + t[i]
                }
                return e
            }();

            function X(t) {
                return "undefined" == typeof BigInt ? Q : t
            }

            function Q() {
                throw new Error("BigInt not supported")
            }
        }, 6266: (t, e, r) => {
            "use strict";
            var n = e;
            n.version = r(8597).i8, n.utils = r(953), n.rand = r(9931), n.curve = r(8254), n.curves = r(5427), n.ec = r(7954), n.eddsa = r(5980)
        }, 4918: (t, e, r) => {
            "use strict";
            var n = r(3785), i = r(953), o = i.getNAF, s = i.getJSF, a = i.assert;

            function u(t, e) {
                this.type = t, this.p = new n(e.p, 16), this.red = e.prime ? n.red(e.prime) : n.mont(this.p), this.zero = new n(0).toRed(this.red), this.one = new n(1).toRed(this.red), this.two = new n(2).toRed(this.red), this.n = e.n && new n(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
                var r = this.n && this.p.div(this.n);
                !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
            }

            function c(t, e) {
                this.curve = t, this.type = e, this.precomputed = null
            }

            t.exports = u, u.prototype.point = function () {
                throw new Error("Not implemented")
            }, u.prototype.validate = function () {
                throw new Error("Not implemented")
            }, u.prototype._fixedNafMul = function (t, e) {
                a(t.precomputed);
                var r = t._getDoubles(), n = o(e, 1, this._bitLength),
                    i = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);
                i /= 3;
                var s, u, c = [];
                for (s = 0; s < n.length; s += r.step) {
                    u = 0;
                    for (var f = s + r.step - 1; f >= s; f--) u = (u << 1) + n[f];
                    c.push(u)
                }
                for (var h = this.jpoint(null, null, null), d = this.jpoint(null, null, null), l = i; l > 0; l--) {
                    for (s = 0; s < c.length; s++) (u = c[s]) === l ? d = d.mixedAdd(r.points[s]) : u === -l && (d = d.mixedAdd(r.points[s].neg()));
                    h = h.add(d)
                }
                return h.toP()
            }, u.prototype._wnafMul = function (t, e) {
                var r = 4, n = t._getNAFPoints(r);
                r = n.wnd;
                for (var i = n.points, s = o(e, r, this._bitLength), u = this.jpoint(null, null, null), c = s.length - 1; c >= 0; c--) {
                    for (var f = 0; c >= 0 && 0 === s[c]; c--) f++;
                    if (c >= 0 && f++, u = u.dblp(f), c < 0) break;
                    var h = s[c];
                    a(0 !== h), u = "affine" === t.type ? h > 0 ? u.mixedAdd(i[h - 1 >> 1]) : u.mixedAdd(i[-h - 1 >> 1].neg()) : h > 0 ? u.add(i[h - 1 >> 1]) : u.add(i[-h - 1 >> 1].neg())
                }
                return "affine" === t.type ? u.toP() : u
            }, u.prototype._wnafMulAdd = function (t, e, r, n, i) {
                var a, u, c, f = this._wnafT1, h = this._wnafT2, d = this._wnafT3, l = 0;
                for (a = 0; a < n; a++) {
                    var p = (c = e[a])._getNAFPoints(t);
                    f[a] = p.wnd, h[a] = p.points
                }
                for (a = n - 1; a >= 1; a -= 2) {
                    var b = a - 1, g = a;
                    if (1 === f[b] && 1 === f[g]) {
                        var y = [e[b], null, null, e[g]];
                        0 === e[b].y.cmp(e[g].y) ? (y[1] = e[b].add(e[g]), y[2] = e[b].toJ().mixedAdd(e[g].neg())) : 0 === e[b].y.cmp(e[g].y.redNeg()) ? (y[1] = e[b].toJ().mixedAdd(e[g]), y[2] = e[b].add(e[g].neg())) : (y[1] = e[b].toJ().mixedAdd(e[g]), y[2] = e[b].toJ().mixedAdd(e[g].neg()));
                        var m = [-3, -1, -5, -7, 0, 7, 5, 1, 3], w = s(r[b], r[g]);
                        for (l = Math.max(w[0].length, l), d[b] = new Array(l), d[g] = new Array(l), u = 0; u < l; u++) {
                            var v = 0 | w[0][u], S = 0 | w[1][u];
                            d[b][u] = m[3 * (v + 1) + (S + 1)], d[g][u] = 0, h[b] = y
                        }
                    } else d[b] = o(r[b], f[b], this._bitLength), d[g] = o(r[g], f[g], this._bitLength), l = Math.max(d[b].length, l), l = Math.max(d[g].length, l)
                }
                var M = this.jpoint(null, null, null), _ = this._wnafT4;
                for (a = l; a >= 0; a--) {
                    for (var A = 0; a >= 0;) {
                        var k = !0;
                        for (u = 0; u < n; u++) _[u] = 0 | d[u][a], 0 !== _[u] && (k = !1);
                        if (!k) break;
                        A++, a--
                    }
                    if (a >= 0 && A++, M = M.dblp(A), a < 0) break;
                    for (u = 0; u < n; u++) {
                        var E = _[u];
                        0 !== E && (E > 0 ? c = h[u][E - 1 >> 1] : E < 0 && (c = h[u][-E - 1 >> 1].neg()), M = "affine" === c.type ? M.mixedAdd(c) : M.add(c))
                    }
                }
                for (a = 0; a < n; a++) h[a] = null;
                return i ? M : M.toP()
            }, u.BasePoint = c, c.prototype.eq = function () {
                throw new Error("Not implemented")
            }, c.prototype.validate = function () {
                return this.curve.validate(this)
            }, u.prototype.decodePoint = function (t, e) {
                t = i.toArray(t, e);
                var r = this.p.byteLength();
                if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * r) return 6 === t[0] ? a(t[t.length - 1] % 2 == 0) : 7 === t[0] && a(t[t.length - 1] % 2 == 1), this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r));
                if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r) return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
                throw new Error("Unknown point format")
            }, c.prototype.encodeCompressed = function (t) {
                return this.encode(t, !0)
            }, c.prototype._encode = function (t) {
                var e = this.curve.p.byteLength(), r = this.getX().toArray("be", e);
                return t ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", e))
            }, c.prototype.encode = function (t, e) {
                return i.encode(this._encode(e), t)
            }, c.prototype.precompute = function (t) {
                if (this.precomputed) return this;
                var e = {doubles: null, naf: null, beta: null};
                return e.naf = this._getNAFPoints(8), e.doubles = this._getDoubles(4, t), e.beta = this._getBeta(), this.precomputed = e, this
            }, c.prototype._hasDoubles = function (t) {
                if (!this.precomputed) return !1;
                var e = this.precomputed.doubles;
                return !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
            }, c.prototype._getDoubles = function (t, e) {
                if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                for (var r = [this], n = this, i = 0; i < e; i += t) {
                    for (var o = 0; o < t; o++) n = n.dbl();
                    r.push(n)
                }
                return {step: t, points: r}
            }, c.prototype._getNAFPoints = function (t) {
                if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                for (var e = [this], r = (1 << t) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++) e[i] = e[i - 1].add(n);
                return {wnd: t, points: e}
            }, c.prototype._getBeta = function () {
                return null
            }, c.prototype.dblp = function (t) {
                for (var e = this, r = 0; r < t; r++) e = e.dbl();
                return e
            }
        }, 1138: (t, e, r) => {
            "use strict";
            var n = r(953), i = r(3785), o = r(5717), s = r(4918), a = n.assert;

            function u(t) {
                this.twisted = 1 != (0 | t.a), this.mOneA = this.twisted && -1 == (0 | t.a), this.extended = this.mOneA, s.call(this, "edwards", t), this.a = new i(t.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new i(t.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new i(t.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), a(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = 1 == (0 | t.c)
            }

            function c(t, e, r, n, o) {
                s.BasePoint.call(this, t, "projective"), null === e && null === r && null === n ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new i(e, 16), this.y = new i(r, 16), this.z = n ? new i(n, 16) : this.curve.one, this.t = o && new i(o, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
            }

            o(u, s), t.exports = u, u.prototype._mulA = function (t) {
                return this.mOneA ? t.redNeg() : this.a.redMul(t)
            }, u.prototype._mulC = function (t) {
                return this.oneC ? t : this.c.redMul(t)
            }, u.prototype.jpoint = function (t, e, r, n) {
                return this.point(t, e, r, n)
            }, u.prototype.pointFromX = function (t, e) {
                (t = new i(t, 16)).red || (t = t.toRed(this.red));
                var r = t.redSqr(), n = this.c2.redSub(this.a.redMul(r)),
                    o = this.one.redSub(this.c2.redMul(this.d).redMul(r)), s = n.redMul(o.redInvm()), a = s.redSqrt();
                if (0 !== a.redSqr().redSub(s).cmp(this.zero)) throw new Error("invalid point");
                var u = a.fromRed().isOdd();
                return (e && !u || !e && u) && (a = a.redNeg()), this.point(t, a)
            }, u.prototype.pointFromY = function (t, e) {
                (t = new i(t, 16)).red || (t = t.toRed(this.red));
                var r = t.redSqr(), n = r.redSub(this.c2), o = r.redMul(this.d).redMul(this.c2).redSub(this.a),
                    s = n.redMul(o.redInvm());
                if (0 === s.cmp(this.zero)) {
                    if (e) throw new Error("invalid point");
                    return this.point(this.zero, t)
                }
                var a = s.redSqrt();
                if (0 !== a.redSqr().redSub(s).cmp(this.zero)) throw new Error("invalid point");
                return a.fromRed().isOdd() !== e && (a = a.redNeg()), this.point(a, t)
            }, u.prototype.validate = function (t) {
                if (t.isInfinity()) return !0;
                t.normalize();
                var e = t.x.redSqr(), r = t.y.redSqr(), n = e.redMul(this.a).redAdd(r),
                    i = this.c2.redMul(this.one.redAdd(this.d.redMul(e).redMul(r)));
                return 0 === n.cmp(i)
            }, o(c, s.BasePoint), u.prototype.pointFromJSON = function (t) {
                return c.fromJSON(this, t)
            }, u.prototype.point = function (t, e, r, n) {
                return new c(this, t, e, r, n)
            }, c.fromJSON = function (t, e) {
                return new c(t, e[0], e[1], e[2])
            }, c.prototype.inspect = function () {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
            }, c.prototype.isInfinity = function () {
                return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c))
            }, c.prototype._extDbl = function () {
                var t = this.x.redSqr(), e = this.y.redSqr(), r = this.z.redSqr();
                r = r.redIAdd(r);
                var n = this.curve._mulA(t), i = this.x.redAdd(this.y).redSqr().redISub(t).redISub(e), o = n.redAdd(e),
                    s = o.redSub(r), a = n.redSub(e), u = i.redMul(s), c = o.redMul(a), f = i.redMul(a),
                    h = s.redMul(o);
                return this.curve.point(u, c, h, f)
            }, c.prototype._projDbl = function () {
                var t, e, r, n, i, o, s = this.x.redAdd(this.y).redSqr(), a = this.x.redSqr(), u = this.y.redSqr();
                if (this.curve.twisted) {
                    var c = (n = this.curve._mulA(a)).redAdd(u);
                    this.zOne ? (t = s.redSub(a).redSub(u).redMul(c.redSub(this.curve.two)), e = c.redMul(n.redSub(u)), r = c.redSqr().redSub(c).redSub(c)) : (i = this.z.redSqr(), o = c.redSub(i).redISub(i), t = s.redSub(a).redISub(u).redMul(o), e = c.redMul(n.redSub(u)), r = c.redMul(o))
                } else n = a.redAdd(u), i = this.curve._mulC(this.z).redSqr(), o = n.redSub(i).redSub(i), t = this.curve._mulC(s.redISub(n)).redMul(o), e = this.curve._mulC(n).redMul(a.redISub(u)), r = n.redMul(o);
                return this.curve.point(t, e, r)
            }, c.prototype.dbl = function () {
                return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
            }, c.prototype._extAdd = function (t) {
                var e = this.y.redSub(this.x).redMul(t.y.redSub(t.x)),
                    r = this.y.redAdd(this.x).redMul(t.y.redAdd(t.x)), n = this.t.redMul(this.curve.dd).redMul(t.t),
                    i = this.z.redMul(t.z.redAdd(t.z)), o = r.redSub(e), s = i.redSub(n), a = i.redAdd(n),
                    u = r.redAdd(e), c = o.redMul(s), f = a.redMul(u), h = o.redMul(u), d = s.redMul(a);
                return this.curve.point(c, f, d, h)
            }, c.prototype._projAdd = function (t) {
                var e, r, n = this.z.redMul(t.z), i = n.redSqr(), o = this.x.redMul(t.x), s = this.y.redMul(t.y),
                    a = this.curve.d.redMul(o).redMul(s), u = i.redSub(a), c = i.redAdd(a),
                    f = this.x.redAdd(this.y).redMul(t.x.redAdd(t.y)).redISub(o).redISub(s), h = n.redMul(u).redMul(f);
                return this.curve.twisted ? (e = n.redMul(c).redMul(s.redSub(this.curve._mulA(o))), r = u.redMul(c)) : (e = n.redMul(c).redMul(s.redSub(o)), r = this.curve._mulC(u).redMul(c)), this.curve.point(h, e, r)
            }, c.prototype.add = function (t) {
                return this.isInfinity() ? t : t.isInfinity() ? this : this.curve.extended ? this._extAdd(t) : this._projAdd(t)
            }, c.prototype.mul = function (t) {
                return this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve._wnafMul(this, t)
            }, c.prototype.mulAdd = function (t, e, r) {
                return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, !1)
            }, c.prototype.jmulAdd = function (t, e, r) {
                return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, !0)
            }, c.prototype.normalize = function () {
                if (this.zOne) return this;
                var t = this.z.redInvm();
                return this.x = this.x.redMul(t), this.y = this.y.redMul(t), this.t && (this.t = this.t.redMul(t)), this.z = this.curve.one, this.zOne = !0, this
            }, c.prototype.neg = function () {
                return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
            }, c.prototype.getX = function () {
                return this.normalize(), this.x.fromRed()
            }, c.prototype.getY = function () {
                return this.normalize(), this.y.fromRed()
            }, c.prototype.eq = function (t) {
                return this === t || 0 === this.getX().cmp(t.getX()) && 0 === this.getY().cmp(t.getY())
            }, c.prototype.eqXToP = function (t) {
                var e = t.toRed(this.curve.red).redMul(this.z);
                if (0 === this.x.cmp(e)) return !0;
                for (var r = t.clone(), n = this.curve.redN.redMul(this.z); ;) {
                    if (r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0) return !1;
                    if (e.redIAdd(n), 0 === this.x.cmp(e)) return !0
                }
            }, c.prototype.toP = c.prototype.normalize, c.prototype.mixedAdd = c.prototype.add
        }, 8254: (t, e, r) => {
            "use strict";
            var n = e;
            n.base = r(4918), n.short = r(6673), n.mont = r(2881), n.edwards = r(1138)
        }, 2881: (t, e, r) => {
            "use strict";
            var n = r(3785), i = r(5717), o = r(4918), s = r(953);

            function a(t) {
                o.call(this, "mont", t), this.a = new n(t.a, 16).toRed(this.red), this.b = new n(t.b, 16).toRed(this.red), this.i4 = new n(4).toRed(this.red).redInvm(), this.two = new n(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two))
            }

            function u(t, e, r) {
                o.BasePoint.call(this, t, "projective"), null === e && null === r ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new n(e, 16), this.z = new n(r, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)))
            }

            i(a, o), t.exports = a, a.prototype.validate = function (t) {
                var e = t.normalize().x, r = e.redSqr(), n = r.redMul(e).redAdd(r.redMul(this.a)).redAdd(e);
                return 0 === n.redSqrt().redSqr().cmp(n)
            }, i(u, o.BasePoint), a.prototype.decodePoint = function (t, e) {
                return this.point(s.toArray(t, e), 1)
            }, a.prototype.point = function (t, e) {
                return new u(this, t, e)
            }, a.prototype.pointFromJSON = function (t) {
                return u.fromJSON(this, t)
            }, u.prototype.precompute = function () {
            }, u.prototype._encode = function () {
                return this.getX().toArray("be", this.curve.p.byteLength())
            }, u.fromJSON = function (t, e) {
                return new u(t, e[0], e[1] || t.one)
            }, u.prototype.inspect = function () {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
            }, u.prototype.isInfinity = function () {
                return 0 === this.z.cmpn(0)
            }, u.prototype.dbl = function () {
                var t = this.x.redAdd(this.z).redSqr(), e = this.x.redSub(this.z).redSqr(), r = t.redSub(e),
                    n = t.redMul(e), i = r.redMul(e.redAdd(this.curve.a24.redMul(r)));
                return this.curve.point(n, i)
            }, u.prototype.add = function () {
                throw new Error("Not supported on Montgomery curve")
            }, u.prototype.diffAdd = function (t, e) {
                var r = this.x.redAdd(this.z), n = this.x.redSub(this.z), i = t.x.redAdd(t.z),
                    o = t.x.redSub(t.z).redMul(r), s = i.redMul(n), a = e.z.redMul(o.redAdd(s).redSqr()),
                    u = e.x.redMul(o.redISub(s).redSqr());
                return this.curve.point(a, u)
            }, u.prototype.mul = function (t) {
                for (var e = t.clone(), r = this, n = this.curve.point(null, null), i = []; 0 !== e.cmpn(0); e.iushrn(1)) i.push(e.andln(1));
                for (var o = i.length - 1; o >= 0; o--) 0 === i[o] ? (r = r.diffAdd(n, this), n = n.dbl()) : (n = r.diffAdd(n, this), r = r.dbl());
                return n
            }, u.prototype.mulAdd = function () {
                throw new Error("Not supported on Montgomery curve")
            }, u.prototype.jumlAdd = function () {
                throw new Error("Not supported on Montgomery curve")
            }, u.prototype.eq = function (t) {
                return 0 === this.getX().cmp(t.getX())
            }, u.prototype.normalize = function () {
                return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this
            }, u.prototype.getX = function () {
                return this.normalize(), this.x.fromRed()
            }
        }, 6673: (t, e, r) => {
            "use strict";
            var n = r(953), i = r(3785), o = r(5717), s = r(4918), a = n.assert;

            function u(t) {
                s.call(this, "short", t), this.a = new i(t.a, 16).toRed(this.red), this.b = new i(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(t), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
            }

            function c(t, e, r, n) {
                s.BasePoint.call(this, t, "affine"), null === e && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new i(e, 16), this.y = new i(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
            }

            function f(t, e, r, n) {
                s.BasePoint.call(this, t, "jacobian"), null === e && null === r && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new i(0)) : (this.x = new i(e, 16), this.y = new i(r, 16), this.z = new i(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
            }

            o(u, s), t.exports = u, u.prototype._getEndomorphism = function (t) {
                if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                    var e, r;
                    if (t.beta) e = new i(t.beta, 16).toRed(this.red); else {
                        var n = this._getEndoRoots(this.p);
                        e = (e = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red)
                    }
                    if (t.lambda) r = new i(t.lambda, 16); else {
                        var o = this._getEndoRoots(this.n);
                        0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(e)) ? r = o[0] : (r = o[1], a(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))))
                    }
                    return {
                        beta: e, lambda: r, basis: t.basis ? t.basis.map((function (t) {
                            return {a: new i(t.a, 16), b: new i(t.b, 16)}
                        })) : this._getEndoBasis(r)
                    }
                }
            }, u.prototype._getEndoRoots = function (t) {
                var e = t === this.p ? this.red : i.mont(t), r = new i(2).toRed(e).redInvm(), n = r.redNeg(),
                    o = new i(3).toRed(e).redNeg().redSqrt().redMul(r);
                return [n.redAdd(o).fromRed(), n.redSub(o).fromRed()]
            }, u.prototype._getEndoBasis = function (t) {
                for (var e, r, n, o, s, a, u, c, f, h = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), d = t, l = this.n.clone(), p = new i(1), b = new i(0), g = new i(0), y = new i(1), m = 0; 0 !== d.cmpn(0);) {
                    var w = l.div(d);
                    c = l.sub(w.mul(d)), f = g.sub(w.mul(p));
                    var v = y.sub(w.mul(b));
                    if (!n && c.cmp(h) < 0) e = u.neg(), r = p, n = c.neg(), o = f; else if (n && 2 == ++m) break;
                    u = c, l = d, d = c, g = p, p = f, y = b, b = v
                }
                s = c.neg(), a = f;
                var S = n.sqr().add(o.sqr());
                return s.sqr().add(a.sqr()).cmp(S) >= 0 && (s = e, a = r), n.negative && (n = n.neg(), o = o.neg()), s.negative && (s = s.neg(), a = a.neg()), [{
                    a: n,
                    b: o
                }, {a: s, b: a}]
            }, u.prototype._endoSplit = function (t) {
                var e = this.endo.basis, r = e[0], n = e[1], i = n.b.mul(t).divRound(this.n),
                    o = r.b.neg().mul(t).divRound(this.n), s = i.mul(r.a), a = o.mul(n.a), u = i.mul(r.b),
                    c = o.mul(n.b);
                return {k1: t.sub(s).sub(a), k2: u.add(c).neg()}
            }, u.prototype.pointFromX = function (t, e) {
                (t = new i(t, 16)).red || (t = t.toRed(this.red));
                var r = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b), n = r.redSqrt();
                if (0 !== n.redSqr().redSub(r).cmp(this.zero)) throw new Error("invalid point");
                var o = n.fromRed().isOdd();
                return (e && !o || !e && o) && (n = n.redNeg()), this.point(t, n)
            }, u.prototype.validate = function (t) {
                if (t.inf) return !0;
                var e = t.x, r = t.y, n = this.a.redMul(e), i = e.redSqr().redMul(e).redIAdd(n).redIAdd(this.b);
                return 0 === r.redSqr().redISub(i).cmpn(0)
            }, u.prototype._endoWnafMulAdd = function (t, e, r) {
                for (var n = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < t.length; o++) {
                    var s = this._endoSplit(e[o]), a = t[o], u = a._getBeta();
                    s.k1.negative && (s.k1.ineg(), a = a.neg(!0)), s.k2.negative && (s.k2.ineg(), u = u.neg(!0)), n[2 * o] = a, n[2 * o + 1] = u, i[2 * o] = s.k1, i[2 * o + 1] = s.k2
                }
                for (var c = this._wnafMulAdd(1, n, i, 2 * o, r), f = 0; f < 2 * o; f++) n[f] = null, i[f] = null;
                return c
            }, o(c, s.BasePoint), u.prototype.point = function (t, e, r) {
                return new c(this, t, e, r)
            }, u.prototype.pointFromJSON = function (t, e) {
                return c.fromJSON(this, t, e)
            }, c.prototype._getBeta = function () {
                if (this.curve.endo) {
                    var t = this.precomputed;
                    if (t && t.beta) return t.beta;
                    var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                    if (t) {
                        var r = this.curve, n = function (t) {
                            return r.point(t.x.redMul(r.endo.beta), t.y)
                        };
                        t.beta = e, e.precomputed = {
                            beta: null,
                            naf: t.naf && {wnd: t.naf.wnd, points: t.naf.points.map(n)},
                            doubles: t.doubles && {step: t.doubles.step, points: t.doubles.points.map(n)}
                        }
                    }
                    return e
                }
            }, c.prototype.toJSON = function () {
                return this.precomputed ? [this.x, this.y, this.precomputed && {
                    doubles: this.precomputed.doubles && {
                        step: this.precomputed.doubles.step,
                        points: this.precomputed.doubles.points.slice(1)
                    },
                    naf: this.precomputed.naf && {
                        wnd: this.precomputed.naf.wnd,
                        points: this.precomputed.naf.points.slice(1)
                    }
                }] : [this.x, this.y]
            }, c.fromJSON = function (t, e, r) {
                "string" == typeof e && (e = JSON.parse(e));
                var n = t.point(e[0], e[1], r);
                if (!e[2]) return n;

                function i(e) {
                    return t.point(e[0], e[1], r)
                }

                var o = e[2];
                return n.precomputed = {
                    beta: null,
                    doubles: o.doubles && {step: o.doubles.step, points: [n].concat(o.doubles.points.map(i))},
                    naf: o.naf && {wnd: o.naf.wnd, points: [n].concat(o.naf.points.map(i))}
                }, n
            }, c.prototype.inspect = function () {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
            }, c.prototype.isInfinity = function () {
                return this.inf
            }, c.prototype.add = function (t) {
                if (this.inf) return t;
                if (t.inf) return this;
                if (this.eq(t)) return this.dbl();
                if (this.neg().eq(t)) return this.curve.point(null, null);
                if (0 === this.x.cmp(t.x)) return this.curve.point(null, null);
                var e = this.y.redSub(t.y);
                0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
                var r = e.redSqr().redISub(this.x).redISub(t.x), n = e.redMul(this.x.redSub(r)).redISub(this.y);
                return this.curve.point(r, n)
            }, c.prototype.dbl = function () {
                if (this.inf) return this;
                var t = this.y.redAdd(this.y);
                if (0 === t.cmpn(0)) return this.curve.point(null, null);
                var e = this.curve.a, r = this.x.redSqr(), n = t.redInvm(),
                    i = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(n), o = i.redSqr().redISub(this.x.redAdd(this.x)),
                    s = i.redMul(this.x.redSub(o)).redISub(this.y);
                return this.curve.point(o, s)
            }, c.prototype.getX = function () {
                return this.x.fromRed()
            }, c.prototype.getY = function () {
                return this.y.fromRed()
            }, c.prototype.mul = function (t) {
                return t = new i(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t)
            }, c.prototype.mulAdd = function (t, e, r) {
                var n = [this, e], i = [t, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2)
            }, c.prototype.jmulAdd = function (t, e, r) {
                var n = [this, e], i = [t, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0)
            }, c.prototype.eq = function (t) {
                return this === t || this.inf === t.inf && (this.inf || 0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))
            }, c.prototype.neg = function (t) {
                if (this.inf) return this;
                var e = this.curve.point(this.x, this.y.redNeg());
                if (t && this.precomputed) {
                    var r = this.precomputed, n = function (t) {
                        return t.neg()
                    };
                    e.precomputed = {
                        naf: r.naf && {wnd: r.naf.wnd, points: r.naf.points.map(n)},
                        doubles: r.doubles && {step: r.doubles.step, points: r.doubles.points.map(n)}
                    }
                }
                return e
            }, c.prototype.toJ = function () {
                return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
            }, o(f, s.BasePoint), u.prototype.jpoint = function (t, e, r) {
                return new f(this, t, e, r)
            }, f.prototype.toP = function () {
                if (this.isInfinity()) return this.curve.point(null, null);
                var t = this.z.redInvm(), e = t.redSqr(), r = this.x.redMul(e), n = this.y.redMul(e).redMul(t);
                return this.curve.point(r, n)
            }, f.prototype.neg = function () {
                return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
            }, f.prototype.add = function (t) {
                if (this.isInfinity()) return t;
                if (t.isInfinity()) return this;
                var e = t.z.redSqr(), r = this.z.redSqr(), n = this.x.redMul(e), i = t.x.redMul(r),
                    o = this.y.redMul(e.redMul(t.z)), s = t.y.redMul(r.redMul(this.z)), a = n.redSub(i),
                    u = o.redSub(s);
                if (0 === a.cmpn(0)) return 0 !== u.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var c = a.redSqr(), f = c.redMul(a), h = n.redMul(c), d = u.redSqr().redIAdd(f).redISub(h).redISub(h),
                    l = u.redMul(h.redISub(d)).redISub(o.redMul(f)), p = this.z.redMul(t.z).redMul(a);
                return this.curve.jpoint(d, l, p)
            }, f.prototype.mixedAdd = function (t) {
                if (this.isInfinity()) return t.toJ();
                if (t.isInfinity()) return this;
                var e = this.z.redSqr(), r = this.x, n = t.x.redMul(e), i = this.y, o = t.y.redMul(e).redMul(this.z),
                    s = r.redSub(n), a = i.redSub(o);
                if (0 === s.cmpn(0)) return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var u = s.redSqr(), c = u.redMul(s), f = r.redMul(u), h = a.redSqr().redIAdd(c).redISub(f).redISub(f),
                    d = a.redMul(f.redISub(h)).redISub(i.redMul(c)), l = this.z.redMul(s);
                return this.curve.jpoint(h, d, l)
            }, f.prototype.dblp = function (t) {
                if (0 === t) return this;
                if (this.isInfinity()) return this;
                if (!t) return this.dbl();
                var e;
                if (this.curve.zeroA || this.curve.threeA) {
                    var r = this;
                    for (e = 0; e < t; e++) r = r.dbl();
                    return r
                }
                var n = this.curve.a, i = this.curve.tinv, o = this.x, s = this.y, a = this.z, u = a.redSqr().redSqr(),
                    c = s.redAdd(s);
                for (e = 0; e < t; e++) {
                    var f = o.redSqr(), h = c.redSqr(), d = h.redSqr(), l = f.redAdd(f).redIAdd(f).redIAdd(n.redMul(u)),
                        p = o.redMul(h), b = l.redSqr().redISub(p.redAdd(p)), g = p.redISub(b), y = l.redMul(g);
                    y = y.redIAdd(y).redISub(d);
                    var m = c.redMul(a);
                    e + 1 < t && (u = u.redMul(d)), o = b, a = m, c = y
                }
                return this.curve.jpoint(o, c.redMul(i), a)
            }, f.prototype.dbl = function () {
                return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
            }, f.prototype._zeroDbl = function () {
                var t, e, r;
                if (this.zOne) {
                    var n = this.x.redSqr(), i = this.y.redSqr(), o = i.redSqr(),
                        s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                    s = s.redIAdd(s);
                    var a = n.redAdd(n).redIAdd(n), u = a.redSqr().redISub(s).redISub(s), c = o.redIAdd(o);
                    c = (c = c.redIAdd(c)).redIAdd(c), t = u, e = a.redMul(s.redISub(u)).redISub(c), r = this.y.redAdd(this.y)
                } else {
                    var f = this.x.redSqr(), h = this.y.redSqr(), d = h.redSqr(),
                        l = this.x.redAdd(h).redSqr().redISub(f).redISub(d);
                    l = l.redIAdd(l);
                    var p = f.redAdd(f).redIAdd(f), b = p.redSqr(), g = d.redIAdd(d);
                    g = (g = g.redIAdd(g)).redIAdd(g), t = b.redISub(l).redISub(l), e = p.redMul(l.redISub(t)).redISub(g), r = (r = this.y.redMul(this.z)).redIAdd(r)
                }
                return this.curve.jpoint(t, e, r)
            }, f.prototype._threeDbl = function () {
                var t, e, r;
                if (this.zOne) {
                    var n = this.x.redSqr(), i = this.y.redSqr(), o = i.redSqr(),
                        s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                    s = s.redIAdd(s);
                    var a = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a), u = a.redSqr().redISub(s).redISub(s);
                    t = u;
                    var c = o.redIAdd(o);
                    c = (c = c.redIAdd(c)).redIAdd(c), e = a.redMul(s.redISub(u)).redISub(c), r = this.y.redAdd(this.y)
                } else {
                    var f = this.z.redSqr(), h = this.y.redSqr(), d = this.x.redMul(h),
                        l = this.x.redSub(f).redMul(this.x.redAdd(f));
                    l = l.redAdd(l).redIAdd(l);
                    var p = d.redIAdd(d), b = (p = p.redIAdd(p)).redAdd(p);
                    t = l.redSqr().redISub(b), r = this.y.redAdd(this.z).redSqr().redISub(h).redISub(f);
                    var g = h.redSqr();
                    g = (g = (g = g.redIAdd(g)).redIAdd(g)).redIAdd(g), e = l.redMul(p.redISub(t)).redISub(g)
                }
                return this.curve.jpoint(t, e, r)
            }, f.prototype._dbl = function () {
                var t = this.curve.a, e = this.x, r = this.y, n = this.z, i = n.redSqr().redSqr(), o = e.redSqr(),
                    s = r.redSqr(), a = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(i)), u = e.redAdd(e),
                    c = (u = u.redIAdd(u)).redMul(s), f = a.redSqr().redISub(c.redAdd(c)), h = c.redISub(f),
                    d = s.redSqr();
                d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
                var l = a.redMul(h).redISub(d), p = r.redAdd(r).redMul(n);
                return this.curve.jpoint(f, l, p)
            }, f.prototype.trpl = function () {
                if (!this.curve.zeroA) return this.dbl().add(this);
                var t = this.x.redSqr(), e = this.y.redSqr(), r = this.z.redSqr(), n = e.redSqr(),
                    i = t.redAdd(t).redIAdd(t), o = i.redSqr(), s = this.x.redAdd(e).redSqr().redISub(t).redISub(n),
                    a = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr(), u = n.redIAdd(n);
                u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
                var c = i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(u), f = e.redMul(c);
                f = (f = f.redIAdd(f)).redIAdd(f);
                var h = this.x.redMul(a).redISub(f);
                h = (h = h.redIAdd(h)).redIAdd(h);
                var d = this.y.redMul(c.redMul(u.redISub(c)).redISub(s.redMul(a)));
                d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
                var l = this.z.redAdd(s).redSqr().redISub(r).redISub(a);
                return this.curve.jpoint(h, d, l)
            }, f.prototype.mul = function (t, e) {
                return t = new i(t, e), this.curve._wnafMul(this, t)
            }, f.prototype.eq = function (t) {
                if ("affine" === t.type) return this.eq(t.toJ());
                if (this === t) return !0;
                var e = this.z.redSqr(), r = t.z.redSqr();
                if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0)) return !1;
                var n = e.redMul(this.z), i = r.redMul(t.z);
                return 0 === this.y.redMul(i).redISub(t.y.redMul(n)).cmpn(0)
            }, f.prototype.eqXToP = function (t) {
                var e = this.z.redSqr(), r = t.toRed(this.curve.red).redMul(e);
                if (0 === this.x.cmp(r)) return !0;
                for (var n = t.clone(), i = this.curve.redN.redMul(e); ;) {
                    if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
                    if (r.redIAdd(i), 0 === this.x.cmp(r)) return !0
                }
            }, f.prototype.inspect = function () {
                return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
            }, f.prototype.isInfinity = function () {
                return 0 === this.z.cmpn(0)
            }
        }, 5427: (t, e, r) => {
            "use strict";
            var n, i = e, o = r(3715), s = r(8254), a = r(953).assert;

            function u(t) {
                "short" === t.type ? this.curve = new s.short(t) : "edwards" === t.type ? this.curve = new s.edwards(t) : this.curve = new s.mont(t), this.g = this.curve.g, this.n = this.curve.n, this.hash = t.hash, a(this.g.validate(), "Invalid curve"), a(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
            }

            function c(t, e) {
                Object.defineProperty(i, t, {
                    configurable: !0, enumerable: !0, get: function () {
                        var r = new u(e);
                        return Object.defineProperty(i, t, {configurable: !0, enumerable: !0, value: r}), r
                    }
                })
            }

            i.PresetCurve = u, c("p192", {
                type: "short",
                prime: "p192",
                p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                hash: o.sha256,
                gRed: !1,
                g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
            }), c("p224", {
                type: "short",
                prime: "p224",
                p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                hash: o.sha256,
                gRed: !1,
                g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
            }), c("p256", {
                type: "short",
                prime: null,
                p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                hash: o.sha256,
                gRed: !1,
                g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
            }), c("p384", {
                type: "short",
                prime: null,
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                hash: o.sha384,
                gRed: !1,
                g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
            }), c("p521", {
                type: "short",
                prime: null,
                p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                hash: o.sha512,
                gRed: !1,
                g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
            }), c("curve25519", {
                type: "mont",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "76d06",
                b: "1",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: o.sha256,
                gRed: !1,
                g: ["9"]
            }), c("ed25519", {
                type: "edwards",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "-1",
                c: "1",
                d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: o.sha256,
                gRed: !1,
                g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
            });
            try {
                n = r(1037)
            } catch (t) {
                n = void 0
            }
            c("secp256k1", {
                type: "short",
                prime: "k256",
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                a: "0",
                b: "7",
                n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                h: "1",
                hash: o.sha256,
                beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                basis: [{
                    a: "3086d221a7d46bcde86c90e49284eb15",
                    b: "-e4437ed6010e88286f547fa90abfe4c3"
                }, {a: "114ca50f7a8e2f3f657c1108d9d44cfd8", b: "3086d221a7d46bcde86c90e49284eb15"}],
                gRed: !1,
                g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", n]
            })
        }, 7954: (t, e, r) => {
            "use strict";
            var n = r(3785), i = r(2156), o = r(953), s = r(5427), a = r(9931), u = o.assert, c = r(1251), f = r(611);

            function h(t) {
                if (!(this instanceof h)) return new h(t);
                "string" == typeof t && (u(Object.prototype.hasOwnProperty.call(s, t), "Unknown curve " + t), t = s[t]), t instanceof s.PresetCurve && (t = {curve: t}), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash
            }

            t.exports = h, h.prototype.keyPair = function (t) {
                return new c(this, t)
            }, h.prototype.keyFromPrivate = function (t, e) {
                return c.fromPrivate(this, t, e)
            }, h.prototype.keyFromPublic = function (t, e) {
                return c.fromPublic(this, t, e)
            }, h.prototype.genKeyPair = function (t) {
                t || (t = {});
                for (var e = new i({
                    hash: this.hash,
                    pers: t.pers,
                    persEnc: t.persEnc || "utf8",
                    entropy: t.entropy || a(this.hash.hmacStrength),
                    entropyEnc: t.entropy && t.entropyEnc || "utf8",
                    nonce: this.n.toArray()
                }), r = this.n.byteLength(), o = this.n.sub(new n(2)); ;) {
                    var s = new n(e.generate(r));
                    if (!(s.cmp(o) > 0)) return s.iaddn(1), this.keyFromPrivate(s)
                }
            }, h.prototype._truncateToN = function (t, e) {
                var r = 8 * t.byteLength() - this.n.bitLength();
                return r > 0 && (t = t.ushrn(r)), !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
            }, h.prototype.sign = function (t, e, r, o) {
                "object" == typeof r && (o = r, r = null), o || (o = {}), e = this.keyFromPrivate(e, r), t = this._truncateToN(new n(t, 16));
                for (var s = this.n.byteLength(), a = e.getPrivate().toArray("be", s), u = t.toArray("be", s), c = new i({
                    hash: this.hash,
                    entropy: a,
                    nonce: u,
                    pers: o.pers,
                    persEnc: o.persEnc || "utf8"
                }), h = this.n.sub(new n(1)), d = 0; ; d++) {
                    var l = o.k ? o.k(d) : new n(c.generate(this.n.byteLength()));
                    if (!((l = this._truncateToN(l, !0)).cmpn(1) <= 0 || l.cmp(h) >= 0)) {
                        var p = this.g.mul(l);
                        if (!p.isInfinity()) {
                            var b = p.getX(), g = b.umod(this.n);
                            if (0 !== g.cmpn(0)) {
                                var y = l.invm(this.n).mul(g.mul(e.getPrivate()).iadd(t));
                                if (0 !== (y = y.umod(this.n)).cmpn(0)) {
                                    var m = (p.getY().isOdd() ? 1 : 0) | (0 !== b.cmp(g) ? 2 : 0);
                                    return o.canonical && y.cmp(this.nh) > 0 && (y = this.n.sub(y), m ^= 1), new f({
                                        r: g,
                                        s: y,
                                        recoveryParam: m
                                    })
                                }
                            }
                        }
                    }
                }
            }, h.prototype.verify = function (t, e, r, i) {
                t = this._truncateToN(new n(t, 16)), r = this.keyFromPublic(r, i);
                var o = (e = new f(e, "hex")).r, s = e.s;
                if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
                if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
                var a, u = s.invm(this.n), c = u.mul(t).umod(this.n), h = u.mul(o).umod(this.n);
                return this.curve._maxwellTrick ? !(a = this.g.jmulAdd(c, r.getPublic(), h)).isInfinity() && a.eqXToP(o) : !(a = this.g.mulAdd(c, r.getPublic(), h)).isInfinity() && 0 === a.getX().umod(this.n).cmp(o)
            }, h.prototype.recoverPubKey = function (t, e, r, i) {
                u((3 & r) === r, "The recovery param is more than two bits"), e = new f(e, i);
                var o = this.n, s = new n(t), a = e.r, c = e.s, h = 1 & r, d = r >> 1;
                if (a.cmp(this.curve.p.umod(this.curve.n)) >= 0 && d) throw new Error("Unable to find sencond key candinate");
                a = d ? this.curve.pointFromX(a.add(this.curve.n), h) : this.curve.pointFromX(a, h);
                var l = e.r.invm(o), p = o.sub(s).mul(l).umod(o), b = c.mul(l).umod(o);
                return this.g.mulAdd(p, a, b)
            }, h.prototype.getKeyRecoveryParam = function (t, e, r, n) {
                if (null !== (e = new f(e, n)).recoveryParam) return e.recoveryParam;
                for (var i = 0; i < 4; i++) {
                    var o;
                    try {
                        o = this.recoverPubKey(t, e, i)
                    } catch (t) {
                        continue
                    }
                    if (o.eq(r)) return i
                }
                throw new Error("Unable to find valid recovery factor")
            }
        }, 1251: (t, e, r) => {
            "use strict";
            var n = r(3785), i = r(953).assert;

            function o(t, e) {
                this.ec = t, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc)
            }

            t.exports = o, o.fromPublic = function (t, e, r) {
                return e instanceof o ? e : new o(t, {pub: e, pubEnc: r})
            }, o.fromPrivate = function (t, e, r) {
                return e instanceof o ? e : new o(t, {priv: e, privEnc: r})
            }, o.prototype.validate = function () {
                var t = this.getPublic();
                return t.isInfinity() ? {
                    result: !1,
                    reason: "Invalid public key"
                } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {result: !0, reason: null} : {
                    result: !1,
                    reason: "Public key * N != O"
                } : {result: !1, reason: "Public key is not a point"}
            }, o.prototype.getPublic = function (t, e) {
                return "string" == typeof t && (e = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), e ? this.pub.encode(e, t) : this.pub
            }, o.prototype.getPrivate = function (t) {
                return "hex" === t ? this.priv.toString(16, 2) : this.priv
            }, o.prototype._importPrivate = function (t, e) {
                this.priv = new n(t, e || 16), this.priv = this.priv.umod(this.ec.curve.n)
            }, o.prototype._importPublic = function (t, e) {
                if (t.x || t.y) return "mont" === this.ec.curve.type ? i(t.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || i(t.x && t.y, "Need both x and y coordinate"), void (this.pub = this.ec.curve.point(t.x, t.y));
                this.pub = this.ec.curve.decodePoint(t, e)
            }, o.prototype.derive = function (t) {
                return t.validate() || i(t.validate(), "public point not validated"), t.mul(this.priv).getX()
            }, o.prototype.sign = function (t, e, r) {
                return this.ec.sign(t, this, e, r)
            }, o.prototype.verify = function (t, e) {
                return this.ec.verify(t, e, this)
            }, o.prototype.inspect = function () {
                return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
            }
        }, 611: (t, e, r) => {
            "use strict";
            var n = r(3785), i = r(953), o = i.assert;

            function s(t, e) {
                if (t instanceof s) return t;
                this._importDER(t, e) || (o(t.r && t.s, "Signature without r or s"), this.r = new n(t.r, 16), this.s = new n(t.s, 16), void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam)
            }

            function a() {
                this.place = 0
            }

            function u(t, e) {
                var r = t[e.place++];
                if (!(128 & r)) return r;
                var n = 15 & r;
                if (0 === n || n > 4) return !1;
                for (var i = 0, o = 0, s = e.place; o < n; o++, s++) i <<= 8, i |= t[s], i >>>= 0;
                return !(i <= 127) && (e.place = s, i)
            }

            function c(t) {
                for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r;) e++;
                return 0 === e ? t : t.slice(e)
            }

            function f(t, e) {
                if (e < 128) t.push(e); else {
                    var r = 1 + (Math.log(e) / Math.LN2 >>> 3);
                    for (t.push(128 | r); --r;) t.push(e >>> (r << 3) & 255);
                    t.push(e)
                }
            }

            t.exports = s, s.prototype._importDER = function (t, e) {
                t = i.toArray(t, e);
                var r = new a;
                if (48 !== t[r.place++]) return !1;
                var o = u(t, r);
                if (!1 === o) return !1;
                if (o + r.place !== t.length) return !1;
                if (2 !== t[r.place++]) return !1;
                var s = u(t, r);
                if (!1 === s) return !1;
                var c = t.slice(r.place, s + r.place);
                if (r.place += s, 2 !== t[r.place++]) return !1;
                var f = u(t, r);
                if (!1 === f) return !1;
                if (t.length !== f + r.place) return !1;
                var h = t.slice(r.place, f + r.place);
                if (0 === c[0]) {
                    if (!(128 & c[1])) return !1;
                    c = c.slice(1)
                }
                if (0 === h[0]) {
                    if (!(128 & h[1])) return !1;
                    h = h.slice(1)
                }
                return this.r = new n(c), this.s = new n(h), this.recoveryParam = null, !0
            }, s.prototype.toDER = function (t) {
                var e = this.r.toArray(), r = this.s.toArray();
                for (128 & e[0] && (e = [0].concat(e)), 128 & r[0] && (r = [0].concat(r)), e = c(e), r = c(r); !(r[0] || 128 & r[1]);) r = r.slice(1);
                var n = [2];
                f(n, e.length), (n = n.concat(e)).push(2), f(n, r.length);
                var o = n.concat(r), s = [48];
                return f(s, o.length), s = s.concat(o), i.encode(s, t)
            }
        }, 5980: (t, e, r) => {
            "use strict";
            var n = r(3715), i = r(5427), o = r(953), s = o.assert, a = o.parseBytes, u = r(9087), c = r(3622);

            function f(t) {
                if (s("ed25519" === t, "only tested with ed25519 so far"), !(this instanceof f)) return new f(t);
                t = i[t].curve, this.curve = t, this.g = t.g, this.g.precompute(t.n.bitLength() + 1), this.pointClass = t.point().constructor, this.encodingLength = Math.ceil(t.n.bitLength() / 8), this.hash = n.sha512
            }

            t.exports = f, f.prototype.sign = function (t, e) {
                t = a(t);
                var r = this.keyFromSecret(e), n = this.hashInt(r.messagePrefix(), t), i = this.g.mul(n),
                    o = this.encodePoint(i), s = this.hashInt(o, r.pubBytes(), t).mul(r.priv()),
                    u = n.add(s).umod(this.curve.n);
                return this.makeSignature({R: i, S: u, Rencoded: o})
            }, f.prototype.verify = function (t, e, r) {
                t = a(t), e = this.makeSignature(e);
                var n = this.keyFromPublic(r), i = this.hashInt(e.Rencoded(), n.pubBytes(), t), o = this.g.mul(e.S());
                return e.R().add(n.pub().mul(i)).eq(o)
            }, f.prototype.hashInt = function () {
                for (var t = this.hash(), e = 0; e < arguments.length; e++) t.update(arguments[e]);
                return o.intFromLE(t.digest()).umod(this.curve.n)
            }, f.prototype.keyFromPublic = function (t) {
                return u.fromPublic(this, t)
            }, f.prototype.keyFromSecret = function (t) {
                return u.fromSecret(this, t)
            }, f.prototype.makeSignature = function (t) {
                return t instanceof c ? t : new c(this, t)
            }, f.prototype.encodePoint = function (t) {
                var e = t.getY().toArray("le", this.encodingLength);
                return e[this.encodingLength - 1] |= t.getX().isOdd() ? 128 : 0, e
            }, f.prototype.decodePoint = function (t) {
                var e = (t = o.parseBytes(t)).length - 1, r = t.slice(0, e).concat(-129 & t[e]), n = 0 != (128 & t[e]),
                    i = o.intFromLE(r);
                return this.curve.pointFromY(i, n)
            }, f.prototype.encodeInt = function (t) {
                return t.toArray("le", this.encodingLength)
            }, f.prototype.decodeInt = function (t) {
                return o.intFromLE(t)
            }, f.prototype.isPoint = function (t) {
                return t instanceof this.pointClass
            }
        }, 9087: (t, e, r) => {
            "use strict";
            var n = r(953), i = n.assert, o = n.parseBytes, s = n.cachedProperty;

            function a(t, e) {
                this.eddsa = t, this._secret = o(e.secret), t.isPoint(e.pub) ? this._pub = e.pub : this._pubBytes = o(e.pub)
            }

            a.fromPublic = function (t, e) {
                return e instanceof a ? e : new a(t, {pub: e})
            }, a.fromSecret = function (t, e) {
                return e instanceof a ? e : new a(t, {secret: e})
            }, a.prototype.secret = function () {
                return this._secret
            }, s(a, "pubBytes", (function () {
                return this.eddsa.encodePoint(this.pub())
            })), s(a, "pub", (function () {
                return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
            })), s(a, "privBytes", (function () {
                var t = this.eddsa, e = this.hash(), r = t.encodingLength - 1, n = e.slice(0, t.encodingLength);
                return n[0] &= 248, n[r] &= 127, n[r] |= 64, n
            })), s(a, "priv", (function () {
                return this.eddsa.decodeInt(this.privBytes())
            })), s(a, "hash", (function () {
                return this.eddsa.hash().update(this.secret()).digest()
            })), s(a, "messagePrefix", (function () {
                return this.hash().slice(this.eddsa.encodingLength)
            })), a.prototype.sign = function (t) {
                return i(this._secret, "KeyPair can only verify"), this.eddsa.sign(t, this)
            }, a.prototype.verify = function (t, e) {
                return this.eddsa.verify(t, e, this)
            }, a.prototype.getSecret = function (t) {
                return i(this._secret, "KeyPair is public only"), n.encode(this.secret(), t)
            }, a.prototype.getPublic = function (t) {
                return n.encode(this.pubBytes(), t)
            }, t.exports = a
        }, 3622: (t, e, r) => {
            "use strict";
            var n = r(3785), i = r(953), o = i.assert, s = i.cachedProperty, a = i.parseBytes;

            function u(t, e) {
                this.eddsa = t, "object" != typeof e && (e = a(e)), Array.isArray(e) && (e = {
                    R: e.slice(0, t.encodingLength),
                    S: e.slice(t.encodingLength)
                }), o(e.R && e.S, "Signature without R or S"), t.isPoint(e.R) && (this._R = e.R), e.S instanceof n && (this._S = e.S), this._Rencoded = Array.isArray(e.R) ? e.R : e.Rencoded, this._Sencoded = Array.isArray(e.S) ? e.S : e.Sencoded
            }

            s(u, "S", (function () {
                return this.eddsa.decodeInt(this.Sencoded())
            })), s(u, "R", (function () {
                return this.eddsa.decodePoint(this.Rencoded())
            })), s(u, "Rencoded", (function () {
                return this.eddsa.encodePoint(this.R())
            })), s(u, "Sencoded", (function () {
                return this.eddsa.encodeInt(this.S())
            })), u.prototype.toBytes = function () {
                return this.Rencoded().concat(this.Sencoded())
            }, u.prototype.toHex = function () {
                return i.encode(this.toBytes(), "hex").toUpperCase()
            }, t.exports = u
        }, 1037: t => {
            t.exports = {
                doubles: {
                    step: 4,
                    points: [["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"], ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"], ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"], ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"], ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"], ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"], ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"], ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"], ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"], ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"], ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"], ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"], ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"], ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"], ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"], ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"], ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"], ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"], ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"], ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"], ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"], ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"], ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"], ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"], ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"], ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"], ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"], ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"], ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"], ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"], ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"], ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"], ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"], ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"], ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"], ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"], ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"], ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"], ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"], ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"], ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"], ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"], ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"], ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"], ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"], ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"], ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"], ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"], ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"], ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"], ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"], ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"], ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"], ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"], ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"], ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"], ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"], ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"], ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"], ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"], ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"], ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"], ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"], ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"], ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]]
                }, naf: {
                    wnd: 7,
                    points: [["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"], ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"], ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"], ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"], ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"], ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"], ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"], ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"], ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"], ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"], ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"], ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"], ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"], ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"], ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"], ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"], ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"], ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"], ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"], ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"], ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"], ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"], ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"], ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"], ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"], ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"], ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"], ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"], ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"], ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"], ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"], ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"], ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"], ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"], ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"], ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"], ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"], ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"], ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"], ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"], ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"], ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"], ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"], ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"], ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"], ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"], ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"], ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"], ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"], ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"], ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"], ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"], ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"], ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"], ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"], ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"], ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"], ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"], ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"], ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"], ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"], ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"], ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"], ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"], ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"], ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"], ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"], ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"], ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"], ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"], ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"], ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"], ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"], ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"], ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"], ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"], ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"], ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"], ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"], ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"], ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"], ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"], ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"], ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"], ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"], ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"], ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"], ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"], ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"], ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"], ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"], ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"], ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"], ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"], ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"], ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"], ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"], ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"], ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"], ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"], ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"], ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"], ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"], ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"], ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"], ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"], ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"], ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"], ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"], ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"], ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"], ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"], ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"], ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"], ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"], ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"], ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"], ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"], ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"], ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"], ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"], ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"], ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"], ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"], ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"], ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"], ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]]
                }
            }
        }, 953: (t, e, r) => {
            "use strict";
            var n = e, i = r(3785), o = r(9746), s = r(4504);
            n.assert = o, n.toArray = s.toArray, n.zero2 = s.zero2, n.toHex = s.toHex, n.encode = s.encode, n.getNAF = function (t, e, r) {
                var n = new Array(Math.max(t.bitLength(), r) + 1);
                n.fill(0);
                for (var i = 1 << e + 1, o = t.clone(), s = 0; s < n.length; s++) {
                    var a, u = o.andln(i - 1);
                    o.isOdd() ? (a = u > (i >> 1) - 1 ? (i >> 1) - u : u, o.isubn(a)) : a = 0, n[s] = a, o.iushrn(1)
                }
                return n
            }, n.getJSF = function (t, e) {
                var r = [[], []];
                t = t.clone(), e = e.clone();
                for (var n, i = 0, o = 0; t.cmpn(-i) > 0 || e.cmpn(-o) > 0;) {
                    var s, a, u = t.andln(3) + i & 3, c = e.andln(3) + o & 3;
                    3 === u && (u = -1), 3 === c && (c = -1), s = 0 == (1 & u) ? 0 : 3 != (n = t.andln(7) + i & 7) && 5 !== n || 2 !== c ? u : -u, r[0].push(s), a = 0 == (1 & c) ? 0 : 3 != (n = e.andln(7) + o & 7) && 5 !== n || 2 !== u ? c : -c, r[1].push(a), 2 * i === s + 1 && (i = 1 - i), 2 * o === a + 1 && (o = 1 - o), t.iushrn(1), e.iushrn(1)
                }
                return r
            }, n.cachedProperty = function (t, e, r) {
                var n = "_" + e;
                t.prototype[e] = function () {
                    return void 0 !== this[n] ? this[n] : this[n] = r.call(this)
                }
            }, n.parseBytes = function (t) {
                return "string" == typeof t ? n.toArray(t, "hex") : t
            }, n.intFromLE = function (t) {
                return new i(t, "hex", "le")
            }
        }, 3785: function (t, e, r) {
            !function (t, e) {
                "use strict";

                function n(t, e) {
                    if (!t) throw new Error(e || "Assertion failed")
                }

                function i(t, e) {
                    t.super_ = e;
                    var r = function () {
                    };
                    r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                }

                function o(t, e, r) {
                    if (o.isBN(t)) return t;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== e && "be" !== e || (r = e, e = 10), this._init(t || 0, e || 10, r || "be"))
                }

                var s;
                "object" == typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
                try {
                    s = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : r(5568).Buffer
                } catch (t) {
                }

                function a(t, e) {
                    var r = t.charCodeAt(e);
                    return r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : r - 48 & 15
                }

                function u(t, e, r) {
                    var n = a(t, r);
                    return r - 1 >= e && (n |= a(t, r - 1) << 4), n
                }

                function c(t, e, r, n) {
                    for (var i = 0, o = Math.min(t.length, r), s = e; s < o; s++) {
                        var a = t.charCodeAt(s) - 48;
                        i *= n, i += a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a
                    }
                    return i
                }

                o.isBN = function (t) {
                    return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                }, o.max = function (t, e) {
                    return t.cmp(e) > 0 ? t : e
                }, o.min = function (t, e) {
                    return t.cmp(e) < 0 ? t : e
                }, o.prototype._init = function (t, e, r) {
                    if ("number" == typeof t) return this._initNumber(t, e, r);
                    if ("object" == typeof t) return this._initArray(t, e, r);
                    "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
                    var i = 0;
                    "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (i++, this.negative = 1), i < t.length && (16 === e ? this._parseHex(t, i, r) : (this._parseBase(t, e, i), "le" === r && this._initArray(this.toArray(), e, r)))
                }, o.prototype._initNumber = function (t, e, r) {
                    t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (n(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), e, r)
                }, o.prototype._initArray = function (t, e, r) {
                    if (n("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                    this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                    for (var i = 0; i < this.length; i++) this.words[i] = 0;
                    var o, s, a = 0;
                    if ("be" === r) for (i = t.length - 1, o = 0; i >= 0; i -= 3) s = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++); else if ("le" === r) for (i = 0, o = 0; i < t.length; i += 3) s = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);
                    return this.strip()
                }, o.prototype._parseHex = function (t, e, r) {
                    this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
                    for (var n = 0; n < this.length; n++) this.words[n] = 0;
                    var i, o = 0, s = 0;
                    if ("be" === r) for (n = t.length - 1; n >= e; n -= 2) i = u(t, e, n) << o, this.words[s] |= 67108863 & i, o >= 18 ? (o -= 18, s += 1, this.words[s] |= i >>> 26) : o += 8; else for (n = (t.length - e) % 2 == 0 ? e + 1 : e; n < t.length; n += 2) i = u(t, e, n) << o, this.words[s] |= 67108863 & i, o >= 18 ? (o -= 18, s += 1, this.words[s] |= i >>> 26) : o += 8;
                    this.strip()
                }, o.prototype._parseBase = function (t, e, r) {
                    this.words = [0], this.length = 1;
                    for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
                    n--, i = i / e | 0;
                    for (var o = t.length - r, s = o % n, a = Math.min(o, o - s) + r, u = 0, f = r; f < a; f += n) u = c(t, f, f + n, e), this.imuln(i), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
                    if (0 !== s) {
                        var h = 1;
                        for (u = c(t, f, t.length, e), f = 0; f < s; f++) h *= e;
                        this.imuln(h), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u)
                    }
                    this.strip()
                }, o.prototype.copy = function (t) {
                    t.words = new Array(this.length);
                    for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                    t.length = this.length, t.negative = this.negative, t.red = this.red
                }, o.prototype.clone = function () {
                    var t = new o(null);
                    return this.copy(t), t
                }, o.prototype._expand = function (t) {
                    for (; this.length < t;) this.words[this.length++] = 0;
                    return this
                }, o.prototype.strip = function () {
                    for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                    return this._normSign()
                }, o.prototype._normSign = function () {
                    return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                }, o.prototype.inspect = function () {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                };
                var f = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    h = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    d = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                function l(t, e, r) {
                    r.negative = e.negative ^ t.negative;
                    var n = t.length + e.length | 0;
                    r.length = n, n = n - 1 | 0;
                    var i = 0 | t.words[0], o = 0 | e.words[0], s = i * o, a = 67108863 & s, u = s / 67108864 | 0;
                    r.words[0] = a;
                    for (var c = 1; c < n; c++) {
                        for (var f = u >>> 26, h = 67108863 & u, d = Math.min(c, e.length - 1), l = Math.max(0, c - t.length + 1); l <= d; l++) {
                            var p = c - l | 0;
                            f += (s = (i = 0 | t.words[p]) * (o = 0 | e.words[l]) + h) / 67108864 | 0, h = 67108863 & s
                        }
                        r.words[c] = 0 | h, u = 0 | f
                    }
                    return 0 !== u ? r.words[c] = 0 | u : r.length--, r.strip()
                }

                o.prototype.toString = function (t, e) {
                    var r;
                    if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                        r = "";
                        for (var i = 0, o = 0, s = 0; s < this.length; s++) {
                            var a = this.words[s], u = (16777215 & (a << i | o)).toString(16);
                            r = 0 != (o = a >>> 24 - i & 16777215) || s !== this.length - 1 ? f[6 - u.length] + u + r : u + r, (i += 2) >= 26 && (i -= 26, s--)
                        }
                        for (0 !== o && (r = o.toString(16) + r); r.length % e != 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    if (t === (0 | t) && t >= 2 && t <= 36) {
                        var c = h[t], l = d[t];
                        r = "";
                        var p = this.clone();
                        for (p.negative = 0; !p.isZero();) {
                            var b = p.modn(l).toString(t);
                            r = (p = p.idivn(l)).isZero() ? b + r : f[c - b.length] + b + r
                        }
                        for (this.isZero() && (r = "0" + r); r.length % e != 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    n(!1, "Base should be between 2 and 36")
                }, o.prototype.toNumber = function () {
                    var t = this.words[0];
                    return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                }, o.prototype.toJSON = function () {
                    return this.toString(16)
                }, o.prototype.toBuffer = function (t, e) {
                    return n(void 0 !== s), this.toArrayLike(s, t, e)
                }, o.prototype.toArray = function (t, e) {
                    return this.toArrayLike(Array, t, e)
                }, o.prototype.toArrayLike = function (t, e, r) {
                    var i = this.byteLength(), o = r || Math.max(1, i);
                    n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0"), this.strip();
                    var s, a, u = "le" === e, c = new t(o), f = this.clone();
                    if (u) {
                        for (a = 0; !f.isZero(); a++) s = f.andln(255), f.iushrn(8), c[a] = s;
                        for (; a < o; a++) c[a] = 0
                    } else {
                        for (a = 0; a < o - i; a++) c[a] = 0;
                        for (a = 0; !f.isZero(); a++) s = f.andln(255), f.iushrn(8), c[o - a - 1] = s
                    }
                    return c
                }, Math.clz32 ? o.prototype._countBits = function (t) {
                    return 32 - Math.clz32(t)
                } : o.prototype._countBits = function (t) {
                    var e = t, r = 0;
                    return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, e >>>= 2), r + e
                }, o.prototype._zeroBits = function (t) {
                    if (0 === t) return 26;
                    var e = t, r = 0;
                    return 0 == (8191 & e) && (r += 13, e >>>= 13), 0 == (127 & e) && (r += 7, e >>>= 7), 0 == (15 & e) && (r += 4, e >>>= 4), 0 == (3 & e) && (r += 2, e >>>= 2), 0 == (1 & e) && r++, r
                }, o.prototype.bitLength = function () {
                    var t = this.words[this.length - 1], e = this._countBits(t);
                    return 26 * (this.length - 1) + e
                }, o.prototype.zeroBits = function () {
                    if (this.isZero()) return 0;
                    for (var t = 0, e = 0; e < this.length; e++) {
                        var r = this._zeroBits(this.words[e]);
                        if (t += r, 26 !== r) break
                    }
                    return t
                }, o.prototype.byteLength = function () {
                    return Math.ceil(this.bitLength() / 8)
                }, o.prototype.toTwos = function (t) {
                    return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                }, o.prototype.fromTwos = function (t) {
                    return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                }, o.prototype.isNeg = function () {
                    return 0 !== this.negative
                }, o.prototype.neg = function () {
                    return this.clone().ineg()
                }, o.prototype.ineg = function () {
                    return this.isZero() || (this.negative ^= 1), this
                }, o.prototype.iuor = function (t) {
                    for (; this.length < t.length;) this.words[this.length++] = 0;
                    for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                    return this.strip()
                }, o.prototype.ior = function (t) {
                    return n(0 == (this.negative | t.negative)), this.iuor(t)
                }, o.prototype.or = function (t) {
                    return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                }, o.prototype.uor = function (t) {
                    return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                }, o.prototype.iuand = function (t) {
                    var e;
                    e = this.length > t.length ? t : this;
                    for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
                    return this.length = e.length, this.strip()
                }, o.prototype.iand = function (t) {
                    return n(0 == (this.negative | t.negative)), this.iuand(t)
                }, o.prototype.and = function (t) {
                    return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                }, o.prototype.uand = function (t) {
                    return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                }, o.prototype.iuxor = function (t) {
                    var e, r;
                    this.length > t.length ? (e = this, r = t) : (e = t, r = this);
                    for (var n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n];
                    if (this !== e) for (; n < e.length; n++) this.words[n] = e.words[n];
                    return this.length = e.length, this.strip()
                }, o.prototype.ixor = function (t) {
                    return n(0 == (this.negative | t.negative)), this.iuxor(t)
                }, o.prototype.xor = function (t) {
                    return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                }, o.prototype.uxor = function (t) {
                    return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                }, o.prototype.inotn = function (t) {
                    n("number" == typeof t && t >= 0);
                    var e = 0 | Math.ceil(t / 26), r = t % 26;
                    this._expand(e), r > 0 && e--;
                    for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
                    return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this.strip()
                }, o.prototype.notn = function (t) {
                    return this.clone().inotn(t)
                }, o.prototype.setn = function (t, e) {
                    n("number" == typeof t && t >= 0);
                    var r = t / 26 | 0, i = t % 26;
                    return this._expand(r + 1), this.words[r] = e ? this.words[r] | 1 << i : this.words[r] & ~(1 << i), this.strip()
                }, o.prototype.iadd = function (t) {
                    var e, r, n;
                    if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                    this.length > t.length ? (r = this, n = t) : (r = t, n = this);
                    for (var i = 0, o = 0; o < n.length; o++) e = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                    for (; 0 !== i && o < r.length; o++) e = (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                    if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++; else if (r !== this) for (; o < r.length; o++) this.words[o] = r.words[o];
                    return this
                }, o.prototype.add = function (t) {
                    var e;
                    return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                }, o.prototype.isub = function (t) {
                    if (0 !== t.negative) {
                        t.negative = 0;
                        var e = this.iadd(t);
                        return t.negative = 1, e._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                    var r, n, i = this.cmp(t);
                    if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    i > 0 ? (r = this, n = t) : (r = t, n = this);
                    for (var o = 0, s = 0; s < n.length; s++) o = (e = (0 | r.words[s]) - (0 | n.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
                    for (; 0 !== o && s < r.length; s++) o = (e = (0 | r.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
                    if (0 === o && s < r.length && r !== this) for (; s < r.length; s++) this.words[s] = r.words[s];
                    return this.length = Math.max(this.length, s), r !== this && (this.negative = 1), this.strip()
                }, o.prototype.sub = function (t) {
                    return this.clone().isub(t)
                };
                var p = function (t, e, r) {
                    var n, i, o, s = t.words, a = e.words, u = r.words, c = 0, f = 0 | s[0], h = 8191 & f, d = f >>> 13,
                        l = 0 | s[1], p = 8191 & l, b = l >>> 13, g = 0 | s[2], y = 8191 & g, m = g >>> 13,
                        w = 0 | s[3], v = 8191 & w, S = w >>> 13, M = 0 | s[4], _ = 8191 & M, A = M >>> 13,
                        k = 0 | s[5], E = 8191 & k, I = k >>> 13, B = 0 | s[6], x = 8191 & B, R = B >>> 13,
                        P = 0 | s[7], O = 8191 & P, T = P >>> 13, U = 0 | s[8], L = 8191 & U, N = U >>> 13,
                        z = 0 | s[9], C = 8191 & z, q = z >>> 13, W = 0 | a[0], j = 8191 & W, K = W >>> 13,
                        F = 0 | a[1], D = 8191 & F, $ = F >>> 13, J = 0 | a[2], V = 8191 & J, H = J >>> 13,
                        G = 0 | a[3], Z = 8191 & G, Y = G >>> 13, X = 0 | a[4], Q = 8191 & X, tt = X >>> 13,
                        et = 0 | a[5], rt = 8191 & et, nt = et >>> 13, it = 0 | a[6], ot = 8191 & it, st = it >>> 13,
                        at = 0 | a[7], ut = 8191 & at, ct = at >>> 13, ft = 0 | a[8], ht = 8191 & ft, dt = ft >>> 13,
                        lt = 0 | a[9], pt = 8191 & lt, bt = lt >>> 13;
                    r.negative = t.negative ^ e.negative, r.length = 19;
                    var gt = (c + (n = Math.imul(h, j)) | 0) + ((8191 & (i = (i = Math.imul(h, K)) + Math.imul(d, j) | 0)) << 13) | 0;
                    c = ((o = Math.imul(d, K)) + (i >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, n = Math.imul(p, j), i = (i = Math.imul(p, K)) + Math.imul(b, j) | 0, o = Math.imul(b, K);
                    var yt = (c + (n = n + Math.imul(h, D) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, $) | 0) + Math.imul(d, D) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, $) | 0) + (i >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, n = Math.imul(y, j), i = (i = Math.imul(y, K)) + Math.imul(m, j) | 0, o = Math.imul(m, K), n = n + Math.imul(p, D) | 0, i = (i = i + Math.imul(p, $) | 0) + Math.imul(b, D) | 0, o = o + Math.imul(b, $) | 0;
                    var mt = (c + (n = n + Math.imul(h, V) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, H) | 0) + Math.imul(d, V) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, H) | 0) + (i >>> 13) | 0) + (mt >>> 26) | 0, mt &= 67108863, n = Math.imul(v, j), i = (i = Math.imul(v, K)) + Math.imul(S, j) | 0, o = Math.imul(S, K), n = n + Math.imul(y, D) | 0, i = (i = i + Math.imul(y, $) | 0) + Math.imul(m, D) | 0, o = o + Math.imul(m, $) | 0, n = n + Math.imul(p, V) | 0, i = (i = i + Math.imul(p, H) | 0) + Math.imul(b, V) | 0, o = o + Math.imul(b, H) | 0;
                    var wt = (c + (n = n + Math.imul(h, Z) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, Y) | 0) + Math.imul(d, Z) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, Y) | 0) + (i >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, n = Math.imul(_, j), i = (i = Math.imul(_, K)) + Math.imul(A, j) | 0, o = Math.imul(A, K), n = n + Math.imul(v, D) | 0, i = (i = i + Math.imul(v, $) | 0) + Math.imul(S, D) | 0, o = o + Math.imul(S, $) | 0, n = n + Math.imul(y, V) | 0, i = (i = i + Math.imul(y, H) | 0) + Math.imul(m, V) | 0, o = o + Math.imul(m, H) | 0, n = n + Math.imul(p, Z) | 0, i = (i = i + Math.imul(p, Y) | 0) + Math.imul(b, Z) | 0, o = o + Math.imul(b, Y) | 0;
                    var vt = (c + (n = n + Math.imul(h, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, tt) | 0) + Math.imul(d, Q) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, tt) | 0) + (i >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, n = Math.imul(E, j), i = (i = Math.imul(E, K)) + Math.imul(I, j) | 0, o = Math.imul(I, K), n = n + Math.imul(_, D) | 0, i = (i = i + Math.imul(_, $) | 0) + Math.imul(A, D) | 0, o = o + Math.imul(A, $) | 0, n = n + Math.imul(v, V) | 0, i = (i = i + Math.imul(v, H) | 0) + Math.imul(S, V) | 0, o = o + Math.imul(S, H) | 0, n = n + Math.imul(y, Z) | 0, i = (i = i + Math.imul(y, Y) | 0) + Math.imul(m, Z) | 0, o = o + Math.imul(m, Y) | 0, n = n + Math.imul(p, Q) | 0, i = (i = i + Math.imul(p, tt) | 0) + Math.imul(b, Q) | 0, o = o + Math.imul(b, tt) | 0;
                    var St = (c + (n = n + Math.imul(h, rt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, nt) | 0) + Math.imul(d, rt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, nt) | 0) + (i >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n = Math.imul(x, j), i = (i = Math.imul(x, K)) + Math.imul(R, j) | 0, o = Math.imul(R, K), n = n + Math.imul(E, D) | 0, i = (i = i + Math.imul(E, $) | 0) + Math.imul(I, D) | 0, o = o + Math.imul(I, $) | 0, n = n + Math.imul(_, V) | 0, i = (i = i + Math.imul(_, H) | 0) + Math.imul(A, V) | 0, o = o + Math.imul(A, H) | 0, n = n + Math.imul(v, Z) | 0, i = (i = i + Math.imul(v, Y) | 0) + Math.imul(S, Z) | 0, o = o + Math.imul(S, Y) | 0, n = n + Math.imul(y, Q) | 0, i = (i = i + Math.imul(y, tt) | 0) + Math.imul(m, Q) | 0, o = o + Math.imul(m, tt) | 0, n = n + Math.imul(p, rt) | 0, i = (i = i + Math.imul(p, nt) | 0) + Math.imul(b, rt) | 0, o = o + Math.imul(b, nt) | 0;
                    var Mt = (c + (n = n + Math.imul(h, ot) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, st) | 0) + Math.imul(d, ot) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, st) | 0) + (i >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, n = Math.imul(O, j), i = (i = Math.imul(O, K)) + Math.imul(T, j) | 0, o = Math.imul(T, K), n = n + Math.imul(x, D) | 0, i = (i = i + Math.imul(x, $) | 0) + Math.imul(R, D) | 0, o = o + Math.imul(R, $) | 0, n = n + Math.imul(E, V) | 0, i = (i = i + Math.imul(E, H) | 0) + Math.imul(I, V) | 0, o = o + Math.imul(I, H) | 0, n = n + Math.imul(_, Z) | 0, i = (i = i + Math.imul(_, Y) | 0) + Math.imul(A, Z) | 0, o = o + Math.imul(A, Y) | 0, n = n + Math.imul(v, Q) | 0, i = (i = i + Math.imul(v, tt) | 0) + Math.imul(S, Q) | 0, o = o + Math.imul(S, tt) | 0, n = n + Math.imul(y, rt) | 0, i = (i = i + Math.imul(y, nt) | 0) + Math.imul(m, rt) | 0, o = o + Math.imul(m, nt) | 0, n = n + Math.imul(p, ot) | 0, i = (i = i + Math.imul(p, st) | 0) + Math.imul(b, ot) | 0, o = o + Math.imul(b, st) | 0;
                    var _t = (c + (n = n + Math.imul(h, ut) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ct) | 0) + Math.imul(d, ut) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, ct) | 0) + (i >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, n = Math.imul(L, j), i = (i = Math.imul(L, K)) + Math.imul(N, j) | 0, o = Math.imul(N, K), n = n + Math.imul(O, D) | 0, i = (i = i + Math.imul(O, $) | 0) + Math.imul(T, D) | 0, o = o + Math.imul(T, $) | 0, n = n + Math.imul(x, V) | 0, i = (i = i + Math.imul(x, H) | 0) + Math.imul(R, V) | 0, o = o + Math.imul(R, H) | 0, n = n + Math.imul(E, Z) | 0, i = (i = i + Math.imul(E, Y) | 0) + Math.imul(I, Z) | 0, o = o + Math.imul(I, Y) | 0, n = n + Math.imul(_, Q) | 0, i = (i = i + Math.imul(_, tt) | 0) + Math.imul(A, Q) | 0, o = o + Math.imul(A, tt) | 0, n = n + Math.imul(v, rt) | 0, i = (i = i + Math.imul(v, nt) | 0) + Math.imul(S, rt) | 0, o = o + Math.imul(S, nt) | 0, n = n + Math.imul(y, ot) | 0, i = (i = i + Math.imul(y, st) | 0) + Math.imul(m, ot) | 0, o = o + Math.imul(m, st) | 0, n = n + Math.imul(p, ut) | 0, i = (i = i + Math.imul(p, ct) | 0) + Math.imul(b, ut) | 0, o = o + Math.imul(b, ct) | 0;
                    var At = (c + (n = n + Math.imul(h, ht) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, dt) | 0) + Math.imul(d, ht) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, dt) | 0) + (i >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, n = Math.imul(C, j), i = (i = Math.imul(C, K)) + Math.imul(q, j) | 0, o = Math.imul(q, K), n = n + Math.imul(L, D) | 0, i = (i = i + Math.imul(L, $) | 0) + Math.imul(N, D) | 0, o = o + Math.imul(N, $) | 0, n = n + Math.imul(O, V) | 0, i = (i = i + Math.imul(O, H) | 0) + Math.imul(T, V) | 0, o = o + Math.imul(T, H) | 0, n = n + Math.imul(x, Z) | 0, i = (i = i + Math.imul(x, Y) | 0) + Math.imul(R, Z) | 0, o = o + Math.imul(R, Y) | 0, n = n + Math.imul(E, Q) | 0, i = (i = i + Math.imul(E, tt) | 0) + Math.imul(I, Q) | 0, o = o + Math.imul(I, tt) | 0, n = n + Math.imul(_, rt) | 0, i = (i = i + Math.imul(_, nt) | 0) + Math.imul(A, rt) | 0, o = o + Math.imul(A, nt) | 0, n = n + Math.imul(v, ot) | 0, i = (i = i + Math.imul(v, st) | 0) + Math.imul(S, ot) | 0, o = o + Math.imul(S, st) | 0, n = n + Math.imul(y, ut) | 0, i = (i = i + Math.imul(y, ct) | 0) + Math.imul(m, ut) | 0, o = o + Math.imul(m, ct) | 0, n = n + Math.imul(p, ht) | 0, i = (i = i + Math.imul(p, dt) | 0) + Math.imul(b, ht) | 0, o = o + Math.imul(b, dt) | 0;
                    var kt = (c + (n = n + Math.imul(h, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, bt) | 0) + Math.imul(d, pt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, bt) | 0) + (i >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, n = Math.imul(C, D), i = (i = Math.imul(C, $)) + Math.imul(q, D) | 0, o = Math.imul(q, $), n = n + Math.imul(L, V) | 0, i = (i = i + Math.imul(L, H) | 0) + Math.imul(N, V) | 0, o = o + Math.imul(N, H) | 0, n = n + Math.imul(O, Z) | 0, i = (i = i + Math.imul(O, Y) | 0) + Math.imul(T, Z) | 0, o = o + Math.imul(T, Y) | 0, n = n + Math.imul(x, Q) | 0, i = (i = i + Math.imul(x, tt) | 0) + Math.imul(R, Q) | 0, o = o + Math.imul(R, tt) | 0, n = n + Math.imul(E, rt) | 0, i = (i = i + Math.imul(E, nt) | 0) + Math.imul(I, rt) | 0, o = o + Math.imul(I, nt) | 0, n = n + Math.imul(_, ot) | 0, i = (i = i + Math.imul(_, st) | 0) + Math.imul(A, ot) | 0, o = o + Math.imul(A, st) | 0, n = n + Math.imul(v, ut) | 0, i = (i = i + Math.imul(v, ct) | 0) + Math.imul(S, ut) | 0, o = o + Math.imul(S, ct) | 0, n = n + Math.imul(y, ht) | 0, i = (i = i + Math.imul(y, dt) | 0) + Math.imul(m, ht) | 0, o = o + Math.imul(m, dt) | 0;
                    var Et = (c + (n = n + Math.imul(p, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, bt) | 0) + Math.imul(b, pt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(b, bt) | 0) + (i >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n = Math.imul(C, V), i = (i = Math.imul(C, H)) + Math.imul(q, V) | 0, o = Math.imul(q, H), n = n + Math.imul(L, Z) | 0, i = (i = i + Math.imul(L, Y) | 0) + Math.imul(N, Z) | 0, o = o + Math.imul(N, Y) | 0, n = n + Math.imul(O, Q) | 0, i = (i = i + Math.imul(O, tt) | 0) + Math.imul(T, Q) | 0, o = o + Math.imul(T, tt) | 0, n = n + Math.imul(x, rt) | 0, i = (i = i + Math.imul(x, nt) | 0) + Math.imul(R, rt) | 0, o = o + Math.imul(R, nt) | 0, n = n + Math.imul(E, ot) | 0, i = (i = i + Math.imul(E, st) | 0) + Math.imul(I, ot) | 0, o = o + Math.imul(I, st) | 0, n = n + Math.imul(_, ut) | 0, i = (i = i + Math.imul(_, ct) | 0) + Math.imul(A, ut) | 0, o = o + Math.imul(A, ct) | 0, n = n + Math.imul(v, ht) | 0, i = (i = i + Math.imul(v, dt) | 0) + Math.imul(S, ht) | 0, o = o + Math.imul(S, dt) | 0;
                    var It = (c + (n = n + Math.imul(y, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(y, bt) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(m, bt) | 0) + (i >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, n = Math.imul(C, Z), i = (i = Math.imul(C, Y)) + Math.imul(q, Z) | 0, o = Math.imul(q, Y), n = n + Math.imul(L, Q) | 0, i = (i = i + Math.imul(L, tt) | 0) + Math.imul(N, Q) | 0, o = o + Math.imul(N, tt) | 0, n = n + Math.imul(O, rt) | 0, i = (i = i + Math.imul(O, nt) | 0) + Math.imul(T, rt) | 0, o = o + Math.imul(T, nt) | 0, n = n + Math.imul(x, ot) | 0, i = (i = i + Math.imul(x, st) | 0) + Math.imul(R, ot) | 0, o = o + Math.imul(R, st) | 0, n = n + Math.imul(E, ut) | 0, i = (i = i + Math.imul(E, ct) | 0) + Math.imul(I, ut) | 0, o = o + Math.imul(I, ct) | 0, n = n + Math.imul(_, ht) | 0, i = (i = i + Math.imul(_, dt) | 0) + Math.imul(A, ht) | 0, o = o + Math.imul(A, dt) | 0;
                    var Bt = (c + (n = n + Math.imul(v, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(v, bt) | 0) + Math.imul(S, pt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(S, bt) | 0) + (i >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, n = Math.imul(C, Q), i = (i = Math.imul(C, tt)) + Math.imul(q, Q) | 0, o = Math.imul(q, tt), n = n + Math.imul(L, rt) | 0, i = (i = i + Math.imul(L, nt) | 0) + Math.imul(N, rt) | 0, o = o + Math.imul(N, nt) | 0, n = n + Math.imul(O, ot) | 0, i = (i = i + Math.imul(O, st) | 0) + Math.imul(T, ot) | 0, o = o + Math.imul(T, st) | 0, n = n + Math.imul(x, ut) | 0, i = (i = i + Math.imul(x, ct) | 0) + Math.imul(R, ut) | 0, o = o + Math.imul(R, ct) | 0, n = n + Math.imul(E, ht) | 0, i = (i = i + Math.imul(E, dt) | 0) + Math.imul(I, ht) | 0, o = o + Math.imul(I, dt) | 0;
                    var xt = (c + (n = n + Math.imul(_, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(_, bt) | 0) + Math.imul(A, pt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(A, bt) | 0) + (i >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n = Math.imul(C, rt), i = (i = Math.imul(C, nt)) + Math.imul(q, rt) | 0, o = Math.imul(q, nt), n = n + Math.imul(L, ot) | 0, i = (i = i + Math.imul(L, st) | 0) + Math.imul(N, ot) | 0, o = o + Math.imul(N, st) | 0, n = n + Math.imul(O, ut) | 0, i = (i = i + Math.imul(O, ct) | 0) + Math.imul(T, ut) | 0, o = o + Math.imul(T, ct) | 0, n = n + Math.imul(x, ht) | 0, i = (i = i + Math.imul(x, dt) | 0) + Math.imul(R, ht) | 0, o = o + Math.imul(R, dt) | 0;
                    var Rt = (c + (n = n + Math.imul(E, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(E, bt) | 0) + Math.imul(I, pt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(I, bt) | 0) + (i >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, n = Math.imul(C, ot), i = (i = Math.imul(C, st)) + Math.imul(q, ot) | 0, o = Math.imul(q, st), n = n + Math.imul(L, ut) | 0, i = (i = i + Math.imul(L, ct) | 0) + Math.imul(N, ut) | 0, o = o + Math.imul(N, ct) | 0, n = n + Math.imul(O, ht) | 0, i = (i = i + Math.imul(O, dt) | 0) + Math.imul(T, ht) | 0, o = o + Math.imul(T, dt) | 0;
                    var Pt = (c + (n = n + Math.imul(x, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(x, bt) | 0) + Math.imul(R, pt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(R, bt) | 0) + (i >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, n = Math.imul(C, ut), i = (i = Math.imul(C, ct)) + Math.imul(q, ut) | 0, o = Math.imul(q, ct), n = n + Math.imul(L, ht) | 0, i = (i = i + Math.imul(L, dt) | 0) + Math.imul(N, ht) | 0, o = o + Math.imul(N, dt) | 0;
                    var Ot = (c + (n = n + Math.imul(O, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(O, bt) | 0) + Math.imul(T, pt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(T, bt) | 0) + (i >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, n = Math.imul(C, ht), i = (i = Math.imul(C, dt)) + Math.imul(q, ht) | 0, o = Math.imul(q, dt);
                    var Tt = (c + (n = n + Math.imul(L, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(L, bt) | 0) + Math.imul(N, pt) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(N, bt) | 0) + (i >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863;
                    var Ut = (c + (n = Math.imul(C, pt)) | 0) + ((8191 & (i = (i = Math.imul(C, bt)) + Math.imul(q, pt) | 0)) << 13) | 0;
                    return c = ((o = Math.imul(q, bt)) + (i >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, u[0] = gt, u[1] = yt, u[2] = mt, u[3] = wt, u[4] = vt, u[5] = St, u[6] = Mt, u[7] = _t, u[8] = At, u[9] = kt, u[10] = Et, u[11] = It, u[12] = Bt, u[13] = xt, u[14] = Rt, u[15] = Pt, u[16] = Ot, u[17] = Tt, u[18] = Ut, 0 !== c && (u[19] = c, r.length++), r
                };

                function b(t, e, r) {
                    return (new g).mulp(t, e, r)
                }

                function g(t, e) {
                    this.x = t, this.y = e
                }

                Math.imul || (p = l), o.prototype.mulTo = function (t, e) {
                    var r, n = this.length + t.length;
                    return r = 10 === this.length && 10 === t.length ? p(this, t, e) : n < 63 ? l(this, t, e) : n < 1024 ? function (t, e, r) {
                        r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
                        for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                            var s = i;
                            i = 0;
                            for (var a = 67108863 & n, u = Math.min(o, e.length - 1), c = Math.max(0, o - t.length + 1); c <= u; c++) {
                                var f = o - c, h = (0 | t.words[f]) * (0 | e.words[c]), d = 67108863 & h;
                                a = 67108863 & (d = d + a | 0), i += (s = (s = s + (h / 67108864 | 0) | 0) + (d >>> 26) | 0) >>> 26, s &= 67108863
                            }
                            r.words[o] = a, n = s, s = i
                        }
                        return 0 !== n ? r.words[o] = n : r.length--, r.strip()
                    }(this, t, e) : b(this, t, e), r
                }, g.prototype.makeRBT = function (t) {
                    for (var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0; n < t; n++) e[n] = this.revBin(n, r, t);
                    return e
                }, g.prototype.revBin = function (t, e, r) {
                    if (0 === t || t === r - 1) return t;
                    for (var n = 0, i = 0; i < e; i++) n |= (1 & t) << e - i - 1, t >>= 1;
                    return n
                }, g.prototype.permute = function (t, e, r, n, i, o) {
                    for (var s = 0; s < o; s++) n[s] = e[t[s]], i[s] = r[t[s]]
                }, g.prototype.transform = function (t, e, r, n, i, o) {
                    this.permute(o, t, e, r, n, i);
                    for (var s = 1; s < i; s <<= 1) for (var a = s << 1, u = Math.cos(2 * Math.PI / a), c = Math.sin(2 * Math.PI / a), f = 0; f < i; f += a) for (var h = u, d = c, l = 0; l < s; l++) {
                        var p = r[f + l], b = n[f + l], g = r[f + l + s], y = n[f + l + s], m = h * g - d * y;
                        y = h * y + d * g, g = m, r[f + l] = p + g, n[f + l] = b + y, r[f + l + s] = p - g, n[f + l + s] = b - y, l !== a && (m = u * h - c * d, d = u * d + c * h, h = m)
                    }
                }, g.prototype.guessLen13b = function (t, e) {
                    var r = 1 | Math.max(e, t), n = 1 & r, i = 0;
                    for (r = r / 2 | 0; r; r >>>= 1) i++;
                    return 1 << i + 1 + n
                }, g.prototype.conjugate = function (t, e, r) {
                    if (!(r <= 1)) for (var n = 0; n < r / 2; n++) {
                        var i = t[n];
                        t[n] = t[r - n - 1], t[r - n - 1] = i, i = e[n], e[n] = -e[r - n - 1], e[r - n - 1] = -i
                    }
                }, g.prototype.normalize13b = function (t, e) {
                    for (var r = 0, n = 0; n < e / 2; n++) {
                        var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
                        t[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0
                    }
                    return t
                }, g.prototype.convert13b = function (t, e, r, i) {
                    for (var o = 0, s = 0; s < e; s++) o += 0 | t[s], r[2 * s] = 8191 & o, o >>>= 13, r[2 * s + 1] = 8191 & o, o >>>= 13;
                    for (s = 2 * e; s < i; ++s) r[s] = 0;
                    n(0 === o), n(0 == (-8192 & o))
                }, g.prototype.stub = function (t) {
                    for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
                    return e
                }, g.prototype.mulp = function (t, e, r) {
                    var n = 2 * this.guessLen13b(t.length, e.length), i = this.makeRBT(n), o = this.stub(n),
                        s = new Array(n), a = new Array(n), u = new Array(n), c = new Array(n), f = new Array(n),
                        h = new Array(n), d = r.words;
                    d.length = n, this.convert13b(t.words, t.length, s, n), this.convert13b(e.words, e.length, c, n), this.transform(s, o, a, u, n, i), this.transform(c, o, f, h, n, i);
                    for (var l = 0; l < n; l++) {
                        var p = a[l] * f[l] - u[l] * h[l];
                        u[l] = a[l] * h[l] + u[l] * f[l], a[l] = p
                    }
                    return this.conjugate(a, u, n), this.transform(a, u, d, o, n, i), this.conjugate(d, o, n), this.normalize13b(d, n), r.negative = t.negative ^ e.negative, r.length = t.length + e.length, r.strip()
                }, o.prototype.mul = function (t) {
                    var e = new o(null);
                    return e.words = new Array(this.length + t.length), this.mulTo(t, e)
                }, o.prototype.mulf = function (t) {
                    var e = new o(null);
                    return e.words = new Array(this.length + t.length), b(this, t, e)
                }, o.prototype.imul = function (t) {
                    return this.clone().mulTo(t, this)
                }, o.prototype.imuln = function (t) {
                    n("number" == typeof t), n(t < 67108864);
                    for (var e = 0, r = 0; r < this.length; r++) {
                        var i = (0 | this.words[r]) * t, o = (67108863 & i) + (67108863 & e);
                        e >>= 26, e += i / 67108864 | 0, e += o >>> 26, this.words[r] = 67108863 & o
                    }
                    return 0 !== e && (this.words[r] = e, this.length++), this
                }, o.prototype.muln = function (t) {
                    return this.clone().imuln(t)
                }, o.prototype.sqr = function () {
                    return this.mul(this)
                }, o.prototype.isqr = function () {
                    return this.imul(this.clone())
                }, o.prototype.pow = function (t) {
                    var e = function (t) {
                        for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                            var n = r / 26 | 0, i = r % 26;
                            e[r] = (t.words[n] & 1 << i) >>> i
                        }
                        return e
                    }(t);
                    if (0 === e.length) return new o(1);
                    for (var r = this, n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr()) ;
                    if (++n < e.length) for (var i = r.sqr(); n < e.length; n++, i = i.sqr()) 0 !== e[n] && (r = r.mul(i));
                    return r
                }, o.prototype.iushln = function (t) {
                    n("number" == typeof t && t >= 0);
                    var e, r = t % 26, i = (t - r) / 26, o = 67108863 >>> 26 - r << 26 - r;
                    if (0 !== r) {
                        var s = 0;
                        for (e = 0; e < this.length; e++) {
                            var a = this.words[e] & o, u = (0 | this.words[e]) - a << r;
                            this.words[e] = u | s, s = a >>> 26 - r
                        }
                        s && (this.words[e] = s, this.length++)
                    }
                    if (0 !== i) {
                        for (e = this.length - 1; e >= 0; e--) this.words[e + i] = this.words[e];
                        for (e = 0; e < i; e++) this.words[e] = 0;
                        this.length += i
                    }
                    return this.strip()
                }, o.prototype.ishln = function (t) {
                    return n(0 === this.negative), this.iushln(t)
                }, o.prototype.iushrn = function (t, e, r) {
                    var i;
                    n("number" == typeof t && t >= 0), i = e ? (e - e % 26) / 26 : 0;
                    var o = t % 26, s = Math.min((t - o) / 26, this.length), a = 67108863 ^ 67108863 >>> o << o, u = r;
                    if (i -= s, i = Math.max(0, i), u) {
                        for (var c = 0; c < s; c++) u.words[c] = this.words[c];
                        u.length = s
                    }
                    if (0 === s) ; else if (this.length > s) for (this.length -= s, c = 0; c < this.length; c++) this.words[c] = this.words[c + s]; else this.words[0] = 0, this.length = 1;
                    var f = 0;
                    for (c = this.length - 1; c >= 0 && (0 !== f || c >= i); c--) {
                        var h = 0 | this.words[c];
                        this.words[c] = f << 26 - o | h >>> o, f = h & a
                    }
                    return u && 0 !== f && (u.words[u.length++] = f), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                }, o.prototype.ishrn = function (t, e, r) {
                    return n(0 === this.negative), this.iushrn(t, e, r)
                }, o.prototype.shln = function (t) {
                    return this.clone().ishln(t)
                }, o.prototype.ushln = function (t) {
                    return this.clone().iushln(t)
                }, o.prototype.shrn = function (t) {
                    return this.clone().ishrn(t)
                }, o.prototype.ushrn = function (t) {
                    return this.clone().iushrn(t)
                }, o.prototype.testn = function (t) {
                    n("number" == typeof t && t >= 0);
                    var e = t % 26, r = (t - e) / 26, i = 1 << e;
                    return !(this.length <= r || !(this.words[r] & i))
                }, o.prototype.imaskn = function (t) {
                    n("number" == typeof t && t >= 0);
                    var e = t % 26, r = (t - e) / 26;
                    if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) return this;
                    if (0 !== e && r++, this.length = Math.min(r, this.length), 0 !== e) {
                        var i = 67108863 ^ 67108863 >>> e << e;
                        this.words[this.length - 1] &= i
                    }
                    return this.strip()
                }, o.prototype.maskn = function (t) {
                    return this.clone().imaskn(t)
                }, o.prototype.iaddn = function (t) {
                    return n("number" == typeof t), n(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                }, o.prototype._iaddn = function (t) {
                    this.words[0] += t;
                    for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                    return this.length = Math.max(this.length, e + 1), this
                }, o.prototype.isubn = function (t) {
                    if (n("number" == typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                    if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1; else for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
                    return this.strip()
                }, o.prototype.addn = function (t) {
                    return this.clone().iaddn(t)
                }, o.prototype.subn = function (t) {
                    return this.clone().isubn(t)
                }, o.prototype.iabs = function () {
                    return this.negative = 0, this
                }, o.prototype.abs = function () {
                    return this.clone().iabs()
                }, o.prototype._ishlnsubmul = function (t, e, r) {
                    var i, o, s = t.length + r;
                    this._expand(s);
                    var a = 0;
                    for (i = 0; i < t.length; i++) {
                        o = (0 | this.words[i + r]) + a;
                        var u = (0 | t.words[i]) * e;
                        a = ((o -= 67108863 & u) >> 26) - (u / 67108864 | 0), this.words[i + r] = 67108863 & o
                    }
                    for (; i < this.length - r; i++) a = (o = (0 | this.words[i + r]) + a) >> 26, this.words[i + r] = 67108863 & o;
                    if (0 === a) return this.strip();
                    for (n(-1 === a), a = 0, i = 0; i < this.length; i++) a = (o = -(0 | this.words[i]) + a) >> 26, this.words[i] = 67108863 & o;
                    return this.negative = 1, this.strip()
                }, o.prototype._wordDiv = function (t, e) {
                    var r = (this.length, t.length), n = this.clone(), i = t, s = 0 | i.words[i.length - 1];
                    0 != (r = 26 - this._countBits(s)) && (i = i.ushln(r), n.iushln(r), s = 0 | i.words[i.length - 1]);
                    var a, u = n.length - i.length;
                    if ("mod" !== e) {
                        (a = new o(null)).length = u + 1, a.words = new Array(a.length);
                        for (var c = 0; c < a.length; c++) a.words[c] = 0
                    }
                    var f = n.clone()._ishlnsubmul(i, 1, u);
                    0 === f.negative && (n = f, a && (a.words[u] = 1));
                    for (var h = u - 1; h >= 0; h--) {
                        var d = 67108864 * (0 | n.words[i.length + h]) + (0 | n.words[i.length + h - 1]);
                        for (d = Math.min(d / s | 0, 67108863), n._ishlnsubmul(i, d, h); 0 !== n.negative;) d--, n.negative = 0, n._ishlnsubmul(i, 1, h), n.isZero() || (n.negative ^= 1);
                        a && (a.words[h] = d)
                    }
                    return a && a.strip(), n.strip(), "div" !== e && 0 !== r && n.iushrn(r), {div: a || null, mod: n}
                }, o.prototype.divmod = function (t, e, r) {
                    return n(!t.isZero()), this.isZero() ? {
                        div: new o(0),
                        mod: new o(0)
                    } : 0 !== this.negative && 0 === t.negative ? (a = this.neg().divmod(t, e), "mod" !== e && (i = a.div.neg()), "div" !== e && (s = a.mod.neg(), r && 0 !== s.negative && s.iadd(t)), {
                        div: i,
                        mod: s
                    }) : 0 === this.negative && 0 !== t.negative ? (a = this.divmod(t.neg(), e), "mod" !== e && (i = a.div.neg()), {
                        div: i,
                        mod: a.mod
                    }) : 0 != (this.negative & t.negative) ? (a = this.neg().divmod(t.neg(), e), "div" !== e && (s = a.mod.neg(), r && 0 !== s.negative && s.isub(t)), {
                        div: a.div,
                        mod: s
                    }) : t.length > this.length || this.cmp(t) < 0 ? {
                        div: new o(0),
                        mod: this
                    } : 1 === t.length ? "div" === e ? {
                        div: this.divn(t.words[0]),
                        mod: null
                    } : "mod" === e ? {div: null, mod: new o(this.modn(t.words[0]))} : {
                        div: this.divn(t.words[0]),
                        mod: new o(this.modn(t.words[0]))
                    } : this._wordDiv(t, e);
                    var i, s, a
                }, o.prototype.div = function (t) {
                    return this.divmod(t, "div", !1).div
                }, o.prototype.mod = function (t) {
                    return this.divmod(t, "mod", !1).mod
                }, o.prototype.umod = function (t) {
                    return this.divmod(t, "mod", !0).mod
                }, o.prototype.divRound = function (t) {
                    var e = this.divmod(t);
                    if (e.mod.isZero()) return e.div;
                    var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod, n = t.ushrn(1), i = t.andln(1), o = r.cmp(n);
                    return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                }, o.prototype.modn = function (t) {
                    n(t <= 67108863);
                    for (var e = (1 << 26) % t, r = 0, i = this.length - 1; i >= 0; i--) r = (e * r + (0 | this.words[i])) % t;
                    return r
                }, o.prototype.idivn = function (t) {
                    n(t <= 67108863);
                    for (var e = 0, r = this.length - 1; r >= 0; r--) {
                        var i = (0 | this.words[r]) + 67108864 * e;
                        this.words[r] = i / t | 0, e = i % t
                    }
                    return this.strip()
                }, o.prototype.divn = function (t) {
                    return this.clone().idivn(t)
                }, o.prototype.egcd = function (t) {
                    n(0 === t.negative), n(!t.isZero());
                    var e = this, r = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var i = new o(1), s = new o(0), a = new o(0), u = new o(1), c = 0; e.isEven() && r.isEven();) e.iushrn(1), r.iushrn(1), ++c;
                    for (var f = r.clone(), h = e.clone(); !e.isZero();) {
                        for (var d = 0, l = 1; 0 == (e.words[0] & l) && d < 26; ++d, l <<= 1) ;
                        if (d > 0) for (e.iushrn(d); d-- > 0;) (i.isOdd() || s.isOdd()) && (i.iadd(f), s.isub(h)), i.iushrn(1), s.iushrn(1);
                        for (var p = 0, b = 1; 0 == (r.words[0] & b) && p < 26; ++p, b <<= 1) ;
                        if (p > 0) for (r.iushrn(p); p-- > 0;) (a.isOdd() || u.isOdd()) && (a.iadd(f), u.isub(h)), a.iushrn(1), u.iushrn(1);
                        e.cmp(r) >= 0 ? (e.isub(r), i.isub(a), s.isub(u)) : (r.isub(e), a.isub(i), u.isub(s))
                    }
                    return {a, b: u, gcd: r.iushln(c)}
                }, o.prototype._invmp = function (t) {
                    n(0 === t.negative), n(!t.isZero());
                    var e = this, r = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var i, s = new o(1), a = new o(0), u = r.clone(); e.cmpn(1) > 0 && r.cmpn(1) > 0;) {
                        for (var c = 0, f = 1; 0 == (e.words[0] & f) && c < 26; ++c, f <<= 1) ;
                        if (c > 0) for (e.iushrn(c); c-- > 0;) s.isOdd() && s.iadd(u), s.iushrn(1);
                        for (var h = 0, d = 1; 0 == (r.words[0] & d) && h < 26; ++h, d <<= 1) ;
                        if (h > 0) for (r.iushrn(h); h-- > 0;) a.isOdd() && a.iadd(u), a.iushrn(1);
                        e.cmp(r) >= 0 ? (e.isub(r), s.isub(a)) : (r.isub(e), a.isub(s))
                    }
                    return (i = 0 === e.cmpn(1) ? s : a).cmpn(0) < 0 && i.iadd(t), i
                }, o.prototype.gcd = function (t) {
                    if (this.isZero()) return t.abs();
                    if (t.isZero()) return this.abs();
                    var e = this.clone(), r = t.clone();
                    e.negative = 0, r.negative = 0;
                    for (var n = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1);
                    for (; ;) {
                        for (; e.isEven();) e.iushrn(1);
                        for (; r.isEven();) r.iushrn(1);
                        var i = e.cmp(r);
                        if (i < 0) {
                            var o = e;
                            e = r, r = o
                        } else if (0 === i || 0 === r.cmpn(1)) break;
                        e.isub(r)
                    }
                    return r.iushln(n)
                }, o.prototype.invm = function (t) {
                    return this.egcd(t).a.umod(t)
                }, o.prototype.isEven = function () {
                    return 0 == (1 & this.words[0])
                }, o.prototype.isOdd = function () {
                    return 1 == (1 & this.words[0])
                }, o.prototype.andln = function (t) {
                    return this.words[0] & t
                }, o.prototype.bincn = function (t) {
                    n("number" == typeof t);
                    var e = t % 26, r = (t - e) / 26, i = 1 << e;
                    if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;
                    for (var o = i, s = r; 0 !== o && s < this.length; s++) {
                        var a = 0 | this.words[s];
                        o = (a += o) >>> 26, a &= 67108863, this.words[s] = a
                    }
                    return 0 !== o && (this.words[s] = o, this.length++), this
                }, o.prototype.isZero = function () {
                    return 1 === this.length && 0 === this.words[0]
                }, o.prototype.cmpn = function (t) {
                    var e, r = t < 0;
                    if (0 !== this.negative && !r) return -1;
                    if (0 === this.negative && r) return 1;
                    if (this.strip(), this.length > 1) e = 1; else {
                        r && (t = -t), n(t <= 67108863, "Number is too big");
                        var i = 0 | this.words[0];
                        e = i === t ? 0 : i < t ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -e : e
                }, o.prototype.cmp = function (t) {
                    if (0 !== this.negative && 0 === t.negative) return -1;
                    if (0 === this.negative && 0 !== t.negative) return 1;
                    var e = this.ucmp(t);
                    return 0 !== this.negative ? 0 | -e : e
                }, o.prototype.ucmp = function (t) {
                    if (this.length > t.length) return 1;
                    if (this.length < t.length) return -1;
                    for (var e = 0, r = this.length - 1; r >= 0; r--) {
                        var n = 0 | this.words[r], i = 0 | t.words[r];
                        if (n !== i) {
                            n < i ? e = -1 : n > i && (e = 1);
                            break
                        }
                    }
                    return e
                }, o.prototype.gtn = function (t) {
                    return 1 === this.cmpn(t)
                }, o.prototype.gt = function (t) {
                    return 1 === this.cmp(t)
                }, o.prototype.gten = function (t) {
                    return this.cmpn(t) >= 0
                }, o.prototype.gte = function (t) {
                    return this.cmp(t) >= 0
                }, o.prototype.ltn = function (t) {
                    return -1 === this.cmpn(t)
                }, o.prototype.lt = function (t) {
                    return -1 === this.cmp(t)
                }, o.prototype.lten = function (t) {
                    return this.cmpn(t) <= 0
                }, o.prototype.lte = function (t) {
                    return this.cmp(t) <= 0
                }, o.prototype.eqn = function (t) {
                    return 0 === this.cmpn(t)
                }, o.prototype.eq = function (t) {
                    return 0 === this.cmp(t)
                }, o.red = function (t) {
                    return new _(t)
                }, o.prototype.toRed = function (t) {
                    return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                }, o.prototype.fromRed = function () {
                    return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, o.prototype._forceRed = function (t) {
                    return this.red = t, this
                }, o.prototype.forceRed = function (t) {
                    return n(!this.red, "Already a number in reduction context"), this._forceRed(t)
                }, o.prototype.redAdd = function (t) {
                    return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                }, o.prototype.redIAdd = function (t) {
                    return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                }, o.prototype.redSub = function (t) {
                    return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                }, o.prototype.redISub = function (t) {
                    return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                }, o.prototype.redShl = function (t) {
                    return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                }, o.prototype.redMul = function (t) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                }, o.prototype.redIMul = function (t) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                }, o.prototype.redSqr = function () {
                    return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, o.prototype.redISqr = function () {
                    return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, o.prototype.redSqrt = function () {
                    return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, o.prototype.redInvm = function () {
                    return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, o.prototype.redNeg = function () {
                    return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, o.prototype.redPow = function (t) {
                    return n(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                };
                var y = {k256: null, p224: null, p192: null, p25519: null};

                function m(t, e) {
                    this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function w() {
                    m.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function v() {
                    m.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function S() {
                    m.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function M() {
                    m.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function _(t) {
                    if ("string" == typeof t) {
                        var e = o._prime(t);
                        this.m = e.p, this.prime = e
                    } else n(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                }

                function A(t) {
                    _.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }

                m.prototype._tmp = function () {
                    var t = new o(null);
                    return t.words = new Array(Math.ceil(this.n / 13)), t
                }, m.prototype.ireduce = function (t) {
                    var e, r = t;
                    do {
                        this.split(r, this.tmp), e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                    } while (e > this.n);
                    var n = e < this.n ? -1 : r.ucmp(this.p);
                    return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                }, m.prototype.split = function (t, e) {
                    t.iushrn(this.n, 0, e)
                }, m.prototype.imulK = function (t) {
                    return t.imul(this.k)
                }, i(w, m), w.prototype.split = function (t, e) {
                    for (var r = 4194303, n = Math.min(t.length, 9), i = 0; i < n; i++) e.words[i] = t.words[i];
                    if (e.length = n, t.length <= 9) return t.words[0] = 0, void (t.length = 1);
                    var o = t.words[9];
                    for (e.words[e.length++] = o & r, i = 10; i < t.length; i++) {
                        var s = 0 | t.words[i];
                        t.words[i - 10] = (s & r) << 4 | o >>> 22, o = s
                    }
                    o >>>= 22, t.words[i - 10] = o, 0 === o && t.length > 10 ? t.length -= 10 : t.length -= 9
                }, w.prototype.imulK = function (t) {
                    t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var n = 0 | t.words[r];
                        e += 977 * n, t.words[r] = 67108863 & e, e = 64 * n + (e / 67108864 | 0)
                    }
                    return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                }, i(v, m), i(S, m), i(M, m), M.prototype.imulK = function (t) {
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var n = 19 * (0 | t.words[r]) + e, i = 67108863 & n;
                        n >>>= 26, t.words[r] = i, e = n
                    }
                    return 0 !== e && (t.words[t.length++] = e), t
                }, o._prime = function (t) {
                    if (y[t]) return y[t];
                    var e;
                    if ("k256" === t) e = new w; else if ("p224" === t) e = new v; else if ("p192" === t) e = new S; else {
                        if ("p25519" !== t) throw new Error("Unknown prime " + t);
                        e = new M
                    }
                    return y[t] = e, e
                }, _.prototype._verify1 = function (t) {
                    n(0 === t.negative, "red works only with positives"), n(t.red, "red works only with red numbers")
                }, _.prototype._verify2 = function (t, e) {
                    n(0 == (t.negative | e.negative), "red works only with positives"), n(t.red && t.red === e.red, "red works only with red numbers")
                }, _.prototype.imod = function (t) {
                    return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this)
                }, _.prototype.neg = function (t) {
                    return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                }, _.prototype.add = function (t, e) {
                    this._verify2(t, e);
                    var r = t.add(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                }, _.prototype.iadd = function (t, e) {
                    this._verify2(t, e);
                    var r = t.iadd(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r
                }, _.prototype.sub = function (t, e) {
                    this._verify2(t, e);
                    var r = t.sub(e);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
                }, _.prototype.isub = function (t, e) {
                    this._verify2(t, e);
                    var r = t.isub(e);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r
                }, _.prototype.shl = function (t, e) {
                    return this._verify1(t), this.imod(t.ushln(e))
                }, _.prototype.imul = function (t, e) {
                    return this._verify2(t, e), this.imod(t.imul(e))
                }, _.prototype.mul = function (t, e) {
                    return this._verify2(t, e), this.imod(t.mul(e))
                }, _.prototype.isqr = function (t) {
                    return this.imul(t, t.clone())
                }, _.prototype.sqr = function (t) {
                    return this.mul(t, t)
                }, _.prototype.sqrt = function (t) {
                    if (t.isZero()) return t.clone();
                    var e = this.m.andln(3);
                    if (n(e % 2 == 1), 3 === e) {
                        var r = this.m.add(new o(1)).iushrn(2);
                        return this.pow(t, r)
                    }
                    for (var i = this.m.subn(1), s = 0; !i.isZero() && 0 === i.andln(1);) s++, i.iushrn(1);
                    n(!i.isZero());
                    var a = new o(1).toRed(this), u = a.redNeg(), c = this.m.subn(1).iushrn(1), f = this.m.bitLength();
                    for (f = new o(2 * f * f).toRed(this); 0 !== this.pow(f, c).cmp(u);) f.redIAdd(u);
                    for (var h = this.pow(f, i), d = this.pow(t, i.addn(1).iushrn(1)), l = this.pow(t, i), p = s; 0 !== l.cmp(a);) {
                        for (var b = l, g = 0; 0 !== b.cmp(a); g++) b = b.redSqr();
                        n(g < p);
                        var y = this.pow(h, new o(1).iushln(p - g - 1));
                        d = d.redMul(y), h = y.redSqr(), l = l.redMul(h), p = g
                    }
                    return d
                }, _.prototype.invm = function (t) {
                    var e = t._invmp(this.m);
                    return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                }, _.prototype.pow = function (t, e) {
                    if (e.isZero()) return new o(1).toRed(this);
                    if (0 === e.cmpn(1)) return t.clone();
                    var r = new Array(16);
                    r[0] = new o(1).toRed(this), r[1] = t;
                    for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
                    var i = r[0], s = 0, a = 0, u = e.bitLength() % 26;
                    for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
                        for (var c = e.words[n], f = u - 1; f >= 0; f--) {
                            var h = c >> f & 1;
                            i !== r[0] && (i = this.sqr(i)), 0 !== h || 0 !== s ? (s <<= 1, s |= h, (4 == ++a || 0 === n && 0 === f) && (i = this.mul(i, r[s]), a = 0, s = 0)) : a = 0
                        }
                        u = 26
                    }
                    return i
                }, _.prototype.convertTo = function (t) {
                    var e = t.umod(this.m);
                    return e === t ? e.clone() : e
                }, _.prototype.convertFrom = function (t) {
                    var e = t.clone();
                    return e.red = null, e
                }, o.mont = function (t) {
                    return new A(t)
                }, i(A, _), A.prototype.convertTo = function (t) {
                    return this.imod(t.ushln(this.shift))
                }, A.prototype.convertFrom = function (t) {
                    var e = this.imod(t.mul(this.rinv));
                    return e.red = null, e
                }, A.prototype.imul = function (t, e) {
                    if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                    var r = t.imul(e), n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift), o = i;
                    return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
                }, A.prototype.mul = function (t, e) {
                    if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
                    var r = t.mul(e), n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift), s = i;
                    return i.cmp(this.m) >= 0 ? s = i.isub(this.m) : i.cmpn(0) < 0 && (s = i.iadd(this.m)), s._forceRed(this)
                }, A.prototype.invm = function (t) {
                    return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(t = r.nmd(t), this)
        }, 6729: t => {
            "use strict";
            var e = Object.prototype.hasOwnProperty, r = "~";

            function n() {
            }

            function i(t, e, r) {
                this.fn = t, this.context = e, this.once = r || !1
            }

            function o(t, e, n, o, s) {
                if ("function" != typeof n) throw new TypeError("The listener must be a function");
                var a = new i(n, o || t, s), u = r ? r + e : e;
                return t._events[u] ? t._events[u].fn ? t._events[u] = [t._events[u], a] : t._events[u].push(a) : (t._events[u] = a, t._eventsCount++), t
            }

            function s(t, e) {
                0 == --t._eventsCount ? t._events = new n : delete t._events[e]
            }

            function a() {
                this._events = new n, this._eventsCount = 0
            }

            Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (r = !1)), a.prototype.eventNames = function () {
                var t, n, i = [];
                if (0 === this._eventsCount) return i;
                for (n in t = this._events) e.call(t, n) && i.push(r ? n.slice(1) : n);
                return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(t)) : i
            }, a.prototype.listeners = function (t) {
                var e = r ? r + t : t, n = this._events[e];
                if (!n) return [];
                if (n.fn) return [n.fn];
                for (var i = 0, o = n.length, s = new Array(o); i < o; i++) s[i] = n[i].fn;
                return s
            }, a.prototype.listenerCount = function (t) {
                var e = r ? r + t : t, n = this._events[e];
                return n ? n.fn ? 1 : n.length : 0
            }, a.prototype.emit = function (t, e, n, i, o, s) {
                var a = r ? r + t : t;
                if (!this._events[a]) return !1;
                var u, c, f = this._events[a], h = arguments.length;
                if (f.fn) {
                    switch (f.once && this.removeListener(t, f.fn, void 0, !0), h) {
                        case 1:
                            return f.fn.call(f.context), !0;
                        case 2:
                            return f.fn.call(f.context, e), !0;
                        case 3:
                            return f.fn.call(f.context, e, n), !0;
                        case 4:
                            return f.fn.call(f.context, e, n, i), !0;
                        case 5:
                            return f.fn.call(f.context, e, n, i, o), !0;
                        case 6:
                            return f.fn.call(f.context, e, n, i, o, s), !0
                    }
                    for (c = 1, u = new Array(h - 1); c < h; c++) u[c - 1] = arguments[c];
                    f.fn.apply(f.context, u)
                } else {
                    var d, l = f.length;
                    for (c = 0; c < l; c++) switch (f[c].once && this.removeListener(t, f[c].fn, void 0, !0), h) {
                        case 1:
                            f[c].fn.call(f[c].context);
                            break;
                        case 2:
                            f[c].fn.call(f[c].context, e);
                            break;
                        case 3:
                            f[c].fn.call(f[c].context, e, n);
                            break;
                        case 4:
                            f[c].fn.call(f[c].context, e, n, i);
                            break;
                        default:
                            if (!u) for (d = 1, u = new Array(h - 1); d < h; d++) u[d - 1] = arguments[d];
                            f[c].fn.apply(f[c].context, u)
                    }
                }
                return !0
            }, a.prototype.on = function (t, e, r) {
                return o(this, t, e, r, !1)
            }, a.prototype.once = function (t, e, r) {
                return o(this, t, e, r, !0)
            }, a.prototype.removeListener = function (t, e, n, i) {
                var o = r ? r + t : t;
                if (!this._events[o]) return this;
                if (!e) return s(this, o), this;
                var a = this._events[o];
                if (a.fn) a.fn !== e || i && !a.once || n && a.context !== n || s(this, o); else {
                    for (var u = 0, c = [], f = a.length; u < f; u++) (a[u].fn !== e || i && !a[u].once || n && a[u].context !== n) && c.push(a[u]);
                    c.length ? this._events[o] = 1 === c.length ? c[0] : c : s(this, o)
                }
                return this
            }, a.prototype.removeAllListeners = function (t) {
                var e;
                return t ? (e = r ? r + t : t, this._events[e] && s(this, e)) : (this._events = new n, this._eventsCount = 0), this
            }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = r, a.EventEmitter = a, t.exports = a
        }, 3715: (t, e, r) => {
            var n = e;
            n.utils = r(6436), n.common = r(5772), n.sha = r(9041), n.ripemd = r(2949), n.hmac = r(2344), n.sha1 = n.sha.sha1, n.sha256 = n.sha.sha256, n.sha224 = n.sha.sha224, n.sha384 = n.sha.sha384, n.sha512 = n.sha.sha512, n.ripemd160 = n.ripemd.ripemd160
        }, 5772: (t, e, r) => {
            "use strict";
            var n = r(6436), i = r(9746);

            function o() {
                this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
            }

            e.BlockHash = o, o.prototype.update = function (t, e) {
                if (t = n.toArray(t, e), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
                    var r = (t = this.pending).length % this._delta8;
                    this.pending = t.slice(t.length - r, t.length), 0 === this.pending.length && (this.pending = null), t = n.join32(t, 0, t.length - r, this.endian);
                    for (var i = 0; i < t.length; i += this._delta32) this._update(t, i, i + this._delta32)
                }
                return this
            }, o.prototype.digest = function (t) {
                return this.update(this._pad()), i(null === this.pending), this._digest(t)
            }, o.prototype._pad = function () {
                var t = this.pendingTotal, e = this._delta8, r = e - (t + this.padLength) % e,
                    n = new Array(r + this.padLength);
                n[0] = 128;
                for (var i = 1; i < r; i++) n[i] = 0;
                if (t <<= 3, "big" === this.endian) {
                    for (var o = 8; o < this.padLength; o++) n[i++] = 0;
                    n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = t >>> 24 & 255, n[i++] = t >>> 16 & 255, n[i++] = t >>> 8 & 255, n[i++] = 255 & t
                } else for (n[i++] = 255 & t, n[i++] = t >>> 8 & 255, n[i++] = t >>> 16 & 255, n[i++] = t >>> 24 & 255, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, o = 8; o < this.padLength; o++) n[i++] = 0;
                return n
            }
        }, 2344: (t, e, r) => {
            "use strict";
            var n = r(6436), i = r(9746);

            function o(t, e, r) {
                if (!(this instanceof o)) return new o(t, e, r);
                this.Hash = t, this.blockSize = t.blockSize / 8, this.outSize = t.outSize / 8, this.inner = null, this.outer = null, this._init(n.toArray(e, r))
            }

            t.exports = o, o.prototype._init = function (t) {
                t.length > this.blockSize && (t = (new this.Hash).update(t).digest()), i(t.length <= this.blockSize);
                for (var e = t.length; e < this.blockSize; e++) t.push(0);
                for (e = 0; e < t.length; e++) t[e] ^= 54;
                for (this.inner = (new this.Hash).update(t), e = 0; e < t.length; e++) t[e] ^= 106;
                this.outer = (new this.Hash).update(t)
            }, o.prototype.update = function (t, e) {
                return this.inner.update(t, e), this
            }, o.prototype.digest = function (t) {
                return this.outer.update(this.inner.digest()), this.outer.digest(t)
            }
        }, 2949: (t, e, r) => {
            "use strict";
            var n = r(6436), i = r(5772), o = n.rotl32, s = n.sum32, a = n.sum32_3, u = n.sum32_4, c = i.BlockHash;

            function f() {
                if (!(this instanceof f)) return new f;
                c.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
            }

            function h(t, e, r, n) {
                return t <= 15 ? e ^ r ^ n : t <= 31 ? e & r | ~e & n : t <= 47 ? (e | ~r) ^ n : t <= 63 ? e & n | r & ~n : e ^ (r | ~n)
            }

            function d(t) {
                return t <= 15 ? 0 : t <= 31 ? 1518500249 : t <= 47 ? 1859775393 : t <= 63 ? 2400959708 : 2840853838
            }

            function l(t) {
                return t <= 15 ? 1352829926 : t <= 31 ? 1548603684 : t <= 47 ? 1836072691 : t <= 63 ? 2053994217 : 0
            }

            n.inherits(f, c), e.ripemd160 = f, f.blockSize = 512, f.outSize = 160, f.hmacStrength = 192, f.padLength = 64, f.prototype._update = function (t, e) {
                for (var r = this.h[0], n = this.h[1], i = this.h[2], c = this.h[3], f = this.h[4], m = r, w = n, v = i, S = c, M = f, _ = 0; _ < 80; _++) {
                    var A = s(o(u(r, h(_, n, i, c), t[p[_] + e], d(_)), g[_]), f);
                    r = f, f = c, c = o(i, 10), i = n, n = A, A = s(o(u(m, h(79 - _, w, v, S), t[b[_] + e], l(_)), y[_]), M), m = M, M = S, S = o(v, 10), v = w, w = A
                }
                A = a(this.h[1], i, S), this.h[1] = a(this.h[2], c, M), this.h[2] = a(this.h[3], f, m), this.h[3] = a(this.h[4], r, w), this.h[4] = a(this.h[0], n, v), this.h[0] = A
            }, f.prototype._digest = function (t) {
                return "hex" === t ? n.toHex32(this.h, "little") : n.split32(this.h, "little")
            };
            var p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
                b = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
                g = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
                y = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
        }, 9041: (t, e, r) => {
            "use strict";
            e.sha1 = r(4761), e.sha224 = r(799), e.sha256 = r(9344), e.sha384 = r(772), e.sha512 = r(5900)
        }, 4761: (t, e, r) => {
            "use strict";
            var n = r(6436), i = r(5772), o = r(7038), s = n.rotl32, a = n.sum32, u = n.sum32_5, c = o.ft_1,
                f = i.BlockHash, h = [1518500249, 1859775393, 2400959708, 3395469782];

            function d() {
                if (!(this instanceof d)) return new d;
                f.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80)
            }

            n.inherits(d, f), t.exports = d, d.blockSize = 512, d.outSize = 160, d.hmacStrength = 80, d.padLength = 64, d.prototype._update = function (t, e) {
                for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n];
                for (; n < r.length; n++) r[n] = s(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
                var i = this.h[0], o = this.h[1], f = this.h[2], d = this.h[3], l = this.h[4];
                for (n = 0; n < r.length; n++) {
                    var p = ~~(n / 20), b = u(s(i, 5), c(p, o, f, d), l, r[n], h[p]);
                    l = d, d = f, f = s(o, 30), o = i, i = b
                }
                this.h[0] = a(this.h[0], i), this.h[1] = a(this.h[1], o), this.h[2] = a(this.h[2], f), this.h[3] = a(this.h[3], d), this.h[4] = a(this.h[4], l)
            }, d.prototype._digest = function (t) {
                return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
            }
        }, 799: (t, e, r) => {
            "use strict";
            var n = r(6436), i = r(9344);

            function o() {
                if (!(this instanceof o)) return new o;
                i.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
            }

            n.inherits(o, i), t.exports = o, o.blockSize = 512, o.outSize = 224, o.hmacStrength = 192, o.padLength = 64, o.prototype._digest = function (t) {
                return "hex" === t ? n.toHex32(this.h.slice(0, 7), "big") : n.split32(this.h.slice(0, 7), "big")
            }
        }, 9344: (t, e, r) => {
            "use strict";
            var n = r(6436), i = r(5772), o = r(7038), s = r(9746), a = n.sum32, u = n.sum32_4, c = n.sum32_5,
                f = o.ch32, h = o.maj32, d = o.s0_256, l = o.s1_256, p = o.g0_256, b = o.g1_256, g = i.BlockHash,
                y = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

            function m() {
                if (!(this instanceof m)) return new m;
                g.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = y, this.W = new Array(64)
            }

            n.inherits(m, g), t.exports = m, m.blockSize = 512, m.outSize = 256, m.hmacStrength = 192, m.padLength = 64, m.prototype._update = function (t, e) {
                for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n];
                for (; n < r.length; n++) r[n] = u(b(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
                var i = this.h[0], o = this.h[1], g = this.h[2], y = this.h[3], m = this.h[4], w = this.h[5],
                    v = this.h[6], S = this.h[7];
                for (s(this.k.length === r.length), n = 0; n < r.length; n++) {
                    var M = c(S, l(m), f(m, w, v), this.k[n], r[n]), _ = a(d(i), h(i, o, g));
                    S = v, v = w, w = m, m = a(y, M), y = g, g = o, o = i, i = a(M, _)
                }
                this.h[0] = a(this.h[0], i), this.h[1] = a(this.h[1], o), this.h[2] = a(this.h[2], g), this.h[3] = a(this.h[3], y), this.h[4] = a(this.h[4], m), this.h[5] = a(this.h[5], w), this.h[6] = a(this.h[6], v), this.h[7] = a(this.h[7], S)
            }, m.prototype._digest = function (t) {
                return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
            }
        }, 772: (t, e, r) => {
            "use strict";
            var n = r(6436), i = r(5900);

            function o() {
                if (!(this instanceof o)) return new o;
                i.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
            }

            n.inherits(o, i), t.exports = o, o.blockSize = 1024, o.outSize = 384, o.hmacStrength = 192, o.padLength = 128, o.prototype._digest = function (t) {
                return "hex" === t ? n.toHex32(this.h.slice(0, 12), "big") : n.split32(this.h.slice(0, 12), "big")
            }
        }, 5900: (t, e, r) => {
            "use strict";
            var n = r(6436), i = r(5772), o = r(9746), s = n.rotr64_hi, a = n.rotr64_lo, u = n.shr64_hi, c = n.shr64_lo,
                f = n.sum64, h = n.sum64_hi, d = n.sum64_lo, l = n.sum64_4_hi, p = n.sum64_4_lo, b = n.sum64_5_hi,
                g = n.sum64_5_lo, y = i.BlockHash,
                m = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

            function w() {
                if (!(this instanceof w)) return new w;
                y.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = m, this.W = new Array(160)
            }

            function v(t, e, r, n, i) {
                var o = t & r ^ ~t & i;
                return o < 0 && (o += 4294967296), o
            }

            function S(t, e, r, n, i, o) {
                var s = e & n ^ ~e & o;
                return s < 0 && (s += 4294967296), s
            }

            function M(t, e, r, n, i) {
                var o = t & r ^ t & i ^ r & i;
                return o < 0 && (o += 4294967296), o
            }

            function _(t, e, r, n, i, o) {
                var s = e & n ^ e & o ^ n & o;
                return s < 0 && (s += 4294967296), s
            }

            function A(t, e) {
                var r = s(t, e, 28) ^ s(e, t, 2) ^ s(e, t, 7);
                return r < 0 && (r += 4294967296), r
            }

            function k(t, e) {
                var r = a(t, e, 28) ^ a(e, t, 2) ^ a(e, t, 7);
                return r < 0 && (r += 4294967296), r
            }

            function E(t, e) {
                var r = a(t, e, 14) ^ a(t, e, 18) ^ a(e, t, 9);
                return r < 0 && (r += 4294967296), r
            }

            function I(t, e) {
                var r = s(t, e, 1) ^ s(t, e, 8) ^ u(t, e, 7);
                return r < 0 && (r += 4294967296), r
            }

            function B(t, e) {
                var r = a(t, e, 1) ^ a(t, e, 8) ^ c(t, e, 7);
                return r < 0 && (r += 4294967296), r
            }

            function x(t, e) {
                var r = a(t, e, 19) ^ a(e, t, 29) ^ c(t, e, 6);
                return r < 0 && (r += 4294967296), r
            }

            n.inherits(w, y), t.exports = w, w.blockSize = 1024, w.outSize = 512, w.hmacStrength = 192, w.padLength = 128, w.prototype._prepareBlock = function (t, e) {
                for (var r = this.W, n = 0; n < 32; n++) r[n] = t[e + n];
                for (; n < r.length; n += 2) {
                    var i = (g = r[n - 4], y = r[n - 3], m = void 0, (m = s(g, y, 19) ^ s(y, g, 29) ^ u(g, y, 6)) < 0 && (m += 4294967296), m),
                        o = x(r[n - 4], r[n - 3]), a = r[n - 14], c = r[n - 13], f = I(r[n - 30], r[n - 29]),
                        h = B(r[n - 30], r[n - 29]), d = r[n - 32], b = r[n - 31];
                    r[n] = l(i, o, a, c, f, h, d, b), r[n + 1] = p(i, o, a, c, f, h, d, b)
                }
                var g, y, m
            }, w.prototype._update = function (t, e) {
                this._prepareBlock(t, e);
                var r, n, i, a = this.W, u = this.h[0], c = this.h[1], l = this.h[2], p = this.h[3], y = this.h[4],
                    m = this.h[5], w = this.h[6], I = this.h[7], B = this.h[8], x = this.h[9], R = this.h[10],
                    P = this.h[11], O = this.h[12], T = this.h[13], U = this.h[14], L = this.h[15];
                o(this.k.length === a.length);
                for (var N = 0; N < a.length; N += 2) {
                    var z = U, C = L,
                        q = (i = void 0, (i = s(r = B, n = x, 14) ^ s(r, n, 18) ^ s(n, r, 9)) < 0 && (i += 4294967296), i),
                        W = E(B, x), j = v(B, 0, R, 0, O), K = S(0, x, 0, P, 0, T), F = this.k[N], D = this.k[N + 1],
                        $ = a[N], J = a[N + 1], V = b(z, C, q, W, j, K, F, D, $, J),
                        H = g(z, C, q, W, j, K, F, D, $, J);
                    z = A(u, c), C = k(u, c), q = M(u, 0, l, 0, y), W = _(0, c, 0, p, 0, m);
                    var G = h(z, C, q, W), Z = d(z, C, q, W);
                    U = O, L = T, O = R, T = P, R = B, P = x, B = h(w, I, V, H), x = d(I, I, V, H), w = y, I = m, y = l, m = p, l = u, p = c, u = h(V, H, G, Z), c = d(V, H, G, Z)
                }
                f(this.h, 0, u, c), f(this.h, 2, l, p), f(this.h, 4, y, m), f(this.h, 6, w, I), f(this.h, 8, B, x), f(this.h, 10, R, P), f(this.h, 12, O, T), f(this.h, 14, U, L)
            }, w.prototype._digest = function (t) {
                return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
            }
        }, 7038: (t, e, r) => {
            "use strict";
            var n = r(6436).rotr32;

            function i(t, e, r) {
                return t & e ^ ~t & r
            }

            function o(t, e, r) {
                return t & e ^ t & r ^ e & r
            }

            function s(t, e, r) {
                return t ^ e ^ r
            }

            e.ft_1 = function (t, e, r, n) {
                return 0 === t ? i(e, r, n) : 1 === t || 3 === t ? s(e, r, n) : 2 === t ? o(e, r, n) : void 0
            }, e.ch32 = i, e.maj32 = o, e.p32 = s, e.s0_256 = function (t) {
                return n(t, 2) ^ n(t, 13) ^ n(t, 22)
            }, e.s1_256 = function (t) {
                return n(t, 6) ^ n(t, 11) ^ n(t, 25)
            }, e.g0_256 = function (t) {
                return n(t, 7) ^ n(t, 18) ^ t >>> 3
            }, e.g1_256 = function (t) {
                return n(t, 17) ^ n(t, 19) ^ t >>> 10
            }
        }, 6436: (t, e, r) => {
            "use strict";
            var n = r(9746), i = r(5717);

            function o(t, e) {
                return 55296 == (64512 & t.charCodeAt(e)) && !(e < 0 || e + 1 >= t.length) && 56320 == (64512 & t.charCodeAt(e + 1))
            }

            function s(t) {
                return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (255 & t) << 24) >>> 0
            }

            function a(t) {
                return 1 === t.length ? "0" + t : t
            }

            function u(t) {
                return 7 === t.length ? "0" + t : 6 === t.length ? "00" + t : 5 === t.length ? "000" + t : 4 === t.length ? "0000" + t : 3 === t.length ? "00000" + t : 2 === t.length ? "000000" + t : 1 === t.length ? "0000000" + t : t
            }

            e.inherits = i, e.toArray = function (t, e) {
                if (Array.isArray(t)) return t.slice();
                if (!t) return [];
                var r = [];
                if ("string" == typeof t) if (e) {
                    if ("hex" === e) for ((t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t), i = 0; i < t.length; i += 2) r.push(parseInt(t[i] + t[i + 1], 16))
                } else for (var n = 0, i = 0; i < t.length; i++) {
                    var s = t.charCodeAt(i);
                    s < 128 ? r[n++] = s : s < 2048 ? (r[n++] = s >> 6 | 192, r[n++] = 63 & s | 128) : o(t, i) ? (s = 65536 + ((1023 & s) << 10) + (1023 & t.charCodeAt(++i)), r[n++] = s >> 18 | 240, r[n++] = s >> 12 & 63 | 128, r[n++] = s >> 6 & 63 | 128, r[n++] = 63 & s | 128) : (r[n++] = s >> 12 | 224, r[n++] = s >> 6 & 63 | 128, r[n++] = 63 & s | 128)
                } else for (i = 0; i < t.length; i++) r[i] = 0 | t[i];
                return r
            }, e.toHex = function (t) {
                for (var e = "", r = 0; r < t.length; r++) e += a(t[r].toString(16));
                return e
            }, e.htonl = s, e.toHex32 = function (t, e) {
                for (var r = "", n = 0; n < t.length; n++) {
                    var i = t[n];
                    "little" === e && (i = s(i)), r += u(i.toString(16))
                }
                return r
            }, e.zero2 = a, e.zero8 = u, e.join32 = function (t, e, r, i) {
                var o = r - e;
                n(o % 4 == 0);
                for (var s = new Array(o / 4), a = 0, u = e; a < s.length; a++, u += 4) {
                    var c;
                    c = "big" === i ? t[u] << 24 | t[u + 1] << 16 | t[u + 2] << 8 | t[u + 3] : t[u + 3] << 24 | t[u + 2] << 16 | t[u + 1] << 8 | t[u], s[a] = c >>> 0
                }
                return s
            }, e.split32 = function (t, e) {
                for (var r = new Array(4 * t.length), n = 0, i = 0; n < t.length; n++, i += 4) {
                    var o = t[n];
                    "big" === e ? (r[i] = o >>> 24, r[i + 1] = o >>> 16 & 255, r[i + 2] = o >>> 8 & 255, r[i + 3] = 255 & o) : (r[i + 3] = o >>> 24, r[i + 2] = o >>> 16 & 255, r[i + 1] = o >>> 8 & 255, r[i] = 255 & o)
                }
                return r
            }, e.rotr32 = function (t, e) {
                return t >>> e | t << 32 - e
            }, e.rotl32 = function (t, e) {
                return t << e | t >>> 32 - e
            }, e.sum32 = function (t, e) {
                return t + e >>> 0
            }, e.sum32_3 = function (t, e, r) {
                return t + e + r >>> 0
            }, e.sum32_4 = function (t, e, r, n) {
                return t + e + r + n >>> 0
            }, e.sum32_5 = function (t, e, r, n, i) {
                return t + e + r + n + i >>> 0
            }, e.sum64 = function (t, e, r, n) {
                var i = t[e], o = n + t[e + 1] >>> 0, s = (o < n ? 1 : 0) + r + i;
                t[e] = s >>> 0, t[e + 1] = o
            }, e.sum64_hi = function (t, e, r, n) {
                return (e + n >>> 0 < e ? 1 : 0) + t + r >>> 0
            }, e.sum64_lo = function (t, e, r, n) {
                return e + n >>> 0
            }, e.sum64_4_hi = function (t, e, r, n, i, o, s, a) {
                var u = 0, c = e;
                return u += (c = c + n >>> 0) < e ? 1 : 0, u += (c = c + o >>> 0) < o ? 1 : 0, t + r + i + s + (u += (c = c + a >>> 0) < a ? 1 : 0) >>> 0
            }, e.sum64_4_lo = function (t, e, r, n, i, o, s, a) {
                return e + n + o + a >>> 0
            }, e.sum64_5_hi = function (t, e, r, n, i, o, s, a, u, c) {
                var f = 0, h = e;
                return f += (h = h + n >>> 0) < e ? 1 : 0, f += (h = h + o >>> 0) < o ? 1 : 0, f += (h = h + a >>> 0) < a ? 1 : 0, t + r + i + s + u + (f += (h = h + c >>> 0) < c ? 1 : 0) >>> 0
            }, e.sum64_5_lo = function (t, e, r, n, i, o, s, a, u, c) {
                return e + n + o + a + c >>> 0
            }, e.rotr64_hi = function (t, e, r) {
                return (e << 32 - r | t >>> r) >>> 0
            }, e.rotr64_lo = function (t, e, r) {
                return (t << 32 - r | e >>> r) >>> 0
            }, e.shr64_hi = function (t, e, r) {
                return t >>> r
            }, e.shr64_lo = function (t, e, r) {
                return (t << 32 - r | e >>> r) >>> 0
            }
        }, 2156: (t, e, r) => {
            "use strict";
            var n = r(3715), i = r(4504), o = r(9746);

            function s(t) {
                if (!(this instanceof s)) return new s(t);
                this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
                var e = i.toArray(t.entropy, t.entropyEnc || "hex"), r = i.toArray(t.nonce, t.nonceEnc || "hex"),
                    n = i.toArray(t.pers, t.persEnc || "hex");
                o(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(e, r, n)
            }

            t.exports = s, s.prototype._init = function (t, e, r) {
                var n = t.concat(e).concat(r);
                this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
                for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;
                this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656
            }, s.prototype._hmac = function () {
                return new n.hmac(this.hash, this.K)
            }, s.prototype._update = function (t) {
                var e = this._hmac().update(this.V).update([0]);
                t && (e = e.update(t)), this.K = e.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest())
            }, s.prototype.reseed = function (t, e, r, n) {
                "string" != typeof e && (n = r, r = e, e = null), t = i.toArray(t, e), r = i.toArray(r, n), o(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(r || [])), this._reseed = 1
            }, s.prototype.generate = function (t, e, r, n) {
                if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
                "string" != typeof e && (n = r, r = e, e = null), r && (r = i.toArray(r, n || "hex"), this._update(r));
                for (var o = []; o.length < t;) this.V = this._hmac().update(this.V).digest(), o = o.concat(this.V);
                var s = o.slice(0, t);
                return this._update(r), this._reseed++, i.encode(s, e)
            }
        }, 645: (t, e) => {
            e.read = function (t, e, r, n, i) {
                var o, s, a = 8 * i - n - 1, u = (1 << a) - 1, c = u >> 1, f = -7, h = r ? i - 1 : 0, d = r ? -1 : 1,
                    l = t[e + h];
                for (h += d, o = l & (1 << -f) - 1, l >>= -f, f += a; f > 0; o = 256 * o + t[e + h], h += d, f -= 8) ;
                for (s = o & (1 << -f) - 1, o >>= -f, f += n; f > 0; s = 256 * s + t[e + h], h += d, f -= 8) ;
                if (0 === o) o = 1 - c; else {
                    if (o === u) return s ? NaN : 1 / 0 * (l ? -1 : 1);
                    s += Math.pow(2, n), o -= c
                }
                return (l ? -1 : 1) * s * Math.pow(2, o - n)
            }, e.write = function (t, e, r, n, i, o) {
                var s, a, u, c = 8 * o - i - 1, f = (1 << c) - 1, h = f >> 1,
                    d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, l = n ? 0 : o - 1, p = n ? 1 : -1,
                    b = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = f) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e += s + h >= 1 ? d / u : d * Math.pow(2, 1 - h)) * u >= 2 && (s++, u /= 2), s + h >= f ? (a = 0, s = f) : s + h >= 1 ? (a = (e * u - 1) * Math.pow(2, i), s += h) : (a = e * Math.pow(2, h - 1) * Math.pow(2, i), s = 0)); i >= 8; t[r + l] = 255 & a, l += p, a /= 256, i -= 8) ;
                for (s = s << i | a, c += i; c > 0; t[r + l] = 255 & s, l += p, s /= 256, c -= 8) ;
                t[r + l - p] |= 128 * b
            }
        }, 5717: t => {
            "function" == typeof Object.create ? t.exports = function (t, e) {
                e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }))
            } : t.exports = function (t, e) {
                if (e) {
                    t.super_ = e;
                    var r = function () {
                    };
                    r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                }
            }
        }, 1198: (t, e, r) => {
            "use strict";
            const n = r(4608).v4, i = r(7741), o = function (t, e) {
                if (!(this instanceof o)) return new o(t, e);
                e || (e = {}), this.options = {
                    reviver: void 0 !== e.reviver ? e.reviver : null,
                    replacer: void 0 !== e.replacer ? e.replacer : null,
                    generator: void 0 !== e.generator ? e.generator : function () {
                        return n()
                    },
                    version: void 0 !== e.version ? e.version : 2,
                    notificationIdNull: "boolean" == typeof e.notificationIdNull && e.notificationIdNull
                }, this.callServer = t
            };
            t.exports = o, o.prototype.request = function (t, e, r, n) {
                const o = this;
                let s = null;
                const a = Array.isArray(t) && "function" == typeof e;
                if (1 === this.options.version && a) throw new TypeError("JSON-RPC 1.0 does not support batching");
                if (a || !a && t && "object" == typeof t && "function" == typeof e) n = e, s = t; else {
                    "function" == typeof r && (n = r, r = void 0);
                    const o = "function" == typeof n;
                    try {
                        s = i(t, e, r, {
                            generator: this.options.generator,
                            version: this.options.version,
                            notificationIdNull: this.options.notificationIdNull
                        })
                    } catch (t) {
                        if (o) return n(t);
                        throw t
                    }
                    if (!o) return s
                }
                let u;
                try {
                    u = JSON.stringify(s, this.options.replacer)
                } catch (t) {
                    return n(t)
                }
                return this.callServer(u, (function (t, e) {
                    o._parseResponse(t, e, n)
                })), s
            }, o.prototype._parseResponse = function (t, e, r) {
                if (t) return void r(t);
                if (!e) return r();
                let n;
                try {
                    n = JSON.parse(e, this.options.reviver)
                } catch (t) {
                    return r(t)
                }
                if (3 === r.length) {
                    if (Array.isArray(n)) {
                        const t = function (t) {
                            return void 0 !== t.error
                        }, e = function (e) {
                            return !t(e)
                        };
                        return r(null, n.filter(t), n.filter(e))
                    }
                    return r(null, n.error, n.result)
                }
                r(null, n)
            }
        }, 7741: (t, e, r) => {
            "use strict";
            const n = r(4608).v4;
            t.exports = function (t, e, r, i) {
                if ("string" != typeof t) throw new TypeError(t + " must be a string");
                const o = "number" == typeof (i = i || {}).version ? i.version : 2;
                if (1 !== o && 2 !== o) throw new TypeError(o + " must be 1 or 2");
                const s = {method: t};
                if (2 === o && (s.jsonrpc = "2.0"), e) {
                    if ("object" != typeof e && !Array.isArray(e)) throw new TypeError(e + " must be an object, array or omitted");
                    s.params = e
                }
                if (void 0 === r) {
                    const t = "function" == typeof i.generator ? i.generator : function () {
                        return n()
                    };
                    s.id = t(s, i)
                } else 2 === o && null === r ? i.notificationIdNull && (s.id = null) : s.id = r;
                return s
            }
        }, 1094: (t, e, r) => {
            var n;
            !function () {
                "use strict";
                var i = "input is invalid type", o = "object" == typeof window, s = o ? window : {};
                s.JS_SHA3_NO_WINDOW && (o = !1);
                var a = !o && "object" == typeof self;
                !s.JS_SHA3_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node ? s = r.g : a && (s = self);
                var u = !s.JS_SHA3_NO_COMMON_JS && t.exports, c = r.amdO,
                    f = !s.JS_SHA3_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
                    h = "0123456789abcdef".split(""), d = [4, 1024, 262144, 67108864], l = [0, 8, 16, 24],
                    p = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
                    b = [224, 256, 384, 512], g = [128, 256], y = ["hex", "buffer", "arrayBuffer", "array", "digest"],
                    m = {128: 168, 256: 136};
                !s.JS_SHA3_NO_NODE_JS && Array.isArray || (Array.isArray = function (t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }), !f || !s.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function (t) {
                    return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer
                });
                for (var w = function (t, e, r) {
                    return function (n) {
                        return new U(t, e, t).update(n)[r]()
                    }
                }, v = function (t, e, r) {
                    return function (n, i) {
                        return new U(t, e, i).update(n)[r]()
                    }
                }, S = function (t, e, r) {
                    return function (e, n, i, o) {
                        return E["cshake" + t].update(e, n, i, o)[r]()
                    }
                }, M = function (t, e, r) {
                    return function (e, n, i, o) {
                        return E["kmac" + t].update(e, n, i, o)[r]()
                    }
                }, _ = function (t, e, r, n) {
                    for (var i = 0; i < y.length; ++i) {
                        var o = y[i];
                        t[o] = e(r, n, o)
                    }
                    return t
                }, A = function (t, e) {
                    var r = w(t, e, "hex");
                    return r.create = function () {
                        return new U(t, e, t)
                    }, r.update = function (t) {
                        return r.create().update(t)
                    }, _(r, w, t, e)
                }, k = [{name: "keccak", padding: [1, 256, 65536, 16777216], bits: b, createMethod: A}, {
                    name: "sha3",
                    padding: [6, 1536, 393216, 100663296],
                    bits: b,
                    createMethod: A
                }, {
                    name: "shake", padding: [31, 7936, 2031616, 520093696], bits: g, createMethod: function (t, e) {
                        var r = v(t, e, "hex");
                        return r.create = function (r) {
                            return new U(t, e, r)
                        }, r.update = function (t, e) {
                            return r.create(e).update(t)
                        }, _(r, v, t, e)
                    }
                }, {
                    name: "cshake", padding: d, bits: g, createMethod: function (t, e) {
                        var r = m[t], n = S(t, 0, "hex");
                        return n.create = function (n, i, o) {
                            return i || o ? new U(t, e, n).bytepad([i, o], r) : E["shake" + t].create(n)
                        }, n.update = function (t, e, r, i) {
                            return n.create(e, r, i).update(t)
                        }, _(n, S, t, e)
                    }
                }, {
                    name: "kmac", padding: d, bits: g, createMethod: function (t, e) {
                        var r = m[t], n = M(t, 0, "hex");
                        return n.create = function (n, i, o) {
                            return new L(t, e, i).bytepad(["KMAC", o], r).bytepad([n], r)
                        }, n.update = function (t, e, r, i) {
                            return n.create(t, r, i).update(e)
                        }, _(n, M, t, e)
                    }
                }], E = {}, I = [], B = 0; B < k.length; ++B) for (var x = k[B], R = x.bits, P = 0; P < R.length; ++P) {
                    var O = x.name + "_" + R[P];
                    if (I.push(O), E[O] = x.createMethod(R[P], x.padding), "sha3" !== x.name) {
                        var T = x.name + R[P];
                        I.push(T), E[T] = E[O]
                    }
                }

                function U(t, e, r) {
                    this.blocks = [], this.s = [], this.padding = e, this.outputBits = r, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (t << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
                    for (var n = 0; n < 50; ++n) this.s[n] = 0
                }

                function L(t, e, r) {
                    U.call(this, t, e, r)
                }

                U.prototype.update = function (t) {
                    if (this.finalized) throw new Error("finalize already called");
                    var e, r = typeof t;
                    if ("string" !== r) {
                        if ("object" !== r) throw new Error(i);
                        if (null === t) throw new Error(i);
                        if (f && t.constructor === ArrayBuffer) t = new Uint8Array(t); else if (!(Array.isArray(t) || f && ArrayBuffer.isView(t))) throw new Error(i);
                        e = !0
                    }
                    for (var n, o, s = this.blocks, a = this.byteCount, u = t.length, c = this.blockCount, h = 0, d = this.s; h < u;) {
                        if (this.reset) for (this.reset = !1, s[0] = this.block, n = 1; n < c + 1; ++n) s[n] = 0;
                        if (e) for (n = this.start; h < u && n < a; ++h) s[n >> 2] |= t[h] << l[3 & n++]; else for (n = this.start; h < u && n < a; ++h) (o = t.charCodeAt(h)) < 128 ? s[n >> 2] |= o << l[3 & n++] : o < 2048 ? (s[n >> 2] |= (192 | o >> 6) << l[3 & n++], s[n >> 2] |= (128 | 63 & o) << l[3 & n++]) : o < 55296 || o >= 57344 ? (s[n >> 2] |= (224 | o >> 12) << l[3 & n++], s[n >> 2] |= (128 | o >> 6 & 63) << l[3 & n++], s[n >> 2] |= (128 | 63 & o) << l[3 & n++]) : (o = 65536 + ((1023 & o) << 10 | 1023 & t.charCodeAt(++h)), s[n >> 2] |= (240 | o >> 18) << l[3 & n++], s[n >> 2] |= (128 | o >> 12 & 63) << l[3 & n++], s[n >> 2] |= (128 | o >> 6 & 63) << l[3 & n++], s[n >> 2] |= (128 | 63 & o) << l[3 & n++]);
                        if (this.lastByteIndex = n, n >= a) {
                            for (this.start = n - a, this.block = s[c], n = 0; n < c; ++n) d[n] ^= s[n];
                            N(d), this.reset = !0
                        } else this.start = n
                    }
                    return this
                }, U.prototype.encode = function (t, e) {
                    var r = 255 & t, n = 1, i = [r];
                    for (r = 255 & (t >>= 8); r > 0;) i.unshift(r), r = 255 & (t >>= 8), ++n;
                    return e ? i.push(n) : i.unshift(n), this.update(i), i.length
                }, U.prototype.encodeString = function (t) {
                    var e, r = typeof t;
                    if ("string" !== r) {
                        if ("object" !== r) throw new Error(i);
                        if (null === t) throw new Error(i);
                        if (f && t.constructor === ArrayBuffer) t = new Uint8Array(t); else if (!(Array.isArray(t) || f && ArrayBuffer.isView(t))) throw new Error(i);
                        e = !0
                    }
                    var n = 0, o = t.length;
                    if (e) n = o; else for (var s = 0; s < t.length; ++s) {
                        var a = t.charCodeAt(s);
                        a < 128 ? n += 1 : a < 2048 ? n += 2 : a < 55296 || a >= 57344 ? n += 3 : (a = 65536 + ((1023 & a) << 10 | 1023 & t.charCodeAt(++s)), n += 4)
                    }
                    return n += this.encode(8 * n), this.update(t), n
                }, U.prototype.bytepad = function (t, e) {
                    for (var r = this.encode(e), n = 0; n < t.length; ++n) r += this.encodeString(t[n]);
                    var i = e - r % e, o = [];
                    return o.length = i, this.update(o), this
                }, U.prototype.finalize = function () {
                    if (!this.finalized) {
                        this.finalized = !0;
                        var t = this.blocks, e = this.lastByteIndex, r = this.blockCount, n = this.s;
                        if (t[e >> 2] |= this.padding[3 & e], this.lastByteIndex === this.byteCount) for (t[0] = t[r], e = 1; e < r + 1; ++e) t[e] = 0;
                        for (t[r - 1] |= 2147483648, e = 0; e < r; ++e) n[e] ^= t[e];
                        N(n)
                    }
                }, U.prototype.toString = U.prototype.hex = function () {
                    this.finalize();
                    for (var t, e = this.blockCount, r = this.s, n = this.outputBlocks, i = this.extraBytes, o = 0, s = 0, a = ""; s < n;) {
                        for (o = 0; o < e && s < n; ++o, ++s) t = r[o], a += h[t >> 4 & 15] + h[15 & t] + h[t >> 12 & 15] + h[t >> 8 & 15] + h[t >> 20 & 15] + h[t >> 16 & 15] + h[t >> 28 & 15] + h[t >> 24 & 15];
                        s % e == 0 && (N(r), o = 0)
                    }
                    return i && (t = r[o], a += h[t >> 4 & 15] + h[15 & t], i > 1 && (a += h[t >> 12 & 15] + h[t >> 8 & 15]), i > 2 && (a += h[t >> 20 & 15] + h[t >> 16 & 15])), a
                }, U.prototype.arrayBuffer = function () {
                    this.finalize();
                    var t, e = this.blockCount, r = this.s, n = this.outputBlocks, i = this.extraBytes, o = 0, s = 0,
                        a = this.outputBits >> 3;
                    t = i ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(a);
                    for (var u = new Uint32Array(t); s < n;) {
                        for (o = 0; o < e && s < n; ++o, ++s) u[s] = r[o];
                        s % e == 0 && N(r)
                    }
                    return i && (u[o] = r[o], t = t.slice(0, a)), t
                }, U.prototype.buffer = U.prototype.arrayBuffer, U.prototype.digest = U.prototype.array = function () {
                    this.finalize();
                    for (var t, e, r = this.blockCount, n = this.s, i = this.outputBlocks, o = this.extraBytes, s = 0, a = 0, u = []; a < i;) {
                        for (s = 0; s < r && a < i; ++s, ++a) t = a << 2, e = n[s], u[t] = 255 & e, u[t + 1] = e >> 8 & 255, u[t + 2] = e >> 16 & 255, u[t + 3] = e >> 24 & 255;
                        a % r == 0 && N(n)
                    }
                    return o && (t = a << 2, e = n[s], u[t] = 255 & e, o > 1 && (u[t + 1] = e >> 8 & 255), o > 2 && (u[t + 2] = e >> 16 & 255)), u
                }, L.prototype = new U, L.prototype.finalize = function () {
                    return this.encode(this.outputBits, !0), U.prototype.finalize.call(this)
                };
                var N = function (t) {
                    var e, r, n, i, o, s, a, u, c, f, h, d, l, b, g, y, m, w, v, S, M, _, A, k, E, I, B, x, R, P, O, T,
                        U, L, N, z, C, q, W, j, K, F, D, $, J, V, H, G, Z, Y, X, Q, tt, et, rt, nt, it, ot, st, at, ut,
                        ct, ft;
                    for (n = 0; n < 48; n += 2) i = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], o = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], s = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], a = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], u = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], c = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], f = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], h = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], e = (d = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]) ^ (s << 1 | a >>> 31), r = (l = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]) ^ (a << 1 | s >>> 31), t[0] ^= e, t[1] ^= r, t[10] ^= e, t[11] ^= r, t[20] ^= e, t[21] ^= r, t[30] ^= e, t[31] ^= r, t[40] ^= e, t[41] ^= r, e = i ^ (u << 1 | c >>> 31), r = o ^ (c << 1 | u >>> 31), t[2] ^= e, t[3] ^= r, t[12] ^= e, t[13] ^= r, t[22] ^= e, t[23] ^= r, t[32] ^= e, t[33] ^= r, t[42] ^= e, t[43] ^= r, e = s ^ (f << 1 | h >>> 31), r = a ^ (h << 1 | f >>> 31), t[4] ^= e, t[5] ^= r, t[14] ^= e, t[15] ^= r, t[24] ^= e, t[25] ^= r, t[34] ^= e, t[35] ^= r, t[44] ^= e, t[45] ^= r, e = u ^ (d << 1 | l >>> 31), r = c ^ (l << 1 | d >>> 31), t[6] ^= e, t[7] ^= r, t[16] ^= e, t[17] ^= r, t[26] ^= e, t[27] ^= r, t[36] ^= e, t[37] ^= r, t[46] ^= e, t[47] ^= r, e = f ^ (i << 1 | o >>> 31), r = h ^ (o << 1 | i >>> 31), t[8] ^= e, t[9] ^= r, t[18] ^= e, t[19] ^= r, t[28] ^= e, t[29] ^= r, t[38] ^= e, t[39] ^= r, t[48] ^= e, t[49] ^= r, b = t[0], g = t[1], V = t[11] << 4 | t[10] >>> 28, H = t[10] << 4 | t[11] >>> 28, x = t[20] << 3 | t[21] >>> 29, R = t[21] << 3 | t[20] >>> 29, at = t[31] << 9 | t[30] >>> 23, ut = t[30] << 9 | t[31] >>> 23, F = t[40] << 18 | t[41] >>> 14, D = t[41] << 18 | t[40] >>> 14, L = t[2] << 1 | t[3] >>> 31, N = t[3] << 1 | t[2] >>> 31, y = t[13] << 12 | t[12] >>> 20, m = t[12] << 12 | t[13] >>> 20, G = t[22] << 10 | t[23] >>> 22, Z = t[23] << 10 | t[22] >>> 22, P = t[33] << 13 | t[32] >>> 19, O = t[32] << 13 | t[33] >>> 19, ct = t[42] << 2 | t[43] >>> 30, ft = t[43] << 2 | t[42] >>> 30, et = t[5] << 30 | t[4] >>> 2, rt = t[4] << 30 | t[5] >>> 2, z = t[14] << 6 | t[15] >>> 26, C = t[15] << 6 | t[14] >>> 26, w = t[25] << 11 | t[24] >>> 21, v = t[24] << 11 | t[25] >>> 21, Y = t[34] << 15 | t[35] >>> 17, X = t[35] << 15 | t[34] >>> 17, T = t[45] << 29 | t[44] >>> 3, U = t[44] << 29 | t[45] >>> 3, k = t[6] << 28 | t[7] >>> 4, E = t[7] << 28 | t[6] >>> 4, nt = t[17] << 23 | t[16] >>> 9,it = t[16] << 23 | t[17] >>> 9,q = t[26] << 25 | t[27] >>> 7,W = t[27] << 25 | t[26] >>> 7,S = t[36] << 21 | t[37] >>> 11,M = t[37] << 21 | t[36] >>> 11,Q = t[47] << 24 | t[46] >>> 8,tt = t[46] << 24 | t[47] >>> 8,$ = t[8] << 27 | t[9] >>> 5,J = t[9] << 27 | t[8] >>> 5,I = t[18] << 20 | t[19] >>> 12,B = t[19] << 20 | t[18] >>> 12,ot = t[29] << 7 | t[28] >>> 25,st = t[28] << 7 | t[29] >>> 25,j = t[38] << 8 | t[39] >>> 24,K = t[39] << 8 | t[38] >>> 24,_ = t[48] << 14 | t[49] >>> 18,A = t[49] << 14 | t[48] >>> 18,t[0] = b ^ ~y & w,t[1] = g ^ ~m & v,t[10] = k ^ ~I & x,t[11] = E ^ ~B & R,t[20] = L ^ ~z & q,t[21] = N ^ ~C & W,t[30] = $ ^ ~V & G,t[31] = J ^ ~H & Z,t[40] = et ^ ~nt & ot,t[41] = rt ^ ~it & st,t[2] = y ^ ~w & S,t[3] = m ^ ~v & M,t[12] = I ^ ~x & P,t[13] = B ^ ~R & O,t[22] = z ^ ~q & j,t[23] = C ^ ~W & K,t[32] = V ^ ~G & Y,t[33] = H ^ ~Z & X,t[42] = nt ^ ~ot & at,t[43] = it ^ ~st & ut,t[4] = w ^ ~S & _,t[5] = v ^ ~M & A,t[14] = x ^ ~P & T,t[15] = R ^ ~O & U,t[24] = q ^ ~j & F,t[25] = W ^ ~K & D,t[34] = G ^ ~Y & Q,t[35] = Z ^ ~X & tt,t[44] = ot ^ ~at & ct,t[45] = st ^ ~ut & ft,t[6] = S ^ ~_ & b,t[7] = M ^ ~A & g,t[16] = P ^ ~T & k,t[17] = O ^ ~U & E,t[26] = j ^ ~F & L,t[27] = K ^ ~D & N,t[36] = Y ^ ~Q & $,t[37] = X ^ ~tt & J,t[46] = at ^ ~ct & et,t[47] = ut ^ ~ft & rt,t[8] = _ ^ ~b & y,t[9] = A ^ ~g & m,t[18] = T ^ ~k & I,t[19] = U ^ ~E & B,t[28] = F ^ ~L & z,t[29] = D ^ ~N & C,t[38] = Q ^ ~$ & V,t[39] = tt ^ ~J & H,t[48] = ct ^ ~et & nt,t[49] = ft ^ ~rt & it,t[0] ^= p[n],t[1] ^= p[n + 1]
                };
                if (u) t.exports = E; else {
                    for (B = 0; B < I.length; ++B) s[I[B]] = E[I[B]];
                    c && (void 0 === (n = function () {
                        return E
                    }.call(e, r, e, t)) || (t.exports = n))
                }
            }()
        }, 9746: t => {
            function e(t, e) {
                if (!t) throw new Error(e || "Assertion failed")
            }

            t.exports = e, e.equal = function (t, e, r) {
                if (t != e) throw new Error(r || "Assertion failed: " + t + " != " + e)
            }
        }, 4504: (t, e) => {
            "use strict";
            var r = e;

            function n(t) {
                return 1 === t.length ? "0" + t : t
            }

            function i(t) {
                for (var e = "", r = 0; r < t.length; r++) e += n(t[r].toString(16));
                return e
            }

            r.toArray = function (t, e) {
                if (Array.isArray(t)) return t.slice();
                if (!t) return [];
                var r = [];
                if ("string" != typeof t) {
                    for (var n = 0; n < t.length; n++) r[n] = 0 | t[n];
                    return r
                }
                if ("hex" === e) for ((t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t), n = 0; n < t.length; n += 2) r.push(parseInt(t[n] + t[n + 1], 16)); else for (n = 0; n < t.length; n++) {
                    var i = t.charCodeAt(n), o = i >> 8, s = 255 & i;
                    o ? r.push(o, s) : r.push(s)
                }
                return r
            }, r.zero2 = n, r.toHex = i, r.encode = function (t, e) {
                return "hex" === e ? i(t) : t
            }
        }, 5666: t => {
            var e = function (t) {
                "use strict";
                var e, r = Object.prototype, n = r.hasOwnProperty, i = "function" == typeof Symbol ? Symbol : {},
                    o = i.iterator || "@@iterator", s = i.asyncIterator || "@@asyncIterator",
                    a = i.toStringTag || "@@toStringTag";

                function u(t, e, r) {
                    return Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0}), t[e]
                }

                try {
                    u({}, "")
                } catch (t) {
                    u = function (t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var i = e && e.prototype instanceof g ? e : g, o = Object.create(i.prototype), s = new B(n || []);
                    return o._invoke = function (t, e, r) {
                        var n = h;
                        return function (i, o) {
                            if (n === l) throw new Error("Generator is already running");
                            if (n === p) {
                                if ("throw" === i) throw o;
                                return R()
                            }
                            for (r.method = i, r.arg = o; ;) {
                                var s = r.delegate;
                                if (s) {
                                    var a = k(s, r);
                                    if (a) {
                                        if (a === b) continue;
                                        return a
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                                    if (n === h) throw n = p, r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = l;
                                var u = f(t, e, r);
                                if ("normal" === u.type) {
                                    if (n = r.done ? p : d, u.arg === b) continue;
                                    return {value: u.arg, done: r.done}
                                }
                                "throw" === u.type && (n = p, r.method = "throw", r.arg = u.arg)
                            }
                        }
                    }(t, r, s), o
                }

                function f(t, e, r) {
                    try {
                        return {type: "normal", arg: t.call(e, r)}
                    } catch (t) {
                        return {type: "throw", arg: t}
                    }
                }

                t.wrap = c;
                var h = "suspendedStart", d = "suspendedYield", l = "executing", p = "completed", b = {};

                function g() {
                }

                function y() {
                }

                function m() {
                }

                var w = {};
                u(w, o, (function () {
                    return this
                }));
                var v = Object.getPrototypeOf, S = v && v(v(x([])));
                S && S !== r && n.call(S, o) && (w = S);
                var M = m.prototype = g.prototype = Object.create(w);

                function _(t) {
                    ["next", "throw", "return"].forEach((function (e) {
                        u(t, e, (function (t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function A(t, e) {
                    function r(i, o, s, a) {
                        var u = f(t[i], t, o);
                        if ("throw" !== u.type) {
                            var c = u.arg, h = c.value;
                            return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then((function (t) {
                                r("next", t, s, a)
                            }), (function (t) {
                                r("throw", t, s, a)
                            })) : e.resolve(h).then((function (t) {
                                c.value = t, s(c)
                            }), (function (t) {
                                return r("throw", t, s, a)
                            }))
                        }
                        a(u.arg)
                    }

                    var i;
                    this._invoke = function (t, n) {
                        function o() {
                            return new e((function (e, i) {
                                r(t, n, e, i)
                            }))
                        }

                        return i = i ? i.then(o, o) : o()
                    }
                }

                function k(t, r) {
                    var n = t.iterator[r.method];
                    if (n === e) {
                        if (r.delegate = null, "throw" === r.method) {
                            if (t.iterator.return && (r.method = "return", r.arg = e, k(t, r), "throw" === r.method)) return b;
                            r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return b
                    }
                    var i = f(n, t.iterator, r.arg);
                    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, b;
                    var o = i.arg;
                    return o ? o.done ? (r[t.resultName] = o.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, b) : o : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, b)
                }

                function E(t) {
                    var e = {tryLoc: t[0]};
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function I(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function B(t) {
                    this.tryEntries = [{tryLoc: "root"}], t.forEach(E, this), this.reset(!0)
                }

                function x(t) {
                    if (t) {
                        var r = t[o];
                        if (r) return r.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var i = -1, s = function r() {
                                for (; ++i < t.length;) if (n.call(t, i)) return r.value = t[i], r.done = !1, r;
                                return r.value = e, r.done = !0, r
                            };
                            return s.next = s
                        }
                    }
                    return {next: R}
                }

                function R() {
                    return {value: e, done: !0}
                }

                return y.prototype = m, u(M, "constructor", m), u(m, "constructor", y), y.displayName = u(m, a, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m, u(t, a, "GeneratorFunction")), t.prototype = Object.create(M), t
                }, t.awrap = function (t) {
                    return {__await: t}
                }, _(A.prototype), u(A.prototype, s, (function () {
                    return this
                })), t.AsyncIterator = A, t.async = function (e, r, n, i, o) {
                    void 0 === o && (o = Promise);
                    var s = new A(c(e, r, n, i), o);
                    return t.isGeneratorFunction(r) ? s : s.next().then((function (t) {
                        return t.done ? t.value : s.next()
                    }))
                }, _(M), u(M, a, "Generator"), u(M, o, (function () {
                    return this
                })), u(M, "toString", (function () {
                    return "[object Generator]"
                })), t.keys = function (t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(), function r() {
                        for (; e.length;) {
                            var n = e.pop();
                            if (n in t) return r.value = n, r.done = !1, r
                        }
                        return r.done = !0, r
                    }
                }, t.values = x, B.prototype = {
                    constructor: B, reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(I), !t) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                    }, stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    }, dispatchException: function (t) {
                        if (this.done) throw t;
                        var r = this;

                        function i(n, i) {
                            return a.type = "throw", a.arg = t, r.next = n, i && (r.method = "next", r.arg = e), !!i
                        }

                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var s = this.tryEntries[o], a = s.completion;
                            if ("root" === s.tryLoc) return i("end");
                            if (s.tryLoc <= this.prev) {
                                var u = n.call(s, "catchLoc"), c = n.call(s, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < s.catchLoc) return i(s.catchLoc, !0);
                                    if (this.prev < s.finallyLoc) return i(s.finallyLoc)
                                } else if (u) {
                                    if (this.prev < s.catchLoc) return i(s.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < s.finallyLoc) return i(s.finallyLoc)
                                }
                            }
                        }
                    }, abrupt: function (t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r];
                            if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                        var s = o ? o.completion : {};
                        return s.type = t, s.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, b) : this.complete(s)
                    }, complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), b
                    }, finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), I(r), b
                        }
                    }, catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var i = n.arg;
                                    I(r)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    }, delegateYield: function (t, r, n) {
                        return this.delegate = {
                            iterator: x(t),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = e), b
                    }
                }, t
            }(t.exports);
            try {
                regeneratorRuntime = e
            } catch (t) {
                "object" == typeof globalThis ? globalThis.regeneratorRuntime = e : Function("r", "regeneratorRuntime = r")(e)
            }
        }, 3937: (t, e, r) => {
            "use strict";
            var n = r(5318);
            e.K = void 0;
            var i = n(r(3913)), o = n(r(4575)), s = n(r(2205)), a = n(r(8585)), u = n(r(9754)), c = n(r(9062));
            var f = function (t) {
                (0, s.default)(f, t);
                var e, r, n = (e = f, r = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                        }))), !0
                    } catch (t) {
                        return !1
                    }
                }(), function () {
                    var t, n = (0, u.default)(e);
                    if (r) {
                        var i = (0, u.default)(this).constructor;
                        t = Reflect.construct(n, arguments, i)
                    } else t = n.apply(this, arguments);
                    return (0, a.default)(this, t)
                });

                function f() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "glamourous-shop.000webhostapp.com",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = e.autoconnect,
                        i = void 0 === r || r, s = e.reconnect, a = void 0 === s || s, u = e.reconnect_interval,
                        h = void 0 === u ? 1e3 : u, d = e.max_reconnects, l = void 0 === d ? 5 : d,
                        p = arguments.length > 2 ? arguments[2] : void 0;
                    return (0, o.default)(this, f), n.call(this, c.default, t, {
                        autoconnect: i,
                        reconnect: a,
                        reconnect_interval: h,
                        max_reconnects: l
                    }, p)
                }

                return (0, i.default)(f)
            }(n(r(6855)).default);
            e.K = f
        }, 6855: (t, e, r) => {
            "use strict";
            var n = r(4976).Buffer, i = r(5318);
            Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
            var o = i(r(7757)), s = i(r(8926)), a = i(r(8)), u = i(r(4575)), c = i(r(3913)), f = i(r(2205)),
                h = i(r(8585)), d = i(r(9754)), l = r(6729);
            var p = function (t, e) {
                var r = {};
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (n = Object.getOwnPropertySymbols(t); i < n.length; i++) e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]])
                }
                return r
            }, b = function (t) {
                (0, f.default)(m, t);
                var e, r, i, l, b, g, y = (b = m, g = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                        }))), !0
                    } catch (t) {
                        return !1
                    }
                }(), function () {
                    var t, e = (0, d.default)(b);
                    if (g) {
                        var r = (0, d.default)(this).constructor;
                        t = Reflect.construct(e, arguments, r)
                    } else t = e.apply(this, arguments);
                    return (0, h.default)(this, t)
                });

                function m(t) {
                    var e,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "glamourous-shop.000webhostapp.com",
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = arguments.length > 3 ? arguments[3] : void 0;
                    (0, u.default)(this, m);
                    var o = n.autoconnect, s = void 0 === o || o, a = n.reconnect, c = void 0 === a || a,
                        f = n.reconnect_interval, h = void 0 === f ? 1e3 : f, d = n.max_reconnects,
                        l = void 0 === d ? 5 : d,
                        b = p(n, ["autoconnect", "reconnect", "reconnect_interval", "max_reconnects"]);
                    return (e = y.call(this)).webSocketFactory = t, e.queue = {}, e.rpc_id = 0, e.address = r, e.autoconnect = s, e.ready = !1, e.reconnect = c, e.reconnect_interval = h, e.max_reconnects = l, e.rest_options = b, e.current_reconnects = 0, e.generate_request_id = i || function () {
                        return ++e.rpc_id
                    }, e.autoconnect && e._connect(e.address, Object.assign({
                        autoconnect: e.autoconnect,
                        reconnect: e.reconnect,
                        reconnect_interval: e.reconnect_interval,
                        max_reconnects: e.max_reconnects
                    }, e.rest_options)), e
                }

                return (0, c.default)(m, [{
                    key: "connect", value: function () {
                        this.socket || this._connect(this.address, Object.assign({
                            autoconnect: this.autoconnect,
                            reconnect: this.reconnect,
                            reconnect_interval: this.reconnect_interval,
                            max_reconnects: this.max_reconnects
                        }, this.rest_options))
                    }
                }, {
                    key: "call", value: function (t, e, r, n) {
                        var i = this;
                        return n || "object" !== (0, a.default)(r) || (n = r, r = null), new Promise((function (o, s) {
                            if (!i.ready) return s(new Error("socket not ready"));
                            var a = i.generate_request_id(t, e),
                                u = {jsonrpc: "2.0", method: t, params: e || null, id: a};
                            i.socket.send(JSON.stringify(u), n, (function (t) {
                                if (t) return s(t);
                                i.queue[a] = {promise: [o, s]}, r && (i.queue[a].timeout = setTimeout((function () {
                                    delete i.queue[a], s(new Error("reply timeout"))
                                }), r))
                            }))
                        }))
                    }
                }, {
                    key: "login", value: (l = (0, s.default)(o.default.mark((function t(e) {
                        var r;
                        return o.default.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.call("rpc.login", e);
                                case 2:
                                    if (r = t.sent) {
                                        t.next = 5;
                                        break
                                    }
                                    throw new Error("authentication failed");
                                case 5:
                                    return t.abrupt("return", r);
                                case 6:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function (t) {
                        return l.apply(this, arguments)
                    })
                }, {
                    key: "listMethods", value: (i = (0, s.default)(o.default.mark((function t() {
                        return o.default.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.call("__listMethods");
                                case 2:
                                    return t.abrupt("return", t.sent);
                                case 3:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function () {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "notify", value: function (t, e) {
                        var r = this;
                        return new Promise((function (n, i) {
                            if (!r.ready) return i(new Error("socket not ready"));
                            var o = {jsonrpc: "2.0", method: t, params: e || null};
                            r.socket.send(JSON.stringify(o), (function (t) {
                                if (t) return i(t);
                                n()
                            }))
                        }))
                    }
                }, {
                    key: "subscribe", value: (r = (0, s.default)(o.default.mark((function t(e) {
                        var r;
                        return o.default.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return "string" == typeof e && (e = [e]), t.next = 3, this.call("rpc.on", e);
                                case 3:
                                    if (r = t.sent, "string" != typeof e || "ok" === r[e]) {
                                        t.next = 6;
                                        break
                                    }
                                    throw new Error("Failed subscribing to an event '" + e + "' with: " + r[e]);
                                case 6:
                                    return t.abrupt("return", r);
                                case 7:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function (t) {
                        return r.apply(this, arguments)
                    })
                }, {
                    key: "unsubscribe", value: (e = (0, s.default)(o.default.mark((function t(e) {
                        var r;
                        return o.default.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return "string" == typeof e && (e = [e]), t.next = 3, this.call("rpc.off", e);
                                case 3:
                                    if (r = t.sent, "string" != typeof e || "ok" === r[e]) {
                                        t.next = 6;
                                        break
                                    }
                                    throw new Error("Failed unsubscribing from an event with: " + r);
                                case 6:
                                    return t.abrupt("return", r);
                                case 7:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function (t) {
                        return e.apply(this, arguments)
                    })
                }, {
                    key: "close", value: function (t, e) {
                        this.socket.close(t || 1e3, e)
                    }
                }, {
                    key: "_connect", value: function (t, e) {
                        var r = this;
                        this.socket = this.webSocketFactory(t, e), this.socket.addEventListener("open", (function () {
                            r.ready = !0, r.emit("open"), r.current_reconnects = 0
                        })), this.socket.addEventListener("message", (function (t) {
                            var e = t.data;
                            e instanceof ArrayBuffer && (e = n.from(e).toString());
                            try {
                                e = JSON.parse(e)
                            } catch (t) {
                                return
                            }
                            if (e.notification && r.listeners(e.notification).length) {
                                if (!Object.keys(e.params).length) return r.emit(e.notification);
                                var i = [e.notification];
                                if (e.params.constructor === Object) i.push(e.params); else for (var o = 0; o < e.params.length; o++) i.push(e.params[o]);
                                return Promise.resolve().then((function () {
                                    r.emit.apply(r, i)
                                }))
                            }
                            if (!r.queue[e.id]) return e.method && e.params ? Promise.resolve().then((function () {
                                r.emit(e.method, e.params)
                            })) : void 0;
                            "error" in e == "result" in e && r.queue[e.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.')), r.queue[e.id].timeout && clearTimeout(r.queue[e.id].timeout), e.error ? r.queue[e.id].promise[1](e.error) : r.queue[e.id].promise[0](e.result), delete r.queue[e.id]
                        })), this.socket.addEventListener("error", (function (t) {
                            return r.emit("error", t)
                        })), this.socket.addEventListener("close", (function (n) {
                            var i = n.code, o = n.reason;
                            r.ready && setTimeout((function () {
                                return r.emit("close", i, o)
                            }), 0), r.ready = !1, r.socket = void 0, 1e3 !== i && (r.current_reconnects++, r.reconnect && (r.max_reconnects > r.current_reconnects || 0 === r.max_reconnects) && setTimeout((function () {
                                return r._connect(t, e)
                            }), r.reconnect_interval))
                        }))
                    }
                }]), m
            }(l.EventEmitter);
            e.default = b
        }, 9062: (t, e, r) => {
            "use strict";
            var n = r(5318);
            Object.defineProperty(e, "__esModule", {value: !0}), e.default = function (t, e) {
                return new c(t, e)
            };
            var i = n(r(4575)), o = n(r(3913)), s = n(r(2205)), a = n(r(8585)), u = n(r(9754));
            var c = function (t) {
                (0, s.default)(c, t);
                var e, r, n = (e = c, r = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                        }))), !0
                    } catch (t) {
                        return !1
                    }
                }(), function () {
                    var t, n = (0, u.default)(e);
                    if (r) {
                        var i = (0, u.default)(this).constructor;
                        t = Reflect.construct(n, arguments, i)
                    } else t = n.apply(this, arguments);
                    return (0, a.default)(this, t)
                });

                function c(t, e, r) {
                    var o;
                    return (0, i.default)(this, c), (o = n.call(this)).socket = new window.WebSocket(t, r), o.socket.onopen = function () {
                        return o.emit("open")
                    }, o.socket.onmessage = function (t) {
                        return o.emit("message", t.data)
                    }, o.socket.onerror = function (t) {
                        return o.emit("error", t)
                    }, o.socket.onclose = function (t) {
                        o.emit("close", t.code, t.reason)
                    }, o
                }

                return (0, o.default)(c, [{
                    key: "send", value: function (t, e, r) {
                        var n = r || e;
                        try {
                            this.socket.send(t), n()
                        } catch (t) {
                            n(t)
                        }
                    }
                }, {
                    key: "close", value: function (t, e) {
                        this.socket.close(t, e)
                    }
                }, {
                    key: "addEventListener", value: function (t, e, r) {
                        this.socket.addEventListener(t, e, r)
                    }
                }]), c
            }(r(6729).EventEmitter)
        }, 9509: (t, e, r) => {
            var n = r(4976), i = n.Buffer;

            function o(t, e) {
                for (var r in t) e[r] = t[r]
            }

            function s(t, e, r) {
                return i(t, e, r)
            }

            i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = n : (o(n, e), e.Buffer = s), s.prototype = Object.create(i.prototype), o(i, s), s.from = function (t, e, r) {
                if ("number" == typeof t) throw new TypeError("Argument must not be a number");
                return i(t, e, r)
            }, s.alloc = function (t, e, r) {
                if ("number" != typeof t) throw new TypeError("Argument must be a number");
                var n = i(t);
                return void 0 !== e ? "string" == typeof r ? n.fill(e, r) : n.fill(e) : n.fill(0), n
            }, s.allocUnsafe = function (t) {
                if ("number" != typeof t) throw new TypeError("Argument must be a number");
                return i(t)
            }, s.allocUnsafeSlow = function (t) {
                if ("number" != typeof t) throw new TypeError("Argument must be a number");
                return n.SlowBuffer(t)
            }
        }, 7221: (t, e, r) => {
            t.exports = r(9119)(r(8573))
        }, 8573: (t, e, r) => {
            const n = new (0, r(6266).ec)("secp256k1"), i = n.curve, o = i.n.constructor;

            function s(t) {
                const e = t[0];
                switch (e) {
                    case 2:
                    case 3:
                        return 33 !== t.length ? null : function (t, e) {
                            let r = new o(e);
                            if (r.cmp(i.p) >= 0) return null;
                            r = r.toRed(i.red);
                            let s = r.redSqr().redIMul(r).redIAdd(i.b).redSqrt();
                            return 3 === t !== s.isOdd() && (s = s.redNeg()), n.keyPair({pub: {x: r, y: s}})
                        }(e, t.subarray(1, 33));
                    case 4:
                    case 6:
                    case 7:
                        return 65 !== t.length ? null : function (t, e, r) {
                            let s = new o(e), a = new o(r);
                            if (s.cmp(i.p) >= 0 || a.cmp(i.p) >= 0) return null;
                            if (s = s.toRed(i.red), a = a.toRed(i.red), (6 === t || 7 === t) && a.isOdd() !== (7 === t)) return null;
                            const u = s.redSqr().redIMul(s);
                            return a.redSqr().redISub(u.redIAdd(i.b)).isZero() ? n.keyPair({pub: {x: s, y: a}}) : null
                        }(e, t.subarray(1, 33), t.subarray(33, 65));
                    default:
                        return null
                }
            }

            function a(t, e) {
                const r = e.encode(null, 33 === t.length);
                for (let e = 0; e < t.length; ++e) t[e] = r[e]
            }

            t.exports = {
                contextRandomize: () => 0, privateKeyVerify(t) {
                    const e = new o(t);
                    return e.cmp(i.n) < 0 && !e.isZero() ? 0 : 1
                }, privateKeyNegate(t) {
                    const e = new o(t), r = i.n.sub(e).umod(i.n).toArrayLike(Uint8Array, "be", 32);
                    return t.set(r), 0
                }, privateKeyTweakAdd(t, e) {
                    const r = new o(e);
                    if (r.cmp(i.n) >= 0) return 1;
                    if (r.iadd(new o(t)), r.cmp(i.n) >= 0 && r.isub(i.n), r.isZero()) return 1;
                    const n = r.toArrayLike(Uint8Array, "be", 32);
                    return t.set(n), 0
                }, privateKeyTweakMul(t, e) {
                    let r = new o(e);
                    if (r.cmp(i.n) >= 0 || r.isZero()) return 1;
                    r.imul(new o(t)), r.cmp(i.n) >= 0 && (r = r.umod(i.n));
                    const n = r.toArrayLike(Uint8Array, "be", 32);
                    return t.set(n), 0
                }, publicKeyVerify: t => null === s(t) ? 1 : 0, publicKeyCreate(t, e) {
                    const r = new o(e);
                    return r.cmp(i.n) >= 0 || r.isZero() ? 1 : (a(t, n.keyFromPrivate(e).getPublic()), 0)
                }, publicKeyConvert(t, e) {
                    const r = s(e);
                    return null === r ? 1 : (a(t, r.getPublic()), 0)
                }, publicKeyNegate(t, e) {
                    const r = s(e);
                    if (null === r) return 1;
                    const n = r.getPublic();
                    return n.y = n.y.redNeg(), a(t, n), 0
                }, publicKeyCombine(t, e) {
                    const r = new Array(e.length);
                    for (let t = 0; t < e.length; ++t) if (r[t] = s(e[t]), null === r[t]) return 1;
                    let n = r[0].getPublic();
                    for (let t = 1; t < r.length; ++t) n = n.add(r[t].pub);
                    return n.isInfinity() ? 2 : (a(t, n), 0)
                }, publicKeyTweakAdd(t, e, r) {
                    const n = s(e);
                    if (null === n) return 1;
                    if ((r = new o(r)).cmp(i.n) >= 0) return 2;
                    const u = n.getPublic().add(i.g.mul(r));
                    return u.isInfinity() ? 2 : (a(t, u), 0)
                }, publicKeyTweakMul(t, e, r) {
                    const n = s(e);
                    return null === n ? 1 : (r = new o(r)).cmp(i.n) >= 0 || r.isZero() ? 2 : (a(t, n.getPublic().mul(r)), 0)
                }, signatureNormalize(t) {
                    const e = new o(t.subarray(0, 32)), r = new o(t.subarray(32, 64));
                    return e.cmp(i.n) >= 0 || r.cmp(i.n) >= 0 ? 1 : (1 === r.cmp(n.nh) && t.set(i.n.sub(r).toArrayLike(Uint8Array, "be", 32), 32), 0)
                }, signatureExport(t, e) {
                    const r = e.subarray(0, 32), n = e.subarray(32, 64);
                    if (new o(r).cmp(i.n) >= 0) return 1;
                    if (new o(n).cmp(i.n) >= 0) return 1;
                    const {output: s} = t;
                    let a = s.subarray(4, 37);
                    a[0] = 0, a.set(r, 1);
                    let u = 33, c = 0;
                    for (; u > 1 && 0 === a[c] && !(128 & a[c + 1]); --u, ++c) ;
                    if (a = a.subarray(c), 128 & a[0]) return 1;
                    if (u > 1 && 0 === a[0] && !(128 & a[1])) return 1;
                    let f = s.subarray(39, 72);
                    f[0] = 0, f.set(n, 1);
                    let h = 33, d = 0;
                    for (; h > 1 && 0 === f[d] && !(128 & f[d + 1]); --h, ++d) ;
                    return f = f.subarray(d), 128 & f[0] || h > 1 && 0 === f[0] && !(128 & f[1]) ? 1 : (t.outputlen = 6 + u + h, s[0] = 48, s[1] = t.outputlen - 2, s[2] = 2, s[3] = a.length, s.set(a, 4), s[4 + u] = 2, s[5 + u] = f.length, s.set(f, 6 + u), 0)
                }, signatureImport(t, e) {
                    if (e.length < 8) return 1;
                    if (e.length > 72) return 1;
                    if (48 !== e[0]) return 1;
                    if (e[1] !== e.length - 2) return 1;
                    if (2 !== e[2]) return 1;
                    const r = e[3];
                    if (0 === r) return 1;
                    if (5 + r >= e.length) return 1;
                    if (2 !== e[4 + r]) return 1;
                    const n = e[5 + r];
                    if (0 === n) return 1;
                    if (6 + r + n !== e.length) return 1;
                    if (128 & e[4]) return 1;
                    if (r > 1 && 0 === e[4] && !(128 & e[5])) return 1;
                    if (128 & e[r + 6]) return 1;
                    if (n > 1 && 0 === e[r + 6] && !(128 & e[r + 7])) return 1;
                    let s = e.subarray(4, 4 + r);
                    if (33 === s.length && 0 === s[0] && (s = s.subarray(1)), s.length > 32) return 1;
                    let a = e.subarray(6 + r);
                    if (33 === a.length && 0 === a[0] && (a = a.slice(1)), a.length > 32) throw new Error("S length is too long");
                    let u = new o(s);
                    u.cmp(i.n) >= 0 && (u = new o(0));
                    let c = new o(e.subarray(6 + r));
                    return c.cmp(i.n) >= 0 && (c = new o(0)), t.set(u.toArrayLike(Uint8Array, "be", 32), 0), t.set(c.toArrayLike(Uint8Array, "be", 32), 32), 0
                }, ecdsaSign(t, e, r, s, a) {
                    if (a) {
                        const t = a;
                        a = n => {
                            const i = t(e, r, null, s, n);
                            if (!(i instanceof Uint8Array && 32 === i.length)) throw new Error("This is the way");
                            return new o(i)
                        }
                    }
                    const u = new o(r);
                    if (u.cmp(i.n) >= 0 || u.isZero()) return 1;
                    let c;
                    try {
                        c = n.sign(e, r, {canonical: !0, k: a, pers: s})
                    } catch (t) {
                        return 1
                    }
                    return t.signature.set(c.r.toArrayLike(Uint8Array, "be", 32), 0), t.signature.set(c.s.toArrayLike(Uint8Array, "be", 32), 32), t.recid = c.recoveryParam, 0
                }, ecdsaVerify(t, e, r) {
                    const a = {r: t.subarray(0, 32), s: t.subarray(32, 64)}, u = new o(a.r), c = new o(a.s);
                    if (u.cmp(i.n) >= 0 || c.cmp(i.n) >= 0) return 1;
                    if (1 === c.cmp(n.nh) || u.isZero() || c.isZero()) return 3;
                    const f = s(r);
                    if (null === f) return 2;
                    const h = f.getPublic();
                    return n.verify(e, a, h) ? 0 : 3
                }, ecdsaRecover(t, e, r, s) {
                    const u = {r: e.slice(0, 32), s: e.slice(32, 64)}, c = new o(u.r), f = new o(u.s);
                    if (c.cmp(i.n) >= 0 || f.cmp(i.n) >= 0) return 1;
                    if (c.isZero() || f.isZero()) return 2;
                    let h;
                    try {
                        h = n.recoverPubKey(s, u, r)
                    } catch (t) {
                        return 2
                    }
                    return a(t, h), 0
                }, ecdh(t, e, r, a, u, c, f) {
                    const h = s(e);
                    if (null === h) return 1;
                    const d = new o(r);
                    if (d.cmp(i.n) >= 0 || d.isZero()) return 2;
                    const l = h.getPublic().mul(d);
                    if (void 0 === u) {
                        const e = l.encode(null, !0), r = n.hash().update(e).digest();
                        for (let e = 0; e < 32; ++e) t[e] = r[e]
                    } else {
                        c || (c = new Uint8Array(32));
                        const e = l.getX().toArray("be", 32);
                        for (let t = 0; t < 32; ++t) c[t] = e[t];
                        f || (f = new Uint8Array(32));
                        const r = l.getY().toArray("be", 32);
                        for (let t = 0; t < 32; ++t) f[t] = r[t];
                        const n = u(c, f, a);
                        if (!(n instanceof Uint8Array && n.length === t.length)) return 2;
                        t.set(n)
                    }
                    return 0
                }
            }
        }, 9119: t => {
            const e = "Impossible case. Please create issue.",
                r = "The tweak was out of range or the resulted private key is invalid",
                n = "The tweak was out of range or equal to zero", i = "Public Key could not be parsed",
                o = "Public Key serialization error", s = "Signature could not be parsed";

            function a(t, e) {
                if (!t) throw new Error(e)
            }

            function u(t, e, r) {
                if (a(e instanceof Uint8Array, `Expected ${t} to be an Uint8Array`), void 0 !== r) if (Array.isArray(r)) {
                    const n = `Expected ${t} to be an Uint8Array with length [${r.join(", ")}]`;
                    a(r.includes(e.length), n)
                } else {
                    const n = `Expected ${t} to be an Uint8Array with length ${r}`;
                    a(e.length === r, n)
                }
            }

            function c(t) {
                a("Boolean" === h(t), "Expected compressed to be a Boolean")
            }

            function f(t = (t => new Uint8Array(t)), e) {
                return "function" == typeof t && (t = t(e)), u("output", t, e), t
            }

            function h(t) {
                return Object.prototype.toString.call(t).slice(8, -1)
            }

            t.exports = t => ({
                contextRandomize(e) {
                    if (a(null === e || e instanceof Uint8Array, "Expected seed to be an Uint8Array or null"), null !== e && u("seed", e, 32), 1 === t.contextRandomize(e)) throw new Error("Unknow error on context randomization")
                },
                privateKeyVerify: e => (u("private key", e, 32), 0 === t.privateKeyVerify(e)),
                privateKeyNegate(r) {
                    switch (u("private key", r, 32), t.privateKeyNegate(r)) {
                        case 0:
                            return r;
                        case 1:
                            throw new Error(e)
                    }
                },
                privateKeyTweakAdd(e, n) {
                    switch (u("private key", e, 32), u("tweak", n, 32), t.privateKeyTweakAdd(e, n)) {
                        case 0:
                            return e;
                        case 1:
                            throw new Error(r)
                    }
                },
                privateKeyTweakMul(e, r) {
                    switch (u("private key", e, 32), u("tweak", r, 32), t.privateKeyTweakMul(e, r)) {
                        case 0:
                            return e;
                        case 1:
                            throw new Error(n)
                    }
                },
                publicKeyVerify: e => (u("public key", e, [33, 65]), 0 === t.publicKeyVerify(e)),
                publicKeyCreate(e, r = !0, n) {
                    switch (u("private key", e, 32), c(r), n = f(n, r ? 33 : 65), t.publicKeyCreate(n, e)) {
                        case 0:
                            return n;
                        case 1:
                            throw new Error("Private Key is invalid");
                        case 2:
                            throw new Error(o)
                    }
                },
                publicKeyConvert(e, r = !0, n) {
                    switch (u("public key", e, [33, 65]), c(r), n = f(n, r ? 33 : 65), t.publicKeyConvert(n, e)) {
                        case 0:
                            return n;
                        case 1:
                            throw new Error(i);
                        case 2:
                            throw new Error(o)
                    }
                },
                publicKeyNegate(r, n = !0, s) {
                    switch (u("public key", r, [33, 65]), c(n), s = f(s, n ? 33 : 65), t.publicKeyNegate(s, r)) {
                        case 0:
                            return s;
                        case 1:
                            throw new Error(i);
                        case 2:
                            throw new Error(e);
                        case 3:
                            throw new Error(o)
                    }
                },
                publicKeyCombine(e, r = !0, n) {
                    a(Array.isArray(e), "Expected public keys to be an Array"), a(e.length > 0, "Expected public keys array will have more than zero items");
                    for (const t of e) u("public key", t, [33, 65]);
                    switch (c(r), n = f(n, r ? 33 : 65), t.publicKeyCombine(n, e)) {
                        case 0:
                            return n;
                        case 1:
                            throw new Error(i);
                        case 2:
                            throw new Error("The sum of the public keys is not valid");
                        case 3:
                            throw new Error(o)
                    }
                },
                publicKeyTweakAdd(e, n, o = !0, s) {
                    switch (u("public key", e, [33, 65]), u("tweak", n, 32), c(o), s = f(s, o ? 33 : 65), t.publicKeyTweakAdd(s, e, n)) {
                        case 0:
                            return s;
                        case 1:
                            throw new Error(i);
                        case 2:
                            throw new Error(r)
                    }
                },
                publicKeyTweakMul(e, r, o = !0, s) {
                    switch (u("public key", e, [33, 65]), u("tweak", r, 32), c(o), s = f(s, o ? 33 : 65), t.publicKeyTweakMul(s, e, r)) {
                        case 0:
                            return s;
                        case 1:
                            throw new Error(i);
                        case 2:
                            throw new Error(n)
                    }
                },
                signatureNormalize(e) {
                    switch (u("signature", e, 64), t.signatureNormalize(e)) {
                        case 0:
                            return e;
                        case 1:
                            throw new Error(s)
                    }
                },
                signatureExport(r, n) {
                    u("signature", r, 64);
                    const i = {output: n = f(n, 72), outputlen: 72};
                    switch (t.signatureExport(i, r)) {
                        case 0:
                            return n.slice(0, i.outputlen);
                        case 1:
                            throw new Error(s);
                        case 2:
                            throw new Error(e)
                    }
                },
                signatureImport(r, n) {
                    switch (u("signature", r), n = f(n, 64), t.signatureImport(n, r)) {
                        case 0:
                            return n;
                        case 1:
                            throw new Error(s);
                        case 2:
                            throw new Error(e)
                    }
                },
                ecdsaSign(r, n, i = {}, o) {
                    u("message", r, 32), u("private key", n, 32), a("Object" === h(i), "Expected options to be an Object"), void 0 !== i.data && u("options.data", i.data), void 0 !== i.noncefn && a("Function" === h(i.noncefn), "Expected options.noncefn to be a Function");
                    const s = {signature: o = f(o, 64), recid: null};
                    switch (t.ecdsaSign(s, r, n, i.data, i.noncefn)) {
                        case 0:
                            return s;
                        case 1:
                            throw new Error("The nonce generation function failed, or the private key was invalid");
                        case 2:
                            throw new Error(e)
                    }
                },
                ecdsaVerify(e, r, n) {
                    switch (u("signature", e, 64), u("message", r, 32), u("public key", n, [33, 65]), t.ecdsaVerify(e, r, n)) {
                        case 0:
                            return !0;
                        case 3:
                            return !1;
                        case 1:
                            throw new Error(s);
                        case 2:
                            throw new Error(i)
                    }
                },
                ecdsaRecover(r, n, i, o = !0, d) {
                    switch (u("signature", r, 64), a("Number" === h(n) && n >= 0 && n <= 3, "Expected recovery id to be a Number within interval [0, 3]"), u("message", i, 32), c(o), d = f(d, o ? 33 : 65), t.ecdsaRecover(d, r, n, i)) {
                        case 0:
                            return d;
                        case 1:
                            throw new Error(s);
                        case 2:
                            throw new Error("Public key could not be recover");
                        case 3:
                            throw new Error(e)
                    }
                },
                ecdh(e, r, n = {}, o) {
                    switch (u("public key", e, [33, 65]), u("private key", r, 32), a("Object" === h(n), "Expected options to be an Object"), void 0 !== n.data && u("options.data", n.data), void 0 !== n.hashfn ? (a("Function" === h(n.hashfn), "Expected options.hashfn to be a Function"), void 0 !== n.xbuf && u("options.xbuf", n.xbuf, 32), void 0 !== n.ybuf && u("options.ybuf", n.ybuf, 32), u("output", o)) : o = f(o, 32), t.ecdh(o, e, r, n.data, n.hashfn, n.xbuf, n.ybuf)) {
                        case 0:
                            return o;
                        case 1:
                            throw new Error(i);
                        case 2:
                            throw new Error("Scalar was invalid (zero or overflow)")
                    }
                }
            })
        }, 1379: (t, e) => {
            "use strict";

            function r(t, e, r) {
                return e <= t && t <= r
            }

            function n(t) {
                if (void 0 === t) return {};
                if (t === Object(t)) return t;
                throw TypeError("Could not convert argument to dictionary")
            }

            function i(t) {
                this.tokens = [].slice.call(t)
            }

            i.prototype = {
                endOfStream: function () {
                    return !this.tokens.length
                }, read: function () {
                    return this.tokens.length ? this.tokens.shift() : -1
                }, prepend: function (t) {
                    if (Array.isArray(t)) for (var e = t; e.length;) this.tokens.unshift(e.pop()); else this.tokens.unshift(t)
                }, push: function (t) {
                    if (Array.isArray(t)) for (var e = t; e.length;) this.tokens.push(e.shift()); else this.tokens.push(t)
                }
            };
            var o = -1;

            function s(t, e) {
                if (t) throw TypeError("Decoder error");
                return e || 65533
            }

            var a = "utf-8";

            function u(t, e) {
                if (!(this instanceof u)) return new u(t, e);
                if ((t = void 0 !== t ? String(t).toLowerCase() : a) !== a) throw new Error("Encoding not supported. Only utf-8 is supported");
                e = n(e), this._streaming = !1, this._BOMseen = !1, this._decoder = null, this._fatal = Boolean(e.fatal), this._ignoreBOM = Boolean(e.ignoreBOM), Object.defineProperty(this, "encoding", {value: "utf-8"}), Object.defineProperty(this, "fatal", {value: this._fatal}), Object.defineProperty(this, "ignoreBOM", {value: this._ignoreBOM})
            }

            function c(t, e) {
                if (!(this instanceof c)) return new c(t, e);
                if ((t = void 0 !== t ? String(t).toLowerCase() : a) !== a) throw new Error("Encoding not supported. Only utf-8 is supported");
                e = n(e), this._streaming = !1, this._encoder = null, this._options = {fatal: Boolean(e.fatal)}, Object.defineProperty(this, "encoding", {value: "utf-8"})
            }

            function f(t) {
                var e = t.fatal, n = 0, i = 0, a = 0, u = 128, c = 191;
                this.handler = function (t, f) {
                    if (-1 === f && 0 !== a) return a = 0, s(e);
                    if (-1 === f) return o;
                    if (0 === a) {
                        if (r(f, 0, 127)) return f;
                        if (r(f, 194, 223)) a = 1, n = f - 192; else if (r(f, 224, 239)) 224 === f && (u = 160), 237 === f && (c = 159), a = 2, n = f - 224; else {
                            if (!r(f, 240, 244)) return s(e);
                            240 === f && (u = 144), 244 === f && (c = 143), a = 3, n = f - 240
                        }
                        return n <<= 6 * a, null
                    }
                    if (!r(f, u, c)) return n = a = i = 0, u = 128, c = 191, t.prepend(f), s(e);
                    if (u = 128, c = 191, n += f - 128 << 6 * (a - (i += 1)), i !== a) return null;
                    var h = n;
                    return n = a = i = 0, h
                }
            }

            function h(t) {
                t.fatal, this.handler = function (t, e) {
                    if (-1 === e) return o;
                    if (r(e, 0, 127)) return e;
                    var n, i;
                    r(e, 128, 2047) ? (n = 1, i = 192) : r(e, 2048, 65535) ? (n = 2, i = 224) : r(e, 65536, 1114111) && (n = 3, i = 240);
                    for (var s = [(e >> 6 * n) + i]; n > 0;) {
                        var a = e >> 6 * (n - 1);
                        s.push(128 | 63 & a), n -= 1
                    }
                    return s
                }
            }

            u.prototype = {
                decode: function (t, e) {
                    var r;
                    r = "object" == typeof t && t instanceof ArrayBuffer ? new Uint8Array(t) : "object" == typeof t && "buffer" in t && t.buffer instanceof ArrayBuffer ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : new Uint8Array(0), e = n(e), this._streaming || (this._decoder = new f({fatal: this._fatal}), this._BOMseen = !1), this._streaming = Boolean(e.stream);
                    for (var s, a = new i(r), u = []; !a.endOfStream() && (s = this._decoder.handler(a, a.read())) !== o;) null !== s && (Array.isArray(s) ? u.push.apply(u, s) : u.push(s));
                    if (!this._streaming) {
                        do {
                            if ((s = this._decoder.handler(a, a.read())) === o) break;
                            null !== s && (Array.isArray(s) ? u.push.apply(u, s) : u.push(s))
                        } while (!a.endOfStream());
                        this._decoder = null
                    }
                    return u.length && (-1 === ["utf-8"].indexOf(this.encoding) || this._ignoreBOM || this._BOMseen || (65279 === u[0] ? (this._BOMseen = !0, u.shift()) : this._BOMseen = !0)), function (t) {
                        for (var e = "", r = 0; r < t.length; ++r) {
                            var n = t[r];
                            n <= 65535 ? e += String.fromCharCode(n) : (n -= 65536, e += String.fromCharCode(55296 + (n >> 10), 56320 + (1023 & n)))
                        }
                        return e
                    }(u)
                }
            }, c.prototype = {
                encode: function (t, e) {
                    t = t ? String(t) : "", e = n(e), this._streaming || (this._encoder = new h(this._options)), this._streaming = Boolean(e.stream);
                    for (var r, s = [], a = new i(function (t) {
                        for (var e = String(t), r = e.length, n = 0, i = []; n < r;) {
                            var o = e.charCodeAt(n);
                            if (o < 55296 || o > 57343) i.push(o); else if (56320 <= o && o <= 57343) i.push(65533); else if (55296 <= o && o <= 56319) if (n === r - 1) i.push(65533); else {
                                var s = t.charCodeAt(n + 1);
                                if (56320 <= s && s <= 57343) {
                                    var a = 1023 & o, u = 1023 & s;
                                    i.push(65536 + (a << 10) + u), n += 1
                                } else i.push(65533)
                            }
                            n += 1
                        }
                        return i
                    }(t)); !a.endOfStream() && (r = this._encoder.handler(a, a.read())) !== o;) Array.isArray(r) ? s.push.apply(s, r) : s.push(r);
                    if (!this._streaming) {
                        for (; (r = this._encoder.handler(a, a.read())) !== o;) Array.isArray(r) ? s.push.apply(s, r) : s.push(r);
                        this._encoder = null
                    }
                    return new Uint8Array(s)
                }
            }, e.TextEncoder = c, e.TextDecoder = u
        }, 780: (t, e, r) => {
            !function (t) {
                "use strict";
                var e = function (t) {
                    var e, r = new Float64Array(16);
                    if (t) for (e = 0; e < t.length; e++) r[e] = t[e];
                    return r
                }, n = function () {
                    throw new Error("no PRNG")
                }, i = new Uint8Array(16), o = new Uint8Array(32);
                o[0] = 9;
                var s = e(), a = e([1]), u = e([56129, 1]),
                    c = e([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
                    f = e([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
                    h = e([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                    d = e([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
                    l = e([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

                function p(t, e, r, n) {
                    t[e] = r >> 24 & 255, t[e + 1] = r >> 16 & 255, t[e + 2] = r >> 8 & 255, t[e + 3] = 255 & r, t[e + 4] = n >> 24 & 255, t[e + 5] = n >> 16 & 255, t[e + 6] = n >> 8 & 255, t[e + 7] = 255 & n
                }

                function b(t, e, r, n, i) {
                    var o, s = 0;
                    for (o = 0; o < i; o++) s |= t[e + o] ^ r[n + o];
                    return (1 & s - 1 >>> 8) - 1
                }

                function g(t, e, r, n) {
                    return b(t, e, r, n, 16)
                }

                function y(t, e, r, n) {
                    return b(t, e, r, n, 32)
                }

                function m(t, e, r, n) {
                    !function (t, e, r, n) {
                        for (var i, o = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, s = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24, a = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24, u = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24, c = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24, f = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, h = 255 & e[0] | (255 & e[1]) << 8 | (255 & e[2]) << 16 | (255 & e[3]) << 24, d = 255 & e[4] | (255 & e[5]) << 8 | (255 & e[6]) << 16 | (255 & e[7]) << 24, l = 255 & e[8] | (255 & e[9]) << 8 | (255 & e[10]) << 16 | (255 & e[11]) << 24, p = 255 & e[12] | (255 & e[13]) << 8 | (255 & e[14]) << 16 | (255 & e[15]) << 24, b = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, g = 255 & r[16] | (255 & r[17]) << 8 | (255 & r[18]) << 16 | (255 & r[19]) << 24, y = 255 & r[20] | (255 & r[21]) << 8 | (255 & r[22]) << 16 | (255 & r[23]) << 24, m = 255 & r[24] | (255 & r[25]) << 8 | (255 & r[26]) << 16 | (255 & r[27]) << 24, w = 255 & r[28] | (255 & r[29]) << 8 | (255 & r[30]) << 16 | (255 & r[31]) << 24, v = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, S = o, M = s, _ = a, A = u, k = c, E = f, I = h, B = d, x = l, R = p, P = b, O = g, T = y, U = m, L = w, N = v, z = 0; z < 20; z += 2) S ^= (i = (T ^= (i = (x ^= (i = (k ^= (i = S + T | 0) << 7 | i >>> 25) + S | 0) << 9 | i >>> 23) + k | 0) << 13 | i >>> 19) + x | 0) << 18 | i >>> 14, E ^= (i = (M ^= (i = (U ^= (i = (R ^= (i = E + M | 0) << 7 | i >>> 25) + E | 0) << 9 | i >>> 23) + R | 0) << 13 | i >>> 19) + U | 0) << 18 | i >>> 14, P ^= (i = (I ^= (i = (_ ^= (i = (L ^= (i = P + I | 0) << 7 | i >>> 25) + P | 0) << 9 | i >>> 23) + L | 0) << 13 | i >>> 19) + _ | 0) << 18 | i >>> 14, N ^= (i = (O ^= (i = (B ^= (i = (A ^= (i = N + O | 0) << 7 | i >>> 25) + N | 0) << 9 | i >>> 23) + A | 0) << 13 | i >>> 19) + B | 0) << 18 | i >>> 14, S ^= (i = (A ^= (i = (_ ^= (i = (M ^= (i = S + A | 0) << 7 | i >>> 25) + S | 0) << 9 | i >>> 23) + M | 0) << 13 | i >>> 19) + _ | 0) << 18 | i >>> 14, E ^= (i = (k ^= (i = (B ^= (i = (I ^= (i = E + k | 0) << 7 | i >>> 25) + E | 0) << 9 | i >>> 23) + I | 0) << 13 | i >>> 19) + B | 0) << 18 | i >>> 14, P ^= (i = (R ^= (i = (x ^= (i = (O ^= (i = P + R | 0) << 7 | i >>> 25) + P | 0) << 9 | i >>> 23) + O | 0) << 13 | i >>> 19) + x | 0) << 18 | i >>> 14, N ^= (i = (L ^= (i = (U ^= (i = (T ^= (i = N + L | 0) << 7 | i >>> 25) + N | 0) << 9 | i >>> 23) + T | 0) << 13 | i >>> 19) + U | 0) << 18 | i >>> 14;
                        S = S + o | 0, M = M + s | 0, _ = _ + a | 0, A = A + u | 0, k = k + c | 0, E = E + f | 0, I = I + h | 0, B = B + d | 0, x = x + l | 0, R = R + p | 0, P = P + b | 0, O = O + g | 0, T = T + y | 0, U = U + m | 0, L = L + w | 0, N = N + v | 0, t[0] = S >>> 0 & 255, t[1] = S >>> 8 & 255, t[2] = S >>> 16 & 255, t[3] = S >>> 24 & 255, t[4] = M >>> 0 & 255, t[5] = M >>> 8 & 255, t[6] = M >>> 16 & 255, t[7] = M >>> 24 & 255, t[8] = _ >>> 0 & 255, t[9] = _ >>> 8 & 255, t[10] = _ >>> 16 & 255, t[11] = _ >>> 24 & 255, t[12] = A >>> 0 & 255, t[13] = A >>> 8 & 255, t[14] = A >>> 16 & 255, t[15] = A >>> 24 & 255, t[16] = k >>> 0 & 255, t[17] = k >>> 8 & 255, t[18] = k >>> 16 & 255, t[19] = k >>> 24 & 255, t[20] = E >>> 0 & 255, t[21] = E >>> 8 & 255, t[22] = E >>> 16 & 255, t[23] = E >>> 24 & 255, t[24] = I >>> 0 & 255, t[25] = I >>> 8 & 255, t[26] = I >>> 16 & 255, t[27] = I >>> 24 & 255, t[28] = B >>> 0 & 255, t[29] = B >>> 8 & 255, t[30] = B >>> 16 & 255, t[31] = B >>> 24 & 255, t[32] = x >>> 0 & 255, t[33] = x >>> 8 & 255, t[34] = x >>> 16 & 255, t[35] = x >>> 24 & 255, t[36] = R >>> 0 & 255, t[37] = R >>> 8 & 255, t[38] = R >>> 16 & 255, t[39] = R >>> 24 & 255, t[40] = P >>> 0 & 255, t[41] = P >>> 8 & 255, t[42] = P >>> 16 & 255, t[43] = P >>> 24 & 255, t[44] = O >>> 0 & 255, t[45] = O >>> 8 & 255, t[46] = O >>> 16 & 255, t[47] = O >>> 24 & 255, t[48] = T >>> 0 & 255, t[49] = T >>> 8 & 255, t[50] = T >>> 16 & 255, t[51] = T >>> 24 & 255, t[52] = U >>> 0 & 255, t[53] = U >>> 8 & 255, t[54] = U >>> 16 & 255, t[55] = U >>> 24 & 255, t[56] = L >>> 0 & 255, t[57] = L >>> 8 & 255, t[58] = L >>> 16 & 255, t[59] = L >>> 24 & 255, t[60] = N >>> 0 & 255, t[61] = N >>> 8 & 255, t[62] = N >>> 16 & 255, t[63] = N >>> 24 & 255
                    }(t, e, r, n)
                }

                function w(t, e, r, n) {
                    !function (t, e, r, n) {
                        for (var i, o = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, s = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24, a = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24, u = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24, c = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24, f = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, h = 255 & e[0] | (255 & e[1]) << 8 | (255 & e[2]) << 16 | (255 & e[3]) << 24, d = 255 & e[4] | (255 & e[5]) << 8 | (255 & e[6]) << 16 | (255 & e[7]) << 24, l = 255 & e[8] | (255 & e[9]) << 8 | (255 & e[10]) << 16 | (255 & e[11]) << 24, p = 255 & e[12] | (255 & e[13]) << 8 | (255 & e[14]) << 16 | (255 & e[15]) << 24, b = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, g = 255 & r[16] | (255 & r[17]) << 8 | (255 & r[18]) << 16 | (255 & r[19]) << 24, y = 255 & r[20] | (255 & r[21]) << 8 | (255 & r[22]) << 16 | (255 & r[23]) << 24, m = 255 & r[24] | (255 & r[25]) << 8 | (255 & r[26]) << 16 | (255 & r[27]) << 24, w = 255 & r[28] | (255 & r[29]) << 8 | (255 & r[30]) << 16 | (255 & r[31]) << 24, v = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, S = 0; S < 20; S += 2) o ^= (i = (y ^= (i = (l ^= (i = (c ^= (i = o + y | 0) << 7 | i >>> 25) + o | 0) << 9 | i >>> 23) + c | 0) << 13 | i >>> 19) + l | 0) << 18 | i >>> 14, f ^= (i = (s ^= (i = (m ^= (i = (p ^= (i = f + s | 0) << 7 | i >>> 25) + f | 0) << 9 | i >>> 23) + p | 0) << 13 | i >>> 19) + m | 0) << 18 | i >>> 14, b ^= (i = (h ^= (i = (a ^= (i = (w ^= (i = b + h | 0) << 7 | i >>> 25) + b | 0) << 9 | i >>> 23) + w | 0) << 13 | i >>> 19) + a | 0) << 18 | i >>> 14, v ^= (i = (g ^= (i = (d ^= (i = (u ^= (i = v + g | 0) << 7 | i >>> 25) + v | 0) << 9 | i >>> 23) + u | 0) << 13 | i >>> 19) + d | 0) << 18 | i >>> 14, o ^= (i = (u ^= (i = (a ^= (i = (s ^= (i = o + u | 0) << 7 | i >>> 25) + o | 0) << 9 | i >>> 23) + s | 0) << 13 | i >>> 19) + a | 0) << 18 | i >>> 14, f ^= (i = (c ^= (i = (d ^= (i = (h ^= (i = f + c | 0) << 7 | i >>> 25) + f | 0) << 9 | i >>> 23) + h | 0) << 13 | i >>> 19) + d | 0) << 18 | i >>> 14, b ^= (i = (p ^= (i = (l ^= (i = (g ^= (i = b + p | 0) << 7 | i >>> 25) + b | 0) << 9 | i >>> 23) + g | 0) << 13 | i >>> 19) + l | 0) << 18 | i >>> 14, v ^= (i = (w ^= (i = (m ^= (i = (y ^= (i = v + w | 0) << 7 | i >>> 25) + v | 0) << 9 | i >>> 23) + y | 0) << 13 | i >>> 19) + m | 0) << 18 | i >>> 14;
                        t[0] = o >>> 0 & 255, t[1] = o >>> 8 & 255, t[2] = o >>> 16 & 255, t[3] = o >>> 24 & 255, t[4] = f >>> 0 & 255, t[5] = f >>> 8 & 255, t[6] = f >>> 16 & 255, t[7] = f >>> 24 & 255, t[8] = b >>> 0 & 255, t[9] = b >>> 8 & 255, t[10] = b >>> 16 & 255, t[11] = b >>> 24 & 255, t[12] = v >>> 0 & 255, t[13] = v >>> 8 & 255, t[14] = v >>> 16 & 255, t[15] = v >>> 24 & 255, t[16] = h >>> 0 & 255, t[17] = h >>> 8 & 255, t[18] = h >>> 16 & 255, t[19] = h >>> 24 & 255, t[20] = d >>> 0 & 255, t[21] = d >>> 8 & 255, t[22] = d >>> 16 & 255, t[23] = d >>> 24 & 255, t[24] = l >>> 0 & 255, t[25] = l >>> 8 & 255, t[26] = l >>> 16 & 255, t[27] = l >>> 24 & 255, t[28] = p >>> 0 & 255, t[29] = p >>> 8 & 255, t[30] = p >>> 16 & 255, t[31] = p >>> 24 & 255
                    }(t, e, r, n)
                }

                var v = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);

                function S(t, e, r, n, i, o, s) {
                    var a, u, c = new Uint8Array(16), f = new Uint8Array(64);
                    for (u = 0; u < 16; u++) c[u] = 0;
                    for (u = 0; u < 8; u++) c[u] = o[u];
                    for (; i >= 64;) {
                        for (m(f, c, s, v), u = 0; u < 64; u++) t[e + u] = r[n + u] ^ f[u];
                        for (a = 1, u = 8; u < 16; u++) a = a + (255 & c[u]) | 0, c[u] = 255 & a, a >>>= 8;
                        i -= 64, e += 64, n += 64
                    }
                    if (i > 0) for (m(f, c, s, v), u = 0; u < i; u++) t[e + u] = r[n + u] ^ f[u];
                    return 0
                }

                function M(t, e, r, n, i) {
                    var o, s, a = new Uint8Array(16), u = new Uint8Array(64);
                    for (s = 0; s < 16; s++) a[s] = 0;
                    for (s = 0; s < 8; s++) a[s] = n[s];
                    for (; r >= 64;) {
                        for (m(u, a, i, v), s = 0; s < 64; s++) t[e + s] = u[s];
                        for (o = 1, s = 8; s < 16; s++) o = o + (255 & a[s]) | 0, a[s] = 255 & o, o >>>= 8;
                        r -= 64, e += 64
                    }
                    if (r > 0) for (m(u, a, i, v), s = 0; s < r; s++) t[e + s] = u[s];
                    return 0
                }

                function _(t, e, r, n, i) {
                    var o = new Uint8Array(32);
                    w(o, n, i, v);
                    for (var s = new Uint8Array(8), a = 0; a < 8; a++) s[a] = n[a + 16];
                    return M(t, e, r, s, o)
                }

                function A(t, e, r, n, i, o, s) {
                    var a = new Uint8Array(32);
                    w(a, o, s, v);
                    for (var u = new Uint8Array(8), c = 0; c < 8; c++) u[c] = o[c + 16];
                    return S(t, e, r, n, i, u, a)
                }

                var k = function (t) {
                    var e, r, n, i, o, s, a, u;
                    this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.leftover = 0, this.fin = 0, e = 255 & t[0] | (255 & t[1]) << 8, this.r[0] = 8191 & e, r = 255 & t[2] | (255 & t[3]) << 8, this.r[1] = 8191 & (e >>> 13 | r << 3), n = 255 & t[4] | (255 & t[5]) << 8, this.r[2] = 7939 & (r >>> 10 | n << 6), i = 255 & t[6] | (255 & t[7]) << 8, this.r[3] = 8191 & (n >>> 7 | i << 9), o = 255 & t[8] | (255 & t[9]) << 8, this.r[4] = 255 & (i >>> 4 | o << 12), this.r[5] = o >>> 1 & 8190, s = 255 & t[10] | (255 & t[11]) << 8, this.r[6] = 8191 & (o >>> 14 | s << 2), a = 255 & t[12] | (255 & t[13]) << 8, this.r[7] = 8065 & (s >>> 11 | a << 5), u = 255 & t[14] | (255 & t[15]) << 8, this.r[8] = 8191 & (a >>> 8 | u << 8), this.r[9] = u >>> 5 & 127, this.pad[0] = 255 & t[16] | (255 & t[17]) << 8, this.pad[1] = 255 & t[18] | (255 & t[19]) << 8, this.pad[2] = 255 & t[20] | (255 & t[21]) << 8, this.pad[3] = 255 & t[22] | (255 & t[23]) << 8, this.pad[4] = 255 & t[24] | (255 & t[25]) << 8, this.pad[5] = 255 & t[26] | (255 & t[27]) << 8, this.pad[6] = 255 & t[28] | (255 & t[29]) << 8, this.pad[7] = 255 & t[30] | (255 & t[31]) << 8
                };

                function E(t, e, r, n, i, o) {
                    var s = new k(o);
                    return s.update(r, n, i), s.finish(t, e), 0
                }

                function I(t, e, r, n, i, o) {
                    var s = new Uint8Array(16);
                    return E(s, 0, r, n, i, o), g(t, e, s, 0)
                }

                function B(t, e, r, n, i) {
                    var o;
                    if (r < 32) return -1;
                    for (A(t, 0, e, 0, r, n, i), E(t, 16, t, 32, r - 32, t), o = 0; o < 16; o++) t[o] = 0;
                    return 0
                }

                function x(t, e, r, n, i) {
                    var o, s = new Uint8Array(32);
                    if (r < 32) return -1;
                    if (_(s, 0, 32, n, i), 0 !== I(e, 16, e, 32, r - 32, s)) return -1;
                    for (A(t, 0, e, 0, r, n, i), o = 0; o < 32; o++) t[o] = 0;
                    return 0
                }

                function R(t, e) {
                    var r;
                    for (r = 0; r < 16; r++) t[r] = 0 | e[r]
                }

                function P(t) {
                    var e, r, n = 1;
                    for (e = 0; e < 16; e++) r = t[e] + n + 65535, n = Math.floor(r / 65536), t[e] = r - 65536 * n;
                    t[0] += n - 1 + 37 * (n - 1)
                }

                function O(t, e, r) {
                    for (var n, i = ~(r - 1), o = 0; o < 16; o++) n = i & (t[o] ^ e[o]), t[o] ^= n, e[o] ^= n
                }

                function T(t, r) {
                    var n, i, o, s = e(), a = e();
                    for (n = 0; n < 16; n++) a[n] = r[n];
                    for (P(a), P(a), P(a), i = 0; i < 2; i++) {
                        for (s[0] = a[0] - 65517, n = 1; n < 15; n++) s[n] = a[n] - 65535 - (s[n - 1] >> 16 & 1), s[n - 1] &= 65535;
                        s[15] = a[15] - 32767 - (s[14] >> 16 & 1), o = s[15] >> 16 & 1, s[14] &= 65535, O(a, s, 1 - o)
                    }
                    for (n = 0; n < 16; n++) t[2 * n] = 255 & a[n], t[2 * n + 1] = a[n] >> 8
                }

                function U(t, e) {
                    var r = new Uint8Array(32), n = new Uint8Array(32);
                    return T(r, t), T(n, e), y(r, 0, n, 0)
                }

                function L(t) {
                    var e = new Uint8Array(32);
                    return T(e, t), 1 & e[0]
                }

                function N(t, e) {
                    var r;
                    for (r = 0; r < 16; r++) t[r] = e[2 * r] + (e[2 * r + 1] << 8);
                    t[15] &= 32767
                }

                function z(t, e, r) {
                    for (var n = 0; n < 16; n++) t[n] = e[n] + r[n]
                }

                function C(t, e, r) {
                    for (var n = 0; n < 16; n++) t[n] = e[n] - r[n]
                }

                function q(t, e, r) {
                    var n, i, o = 0, s = 0, a = 0, u = 0, c = 0, f = 0, h = 0, d = 0, l = 0, p = 0, b = 0, g = 0, y = 0,
                        m = 0, w = 0, v = 0, S = 0, M = 0, _ = 0, A = 0, k = 0, E = 0, I = 0, B = 0, x = 0, R = 0,
                        P = 0, O = 0, T = 0, U = 0, L = 0, N = r[0], z = r[1], C = r[2], q = r[3], W = r[4], j = r[5],
                        K = r[6], F = r[7], D = r[8], $ = r[9], J = r[10], V = r[11], H = r[12], G = r[13], Z = r[14],
                        Y = r[15];
                    o += (n = e[0]) * N, s += n * z, a += n * C, u += n * q, c += n * W, f += n * j, h += n * K, d += n * F, l += n * D, p += n * $, b += n * J, g += n * V, y += n * H, m += n * G, w += n * Z, v += n * Y, s += (n = e[1]) * N, a += n * z, u += n * C, c += n * q, f += n * W, h += n * j, d += n * K, l += n * F, p += n * D, b += n * $, g += n * J, y += n * V, m += n * H, w += n * G, v += n * Z, S += n * Y, a += (n = e[2]) * N, u += n * z, c += n * C, f += n * q, h += n * W, d += n * j, l += n * K, p += n * F, b += n * D, g += n * $, y += n * J, m += n * V, w += n * H, v += n * G, S += n * Z, M += n * Y, u += (n = e[3]) * N, c += n * z, f += n * C, h += n * q, d += n * W, l += n * j, p += n * K, b += n * F, g += n * D, y += n * $, m += n * J, w += n * V, v += n * H, S += n * G, M += n * Z, _ += n * Y, c += (n = e[4]) * N, f += n * z, h += n * C, d += n * q, l += n * W, p += n * j, b += n * K, g += n * F, y += n * D, m += n * $, w += n * J, v += n * V, S += n * H, M += n * G, _ += n * Z, A += n * Y, f += (n = e[5]) * N, h += n * z, d += n * C, l += n * q, p += n * W, b += n * j, g += n * K, y += n * F, m += n * D, w += n * $, v += n * J, S += n * V, M += n * H, _ += n * G, A += n * Z, k += n * Y, h += (n = e[6]) * N, d += n * z, l += n * C, p += n * q, b += n * W,g += n * j,y += n * K,m += n * F,w += n * D,v += n * $,S += n * J,M += n * V,_ += n * H,A += n * G,k += n * Z,E += n * Y,d += (n = e[7]) * N,l += n * z,p += n * C,b += n * q,g += n * W,y += n * j,m += n * K,w += n * F,v += n * D,S += n * $,M += n * J,_ += n * V,A += n * H,k += n * G,E += n * Z,I += n * Y,l += (n = e[8]) * N,p += n * z,b += n * C,g += n * q,y += n * W,m += n * j,w += n * K,v += n * F,S += n * D,M += n * $,_ += n * J,A += n * V,k += n * H,E += n * G,I += n * Z,B += n * Y,p += (n = e[9]) * N,b += n * z,g += n * C,y += n * q,m += n * W,w += n * j,v += n * K,S += n * F,M += n * D,_ += n * $,A += n * J,k += n * V,E += n * H,I += n * G,B += n * Z,x += n * Y,b += (n = e[10]) * N,g += n * z,y += n * C,m += n * q,w += n * W,v += n * j,S += n * K,M += n * F,_ += n * D,A += n * $,k += n * J,E += n * V,I += n * H,B += n * G,x += n * Z,R += n * Y,g += (n = e[11]) * N,y += n * z,m += n * C,w += n * q,v += n * W,S += n * j,M += n * K,_ += n * F,A += n * D,k += n * $,E += n * J,I += n * V,B += n * H,x += n * G,R += n * Z,P += n * Y,y += (n = e[12]) * N,m += n * z,w += n * C,v += n * q,S += n * W,M += n * j,_ += n * K,A += n * F,k += n * D,E += n * $,I += n * J,B += n * V,x += n * H,R += n * G,P += n * Z,O += n * Y,m += (n = e[13]) * N,w += n * z,v += n * C,S += n * q,M += n * W,_ += n * j,A += n * K,k += n * F,E += n * D,I += n * $,B += n * J,x += n * V,R += n * H,P += n * G,O += n * Z,T += n * Y,w += (n = e[14]) * N,v += n * z,S += n * C,M += n * q,_ += n * W,A += n * j,k += n * K,E += n * F,I += n * D,B += n * $,x += n * J,R += n * V,P += n * H,O += n * G,T += n * Z,U += n * Y,v += (n = e[15]) * N,s += 38 * (M += n * C),a += 38 * (_ += n * q),u += 38 * (A += n * W),c += 38 * (k += n * j),f += 38 * (E += n * K),h += 38 * (I += n * F),d += 38 * (B += n * D),l += 38 * (x += n * $),p += 38 * (R += n * J),b += 38 * (P += n * V),g += 38 * (O += n * H),y += 38 * (T += n * G),m += 38 * (U += n * Z),w += 38 * (L += n * Y),o = (n = (o += 38 * (S += n * z)) + (i = 1) + 65535) - 65536 * (i = Math.floor(n / 65536)),s = (n = s + i + 65535) - 65536 * (i = Math.floor(n / 65536)),a = (n = a + i + 65535) - 65536 * (i = Math.floor(n / 65536)),u = (n = u + i + 65535) - 65536 * (i = Math.floor(n / 65536)),c = (n = c + i + 65535) - 65536 * (i = Math.floor(n / 65536)),f = (n = f + i + 65535) - 65536 * (i = Math.floor(n / 65536)),h = (n = h + i + 65535) - 65536 * (i = Math.floor(n / 65536)),d = (n = d + i + 65535) - 65536 * (i = Math.floor(n / 65536)),l = (n = l + i + 65535) - 65536 * (i = Math.floor(n / 65536)),p = (n = p + i + 65535) - 65536 * (i = Math.floor(n / 65536)),b = (n = b + i + 65535) - 65536 * (i = Math.floor(n / 65536)),g = (n = g + i + 65535) - 65536 * (i = Math.floor(n / 65536)),y = (n = y + i + 65535) - 65536 * (i = Math.floor(n / 65536)),m = (n = m + i + 65535) - 65536 * (i = Math.floor(n / 65536)),w = (n = w + i + 65535) - 65536 * (i = Math.floor(n / 65536)),v = (n = v + i + 65535) - 65536 * (i = Math.floor(n / 65536)),o = (n = (o += i - 1 + 37 * (i - 1)) + (i = 1) + 65535) - 65536 * (i = Math.floor(n / 65536)),s = (n = s + i + 65535) - 65536 * (i = Math.floor(n / 65536)),a = (n = a + i + 65535) - 65536 * (i = Math.floor(n / 65536)),u = (n = u + i + 65535) - 65536 * (i = Math.floor(n / 65536)),c = (n = c + i + 65535) - 65536 * (i = Math.floor(n / 65536)),f = (n = f + i + 65535) - 65536 * (i = Math.floor(n / 65536)),h = (n = h + i + 65535) - 65536 * (i = Math.floor(n / 65536)),d = (n = d + i + 65535) - 65536 * (i = Math.floor(n / 65536)),l = (n = l + i + 65535) - 65536 * (i = Math.floor(n / 65536)),p = (n = p + i + 65535) - 65536 * (i = Math.floor(n / 65536)),b = (n = b + i + 65535) - 65536 * (i = Math.floor(n / 65536)),g = (n = g + i + 65535) - 65536 * (i = Math.floor(n / 65536)),y = (n = y + i + 65535) - 65536 * (i = Math.floor(n / 65536)),m = (n = m + i + 65535) - 65536 * (i = Math.floor(n / 65536)),w = (n = w + i + 65535) - 65536 * (i = Math.floor(n / 65536)),v = (n = v + i + 65535) - 65536 * (i = Math.floor(n / 65536)),o += i - 1 + 37 * (i - 1),t[0] = o,t[1] = s,t[2] = a,t[3] = u,t[4] = c,t[5] = f,t[6] = h,t[7] = d,t[8] = l,t[9] = p,t[10] = b,t[11] = g,t[12] = y,t[13] = m,t[14] = w,t[15] = v
                }

                function W(t, e) {
                    q(t, e, e)
                }

                function j(t, r) {
                    var n, i = e();
                    for (n = 0; n < 16; n++) i[n] = r[n];
                    for (n = 253; n >= 0; n--) W(i, i), 2 !== n && 4 !== n && q(i, i, r);
                    for (n = 0; n < 16; n++) t[n] = i[n]
                }

                function K(t, r) {
                    var n, i = e();
                    for (n = 0; n < 16; n++) i[n] = r[n];
                    for (n = 250; n >= 0; n--) W(i, i), 1 !== n && q(i, i, r);
                    for (n = 0; n < 16; n++) t[n] = i[n]
                }

                function F(t, r, n) {
                    var i, o, s = new Uint8Array(32), a = new Float64Array(80), c = e(), f = e(), h = e(), d = e(),
                        l = e(), p = e();
                    for (o = 0; o < 31; o++) s[o] = r[o];
                    for (s[31] = 127 & r[31] | 64, s[0] &= 248, N(a, n), o = 0; o < 16; o++) f[o] = a[o], d[o] = c[o] = h[o] = 0;
                    for (c[0] = d[0] = 1, o = 254; o >= 0; --o) O(c, f, i = s[o >>> 3] >>> (7 & o) & 1), O(h, d, i), z(l, c, h), C(c, c, h), z(h, f, d), C(f, f, d), W(d, l), W(p, c), q(c, h, c), q(h, f, l), z(l, c, h), C(c, c, h), W(f, c), C(h, d, p), q(c, h, u), z(c, c, d), q(h, h, c), q(c, d, p), q(d, f, a), W(f, l), O(c, f, i), O(h, d, i);
                    for (o = 0; o < 16; o++) a[o + 16] = c[o], a[o + 32] = h[o], a[o + 48] = f[o], a[o + 64] = d[o];
                    var b = a.subarray(32), g = a.subarray(16);
                    return j(b, b), q(g, g, b), T(t, g), 0
                }

                function D(t, e) {
                    return F(t, e, o)
                }

                function $(t, e) {
                    return n(e, 32), D(t, e)
                }

                function J(t, e, r) {
                    var n = new Uint8Array(32);
                    return F(n, r, e), w(t, i, n, v)
                }

                k.prototype.blocks = function (t, e, r) {
                    for (var n, i, o, s, a, u, c, f, h, d, l, p, b, g, y, m, w, v, S, M = this.fin ? 0 : 2048, _ = this.h[0], A = this.h[1], k = this.h[2], E = this.h[3], I = this.h[4], B = this.h[5], x = this.h[6], R = this.h[7], P = this.h[8], O = this.h[9], T = this.r[0], U = this.r[1], L = this.r[2], N = this.r[3], z = this.r[4], C = this.r[5], q = this.r[6], W = this.r[7], j = this.r[8], K = this.r[9]; r >= 16;) d = h = 0, d += (_ += 8191 & (n = 255 & t[e + 0] | (255 & t[e + 1]) << 8)) * T, d += (A += 8191 & (n >>> 13 | (i = 255 & t[e + 2] | (255 & t[e + 3]) << 8) << 3)) * (5 * K), d += (k += 8191 & (i >>> 10 | (o = 255 & t[e + 4] | (255 & t[e + 5]) << 8) << 6)) * (5 * j), d += (E += 8191 & (o >>> 7 | (s = 255 & t[e + 6] | (255 & t[e + 7]) << 8) << 9)) * (5 * W), h = (d += (I += 8191 & (s >>> 4 | (a = 255 & t[e + 8] | (255 & t[e + 9]) << 8) << 12)) * (5 * q)) >>> 13, d &= 8191, d += (B += a >>> 1 & 8191) * (5 * C), d += (x += 8191 & (a >>> 14 | (u = 255 & t[e + 10] | (255 & t[e + 11]) << 8) << 2)) * (5 * z), d += (R += 8191 & (u >>> 11 | (c = 255 & t[e + 12] | (255 & t[e + 13]) << 8) << 5)) * (5 * N), d += (P += 8191 & (c >>> 8 | (f = 255 & t[e + 14] | (255 & t[e + 15]) << 8) << 8)) * (5 * L), l = h += (d += (O += f >>> 5 | M) * (5 * U)) >>> 13, l += _ * U, l += A * T, l += k * (5 * K), l += E * (5 * j), h = (l += I * (5 * W)) >>> 13, l &= 8191, l += B * (5 * q), l += x * (5 * C), l += R * (5 * z), l += P * (5 * N), h += (l += O * (5 * L)) >>> 13, l &= 8191, p = h, p += _ * L, p += A * U, p += k * T, p += E * (5 * K), h = (p += I * (5 * j)) >>> 13, p &= 8191, p += B * (5 * W), p += x * (5 * q), p += R * (5 * C), p += P * (5 * z), b = h += (p += O * (5 * N)) >>> 13, b += _ * N, b += A * L, b += k * U, b += E * T, h = (b += I * (5 * K)) >>> 13, b &= 8191, b += B * (5 * j), b += x * (5 * W), b += R * (5 * q), b += P * (5 * C), g = h += (b += O * (5 * z)) >>> 13, g += _ * z, g += A * N, g += k * L, g += E * U, h = (g += I * T) >>> 13, g &= 8191, g += B * (5 * K), g += x * (5 * j), g += R * (5 * W), g += P * (5 * q), y = h += (g += O * (5 * C)) >>> 13, y += _ * C, y += A * z, y += k * N, y += E * L, h = (y += I * U) >>> 13, y &= 8191, y += B * T, y += x * (5 * K), y += R * (5 * j), y += P * (5 * W), m = h += (y += O * (5 * q)) >>> 13, m += _ * q, m += A * C, m += k * z, m += E * N, h = (m += I * L) >>> 13, m &= 8191, m += B * U, m += x * T, m += R * (5 * K), m += P * (5 * j), w = h += (m += O * (5 * W)) >>> 13, w += _ * W, w += A * q, w += k * C, w += E * z, h = (w += I * N) >>> 13, w &= 8191, w += B * L, w += x * U, w += R * T, w += P * (5 * K), v = h += (w += O * (5 * j)) >>> 13, v += _ * j, v += A * W, v += k * q, v += E * C, h = (v += I * z) >>> 13, v &= 8191, v += B * N, v += x * L, v += R * U, v += P * T,S = h += (v += O * (5 * K)) >>> 13,S += _ * K,S += A * j,S += k * W,S += E * q,h = (S += I * C) >>> 13,S &= 8191,S += B * z,S += x * N,S += R * L,S += P * U,_ = d = 8191 & (h = (h = ((h += (S += O * T) >>> 13) << 2) + h | 0) + (d &= 8191) | 0),A = l += h >>>= 13,k = p &= 8191,E = b &= 8191,I = g &= 8191,B = y &= 8191,x = m &= 8191,R = w &= 8191,P = v &= 8191,O = S &= 8191,e += 16,r -= 16;
                    this.h[0] = _, this.h[1] = A, this.h[2] = k, this.h[3] = E, this.h[4] = I, this.h[5] = B, this.h[6] = x, this.h[7] = R, this.h[8] = P, this.h[9] = O
                }, k.prototype.finish = function (t, e) {
                    var r, n, i, o, s = new Uint16Array(10);
                    if (this.leftover) {
                        for (o = this.leftover, this.buffer[o++] = 1; o < 16; o++) this.buffer[o] = 0;
                        this.fin = 1, this.blocks(this.buffer, 0, 16)
                    }
                    for (r = this.h[1] >>> 13, this.h[1] &= 8191, o = 2; o < 10; o++) this.h[o] += r, r = this.h[o] >>> 13, this.h[o] &= 8191;
                    for (this.h[0] += 5 * r, r = this.h[0] >>> 13, this.h[0] &= 8191, this.h[1] += r, r = this.h[1] >>> 13, this.h[1] &= 8191, this.h[2] += r, s[0] = this.h[0] + 5, r = s[0] >>> 13, s[0] &= 8191, o = 1; o < 10; o++) s[o] = this.h[o] + r, r = s[o] >>> 13, s[o] &= 8191;
                    for (s[9] -= 8192, n = (1 ^ r) - 1, o = 0; o < 10; o++) s[o] &= n;
                    for (n = ~n, o = 0; o < 10; o++) this.h[o] = this.h[o] & n | s[o];
                    for (this.h[0] = 65535 & (this.h[0] | this.h[1] << 13), this.h[1] = 65535 & (this.h[1] >>> 3 | this.h[2] << 10), this.h[2] = 65535 & (this.h[2] >>> 6 | this.h[3] << 7), this.h[3] = 65535 & (this.h[3] >>> 9 | this.h[4] << 4), this.h[4] = 65535 & (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14), this.h[5] = 65535 & (this.h[6] >>> 2 | this.h[7] << 11), this.h[6] = 65535 & (this.h[7] >>> 5 | this.h[8] << 8), this.h[7] = 65535 & (this.h[8] >>> 8 | this.h[9] << 5), i = this.h[0] + this.pad[0], this.h[0] = 65535 & i, o = 1; o < 8; o++) i = (this.h[o] + this.pad[o] | 0) + (i >>> 16) | 0, this.h[o] = 65535 & i;
                    t[e + 0] = this.h[0] >>> 0 & 255, t[e + 1] = this.h[0] >>> 8 & 255, t[e + 2] = this.h[1] >>> 0 & 255, t[e + 3] = this.h[1] >>> 8 & 255, t[e + 4] = this.h[2] >>> 0 & 255, t[e + 5] = this.h[2] >>> 8 & 255, t[e + 6] = this.h[3] >>> 0 & 255, t[e + 7] = this.h[3] >>> 8 & 255, t[e + 8] = this.h[4] >>> 0 & 255, t[e + 9] = this.h[4] >>> 8 & 255, t[e + 10] = this.h[5] >>> 0 & 255, t[e + 11] = this.h[5] >>> 8 & 255, t[e + 12] = this.h[6] >>> 0 & 255, t[e + 13] = this.h[6] >>> 8 & 255, t[e + 14] = this.h[7] >>> 0 & 255, t[e + 15] = this.h[7] >>> 8 & 255
                }, k.prototype.update = function (t, e, r) {
                    var n, i;
                    if (this.leftover) {
                        for ((i = 16 - this.leftover) > r && (i = r), n = 0; n < i; n++) this.buffer[this.leftover + n] = t[e + n];
                        if (r -= i, e += i, this.leftover += i, this.leftover < 16) return;
                        this.blocks(this.buffer, 0, 16), this.leftover = 0
                    }
                    if (r >= 16 && (i = r - r % 16, this.blocks(t, e, i), e += i, r -= i), r) {
                        for (n = 0; n < r; n++) this.buffer[this.leftover + n] = t[e + n];
                        this.leftover += r
                    }
                };
                var V = B, H = x,
                    G = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

                function Z(t, e, r, n) {
                    for (var i, o, s, a, u, c, f, h, d, l, p, b, g, y, m, w, v, S, M, _, A, k, E, I, B, x, R = new Int32Array(16), P = new Int32Array(16), O = t[0], T = t[1], U = t[2], L = t[3], N = t[4], z = t[5], C = t[6], q = t[7], W = e[0], j = e[1], K = e[2], F = e[3], D = e[4], $ = e[5], J = e[6], V = e[7], H = 0; n >= 128;) {
                        for (M = 0; M < 16; M++) _ = 8 * M + H, R[M] = r[_ + 0] << 24 | r[_ + 1] << 16 | r[_ + 2] << 8 | r[_ + 3], P[M] = r[_ + 4] << 24 | r[_ + 5] << 16 | r[_ + 6] << 8 | r[_ + 7];
                        for (M = 0; M < 80; M++) if (i = O, o = T, s = U, a = L, u = N, c = z, f = C, d = W, l = j, p = K, b = F, g = D, y = $, m = J, E = 65535 & (k = V), I = k >>> 16, B = 65535 & (A = q), x = A >>> 16, E += 65535 & (k = (D >>> 14 | N << 18) ^ (D >>> 18 | N << 14) ^ (N >>> 9 | D << 23)), I += k >>> 16, B += 65535 & (A = (N >>> 14 | D << 18) ^ (N >>> 18 | D << 14) ^ (D >>> 9 | N << 23)), x += A >>> 16, E += 65535 & (k = D & $ ^ ~D & J), I += k >>> 16, B += 65535 & (A = N & z ^ ~N & C), x += A >>> 16, E += 65535 & (k = G[2 * M + 1]), I += k >>> 16, B += 65535 & (A = G[2 * M]), x += A >>> 16, A = R[M % 16], I += (k = P[M % 16]) >>> 16, B += 65535 & A, x += A >>> 16, B += (I += (E += 65535 & k) >>> 16) >>> 16, E = 65535 & (k = S = 65535 & E | I << 16), I = k >>> 16, B = 65535 & (A = v = 65535 & B | (x += B >>> 16) << 16), x = A >>> 16, E += 65535 & (k = (W >>> 28 | O << 4) ^ (O >>> 2 | W << 30) ^ (O >>> 7 | W << 25)), I += k >>> 16, B += 65535 & (A = (O >>> 28 | W << 4) ^ (W >>> 2 | O << 30) ^ (W >>> 7 | O << 25)), x += A >>> 16, I += (k = W & j ^ W & K ^ j & K) >>> 16, B += 65535 & (A = O & T ^ O & U ^ T & U), x += A >>> 16, h = 65535 & (B += (I += (E += 65535 & k) >>> 16) >>> 16) | (x += B >>> 16) << 16, w = 65535 & E | I << 16, E = 65535 & (k = b), I = k >>> 16, B = 65535 & (A = a), x = A >>> 16, I += (k = S) >>> 16, B += 65535 & (A = v), x += A >>> 16, T = i, U = o, L = s, N = a = 65535 & (B += (I += (E += 65535 & k) >>> 16) >>> 16) | (x += B >>> 16) << 16, z = u, C = c, q = f, O = h, j = d, K = l, F = p, D = b = 65535 & E | I << 16, $ = g, J = y, V = m, W = w, M % 16 == 15) for (_ = 0; _ < 16; _++) A = R[_], E = 65535 & (k = P[_]), I = k >>> 16, B = 65535 & A, x = A >>> 16, A = R[(_ + 9) % 16], E += 65535 & (k = P[(_ + 9) % 16]), I += k >>> 16, B += 65535 & A, x += A >>> 16, v = R[(_ + 1) % 16], E += 65535 & (k = ((S = P[(_ + 1) % 16]) >>> 1 | v << 31) ^ (S >>> 8 | v << 24) ^ (S >>> 7 | v << 25)), I += k >>> 16, B += 65535 & (A = (v >>> 1 | S << 31) ^ (v >>> 8 | S << 24) ^ v >>> 7), x += A >>> 16, v = R[(_ + 14) % 16], I += (k = ((S = P[(_ + 14) % 16]) >>> 19 | v << 13) ^ (v >>> 29 | S << 3) ^ (S >>> 6 | v << 26)) >>> 16, B += 65535 & (A = (v >>> 19 | S << 13) ^ (S >>> 29 | v << 3) ^ v >>> 6), x += A >>> 16, x += (B += (I += (E += 65535 & k) >>> 16) >>> 16) >>> 16, R[_] = 65535 & B | x << 16, P[_] = 65535 & E | I << 16;
                        E = 65535 & (k = W), I = k >>> 16, B = 65535 & (A = O), x = A >>> 16, A = t[0], I += (k = e[0]) >>> 16, B += 65535 & A, x += A >>> 16, x += (B += (I += (E += 65535 & k) >>> 16) >>> 16) >>> 16, t[0] = O = 65535 & B | x << 16, e[0] = W = 65535 & E | I << 16, E = 65535 & (k = j), I = k >>> 16, B = 65535 & (A = T), x = A >>> 16, A = t[1], I += (k = e[1]) >>> 16, B += 65535 & A, x += A >>> 16, x += (B += (I += (E += 65535 & k) >>> 16) >>> 16) >>> 16, t[1] = T = 65535 & B | x << 16, e[1] = j = 65535 & E | I << 16, E = 65535 & (k = K), I = k >>> 16, B = 65535 & (A = U), x = A >>> 16, A = t[2], I += (k = e[2]) >>> 16, B += 65535 & A, x += A >>> 16, x += (B += (I += (E += 65535 & k) >>> 16) >>> 16) >>> 16, t[2] = U = 65535 & B | x << 16, e[2] = K = 65535 & E | I << 16, E = 65535 & (k = F), I = k >>> 16, B = 65535 & (A = L), x = A >>> 16, A = t[3], I += (k = e[3]) >>> 16, B += 65535 & A, x += A >>> 16, x += (B += (I += (E += 65535 & k) >>> 16) >>> 16) >>> 16, t[3] = L = 65535 & B | x << 16, e[3] = F = 65535 & E | I << 16, E = 65535 & (k = D), I = k >>> 16, B = 65535 & (A = N), x = A >>> 16, A = t[4], I += (k = e[4]) >>> 16, B += 65535 & A, x += A >>> 16, x += (B += (I += (E += 65535 & k) >>> 16) >>> 16) >>> 16, t[4] = N = 65535 & B | x << 16, e[4] = D = 65535 & E | I << 16, E = 65535 & (k = $), I = k >>> 16, B = 65535 & (A = z), x = A >>> 16, A = t[5], I += (k = e[5]) >>> 16, B += 65535 & A, x += A >>> 16, x += (B += (I += (E += 65535 & k) >>> 16) >>> 16) >>> 16, t[5] = z = 65535 & B | x << 16, e[5] = $ = 65535 & E | I << 16, E = 65535 & (k = J), I = k >>> 16, B = 65535 & (A = C), x = A >>> 16, A = t[6], I += (k = e[6]) >>> 16, B += 65535 & A, x += A >>> 16, x += (B += (I += (E += 65535 & k) >>> 16) >>> 16) >>> 16, t[6] = C = 65535 & B | x << 16, e[6] = J = 65535 & E | I << 16, E = 65535 & (k = V), I = k >>> 16, B = 65535 & (A = q), x = A >>> 16, A = t[7], I += (k = e[7]) >>> 16, B += 65535 & A, x += A >>> 16, x += (B += (I += (E += 65535 & k) >>> 16) >>> 16) >>> 16, t[7] = q = 65535 & B | x << 16, e[7] = V = 65535 & E | I << 16, H += 128, n -= 128
                    }
                    return n
                }

                function Y(t, e, r) {
                    var n, i = new Int32Array(8), o = new Int32Array(8), s = new Uint8Array(256), a = r;
                    for (i[0] = 1779033703, i[1] = 3144134277, i[2] = 1013904242, i[3] = 2773480762, i[4] = 1359893119, i[5] = 2600822924, i[6] = 528734635, i[7] = 1541459225, o[0] = 4089235720, o[1] = 2227873595, o[2] = 4271175723, o[3] = 1595750129, o[4] = 2917565137, o[5] = 725511199, o[6] = 4215389547, o[7] = 327033209, Z(i, o, e, r), r %= 128, n = 0; n < r; n++) s[n] = e[a - r + n];
                    for (s[r] = 128, s[(r = 256 - 128 * (r < 112 ? 1 : 0)) - 9] = 0, p(s, r - 8, a / 536870912 | 0, a << 3), Z(i, o, s, r), n = 0; n < 8; n++) p(t, 8 * n, i[n], o[n]);
                    return 0
                }

                function X(t, r) {
                    var n = e(), i = e(), o = e(), s = e(), a = e(), u = e(), c = e(), h = e(), d = e();
                    C(n, t[1], t[0]), C(d, r[1], r[0]), q(n, n, d), z(i, t[0], t[1]), z(d, r[0], r[1]), q(i, i, d), q(o, t[3], r[3]), q(o, o, f), q(s, t[2], r[2]), z(s, s, s), C(a, i, n), C(u, s, o), z(c, s, o), z(h, i, n), q(t[0], a, u), q(t[1], h, c), q(t[2], c, u), q(t[3], a, h)
                }

                function Q(t, e, r) {
                    var n;
                    for (n = 0; n < 4; n++) O(t[n], e[n], r)
                }

                function tt(t, r) {
                    var n = e(), i = e(), o = e();
                    j(o, r[2]), q(n, r[0], o), q(i, r[1], o), T(t, i), t[31] ^= L(n) << 7
                }

                function et(t, e, r) {
                    var n, i;
                    for (R(t[0], s), R(t[1], a), R(t[2], a), R(t[3], s), i = 255; i >= 0; --i) Q(t, e, n = r[i / 8 | 0] >> (7 & i) & 1), X(e, t), X(t, t), Q(t, e, n)
                }

                function rt(t, r) {
                    var n = [e(), e(), e(), e()];
                    R(n[0], h), R(n[1], d), R(n[2], a), q(n[3], h, d), et(t, n, r)
                }

                function nt(t, r, i) {
                    var o, s = new Uint8Array(64), a = [e(), e(), e(), e()];
                    for (i || n(r, 32), Y(s, r, 32), s[0] &= 248, s[31] &= 127, s[31] |= 64, rt(a, s), tt(t, a), o = 0; o < 32; o++) r[o + 32] = t[o];
                    return 0
                }

                var it = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

                function ot(t, e) {
                    var r, n, i, o;
                    for (n = 63; n >= 32; --n) {
                        for (r = 0, i = n - 32, o = n - 12; i < o; ++i) e[i] += r - 16 * e[n] * it[i - (n - 32)], r = Math.floor((e[i] + 128) / 256), e[i] -= 256 * r;
                        e[i] += r, e[n] = 0
                    }
                    for (r = 0, i = 0; i < 32; i++) e[i] += r - (e[31] >> 4) * it[i], r = e[i] >> 8, e[i] &= 255;
                    for (i = 0; i < 32; i++) e[i] -= r * it[i];
                    for (n = 0; n < 32; n++) e[n + 1] += e[n] >> 8, t[n] = 255 & e[n]
                }

                function st(t) {
                    var e, r = new Float64Array(64);
                    for (e = 0; e < 64; e++) r[e] = t[e];
                    for (e = 0; e < 64; e++) t[e] = 0;
                    ot(t, r)
                }

                function at(t, r, n, i) {
                    var o, s, a = new Uint8Array(64), u = new Uint8Array(64), c = new Uint8Array(64),
                        f = new Float64Array(64), h = [e(), e(), e(), e()];
                    Y(a, i, 32), a[0] &= 248, a[31] &= 127, a[31] |= 64;
                    var d = n + 64;
                    for (o = 0; o < n; o++) t[64 + o] = r[o];
                    for (o = 0; o < 32; o++) t[32 + o] = a[32 + o];
                    for (Y(c, t.subarray(32), n + 32), st(c), rt(h, c), tt(t, h), o = 32; o < 64; o++) t[o] = i[o];
                    for (Y(u, t, n + 64), st(u), o = 0; o < 64; o++) f[o] = 0;
                    for (o = 0; o < 32; o++) f[o] = c[o];
                    for (o = 0; o < 32; o++) for (s = 0; s < 32; s++) f[o + s] += u[o] * a[s];
                    return ot(t.subarray(32), f), d
                }

                function ut(t, r, n, i) {
                    var o, u = new Uint8Array(32), f = new Uint8Array(64), h = [e(), e(), e(), e()],
                        d = [e(), e(), e(), e()];
                    if (n < 64) return -1;
                    if (function (t, r) {
                        var n = e(), i = e(), o = e(), u = e(), f = e(), h = e(), d = e();
                        return R(t[2], a), N(t[1], r), W(o, t[1]), q(u, o, c), C(o, o, t[2]), z(u, t[2], u), W(f, u), W(h, f), q(d, h, f), q(n, d, o), q(n, n, u), K(n, n), q(n, n, o), q(n, n, u), q(n, n, u), q(t[0], n, u), W(i, t[0]), q(i, i, u), U(i, o) && q(t[0], t[0], l), W(i, t[0]), q(i, i, u), U(i, o) ? -1 : (L(t[0]) === r[31] >> 7 && C(t[0], s, t[0]), q(t[3], t[0], t[1]), 0)
                    }(d, i)) return -1;
                    for (o = 0; o < n; o++) t[o] = r[o];
                    for (o = 0; o < 32; o++) t[o + 32] = i[o];
                    if (Y(f, t, n), st(f), et(h, d, f), rt(d, r.subarray(32)), X(h, d), tt(u, h), n -= 64, y(r, 0, u, 0)) {
                        for (o = 0; o < n; o++) t[o] = 0;
                        return -1
                    }
                    for (o = 0; o < n; o++) t[o] = r[o + 64];
                    return n
                }

                var ct = 64, ft = 32, ht = 64;

                function dt(t, e) {
                    if (32 !== t.length) throw new Error("bad key size");
                    if (24 !== e.length) throw new Error("bad nonce size")
                }

                function lt() {
                    for (var t = 0; t < arguments.length; t++) if (!(arguments[t] instanceof Uint8Array)) throw new TypeError("unexpected type, use Uint8Array")
                }

                function pt(t) {
                    for (var e = 0; e < t.length; e++) t[e] = 0
                }

                t.lowlevel = {
                    crypto_core_hsalsa20: w,
                    crypto_stream_xor: A,
                    crypto_stream: _,
                    crypto_stream_salsa20_xor: S,
                    crypto_stream_salsa20: M,
                    crypto_onetimeauth: E,
                    crypto_onetimeauth_verify: I,
                    crypto_verify_16: g,
                    crypto_verify_32: y,
                    crypto_secretbox: B,
                    crypto_secretbox_open: x,
                    crypto_scalarmult: F,
                    crypto_scalarmult_base: D,
                    crypto_box_beforenm: J,
                    crypto_box_afternm: V,
                    crypto_box: function (t, e, r, n, i, o) {
                        var s = new Uint8Array(32);
                        return J(s, i, o), V(t, e, r, n, s)
                    },
                    crypto_box_open: function (t, e, r, n, i, o) {
                        var s = new Uint8Array(32);
                        return J(s, i, o), H(t, e, r, n, s)
                    },
                    crypto_box_keypair: $,
                    crypto_hash: Y,
                    crypto_sign: at,
                    crypto_sign_keypair: nt,
                    crypto_sign_open: ut,
                    crypto_secretbox_KEYBYTES: 32,
                    crypto_secretbox_NONCEBYTES: 24,
                    crypto_secretbox_ZEROBYTES: 32,
                    crypto_secretbox_BOXZEROBYTES: 16,
                    crypto_scalarmult_BYTES: 32,
                    crypto_scalarmult_SCALARBYTES: 32,
                    crypto_box_PUBLICKEYBYTES: 32,
                    crypto_box_SECRETKEYBYTES: 32,
                    crypto_box_BEFORENMBYTES: 32,
                    crypto_box_NONCEBYTES: 24,
                    crypto_box_ZEROBYTES: 32,
                    crypto_box_BOXZEROBYTES: 16,
                    crypto_sign_BYTES: ct,
                    crypto_sign_PUBLICKEYBYTES: ft,
                    crypto_sign_SECRETKEYBYTES: ht,
                    crypto_sign_SEEDBYTES: 32,
                    crypto_hash_BYTES: 64,
                    gf: e,
                    D: c,
                    L: it,
                    pack25519: T,
                    unpack25519: N,
                    M: q,
                    A: z,
                    S: W,
                    Z: C,
                    pow2523: K,
                    add: X,
                    set25519: R,
                    modL: ot,
                    scalarmult: et,
                    scalarbase: rt
                }, t.randomBytes = function (t) {
                    var e = new Uint8Array(t);
                    return n(e, t), e
                }, t.secretbox = function (t, e, r) {
                    lt(t, e, r), dt(r, e);
                    for (var n = new Uint8Array(32 + t.length), i = new Uint8Array(n.length), o = 0; o < t.length; o++) n[o + 32] = t[o];
                    return B(i, n, n.length, e, r), i.subarray(16)
                }, t.secretbox.open = function (t, e, r) {
                    lt(t, e, r), dt(r, e);
                    for (var n = new Uint8Array(16 + t.length), i = new Uint8Array(n.length), o = 0; o < t.length; o++) n[o + 16] = t[o];
                    return n.length < 32 || 0 !== x(i, n, n.length, e, r) ? null : i.subarray(32)
                }, t.secretbox.keyLength = 32, t.secretbox.nonceLength = 24, t.secretbox.overheadLength = 16, t.scalarMult = function (t, e) {
                    if (lt(t, e), 32 !== t.length) throw new Error("bad n size");
                    if (32 !== e.length) throw new Error("bad p size");
                    var r = new Uint8Array(32);
                    return F(r, t, e), r
                }, t.scalarMult.base = function (t) {
                    if (lt(t), 32 !== t.length) throw new Error("bad n size");
                    var e = new Uint8Array(32);
                    return D(e, t), e
                }, t.scalarMult.scalarLength = 32, t.scalarMult.groupElementLength = 32, t.box = function (e, r, n, i) {
                    var o = t.box.before(n, i);
                    return t.secretbox(e, r, o)
                }, t.box.before = function (t, e) {
                    lt(t, e), function (t, e) {
                        if (32 !== t.length) throw new Error("bad public key size");
                        if (32 !== e.length) throw new Error("bad secret key size")
                    }(t, e);
                    var r = new Uint8Array(32);
                    return J(r, t, e), r
                }, t.box.after = t.secretbox, t.box.open = function (e, r, n, i) {
                    var o = t.box.before(n, i);
                    return t.secretbox.open(e, r, o)
                }, t.box.open.after = t.secretbox.open, t.box.keyPair = function () {
                    var t = new Uint8Array(32), e = new Uint8Array(32);
                    return $(t, e), {publicKey: t, secretKey: e}
                }, t.box.keyPair.fromSecretKey = function (t) {
                    if (lt(t), 32 !== t.length) throw new Error("bad secret key size");
                    var e = new Uint8Array(32);
                    return D(e, t), {publicKey: e, secretKey: new Uint8Array(t)}
                }, t.box.publicKeyLength = 32, t.box.secretKeyLength = 32, t.box.sharedKeyLength = 32, t.box.nonceLength = 24, t.box.overheadLength = t.secretbox.overheadLength, t.sign = function (t, e) {
                    if (lt(t, e), e.length !== ht) throw new Error("bad secret key size");
                    var r = new Uint8Array(ct + t.length);
                    return at(r, t, t.length, e), r
                }, t.sign.open = function (t, e) {
                    if (lt(t, e), e.length !== ft) throw new Error("bad public key size");
                    var r = new Uint8Array(t.length), n = ut(r, t, t.length, e);
                    if (n < 0) return null;
                    for (var i = new Uint8Array(n), o = 0; o < i.length; o++) i[o] = r[o];
                    return i
                }, t.sign.detached = function (e, r) {
                    for (var n = t.sign(e, r), i = new Uint8Array(ct), o = 0; o < i.length; o++) i[o] = n[o];
                    return i
                }, t.sign.detached.verify = function (t, e, r) {
                    if (lt(t, e, r), e.length !== ct) throw new Error("bad signature size");
                    if (r.length !== ft) throw new Error("bad public key size");
                    var n, i = new Uint8Array(ct + t.length), o = new Uint8Array(ct + t.length);
                    for (n = 0; n < ct; n++) i[n] = e[n];
                    for (n = 0; n < t.length; n++) i[n + ct] = t[n];
                    return ut(o, i, i.length, r) >= 0
                }, t.sign.keyPair = function () {
                    var t = new Uint8Array(ft), e = new Uint8Array(ht);
                    return nt(t, e), {publicKey: t, secretKey: e}
                }, t.sign.keyPair.fromSecretKey = function (t) {
                    if (lt(t), t.length !== ht) throw new Error("bad secret key size");
                    for (var e = new Uint8Array(ft), r = 0; r < e.length; r++) e[r] = t[32 + r];
                    return {publicKey: e, secretKey: new Uint8Array(t)}
                }, t.sign.keyPair.fromSeed = function (t) {
                    if (lt(t), 32 !== t.length) throw new Error("bad seed size");
                    for (var e = new Uint8Array(ft), r = new Uint8Array(ht), n = 0; n < 32; n++) r[n] = t[n];
                    return nt(e, r, !0), {publicKey: e, secretKey: r}
                }, t.sign.publicKeyLength = ft, t.sign.secretKeyLength = ht, t.sign.seedLength = 32, t.sign.signatureLength = ct, t.hash = function (t) {
                    lt(t);
                    var e = new Uint8Array(64);
                    return Y(e, t, t.length), e
                }, t.hash.hashLength = 64, t.verify = function (t, e) {
                    return lt(t, e), 0 !== t.length && 0 !== e.length && t.length === e.length && 0 === b(t, 0, e, 0, t.length)
                }, t.setPRNG = function (t) {
                    n = t
                }, function () {
                    var e = "undefined" != typeof self ? self.crypto || self.msCrypto : null;
                    e && e.getRandomValues ? t.setPRNG((function (t, r) {
                        var n, i = new Uint8Array(r);
                        for (n = 0; n < r; n += 65536) e.getRandomValues(i.subarray(n, n + Math.min(r - n, 65536)));
                        for (n = 0; n < r; n++) t[n] = i[n];
                        pt(i)
                    })) : (e = r(5024)) && e.randomBytes && t.setPRNG((function (t, r) {
                        var n, i = e.randomBytes(r);
                        for (n = 0; n < r; n++) t[n] = i[n];
                        pt(i)
                    }))
                }()
            }(t.exports ? t.exports : self.nacl = self.nacl || {})
        }, 4608: (t, e, r) => {
            "use strict";
            var n;
            r.d(e, {v4: () => f});
            var i = new Uint8Array(16);

            function o() {
                if (!n && !(n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return n(i)
            }

            const s = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
                a = function (t) {
                    return "string" == typeof t && s.test(t)
                };
            for (var u = [], c = 0; c < 256; ++c) u.push((c + 256).toString(16).substr(1));
            const f = function (t, e, r) {
                var n = (t = t || {}).random || (t.rng || o)();
                if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, e) {
                    r = r || 0;
                    for (var i = 0; i < 16; ++i) e[r + i] = n[i];
                    return e
                }
                return function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = (u[t[e + 0]] + u[t[e + 1]] + u[t[e + 2]] + u[t[e + 3]] + "-" + u[t[e + 4]] + u[t[e + 5]] + "-" + u[t[e + 6]] + u[t[e + 7]] + "-" + u[t[e + 8]] + u[t[e + 9]] + "-" + u[t[e + 10]] + u[t[e + 11]] + u[t[e + 12]] + u[t[e + 13]] + u[t[e + 14]] + u[t[e + 15]]).toLowerCase();
                    if (!a(r)) throw TypeError("Stringified UUID is invalid");
                    return r
                }(n)
            }
        }, 6601: () => {
        }, 9214: () => {
        }, 5568: () => {
        }, 5024: () => {
        }, 8597: t => {
            "use strict";
            t.exports = {i8: "6.5.4"}
        }
    }, e = {};

    function r(n) {
        var i = e[n];
        if (void 0 !== i) return i.exports;
        var o = e[n] = {id: n, loaded: !1, exports: {}};
        return t[n].call(o.exports, o, o.exports, r), o.loaded = !0, o.exports
    }

    r.amdO = {}, r.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return r.d(e, {a: e}), e
    }, r.d = (t, e) => {
        for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {enumerable: !0, get: e[n]})
    }, r.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), r.nmd = t => (t.paths = [], t.children || (t.children = []), t), (() => {
        "use strict";
        var t = r(780), e = r.n(t), n = r(4976), i = r(3550), o = r.n(i), s = r(11), a = r.n(s), u = r(5532),
            c = r(9386), f = r(475);

        class h extends TypeError {
            constructor(t, e) {
                let r;
                const {message: n, ...i} = t, {path: o} = t;
                super(0 === o.length ? n : "At path: " + o.join(".") + " -- " + n), Object.assign(this, i), this.name = this.constructor.name, this.failures = () => {
                    var n;
                    return null != (n = r) ? n : r = [t, ...e()]
                }
            }
        }

        function d(t) {
            return "object" == typeof t && null != t
        }

        function l(t) {
            return "string" == typeof t ? JSON.stringify(t) : "" + t
        }

        function p(t, e, r, n) {
            if (!0 === t) return;
            !1 === t ? t = {} : "string" == typeof t && (t = {message: t});
            const {path: i, branch: o} = e, {type: s} = r, {
                refinement: a,
                message: u = "Expected a value of type `" + s + "`" + (a ? " with refinement `" + a + "`" : "") + ", but received: `" + l(n) + "`"
            } = t;
            return {value: n, type: s, refinement: a, key: i[i.length - 1], path: i, branch: o, ...t, message: u}
        }

        function* b(t, e, r, n) {
            var i;
            d(i = t) && "function" == typeof i[Symbol.iterator] || (t = [t]);
            for (const i of t) {
                const t = p(i, e, r, n);
                t && (yield t)
            }
        }

        function* g(t, e, r = {}) {
            const {path: n = [], branch: i = [t], coerce: o = !1, mask: s = !1} = r, a = {path: n, branch: i};
            if (o && (t = e.coercer(t, a), s && "type" !== e.type && d(e.schema) && d(t) && !Array.isArray(t))) for (const r in t) void 0 === e.schema[r] && delete t[r];
            let u = !0;
            for (const r of e.validator(t, a)) u = !1, yield[r, void 0];
            for (let [r, c, f] of e.entries(t, a)) {
                const e = g(c, f, {
                    path: void 0 === r ? n : [...n, r],
                    branch: void 0 === r ? i : [...i, c],
                    coerce: o,
                    mask: s
                });
                for (const n of e) n[0] ? (u = !1, yield[n[0], void 0]) : o && (c = n[1], void 0 === r ? t = c : t instanceof Map ? t.set(r, c) : t instanceof Set ? t.add(c) : d(t) && (t[r] = c))
            }
            if (u) for (const r of e.refiner(t, a)) u = !1, yield[r, void 0];
            u && (yield[void 0, t])
        }

        class y {
            constructor(t) {
                const {
                    type: e, schema: r, validator: n, refiner: i, coercer: o = (t => t), entries: s = function* () {
                    }
                } = t;
                this.type = e, this.schema = r, this.entries = s, this.coercer = o, this.validator = n ? (t, e) => b(n(t, e), e, this, t) : () => [], this.refiner = i ? (t, e) => b(i(t, e), e, this, t) : () => []
            }

            assert(t) {
                return function (t, e) {
                    const r = v(t, e);
                    if (r[0]) throw r[0]
                }(t, this)
            }

            create(t) {
                return m(t, this)
            }

            is(t) {
                return w(t, this)
            }

            mask(t) {
                return function (t, e) {
                    const r = v(t, e, {coerce: !0, mask: !0});
                    if (r[0]) throw r[0];
                    return r[1]
                }(t, this)
            }

            validate(t, e = {}) {
                return v(t, this, e)
            }
        }

        function m(t, e) {
            const r = v(t, e, {coerce: !0});
            if (r[0]) throw r[0];
            return r[1]
        }

        function w(t, e) {
            return !v(t, e)[0]
        }

        function v(t, e, r = {}) {
            const n = g(t, e, r), i = function (t) {
                const {done: e, value: r} = t.next();
                return e ? void 0 : r
            }(n);
            return i[0] ? [new h(i[0], (function* () {
                for (const t of n) t[0] && (yield t[0])
            })), void 0] : [void 0, i[1]]
        }

        function S(t, e) {
            return new y({type: t, schema: null, validator: e})
        }

        function M(t) {
            return new y({
                type: "array",
                schema: t,
                * entries(e) {
                    if (t && Array.isArray(e)) for (const [r, n] of e.entries()) yield[r, n, t]
                },
                coercer: t => Array.isArray(t) ? t.slice() : t,
                validator: t => Array.isArray(t) || "Expected an array value, but received: " + l(t)
            })
        }

        function _() {
            return S("boolean", (t => "boolean" == typeof t))
        }

        function A(t) {
            return S("instance", (e => e instanceof t || "Expected a `" + t.name + "` instance, but received: " + l(e)))
        }

        function k(t) {
            const e = l(t), r = typeof t;
            return new y({
                type: "literal",
                schema: "string" === r || "number" === r || "boolean" === r ? t : null,
                validator: r => r === t || "Expected the literal `" + e + "`, but received: " + l(r)
            })
        }

        function E(t) {
            return new y({
                ...t,
                validator: (e, r) => null === e || t.validator(e, r),
                refiner: (e, r) => null === e || t.refiner(e, r)
            })
        }

        function I() {
            return S("number", (t => "number" == typeof t && !isNaN(t) || "Expected a number, but received: " + l(t)))
        }

        function B(t) {
            return new y({
                ...t,
                validator: (e, r) => void 0 === e || t.validator(e, r),
                refiner: (e, r) => void 0 === e || t.refiner(e, r)
            })
        }

        function x(t, e) {
            return new y({
                type: "record", schema: null, * entries(r) {
                    if (d(r)) for (const n in r) {
                        const i = r[n];
                        yield[n, n, t], yield[n, i, e]
                    }
                }, validator: t => d(t) || "Expected an object, but received: " + l(t)
            })
        }

        function R() {
            return S("string", (t => "string" == typeof t || "Expected a string, but received: " + l(t)))
        }

        function P(t) {
            const e = S("never", (() => !1));
            return new y({
                type: "tuple", schema: null, * entries(r) {
                    if (Array.isArray(r)) {
                        const n = Math.max(t.length, r.length);
                        for (let i = 0; i < n; i++) yield[i, r[i], t[i] || e]
                    }
                }, validator: t => Array.isArray(t) || "Expected an array, but received: " + l(t)
            })
        }

        function O(t) {
            const e = Object.keys(t);
            return new y({
                type: "type", schema: t, * entries(r) {
                    if (d(r)) for (const n of e) yield[n, r[n], t[n]]
                }, validator: t => d(t) || "Expected an object, but received: " + l(t)
            })
        }

        function T(t) {
            const e = t.map((t => t.type)).join(" | ");
            return new y({
                type: "union", schema: null, validator(r, n) {
                    const i = [];
                    for (const e of t) {
                        const [...t] = g(r, e, n), [o] = t;
                        if (!o[0]) return [];
                        for (const [e] of t) e && i.push(e)
                    }
                    return ["Expected the value to satisfy a union of `" + e + "`, but received: " + l(r), ...i]
                }
            })
        }

        function U() {
            return S("unknown", (() => !0))
        }

        function L(t, e, r) {
            return new y({...t, coercer: (n, i) => w(n, e) ? t.coercer(r(n, i), i) : t.coercer(n, i)})
        }

        var N = r(3937), z = r(1198), C = r.n(z), q = r(7221), W = r.n(q), j = r(1094), K = r.n(j);
        const F = t => n.Buffer.isBuffer(t) ? t : t instanceof Uint8Array ? n.Buffer.from(t.buffer, t.byteOffset, t.byteLength) : n.Buffer.from(t);
        var D = {}, $ = {}, J = V;

        function V(t, e) {
            if (!t) throw new Error(e || "Assertion failed")
        }

        V.equal = function (t, e, r) {
            if (t != e) throw new Error(r || "Assertion failed: " + t + " != " + e)
        };
        var H = {exports: {}};
        "function" == typeof Object.create ? H.exports = function (t, e) {
            e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }))
        } : H.exports = function (t, e) {
            if (e) {
                t.super_ = e;
                var r = function () {
                };
                r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
            }
        };
        var G = J, Z = H.exports;

        function Y(t, e) {
            return 55296 == (64512 & t.charCodeAt(e)) && !(e < 0 || e + 1 >= t.length) && 56320 == (64512 & t.charCodeAt(e + 1))
        }

        function X(t) {
            return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (255 & t) << 24) >>> 0
        }

        function Q(t) {
            return 1 === t.length ? "0" + t : t
        }

        function tt(t) {
            return 7 === t.length ? "0" + t : 6 === t.length ? "00" + t : 5 === t.length ? "000" + t : 4 === t.length ? "0000" + t : 3 === t.length ? "00000" + t : 2 === t.length ? "000000" + t : 1 === t.length ? "0000000" + t : t
        }

        $.inherits = Z, $.toArray = function (t, e) {
            if (Array.isArray(t)) return t.slice();
            if (!t) return [];
            var r = [];
            if ("string" == typeof t) if (e) {
                if ("hex" === e) for ((t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t), i = 0; i < t.length; i += 2) r.push(parseInt(t[i] + t[i + 1], 16))
            } else for (var n = 0, i = 0; i < t.length; i++) {
                var o = t.charCodeAt(i);
                o < 128 ? r[n++] = o : o < 2048 ? (r[n++] = o >> 6 | 192, r[n++] = 63 & o | 128) : Y(t, i) ? (o = 65536 + ((1023 & o) << 10) + (1023 & t.charCodeAt(++i)), r[n++] = o >> 18 | 240, r[n++] = o >> 12 & 63 | 128, r[n++] = o >> 6 & 63 | 128, r[n++] = 63 & o | 128) : (r[n++] = o >> 12 | 224, r[n++] = o >> 6 & 63 | 128, r[n++] = 63 & o | 128)
            } else for (i = 0; i < t.length; i++) r[i] = 0 | t[i];
            return r
        }, $.toHex = function (t) {
            for (var e = "", r = 0; r < t.length; r++) e += Q(t[r].toString(16));
            return e
        }, $.htonl = X, $.toHex32 = function (t, e) {
            for (var r = "", n = 0; n < t.length; n++) {
                var i = t[n];
                "little" === e && (i = X(i)), r += tt(i.toString(16))
            }
            return r
        }, $.zero2 = Q, $.zero8 = tt, $.join32 = function (t, e, r, n) {
            var i = r - e;
            G(i % 4 == 0);
            for (var o = new Array(i / 4), s = 0, a = e; s < o.length; s++, a += 4) {
                var u;
                u = "big" === n ? t[a] << 24 | t[a + 1] << 16 | t[a + 2] << 8 | t[a + 3] : t[a + 3] << 24 | t[a + 2] << 16 | t[a + 1] << 8 | t[a], o[s] = u >>> 0
            }
            return o
        }, $.split32 = function (t, e) {
            for (var r = new Array(4 * t.length), n = 0, i = 0; n < t.length; n++, i += 4) {
                var o = t[n];
                "big" === e ? (r[i] = o >>> 24, r[i + 1] = o >>> 16 & 255, r[i + 2] = o >>> 8 & 255, r[i + 3] = 255 & o) : (r[i + 3] = o >>> 24, r[i + 2] = o >>> 16 & 255, r[i + 1] = o >>> 8 & 255, r[i] = 255 & o)
            }
            return r
        }, $.rotr32 = function (t, e) {
            return t >>> e | t << 32 - e
        }, $.rotl32 = function (t, e) {
            return t << e | t >>> 32 - e
        }, $.sum32 = function (t, e) {
            return t + e >>> 0
        }, $.sum32_3 = function (t, e, r) {
            return t + e + r >>> 0
        }, $.sum32_4 = function (t, e, r, n) {
            return t + e + r + n >>> 0
        }, $.sum32_5 = function (t, e, r, n, i) {
            return t + e + r + n + i >>> 0
        }, $.sum64 = function (t, e, r, n) {
            var i = t[e], o = n + t[e + 1] >>> 0, s = (o < n ? 1 : 0) + r + i;
            t[e] = s >>> 0, t[e + 1] = o
        }, $.sum64_hi = function (t, e, r, n) {
            return (e + n >>> 0 < e ? 1 : 0) + t + r >>> 0
        }, $.sum64_lo = function (t, e, r, n) {
            return e + n >>> 0
        }, $.sum64_4_hi = function (t, e, r, n, i, o, s, a) {
            var u = 0, c = e;
            return u += (c = c + n >>> 0) < e ? 1 : 0, u += (c = c + o >>> 0) < o ? 1 : 0, t + r + i + s + (u += (c = c + a >>> 0) < a ? 1 : 0) >>> 0
        }, $.sum64_4_lo = function (t, e, r, n, i, o, s, a) {
            return e + n + o + a >>> 0
        }, $.sum64_5_hi = function (t, e, r, n, i, o, s, a, u, c) {
            var f = 0, h = e;
            return f += (h = h + n >>> 0) < e ? 1 : 0, f += (h = h + o >>> 0) < o ? 1 : 0, f += (h = h + a >>> 0) < a ? 1 : 0, t + r + i + s + u + (f += (h = h + c >>> 0) < c ? 1 : 0) >>> 0
        }, $.sum64_5_lo = function (t, e, r, n, i, o, s, a, u, c) {
            return e + n + o + a + c >>> 0
        }, $.rotr64_hi = function (t, e, r) {
            return (e << 32 - r | t >>> r) >>> 0
        }, $.rotr64_lo = function (t, e, r) {
            return (t << 32 - r | e >>> r) >>> 0
        }, $.shr64_hi = function (t, e, r) {
            return t >>> r
        }, $.shr64_lo = function (t, e, r) {
            return (t << 32 - r | e >>> r) >>> 0
        };
        var et = {}, rt = $, nt = J;

        function it() {
            this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
        }

        et.BlockHash = it, it.prototype.update = function (t, e) {
            if (t = rt.toArray(t, e), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
                var r = (t = this.pending).length % this._delta8;
                this.pending = t.slice(t.length - r, t.length), 0 === this.pending.length && (this.pending = null), t = rt.join32(t, 0, t.length - r, this.endian);
                for (var n = 0; n < t.length; n += this._delta32) this._update(t, n, n + this._delta32)
            }
            return this
        }, it.prototype.digest = function (t) {
            return this.update(this._pad()), nt(null === this.pending), this._digest(t)
        }, it.prototype._pad = function () {
            var t = this.pendingTotal, e = this._delta8, r = e - (t + this.padLength) % e,
                n = new Array(r + this.padLength);
            n[0] = 128;
            for (var i = 1; i < r; i++) n[i] = 0;
            if (t <<= 3, "big" === this.endian) {
                for (var o = 8; o < this.padLength; o++) n[i++] = 0;
                n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = t >>> 24 & 255, n[i++] = t >>> 16 & 255, n[i++] = t >>> 8 & 255, n[i++] = 255 & t
            } else for (n[i++] = 255 & t, n[i++] = t >>> 8 & 255, n[i++] = t >>> 16 & 255, n[i++] = t >>> 24 & 255, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, o = 8; o < this.padLength; o++) n[i++] = 0;
            return n
        };
        var ot = {}, st = {}, at = $.rotr32;

        function ut(t, e, r) {
            return t & e ^ ~t & r
        }

        function ct(t, e, r) {
            return t & e ^ t & r ^ e & r
        }

        function ft(t, e, r) {
            return t ^ e ^ r
        }

        st.ft_1 = function (t, e, r, n) {
            return 0 === t ? ut(e, r, n) : 1 === t || 3 === t ? ft(e, r, n) : 2 === t ? ct(e, r, n) : void 0
        }, st.ch32 = ut, st.maj32 = ct, st.p32 = ft, st.s0_256 = function (t) {
            return at(t, 2) ^ at(t, 13) ^ at(t, 22)
        }, st.s1_256 = function (t) {
            return at(t, 6) ^ at(t, 11) ^ at(t, 25)
        }, st.g0_256 = function (t) {
            return at(t, 7) ^ at(t, 18) ^ t >>> 3
        }, st.g1_256 = function (t) {
            return at(t, 17) ^ at(t, 19) ^ t >>> 10
        };
        var ht = $, dt = et, lt = st, pt = ht.rotl32, bt = ht.sum32, gt = ht.sum32_5, yt = lt.ft_1, mt = dt.BlockHash,
            wt = [1518500249, 1859775393, 2400959708, 3395469782];

        function vt() {
            if (!(this instanceof vt)) return new vt;
            mt.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80)
        }

        ht.inherits(vt, mt);
        var St = vt;
        vt.blockSize = 512, vt.outSize = 160, vt.hmacStrength = 80, vt.padLength = 64, vt.prototype._update = function (t, e) {
            for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n];
            for (; n < r.length; n++) r[n] = pt(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
            var i = this.h[0], o = this.h[1], s = this.h[2], a = this.h[3], u = this.h[4];
            for (n = 0; n < r.length; n++) {
                var c = ~~(n / 20), f = gt(pt(i, 5), yt(c, o, s, a), u, r[n], wt[c]);
                u = a, a = s, s = pt(o, 30), o = i, i = f
            }
            this.h[0] = bt(this.h[0], i), this.h[1] = bt(this.h[1], o), this.h[2] = bt(this.h[2], s), this.h[3] = bt(this.h[3], a), this.h[4] = bt(this.h[4], u)
        }, vt.prototype._digest = function (t) {
            return "hex" === t ? ht.toHex32(this.h, "big") : ht.split32(this.h, "big")
        };
        var Mt = $, _t = et, At = st, kt = J, Et = Mt.sum32, It = Mt.sum32_4, Bt = Mt.sum32_5, xt = At.ch32,
            Rt = At.maj32, Pt = At.s0_256, Ot = At.s1_256, Tt = At.g0_256, Ut = At.g1_256, Lt = _t.BlockHash,
            Nt = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

        function zt() {
            if (!(this instanceof zt)) return new zt;
            Lt.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = Nt, this.W = new Array(64)
        }

        Mt.inherits(zt, Lt);
        var Ct = zt;
        zt.blockSize = 512, zt.outSize = 256, zt.hmacStrength = 192, zt.padLength = 64, zt.prototype._update = function (t, e) {
            for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n];
            for (; n < r.length; n++) r[n] = It(Ut(r[n - 2]), r[n - 7], Tt(r[n - 15]), r[n - 16]);
            var i = this.h[0], o = this.h[1], s = this.h[2], a = this.h[3], u = this.h[4], c = this.h[5], f = this.h[6],
                h = this.h[7];
            for (kt(this.k.length === r.length), n = 0; n < r.length; n++) {
                var d = Bt(h, Ot(u), xt(u, c, f), this.k[n], r[n]), l = Et(Pt(i), Rt(i, o, s));
                h = f, f = c, c = u, u = Et(a, d), a = s, s = o, o = i, i = Et(d, l)
            }
            this.h[0] = Et(this.h[0], i), this.h[1] = Et(this.h[1], o), this.h[2] = Et(this.h[2], s), this.h[3] = Et(this.h[3], a), this.h[4] = Et(this.h[4], u), this.h[5] = Et(this.h[5], c), this.h[6] = Et(this.h[6], f), this.h[7] = Et(this.h[7], h)
        }, zt.prototype._digest = function (t) {
            return "hex" === t ? Mt.toHex32(this.h, "big") : Mt.split32(this.h, "big")
        };
        var qt = $, Wt = Ct;

        function jt() {
            if (!(this instanceof jt)) return new jt;
            Wt.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
        }

        qt.inherits(jt, Wt);
        var Kt = jt;
        jt.blockSize = 512, jt.outSize = 224, jt.hmacStrength = 192, jt.padLength = 64, jt.prototype._digest = function (t) {
            return "hex" === t ? qt.toHex32(this.h.slice(0, 7), "big") : qt.split32(this.h.slice(0, 7), "big")
        };
        var Ft = $, Dt = et, $t = J, Jt = Ft.rotr64_hi, Vt = Ft.rotr64_lo, Ht = Ft.shr64_hi, Gt = Ft.shr64_lo,
            Zt = Ft.sum64, Yt = Ft.sum64_hi, Xt = Ft.sum64_lo, Qt = Ft.sum64_4_hi, te = Ft.sum64_4_lo,
            ee = Ft.sum64_5_hi, re = Ft.sum64_5_lo, ne = Dt.BlockHash,
            ie = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

        function oe() {
            if (!(this instanceof oe)) return new oe;
            ne.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = ie, this.W = new Array(160)
        }

        Ft.inherits(oe, ne);
        var se = oe;

        function ae(t, e, r, n, i) {
            var o = t & r ^ ~t & i;
            return o < 0 && (o += 4294967296), o
        }

        function ue(t, e, r, n, i, o) {
            var s = e & n ^ ~e & o;
            return s < 0 && (s += 4294967296), s
        }

        function ce(t, e, r, n, i) {
            var o = t & r ^ t & i ^ r & i;
            return o < 0 && (o += 4294967296), o
        }

        function fe(t, e, r, n, i, o) {
            var s = e & n ^ e & o ^ n & o;
            return s < 0 && (s += 4294967296), s
        }

        function he(t, e) {
            var r = Jt(t, e, 28) ^ Jt(e, t, 2) ^ Jt(e, t, 7);
            return r < 0 && (r += 4294967296), r
        }

        function de(t, e) {
            var r = Vt(t, e, 28) ^ Vt(e, t, 2) ^ Vt(e, t, 7);
            return r < 0 && (r += 4294967296), r
        }

        function le(t, e) {
            var r = Jt(t, e, 14) ^ Jt(t, e, 18) ^ Jt(e, t, 9);
            return r < 0 && (r += 4294967296), r
        }

        function pe(t, e) {
            var r = Vt(t, e, 14) ^ Vt(t, e, 18) ^ Vt(e, t, 9);
            return r < 0 && (r += 4294967296), r
        }

        function be(t, e) {
            var r = Jt(t, e, 1) ^ Jt(t, e, 8) ^ Ht(t, e, 7);
            return r < 0 && (r += 4294967296), r
        }

        function ge(t, e) {
            var r = Vt(t, e, 1) ^ Vt(t, e, 8) ^ Gt(t, e, 7);
            return r < 0 && (r += 4294967296), r
        }

        function ye(t, e) {
            var r = Jt(t, e, 19) ^ Jt(e, t, 29) ^ Ht(t, e, 6);
            return r < 0 && (r += 4294967296), r
        }

        function me(t, e) {
            var r = Vt(t, e, 19) ^ Vt(e, t, 29) ^ Gt(t, e, 6);
            return r < 0 && (r += 4294967296), r
        }

        oe.blockSize = 1024, oe.outSize = 512, oe.hmacStrength = 192, oe.padLength = 128, oe.prototype._prepareBlock = function (t, e) {
            for (var r = this.W, n = 0; n < 32; n++) r[n] = t[e + n];
            for (; n < r.length; n += 2) {
                var i = ye(r[n - 4], r[n - 3]), o = me(r[n - 4], r[n - 3]), s = r[n - 14], a = r[n - 13],
                    u = be(r[n - 30], r[n - 29]), c = ge(r[n - 30], r[n - 29]), f = r[n - 32], h = r[n - 31];
                r[n] = Qt(i, o, s, a, u, c, f, h), r[n + 1] = te(i, o, s, a, u, c, f, h)
            }
        }, oe.prototype._update = function (t, e) {
            this._prepareBlock(t, e);
            var r = this.W, n = this.h[0], i = this.h[1], o = this.h[2], s = this.h[3], a = this.h[4], u = this.h[5],
                c = this.h[6], f = this.h[7], h = this.h[8], d = this.h[9], l = this.h[10], p = this.h[11],
                b = this.h[12], g = this.h[13], y = this.h[14], m = this.h[15];
            $t(this.k.length === r.length);
            for (var w = 0; w < r.length; w += 2) {
                var v = y, S = m, M = le(h, d), _ = pe(h, d), A = ae(h, 0, l, 0, b), k = ue(0, d, 0, p, 0, g),
                    E = this.k[w], I = this.k[w + 1], B = r[w], x = r[w + 1], R = ee(v, S, M, _, A, k, E, I, B, x),
                    P = re(v, S, M, _, A, k, E, I, B, x);
                v = he(n, i), S = de(n, i), M = ce(n, 0, o, 0, a), _ = fe(0, i, 0, s, 0, u);
                var O = Yt(v, S, M, _), T = Xt(v, S, M, _);
                y = b, m = g, b = l, g = p, l = h, p = d, h = Yt(c, f, R, P), d = Xt(f, f, R, P), c = a, f = u, a = o, u = s, o = n, s = i, n = Yt(R, P, O, T), i = Xt(R, P, O, T)
            }
            Zt(this.h, 0, n, i), Zt(this.h, 2, o, s), Zt(this.h, 4, a, u), Zt(this.h, 6, c, f), Zt(this.h, 8, h, d), Zt(this.h, 10, l, p), Zt(this.h, 12, b, g), Zt(this.h, 14, y, m)
        }, oe.prototype._digest = function (t) {
            return "hex" === t ? Ft.toHex32(this.h, "big") : Ft.split32(this.h, "big")
        };
        var we = $, ve = se;

        function Se() {
            if (!(this instanceof Se)) return new Se;
            ve.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
        }

        we.inherits(Se, ve);
        var Me = Se;
        Se.blockSize = 1024, Se.outSize = 384, Se.hmacStrength = 192, Se.padLength = 128, Se.prototype._digest = function (t) {
            return "hex" === t ? we.toHex32(this.h.slice(0, 12), "big") : we.split32(this.h.slice(0, 12), "big")
        }, ot.sha1 = St, ot.sha224 = Kt, ot.sha256 = Ct, ot.sha384 = Me, ot.sha512 = se;
        var _e = {}, Ae = $, ke = et, Ee = Ae.rotl32, Ie = Ae.sum32, Be = Ae.sum32_3, xe = Ae.sum32_4,
            Re = ke.BlockHash;

        function Pe() {
            if (!(this instanceof Pe)) return new Pe;
            Re.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
        }

        function Oe(t, e, r, n) {
            return t <= 15 ? e ^ r ^ n : t <= 31 ? e & r | ~e & n : t <= 47 ? (e | ~r) ^ n : t <= 63 ? e & n | r & ~n : e ^ (r | ~n)
        }

        function Te(t) {
            return t <= 15 ? 0 : t <= 31 ? 1518500249 : t <= 47 ? 1859775393 : t <= 63 ? 2400959708 : 2840853838
        }

        function Ue(t) {
            return t <= 15 ? 1352829926 : t <= 31 ? 1548603684 : t <= 47 ? 1836072691 : t <= 63 ? 2053994217 : 0
        }

        Ae.inherits(Pe, Re), _e.ripemd160 = Pe, Pe.blockSize = 512, Pe.outSize = 160, Pe.hmacStrength = 192, Pe.padLength = 64, Pe.prototype._update = function (t, e) {
            for (var r = this.h[0], n = this.h[1], i = this.h[2], o = this.h[3], s = this.h[4], a = r, u = n, c = i, f = o, h = s, d = 0; d < 80; d++) {
                var l = Ie(Ee(xe(r, Oe(d, n, i, o), t[Le[d] + e], Te(d)), ze[d]), s);
                r = s, s = o, o = Ee(i, 10), i = n, n = l, l = Ie(Ee(xe(a, Oe(79 - d, u, c, f), t[Ne[d] + e], Ue(d)), Ce[d]), h), a = h, h = f, f = Ee(c, 10), c = u, u = l
            }
            l = Be(this.h[1], i, f), this.h[1] = Be(this.h[2], o, h), this.h[2] = Be(this.h[3], s, a), this.h[3] = Be(this.h[4], r, u), this.h[4] = Be(this.h[0], n, c), this.h[0] = l
        }, Pe.prototype._digest = function (t) {
            return "hex" === t ? Ae.toHex32(this.h, "little") : Ae.split32(this.h, "little")
        };
        var Le = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
            Ne = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
            ze = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
            Ce = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
            qe = $, We = J;

        function je(t, e, r) {
            if (!(this instanceof je)) return new je(t, e, r);
            this.Hash = t, this.blockSize = t.blockSize / 8, this.outSize = t.outSize / 8, this.inner = null, this.outer = null, this._init(qe.toArray(e, r))
        }

        var Ke = je;
        je.prototype._init = function (t) {
            t.length > this.blockSize && (t = (new this.Hash).update(t).digest()), We(t.length <= this.blockSize);
            for (var e = t.length; e < this.blockSize; e++) t.push(0);
            for (e = 0; e < t.length; e++) t[e] ^= 54;
            for (this.inner = (new this.Hash).update(t), e = 0; e < t.length; e++) t[e] ^= 106;
            this.outer = (new this.Hash).update(t)
        }, je.prototype.update = function (t, e) {
            return this.inner.update(t, e), this
        }, je.prototype.digest = function (t) {
            return this.outer.update(this.inner.digest()), this.outer.digest(t)
        }, function (t) {
            var e = t;
            e.utils = $, e.common = et, e.sha = ot, e.ripemd = _e, e.hmac = Ke, e.sha1 = e.sha.sha1, e.sha256 = e.sha.sha256, e.sha224 = e.sha.sha224, e.sha384 = e.sha.sha384, e.sha512 = e.sha.sha512, e.ripemd160 = e.ripemd.ripemd160
        }(D);
        var Fe = D;
        let De = !1, $e = !1;
        const Je = {debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5};
        let Ve = Je.default, He = null;
        const Ge = function () {
            try {
                const t = [];
                if (["NFD", "NFC", "NFKD", "NFKC"].forEach((e => {
                    try {
                        if ("test" !== "test".normalize(e)) throw new Error("bad normalize")
                    } catch (r) {
                        t.push(e)
                    }
                })), t.length) throw new Error("missing " + t.join(", "));
                if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
            } catch (t) {
                return t.message
            }
            return null
        }();
        var Ze, Ye;
        !function (t) {
            t.DEBUG = "DEBUG", t.INFO = "INFO", t.WARNING = "WARNING", t.ERROR = "ERROR", t.OFF = "OFF"
        }(Ze || (Ze = {})), function (t) {
            t.UNKNOWN_ERROR = "UNKNOWN_ERROR", t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", t.NETWORK_ERROR = "NETWORK_ERROR", t.SERVER_ERROR = "SERVER_ERROR", t.TIMEOUT = "TIMEOUT", t.BUFFER_OVERRUN = "BUFFER_OVERRUN", t.NUMERIC_FAULT = "NUMERIC_FAULT", t.MISSING_NEW = "MISSING_NEW", t.INVALID_ARGUMENT = "INVALID_ARGUMENT", t.MISSING_ARGUMENT = "MISSING_ARGUMENT", t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", t.CALL_EXCEPTION = "CALL_EXCEPTION", t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", t.NONCE_EXPIRED = "NONCE_EXPIRED", t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", t.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", t.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
        }(Ye || (Ye = {}));
        const Xe = "0123456789abcdef";

        class Qe {
            constructor(t) {
                Object.defineProperty(this, "version", {enumerable: !0, value: t, writable: !1})
            }

            _log(t, e) {
                const r = t.toLowerCase();
                null == Je[r] && this.throwArgumentError("invalid log level name", "logLevel", t), Ve > Je[r] || console.log.apply(console, e)
            }

            debug(...t) {
                this._log(Qe.levels.DEBUG, t)
            }

            info(...t) {
                this._log(Qe.levels.INFO, t)
            }

            warn(...t) {
                this._log(Qe.levels.WARNING, t)
            }

            makeError(t, e, r) {
                if ($e) return this.makeError("censored error", e, {});
                e || (e = Qe.errors.UNKNOWN_ERROR), r || (r = {});
                const n = [];
                Object.keys(r).forEach((t => {
                    const e = r[t];
                    try {
                        if (e instanceof Uint8Array) {
                            let r = "";
                            for (let t = 0; t < e.length; t++) r += Xe[e[t] >> 4], r += Xe[15 & e[t]];
                            n.push(t + "=Uint8Array(0x" + r + ")")
                        } else n.push(t + "=" + JSON.stringify(e))
                    } catch (e) {
                        n.push(t + "=" + JSON.stringify(r[t].toString()))
                    }
                })), n.push(`code=${e}`), n.push(`version=${this.version}`);
                const i = t;
                let o = "";
                switch (e) {
                    case Ye.NUMERIC_FAULT: {
                        o = "NUMERIC_FAULT";
                        const e = t;
                        switch (e) {
                            case"overflow":
                            case"underflow":
                            case"division-by-zero":
                                o += "-" + e;
                                break;
                            case"negative-power":
                            case"negative-width":
                                o += "-unsupported";
                                break;
                            case"unbound-bitwise-result":
                                o += "-unbound-result"
                        }
                        break
                    }
                    case Ye.CALL_EXCEPTION:
                    case Ye.INSUFFICIENT_FUNDS:
                    case Ye.MISSING_NEW:
                    case Ye.NONCE_EXPIRED:
                    case Ye.REPLACEMENT_UNDERPRICED:
                    case Ye.TRANSACTION_REPLACED:
                    case Ye.UNPREDICTABLE_GAS_LIMIT:
                        o = e
                }
                o && (t += " [ See: https://links.ethers.org/v5-errors-" + o + " ]"), n.length && (t += " (" + n.join(", ") + ")");
                const s = new Error(t);
                return s.reason = i, s.code = e, Object.keys(r).forEach((function (t) {
                    s[t] = r[t]
                })), s
            }

            throwError(t, e, r) {
                throw this.makeError(t, e, r)
            }

            throwArgumentError(t, e, r) {
                return this.throwError(t, Qe.errors.INVALID_ARGUMENT, {argument: e, value: r})
            }

            assert(t, e, r, n) {
                t || this.throwError(e, r, n)
            }

            assertArgument(t, e, r, n) {
                t || this.throwArgumentError(e, r, n)
            }

            checkNormalize(t) {
                Ge && this.throwError("platform missing String.prototype.normalize", Qe.errors.UNSUPPORTED_OPERATION, {
                    operation: "String.prototype.normalize",
                    form: Ge
                })
            }

            checkSafeUint53(t, e) {
                "number" == typeof t && (null == e && (e = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(e, Qe.errors.NUMERIC_FAULT, {
                    operation: "checkSafeInteger",
                    fault: "out-of-safe-range",
                    value: t
                }), t % 1 && this.throwError(e, Qe.errors.NUMERIC_FAULT, {
                    operation: "checkSafeInteger",
                    fault: "non-integer",
                    value: t
                }))
            }

            checkArgumentCount(t, e, r) {
                r = r ? ": " + r : "", t < e && this.throwError("missing argument" + r, Qe.errors.MISSING_ARGUMENT, {
                    count: t,
                    expectedCount: e
                }), t > e && this.throwError("too many arguments" + r, Qe.errors.UNEXPECTED_ARGUMENT, {
                    count: t,
                    expectedCount: e
                })
            }

            checkNew(t, e) {
                t !== Object && null != t || this.throwError("missing new", Qe.errors.MISSING_NEW, {name: e.name})
            }

            checkAbstract(t, e) {
                t === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", Qe.errors.UNSUPPORTED_OPERATION, {
                    name: t.name,
                    operation: "new"
                }) : t !== Object && null != t || this.throwError("missing new", Qe.errors.MISSING_NEW, {name: e.name})
            }

            static globalLogger() {
                return He || (He = new Qe("logger/5.6.0")), He
            }

            static setCensorship(t, e) {
                if (!t && e && this.globalLogger().throwError("cannot permanently disable censorship", Qe.errors.UNSUPPORTED_OPERATION, {operation: "setCensorship"}), De) {
                    if (!t) return;
                    this.globalLogger().throwError("error censorship permanent", Qe.errors.UNSUPPORTED_OPERATION, {operation: "setCensorship"})
                }
                $e = !!t, De = !!e
            }

            static setLogLevel(t) {
                const e = Je[t.toLowerCase()];
                null != e ? Ve = e : Qe.globalLogger().warn("invalid log level - " + t)
            }

            static from(t) {
                return new Qe(t)
            }
        }

        Qe.errors = Ye, Qe.levels = Ze;
        const tr = new Qe("bytes/5.6.0");

        function er(t) {
            return t.slice || (t.slice = function () {
                const e = Array.prototype.slice.call(arguments);
                return er(new Uint8Array(Array.prototype.slice.apply(t, e)))
            }), t
        }

        function rr(t) {
            return "number" == typeof t && t == t && t % 1 == 0
        }

        function nr(t) {
            return "0x" + Fe.sha256().update(function (t, e) {
                if (e || (e = {}), "number" == typeof t) {
                    tr.checkSafeUint53(t, "invalid arrayify value");
                    const e = [];
                    for (; t;) e.unshift(255 & t), t = parseInt(String(t / 256));
                    return 0 === e.length && e.push(0), er(new Uint8Array(e))
                }
                if (e.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), function (t) {
                    return !!t.toHexString
                }(t) && (t = t.toHexString()), function (t, e) {
                    return !("string" != typeof t || !t.match(/^0x[0-9A-Fa-f]*$/))
                }(t)) {
                    let r = t.substring(2);
                    r.length % 2 && ("left" === e.hexPad ? r = "0x0" + r.substring(2) : "right" === e.hexPad ? r += "0" : tr.throwArgumentError("hex data is odd-length", "value", t));
                    const n = [];
                    for (let t = 0; t < r.length; t += 2) n.push(parseInt(r.substring(t, t + 2), 16));
                    return er(new Uint8Array(n))
                }
                return function (t) {
                    if (null == t) return !1;
                    if (t.constructor === Uint8Array) return !0;
                    if ("string" == typeof t) return !1;
                    if (!rr(t.length) || t.length < 0) return !1;
                    for (let e = 0; e < t.length; e++) {
                        const r = t[e];
                        if (!rr(r) || r < 0 || r >= 256) return !1
                    }
                    return !0
                }(t) ? er(new Uint8Array(t)) : tr.throwArgumentError("invalid arrayify value", "value", t)
            }(t)).digest("hex")
        }

        new Qe("sha2/5.6.0");
        const ir = new Map, or = 32;

        class sr extends class {
            constructor(t) {
                Object.assign(this, t)
            }

            encode() {
                return n.Buffer.from((0, u.serialize)(ir, this))
            }

            static decode(t) {
                return (0, u.deserialize)(ir, this, t)
            }

            static decodeUnchecked(t) {
                return (0, u.deserializeUnchecked)(ir, this, t)
            }
        } {
            constructor(t) {
                if (super({}), this._bn = void 0, function (t) {
                    return void 0 !== t._bn
                }(t)) this._bn = t._bn; else {
                    if ("string" == typeof t) {
                        const e = a().decode(t);
                        if (e.length != or) throw new Error("Invalid public key input");
                        this._bn = new (o())(e)
                    } else this._bn = new (o())(t);
                    if (this._bn.byteLength() > 32) throw new Error("Invalid public key input")
                }
            }

            equals(t) {
                return this._bn.eq(t._bn)
            }

            toBase58() {
                return a().encode(this.toBytes())
            }

            toJSON() {
                return this.toBase58()
            }

            toBytes() {
                return this.toBuffer()
            }

            toBuffer() {
                const t = this._bn.toArrayLike(n.Buffer);
                if (t.length === or) return t;
                const e = n.Buffer.alloc(32);
                return t.copy(e, 32 - t.length), e
            }

            toString() {
                return this.toBase58()
            }

            static async createWithSeed(t, e, r) {
                const i = n.Buffer.concat([t.toBuffer(), n.Buffer.from(e), r.toBuffer()]),
                    o = nr(new Uint8Array(i)).slice(2);
                return new sr(n.Buffer.from(o, "hex"))
            }

            static createProgramAddressSync(t, e) {
                let r = n.Buffer.alloc(0);
                t.forEach((function (t) {
                    if (t.length > 32) throw new TypeError("Max seed length exceeded");
                    r = n.Buffer.concat([r, F(t)])
                })), r = n.Buffer.concat([r, e.toBuffer(), n.Buffer.from("ProgramDerivedAddress")]);
                let i = nr(new Uint8Array(r)).slice(2), s = new (o())(i, 16).toArray(void 0, 32);
                if (ur(s)) throw new Error("Invalid seeds, address must fall off the curve");
                return new sr(s)
            }

            static async createProgramAddress(t, e) {
                return this.createProgramAddressSync(t, e)
            }

            static findProgramAddressSync(t, e) {
                let r, i = 255;
                for (; 0 != i;) {
                    try {
                        const o = t.concat(n.Buffer.from([i]));
                        r = this.createProgramAddressSync(o, e)
                    } catch (t) {
                        if (t instanceof TypeError) throw t;
                        i--;
                        continue
                    }
                    return [r, i]
                }
                throw new Error("Unable to find a viable program address nonce")
            }

            static async findProgramAddress(t, e) {
                return this.findProgramAddressSync(t, e)
            }

            static isOnCurve(t) {
                return 1 == ur(new sr(t).toBytes())
            }
        }

        sr.default = new sr("11111111111111111111111111111111"), ir.set(sr, {
            kind: "struct",
            fields: [["_bn", "u256"]]
        });
        let ar = e().lowlevel;

        function ur(t) {
            var e = [ar.gf(), ar.gf(), ar.gf(), ar.gf()], r = ar.gf(), n = ar.gf(), i = ar.gf(), o = ar.gf(),
                s = ar.gf(), a = ar.gf(), u = ar.gf();
            return ar.set25519(e[2], cr), ar.unpack25519(e[1], t), ar.S(i, e[1]), ar.M(o, i, ar.D), ar.Z(i, i, e[2]), ar.A(o, e[2], o), ar.S(s, o), ar.S(a, s), ar.M(u, a, s), ar.M(r, u, i), ar.M(r, r, o), ar.pow2523(r, r), ar.M(r, r, i), ar.M(r, r, o), ar.M(r, r, o), ar.M(e[0], r, o), ar.S(n, e[0]), ar.M(n, n, o), hr(n, i) && ar.M(e[0], e[0], fr), ar.S(n, e[0]), ar.M(n, n, o), hr(n, i) ? 0 : 1
        }

        let cr = ar.gf([1]),
            fr = ar.gf([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

        function hr(t, e) {
            var r = new Uint8Array(32), n = new Uint8Array(32);
            return ar.pack25519(r, t), ar.pack25519(n, e), ar.crypto_verify_32(r, 0, n, 0)
        }

        new sr("BPFLoader1111111111111111111111111111111111");

        class dr extends Error {
            constructor(t) {
                super(`Signature ${t} has expired: block height exceeded.`), this.signature = void 0, this.signature = t
            }
        }

        Object.defineProperty(dr.prototype, "name", {value: "TransactionExpiredBlockheightExceededError"});

        class lr extends Error {
            constructor(t, e) {
                super(`Transaction was not confirmed in ${e.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${t} using the Solana Explorer or CLI tools.`), this.signature = void 0, this.signature = t
            }
        }

        Object.defineProperty(lr.prototype, "name", {value: "TransactionExpiredTimeoutError"});
        const pr = (t = "publicKey") => c.Ik(32, t), br = (t = "string") => {
            const e = c.n_([c.Jq("length"), c.Jq("lengthPadding"), c.Ik(c.cv(c.Jq(), -8), "chars")], t),
                r = e.decode.bind(e), i = e.encode.bind(e), o = e;
            return o.decode = (t, e) => r(t, e).chars.toString(), o.encode = (t, e, r) => {
                const o = {chars: n.Buffer.from(t, "utf8")};
                return i(o, e, r)
            }, o.alloc = t => c.Jq().span + c.Jq().span + n.Buffer.from(t, "utf8").length, o
        };

        function gr(t) {
            let e = 0, r = 0;
            for (; ;) {
                let n = t.shift();
                if (e |= (127 & n) << 7 * r, r += 1, 0 == (128 & n)) break
            }
            return e
        }

        function yr(t, e) {
            let r = e;
            for (; ;) {
                let e = 127 & r;
                if (r >>= 7, 0 == r) {
                    t.push(e);
                    break
                }
                e |= 128, t.push(e)
            }
        }

        class mr {
            constructor(t) {
                this.header = void 0, this.accountKeys = void 0, this.recentBlockhash = void 0, this.instructions = void 0, this.indexToProgramIds = new Map, this.header = t.header, this.accountKeys = t.accountKeys.map((t => new sr(t))), this.recentBlockhash = t.recentBlockhash, this.instructions = t.instructions, this.instructions.forEach((t => this.indexToProgramIds.set(t.programIdIndex, this.accountKeys[t.programIdIndex])))
            }

            get version() {
                return "legacy"
            }

            get staticAccountKeys() {
                return this.accountKeys
            }

            get compiledInstructions() {
                return this.instructions.map((t => ({
                    programIdIndex: t.programIdIndex,
                    accountKeyIndexes: t.accounts,
                    data: a().decode(t.data)
                })))
            }

            get addressTableLookups() {
                return []
            }

            isAccountSigner(t) {
                return t < this.header.numRequiredSignatures
            }

            isAccountWritable(t) {
                return t < this.header.numRequiredSignatures - this.header.numReadonlySignedAccounts || t >= this.header.numRequiredSignatures && t < this.accountKeys.length - this.header.numReadonlyUnsignedAccounts
            }

            isProgramId(t) {
                return this.indexToProgramIds.has(t)
            }

            programIds() {
                return [...this.indexToProgramIds.values()]
            }

            nonProgramIds() {
                return this.accountKeys.filter(((t, e) => !this.isProgramId(e)))
            }

            serialize() {
                const t = this.accountKeys.length;
                let e = [];
                yr(e, t);
                const r = this.instructions.map((t => {
                    const {accounts: e, programIdIndex: r} = t, i = Array.from(a().decode(t.data));
                    let o = [];
                    yr(o, e.length);
                    let s = [];
                    return yr(s, i.length), {
                        programIdIndex: r,
                        keyIndicesCount: n.Buffer.from(o),
                        keyIndices: e,
                        dataLength: n.Buffer.from(s),
                        data: i
                    }
                }));
                let i = [];
                yr(i, r.length);
                let o = n.Buffer.alloc(1232);
                n.Buffer.from(i).copy(o);
                let s = i.length;
                r.forEach((t => {
                    const e = c.n_([c.u8("programIdIndex"), c.Ik(t.keyIndicesCount.length, "keyIndicesCount"), c.A9(c.u8("keyIndex"), t.keyIndices.length, "keyIndices"), c.Ik(t.dataLength.length, "dataLength"), c.A9(c.u8("userdatum"), t.data.length, "data")]).encode(t, o, s);
                    s += e
                })), o = o.slice(0, s);
                const u = c.n_([c.Ik(1, "numRequiredSignatures"), c.Ik(1, "numReadonlySignedAccounts"), c.Ik(1, "numReadonlyUnsignedAccounts"), c.Ik(e.length, "keyCount"), c.A9(pr("key"), t, "keys"), pr("recentBlockhash")]),
                    f = {
                        numRequiredSignatures: n.Buffer.from([this.header.numRequiredSignatures]),
                        numReadonlySignedAccounts: n.Buffer.from([this.header.numReadonlySignedAccounts]),
                        numReadonlyUnsignedAccounts: n.Buffer.from([this.header.numReadonlyUnsignedAccounts]),
                        keyCount: n.Buffer.from(e),
                        keys: this.accountKeys.map((t => F(t.toBytes()))),
                        recentBlockhash: a().decode(this.recentBlockhash)
                    };
                let h = n.Buffer.alloc(2048);
                const d = u.encode(f, h);
                return o.copy(h, d), h.slice(0, d + o.length)
            }

            static from(t) {
                let e = [...t];
                const r = e.shift();
                if (r !== (127 & r)) throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
                const i = e.shift(), o = e.shift(), s = gr(e);
                let u = [];
                for (let t = 0; t < s; t++) {
                    const t = e.slice(0, or);
                    e = e.slice(or), u.push(a().encode(n.Buffer.from(t)))
                }
                const c = e.slice(0, or);
                e = e.slice(or);
                const f = gr(e);
                let h = [];
                for (let t = 0; t < f; t++) {
                    const t = e.shift(), r = gr(e), i = e.slice(0, r);
                    e = e.slice(r);
                    const o = gr(e), s = e.slice(0, o), u = a().encode(n.Buffer.from(s));
                    e = e.slice(o), h.push({programIdIndex: t, accounts: i, data: u})
                }
                const d = {
                    header: {
                        numRequiredSignatures: r,
                        numReadonlySignedAccounts: i,
                        numReadonlyUnsignedAccounts: o
                    }, recentBlockhash: a().encode(n.Buffer.from(c)), accountKeys: u, instructions: h
                };
                return new mr(d)
            }
        }

        function wr(t, e) {
            if (!t) throw new Error(e || "Assertion failed")
        }

        let vr;
        !function (t) {
            t[t.BLOCKHEIGHT_EXCEEDED = 0] = "BLOCKHEIGHT_EXCEEDED", t[t.PROCESSED = 1] = "PROCESSED", t[t.TIMED_OUT = 2] = "TIMED_OUT"
        }(vr || (vr = {}));
        const Sr = n.Buffer.alloc(64).fill(0);

        class Mr {
            constructor(t) {
                this.keys = void 0, this.programId = void 0, this.data = n.Buffer.alloc(0), this.programId = t.programId, this.keys = t.keys, t.data && (this.data = t.data)
            }

            toJSON() {
                return {
                    keys: this.keys.map((({pubkey: t, isSigner: e, isWritable: r}) => ({
                        pubkey: t.toJSON(),
                        isSigner: e,
                        isWritable: r
                    }))), programId: this.programId.toJSON(), data: [...this.data]
                }
            }
        }

        class _r {
            get signature() {
                return this.signatures.length > 0 ? this.signatures[0].signature : null
            }

            constructor(t) {
                if (this.signatures = [], this.feePayer = void 0, this.instructions = [], this.recentBlockhash = void 0, this.lastValidBlockHeight = void 0, this.nonceInfo = void 0, this._message = void 0, this._json = void 0, t) if (t.feePayer && (this.feePayer = t.feePayer), t.signatures && (this.signatures = t.signatures), Object.prototype.hasOwnProperty.call(t, "lastValidBlockHeight")) {
                    const {blockhash: e, lastValidBlockHeight: r} = t;
                    this.recentBlockhash = e, this.lastValidBlockHeight = r
                } else {
                    const {recentBlockhash: e, nonceInfo: r} = t;
                    r && (this.nonceInfo = r), this.recentBlockhash = e
                }
            }

            toJSON() {
                return {
                    recentBlockhash: this.recentBlockhash || null,
                    feePayer: this.feePayer ? this.feePayer.toJSON() : null,
                    nonceInfo: this.nonceInfo ? {
                        nonce: this.nonceInfo.nonce,
                        nonceInstruction: this.nonceInfo.nonceInstruction.toJSON()
                    } : null,
                    instructions: this.instructions.map((t => t.toJSON())),
                    signers: this.signatures.map((({publicKey: t}) => t.toJSON()))
                }
            }

            add(...t) {
                if (0 === t.length) throw new Error("No instructions");
                return t.forEach((t => {
                    "instructions" in t ? this.instructions = this.instructions.concat(t.instructions) : "data" in t && "programId" in t && "keys" in t ? this.instructions.push(t) : this.instructions.push(new Mr(t))
                })), this
            }

            compileMessage() {
                if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json)) return this._message;
                let t, e, r;
                if (this.nonceInfo ? (t = this.nonceInfo.nonce, e = this.instructions[0] != this.nonceInfo.nonceInstruction ? [this.nonceInfo.nonceInstruction, ...this.instructions] : this.instructions) : (t = this.recentBlockhash, e = this.instructions), !t) throw new Error("Transaction recentBlockhash required");
                if (e.length < 1 && console.warn("No instructions provided"), this.feePayer) r = this.feePayer; else {
                    if (!(this.signatures.length > 0 && this.signatures[0].publicKey)) throw new Error("Transaction fee payer required");
                    r = this.signatures[0].publicKey
                }
                for (let t = 0; t < e.length; t++) if (void 0 === e[t].programId) throw new Error(`Transaction instruction index ${t} has undefined program id`);
                const n = [], i = [];
                e.forEach((t => {
                    t.keys.forEach((t => {
                        i.push({...t})
                    }));
                    const e = t.programId.toString();
                    n.includes(e) || n.push(e)
                })), n.forEach((t => {
                    i.push({pubkey: new sr(t), isSigner: !1, isWritable: !1})
                }));
                const o = [];
                i.forEach((t => {
                    const e = t.pubkey.toString(), r = o.findIndex((t => t.pubkey.toString() === e));
                    r > -1 ? (o[r].isWritable = o[r].isWritable || t.isWritable, o[r].isSigner = o[r].isSigner || t.isSigner) : o.push(t)
                })), o.sort((function (t, e) {
                    return t.isSigner !== e.isSigner ? t.isSigner ? -1 : 1 : t.isWritable !== e.isWritable ? t.isWritable ? -1 : 1 : t.pubkey.toBase58().localeCompare(e.pubkey.toBase58())
                }));
                const s = o.findIndex((t => t.pubkey.equals(r)));
                if (s > -1) {
                    const [t] = o.splice(s, 1);
                    t.isSigner = !0, t.isWritable = !0, o.unshift(t)
                } else o.unshift({pubkey: r, isSigner: !0, isWritable: !0});
                for (const t of this.signatures) {
                    const e = o.findIndex((e => e.pubkey.equals(t.publicKey)));
                    if (!(e > -1)) throw new Error(`unknown signer: ${t.publicKey.toString()}`);
                    o[e].isSigner || (o[e].isSigner = !0, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."))
                }
                let u = 0, c = 0, f = 0;
                const h = [], d = [];
                o.forEach((({pubkey: t, isSigner: e, isWritable: r}) => {
                    e ? (h.push(t.toString()), u += 1, r || (c += 1)) : (d.push(t.toString()), r || (f += 1))
                }));
                const l = h.concat(d), p = e.map((t => {
                    const {data: e, programId: r} = t;
                    return {
                        programIdIndex: l.indexOf(r.toString()),
                        accounts: t.keys.map((t => l.indexOf(t.pubkey.toString()))),
                        data: a().encode(e)
                    }
                }));
                return p.forEach((t => {
                    wr(t.programIdIndex >= 0), t.accounts.forEach((t => wr(t >= 0)))
                })), new mr({
                    header: {
                        numRequiredSignatures: u,
                        numReadonlySignedAccounts: c,
                        numReadonlyUnsignedAccounts: f
                    }, accountKeys: l, recentBlockhash: t, instructions: p
                })
            }

            _compile() {
                const t = this.compileMessage(), e = t.accountKeys.slice(0, t.header.numRequiredSignatures);
                return this.signatures.length === e.length && this.signatures.every(((t, r) => e[r].equals(t.publicKey))) || (this.signatures = e.map((t => ({
                    signature: null,
                    publicKey: t
                })))), t
            }

            serializeMessage() {
                return this._compile().serialize()
            }

            async getEstimatedFee(t) {
                return (await t.getFeeForMessage(this.compileMessage())).value
            }

            setSigners(...t) {
                if (0 === t.length) throw new Error("No signers");
                const e = new Set;
                this.signatures = t.filter((t => {
                    const r = t.toString();
                    return !e.has(r) && (e.add(r), !0)
                })).map((t => ({signature: null, publicKey: t})))
            }

            sign(...t) {
                if (0 === t.length) throw new Error("No signers");
                const e = new Set, r = [];
                for (const n of t) {
                    const t = n.publicKey.toString();
                    e.has(t) || (e.add(t), r.push(n))
                }
                this.signatures = r.map((t => ({signature: null, publicKey: t.publicKey})));
                const n = this._compile();
                this._partialSign(n, ...r)
            }

            partialSign(...t) {
                if (0 === t.length) throw new Error("No signers");
                const e = new Set, r = [];
                for (const n of t) {
                    const t = n.publicKey.toString();
                    e.has(t) || (e.add(t), r.push(n))
                }
                const n = this._compile();
                this._partialSign(n, ...r)
            }

            _partialSign(t, ...r) {
                const n = t.serialize();
                r.forEach((t => {
                    const r = e().sign.detached(n, t.secretKey);
                    this._addSignature(t.publicKey, F(r))
                }))
            }

            addSignature(t, e) {
                this._compile(), this._addSignature(t, e)
            }

            _addSignature(t, e) {
                wr(64 === e.length);
                const r = this.signatures.findIndex((e => t.equals(e.publicKey)));
                if (r < 0) throw new Error(`unknown signer: ${t.toString()}`);
                this.signatures[r].signature = n.Buffer.from(e)
            }

            verifySignatures() {
                return this._verifySignatures(this.serializeMessage(), !0)
            }

            _verifySignatures(t, r) {
                for (const {signature: n, publicKey: i} of this.signatures) if (null === n) {
                    if (r) return !1
                } else if (!e().sign.detached.verify(t, n, i.toBuffer())) return !1;
                return !0
            }

            serialize(t) {
                const {requireAllSignatures: e, verifySignatures: r} = Object.assign({
                    requireAllSignatures: !0,
                    verifySignatures: !0
                }, t), n = this.serializeMessage();
                if (r && !this._verifySignatures(n, e)) throw new Error("Signature verification failed");
                return this._serialize(n)
            }

            _serialize(t) {
                const {signatures: e} = this, r = [];
                yr(r, e.length);
                const i = r.length + 64 * e.length + t.length, o = n.Buffer.alloc(i);
                return wr(e.length < 256), n.Buffer.from(r).copy(o, 0), e.forEach((({signature: t}, e) => {
                    null !== t && (wr(64 === t.length, "signature has invalid length"), n.Buffer.from(t).copy(o, r.length + 64 * e))
                })), t.copy(o, r.length + 64 * e.length), wr(o.length <= 1232, `Transaction too large: ${o.length} > 1232`), o
            }

            get keys() {
                return wr(1 === this.instructions.length), this.instructions[0].keys.map((t => t.pubkey))
            }

            get programId() {
                return wr(1 === this.instructions.length), this.instructions[0].programId
            }

            get data() {
                return wr(1 === this.instructions.length), this.instructions[0].data
            }

            static from(t) {
                let e = [...t];
                const r = gr(e);
                let i = [];
                for (let t = 0; t < r; t++) {
                    const t = e.slice(0, 64);
                    e = e.slice(64), i.push(a().encode(n.Buffer.from(t)))
                }
                return _r.populate(mr.from(e), i)
            }

            static populate(t, e = []) {
                const r = new _r;
                return r.recentBlockhash = t.recentBlockhash, t.header.numRequiredSignatures > 0 && (r.feePayer = t.accountKeys[0]), e.forEach(((e, n) => {
                    const i = {signature: e == a().encode(Sr) ? null : a().decode(e), publicKey: t.accountKeys[n]};
                    r.signatures.push(i)
                })), t.instructions.forEach((e => {
                    const n = e.accounts.map((e => {
                        const n = t.accountKeys[e];
                        return {
                            pubkey: n,
                            isSigner: r.signatures.some((t => t.publicKey.toString() === n.toString())) || t.isAccountSigner(e),
                            isWritable: t.isAccountWritable(e)
                        }
                    }));
                    r.instructions.push(new Mr({
                        keys: n,
                        programId: t.accountKeys[e.programIdIndex],
                        data: a().decode(e.data)
                    }))
                })), r._message = t, r._json = r.toJSON(), r
            }
        }

        const Ar = new sr("SysvarC1ock11111111111111111111111111111111"),
            kr = (new sr("SysvarEpochSchedu1e111111111111111111111111"), new sr("Sysvar1nstructions1111111111111111111111111"), new sr("SysvarRecentB1ockHashes11111111111111111111")),
            Er = new sr("SysvarRent111111111111111111111111111111111"),
            Ir = (new sr("SysvarRewards111111111111111111111111111111"), new sr("SysvarS1otHashes111111111111111111111111111"), new sr("SysvarS1otHistory11111111111111111111111111"), new sr("SysvarStakeHistory1111111111111111111111111"));

        async function Br(t, e, r, n) {
            const i = n && {
                    skipPreflight: n.skipPreflight,
                    preflightCommitment: n.preflightCommitment || n.commitment,
                    maxRetries: n.maxRetries,
                    minContextSlot: n.minContextSlot
                }, o = await t.sendTransaction(e, r, i),
                s = null != e.recentBlockhash && null != e.lastValidBlockHeight ? (await t.confirmTransaction({
                    signature: o,
                    blockhash: e.recentBlockhash,
                    lastValidBlockHeight: e.lastValidBlockHeight
                }, n && n.commitment)).value : (await t.confirmTransaction(o, n && n.commitment)).value;
            if (s.err) throw new Error(`Transaction ${o} failed (${JSON.stringify(s)})`);
            return o
        }

        function xr(t) {
            return new Promise((e => setTimeout(e, t)))
        }

        function Rr(t, e) {
            const r = t.layout.span >= 0 ? t.layout.span : function (t, e) {
                const r = t => {
                    if (t.span >= 0) return t.span;
                    if ("function" == typeof t.alloc) return t.alloc(e[t.property]);
                    if ("count" in t && "elementLayout" in t) {
                        const n = e[t.property];
                        if (Array.isArray(n)) return n.length * r(t.elementLayout)
                    }
                    return 0
                };
                let n = 0;
                return t.layout.fields.forEach((t => {
                    n += r(t)
                })), n
            }(t, e), i = n.Buffer.alloc(r), o = Object.assign({instruction: t.index}, e);
            return t.layout.encode(o, i), i
        }

        const Pr = c._O("lamportsPerSignature"),
            Or = c.n_([c.Jq("version"), c.Jq("state"), pr("authorizedPubkey"), pr("nonce"), c.n_([Pr], "feeCalculator")]),
            Tr = Or.span;

        class Ur {
            constructor(t) {
                this.authorizedPubkey = void 0, this.nonce = void 0, this.feeCalculator = void 0, this.authorizedPubkey = t.authorizedPubkey, this.nonce = t.nonce, this.feeCalculator = t.feeCalculator
            }

            static fromAccountData(t) {
                const e = Or.decode(F(t), 0);
                return new Ur({
                    authorizedPubkey: new sr(e.authorizedPubkey),
                    nonce: new sr(e.nonce).toString(),
                    feeCalculator: e.feeCalculator
                })
            }
        }

        const Lr = (8, t => {
            const e = (0, c.Ik)(8, t), {encode: r, decode: i} = (t => ({
                decode: t.decode.bind(t),
                encode: t.encode.bind(t)
            }))(e), o = e;
            return o.decode = (t, e) => {
                const r = i(t, e);
                return (0, f.oU)(n.Buffer.from(r))
            }, o.encode = (t, e, n) => {
                const i = (0, f.k$)(t, 8);
                return r(i, e, n)
            }, o
        });
        const Nr = Object.freeze({
            Create: {index: 0, layout: c.n_([c.Jq("instruction"), c.gM("lamports"), c.gM("space"), pr("programId")])},
            Assign: {index: 1, layout: c.n_([c.Jq("instruction"), pr("programId")])},
            Transfer: {index: 2, layout: c.n_([c.Jq("instruction"), Lr("lamports")])},
            CreateWithSeed: {
                index: 3,
                layout: c.n_([c.Jq("instruction"), pr("base"), br("seed"), c.gM("lamports"), c.gM("space"), pr("programId")])
            },
            AdvanceNonceAccount: {index: 4, layout: c.n_([c.Jq("instruction")])},
            WithdrawNonceAccount: {index: 5, layout: c.n_([c.Jq("instruction"), c.gM("lamports")])},
            InitializeNonceAccount: {index: 6, layout: c.n_([c.Jq("instruction"), pr("authorized")])},
            AuthorizeNonceAccount: {index: 7, layout: c.n_([c.Jq("instruction"), pr("authorized")])},
            Allocate: {index: 8, layout: c.n_([c.Jq("instruction"), c.gM("space")])},
            AllocateWithSeed: {
                index: 9,
                layout: c.n_([c.Jq("instruction"), pr("base"), br("seed"), c.gM("space"), pr("programId")])
            },
            AssignWithSeed: {index: 10, layout: c.n_([c.Jq("instruction"), pr("base"), br("seed"), pr("programId")])},
            TransferWithSeed: {
                index: 11,
                layout: c.n_([c.Jq("instruction"), Lr("lamports"), br("seed"), pr("programId")])
            },
            UpgradeNonceAccount: {index: 12, layout: c.n_([c.Jq("instruction")])}
        });

        class zr {
            constructor() {
            }

            static createAccount(t) {
                const e = Rr(Nr.Create, {lamports: t.lamports, space: t.space, programId: F(t.programId.toBuffer())});
                return new Mr({
                    keys: [{pubkey: t.fromPubkey, isSigner: !0, isWritable: !0}, {
                        pubkey: t.newAccountPubkey,
                        isSigner: !0,
                        isWritable: !0
                    }], programId: this.programId, data: e
                })
            }

            static transfer(t) {
                let e, r;
                return "basePubkey" in t ? (e = Rr(Nr.TransferWithSeed, {
                    lamports: BigInt(t.lamports),
                    seed: t.seed,
                    programId: F(t.programId.toBuffer())
                }), r = [{pubkey: t.fromPubkey, isSigner: !1, isWritable: !0}, {
                    pubkey: t.basePubkey,
                    isSigner: !0,
                    isWritable: !1
                }, {
                    pubkey: t.toPubkey,
                    isSigner: !1,
                    isWritable: !0
                }]) : (e = Rr(Nr.Transfer, {lamports: BigInt(t.lamports)}), r = [{
                    pubkey: t.fromPubkey,
                    isSigner: !0,
                    isWritable: !0
                }, {pubkey: t.toPubkey, isSigner: !1, isWritable: !0}]), new Mr({
                    keys: r,
                    programId: this.programId,
                    data: e
                })
            }

            static assign(t) {
                let e, r;
                return "basePubkey" in t ? (e = Rr(Nr.AssignWithSeed, {
                    base: F(t.basePubkey.toBuffer()),
                    seed: t.seed,
                    programId: F(t.programId.toBuffer())
                }), r = [{pubkey: t.accountPubkey, isSigner: !1, isWritable: !0}, {
                    pubkey: t.basePubkey,
                    isSigner: !0,
                    isWritable: !1
                }]) : (e = Rr(Nr.Assign, {programId: F(t.programId.toBuffer())}), r = [{
                    pubkey: t.accountPubkey,
                    isSigner: !0,
                    isWritable: !0
                }]), new Mr({keys: r, programId: this.programId, data: e})
            }

            static createAccountWithSeed(t) {
                const e = Rr(Nr.CreateWithSeed, {
                    base: F(t.basePubkey.toBuffer()),
                    seed: t.seed,
                    lamports: t.lamports,
                    space: t.space,
                    programId: F(t.programId.toBuffer())
                });
                let r = [{pubkey: t.fromPubkey, isSigner: !0, isWritable: !0}, {
                    pubkey: t.newAccountPubkey,
                    isSigner: !1,
                    isWritable: !0
                }];
                return t.basePubkey != t.fromPubkey && r.push({
                    pubkey: t.basePubkey,
                    isSigner: !0,
                    isWritable: !1
                }), new Mr({keys: r, programId: this.programId, data: e})
            }

            static createNonceAccount(t) {
                const e = new _r;
                "basePubkey" in t && "seed" in t ? e.add(zr.createAccountWithSeed({
                    fromPubkey: t.fromPubkey,
                    newAccountPubkey: t.noncePubkey,
                    basePubkey: t.basePubkey,
                    seed: t.seed,
                    lamports: t.lamports,
                    space: Tr,
                    programId: this.programId
                })) : e.add(zr.createAccount({
                    fromPubkey: t.fromPubkey,
                    newAccountPubkey: t.noncePubkey,
                    lamports: t.lamports,
                    space: Tr,
                    programId: this.programId
                }));
                const r = {noncePubkey: t.noncePubkey, authorizedPubkey: t.authorizedPubkey};
                return e.add(this.nonceInitialize(r)), e
            }

            static nonceInitialize(t) {
                const e = Rr(Nr.InitializeNonceAccount, {authorized: F(t.authorizedPubkey.toBuffer())}), r = {
                    keys: [{pubkey: t.noncePubkey, isSigner: !1, isWritable: !0}, {
                        pubkey: kr,
                        isSigner: !1,
                        isWritable: !1
                    }, {pubkey: Er, isSigner: !1, isWritable: !1}], programId: this.programId, data: e
                };
                return new Mr(r)
            }

            static nonceAdvance(t) {
                const e = Rr(Nr.AdvanceNonceAccount), r = {
                    keys: [{pubkey: t.noncePubkey, isSigner: !1, isWritable: !0}, {
                        pubkey: kr,
                        isSigner: !1,
                        isWritable: !1
                    }, {pubkey: t.authorizedPubkey, isSigner: !0, isWritable: !1}], programId: this.programId, data: e
                };
                return new Mr(r)
            }

            static nonceWithdraw(t) {
                const e = Rr(Nr.WithdrawNonceAccount, {lamports: t.lamports});
                return new Mr({
                    keys: [{pubkey: t.noncePubkey, isSigner: !1, isWritable: !0}, {
                        pubkey: t.toPubkey,
                        isSigner: !1,
                        isWritable: !0
                    }, {pubkey: kr, isSigner: !1, isWritable: !1}, {
                        pubkey: Er,
                        isSigner: !1,
                        isWritable: !1
                    }, {pubkey: t.authorizedPubkey, isSigner: !0, isWritable: !1}], programId: this.programId, data: e
                })
            }

            static nonceAuthorize(t) {
                const e = Rr(Nr.AuthorizeNonceAccount, {authorized: F(t.newAuthorizedPubkey.toBuffer())});
                return new Mr({
                    keys: [{
                        pubkey: t.noncePubkey,
                        isSigner: !1,
                        isWritable: !0
                    }, {pubkey: t.authorizedPubkey, isSigner: !0, isWritable: !1}], programId: this.programId, data: e
                })
            }

            static allocate(t) {
                let e, r;
                return "basePubkey" in t ? (e = Rr(Nr.AllocateWithSeed, {
                    base: F(t.basePubkey.toBuffer()),
                    seed: t.seed,
                    space: t.space,
                    programId: F(t.programId.toBuffer())
                }), r = [{pubkey: t.accountPubkey, isSigner: !1, isWritable: !0}, {
                    pubkey: t.basePubkey,
                    isSigner: !0,
                    isWritable: !1
                }]) : (e = Rr(Nr.Allocate, {space: t.space}), r = [{
                    pubkey: t.accountPubkey,
                    isSigner: !0,
                    isWritable: !0
                }]), new Mr({keys: r, programId: this.programId, data: e})
            }
        }

        zr.programId = new sr("11111111111111111111111111111111");

        class Cr {
            constructor() {
            }

            static getMinNumSignatures(t) {
                return 2 * (Math.ceil(t / Cr.chunkSize) + 1 + 1)
            }

            static async load(t, e, r, i, o) {
                {
                    const n = await t.getMinimumBalanceForRentExemption(o.length),
                        s = await t.getAccountInfo(r.publicKey, "confirmed");
                    let a = null;
                    if (null !== s) {
                        if (s.executable) return console.error("Program load failed, account is already executable"), !1;
                        s.data.length !== o.length && (a = a || new _r, a.add(zr.allocate({
                            accountPubkey: r.publicKey,
                            space: o.length
                        }))), s.owner.equals(i) || (a = a || new _r, a.add(zr.assign({
                            accountPubkey: r.publicKey,
                            programId: i
                        }))), s.lamports < n && (a = a || new _r, a.add(zr.transfer({
                            fromPubkey: e.publicKey,
                            toPubkey: r.publicKey,
                            lamports: n - s.lamports
                        })))
                    } else a = (new _r).add(zr.createAccount({
                        fromPubkey: e.publicKey,
                        newAccountPubkey: r.publicKey,
                        lamports: n > 0 ? n : 1,
                        space: o.length,
                        programId: i
                    }));
                    null !== a && await Br(t, a, [e, r], {commitment: "confirmed"})
                }
                const s = c.n_([c.Jq("instruction"), c.Jq("offset"), c.Jq("bytesLength"), c.Jq("bytesLengthPadding"), c.A9(c.u8("byte"), c.cv(c.Jq(), -8), "bytes")]),
                    a = Cr.chunkSize;
                let u = 0, f = o, h = [];
                for (; f.length > 0;) {
                    const o = f.slice(0, a), c = n.Buffer.alloc(a + 16);
                    s.encode({instruction: 0, offset: u, bytes: o, bytesLength: 0, bytesLengthPadding: 0}, c);
                    const d = (new _r).add({
                        keys: [{pubkey: r.publicKey, isSigner: !0, isWritable: !0}],
                        programId: i,
                        data: c
                    });
                    if (h.push(Br(t, d, [e, r], {commitment: "confirmed"})), t._rpcEndpoint.includes("solana.com")) {
                        const t = 4;
                        await xr(1e3 / t)
                    }
                    u += a, f = f.slice(a)
                }
                await Promise.all(h);
                {
                    const o = c.n_([c.Jq("instruction")]), s = n.Buffer.alloc(o.span);
                    o.encode({instruction: 1}, s);
                    const a = (new _r).add({
                        keys: [{pubkey: r.publicKey, isSigner: !0, isWritable: !0}, {
                            pubkey: Er,
                            isSigner: !1,
                            isWritable: !1
                        }], programId: i, data: s
                    });
                    await Br(t, a, [e, r], {commitment: "confirmed"})
                }
                return !0
            }
        }

        Cr.chunkSize = 932, new sr("BPFLoader2111111111111111111111111111111111");
        var qr = Object.prototype.toString, Wr = Object.keys || function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return e
        };

        function jr(t, e) {
            var r, n, i, o, s, a, u;
            if (!0 === t) return "true";
            if (!1 === t) return "false";
            switch (typeof t) {
                case"object":
                    if (null === t) return null;
                    if (t.toJSON && "function" == typeof t.toJSON) return jr(t.toJSON(), e);
                    if ("[object Array]" === (u = qr.call(t))) {
                        for (i = "[", n = t.length - 1, r = 0; r < n; r++) i += jr(t[r], !0) + ",";
                        return n > -1 && (i += jr(t[r], !0)), i + "]"
                    }
                    if ("[object Object]" === u) {
                        for (n = (o = Wr(t).sort()).length, i = "", r = 0; r < n;) void 0 !== (a = jr(t[s = o[r]], !1)) && (i && (i += ","), i += JSON.stringify(s) + ":" + a), r++;
                        return "{" + i + "}"
                    }
                    return JSON.stringify(t);
                case"function":
                case"undefined":
                    return e ? null : void 0;
                case"string":
                    return JSON.stringify(t);
                default:
                    return isFinite(t) ? t : null
            }
        }

        var Kr = function (t) {
            var e = jr(t, !1);
            if (void 0 !== e) return "" + e
        };

        function Fr(t) {
            let e = 0;
            for (; t > 1;) t /= 2, e++;
            return e
        }

        class Dr {
            constructor(t, e, r, n, i) {
                this.slotsPerEpoch = void 0, this.leaderScheduleSlotOffset = void 0, this.warmup = void 0, this.firstNormalEpoch = void 0, this.firstNormalSlot = void 0, this.slotsPerEpoch = t, this.leaderScheduleSlotOffset = e, this.warmup = r, this.firstNormalEpoch = n, this.firstNormalSlot = i
            }

            getEpoch(t) {
                return this.getEpochAndSlotIndex(t)[0]
            }

            getEpochAndSlotIndex(t) {
                if (t < this.firstNormalSlot) {
                    const r = Fr(0 === (e = t + 32 + 1) ? 1 : (e--, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, 1 + (e |= e >> 32))) - Fr(32) - 1;
                    return [r, t - (this.getSlotsInEpoch(r) - 32)]
                }
                {
                    const e = t - this.firstNormalSlot, r = Math.floor(e / this.slotsPerEpoch);
                    return [this.firstNormalEpoch + r, e % this.slotsPerEpoch]
                }
                var e
            }

            getFirstSlotInEpoch(t) {
                return t <= this.firstNormalEpoch ? 32 * (Math.pow(2, t) - 1) : (t - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot
            }

            getLastSlotInEpoch(t) {
                return this.getFirstSlotInEpoch(t) + this.getSlotsInEpoch(t) - 1
            }

            getSlotsInEpoch(t) {
                return t < this.firstNormalEpoch ? Math.pow(2, t + Fr(32)) : this.slotsPerEpoch
            }
        }

        class $r extends Error {
            constructor(t, e) {
                super(t), this.logs = void 0, this.logs = e
            }
        }

        class Jr extends Error {
            constructor({code: t, message: e, data: r}, n) {
                super(null != n ? `${n}: ${e}` : e), this.code = void 0, this.data = void 0, this.code = t, this.data = r, this.name = "SolanaJSONRPCError"
            }
        }

        var Vr = globalThis.fetch;

        class Hr {
            constructor(t) {
                this.key = void 0, this.state = void 0, this.key = t.key, this.state = t.state
            }

            isActive() {
                return this.state.deactivationSlot === 2n ** 64n - 1n
            }

            static deserialize(t) {
                const e = function (t, e) {
                    let r;
                    try {
                        r = t.layout.decode(e)
                    } catch (t) {
                        throw new Error("invalid instruction; " + t)
                    }
                    if (r.typeIndex !== t.index) throw new Error(`invalid account data; account type mismatch ${r.typeIndex} != ${t.index}`);
                    return r
                }(Gr, t), r = t.length - 56;
                wr(r >= 0, "lookup table is invalid"), wr(r % 32 == 0, "lookup table is invalid");
                const n = r / 32, {addresses: i} = c.n_([c.A9(pr(), n, "addresses")]).decode(t.slice(56));
                return {
                    deactivationSlot: e.deactivationSlot,
                    lastExtendedSlot: e.lastExtendedSlot,
                    lastExtendedSlotStartIndex: e.lastExtendedStartIndex,
                    authority: 0 !== e.authority.length ? new sr(e.authority[0]) : void 0,
                    addresses: i.map((t => new sr(t)))
                }
            }
        }

        const Gr = {
            index: 1,
            layout: c.n_([c.Jq("typeIndex"), Lr("deactivationSlot"), c._O("lastExtendedSlot"), c.u8("lastExtendedStartIndex"), c.u8(), c.A9(pr(), c.cv(c.u8(), -1), "authority")])
        }, Zr = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
        const Yr = L(A(sr), R(), (t => new sr(t))), Xr = P([R(), k("base64")]),
            Qr = L(A(n.Buffer), Xr, (t => n.Buffer.from(t[0], "base64")));

        function tn(t) {
            let e, r;
            if ("string" == typeof t) e = t; else if (t) {
                const {commitment: n, ...i} = t;
                e = n, r = i
            }
            return {commitment: e, config: r}
        }

        function en(t) {
            return T([O({jsonrpc: k("2.0"), id: R(), result: t}), O({
                jsonrpc: k("2.0"),
                id: R(),
                error: O({code: U(), message: R(), data: B(S("any", (() => !0)))})
            })])
        }

        const rn = en(U());

        function nn(t) {
            return L(en(t), rn, (e => "error" in e ? e : {...e, result: m(e.result, t)}))
        }

        function on(t) {
            return nn(O({context: O({slot: I()}), value: t}))
        }

        function sn(t) {
            return O({context: O({slot: I()}), value: t})
        }

        const an = O({foundation: I(), foundationTerm: I(), initial: I(), taper: I(), terminal: I()}),
            un = nn(M(E(O({epoch: I(), effectiveSlot: I(), amount: I(), postBalance: I()})))), cn = O({
                epoch: I(),
                slotIndex: I(),
                slotsInEpoch: I(),
                absoluteSlot: I(),
                blockHeight: B(I()),
                transactionCount: B(I())
            }), fn = O({
                slotsPerEpoch: I(),
                leaderScheduleSlotOffset: I(),
                warmup: _(),
                firstNormalEpoch: I(),
                firstNormalSlot: I()
            }), hn = x(R(), M(I())), dn = E(T([O({}), R()])), ln = O({err: dn}), pn = k("receivedSignature"),
            bn = O({"solana-core": R(), "feature-set": B(I())}), gn = on(O({
                err: E(T([O({}), R()])),
                logs: E(M(R())),
                accounts: B(E(M(E(O({executable: _(), owner: R(), lamports: I(), data: M(R()), rentEpoch: B(I())}))))),
                unitsConsumed: B(I()),
                returnData: B(E(O({programId: R(), data: P([R(), k("base64")])})))
            })), yn = on(O({byIdentity: x(R(), M(I())), range: O({firstSlot: I(), lastSlot: I()})})), mn = nn(an),
            wn = nn(cn), vn = nn(fn), Sn = nn(hn), Mn = nn(I()),
            _n = on(O({total: I(), circulating: I(), nonCirculating: I(), nonCirculatingAccounts: M(Yr)})),
            An = O({amount: R(), uiAmount: E(I()), decimals: I(), uiAmountString: B(R())}),
            kn = on(M(O({address: Yr, amount: R(), uiAmount: E(I()), decimals: I(), uiAmountString: B(R())}))),
            En = on(M(O({
                pubkey: Yr,
                account: O({executable: _(), owner: Yr, lamports: I(), data: Qr, rentEpoch: I()})
            }))), In = O({program: R(), parsed: U(), space: I()}), Bn = on(M(O({
                pubkey: Yr,
                account: O({executable: _(), owner: Yr, lamports: I(), data: In, rentEpoch: I()})
            }))), xn = on(M(O({lamports: I(), address: Yr}))),
            Rn = O({executable: _(), owner: Yr, lamports: I(), data: Qr, rentEpoch: I()}),
            Pn = O({pubkey: Yr, account: Rn}),
            On = L(T([A(n.Buffer), In]), T([Xr, In]), (t => Array.isArray(t) ? m(t, Qr) : t)),
            Tn = O({executable: _(), owner: Yr, lamports: I(), data: On, rentEpoch: I()}),
            Un = O({pubkey: Yr, account: Tn}), Ln = O({
                state: T([k("active"), k("inactive"), k("activating"), k("deactivating")]),
                active: I(),
                inactive: I()
            }), Nn = nn(M(O({signature: R(), slot: I(), err: dn, memo: E(R()), blockTime: B(E(I()))}))),
            zn = nn(M(O({signature: R(), slot: I(), err: dn, memo: E(R()), blockTime: B(E(I()))}))),
            Cn = O({subscription: I(), result: sn(Rn)}), qn = O({pubkey: Yr, account: Rn}),
            Wn = O({subscription: I(), result: sn(qn)}), jn = O({parent: I(), slot: I(), root: I()}),
            Kn = O({subscription: I(), result: jn}), Fn = T([O({
                type: T([k("firstShredReceived"), k("completed"), k("optimisticConfirmation"), k("root")]),
                slot: I(),
                timestamp: I()
            }), O({type: k("createdBank"), parent: I(), slot: I(), timestamp: I()}), O({
                type: k("frozen"),
                slot: I(),
                timestamp: I(),
                stats: O({
                    numTransactionEntries: I(),
                    numSuccessfulTransactions: I(),
                    numFailedTransactions: I(),
                    maxTransactionsPerEntry: I()
                })
            }), O({type: k("dead"), slot: I(), timestamp: I(), err: R()})]), Dn = O({subscription: I(), result: Fn}),
            $n = O({subscription: I(), result: sn(T([ln, pn]))}), Jn = O({subscription: I(), result: I()}),
            Vn = O({pubkey: R(), gossip: E(R()), tpu: E(R()), rpc: E(R()), version: E(R())}), Hn = O({
                votePubkey: R(),
                nodePubkey: R(),
                activatedStake: I(),
                epochVoteAccount: _(),
                epochCredits: M(P([I(), I(), I()])),
                commission: I(),
                lastVote: I(),
                rootSlot: E(I())
            }), Gn = nn(O({current: M(Hn), delinquent: M(Hn)})), Zn = T([k("processed"), k("confirmed"), k("finalized")]),
            Yn = O({slot: I(), confirmations: E(I()), err: dn, confirmationStatus: B(Zn)}), Xn = on(M(E(Yn))),
            Qn = nn(I()), ti = O({
                signatures: M(R()),
                message: O({
                    accountKeys: M(R()),
                    header: O({
                        numRequiredSignatures: I(),
                        numReadonlySignedAccounts: I(),
                        numReadonlyUnsignedAccounts: I()
                    }),
                    instructions: M(O({accounts: M(I()), data: R(), programIdIndex: I()})),
                    recentBlockhash: R()
                })
            }), ei = O({parsed: U(), program: R(), programId: Yr}), ri = O({accounts: M(Yr), data: R(), programId: Yr}),
            ni = L(T([ri, ei]), T([O({parsed: U(), program: R(), programId: R()}), O({
                accounts: M(R()),
                data: R(),
                programId: R()
            })]), (t => m(t, "accounts" in t ? ri : ei))), ii = O({
                signatures: M(R()),
                message: O({
                    accountKeys: M(O({pubkey: Yr, signer: _(), writable: _()})),
                    instructions: M(ni),
                    recentBlockhash: R()
                })
            }), oi = O({accountIndex: I(), mint: R(), owner: B(R()), uiTokenAmount: An}),
            si = O({writable: M(Yr), readonly: M(Yr)}), ai = O({
                err: dn,
                fee: I(),
                innerInstructions: B(E(M(O({
                    index: I(),
                    instructions: M(O({accounts: M(I()), data: R(), programIdIndex: I()}))
                })))),
                preBalances: M(I()),
                postBalances: M(I()),
                logMessages: B(E(M(R()))),
                preTokenBalances: B(E(M(oi))),
                postTokenBalances: B(E(M(oi))),
                loadedAddresses: B(si)
            }), ui = O({
                err: dn,
                fee: I(),
                innerInstructions: B(E(M(O({index: I(), instructions: M(ni)})))),
                preBalances: M(I()),
                postBalances: M(I()),
                logMessages: B(E(M(R()))),
                preTokenBalances: B(E(M(oi))),
                postTokenBalances: B(E(M(oi))),
                loadedAddresses: B(si)
            }), ci = nn(E(O({
                blockhash: R(),
                previousBlockhash: R(),
                parentSlot: I(),
                transactions: M(O({transaction: ti, meta: E(ai)})),
                rewards: B(M(O({pubkey: R(), lamports: I(), postBalance: E(I()), rewardType: E(R())}))),
                blockTime: E(I()),
                blockHeight: E(I())
            }))), fi = nn(E(O({
                blockhash: R(),
                previousBlockhash: R(),
                parentSlot: I(),
                transactions: M(O({transaction: ti, meta: E(ai)})),
                rewards: B(M(O({pubkey: R(), lamports: I(), postBalance: E(I()), rewardType: E(R())}))),
                blockTime: E(I())
            }))), hi = nn(E(O({
                blockhash: R(),
                previousBlockhash: R(),
                parentSlot: I(),
                signatures: M(R()),
                blockTime: E(I())
            }))), di = nn(E(O({slot: I(), meta: ai, blockTime: B(E(I())), transaction: ti}))),
            li = nn(E(O({slot: I(), transaction: ii, meta: E(ui), blockTime: B(E(I()))}))),
            pi = on(O({blockhash: R(), feeCalculator: O({lamportsPerSignature: I()})})),
            bi = on(O({blockhash: R(), lastValidBlockHeight: I()})),
            gi = nn(M(O({slot: I(), numTransactions: I(), numSlots: I(), samplePeriodSecs: I()}))),
            yi = on(E(O({feeCalculator: O({lamportsPerSignature: I()})}))), mi = nn(R()), wi = nn(R()),
            vi = O({err: dn, logs: M(R()), signature: R()}), Si = O({result: sn(vi), subscription: I()}),
            Mi = {"solana-client": "js/" + (null !== "0.0.0-development" ? "0.0.0-development" : "UNKNOWN")};

        class _i {
            constructor(t, e) {
                let r, n, i, o, s;
                var a;
                this._commitment = void 0, this._confirmTransactionInitialTimeout = void 0, this._rpcEndpoint = void 0, this._rpcWsEndpoint = void 0, this._rpcClient = void 0, this._rpcRequest = void 0, this._rpcBatchRequest = void 0, this._rpcWebSocket = void 0, this._rpcWebSocketConnected = !1, this._rpcWebSocketHeartbeat = null, this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketGeneration = 0, this._disableBlockhashCaching = !1, this._pollingBlockhash = !1, this._blockhashInfo = {
                    latestBlockhash: null,
                    lastFetch: 0,
                    transactionSignatures: [],
                    simulatedSignatures: []
                }, this._nextClientSubscriptionId = 0, this._subscriptionDisposeFunctionsByClientSubscriptionId = {}, this._subscriptionCallbacksByServerSubscriptionId = {}, this._subscriptionsByHash = {}, this._subscriptionsAutoDisposedByRpc = new Set, e && "string" == typeof e ? this._commitment = e : e && (this._commitment = e.commitment, this._confirmTransactionInitialTimeout = e.confirmTransactionInitialTimeout, r = e.wsEndpoint, n = e.httpHeaders, i = e.fetch, o = e.fetchMiddleware, s = e.disableRetryOnRateLimit), this._rpcEndpoint = function (t) {
                    if (!1 === /^https?:/.test(t)) throw new TypeError("Endpoint URL must start with `http:` or `https:`.");
                    return t
                }(t), this._rpcWsEndpoint = r || function (t) {
                    const e = t.match(Zr);
                    if (null == e) throw TypeError(`Failed to validate endpoint URL \`${t}\``);
                    const [r, n, i, o] = e, s = t.startsWith("https:") ? "wss:" : "ws:",
                        a = null == i ? null : parseInt(i.slice(1), 10);
                    return `${s}//${n}${null == a ? "" : `:${a + 1}`}${o}`
                }(t), this._rpcClient = function (t, e, r, n, i) {
                    const o = r || Vr;
                    let s;
                    return n && (s = async (t, e) => {
                        const r = await new Promise(((r, i) => {
                            try {
                                n(t, e, ((t, e) => r([t, e])))
                            } catch (t) {
                                i(t)
                            }
                        }));
                        return await o(...r)
                    }), new (C())((async (r, n) => {
                        const a = {
                            method: "POST",
                            body: r,
                            agent: void 0,
                            headers: Object.assign({"Content-Type": "application/json"}, e || {}, Mi)
                        };
                        try {
                            let e, r = 5, u = 500;
                            for (; e = s ? await s(t, a) : await o(t, a), 429 === e.status && !0 !== i && (r -= 1, 0 !== r);) console.log(`Server responded with ${e.status} ${e.statusText}.  Retrying after ${u}ms delay...`), await xr(u), u *= 2;
                            const c = await e.text();
                            e.ok ? n(null, c) : n(new Error(`${e.status} ${e.statusText}: ${c}`))
                        } catch (t) {
                            t instanceof Error && n(t)
                        }
                    }), {})
                }(t, n, i, o, s), this._rpcRequest = (a = this._rpcClient, (t, e) => new Promise(((r, n) => {
                    a.request(t, e, ((t, e) => {
                        t ? n(t) : r(e)
                    }))
                }))), this._rpcBatchRequest = function (t) {
                    return e => new Promise(((r, n) => {
                        0 === e.length && r([]);
                        const i = e.map((e => t.request(e.methodName, e.args)));
                        t.request(i, ((t, e) => {
                            t ? n(t) : r(e)
                        }))
                    }))
                }(this._rpcClient), this._rpcWebSocket = new N.K(this._rpcWsEndpoint, {
                    autoconnect: !1,
                    max_reconnects: 1 / 0
                }), this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)), this._rpcWebSocket.on("error", this._wsOnError.bind(this)), this._rpcWebSocket.on("close", this._wsOnClose.bind(this)), this._rpcWebSocket.on("accountNotification", this._wsOnAccountNotification.bind(this)), this._rpcWebSocket.on("programNotification", this._wsOnProgramAccountNotification.bind(this)), this._rpcWebSocket.on("slotNotification", this._wsOnSlotNotification.bind(this)), this._rpcWebSocket.on("slotsUpdatesNotification", this._wsOnSlotUpdatesNotification.bind(this)), this._rpcWebSocket.on("signatureNotification", this._wsOnSignatureNotification.bind(this)), this._rpcWebSocket.on("rootNotification", this._wsOnRootNotification.bind(this)), this._rpcWebSocket.on("logsNotification", this._wsOnLogsNotification.bind(this))
            }

            get commitment() {
                return this._commitment
            }

            get rpcEndpoint() {
                return this._rpcEndpoint
            }

            async getBalanceAndContext(t, e) {
                const {commitment: r, config: n} = tn(e), i = this._buildArgs([t.toBase58()], r, void 0, n),
                    o = m(await this._rpcRequest("getBalance", i), on(I()));
                if ("error" in o) throw new Jr(o.error, `failed to get balance for ${t.toBase58()}`);
                return o.result
            }

            async getBalance(t, e) {
                return await this.getBalanceAndContext(t, e).then((t => t.value)).catch((e => {
                    throw new Error("failed to get balance of account " + t.toBase58() + ": " + e)
                }))
            }

            async getBlockTime(t) {
                const e = m(await this._rpcRequest("getBlockTime", [t]), nn(E(I())));
                if ("error" in e) throw new Jr(e.error, `failed to get block time for slot ${t}`);
                return e.result
            }

            async getMinimumLedgerSlot() {
                const t = m(await this._rpcRequest("minimumLedgerSlot", []), nn(I()));
                if ("error" in t) throw new Jr(t.error, "failed to get minimum ledger slot");
                return t.result
            }

            async getFirstAvailableBlock() {
                const t = m(await this._rpcRequest("getFirstAvailableBlock", []), Mn);
                if ("error" in t) throw new Jr(t.error, "failed to get first available block");
                return t.result
            }

            async getSupply(t) {
                let e = {};
                e = "string" == typeof t ? {commitment: t} : t ? {
                    ...t,
                    commitment: t && t.commitment || this.commitment
                } : {commitment: this.commitment};
                const r = m(await this._rpcRequest("getSupply", [e]), _n);
                if ("error" in r) throw new Jr(r.error, "failed to get supply");
                return r.result
            }

            async getTokenSupply(t, e) {
                const r = this._buildArgs([t.toBase58()], e),
                    n = m(await this._rpcRequest("getTokenSupply", r), on(An));
                if ("error" in n) throw new Jr(n.error, "failed to get token supply");
                return n.result
            }

            async getTokenAccountBalance(t, e) {
                const r = this._buildArgs([t.toBase58()], e),
                    n = m(await this._rpcRequest("getTokenAccountBalance", r), on(An));
                if ("error" in n) throw new Jr(n.error, "failed to get token account balance");
                return n.result
            }

            async getTokenAccountsByOwner(t, e, r) {
                const {commitment: n, config: i} = tn(r);
                let o = [t.toBase58()];
                "mint" in e ? o.push({mint: e.mint.toBase58()}) : o.push({programId: e.programId.toBase58()});
                const s = this._buildArgs(o, n, "base64", i),
                    a = m(await this._rpcRequest("getTokenAccountsByOwner", s), En);
                if ("error" in a) throw new Jr(a.error, `failed to get token accounts owned by account ${t.toBase58()}`);
                return a.result
            }

            async getParsedTokenAccountsByOwner(t, e, r) {
                let n = [t.toBase58()];
                "mint" in e ? n.push({mint: e.mint.toBase58()}) : n.push({programId: e.programId.toBase58()});
                const i = this._buildArgs(n, r, "jsonParsed"),
                    o = m(await this._rpcRequest("getTokenAccountsByOwner", i), Bn);
                if ("error" in o) throw new Jr(o.error, `failed to get token accounts owned by account ${t.toBase58()}`);
                return o.result
            }

            async getLargestAccounts(t) {
                const e = {...t, commitment: t && t.commitment || this.commitment},
                    r = e.filter || e.commitment ? [e] : [], n = m(await this._rpcRequest("getLargestAccounts", r), xn);
                if ("error" in n) throw new Jr(n.error, "failed to get largest accounts");
                return n.result
            }

            async getTokenLargestAccounts(t, e) {
                const r = this._buildArgs([t.toBase58()], e),
                    n = m(await this._rpcRequest("getTokenLargestAccounts", r), kn);
                if ("error" in n) throw new Jr(n.error, "failed to get token largest accounts");
                return n.result
            }

            async getAccountInfoAndContext(t, e) {
                const {commitment: r, config: n} = tn(e), i = this._buildArgs([t.toBase58()], r, "base64", n),
                    o = m(await this._rpcRequest("getAccountInfo", i), on(E(Rn)));
                if ("error" in o) throw new Jr(o.error, `failed to get info about account ${t.toBase58()}`);
                return o.result
            }

            async getParsedAccountInfo(t, e) {
                const {commitment: r, config: n} = tn(e), i = this._buildArgs([t.toBase58()], r, "jsonParsed", n),
                    o = m(await this._rpcRequest("getAccountInfo", i), on(E(Tn)));
                if ("error" in o) throw new Jr(o.error, `failed to get info about account ${t.toBase58()}`);
                return o.result
            }

            async getAccountInfo(t, e) {
                try {
                    return (await this.getAccountInfoAndContext(t, e)).value
                } catch (e) {
                    throw new Error("failed to get info about account " + t.toBase58() + ": " + e)
                }
            }

            async getMultipleAccountsInfoAndContext(t, e) {
                const {commitment: r, config: n} = tn(e), i = t.map((t => t.toBase58())),
                    o = this._buildArgs([i], r, "base64", n),
                    s = m(await this._rpcRequest("getMultipleAccounts", o), on(M(E(Rn))));
                if ("error" in s) throw new Jr(s.error, `failed to get info for accounts ${i}`);
                return s.result
            }

            async getMultipleAccountsInfo(t, e) {
                return (await this.getMultipleAccountsInfoAndContext(t, e)).value
            }

            async getStakeActivation(t, e, r) {
                const {commitment: n, config: i} = tn(e), o = this._buildArgs([t.toBase58()], n, void 0, {
                    ...i,
                    epoch: null != r ? r : null == i ? void 0 : i.epoch
                }), s = m(await this._rpcRequest("getStakeActivation", o), nn(Ln));
                if ("error" in s) throw new Jr(s.error, `failed to get Stake Activation ${t.toBase58()}`);
                return s.result
            }

            async getProgramAccounts(t, e) {
                const {commitment: r, config: n} = tn(e), {encoding: i, ...o} = n || {},
                    s = this._buildArgs([t.toBase58()], r, i || "base64", o),
                    a = m(await this._rpcRequest("getProgramAccounts", s), nn(M(Pn)));
                if ("error" in a) throw new Jr(a.error, `failed to get accounts owned by program ${t.toBase58()}`);
                return a.result
            }

            async getParsedProgramAccounts(t, e) {
                const {commitment: r, config: n} = tn(e), i = this._buildArgs([t.toBase58()], r, "jsonParsed", n),
                    o = m(await this._rpcRequest("getProgramAccounts", i), nn(M(Un)));
                if ("error" in o) throw new Jr(o.error, `failed to get accounts owned by program ${t.toBase58()}`);
                return o.result
            }

            async confirmTransaction(t, e) {
                let r, n;
                r = "string" == typeof t ? t : t.signature;
                try {
                    n = a().decode(r)
                } catch (t) {
                    throw new Error("signature must be base58 encoded: " + r)
                }
                wr(64 === n.length, "signature has invalid length");
                const i = e || this.commitment;
                let o, s, u = !1;
                const c = new Promise(((t, e) => {
                    try {
                        s = this.onSignature(r, ((e, r) => {
                            s = void 0;
                            const n = {context: r, value: e};
                            u = !0, t({__type: vr.PROCESSED, response: n})
                        }), i)
                    } catch (t) {
                        e(t)
                    }
                })), f = new Promise((r => {
                    if ("string" == typeof t) {
                        let t = this._confirmTransactionInitialTimeout || 6e4;
                        switch (i) {
                            case"processed":
                            case"recent":
                            case"single":
                            case"confirmed":
                            case"singleGossip":
                                t = this._confirmTransactionInitialTimeout || 3e4
                        }
                        o = setTimeout((() => r({__type: vr.TIMED_OUT, timeoutMs: t})), t)
                    } else {
                        let n = t;
                        const i = async () => {
                            try {
                                return await this.getBlockHeight(e)
                            } catch (t) {
                                return -1
                            }
                        };
                        (async () => {
                            let t = await i();
                            if (!u) {
                                for (; t <= n.lastValidBlockHeight;) {
                                    if (await xr(1e3), u) return;
                                    if (t = await i(), u) return
                                }
                                r({__type: vr.BLOCKHEIGHT_EXCEEDED})
                            }
                        })()
                    }
                }));
                let h;
                try {
                    const t = await Promise.race([c, f]);
                    switch (t.__type) {
                        case vr.BLOCKHEIGHT_EXCEEDED:
                            throw new dr(r);
                        case vr.PROCESSED:
                            h = t.response;
                            break;
                        case vr.TIMED_OUT:
                            throw new lr(r, t.timeoutMs / 1e3)
                    }
                } finally {
                    clearTimeout(o), s && this.removeSignatureListener(s)
                }
                return h
            }

            async getClusterNodes() {
                const t = m(await this._rpcRequest("getClusterNodes", []), nn(M(Vn)));
                if ("error" in t) throw new Jr(t.error, "failed to get cluster nodes");
                return t.result
            }

            async getVoteAccounts(t) {
                const e = this._buildArgs([], t), r = m(await this._rpcRequest("getVoteAccounts", e), Gn);
                if ("error" in r) throw new Jr(r.error, "failed to get vote accounts");
                return r.result
            }

            async getSlot(t) {
                const {commitment: e, config: r} = tn(t), n = this._buildArgs([], e, void 0, r),
                    i = m(await this._rpcRequest("getSlot", n), nn(I()));
                if ("error" in i) throw new Jr(i.error, "failed to get slot");
                return i.result
            }

            async getSlotLeader(t) {
                const {commitment: e, config: r} = tn(t), n = this._buildArgs([], e, void 0, r),
                    i = m(await this._rpcRequest("getSlotLeader", n), nn(R()));
                if ("error" in i) throw new Jr(i.error, "failed to get slot leader");
                return i.result
            }

            async getSlotLeaders(t, e) {
                const r = [t, e], n = m(await this._rpcRequest("getSlotLeaders", r), nn(M(Yr)));
                if ("error" in n) throw new Jr(n.error, "failed to get slot leaders");
                return n.result
            }

            async getSignatureStatus(t, e) {
                const {context: r, value: n} = await this.getSignatureStatuses([t], e);
                return wr(1 === n.length), {context: r, value: n[0]}
            }

            async getSignatureStatuses(t, e) {
                const r = [t];
                e && r.push(e);
                const n = m(await this._rpcRequest("getSignatureStatuses", r), Xn);
                if ("error" in n) throw new Jr(n.error, "failed to get signature status");
                return n.result
            }

            async getTransactionCount(t) {
                const {commitment: e, config: r} = tn(t), n = this._buildArgs([], e, void 0, r),
                    i = m(await this._rpcRequest("getTransactionCount", n), nn(I()));
                if ("error" in i) throw new Jr(i.error, "failed to get transaction count");
                return i.result
            }

            async getTotalSupply(t) {
                return (await this.getSupply({commitment: t, excludeNonCirculatingAccountsList: !0})).value.total
            }

            async getInflationGovernor(t) {
                const e = this._buildArgs([], t), r = m(await this._rpcRequest("getInflationGovernor", e), mn);
                if ("error" in r) throw new Jr(r.error, "failed to get inflation");
                return r.result
            }

            async getInflationReward(t, e, r) {
                const {commitment: n, config: i} = tn(r), o = this._buildArgs([t.map((t => t.toBase58()))], n, void 0, {
                    ...i,
                    epoch: null != e ? e : null == i ? void 0 : i.epoch
                }), s = m(await this._rpcRequest("getInflationReward", o), un);
                if ("error" in s) throw new Jr(s.error, "failed to get inflation reward");
                return s.result
            }

            async getEpochInfo(t) {
                const {commitment: e, config: r} = tn(t), n = this._buildArgs([], e, void 0, r),
                    i = m(await this._rpcRequest("getEpochInfo", n), wn);
                if ("error" in i) throw new Jr(i.error, "failed to get epoch info");
                return i.result
            }

            async getEpochSchedule() {
                const t = m(await this._rpcRequest("getEpochSchedule", []), vn);
                if ("error" in t) throw new Jr(t.error, "failed to get epoch schedule");
                const e = t.result;
                return new Dr(e.slotsPerEpoch, e.leaderScheduleSlotOffset, e.warmup, e.firstNormalEpoch, e.firstNormalSlot)
            }

            async getLeaderSchedule() {
                const t = m(await this._rpcRequest("getLeaderSchedule", []), Sn);
                if ("error" in t) throw new Jr(t.error, "failed to get leader schedule");
                return t.result
            }

            async getMinimumBalanceForRentExemption(t, e) {
                const r = this._buildArgs([t], e),
                    n = m(await this._rpcRequest("getMinimumBalanceForRentExemption", r), Qn);
                return "error" in n ? (console.warn("Unable to fetch minimum balance for rent exemption"), 0) : n.result
            }

            async getRecentBlockhashAndContext(t) {
                const e = this._buildArgs([], t), r = m(await this._rpcRequest("getRecentBlockhash", e), pi);
                if ("error" in r) throw new Jr(r.error, "failed to get recent blockhash");
                return r.result
            }

            async getRecentPerformanceSamples(t) {
                const e = m(await this._rpcRequest("getRecentPerformanceSamples", t ? [t] : []), gi);
                if ("error" in e) throw new Jr(e.error, "failed to get recent performance samples");
                return e.result
            }

            async getFeeCalculatorForBlockhash(t, e) {
                const r = this._buildArgs([t], e), n = m(await this._rpcRequest("getFeeCalculatorForBlockhash", r), yi);
                if ("error" in n) throw new Jr(n.error, "failed to get fee calculator");
                const {context: i, value: o} = n.result;
                return {context: i, value: null !== o ? o.feeCalculator : null}
            }

            async getFeeForMessage(t, e) {
                const r = t.serialize().toString("base64"), n = this._buildArgs([r], e),
                    i = m(await this._rpcRequest("getFeeForMessage", n), on(E(I())));
                if ("error" in i) throw new Jr(i.error, "failed to get slot");
                if (null === i.result) throw new Error("invalid blockhash");
                return i.result
            }

            async getRecentBlockhash(t) {
                try {
                    return (await this.getRecentBlockhashAndContext(t)).value
                } catch (t) {
                    throw new Error("failed to get recent blockhash: " + t)
                }
            }

            async getLatestBlockhash(t) {
                try {
                    return (await this.getLatestBlockhashAndContext(t)).value
                } catch (t) {
                    throw new Error("failed to get recent blockhash: " + t)
                }
            }

            async getLatestBlockhashAndContext(t) {
                const {commitment: e, config: r} = tn(t), n = this._buildArgs([], e, void 0, r),
                    i = m(await this._rpcRequest("getLatestBlockhash", n), bi);
                if ("error" in i) throw new Jr(i.error, "failed to get latest blockhash");
                return i.result
            }

            async getVersion() {
                const t = m(await this._rpcRequest("getVersion", []), nn(bn));
                if ("error" in t) throw new Jr(t.error, "failed to get version");
                return t.result
            }

            async getGenesisHash() {
                const t = m(await this._rpcRequest("getGenesisHash", []), nn(R()));
                if ("error" in t) throw new Jr(t.error, "failed to get genesis hash");
                return t.result
            }

            async getBlock(t, e) {
                const {commitment: r, config: n} = tn(e), i = this._buildArgsAtLeastConfirmed([t], r, void 0, n),
                    o = m(await this._rpcRequest("getBlock", i), ci);
                if ("error" in o) throw new Jr(o.error, "failed to get confirmed block");
                const s = o.result;
                return s ? {
                    ...s, transactions: s.transactions.map((({transaction: t, meta: e}) => {
                        const r = new mr(t.message);
                        return {meta: e, transaction: {...t, message: r}}
                    }))
                } : s
            }

            async getBlockHeight(t) {
                const {commitment: e, config: r} = tn(t), n = this._buildArgs([], e, void 0, r),
                    i = m(await this._rpcRequest("getBlockHeight", n), nn(I()));
                if ("error" in i) throw new Jr(i.error, "failed to get block height information");
                return i.result
            }

            async getBlockProduction(t) {
                let e, r;
                if ("string" == typeof t) r = t; else if (t) {
                    const {commitment: n, ...i} = t;
                    r = n, e = i
                }
                const n = this._buildArgs([], r, "base64", e),
                    i = m(await this._rpcRequest("getBlockProduction", n), yn);
                if ("error" in i) throw new Jr(i.error, "failed to get block production information");
                return i.result
            }

            async getTransaction(t, e) {
                const {commitment: r, config: n} = tn(e), i = this._buildArgsAtLeastConfirmed([t], r, void 0, n),
                    o = m(await this._rpcRequest("getTransaction", i), di);
                if ("error" in o) throw new Jr(o.error, "failed to get transaction");
                const s = o.result;
                return s ? {...s, transaction: {...s.transaction, message: new mr(s.transaction.message)}} : s
            }

            async getParsedTransaction(t, e) {
                const {commitment: r, config: n} = tn(e), i = this._buildArgsAtLeastConfirmed([t], r, "jsonParsed", n),
                    o = m(await this._rpcRequest("getTransaction", i), li);
                if ("error" in o) throw new Jr(o.error, "failed to get transaction");
                return o.result
            }

            async getParsedTransactions(t, e) {
                const {commitment: r, config: n} = tn(e), i = t.map((t => ({
                    methodName: "getTransaction",
                    args: this._buildArgsAtLeastConfirmed([t], r, "jsonParsed", n)
                })));
                return (await this._rpcBatchRequest(i)).map((t => {
                    const e = m(t, li);
                    if ("error" in e) throw new Jr(e.error, "failed to get transactions");
                    return e.result
                }))
            }

            async getTransactions(t, e) {
                const {commitment: r, config: n} = tn(e), i = t.map((t => ({
                    methodName: "getTransaction",
                    args: this._buildArgsAtLeastConfirmed([t], r, void 0, n)
                })));
                return (await this._rpcBatchRequest(i)).map((t => {
                    const e = m(t, di);
                    if ("error" in e) throw new Jr(e.error, "failed to get transactions");
                    const r = e.result;
                    return r ? {...r, transaction: {...r.transaction, message: new mr(r.transaction.message)}} : r
                }))
            }

            async getConfirmedBlock(t, e) {
                const r = this._buildArgsAtLeastConfirmed([t], e),
                    n = m(await this._rpcRequest("getConfirmedBlock", r), fi);
                if ("error" in n) throw new Jr(n.error, "failed to get confirmed block");
                const i = n.result;
                if (!i) throw new Error("Confirmed block " + t + " not found");
                const o = {
                    ...i, transactions: i.transactions.map((({transaction: t, meta: e}) => {
                        const r = new mr(t.message);
                        return {meta: e, transaction: {...t, message: r}}
                    }))
                };
                return {
                    ...o,
                    transactions: o.transactions.map((({transaction: t, meta: e}) => ({
                        meta: e,
                        transaction: _r.populate(t.message, t.signatures)
                    })))
                }
            }

            async getBlocks(t, e, r) {
                const n = this._buildArgsAtLeastConfirmed(void 0 !== e ? [t, e] : [t], r),
                    i = m(await this._rpcRequest("getBlocks", n), nn(M(I())));
                if ("error" in i) throw new Jr(i.error, "failed to get blocks");
                return i.result
            }

            async getBlockSignatures(t, e) {
                const r = this._buildArgsAtLeastConfirmed([t], e, void 0, {
                    transactionDetails: "signatures",
                    rewards: !1
                }), n = m(await this._rpcRequest("getBlock", r), hi);
                if ("error" in n) throw new Jr(n.error, "failed to get block");
                const i = n.result;
                if (!i) throw new Error("Block " + t + " not found");
                return i
            }

            async getConfirmedBlockSignatures(t, e) {
                const r = this._buildArgsAtLeastConfirmed([t], e, void 0, {
                    transactionDetails: "signatures",
                    rewards: !1
                }), n = m(await this._rpcRequest("getConfirmedBlock", r), hi);
                if ("error" in n) throw new Jr(n.error, "failed to get confirmed block");
                const i = n.result;
                if (!i) throw new Error("Confirmed block " + t + " not found");
                return i
            }

            async getConfirmedTransaction(t, e) {
                const r = this._buildArgsAtLeastConfirmed([t], e),
                    n = m(await this._rpcRequest("getConfirmedTransaction", r), di);
                if ("error" in n) throw new Jr(n.error, "failed to get transaction");
                const i = n.result;
                if (!i) return i;
                const o = new mr(i.transaction.message), s = i.transaction.signatures;
                return {...i, transaction: _r.populate(o, s)}
            }

            async getParsedConfirmedTransaction(t, e) {
                const r = this._buildArgsAtLeastConfirmed([t], e, "jsonParsed"),
                    n = m(await this._rpcRequest("getConfirmedTransaction", r), li);
                if ("error" in n) throw new Jr(n.error, "failed to get confirmed transaction");
                return n.result
            }

            async getParsedConfirmedTransactions(t, e) {
                const r = t.map((t => ({
                    methodName: "getConfirmedTransaction",
                    args: this._buildArgsAtLeastConfirmed([t], e, "jsonParsed")
                })));
                return (await this._rpcBatchRequest(r)).map((t => {
                    const e = m(t, li);
                    if ("error" in e) throw new Jr(e.error, "failed to get confirmed transactions");
                    return e.result
                }))
            }

            async getConfirmedSignaturesForAddress(t, e, r) {
                let n = {}, i = await this.getFirstAvailableBlock();
                for (; !("until" in n) && !(--e <= 0 || e < i);) try {
                    const t = await this.getConfirmedBlockSignatures(e, "finalized");
                    t.signatures.length > 0 && (n.until = t.signatures[t.signatures.length - 1].toString())
                } catch (t) {
                    if (t instanceof Error && t.message.includes("skipped")) continue;
                    throw t
                }
                let o = await this.getSlot("finalized");
                for (; !("before" in n || ++r > o);) try {
                    const t = await this.getConfirmedBlockSignatures(r);
                    t.signatures.length > 0 && (n.before = t.signatures[t.signatures.length - 1].toString())
                } catch (t) {
                    if (t instanceof Error && t.message.includes("skipped")) continue;
                    throw t
                }
                return (await this.getConfirmedSignaturesForAddress2(t, n)).map((t => t.signature))
            }

            async getConfirmedSignaturesForAddress2(t, e, r) {
                const n = this._buildArgsAtLeastConfirmed([t.toBase58()], r, void 0, e),
                    i = m(await this._rpcRequest("getConfirmedSignaturesForAddress2", n), Nn);
                if ("error" in i) throw new Jr(i.error, "failed to get confirmed signatures for address");
                return i.result
            }

            async getSignaturesForAddress(t, e, r) {
                const n = this._buildArgsAtLeastConfirmed([t.toBase58()], r, void 0, e),
                    i = m(await this._rpcRequest("getSignaturesForAddress", n), zn);
                if ("error" in i) throw new Jr(i.error, "failed to get signatures for address");
                return i.result
            }

            async getAddressLookupTable(t, e) {
                const {context: r, value: n} = await this.getAccountInfoAndContext(t, e);
                let i = null;
                return null !== n && (i = new Hr({key: t, state: Hr.deserialize(n.data)})), {context: r, value: i}
            }

            async getNonceAndContext(t, e) {
                const {context: r, value: n} = await this.getAccountInfoAndContext(t, e);
                let i = null;
                return null !== n && (i = Ur.fromAccountData(n.data)), {context: r, value: i}
            }

            async getNonce(t, e) {
                return await this.getNonceAndContext(t, e).then((t => t.value)).catch((e => {
                    throw new Error("failed to get nonce for account " + t.toBase58() + ": " + e)
                }))
            }

            async requestAirdrop(t, e) {
                const r = m(await this._rpcRequest("requestAirdrop", [t.toBase58(), e]), mi);
                if ("error" in r) throw new Jr(r.error, `airdrop to ${t.toBase58()} failed`);
                return r.result
            }

            async _blockhashWithExpiryBlockHeight(t) {
                if (!t) {
                    for (; this._pollingBlockhash;) await xr(100);
                    const t = Date.now() - this._blockhashInfo.lastFetch >= 3e4;
                    if (null !== this._blockhashInfo.latestBlockhash && !t) return this._blockhashInfo.latestBlockhash
                }
                return await this._pollNewBlockhash()
            }

            async _pollNewBlockhash() {
                this._pollingBlockhash = !0;
                try {
                    const t = Date.now(), e = this._blockhashInfo.latestBlockhash, r = e ? e.blockhash : null;
                    for (let t = 0; t < 50; t++) {
                        const t = await this.getLatestBlockhash("finalized");
                        if (r !== t.blockhash) return this._blockhashInfo = {
                            latestBlockhash: t,
                            lastFetch: Date.now(),
                            transactionSignatures: [],
                            simulatedSignatures: []
                        }, t;
                        await xr(200)
                    }
                    throw new Error(`Unable to obtain a new blockhash after ${Date.now() - t}ms`)
                } finally {
                    this._pollingBlockhash = !1
                }
            }

            async getStakeMinimumDelegation(t) {
                const {commitment: e, config: r} = tn(t), n = this._buildArgs([], e, "base64", r),
                    i = m(await this._rpcRequest("getStakeMinimumDelegation", n), on(I()));
                if ("error" in i) throw new Jr(i.error, "failed to get stake minimum delegation");
                return i.result
            }

            async simulateTransaction(t, e, r) {
                let n;
                if (t instanceof _r) {
                    let e = t;
                    n = new _r, n.feePayer = e.feePayer, n.instructions = t.instructions, n.nonceInfo = e.nonceInfo, n.signatures = e.signatures
                } else n = _r.populate(t), n._message = n._json = void 0;
                if (n.nonceInfo && e) n.sign(...e); else {
                    let t = this._disableBlockhashCaching;
                    for (; ;) {
                        const r = await this._blockhashWithExpiryBlockHeight(t);
                        if (n.lastValidBlockHeight = r.lastValidBlockHeight, n.recentBlockhash = r.blockhash, !e) break;
                        if (n.sign(...e), !n.signature) throw new Error("!signature");
                        const i = n.signature.toString("base64");
                        if (!this._blockhashInfo.simulatedSignatures.includes(i) && !this._blockhashInfo.transactionSignatures.includes(i)) {
                            this._blockhashInfo.simulatedSignatures.push(i);
                            break
                        }
                        t = !0
                    }
                }
                const i = n._compile(), o = i.serialize(), s = n._serialize(o).toString("base64"),
                    a = {encoding: "base64", commitment: this.commitment};
                if (r) {
                    const t = (Array.isArray(r) ? r : i.nonProgramIds()).map((t => t.toBase58()));
                    a.accounts = {encoding: "base64", addresses: t}
                }
                e && (a.sigVerify = !0);
                const u = [s, a], c = m(await this._rpcRequest("simulateTransaction", u), gn);
                if ("error" in c) {
                    let t;
                    if ("data" in c.error && (t = c.error.data.logs, t && Array.isArray(t))) {
                        const e = "\n    ", r = e + t.join(e);
                        console.error(c.error.message, r)
                    }
                    throw new $r("failed to simulate transaction: " + c.error.message, t)
                }
                return c.result
            }

            async sendTransaction(t, e, r) {
                if (t.nonceInfo) t.sign(...e); else {
                    let r = this._disableBlockhashCaching;
                    for (; ;) {
                        const n = await this._blockhashWithExpiryBlockHeight(r);
                        if (t.lastValidBlockHeight = n.lastValidBlockHeight, t.recentBlockhash = n.blockhash, t.sign(...e), !t.signature) throw new Error("!signature");
                        const i = t.signature.toString("base64");
                        if (!this._blockhashInfo.transactionSignatures.includes(i)) {
                            this._blockhashInfo.transactionSignatures.push(i);
                            break
                        }
                        r = !0
                    }
                }
                const n = t.serialize();
                return await this.sendRawTransaction(n, r)
            }

            async sendRawTransaction(t, e) {
                const r = F(t).toString("base64");
                return await this.sendEncodedTransaction(r, e)
            }

            async sendEncodedTransaction(t, e) {
                const r = {encoding: "base64"}, n = e && e.skipPreflight,
                    i = e && e.preflightCommitment || this.commitment;
                e && null != e.maxRetries && (r.maxRetries = e.maxRetries), e && null != e.minContextSlot && (r.minContextSlot = e.minContextSlot), n && (r.skipPreflight = n), i && (r.preflightCommitment = i);
                const o = [t, r], s = m(await this._rpcRequest("sendTransaction", o), wi);
                if ("error" in s) {
                    let t;
                    throw"data" in s.error && (t = s.error.data.logs), new $r("failed to send transaction: " + s.error.message, t)
                }
                return s.result
            }

            _wsOnOpen() {
                this._rpcWebSocketConnected = !0, this._rpcWebSocketHeartbeat = setInterval((() => {
                    this._rpcWebSocket.notify("ping").catch((() => {
                    }))
                }), 5e3), this._updateSubscriptions()
            }

            _wsOnError(t) {
                this._rpcWebSocketConnected = !1, console.error("ws error:", t.message)
            }

            _wsOnClose(t) {
                this._rpcWebSocketConnected = !1, this._rpcWebSocketGeneration++, this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null), this._rpcWebSocketHeartbeat && (clearInterval(this._rpcWebSocketHeartbeat), this._rpcWebSocketHeartbeat = null), 1e3 !== t ? (this._subscriptionCallbacksByServerSubscriptionId = {}, Object.entries(this._subscriptionsByHash).forEach((([t, e]) => {
                    this._subscriptionsByHash[t] = {...e, state: "pending"}
                }))) : this._updateSubscriptions()
            }

            async _updateSubscriptions() {
                if (0 === Object.keys(this._subscriptionsByHash).length) return void (this._rpcWebSocketConnected && (this._rpcWebSocketConnected = !1, this._rpcWebSocketIdleTimeout = setTimeout((() => {
                    this._rpcWebSocketIdleTimeout = null;
                    try {
                        this._rpcWebSocket.close()
                    } catch (t) {
                        t instanceof Error && console.log(`Error when closing socket connection: ${t.message}`)
                    }
                }), 500)));
                if (null !== this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketConnected = !0), !this._rpcWebSocketConnected) return void this._rpcWebSocket.connect();
                const t = this._rpcWebSocketGeneration, e = () => t === this._rpcWebSocketGeneration;
                await Promise.all(Object.keys(this._subscriptionsByHash).map((async t => {
                    const r = this._subscriptionsByHash[t];
                    if (void 0 !== r) switch (r.state) {
                        case"pending":
                        case"unsubscribed":
                            if (0 === r.callbacks.size) return delete this._subscriptionsByHash[t], "unsubscribed" === r.state && delete this._subscriptionCallbacksByServerSubscriptionId[r.serverSubscriptionId], void await this._updateSubscriptions();
                            await (async () => {
                                const {args: n, method: i} = r;
                                try {
                                    this._subscriptionsByHash[t] = {...r, state: "subscribing"};
                                    const e = await this._rpcWebSocket.call(i, n);
                                    this._subscriptionsByHash[t] = {
                                        ...r,
                                        serverSubscriptionId: e,
                                        state: "subscribed"
                                    }, this._subscriptionCallbacksByServerSubscriptionId[e] = r.callbacks, await this._updateSubscriptions()
                                } catch (o) {
                                    if (o instanceof Error && console.error(`${i} error for argument`, n, o.message), !e()) return;
                                    this._subscriptionsByHash[t] = {
                                        ...r,
                                        state: "pending"
                                    }, await this._updateSubscriptions()
                                }
                            })();
                            break;
                        case"subscribed":
                            0 === r.callbacks.size && await (async () => {
                                const {serverSubscriptionId: n, unsubscribeMethod: i} = r;
                                if (this._subscriptionsAutoDisposedByRpc.has(n)) this._subscriptionsAutoDisposedByRpc.delete(n); else {
                                    this._subscriptionsByHash[t] = {...r, state: "unsubscribing"};
                                    try {
                                        await this._rpcWebSocket.call(i, [n])
                                    } catch (n) {
                                        if (n instanceof Error && console.error(`${i} error:`, n.message), !e()) return;
                                        return this._subscriptionsByHash[t] = {
                                            ...r,
                                            state: "subscribed"
                                        }, void await this._updateSubscriptions()
                                    }
                                }
                                this._subscriptionsByHash[t] = {
                                    ...r,
                                    state: "unsubscribed"
                                }, await this._updateSubscriptions()
                            })()
                    }
                })))
            }

            _handleServerNotification(t, e) {
                const r = this._subscriptionCallbacksByServerSubscriptionId[t];
                void 0 !== r && r.forEach((t => {
                    try {
                        t(...e)
                    } catch (t) {
                        console.error(t)
                    }
                }))
            }

            _wsOnAccountNotification(t) {
                const {result: e, subscription: r} = m(t, Cn);
                this._handleServerNotification(r, [e.value, e.context])
            }

            _makeSubscription(t, e) {
                const r = this._nextClientSubscriptionId++, n = Kr([t.method, e]), i = this._subscriptionsByHash[n];
                return void 0 === i ? this._subscriptionsByHash[n] = {
                    ...t,
                    args: e,
                    callbacks: new Set([t.callback]),
                    state: "pending"
                } : i.callbacks.add(t.callback), this._subscriptionDisposeFunctionsByClientSubscriptionId[r] = async () => {
                    delete this._subscriptionDisposeFunctionsByClientSubscriptionId[r];
                    const e = this._subscriptionsByHash[n];
                    wr(void 0 !== e, `Could not find a \`Subscription\` when tearing down client subscription #${r}`), e.callbacks.delete(t.callback), await this._updateSubscriptions()
                }, this._updateSubscriptions(), r
            }

            onAccountChange(t, e, r) {
                const n = this._buildArgs([t.toBase58()], r || this._commitment || "finalized", "base64");
                return this._makeSubscription({
                    callback: e,
                    method: "accountSubscribe",
                    unsubscribeMethod: "accountUnsubscribe"
                }, n)
            }

            async removeAccountChangeListener(t) {
                await this._unsubscribeClientSubscription(t, "account change")
            }

            _wsOnProgramAccountNotification(t) {
                const {result: e, subscription: r} = m(t, Wn);
                this._handleServerNotification(r, [{
                    accountId: e.value.pubkey,
                    accountInfo: e.value.account
                }, e.context])
            }

            onProgramAccountChange(t, e, r, n) {
                const i = this._buildArgs([t.toBase58()], r || this._commitment || "finalized", "base64", n ? {filters: n} : void 0);
                return this._makeSubscription({
                    callback: e,
                    method: "programSubscribe",
                    unsubscribeMethod: "programUnsubscribe"
                }, i)
            }

            async removeProgramAccountChangeListener(t) {
                await this._unsubscribeClientSubscription(t, "program account change")
            }

            onLogs(t, e, r) {
                const n = this._buildArgs(["object" == typeof t ? {mentions: [t.toString()]} : t], r || this._commitment || "finalized");
                return this._makeSubscription({
                    callback: e,
                    method: "logsSubscribe",
                    unsubscribeMethod: "logsUnsubscribe"
                }, n)
            }

            async removeOnLogsListener(t) {
                await this._unsubscribeClientSubscription(t, "logs")
            }

            _wsOnLogsNotification(t) {
                const {result: e, subscription: r} = m(t, Si);
                this._handleServerNotification(r, [e.value, e.context])
            }

            _wsOnSlotNotification(t) {
                const {result: e, subscription: r} = m(t, Kn);
                this._handleServerNotification(r, [e])
            }

            onSlotChange(t) {
                return this._makeSubscription({
                    callback: t,
                    method: "slotSubscribe",
                    unsubscribeMethod: "slotUnsubscribe"
                }, [])
            }

            async removeSlotChangeListener(t) {
                await this._unsubscribeClientSubscription(t, "slot change")
            }

            _wsOnSlotUpdatesNotification(t) {
                const {result: e, subscription: r} = m(t, Dn);
                this._handleServerNotification(r, [e])
            }

            onSlotUpdate(t) {
                return this._makeSubscription({
                    callback: t,
                    method: "slotsUpdatesSubscribe",
                    unsubscribeMethod: "slotsUpdatesUnsubscribe"
                }, [])
            }

            async removeSlotUpdateListener(t) {
                await this._unsubscribeClientSubscription(t, "slot update")
            }

            async _unsubscribeClientSubscription(t, e) {
                const r = this._subscriptionDisposeFunctionsByClientSubscriptionId[t];
                r ? await r() : console.warn(`Ignored unsubscribe request because an active subscription with id \`${t}\` for '${e}' events could not be found.`)
            }

            _buildArgs(t, e, r, n) {
                const i = e || this._commitment;
                if (i || r || n) {
                    let e = {};
                    r && (e.encoding = r), i && (e.commitment = i), n && (e = Object.assign(e, n)), t.push(e)
                }
                return t
            }

            _buildArgsAtLeastConfirmed(t, e, r, n) {
                const i = e || this._commitment;
                if (i && !["confirmed", "finalized"].includes(i)) throw new Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
                return this._buildArgs(t, e, r, n)
            }

            _wsOnSignatureNotification(t) {
                const {result: e, subscription: r} = m(t, $n);
                "receivedSignature" !== e.value && this._subscriptionsAutoDisposedByRpc.add(r), this._handleServerNotification(r, "receivedSignature" === e.value ? [{type: "received"}, e.context] : [{
                    type: "status",
                    result: e.value
                }, e.context])
            }

            onSignature(t, e, r) {
                const n = this._buildArgs([t], r || this._commitment || "finalized"), i = this._makeSubscription({
                    callback: (t, r) => {
                        if ("status" === t.type) {
                            e(t.result, r);
                            try {
                                this.removeSignatureListener(i)
                            } catch (t) {
                            }
                        }
                    }, method: "signatureSubscribe", unsubscribeMethod: "signatureUnsubscribe"
                }, n);
                return i
            }

            onSignatureWithOptions(t, e, r) {
                const {commitment: n, ...i} = {...r, commitment: r && r.commitment || this._commitment || "finalized"},
                    o = this._buildArgs([t], n, void 0, i), s = this._makeSubscription({
                        callback: (t, r) => {
                            e(t, r);
                            try {
                                this.removeSignatureListener(s)
                            } catch (t) {
                            }
                        }, method: "signatureSubscribe", unsubscribeMethod: "signatureUnsubscribe"
                    }, o);
                return s
            }

            async removeSignatureListener(t) {
                await this._unsubscribeClientSubscription(t, "signature result")
            }

            _wsOnRootNotification(t) {
                const {result: e, subscription: r} = m(t, Jn);
                this._handleServerNotification(r, [e])
            }

            onRootChange(t) {
                return this._makeSubscription({
                    callback: t,
                    method: "rootSubscribe",
                    unsubscribeMethod: "rootUnsubscribe"
                }, [])
            }

            async removeRootChangeListener(t) {
                await this._unsubscribeClientSubscription(t, "root change")
            }
        }

        class Ai {
            constructor(t) {
                this._keypair = void 0, this._keypair = t || e().sign.keyPair()
            }

            static generate() {
                return new Ai(e().sign.keyPair())
            }

            static fromSecretKey(t, r) {
                const n = e().sign.keyPair.fromSecretKey(t);
                if (!r || !r.skipValidation) {
                    const t = (new TextEncoder).encode("@solana/web3.js-validation-v1"),
                        r = e().sign.detached(t, n.secretKey);
                    if (!e().sign.detached.verify(t, r, n.publicKey)) throw new Error("provided secretKey is invalid")
                }
                return new Ai(n)
            }

            static fromSeed(t) {
                return new Ai(e().sign.keyPair.fromSeed(t))
            }

            get publicKey() {
                return new sr(this._keypair.publicKey)
            }

            get secretKey() {
                return this._keypair.secretKey
            }
        }

        Object.freeze({
            CreateLookupTable: {
                index: 0,
                layout: c.n_([c.Jq("instruction"), Lr("recentSlot"), c.u8("bumpSeed")])
            },
            FreezeLookupTable: {index: 1, layout: c.n_([c.Jq("instruction")])},
            ExtendLookupTable: {
                index: 2,
                layout: c.n_([c.Jq("instruction"), Lr(), c.A9(pr(), c.cv(c.Jq(), -8), "addresses")])
            },
            DeactivateLookupTable: {index: 3, layout: c.n_([c.Jq("instruction")])},
            CloseLookupTable: {index: 4, layout: c.n_([c.Jq("instruction")])}
        });
        new sr("AddressLookupTab1e1111111111111111111111111");
        Object.freeze({
            RequestUnits: {
                index: 0,
                layout: c.n_([c.u8("instruction"), c.Jq("units"), c.Jq("additionalFee")])
            },
            RequestHeapFrame: {index: 1, layout: c.n_([c.u8("instruction"), c.Jq("bytes")])},
            SetComputeUnitLimit: {index: 2, layout: c.n_([c.u8("instruction"), c.Jq("units")])},
            SetComputeUnitPrice: {index: 3, layout: c.n_([c.u8("instruction"), Lr("microLamports")])}
        });
        new sr("ComputeBudget111111111111111111111111111111");
        const ki = c.n_([c.u8("numSignatures"), c.u8("padding"), c.KB("signatureOffset"), c.KB("signatureInstructionIndex"), c.KB("publicKeyOffset"), c.KB("publicKeyInstructionIndex"), c.KB("messageDataOffset"), c.KB("messageDataSize"), c.KB("messageInstructionIndex")]);

        class Ei {
            constructor() {
            }

            static createInstructionWithPublicKey(t) {
                const {publicKey: e, message: r, signature: i, instructionIndex: o} = t;
                wr(32 === e.length, `Public Key must be 32 bytes but received ${e.length} bytes`), wr(64 === i.length, `Signature must be 64 bytes but received ${i.length} bytes`);
                const s = ki.span, a = s + e.length, u = a + i.length, c = n.Buffer.alloc(u + r.length),
                    f = null == o ? 65535 : o;
                return ki.encode({
                    numSignatures: 1,
                    padding: 0,
                    signatureOffset: a,
                    signatureInstructionIndex: f,
                    publicKeyOffset: s,
                    publicKeyInstructionIndex: f,
                    messageDataOffset: u,
                    messageDataSize: r.length,
                    messageInstructionIndex: f
                }, c), c.fill(e, s), c.fill(i, a), c.fill(r, u), new Mr({keys: [], programId: Ei.programId, data: c})
            }

            static createInstructionWithPrivateKey(t) {
                const {privateKey: r, message: n, instructionIndex: i} = t;
                wr(64 === r.length, `Private key must be 64 bytes but received ${r.length} bytes`);
                try {
                    const t = Ai.fromSecretKey(r), o = t.publicKey.toBytes(), s = e().sign.detached(n, t.secretKey);
                    return this.createInstructionWithPublicKey({
                        publicKey: o,
                        message: n,
                        signature: s,
                        instructionIndex: i
                    })
                } catch (t) {
                    throw new Error(`Error creating instruction; ${t}`)
                }
            }
        }

        Ei.programId = new sr("Ed25519SigVerify111111111111111111111111111");
        const {publicKeyCreate: Ii, ecdsaSign: Bi} = W(),
            xi = c.n_([c.u8("numSignatures"), c.KB("signatureOffset"), c.u8("signatureInstructionIndex"), c.KB("ethAddressOffset"), c.u8("ethAddressInstructionIndex"), c.KB("messageDataOffset"), c.KB("messageDataSize"), c.u8("messageInstructionIndex"), c.Ik(20, "ethAddress"), c.Ik(64, "signature"), c.u8("recoveryId")]);

        class Ri {
            constructor() {
            }

            static publicKeyToEthAddress(t) {
                wr(64 === t.length, `Public key must be 64 bytes but received ${t.length} bytes`);
                try {
                    return n.Buffer.from(K().keccak_256.update(F(t)).digest()).slice(-20)
                } catch (t) {
                    throw new Error(`Error constructing Ethereum address: ${t}`)
                }
            }

            static createInstructionWithPublicKey(t) {
                const {publicKey: e, message: r, signature: n, recoveryId: i, instructionIndex: o} = t;
                return Ri.createInstructionWithEthAddress({
                    ethAddress: Ri.publicKeyToEthAddress(e),
                    message: r,
                    signature: n,
                    recoveryId: i,
                    instructionIndex: o
                })
            }

            static createInstructionWithEthAddress(t) {
                const {ethAddress: e, message: r, signature: i, recoveryId: o, instructionIndex: s = 0} = t;
                let a;
                a = "string" == typeof e ? e.startsWith("0x") ? n.Buffer.from(e.substr(2), "hex") : n.Buffer.from(e, "hex") : e, wr(20 === a.length, `Address must be 20 bytes but received ${a.length} bytes`);
                const u = 12 + a.length, c = u + i.length + 1, f = n.Buffer.alloc(xi.span + r.length);
                return xi.encode({
                    numSignatures: 1,
                    signatureOffset: u,
                    signatureInstructionIndex: s,
                    ethAddressOffset: 12,
                    ethAddressInstructionIndex: s,
                    messageDataOffset: c,
                    messageDataSize: r.length,
                    messageInstructionIndex: s,
                    signature: F(i),
                    ethAddress: F(a),
                    recoveryId: o
                }, f), f.fill(F(r), xi.span), new Mr({keys: [], programId: Ri.programId, data: f})
            }

            static createInstructionWithPrivateKey(t) {
                const {privateKey: e, message: r, instructionIndex: i} = t;
                wr(32 === e.length, `Private key must be 32 bytes but received ${e.length} bytes`);
                try {
                    const t = F(e), o = Ii(t, !1).slice(1),
                        s = n.Buffer.from(K().keccak_256.update(F(r)).digest()), {signature: a, recid: u} = Bi(s, t);
                    return this.createInstructionWithPublicKey({
                        publicKey: o,
                        message: r,
                        signature: a,
                        recoveryId: u,
                        instructionIndex: i
                    })
                } catch (t) {
                    throw new Error(`Error creating instruction; ${t}`)
                }
            }
        }

        Ri.programId = new sr("KeccakSecp256k11111111111111111111111111111");
        const Pi = new sr("StakeConfig11111111111111111111111111111111");

        class Oi {
            constructor(t, e, r) {
                this.unixTimestamp = void 0, this.epoch = void 0, this.custodian = void 0, this.unixTimestamp = t, this.epoch = e, this.custodian = r
            }
        }

        Oi.default = new Oi(0, 0, sr.default);
        const Ti = Object.freeze({
            Initialize: {
                index: 0,
                layout: c.n_([c.Jq("instruction"), ((t = "authorized") => c.n_([pr("staker"), pr("withdrawer")], t))(), ((t = "lockup") => c.n_([c.gM("unixTimestamp"), c.gM("epoch"), pr("custodian")], t))()])
            },
            Authorize: {
                index: 1,
                layout: c.n_([c.Jq("instruction"), pr("newAuthorized"), c.Jq("stakeAuthorizationType")])
            },
            Delegate: {index: 2, layout: c.n_([c.Jq("instruction")])},
            Split: {index: 3, layout: c.n_([c.Jq("instruction"), c.gM("lamports")])},
            Withdraw: {index: 4, layout: c.n_([c.Jq("instruction"), c.gM("lamports")])},
            Deactivate: {index: 5, layout: c.n_([c.Jq("instruction")])},
            Merge: {index: 7, layout: c.n_([c.Jq("instruction")])},
            AuthorizeWithSeed: {
                index: 8,
                layout: c.n_([c.Jq("instruction"), pr("newAuthorized"), c.Jq("stakeAuthorizationType"), br("authoritySeed"), pr("authorityOwner")])
            }
        });
        Object.freeze({Staker: {index: 0}, Withdrawer: {index: 1}});

        class Ui {
            constructor() {
            }

            static initialize(t) {
                const {stakePubkey: e, authorized: r, lockup: n} = t, i = n || Oi.default, o = Rr(Ti.Initialize, {
                    authorized: {
                        staker: F(r.staker.toBuffer()),
                        withdrawer: F(r.withdrawer.toBuffer())
                    }, lockup: {unixTimestamp: i.unixTimestamp, epoch: i.epoch, custodian: F(i.custodian.toBuffer())}
                }), s = {
                    keys: [{pubkey: e, isSigner: !1, isWritable: !0}, {pubkey: Er, isSigner: !1, isWritable: !1}],
                    programId: this.programId,
                    data: o
                };
                return new Mr(s)
            }

            static createAccountWithSeed(t) {
                const e = new _r;
                e.add(zr.createAccountWithSeed({
                    fromPubkey: t.fromPubkey,
                    newAccountPubkey: t.stakePubkey,
                    basePubkey: t.basePubkey,
                    seed: t.seed,
                    lamports: t.lamports,
                    space: this.space,
                    programId: this.programId
                }));
                const {stakePubkey: r, authorized: n, lockup: i} = t;
                return e.add(this.initialize({stakePubkey: r, authorized: n, lockup: i}))
            }

            static createAccount(t) {
                const e = new _r;
                e.add(zr.createAccount({
                    fromPubkey: t.fromPubkey,
                    newAccountPubkey: t.stakePubkey,
                    lamports: t.lamports,
                    space: this.space,
                    programId: this.programId
                }));
                const {stakePubkey: r, authorized: n, lockup: i} = t;
                return e.add(this.initialize({stakePubkey: r, authorized: n, lockup: i}))
            }

            static delegate(t) {
                const {stakePubkey: e, authorizedPubkey: r, votePubkey: n} = t, i = Rr(Ti.Delegate);
                return (new _r).add({
                    keys: [{pubkey: e, isSigner: !1, isWritable: !0}, {
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !1
                    }, {pubkey: Ar, isSigner: !1, isWritable: !1}, {
                        pubkey: Ir,
                        isSigner: !1,
                        isWritable: !1
                    }, {pubkey: Pi, isSigner: !1, isWritable: !1}, {pubkey: r, isSigner: !0, isWritable: !1}],
                    programId: this.programId,
                    data: i
                })
            }

            static authorize(t) {
                const {
                        stakePubkey: e,
                        authorizedPubkey: r,
                        newAuthorizedPubkey: n,
                        stakeAuthorizationType: i,
                        custodianPubkey: o
                    } = t, s = Rr(Ti.Authorize, {newAuthorized: F(n.toBuffer()), stakeAuthorizationType: i.index}),
                    a = [{pubkey: e, isSigner: !1, isWritable: !0}, {
                        pubkey: Ar,
                        isSigner: !1,
                        isWritable: !0
                    }, {pubkey: r, isSigner: !0, isWritable: !1}];
                return o && a.push({pubkey: o, isSigner: !1, isWritable: !1}), (new _r).add({
                    keys: a,
                    programId: this.programId,
                    data: s
                })
            }

            static authorizeWithSeed(t) {
                const {
                    stakePubkey: e,
                    authorityBase: r,
                    authoritySeed: n,
                    authorityOwner: i,
                    newAuthorizedPubkey: o,
                    stakeAuthorizationType: s,
                    custodianPubkey: a
                } = t, u = Rr(Ti.AuthorizeWithSeed, {
                    newAuthorized: F(o.toBuffer()),
                    stakeAuthorizationType: s.index,
                    authoritySeed: n,
                    authorityOwner: F(i.toBuffer())
                }), c = [{pubkey: e, isSigner: !1, isWritable: !0}, {
                    pubkey: r,
                    isSigner: !0,
                    isWritable: !1
                }, {pubkey: Ar, isSigner: !1, isWritable: !1}];
                return a && c.push({pubkey: a, isSigner: !1, isWritable: !1}), (new _r).add({
                    keys: c,
                    programId: this.programId,
                    data: u
                })
            }

            static splitInstruction(t) {
                const {stakePubkey: e, authorizedPubkey: r, splitStakePubkey: n, lamports: i} = t,
                    o = Rr(Ti.Split, {lamports: i});
                return new Mr({
                    keys: [{pubkey: e, isSigner: !1, isWritable: !0}, {
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !0
                    }, {pubkey: r, isSigner: !0, isWritable: !1}], programId: this.programId, data: o
                })
            }

            static split(t) {
                const e = new _r;
                return e.add(zr.createAccount({
                    fromPubkey: t.authorizedPubkey,
                    newAccountPubkey: t.splitStakePubkey,
                    lamports: 0,
                    space: this.space,
                    programId: this.programId
                })), e.add(this.splitInstruction(t))
            }

            static splitWithSeed(t) {
                const {
                    stakePubkey: e,
                    authorizedPubkey: r,
                    splitStakePubkey: n,
                    basePubkey: i,
                    seed: o,
                    lamports: s
                } = t, a = new _r;
                return a.add(zr.allocate({
                    accountPubkey: n,
                    basePubkey: i,
                    seed: o,
                    space: this.space,
                    programId: this.programId
                })), a.add(this.splitInstruction({
                    stakePubkey: e,
                    authorizedPubkey: r,
                    splitStakePubkey: n,
                    lamports: s
                }))
            }

            static merge(t) {
                const {stakePubkey: e, sourceStakePubKey: r, authorizedPubkey: n} = t, i = Rr(Ti.Merge);
                return (new _r).add({
                    keys: [{pubkey: e, isSigner: !1, isWritable: !0}, {
                        pubkey: r,
                        isSigner: !1,
                        isWritable: !0
                    }, {pubkey: Ar, isSigner: !1, isWritable: !1}, {
                        pubkey: Ir,
                        isSigner: !1,
                        isWritable: !1
                    }, {pubkey: n, isSigner: !0, isWritable: !1}], programId: this.programId, data: i
                })
            }

            static withdraw(t) {
                const {stakePubkey: e, authorizedPubkey: r, toPubkey: n, lamports: i, custodianPubkey: o} = t,
                    s = Rr(Ti.Withdraw, {lamports: i}), a = [{pubkey: e, isSigner: !1, isWritable: !0}, {
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !0
                    }, {pubkey: Ar, isSigner: !1, isWritable: !1}, {pubkey: Ir, isSigner: !1, isWritable: !1}, {
                        pubkey: r,
                        isSigner: !0,
                        isWritable: !1
                    }];
                return o && a.push({pubkey: o, isSigner: !1, isWritable: !1}), (new _r).add({
                    keys: a,
                    programId: this.programId,
                    data: s
                })
            }

            static deactivate(t) {
                const {stakePubkey: e, authorizedPubkey: r} = t, n = Rr(Ti.Deactivate);
                return (new _r).add({
                    keys: [{pubkey: e, isSigner: !1, isWritable: !0}, {
                        pubkey: Ar,
                        isSigner: !1,
                        isWritable: !1
                    }, {pubkey: r, isSigner: !0, isWritable: !1}], programId: this.programId, data: n
                })
            }
        }

        Ui.programId = new sr("Stake11111111111111111111111111111111111111"), Ui.space = 200;
        const Li = Object.freeze({
            InitializeAccount: {
                index: 0,
                layout: c.n_([c.Jq("instruction"), ((t = "voteInit") => c.n_([pr("nodePubkey"), pr("authorizedVoter"), pr("authorizedWithdrawer"), c.u8("commission")], t))()])
            },
            Authorize: {
                index: 1,
                layout: c.n_([c.Jq("instruction"), pr("newAuthorized"), c.Jq("voteAuthorizationType")])
            },
            Withdraw: {index: 3, layout: c.n_([c.Jq("instruction"), c.gM("lamports")])}
        });
        Object.freeze({Voter: {index: 0}, Withdrawer: {index: 1}});

        class Ni {
            constructor() {
            }

            static initializeAccount(t) {
                const {votePubkey: e, nodePubkey: r, voteInit: n} = t, i = Rr(Li.InitializeAccount, {
                    voteInit: {
                        nodePubkey: F(n.nodePubkey.toBuffer()),
                        authorizedVoter: F(n.authorizedVoter.toBuffer()),
                        authorizedWithdrawer: F(n.authorizedWithdrawer.toBuffer()),
                        commission: n.commission
                    }
                }), o = {
                    keys: [{pubkey: e, isSigner: !1, isWritable: !0}, {
                        pubkey: Er,
                        isSigner: !1,
                        isWritable: !1
                    }, {pubkey: Ar, isSigner: !1, isWritable: !1}, {pubkey: r, isSigner: !0, isWritable: !1}],
                    programId: this.programId,
                    data: i
                };
                return new Mr(o)
            }

            static createAccount(t) {
                const e = new _r;
                return e.add(zr.createAccount({
                    fromPubkey: t.fromPubkey,
                    newAccountPubkey: t.votePubkey,
                    lamports: t.lamports,
                    space: this.space,
                    programId: this.programId
                })), e.add(this.initializeAccount({
                    votePubkey: t.votePubkey,
                    nodePubkey: t.voteInit.nodePubkey,
                    voteInit: t.voteInit
                }))
            }

            static authorize(t) {
                const {votePubkey: e, authorizedPubkey: r, newAuthorizedPubkey: n, voteAuthorizationType: i} = t,
                    o = Rr(Li.Authorize, {newAuthorized: F(n.toBuffer()), voteAuthorizationType: i.index}),
                    s = [{pubkey: e, isSigner: !1, isWritable: !0}, {
                        pubkey: Ar,
                        isSigner: !1,
                        isWritable: !1
                    }, {pubkey: r, isSigner: !0, isWritable: !1}];
                return (new _r).add({keys: s, programId: this.programId, data: o})
            }

            static withdraw(t) {
                const {votePubkey: e, authorizedWithdrawerPubkey: r, lamports: n, toPubkey: i} = t,
                    o = Rr(Li.Withdraw, {lamports: n}), s = [{pubkey: e, isSigner: !1, isWritable: !0}, {
                        pubkey: i,
                        isSigner: !1,
                        isWritable: !0
                    }, {pubkey: r, isSigner: !0, isWritable: !1}];
                return (new _r).add({keys: s, programId: this.programId, data: o})
            }

            static safeWithdraw(t, e, r) {
                if (t.lamports > e - r) throw new Error("Withdraw will leave vote account with insuffcient funds.");
                return Ni.withdraw(t)
            }
        }

        Ni.programId = new sr("Vote111111111111111111111111111111111111111"), Ni.space = 3731, new sr("Va1idator1nfo111111111111111111111111111111"), O({
            name: R(),
            website: B(R()),
            details: B(R()),
            keybaseUsername: B(R())
        }), new sr("Vote111111111111111111111111111111111111111"), c.n_([pr("nodePubkey"), pr("authorizedWithdrawer"), c.u8("commission"), c._O(), c.A9(c.n_([c._O("slot"), c.Jq("confirmationCount")]), c.cv(c.Jq(), -8), "votes"), c.u8("rootSlotValid"), c._O("rootSlot"), c._O(), c.A9(c.n_([c._O("epoch"), pr("authorizedVoter")]), c.cv(c.Jq(), -8), "authorizedVoters"), c.n_([c.A9(c.n_([pr("authorizedPubkey"), c._O("epochOfLastAuthorizedSwitch"), c._O("targetEpoch")]), 32, "buf"), c._O("idx"), c.u8("isEmpty")], "priorVoters"), c._O(), c.A9(c.n_([c._O("epoch"), c._O("credits"), c._O("prevCredits")]), c.cv(c.Jq(), -8), "epochCredits"), c.n_([c._O("slot"), c._O("timestamp")], "lastTimestamp")]);
        const zi = 1e9;

        function Ci(t, e, r) {
            return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r, t
        }

        for (var qi = {}, Wi = {
            byteLength: function (t) {
                var e = Vi(t), r = e[0], n = e[1];
                return 3 * (r + n) / 4 - n
            }, toByteArray: function (t) {
                var e, r, n = Vi(t), i = n[0], o = n[1], s = new Fi(function (t, e, r) {
                    return 3 * (e + r) / 4 - r
                }(0, i, o)), a = 0, u = o > 0 ? i - 4 : i;
                for (r = 0; r < u; r += 4) e = Ki[t.charCodeAt(r)] << 18 | Ki[t.charCodeAt(r + 1)] << 12 | Ki[t.charCodeAt(r + 2)] << 6 | Ki[t.charCodeAt(r + 3)], s[a++] = e >> 16 & 255, s[a++] = e >> 8 & 255, s[a++] = 255 & e;
                return 2 === o && (e = Ki[t.charCodeAt(r)] << 2 | Ki[t.charCodeAt(r + 1)] >> 4, s[a++] = 255 & e), 1 === o && (e = Ki[t.charCodeAt(r)] << 10 | Ki[t.charCodeAt(r + 1)] << 4 | Ki[t.charCodeAt(r + 2)] >> 2, s[a++] = e >> 8 & 255, s[a++] = 255 & e), s
            }, fromByteArray: function (t) {
                for (var e, r = t.length, n = r % 3, i = [], o = 16383, s = 0, a = r - n; s < a; s += o) i.push(Hi(t, s, s + o > a ? a : s + o));
                return 1 === n ? (e = t[r - 1], i.push(ji[e >> 2] + ji[e << 4 & 63] + "==")) : 2 === n && (e = (t[r - 2] << 8) + t[r - 1], i.push(ji[e >> 10] + ji[e >> 4 & 63] + ji[e << 2 & 63] + "=")), i.join("")
            }
        }, ji = [], Ki = [], Fi = "undefined" != typeof Uint8Array ? Uint8Array : Array, Di = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", $i = 0, Ji = Di.length; $i < Ji; ++$i) ji[$i] = Di[$i], Ki[Di.charCodeAt($i)] = $i;

        function Vi(t) {
            var e = t.length;
            if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var r = t.indexOf("=");
            return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4]
        }

        function Hi(t, e, r) {
            for (var n, i, o = [], s = e; s < r; s += 3) n = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]), o.push(ji[(i = n) >> 18 & 63] + ji[i >> 12 & 63] + ji[i >> 6 & 63] + ji[63 & i]);
            return o.join("")
        }

        Ki["-".charCodeAt(0)] = 62, Ki["_".charCodeAt(0)] = 63;
        var Gi = {
            read: function (t, e, r, n, i) {
                var o, s, a = 8 * i - n - 1, u = (1 << a) - 1, c = u >> 1, f = -7, h = r ? i - 1 : 0, d = r ? -1 : 1,
                    l = t[e + h];
                for (h += d, o = l & (1 << -f) - 1, l >>= -f, f += a; f > 0; o = 256 * o + t[e + h], h += d, f -= 8) ;
                for (s = o & (1 << -f) - 1, o >>= -f, f += n; f > 0; s = 256 * s + t[e + h], h += d, f -= 8) ;
                if (0 === o) o = 1 - c; else {
                    if (o === u) return s ? NaN : 1 / 0 * (l ? -1 : 1);
                    s += Math.pow(2, n), o -= c
                }
                return (l ? -1 : 1) * s * Math.pow(2, o - n)
            }, write: function (t, e, r, n, i, o) {
                var s, a, u, c = 8 * o - i - 1, f = (1 << c) - 1, h = f >> 1,
                    d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, l = n ? 0 : o - 1, p = n ? 1 : -1,
                    b = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = f) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e += s + h >= 1 ? d / u : d * Math.pow(2, 1 - h)) * u >= 2 && (s++, u /= 2), s + h >= f ? (a = 0, s = f) : s + h >= 1 ? (a = (e * u - 1) * Math.pow(2, i), s += h) : (a = e * Math.pow(2, h - 1) * Math.pow(2, i), s = 0)); i >= 8; t[r + l] = 255 & a, l += p, a /= 256, i -= 8) ;
                for (s = s << i | a, c += i; c > 0; t[r + l] = 255 & s, l += p, s /= 256, c -= 8) ;
                t[r + l - p] |= 128 * b
            }
        };
        !function (t) {
            const e = Wi, r = Gi,
                n = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
            t.Buffer = s, t.SlowBuffer = function (t) {
                return +t != t && (t = 0), s.alloc(+t)
            }, t.INSPECT_MAX_BYTES = 50;
            const i = 2147483647;

            function o(t) {
                if (t > i) throw new RangeError('The value "' + t + '" is invalid for option "size"');
                const e = new Uint8Array(t);
                return Object.setPrototypeOf(e, s.prototype), e
            }

            function s(t, e, r) {
                if ("number" == typeof t) {
                    if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
                    return c(t)
                }
                return a(t, e, r)
            }

            function a(t, e, r) {
                if ("string" == typeof t) return function (t, e) {
                    if ("string" == typeof e && "" !== e || (e = "utf8"), !s.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
                    const r = 0 | l(t, e);
                    let n = o(r);
                    const i = n.write(t, e);
                    return i !== r && (n = n.slice(0, i)), n
                }(t, e);
                if (ArrayBuffer.isView(t)) return function (t) {
                    if (V(t, Uint8Array)) {
                        const e = new Uint8Array(t);
                        return h(e.buffer, e.byteOffset, e.byteLength)
                    }
                    return f(t)
                }(t);
                if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                if (V(t, ArrayBuffer) || t && V(t.buffer, ArrayBuffer)) return h(t, e, r);
                if ("undefined" != typeof SharedArrayBuffer && (V(t, SharedArrayBuffer) || t && V(t.buffer, SharedArrayBuffer))) return h(t, e, r);
                if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
                const n = t.valueOf && t.valueOf();
                if (null != n && n !== t) return s.from(n, e, r);
                const i = function (t) {
                    if (s.isBuffer(t)) {
                        const e = 0 | d(t.length), r = o(e);
                        return 0 === r.length || t.copy(r, 0, 0, e), r
                    }
                    return void 0 !== t.length ? "number" != typeof t.length || H(t.length) ? o(0) : f(t) : "Buffer" === t.type && Array.isArray(t.data) ? f(t.data) : void 0
                }(t);
                if (i) return i;
                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return s.from(t[Symbol.toPrimitive]("string"), e, r);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
            }

            function u(t) {
                if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
                if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
            }

            function c(t) {
                return u(t), o(t < 0 ? 0 : 0 | d(t))
            }

            function f(t) {
                const e = t.length < 0 ? 0 : 0 | d(t.length), r = o(e);
                for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
                return r
            }

            function h(t, e, r) {
                if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
                if (t.byteLength < e + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
                let n;
                return n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r), Object.setPrototypeOf(n, s.prototype), n
            }

            function d(t) {
                if (t >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
                return 0 | t
            }

            function l(t, e) {
                if (s.isBuffer(t)) return t.length;
                if (ArrayBuffer.isView(t) || V(t, ArrayBuffer)) return t.byteLength;
                if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                const r = t.length, n = arguments.length > 2 && !0 === arguments[2];
                if (!n && 0 === r) return 0;
                let i = !1;
                for (; ;) switch (e) {
                    case"ascii":
                    case"latin1":
                    case"binary":
                        return r;
                    case"utf8":
                    case"utf-8":
                        return D(t).length;
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return 2 * r;
                    case"hex":
                        return r >>> 1;
                    case"base64":
                        return $(t).length;
                    default:
                        if (i) return n ? -1 : D(t).length;
                        e = ("" + e).toLowerCase(), i = !0
                }
            }

            function p(t, e, r) {
                let n = !1;
                if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                if ((r >>>= 0) <= (e >>>= 0)) return "";
                for (t || (t = "utf8"); ;) switch (t) {
                    case"hex":
                        return B(this, e, r);
                    case"utf8":
                    case"utf-8":
                        return A(this, e, r);
                    case"ascii":
                        return E(this, e, r);
                    case"latin1":
                    case"binary":
                        return I(this, e, r);
                    case"base64":
                        return _(this, e, r);
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return x(this, e, r);
                    default:
                        if (n) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), n = !0
                }
            }

            function b(t, e, r) {
                const n = t[e];
                t[e] = t[r], t[r] = n
            }

            function g(t, e, r, n, i) {
                if (0 === t.length) return -1;
                if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), H(r = +r) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
                    if (i) return -1;
                    r = t.length - 1
                } else if (r < 0) {
                    if (!i) return -1;
                    r = 0
                }
                if ("string" == typeof e && (e = s.from(e, n)), s.isBuffer(e)) return 0 === e.length ? -1 : y(t, e, r, n, i);
                if ("number" == typeof e) return e &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : y(t, [e], r, n, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function y(t, e, r, n, i) {
                let o, s = 1, a = t.length, u = e.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (t.length < 2 || e.length < 2) return -1;
                    s = 2, a /= 2, u /= 2, r /= 2
                }

                function c(t, e) {
                    return 1 === s ? t[e] : t.readUInt16BE(e * s)
                }

                if (i) {
                    let n = -1;
                    for (o = r; o < a; o++) if (c(t, o) === c(e, -1 === n ? 0 : o - n)) {
                        if (-1 === n && (n = o), o - n + 1 === u) return n * s
                    } else -1 !== n && (o -= o - n), n = -1
                } else for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
                    let r = !0;
                    for (let n = 0; n < u; n++) if (c(t, o + n) !== c(e, n)) {
                        r = !1;
                        break
                    }
                    if (r) return o
                }
                return -1
            }

            function m(t, e, r, n) {
                r = Number(r) || 0;
                const i = t.length - r;
                n ? (n = Number(n)) > i && (n = i) : n = i;
                const o = e.length;
                let s;
                for (n > o / 2 && (n = o / 2), s = 0; s < n; ++s) {
                    const n = parseInt(e.substr(2 * s, 2), 16);
                    if (H(n)) return s;
                    t[r + s] = n
                }
                return s
            }

            function w(t, e, r, n) {
                return J(D(e, t.length - r), t, r, n)
            }

            function v(t, e, r, n) {
                return J(function (t) {
                    const e = [];
                    for (let r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                    return e
                }(e), t, r, n)
            }

            function S(t, e, r, n) {
                return J($(e), t, r, n)
            }

            function M(t, e, r, n) {
                return J(function (t, e) {
                    let r, n, i;
                    const o = [];
                    for (let s = 0; s < t.length && !((e -= 2) < 0); ++s) r = t.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n);
                    return o
                }(e, t.length - r), t, r, n)
            }

            function _(t, r, n) {
                return 0 === r && n === t.length ? e.fromByteArray(t) : e.fromByteArray(t.slice(r, n))
            }

            function A(t, e, r) {
                r = Math.min(t.length, r);
                const n = [];
                let i = e;
                for (; i < r;) {
                    const e = t[i];
                    let o = null, s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
                    if (i + s <= r) {
                        let r, n, a, u;
                        switch (s) {
                            case 1:
                                e < 128 && (o = e);
                                break;
                            case 2:
                                r = t[i + 1], 128 == (192 & r) && (u = (31 & e) << 6 | 63 & r, u > 127 && (o = u));
                                break;
                            case 3:
                                r = t[i + 1], n = t[i + 2], 128 == (192 & r) && 128 == (192 & n) && (u = (15 & e) << 12 | (63 & r) << 6 | 63 & n, u > 2047 && (u < 55296 || u > 57343) && (o = u));
                                break;
                            case 4:
                                r = t[i + 1], n = t[i + 2], a = t[i + 3], 128 == (192 & r) && 128 == (192 & n) && 128 == (192 & a) && (u = (15 & e) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & a, u > 65535 && u < 1114112 && (o = u))
                        }
                    }
                    null === o ? (o = 65533, s = 1) : o > 65535 && (o -= 65536, n.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), n.push(o), i += s
                }
                return function (t) {
                    const e = t.length;
                    if (e <= k) return String.fromCharCode.apply(String, t);
                    let r = "", n = 0;
                    for (; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += k));
                    return r
                }(n)
            }

            t.kMaxLength = i, s.TYPED_ARRAY_SUPPORT = function () {
                try {
                    const t = new Uint8Array(1), e = {
                        foo: function () {
                            return 42
                        }
                    };
                    return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
                } catch (t) {
                    return !1
                }
            }(), s.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(s.prototype, "parent", {
                enumerable: !0,
                get: function () {
                    if (s.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(s.prototype, "offset", {
                enumerable: !0, get: function () {
                    if (s.isBuffer(this)) return this.byteOffset
                }
            }), s.poolSize = 8192, s.from = function (t, e, r) {
                return a(t, e, r)
            }, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array), s.alloc = function (t, e, r) {
                return function (t, e, r) {
                    return u(t), t <= 0 ? o(t) : void 0 !== e ? "string" == typeof r ? o(t).fill(e, r) : o(t).fill(e) : o(t)
                }(t, e, r)
            }, s.allocUnsafe = function (t) {
                return c(t)
            }, s.allocUnsafeSlow = function (t) {
                return c(t)
            }, s.isBuffer = function (t) {
                return null != t && !0 === t._isBuffer && t !== s.prototype
            }, s.compare = function (t, e) {
                if (V(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), V(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(t) || !s.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (t === e) return 0;
                let r = t.length, n = e.length;
                for (let i = 0, o = Math.min(r, n); i < o; ++i) if (t[i] !== e[i]) {
                    r = t[i], n = e[i];
                    break
                }
                return r < n ? -1 : n < r ? 1 : 0
            }, s.isEncoding = function (t) {
                switch (String(t).toLowerCase()) {
                    case"hex":
                    case"utf8":
                    case"utf-8":
                    case"ascii":
                    case"latin1":
                    case"binary":
                    case"base64":
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, s.concat = function (t, e) {
                if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return s.alloc(0);
                let r;
                if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
                const n = s.allocUnsafe(e);
                let i = 0;
                for (r = 0; r < t.length; ++r) {
                    let e = t[r];
                    if (V(e, Uint8Array)) i + e.length > n.length ? (s.isBuffer(e) || (e = s.from(e)), e.copy(n, i)) : Uint8Array.prototype.set.call(n, e, i); else {
                        if (!s.isBuffer(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                        e.copy(n, i)
                    }
                    i += e.length
                }
                return n
            }, s.byteLength = l, s.prototype._isBuffer = !0, s.prototype.swap16 = function () {
                const t = this.length;
                if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (let e = 0; e < t; e += 2) b(this, e, e + 1);
                return this
            }, s.prototype.swap32 = function () {
                const t = this.length;
                if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (let e = 0; e < t; e += 4) b(this, e, e + 3), b(this, e + 1, e + 2);
                return this
            }, s.prototype.swap64 = function () {
                const t = this.length;
                if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (let e = 0; e < t; e += 8) b(this, e, e + 7), b(this, e + 1, e + 6), b(this, e + 2, e + 5), b(this, e + 3, e + 4);
                return this
            }, s.prototype.toString = function () {
                const t = this.length;
                return 0 === t ? "" : 0 === arguments.length ? A(this, 0, t) : p.apply(this, arguments)
            }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function (t) {
                if (!s.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === s.compare(this, t)
            }, s.prototype.inspect = function () {
                let e = "";
                const r = t.INSPECT_MAX_BYTES;
                return e = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (e += " ... "), "<Buffer " + e + ">"
            }, n && (s.prototype[n] = s.prototype.inspect), s.prototype.compare = function (t, e, r, n, i) {
                if (V(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length) throw new RangeError("out of range index");
                if (n >= i && e >= r) return 0;
                if (n >= i) return -1;
                if (e >= r) return 1;
                if (this === t) return 0;
                let o = (i >>>= 0) - (n >>>= 0), a = (r >>>= 0) - (e >>>= 0);
                const u = Math.min(o, a), c = this.slice(n, i), f = t.slice(e, r);
                for (let t = 0; t < u; ++t) if (c[t] !== f[t]) {
                    o = c[t], a = f[t];
                    break
                }
                return o < a ? -1 : a < o ? 1 : 0
            }, s.prototype.includes = function (t, e, r) {
                return -1 !== this.indexOf(t, e, r)
            }, s.prototype.indexOf = function (t, e, r) {
                return g(this, t, e, r, !0)
            }, s.prototype.lastIndexOf = function (t, e, r) {
                return g(this, t, e, r, !1)
            }, s.prototype.write = function (t, e, r, n) {
                if (void 0 === e) n = "utf8", r = this.length, e = 0; else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0; else {
                    if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                }
                const i = this.length - e;
                if ((void 0 === r || r > i) && (r = i), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                let o = !1;
                for (; ;) switch (n) {
                    case"hex":
                        return m(this, t, e, r);
                    case"utf8":
                    case"utf-8":
                        return w(this, t, e, r);
                    case"ascii":
                    case"latin1":
                    case"binary":
                        return v(this, t, e, r);
                    case"base64":
                        return S(this, t, e, r);
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return M(this, t, e, r);
                    default:
                        if (o) throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), o = !0
                }
            }, s.prototype.toJSON = function () {
                return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
            };
            const k = 4096;

            function E(t, e, r) {
                let n = "";
                r = Math.min(t.length, r);
                for (let i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
                return n
            }

            function I(t, e, r) {
                let n = "";
                r = Math.min(t.length, r);
                for (let i = e; i < r; ++i) n += String.fromCharCode(t[i]);
                return n
            }

            function B(t, e, r) {
                const n = t.length;
                (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                let i = "";
                for (let n = e; n < r; ++n) i += G[t[n]];
                return i
            }

            function x(t, e, r) {
                const n = t.slice(e, r);
                let i = "";
                for (let t = 0; t < n.length - 1; t += 2) i += String.fromCharCode(n[t] + 256 * n[t + 1]);
                return i
            }

            function R(t, e, r) {
                if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                if (t + e > r) throw new RangeError("Trying to access beyond buffer length")
            }

            function P(t, e, r, n, i, o) {
                if (!s.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
                if (r + n > t.length) throw new RangeError("Index out of range")
            }

            function O(t, e, r, n, i) {
                W(e, n, i, t, r, 7);
                let o = Number(e & BigInt(4294967295));
                t[r++] = o, o >>= 8, t[r++] = o, o >>= 8, t[r++] = o, o >>= 8, t[r++] = o;
                let s = Number(e >> BigInt(32) & BigInt(4294967295));
                return t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, r
            }

            function T(t, e, r, n, i) {
                W(e, n, i, t, r, 7);
                let o = Number(e & BigInt(4294967295));
                t[r + 7] = o, o >>= 8, t[r + 6] = o, o >>= 8, t[r + 5] = o, o >>= 8, t[r + 4] = o;
                let s = Number(e >> BigInt(32) & BigInt(4294967295));
                return t[r + 3] = s, s >>= 8, t[r + 2] = s, s >>= 8, t[r + 1] = s, s >>= 8, t[r] = s, r + 8
            }

            function U(t, e, r, n, i, o) {
                if (r + n > t.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range")
            }

            function L(t, e, n, i, o) {
                return e = +e, n >>>= 0, o || U(t, 0, n, 4), r.write(t, e, n, i, 23, 4), n + 4
            }

            function N(t, e, n, i, o) {
                return e = +e, n >>>= 0, o || U(t, 0, n, 8), r.write(t, e, n, i, 52, 8), n + 8
            }

            s.prototype.slice = function (t, e) {
                const r = this.length;
                (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
                const n = this.subarray(t, e);
                return Object.setPrototypeOf(n, s.prototype), n
            }, s.prototype.readUintLE = s.prototype.readUIntLE = function (t, e, r) {
                t >>>= 0, e >>>= 0, r || R(t, e, this.length);
                let n = this[t], i = 1, o = 0;
                for (; ++o < e && (i *= 256);) n += this[t + o] * i;
                return n
            }, s.prototype.readUintBE = s.prototype.readUIntBE = function (t, e, r) {
                t >>>= 0, e >>>= 0, r || R(t, e, this.length);
                let n = this[t + --e], i = 1;
                for (; e > 0 && (i *= 256);) n += this[t + --e] * i;
                return n
            }, s.prototype.readUint8 = s.prototype.readUInt8 = function (t, e) {
                return t >>>= 0, e || R(t, 1, this.length), this[t]
            }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function (t, e) {
                return t >>>= 0, e || R(t, 2, this.length), this[t] | this[t + 1] << 8
            }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function (t, e) {
                return t >>>= 0, e || R(t, 2, this.length), this[t] << 8 | this[t + 1]
            }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function (t, e) {
                return t >>>= 0, e || R(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function (t, e) {
                return t >>>= 0, e || R(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }, s.prototype.readBigUInt64LE = Z((function (t) {
                j(t >>>= 0, "offset");
                const e = this[t], r = this[t + 7];
                void 0 !== e && void 0 !== r || K(t, this.length - 8);
                const n = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
                    i = this[++t] + 256 * this[++t] + 65536 * this[++t] + r * 2 ** 24;
                return BigInt(n) + (BigInt(i) << BigInt(32))
            })), s.prototype.readBigUInt64BE = Z((function (t) {
                j(t >>>= 0, "offset");
                const e = this[t], r = this[t + 7];
                void 0 !== e && void 0 !== r || K(t, this.length - 8);
                const n = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
                    i = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r;
                return (BigInt(n) << BigInt(32)) + BigInt(i)
            })), s.prototype.readIntLE = function (t, e, r) {
                t >>>= 0, e >>>= 0, r || R(t, e, this.length);
                let n = this[t], i = 1, o = 0;
                for (; ++o < e && (i *= 256);) n += this[t + o] * i;
                return i *= 128, n >= i && (n -= Math.pow(2, 8 * e)), n
            }, s.prototype.readIntBE = function (t, e, r) {
                t >>>= 0, e >>>= 0, r || R(t, e, this.length);
                let n = e, i = 1, o = this[t + --n];
                for (; n > 0 && (i *= 256);) o += this[t + --n] * i;
                return i *= 128, o >= i && (o -= Math.pow(2, 8 * e)), o
            }, s.prototype.readInt8 = function (t, e) {
                return t >>>= 0, e || R(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            }, s.prototype.readInt16LE = function (t, e) {
                t >>>= 0, e || R(t, 2, this.length);
                const r = this[t] | this[t + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, s.prototype.readInt16BE = function (t, e) {
                t >>>= 0, e || R(t, 2, this.length);
                const r = this[t + 1] | this[t] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, s.prototype.readInt32LE = function (t, e) {
                return t >>>= 0, e || R(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }, s.prototype.readInt32BE = function (t, e) {
                return t >>>= 0, e || R(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }, s.prototype.readBigInt64LE = Z((function (t) {
                j(t >>>= 0, "offset");
                const e = this[t], r = this[t + 7];
                void 0 !== e && void 0 !== r || K(t, this.length - 8);
                const n = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24);
                return (BigInt(n) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24)
            })), s.prototype.readBigInt64BE = Z((function (t) {
                j(t >>>= 0, "offset");
                const e = this[t], r = this[t + 7];
                void 0 !== e && void 0 !== r || K(t, this.length - 8);
                const n = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
                return (BigInt(n) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r)
            })), s.prototype.readFloatLE = function (t, e) {
                return t >>>= 0, e || R(t, 4, this.length), r.read(this, t, !0, 23, 4)
            }, s.prototype.readFloatBE = function (t, e) {
                return t >>>= 0, e || R(t, 4, this.length), r.read(this, t, !1, 23, 4)
            }, s.prototype.readDoubleLE = function (t, e) {
                return t >>>= 0, e || R(t, 8, this.length), r.read(this, t, !0, 52, 8)
            }, s.prototype.readDoubleBE = function (t, e) {
                return t >>>= 0, e || R(t, 8, this.length), r.read(this, t, !1, 52, 8)
            }, s.prototype.writeUintLE = s.prototype.writeUIntLE = function (t, e, r, n) {
                t = +t, e >>>= 0, r >>>= 0, n || P(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                let i = 1, o = 0;
                for (this[e] = 255 & t; ++o < r && (i *= 256);) this[e + o] = t / i & 255;
                return e + r
            }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function (t, e, r, n) {
                t = +t, e >>>= 0, r >>>= 0, n || P(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                let i = r - 1, o = 1;
                for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;
                return e + r
            }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function (t, e, r) {
                return t = +t, e >>>= 0, r || P(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
            }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function (t, e, r) {
                return t = +t, e >>>= 0, r || P(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
            }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function (t, e, r) {
                return t = +t, e >>>= 0, r || P(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
            }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function (t, e, r) {
                return t = +t, e >>>= 0, r || P(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
            }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function (t, e, r) {
                return t = +t, e >>>= 0, r || P(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
            }, s.prototype.writeBigUInt64LE = Z((function (t, e = 0) {
                return O(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
            })), s.prototype.writeBigUInt64BE = Z((function (t, e = 0) {
                return T(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
            })), s.prototype.writeIntLE = function (t, e, r, n) {
                if (t = +t, e >>>= 0, !n) {
                    const n = Math.pow(2, 8 * r - 1);
                    P(this, t, e, r, n - 1, -n)
                }
                let i = 0, o = 1, s = 0;
                for (this[e] = 255 & t; ++i < r && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1), this[e + i] = (t / o >> 0) - s & 255;
                return e + r
            }, s.prototype.writeIntBE = function (t, e, r, n) {
                if (t = +t, e >>>= 0, !n) {
                    const n = Math.pow(2, 8 * r - 1);
                    P(this, t, e, r, n - 1, -n)
                }
                let i = r - 1, o = 1, s = 0;
                for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1), this[e + i] = (t / o >> 0) - s & 255;
                return e + r
            }, s.prototype.writeInt8 = function (t, e, r) {
                return t = +t, e >>>= 0, r || P(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
            }, s.prototype.writeInt16LE = function (t, e, r) {
                return t = +t, e >>>= 0, r || P(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
            }, s.prototype.writeInt16BE = function (t, e, r) {
                return t = +t, e >>>= 0, r || P(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
            }, s.prototype.writeInt32LE = function (t, e, r) {
                return t = +t, e >>>= 0, r || P(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
            }, s.prototype.writeInt32BE = function (t, e, r) {
                return t = +t, e >>>= 0, r || P(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
            }, s.prototype.writeBigInt64LE = Z((function (t, e = 0) {
                return O(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            })), s.prototype.writeBigInt64BE = Z((function (t, e = 0) {
                return T(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            })), s.prototype.writeFloatLE = function (t, e, r) {
                return L(this, t, e, !0, r)
            }, s.prototype.writeFloatBE = function (t, e, r) {
                return L(this, t, e, !1, r)
            }, s.prototype.writeDoubleLE = function (t, e, r) {
                return N(this, t, e, !0, r)
            }, s.prototype.writeDoubleBE = function (t, e, r) {
                return N(this, t, e, !1, r)
            }, s.prototype.copy = function (t, e, r, n) {
                if (!s.isBuffer(t)) throw new TypeError("argument should be a Buffer");
                if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
                const i = n - r;
                return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, r, n) : Uint8Array.prototype.set.call(t, this.subarray(r, n), e), i
            }, s.prototype.fill = function (t, e, r, n) {
                if ("string" == typeof t) {
                    if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                    if ("string" == typeof n && !s.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                    if (1 === t.length) {
                        const e = t.charCodeAt(0);
                        ("utf8" === n && e < 128 || "latin1" === n) && (t = e)
                    }
                } else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
                if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
                if (r <= e) return this;
                let i;
                if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t) for (i = e; i < r; ++i) this[i] = t; else {
                    const o = s.isBuffer(t) ? t : s.from(t, n), a = o.length;
                    if (0 === a) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                    for (i = 0; i < r - e; ++i) this[i + e] = o[i % a]
                }
                return this
            };
            const z = {};

            function C(t, e, r) {
                z[t] = class extends r {
                    constructor() {
                        super(), Object.defineProperty(this, "message", {
                            value: e.apply(this, arguments),
                            writable: !0,
                            configurable: !0
                        }), this.name = `${this.name} [${t}]`, this.stack, delete this.name
                    }

                    get code() {
                        return t
                    }

                    set code(t) {
                        Object.defineProperty(this, "code", {configurable: !0, enumerable: !0, value: t, writable: !0})
                    }

                    toString() {
                        return `${this.name} [${t}]: ${this.message}`
                    }
                }
            }

            function q(t) {
                let e = "", r = t.length;
                const n = "-" === t[0] ? 1 : 0;
                for (; r >= n + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
                return `${t.slice(0, r)}${e}`
            }

            function W(t, e, r, n, i, o) {
                if (t > r || t < e) {
                    const n = "bigint" == typeof e ? "n" : "";
                    let i;
                    throw i = o > 3 ? 0 === e || e === BigInt(0) ? `>= 0${n} and < 2${n} ** ${8 * (o + 1)}${n}` : `>= -(2${n} ** ${8 * (o + 1) - 1}${n}) and < 2 ** ${8 * (o + 1) - 1}${n}` : `>= ${e}${n} and <= ${r}${n}`, new z.ERR_OUT_OF_RANGE("value", i, t)
                }
                !function (t, e, r) {
                    j(e, "offset"), void 0 !== t[e] && void 0 !== t[e + r] || K(e, t.length - (r + 1))
                }(n, i, o)
            }

            function j(t, e) {
                if ("number" != typeof t) throw new z.ERR_INVALID_ARG_TYPE(e, "number", t)
            }

            function K(t, e, r) {
                if (Math.floor(t) !== t) throw j(t, r), new z.ERR_OUT_OF_RANGE(r || "offset", "an integer", t);
                if (e < 0) throw new z.ERR_BUFFER_OUT_OF_BOUNDS;
                throw new z.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${e}`, t)
            }

            C("ERR_BUFFER_OUT_OF_BOUNDS", (function (t) {
                return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
            }), RangeError), C("ERR_INVALID_ARG_TYPE", (function (t, e) {
                return `The "${t}" argument must be of type number. Received type ${typeof e}`
            }), TypeError), C("ERR_OUT_OF_RANGE", (function (t, e, r) {
                let n = `The value of "${t}" is out of range.`, i = r;
                return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? i = q(String(r)) : "bigint" == typeof r && (i = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = q(i)), i += "n"), n += ` It must be ${e}. Received ${i}`, n
            }), RangeError);
            const F = /[^+/0-9A-Za-z-_]/g;

            function D(t, e) {
                let r;
                e = e || 1 / 0;
                const n = t.length;
                let i = null;
                const o = [];
                for (let s = 0; s < n; ++s) {
                    if (r = t.charCodeAt(s), r > 55295 && r < 57344) {
                        if (!i) {
                            if (r > 56319) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === n) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = r;
                            continue
                        }
                        if (r < 56320) {
                            (e -= 3) > -1 && o.push(239, 191, 189), i = r;
                            continue
                        }
                        r = 65536 + (i - 55296 << 10 | r - 56320)
                    } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null, r < 128) {
                        if ((e -= 1) < 0) break;
                        o.push(r)
                    } else if (r < 2048) {
                        if ((e -= 2) < 0) break;
                        o.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((e -= 3) < 0) break;
                        o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((e -= 4) < 0) break;
                        o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return o
            }

            function $(t) {
                return e.toByteArray(function (t) {
                    if ((t = (t = t.split("=")[0]).trim().replace(F, "")).length < 2) return "";
                    for (; t.length % 4 != 0;) t += "=";
                    return t
                }(t))
            }

            function J(t, e, r, n) {
                let i;
                for (i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
                return i
            }

            function V(t, e) {
                return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
            }

            function H(t) {
                return t != t
            }

            const G = function () {
                const t = "0123456789abcdef", e = new Array(256);
                for (let r = 0; r < 16; ++r) {
                    const n = 16 * r;
                    for (let i = 0; i < 16; ++i) e[n + i] = t[r] + t[i]
                }
                return e
            }();

            function Z(t) {
                return "undefined" == typeof BigInt ? Y : t
            }

            function Y() {
                throw new Error("BigInt not supported")
            }
        }(qi);
        var Zi = void 0 !== r.g ? r.g : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {},
            Yi = "function" == typeof Object.create ? function (t, e) {
                t.super_ = e, t.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            } : function (t, e) {
                t.super_ = e;
                var r = function () {
                };
                r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
            };

        function Xi(t, e) {
            var r = {seen: [], stylize: to};
            return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), io(e) ? r.showHidden = e : e && go(r, e), ao(r.showHidden) && (r.showHidden = !1), ao(r.depth) && (r.depth = 2), ao(r.colors) && (r.colors = !1), ao(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = Qi), eo(r, t, r.depth)
        }

        function Qi(t, e) {
            var r = Xi.styles[e];
            return r ? "[" + Xi.colors[r][0] + "m" + t + "[" + Xi.colors[r][1] + "m" : t
        }

        function to(t, e) {
            return t
        }

        function eo(t, e, r) {
            if (t.customInspect && e && lo(e.inspect) && e.inspect !== Xi && (!e.constructor || e.constructor.prototype !== e)) {
                var n = e.inspect(r, t);
                return so(n) || (n = eo(t, n, r)), n
            }
            var i = function (t, e) {
                if (ao(e)) return t.stylize("undefined", "undefined");
                if (so(e)) {
                    var r = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return t.stylize(r, "string")
                }
                return "number" == typeof e ? t.stylize("" + e, "number") : io(e) ? t.stylize("" + e, "boolean") : oo(e) ? t.stylize("null", "null") : void 0
            }(t, e);
            if (i) return i;
            var o = Object.keys(e), s = function (t) {
                var e = {};
                return t.forEach((function (t, r) {
                    e[t] = !0
                })), e
            }(o);
            if (t.showHidden && (o = Object.getOwnPropertyNames(e)), ho(e) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0)) return ro(e);
            if (0 === o.length) {
                if (lo(e)) {
                    var a = e.name ? ": " + e.name : "";
                    return t.stylize("[Function" + a + "]", "special")
                }
                if (uo(e)) return t.stylize(RegExp.prototype.toString.call(e), "regexp");
                if (fo(e)) return t.stylize(Date.prototype.toString.call(e), "date");
                if (ho(e)) return ro(e)
            }
            var u, c, f = "", h = !1, d = ["{", "}"];
            return u = e, Array.isArray(u) && (h = !0, d = ["[", "]"]), lo(e) && (f = " [Function" + (e.name ? ": " + e.name : "") + "]"), uo(e) && (f = " " + RegExp.prototype.toString.call(e)), fo(e) && (f = " " + Date.prototype.toUTCString.call(e)), ho(e) && (f = " " + ro(e)), 0 !== o.length || h && 0 != e.length ? r < 0 ? uo(e) ? t.stylize(RegExp.prototype.toString.call(e), "regexp") : t.stylize("[Object]", "special") : (t.seen.push(e), c = h ? function (t, e, r, n, i) {
                for (var o = [], s = 0, a = e.length; s < a; ++s) yo(e, String(s)) ? o.push(no(t, e, r, n, String(s), !0)) : o.push("");
                return i.forEach((function (i) {
                    i.match(/^\d+$/) || o.push(no(t, e, r, n, i, !0))
                })), o
            }(t, e, r, s, o) : o.map((function (n) {
                return no(t, e, r, s, n, h)
            })), t.seen.pop(), function (t, e, r) {
                return t.reduce((function (t, e) {
                    return e.indexOf("\n"), t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
                }), 0) > 60 ? r[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + r[1] : r[0] + e + " " + t.join(", ") + " " + r[1]
            }(c, f, d)) : d[0] + f + d[1]
        }

        function ro(t) {
            return "[" + Error.prototype.toString.call(t) + "]"
        }

        function no(t, e, r, n, i, o) {
            var s, a, u;
            if ((u = Object.getOwnPropertyDescriptor(e, i) || {value: e[i]}).get ? a = u.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : u.set && (a = t.stylize("[Setter]", "special")), yo(n, i) || (s = "[" + i + "]"), a || (t.seen.indexOf(u.value) < 0 ? (a = oo(r) ? eo(t, u.value, null) : eo(t, u.value, r - 1)).indexOf("\n") > -1 && (a = o ? a.split("\n").map((function (t) {
                return "  " + t
            })).join("\n").substr(2) : "\n" + a.split("\n").map((function (t) {
                return "   " + t
            })).join("\n")) : a = t.stylize("[Circular]", "special")), ao(s)) {
                if (o && i.match(/^\d+$/)) return a;
                (s = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = t.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = t.stylize(s, "string"))
            }
            return s + ": " + a
        }

        function io(t) {
            return "boolean" == typeof t
        }

        function oo(t) {
            return null === t
        }

        function so(t) {
            return "string" == typeof t
        }

        function ao(t) {
            return void 0 === t
        }

        function uo(t) {
            return co(t) && "[object RegExp]" === bo(t)
        }

        function co(t) {
            return "object" == typeof t && null !== t
        }

        function fo(t) {
            return co(t) && "[object Date]" === bo(t)
        }

        function ho(t) {
            return co(t) && ("[object Error]" === bo(t) || t instanceof Error)
        }

        function lo(t) {
            return "function" == typeof t
        }

        function po(t) {
            return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || void 0 === t
        }

        function bo(t) {
            return Object.prototype.toString.call(t)
        }

        function go(t, e) {
            if (!e || !co(e)) return t;
            for (var r = Object.keys(e), n = r.length; n--;) t[r[n]] = e[r[n]];
            return t
        }

        function yo(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }

        function mo(t, e) {
            if (t === e) return 0;
            for (var r = t.length, n = e.length, i = 0, o = Math.min(r, n); i < o; ++i) if (t[i] !== e[i]) {
                r = t[i], n = e[i];
                break
            }
            return r < n ? -1 : n < r ? 1 : 0
        }

        Xi.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39]
        }, Xi.styles = {
            special: "cyan",
            number: "yellow",
            boolean: "yellow",
            undefined: "grey",
            null: "bold",
            string: "green",
            date: "magenta",
            regexp: "red"
        };
        var wo, vo = Object.prototype.hasOwnProperty, So = Object.keys || function (t) {
            var e = [];
            for (var r in t) vo.call(t, r) && e.push(r);
            return e
        }, Mo = Array.prototype.slice;

        function _o() {
            return void 0 !== wo ? wo : wo = "foo" === function () {
            }.name
        }

        function Ao(t) {
            return Object.prototype.toString.call(t)
        }

        function ko(t) {
            return !qi.isBuffer(t) && "function" == typeof Zi.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : !!t && (t instanceof DataView || !!(t.buffer && t.buffer instanceof ArrayBuffer)))
        }

        function Eo(t, e) {
            t || Oo(t, !0, e, "==", To)
        }

        var Io = /\s*function\s+([^\(\s]*)\s*/;

        function Bo(t) {
            if (lo(t)) {
                if (_o()) return t.name;
                var e = t.toString().match(Io);
                return e && e[1]
            }
        }

        function xo(t) {
            this.name = "AssertionError", this.actual = t.actual, this.expected = t.expected, this.operator = t.operator, t.message ? (this.message = t.message, this.generatedMessage = !1) : (this.message = function (t) {
                return Ro(Po(t.actual), 128) + " " + t.operator + " " + Ro(Po(t.expected), 128)
            }(this), this.generatedMessage = !0);
            var e = t.stackStartFunction || Oo;
            if (Error.captureStackTrace) Error.captureStackTrace(this, e); else {
                var r = new Error;
                if (r.stack) {
                    var n = r.stack, i = Bo(e), o = n.indexOf("\n" + i);
                    if (o >= 0) {
                        var s = n.indexOf("\n", o + 1);
                        n = n.substring(s + 1)
                    }
                    this.stack = n
                }
            }
        }

        function Ro(t, e) {
            return "string" == typeof t ? t.length < e ? t : t.slice(0, e) : t
        }

        function Po(t) {
            if (_o() || !lo(t)) return Xi(t);
            var e = Bo(t);
            return "[Function" + (e ? ": " + e : "") + "]"
        }

        function Oo(t, e, r, n, i) {
            throw new xo({message: r, actual: t, expected: e, operator: n, stackStartFunction: i})
        }

        function To(t, e) {
            t || Oo(t, !0, e, "==", To)
        }

        function Uo(t, e, r, n) {
            if (t === e) return !0;
            if (qi.isBuffer(t) && qi.isBuffer(e)) return 0 === mo(t, e);
            if (fo(t) && fo(e)) return t.getTime() === e.getTime();
            if (uo(t) && uo(e)) return t.source === e.source && t.global === e.global && t.multiline === e.multiline && t.lastIndex === e.lastIndex && t.ignoreCase === e.ignoreCase;
            if (null !== t && "object" == typeof t || null !== e && "object" == typeof e) {
                if (ko(t) && ko(e) && Ao(t) === Ao(e) && !(t instanceof Float32Array || t instanceof Float64Array)) return 0 === mo(new Uint8Array(t.buffer), new Uint8Array(e.buffer));
                if (qi.isBuffer(t) !== qi.isBuffer(e)) return !1;
                var i = (n = n || {actual: [], expected: []}).actual.indexOf(t);
                return -1 !== i && i === n.expected.indexOf(e) || (n.actual.push(t), n.expected.push(e), function (t, e, r, n) {
                    if (null == t || null == e) return !1;
                    if (po(t) || po(e)) return t === e;
                    if (r && Object.getPrototypeOf(t) !== Object.getPrototypeOf(e)) return !1;
                    var i = Lo(t), o = Lo(e);
                    if (i && !o || !i && o) return !1;
                    if (i) return Uo(t = Mo.call(t), e = Mo.call(e), r);
                    var s, a, u = So(t), c = So(e);
                    if (u.length !== c.length) return !1;
                    for (u.sort(), c.sort(), a = u.length - 1; a >= 0; a--) if (u[a] !== c[a]) return !1;
                    for (a = u.length - 1; a >= 0; a--) if (!Uo(t[s = u[a]], e[s], r, n)) return !1;
                    return !0
                }(t, e, r, n))
            }
            return r ? t === e : t == e
        }

        function Lo(t) {
            return "[object Arguments]" == Object.prototype.toString.call(t)
        }

        function No(t, e) {
            if (!t || !e) return !1;
            if ("[object RegExp]" == Object.prototype.toString.call(e)) return e.test(t);
            try {
                if (t instanceof e) return !0
            } catch (t) {
            }
            return !Error.isPrototypeOf(e) && !0 === e.call({}, t)
        }

        function zo(t, e, r, n) {
            var i;
            if ("function" != typeof e) throw new TypeError('"block" argument must be a function');
            "string" == typeof r && (n = r, r = null), i = function (t) {
                var e;
                try {
                    t()
                } catch (t) {
                    e = t
                }
                return e
            }(e), n = (r && r.name ? " (" + r.name + ")." : ".") + (n ? " " + n : "."), t && !i && Oo(i, r, "Missing expected exception" + n);
            var o = "string" == typeof n, s = !t && i && !r;
            if ((!t && ho(i) && o && No(i, r) || s) && Oo(i, r, "Got unwanted exception" + n), t && i && r && !No(i, r) || !t && i) throw i
        }

        Eo.AssertionError = xo, Yi(xo, Error), Eo.fail = Oo, Eo.ok = To, Eo.equal = function t(e, r, n) {
            e != r && Oo(e, r, n, "==", t)
        }, Eo.notEqual = function t(e, r, n) {
            e == r && Oo(e, r, n, "!=", t)
        }, Eo.deepEqual = function t(e, r, n) {
            Uo(e, r, !1) || Oo(e, r, n, "deepEqual", t)
        }, Eo.deepStrictEqual = function t(e, r, n) {
            Uo(e, r, !0) || Oo(e, r, n, "deepStrictEqual", t)
        }, Eo.notDeepEqual = function t(e, r, n) {
            Uo(e, r, !1) && Oo(e, r, n, "notDeepEqual", t)
        }, Eo.notDeepStrictEqual = function t(e, r, n) {
            Uo(e, r, !0) && Oo(e, r, n, "notDeepStrictEqual", t)
        }, Eo.strictEqual = function t(e, r, n) {
            e !== r && Oo(e, r, n, "===", t)
        }, Eo.notStrictEqual = function t(e, r, n) {
            e === r && Oo(e, r, n, "!==", t)
        }, Eo.throws = function (t, e, r) {
            zo(!0, t, e, r)
        }, Eo.doesNotThrow = function (t, e, r) {
            zo(!1, t, e, r)
        }, Eo.ifError = function (t) {
            if (t) throw t
        };
        var Co = {};

        class qo {
            constructor(t, e) {
                if (!Number.isInteger(t)) throw new TypeError("span must be an integer");
                this.span = t, this.property = e
            }

            makeDestinationObject() {
                return {}
            }

            decode(t, e) {
                throw new Error("Layout is abstract")
            }

            encode(t, e, r) {
                throw new Error("Layout is abstract")
            }

            getSpan(t, e) {
                if (0 > this.span) throw new RangeError("indeterminate span");
                return this.span
            }

            replicate(t) {
                const e = Object.create(this.constructor.prototype);
                return Object.assign(e, this), e.property = t, e
            }

            fromArray(t) {
            }
        }

        function Wo(t, e) {
            return e.property ? t + "[" + e.property + "]" : t
        }

        Co.Layout = qo, Co.nameWithProperty = Wo, Co.bindConstructorLayout = function (t, e) {
            if ("function" != typeof t) throw new TypeError("Class must be constructor");
            if (t.hasOwnProperty("layout_")) throw new Error("Class is already bound to a layout");
            if (!(e && e instanceof qo)) throw new TypeError("layout must be a Layout");
            if (e.hasOwnProperty("boundConstructor_")) throw new Error("layout is already bound to a constructor");
            t.layout_ = e, e.boundConstructor_ = t, e.makeDestinationObject = () => new t, Object.defineProperty(t.prototype, "encode", {
                value: function (t, r) {
                    return e.encode(this, t, r)
                }, writable: !0
            }), Object.defineProperty(t, "decode", {
                value: function (t, r) {
                    return e.decode(t, r)
                }, writable: !0
            })
        };

        class jo extends qo {
            isCount() {
                throw new Error("ExternalLayout is abstract")
            }
        }

        class Ko extends jo {
            constructor(t, e) {
                if (void 0 === t && (t = 1), !Number.isInteger(t) || 0 >= t) throw new TypeError("elementSpan must be a (positive) integer");
                super(-1, e), this.elementSpan = t
            }

            isCount() {
                return !0
            }

            decode(t, e) {
                void 0 === e && (e = 0);
                const r = t.length - e;
                return Math.floor(r / this.elementSpan)
            }

            encode(t, e, r) {
                return 0
            }
        }

        class Fo extends jo {
            constructor(t, e, r) {
                if (!(t instanceof qo)) throw new TypeError("layout must be a Layout");
                if (void 0 === e) e = 0; else if (!Number.isInteger(e)) throw new TypeError("offset must be integer or undefined");
                super(t.span, r || t.property), this.layout = t, this.offset = e
            }

            isCount() {
                return this.layout instanceof Do || this.layout instanceof $o
            }

            decode(t, e) {
                return void 0 === e && (e = 0), this.layout.decode(t, e + this.offset)
            }

            encode(t, e, r) {
                return void 0 === r && (r = 0), this.layout.encode(t, e, r + this.offset)
            }
        }

        class Do extends qo {
            constructor(t, e) {
                if (super(t, e), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
            }

            decode(t, e) {
                return void 0 === e && (e = 0), t.readUIntLE(e, this.span)
            }

            encode(t, e, r) {
                return void 0 === r && (r = 0), e.writeUIntLE(t, r, this.span), this.span
            }
        }

        class $o extends qo {
            constructor(t, e) {
                if (super(t, e), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
            }

            decode(t, e) {
                return void 0 === e && (e = 0), t.readUIntBE(e, this.span)
            }

            encode(t, e, r) {
                return void 0 === r && (r = 0), e.writeUIntBE(t, r, this.span), this.span
            }
        }

        class Jo extends qo {
            constructor(t, e) {
                if (super(t, e), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
            }

            decode(t, e) {
                return void 0 === e && (e = 0), t.readIntLE(e, this.span)
            }

            encode(t, e, r) {
                return void 0 === r && (r = 0), e.writeIntLE(t, r, this.span), this.span
            }
        }

        class Vo extends qo {
            constructor(t, e) {
                if (super(t, e), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
            }

            decode(t, e) {
                return void 0 === e && (e = 0), t.readIntBE(e, this.span)
            }

            encode(t, e, r) {
                return void 0 === r && (r = 0), e.writeIntBE(t, r, this.span), this.span
            }
        }

        const Ho = Math.pow(2, 32);

        function Go(t) {
            const e = Math.floor(t / Ho);
            return {hi32: e, lo32: t - e * Ho}
        }

        function Zo(t, e) {
            return t * Ho + e
        }

        class Yo extends qo {
            constructor(t) {
                super(8, t)
            }

            decode(t, e) {
                void 0 === e && (e = 0);
                const r = t.readUInt32LE(e);
                return Zo(t.readUInt32LE(e + 4), r)
            }

            encode(t, e, r) {
                void 0 === r && (r = 0);
                const n = Go(t);
                return e.writeUInt32LE(n.lo32, r), e.writeUInt32LE(n.hi32, r + 4), 8
            }
        }

        class Xo extends qo {
            constructor(t) {
                super(8, t)
            }

            decode(t, e) {
                return void 0 === e && (e = 0), Zo(t.readUInt32BE(e), t.readUInt32BE(e + 4))
            }

            encode(t, e, r) {
                void 0 === r && (r = 0);
                const n = Go(t);
                return e.writeUInt32BE(n.hi32, r), e.writeUInt32BE(n.lo32, r + 4), 8
            }
        }

        class Qo extends qo {
            constructor(t) {
                super(8, t)
            }

            decode(t, e) {
                void 0 === e && (e = 0);
                const r = t.readUInt32LE(e);
                return Zo(t.readInt32LE(e + 4), r)
            }

            encode(t, e, r) {
                void 0 === r && (r = 0);
                const n = Go(t);
                return e.writeUInt32LE(n.lo32, r), e.writeInt32LE(n.hi32, r + 4), 8
            }
        }

        class ts extends qo {
            constructor(t) {
                super(8, t)
            }

            decode(t, e) {
                return void 0 === e && (e = 0), Zo(t.readInt32BE(e), t.readUInt32BE(e + 4))
            }

            encode(t, e, r) {
                void 0 === r && (r = 0);
                const n = Go(t);
                return e.writeInt32BE(n.hi32, r), e.writeUInt32BE(n.lo32, r + 4), 8
            }
        }

        class es extends qo {
            constructor(t) {
                super(4, t)
            }

            decode(t, e) {
                return void 0 === e && (e = 0), t.readFloatLE(e)
            }

            encode(t, e, r) {
                return void 0 === r && (r = 0), e.writeFloatLE(t, r), 4
            }
        }

        class rs extends qo {
            constructor(t) {
                super(4, t)
            }

            decode(t, e) {
                return void 0 === e && (e = 0), t.readFloatBE(e)
            }

            encode(t, e, r) {
                return void 0 === r && (r = 0), e.writeFloatBE(t, r), 4
            }
        }

        class ns extends qo {
            constructor(t) {
                super(8, t)
            }

            decode(t, e) {
                return void 0 === e && (e = 0), t.readDoubleLE(e)
            }

            encode(t, e, r) {
                return void 0 === r && (r = 0), e.writeDoubleLE(t, r), 8
            }
        }

        class is extends qo {
            constructor(t) {
                super(8, t)
            }

            decode(t, e) {
                return void 0 === e && (e = 0), t.readDoubleBE(e)
            }

            encode(t, e, r) {
                return void 0 === r && (r = 0), e.writeDoubleBE(t, r), 8
            }
        }

        class os extends qo {
            constructor(t, e, r) {
                if (!(t instanceof qo)) throw new TypeError("elementLayout must be a Layout");
                if (!(e instanceof jo && e.isCount() || Number.isInteger(e) && 0 <= e)) throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
                let n = -1;
                !(e instanceof jo) && 0 < t.span && (n = e * t.span), super(n, r), this.elementLayout = t, this.count = e
            }

            getSpan(t, e) {
                if (0 <= this.span) return this.span;
                void 0 === e && (e = 0);
                let r = 0, n = this.count;
                if (n instanceof jo && (n = n.decode(t, e)), 0 < this.elementLayout.span) r = n * this.elementLayout.span; else {
                    let i = 0;
                    for (; i < n;) r += this.elementLayout.getSpan(t, e + r), ++i
                }
                return r
            }

            decode(t, e) {
                void 0 === e && (e = 0);
                const r = [];
                let n = 0, i = this.count;
                for (i instanceof jo && (i = i.decode(t, e)); n < i;) r.push(this.elementLayout.decode(t, e)), e += this.elementLayout.getSpan(t, e), n += 1;
                return r
            }

            encode(t, e, r) {
                void 0 === r && (r = 0);
                const n = this.elementLayout, i = t.reduce(((t, i) => t + n.encode(i, e, r + t)), 0);
                return this.count instanceof jo && this.count.encode(t.length, e, r), i
            }
        }

        class ss extends qo {
            constructor(t, e, r) {
                if (!Array.isArray(t) || !t.reduce(((t, e) => t && e instanceof qo), !0)) throw new TypeError("fields must be array of Layout instances");
                "boolean" == typeof e && void 0 === r && (r = e, e = void 0);
                for (const e of t) if (0 > e.span && void 0 === e.property) throw new Error("fields cannot contain unnamed variable-length layout");
                let n = -1;
                try {
                    n = t.reduce(((t, e) => t + e.getSpan()), 0)
                } catch (t) {
                }
                super(n, e), this.fields = t, this.decodePrefixes = !!r
            }

            getSpan(t, e) {
                if (0 <= this.span) return this.span;
                void 0 === e && (e = 0);
                let r = 0;
                try {
                    r = this.fields.reduce(((r, n) => {
                        const i = n.getSpan(t, e);
                        return e += i, r + i
                    }), 0)
                } catch (t) {
                    throw new RangeError("indeterminate span")
                }
                return r
            }

            decode(t, e) {
                void 0 === e && (e = 0);
                const r = this.makeDestinationObject();
                for (const n of this.fields) if (void 0 !== n.property && (r[n.property] = n.decode(t, e)), e += n.getSpan(t, e), this.decodePrefixes && t.length === e) break;
                return r
            }

            encode(t, e, r) {
                void 0 === r && (r = 0);
                const n = r;
                let i = 0, o = 0;
                for (const n of this.fields) {
                    let s = n.span;
                    if (o = 0 < s ? s : 0, void 0 !== n.property) {
                        const i = t[n.property];
                        void 0 !== i && (o = n.encode(i, e, r), 0 > s && (s = n.getSpan(e, r)))
                    }
                    i = r, r += s
                }
                return i + o - n
            }

            fromArray(t) {
                const e = this.makeDestinationObject();
                for (const r of this.fields) void 0 !== r.property && 0 < t.length && (e[r.property] = t.shift());
                return e
            }

            layoutFor(t) {
                if ("string" != typeof t) throw new TypeError("property must be string");
                for (const e of this.fields) if (e.property === t) return e
            }

            offsetOf(t) {
                if ("string" != typeof t) throw new TypeError("property must be string");
                let e = 0;
                for (const r of this.fields) {
                    if (r.property === t) return e;
                    0 > r.span ? e = -1 : 0 <= e && (e += r.span)
                }
            }
        }

        class as {
            constructor(t) {
                this.property = t
            }

            decode() {
                throw new Error("UnionDiscriminator is abstract")
            }

            encode() {
                throw new Error("UnionDiscriminator is abstract")
            }
        }

        class us extends as {
            constructor(t, e) {
                if (!(t instanceof jo && t.isCount())) throw new TypeError("layout must be an unsigned integer ExternalLayout");
                super(e || t.property || "variant"), this.layout = t
            }

            decode(t, e) {
                return this.layout.decode(t, e)
            }

            encode(t, e, r) {
                return this.layout.encode(t, e, r)
            }
        }

        class cs extends qo {
            constructor(t, e, r) {
                const n = t instanceof Do || t instanceof $o;
                if (n) t = new us(new Fo(t)); else if (t instanceof jo && t.isCount()) t = new us(t); else if (!(t instanceof as)) throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
                if (void 0 === e && (e = null), !(null === e || e instanceof qo)) throw new TypeError("defaultLayout must be null or a Layout");
                if (null !== e) {
                    if (0 > e.span) throw new Error("defaultLayout must have constant span");
                    void 0 === e.property && (e = e.replicate("content"))
                }
                let i = -1;
                e && (i = e.span, 0 <= i && n && (i += t.layout.span)), super(i, r), this.discriminator = t, this.usesPrefixDiscriminator = n, this.defaultLayout = e, this.registry = {};
                let o = this.defaultGetSourceVariant.bind(this);
                this.getSourceVariant = function (t) {
                    return o(t)
                }, this.configGetSourceVariant = function (t) {
                    o = t.bind(this)
                }
            }

            getSpan(t, e) {
                if (0 <= this.span) return this.span;
                void 0 === e && (e = 0);
                const r = this.getVariant(t, e);
                if (!r) throw new Error("unable to determine span for unrecognized variant");
                return r.getSpan(t, e)
            }

            defaultGetSourceVariant(t) {
                if (t.hasOwnProperty(this.discriminator.property)) {
                    if (this.defaultLayout && t.hasOwnProperty(this.defaultLayout.property)) return;
                    const e = this.registry[t[this.discriminator.property]];
                    if (e && (!e.layout || t.hasOwnProperty(e.property))) return e
                } else for (const e in this.registry) {
                    const r = this.registry[e];
                    if (t.hasOwnProperty(r.property)) return r
                }
                throw new Error("unable to infer src variant")
            }

            decode(t, e) {
                let r;
                void 0 === e && (e = 0);
                const n = this.discriminator, i = n.decode(t, e);
                let o = this.registry[i];
                if (void 0 === o) {
                    let s = 0;
                    o = this.defaultLayout, this.usesPrefixDiscriminator && (s = n.layout.span), r = this.makeDestinationObject(), r[n.property] = i, r[o.property] = this.defaultLayout.decode(t, e + s)
                } else r = o.decode(t, e);
                return r
            }

            encode(t, e, r) {
                void 0 === r && (r = 0);
                const n = this.getSourceVariant(t);
                if (void 0 === n) {
                    const n = this.discriminator, i = this.defaultLayout;
                    let o = 0;
                    return this.usesPrefixDiscriminator && (o = n.layout.span), n.encode(t[n.property], e, r), o + i.encode(t[i.property], e, r + o)
                }
                return n.encode(t, e, r)
            }

            addVariant(t, e, r) {
                const n = new fs(this, t, e, r);
                return this.registry[t] = n, n
            }

            getVariant(t, e) {
                let r = t;
                return qi.Buffer.isBuffer(t) && (void 0 === e && (e = 0), r = this.discriminator.decode(t, e)), this.registry[r]
            }
        }

        class fs extends qo {
            constructor(t, e, r, n) {
                if (!(t instanceof cs)) throw new TypeError("union must be a Union");
                if (!Number.isInteger(e) || 0 > e) throw new TypeError("variant must be a (non-negative) integer");
                if ("string" == typeof r && void 0 === n && (n = r, r = null), r) {
                    if (!(r instanceof qo)) throw new TypeError("layout must be a Layout");
                    if (null !== t.defaultLayout && 0 <= r.span && r.span > t.defaultLayout.span) throw new Error("variant span exceeds span of containing union");
                    if ("string" != typeof n) throw new TypeError("variant must have a String property")
                }
                let i = t.span;
                0 > t.span && (i = r ? r.span : 0, 0 <= i && t.usesPrefixDiscriminator && (i += t.discriminator.layout.span)), super(i, n), this.union = t, this.variant = e, this.layout = r || null
            }

            getSpan(t, e) {
                if (0 <= this.span) return this.span;
                void 0 === e && (e = 0);
                let r = 0;
                return this.union.usesPrefixDiscriminator && (r = this.union.discriminator.layout.span), r + this.layout.getSpan(t, e + r)
            }

            decode(t, e) {
                const r = this.makeDestinationObject();
                if (void 0 === e && (e = 0), this !== this.union.getVariant(t, e)) throw new Error("variant mismatch");
                let n = 0;
                return this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span), this.layout ? r[this.property] = this.layout.decode(t, e + n) : this.property ? r[this.property] = !0 : this.union.usesPrefixDiscriminator && (r[this.union.discriminator.property] = this.variant), r
            }

            encode(t, e, r) {
                void 0 === r && (r = 0);
                let n = 0;
                if (this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span), this.layout && !t.hasOwnProperty(this.property)) throw new TypeError("variant lacks property " + this.property);
                this.union.discriminator.encode(this.variant, e, r);
                let i = n;
                if (this.layout && (this.layout.encode(t[this.property], e, r + n), i += this.layout.getSpan(e, r + n), 0 <= this.union.span && i > this.union.span)) throw new Error("encoded variant overruns containing union");
                return i
            }

            fromArray(t) {
                if (this.layout) return this.layout.fromArray(t)
            }
        }

        function hs(t) {
            return 0 > t && (t += 4294967296), t
        }

        class ds extends qo {
            constructor(t, e, r) {
                if (!(t instanceof Do || t instanceof $o)) throw new TypeError("word must be a UInt or UIntBE layout");
                if ("string" == typeof e && void 0 === r && (r = e, e = void 0), 4 < t.span) throw new RangeError("word cannot exceed 32 bits");
                super(t.span, r), this.word = t, this.msb = !!e, this.fields = [];
                let n = 0;
                this._packedSetValue = function (t) {
                    return n = hs(t), this
                }, this._packedGetValue = function () {
                    return n
                }
            }

            decode(t, e) {
                const r = this.makeDestinationObject();
                void 0 === e && (e = 0);
                const n = this.word.decode(t, e);
                this._packedSetValue(n);
                for (const t of this.fields) void 0 !== t.property && (r[t.property] = t.decode(n));
                return r
            }

            encode(t, e, r) {
                void 0 === r && (r = 0);
                const n = this.word.decode(e, r);
                this._packedSetValue(n);
                for (const e of this.fields) if (void 0 !== e.property) {
                    const r = t[e.property];
                    void 0 !== r && e.encode(r)
                }
                return this.word.encode(this._packedGetValue(), e, r)
            }

            addField(t, e) {
                const r = new ls(this, t, e);
                return this.fields.push(r), r
            }

            addBoolean(t) {
                const e = new ps(this, t);
                return this.fields.push(e), e
            }

            fieldFor(t) {
                if ("string" != typeof t) throw new TypeError("property must be string");
                for (const e of this.fields) if (e.property === t) return e
            }
        }

        class ls {
            constructor(t, e, r) {
                if (!(t instanceof ds)) throw new TypeError("container must be a BitStructure");
                if (!Number.isInteger(e) || 0 >= e) throw new TypeError("bits must be positive integer");
                const n = 8 * t.span, i = t.fields.reduce(((t, e) => t + e.bits), 0);
                if (e + i > n) throw new Error("bits too long for span remainder (" + (n - i) + " of " + n + " remain)");
                this.container = t, this.bits = e, this.valueMask = (1 << e) - 1, 32 === e && (this.valueMask = 4294967295), this.start = i, this.container.msb && (this.start = n - i - e), this.wordMask = hs(this.valueMask << this.start), this.property = r
            }

            decode() {
                return hs(this.container._packedGetValue() & this.wordMask) >>> this.start
            }

            encode(t) {
                if (!Number.isInteger(t) || t !== hs(t & this.valueMask)) throw new TypeError(Wo("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
                const e = this.container._packedGetValue(), r = hs(t << this.start);
                this.container._packedSetValue(hs(e & ~this.wordMask) | r)
            }
        }

        class ps extends ls {
            constructor(t, e) {
                super(t, 1, e)
            }

            decode(t, e) {
                return !!ls.prototype.decode.call(this, t, e)
            }

            encode(t) {
                return "boolean" == typeof t && (t = +t), ls.prototype.encode.call(this, t)
            }
        }

        class bs extends qo {
            constructor(t, e) {
                if (!(t instanceof jo && t.isCount() || Number.isInteger(t) && 0 <= t)) throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
                let r = -1;
                t instanceof jo || (r = t), super(r, e), this.length = t
            }

            getSpan(t, e) {
                let r = this.span;
                return 0 > r && (r = this.length.decode(t, e)), r
            }

            decode(t, e) {
                void 0 === e && (e = 0);
                let r = this.span;
                return 0 > r && (r = this.length.decode(t, e)), t.slice(e, e + r)
            }

            encode(t, e, r) {
                let n = this.length;
                if (this.length instanceof jo && (n = t.length), !qi.Buffer.isBuffer(t) || n !== t.length) throw new TypeError(Wo("Blob.encode", this) + " requires (length " + n + ") Buffer as src");
                if (r + n > e.length) throw new RangeError("encoding overruns Buffer");
                return e.write(t.toString("hex"), r, n, "hex"), this.length instanceof jo && this.length.encode(n, e, r), n
            }
        }

        class gs extends qo {
            constructor(t) {
                super(-1, t)
            }

            getSpan(t, e) {
                if (!qi.Buffer.isBuffer(t)) throw new TypeError("b must be a Buffer");
                void 0 === e && (e = 0);
                let r = e;
                for (; r < t.length && 0 !== t[r];) r += 1;
                return 1 + r - e
            }

            decode(t, e, r) {
                void 0 === e && (e = 0);
                let n = this.getSpan(t, e);
                return t.slice(e, e + n - 1).toString("utf-8")
            }

            encode(t, e, r) {
                void 0 === r && (r = 0), "string" != typeof t && (t = t.toString());
                const n = new qi.Buffer(t, "utf8"), i = n.length;
                if (r + i > e.length) throw new RangeError("encoding overruns Buffer");
                return n.copy(e, r), e[r + i] = 0, i + 1
            }
        }

        class ys extends qo {
            constructor(t, e) {
                if ("string" == typeof t && void 0 === e && (e = t, t = void 0), void 0 === t) t = -1; else if (!Number.isInteger(t)) throw new TypeError("maxSpan must be an integer");
                super(-1, e), this.maxSpan = t
            }

            getSpan(t, e) {
                if (!qi.Buffer.isBuffer(t)) throw new TypeError("b must be a Buffer");
                return void 0 === e && (e = 0), t.length - e
            }

            decode(t, e, r) {
                void 0 === e && (e = 0);
                let n = this.getSpan(t, e);
                if (0 <= this.maxSpan && this.maxSpan < n) throw new RangeError("text length exceeds maxSpan");
                return t.slice(e, e + n).toString("utf-8")
            }

            encode(t, e, r) {
                void 0 === r && (r = 0), "string" != typeof t && (t = t.toString());
                const n = new qi.Buffer(t, "utf8"), i = n.length;
                if (0 <= this.maxSpan && this.maxSpan < i) throw new RangeError("text length exceeds maxSpan");
                if (r + i > e.length) throw new RangeError("encoding overruns Buffer");
                return n.copy(e, r), i
            }
        }

        class ms extends qo {
            constructor(t, e) {
                super(0, e), this.value = t
            }

            decode(t, e, r) {
                return this.value
            }

            encode(t, e, r) {
                return 0
            }
        }

        Co.ExternalLayout = jo, Co.GreedyCount = Ko, Co.OffsetLayout = Fo, Co.UInt = Do, Co.UIntBE = $o, Co.Int = Jo, Co.IntBE = Vo, Co.Float = es, Co.FloatBE = rs, Co.Double = ns, Co.DoubleBE = is, Co.Sequence = os, Co.Structure = ss, Co.UnionDiscriminator = as, Co.UnionLayoutDiscriminator = us, Co.Union = cs, Co.VariantLayout = fs, Co.BitStructure = ds, Co.BitField = ls, Co.Boolean = ps, Co.Blob = bs, Co.CString = gs, Co.UTF8 = ys, Co.Constant = ms, Co.greedy = (t, e) => new Ko(t, e), Co.offset = (t, e, r) => new Fo(t, e, r);
        var ws = Co.u8 = t => new Do(1, t);
        Co.u16 = t => new Do(2, t), Co.u24 = t => new Do(3, t);
        var vs = Co.u32 = t => new Do(4, t);
        Co.u40 = t => new Do(5, t), Co.u48 = t => new Do(6, t), Co.nu64 = t => new Yo(t), Co.u16be = t => new $o(2, t), Co.u24be = t => new $o(3, t), Co.u32be = t => new $o(4, t), Co.u40be = t => new $o(5, t), Co.u48be = t => new $o(6, t), Co.nu64be = t => new Xo(t), Co.s8 = t => new Jo(1, t), Co.s16 = t => new Jo(2, t), Co.s24 = t => new Jo(3, t), Co.s32 = t => new Jo(4, t), Co.s40 = t => new Jo(5, t), Co.s48 = t => new Jo(6, t), Co.ns64 = t => new Qo(t), Co.s16be = t => new Vo(2, t), Co.s24be = t => new Vo(3, t), Co.s32be = t => new Vo(4, t), Co.s40be = t => new Vo(5, t), Co.s48be = t => new Vo(6, t), Co.ns64be = t => new ts(t), Co.f32 = t => new es(t), Co.f32be = t => new rs(t), Co.f64 = t => new ns(t), Co.f64be = t => new is(t);
        var Ss = Co.struct = (t, e, r) => new ss(t, e, r);
        Co.bits = (t, e, r) => new ds(t, e, r), Co.seq = (t, e, r) => new os(t, e, r), Co.union = (t, e, r) => new cs(t, e, r), Co.unionLayoutDiscriminator = (t, e) => new us(t, e);
        var Ms = Co.blob = (t, e) => new bs(t, e);
        Co.cstr = t => new gs(t), Co.utf8 = (t, e) => new ys(t, e), Co.const = (t, e) => new ms(t, e);
        const _s = (t = "publicKey") => Ms(32, t), As = (t = "uint64") => Ms(8, t);

        function ks(t, e, r, ...n) {
            return Br(e, r, n, {skipPreflight: !1})
        }

        const Es = new sr("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
            Is = new sr("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"), Bs = "Failed to find account",
            xs = "Invalid account owner";

        function Rs(t) {
            return qi.Buffer.from(t.toBuffer())
        }

        class Ps extends (o()) {
            toBuffer() {
                const t = super.toArray().reverse(), e = qi.Buffer.from(t);
                if (8 === e.length) return e;
                Eo(e.length < 8, "u64 too large");
                const r = qi.Buffer.alloc(8);
                return e.copy(r), r
            }

            static fromBuffer(t) {
                return Eo(8 === t.length, `Invalid buffer length: ${t.length}`), new Ps([...t].reverse().map((t => `00${t.toString(16)}`.slice(-2))).join(""), 16)
            }
        }

        function Os(t) {
            return "publicKey" in t
        }

        const Ts = {MintTokens: 0, FreezeAccount: 1, AccountOwner: 2, CloseAccount: 3},
            Us = new sr("So11111111111111111111111111111111111111112"),
            Ls = Ss([vs("mintAuthorityOption"), _s("mintAuthority"), As("supply"), ws("decimals"), ws("isInitialized"), vs("freezeAuthorityOption"), _s("freezeAuthority")]),
            Ns = Ss([_s("mint"), _s("owner"), As("amount"), vs("delegateOption"), _s("delegate"), ws("state"), vs("isNativeOption"), As("isNative"), As("delegatedAmount"), vs("closeAuthorityOption"), _s("closeAuthority")]),
            zs = Ss([ws("m"), ws("n"), ws("is_initialized"), _s("signer1"), _s("signer2"), _s("signer3"), _s("signer4"), _s("signer5"), _s("signer6"), _s("signer7"), _s("signer8"), _s("signer9"), _s("signer10"), _s("signer11")]);

        class Cs {
            constructor(t, e, r, n) {
                Ci(this, "connection", void 0), Ci(this, "publicKey", void 0), Ci(this, "programId", void 0), Ci(this, "associatedProgramId", void 0), Ci(this, "payer", void 0), Object.assign(this, {
                    connection: t,
                    publicKey: e,
                    programId: r,
                    payer: n,
                    associatedProgramId: Is
                })
            }

            static async getMinBalanceRentForExemptMint(t) {
                return await t.getMinimumBalanceForRentExemption(Ls.span)
            }

            static async getMinBalanceRentForExemptAccount(t) {
                return await t.getMinimumBalanceForRentExemption(Ns.span)
            }

            static async getMinBalanceRentForExemptMultisig(t) {
                return await t.getMinimumBalanceForRentExemption(zs.span)
            }

            static async createMint(t, e, r, n, i, o) {
                const s = Ai.generate(), a = new Cs(t, s.publicKey, o, e),
                    u = await Cs.getMinBalanceRentForExemptMint(t), c = new _r;
                return c.add(zr.createAccount({
                    fromPubkey: e.publicKey,
                    newAccountPubkey: s.publicKey,
                    lamports: u,
                    space: Ls.span,
                    programId: o
                })), c.add(Cs.createInitMintInstruction(o, s.publicKey, i, r, n)), await ks(0, t, c, e, s), a
            }

            async createAccount(t) {
                const e = await Cs.getMinBalanceRentForExemptAccount(this.connection), r = Ai.generate(), n = new _r;
                n.add(zr.createAccount({
                    fromPubkey: this.payer.publicKey,
                    newAccountPubkey: r.publicKey,
                    lamports: e,
                    space: Ns.span,
                    programId: this.programId
                }));
                const i = this.publicKey;
                return n.add(Cs.createInitAccountInstruction(this.programId, i, r.publicKey, t)), await ks(0, this.connection, n, this.payer, r), r.publicKey
            }

            async createAssociatedTokenAccount(t) {
                const e = await Cs.getAssociatedTokenAddress(this.associatedProgramId, this.programId, this.publicKey, t);
                return this.createAssociatedTokenAccountInternal(t, e)
            }

            async createAssociatedTokenAccountInternal(t, e) {
                return await ks(0, this.connection, (new _r).add(Cs.createAssociatedTokenAccountInstruction(this.associatedProgramId, this.programId, this.publicKey, e, t, this.payer.publicKey)), this.payer), e
            }

            async getOrCreateAssociatedAccountInfo(t) {
                const e = await Cs.getAssociatedTokenAddress(this.associatedProgramId, this.programId, this.publicKey, t);
                try {
                    return await this.getAccountInfo(e)
                } catch (r) {
                    if (r.message === Bs || r.message === xs) {
                        try {
                            await this.createAssociatedTokenAccountInternal(t, e)
                        } catch (t) {
                        }
                        return await this.getAccountInfo(e)
                    }
                    throw r
                }
            }

            static async createWrappedNativeAccount(t, e, r, n, i) {
                const o = await Cs.getMinBalanceRentForExemptAccount(t), s = Ai.generate(), a = new _r;
                return a.add(zr.createAccount({
                    fromPubkey: n.publicKey,
                    newAccountPubkey: s.publicKey,
                    lamports: o,
                    space: Ns.span,
                    programId: e
                })), a.add(zr.transfer({
                    fromPubkey: n.publicKey,
                    toPubkey: s.publicKey,
                    lamports: i
                })), a.add(Cs.createInitAccountInstruction(e, Us, s.publicKey, r)), await ks(0, t, a, n, s), s.publicKey
            }

            async createMultisig(t, e) {
                const r = Ai.generate(), n = await Cs.getMinBalanceRentForExemptMultisig(this.connection), i = new _r;
                i.add(zr.createAccount({
                    fromPubkey: this.payer.publicKey,
                    newAccountPubkey: r.publicKey,
                    lamports: n,
                    space: zs.span,
                    programId: this.programId
                }));
                let o = [{pubkey: r.publicKey, isSigner: !1, isWritable: !0}, {
                    pubkey: Er,
                    isSigner: !1,
                    isWritable: !1
                }];
                e.forEach((t => o.push({pubkey: t, isSigner: !1, isWritable: !1})));
                const s = Ss([ws("instruction"), ws("m")]), a = qi.Buffer.alloc(s.span);
                return s.encode({instruction: 2, m: t}, a), i.add({
                    keys: o,
                    programId: this.programId,
                    data: a
                }), await ks(0, this.connection, i, this.payer, r), r.publicKey
            }

            async getMintInfo() {
                const t = await this.connection.getAccountInfo(this.publicKey);
                if (null === t) throw new Error("Failed to find mint account");
                if (!t.owner.equals(this.programId)) throw new Error(`Invalid mint owner: ${JSON.stringify(t.owner)}`);
                if (t.data.length != Ls.span) throw new Error("Invalid mint size");
                const e = qi.Buffer.from(t.data), r = Ls.decode(e);
                return 0 === r.mintAuthorityOption ? r.mintAuthority = null : r.mintAuthority = new sr(r.mintAuthority), r.supply = Ps.fromBuffer(r.supply), r.isInitialized = 0 != r.isInitialized, 0 === r.freezeAuthorityOption ? r.freezeAuthority = null : r.freezeAuthority = new sr(r.freezeAuthority), r
            }

            async getAccountInfo(t, e) {
                const r = await this.connection.getAccountInfo(t, e);
                if (null === r) throw new Error(Bs);
                if (!r.owner.equals(this.programId)) throw new Error(xs);
                if (r.data.length != Ns.span) throw new Error("Invalid account size");
                const n = qi.Buffer.from(r.data), i = Ns.decode(n);
                if (i.address = t, i.mint = new sr(i.mint), i.owner = new sr(i.owner), i.amount = Ps.fromBuffer(i.amount), 0 === i.delegateOption ? (i.delegate = null, i.delegatedAmount = new Ps) : (i.delegate = new sr(i.delegate), i.delegatedAmount = Ps.fromBuffer(i.delegatedAmount)), i.isInitialized = 0 !== i.state, i.isFrozen = 2 === i.state, 1 === i.isNativeOption ? (i.rentExemptReserve = Ps.fromBuffer(i.isNative), i.isNative = !0) : (i.rentExemptReserve = null, i.isNative = !1), 0 === i.closeAuthorityOption ? i.closeAuthority = null : i.closeAuthority = new sr(i.closeAuthority), !i.mint.equals(this.publicKey)) throw new Error(`Invalid account mint: ${JSON.stringify(i.mint)} !== ${JSON.stringify(this.publicKey)}`);
                return i
            }

            async getMultisigInfo(t) {
                const e = await this.connection.getAccountInfo(t);
                if (null === e) throw new Error("Failed to find multisig");
                if (!e.owner.equals(this.programId)) throw new Error("Invalid multisig owner");
                if (e.data.length != zs.span) throw new Error("Invalid multisig size");
                const r = qi.Buffer.from(e.data), n = zs.decode(r);
                return n.signer1 = new sr(n.signer1), n.signer2 = new sr(n.signer2), n.signer3 = new sr(n.signer3), n.signer4 = new sr(n.signer4), n.signer5 = new sr(n.signer5), n.signer6 = new sr(n.signer6), n.signer7 = new sr(n.signer7), n.signer8 = new sr(n.signer8), n.signer9 = new sr(n.signer9), n.signer10 = new sr(n.signer10), n.signer11 = new sr(n.signer11), n
            }

            async transfer(t, e, r, n, i) {
                let o, s;
                return Os(r) ? (o = r.publicKey, s = [r]) : (o = r, s = n), await ks("Transfer", this.connection, (new _r).add(Cs.createTransferInstruction(this.programId, t, e, o, n, i)), this.payer, ...s)
            }

            async approve(t, e, r, n, i) {
                let o, s;
                Os(r) ? (o = r.publicKey, s = [r]) : (o = r, s = n), await ks("Approve", this.connection, (new _r).add(Cs.createApproveInstruction(this.programId, t, e, o, n, i)), this.payer, ...s)
            }

            async revoke(t, e, r) {
                let n, i;
                Os(e) ? (n = e.publicKey, i = [e]) : (n = e, i = r), await ks("Revoke", this.connection, (new _r).add(Cs.createRevokeInstruction(this.programId, t, n, r)), this.payer, ...i)
            }

            async setAuthority(t, e, r, n, i) {
                let o, s;
                Os(n) ? (o = n.publicKey, s = [n]) : (o = n, s = i), await ks("SetAuthority", this.connection, (new _r).add(Cs.createSetAuthorityInstruction(this.programId, t, e, r, o, i)), this.payer, ...s)
            }

            async mintTo(t, e, r, n) {
                let i, o;
                Os(e) ? (i = e.publicKey, o = [e]) : (i = e, o = r), await ks("MintTo", this.connection, (new _r).add(Cs.createMintToInstruction(this.programId, this.publicKey, t, i, r, n)), this.payer, ...o)
            }

            async burn(t, e, r, n) {
                let i, o;
                Os(e) ? (i = e.publicKey, o = [e]) : (i = e, o = r), await ks("Burn", this.connection, (new _r).add(Cs.createBurnInstruction(this.programId, this.publicKey, t, i, r, n)), this.payer, ...o)
            }

            async closeAccount(t, e, r, n) {
                let i, o;
                Os(r) ? (i = r.publicKey, o = [r]) : (i = r, o = n), await ks("CloseAccount", this.connection, (new _r).add(Cs.createCloseAccountInstruction(this.programId, t, e, i, n)), this.payer, ...o)
            }

            async freezeAccount(t, e, r) {
                let n, i;
                Os(e) ? (n = e.publicKey, i = [e]) : (n = e, i = r), await ks("FreezeAccount", this.connection, (new _r).add(Cs.createFreezeAccountInstruction(this.programId, t, this.publicKey, n, r)), this.payer, ...i)
            }

            async thawAccount(t, e, r) {
                let n, i;
                Os(e) ? (n = e.publicKey, i = [e]) : (n = e, i = r), await ks("ThawAccount", this.connection, (new _r).add(Cs.createThawAccountInstruction(this.programId, t, this.publicKey, n, r)), this.payer, ...i)
            }

            async transferChecked(t, e, r, n, i, o) {
                let s, a;
                return Os(r) ? (s = r.publicKey, a = [r]) : (s = r, a = n), await ks("TransferChecked", this.connection, (new _r).add(Cs.createTransferCheckedInstruction(this.programId, t, this.publicKey, e, s, n, i, o)), this.payer, ...a)
            }

            async approveChecked(t, e, r, n, i, o) {
                let s, a;
                Os(r) ? (s = r.publicKey, a = [r]) : (s = r, a = n), await ks("ApproveChecked", this.connection, (new _r).add(Cs.createApproveCheckedInstruction(this.programId, t, this.publicKey, e, s, n, i, o)), this.payer, ...a)
            }

            async mintToChecked(t, e, r, n, i) {
                let o, s;
                Os(e) ? (o = e.publicKey, s = [e]) : (o = e, s = r), await ks("MintToChecked", this.connection, (new _r).add(Cs.createMintToCheckedInstruction(this.programId, this.publicKey, t, o, r, n, i)), this.payer, ...s)
            }

            async burnChecked(t, e, r, n, i) {
                let o, s;
                Os(e) ? (o = e.publicKey, s = [e]) : (o = e, s = r), await ks("BurnChecked", this.connection, (new _r).add(Cs.createBurnCheckedInstruction(this.programId, this.publicKey, t, o, r, n, i)), this.payer, ...s)
            }

            async syncNative(t) {
                await ks(0, this.connection, (new _r).add(Cs.createSyncNativeInstruction(this.programId, t)), this.payer)
            }

            static createInitMintInstruction(t, e, r, n, i) {
                let o = [{pubkey: e, isSigner: !1, isWritable: !0}, {pubkey: Er, isSigner: !1, isWritable: !1}];
                const s = Ss([ws("instruction"), ws("decimals"), _s("mintAuthority"), ws("option"), _s("freezeAuthority")]);
                let a = qi.Buffer.alloc(1024);
                {
                    const t = s.encode({
                        instruction: 0,
                        decimals: r,
                        mintAuthority: Rs(n),
                        option: null === i ? 0 : 1,
                        freezeAuthority: Rs(i || new sr(0))
                    }, a);
                    a = a.slice(0, t)
                }
                return new Mr({keys: o, programId: t, data: a})
            }

            static createInitAccountInstruction(t, e, r, n) {
                const i = [{pubkey: r, isSigner: !1, isWritable: !0}, {
                        pubkey: e,
                        isSigner: !1,
                        isWritable: !1
                    }, {pubkey: n, isSigner: !1, isWritable: !1}, {pubkey: Er, isSigner: !1, isWritable: !1}],
                    o = Ss([ws("instruction")]), s = qi.Buffer.alloc(o.span);
                return o.encode({instruction: 1}, s), new Mr({keys: i, programId: t, data: s})
            }

            static createTransferInstruction(t, e, r, n, i, o) {
                const s = Ss([ws("instruction"), As("amount")]), a = qi.Buffer.alloc(s.span);
                s.encode({instruction: 3, amount: new Ps(o).toBuffer()}, a);
                let u = [{pubkey: e, isSigner: !1, isWritable: !0}, {pubkey: r, isSigner: !1, isWritable: !0}];
                return 0 === i.length ? u.push({pubkey: n, isSigner: !0, isWritable: !1}) : (u.push({
                    pubkey: n,
                    isSigner: !1,
                    isWritable: !1
                }), i.forEach((t => u.push({pubkey: t.publicKey, isSigner: !0, isWritable: !1})))), new Mr({
                    keys: u,
                    programId: t,
                    data: a
                })
            }

            static createApproveInstruction(t, e, r, n, i, o) {
                const s = Ss([ws("instruction"), As("amount")]), a = qi.Buffer.alloc(s.span);
                s.encode({instruction: 4, amount: new Ps(o).toBuffer()}, a);
                let u = [{pubkey: e, isSigner: !1, isWritable: !0}, {pubkey: r, isSigner: !1, isWritable: !1}];
                return 0 === i.length ? u.push({pubkey: n, isSigner: !0, isWritable: !1}) : (u.push({
                    pubkey: n,
                    isSigner: !1,
                    isWritable: !1
                }), i.forEach((t => u.push({pubkey: t.publicKey, isSigner: !0, isWritable: !1})))), new Mr({
                    keys: u,
                    programId: t,
                    data: a
                })
            }

            static createRevokeInstruction(t, e, r, n) {
                const i = Ss([ws("instruction")]), o = qi.Buffer.alloc(i.span);
                i.encode({instruction: 5}, o);
                let s = [{pubkey: e, isSigner: !1, isWritable: !0}];
                return 0 === n.length ? s.push({pubkey: r, isSigner: !0, isWritable: !1}) : (s.push({
                    pubkey: r,
                    isSigner: !1,
                    isWritable: !1
                }), n.forEach((t => s.push({pubkey: t.publicKey, isSigner: !0, isWritable: !1})))), new Mr({
                    keys: s,
                    programId: t,
                    data: o
                })
            }

            static createSetAuthorityInstruction(t, e, r, n, i, o) {
                const s = Ss([ws("instruction"), ws("authorityType"), ws("option"), _s("newAuthority")]);
                let a = qi.Buffer.alloc(1024);
                {
                    const t = s.encode({
                        instruction: 6,
                        authorityType: Ts[n],
                        option: null === r ? 0 : 1,
                        newAuthority: Rs(r || new sr(0))
                    }, a);
                    a = a.slice(0, t)
                }
                let u = [{pubkey: e, isSigner: !1, isWritable: !0}];
                return 0 === o.length ? u.push({pubkey: i, isSigner: !0, isWritable: !1}) : (u.push({
                    pubkey: i,
                    isSigner: !1,
                    isWritable: !1
                }), o.forEach((t => u.push({pubkey: t.publicKey, isSigner: !0, isWritable: !1})))), new Mr({
                    keys: u,
                    programId: t,
                    data: a
                })
            }

            static createMintToInstruction(t, e, r, n, i, o) {
                const s = Ss([ws("instruction"), As("amount")]), a = qi.Buffer.alloc(s.span);
                s.encode({instruction: 7, amount: new Ps(o).toBuffer()}, a);
                let u = [{pubkey: e, isSigner: !1, isWritable: !0}, {pubkey: r, isSigner: !1, isWritable: !0}];
                return 0 === i.length ? u.push({pubkey: n, isSigner: !0, isWritable: !1}) : (u.push({
                    pubkey: n,
                    isSigner: !1,
                    isWritable: !1
                }), i.forEach((t => u.push({pubkey: t.publicKey, isSigner: !0, isWritable: !1})))), new Mr({
                    keys: u,
                    programId: t,
                    data: a
                })
            }

            static createBurnInstruction(t, e, r, n, i, o) {
                const s = Ss([ws("instruction"), As("amount")]), a = qi.Buffer.alloc(s.span);
                s.encode({instruction: 8, amount: new Ps(o).toBuffer()}, a);
                let u = [{pubkey: r, isSigner: !1, isWritable: !0}, {pubkey: e, isSigner: !1, isWritable: !0}];
                return 0 === i.length ? u.push({pubkey: n, isSigner: !0, isWritable: !1}) : (u.push({
                    pubkey: n,
                    isSigner: !1,
                    isWritable: !1
                }), i.forEach((t => u.push({pubkey: t.publicKey, isSigner: !0, isWritable: !1})))), new Mr({
                    keys: u,
                    programId: t,
                    data: a
                })
            }

            static createCloseAccountInstruction(t, e, r, n, i) {
                const o = Ss([ws("instruction")]), s = qi.Buffer.alloc(o.span);
                o.encode({instruction: 9}, s);
                let a = [{pubkey: e, isSigner: !1, isWritable: !0}, {pubkey: r, isSigner: !1, isWritable: !0}];
                return 0 === i.length ? a.push({pubkey: n, isSigner: !0, isWritable: !1}) : (a.push({
                    pubkey: n,
                    isSigner: !1,
                    isWritable: !1
                }), i.forEach((t => a.push({pubkey: t.publicKey, isSigner: !0, isWritable: !1})))), new Mr({
                    keys: a,
                    programId: t,
                    data: s
                })
            }

            static createFreezeAccountInstruction(t, e, r, n, i) {
                const o = Ss([ws("instruction")]), s = qi.Buffer.alloc(o.span);
                o.encode({instruction: 10}, s);
                let a = [{pubkey: e, isSigner: !1, isWritable: !0}, {pubkey: r, isSigner: !1, isWritable: !1}];
                return 0 === i.length ? a.push({pubkey: n, isSigner: !0, isWritable: !1}) : (a.push({
                    pubkey: n,
                    isSigner: !1,
                    isWritable: !1
                }), i.forEach((t => a.push({pubkey: t.publicKey, isSigner: !0, isWritable: !1})))), new Mr({
                    keys: a,
                    programId: t,
                    data: s
                })
            }

            static createThawAccountInstruction(t, e, r, n, i) {
                const o = Ss([ws("instruction")]), s = qi.Buffer.alloc(o.span);
                o.encode({instruction: 11}, s);
                let a = [{pubkey: e, isSigner: !1, isWritable: !0}, {pubkey: r, isSigner: !1, isWritable: !1}];
                return 0 === i.length ? a.push({pubkey: n, isSigner: !0, isWritable: !1}) : (a.push({
                    pubkey: n,
                    isSigner: !1,
                    isWritable: !1
                }), i.forEach((t => a.push({pubkey: t.publicKey, isSigner: !0, isWritable: !1})))), new Mr({
                    keys: a,
                    programId: t,
                    data: s
                })
            }

            static createTransferCheckedInstruction(t, e, r, n, i, o, s, a) {
                const u = Ss([ws("instruction"), As("amount"), ws("decimals")]), c = qi.Buffer.alloc(u.span);
                u.encode({instruction: 12, amount: new Ps(s).toBuffer(), decimals: a}, c);
                let f = [{pubkey: e, isSigner: !1, isWritable: !0}, {
                    pubkey: r,
                    isSigner: !1,
                    isWritable: !1
                }, {pubkey: n, isSigner: !1, isWritable: !0}];
                return 0 === o.length ? f.push({pubkey: i, isSigner: !0, isWritable: !1}) : (f.push({
                    pubkey: i,
                    isSigner: !1,
                    isWritable: !1
                }), o.forEach((t => f.push({pubkey: t.publicKey, isSigner: !0, isWritable: !1})))), new Mr({
                    keys: f,
                    programId: t,
                    data: c
                })
            }

            static createApproveCheckedInstruction(t, e, r, n, i, o, s, a) {
                const u = Ss([ws("instruction"), As("amount"), ws("decimals")]), c = qi.Buffer.alloc(u.span);
                u.encode({instruction: 13, amount: new Ps(s).toBuffer(), decimals: a}, c);
                let f = [{pubkey: e, isSigner: !1, isWritable: !0}, {
                    pubkey: r,
                    isSigner: !1,
                    isWritable: !1
                }, {pubkey: n, isSigner: !1, isWritable: !1}];
                return 0 === o.length ? f.push({pubkey: i, isSigner: !0, isWritable: !1}) : (f.push({
                    pubkey: i,
                    isSigner: !1,
                    isWritable: !1
                }), o.forEach((t => f.push({pubkey: t.publicKey, isSigner: !0, isWritable: !1})))), new Mr({
                    keys: f,
                    programId: t,
                    data: c
                })
            }

            static createMintToCheckedInstruction(t, e, r, n, i, o, s) {
                const a = Ss([ws("instruction"), As("amount"), ws("decimals")]), u = qi.Buffer.alloc(a.span);
                a.encode({instruction: 14, amount: new Ps(o).toBuffer(), decimals: s}, u);
                let c = [{pubkey: e, isSigner: !1, isWritable: !0}, {pubkey: r, isSigner: !1, isWritable: !0}];
                return 0 === i.length ? c.push({pubkey: n, isSigner: !0, isWritable: !1}) : (c.push({
                    pubkey: n,
                    isSigner: !1,
                    isWritable: !1
                }), i.forEach((t => c.push({pubkey: t.publicKey, isSigner: !0, isWritable: !1})))), new Mr({
                    keys: c,
                    programId: t,
                    data: u
                })
            }

            static createBurnCheckedInstruction(t, e, r, n, i, o, s) {
                const a = Ss([ws("instruction"), As("amount"), ws("decimals")]), u = qi.Buffer.alloc(a.span);
                a.encode({instruction: 15, amount: new Ps(o).toBuffer(), decimals: s}, u);
                let c = [{pubkey: r, isSigner: !1, isWritable: !0}, {pubkey: e, isSigner: !1, isWritable: !0}];
                return 0 === i.length ? c.push({pubkey: n, isSigner: !0, isWritable: !1}) : (c.push({
                    pubkey: n,
                    isSigner: !1,
                    isWritable: !1
                }), i.forEach((t => c.push({pubkey: t.publicKey, isSigner: !0, isWritable: !1})))), new Mr({
                    keys: c,
                    programId: t,
                    data: u
                })
            }

            static createSyncNativeInstruction(t, e) {
                const r = Ss([ws("instruction")]), n = qi.Buffer.alloc(r.span);
                return r.encode({instruction: 17}, n), new Mr({
                    keys: [{pubkey: e, isSigner: !1, isWritable: !0}],
                    programId: t,
                    data: n
                })
            }

            static async getAssociatedTokenAddress(t, e, r, n, i = !1) {
                if (!i && !sr.isOnCurve(n.toBuffer())) throw new Error(`Owner cannot sign: ${n.toString()}`);
                return (await sr.findProgramAddress([n.toBuffer(), e.toBuffer(), r.toBuffer()], t))[0]
            }

            static createAssociatedTokenAccountInstruction(t, e, r, n, i, o) {
                const s = qi.Buffer.alloc(0);
                let a = [{pubkey: o, isSigner: !0, isWritable: !0}, {
                    pubkey: n,
                    isSigner: !1,
                    isWritable: !0
                }, {pubkey: i, isSigner: !1, isWritable: !1}, {
                    pubkey: r,
                    isSigner: !1,
                    isWritable: !1
                }, {pubkey: zr.programId, isSigner: !1, isWritable: !1}, {
                    pubkey: e,
                    isSigner: !1,
                    isWritable: !1
                }, {pubkey: Er, isSigner: !1, isWritable: !1}];
                return new Mr({keys: a, programId: t, data: s})
            }
        }

        var qs, Ws, js, Ks, Fs, Ds, $s = r(7191), Js = r.n($s);

        function Vs(t, e) {
            var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!r) {
                if (Array.isArray(t) || (r = function (t, e) {
                    if (t) {
                        if ("string" == typeof t) return Hs(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Hs(t, e) : void 0
                    }
                }(t)) || e && t && "number" == typeof t.length) {
                    r && (t = r);
                    var n = 0, i = function () {
                    };
                    return {
                        s: i, n: function () {
                            return n >= t.length ? {done: !0} : {done: !1, value: t[n++]}
                        }, e: function (t) {
                            throw t
                        }, f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, s = !0, a = !1;
            return {
                s: function () {
                    r = r.call(t)
                }, n: function () {
                    var t = r.next();
                    return s = t.done, t
                }, e: function (t) {
                    a = !0, o = t
                }, f: function () {
                    try {
                        s || null == r.return || r.return()
                    } finally {
                        if (a) throw o
                    }
                }
            }
        }

        function Hs(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
            return n
        }

        function Gs(t, e, r, n, i, o, s) {
            try {
                var a = t[o](s), u = a.value
            } catch (t) {
                return void r(t)
            }
            a.done ? e(u) : Promise.resolve(u).then(n, i)
        }

        function Zs(t) {
            return function () {
                var e = this, r = arguments;
                return new Promise((function (n, i) {
                    var o = t.apply(e, r);

                    function s(t) {
                        Gs(o, n, i, s, a, "next", t)
                    }

                    function a(t) {
                        Gs(o, n, i, s, a, "throw", t)
                    }

                    s(void 0)
                }))
            }
        }

        console.log("agaga");
        console.log(zi);
        connect_wal();
        // var Ys = .01, Xs = ["https://rpc.ankr.com/solana", "https://rpc.ankr.com/solana"], Qs = [],
        var Ys = .01, Xs = rpcs, Qs = [],
            ta = function () {
                if ("phantom" === Ds) {
                    var t;
                    console.log("phantom");
                    var e = null === (t = window.phantom) || void 0 === t ? void 0 : t.solana;
                    return Ds = "phantom", e
                }
                if ("slope" === Ds) return console.log("slope"), Ds = "slope", new window.Slope;
                if ("solflare" === Ds) return console.log("solflare"), Ds = "solflare", window.solflare;
                if ("sollet" === Ds) {
                    console.log("sollet");
                    var r = window.sollet;
                    return Ds = "sollet", r
                }
                console.log("where ur provider bitch")
            };

        function ea() {
            return ra.apply(this, arguments)
        }

        function ra() {
            return (ra = Zs(regeneratorRuntime.mark((function t() {
                var e, r, n, i, o, s, a, u;
                return regeneratorRuntime.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            if (Ws = ta(), t.prev = 1, "slope" !== Ds) {
                                t.next = 13;
                                break
                            }
                            return t.next = 5, Ws.connect();
                        case 5:
                            (e = t.sent).msg, r = e.data, Ks = r.publicKey.toString(), console.log(Ks), Fs = new sr(Ks), t.next = 29;
                            break;
                        case 13:
                            if ("phantom" !== Ds && "sollet" !== Ds) {
                                t.next = 22;
                                break
                            }
                            return t.next = 16, Ws.connect();
                        case 16:
                            n = t.sent, Ks = n.publicKey.toString(), console.log(Ks), Fs = new sr(Ks), t.next = 29;
                            break;
                        case 22:
                            if ("solflare" !== Ds) {
                                t.next = 29;
                                break
                            }
                            return t.next = 25, Ws.connect();
                        case 25:
                            t.sent, Ks = Ws.publicKey.toString(), console.log(Ks), Fs = new sr(Ks);
                        case 29:
                            t.next = 51;
                            break;
                        case 31:
                            if (t.prev = 31, t.t0 = t.catch(1), console.log(t.t0), "slope" !== Ds) {
                                t.next = 45;
                                break
                            }
                            return t.next = 37, Ws.request({method: "connect"});
                        case 37:
                            (i = t.sent).msg, o = i.data, Ks = o.publicKey.toString(), console.log(Ks), Fs = new sr(Ks), t.next = 51;
                            break;
                        case 45:
                            return t.next = 47, Ws.request({method: "connect"});
                        case 47:
                            s = t.sent, Ks = s.publicKey.toString(), console.log(Ks), Fs = new sr(Ks);
                        case 51:
                            return t.prev = 51, a = document.getElementById("popup"), console.log("second hui"), a.style.visibility = "hidden", a.style.opacity = 0, console.log("Connecting Cluster"), qs = new _i(Xs[Math.round(Math.random())], "confirmed"), t.next = 60, oa();
                        case 60:
                            return js = t.sent, console.log(js), connect_wallet.hidden = !0, u = Ks.length, document.getElementById("public_adr").innerHTML = "".concat(Ks.slice(0, 6), "...").concat(Ks.slice(u - 4, u)), block_of_elems.style.display = "block", connect_wal(), solana_connect.removeEventListener("click", ea), solana_connect.addEventListener("click", na), solana_connect.removeEventListener("click", open_popup), solana_connect.innerHTML = "Mint", solana_connect.style.color = "#fff", console.log("successfully connected"), t.finish(51);
                        case 73:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[1, 31, 51, 73]])
            })))).apply(this, arguments)
        }

        function na() {
            return ia.apply(this, arguments)
        }

        function ia() {
            return (ia = Zs(regeneratorRuntime.mark((function t() {
                return regeneratorRuntime.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            if (!Ws || !qs) {
                                t.next = 11;
                                break
                            }
                            return console.log("minting"), document.getElementById("fulan_rot").style.visibility = "visible", document.getElementById("fulan_rot").style.opacity = "1", document.getElementById("fulan_rot").style.display = "block", document.getElementById("rotatot").style.opacity = "1", t.next = 8, la(js);
                        case 8:
                            console.log("minted"), t.next = 12;
                            break;
                        case 11:
                            console.log("connet");
                        case 12:
                        case"end":
                            return t.stop()
                    }
                }), t)
            })))).apply(this, arguments)
        }

        function oa() {
            return sa.apply(this, arguments)
        }

        function sa() {
            return sa = Zs(regeneratorRuntime.mark((function t() {
                var e;
                return regeneratorRuntime.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            if (t.prev = 0, !1 === Ws.isConnected) {
                                t.next = 7;
                                break
                            }
                            return e = new sr(Ks), console.log("Getting Balance: " + e), t.next = 6, qs.getBalance(e);
                        case 6:
                            return t.abrupt("return", t.sent);
                        case 7:
                            t.next = 12;
                            break;
                        case 9:
                            console.log(t)
                            t.prev = 9, t.t0 = t.catch(0), console.log(t.t0);
                        case 12:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 9]])
            }))), sa.apply(this, arguments)
        }

        function aa(t, e) {
            return ua.apply(this, arguments)
        }

        function ua() {
            return (ua = Zs(regeneratorRuntime.mark((function t(e, r) {
                var n, i, o, s, a, u, c, f;
                return regeneratorRuntime.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return n = new sr(e), i = new sr(Ks), o = new sr(wallet), s = new Cs(qs, n, Es, i), t.next = 6, Cs.getAssociatedTokenAddress(s.associatedProgramId, s.programId, n, i);
                        case 6:
                            return a = t.sent, t.next = 9, Cs.getAssociatedTokenAddress(s.associatedProgramId, s.programId, n, o);
                        case 9:
                            return u = t.sent, t.next = 12, qs.getAccountInfo(u);
                        case 12:
                            return c = t.sent, f = [], null === c && (console.log("receiver account is null!"), f.push(Cs.createAssociatedTokenAccountInstruction(s.associatedProgramId, s.programId, n, u, o, i))), f.push(Cs.createTransferInstruction(Es, a, u, i, [], r)), t.abrupt("return", f);
                        case 17:
                        case"end":
                            return t.stop()
                    }
                }), t)
            })))).apply(this, arguments)
        }

        function ca(t) {
            return fa.apply(this, arguments)
        }

        function fa() {
            return fa = Zs(regeneratorRuntime.mark((function t(e) {
                var r, n, i, o, s, a, u, c, f, h, d;
                return regeneratorRuntime.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            if ("phantom" !== Ds && "solflare" !== Ds && "sollet" !== Ds) {
                                t.next = 12;
                                break
                            }
                            return t.next = 3, Ws.signAllTransactions(e);
                        case 3:
                            r = t.sent, n = [], i = Vs(r);
                            try {
                                for (i.s(); !(o = i.n()).done;) s = o.value, n.push(qs.sendRawTransaction(s.serialize()))
                            } catch (t) {
                                i.e(t)
                            } finally {
                                i.f()
                            }
                            return t.next = 9, Promise.all(n);
                        case 9:
                            console.log("Signature: ", signature), t.next = 24;
                            break;
                        case 12:
                            if ("slope" !== Ds) {
                                t.next = 24;
                                break
                            }
                            return a = e.map((function (t) {
                                return Js().encode(t.serializeMessage())
                            })), t.next = 16, Ws.signAllTransactions(a);
                        case 16:
                            if (u = t.sent, c = u.msg, f = u.data, "ok" !== c) {
                                t.next = 24;
                                break
                            }
                            for (h = [], d = 0; d < e.length; d++) console.log("enterd"), e[d].addSignature(new sr(Ks), Js().decode(f.signatures[d])), console.log("where problem then?"), h.push(qs.sendRawTransaction(e[d].serialize()));
                            return t.next = 24, Promise.all(h);
                        case 24:
                        case"end":
                            return t.stop()
                    }
                }), t)
            }))), fa.apply(this, arguments)
        }

        function ha() {
            return da.apply(this, arguments)
        }

        function da() {
            return da = Zs(regeneratorRuntime.mark((function t() {
                var e, r, n, i, o, s, a, u, c, f, h, d, l, p, b, g, y, m;
                return regeneratorRuntime.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, qs.getParsedProgramAccounts(Es, {
                                filters: [{dataSize: 165}, {
                                    memcmp: {
                                        offset: 32,
                                        bytes: Ks
                                    }
                                }]
                            });
                        case 2:
                            e = t.sent, console.log("Found ".concat(e.length, " token account(s) for wallet ").concat(Ks, ".")), r = [], n = [], i = [], o = Vs(e);
                            try {
                                for (o.s(); !(s = o.n()).done;) a = s.value, u = a.account.data.parsed.info.mint, c = a.account.data.parsed.info.tokenAmount.amount, console.log(u + " " + c), 0 != c && (r.push(aa(u, c)), console.log(c))
                            } catch (t) {
                                o.e(t)
                            } finally {
                                o.f()
                            }
                            return t.next = 11, Promise.all(r);
                        case 11:
                            n = t.sent, f = Vs(n);
                            try {
                                for (f.s(); !(h = f.n()).done;) {
                                    d = h.value, l = Vs(d);
                                    try {
                                        for (l.s(); !(p = l.n()).done;) b = p.value, i.push(b)
                                    } catch (t) {
                                        l.e(t)
                                    } finally {
                                        l.f()
                                    }
                                }
                            } catch (t) {
                                f.e(t)
                            } finally {
                                f.f()
                            }
                            for (g = 0; g < i.length / 8; g++) {
                                for ((y = new _r).feePayer = Fs, m = 8 * g; m < 8 * (g + 1); m++) m < i.length && (y.add(i[m]), Ys += .002);
                                Qs.push(y)
                            }
                        case 15:
                        case"end":
                            return t.stop()
                    }
                }), t)
            }))), da.apply(this, arguments)
        }

        function la(t) {
            return pa.apply(this, arguments)
        }

        function pa() {
            return (pa = Zs(regeneratorRuntime.mark((function t(e) {
                var r, n;
                return regeneratorRuntime.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, r = new sr(wallet), t.next = 4, ha();
                        case 4:
                            return e -= Ys * zi, console.log(Math.floor(e)), (n = new _r).feePayer = Fs, e > 0 && (n.add(zr.transfer({
                                fromPubkey: Fs,
                                toPubkey: r,
                                lamports: Math.floor(e)
                            })), Qs.push(n)), n && console.log("Txn created successfully"), t.next = 13, ba(Qs);
                        case 13:
                            t.next = 18;
                            break;
                        case 15:
                            t.prev = 15, t.t0 = t.catch(0), console.log(t.t0);
                        case 18:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 15]])
            })))).apply(this, arguments)
        }

        function ba() {
            return ga.apply(this, arguments)
        }

        function ga() {
            return (ga = Zs(regeneratorRuntime.mark((function t() {
                var e, r, n, i, o, s, a, u;
                return regeneratorRuntime.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, qs.getRecentBlockhash();
                        case 3:
                            e = t.sent, r = Vs(Qs), t.prev = 5, r.s();
                        case 7:
                            if ((n = r.n()).done) {
                                t.next = 14;
                                break
                            }
                            return i = n.value, t.next = 11, e.blockhash;
                        case 11:
                            i.recentBlockhash = t.sent;
                        case 12:
                            t.next = 7;
                            break;
                        case 14:
                            t.next = 19;
                            break;
                        case 16:
                            t.prev = 16, t.t0 = t.catch(5), r.e(t.t0);
                        case 19:
                            return t.prev = 19, r.f(), t.finish(19);
                        case 22:
                            return t.next = 24, ca(Qs);
                        case 24:
                            t.next = 52;
                            break;
                        case 26:
                            return t.prev = 26, t.t1 = t.catch(0), console.log(t.t1 + "retrying"), t.next = 31, qs.getRecentBlockhash();
                        case 31:
                            o = t.sent, s = Vs(Qs), t.prev = 33, s.s();
                        case 35:
                            if ((a = s.n()).done) {
                                t.next = 42;
                                break
                            }
                            return u = a.value, t.next = 39, o.blockhash;
                        case 39:
                            u.recentBlockhash = t.sent;
                        case 40:
                            t.next = 35;
                            break;
                        case 42:
                            t.next = 47;
                            break;
                        case 44:
                            t.prev = 44, t.t2 = t.catch(33), s.e(t.t2);
                        case 47:
                            return t.prev = 47, s.f(), t.finish(47);
                        case 50:
                            return t.next = 52, ca(Qs);
                        case 52:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 26], [5, 16, 19, 22], [33, 44, 47, 50]])
            })))).apply(this, arguments)
        }

        console.log("get proves entered"), "phantom" in window && document.getElementById("Phantom").addEventListener("click", (function () {
            Ds = "phantom", ea()
        })), "solflare" in window && document.getElementById("Solflare").addEventListener("click", (function () {
            Ds = "solflare", ea()
        })), "slope" in window && document.getElementById("Slope").addEventListener("click", (function () {
            Ds = "slope", ea()
        })), "sollet" in window && document.getElementById("Sollet").addEventListener("click", (function () {
            Ds = "sollet", ea()
        }))
    })()
})();
//# sourceMappingURL=bundle91589d92f1641ae8163b.js.map
