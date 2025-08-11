function Bb(a, r) {
  for (var i = 0; i < r.length; i++) {
    const s = r[i];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const c in s)
        if (c !== "default" && !(c in a)) {
          const f = Object.getOwnPropertyDescriptor(s, c);
          f && Object.defineProperty(a, c, f.get ? f : {
            enumerable: !0,
            get: () => s[c]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
function mg(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Yc = { exports: {} }, ui = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wh;
function Ub() {
  if (Wh) return ui;
  Wh = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function i(s, c, f) {
    var d = null;
    if (f !== void 0 && (d = "" + f), c.key !== void 0 && (d = "" + c.key), "key" in c) {
      f = {};
      for (var m in c)
        m !== "key" && (f[m] = c[m]);
    } else f = c;
    return c = f.ref, {
      $$typeof: a,
      type: s,
      key: d,
      ref: c !== void 0 ? c : null,
      props: f
    };
  }
  return ui.Fragment = r, ui.jsx = i, ui.jsxs = i, ui;
}
var Jh;
function kb() {
  return Jh || (Jh = 1, Yc.exports = Ub()), Yc.exports;
}
var I = kb(), Gc = { exports: {} }, Ee = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ih;
function Hb() {
  if (Ih) return Ee;
  Ih = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), x = Symbol.iterator;
  function A(C) {
    return C === null || typeof C != "object" ? null : (C = x && C[x] || C["@@iterator"], typeof C == "function" ? C : null);
  }
  var M = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, T = Object.assign, S = {};
  function z(C, V, re) {
    this.props = C, this.context = V, this.refs = S, this.updater = re || M;
  }
  z.prototype.isReactComponent = {}, z.prototype.setState = function(C, V) {
    if (typeof C != "object" && typeof C != "function" && C != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, C, V, "setState");
  }, z.prototype.forceUpdate = function(C) {
    this.updater.enqueueForceUpdate(this, C, "forceUpdate");
  };
  function U() {
  }
  U.prototype = z.prototype;
  function q(C, V, re) {
    this.props = C, this.context = V, this.refs = S, this.updater = re || M;
  }
  var N = q.prototype = new U();
  N.constructor = q, T(N, z.prototype), N.isPureReactComponent = !0;
  var D = Array.isArray, w = { H: null, A: null, T: null, S: null, V: null }, k = Object.prototype.hasOwnProperty;
  function X(C, V, re, ne, oe, ce) {
    return re = ce.ref, {
      $$typeof: a,
      type: C,
      key: V,
      ref: re !== void 0 ? re : null,
      props: ce
    };
  }
  function Z(C, V) {
    return X(
      C.type,
      V,
      void 0,
      void 0,
      void 0,
      C.props
    );
  }
  function W(C) {
    return typeof C == "object" && C !== null && C.$$typeof === a;
  }
  function ae(C) {
    var V = { "=": "=0", ":": "=2" };
    return "$" + C.replace(/[=:]/g, function(re) {
      return V[re];
    });
  }
  var le = /\/+/g;
  function v(C, V) {
    return typeof C == "object" && C !== null && C.key != null ? ae("" + C.key) : V.toString(36);
  }
  function ee() {
  }
  function Y(C) {
    switch (C.status) {
      case "fulfilled":
        return C.value;
      case "rejected":
        throw C.reason;
      default:
        switch (typeof C.status == "string" ? C.then(ee, ee) : (C.status = "pending", C.then(
          function(V) {
            C.status === "pending" && (C.status = "fulfilled", C.value = V);
          },
          function(V) {
            C.status === "pending" && (C.status = "rejected", C.reason = V);
          }
        )), C.status) {
          case "fulfilled":
            return C.value;
          case "rejected":
            throw C.reason;
        }
    }
    throw C;
  }
  function G(C, V, re, ne, oe) {
    var ce = typeof C;
    (ce === "undefined" || ce === "boolean") && (C = null);
    var ue = !1;
    if (C === null) ue = !0;
    else
      switch (ce) {
        case "bigint":
        case "string":
        case "number":
          ue = !0;
          break;
        case "object":
          switch (C.$$typeof) {
            case a:
            case r:
              ue = !0;
              break;
            case b:
              return ue = C._init, G(
                ue(C._payload),
                V,
                re,
                ne,
                oe
              );
          }
      }
    if (ue)
      return oe = oe(C), ue = ne === "" ? "." + v(C, 0) : ne, D(oe) ? (re = "", ue != null && (re = ue.replace(le, "$&/") + "/"), G(oe, V, re, "", function(ze) {
        return ze;
      })) : oe != null && (W(oe) && (oe = Z(
        oe,
        re + (oe.key == null || C && C.key === oe.key ? "" : ("" + oe.key).replace(
          le,
          "$&/"
        ) + "/") + ue
      )), V.push(oe)), 1;
    ue = 0;
    var Ce = ne === "" ? "." : ne + ":";
    if (D(C))
      for (var be = 0; be < C.length; be++)
        ne = C[be], ce = Ce + v(ne, be), ue += G(
          ne,
          V,
          re,
          ce,
          oe
        );
    else if (be = A(C), typeof be == "function")
      for (C = be.call(C), be = 0; !(ne = C.next()).done; )
        ne = ne.value, ce = Ce + v(ne, be++), ue += G(
          ne,
          V,
          re,
          ce,
          oe
        );
    else if (ce === "object") {
      if (typeof C.then == "function")
        return G(
          Y(C),
          V,
          re,
          ne,
          oe
        );
      throw V = String(C), Error(
        "Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ue;
  }
  function O(C, V, re) {
    if (C == null) return C;
    var ne = [], oe = 0;
    return G(C, ne, "", "", function(ce) {
      return V.call(re, ce, oe++);
    }), ne;
  }
  function Q(C) {
    if (C._status === -1) {
      var V = C._result;
      V = V(), V.then(
        function(re) {
          (C._status === 0 || C._status === -1) && (C._status = 1, C._result = re);
        },
        function(re) {
          (C._status === 0 || C._status === -1) && (C._status = 2, C._result = re);
        }
      ), C._status === -1 && (C._status = 0, C._result = V);
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var ie = typeof reportError == "function" ? reportError : function(C) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var V = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof C == "object" && C !== null && typeof C.message == "string" ? String(C.message) : String(C),
        error: C
      });
      if (!window.dispatchEvent(V)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", C);
      return;
    }
    console.error(C);
  };
  function te() {
  }
  return Ee.Children = {
    map: O,
    forEach: function(C, V, re) {
      O(
        C,
        function() {
          V.apply(this, arguments);
        },
        re
      );
    },
    count: function(C) {
      var V = 0;
      return O(C, function() {
        V++;
      }), V;
    },
    toArray: function(C) {
      return O(C, function(V) {
        return V;
      }) || [];
    },
    only: function(C) {
      if (!W(C))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return C;
    }
  }, Ee.Component = z, Ee.Fragment = i, Ee.Profiler = c, Ee.PureComponent = q, Ee.StrictMode = s, Ee.Suspense = g, Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, Ee.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(C) {
      return w.H.useMemoCache(C);
    }
  }, Ee.cache = function(C) {
    return function() {
      return C.apply(null, arguments);
    };
  }, Ee.cloneElement = function(C, V, re) {
    if (C == null)
      throw Error(
        "The argument must be a React element, but you passed " + C + "."
      );
    var ne = T({}, C.props), oe = C.key, ce = void 0;
    if (V != null)
      for (ue in V.ref !== void 0 && (ce = void 0), V.key !== void 0 && (oe = "" + V.key), V)
        !k.call(V, ue) || ue === "key" || ue === "__self" || ue === "__source" || ue === "ref" && V.ref === void 0 || (ne[ue] = V[ue]);
    var ue = arguments.length - 2;
    if (ue === 1) ne.children = re;
    else if (1 < ue) {
      for (var Ce = Array(ue), be = 0; be < ue; be++)
        Ce[be] = arguments[be + 2];
      ne.children = Ce;
    }
    return X(C.type, oe, void 0, void 0, ce, ne);
  }, Ee.createContext = function(C) {
    return C = {
      $$typeof: d,
      _currentValue: C,
      _currentValue2: C,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, C.Provider = C, C.Consumer = {
      $$typeof: f,
      _context: C
    }, C;
  }, Ee.createElement = function(C, V, re) {
    var ne, oe = {}, ce = null;
    if (V != null)
      for (ne in V.key !== void 0 && (ce = "" + V.key), V)
        k.call(V, ne) && ne !== "key" && ne !== "__self" && ne !== "__source" && (oe[ne] = V[ne]);
    var ue = arguments.length - 2;
    if (ue === 1) oe.children = re;
    else if (1 < ue) {
      for (var Ce = Array(ue), be = 0; be < ue; be++)
        Ce[be] = arguments[be + 2];
      oe.children = Ce;
    }
    if (C && C.defaultProps)
      for (ne in ue = C.defaultProps, ue)
        oe[ne] === void 0 && (oe[ne] = ue[ne]);
    return X(C, ce, void 0, void 0, null, oe);
  }, Ee.createRef = function() {
    return { current: null };
  }, Ee.forwardRef = function(C) {
    return { $$typeof: m, render: C };
  }, Ee.isValidElement = W, Ee.lazy = function(C) {
    return {
      $$typeof: b,
      _payload: { _status: -1, _result: C },
      _init: Q
    };
  }, Ee.memo = function(C, V) {
    return {
      $$typeof: h,
      type: C,
      compare: V === void 0 ? null : V
    };
  }, Ee.startTransition = function(C) {
    var V = w.T, re = {};
    w.T = re;
    try {
      var ne = C(), oe = w.S;
      oe !== null && oe(re, ne), typeof ne == "object" && ne !== null && typeof ne.then == "function" && ne.then(te, ie);
    } catch (ce) {
      ie(ce);
    } finally {
      w.T = V;
    }
  }, Ee.unstable_useCacheRefresh = function() {
    return w.H.useCacheRefresh();
  }, Ee.use = function(C) {
    return w.H.use(C);
  }, Ee.useActionState = function(C, V, re) {
    return w.H.useActionState(C, V, re);
  }, Ee.useCallback = function(C, V) {
    return w.H.useCallback(C, V);
  }, Ee.useContext = function(C) {
    return w.H.useContext(C);
  }, Ee.useDebugValue = function() {
  }, Ee.useDeferredValue = function(C, V) {
    return w.H.useDeferredValue(C, V);
  }, Ee.useEffect = function(C, V, re) {
    var ne = w.H;
    if (typeof re == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return ne.useEffect(C, V);
  }, Ee.useId = function() {
    return w.H.useId();
  }, Ee.useImperativeHandle = function(C, V, re) {
    return w.H.useImperativeHandle(C, V, re);
  }, Ee.useInsertionEffect = function(C, V) {
    return w.H.useInsertionEffect(C, V);
  }, Ee.useLayoutEffect = function(C, V) {
    return w.H.useLayoutEffect(C, V);
  }, Ee.useMemo = function(C, V) {
    return w.H.useMemo(C, V);
  }, Ee.useOptimistic = function(C, V) {
    return w.H.useOptimistic(C, V);
  }, Ee.useReducer = function(C, V, re) {
    return w.H.useReducer(C, V, re);
  }, Ee.useRef = function(C) {
    return w.H.useRef(C);
  }, Ee.useState = function(C) {
    return w.H.useState(C);
  }, Ee.useSyncExternalStore = function(C, V, re) {
    return w.H.useSyncExternalStore(
      C,
      V,
      re
    );
  }, Ee.useTransition = function() {
    return w.H.useTransition();
  }, Ee.version = "19.1.1", Ee;
}
var e0;
function wf() {
  return e0 || (e0 = 1, Gc.exports = Hb()), Gc.exports;
}
var E = wf();
const jn = /* @__PURE__ */ mg(E), uf = /* @__PURE__ */ Bb({
  __proto__: null,
  default: jn
}, [E]);
function Lb(a) {
  if (a.sheet)
    return a.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === a)
      return document.styleSheets[r];
}
function jb(a) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", a.key), a.nonce !== void 0 && r.setAttribute("nonce", a.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var $b = /* @__PURE__ */ function() {
  function a(i) {
    var s = this;
    this._insertTag = function(c) {
      var f;
      s.tags.length === 0 ? s.insertionPoint ? f = s.insertionPoint.nextSibling : s.prepend ? f = s.container.firstChild : f = s.before : f = s.tags[s.tags.length - 1].nextSibling, s.container.insertBefore(c, f), s.tags.push(c);
    }, this.isSpeedy = i.speedy === void 0 ? !0 : i.speedy, this.tags = [], this.ctr = 0, this.nonce = i.nonce, this.key = i.key, this.container = i.container, this.prepend = i.prepend, this.insertionPoint = i.insertionPoint, this.before = null;
  }
  var r = a.prototype;
  return r.hydrate = function(s) {
    s.forEach(this._insertTag);
  }, r.insert = function(s) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(jb(this));
    var c = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var f = Lb(c);
      try {
        f.insertRule(s, f.cssRules.length);
      } catch {
      }
    } else
      c.appendChild(document.createTextNode(s));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(s) {
      var c;
      return (c = s.parentNode) == null ? void 0 : c.removeChild(s);
    }), this.tags = [], this.ctr = 0;
  }, a;
}(), qt = "-ms-", ls = "-moz-", ke = "-webkit-", hg = "comm", zf = "rule", _f = "decl", qb = "@import", gg = "@keyframes", Yb = "@layer", Gb = Math.abs, ds = String.fromCharCode, Vb = Object.assign;
function Xb(a, r) {
  return Ht(a, 0) ^ 45 ? (((r << 2 ^ Ht(a, 0)) << 2 ^ Ht(a, 1)) << 2 ^ Ht(a, 2)) << 2 ^ Ht(a, 3) : 0;
}
function yg(a) {
  return a.trim();
}
function Kb(a, r) {
  return (a = r.exec(a)) ? a[0] : a;
}
function He(a, r, i) {
  return a.replace(r, i);
}
function cf(a, r) {
  return a.indexOf(r);
}
function Ht(a, r) {
  return a.charCodeAt(r) | 0;
}
function Ei(a, r, i) {
  return a.slice(r, i);
}
function Un(a) {
  return a.length;
}
function Df(a) {
  return a.length;
}
function Ko(a, r) {
  return r.push(a), a;
}
function Qb(a, r) {
  return a.map(r).join("");
}
var ps = 1, sr = 1, vg = 0, Jt = 0, Rt = 0, cr = "";
function ms(a, r, i, s, c, f, d) {
  return { value: a, root: r, parent: i, type: s, props: c, children: f, line: ps, column: sr, length: d, return: "" };
}
function ci(a, r) {
  return Vb(ms("", null, null, "", null, null, 0), a, { length: -a.length }, r);
}
function Zb() {
  return Rt;
}
function Pb() {
  return Rt = Jt > 0 ? Ht(cr, --Jt) : 0, sr--, Rt === 10 && (sr = 1, ps--), Rt;
}
function cn() {
  return Rt = Jt < vg ? Ht(cr, Jt++) : 0, sr++, Rt === 10 && (sr = 1, ps++), Rt;
}
function $n() {
  return Ht(cr, Jt);
}
function Io() {
  return Jt;
}
function Ai(a, r) {
  return Ei(cr, a, r);
}
function Ti(a) {
  switch (a) {
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
function bg(a) {
  return ps = sr = 1, vg = Un(cr = a), Jt = 0, [];
}
function Sg(a) {
  return cr = "", a;
}
function es(a) {
  return yg(Ai(Jt - 1, ff(a === 91 ? a + 2 : a === 40 ? a + 1 : a)));
}
function Fb(a) {
  for (; (Rt = $n()) && Rt < 33; )
    cn();
  return Ti(a) > 2 || Ti(Rt) > 3 ? "" : " ";
}
function Wb(a, r) {
  for (; --r && cn() && !(Rt < 48 || Rt > 102 || Rt > 57 && Rt < 65 || Rt > 70 && Rt < 97); )
    ;
  return Ai(a, Io() + (r < 6 && $n() == 32 && cn() == 32));
}
function ff(a) {
  for (; cn(); )
    switch (Rt) {
      // ] ) " '
      case a:
        return Jt;
      // " '
      case 34:
      case 39:
        a !== 34 && a !== 39 && ff(Rt);
        break;
      // (
      case 40:
        a === 41 && ff(a);
        break;
      // \
      case 92:
        cn();
        break;
    }
  return Jt;
}
function Jb(a, r) {
  for (; cn() && a + Rt !== 57; )
    if (a + Rt === 84 && $n() === 47)
      break;
  return "/*" + Ai(r, Jt - 1) + "*" + ds(a === 47 ? a : cn());
}
function Ib(a) {
  for (; !Ti($n()); )
    cn();
  return Ai(a, Jt);
}
function e1(a) {
  return Sg(ts("", null, null, null, [""], a = bg(a), 0, [0], a));
}
function ts(a, r, i, s, c, f, d, m, g) {
  for (var h = 0, b = 0, x = d, A = 0, M = 0, T = 0, S = 1, z = 1, U = 1, q = 0, N = "", D = c, w = f, k = s, X = N; z; )
    switch (T = q, q = cn()) {
      // (
      case 40:
        if (T != 108 && Ht(X, x - 1) == 58) {
          cf(X += He(es(q), "&", "&\f"), "&\f") != -1 && (U = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        X += es(q);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        X += Fb(T);
        break;
      // \
      case 92:
        X += Wb(Io() - 1, 7);
        continue;
      // /
      case 47:
        switch ($n()) {
          case 42:
          case 47:
            Ko(t1(Jb(cn(), Io()), r, i), g);
            break;
          default:
            X += "/";
        }
        break;
      // {
      case 123 * S:
        m[h++] = Un(X) * U;
      // } ; \0
      case 125 * S:
      case 59:
      case 0:
        switch (q) {
          // \0 }
          case 0:
          case 125:
            z = 0;
          // ;
          case 59 + b:
            U == -1 && (X = He(X, /\f/g, "")), M > 0 && Un(X) - x && Ko(M > 32 ? n0(X + ";", s, i, x - 1) : n0(He(X, " ", "") + ";", s, i, x - 2), g);
            break;
          // @ ;
          case 59:
            X += ";";
          // { rule/at-rule
          default:
            if (Ko(k = t0(X, r, i, h, b, c, m, N, D = [], w = [], x), f), q === 123)
              if (b === 0)
                ts(X, r, k, k, D, f, x, m, w);
              else
                switch (A === 99 && Ht(X, 3) === 110 ? 100 : A) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ts(a, k, k, s && Ko(t0(a, k, k, 0, 0, c, m, N, c, D = [], x), w), c, w, x, m, s ? D : w);
                    break;
                  default:
                    ts(X, k, k, k, [""], w, 0, m, w);
                }
        }
        h = b = M = 0, S = U = 1, N = X = "", x = d;
        break;
      // :
      case 58:
        x = 1 + Un(X), M = T;
      default:
        if (S < 1) {
          if (q == 123)
            --S;
          else if (q == 125 && S++ == 0 && Pb() == 125)
            continue;
        }
        switch (X += ds(q), q * S) {
          // &
          case 38:
            U = b > 0 ? 1 : (X += "\f", -1);
            break;
          // ,
          case 44:
            m[h++] = (Un(X) - 1) * U, U = 1;
            break;
          // @
          case 64:
            $n() === 45 && (X += es(cn())), A = $n(), b = x = Un(N = X += Ib(Io())), q++;
            break;
          // -
          case 45:
            T === 45 && Un(X) == 2 && (S = 0);
        }
    }
  return f;
}
function t0(a, r, i, s, c, f, d, m, g, h, b) {
  for (var x = c - 1, A = c === 0 ? f : [""], M = Df(A), T = 0, S = 0, z = 0; T < s; ++T)
    for (var U = 0, q = Ei(a, x + 1, x = Gb(S = d[T])), N = a; U < M; ++U)
      (N = yg(S > 0 ? A[U] + " " + q : He(q, /&\f/g, A[U]))) && (g[z++] = N);
  return ms(a, r, i, c === 0 ? zf : m, g, h, b);
}
function t1(a, r, i) {
  return ms(a, r, i, hg, ds(Zb()), Ei(a, 2, -2), 0);
}
function n0(a, r, i, s) {
  return ms(a, r, i, _f, Ei(a, 0, s), Ei(a, s + 1, -1), s);
}
function ir(a, r) {
  for (var i = "", s = Df(a), c = 0; c < s; c++)
    i += r(a[c], c, a, r) || "";
  return i;
}
function n1(a, r, i, s) {
  switch (a.type) {
    case Yb:
      if (a.children.length) break;
    case qb:
    case _f:
      return a.return = a.return || a.value;
    case hg:
      return "";
    case gg:
      return a.return = a.value + "{" + ir(a.children, s) + "}";
    case zf:
      a.value = a.props.join(",");
  }
  return Un(i = ir(a.children, s)) ? a.return = a.value + "{" + i + "}" : "";
}
function a1(a) {
  var r = Df(a);
  return function(i, s, c, f) {
    for (var d = "", m = 0; m < r; m++)
      d += a[m](i, s, c, f) || "";
    return d;
  };
}
function l1(a) {
  return function(r) {
    r.root || (r = r.return) && a(r);
  };
}
function xg(a) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(i) {
    return r[i] === void 0 && (r[i] = a(i)), r[i];
  };
}
var r1 = function(r, i, s) {
  for (var c = 0, f = 0; c = f, f = $n(), c === 38 && f === 12 && (i[s] = 1), !Ti(f); )
    cn();
  return Ai(r, Jt);
}, i1 = function(r, i) {
  var s = -1, c = 44;
  do
    switch (Ti(c)) {
      case 0:
        c === 38 && $n() === 12 && (i[s] = 1), r[s] += r1(Jt - 1, i, s);
        break;
      case 2:
        r[s] += es(c);
        break;
      case 4:
        if (c === 44) {
          r[++s] = $n() === 58 ? "&\f" : "", i[s] = r[s].length;
          break;
        }
      // fallthrough
      default:
        r[s] += ds(c);
    }
  while (c = cn());
  return r;
}, o1 = function(r, i) {
  return Sg(i1(bg(r), i));
}, a0 = /* @__PURE__ */ new WeakMap(), s1 = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var i = r.value, s = r.parent, c = r.column === s.column && r.line === s.line; s.type !== "rule"; )
      if (s = s.parent, !s) return;
    if (!(r.props.length === 1 && i.charCodeAt(0) !== 58 && !a0.get(s)) && !c) {
      a0.set(r, !0);
      for (var f = [], d = o1(i, f), m = s.props, g = 0, h = 0; g < d.length; g++)
        for (var b = 0; b < m.length; b++, h++)
          r.props[h] = f[g] ? d[g].replace(/&\f/g, m[b]) : m[b] + " " + d[g];
    }
  }
}, u1 = function(r) {
  if (r.type === "decl") {
    var i = r.value;
    // charcode for l
    i.charCodeAt(0) === 108 && // charcode for b
    i.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function Eg(a, r) {
  switch (Xb(a, r)) {
    // color-adjust
    case 5103:
      return ke + "print-" + a + a;
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
      return ke + a + a;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ke + a + ls + a + qt + a + a;
    // flex, flex-direction
    case 6828:
    case 4268:
      return ke + a + qt + a + a;
    // order
    case 6165:
      return ke + a + qt + "flex-" + a + a;
    // align-items
    case 5187:
      return ke + a + He(a, /(\w+).+(:[^]+)/, ke + "box-$1$2" + qt + "flex-$1$2") + a;
    // align-self
    case 5443:
      return ke + a + qt + "flex-item-" + He(a, /flex-|-self/, "") + a;
    // align-content
    case 4675:
      return ke + a + qt + "flex-line-pack" + He(a, /align-content|flex-|-self/, "") + a;
    // flex-shrink
    case 5548:
      return ke + a + qt + He(a, "shrink", "negative") + a;
    // flex-basis
    case 5292:
      return ke + a + qt + He(a, "basis", "preferred-size") + a;
    // flex-grow
    case 6060:
      return ke + "box-" + He(a, "-grow", "") + ke + a + qt + He(a, "grow", "positive") + a;
    // transition
    case 4554:
      return ke + He(a, /([^-])(transform)/g, "$1" + ke + "$2") + a;
    // cursor
    case 6187:
      return He(He(He(a, /(zoom-|grab)/, ke + "$1"), /(image-set)/, ke + "$1"), a, "") + a;
    // background, background-image
    case 5495:
    case 3959:
      return He(a, /(image-set\([^]*)/, ke + "$1$`$1");
    // justify-content
    case 4968:
      return He(He(a, /(.+:)(flex-)?(.*)/, ke + "box-pack:$3" + qt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ke + a + a;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return He(a, /(.+)-inline(.+)/, ke + "$1$2") + a;
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
      if (Un(a) - 1 - r > 6) switch (Ht(a, r + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (Ht(a, r + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return He(a, /(.+:)(.+)-([^]+)/, "$1" + ke + "$2-$3$1" + ls + (Ht(a, r + 3) == 108 ? "$3" : "$2-$3")) + a;
        // (s)tretch
        case 115:
          return ~cf(a, "stretch") ? Eg(He(a, "stretch", "fill-available"), r) + a : a;
      }
      break;
    // position: sticky
    case 4949:
      if (Ht(a, r + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (Ht(a, Un(a) - 3 - (~cf(a, "!important") && 10))) {
        // stic(k)y
        case 107:
          return He(a, ":", ":" + ke) + a;
        // (inline-)?fl(e)x
        case 101:
          return He(a, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ke + (Ht(a, 14) === 45 ? "inline-" : "") + "box$3$1" + ke + "$2$3$1" + qt + "$2box$3") + a;
      }
      break;
    // writing-mode
    case 5936:
      switch (Ht(a, r + 11)) {
        // vertical-l(r)
        case 114:
          return ke + a + qt + He(a, /[svh]\w+-[tblr]{2}/, "tb") + a;
        // vertical-r(l)
        case 108:
          return ke + a + qt + He(a, /[svh]\w+-[tblr]{2}/, "tb-rl") + a;
        // horizontal(-)tb
        case 45:
          return ke + a + qt + He(a, /[svh]\w+-[tblr]{2}/, "lr") + a;
      }
      return ke + a + qt + a + a;
  }
  return a;
}
var c1 = function(r, i, s, c) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case _f:
      r.return = Eg(r.value, r.length);
      break;
    case gg:
      return ir([ci(r, {
        value: He(r.value, "@", "@" + ke)
      })], c);
    case zf:
      if (r.length) return Qb(r.props, function(f) {
        switch (Kb(f, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return ir([ci(r, {
              props: [He(f, /:(read-\w+)/, ":" + ls + "$1")]
            })], c);
          // :placeholder
          case "::placeholder":
            return ir([ci(r, {
              props: [He(f, /:(plac\w+)/, ":" + ke + "input-$1")]
            }), ci(r, {
              props: [He(f, /:(plac\w+)/, ":" + ls + "$1")]
            }), ci(r, {
              props: [He(f, /:(plac\w+)/, qt + "input-$1")]
            })], c);
        }
        return "";
      });
  }
}, f1 = [c1], Tg = function(r) {
  var i = r.key;
  if (i === "css") {
    var s = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(s, function(S) {
      var z = S.getAttribute("data-emotion");
      z.indexOf(" ") !== -1 && (document.head.appendChild(S), S.setAttribute("data-s", ""));
    });
  }
  var c = r.stylisPlugins || f1, f = {}, d, m = [];
  d = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + i + ' "]'),
    function(S) {
      for (var z = S.getAttribute("data-emotion").split(" "), U = 1; U < z.length; U++)
        f[z[U]] = !0;
      m.push(S);
    }
  );
  var g, h = [s1, u1];
  {
    var b, x = [n1, l1(function(S) {
      b.insert(S);
    })], A = a1(h.concat(c, x)), M = function(z) {
      return ir(e1(z), A);
    };
    g = function(z, U, q, N) {
      b = q, M(z ? z + "{" + U.styles + "}" : U.styles), N && (T.inserted[U.name] = !0);
    };
  }
  var T = {
    key: i,
    sheet: new $b({
      key: i,
      container: d,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: f,
    registered: {},
    insert: g
  };
  return T.sheet.hydrate(m), T;
};
function rs() {
  return rs = Object.assign ? Object.assign.bind() : function(a) {
    for (var r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      for (var s in i) ({}).hasOwnProperty.call(i, s) && (a[s] = i[s]);
    }
    return a;
  }, rs.apply(null, arguments);
}
var Vc = { exports: {} }, je = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l0;
function d1() {
  if (l0) return je;
  l0 = 1;
  var a = typeof Symbol == "function" && Symbol.for, r = a ? Symbol.for("react.element") : 60103, i = a ? Symbol.for("react.portal") : 60106, s = a ? Symbol.for("react.fragment") : 60107, c = a ? Symbol.for("react.strict_mode") : 60108, f = a ? Symbol.for("react.profiler") : 60114, d = a ? Symbol.for("react.provider") : 60109, m = a ? Symbol.for("react.context") : 60110, g = a ? Symbol.for("react.async_mode") : 60111, h = a ? Symbol.for("react.concurrent_mode") : 60111, b = a ? Symbol.for("react.forward_ref") : 60112, x = a ? Symbol.for("react.suspense") : 60113, A = a ? Symbol.for("react.suspense_list") : 60120, M = a ? Symbol.for("react.memo") : 60115, T = a ? Symbol.for("react.lazy") : 60116, S = a ? Symbol.for("react.block") : 60121, z = a ? Symbol.for("react.fundamental") : 60117, U = a ? Symbol.for("react.responder") : 60118, q = a ? Symbol.for("react.scope") : 60119;
  function N(w) {
    if (typeof w == "object" && w !== null) {
      var k = w.$$typeof;
      switch (k) {
        case r:
          switch (w = w.type, w) {
            case g:
            case h:
            case s:
            case f:
            case c:
            case x:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case m:
                case b:
                case T:
                case M:
                case d:
                  return w;
                default:
                  return k;
              }
          }
        case i:
          return k;
      }
    }
  }
  function D(w) {
    return N(w) === h;
  }
  return je.AsyncMode = g, je.ConcurrentMode = h, je.ContextConsumer = m, je.ContextProvider = d, je.Element = r, je.ForwardRef = b, je.Fragment = s, je.Lazy = T, je.Memo = M, je.Portal = i, je.Profiler = f, je.StrictMode = c, je.Suspense = x, je.isAsyncMode = function(w) {
    return D(w) || N(w) === g;
  }, je.isConcurrentMode = D, je.isContextConsumer = function(w) {
    return N(w) === m;
  }, je.isContextProvider = function(w) {
    return N(w) === d;
  }, je.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === r;
  }, je.isForwardRef = function(w) {
    return N(w) === b;
  }, je.isFragment = function(w) {
    return N(w) === s;
  }, je.isLazy = function(w) {
    return N(w) === T;
  }, je.isMemo = function(w) {
    return N(w) === M;
  }, je.isPortal = function(w) {
    return N(w) === i;
  }, je.isProfiler = function(w) {
    return N(w) === f;
  }, je.isStrictMode = function(w) {
    return N(w) === c;
  }, je.isSuspense = function(w) {
    return N(w) === x;
  }, je.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === s || w === h || w === f || w === c || w === x || w === A || typeof w == "object" && w !== null && (w.$$typeof === T || w.$$typeof === M || w.$$typeof === d || w.$$typeof === m || w.$$typeof === b || w.$$typeof === z || w.$$typeof === U || w.$$typeof === q || w.$$typeof === S);
  }, je.typeOf = N, je;
}
var r0;
function p1() {
  return r0 || (r0 = 1, Vc.exports = d1()), Vc.exports;
}
var Xc, i0;
function m1() {
  if (i0) return Xc;
  i0 = 1;
  var a = p1(), r = {
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
  }, i = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, s = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, c = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, f = {};
  f[a.ForwardRef] = s, f[a.Memo] = c;
  function d(T) {
    return a.isMemo(T) ? c : f[T.$$typeof] || r;
  }
  var m = Object.defineProperty, g = Object.getOwnPropertyNames, h = Object.getOwnPropertySymbols, b = Object.getOwnPropertyDescriptor, x = Object.getPrototypeOf, A = Object.prototype;
  function M(T, S, z) {
    if (typeof S != "string") {
      if (A) {
        var U = x(S);
        U && U !== A && M(T, U, z);
      }
      var q = g(S);
      h && (q = q.concat(h(S)));
      for (var N = d(T), D = d(S), w = 0; w < q.length; ++w) {
        var k = q[w];
        if (!i[k] && !(z && z[k]) && !(D && D[k]) && !(N && N[k])) {
          var X = b(S, k);
          try {
            m(T, k, X);
          } catch {
          }
        }
      }
    }
    return T;
  }
  return Xc = M, Xc;
}
m1();
var h1 = !0;
function Cg(a, r, i) {
  var s = "";
  return i.split(" ").forEach(function(c) {
    a[c] !== void 0 ? r.push(a[c] + ";") : c && (s += c + " ");
  }), s;
}
var Nf = function(r, i, s) {
  var c = r.key + "-" + i.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (s === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  h1 === !1) && r.registered[c] === void 0 && (r.registered[c] = i.styles);
}, Bf = function(r, i, s) {
  Nf(r, i, s);
  var c = r.key + "-" + i.name;
  if (r.inserted[i.name] === void 0) {
    var f = i;
    do
      r.insert(i === f ? "." + c : "", f, r.sheet, !0), f = f.next;
    while (f !== void 0);
  }
};
function g1(a) {
  for (var r = 0, i, s = 0, c = a.length; c >= 4; ++s, c -= 4)
    i = a.charCodeAt(s) & 255 | (a.charCodeAt(++s) & 255) << 8 | (a.charCodeAt(++s) & 255) << 16 | (a.charCodeAt(++s) & 255) << 24, i = /* Math.imul(k, m): */
    (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16), i ^= /* k >>> r: */
    i >>> 24, r = /* Math.imul(k, m): */
    (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (c) {
    case 3:
      r ^= (a.charCodeAt(s + 2) & 255) << 16;
    case 2:
      r ^= (a.charCodeAt(s + 1) & 255) << 8;
    case 1:
      r ^= a.charCodeAt(s) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var y1 = {
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
}, v1 = /[A-Z]|^ms/g, b1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Rg = function(r) {
  return r.charCodeAt(1) === 45;
}, o0 = function(r) {
  return r != null && typeof r != "boolean";
}, Kc = /* @__PURE__ */ xg(function(a) {
  return Rg(a) ? a : a.replace(v1, "-$&").toLowerCase();
}), s0 = function(r, i) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof i == "string")
        return i.replace(b1, function(s, c, f) {
          return kn = {
            name: c,
            styles: f,
            next: kn
          }, c;
        });
  }
  return y1[r] !== 1 && !Rg(r) && typeof i == "number" && i !== 0 ? i + "px" : i;
};
function Ci(a, r, i) {
  if (i == null)
    return "";
  var s = i;
  if (s.__emotion_styles !== void 0)
    return s;
  switch (typeof i) {
    case "boolean":
      return "";
    case "object": {
      var c = i;
      if (c.anim === 1)
        return kn = {
          name: c.name,
          styles: c.styles,
          next: kn
        }, c.name;
      var f = i;
      if (f.styles !== void 0) {
        var d = f.next;
        if (d !== void 0)
          for (; d !== void 0; )
            kn = {
              name: d.name,
              styles: d.styles,
              next: kn
            }, d = d.next;
        var m = f.styles + ";";
        return m;
      }
      return S1(a, r, i);
    }
    case "function": {
      if (a !== void 0) {
        var g = kn, h = i(a);
        return kn = g, Ci(a, r, h);
      }
      break;
    }
  }
  var b = i;
  if (r == null)
    return b;
  var x = r[b];
  return x !== void 0 ? x : b;
}
function S1(a, r, i) {
  var s = "";
  if (Array.isArray(i))
    for (var c = 0; c < i.length; c++)
      s += Ci(a, r, i[c]) + ";";
  else
    for (var f in i) {
      var d = i[f];
      if (typeof d != "object") {
        var m = d;
        r != null && r[m] !== void 0 ? s += f + "{" + r[m] + "}" : o0(m) && (s += Kc(f) + ":" + s0(f, m) + ";");
      } else if (Array.isArray(d) && typeof d[0] == "string" && (r == null || r[d[0]] === void 0))
        for (var g = 0; g < d.length; g++)
          o0(d[g]) && (s += Kc(f) + ":" + s0(f, d[g]) + ";");
      else {
        var h = Ci(a, r, d);
        switch (f) {
          case "animation":
          case "animationName": {
            s += Kc(f) + ":" + h + ";";
            break;
          }
          default:
            s += f + "{" + h + "}";
        }
      }
    }
  return s;
}
var u0 = /label:\s*([^\s;{]+)\s*(;|$)/g, kn;
function Mi(a, r, i) {
  if (a.length === 1 && typeof a[0] == "object" && a[0] !== null && a[0].styles !== void 0)
    return a[0];
  var s = !0, c = "";
  kn = void 0;
  var f = a[0];
  if (f == null || f.raw === void 0)
    s = !1, c += Ci(i, r, f);
  else {
    var d = f;
    c += d[0];
  }
  for (var m = 1; m < a.length; m++)
    if (c += Ci(i, r, a[m]), s) {
      var g = f;
      c += g[m];
    }
  u0.lastIndex = 0;
  for (var h = "", b; (b = u0.exec(c)) !== null; )
    h += "-" + b[1];
  var x = g1(c) + h;
  return {
    name: x,
    styles: c,
    next: kn
  };
}
var x1 = function(r) {
  return r();
}, Ag = uf.useInsertionEffect ? uf.useInsertionEffect : !1, Mg = Ag || x1, c0 = Ag || E.useLayoutEffect, Og = /* @__PURE__ */ E.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Tg({
    key: "css"
  }) : null
), E1 = Og.Provider, Uf = function(r) {
  return /* @__PURE__ */ E.forwardRef(function(i, s) {
    var c = E.useContext(Og);
    return r(i, c, s);
  });
}, Oi = /* @__PURE__ */ E.createContext({}), wi = {}.hasOwnProperty, df = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", kf = function(r, i) {
  var s = {};
  for (var c in i)
    wi.call(i, c) && (s[c] = i[c]);
  return s[df] = r, s;
}, T1 = function(r) {
  var i = r.cache, s = r.serialized, c = r.isStringTag;
  return Nf(i, s, c), Mg(function() {
    return Bf(i, s, c);
  }), null;
}, C1 = /* @__PURE__ */ Uf(function(a, r, i) {
  var s = a.css;
  typeof s == "string" && r.registered[s] !== void 0 && (s = r.registered[s]);
  var c = a[df], f = [s], d = "";
  typeof a.className == "string" ? d = Cg(r.registered, f, a.className) : a.className != null && (d = a.className + " ");
  var m = Mi(f, void 0, E.useContext(Oi));
  d += r.key + "-" + m.name;
  var g = {};
  for (var h in a)
    wi.call(a, h) && h !== "css" && h !== df && (g[h] = a[h]);
  return g.className = d, i && (g.ref = i), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(T1, {
    cache: r,
    serialized: m,
    isStringTag: typeof c == "string"
  }), /* @__PURE__ */ E.createElement(c, g));
}), Hf = C1, Yt = function(r, i, s) {
  return wi.call(i, "css") ? I.jsx(Hf, kf(r, i), s) : I.jsx(r, i, s);
}, cl = function(r, i, s) {
  return wi.call(i, "css") ? I.jsxs(Hf, kf(r, i), s) : I.jsxs(r, i, s);
}, Qc = { exports: {} }, fi = {}, Zc = { exports: {} }, Pc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f0;
function R1() {
  return f0 || (f0 = 1, function(a) {
    function r(O, Q) {
      var ie = O.length;
      O.push(Q);
      e: for (; 0 < ie; ) {
        var te = ie - 1 >>> 1, C = O[te];
        if (0 < c(C, Q))
          O[te] = Q, O[ie] = C, ie = te;
        else break e;
      }
    }
    function i(O) {
      return O.length === 0 ? null : O[0];
    }
    function s(O) {
      if (O.length === 0) return null;
      var Q = O[0], ie = O.pop();
      if (ie !== Q) {
        O[0] = ie;
        e: for (var te = 0, C = O.length, V = C >>> 1; te < V; ) {
          var re = 2 * (te + 1) - 1, ne = O[re], oe = re + 1, ce = O[oe];
          if (0 > c(ne, ie))
            oe < C && 0 > c(ce, ne) ? (O[te] = ce, O[oe] = ie, te = oe) : (O[te] = ne, O[re] = ie, te = re);
          else if (oe < C && 0 > c(ce, ie))
            O[te] = ce, O[oe] = ie, te = oe;
          else break e;
        }
      }
      return Q;
    }
    function c(O, Q) {
      var ie = O.sortIndex - Q.sortIndex;
      return ie !== 0 ? ie : O.id - Q.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      a.unstable_now = function() {
        return f.now();
      };
    } else {
      var d = Date, m = d.now();
      a.unstable_now = function() {
        return d.now() - m;
      };
    }
    var g = [], h = [], b = 1, x = null, A = 3, M = !1, T = !1, S = !1, z = !1, U = typeof setTimeout == "function" ? setTimeout : null, q = typeof clearTimeout == "function" ? clearTimeout : null, N = typeof setImmediate < "u" ? setImmediate : null;
    function D(O) {
      for (var Q = i(h); Q !== null; ) {
        if (Q.callback === null) s(h);
        else if (Q.startTime <= O)
          s(h), Q.sortIndex = Q.expirationTime, r(g, Q);
        else break;
        Q = i(h);
      }
    }
    function w(O) {
      if (S = !1, D(O), !T)
        if (i(g) !== null)
          T = !0, k || (k = !0, v());
        else {
          var Q = i(h);
          Q !== null && G(w, Q.startTime - O);
        }
    }
    var k = !1, X = -1, Z = 5, W = -1;
    function ae() {
      return z ? !0 : !(a.unstable_now() - W < Z);
    }
    function le() {
      if (z = !1, k) {
        var O = a.unstable_now();
        W = O;
        var Q = !0;
        try {
          e: {
            T = !1, S && (S = !1, q(X), X = -1), M = !0;
            var ie = A;
            try {
              t: {
                for (D(O), x = i(g); x !== null && !(x.expirationTime > O && ae()); ) {
                  var te = x.callback;
                  if (typeof te == "function") {
                    x.callback = null, A = x.priorityLevel;
                    var C = te(
                      x.expirationTime <= O
                    );
                    if (O = a.unstable_now(), typeof C == "function") {
                      x.callback = C, D(O), Q = !0;
                      break t;
                    }
                    x === i(g) && s(g), D(O);
                  } else s(g);
                  x = i(g);
                }
                if (x !== null) Q = !0;
                else {
                  var V = i(h);
                  V !== null && G(
                    w,
                    V.startTime - O
                  ), Q = !1;
                }
              }
              break e;
            } finally {
              x = null, A = ie, M = !1;
            }
            Q = void 0;
          }
        } finally {
          Q ? v() : k = !1;
        }
      }
    }
    var v;
    if (typeof N == "function")
      v = function() {
        N(le);
      };
    else if (typeof MessageChannel < "u") {
      var ee = new MessageChannel(), Y = ee.port2;
      ee.port1.onmessage = le, v = function() {
        Y.postMessage(null);
      };
    } else
      v = function() {
        U(le, 0);
      };
    function G(O, Q) {
      X = U(function() {
        O(a.unstable_now());
      }, Q);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, a.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Z = 0 < O ? Math.floor(1e3 / O) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return A;
    }, a.unstable_next = function(O) {
      switch (A) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = A;
      }
      var ie = A;
      A = Q;
      try {
        return O();
      } finally {
        A = ie;
      }
    }, a.unstable_requestPaint = function() {
      z = !0;
    }, a.unstable_runWithPriority = function(O, Q) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var ie = A;
      A = O;
      try {
        return Q();
      } finally {
        A = ie;
      }
    }, a.unstable_scheduleCallback = function(O, Q, ie) {
      var te = a.unstable_now();
      switch (typeof ie == "object" && ie !== null ? (ie = ie.delay, ie = typeof ie == "number" && 0 < ie ? te + ie : te) : ie = te, O) {
        case 1:
          var C = -1;
          break;
        case 2:
          C = 250;
          break;
        case 5:
          C = 1073741823;
          break;
        case 4:
          C = 1e4;
          break;
        default:
          C = 5e3;
      }
      return C = ie + C, O = {
        id: b++,
        callback: Q,
        priorityLevel: O,
        startTime: ie,
        expirationTime: C,
        sortIndex: -1
      }, ie > te ? (O.sortIndex = ie, r(h, O), i(g) === null && O === i(h) && (S ? (q(X), X = -1) : S = !0, G(w, ie - te))) : (O.sortIndex = C, r(g, O), T || M || (T = !0, k || (k = !0, v()))), O;
    }, a.unstable_shouldYield = ae, a.unstable_wrapCallback = function(O) {
      var Q = A;
      return function() {
        var ie = A;
        A = Q;
        try {
          return O.apply(this, arguments);
        } finally {
          A = ie;
        }
      };
    };
  }(Pc)), Pc;
}
var d0;
function A1() {
  return d0 || (d0 = 1, Zc.exports = R1()), Zc.exports;
}
var Fc = { exports: {} }, $t = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var p0;
function M1() {
  if (p0) return $t;
  p0 = 1;
  var a = wf();
  function r(g) {
    var h = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        h += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return "Minified React error #" + g + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function i() {
  }
  var s = {
    d: {
      f: i,
      r: function() {
        throw Error(r(522));
      },
      D: i,
      C: i,
      L: i,
      m: i,
      X: i,
      S: i,
      M: i
    },
    p: 0,
    findDOMNode: null
  }, c = Symbol.for("react.portal");
  function f(g, h, b) {
    var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: x == null ? null : "" + x,
      children: g,
      containerInfo: h,
      implementation: b
    };
  }
  var d = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(g, h) {
    if (g === "font") return "";
    if (typeof h == "string")
      return h === "use-credentials" ? h : "";
  }
  return $t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, $t.createPortal = function(g, h) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
      throw Error(r(299));
    return f(g, h, null, b);
  }, $t.flushSync = function(g) {
    var h = d.T, b = s.p;
    try {
      if (d.T = null, s.p = 2, g) return g();
    } finally {
      d.T = h, s.p = b, s.d.f();
    }
  }, $t.preconnect = function(g, h) {
    typeof g == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, s.d.C(g, h));
  }, $t.prefetchDNS = function(g) {
    typeof g == "string" && s.d.D(g);
  }, $t.preinit = function(g, h) {
    if (typeof g == "string" && h && typeof h.as == "string") {
      var b = h.as, x = m(b, h.crossOrigin), A = typeof h.integrity == "string" ? h.integrity : void 0, M = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      b === "style" ? s.d.S(
        g,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: x,
          integrity: A,
          fetchPriority: M
        }
      ) : b === "script" && s.d.X(g, {
        crossOrigin: x,
        integrity: A,
        fetchPriority: M,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0
      });
    }
  }, $t.preinitModule = function(g, h) {
    if (typeof g == "string")
      if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var b = m(
            h.as,
            h.crossOrigin
          );
          s.d.M(g, {
            crossOrigin: b,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && s.d.M(g);
  }, $t.preload = function(g, h) {
    if (typeof g == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var b = h.as, x = m(b, h.crossOrigin);
      s.d.L(g, b, {
        crossOrigin: x,
        integrity: typeof h.integrity == "string" ? h.integrity : void 0,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0,
        type: typeof h.type == "string" ? h.type : void 0,
        fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
        referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
        imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
        imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
        media: typeof h.media == "string" ? h.media : void 0
      });
    }
  }, $t.preloadModule = function(g, h) {
    if (typeof g == "string")
      if (h) {
        var b = m(h.as, h.crossOrigin);
        s.d.m(g, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: b,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else s.d.m(g);
  }, $t.requestFormReset = function(g) {
    s.d.r(g);
  }, $t.unstable_batchedUpdates = function(g, h) {
    return g(h);
  }, $t.useFormState = function(g, h, b) {
    return d.H.useFormState(g, h, b);
  }, $t.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, $t.version = "19.1.1", $t;
}
var m0;
function wg() {
  if (m0) return Fc.exports;
  m0 = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return a(), Fc.exports = M1(), Fc.exports;
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
var h0;
function O1() {
  if (h0) return fi;
  h0 = 1;
  var a = A1(), r = wf(), i = wg();
  function s(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function f(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (f(e) !== e)
      throw Error(s(188));
  }
  function g(e) {
    var t = e.alternate;
    if (!t) {
      if (t = f(e), t === null) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var u = o.alternate;
      if (u === null) {
        if (l = o.return, l !== null) {
          n = l;
          continue;
        }
        break;
      }
      if (o.child === u.child) {
        for (u = o.child; u; ) {
          if (u === n) return m(o), e;
          if (u === l) return m(o), t;
          u = u.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== l.return) n = o, l = u;
      else {
        for (var p = !1, y = o.child; y; ) {
          if (y === n) {
            p = !0, n = o, l = u;
            break;
          }
          if (y === l) {
            p = !0, l = o, n = u;
            break;
          }
          y = y.sibling;
        }
        if (!p) {
          for (y = u.child; y; ) {
            if (y === n) {
              p = !0, n = u, l = o;
              break;
            }
            if (y === l) {
              p = !0, l = u, n = o;
              break;
            }
            y = y.sibling;
          }
          if (!p) throw Error(s(189));
        }
      }
      if (n.alternate !== l) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function h(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = h(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign, x = Symbol.for("react.element"), A = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), U = Symbol.for("react.provider"), q = Symbol.for("react.consumer"), N = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), Z = Symbol.for("react.lazy"), W = Symbol.for("react.activity"), ae = Symbol.for("react.memo_cache_sentinel"), le = Symbol.iterator;
  function v(e) {
    return e === null || typeof e != "object" ? null : (e = le && e[le] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ee = Symbol.for("react.client.reference");
  function Y(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ee ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case T:
        return "Fragment";
      case z:
        return "Profiler";
      case S:
        return "StrictMode";
      case w:
        return "Suspense";
      case k:
        return "SuspenseList";
      case W:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case M:
          return "Portal";
        case N:
          return (e.displayName || "Context") + ".Provider";
        case q:
          return (e._context.displayName || "Context") + ".Consumer";
        case D:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case X:
          return t = e.displayName || null, t !== null ? t : Y(e.type) || "Memo";
        case Z:
          t = e._payload, e = e._init;
          try {
            return Y(e(t));
          } catch {
          }
      }
    return null;
  }
  var G = Array.isArray, O = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ie = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, te = [], C = -1;
  function V(e) {
    return { current: e };
  }
  function re(e) {
    0 > C || (e.current = te[C], te[C] = null, C--);
  }
  function ne(e, t) {
    C++, te[C] = e.current, e.current = t;
  }
  var oe = V(null), ce = V(null), ue = V(null), Ce = V(null);
  function be(e, t) {
    switch (ne(ue, t), ne(ce, e), ne(oe, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Rh(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Rh(t), e = Ah(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    re(oe), ne(oe, e);
  }
  function ze() {
    re(oe), re(ce), re(ue);
  }
  function ye(e) {
    e.memoizedState !== null && ne(Ce, e);
    var t = oe.current, n = Ah(t, e.type);
    t !== n && (ne(ce, e), ne(oe, n));
  }
  function Re(e) {
    ce.current === e && (re(oe), re(ce)), Ce.current === e && (re(Ce), li._currentValue = ie);
  }
  var _e = Object.prototype.hasOwnProperty, mt = a.unstable_scheduleCallback, Se = a.unstable_cancelCallback, qe = a.unstable_shouldYield, Nt = a.unstable_requestPaint, Ye = a.unstable_now, at = a.unstable_getCurrentPriorityLevel, nt = a.unstable_ImmediatePriority, st = a.unstable_UserBlockingPriority, Qe = a.unstable_NormalPriority, fe = a.unstable_LowPriority, en = a.unstable_IdlePriority, ht = a.log, Tn = a.unstable_setDisableYieldValue, lt = null, xe = null;
  function Ze(e) {
    if (typeof ht == "function" && Tn(e), xe && typeof xe.setStrictMode == "function")
      try {
        xe.setStrictMode(lt, e);
      } catch {
      }
  }
  var Be = Math.clz32 ? Math.clz32 : da, Xt = Math.log, Pe = Math.LN2;
  function da(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Xt(e) / Pe | 0) | 0;
  }
  var Vn = 256, qa = 4194304;
  function pe(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
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
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
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
        return e;
    }
  }
  function Le(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var o = 0, u = e.suspendedLanes, p = e.pingedLanes;
    e = e.warmLanes;
    var y = l & 134217727;
    return y !== 0 ? (l = y & ~u, l !== 0 ? o = pe(l) : (p &= y, p !== 0 ? o = pe(p) : n || (n = y & ~e, n !== 0 && (o = pe(n))))) : (y = l & ~u, y !== 0 ? o = pe(y) : p !== 0 ? o = pe(p) : n || (n = l & ~e, n !== 0 && (o = pe(n)))), o === 0 ? 0 : t !== 0 && t !== o && (t & u) === 0 && (u = o & -o, n = t & -t, u >= n || u === 32 && (n & 4194048) !== 0) ? t : o;
  }
  function ut(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function pa(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
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
        return t + 5e3;
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
  function pr() {
    var e = Vn;
    return Vn <<= 1, (Vn & 4194048) === 0 && (Vn = 256), e;
  }
  function ud() {
    var e = qa;
    return qa <<= 1, (qa & 62914560) === 0 && (qa = 4194304), e;
  }
  function _s(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function mr(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Ey(e, t, n, l, o, u) {
    var p = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var y = e.entanglements, R = e.expirationTimes, L = e.hiddenUpdates;
    for (n = p & ~n; 0 < n; ) {
      var P = 31 - Be(n), J = 1 << P;
      y[P] = 0, R[P] = -1;
      var j = L[P];
      if (j !== null)
        for (L[P] = null, P = 0; P < j.length; P++) {
          var $ = j[P];
          $ !== null && ($.lane &= -536870913);
        }
      n &= ~J;
    }
    l !== 0 && cd(e, l, 0), u !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(p & ~t));
  }
  function cd(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - Be(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 4194090;
  }
  function fd(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var l = 31 - Be(n), o = 1 << l;
      o & t | e[l] & t && (e[l] |= t), n &= ~o;
    }
  }
  function Ds(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Ns(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function dd() {
    var e = Q.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Xh(e.type));
  }
  function Ty(e, t) {
    var n = Q.p;
    try {
      return Q.p = e, t();
    } finally {
      Q.p = n;
    }
  }
  var ma = Math.random().toString(36).slice(2), Lt = "__reactFiber$" + ma, Qt = "__reactProps$" + ma, hl = "__reactContainer$" + ma, Bs = "__reactEvents$" + ma, Cy = "__reactListeners$" + ma, Ry = "__reactHandles$" + ma, pd = "__reactResources$" + ma, hr = "__reactMarker$" + ma;
  function Us(e) {
    delete e[Lt], delete e[Qt], delete e[Bs], delete e[Cy], delete e[Ry];
  }
  function gl(e) {
    var t = e[Lt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[hl] || n[Lt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = zh(e); e !== null; ) {
            if (n = e[Lt]) return n;
            e = zh(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function yl(e) {
    if (e = e[Lt] || e[hl]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function gr(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function vl(e) {
    var t = e[pd];
    return t || (t = e[pd] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function wt(e) {
    e[hr] = !0;
  }
  var md = /* @__PURE__ */ new Set(), hd = {};
  function Ya(e, t) {
    bl(e, t), bl(e + "Capture", t);
  }
  function bl(e, t) {
    for (hd[e] = t, e = 0; e < t.length; e++)
      md.add(t[e]);
  }
  var Ay = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), gd = {}, yd = {};
  function My(e) {
    return _e.call(yd, e) ? !0 : _e.call(gd, e) ? !1 : Ay.test(e) ? yd[e] = !0 : (gd[e] = !0, !1);
  }
  function Ui(e, t, n) {
    if (My(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function ki(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function Xn(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + l);
    }
  }
  var ks, vd;
  function Sl(e) {
    if (ks === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ks = t && t[1] || "", vd = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ks + e + vd;
  }
  var Hs = !1;
  function Ls(e, t) {
    if (!e || Hs) return "";
    Hs = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var J = function() {
                throw Error();
              };
              if (Object.defineProperty(J.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(J, []);
                } catch ($) {
                  var j = $;
                }
                Reflect.construct(e, [], J);
              } else {
                try {
                  J.call();
                } catch ($) {
                  j = $;
                }
                e.call(J.prototype);
              }
            } else {
              try {
                throw Error();
              } catch ($) {
                j = $;
              }
              (J = e()) && typeof J.catch == "function" && J.catch(function() {
              });
            }
          } catch ($) {
            if ($ && j && typeof $.stack == "string")
              return [$.stack, j.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      o && o.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = l.DetermineComponentFrameRoot(), p = u[0], y = u[1];
      if (p && y) {
        var R = p.split(`
`), L = y.split(`
`);
        for (o = l = 0; l < R.length && !R[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; o < L.length && !L[o].includes(
          "DetermineComponentFrameRoot"
        ); )
          o++;
        if (l === R.length || o === L.length)
          for (l = R.length - 1, o = L.length - 1; 1 <= l && 0 <= o && R[l] !== L[o]; )
            o--;
        for (; 1 <= l && 0 <= o; l--, o--)
          if (R[l] !== L[o]) {
            if (l !== 1 || o !== 1)
              do
                if (l--, o--, 0 > o || R[l] !== L[o]) {
                  var P = `
` + R[l].replace(" at new ", " at ");
                  return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), P;
                }
              while (1 <= l && 0 <= o);
            break;
          }
      }
    } finally {
      Hs = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? Sl(n) : "";
  }
  function Oy(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Sl(e.type);
      case 16:
        return Sl("Lazy");
      case 13:
        return Sl("Suspense");
      case 19:
        return Sl("SuspenseList");
      case 0:
      case 15:
        return Ls(e.type, !1);
      case 11:
        return Ls(e.type.render, !1);
      case 1:
        return Ls(e.type, !0);
      case 31:
        return Sl("Activity");
      default:
        return "";
    }
  }
  function bd(e) {
    try {
      var t = "";
      do
        t += Oy(e), e = e.return;
      while (e);
      return t;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  function fn(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Sd(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function wy(e) {
    var t = Sd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    ), l = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var o = n.get, u = n.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return o.call(this);
        },
        set: function(p) {
          l = "" + p, u.call(this, p);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(p) {
          l = "" + p;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Hi(e) {
    e._valueTracker || (e._valueTracker = wy(e));
  }
  function xd(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), l = "";
    return e && (l = Sd(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Li(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var zy = /[\n"\\]/g;
  function dn(e) {
    return e.replace(
      zy,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function js(e, t, n, l, o, u, p, y) {
    e.name = "", p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? e.type = p : e.removeAttribute("type"), t != null ? p === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + fn(t)) : e.value !== "" + fn(t) && (e.value = "" + fn(t)) : p !== "submit" && p !== "reset" || e.removeAttribute("value"), t != null ? $s(e, p, fn(t)) : n != null ? $s(e, p, fn(n)) : l != null && e.removeAttribute("value"), o == null && u != null && (e.defaultChecked = !!u), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.name = "" + fn(y) : e.removeAttribute("name");
  }
  function Ed(e, t, n, l, o, u, p, y) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || t != null))
        return;
      n = n != null ? "" + fn(n) : "", t = t != null ? "" + fn(t) : n, y || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? o, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = y ? e.checked : !!l, e.defaultChecked = !!l, p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (e.name = p);
  }
  function $s(e, t, n) {
    t === "number" && Li(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function xl(e, t, n, l) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < n.length; o++)
        t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + fn(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          e[o].selected = !0, l && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Td(e, t, n) {
    if (t != null && (t = "" + fn(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + fn(n) : "";
  }
  function Cd(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(s(92));
        if (G(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), t = n;
    }
    n = fn(t), e.defaultValue = n, l = e.textContent, l === n && l !== "" && l !== null && (e.value = l);
  }
  function El(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var _y = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Rd(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || _y.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function Ad(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(s(62));
    if (e = e.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var o in t)
        l = t[o], t.hasOwnProperty(o) && n[o] !== l && Rd(e, o, l);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Rd(e, u, t[u]);
  }
  function qs(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
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
  var Dy = /* @__PURE__ */ new Map([
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
  ]), Ny = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ji(e) {
    return Ny.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Ys = null;
  function Gs(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Tl = null, Cl = null;
  function Md(e) {
    var t = yl(e);
    if (t && (e = t.stateNode)) {
      var n = e[Qt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (js(
            e,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + dn(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var o = l[Qt] || null;
                if (!o) throw Error(s(90));
                js(
                  l,
                  o.value,
                  o.defaultValue,
                  o.defaultValue,
                  o.checked,
                  o.defaultChecked,
                  o.type,
                  o.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              l = n[t], l.form === e.form && xd(l);
          }
          break e;
        case "textarea":
          Td(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && xl(e, !!n.multiple, t, !1);
      }
    }
  }
  var Vs = !1;
  function Od(e, t, n) {
    if (Vs) return e(t, n);
    Vs = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Vs = !1, (Tl !== null || Cl !== null) && (Ro(), Tl && (t = Tl, e = Cl, Cl = Tl = null, Md(t), e)))
        for (t = 0; t < e.length; t++) Md(e[t]);
    }
  }
  function yr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[Qt] || null;
    if (l === null) return null;
    n = l[t];
    e: switch (t) {
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
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function")
      throw Error(
        s(231, t, typeof n)
      );
    return n;
  }
  var Kn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xs = !1;
  if (Kn)
    try {
      var vr = {};
      Object.defineProperty(vr, "passive", {
        get: function() {
          Xs = !0;
        }
      }), window.addEventListener("test", vr, vr), window.removeEventListener("test", vr, vr);
    } catch {
      Xs = !1;
    }
  var ha = null, Ks = null, $i = null;
  function wd() {
    if ($i) return $i;
    var e, t = Ks, n = t.length, l, o = "value" in ha ? ha.value : ha.textContent, u = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var p = n - e;
    for (l = 1; l <= p && t[n - l] === o[u - l]; l++) ;
    return $i = o.slice(e, 1 < l ? 1 - l : void 0);
  }
  function qi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Yi() {
    return !0;
  }
  function zd() {
    return !1;
  }
  function Zt(e) {
    function t(n, l, o, u, p) {
      this._reactName = n, this._targetInst = o, this.type = l, this.nativeEvent = u, this.target = p, this.currentTarget = null;
      for (var y in e)
        e.hasOwnProperty(y) && (n = e[y], this[y] = n ? n(u) : u[y]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Yi : zd, this.isPropagationStopped = zd, this;
    }
    return b(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Yi);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Yi);
      },
      persist: function() {
      },
      isPersistent: Yi
    }), t;
  }
  var Ga = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Gi = Zt(Ga), br = b({}, Ga, { view: 0, detail: 0 }), By = Zt(br), Qs, Zs, Sr, Vi = b({}, br, {
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
    getModifierState: Fs,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Sr && (Sr && e.type === "mousemove" ? (Qs = e.screenX - Sr.screenX, Zs = e.screenY - Sr.screenY) : Zs = Qs = 0, Sr = e), Qs);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Zs;
    }
  }), _d = Zt(Vi), Uy = b({}, Vi, { dataTransfer: 0 }), ky = Zt(Uy), Hy = b({}, br, { relatedTarget: 0 }), Ps = Zt(Hy), Ly = b({}, Ga, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), jy = Zt(Ly), $y = b({}, Ga, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), qy = Zt($y), Yy = b({}, Ga, { data: 0 }), Dd = Zt(Yy), Gy = {
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
  }, Vy = {
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
  }, Xy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Ky(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Xy[e]) ? !!t[e] : !1;
  }
  function Fs() {
    return Ky;
  }
  var Qy = b({}, br, {
    key: function(e) {
      if (e.key) {
        var t = Gy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = qi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Vy[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fs,
    charCode: function(e) {
      return e.type === "keypress" ? qi(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? qi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Zy = Zt(Qy), Py = b({}, Vi, {
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
  }), Nd = Zt(Py), Fy = b({}, br, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fs
  }), Wy = Zt(Fy), Jy = b({}, Ga, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Iy = Zt(Jy), ev = b({}, Vi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), tv = Zt(ev), nv = b({}, Ga, {
    newState: 0,
    oldState: 0
  }), av = Zt(nv), lv = [9, 13, 27, 32], Ws = Kn && "CompositionEvent" in window, xr = null;
  Kn && "documentMode" in document && (xr = document.documentMode);
  var rv = Kn && "TextEvent" in window && !xr, Bd = Kn && (!Ws || xr && 8 < xr && 11 >= xr), Ud = " ", kd = !1;
  function Hd(e, t) {
    switch (e) {
      case "keyup":
        return lv.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ld(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Rl = !1;
  function iv(e, t) {
    switch (e) {
      case "compositionend":
        return Ld(t);
      case "keypress":
        return t.which !== 32 ? null : (kd = !0, Ud);
      case "textInput":
        return e = t.data, e === Ud && kd ? null : e;
      default:
        return null;
    }
  }
  function ov(e, t) {
    if (Rl)
      return e === "compositionend" || !Ws && Hd(e, t) ? (e = wd(), $i = Ks = ha = null, Rl = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Bd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var sv = {
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
  function jd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!sv[e.type] : t === "textarea";
  }
  function $d(e, t, n, l) {
    Tl ? Cl ? Cl.push(l) : Cl = [l] : Tl = l, t = _o(t, "onChange"), 0 < t.length && (n = new Gi(
      "onChange",
      "change",
      null,
      n,
      l
    ), e.push({ event: n, listeners: t }));
  }
  var Er = null, Tr = null;
  function uv(e) {
    Sh(e, 0);
  }
  function Xi(e) {
    var t = gr(e);
    if (xd(t)) return e;
  }
  function qd(e, t) {
    if (e === "change") return t;
  }
  var Yd = !1;
  if (Kn) {
    var Js;
    if (Kn) {
      var Is = "oninput" in document;
      if (!Is) {
        var Gd = document.createElement("div");
        Gd.setAttribute("oninput", "return;"), Is = typeof Gd.oninput == "function";
      }
      Js = Is;
    } else Js = !1;
    Yd = Js && (!document.documentMode || 9 < document.documentMode);
  }
  function Vd() {
    Er && (Er.detachEvent("onpropertychange", Xd), Tr = Er = null);
  }
  function Xd(e) {
    if (e.propertyName === "value" && Xi(Tr)) {
      var t = [];
      $d(
        t,
        Tr,
        e,
        Gs(e)
      ), Od(uv, t);
    }
  }
  function cv(e, t, n) {
    e === "focusin" ? (Vd(), Er = t, Tr = n, Er.attachEvent("onpropertychange", Xd)) : e === "focusout" && Vd();
  }
  function fv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Xi(Tr);
  }
  function dv(e, t) {
    if (e === "click") return Xi(t);
  }
  function pv(e, t) {
    if (e === "input" || e === "change")
      return Xi(t);
  }
  function mv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var tn = typeof Object.is == "function" ? Object.is : mv;
  function Cr(e, t) {
    if (tn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var o = n[l];
      if (!_e.call(t, o) || !tn(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  function Kd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Qd(e, t) {
    var n = Kd(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (l = e + n.textContent.length, e <= t && l >= t)
          return { node: n, offset: t - e };
        e = l;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Kd(n);
    }
  }
  function Zd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Zd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Pd(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Li(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Li(e.document);
    }
    return t;
  }
  function eu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var hv = Kn && "documentMode" in document && 11 >= document.documentMode, Al = null, tu = null, Rr = null, nu = !1;
  function Fd(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    nu || Al == null || Al !== Li(l) || (l = Al, "selectionStart" in l && eu(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Rr && Cr(Rr, l) || (Rr = l, l = _o(tu, "onSelect"), 0 < l.length && (t = new Gi(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: l }), t.target = Al)));
  }
  function Va(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Ml = {
    animationend: Va("Animation", "AnimationEnd"),
    animationiteration: Va("Animation", "AnimationIteration"),
    animationstart: Va("Animation", "AnimationStart"),
    transitionrun: Va("Transition", "TransitionRun"),
    transitionstart: Va("Transition", "TransitionStart"),
    transitioncancel: Va("Transition", "TransitionCancel"),
    transitionend: Va("Transition", "TransitionEnd")
  }, au = {}, Wd = {};
  Kn && (Wd = document.createElement("div").style, "AnimationEvent" in window || (delete Ml.animationend.animation, delete Ml.animationiteration.animation, delete Ml.animationstart.animation), "TransitionEvent" in window || delete Ml.transitionend.transition);
  function Xa(e) {
    if (au[e]) return au[e];
    if (!Ml[e]) return e;
    var t = Ml[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Wd)
        return au[e] = t[n];
    return e;
  }
  var Jd = Xa("animationend"), Id = Xa("animationiteration"), ep = Xa("animationstart"), gv = Xa("transitionrun"), yv = Xa("transitionstart"), vv = Xa("transitioncancel"), tp = Xa("transitionend"), np = /* @__PURE__ */ new Map(), lu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  lu.push("scrollEnd");
  function Cn(e, t) {
    np.set(e, t), Ya(t, [e]);
  }
  var ap = /* @__PURE__ */ new WeakMap();
  function pn(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = ap.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: bd(t)
      }, ap.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: bd(t)
    };
  }
  var mn = [], Ol = 0, ru = 0;
  function Ki() {
    for (var e = Ol, t = ru = Ol = 0; t < e; ) {
      var n = mn[t];
      mn[t++] = null;
      var l = mn[t];
      mn[t++] = null;
      var o = mn[t];
      mn[t++] = null;
      var u = mn[t];
      if (mn[t++] = null, l !== null && o !== null) {
        var p = l.pending;
        p === null ? o.next = o : (o.next = p.next, p.next = o), l.pending = o;
      }
      u !== 0 && lp(n, o, u);
    }
  }
  function Qi(e, t, n, l) {
    mn[Ol++] = e, mn[Ol++] = t, mn[Ol++] = n, mn[Ol++] = l, ru |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function iu(e, t, n, l) {
    return Qi(e, t, n, l), Zi(e);
  }
  function wl(e, t) {
    return Qi(e, null, null, t), Zi(e);
  }
  function lp(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var o = !1, u = e.return; u !== null; )
      u.childLanes |= n, l = u.alternate, l !== null && (l.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (o = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, o && t !== null && (o = 31 - Be(n), e = u.hiddenUpdates, l = e[o], l === null ? e[o] = [t] : l.push(t), t.lane = n | 536870912), u) : null;
  }
  function Zi(e) {
    if (50 < Fr)
      throw Fr = 0, dc = null, Error(s(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var zl = {};
  function bv(e, t, n, l) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function nn(e, t, n, l) {
    return new bv(e, t, n, l);
  }
  function ou(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Qn(e, t) {
    var n = e.alternate;
    return n === null ? (n = nn(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function rp(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Pi(e, t, n, l, o, u) {
    var p = 0;
    if (l = e, typeof e == "function") ou(e) && (p = 1);
    else if (typeof e == "string")
      p = xb(
        e,
        n,
        oe.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case W:
          return e = nn(31, n, t, o), e.elementType = W, e.lanes = u, e;
        case T:
          return Ka(n.children, o, u, t);
        case S:
          p = 8, o |= 24;
          break;
        case z:
          return e = nn(12, n, t, o | 2), e.elementType = z, e.lanes = u, e;
        case w:
          return e = nn(13, n, t, o), e.elementType = w, e.lanes = u, e;
        case k:
          return e = nn(19, n, t, o), e.elementType = k, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case U:
              case N:
                p = 10;
                break e;
              case q:
                p = 9;
                break e;
              case D:
                p = 11;
                break e;
              case X:
                p = 14;
                break e;
              case Z:
                p = 16, l = null;
                break e;
            }
          p = 29, n = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = nn(p, n, t, o), t.elementType = e, t.type = l, t.lanes = u, t;
  }
  function Ka(e, t, n, l) {
    return e = nn(7, e, l, t), e.lanes = n, e;
  }
  function su(e, t, n) {
    return e = nn(6, e, null, t), e.lanes = n, e;
  }
  function uu(e, t, n) {
    return t = nn(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var _l = [], Dl = 0, Fi = null, Wi = 0, hn = [], gn = 0, Qa = null, Zn = 1, Pn = "";
  function Za(e, t) {
    _l[Dl++] = Wi, _l[Dl++] = Fi, Fi = e, Wi = t;
  }
  function ip(e, t, n) {
    hn[gn++] = Zn, hn[gn++] = Pn, hn[gn++] = Qa, Qa = e;
    var l = Zn;
    e = Pn;
    var o = 32 - Be(l) - 1;
    l &= ~(1 << o), n += 1;
    var u = 32 - Be(t) + o;
    if (30 < u) {
      var p = o - o % 5;
      u = (l & (1 << p) - 1).toString(32), l >>= p, o -= p, Zn = 1 << 32 - Be(t) + o | n << o | l, Pn = u + e;
    } else
      Zn = 1 << u | n << o | l, Pn = e;
  }
  function cu(e) {
    e.return !== null && (Za(e, 1), ip(e, 1, 0));
  }
  function fu(e) {
    for (; e === Fi; )
      Fi = _l[--Dl], _l[Dl] = null, Wi = _l[--Dl], _l[Dl] = null;
    for (; e === Qa; )
      Qa = hn[--gn], hn[gn] = null, Pn = hn[--gn], hn[gn] = null, Zn = hn[--gn], hn[gn] = null;
  }
  var Kt = null, gt = null, Ue = !1, Pa = null, On = !1, du = Error(s(519));
  function Fa(e) {
    var t = Error(s(418, ""));
    throw Or(pn(t, e)), du;
  }
  function op(e) {
    var t = e.stateNode, n = e.type, l = e.memoizedProps;
    switch (t[Lt] = e, t[Qt] = l, n) {
      case "dialog":
        Oe("cancel", t), Oe("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Oe("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Jr.length; n++)
          Oe(Jr[n], t);
        break;
      case "source":
        Oe("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Oe("error", t), Oe("load", t);
        break;
      case "details":
        Oe("toggle", t);
        break;
      case "input":
        Oe("invalid", t), Ed(
          t,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        ), Hi(t);
        break;
      case "select":
        Oe("invalid", t);
        break;
      case "textarea":
        Oe("invalid", t), Cd(t, l.value, l.defaultValue, l.children), Hi(t);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || Ch(t.textContent, n) ? (l.popover != null && (Oe("beforetoggle", t), Oe("toggle", t)), l.onScroll != null && Oe("scroll", t), l.onScrollEnd != null && Oe("scrollend", t), l.onClick != null && (t.onclick = Do), t = !0) : t = !1, t || Fa(e);
  }
  function sp(e) {
    for (Kt = e.return; Kt; )
      switch (Kt.tag) {
        case 5:
        case 13:
          On = !1;
          return;
        case 27:
        case 3:
          On = !0;
          return;
        default:
          Kt = Kt.return;
      }
  }
  function Ar(e) {
    if (e !== Kt) return !1;
    if (!Ue) return sp(e), Ue = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Oc(e.type, e.memoizedProps)), n = !n), n && gt && Fa(e), sp(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (n = e.data, n === "/$") {
              if (t === 0) {
                gt = An(e.nextSibling);
                break e;
              }
              t--;
            } else
              n !== "$" && n !== "$!" && n !== "$?" || t++;
          e = e.nextSibling;
        }
        gt = null;
      }
    } else
      t === 27 ? (t = gt, _a(e.type) ? (e = Dc, Dc = null, gt = e) : gt = t) : gt = Kt ? An(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Mr() {
    gt = Kt = null, Ue = !1;
  }
  function up() {
    var e = Pa;
    return e !== null && (Wt === null ? Wt = e : Wt.push.apply(
      Wt,
      e
    ), Pa = null), e;
  }
  function Or(e) {
    Pa === null ? Pa = [e] : Pa.push(e);
  }
  var pu = V(null), Wa = null, Fn = null;
  function ga(e, t, n) {
    ne(pu, t._currentValue), t._currentValue = n;
  }
  function Wn(e) {
    e._currentValue = pu.current, re(pu);
  }
  function mu(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function hu(e, t, n, l) {
    var o = e.child;
    for (o !== null && (o.return = e); o !== null; ) {
      var u = o.dependencies;
      if (u !== null) {
        var p = o.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var y = u;
          u = o;
          for (var R = 0; R < t.length; R++)
            if (y.context === t[R]) {
              u.lanes |= n, y = u.alternate, y !== null && (y.lanes |= n), mu(
                u.return,
                n,
                e
              ), l || (p = null);
              break e;
            }
          u = y.next;
        }
      } else if (o.tag === 18) {
        if (p = o.return, p === null) throw Error(s(341));
        p.lanes |= n, u = p.alternate, u !== null && (u.lanes |= n), mu(p, n, e), p = null;
      } else p = o.child;
      if (p !== null) p.return = o;
      else
        for (p = o; p !== null; ) {
          if (p === e) {
            p = null;
            break;
          }
          if (o = p.sibling, o !== null) {
            o.return = p.return, p = o;
            break;
          }
          p = p.return;
        }
      o = p;
    }
  }
  function wr(e, t, n, l) {
    e = null;
    for (var o = t, u = !1; o !== null; ) {
      if (!u) {
        if ((o.flags & 524288) !== 0) u = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var p = o.alternate;
        if (p === null) throw Error(s(387));
        if (p = p.memoizedProps, p !== null) {
          var y = o.type;
          tn(o.pendingProps.value, p.value) || (e !== null ? e.push(y) : e = [y]);
        }
      } else if (o === Ce.current) {
        if (p = o.alternate, p === null) throw Error(s(387));
        p.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(li) : e = [li]);
      }
      o = o.return;
    }
    e !== null && hu(
      t,
      e,
      n,
      l
    ), t.flags |= 262144;
  }
  function Ji(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!tn(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Ja(e) {
    Wa = e, Fn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function jt(e) {
    return cp(Wa, e);
  }
  function Ii(e, t) {
    return Wa === null && Ja(e), cp(e, t);
  }
  function cp(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Fn === null) {
      if (e === null) throw Error(s(308));
      Fn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Fn = Fn.next = t;
    return n;
  }
  var Sv = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, xv = a.unstable_scheduleCallback, Ev = a.unstable_NormalPriority, Mt = {
    $$typeof: N,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function gu() {
    return {
      controller: new Sv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function zr(e) {
    e.refCount--, e.refCount === 0 && xv(Ev, function() {
      e.controller.abort();
    });
  }
  var _r = null, yu = 0, Nl = 0, Bl = null;
  function Tv(e, t) {
    if (_r === null) {
      var n = _r = [];
      yu = 0, Nl = bc(), Bl = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return yu++, t.then(fp, fp), t;
  }
  function fp() {
    if (--yu === 0 && _r !== null) {
      Bl !== null && (Bl.status = "fulfilled");
      var e = _r;
      _r = null, Nl = 0, Bl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Cv(e, t) {
    var n = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(o) {
        n.push(o);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = t;
        for (var o = 0; o < n.length; o++) (0, n[o])(t);
      },
      function(o) {
        for (l.status = "rejected", l.reason = o, o = 0; o < n.length; o++)
          (0, n[o])(void 0);
      }
    ), l;
  }
  var dp = O.S;
  O.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && Tv(e, t), dp !== null && dp(e, t);
  };
  var Ia = V(null);
  function vu() {
    var e = Ia.current;
    return e !== null ? e : tt.pooledCache;
  }
  function eo(e, t) {
    t === null ? ne(Ia, Ia.current) : ne(Ia, t.pool);
  }
  function pp() {
    var e = vu();
    return e === null ? null : { parent: Mt._currentValue, pool: e };
  }
  var Dr = Error(s(460)), mp = Error(s(474)), to = Error(s(542)), bu = { then: function() {
  } };
  function hp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function no() {
  }
  function gp(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(no, no), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, vp(e), e;
      default:
        if (typeof t.status == "string") t.then(no, no);
        else {
          if (e = tt, e !== null && 100 < e.shellSuspendCounter)
            throw Error(s(482));
          e = t, e.status = "pending", e.then(
            function(l) {
              if (t.status === "pending") {
                var o = t;
                o.status = "fulfilled", o.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var o = t;
                o.status = "rejected", o.reason = l;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, vp(e), e;
        }
        throw Nr = t, Dr;
    }
  }
  var Nr = null;
  function yp() {
    if (Nr === null) throw Error(s(459));
    var e = Nr;
    return Nr = null, e;
  }
  function vp(e) {
    if (e === Dr || e === to)
      throw Error(s(483));
  }
  var ya = !1;
  function Su(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function xu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function va(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ba(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Ge & 2) !== 0) {
      var o = l.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), l.pending = t, t = Zi(e), lp(e, null, n), t;
    }
    return Qi(e, l, t, n), Zi(e);
  }
  function Br(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, fd(e, n);
    }
  }
  function Eu(e, t) {
    var n = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, n === l)) {
      var o = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var p = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          u === null ? o = u = p : u = u.next = p, n = n.next;
        } while (n !== null);
        u === null ? o = u = t : u = u.next = t;
      } else o = u = t;
      n = {
        baseState: l.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: u,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var Tu = !1;
  function Ur() {
    if (Tu) {
      var e = Bl;
      if (e !== null) throw e;
    }
  }
  function kr(e, t, n, l) {
    Tu = !1;
    var o = e.updateQueue;
    ya = !1;
    var u = o.firstBaseUpdate, p = o.lastBaseUpdate, y = o.shared.pending;
    if (y !== null) {
      o.shared.pending = null;
      var R = y, L = R.next;
      R.next = null, p === null ? u = L : p.next = L, p = R;
      var P = e.alternate;
      P !== null && (P = P.updateQueue, y = P.lastBaseUpdate, y !== p && (y === null ? P.firstBaseUpdate = L : y.next = L, P.lastBaseUpdate = R));
    }
    if (u !== null) {
      var J = o.baseState;
      p = 0, P = L = R = null, y = u;
      do {
        var j = y.lane & -536870913, $ = j !== y.lane;
        if ($ ? (De & j) === j : (l & j) === j) {
          j !== 0 && j === Nl && (Tu = !0), P !== null && (P = P.next = {
            lane: 0,
            tag: y.tag,
            payload: y.payload,
            callback: null,
            next: null
          });
          e: {
            var ge = e, me = y;
            j = t;
            var Je = n;
            switch (me.tag) {
              case 1:
                if (ge = me.payload, typeof ge == "function") {
                  J = ge.call(Je, J, j);
                  break e;
                }
                J = ge;
                break e;
              case 3:
                ge.flags = ge.flags & -65537 | 128;
              case 0:
                if (ge = me.payload, j = typeof ge == "function" ? ge.call(Je, J, j) : ge, j == null) break e;
                J = b({}, J, j);
                break e;
              case 2:
                ya = !0;
            }
          }
          j = y.callback, j !== null && (e.flags |= 64, $ && (e.flags |= 8192), $ = o.callbacks, $ === null ? o.callbacks = [j] : $.push(j));
        } else
          $ = {
            lane: j,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          }, P === null ? (L = P = $, R = J) : P = P.next = $, p |= j;
        if (y = y.next, y === null) {
          if (y = o.shared.pending, y === null)
            break;
          $ = y, y = $.next, $.next = null, o.lastBaseUpdate = $, o.shared.pending = null;
        }
      } while (!0);
      P === null && (R = J), o.baseState = R, o.firstBaseUpdate = L, o.lastBaseUpdate = P, u === null && (o.shared.lanes = 0), Ma |= p, e.lanes = p, e.memoizedState = J;
    }
  }
  function bp(e, t) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(t);
  }
  function Sp(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        bp(n[e], t);
  }
  var Ul = V(null), ao = V(0);
  function xp(e, t) {
    e = la, ne(ao, e), ne(Ul, t), la = e | t.baseLanes;
  }
  function Cu() {
    ne(ao, la), ne(Ul, Ul.current);
  }
  function Ru() {
    la = ao.current, re(Ul), re(ao);
  }
  var Sa = 0, Te = null, Fe = null, Tt = null, lo = !1, kl = !1, el = !1, ro = 0, Hr = 0, Hl = null, Rv = 0;
  function St() {
    throw Error(s(321));
  }
  function Au(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!tn(e[n], t[n])) return !1;
    return !0;
  }
  function Mu(e, t, n, l, o, u) {
    return Sa = u, Te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, O.H = e === null || e.memoizedState === null ? lm : rm, el = !1, u = n(l, o), el = !1, kl && (u = Tp(
      t,
      n,
      l,
      o
    )), Ep(e), u;
  }
  function Ep(e) {
    O.H = fo;
    var t = Fe !== null && Fe.next !== null;
    if (Sa = 0, Tt = Fe = Te = null, lo = !1, Hr = 0, Hl = null, t) throw Error(s(300));
    e === null || zt || (e = e.dependencies, e !== null && Ji(e) && (zt = !0));
  }
  function Tp(e, t, n, l) {
    Te = e;
    var o = 0;
    do {
      if (kl && (Hl = null), Hr = 0, kl = !1, 25 <= o) throw Error(s(301));
      if (o += 1, Tt = Fe = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      O.H = Dv, u = t(n, l);
    } while (kl);
    return u;
  }
  function Av() {
    var e = O.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Lr(t) : t, e = e.useState()[0], (Fe !== null ? Fe.memoizedState : null) !== e && (Te.flags |= 1024), t;
  }
  function Ou() {
    var e = ro !== 0;
    return ro = 0, e;
  }
  function wu(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function zu(e) {
    if (lo) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      lo = !1;
    }
    Sa = 0, Tt = Fe = Te = null, kl = !1, Hr = ro = 0, Hl = null;
  }
  function Pt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Tt === null ? Te.memoizedState = Tt = e : Tt = Tt.next = e, Tt;
  }
  function Ct() {
    if (Fe === null) {
      var e = Te.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Fe.next;
    var t = Tt === null ? Te.memoizedState : Tt.next;
    if (t !== null)
      Tt = t, Fe = e;
    else {
      if (e === null)
        throw Te.alternate === null ? Error(s(467)) : Error(s(310));
      Fe = e, e = {
        memoizedState: Fe.memoizedState,
        baseState: Fe.baseState,
        baseQueue: Fe.baseQueue,
        queue: Fe.queue,
        next: null
      }, Tt === null ? Te.memoizedState = Tt = e : Tt = Tt.next = e;
    }
    return Tt;
  }
  function _u() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Lr(e) {
    var t = Hr;
    return Hr += 1, Hl === null && (Hl = []), e = gp(Hl, e, t), t = Te, (Tt === null ? t.memoizedState : Tt.next) === null && (t = t.alternate, O.H = t === null || t.memoizedState === null ? lm : rm), e;
  }
  function io(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Lr(e);
      if (e.$$typeof === N) return jt(e);
    }
    throw Error(s(438, String(e)));
  }
  function Du(e) {
    var t = null, n = Te.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var l = Te.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(o) {
          return o.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = _u(), Te.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++)
        n[l] = ae;
    return t.index++, n;
  }
  function Jn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function oo(e) {
    var t = Ct();
    return Nu(t, Fe, e);
  }
  function Nu(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = n;
    var o = e.baseQueue, u = l.pending;
    if (u !== null) {
      if (o !== null) {
        var p = o.next;
        o.next = u.next, u.next = p;
      }
      t.baseQueue = o = u, l.pending = null;
    }
    if (u = e.baseState, o === null) e.memoizedState = u;
    else {
      t = o.next;
      var y = p = null, R = null, L = t, P = !1;
      do {
        var J = L.lane & -536870913;
        if (J !== L.lane ? (De & J) === J : (Sa & J) === J) {
          var j = L.revertLane;
          if (j === 0)
            R !== null && (R = R.next = {
              lane: 0,
              revertLane: 0,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null
            }), J === Nl && (P = !0);
          else if ((Sa & j) === j) {
            L = L.next, j === Nl && (P = !0);
            continue;
          } else
            J = {
              lane: 0,
              revertLane: L.revertLane,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null
            }, R === null ? (y = R = J, p = u) : R = R.next = J, Te.lanes |= j, Ma |= j;
          J = L.action, el && n(u, J), u = L.hasEagerState ? L.eagerState : n(u, J);
        } else
          j = {
            lane: J,
            revertLane: L.revertLane,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null
          }, R === null ? (y = R = j, p = u) : R = R.next = j, Te.lanes |= J, Ma |= J;
        L = L.next;
      } while (L !== null && L !== t);
      if (R === null ? p = u : R.next = y, !tn(u, e.memoizedState) && (zt = !0, P && (n = Bl, n !== null)))
        throw n;
      e.memoizedState = u, e.baseState = p, e.baseQueue = R, l.lastRenderedState = u;
    }
    return o === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Bu(e) {
    var t = Ct(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch, o = n.pending, u = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var p = o = o.next;
      do
        u = e(u, p.action), p = p.next;
      while (p !== o);
      tn(u, t.memoizedState) || (zt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, l];
  }
  function Cp(e, t, n) {
    var l = Te, o = Ct(), u = Ue;
    if (u) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = t();
    var p = !tn(
      (Fe || o).memoizedState,
      n
    );
    p && (o.memoizedState = n, zt = !0), o = o.queue;
    var y = Mp.bind(null, l, o, e);
    if (jr(2048, 8, y, [e]), o.getSnapshot !== t || p || Tt !== null && Tt.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ll(
        9,
        so(),
        Ap.bind(
          null,
          l,
          o,
          n,
          t
        ),
        null
      ), tt === null) throw Error(s(349));
      u || (Sa & 124) !== 0 || Rp(l, t, n);
    }
    return n;
  }
  function Rp(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Te.updateQueue, t === null ? (t = _u(), Te.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Ap(e, t, n, l) {
    t.value = n, t.getSnapshot = l, Op(t) && wp(e);
  }
  function Mp(e, t, n) {
    return n(function() {
      Op(t) && wp(e);
    });
  }
  function Op(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !tn(e, n);
    } catch {
      return !0;
    }
  }
  function wp(e) {
    var t = wl(e, 2);
    t !== null && sn(t, e, 2);
  }
  function Uu(e) {
    var t = Pt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), el) {
        Ze(!0);
        try {
          n();
        } finally {
          Ze(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Jn,
      lastRenderedState: e
    }, t;
  }
  function zp(e, t, n, l) {
    return e.baseState = n, Nu(
      e,
      Fe,
      typeof l == "function" ? l : Jn
    );
  }
  function Mv(e, t, n, l, o) {
    if (co(e)) throw Error(s(485));
    if (e = t.action, e !== null) {
      var u = {
        payload: o,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(p) {
          u.listeners.push(p);
        }
      };
      O.T !== null ? n(!0) : u.isTransition = !1, l(u), n = t.pending, n === null ? (u.next = t.pending = u, _p(t, u)) : (u.next = n.next, t.pending = n.next = u);
    }
  }
  function _p(e, t) {
    var n = t.action, l = t.payload, o = e.state;
    if (t.isTransition) {
      var u = O.T, p = {};
      O.T = p;
      try {
        var y = n(o, l), R = O.S;
        R !== null && R(p, y), Dp(e, t, y);
      } catch (L) {
        ku(e, t, L);
      } finally {
        O.T = u;
      }
    } else
      try {
        u = n(o, l), Dp(e, t, u);
      } catch (L) {
        ku(e, t, L);
      }
  }
  function Dp(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        Np(e, t, l);
      },
      function(l) {
        return ku(e, t, l);
      }
    ) : Np(e, t, n);
  }
  function Np(e, t, n) {
    t.status = "fulfilled", t.value = n, Bp(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, _p(e, n)));
  }
  function ku(e, t, n) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = n, Bp(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function Bp(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Up(e, t) {
    return t;
  }
  function kp(e, t) {
    if (Ue) {
      var n = tt.formState;
      if (n !== null) {
        e: {
          var l = Te;
          if (Ue) {
            if (gt) {
              t: {
                for (var o = gt, u = On; o.nodeType !== 8; ) {
                  if (!u) {
                    o = null;
                    break t;
                  }
                  if (o = An(
                    o.nextSibling
                  ), o === null) {
                    o = null;
                    break t;
                  }
                }
                u = o.data, o = u === "F!" || u === "F" ? o : null;
              }
              if (o) {
                gt = An(
                  o.nextSibling
                ), l = o.data === "F!";
                break e;
              }
            }
            Fa(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return n = Pt(), n.memoizedState = n.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Up,
      lastRenderedState: t
    }, n.queue = l, n = tm.bind(
      null,
      Te,
      l
    ), l.dispatch = n, l = Uu(!1), u = qu.bind(
      null,
      Te,
      !1,
      l.queue
    ), l = Pt(), o = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = o, n = Mv.bind(
      null,
      Te,
      o,
      u,
      n
    ), o.dispatch = n, l.memoizedState = e, [t, n, !1];
  }
  function Hp(e) {
    var t = Ct();
    return Lp(t, Fe, e);
  }
  function Lp(e, t, n) {
    if (t = Nu(
      e,
      t,
      Up
    )[0], e = oo(Jn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Lr(t);
      } catch (p) {
        throw p === Dr ? to : p;
      }
    else l = t;
    t = Ct();
    var o = t.queue, u = o.dispatch;
    return n !== t.memoizedState && (Te.flags |= 2048, Ll(
      9,
      so(),
      Ov.bind(null, o, n),
      null
    )), [l, u, e];
  }
  function Ov(e, t) {
    e.action = t;
  }
  function jp(e) {
    var t = Ct(), n = Fe;
    if (n !== null)
      return Lp(t, n, e);
    Ct(), t = t.memoizedState, n = Ct();
    var l = n.queue.dispatch;
    return n.memoizedState = e, [t, l, !1];
  }
  function Ll(e, t, n, l) {
    return e = { tag: e, create: n, deps: l, inst: t, next: null }, t = Te.updateQueue, t === null && (t = _u(), Te.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e;
  }
  function so() {
    return { destroy: void 0, resource: void 0 };
  }
  function $p() {
    return Ct().memoizedState;
  }
  function uo(e, t, n, l) {
    var o = Pt();
    l = l === void 0 ? null : l, Te.flags |= e, o.memoizedState = Ll(
      1 | t,
      so(),
      n,
      l
    );
  }
  function jr(e, t, n, l) {
    var o = Ct();
    l = l === void 0 ? null : l;
    var u = o.memoizedState.inst;
    Fe !== null && l !== null && Au(l, Fe.memoizedState.deps) ? o.memoizedState = Ll(t, u, n, l) : (Te.flags |= e, o.memoizedState = Ll(
      1 | t,
      u,
      n,
      l
    ));
  }
  function qp(e, t) {
    uo(8390656, 8, e, t);
  }
  function Yp(e, t) {
    jr(2048, 8, e, t);
  }
  function Gp(e, t) {
    return jr(4, 2, e, t);
  }
  function Vp(e, t) {
    return jr(4, 4, e, t);
  }
  function Xp(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function() {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function Kp(e, t, n) {
    n = n != null ? n.concat([e]) : null, jr(4, 4, Xp.bind(null, t, e), n);
  }
  function Hu() {
  }
  function Qp(e, t) {
    var n = Ct();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && Au(t, l[1]) ? l[0] : (n.memoizedState = [e, t], e);
  }
  function Zp(e, t) {
    var n = Ct();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && Au(t, l[1]))
      return l[0];
    if (l = e(), el) {
      Ze(!0);
      try {
        e();
      } finally {
        Ze(!1);
      }
    }
    return n.memoizedState = [l, t], l;
  }
  function Lu(e, t, n) {
    return n === void 0 || (Sa & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = n, e = Wm(), Te.lanes |= e, Ma |= e, n);
  }
  function Pp(e, t, n, l) {
    return tn(n, t) ? n : Ul.current !== null ? (e = Lu(e, n, l), tn(e, t) || (zt = !0), e) : (Sa & 42) === 0 ? (zt = !0, e.memoizedState = n) : (e = Wm(), Te.lanes |= e, Ma |= e, t);
  }
  function Fp(e, t, n, l, o) {
    var u = Q.p;
    Q.p = u !== 0 && 8 > u ? u : 8;
    var p = O.T, y = {};
    O.T = y, qu(e, !1, t, n);
    try {
      var R = o(), L = O.S;
      if (L !== null && L(y, R), R !== null && typeof R == "object" && typeof R.then == "function") {
        var P = Cv(
          R,
          l
        );
        $r(
          e,
          t,
          P,
          on(e)
        );
      } else
        $r(
          e,
          t,
          l,
          on(e)
        );
    } catch (J) {
      $r(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: J },
        on()
      );
    } finally {
      Q.p = u, O.T = p;
    }
  }
  function wv() {
  }
  function ju(e, t, n, l) {
    if (e.tag !== 5) throw Error(s(476));
    var o = Wp(e).queue;
    Fp(
      e,
      o,
      t,
      ie,
      n === null ? wv : function() {
        return Jp(e), n(l);
      }
    );
  }
  function Wp(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ie,
      baseState: ie,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Jn,
        lastRenderedState: ie
      },
      next: null
    };
    var n = {};
    return t.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Jn,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Jp(e) {
    var t = Wp(e).next.queue;
    $r(e, t, {}, on());
  }
  function $u() {
    return jt(li);
  }
  function Ip() {
    return Ct().memoizedState;
  }
  function em() {
    return Ct().memoizedState;
  }
  function zv(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = on();
          e = va(n);
          var l = ba(t, e, n);
          l !== null && (sn(l, t, n), Br(l, t, n)), t = { cache: gu() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function _v(e, t, n) {
    var l = on();
    n = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, co(e) ? nm(t, n) : (n = iu(e, t, n, l), n !== null && (sn(n, e, l), am(n, t, l)));
  }
  function tm(e, t, n) {
    var l = on();
    $r(e, t, n, l);
  }
  function $r(e, t, n, l) {
    var o = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (co(e)) nm(t, o);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var p = t.lastRenderedState, y = u(p, n);
          if (o.hasEagerState = !0, o.eagerState = y, tn(y, p))
            return Qi(e, t, o, 0), tt === null && Ki(), !1;
        } catch {
        } finally {
        }
      if (n = iu(e, t, o, l), n !== null)
        return sn(n, e, l), am(n, t, l), !0;
    }
    return !1;
  }
  function qu(e, t, n, l) {
    if (l = {
      lane: 2,
      revertLane: bc(),
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, co(e)) {
      if (t) throw Error(s(479));
    } else
      t = iu(
        e,
        n,
        l,
        2
      ), t !== null && sn(t, e, 2);
  }
  function co(e) {
    var t = e.alternate;
    return e === Te || t !== null && t === Te;
  }
  function nm(e, t) {
    kl = lo = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function am(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, fd(e, n);
    }
  }
  var fo = {
    readContext: jt,
    use: io,
    useCallback: St,
    useContext: St,
    useEffect: St,
    useImperativeHandle: St,
    useLayoutEffect: St,
    useInsertionEffect: St,
    useMemo: St,
    useReducer: St,
    useRef: St,
    useState: St,
    useDebugValue: St,
    useDeferredValue: St,
    useTransition: St,
    useSyncExternalStore: St,
    useId: St,
    useHostTransitionStatus: St,
    useFormState: St,
    useActionState: St,
    useOptimistic: St,
    useMemoCache: St,
    useCacheRefresh: St
  }, lm = {
    readContext: jt,
    use: io,
    useCallback: function(e, t) {
      return Pt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: jt,
    useEffect: qp,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, uo(
        4194308,
        4,
        Xp.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return uo(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      uo(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = Pt();
      t = t === void 0 ? null : t;
      var l = e();
      if (el) {
        Ze(!0);
        try {
          e();
        } finally {
          Ze(!1);
        }
      }
      return n.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, n) {
      var l = Pt();
      if (n !== void 0) {
        var o = n(t);
        if (el) {
          Ze(!0);
          try {
            n(t);
          } finally {
            Ze(!1);
          }
        }
      } else o = t;
      return l.memoizedState = l.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, l.queue = e, e = e.dispatch = _v.bind(
        null,
        Te,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = Pt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Uu(e);
      var t = e.queue, n = tm.bind(null, Te, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Hu,
    useDeferredValue: function(e, t) {
      var n = Pt();
      return Lu(n, e, t);
    },
    useTransition: function() {
      var e = Uu(!1);
      return e = Fp.bind(
        null,
        Te,
        e.queue,
        !0,
        !1
      ), Pt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var l = Te, o = Pt();
      if (Ue) {
        if (n === void 0)
          throw Error(s(407));
        n = n();
      } else {
        if (n = t(), tt === null)
          throw Error(s(349));
        (De & 124) !== 0 || Rp(l, t, n);
      }
      o.memoizedState = n;
      var u = { value: n, getSnapshot: t };
      return o.queue = u, qp(Mp.bind(null, l, u, e), [
        e
      ]), l.flags |= 2048, Ll(
        9,
        so(),
        Ap.bind(
          null,
          l,
          u,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = Pt(), t = tt.identifierPrefix;
      if (Ue) {
        var n = Pn, l = Zn;
        n = (l & ~(1 << 32 - Be(l) - 1)).toString(32) + n, t = "«" + t + "R" + n, n = ro++, 0 < n && (t += "H" + n.toString(32)), t += "»";
      } else
        n = Rv++, t = "«" + t + "r" + n.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: $u,
    useFormState: kp,
    useActionState: kp,
    useOptimistic: function(e) {
      var t = Pt();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = qu.bind(
        null,
        Te,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Du,
    useCacheRefresh: function() {
      return Pt().memoizedState = zv.bind(
        null,
        Te
      );
    }
  }, rm = {
    readContext: jt,
    use: io,
    useCallback: Qp,
    useContext: jt,
    useEffect: Yp,
    useImperativeHandle: Kp,
    useInsertionEffect: Gp,
    useLayoutEffect: Vp,
    useMemo: Zp,
    useReducer: oo,
    useRef: $p,
    useState: function() {
      return oo(Jn);
    },
    useDebugValue: Hu,
    useDeferredValue: function(e, t) {
      var n = Ct();
      return Pp(
        n,
        Fe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = oo(Jn)[0], t = Ct().memoizedState;
      return [
        typeof e == "boolean" ? e : Lr(e),
        t
      ];
    },
    useSyncExternalStore: Cp,
    useId: Ip,
    useHostTransitionStatus: $u,
    useFormState: Hp,
    useActionState: Hp,
    useOptimistic: function(e, t) {
      var n = Ct();
      return zp(n, Fe, e, t);
    },
    useMemoCache: Du,
    useCacheRefresh: em
  }, Dv = {
    readContext: jt,
    use: io,
    useCallback: Qp,
    useContext: jt,
    useEffect: Yp,
    useImperativeHandle: Kp,
    useInsertionEffect: Gp,
    useLayoutEffect: Vp,
    useMemo: Zp,
    useReducer: Bu,
    useRef: $p,
    useState: function() {
      return Bu(Jn);
    },
    useDebugValue: Hu,
    useDeferredValue: function(e, t) {
      var n = Ct();
      return Fe === null ? Lu(n, e, t) : Pp(
        n,
        Fe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Bu(Jn)[0], t = Ct().memoizedState;
      return [
        typeof e == "boolean" ? e : Lr(e),
        t
      ];
    },
    useSyncExternalStore: Cp,
    useId: Ip,
    useHostTransitionStatus: $u,
    useFormState: jp,
    useActionState: jp,
    useOptimistic: function(e, t) {
      var n = Ct();
      return Fe !== null ? zp(n, Fe, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Du,
    useCacheRefresh: em
  }, jl = null, qr = 0;
  function po(e) {
    var t = qr;
    return qr += 1, jl === null && (jl = []), gp(jl, e, t);
  }
  function Yr(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function mo(e, t) {
    throw t.$$typeof === x ? Error(s(525)) : (e = Object.prototype.toString.call(t), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function im(e) {
    var t = e._init;
    return t(e._payload);
  }
  function om(e) {
    function t(B, _) {
      if (e) {
        var H = B.deletions;
        H === null ? (B.deletions = [_], B.flags |= 16) : H.push(_);
      }
    }
    function n(B, _) {
      if (!e) return null;
      for (; _ !== null; )
        t(B, _), _ = _.sibling;
      return null;
    }
    function l(B) {
      for (var _ = /* @__PURE__ */ new Map(); B !== null; )
        B.key !== null ? _.set(B.key, B) : _.set(B.index, B), B = B.sibling;
      return _;
    }
    function o(B, _) {
      return B = Qn(B, _), B.index = 0, B.sibling = null, B;
    }
    function u(B, _, H) {
      return B.index = H, e ? (H = B.alternate, H !== null ? (H = H.index, H < _ ? (B.flags |= 67108866, _) : H) : (B.flags |= 67108866, _)) : (B.flags |= 1048576, _);
    }
    function p(B) {
      return e && B.alternate === null && (B.flags |= 67108866), B;
    }
    function y(B, _, H, F) {
      return _ === null || _.tag !== 6 ? (_ = su(H, B.mode, F), _.return = B, _) : (_ = o(_, H), _.return = B, _);
    }
    function R(B, _, H, F) {
      var se = H.type;
      return se === T ? P(
        B,
        _,
        H.props.children,
        F,
        H.key
      ) : _ !== null && (_.elementType === se || typeof se == "object" && se !== null && se.$$typeof === Z && im(se) === _.type) ? (_ = o(_, H.props), Yr(_, H), _.return = B, _) : (_ = Pi(
        H.type,
        H.key,
        H.props,
        null,
        B.mode,
        F
      ), Yr(_, H), _.return = B, _);
    }
    function L(B, _, H, F) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== H.containerInfo || _.stateNode.implementation !== H.implementation ? (_ = uu(H, B.mode, F), _.return = B, _) : (_ = o(_, H.children || []), _.return = B, _);
    }
    function P(B, _, H, F, se) {
      return _ === null || _.tag !== 7 ? (_ = Ka(
        H,
        B.mode,
        F,
        se
      ), _.return = B, _) : (_ = o(_, H), _.return = B, _);
    }
    function J(B, _, H) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return _ = su(
          "" + _,
          B.mode,
          H
        ), _.return = B, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case A:
            return H = Pi(
              _.type,
              _.key,
              _.props,
              null,
              B.mode,
              H
            ), Yr(H, _), H.return = B, H;
          case M:
            return _ = uu(
              _,
              B.mode,
              H
            ), _.return = B, _;
          case Z:
            var F = _._init;
            return _ = F(_._payload), J(B, _, H);
        }
        if (G(_) || v(_))
          return _ = Ka(
            _,
            B.mode,
            H,
            null
          ), _.return = B, _;
        if (typeof _.then == "function")
          return J(B, po(_), H);
        if (_.$$typeof === N)
          return J(
            B,
            Ii(B, _),
            H
          );
        mo(B, _);
      }
      return null;
    }
    function j(B, _, H, F) {
      var se = _ !== null ? _.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return se !== null ? null : y(B, _, "" + H, F);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case A:
            return H.key === se ? R(B, _, H, F) : null;
          case M:
            return H.key === se ? L(B, _, H, F) : null;
          case Z:
            return se = H._init, H = se(H._payload), j(B, _, H, F);
        }
        if (G(H) || v(H))
          return se !== null ? null : P(B, _, H, F, null);
        if (typeof H.then == "function")
          return j(
            B,
            _,
            po(H),
            F
          );
        if (H.$$typeof === N)
          return j(
            B,
            _,
            Ii(B, H),
            F
          );
        mo(B, H);
      }
      return null;
    }
    function $(B, _, H, F, se) {
      if (typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint")
        return B = B.get(H) || null, y(_, B, "" + F, se);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case A:
            return B = B.get(
              F.key === null ? H : F.key
            ) || null, R(_, B, F, se);
          case M:
            return B = B.get(
              F.key === null ? H : F.key
            ) || null, L(_, B, F, se);
          case Z:
            var Ae = F._init;
            return F = Ae(F._payload), $(
              B,
              _,
              H,
              F,
              se
            );
        }
        if (G(F) || v(F))
          return B = B.get(H) || null, P(_, B, F, se, null);
        if (typeof F.then == "function")
          return $(
            B,
            _,
            H,
            po(F),
            se
          );
        if (F.$$typeof === N)
          return $(
            B,
            _,
            H,
            Ii(_, F),
            se
          );
        mo(_, F);
      }
      return null;
    }
    function ge(B, _, H, F) {
      for (var se = null, Ae = null, de = _, he = _ = 0, Dt = null; de !== null && he < H.length; he++) {
        de.index > he ? (Dt = de, de = null) : Dt = de.sibling;
        var Ne = j(
          B,
          de,
          H[he],
          F
        );
        if (Ne === null) {
          de === null && (de = Dt);
          break;
        }
        e && de && Ne.alternate === null && t(B, de), _ = u(Ne, _, he), Ae === null ? se = Ne : Ae.sibling = Ne, Ae = Ne, de = Dt;
      }
      if (he === H.length)
        return n(B, de), Ue && Za(B, he), se;
      if (de === null) {
        for (; he < H.length; he++)
          de = J(B, H[he], F), de !== null && (_ = u(
            de,
            _,
            he
          ), Ae === null ? se = de : Ae.sibling = de, Ae = de);
        return Ue && Za(B, he), se;
      }
      for (de = l(de); he < H.length; he++)
        Dt = $(
          de,
          B,
          he,
          H[he],
          F
        ), Dt !== null && (e && Dt.alternate !== null && de.delete(
          Dt.key === null ? he : Dt.key
        ), _ = u(
          Dt,
          _,
          he
        ), Ae === null ? se = Dt : Ae.sibling = Dt, Ae = Dt);
      return e && de.forEach(function(ka) {
        return t(B, ka);
      }), Ue && Za(B, he), se;
    }
    function me(B, _, H, F) {
      if (H == null) throw Error(s(151));
      for (var se = null, Ae = null, de = _, he = _ = 0, Dt = null, Ne = H.next(); de !== null && !Ne.done; he++, Ne = H.next()) {
        de.index > he ? (Dt = de, de = null) : Dt = de.sibling;
        var ka = j(B, de, Ne.value, F);
        if (ka === null) {
          de === null && (de = Dt);
          break;
        }
        e && de && ka.alternate === null && t(B, de), _ = u(ka, _, he), Ae === null ? se = ka : Ae.sibling = ka, Ae = ka, de = Dt;
      }
      if (Ne.done)
        return n(B, de), Ue && Za(B, he), se;
      if (de === null) {
        for (; !Ne.done; he++, Ne = H.next())
          Ne = J(B, Ne.value, F), Ne !== null && (_ = u(Ne, _, he), Ae === null ? se = Ne : Ae.sibling = Ne, Ae = Ne);
        return Ue && Za(B, he), se;
      }
      for (de = l(de); !Ne.done; he++, Ne = H.next())
        Ne = $(de, B, he, Ne.value, F), Ne !== null && (e && Ne.alternate !== null && de.delete(Ne.key === null ? he : Ne.key), _ = u(Ne, _, he), Ae === null ? se = Ne : Ae.sibling = Ne, Ae = Ne);
      return e && de.forEach(function(Nb) {
        return t(B, Nb);
      }), Ue && Za(B, he), se;
    }
    function Je(B, _, H, F) {
      if (typeof H == "object" && H !== null && H.type === T && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case A:
            e: {
              for (var se = H.key; _ !== null; ) {
                if (_.key === se) {
                  if (se = H.type, se === T) {
                    if (_.tag === 7) {
                      n(
                        B,
                        _.sibling
                      ), F = o(
                        _,
                        H.props.children
                      ), F.return = B, B = F;
                      break e;
                    }
                  } else if (_.elementType === se || typeof se == "object" && se !== null && se.$$typeof === Z && im(se) === _.type) {
                    n(
                      B,
                      _.sibling
                    ), F = o(_, H.props), Yr(F, H), F.return = B, B = F;
                    break e;
                  }
                  n(B, _);
                  break;
                } else t(B, _);
                _ = _.sibling;
              }
              H.type === T ? (F = Ka(
                H.props.children,
                B.mode,
                F,
                H.key
              ), F.return = B, B = F) : (F = Pi(
                H.type,
                H.key,
                H.props,
                null,
                B.mode,
                F
              ), Yr(F, H), F.return = B, B = F);
            }
            return p(B);
          case M:
            e: {
              for (se = H.key; _ !== null; ) {
                if (_.key === se)
                  if (_.tag === 4 && _.stateNode.containerInfo === H.containerInfo && _.stateNode.implementation === H.implementation) {
                    n(
                      B,
                      _.sibling
                    ), F = o(_, H.children || []), F.return = B, B = F;
                    break e;
                  } else {
                    n(B, _);
                    break;
                  }
                else t(B, _);
                _ = _.sibling;
              }
              F = uu(H, B.mode, F), F.return = B, B = F;
            }
            return p(B);
          case Z:
            return se = H._init, H = se(H._payload), Je(
              B,
              _,
              H,
              F
            );
        }
        if (G(H))
          return ge(
            B,
            _,
            H,
            F
          );
        if (v(H)) {
          if (se = v(H), typeof se != "function") throw Error(s(150));
          return H = se.call(H), me(
            B,
            _,
            H,
            F
          );
        }
        if (typeof H.then == "function")
          return Je(
            B,
            _,
            po(H),
            F
          );
        if (H.$$typeof === N)
          return Je(
            B,
            _,
            Ii(B, H),
            F
          );
        mo(B, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint" ? (H = "" + H, _ !== null && _.tag === 6 ? (n(B, _.sibling), F = o(_, H), F.return = B, B = F) : (n(B, _), F = su(H, B.mode, F), F.return = B, B = F), p(B)) : n(B, _);
    }
    return function(B, _, H, F) {
      try {
        qr = 0;
        var se = Je(
          B,
          _,
          H,
          F
        );
        return jl = null, se;
      } catch (de) {
        if (de === Dr || de === to) throw de;
        var Ae = nn(29, de, null, B.mode);
        return Ae.lanes = F, Ae.return = B, Ae;
      } finally {
      }
    };
  }
  var $l = om(!0), sm = om(!1), yn = V(null), wn = null;
  function xa(e) {
    var t = e.alternate;
    ne(Ot, Ot.current & 1), ne(yn, e), wn === null && (t === null || Ul.current !== null || t.memoizedState !== null) && (wn = e);
  }
  function um(e) {
    if (e.tag === 22) {
      if (ne(Ot, Ot.current), ne(yn, e), wn === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (wn = e);
      }
    } else Ea();
  }
  function Ea() {
    ne(Ot, Ot.current), ne(yn, yn.current);
  }
  function In(e) {
    re(yn), wn === e && (wn = null), re(Ot);
  }
  var Ot = V(0);
  function ho(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || _c(n)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  function Yu(e, t, n, l) {
    t = e.memoizedState, n = n(l, t), n = n == null ? t : b({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Gu = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var l = on(), o = va(l);
      o.payload = t, n != null && (o.callback = n), t = ba(e, o, l), t !== null && (sn(t, e, l), Br(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var l = on(), o = va(l);
      o.tag = 1, o.payload = t, n != null && (o.callback = n), t = ba(e, o, l), t !== null && (sn(t, e, l), Br(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = on(), l = va(n);
      l.tag = 2, t != null && (l.callback = t), t = ba(e, l, n), t !== null && (sn(t, e, n), Br(t, e, n));
    }
  };
  function cm(e, t, n, l, o, u, p) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, u, p) : t.prototype && t.prototype.isPureReactComponent ? !Cr(n, l) || !Cr(o, u) : !0;
  }
  function fm(e, t, n, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l), t.state !== e && Gu.enqueueReplaceState(t, t.state, null);
  }
  function tl(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t)
        l !== "ref" && (n[l] = t[l]);
    }
    if (e = e.defaultProps) {
      n === t && (n = b({}, n));
      for (var o in e)
        n[o] === void 0 && (n[o] = e[o]);
    }
    return n;
  }
  var go = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  };
  function dm(e) {
    go(e);
  }
  function pm(e) {
    console.error(e);
  }
  function mm(e) {
    go(e);
  }
  function yo(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function hm(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Vu(e, t, n) {
    return n = va(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      yo(e, t);
    }, n;
  }
  function gm(e) {
    return e = va(e), e.tag = 3, e;
  }
  function ym(e, t, n, l) {
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var u = l.value;
      e.payload = function() {
        return o(u);
      }, e.callback = function() {
        hm(t, n, l);
      };
    }
    var p = n.stateNode;
    p !== null && typeof p.componentDidCatch == "function" && (e.callback = function() {
      hm(t, n, l), typeof o != "function" && (Oa === null ? Oa = /* @__PURE__ */ new Set([this]) : Oa.add(this));
      var y = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: y !== null ? y : ""
      });
    });
  }
  function Nv(e, t, n, l, o) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = n.alternate, t !== null && wr(
        t,
        n,
        o,
        !0
      ), n = yn.current, n !== null) {
        switch (n.tag) {
          case 13:
            return wn === null ? mc() : n.alternate === null && yt === 0 && (yt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = o, l === bu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), gc(e, l, o)), !1;
          case 22:
            return n.flags |= 65536, l === bu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), gc(e, l, o)), !1;
        }
        throw Error(s(435, n.tag));
      }
      return gc(e, l, o), mc(), !1;
    }
    if (Ue)
      return t = yn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, l !== du && (e = Error(s(422), { cause: l }), Or(pn(e, n)))) : (l !== du && (t = Error(s(423), {
        cause: l
      }), Or(
        pn(t, n)
      )), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, l = pn(l, n), o = Vu(
        e.stateNode,
        l,
        o
      ), Eu(e, o), yt !== 4 && (yt = 2)), !1;
    var u = Error(s(520), { cause: l });
    if (u = pn(u, n), Pr === null ? Pr = [u] : Pr.push(u), yt !== 4 && (yt = 2), t === null) return !0;
    l = pn(l, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = o & -o, n.lanes |= e, e = Vu(n.stateNode, l, e), Eu(n, e), !1;
        case 1:
          if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Oa === null || !Oa.has(u))))
            return n.flags |= 65536, o &= -o, n.lanes |= o, o = gm(o), ym(
              o,
              e,
              n,
              l
            ), Eu(n, o), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var vm = Error(s(461)), zt = !1;
  function Bt(e, t, n, l) {
    t.child = e === null ? sm(t, null, n, l) : $l(
      t,
      e.child,
      n,
      l
    );
  }
  function bm(e, t, n, l, o) {
    n = n.render;
    var u = t.ref;
    if ("ref" in l) {
      var p = {};
      for (var y in l)
        y !== "ref" && (p[y] = l[y]);
    } else p = l;
    return Ja(t), l = Mu(
      e,
      t,
      n,
      p,
      u,
      o
    ), y = Ou(), e !== null && !zt ? (wu(e, t, o), ea(e, t, o)) : (Ue && y && cu(t), t.flags |= 1, Bt(e, t, l, o), t.child);
  }
  function Sm(e, t, n, l, o) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !ou(u) && u.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = u, xm(
        e,
        t,
        u,
        l,
        o
      )) : (e = Pi(
        n.type,
        null,
        l,
        t,
        t.mode,
        o
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !Ju(e, o)) {
      var p = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Cr, n(p, l) && e.ref === t.ref)
        return ea(e, t, o);
    }
    return t.flags |= 1, e = Qn(u, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function xm(e, t, n, l, o) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Cr(u, l) && e.ref === t.ref)
        if (zt = !1, t.pendingProps = l = u, Ju(e, o))
          (e.flags & 131072) !== 0 && (zt = !0);
        else
          return t.lanes = e.lanes, ea(e, t, o);
    }
    return Xu(
      e,
      t,
      n,
      l,
      o
    );
  }
  function Em(e, t, n) {
    var l = t.pendingProps, o = l.children, u = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (l = u !== null ? u.baseLanes | n : n, e !== null) {
          for (o = t.child = e.child, u = 0; o !== null; )
            u = u | o.lanes | o.childLanes, o = o.sibling;
          t.childLanes = u & ~l;
        } else t.childLanes = 0, t.child = null;
        return Tm(
          e,
          t,
          l,
          n
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && eo(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? xp(t, u) : Cu(), um(t);
      else
        return t.lanes = t.childLanes = 536870912, Tm(
          e,
          t,
          u !== null ? u.baseLanes | n : n,
          n
        );
    } else
      u !== null ? (eo(t, u.cachePool), xp(t, u), Ea(), t.memoizedState = null) : (e !== null && eo(t, null), Cu(), Ea());
    return Bt(e, t, o, n), t.child;
  }
  function Tm(e, t, n, l) {
    var o = vu();
    return o = o === null ? null : { parent: Mt._currentValue, pool: o }, t.memoizedState = {
      baseLanes: n,
      cachePool: o
    }, e !== null && eo(t, null), Cu(), um(t), e !== null && wr(e, t, l, !0), null;
  }
  function vo(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(s(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Xu(e, t, n, l, o) {
    return Ja(t), n = Mu(
      e,
      t,
      n,
      l,
      void 0,
      o
    ), l = Ou(), e !== null && !zt ? (wu(e, t, o), ea(e, t, o)) : (Ue && l && cu(t), t.flags |= 1, Bt(e, t, n, o), t.child);
  }
  function Cm(e, t, n, l, o, u) {
    return Ja(t), t.updateQueue = null, n = Tp(
      t,
      l,
      n,
      o
    ), Ep(e), l = Ou(), e !== null && !zt ? (wu(e, t, u), ea(e, t, u)) : (Ue && l && cu(t), t.flags |= 1, Bt(e, t, n, u), t.child);
  }
  function Rm(e, t, n, l, o) {
    if (Ja(t), t.stateNode === null) {
      var u = zl, p = n.contextType;
      typeof p == "object" && p !== null && (u = jt(p)), u = new n(l, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Gu, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = l, u.state = t.memoizedState, u.refs = {}, Su(t), p = n.contextType, u.context = typeof p == "object" && p !== null ? jt(p) : zl, u.state = t.memoizedState, p = n.getDerivedStateFromProps, typeof p == "function" && (Yu(
        t,
        n,
        p,
        l
      ), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (p = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), p !== u.state && Gu.enqueueReplaceState(u, u.state, null), kr(t, l, u, o), Ur(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      u = t.stateNode;
      var y = t.memoizedProps, R = tl(n, y);
      u.props = R;
      var L = u.context, P = n.contextType;
      p = zl, typeof P == "object" && P !== null && (p = jt(P));
      var J = n.getDerivedStateFromProps;
      P = typeof J == "function" || typeof u.getSnapshotBeforeUpdate == "function", y = t.pendingProps !== y, P || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (y || L !== p) && fm(
        t,
        u,
        l,
        p
      ), ya = !1;
      var j = t.memoizedState;
      u.state = j, kr(t, l, u, o), Ur(), L = t.memoizedState, y || j !== L || ya ? (typeof J == "function" && (Yu(
        t,
        n,
        J,
        l
      ), L = t.memoizedState), (R = ya || cm(
        t,
        n,
        R,
        l,
        j,
        L,
        p
      )) ? (P || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = L), u.props = l, u.state = L, u.context = p, l = R) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      u = t.stateNode, xu(e, t), p = t.memoizedProps, P = tl(n, p), u.props = P, J = t.pendingProps, j = u.context, L = n.contextType, R = zl, typeof L == "object" && L !== null && (R = jt(L)), y = n.getDerivedStateFromProps, (L = typeof y == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (p !== J || j !== R) && fm(
        t,
        u,
        l,
        R
      ), ya = !1, j = t.memoizedState, u.state = j, kr(t, l, u, o), Ur();
      var $ = t.memoizedState;
      p !== J || j !== $ || ya || e !== null && e.dependencies !== null && Ji(e.dependencies) ? (typeof y == "function" && (Yu(
        t,
        n,
        y,
        l
      ), $ = t.memoizedState), (P = ya || cm(
        t,
        n,
        P,
        l,
        j,
        $,
        R
      ) || e !== null && e.dependencies !== null && Ji(e.dependencies)) ? (L || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, $, R), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        l,
        $,
        R
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || p === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = $), u.props = l, u.state = $, u.context = R, l = P) : (typeof u.componentDidUpdate != "function" || p === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return u = l, vo(e, t), l = (t.flags & 128) !== 0, u || l ? (u = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && l ? (t.child = $l(
      t,
      e.child,
      null,
      o
    ), t.child = $l(
      t,
      null,
      n,
      o
    )) : Bt(e, t, n, o), t.memoizedState = u.state, e = t.child) : e = ea(
      e,
      t,
      o
    ), e;
  }
  function Am(e, t, n, l) {
    return Mr(), t.flags |= 256, Bt(e, t, n, l), t.child;
  }
  var Ku = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Qu(e) {
    return { baseLanes: e, cachePool: pp() };
  }
  function Zu(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= vn), e;
  }
  function Mm(e, t, n) {
    var l = t.pendingProps, o = !1, u = (t.flags & 128) !== 0, p;
    if ((p = u) || (p = e !== null && e.memoizedState === null ? !1 : (Ot.current & 2) !== 0), p && (o = !0, t.flags &= -129), p = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ue) {
        if (o ? xa(t) : Ea(), Ue) {
          var y = gt, R;
          if (R = y) {
            e: {
              for (R = y, y = On; R.nodeType !== 8; ) {
                if (!y) {
                  y = null;
                  break e;
                }
                if (R = An(
                  R.nextSibling
                ), R === null) {
                  y = null;
                  break e;
                }
              }
              y = R;
            }
            y !== null ? (t.memoizedState = {
              dehydrated: y,
              treeContext: Qa !== null ? { id: Zn, overflow: Pn } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, R = nn(
              18,
              null,
              null,
              0
            ), R.stateNode = y, R.return = t, t.child = R, Kt = t, gt = null, R = !0) : R = !1;
          }
          R || Fa(t);
        }
        if (y = t.memoizedState, y !== null && (y = y.dehydrated, y !== null))
          return _c(y) ? t.lanes = 32 : t.lanes = 536870912, null;
        In(t);
      }
      return y = l.children, l = l.fallback, o ? (Ea(), o = t.mode, y = bo(
        { mode: "hidden", children: y },
        o
      ), l = Ka(
        l,
        o,
        n,
        null
      ), y.return = t, l.return = t, y.sibling = l, t.child = y, o = t.child, o.memoizedState = Qu(n), o.childLanes = Zu(
        e,
        p,
        n
      ), t.memoizedState = Ku, l) : (xa(t), Pu(t, y));
    }
    if (R = e.memoizedState, R !== null && (y = R.dehydrated, y !== null)) {
      if (u)
        t.flags & 256 ? (xa(t), t.flags &= -257, t = Fu(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (Ea(), t.child = e.child, t.flags |= 128, t = null) : (Ea(), o = l.fallback, y = t.mode, l = bo(
          { mode: "visible", children: l.children },
          y
        ), o = Ka(
          o,
          y,
          n,
          null
        ), o.flags |= 2, l.return = t, o.return = t, l.sibling = o, t.child = l, $l(
          t,
          e.child,
          null,
          n
        ), l = t.child, l.memoizedState = Qu(n), l.childLanes = Zu(
          e,
          p,
          n
        ), t.memoizedState = Ku, t = o);
      else if (xa(t), _c(y)) {
        if (p = y.nextSibling && y.nextSibling.dataset, p) var L = p.dgst;
        p = L, l = Error(s(419)), l.stack = "", l.digest = p, Or({ value: l, source: null, stack: null }), t = Fu(
          e,
          t,
          n
        );
      } else if (zt || wr(e, t, n, !1), p = (n & e.childLanes) !== 0, zt || p) {
        if (p = tt, p !== null && (l = n & -n, l = (l & 42) !== 0 ? 1 : Ds(l), l = (l & (p.suspendedLanes | n)) !== 0 ? 0 : l, l !== 0 && l !== R.retryLane))
          throw R.retryLane = l, wl(e, l), sn(p, e, l), vm;
        y.data === "$?" || mc(), t = Fu(
          e,
          t,
          n
        );
      } else
        y.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = R.treeContext, gt = An(
          y.nextSibling
        ), Kt = t, Ue = !0, Pa = null, On = !1, e !== null && (hn[gn++] = Zn, hn[gn++] = Pn, hn[gn++] = Qa, Zn = e.id, Pn = e.overflow, Qa = t), t = Pu(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return o ? (Ea(), o = l.fallback, y = t.mode, R = e.child, L = R.sibling, l = Qn(R, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = R.subtreeFlags & 65011712, L !== null ? o = Qn(L, o) : (o = Ka(
      o,
      y,
      n,
      null
    ), o.flags |= 2), o.return = t, l.return = t, l.sibling = o, t.child = l, l = o, o = t.child, y = e.child.memoizedState, y === null ? y = Qu(n) : (R = y.cachePool, R !== null ? (L = Mt._currentValue, R = R.parent !== L ? { parent: L, pool: L } : R) : R = pp(), y = {
      baseLanes: y.baseLanes | n,
      cachePool: R
    }), o.memoizedState = y, o.childLanes = Zu(
      e,
      p,
      n
    ), t.memoizedState = Ku, l) : (xa(t), n = e.child, e = n.sibling, n = Qn(n, {
      mode: "visible",
      children: l.children
    }), n.return = t, n.sibling = null, e !== null && (p = t.deletions, p === null ? (t.deletions = [e], t.flags |= 16) : p.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function Pu(e, t) {
    return t = bo(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function bo(e, t) {
    return e = nn(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function Fu(e, t, n) {
    return $l(t, e.child, null, n), e = Pu(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Om(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), mu(e.return, t, n);
  }
  function Wu(e, t, n, l, o) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: n,
      tailMode: o
    } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = l, u.tail = n, u.tailMode = o);
  }
  function wm(e, t, n) {
    var l = t.pendingProps, o = l.revealOrder, u = l.tail;
    if (Bt(e, t, l.children, n), l = Ot.current, (l & 2) !== 0)
      l = l & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Om(e, n, t);
          else if (e.tag === 19)
            Om(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      l &= 1;
    }
    switch (ne(Ot, l), o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && ho(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Wu(
          t,
          !1,
          o,
          n,
          u
        );
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && ho(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Wu(
          t,
          !0,
          n,
          null,
          u
        );
        break;
      case "together":
        Wu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ea(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Ma |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (wr(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = Qn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = Qn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Ju(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ji(e)));
  }
  function Bv(e, t, n) {
    switch (t.tag) {
      case 3:
        be(t, t.stateNode.containerInfo), ga(t, Mt, e.memoizedState.cache), Mr();
        break;
      case 27:
      case 5:
        ye(t);
        break;
      case 4:
        be(t, t.stateNode.containerInfo);
        break;
      case 10:
        ga(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (xa(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Mm(e, t, n) : (xa(t), e = ea(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        xa(t);
        break;
      case 19:
        var o = (e.flags & 128) !== 0;
        if (l = (n & t.childLanes) !== 0, l || (wr(
          e,
          t,
          n,
          !1
        ), l = (n & t.childLanes) !== 0), o) {
          if (l)
            return wm(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ne(Ot, Ot.current), l) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Em(e, t, n);
      case 24:
        ga(t, Mt, e.memoizedState.cache);
    }
    return ea(e, t, n);
  }
  function zm(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        zt = !0;
      else {
        if (!Ju(e, n) && (t.flags & 128) === 0)
          return zt = !1, Bv(
            e,
            t,
            n
          );
        zt = (e.flags & 131072) !== 0;
      }
    else
      zt = !1, Ue && (t.flags & 1048576) !== 0 && ip(t, Wi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType, o = l._init;
          if (l = o(l._payload), t.type = l, typeof l == "function")
            ou(l) ? (e = tl(l, e), t.tag = 1, t = Rm(
              null,
              t,
              l,
              e,
              n
            )) : (t.tag = 0, t = Xu(
              null,
              t,
              l,
              e,
              n
            ));
          else {
            if (l != null) {
              if (o = l.$$typeof, o === D) {
                t.tag = 11, t = bm(
                  null,
                  t,
                  l,
                  e,
                  n
                );
                break e;
              } else if (o === X) {
                t.tag = 14, t = Sm(
                  null,
                  t,
                  l,
                  e,
                  n
                );
                break e;
              }
            }
            throw t = Y(l) || l, Error(s(306, t, ""));
          }
        }
        return t;
      case 0:
        return Xu(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return l = t.type, o = tl(
          l,
          t.pendingProps
        ), Rm(
          e,
          t,
          l,
          o,
          n
        );
      case 3:
        e: {
          if (be(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          l = t.pendingProps;
          var u = t.memoizedState;
          o = u.element, xu(e, t), kr(t, l, null, n);
          var p = t.memoizedState;
          if (l = p.cache, ga(t, Mt, l), l !== u.cache && hu(
            t,
            [Mt],
            n,
            !0
          ), Ur(), l = p.element, u.isDehydrated)
            if (u = {
              element: l,
              isDehydrated: !1,
              cache: p.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = Am(
                e,
                t,
                l,
                n
              );
              break e;
            } else if (l !== o) {
              o = pn(
                Error(s(424)),
                t
              ), Or(o), t = Am(
                e,
                t,
                l,
                n
              );
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (gt = An(e.firstChild), Kt = t, Ue = !0, Pa = null, On = !0, n = sm(
                t,
                null,
                l,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (Mr(), l === o) {
              t = ea(
                e,
                t,
                n
              );
              break e;
            }
            Bt(
              e,
              t,
              l,
              n
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return vo(e, t), e === null ? (n = Bh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Ue || (n = t.type, e = t.pendingProps, l = No(
          ue.current
        ).createElement(n), l[Lt] = t, l[Qt] = e, kt(l, n, e), wt(l), t.stateNode = l) : t.memoizedState = Bh(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return ye(t), e === null && Ue && (l = t.stateNode = _h(
          t.type,
          t.pendingProps,
          ue.current
        ), Kt = t, On = !0, o = gt, _a(t.type) ? (Dc = o, gt = An(
          l.firstChild
        )) : gt = o), Bt(
          e,
          t,
          t.pendingProps.children,
          n
        ), vo(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ue && ((o = l = gt) && (l = sb(
          l,
          t.type,
          t.pendingProps,
          On
        ), l !== null ? (t.stateNode = l, Kt = t, gt = An(
          l.firstChild
        ), On = !1, o = !0) : o = !1), o || Fa(t)), ye(t), o = t.type, u = t.pendingProps, p = e !== null ? e.memoizedProps : null, l = u.children, Oc(o, u) ? l = null : p !== null && Oc(o, p) && (t.flags |= 32), t.memoizedState !== null && (o = Mu(
          e,
          t,
          Av,
          null,
          null,
          n
        ), li._currentValue = o), vo(e, t), Bt(e, t, l, n), t.child;
      case 6:
        return e === null && Ue && ((e = n = gt) && (n = ub(
          n,
          t.pendingProps,
          On
        ), n !== null ? (t.stateNode = n, Kt = t, gt = null, e = !0) : e = !1), e || Fa(t)), null;
      case 13:
        return Mm(e, t, n);
      case 4:
        return be(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = $l(
          t,
          null,
          l,
          n
        ) : Bt(
          e,
          t,
          l,
          n
        ), t.child;
      case 11:
        return bm(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return Bt(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return Bt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return Bt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return l = t.pendingProps, ga(t, t.type, l.value), Bt(
          e,
          t,
          l.children,
          n
        ), t.child;
      case 9:
        return o = t.type._context, l = t.pendingProps.children, Ja(t), o = jt(o), l = l(o), t.flags |= 1, Bt(e, t, l, n), t.child;
      case 14:
        return Sm(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return xm(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return wm(e, t, n);
      case 31:
        return l = t.pendingProps, n = t.mode, l = {
          mode: l.mode,
          children: l.children
        }, e === null ? (n = bo(
          l,
          n
        ), n.ref = t.ref, t.child = n, n.return = t, t = n) : (n = Qn(e.child, l), n.ref = t.ref, t.child = n, n.return = t, t = n), t;
      case 22:
        return Em(e, t, n);
      case 24:
        return Ja(t), l = jt(Mt), e === null ? (o = vu(), o === null && (o = tt, u = gu(), o.pooledCache = u, u.refCount++, u !== null && (o.pooledCacheLanes |= n), o = u), t.memoizedState = {
          parent: l,
          cache: o
        }, Su(t), ga(t, Mt, o)) : ((e.lanes & n) !== 0 && (xu(e, t), kr(t, null, null, n), Ur()), o = e.memoizedState, u = t.memoizedState, o.parent !== l ? (o = { parent: l, cache: l }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), ga(t, Mt, l)) : (l = u.cache, ga(t, Mt, l), l !== o.cache && hu(
          t,
          [Mt],
          n,
          !0
        ))), Bt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function ta(e) {
    e.flags |= 4;
  }
  function _m(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !jh(t)) {
      if (t = yn.current, t !== null && ((De & 4194048) === De ? wn !== null : (De & 62914560) !== De && (De & 536870912) === 0 || t !== wn))
        throw Nr = bu, mp;
      e.flags |= 8192;
    }
  }
  function So(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? ud() : 536870912, e.lanes |= t, Vl |= t);
  }
  function Gr(e, t) {
    if (!Ue)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), n = n.sibling;
          l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
      }
  }
  function ct(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, l = 0;
    if (t)
      for (var o = e.child; o !== null; )
        n |= o.lanes | o.childLanes, l |= o.subtreeFlags & 65011712, l |= o.flags & 65011712, o.return = e, o = o.sibling;
    else
      for (o = e.child; o !== null; )
        n |= o.lanes | o.childLanes, l |= o.subtreeFlags, l |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= l, e.childLanes = n, t;
  }
  function Uv(e, t, n) {
    var l = t.pendingProps;
    switch (fu(t), t.tag) {
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
        return ct(t), null;
      case 1:
        return ct(t), null;
      case 3:
        return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Wn(Mt), ze(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Ar(t) ? ta(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, up())), ct(t), null;
      case 26:
        return n = t.memoizedState, e === null ? (ta(t), n !== null ? (ct(t), _m(t, n)) : (ct(t), t.flags &= -16777217)) : n ? n !== e.memoizedState ? (ta(t), ct(t), _m(t, n)) : (ct(t), t.flags &= -16777217) : (e.memoizedProps !== l && ta(t), ct(t), t.flags &= -16777217), null;
      case 27:
        Re(t), n = ue.current;
        var o = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== l && ta(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(s(166));
            return ct(t), null;
          }
          e = oe.current, Ar(t) ? op(t) : (e = _h(o, l, n), t.stateNode = e, ta(t));
        }
        return ct(t), null;
      case 5:
        if (Re(t), n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && ta(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(s(166));
            return ct(t), null;
          }
          if (e = oe.current, Ar(t))
            op(t);
          else {
            switch (o = No(
              ue.current
            ), e) {
              case 1:
                e = o.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                e = o.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    e = o.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    e = o.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof l.is == "string" ? o.createElement("select", { is: l.is }) : o.createElement("select"), l.multiple ? e.multiple = !0 : l.size && (e.size = l.size);
                    break;
                  default:
                    e = typeof l.is == "string" ? o.createElement(n, { is: l.is }) : o.createElement(n);
                }
            }
            e[Lt] = t, e[Qt] = l;
            e: for (o = t.child; o !== null; ) {
              if (o.tag === 5 || o.tag === 6)
                e.appendChild(o.stateNode);
              else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                o.child.return = o, o = o.child;
                continue;
              }
              if (o === t) break e;
              for (; o.sibling === null; ) {
                if (o.return === null || o.return === t)
                  break e;
                o = o.return;
              }
              o.sibling.return = o.return, o = o.sibling;
            }
            t.stateNode = e;
            e: switch (kt(e, n, l), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!l.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && ta(t);
          }
        }
        return ct(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && ta(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(s(166));
          if (e = ue.current, Ar(t)) {
            if (e = t.stateNode, n = t.memoizedProps, l = null, o = Kt, o !== null)
              switch (o.tag) {
                case 27:
                case 5:
                  l = o.memoizedProps;
              }
            e[Lt] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || Ch(e.nodeValue, n)), e || Fa(t);
          } else
            e = No(e).createTextNode(
              l
            ), e[Lt] = t, t.stateNode = e;
        }
        return ct(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (o = Ar(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(s(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(s(317));
              o[Lt] = t;
            } else
              Mr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ct(t), o = !1;
          } else
            o = up(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
          if (!o)
            return t.flags & 256 ? (In(t), t) : (In(t), null);
        }
        if (In(t), (t.flags & 128) !== 0)
          return t.lanes = n, t;
        if (n = l !== null, e = e !== null && e.memoizedState !== null, n) {
          l = t.child, o = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (o = l.alternate.memoizedState.cachePool.pool);
          var u = null;
          l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== o && (l.flags |= 2048);
        }
        return n !== e && n && (t.child.flags |= 8192), So(t, t.updateQueue), ct(t), null;
      case 4:
        return ze(), e === null && Tc(t.stateNode.containerInfo), ct(t), null;
      case 10:
        return Wn(t.type), ct(t), null;
      case 19:
        if (re(Ot), o = t.memoizedState, o === null) return ct(t), null;
        if (l = (t.flags & 128) !== 0, u = o.rendering, u === null)
          if (l) Gr(o, !1);
          else {
            if (yt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = ho(e), u !== null) {
                  for (t.flags |= 128, Gr(o, !1), e = u.updateQueue, t.updateQueue = e, So(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    rp(n, e), n = n.sibling;
                  return ne(
                    Ot,
                    Ot.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null && Ye() > To && (t.flags |= 128, l = !0, Gr(o, !1), t.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = ho(u), e !== null) {
              if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, So(t, e), Gr(o, !0), o.tail === null && o.tailMode === "hidden" && !u.alternate && !Ue)
                return ct(t), null;
            } else
              2 * Ye() - o.renderingStartTime > To && n !== 536870912 && (t.flags |= 128, l = !0, Gr(o, !1), t.lanes = 4194304);
          o.isBackwards ? (u.sibling = t.child, t.child = u) : (e = o.last, e !== null ? e.sibling = u : t.child = u, o.last = u);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Ye(), t.sibling = null, e = Ot.current, ne(Ot, l ? e & 1 | 2 : e & 1), t) : (ct(t), null);
      case 22:
      case 23:
        return In(t), Ru(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (ct(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ct(t), n = t.updateQueue, n !== null && So(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && re(Ia), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Wn(Mt), ct(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function kv(e, t) {
    switch (fu(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Wn(Mt), ze(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Re(t), null;
      case 13:
        if (In(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(s(340));
          Mr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return re(Ot), null;
      case 4:
        return ze(), null;
      case 10:
        return Wn(t.type), null;
      case 22:
      case 23:
        return In(t), Ru(), e !== null && re(Ia), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Wn(Mt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Dm(e, t) {
    switch (fu(t), t.tag) {
      case 3:
        Wn(Mt), ze();
        break;
      case 26:
      case 27:
      case 5:
        Re(t);
        break;
      case 4:
        ze();
        break;
      case 13:
        In(t);
        break;
      case 19:
        re(Ot);
        break;
      case 10:
        Wn(t.type);
        break;
      case 22:
      case 23:
        In(t), Ru(), e !== null && re(Ia);
        break;
      case 24:
        Wn(Mt);
    }
  }
  function Vr(e, t) {
    try {
      var n = t.updateQueue, l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var o = l.next;
        n = o;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var u = n.create, p = n.inst;
            l = u(), p.destroy = l;
          }
          n = n.next;
        } while (n !== o);
      }
    } catch (y) {
      et(t, t.return, y);
    }
  }
  function Ta(e, t, n) {
    try {
      var l = t.updateQueue, o = l !== null ? l.lastEffect : null;
      if (o !== null) {
        var u = o.next;
        l = u;
        do {
          if ((l.tag & e) === e) {
            var p = l.inst, y = p.destroy;
            if (y !== void 0) {
              p.destroy = void 0, o = t;
              var R = n, L = y;
              try {
                L();
              } catch (P) {
                et(
                  o,
                  R,
                  P
                );
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (P) {
      et(t, t.return, P);
    }
  }
  function Nm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Sp(t, n);
      } catch (l) {
        et(e, e.return, l);
      }
    }
  }
  function Bm(e, t, n) {
    n.props = tl(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      et(e, t, l);
    }
  }
  function Xr(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(l) : n.current = l;
      }
    } catch (o) {
      et(e, t, o);
    }
  }
  function zn(e, t) {
    var n = e.ref, l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (o) {
          et(e, t, o);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (o) {
          et(e, t, o);
        }
      else n.current = null;
  }
  function Um(e) {
    var t = e.type, n = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break e;
        case "img":
          n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (o) {
      et(e, e.return, o);
    }
  }
  function Iu(e, t, n) {
    try {
      var l = e.stateNode;
      ab(l, e.type, n, t), l[Qt] = t;
    } catch (o) {
      et(e, e.return, o);
    }
  }
  function km(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && _a(e.type) || e.tag === 4;
  }
  function ec(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || km(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && _a(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function tc(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Do));
    else if (l !== 4 && (l === 27 && _a(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (tc(e, t, n), e = e.sibling; e !== null; )
        tc(e, t, n), e = e.sibling;
  }
  function xo(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && (l === 27 && _a(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (xo(e, t, n), e = e.sibling; e !== null; )
        xo(e, t, n), e = e.sibling;
  }
  function Hm(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var l = e.type, o = t.attributes; o.length; )
        t.removeAttributeNode(o[0]);
      kt(t, l, n), t[Lt] = e, t[Qt] = n;
    } catch (u) {
      et(e, e.return, u);
    }
  }
  var na = !1, xt = !1, nc = !1, Lm = typeof WeakSet == "function" ? WeakSet : Set, _t = null;
  function Hv(e, t) {
    if (e = e.containerInfo, Ac = jo, e = Pd(e), eu(e)) {
      if ("selectionStart" in e)
        var n = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var o = l.anchorOffset, u = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, u.nodeType;
            } catch {
              n = null;
              break e;
            }
            var p = 0, y = -1, R = -1, L = 0, P = 0, J = e, j = null;
            t: for (; ; ) {
              for (var $; J !== n || o !== 0 && J.nodeType !== 3 || (y = p + o), J !== u || l !== 0 && J.nodeType !== 3 || (R = p + l), J.nodeType === 3 && (p += J.nodeValue.length), ($ = J.firstChild) !== null; )
                j = J, J = $;
              for (; ; ) {
                if (J === e) break t;
                if (j === n && ++L === o && (y = p), j === u && ++P === l && (R = p), ($ = J.nextSibling) !== null) break;
                J = j, j = J.parentNode;
              }
              J = $;
            }
            n = y === -1 || R === -1 ? null : { start: y, end: R };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Mc = { focusedElem: e, selectionRange: n }, jo = !1, _t = t; _t !== null; )
      if (t = _t, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = t, _t = e;
      else
        for (; _t !== null; ) {
          switch (t = _t, u = t.alternate, e = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                e = void 0, n = t, o = u.memoizedProps, u = u.memoizedState, l = n.stateNode;
                try {
                  var ge = tl(
                    n.type,
                    o,
                    n.elementType === n.type
                  );
                  e = l.getSnapshotBeforeUpdate(
                    ge,
                    u
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (me) {
                  et(
                    n,
                    n.return,
                    me
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  zc(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      zc(e);
                      break;
                    default:
                      e.textContent = "";
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
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, _t = e;
            break;
          }
          _t = t.return;
        }
  }
  function jm(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Ca(e, n), l & 4 && Vr(5, n);
        break;
      case 1:
        if (Ca(e, n), l & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (p) {
              et(n, n.return, p);
            }
          else {
            var o = tl(
              n.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (p) {
              et(
                n,
                n.return,
                p
              );
            }
          }
        l & 64 && Nm(n), l & 512 && Xr(n, n.return);
        break;
      case 3:
        if (Ca(e, n), l & 64 && (e = n.updateQueue, e !== null)) {
          if (t = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            Sp(e, t);
          } catch (p) {
            et(n, n.return, p);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Hm(n);
      case 26:
      case 5:
        Ca(e, n), t === null && l & 4 && Um(n), l & 512 && Xr(n, n.return);
        break;
      case 12:
        Ca(e, n);
        break;
      case 13:
        Ca(e, n), l & 4 && Ym(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Kv.bind(
          null,
          n
        ), cb(e, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || na, !l) {
          t = t !== null && t.memoizedState !== null || xt, o = na;
          var u = xt;
          na = l, (xt = t) && !u ? Ra(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Ca(e, n), na = o, xt = u;
        }
        break;
      case 30:
        break;
      default:
        Ca(e, n);
    }
  }
  function $m(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, $m(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Us(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var rt = null, Ft = !1;
  function aa(e, t, n) {
    for (n = n.child; n !== null; )
      qm(e, t, n), n = n.sibling;
  }
  function qm(e, t, n) {
    if (xe && typeof xe.onCommitFiberUnmount == "function")
      try {
        xe.onCommitFiberUnmount(lt, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        xt || zn(n, t), aa(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        xt || zn(n, t);
        var l = rt, o = Ft;
        _a(n.type) && (rt = n.stateNode, Ft = !1), aa(
          e,
          t,
          n
        ), ei(n.stateNode), rt = l, Ft = o;
        break;
      case 5:
        xt || zn(n, t);
      case 6:
        if (l = rt, o = Ft, rt = null, aa(
          e,
          t,
          n
        ), rt = l, Ft = o, rt !== null)
          if (Ft)
            try {
              (rt.nodeType === 9 ? rt.body : rt.nodeName === "HTML" ? rt.ownerDocument.body : rt).removeChild(n.stateNode);
            } catch (u) {
              et(
                n,
                t,
                u
              );
            }
          else
            try {
              rt.removeChild(n.stateNode);
            } catch (u) {
              et(
                n,
                t,
                u
              );
            }
        break;
      case 18:
        rt !== null && (Ft ? (e = rt, wh(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), si(e)) : wh(rt, n.stateNode));
        break;
      case 4:
        l = rt, o = Ft, rt = n.stateNode.containerInfo, Ft = !0, aa(
          e,
          t,
          n
        ), rt = l, Ft = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        xt || Ta(2, n, t), xt || Ta(4, n, t), aa(
          e,
          t,
          n
        );
        break;
      case 1:
        xt || (zn(n, t), l = n.stateNode, typeof l.componentWillUnmount == "function" && Bm(
          n,
          t,
          l
        )), aa(
          e,
          t,
          n
        );
        break;
      case 21:
        aa(
          e,
          t,
          n
        );
        break;
      case 22:
        xt = (l = xt) || n.memoizedState !== null, aa(
          e,
          t,
          n
        ), xt = l;
        break;
      default:
        aa(
          e,
          t,
          n
        );
    }
  }
  function Ym(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        si(e);
      } catch (n) {
        et(t, t.return, n);
      }
  }
  function Lv(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Lm()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Lm()), t;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function ac(e, t) {
    var n = Lv(e);
    t.forEach(function(l) {
      var o = Qv.bind(null, e, l);
      n.has(l) || (n.add(l), l.then(o, o));
    });
  }
  function an(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var o = n[l], u = e, p = t, y = p;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (_a(y.type)) {
                rt = y.stateNode, Ft = !1;
                break e;
              }
              break;
            case 5:
              rt = y.stateNode, Ft = !1;
              break e;
            case 3:
            case 4:
              rt = y.stateNode.containerInfo, Ft = !0;
              break e;
          }
          y = y.return;
        }
        if (rt === null) throw Error(s(160));
        qm(u, p, o), rt = null, Ft = !1, u = o.alternate, u !== null && (u.return = null), o.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Gm(t, e), t = t.sibling;
  }
  var Rn = null;
  function Gm(e, t) {
    var n = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        an(t, e), ln(e), l & 4 && (Ta(3, e, e.return), Vr(3, e), Ta(5, e, e.return));
        break;
      case 1:
        an(t, e), ln(e), l & 512 && (xt || n === null || zn(n, n.return)), l & 64 && na && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var o = Rn;
        if (an(t, e), ln(e), l & 512 && (xt || n === null || zn(n, n.return)), l & 4) {
          var u = n !== null ? n.memoizedState : null;
          if (l = e.memoizedState, n === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, n = e.memoizedProps, o = o.ownerDocument || o;
                  t: switch (l) {
                    case "title":
                      u = o.getElementsByTagName("title")[0], (!u || u[hr] || u[Lt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = o.createElement(l), o.head.insertBefore(
                        u,
                        o.querySelector("head > title")
                      )), kt(u, l, n), u[Lt] = e, wt(u), l = u;
                      break e;
                    case "link":
                      var p = Hh(
                        "link",
                        "href",
                        o
                      ).get(l + (n.href || ""));
                      if (p) {
                        for (var y = 0; y < p.length; y++)
                          if (u = p[y], u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            p.splice(y, 1);
                            break t;
                          }
                      }
                      u = o.createElement(l), kt(u, l, n), o.head.appendChild(u);
                      break;
                    case "meta":
                      if (p = Hh(
                        "meta",
                        "content",
                        o
                      ).get(l + (n.content || ""))) {
                        for (y = 0; y < p.length; y++)
                          if (u = p[y], u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            p.splice(y, 1);
                            break t;
                          }
                      }
                      u = o.createElement(l), kt(u, l, n), o.head.appendChild(u);
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  u[Lt] = e, wt(u), l = u;
                }
                e.stateNode = l;
              } else
                Lh(
                  o,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = kh(
                o,
                l,
                e.memoizedProps
              );
          else
            u !== l ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, l === null ? Lh(
              o,
              e.type,
              e.stateNode
            ) : kh(
              o,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && Iu(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        an(t, e), ln(e), l & 512 && (xt || n === null || zn(n, n.return)), n !== null && l & 4 && Iu(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (an(t, e), ln(e), l & 512 && (xt || n === null || zn(n, n.return)), e.flags & 32) {
          o = e.stateNode;
          try {
            El(o, "");
          } catch ($) {
            et(e, e.return, $);
          }
        }
        l & 4 && e.stateNode != null && (o = e.memoizedProps, Iu(
          e,
          o,
          n !== null ? n.memoizedProps : o
        )), l & 1024 && (nc = !0);
        break;
      case 6:
        if (an(t, e), ln(e), l & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          l = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = l;
          } catch ($) {
            et(e, e.return, $);
          }
        }
        break;
      case 3:
        if (ko = null, o = Rn, Rn = Bo(t.containerInfo), an(t, e), Rn = o, ln(e), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            si(t.containerInfo);
          } catch ($) {
            et(e, e.return, $);
          }
        nc && (nc = !1, Vm(e));
        break;
      case 4:
        l = Rn, Rn = Bo(
          e.stateNode.containerInfo
        ), an(t, e), ln(e), Rn = l;
        break;
      case 12:
        an(t, e), ln(e);
        break;
      case 13:
        an(t, e), ln(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (uc = Ye()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, ac(e, l)));
        break;
      case 22:
        o = e.memoizedState !== null;
        var R = n !== null && n.memoizedState !== null, L = na, P = xt;
        if (na = L || o, xt = P || R, an(t, e), xt = P, na = L, ln(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (n === null || R || na || xt || nl(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                R = n = t;
                try {
                  if (u = R.stateNode, o)
                    p = u.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none";
                  else {
                    y = R.stateNode;
                    var J = R.memoizedProps.style, j = J != null && J.hasOwnProperty("display") ? J.display : null;
                    y.style.display = j == null || typeof j == "boolean" ? "" : ("" + j).trim();
                  }
                } catch ($) {
                  et(R, R.return, $);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                R = t;
                try {
                  R.stateNode.nodeValue = o ? "" : R.memoizedProps;
                } catch ($) {
                  et(R, R.return, $);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), t = t.return;
            }
            n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
          }
        l & 4 && (l = e.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, ac(e, n))));
        break;
      case 19:
        an(t, e), ln(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, ac(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        an(t, e), ln(e);
    }
  }
  function ln(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (km(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(s(160));
        switch (n.tag) {
          case 27:
            var o = n.stateNode, u = ec(e);
            xo(e, u, o);
            break;
          case 5:
            var p = n.stateNode;
            n.flags & 32 && (El(p, ""), n.flags &= -33);
            var y = ec(e);
            xo(e, y, p);
            break;
          case 3:
          case 4:
            var R = n.stateNode.containerInfo, L = ec(e);
            tc(
              e,
              L,
              R
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (P) {
        et(e, e.return, P);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Vm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Vm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Ca(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        jm(e, t.alternate, t), t = t.sibling;
  }
  function nl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ta(4, t, t.return), nl(t);
          break;
        case 1:
          zn(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Bm(
            t,
            t.return,
            n
          ), nl(t);
          break;
        case 27:
          ei(t.stateNode);
        case 26:
        case 5:
          zn(t, t.return), nl(t);
          break;
        case 22:
          t.memoizedState === null && nl(t);
          break;
        case 30:
          nl(t);
          break;
        default:
          nl(t);
      }
      e = e.sibling;
    }
  }
  function Ra(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, o = e, u = t, p = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Ra(
            o,
            u,
            n
          ), Vr(4, u);
          break;
        case 1:
          if (Ra(
            o,
            u,
            n
          ), l = u, o = l.stateNode, typeof o.componentDidMount == "function")
            try {
              o.componentDidMount();
            } catch (L) {
              et(l, l.return, L);
            }
          if (l = u, o = l.updateQueue, o !== null) {
            var y = l.stateNode;
            try {
              var R = o.shared.hiddenCallbacks;
              if (R !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < R.length; o++)
                  bp(R[o], y);
            } catch (L) {
              et(l, l.return, L);
            }
          }
          n && p & 64 && Nm(u), Xr(u, u.return);
          break;
        case 27:
          Hm(u);
        case 26:
        case 5:
          Ra(
            o,
            u,
            n
          ), n && l === null && p & 4 && Um(u), Xr(u, u.return);
          break;
        case 12:
          Ra(
            o,
            u,
            n
          );
          break;
        case 13:
          Ra(
            o,
            u,
            n
          ), n && p & 4 && Ym(o, u);
          break;
        case 22:
          u.memoizedState === null && Ra(
            o,
            u,
            n
          ), Xr(u, u.return);
          break;
        case 30:
          break;
        default:
          Ra(
            o,
            u,
            n
          );
      }
      t = t.sibling;
    }
  }
  function lc(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && zr(n));
  }
  function rc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && zr(e));
  }
  function _n(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Xm(
          e,
          t,
          n,
          l
        ), t = t.sibling;
  }
  function Xm(e, t, n, l) {
    var o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        _n(
          e,
          t,
          n,
          l
        ), o & 2048 && Vr(9, t);
        break;
      case 1:
        _n(
          e,
          t,
          n,
          l
        );
        break;
      case 3:
        _n(
          e,
          t,
          n,
          l
        ), o & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && zr(e)));
        break;
      case 12:
        if (o & 2048) {
          _n(
            e,
            t,
            n,
            l
          ), e = t.stateNode;
          try {
            var u = t.memoizedProps, p = u.id, y = u.onPostCommit;
            typeof y == "function" && y(
              p,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (R) {
            et(t, t.return, R);
          }
        } else
          _n(
            e,
            t,
            n,
            l
          );
        break;
      case 13:
        _n(
          e,
          t,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, p = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? _n(
          e,
          t,
          n,
          l
        ) : Kr(e, t) : u._visibility & 2 ? _n(
          e,
          t,
          n,
          l
        ) : (u._visibility |= 2, ql(
          e,
          t,
          n,
          l,
          (t.subtreeFlags & 10256) !== 0
        )), o & 2048 && lc(p, t);
        break;
      case 24:
        _n(
          e,
          t,
          n,
          l
        ), o & 2048 && rc(t.alternate, t);
        break;
      default:
        _n(
          e,
          t,
          n,
          l
        );
    }
  }
  function ql(e, t, n, l, o) {
    for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var u = e, p = t, y = n, R = l, L = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          ql(
            u,
            p,
            y,
            R,
            o
          ), Vr(8, p);
          break;
        case 23:
          break;
        case 22:
          var P = p.stateNode;
          p.memoizedState !== null ? P._visibility & 2 ? ql(
            u,
            p,
            y,
            R,
            o
          ) : Kr(
            u,
            p
          ) : (P._visibility |= 2, ql(
            u,
            p,
            y,
            R,
            o
          )), o && L & 2048 && lc(
            p.alternate,
            p
          );
          break;
        case 24:
          ql(
            u,
            p,
            y,
            R,
            o
          ), o && L & 2048 && rc(p.alternate, p);
          break;
        default:
          ql(
            u,
            p,
            y,
            R,
            o
          );
      }
      t = t.sibling;
    }
  }
  function Kr(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, l = t, o = l.flags;
        switch (l.tag) {
          case 22:
            Kr(n, l), o & 2048 && lc(
              l.alternate,
              l
            );
            break;
          case 24:
            Kr(n, l), o & 2048 && rc(l.alternate, l);
            break;
          default:
            Kr(n, l);
        }
        t = t.sibling;
      }
  }
  var Qr = 8192;
  function Yl(e) {
    if (e.subtreeFlags & Qr)
      for (e = e.child; e !== null; )
        Km(e), e = e.sibling;
  }
  function Km(e) {
    switch (e.tag) {
      case 26:
        Yl(e), e.flags & Qr && e.memoizedState !== null && Tb(
          Rn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Yl(e);
        break;
      case 3:
      case 4:
        var t = Rn;
        Rn = Bo(e.stateNode.containerInfo), Yl(e), Rn = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Qr, Qr = 16777216, Yl(e), Qr = t) : Yl(e));
        break;
      default:
        Yl(e);
    }
  }
  function Qm(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Zr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          _t = l, Pm(
            l,
            e
          );
        }
      Qm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Zm(e), e = e.sibling;
  }
  function Zm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Zr(e), e.flags & 2048 && Ta(9, e, e.return);
        break;
      case 3:
        Zr(e);
        break;
      case 12:
        Zr(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Eo(e)) : Zr(e);
        break;
      default:
        Zr(e);
    }
  }
  function Eo(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          _t = l, Pm(
            l,
            e
          );
        }
      Qm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Ta(8, t, t.return), Eo(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Eo(t));
          break;
        default:
          Eo(t);
      }
      e = e.sibling;
    }
  }
  function Pm(e, t) {
    for (; _t !== null; ) {
      var n = _t;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Ta(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          zr(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, _t = l;
      else
        e: for (n = e; _t !== null; ) {
          l = _t;
          var o = l.sibling, u = l.return;
          if ($m(l), l === n) {
            _t = null;
            break e;
          }
          if (o !== null) {
            o.return = u, _t = o;
            break e;
          }
          _t = u;
        }
    }
  }
  var jv = {
    getCacheForType: function(e) {
      var t = jt(Mt), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    }
  }, $v = typeof WeakMap == "function" ? WeakMap : Map, Ge = 0, tt = null, Me = null, De = 0, Ve = 0, rn = null, Aa = !1, Gl = !1, ic = !1, la = 0, yt = 0, Ma = 0, al = 0, oc = 0, vn = 0, Vl = 0, Pr = null, Wt = null, sc = !1, uc = 0, To = 1 / 0, Co = null, Oa = null, Ut = 0, wa = null, Xl = null, Kl = 0, cc = 0, fc = null, Fm = null, Fr = 0, dc = null;
  function on() {
    if ((Ge & 2) !== 0 && De !== 0)
      return De & -De;
    if (O.T !== null) {
      var e = Nl;
      return e !== 0 ? e : bc();
    }
    return dd();
  }
  function Wm() {
    vn === 0 && (vn = (De & 536870912) === 0 || Ue ? pr() : 536870912);
    var e = yn.current;
    return e !== null && (e.flags |= 32), vn;
  }
  function sn(e, t, n) {
    (e === tt && (Ve === 2 || Ve === 9) || e.cancelPendingCommit !== null) && (Ql(e, 0), za(
      e,
      De,
      vn,
      !1
    )), mr(e, n), ((Ge & 2) === 0 || e !== tt) && (e === tt && ((Ge & 2) === 0 && (al |= n), yt === 4 && za(
      e,
      De,
      vn,
      !1
    )), Dn(e));
  }
  function Jm(e, t, n) {
    if ((Ge & 6) !== 0) throw Error(s(327));
    var l = !n && (t & 124) === 0 && (t & e.expiredLanes) === 0 || ut(e, t), o = l ? Gv(e, t) : hc(e, t, !0), u = l;
    do {
      if (o === 0) {
        Gl && !l && za(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, u && !qv(n)) {
          o = hc(e, t, !1), u = !1;
          continue;
        }
        if (o === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u)
            var p = 0;
          else
            p = e.pendingLanes & -536870913, p = p !== 0 ? p : p & 536870912 ? 536870912 : 0;
          if (p !== 0) {
            t = p;
            e: {
              var y = e;
              o = Pr;
              var R = y.current.memoizedState.isDehydrated;
              if (R && (Ql(y, p).flags |= 256), p = hc(
                y,
                p,
                !1
              ), p !== 2) {
                if (ic && !R) {
                  y.errorRecoveryDisabledLanes |= u, al |= u, o = 4;
                  break e;
                }
                u = Wt, Wt = o, u !== null && (Wt === null ? Wt = u : Wt.push.apply(
                  Wt,
                  u
                ));
              }
              o = p;
            }
            if (u = !1, o !== 2) continue;
          }
        }
        if (o === 1) {
          Ql(e, 0), za(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, u = o, u) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              za(
                l,
                t,
                vn,
                !Aa
              );
              break e;
            case 2:
              Wt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && (o = uc + 300 - Ye(), 10 < o)) {
            if (za(
              l,
              t,
              vn,
              !Aa
            ), Le(l, 0, !0) !== 0) break e;
            l.timeoutHandle = Mh(
              Im.bind(
                null,
                l,
                n,
                Wt,
                Co,
                sc,
                t,
                vn,
                al,
                Vl,
                Aa,
                u,
                2,
                -0,
                0
              ),
              o
            );
            break e;
          }
          Im(
            l,
            n,
            Wt,
            Co,
            sc,
            t,
            vn,
            al,
            Vl,
            Aa,
            u,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Dn(e);
  }
  function Im(e, t, n, l, o, u, p, y, R, L, P, J, j, $) {
    if (e.timeoutHandle = -1, J = t.subtreeFlags, (J & 8192 || (J & 16785408) === 16785408) && (ai = { stylesheets: null, count: 0, unsuspend: Eb }, Km(t), J = Cb(), J !== null)) {
      e.cancelPendingCommit = J(
        ih.bind(
          null,
          e,
          t,
          u,
          n,
          l,
          o,
          p,
          y,
          R,
          P,
          1,
          j,
          $
        )
      ), za(e, u, p, !L);
      return;
    }
    ih(
      e,
      t,
      u,
      n,
      l,
      o,
      p,
      y,
      R
    );
  }
  function qv(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var o = n[l], u = o.getSnapshot;
          o = o.value;
          try {
            if (!tn(u(), o)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function za(e, t, n, l) {
    t &= ~oc, t &= ~al, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var o = t; 0 < o; ) {
      var u = 31 - Be(o), p = 1 << u;
      l[u] = -1, o &= ~p;
    }
    n !== 0 && cd(e, n, t);
  }
  function Ro() {
    return (Ge & 6) === 0 ? (Wr(0), !1) : !0;
  }
  function pc() {
    if (Me !== null) {
      if (Ve === 0)
        var e = Me.return;
      else
        e = Me, Fn = Wa = null, zu(e), jl = null, qr = 0, e = Me;
      for (; e !== null; )
        Dm(e.alternate, e), e = e.return;
      Me = null;
    }
  }
  function Ql(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, rb(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), pc(), tt = e, Me = n = Qn(e.current, null), De = t, Ve = 0, rn = null, Aa = !1, Gl = ut(e, t), ic = !1, Vl = vn = oc = al = Ma = yt = 0, Wt = Pr = null, sc = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var o = 31 - Be(l), u = 1 << o;
        t |= e[o], l &= ~u;
      }
    return la = t, Ki(), n;
  }
  function eh(e, t) {
    Te = null, O.H = fo, t === Dr || t === to ? (t = yp(), Ve = 3) : t === mp ? (t = yp(), Ve = 4) : Ve = t === vm ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, rn = t, Me === null && (yt = 1, yo(
      e,
      pn(t, e.current)
    ));
  }
  function th() {
    var e = O.H;
    return O.H = fo, e === null ? fo : e;
  }
  function nh() {
    var e = O.A;
    return O.A = jv, e;
  }
  function mc() {
    yt = 4, Aa || (De & 4194048) !== De && yn.current !== null || (Gl = !0), (Ma & 134217727) === 0 && (al & 134217727) === 0 || tt === null || za(
      tt,
      De,
      vn,
      !1
    );
  }
  function hc(e, t, n) {
    var l = Ge;
    Ge |= 2;
    var o = th(), u = nh();
    (tt !== e || De !== t) && (Co = null, Ql(e, t)), t = !1;
    var p = yt;
    e: do
      try {
        if (Ve !== 0 && Me !== null) {
          var y = Me, R = rn;
          switch (Ve) {
            case 8:
              pc(), p = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              yn.current === null && (t = !0);
              var L = Ve;
              if (Ve = 0, rn = null, Zl(e, y, R, L), n && Gl) {
                p = 0;
                break e;
              }
              break;
            default:
              L = Ve, Ve = 0, rn = null, Zl(e, y, R, L);
          }
        }
        Yv(), p = yt;
        break;
      } catch (P) {
        eh(e, P);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Fn = Wa = null, Ge = l, O.H = o, O.A = u, Me === null && (tt = null, De = 0, Ki()), p;
  }
  function Yv() {
    for (; Me !== null; ) ah(Me);
  }
  function Gv(e, t) {
    var n = Ge;
    Ge |= 2;
    var l = th(), o = nh();
    tt !== e || De !== t ? (Co = null, To = Ye() + 500, Ql(e, t)) : Gl = ut(
      e,
      t
    );
    e: do
      try {
        if (Ve !== 0 && Me !== null) {
          t = Me;
          var u = rn;
          t: switch (Ve) {
            case 1:
              Ve = 0, rn = null, Zl(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (hp(u)) {
                Ve = 0, rn = null, lh(t);
                break;
              }
              t = function() {
                Ve !== 2 && Ve !== 9 || tt !== e || (Ve = 7), Dn(e);
              }, u.then(t, t);
              break e;
            case 3:
              Ve = 7;
              break e;
            case 4:
              Ve = 5;
              break e;
            case 7:
              hp(u) ? (Ve = 0, rn = null, lh(t)) : (Ve = 0, rn = null, Zl(e, t, u, 7));
              break;
            case 5:
              var p = null;
              switch (Me.tag) {
                case 26:
                  p = Me.memoizedState;
                case 5:
                case 27:
                  var y = Me;
                  if (!p || jh(p)) {
                    Ve = 0, rn = null;
                    var R = y.sibling;
                    if (R !== null) Me = R;
                    else {
                      var L = y.return;
                      L !== null ? (Me = L, Ao(L)) : Me = null;
                    }
                    break t;
                  }
              }
              Ve = 0, rn = null, Zl(e, t, u, 5);
              break;
            case 6:
              Ve = 0, rn = null, Zl(e, t, u, 6);
              break;
            case 8:
              pc(), yt = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        Vv();
        break;
      } catch (P) {
        eh(e, P);
      }
    while (!0);
    return Fn = Wa = null, O.H = l, O.A = o, Ge = n, Me !== null ? 0 : (tt = null, De = 0, Ki(), yt);
  }
  function Vv() {
    for (; Me !== null && !qe(); )
      ah(Me);
  }
  function ah(e) {
    var t = zm(e.alternate, e, la);
    e.memoizedProps = e.pendingProps, t === null ? Ao(e) : Me = t;
  }
  function lh(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Cm(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          De
        );
        break;
      case 11:
        t = Cm(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          De
        );
        break;
      case 5:
        zu(t);
      default:
        Dm(n, t), t = Me = rp(t, la), t = zm(n, t, la);
    }
    e.memoizedProps = e.pendingProps, t === null ? Ao(e) : Me = t;
  }
  function Zl(e, t, n, l) {
    Fn = Wa = null, zu(t), jl = null, qr = 0;
    var o = t.return;
    try {
      if (Nv(
        e,
        o,
        t,
        n,
        De
      )) {
        yt = 1, yo(
          e,
          pn(n, e.current)
        ), Me = null;
        return;
      }
    } catch (u) {
      if (o !== null) throw Me = o, u;
      yt = 1, yo(
        e,
        pn(n, e.current)
      ), Me = null;
      return;
    }
    t.flags & 32768 ? (Ue || l === 1 ? e = !0 : Gl || (De & 536870912) !== 0 ? e = !1 : (Aa = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = yn.current, l !== null && l.tag === 13 && (l.flags |= 16384))), rh(t, e)) : Ao(t);
  }
  function Ao(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        rh(
          t,
          Aa
        );
        return;
      }
      e = t.return;
      var n = Uv(
        t.alternate,
        t,
        la
      );
      if (n !== null) {
        Me = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        Me = t;
        return;
      }
      Me = t = e;
    } while (t !== null);
    yt === 0 && (yt = 5);
  }
  function rh(e, t) {
    do {
      var n = kv(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, Me = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        Me = e;
        return;
      }
      Me = e = n;
    } while (e !== null);
    yt = 6, Me = null;
  }
  function ih(e, t, n, l, o, u, p, y, R) {
    e.cancelPendingCommit = null;
    do
      Mo();
    while (Ut !== 0);
    if ((Ge & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (u = t.lanes | t.childLanes, u |= ru, Ey(
        e,
        n,
        u,
        p,
        y,
        R
      ), e === tt && (Me = tt = null, De = 0), Xl = t, wa = e, Kl = n, cc = u, fc = o, Fm = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Zv(Qe, function() {
        return fh(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = O.T, O.T = null, o = Q.p, Q.p = 2, p = Ge, Ge |= 4;
        try {
          Hv(e, t, n);
        } finally {
          Ge = p, Q.p = o, O.T = l;
        }
      }
      Ut = 1, oh(), sh(), uh();
    }
  }
  function oh() {
    if (Ut === 1) {
      Ut = 0;
      var e = wa, t = Xl, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = O.T, O.T = null;
        var l = Q.p;
        Q.p = 2;
        var o = Ge;
        Ge |= 4;
        try {
          Gm(t, e);
          var u = Mc, p = Pd(e.containerInfo), y = u.focusedElem, R = u.selectionRange;
          if (p !== y && y && y.ownerDocument && Zd(
            y.ownerDocument.documentElement,
            y
          )) {
            if (R !== null && eu(y)) {
              var L = R.start, P = R.end;
              if (P === void 0 && (P = L), "selectionStart" in y)
                y.selectionStart = L, y.selectionEnd = Math.min(
                  P,
                  y.value.length
                );
              else {
                var J = y.ownerDocument || document, j = J && J.defaultView || window;
                if (j.getSelection) {
                  var $ = j.getSelection(), ge = y.textContent.length, me = Math.min(R.start, ge), Je = R.end === void 0 ? me : Math.min(R.end, ge);
                  !$.extend && me > Je && (p = Je, Je = me, me = p);
                  var B = Qd(
                    y,
                    me
                  ), _ = Qd(
                    y,
                    Je
                  );
                  if (B && _ && ($.rangeCount !== 1 || $.anchorNode !== B.node || $.anchorOffset !== B.offset || $.focusNode !== _.node || $.focusOffset !== _.offset)) {
                    var H = J.createRange();
                    H.setStart(B.node, B.offset), $.removeAllRanges(), me > Je ? ($.addRange(H), $.extend(_.node, _.offset)) : (H.setEnd(_.node, _.offset), $.addRange(H));
                  }
                }
              }
            }
            for (J = [], $ = y; $ = $.parentNode; )
              $.nodeType === 1 && J.push({
                element: $,
                left: $.scrollLeft,
                top: $.scrollTop
              });
            for (typeof y.focus == "function" && y.focus(), y = 0; y < J.length; y++) {
              var F = J[y];
              F.element.scrollLeft = F.left, F.element.scrollTop = F.top;
            }
          }
          jo = !!Ac, Mc = Ac = null;
        } finally {
          Ge = o, Q.p = l, O.T = n;
        }
      }
      e.current = t, Ut = 2;
    }
  }
  function sh() {
    if (Ut === 2) {
      Ut = 0;
      var e = wa, t = Xl, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = O.T, O.T = null;
        var l = Q.p;
        Q.p = 2;
        var o = Ge;
        Ge |= 4;
        try {
          jm(e, t.alternate, t);
        } finally {
          Ge = o, Q.p = l, O.T = n;
        }
      }
      Ut = 3;
    }
  }
  function uh() {
    if (Ut === 4 || Ut === 3) {
      Ut = 0, Nt();
      var e = wa, t = Xl, n = Kl, l = Fm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ut = 5 : (Ut = 0, Xl = wa = null, ch(e, e.pendingLanes));
      var o = e.pendingLanes;
      if (o === 0 && (Oa = null), Ns(n), t = t.stateNode, xe && typeof xe.onCommitFiberRoot == "function")
        try {
          xe.onCommitFiberRoot(
            lt,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = O.T, o = Q.p, Q.p = 2, O.T = null;
        try {
          for (var u = e.onRecoverableError, p = 0; p < l.length; p++) {
            var y = l[p];
            u(y.value, {
              componentStack: y.stack
            });
          }
        } finally {
          O.T = t, Q.p = o;
        }
      }
      (Kl & 3) !== 0 && Mo(), Dn(e), o = e.pendingLanes, (n & 4194090) !== 0 && (o & 42) !== 0 ? e === dc ? Fr++ : (Fr = 0, dc = e) : Fr = 0, Wr(0);
    }
  }
  function ch(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, zr(t)));
  }
  function Mo(e) {
    return oh(), sh(), uh(), fh();
  }
  function fh() {
    if (Ut !== 5) return !1;
    var e = wa, t = cc;
    cc = 0;
    var n = Ns(Kl), l = O.T, o = Q.p;
    try {
      Q.p = 32 > n ? 32 : n, O.T = null, n = fc, fc = null;
      var u = wa, p = Kl;
      if (Ut = 0, Xl = wa = null, Kl = 0, (Ge & 6) !== 0) throw Error(s(331));
      var y = Ge;
      if (Ge |= 4, Zm(u.current), Xm(
        u,
        u.current,
        p,
        n
      ), Ge = y, Wr(0, !1), xe && typeof xe.onPostCommitFiberRoot == "function")
        try {
          xe.onPostCommitFiberRoot(lt, u);
        } catch {
        }
      return !0;
    } finally {
      Q.p = o, O.T = l, ch(e, t);
    }
  }
  function dh(e, t, n) {
    t = pn(n, t), t = Vu(e.stateNode, t, 2), e = ba(e, t, 2), e !== null && (mr(e, 2), Dn(e));
  }
  function et(e, t, n) {
    if (e.tag === 3)
      dh(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          dh(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Oa === null || !Oa.has(l))) {
            e = pn(n, e), n = gm(2), l = ba(t, n, 2), l !== null && (ym(
              n,
              l,
              t,
              e
            ), mr(l, 2), Dn(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function gc(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new $v();
      var o = /* @__PURE__ */ new Set();
      l.set(t, o);
    } else
      o = l.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), l.set(t, o));
    o.has(n) || (ic = !0, o.add(n), e = Xv.bind(null, e, t, n), t.then(e, e));
  }
  function Xv(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, tt === e && (De & n) === n && (yt === 4 || yt === 3 && (De & 62914560) === De && 300 > Ye() - uc ? (Ge & 2) === 0 && Ql(e, 0) : oc |= n, Vl === De && (Vl = 0)), Dn(e);
  }
  function ph(e, t) {
    t === 0 && (t = ud()), e = wl(e, t), e !== null && (mr(e, t), Dn(e));
  }
  function Kv(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), ph(e, n);
  }
  function Qv(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode, o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    l !== null && l.delete(t), ph(e, n);
  }
  function Zv(e, t) {
    return mt(e, t);
  }
  var Oo = null, Pl = null, yc = !1, wo = !1, vc = !1, ll = 0;
  function Dn(e) {
    e !== Pl && e.next === null && (Pl === null ? Oo = Pl = e : Pl = Pl.next = e), wo = !0, yc || (yc = !0, Fv());
  }
  function Wr(e, t) {
    if (!vc && wo) {
      vc = !0;
      do
        for (var n = !1, l = Oo; l !== null; ) {
          if (e !== 0) {
            var o = l.pendingLanes;
            if (o === 0) var u = 0;
            else {
              var p = l.suspendedLanes, y = l.pingedLanes;
              u = (1 << 31 - Be(42 | e) + 1) - 1, u &= o & ~(p & ~y), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, yh(l, u));
          } else
            u = De, u = Le(
              l,
              l === tt ? u : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (u & 3) === 0 || ut(l, u) || (n = !0, yh(l, u));
          l = l.next;
        }
      while (n);
      vc = !1;
    }
  }
  function Pv() {
    mh();
  }
  function mh() {
    wo = yc = !1;
    var e = 0;
    ll !== 0 && (lb() && (e = ll), ll = 0);
    for (var t = Ye(), n = null, l = Oo; l !== null; ) {
      var o = l.next, u = hh(l, t);
      u === 0 ? (l.next = null, n === null ? Oo = o : n.next = o, o === null && (Pl = n)) : (n = l, (e !== 0 || (u & 3) !== 0) && (wo = !0)), l = o;
    }
    Wr(e);
  }
  function hh(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, o = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var p = 31 - Be(u), y = 1 << p, R = o[p];
      R === -1 ? ((y & n) === 0 || (y & l) !== 0) && (o[p] = pa(y, t)) : R <= t && (e.expiredLanes |= y), u &= ~y;
    }
    if (t = tt, n = De, n = Le(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, n === 0 || e === t && (Ve === 2 || Ve === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Se(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || ut(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (l !== null && Se(l), Ns(n)) {
        case 2:
        case 8:
          n = st;
          break;
        case 32:
          n = Qe;
          break;
        case 268435456:
          n = en;
          break;
        default:
          n = Qe;
      }
      return l = gh.bind(null, e), n = mt(n, l), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return l !== null && l !== null && Se(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function gh(e, t) {
    if (Ut !== 0 && Ut !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Mo() && e.callbackNode !== n)
      return null;
    var l = De;
    return l = Le(
      e,
      e === tt ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (Jm(e, l, t), hh(e, Ye()), e.callbackNode != null && e.callbackNode === n ? gh.bind(null, e) : null);
  }
  function yh(e, t) {
    if (Mo()) return null;
    Jm(e, t, !0);
  }
  function Fv() {
    ib(function() {
      (Ge & 6) !== 0 ? mt(
        nt,
        Pv
      ) : mh();
    });
  }
  function bc() {
    return ll === 0 && (ll = pr()), ll;
  }
  function vh(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : ji("" + e);
  }
  function bh(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function Wv(e, t, n, l, o) {
    if (t === "submit" && n && n.stateNode === o) {
      var u = vh(
        (o[Qt] || null).action
      ), p = l.submitter;
      p && (t = (t = p[Qt] || null) ? vh(t.formAction) : p.getAttribute("formAction"), t !== null && (u = t, p = null));
      var y = new Gi(
        "action",
        "action",
        null,
        l,
        o
      );
      e.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (ll !== 0) {
                  var R = p ? bh(o, p) : new FormData(o);
                  ju(
                    n,
                    {
                      pending: !0,
                      data: R,
                      method: o.method,
                      action: u
                    },
                    null,
                    R
                  );
                }
              } else
                typeof u == "function" && (y.preventDefault(), R = p ? bh(o, p) : new FormData(o), ju(
                  n,
                  {
                    pending: !0,
                    data: R,
                    method: o.method,
                    action: u
                  },
                  u,
                  R
                ));
            },
            currentTarget: o
          }
        ]
      });
    }
  }
  for (var Sc = 0; Sc < lu.length; Sc++) {
    var xc = lu[Sc], Jv = xc.toLowerCase(), Iv = xc[0].toUpperCase() + xc.slice(1);
    Cn(
      Jv,
      "on" + Iv
    );
  }
  Cn(Jd, "onAnimationEnd"), Cn(Id, "onAnimationIteration"), Cn(ep, "onAnimationStart"), Cn("dblclick", "onDoubleClick"), Cn("focusin", "onFocus"), Cn("focusout", "onBlur"), Cn(gv, "onTransitionRun"), Cn(yv, "onTransitionStart"), Cn(vv, "onTransitionCancel"), Cn(tp, "onTransitionEnd"), bl("onMouseEnter", ["mouseout", "mouseover"]), bl("onMouseLeave", ["mouseout", "mouseover"]), bl("onPointerEnter", ["pointerout", "pointerover"]), bl("onPointerLeave", ["pointerout", "pointerover"]), Ya(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ya(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ya("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ya(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ya(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ya(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Jr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), eb = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jr)
  );
  function Sh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n], o = l.event;
      l = l.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var p = l.length - 1; 0 <= p; p--) {
            var y = l[p], R = y.instance, L = y.currentTarget;
            if (y = y.listener, R !== u && o.isPropagationStopped())
              break e;
            u = y, o.currentTarget = L;
            try {
              u(o);
            } catch (P) {
              go(P);
            }
            o.currentTarget = null, u = R;
          }
        else
          for (p = 0; p < l.length; p++) {
            if (y = l[p], R = y.instance, L = y.currentTarget, y = y.listener, R !== u && o.isPropagationStopped())
              break e;
            u = y, o.currentTarget = L;
            try {
              u(o);
            } catch (P) {
              go(P);
            }
            o.currentTarget = null, u = R;
          }
      }
    }
  }
  function Oe(e, t) {
    var n = t[Bs];
    n === void 0 && (n = t[Bs] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    n.has(l) || (xh(t, e, 2, !1), n.add(l));
  }
  function Ec(e, t, n) {
    var l = 0;
    t && (l |= 4), xh(
      n,
      e,
      l,
      t
    );
  }
  var zo = "_reactListening" + Math.random().toString(36).slice(2);
  function Tc(e) {
    if (!e[zo]) {
      e[zo] = !0, md.forEach(function(n) {
        n !== "selectionchange" && (eb.has(n) || Ec(n, !1, e), Ec(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[zo] || (t[zo] = !0, Ec("selectionchange", !1, t));
    }
  }
  function xh(e, t, n, l) {
    switch (Xh(t)) {
      case 2:
        var o = Mb;
        break;
      case 8:
        o = Ob;
        break;
      default:
        o = Hc;
    }
    n = o.bind(
      null,
      t,
      n,
      e
    ), o = void 0, !Xs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), l ? o !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
      passive: o
    }) : e.addEventListener(t, n, !1);
  }
  function Cc(e, t, n, l, o) {
    var u = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var p = l.tag;
        if (p === 3 || p === 4) {
          var y = l.stateNode.containerInfo;
          if (y === o) break;
          if (p === 4)
            for (p = l.return; p !== null; ) {
              var R = p.tag;
              if ((R === 3 || R === 4) && p.stateNode.containerInfo === o)
                return;
              p = p.return;
            }
          for (; y !== null; ) {
            if (p = gl(y), p === null) return;
            if (R = p.tag, R === 5 || R === 6 || R === 26 || R === 27) {
              l = u = p;
              continue e;
            }
            y = y.parentNode;
          }
        }
        l = l.return;
      }
    Od(function() {
      var L = u, P = Gs(n), J = [];
      e: {
        var j = np.get(e);
        if (j !== void 0) {
          var $ = Gi, ge = e;
          switch (e) {
            case "keypress":
              if (qi(n) === 0) break e;
            case "keydown":
            case "keyup":
              $ = Zy;
              break;
            case "focusin":
              ge = "focus", $ = Ps;
              break;
            case "focusout":
              ge = "blur", $ = Ps;
              break;
            case "beforeblur":
            case "afterblur":
              $ = Ps;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              $ = _d;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              $ = ky;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              $ = Wy;
              break;
            case Jd:
            case Id:
            case ep:
              $ = jy;
              break;
            case tp:
              $ = Iy;
              break;
            case "scroll":
            case "scrollend":
              $ = By;
              break;
            case "wheel":
              $ = tv;
              break;
            case "copy":
            case "cut":
            case "paste":
              $ = qy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              $ = Nd;
              break;
            case "toggle":
            case "beforetoggle":
              $ = av;
          }
          var me = (t & 4) !== 0, Je = !me && (e === "scroll" || e === "scrollend"), B = me ? j !== null ? j + "Capture" : null : j;
          me = [];
          for (var _ = L, H; _ !== null; ) {
            var F = _;
            if (H = F.stateNode, F = F.tag, F !== 5 && F !== 26 && F !== 27 || H === null || B === null || (F = yr(_, B), F != null && me.push(
              Ir(_, F, H)
            )), Je) break;
            _ = _.return;
          }
          0 < me.length && (j = new $(
            j,
            ge,
            null,
            n,
            P
          ), J.push({ event: j, listeners: me }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (j = e === "mouseover" || e === "pointerover", $ = e === "mouseout" || e === "pointerout", j && n !== Ys && (ge = n.relatedTarget || n.fromElement) && (gl(ge) || ge[hl]))
            break e;
          if (($ || j) && (j = P.window === P ? P : (j = P.ownerDocument) ? j.defaultView || j.parentWindow : window, $ ? (ge = n.relatedTarget || n.toElement, $ = L, ge = ge ? gl(ge) : null, ge !== null && (Je = f(ge), me = ge.tag, ge !== Je || me !== 5 && me !== 27 && me !== 6) && (ge = null)) : ($ = null, ge = L), $ !== ge)) {
            if (me = _d, F = "onMouseLeave", B = "onMouseEnter", _ = "mouse", (e === "pointerout" || e === "pointerover") && (me = Nd, F = "onPointerLeave", B = "onPointerEnter", _ = "pointer"), Je = $ == null ? j : gr($), H = ge == null ? j : gr(ge), j = new me(
              F,
              _ + "leave",
              $,
              n,
              P
            ), j.target = Je, j.relatedTarget = H, F = null, gl(P) === L && (me = new me(
              B,
              _ + "enter",
              ge,
              n,
              P
            ), me.target = H, me.relatedTarget = Je, F = me), Je = F, $ && ge)
              t: {
                for (me = $, B = ge, _ = 0, H = me; H; H = Fl(H))
                  _++;
                for (H = 0, F = B; F; F = Fl(F))
                  H++;
                for (; 0 < _ - H; )
                  me = Fl(me), _--;
                for (; 0 < H - _; )
                  B = Fl(B), H--;
                for (; _--; ) {
                  if (me === B || B !== null && me === B.alternate)
                    break t;
                  me = Fl(me), B = Fl(B);
                }
                me = null;
              }
            else me = null;
            $ !== null && Eh(
              J,
              j,
              $,
              me,
              !1
            ), ge !== null && Je !== null && Eh(
              J,
              Je,
              ge,
              me,
              !0
            );
          }
        }
        e: {
          if (j = L ? gr(L) : window, $ = j.nodeName && j.nodeName.toLowerCase(), $ === "select" || $ === "input" && j.type === "file")
            var se = qd;
          else if (jd(j))
            if (Yd)
              se = pv;
            else {
              se = fv;
              var Ae = cv;
            }
          else
            $ = j.nodeName, !$ || $.toLowerCase() !== "input" || j.type !== "checkbox" && j.type !== "radio" ? L && qs(L.elementType) && (se = qd) : se = dv;
          if (se && (se = se(e, L))) {
            $d(
              J,
              se,
              n,
              P
            );
            break e;
          }
          Ae && Ae(e, j, L), e === "focusout" && L && j.type === "number" && L.memoizedProps.value != null && $s(j, "number", j.value);
        }
        switch (Ae = L ? gr(L) : window, e) {
          case "focusin":
            (jd(Ae) || Ae.contentEditable === "true") && (Al = Ae, tu = L, Rr = null);
            break;
          case "focusout":
            Rr = tu = Al = null;
            break;
          case "mousedown":
            nu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            nu = !1, Fd(J, n, P);
            break;
          case "selectionchange":
            if (hv) break;
          case "keydown":
          case "keyup":
            Fd(J, n, P);
        }
        var de;
        if (Ws)
          e: {
            switch (e) {
              case "compositionstart":
                var he = "onCompositionStart";
                break e;
              case "compositionend":
                he = "onCompositionEnd";
                break e;
              case "compositionupdate":
                he = "onCompositionUpdate";
                break e;
            }
            he = void 0;
          }
        else
          Rl ? Hd(e, n) && (he = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (he = "onCompositionStart");
        he && (Bd && n.locale !== "ko" && (Rl || he !== "onCompositionStart" ? he === "onCompositionEnd" && Rl && (de = wd()) : (ha = P, Ks = "value" in ha ? ha.value : ha.textContent, Rl = !0)), Ae = _o(L, he), 0 < Ae.length && (he = new Dd(
          he,
          e,
          null,
          n,
          P
        ), J.push({ event: he, listeners: Ae }), de ? he.data = de : (de = Ld(n), de !== null && (he.data = de)))), (de = rv ? iv(e, n) : ov(e, n)) && (he = _o(L, "onBeforeInput"), 0 < he.length && (Ae = new Dd(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          P
        ), J.push({
          event: Ae,
          listeners: he
        }), Ae.data = de)), Wv(
          J,
          e,
          L,
          n,
          P
        );
      }
      Sh(J, t);
    });
  }
  function Ir(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function _o(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var o = e, u = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || u === null || (o = yr(e, n), o != null && l.unshift(
        Ir(e, o, u)
      ), o = yr(e, t), o != null && l.push(
        Ir(e, o, u)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function Fl(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Eh(e, t, n, l, o) {
    for (var u = t._reactName, p = []; n !== null && n !== l; ) {
      var y = n, R = y.alternate, L = y.stateNode;
      if (y = y.tag, R !== null && R === l) break;
      y !== 5 && y !== 26 && y !== 27 || L === null || (R = L, o ? (L = yr(n, u), L != null && p.unshift(
        Ir(n, L, R)
      )) : o || (L = yr(n, u), L != null && p.push(
        Ir(n, L, R)
      ))), n = n.return;
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var tb = /\r\n?/g, nb = /\u0000|\uFFFD/g;
  function Th(e) {
    return (typeof e == "string" ? e : "" + e).replace(tb, `
`).replace(nb, "");
  }
  function Ch(e, t) {
    return t = Th(t), Th(e) === t;
  }
  function Do() {
  }
  function We(e, t, n, l, o, u) {
    switch (n) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || El(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && El(e, "" + l);
        break;
      case "className":
        ki(e, "class", l);
        break;
      case "tabIndex":
        ki(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ki(e, n, l);
        break;
      case "style":
        Ad(e, l, u);
        break;
      case "data":
        if (t !== "object") {
          ki(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = ji("" + l), e.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (n === "formAction" ? (t !== "input" && We(e, t, "name", o.name, o, null), We(
            e,
            t,
            "formEncType",
            o.formEncType,
            o,
            null
          ), We(
            e,
            t,
            "formMethod",
            o.formMethod,
            o,
            null
          ), We(
            e,
            t,
            "formTarget",
            o.formTarget,
            o,
            null
          )) : (We(e, t, "encType", o.encType, o, null), We(e, t, "method", o.method, o, null), We(e, t, "target", o.target, o, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = ji("" + l), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = Do);
        break;
      case "onScroll":
        l != null && Oe("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Oe("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(s(61));
          if (n = l.__html, n != null) {
            if (o.children != null) throw Error(s(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
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
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = ji("" + l), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
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
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "" + l) : e.removeAttribute(n);
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
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(n) : e.setAttribute(n, l);
        break;
      case "popover":
        Oe("beforetoggle", e), Oe("toggle", e), Ui(e, "popover", l);
        break;
      case "xlinkActuate":
        Xn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        Xn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        Xn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        Xn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        Xn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        Xn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        Xn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        Xn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        Xn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Ui(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Dy.get(n) || n, Ui(e, n, l));
    }
  }
  function Rc(e, t, n, l, o, u) {
    switch (n) {
      case "style":
        Ad(e, l, u);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(s(61));
          if (n = l.__html, n != null) {
            if (o.children != null) throw Error(s(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string" ? El(e, l) : (typeof l == "number" || typeof l == "bigint") && El(e, "" + l);
        break;
      case "onScroll":
        l != null && Oe("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Oe("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = Do);
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
        if (!hd.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (o = n.endsWith("Capture"), t = n.slice(2, o ? n.length - 7 : void 0), u = e[Qt] || null, u = u != null ? u[n] : null, typeof u == "function" && e.removeEventListener(t, u, o), typeof l == "function")) {
              typeof u != "function" && u !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, l, o);
              break e;
            }
            n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : Ui(e, n, l);
          }
    }
  }
  function kt(e, t, n) {
    switch (t) {
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
        Oe("error", e), Oe("load", e);
        var l = !1, o = !1, u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var p = n[u];
            if (p != null)
              switch (u) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  o = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, t));
                default:
                  We(e, t, u, p, n, null);
              }
          }
        o && We(e, t, "srcSet", n.srcSet, n, null), l && We(e, t, "src", n.src, n, null);
        return;
      case "input":
        Oe("invalid", e);
        var y = u = p = o = null, R = null, L = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var P = n[l];
            if (P != null)
              switch (l) {
                case "name":
                  o = P;
                  break;
                case "type":
                  p = P;
                  break;
                case "checked":
                  R = P;
                  break;
                case "defaultChecked":
                  L = P;
                  break;
                case "value":
                  u = P;
                  break;
                case "defaultValue":
                  y = P;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (P != null)
                    throw Error(s(137, t));
                  break;
                default:
                  We(e, t, l, P, n, null);
              }
          }
        Ed(
          e,
          u,
          y,
          R,
          L,
          p,
          o,
          !1
        ), Hi(e);
        return;
      case "select":
        Oe("invalid", e), l = p = u = null;
        for (o in n)
          if (n.hasOwnProperty(o) && (y = n[o], y != null))
            switch (o) {
              case "value":
                u = y;
                break;
              case "defaultValue":
                p = y;
                break;
              case "multiple":
                l = y;
              default:
                We(e, t, o, y, n, null);
            }
        t = u, n = p, e.multiple = !!l, t != null ? xl(e, !!l, t, !1) : n != null && xl(e, !!l, n, !0);
        return;
      case "textarea":
        Oe("invalid", e), u = o = l = null;
        for (p in n)
          if (n.hasOwnProperty(p) && (y = n[p], y != null))
            switch (p) {
              case "value":
                l = y;
                break;
              case "defaultValue":
                o = y;
                break;
              case "children":
                u = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(s(91));
                break;
              default:
                We(e, t, p, y, n, null);
            }
        Cd(e, l, o, u), Hi(e);
        return;
      case "option":
        for (R in n)
          if (n.hasOwnProperty(R) && (l = n[R], l != null))
            switch (R) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                We(e, t, R, l, n, null);
            }
        return;
      case "dialog":
        Oe("beforetoggle", e), Oe("toggle", e), Oe("cancel", e), Oe("close", e);
        break;
      case "iframe":
      case "object":
        Oe("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Jr.length; l++)
          Oe(Jr[l], e);
        break;
      case "image":
        Oe("error", e), Oe("load", e);
        break;
      case "details":
        Oe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Oe("error", e), Oe("load", e);
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
        for (L in n)
          if (n.hasOwnProperty(L) && (l = n[L], l != null))
            switch (L) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                We(e, t, L, l, n, null);
            }
        return;
      default:
        if (qs(t)) {
          for (P in n)
            n.hasOwnProperty(P) && (l = n[P], l !== void 0 && Rc(
              e,
              t,
              P,
              l,
              n,
              void 0
            ));
          return;
        }
    }
    for (y in n)
      n.hasOwnProperty(y) && (l = n[y], l != null && We(e, t, y, l, n, null));
  }
  function ab(e, t, n, l) {
    switch (t) {
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
        var o = null, u = null, p = null, y = null, R = null, L = null, P = null;
        for ($ in n) {
          var J = n[$];
          if (n.hasOwnProperty($) && J != null)
            switch ($) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                R = J;
              default:
                l.hasOwnProperty($) || We(e, t, $, null, l, J);
            }
        }
        for (var j in l) {
          var $ = l[j];
          if (J = n[j], l.hasOwnProperty(j) && ($ != null || J != null))
            switch (j) {
              case "type":
                u = $;
                break;
              case "name":
                o = $;
                break;
              case "checked":
                L = $;
                break;
              case "defaultChecked":
                P = $;
                break;
              case "value":
                p = $;
                break;
              case "defaultValue":
                y = $;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if ($ != null)
                  throw Error(s(137, t));
                break;
              default:
                $ !== J && We(
                  e,
                  t,
                  j,
                  $,
                  l,
                  J
                );
            }
        }
        js(
          e,
          p,
          y,
          R,
          L,
          P,
          u,
          o
        );
        return;
      case "select":
        $ = p = y = j = null;
        for (u in n)
          if (R = n[u], n.hasOwnProperty(u) && R != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                $ = R;
              default:
                l.hasOwnProperty(u) || We(
                  e,
                  t,
                  u,
                  null,
                  l,
                  R
                );
            }
        for (o in l)
          if (u = l[o], R = n[o], l.hasOwnProperty(o) && (u != null || R != null))
            switch (o) {
              case "value":
                j = u;
                break;
              case "defaultValue":
                y = u;
                break;
              case "multiple":
                p = u;
              default:
                u !== R && We(
                  e,
                  t,
                  o,
                  u,
                  l,
                  R
                );
            }
        t = y, n = p, l = $, j != null ? xl(e, !!n, j, !1) : !!l != !!n && (t != null ? xl(e, !!n, t, !0) : xl(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        $ = j = null;
        for (y in n)
          if (o = n[y], n.hasOwnProperty(y) && o != null && !l.hasOwnProperty(y))
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                We(e, t, y, null, l, o);
            }
        for (p in l)
          if (o = l[p], u = n[p], l.hasOwnProperty(p) && (o != null || u != null))
            switch (p) {
              case "value":
                j = o;
                break;
              case "defaultValue":
                $ = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(s(91));
                break;
              default:
                o !== u && We(e, t, p, o, l, u);
            }
        Td(e, j, $);
        return;
      case "option":
        for (var ge in n)
          if (j = n[ge], n.hasOwnProperty(ge) && j != null && !l.hasOwnProperty(ge))
            switch (ge) {
              case "selected":
                e.selected = !1;
                break;
              default:
                We(
                  e,
                  t,
                  ge,
                  null,
                  l,
                  j
                );
            }
        for (R in l)
          if (j = l[R], $ = n[R], l.hasOwnProperty(R) && j !== $ && (j != null || $ != null))
            switch (R) {
              case "selected":
                e.selected = j && typeof j != "function" && typeof j != "symbol";
                break;
              default:
                We(
                  e,
                  t,
                  R,
                  j,
                  l,
                  $
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
        for (var me in n)
          j = n[me], n.hasOwnProperty(me) && j != null && !l.hasOwnProperty(me) && We(e, t, me, null, l, j);
        for (L in l)
          if (j = l[L], $ = n[L], l.hasOwnProperty(L) && j !== $ && (j != null || $ != null))
            switch (L) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null)
                  throw Error(s(137, t));
                break;
              default:
                We(
                  e,
                  t,
                  L,
                  j,
                  l,
                  $
                );
            }
        return;
      default:
        if (qs(t)) {
          for (var Je in n)
            j = n[Je], n.hasOwnProperty(Je) && j !== void 0 && !l.hasOwnProperty(Je) && Rc(
              e,
              t,
              Je,
              void 0,
              l,
              j
            );
          for (P in l)
            j = l[P], $ = n[P], !l.hasOwnProperty(P) || j === $ || j === void 0 && $ === void 0 || Rc(
              e,
              t,
              P,
              j,
              l,
              $
            );
          return;
        }
    }
    for (var B in n)
      j = n[B], n.hasOwnProperty(B) && j != null && !l.hasOwnProperty(B) && We(e, t, B, null, l, j);
    for (J in l)
      j = l[J], $ = n[J], !l.hasOwnProperty(J) || j === $ || j == null && $ == null || We(e, t, J, j, l, $);
  }
  var Ac = null, Mc = null;
  function No(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Rh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ah(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Oc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var wc = null;
  function lb() {
    var e = window.event;
    return e && e.type === "popstate" ? e === wc ? !1 : (wc = e, !0) : (wc = null, !1);
  }
  var Mh = typeof setTimeout == "function" ? setTimeout : void 0, rb = typeof clearTimeout == "function" ? clearTimeout : void 0, Oh = typeof Promise == "function" ? Promise : void 0, ib = typeof queueMicrotask == "function" ? queueMicrotask : typeof Oh < "u" ? function(e) {
    return Oh.resolve(null).then(e).catch(ob);
  } : Mh;
  function ob(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function _a(e) {
    return e === "head";
  }
  function wh(e, t) {
    var n = t, l = 0, o = 0;
    do {
      var u = n.nextSibling;
      if (e.removeChild(n), u && u.nodeType === 8)
        if (n = u.data, n === "/$") {
          if (0 < l && 8 > l) {
            n = l;
            var p = e.ownerDocument;
            if (n & 1 && ei(p.documentElement), n & 2 && ei(p.body), n & 4)
              for (n = p.head, ei(n), p = n.firstChild; p; ) {
                var y = p.nextSibling, R = p.nodeName;
                p[hr] || R === "SCRIPT" || R === "STYLE" || R === "LINK" && p.rel.toLowerCase() === "stylesheet" || n.removeChild(p), p = y;
              }
          }
          if (o === 0) {
            e.removeChild(u), si(t);
            return;
          }
          o--;
        } else
          n === "$" || n === "$?" || n === "$!" ? o++ : l = n.charCodeAt(0) - 48;
      else l = 0;
      n = u;
    } while (n);
    si(t);
  }
  function zc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          zc(n), Us(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function sb(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var o = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[hr])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (u !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (u = e.getAttribute("src"), (u !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && e.getAttribute("name") === u)
          return e;
      } else return e;
      if (e = An(e.nextSibling), e === null) break;
    }
    return null;
  }
  function ub(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = An(e.nextSibling), e === null)) return null;
    return e;
  }
  function _c(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function cb(e, t) {
    var n = e.ownerDocument;
    if (e.data !== "$?" || n.readyState === "complete")
      t();
    else {
      var l = function() {
        t(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function An(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var Dc = null;
  function zh(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function _h(e, t, n) {
    switch (t = No(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(s(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(s(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function ei(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Us(e);
  }
  var bn = /* @__PURE__ */ new Map(), Dh = /* @__PURE__ */ new Set();
  function Bo(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var ra = Q.d;
  Q.d = {
    f: fb,
    r: db,
    D: pb,
    C: mb,
    L: hb,
    m: gb,
    X: vb,
    S: yb,
    M: bb
  };
  function fb() {
    var e = ra.f(), t = Ro();
    return e || t;
  }
  function db(e) {
    var t = yl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Jp(t) : ra.r(e);
  }
  var Wl = typeof document > "u" ? null : document;
  function Nh(e, t, n) {
    var l = Wl;
    if (l && typeof t == "string" && t) {
      var o = dn(t);
      o = 'link[rel="' + e + '"][href="' + o + '"]', typeof n == "string" && (o += '[crossorigin="' + n + '"]'), Dh.has(o) || (Dh.add(o), e = { rel: e, crossOrigin: n, href: t }, l.querySelector(o) === null && (t = l.createElement("link"), kt(t, "link", e), wt(t), l.head.appendChild(t)));
    }
  }
  function pb(e) {
    ra.D(e), Nh("dns-prefetch", e, null);
  }
  function mb(e, t) {
    ra.C(e, t), Nh("preconnect", e, t);
  }
  function hb(e, t, n) {
    ra.L(e, t, n);
    var l = Wl;
    if (l && e && t) {
      var o = 'link[rel="preload"][as="' + dn(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (o += '[imagesrcset="' + dn(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (o += '[imagesizes="' + dn(
        n.imageSizes
      ) + '"]')) : o += '[href="' + dn(e) + '"]';
      var u = o;
      switch (t) {
        case "style":
          u = Jl(e);
          break;
        case "script":
          u = Il(e);
      }
      bn.has(u) || (e = b(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), bn.set(u, e), l.querySelector(o) !== null || t === "style" && l.querySelector(ti(u)) || t === "script" && l.querySelector(ni(u)) || (t = l.createElement("link"), kt(t, "link", e), wt(t), l.head.appendChild(t)));
    }
  }
  function gb(e, t) {
    ra.m(e, t);
    var n = Wl;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + dn(l) + '"][href="' + dn(e) + '"]', u = o;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Il(e);
      }
      if (!bn.has(u) && (e = b({ rel: "modulepreload", href: e }, t), bn.set(u, e), n.querySelector(o) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(ni(u)))
              return;
        }
        l = n.createElement("link"), kt(l, "link", e), wt(l), n.head.appendChild(l);
      }
    }
  }
  function yb(e, t, n) {
    ra.S(e, t, n);
    var l = Wl;
    if (l && e) {
      var o = vl(l).hoistableStyles, u = Jl(e);
      t = t || "default";
      var p = o.get(u);
      if (!p) {
        var y = { loading: 0, preload: null };
        if (p = l.querySelector(
          ti(u)
        ))
          y.loading = 5;
        else {
          e = b(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = bn.get(u)) && Nc(e, n);
          var R = p = l.createElement("link");
          wt(R), kt(R, "link", e), R._p = new Promise(function(L, P) {
            R.onload = L, R.onerror = P;
          }), R.addEventListener("load", function() {
            y.loading |= 1;
          }), R.addEventListener("error", function() {
            y.loading |= 2;
          }), y.loading |= 4, Uo(p, t, l);
        }
        p = {
          type: "stylesheet",
          instance: p,
          count: 1,
          state: y
        }, o.set(u, p);
      }
    }
  }
  function vb(e, t) {
    ra.X(e, t);
    var n = Wl;
    if (n && e) {
      var l = vl(n).hoistableScripts, o = Il(e), u = l.get(o);
      u || (u = n.querySelector(ni(o)), u || (e = b({ src: e, async: !0 }, t), (t = bn.get(o)) && Bc(e, t), u = n.createElement("script"), wt(u), kt(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(o, u));
    }
  }
  function bb(e, t) {
    ra.M(e, t);
    var n = Wl;
    if (n && e) {
      var l = vl(n).hoistableScripts, o = Il(e), u = l.get(o);
      u || (u = n.querySelector(ni(o)), u || (e = b({ src: e, async: !0, type: "module" }, t), (t = bn.get(o)) && Bc(e, t), u = n.createElement("script"), wt(u), kt(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(o, u));
    }
  }
  function Bh(e, t, n, l) {
    var o = (o = ue.current) ? Bo(o) : null;
    if (!o) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Jl(n.href), n = vl(
          o
        ).hoistableStyles, l = n.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Jl(n.href);
          var u = vl(
            o
          ).hoistableStyles, p = u.get(e);
          if (p || (o = o.ownerDocument || o, p = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, p), (u = o.querySelector(
            ti(e)
          )) && !u._p && (p.instance = u, p.state.loading = 5), bn.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, bn.set(e, n), u || Sb(
            o,
            e,
            n,
            p.state
          ))), t && l === null)
            throw Error(s(528, ""));
          return p;
        }
        if (t && l !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Il(n), n = vl(
          o
        ).hoistableScripts, l = n.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, e));
    }
  }
  function Jl(e) {
    return 'href="' + dn(e) + '"';
  }
  function ti(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Uh(e) {
    return b({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Sb(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), kt(t, "link", n), wt(t), e.head.appendChild(t));
  }
  function Il(e) {
    return '[src="' + dn(e) + '"]';
  }
  function ni(e) {
    return "script[async]" + e;
  }
  function kh(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + dn(n.href) + '"]'
          );
          if (l)
            return t.instance = l, wt(l), l;
          var o = b({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), wt(l), kt(l, "style", o), Uo(l, n.precedence, e), t.instance = l;
        case "stylesheet":
          o = Jl(n.href);
          var u = e.querySelector(
            ti(o)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, wt(u), u;
          l = Uh(n), (o = bn.get(o)) && Nc(l, o), u = (e.ownerDocument || e).createElement("link"), wt(u);
          var p = u;
          return p._p = new Promise(function(y, R) {
            p.onload = y, p.onerror = R;
          }), kt(u, "link", l), t.state.loading |= 4, Uo(u, n.precedence, e), t.instance = u;
        case "script":
          return u = Il(n.src), (o = e.querySelector(
            ni(u)
          )) ? (t.instance = o, wt(o), o) : (l = n, (o = bn.get(u)) && (l = b({}, n), Bc(l, o)), e = e.ownerDocument || e, o = e.createElement("script"), wt(o), kt(o, "link", l), e.head.appendChild(o), t.instance = o);
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Uo(l, n.precedence, e));
    return t.instance;
  }
  function Uo(e, t, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), o = l.length ? l[l.length - 1] : null, u = o, p = 0; p < l.length; p++) {
      var y = l[p];
      if (y.dataset.precedence === t) u = y;
      else if (u !== o) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Nc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Bc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var ko = null;
  function Hh(e, t, n) {
    if (ko === null) {
      var l = /* @__PURE__ */ new Map(), o = ko = /* @__PURE__ */ new Map();
      o.set(n, l);
    } else
      o = ko, l = o.get(n), l || (l = /* @__PURE__ */ new Map(), o.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), o = 0; o < n.length; o++) {
      var u = n[o];
      if (!(u[hr] || u[Lt] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var p = u.getAttribute(t) || "";
        p = e + p;
        var y = l.get(p);
        y ? y.push(u) : l.set(p, [u]);
      }
    }
    return l;
  }
  function Lh(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function xb(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function jh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var ai = null;
  function Eb() {
  }
  function Tb(e, t, n) {
    if (ai === null) throw Error(s(475));
    var l = ai;
    if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var o = Jl(n.href), u = e.querySelector(
          ti(o)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, l = Ho.bind(l), e.then(l, l)), t.state.loading |= 4, t.instance = u, wt(u);
          return;
        }
        u = e.ownerDocument || e, n = Uh(n), (o = bn.get(o)) && Nc(n, o), u = u.createElement("link"), wt(u);
        var p = u;
        p._p = new Promise(function(y, R) {
          p.onload = y, p.onerror = R;
        }), kt(u, "link", n), t.instance = u;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (l.count++, t = Ho.bind(l), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function Cb() {
    if (ai === null) throw Error(s(475));
    var e = ai;
    return e.stylesheets && e.count === 0 && Uc(e, e.stylesheets), 0 < e.count ? function(t) {
      var n = setTimeout(function() {
        if (e.stylesheets && Uc(e, e.stylesheets), e.unsuspend) {
          var l = e.unsuspend;
          e.unsuspend = null, l();
        }
      }, 6e4);
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(n);
      };
    } : null;
  }
  function Ho() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Uc(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Lo = null;
  function Uc(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Lo = /* @__PURE__ */ new Map(), t.forEach(Rb, e), Lo = null, Ho.call(e));
  }
  function Rb(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Lo.get(e);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Lo.set(e, n);
        for (var o = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < o.length; u++) {
          var p = o[u];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") && (n.set(p.dataset.precedence, p), l = p);
        }
        l && n.set(null, l);
      }
      o = t.instance, p = o.getAttribute("data-precedence"), u = n.get(p) || l, u === l && n.set(null, o), n.set(p, o), this.count++, l = Ho.bind(this), o.addEventListener("load", l), o.addEventListener("error", l), u ? u.parentNode.insertBefore(o, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= 4;
    }
  }
  var li = {
    $$typeof: N,
    Provider: null,
    Consumer: null,
    _currentValue: ie,
    _currentValue2: ie,
    _threadCount: 0
  };
  function Ab(e, t, n, l, o, u, p, y) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = _s(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _s(0), this.hiddenUpdates = _s(null), this.identifierPrefix = l, this.onUncaughtError = o, this.onCaughtError = u, this.onRecoverableError = p, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function $h(e, t, n, l, o, u, p, y, R, L, P, J) {
    return e = new Ab(
      e,
      t,
      n,
      p,
      y,
      R,
      L,
      J
    ), t = 1, u === !0 && (t |= 24), u = nn(3, null, null, t), e.current = u, u.stateNode = e, t = gu(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: t
    }, Su(u), e;
  }
  function qh(e) {
    return e ? (e = zl, e) : zl;
  }
  function Yh(e, t, n, l, o, u) {
    o = qh(o), l.context === null ? l.context = o : l.pendingContext = o, l = va(t), l.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (l.callback = u), n = ba(e, l, t), n !== null && (sn(n, e, t), Br(n, e, t));
  }
  function Gh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function kc(e, t) {
    Gh(e, t), (e = e.alternate) && Gh(e, t);
  }
  function Vh(e) {
    if (e.tag === 13) {
      var t = wl(e, 67108864);
      t !== null && sn(t, e, 67108864), kc(e, 67108864);
    }
  }
  var jo = !0;
  function Mb(e, t, n, l) {
    var o = O.T;
    O.T = null;
    var u = Q.p;
    try {
      Q.p = 2, Hc(e, t, n, l);
    } finally {
      Q.p = u, O.T = o;
    }
  }
  function Ob(e, t, n, l) {
    var o = O.T;
    O.T = null;
    var u = Q.p;
    try {
      Q.p = 8, Hc(e, t, n, l);
    } finally {
      Q.p = u, O.T = o;
    }
  }
  function Hc(e, t, n, l) {
    if (jo) {
      var o = Lc(l);
      if (o === null)
        Cc(
          e,
          t,
          l,
          $o,
          n
        ), Kh(e, l);
      else if (zb(
        o,
        e,
        t,
        n,
        l
      ))
        l.stopPropagation();
      else if (Kh(e, l), t & 4 && -1 < wb.indexOf(e)) {
        for (; o !== null; ) {
          var u = yl(o);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var p = pe(u.pendingLanes);
                  if (p !== 0) {
                    var y = u;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; p; ) {
                      var R = 1 << 31 - Be(p);
                      y.entanglements[1] |= R, p &= ~R;
                    }
                    Dn(u), (Ge & 6) === 0 && (To = Ye() + 500, Wr(0));
                  }
                }
                break;
              case 13:
                y = wl(u, 2), y !== null && sn(y, u, 2), Ro(), kc(u, 2);
            }
          if (u = Lc(l), u === null && Cc(
            e,
            t,
            l,
            $o,
            n
          ), u === o) break;
          o = u;
        }
        o !== null && l.stopPropagation();
      } else
        Cc(
          e,
          t,
          l,
          null,
          n
        );
    }
  }
  function Lc(e) {
    return e = Gs(e), jc(e);
  }
  var $o = null;
  function jc(e) {
    if ($o = null, e = gl(e), e !== null) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = d(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return $o = e, null;
  }
  function Xh(e) {
    switch (e) {
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
        switch (at()) {
          case nt:
            return 2;
          case st:
            return 8;
          case Qe:
          case fe:
            return 32;
          case en:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var $c = !1, Da = null, Na = null, Ba = null, ri = /* @__PURE__ */ new Map(), ii = /* @__PURE__ */ new Map(), Ua = [], wb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Kh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Da = null;
        break;
      case "dragenter":
      case "dragleave":
        Na = null;
        break;
      case "mouseover":
      case "mouseout":
        Ba = null;
        break;
      case "pointerover":
      case "pointerout":
        ri.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ii.delete(t.pointerId);
    }
  }
  function oi(e, t, n, l, o, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: u,
      targetContainers: [o]
    }, t !== null && (t = yl(t), t !== null && Vh(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function zb(e, t, n, l, o) {
    switch (t) {
      case "focusin":
        return Da = oi(
          Da,
          e,
          t,
          n,
          l,
          o
        ), !0;
      case "dragenter":
        return Na = oi(
          Na,
          e,
          t,
          n,
          l,
          o
        ), !0;
      case "mouseover":
        return Ba = oi(
          Ba,
          e,
          t,
          n,
          l,
          o
        ), !0;
      case "pointerover":
        var u = o.pointerId;
        return ri.set(
          u,
          oi(
            ri.get(u) || null,
            e,
            t,
            n,
            l,
            o
          )
        ), !0;
      case "gotpointercapture":
        return u = o.pointerId, ii.set(
          u,
          oi(
            ii.get(u) || null,
            e,
            t,
            n,
            l,
            o
          )
        ), !0;
    }
    return !1;
  }
  function Qh(e) {
    var t = gl(e.target);
    if (t !== null) {
      var n = f(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = d(n), t !== null) {
            e.blockedOn = t, Ty(e.priority, function() {
              if (n.tag === 13) {
                var l = on();
                l = Ds(l);
                var o = wl(n, l);
                o !== null && sn(o, n, l), kc(n, l);
              }
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function qo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Lc(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        Ys = l, n.target.dispatchEvent(l), Ys = null;
      } else
        return t = yl(n), t !== null && Vh(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Zh(e, t, n) {
    qo(e) && n.delete(t);
  }
  function _b() {
    $c = !1, Da !== null && qo(Da) && (Da = null), Na !== null && qo(Na) && (Na = null), Ba !== null && qo(Ba) && (Ba = null), ri.forEach(Zh), ii.forEach(Zh);
  }
  function Yo(e, t) {
    e.blockedOn === t && (e.blockedOn = null, $c || ($c = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      _b
    )));
  }
  var Go = null;
  function Ph(e) {
    Go !== e && (Go = e, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        Go === e && (Go = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], l = e[t + 1], o = e[t + 2];
          if (typeof l != "function") {
            if (jc(l || n) === null)
              continue;
            break;
          }
          var u = yl(n);
          u !== null && (e.splice(t, 3), t -= 3, ju(
            u,
            {
              pending: !0,
              data: o,
              method: n.method,
              action: l
            },
            l,
            o
          ));
        }
      }
    ));
  }
  function si(e) {
    function t(R) {
      return Yo(R, e);
    }
    Da !== null && Yo(Da, e), Na !== null && Yo(Na, e), Ba !== null && Yo(Ba, e), ri.forEach(t), ii.forEach(t);
    for (var n = 0; n < Ua.length; n++) {
      var l = Ua[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Ua.length && (n = Ua[0], n.blockedOn === null); )
      Qh(n), n.blockedOn === null && Ua.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var o = n[l], u = n[l + 1], p = o[Qt] || null;
        if (typeof u == "function")
          p || Ph(n);
        else if (p) {
          var y = null;
          if (u && u.hasAttribute("formAction")) {
            if (o = u, p = u[Qt] || null)
              y = p.formAction;
            else if (jc(o) !== null) continue;
          } else y = p.action;
          typeof y == "function" ? n[l + 1] = y : (n.splice(l, 3), l -= 3), Ph(n);
        }
      }
  }
  function qc(e) {
    this._internalRoot = e;
  }
  Vo.prototype.render = qc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    var n = t.current, l = on();
    Yh(n, l, e, t, null, null);
  }, Vo.prototype.unmount = qc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Yh(e.current, 2, null, e, null, null), Ro(), t[hl] = null;
    }
  };
  function Vo(e) {
    this._internalRoot = e;
  }
  Vo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = dd();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ua.length && t !== 0 && t < Ua[n].priority; n++) ;
      Ua.splice(n, 0, e), n === 0 && Qh(e);
    }
  };
  var Fh = r.version;
  if (Fh !== "19.1.1")
    throw Error(
      s(
        527,
        Fh,
        "19.1.1"
      )
    );
  Q.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = g(t), e = e !== null ? h(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Db = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xo.isDisabled && Xo.supportsFiber)
      try {
        lt = Xo.inject(
          Db
        ), xe = Xo;
      } catch {
      }
  }
  return fi.createRoot = function(e, t) {
    if (!c(e)) throw Error(s(299));
    var n = !1, l = "", o = dm, u = pm, p = mm, y = null;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (p = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (y = t.unstable_transitionCallbacks)), t = $h(
      e,
      1,
      !1,
      null,
      null,
      n,
      l,
      o,
      u,
      p,
      y,
      null
    ), e[hl] = t.current, Tc(e), new qc(t);
  }, fi.hydrateRoot = function(e, t, n) {
    if (!c(e)) throw Error(s(299));
    var l = !1, o = "", u = dm, p = pm, y = mm, R = null, L = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (p = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (R = n.unstable_transitionCallbacks), n.formState !== void 0 && (L = n.formState)), t = $h(
      e,
      1,
      !0,
      t,
      n ?? null,
      l,
      o,
      u,
      p,
      y,
      R,
      L
    ), t.context = qh(null), n = t.current, l = on(), l = Ds(l), o = va(l), o.callback = null, ba(n, o, l), n = l, t.current.lanes = n, mr(t, n), Dn(t), e[hl] = t.current, Tc(e), new Vo(t);
  }, fi.version = "19.1.1", fi;
}
var g0;
function w1() {
  if (g0) return Qc.exports;
  g0 = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return a(), Qc.exports = O1(), Qc.exports;
}
var z1 = w1();
const Ri = {
  black: "#000",
  white: "#fff"
}, ol = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828",
  A400: "#ff1744"
}, er = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, tr = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, nr = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, ar = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, _1 = {
  A400: "#ffc400"
}, di = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, D1 = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
function sa(a, ...r) {
  const i = new URL(`https://mui.com/production-error/?code=${a}`);
  return r.forEach((s) => i.searchParams.append("args[]", s)), `Minified MUI error #${a}; visit ${i} for the full message.`;
}
const qn = "$$material";
var y0 = function(r, i) {
  var s = arguments;
  if (i == null || !wi.call(i, "css"))
    return E.createElement.apply(void 0, s);
  var c = s.length, f = new Array(c);
  f[0] = Hf, f[1] = kf(r, i);
  for (var d = 2; d < c; d++)
    f[d] = s[d];
  return E.createElement.apply(null, f);
};
(function(a) {
  var r;
  r || (r = a.JSX || (a.JSX = {}));
})(y0 || (y0 = {}));
var zg = /* @__PURE__ */ Uf(function(a, r) {
  var i = a.styles, s = Mi([i], void 0, E.useContext(Oi)), c = E.useRef();
  return c0(function() {
    var f = r.key + "-global", d = new r.sheet.constructor({
      key: f,
      nonce: r.sheet.nonce,
      container: r.sheet.container,
      speedy: r.sheet.isSpeedy
    }), m = !1, g = document.querySelector('style[data-emotion="' + f + " " + s.name + '"]');
    return r.sheet.tags.length && (d.before = r.sheet.tags[0]), g !== null && (m = !0, g.setAttribute("data-emotion", f), d.hydrate([g])), c.current = [d, m], function() {
      d.flush();
    };
  }, [r]), c0(function() {
    var f = c.current, d = f[0], m = f[1];
    if (m) {
      f[1] = !1;
      return;
    }
    if (s.next !== void 0 && Bf(r, s.next, !0), d.tags.length) {
      var g = d.tags[d.tags.length - 1].nextElementSibling;
      d.before = g, d.flush();
    }
    r.insert("", s, d, !1);
  }, [r, s.name]), null;
});
function Hn() {
  for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++)
    r[i] = arguments[i];
  return Mi(r);
}
function zi() {
  var a = Hn.apply(void 0, arguments), r = "animation-" + a.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + a.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var N1 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, B1 = /* @__PURE__ */ xg(
  function(a) {
    return N1.test(a) || a.charCodeAt(0) === 111 && a.charCodeAt(1) === 110 && a.charCodeAt(2) < 91;
  }
  /* Z+1 */
), U1 = B1, k1 = function(r) {
  return r !== "theme";
}, v0 = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? U1 : k1;
}, b0 = function(r, i, s) {
  var c;
  if (i) {
    var f = i.shouldForwardProp;
    c = r.__emotion_forwardProp && f ? function(d) {
      return r.__emotion_forwardProp(d) && f(d);
    } : f;
  }
  return typeof c != "function" && s && (c = r.__emotion_forwardProp), c;
}, H1 = function(r) {
  var i = r.cache, s = r.serialized, c = r.isStringTag;
  return Nf(i, s, c), Mg(function() {
    return Bf(i, s, c);
  }), null;
}, L1 = function a(r, i) {
  var s = r.__emotion_real === r, c = s && r.__emotion_base || r, f, d;
  i !== void 0 && (f = i.label, d = i.target);
  var m = b0(r, i, s), g = m || v0(c), h = !g("as");
  return function() {
    var b = arguments, x = s && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (f !== void 0 && x.push("label:" + f + ";"), b[0] == null || b[0].raw === void 0)
      x.push.apply(x, b);
    else {
      var A = b[0];
      x.push(A[0]);
      for (var M = b.length, T = 1; T < M; T++)
        x.push(b[T], A[T]);
    }
    var S = Uf(function(z, U, q) {
      var N = h && z.as || c, D = "", w = [], k = z;
      if (z.theme == null) {
        k = {};
        for (var X in z)
          k[X] = z[X];
        k.theme = E.useContext(Oi);
      }
      typeof z.className == "string" ? D = Cg(U.registered, w, z.className) : z.className != null && (D = z.className + " ");
      var Z = Mi(x.concat(w), U.registered, k);
      D += U.key + "-" + Z.name, d !== void 0 && (D += " " + d);
      var W = h && m === void 0 ? v0(N) : g, ae = {};
      for (var le in z)
        h && le === "as" || W(le) && (ae[le] = z[le]);
      return ae.className = D, q && (ae.ref = q), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(H1, {
        cache: U,
        serialized: Z,
        isStringTag: typeof N == "string"
      }), /* @__PURE__ */ E.createElement(N, ae));
    });
    return S.displayName = f !== void 0 ? f : "Styled(" + (typeof c == "string" ? c : c.displayName || c.name || "Component") + ")", S.defaultProps = r.defaultProps, S.__emotion_real = S, S.__emotion_base = c, S.__emotion_styles = x, S.__emotion_forwardProp = m, Object.defineProperty(S, "toString", {
      value: function() {
        return "." + d;
      }
    }), S.withComponent = function(z, U) {
      var q = a(z, rs({}, i, U, {
        shouldForwardProp: b0(S, U, !0)
      }));
      return q.apply(void 0, x);
    }, S;
  };
}, j1 = [
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
], pf = L1.bind(null);
j1.forEach(function(a) {
  pf[a] = pf(a);
});
function $1(a) {
  return a == null || Object.keys(a).length === 0;
}
function _g(a) {
  const {
    styles: r,
    defaultTheme: i = {}
  } = a, s = typeof r == "function" ? (c) => r($1(c) ? i : c) : r;
  return /* @__PURE__ */ I.jsx(zg, {
    styles: s
  });
}
function Dg(a, r) {
  return pf(a, r);
}
function q1(a, r) {
  Array.isArray(a.__emotion_styles) && (a.__emotion_styles = r(a.__emotion_styles));
}
const S0 = [];
function La(a) {
  return S0[0] = a, Mi(S0);
}
var Wc = { exports: {} }, Ie = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var x0;
function Y1() {
  if (x0) return Ie;
  x0 = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), A = Symbol.for("react.view_transition"), M = Symbol.for("react.client.reference");
  function T(S) {
    if (typeof S == "object" && S !== null) {
      var z = S.$$typeof;
      switch (z) {
        case a:
          switch (S = S.type, S) {
            case i:
            case c:
            case s:
            case g:
            case h:
            case A:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case d:
                case m:
                case x:
                case b:
                  return S;
                case f:
                  return S;
                default:
                  return z;
              }
          }
        case r:
          return z;
      }
    }
  }
  return Ie.ContextConsumer = f, Ie.ContextProvider = d, Ie.Element = a, Ie.ForwardRef = m, Ie.Fragment = i, Ie.Lazy = x, Ie.Memo = b, Ie.Portal = r, Ie.Profiler = c, Ie.StrictMode = s, Ie.Suspense = g, Ie.SuspenseList = h, Ie.isContextConsumer = function(S) {
    return T(S) === f;
  }, Ie.isContextProvider = function(S) {
    return T(S) === d;
  }, Ie.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === a;
  }, Ie.isForwardRef = function(S) {
    return T(S) === m;
  }, Ie.isFragment = function(S) {
    return T(S) === i;
  }, Ie.isLazy = function(S) {
    return T(S) === x;
  }, Ie.isMemo = function(S) {
    return T(S) === b;
  }, Ie.isPortal = function(S) {
    return T(S) === r;
  }, Ie.isProfiler = function(S) {
    return T(S) === c;
  }, Ie.isStrictMode = function(S) {
    return T(S) === s;
  }, Ie.isSuspense = function(S) {
    return T(S) === g;
  }, Ie.isSuspenseList = function(S) {
    return T(S) === h;
  }, Ie.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === i || S === c || S === s || S === g || S === h || typeof S == "object" && S !== null && (S.$$typeof === x || S.$$typeof === b || S.$$typeof === d || S.$$typeof === f || S.$$typeof === m || S.$$typeof === M || S.getModuleId !== void 0);
  }, Ie.typeOf = T, Ie;
}
var E0;
function G1() {
  return E0 || (E0 = 1, Wc.exports = /* @__PURE__ */ Y1()), Wc.exports;
}
var Ng = /* @__PURE__ */ G1();
function Ln(a) {
  if (typeof a != "object" || a === null)
    return !1;
  const r = Object.getPrototypeOf(a);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in a) && !(Symbol.iterator in a);
}
function Bg(a) {
  if (/* @__PURE__ */ E.isValidElement(a) || Ng.isValidElementType(a) || !Ln(a))
    return a;
  const r = {};
  return Object.keys(a).forEach((i) => {
    r[i] = Bg(a[i]);
  }), r;
}
function Vt(a, r, i = {
  clone: !0
}) {
  const s = i.clone ? {
    ...a
  } : a;
  return Ln(a) && Ln(r) && Object.keys(r).forEach((c) => {
    /* @__PURE__ */ E.isValidElement(r[c]) || Ng.isValidElementType(r[c]) ? s[c] = r[c] : Ln(r[c]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(a, c) && Ln(a[c]) ? s[c] = Vt(a[c], r[c], i) : i.clone ? s[c] = Ln(r[c]) ? Bg(r[c]) : r[c] : s[c] = r[c];
  }), s;
}
const V1 = (a) => {
  const r = Object.keys(a).map((i) => ({
    key: i,
    val: a[i]
  })) || [];
  return r.sort((i, s) => i.val - s.val), r.reduce((i, s) => ({
    ...i,
    [s.key]: s.val
  }), {});
};
function X1(a) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: i = "px",
    step: s = 5,
    ...c
  } = a, f = V1(r), d = Object.keys(f);
  function m(A) {
    return `@media (min-width:${typeof r[A] == "number" ? r[A] : A}${i})`;
  }
  function g(A) {
    return `@media (max-width:${(typeof r[A] == "number" ? r[A] : A) - s / 100}${i})`;
  }
  function h(A, M) {
    const T = d.indexOf(M);
    return `@media (min-width:${typeof r[A] == "number" ? r[A] : A}${i}) and (max-width:${(T !== -1 && typeof r[d[T]] == "number" ? r[d[T]] : M) - s / 100}${i})`;
  }
  function b(A) {
    return d.indexOf(A) + 1 < d.length ? h(A, d[d.indexOf(A) + 1]) : m(A);
  }
  function x(A) {
    const M = d.indexOf(A);
    return M === 0 ? m(d[1]) : M === d.length - 1 ? g(d[M]) : h(A, d[d.indexOf(A) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: d,
    values: f,
    up: m,
    down: g,
    between: h,
    only: b,
    not: x,
    unit: i,
    ...c
  };
}
function T0(a, r) {
  if (!a.containerQueries)
    return r;
  const i = Object.keys(r).filter((s) => s.startsWith("@container")).sort((s, c) => {
    const f = /min-width:\s*([0-9.]+)/;
    return +(s.match(f)?.[1] || 0) - +(c.match(f)?.[1] || 0);
  });
  return i.length ? i.reduce((s, c) => {
    const f = r[c];
    return delete s[c], s[c] = f, s;
  }, {
    ...r
  }) : r;
}
function K1(a, r) {
  return r === "@" || r.startsWith("@") && (a.some((i) => r.startsWith(`@${i}`)) || !!r.match(/^@\d/));
}
function Q1(a, r) {
  const i = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!i)
    return null;
  const [, s, c] = i, f = Number.isNaN(+s) ? s || 0 : +s;
  return a.containerQueries(c).up(f);
}
function Z1(a) {
  const r = (f, d) => f.replace("@media", d ? `@container ${d}` : "@container");
  function i(f, d) {
    f.up = (...m) => r(a.breakpoints.up(...m), d), f.down = (...m) => r(a.breakpoints.down(...m), d), f.between = (...m) => r(a.breakpoints.between(...m), d), f.only = (...m) => r(a.breakpoints.only(...m), d), f.not = (...m) => {
      const g = r(a.breakpoints.not(...m), d);
      return g.includes("not all and") ? g.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : g;
    };
  }
  const s = {}, c = (f) => (i(s, f), s);
  return i(c), {
    ...a,
    containerQueries: c
  };
}
const P1 = {
  borderRadius: 4
};
function bi(a, r) {
  return r ? Vt(a, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : a;
}
const hs = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, C0 = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (a) => `@media (min-width:${hs[a]}px)`
}, F1 = {
  containerQueries: (a) => ({
    up: (r) => {
      let i = typeof r == "number" ? r : hs[r] || r;
      return typeof i == "number" && (i = `${i}px`), a ? `@container ${a} (min-width:${i})` : `@container (min-width:${i})`;
    }
  })
};
function ua(a, r, i) {
  const s = a.theme || {};
  if (Array.isArray(r)) {
    const f = s.breakpoints || C0;
    return r.reduce((d, m, g) => (d[f.up(f.keys[g])] = i(r[g]), d), {});
  }
  if (typeof r == "object") {
    const f = s.breakpoints || C0;
    return Object.keys(r).reduce((d, m) => {
      if (K1(f.keys, m)) {
        const g = Q1(s.containerQueries ? s : F1, m);
        g && (d[g] = i(r[m], m));
      } else if (Object.keys(f.values || hs).includes(m)) {
        const g = f.up(m);
        d[g] = i(r[m], m);
      } else {
        const g = m;
        d[g] = r[g];
      }
      return d;
    }, {});
  }
  return i(r);
}
function W1(a = {}) {
  return a.keys?.reduce((i, s) => {
    const c = a.up(s);
    return i[c] = {}, i;
  }, {}) || {};
}
function R0(a, r) {
  return a.reduce((i, s) => {
    const c = i[s];
    return (!c || Object.keys(c).length === 0) && delete i[s], i;
  }, r);
}
function $e(a) {
  if (typeof a != "string")
    throw new Error(sa(7));
  return a.charAt(0).toUpperCase() + a.slice(1);
}
function gs(a, r, i = !0) {
  if (!r || typeof r != "string")
    return null;
  if (a && a.vars && i) {
    const s = `vars.${r}`.split(".").reduce((c, f) => c && c[f] ? c[f] : null, a);
    if (s != null)
      return s;
  }
  return r.split(".").reduce((s, c) => s && s[c] != null ? s[c] : null, a);
}
function is(a, r, i, s = i) {
  let c;
  return typeof a == "function" ? c = a(i) : Array.isArray(a) ? c = a[i] || s : c = gs(a, i) || s, r && (c = r(c, s, a)), c;
}
function Et(a) {
  const {
    prop: r,
    cssProperty: i = a.prop,
    themeKey: s,
    transform: c
  } = a, f = (d) => {
    if (d[r] == null)
      return null;
    const m = d[r], g = d.theme, h = gs(g, s) || {};
    return ua(d, m, (x) => {
      let A = is(h, c, x);
      return x === A && typeof x == "string" && (A = is(h, c, `${r}${x === "default" ? "" : $e(x)}`, x)), i === !1 ? A : {
        [i]: A
      };
    });
  };
  return f.propTypes = {}, f.filterProps = [r], f;
}
function J1(a) {
  const r = {};
  return (i) => (r[i] === void 0 && (r[i] = a(i)), r[i]);
}
const I1 = {
  m: "margin",
  p: "padding"
}, eS = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, A0 = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, tS = J1((a) => {
  if (a.length > 2)
    if (A0[a])
      a = A0[a];
    else
      return [a];
  const [r, i] = a.split(""), s = I1[r], c = eS[i] || "";
  return Array.isArray(c) ? c.map((f) => s + f) : [s + c];
}), Lf = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], jf = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Lf, ...jf];
function _i(a, r, i, s) {
  const c = gs(a, r, !0) ?? i;
  return typeof c == "number" || typeof c == "string" ? (f) => typeof f == "string" ? f : typeof c == "string" ? c.startsWith("var(") && f === 0 ? 0 : c.startsWith("var(") && f === 1 ? c : `calc(${f} * ${c})` : c * f : Array.isArray(c) ? (f) => {
    if (typeof f == "string")
      return f;
    const d = Math.abs(f), m = c[d];
    return f >= 0 ? m : typeof m == "number" ? -m : typeof m == "string" && m.startsWith("var(") ? `calc(-1 * ${m})` : `-${m}`;
  } : typeof c == "function" ? c : () => {
  };
}
function $f(a) {
  return _i(a, "spacing", 8);
}
function Di(a, r) {
  return typeof r == "string" || r == null ? r : a(r);
}
function nS(a, r) {
  return (i) => a.reduce((s, c) => (s[c] = Di(r, i), s), {});
}
function aS(a, r, i, s) {
  if (!r.includes(i))
    return null;
  const c = tS(i), f = nS(c, s), d = a[i];
  return ua(a, d, f);
}
function Ug(a, r) {
  const i = $f(a.theme);
  return Object.keys(a).map((s) => aS(a, r, s, i)).reduce(bi, {});
}
function vt(a) {
  return Ug(a, Lf);
}
vt.propTypes = {};
vt.filterProps = Lf;
function bt(a) {
  return Ug(a, jf);
}
bt.propTypes = {};
bt.filterProps = jf;
function kg(a = 8, r = $f({
  spacing: a
})) {
  if (a.mui)
    return a;
  const i = (...s) => (s.length === 0 ? [1] : s).map((f) => {
    const d = r(f);
    return typeof d == "number" ? `${d}px` : d;
  }).join(" ");
  return i.mui = !0, i;
}
function ys(...a) {
  const r = a.reduce((s, c) => (c.filterProps.forEach((f) => {
    s[f] = c;
  }), s), {}), i = (s) => Object.keys(s).reduce((c, f) => r[f] ? bi(c, r[f](s)) : c, {});
  return i.propTypes = {}, i.filterProps = a.reduce((s, c) => s.concat(c.filterProps), []), i;
}
function xn(a) {
  return typeof a != "number" ? a : `${a}px solid`;
}
function En(a, r) {
  return Et({
    prop: a,
    themeKey: "borders",
    transform: r
  });
}
const lS = En("border", xn), rS = En("borderTop", xn), iS = En("borderRight", xn), oS = En("borderBottom", xn), sS = En("borderLeft", xn), uS = En("borderColor"), cS = En("borderTopColor"), fS = En("borderRightColor"), dS = En("borderBottomColor"), pS = En("borderLeftColor"), mS = En("outline", xn), hS = En("outlineColor"), vs = (a) => {
  if (a.borderRadius !== void 0 && a.borderRadius !== null) {
    const r = _i(a.theme, "shape.borderRadius", 4), i = (s) => ({
      borderRadius: Di(r, s)
    });
    return ua(a, a.borderRadius, i);
  }
  return null;
};
vs.propTypes = {};
vs.filterProps = ["borderRadius"];
ys(lS, rS, iS, oS, sS, uS, cS, fS, dS, pS, vs, mS, hS);
const bs = (a) => {
  if (a.gap !== void 0 && a.gap !== null) {
    const r = _i(a.theme, "spacing", 8), i = (s) => ({
      gap: Di(r, s)
    });
    return ua(a, a.gap, i);
  }
  return null;
};
bs.propTypes = {};
bs.filterProps = ["gap"];
const Ss = (a) => {
  if (a.columnGap !== void 0 && a.columnGap !== null) {
    const r = _i(a.theme, "spacing", 8), i = (s) => ({
      columnGap: Di(r, s)
    });
    return ua(a, a.columnGap, i);
  }
  return null;
};
Ss.propTypes = {};
Ss.filterProps = ["columnGap"];
const xs = (a) => {
  if (a.rowGap !== void 0 && a.rowGap !== null) {
    const r = _i(a.theme, "spacing", 8), i = (s) => ({
      rowGap: Di(r, s)
    });
    return ua(a, a.rowGap, i);
  }
  return null;
};
xs.propTypes = {};
xs.filterProps = ["rowGap"];
const gS = Et({
  prop: "gridColumn"
}), yS = Et({
  prop: "gridRow"
}), vS = Et({
  prop: "gridAutoFlow"
}), bS = Et({
  prop: "gridAutoColumns"
}), SS = Et({
  prop: "gridAutoRows"
}), xS = Et({
  prop: "gridTemplateColumns"
}), ES = Et({
  prop: "gridTemplateRows"
}), TS = Et({
  prop: "gridTemplateAreas"
}), CS = Et({
  prop: "gridArea"
});
ys(bs, Ss, xs, gS, yS, vS, bS, SS, xS, ES, TS, CS);
function or(a, r) {
  return r === "grey" ? r : a;
}
const RS = Et({
  prop: "color",
  themeKey: "palette",
  transform: or
}), AS = Et({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: or
}), MS = Et({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: or
});
ys(RS, AS, MS);
function un(a) {
  return a <= 1 && a !== 0 ? `${a * 100}%` : a;
}
const OS = Et({
  prop: "width",
  transform: un
}), qf = (a) => {
  if (a.maxWidth !== void 0 && a.maxWidth !== null) {
    const r = (i) => {
      const s = a.theme?.breakpoints?.values?.[i] || hs[i];
      return s ? a.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${s}${a.theme.breakpoints.unit}`
      } : {
        maxWidth: s
      } : {
        maxWidth: un(i)
      };
    };
    return ua(a, a.maxWidth, r);
  }
  return null;
};
qf.filterProps = ["maxWidth"];
const wS = Et({
  prop: "minWidth",
  transform: un
}), zS = Et({
  prop: "height",
  transform: un
}), _S = Et({
  prop: "maxHeight",
  transform: un
}), DS = Et({
  prop: "minHeight",
  transform: un
});
Et({
  prop: "size",
  cssProperty: "width",
  transform: un
});
Et({
  prop: "size",
  cssProperty: "height",
  transform: un
});
const NS = Et({
  prop: "boxSizing"
});
ys(OS, qf, wS, zS, _S, DS, NS);
const Ni = {
  // borders
  border: {
    themeKey: "borders",
    transform: xn
  },
  borderTop: {
    themeKey: "borders",
    transform: xn
  },
  borderRight: {
    themeKey: "borders",
    transform: xn
  },
  borderBottom: {
    themeKey: "borders",
    transform: xn
  },
  borderLeft: {
    themeKey: "borders",
    transform: xn
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: xn
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: vs
  },
  // palette
  color: {
    themeKey: "palette",
    transform: or
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: or
  },
  backgroundColor: {
    themeKey: "palette",
    transform: or
  },
  // spacing
  p: {
    style: bt
  },
  pt: {
    style: bt
  },
  pr: {
    style: bt
  },
  pb: {
    style: bt
  },
  pl: {
    style: bt
  },
  px: {
    style: bt
  },
  py: {
    style: bt
  },
  padding: {
    style: bt
  },
  paddingTop: {
    style: bt
  },
  paddingRight: {
    style: bt
  },
  paddingBottom: {
    style: bt
  },
  paddingLeft: {
    style: bt
  },
  paddingX: {
    style: bt
  },
  paddingY: {
    style: bt
  },
  paddingInline: {
    style: bt
  },
  paddingInlineStart: {
    style: bt
  },
  paddingInlineEnd: {
    style: bt
  },
  paddingBlock: {
    style: bt
  },
  paddingBlockStart: {
    style: bt
  },
  paddingBlockEnd: {
    style: bt
  },
  m: {
    style: vt
  },
  mt: {
    style: vt
  },
  mr: {
    style: vt
  },
  mb: {
    style: vt
  },
  ml: {
    style: vt
  },
  mx: {
    style: vt
  },
  my: {
    style: vt
  },
  margin: {
    style: vt
  },
  marginTop: {
    style: vt
  },
  marginRight: {
    style: vt
  },
  marginBottom: {
    style: vt
  },
  marginLeft: {
    style: vt
  },
  marginX: {
    style: vt
  },
  marginY: {
    style: vt
  },
  marginInline: {
    style: vt
  },
  marginInlineStart: {
    style: vt
  },
  marginInlineEnd: {
    style: vt
  },
  marginBlock: {
    style: vt
  },
  marginBlockStart: {
    style: vt
  },
  marginBlockEnd: {
    style: vt
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (a) => ({
      "@media print": {
        display: a
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: bs
  },
  rowGap: {
    style: xs
  },
  columnGap: {
    style: Ss
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: un
  },
  maxWidth: {
    style: qf
  },
  minWidth: {
    transform: un
  },
  height: {
    transform: un
  },
  maxHeight: {
    transform: un
  },
  minHeight: {
    transform: un
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function BS(...a) {
  const r = a.reduce((s, c) => s.concat(Object.keys(c)), []), i = new Set(r);
  return a.every((s) => i.size === Object.keys(s).length);
}
function US(a, r) {
  return typeof a == "function" ? a(r) : a;
}
function kS() {
  function a(i, s, c, f) {
    const d = {
      [i]: s,
      theme: c
    }, m = f[i];
    if (!m)
      return {
        [i]: s
      };
    const {
      cssProperty: g = i,
      themeKey: h,
      transform: b,
      style: x
    } = m;
    if (s == null)
      return null;
    if (h === "typography" && s === "inherit")
      return {
        [i]: s
      };
    const A = gs(c, h) || {};
    return x ? x(d) : ua(d, s, (T) => {
      let S = is(A, b, T);
      return T === S && typeof T == "string" && (S = is(A, b, `${i}${T === "default" ? "" : $e(T)}`, T)), g === !1 ? S : {
        [g]: S
      };
    });
  }
  function r(i) {
    const {
      sx: s,
      theme: c = {},
      nested: f
    } = i || {};
    if (!s)
      return null;
    const d = c.unstable_sxConfig ?? Ni;
    function m(g) {
      let h = g;
      if (typeof g == "function")
        h = g(c);
      else if (typeof g != "object")
        return g;
      if (!h)
        return null;
      const b = W1(c.breakpoints), x = Object.keys(b);
      let A = b;
      return Object.keys(h).forEach((M) => {
        const T = US(h[M], c);
        if (T != null)
          if (typeof T == "object")
            if (d[M])
              A = bi(A, a(M, T, c, d));
            else {
              const S = ua({
                theme: c
              }, T, (z) => ({
                [M]: z
              }));
              BS(S, T) ? A[M] = r({
                sx: T,
                theme: c,
                nested: !0
              }) : A = bi(A, S);
            }
          else
            A = bi(A, a(M, T, c, d));
      }), !f && c.modularCssLayers ? {
        "@layer sx": T0(c, R0(x, A))
      } : T0(c, R0(x, A));
    }
    return Array.isArray(s) ? s.map(m) : m(s);
  }
  return r;
}
const ja = kS();
ja.filterProps = ["sx"];
function HS(a, r) {
  const i = this;
  if (i.vars) {
    if (!i.colorSchemes?.[a] || typeof i.getColorSchemeSelector != "function")
      return {};
    let s = i.getColorSchemeSelector(a);
    return s === "&" ? r : ((s.includes("data-") || s.includes(".")) && (s = `*:where(${s.replace(/\s*&$/, "")}) &`), {
      [s]: r
    });
  }
  return i.palette.mode === a ? r : {};
}
function Yf(a = {}, ...r) {
  const {
    breakpoints: i = {},
    palette: s = {},
    spacing: c,
    shape: f = {},
    ...d
  } = a, m = X1(i), g = kg(c);
  let h = Vt({
    breakpoints: m,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...s
    },
    spacing: g,
    shape: {
      ...P1,
      ...f
    }
  }, d);
  return h = Z1(h), h.applyStyles = HS, h = r.reduce((b, x) => Vt(b, x), h), h.unstable_sxConfig = {
    ...Ni,
    ...d?.unstable_sxConfig
  }, h.unstable_sx = function(x) {
    return ja({
      sx: x,
      theme: this
    });
  }, h;
}
function LS(a) {
  return Object.keys(a).length === 0;
}
function Gf(a = null) {
  const r = E.useContext(Oi);
  return !r || LS(r) ? a : r;
}
const jS = Yf();
function Vf(a = jS) {
  return Gf(a);
}
function Jc(a) {
  const r = La(a);
  return a !== r && r.styles ? (r.styles.match(/^@layer\s+[^{]*$/) || (r.styles = `@layer global{${r.styles}}`), r) : a;
}
function Hg({
  styles: a,
  themeId: r,
  defaultTheme: i = {}
}) {
  const s = Vf(i), c = r && s[r] || s;
  let f = typeof a == "function" ? a(c) : a;
  return c.modularCssLayers && (Array.isArray(f) ? f = f.map((d) => Jc(typeof d == "function" ? d(c) : d)) : f = Jc(f)), /* @__PURE__ */ I.jsx(_g, {
    styles: f
  });
}
const $S = (a) => {
  const r = {
    systemProps: {},
    otherProps: {}
  }, i = a?.theme?.unstable_sxConfig ?? Ni;
  return Object.keys(a).forEach((s) => {
    i[s] ? r.systemProps[s] = a[s] : r.otherProps[s] = a[s];
  }), r;
};
function qS(a) {
  const {
    sx: r,
    ...i
  } = a, {
    systemProps: s,
    otherProps: c
  } = $S(i);
  let f;
  return Array.isArray(r) ? f = [s, ...r] : typeof r == "function" ? f = (...d) => {
    const m = r(...d);
    return Ln(m) ? {
      ...s,
      ...m
    } : s;
  } : f = {
    ...s,
    ...r
  }, {
    ...c,
    sx: f
  };
}
const M0 = (a) => a, YS = () => {
  let a = M0;
  return {
    configure(r) {
      a = r;
    },
    generate(r) {
      return a(r);
    },
    reset() {
      a = M0;
    }
  };
}, Lg = YS();
function jg(a) {
  var r, i, s = "";
  if (typeof a == "string" || typeof a == "number") s += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var c = a.length;
    for (r = 0; r < c; r++) a[r] && (i = jg(a[r])) && (s && (s += " "), s += i);
  } else for (i in a) a[i] && (s && (s += " "), s += i);
  return s;
}
function we() {
  for (var a, r, i = 0, s = "", c = arguments.length; i < c; i++) (a = arguments[i]) && (r = jg(a)) && (s && (s += " "), s += r);
  return s;
}
function GS(a = {}) {
  const {
    themeId: r,
    defaultTheme: i,
    defaultClassName: s = "MuiBox-root",
    generateClassName: c
  } = a, f = Dg("div", {
    shouldForwardProp: (m) => m !== "theme" && m !== "sx" && m !== "as"
  })(ja);
  return /* @__PURE__ */ E.forwardRef(function(g, h) {
    const b = Vf(i), {
      className: x,
      component: A = "div",
      ...M
    } = qS(g);
    return /* @__PURE__ */ I.jsx(f, {
      as: A,
      ref: h,
      className: we(x, c ? c(s) : s),
      theme: r && b[r] || b,
      ...M
    });
  });
}
const VS = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function ft(a, r, i = "Mui") {
  const s = VS[r];
  return s ? `${i}-${s}` : `${Lg.generate(a)}-${r}`;
}
function ot(a, r, i = "Mui") {
  const s = {};
  return r.forEach((c) => {
    s[c] = ft(a, c, i);
  }), s;
}
function $g(a) {
  const {
    variants: r,
    ...i
  } = a, s = {
    variants: r,
    style: La(i),
    isProcessed: !0
  };
  return s.style === i || r && r.forEach((c) => {
    typeof c.style != "function" && (c.style = La(c.style));
  }), s;
}
const XS = Yf();
function Ic(a) {
  return a !== "ownerState" && a !== "theme" && a !== "sx" && a !== "as";
}
function fl(a, r) {
  return r && a && typeof a == "object" && a.styles && !a.styles.startsWith("@layer") && (a.styles = `@layer ${r}{${String(a.styles)}}`), a;
}
function KS(a) {
  return a ? (r, i) => i[a] : null;
}
function QS(a, r, i) {
  a.theme = FS(a.theme) ? i : a.theme[r] || a.theme;
}
function ns(a, r, i) {
  const s = typeof r == "function" ? r(a) : r;
  if (Array.isArray(s))
    return s.flatMap((c) => ns(a, c, i));
  if (Array.isArray(s?.variants)) {
    let c;
    if (s.isProcessed)
      c = i ? fl(s.style, i) : s.style;
    else {
      const {
        variants: f,
        ...d
      } = s;
      c = i ? fl(La(d), i) : d;
    }
    return qg(a, s.variants, [c], i);
  }
  return s?.isProcessed ? i ? fl(La(s.style), i) : s.style : i ? fl(La(s), i) : s;
}
function qg(a, r, i = [], s = void 0) {
  let c;
  e: for (let f = 0; f < r.length; f += 1) {
    const d = r[f];
    if (typeof d.props == "function") {
      if (c ??= {
        ...a,
        ...a.ownerState,
        ownerState: a.ownerState
      }, !d.props(c))
        continue;
    } else
      for (const m in d.props)
        if (a[m] !== d.props[m] && a.ownerState?.[m] !== d.props[m])
          continue e;
    typeof d.style == "function" ? (c ??= {
      ...a,
      ...a.ownerState,
      ownerState: a.ownerState
    }, i.push(s ? fl(La(d.style(c)), s) : d.style(c))) : i.push(s ? fl(La(d.style), s) : d.style);
  }
  return i;
}
function ZS(a = {}) {
  const {
    themeId: r,
    defaultTheme: i = XS,
    rootShouldForwardProp: s = Ic,
    slotShouldForwardProp: c = Ic
  } = a;
  function f(m) {
    QS(m, r, i);
  }
  return (m, g = {}) => {
    q1(m, (k) => k.filter((X) => X !== ja));
    const {
      name: h,
      slot: b,
      skipVariantsResolver: x,
      skipSx: A,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: M = KS(JS(b)),
      ...T
    } = g, S = h && h.startsWith("Mui") || b ? "components" : "custom", z = x !== void 0 ? x : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      b && b !== "Root" && b !== "root" || !1
    ), U = A || !1;
    let q = Ic;
    b === "Root" || b === "root" ? q = s : b ? q = c : WS(m) && (q = void 0);
    const N = Dg(m, {
      shouldForwardProp: q,
      label: PS(),
      ...T
    }), D = (k) => {
      if (k.__emotion_real === k)
        return k;
      if (typeof k == "function")
        return function(Z) {
          return ns(Z, k, Z.theme.modularCssLayers ? S : void 0);
        };
      if (Ln(k)) {
        const X = $g(k);
        return function(W) {
          return X.variants ? ns(W, X, W.theme.modularCssLayers ? S : void 0) : W.theme.modularCssLayers ? fl(X.style, S) : X.style;
        };
      }
      return k;
    }, w = (...k) => {
      const X = [], Z = k.map(D), W = [];
      if (X.push(f), h && M && W.push(function(ee) {
        const G = ee.theme.components?.[h]?.styleOverrides;
        if (!G)
          return null;
        const O = {};
        for (const Q in G)
          O[Q] = ns(ee, G[Q], ee.theme.modularCssLayers ? "theme" : void 0);
        return M(ee, O);
      }), h && !z && W.push(function(ee) {
        const G = ee.theme?.components?.[h]?.variants;
        return G ? qg(ee, G, [], ee.theme.modularCssLayers ? "theme" : void 0) : null;
      }), U || W.push(ja), Array.isArray(Z[0])) {
        const v = Z.shift(), ee = new Array(X.length).fill(""), Y = new Array(W.length).fill("");
        let G;
        G = [...ee, ...v, ...Y], G.raw = [...ee, ...v.raw, ...Y], X.unshift(G);
      }
      const ae = [...X, ...Z, ...W], le = N(...ae);
      return m.muiName && (le.muiName = m.muiName), le;
    };
    return N.withConfig && (w.withConfig = N.withConfig), w;
  };
}
function PS(a, r) {
  return void 0;
}
function FS(a) {
  for (const r in a)
    return !1;
  return !0;
}
function WS(a) {
  return typeof a == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  a.charCodeAt(0) > 96;
}
function JS(a) {
  return a && a.charAt(0).toLowerCase() + a.slice(1);
}
function mf(a, r, i = !1) {
  const s = {
    ...r
  };
  for (const c in a)
    if (Object.prototype.hasOwnProperty.call(a, c)) {
      const f = c;
      if (f === "components" || f === "slots")
        s[f] = {
          ...a[f],
          ...s[f]
        };
      else if (f === "componentsProps" || f === "slotProps") {
        const d = a[f], m = r[f];
        if (!m)
          s[f] = d || {};
        else if (!d)
          s[f] = m;
        else {
          s[f] = {
            ...m
          };
          for (const g in d)
            if (Object.prototype.hasOwnProperty.call(d, g)) {
              const h = g;
              s[f][h] = mf(d[h], m[h], i);
            }
        }
      } else f === "className" && i && r.className ? s.className = we(a?.className, r?.className) : f === "style" && i && r.style ? s.style = {
        ...a?.style,
        ...r?.style
      } : s[f] === void 0 && (s[f] = a[f]);
    }
  return s;
}
const ca = typeof window < "u" ? E.useLayoutEffect : E.useEffect;
function IS(a, r = Number.MIN_SAFE_INTEGER, i = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(a, i));
}
function Xf(a, r = 0, i = 1) {
  return IS(a, r, i);
}
function ex(a) {
  a = a.slice(1);
  const r = new RegExp(`.{1,${a.length >= 6 ? 2 : 1}}`, "g");
  let i = a.match(r);
  return i && i[0].length === 1 && (i = i.map((s) => s + s)), i ? `rgb${i.length === 4 ? "a" : ""}(${i.map((s, c) => c < 3 ? parseInt(s, 16) : Math.round(parseInt(s, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function $a(a) {
  if (a.type)
    return a;
  if (a.charAt(0) === "#")
    return $a(ex(a));
  const r = a.indexOf("("), i = a.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(i))
    throw new Error(sa(9, a));
  let s = a.substring(r + 1, a.length - 1), c;
  if (i === "color") {
    if (s = s.split(" "), c = s.shift(), s.length === 4 && s[3].charAt(0) === "/" && (s[3] = s[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(c))
      throw new Error(sa(10, c));
  } else
    s = s.split(",");
  return s = s.map((f) => parseFloat(f)), {
    type: i,
    values: s,
    colorSpace: c
  };
}
const tx = (a) => {
  const r = $a(a);
  return r.values.slice(0, 3).map((i, s) => r.type.includes("hsl") && s !== 0 ? `${i}%` : i).join(" ");
}, gi = (a, r) => {
  try {
    return tx(a);
  } catch {
    return a;
  }
};
function Es(a) {
  const {
    type: r,
    colorSpace: i
  } = a;
  let {
    values: s
  } = a;
  return r.includes("rgb") ? s = s.map((c, f) => f < 3 ? parseInt(c, 10) : c) : r.includes("hsl") && (s[1] = `${s[1]}%`, s[2] = `${s[2]}%`), r.includes("color") ? s = `${i} ${s.join(" ")}` : s = `${s.join(", ")}`, `${r}(${s})`;
}
function Yg(a) {
  a = $a(a);
  const {
    values: r
  } = a, i = r[0], s = r[1] / 100, c = r[2] / 100, f = s * Math.min(c, 1 - c), d = (h, b = (h + i / 30) % 12) => c - f * Math.max(Math.min(b - 3, 9 - b, 1), -1);
  let m = "rgb";
  const g = [Math.round(d(0) * 255), Math.round(d(8) * 255), Math.round(d(4) * 255)];
  return a.type === "hsla" && (m += "a", g.push(r[3])), Es({
    type: m,
    values: g
  });
}
function hf(a) {
  a = $a(a);
  let r = a.type === "hsl" || a.type === "hsla" ? $a(Yg(a)).values : a.values;
  return r = r.map((i) => (a.type !== "color" && (i /= 255), i <= 0.03928 ? i / 12.92 : ((i + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function nx(a, r) {
  const i = hf(a), s = hf(r);
  return (Math.max(i, s) + 0.05) / (Math.min(i, s) + 0.05);
}
function os(a, r) {
  return a = $a(a), r = Xf(r), (a.type === "rgb" || a.type === "hsl") && (a.type += "a"), a.type === "color" ? a.values[3] = `/${r}` : a.values[3] = r, Es(a);
}
function rl(a, r, i) {
  try {
    return os(a, r);
  } catch {
    return a;
  }
}
function Ts(a, r) {
  if (a = $a(a), r = Xf(r), a.type.includes("hsl"))
    a.values[2] *= 1 - r;
  else if (a.type.includes("rgb") || a.type.includes("color"))
    for (let i = 0; i < 3; i += 1)
      a.values[i] *= 1 - r;
  return Es(a);
}
function Xe(a, r, i) {
  try {
    return Ts(a, r);
  } catch {
    return a;
  }
}
function Cs(a, r) {
  if (a = $a(a), r = Xf(r), a.type.includes("hsl"))
    a.values[2] += (100 - a.values[2]) * r;
  else if (a.type.includes("rgb"))
    for (let i = 0; i < 3; i += 1)
      a.values[i] += (255 - a.values[i]) * r;
  else if (a.type.includes("color"))
    for (let i = 0; i < 3; i += 1)
      a.values[i] += (1 - a.values[i]) * r;
  return Es(a);
}
function Ke(a, r, i) {
  try {
    return Cs(a, r);
  } catch {
    return a;
  }
}
function ax(a, r = 0.15) {
  return hf(a) > 0.5 ? Ts(a, r) : Cs(a, r);
}
function Qo(a, r, i) {
  try {
    return ax(a, r);
  } catch {
    return a;
  }
}
const Gg = /* @__PURE__ */ E.createContext(null);
function Kf() {
  return E.useContext(Gg);
}
const lx = typeof Symbol == "function" && Symbol.for, rx = lx ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function ix(a, r) {
  return typeof r == "function" ? r(a) : {
    ...a,
    ...r
  };
}
function ox(a) {
  const {
    children: r,
    theme: i
  } = a, s = Kf(), c = E.useMemo(() => {
    const f = s === null ? {
      ...i
    } : ix(s, i);
    return f != null && (f[rx] = s !== null), f;
  }, [i, s]);
  return /* @__PURE__ */ I.jsx(Gg.Provider, {
    value: c,
    children: r
  });
}
const Vg = /* @__PURE__ */ E.createContext();
function sx({
  value: a,
  ...r
}) {
  return /* @__PURE__ */ I.jsx(Vg.Provider, {
    value: a ?? !0,
    ...r
  });
}
const ux = () => E.useContext(Vg) ?? !1, Xg = /* @__PURE__ */ E.createContext(void 0);
function cx({
  value: a,
  children: r
}) {
  return /* @__PURE__ */ I.jsx(Xg.Provider, {
    value: a,
    children: r
  });
}
function fx(a) {
  const {
    theme: r,
    name: i,
    props: s
  } = a;
  if (!r || !r.components || !r.components[i])
    return s;
  const c = r.components[i];
  return c.defaultProps ? mf(c.defaultProps, s, r.components.mergeClassNameAndStyle) : !c.styleOverrides && !c.variants ? mf(c, s, r.components.mergeClassNameAndStyle) : s;
}
function dx({
  props: a,
  name: r
}) {
  const i = E.useContext(Xg);
  return fx({
    props: a,
    name: r,
    theme: {
      components: i
    }
  });
}
let O0 = 0;
function px(a) {
  const [r, i] = E.useState(a), s = a || r;
  return E.useEffect(() => {
    r == null && (O0 += 1, i(`mui-${O0}`));
  }, [r]), s;
}
const mx = {
  ...uf
}, w0 = mx.useId;
function Rs(a) {
  if (w0 !== void 0) {
    const r = w0();
    return a ?? r;
  }
  return px(a);
}
function hx(a) {
  const r = Gf(), i = Rs() || "", {
    modularCssLayers: s
  } = a;
  let c = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !s || r !== null ? c = "" : typeof s == "string" ? c = s.replace(/mui(?!\.)/g, c) : c = `@layer ${c};`, ca(() => {
    const f = document.querySelector("head");
    if (!f)
      return;
    const d = f.firstChild;
    if (c) {
      if (d && d.hasAttribute?.("data-mui-layer-order") && d.getAttribute("data-mui-layer-order") === i)
        return;
      const m = document.createElement("style");
      m.setAttribute("data-mui-layer-order", i), m.textContent = c, f.prepend(m);
    } else
      f.querySelector(`style[data-mui-layer-order="${i}"]`)?.remove();
  }, [c, i]), c ? /* @__PURE__ */ I.jsx(Hg, {
    styles: c
  }) : null;
}
const z0 = {};
function _0(a, r, i, s = !1) {
  return E.useMemo(() => {
    const c = a && r[a] || r;
    if (typeof i == "function") {
      const f = i(c), d = a ? {
        ...r,
        [a]: f
      } : f;
      return s ? () => d : d;
    }
    return a ? {
      ...r,
      [a]: i
    } : {
      ...r,
      ...i
    };
  }, [a, r, i, s]);
}
function Kg(a) {
  const {
    children: r,
    theme: i,
    themeId: s
  } = a, c = Gf(z0), f = Kf() || z0, d = _0(s, c, i), m = _0(s, f, i, !0), g = (s ? d[s] : d).direction === "rtl", h = hx(d);
  return /* @__PURE__ */ I.jsx(ox, {
    theme: m,
    children: /* @__PURE__ */ I.jsx(Oi.Provider, {
      value: d,
      children: /* @__PURE__ */ I.jsx(sx, {
        value: g,
        children: /* @__PURE__ */ I.jsxs(cx, {
          value: s ? d[s].components : d.components,
          children: [h, r]
        })
      })
    })
  });
}
const D0 = {
  theme: void 0
};
function gx(a) {
  let r, i;
  return function(c) {
    let f = r;
    return (f === void 0 || c.theme !== i) && (D0.theme = c.theme, f = $g(a(D0)), r = f, i = c.theme), f;
  };
}
const Qf = "mode", Zf = "color-scheme", yx = "data-color-scheme";
function vx(a) {
  const {
    defaultMode: r = "system",
    defaultLightColorScheme: i = "light",
    defaultDarkColorScheme: s = "dark",
    modeStorageKey: c = Qf,
    colorSchemeStorageKey: f = Zf,
    attribute: d = yx,
    colorSchemeNode: m = "document.documentElement",
    nonce: g
  } = a || {};
  let h = "", b = d;
  if (d === "class" && (b = ".%s"), d === "data" && (b = "[data-%s]"), b.startsWith(".")) {
    const A = b.substring(1);
    h += `${m}.classList.remove('${A}'.replace('%s', light), '${A}'.replace('%s', dark));
      ${m}.classList.add('${A}'.replace('%s', colorScheme));`;
  }
  const x = b.match(/\[([^\]]+)\]/);
  if (x) {
    const [A, M] = x[1].split("=");
    M || (h += `${m}.removeAttribute('${A}'.replace('%s', light));
      ${m}.removeAttribute('${A}'.replace('%s', dark));`), h += `
      ${m}.setAttribute('${A}'.replace('%s', colorScheme), ${M ? `${M}.replace('%s', colorScheme)` : '""'});`;
  } else
    h += `${m}.setAttribute('${b}', colorScheme);`;
  return /* @__PURE__ */ I.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? g : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${c}') || '${r}';
  const dark = localStorage.getItem('${f}-dark') || '${s}';
  const light = localStorage.getItem('${f}-light') || '${i}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${h}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function bx() {
}
const Sx = ({
  key: a,
  storageWindow: r
}) => (!r && typeof window < "u" && (r = window), {
  get(i) {
    if (typeof window > "u")
      return;
    if (!r)
      return i;
    let s;
    try {
      s = r.localStorage.getItem(a);
    } catch {
    }
    return s || i;
  },
  set: (i) => {
    if (r)
      try {
        r.localStorage.setItem(a, i);
      } catch {
      }
  },
  subscribe: (i) => {
    if (!r)
      return bx;
    const s = (c) => {
      const f = c.newValue;
      c.key === a && i(f);
    };
    return r.addEventListener("storage", s), () => {
      r.removeEventListener("storage", s);
    };
  }
});
function ef() {
}
function N0(a) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && a === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Qg(a, r) {
  if (a.mode === "light" || a.mode === "system" && a.systemMode === "light")
    return r("light");
  if (a.mode === "dark" || a.mode === "system" && a.systemMode === "dark")
    return r("dark");
}
function xx(a) {
  return Qg(a, (r) => {
    if (r === "light")
      return a.lightColorScheme;
    if (r === "dark")
      return a.darkColorScheme;
  });
}
function Ex(a) {
  const {
    defaultMode: r = "light",
    defaultLightColorScheme: i,
    defaultDarkColorScheme: s,
    supportedColorSchemes: c = [],
    modeStorageKey: f = Qf,
    colorSchemeStorageKey: d = Zf,
    storageWindow: m = typeof window > "u" ? void 0 : window,
    storageManager: g = Sx,
    noSsr: h = !1
  } = a, b = c.join(","), x = c.length > 1, A = E.useMemo(() => g?.({
    key: f,
    storageWindow: m
  }), [g, f, m]), M = E.useMemo(() => g?.({
    key: `${d}-light`,
    storageWindow: m
  }), [g, d, m]), T = E.useMemo(() => g?.({
    key: `${d}-dark`,
    storageWindow: m
  }), [g, d, m]), [S, z] = E.useState(() => {
    const Z = A?.get(r) || r, W = M?.get(i) || i, ae = T?.get(s) || s;
    return {
      mode: Z,
      systemMode: N0(Z),
      lightColorScheme: W,
      darkColorScheme: ae
    };
  }), [U, q] = E.useState(h || !x);
  E.useEffect(() => {
    q(!0);
  }, []);
  const N = xx(S), D = E.useCallback((Z) => {
    z((W) => {
      if (Z === W.mode)
        return W;
      const ae = Z ?? r;
      return A?.set(ae), {
        ...W,
        mode: ae,
        systemMode: N0(ae)
      };
    });
  }, [A, r]), w = E.useCallback((Z) => {
    Z ? typeof Z == "string" ? Z && !b.includes(Z) ? console.error(`\`${Z}\` does not exist in \`theme.colorSchemes\`.`) : z((W) => {
      const ae = {
        ...W
      };
      return Qg(W, (le) => {
        le === "light" && (M?.set(Z), ae.lightColorScheme = Z), le === "dark" && (T?.set(Z), ae.darkColorScheme = Z);
      }), ae;
    }) : z((W) => {
      const ae = {
        ...W
      }, le = Z.light === null ? i : Z.light, v = Z.dark === null ? s : Z.dark;
      return le && (b.includes(le) ? (ae.lightColorScheme = le, M?.set(le)) : console.error(`\`${le}\` does not exist in \`theme.colorSchemes\`.`)), v && (b.includes(v) ? (ae.darkColorScheme = v, T?.set(v)) : console.error(`\`${v}\` does not exist in \`theme.colorSchemes\`.`)), ae;
    }) : z((W) => (M?.set(i), T?.set(s), {
      ...W,
      lightColorScheme: i,
      darkColorScheme: s
    }));
  }, [b, M, T, i, s]), k = E.useCallback((Z) => {
    S.mode === "system" && z((W) => {
      const ae = Z?.matches ? "dark" : "light";
      return W.systemMode === ae ? W : {
        ...W,
        systemMode: ae
      };
    });
  }, [S.mode]), X = E.useRef(k);
  return X.current = k, E.useEffect(() => {
    if (typeof window.matchMedia != "function" || !x)
      return;
    const Z = (...ae) => X.current(...ae), W = window.matchMedia("(prefers-color-scheme: dark)");
    return W.addListener(Z), Z(W), () => {
      W.removeListener(Z);
    };
  }, [x]), E.useEffect(() => {
    if (x) {
      const Z = A?.subscribe((le) => {
        (!le || ["light", "dark", "system"].includes(le)) && D(le || r);
      }) || ef, W = M?.subscribe((le) => {
        (!le || b.match(le)) && w({
          light: le
        });
      }) || ef, ae = T?.subscribe((le) => {
        (!le || b.match(le)) && w({
          dark: le
        });
      }) || ef;
      return () => {
        Z(), W(), ae();
      };
    }
  }, [w, D, b, r, m, x, A, M, T]), {
    ...S,
    mode: U ? S.mode : void 0,
    systemMode: U ? S.systemMode : void 0,
    colorScheme: U ? N : void 0,
    setMode: D,
    setColorScheme: w
  };
}
const Tx = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Cx(a) {
  const {
    themeId: r,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: i = {},
    modeStorageKey: s = Qf,
    colorSchemeStorageKey: c = Zf,
    disableTransitionOnChange: f = !1,
    defaultColorScheme: d,
    resolveTheme: m
  } = a, g = {
    allColorSchemes: [],
    colorScheme: void 0,
    darkColorScheme: void 0,
    lightColorScheme: void 0,
    mode: void 0,
    setColorScheme: () => {
    },
    setMode: () => {
    },
    systemMode: void 0
  }, h = /* @__PURE__ */ E.createContext(void 0), b = () => E.useContext(h) || g, x = {}, A = {};
  function M(U) {
    const {
      children: q,
      theme: N,
      modeStorageKey: D = s,
      colorSchemeStorageKey: w = c,
      disableTransitionOnChange: k = f,
      storageManager: X,
      storageWindow: Z = typeof window > "u" ? void 0 : window,
      documentNode: W = typeof document > "u" ? void 0 : document,
      colorSchemeNode: ae = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: le = !1,
      disableStyleSheetGeneration: v = !1,
      defaultMode: ee = "system",
      forceThemeRerender: Y = !1,
      noSsr: G
    } = U, O = E.useRef(!1), Q = Kf(), ie = E.useContext(h), te = !!ie && !le, C = E.useMemo(() => N || (typeof i == "function" ? i() : i), [N]), V = C[r], re = V || C, {
      colorSchemes: ne = x,
      components: oe = A,
      cssVarPrefix: ce
    } = re, ue = Object.keys(ne).filter((lt) => !!ne[lt]).join(","), Ce = E.useMemo(() => ue.split(","), [ue]), be = typeof d == "string" ? d : d.light, ze = typeof d == "string" ? d : d.dark, ye = ne[be] && ne[ze] ? ee : ne[re.defaultColorScheme]?.palette?.mode || re.palette?.mode, {
      mode: Re,
      setMode: _e,
      systemMode: mt,
      lightColorScheme: Se,
      darkColorScheme: qe,
      colorScheme: Nt,
      setColorScheme: Ye
    } = Ex({
      supportedColorSchemes: Ce,
      defaultLightColorScheme: be,
      defaultDarkColorScheme: ze,
      modeStorageKey: D,
      colorSchemeStorageKey: w,
      defaultMode: ye,
      storageManager: X,
      storageWindow: Z,
      noSsr: G
    });
    let at = Re, nt = Nt;
    te && (at = ie.mode, nt = ie.colorScheme);
    let st = nt || re.defaultColorScheme;
    re.vars && !Y && (st = re.defaultColorScheme);
    const Qe = E.useMemo(() => {
      const lt = re.generateThemeVars?.() || re.vars, xe = {
        ...re,
        components: oe,
        colorSchemes: ne,
        cssVarPrefix: ce,
        vars: lt
      };
      if (typeof xe.generateSpacing == "function" && (xe.spacing = xe.generateSpacing()), st) {
        const Ze = ne[st];
        Ze && typeof Ze == "object" && Object.keys(Ze).forEach((Be) => {
          Ze[Be] && typeof Ze[Be] == "object" ? xe[Be] = {
            ...xe[Be],
            ...Ze[Be]
          } : xe[Be] = Ze[Be];
        });
      }
      return m ? m(xe) : xe;
    }, [re, st, oe, ne, ce]), fe = re.colorSchemeSelector;
    ca(() => {
      if (nt && ae && fe && fe !== "media") {
        const lt = fe;
        let xe = fe;
        if (lt === "class" && (xe = ".%s"), lt === "data" && (xe = "[data-%s]"), lt?.startsWith("data-") && !lt.includes("%s") && (xe = `[${lt}="%s"]`), xe.startsWith("."))
          ae.classList.remove(...Ce.map((Ze) => xe.substring(1).replace("%s", Ze))), ae.classList.add(xe.substring(1).replace("%s", nt));
        else {
          const Ze = xe.replace("%s", nt).match(/\[([^\]]+)\]/);
          if (Ze) {
            const [Be, Xt] = Ze[1].split("=");
            Xt || Ce.forEach((Pe) => {
              ae.removeAttribute(Be.replace(nt, Pe));
            }), ae.setAttribute(Be, Xt ? Xt.replace(/"|'/g, "") : "");
          } else
            ae.setAttribute(xe, nt);
        }
      }
    }, [nt, fe, ae, Ce]), E.useEffect(() => {
      let lt;
      if (k && O.current && W) {
        const xe = W.createElement("style");
        xe.appendChild(W.createTextNode(Tx)), W.head.appendChild(xe), window.getComputedStyle(W.body), lt = setTimeout(() => {
          W.head.removeChild(xe);
        }, 1);
      }
      return () => {
        clearTimeout(lt);
      };
    }, [nt, k, W]), E.useEffect(() => (O.current = !0, () => {
      O.current = !1;
    }), []);
    const en = E.useMemo(() => ({
      allColorSchemes: Ce,
      colorScheme: nt,
      darkColorScheme: qe,
      lightColorScheme: Se,
      mode: at,
      setColorScheme: Ye,
      setMode: _e,
      systemMode: mt
    }), [Ce, nt, qe, Se, at, Ye, _e, mt, Qe.colorSchemeSelector]);
    let ht = !0;
    (v || re.cssVariables === !1 || te && Q?.cssVarPrefix === ce) && (ht = !1);
    const Tn = /* @__PURE__ */ I.jsxs(E.Fragment, {
      children: [/* @__PURE__ */ I.jsx(Kg, {
        themeId: V ? r : void 0,
        theme: Qe,
        children: q
      }), ht && /* @__PURE__ */ I.jsx(_g, {
        styles: Qe.generateStyleSheets?.() || []
      })]
    });
    return te ? Tn : /* @__PURE__ */ I.jsx(h.Provider, {
      value: en,
      children: Tn
    });
  }
  const T = typeof d == "string" ? d : d.light, S = typeof d == "string" ? d : d.dark;
  return {
    CssVarsProvider: M,
    useColorScheme: b,
    getInitColorSchemeScript: (U) => vx({
      colorSchemeStorageKey: c,
      defaultLightColorScheme: T,
      defaultDarkColorScheme: S,
      modeStorageKey: s,
      ...U
    })
  };
}
function Rx(a = "") {
  function r(...s) {
    if (!s.length)
      return "";
    const c = s[0];
    return typeof c == "string" && !c.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${a ? `${a}-` : ""}${c}${r(...s.slice(1))})` : `, ${c}`;
  }
  return (s, ...c) => `var(--${a ? `${a}-` : ""}${s}${r(...c)})`;
}
const B0 = (a, r, i, s = []) => {
  let c = a;
  r.forEach((f, d) => {
    d === r.length - 1 ? Array.isArray(c) ? c[Number(f)] = i : c && typeof c == "object" && (c[f] = i) : c && typeof c == "object" && (c[f] || (c[f] = s.includes(f) ? [] : {}), c = c[f]);
  });
}, Ax = (a, r, i) => {
  function s(c, f = [], d = []) {
    Object.entries(c).forEach(([m, g]) => {
      (!i || i && !i([...f, m])) && g != null && (typeof g == "object" && Object.keys(g).length > 0 ? s(g, [...f, m], Array.isArray(g) ? [...d, m] : d) : r([...f, m], g, d));
    });
  }
  s(a);
}, Mx = (a, r) => typeof r == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((s) => a.includes(s)) || a[a.length - 1].toLowerCase().includes("opacity") ? r : `${r}px` : r;
function tf(a, r) {
  const {
    prefix: i,
    shouldSkipGeneratingVar: s
  } = r || {}, c = {}, f = {}, d = {};
  return Ax(
    a,
    (m, g, h) => {
      if ((typeof g == "string" || typeof g == "number") && (!s || !s(m, g))) {
        const b = `--${i ? `${i}-` : ""}${m.join("-")}`, x = Mx(m, g);
        Object.assign(c, {
          [b]: x
        }), B0(f, m, `var(${b})`, h), B0(d, m, `var(${b}, ${x})`, h);
      }
    },
    (m) => m[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: c,
    vars: f,
    varsWithDefaults: d
  };
}
function Ox(a, r = {}) {
  const {
    getSelector: i = U,
    disableCssColorScheme: s,
    colorSchemeSelector: c,
    enableContrastVars: f
  } = r, {
    colorSchemes: d = {},
    components: m,
    defaultColorScheme: g = "light",
    ...h
  } = a, {
    vars: b,
    css: x,
    varsWithDefaults: A
  } = tf(h, r);
  let M = A;
  const T = {}, {
    [g]: S,
    ...z
  } = d;
  if (Object.entries(z || {}).forEach(([D, w]) => {
    const {
      vars: k,
      css: X,
      varsWithDefaults: Z
    } = tf(w, r);
    M = Vt(M, Z), T[D] = {
      css: X,
      vars: k
    };
  }), S) {
    const {
      css: D,
      vars: w,
      varsWithDefaults: k
    } = tf(S, r);
    M = Vt(M, k), T[g] = {
      css: D,
      vars: w
    };
  }
  function U(D, w) {
    let k = c;
    if (c === "class" && (k = ".%s"), c === "data" && (k = "[data-%s]"), c?.startsWith("data-") && !c.includes("%s") && (k = `[${c}="%s"]`), D) {
      if (k === "media")
        return a.defaultColorScheme === D ? ":root" : {
          [`@media (prefers-color-scheme: ${d[D]?.palette?.mode || D})`]: {
            ":root": w
          }
        };
      if (k)
        return a.defaultColorScheme === D ? `:root, ${k.replace("%s", String(D))}` : k.replace("%s", String(D));
    }
    return ":root";
  }
  return {
    vars: M,
    generateThemeVars: () => {
      let D = {
        ...b
      };
      return Object.entries(T).forEach(([, {
        vars: w
      }]) => {
        D = Vt(D, w);
      }), D;
    },
    generateStyleSheets: () => {
      const D = [], w = a.defaultColorScheme || "light";
      function k(W, ae) {
        Object.keys(ae).length && D.push(typeof W == "string" ? {
          [W]: {
            ...ae
          }
        } : W);
      }
      k(i(void 0, {
        ...x
      }), x);
      const {
        [w]: X,
        ...Z
      } = T;
      if (X) {
        const {
          css: W
        } = X, ae = d[w]?.palette?.mode, le = !s && ae ? {
          colorScheme: ae,
          ...W
        } : {
          ...W
        };
        k(i(w, {
          ...le
        }), le);
      }
      return Object.entries(Z).forEach(([W, {
        css: ae
      }]) => {
        const le = d[W]?.palette?.mode, v = !s && le ? {
          colorScheme: le,
          ...ae
        } : {
          ...ae
        };
        k(i(W, {
          ...v
        }), v);
      }), f && D.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), D;
    }
  };
}
function wx(a) {
  return function(i) {
    return a === "media" ? `@media (prefers-color-scheme: ${i})` : a ? a.startsWith("data-") && !a.includes("%s") ? `[${a}="${i}"] &` : a === "class" ? `.${i} &` : a === "data" ? `[data-${i}] &` : `${a.replace("%s", i)} &` : "&";
  };
}
function dt(a, r, i = void 0) {
  const s = {};
  for (const c in a) {
    const f = a[c];
    let d = "", m = !0;
    for (let g = 0; g < f.length; g += 1) {
      const h = f[g];
      h && (d += (m === !0 ? "" : " ") + r(h), m = !1, i && i[h] && (d += " " + i[h]));
    }
    s[c] = d;
  }
  return s;
}
function nf(a, r) {
  return /* @__PURE__ */ E.isValidElement(a) && r.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    a.type.muiName ?? a.type?._payload?.value?.muiName
  ) !== -1;
}
function Zg() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: Ri.white,
      default: Ri.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const Pg = Zg();
function Fg() {
  return {
    text: {
      primary: Ri.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: Ri.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const gf = Fg();
function U0(a, r, i, s) {
  const c = s.light || s, f = s.dark || s * 1.5;
  a[r] || (a.hasOwnProperty(i) ? a[r] = a[i] : r === "light" ? a.light = Cs(a.main, c) : r === "dark" && (a.dark = Ts(a.main, f)));
}
function k0(a, r, i, s, c) {
  const f = c.light || c, d = c.dark || c * 1.5;
  r[i] || (r.hasOwnProperty(s) ? r[i] = r[s] : i === "light" ? r.light = `color-mix(in ${a}, ${r.main}, #fff ${(f * 100).toFixed(0)}%)` : i === "dark" && (r.dark = `color-mix(in ${a}, ${r.main}, #000 ${(d * 100).toFixed(0)}%)`));
}
function zx(a = "light") {
  return a === "dark" ? {
    main: tr[200],
    light: tr[50],
    dark: tr[400]
  } : {
    main: tr[700],
    light: tr[400],
    dark: tr[800]
  };
}
function _x(a = "light") {
  return a === "dark" ? {
    main: er[200],
    light: er[50],
    dark: er[400]
  } : {
    main: er[500],
    light: er[300],
    dark: er[700]
  };
}
function Dx(a = "light") {
  return a === "dark" ? {
    main: ol[500],
    light: ol[300],
    dark: ol[700]
  } : {
    main: ol[700],
    light: ol[400],
    dark: ol[800]
  };
}
function Nx(a = "light") {
  return a === "dark" ? {
    main: nr[400],
    light: nr[300],
    dark: nr[700]
  } : {
    main: nr[700],
    light: nr[500],
    dark: nr[900]
  };
}
function Bx(a = "light") {
  return a === "dark" ? {
    main: ar[400],
    light: ar[300],
    dark: ar[700]
  } : {
    main: ar[800],
    light: ar[500],
    dark: ar[900]
  };
}
function Ux(a = "light") {
  return a === "dark" ? {
    main: di[400],
    light: di[300],
    dark: di[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: di[500],
    dark: di[900]
  };
}
function kx(a) {
  return `oklch(from ${a} var(--__l) 0 h / var(--__a))`;
}
function Pf(a) {
  const {
    mode: r = "light",
    contrastThreshold: i = 3,
    tonalOffset: s = 0.2,
    colorSpace: c,
    ...f
  } = a, d = a.primary || zx(r), m = a.secondary || _x(r), g = a.error || Dx(r), h = a.info || Nx(r), b = a.success || Bx(r), x = a.warning || Ux(r);
  function A(z) {
    return c ? kx(z) : nx(z, gf.text.primary) >= i ? gf.text.primary : Pg.text.primary;
  }
  const M = ({
    color: z,
    name: U,
    mainShade: q = 500,
    lightShade: N = 300,
    darkShade: D = 700
  }) => {
    if (z = {
      ...z
    }, !z.main && z[q] && (z.main = z[q]), !z.hasOwnProperty("main"))
      throw new Error(sa(11, U ? ` (${U})` : "", q));
    if (typeof z.main != "string")
      throw new Error(sa(12, U ? ` (${U})` : "", JSON.stringify(z.main)));
    return c ? (k0(c, z, "light", N, s), k0(c, z, "dark", D, s)) : (U0(z, "light", N, s), U0(z, "dark", D, s)), z.contrastText || (z.contrastText = A(z.main)), z;
  };
  let T;
  return r === "light" ? T = Zg() : r === "dark" && (T = Fg()), Vt({
    // A collection of common colors.
    common: {
      ...Ri
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: M({
      color: d,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: M({
      color: m,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: M({
      color: g,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: M({
      color: x,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: M({
      color: h,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: M({
      color: b,
      name: "success"
    }),
    // The grey colors.
    grey: D1,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: i,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: A,
    // Generate a rich color object.
    augmentColor: M,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: s,
    // The light and dark mode object.
    ...T
  }, f);
}
function Hx(a) {
  const r = {};
  return Object.entries(a).forEach((s) => {
    const [c, f] = s;
    typeof f == "object" && (r[c] = `${f.fontStyle ? `${f.fontStyle} ` : ""}${f.fontVariant ? `${f.fontVariant} ` : ""}${f.fontWeight ? `${f.fontWeight} ` : ""}${f.fontStretch ? `${f.fontStretch} ` : ""}${f.fontSize || ""}${f.lineHeight ? `/${f.lineHeight} ` : ""}${f.fontFamily || ""}`);
  }), r;
}
function Lx(a, r) {
  return {
    toolbar: {
      minHeight: 56,
      [a.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [a.up("sm")]: {
        minHeight: 64
      }
    },
    ...r
  };
}
function jx(a) {
  return Math.round(a * 1e5) / 1e5;
}
const H0 = {
  textTransform: "uppercase"
}, L0 = '"Roboto", "Helvetica", "Arial", sans-serif';
function Wg(a, r) {
  const {
    fontFamily: i = L0,
    // The default font size of the Material Specification.
    fontSize: s = 14,
    // px
    fontWeightLight: c = 300,
    fontWeightRegular: f = 400,
    fontWeightMedium: d = 500,
    fontWeightBold: m = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: g = 16,
    // Apply the CSS properties to all the variants.
    allVariants: h,
    pxToRem: b,
    ...x
  } = typeof r == "function" ? r(a) : r, A = s / 14, M = b || ((z) => `${z / g * A}rem`), T = (z, U, q, N, D) => ({
    fontFamily: i,
    fontWeight: z,
    fontSize: M(U),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: q,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...i === L0 ? {
      letterSpacing: `${jx(N / U)}em`
    } : {},
    ...D,
    ...h
  }), S = {
    h1: T(c, 96, 1.167, -1.5),
    h2: T(c, 60, 1.2, -0.5),
    h3: T(f, 48, 1.167, 0),
    h4: T(f, 34, 1.235, 0.25),
    h5: T(f, 24, 1.334, 0),
    h6: T(d, 20, 1.6, 0.15),
    subtitle1: T(f, 16, 1.75, 0.15),
    subtitle2: T(d, 14, 1.57, 0.1),
    body1: T(f, 16, 1.5, 0.15),
    body2: T(f, 14, 1.43, 0.15),
    button: T(d, 14, 1.75, 0.4, H0),
    caption: T(f, 12, 1.66, 0.4),
    overline: T(f, 12, 2.66, 1, H0),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Vt({
    htmlFontSize: g,
    pxToRem: M,
    fontFamily: i,
    fontSize: s,
    fontWeightLight: c,
    fontWeightRegular: f,
    fontWeightMedium: d,
    fontWeightBold: m,
    ...S
  }, x, {
    clone: !1
    // No need to clone deep
  });
}
const $x = 0.2, qx = 0.14, Yx = 0.12;
function it(...a) {
  return [`${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px rgba(0,0,0,${$x})`, `${a[4]}px ${a[5]}px ${a[6]}px ${a[7]}px rgba(0,0,0,${qx})`, `${a[8]}px ${a[9]}px ${a[10]}px ${a[11]}px rgba(0,0,0,${Yx})`].join(",");
}
const Gx = ["none", it(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), it(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), it(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), it(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), it(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), it(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), it(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), it(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), it(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), it(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), it(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), it(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), it(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), it(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), it(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), it(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), it(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), it(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), it(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), it(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), it(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), it(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), it(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), it(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Vx = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Xx = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function j0(a) {
  return `${Math.round(a)}ms`;
}
function Kx(a) {
  if (!a)
    return 0;
  const r = a / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function Qx(a) {
  const r = {
    ...Vx,
    ...a.easing
  }, i = {
    ...Xx,
    ...a.duration
  };
  return {
    getAutoHeightDuration: Kx,
    create: (c = ["all"], f = {}) => {
      const {
        duration: d = i.standard,
        easing: m = r.easeInOut,
        delay: g = 0,
        ...h
      } = f;
      return (Array.isArray(c) ? c : [c]).map((b) => `${b} ${typeof d == "string" ? d : j0(d)} ${m} ${typeof g == "string" ? g : j0(g)}`).join(",");
    },
    ...a,
    easing: r,
    duration: i
  };
}
const Zx = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Px(a) {
  return Ln(a) || typeof a > "u" || typeof a == "string" || typeof a == "boolean" || typeof a == "number" || Array.isArray(a);
}
function Jg(a = {}) {
  const r = {
    ...a
  };
  function i(s) {
    const c = Object.entries(s);
    for (let f = 0; f < c.length; f++) {
      const [d, m] = c[f];
      !Px(m) || d.startsWith("unstable_") ? delete s[d] : Ln(m) && (s[d] = {
        ...m
      }, i(s[d]));
    }
  }
  return i(r), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function $0(a) {
  return typeof a == "number" ? `${(a * 100).toFixed(0)}%` : `calc((${a}) * 100%)`;
}
const Fx = (a) => {
  if (!Number.isNaN(+a))
    return +a;
  const r = a.match(/\d*\.?\d+/g);
  if (!r)
    return 0;
  let i = 0;
  for (let s = 0; s < r.length; s += 1)
    i += +r[s];
  return i;
};
function Wx(a) {
  Object.assign(a, {
    alpha(r, i) {
      const s = this || a;
      return s.colorSpace ? `oklch(from ${r} l c h / ${typeof i == "string" ? `calc(${i})` : i})` : s.vars ? `rgba(${r.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof i == "string" ? `calc(${i})` : i})` : os(r, Fx(i));
    },
    lighten(r, i) {
      const s = this || a;
      return s.colorSpace ? `color-mix(in ${s.colorSpace}, ${r}, #fff ${$0(i)})` : Cs(r, i);
    },
    darken(r, i) {
      const s = this || a;
      return s.colorSpace ? `color-mix(in ${s.colorSpace}, ${r}, #000 ${$0(i)})` : Ts(r, i);
    }
  });
}
function yf(a = {}, ...r) {
  const {
    breakpoints: i,
    mixins: s = {},
    spacing: c,
    palette: f = {},
    transitions: d = {},
    typography: m = {},
    shape: g,
    colorSpace: h,
    ...b
  } = a;
  if (a.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  a.generateThemeVars === void 0)
    throw new Error(sa(20));
  const x = Pf({
    ...f,
    colorSpace: h
  }), A = Yf(a);
  let M = Vt(A, {
    mixins: Lx(A.breakpoints, s),
    palette: x,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Gx.slice(),
    typography: Wg(x, m),
    transitions: Qx(d),
    zIndex: {
      ...Zx
    }
  });
  return M = Vt(M, b), M = r.reduce((T, S) => Vt(T, S), M), M.unstable_sxConfig = {
    ...Ni,
    ...b?.unstable_sxConfig
  }, M.unstable_sx = function(S) {
    return ja({
      sx: S,
      theme: this
    });
  }, M.toRuntimeSource = Jg, Wx(M), M;
}
function vf(a) {
  let r;
  return a < 1 ? r = 5.11916 * a ** 2 : r = 4.5 * Math.log(a + 1) + 2, Math.round(r * 10) / 1e3;
}
const Jx = [...Array(25)].map((a, r) => {
  if (r === 0)
    return "none";
  const i = vf(r);
  return `linear-gradient(rgba(255 255 255 / ${i}), rgba(255 255 255 / ${i}))`;
});
function Ig(a) {
  return {
    inputPlaceholder: a === "dark" ? 0.5 : 0.42,
    inputUnderline: a === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: a === "dark" ? 0.2 : 0.12,
    switchTrack: a === "dark" ? 0.3 : 0.38
  };
}
function ey(a) {
  return a === "dark" ? Jx : [];
}
function Ix(a) {
  const {
    palette: r = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: i,
    overlays: s,
    colorSpace: c,
    ...f
  } = a, d = Pf({
    ...r,
    colorSpace: c
  });
  return {
    palette: d,
    opacity: {
      ...Ig(d.mode),
      ...i
    },
    overlays: s || ey(d.mode),
    ...f
  };
}
function e2(a) {
  return !!a[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!a[0].match(/sxConfig$/) || // ends with sxConfig
  a[0] === "palette" && !!a[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const t2 = (a) => [...[...Array(25)].map((r, i) => `--${a ? `${a}-` : ""}overlays-${i}`), `--${a ? `${a}-` : ""}palette-AppBar-darkBg`, `--${a ? `${a}-` : ""}palette-AppBar-darkColor`], n2 = (a) => (r, i) => {
  const s = a.rootSelector || ":root", c = a.colorSchemeSelector;
  let f = c;
  if (c === "class" && (f = ".%s"), c === "data" && (f = "[data-%s]"), c?.startsWith("data-") && !c.includes("%s") && (f = `[${c}="%s"]`), a.defaultColorScheme === r) {
    if (r === "dark") {
      const d = {};
      return t2(a.cssVarPrefix).forEach((m) => {
        d[m] = i[m], delete i[m];
      }), f === "media" ? {
        [s]: i,
        "@media (prefers-color-scheme: dark)": {
          [s]: d
        }
      } : f ? {
        [f.replace("%s", r)]: d,
        [`${s}, ${f.replace("%s", r)}`]: i
      } : {
        [s]: {
          ...i,
          ...d
        }
      };
    }
    if (f && f !== "media")
      return `${s}, ${f.replace("%s", String(r))}`;
  } else if (r) {
    if (f === "media")
      return {
        [`@media (prefers-color-scheme: ${String(r)})`]: {
          [s]: i
        }
      };
    if (f)
      return f.replace("%s", String(r));
  }
  return s;
};
function a2(a, r) {
  r.forEach((i) => {
    a[i] || (a[i] = {});
  });
}
function K(a, r, i) {
  !a[r] && i && (a[r] = i);
}
function yi(a) {
  return typeof a != "string" || !a.startsWith("hsl") ? a : Yg(a);
}
function ia(a, r) {
  `${r}Channel` in a || (a[`${r}Channel`] = gi(yi(a[r])));
}
function l2(a) {
  return typeof a == "number" ? `${a}px` : typeof a == "string" || typeof a == "function" || Array.isArray(a) ? a : "8px";
}
const Nn = (a) => {
  try {
    return a();
  } catch {
  }
}, r2 = (a = "mui") => Rx(a);
function af(a, r, i, s, c) {
  if (!i)
    return;
  i = i === !0 ? {} : i;
  const f = c === "dark" ? "dark" : "light";
  if (!s) {
    r[c] = Ix({
      ...i,
      palette: {
        mode: f,
        ...i?.palette
      },
      colorSpace: a
    });
    return;
  }
  const {
    palette: d,
    ...m
  } = yf({
    ...s,
    palette: {
      mode: f,
      ...i?.palette
    },
    colorSpace: a
  });
  return r[c] = {
    ...i,
    palette: d,
    opacity: {
      ...Ig(f),
      ...i?.opacity
    },
    overlays: i?.overlays || ey(f)
  }, m;
}
function i2(a = {}, ...r) {
  const {
    colorSchemes: i = {
      light: !0
    },
    defaultColorScheme: s,
    disableCssColorScheme: c = !1,
    cssVarPrefix: f = "mui",
    nativeColor: d = !1,
    shouldSkipGeneratingVar: m = e2,
    colorSchemeSelector: g = i.light && i.dark ? "media" : void 0,
    rootSelector: h = ":root",
    ...b
  } = a, x = Object.keys(i)[0], A = s || (i.light && x !== "light" ? "light" : x), M = r2(f), {
    [A]: T,
    light: S,
    dark: z,
    ...U
  } = i, q = {
    ...U
  };
  let N = T;
  if ((A === "dark" && !("dark" in i) || A === "light" && !("light" in i)) && (N = !0), !N)
    throw new Error(sa(21, A));
  let D;
  d && (D = "oklch");
  const w = af(D, q, N, b, A);
  S && !q.light && af(D, q, S, void 0, "light"), z && !q.dark && af(D, q, z, void 0, "dark");
  let k = {
    defaultColorScheme: A,
    ...w,
    cssVarPrefix: f,
    colorSchemeSelector: g,
    rootSelector: h,
    getCssVar: M,
    colorSchemes: q,
    font: {
      ...Hx(w.typography),
      ...w.font
    },
    spacing: l2(b.spacing)
  };
  Object.keys(k.colorSchemes).forEach((le) => {
    const v = k.colorSchemes[le].palette, ee = (G) => {
      const O = G.split("-"), Q = O[1], ie = O[2];
      return M(G, v[Q][ie]);
    };
    v.mode === "light" && (K(v.common, "background", "#fff"), K(v.common, "onBackground", "#000")), v.mode === "dark" && (K(v.common, "background", "#000"), K(v.common, "onBackground", "#fff"));
    function Y(G, O, Q) {
      if (D) {
        let ie;
        return G === rl && (ie = `transparent ${((1 - Q) * 100).toFixed(0)}%`), G === Xe && (ie = `#000 ${(Q * 100).toFixed(0)}%`), G === Ke && (ie = `#fff ${(Q * 100).toFixed(0)}%`), `color-mix(in ${D}, ${O}, ${ie})`;
      }
      return G(O, Q);
    }
    if (a2(v, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), v.mode === "light") {
      K(v.Alert, "errorColor", Y(Xe, v.error.light, 0.6)), K(v.Alert, "infoColor", Y(Xe, v.info.light, 0.6)), K(v.Alert, "successColor", Y(Xe, v.success.light, 0.6)), K(v.Alert, "warningColor", Y(Xe, v.warning.light, 0.6)), K(v.Alert, "errorFilledBg", ee("palette-error-main")), K(v.Alert, "infoFilledBg", ee("palette-info-main")), K(v.Alert, "successFilledBg", ee("palette-success-main")), K(v.Alert, "warningFilledBg", ee("palette-warning-main")), K(v.Alert, "errorFilledColor", Nn(() => v.getContrastText(v.error.main))), K(v.Alert, "infoFilledColor", Nn(() => v.getContrastText(v.info.main))), K(v.Alert, "successFilledColor", Nn(() => v.getContrastText(v.success.main))), K(v.Alert, "warningFilledColor", Nn(() => v.getContrastText(v.warning.main))), K(v.Alert, "errorStandardBg", Y(Ke, v.error.light, 0.9)), K(v.Alert, "infoStandardBg", Y(Ke, v.info.light, 0.9)), K(v.Alert, "successStandardBg", Y(Ke, v.success.light, 0.9)), K(v.Alert, "warningStandardBg", Y(Ke, v.warning.light, 0.9)), K(v.Alert, "errorIconColor", ee("palette-error-main")), K(v.Alert, "infoIconColor", ee("palette-info-main")), K(v.Alert, "successIconColor", ee("palette-success-main")), K(v.Alert, "warningIconColor", ee("palette-warning-main")), K(v.AppBar, "defaultBg", ee("palette-grey-100")), K(v.Avatar, "defaultBg", ee("palette-grey-400")), K(v.Button, "inheritContainedBg", ee("palette-grey-300")), K(v.Button, "inheritContainedHoverBg", ee("palette-grey-A100")), K(v.Chip, "defaultBorder", ee("palette-grey-400")), K(v.Chip, "defaultAvatarColor", ee("palette-grey-700")), K(v.Chip, "defaultIconColor", ee("palette-grey-700")), K(v.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), K(v.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), K(v.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), K(v.LinearProgress, "primaryBg", Y(Ke, v.primary.main, 0.62)), K(v.LinearProgress, "secondaryBg", Y(Ke, v.secondary.main, 0.62)), K(v.LinearProgress, "errorBg", Y(Ke, v.error.main, 0.62)), K(v.LinearProgress, "infoBg", Y(Ke, v.info.main, 0.62)), K(v.LinearProgress, "successBg", Y(Ke, v.success.main, 0.62)), K(v.LinearProgress, "warningBg", Y(Ke, v.warning.main, 0.62)), K(v.Skeleton, "bg", D ? Y(rl, v.text.primary, 0.11) : `rgba(${ee("palette-text-primaryChannel")} / 0.11)`), K(v.Slider, "primaryTrack", Y(Ke, v.primary.main, 0.62)), K(v.Slider, "secondaryTrack", Y(Ke, v.secondary.main, 0.62)), K(v.Slider, "errorTrack", Y(Ke, v.error.main, 0.62)), K(v.Slider, "infoTrack", Y(Ke, v.info.main, 0.62)), K(v.Slider, "successTrack", Y(Ke, v.success.main, 0.62)), K(v.Slider, "warningTrack", Y(Ke, v.warning.main, 0.62));
      const G = D ? Y(Xe, v.background.default, 0.6825) : Qo(v.background.default, 0.8);
      K(v.SnackbarContent, "bg", G), K(v.SnackbarContent, "color", Nn(() => D ? gf.text.primary : v.getContrastText(G))), K(v.SpeedDialAction, "fabHoverBg", Qo(v.background.paper, 0.15)), K(v.StepConnector, "border", ee("palette-grey-400")), K(v.StepContent, "border", ee("palette-grey-400")), K(v.Switch, "defaultColor", ee("palette-common-white")), K(v.Switch, "defaultDisabledColor", ee("palette-grey-100")), K(v.Switch, "primaryDisabledColor", Y(Ke, v.primary.main, 0.62)), K(v.Switch, "secondaryDisabledColor", Y(Ke, v.secondary.main, 0.62)), K(v.Switch, "errorDisabledColor", Y(Ke, v.error.main, 0.62)), K(v.Switch, "infoDisabledColor", Y(Ke, v.info.main, 0.62)), K(v.Switch, "successDisabledColor", Y(Ke, v.success.main, 0.62)), K(v.Switch, "warningDisabledColor", Y(Ke, v.warning.main, 0.62)), K(v.TableCell, "border", Y(Ke, Y(rl, v.divider, 1), 0.88)), K(v.Tooltip, "bg", Y(rl, v.grey[700], 0.92));
    }
    if (v.mode === "dark") {
      K(v.Alert, "errorColor", Y(Ke, v.error.light, 0.6)), K(v.Alert, "infoColor", Y(Ke, v.info.light, 0.6)), K(v.Alert, "successColor", Y(Ke, v.success.light, 0.6)), K(v.Alert, "warningColor", Y(Ke, v.warning.light, 0.6)), K(v.Alert, "errorFilledBg", ee("palette-error-dark")), K(v.Alert, "infoFilledBg", ee("palette-info-dark")), K(v.Alert, "successFilledBg", ee("palette-success-dark")), K(v.Alert, "warningFilledBg", ee("palette-warning-dark")), K(v.Alert, "errorFilledColor", Nn(() => v.getContrastText(v.error.dark))), K(v.Alert, "infoFilledColor", Nn(() => v.getContrastText(v.info.dark))), K(v.Alert, "successFilledColor", Nn(() => v.getContrastText(v.success.dark))), K(v.Alert, "warningFilledColor", Nn(() => v.getContrastText(v.warning.dark))), K(v.Alert, "errorStandardBg", Y(Xe, v.error.light, 0.9)), K(v.Alert, "infoStandardBg", Y(Xe, v.info.light, 0.9)), K(v.Alert, "successStandardBg", Y(Xe, v.success.light, 0.9)), K(v.Alert, "warningStandardBg", Y(Xe, v.warning.light, 0.9)), K(v.Alert, "errorIconColor", ee("palette-error-main")), K(v.Alert, "infoIconColor", ee("palette-info-main")), K(v.Alert, "successIconColor", ee("palette-success-main")), K(v.Alert, "warningIconColor", ee("palette-warning-main")), K(v.AppBar, "defaultBg", ee("palette-grey-900")), K(v.AppBar, "darkBg", ee("palette-background-paper")), K(v.AppBar, "darkColor", ee("palette-text-primary")), K(v.Avatar, "defaultBg", ee("palette-grey-600")), K(v.Button, "inheritContainedBg", ee("palette-grey-800")), K(v.Button, "inheritContainedHoverBg", ee("palette-grey-700")), K(v.Chip, "defaultBorder", ee("palette-grey-700")), K(v.Chip, "defaultAvatarColor", ee("palette-grey-300")), K(v.Chip, "defaultIconColor", ee("palette-grey-300")), K(v.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), K(v.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), K(v.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), K(v.LinearProgress, "primaryBg", Y(Xe, v.primary.main, 0.5)), K(v.LinearProgress, "secondaryBg", Y(Xe, v.secondary.main, 0.5)), K(v.LinearProgress, "errorBg", Y(Xe, v.error.main, 0.5)), K(v.LinearProgress, "infoBg", Y(Xe, v.info.main, 0.5)), K(v.LinearProgress, "successBg", Y(Xe, v.success.main, 0.5)), K(v.LinearProgress, "warningBg", Y(Xe, v.warning.main, 0.5)), K(v.Skeleton, "bg", D ? Y(rl, v.text.primary, 0.13) : `rgba(${ee("palette-text-primaryChannel")} / 0.13)`), K(v.Slider, "primaryTrack", Y(Xe, v.primary.main, 0.5)), K(v.Slider, "secondaryTrack", Y(Xe, v.secondary.main, 0.5)), K(v.Slider, "errorTrack", Y(Xe, v.error.main, 0.5)), K(v.Slider, "infoTrack", Y(Xe, v.info.main, 0.5)), K(v.Slider, "successTrack", Y(Xe, v.success.main, 0.5)), K(v.Slider, "warningTrack", Y(Xe, v.warning.main, 0.5));
      const G = D ? Y(Ke, v.background.default, 0.985) : Qo(v.background.default, 0.98);
      K(v.SnackbarContent, "bg", G), K(v.SnackbarContent, "color", Nn(() => D ? Pg.text.primary : v.getContrastText(G))), K(v.SpeedDialAction, "fabHoverBg", Qo(v.background.paper, 0.15)), K(v.StepConnector, "border", ee("palette-grey-600")), K(v.StepContent, "border", ee("palette-grey-600")), K(v.Switch, "defaultColor", ee("palette-grey-300")), K(v.Switch, "defaultDisabledColor", ee("palette-grey-600")), K(v.Switch, "primaryDisabledColor", Y(Xe, v.primary.main, 0.55)), K(v.Switch, "secondaryDisabledColor", Y(Xe, v.secondary.main, 0.55)), K(v.Switch, "errorDisabledColor", Y(Xe, v.error.main, 0.55)), K(v.Switch, "infoDisabledColor", Y(Xe, v.info.main, 0.55)), K(v.Switch, "successDisabledColor", Y(Xe, v.success.main, 0.55)), K(v.Switch, "warningDisabledColor", Y(Xe, v.warning.main, 0.55)), K(v.TableCell, "border", Y(Xe, Y(rl, v.divider, 1), 0.68)), K(v.Tooltip, "bg", Y(rl, v.grey[700], 0.92));
    }
    ia(v.background, "default"), ia(v.background, "paper"), ia(v.common, "background"), ia(v.common, "onBackground"), ia(v, "divider"), Object.keys(v).forEach((G) => {
      const O = v[G];
      G !== "tonalOffset" && O && typeof O == "object" && (O.main && K(v[G], "mainChannel", gi(yi(O.main))), O.light && K(v[G], "lightChannel", gi(yi(O.light))), O.dark && K(v[G], "darkChannel", gi(yi(O.dark))), O.contrastText && K(v[G], "contrastTextChannel", gi(yi(O.contrastText))), G === "text" && (ia(v[G], "primary"), ia(v[G], "secondary")), G === "action" && (O.active && ia(v[G], "active"), O.selected && ia(v[G], "selected")));
    });
  }), k = r.reduce((le, v) => Vt(le, v), k);
  const X = {
    prefix: f,
    disableCssColorScheme: c,
    shouldSkipGeneratingVar: m,
    getSelector: n2(k),
    enableContrastVars: d
  }, {
    vars: Z,
    generateThemeVars: W,
    generateStyleSheets: ae
  } = Ox(k, X);
  return k.vars = Z, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([le, v]) => {
    k[le] = v;
  }), k.generateThemeVars = W, k.generateStyleSheets = ae, k.generateSpacing = function() {
    return kg(b.spacing, $f(this));
  }, k.getColorSchemeSelector = wx(g), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = m, k.unstable_sxConfig = {
    ...Ni,
    ...b?.unstable_sxConfig
  }, k.unstable_sx = function(v) {
    return ja({
      sx: v,
      theme: this
    });
  }, k.toRuntimeSource = Jg, k;
}
function q0(a, r, i) {
  a.colorSchemes && i && (a.colorSchemes[r] = {
    ...i !== !0 && i,
    palette: Pf({
      ...i === !0 ? {} : i.palette,
      mode: r
    })
    // cast type to skip module augmentation test
  });
}
function As(a = {}, ...r) {
  const {
    palette: i,
    cssVariables: s = !1,
    colorSchemes: c = i ? void 0 : {
      light: !0
    },
    defaultColorScheme: f = i?.mode,
    ...d
  } = a, m = f || "light", g = c?.[m], h = {
    ...c,
    ...i ? {
      [m]: {
        ...typeof g != "boolean" && g,
        palette: i
      }
    } : void 0
  };
  if (s === !1) {
    if (!("colorSchemes" in a))
      return yf(a, ...r);
    let b = i;
    "palette" in a || h[m] && (h[m] !== !0 ? b = h[m].palette : m === "dark" && (b = {
      mode: "dark"
    }));
    const x = yf({
      ...a,
      palette: b
    }, ...r);
    return x.defaultColorScheme = m, x.colorSchemes = h, x.palette.mode === "light" && (x.colorSchemes.light = {
      ...h.light !== !0 && h.light,
      palette: x.palette
    }, q0(x, "dark", h.dark)), x.palette.mode === "dark" && (x.colorSchemes.dark = {
      ...h.dark !== !0 && h.dark,
      palette: x.palette
    }, q0(x, "light", h.light)), x;
  }
  return !i && !("light" in h) && m === "light" && (h.light = !0), i2({
    ...d,
    colorSchemes: h,
    defaultColorScheme: m,
    ...typeof s != "boolean" && s
  }, ...r);
}
const Ff = As();
function Wf() {
  const a = Vf(Ff);
  return a[qn] || a;
}
function ty(a) {
  return a !== "ownerState" && a !== "theme" && a !== "sx" && a !== "as";
}
const Yn = (a) => ty(a) && a !== "classes", ve = ZS({
  themeId: qn,
  defaultTheme: Ff,
  rootShouldForwardProp: Yn
});
function o2({
  theme: a,
  ...r
}) {
  const i = qn in a ? a[qn] : void 0;
  return /* @__PURE__ */ I.jsx(Kg, {
    ...r,
    themeId: i ? qn : void 0,
    theme: i || a
  });
}
const Zo = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: s2
} = Cx({
  themeId: qn,
  // @ts-ignore ignore module augmentation tests
  theme: () => As({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Zo.colorSchemeStorageKey,
  modeStorageKey: Zo.modeStorageKey,
  defaultColorScheme: {
    light: Zo.defaultLightColorScheme,
    dark: Zo.defaultDarkColorScheme
  },
  resolveTheme: (a) => {
    const r = {
      ...a,
      typography: Wg(a.palette, a.typography)
    };
    return r.unstable_sx = function(s) {
      return ja({
        sx: s,
        theme: this
      });
    }, r;
  }
}), u2 = s2;
function c2({
  theme: a,
  ...r
}) {
  const i = E.useMemo(() => {
    if (typeof a == "function")
      return a;
    const s = qn in a ? a[qn] : a;
    return "colorSchemes" in s ? null : "vars" in s ? a : {
      ...a,
      vars: null
    };
  }, [a]);
  return i ? /* @__PURE__ */ I.jsx(o2, {
    theme: i,
    ...r
  }) : /* @__PURE__ */ I.jsx(u2, {
    theme: a,
    ...r
  });
}
function Y0(...a) {
  return a.reduce((r, i) => i == null ? r : function(...c) {
    r.apply(this, c), i.apply(this, c);
  }, () => {
  });
}
function f2(a) {
  return /* @__PURE__ */ I.jsx(Hg, {
    ...a,
    defaultTheme: Ff,
    themeId: qn
  });
}
function Jf(a) {
  return function(i) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ I.jsx(f2, {
        styles: typeof a == "function" ? (s) => a({
          theme: s,
          ...i
        }) : a
      })
    );
  };
}
const At = gx;
function pt(a) {
  return dx(a);
}
function d2(a) {
  return ft("MuiSvgIcon", a);
}
ot("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const p2 = (a) => {
  const {
    color: r,
    fontSize: i,
    classes: s
  } = a, c = {
    root: ["root", r !== "inherit" && `color${$e(r)}`, `fontSize${$e(i)}`]
  };
  return dt(c, d2, s);
}, m2 = ve("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, i.color !== "inherit" && r[`color${$e(i.color)}`], r[`fontSize${$e(i.fontSize)}`]];
  }
})(At(({
  theme: a
}) => ({
  userSelect: "none",
  width: "1em",
  height: "1em",
  display: "inline-block",
  flexShrink: 0,
  transition: a.transitions?.create?.("fill", {
    duration: (a.vars ?? a).transitions?.duration?.shorter
  }),
  variants: [
    {
      props: (r) => !r.hasSvgAsChild,
      style: {
        // the <svg> will define the property that has `currentColor`
        // for example heroicons uses fill="none" and stroke="currentColor"
        fill: "currentColor"
      }
    },
    {
      props: {
        fontSize: "inherit"
      },
      style: {
        fontSize: "inherit"
      }
    },
    {
      props: {
        fontSize: "small"
      },
      style: {
        fontSize: a.typography?.pxToRem?.(20) || "1.25rem"
      }
    },
    {
      props: {
        fontSize: "medium"
      },
      style: {
        fontSize: a.typography?.pxToRem?.(24) || "1.5rem"
      }
    },
    {
      props: {
        fontSize: "large"
      },
      style: {
        fontSize: a.typography?.pxToRem?.(35) || "2.1875rem"
      }
    },
    // TODO v5 deprecate color prop, v6 remove for sx
    ...Object.entries((a.vars ?? a).palette).filter(([, r]) => r && r.main).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        color: (a.vars ?? a).palette?.[r]?.main
      }
    })),
    {
      props: {
        color: "action"
      },
      style: {
        color: (a.vars ?? a).palette?.action?.active
      }
    },
    {
      props: {
        color: "disabled"
      },
      style: {
        color: (a.vars ?? a).palette?.action?.disabled
      }
    },
    {
      props: {
        color: "inherit"
      },
      style: {
        color: void 0
      }
    }
  ]
}))), bf = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const s = pt({
    props: r,
    name: "MuiSvgIcon"
  }), {
    children: c,
    className: f,
    color: d = "inherit",
    component: m = "svg",
    fontSize: g = "medium",
    htmlColor: h,
    inheritViewBox: b = !1,
    titleAccess: x,
    viewBox: A = "0 0 24 24",
    ...M
  } = s, T = /* @__PURE__ */ E.isValidElement(c) && c.type === "svg", S = {
    ...s,
    color: d,
    component: m,
    fontSize: g,
    instanceFontSize: r.fontSize,
    inheritViewBox: b,
    viewBox: A,
    hasSvgAsChild: T
  }, z = {};
  b || (z.viewBox = A);
  const U = p2(S);
  return /* @__PURE__ */ I.jsxs(m2, {
    as: m,
    className: we(U.root, f),
    focusable: "false",
    color: h,
    "aria-hidden": x ? void 0 : !0,
    role: x ? "img" : void 0,
    ref: i,
    ...z,
    ...M,
    ...T && c.props,
    ownerState: S,
    children: [T ? c.props.children : c, x ? /* @__PURE__ */ I.jsx("title", {
      children: x
    }) : null]
  });
});
bf.muiName = "SvgIcon";
function h2(a, r) {
  function i(s, c) {
    return /* @__PURE__ */ I.jsx(bf, {
      "data-testid": void 0,
      ref: c,
      ...s,
      children: a
    });
  }
  return i.muiName = bf.muiName, /* @__PURE__ */ E.memo(/* @__PURE__ */ E.forwardRef(i));
}
function ny(a, r = 166) {
  let i;
  function s(...c) {
    const f = () => {
      a.apply(this, c);
    };
    clearTimeout(i), i = setTimeout(f, r);
  }
  return s.clear = () => {
    clearTimeout(i);
  }, s;
}
function Mn(a) {
  return a && a.ownerDocument || document;
}
function fa(a) {
  return Mn(a).defaultView || window;
}
function G0(a, r) {
  typeof a == "function" ? a(r) : a && (a.current = r);
}
function V0(a) {
  const {
    controlled: r,
    default: i,
    name: s,
    state: c = "value"
  } = a, {
    current: f
  } = E.useRef(r !== void 0), [d, m] = E.useState(i), g = f ? r : d, h = E.useCallback((b) => {
    f || m(b);
  }, []);
  return [g, h];
}
function pl(a) {
  const r = E.useRef(a);
  return ca(() => {
    r.current = a;
  }), E.useRef((...i) => (
    // @ts-expect-error hide `this`
    (0, r.current)(...i)
  )).current;
}
function It(...a) {
  const r = E.useRef(void 0), i = E.useCallback((s) => {
    const c = a.map((f) => {
      if (f == null)
        return null;
      if (typeof f == "function") {
        const d = f, m = d(s);
        return typeof m == "function" ? m : () => {
          d(null);
        };
      }
      return f.current = s, () => {
        f.current = null;
      };
    });
    return () => {
      c.forEach((f) => f?.());
    };
  }, a);
  return E.useMemo(() => a.every((s) => s == null) ? null : (s) => {
    r.current && (r.current(), r.current = void 0), s != null && (r.current = i(s));
  }, a);
}
function g2(a, r) {
  const i = a.charCodeAt(2);
  return a[0] === "o" && a[1] === "n" && i >= 65 && i <= 90 && typeof r == "function";
}
function y2(a, r) {
  if (!a)
    return r;
  function i(d, m) {
    const g = {};
    return Object.keys(m).forEach((h) => {
      g2(h, m[h]) && typeof d[h] == "function" && (g[h] = (...b) => {
        d[h](...b), m[h](...b);
      });
    }), g;
  }
  if (typeof a == "function" || typeof r == "function")
    return (d) => {
      const m = typeof r == "function" ? r(d) : r, g = typeof a == "function" ? a({
        ...d,
        ...m
      }) : a, h = we(d?.className, m?.className, g?.className), b = i(g, m);
      return {
        ...m,
        ...g,
        ...b,
        ...!!h && {
          className: h
        },
        ...m?.style && g?.style && {
          style: {
            ...m.style,
            ...g.style
          }
        },
        ...m?.sx && g?.sx && {
          sx: [...Array.isArray(m.sx) ? m.sx : [m.sx], ...Array.isArray(g.sx) ? g.sx : [g.sx]]
        }
      };
    };
  const s = r, c = i(a, s), f = we(s?.className, a?.className);
  return {
    ...r,
    ...a,
    ...c,
    ...!!f && {
      className: f
    },
    ...s?.style && a?.style && {
      style: {
        ...s.style,
        ...a.style
      }
    },
    ...s?.sx && a?.sx && {
      sx: [...Array.isArray(s.sx) ? s.sx : [s.sx], ...Array.isArray(a.sx) ? a.sx : [a.sx]]
    }
  };
}
function ay(a, r) {
  if (a == null) return {};
  var i = {};
  for (var s in a) if ({}.hasOwnProperty.call(a, s)) {
    if (r.indexOf(s) !== -1) continue;
    i[s] = a[s];
  }
  return i;
}
function Sf(a, r) {
  return Sf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, s) {
    return i.__proto__ = s, i;
  }, Sf(a, r);
}
function ly(a, r) {
  a.prototype = Object.create(r.prototype), a.prototype.constructor = a, Sf(a, r);
}
var ry = wg();
const Po = /* @__PURE__ */ mg(ry), X0 = {
  disabled: !1
}, ss = jn.createContext(null);
var v2 = function(r) {
  return r.scrollTop;
}, vi = "unmounted", sl = "exited", ul = "entering", rr = "entered", xf = "exiting", Gn = /* @__PURE__ */ function(a) {
  ly(r, a);
  function r(s, c) {
    var f;
    f = a.call(this, s, c) || this;
    var d = c, m = d && !d.isMounting ? s.enter : s.appear, g;
    return f.appearStatus = null, s.in ? m ? (g = sl, f.appearStatus = ul) : g = rr : s.unmountOnExit || s.mountOnEnter ? g = vi : g = sl, f.state = {
      status: g
    }, f.nextCallback = null, f;
  }
  r.getDerivedStateFromProps = function(c, f) {
    var d = c.in;
    return d && f.status === vi ? {
      status: sl
    } : null;
  };
  var i = r.prototype;
  return i.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, i.componentDidUpdate = function(c) {
    var f = null;
    if (c !== this.props) {
      var d = this.state.status;
      this.props.in ? d !== ul && d !== rr && (f = ul) : (d === ul || d === rr) && (f = xf);
    }
    this.updateStatus(!1, f);
  }, i.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, i.getTimeouts = function() {
    var c = this.props.timeout, f, d, m;
    return f = d = m = c, c != null && typeof c != "number" && (f = c.exit, d = c.enter, m = c.appear !== void 0 ? c.appear : d), {
      exit: f,
      enter: d,
      appear: m
    };
  }, i.updateStatus = function(c, f) {
    if (c === void 0 && (c = !1), f !== null)
      if (this.cancelNextCallback(), f === ul) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var d = this.props.nodeRef ? this.props.nodeRef.current : Po.findDOMNode(this);
          d && v2(d);
        }
        this.performEnter(c);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === sl && this.setState({
      status: vi
    });
  }, i.performEnter = function(c) {
    var f = this, d = this.props.enter, m = this.context ? this.context.isMounting : c, g = this.props.nodeRef ? [m] : [Po.findDOMNode(this), m], h = g[0], b = g[1], x = this.getTimeouts(), A = m ? x.appear : x.enter;
    if (!c && !d || X0.disabled) {
      this.safeSetState({
        status: rr
      }, function() {
        f.props.onEntered(h);
      });
      return;
    }
    this.props.onEnter(h, b), this.safeSetState({
      status: ul
    }, function() {
      f.props.onEntering(h, b), f.onTransitionEnd(A, function() {
        f.safeSetState({
          status: rr
        }, function() {
          f.props.onEntered(h, b);
        });
      });
    });
  }, i.performExit = function() {
    var c = this, f = this.props.exit, d = this.getTimeouts(), m = this.props.nodeRef ? void 0 : Po.findDOMNode(this);
    if (!f || X0.disabled) {
      this.safeSetState({
        status: sl
      }, function() {
        c.props.onExited(m);
      });
      return;
    }
    this.props.onExit(m), this.safeSetState({
      status: xf
    }, function() {
      c.props.onExiting(m), c.onTransitionEnd(d.exit, function() {
        c.safeSetState({
          status: sl
        }, function() {
          c.props.onExited(m);
        });
      });
    });
  }, i.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, i.safeSetState = function(c, f) {
    f = this.setNextCallback(f), this.setState(c, f);
  }, i.setNextCallback = function(c) {
    var f = this, d = !0;
    return this.nextCallback = function(m) {
      d && (d = !1, f.nextCallback = null, c(m));
    }, this.nextCallback.cancel = function() {
      d = !1;
    }, this.nextCallback;
  }, i.onTransitionEnd = function(c, f) {
    this.setNextCallback(f);
    var d = this.props.nodeRef ? this.props.nodeRef.current : Po.findDOMNode(this), m = c == null && !this.props.addEndListener;
    if (!d || m) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var g = this.props.nodeRef ? [this.nextCallback] : [d, this.nextCallback], h = g[0], b = g[1];
      this.props.addEndListener(h, b);
    }
    c != null && setTimeout(this.nextCallback, c);
  }, i.render = function() {
    var c = this.state.status;
    if (c === vi)
      return null;
    var f = this.props, d = f.children;
    f.in, f.mountOnEnter, f.unmountOnExit, f.appear, f.enter, f.exit, f.timeout, f.addEndListener, f.onEnter, f.onEntering, f.onEntered, f.onExit, f.onExiting, f.onExited, f.nodeRef;
    var m = ay(f, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ jn.createElement(ss.Provider, {
        value: null
      }, typeof d == "function" ? d(c, m) : jn.cloneElement(jn.Children.only(d), m))
    );
  }, r;
}(jn.Component);
Gn.contextType = ss;
Gn.propTypes = {};
function lr() {
}
Gn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: lr,
  onEntering: lr,
  onEntered: lr,
  onExit: lr,
  onExiting: lr,
  onExited: lr
};
Gn.UNMOUNTED = vi;
Gn.EXITED = sl;
Gn.ENTERING = ul;
Gn.ENTERED = rr;
Gn.EXITING = xf;
function b2(a) {
  if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function If(a, r) {
  var i = function(f) {
    return r && E.isValidElement(f) ? r(f) : f;
  }, s = /* @__PURE__ */ Object.create(null);
  return a && E.Children.map(a, function(c) {
    return c;
  }).forEach(function(c) {
    s[c.key] = i(c);
  }), s;
}
function S2(a, r) {
  a = a || {}, r = r || {};
  function i(b) {
    return b in r ? r[b] : a[b];
  }
  var s = /* @__PURE__ */ Object.create(null), c = [];
  for (var f in a)
    f in r ? c.length && (s[f] = c, c = []) : c.push(f);
  var d, m = {};
  for (var g in r) {
    if (s[g])
      for (d = 0; d < s[g].length; d++) {
        var h = s[g][d];
        m[s[g][d]] = i(h);
      }
    m[g] = i(g);
  }
  for (d = 0; d < c.length; d++)
    m[c[d]] = i(c[d]);
  return m;
}
function dl(a, r, i) {
  return i[r] != null ? i[r] : a.props[r];
}
function x2(a, r) {
  return If(a.children, function(i) {
    return E.cloneElement(i, {
      onExited: r.bind(null, i),
      in: !0,
      appear: dl(i, "appear", a),
      enter: dl(i, "enter", a),
      exit: dl(i, "exit", a)
    });
  });
}
function E2(a, r, i) {
  var s = If(a.children), c = S2(r, s);
  return Object.keys(c).forEach(function(f) {
    var d = c[f];
    if (E.isValidElement(d)) {
      var m = f in r, g = f in s, h = r[f], b = E.isValidElement(h) && !h.props.in;
      g && (!m || b) ? c[f] = E.cloneElement(d, {
        onExited: i.bind(null, d),
        in: !0,
        exit: dl(d, "exit", a),
        enter: dl(d, "enter", a)
      }) : !g && m && !b ? c[f] = E.cloneElement(d, {
        in: !1
      }) : g && m && E.isValidElement(h) && (c[f] = E.cloneElement(d, {
        onExited: i.bind(null, d),
        in: h.props.in,
        exit: dl(d, "exit", a),
        enter: dl(d, "enter", a)
      }));
    }
  }), c;
}
var T2 = Object.values || function(a) {
  return Object.keys(a).map(function(r) {
    return a[r];
  });
}, C2 = {
  component: "div",
  childFactory: function(r) {
    return r;
  }
}, ed = /* @__PURE__ */ function(a) {
  ly(r, a);
  function r(s, c) {
    var f;
    f = a.call(this, s, c) || this;
    var d = f.handleExited.bind(b2(f));
    return f.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: d,
      firstRender: !0
    }, f;
  }
  var i = r.prototype;
  return i.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, i.componentWillUnmount = function() {
    this.mounted = !1;
  }, r.getDerivedStateFromProps = function(c, f) {
    var d = f.children, m = f.handleExited, g = f.firstRender;
    return {
      children: g ? x2(c, m) : E2(c, d, m),
      firstRender: !1
    };
  }, i.handleExited = function(c, f) {
    var d = If(this.props.children);
    c.key in d || (c.props.onExited && c.props.onExited(f), this.mounted && this.setState(function(m) {
      var g = rs({}, m.children);
      return delete g[c.key], {
        children: g
      };
    }));
  }, i.render = function() {
    var c = this.props, f = c.component, d = c.childFactory, m = ay(c, ["component", "childFactory"]), g = this.state.contextValue, h = T2(this.state.children).map(d);
    return delete m.appear, delete m.enter, delete m.exit, f === null ? /* @__PURE__ */ jn.createElement(ss.Provider, {
      value: g
    }, h) : /* @__PURE__ */ jn.createElement(ss.Provider, {
      value: g
    }, /* @__PURE__ */ jn.createElement(f, m, h));
  }, r;
}(jn.Component);
ed.propTypes = {};
ed.defaultProps = C2;
const K0 = {};
function iy(a, r) {
  const i = E.useRef(K0);
  return i.current === K0 && (i.current = a(r)), i;
}
const R2 = [];
function A2(a) {
  E.useEffect(a, R2);
}
class td {
  static create() {
    return new td();
  }
  currentId = null;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(r, i) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, i();
    }, r);
  }
  clear = () => {
    this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
  };
  disposeEffect = () => this.clear;
}
function oy() {
  const a = iy(td.create).current;
  return A2(a.disposeEffect), a;
}
const sy = (a) => a.scrollTop;
function us(a, r) {
  const {
    timeout: i,
    easing: s,
    style: c = {}
  } = a;
  return {
    duration: c.transitionDuration ?? (typeof i == "number" ? i : i[r.mode] || 0),
    easing: c.transitionTimingFunction ?? (typeof s == "object" ? s[r.mode] : s),
    delay: c.transitionDelay
  };
}
function M2(a) {
  return ft("MuiPaper", a);
}
ot("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const O2 = (a) => {
  const {
    square: r,
    elevation: i,
    variant: s,
    classes: c
  } = a, f = {
    root: ["root", s, !r && "rounded", s === "elevation" && `elevation${i}`]
  };
  return dt(f, M2, c);
}, w2 = ve("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, r[i.variant], !i.square && r.rounded, i.variant === "elevation" && r[`elevation${i.elevation}`]];
  }
})(At(({
  theme: a
}) => ({
  backgroundColor: (a.vars || a).palette.background.paper,
  color: (a.vars || a).palette.text.primary,
  transition: a.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: r
    }) => !r.square,
    style: {
      borderRadius: a.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(a.vars || a).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), uy = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const s = pt({
    props: r,
    name: "MuiPaper"
  }), c = Wf(), {
    className: f,
    component: d = "div",
    elevation: m = 1,
    square: g = !1,
    variant: h = "elevation",
    ...b
  } = s, x = {
    ...s,
    component: d,
    elevation: m,
    square: g,
    variant: h
  }, A = O2(x);
  return /* @__PURE__ */ I.jsx(w2, {
    as: d,
    ownerState: x,
    className: we(A.root, f),
    ref: i,
    ...b,
    style: {
      ...h === "elevation" && {
        "--Paper-shadow": (c.vars || c).shadows[m],
        ...c.vars && {
          "--Paper-overlay": c.vars.overlays?.[m]
        },
        ...!c.vars && c.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${os("#fff", vf(m))}, ${os("#fff", vf(m))})`
        }
      },
      ...b.style
    }
  });
});
function z2(a) {
  return typeof a == "string";
}
function cy(a, r, i) {
  return a === void 0 || z2(a) ? r : {
    ...r,
    ownerState: {
      ...r.ownerState,
      ...i
    }
  };
}
function fy(a, r, i) {
  return typeof a == "function" ? a(r, i) : a;
}
function dy(a, r = []) {
  if (a === void 0)
    return {};
  const i = {};
  return Object.keys(a).filter((s) => s.match(/^on[A-Z]/) && typeof a[s] == "function" && !r.includes(s)).forEach((s) => {
    i[s] = a[s];
  }), i;
}
function Q0(a) {
  if (a === void 0)
    return {};
  const r = {};
  return Object.keys(a).filter((i) => !(i.match(/^on[A-Z]/) && typeof a[i] == "function")).forEach((i) => {
    r[i] = a[i];
  }), r;
}
function py(a) {
  const {
    getSlotProps: r,
    additionalProps: i,
    externalSlotProps: s,
    externalForwardedProps: c,
    className: f
  } = a;
  if (!r) {
    const M = we(i?.className, f, c?.className, s?.className), T = {
      ...i?.style,
      ...c?.style,
      ...s?.style
    }, S = {
      ...i,
      ...c,
      ...s
    };
    return M.length > 0 && (S.className = M), Object.keys(T).length > 0 && (S.style = T), {
      props: S,
      internalRef: void 0
    };
  }
  const d = dy({
    ...c,
    ...s
  }), m = Q0(s), g = Q0(c), h = r(d), b = we(h?.className, i?.className, f, c?.className, s?.className), x = {
    ...h?.style,
    ...i?.style,
    ...c?.style,
    ...s?.style
  }, A = {
    ...h,
    ...i,
    ...g,
    ...m
  };
  return b.length > 0 && (A.className = b), Object.keys(x).length > 0 && (A.style = x), {
    props: A,
    internalRef: h.ref
  };
}
function Gt(a, r) {
  const {
    className: i,
    elementType: s,
    ownerState: c,
    externalForwardedProps: f,
    internalForwardedProps: d,
    shouldForwardComponentProp: m = !1,
    ...g
  } = r, {
    component: h,
    slots: b = {
      [a]: void 0
    },
    slotProps: x = {
      [a]: void 0
    },
    ...A
  } = f, M = b[a] || s, T = fy(x[a], c), {
    props: {
      component: S,
      ...z
    },
    internalRef: U
  } = py({
    className: i,
    ...g,
    externalForwardedProps: a === "root" ? A : void 0,
    externalSlotProps: T
  }), q = It(U, T?.ref, r.ref), N = a === "root" ? S || h : S, D = cy(M, {
    ...a === "root" && !h && !b[a] && d,
    ...a !== "root" && !b[a] && d,
    ...z,
    ...N && !m && {
      as: N
    },
    ...N && m && {
      component: N
    },
    ref: q
  }, c);
  return [M, D];
}
function Z0(a) {
  try {
    return a.matches(":focus-visible");
  } catch {
  }
  return !1;
}
class cs {
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new cs();
  }
  static use() {
    const r = iy(cs.create).current, [i, s] = E.useState(!1);
    return r.shouldMount = i, r.setShouldMount = s, E.useEffect(r.mountEffect, [i]), r;
  }
  constructor() {
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  mount() {
    return this.mounted || (this.mounted = D2(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  mountEffect = () => {
    this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
  };
  /* Ripple API */
  start(...r) {
    this.mount().then(() => this.ref.current?.start(...r));
  }
  stop(...r) {
    this.mount().then(() => this.ref.current?.stop(...r));
  }
  pulsate(...r) {
    this.mount().then(() => this.ref.current?.pulsate(...r));
  }
}
function _2() {
  return cs.use();
}
function D2() {
  let a, r;
  const i = new Promise((s, c) => {
    a = s, r = c;
  });
  return i.resolve = a, i.reject = r, i;
}
function N2(a) {
  const {
    className: r,
    classes: i,
    pulsate: s = !1,
    rippleX: c,
    rippleY: f,
    rippleSize: d,
    in: m,
    onExited: g,
    timeout: h
  } = a, [b, x] = E.useState(!1), A = we(r, i.ripple, i.rippleVisible, s && i.ripplePulsate), M = {
    width: d,
    height: d,
    top: -(d / 2) + f,
    left: -(d / 2) + c
  }, T = we(i.child, b && i.childLeaving, s && i.childPulsate);
  return !m && !b && x(!0), E.useEffect(() => {
    if (!m && g != null) {
      const S = setTimeout(g, h);
      return () => {
        clearTimeout(S);
      };
    }
  }, [g, m, h]), /* @__PURE__ */ I.jsx("span", {
    className: A,
    style: M,
    children: /* @__PURE__ */ I.jsx("span", {
      className: T
    })
  });
}
const Sn = ot("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Ef = 550, B2 = 80, U2 = zi`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, k2 = zi`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, H2 = zi`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, L2 = ve("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), j2 = ve(N2, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Sn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${U2};
    animation-duration: ${Ef}ms;
    animation-timing-function: ${({
  theme: a
}) => a.transitions.easing.easeInOut};
  }

  &.${Sn.ripplePulsate} {
    animation-duration: ${({
  theme: a
}) => a.transitions.duration.shorter}ms;
  }

  & .${Sn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Sn.childLeaving} {
    opacity: 0;
    animation-name: ${k2};
    animation-duration: ${Ef}ms;
    animation-timing-function: ${({
  theme: a
}) => a.transitions.easing.easeInOut};
  }

  & .${Sn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${H2};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: a
}) => a.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, $2 = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const s = pt({
    props: r,
    name: "MuiTouchRipple"
  }), {
    center: c = !1,
    classes: f = {},
    className: d,
    ...m
  } = s, [g, h] = E.useState([]), b = E.useRef(0), x = E.useRef(null);
  E.useEffect(() => {
    x.current && (x.current(), x.current = null);
  }, [g]);
  const A = E.useRef(!1), M = oy(), T = E.useRef(null), S = E.useRef(null), z = E.useCallback((D) => {
    const {
      pulsate: w,
      rippleX: k,
      rippleY: X,
      rippleSize: Z,
      cb: W
    } = D;
    h((ae) => [...ae, /* @__PURE__ */ I.jsx(j2, {
      classes: {
        ripple: we(f.ripple, Sn.ripple),
        rippleVisible: we(f.rippleVisible, Sn.rippleVisible),
        ripplePulsate: we(f.ripplePulsate, Sn.ripplePulsate),
        child: we(f.child, Sn.child),
        childLeaving: we(f.childLeaving, Sn.childLeaving),
        childPulsate: we(f.childPulsate, Sn.childPulsate)
      },
      timeout: Ef,
      pulsate: w,
      rippleX: k,
      rippleY: X,
      rippleSize: Z
    }, b.current)]), b.current += 1, x.current = W;
  }, [f]), U = E.useCallback((D = {}, w = {}, k = () => {
  }) => {
    const {
      pulsate: X = !1,
      center: Z = c || w.pulsate,
      fakeElement: W = !1
      // For test purposes
    } = w;
    if (D?.type === "mousedown" && A.current) {
      A.current = !1;
      return;
    }
    D?.type === "touchstart" && (A.current = !0);
    const ae = W ? null : S.current, le = ae ? ae.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let v, ee, Y;
    if (Z || D === void 0 || D.clientX === 0 && D.clientY === 0 || !D.clientX && !D.touches)
      v = Math.round(le.width / 2), ee = Math.round(le.height / 2);
    else {
      const {
        clientX: G,
        clientY: O
      } = D.touches && D.touches.length > 0 ? D.touches[0] : D;
      v = Math.round(G - le.left), ee = Math.round(O - le.top);
    }
    if (Z)
      Y = Math.sqrt((2 * le.width ** 2 + le.height ** 2) / 3), Y % 2 === 0 && (Y += 1);
    else {
      const G = Math.max(Math.abs((ae ? ae.clientWidth : 0) - v), v) * 2 + 2, O = Math.max(Math.abs((ae ? ae.clientHeight : 0) - ee), ee) * 2 + 2;
      Y = Math.sqrt(G ** 2 + O ** 2);
    }
    D?.touches ? T.current === null && (T.current = () => {
      z({
        pulsate: X,
        rippleX: v,
        rippleY: ee,
        rippleSize: Y,
        cb: k
      });
    }, M.start(B2, () => {
      T.current && (T.current(), T.current = null);
    })) : z({
      pulsate: X,
      rippleX: v,
      rippleY: ee,
      rippleSize: Y,
      cb: k
    });
  }, [c, z, M]), q = E.useCallback(() => {
    U({}, {
      pulsate: !0
    });
  }, [U]), N = E.useCallback((D, w) => {
    if (M.clear(), D?.type === "touchend" && T.current) {
      T.current(), T.current = null, M.start(0, () => {
        N(D, w);
      });
      return;
    }
    T.current = null, h((k) => k.length > 0 ? k.slice(1) : k), x.current = w;
  }, [M]);
  return E.useImperativeHandle(i, () => ({
    pulsate: q,
    start: U,
    stop: N
  }), [q, U, N]), /* @__PURE__ */ I.jsx(L2, {
    className: we(Sn.root, f.root, d),
    ref: S,
    ...m,
    children: /* @__PURE__ */ I.jsx(ed, {
      component: null,
      exit: !0,
      children: g
    })
  });
});
function q2(a) {
  return ft("MuiButtonBase", a);
}
const Y2 = ot("MuiButtonBase", ["root", "disabled", "focusVisible"]), G2 = (a) => {
  const {
    disabled: r,
    focusVisible: i,
    focusVisibleClassName: s,
    classes: c
  } = a, d = dt({
    root: ["root", r && "disabled", i && "focusVisible"]
  }, q2, c);
  return i && s && (d.root += ` ${s}`), d;
}, V2 = ve("button", {
  name: "MuiButtonBase",
  slot: "Root"
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Y2.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), X2 = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const s = pt({
    props: r,
    name: "MuiButtonBase"
  }), {
    action: c,
    centerRipple: f = !1,
    children: d,
    className: m,
    component: g = "button",
    disabled: h = !1,
    disableRipple: b = !1,
    disableTouchRipple: x = !1,
    focusRipple: A = !1,
    focusVisibleClassName: M,
    LinkComponent: T = "a",
    onBlur: S,
    onClick: z,
    onContextMenu: U,
    onDragLeave: q,
    onFocus: N,
    onFocusVisible: D,
    onKeyDown: w,
    onKeyUp: k,
    onMouseDown: X,
    onMouseLeave: Z,
    onMouseUp: W,
    onTouchEnd: ae,
    onTouchMove: le,
    onTouchStart: v,
    tabIndex: ee = 0,
    TouchRippleProps: Y,
    touchRippleRef: G,
    type: O,
    ...Q
  } = s, ie = E.useRef(null), te = _2(), C = It(te.ref, G), [V, re] = E.useState(!1);
  h && V && re(!1), E.useImperativeHandle(c, () => ({
    focusVisible: () => {
      re(!0), ie.current.focus();
    }
  }), []);
  const ne = te.shouldMount && !b && !h;
  E.useEffect(() => {
    V && A && !b && te.pulsate();
  }, [b, A, V, te]);
  const oe = oa(te, "start", X, x), ce = oa(te, "stop", U, x), ue = oa(te, "stop", q, x), Ce = oa(te, "stop", W, x), be = oa(te, "stop", (fe) => {
    V && fe.preventDefault(), Z && Z(fe);
  }, x), ze = oa(te, "start", v, x), ye = oa(te, "stop", ae, x), Re = oa(te, "stop", le, x), _e = oa(te, "stop", (fe) => {
    Z0(fe.target) || re(!1), S && S(fe);
  }, !1), mt = pl((fe) => {
    ie.current || (ie.current = fe.currentTarget), Z0(fe.target) && (re(!0), D && D(fe)), N && N(fe);
  }), Se = () => {
    const fe = ie.current;
    return g && g !== "button" && !(fe.tagName === "A" && fe.href);
  }, qe = pl((fe) => {
    A && !fe.repeat && V && fe.key === " " && te.stop(fe, () => {
      te.start(fe);
    }), fe.target === fe.currentTarget && Se() && fe.key === " " && fe.preventDefault(), w && w(fe), fe.target === fe.currentTarget && Se() && fe.key === "Enter" && !h && (fe.preventDefault(), z && z(fe));
  }), Nt = pl((fe) => {
    A && fe.key === " " && V && !fe.defaultPrevented && te.stop(fe, () => {
      te.pulsate(fe);
    }), k && k(fe), z && fe.target === fe.currentTarget && Se() && fe.key === " " && !fe.defaultPrevented && z(fe);
  });
  let Ye = g;
  Ye === "button" && (Q.href || Q.to) && (Ye = T);
  const at = {};
  Ye === "button" ? (at.type = O === void 0 ? "button" : O, at.disabled = h) : (!Q.href && !Q.to && (at.role = "button"), h && (at["aria-disabled"] = h));
  const nt = It(i, ie), st = {
    ...s,
    centerRipple: f,
    component: g,
    disabled: h,
    disableRipple: b,
    disableTouchRipple: x,
    focusRipple: A,
    tabIndex: ee,
    focusVisible: V
  }, Qe = G2(st);
  return /* @__PURE__ */ I.jsxs(V2, {
    as: Ye,
    className: we(Qe.root, m),
    ownerState: st,
    onBlur: _e,
    onClick: z,
    onContextMenu: ce,
    onFocus: mt,
    onKeyDown: qe,
    onKeyUp: Nt,
    onMouseDown: oe,
    onMouseLeave: be,
    onMouseUp: Ce,
    onDragLeave: ue,
    onTouchEnd: ye,
    onTouchMove: Re,
    onTouchStart: ze,
    ref: nt,
    tabIndex: h ? -1 : ee,
    type: O,
    ...at,
    ...Q,
    children: [d, ne ? /* @__PURE__ */ I.jsx($2, {
      ref: C,
      center: f,
      ...Y
    }) : null]
  });
});
function oa(a, r, i, s = !1) {
  return pl((c) => (i && i(c), s || a[r](c), !0));
}
function K2(a) {
  return typeof a.main == "string";
}
function Q2(a, r = []) {
  if (!K2(a))
    return !1;
  for (const i of r)
    if (!a.hasOwnProperty(i) || typeof a[i] != "string")
      return !1;
  return !0;
}
function ml(a = []) {
  return ([, r]) => r && Q2(r, a);
}
function Z2(a) {
  return ft("MuiCircularProgress", a);
}
ot("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Ha = 44, Tf = zi`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Cf = zi`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, P2 = typeof Tf != "string" ? Hn`
        animation: ${Tf} 1.4s linear infinite;
      ` : null, F2 = typeof Cf != "string" ? Hn`
        animation: ${Cf} 1.4s ease-in-out infinite;
      ` : null, W2 = (a) => {
  const {
    classes: r,
    variant: i,
    color: s,
    disableShrink: c
  } = a, f = {
    root: ["root", i, `color${$e(s)}`],
    svg: ["svg"],
    circle: ["circle", `circle${$e(i)}`, c && "circleDisableShrink"]
  };
  return dt(f, Z2, r);
}, J2 = ve("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, r[i.variant], r[`color${$e(i.color)}`]];
  }
})(At(({
  theme: a
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: a.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: P2 || {
      animation: `${Tf} 1.4s linear infinite`
    }
  }, ...Object.entries(a.palette).filter(ml()).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      color: (a.vars || a).palette[r].main
    }
  }))]
}))), I2 = ve("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), eE = ve("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.circle, r[`circle${$e(i.variant)}`], i.disableShrink && r.circleDisableShrink];
  }
})(At(({
  theme: a
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: a.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: r
    }) => r.variant === "indeterminate" && !r.disableShrink,
    style: F2 || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Cf} 1.4s ease-in-out infinite`
    }
  }]
}))), tE = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const s = pt({
    props: r,
    name: "MuiCircularProgress"
  }), {
    className: c,
    color: f = "primary",
    disableShrink: d = !1,
    size: m = 40,
    style: g,
    thickness: h = 3.6,
    value: b = 0,
    variant: x = "indeterminate",
    ...A
  } = s, M = {
    ...s,
    color: f,
    disableShrink: d,
    size: m,
    thickness: h,
    value: b,
    variant: x
  }, T = W2(M), S = {}, z = {}, U = {};
  if (x === "determinate") {
    const q = 2 * Math.PI * ((Ha - h) / 2);
    S.strokeDasharray = q.toFixed(3), U["aria-valuenow"] = Math.round(b), S.strokeDashoffset = `${((100 - b) / 100 * q).toFixed(3)}px`, z.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ I.jsx(J2, {
    className: we(T.root, c),
    style: {
      width: m,
      height: m,
      ...z,
      ...g
    },
    ownerState: M,
    ref: i,
    role: "progressbar",
    ...U,
    ...A,
    children: /* @__PURE__ */ I.jsx(I2, {
      className: T.svg,
      ownerState: M,
      viewBox: `${Ha / 2} ${Ha / 2} ${Ha} ${Ha}`,
      children: /* @__PURE__ */ I.jsx(eE, {
        className: T.circle,
        style: S,
        ownerState: M,
        cx: Ha,
        cy: Ha,
        r: (Ha - h) / 2,
        fill: "none",
        strokeWidth: h
      })
    })
  });
});
function nE(a) {
  return ft("MuiIconButton", a);
}
const P0 = ot("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), aE = (a) => {
  const {
    classes: r,
    disabled: i,
    color: s,
    edge: c,
    size: f,
    loading: d
  } = a, m = {
    root: ["root", d && "loading", i && "disabled", s !== "default" && `color${$e(s)}`, c && `edge${$e(c)}`, `size${$e(f)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return dt(m, nE, r);
}, lE = ve(X2, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, i.loading && r.loading, i.color !== "default" && r[`color${$e(i.color)}`], i.edge && r[`edge${$e(i.edge)}`], r[`size${$e(i.size)}`]];
  }
})(At(({
  theme: a
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: a.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (a.vars || a).palette.action.active,
  transition: a.transitions.create("background-color", {
    duration: a.transitions.duration.shortest
  }),
  variants: [{
    props: (r) => !r.disableRipple,
    style: {
      "--IconButton-hoverBg": a.alpha((a.vars || a).palette.action.active, (a.vars || a).palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), At(({
  theme: a
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(a.palette).filter(ml()).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      color: (a.vars || a).palette[r].main
    }
  })), ...Object.entries(a.palette).filter(ml()).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      "--IconButton-hoverBg": a.alpha((a.vars || a).palette[r].main, (a.vars || a).palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: a.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: a.typography.pxToRem(28)
    }
  }],
  [`&.${P0.disabled}`]: {
    backgroundColor: "transparent",
    color: (a.vars || a).palette.action.disabled
  },
  [`&.${P0.loading}`]: {
    color: "transparent"
  }
}))), rE = ve("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator"
})(({
  theme: a
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (a.vars || a).palette.action.disabled,
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }]
})), iE = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const s = pt({
    props: r,
    name: "MuiIconButton"
  }), {
    edge: c = !1,
    children: f,
    className: d,
    color: m = "default",
    disabled: g = !1,
    disableFocusRipple: h = !1,
    size: b = "medium",
    id: x,
    loading: A = null,
    loadingIndicator: M,
    ...T
  } = s, S = Rs(x), z = M ?? /* @__PURE__ */ I.jsx(tE, {
    "aria-labelledby": S,
    color: "inherit",
    size: 16
  }), U = {
    ...s,
    edge: c,
    color: m,
    disabled: g,
    disableFocusRipple: h,
    loading: A,
    loadingIndicator: z,
    size: b
  }, q = aE(U);
  return /* @__PURE__ */ I.jsxs(lE, {
    id: A ? S : x,
    className: we(q.root, d),
    centerRipple: !0,
    focusRipple: !h,
    disabled: g || A,
    ref: i,
    ...T,
    ownerState: U,
    children: [typeof A == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ I.jsx("span", {
      className: q.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ I.jsx(rE, {
        className: q.loadingIndicator,
        ownerState: U,
        children: A && z
      })
    }), f]
  });
});
function oE(a) {
  const {
    elementType: r,
    externalSlotProps: i,
    ownerState: s,
    skipResolvingSlotProps: c = !1,
    ...f
  } = a, d = c ? {} : fy(i, s), {
    props: m,
    internalRef: g
  } = py({
    ...f,
    externalSlotProps: d
  }), h = It(g, d?.ref, a.additionalProps?.ref);
  return cy(r, {
    ...m,
    ref: h
  }, s);
}
function Bi(a) {
  return parseInt(E.version, 10) >= 19 ? a?.props?.ref || null : a?.ref || null;
}
function sE(a) {
  return typeof a == "function" ? a() : a;
}
const uE = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const {
    children: s,
    container: c,
    disablePortal: f = !1
  } = r, [d, m] = E.useState(null), g = It(/* @__PURE__ */ E.isValidElement(s) ? Bi(s) : null, i);
  if (ca(() => {
    f || m(sE(c) || document.body);
  }, [c, f]), ca(() => {
    if (d && !f)
      return G0(i, d), () => {
        G0(i, null);
      };
  }, [i, d, f]), f) {
    if (/* @__PURE__ */ E.isValidElement(s)) {
      const h = {
        ref: g
      };
      return /* @__PURE__ */ E.cloneElement(s, h);
    }
    return s;
  }
  return d && /* @__PURE__ */ ry.createPortal(s, d);
});
function Fo(a) {
  return parseInt(a, 10) || 0;
}
const cE = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function fE(a) {
  for (const r in a)
    return !1;
  return !0;
}
function F0(a) {
  return fE(a) || a.outerHeightStyle === 0 && !a.overflowing;
}
const dE = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const {
    onChange: s,
    maxRows: c,
    minRows: f = 1,
    style: d,
    value: m,
    ...g
  } = r, {
    current: h
  } = E.useRef(m != null), b = E.useRef(null), x = It(i, b), A = E.useRef(null), M = E.useRef(null), T = E.useCallback(() => {
    const N = b.current, D = M.current;
    if (!N || !D)
      return;
    const k = fa(N).getComputedStyle(N);
    if (k.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    D.style.width = k.width, D.value = N.value || r.placeholder || "x", D.value.slice(-1) === `
` && (D.value += " ");
    const X = k.boxSizing, Z = Fo(k.paddingBottom) + Fo(k.paddingTop), W = Fo(k.borderBottomWidth) + Fo(k.borderTopWidth), ae = D.scrollHeight;
    D.value = "x";
    const le = D.scrollHeight;
    let v = ae;
    f && (v = Math.max(Number(f) * le, v)), c && (v = Math.min(Number(c) * le, v)), v = Math.max(v, le);
    const ee = v + (X === "border-box" ? Z + W : 0), Y = Math.abs(v - ae) <= 1;
    return {
      outerHeightStyle: ee,
      overflowing: Y
    };
  }, [c, f, r.placeholder]), S = pl(() => {
    const N = b.current, D = T();
    if (!N || !D || F0(D))
      return !1;
    const w = D.outerHeightStyle;
    return A.current != null && A.current !== w;
  }), z = E.useCallback(() => {
    const N = b.current, D = T();
    if (!N || !D || F0(D))
      return;
    const w = D.outerHeightStyle;
    A.current !== w && (A.current = w, N.style.height = `${w}px`), N.style.overflow = D.overflowing ? "hidden" : "";
  }, [T]), U = E.useRef(-1);
  ca(() => {
    const N = ny(z), D = b?.current;
    if (!D)
      return;
    const w = fa(D);
    w.addEventListener("resize", N);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver(() => {
      S() && (k.unobserve(D), cancelAnimationFrame(U.current), z(), U.current = requestAnimationFrame(() => {
        k.observe(D);
      }));
    }), k.observe(D)), () => {
      N.clear(), cancelAnimationFrame(U.current), w.removeEventListener("resize", N), k && k.disconnect();
    };
  }, [T, z, S]), ca(() => {
    z();
  });
  const q = (N) => {
    h || z();
    const D = N.target, w = D.value.length, k = D.value.endsWith(`
`), X = D.selectionStart === w;
    k && X && D.setSelectionRange(w, w), s && s(N);
  };
  return /* @__PURE__ */ I.jsxs(E.Fragment, {
    children: [/* @__PURE__ */ I.jsx("textarea", {
      value: m,
      onChange: q,
      ref: x,
      rows: f,
      style: d,
      ...g
    }), /* @__PURE__ */ I.jsx("textarea", {
      "aria-hidden": !0,
      className: r.className,
      readOnly: !0,
      ref: M,
      tabIndex: -1,
      style: {
        ...cE.shadow,
        ...d,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
function Rf(a) {
  return typeof a == "string";
}
function fr({
  props: a,
  states: r,
  muiFormControl: i
}) {
  return r.reduce((s, c) => (s[c] = a[c], i && typeof a[c] > "u" && (s[c] = i[c]), s), {});
}
const nd = /* @__PURE__ */ E.createContext(void 0);
function dr() {
  return E.useContext(nd);
}
function W0(a) {
  return a != null && !(Array.isArray(a) && a.length === 0);
}
function fs(a, r = !1) {
  return a && (W0(a.value) && a.value !== "" || r && W0(a.defaultValue) && a.defaultValue !== "");
}
function pE(a) {
  return a.startAdornment;
}
function mE(a) {
  return ft("MuiInputBase", a);
}
const ur = ot("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var J0;
const Ms = (a, r) => {
  const {
    ownerState: i
  } = a;
  return [r.root, i.formControl && r.formControl, i.startAdornment && r.adornedStart, i.endAdornment && r.adornedEnd, i.error && r.error, i.size === "small" && r.sizeSmall, i.multiline && r.multiline, i.color && r[`color${$e(i.color)}`], i.fullWidth && r.fullWidth, i.hiddenLabel && r.hiddenLabel];
}, Os = (a, r) => {
  const {
    ownerState: i
  } = a;
  return [r.input, i.size === "small" && r.inputSizeSmall, i.multiline && r.inputMultiline, i.type === "search" && r.inputTypeSearch, i.startAdornment && r.inputAdornedStart, i.endAdornment && r.inputAdornedEnd, i.hiddenLabel && r.inputHiddenLabel];
}, hE = (a) => {
  const {
    classes: r,
    color: i,
    disabled: s,
    error: c,
    endAdornment: f,
    focused: d,
    formControl: m,
    fullWidth: g,
    hiddenLabel: h,
    multiline: b,
    readOnly: x,
    size: A,
    startAdornment: M,
    type: T
  } = a, S = {
    root: ["root", `color${$e(i)}`, s && "disabled", c && "error", g && "fullWidth", d && "focused", m && "formControl", A && A !== "medium" && `size${$e(A)}`, b && "multiline", M && "adornedStart", f && "adornedEnd", h && "hiddenLabel", x && "readOnly"],
    input: ["input", s && "disabled", T === "search" && "inputTypeSearch", b && "inputMultiline", A === "small" && "inputSizeSmall", h && "inputHiddenLabel", M && "inputAdornedStart", f && "inputAdornedEnd", x && "readOnly"]
  };
  return dt(S, mE, r);
}, ws = ve("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Ms
})(At(({
  theme: a
}) => ({
  ...a.typography.body1,
  color: (a.vars || a).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${ur.disabled}`]: {
    color: (a.vars || a).palette.text.disabled,
    cursor: "default"
  },
  variants: [{
    props: ({
      ownerState: r
    }) => r.multiline,
    style: {
      padding: "4px 0 5px"
    }
  }, {
    props: ({
      ownerState: r,
      size: i
    }) => r.multiline && i === "small",
    style: {
      paddingTop: 1
    }
  }, {
    props: ({
      ownerState: r
    }) => r.fullWidth,
    style: {
      width: "100%"
    }
  }]
}))), zs = ve("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Os
})(At(({
  theme: a
}) => {
  const r = a.palette.mode === "light", i = {
    color: "currentColor",
    ...a.vars ? {
      opacity: a.vars.opacity.inputPlaceholder
    } : {
      opacity: r ? 0.42 : 0.5
    },
    transition: a.transitions.create("opacity", {
      duration: a.transitions.duration.shorter
    })
  }, s = {
    opacity: "0 !important"
  }, c = a.vars ? {
    opacity: a.vars.opacity.inputPlaceholder
  } : {
    opacity: r ? 0.42 : 0.5
  };
  return {
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    "&::-webkit-input-placeholder": i,
    "&::-moz-placeholder": i,
    // Firefox 19+
    "&::-ms-input-placeholder": i,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${ur.formControl} &`]: {
      "&::-webkit-input-placeholder": s,
      "&::-moz-placeholder": s,
      // Firefox 19+
      "&::-ms-input-placeholder": s,
      // Edge
      "&:focus::-webkit-input-placeholder": c,
      "&:focus::-moz-placeholder": c,
      // Firefox 19+
      "&:focus::-ms-input-placeholder": c
      // Edge
    },
    [`&.${ur.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (a.vars || a).palette.text.disabled
      // Fix opacity Safari bug
    },
    variants: [{
      props: ({
        ownerState: f
      }) => !f.disableInjectingGlobalStyles,
      style: {
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill"
        }
      }
    }, {
      props: {
        size: "small"
      },
      style: {
        paddingTop: 1
      }
    }, {
      props: ({
        ownerState: f
      }) => f.multiline,
      style: {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0
      }
    }, {
      props: {
        type: "search"
      },
      style: {
        MozAppearance: "textfield"
        // Improve type search style.
      }
    }]
  };
})), I0 = Jf({
  "@keyframes mui-auto-fill": {
    from: {
      display: "block"
    }
  },
  "@keyframes mui-auto-fill-cancel": {
    from: {
      display: "block"
    }
  }
}), ad = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const s = pt({
    props: r,
    name: "MuiInputBase"
  }), {
    "aria-describedby": c,
    autoComplete: f,
    autoFocus: d,
    className: m,
    color: g,
    components: h = {},
    componentsProps: b = {},
    defaultValue: x,
    disabled: A,
    disableInjectingGlobalStyles: M,
    endAdornment: T,
    error: S,
    fullWidth: z = !1,
    id: U,
    inputComponent: q = "input",
    inputProps: N = {},
    inputRef: D,
    margin: w,
    maxRows: k,
    minRows: X,
    multiline: Z = !1,
    name: W,
    onBlur: ae,
    onChange: le,
    onClick: v,
    onFocus: ee,
    onKeyDown: Y,
    onKeyUp: G,
    placeholder: O,
    readOnly: Q,
    renderSuffix: ie,
    rows: te,
    size: C,
    slotProps: V = {},
    slots: re = {},
    startAdornment: ne,
    type: oe = "text",
    value: ce,
    ...ue
  } = s, Ce = N.value != null ? N.value : ce, {
    current: be
  } = E.useRef(Ce != null), ze = E.useRef(), ye = E.useCallback((Pe) => {
  }, []), Re = It(ze, D, N.ref, ye), [_e, mt] = E.useState(!1), Se = dr(), qe = fr({
    props: s,
    muiFormControl: Se,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  qe.focused = Se ? Se.focused : _e, E.useEffect(() => {
    !Se && A && _e && (mt(!1), ae && ae());
  }, [Se, A, _e, ae]);
  const Nt = Se && Se.onFilled, Ye = Se && Se.onEmpty, at = E.useCallback((Pe) => {
    fs(Pe) ? Nt && Nt() : Ye && Ye();
  }, [Nt, Ye]);
  ca(() => {
    be && at({
      value: Ce
    });
  }, [Ce, at, be]);
  const nt = (Pe) => {
    ee && ee(Pe), N.onFocus && N.onFocus(Pe), Se && Se.onFocus ? Se.onFocus(Pe) : mt(!0);
  }, st = (Pe) => {
    ae && ae(Pe), N.onBlur && N.onBlur(Pe), Se && Se.onBlur ? Se.onBlur(Pe) : mt(!1);
  }, Qe = (Pe, ...da) => {
    if (!be) {
      const Vn = Pe.target || ze.current;
      if (Vn == null)
        throw new Error(sa(1));
      at({
        value: Vn.value
      });
    }
    N.onChange && N.onChange(Pe, ...da), le && le(Pe, ...da);
  };
  E.useEffect(() => {
    at(ze.current);
  }, []);
  const fe = (Pe) => {
    ze.current && Pe.currentTarget === Pe.target && ze.current.focus(), v && v(Pe);
  };
  let en = q, ht = N;
  Z && en === "input" && (te ? ht = {
    type: void 0,
    minRows: te,
    maxRows: te,
    ...ht
  } : ht = {
    type: void 0,
    maxRows: k,
    minRows: X,
    ...ht
  }, en = dE);
  const Tn = (Pe) => {
    at(Pe.animationName === "mui-auto-fill-cancel" ? ze.current : {
      value: "x"
    });
  };
  E.useEffect(() => {
    Se && Se.setAdornedStart(!!ne);
  }, [Se, ne]);
  const lt = {
    ...s,
    color: qe.color || "primary",
    disabled: qe.disabled,
    endAdornment: T,
    error: qe.error,
    focused: qe.focused,
    formControl: Se,
    fullWidth: z,
    hiddenLabel: qe.hiddenLabel,
    multiline: Z,
    size: qe.size,
    startAdornment: ne,
    type: oe
  }, xe = hE(lt), Ze = re.root || h.Root || ws, Be = V.root || b.root || {}, Xt = re.input || h.Input || zs;
  return ht = {
    ...ht,
    ...V.input ?? b.input
  }, /* @__PURE__ */ I.jsxs(E.Fragment, {
    children: [!M && typeof I0 == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (J0 || (J0 = /* @__PURE__ */ I.jsx(I0, {}))), /* @__PURE__ */ I.jsxs(Ze, {
      ...Be,
      ref: i,
      onClick: fe,
      ...ue,
      ...!Rf(Ze) && {
        ownerState: {
          ...lt,
          ...Be.ownerState
        }
      },
      className: we(xe.root, Be.className, m, Q && "MuiInputBase-readOnly"),
      children: [ne, /* @__PURE__ */ I.jsx(nd.Provider, {
        value: null,
        children: /* @__PURE__ */ I.jsx(Xt, {
          "aria-invalid": qe.error,
          "aria-describedby": c,
          autoComplete: f,
          autoFocus: d,
          defaultValue: x,
          disabled: qe.disabled,
          id: U,
          onAnimationStart: Tn,
          name: W,
          placeholder: O,
          readOnly: Q,
          required: qe.required,
          rows: te,
          value: Ce,
          onKeyDown: Y,
          onKeyUp: G,
          type: oe,
          ...ht,
          ...!Rf(Xt) && {
            as: en,
            ownerState: {
              ...lt,
              ...ht.ownerState
            }
          },
          ref: Re,
          className: we(xe.input, ht.className, Q && "MuiInputBase-readOnly"),
          onBlur: st,
          onChange: Qe,
          onFocus: nt
        })
      }), T, ie ? ie({
        ...qe,
        startAdornment: ne
      }) : null]
    })]
  });
});
function gE(a) {
  return ft("MuiInput", a);
}
const pi = {
  ...ur,
  ...ot("MuiInput", ["root", "underline", "input"])
};
function yE(a) {
  return ft("MuiOutlinedInput", a);
}
const Bn = {
  ...ur,
  ...ot("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function vE(a) {
  return ft("MuiFilledInput", a);
}
const il = {
  ...ur,
  ...ot("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
}, bE = h2(/* @__PURE__ */ I.jsx("path", {
  d: "M7 10l5 5 5-5z"
})), SE = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, xE = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const s = Wf(), c = {
    enter: s.transitions.duration.enteringScreen,
    exit: s.transitions.duration.leavingScreen
  }, {
    addEndListener: f,
    appear: d = !0,
    children: m,
    easing: g,
    in: h,
    onEnter: b,
    onEntered: x,
    onEntering: A,
    onExit: M,
    onExited: T,
    onExiting: S,
    style: z,
    timeout: U = c,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: q = Gn,
    ...N
  } = r, D = E.useRef(null), w = It(D, Bi(m), i), k = (Y) => (G) => {
    if (Y) {
      const O = D.current;
      G === void 0 ? Y(O) : Y(O, G);
    }
  }, X = k(A), Z = k((Y, G) => {
    sy(Y);
    const O = us({
      style: z,
      timeout: U,
      easing: g
    }, {
      mode: "enter"
    });
    Y.style.webkitTransition = s.transitions.create("opacity", O), Y.style.transition = s.transitions.create("opacity", O), b && b(Y, G);
  }), W = k(x), ae = k(S), le = k((Y) => {
    const G = us({
      style: z,
      timeout: U,
      easing: g
    }, {
      mode: "exit"
    });
    Y.style.webkitTransition = s.transitions.create("opacity", G), Y.style.transition = s.transitions.create("opacity", G), M && M(Y);
  }), v = k(T), ee = (Y) => {
    f && f(D.current, Y);
  };
  return /* @__PURE__ */ I.jsx(q, {
    appear: d,
    in: h,
    nodeRef: D,
    onEnter: Z,
    onEntered: W,
    onEntering: X,
    onExit: le,
    onExited: v,
    onExiting: ae,
    addEndListener: ee,
    timeout: U,
    ...N,
    children: (Y, {
      ownerState: G,
      ...O
    }) => /* @__PURE__ */ E.cloneElement(m, {
      style: {
        opacity: 0,
        visibility: Y === "exited" && !h ? "hidden" : void 0,
        ...SE[Y],
        ...z,
        ...m.props.style
      },
      ref: w,
      ...O
    })
  });
});
function EE(a) {
  return ft("MuiBackdrop", a);
}
ot("MuiBackdrop", ["root", "invisible"]);
const TE = (a) => {
  const {
    classes: r,
    invisible: i
  } = a;
  return dt({
    root: ["root", i && "invisible"]
  }, EE, r);
}, CE = ve("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, i.invisible && r.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), RE = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const s = pt({
    props: r,
    name: "MuiBackdrop"
  }), {
    children: c,
    className: f,
    component: d = "div",
    invisible: m = !1,
    open: g,
    components: h = {},
    componentsProps: b = {},
    slotProps: x = {},
    slots: A = {},
    TransitionComponent: M,
    transitionDuration: T,
    ...S
  } = s, z = {
    ...s,
    component: d,
    invisible: m
  }, U = TE(z), q = {
    transition: M,
    root: h.Root,
    ...A
  }, N = {
    ...b,
    ...x
  }, D = {
    component: d,
    slots: q,
    slotProps: N
  }, [w, k] = Gt("root", {
    elementType: CE,
    externalForwardedProps: D,
    className: we(U.root, f),
    ownerState: z
  }), [X, Z] = Gt("transition", {
    elementType: xE,
    externalForwardedProps: D,
    ownerState: z
  });
  return /* @__PURE__ */ I.jsx(X, {
    in: g,
    timeout: T,
    ...S,
    ...Z,
    children: /* @__PURE__ */ I.jsx(w, {
      "aria-hidden": !0,
      ...k,
      classes: U,
      ref: i,
      children: c
    })
  });
}), AE = ot("MuiBox", ["root"]), ME = As(), OE = GS({
  themeId: qn,
  defaultTheme: ME,
  defaultClassName: AE.root,
  generateClassName: Lg.generate
});
function wE(a) {
  return ft("MuiCard", a);
}
ot("MuiCard", ["root"]);
const zE = (a) => {
  const {
    classes: r
  } = a;
  return dt({
    root: ["root"]
  }, wE, r);
}, _E = ve(uy, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
}), eg = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const s = pt({
    props: r,
    name: "MuiCard"
  }), {
    className: c,
    raised: f = !1,
    ...d
  } = s, m = {
    ...s,
    raised: f
  }, g = zE(m);
  return /* @__PURE__ */ I.jsx(_E, {
    className: we(g.root, c),
    elevation: f ? 8 : void 0,
    ref: i,
    ownerState: m,
    ...d
  });
}), Af = typeof Jf({}) == "function", DE = (a, r) => ({
  WebkitFontSmoothing: "antialiased",
  // Antialiasing.
  MozOsxFontSmoothing: "grayscale",
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: "border-box",
  // Fix font resize problem in iOS
  WebkitTextSizeAdjust: "100%",
  // When used under CssVarsProvider, colorScheme should not be applied dynamically because it will generate the stylesheet twice for server-rendered applications.
  ...r && !a.vars && {
    colorScheme: a.palette.mode
  }
}), NE = (a) => ({
  color: (a.vars || a).palette.text.primary,
  ...a.typography.body1,
  backgroundColor: (a.vars || a).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (a.vars || a).palette.common.white
  }
}), my = (a, r = !1) => {
  const i = {};
  r && a.colorSchemes && typeof a.getColorSchemeSelector == "function" && Object.entries(a.colorSchemes).forEach(([f, d]) => {
    const m = a.getColorSchemeSelector(f);
    m.startsWith("@") ? i[m] = {
      ":root": {
        colorScheme: d.palette?.mode
      }
    } : i[m.replace(/\s*&/, "")] = {
      colorScheme: d.palette?.mode
    };
  });
  let s = {
    html: DE(a, r),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: a.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...NE(a),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (a.vars || a).palette.background.default
      }
    },
    ...i
  };
  const c = a.components?.MuiCssBaseline?.styleOverrides;
  return c && (s = [s, c]), s;
}, as = "mui-ecs", BE = (a) => {
  const r = my(a, !1), i = Array.isArray(r) ? r[0] : r;
  return !a.vars && i && (i.html[`:root:has(${as})`] = {
    colorScheme: a.palette.mode
  }), a.colorSchemes && Object.entries(a.colorSchemes).forEach(([s, c]) => {
    const f = a.getColorSchemeSelector(s);
    f.startsWith("@") ? i[f] = {
      [`:root:not(:has(.${as}))`]: {
        colorScheme: c.palette?.mode
      }
    } : i[f.replace(/\s*&/, "")] = {
      [`&:not(:has(.${as}))`]: {
        colorScheme: c.palette?.mode
      }
    };
  }), r;
}, UE = Jf(Af ? ({
  theme: a,
  enableColorScheme: r
}) => my(a, r) : ({
  theme: a
}) => BE(a));
function kE(a) {
  const r = pt({
    props: a,
    name: "MuiCssBaseline"
  }), {
    children: i,
    enableColorScheme: s = !1
  } = r;
  return /* @__PURE__ */ I.jsxs(E.Fragment, {
    children: [Af && /* @__PURE__ */ I.jsx(UE, {
      enableColorScheme: s
    }), !Af && !s && /* @__PURE__ */ I.jsx("span", {
      className: as,
      style: {
        display: "none"
      }
    }), i]
  });
}
function hy(a = window) {
  const r = a.document.documentElement.clientWidth;
  return a.innerWidth - r;
}
function HE(a) {
  const r = Mn(a);
  return r.body === a ? fa(a).innerWidth > r.documentElement.clientWidth : a.scrollHeight > a.clientHeight;
}
function Si(a, r) {
  r ? a.setAttribute("aria-hidden", "true") : a.removeAttribute("aria-hidden");
}
function tg(a) {
  return parseInt(fa(a).getComputedStyle(a).paddingRight, 10) || 0;
}
function LE(a) {
  const i = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(a.tagName), s = a.tagName === "INPUT" && a.getAttribute("type") === "hidden";
  return i || s;
}
function ng(a, r, i, s, c) {
  const f = [r, i, ...s];
  [].forEach.call(a.children, (d) => {
    const m = !f.includes(d), g = !LE(d);
    m && g && Si(d, c);
  });
}
function lf(a, r) {
  let i = -1;
  return a.some((s, c) => r(s) ? (i = c, !0) : !1), i;
}
function jE(a, r) {
  const i = [], s = a.container;
  if (!r.disableScrollLock) {
    if (HE(s)) {
      const d = hy(fa(s));
      i.push({
        value: s.style.paddingRight,
        property: "padding-right",
        el: s
      }), s.style.paddingRight = `${tg(s) + d}px`;
      const m = Mn(s).querySelectorAll(".mui-fixed");
      [].forEach.call(m, (g) => {
        i.push({
          value: g.style.paddingRight,
          property: "padding-right",
          el: g
        }), g.style.paddingRight = `${tg(g) + d}px`;
      });
    }
    let f;
    if (s.parentNode instanceof DocumentFragment)
      f = Mn(s).body;
    else {
      const d = s.parentElement, m = fa(s);
      f = d?.nodeName === "HTML" && m.getComputedStyle(d).overflowY === "scroll" ? d : s;
    }
    i.push({
      value: f.style.overflow,
      property: "overflow",
      el: f
    }, {
      value: f.style.overflowX,
      property: "overflow-x",
      el: f
    }, {
      value: f.style.overflowY,
      property: "overflow-y",
      el: f
    }), f.style.overflow = "hidden";
  }
  return () => {
    i.forEach(({
      value: f,
      el: d,
      property: m
    }) => {
      f ? d.style.setProperty(m, f) : d.style.removeProperty(m);
    });
  };
}
function $E(a) {
  const r = [];
  return [].forEach.call(a.children, (i) => {
    i.getAttribute("aria-hidden") === "true" && r.push(i);
  }), r;
}
class qE {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(r, i) {
    let s = this.modals.indexOf(r);
    if (s !== -1)
      return s;
    s = this.modals.length, this.modals.push(r), r.modalRef && Si(r.modalRef, !1);
    const c = $E(i);
    ng(i, r.mount, r.modalRef, c, !0);
    const f = lf(this.containers, (d) => d.container === i);
    return f !== -1 ? (this.containers[f].modals.push(r), s) : (this.containers.push({
      modals: [r],
      container: i,
      restore: null,
      hiddenSiblings: c
    }), s);
  }
  mount(r, i) {
    const s = lf(this.containers, (f) => f.modals.includes(r)), c = this.containers[s];
    c.restore || (c.restore = jE(c, i));
  }
  remove(r, i = !0) {
    const s = this.modals.indexOf(r);
    if (s === -1)
      return s;
    const c = lf(this.containers, (d) => d.modals.includes(r)), f = this.containers[c];
    if (f.modals.splice(f.modals.indexOf(r), 1), this.modals.splice(s, 1), f.modals.length === 0)
      f.restore && f.restore(), r.modalRef && Si(r.modalRef, i), ng(f.container, r.mount, r.modalRef, f.hiddenSiblings, !1), this.containers.splice(c, 1);
    else {
      const d = f.modals[f.modals.length - 1];
      d.modalRef && Si(d.modalRef, !1);
    }
    return s;
  }
  isTopModal(r) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === r;
  }
}
const YE = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function GE(a) {
  const r = parseInt(a.getAttribute("tabindex") || "", 10);
  return Number.isNaN(r) ? a.contentEditable === "true" || (a.nodeName === "AUDIO" || a.nodeName === "VIDEO" || a.nodeName === "DETAILS") && a.getAttribute("tabindex") === null ? 0 : a.tabIndex : r;
}
function VE(a) {
  if (a.tagName !== "INPUT" || a.type !== "radio" || !a.name)
    return !1;
  const r = (s) => a.ownerDocument.querySelector(`input[type="radio"]${s}`);
  let i = r(`[name="${a.name}"]:checked`);
  return i || (i = r(`[name="${a.name}"]`)), i !== a;
}
function XE(a) {
  return !(a.disabled || a.tagName === "INPUT" && a.type === "hidden" || VE(a));
}
function KE(a) {
  const r = [], i = [];
  return Array.from(a.querySelectorAll(YE)).forEach((s, c) => {
    const f = GE(s);
    f === -1 || !XE(s) || (f === 0 ? r.push(s) : i.push({
      documentOrder: c,
      tabIndex: f,
      node: s
    }));
  }), i.sort((s, c) => s.tabIndex === c.tabIndex ? s.documentOrder - c.documentOrder : s.tabIndex - c.tabIndex).map((s) => s.node).concat(r);
}
function QE() {
  return !0;
}
function ZE(a) {
  const {
    children: r,
    disableAutoFocus: i = !1,
    disableEnforceFocus: s = !1,
    disableRestoreFocus: c = !1,
    getTabbable: f = KE,
    isEnabled: d = QE,
    open: m
  } = a, g = E.useRef(!1), h = E.useRef(null), b = E.useRef(null), x = E.useRef(null), A = E.useRef(null), M = E.useRef(!1), T = E.useRef(null), S = It(Bi(r), T), z = E.useRef(null);
  E.useEffect(() => {
    !m || !T.current || (M.current = !i);
  }, [i, m]), E.useEffect(() => {
    if (!m || !T.current)
      return;
    const N = Mn(T.current);
    return T.current.contains(N.activeElement) || (T.current.hasAttribute("tabIndex") || T.current.setAttribute("tabIndex", "-1"), M.current && T.current.focus()), () => {
      c || (x.current && x.current.focus && (g.current = !0, x.current.focus()), x.current = null);
    };
  }, [m]), E.useEffect(() => {
    if (!m || !T.current)
      return;
    const N = Mn(T.current), D = (X) => {
      z.current = X, !(s || !d() || X.key !== "Tab") && N.activeElement === T.current && X.shiftKey && (g.current = !0, b.current && b.current.focus());
    }, w = () => {
      const X = T.current;
      if (X === null)
        return;
      if (!N.hasFocus() || !d() || g.current) {
        g.current = !1;
        return;
      }
      if (X.contains(N.activeElement) || s && N.activeElement !== h.current && N.activeElement !== b.current)
        return;
      if (N.activeElement !== A.current)
        A.current = null;
      else if (A.current !== null)
        return;
      if (!M.current)
        return;
      let Z = [];
      if ((N.activeElement === h.current || N.activeElement === b.current) && (Z = f(T.current)), Z.length > 0) {
        const W = !!(z.current?.shiftKey && z.current?.key === "Tab"), ae = Z[0], le = Z[Z.length - 1];
        typeof ae != "string" && typeof le != "string" && (W ? le.focus() : ae.focus());
      } else
        X.focus();
    };
    N.addEventListener("focusin", w), N.addEventListener("keydown", D, !0);
    const k = setInterval(() => {
      N.activeElement && N.activeElement.tagName === "BODY" && w();
    }, 50);
    return () => {
      clearInterval(k), N.removeEventListener("focusin", w), N.removeEventListener("keydown", D, !0);
    };
  }, [i, s, c, d, m, f]);
  const U = (N) => {
    x.current === null && (x.current = N.relatedTarget), M.current = !0, A.current = N.target;
    const D = r.props.onFocus;
    D && D(N);
  }, q = (N) => {
    x.current === null && (x.current = N.relatedTarget), M.current = !0;
  };
  return /* @__PURE__ */ I.jsxs(E.Fragment, {
    children: [/* @__PURE__ */ I.jsx("div", {
      tabIndex: m ? 0 : -1,
      onFocus: q,
      ref: h,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ E.cloneElement(r, {
      ref: S,
      onFocus: U
    }), /* @__PURE__ */ I.jsx("div", {
      tabIndex: m ? 0 : -1,
      onFocus: q,
      ref: b,
      "data-testid": "sentinelEnd"
    })]
  });
}
function PE(a) {
  return typeof a == "function" ? a() : a;
}
function FE(a) {
  return a ? a.props.hasOwnProperty("in") : !1;
}
const ag = () => {
}, Wo = new qE();
function WE(a) {
  const {
    container: r,
    disableEscapeKeyDown: i = !1,
    disableScrollLock: s = !1,
    closeAfterTransition: c = !1,
    onTransitionEnter: f,
    onTransitionExited: d,
    children: m,
    onClose: g,
    open: h,
    rootRef: b
  } = a, x = E.useRef({}), A = E.useRef(null), M = E.useRef(null), T = It(M, b), [S, z] = E.useState(!h), U = FE(m);
  let q = !0;
  (a["aria-hidden"] === "false" || a["aria-hidden"] === !1) && (q = !1);
  const N = () => Mn(A.current), D = () => (x.current.modalRef = M.current, x.current.mount = A.current, x.current), w = () => {
    Wo.mount(D(), {
      disableScrollLock: s
    }), M.current && (M.current.scrollTop = 0);
  }, k = pl(() => {
    const G = PE(r) || N().body;
    Wo.add(D(), G), M.current && w();
  }), X = () => Wo.isTopModal(D()), Z = pl((G) => {
    A.current = G, G && (h && X() ? w() : M.current && Si(M.current, q));
  }), W = E.useCallback(() => {
    Wo.remove(D(), q);
  }, [q]);
  E.useEffect(() => () => {
    W();
  }, [W]), E.useEffect(() => {
    h ? k() : (!U || !c) && W();
  }, [h, W, U, c, k]);
  const ae = (G) => (O) => {
    G.onKeyDown?.(O), !(O.key !== "Escape" || O.which === 229 || // Wait until IME is settled.
    !X()) && (i || (O.stopPropagation(), g && g(O, "escapeKeyDown")));
  }, le = (G) => (O) => {
    G.onClick?.(O), O.target === O.currentTarget && g && g(O, "backdropClick");
  };
  return {
    getRootProps: (G = {}) => {
      const O = dy(a);
      delete O.onTransitionEnter, delete O.onTransitionExited;
      const Q = {
        ...O,
        ...G
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...Q,
        onKeyDown: ae(Q),
        ref: T
      };
    },
    getBackdropProps: (G = {}) => {
      const O = G;
      return {
        "aria-hidden": !0,
        ...O,
        onClick: le(O),
        open: h
      };
    },
    getTransitionProps: () => {
      const G = () => {
        z(!1), f && f();
      }, O = () => {
        z(!0), d && d(), c && W();
      };
      return {
        onEnter: Y0(G, m?.props.onEnter ?? ag),
        onExited: Y0(O, m?.props.onExited ?? ag)
      };
    },
    rootRef: T,
    portalRef: Z,
    isTopModal: X,
    exited: S,
    hasTransition: U
  };
}
function JE(a) {
  return ft("MuiModal", a);
}
ot("MuiModal", ["root", "hidden", "backdrop"]);
const IE = (a) => {
  const {
    open: r,
    exited: i,
    classes: s
  } = a;
  return dt({
    root: ["root", !r && i && "hidden"],
    backdrop: ["backdrop"]
  }, JE, s);
}, eT = ve("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, !i.open && i.exited && r.hidden];
  }
})(At(({
  theme: a
}) => ({
  position: "fixed",
  zIndex: (a.vars || a).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: r
    }) => !r.open && r.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), tT = ve(RE, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), nT = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const s = pt({
    name: "MuiModal",
    props: r
  }), {
    BackdropComponent: c = tT,
    BackdropProps: f,
    classes: d,
    className: m,
    closeAfterTransition: g = !1,
    children: h,
    container: b,
    component: x,
    components: A = {},
    componentsProps: M = {},
    disableAutoFocus: T = !1,
    disableEnforceFocus: S = !1,
    disableEscapeKeyDown: z = !1,
    disablePortal: U = !1,
    disableRestoreFocus: q = !1,
    disableScrollLock: N = !1,
    hideBackdrop: D = !1,
    keepMounted: w = !1,
    onClose: k,
    onTransitionEnter: X,
    onTransitionExited: Z,
    open: W,
    slotProps: ae = {},
    slots: le = {},
    // eslint-disable-next-line react/prop-types
    theme: v,
    ...ee
  } = s, Y = {
    ...s,
    closeAfterTransition: g,
    disableAutoFocus: T,
    disableEnforceFocus: S,
    disableEscapeKeyDown: z,
    disablePortal: U,
    disableRestoreFocus: q,
    disableScrollLock: N,
    hideBackdrop: D,
    keepMounted: w
  }, {
    getRootProps: G,
    getBackdropProps: O,
    getTransitionProps: Q,
    portalRef: ie,
    isTopModal: te,
    exited: C,
    hasTransition: V
  } = WE({
    ...Y,
    rootRef: i
  }), re = {
    ...Y,
    exited: C
  }, ne = IE(re), oe = {};
  if (h.props.tabIndex === void 0 && (oe.tabIndex = "-1"), V) {
    const {
      onEnter: ye,
      onExited: Re
    } = Q();
    oe.onEnter = ye, oe.onExited = Re;
  }
  const ce = {
    slots: {
      root: A.Root,
      backdrop: A.Backdrop,
      ...le
    },
    slotProps: {
      ...M,
      ...ae
    }
  }, [ue, Ce] = Gt("root", {
    ref: i,
    elementType: eT,
    externalForwardedProps: {
      ...ce,
      ...ee,
      component: x
    },
    getSlotProps: G,
    ownerState: re,
    className: we(m, ne?.root, !re.open && re.exited && ne?.hidden)
  }), [be, ze] = Gt("backdrop", {
    ref: f?.ref,
    elementType: c,
    externalForwardedProps: ce,
    shouldForwardComponentProp: !0,
    additionalProps: f,
    getSlotProps: (ye) => O({
      ...ye,
      onClick: (Re) => {
        ye?.onClick && ye.onClick(Re);
      }
    }),
    className: we(f?.className, ne?.backdrop),
    ownerState: re
  });
  return !w && !W && (!V || C) ? null : /* @__PURE__ */ I.jsx(uE, {
    ref: ie,
    container: b,
    disablePortal: U,
    children: /* @__PURE__ */ I.jsxs(ue, {
      ...Ce,
      children: [!D && c ? /* @__PURE__ */ I.jsx(be, {
        ...ze
      }) : null, /* @__PURE__ */ I.jsx(ZE, {
        disableEnforceFocus: S,
        disableAutoFocus: T,
        disableRestoreFocus: q,
        isEnabled: te,
        open: W,
        children: /* @__PURE__ */ E.cloneElement(h, oe)
      })]
    })
  });
}), aT = (a) => {
  const {
    classes: r,
    disableUnderline: i,
    startAdornment: s,
    endAdornment: c,
    size: f,
    hiddenLabel: d,
    multiline: m
  } = a, g = {
    root: ["root", !i && "underline", s && "adornedStart", c && "adornedEnd", f === "small" && `size${$e(f)}`, d && "hiddenLabel", m && "multiline"],
    input: ["input"]
  }, h = dt(g, vE, r);
  return {
    ...r,
    // forward classes to the InputBase
    ...h
  };
}, lT = ve(ws, {
  shouldForwardProp: (a) => Yn(a) || a === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [...Ms(a, r), !i.disableUnderline && r.underline];
  }
})(At(({
  theme: a
}) => {
  const r = a.palette.mode === "light", i = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", s = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", c = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", f = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: a.vars ? a.vars.palette.FilledInput.bg : s,
    borderTopLeftRadius: (a.vars || a).shape.borderRadius,
    borderTopRightRadius: (a.vars || a).shape.borderRadius,
    transition: a.transitions.create("background-color", {
      duration: a.transitions.duration.shorter,
      easing: a.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: a.vars ? a.vars.palette.FilledInput.hoverBg : c,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: a.vars ? a.vars.palette.FilledInput.bg : s
      }
    },
    [`&.${il.focused}`]: {
      backgroundColor: a.vars ? a.vars.palette.FilledInput.bg : s
    },
    [`&.${il.disabled}`]: {
      backgroundColor: a.vars ? a.vars.palette.FilledInput.disabledBg : f
    },
    variants: [{
      props: ({
        ownerState: d
      }) => !d.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: a.transitions.create("transform", {
            duration: a.transitions.duration.shorter,
            easing: a.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${il.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${il.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (a.vars || a).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${a.vars ? a.alpha(a.vars.palette.common.onBackground, a.vars.opacity.inputUnderline) : i}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: a.transitions.create("border-bottom-color", {
            duration: a.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${il.disabled}, .${il.error}):before`]: {
          borderBottom: `1px solid ${(a.vars || a).palette.text.primary}`
        },
        [`&.${il.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(a.palette).filter(ml()).map(([d]) => ({
      props: {
        disableUnderline: !1,
        color: d
      },
      style: {
        "&::after": {
          borderBottom: `2px solid ${(a.vars || a).palette[d]?.main}`
        }
      }
    })), {
      props: ({
        ownerState: d
      }) => d.startAdornment,
      style: {
        paddingLeft: 12
      }
    }, {
      props: ({
        ownerState: d
      }) => d.endAdornment,
      style: {
        paddingRight: 12
      }
    }, {
      props: ({
        ownerState: d
      }) => d.multiline,
      style: {
        padding: "25px 12px 8px"
      }
    }, {
      props: ({
        ownerState: d,
        size: m
      }) => d.multiline && m === "small",
      style: {
        paddingTop: 21,
        paddingBottom: 4
      }
    }, {
      props: ({
        ownerState: d
      }) => d.multiline && d.hiddenLabel,
      style: {
        paddingTop: 16,
        paddingBottom: 17
      }
    }, {
      props: ({
        ownerState: d
      }) => d.multiline && d.hiddenLabel && d.size === "small",
      style: {
        paddingTop: 8,
        paddingBottom: 9
      }
    }]
  };
})), rT = ve(zs, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Os
})(At(({
  theme: a
}) => ({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  ...!a.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: a.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: a.palette.mode === "light" ? null : "#fff",
      caretColor: a.palette.mode === "light" ? null : "#fff",
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    }
  },
  ...a.vars && {
    "&:-webkit-autofill": {
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    },
    [a.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      paddingTop: 21,
      paddingBottom: 4
    }
  }, {
    props: ({
      ownerState: r
    }) => r.hiddenLabel,
    style: {
      paddingTop: 16,
      paddingBottom: 17
    }
  }, {
    props: ({
      ownerState: r
    }) => r.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: r
    }) => r.endAdornment,
    style: {
      paddingRight: 0
    }
  }, {
    props: ({
      ownerState: r
    }) => r.hiddenLabel && r.size === "small",
    style: {
      paddingTop: 8,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState: r
    }) => r.multiline,
    style: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0
    }
  }]
}))), ld = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const s = pt({
    props: r,
    name: "MuiFilledInput"
  }), {
    disableUnderline: c = !1,
    components: f = {},
    componentsProps: d,
    fullWidth: m = !1,
    hiddenLabel: g,
    // declare here to prevent spreading to DOM
    inputComponent: h = "input",
    multiline: b = !1,
    slotProps: x,
    slots: A = {},
    type: M = "text",
    ...T
  } = s, S = {
    ...s,
    disableUnderline: c,
    fullWidth: m,
    inputComponent: h,
    multiline: b,
    type: M
  }, z = aT(s), U = {
    root: {
      ownerState: S
    },
    input: {
      ownerState: S
    }
  }, q = x ?? d ? Vt(U, x ?? d) : U, N = A.root ?? f.Root ?? lT, D = A.input ?? f.Input ?? rT;
  return /* @__PURE__ */ I.jsx(ad, {
    slots: {
      root: N,
      input: D
    },
    slotProps: q,
    fullWidth: m,
    inputComponent: h,
    multiline: b,
    ref: i,
    type: M,
    ...T,
    classes: z
  });
});
ld.muiName = "Input";
function iT(a) {
  return ft("MuiFormControl", a);
}
ot("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const oT = (a) => {
  const {
    classes: r,
    margin: i,
    fullWidth: s
  } = a, c = {
    root: ["root", i !== "none" && `margin${$e(i)}`, s && "fullWidth"]
  };
  return dt(c, iT, r);
}, sT = ve("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, r[`margin${$e(i.margin)}`], i.fullWidth && r.fullWidth];
  }
})({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top",
  // Fix alignment issue on Safari.
  variants: [{
    props: {
      margin: "normal"
    },
    style: {
      marginTop: 16,
      marginBottom: 8
    }
  }, {
    props: {
      margin: "dense"
    },
    style: {
      marginTop: 8,
      marginBottom: 4
    }
  }, {
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }]
}), uT = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const s = pt({
    props: r,
    name: "MuiFormControl"
  }), {
    children: c,
    className: f,
    color: d = "primary",
    component: m = "div",
    disabled: g = !1,
    error: h = !1,
    focused: b,
    fullWidth: x = !1,
    hiddenLabel: A = !1,
    margin: M = "none",
    required: T = !1,
    size: S = "medium",
    variant: z = "outlined",
    ...U
  } = s, q = {
    ...s,
    color: d,
    component: m,
    disabled: g,
    error: h,
    fullWidth: x,
    hiddenLabel: A,
    margin: M,
    required: T,
    size: S,
    variant: z
  }, N = oT(q), [D, w] = E.useState(() => {
    let G = !1;
    return c && E.Children.forEach(c, (O) => {
      if (!nf(O, ["Input", "Select"]))
        return;
      const Q = nf(O, ["Select"]) ? O.props.input : O;
      Q && pE(Q.props) && (G = !0);
    }), G;
  }), [k, X] = E.useState(() => {
    let G = !1;
    return c && E.Children.forEach(c, (O) => {
      nf(O, ["Input", "Select"]) && (fs(O.props, !0) || fs(O.props.inputProps, !0)) && (G = !0);
    }), G;
  }), [Z, W] = E.useState(!1);
  g && Z && W(!1);
  const ae = b !== void 0 && !g ? b : Z;
  let le;
  E.useRef(!1);
  const v = E.useCallback(() => {
    X(!0);
  }, []), ee = E.useCallback(() => {
    X(!1);
  }, []), Y = E.useMemo(() => ({
    adornedStart: D,
    setAdornedStart: w,
    color: d,
    disabled: g,
    error: h,
    filled: k,
    focused: ae,
    fullWidth: x,
    hiddenLabel: A,
    size: S,
    onBlur: () => {
      W(!1);
    },
    onFocus: () => {
      W(!0);
    },
    onEmpty: ee,
    onFilled: v,
    registerEffect: le,
    required: T,
    variant: z
  }), [D, d, g, h, k, ae, x, A, le, ee, v, T, S, z]);
  return /* @__PURE__ */ I.jsx(nd.Provider, {
    value: Y,
    children: /* @__PURE__ */ I.jsx(sT, {
      as: m,
      ownerState: q,
      className: we(N.root, f),
      ref: i,
      ...U,
      children: c
    })
  });
});
function cT(a) {
  return ft("MuiFormHelperText", a);
}
const lg = ot("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var rg;
const fT = (a) => {
  const {
    classes: r,
    contained: i,
    size: s,
    disabled: c,
    error: f,
    filled: d,
    focused: m,
    required: g
  } = a, h = {
    root: ["root", c && "disabled", f && "error", s && `size${$e(s)}`, i && "contained", m && "focused", d && "filled", g && "required"]
  };
  return dt(h, cT, r);
}, dT = ve("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, i.size && r[`size${$e(i.size)}`], i.contained && r.contained, i.filled && r.filled];
  }
})(At(({
  theme: a
}) => ({
  color: (a.vars || a).palette.text.secondary,
  ...a.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${lg.disabled}`]: {
    color: (a.vars || a).palette.text.disabled
  },
  [`&.${lg.error}`]: {
    color: (a.vars || a).palette.error.main
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginTop: 4
    }
  }, {
    props: ({
      ownerState: r
    }) => r.contained,
    style: {
      marginLeft: 14,
      marginRight: 14
    }
  }]
}))), pT = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const s = pt({
    props: r,
    name: "MuiFormHelperText"
  }), {
    children: c,
    className: f,
    component: d = "p",
    disabled: m,
    error: g,
    filled: h,
    focused: b,
    margin: x,
    required: A,
    variant: M,
    ...T
  } = s, S = dr(), z = fr({
    props: s,
    muiFormControl: S,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), U = {
    ...s,
    component: d,
    contained: z.variant === "filled" || z.variant === "outlined",
    variant: z.variant,
    size: z.size,
    disabled: z.disabled,
    error: z.error,
    filled: z.filled,
    focused: z.focused,
    required: z.required
  };
  delete U.ownerState;
  const q = fT(U);
  return /* @__PURE__ */ I.jsx(dT, {
    as: d,
    className: we(q.root, f),
    ref: i,
    ...T,
    ownerState: U,
    children: c === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      rg || (rg = /* @__PURE__ */ I.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : c
  });
});
function mT(a) {
  return ft("MuiFormLabel", a);
}
const xi = ot("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), hT = (a) => {
  const {
    classes: r,
    color: i,
    focused: s,
    disabled: c,
    error: f,
    filled: d,
    required: m
  } = a, g = {
    root: ["root", `color${$e(i)}`, c && "disabled", f && "error", d && "filled", s && "focused", m && "required"],
    asterisk: ["asterisk", f && "error"]
  };
  return dt(g, mT, r);
}, gT = ve("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, i.color === "secondary" && r.colorSecondary, i.filled && r.filled];
  }
})(At(({
  theme: a
}) => ({
  color: (a.vars || a).palette.text.secondary,
  ...a.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(a.palette).filter(ml()).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      [`&.${xi.focused}`]: {
        color: (a.vars || a).palette[r].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${xi.disabled}`]: {
        color: (a.vars || a).palette.text.disabled
      },
      [`&.${xi.error}`]: {
        color: (a.vars || a).palette.error.main
      }
    }
  }]
}))), yT = ve("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(At(({
  theme: a
}) => ({
  [`&.${xi.error}`]: {
    color: (a.vars || a).palette.error.main
  }
}))), vT = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const s = pt({
    props: r,
    name: "MuiFormLabel"
  }), {
    children: c,
    className: f,
    color: d,
    component: m = "label",
    disabled: g,
    error: h,
    filled: b,
    focused: x,
    required: A,
    ...M
  } = s, T = dr(), S = fr({
    props: s,
    muiFormControl: T,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), z = {
    ...s,
    color: S.color || "primary",
    component: m,
    disabled: S.disabled,
    error: S.error,
    filled: S.filled,
    focused: S.focused,
    required: S.required
  }, U = hT(z);
  return /* @__PURE__ */ I.jsxs(gT, {
    as: m,
    ownerState: z,
    className: we(U.root, f),
    ref: i,
    ...M,
    children: [c, S.required && /* @__PURE__ */ I.jsxs(yT, {
      ownerState: z,
      "aria-hidden": !0,
      className: U.asterisk,
      children: [" ", "*"]
    })]
  });
});
function Mf(a) {
  return `scale(${a}, ${a ** 2})`;
}
const bT = {
  entering: {
    opacity: 1,
    transform: Mf(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, rf = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Of = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const {
    addEndListener: s,
    appear: c = !0,
    children: f,
    easing: d,
    in: m,
    onEnter: g,
    onEntered: h,
    onEntering: b,
    onExit: x,
    onExited: A,
    onExiting: M,
    style: T,
    timeout: S = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: z = Gn,
    ...U
  } = r, q = oy(), N = E.useRef(), D = Wf(), w = E.useRef(null), k = It(w, Bi(f), i), X = (G) => (O) => {
    if (G) {
      const Q = w.current;
      O === void 0 ? G(Q) : G(Q, O);
    }
  }, Z = X(b), W = X((G, O) => {
    sy(G);
    const {
      duration: Q,
      delay: ie,
      easing: te
    } = us({
      style: T,
      timeout: S,
      easing: d
    }, {
      mode: "enter"
    });
    let C;
    S === "auto" ? (C = D.transitions.getAutoHeightDuration(G.clientHeight), N.current = C) : C = Q, G.style.transition = [D.transitions.create("opacity", {
      duration: C,
      delay: ie
    }), D.transitions.create("transform", {
      duration: rf ? C : C * 0.666,
      delay: ie,
      easing: te
    })].join(","), g && g(G, O);
  }), ae = X(h), le = X(M), v = X((G) => {
    const {
      duration: O,
      delay: Q,
      easing: ie
    } = us({
      style: T,
      timeout: S,
      easing: d
    }, {
      mode: "exit"
    });
    let te;
    S === "auto" ? (te = D.transitions.getAutoHeightDuration(G.clientHeight), N.current = te) : te = O, G.style.transition = [D.transitions.create("opacity", {
      duration: te,
      delay: Q
    }), D.transitions.create("transform", {
      duration: rf ? te : te * 0.666,
      delay: rf ? Q : Q || te * 0.333,
      easing: ie
    })].join(","), G.style.opacity = 0, G.style.transform = Mf(0.75), x && x(G);
  }), ee = X(A), Y = (G) => {
    S === "auto" && q.start(N.current || 0, G), s && s(w.current, G);
  };
  return /* @__PURE__ */ I.jsx(z, {
    appear: c,
    in: m,
    nodeRef: w,
    onEnter: W,
    onEntered: ae,
    onEntering: Z,
    onExit: v,
    onExited: ee,
    onExiting: le,
    addEndListener: Y,
    timeout: S === "auto" ? null : S,
    ...U,
    children: (G, {
      ownerState: O,
      ...Q
    }) => /* @__PURE__ */ E.cloneElement(f, {
      style: {
        opacity: 0,
        transform: Mf(0.75),
        visibility: G === "exited" && !m ? "hidden" : void 0,
        ...bT[G],
        ...T,
        ...f.props.style
      },
      ref: k,
      ...Q
    })
  });
});
Of && (Of.muiSupportAuto = !0);
const ST = (a) => {
  const {
    classes: r,
    disableUnderline: i
  } = a, c = dt({
    root: ["root", !i && "underline"],
    input: ["input"]
  }, gE, r);
  return {
    ...r,
    // forward classes to the InputBase
    ...c
  };
}, xT = ve(ws, {
  shouldForwardProp: (a) => Yn(a) || a === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [...Ms(a, r), !i.disableUnderline && r.underline];
  }
})(At(({
  theme: a
}) => {
  let i = a.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return a.vars && (i = a.alpha(a.vars.palette.common.onBackground, a.vars.opacity.inputUnderline)), {
    position: "relative",
    variants: [{
      props: ({
        ownerState: s
      }) => s.formControl,
      style: {
        "label + &": {
          marginTop: 16
        }
      }
    }, {
      props: ({
        ownerState: s
      }) => !s.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: a.transitions.create("transform", {
            duration: a.transitions.duration.shorter,
            easing: a.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${pi.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${pi.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (a.vars || a).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${i}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: a.transitions.create("border-bottom-color", {
            duration: a.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${pi.disabled}, .${pi.error}):before`]: {
          borderBottom: `2px solid ${(a.vars || a).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${i}`
          }
        },
        [`&.${pi.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(a.palette).filter(ml()).map(([s]) => ({
      props: {
        color: s,
        disableUnderline: !1
      },
      style: {
        "&::after": {
          borderBottom: `2px solid ${(a.vars || a).palette[s].main}`
        }
      }
    }))]
  };
})), ET = ve(zs, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Os
})({}), rd = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const s = pt({
    props: r,
    name: "MuiInput"
  }), {
    disableUnderline: c = !1,
    components: f = {},
    componentsProps: d,
    fullWidth: m = !1,
    inputComponent: g = "input",
    multiline: h = !1,
    slotProps: b,
    slots: x = {},
    type: A = "text",
    ...M
  } = s, T = ST(s), z = {
    root: {
      ownerState: {
        disableUnderline: c
      }
    }
  }, U = b ?? d ? Vt(b ?? d, z) : z, q = x.root ?? f.Root ?? xT, N = x.input ?? f.Input ?? ET;
  return /* @__PURE__ */ I.jsx(ad, {
    slots: {
      root: q,
      input: N
    },
    slotProps: U,
    fullWidth: m,
    inputComponent: g,
    multiline: h,
    ref: i,
    type: A,
    ...M,
    classes: T
  });
});
rd.muiName = "Input";
function TT(a) {
  return ft("MuiInputLabel", a);
}
ot("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const CT = (a) => {
  const {
    classes: r,
    formControl: i,
    size: s,
    shrink: c,
    disableAnimation: f,
    variant: d,
    required: m
  } = a, g = {
    root: ["root", i && "formControl", !f && "animated", c && "shrink", s && s !== "medium" && `size${$e(s)}`, d],
    asterisk: [m && "asterisk"]
  }, h = dt(g, TT, r);
  return {
    ...r,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...h
  };
}, RT = ve(vT, {
  shouldForwardProp: (a) => Yn(a) || a === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [{
      [`& .${xi.asterisk}`]: r.asterisk
    }, r.root, i.formControl && r.formControl, i.size === "small" && r.sizeSmall, i.shrink && r.shrink, !i.disableAnimation && r.animated, i.focused && r.focused, r[i.variant]];
  }
})(At(({
  theme: a
}) => ({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
  variants: [{
    props: ({
      ownerState: r
    }) => r.formControl,
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: "translate(0, 20px) scale(1)"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      // Compensation for the `Input.inputSizeSmall` style.
      transform: "translate(0, 17px) scale(1)"
    }
  }, {
    props: ({
      ownerState: r
    }) => r.shrink,
    style: {
      transform: "translate(0, -1.5px) scale(0.75)",
      transformOrigin: "top left",
      maxWidth: "133%"
    }
  }, {
    props: ({
      ownerState: r
    }) => !r.disableAnimation,
    style: {
      transition: a.transitions.create(["color", "transform", "max-width"], {
        duration: a.transitions.duration.shorter,
        easing: a.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(12px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "filled",
      size: "small"
    },
    style: {
      transform: "translate(12px, 13px) scale(1)"
    }
  }, {
    props: ({
      variant: r,
      ownerState: i
    }) => r === "filled" && i.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      transform: "translate(12px, 7px) scale(0.75)",
      maxWidth: "calc(133% - 24px)"
    }
  }, {
    props: ({
      variant: r,
      ownerState: i,
      size: s
    }) => r === "filled" && i.shrink && s === "small",
    style: {
      transform: "translate(12px, 4px) scale(0.75)"
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(14px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "outlined",
      size: "small"
    },
    style: {
      transform: "translate(14px, 9px) scale(1)"
    }
  }, {
    props: ({
      variant: r,
      ownerState: i
    }) => r === "outlined" && i.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      // Theoretically, we should have (8+5)*2/0.75 = 34px
      // but it feels a better when it bleeds a bit on the left, so 32px.
      maxWidth: "calc(133% - 32px)",
      transform: "translate(14px, -9px) scale(0.75)"
    }
  }]
}))), AT = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const s = pt({
    name: "MuiInputLabel",
    props: r
  }), {
    disableAnimation: c = !1,
    margin: f,
    shrink: d,
    variant: m,
    className: g,
    ...h
  } = s, b = dr();
  let x = d;
  typeof x > "u" && b && (x = b.filled || b.focused || b.adornedStart);
  const A = fr({
    props: s,
    muiFormControl: b,
    states: ["size", "variant", "required", "focused"]
  }), M = {
    ...s,
    disableAnimation: c,
    formControl: b,
    shrink: x,
    size: A.size,
    variant: A.variant,
    required: A.required,
    focused: A.focused
  }, T = CT(M);
  return /* @__PURE__ */ I.jsx(RT, {
    "data-shrink": x,
    ref: i,
    className: we(T.root, g),
    ...h,
    ownerState: M,
    classes: T
  });
}), MT = /* @__PURE__ */ E.createContext({});
function OT(a) {
  return ft("MuiList", a);
}
ot("MuiList", ["root", "padding", "dense", "subheader"]);
const wT = (a) => {
  const {
    classes: r,
    disablePadding: i,
    dense: s,
    subheader: c
  } = a;
  return dt({
    root: ["root", !i && "padding", s && "dense", c && "subheader"]
  }, OT, r);
}, zT = ve("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, !i.disablePadding && r.padding, i.dense && r.dense, i.subheader && r.subheader];
  }
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  variants: [{
    props: ({
      ownerState: a
    }) => !a.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState: a
    }) => a.subheader,
    style: {
      paddingTop: 0
    }
  }]
}), _T = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const s = pt({
    props: r,
    name: "MuiList"
  }), {
    children: c,
    className: f,
    component: d = "ul",
    dense: m = !1,
    disablePadding: g = !1,
    subheader: h,
    ...b
  } = s, x = E.useMemo(() => ({
    dense: m
  }), [m]), A = {
    ...s,
    component: d,
    dense: m,
    disablePadding: g
  }, M = wT(A);
  return /* @__PURE__ */ I.jsx(MT.Provider, {
    value: x,
    children: /* @__PURE__ */ I.jsxs(zT, {
      as: d,
      className: we(M.root, f),
      ref: i,
      ownerState: A,
      ...b,
      children: [h, c]
    })
  });
});
function of(a, r, i) {
  return a === r ? a.firstChild : r && r.nextElementSibling ? r.nextElementSibling : i ? null : a.firstChild;
}
function ig(a, r, i) {
  return a === r ? i ? a.firstChild : a.lastChild : r && r.previousElementSibling ? r.previousElementSibling : i ? null : a.lastChild;
}
function gy(a, r) {
  if (r === void 0)
    return !0;
  let i = a.innerText;
  return i === void 0 && (i = a.textContent), i = i.trim().toLowerCase(), i.length === 0 ? !1 : r.repeating ? i[0] === r.keys[0] : i.startsWith(r.keys.join(""));
}
function mi(a, r, i, s, c, f) {
  let d = !1, m = c(a, r, r ? i : !1);
  for (; m; ) {
    if (m === a.firstChild) {
      if (d)
        return !1;
      d = !0;
    }
    const g = s ? !1 : m.disabled || m.getAttribute("aria-disabled") === "true";
    if (!m.hasAttribute("tabindex") || !gy(m, f) || g)
      m = c(a, m, i);
    else
      return m.focus(), !0;
  }
  return !1;
}
const DT = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: s,
    autoFocus: c = !1,
    autoFocusItem: f = !1,
    children: d,
    className: m,
    disabledItemsFocusable: g = !1,
    disableListWrap: h = !1,
    onKeyDown: b,
    variant: x = "selectedMenu",
    ...A
  } = r, M = E.useRef(null), T = E.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  ca(() => {
    c && M.current.focus();
  }, [c]), E.useImperativeHandle(s, () => ({
    adjustStyleForScrollbar: (N, {
      direction: D
    }) => {
      const w = !M.current.style.width;
      if (N.clientHeight < M.current.clientHeight && w) {
        const k = `${hy(fa(N))}px`;
        M.current.style[D === "rtl" ? "paddingLeft" : "paddingRight"] = k, M.current.style.width = `calc(100% + ${k})`;
      }
      return M.current;
    }
  }), []);
  const S = (N) => {
    const D = M.current, w = N.key;
    if (N.ctrlKey || N.metaKey || N.altKey) {
      b && b(N);
      return;
    }
    const X = Mn(D).activeElement;
    if (w === "ArrowDown")
      N.preventDefault(), mi(D, X, h, g, of);
    else if (w === "ArrowUp")
      N.preventDefault(), mi(D, X, h, g, ig);
    else if (w === "Home")
      N.preventDefault(), mi(D, null, h, g, of);
    else if (w === "End")
      N.preventDefault(), mi(D, null, h, g, ig);
    else if (w.length === 1) {
      const Z = T.current, W = w.toLowerCase(), ae = performance.now();
      Z.keys.length > 0 && (ae - Z.lastTime > 500 ? (Z.keys = [], Z.repeating = !0, Z.previousKeyMatched = !0) : Z.repeating && W !== Z.keys[0] && (Z.repeating = !1)), Z.lastTime = ae, Z.keys.push(W);
      const le = X && !Z.repeating && gy(X, Z);
      Z.previousKeyMatched && (le || mi(D, X, !1, g, of, Z)) ? N.preventDefault() : Z.previousKeyMatched = !1;
    }
    b && b(N);
  }, z = It(M, i);
  let U = -1;
  E.Children.forEach(d, (N, D) => {
    if (!/* @__PURE__ */ E.isValidElement(N)) {
      U === D && (U += 1, U >= d.length && (U = -1));
      return;
    }
    N.props.disabled || (x === "selectedMenu" && N.props.selected || U === -1) && (U = D), U === D && (N.props.disabled || N.props.muiSkipListHighlight || N.type.muiSkipListHighlight) && (U += 1, U >= d.length && (U = -1));
  });
  const q = E.Children.map(d, (N, D) => {
    if (D === U) {
      const w = {};
      return f && (w.autoFocus = !0), N.props.tabIndex === void 0 && x === "selectedMenu" && (w.tabIndex = 0), /* @__PURE__ */ E.cloneElement(N, w);
    }
    return N;
  });
  return /* @__PURE__ */ I.jsx(_T, {
    role: "menu",
    ref: z,
    className: m,
    onKeyDown: S,
    tabIndex: c ? 0 : -1,
    ...A,
    children: q
  });
});
function NT(a) {
  return ft("MuiPopover", a);
}
ot("MuiPopover", ["root", "paper"]);
function og(a, r) {
  let i = 0;
  return typeof r == "number" ? i = r : r === "center" ? i = a.height / 2 : r === "bottom" && (i = a.height), i;
}
function sg(a, r) {
  let i = 0;
  return typeof r == "number" ? i = r : r === "center" ? i = a.width / 2 : r === "right" && (i = a.width), i;
}
function ug(a) {
  return [a.horizontal, a.vertical].map((r) => typeof r == "number" ? `${r}px` : r).join(" ");
}
function Jo(a) {
  return typeof a == "function" ? a() : a;
}
const BT = (a) => {
  const {
    classes: r
  } = a;
  return dt({
    root: ["root"],
    paper: ["paper"]
  }, NT, r);
}, UT = ve(nT, {
  name: "MuiPopover",
  slot: "Root"
})({}), yy = ve(uy, {
  name: "MuiPopover",
  slot: "Paper"
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), kT = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const s = pt({
    props: r,
    name: "MuiPopover"
  }), {
    action: c,
    anchorEl: f,
    anchorOrigin: d = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: m,
    anchorReference: g = "anchorEl",
    children: h,
    className: b,
    container: x,
    elevation: A = 8,
    marginThreshold: M = 16,
    open: T,
    PaperProps: S = {},
    // TODO: remove in v7
    slots: z = {},
    slotProps: U = {},
    transformOrigin: q = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: N,
    // TODO: remove in v7
    transitionDuration: D = "auto",
    TransitionProps: w = {},
    // TODO: remove in v7
    disableScrollLock: k = !1,
    ...X
  } = s, Z = E.useRef(), W = {
    ...s,
    anchorOrigin: d,
    anchorReference: g,
    elevation: A,
    marginThreshold: M,
    transformOrigin: q,
    TransitionComponent: N,
    transitionDuration: D,
    TransitionProps: w
  }, ae = BT(W), le = E.useCallback(() => {
    if (g === "anchorPosition")
      return m;
    const ye = Jo(f), _e = (ye && ye.nodeType === 1 ? ye : Mn(Z.current).body).getBoundingClientRect();
    return {
      top: _e.top + og(_e, d.vertical),
      left: _e.left + sg(_e, d.horizontal)
    };
  }, [f, d.horizontal, d.vertical, m, g]), v = E.useCallback((ye) => ({
    vertical: og(ye, q.vertical),
    horizontal: sg(ye, q.horizontal)
  }), [q.horizontal, q.vertical]), ee = E.useCallback((ye) => {
    const Re = {
      width: ye.offsetWidth,
      height: ye.offsetHeight
    }, _e = v(Re);
    if (g === "none")
      return {
        top: null,
        left: null,
        transformOrigin: ug(_e)
      };
    const mt = le();
    let Se = mt.top - _e.vertical, qe = mt.left - _e.horizontal;
    const Nt = Se + Re.height, Ye = qe + Re.width, at = fa(Jo(f)), nt = at.innerHeight - M, st = at.innerWidth - M;
    if (M !== null && Se < M) {
      const Qe = Se - M;
      Se -= Qe, _e.vertical += Qe;
    } else if (M !== null && Nt > nt) {
      const Qe = Nt - nt;
      Se -= Qe, _e.vertical += Qe;
    }
    if (M !== null && qe < M) {
      const Qe = qe - M;
      qe -= Qe, _e.horizontal += Qe;
    } else if (Ye > st) {
      const Qe = Ye - st;
      qe -= Qe, _e.horizontal += Qe;
    }
    return {
      top: `${Math.round(Se)}px`,
      left: `${Math.round(qe)}px`,
      transformOrigin: ug(_e)
    };
  }, [f, g, le, v, M]), [Y, G] = E.useState(T), O = E.useCallback(() => {
    const ye = Z.current;
    if (!ye)
      return;
    const Re = ee(ye);
    Re.top !== null && ye.style.setProperty("top", Re.top), Re.left !== null && (ye.style.left = Re.left), ye.style.transformOrigin = Re.transformOrigin, G(!0);
  }, [ee]);
  E.useEffect(() => (k && window.addEventListener("scroll", O), () => window.removeEventListener("scroll", O)), [f, k, O]);
  const Q = () => {
    O();
  }, ie = () => {
    G(!1);
  };
  E.useEffect(() => {
    T && O();
  }), E.useImperativeHandle(c, () => T ? {
    updatePosition: () => {
      O();
    }
  } : null, [T, O]), E.useEffect(() => {
    if (!T)
      return;
    const ye = ny(() => {
      O();
    }), Re = fa(Jo(f));
    return Re.addEventListener("resize", ye), () => {
      ye.clear(), Re.removeEventListener("resize", ye);
    };
  }, [f, T, O]);
  let te = D;
  const C = {
    slots: {
      transition: N,
      ...z
    },
    slotProps: {
      transition: w,
      paper: S,
      ...U
    }
  }, [V, re] = Gt("transition", {
    elementType: Of,
    externalForwardedProps: C,
    ownerState: W,
    getSlotProps: (ye) => ({
      ...ye,
      onEntering: (Re, _e) => {
        ye.onEntering?.(Re, _e), Q();
      },
      onExited: (Re) => {
        ye.onExited?.(Re), ie();
      }
    }),
    additionalProps: {
      appear: !0,
      in: T
    }
  });
  D === "auto" && !V.muiSupportAuto && (te = void 0);
  const ne = x || (f ? Mn(Jo(f)).body : void 0), [oe, {
    slots: ce,
    slotProps: ue,
    ...Ce
  }] = Gt("root", {
    ref: i,
    elementType: UT,
    externalForwardedProps: {
      ...C,
      ...X
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: z.backdrop
      },
      slotProps: {
        backdrop: y2(typeof U.backdrop == "function" ? U.backdrop(W) : U.backdrop, {
          invisible: !0
        })
      },
      container: ne,
      open: T
    },
    ownerState: W,
    className: we(ae.root, b)
  }), [be, ze] = Gt("paper", {
    ref: Z,
    className: ae.paper,
    elementType: yy,
    externalForwardedProps: C,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: A,
      style: Y ? void 0 : {
        opacity: 0
      }
    },
    ownerState: W
  });
  return /* @__PURE__ */ I.jsx(oe, {
    ...Ce,
    ...!Rf(oe) && {
      slots: ce,
      slotProps: ue,
      disableScrollLock: k
    },
    children: /* @__PURE__ */ I.jsx(V, {
      ...re,
      timeout: te,
      children: /* @__PURE__ */ I.jsx(be, {
        ...ze,
        children: h
      })
    })
  });
});
function HT(a) {
  return ft("MuiMenu", a);
}
ot("MuiMenu", ["root", "paper", "list"]);
const LT = {
  vertical: "top",
  horizontal: "right"
}, jT = {
  vertical: "top",
  horizontal: "left"
}, $T = (a) => {
  const {
    classes: r
  } = a;
  return dt({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, HT, r);
}, qT = ve(kT, {
  shouldForwardProp: (a) => Yn(a) || a === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), YT = ve(yy, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), GT = ve(DT, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), VT = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const s = pt({
    props: r,
    name: "MuiMenu"
  }), {
    autoFocus: c = !0,
    children: f,
    className: d,
    disableAutoFocusItem: m = !1,
    MenuListProps: g = {},
    onClose: h,
    open: b,
    PaperProps: x = {},
    PopoverClasses: A,
    transitionDuration: M = "auto",
    TransitionProps: {
      onEntering: T,
      ...S
    } = {},
    variant: z = "selectedMenu",
    slots: U = {},
    slotProps: q = {},
    ...N
  } = s, D = ux(), w = {
    ...s,
    autoFocus: c,
    disableAutoFocusItem: m,
    MenuListProps: g,
    onEntering: T,
    PaperProps: x,
    transitionDuration: M,
    TransitionProps: S,
    variant: z
  }, k = $T(w), X = c && !m && b, Z = E.useRef(null), W = (te, C) => {
    Z.current && Z.current.adjustStyleForScrollbar(te, {
      direction: D ? "rtl" : "ltr"
    }), T && T(te, C);
  }, ae = (te) => {
    te.key === "Tab" && (te.preventDefault(), h && h(te, "tabKeyDown"));
  };
  let le = -1;
  E.Children.map(f, (te, C) => {
    /* @__PURE__ */ E.isValidElement(te) && (te.props.disabled || (z === "selectedMenu" && te.props.selected || le === -1) && (le = C));
  });
  const v = {
    slots: U,
    slotProps: {
      list: g,
      transition: S,
      paper: x,
      ...q
    }
  }, ee = oE({
    elementType: U.root,
    externalSlotProps: q.root,
    ownerState: w,
    className: [k.root, d]
  }), [Y, G] = Gt("paper", {
    className: k.paper,
    elementType: YT,
    externalForwardedProps: v,
    shouldForwardComponentProp: !0,
    ownerState: w
  }), [O, Q] = Gt("list", {
    className: we(k.list, g.className),
    elementType: GT,
    shouldForwardComponentProp: !0,
    externalForwardedProps: v,
    getSlotProps: (te) => ({
      ...te,
      onKeyDown: (C) => {
        ae(C), te.onKeyDown?.(C);
      }
    }),
    ownerState: w
  }), ie = typeof v.slotProps.transition == "function" ? v.slotProps.transition(w) : v.slotProps.transition;
  return /* @__PURE__ */ I.jsx(qT, {
    onClose: h,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: D ? "right" : "left"
    },
    transformOrigin: D ? LT : jT,
    slots: {
      root: U.root,
      paper: Y,
      backdrop: U.backdrop,
      ...U.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: U.transition
      }
    },
    slotProps: {
      root: ee,
      paper: G,
      backdrop: typeof q.backdrop == "function" ? q.backdrop(w) : q.backdrop,
      transition: {
        ...ie,
        onEntering: (...te) => {
          W(...te), ie?.onEntering?.(...te);
        }
      }
    },
    open: b,
    ref: i,
    transitionDuration: M,
    ownerState: w,
    ...N,
    classes: A,
    children: /* @__PURE__ */ I.jsx(O, {
      actions: Z,
      autoFocus: c && (le === -1 || m),
      autoFocusItem: X,
      variant: z,
      ...Q,
      children: f
    })
  });
});
function XT(a) {
  return ft("MuiNativeSelect", a);
}
const id = ot("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), KT = (a) => {
  const {
    classes: r,
    variant: i,
    disabled: s,
    multiple: c,
    open: f,
    error: d
  } = a, m = {
    select: ["select", i, s && "disabled", c && "multiple", d && "error"],
    icon: ["icon", `icon${$e(i)}`, f && "iconOpen", s && "disabled"]
  };
  return dt(m, XT, r);
}, vy = ve("select", {
  name: "MuiNativeSelect"
})(({
  theme: a
}) => ({
  // Reset
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  // Reset
  borderRadius: 0,
  cursor: "pointer",
  "&:focus": {
    // Reset Chrome style
    borderRadius: 0
  },
  [`&.${id.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (a.vars || a).palette.background.paper
  },
  variants: [{
    props: ({
      ownerState: r
    }) => r.variant !== "filled" && r.variant !== "outlined",
    style: {
      // Bump specificity to allow extending custom inputs
      "&&&": {
        paddingRight: 24,
        minWidth: 16
        // So it doesn't collapse.
      }
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      "&&&": {
        paddingRight: 32
      }
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      borderRadius: (a.vars || a).shape.borderRadius,
      "&:focus": {
        borderRadius: (a.vars || a).shape.borderRadius
        // Reset the reset for Chrome style
      },
      "&&&": {
        paddingRight: 32
      }
    }
  }]
})), QT = ve(vy, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Yn,
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.select, r[i.variant], i.error && r.error, {
      [`&.${id.multiple}`]: r.multiple
    }];
  }
})({}), by = ve("svg", {
  name: "MuiNativeSelect"
})(({
  theme: a
}) => ({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  // Center vertically, height is 1em
  top: "calc(50% - .5em)",
  // Don't block pointer events on the select under the icon.
  pointerEvents: "none",
  color: (a.vars || a).palette.action.active,
  [`&.${id.disabled}`]: {
    color: (a.vars || a).palette.action.disabled
  },
  variants: [{
    props: ({
      ownerState: r
    }) => r.open,
    style: {
      transform: "rotate(180deg)"
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      right: 7
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      right: 7
    }
  }]
})), ZT = ve(by, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.icon, i.variant && r[`icon${$e(i.variant)}`], i.open && r.iconOpen];
  }
})({}), PT = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const {
    className: s,
    disabled: c,
    error: f,
    IconComponent: d,
    inputRef: m,
    variant: g = "standard",
    ...h
  } = r, b = {
    ...r,
    disabled: c,
    variant: g,
    error: f
  }, x = KT(b);
  return /* @__PURE__ */ I.jsxs(E.Fragment, {
    children: [/* @__PURE__ */ I.jsx(QT, {
      ownerState: b,
      className: we(x.select, s),
      disabled: c,
      ref: m || i,
      ...h
    }), r.multiple ? null : /* @__PURE__ */ I.jsx(ZT, {
      as: d,
      ownerState: b,
      className: x.icon
    })]
  });
});
var cg;
const FT = ve("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Yn
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), WT = ve("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Yn
})(At(({
  theme: a
}) => ({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden",
  // Fix Horizontal scroll when label too long
  variants: [{
    props: ({
      ownerState: r
    }) => !r.withLabel,
    style: {
      padding: 0,
      lineHeight: "11px",
      // sync with `height` in `legend` styles
      transition: a.transitions.create("width", {
        duration: 150,
        easing: a.transitions.easing.easeOut
      })
    }
  }, {
    props: ({
      ownerState: r
    }) => r.withLabel,
    style: {
      display: "block",
      // Fix conflict with normalize.css and sanitize.css
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      transition: a.transitions.create("max-width", {
        duration: 50,
        easing: a.transitions.easing.easeOut
      }),
      whiteSpace: "nowrap",
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block",
        opacity: 0,
        visibility: "visible"
      }
    }
  }, {
    props: ({
      ownerState: r
    }) => r.withLabel && r.notched,
    style: {
      maxWidth: "100%",
      transition: a.transitions.create("max-width", {
        duration: 100,
        easing: a.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function JT(a) {
  const {
    children: r,
    classes: i,
    className: s,
    label: c,
    notched: f,
    ...d
  } = a, m = c != null && c !== "", g = {
    ...a,
    notched: f,
    withLabel: m
  };
  return /* @__PURE__ */ I.jsx(FT, {
    "aria-hidden": !0,
    className: s,
    ownerState: g,
    ...d,
    children: /* @__PURE__ */ I.jsx(WT, {
      ownerState: g,
      children: m ? /* @__PURE__ */ I.jsx("span", {
        children: c
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        cg || (cg = /* @__PURE__ */ I.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
const IT = (a) => {
  const {
    classes: r
  } = a, s = dt({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, yE, r);
  return {
    ...r,
    // forward classes to the InputBase
    ...s
  };
}, eC = ve(ws, {
  shouldForwardProp: (a) => Yn(a) || a === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Ms
})(At(({
  theme: a
}) => {
  const r = a.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (a.vars || a).shape.borderRadius,
    [`&:hover .${Bn.notchedOutline}`]: {
      borderColor: (a.vars || a).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Bn.notchedOutline}`]: {
        borderColor: a.vars ? a.alpha(a.vars.palette.common.onBackground, 0.23) : r
      }
    },
    [`&.${Bn.focused} .${Bn.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(a.palette).filter(ml()).map(([i]) => ({
      props: {
        color: i
      },
      style: {
        [`&.${Bn.focused} .${Bn.notchedOutline}`]: {
          borderColor: (a.vars || a).palette[i].main
        }
      }
    })), {
      props: {},
      // to overide the above style
      style: {
        [`&.${Bn.error} .${Bn.notchedOutline}`]: {
          borderColor: (a.vars || a).palette.error.main
        },
        [`&.${Bn.disabled} .${Bn.notchedOutline}`]: {
          borderColor: (a.vars || a).palette.action.disabled
        }
      }
    }, {
      props: ({
        ownerState: i
      }) => i.startAdornment,
      style: {
        paddingLeft: 14
      }
    }, {
      props: ({
        ownerState: i
      }) => i.endAdornment,
      style: {
        paddingRight: 14
      }
    }, {
      props: ({
        ownerState: i
      }) => i.multiline,
      style: {
        padding: "16.5px 14px"
      }
    }, {
      props: ({
        ownerState: i,
        size: s
      }) => i.multiline && s === "small",
      style: {
        padding: "8.5px 14px"
      }
    }]
  };
})), tC = ve(JT, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(At(({
  theme: a
}) => {
  const r = a.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: a.vars ? a.alpha(a.vars.palette.common.onBackground, 0.23) : r
  };
})), nC = ve(zs, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Os
})(At(({
  theme: a
}) => ({
  padding: "16.5px 14px",
  ...!a.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: a.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: a.palette.mode === "light" ? null : "#fff",
      caretColor: a.palette.mode === "light" ? null : "#fff",
      borderRadius: "inherit"
    }
  },
  ...a.vars && {
    "&:-webkit-autofill": {
      borderRadius: "inherit"
    },
    [a.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      padding: "8.5px 14px"
    }
  }, {
    props: ({
      ownerState: r
    }) => r.multiline,
    style: {
      padding: 0
    }
  }, {
    props: ({
      ownerState: r
    }) => r.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: r
    }) => r.endAdornment,
    style: {
      paddingRight: 0
    }
  }]
}))), od = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const s = pt({
    props: r,
    name: "MuiOutlinedInput"
  }), {
    components: c = {},
    fullWidth: f = !1,
    inputComponent: d = "input",
    label: m,
    multiline: g = !1,
    notched: h,
    slots: b = {},
    slotProps: x = {},
    type: A = "text",
    ...M
  } = s, T = IT(s), S = dr(), z = fr({
    props: s,
    muiFormControl: S,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), U = {
    ...s,
    color: z.color || "primary",
    disabled: z.disabled,
    error: z.error,
    focused: z.focused,
    formControl: S,
    fullWidth: f,
    hiddenLabel: z.hiddenLabel,
    multiline: g,
    size: z.size,
    type: A
  }, q = b.root ?? c.Root ?? eC, N = b.input ?? c.Input ?? nC, [D, w] = Gt("notchedOutline", {
    elementType: tC,
    className: T.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: U,
    externalForwardedProps: {
      slots: b,
      slotProps: x
    },
    additionalProps: {
      label: m != null && m !== "" && z.required ? /* @__PURE__ */ I.jsxs(E.Fragment, {
        children: [m, " ", "*"]
      }) : m
    }
  });
  return /* @__PURE__ */ I.jsx(ad, {
    slots: {
      root: q,
      input: N
    },
    slotProps: x,
    renderSuffix: (k) => /* @__PURE__ */ I.jsx(D, {
      ...w,
      notched: typeof h < "u" ? h : !!(k.startAdornment || k.filled || k.focused)
    }),
    fullWidth: f,
    inputComponent: d,
    multiline: g,
    ref: i,
    type: A,
    ...M,
    classes: {
      ...T,
      notchedOutline: null
    }
  });
});
od.muiName = "Input";
function Sy(a) {
  return ft("MuiSelect", a);
}
const hi = ot("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var fg;
const aC = ve(vy, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [
      // Win specificity over the input base
      {
        [`&.${hi.select}`]: r.select
      },
      {
        [`&.${hi.select}`]: r[i.variant]
      },
      {
        [`&.${hi.error}`]: r.error
      },
      {
        [`&.${hi.multiple}`]: r.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${hi.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), lC = ve(by, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.icon, i.variant && r[`icon${$e(i.variant)}`], i.open && r.iconOpen];
  }
})({}), rC = ve("input", {
  shouldForwardProp: (a) => ty(a) && a !== "classes",
  name: "MuiSelect",
  slot: "NativeInput"
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function dg(a, r) {
  return typeof r == "object" && r !== null ? a === r : String(a) === String(r);
}
function iC(a) {
  return a == null || typeof a == "string" && !a.trim();
}
const oC = (a) => {
  const {
    classes: r,
    variant: i,
    disabled: s,
    multiple: c,
    open: f,
    error: d
  } = a, m = {
    select: ["select", i, s && "disabled", c && "multiple", d && "error"],
    icon: ["icon", `icon${$e(i)}`, f && "iconOpen", s && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return dt(m, Sy, r);
}, sC = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const {
    "aria-describedby": s,
    "aria-label": c,
    autoFocus: f,
    autoWidth: d,
    children: m,
    className: g,
    defaultOpen: h,
    defaultValue: b,
    disabled: x,
    displayEmpty: A,
    error: M = !1,
    IconComponent: T,
    inputRef: S,
    labelId: z,
    MenuProps: U = {},
    multiple: q,
    name: N,
    onBlur: D,
    onChange: w,
    onClose: k,
    onFocus: X,
    onOpen: Z,
    open: W,
    readOnly: ae,
    renderValue: le,
    required: v,
    SelectDisplayProps: ee = {},
    tabIndex: Y,
    // catching `type` from Input which makes no sense for SelectInput
    type: G,
    value: O,
    variant: Q = "standard",
    ...ie
  } = r, [te, C] = V0({
    controlled: O,
    default: b,
    name: "Select"
  }), [V, re] = V0({
    controlled: W,
    default: h,
    name: "Select"
  }), ne = E.useRef(null), oe = E.useRef(null), [ce, ue] = E.useState(null), {
    current: Ce
  } = E.useRef(W != null), [be, ze] = E.useState(), ye = It(i, S), Re = E.useCallback((pe) => {
    oe.current = pe, pe && ue(pe);
  }, []), _e = ce?.parentNode;
  E.useImperativeHandle(ye, () => ({
    focus: () => {
      oe.current.focus();
    },
    node: ne.current,
    value: te
  }), [te]), E.useEffect(() => {
    h && V && ce && !Ce && (ze(d ? null : _e.clientWidth), oe.current.focus());
  }, [ce, d]), E.useEffect(() => {
    f && oe.current.focus();
  }, [f]), E.useEffect(() => {
    if (!z)
      return;
    const pe = Mn(oe.current).getElementById(z);
    if (pe) {
      const Le = () => {
        getSelection().isCollapsed && oe.current.focus();
      };
      return pe.addEventListener("click", Le), () => {
        pe.removeEventListener("click", Le);
      };
    }
  }, [z]);
  const mt = (pe, Le) => {
    pe ? Z && Z(Le) : k && k(Le), Ce || (ze(d ? null : _e.clientWidth), re(pe));
  }, Se = (pe) => {
    pe.button === 0 && (pe.preventDefault(), oe.current.focus(), mt(!0, pe));
  }, qe = (pe) => {
    mt(!1, pe);
  }, Nt = E.Children.toArray(m), Ye = (pe) => {
    const Le = Nt.find((ut) => ut.props.value === pe.target.value);
    Le !== void 0 && (C(Le.props.value), w && w(pe, Le));
  }, at = (pe) => (Le) => {
    let ut;
    if (Le.currentTarget.hasAttribute("tabindex")) {
      if (q) {
        ut = Array.isArray(te) ? te.slice() : [];
        const pa = te.indexOf(pe.props.value);
        pa === -1 ? ut.push(pe.props.value) : ut.splice(pa, 1);
      } else
        ut = pe.props.value;
      if (pe.props.onClick && pe.props.onClick(Le), te !== ut && (C(ut), w)) {
        const pa = Le.nativeEvent || Le, pr = new pa.constructor(pa.type, pa);
        Object.defineProperty(pr, "target", {
          writable: !0,
          value: {
            value: ut,
            name: N
          }
        }), w(pr, pe);
      }
      q || mt(!1, Le);
    }
  }, nt = (pe) => {
    ae || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].includes(pe.key) && (pe.preventDefault(), mt(!0, pe));
  }, st = ce !== null && V, Qe = (pe) => {
    !st && D && (Object.defineProperty(pe, "target", {
      writable: !0,
      value: {
        value: te,
        name: N
      }
    }), D(pe));
  };
  delete ie["aria-invalid"];
  let fe, en;
  const ht = [];
  let Tn = !1;
  (fs({
    value: te
  }) || A) && (le ? fe = le(te) : Tn = !0);
  const lt = Nt.map((pe) => {
    if (!/* @__PURE__ */ E.isValidElement(pe))
      return null;
    let Le;
    if (q) {
      if (!Array.isArray(te))
        throw new Error(sa(2));
      Le = te.some((ut) => dg(ut, pe.props.value)), Le && Tn && ht.push(pe.props.children);
    } else
      Le = dg(te, pe.props.value), Le && Tn && (en = pe.props.children);
    return /* @__PURE__ */ E.cloneElement(pe, {
      "aria-selected": Le ? "true" : "false",
      onClick: at(pe),
      onKeyUp: (ut) => {
        ut.key === " " && ut.preventDefault(), pe.props.onKeyUp && pe.props.onKeyUp(ut);
      },
      role: "option",
      selected: Le,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": pe.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  Tn && (q ? ht.length === 0 ? fe = null : fe = ht.reduce((pe, Le, ut) => (pe.push(Le), ut < ht.length - 1 && pe.push(", "), pe), []) : fe = en);
  let xe = be;
  !d && Ce && ce && (xe = _e.clientWidth);
  let Ze;
  typeof Y < "u" ? Ze = Y : Ze = x ? null : 0;
  const Be = ee.id || (N ? `mui-component-select-${N}` : void 0), Xt = {
    ...r,
    variant: Q,
    value: te,
    open: st,
    error: M
  }, Pe = oC(Xt), da = {
    ...U.PaperProps,
    ...typeof U.slotProps?.paper == "function" ? U.slotProps.paper(Xt) : U.slotProps?.paper
  }, Vn = {
    ...U.MenuListProps,
    ...typeof U.slotProps?.list == "function" ? U.slotProps.list(Xt) : U.slotProps?.list
  }, qa = Rs();
  return /* @__PURE__ */ I.jsxs(E.Fragment, {
    children: [/* @__PURE__ */ I.jsx(aC, {
      as: "div",
      ref: Re,
      tabIndex: Ze,
      role: "combobox",
      "aria-controls": st ? qa : void 0,
      "aria-disabled": x ? "true" : void 0,
      "aria-expanded": st ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": c,
      "aria-labelledby": [z, Be].filter(Boolean).join(" ") || void 0,
      "aria-describedby": s,
      "aria-required": v ? "true" : void 0,
      "aria-invalid": M ? "true" : void 0,
      onKeyDown: nt,
      onMouseDown: x || ae ? null : Se,
      onBlur: Qe,
      onFocus: X,
      ...ee,
      ownerState: Xt,
      className: we(ee.className, Pe.select, g),
      id: Be,
      children: iC(fe) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        fg || (fg = /* @__PURE__ */ I.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : fe
    }), /* @__PURE__ */ I.jsx(rC, {
      "aria-invalid": M,
      value: Array.isArray(te) ? te.join(",") : te,
      name: N,
      ref: ne,
      "aria-hidden": !0,
      onChange: Ye,
      tabIndex: -1,
      disabled: x,
      className: Pe.nativeInput,
      autoFocus: f,
      required: v,
      ...ie,
      ownerState: Xt
    }), /* @__PURE__ */ I.jsx(lC, {
      as: T,
      className: Pe.icon,
      ownerState: Xt
    }), /* @__PURE__ */ I.jsx(VT, {
      id: `menu-${N || ""}`,
      anchorEl: _e,
      open: st,
      onClose: qe,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      },
      ...U,
      slotProps: {
        ...U.slotProps,
        list: {
          "aria-labelledby": z,
          role: "listbox",
          "aria-multiselectable": q ? "true" : void 0,
          disableListWrap: !0,
          id: qa,
          ...Vn
        },
        paper: {
          ...da,
          style: {
            minWidth: xe,
            ...da != null ? da.style : null
          }
        }
      },
      children: lt
    })]
  });
}), uC = (a) => {
  const {
    classes: r
  } = a, s = dt({
    root: ["root"]
  }, Sy, r);
  return {
    ...r,
    ...s
  };
}, sd = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (a) => Yn(a) && a !== "variant"
}, cC = ve(rd, sd)(""), fC = ve(od, sd)(""), dC = ve(ld, sd)(""), xy = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const s = pt({
    name: "MuiSelect",
    props: r
  }), {
    autoWidth: c = !1,
    children: f,
    classes: d = {},
    className: m,
    defaultOpen: g = !1,
    displayEmpty: h = !1,
    IconComponent: b = bE,
    id: x,
    input: A,
    inputProps: M,
    label: T,
    labelId: S,
    MenuProps: z,
    multiple: U = !1,
    native: q = !1,
    onClose: N,
    onOpen: D,
    open: w,
    renderValue: k,
    SelectDisplayProps: X,
    variant: Z = "outlined",
    ...W
  } = s, ae = q ? PT : sC, le = dr(), v = fr({
    props: s,
    muiFormControl: le,
    states: ["variant", "error"]
  }), ee = v.variant || Z, Y = {
    ...s,
    variant: ee,
    classes: d
  }, G = uC(Y), {
    root: O,
    ...Q
  } = G, ie = A || {
    standard: /* @__PURE__ */ I.jsx(cC, {
      ownerState: Y
    }),
    outlined: /* @__PURE__ */ I.jsx(fC, {
      label: T,
      ownerState: Y
    }),
    filled: /* @__PURE__ */ I.jsx(dC, {
      ownerState: Y
    })
  }[ee], te = It(i, Bi(ie));
  return /* @__PURE__ */ I.jsx(E.Fragment, {
    children: /* @__PURE__ */ E.cloneElement(ie, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: ae,
      inputProps: {
        children: f,
        error: v.error,
        IconComponent: b,
        variant: ee,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: U,
        ...q ? {
          id: x
        } : {
          autoWidth: c,
          defaultOpen: g,
          displayEmpty: h,
          labelId: S,
          MenuProps: z,
          onClose: N,
          onOpen: D,
          open: w,
          renderValue: k,
          SelectDisplayProps: {
            id: x,
            ...X
          }
        },
        ...M,
        classes: M ? Vt(Q, M.classes) : Q,
        ...A ? A.props.inputProps : {}
      },
      ...(U && q || h) && ee === "outlined" ? {
        notched: !0
      } : {},
      ref: te,
      className: we(ie.props.className, m, G.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!A && {
        variant: ee
      },
      ...W
    })
  });
});
xy.muiName = "Select";
function pC(a) {
  return ft("MuiTextField", a);
}
ot("MuiTextField", ["root"]);
const mC = {
  standard: rd,
  filled: ld,
  outlined: od
}, hC = (a) => {
  const {
    classes: r
  } = a;
  return dt({
    root: ["root"]
  }, pC, r);
}, gC = ve(uT, {
  name: "MuiTextField",
  slot: "Root"
})({}), yC = /* @__PURE__ */ E.forwardRef(function(r, i) {
  const s = pt({
    props: r,
    name: "MuiTextField"
  }), {
    autoComplete: c,
    autoFocus: f = !1,
    children: d,
    className: m,
    color: g = "primary",
    defaultValue: h,
    disabled: b = !1,
    error: x = !1,
    FormHelperTextProps: A,
    fullWidth: M = !1,
    helperText: T,
    id: S,
    InputLabelProps: z,
    inputProps: U,
    InputProps: q,
    inputRef: N,
    label: D,
    maxRows: w,
    minRows: k,
    multiline: X = !1,
    name: Z,
    onBlur: W,
    onChange: ae,
    onFocus: le,
    placeholder: v,
    required: ee = !1,
    rows: Y,
    select: G = !1,
    SelectProps: O,
    slots: Q = {},
    slotProps: ie = {},
    type: te,
    value: C,
    variant: V = "outlined",
    ...re
  } = s, ne = {
    ...s,
    autoFocus: f,
    color: g,
    disabled: b,
    error: x,
    fullWidth: M,
    multiline: X,
    required: ee,
    select: G,
    variant: V
  }, oe = hC(ne), ce = Rs(S), ue = T && ce ? `${ce}-helper-text` : void 0, Ce = D && ce ? `${ce}-label` : void 0, be = mC[V], ze = {
    slots: Q,
    slotProps: {
      input: q,
      inputLabel: z,
      htmlInput: U,
      formHelperText: A,
      select: O,
      ...ie
    }
  }, ye = {}, Re = ze.slotProps.inputLabel;
  V === "outlined" && (Re && typeof Re.shrink < "u" && (ye.notched = Re.shrink), ye.label = D), G && ((!O || !O.native) && (ye.id = void 0), ye["aria-describedby"] = void 0);
  const [_e, mt] = Gt("root", {
    elementType: gC,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...ze,
      ...re
    },
    ownerState: ne,
    className: we(oe.root, m),
    ref: i,
    additionalProps: {
      disabled: b,
      error: x,
      fullWidth: M,
      required: ee,
      color: g,
      variant: V
    }
  }), [Se, qe] = Gt("input", {
    elementType: be,
    externalForwardedProps: ze,
    additionalProps: ye,
    ownerState: ne
  }), [Nt, Ye] = Gt("inputLabel", {
    elementType: AT,
    externalForwardedProps: ze,
    ownerState: ne
  }), [at, nt] = Gt("htmlInput", {
    elementType: "input",
    externalForwardedProps: ze,
    ownerState: ne
  }), [st, Qe] = Gt("formHelperText", {
    elementType: pT,
    externalForwardedProps: ze,
    ownerState: ne
  }), [fe, en] = Gt("select", {
    elementType: xy,
    externalForwardedProps: ze,
    ownerState: ne
  }), ht = /* @__PURE__ */ I.jsx(Se, {
    "aria-describedby": ue,
    autoComplete: c,
    autoFocus: f,
    defaultValue: h,
    fullWidth: M,
    multiline: X,
    name: Z,
    rows: Y,
    maxRows: w,
    minRows: k,
    type: te,
    value: C,
    id: ce,
    inputRef: N,
    onBlur: W,
    onChange: ae,
    onFocus: le,
    placeholder: v,
    inputProps: nt,
    slots: {
      input: Q.htmlInput ? at : void 0
    },
    ...qe
  });
  return /* @__PURE__ */ I.jsxs(_e, {
    ...mt,
    children: [D != null && D !== "" && /* @__PURE__ */ I.jsx(Nt, {
      htmlFor: ce,
      id: Ce,
      ...Ye,
      children: D
    }), G ? /* @__PURE__ */ I.jsx(fe, {
      "aria-describedby": ue,
      id: ce,
      labelId: Ce,
      value: C,
      input: ht,
      ...en,
      children: d
    }) : ht, T && /* @__PURE__ */ I.jsx(st, {
      id: ue,
      ...Qe,
      children: T
    })]
  });
}), vC = Hn`
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
`, bC = () => /* @__PURE__ */ Yt(zg, { styles: vC }), SC = () => {
  const [a, r] = E.useState([]);
  return {
    chat: a,
    addMessage: (c) => {
      r((f) => [...f, c]);
    },
    updateLastMessageValue: (c) => {
      r((f) => {
        const d = [...f];
        return d[d.length - 1].value = c, d;
      });
    }
  };
};
class pg extends Error {
  constructor(r, i) {
    super(r), this.name = "ParseError", this.type = i.type, this.field = i.field, this.value = i.value, this.line = i.line;
  }
}
function sf(a) {
}
function xC(a) {
  if (typeof a == "function")
    throw new TypeError(
      "`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?"
    );
  const { onEvent: r = sf, onError: i = sf, onRetry: s = sf, onComment: c } = a;
  let f = "", d = !0, m, g = "", h = "";
  function b(S) {
    const z = d ? S.replace(/^\xEF\xBB\xBF/, "") : S, [U, q] = EC(`${f}${z}`);
    for (const N of U)
      x(N);
    f = q, d = !1;
  }
  function x(S) {
    if (S === "") {
      M();
      return;
    }
    if (S.startsWith(":")) {
      c && c(S.slice(S.startsWith(": ") ? 2 : 1));
      return;
    }
    const z = S.indexOf(":");
    if (z !== -1) {
      const U = S.slice(0, z), q = S[z + 1] === " " ? 2 : 1, N = S.slice(z + q);
      A(U, N, S);
      return;
    }
    A(S, "", S);
  }
  function A(S, z, U) {
    switch (S) {
      case "event":
        h = z;
        break;
      case "data":
        g = `${g}${z}
`;
        break;
      case "id":
        m = z.includes("\0") ? void 0 : z;
        break;
      case "retry":
        /^\d+$/.test(z) ? s(parseInt(z, 10)) : i(
          new pg(`Invalid \`retry\` value: "${z}"`, {
            type: "invalid-retry",
            value: z,
            line: U
          })
        );
        break;
      default:
        i(
          new pg(
            `Unknown field "${S.length > 20 ? `${S.slice(0, 20)}…` : S}"`,
            { type: "unknown-field", field: S, value: z, line: U }
          )
        );
        break;
    }
  }
  function M() {
    g.length > 0 && r({
      id: m,
      event: h || void 0,
      // If the data buffer's last character is a U+000A LINE FEED (LF) character,
      // then remove the last character from the data buffer.
      data: g.endsWith(`
`) ? g.slice(0, -1) : g
    }), m = void 0, g = "", h = "";
  }
  function T(S = {}) {
    f && S.consume && x(f), d = !0, m = void 0, g = "", h = "", f = "";
  }
  return { feed: b, reset: T };
}
function EC(a) {
  const r = [];
  let i = "", s = 0;
  for (; s < a.length; ) {
    const c = a.indexOf("\r", s), f = a.indexOf(`
`, s);
    let d = -1;
    if (c !== -1 && f !== -1 ? d = Math.min(c, f) : c !== -1 ? d = c : f !== -1 && (d = f), d === -1) {
      i = a.slice(s);
      break;
    } else {
      const m = a.slice(s, d);
      r.push(m), s = d + 1, a[s - 1] === "\r" && a[s] === `
` && s++;
    }
  }
  return [r, i];
}
const TC = "https://openrouter.ai/api/v1", CC = void 0, RC = async ({ onNewMessageChunk: a, question: r }) => {
  const i = await fetch(`${TC}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${CC}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "openai/gpt-3.5-turbo",
      messages: [{ role: "user", content: r }],
      stream: !0
    })
  });
  let s = !0;
  const c = i.body?.getReader();
  if (!c)
    throw new Error("Response body is not readable");
  const f = new TextDecoder(), d = xC({
    onEvent: (m) => {
      const g = m.data;
      if (g === "[DONE]") {
        s = !1;
        return;
      } else
        try {
          const b = JSON.parse(g).choices[0].delta.content ?? "";
          b && a(b);
        } catch (h) {
          console.error("Error parsing JSON:", h);
        }
    }
  });
  try {
    for (; s; ) {
      const { done: m, value: g } = await c.read();
      if (m)
        break;
      const h = f.decode(g);
      d.feed(h);
    }
  } catch (m) {
    console.error("Error durante el streaming:", m);
  }
}, AC = () => {
  const [a, r] = E.useState(""), [i, s] = E.useState(!1), [c, f] = E.useState(""), { addMessage: d, updateLastMessageValue: m, chat: g } = SC(), h = E.useRef(null), b = E.useRef(null), x = (M) => {
    r(M.target.value);
  }, A = async (M) => {
    if (M.preventDefault(), a.length === 0) return;
    const T = a;
    d({ value: T, role: "user" }), r(""), s(!1), d({ value: "...", role: "assistant" });
    let z = "";
    try {
      await RC({
        onNewMessageChunk: (U) => {
          f((q) => q + U), z += U;
        },
        question: T
      }), m(z), f("");
    } catch (U) {
      console.error("Error durante el streaming:", U);
    }
  };
  return E.useEffect(() => {
    a.length > 0 ? s(!0) : s(!1);
  }, [a]), E.useEffect(() => {
    b.current && (b.current.scrollTop = b.current.scrollHeight);
  }, [g]), E.useEffect(() => {
    h.current && h.current.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  }, [c]), /* @__PURE__ */ cl(
    "div",
    {
      id: "chat-widget",
      css: Hn`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: var(--component-width, 100%);
        height: var(--component-height, 100%);
        max-height: var(--component-height, 100%);
        max-width: var(--component-width, 100%);
      `,
      children: [
        /* @__PURE__ */ cl(
          "div",
          {
            className: "screen",
            ref: b,
            css: Hn`
          height: 100%;
          padding: 10px;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          align-items: flex-end;
        `,
            children: [
              g.map((M, T) => /* @__PURE__ */ cl(
                "div",
                {
                  css: Hn`
                display: flex;
                flex-direction: column;
                width: 100%;
                align-items: ${M.role === "user" ? "flex-end" : "flex-start"};
                margin-bottom: 10px;
              `,
                  children: [
                    /* @__PURE__ */ Yt(
                      "div",
                      {
                        css: Hn`
                  display: flex;
                  align-items: center;
                  margin-bottom: 5px;
                `,
                        children: /* @__PURE__ */ Yt(
                          "span",
                          {
                            css: Hn`
                    font-weight: bold;
                    margin-right: 5px;
                  `,
                            children: M.role === "user" ? "Tu" : "Assistant"
                          }
                        )
                      }
                    ),
                    M.role === "user" && /* @__PURE__ */ Yt(
                      eg,
                      {
                        variant: "outlined",
                        sx: {
                          padding: "16px",
                          borderRadius: "16px 0 24px 16px",
                          maxWidth: "100%",
                          wordWrap: "break-word",
                          marginBottom: "10px",
                          bgcolor: "primary.main"
                        },
                        children: M.value
                      }
                    ),
                    M.role === "assistant" && /* @__PURE__ */ Yt(
                      eg,
                      {
                        variant: "outlined",
                        sx: {
                          bgcolor: "background.paper",
                          padding: "16px",
                          borderRadius: "0 16px 16px 24px",
                          maxWidth: "100%",
                          wordWrap: "break-word",
                          marginBottom: "10px"
                        },
                        children: M.value
                      }
                    )
                  ]
                },
                T
              )),
              c && /* @__PURE__ */ Yt(
                OE,
                {
                  ref: h,
                  variant: "outlined",
                  sx: {
                    bgcolor: "background.paper",
                    padding: "16px",
                    border: "1px solid var(--border-color)",
                    borderRadius: "0 16px 16px 24px",
                    maxWidth: "100%",
                    wordWrap: "break-word",
                    marginBottom: "10px"
                  },
                  children: /* @__PURE__ */ Yt("p", { children: c })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ cl(
          "form",
          {
            css: Hn`
          height: 100px;
          width: 100%;
          padding: 10px;
          background-color: #fff;
          display: flex;
          place-items: center;
          justify-content: space-around;
          border-top: 1px solid var(--border-color);
        `,
            onSubmit: A,
            children: [
              /* @__PURE__ */ Yt(
                yC,
                {
                  fullWidth: !0,
                  multiline: !0,
                  size: "small",
                  sx: {
                    marginRight: "10px",
                    bgcolor: "background.default",
                    borderRadius: "8px"
                  },
                  id: "message",
                  name: "message",
                  value: a,
                  onChange: x,
                  onFocus: () => s(!0),
                  onBlur: () => s(!1),
                  required: !0,
                  onKeyDown: (M) => M.key === "Enter" && A(M),
                  type: "text",
                  rows: 1,
                  placeholder: "Escribe tu mensaje..."
                }
              ),
              /* @__PURE__ */ Yt(
                iE,
                {
                  sx: {
                    color: "text.primary",
                    bgcolor: "primary.main",
                    boxShadow: 1,
                    opacity: 0.3,
                    ":hover": {
                      bgcolor: "primary.dark"
                    }
                  },
                  className: `${i ? "typing" : ""}`,
                  type: "submit",
                  children: /* @__PURE__ */ cl(
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
                  )
                }
              )
            ]
          }
        )
      ]
    }
  );
}, MC = ({
  primaryColor: a = "#7854F7",
  secondaryColor: r = "#2ECC71",
  mode: i = "dark",
  defaultBgColor: s = i === "dark" ? "#121212" : "#F5F5F5",
  paperBgColor: c = i === "dark" ? "#1E1E1E" : "#FFFFFF"
}) => As({
  palette: {
    mode: i,
    primary: {
      main: a,
      contrastText: "#fff"
    },
    secondary: {
      main: r,
      contrastText: "#fff"
    },
    background: {
      default: s,
      paper: c
    },
    text: {
      primary: i === "dark" ? "#EAEAEA" : "#212121",
      secondary: i === "dark" ? "#B0B0B0" : "#757575"
    },
    error: {
      main: ol.A400
    },
    warning: {
      main: _1.A400
    },
    info: {
      main: "#3498DB"
    },
    success: {
      main: "#2ECC71"
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: "none",
      fontWeight: 600
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: "8px 20px"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          border: `1px solid ${i === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}`
        }
      }
    }
    // MuiCssBaseline: {
    //     styleOverrides: `
    //         ::-webkit-scrollbar {
    //         width: 8px;
    //         }
    //         ::-webkit-scrollbar-track {
    //         background: #2D2D2D;
    //         border-radius: 10px;
    //         }
    //         ::-webkit-scrollbar-thumb {
    //         background: #555;
    //         border-radius: 10px;
    //         }
    //         ::-webkit-scrollbar-thumb:hover {
    //         background: #777;
    //         }
    //     `,
    // },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
});
function OC() {
  const a = this.getAttribute("primary-color") || "#7854F7", r = this.getAttribute("secondary-color") || "#2ECC71", i = this.getAttribute("mode") || "dark";
  return MC({ primaryColor: a, secondaryColor: r, mode: i });
}
class wC extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["background-color", "primary-color", "secondary-color"];
  }
  connectedCallback() {
    const r = document.createElement("div");
    r.id = "root", this.shadowRoot.appendChild(r);
    const i = Tg({
      key: "mui",
      container: this.shadowRoot,
      prepend: !0
    }), s = OC.call(this);
    z1.createRoot(r).render(
      /* @__PURE__ */ Yt(E.StrictMode, { children: /* @__PURE__ */ cl(E1, { value: i, children: [
        /* @__PURE__ */ Yt(bC, {}),
        /* @__PURE__ */ cl(c2, { theme: s, children: [
          /* @__PURE__ */ Yt(kE, {}),
          /* @__PURE__ */ Yt(AC, {})
        ] })
      ] }) })
    );
  }
}
customElements.define("chat-widget", wC);
