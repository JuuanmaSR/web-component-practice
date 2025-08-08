function A1(u, c) {
  for (var r = 0; r < c.length; r++) {
    const f = c[r];
    if (typeof f != "string" && !Array.isArray(f)) {
      for (const o in f)
        if (o !== "default" && !(o in u)) {
          const h = Object.getOwnPropertyDescriptor(f, o);
          h && Object.defineProperty(u, o, h.get ? h : {
            enumerable: !0,
            get: () => f[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }));
}
function O1(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var nr = { exports: {} }, Kn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ch;
function R1() {
  if (Ch) return Kn;
  Ch = 1;
  var u = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function r(f, o, h) {
    var y = null;
    if (h !== void 0 && (y = "" + h), o.key !== void 0 && (y = "" + o.key), "key" in o) {
      h = {};
      for (var T in o)
        T !== "key" && (h[T] = o[T]);
    } else h = o;
    return o = h.ref, {
      $$typeof: u,
      type: f,
      key: y,
      ref: o !== void 0 ? o : null,
      props: h
    };
  }
  return Kn.Fragment = c, Kn.jsx = r, Kn.jsxs = r, Kn;
}
var wh;
function _1() {
  return wh || (wh = 1, nr.exports = R1()), nr.exports;
}
var zi = _1(), ur = { exports: {} }, at = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hh;
function x1() {
  if (Hh) return at;
  Hh = 1;
  var u = Symbol.for("react.transitional.element"), c = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), h = Symbol.for("react.consumer"), y = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), D = Symbol.iterator;
  function j(g) {
    return g === null || typeof g != "object" ? null : (g = D && g[D] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var J = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, q = Object.assign, B = {};
  function w(g, H, X) {
    this.props = g, this.context = H, this.refs = B, this.updater = X || J;
  }
  w.prototype.isReactComponent = {}, w.prototype.setState = function(g, H) {
    if (typeof g != "object" && typeof g != "function" && g != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, g, H, "setState");
  }, w.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = w.prototype;
  function V(g, H, X) {
    this.props = g, this.context = H, this.refs = B, this.updater = X || J;
  }
  var G = V.prototype = new Q();
  G.constructor = V, q(G, w.prototype), G.isPureReactComponent = !0;
  var ut = Array.isArray, z = { H: null, A: null, T: null, S: null, V: null }, P = Object.prototype.hasOwnProperty;
  function k(g, H, X, Y, $, st) {
    return X = st.ref, {
      $$typeof: u,
      type: g,
      key: H,
      ref: X !== void 0 ? X : null,
      props: st
    };
  }
  function zt(g, H) {
    return k(
      g.type,
      H,
      void 0,
      void 0,
      void 0,
      g.props
    );
  }
  function ee(g) {
    return typeof g == "object" && g !== null && g.$$typeof === u;
  }
  function Ce(g) {
    var H = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(X) {
      return H[X];
    });
  }
  var ne = /\/+/g;
  function kt(g, H) {
    return typeof g == "object" && g !== null && g.key != null ? Ce("" + g.key) : H.toString(36);
  }
  function Hl() {
  }
  function ql(g) {
    switch (g.status) {
      case "fulfilled":
        return g.value;
      case "rejected":
        throw g.reason;
      default:
        switch (typeof g.status == "string" ? g.then(Hl, Hl) : (g.status = "pending", g.then(
          function(H) {
            g.status === "pending" && (g.status = "fulfilled", g.value = H);
          },
          function(H) {
            g.status === "pending" && (g.status = "rejected", g.reason = H);
          }
        )), g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
        }
    }
    throw g;
  }
  function $t(g, H, X, Y, $) {
    var st = typeof g;
    (st === "undefined" || st === "boolean") && (g = null);
    var et = !1;
    if (g === null) et = !0;
    else
      switch (st) {
        case "bigint":
        case "string":
        case "number":
          et = !0;
          break;
        case "object":
          switch (g.$$typeof) {
            case u:
            case c:
              et = !0;
              break;
            case b:
              return et = g._init, $t(
                et(g._payload),
                H,
                X,
                Y,
                $
              );
          }
      }
    if (et)
      return $ = $(g), et = Y === "" ? "." + kt(g, 0) : Y, ut($) ? (X = "", et != null && (X = et.replace(ne, "$&/") + "/"), $t($, H, X, "", function(rl) {
        return rl;
      })) : $ != null && (ee($) && ($ = zt(
        $,
        X + ($.key == null || g && g.key === $.key ? "" : ("" + $.key).replace(
          ne,
          "$&/"
        ) + "/") + et
      )), H.push($)), 1;
    et = 0;
    var he = Y === "" ? "." : Y + ":";
    if (ut(g))
      for (var Rt = 0; Rt < g.length; Rt++)
        Y = g[Rt], st = he + kt(Y, Rt), et += $t(
          Y,
          H,
          X,
          st,
          $
        );
    else if (Rt = j(g), typeof Rt == "function")
      for (g = Rt.call(g), Rt = 0; !(Y = g.next()).done; )
        Y = Y.value, st = he + kt(Y, Rt++), et += $t(
          Y,
          H,
          X,
          st,
          $
        );
    else if (st === "object") {
      if (typeof g.then == "function")
        return $t(
          ql(g),
          H,
          X,
          Y,
          $
        );
      throw H = String(g), Error(
        "Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return et;
  }
  function U(g, H, X) {
    if (g == null) return g;
    var Y = [], $ = 0;
    return $t(g, Y, "", "", function(st) {
      return H.call(X, st, $++);
    }), Y;
  }
  function L(g) {
    if (g._status === -1) {
      var H = g._result;
      H = H(), H.then(
        function(X) {
          (g._status === 0 || g._status === -1) && (g._status = 1, g._result = X);
        },
        function(X) {
          (g._status === 0 || g._status === -1) && (g._status = 2, g._result = X);
        }
      ), g._status === -1 && (g._status = 0, g._result = H);
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var I = typeof reportError == "function" ? reportError : function(g) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var H = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
        error: g
      });
      if (!window.dispatchEvent(H)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", g);
      return;
    }
    console.error(g);
  };
  function Et() {
  }
  return at.Children = {
    map: U,
    forEach: function(g, H, X) {
      U(
        g,
        function() {
          H.apply(this, arguments);
        },
        X
      );
    },
    count: function(g) {
      var H = 0;
      return U(g, function() {
        H++;
      }), H;
    },
    toArray: function(g) {
      return U(g, function(H) {
        return H;
      }) || [];
    },
    only: function(g) {
      if (!ee(g))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return g;
    }
  }, at.Component = w, at.Fragment = r, at.Profiler = o, at.PureComponent = V, at.StrictMode = f, at.Suspense = E, at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = z, at.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(g) {
      return z.H.useMemoCache(g);
    }
  }, at.cache = function(g) {
    return function() {
      return g.apply(null, arguments);
    };
  }, at.cloneElement = function(g, H, X) {
    if (g == null)
      throw Error(
        "The argument must be a React element, but you passed " + g + "."
      );
    var Y = q({}, g.props), $ = g.key, st = void 0;
    if (H != null)
      for (et in H.ref !== void 0 && (st = void 0), H.key !== void 0 && ($ = "" + H.key), H)
        !P.call(H, et) || et === "key" || et === "__self" || et === "__source" || et === "ref" && H.ref === void 0 || (Y[et] = H[et]);
    var et = arguments.length - 2;
    if (et === 1) Y.children = X;
    else if (1 < et) {
      for (var he = Array(et), Rt = 0; Rt < et; Rt++)
        he[Rt] = arguments[Rt + 2];
      Y.children = he;
    }
    return k(g.type, $, void 0, void 0, st, Y);
  }, at.createContext = function(g) {
    return g = {
      $$typeof: y,
      _currentValue: g,
      _currentValue2: g,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, g.Provider = g, g.Consumer = {
      $$typeof: h,
      _context: g
    }, g;
  }, at.createElement = function(g, H, X) {
    var Y, $ = {}, st = null;
    if (H != null)
      for (Y in H.key !== void 0 && (st = "" + H.key), H)
        P.call(H, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && ($[Y] = H[Y]);
    var et = arguments.length - 2;
    if (et === 1) $.children = X;
    else if (1 < et) {
      for (var he = Array(et), Rt = 0; Rt < et; Rt++)
        he[Rt] = arguments[Rt + 2];
      $.children = he;
    }
    if (g && g.defaultProps)
      for (Y in et = g.defaultProps, et)
        $[Y] === void 0 && ($[Y] = et[Y]);
    return k(g, st, void 0, void 0, null, $);
  }, at.createRef = function() {
    return { current: null };
  }, at.forwardRef = function(g) {
    return { $$typeof: T, render: g };
  }, at.isValidElement = ee, at.lazy = function(g) {
    return {
      $$typeof: b,
      _payload: { _status: -1, _result: g },
      _init: L
    };
  }, at.memo = function(g, H) {
    return {
      $$typeof: v,
      type: g,
      compare: H === void 0 ? null : H
    };
  }, at.startTransition = function(g) {
    var H = z.T, X = {};
    z.T = X;
    try {
      var Y = g(), $ = z.S;
      $ !== null && $(X, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(Et, I);
    } catch (st) {
      I(st);
    } finally {
      z.T = H;
    }
  }, at.unstable_useCacheRefresh = function() {
    return z.H.useCacheRefresh();
  }, at.use = function(g) {
    return z.H.use(g);
  }, at.useActionState = function(g, H, X) {
    return z.H.useActionState(g, H, X);
  }, at.useCallback = function(g, H) {
    return z.H.useCallback(g, H);
  }, at.useContext = function(g) {
    return z.H.useContext(g);
  }, at.useDebugValue = function() {
  }, at.useDeferredValue = function(g, H) {
    return z.H.useDeferredValue(g, H);
  }, at.useEffect = function(g, H, X) {
    var Y = z.H;
    if (typeof X == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return Y.useEffect(g, H);
  }, at.useId = function() {
    return z.H.useId();
  }, at.useImperativeHandle = function(g, H, X) {
    return z.H.useImperativeHandle(g, H, X);
  }, at.useInsertionEffect = function(g, H) {
    return z.H.useInsertionEffect(g, H);
  }, at.useLayoutEffect = function(g, H) {
    return z.H.useLayoutEffect(g, H);
  }, at.useMemo = function(g, H) {
    return z.H.useMemo(g, H);
  }, at.useOptimistic = function(g, H) {
    return z.H.useOptimistic(g, H);
  }, at.useReducer = function(g, H, X) {
    return z.H.useReducer(g, H, X);
  }, at.useRef = function(g) {
    return z.H.useRef(g);
  }, at.useState = function(g) {
    return z.H.useState(g);
  }, at.useSyncExternalStore = function(g, H, X) {
    return z.H.useSyncExternalStore(
      g,
      H,
      X
    );
  }, at.useTransition = function() {
    return z.H.useTransition();
  }, at.version = "19.1.1", at;
}
var qh;
function xr() {
  return qh || (qh = 1, ur.exports = x1()), ur.exports;
}
var Ot = xr();
const z1 = /* @__PURE__ */ O1(Ot), Bh = /* @__PURE__ */ A1({
  __proto__: null,
  default: z1
}, [Ot]);
function M1(u) {
  if (u.sheet)
    return u.sheet;
  for (var c = 0; c < document.styleSheets.length; c++)
    if (document.styleSheets[c].ownerNode === u)
      return document.styleSheets[c];
}
function D1(u) {
  var c = document.createElement("style");
  return c.setAttribute("data-emotion", u.key), u.nonce !== void 0 && c.setAttribute("nonce", u.nonce), c.appendChild(document.createTextNode("")), c.setAttribute("data-s", ""), c;
}
var U1 = /* @__PURE__ */ function() {
  function u(r) {
    var f = this;
    this._insertTag = function(o) {
      var h;
      f.tags.length === 0 ? f.insertionPoint ? h = f.insertionPoint.nextSibling : f.prepend ? h = f.container.firstChild : h = f.before : h = f.tags[f.tags.length - 1].nextSibling, f.container.insertBefore(o, h), f.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var c = u.prototype;
  return c.hydrate = function(f) {
    f.forEach(this._insertTag);
  }, c.insert = function(f) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(D1(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var h = M1(o);
      try {
        h.insertRule(f, h.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(f));
    this.ctr++;
  }, c.flush = function() {
    this.tags.forEach(function(f) {
      var o;
      return (o = f.parentNode) == null ? void 0 : o.removeChild(f);
    }), this.tags = [], this.ctr = 0;
  }, u;
}(), It = "-ms-", Mi = "-moz-", ht = "-webkit-", v0 = "comm", zr = "rule", Mr = "decl", N1 = "@import", g0 = "@keyframes", C1 = "@layer", w1 = Math.abs, Ni = String.fromCharCode, H1 = Object.assign;
function q1(u, c) {
  return Jt(u, 0) ^ 45 ? (((c << 2 ^ Jt(u, 0)) << 2 ^ Jt(u, 1)) << 2 ^ Jt(u, 2)) << 2 ^ Jt(u, 3) : 0;
}
function p0(u) {
  return u.trim();
}
function B1(u, c) {
  return (u = c.exec(u)) ? u[0] : u;
}
function yt(u, c, r) {
  return u.replace(c, r);
}
function vr(u, c) {
  return u.indexOf(c);
}
function Jt(u, c) {
  return u.charCodeAt(c) | 0;
}
function Fn(u, c, r) {
  return u.slice(c, r);
}
function Ve(u) {
  return u.length;
}
function Dr(u) {
  return u.length;
}
function Ei(u, c) {
  return c.push(u), u;
}
function j1(u, c) {
  return u.map(c).join("");
}
var Ci = 1, Za = 1, b0 = 0, de = 0, qt = 0, Va = "";
function wi(u, c, r, f, o, h, y) {
  return { value: u, root: c, parent: r, type: f, props: o, children: h, line: Ci, column: Za, length: y, return: "" };
}
function Jn(u, c) {
  return H1(wi("", null, null, "", null, null, 0), u, { length: -u.length }, c);
}
function Y1() {
  return qt;
}
function L1() {
  return qt = de > 0 ? Jt(Va, --de) : 0, Za--, qt === 10 && (Za = 1, Ci--), qt;
}
function Ae() {
  return qt = de < b0 ? Jt(Va, de++) : 0, Za++, qt === 10 && (Za = 1, Ci++), qt;
}
function Je() {
  return Jt(Va, de);
}
function Ti() {
  return de;
}
function tu(u, c) {
  return Fn(Va, u, c);
}
function Wn(u) {
  switch (u) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function S0(u) {
  return Ci = Za = 1, b0 = Ve(Va = u), de = 0, [];
}
function E0(u) {
  return Va = "", u;
}
function Ai(u) {
  return p0(tu(de - 1, gr(u === 91 ? u + 2 : u === 40 ? u + 1 : u)));
}
function G1(u) {
  for (; (qt = Je()) && qt < 33; )
    Ae();
  return Wn(u) > 2 || Wn(qt) > 3 ? "" : " ";
}
function X1(u, c) {
  for (; --c && Ae() && !(qt < 48 || qt > 102 || qt > 57 && qt < 65 || qt > 70 && qt < 97); )
    ;
  return tu(u, Ti() + (c < 6 && Je() == 32 && Ae() == 32));
}
function gr(u) {
  for (; Ae(); )
    switch (qt) {
      // ] ) " '
      case u:
        return de;
      // " '
      case 34:
      case 39:
        u !== 34 && u !== 39 && gr(qt);
        break;
      // (
      case 40:
        u === 41 && gr(u);
        break;
      // \
      case 92:
        Ae();
        break;
    }
  return de;
}
function Q1(u, c) {
  for (; Ae() && u + qt !== 57; )
    if (u + qt === 84 && Je() === 47)
      break;
  return "/*" + tu(c, de - 1) + "*" + Ni(u === 47 ? u : Ae());
}
function Z1(u) {
  for (; !Wn(Je()); )
    Ae();
  return tu(u, de);
}
function V1(u) {
  return E0(Oi("", null, null, null, [""], u = S0(u), 0, [0], u));
}
function Oi(u, c, r, f, o, h, y, T, E) {
  for (var v = 0, b = 0, D = y, j = 0, J = 0, q = 0, B = 1, w = 1, Q = 1, V = 0, G = "", ut = o, z = h, P = f, k = G; w; )
    switch (q = V, V = Ae()) {
      // (
      case 40:
        if (q != 108 && Jt(k, D - 1) == 58) {
          vr(k += yt(Ai(V), "&", "&\f"), "&\f") != -1 && (Q = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        k += Ai(V);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        k += G1(q);
        break;
      // \
      case 92:
        k += X1(Ti() - 1, 7);
        continue;
      // /
      case 47:
        switch (Je()) {
          case 42:
          case 47:
            Ei(K1(Q1(Ae(), Ti()), c, r), E);
            break;
          default:
            k += "/";
        }
        break;
      // {
      case 123 * B:
        T[v++] = Ve(k) * Q;
      // } ; \0
      case 125 * B:
      case 59:
      case 0:
        switch (V) {
          // \0 }
          case 0:
          case 125:
            w = 0;
          // ;
          case 59 + b:
            Q == -1 && (k = yt(k, /\f/g, "")), J > 0 && Ve(k) - D && Ei(J > 32 ? Yh(k + ";", f, r, D - 1) : Yh(yt(k, " ", "") + ";", f, r, D - 2), E);
            break;
          // @ ;
          case 59:
            k += ";";
          // { rule/at-rule
          default:
            if (Ei(P = jh(k, c, r, v, b, o, T, G, ut = [], z = [], D), h), V === 123)
              if (b === 0)
                Oi(k, c, P, P, ut, h, D, T, z);
              else
                switch (j === 99 && Jt(k, 3) === 110 ? 100 : j) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Oi(u, P, P, f && Ei(jh(u, P, P, 0, 0, o, T, G, o, ut = [], D), z), o, z, D, T, f ? ut : z);
                    break;
                  default:
                    Oi(k, P, P, P, [""], z, 0, T, z);
                }
        }
        v = b = J = 0, B = Q = 1, G = k = "", D = y;
        break;
      // :
      case 58:
        D = 1 + Ve(k), J = q;
      default:
        if (B < 1) {
          if (V == 123)
            --B;
          else if (V == 125 && B++ == 0 && L1() == 125)
            continue;
        }
        switch (k += Ni(V), V * B) {
          // &
          case 38:
            Q = b > 0 ? 1 : (k += "\f", -1);
            break;
          // ,
          case 44:
            T[v++] = (Ve(k) - 1) * Q, Q = 1;
            break;
          // @
          case 64:
            Je() === 45 && (k += Ai(Ae())), j = Je(), b = D = Ve(G = k += Z1(Ti())), V++;
            break;
          // -
          case 45:
            q === 45 && Ve(k) == 2 && (B = 0);
        }
    }
  return h;
}
function jh(u, c, r, f, o, h, y, T, E, v, b) {
  for (var D = o - 1, j = o === 0 ? h : [""], J = Dr(j), q = 0, B = 0, w = 0; q < f; ++q)
    for (var Q = 0, V = Fn(u, D + 1, D = w1(B = y[q])), G = u; Q < J; ++Q)
      (G = p0(B > 0 ? j[Q] + " " + V : yt(V, /&\f/g, j[Q]))) && (E[w++] = G);
  return wi(u, c, r, o === 0 ? zr : T, E, v, b);
}
function K1(u, c, r) {
  return wi(u, c, r, v0, Ni(Y1()), Fn(u, 2, -2), 0);
}
function Yh(u, c, r, f) {
  return wi(u, c, r, Mr, Fn(u, 0, f), Fn(u, f + 1, -1), f);
}
function Qa(u, c) {
  for (var r = "", f = Dr(u), o = 0; o < f; o++)
    r += c(u[o], o, u, c) || "";
  return r;
}
function J1(u, c, r, f) {
  switch (u.type) {
    case C1:
      if (u.children.length) break;
    case N1:
    case Mr:
      return u.return = u.return || u.value;
    case v0:
      return "";
    case g0:
      return u.return = u.value + "{" + Qa(u.children, f) + "}";
    case zr:
      u.value = u.props.join(",");
  }
  return Ve(r = Qa(u.children, f)) ? u.return = u.value + "{" + r + "}" : "";
}
function k1(u) {
  var c = Dr(u);
  return function(r, f, o, h) {
    for (var y = "", T = 0; T < c; T++)
      y += u[T](r, f, o, h) || "";
    return y;
  };
}
function $1(u) {
  return function(c) {
    c.root || (c = c.return) && u(c);
  };
}
function T0(u) {
  var c = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return c[r] === void 0 && (c[r] = u(r)), c[r];
  };
}
var F1 = function(c, r, f) {
  for (var o = 0, h = 0; o = h, h = Je(), o === 38 && h === 12 && (r[f] = 1), !Wn(h); )
    Ae();
  return tu(c, de);
}, W1 = function(c, r) {
  var f = -1, o = 44;
  do
    switch (Wn(o)) {
      case 0:
        o === 38 && Je() === 12 && (r[f] = 1), c[f] += F1(de - 1, r, f);
        break;
      case 2:
        c[f] += Ai(o);
        break;
      case 4:
        if (o === 44) {
          c[++f] = Je() === 58 ? "&\f" : "", r[f] = c[f].length;
          break;
        }
      // fallthrough
      default:
        c[f] += Ni(o);
    }
  while (o = Ae());
  return c;
}, P1 = function(c, r) {
  return E0(W1(S0(c), r));
}, Lh = /* @__PURE__ */ new WeakMap(), I1 = function(c) {
  if (!(c.type !== "rule" || !c.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  c.length < 1)) {
    for (var r = c.value, f = c.parent, o = c.column === f.column && c.line === f.line; f.type !== "rule"; )
      if (f = f.parent, !f) return;
    if (!(c.props.length === 1 && r.charCodeAt(0) !== 58 && !Lh.get(f)) && !o) {
      Lh.set(c, !0);
      for (var h = [], y = P1(r, h), T = f.props, E = 0, v = 0; E < y.length; E++)
        for (var b = 0; b < T.length; b++, v++)
          c.props[v] = h[E] ? y[E].replace(/&\f/g, T[b]) : T[b] + " " + y[E];
    }
  }
}, tv = function(c) {
  if (c.type === "decl") {
    var r = c.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (c.return = "", c.value = "");
  }
};
function A0(u, c) {
  switch (q1(u, c)) {
    // color-adjust
    case 5103:
      return ht + "print-" + u + u;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ht + u + u;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ht + u + Mi + u + It + u + u;
    // flex, flex-direction
    case 6828:
    case 4268:
      return ht + u + It + u + u;
    // order
    case 6165:
      return ht + u + It + "flex-" + u + u;
    // align-items
    case 5187:
      return ht + u + yt(u, /(\w+).+(:[^]+)/, ht + "box-$1$2" + It + "flex-$1$2") + u;
    // align-self
    case 5443:
      return ht + u + It + "flex-item-" + yt(u, /flex-|-self/, "") + u;
    // align-content
    case 4675:
      return ht + u + It + "flex-line-pack" + yt(u, /align-content|flex-|-self/, "") + u;
    // flex-shrink
    case 5548:
      return ht + u + It + yt(u, "shrink", "negative") + u;
    // flex-basis
    case 5292:
      return ht + u + It + yt(u, "basis", "preferred-size") + u;
    // flex-grow
    case 6060:
      return ht + "box-" + yt(u, "-grow", "") + ht + u + It + yt(u, "grow", "positive") + u;
    // transition
    case 4554:
      return ht + yt(u, /([^-])(transform)/g, "$1" + ht + "$2") + u;
    // cursor
    case 6187:
      return yt(yt(yt(u, /(zoom-|grab)/, ht + "$1"), /(image-set)/, ht + "$1"), u, "") + u;
    // background, background-image
    case 5495:
    case 3959:
      return yt(u, /(image-set\([^]*)/, ht + "$1$`$1");
    // justify-content
    case 4968:
      return yt(yt(u, /(.+:)(flex-)?(.*)/, ht + "box-pack:$3" + It + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ht + u + u;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return yt(u, /(.+)-inline(.+)/, ht + "$1$2") + u;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ve(u) - 1 - c > 6) switch (Jt(u, c + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (Jt(u, c + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return yt(u, /(.+:)(.+)-([^]+)/, "$1" + ht + "$2-$3$1" + Mi + (Jt(u, c + 3) == 108 ? "$3" : "$2-$3")) + u;
        // (s)tretch
        case 115:
          return ~vr(u, "stretch") ? A0(yt(u, "stretch", "fill-available"), c) + u : u;
      }
      break;
    // position: sticky
    case 4949:
      if (Jt(u, c + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (Jt(u, Ve(u) - 3 - (~vr(u, "!important") && 10))) {
        // stic(k)y
        case 107:
          return yt(u, ":", ":" + ht) + u;
        // (inline-)?fl(e)x
        case 101:
          return yt(u, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ht + (Jt(u, 14) === 45 ? "inline-" : "") + "box$3$1" + ht + "$2$3$1" + It + "$2box$3") + u;
      }
      break;
    // writing-mode
    case 5936:
      switch (Jt(u, c + 11)) {
        // vertical-l(r)
        case 114:
          return ht + u + It + yt(u, /[svh]\w+-[tblr]{2}/, "tb") + u;
        // vertical-r(l)
        case 108:
          return ht + u + It + yt(u, /[svh]\w+-[tblr]{2}/, "tb-rl") + u;
        // horizontal(-)tb
        case 45:
          return ht + u + It + yt(u, /[svh]\w+-[tblr]{2}/, "lr") + u;
      }
      return ht + u + It + u + u;
  }
  return u;
}
var ev = function(c, r, f, o) {
  if (c.length > -1 && !c.return) switch (c.type) {
    case Mr:
      c.return = A0(c.value, c.length);
      break;
    case g0:
      return Qa([Jn(c, {
        value: yt(c.value, "@", "@" + ht)
      })], o);
    case zr:
      if (c.length) return j1(c.props, function(h) {
        switch (B1(h, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Qa([Jn(c, {
              props: [yt(h, /:(read-\w+)/, ":" + Mi + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return Qa([Jn(c, {
              props: [yt(h, /:(plac\w+)/, ":" + ht + "input-$1")]
            }), Jn(c, {
              props: [yt(h, /:(plac\w+)/, ":" + Mi + "$1")]
            }), Jn(c, {
              props: [yt(h, /:(plac\w+)/, It + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, lv = [ev], O0 = function(c) {
  var r = c.key;
  if (r === "css") {
    var f = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(f, function(B) {
      var w = B.getAttribute("data-emotion");
      w.indexOf(" ") !== -1 && (document.head.appendChild(B), B.setAttribute("data-s", ""));
    });
  }
  var o = c.stylisPlugins || lv, h = {}, y, T = [];
  y = c.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(B) {
      for (var w = B.getAttribute("data-emotion").split(" "), Q = 1; Q < w.length; Q++)
        h[w[Q]] = !0;
      T.push(B);
    }
  );
  var E, v = [I1, tv];
  {
    var b, D = [J1, $1(function(B) {
      b.insert(B);
    })], j = k1(v.concat(o, D)), J = function(w) {
      return Qa(V1(w), j);
    };
    E = function(w, Q, V, G) {
      b = V, J(w ? w + "{" + Q.styles + "}" : Q.styles), G && (q.inserted[Q.name] = !0);
    };
  }
  var q = {
    key: r,
    sheet: new U1({
      key: r,
      container: y,
      nonce: c.nonce,
      speedy: c.speedy,
      prepend: c.prepend,
      insertionPoint: c.insertionPoint
    }),
    nonce: c.nonce,
    inserted: h,
    registered: {},
    insert: E
  };
  return q.sheet.hydrate(T), q;
};
function pr() {
  return pr = Object.assign ? Object.assign.bind() : function(u) {
    for (var c = 1; c < arguments.length; c++) {
      var r = arguments[c];
      for (var f in r) ({}).hasOwnProperty.call(r, f) && (u[f] = r[f]);
    }
    return u;
  }, pr.apply(null, arguments);
}
var ir = { exports: {} }, mt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gh;
function av() {
  if (Gh) return mt;
  Gh = 1;
  var u = typeof Symbol == "function" && Symbol.for, c = u ? Symbol.for("react.element") : 60103, r = u ? Symbol.for("react.portal") : 60106, f = u ? Symbol.for("react.fragment") : 60107, o = u ? Symbol.for("react.strict_mode") : 60108, h = u ? Symbol.for("react.profiler") : 60114, y = u ? Symbol.for("react.provider") : 60109, T = u ? Symbol.for("react.context") : 60110, E = u ? Symbol.for("react.async_mode") : 60111, v = u ? Symbol.for("react.concurrent_mode") : 60111, b = u ? Symbol.for("react.forward_ref") : 60112, D = u ? Symbol.for("react.suspense") : 60113, j = u ? Symbol.for("react.suspense_list") : 60120, J = u ? Symbol.for("react.memo") : 60115, q = u ? Symbol.for("react.lazy") : 60116, B = u ? Symbol.for("react.block") : 60121, w = u ? Symbol.for("react.fundamental") : 60117, Q = u ? Symbol.for("react.responder") : 60118, V = u ? Symbol.for("react.scope") : 60119;
  function G(z) {
    if (typeof z == "object" && z !== null) {
      var P = z.$$typeof;
      switch (P) {
        case c:
          switch (z = z.type, z) {
            case E:
            case v:
            case f:
            case h:
            case o:
            case D:
              return z;
            default:
              switch (z = z && z.$$typeof, z) {
                case T:
                case b:
                case q:
                case J:
                case y:
                  return z;
                default:
                  return P;
              }
          }
        case r:
          return P;
      }
    }
  }
  function ut(z) {
    return G(z) === v;
  }
  return mt.AsyncMode = E, mt.ConcurrentMode = v, mt.ContextConsumer = T, mt.ContextProvider = y, mt.Element = c, mt.ForwardRef = b, mt.Fragment = f, mt.Lazy = q, mt.Memo = J, mt.Portal = r, mt.Profiler = h, mt.StrictMode = o, mt.Suspense = D, mt.isAsyncMode = function(z) {
    return ut(z) || G(z) === E;
  }, mt.isConcurrentMode = ut, mt.isContextConsumer = function(z) {
    return G(z) === T;
  }, mt.isContextProvider = function(z) {
    return G(z) === y;
  }, mt.isElement = function(z) {
    return typeof z == "object" && z !== null && z.$$typeof === c;
  }, mt.isForwardRef = function(z) {
    return G(z) === b;
  }, mt.isFragment = function(z) {
    return G(z) === f;
  }, mt.isLazy = function(z) {
    return G(z) === q;
  }, mt.isMemo = function(z) {
    return G(z) === J;
  }, mt.isPortal = function(z) {
    return G(z) === r;
  }, mt.isProfiler = function(z) {
    return G(z) === h;
  }, mt.isStrictMode = function(z) {
    return G(z) === o;
  }, mt.isSuspense = function(z) {
    return G(z) === D;
  }, mt.isValidElementType = function(z) {
    return typeof z == "string" || typeof z == "function" || z === f || z === v || z === h || z === o || z === D || z === j || typeof z == "object" && z !== null && (z.$$typeof === q || z.$$typeof === J || z.$$typeof === y || z.$$typeof === T || z.$$typeof === b || z.$$typeof === w || z.$$typeof === Q || z.$$typeof === V || z.$$typeof === B);
  }, mt.typeOf = G, mt;
}
var Xh;
function nv() {
  return Xh || (Xh = 1, ir.exports = av()), ir.exports;
}
var cr, Qh;
function uv() {
  if (Qh) return cr;
  Qh = 1;
  var u = nv(), c = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, r = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, f = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, o = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, h = {};
  h[u.ForwardRef] = f, h[u.Memo] = o;
  function y(q) {
    return u.isMemo(q) ? o : h[q.$$typeof] || c;
  }
  var T = Object.defineProperty, E = Object.getOwnPropertyNames, v = Object.getOwnPropertySymbols, b = Object.getOwnPropertyDescriptor, D = Object.getPrototypeOf, j = Object.prototype;
  function J(q, B, w) {
    if (typeof B != "string") {
      if (j) {
        var Q = D(B);
        Q && Q !== j && J(q, Q, w);
      }
      var V = E(B);
      v && (V = V.concat(v(B)));
      for (var G = y(q), ut = y(B), z = 0; z < V.length; ++z) {
        var P = V[z];
        if (!r[P] && !(w && w[P]) && !(ut && ut[P]) && !(G && G[P])) {
          var k = b(B, P);
          try {
            T(q, P, k);
          } catch {
          }
        }
      }
    }
    return q;
  }
  return cr = J, cr;
}
uv();
var iv = !0;
function R0(u, c, r) {
  var f = "";
  return r.split(" ").forEach(function(o) {
    u[o] !== void 0 ? c.push(u[o] + ";") : o && (f += o + " ");
  }), f;
}
var Ur = function(c, r, f) {
  var o = c.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (f === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  iv === !1) && c.registered[o] === void 0 && (c.registered[o] = r.styles);
}, Nr = function(c, r, f) {
  Ur(c, r, f);
  var o = c.key + "-" + r.name;
  if (c.inserted[r.name] === void 0) {
    var h = r;
    do
      c.insert(r === h ? "." + o : "", h, c.sheet, !0), h = h.next;
    while (h !== void 0);
  }
};
function cv(u) {
  for (var c = 0, r, f = 0, o = u.length; o >= 4; ++f, o -= 4)
    r = u.charCodeAt(f) & 255 | (u.charCodeAt(++f) & 255) << 8 | (u.charCodeAt(++f) & 255) << 16 | (u.charCodeAt(++f) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, c = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (c & 65535) * 1540483477 + ((c >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      c ^= (u.charCodeAt(f + 2) & 255) << 16;
    case 2:
      c ^= (u.charCodeAt(f + 1) & 255) << 8;
    case 1:
      c ^= u.charCodeAt(f) & 255, c = /* Math.imul(h, m): */
      (c & 65535) * 1540483477 + ((c >>> 16) * 59797 << 16);
  }
  return c ^= c >>> 13, c = /* Math.imul(h, m): */
  (c & 65535) * 1540483477 + ((c >>> 16) * 59797 << 16), ((c ^ c >>> 15) >>> 0).toString(36);
}
var fv = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, rv = /[A-Z]|^ms/g, sv = /_EMO_([^_]+?)_([^]*?)_EMO_/g, _0 = function(c) {
  return c.charCodeAt(1) === 45;
}, Zh = function(c) {
  return c != null && typeof c != "boolean";
}, fr = /* @__PURE__ */ T0(function(u) {
  return _0(u) ? u : u.replace(rv, "-$&").toLowerCase();
}), Vh = function(c, r) {
  switch (c) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(sv, function(f, o, h) {
          return Ke = {
            name: o,
            styles: h,
            next: Ke
          }, o;
        });
  }
  return fv[c] !== 1 && !_0(c) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Pn(u, c, r) {
  if (r == null)
    return "";
  var f = r;
  if (f.__emotion_styles !== void 0)
    return f;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return Ke = {
          name: o.name,
          styles: o.styles,
          next: Ke
        }, o.name;
      var h = r;
      if (h.styles !== void 0) {
        var y = h.next;
        if (y !== void 0)
          for (; y !== void 0; )
            Ke = {
              name: y.name,
              styles: y.styles,
              next: Ke
            }, y = y.next;
        var T = h.styles + ";";
        return T;
      }
      return ov(u, c, r);
    }
    case "function": {
      if (u !== void 0) {
        var E = Ke, v = r(u);
        return Ke = E, Pn(u, c, v);
      }
      break;
    }
  }
  var b = r;
  if (c == null)
    return b;
  var D = c[b];
  return D !== void 0 ? D : b;
}
function ov(u, c, r) {
  var f = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      f += Pn(u, c, r[o]) + ";";
  else
    for (var h in r) {
      var y = r[h];
      if (typeof y != "object") {
        var T = y;
        c != null && c[T] !== void 0 ? f += h + "{" + c[T] + "}" : Zh(T) && (f += fr(h) + ":" + Vh(h, T) + ";");
      } else if (Array.isArray(y) && typeof y[0] == "string" && (c == null || c[y[0]] === void 0))
        for (var E = 0; E < y.length; E++)
          Zh(y[E]) && (f += fr(h) + ":" + Vh(h, y[E]) + ";");
      else {
        var v = Pn(u, c, y);
        switch (h) {
          case "animation":
          case "animationName": {
            f += fr(h) + ":" + v + ";";
            break;
          }
          default:
            f += h + "{" + v + "}";
        }
      }
    }
  return f;
}
var Kh = /label:\s*([^\s;{]+)\s*(;|$)/g, Ke;
function Hi(u, c, r) {
  if (u.length === 1 && typeof u[0] == "object" && u[0] !== null && u[0].styles !== void 0)
    return u[0];
  var f = !0, o = "";
  Ke = void 0;
  var h = u[0];
  if (h == null || h.raw === void 0)
    f = !1, o += Pn(r, c, h);
  else {
    var y = h;
    o += y[0];
  }
  for (var T = 1; T < u.length; T++)
    if (o += Pn(r, c, u[T]), f) {
      var E = h;
      o += E[T];
    }
  Kh.lastIndex = 0;
  for (var v = "", b; (b = Kh.exec(o)) !== null; )
    v += "-" + b[1];
  var D = cv(o) + v;
  return {
    name: D,
    styles: o,
    next: Ke
  };
}
var dv = function(c) {
  return c();
}, x0 = Bh.useInsertionEffect ? Bh.useInsertionEffect : !1, z0 = x0 || dv, Jh = x0 || Ot.useLayoutEffect, M0 = /* @__PURE__ */ Ot.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ O0({
    key: "css"
  }) : null
), hv = M0.Provider, Cr = function(c) {
  return /* @__PURE__ */ Ot.forwardRef(function(r, f) {
    var o = Ot.useContext(M0);
    return c(r, o, f);
  });
}, wr = /* @__PURE__ */ Ot.createContext({}), eu = {}.hasOwnProperty, br = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Hr = function(c, r) {
  var f = {};
  for (var o in r)
    eu.call(r, o) && (f[o] = r[o]);
  return f[br] = c, f;
}, yv = function(c) {
  var r = c.cache, f = c.serialized, o = c.isStringTag;
  return Ur(r, f, o), z0(function() {
    return Nr(r, f, o);
  }), null;
}, mv = /* @__PURE__ */ Cr(function(u, c, r) {
  var f = u.css;
  typeof f == "string" && c.registered[f] !== void 0 && (f = c.registered[f]);
  var o = u[br], h = [f], y = "";
  typeof u.className == "string" ? y = R0(c.registered, h, u.className) : u.className != null && (y = u.className + " ");
  var T = Hi(h, void 0, Ot.useContext(wr));
  y += c.key + "-" + T.name;
  var E = {};
  for (var v in u)
    eu.call(u, v) && v !== "css" && v !== br && (E[v] = u[v]);
  return E.className = y, r && (E.ref = r), /* @__PURE__ */ Ot.createElement(Ot.Fragment, null, /* @__PURE__ */ Ot.createElement(yv, {
    cache: c,
    serialized: T,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ Ot.createElement(o, E));
}), qr = mv, Yt = function(c, r, f) {
  return eu.call(r, "css") ? zi.jsx(qr, Hr(c, r), f) : zi.jsx(c, r, f);
}, wl = function(c, r, f) {
  return eu.call(r, "css") ? zi.jsxs(qr, Hr(c, r), f) : zi.jsxs(c, r, f);
}, rr = { exports: {} }, kn = {}, sr = { exports: {} }, or = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kh;
function vv() {
  return kh || (kh = 1, function(u) {
    function c(U, L) {
      var I = U.length;
      U.push(L);
      t: for (; 0 < I; ) {
        var Et = I - 1 >>> 1, g = U[Et];
        if (0 < o(g, L))
          U[Et] = L, U[I] = g, I = Et;
        else break t;
      }
    }
    function r(U) {
      return U.length === 0 ? null : U[0];
    }
    function f(U) {
      if (U.length === 0) return null;
      var L = U[0], I = U.pop();
      if (I !== L) {
        U[0] = I;
        t: for (var Et = 0, g = U.length, H = g >>> 1; Et < H; ) {
          var X = 2 * (Et + 1) - 1, Y = U[X], $ = X + 1, st = U[$];
          if (0 > o(Y, I))
            $ < g && 0 > o(st, Y) ? (U[Et] = st, U[$] = I, Et = $) : (U[Et] = Y, U[X] = I, Et = X);
          else if ($ < g && 0 > o(st, I))
            U[Et] = st, U[$] = I, Et = $;
          else break t;
        }
      }
      return L;
    }
    function o(U, L) {
      var I = U.sortIndex - L.sortIndex;
      return I !== 0 ? I : U.id - L.id;
    }
    if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      u.unstable_now = function() {
        return h.now();
      };
    } else {
      var y = Date, T = y.now();
      u.unstable_now = function() {
        return y.now() - T;
      };
    }
    var E = [], v = [], b = 1, D = null, j = 3, J = !1, q = !1, B = !1, w = !1, Q = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, G = typeof setImmediate < "u" ? setImmediate : null;
    function ut(U) {
      for (var L = r(v); L !== null; ) {
        if (L.callback === null) f(v);
        else if (L.startTime <= U)
          f(v), L.sortIndex = L.expirationTime, c(E, L);
        else break;
        L = r(v);
      }
    }
    function z(U) {
      if (B = !1, ut(U), !q)
        if (r(E) !== null)
          q = !0, P || (P = !0, kt());
        else {
          var L = r(v);
          L !== null && $t(z, L.startTime - U);
        }
    }
    var P = !1, k = -1, zt = 5, ee = -1;
    function Ce() {
      return w ? !0 : !(u.unstable_now() - ee < zt);
    }
    function ne() {
      if (w = !1, P) {
        var U = u.unstable_now();
        ee = U;
        var L = !0;
        try {
          t: {
            q = !1, B && (B = !1, V(k), k = -1), J = !0;
            var I = j;
            try {
              e: {
                for (ut(U), D = r(E); D !== null && !(D.expirationTime > U && Ce()); ) {
                  var Et = D.callback;
                  if (typeof Et == "function") {
                    D.callback = null, j = D.priorityLevel;
                    var g = Et(
                      D.expirationTime <= U
                    );
                    if (U = u.unstable_now(), typeof g == "function") {
                      D.callback = g, ut(U), L = !0;
                      break e;
                    }
                    D === r(E) && f(E), ut(U);
                  } else f(E);
                  D = r(E);
                }
                if (D !== null) L = !0;
                else {
                  var H = r(v);
                  H !== null && $t(
                    z,
                    H.startTime - U
                  ), L = !1;
                }
              }
              break t;
            } finally {
              D = null, j = I, J = !1;
            }
            L = void 0;
          }
        } finally {
          L ? kt() : P = !1;
        }
      }
    }
    var kt;
    if (typeof G == "function")
      kt = function() {
        G(ne);
      };
    else if (typeof MessageChannel < "u") {
      var Hl = new MessageChannel(), ql = Hl.port2;
      Hl.port1.onmessage = ne, kt = function() {
        ql.postMessage(null);
      };
    } else
      kt = function() {
        Q(ne, 0);
      };
    function $t(U, L) {
      k = Q(function() {
        U(u.unstable_now());
      }, L);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, u.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : zt = 0 < U ? Math.floor(1e3 / U) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return j;
    }, u.unstable_next = function(U) {
      switch (j) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = j;
      }
      var I = j;
      j = L;
      try {
        return U();
      } finally {
        j = I;
      }
    }, u.unstable_requestPaint = function() {
      w = !0;
    }, u.unstable_runWithPriority = function(U, L) {
      switch (U) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          U = 3;
      }
      var I = j;
      j = U;
      try {
        return L();
      } finally {
        j = I;
      }
    }, u.unstable_scheduleCallback = function(U, L, I) {
      var Et = u.unstable_now();
      switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? Et + I : Et) : I = Et, U) {
        case 1:
          var g = -1;
          break;
        case 2:
          g = 250;
          break;
        case 5:
          g = 1073741823;
          break;
        case 4:
          g = 1e4;
          break;
        default:
          g = 5e3;
      }
      return g = I + g, U = {
        id: b++,
        callback: L,
        priorityLevel: U,
        startTime: I,
        expirationTime: g,
        sortIndex: -1
      }, I > Et ? (U.sortIndex = I, c(v, U), r(E) === null && U === r(v) && (B ? (V(k), k = -1) : B = !0, $t(z, I - Et))) : (U.sortIndex = g, c(E, U), q || J || (q = !0, P || (P = !0, kt()))), U;
    }, u.unstable_shouldYield = Ce, u.unstable_wrapCallback = function(U) {
      var L = j;
      return function() {
        var I = j;
        j = L;
        try {
          return U.apply(this, arguments);
        } finally {
          j = I;
        }
      };
    };
  }(or)), or;
}
var $h;
function gv() {
  return $h || ($h = 1, sr.exports = vv()), sr.exports;
}
var dr = { exports: {} }, Pt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fh;
function pv() {
  if (Fh) return Pt;
  Fh = 1;
  var u = xr();
  function c(E) {
    var v = "https://react.dev/errors/" + E;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        v += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return "Minified React error #" + E + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var f = {
    d: {
      f: r,
      r: function() {
        throw Error(c(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
    },
    p: 0,
    findDOMNode: null
  }, o = Symbol.for("react.portal");
  function h(E, v, b) {
    var D = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: D == null ? null : "" + D,
      children: E,
      containerInfo: v,
      implementation: b
    };
  }
  var y = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function T(E, v) {
    if (E === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return Pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, Pt.createPortal = function(E, v) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(c(299));
    return h(E, v, null, b);
  }, Pt.flushSync = function(E) {
    var v = y.T, b = f.p;
    try {
      if (y.T = null, f.p = 2, E) return E();
    } finally {
      y.T = v, f.p = b, f.d.f();
    }
  }, Pt.preconnect = function(E, v) {
    typeof E == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, f.d.C(E, v));
  }, Pt.prefetchDNS = function(E) {
    typeof E == "string" && f.d.D(E);
  }, Pt.preinit = function(E, v) {
    if (typeof E == "string" && v && typeof v.as == "string") {
      var b = v.as, D = T(b, v.crossOrigin), j = typeof v.integrity == "string" ? v.integrity : void 0, J = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      b === "style" ? f.d.S(
        E,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: D,
          integrity: j,
          fetchPriority: J
        }
      ) : b === "script" && f.d.X(E, {
        crossOrigin: D,
        integrity: j,
        fetchPriority: J,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, Pt.preinitModule = function(E, v) {
    if (typeof E == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var b = T(
            v.as,
            v.crossOrigin
          );
          f.d.M(E, {
            crossOrigin: b,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0
          });
        }
      } else v == null && f.d.M(E);
  }, Pt.preload = function(E, v) {
    if (typeof E == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var b = v.as, D = T(b, v.crossOrigin);
      f.d.L(E, b, {
        crossOrigin: D,
        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0,
        type: typeof v.type == "string" ? v.type : void 0,
        fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
        referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
        imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
        imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
        media: typeof v.media == "string" ? v.media : void 0
      });
    }
  }, Pt.preloadModule = function(E, v) {
    if (typeof E == "string")
      if (v) {
        var b = T(v.as, v.crossOrigin);
        f.d.m(E, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: b,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else f.d.m(E);
  }, Pt.requestFormReset = function(E) {
    f.d.r(E);
  }, Pt.unstable_batchedUpdates = function(E, v) {
    return E(v);
  }, Pt.useFormState = function(E, v, b) {
    return y.H.useFormState(E, v, b);
  }, Pt.useFormStatus = function() {
    return y.H.useHostTransitionStatus();
  }, Pt.version = "19.1.1", Pt;
}
var Wh;
function bv() {
  if (Wh) return dr.exports;
  Wh = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), dr.exports = pv(), dr.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ph;
function Sv() {
  if (Ph) return kn;
  Ph = 1;
  var u = gv(), c = xr(), r = bv();
  function f(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function h(t) {
    var e = t, l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function y(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function T(t) {
    if (h(t) !== t)
      throw Error(f(188));
  }
  function E(t) {
    var e = t.alternate;
    if (!e) {
      if (e = h(t), e === null) throw Error(f(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var n = l.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (a = n.return, a !== null) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === l) return T(n), t;
          if (i === a) return T(n), e;
          i = i.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== a.return) l = n, a = i;
      else {
        for (var s = !1, d = n.child; d; ) {
          if (d === l) {
            s = !0, l = n, a = i;
            break;
          }
          if (d === a) {
            s = !0, a = n, l = i;
            break;
          }
          d = d.sibling;
        }
        if (!s) {
          for (d = i.child; d; ) {
            if (d === l) {
              s = !0, l = i, a = n;
              break;
            }
            if (d === a) {
              s = !0, a = i, l = n;
              break;
            }
            d = d.sibling;
          }
          if (!s) throw Error(f(189));
        }
      }
      if (l.alternate !== a) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? t : e;
  }
  function v(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = v(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var b = Object.assign, D = Symbol.for("react.element"), j = Symbol.for("react.transitional.element"), J = Symbol.for("react.portal"), q = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), Q = Symbol.for("react.provider"), V = Symbol.for("react.consumer"), G = Symbol.for("react.context"), ut = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), zt = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), Ce = Symbol.for("react.memo_cache_sentinel"), ne = Symbol.iterator;
  function kt(t) {
    return t === null || typeof t != "object" ? null : (t = ne && t[ne] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Hl = Symbol.for("react.client.reference");
  function ql(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Hl ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case q:
        return "Fragment";
      case w:
        return "Profiler";
      case B:
        return "StrictMode";
      case z:
        return "Suspense";
      case P:
        return "SuspenseList";
      case ee:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case J:
          return "Portal";
        case G:
          return (t.displayName || "Context") + ".Provider";
        case V:
          return (t._context.displayName || "Context") + ".Consumer";
        case ut:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case k:
          return e = t.displayName || null, e !== null ? e : ql(t.type) || "Memo";
        case zt:
          e = t._payload, t = t._init;
          try {
            return ql(t(e));
          } catch {
          }
      }
    return null;
  }
  var $t = Array.isArray, U = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Et = [], g = -1;
  function H(t) {
    return { current: t };
  }
  function X(t) {
    0 > g || (t.current = Et[g], Et[g] = null, g--);
  }
  function Y(t, e) {
    g++, Et[g] = t.current, t.current = e;
  }
  var $ = H(null), st = H(null), et = H(null), he = H(null);
  function Rt(t, e) {
    switch (Y(et, e), Y(st, t), Y($, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? ch(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = ch(e), t = fh(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    X($), Y($, t);
  }
  function rl() {
    X($), X(st), X(et);
  }
  function Xi(t) {
    t.memoizedState !== null && Y(he, t);
    var e = $.current, l = fh(e, t.type);
    e !== l && (Y(st, t), Y($, l));
  }
  function iu(t) {
    st.current === t && (X($), X(st)), he.current === t && (X(he), Gn._currentValue = I);
  }
  var Qi = Object.prototype.hasOwnProperty, Zi = u.unstable_scheduleCallback, Vi = u.unstable_cancelCallback, ey = u.unstable_shouldYield, ly = u.unstable_requestPaint, je = u.unstable_now, ay = u.unstable_getCurrentPriorityLevel, Lr = u.unstable_ImmediatePriority, Gr = u.unstable_UserBlockingPriority, cu = u.unstable_NormalPriority, ny = u.unstable_LowPriority, Xr = u.unstable_IdlePriority, uy = u.log, iy = u.unstable_setDisableYieldValue, ka = null, ye = null;
  function sl(t) {
    if (typeof uy == "function" && iy(t), ye && typeof ye.setStrictMode == "function")
      try {
        ye.setStrictMode(ka, t);
      } catch {
      }
  }
  var me = Math.clz32 ? Math.clz32 : ry, cy = Math.log, fy = Math.LN2;
  function ry(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (cy(t) / fy | 0) | 0;
  }
  var fu = 256, ru = 4194304;
  function Bl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function su(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0, i = t.suspendedLanes, s = t.pingedLanes;
    t = t.warmLanes;
    var d = a & 134217727;
    return d !== 0 ? (a = d & ~i, a !== 0 ? n = Bl(a) : (s &= d, s !== 0 ? n = Bl(s) : l || (l = d & ~t, l !== 0 && (n = Bl(l))))) : (d = a & ~i, d !== 0 ? n = Bl(d) : s !== 0 ? n = Bl(s) : l || (l = a & ~t, l !== 0 && (n = Bl(l)))), n === 0 ? 0 : e !== 0 && e !== n && (e & i) === 0 && (i = n & -n, l = e & -e, i >= l || i === 32 && (l & 4194048) !== 0) ? e : n;
  }
  function $a(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function sy(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Qr() {
    var t = fu;
    return fu <<= 1, (fu & 4194048) === 0 && (fu = 256), t;
  }
  function Zr() {
    var t = ru;
    return ru <<= 1, (ru & 62914560) === 0 && (ru = 4194304), t;
  }
  function Ki(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Fa(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function oy(t, e, l, a, n, i) {
    var s = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var d = t.entanglements, m = t.expirationTimes, O = t.hiddenUpdates;
    for (l = s & ~l; 0 < l; ) {
      var M = 31 - me(l), C = 1 << M;
      d[M] = 0, m[M] = -1;
      var R = O[M];
      if (R !== null)
        for (O[M] = null, M = 0; M < R.length; M++) {
          var _ = R[M];
          _ !== null && (_.lane &= -536870913);
        }
      l &= ~C;
    }
    a !== 0 && Vr(t, a, 0), i !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(s & ~e));
  }
  function Vr(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - me(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 4194090;
  }
  function Kr(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var a = 31 - me(l), n = 1 << a;
      n & e | t[a] & e && (t[a] |= e), l &= ~n;
    }
  }
  function Ji(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function ki(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Jr() {
    var t = L.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : xh(t.type));
  }
  function dy(t, e) {
    var l = L.p;
    try {
      return L.p = t, e();
    } finally {
      L.p = l;
    }
  }
  var ol = Math.random().toString(36).slice(2), Ft = "__reactFiber$" + ol, ue = "__reactProps$" + ol, na = "__reactContainer$" + ol, $i = "__reactEvents$" + ol, hy = "__reactListeners$" + ol, yy = "__reactHandles$" + ol, kr = "__reactResources$" + ol, Wa = "__reactMarker$" + ol;
  function Fi(t) {
    delete t[Ft], delete t[ue], delete t[$i], delete t[hy], delete t[yy];
  }
  function ua(t) {
    var e = t[Ft];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[na] || l[Ft]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = dh(t); t !== null; ) {
            if (l = t[Ft]) return l;
            t = dh(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function ia(t) {
    if (t = t[Ft] || t[na]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Pa(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(f(33));
  }
  function ca(t) {
    var e = t[kr];
    return e || (e = t[kr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Lt(t) {
    t[Wa] = !0;
  }
  var $r = /* @__PURE__ */ new Set(), Fr = {};
  function jl(t, e) {
    fa(t, e), fa(t + "Capture", e);
  }
  function fa(t, e) {
    for (Fr[t] = e, t = 0; t < e.length; t++)
      $r.add(e[t]);
  }
  var my = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Wr = {}, Pr = {};
  function vy(t) {
    return Qi.call(Pr, t) ? !0 : Qi.call(Wr, t) ? !1 : my.test(t) ? Pr[t] = !0 : (Wr[t] = !0, !1);
  }
  function ou(t, e, l) {
    if (vy(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function du(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function ke(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  var Wi, Ir;
  function ra(t) {
    if (Wi === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        Wi = e && e[1] || "", Ir = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Wi + t + Ir;
  }
  var Pi = !1;
  function Ii(t, e) {
    if (!t || Pi) return "";
    Pi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var C = function() {
                throw Error();
              };
              if (Object.defineProperty(C.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(C, []);
                } catch (_) {
                  var R = _;
                }
                Reflect.construct(t, [], C);
              } else {
                try {
                  C.call();
                } catch (_) {
                  R = _;
                }
                t.call(C.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (_) {
                R = _;
              }
              (C = t()) && typeof C.catch == "function" && C.catch(function() {
              });
            }
          } catch (_) {
            if (_ && R && typeof _.stack == "string")
              return [_.stack, R.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var i = a.DetermineComponentFrameRoot(), s = i[0], d = i[1];
      if (s && d) {
        var m = s.split(`
`), O = d.split(`
`);
        for (n = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < O.length && !O[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === m.length || n === O.length)
          for (a = m.length - 1, n = O.length - 1; 1 <= a && 0 <= n && m[a] !== O[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (m[a] !== O[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || m[a] !== O[n]) {
                  var M = `
` + m[a].replace(" at new ", " at ");
                  return t.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", t.displayName)), M;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      Pi = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? ra(l) : "";
  }
  function gy(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ra(t.type);
      case 16:
        return ra("Lazy");
      case 13:
        return ra("Suspense");
      case 19:
        return ra("SuspenseList");
      case 0:
      case 15:
        return Ii(t.type, !1);
      case 11:
        return Ii(t.type.render, !1);
      case 1:
        return Ii(t.type, !0);
      case 31:
        return ra("Activity");
      default:
        return "";
    }
  }
  function ts(t) {
    try {
      var e = "";
      do
        e += gy(t), t = t.return;
      while (t);
      return e;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  function Oe(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function es(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function py(t) {
    var e = es(t) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    ), a = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var n = l.get, i = l.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(s) {
          a = "" + s, i.call(this, s);
        }
      }), Object.defineProperty(t, e, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(s) {
          a = "" + s;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function hu(t) {
    t._valueTracker || (t._valueTracker = py(t));
  }
  function ls(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), a = "";
    return t && (a = es(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), !0) : !1;
  }
  function yu(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var by = /[\n"\\]/g;
  function Re(t) {
    return t.replace(
      by,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function tc(t, e, l, a, n, i, s, d) {
    t.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? t.type = s : t.removeAttribute("type"), e != null ? s === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Oe(e)) : t.value !== "" + Oe(e) && (t.value = "" + Oe(e)) : s !== "submit" && s !== "reset" || t.removeAttribute("value"), e != null ? ec(t, s, Oe(e)) : l != null ? ec(t, s, Oe(l)) : a != null && t.removeAttribute("value"), n == null && i != null && (t.defaultChecked = !!i), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? t.name = "" + Oe(d) : t.removeAttribute("name");
  }
  function as(t, e, l, a, n, i, s, d) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.type = i), e != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || e != null))
        return;
      l = l != null ? "" + Oe(l) : "", e = e != null ? "" + Oe(e) : l, d || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = d ? t.checked : !!a, t.defaultChecked = !!a, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (t.name = s);
  }
  function ec(t, e, l) {
    e === "number" && yu(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function sa(t, e, l, a) {
    if (t = t.options, e) {
      e = {};
      for (var n = 0; n < l.length; n++)
        e["$" + l[n]] = !0;
      for (l = 0; l < t.length; l++)
        n = e.hasOwnProperty("$" + t[l].value), t[l].selected !== n && (t[l].selected = n), n && a && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + Oe(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          t[n].selected = !0, a && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function ns(t, e, l) {
    if (e != null && (e = "" + Oe(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + Oe(l) : "";
  }
  function us(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(f(92));
        if ($t(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), e = l;
    }
    l = Oe(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a);
  }
  function oa(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Sy = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function is(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || Sy.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function cs(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(f(62));
    if (t = t.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var n in e)
        a = e[n], e.hasOwnProperty(n) && l[n] !== a && is(t, n, a);
    } else
      for (var i in e)
        e.hasOwnProperty(i) && is(t, i, e[i]);
  }
  function lc(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ey = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Ty = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function mu(t) {
    return Ty.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var ac = null;
  function nc(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var da = null, ha = null;
  function fs(t) {
    var e = ia(t);
    if (e && (t = e.stateNode)) {
      var l = t[ue] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (tc(
            t,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), e = l.name, l.type === "radio" && e != null) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + Re(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[ue] || null;
                if (!n) throw Error(f(90));
                tc(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              a = l[e], a.form === t.form && ls(a);
          }
          break t;
        case "textarea":
          ns(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && sa(t, !!l.multiple, e, !1);
      }
    }
  }
  var uc = !1;
  function rs(t, e, l) {
    if (uc) return t(e, l);
    uc = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (uc = !1, (da !== null || ha !== null) && (ti(), da && (e = da, t = ha, ha = da = null, fs(e), t)))
        for (e = 0; e < t.length; e++) fs(t[e]);
    }
  }
  function Ia(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[ue] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function")
      throw Error(
        f(231, e, typeof l)
      );
    return l;
  }
  var $e = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ic = !1;
  if ($e)
    try {
      var tn = {};
      Object.defineProperty(tn, "passive", {
        get: function() {
          ic = !0;
        }
      }), window.addEventListener("test", tn, tn), window.removeEventListener("test", tn, tn);
    } catch {
      ic = !1;
    }
  var dl = null, cc = null, vu = null;
  function ss() {
    if (vu) return vu;
    var t, e = cc, l = e.length, a, n = "value" in dl ? dl.value : dl.textContent, i = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++) ;
    var s = l - t;
    for (a = 1; a <= s && e[l - a] === n[i - a]; a++) ;
    return vu = n.slice(t, 1 < a ? 1 - a : void 0);
  }
  function gu(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function pu() {
    return !0;
  }
  function os() {
    return !1;
  }
  function ie(t) {
    function e(l, a, n, i, s) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = i, this.target = s, this.currentTarget = null;
      for (var d in t)
        t.hasOwnProperty(d) && (l = t[d], this[d] = l ? l(i) : i[d]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? pu : os, this.isPropagationStopped = os, this;
    }
    return b(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = pu);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = pu);
      },
      persist: function() {
      },
      isPersistent: pu
    }), e;
  }
  var Yl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, bu = ie(Yl), en = b({}, Yl, { view: 0, detail: 0 }), Ay = ie(en), fc, rc, ln, Su = b({}, en, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: oc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== ln && (ln && t.type === "mousemove" ? (fc = t.screenX - ln.screenX, rc = t.screenY - ln.screenY) : rc = fc = 0, ln = t), fc);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : rc;
    }
  }), ds = ie(Su), Oy = b({}, Su, { dataTransfer: 0 }), Ry = ie(Oy), _y = b({}, en, { relatedTarget: 0 }), sc = ie(_y), xy = b({}, Yl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), zy = ie(xy), My = b({}, Yl, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), Dy = ie(My), Uy = b({}, Yl, { data: 0 }), hs = ie(Uy), Ny = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Cy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, wy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Hy(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = wy[t]) ? !!e[t] : !1;
  }
  function oc() {
    return Hy;
  }
  var qy = b({}, en, {
    key: function(t) {
      if (t.key) {
        var e = Ny[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = gu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Cy[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: oc,
    charCode: function(t) {
      return t.type === "keypress" ? gu(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? gu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), By = ie(qy), jy = b({}, Su, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), ys = ie(jy), Yy = b({}, en, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: oc
  }), Ly = ie(Yy), Gy = b({}, Yl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Xy = ie(Gy), Qy = b({}, Su, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zy = ie(Qy), Vy = b({}, Yl, {
    newState: 0,
    oldState: 0
  }), Ky = ie(Vy), Jy = [9, 13, 27, 32], dc = $e && "CompositionEvent" in window, an = null;
  $e && "documentMode" in document && (an = document.documentMode);
  var ky = $e && "TextEvent" in window && !an, ms = $e && (!dc || an && 8 < an && 11 >= an), vs = " ", gs = !1;
  function ps(t, e) {
    switch (t) {
      case "keyup":
        return Jy.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function bs(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var ya = !1;
  function $y(t, e) {
    switch (t) {
      case "compositionend":
        return bs(e);
      case "keypress":
        return e.which !== 32 ? null : (gs = !0, vs);
      case "textInput":
        return t = e.data, t === vs && gs ? null : t;
      default:
        return null;
    }
  }
  function Fy(t, e) {
    if (ya)
      return t === "compositionend" || !dc && ps(t, e) ? (t = ss(), vu = cc = dl = null, ya = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return ms && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Wy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Ss(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Wy[t.type] : e === "textarea";
  }
  function Es(t, e, l, a) {
    da ? ha ? ha.push(a) : ha = [a] : da = a, e = ii(e, "onChange"), 0 < e.length && (l = new bu(
      "onChange",
      "change",
      null,
      l,
      a
    ), t.push({ event: l, listeners: e }));
  }
  var nn = null, un = null;
  function Py(t) {
    lh(t, 0);
  }
  function Eu(t) {
    var e = Pa(t);
    if (ls(e)) return t;
  }
  function Ts(t, e) {
    if (t === "change") return e;
  }
  var As = !1;
  if ($e) {
    var hc;
    if ($e) {
      var yc = "oninput" in document;
      if (!yc) {
        var Os = document.createElement("div");
        Os.setAttribute("oninput", "return;"), yc = typeof Os.oninput == "function";
      }
      hc = yc;
    } else hc = !1;
    As = hc && (!document.documentMode || 9 < document.documentMode);
  }
  function Rs() {
    nn && (nn.detachEvent("onpropertychange", _s), un = nn = null);
  }
  function _s(t) {
    if (t.propertyName === "value" && Eu(un)) {
      var e = [];
      Es(
        e,
        un,
        t,
        nc(t)
      ), rs(Py, e);
    }
  }
  function Iy(t, e, l) {
    t === "focusin" ? (Rs(), nn = e, un = l, nn.attachEvent("onpropertychange", _s)) : t === "focusout" && Rs();
  }
  function tm(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Eu(un);
  }
  function em(t, e) {
    if (t === "click") return Eu(e);
  }
  function lm(t, e) {
    if (t === "input" || t === "change")
      return Eu(e);
  }
  function am(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var ve = typeof Object.is == "function" ? Object.is : am;
  function cn(t, e) {
    if (ve(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!Qi.call(e, n) || !ve(t[n], e[n]))
        return !1;
    }
    return !0;
  }
  function xs(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function zs(t, e) {
    var l = xs(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (a = t + l.textContent.length, t <= e && a >= e)
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = xs(l);
    }
  }
  function Ms(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Ms(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Ds(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = yu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = yu(t.document);
    }
    return e;
  }
  function mc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var nm = $e && "documentMode" in document && 11 >= document.documentMode, ma = null, vc = null, fn = null, gc = !1;
  function Us(t, e, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    gc || ma == null || ma !== yu(a) || (a = ma, "selectionStart" in a && mc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), fn && cn(fn, a) || (fn = a, a = ii(vc, "onSelect"), 0 < a.length && (e = new bu(
      "onSelect",
      "select",
      null,
      e,
      l
    ), t.push({ event: e, listeners: a }), e.target = ma)));
  }
  function Ll(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var va = {
    animationend: Ll("Animation", "AnimationEnd"),
    animationiteration: Ll("Animation", "AnimationIteration"),
    animationstart: Ll("Animation", "AnimationStart"),
    transitionrun: Ll("Transition", "TransitionRun"),
    transitionstart: Ll("Transition", "TransitionStart"),
    transitioncancel: Ll("Transition", "TransitionCancel"),
    transitionend: Ll("Transition", "TransitionEnd")
  }, pc = {}, Ns = {};
  $e && (Ns = document.createElement("div").style, "AnimationEvent" in window || (delete va.animationend.animation, delete va.animationiteration.animation, delete va.animationstart.animation), "TransitionEvent" in window || delete va.transitionend.transition);
  function Gl(t) {
    if (pc[t]) return pc[t];
    if (!va[t]) return t;
    var e = va[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in Ns)
        return pc[t] = e[l];
    return t;
  }
  var Cs = Gl("animationend"), ws = Gl("animationiteration"), Hs = Gl("animationstart"), um = Gl("transitionrun"), im = Gl("transitionstart"), cm = Gl("transitioncancel"), qs = Gl("transitionend"), Bs = /* @__PURE__ */ new Map(), bc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  bc.push("scrollEnd");
  function we(t, e) {
    Bs.set(t, e), jl(e, [t]);
  }
  var js = /* @__PURE__ */ new WeakMap();
  function _e(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = js.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: ts(e)
      }, js.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: ts(e)
    };
  }
  var xe = [], ga = 0, Sc = 0;
  function Tu() {
    for (var t = ga, e = Sc = ga = 0; e < t; ) {
      var l = xe[e];
      xe[e++] = null;
      var a = xe[e];
      xe[e++] = null;
      var n = xe[e];
      xe[e++] = null;
      var i = xe[e];
      if (xe[e++] = null, a !== null && n !== null) {
        var s = a.pending;
        s === null ? n.next = n : (n.next = s.next, s.next = n), a.pending = n;
      }
      i !== 0 && Ys(l, n, i);
    }
  }
  function Au(t, e, l, a) {
    xe[ga++] = t, xe[ga++] = e, xe[ga++] = l, xe[ga++] = a, Sc |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Ec(t, e, l, a) {
    return Au(t, e, l, a), Ou(t);
  }
  function pa(t, e) {
    return Au(t, null, null, e), Ou(t);
  }
  function Ys(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, i = t.return; i !== null; )
      i.childLanes |= l, a = i.alternate, a !== null && (a.childLanes |= l), i.tag === 22 && (t = i.stateNode, t === null || t._visibility & 1 || (n = !0)), t = i, i = i.return;
    return t.tag === 3 ? (i = t.stateNode, n && e !== null && (n = 31 - me(l), t = i.hiddenUpdates, a = t[n], a === null ? t[n] = [e] : a.push(e), e.lane = l | 536870912), i) : null;
  }
  function Ou(t) {
    if (50 < Cn)
      throw Cn = 0, zf = null, Error(f(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var ba = {};
  function fm(t, e, l, a) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ge(t, e, l, a) {
    return new fm(t, e, l, a);
  }
  function Tc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Fe(t, e) {
    var l = t.alternate;
    return l === null ? (l = ge(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function Ls(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Ru(t, e, l, a, n, i) {
    var s = 0;
    if (a = t, typeof t == "function") Tc(t) && (s = 1);
    else if (typeof t == "string")
      s = s1(
        t,
        l,
        $.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case ee:
          return t = ge(31, l, e, n), t.elementType = ee, t.lanes = i, t;
        case q:
          return Xl(l.children, n, i, e);
        case B:
          s = 8, n |= 24;
          break;
        case w:
          return t = ge(12, l, e, n | 2), t.elementType = w, t.lanes = i, t;
        case z:
          return t = ge(13, l, e, n), t.elementType = z, t.lanes = i, t;
        case P:
          return t = ge(19, l, e, n), t.elementType = P, t.lanes = i, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Q:
              case G:
                s = 10;
                break t;
              case V:
                s = 9;
                break t;
              case ut:
                s = 11;
                break t;
              case k:
                s = 14;
                break t;
              case zt:
                s = 16, a = null;
                break t;
            }
          s = 29, l = Error(
            f(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = ge(s, l, e, n), e.elementType = t, e.type = a, e.lanes = i, e;
  }
  function Xl(t, e, l, a) {
    return t = ge(7, t, a, e), t.lanes = l, t;
  }
  function Ac(t, e, l) {
    return t = ge(6, t, null, e), t.lanes = l, t;
  }
  function Oc(t, e, l) {
    return e = ge(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = l, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var Sa = [], Ea = 0, _u = null, xu = 0, ze = [], Me = 0, Ql = null, We = 1, Pe = "";
  function Zl(t, e) {
    Sa[Ea++] = xu, Sa[Ea++] = _u, _u = t, xu = e;
  }
  function Gs(t, e, l) {
    ze[Me++] = We, ze[Me++] = Pe, ze[Me++] = Ql, Ql = t;
    var a = We;
    t = Pe;
    var n = 32 - me(a) - 1;
    a &= ~(1 << n), l += 1;
    var i = 32 - me(e) + n;
    if (30 < i) {
      var s = n - n % 5;
      i = (a & (1 << s) - 1).toString(32), a >>= s, n -= s, We = 1 << 32 - me(e) + n | l << n | a, Pe = i + t;
    } else
      We = 1 << i | l << n | a, Pe = t;
  }
  function Rc(t) {
    t.return !== null && (Zl(t, 1), Gs(t, 1, 0));
  }
  function _c(t) {
    for (; t === _u; )
      _u = Sa[--Ea], Sa[Ea] = null, xu = Sa[--Ea], Sa[Ea] = null;
    for (; t === Ql; )
      Ql = ze[--Me], ze[Me] = null, Pe = ze[--Me], ze[Me] = null, We = ze[--Me], ze[Me] = null;
  }
  var le = null, Mt = null, dt = !1, Vl = null, Ye = !1, xc = Error(f(519));
  function Kl(t) {
    var e = Error(f(418, ""));
    throw on(_e(e, t)), xc;
  }
  function Xs(t) {
    var e = t.stateNode, l = t.type, a = t.memoizedProps;
    switch (e[Ft] = t, e[ue] = a, l) {
      case "dialog":
        ft("cancel", e), ft("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ft("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Hn.length; l++)
          ft(Hn[l], e);
        break;
      case "source":
        ft("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ft("error", e), ft("load", e);
        break;
      case "details":
        ft("toggle", e);
        break;
      case "input":
        ft("invalid", e), as(
          e,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        ), hu(e);
        break;
      case "select":
        ft("invalid", e);
        break;
      case "textarea":
        ft("invalid", e), us(e, a.value, a.defaultValue, a.children), hu(e);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === !0 || ih(e.textContent, l) ? (a.popover != null && (ft("beforetoggle", e), ft("toggle", e)), a.onScroll != null && ft("scroll", e), a.onScrollEnd != null && ft("scrollend", e), a.onClick != null && (e.onclick = ci), e = !0) : e = !1, e || Kl(t);
  }
  function Qs(t) {
    for (le = t.return; le; )
      switch (le.tag) {
        case 5:
        case 13:
          Ye = !1;
          return;
        case 27:
        case 3:
          Ye = !0;
          return;
        default:
          le = le.return;
      }
  }
  function rn(t) {
    if (t !== le) return !1;
    if (!dt) return Qs(t), dt = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || Zf(t.type, t.memoizedProps)), l = !l), l && Mt && Kl(t), Qs(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (l = t.data, l === "/$") {
              if (e === 0) {
                Mt = qe(t.nextSibling);
                break t;
              }
              e--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || e++;
          t = t.nextSibling;
        }
        Mt = null;
      }
    } else
      e === 27 ? (e = Mt, zl(t.type) ? (t = kf, kf = null, Mt = t) : Mt = e) : Mt = le ? qe(t.stateNode.nextSibling) : null;
    return !0;
  }
  function sn() {
    Mt = le = null, dt = !1;
  }
  function Zs() {
    var t = Vl;
    return t !== null && (re === null ? re = t : re.push.apply(
      re,
      t
    ), Vl = null), t;
  }
  function on(t) {
    Vl === null ? Vl = [t] : Vl.push(t);
  }
  var zc = H(null), Jl = null, Ie = null;
  function hl(t, e, l) {
    Y(zc, e._currentValue), e._currentValue = l;
  }
  function tl(t) {
    t._currentValue = zc.current, X(zc);
  }
  function Mc(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function Dc(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var s = n.child;
        i = i.firstContext;
        t: for (; i !== null; ) {
          var d = i;
          i = n;
          for (var m = 0; m < e.length; m++)
            if (d.context === e[m]) {
              i.lanes |= l, d = i.alternate, d !== null && (d.lanes |= l), Mc(
                i.return,
                l,
                t
              ), a || (s = null);
              break t;
            }
          i = d.next;
        }
      } else if (n.tag === 18) {
        if (s = n.return, s === null) throw Error(f(341));
        s.lanes |= l, i = s.alternate, i !== null && (i.lanes |= l), Mc(s, l, t), s = null;
      } else s = n.child;
      if (s !== null) s.return = n;
      else
        for (s = n; s !== null; ) {
          if (s === t) {
            s = null;
            break;
          }
          if (n = s.sibling, n !== null) {
            n.return = s.return, s = n;
            break;
          }
          s = s.return;
        }
      n = s;
    }
  }
  function dn(t, e, l, a) {
    t = null;
    for (var n = e, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var s = n.alternate;
        if (s === null) throw Error(f(387));
        if (s = s.memoizedProps, s !== null) {
          var d = n.type;
          ve(n.pendingProps.value, s.value) || (t !== null ? t.push(d) : t = [d]);
        }
      } else if (n === he.current) {
        if (s = n.alternate, s === null) throw Error(f(387));
        s.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Gn) : t = [Gn]);
      }
      n = n.return;
    }
    t !== null && Dc(
      e,
      t,
      l,
      a
    ), e.flags |= 262144;
  }
  function zu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ve(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function kl(t) {
    Jl = t, Ie = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Wt(t) {
    return Vs(Jl, t);
  }
  function Mu(t, e) {
    return Jl === null && kl(t), Vs(t, e);
  }
  function Vs(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, Ie === null) {
      if (t === null) throw Error(f(308));
      Ie = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Ie = Ie.next = e;
    return l;
  }
  var rm = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(l, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(l) {
        return l();
      });
    };
  }, sm = u.unstable_scheduleCallback, om = u.unstable_NormalPriority, Bt = {
    $$typeof: G,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Uc() {
    return {
      controller: new rm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function hn(t) {
    t.refCount--, t.refCount === 0 && sm(om, function() {
      t.controller.abort();
    });
  }
  var yn = null, Nc = 0, Ta = 0, Aa = null;
  function dm(t, e) {
    if (yn === null) {
      var l = yn = [];
      Nc = 0, Ta = Hf(), Aa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return Nc++, e.then(Ks, Ks), e;
  }
  function Ks() {
    if (--Nc === 0 && yn !== null) {
      Aa !== null && (Aa.status = "fulfilled");
      var t = yn;
      yn = null, Ta = 0, Aa = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function hm(t, e) {
    var l = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        l.push(n);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = e;
        for (var n = 0; n < l.length; n++) (0, l[n])(e);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
          (0, l[n])(void 0);
      }
    ), a;
  }
  var Js = U.S;
  U.S = function(t, e) {
    typeof e == "object" && e !== null && typeof e.then == "function" && dm(t, e), Js !== null && Js(t, e);
  };
  var $l = H(null);
  function Cc() {
    var t = $l.current;
    return t !== null ? t : At.pooledCache;
  }
  function Du(t, e) {
    e === null ? Y($l, $l.current) : Y($l, e.pool);
  }
  function ks() {
    var t = Cc();
    return t === null ? null : { parent: Bt._currentValue, pool: t };
  }
  var mn = Error(f(460)), $s = Error(f(474)), Uu = Error(f(542)), wc = { then: function() {
  } };
  function Fs(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Nu() {
  }
  function Ws(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(Nu, Nu), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Is(t), t;
      default:
        if (typeof e.status == "string") e.then(Nu, Nu);
        else {
          if (t = At, t !== null && 100 < t.shellSuspendCounter)
            throw Error(f(482));
          t = e, t.status = "pending", t.then(
            function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Is(t), t;
        }
        throw vn = e, mn;
    }
  }
  var vn = null;
  function Ps() {
    if (vn === null) throw Error(f(459));
    var t = vn;
    return vn = null, t;
  }
  function Is(t) {
    if (t === mn || t === Uu)
      throw Error(f(483));
  }
  var yl = !1;
  function Hc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function qc(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function ml(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function vl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (vt & 2) !== 0) {
      var n = a.pending;
      return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = Ou(t), Ys(t, null, l), e;
    }
    return Au(t, a, e, l), Ou(t);
  }
  function gn(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, Kr(t, l);
    }
  }
  function Bc(t, e) {
    var l = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var n = null, i = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var s = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          i === null ? n = i = s : i = i.next = s, l = l.next;
        } while (l !== null);
        i === null ? n = i = e : i = i.next = e;
      } else n = i = e;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = l;
      return;
    }
    t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
  }
  var jc = !1;
  function pn() {
    if (jc) {
      var t = Aa;
      if (t !== null) throw t;
    }
  }
  function bn(t, e, l, a) {
    jc = !1;
    var n = t.updateQueue;
    yl = !1;
    var i = n.firstBaseUpdate, s = n.lastBaseUpdate, d = n.shared.pending;
    if (d !== null) {
      n.shared.pending = null;
      var m = d, O = m.next;
      m.next = null, s === null ? i = O : s.next = O, s = m;
      var M = t.alternate;
      M !== null && (M = M.updateQueue, d = M.lastBaseUpdate, d !== s && (d === null ? M.firstBaseUpdate = O : d.next = O, M.lastBaseUpdate = m));
    }
    if (i !== null) {
      var C = n.baseState;
      s = 0, M = O = m = null, d = i;
      do {
        var R = d.lane & -536870913, _ = R !== d.lane;
        if (_ ? (rt & R) === R : (a & R) === R) {
          R !== 0 && R === Ta && (jc = !0), M !== null && (M = M.next = {
            lane: 0,
            tag: d.tag,
            payload: d.payload,
            callback: null,
            next: null
          });
          t: {
            var tt = t, F = d;
            R = e;
            var St = l;
            switch (F.tag) {
              case 1:
                if (tt = F.payload, typeof tt == "function") {
                  C = tt.call(St, C, R);
                  break t;
                }
                C = tt;
                break t;
              case 3:
                tt.flags = tt.flags & -65537 | 128;
              case 0:
                if (tt = F.payload, R = typeof tt == "function" ? tt.call(St, C, R) : tt, R == null) break t;
                C = b({}, C, R);
                break t;
              case 2:
                yl = !0;
            }
          }
          R = d.callback, R !== null && (t.flags |= 64, _ && (t.flags |= 8192), _ = n.callbacks, _ === null ? n.callbacks = [R] : _.push(R));
        } else
          _ = {
            lane: R,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null
          }, M === null ? (O = M = _, m = C) : M = M.next = _, s |= R;
        if (d = d.next, d === null) {
          if (d = n.shared.pending, d === null)
            break;
          _ = d, d = _.next, _.next = null, n.lastBaseUpdate = _, n.shared.pending = null;
        }
      } while (!0);
      M === null && (m = C), n.baseState = m, n.firstBaseUpdate = O, n.lastBaseUpdate = M, i === null && (n.shared.lanes = 0), Ol |= s, t.lanes = s, t.memoizedState = C;
    }
  }
  function to(t, e) {
    if (typeof t != "function")
      throw Error(f(191, t));
    t.call(e);
  }
  function eo(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        to(l[t], e);
  }
  var Oa = H(null), Cu = H(0);
  function lo(t, e) {
    t = cl, Y(Cu, t), Y(Oa, e), cl = t | e.baseLanes;
  }
  function Yc() {
    Y(Cu, cl), Y(Oa, Oa.current);
  }
  function Lc() {
    cl = Cu.current, X(Oa), X(Cu);
  }
  var gl = 0, nt = null, pt = null, wt = null, wu = !1, Ra = !1, Fl = !1, Hu = 0, Sn = 0, _a = null, ym = 0;
  function Ut() {
    throw Error(f(321));
  }
  function Gc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!ve(t[l], e[l])) return !1;
    return !0;
  }
  function Xc(t, e, l, a, n, i) {
    return gl = i, nt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, U.H = t === null || t.memoizedState === null ? Lo : Go, Fl = !1, i = l(a, n), Fl = !1, Ra && (i = no(
      e,
      l,
      a,
      n
    )), ao(t), i;
  }
  function ao(t) {
    U.H = Gu;
    var e = pt !== null && pt.next !== null;
    if (gl = 0, wt = pt = nt = null, wu = !1, Sn = 0, _a = null, e) throw Error(f(300));
    t === null || Gt || (t = t.dependencies, t !== null && zu(t) && (Gt = !0));
  }
  function no(t, e, l, a) {
    nt = t;
    var n = 0;
    do {
      if (Ra && (_a = null), Sn = 0, Ra = !1, 25 <= n) throw Error(f(301));
      if (n += 1, wt = pt = null, t.updateQueue != null) {
        var i = t.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      U.H = Em, i = e(l, a);
    } while (Ra);
    return i;
  }
  function mm() {
    var t = U.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? En(e) : e, t = t.useState()[0], (pt !== null ? pt.memoizedState : null) !== t && (nt.flags |= 1024), e;
  }
  function Qc() {
    var t = Hu !== 0;
    return Hu = 0, t;
  }
  function Zc(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function Vc(t) {
    if (wu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      wu = !1;
    }
    gl = 0, wt = pt = nt = null, Ra = !1, Sn = Hu = 0, _a = null;
  }
  function ce() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return wt === null ? nt.memoizedState = wt = t : wt = wt.next = t, wt;
  }
  function Ht() {
    if (pt === null) {
      var t = nt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = pt.next;
    var e = wt === null ? nt.memoizedState : wt.next;
    if (e !== null)
      wt = e, pt = t;
    else {
      if (t === null)
        throw nt.alternate === null ? Error(f(467)) : Error(f(310));
      pt = t, t = {
        memoizedState: pt.memoizedState,
        baseState: pt.baseState,
        baseQueue: pt.baseQueue,
        queue: pt.queue,
        next: null
      }, wt === null ? nt.memoizedState = wt = t : wt = wt.next = t;
    }
    return wt;
  }
  function Kc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function En(t) {
    var e = Sn;
    return Sn += 1, _a === null && (_a = []), t = Ws(_a, t, e), e = nt, (wt === null ? e.memoizedState : wt.next) === null && (e = e.alternate, U.H = e === null || e.memoizedState === null ? Lo : Go), t;
  }
  function qu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return En(t);
      if (t.$$typeof === G) return Wt(t);
    }
    throw Error(f(438, String(t)));
  }
  function Jc(t) {
    var e = null, l = nt.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var a = nt.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = Kc(), nt.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++)
        l[a] = Ce;
    return e.index++, l;
  }
  function el(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Bu(t) {
    var e = Ht();
    return kc(e, pt, t);
  }
  function kc(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue, i = a.pending;
    if (i !== null) {
      if (n !== null) {
        var s = n.next;
        n.next = i.next, i.next = s;
      }
      e.baseQueue = n = i, a.pending = null;
    }
    if (i = t.baseState, n === null) t.memoizedState = i;
    else {
      e = n.next;
      var d = s = null, m = null, O = e, M = !1;
      do {
        var C = O.lane & -536870913;
        if (C !== O.lane ? (rt & C) === C : (gl & C) === C) {
          var R = O.revertLane;
          if (R === 0)
            m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null
            }), C === Ta && (M = !0);
          else if ((gl & R) === R) {
            O = O.next, R === Ta && (M = !0);
            continue;
          } else
            C = {
              lane: 0,
              revertLane: O.revertLane,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null
            }, m === null ? (d = m = C, s = i) : m = m.next = C, nt.lanes |= R, Ol |= R;
          C = O.action, Fl && l(i, C), i = O.hasEagerState ? O.eagerState : l(i, C);
        } else
          R = {
            lane: C,
            revertLane: O.revertLane,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null
          }, m === null ? (d = m = R, s = i) : m = m.next = R, nt.lanes |= C, Ol |= C;
        O = O.next;
      } while (O !== null && O !== e);
      if (m === null ? s = i : m.next = d, !ve(i, t.memoizedState) && (Gt = !0, M && (l = Aa, l !== null)))
        throw l;
      t.memoizedState = i, t.baseState = s, t.baseQueue = m, a.lastRenderedState = i;
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function $c(t) {
    var e = Ht(), l = e.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch, n = l.pending, i = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var s = n = n.next;
      do
        i = t(i, s.action), s = s.next;
      while (s !== n);
      ve(i, e.memoizedState) || (Gt = !0), e.memoizedState = i, e.baseQueue === null && (e.baseState = i), l.lastRenderedState = i;
    }
    return [i, a];
  }
  function uo(t, e, l) {
    var a = nt, n = Ht(), i = dt;
    if (i) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = e();
    var s = !ve(
      (pt || n).memoizedState,
      l
    );
    s && (n.memoizedState = l, Gt = !0), n = n.queue;
    var d = fo.bind(null, a, n, t);
    if (Tn(2048, 8, d, [t]), n.getSnapshot !== e || s || wt !== null && wt.memoizedState.tag & 1) {
      if (a.flags |= 2048, xa(
        9,
        ju(),
        co.bind(
          null,
          a,
          n,
          l,
          e
        ),
        null
      ), At === null) throw Error(f(349));
      i || (gl & 124) !== 0 || io(a, e, l);
    }
    return l;
  }
  function io(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = nt.updateQueue, e === null ? (e = Kc(), nt.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function co(t, e, l, a) {
    e.value = l, e.getSnapshot = a, ro(e) && so(t);
  }
  function fo(t, e, l) {
    return l(function() {
      ro(e) && so(t);
    });
  }
  function ro(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !ve(t, l);
    } catch {
      return !0;
    }
  }
  function so(t) {
    var e = pa(t, 2);
    e !== null && Te(e, t, 2);
  }
  function Fc(t) {
    var e = ce();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), Fl) {
        sl(!0);
        try {
          l();
        } finally {
          sl(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: el,
      lastRenderedState: t
    }, e;
  }
  function oo(t, e, l, a) {
    return t.baseState = l, kc(
      t,
      pt,
      typeof a == "function" ? a : el
    );
  }
  function vm(t, e, l, a, n) {
    if (Lu(t)) throw Error(f(485));
    if (t = e.action, t !== null) {
      var i = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(s) {
          i.listeners.push(s);
        }
      };
      U.T !== null ? l(!0) : i.isTransition = !1, a(i), l = e.pending, l === null ? (i.next = e.pending = i, ho(e, i)) : (i.next = l.next, e.pending = l.next = i);
    }
  }
  function ho(t, e) {
    var l = e.action, a = e.payload, n = t.state;
    if (e.isTransition) {
      var i = U.T, s = {};
      U.T = s;
      try {
        var d = l(n, a), m = U.S;
        m !== null && m(s, d), yo(t, e, d);
      } catch (O) {
        Wc(t, e, O);
      } finally {
        U.T = i;
      }
    } else
      try {
        i = l(n, a), yo(t, e, i);
      } catch (O) {
        Wc(t, e, O);
      }
  }
  function yo(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        mo(t, e, a);
      },
      function(a) {
        return Wc(t, e, a);
      }
    ) : mo(t, e, l);
  }
  function mo(t, e, l) {
    e.status = "fulfilled", e.value = l, vo(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, ho(t, l)));
  }
  function Wc(t, e, l) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = l, vo(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function vo(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function go(t, e) {
    return e;
  }
  function po(t, e) {
    if (dt) {
      var l = At.formState;
      if (l !== null) {
        t: {
          var a = nt;
          if (dt) {
            if (Mt) {
              e: {
                for (var n = Mt, i = Ye; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break e;
                  }
                  if (n = qe(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break e;
                  }
                }
                i = n.data, n = i === "F!" || i === "F" ? n : null;
              }
              if (n) {
                Mt = qe(
                  n.nextSibling
                ), a = n.data === "F!";
                break t;
              }
            }
            Kl(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return l = ce(), l.memoizedState = l.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: go,
      lastRenderedState: e
    }, l.queue = a, l = Bo.bind(
      null,
      nt,
      a
    ), a.dispatch = l, a = Fc(!1), i = lf.bind(
      null,
      nt,
      !1,
      a.queue
    ), a = ce(), n = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = n, l = vm.bind(
      null,
      nt,
      n,
      i,
      l
    ), n.dispatch = l, a.memoizedState = t, [e, l, !1];
  }
  function bo(t) {
    var e = Ht();
    return So(e, pt, t);
  }
  function So(t, e, l) {
    if (e = kc(
      t,
      e,
      go
    )[0], t = Bu(el)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = En(e);
      } catch (s) {
        throw s === mn ? Uu : s;
      }
    else a = e;
    e = Ht();
    var n = e.queue, i = n.dispatch;
    return l !== e.memoizedState && (nt.flags |= 2048, xa(
      9,
      ju(),
      gm.bind(null, n, l),
      null
    )), [a, i, t];
  }
  function gm(t, e) {
    t.action = e;
  }
  function Eo(t) {
    var e = Ht(), l = pt;
    if (l !== null)
      return So(e, l, t);
    Ht(), e = e.memoizedState, l = Ht();
    var a = l.queue.dispatch;
    return l.memoizedState = t, [e, a, !1];
  }
  function xa(t, e, l, a) {
    return t = { tag: t, create: l, deps: a, inst: e, next: null }, e = nt.updateQueue, e === null && (e = Kc(), nt.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t;
  }
  function ju() {
    return { destroy: void 0, resource: void 0 };
  }
  function To() {
    return Ht().memoizedState;
  }
  function Yu(t, e, l, a) {
    var n = ce();
    a = a === void 0 ? null : a, nt.flags |= t, n.memoizedState = xa(
      1 | e,
      ju(),
      l,
      a
    );
  }
  function Tn(t, e, l, a) {
    var n = Ht();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    pt !== null && a !== null && Gc(a, pt.memoizedState.deps) ? n.memoizedState = xa(e, i, l, a) : (nt.flags |= t, n.memoizedState = xa(
      1 | e,
      i,
      l,
      a
    ));
  }
  function Ao(t, e) {
    Yu(8390656, 8, t, e);
  }
  function Oo(t, e) {
    Tn(2048, 8, t, e);
  }
  function Ro(t, e) {
    return Tn(4, 2, t, e);
  }
  function _o(t, e) {
    return Tn(4, 4, t, e);
  }
  function xo(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function() {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function zo(t, e, l) {
    l = l != null ? l.concat([t]) : null, Tn(4, 4, xo.bind(null, e, t), l);
  }
  function Pc() {
  }
  function Mo(t, e) {
    var l = Ht();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && Gc(e, a[1]) ? a[0] : (l.memoizedState = [t, e], t);
  }
  function Do(t, e) {
    var l = Ht();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && Gc(e, a[1]))
      return a[0];
    if (a = t(), Fl) {
      sl(!0);
      try {
        t();
      } finally {
        sl(!1);
      }
    }
    return l.memoizedState = [a, e], a;
  }
  function Ic(t, e, l) {
    return l === void 0 || (gl & 1073741824) !== 0 ? t.memoizedState = e : (t.memoizedState = l, t = Cd(), nt.lanes |= t, Ol |= t, l);
  }
  function Uo(t, e, l, a) {
    return ve(l, e) ? l : Oa.current !== null ? (t = Ic(t, l, a), ve(t, e) || (Gt = !0), t) : (gl & 42) === 0 ? (Gt = !0, t.memoizedState = l) : (t = Cd(), nt.lanes |= t, Ol |= t, e);
  }
  function No(t, e, l, a, n) {
    var i = L.p;
    L.p = i !== 0 && 8 > i ? i : 8;
    var s = U.T, d = {};
    U.T = d, lf(t, !1, e, l);
    try {
      var m = n(), O = U.S;
      if (O !== null && O(d, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var M = hm(
          m,
          a
        );
        An(
          t,
          e,
          M,
          Ee(t)
        );
      } else
        An(
          t,
          e,
          a,
          Ee(t)
        );
    } catch (C) {
      An(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: C },
        Ee()
      );
    } finally {
      L.p = i, U.T = s;
    }
  }
  function pm() {
  }
  function tf(t, e, l, a) {
    if (t.tag !== 5) throw Error(f(476));
    var n = Co(t).queue;
    No(
      t,
      n,
      e,
      I,
      l === null ? pm : function() {
        return wo(t), l(a);
      }
    );
  }
  function Co(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: I,
      baseState: I,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: el,
        lastRenderedState: I
      },
      next: null
    };
    var l = {};
    return e.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: el,
        lastRenderedState: l
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function wo(t) {
    var e = Co(t).next.queue;
    An(t, e, {}, Ee());
  }
  function ef() {
    return Wt(Gn);
  }
  function Ho() {
    return Ht().memoizedState;
  }
  function qo() {
    return Ht().memoizedState;
  }
  function bm(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = Ee();
          t = ml(l);
          var a = vl(e, t, l);
          a !== null && (Te(a, e, l), gn(a, e, l)), e = { cache: Uc() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function Sm(t, e, l) {
    var a = Ee();
    l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Lu(t) ? jo(e, l) : (l = Ec(t, e, l, a), l !== null && (Te(l, t, a), Yo(l, e, a)));
  }
  function Bo(t, e, l) {
    var a = Ee();
    An(t, e, l, a);
  }
  function An(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Lu(t)) jo(e, n);
    else {
      var i = t.alternate;
      if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer, i !== null))
        try {
          var s = e.lastRenderedState, d = i(s, l);
          if (n.hasEagerState = !0, n.eagerState = d, ve(d, s))
            return Au(t, e, n, 0), At === null && Tu(), !1;
        } catch {
        } finally {
        }
      if (l = Ec(t, e, n, a), l !== null)
        return Te(l, t, a), Yo(l, e, a), !0;
    }
    return !1;
  }
  function lf(t, e, l, a) {
    if (a = {
      lane: 2,
      revertLane: Hf(),
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Lu(t)) {
      if (e) throw Error(f(479));
    } else
      e = Ec(
        t,
        l,
        a,
        2
      ), e !== null && Te(e, t, 2);
  }
  function Lu(t) {
    var e = t.alternate;
    return t === nt || e !== null && e === nt;
  }
  function jo(t, e) {
    Ra = wu = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function Yo(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, Kr(t, l);
    }
  }
  var Gu = {
    readContext: Wt,
    use: qu,
    useCallback: Ut,
    useContext: Ut,
    useEffect: Ut,
    useImperativeHandle: Ut,
    useLayoutEffect: Ut,
    useInsertionEffect: Ut,
    useMemo: Ut,
    useReducer: Ut,
    useRef: Ut,
    useState: Ut,
    useDebugValue: Ut,
    useDeferredValue: Ut,
    useTransition: Ut,
    useSyncExternalStore: Ut,
    useId: Ut,
    useHostTransitionStatus: Ut,
    useFormState: Ut,
    useActionState: Ut,
    useOptimistic: Ut,
    useMemoCache: Ut,
    useCacheRefresh: Ut
  }, Lo = {
    readContext: Wt,
    use: qu,
    useCallback: function(t, e) {
      return ce().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Wt,
    useEffect: Ao,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, Yu(
        4194308,
        4,
        xo.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return Yu(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Yu(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = ce();
      e = e === void 0 ? null : e;
      var a = t();
      if (Fl) {
        sl(!0);
        try {
          t();
        } finally {
          sl(!1);
        }
      }
      return l.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, l) {
      var a = ce();
      if (l !== void 0) {
        var n = l(e);
        if (Fl) {
          sl(!0);
          try {
            l(e);
          } finally {
            sl(!1);
          }
        }
      } else n = e;
      return a.memoizedState = a.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, a.queue = t, t = t.dispatch = Sm.bind(
        null,
        nt,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = ce();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Fc(t);
      var e = t.queue, l = Bo.bind(null, nt, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: Pc,
    useDeferredValue: function(t, e) {
      var l = ce();
      return Ic(l, t, e);
    },
    useTransition: function() {
      var t = Fc(!1);
      return t = No.bind(
        null,
        nt,
        t.queue,
        !0,
        !1
      ), ce().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var a = nt, n = ce();
      if (dt) {
        if (l === void 0)
          throw Error(f(407));
        l = l();
      } else {
        if (l = e(), At === null)
          throw Error(f(349));
        (rt & 124) !== 0 || io(a, e, l);
      }
      n.memoizedState = l;
      var i = { value: l, getSnapshot: e };
      return n.queue = i, Ao(fo.bind(null, a, i, t), [
        t
      ]), a.flags |= 2048, xa(
        9,
        ju(),
        co.bind(
          null,
          a,
          i,
          l,
          e
        ),
        null
      ), l;
    },
    useId: function() {
      var t = ce(), e = At.identifierPrefix;
      if (dt) {
        var l = Pe, a = We;
        l = (a & ~(1 << 32 - me(a) - 1)).toString(32) + l, e = "«" + e + "R" + l, l = Hu++, 0 < l && (e += "H" + l.toString(32)), e += "»";
      } else
        l = ym++, e = "«" + e + "r" + l.toString(32) + "»";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: ef,
    useFormState: po,
    useActionState: po,
    useOptimistic: function(t) {
      var e = ce();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = l, e = lf.bind(
        null,
        nt,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: Jc,
    useCacheRefresh: function() {
      return ce().memoizedState = bm.bind(
        null,
        nt
      );
    }
  }, Go = {
    readContext: Wt,
    use: qu,
    useCallback: Mo,
    useContext: Wt,
    useEffect: Oo,
    useImperativeHandle: zo,
    useInsertionEffect: Ro,
    useLayoutEffect: _o,
    useMemo: Do,
    useReducer: Bu,
    useRef: To,
    useState: function() {
      return Bu(el);
    },
    useDebugValue: Pc,
    useDeferredValue: function(t, e) {
      var l = Ht();
      return Uo(
        l,
        pt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Bu(el)[0], e = Ht().memoizedState;
      return [
        typeof t == "boolean" ? t : En(t),
        e
      ];
    },
    useSyncExternalStore: uo,
    useId: Ho,
    useHostTransitionStatus: ef,
    useFormState: bo,
    useActionState: bo,
    useOptimistic: function(t, e) {
      var l = Ht();
      return oo(l, pt, t, e);
    },
    useMemoCache: Jc,
    useCacheRefresh: qo
  }, Em = {
    readContext: Wt,
    use: qu,
    useCallback: Mo,
    useContext: Wt,
    useEffect: Oo,
    useImperativeHandle: zo,
    useInsertionEffect: Ro,
    useLayoutEffect: _o,
    useMemo: Do,
    useReducer: $c,
    useRef: To,
    useState: function() {
      return $c(el);
    },
    useDebugValue: Pc,
    useDeferredValue: function(t, e) {
      var l = Ht();
      return pt === null ? Ic(l, t, e) : Uo(
        l,
        pt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = $c(el)[0], e = Ht().memoizedState;
      return [
        typeof t == "boolean" ? t : En(t),
        e
      ];
    },
    useSyncExternalStore: uo,
    useId: Ho,
    useHostTransitionStatus: ef,
    useFormState: Eo,
    useActionState: Eo,
    useOptimistic: function(t, e) {
      var l = Ht();
      return pt !== null ? oo(l, pt, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: Jc,
    useCacheRefresh: qo
  }, za = null, On = 0;
  function Xu(t) {
    var e = On;
    return On += 1, za === null && (za = []), Ws(za, t, e);
  }
  function Rn(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Qu(t, e) {
    throw e.$$typeof === D ? Error(f(525)) : (t = Object.prototype.toString.call(e), Error(
      f(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Xo(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Qo(t) {
    function e(S, p) {
      if (t) {
        var A = S.deletions;
        A === null ? (S.deletions = [p], S.flags |= 16) : A.push(p);
      }
    }
    function l(S, p) {
      if (!t) return null;
      for (; p !== null; )
        e(S, p), p = p.sibling;
      return null;
    }
    function a(S) {
      for (var p = /* @__PURE__ */ new Map(); S !== null; )
        S.key !== null ? p.set(S.key, S) : p.set(S.index, S), S = S.sibling;
      return p;
    }
    function n(S, p) {
      return S = Fe(S, p), S.index = 0, S.sibling = null, S;
    }
    function i(S, p, A) {
      return S.index = A, t ? (A = S.alternate, A !== null ? (A = A.index, A < p ? (S.flags |= 67108866, p) : A) : (S.flags |= 67108866, p)) : (S.flags |= 1048576, p);
    }
    function s(S) {
      return t && S.alternate === null && (S.flags |= 67108866), S;
    }
    function d(S, p, A, N) {
      return p === null || p.tag !== 6 ? (p = Ac(A, S.mode, N), p.return = S, p) : (p = n(p, A), p.return = S, p);
    }
    function m(S, p, A, N) {
      var Z = A.type;
      return Z === q ? M(
        S,
        p,
        A.props.children,
        N,
        A.key
      ) : p !== null && (p.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === zt && Xo(Z) === p.type) ? (p = n(p, A.props), Rn(p, A), p.return = S, p) : (p = Ru(
        A.type,
        A.key,
        A.props,
        null,
        S.mode,
        N
      ), Rn(p, A), p.return = S, p);
    }
    function O(S, p, A, N) {
      return p === null || p.tag !== 4 || p.stateNode.containerInfo !== A.containerInfo || p.stateNode.implementation !== A.implementation ? (p = Oc(A, S.mode, N), p.return = S, p) : (p = n(p, A.children || []), p.return = S, p);
    }
    function M(S, p, A, N, Z) {
      return p === null || p.tag !== 7 ? (p = Xl(
        A,
        S.mode,
        N,
        Z
      ), p.return = S, p) : (p = n(p, A), p.return = S, p);
    }
    function C(S, p, A) {
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
        return p = Ac(
          "" + p,
          S.mode,
          A
        ), p.return = S, p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case j:
            return A = Ru(
              p.type,
              p.key,
              p.props,
              null,
              S.mode,
              A
            ), Rn(A, p), A.return = S, A;
          case J:
            return p = Oc(
              p,
              S.mode,
              A
            ), p.return = S, p;
          case zt:
            var N = p._init;
            return p = N(p._payload), C(S, p, A);
        }
        if ($t(p) || kt(p))
          return p = Xl(
            p,
            S.mode,
            A,
            null
          ), p.return = S, p;
        if (typeof p.then == "function")
          return C(S, Xu(p), A);
        if (p.$$typeof === G)
          return C(
            S,
            Mu(S, p),
            A
          );
        Qu(S, p);
      }
      return null;
    }
    function R(S, p, A, N) {
      var Z = p !== null ? p.key : null;
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return Z !== null ? null : d(S, p, "" + A, N);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case j:
            return A.key === Z ? m(S, p, A, N) : null;
          case J:
            return A.key === Z ? O(S, p, A, N) : null;
          case zt:
            return Z = A._init, A = Z(A._payload), R(S, p, A, N);
        }
        if ($t(A) || kt(A))
          return Z !== null ? null : M(S, p, A, N, null);
        if (typeof A.then == "function")
          return R(
            S,
            p,
            Xu(A),
            N
          );
        if (A.$$typeof === G)
          return R(
            S,
            p,
            Mu(S, A),
            N
          );
        Qu(S, A);
      }
      return null;
    }
    function _(S, p, A, N, Z) {
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return S = S.get(A) || null, d(p, S, "" + N, Z);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case j:
            return S = S.get(
              N.key === null ? A : N.key
            ) || null, m(p, S, N, Z);
          case J:
            return S = S.get(
              N.key === null ? A : N.key
            ) || null, O(p, S, N, Z);
          case zt:
            var it = N._init;
            return N = it(N._payload), _(
              S,
              p,
              A,
              N,
              Z
            );
        }
        if ($t(N) || kt(N))
          return S = S.get(A) || null, M(p, S, N, Z, null);
        if (typeof N.then == "function")
          return _(
            S,
            p,
            A,
            Xu(N),
            Z
          );
        if (N.$$typeof === G)
          return _(
            S,
            p,
            A,
            Mu(p, N),
            Z
          );
        Qu(p, N);
      }
      return null;
    }
    function tt(S, p, A, N) {
      for (var Z = null, it = null, K = p, W = p = 0, Qt = null; K !== null && W < A.length; W++) {
        K.index > W ? (Qt = K, K = null) : Qt = K.sibling;
        var ot = R(
          S,
          K,
          A[W],
          N
        );
        if (ot === null) {
          K === null && (K = Qt);
          break;
        }
        t && K && ot.alternate === null && e(S, K), p = i(ot, p, W), it === null ? Z = ot : it.sibling = ot, it = ot, K = Qt;
      }
      if (W === A.length)
        return l(S, K), dt && Zl(S, W), Z;
      if (K === null) {
        for (; W < A.length; W++)
          K = C(S, A[W], N), K !== null && (p = i(
            K,
            p,
            W
          ), it === null ? Z = K : it.sibling = K, it = K);
        return dt && Zl(S, W), Z;
      }
      for (K = a(K); W < A.length; W++)
        Qt = _(
          K,
          S,
          W,
          A[W],
          N
        ), Qt !== null && (t && Qt.alternate !== null && K.delete(
          Qt.key === null ? W : Qt.key
        ), p = i(
          Qt,
          p,
          W
        ), it === null ? Z = Qt : it.sibling = Qt, it = Qt);
      return t && K.forEach(function(Cl) {
        return e(S, Cl);
      }), dt && Zl(S, W), Z;
    }
    function F(S, p, A, N) {
      if (A == null) throw Error(f(151));
      for (var Z = null, it = null, K = p, W = p = 0, Qt = null, ot = A.next(); K !== null && !ot.done; W++, ot = A.next()) {
        K.index > W ? (Qt = K, K = null) : Qt = K.sibling;
        var Cl = R(S, K, ot.value, N);
        if (Cl === null) {
          K === null && (K = Qt);
          break;
        }
        t && K && Cl.alternate === null && e(S, K), p = i(Cl, p, W), it === null ? Z = Cl : it.sibling = Cl, it = Cl, K = Qt;
      }
      if (ot.done)
        return l(S, K), dt && Zl(S, W), Z;
      if (K === null) {
        for (; !ot.done; W++, ot = A.next())
          ot = C(S, ot.value, N), ot !== null && (p = i(ot, p, W), it === null ? Z = ot : it.sibling = ot, it = ot);
        return dt && Zl(S, W), Z;
      }
      for (K = a(K); !ot.done; W++, ot = A.next())
        ot = _(K, S, W, ot.value, N), ot !== null && (t && ot.alternate !== null && K.delete(ot.key === null ? W : ot.key), p = i(ot, p, W), it === null ? Z = ot : it.sibling = ot, it = ot);
      return t && K.forEach(function(T1) {
        return e(S, T1);
      }), dt && Zl(S, W), Z;
    }
    function St(S, p, A, N) {
      if (typeof A == "object" && A !== null && A.type === q && A.key === null && (A = A.props.children), typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case j:
            t: {
              for (var Z = A.key; p !== null; ) {
                if (p.key === Z) {
                  if (Z = A.type, Z === q) {
                    if (p.tag === 7) {
                      l(
                        S,
                        p.sibling
                      ), N = n(
                        p,
                        A.props.children
                      ), N.return = S, S = N;
                      break t;
                    }
                  } else if (p.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === zt && Xo(Z) === p.type) {
                    l(
                      S,
                      p.sibling
                    ), N = n(p, A.props), Rn(N, A), N.return = S, S = N;
                    break t;
                  }
                  l(S, p);
                  break;
                } else e(S, p);
                p = p.sibling;
              }
              A.type === q ? (N = Xl(
                A.props.children,
                S.mode,
                N,
                A.key
              ), N.return = S, S = N) : (N = Ru(
                A.type,
                A.key,
                A.props,
                null,
                S.mode,
                N
              ), Rn(N, A), N.return = S, S = N);
            }
            return s(S);
          case J:
            t: {
              for (Z = A.key; p !== null; ) {
                if (p.key === Z)
                  if (p.tag === 4 && p.stateNode.containerInfo === A.containerInfo && p.stateNode.implementation === A.implementation) {
                    l(
                      S,
                      p.sibling
                    ), N = n(p, A.children || []), N.return = S, S = N;
                    break t;
                  } else {
                    l(S, p);
                    break;
                  }
                else e(S, p);
                p = p.sibling;
              }
              N = Oc(A, S.mode, N), N.return = S, S = N;
            }
            return s(S);
          case zt:
            return Z = A._init, A = Z(A._payload), St(
              S,
              p,
              A,
              N
            );
        }
        if ($t(A))
          return tt(
            S,
            p,
            A,
            N
          );
        if (kt(A)) {
          if (Z = kt(A), typeof Z != "function") throw Error(f(150));
          return A = Z.call(A), F(
            S,
            p,
            A,
            N
          );
        }
        if (typeof A.then == "function")
          return St(
            S,
            p,
            Xu(A),
            N
          );
        if (A.$$typeof === G)
          return St(
            S,
            p,
            Mu(S, A),
            N
          );
        Qu(S, A);
      }
      return typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint" ? (A = "" + A, p !== null && p.tag === 6 ? (l(S, p.sibling), N = n(p, A), N.return = S, S = N) : (l(S, p), N = Ac(A, S.mode, N), N.return = S, S = N), s(S)) : l(S, p);
    }
    return function(S, p, A, N) {
      try {
        On = 0;
        var Z = St(
          S,
          p,
          A,
          N
        );
        return za = null, Z;
      } catch (K) {
        if (K === mn || K === Uu) throw K;
        var it = ge(29, K, null, S.mode);
        return it.lanes = N, it.return = S, it;
      } finally {
      }
    };
  }
  var Ma = Qo(!0), Zo = Qo(!1), De = H(null), Le = null;
  function pl(t) {
    var e = t.alternate;
    Y(jt, jt.current & 1), Y(De, t), Le === null && (e === null || Oa.current !== null || e.memoizedState !== null) && (Le = t);
  }
  function Vo(t) {
    if (t.tag === 22) {
      if (Y(jt, jt.current), Y(De, t), Le === null) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Le = t);
      }
    } else bl();
  }
  function bl() {
    Y(jt, jt.current), Y(De, De.current);
  }
  function ll(t) {
    X(De), Le === t && (Le = null), X(jt);
  }
  var jt = H(0);
  function Zu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || Jf(l)))
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  function af(t, e, l, a) {
    e = t.memoizedState, l = l(a, e), l = l == null ? e : b({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var nf = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var a = Ee(), n = ml(a);
      n.payload = e, l != null && (n.callback = l), e = vl(t, n, a), e !== null && (Te(e, t, a), gn(e, t, a));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var a = Ee(), n = ml(a);
      n.tag = 1, n.payload = e, l != null && (n.callback = l), e = vl(t, n, a), e !== null && (Te(e, t, a), gn(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = Ee(), a = ml(l);
      a.tag = 2, e != null && (a.callback = e), e = vl(t, a, l), e !== null && (Te(e, t, l), gn(e, t, l));
    }
  };
  function Ko(t, e, l, a, n, i, s) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, i, s) : e.prototype && e.prototype.isPureReactComponent ? !cn(l, a) || !cn(n, i) : !0;
  }
  function Jo(t, e, l, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && nf.enqueueReplaceState(e, e.state, null);
  }
  function Wl(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e)
        a !== "ref" && (l[a] = e[a]);
    }
    if (t = t.defaultProps) {
      l === e && (l = b({}, l));
      for (var n in t)
        l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  var Vu = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function ko(t) {
    Vu(t);
  }
  function $o(t) {
    console.error(t);
  }
  function Fo(t) {
    Vu(t);
  }
  function Ku(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Wo(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function uf(t, e, l) {
    return l = ml(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Ku(t, e);
    }, l;
  }
  function Po(t) {
    return t = ml(t), t.tag = 3, t;
  }
  function Io(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = a.value;
      t.payload = function() {
        return n(i);
      }, t.callback = function() {
        Wo(e, l, a);
      };
    }
    var s = l.stateNode;
    s !== null && typeof s.componentDidCatch == "function" && (t.callback = function() {
      Wo(e, l, a), typeof n != "function" && (Rl === null ? Rl = /* @__PURE__ */ new Set([this]) : Rl.add(this));
      var d = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: d !== null ? d : ""
      });
    });
  }
  function Tm(t, e, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = l.alternate, e !== null && dn(
        e,
        l,
        n,
        !0
      ), l = De.current, l !== null) {
        switch (l.tag) {
          case 13:
            return Le === null ? Df() : l.alternate === null && Dt === 0 && (Dt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === wc ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), Nf(t, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === wc ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), Nf(t, a, n)), !1;
        }
        throw Error(f(435, l.tag));
      }
      return Nf(t, a, n), Df(), !1;
    }
    if (dt)
      return e = De.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== xc && (t = Error(f(422), { cause: a }), on(_e(t, l)))) : (a !== xc && (e = Error(f(423), {
        cause: a
      }), on(
        _e(e, l)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = _e(a, l), n = uf(
        t.stateNode,
        a,
        n
      ), Bc(t, n), Dt !== 4 && (Dt = 2)), !1;
    var i = Error(f(520), { cause: a });
    if (i = _e(i, l), Nn === null ? Nn = [i] : Nn.push(i), Dt !== 4 && (Dt = 2), e === null) return !0;
    a = _e(a, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = n & -n, l.lanes |= t, t = uf(l.stateNode, a, t), Bc(l, t), !1;
        case 1:
          if (e = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Rl === null || !Rl.has(i))))
            return l.flags |= 65536, n &= -n, l.lanes |= n, n = Po(n), Io(
              n,
              t,
              l,
              a
            ), Bc(l, n), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var td = Error(f(461)), Gt = !1;
  function Zt(t, e, l, a) {
    e.child = t === null ? Zo(e, null, l, a) : Ma(
      e,
      t.child,
      l,
      a
    );
  }
  function ed(t, e, l, a, n) {
    l = l.render;
    var i = e.ref;
    if ("ref" in a) {
      var s = {};
      for (var d in a)
        d !== "ref" && (s[d] = a[d]);
    } else s = a;
    return kl(e), a = Xc(
      t,
      e,
      l,
      s,
      i,
      n
    ), d = Qc(), t !== null && !Gt ? (Zc(t, e, n), al(t, e, n)) : (dt && d && Rc(e), e.flags |= 1, Zt(t, e, a, n), e.child);
  }
  function ld(t, e, l, a, n) {
    if (t === null) {
      var i = l.type;
      return typeof i == "function" && !Tc(i) && i.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = i, ad(
        t,
        e,
        i,
        a,
        n
      )) : (t = Ru(
        l.type,
        null,
        a,
        e,
        e.mode,
        n
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (i = t.child, !yf(t, n)) {
      var s = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : cn, l(s, a) && t.ref === e.ref)
        return al(t, e, n);
    }
    return e.flags |= 1, t = Fe(i, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function ad(t, e, l, a, n) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (cn(i, a) && t.ref === e.ref)
        if (Gt = !1, e.pendingProps = a = i, yf(t, n))
          (t.flags & 131072) !== 0 && (Gt = !0);
        else
          return e.lanes = t.lanes, al(t, e, n);
    }
    return cf(
      t,
      e,
      l,
      a,
      n
    );
  }
  function nd(t, e, l) {
    var a = e.pendingProps, n = a.children, i = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (a = i !== null ? i.baseLanes | l : l, t !== null) {
          for (n = e.child = t.child, i = 0; n !== null; )
            i = i | n.lanes | n.childLanes, n = n.sibling;
          e.childLanes = i & ~a;
        } else e.childLanes = 0, e.child = null;
        return ud(
          t,
          e,
          a,
          l
        );
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Du(
          e,
          i !== null ? i.cachePool : null
        ), i !== null ? lo(e, i) : Yc(), Vo(e);
      else
        return e.lanes = e.childLanes = 536870912, ud(
          t,
          e,
          i !== null ? i.baseLanes | l : l,
          l
        );
    } else
      i !== null ? (Du(e, i.cachePool), lo(e, i), bl(), e.memoizedState = null) : (t !== null && Du(e, null), Yc(), bl());
    return Zt(t, e, n, l), e.child;
  }
  function ud(t, e, l, a) {
    var n = Cc();
    return n = n === null ? null : { parent: Bt._currentValue, pool: n }, e.memoizedState = {
      baseLanes: l,
      cachePool: n
    }, t !== null && Du(e, null), Yc(), Vo(e), t !== null && dn(t, e, a, !0), null;
  }
  function Ju(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(f(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function cf(t, e, l, a, n) {
    return kl(e), l = Xc(
      t,
      e,
      l,
      a,
      void 0,
      n
    ), a = Qc(), t !== null && !Gt ? (Zc(t, e, n), al(t, e, n)) : (dt && a && Rc(e), e.flags |= 1, Zt(t, e, l, n), e.child);
  }
  function id(t, e, l, a, n, i) {
    return kl(e), e.updateQueue = null, l = no(
      e,
      a,
      l,
      n
    ), ao(t), a = Qc(), t !== null && !Gt ? (Zc(t, e, i), al(t, e, i)) : (dt && a && Rc(e), e.flags |= 1, Zt(t, e, l, i), e.child);
  }
  function cd(t, e, l, a, n) {
    if (kl(e), e.stateNode === null) {
      var i = ba, s = l.contextType;
      typeof s == "object" && s !== null && (i = Wt(s)), i = new l(a, i), e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = nf, e.stateNode = i, i._reactInternals = e, i = e.stateNode, i.props = a, i.state = e.memoizedState, i.refs = {}, Hc(e), s = l.contextType, i.context = typeof s == "object" && s !== null ? Wt(s) : ba, i.state = e.memoizedState, s = l.getDerivedStateFromProps, typeof s == "function" && (af(
        e,
        l,
        s,
        a
      ), i.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (s = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), s !== i.state && nf.enqueueReplaceState(i, i.state, null), bn(e, a, i, n), pn(), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      i = e.stateNode;
      var d = e.memoizedProps, m = Wl(l, d);
      i.props = m;
      var O = i.context, M = l.contextType;
      s = ba, typeof M == "object" && M !== null && (s = Wt(M));
      var C = l.getDerivedStateFromProps;
      M = typeof C == "function" || typeof i.getSnapshotBeforeUpdate == "function", d = e.pendingProps !== d, M || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (d || O !== s) && Jo(
        e,
        i,
        a,
        s
      ), yl = !1;
      var R = e.memoizedState;
      i.state = R, bn(e, a, i, n), pn(), O = e.memoizedState, d || R !== O || yl ? (typeof C == "function" && (af(
        e,
        l,
        C,
        a
      ), O = e.memoizedState), (m = yl || Ko(
        e,
        l,
        m,
        a,
        R,
        O,
        s
      )) ? (M || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = O), i.props = a, i.state = O, i.context = s, a = m) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      i = e.stateNode, qc(t, e), s = e.memoizedProps, M = Wl(l, s), i.props = M, C = e.pendingProps, R = i.context, O = l.contextType, m = ba, typeof O == "object" && O !== null && (m = Wt(O)), d = l.getDerivedStateFromProps, (O = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== C || R !== m) && Jo(
        e,
        i,
        a,
        m
      ), yl = !1, R = e.memoizedState, i.state = R, bn(e, a, i, n), pn();
      var _ = e.memoizedState;
      s !== C || R !== _ || yl || t !== null && t.dependencies !== null && zu(t.dependencies) ? (typeof d == "function" && (af(
        e,
        l,
        d,
        a
      ), _ = e.memoizedState), (M = yl || Ko(
        e,
        l,
        M,
        a,
        R,
        _,
        m
      ) || t !== null && t.dependencies !== null && zu(t.dependencies)) ? (O || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, _, m), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        _,
        m
      )), typeof i.componentDidUpdate == "function" && (e.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === t.memoizedProps && R === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && R === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = _), i.props = a, i.state = _, i.context = m, a = M) : (typeof i.componentDidUpdate != "function" || s === t.memoizedProps && R === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && R === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return i = a, Ju(t, e), a = (e.flags & 128) !== 0, i || a ? (i = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : i.render(), e.flags |= 1, t !== null && a ? (e.child = Ma(
      e,
      t.child,
      null,
      n
    ), e.child = Ma(
      e,
      null,
      l,
      n
    )) : Zt(t, e, l, n), e.memoizedState = i.state, t = e.child) : t = al(
      t,
      e,
      n
    ), t;
  }
  function fd(t, e, l, a) {
    return sn(), e.flags |= 256, Zt(t, e, l, a), e.child;
  }
  var ff = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function rf(t) {
    return { baseLanes: t, cachePool: ks() };
  }
  function sf(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= Ue), t;
  }
  function rd(t, e, l) {
    var a = e.pendingProps, n = !1, i = (e.flags & 128) !== 0, s;
    if ((s = i) || (s = t !== null && t.memoizedState === null ? !1 : (jt.current & 2) !== 0), s && (n = !0, e.flags &= -129), s = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (dt) {
        if (n ? pl(e) : bl(), dt) {
          var d = Mt, m;
          if (m = d) {
            t: {
              for (m = d, d = Ye; m.nodeType !== 8; ) {
                if (!d) {
                  d = null;
                  break t;
                }
                if (m = qe(
                  m.nextSibling
                ), m === null) {
                  d = null;
                  break t;
                }
              }
              d = m;
            }
            d !== null ? (e.memoizedState = {
              dehydrated: d,
              treeContext: Ql !== null ? { id: We, overflow: Pe } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, m = ge(
              18,
              null,
              null,
              0
            ), m.stateNode = d, m.return = e, e.child = m, le = e, Mt = null, m = !0) : m = !1;
          }
          m || Kl(e);
        }
        if (d = e.memoizedState, d !== null && (d = d.dehydrated, d !== null))
          return Jf(d) ? e.lanes = 32 : e.lanes = 536870912, null;
        ll(e);
      }
      return d = a.children, a = a.fallback, n ? (bl(), n = e.mode, d = ku(
        { mode: "hidden", children: d },
        n
      ), a = Xl(
        a,
        n,
        l,
        null
      ), d.return = e, a.return = e, d.sibling = a, e.child = d, n = e.child, n.memoizedState = rf(l), n.childLanes = sf(
        t,
        s,
        l
      ), e.memoizedState = ff, a) : (pl(e), of(e, d));
    }
    if (m = t.memoizedState, m !== null && (d = m.dehydrated, d !== null)) {
      if (i)
        e.flags & 256 ? (pl(e), e.flags &= -257, e = df(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (bl(), e.child = t.child, e.flags |= 128, e = null) : (bl(), n = a.fallback, d = e.mode, a = ku(
          { mode: "visible", children: a.children },
          d
        ), n = Xl(
          n,
          d,
          l,
          null
        ), n.flags |= 2, a.return = e, n.return = e, a.sibling = n, e.child = a, Ma(
          e,
          t.child,
          null,
          l
        ), a = e.child, a.memoizedState = rf(l), a.childLanes = sf(
          t,
          s,
          l
        ), e.memoizedState = ff, e = n);
      else if (pl(e), Jf(d)) {
        if (s = d.nextSibling && d.nextSibling.dataset, s) var O = s.dgst;
        s = O, a = Error(f(419)), a.stack = "", a.digest = s, on({ value: a, source: null, stack: null }), e = df(
          t,
          e,
          l
        );
      } else if (Gt || dn(t, e, l, !1), s = (l & t.childLanes) !== 0, Gt || s) {
        if (s = At, s !== null && (a = l & -l, a = (a & 42) !== 0 ? 1 : Ji(a), a = (a & (s.suspendedLanes | l)) !== 0 ? 0 : a, a !== 0 && a !== m.retryLane))
          throw m.retryLane = a, pa(t, a), Te(s, t, a), td;
        d.data === "$?" || Df(), e = df(
          t,
          e,
          l
        );
      } else
        d.data === "$?" ? (e.flags |= 192, e.child = t.child, e = null) : (t = m.treeContext, Mt = qe(
          d.nextSibling
        ), le = e, dt = !0, Vl = null, Ye = !1, t !== null && (ze[Me++] = We, ze[Me++] = Pe, ze[Me++] = Ql, We = t.id, Pe = t.overflow, Ql = e), e = of(
          e,
          a.children
        ), e.flags |= 4096);
      return e;
    }
    return n ? (bl(), n = a.fallback, d = e.mode, m = t.child, O = m.sibling, a = Fe(m, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = m.subtreeFlags & 65011712, O !== null ? n = Fe(O, n) : (n = Xl(
      n,
      d,
      l,
      null
    ), n.flags |= 2), n.return = e, a.return = e, a.sibling = n, e.child = a, a = n, n = e.child, d = t.child.memoizedState, d === null ? d = rf(l) : (m = d.cachePool, m !== null ? (O = Bt._currentValue, m = m.parent !== O ? { parent: O, pool: O } : m) : m = ks(), d = {
      baseLanes: d.baseLanes | l,
      cachePool: m
    }), n.memoizedState = d, n.childLanes = sf(
      t,
      s,
      l
    ), e.memoizedState = ff, a) : (pl(e), l = t.child, t = l.sibling, l = Fe(l, {
      mode: "visible",
      children: a.children
    }), l.return = e, l.sibling = null, t !== null && (s = e.deletions, s === null ? (e.deletions = [t], e.flags |= 16) : s.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function of(t, e) {
    return e = ku(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function ku(t, e) {
    return t = ge(22, t, null, e), t.lanes = 0, t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, t;
  }
  function df(t, e, l) {
    return Ma(e, t.child, null, l), t = of(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function sd(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Mc(t.return, e, l);
  }
  function hf(t, e, l, a, n) {
    var i = t.memoizedState;
    i === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: n
    } : (i.isBackwards = e, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = l, i.tailMode = n);
  }
  function od(t, e, l) {
    var a = e.pendingProps, n = a.revealOrder, i = a.tail;
    if (Zt(t, e, a.children, l), a = jt.current, (a & 2) !== 0)
      a = a & 1 | 2, e.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && sd(t, l, e);
          else if (t.tag === 19)
            sd(t, l, e);
          else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
              break t;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      a &= 1;
    }
    switch (Y(jt, a), n) {
      case "forwards":
        for (l = e.child, n = null; l !== null; )
          t = l.alternate, t !== null && Zu(t) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = e.child, e.child = null) : (n = l.sibling, l.sibling = null), hf(
          e,
          !1,
          n,
          l,
          i
        );
        break;
      case "backwards":
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (t = n.alternate, t !== null && Zu(t) === null) {
            e.child = n;
            break;
          }
          t = n.sibling, n.sibling = l, l = n, n = t;
        }
        hf(
          e,
          !0,
          l,
          null,
          i
        );
        break;
      case "together":
        hf(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function al(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), Ol |= e.lanes, (l & e.childLanes) === 0)
      if (t !== null) {
        if (dn(
          t,
          e,
          l,
          !1
        ), (l & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(f(153));
    if (e.child !== null) {
      for (t = e.child, l = Fe(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = Fe(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function yf(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && zu(t)));
  }
  function Am(t, e, l) {
    switch (e.tag) {
      case 3:
        Rt(e, e.stateNode.containerInfo), hl(e, Bt, t.memoizedState.cache), sn();
        break;
      case 27:
      case 5:
        Xi(e);
        break;
      case 4:
        Rt(e, e.stateNode.containerInfo);
        break;
      case 10:
        hl(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (pl(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? rd(t, e, l) : (pl(e), t = al(
            t,
            e,
            l
          ), t !== null ? t.sibling : null);
        pl(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (a = (l & e.childLanes) !== 0, a || (dn(
          t,
          e,
          l,
          !1
        ), a = (l & e.childLanes) !== 0), n) {
          if (a)
            return od(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), Y(jt, jt.current), a) break;
        return null;
      case 22:
      case 23:
        return e.lanes = 0, nd(t, e, l);
      case 24:
        hl(e, Bt, t.memoizedState.cache);
    }
    return al(t, e, l);
  }
  function dd(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Gt = !0;
      else {
        if (!yf(t, l) && (e.flags & 128) === 0)
          return Gt = !1, Am(
            t,
            e,
            l
          );
        Gt = (t.flags & 131072) !== 0;
      }
    else
      Gt = !1, dt && (e.flags & 1048576) !== 0 && Gs(e, xu, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          t = e.pendingProps;
          var a = e.elementType, n = a._init;
          if (a = n(a._payload), e.type = a, typeof a == "function")
            Tc(a) ? (t = Wl(a, t), e.tag = 1, e = cd(
              null,
              e,
              a,
              t,
              l
            )) : (e.tag = 0, e = cf(
              null,
              e,
              a,
              t,
              l
            ));
          else {
            if (a != null) {
              if (n = a.$$typeof, n === ut) {
                e.tag = 11, e = ed(
                  null,
                  e,
                  a,
                  t,
                  l
                );
                break t;
              } else if (n === k) {
                e.tag = 14, e = ld(
                  null,
                  e,
                  a,
                  t,
                  l
                );
                break t;
              }
            }
            throw e = ql(a) || a, Error(f(306, e, ""));
          }
        }
        return e;
      case 0:
        return cf(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 1:
        return a = e.type, n = Wl(
          a,
          e.pendingProps
        ), cd(
          t,
          e,
          a,
          n,
          l
        );
      case 3:
        t: {
          if (Rt(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(f(387));
          a = e.pendingProps;
          var i = e.memoizedState;
          n = i.element, qc(t, e), bn(e, a, null, l);
          var s = e.memoizedState;
          if (a = s.cache, hl(e, Bt, a), a !== i.cache && Dc(
            e,
            [Bt],
            l,
            !0
          ), pn(), a = s.element, i.isDehydrated)
            if (i = {
              element: a,
              isDehydrated: !1,
              cache: s.cache
            }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
              e = fd(
                t,
                e,
                a,
                l
              );
              break t;
            } else if (a !== n) {
              n = _e(
                Error(f(424)),
                e
              ), on(n), e = fd(
                t,
                e,
                a,
                l
              );
              break t;
            } else {
              switch (t = e.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (Mt = qe(t.firstChild), le = e, dt = !0, Vl = null, Ye = !0, l = Zo(
                e,
                null,
                a,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
          else {
            if (sn(), a === n) {
              e = al(
                t,
                e,
                l
              );
              break t;
            }
            Zt(
              t,
              e,
              a,
              l
            );
          }
          e = e.child;
        }
        return e;
      case 26:
        return Ju(t, e), t === null ? (l = vh(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : dt || (l = e.type, t = e.pendingProps, a = fi(
          et.current
        ).createElement(l), a[Ft] = e, a[ue] = t, Kt(a, l, t), Lt(a), e.stateNode = a) : e.memoizedState = vh(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Xi(e), t === null && dt && (a = e.stateNode = hh(
          e.type,
          e.pendingProps,
          et.current
        ), le = e, Ye = !0, n = Mt, zl(e.type) ? (kf = n, Mt = qe(
          a.firstChild
        )) : Mt = n), Zt(
          t,
          e,
          e.pendingProps.children,
          l
        ), Ju(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && dt && ((n = a = Mt) && (a = Wm(
          a,
          e.type,
          e.pendingProps,
          Ye
        ), a !== null ? (e.stateNode = a, le = e, Mt = qe(
          a.firstChild
        ), Ye = !1, n = !0) : n = !1), n || Kl(e)), Xi(e), n = e.type, i = e.pendingProps, s = t !== null ? t.memoizedProps : null, a = i.children, Zf(n, i) ? a = null : s !== null && Zf(n, s) && (e.flags |= 32), e.memoizedState !== null && (n = Xc(
          t,
          e,
          mm,
          null,
          null,
          l
        ), Gn._currentValue = n), Ju(t, e), Zt(t, e, a, l), e.child;
      case 6:
        return t === null && dt && ((t = l = Mt) && (l = Pm(
          l,
          e.pendingProps,
          Ye
        ), l !== null ? (e.stateNode = l, le = e, Mt = null, t = !0) : t = !1), t || Kl(e)), null;
      case 13:
        return rd(t, e, l);
      case 4:
        return Rt(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = Ma(
          e,
          null,
          a,
          l
        ) : Zt(
          t,
          e,
          a,
          l
        ), e.child;
      case 11:
        return ed(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 7:
        return Zt(
          t,
          e,
          e.pendingProps,
          l
        ), e.child;
      case 8:
        return Zt(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 12:
        return Zt(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 10:
        return a = e.pendingProps, hl(e, e.type, a.value), Zt(
          t,
          e,
          a.children,
          l
        ), e.child;
      case 9:
        return n = e.type._context, a = e.pendingProps.children, kl(e), n = Wt(n), a = a(n), e.flags |= 1, Zt(t, e, a, l), e.child;
      case 14:
        return ld(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return ad(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return od(t, e, l);
      case 31:
        return a = e.pendingProps, l = e.mode, a = {
          mode: a.mode,
          children: a.children
        }, t === null ? (l = ku(
          a,
          l
        ), l.ref = e.ref, e.child = l, l.return = e, e = l) : (l = Fe(t.child, a), l.ref = e.ref, e.child = l, l.return = e, e = l), e;
      case 22:
        return nd(t, e, l);
      case 24:
        return kl(e), a = Wt(Bt), t === null ? (n = Cc(), n === null && (n = At, i = Uc(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= l), n = i), e.memoizedState = {
          parent: a,
          cache: n
        }, Hc(e), hl(e, Bt, n)) : ((t.lanes & l) !== 0 && (qc(t, e), bn(e, null, null, l), pn()), n = t.memoizedState, i = e.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), hl(e, Bt, a)) : (a = i.cache, hl(e, Bt, a), a !== n.cache && Dc(
          e,
          [Bt],
          l,
          !0
        ))), Zt(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(f(156, e.tag));
  }
  function nl(t) {
    t.flags |= 4;
  }
  function hd(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Eh(e)) {
      if (e = De.current, e !== null && ((rt & 4194048) === rt ? Le !== null : (rt & 62914560) !== rt && (rt & 536870912) === 0 || e !== Le))
        throw vn = wc, $s;
      t.flags |= 8192;
    }
  }
  function $u(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Zr() : 536870912, t.lanes |= e, Ca |= e);
  }
  function _n(t, e) {
    if (!dt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), e = e.sibling;
          l === null ? t.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), l = l.sibling;
          a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
  }
  function xt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, l = 0, a = 0;
    if (e)
      for (var n = t.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = t, n = n.sibling;
    else
      for (n = t.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
    return t.subtreeFlags |= a, t.childLanes = l, e;
  }
  function Om(t, e, l) {
    var a = e.pendingProps;
    switch (_c(e), e.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return xt(e), null;
      case 1:
        return xt(e), null;
      case 3:
        return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), tl(Bt), rl(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (rn(e) ? nl(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Zs())), xt(e), null;
      case 26:
        return l = e.memoizedState, t === null ? (nl(e), l !== null ? (xt(e), hd(e, l)) : (xt(e), e.flags &= -16777217)) : l ? l !== t.memoizedState ? (nl(e), xt(e), hd(e, l)) : (xt(e), e.flags &= -16777217) : (t.memoizedProps !== a && nl(e), xt(e), e.flags &= -16777217), null;
      case 27:
        iu(e), l = et.current;
        var n = e.type;
        if (t !== null && e.stateNode != null)
          t.memoizedProps !== a && nl(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(f(166));
            return xt(e), null;
          }
          t = $.current, rn(e) ? Xs(e) : (t = hh(n, a, l), e.stateNode = t, nl(e));
        }
        return xt(e), null;
      case 5:
        if (iu(e), l = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && nl(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(f(166));
            return xt(e), null;
          }
          if (t = $.current, rn(e))
            Xs(e);
          else {
            switch (n = fi(
              et.current
            ), t) {
              case 1:
                t = n.createElementNS(
                  "http://www.w3.org/2000/svg",
                  l
                );
                break;
              case 2:
                t = n.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  l
                );
                break;
              default:
                switch (l) {
                  case "svg":
                    t = n.createElementNS(
                      "http://www.w3.org/2000/svg",
                      l
                    );
                    break;
                  case "math":
                    t = n.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    t = n.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                    break;
                  case "select":
                    t = typeof a.is == "string" ? n.createElement("select", { is: a.is }) : n.createElement("select"), a.multiple ? t.multiple = !0 : a.size && (t.size = a.size);
                    break;
                  default:
                    t = typeof a.is == "string" ? n.createElement(l, { is: a.is }) : n.createElement(l);
                }
            }
            t[Ft] = e, t[ue] = a;
            t: for (n = e.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6)
                t.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                n.child.return = n, n = n.child;
                continue;
              }
              if (n === e) break t;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === e)
                  break t;
                n = n.return;
              }
              n.sibling.return = n.return, n = n.sibling;
            }
            e.stateNode = t;
            t: switch (Kt(t, l, a), l) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && nl(e);
          }
        }
        return xt(e), e.flags &= -16777217, null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== a && nl(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(f(166));
          if (t = et.current, rn(e)) {
            if (t = e.stateNode, l = e.memoizedProps, a = null, n = le, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            t[Ft] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || ih(t.nodeValue, l)), t || Kl(e);
          } else
            t = fi(t).createTextNode(
              a
            ), t[Ft] = e, e.stateNode = t;
        }
        return xt(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = rn(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(f(318));
              if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(f(317));
              n[Ft] = e;
            } else
              sn(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            xt(e), n = !1;
          } else
            n = Zs(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return e.flags & 256 ? (ll(e), e) : (ll(e), null);
        }
        if (ll(e), (e.flags & 128) !== 0)
          return e.lanes = l, e;
        if (l = a !== null, t = t !== null && t.memoizedState !== null, l) {
          a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool);
          var i = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== n && (a.flags |= 2048);
        }
        return l !== t && l && (e.child.flags |= 8192), $u(e, e.updateQueue), xt(e), null;
      case 4:
        return rl(), t === null && Yf(e.stateNode.containerInfo), xt(e), null;
      case 10:
        return tl(e.type), xt(e), null;
      case 19:
        if (X(jt), n = e.memoizedState, n === null) return xt(e), null;
        if (a = (e.flags & 128) !== 0, i = n.rendering, i === null)
          if (a) _n(n, !1);
          else {
            if (Dt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (i = Zu(t), i !== null) {
                  for (e.flags |= 128, _n(n, !1), t = i.updateQueue, e.updateQueue = t, $u(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    Ls(l, t), l = l.sibling;
                  return Y(
                    jt,
                    jt.current & 1 | 2
                  ), e.child;
                }
                t = t.sibling;
              }
            n.tail !== null && je() > Pu && (e.flags |= 128, a = !0, _n(n, !1), e.lanes = 4194304);
          }
        else {
          if (!a)
            if (t = Zu(i), t !== null) {
              if (e.flags |= 128, a = !0, t = t.updateQueue, e.updateQueue = t, $u(e, t), _n(n, !0), n.tail === null && n.tailMode === "hidden" && !i.alternate && !dt)
                return xt(e), null;
            } else
              2 * je() - n.renderingStartTime > Pu && l !== 536870912 && (e.flags |= 128, a = !0, _n(n, !1), e.lanes = 4194304);
          n.isBackwards ? (i.sibling = e.child, e.child = i) : (t = n.last, t !== null ? t.sibling = i : e.child = i, n.last = i);
        }
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = je(), e.sibling = null, t = jt.current, Y(jt, a ? t & 1 | 2 : t & 1), e) : (xt(e), null);
      case 22:
      case 23:
        return ll(e), Lc(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (xt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : xt(e), l = e.updateQueue, l !== null && $u(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && X($l), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), tl(Bt), xt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, e.tag));
  }
  function Rm(t, e) {
    switch (_c(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return tl(Bt), rl(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return iu(e), null;
      case 13:
        if (ll(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(f(340));
          sn();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return X(jt), null;
      case 4:
        return rl(), null;
      case 10:
        return tl(e.type), null;
      case 22:
      case 23:
        return ll(e), Lc(), t !== null && X($l), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return tl(Bt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function yd(t, e) {
    switch (_c(e), e.tag) {
      case 3:
        tl(Bt), rl();
        break;
      case 26:
      case 27:
      case 5:
        iu(e);
        break;
      case 4:
        rl();
        break;
      case 13:
        ll(e);
        break;
      case 19:
        X(jt);
        break;
      case 10:
        tl(e.type);
        break;
      case 22:
      case 23:
        ll(e), Lc(), t !== null && X($l);
        break;
      case 24:
        tl(Bt);
    }
  }
  function xn(t, e) {
    try {
      var l = e.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var i = l.create, s = l.inst;
            a = i(), s.destroy = a;
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (d) {
      Tt(e, e.return, d);
    }
  }
  function Sl(t, e, l) {
    try {
      var a = e.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & t) === t) {
            var s = a.inst, d = s.destroy;
            if (d !== void 0) {
              s.destroy = void 0, n = e;
              var m = l, O = d;
              try {
                O();
              } catch (M) {
                Tt(
                  n,
                  m,
                  M
                );
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (M) {
      Tt(e, e.return, M);
    }
  }
  function md(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        eo(e, l);
      } catch (a) {
        Tt(t, t.return, a);
      }
    }
  }
  function vd(t, e, l) {
    l.props = Wl(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      Tt(t, e, a);
    }
  }
  function zn(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? t.refCleanup = l(a) : l.current = a;
      }
    } catch (n) {
      Tt(t, e, n);
    }
  }
  function Ge(t, e) {
    var l = t.ref, a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          Tt(t, e, n);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          Tt(t, e, n);
        }
      else l.current = null;
  }
  function gd(t) {
    var e = t.type, l = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      Tt(t, t.return, n);
    }
  }
  function mf(t, e, l) {
    try {
      var a = t.stateNode;
      Km(a, t.type, l, e), a[ue] = e;
    } catch (n) {
      Tt(t, t.return, n);
    }
  }
  function pd(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && zl(t.type) || t.tag === 4;
  }
  function vf(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || pd(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && zl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function gf(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = ci));
    else if (a !== 4 && (a === 27 && zl(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (gf(t, e, l), t = t.sibling; t !== null; )
        gf(t, e, l), t = t.sibling;
  }
  function Fu(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (a !== 4 && (a === 27 && zl(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (Fu(t, e, l), t = t.sibling; t !== null; )
        Fu(t, e, l), t = t.sibling;
  }
  function bd(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      Kt(e, a, l), e[Ft] = t, e[ue] = l;
    } catch (i) {
      Tt(t, t.return, i);
    }
  }
  var ul = !1, Nt = !1, pf = !1, Sd = typeof WeakSet == "function" ? WeakSet : Set, Xt = null;
  function _m(t, e) {
    if (t = t.containerInfo, Xf = yi, t = Ds(t), mc(t)) {
      if ("selectionStart" in t)
        var l = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          l = (l = t.ownerDocument) && l.defaultView || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset, i = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, i.nodeType;
            } catch {
              l = null;
              break t;
            }
            var s = 0, d = -1, m = -1, O = 0, M = 0, C = t, R = null;
            e: for (; ; ) {
              for (var _; C !== l || n !== 0 && C.nodeType !== 3 || (d = s + n), C !== i || a !== 0 && C.nodeType !== 3 || (m = s + a), C.nodeType === 3 && (s += C.nodeValue.length), (_ = C.firstChild) !== null; )
                R = C, C = _;
              for (; ; ) {
                if (C === t) break e;
                if (R === l && ++O === n && (d = s), R === i && ++M === a && (m = s), (_ = C.nextSibling) !== null) break;
                C = R, R = C.parentNode;
              }
              C = _;
            }
            l = d === -1 || m === -1 ? null : { start: d, end: m };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Qf = { focusedElem: t, selectionRange: l }, yi = !1, Xt = e; Xt !== null; )
      if (e = Xt, t = e.child, (e.subtreeFlags & 1024) !== 0 && t !== null)
        t.return = e, Xt = t;
      else
        for (; Xt !== null; ) {
          switch (e = Xt, i = e.alternate, t = e.flags, e.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && i !== null) {
                t = void 0, l = e, n = i.memoizedProps, i = i.memoizedState, a = l.stateNode;
                try {
                  var tt = Wl(
                    l.type,
                    n,
                    l.elementType === l.type
                  );
                  t = a.getSnapshotBeforeUpdate(
                    tt,
                    i
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch (F) {
                  Tt(
                    l,
                    l.return,
                    F
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9)
                  Kf(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Kf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(f(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, Xt = t;
            break;
          }
          Xt = e.return;
        }
  }
  function Ed(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        El(t, l), a & 4 && xn(5, l);
        break;
      case 1:
        if (El(t, l), a & 4)
          if (t = l.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (s) {
              Tt(l, l.return, s);
            }
          else {
            var n = Wl(
              l.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                n,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (s) {
              Tt(
                l,
                l.return,
                s
              );
            }
          }
        a & 64 && md(l), a & 512 && zn(l, l.return);
        break;
      case 3:
        if (El(t, l), a & 64 && (t = l.updateQueue, t !== null)) {
          if (e = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            eo(t, e);
          } catch (s) {
            Tt(l, l.return, s);
          }
        }
        break;
      case 27:
        e === null && a & 4 && bd(l);
      case 26:
      case 5:
        El(t, l), e === null && a & 4 && gd(l), a & 512 && zn(l, l.return);
        break;
      case 12:
        El(t, l);
        break;
      case 13:
        El(t, l), a & 4 && Od(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = Hm.bind(
          null,
          l
        ), Im(t, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || ul, !a) {
          e = e !== null && e.memoizedState !== null || Nt, n = ul;
          var i = Nt;
          ul = a, (Nt = e) && !i ? Tl(
            t,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : El(t, l), ul = n, Nt = i;
        }
        break;
      case 30:
        break;
      default:
        El(t, l);
    }
  }
  function Td(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Td(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Fi(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var _t = null, fe = !1;
  function il(t, e, l) {
    for (l = l.child; l !== null; )
      Ad(t, e, l), l = l.sibling;
  }
  function Ad(t, e, l) {
    if (ye && typeof ye.onCommitFiberUnmount == "function")
      try {
        ye.onCommitFiberUnmount(ka, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Nt || Ge(l, e), il(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Nt || Ge(l, e);
        var a = _t, n = fe;
        zl(l.type) && (_t = l.stateNode, fe = !1), il(
          t,
          e,
          l
        ), Bn(l.stateNode), _t = a, fe = n;
        break;
      case 5:
        Nt || Ge(l, e);
      case 6:
        if (a = _t, n = fe, _t = null, il(
          t,
          e,
          l
        ), _t = a, fe = n, _t !== null)
          if (fe)
            try {
              (_t.nodeType === 9 ? _t.body : _t.nodeName === "HTML" ? _t.ownerDocument.body : _t).removeChild(l.stateNode);
            } catch (i) {
              Tt(
                l,
                e,
                i
              );
            }
          else
            try {
              _t.removeChild(l.stateNode);
            } catch (i) {
              Tt(
                l,
                e,
                i
              );
            }
        break;
      case 18:
        _t !== null && (fe ? (t = _t, oh(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), Vn(t)) : oh(_t, l.stateNode));
        break;
      case 4:
        a = _t, n = fe, _t = l.stateNode.containerInfo, fe = !0, il(
          t,
          e,
          l
        ), _t = a, fe = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Nt || Sl(2, l, e), Nt || Sl(4, l, e), il(
          t,
          e,
          l
        );
        break;
      case 1:
        Nt || (Ge(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && vd(
          l,
          e,
          a
        )), il(
          t,
          e,
          l
        );
        break;
      case 21:
        il(
          t,
          e,
          l
        );
        break;
      case 22:
        Nt = (a = Nt) || l.memoizedState !== null, il(
          t,
          e,
          l
        ), Nt = a;
        break;
      default:
        il(
          t,
          e,
          l
        );
    }
  }
  function Od(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Vn(t);
      } catch (l) {
        Tt(e, e.return, l);
      }
  }
  function xm(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Sd()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Sd()), e;
      default:
        throw Error(f(435, t.tag));
    }
  }
  function bf(t, e) {
    var l = xm(t);
    e.forEach(function(a) {
      var n = qm.bind(null, t, a);
      l.has(a) || (l.add(a), a.then(n, n));
    });
  }
  function pe(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a], i = t, s = e, d = s;
        t: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (zl(d.type)) {
                _t = d.stateNode, fe = !1;
                break t;
              }
              break;
            case 5:
              _t = d.stateNode, fe = !1;
              break t;
            case 3:
            case 4:
              _t = d.stateNode.containerInfo, fe = !0;
              break t;
          }
          d = d.return;
        }
        if (_t === null) throw Error(f(160));
        Ad(i, s, n), _t = null, fe = !1, i = n.alternate, i !== null && (i.return = null), n.return = null;
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; )
        Rd(e, t), e = e.sibling;
  }
  var He = null;
  function Rd(t, e) {
    var l = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        pe(e, t), be(t), a & 4 && (Sl(3, t, t.return), xn(3, t), Sl(5, t, t.return));
        break;
      case 1:
        pe(e, t), be(t), a & 512 && (Nt || l === null || Ge(l, l.return)), a & 64 && ul && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = He;
        if (pe(e, t), be(t), a & 512 && (Nt || l === null || Ge(l, l.return)), a & 4) {
          var i = l !== null ? l.memoizedState : null;
          if (a = t.memoizedState, l === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type, l = t.memoizedProps, n = n.ownerDocument || n;
                  e: switch (a) {
                    case "title":
                      i = n.getElementsByTagName("title")[0], (!i || i[Wa] || i[Ft] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(a), n.head.insertBefore(
                        i,
                        n.querySelector("head > title")
                      )), Kt(i, a, l), i[Ft] = t, Lt(i), a = i;
                      break t;
                    case "link":
                      var s = bh(
                        "link",
                        "href",
                        n
                      ).get(a + (l.href || ""));
                      if (s) {
                        for (var d = 0; d < s.length; d++)
                          if (i = s[d], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            s.splice(d, 1);
                            break e;
                          }
                      }
                      i = n.createElement(a), Kt(i, a, l), n.head.appendChild(i);
                      break;
                    case "meta":
                      if (s = bh(
                        "meta",
                        "content",
                        n
                      ).get(a + (l.content || ""))) {
                        for (d = 0; d < s.length; d++)
                          if (i = s[d], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            s.splice(d, 1);
                            break e;
                          }
                      }
                      i = n.createElement(a), Kt(i, a, l), n.head.appendChild(i);
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  i[Ft] = t, Lt(i), a = i;
                }
                t.stateNode = a;
              } else
                Sh(
                  n,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = ph(
                n,
                a,
                t.memoizedProps
              );
          else
            i !== a ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, a === null ? Sh(
              n,
              t.type,
              t.stateNode
            ) : ph(
              n,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && mf(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        pe(e, t), be(t), a & 512 && (Nt || l === null || Ge(l, l.return)), l !== null && a & 4 && mf(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (pe(e, t), be(t), a & 512 && (Nt || l === null || Ge(l, l.return)), t.flags & 32) {
          n = t.stateNode;
          try {
            oa(n, "");
          } catch (_) {
            Tt(t, t.return, _);
          }
        }
        a & 4 && t.stateNode != null && (n = t.memoizedProps, mf(
          t,
          n,
          l !== null ? l.memoizedProps : n
        )), a & 1024 && (pf = !0);
        break;
      case 6:
        if (pe(e, t), be(t), a & 4) {
          if (t.stateNode === null)
            throw Error(f(162));
          a = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = a;
          } catch (_) {
            Tt(t, t.return, _);
          }
        }
        break;
      case 3:
        if (oi = null, n = He, He = ri(e.containerInfo), pe(e, t), He = n, be(t), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Vn(e.containerInfo);
          } catch (_) {
            Tt(t, t.return, _);
          }
        pf && (pf = !1, _d(t));
        break;
      case 4:
        a = He, He = ri(
          t.stateNode.containerInfo
        ), pe(e, t), be(t), He = a;
        break;
      case 12:
        pe(e, t), be(t);
        break;
      case 13:
        pe(e, t), be(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Rf = je()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, bf(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var m = l !== null && l.memoizedState !== null, O = ul, M = Nt;
        if (ul = O || n, Nt = M || m, pe(e, t), Nt = M, ul = O, be(t), a & 8192)
          t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || m || ul || Nt || Pl(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                m = l = e;
                try {
                  if (i = m.stateNode, n)
                    s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                  else {
                    d = m.stateNode;
                    var C = m.memoizedProps.style, R = C != null && C.hasOwnProperty("display") ? C.display : null;
                    d.style.display = R == null || typeof R == "boolean" ? "" : ("" + R).trim();
                  }
                } catch (_) {
                  Tt(m, m.return, _);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                m = e;
                try {
                  m.stateNode.nodeValue = n ? "" : m.memoizedProps;
                } catch (_) {
                  Tt(m, m.return, _);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), e = e.return;
            }
            l === e && (l = null), e.sibling.return = e.return, e = e.sibling;
          }
        a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, bf(t, l))));
        break;
      case 19:
        pe(e, t), be(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, bf(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        pe(e, t), be(t);
    }
  }
  function be(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (pd(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode, i = vf(t);
            Fu(t, i, n);
            break;
          case 5:
            var s = l.stateNode;
            l.flags & 32 && (oa(s, ""), l.flags &= -33);
            var d = vf(t);
            Fu(t, d, s);
            break;
          case 3:
          case 4:
            var m = l.stateNode.containerInfo, O = vf(t);
            gf(
              t,
              O,
              m
            );
            break;
          default:
            throw Error(f(161));
        }
      } catch (M) {
        Tt(t, t.return, M);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function _d(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        _d(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function El(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Ed(t, e.alternate, e), e = e.sibling;
  }
  function Pl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Sl(4, e, e.return), Pl(e);
          break;
        case 1:
          Ge(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && vd(
            e,
            e.return,
            l
          ), Pl(e);
          break;
        case 27:
          Bn(e.stateNode);
        case 26:
        case 5:
          Ge(e, e.return), Pl(e);
          break;
        case 22:
          e.memoizedState === null && Pl(e);
          break;
        case 30:
          Pl(e);
          break;
        default:
          Pl(e);
      }
      t = t.sibling;
    }
  }
  function Tl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate, n = t, i = e, s = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Tl(
            n,
            i,
            l
          ), xn(4, i);
          break;
        case 1:
          if (Tl(
            n,
            i,
            l
          ), a = i, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (O) {
              Tt(a, a.return, O);
            }
          if (a = i, n = a.updateQueue, n !== null) {
            var d = a.stateNode;
            try {
              var m = n.shared.hiddenCallbacks;
              if (m !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++)
                  to(m[n], d);
            } catch (O) {
              Tt(a, a.return, O);
            }
          }
          l && s & 64 && md(i), zn(i, i.return);
          break;
        case 27:
          bd(i);
        case 26:
        case 5:
          Tl(
            n,
            i,
            l
          ), l && a === null && s & 4 && gd(i), zn(i, i.return);
          break;
        case 12:
          Tl(
            n,
            i,
            l
          );
          break;
        case 13:
          Tl(
            n,
            i,
            l
          ), l && s & 4 && Od(n, i);
          break;
        case 22:
          i.memoizedState === null && Tl(
            n,
            i,
            l
          ), zn(i, i.return);
          break;
        case 30:
          break;
        default:
          Tl(
            n,
            i,
            l
          );
      }
      e = e.sibling;
    }
  }
  function Sf(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && hn(l));
  }
  function Ef(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && hn(t));
  }
  function Xe(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        xd(
          t,
          e,
          l,
          a
        ), e = e.sibling;
  }
  function xd(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Xe(
          t,
          e,
          l,
          a
        ), n & 2048 && xn(9, e);
        break;
      case 1:
        Xe(
          t,
          e,
          l,
          a
        );
        break;
      case 3:
        Xe(
          t,
          e,
          l,
          a
        ), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && hn(t)));
        break;
      case 12:
        if (n & 2048) {
          Xe(
            t,
            e,
            l,
            a
          ), t = e.stateNode;
          try {
            var i = e.memoizedProps, s = i.id, d = i.onPostCommit;
            typeof d == "function" && d(
              s,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (m) {
            Tt(e, e.return, m);
          }
        } else
          Xe(
            t,
            e,
            l,
            a
          );
        break;
      case 13:
        Xe(
          t,
          e,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        i = e.stateNode, s = e.alternate, e.memoizedState !== null ? i._visibility & 2 ? Xe(
          t,
          e,
          l,
          a
        ) : Mn(t, e) : i._visibility & 2 ? Xe(
          t,
          e,
          l,
          a
        ) : (i._visibility |= 2, Da(
          t,
          e,
          l,
          a,
          (e.subtreeFlags & 10256) !== 0
        )), n & 2048 && Sf(s, e);
        break;
      case 24:
        Xe(
          t,
          e,
          l,
          a
        ), n & 2048 && Ef(e.alternate, e);
        break;
      default:
        Xe(
          t,
          e,
          l,
          a
        );
    }
  }
  function Da(t, e, l, a, n) {
    for (n = n && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var i = t, s = e, d = l, m = a, O = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Da(
            i,
            s,
            d,
            m,
            n
          ), xn(8, s);
          break;
        case 23:
          break;
        case 22:
          var M = s.stateNode;
          s.memoizedState !== null ? M._visibility & 2 ? Da(
            i,
            s,
            d,
            m,
            n
          ) : Mn(
            i,
            s
          ) : (M._visibility |= 2, Da(
            i,
            s,
            d,
            m,
            n
          )), n && O & 2048 && Sf(
            s.alternate,
            s
          );
          break;
        case 24:
          Da(
            i,
            s,
            d,
            m,
            n
          ), n && O & 2048 && Ef(s.alternate, s);
          break;
        default:
          Da(
            i,
            s,
            d,
            m,
            n
          );
      }
      e = e.sibling;
    }
  }
  function Mn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, a = e, n = a.flags;
        switch (a.tag) {
          case 22:
            Mn(l, a), n & 2048 && Sf(
              a.alternate,
              a
            );
            break;
          case 24:
            Mn(l, a), n & 2048 && Ef(a.alternate, a);
            break;
          default:
            Mn(l, a);
        }
        e = e.sibling;
      }
  }
  var Dn = 8192;
  function Ua(t) {
    if (t.subtreeFlags & Dn)
      for (t = t.child; t !== null; )
        zd(t), t = t.sibling;
  }
  function zd(t) {
    switch (t.tag) {
      case 26:
        Ua(t), t.flags & Dn && t.memoizedState !== null && d1(
          He,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Ua(t);
        break;
      case 3:
      case 4:
        var e = He;
        He = ri(t.stateNode.containerInfo), Ua(t), He = e;
        break;
      case 22:
        t.memoizedState === null && (e = t.alternate, e !== null && e.memoizedState !== null ? (e = Dn, Dn = 16777216, Ua(t), Dn = e) : Ua(t));
        break;
      default:
        Ua(t);
    }
  }
  function Md(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Un(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          Xt = a, Ud(
            a,
            t
          );
        }
      Md(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Dd(t), t = t.sibling;
  }
  function Dd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Un(t), t.flags & 2048 && Sl(9, t, t.return);
        break;
      case 3:
        Un(t);
        break;
      case 12:
        Un(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Wu(t)) : Un(t);
        break;
      default:
        Un(t);
    }
  }
  function Wu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          Xt = a, Ud(
            a,
            t
          );
        }
      Md(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Sl(8, e, e.return), Wu(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, Wu(e));
          break;
        default:
          Wu(e);
      }
      t = t.sibling;
    }
  }
  function Ud(t, e) {
    for (; Xt !== null; ) {
      var l = Xt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Sl(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          hn(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, Xt = a;
      else
        t: for (l = t; Xt !== null; ) {
          a = Xt;
          var n = a.sibling, i = a.return;
          if (Td(a), a === l) {
            Xt = null;
            break t;
          }
          if (n !== null) {
            n.return = i, Xt = n;
            break t;
          }
          Xt = i;
        }
    }
  }
  var zm = {
    getCacheForType: function(t) {
      var e = Wt(Bt), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    }
  }, Mm = typeof WeakMap == "function" ? WeakMap : Map, vt = 0, At = null, ct = null, rt = 0, gt = 0, Se = null, Al = !1, Na = !1, Tf = !1, cl = 0, Dt = 0, Ol = 0, Il = 0, Af = 0, Ue = 0, Ca = 0, Nn = null, re = null, Of = !1, Rf = 0, Pu = 1 / 0, Iu = null, Rl = null, Vt = 0, _l = null, wa = null, Ha = 0, _f = 0, xf = null, Nd = null, Cn = 0, zf = null;
  function Ee() {
    if ((vt & 2) !== 0 && rt !== 0)
      return rt & -rt;
    if (U.T !== null) {
      var t = Ta;
      return t !== 0 ? t : Hf();
    }
    return Jr();
  }
  function Cd() {
    Ue === 0 && (Ue = (rt & 536870912) === 0 || dt ? Qr() : 536870912);
    var t = De.current;
    return t !== null && (t.flags |= 32), Ue;
  }
  function Te(t, e, l) {
    (t === At && (gt === 2 || gt === 9) || t.cancelPendingCommit !== null) && (qa(t, 0), xl(
      t,
      rt,
      Ue,
      !1
    )), Fa(t, l), ((vt & 2) === 0 || t !== At) && (t === At && ((vt & 2) === 0 && (Il |= l), Dt === 4 && xl(
      t,
      rt,
      Ue,
      !1
    )), Qe(t));
  }
  function wd(t, e, l) {
    if ((vt & 6) !== 0) throw Error(f(327));
    var a = !l && (e & 124) === 0 && (e & t.expiredLanes) === 0 || $a(t, e), n = a ? Nm(t, e) : Uf(t, e, !0), i = a;
    do {
      if (n === 0) {
        Na && !a && xl(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, i && !Dm(l)) {
          n = Uf(t, e, !1), i = !1;
          continue;
        }
        if (n === 2) {
          if (i = e, t.errorRecoveryDisabledLanes & i)
            var s = 0;
          else
            s = t.pendingLanes & -536870913, s = s !== 0 ? s : s & 536870912 ? 536870912 : 0;
          if (s !== 0) {
            e = s;
            t: {
              var d = t;
              n = Nn;
              var m = d.current.memoizedState.isDehydrated;
              if (m && (qa(d, s).flags |= 256), s = Uf(
                d,
                s,
                !1
              ), s !== 2) {
                if (Tf && !m) {
                  d.errorRecoveryDisabledLanes |= i, Il |= i, n = 4;
                  break t;
                }
                i = re, re = n, i !== null && (re === null ? re = i : re.push.apply(
                  re,
                  i
                ));
              }
              n = s;
            }
            if (i = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          qa(t, 0), xl(t, e, 0, !0);
          break;
        }
        t: {
          switch (a = t, i = n, i) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              xl(
                a,
                e,
                Ue,
                !Al
              );
              break t;
            case 2:
              re = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((e & 62914560) === e && (n = Rf + 300 - je(), 10 < n)) {
            if (xl(
              a,
              e,
              Ue,
              !Al
            ), su(a, 0, !0) !== 0) break t;
            a.timeoutHandle = rh(
              Hd.bind(
                null,
                a,
                l,
                re,
                Iu,
                Of,
                e,
                Ue,
                Il,
                Ca,
                Al,
                i,
                2,
                -0,
                0
              ),
              n
            );
            break t;
          }
          Hd(
            a,
            l,
            re,
            Iu,
            Of,
            e,
            Ue,
            Il,
            Ca,
            Al,
            i,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Qe(t);
  }
  function Hd(t, e, l, a, n, i, s, d, m, O, M, C, R, _) {
    if (t.timeoutHandle = -1, C = e.subtreeFlags, (C & 8192 || (C & 16785408) === 16785408) && (Ln = { stylesheets: null, count: 0, unsuspend: o1 }, zd(e), C = h1(), C !== null)) {
      t.cancelPendingCommit = C(
        Xd.bind(
          null,
          t,
          e,
          i,
          l,
          a,
          n,
          s,
          d,
          m,
          M,
          1,
          R,
          _
        )
      ), xl(t, i, s, !O);
      return;
    }
    Xd(
      t,
      e,
      i,
      l,
      a,
      n,
      s,
      d,
      m
    );
  }
  function Dm(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var n = l[a], i = n.getSnapshot;
          n = n.value;
          try {
            if (!ve(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = e.child, e.subtreeFlags & 16384 && l !== null)
        l.return = e, e = l;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function xl(t, e, l, a) {
    e &= ~Af, e &= ~Il, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var n = e; 0 < n; ) {
      var i = 31 - me(n), s = 1 << i;
      a[i] = -1, n &= ~s;
    }
    l !== 0 && Vr(t, l, e);
  }
  function ti() {
    return (vt & 6) === 0 ? (wn(0), !1) : !0;
  }
  function Mf() {
    if (ct !== null) {
      if (gt === 0)
        var t = ct.return;
      else
        t = ct, Ie = Jl = null, Vc(t), za = null, On = 0, t = ct;
      for (; t !== null; )
        yd(t.alternate, t), t = t.return;
      ct = null;
    }
  }
  function qa(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, km(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), Mf(), At = t, ct = l = Fe(t.current, null), rt = e, gt = 0, Se = null, Al = !1, Na = $a(t, e), Tf = !1, Ca = Ue = Af = Il = Ol = Dt = 0, re = Nn = null, Of = !1, (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - me(a), i = 1 << n;
        e |= t[n], a &= ~i;
      }
    return cl = e, Tu(), l;
  }
  function qd(t, e) {
    nt = null, U.H = Gu, e === mn || e === Uu ? (e = Ps(), gt = 3) : e === $s ? (e = Ps(), gt = 4) : gt = e === td ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Se = e, ct === null && (Dt = 1, Ku(
      t,
      _e(e, t.current)
    ));
  }
  function Bd() {
    var t = U.H;
    return U.H = Gu, t === null ? Gu : t;
  }
  function jd() {
    var t = U.A;
    return U.A = zm, t;
  }
  function Df() {
    Dt = 4, Al || (rt & 4194048) !== rt && De.current !== null || (Na = !0), (Ol & 134217727) === 0 && (Il & 134217727) === 0 || At === null || xl(
      At,
      rt,
      Ue,
      !1
    );
  }
  function Uf(t, e, l) {
    var a = vt;
    vt |= 2;
    var n = Bd(), i = jd();
    (At !== t || rt !== e) && (Iu = null, qa(t, e)), e = !1;
    var s = Dt;
    t: do
      try {
        if (gt !== 0 && ct !== null) {
          var d = ct, m = Se;
          switch (gt) {
            case 8:
              Mf(), s = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              De.current === null && (e = !0);
              var O = gt;
              if (gt = 0, Se = null, Ba(t, d, m, O), l && Na) {
                s = 0;
                break t;
              }
              break;
            default:
              O = gt, gt = 0, Se = null, Ba(t, d, m, O);
          }
        }
        Um(), s = Dt;
        break;
      } catch (M) {
        qd(t, M);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Ie = Jl = null, vt = a, U.H = n, U.A = i, ct === null && (At = null, rt = 0, Tu()), s;
  }
  function Um() {
    for (; ct !== null; ) Yd(ct);
  }
  function Nm(t, e) {
    var l = vt;
    vt |= 2;
    var a = Bd(), n = jd();
    At !== t || rt !== e ? (Iu = null, Pu = je() + 500, qa(t, e)) : Na = $a(
      t,
      e
    );
    t: do
      try {
        if (gt !== 0 && ct !== null) {
          e = ct;
          var i = Se;
          e: switch (gt) {
            case 1:
              gt = 0, Se = null, Ba(t, e, i, 1);
              break;
            case 2:
            case 9:
              if (Fs(i)) {
                gt = 0, Se = null, Ld(e);
                break;
              }
              e = function() {
                gt !== 2 && gt !== 9 || At !== t || (gt = 7), Qe(t);
              }, i.then(e, e);
              break t;
            case 3:
              gt = 7;
              break t;
            case 4:
              gt = 5;
              break t;
            case 7:
              Fs(i) ? (gt = 0, Se = null, Ld(e)) : (gt = 0, Se = null, Ba(t, e, i, 7));
              break;
            case 5:
              var s = null;
              switch (ct.tag) {
                case 26:
                  s = ct.memoizedState;
                case 5:
                case 27:
                  var d = ct;
                  if (!s || Eh(s)) {
                    gt = 0, Se = null;
                    var m = d.sibling;
                    if (m !== null) ct = m;
                    else {
                      var O = d.return;
                      O !== null ? (ct = O, ei(O)) : ct = null;
                    }
                    break e;
                  }
              }
              gt = 0, Se = null, Ba(t, e, i, 5);
              break;
            case 6:
              gt = 0, Se = null, Ba(t, e, i, 6);
              break;
            case 8:
              Mf(), Dt = 6;
              break t;
            default:
              throw Error(f(462));
          }
        }
        Cm();
        break;
      } catch (M) {
        qd(t, M);
      }
    while (!0);
    return Ie = Jl = null, U.H = a, U.A = n, vt = l, ct !== null ? 0 : (At = null, rt = 0, Tu(), Dt);
  }
  function Cm() {
    for (; ct !== null && !ey(); )
      Yd(ct);
  }
  function Yd(t) {
    var e = dd(t.alternate, t, cl);
    t.memoizedProps = t.pendingProps, e === null ? ei(t) : ct = e;
  }
  function Ld(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = id(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          rt
        );
        break;
      case 11:
        e = id(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          rt
        );
        break;
      case 5:
        Vc(e);
      default:
        yd(l, e), e = ct = Ls(e, cl), e = dd(l, e, cl);
    }
    t.memoizedProps = t.pendingProps, e === null ? ei(t) : ct = e;
  }
  function Ba(t, e, l, a) {
    Ie = Jl = null, Vc(e), za = null, On = 0;
    var n = e.return;
    try {
      if (Tm(
        t,
        n,
        e,
        l,
        rt
      )) {
        Dt = 1, Ku(
          t,
          _e(l, t.current)
        ), ct = null;
        return;
      }
    } catch (i) {
      if (n !== null) throw ct = n, i;
      Dt = 1, Ku(
        t,
        _e(l, t.current)
      ), ct = null;
      return;
    }
    e.flags & 32768 ? (dt || a === 1 ? t = !0 : Na || (rt & 536870912) !== 0 ? t = !1 : (Al = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = De.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Gd(e, t)) : ei(e);
  }
  function ei(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Gd(
          e,
          Al
        );
        return;
      }
      t = e.return;
      var l = Om(
        e.alternate,
        e,
        cl
      );
      if (l !== null) {
        ct = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        ct = e;
        return;
      }
      ct = e = t;
    } while (e !== null);
    Dt === 0 && (Dt = 5);
  }
  function Gd(t, e) {
    do {
      var l = Rm(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, ct = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        ct = t;
        return;
      }
      ct = t = l;
    } while (t !== null);
    Dt = 6, ct = null;
  }
  function Xd(t, e, l, a, n, i, s, d, m) {
    t.cancelPendingCommit = null;
    do
      li();
    while (Vt !== 0);
    if ((vt & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      if (i = e.lanes | e.childLanes, i |= Sc, oy(
        t,
        l,
        i,
        s,
        d,
        m
      ), t === At && (ct = At = null, rt = 0), wa = e, _l = t, Ha = l, _f = i, xf = n, Nd = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Bm(cu, function() {
        return Jd(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
        a = U.T, U.T = null, n = L.p, L.p = 2, s = vt, vt |= 4;
        try {
          _m(t, e, l);
        } finally {
          vt = s, L.p = n, U.T = a;
        }
      }
      Vt = 1, Qd(), Zd(), Vd();
    }
  }
  function Qd() {
    if (Vt === 1) {
      Vt = 0;
      var t = _l, e = wa, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = U.T, U.T = null;
        var a = L.p;
        L.p = 2;
        var n = vt;
        vt |= 4;
        try {
          Rd(e, t);
          var i = Qf, s = Ds(t.containerInfo), d = i.focusedElem, m = i.selectionRange;
          if (s !== d && d && d.ownerDocument && Ms(
            d.ownerDocument.documentElement,
            d
          )) {
            if (m !== null && mc(d)) {
              var O = m.start, M = m.end;
              if (M === void 0 && (M = O), "selectionStart" in d)
                d.selectionStart = O, d.selectionEnd = Math.min(
                  M,
                  d.value.length
                );
              else {
                var C = d.ownerDocument || document, R = C && C.defaultView || window;
                if (R.getSelection) {
                  var _ = R.getSelection(), tt = d.textContent.length, F = Math.min(m.start, tt), St = m.end === void 0 ? F : Math.min(m.end, tt);
                  !_.extend && F > St && (s = St, St = F, F = s);
                  var S = zs(
                    d,
                    F
                  ), p = zs(
                    d,
                    St
                  );
                  if (S && p && (_.rangeCount !== 1 || _.anchorNode !== S.node || _.anchorOffset !== S.offset || _.focusNode !== p.node || _.focusOffset !== p.offset)) {
                    var A = C.createRange();
                    A.setStart(S.node, S.offset), _.removeAllRanges(), F > St ? (_.addRange(A), _.extend(p.node, p.offset)) : (A.setEnd(p.node, p.offset), _.addRange(A));
                  }
                }
              }
            }
            for (C = [], _ = d; _ = _.parentNode; )
              _.nodeType === 1 && C.push({
                element: _,
                left: _.scrollLeft,
                top: _.scrollTop
              });
            for (typeof d.focus == "function" && d.focus(), d = 0; d < C.length; d++) {
              var N = C[d];
              N.element.scrollLeft = N.left, N.element.scrollTop = N.top;
            }
          }
          yi = !!Xf, Qf = Xf = null;
        } finally {
          vt = n, L.p = a, U.T = l;
        }
      }
      t.current = e, Vt = 2;
    }
  }
  function Zd() {
    if (Vt === 2) {
      Vt = 0;
      var t = _l, e = wa, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = U.T, U.T = null;
        var a = L.p;
        L.p = 2;
        var n = vt;
        vt |= 4;
        try {
          Ed(t, e.alternate, e);
        } finally {
          vt = n, L.p = a, U.T = l;
        }
      }
      Vt = 3;
    }
  }
  function Vd() {
    if (Vt === 4 || Vt === 3) {
      Vt = 0, ly();
      var t = _l, e = wa, l = Ha, a = Nd;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Vt = 5 : (Vt = 0, wa = _l = null, Kd(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (Rl = null), ki(l), e = e.stateNode, ye && typeof ye.onCommitFiberRoot == "function")
        try {
          ye.onCommitFiberRoot(
            ka,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        e = U.T, n = L.p, L.p = 2, U.T = null;
        try {
          for (var i = t.onRecoverableError, s = 0; s < a.length; s++) {
            var d = a[s];
            i(d.value, {
              componentStack: d.stack
            });
          }
        } finally {
          U.T = e, L.p = n;
        }
      }
      (Ha & 3) !== 0 && li(), Qe(t), n = t.pendingLanes, (l & 4194090) !== 0 && (n & 42) !== 0 ? t === zf ? Cn++ : (Cn = 0, zf = t) : Cn = 0, wn(0);
    }
  }
  function Kd(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, hn(e)));
  }
  function li(t) {
    return Qd(), Zd(), Vd(), Jd();
  }
  function Jd() {
    if (Vt !== 5) return !1;
    var t = _l, e = _f;
    _f = 0;
    var l = ki(Ha), a = U.T, n = L.p;
    try {
      L.p = 32 > l ? 32 : l, U.T = null, l = xf, xf = null;
      var i = _l, s = Ha;
      if (Vt = 0, wa = _l = null, Ha = 0, (vt & 6) !== 0) throw Error(f(331));
      var d = vt;
      if (vt |= 4, Dd(i.current), xd(
        i,
        i.current,
        s,
        l
      ), vt = d, wn(0, !1), ye && typeof ye.onPostCommitFiberRoot == "function")
        try {
          ye.onPostCommitFiberRoot(ka, i);
        } catch {
        }
      return !0;
    } finally {
      L.p = n, U.T = a, Kd(t, e);
    }
  }
  function kd(t, e, l) {
    e = _e(l, e), e = uf(t.stateNode, e, 2), t = vl(t, e, 2), t !== null && (Fa(t, 2), Qe(t));
  }
  function Tt(t, e, l) {
    if (t.tag === 3)
      kd(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          kd(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Rl === null || !Rl.has(a))) {
            t = _e(l, t), l = Po(2), a = vl(e, l, 2), a !== null && (Io(
              l,
              a,
              e,
              t
            ), Fa(a, 2), Qe(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function Nf(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new Mm();
      var n = /* @__PURE__ */ new Set();
      a.set(e, n);
    } else
      n = a.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(e, n));
    n.has(l) || (Tf = !0, n.add(l), t = wm.bind(null, t, e, l), e.then(t, t));
  }
  function wm(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, At === t && (rt & l) === l && (Dt === 4 || Dt === 3 && (rt & 62914560) === rt && 300 > je() - Rf ? (vt & 2) === 0 && qa(t, 0) : Af |= l, Ca === rt && (Ca = 0)), Qe(t);
  }
  function $d(t, e) {
    e === 0 && (e = Zr()), t = pa(t, e), t !== null && (Fa(t, e), Qe(t));
  }
  function Hm(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), $d(t, l);
  }
  function qm(t, e) {
    var l = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode, n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    a !== null && a.delete(e), $d(t, l);
  }
  function Bm(t, e) {
    return Zi(t, e);
  }
  var ai = null, ja = null, Cf = !1, ni = !1, wf = !1, ta = 0;
  function Qe(t) {
    t !== ja && t.next === null && (ja === null ? ai = ja = t : ja = ja.next = t), ni = !0, Cf || (Cf = !0, Ym());
  }
  function wn(t, e) {
    if (!wf && ni) {
      wf = !0;
      do
        for (var l = !1, a = ai; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var s = a.suspendedLanes, d = a.pingedLanes;
              i = (1 << 31 - me(42 | t) + 1) - 1, i &= n & ~(s & ~d), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = !0, Id(a, i));
          } else
            i = rt, i = su(
              a,
              a === At ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || $a(a, i) || (l = !0, Id(a, i));
          a = a.next;
        }
      while (l);
      wf = !1;
    }
  }
  function jm() {
    Fd();
  }
  function Fd() {
    ni = Cf = !1;
    var t = 0;
    ta !== 0 && (Jm() && (t = ta), ta = 0);
    for (var e = je(), l = null, a = ai; a !== null; ) {
      var n = a.next, i = Wd(a, e);
      i === 0 ? (a.next = null, l === null ? ai = n : l.next = n, n === null && (ja = l)) : (l = a, (t !== 0 || (i & 3) !== 0) && (ni = !0)), a = n;
    }
    wn(t);
  }
  function Wd(t, e) {
    for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, i = t.pendingLanes & -62914561; 0 < i; ) {
      var s = 31 - me(i), d = 1 << s, m = n[s];
      m === -1 ? ((d & l) === 0 || (d & a) !== 0) && (n[s] = sy(d, e)) : m <= e && (t.expiredLanes |= d), i &= ~d;
    }
    if (e = At, l = rt, l = su(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, l === 0 || t === e && (gt === 2 || gt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && Vi(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || $a(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (a !== null && Vi(a), ki(l)) {
        case 2:
        case 8:
          l = Gr;
          break;
        case 32:
          l = cu;
          break;
        case 268435456:
          l = Xr;
          break;
        default:
          l = cu;
      }
      return a = Pd.bind(null, t), l = Zi(l, a), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return a !== null && a !== null && Vi(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Pd(t, e) {
    if (Vt !== 0 && Vt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (li() && t.callbackNode !== l)
      return null;
    var a = rt;
    return a = su(
      t,
      t === At ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (wd(t, a, e), Wd(t, je()), t.callbackNode != null && t.callbackNode === l ? Pd.bind(null, t) : null);
  }
  function Id(t, e) {
    if (li()) return null;
    wd(t, e, !0);
  }
  function Ym() {
    $m(function() {
      (vt & 6) !== 0 ? Zi(
        Lr,
        jm
      ) : Fd();
    });
  }
  function Hf() {
    return ta === 0 && (ta = Qr()), ta;
  }
  function th(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : mu("" + t);
  }
  function eh(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function Lm(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var i = th(
        (n[ue] || null).action
      ), s = a.submitter;
      s && (e = (e = s[ue] || null) ? th(e.formAction) : s.getAttribute("formAction"), e !== null && (i = e, s = null));
      var d = new bu(
        "action",
        "action",
        null,
        a,
        n
      );
      t.push({
        event: d,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (ta !== 0) {
                  var m = s ? eh(n, s) : new FormData(n);
                  tf(
                    l,
                    {
                      pending: !0,
                      data: m,
                      method: n.method,
                      action: i
                    },
                    null,
                    m
                  );
                }
              } else
                typeof i == "function" && (d.preventDefault(), m = s ? eh(n, s) : new FormData(n), tf(
                  l,
                  {
                    pending: !0,
                    data: m,
                    method: n.method,
                    action: i
                  },
                  i,
                  m
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var qf = 0; qf < bc.length; qf++) {
    var Bf = bc[qf], Gm = Bf.toLowerCase(), Xm = Bf[0].toUpperCase() + Bf.slice(1);
    we(
      Gm,
      "on" + Xm
    );
  }
  we(Cs, "onAnimationEnd"), we(ws, "onAnimationIteration"), we(Hs, "onAnimationStart"), we("dblclick", "onDoubleClick"), we("focusin", "onFocus"), we("focusout", "onBlur"), we(um, "onTransitionRun"), we(im, "onTransitionStart"), we(cm, "onTransitionCancel"), we(qs, "onTransitionEnd"), fa("onMouseEnter", ["mouseout", "mouseover"]), fa("onMouseLeave", ["mouseout", "mouseover"]), fa("onPointerEnter", ["pointerout", "pointerover"]), fa("onPointerLeave", ["pointerout", "pointerover"]), jl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), jl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), jl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), jl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), jl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), jl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Hn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Qm = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hn)
  );
  function lh(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l], n = a.event;
      a = a.listeners;
      t: {
        var i = void 0;
        if (e)
          for (var s = a.length - 1; 0 <= s; s--) {
            var d = a[s], m = d.instance, O = d.currentTarget;
            if (d = d.listener, m !== i && n.isPropagationStopped())
              break t;
            i = d, n.currentTarget = O;
            try {
              i(n);
            } catch (M) {
              Vu(M);
            }
            n.currentTarget = null, i = m;
          }
        else
          for (s = 0; s < a.length; s++) {
            if (d = a[s], m = d.instance, O = d.currentTarget, d = d.listener, m !== i && n.isPropagationStopped())
              break t;
            i = d, n.currentTarget = O;
            try {
              i(n);
            } catch (M) {
              Vu(M);
            }
            n.currentTarget = null, i = m;
          }
      }
    }
  }
  function ft(t, e) {
    var l = e[$i];
    l === void 0 && (l = e[$i] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    l.has(a) || (ah(e, t, 2, !1), l.add(a));
  }
  function jf(t, e, l) {
    var a = 0;
    e && (a |= 4), ah(
      l,
      t,
      a,
      e
    );
  }
  var ui = "_reactListening" + Math.random().toString(36).slice(2);
  function Yf(t) {
    if (!t[ui]) {
      t[ui] = !0, $r.forEach(function(l) {
        l !== "selectionchange" && (Qm.has(l) || jf(l, !1, t), jf(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[ui] || (e[ui] = !0, jf("selectionchange", !1, e));
    }
  }
  function ah(t, e, l, a) {
    switch (xh(e)) {
      case 2:
        var n = v1;
        break;
      case 8:
        n = g1;
        break;
      default:
        n = If;
    }
    l = n.bind(
      null,
      e,
      l,
      t
    ), n = void 0, !ic || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), a ? n !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: n
    }) : t.addEventListener(e, l, !0) : n !== void 0 ? t.addEventListener(e, l, {
      passive: n
    }) : t.addEventListener(e, l, !1);
  }
  function Lf(t, e, l, a, n) {
    var i = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var s = a.tag;
        if (s === 3 || s === 4) {
          var d = a.stateNode.containerInfo;
          if (d === n) break;
          if (s === 4)
            for (s = a.return; s !== null; ) {
              var m = s.tag;
              if ((m === 3 || m === 4) && s.stateNode.containerInfo === n)
                return;
              s = s.return;
            }
          for (; d !== null; ) {
            if (s = ua(d), s === null) return;
            if (m = s.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              a = i = s;
              continue t;
            }
            d = d.parentNode;
          }
        }
        a = a.return;
      }
    rs(function() {
      var O = i, M = nc(l), C = [];
      t: {
        var R = Bs.get(t);
        if (R !== void 0) {
          var _ = bu, tt = t;
          switch (t) {
            case "keypress":
              if (gu(l) === 0) break t;
            case "keydown":
            case "keyup":
              _ = By;
              break;
            case "focusin":
              tt = "focus", _ = sc;
              break;
            case "focusout":
              tt = "blur", _ = sc;
              break;
            case "beforeblur":
            case "afterblur":
              _ = sc;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              _ = ds;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              _ = Ry;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _ = Ly;
              break;
            case Cs:
            case ws:
            case Hs:
              _ = zy;
              break;
            case qs:
              _ = Xy;
              break;
            case "scroll":
            case "scrollend":
              _ = Ay;
              break;
            case "wheel":
              _ = Zy;
              break;
            case "copy":
            case "cut":
            case "paste":
              _ = Dy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              _ = ys;
              break;
            case "toggle":
            case "beforetoggle":
              _ = Ky;
          }
          var F = (e & 4) !== 0, St = !F && (t === "scroll" || t === "scrollend"), S = F ? R !== null ? R + "Capture" : null : R;
          F = [];
          for (var p = O, A; p !== null; ) {
            var N = p;
            if (A = N.stateNode, N = N.tag, N !== 5 && N !== 26 && N !== 27 || A === null || S === null || (N = Ia(p, S), N != null && F.push(
              qn(p, N, A)
            )), St) break;
            p = p.return;
          }
          0 < F.length && (R = new _(
            R,
            tt,
            null,
            l,
            M
          ), C.push({ event: R, listeners: F }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (R = t === "mouseover" || t === "pointerover", _ = t === "mouseout" || t === "pointerout", R && l !== ac && (tt = l.relatedTarget || l.fromElement) && (ua(tt) || tt[na]))
            break t;
          if ((_ || R) && (R = M.window === M ? M : (R = M.ownerDocument) ? R.defaultView || R.parentWindow : window, _ ? (tt = l.relatedTarget || l.toElement, _ = O, tt = tt ? ua(tt) : null, tt !== null && (St = h(tt), F = tt.tag, tt !== St || F !== 5 && F !== 27 && F !== 6) && (tt = null)) : (_ = null, tt = O), _ !== tt)) {
            if (F = ds, N = "onMouseLeave", S = "onMouseEnter", p = "mouse", (t === "pointerout" || t === "pointerover") && (F = ys, N = "onPointerLeave", S = "onPointerEnter", p = "pointer"), St = _ == null ? R : Pa(_), A = tt == null ? R : Pa(tt), R = new F(
              N,
              p + "leave",
              _,
              l,
              M
            ), R.target = St, R.relatedTarget = A, N = null, ua(M) === O && (F = new F(
              S,
              p + "enter",
              tt,
              l,
              M
            ), F.target = A, F.relatedTarget = St, N = F), St = N, _ && tt)
              e: {
                for (F = _, S = tt, p = 0, A = F; A; A = Ya(A))
                  p++;
                for (A = 0, N = S; N; N = Ya(N))
                  A++;
                for (; 0 < p - A; )
                  F = Ya(F), p--;
                for (; 0 < A - p; )
                  S = Ya(S), A--;
                for (; p--; ) {
                  if (F === S || S !== null && F === S.alternate)
                    break e;
                  F = Ya(F), S = Ya(S);
                }
                F = null;
              }
            else F = null;
            _ !== null && nh(
              C,
              R,
              _,
              F,
              !1
            ), tt !== null && St !== null && nh(
              C,
              St,
              tt,
              F,
              !0
            );
          }
        }
        t: {
          if (R = O ? Pa(O) : window, _ = R.nodeName && R.nodeName.toLowerCase(), _ === "select" || _ === "input" && R.type === "file")
            var Z = Ts;
          else if (Ss(R))
            if (As)
              Z = lm;
            else {
              Z = tm;
              var it = Iy;
            }
          else
            _ = R.nodeName, !_ || _.toLowerCase() !== "input" || R.type !== "checkbox" && R.type !== "radio" ? O && lc(O.elementType) && (Z = Ts) : Z = em;
          if (Z && (Z = Z(t, O))) {
            Es(
              C,
              Z,
              l,
              M
            );
            break t;
          }
          it && it(t, R, O), t === "focusout" && O && R.type === "number" && O.memoizedProps.value != null && ec(R, "number", R.value);
        }
        switch (it = O ? Pa(O) : window, t) {
          case "focusin":
            (Ss(it) || it.contentEditable === "true") && (ma = it, vc = O, fn = null);
            break;
          case "focusout":
            fn = vc = ma = null;
            break;
          case "mousedown":
            gc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            gc = !1, Us(C, l, M);
            break;
          case "selectionchange":
            if (nm) break;
          case "keydown":
          case "keyup":
            Us(C, l, M);
        }
        var K;
        if (dc)
          t: {
            switch (t) {
              case "compositionstart":
                var W = "onCompositionStart";
                break t;
              case "compositionend":
                W = "onCompositionEnd";
                break t;
              case "compositionupdate":
                W = "onCompositionUpdate";
                break t;
            }
            W = void 0;
          }
        else
          ya ? ps(t, l) && (W = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (W = "onCompositionStart");
        W && (ms && l.locale !== "ko" && (ya || W !== "onCompositionStart" ? W === "onCompositionEnd" && ya && (K = ss()) : (dl = M, cc = "value" in dl ? dl.value : dl.textContent, ya = !0)), it = ii(O, W), 0 < it.length && (W = new hs(
          W,
          t,
          null,
          l,
          M
        ), C.push({ event: W, listeners: it }), K ? W.data = K : (K = bs(l), K !== null && (W.data = K)))), (K = ky ? $y(t, l) : Fy(t, l)) && (W = ii(O, "onBeforeInput"), 0 < W.length && (it = new hs(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          M
        ), C.push({
          event: it,
          listeners: W
        }), it.data = K)), Lm(
          C,
          t,
          O,
          l,
          M
        );
      }
      lh(C, e);
    });
  }
  function qn(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function ii(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var n = t, i = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = Ia(t, l), n != null && a.unshift(
        qn(t, n, i)
      ), n = Ia(t, e), n != null && a.push(
        qn(t, n, i)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function Ya(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function nh(t, e, l, a, n) {
    for (var i = e._reactName, s = []; l !== null && l !== a; ) {
      var d = l, m = d.alternate, O = d.stateNode;
      if (d = d.tag, m !== null && m === a) break;
      d !== 5 && d !== 26 && d !== 27 || O === null || (m = O, n ? (O = Ia(l, i), O != null && s.unshift(
        qn(l, O, m)
      )) : n || (O = Ia(l, i), O != null && s.push(
        qn(l, O, m)
      ))), l = l.return;
    }
    s.length !== 0 && t.push({ event: e, listeners: s });
  }
  var Zm = /\r\n?/g, Vm = /\u0000|\uFFFD/g;
  function uh(t) {
    return (typeof t == "string" ? t : "" + t).replace(Zm, `
`).replace(Vm, "");
  }
  function ih(t, e) {
    return e = uh(e), uh(t) === e;
  }
  function ci() {
  }
  function bt(t, e, l, a, n, i) {
    switch (l) {
      case "children":
        typeof a == "string" ? e === "body" || e === "textarea" && a === "" || oa(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && oa(t, "" + a);
        break;
      case "className":
        du(t, "class", a);
        break;
      case "tabIndex":
        du(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        du(t, l, a);
        break;
      case "style":
        cs(t, a, i);
        break;
      case "data":
        if (e !== "object") {
          du(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = mu("" + a), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (l === "formAction" ? (e !== "input" && bt(t, e, "name", n.name, n, null), bt(
            t,
            e,
            "formEncType",
            n.formEncType,
            n,
            null
          ), bt(
            t,
            e,
            "formMethod",
            n.formMethod,
            n,
            null
          ), bt(
            t,
            e,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (bt(t, e, "encType", n.encType, n, null), bt(t, e, "method", n.method, n, null), bt(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = mu("" + a), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = ci);
        break;
      case "onScroll":
        a != null && ft("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ft("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(f(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        l = mu("" + a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "" + a) : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(l) : t.setAttribute(l, a);
        break;
      case "popover":
        ft("beforetoggle", t), ft("toggle", t), ou(t, "popover", a);
        break;
      case "xlinkActuate":
        ke(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        ke(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        ke(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        ke(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        ke(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        ke(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        ke(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        ke(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        ke(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        ou(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Ey.get(l) || l, ou(t, l, a));
    }
  }
  function Gf(t, e, l, a, n, i) {
    switch (l) {
      case "style":
        cs(t, a, i);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(f(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string" ? oa(t, a) : (typeof a == "number" || typeof a == "bigint") && oa(t, "" + a);
        break;
      case "onScroll":
        a != null && ft("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ft("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = ci);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Fr.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), e = l.slice(2, n ? l.length - 7 : void 0), i = t[ue] || null, i = i != null ? i[l] : null, typeof i == "function" && t.removeEventListener(e, i, n), typeof a == "function")) {
              typeof i != "function" && i !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, n);
              break t;
            }
            l in t ? t[l] = a : a === !0 ? t.setAttribute(l, "") : ou(t, l, a);
          }
    }
  }
  function Kt(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ft("error", t), ft("load", t);
        var a = !1, n = !1, i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var s = l[i];
            if (s != null)
              switch (i) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, e));
                default:
                  bt(t, e, i, s, l, null);
              }
          }
        n && bt(t, e, "srcSet", l.srcSet, l, null), a && bt(t, e, "src", l.src, l, null);
        return;
      case "input":
        ft("invalid", t);
        var d = i = s = n = null, m = null, O = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var M = l[a];
            if (M != null)
              switch (a) {
                case "name":
                  n = M;
                  break;
                case "type":
                  s = M;
                  break;
                case "checked":
                  m = M;
                  break;
                case "defaultChecked":
                  O = M;
                  break;
                case "value":
                  i = M;
                  break;
                case "defaultValue":
                  d = M;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (M != null)
                    throw Error(f(137, e));
                  break;
                default:
                  bt(t, e, a, M, l, null);
              }
          }
        as(
          t,
          i,
          d,
          m,
          O,
          s,
          n,
          !1
        ), hu(t);
        return;
      case "select":
        ft("invalid", t), a = s = i = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (d = l[n], d != null))
            switch (n) {
              case "value":
                i = d;
                break;
              case "defaultValue":
                s = d;
                break;
              case "multiple":
                a = d;
              default:
                bt(t, e, n, d, l, null);
            }
        e = i, l = s, t.multiple = !!a, e != null ? sa(t, !!a, e, !1) : l != null && sa(t, !!a, l, !0);
        return;
      case "textarea":
        ft("invalid", t), i = n = a = null;
        for (s in l)
          if (l.hasOwnProperty(s) && (d = l[s], d != null))
            switch (s) {
              case "value":
                a = d;
                break;
              case "defaultValue":
                n = d;
                break;
              case "children":
                i = d;
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(f(91));
                break;
              default:
                bt(t, e, s, d, l, null);
            }
        us(t, a, n, i), hu(t);
        return;
      case "option":
        for (m in l)
          if (l.hasOwnProperty(m) && (a = l[m], a != null))
            switch (m) {
              case "selected":
                t.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                bt(t, e, m, a, l, null);
            }
        return;
      case "dialog":
        ft("beforetoggle", t), ft("toggle", t), ft("cancel", t), ft("close", t);
        break;
      case "iframe":
      case "object":
        ft("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Hn.length; a++)
          ft(Hn[a], t);
        break;
      case "image":
        ft("error", t), ft("load", t);
        break;
      case "details":
        ft("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ft("error", t), ft("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (O in l)
          if (l.hasOwnProperty(O) && (a = l[O], a != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, e));
              default:
                bt(t, e, O, a, l, null);
            }
        return;
      default:
        if (lc(e)) {
          for (M in l)
            l.hasOwnProperty(M) && (a = l[M], a !== void 0 && Gf(
              t,
              e,
              M,
              a,
              l,
              void 0
            ));
          return;
        }
    }
    for (d in l)
      l.hasOwnProperty(d) && (a = l[d], a != null && bt(t, e, d, a, l, null));
  }
  function Km(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null, i = null, s = null, d = null, m = null, O = null, M = null;
        for (_ in l) {
          var C = l[_];
          if (l.hasOwnProperty(_) && C != null)
            switch (_) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = C;
              default:
                a.hasOwnProperty(_) || bt(t, e, _, null, a, C);
            }
        }
        for (var R in a) {
          var _ = a[R];
          if (C = l[R], a.hasOwnProperty(R) && (_ != null || C != null))
            switch (R) {
              case "type":
                i = _;
                break;
              case "name":
                n = _;
                break;
              case "checked":
                O = _;
                break;
              case "defaultChecked":
                M = _;
                break;
              case "value":
                s = _;
                break;
              case "defaultValue":
                d = _;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(f(137, e));
                break;
              default:
                _ !== C && bt(
                  t,
                  e,
                  R,
                  _,
                  a,
                  C
                );
            }
        }
        tc(
          t,
          s,
          d,
          m,
          O,
          M,
          i,
          n
        );
        return;
      case "select":
        _ = s = d = R = null;
        for (i in l)
          if (m = l[i], l.hasOwnProperty(i) && m != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                _ = m;
              default:
                a.hasOwnProperty(i) || bt(
                  t,
                  e,
                  i,
                  null,
                  a,
                  m
                );
            }
        for (n in a)
          if (i = a[n], m = l[n], a.hasOwnProperty(n) && (i != null || m != null))
            switch (n) {
              case "value":
                R = i;
                break;
              case "defaultValue":
                d = i;
                break;
              case "multiple":
                s = i;
              default:
                i !== m && bt(
                  t,
                  e,
                  n,
                  i,
                  a,
                  m
                );
            }
        e = d, l = s, a = _, R != null ? sa(t, !!l, R, !1) : !!a != !!l && (e != null ? sa(t, !!l, e, !0) : sa(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        _ = R = null;
        for (d in l)
          if (n = l[d], l.hasOwnProperty(d) && n != null && !a.hasOwnProperty(d))
            switch (d) {
              case "value":
                break;
              case "children":
                break;
              default:
                bt(t, e, d, null, a, n);
            }
        for (s in a)
          if (n = a[s], i = l[s], a.hasOwnProperty(s) && (n != null || i != null))
            switch (s) {
              case "value":
                R = n;
                break;
              case "defaultValue":
                _ = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(f(91));
                break;
              default:
                n !== i && bt(t, e, s, n, a, i);
            }
        ns(t, R, _);
        return;
      case "option":
        for (var tt in l)
          if (R = l[tt], l.hasOwnProperty(tt) && R != null && !a.hasOwnProperty(tt))
            switch (tt) {
              case "selected":
                t.selected = !1;
                break;
              default:
                bt(
                  t,
                  e,
                  tt,
                  null,
                  a,
                  R
                );
            }
        for (m in a)
          if (R = a[m], _ = l[m], a.hasOwnProperty(m) && R !== _ && (R != null || _ != null))
            switch (m) {
              case "selected":
                t.selected = R && typeof R != "function" && typeof R != "symbol";
                break;
              default:
                bt(
                  t,
                  e,
                  m,
                  R,
                  a,
                  _
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var F in l)
          R = l[F], l.hasOwnProperty(F) && R != null && !a.hasOwnProperty(F) && bt(t, e, F, null, a, R);
        for (O in a)
          if (R = a[O], _ = l[O], a.hasOwnProperty(O) && R !== _ && (R != null || _ != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null)
                  throw Error(f(137, e));
                break;
              default:
                bt(
                  t,
                  e,
                  O,
                  R,
                  a,
                  _
                );
            }
        return;
      default:
        if (lc(e)) {
          for (var St in l)
            R = l[St], l.hasOwnProperty(St) && R !== void 0 && !a.hasOwnProperty(St) && Gf(
              t,
              e,
              St,
              void 0,
              a,
              R
            );
          for (M in a)
            R = a[M], _ = l[M], !a.hasOwnProperty(M) || R === _ || R === void 0 && _ === void 0 || Gf(
              t,
              e,
              M,
              R,
              a,
              _
            );
          return;
        }
    }
    for (var S in l)
      R = l[S], l.hasOwnProperty(S) && R != null && !a.hasOwnProperty(S) && bt(t, e, S, null, a, R);
    for (C in a)
      R = a[C], _ = l[C], !a.hasOwnProperty(C) || R === _ || R == null && _ == null || bt(t, e, C, R, a, _);
  }
  var Xf = null, Qf = null;
  function fi(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function ch(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function fh(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Zf(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Vf = null;
  function Jm() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Vf ? !1 : (Vf = t, !0) : (Vf = null, !1);
  }
  var rh = typeof setTimeout == "function" ? setTimeout : void 0, km = typeof clearTimeout == "function" ? clearTimeout : void 0, sh = typeof Promise == "function" ? Promise : void 0, $m = typeof queueMicrotask == "function" ? queueMicrotask : typeof sh < "u" ? function(t) {
    return sh.resolve(null).then(t).catch(Fm);
  } : rh;
  function Fm(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function zl(t) {
    return t === "head";
  }
  function oh(t, e) {
    var l = e, a = 0, n = 0;
    do {
      var i = l.nextSibling;
      if (t.removeChild(l), i && i.nodeType === 8)
        if (l = i.data, l === "/$") {
          if (0 < a && 8 > a) {
            l = a;
            var s = t.ownerDocument;
            if (l & 1 && Bn(s.documentElement), l & 2 && Bn(s.body), l & 4)
              for (l = s.head, Bn(l), s = l.firstChild; s; ) {
                var d = s.nextSibling, m = s.nodeName;
                s[Wa] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && s.rel.toLowerCase() === "stylesheet" || l.removeChild(s), s = d;
              }
          }
          if (n === 0) {
            t.removeChild(i), Vn(e);
            return;
          }
          n--;
        } else
          l === "$" || l === "$?" || l === "$!" ? n++ : a = l.charCodeAt(0) - 48;
      else a = 0;
      l = i;
    } while (l);
    Vn(e);
  }
  function Kf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Kf(l), Fi(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function Wm(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[Wa])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (i = t.getAttribute("rel"), i === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (i !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (i = t.getAttribute("src"), (i !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && i && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === i)
          return t;
      } else return t;
      if (t = qe(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Pm(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = qe(t.nextSibling), t === null)) return null;
    return t;
  }
  function Jf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete";
  }
  function Im(t, e) {
    var l = t.ownerDocument;
    if (t.data !== "$?" || l.readyState === "complete")
      e();
    else {
      var a = function() {
        e(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function qe(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var kf = null;
  function dh(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (e === 0) return t;
          e--;
        } else l === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function hh(t, e, l) {
    switch (e = fi(l), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(f(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(f(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(f(454));
        return t;
      default:
        throw Error(f(451));
    }
  }
  function Bn(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Fi(t);
  }
  var Ne = /* @__PURE__ */ new Map(), yh = /* @__PURE__ */ new Set();
  function ri(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var fl = L.d;
  L.d = {
    f: t1,
    r: e1,
    D: l1,
    C: a1,
    L: n1,
    m: u1,
    X: c1,
    S: i1,
    M: f1
  };
  function t1() {
    var t = fl.f(), e = ti();
    return t || e;
  }
  function e1(t) {
    var e = ia(t);
    e !== null && e.tag === 5 && e.type === "form" ? wo(e) : fl.r(t);
  }
  var La = typeof document > "u" ? null : document;
  function mh(t, e, l) {
    var a = La;
    if (a && typeof e == "string" && e) {
      var n = Re(e);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), yh.has(n) || (yh.add(n), t = { rel: t, crossOrigin: l, href: e }, a.querySelector(n) === null && (e = a.createElement("link"), Kt(e, "link", t), Lt(e), a.head.appendChild(e)));
    }
  }
  function l1(t) {
    fl.D(t), mh("dns-prefetch", t, null);
  }
  function a1(t, e) {
    fl.C(t, e), mh("preconnect", t, e);
  }
  function n1(t, e, l) {
    fl.L(t, e, l);
    var a = La;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + Re(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + Re(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + Re(
        l.imageSizes
      ) + '"]')) : n += '[href="' + Re(t) + '"]';
      var i = n;
      switch (e) {
        case "style":
          i = Ga(t);
          break;
        case "script":
          i = Xa(t);
      }
      Ne.has(i) || (t = b(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), Ne.set(i, t), a.querySelector(n) !== null || e === "style" && a.querySelector(jn(i)) || e === "script" && a.querySelector(Yn(i)) || (e = a.createElement("link"), Kt(e, "link", t), Lt(e), a.head.appendChild(e)));
    }
  }
  function u1(t, e) {
    fl.m(t, e);
    var l = La;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + Re(a) + '"][href="' + Re(t) + '"]', i = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Xa(t);
      }
      if (!Ne.has(i) && (t = b({ rel: "modulepreload", href: t }, e), Ne.set(i, t), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Yn(i)))
              return;
        }
        a = l.createElement("link"), Kt(a, "link", t), Lt(a), l.head.appendChild(a);
      }
    }
  }
  function i1(t, e, l) {
    fl.S(t, e, l);
    var a = La;
    if (a && t) {
      var n = ca(a).hoistableStyles, i = Ga(t);
      e = e || "default";
      var s = n.get(i);
      if (!s) {
        var d = { loading: 0, preload: null };
        if (s = a.querySelector(
          jn(i)
        ))
          d.loading = 5;
        else {
          t = b(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = Ne.get(i)) && $f(t, l);
          var m = s = a.createElement("link");
          Lt(m), Kt(m, "link", t), m._p = new Promise(function(O, M) {
            m.onload = O, m.onerror = M;
          }), m.addEventListener("load", function() {
            d.loading |= 1;
          }), m.addEventListener("error", function() {
            d.loading |= 2;
          }), d.loading |= 4, si(s, e, a);
        }
        s = {
          type: "stylesheet",
          instance: s,
          count: 1,
          state: d
        }, n.set(i, s);
      }
    }
  }
  function c1(t, e) {
    fl.X(t, e);
    var l = La;
    if (l && t) {
      var a = ca(l).hoistableScripts, n = Xa(t), i = a.get(n);
      i || (i = l.querySelector(Yn(n)), i || (t = b({ src: t, async: !0 }, e), (e = Ne.get(n)) && Ff(t, e), i = l.createElement("script"), Lt(i), Kt(i, "link", t), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function f1(t, e) {
    fl.M(t, e);
    var l = La;
    if (l && t) {
      var a = ca(l).hoistableScripts, n = Xa(t), i = a.get(n);
      i || (i = l.querySelector(Yn(n)), i || (t = b({ src: t, async: !0, type: "module" }, e), (e = Ne.get(n)) && Ff(t, e), i = l.createElement("script"), Lt(i), Kt(i, "link", t), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function vh(t, e, l, a) {
    var n = (n = et.current) ? ri(n) : null;
    if (!n) throw Error(f(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Ga(l.href), l = ca(
          n
        ).hoistableStyles, a = l.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = Ga(l.href);
          var i = ca(
            n
          ).hoistableStyles, s = i.get(t);
          if (s || (n = n.ownerDocument || n, s = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(t, s), (i = n.querySelector(
            jn(t)
          )) && !i._p && (s.instance = i, s.state.loading = 5), Ne.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Ne.set(t, l), i || r1(
            n,
            t,
            l,
            s.state
          ))), e && a === null)
            throw Error(f(528, ""));
          return s;
        }
        if (e && a !== null)
          throw Error(f(529, ""));
        return null;
      case "script":
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Xa(l), l = ca(
          n
        ).hoistableScripts, a = l.get(e), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(f(444, t));
    }
  }
  function Ga(t) {
    return 'href="' + Re(t) + '"';
  }
  function jn(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function gh(t) {
    return b({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function r1(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    }), Kt(e, "link", l), Lt(e), t.head.appendChild(e));
  }
  function Xa(t) {
    return '[src="' + Re(t) + '"]';
  }
  function Yn(t) {
    return "script[async]" + t;
  }
  function ph(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + Re(l.href) + '"]'
          );
          if (a)
            return e.instance = a, Lt(a), a;
          var n = b({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), Lt(a), Kt(a, "style", n), si(a, l.precedence, t), e.instance = a;
        case "stylesheet":
          n = Ga(l.href);
          var i = t.querySelector(
            jn(n)
          );
          if (i)
            return e.state.loading |= 4, e.instance = i, Lt(i), i;
          a = gh(l), (n = Ne.get(n)) && $f(a, n), i = (t.ownerDocument || t).createElement("link"), Lt(i);
          var s = i;
          return s._p = new Promise(function(d, m) {
            s.onload = d, s.onerror = m;
          }), Kt(i, "link", a), e.state.loading |= 4, si(i, l.precedence, t), e.instance = i;
        case "script":
          return i = Xa(l.src), (n = t.querySelector(
            Yn(i)
          )) ? (e.instance = n, Lt(n), n) : (a = l, (n = Ne.get(i)) && (a = b({}, l), Ff(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), Lt(n), Kt(n, "link", a), t.head.appendChild(n), e.instance = n);
        case "void":
          return null;
        default:
          throw Error(f(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, si(a, l.precedence, t));
    return e.instance;
  }
  function si(t, e, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, i = n, s = 0; s < a.length; s++) {
      var d = a[s];
      if (d.dataset.precedence === e) i = d;
      else if (i !== n) break;
    }
    i ? i.parentNode.insertBefore(t, i.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function $f(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Ff(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var oi = null;
  function bh(t, e, l) {
    if (oi === null) {
      var a = /* @__PURE__ */ new Map(), n = oi = /* @__PURE__ */ new Map();
      n.set(l, a);
    } else
      n = oi, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
    if (a.has(t)) return a;
    for (a.set(t, null), l = l.getElementsByTagName(t), n = 0; n < l.length; n++) {
      var i = l[n];
      if (!(i[Wa] || i[Ft] || t === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var s = i.getAttribute(e) || "";
        s = t + s;
        var d = a.get(s);
        d ? d.push(i) : a.set(s, [i]);
      }
    }
    return a;
  }
  function Sh(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function s1(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function Eh(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Ln = null;
  function o1() {
  }
  function d1(t, e, l) {
    if (Ln === null) throw Error(f(475));
    var a = Ln;
    if (e.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var n = Ga(l.href), i = t.querySelector(
          jn(n)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (a.count++, a = di.bind(a), t.then(a, a)), e.state.loading |= 4, e.instance = i, Lt(i);
          return;
        }
        i = t.ownerDocument || t, l = gh(l), (n = Ne.get(n)) && $f(l, n), i = i.createElement("link"), Lt(i);
        var s = i;
        s._p = new Promise(function(d, m) {
          s.onload = d, s.onerror = m;
        }), Kt(i, "link", l), e.instance = i;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (a.count++, e = di.bind(a), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  function h1() {
    if (Ln === null) throw Error(f(475));
    var t = Ln;
    return t.stylesheets && t.count === 0 && Wf(t, t.stylesheets), 0 < t.count ? function(e) {
      var l = setTimeout(function() {
        if (t.stylesheets && Wf(t, t.stylesheets), t.unsuspend) {
          var a = t.unsuspend;
          t.unsuspend = null, a();
        }
      }, 6e4);
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(l);
      };
    } : null;
  }
  function di() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Wf(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var hi = null;
  function Wf(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, hi = /* @__PURE__ */ new Map(), e.forEach(y1, t), hi = null, di.call(t));
  }
  function y1(t, e) {
    if (!(e.state.loading & 4)) {
      var l = hi.get(t);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), hi.set(t, l);
        for (var n = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < n.length; i++) {
          var s = n[i];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (l.set(s.dataset.precedence, s), a = s);
        }
        a && l.set(null, a);
      }
      n = e.instance, s = n.getAttribute("data-precedence"), i = l.get(s) || a, i === a && l.set(null, n), l.set(s, n), this.count++, a = di.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), i ? i.parentNode.insertBefore(n, i.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Gn = {
    $$typeof: G,
    Provider: null,
    Consumer: null,
    _currentValue: I,
    _currentValue2: I,
    _threadCount: 0
  };
  function m1(t, e, l, a, n, i, s, d) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ki(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ki(0), this.hiddenUpdates = Ki(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = d, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Th(t, e, l, a, n, i, s, d, m, O, M, C) {
    return t = new m1(
      t,
      e,
      l,
      s,
      d,
      m,
      O,
      C
    ), e = 1, i === !0 && (e |= 24), i = ge(3, null, null, e), t.current = i, i.stateNode = t, e = Uc(), e.refCount++, t.pooledCache = e, e.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: e
    }, Hc(i), t;
  }
  function Ah(t) {
    return t ? (t = ba, t) : ba;
  }
  function Oh(t, e, l, a, n, i) {
    n = Ah(n), a.context === null ? a.context = n : a.pendingContext = n, a = ml(e), a.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (a.callback = i), l = vl(t, a, e), l !== null && (Te(l, t, e), gn(l, t, e));
  }
  function Rh(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Pf(t, e) {
    Rh(t, e), (t = t.alternate) && Rh(t, e);
  }
  function _h(t) {
    if (t.tag === 13) {
      var e = pa(t, 67108864);
      e !== null && Te(e, t, 67108864), Pf(t, 67108864);
    }
  }
  var yi = !0;
  function v1(t, e, l, a) {
    var n = U.T;
    U.T = null;
    var i = L.p;
    try {
      L.p = 2, If(t, e, l, a);
    } finally {
      L.p = i, U.T = n;
    }
  }
  function g1(t, e, l, a) {
    var n = U.T;
    U.T = null;
    var i = L.p;
    try {
      L.p = 8, If(t, e, l, a);
    } finally {
      L.p = i, U.T = n;
    }
  }
  function If(t, e, l, a) {
    if (yi) {
      var n = tr(a);
      if (n === null)
        Lf(
          t,
          e,
          a,
          mi,
          l
        ), zh(t, a);
      else if (b1(
        n,
        t,
        e,
        l,
        a
      ))
        a.stopPropagation();
      else if (zh(t, a), e & 4 && -1 < p1.indexOf(t)) {
        for (; n !== null; ) {
          var i = ia(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var s = Bl(i.pendingLanes);
                  if (s !== 0) {
                    var d = i;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; s; ) {
                      var m = 1 << 31 - me(s);
                      d.entanglements[1] |= m, s &= ~m;
                    }
                    Qe(i), (vt & 6) === 0 && (Pu = je() + 500, wn(0));
                  }
                }
                break;
              case 13:
                d = pa(i, 2), d !== null && Te(d, i, 2), ti(), Pf(i, 2);
            }
          if (i = tr(a), i === null && Lf(
            t,
            e,
            a,
            mi,
            l
          ), i === n) break;
          n = i;
        }
        n !== null && a.stopPropagation();
      } else
        Lf(
          t,
          e,
          a,
          null,
          l
        );
    }
  }
  function tr(t) {
    return t = nc(t), er(t);
  }
  var mi = null;
  function er(t) {
    if (mi = null, t = ua(t), t !== null) {
      var e = h(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = y(e), t !== null) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return mi = t, null;
  }
  function xh(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ay()) {
          case Lr:
            return 2;
          case Gr:
            return 8;
          case cu:
          case ny:
            return 32;
          case Xr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var lr = !1, Ml = null, Dl = null, Ul = null, Xn = /* @__PURE__ */ new Map(), Qn = /* @__PURE__ */ new Map(), Nl = [], p1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function zh(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ml = null;
        break;
      case "dragenter":
      case "dragleave":
        Dl = null;
        break;
      case "mouseover":
      case "mouseout":
        Ul = null;
        break;
      case "pointerover":
      case "pointerout":
        Xn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qn.delete(e.pointerId);
    }
  }
  function Zn(t, e, l, a, n, i) {
    return t === null || t.nativeEvent !== i ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: i,
      targetContainers: [n]
    }, e !== null && (e = ia(e), e !== null && _h(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
  }
  function b1(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return Ml = Zn(
          Ml,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "dragenter":
        return Dl = Zn(
          Dl,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "mouseover":
        return Ul = Zn(
          Ul,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "pointerover":
        var i = n.pointerId;
        return Xn.set(
          i,
          Zn(
            Xn.get(i) || null,
            t,
            e,
            l,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return i = n.pointerId, Qn.set(
          i,
          Zn(
            Qn.get(i) || null,
            t,
            e,
            l,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function Mh(t) {
    var e = ua(t.target);
    if (e !== null) {
      var l = h(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = y(l), e !== null) {
            t.blockedOn = e, dy(t.priority, function() {
              if (l.tag === 13) {
                var a = Ee();
                a = Ji(a);
                var n = pa(l, a);
                n !== null && Te(n, l, a), Pf(l, a);
              }
            });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function vi(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = tr(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        ac = a, l.target.dispatchEvent(a), ac = null;
      } else
        return e = ia(l), e !== null && _h(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function Dh(t, e, l) {
    vi(t) && l.delete(e);
  }
  function S1() {
    lr = !1, Ml !== null && vi(Ml) && (Ml = null), Dl !== null && vi(Dl) && (Dl = null), Ul !== null && vi(Ul) && (Ul = null), Xn.forEach(Dh), Qn.forEach(Dh);
  }
  function gi(t, e) {
    t.blockedOn === e && (t.blockedOn = null, lr || (lr = !0, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      S1
    )));
  }
  var pi = null;
  function Uh(t) {
    pi !== t && (pi = t, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      function() {
        pi === t && (pi = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], a = t[e + 1], n = t[e + 2];
          if (typeof a != "function") {
            if (er(a || l) === null)
              continue;
            break;
          }
          var i = ia(l);
          i !== null && (t.splice(e, 3), e -= 3, tf(
            i,
            {
              pending: !0,
              data: n,
              method: l.method,
              action: a
            },
            a,
            n
          ));
        }
      }
    ));
  }
  function Vn(t) {
    function e(m) {
      return gi(m, t);
    }
    Ml !== null && gi(Ml, t), Dl !== null && gi(Dl, t), Ul !== null && gi(Ul, t), Xn.forEach(e), Qn.forEach(e);
    for (var l = 0; l < Nl.length; l++) {
      var a = Nl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Nl.length && (l = Nl[0], l.blockedOn === null); )
      Mh(l), l.blockedOn === null && Nl.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a], i = l[a + 1], s = n[ue] || null;
        if (typeof i == "function")
          s || Uh(l);
        else if (s) {
          var d = null;
          if (i && i.hasAttribute("formAction")) {
            if (n = i, s = i[ue] || null)
              d = s.formAction;
            else if (er(n) !== null) continue;
          } else d = s.action;
          typeof d == "function" ? l[a + 1] = d : (l.splice(a, 3), a -= 3), Uh(l);
        }
      }
  }
  function ar(t) {
    this._internalRoot = t;
  }
  bi.prototype.render = ar.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(f(409));
    var l = e.current, a = Ee();
    Oh(l, a, t, e, null, null);
  }, bi.prototype.unmount = ar.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Oh(t.current, 2, null, t, null, null), ti(), e[na] = null;
    }
  };
  function bi(t) {
    this._internalRoot = t;
  }
  bi.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Jr();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Nl.length && e !== 0 && e < Nl[l].priority; l++) ;
      Nl.splice(l, 0, t), l === 0 && Mh(t);
    }
  };
  var Nh = c.version;
  if (Nh !== "19.1.1")
    throw Error(
      f(
        527,
        Nh,
        "19.1.1"
      )
    );
  L.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(f(188)) : (t = Object.keys(t).join(","), Error(f(268, t)));
    return t = E(e), t = t !== null ? v(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var E1 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Si.isDisabled && Si.supportsFiber)
      try {
        ka = Si.inject(
          E1
        ), ye = Si;
      } catch {
      }
  }
  return kn.createRoot = function(t, e) {
    if (!o(t)) throw Error(f(299));
    var l = !1, a = "", n = ko, i = $o, s = Fo, d = null;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (s = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (d = e.unstable_transitionCallbacks)), e = Th(
      t,
      1,
      !1,
      null,
      null,
      l,
      a,
      n,
      i,
      s,
      d,
      null
    ), t[na] = e.current, Yf(t), new ar(e);
  }, kn.hydrateRoot = function(t, e, l) {
    if (!o(t)) throw Error(f(299));
    var a = !1, n = "", i = ko, s = $o, d = Fo, m = null, O = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (s = l.onCaughtError), l.onRecoverableError !== void 0 && (d = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (m = l.unstable_transitionCallbacks), l.formState !== void 0 && (O = l.formState)), e = Th(
      t,
      1,
      !0,
      e,
      l ?? null,
      a,
      n,
      i,
      s,
      d,
      m,
      O
    ), e.context = Ah(null), l = e.current, a = Ee(), a = Ji(a), n = ml(a), n.callback = null, vl(l, n, a), l = a, e.current.lanes = l, Fa(e, l), Qe(e), t[na] = e.current, Yf(t), new bi(e);
  }, kn.version = "19.1.1", kn;
}
var Ih;
function Ev() {
  if (Ih) return rr.exports;
  Ih = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), rr.exports = Sv(), rr.exports;
}
var Tv = Ev(), t0 = function(c, r) {
  var f = arguments;
  if (r == null || !eu.call(r, "css"))
    return Ot.createElement.apply(void 0, f);
  var o = f.length, h = new Array(o);
  h[0] = qr, h[1] = Hr(c, r);
  for (var y = 2; y < o; y++)
    h[y] = f[y];
  return Ot.createElement.apply(null, h);
};
(function(u) {
  var c;
  c || (c = u.JSX || (u.JSX = {}));
})(t0 || (t0 = {}));
var Av = /* @__PURE__ */ Cr(function(u, c) {
  var r = u.styles, f = Hi([r], void 0, Ot.useContext(wr)), o = Ot.useRef();
  return Jh(function() {
    var h = c.key + "-global", y = new c.sheet.constructor({
      key: h,
      nonce: c.sheet.nonce,
      container: c.sheet.container,
      speedy: c.sheet.isSpeedy
    }), T = !1, E = document.querySelector('style[data-emotion="' + h + " " + f.name + '"]');
    return c.sheet.tags.length && (y.before = c.sheet.tags[0]), E !== null && (T = !0, E.setAttribute("data-emotion", h), y.hydrate([E])), o.current = [y, T], function() {
      y.flush();
    };
  }, [c]), Jh(function() {
    var h = o.current, y = h[0], T = h[1];
    if (T) {
      h[1] = !1;
      return;
    }
    if (f.next !== void 0 && Nr(c, f.next, !0), y.tags.length) {
      var E = y.tags[y.tags.length - 1].nextElementSibling;
      y.before = E, y.flush();
    }
    c.insert("", f, y, !1);
  }, [c, f.name]), null;
});
function ae() {
  for (var u = arguments.length, c = new Array(u), r = 0; r < u; r++)
    c[r] = arguments[r];
  return Hi(c);
}
const Ov = ae`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  #root {
    --primary-color: #007bff;
    --primary-hover: #0056b3;
    --bg-light: #f8f9fa;
    --border-color: #e9ecef;
    --gris-100: hsl(0, 0%, 100%); /* Blanco */
    --gris-95: hsl(0, 0%, 95%);
    --gris-90: hsl(0, 0%, 90%);
    --gris-80: hsl(0, 0%, 80%);
    --gris-70: hsl(0, 0%, 70%);
    --gris-60: hsl(0, 0%, 60%);
    --gris-50: hsl(0, 0%, 50%);
    --gris-40: hsl(0, 0%, 40%);
    --gris-30: hsl(0, 0%, 30%);
    --gris-20: hsl(0, 0%, 20%);
    --gris-10: hsl(0, 0%, 10%); /* Muy oscuro */
    --gris-0: hsl(0, 0%, 0%); /* Negro */
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      sans-serif;
  }

  /* Animaciones globales */
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes typing {
    0% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }

  /* Utilidades globales */
  .fade-in {
    animation: fadeIn 0.3s ease;
  }

  .slide-in {
    animation: slideInUp 0.3s ease;
  }

  .typing {
    animation: typing 0.3s ease-in-out forwards;
  }
`, Rv = () => /* @__PURE__ */ Yt(Av, { styles: Ov });
var _v = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, xv = /* @__PURE__ */ T0(
  function(u) {
    return _v.test(u) || u.charCodeAt(0) === 111 && u.charCodeAt(1) === 110 && u.charCodeAt(2) < 91;
  }
  /* Z+1 */
), zv = xv, Mv = function(c) {
  return c !== "theme";
}, e0 = function(c) {
  return typeof c == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  c.charCodeAt(0) > 96 ? zv : Mv;
}, l0 = function(c, r, f) {
  var o;
  if (r) {
    var h = r.shouldForwardProp;
    o = c.__emotion_forwardProp && h ? function(y) {
      return c.__emotion_forwardProp(y) && h(y);
    } : h;
  }
  return typeof o != "function" && f && (o = c.__emotion_forwardProp), o;
}, Dv = function(c) {
  var r = c.cache, f = c.serialized, o = c.isStringTag;
  return Ur(r, f, o), z0(function() {
    return Nr(r, f, o);
  }), null;
}, Uv = function u(c, r) {
  var f = c.__emotion_real === c, o = f && c.__emotion_base || c, h, y;
  r !== void 0 && (h = r.label, y = r.target);
  var T = l0(c, r, f), E = T || e0(o), v = !E("as");
  return function() {
    var b = arguments, D = f && c.__emotion_styles !== void 0 ? c.__emotion_styles.slice(0) : [];
    if (h !== void 0 && D.push("label:" + h + ";"), b[0] == null || b[0].raw === void 0)
      D.push.apply(D, b);
    else {
      var j = b[0];
      D.push(j[0]);
      for (var J = b.length, q = 1; q < J; q++)
        D.push(b[q], j[q]);
    }
    var B = Cr(function(w, Q, V) {
      var G = v && w.as || o, ut = "", z = [], P = w;
      if (w.theme == null) {
        P = {};
        for (var k in w)
          P[k] = w[k];
        P.theme = Ot.useContext(wr);
      }
      typeof w.className == "string" ? ut = R0(Q.registered, z, w.className) : w.className != null && (ut = w.className + " ");
      var zt = Hi(D.concat(z), Q.registered, P);
      ut += Q.key + "-" + zt.name, y !== void 0 && (ut += " " + y);
      var ee = v && T === void 0 ? e0(G) : E, Ce = {};
      for (var ne in w)
        v && ne === "as" || ee(ne) && (Ce[ne] = w[ne]);
      return Ce.className = ut, V && (Ce.ref = V), /* @__PURE__ */ Ot.createElement(Ot.Fragment, null, /* @__PURE__ */ Ot.createElement(Dv, {
        cache: Q,
        serialized: zt,
        isStringTag: typeof G == "string"
      }), /* @__PURE__ */ Ot.createElement(G, Ce));
    });
    return B.displayName = h !== void 0 ? h : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", B.defaultProps = c.defaultProps, B.__emotion_real = B, B.__emotion_base = o, B.__emotion_styles = D, B.__emotion_forwardProp = T, Object.defineProperty(B, "toString", {
      value: function() {
        return "." + y;
      }
    }), B.withComponent = function(w, Q) {
      var V = u(w, pr({}, r, Q, {
        shouldForwardProp: l0(B, Q, !0)
      }));
      return V.apply(void 0, D);
    }, B;
  };
}, Nv = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Sr = Uv.bind(null);
Nv.forEach(function(u) {
  Sr[u] = Sr(u);
});
const Cv = Sr.button`
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 0.7em 0.7em;
  opacity: 0.3;
  cursor: pointer;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--primary-hover);
  }
  :disabled {
    cursor: not-allowed;
  }
`;
function D0(u, c) {
  return function() {
    return u.apply(c, arguments);
  };
}
const { toString: wv } = Object.prototype, { getPrototypeOf: Br } = Object, { iterator: qi, toStringTag: U0 } = Symbol, Bi = /* @__PURE__ */ ((u) => (c) => {
  const r = wv.call(c);
  return u[r] || (u[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Be = (u) => (u = u.toLowerCase(), (c) => Bi(c) === u), ji = (u) => (c) => typeof c === u, { isArray: Ka } = Array, In = ji("undefined");
function lu(u) {
  return u !== null && !In(u) && u.constructor !== null && !In(u.constructor) && se(u.constructor.isBuffer) && u.constructor.isBuffer(u);
}
const N0 = Be("ArrayBuffer");
function Hv(u) {
  let c;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? c = ArrayBuffer.isView(u) : c = u && u.buffer && N0(u.buffer), c;
}
const qv = ji("string"), se = ji("function"), C0 = ji("number"), au = (u) => u !== null && typeof u == "object", Bv = (u) => u === !0 || u === !1, Ri = (u) => {
  if (Bi(u) !== "object")
    return !1;
  const c = Br(u);
  return (c === null || c === Object.prototype || Object.getPrototypeOf(c) === null) && !(U0 in u) && !(qi in u);
}, jv = (u) => {
  if (!au(u) || lu(u))
    return !1;
  try {
    return Object.keys(u).length === 0 && Object.getPrototypeOf(u) === Object.prototype;
  } catch {
    return !1;
  }
}, Yv = Be("Date"), Lv = Be("File"), Gv = Be("Blob"), Xv = Be("FileList"), Qv = (u) => au(u) && se(u.pipe), Zv = (u) => {
  let c;
  return u && (typeof FormData == "function" && u instanceof FormData || se(u.append) && ((c = Bi(u)) === "formdata" || // detect form-data instance
  c === "object" && se(u.toString) && u.toString() === "[object FormData]"));
}, Vv = Be("URLSearchParams"), [Kv, Jv, kv, $v] = ["ReadableStream", "Request", "Response", "Headers"].map(Be), Fv = (u) => u.trim ? u.trim() : u.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function nu(u, c, { allOwnKeys: r = !1 } = {}) {
  if (u === null || typeof u > "u")
    return;
  let f, o;
  if (typeof u != "object" && (u = [u]), Ka(u))
    for (f = 0, o = u.length; f < o; f++)
      c.call(null, u[f], f, u);
  else {
    if (lu(u))
      return;
    const h = r ? Object.getOwnPropertyNames(u) : Object.keys(u), y = h.length;
    let T;
    for (f = 0; f < y; f++)
      T = h[f], c.call(null, u[T], T, u);
  }
}
function w0(u, c) {
  if (lu(u))
    return null;
  c = c.toLowerCase();
  const r = Object.keys(u);
  let f = r.length, o;
  for (; f-- > 0; )
    if (o = r[f], c === o.toLowerCase())
      return o;
  return null;
}
const ea = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, H0 = (u) => !In(u) && u !== ea;
function Er() {
  const { caseless: u } = H0(this) && this || {}, c = {}, r = (f, o) => {
    const h = u && w0(c, o) || o;
    Ri(c[h]) && Ri(f) ? c[h] = Er(c[h], f) : Ri(f) ? c[h] = Er({}, f) : Ka(f) ? c[h] = f.slice() : c[h] = f;
  };
  for (let f = 0, o = arguments.length; f < o; f++)
    arguments[f] && nu(arguments[f], r);
  return c;
}
const Wv = (u, c, r, { allOwnKeys: f } = {}) => (nu(c, (o, h) => {
  r && se(o) ? u[h] = D0(o, r) : u[h] = o;
}, { allOwnKeys: f }), u), Pv = (u) => (u.charCodeAt(0) === 65279 && (u = u.slice(1)), u), Iv = (u, c, r, f) => {
  u.prototype = Object.create(c.prototype, f), u.prototype.constructor = u, Object.defineProperty(u, "super", {
    value: c.prototype
  }), r && Object.assign(u.prototype, r);
}, tg = (u, c, r, f) => {
  let o, h, y;
  const T = {};
  if (c = c || {}, u == null) return c;
  do {
    for (o = Object.getOwnPropertyNames(u), h = o.length; h-- > 0; )
      y = o[h], (!f || f(y, u, c)) && !T[y] && (c[y] = u[y], T[y] = !0);
    u = r !== !1 && Br(u);
  } while (u && (!r || r(u, c)) && u !== Object.prototype);
  return c;
}, eg = (u, c, r) => {
  u = String(u), (r === void 0 || r > u.length) && (r = u.length), r -= c.length;
  const f = u.indexOf(c, r);
  return f !== -1 && f === r;
}, lg = (u) => {
  if (!u) return null;
  if (Ka(u)) return u;
  let c = u.length;
  if (!C0(c)) return null;
  const r = new Array(c);
  for (; c-- > 0; )
    r[c] = u[c];
  return r;
}, ag = /* @__PURE__ */ ((u) => (c) => u && c instanceof u)(typeof Uint8Array < "u" && Br(Uint8Array)), ng = (u, c) => {
  const f = (u && u[qi]).call(u);
  let o;
  for (; (o = f.next()) && !o.done; ) {
    const h = o.value;
    c.call(u, h[0], h[1]);
  }
}, ug = (u, c) => {
  let r;
  const f = [];
  for (; (r = u.exec(c)) !== null; )
    f.push(r);
  return f;
}, ig = Be("HTMLFormElement"), cg = (u) => u.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, f, o) {
    return f.toUpperCase() + o;
  }
), a0 = (({ hasOwnProperty: u }) => (c, r) => u.call(c, r))(Object.prototype), fg = Be("RegExp"), q0 = (u, c) => {
  const r = Object.getOwnPropertyDescriptors(u), f = {};
  nu(r, (o, h) => {
    let y;
    (y = c(o, h, u)) !== !1 && (f[h] = y || o);
  }), Object.defineProperties(u, f);
}, rg = (u) => {
  q0(u, (c, r) => {
    if (se(u) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const f = u[r];
    if (se(f)) {
      if (c.enumerable = !1, "writable" in c) {
        c.writable = !1;
        return;
      }
      c.set || (c.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, sg = (u, c) => {
  const r = {}, f = (o) => {
    o.forEach((h) => {
      r[h] = !0;
    });
  };
  return Ka(u) ? f(u) : f(String(u).split(c)), r;
}, og = () => {
}, dg = (u, c) => u != null && Number.isFinite(u = +u) ? u : c;
function hg(u) {
  return !!(u && se(u.append) && u[U0] === "FormData" && u[qi]);
}
const yg = (u) => {
  const c = new Array(10), r = (f, o) => {
    if (au(f)) {
      if (c.indexOf(f) >= 0)
        return;
      if (lu(f))
        return f;
      if (!("toJSON" in f)) {
        c[o] = f;
        const h = Ka(f) ? [] : {};
        return nu(f, (y, T) => {
          const E = r(y, o + 1);
          !In(E) && (h[T] = E);
        }), c[o] = void 0, h;
      }
    }
    return f;
  };
  return r(u, 0);
}, mg = Be("AsyncFunction"), vg = (u) => u && (au(u) || se(u)) && se(u.then) && se(u.catch), B0 = ((u, c) => u ? setImmediate : c ? ((r, f) => (ea.addEventListener("message", ({ source: o, data: h }) => {
  o === ea && h === r && f.length && f.shift()();
}, !1), (o) => {
  f.push(o), ea.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  se(ea.postMessage)
), gg = typeof queueMicrotask < "u" ? queueMicrotask.bind(ea) : typeof process < "u" && process.nextTick || B0, pg = (u) => u != null && se(u[qi]), x = {
  isArray: Ka,
  isArrayBuffer: N0,
  isBuffer: lu,
  isFormData: Zv,
  isArrayBufferView: Hv,
  isString: qv,
  isNumber: C0,
  isBoolean: Bv,
  isObject: au,
  isPlainObject: Ri,
  isEmptyObject: jv,
  isReadableStream: Kv,
  isRequest: Jv,
  isResponse: kv,
  isHeaders: $v,
  isUndefined: In,
  isDate: Yv,
  isFile: Lv,
  isBlob: Gv,
  isRegExp: fg,
  isFunction: se,
  isStream: Qv,
  isURLSearchParams: Vv,
  isTypedArray: ag,
  isFileList: Xv,
  forEach: nu,
  merge: Er,
  extend: Wv,
  trim: Fv,
  stripBOM: Pv,
  inherits: Iv,
  toFlatObject: tg,
  kindOf: Bi,
  kindOfTest: Be,
  endsWith: eg,
  toArray: lg,
  forEachEntry: ng,
  matchAll: ug,
  isHTMLForm: ig,
  hasOwnProperty: a0,
  hasOwnProp: a0,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: q0,
  freezeMethods: rg,
  toObjectSet: sg,
  toCamelCase: cg,
  noop: og,
  toFiniteNumber: dg,
  findKey: w0,
  global: ea,
  isContextDefined: H0,
  isSpecCompliantForm: hg,
  toJSONObject: yg,
  isAsyncFn: mg,
  isThenable: vg,
  setImmediate: B0,
  asap: gg,
  isIterable: pg
};
function lt(u, c, r, f, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = u, this.name = "AxiosError", c && (this.code = c), r && (this.config = r), f && (this.request = f), o && (this.response = o, this.status = o.status ? o.status : null);
}
x.inherits(lt, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: x.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const j0 = lt.prototype, Y0 = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((u) => {
  Y0[u] = { value: u };
});
Object.defineProperties(lt, Y0);
Object.defineProperty(j0, "isAxiosError", { value: !0 });
lt.from = (u, c, r, f, o, h) => {
  const y = Object.create(j0);
  return x.toFlatObject(u, y, function(E) {
    return E !== Error.prototype;
  }, (T) => T !== "isAxiosError"), lt.call(y, u.message, c, r, f, o), y.cause = u, y.name = u.name, h && Object.assign(y, h), y;
};
const bg = null;
function Tr(u) {
  return x.isPlainObject(u) || x.isArray(u);
}
function L0(u) {
  return x.endsWith(u, "[]") ? u.slice(0, -2) : u;
}
function n0(u, c, r) {
  return u ? u.concat(c).map(function(o, h) {
    return o = L0(o), !r && h ? "[" + o + "]" : o;
  }).join(r ? "." : "") : c;
}
function Sg(u) {
  return x.isArray(u) && !u.some(Tr);
}
const Eg = x.toFlatObject(x, {}, null, function(c) {
  return /^is[A-Z]/.test(c);
});
function Yi(u, c, r) {
  if (!x.isObject(u))
    throw new TypeError("target must be an object");
  c = c || new FormData(), r = x.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(B, w) {
    return !x.isUndefined(w[B]);
  });
  const f = r.metaTokens, o = r.visitor || b, h = r.dots, y = r.indexes, E = (r.Blob || typeof Blob < "u" && Blob) && x.isSpecCompliantForm(c);
  if (!x.isFunction(o))
    throw new TypeError("visitor must be a function");
  function v(q) {
    if (q === null) return "";
    if (x.isDate(q))
      return q.toISOString();
    if (x.isBoolean(q))
      return q.toString();
    if (!E && x.isBlob(q))
      throw new lt("Blob is not supported. Use a Buffer instead.");
    return x.isArrayBuffer(q) || x.isTypedArray(q) ? E && typeof Blob == "function" ? new Blob([q]) : Buffer.from(q) : q;
  }
  function b(q, B, w) {
    let Q = q;
    if (q && !w && typeof q == "object") {
      if (x.endsWith(B, "{}"))
        B = f ? B : B.slice(0, -2), q = JSON.stringify(q);
      else if (x.isArray(q) && Sg(q) || (x.isFileList(q) || x.endsWith(B, "[]")) && (Q = x.toArray(q)))
        return B = L0(B), Q.forEach(function(G, ut) {
          !(x.isUndefined(G) || G === null) && c.append(
            // eslint-disable-next-line no-nested-ternary
            y === !0 ? n0([B], ut, h) : y === null ? B : B + "[]",
            v(G)
          );
        }), !1;
    }
    return Tr(q) ? !0 : (c.append(n0(w, B, h), v(q)), !1);
  }
  const D = [], j = Object.assign(Eg, {
    defaultVisitor: b,
    convertValue: v,
    isVisitable: Tr
  });
  function J(q, B) {
    if (!x.isUndefined(q)) {
      if (D.indexOf(q) !== -1)
        throw Error("Circular reference detected in " + B.join("."));
      D.push(q), x.forEach(q, function(Q, V) {
        (!(x.isUndefined(Q) || Q === null) && o.call(
          c,
          Q,
          x.isString(V) ? V.trim() : V,
          B,
          j
        )) === !0 && J(Q, B ? B.concat(V) : [V]);
      }), D.pop();
    }
  }
  if (!x.isObject(u))
    throw new TypeError("data must be an object");
  return J(u), c;
}
function u0(u) {
  const c = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(u).replace(/[!'()~]|%20|%00/g, function(f) {
    return c[f];
  });
}
function jr(u, c) {
  this._pairs = [], u && Yi(u, this, c);
}
const G0 = jr.prototype;
G0.append = function(c, r) {
  this._pairs.push([c, r]);
};
G0.toString = function(c) {
  const r = c ? function(f) {
    return c.call(this, f, u0);
  } : u0;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function Tg(u) {
  return encodeURIComponent(u).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function X0(u, c, r) {
  if (!c)
    return u;
  const f = r && r.encode || Tg;
  x.isFunction(r) && (r = {
    serialize: r
  });
  const o = r && r.serialize;
  let h;
  if (o ? h = o(c, r) : h = x.isURLSearchParams(c) ? c.toString() : new jr(c, r).toString(f), h) {
    const y = u.indexOf("#");
    y !== -1 && (u = u.slice(0, y)), u += (u.indexOf("?") === -1 ? "?" : "&") + h;
  }
  return u;
}
class i0 {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(c, r, f) {
    return this.handlers.push({
      fulfilled: c,
      rejected: r,
      synchronous: f ? f.synchronous : !1,
      runWhen: f ? f.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(c) {
    this.handlers[c] && (this.handlers[c] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(c) {
    x.forEach(this.handlers, function(f) {
      f !== null && c(f);
    });
  }
}
const Q0 = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ag = typeof URLSearchParams < "u" ? URLSearchParams : jr, Og = typeof FormData < "u" ? FormData : null, Rg = typeof Blob < "u" ? Blob : null, _g = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ag,
    FormData: Og,
    Blob: Rg
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Yr = typeof window < "u" && typeof document < "u", Ar = typeof navigator == "object" && navigator || void 0, xg = Yr && (!Ar || ["ReactNative", "NativeScript", "NS"].indexOf(Ar.product) < 0), zg = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Mg = Yr && window.location.href || "http://localhost", Dg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Yr,
  hasStandardBrowserEnv: xg,
  hasStandardBrowserWebWorkerEnv: zg,
  navigator: Ar,
  origin: Mg
}, Symbol.toStringTag, { value: "Module" })), te = {
  ...Dg,
  ..._g
};
function Ug(u, c) {
  return Yi(u, new te.classes.URLSearchParams(), {
    visitor: function(r, f, o, h) {
      return te.isNode && x.isBuffer(r) ? (this.append(f, r.toString("base64")), !1) : h.defaultVisitor.apply(this, arguments);
    },
    ...c
  });
}
function Ng(u) {
  return x.matchAll(/\w+|\[(\w*)]/g, u).map((c) => c[0] === "[]" ? "" : c[1] || c[0]);
}
function Cg(u) {
  const c = {}, r = Object.keys(u);
  let f;
  const o = r.length;
  let h;
  for (f = 0; f < o; f++)
    h = r[f], c[h] = u[h];
  return c;
}
function Z0(u) {
  function c(r, f, o, h) {
    let y = r[h++];
    if (y === "__proto__") return !0;
    const T = Number.isFinite(+y), E = h >= r.length;
    return y = !y && x.isArray(o) ? o.length : y, E ? (x.hasOwnProp(o, y) ? o[y] = [o[y], f] : o[y] = f, !T) : ((!o[y] || !x.isObject(o[y])) && (o[y] = []), c(r, f, o[y], h) && x.isArray(o[y]) && (o[y] = Cg(o[y])), !T);
  }
  if (x.isFormData(u) && x.isFunction(u.entries)) {
    const r = {};
    return x.forEachEntry(u, (f, o) => {
      c(Ng(f), o, r, 0);
    }), r;
  }
  return null;
}
function wg(u, c, r) {
  if (x.isString(u))
    try {
      return (c || JSON.parse)(u), x.trim(u);
    } catch (f) {
      if (f.name !== "SyntaxError")
        throw f;
    }
  return (r || JSON.stringify)(u);
}
const uu = {
  transitional: Q0,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(c, r) {
    const f = r.getContentType() || "", o = f.indexOf("application/json") > -1, h = x.isObject(c);
    if (h && x.isHTMLForm(c) && (c = new FormData(c)), x.isFormData(c))
      return o ? JSON.stringify(Z0(c)) : c;
    if (x.isArrayBuffer(c) || x.isBuffer(c) || x.isStream(c) || x.isFile(c) || x.isBlob(c) || x.isReadableStream(c))
      return c;
    if (x.isArrayBufferView(c))
      return c.buffer;
    if (x.isURLSearchParams(c))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), c.toString();
    let T;
    if (h) {
      if (f.indexOf("application/x-www-form-urlencoded") > -1)
        return Ug(c, this.formSerializer).toString();
      if ((T = x.isFileList(c)) || f.indexOf("multipart/form-data") > -1) {
        const E = this.env && this.env.FormData;
        return Yi(
          T ? { "files[]": c } : c,
          E && new E(),
          this.formSerializer
        );
      }
    }
    return h || o ? (r.setContentType("application/json", !1), wg(c)) : c;
  }],
  transformResponse: [function(c) {
    const r = this.transitional || uu.transitional, f = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (x.isResponse(c) || x.isReadableStream(c))
      return c;
    if (c && x.isString(c) && (f && !this.responseType || o)) {
      const y = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(c);
      } catch (T) {
        if (y)
          throw T.name === "SyntaxError" ? lt.from(T, lt.ERR_BAD_RESPONSE, this, null, this.response) : T;
      }
    }
    return c;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: te.classes.FormData,
    Blob: te.classes.Blob
  },
  validateStatus: function(c) {
    return c >= 200 && c < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
x.forEach(["delete", "get", "head", "post", "put", "patch"], (u) => {
  uu.headers[u] = {};
});
const Hg = x.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), qg = (u) => {
  const c = {};
  let r, f, o;
  return u && u.split(`
`).forEach(function(y) {
    o = y.indexOf(":"), r = y.substring(0, o).trim().toLowerCase(), f = y.substring(o + 1).trim(), !(!r || c[r] && Hg[r]) && (r === "set-cookie" ? c[r] ? c[r].push(f) : c[r] = [f] : c[r] = c[r] ? c[r] + ", " + f : f);
  }), c;
}, c0 = Symbol("internals");
function $n(u) {
  return u && String(u).trim().toLowerCase();
}
function _i(u) {
  return u === !1 || u == null ? u : x.isArray(u) ? u.map(_i) : String(u);
}
function Bg(u) {
  const c = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let f;
  for (; f = r.exec(u); )
    c[f[1]] = f[2];
  return c;
}
const jg = (u) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(u.trim());
function hr(u, c, r, f, o) {
  if (x.isFunction(f))
    return f.call(this, c, r);
  if (o && (c = r), !!x.isString(c)) {
    if (x.isString(f))
      return c.indexOf(f) !== -1;
    if (x.isRegExp(f))
      return f.test(c);
  }
}
function Yg(u) {
  return u.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (c, r, f) => r.toUpperCase() + f);
}
function Lg(u, c) {
  const r = x.toCamelCase(" " + c);
  ["get", "set", "has"].forEach((f) => {
    Object.defineProperty(u, f + r, {
      value: function(o, h, y) {
        return this[f].call(this, c, o, h, y);
      },
      configurable: !0
    });
  });
}
let oe = class {
  constructor(c) {
    c && this.set(c);
  }
  set(c, r, f) {
    const o = this;
    function h(T, E, v) {
      const b = $n(E);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const D = x.findKey(o, b);
      (!D || o[D] === void 0 || v === !0 || v === void 0 && o[D] !== !1) && (o[D || E] = _i(T));
    }
    const y = (T, E) => x.forEach(T, (v, b) => h(v, b, E));
    if (x.isPlainObject(c) || c instanceof this.constructor)
      y(c, r);
    else if (x.isString(c) && (c = c.trim()) && !jg(c))
      y(qg(c), r);
    else if (x.isObject(c) && x.isIterable(c)) {
      let T = {}, E, v;
      for (const b of c) {
        if (!x.isArray(b))
          throw TypeError("Object iterator must return a key-value pair");
        T[v = b[0]] = (E = T[v]) ? x.isArray(E) ? [...E, b[1]] : [E, b[1]] : b[1];
      }
      y(T, r);
    } else
      c != null && h(r, c, f);
    return this;
  }
  get(c, r) {
    if (c = $n(c), c) {
      const f = x.findKey(this, c);
      if (f) {
        const o = this[f];
        if (!r)
          return o;
        if (r === !0)
          return Bg(o);
        if (x.isFunction(r))
          return r.call(this, o, f);
        if (x.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(c, r) {
    if (c = $n(c), c) {
      const f = x.findKey(this, c);
      return !!(f && this[f] !== void 0 && (!r || hr(this, this[f], f, r)));
    }
    return !1;
  }
  delete(c, r) {
    const f = this;
    let o = !1;
    function h(y) {
      if (y = $n(y), y) {
        const T = x.findKey(f, y);
        T && (!r || hr(f, f[T], T, r)) && (delete f[T], o = !0);
      }
    }
    return x.isArray(c) ? c.forEach(h) : h(c), o;
  }
  clear(c) {
    const r = Object.keys(this);
    let f = r.length, o = !1;
    for (; f--; ) {
      const h = r[f];
      (!c || hr(this, this[h], h, c, !0)) && (delete this[h], o = !0);
    }
    return o;
  }
  normalize(c) {
    const r = this, f = {};
    return x.forEach(this, (o, h) => {
      const y = x.findKey(f, h);
      if (y) {
        r[y] = _i(o), delete r[h];
        return;
      }
      const T = c ? Yg(h) : String(h).trim();
      T !== h && delete r[h], r[T] = _i(o), f[T] = !0;
    }), this;
  }
  concat(...c) {
    return this.constructor.concat(this, ...c);
  }
  toJSON(c) {
    const r = /* @__PURE__ */ Object.create(null);
    return x.forEach(this, (f, o) => {
      f != null && f !== !1 && (r[o] = c && x.isArray(f) ? f.join(", ") : f);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([c, r]) => c + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(c) {
    return c instanceof this ? c : new this(c);
  }
  static concat(c, ...r) {
    const f = new this(c);
    return r.forEach((o) => f.set(o)), f;
  }
  static accessor(c) {
    const f = (this[c0] = this[c0] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function h(y) {
      const T = $n(y);
      f[T] || (Lg(o, y), f[T] = !0);
    }
    return x.isArray(c) ? c.forEach(h) : h(c), this;
  }
};
oe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
x.reduceDescriptors(oe.prototype, ({ value: u }, c) => {
  let r = c[0].toUpperCase() + c.slice(1);
  return {
    get: () => u,
    set(f) {
      this[r] = f;
    }
  };
});
x.freezeMethods(oe);
function yr(u, c) {
  const r = this || uu, f = c || r, o = oe.from(f.headers);
  let h = f.data;
  return x.forEach(u, function(T) {
    h = T.call(r, h, o.normalize(), c ? c.status : void 0);
  }), o.normalize(), h;
}
function V0(u) {
  return !!(u && u.__CANCEL__);
}
function Ja(u, c, r) {
  lt.call(this, u ?? "canceled", lt.ERR_CANCELED, c, r), this.name = "CanceledError";
}
x.inherits(Ja, lt, {
  __CANCEL__: !0
});
function K0(u, c, r) {
  const f = r.config.validateStatus;
  !r.status || !f || f(r.status) ? u(r) : c(new lt(
    "Request failed with status code " + r.status,
    [lt.ERR_BAD_REQUEST, lt.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Gg(u) {
  const c = /^([-+\w]{1,25})(:?\/\/|:)/.exec(u);
  return c && c[1] || "";
}
function Xg(u, c) {
  u = u || 10;
  const r = new Array(u), f = new Array(u);
  let o = 0, h = 0, y;
  return c = c !== void 0 ? c : 1e3, function(E) {
    const v = Date.now(), b = f[h];
    y || (y = v), r[o] = E, f[o] = v;
    let D = h, j = 0;
    for (; D !== o; )
      j += r[D++], D = D % u;
    if (o = (o + 1) % u, o === h && (h = (h + 1) % u), v - y < c)
      return;
    const J = b && v - b;
    return J ? Math.round(j * 1e3 / J) : void 0;
  };
}
function Qg(u, c) {
  let r = 0, f = 1e3 / c, o, h;
  const y = (v, b = Date.now()) => {
    r = b, o = null, h && (clearTimeout(h), h = null), u(...v);
  };
  return [(...v) => {
    const b = Date.now(), D = b - r;
    D >= f ? y(v, b) : (o = v, h || (h = setTimeout(() => {
      h = null, y(o);
    }, f - D)));
  }, () => o && y(o)];
}
const Di = (u, c, r = 3) => {
  let f = 0;
  const o = Xg(50, 250);
  return Qg((h) => {
    const y = h.loaded, T = h.lengthComputable ? h.total : void 0, E = y - f, v = o(E), b = y <= T;
    f = y;
    const D = {
      loaded: y,
      total: T,
      progress: T ? y / T : void 0,
      bytes: E,
      rate: v || void 0,
      estimated: v && T && b ? (T - y) / v : void 0,
      event: h,
      lengthComputable: T != null,
      [c ? "download" : "upload"]: !0
    };
    u(D);
  }, r);
}, f0 = (u, c) => {
  const r = u != null;
  return [(f) => c[0]({
    lengthComputable: r,
    total: u,
    loaded: f
  }), c[1]];
}, r0 = (u) => (...c) => x.asap(() => u(...c)), Zg = te.hasStandardBrowserEnv ? /* @__PURE__ */ ((u, c) => (r) => (r = new URL(r, te.origin), u.protocol === r.protocol && u.host === r.host && (c || u.port === r.port)))(
  new URL(te.origin),
  te.navigator && /(msie|trident)/i.test(te.navigator.userAgent)
) : () => !0, Vg = te.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(u, c, r, f, o, h) {
      const y = [u + "=" + encodeURIComponent(c)];
      x.isNumber(r) && y.push("expires=" + new Date(r).toGMTString()), x.isString(f) && y.push("path=" + f), x.isString(o) && y.push("domain=" + o), h === !0 && y.push("secure"), document.cookie = y.join("; ");
    },
    read(u) {
      const c = document.cookie.match(new RegExp("(^|;\\s*)(" + u + ")=([^;]*)"));
      return c ? decodeURIComponent(c[3]) : null;
    },
    remove(u) {
      this.write(u, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Kg(u) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(u);
}
function Jg(u, c) {
  return c ? u.replace(/\/?\/$/, "") + "/" + c.replace(/^\/+/, "") : u;
}
function J0(u, c, r) {
  let f = !Kg(c);
  return u && (f || r == !1) ? Jg(u, c) : c;
}
const s0 = (u) => u instanceof oe ? { ...u } : u;
function aa(u, c) {
  c = c || {};
  const r = {};
  function f(v, b, D, j) {
    return x.isPlainObject(v) && x.isPlainObject(b) ? x.merge.call({ caseless: j }, v, b) : x.isPlainObject(b) ? x.merge({}, b) : x.isArray(b) ? b.slice() : b;
  }
  function o(v, b, D, j) {
    if (x.isUndefined(b)) {
      if (!x.isUndefined(v))
        return f(void 0, v, D, j);
    } else return f(v, b, D, j);
  }
  function h(v, b) {
    if (!x.isUndefined(b))
      return f(void 0, b);
  }
  function y(v, b) {
    if (x.isUndefined(b)) {
      if (!x.isUndefined(v))
        return f(void 0, v);
    } else return f(void 0, b);
  }
  function T(v, b, D) {
    if (D in c)
      return f(v, b);
    if (D in u)
      return f(void 0, v);
  }
  const E = {
    url: h,
    method: h,
    data: h,
    baseURL: y,
    transformRequest: y,
    transformResponse: y,
    paramsSerializer: y,
    timeout: y,
    timeoutMessage: y,
    withCredentials: y,
    withXSRFToken: y,
    adapter: y,
    responseType: y,
    xsrfCookieName: y,
    xsrfHeaderName: y,
    onUploadProgress: y,
    onDownloadProgress: y,
    decompress: y,
    maxContentLength: y,
    maxBodyLength: y,
    beforeRedirect: y,
    transport: y,
    httpAgent: y,
    httpsAgent: y,
    cancelToken: y,
    socketPath: y,
    responseEncoding: y,
    validateStatus: T,
    headers: (v, b, D) => o(s0(v), s0(b), D, !0)
  };
  return x.forEach(Object.keys({ ...u, ...c }), function(b) {
    const D = E[b] || o, j = D(u[b], c[b], b);
    x.isUndefined(j) && D !== T || (r[b] = j);
  }), r;
}
const k0 = (u) => {
  const c = aa({}, u);
  let { data: r, withXSRFToken: f, xsrfHeaderName: o, xsrfCookieName: h, headers: y, auth: T } = c;
  c.headers = y = oe.from(y), c.url = X0(J0(c.baseURL, c.url, c.allowAbsoluteUrls), u.params, u.paramsSerializer), T && y.set(
    "Authorization",
    "Basic " + btoa((T.username || "") + ":" + (T.password ? unescape(encodeURIComponent(T.password)) : ""))
  );
  let E;
  if (x.isFormData(r)) {
    if (te.hasStandardBrowserEnv || te.hasStandardBrowserWebWorkerEnv)
      y.setContentType(void 0);
    else if ((E = y.getContentType()) !== !1) {
      const [v, ...b] = E ? E.split(";").map((D) => D.trim()).filter(Boolean) : [];
      y.setContentType([v || "multipart/form-data", ...b].join("; "));
    }
  }
  if (te.hasStandardBrowserEnv && (f && x.isFunction(f) && (f = f(c)), f || f !== !1 && Zg(c.url))) {
    const v = o && h && Vg.read(h);
    v && y.set(o, v);
  }
  return c;
}, kg = typeof XMLHttpRequest < "u", $g = kg && function(u) {
  return new Promise(function(r, f) {
    const o = k0(u);
    let h = o.data;
    const y = oe.from(o.headers).normalize();
    let { responseType: T, onUploadProgress: E, onDownloadProgress: v } = o, b, D, j, J, q;
    function B() {
      J && J(), q && q(), o.cancelToken && o.cancelToken.unsubscribe(b), o.signal && o.signal.removeEventListener("abort", b);
    }
    let w = new XMLHttpRequest();
    w.open(o.method.toUpperCase(), o.url, !0), w.timeout = o.timeout;
    function Q() {
      if (!w)
        return;
      const G = oe.from(
        "getAllResponseHeaders" in w && w.getAllResponseHeaders()
      ), z = {
        data: !T || T === "text" || T === "json" ? w.responseText : w.response,
        status: w.status,
        statusText: w.statusText,
        headers: G,
        config: u,
        request: w
      };
      K0(function(k) {
        r(k), B();
      }, function(k) {
        f(k), B();
      }, z), w = null;
    }
    "onloadend" in w ? w.onloadend = Q : w.onreadystatechange = function() {
      !w || w.readyState !== 4 || w.status === 0 && !(w.responseURL && w.responseURL.indexOf("file:") === 0) || setTimeout(Q);
    }, w.onabort = function() {
      w && (f(new lt("Request aborted", lt.ECONNABORTED, u, w)), w = null);
    }, w.onerror = function() {
      f(new lt("Network Error", lt.ERR_NETWORK, u, w)), w = null;
    }, w.ontimeout = function() {
      let ut = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const z = o.transitional || Q0;
      o.timeoutErrorMessage && (ut = o.timeoutErrorMessage), f(new lt(
        ut,
        z.clarifyTimeoutError ? lt.ETIMEDOUT : lt.ECONNABORTED,
        u,
        w
      )), w = null;
    }, h === void 0 && y.setContentType(null), "setRequestHeader" in w && x.forEach(y.toJSON(), function(ut, z) {
      w.setRequestHeader(z, ut);
    }), x.isUndefined(o.withCredentials) || (w.withCredentials = !!o.withCredentials), T && T !== "json" && (w.responseType = o.responseType), v && ([j, q] = Di(v, !0), w.addEventListener("progress", j)), E && w.upload && ([D, J] = Di(E), w.upload.addEventListener("progress", D), w.upload.addEventListener("loadend", J)), (o.cancelToken || o.signal) && (b = (G) => {
      w && (f(!G || G.type ? new Ja(null, u, w) : G), w.abort(), w = null);
    }, o.cancelToken && o.cancelToken.subscribe(b), o.signal && (o.signal.aborted ? b() : o.signal.addEventListener("abort", b)));
    const V = Gg(o.url);
    if (V && te.protocols.indexOf(V) === -1) {
      f(new lt("Unsupported protocol " + V + ":", lt.ERR_BAD_REQUEST, u));
      return;
    }
    w.send(h || null);
  });
}, Fg = (u, c) => {
  const { length: r } = u = u ? u.filter(Boolean) : [];
  if (c || r) {
    let f = new AbortController(), o;
    const h = function(v) {
      if (!o) {
        o = !0, T();
        const b = v instanceof Error ? v : this.reason;
        f.abort(b instanceof lt ? b : new Ja(b instanceof Error ? b.message : b));
      }
    };
    let y = c && setTimeout(() => {
      y = null, h(new lt(`timeout ${c} of ms exceeded`, lt.ETIMEDOUT));
    }, c);
    const T = () => {
      u && (y && clearTimeout(y), y = null, u.forEach((v) => {
        v.unsubscribe ? v.unsubscribe(h) : v.removeEventListener("abort", h);
      }), u = null);
    };
    u.forEach((v) => v.addEventListener("abort", h));
    const { signal: E } = f;
    return E.unsubscribe = () => x.asap(T), E;
  }
}, Wg = function* (u, c) {
  let r = u.byteLength;
  if (r < c) {
    yield u;
    return;
  }
  let f = 0, o;
  for (; f < r; )
    o = f + c, yield u.slice(f, o), f = o;
}, Pg = async function* (u, c) {
  for await (const r of Ig(u))
    yield* Wg(r, c);
}, Ig = async function* (u) {
  if (u[Symbol.asyncIterator]) {
    yield* u;
    return;
  }
  const c = u.getReader();
  try {
    for (; ; ) {
      const { done: r, value: f } = await c.read();
      if (r)
        break;
      yield f;
    }
  } finally {
    await c.cancel();
  }
}, o0 = (u, c, r, f) => {
  const o = Pg(u, c);
  let h = 0, y, T = (E) => {
    y || (y = !0, f && f(E));
  };
  return new ReadableStream({
    async pull(E) {
      try {
        const { done: v, value: b } = await o.next();
        if (v) {
          T(), E.close();
          return;
        }
        let D = b.byteLength;
        if (r) {
          let j = h += D;
          r(j);
        }
        E.enqueue(new Uint8Array(b));
      } catch (v) {
        throw T(v), v;
      }
    },
    cancel(E) {
      return T(E), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, Li = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", $0 = Li && typeof ReadableStream == "function", tp = Li && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((u) => (c) => u.encode(c))(new TextEncoder()) : async (u) => new Uint8Array(await new Response(u).arrayBuffer())), F0 = (u, ...c) => {
  try {
    return !!u(...c);
  } catch {
    return !1;
  }
}, ep = $0 && F0(() => {
  let u = !1;
  const c = new Request(te.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return u = !0, "half";
    }
  }).headers.has("Content-Type");
  return u && !c;
}), d0 = 64 * 1024, Or = $0 && F0(() => x.isReadableStream(new Response("").body)), Ui = {
  stream: Or && ((u) => u.body)
};
Li && ((u) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((c) => {
    !Ui[c] && (Ui[c] = x.isFunction(u[c]) ? (r) => r[c]() : (r, f) => {
      throw new lt(`Response type '${c}' is not supported`, lt.ERR_NOT_SUPPORT, f);
    });
  });
})(new Response());
const lp = async (u) => {
  if (u == null)
    return 0;
  if (x.isBlob(u))
    return u.size;
  if (x.isSpecCompliantForm(u))
    return (await new Request(te.origin, {
      method: "POST",
      body: u
    }).arrayBuffer()).byteLength;
  if (x.isArrayBufferView(u) || x.isArrayBuffer(u))
    return u.byteLength;
  if (x.isURLSearchParams(u) && (u = u + ""), x.isString(u))
    return (await tp(u)).byteLength;
}, ap = async (u, c) => {
  const r = x.toFiniteNumber(u.getContentLength());
  return r ?? lp(c);
}, np = Li && (async (u) => {
  let {
    url: c,
    method: r,
    data: f,
    signal: o,
    cancelToken: h,
    timeout: y,
    onDownloadProgress: T,
    onUploadProgress: E,
    responseType: v,
    headers: b,
    withCredentials: D = "same-origin",
    fetchOptions: j
  } = k0(u);
  v = v ? (v + "").toLowerCase() : "text";
  let J = Fg([o, h && h.toAbortSignal()], y), q;
  const B = J && J.unsubscribe && (() => {
    J.unsubscribe();
  });
  let w;
  try {
    if (E && ep && r !== "get" && r !== "head" && (w = await ap(b, f)) !== 0) {
      let z = new Request(c, {
        method: "POST",
        body: f,
        duplex: "half"
      }), P;
      if (x.isFormData(f) && (P = z.headers.get("content-type")) && b.setContentType(P), z.body) {
        const [k, zt] = f0(
          w,
          Di(r0(E))
        );
        f = o0(z.body, d0, k, zt);
      }
    }
    x.isString(D) || (D = D ? "include" : "omit");
    const Q = "credentials" in Request.prototype;
    q = new Request(c, {
      ...j,
      signal: J,
      method: r.toUpperCase(),
      headers: b.normalize().toJSON(),
      body: f,
      duplex: "half",
      credentials: Q ? D : void 0
    });
    let V = await fetch(q, j);
    const G = Or && (v === "stream" || v === "response");
    if (Or && (T || G && B)) {
      const z = {};
      ["status", "statusText", "headers"].forEach((ee) => {
        z[ee] = V[ee];
      });
      const P = x.toFiniteNumber(V.headers.get("content-length")), [k, zt] = T && f0(
        P,
        Di(r0(T), !0)
      ) || [];
      V = new Response(
        o0(V.body, d0, k, () => {
          zt && zt(), B && B();
        }),
        z
      );
    }
    v = v || "text";
    let ut = await Ui[x.findKey(Ui, v) || "text"](V, u);
    return !G && B && B(), await new Promise((z, P) => {
      K0(z, P, {
        data: ut,
        headers: oe.from(V.headers),
        status: V.status,
        statusText: V.statusText,
        config: u,
        request: q
      });
    });
  } catch (Q) {
    throw B && B(), Q && Q.name === "TypeError" && /Load failed|fetch/i.test(Q.message) ? Object.assign(
      new lt("Network Error", lt.ERR_NETWORK, u, q),
      {
        cause: Q.cause || Q
      }
    ) : lt.from(Q, Q && Q.code, u, q);
  }
}), Rr = {
  http: bg,
  xhr: $g,
  fetch: np
};
x.forEach(Rr, (u, c) => {
  if (u) {
    try {
      Object.defineProperty(u, "name", { value: c });
    } catch {
    }
    Object.defineProperty(u, "adapterName", { value: c });
  }
});
const h0 = (u) => `- ${u}`, up = (u) => x.isFunction(u) || u === null || u === !1, W0 = {
  getAdapter: (u) => {
    u = x.isArray(u) ? u : [u];
    const { length: c } = u;
    let r, f;
    const o = {};
    for (let h = 0; h < c; h++) {
      r = u[h];
      let y;
      if (f = r, !up(r) && (f = Rr[(y = String(r)).toLowerCase()], f === void 0))
        throw new lt(`Unknown adapter '${y}'`);
      if (f)
        break;
      o[y || "#" + h] = f;
    }
    if (!f) {
      const h = Object.entries(o).map(
        ([T, E]) => `adapter ${T} ` + (E === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let y = c ? h.length > 1 ? `since :
` + h.map(h0).join(`
`) : " " + h0(h[0]) : "as no adapter specified";
      throw new lt(
        "There is no suitable adapter to dispatch the request " + y,
        "ERR_NOT_SUPPORT"
      );
    }
    return f;
  },
  adapters: Rr
};
function mr(u) {
  if (u.cancelToken && u.cancelToken.throwIfRequested(), u.signal && u.signal.aborted)
    throw new Ja(null, u);
}
function y0(u) {
  return mr(u), u.headers = oe.from(u.headers), u.data = yr.call(
    u,
    u.transformRequest
  ), ["post", "put", "patch"].indexOf(u.method) !== -1 && u.headers.setContentType("application/x-www-form-urlencoded", !1), W0.getAdapter(u.adapter || uu.adapter)(u).then(function(f) {
    return mr(u), f.data = yr.call(
      u,
      u.transformResponse,
      f
    ), f.headers = oe.from(f.headers), f;
  }, function(f) {
    return V0(f) || (mr(u), f && f.response && (f.response.data = yr.call(
      u,
      u.transformResponse,
      f.response
    ), f.response.headers = oe.from(f.response.headers))), Promise.reject(f);
  });
}
const P0 = "1.11.0", Gi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((u, c) => {
  Gi[u] = function(f) {
    return typeof f === u || "a" + (c < 1 ? "n " : " ") + u;
  };
});
const m0 = {};
Gi.transitional = function(c, r, f) {
  function o(h, y) {
    return "[Axios v" + P0 + "] Transitional option '" + h + "'" + y + (f ? ". " + f : "");
  }
  return (h, y, T) => {
    if (c === !1)
      throw new lt(
        o(y, " has been removed" + (r ? " in " + r : "")),
        lt.ERR_DEPRECATED
      );
    return r && !m0[y] && (m0[y] = !0, console.warn(
      o(
        y,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), c ? c(h, y, T) : !0;
  };
};
Gi.spelling = function(c) {
  return (r, f) => (console.warn(`${f} is likely a misspelling of ${c}`), !0);
};
function ip(u, c, r) {
  if (typeof u != "object")
    throw new lt("options must be an object", lt.ERR_BAD_OPTION_VALUE);
  const f = Object.keys(u);
  let o = f.length;
  for (; o-- > 0; ) {
    const h = f[o], y = c[h];
    if (y) {
      const T = u[h], E = T === void 0 || y(T, h, u);
      if (E !== !0)
        throw new lt("option " + h + " must be " + E, lt.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new lt("Unknown option " + h, lt.ERR_BAD_OPTION);
  }
}
const xi = {
  assertOptions: ip,
  validators: Gi
}, Ze = xi.validators;
let la = class {
  constructor(c) {
    this.defaults = c || {}, this.interceptors = {
      request: new i0(),
      response: new i0()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(c, r) {
    try {
      return await this._request(c, r);
    } catch (f) {
      if (f instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const h = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          f.stack ? h && !String(f.stack).endsWith(h.replace(/^.+\n.+\n/, "")) && (f.stack += `
` + h) : f.stack = h;
        } catch {
        }
      }
      throw f;
    }
  }
  _request(c, r) {
    typeof c == "string" ? (r = r || {}, r.url = c) : r = c || {}, r = aa(this.defaults, r);
    const { transitional: f, paramsSerializer: o, headers: h } = r;
    f !== void 0 && xi.assertOptions(f, {
      silentJSONParsing: Ze.transitional(Ze.boolean),
      forcedJSONParsing: Ze.transitional(Ze.boolean),
      clarifyTimeoutError: Ze.transitional(Ze.boolean)
    }, !1), o != null && (x.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : xi.assertOptions(o, {
      encode: Ze.function,
      serialize: Ze.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), xi.assertOptions(r, {
      baseUrl: Ze.spelling("baseURL"),
      withXsrfToken: Ze.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let y = h && x.merge(
      h.common,
      h[r.method]
    );
    h && x.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (q) => {
        delete h[q];
      }
    ), r.headers = oe.concat(y, h);
    const T = [];
    let E = !0;
    this.interceptors.request.forEach(function(B) {
      typeof B.runWhen == "function" && B.runWhen(r) === !1 || (E = E && B.synchronous, T.unshift(B.fulfilled, B.rejected));
    });
    const v = [];
    this.interceptors.response.forEach(function(B) {
      v.push(B.fulfilled, B.rejected);
    });
    let b, D = 0, j;
    if (!E) {
      const q = [y0.bind(this), void 0];
      for (q.unshift(...T), q.push(...v), j = q.length, b = Promise.resolve(r); D < j; )
        b = b.then(q[D++], q[D++]);
      return b;
    }
    j = T.length;
    let J = r;
    for (D = 0; D < j; ) {
      const q = T[D++], B = T[D++];
      try {
        J = q(J);
      } catch (w) {
        B.call(this, w);
        break;
      }
    }
    try {
      b = y0.call(this, J);
    } catch (q) {
      return Promise.reject(q);
    }
    for (D = 0, j = v.length; D < j; )
      b = b.then(v[D++], v[D++]);
    return b;
  }
  getUri(c) {
    c = aa(this.defaults, c);
    const r = J0(c.baseURL, c.url, c.allowAbsoluteUrls);
    return X0(r, c.params, c.paramsSerializer);
  }
};
x.forEach(["delete", "get", "head", "options"], function(c) {
  la.prototype[c] = function(r, f) {
    return this.request(aa(f || {}, {
      method: c,
      url: r,
      data: (f || {}).data
    }));
  };
});
x.forEach(["post", "put", "patch"], function(c) {
  function r(f) {
    return function(h, y, T) {
      return this.request(aa(T || {}, {
        method: c,
        headers: f ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: h,
        data: y
      }));
    };
  }
  la.prototype[c] = r(), la.prototype[c + "Form"] = r(!0);
});
let cp = class I0 {
  constructor(c) {
    if (typeof c != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(h) {
      r = h;
    });
    const f = this;
    this.promise.then((o) => {
      if (!f._listeners) return;
      let h = f._listeners.length;
      for (; h-- > 0; )
        f._listeners[h](o);
      f._listeners = null;
    }), this.promise.then = (o) => {
      let h;
      const y = new Promise((T) => {
        f.subscribe(T), h = T;
      }).then(o);
      return y.cancel = function() {
        f.unsubscribe(h);
      }, y;
    }, c(function(h, y, T) {
      f.reason || (f.reason = new Ja(h, y, T), r(f.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(c) {
    if (this.reason) {
      c(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(c) : this._listeners = [c];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(c) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(c);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const c = new AbortController(), r = (f) => {
      c.abort(f);
    };
    return this.subscribe(r), c.signal.unsubscribe = () => this.unsubscribe(r), c.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let c;
    return {
      token: new I0(function(o) {
        c = o;
      }),
      cancel: c
    };
  }
};
function fp(u) {
  return function(r) {
    return u.apply(null, r);
  };
}
function rp(u) {
  return x.isObject(u) && u.isAxiosError === !0;
}
const _r = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(_r).forEach(([u, c]) => {
  _r[c] = u;
});
function ty(u) {
  const c = new la(u), r = D0(la.prototype.request, c);
  return x.extend(r, la.prototype, c, { allOwnKeys: !0 }), x.extend(r, c, null, { allOwnKeys: !0 }), r.create = function(o) {
    return ty(aa(u, o));
  }, r;
}
const Ct = ty(uu);
Ct.Axios = la;
Ct.CanceledError = Ja;
Ct.CancelToken = cp;
Ct.isCancel = V0;
Ct.VERSION = P0;
Ct.toFormData = Yi;
Ct.AxiosError = lt;
Ct.Cancel = Ct.CanceledError;
Ct.all = function(c) {
  return Promise.all(c);
};
Ct.spread = fp;
Ct.isAxiosError = rp;
Ct.mergeConfig = aa;
Ct.AxiosHeaders = oe;
Ct.formToJSON = (u) => Z0(x.isHTMLForm(u) ? new FormData(u) : u);
Ct.getAdapter = W0.getAdapter;
Ct.HttpStatusCode = _r;
Ct.default = Ct;
const {
  Axios: pp,
  AxiosError: bp,
  CanceledError: Sp,
  isCancel: Ep,
  CancelToken: Tp,
  VERSION: Ap,
  all: Op,
  Cancel: Rp,
  isAxiosError: _p,
  spread: xp,
  toFormData: zp,
  AxiosHeaders: Mp,
  HttpStatusCode: Dp,
  formToJSON: Up,
  getAdapter: Np,
  mergeConfig: Cp
} = Ct, sp = "", op = "https://newsapi.org/v2/", dp = Ct.create({
  baseURL: op
}), hp = async ({ search: u }) => {
  const { data: c } = await dp.get("everything", {
    params: {
      q: u,
      sortBy: "popularity",
      language: "es",
      pageSize: 10,
      apiKey: sp
    }
  });
  return c;
}, yp = () => {
  const [u, c] = Ot.useState(""), [r, f] = Ot.useState(!1), [o, h] = Ot.useState([]), y = (E) => {
    c(E.target.value);
  }, T = async (E) => {
    if (E.preventDefault(), u.length !== 0) {
      h((v) => [
        ...v,
        { type: "user", value: u }
      ]), c(""), f(!1);
      try {
        const { articles: v } = await hp({ search: u });
        h((b) => [
          ...b,
          { type: "bot", value: v }
        ]);
      } catch (v) {
        console.log(v);
      }
    }
  };
  return Ot.useEffect(() => {
    u.length > 0 ? f(!0) : f(!1);
  }, [u]), /* @__PURE__ */ wl(
    "div",
    {
      id: "chat-widget",
      css: ae`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: var(--component-width, 100%);
        height: var(--component-height, 100%);
        max-height: var(--component-height, 100%);
        max-width: var(--component-width, 100%);
      `,
      children: [
        /* @__PURE__ */ Yt(
          "div",
          {
            className: "screen",
            css: ae`
          height: 100%;
          padding: 10px;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          align-items: flex-end;
          background-color: var(--gris-100);
        `,
            children: o.map((E, v) => /* @__PURE__ */ wl(
              "div",
              {
                css: ae`
              display: flex;
              flex-direction: column;
              width: 100%;
              align-items: ${E.type === "user" ? "flex-end" : "flex-start"};
              margin-bottom: 10px;
            `,
                children: [
                  /* @__PURE__ */ Yt(
                    "div",
                    {
                      css: ae`
                display: flex;
                align-items: center;
                margin-bottom: 5px;
              `,
                      children: /* @__PURE__ */ Yt(
                        "span",
                        {
                          css: ae`
                  font-weight: bold;
                  margin-right: 5px;
                `,
                          children: E.type === "user" ? "Tu" : "Bot"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ wl(
                    "div",
                    {
                      css: ae`
                background-color: ${E.type === "user" ? "var(--primary-color)" : "var(--gris-95)"};
                color: ${E.type === "user" ? "var(--gris-100)" : "var(--gris-0)"};
                padding: 16px;
                border-radius: ${E.type === "user" ? "16px 0px 16px 16px" : "0px 16px 16px 16px"};
                max-width: 80%;
                word-wrap: break-word;
              `,
                      children: [
                        E.type === "user" && E.value,
                        E.type === "bot" && E.value?.map((b, D) => /* @__PURE__ */ Yt(
                          "div",
                          {
                            css: ae`
                      background-color: var(--gris-100);
                      padding: 16px;
                      border-radius: 16px;
                      max-width: 100%;
                      word-wrap: break-word;
                      margin-bottom: 10px;
                      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
                    `,
                            children: /* @__PURE__ */ wl(
                              "div",
                              {
                                css: ae`
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                      `,
                                children: [
                                  /* @__PURE__ */ Yt(
                                    "img",
                                    {
                                      css: ae`
                          border-radius: 8px;
                          height: auto;
                          max-width: 200px;
                          object-fit: cover;
                        `,
                                      src: b.urlToImage,
                                      alt: b.title
                                    }
                                  ),
                                  /* @__PURE__ */ wl(
                                    "div",
                                    {
                                      css: ae`
                          margin-left: 10px;
                          display: flex;
                          flex-direction: column;
                        `,
                                      children: [
                                        /* @__PURE__ */ Yt(
                                          "small",
                                          {
                                            css: ae`
                            align-self: flex-end;
                            margin-bottom: 10px;
                          `,
                                            children: new Date(b.publishedAt).toLocaleString()
                                          }
                                        ),
                                        /* @__PURE__ */ Yt("h3", { children: b.title }),
                                        /* @__PURE__ */ Yt("p", { children: b.description }),
                                        /* @__PURE__ */ Yt(
                                          "div",
                                          {
                                            css: ae`
                            display: flex;
                            flex-direction: row;
                            justify-content: flex-end;
                          `,
                                            children: /* @__PURE__ */ Yt("small", { children: b.source.name })
                                          }
                                        )
                                      ]
                                    }
                                  )
                                ]
                              }
                            )
                          },
                          D
                        ))
                      ]
                    }
                  )
                ]
              },
              v
            ))
          }
        ),
        /* @__PURE__ */ wl(
          "form",
          {
            css: ae`
          height: 100px;
          width: 100%;
          padding: 10px;
          background-color: #fff;
          display: flex;
          place-items: center;
          justify-content: space-around;
          border-top: 1px solid var(--border-color);
        `,
            onSubmit: T,
            children: [
              /* @__PURE__ */ Yt(
                "textarea",
                {
                  css: ae`
            width: 100%;
            padding: 10px;
            margin: 0 16px;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
            resize: none;
            max-height: 100px;
          `,
                  id: "message",
                  name: "message",
                  value: u,
                  onChange: y,
                  onFocus: () => f(!0),
                  onBlur: () => f(!1),
                  required: !0,
                  onKeyDown: (E) => E.key === "Enter" && T(E),
                  type: "text",
                  rows: 1,
                  placeholder: "Escribe tu mensaje..."
                }
              ),
              /* @__PURE__ */ Yt(Cv, { className: `${r ? "typing" : ""}`, type: "submit", children: /* @__PURE__ */ wl(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "icon icon-tabler icons-tabler-outline icon-tabler-send",
                  children: [
                    /* @__PURE__ */ Yt("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
                    /* @__PURE__ */ Yt("path", { d: "M10 14l11 -11" }),
                    /* @__PURE__ */ Yt("path", { d: "M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" })
                  ]
                }
              ) })
            ]
          }
        )
      ]
    }
  );
};
class mp extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const c = document.createElement("div");
    c.id = "root", this.shadowRoot.appendChild(c);
    const r = O0({
      key: "css",
      container: this.shadowRoot,
      prepend: !0
    });
    Tv.createRoot(c).render(
      /* @__PURE__ */ Yt(Ot.StrictMode, { children: /* @__PURE__ */ wl(hv, { value: r, children: [
        /* @__PURE__ */ Yt(Rv, {}),
        /* @__PURE__ */ Yt(yp, {})
      ] }) })
    );
  }
}
customElements.define("chat-widget", mp);
