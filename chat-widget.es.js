function F1(c, s) {
  for (var y = 0; y < s.length; y++) {
    const r = s[y];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const b in r)
        if (b !== "default" && !(b in c)) {
          const E = Object.getOwnPropertyDescriptor(r, b);
          E && Object.defineProperty(c, b, E.get ? E : {
            enumerable: !0,
            get: () => r[b]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(c, Symbol.toStringTag, { value: "Module" }));
}
function P1(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var Rf = { exports: {} }, Nu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wd;
function I1() {
  if (wd) return Nu;
  wd = 1;
  var c = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function y(r, b, E) {
    var x = null;
    if (E !== void 0 && (x = "" + E), b.key !== void 0 && (x = "" + b.key), "key" in b) {
      E = {};
      for (var H in b)
        H !== "key" && (E[H] = b[H]);
    } else E = b;
    return b = E.ref, {
      $$typeof: c,
      type: r,
      key: x,
      ref: b !== void 0 ? b : null,
      props: E
    };
  }
  return Nu.Fragment = s, Nu.jsx = y, Nu.jsxs = y, Nu;
}
var Kd;
function ty() {
  return Kd || (Kd = 1, Rf.exports = I1()), Rf.exports;
}
var ii = ty(), Df = { exports: {} }, P = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jd;
function ly() {
  if (Jd) return P;
  Jd = 1;
  var c = Symbol.for("react.transitional.element"), s = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), E = Symbol.for("react.consumer"), x = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), C = Symbol.iterator;
  function B(d) {
    return d === null || typeof d != "object" ? null : (d = C && d[C] || d["@@iterator"], typeof d == "function" ? d : null);
  }
  var tt = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Q = Object.assign, X = {};
  function Z(d, D, Y) {
    this.props = d, this.context = D, this.refs = X, this.updater = Y || tt;
  }
  Z.prototype.isReactComponent = {}, Z.prototype.setState = function(d, D) {
    if (typeof d != "object" && typeof d != "function" && d != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, d, D, "setState");
  }, Z.prototype.forceUpdate = function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate");
  };
  function $() {
  }
  $.prototype = Z.prototype;
  function et(d, D, Y) {
    this.props = d, this.context = D, this.refs = X, this.updater = Y || tt;
  }
  var J = et.prototype = new $();
  J.constructor = et, Q(J, Z.prototype), J.isPureReactComponent = !0;
  var mt = Array.isArray, M = { H: null, A: null, T: null, S: null, V: null }, I = Object.prototype.hasOwnProperty;
  function W(d, D, Y, N, V, ct) {
    return Y = ct.ref, {
      $$typeof: c,
      type: d,
      key: D,
      ref: Y !== void 0 ? Y : null,
      props: ct
    };
  }
  function jt(d, D) {
    return W(
      d.type,
      D,
      void 0,
      void 0,
      void 0,
      d.props
    );
  }
  function gl(d) {
    return typeof d == "object" && d !== null && d.$$typeof === c;
  }
  function Ml(d) {
    var D = { "=": "=0", ":": "=2" };
    return "$" + d.replace(/[=:]/g, function(Y) {
      return D[Y];
    });
  }
  var It = /\/+/g;
  function wt(d, D) {
    return typeof d == "object" && d !== null && d.key != null ? Ml("" + d.key) : D.toString(36);
  }
  function Me() {
  }
  function Re(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (typeof d.status == "string" ? d.then(Me, Me) : (d.status = "pending", d.then(
          function(D) {
            d.status === "pending" && (d.status = "fulfilled", d.value = D);
          },
          function(D) {
            d.status === "pending" && (d.status = "rejected", d.reason = D);
          }
        )), d.status) {
          case "fulfilled":
            return d.value;
          case "rejected":
            throw d.reason;
        }
    }
    throw d;
  }
  function Kt(d, D, Y, N, V) {
    var ct = typeof d;
    (ct === "undefined" || ct === "boolean") && (d = null);
    var F = !1;
    if (d === null) F = !0;
    else
      switch (ct) {
        case "bigint":
        case "string":
        case "number":
          F = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case c:
            case s:
              F = !0;
              break;
            case U:
              return F = d._init, Kt(
                F(d._payload),
                D,
                Y,
                N,
                V
              );
          }
      }
    if (F)
      return V = V(d), F = N === "" ? "." + wt(d, 0) : N, mt(V) ? (Y = "", F != null && (Y = F.replace(It, "$&/") + "/"), Kt(V, D, Y, "", function(ee) {
        return ee;
      })) : V != null && (gl(V) && (V = jt(
        V,
        Y + (V.key == null || d && d.key === V.key ? "" : ("" + V.key).replace(
          It,
          "$&/"
        ) + "/") + F
      )), D.push(V)), 1;
    F = 0;
    var il = N === "" ? "." : N + ":";
    if (mt(d))
      for (var At = 0; At < d.length; At++)
        N = d[At], ct = il + wt(N, At), F += Kt(
          N,
          D,
          Y,
          ct,
          V
        );
    else if (At = B(d), typeof At == "function")
      for (d = At.call(d), At = 0; !(N = d.next()).done; )
        N = N.value, ct = il + wt(N, At++), F += Kt(
          N,
          D,
          Y,
          ct,
          V
        );
    else if (ct === "object") {
      if (typeof d.then == "function")
        return Kt(
          Re(d),
          D,
          Y,
          N,
          V
        );
      throw D = String(d), Error(
        "Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return F;
  }
  function O(d, D, Y) {
    if (d == null) return d;
    var N = [], V = 0;
    return Kt(d, N, "", "", function(ct) {
      return D.call(Y, ct, V++);
    }), N;
  }
  function q(d) {
    if (d._status === -1) {
      var D = d._result;
      D = D(), D.then(
        function(Y) {
          (d._status === 0 || d._status === -1) && (d._status = 1, d._result = Y);
        },
        function(Y) {
          (d._status === 0 || d._status === -1) && (d._status = 2, d._result = Y);
        }
      ), d._status === -1 && (d._status = 0, d._result = D);
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var K = typeof reportError == "function" ? reportError : function(d) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var D = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d),
        error: d
      });
      if (!window.dispatchEvent(D)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", d);
      return;
    }
    console.error(d);
  };
  function pt() {
  }
  return P.Children = {
    map: O,
    forEach: function(d, D, Y) {
      O(
        d,
        function() {
          D.apply(this, arguments);
        },
        Y
      );
    },
    count: function(d) {
      var D = 0;
      return O(d, function() {
        D++;
      }), D;
    },
    toArray: function(d) {
      return O(d, function(D) {
        return D;
      }) || [];
    },
    only: function(d) {
      if (!gl(d))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return d;
    }
  }, P.Component = Z, P.Fragment = y, P.Profiler = b, P.PureComponent = et, P.StrictMode = r, P.Suspense = R, P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = M, P.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(d) {
      return M.H.useMemoCache(d);
    }
  }, P.cache = function(d) {
    return function() {
      return d.apply(null, arguments);
    };
  }, P.cloneElement = function(d, D, Y) {
    if (d == null)
      throw Error(
        "The argument must be a React element, but you passed " + d + "."
      );
    var N = Q({}, d.props), V = d.key, ct = void 0;
    if (D != null)
      for (F in D.ref !== void 0 && (ct = void 0), D.key !== void 0 && (V = "" + D.key), D)
        !I.call(D, F) || F === "key" || F === "__self" || F === "__source" || F === "ref" && D.ref === void 0 || (N[F] = D[F]);
    var F = arguments.length - 2;
    if (F === 1) N.children = Y;
    else if (1 < F) {
      for (var il = Array(F), At = 0; At < F; At++)
        il[At] = arguments[At + 2];
      N.children = il;
    }
    return W(d.type, V, void 0, void 0, ct, N);
  }, P.createContext = function(d) {
    return d = {
      $$typeof: x,
      _currentValue: d,
      _currentValue2: d,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, d.Provider = d, d.Consumer = {
      $$typeof: E,
      _context: d
    }, d;
  }, P.createElement = function(d, D, Y) {
    var N, V = {}, ct = null;
    if (D != null)
      for (N in D.key !== void 0 && (ct = "" + D.key), D)
        I.call(D, N) && N !== "key" && N !== "__self" && N !== "__source" && (V[N] = D[N]);
    var F = arguments.length - 2;
    if (F === 1) V.children = Y;
    else if (1 < F) {
      for (var il = Array(F), At = 0; At < F; At++)
        il[At] = arguments[At + 2];
      V.children = il;
    }
    if (d && d.defaultProps)
      for (N in F = d.defaultProps, F)
        V[N] === void 0 && (V[N] = F[N]);
    return W(d, ct, void 0, void 0, null, V);
  }, P.createRef = function() {
    return { current: null };
  }, P.forwardRef = function(d) {
    return { $$typeof: H, render: d };
  }, P.isValidElement = gl, P.lazy = function(d) {
    return {
      $$typeof: U,
      _payload: { _status: -1, _result: d },
      _init: q
    };
  }, P.memo = function(d, D) {
    return {
      $$typeof: p,
      type: d,
      compare: D === void 0 ? null : D
    };
  }, P.startTransition = function(d) {
    var D = M.T, Y = {};
    M.T = Y;
    try {
      var N = d(), V = M.S;
      V !== null && V(Y, N), typeof N == "object" && N !== null && typeof N.then == "function" && N.then(pt, K);
    } catch (ct) {
      K(ct);
    } finally {
      M.T = D;
    }
  }, P.unstable_useCacheRefresh = function() {
    return M.H.useCacheRefresh();
  }, P.use = function(d) {
    return M.H.use(d);
  }, P.useActionState = function(d, D, Y) {
    return M.H.useActionState(d, D, Y);
  }, P.useCallback = function(d, D) {
    return M.H.useCallback(d, D);
  }, P.useContext = function(d) {
    return M.H.useContext(d);
  }, P.useDebugValue = function() {
  }, P.useDeferredValue = function(d, D) {
    return M.H.useDeferredValue(d, D);
  }, P.useEffect = function(d, D, Y) {
    var N = M.H;
    if (typeof Y == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return N.useEffect(d, D);
  }, P.useId = function() {
    return M.H.useId();
  }, P.useImperativeHandle = function(d, D, Y) {
    return M.H.useImperativeHandle(d, D, Y);
  }, P.useInsertionEffect = function(d, D) {
    return M.H.useInsertionEffect(d, D);
  }, P.useLayoutEffect = function(d, D) {
    return M.H.useLayoutEffect(d, D);
  }, P.useMemo = function(d, D) {
    return M.H.useMemo(d, D);
  }, P.useOptimistic = function(d, D) {
    return M.H.useOptimistic(d, D);
  }, P.useReducer = function(d, D, Y) {
    return M.H.useReducer(d, D, Y);
  }, P.useRef = function(d) {
    return M.H.useRef(d);
  }, P.useState = function(d) {
    return M.H.useState(d);
  }, P.useSyncExternalStore = function(d, D, Y) {
    return M.H.useSyncExternalStore(
      d,
      D,
      Y
    );
  }, P.useTransition = function() {
    return M.H.useTransition();
  }, P.version = "19.1.1", P;
}
var kd;
function Zf() {
  return kd || (kd = 1, Df.exports = ly()), Df.exports;
}
var ht = Zf();
const ey = /* @__PURE__ */ P1(ht), $d = /* @__PURE__ */ F1({
  __proto__: null,
  default: ey
}, [ht]);
function ay(c) {
  if (c.sheet)
    return c.sheet;
  for (var s = 0; s < document.styleSheets.length; s++)
    if (document.styleSheets[s].ownerNode === c)
      return document.styleSheets[s];
}
function uy(c) {
  var s = document.createElement("style");
  return s.setAttribute("data-emotion", c.key), c.nonce !== void 0 && s.setAttribute("nonce", c.nonce), s.appendChild(document.createTextNode("")), s.setAttribute("data-s", ""), s;
}
var ny = /* @__PURE__ */ function() {
  function c(y) {
    var r = this;
    this._insertTag = function(b) {
      var E;
      r.tags.length === 0 ? r.insertionPoint ? E = r.insertionPoint.nextSibling : r.prepend ? E = r.container.firstChild : E = r.before : E = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(b, E), r.tags.push(b);
    }, this.isSpeedy = y.speedy === void 0 ? !0 : y.speedy, this.tags = [], this.ctr = 0, this.nonce = y.nonce, this.key = y.key, this.container = y.container, this.prepend = y.prepend, this.insertionPoint = y.insertionPoint, this.before = null;
  }
  var s = c.prototype;
  return s.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, s.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(uy(this));
    var b = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var E = ay(b);
      try {
        E.insertRule(r, E.cssRules.length);
      } catch {
      }
    } else
      b.appendChild(document.createTextNode(r));
    this.ctr++;
  }, s.flush = function() {
    this.tags.forEach(function(r) {
      var b;
      return (b = r.parentNode) == null ? void 0 : b.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, c;
}(), Wt = "-ms-", ci = "-moz-", st = "-webkit-", v0 = "comm", Vf = "rule", Lf = "decl", iy = "@import", m0 = "@keyframes", cy = "@layer", fy = Math.abs, fi = String.fromCharCode, ry = Object.assign;
function sy(c, s) {
  return Lt(c, 0) ^ 45 ? (((s << 2 ^ Lt(c, 0)) << 2 ^ Lt(c, 1)) << 2 ^ Lt(c, 2)) << 2 ^ Lt(c, 3) : 0;
}
function g0(c) {
  return c.trim();
}
function oy(c, s) {
  return (c = s.exec(c)) ? c[0] : c;
}
function ot(c, s, y) {
  return c.replace(s, y);
}
function Bf(c, s) {
  return c.indexOf(s);
}
function Lt(c, s) {
  return c.charCodeAt(s) | 0;
}
function Cu(c, s, y) {
  return c.slice(s, y);
}
function Bl(c) {
  return c.length;
}
function wf(c) {
  return c.length;
}
function ei(c, s) {
  return s.push(c), c;
}
function dy(c, s) {
  return c.map(s).join("");
}
var ri = 1, Ha = 1, b0 = 0, nl = 0, Ht = 0, qa = "";
function si(c, s, y, r, b, E, x) {
  return { value: c, root: s, parent: y, type: r, props: b, children: E, line: ri, column: Ha, length: x, return: "" };
}
function Hu(c, s) {
  return ry(si("", null, null, "", null, null, 0), c, { length: -c.length }, s);
}
function hy() {
  return Ht;
}
function yy() {
  return Ht = nl > 0 ? Lt(qa, --nl) : 0, Ha--, Ht === 10 && (Ha = 1, ri--), Ht;
}
function ml() {
  return Ht = nl < b0 ? Lt(qa, nl++) : 0, Ha++, Ht === 10 && (Ha = 1, ri++), Ht;
}
function Xl() {
  return Lt(qa, nl);
}
function ai() {
  return nl;
}
function Gu(c, s) {
  return Cu(qa, c, s);
}
function Yu(c) {
  switch (c) {
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
function S0(c) {
  return ri = Ha = 1, b0 = Bl(qa = c), nl = 0, [];
}
function p0(c) {
  return qa = "", c;
}
function ui(c) {
  return g0(Gu(nl - 1, Gf(c === 91 ? c + 2 : c === 40 ? c + 1 : c)));
}
function vy(c) {
  for (; (Ht = Xl()) && Ht < 33; )
    ml();
  return Yu(c) > 2 || Yu(Ht) > 3 ? "" : " ";
}
function my(c, s) {
  for (; --s && ml() && !(Ht < 48 || Ht > 102 || Ht > 57 && Ht < 65 || Ht > 70 && Ht < 97); )
    ;
  return Gu(c, ai() + (s < 6 && Xl() == 32 && ml() == 32));
}
function Gf(c) {
  for (; ml(); )
    switch (Ht) {
      // ] ) " '
      case c:
        return nl;
      // " '
      case 34:
      case 39:
        c !== 34 && c !== 39 && Gf(Ht);
        break;
      // (
      case 40:
        c === 41 && Gf(c);
        break;
      // \
      case 92:
        ml();
        break;
    }
  return nl;
}
function gy(c, s) {
  for (; ml() && c + Ht !== 57; )
    if (c + Ht === 84 && Xl() === 47)
      break;
  return "/*" + Gu(s, nl - 1) + "*" + fi(c === 47 ? c : ml());
}
function by(c) {
  for (; !Yu(Xl()); )
    ml();
  return Gu(c, nl);
}
function Sy(c) {
  return p0(ni("", null, null, null, [""], c = S0(c), 0, [0], c));
}
function ni(c, s, y, r, b, E, x, H, R) {
  for (var p = 0, U = 0, C = x, B = 0, tt = 0, Q = 0, X = 1, Z = 1, $ = 1, et = 0, J = "", mt = b, M = E, I = r, W = J; Z; )
    switch (Q = et, et = ml()) {
      // (
      case 40:
        if (Q != 108 && Lt(W, C - 1) == 58) {
          Bf(W += ot(ui(et), "&", "&\f"), "&\f") != -1 && ($ = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        W += ui(et);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        W += vy(Q);
        break;
      // \
      case 92:
        W += my(ai() - 1, 7);
        continue;
      // /
      case 47:
        switch (Xl()) {
          case 42:
          case 47:
            ei(py(gy(ml(), ai()), s, y), R);
            break;
          default:
            W += "/";
        }
        break;
      // {
      case 123 * X:
        H[p++] = Bl(W) * $;
      // } ; \0
      case 125 * X:
      case 59:
      case 0:
        switch (et) {
          // \0 }
          case 0:
          case 125:
            Z = 0;
          // ;
          case 59 + U:
            $ == -1 && (W = ot(W, /\f/g, "")), tt > 0 && Bl(W) - C && ei(tt > 32 ? Fd(W + ";", r, y, C - 1) : Fd(ot(W, " ", "") + ";", r, y, C - 2), R);
            break;
          // @ ;
          case 59:
            W += ";";
          // { rule/at-rule
          default:
            if (ei(I = Wd(W, s, y, p, U, b, H, J, mt = [], M = [], C), E), et === 123)
              if (U === 0)
                ni(W, s, I, I, mt, E, C, H, M);
              else
                switch (B === 99 && Lt(W, 3) === 110 ? 100 : B) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ni(c, I, I, r && ei(Wd(c, I, I, 0, 0, b, H, J, b, mt = [], C), M), b, M, C, H, r ? mt : M);
                    break;
                  default:
                    ni(W, I, I, I, [""], M, 0, H, M);
                }
        }
        p = U = tt = 0, X = $ = 1, J = W = "", C = x;
        break;
      // :
      case 58:
        C = 1 + Bl(W), tt = Q;
      default:
        if (X < 1) {
          if (et == 123)
            --X;
          else if (et == 125 && X++ == 0 && yy() == 125)
            continue;
        }
        switch (W += fi(et), et * X) {
          // &
          case 38:
            $ = U > 0 ? 1 : (W += "\f", -1);
            break;
          // ,
          case 44:
            H[p++] = (Bl(W) - 1) * $, $ = 1;
            break;
          // @
          case 64:
            Xl() === 45 && (W += ui(ml())), B = Xl(), U = C = Bl(J = W += by(ai())), et++;
            break;
          // -
          case 45:
            Q === 45 && Bl(W) == 2 && (X = 0);
        }
    }
  return E;
}
function Wd(c, s, y, r, b, E, x, H, R, p, U) {
  for (var C = b - 1, B = b === 0 ? E : [""], tt = wf(B), Q = 0, X = 0, Z = 0; Q < r; ++Q)
    for (var $ = 0, et = Cu(c, C + 1, C = fy(X = x[Q])), J = c; $ < tt; ++$)
      (J = g0(X > 0 ? B[$] + " " + et : ot(et, /&\f/g, B[$]))) && (R[Z++] = J);
  return si(c, s, y, b === 0 ? Vf : H, R, p, U);
}
function py(c, s, y) {
  return si(c, s, y, v0, fi(hy()), Cu(c, 2, -2), 0);
}
function Fd(c, s, y, r) {
  return si(c, s, y, Lf, Cu(c, 0, r), Cu(c, r + 1, -1), r);
}
function Na(c, s) {
  for (var y = "", r = wf(c), b = 0; b < r; b++)
    y += s(c[b], b, c, s) || "";
  return y;
}
function Ty(c, s, y, r) {
  switch (c.type) {
    case cy:
      if (c.children.length) break;
    case iy:
    case Lf:
      return c.return = c.return || c.value;
    case v0:
      return "";
    case m0:
      return c.return = c.value + "{" + Na(c.children, r) + "}";
    case Vf:
      c.value = c.props.join(",");
  }
  return Bl(y = Na(c.children, r)) ? c.return = c.value + "{" + y + "}" : "";
}
function Ey(c) {
  var s = wf(c);
  return function(y, r, b, E) {
    for (var x = "", H = 0; H < s; H++)
      x += c[H](y, r, b, E) || "";
    return x;
  };
}
function Ay(c) {
  return function(s) {
    s.root || (s = s.return) && c(s);
  };
}
function T0(c) {
  var s = /* @__PURE__ */ Object.create(null);
  return function(y) {
    return s[y] === void 0 && (s[y] = c(y)), s[y];
  };
}
var Oy = function(s, y, r) {
  for (var b = 0, E = 0; b = E, E = Xl(), b === 38 && E === 12 && (y[r] = 1), !Yu(E); )
    ml();
  return Gu(s, nl);
}, _y = function(s, y) {
  var r = -1, b = 44;
  do
    switch (Yu(b)) {
      case 0:
        b === 38 && Xl() === 12 && (y[r] = 1), s[r] += Oy(nl - 1, y, r);
        break;
      case 2:
        s[r] += ui(b);
        break;
      case 4:
        if (b === 44) {
          s[++r] = Xl() === 58 ? "&\f" : "", y[r] = s[r].length;
          break;
        }
      // fallthrough
      default:
        s[r] += fi(b);
    }
  while (b = ml());
  return s;
}, zy = function(s, y) {
  return p0(_y(S0(s), y));
}, Pd = /* @__PURE__ */ new WeakMap(), My = function(s) {
  if (!(s.type !== "rule" || !s.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  s.length < 1)) {
    for (var y = s.value, r = s.parent, b = s.column === r.column && s.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(s.props.length === 1 && y.charCodeAt(0) !== 58 && !Pd.get(r)) && !b) {
      Pd.set(s, !0);
      for (var E = [], x = zy(y, E), H = r.props, R = 0, p = 0; R < x.length; R++)
        for (var U = 0; U < H.length; U++, p++)
          s.props[p] = E[R] ? x[R].replace(/&\f/g, H[U]) : H[U] + " " + x[R];
    }
  }
}, Ry = function(s) {
  if (s.type === "decl") {
    var y = s.value;
    // charcode for l
    y.charCodeAt(0) === 108 && // charcode for b
    y.charCodeAt(2) === 98 && (s.return = "", s.value = "");
  }
};
function E0(c, s) {
  switch (sy(c, s)) {
    // color-adjust
    case 5103:
      return st + "print-" + c + c;
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
      return st + c + c;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return st + c + ci + c + Wt + c + c;
    // flex, flex-direction
    case 6828:
    case 4268:
      return st + c + Wt + c + c;
    // order
    case 6165:
      return st + c + Wt + "flex-" + c + c;
    // align-items
    case 5187:
      return st + c + ot(c, /(\w+).+(:[^]+)/, st + "box-$1$2" + Wt + "flex-$1$2") + c;
    // align-self
    case 5443:
      return st + c + Wt + "flex-item-" + ot(c, /flex-|-self/, "") + c;
    // align-content
    case 4675:
      return st + c + Wt + "flex-line-pack" + ot(c, /align-content|flex-|-self/, "") + c;
    // flex-shrink
    case 5548:
      return st + c + Wt + ot(c, "shrink", "negative") + c;
    // flex-basis
    case 5292:
      return st + c + Wt + ot(c, "basis", "preferred-size") + c;
    // flex-grow
    case 6060:
      return st + "box-" + ot(c, "-grow", "") + st + c + Wt + ot(c, "grow", "positive") + c;
    // transition
    case 4554:
      return st + ot(c, /([^-])(transform)/g, "$1" + st + "$2") + c;
    // cursor
    case 6187:
      return ot(ot(ot(c, /(zoom-|grab)/, st + "$1"), /(image-set)/, st + "$1"), c, "") + c;
    // background, background-image
    case 5495:
    case 3959:
      return ot(c, /(image-set\([^]*)/, st + "$1$`$1");
    // justify-content
    case 4968:
      return ot(ot(c, /(.+:)(flex-)?(.*)/, st + "box-pack:$3" + Wt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + st + c + c;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ot(c, /(.+)-inline(.+)/, st + "$1$2") + c;
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
      if (Bl(c) - 1 - s > 6) switch (Lt(c, s + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (Lt(c, s + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return ot(c, /(.+:)(.+)-([^]+)/, "$1" + st + "$2-$3$1" + ci + (Lt(c, s + 3) == 108 ? "$3" : "$2-$3")) + c;
        // (s)tretch
        case 115:
          return ~Bf(c, "stretch") ? E0(ot(c, "stretch", "fill-available"), s) + c : c;
      }
      break;
    // position: sticky
    case 4949:
      if (Lt(c, s + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (Lt(c, Bl(c) - 3 - (~Bf(c, "!important") && 10))) {
        // stic(k)y
        case 107:
          return ot(c, ":", ":" + st) + c;
        // (inline-)?fl(e)x
        case 101:
          return ot(c, /(.+:)([^;!]+)(;|!.+)?/, "$1" + st + (Lt(c, 14) === 45 ? "inline-" : "") + "box$3$1" + st + "$2$3$1" + Wt + "$2box$3") + c;
      }
      break;
    // writing-mode
    case 5936:
      switch (Lt(c, s + 11)) {
        // vertical-l(r)
        case 114:
          return st + c + Wt + ot(c, /[svh]\w+-[tblr]{2}/, "tb") + c;
        // vertical-r(l)
        case 108:
          return st + c + Wt + ot(c, /[svh]\w+-[tblr]{2}/, "tb-rl") + c;
        // horizontal(-)tb
        case 45:
          return st + c + Wt + ot(c, /[svh]\w+-[tblr]{2}/, "lr") + c;
      }
      return st + c + Wt + c + c;
  }
  return c;
}
var Dy = function(s, y, r, b) {
  if (s.length > -1 && !s.return) switch (s.type) {
    case Lf:
      s.return = E0(s.value, s.length);
      break;
    case m0:
      return Na([Hu(s, {
        value: ot(s.value, "@", "@" + st)
      })], b);
    case Vf:
      if (s.length) return dy(s.props, function(E) {
        switch (oy(E, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Na([Hu(s, {
              props: [ot(E, /:(read-\w+)/, ":" + ci + "$1")]
            })], b);
          // :placeholder
          case "::placeholder":
            return Na([Hu(s, {
              props: [ot(E, /:(plac\w+)/, ":" + st + "input-$1")]
            }), Hu(s, {
              props: [ot(E, /:(plac\w+)/, ":" + ci + "$1")]
            }), Hu(s, {
              props: [ot(E, /:(plac\w+)/, Wt + "input-$1")]
            })], b);
        }
        return "";
      });
  }
}, xy = [Dy], A0 = function(s) {
  var y = s.key;
  if (y === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(X) {
      var Z = X.getAttribute("data-emotion");
      Z.indexOf(" ") !== -1 && (document.head.appendChild(X), X.setAttribute("data-s", ""));
    });
  }
  var b = s.stylisPlugins || xy, E = {}, x, H = [];
  x = s.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + y + ' "]'),
    function(X) {
      for (var Z = X.getAttribute("data-emotion").split(" "), $ = 1; $ < Z.length; $++)
        E[Z[$]] = !0;
      H.push(X);
    }
  );
  var R, p = [My, Ry];
  {
    var U, C = [Ty, Ay(function(X) {
      U.insert(X);
    })], B = Ey(p.concat(b, C)), tt = function(Z) {
      return Na(Sy(Z), B);
    };
    R = function(Z, $, et, J) {
      U = et, tt(Z ? Z + "{" + $.styles + "}" : $.styles), J && (Q.inserted[$.name] = !0);
    };
  }
  var Q = {
    key: y,
    sheet: new ny({
      key: y,
      container: x,
      nonce: s.nonce,
      speedy: s.speedy,
      prepend: s.prepend,
      insertionPoint: s.insertionPoint
    }),
    nonce: s.nonce,
    inserted: E,
    registered: {},
    insert: R
  };
  return Q.sheet.hydrate(H), Q;
};
function Xf() {
  return Xf = Object.assign ? Object.assign.bind() : function(c) {
    for (var s = 1; s < arguments.length; s++) {
      var y = arguments[s];
      for (var r in y) ({}).hasOwnProperty.call(y, r) && (c[r] = y[r]);
    }
    return c;
  }, Xf.apply(null, arguments);
}
var xf = { exports: {} }, dt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Id;
function Uy() {
  if (Id) return dt;
  Id = 1;
  var c = typeof Symbol == "function" && Symbol.for, s = c ? Symbol.for("react.element") : 60103, y = c ? Symbol.for("react.portal") : 60106, r = c ? Symbol.for("react.fragment") : 60107, b = c ? Symbol.for("react.strict_mode") : 60108, E = c ? Symbol.for("react.profiler") : 60114, x = c ? Symbol.for("react.provider") : 60109, H = c ? Symbol.for("react.context") : 60110, R = c ? Symbol.for("react.async_mode") : 60111, p = c ? Symbol.for("react.concurrent_mode") : 60111, U = c ? Symbol.for("react.forward_ref") : 60112, C = c ? Symbol.for("react.suspense") : 60113, B = c ? Symbol.for("react.suspense_list") : 60120, tt = c ? Symbol.for("react.memo") : 60115, Q = c ? Symbol.for("react.lazy") : 60116, X = c ? Symbol.for("react.block") : 60121, Z = c ? Symbol.for("react.fundamental") : 60117, $ = c ? Symbol.for("react.responder") : 60118, et = c ? Symbol.for("react.scope") : 60119;
  function J(M) {
    if (typeof M == "object" && M !== null) {
      var I = M.$$typeof;
      switch (I) {
        case s:
          switch (M = M.type, M) {
            case R:
            case p:
            case r:
            case E:
            case b:
            case C:
              return M;
            default:
              switch (M = M && M.$$typeof, M) {
                case H:
                case U:
                case Q:
                case tt:
                case x:
                  return M;
                default:
                  return I;
              }
          }
        case y:
          return I;
      }
    }
  }
  function mt(M) {
    return J(M) === p;
  }
  return dt.AsyncMode = R, dt.ConcurrentMode = p, dt.ContextConsumer = H, dt.ContextProvider = x, dt.Element = s, dt.ForwardRef = U, dt.Fragment = r, dt.Lazy = Q, dt.Memo = tt, dt.Portal = y, dt.Profiler = E, dt.StrictMode = b, dt.Suspense = C, dt.isAsyncMode = function(M) {
    return mt(M) || J(M) === R;
  }, dt.isConcurrentMode = mt, dt.isContextConsumer = function(M) {
    return J(M) === H;
  }, dt.isContextProvider = function(M) {
    return J(M) === x;
  }, dt.isElement = function(M) {
    return typeof M == "object" && M !== null && M.$$typeof === s;
  }, dt.isForwardRef = function(M) {
    return J(M) === U;
  }, dt.isFragment = function(M) {
    return J(M) === r;
  }, dt.isLazy = function(M) {
    return J(M) === Q;
  }, dt.isMemo = function(M) {
    return J(M) === tt;
  }, dt.isPortal = function(M) {
    return J(M) === y;
  }, dt.isProfiler = function(M) {
    return J(M) === E;
  }, dt.isStrictMode = function(M) {
    return J(M) === b;
  }, dt.isSuspense = function(M) {
    return J(M) === C;
  }, dt.isValidElementType = function(M) {
    return typeof M == "string" || typeof M == "function" || M === r || M === p || M === E || M === b || M === C || M === B || typeof M == "object" && M !== null && (M.$$typeof === Q || M.$$typeof === tt || M.$$typeof === x || M.$$typeof === H || M.$$typeof === U || M.$$typeof === Z || M.$$typeof === $ || M.$$typeof === et || M.$$typeof === X);
  }, dt.typeOf = J, dt;
}
var t0;
function Ny() {
  return t0 || (t0 = 1, xf.exports = Uy()), xf.exports;
}
var Uf, l0;
function Hy() {
  if (l0) return Uf;
  l0 = 1;
  var c = Ny(), s = {
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
  }, y = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, r = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, b = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, E = {};
  E[c.ForwardRef] = r, E[c.Memo] = b;
  function x(Q) {
    return c.isMemo(Q) ? b : E[Q.$$typeof] || s;
  }
  var H = Object.defineProperty, R = Object.getOwnPropertyNames, p = Object.getOwnPropertySymbols, U = Object.getOwnPropertyDescriptor, C = Object.getPrototypeOf, B = Object.prototype;
  function tt(Q, X, Z) {
    if (typeof X != "string") {
      if (B) {
        var $ = C(X);
        $ && $ !== B && tt(Q, $, Z);
      }
      var et = R(X);
      p && (et = et.concat(p(X)));
      for (var J = x(Q), mt = x(X), M = 0; M < et.length; ++M) {
        var I = et[M];
        if (!y[I] && !(Z && Z[I]) && !(mt && mt[I]) && !(J && J[I])) {
          var W = U(X, I);
          try {
            H(Q, I, W);
          } catch {
          }
        }
      }
    }
    return Q;
  }
  return Uf = tt, Uf;
}
Hy();
var qy = !0;
function O0(c, s, y) {
  var r = "";
  return y.split(" ").forEach(function(b) {
    c[b] !== void 0 ? s.push(c[b] + ";") : b && (r += b + " ");
  }), r;
}
var Kf = function(s, y, r) {
  var b = s.key + "-" + y.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  qy === !1) && s.registered[b] === void 0 && (s.registered[b] = y.styles);
}, Jf = function(s, y, r) {
  Kf(s, y, r);
  var b = s.key + "-" + y.name;
  if (s.inserted[y.name] === void 0) {
    var E = y;
    do
      s.insert(y === E ? "." + b : "", E, s.sheet, !0), E = E.next;
    while (E !== void 0);
  }
};
function Cy(c) {
  for (var s = 0, y, r = 0, b = c.length; b >= 4; ++r, b -= 4)
    y = c.charCodeAt(r) & 255 | (c.charCodeAt(++r) & 255) << 8 | (c.charCodeAt(++r) & 255) << 16 | (c.charCodeAt(++r) & 255) << 24, y = /* Math.imul(k, m): */
    (y & 65535) * 1540483477 + ((y >>> 16) * 59797 << 16), y ^= /* k >>> r: */
    y >>> 24, s = /* Math.imul(k, m): */
    (y & 65535) * 1540483477 + ((y >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (s & 65535) * 1540483477 + ((s >>> 16) * 59797 << 16);
  switch (b) {
    case 3:
      s ^= (c.charCodeAt(r + 2) & 255) << 16;
    case 2:
      s ^= (c.charCodeAt(r + 1) & 255) << 8;
    case 1:
      s ^= c.charCodeAt(r) & 255, s = /* Math.imul(h, m): */
      (s & 65535) * 1540483477 + ((s >>> 16) * 59797 << 16);
  }
  return s ^= s >>> 13, s = /* Math.imul(h, m): */
  (s & 65535) * 1540483477 + ((s >>> 16) * 59797 << 16), ((s ^ s >>> 15) >>> 0).toString(36);
}
var Yy = {
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
}, By = /[A-Z]|^ms/g, Gy = /_EMO_([^_]+?)_([^]*?)_EMO_/g, _0 = function(s) {
  return s.charCodeAt(1) === 45;
}, e0 = function(s) {
  return s != null && typeof s != "boolean";
}, Nf = /* @__PURE__ */ T0(function(c) {
  return _0(c) ? c : c.replace(By, "-$&").toLowerCase();
}), a0 = function(s, y) {
  switch (s) {
    case "animation":
    case "animationName":
      if (typeof y == "string")
        return y.replace(Gy, function(r, b, E) {
          return Gl = {
            name: b,
            styles: E,
            next: Gl
          }, b;
        });
  }
  return Yy[s] !== 1 && !_0(s) && typeof y == "number" && y !== 0 ? y + "px" : y;
};
function Bu(c, s, y) {
  if (y == null)
    return "";
  var r = y;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof y) {
    case "boolean":
      return "";
    case "object": {
      var b = y;
      if (b.anim === 1)
        return Gl = {
          name: b.name,
          styles: b.styles,
          next: Gl
        }, b.name;
      var E = y;
      if (E.styles !== void 0) {
        var x = E.next;
        if (x !== void 0)
          for (; x !== void 0; )
            Gl = {
              name: x.name,
              styles: x.styles,
              next: Gl
            }, x = x.next;
        var H = E.styles + ";";
        return H;
      }
      return Xy(c, s, y);
    }
    case "function": {
      if (c !== void 0) {
        var R = Gl, p = y(c);
        return Gl = R, Bu(c, s, p);
      }
      break;
    }
  }
  var U = y;
  if (s == null)
    return U;
  var C = s[U];
  return C !== void 0 ? C : U;
}
function Xy(c, s, y) {
  var r = "";
  if (Array.isArray(y))
    for (var b = 0; b < y.length; b++)
      r += Bu(c, s, y[b]) + ";";
  else
    for (var E in y) {
      var x = y[E];
      if (typeof x != "object") {
        var H = x;
        s != null && s[H] !== void 0 ? r += E + "{" + s[H] + "}" : e0(H) && (r += Nf(E) + ":" + a0(E, H) + ";");
      } else if (Array.isArray(x) && typeof x[0] == "string" && (s == null || s[x[0]] === void 0))
        for (var R = 0; R < x.length; R++)
          e0(x[R]) && (r += Nf(E) + ":" + a0(E, x[R]) + ";");
      else {
        var p = Bu(c, s, x);
        switch (E) {
          case "animation":
          case "animationName": {
            r += Nf(E) + ":" + p + ";";
            break;
          }
          default:
            r += E + "{" + p + "}";
        }
      }
    }
  return r;
}
var u0 = /label:\s*([^\s;{]+)\s*(;|$)/g, Gl;
function oi(c, s, y) {
  if (c.length === 1 && typeof c[0] == "object" && c[0] !== null && c[0].styles !== void 0)
    return c[0];
  var r = !0, b = "";
  Gl = void 0;
  var E = c[0];
  if (E == null || E.raw === void 0)
    r = !1, b += Bu(y, s, E);
  else {
    var x = E;
    b += x[0];
  }
  for (var H = 1; H < c.length; H++)
    if (b += Bu(y, s, c[H]), r) {
      var R = E;
      b += R[H];
    }
  u0.lastIndex = 0;
  for (var p = "", U; (U = u0.exec(b)) !== null; )
    p += "-" + U[1];
  var C = Cy(b) + p;
  return {
    name: C,
    styles: b,
    next: Gl
  };
}
var jy = function(s) {
  return s();
}, z0 = $d.useInsertionEffect ? $d.useInsertionEffect : !1, M0 = z0 || jy, n0 = z0 || ht.useLayoutEffect, R0 = /* @__PURE__ */ ht.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ A0({
    key: "css"
  }) : null
), Qy = R0.Provider, kf = function(s) {
  return /* @__PURE__ */ ht.forwardRef(function(y, r) {
    var b = ht.useContext(R0);
    return s(y, b, r);
  });
}, $f = /* @__PURE__ */ ht.createContext({}), Xu = {}.hasOwnProperty, jf = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Wf = function(s, y) {
  var r = {};
  for (var b in y)
    Xu.call(y, b) && (r[b] = y[b]);
  return r[jf] = s, r;
}, Zy = function(s) {
  var y = s.cache, r = s.serialized, b = s.isStringTag;
  return Kf(y, r, b), M0(function() {
    return Jf(y, r, b);
  }), null;
}, Vy = /* @__PURE__ */ kf(function(c, s, y) {
  var r = c.css;
  typeof r == "string" && s.registered[r] !== void 0 && (r = s.registered[r]);
  var b = c[jf], E = [r], x = "";
  typeof c.className == "string" ? x = O0(s.registered, E, c.className) : c.className != null && (x = c.className + " ");
  var H = oi(E, void 0, ht.useContext($f));
  x += s.key + "-" + H.name;
  var R = {};
  for (var p in c)
    Xu.call(c, p) && p !== "css" && p !== jf && (R[p] = c[p]);
  return R.className = x, y && (R.ref = y), /* @__PURE__ */ ht.createElement(ht.Fragment, null, /* @__PURE__ */ ht.createElement(Zy, {
    cache: s,
    serialized: H,
    isStringTag: typeof b == "string"
  }), /* @__PURE__ */ ht.createElement(b, R));
}), Ff = Vy, Nt = function(s, y, r) {
  return Xu.call(y, "css") ? ii.jsx(Ff, Wf(s, y), r) : ii.jsx(s, y, r);
}, le = function(s, y, r) {
  return Xu.call(y, "css") ? ii.jsxs(Ff, Wf(s, y), r) : ii.jsxs(s, y, r);
}, Hf = { exports: {} }, qu = {}, qf = { exports: {} }, Cf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var i0;
function Ly() {
  return i0 || (i0 = 1, function(c) {
    function s(O, q) {
      var K = O.length;
      O.push(q);
      t: for (; 0 < K; ) {
        var pt = K - 1 >>> 1, d = O[pt];
        if (0 < b(d, q))
          O[pt] = q, O[K] = d, K = pt;
        else break t;
      }
    }
    function y(O) {
      return O.length === 0 ? null : O[0];
    }
    function r(O) {
      if (O.length === 0) return null;
      var q = O[0], K = O.pop();
      if (K !== q) {
        O[0] = K;
        t: for (var pt = 0, d = O.length, D = d >>> 1; pt < D; ) {
          var Y = 2 * (pt + 1) - 1, N = O[Y], V = Y + 1, ct = O[V];
          if (0 > b(N, K))
            V < d && 0 > b(ct, N) ? (O[pt] = ct, O[V] = K, pt = V) : (O[pt] = N, O[Y] = K, pt = Y);
          else if (V < d && 0 > b(ct, K))
            O[pt] = ct, O[V] = K, pt = V;
          else break t;
        }
      }
      return q;
    }
    function b(O, q) {
      var K = O.sortIndex - q.sortIndex;
      return K !== 0 ? K : O.id - q.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var E = performance;
      c.unstable_now = function() {
        return E.now();
      };
    } else {
      var x = Date, H = x.now();
      c.unstable_now = function() {
        return x.now() - H;
      };
    }
    var R = [], p = [], U = 1, C = null, B = 3, tt = !1, Q = !1, X = !1, Z = !1, $ = typeof setTimeout == "function" ? setTimeout : null, et = typeof clearTimeout == "function" ? clearTimeout : null, J = typeof setImmediate < "u" ? setImmediate : null;
    function mt(O) {
      for (var q = y(p); q !== null; ) {
        if (q.callback === null) r(p);
        else if (q.startTime <= O)
          r(p), q.sortIndex = q.expirationTime, s(R, q);
        else break;
        q = y(p);
      }
    }
    function M(O) {
      if (X = !1, mt(O), !Q)
        if (y(R) !== null)
          Q = !0, I || (I = !0, wt());
        else {
          var q = y(p);
          q !== null && Kt(M, q.startTime - O);
        }
    }
    var I = !1, W = -1, jt = 5, gl = -1;
    function Ml() {
      return Z ? !0 : !(c.unstable_now() - gl < jt);
    }
    function It() {
      if (Z = !1, I) {
        var O = c.unstable_now();
        gl = O;
        var q = !0;
        try {
          t: {
            Q = !1, X && (X = !1, et(W), W = -1), tt = !0;
            var K = B;
            try {
              l: {
                for (mt(O), C = y(R); C !== null && !(C.expirationTime > O && Ml()); ) {
                  var pt = C.callback;
                  if (typeof pt == "function") {
                    C.callback = null, B = C.priorityLevel;
                    var d = pt(
                      C.expirationTime <= O
                    );
                    if (O = c.unstable_now(), typeof d == "function") {
                      C.callback = d, mt(O), q = !0;
                      break l;
                    }
                    C === y(R) && r(R), mt(O);
                  } else r(R);
                  C = y(R);
                }
                if (C !== null) q = !0;
                else {
                  var D = y(p);
                  D !== null && Kt(
                    M,
                    D.startTime - O
                  ), q = !1;
                }
              }
              break t;
            } finally {
              C = null, B = K, tt = !1;
            }
            q = void 0;
          }
        } finally {
          q ? wt() : I = !1;
        }
      }
    }
    var wt;
    if (typeof J == "function")
      wt = function() {
        J(It);
      };
    else if (typeof MessageChannel < "u") {
      var Me = new MessageChannel(), Re = Me.port2;
      Me.port1.onmessage = It, wt = function() {
        Re.postMessage(null);
      };
    } else
      wt = function() {
        $(It, 0);
      };
    function Kt(O, q) {
      W = $(function() {
        O(c.unstable_now());
      }, q);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, c.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : jt = 0 < O ? Math.floor(1e3 / O) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, c.unstable_next = function(O) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = B;
      }
      var K = B;
      B = q;
      try {
        return O();
      } finally {
        B = K;
      }
    }, c.unstable_requestPaint = function() {
      Z = !0;
    }, c.unstable_runWithPriority = function(O, q) {
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
      var K = B;
      B = O;
      try {
        return q();
      } finally {
        B = K;
      }
    }, c.unstable_scheduleCallback = function(O, q, K) {
      var pt = c.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? pt + K : pt) : K = pt, O) {
        case 1:
          var d = -1;
          break;
        case 2:
          d = 250;
          break;
        case 5:
          d = 1073741823;
          break;
        case 4:
          d = 1e4;
          break;
        default:
          d = 5e3;
      }
      return d = K + d, O = {
        id: U++,
        callback: q,
        priorityLevel: O,
        startTime: K,
        expirationTime: d,
        sortIndex: -1
      }, K > pt ? (O.sortIndex = K, s(p, O), y(R) === null && O === y(p) && (X ? (et(W), W = -1) : X = !0, Kt(M, K - pt))) : (O.sortIndex = d, s(R, O), Q || tt || (Q = !0, I || (I = !0, wt()))), O;
    }, c.unstable_shouldYield = Ml, c.unstable_wrapCallback = function(O) {
      var q = B;
      return function() {
        var K = B;
        B = q;
        try {
          return O.apply(this, arguments);
        } finally {
          B = K;
        }
      };
    };
  }(Cf)), Cf;
}
var c0;
function wy() {
  return c0 || (c0 = 1, qf.exports = Ly()), qf.exports;
}
var Yf = { exports: {} }, $t = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f0;
function Ky() {
  if (f0) return $t;
  f0 = 1;
  var c = Zf();
  function s(R) {
    var p = "https://react.dev/errors/" + R;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var U = 2; U < arguments.length; U++)
        p += "&args[]=" + encodeURIComponent(arguments[U]);
    }
    return "Minified React error #" + R + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function y() {
  }
  var r = {
    d: {
      f: y,
      r: function() {
        throw Error(s(522));
      },
      D: y,
      C: y,
      L: y,
      m: y,
      X: y,
      S: y,
      M: y
    },
    p: 0,
    findDOMNode: null
  }, b = Symbol.for("react.portal");
  function E(R, p, U) {
    var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: b,
      key: C == null ? null : "" + C,
      children: R,
      containerInfo: p,
      implementation: U
    };
  }
  var x = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function H(R, p) {
    if (R === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return $t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, $t.createPortal = function(R, p) {
    var U = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(s(299));
    return E(R, p, null, U);
  }, $t.flushSync = function(R) {
    var p = x.T, U = r.p;
    try {
      if (x.T = null, r.p = 2, R) return R();
    } finally {
      x.T = p, r.p = U, r.d.f();
    }
  }, $t.preconnect = function(R, p) {
    typeof R == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, r.d.C(R, p));
  }, $t.prefetchDNS = function(R) {
    typeof R == "string" && r.d.D(R);
  }, $t.preinit = function(R, p) {
    if (typeof R == "string" && p && typeof p.as == "string") {
      var U = p.as, C = H(U, p.crossOrigin), B = typeof p.integrity == "string" ? p.integrity : void 0, tt = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      U === "style" ? r.d.S(
        R,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: C,
          integrity: B,
          fetchPriority: tt
        }
      ) : U === "script" && r.d.X(R, {
        crossOrigin: C,
        integrity: B,
        fetchPriority: tt,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, $t.preinitModule = function(R, p) {
    if (typeof R == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var U = H(
            p.as,
            p.crossOrigin
          );
          r.d.M(R, {
            crossOrigin: U,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && r.d.M(R);
  }, $t.preload = function(R, p) {
    if (typeof R == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var U = p.as, C = H(U, p.crossOrigin);
      r.d.L(R, U, {
        crossOrigin: C,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0,
        type: typeof p.type == "string" ? p.type : void 0,
        fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
        referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
        imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
        imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
        media: typeof p.media == "string" ? p.media : void 0
      });
    }
  }, $t.preloadModule = function(R, p) {
    if (typeof R == "string")
      if (p) {
        var U = H(p.as, p.crossOrigin);
        r.d.m(R, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: U,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else r.d.m(R);
  }, $t.requestFormReset = function(R) {
    r.d.r(R);
  }, $t.unstable_batchedUpdates = function(R, p) {
    return R(p);
  }, $t.useFormState = function(R, p, U) {
    return x.H.useFormState(R, p, U);
  }, $t.useFormStatus = function() {
    return x.H.useHostTransitionStatus();
  }, $t.version = "19.1.1", $t;
}
var r0;
function Jy() {
  if (r0) return Yf.exports;
  r0 = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (s) {
        console.error(s);
      }
  }
  return c(), Yf.exports = Ky(), Yf.exports;
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
var s0;
function ky() {
  if (s0) return qu;
  s0 = 1;
  var c = wy(), s = Zf(), y = Jy();
  function r(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function b(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function E(t) {
    var l = t, e = t;
    if (t.alternate) for (; l.return; ) l = l.return;
    else {
      t = l;
      do
        l = t, (l.flags & 4098) !== 0 && (e = l.return), t = l.return;
      while (t);
    }
    return l.tag === 3 ? e : null;
  }
  function x(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function H(t) {
    if (E(t) !== t)
      throw Error(r(188));
  }
  function R(t) {
    var l = t.alternate;
    if (!l) {
      if (l = E(t), l === null) throw Error(r(188));
      return l !== t ? null : t;
    }
    for (var e = t, a = l; ; ) {
      var u = e.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (a = u.return, a !== null) {
          e = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === e) return H(u), t;
          if (n === a) return H(u), l;
          n = n.sibling;
        }
        throw Error(r(188));
      }
      if (e.return !== a.return) e = u, a = n;
      else {
        for (var i = !1, f = u.child; f; ) {
          if (f === e) {
            i = !0, e = u, a = n;
            break;
          }
          if (f === a) {
            i = !0, a = u, e = n;
            break;
          }
          f = f.sibling;
        }
        if (!i) {
          for (f = n.child; f; ) {
            if (f === e) {
              i = !0, e = n, a = u;
              break;
            }
            if (f === a) {
              i = !0, a = n, e = u;
              break;
            }
            f = f.sibling;
          }
          if (!i) throw Error(r(189));
        }
      }
      if (e.alternate !== a) throw Error(r(190));
    }
    if (e.tag !== 3) throw Error(r(188));
    return e.stateNode.current === e ? t : l;
  }
  function p(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (l = p(t), l !== null) return l;
      t = t.sibling;
    }
    return null;
  }
  var U = Object.assign, C = Symbol.for("react.element"), B = Symbol.for("react.transitional.element"), tt = Symbol.for("react.portal"), Q = Symbol.for("react.fragment"), X = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), $ = Symbol.for("react.provider"), et = Symbol.for("react.consumer"), J = Symbol.for("react.context"), mt = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), jt = Symbol.for("react.lazy"), gl = Symbol.for("react.activity"), Ml = Symbol.for("react.memo_cache_sentinel"), It = Symbol.iterator;
  function wt(t) {
    return t === null || typeof t != "object" ? null : (t = It && t[It] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Me = Symbol.for("react.client.reference");
  function Re(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Me ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case Q:
        return "Fragment";
      case Z:
        return "Profiler";
      case X:
        return "StrictMode";
      case M:
        return "Suspense";
      case I:
        return "SuspenseList";
      case gl:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case tt:
          return "Portal";
        case J:
          return (t.displayName || "Context") + ".Provider";
        case et:
          return (t._context.displayName || "Context") + ".Consumer";
        case mt:
          var l = t.render;
          return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case W:
          return l = t.displayName || null, l !== null ? l : Re(t.type) || "Memo";
        case jt:
          l = t._payload, t = t._init;
          try {
            return Re(t(l));
          } catch {
          }
      }
    return null;
  }
  var Kt = Array.isArray, O = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = y.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, pt = [], d = -1;
  function D(t) {
    return { current: t };
  }
  function Y(t) {
    0 > d || (t.current = pt[d], pt[d] = null, d--);
  }
  function N(t, l) {
    d++, pt[d] = t.current, t.current = l;
  }
  var V = D(null), ct = D(null), F = D(null), il = D(null);
  function At(t, l) {
    switch (N(F, l), N(ct, t), N(V, null), l.nodeType) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? Sd(t) : 0;
        break;
      default:
        if (t = l.tagName, l = l.namespaceURI)
          l = Sd(l), t = pd(l, t);
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
    Y(V), N(V, t);
  }
  function ee() {
    Y(V), Y(ct), Y(F);
  }
  function di(t) {
    t.memoizedState !== null && N(il, t);
    var l = V.current, e = pd(l, t.type);
    l !== e && (N(ct, t), N(V, e));
  }
  function ju(t) {
    ct.current === t && (Y(V), Y(ct)), il.current === t && (Y(il), Mu._currentValue = K);
  }
  var hi = Object.prototype.hasOwnProperty, yi = c.unstable_scheduleCallback, vi = c.unstable_cancelCallback, D0 = c.unstable_shouldYield, x0 = c.unstable_requestPaint, Ul = c.unstable_now, U0 = c.unstable_getCurrentPriorityLevel, Pf = c.unstable_ImmediatePriority, If = c.unstable_UserBlockingPriority, Qu = c.unstable_NormalPriority, N0 = c.unstable_LowPriority, tr = c.unstable_IdlePriority, H0 = c.log, q0 = c.unstable_setDisableYieldValue, Ca = null, cl = null;
  function ae(t) {
    if (typeof H0 == "function" && q0(t), cl && typeof cl.setStrictMode == "function")
      try {
        cl.setStrictMode(Ca, t);
      } catch {
      }
  }
  var fl = Math.clz32 ? Math.clz32 : B0, C0 = Math.log, Y0 = Math.LN2;
  function B0(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (C0(t) / Y0 | 0) | 0;
  }
  var Zu = 256, Vu = 4194304;
  function De(t) {
    var l = t & 42;
    if (l !== 0) return l;
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
  function Lu(t, l, e) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var u = 0, n = t.suspendedLanes, i = t.pingedLanes;
    t = t.warmLanes;
    var f = a & 134217727;
    return f !== 0 ? (a = f & ~n, a !== 0 ? u = De(a) : (i &= f, i !== 0 ? u = De(i) : e || (e = f & ~t, e !== 0 && (u = De(e))))) : (f = a & ~n, f !== 0 ? u = De(f) : i !== 0 ? u = De(i) : e || (e = a & ~t, e !== 0 && (u = De(e)))), u === 0 ? 0 : l !== 0 && l !== u && (l & n) === 0 && (n = u & -u, e = l & -l, n >= e || n === 32 && (e & 4194048) !== 0) ? l : u;
  }
  function Ya(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function G0(t, l) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
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
        return l + 5e3;
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
  function lr() {
    var t = Zu;
    return Zu <<= 1, (Zu & 4194048) === 0 && (Zu = 256), t;
  }
  function er() {
    var t = Vu;
    return Vu <<= 1, (Vu & 62914560) === 0 && (Vu = 4194304), t;
  }
  function mi(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function Ba(t, l) {
    t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function X0(t, l, e, a, u, n) {
    var i = t.pendingLanes;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
    var f = t.entanglements, o = t.expirationTimes, g = t.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var A = 31 - fl(e), z = 1 << A;
      f[A] = 0, o[A] = -1;
      var S = g[A];
      if (S !== null)
        for (g[A] = null, A = 0; A < S.length; A++) {
          var T = S[A];
          T !== null && (T.lane &= -536870913);
        }
      e &= ~z;
    }
    a !== 0 && ar(t, a, 0), n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(i & ~l));
  }
  function ar(t, l, e) {
    t.pendingLanes |= l, t.suspendedLanes &= ~l;
    var a = 31 - fl(l);
    t.entangledLanes |= l, t.entanglements[a] = t.entanglements[a] | 1073741824 | e & 4194090;
  }
  function ur(t, l) {
    var e = t.entangledLanes |= l;
    for (t = t.entanglements; e; ) {
      var a = 31 - fl(e), u = 1 << a;
      u & l | t[a] & l && (t[a] |= l), e &= ~u;
    }
  }
  function gi(t) {
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
  function bi(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function nr() {
    var t = q.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Xd(t.type));
  }
  function j0(t, l) {
    var e = q.p;
    try {
      return q.p = t, l();
    } finally {
      q.p = e;
    }
  }
  var ue = Math.random().toString(36).slice(2), Jt = "__reactFiber$" + ue, tl = "__reactProps$" + ue, Je = "__reactContainer$" + ue, Si = "__reactEvents$" + ue, Q0 = "__reactListeners$" + ue, Z0 = "__reactHandles$" + ue, ir = "__reactResources$" + ue, Ga = "__reactMarker$" + ue;
  function pi(t) {
    delete t[Jt], delete t[tl], delete t[Si], delete t[Q0], delete t[Z0];
  }
  function ke(t) {
    var l = t[Jt];
    if (l) return l;
    for (var e = t.parentNode; e; ) {
      if (l = e[Je] || e[Jt]) {
        if (e = l.alternate, l.child !== null || e !== null && e.child !== null)
          for (t = Od(t); t !== null; ) {
            if (e = t[Jt]) return e;
            t = Od(t);
          }
        return l;
      }
      t = e, e = t.parentNode;
    }
    return null;
  }
  function $e(t) {
    if (t = t[Jt] || t[Je]) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function Xa(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(r(33));
  }
  function We(t) {
    var l = t[ir];
    return l || (l = t[ir] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function Yt(t) {
    t[Ga] = !0;
  }
  var cr = /* @__PURE__ */ new Set(), fr = {};
  function xe(t, l) {
    Fe(t, l), Fe(t + "Capture", l);
  }
  function Fe(t, l) {
    for (fr[t] = l, t = 0; t < l.length; t++)
      cr.add(l[t]);
  }
  var V0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), rr = {}, sr = {};
  function L0(t) {
    return hi.call(sr, t) ? !0 : hi.call(rr, t) ? !1 : V0.test(t) ? sr[t] = !0 : (rr[t] = !0, !1);
  }
  function wu(t, l, e) {
    if (L0(l))
      if (e === null) t.removeAttribute(l);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(l);
            return;
          case "boolean":
            var a = l.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(l);
              return;
            }
        }
        t.setAttribute(l, "" + e);
      }
  }
  function Ku(t, l, e) {
    if (e === null) t.removeAttribute(l);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttribute(l, "" + e);
    }
  }
  function jl(t, l, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttributeNS(l, e, "" + a);
    }
  }
  var Ti, or;
  function Pe(t) {
    if (Ti === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        Ti = l && l[1] || "", or = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ti + t + or;
  }
  var Ei = !1;
  function Ai(t, l) {
    if (!t || Ei) return "";
    Ei = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (l) {
              var z = function() {
                throw Error();
              };
              if (Object.defineProperty(z.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(z, []);
                } catch (T) {
                  var S = T;
                }
                Reflect.construct(t, [], z);
              } else {
                try {
                  z.call();
                } catch (T) {
                  S = T;
                }
                t.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (T) {
                S = T;
              }
              (z = t()) && typeof z.catch == "function" && z.catch(function() {
              });
            }
          } catch (T) {
            if (T && S && typeof T.stack == "string")
              return [T.stack, S.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = a.DetermineComponentFrameRoot(), i = n[0], f = n[1];
      if (i && f) {
        var o = i.split(`
`), g = f.split(`
`);
        for (u = a = 0; a < o.length && !o[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; u < g.length && !g[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (a === o.length || u === g.length)
          for (a = o.length - 1, u = g.length - 1; 1 <= a && 0 <= u && o[a] !== g[u]; )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (o[a] !== g[u]) {
            if (a !== 1 || u !== 1)
              do
                if (a--, u--, 0 > u || o[a] !== g[u]) {
                  var A = `
` + o[a].replace(" at new ", " at ");
                  return t.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", t.displayName)), A;
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      Ei = !1, Error.prepareStackTrace = e;
    }
    return (e = t ? t.displayName || t.name : "") ? Pe(e) : "";
  }
  function w0(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Pe(t.type);
      case 16:
        return Pe("Lazy");
      case 13:
        return Pe("Suspense");
      case 19:
        return Pe("SuspenseList");
      case 0:
      case 15:
        return Ai(t.type, !1);
      case 11:
        return Ai(t.type.render, !1);
      case 1:
        return Ai(t.type, !0);
      case 31:
        return Pe("Activity");
      default:
        return "";
    }
  }
  function dr(t) {
    try {
      var l = "";
      do
        l += w0(t), t = t.return;
      while (t);
      return l;
    } catch (e) {
      return `
Error generating stack: ` + e.message + `
` + e.stack;
    }
  }
  function bl(t) {
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
  function hr(t) {
    var l = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function K0(t) {
    var l = hr(t) ? "checked" : "value", e = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      l
    ), a = "" + t[l];
    if (!t.hasOwnProperty(l) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
      var u = e.get, n = e.set;
      return Object.defineProperty(t, l, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(i) {
          a = "" + i, n.call(this, i);
        }
      }), Object.defineProperty(t, l, {
        enumerable: e.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(i) {
          a = "" + i;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[l];
        }
      };
    }
  }
  function Ju(t) {
    t._valueTracker || (t._valueTracker = K0(t));
  }
  function yr(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(), a = "";
    return t && (a = hr(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== e ? (l.setValue(t), !0) : !1;
  }
  function ku(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var J0 = /[\n"\\]/g;
  function Sl(t) {
    return t.replace(
      J0,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Oi(t, l, e, a, u, n, i, f) {
    t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), l != null ? i === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + bl(l)) : t.value !== "" + bl(l) && (t.value = "" + bl(l)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), l != null ? _i(t, i, bl(l)) : e != null ? _i(t, i, bl(e)) : a != null && t.removeAttribute("value"), u == null && n != null && (t.defaultChecked = !!n), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.name = "" + bl(f) : t.removeAttribute("name");
  }
  function vr(t, l, e, a, u, n, i, f) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (t.type = n), l != null || e != null) {
      if (!(n !== "submit" && n !== "reset" || l != null))
        return;
      e = e != null ? "" + bl(e) : "", l = l != null ? "" + bl(l) : e, f || l === t.value || (t.value = l), t.defaultValue = l;
    }
    a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = f ? t.checked : !!a, t.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i);
  }
  function _i(t, l, e) {
    l === "number" && ku(t.ownerDocument) === t || t.defaultValue === "" + e || (t.defaultValue = "" + e);
  }
  function Ie(t, l, e, a) {
    if (t = t.options, l) {
      l = {};
      for (var u = 0; u < e.length; u++)
        l["$" + e[u]] = !0;
      for (e = 0; e < t.length; e++)
        u = l.hasOwnProperty("$" + t[e].value), t[e].selected !== u && (t[e].selected = u), u && a && (t[e].defaultSelected = !0);
    } else {
      for (e = "" + bl(e), l = null, u = 0; u < t.length; u++) {
        if (t[u].value === e) {
          t[u].selected = !0, a && (t[u].defaultSelected = !0);
          return;
        }
        l !== null || t[u].disabled || (l = t[u]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function mr(t, l, e) {
    if (l != null && (l = "" + bl(l), l !== t.value && (t.value = l), e == null)) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + bl(e) : "";
  }
  function gr(t, l, e, a) {
    if (l == null) {
      if (a != null) {
        if (e != null) throw Error(r(92));
        if (Kt(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), l = e;
    }
    e = bl(l), t.defaultValue = e, a = t.textContent, a === e && a !== "" && a !== null && (t.value = a);
  }
  function ta(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var k0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function br(t, l, e) {
    var a = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : a ? t.setProperty(l, e) : typeof e != "number" || e === 0 || k0.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px";
  }
  function Sr(t, l, e) {
    if (l != null && typeof l != "object")
      throw Error(r(62));
    if (t = t.style, e != null) {
      for (var a in e)
        !e.hasOwnProperty(a) || l != null && l.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var u in l)
        a = l[u], l.hasOwnProperty(u) && e[u] !== a && br(t, u, a);
    } else
      for (var n in l)
        l.hasOwnProperty(n) && br(t, n, l[n]);
  }
  function zi(t) {
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
  var $0 = /* @__PURE__ */ new Map([
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
  ]), W0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function $u(t) {
    return W0.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var Mi = null;
  function Ri(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var la = null, ea = null;
  function pr(t) {
    var l = $e(t);
    if (l && (t = l.stateNode)) {
      var e = t[tl] || null;
      t: switch (t = l.stateNode, l.type) {
        case "input":
          if (Oi(
            t,
            e.value,
            e.defaultValue,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name
          ), l = e.name, e.type === "radio" && l != null) {
            for (e = t; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll(
              'input[name="' + Sl(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < e.length; l++) {
              var a = e[l];
              if (a !== t && a.form === t.form) {
                var u = a[tl] || null;
                if (!u) throw Error(r(90));
                Oi(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (l = 0; l < e.length; l++)
              a = e[l], a.form === t.form && yr(a);
          }
          break t;
        case "textarea":
          mr(t, e.value, e.defaultValue);
          break t;
        case "select":
          l = e.value, l != null && Ie(t, !!e.multiple, l, !1);
      }
    }
  }
  var Di = !1;
  function Tr(t, l, e) {
    if (Di) return t(l, e);
    Di = !0;
    try {
      var a = t(l);
      return a;
    } finally {
      if (Di = !1, (la !== null || ea !== null) && (Cn(), la && (l = la, t = ea, ea = la = null, pr(l), t)))
        for (l = 0; l < t.length; l++) pr(t[l]);
    }
  }
  function ja(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var a = e[tl] || null;
    if (a === null) return null;
    e = a[l];
    t: switch (l) {
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
    if (e && typeof e != "function")
      throw Error(
        r(231, l, typeof e)
      );
    return e;
  }
  var Ql = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), xi = !1;
  if (Ql)
    try {
      var Qa = {};
      Object.defineProperty(Qa, "passive", {
        get: function() {
          xi = !0;
        }
      }), window.addEventListener("test", Qa, Qa), window.removeEventListener("test", Qa, Qa);
    } catch {
      xi = !1;
    }
  var ne = null, Ui = null, Wu = null;
  function Er() {
    if (Wu) return Wu;
    var t, l = Ui, e = l.length, a, u = "value" in ne ? ne.value : ne.textContent, n = u.length;
    for (t = 0; t < e && l[t] === u[t]; t++) ;
    var i = e - t;
    for (a = 1; a <= i && l[e - a] === u[n - a]; a++) ;
    return Wu = u.slice(t, 1 < a ? 1 - a : void 0);
  }
  function Fu(t) {
    var l = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Pu() {
    return !0;
  }
  function Ar() {
    return !1;
  }
  function ll(t) {
    function l(e, a, u, n, i) {
      this._reactName = e, this._targetInst = u, this.type = a, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var f in t)
        t.hasOwnProperty(f) && (e = t[f], this[f] = e ? e(n) : n[f]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Pu : Ar, this.isPropagationStopped = Ar, this;
    }
    return U(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Pu);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Pu);
      },
      persist: function() {
      },
      isPersistent: Pu
    }), l;
  }
  var Ue = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Iu = ll(Ue), Za = U({}, Ue, { view: 0, detail: 0 }), F0 = ll(Za), Ni, Hi, Va, tn = U({}, Za, {
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
    getModifierState: Ci,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Va && (Va && t.type === "mousemove" ? (Ni = t.screenX - Va.screenX, Hi = t.screenY - Va.screenY) : Hi = Ni = 0, Va = t), Ni);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Hi;
    }
  }), Or = ll(tn), P0 = U({}, tn, { dataTransfer: 0 }), I0 = ll(P0), th = U({}, Za, { relatedTarget: 0 }), qi = ll(th), lh = U({}, Ue, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), eh = ll(lh), ah = U({}, Ue, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), uh = ll(ah), nh = U({}, Ue, { data: 0 }), _r = ll(nh), ih = {
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
  }, ch = {
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
  }, fh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function rh(t) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(t) : (t = fh[t]) ? !!l[t] : !1;
  }
  function Ci() {
    return rh;
  }
  var sh = U({}, Za, {
    key: function(t) {
      if (t.key) {
        var l = ih[t.key] || t.key;
        if (l !== "Unidentified") return l;
      }
      return t.type === "keypress" ? (t = Fu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? ch[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ci,
    charCode: function(t) {
      return t.type === "keypress" ? Fu(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Fu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), oh = ll(sh), dh = U({}, tn, {
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
  }), zr = ll(dh), hh = U({}, Za, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ci
  }), yh = ll(hh), vh = U({}, Ue, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), mh = ll(vh), gh = U({}, tn, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), bh = ll(gh), Sh = U({}, Ue, {
    newState: 0,
    oldState: 0
  }), ph = ll(Sh), Th = [9, 13, 27, 32], Yi = Ql && "CompositionEvent" in window, La = null;
  Ql && "documentMode" in document && (La = document.documentMode);
  var Eh = Ql && "TextEvent" in window && !La, Mr = Ql && (!Yi || La && 8 < La && 11 >= La), Rr = " ", Dr = !1;
  function xr(t, l) {
    switch (t) {
      case "keyup":
        return Th.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ur(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var aa = !1;
  function Ah(t, l) {
    switch (t) {
      case "compositionend":
        return Ur(l);
      case "keypress":
        return l.which !== 32 ? null : (Dr = !0, Rr);
      case "textInput":
        return t = l.data, t === Rr && Dr ? null : t;
      default:
        return null;
    }
  }
  function Oh(t, l) {
    if (aa)
      return t === "compositionend" || !Yi && xr(t, l) ? (t = Er(), Wu = Ui = ne = null, aa = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
          if (l.char && 1 < l.char.length)
            return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return Mr && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var _h = {
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
  function Nr(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!_h[t.type] : l === "textarea";
  }
  function Hr(t, l, e, a) {
    la ? ea ? ea.push(a) : ea = [a] : la = a, l = Qn(l, "onChange"), 0 < l.length && (e = new Iu(
      "onChange",
      "change",
      null,
      e,
      a
    ), t.push({ event: e, listeners: l }));
  }
  var wa = null, Ka = null;
  function zh(t) {
    yd(t, 0);
  }
  function ln(t) {
    var l = Xa(t);
    if (yr(l)) return t;
  }
  function qr(t, l) {
    if (t === "change") return l;
  }
  var Cr = !1;
  if (Ql) {
    var Bi;
    if (Ql) {
      var Gi = "oninput" in document;
      if (!Gi) {
        var Yr = document.createElement("div");
        Yr.setAttribute("oninput", "return;"), Gi = typeof Yr.oninput == "function";
      }
      Bi = Gi;
    } else Bi = !1;
    Cr = Bi && (!document.documentMode || 9 < document.documentMode);
  }
  function Br() {
    wa && (wa.detachEvent("onpropertychange", Gr), Ka = wa = null);
  }
  function Gr(t) {
    if (t.propertyName === "value" && ln(Ka)) {
      var l = [];
      Hr(
        l,
        Ka,
        t,
        Ri(t)
      ), Tr(zh, l);
    }
  }
  function Mh(t, l, e) {
    t === "focusin" ? (Br(), wa = l, Ka = e, wa.attachEvent("onpropertychange", Gr)) : t === "focusout" && Br();
  }
  function Rh(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ln(Ka);
  }
  function Dh(t, l) {
    if (t === "click") return ln(l);
  }
  function xh(t, l) {
    if (t === "input" || t === "change")
      return ln(l);
  }
  function Uh(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var rl = typeof Object.is == "function" ? Object.is : Uh;
  function Ja(t, l) {
    if (rl(t, l)) return !0;
    if (typeof t != "object" || t === null || typeof l != "object" || l === null)
      return !1;
    var e = Object.keys(t), a = Object.keys(l);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!hi.call(l, u) || !rl(t[u], l[u]))
        return !1;
    }
    return !0;
  }
  function Xr(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function jr(t, l) {
    var e = Xr(t);
    t = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (a = t + e.textContent.length, t <= l && a >= l)
          return { node: e, offset: l - t };
        t = a;
      }
      t: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break t;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = Xr(e);
    }
  }
  function Qr(t, l) {
    return t && l ? t === l ? !0 : t && t.nodeType === 3 ? !1 : l && l.nodeType === 3 ? Qr(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function Zr(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var l = ku(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = ku(t.document);
    }
    return l;
  }
  function Xi(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
  }
  var Nh = Ql && "documentMode" in document && 11 >= document.documentMode, ua = null, ji = null, ka = null, Qi = !1;
  function Vr(t, l, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Qi || ua == null || ua !== ku(a) || (a = ua, "selectionStart" in a && Xi(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), ka && Ja(ka, a) || (ka = a, a = Qn(ji, "onSelect"), 0 < a.length && (l = new Iu(
      "onSelect",
      "select",
      null,
      l,
      e
    ), t.push({ event: l, listeners: a }), l.target = ua)));
  }
  function Ne(t, l) {
    var e = {};
    return e[t.toLowerCase()] = l.toLowerCase(), e["Webkit" + t] = "webkit" + l, e["Moz" + t] = "moz" + l, e;
  }
  var na = {
    animationend: Ne("Animation", "AnimationEnd"),
    animationiteration: Ne("Animation", "AnimationIteration"),
    animationstart: Ne("Animation", "AnimationStart"),
    transitionrun: Ne("Transition", "TransitionRun"),
    transitionstart: Ne("Transition", "TransitionStart"),
    transitioncancel: Ne("Transition", "TransitionCancel"),
    transitionend: Ne("Transition", "TransitionEnd")
  }, Zi = {}, Lr = {};
  Ql && (Lr = document.createElement("div").style, "AnimationEvent" in window || (delete na.animationend.animation, delete na.animationiteration.animation, delete na.animationstart.animation), "TransitionEvent" in window || delete na.transitionend.transition);
  function He(t) {
    if (Zi[t]) return Zi[t];
    if (!na[t]) return t;
    var l = na[t], e;
    for (e in l)
      if (l.hasOwnProperty(e) && e in Lr)
        return Zi[t] = l[e];
    return t;
  }
  var wr = He("animationend"), Kr = He("animationiteration"), Jr = He("animationstart"), Hh = He("transitionrun"), qh = He("transitionstart"), Ch = He("transitioncancel"), kr = He("transitionend"), $r = /* @__PURE__ */ new Map(), Vi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Vi.push("scrollEnd");
  function Rl(t, l) {
    $r.set(t, l), xe(l, [t]);
  }
  var Wr = /* @__PURE__ */ new WeakMap();
  function pl(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = Wr.get(t);
      return e !== void 0 ? e : (l = {
        value: t,
        source: l,
        stack: dr(l)
      }, Wr.set(t, l), l);
    }
    return {
      value: t,
      source: l,
      stack: dr(l)
    };
  }
  var Tl = [], ia = 0, Li = 0;
  function en() {
    for (var t = ia, l = Li = ia = 0; l < t; ) {
      var e = Tl[l];
      Tl[l++] = null;
      var a = Tl[l];
      Tl[l++] = null;
      var u = Tl[l];
      Tl[l++] = null;
      var n = Tl[l];
      if (Tl[l++] = null, a !== null && u !== null) {
        var i = a.pending;
        i === null ? u.next = u : (u.next = i.next, i.next = u), a.pending = u;
      }
      n !== 0 && Fr(e, u, n);
    }
  }
  function an(t, l, e, a) {
    Tl[ia++] = t, Tl[ia++] = l, Tl[ia++] = e, Tl[ia++] = a, Li |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function wi(t, l, e, a) {
    return an(t, l, e, a), un(t);
  }
  function ca(t, l) {
    return an(t, null, null, l), un(t);
  }
  function Fr(t, l, e) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e);
    for (var u = !1, n = t.return; n !== null; )
      n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (t = n.stateNode, t === null || t._visibility & 1 || (u = !0)), t = n, n = n.return;
    return t.tag === 3 ? (n = t.stateNode, u && l !== null && (u = 31 - fl(e), t = n.hiddenUpdates, a = t[u], a === null ? t[u] = [l] : a.push(l), l.lane = e | 536870912), n) : null;
  }
  function un(t) {
    if (50 < Su)
      throw Su = 0, Fc = null, Error(r(185));
    for (var l = t.return; l !== null; )
      t = l, l = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var fa = {};
  function Yh(t, l, e, a) {
    this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function sl(t, l, e, a) {
    return new Yh(t, l, e, a);
  }
  function Ki(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Zl(t, l) {
    var e = t.alternate;
    return e === null ? (e = sl(
      t.tag,
      l,
      t.key,
      t.mode
    ), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 65011712, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e;
  }
  function Pr(t, l) {
    t.flags &= 65011714;
    var e = t.alternate;
    return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), t;
  }
  function nn(t, l, e, a, u, n) {
    var i = 0;
    if (a = t, typeof t == "function") Ki(t) && (i = 1);
    else if (typeof t == "string")
      i = G1(
        t,
        e,
        V.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case gl:
          return t = sl(31, e, l, u), t.elementType = gl, t.lanes = n, t;
        case Q:
          return qe(e.children, u, n, l);
        case X:
          i = 8, u |= 24;
          break;
        case Z:
          return t = sl(12, e, l, u | 2), t.elementType = Z, t.lanes = n, t;
        case M:
          return t = sl(13, e, l, u), t.elementType = M, t.lanes = n, t;
        case I:
          return t = sl(19, e, l, u), t.elementType = I, t.lanes = n, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case $:
              case J:
                i = 10;
                break t;
              case et:
                i = 9;
                break t;
              case mt:
                i = 11;
                break t;
              case W:
                i = 14;
                break t;
              case jt:
                i = 16, a = null;
                break t;
            }
          i = 29, e = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return l = sl(i, e, l, u), l.elementType = t, l.type = a, l.lanes = n, l;
  }
  function qe(t, l, e, a) {
    return t = sl(7, t, a, l), t.lanes = e, t;
  }
  function Ji(t, l, e) {
    return t = sl(6, t, null, l), t.lanes = e, t;
  }
  function ki(t, l, e) {
    return l = sl(
      4,
      t.children !== null ? t.children : [],
      t.key,
      l
    ), l.lanes = e, l.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, l;
  }
  var ra = [], sa = 0, cn = null, fn = 0, El = [], Al = 0, Ce = null, Vl = 1, Ll = "";
  function Ye(t, l) {
    ra[sa++] = fn, ra[sa++] = cn, cn = t, fn = l;
  }
  function Ir(t, l, e) {
    El[Al++] = Vl, El[Al++] = Ll, El[Al++] = Ce, Ce = t;
    var a = Vl;
    t = Ll;
    var u = 32 - fl(a) - 1;
    a &= ~(1 << u), e += 1;
    var n = 32 - fl(l) + u;
    if (30 < n) {
      var i = u - u % 5;
      n = (a & (1 << i) - 1).toString(32), a >>= i, u -= i, Vl = 1 << 32 - fl(l) + u | e << u | a, Ll = n + t;
    } else
      Vl = 1 << n | e << u | a, Ll = t;
  }
  function $i(t) {
    t.return !== null && (Ye(t, 1), Ir(t, 1, 0));
  }
  function Wi(t) {
    for (; t === cn; )
      cn = ra[--sa], ra[sa] = null, fn = ra[--sa], ra[sa] = null;
    for (; t === Ce; )
      Ce = El[--Al], El[Al] = null, Ll = El[--Al], El[Al] = null, Vl = El[--Al], El[Al] = null;
  }
  var Pt = null, zt = null, rt = !1, Be = null, Nl = !1, Fi = Error(r(519));
  function Ge(t) {
    var l = Error(r(418, ""));
    throw Fa(pl(l, t)), Fi;
  }
  function ts(t) {
    var l = t.stateNode, e = t.type, a = t.memoizedProps;
    switch (l[Jt] = t, l[tl] = a, e) {
      case "dialog":
        nt("cancel", l), nt("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        nt("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < Tu.length; e++)
          nt(Tu[e], l);
        break;
      case "source":
        nt("error", l);
        break;
      case "img":
      case "image":
      case "link":
        nt("error", l), nt("load", l);
        break;
      case "details":
        nt("toggle", l);
        break;
      case "input":
        nt("invalid", l), vr(
          l,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        ), Ju(l);
        break;
      case "select":
        nt("invalid", l);
        break;
      case "textarea":
        nt("invalid", l), gr(l, a.value, a.defaultValue, a.children), Ju(l);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || a.suppressHydrationWarning === !0 || bd(l.textContent, e) ? (a.popover != null && (nt("beforetoggle", l), nt("toggle", l)), a.onScroll != null && nt("scroll", l), a.onScrollEnd != null && nt("scrollend", l), a.onClick != null && (l.onclick = Zn), l = !0) : l = !1, l || Ge(t);
  }
  function ls(t) {
    for (Pt = t.return; Pt; )
      switch (Pt.tag) {
        case 5:
        case 13:
          Nl = !1;
          return;
        case 27:
        case 3:
          Nl = !0;
          return;
        default:
          Pt = Pt.return;
      }
  }
  function $a(t) {
    if (t !== Pt) return !1;
    if (!rt) return ls(t), rt = !0, !1;
    var l = t.tag, e;
    if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || yf(t.type, t.memoizedProps)), e = !e), e && zt && Ge(t), ls(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      t: {
        for (t = t.nextSibling, l = 0; t; ) {
          if (t.nodeType === 8)
            if (e = t.data, e === "/$") {
              if (l === 0) {
                zt = xl(t.nextSibling);
                break t;
              }
              l--;
            } else
              e !== "$" && e !== "$!" && e !== "$?" || l++;
          t = t.nextSibling;
        }
        zt = null;
      }
    } else
      l === 27 ? (l = zt, Te(t.type) ? (t = bf, bf = null, zt = t) : zt = l) : zt = Pt ? xl(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Wa() {
    zt = Pt = null, rt = !1;
  }
  function es() {
    var t = Be;
    return t !== null && (ul === null ? ul = t : ul.push.apply(
      ul,
      t
    ), Be = null), t;
  }
  function Fa(t) {
    Be === null ? Be = [t] : Be.push(t);
  }
  var Pi = D(null), Xe = null, wl = null;
  function ie(t, l, e) {
    N(Pi, l._currentValue), l._currentValue = e;
  }
  function Kl(t) {
    t._currentValue = Pi.current, Y(Pi);
  }
  function Ii(t, l, e) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & l) !== l ? (t.childLanes |= l, a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l), t === e) break;
      t = t.return;
    }
  }
  function tc(t, l, e, a) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var f = n;
          n = u;
          for (var o = 0; o < l.length; o++)
            if (f.context === l[o]) {
              n.lanes |= e, f = n.alternate, f !== null && (f.lanes |= e), Ii(
                n.return,
                e,
                t
              ), a || (i = null);
              break t;
            }
          n = f.next;
        }
      } else if (u.tag === 18) {
        if (i = u.return, i === null) throw Error(r(341));
        i.lanes |= e, n = i.alternate, n !== null && (n.lanes |= e), Ii(i, e, t), i = null;
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (u = i.sibling, u !== null) {
            u.return = i.return, i = u;
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function Pa(t, l, e, a) {
    t = null;
    for (var u = l, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(r(387));
        if (i = i.memoizedProps, i !== null) {
          var f = u.type;
          rl(u.pendingProps.value, i.value) || (t !== null ? t.push(f) : t = [f]);
        }
      } else if (u === il.current) {
        if (i = u.alternate, i === null) throw Error(r(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(Mu) : t = [Mu]);
      }
      u = u.return;
    }
    t !== null && tc(
      l,
      t,
      e,
      a
    ), l.flags |= 262144;
  }
  function rn(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!rl(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function je(t) {
    Xe = t, wl = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function kt(t) {
    return as(Xe, t);
  }
  function sn(t, l) {
    return Xe === null && je(t), as(t, l);
  }
  function as(t, l) {
    var e = l._currentValue;
    if (l = { context: l, memoizedValue: e, next: null }, wl === null) {
      if (t === null) throw Error(r(308));
      wl = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
    } else wl = wl.next = l;
    return e;
  }
  var Bh = typeof AbortController < "u" ? AbortController : function() {
    var t = [], l = this.signal = {
      aborted: !1,
      addEventListener: function(e, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      l.aborted = !0, t.forEach(function(e) {
        return e();
      });
    };
  }, Gh = c.unstable_scheduleCallback, Xh = c.unstable_NormalPriority, qt = {
    $$typeof: J,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function lc() {
    return {
      controller: new Bh(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ia(t) {
    t.refCount--, t.refCount === 0 && Gh(Xh, function() {
      t.controller.abort();
    });
  }
  var tu = null, ec = 0, oa = 0, da = null;
  function jh(t, l) {
    if (tu === null) {
      var e = tu = [];
      ec = 0, oa = uf(), da = {
        status: "pending",
        value: void 0,
        then: function(a) {
          e.push(a);
        }
      };
    }
    return ec++, l.then(us, us), l;
  }
  function us() {
    if (--ec === 0 && tu !== null) {
      da !== null && (da.status = "fulfilled");
      var t = tu;
      tu = null, oa = 0, da = null;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function Qh(t, l) {
    var e = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        e.push(u);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = l;
        for (var u = 0; u < e.length; u++) (0, e[u])(l);
      },
      function(u) {
        for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)
          (0, e[u])(void 0);
      }
    ), a;
  }
  var ns = O.S;
  O.S = function(t, l) {
    typeof l == "object" && l !== null && typeof l.then == "function" && jh(t, l), ns !== null && ns(t, l);
  };
  var Qe = D(null);
  function ac() {
    var t = Qe.current;
    return t !== null ? t : Et.pooledCache;
  }
  function on(t, l) {
    l === null ? N(Qe, Qe.current) : N(Qe, l.pool);
  }
  function is() {
    var t = ac();
    return t === null ? null : { parent: qt._currentValue, pool: t };
  }
  var lu = Error(r(460)), cs = Error(r(474)), dn = Error(r(542)), uc = { then: function() {
  } };
  function fs(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function hn() {
  }
  function rs(t, l, e) {
    switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(hn, hn), l = e), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw t = l.reason, os(t), t;
      default:
        if (typeof l.status == "string") l.then(hn, hn);
        else {
          if (t = Et, t !== null && 100 < t.shellSuspendCounter)
            throw Error(r(482));
          t = l, t.status = "pending", t.then(
            function(a) {
              if (l.status === "pending") {
                var u = l;
                u.status = "fulfilled", u.value = a;
              }
            },
            function(a) {
              if (l.status === "pending") {
                var u = l;
                u.status = "rejected", u.reason = a;
              }
            }
          );
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw t = l.reason, os(t), t;
        }
        throw eu = l, lu;
    }
  }
  var eu = null;
  function ss() {
    if (eu === null) throw Error(r(459));
    var t = eu;
    return eu = null, t;
  }
  function os(t) {
    if (t === lu || t === dn)
      throw Error(r(483));
  }
  var ce = !1;
  function nc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ic(t, l) {
    t = t.updateQueue, l.updateQueue === t && (l.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function fe(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function re(t, l, e) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (yt & 2) !== 0) {
      var u = a.pending;
      return u === null ? l.next = l : (l.next = u.next, u.next = l), a.pending = l, l = un(t), Fr(t, null, e), l;
    }
    return an(t, a, l, e), un(t);
  }
  function au(t, l, e) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
      var a = l.lanes;
      a &= t.pendingLanes, e |= a, l.lanes = e, ur(t, e);
    }
  }
  function cc(t, l) {
    var e = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, e === a)) {
      var u = null, n = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          };
          n === null ? u = n = i : n = n.next = i, e = e.next;
        } while (e !== null);
        n === null ? u = n = l : n = n.next = l;
      } else u = n = l;
      e = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = e;
      return;
    }
    t = e.lastBaseUpdate, t === null ? e.firstBaseUpdate = l : t.next = l, e.lastBaseUpdate = l;
  }
  var fc = !1;
  function uu() {
    if (fc) {
      var t = da;
      if (t !== null) throw t;
    }
  }
  function nu(t, l, e, a) {
    fc = !1;
    var u = t.updateQueue;
    ce = !1;
    var n = u.firstBaseUpdate, i = u.lastBaseUpdate, f = u.shared.pending;
    if (f !== null) {
      u.shared.pending = null;
      var o = f, g = o.next;
      o.next = null, i === null ? n = g : i.next = g, i = o;
      var A = t.alternate;
      A !== null && (A = A.updateQueue, f = A.lastBaseUpdate, f !== i && (f === null ? A.firstBaseUpdate = g : f.next = g, A.lastBaseUpdate = o));
    }
    if (n !== null) {
      var z = u.baseState;
      i = 0, A = g = o = null, f = n;
      do {
        var S = f.lane & -536870913, T = S !== f.lane;
        if (T ? (it & S) === S : (a & S) === S) {
          S !== 0 && S === oa && (fc = !0), A !== null && (A = A.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          t: {
            var k = t, L = f;
            S = l;
            var St = e;
            switch (L.tag) {
              case 1:
                if (k = L.payload, typeof k == "function") {
                  z = k.call(St, z, S);
                  break t;
                }
                z = k;
                break t;
              case 3:
                k.flags = k.flags & -65537 | 128;
              case 0:
                if (k = L.payload, S = typeof k == "function" ? k.call(St, z, S) : k, S == null) break t;
                z = U({}, z, S);
                break t;
              case 2:
                ce = !0;
            }
          }
          S = f.callback, S !== null && (t.flags |= 64, T && (t.flags |= 8192), T = u.callbacks, T === null ? u.callbacks = [S] : T.push(S));
        } else
          T = {
            lane: S,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, A === null ? (g = A = T, o = z) : A = A.next = T, i |= S;
        if (f = f.next, f === null) {
          if (f = u.shared.pending, f === null)
            break;
          T = f, f = T.next, T.next = null, u.lastBaseUpdate = T, u.shared.pending = null;
        }
      } while (!0);
      A === null && (o = z), u.baseState = o, u.firstBaseUpdate = g, u.lastBaseUpdate = A, n === null && (u.shared.lanes = 0), ge |= i, t.lanes = i, t.memoizedState = z;
    }
  }
  function ds(t, l) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(l);
  }
  function hs(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++)
        ds(e[t], l);
  }
  var ha = D(null), yn = D(0);
  function ys(t, l) {
    t = Il, N(yn, t), N(ha, l), Il = t | l.baseLanes;
  }
  function rc() {
    N(yn, Il), N(ha, ha.current);
  }
  function sc() {
    Il = yn.current, Y(ha), Y(yn);
  }
  var se = 0, lt = null, gt = null, xt = null, vn = !1, ya = !1, Ze = !1, mn = 0, iu = 0, va = null, Zh = 0;
  function Rt() {
    throw Error(r(321));
  }
  function oc(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!rl(t[e], l[e])) return !1;
    return !0;
  }
  function dc(t, l, e, a, u, n) {
    return se = n, lt = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, O.H = t === null || t.memoizedState === null ? Fs : Ps, Ze = !1, n = e(a, u), Ze = !1, ya && (n = ms(
      l,
      e,
      a,
      u
    )), vs(t), n;
  }
  function vs(t) {
    O.H = En;
    var l = gt !== null && gt.next !== null;
    if (se = 0, xt = gt = lt = null, vn = !1, iu = 0, va = null, l) throw Error(r(300));
    t === null || Bt || (t = t.dependencies, t !== null && rn(t) && (Bt = !0));
  }
  function ms(t, l, e, a) {
    lt = t;
    var u = 0;
    do {
      if (ya && (va = null), iu = 0, ya = !1, 25 <= u) throw Error(r(301));
      if (u += 1, xt = gt = null, t.updateQueue != null) {
        var n = t.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      O.H = $h, n = l(e, a);
    } while (ya);
    return n;
  }
  function Vh() {
    var t = O.H, l = t.useState()[0];
    return l = typeof l.then == "function" ? cu(l) : l, t = t.useState()[0], (gt !== null ? gt.memoizedState : null) !== t && (lt.flags |= 1024), l;
  }
  function hc() {
    var t = mn !== 0;
    return mn = 0, t;
  }
  function yc(t, l, e) {
    l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
  }
  function vc(t) {
    if (vn) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), t = t.next;
      }
      vn = !1;
    }
    se = 0, xt = gt = lt = null, ya = !1, iu = mn = 0, va = null;
  }
  function el() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return xt === null ? lt.memoizedState = xt = t : xt = xt.next = t, xt;
  }
  function Ut() {
    if (gt === null) {
      var t = lt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = gt.next;
    var l = xt === null ? lt.memoizedState : xt.next;
    if (l !== null)
      xt = l, gt = t;
    else {
      if (t === null)
        throw lt.alternate === null ? Error(r(467)) : Error(r(310));
      gt = t, t = {
        memoizedState: gt.memoizedState,
        baseState: gt.baseState,
        baseQueue: gt.baseQueue,
        queue: gt.queue,
        next: null
      }, xt === null ? lt.memoizedState = xt = t : xt = xt.next = t;
    }
    return xt;
  }
  function mc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function cu(t) {
    var l = iu;
    return iu += 1, va === null && (va = []), t = rs(va, t, l), l = lt, (xt === null ? l.memoizedState : xt.next) === null && (l = l.alternate, O.H = l === null || l.memoizedState === null ? Fs : Ps), t;
  }
  function gn(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return cu(t);
      if (t.$$typeof === J) return kt(t);
    }
    throw Error(r(438, String(t)));
  }
  function gc(t) {
    var l = null, e = lt.updateQueue;
    if (e !== null && (l = e.memoCache), l == null) {
      var a = lt.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (l = {
        data: a.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (l == null && (l = { data: [], index: 0 }), e === null && (e = mc(), lt.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
      for (e = l.data[l.index] = Array(t), a = 0; a < t; a++)
        e[a] = Ml;
    return l.index++, e;
  }
  function Jl(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function bn(t) {
    var l = Ut();
    return bc(l, gt, t);
  }
  function bc(t, l, e) {
    var a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = e;
    var u = t.baseQueue, n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        u.next = n.next, n.next = i;
      }
      l.baseQueue = u = n, a.pending = null;
    }
    if (n = t.baseState, u === null) t.memoizedState = n;
    else {
      l = u.next;
      var f = i = null, o = null, g = l, A = !1;
      do {
        var z = g.lane & -536870913;
        if (z !== g.lane ? (it & z) === z : (se & z) === z) {
          var S = g.revertLane;
          if (S === 0)
            o !== null && (o = o.next = {
              lane: 0,
              revertLane: 0,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null
            }), z === oa && (A = !0);
          else if ((se & S) === S) {
            g = g.next, S === oa && (A = !0);
            continue;
          } else
            z = {
              lane: 0,
              revertLane: g.revertLane,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null
            }, o === null ? (f = o = z, i = n) : o = o.next = z, lt.lanes |= S, ge |= S;
          z = g.action, Ze && e(n, z), n = g.hasEagerState ? g.eagerState : e(n, z);
        } else
          S = {
            lane: z,
            revertLane: g.revertLane,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null
          }, o === null ? (f = o = S, i = n) : o = o.next = S, lt.lanes |= z, ge |= z;
        g = g.next;
      } while (g !== null && g !== l);
      if (o === null ? i = n : o.next = f, !rl(n, t.memoizedState) && (Bt = !0, A && (e = da, e !== null)))
        throw e;
      t.memoizedState = n, t.baseState = i, t.baseQueue = o, a.lastRenderedState = n;
    }
    return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function Sc(t) {
    var l = Ut(), e = l.queue;
    if (e === null) throw Error(r(311));
    e.lastRenderedReducer = t;
    var a = e.dispatch, u = e.pending, n = l.memoizedState;
    if (u !== null) {
      e.pending = null;
      var i = u = u.next;
      do
        n = t(n, i.action), i = i.next;
      while (i !== u);
      rl(n, l.memoizedState) || (Bt = !0), l.memoizedState = n, l.baseQueue === null && (l.baseState = n), e.lastRenderedState = n;
    }
    return [n, a];
  }
  function gs(t, l, e) {
    var a = lt, u = Ut(), n = rt;
    if (n) {
      if (e === void 0) throw Error(r(407));
      e = e();
    } else e = l();
    var i = !rl(
      (gt || u).memoizedState,
      e
    );
    i && (u.memoizedState = e, Bt = !0), u = u.queue;
    var f = ps.bind(null, a, u, t);
    if (fu(2048, 8, f, [t]), u.getSnapshot !== l || i || xt !== null && xt.memoizedState.tag & 1) {
      if (a.flags |= 2048, ma(
        9,
        Sn(),
        Ss.bind(
          null,
          a,
          u,
          e,
          l
        ),
        null
      ), Et === null) throw Error(r(349));
      n || (se & 124) !== 0 || bs(a, l, e);
    }
    return e;
  }
  function bs(t, l, e) {
    t.flags |= 16384, t = { getSnapshot: l, value: e }, l = lt.updateQueue, l === null ? (l = mc(), lt.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
  }
  function Ss(t, l, e, a) {
    l.value = e, l.getSnapshot = a, Ts(l) && Es(t);
  }
  function ps(t, l, e) {
    return e(function() {
      Ts(l) && Es(t);
    });
  }
  function Ts(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !rl(t, e);
    } catch {
      return !0;
    }
  }
  function Es(t) {
    var l = ca(t, 2);
    l !== null && vl(l, t, 2);
  }
  function pc(t) {
    var l = el();
    if (typeof t == "function") {
      var e = t;
      if (t = e(), Ze) {
        ae(!0);
        try {
          e();
        } finally {
          ae(!1);
        }
      }
    }
    return l.memoizedState = l.baseState = t, l.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Jl,
      lastRenderedState: t
    }, l;
  }
  function As(t, l, e, a) {
    return t.baseState = e, bc(
      t,
      gt,
      typeof a == "function" ? a : Jl
    );
  }
  function Lh(t, l, e, a, u) {
    if (Tn(t)) throw Error(r(485));
    if (t = l.action, t !== null) {
      var n = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          n.listeners.push(i);
        }
      };
      O.T !== null ? e(!0) : n.isTransition = !1, a(n), e = l.pending, e === null ? (n.next = l.pending = n, Os(l, n)) : (n.next = e.next, l.pending = e.next = n);
    }
  }
  function Os(t, l) {
    var e = l.action, a = l.payload, u = t.state;
    if (l.isTransition) {
      var n = O.T, i = {};
      O.T = i;
      try {
        var f = e(u, a), o = O.S;
        o !== null && o(i, f), _s(t, l, f);
      } catch (g) {
        Tc(t, l, g);
      } finally {
        O.T = n;
      }
    } else
      try {
        n = e(u, a), _s(t, l, n);
      } catch (g) {
        Tc(t, l, g);
      }
  }
  function _s(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(a) {
        zs(t, l, a);
      },
      function(a) {
        return Tc(t, l, a);
      }
    ) : zs(t, l, e);
  }
  function zs(t, l, e) {
    l.status = "fulfilled", l.value = e, Ms(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, Os(t, e)));
  }
  function Tc(t, l, e) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        l.status = "rejected", l.reason = e, Ms(l), l = l.next;
      while (l !== a);
    }
    t.action = null;
  }
  function Ms(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function Rs(t, l) {
    return l;
  }
  function Ds(t, l) {
    if (rt) {
      var e = Et.formState;
      if (e !== null) {
        t: {
          var a = lt;
          if (rt) {
            if (zt) {
              l: {
                for (var u = zt, n = Nl; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break l;
                  }
                  if (u = xl(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break l;
                  }
                }
                n = u.data, u = n === "F!" || n === "F" ? u : null;
              }
              if (u) {
                zt = xl(
                  u.nextSibling
                ), a = u.data === "F!";
                break t;
              }
            }
            Ge(a);
          }
          a = !1;
        }
        a && (l = e[0]);
      }
    }
    return e = el(), e.memoizedState = e.baseState = l, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Rs,
      lastRenderedState: l
    }, e.queue = a, e = ks.bind(
      null,
      lt,
      a
    ), a.dispatch = e, a = pc(!1), n = zc.bind(
      null,
      lt,
      !1,
      a.queue
    ), a = el(), u = {
      state: l,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = u, e = Lh.bind(
      null,
      lt,
      u,
      n,
      e
    ), u.dispatch = e, a.memoizedState = t, [l, e, !1];
  }
  function xs(t) {
    var l = Ut();
    return Us(l, gt, t);
  }
  function Us(t, l, e) {
    if (l = bc(
      t,
      l,
      Rs
    )[0], t = bn(Jl)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var a = cu(l);
      } catch (i) {
        throw i === lu ? dn : i;
      }
    else a = l;
    l = Ut();
    var u = l.queue, n = u.dispatch;
    return e !== l.memoizedState && (lt.flags |= 2048, ma(
      9,
      Sn(),
      wh.bind(null, u, e),
      null
    )), [a, n, t];
  }
  function wh(t, l) {
    t.action = l;
  }
  function Ns(t) {
    var l = Ut(), e = gt;
    if (e !== null)
      return Us(l, e, t);
    Ut(), l = l.memoizedState, e = Ut();
    var a = e.queue.dispatch;
    return e.memoizedState = t, [l, a, !1];
  }
  function ma(t, l, e, a) {
    return t = { tag: t, create: e, deps: a, inst: l, next: null }, l = lt.updateQueue, l === null && (l = mc(), lt.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (a = e.next, e.next = t, t.next = a, l.lastEffect = t), t;
  }
  function Sn() {
    return { destroy: void 0, resource: void 0 };
  }
  function Hs() {
    return Ut().memoizedState;
  }
  function pn(t, l, e, a) {
    var u = el();
    a = a === void 0 ? null : a, lt.flags |= t, u.memoizedState = ma(
      1 | l,
      Sn(),
      e,
      a
    );
  }
  function fu(t, l, e, a) {
    var u = Ut();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    gt !== null && a !== null && oc(a, gt.memoizedState.deps) ? u.memoizedState = ma(l, n, e, a) : (lt.flags |= t, u.memoizedState = ma(
      1 | l,
      n,
      e,
      a
    ));
  }
  function qs(t, l) {
    pn(8390656, 8, t, l);
  }
  function Cs(t, l) {
    fu(2048, 8, t, l);
  }
  function Ys(t, l) {
    return fu(4, 2, t, l);
  }
  function Bs(t, l) {
    return fu(4, 4, t, l);
  }
  function Gs(t, l) {
    if (typeof l == "function") {
      t = t();
      var e = l(t);
      return function() {
        typeof e == "function" ? e() : l(null);
      };
    }
    if (l != null)
      return t = t(), l.current = t, function() {
        l.current = null;
      };
  }
  function Xs(t, l, e) {
    e = e != null ? e.concat([t]) : null, fu(4, 4, Gs.bind(null, l, t), e);
  }
  function Ec() {
  }
  function js(t, l) {
    var e = Ut();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    return l !== null && oc(l, a[1]) ? a[0] : (e.memoizedState = [t, l], t);
  }
  function Qs(t, l) {
    var e = Ut();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    if (l !== null && oc(l, a[1]))
      return a[0];
    if (a = t(), Ze) {
      ae(!0);
      try {
        t();
      } finally {
        ae(!1);
      }
    }
    return e.memoizedState = [a, l], a;
  }
  function Ac(t, l, e) {
    return e === void 0 || (se & 1073741824) !== 0 ? t.memoizedState = l : (t.memoizedState = e, t = wo(), lt.lanes |= t, ge |= t, e);
  }
  function Zs(t, l, e, a) {
    return rl(e, l) ? e : ha.current !== null ? (t = Ac(t, e, a), rl(t, l) || (Bt = !0), t) : (se & 42) === 0 ? (Bt = !0, t.memoizedState = e) : (t = wo(), lt.lanes |= t, ge |= t, l);
  }
  function Vs(t, l, e, a, u) {
    var n = q.p;
    q.p = n !== 0 && 8 > n ? n : 8;
    var i = O.T, f = {};
    O.T = f, zc(t, !1, l, e);
    try {
      var o = u(), g = O.S;
      if (g !== null && g(f, o), o !== null && typeof o == "object" && typeof o.then == "function") {
        var A = Qh(
          o,
          a
        );
        ru(
          t,
          l,
          A,
          yl(t)
        );
      } else
        ru(
          t,
          l,
          a,
          yl(t)
        );
    } catch (z) {
      ru(
        t,
        l,
        { then: function() {
        }, status: "rejected", reason: z },
        yl()
      );
    } finally {
      q.p = n, O.T = i;
    }
  }
  function Kh() {
  }
  function Oc(t, l, e, a) {
    if (t.tag !== 5) throw Error(r(476));
    var u = Ls(t).queue;
    Vs(
      t,
      u,
      l,
      K,
      e === null ? Kh : function() {
        return ws(t), e(a);
      }
    );
  }
  function Ls(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: K,
      baseState: K,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Jl,
        lastRenderedState: K
      },
      next: null
    };
    var e = {};
    return l.next = {
      memoizedState: e,
      baseState: e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Jl,
        lastRenderedState: e
      },
      next: null
    }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
  }
  function ws(t) {
    var l = Ls(t).next.queue;
    ru(t, l, {}, yl());
  }
  function _c() {
    return kt(Mu);
  }
  function Ks() {
    return Ut().memoizedState;
  }
  function Js() {
    return Ut().memoizedState;
  }
  function Jh(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = yl();
          t = fe(e);
          var a = re(l, t, e);
          a !== null && (vl(a, l, e), au(a, l, e)), l = { cache: lc() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function kh(t, l, e) {
    var a = yl();
    e = {
      lane: a,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Tn(t) ? $s(l, e) : (e = wi(t, l, e, a), e !== null && (vl(e, t, a), Ws(e, l, a)));
  }
  function ks(t, l, e) {
    var a = yl();
    ru(t, l, e, a);
  }
  function ru(t, l, e, a) {
    var u = {
      lane: a,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Tn(t)) $s(l, u);
    else {
      var n = t.alternate;
      if (t.lanes === 0 && (n === null || n.lanes === 0) && (n = l.lastRenderedReducer, n !== null))
        try {
          var i = l.lastRenderedState, f = n(i, e);
          if (u.hasEagerState = !0, u.eagerState = f, rl(f, i))
            return an(t, l, u, 0), Et === null && en(), !1;
        } catch {
        } finally {
        }
      if (e = wi(t, l, u, a), e !== null)
        return vl(e, t, a), Ws(e, l, a), !0;
    }
    return !1;
  }
  function zc(t, l, e, a) {
    if (a = {
      lane: 2,
      revertLane: uf(),
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Tn(t)) {
      if (l) throw Error(r(479));
    } else
      l = wi(
        t,
        e,
        a,
        2
      ), l !== null && vl(l, t, 2);
  }
  function Tn(t) {
    var l = t.alternate;
    return t === lt || l !== null && l === lt;
  }
  function $s(t, l) {
    ya = vn = !0;
    var e = t.pending;
    e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
  }
  function Ws(t, l, e) {
    if ((e & 4194048) !== 0) {
      var a = l.lanes;
      a &= t.pendingLanes, e |= a, l.lanes = e, ur(t, e);
    }
  }
  var En = {
    readContext: kt,
    use: gn,
    useCallback: Rt,
    useContext: Rt,
    useEffect: Rt,
    useImperativeHandle: Rt,
    useLayoutEffect: Rt,
    useInsertionEffect: Rt,
    useMemo: Rt,
    useReducer: Rt,
    useRef: Rt,
    useState: Rt,
    useDebugValue: Rt,
    useDeferredValue: Rt,
    useTransition: Rt,
    useSyncExternalStore: Rt,
    useId: Rt,
    useHostTransitionStatus: Rt,
    useFormState: Rt,
    useActionState: Rt,
    useOptimistic: Rt,
    useMemoCache: Rt,
    useCacheRefresh: Rt
  }, Fs = {
    readContext: kt,
    use: gn,
    useCallback: function(t, l) {
      return el().memoizedState = [
        t,
        l === void 0 ? null : l
      ], t;
    },
    useContext: kt,
    useEffect: qs,
    useImperativeHandle: function(t, l, e) {
      e = e != null ? e.concat([t]) : null, pn(
        4194308,
        4,
        Gs.bind(null, l, t),
        e
      );
    },
    useLayoutEffect: function(t, l) {
      return pn(4194308, 4, t, l);
    },
    useInsertionEffect: function(t, l) {
      pn(4, 2, t, l);
    },
    useMemo: function(t, l) {
      var e = el();
      l = l === void 0 ? null : l;
      var a = t();
      if (Ze) {
        ae(!0);
        try {
          t();
        } finally {
          ae(!1);
        }
      }
      return e.memoizedState = [a, l], a;
    },
    useReducer: function(t, l, e) {
      var a = el();
      if (e !== void 0) {
        var u = e(l);
        if (Ze) {
          ae(!0);
          try {
            e(l);
          } finally {
            ae(!1);
          }
        }
      } else u = l;
      return a.memoizedState = a.baseState = u, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: u
      }, a.queue = t, t = t.dispatch = kh.bind(
        null,
        lt,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var l = el();
      return t = { current: t }, l.memoizedState = t;
    },
    useState: function(t) {
      t = pc(t);
      var l = t.queue, e = ks.bind(null, lt, l);
      return l.dispatch = e, [t.memoizedState, e];
    },
    useDebugValue: Ec,
    useDeferredValue: function(t, l) {
      var e = el();
      return Ac(e, t, l);
    },
    useTransition: function() {
      var t = pc(!1);
      return t = Vs.bind(
        null,
        lt,
        t.queue,
        !0,
        !1
      ), el().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, l, e) {
      var a = lt, u = el();
      if (rt) {
        if (e === void 0)
          throw Error(r(407));
        e = e();
      } else {
        if (e = l(), Et === null)
          throw Error(r(349));
        (it & 124) !== 0 || bs(a, l, e);
      }
      u.memoizedState = e;
      var n = { value: e, getSnapshot: l };
      return u.queue = n, qs(ps.bind(null, a, n, t), [
        t
      ]), a.flags |= 2048, ma(
        9,
        Sn(),
        Ss.bind(
          null,
          a,
          n,
          e,
          l
        ),
        null
      ), e;
    },
    useId: function() {
      var t = el(), l = Et.identifierPrefix;
      if (rt) {
        var e = Ll, a = Vl;
        e = (a & ~(1 << 32 - fl(a) - 1)).toString(32) + e, l = "«" + l + "R" + e, e = mn++, 0 < e && (l += "H" + e.toString(32)), l += "»";
      } else
        e = Zh++, l = "«" + l + "r" + e.toString(32) + "»";
      return t.memoizedState = l;
    },
    useHostTransitionStatus: _c,
    useFormState: Ds,
    useActionState: Ds,
    useOptimistic: function(t) {
      var l = el();
      l.memoizedState = l.baseState = t;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return l.queue = e, l = zc.bind(
        null,
        lt,
        !0,
        e
      ), e.dispatch = l, [t, l];
    },
    useMemoCache: gc,
    useCacheRefresh: function() {
      return el().memoizedState = Jh.bind(
        null,
        lt
      );
    }
  }, Ps = {
    readContext: kt,
    use: gn,
    useCallback: js,
    useContext: kt,
    useEffect: Cs,
    useImperativeHandle: Xs,
    useInsertionEffect: Ys,
    useLayoutEffect: Bs,
    useMemo: Qs,
    useReducer: bn,
    useRef: Hs,
    useState: function() {
      return bn(Jl);
    },
    useDebugValue: Ec,
    useDeferredValue: function(t, l) {
      var e = Ut();
      return Zs(
        e,
        gt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = bn(Jl)[0], l = Ut().memoizedState;
      return [
        typeof t == "boolean" ? t : cu(t),
        l
      ];
    },
    useSyncExternalStore: gs,
    useId: Ks,
    useHostTransitionStatus: _c,
    useFormState: xs,
    useActionState: xs,
    useOptimistic: function(t, l) {
      var e = Ut();
      return As(e, gt, t, l);
    },
    useMemoCache: gc,
    useCacheRefresh: Js
  }, $h = {
    readContext: kt,
    use: gn,
    useCallback: js,
    useContext: kt,
    useEffect: Cs,
    useImperativeHandle: Xs,
    useInsertionEffect: Ys,
    useLayoutEffect: Bs,
    useMemo: Qs,
    useReducer: Sc,
    useRef: Hs,
    useState: function() {
      return Sc(Jl);
    },
    useDebugValue: Ec,
    useDeferredValue: function(t, l) {
      var e = Ut();
      return gt === null ? Ac(e, t, l) : Zs(
        e,
        gt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = Sc(Jl)[0], l = Ut().memoizedState;
      return [
        typeof t == "boolean" ? t : cu(t),
        l
      ];
    },
    useSyncExternalStore: gs,
    useId: Ks,
    useHostTransitionStatus: _c,
    useFormState: Ns,
    useActionState: Ns,
    useOptimistic: function(t, l) {
      var e = Ut();
      return gt !== null ? As(e, gt, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
    },
    useMemoCache: gc,
    useCacheRefresh: Js
  }, ga = null, su = 0;
  function An(t) {
    var l = su;
    return su += 1, ga === null && (ga = []), rs(ga, t, l);
  }
  function ou(t, l) {
    l = l.props.ref, t.ref = l !== void 0 ? l : null;
  }
  function On(t, l) {
    throw l.$$typeof === C ? Error(r(525)) : (t = Object.prototype.toString.call(l), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t
      )
    ));
  }
  function Is(t) {
    var l = t._init;
    return l(t._payload);
  }
  function to(t) {
    function l(v, h) {
      if (t) {
        var m = v.deletions;
        m === null ? (v.deletions = [h], v.flags |= 16) : m.push(h);
      }
    }
    function e(v, h) {
      if (!t) return null;
      for (; h !== null; )
        l(v, h), h = h.sibling;
      return null;
    }
    function a(v) {
      for (var h = /* @__PURE__ */ new Map(); v !== null; )
        v.key !== null ? h.set(v.key, v) : h.set(v.index, v), v = v.sibling;
      return h;
    }
    function u(v, h) {
      return v = Zl(v, h), v.index = 0, v.sibling = null, v;
    }
    function n(v, h, m) {
      return v.index = m, t ? (m = v.alternate, m !== null ? (m = m.index, m < h ? (v.flags |= 67108866, h) : m) : (v.flags |= 67108866, h)) : (v.flags |= 1048576, h);
    }
    function i(v) {
      return t && v.alternate === null && (v.flags |= 67108866), v;
    }
    function f(v, h, m, _) {
      return h === null || h.tag !== 6 ? (h = Ji(m, v.mode, _), h.return = v, h) : (h = u(h, m), h.return = v, h);
    }
    function o(v, h, m, _) {
      var G = m.type;
      return G === Q ? A(
        v,
        h,
        m.props.children,
        _,
        m.key
      ) : h !== null && (h.elementType === G || typeof G == "object" && G !== null && G.$$typeof === jt && Is(G) === h.type) ? (h = u(h, m.props), ou(h, m), h.return = v, h) : (h = nn(
        m.type,
        m.key,
        m.props,
        null,
        v.mode,
        _
      ), ou(h, m), h.return = v, h);
    }
    function g(v, h, m, _) {
      return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = ki(m, v.mode, _), h.return = v, h) : (h = u(h, m.children || []), h.return = v, h);
    }
    function A(v, h, m, _, G) {
      return h === null || h.tag !== 7 ? (h = qe(
        m,
        v.mode,
        _,
        G
      ), h.return = v, h) : (h = u(h, m), h.return = v, h);
    }
    function z(v, h, m) {
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
        return h = Ji(
          "" + h,
          v.mode,
          m
        ), h.return = v, h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case B:
            return m = nn(
              h.type,
              h.key,
              h.props,
              null,
              v.mode,
              m
            ), ou(m, h), m.return = v, m;
          case tt:
            return h = ki(
              h,
              v.mode,
              m
            ), h.return = v, h;
          case jt:
            var _ = h._init;
            return h = _(h._payload), z(v, h, m);
        }
        if (Kt(h) || wt(h))
          return h = qe(
            h,
            v.mode,
            m,
            null
          ), h.return = v, h;
        if (typeof h.then == "function")
          return z(v, An(h), m);
        if (h.$$typeof === J)
          return z(
            v,
            sn(v, h),
            m
          );
        On(v, h);
      }
      return null;
    }
    function S(v, h, m, _) {
      var G = h !== null ? h.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return G !== null ? null : f(v, h, "" + m, _);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case B:
            return m.key === G ? o(v, h, m, _) : null;
          case tt:
            return m.key === G ? g(v, h, m, _) : null;
          case jt:
            return G = m._init, m = G(m._payload), S(v, h, m, _);
        }
        if (Kt(m) || wt(m))
          return G !== null ? null : A(v, h, m, _, null);
        if (typeof m.then == "function")
          return S(
            v,
            h,
            An(m),
            _
          );
        if (m.$$typeof === J)
          return S(
            v,
            h,
            sn(v, m),
            _
          );
        On(v, m);
      }
      return null;
    }
    function T(v, h, m, _, G) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return v = v.get(m) || null, f(h, v, "" + _, G);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case B:
            return v = v.get(
              _.key === null ? m : _.key
            ) || null, o(h, v, _, G);
          case tt:
            return v = v.get(
              _.key === null ? m : _.key
            ) || null, g(h, v, _, G);
          case jt:
            var at = _._init;
            return _ = at(_._payload), T(
              v,
              h,
              m,
              _,
              G
            );
        }
        if (Kt(_) || wt(_))
          return v = v.get(m) || null, A(h, v, _, G, null);
        if (typeof _.then == "function")
          return T(
            v,
            h,
            m,
            An(_),
            G
          );
        if (_.$$typeof === J)
          return T(
            v,
            h,
            m,
            sn(h, _),
            G
          );
        On(h, _);
      }
      return null;
    }
    function k(v, h, m, _) {
      for (var G = null, at = null, j = h, w = h = 0, Xt = null; j !== null && w < m.length; w++) {
        j.index > w ? (Xt = j, j = null) : Xt = j.sibling;
        var ft = S(
          v,
          j,
          m[w],
          _
        );
        if (ft === null) {
          j === null && (j = Xt);
          break;
        }
        t && j && ft.alternate === null && l(v, j), h = n(ft, h, w), at === null ? G = ft : at.sibling = ft, at = ft, j = Xt;
      }
      if (w === m.length)
        return e(v, j), rt && Ye(v, w), G;
      if (j === null) {
        for (; w < m.length; w++)
          j = z(v, m[w], _), j !== null && (h = n(
            j,
            h,
            w
          ), at === null ? G = j : at.sibling = j, at = j);
        return rt && Ye(v, w), G;
      }
      for (j = a(j); w < m.length; w++)
        Xt = T(
          j,
          v,
          w,
          m[w],
          _
        ), Xt !== null && (t && Xt.alternate !== null && j.delete(
          Xt.key === null ? w : Xt.key
        ), h = n(
          Xt,
          h,
          w
        ), at === null ? G = Xt : at.sibling = Xt, at = Xt);
      return t && j.forEach(function(ze) {
        return l(v, ze);
      }), rt && Ye(v, w), G;
    }
    function L(v, h, m, _) {
      if (m == null) throw Error(r(151));
      for (var G = null, at = null, j = h, w = h = 0, Xt = null, ft = m.next(); j !== null && !ft.done; w++, ft = m.next()) {
        j.index > w ? (Xt = j, j = null) : Xt = j.sibling;
        var ze = S(v, j, ft.value, _);
        if (ze === null) {
          j === null && (j = Xt);
          break;
        }
        t && j && ze.alternate === null && l(v, j), h = n(ze, h, w), at === null ? G = ze : at.sibling = ze, at = ze, j = Xt;
      }
      if (ft.done)
        return e(v, j), rt && Ye(v, w), G;
      if (j === null) {
        for (; !ft.done; w++, ft = m.next())
          ft = z(v, ft.value, _), ft !== null && (h = n(ft, h, w), at === null ? G = ft : at.sibling = ft, at = ft);
        return rt && Ye(v, w), G;
      }
      for (j = a(j); !ft.done; w++, ft = m.next())
        ft = T(j, v, w, ft.value, _), ft !== null && (t && ft.alternate !== null && j.delete(ft.key === null ? w : ft.key), h = n(ft, h, w), at === null ? G = ft : at.sibling = ft, at = ft);
      return t && j.forEach(function(W1) {
        return l(v, W1);
      }), rt && Ye(v, w), G;
    }
    function St(v, h, m, _) {
      if (typeof m == "object" && m !== null && m.type === Q && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case B:
            t: {
              for (var G = m.key; h !== null; ) {
                if (h.key === G) {
                  if (G = m.type, G === Q) {
                    if (h.tag === 7) {
                      e(
                        v,
                        h.sibling
                      ), _ = u(
                        h,
                        m.props.children
                      ), _.return = v, v = _;
                      break t;
                    }
                  } else if (h.elementType === G || typeof G == "object" && G !== null && G.$$typeof === jt && Is(G) === h.type) {
                    e(
                      v,
                      h.sibling
                    ), _ = u(h, m.props), ou(_, m), _.return = v, v = _;
                    break t;
                  }
                  e(v, h);
                  break;
                } else l(v, h);
                h = h.sibling;
              }
              m.type === Q ? (_ = qe(
                m.props.children,
                v.mode,
                _,
                m.key
              ), _.return = v, v = _) : (_ = nn(
                m.type,
                m.key,
                m.props,
                null,
                v.mode,
                _
              ), ou(_, m), _.return = v, v = _);
            }
            return i(v);
          case tt:
            t: {
              for (G = m.key; h !== null; ) {
                if (h.key === G)
                  if (h.tag === 4 && h.stateNode.containerInfo === m.containerInfo && h.stateNode.implementation === m.implementation) {
                    e(
                      v,
                      h.sibling
                    ), _ = u(h, m.children || []), _.return = v, v = _;
                    break t;
                  } else {
                    e(v, h);
                    break;
                  }
                else l(v, h);
                h = h.sibling;
              }
              _ = ki(m, v.mode, _), _.return = v, v = _;
            }
            return i(v);
          case jt:
            return G = m._init, m = G(m._payload), St(
              v,
              h,
              m,
              _
            );
        }
        if (Kt(m))
          return k(
            v,
            h,
            m,
            _
          );
        if (wt(m)) {
          if (G = wt(m), typeof G != "function") throw Error(r(150));
          return m = G.call(m), L(
            v,
            h,
            m,
            _
          );
        }
        if (typeof m.then == "function")
          return St(
            v,
            h,
            An(m),
            _
          );
        if (m.$$typeof === J)
          return St(
            v,
            h,
            sn(v, m),
            _
          );
        On(v, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint" ? (m = "" + m, h !== null && h.tag === 6 ? (e(v, h.sibling), _ = u(h, m), _.return = v, v = _) : (e(v, h), _ = Ji(m, v.mode, _), _.return = v, v = _), i(v)) : e(v, h);
    }
    return function(v, h, m, _) {
      try {
        su = 0;
        var G = St(
          v,
          h,
          m,
          _
        );
        return ga = null, G;
      } catch (j) {
        if (j === lu || j === dn) throw j;
        var at = sl(29, j, null, v.mode);
        return at.lanes = _, at.return = v, at;
      } finally {
      }
    };
  }
  var ba = to(!0), lo = to(!1), Ol = D(null), Hl = null;
  function oe(t) {
    var l = t.alternate;
    N(Ct, Ct.current & 1), N(Ol, t), Hl === null && (l === null || ha.current !== null || l.memoizedState !== null) && (Hl = t);
  }
  function eo(t) {
    if (t.tag === 22) {
      if (N(Ct, Ct.current), N(Ol, t), Hl === null) {
        var l = t.alternate;
        l !== null && l.memoizedState !== null && (Hl = t);
      }
    } else de();
  }
  function de() {
    N(Ct, Ct.current), N(Ol, Ol.current);
  }
  function kl(t) {
    Y(Ol), Hl === t && (Hl = null), Y(Ct);
  }
  var Ct = D(0);
  function _n(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || e.data === "$?" || gf(e)))
          return l;
      } else if (l.tag === 19 && l.memoizedProps.revealOrder !== void 0) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === t) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return null;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    return null;
  }
  function Mc(t, l, e, a) {
    l = t.memoizedState, e = e(a, l), e = e == null ? l : U({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var Rc = {
    enqueueSetState: function(t, l, e) {
      t = t._reactInternals;
      var a = yl(), u = fe(a);
      u.payload = l, e != null && (u.callback = e), l = re(t, u, a), l !== null && (vl(l, t, a), au(l, t, a));
    },
    enqueueReplaceState: function(t, l, e) {
      t = t._reactInternals;
      var a = yl(), u = fe(a);
      u.tag = 1, u.payload = l, e != null && (u.callback = e), l = re(t, u, a), l !== null && (vl(l, t, a), au(l, t, a));
    },
    enqueueForceUpdate: function(t, l) {
      t = t._reactInternals;
      var e = yl(), a = fe(e);
      a.tag = 2, l != null && (a.callback = l), l = re(t, a, e), l !== null && (vl(l, t, e), au(l, t, e));
    }
  };
  function ao(t, l, e, a, u, n, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, n, i) : l.prototype && l.prototype.isPureReactComponent ? !Ja(e, a) || !Ja(u, n) : !0;
  }
  function uo(t, l, e, a) {
    t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, a), l.state !== t && Rc.enqueueReplaceState(l, l.state, null);
  }
  function Ve(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var a in l)
        a !== "ref" && (e[a] = l[a]);
    }
    if (t = t.defaultProps) {
      e === l && (e = U({}, e));
      for (var u in t)
        e[u] === void 0 && (e[u] = t[u]);
    }
    return e;
  }
  var zn = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var l = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(l)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function no(t) {
    zn(t);
  }
  function io(t) {
    console.error(t);
  }
  function co(t) {
    zn(t);
  }
  function Mn(t, l) {
    try {
      var e = t.onUncaughtError;
      e(l.value, { componentStack: l.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function fo(t, l, e) {
    try {
      var a = t.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function Dc(t, l, e) {
    return e = fe(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      Mn(t, l);
    }, e;
  }
  function ro(t) {
    return t = fe(t), t.tag = 3, t;
  }
  function so(t, l, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      t.payload = function() {
        return u(n);
      }, t.callback = function() {
        fo(l, e, a);
      };
    }
    var i = e.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      fo(l, e, a), typeof u != "function" && (be === null ? be = /* @__PURE__ */ new Set([this]) : be.add(this));
      var f = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function Wh(t, l, e, a, u) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (l = e.alternate, l !== null && Pa(
        l,
        e,
        u,
        !0
      ), e = Ol.current, e !== null) {
        switch (e.tag) {
          case 13:
            return Hl === null ? Ic() : e.alternate === null && Mt === 0 && (Mt = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === uc ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : l.add(a), lf(t, a, u)), !1;
          case 22:
            return e.flags |= 65536, a === uc ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), lf(t, a, u)), !1;
        }
        throw Error(r(435, e.tag));
      }
      return lf(t, a, u), Ic(), !1;
    }
    if (rt)
      return l = Ol.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = u, a !== Fi && (t = Error(r(422), { cause: a }), Fa(pl(t, e)))) : (a !== Fi && (l = Error(r(423), {
        cause: a
      }), Fa(
        pl(l, e)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, a = pl(a, e), u = Dc(
        t.stateNode,
        a,
        u
      ), cc(t, u), Mt !== 4 && (Mt = 2)), !1;
    var n = Error(r(520), { cause: a });
    if (n = pl(n, e), bu === null ? bu = [n] : bu.push(n), Mt !== 4 && (Mt = 2), l === null) return !0;
    a = pl(a, e), e = l;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, t = u & -u, e.lanes |= t, t = Dc(e.stateNode, a, t), cc(e, t), !1;
        case 1:
          if (l = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (be === null || !be.has(n))))
            return e.flags |= 65536, u &= -u, e.lanes |= u, u = ro(u), so(
              u,
              t,
              e,
              a
            ), cc(e, u), !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var oo = Error(r(461)), Bt = !1;
  function Qt(t, l, e, a) {
    l.child = t === null ? lo(l, null, e, a) : ba(
      l,
      t.child,
      e,
      a
    );
  }
  function ho(t, l, e, a, u) {
    e = e.render;
    var n = l.ref;
    if ("ref" in a) {
      var i = {};
      for (var f in a)
        f !== "ref" && (i[f] = a[f]);
    } else i = a;
    return je(l), a = dc(
      t,
      l,
      e,
      i,
      n,
      u
    ), f = hc(), t !== null && !Bt ? (yc(t, l, u), $l(t, l, u)) : (rt && f && $i(l), l.flags |= 1, Qt(t, l, a, u), l.child);
  }
  function yo(t, l, e, a, u) {
    if (t === null) {
      var n = e.type;
      return typeof n == "function" && !Ki(n) && n.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = n, vo(
        t,
        l,
        n,
        a,
        u
      )) : (t = nn(
        e.type,
        null,
        a,
        l,
        l.mode,
        u
      ), t.ref = l.ref, t.return = l, l.child = t);
    }
    if (n = t.child, !Bc(t, u)) {
      var i = n.memoizedProps;
      if (e = e.compare, e = e !== null ? e : Ja, e(i, a) && t.ref === l.ref)
        return $l(t, l, u);
    }
    return l.flags |= 1, t = Zl(n, a), t.ref = l.ref, t.return = l, l.child = t;
  }
  function vo(t, l, e, a, u) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (Ja(n, a) && t.ref === l.ref)
        if (Bt = !1, l.pendingProps = a = n, Bc(t, u))
          (t.flags & 131072) !== 0 && (Bt = !0);
        else
          return l.lanes = t.lanes, $l(t, l, u);
    }
    return xc(
      t,
      l,
      e,
      a,
      u
    );
  }
  function mo(t, l, e) {
    var a = l.pendingProps, u = a.children, n = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (a = n !== null ? n.baseLanes | e : e, t !== null) {
          for (u = l.child = t.child, n = 0; u !== null; )
            n = n | u.lanes | u.childLanes, u = u.sibling;
          l.childLanes = n & ~a;
        } else l.childLanes = 0, l.child = null;
        return go(
          t,
          l,
          a,
          e
        );
      }
      if ((e & 536870912) !== 0)
        l.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && on(
          l,
          n !== null ? n.cachePool : null
        ), n !== null ? ys(l, n) : rc(), eo(l);
      else
        return l.lanes = l.childLanes = 536870912, go(
          t,
          l,
          n !== null ? n.baseLanes | e : e,
          e
        );
    } else
      n !== null ? (on(l, n.cachePool), ys(l, n), de(), l.memoizedState = null) : (t !== null && on(l, null), rc(), de());
    return Qt(t, l, u, e), l.child;
  }
  function go(t, l, e, a) {
    var u = ac();
    return u = u === null ? null : { parent: qt._currentValue, pool: u }, l.memoizedState = {
      baseLanes: e,
      cachePool: u
    }, t !== null && on(l, null), rc(), eo(l), t !== null && Pa(t, l, a, !0), null;
  }
  function Rn(t, l) {
    var e = l.ref;
    if (e === null)
      t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object")
        throw Error(r(284));
      (t === null || t.ref !== e) && (l.flags |= 4194816);
    }
  }
  function xc(t, l, e, a, u) {
    return je(l), e = dc(
      t,
      l,
      e,
      a,
      void 0,
      u
    ), a = hc(), t !== null && !Bt ? (yc(t, l, u), $l(t, l, u)) : (rt && a && $i(l), l.flags |= 1, Qt(t, l, e, u), l.child);
  }
  function bo(t, l, e, a, u, n) {
    return je(l), l.updateQueue = null, e = ms(
      l,
      a,
      e,
      u
    ), vs(t), a = hc(), t !== null && !Bt ? (yc(t, l, n), $l(t, l, n)) : (rt && a && $i(l), l.flags |= 1, Qt(t, l, e, n), l.child);
  }
  function So(t, l, e, a, u) {
    if (je(l), l.stateNode === null) {
      var n = fa, i = e.contextType;
      typeof i == "object" && i !== null && (n = kt(i)), n = new e(a, n), l.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Rc, l.stateNode = n, n._reactInternals = l, n = l.stateNode, n.props = a, n.state = l.memoizedState, n.refs = {}, nc(l), i = e.contextType, n.context = typeof i == "object" && i !== null ? kt(i) : fa, n.state = l.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (Mc(
        l,
        e,
        i,
        a
      ), n.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && Rc.enqueueReplaceState(n, n.state, null), nu(l, a, n, u), uu(), n.state = l.memoizedState), typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = !0;
    } else if (t === null) {
      n = l.stateNode;
      var f = l.memoizedProps, o = Ve(e, f);
      n.props = o;
      var g = n.context, A = e.contextType;
      i = fa, typeof A == "object" && A !== null && (i = kt(A));
      var z = e.getDerivedStateFromProps;
      A = typeof z == "function" || typeof n.getSnapshotBeforeUpdate == "function", f = l.pendingProps !== f, A || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f || g !== i) && uo(
        l,
        n,
        a,
        i
      ), ce = !1;
      var S = l.memoizedState;
      n.state = S, nu(l, a, n, u), uu(), g = l.memoizedState, f || S !== g || ce ? (typeof z == "function" && (Mc(
        l,
        e,
        z,
        a
      ), g = l.memoizedState), (o = ce || ao(
        l,
        e,
        o,
        a,
        S,
        g,
        i
      )) ? (A || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = g), n.props = a, n.state = g, n.context = i, a = o) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = !1);
    } else {
      n = l.stateNode, ic(t, l), i = l.memoizedProps, A = Ve(e, i), n.props = A, z = l.pendingProps, S = n.context, g = e.contextType, o = fa, typeof g == "object" && g !== null && (o = kt(g)), f = e.getDerivedStateFromProps, (g = typeof f == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== z || S !== o) && uo(
        l,
        n,
        a,
        o
      ), ce = !1, S = l.memoizedState, n.state = S, nu(l, a, n, u), uu();
      var T = l.memoizedState;
      i !== z || S !== T || ce || t !== null && t.dependencies !== null && rn(t.dependencies) ? (typeof f == "function" && (Mc(
        l,
        e,
        f,
        a
      ), T = l.memoizedState), (A = ce || ao(
        l,
        e,
        A,
        a,
        S,
        T,
        o
      ) || t !== null && t.dependencies !== null && rn(t.dependencies)) ? (g || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, T, o), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        T,
        o
      )), typeof n.componentDidUpdate == "function" && (l.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === t.memoizedProps && S === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && S === t.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = T), n.props = a, n.state = T, n.context = o, a = A) : (typeof n.componentDidUpdate != "function" || i === t.memoizedProps && S === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && S === t.memoizedState || (l.flags |= 1024), a = !1);
    }
    return n = a, Rn(t, l), a = (l.flags & 128) !== 0, n || a ? (n = l.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), l.flags |= 1, t !== null && a ? (l.child = ba(
      l,
      t.child,
      null,
      u
    ), l.child = ba(
      l,
      null,
      e,
      u
    )) : Qt(t, l, e, u), l.memoizedState = n.state, t = l.child) : t = $l(
      t,
      l,
      u
    ), t;
  }
  function po(t, l, e, a) {
    return Wa(), l.flags |= 256, Qt(t, l, e, a), l.child;
  }
  var Uc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Nc(t) {
    return { baseLanes: t, cachePool: is() };
  }
  function Hc(t, l, e) {
    return t = t !== null ? t.childLanes & ~e : 0, l && (t |= _l), t;
  }
  function To(t, l, e) {
    var a = l.pendingProps, u = !1, n = (l.flags & 128) !== 0, i;
    if ((i = n) || (i = t !== null && t.memoizedState === null ? !1 : (Ct.current & 2) !== 0), i && (u = !0, l.flags &= -129), i = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if (rt) {
        if (u ? oe(l) : de(), rt) {
          var f = zt, o;
          if (o = f) {
            t: {
              for (o = f, f = Nl; o.nodeType !== 8; ) {
                if (!f) {
                  f = null;
                  break t;
                }
                if (o = xl(
                  o.nextSibling
                ), o === null) {
                  f = null;
                  break t;
                }
              }
              f = o;
            }
            f !== null ? (l.memoizedState = {
              dehydrated: f,
              treeContext: Ce !== null ? { id: Vl, overflow: Ll } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, o = sl(
              18,
              null,
              null,
              0
            ), o.stateNode = f, o.return = l, l.child = o, Pt = l, zt = null, o = !0) : o = !1;
          }
          o || Ge(l);
        }
        if (f = l.memoizedState, f !== null && (f = f.dehydrated, f !== null))
          return gf(f) ? l.lanes = 32 : l.lanes = 536870912, null;
        kl(l);
      }
      return f = a.children, a = a.fallback, u ? (de(), u = l.mode, f = Dn(
        { mode: "hidden", children: f },
        u
      ), a = qe(
        a,
        u,
        e,
        null
      ), f.return = l, a.return = l, f.sibling = a, l.child = f, u = l.child, u.memoizedState = Nc(e), u.childLanes = Hc(
        t,
        i,
        e
      ), l.memoizedState = Uc, a) : (oe(l), qc(l, f));
    }
    if (o = t.memoizedState, o !== null && (f = o.dehydrated, f !== null)) {
      if (n)
        l.flags & 256 ? (oe(l), l.flags &= -257, l = Cc(
          t,
          l,
          e
        )) : l.memoizedState !== null ? (de(), l.child = t.child, l.flags |= 128, l = null) : (de(), u = a.fallback, f = l.mode, a = Dn(
          { mode: "visible", children: a.children },
          f
        ), u = qe(
          u,
          f,
          e,
          null
        ), u.flags |= 2, a.return = l, u.return = l, a.sibling = u, l.child = a, ba(
          l,
          t.child,
          null,
          e
        ), a = l.child, a.memoizedState = Nc(e), a.childLanes = Hc(
          t,
          i,
          e
        ), l.memoizedState = Uc, l = u);
      else if (oe(l), gf(f)) {
        if (i = f.nextSibling && f.nextSibling.dataset, i) var g = i.dgst;
        i = g, a = Error(r(419)), a.stack = "", a.digest = i, Fa({ value: a, source: null, stack: null }), l = Cc(
          t,
          l,
          e
        );
      } else if (Bt || Pa(t, l, e, !1), i = (e & t.childLanes) !== 0, Bt || i) {
        if (i = Et, i !== null && (a = e & -e, a = (a & 42) !== 0 ? 1 : gi(a), a = (a & (i.suspendedLanes | e)) !== 0 ? 0 : a, a !== 0 && a !== o.retryLane))
          throw o.retryLane = a, ca(t, a), vl(i, t, a), oo;
        f.data === "$?" || Ic(), l = Cc(
          t,
          l,
          e
        );
      } else
        f.data === "$?" ? (l.flags |= 192, l.child = t.child, l = null) : (t = o.treeContext, zt = xl(
          f.nextSibling
        ), Pt = l, rt = !0, Be = null, Nl = !1, t !== null && (El[Al++] = Vl, El[Al++] = Ll, El[Al++] = Ce, Vl = t.id, Ll = t.overflow, Ce = l), l = qc(
          l,
          a.children
        ), l.flags |= 4096);
      return l;
    }
    return u ? (de(), u = a.fallback, f = l.mode, o = t.child, g = o.sibling, a = Zl(o, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = o.subtreeFlags & 65011712, g !== null ? u = Zl(g, u) : (u = qe(
      u,
      f,
      e,
      null
    ), u.flags |= 2), u.return = l, a.return = l, a.sibling = u, l.child = a, a = u, u = l.child, f = t.child.memoizedState, f === null ? f = Nc(e) : (o = f.cachePool, o !== null ? (g = qt._currentValue, o = o.parent !== g ? { parent: g, pool: g } : o) : o = is(), f = {
      baseLanes: f.baseLanes | e,
      cachePool: o
    }), u.memoizedState = f, u.childLanes = Hc(
      t,
      i,
      e
    ), l.memoizedState = Uc, a) : (oe(l), e = t.child, t = e.sibling, e = Zl(e, {
      mode: "visible",
      children: a.children
    }), e.return = l, e.sibling = null, t !== null && (i = l.deletions, i === null ? (l.deletions = [t], l.flags |= 16) : i.push(t)), l.child = e, l.memoizedState = null, e);
  }
  function qc(t, l) {
    return l = Dn(
      { mode: "visible", children: l },
      t.mode
    ), l.return = t, t.child = l;
  }
  function Dn(t, l) {
    return t = sl(22, t, null, l), t.lanes = 0, t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, t;
  }
  function Cc(t, l, e) {
    return ba(l, t.child, null, e), t = qc(
      l,
      l.pendingProps.children
    ), t.flags |= 2, l.memoizedState = null, t;
  }
  function Eo(t, l, e) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l), Ii(t.return, l, e);
  }
  function Yc(t, l, e, a, u) {
    var n = t.memoizedState;
    n === null ? t.memoizedState = {
      isBackwards: l,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: e,
      tailMode: u
    } : (n.isBackwards = l, n.rendering = null, n.renderingStartTime = 0, n.last = a, n.tail = e, n.tailMode = u);
  }
  function Ao(t, l, e) {
    var a = l.pendingProps, u = a.revealOrder, n = a.tail;
    if (Qt(t, l, a.children, e), a = Ct.current, (a & 2) !== 0)
      a = a & 1 | 2, l.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = l.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && Eo(t, e, l);
          else if (t.tag === 19)
            Eo(t, e, l);
          else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === l) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l)
              break t;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      a &= 1;
    }
    switch (N(Ct, a), u) {
      case "forwards":
        for (e = l.child, u = null; e !== null; )
          t = e.alternate, t !== null && _n(t) === null && (u = e), e = e.sibling;
        e = u, e === null ? (u = l.child, l.child = null) : (u = e.sibling, e.sibling = null), Yc(
          l,
          !1,
          u,
          e,
          n
        );
        break;
      case "backwards":
        for (e = null, u = l.child, l.child = null; u !== null; ) {
          if (t = u.alternate, t !== null && _n(t) === null) {
            l.child = u;
            break;
          }
          t = u.sibling, u.sibling = e, e = u, u = t;
        }
        Yc(
          l,
          !0,
          e,
          null,
          n
        );
        break;
      case "together":
        Yc(l, !1, null, null, void 0);
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function $l(t, l, e) {
    if (t !== null && (l.dependencies = t.dependencies), ge |= l.lanes, (e & l.childLanes) === 0)
      if (t !== null) {
        if (Pa(
          t,
          l,
          e,
          !1
        ), (e & l.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && l.child !== t.child)
      throw Error(r(153));
    if (l.child !== null) {
      for (t = l.child, e = Zl(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; )
        t = t.sibling, e = e.sibling = Zl(t, t.pendingProps), e.return = l;
      e.sibling = null;
    }
    return l.child;
  }
  function Bc(t, l) {
    return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && rn(t)));
  }
  function Fh(t, l, e) {
    switch (l.tag) {
      case 3:
        At(l, l.stateNode.containerInfo), ie(l, qt, t.memoizedState.cache), Wa();
        break;
      case 27:
      case 5:
        di(l);
        break;
      case 4:
        At(l, l.stateNode.containerInfo);
        break;
      case 10:
        ie(
          l,
          l.type,
          l.memoizedProps.value
        );
        break;
      case 13:
        var a = l.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (oe(l), l.flags |= 128, null) : (e & l.child.childLanes) !== 0 ? To(t, l, e) : (oe(l), t = $l(
            t,
            l,
            e
          ), t !== null ? t.sibling : null);
        oe(l);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (a = (e & l.childLanes) !== 0, a || (Pa(
          t,
          l,
          e,
          !1
        ), a = (e & l.childLanes) !== 0), u) {
          if (a)
            return Ao(
              t,
              l,
              e
            );
          l.flags |= 128;
        }
        if (u = l.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), N(Ct, Ct.current), a) break;
        return null;
      case 22:
      case 23:
        return l.lanes = 0, mo(t, l, e);
      case 24:
        ie(l, qt, t.memoizedState.cache);
    }
    return $l(t, l, e);
  }
  function Oo(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps)
        Bt = !0;
      else {
        if (!Bc(t, e) && (l.flags & 128) === 0)
          return Bt = !1, Fh(
            t,
            l,
            e
          );
        Bt = (t.flags & 131072) !== 0;
      }
    else
      Bt = !1, rt && (l.flags & 1048576) !== 0 && Ir(l, fn, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        t: {
          t = l.pendingProps;
          var a = l.elementType, u = a._init;
          if (a = u(a._payload), l.type = a, typeof a == "function")
            Ki(a) ? (t = Ve(a, t), l.tag = 1, l = So(
              null,
              l,
              a,
              t,
              e
            )) : (l.tag = 0, l = xc(
              null,
              l,
              a,
              t,
              e
            ));
          else {
            if (a != null) {
              if (u = a.$$typeof, u === mt) {
                l.tag = 11, l = ho(
                  null,
                  l,
                  a,
                  t,
                  e
                );
                break t;
              } else if (u === W) {
                l.tag = 14, l = yo(
                  null,
                  l,
                  a,
                  t,
                  e
                );
                break t;
              }
            }
            throw l = Re(a) || a, Error(r(306, l, ""));
          }
        }
        return l;
      case 0:
        return xc(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 1:
        return a = l.type, u = Ve(
          a,
          l.pendingProps
        ), So(
          t,
          l,
          a,
          u,
          e
        );
      case 3:
        t: {
          if (At(
            l,
            l.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          a = l.pendingProps;
          var n = l.memoizedState;
          u = n.element, ic(t, l), nu(l, a, null, e);
          var i = l.memoizedState;
          if (a = i.cache, ie(l, qt, a), a !== n.cache && tc(
            l,
            [qt],
            e,
            !0
          ), uu(), a = i.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: i.cache
            }, l.updateQueue.baseState = n, l.memoizedState = n, l.flags & 256) {
              l = po(
                t,
                l,
                a,
                e
              );
              break t;
            } else if (a !== u) {
              u = pl(
                Error(r(424)),
                l
              ), Fa(u), l = po(
                t,
                l,
                a,
                e
              );
              break t;
            } else {
              switch (t = l.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (zt = xl(t.firstChild), Pt = l, rt = !0, Be = null, Nl = !0, e = lo(
                l,
                null,
                a,
                e
              ), l.child = e; e; )
                e.flags = e.flags & -3 | 4096, e = e.sibling;
            }
          else {
            if (Wa(), a === u) {
              l = $l(
                t,
                l,
                e
              );
              break t;
            }
            Qt(
              t,
              l,
              a,
              e
            );
          }
          l = l.child;
        }
        return l;
      case 26:
        return Rn(t, l), t === null ? (e = Rd(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = e : rt || (e = l.type, t = l.pendingProps, a = Vn(
          F.current
        ).createElement(e), a[Jt] = l, a[tl] = t, Vt(a, e, t), Yt(a), l.stateNode = a) : l.memoizedState = Rd(
          l.type,
          t.memoizedProps,
          l.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return di(l), t === null && rt && (a = l.stateNode = _d(
          l.type,
          l.pendingProps,
          F.current
        ), Pt = l, Nl = !0, u = zt, Te(l.type) ? (bf = u, zt = xl(
          a.firstChild
        )) : zt = u), Qt(
          t,
          l,
          l.pendingProps.children,
          e
        ), Rn(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && rt && ((u = a = zt) && (a = _1(
          a,
          l.type,
          l.pendingProps,
          Nl
        ), a !== null ? (l.stateNode = a, Pt = l, zt = xl(
          a.firstChild
        ), Nl = !1, u = !0) : u = !1), u || Ge(l)), di(l), u = l.type, n = l.pendingProps, i = t !== null ? t.memoizedProps : null, a = n.children, yf(u, n) ? a = null : i !== null && yf(u, i) && (l.flags |= 32), l.memoizedState !== null && (u = dc(
          t,
          l,
          Vh,
          null,
          null,
          e
        ), Mu._currentValue = u), Rn(t, l), Qt(t, l, a, e), l.child;
      case 6:
        return t === null && rt && ((t = e = zt) && (e = z1(
          e,
          l.pendingProps,
          Nl
        ), e !== null ? (l.stateNode = e, Pt = l, zt = null, t = !0) : t = !1), t || Ge(l)), null;
      case 13:
        return To(t, l, e);
      case 4:
        return At(
          l,
          l.stateNode.containerInfo
        ), a = l.pendingProps, t === null ? l.child = ba(
          l,
          null,
          a,
          e
        ) : Qt(
          t,
          l,
          a,
          e
        ), l.child;
      case 11:
        return ho(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 7:
        return Qt(
          t,
          l,
          l.pendingProps,
          e
        ), l.child;
      case 8:
        return Qt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 12:
        return Qt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 10:
        return a = l.pendingProps, ie(l, l.type, a.value), Qt(
          t,
          l,
          a.children,
          e
        ), l.child;
      case 9:
        return u = l.type._context, a = l.pendingProps.children, je(l), u = kt(u), a = a(u), l.flags |= 1, Qt(t, l, a, e), l.child;
      case 14:
        return yo(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 15:
        return vo(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 19:
        return Ao(t, l, e);
      case 31:
        return a = l.pendingProps, e = l.mode, a = {
          mode: a.mode,
          children: a.children
        }, t === null ? (e = Dn(
          a,
          e
        ), e.ref = l.ref, l.child = e, e.return = l, l = e) : (e = Zl(t.child, a), e.ref = l.ref, l.child = e, e.return = l, l = e), l;
      case 22:
        return mo(t, l, e);
      case 24:
        return je(l), a = kt(qt), t === null ? (u = ac(), u === null && (u = Et, n = lc(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), l.memoizedState = {
          parent: a,
          cache: u
        }, nc(l), ie(l, qt, u)) : ((t.lanes & e) !== 0 && (ic(t, l), nu(l, null, null, e), uu()), u = t.memoizedState, n = l.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, l.memoizedState = u, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = u), ie(l, qt, a)) : (a = n.cache, ie(l, qt, a), a !== u.cache && tc(
          l,
          [qt],
          e,
          !0
        ))), Qt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(r(156, l.tag));
  }
  function Wl(t) {
    t.flags |= 4;
  }
  function _o(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Hd(l)) {
      if (l = Ol.current, l !== null && ((it & 4194048) === it ? Hl !== null : (it & 62914560) !== it && (it & 536870912) === 0 || l !== Hl))
        throw eu = uc, cs;
      t.flags |= 8192;
    }
  }
  function xn(t, l) {
    l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? er() : 536870912, t.lanes |= l, Ea |= l);
  }
  function du(t, l) {
    if (!rt)
      switch (t.tailMode) {
        case "hidden":
          l = t.tail;
          for (var e = null; l !== null; )
            l.alternate !== null && (e = l), l = l.sibling;
          e === null ? t.tail = null : e.sibling = null;
          break;
        case "collapsed":
          e = t.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), e = e.sibling;
          a === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
  }
  function _t(t) {
    var l = t.alternate !== null && t.alternate.child === t.child, e = 0, a = 0;
    if (l)
      for (var u = t.child; u !== null; )
        e |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = t, u = u.sibling;
    else
      for (u = t.child; u !== null; )
        e |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = t, u = u.sibling;
    return t.subtreeFlags |= a, t.childLanes = e, l;
  }
  function Ph(t, l, e) {
    var a = l.pendingProps;
    switch (Wi(l), l.tag) {
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
        return _t(l), null;
      case 1:
        return _t(l), null;
      case 3:
        return e = l.stateNode, a = null, t !== null && (a = t.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Kl(qt), ee(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && ($a(l) ? Wl(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, es())), _t(l), null;
      case 26:
        return e = l.memoizedState, t === null ? (Wl(l), e !== null ? (_t(l), _o(l, e)) : (_t(l), l.flags &= -16777217)) : e ? e !== t.memoizedState ? (Wl(l), _t(l), _o(l, e)) : (_t(l), l.flags &= -16777217) : (t.memoizedProps !== a && Wl(l), _t(l), l.flags &= -16777217), null;
      case 27:
        ju(l), e = F.current;
        var u = l.type;
        if (t !== null && l.stateNode != null)
          t.memoizedProps !== a && Wl(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(r(166));
            return _t(l), null;
          }
          t = V.current, $a(l) ? ts(l) : (t = _d(u, a, e), l.stateNode = t, Wl(l));
        }
        return _t(l), null;
      case 5:
        if (ju(l), e = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== a && Wl(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(r(166));
            return _t(l), null;
          }
          if (t = V.current, $a(l))
            ts(l);
          else {
            switch (u = Vn(
              F.current
            ), t) {
              case 1:
                t = u.createElementNS(
                  "http://www.w3.org/2000/svg",
                  e
                );
                break;
              case 2:
                t = u.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  e
                );
                break;
              default:
                switch (e) {
                  case "svg":
                    t = u.createElementNS(
                      "http://www.w3.org/2000/svg",
                      e
                    );
                    break;
                  case "math":
                    t = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    t = u.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                    break;
                  case "select":
                    t = typeof a.is == "string" ? u.createElement("select", { is: a.is }) : u.createElement("select"), a.multiple ? t.multiple = !0 : a.size && (t.size = a.size);
                    break;
                  default:
                    t = typeof a.is == "string" ? u.createElement(e, { is: a.is }) : u.createElement(e);
                }
            }
            t[Jt] = l, t[tl] = a;
            t: for (u = l.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6)
                t.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                u.child.return = u, u = u.child;
                continue;
              }
              if (u === l) break t;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === l)
                  break t;
                u = u.return;
              }
              u.sibling.return = u.return, u = u.sibling;
            }
            l.stateNode = t;
            t: switch (Vt(t, e, a), e) {
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
            t && Wl(l);
          }
        }
        return _t(l), l.flags &= -16777217, null;
      case 6:
        if (t && l.stateNode != null)
          t.memoizedProps !== a && Wl(l);
        else {
          if (typeof a != "string" && l.stateNode === null)
            throw Error(r(166));
          if (t = F.current, $a(l)) {
            if (t = l.stateNode, e = l.memoizedProps, a = null, u = Pt, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            t[Jt] = l, t = !!(t.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || bd(t.nodeValue, e)), t || Ge(l);
          } else
            t = Vn(t).createTextNode(
              a
            ), t[Jt] = l, l.stateNode = t;
        }
        return _t(l), null;
      case 13:
        if (a = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = $a(l), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(r(318));
              if (u = l.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(r(317));
              u[Jt] = l;
            } else
              Wa(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            _t(l), u = !1;
          } else
            u = es(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return l.flags & 256 ? (kl(l), l) : (kl(l), null);
        }
        if (kl(l), (l.flags & 128) !== 0)
          return l.lanes = e, l;
        if (e = a !== null, t = t !== null && t.memoizedState !== null, e) {
          a = l.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool);
          var n = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048);
        }
        return e !== t && e && (l.child.flags |= 8192), xn(l, l.updateQueue), _t(l), null;
      case 4:
        return ee(), t === null && rf(l.stateNode.containerInfo), _t(l), null;
      case 10:
        return Kl(l.type), _t(l), null;
      case 19:
        if (Y(Ct), u = l.memoizedState, u === null) return _t(l), null;
        if (a = (l.flags & 128) !== 0, n = u.rendering, n === null)
          if (a) du(u, !1);
          else {
            if (Mt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = l.child; t !== null; ) {
                if (n = _n(t), n !== null) {
                  for (l.flags |= 128, du(u, !1), t = n.updateQueue, l.updateQueue = t, xn(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                    Pr(e, t), e = e.sibling;
                  return N(
                    Ct,
                    Ct.current & 1 | 2
                  ), l.child;
                }
                t = t.sibling;
              }
            u.tail !== null && Ul() > Hn && (l.flags |= 128, a = !0, du(u, !1), l.lanes = 4194304);
          }
        else {
          if (!a)
            if (t = _n(n), t !== null) {
              if (l.flags |= 128, a = !0, t = t.updateQueue, l.updateQueue = t, xn(l, t), du(u, !0), u.tail === null && u.tailMode === "hidden" && !n.alternate && !rt)
                return _t(l), null;
            } else
              2 * Ul() - u.renderingStartTime > Hn && e !== 536870912 && (l.flags |= 128, a = !0, du(u, !1), l.lanes = 4194304);
          u.isBackwards ? (n.sibling = l.child, l.child = n) : (t = u.last, t !== null ? t.sibling = n : l.child = n, u.last = n);
        }
        return u.tail !== null ? (l = u.tail, u.rendering = l, u.tail = l.sibling, u.renderingStartTime = Ul(), l.sibling = null, t = Ct.current, N(Ct, a ? t & 1 | 2 : t & 1), l) : (_t(l), null);
      case 22:
      case 23:
        return kl(l), sc(), a = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (_t(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : _t(l), e = l.updateQueue, e !== null && xn(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== e && (l.flags |= 2048), t !== null && Y(Qe), null;
      case 24:
        return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), Kl(qt), _t(l), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, l.tag));
  }
  function Ih(t, l) {
    switch (Wi(l), l.tag) {
      case 1:
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 3:
        return Kl(qt), ee(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return ju(l), null;
      case 13:
        if (kl(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(r(340));
          Wa();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 19:
        return Y(Ct), null;
      case 4:
        return ee(), null;
      case 10:
        return Kl(l.type), null;
      case 22:
      case 23:
        return kl(l), sc(), t !== null && Y(Qe), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 24:
        return Kl(qt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function zo(t, l) {
    switch (Wi(l), l.tag) {
      case 3:
        Kl(qt), ee();
        break;
      case 26:
      case 27:
      case 5:
        ju(l);
        break;
      case 4:
        ee();
        break;
      case 13:
        kl(l);
        break;
      case 19:
        Y(Ct);
        break;
      case 10:
        Kl(l.type);
        break;
      case 22:
      case 23:
        kl(l), sc(), t !== null && Y(Qe);
        break;
      case 24:
        Kl(qt);
    }
  }
  function hu(t, l) {
    try {
      var e = l.updateQueue, a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        e = u;
        do {
          if ((e.tag & t) === t) {
            a = void 0;
            var n = e.create, i = e.inst;
            a = n(), i.destroy = a;
          }
          e = e.next;
        } while (e !== u);
      }
    } catch (f) {
      Tt(l, l.return, f);
    }
  }
  function he(t, l, e) {
    try {
      var a = l.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst, f = i.destroy;
            if (f !== void 0) {
              i.destroy = void 0, u = l;
              var o = e, g = f;
              try {
                g();
              } catch (A) {
                Tt(
                  u,
                  o,
                  A
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (A) {
      Tt(l, l.return, A);
    }
  }
  function Mo(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        hs(l, e);
      } catch (a) {
        Tt(t, t.return, a);
      }
    }
  }
  function Ro(t, l, e) {
    e.props = Ve(
      t.type,
      t.memoizedProps
    ), e.state = t.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      Tt(t, l, a);
    }
  }
  function yu(t, l) {
    try {
      var e = t.ref;
      if (e !== null) {
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
        typeof e == "function" ? t.refCleanup = e(a) : e.current = a;
      }
    } catch (u) {
      Tt(t, l, u);
    }
  }
  function ql(t, l) {
    var e = t.ref, a = t.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          Tt(t, l, u);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (u) {
          Tt(t, l, u);
        }
      else e.current = null;
  }
  function Do(t) {
    var l = t.type, e = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break t;
        case "img":
          e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (u) {
      Tt(t, t.return, u);
    }
  }
  function Gc(t, l, e) {
    try {
      var a = t.stateNode;
      p1(a, t.type, e, l), a[tl] = l;
    } catch (u) {
      Tt(t, t.return, u);
    }
  }
  function xo(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Te(t.type) || t.tag === 4;
  }
  function Xc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || xo(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Te(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function jc(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(t, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(t), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = Zn));
    else if (a !== 4 && (a === 27 && Te(t.type) && (e = t.stateNode, l = null), t = t.child, t !== null))
      for (jc(t, l, e), t = t.sibling; t !== null; )
        jc(t, l, e), t = t.sibling;
  }
  function Un(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, l ? e.insertBefore(t, l) : e.appendChild(t);
    else if (a !== 4 && (a === 27 && Te(t.type) && (e = t.stateNode), t = t.child, t !== null))
      for (Un(t, l, e), t = t.sibling; t !== null; )
        Un(t, l, e), t = t.sibling;
  }
  function Uo(t) {
    var l = t.stateNode, e = t.memoizedProps;
    try {
      for (var a = t.type, u = l.attributes; u.length; )
        l.removeAttributeNode(u[0]);
      Vt(l, a, e), l[Jt] = t, l[tl] = e;
    } catch (n) {
      Tt(t, t.return, n);
    }
  }
  var Fl = !1, Dt = !1, Qc = !1, No = typeof WeakSet == "function" ? WeakSet : Set, Gt = null;
  function t1(t, l) {
    if (t = t.containerInfo, df = $n, t = Zr(t), Xi(t)) {
      if ("selectionStart" in t)
        var e = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          e = (e = t.ownerDocument) && e.defaultView || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var u = a.anchorOffset, n = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, n.nodeType;
            } catch {
              e = null;
              break t;
            }
            var i = 0, f = -1, o = -1, g = 0, A = 0, z = t, S = null;
            l: for (; ; ) {
              for (var T; z !== e || u !== 0 && z.nodeType !== 3 || (f = i + u), z !== n || a !== 0 && z.nodeType !== 3 || (o = i + a), z.nodeType === 3 && (i += z.nodeValue.length), (T = z.firstChild) !== null; )
                S = z, z = T;
              for (; ; ) {
                if (z === t) break l;
                if (S === e && ++g === u && (f = i), S === n && ++A === a && (o = i), (T = z.nextSibling) !== null) break;
                z = S, S = z.parentNode;
              }
              z = T;
            }
            e = f === -1 || o === -1 ? null : { start: f, end: o };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (hf = { focusedElem: t, selectionRange: e }, $n = !1, Gt = l; Gt !== null; )
      if (l = Gt, t = l.child, (l.subtreeFlags & 1024) !== 0 && t !== null)
        t.return = l, Gt = t;
      else
        for (; Gt !== null; ) {
          switch (l = Gt, n = l.alternate, t = l.flags, l.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && n !== null) {
                t = void 0, e = l, u = n.memoizedProps, n = n.memoizedState, a = e.stateNode;
                try {
                  var k = Ve(
                    e.type,
                    u,
                    e.elementType === e.type
                  );
                  t = a.getSnapshotBeforeUpdate(
                    k,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch (L) {
                  Tt(
                    e,
                    e.return,
                    L
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = l.stateNode.containerInfo, e = t.nodeType, e === 9)
                  mf(t);
                else if (e === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      mf(t);
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
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (t = l.sibling, t !== null) {
            t.return = l.return, Gt = t;
            break;
          }
          Gt = l.return;
        }
  }
  function Ho(t, l, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ye(t, e), a & 4 && hu(5, e);
        break;
      case 1:
        if (ye(t, e), a & 4)
          if (t = e.stateNode, l === null)
            try {
              t.componentDidMount();
            } catch (i) {
              Tt(e, e.return, i);
            }
          else {
            var u = Ve(
              e.type,
              l.memoizedProps
            );
            l = l.memoizedState;
            try {
              t.componentDidUpdate(
                u,
                l,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (i) {
              Tt(
                e,
                e.return,
                i
              );
            }
          }
        a & 64 && Mo(e), a & 512 && yu(e, e.return);
        break;
      case 3:
        if (ye(t, e), a & 64 && (t = e.updateQueue, t !== null)) {
          if (l = null, e.child !== null)
            switch (e.child.tag) {
              case 27:
              case 5:
                l = e.child.stateNode;
                break;
              case 1:
                l = e.child.stateNode;
            }
          try {
            hs(t, l);
          } catch (i) {
            Tt(e, e.return, i);
          }
        }
        break;
      case 27:
        l === null && a & 4 && Uo(e);
      case 26:
      case 5:
        ye(t, e), l === null && a & 4 && Do(e), a & 512 && yu(e, e.return);
        break;
      case 12:
        ye(t, e);
        break;
      case 13:
        ye(t, e), a & 4 && Yo(t, e), a & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = r1.bind(
          null,
          e
        ), M1(t, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || Fl, !a) {
          l = l !== null && l.memoizedState !== null || Dt, u = Fl;
          var n = Dt;
          Fl = a, (Dt = l) && !n ? ve(
            t,
            e,
            (e.subtreeFlags & 8772) !== 0
          ) : ye(t, e), Fl = u, Dt = n;
        }
        break;
      case 30:
        break;
      default:
        ye(t, e);
    }
  }
  function qo(t) {
    var l = t.alternate;
    l !== null && (t.alternate = null, qo(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && pi(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Ot = null, al = !1;
  function Pl(t, l, e) {
    for (e = e.child; e !== null; )
      Co(t, l, e), e = e.sibling;
  }
  function Co(t, l, e) {
    if (cl && typeof cl.onCommitFiberUnmount == "function")
      try {
        cl.onCommitFiberUnmount(Ca, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        Dt || ql(e, l), Pl(
          t,
          l,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        Dt || ql(e, l);
        var a = Ot, u = al;
        Te(e.type) && (Ot = e.stateNode, al = !1), Pl(
          t,
          l,
          e
        ), Au(e.stateNode), Ot = a, al = u;
        break;
      case 5:
        Dt || ql(e, l);
      case 6:
        if (a = Ot, u = al, Ot = null, Pl(
          t,
          l,
          e
        ), Ot = a, al = u, Ot !== null)
          if (al)
            try {
              (Ot.nodeType === 9 ? Ot.body : Ot.nodeName === "HTML" ? Ot.ownerDocument.body : Ot).removeChild(e.stateNode);
            } catch (n) {
              Tt(
                e,
                l,
                n
              );
            }
          else
            try {
              Ot.removeChild(e.stateNode);
            } catch (n) {
              Tt(
                e,
                l,
                n
              );
            }
        break;
      case 18:
        Ot !== null && (al ? (t = Ot, Ad(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          e.stateNode
        ), Uu(t)) : Ad(Ot, e.stateNode));
        break;
      case 4:
        a = Ot, u = al, Ot = e.stateNode.containerInfo, al = !0, Pl(
          t,
          l,
          e
        ), Ot = a, al = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Dt || he(2, e, l), Dt || he(4, e, l), Pl(
          t,
          l,
          e
        );
        break;
      case 1:
        Dt || (ql(e, l), a = e.stateNode, typeof a.componentWillUnmount == "function" && Ro(
          e,
          l,
          a
        )), Pl(
          t,
          l,
          e
        );
        break;
      case 21:
        Pl(
          t,
          l,
          e
        );
        break;
      case 22:
        Dt = (a = Dt) || e.memoizedState !== null, Pl(
          t,
          l,
          e
        ), Dt = a;
        break;
      default:
        Pl(
          t,
          l,
          e
        );
    }
  }
  function Yo(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Uu(t);
      } catch (e) {
        Tt(l, l.return, e);
      }
  }
  function l1(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new No()), l;
      case 22:
        return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new No()), l;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Zc(t, l) {
    var e = l1(t);
    l.forEach(function(a) {
      var u = s1.bind(null, t, a);
      e.has(a) || (e.add(a), a.then(u, u));
    });
  }
  function ol(t, l) {
    var e = l.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a], n = t, i = l, f = i;
        t: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (Te(f.type)) {
                Ot = f.stateNode, al = !1;
                break t;
              }
              break;
            case 5:
              Ot = f.stateNode, al = !1;
              break t;
            case 3:
            case 4:
              Ot = f.stateNode.containerInfo, al = !0;
              break t;
          }
          f = f.return;
        }
        if (Ot === null) throw Error(r(160));
        Co(n, i, u), Ot = null, al = !1, n = u.alternate, n !== null && (n.return = null), u.return = null;
      }
    if (l.subtreeFlags & 13878)
      for (l = l.child; l !== null; )
        Bo(l, t), l = l.sibling;
  }
  var Dl = null;
  function Bo(t, l) {
    var e = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ol(l, t), dl(t), a & 4 && (he(3, t, t.return), hu(3, t), he(5, t, t.return));
        break;
      case 1:
        ol(l, t), dl(t), a & 512 && (Dt || e === null || ql(e, e.return)), a & 64 && Fl && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
        break;
      case 26:
        var u = Dl;
        if (ol(l, t), dl(t), a & 512 && (Dt || e === null || ql(e, e.return)), a & 4) {
          var n = e !== null ? e.memoizedState : null;
          if (a = t.memoizedState, e === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type, e = t.memoizedProps, u = u.ownerDocument || u;
                  l: switch (a) {
                    case "title":
                      n = u.getElementsByTagName("title")[0], (!n || n[Ga] || n[Jt] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a), u.head.insertBefore(
                        n,
                        u.querySelector("head > title")
                      )), Vt(n, a, e), n[Jt] = t, Yt(n), a = n;
                      break t;
                    case "link":
                      var i = Ud(
                        "link",
                        "href",
                        u
                      ).get(a + (e.href || ""));
                      if (i) {
                        for (var f = 0; f < i.length; f++)
                          if (n = i[f], n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                            i.splice(f, 1);
                            break l;
                          }
                      }
                      n = u.createElement(a), Vt(n, a, e), u.head.appendChild(n);
                      break;
                    case "meta":
                      if (i = Ud(
                        "meta",
                        "content",
                        u
                      ).get(a + (e.content || ""))) {
                        for (f = 0; f < i.length; f++)
                          if (n = i[f], n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                            i.splice(f, 1);
                            break l;
                          }
                      }
                      n = u.createElement(a), Vt(n, a, e), u.head.appendChild(n);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  n[Jt] = t, Yt(n), a = n;
                }
                t.stateNode = a;
              } else
                Nd(
                  u,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = xd(
                u,
                a,
                t.memoizedProps
              );
          else
            n !== a ? (n === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : n.count--, a === null ? Nd(
              u,
              t.type,
              t.stateNode
            ) : xd(
              u,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && Gc(
              t,
              t.memoizedProps,
              e.memoizedProps
            );
        }
        break;
      case 27:
        ol(l, t), dl(t), a & 512 && (Dt || e === null || ql(e, e.return)), e !== null && a & 4 && Gc(
          t,
          t.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if (ol(l, t), dl(t), a & 512 && (Dt || e === null || ql(e, e.return)), t.flags & 32) {
          u = t.stateNode;
          try {
            ta(u, "");
          } catch (T) {
            Tt(t, t.return, T);
          }
        }
        a & 4 && t.stateNode != null && (u = t.memoizedProps, Gc(
          t,
          u,
          e !== null ? e.memoizedProps : u
        )), a & 1024 && (Qc = !0);
        break;
      case 6:
        if (ol(l, t), dl(t), a & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          a = t.memoizedProps, e = t.stateNode;
          try {
            e.nodeValue = a;
          } catch (T) {
            Tt(t, t.return, T);
          }
        }
        break;
      case 3:
        if (Kn = null, u = Dl, Dl = Ln(l.containerInfo), ol(l, t), Dl = u, dl(t), a & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            Uu(l.containerInfo);
          } catch (T) {
            Tt(t, t.return, T);
          }
        Qc && (Qc = !1, Go(t));
        break;
      case 4:
        a = Dl, Dl = Ln(
          t.stateNode.containerInfo
        ), ol(l, t), dl(t), Dl = a;
        break;
      case 12:
        ol(l, t), dl(t);
        break;
      case 13:
        ol(l, t), dl(t), t.child.flags & 8192 && t.memoizedState !== null != (e !== null && e.memoizedState !== null) && (kc = Ul()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Zc(t, a)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var o = e !== null && e.memoizedState !== null, g = Fl, A = Dt;
        if (Fl = g || u, Dt = A || o, ol(l, t), Dt = A, Fl = g, dl(t), a & 8192)
          t: for (l = t.stateNode, l._visibility = u ? l._visibility & -2 : l._visibility | 1, u && (e === null || o || Fl || Dt || Le(t)), e = null, l = t; ; ) {
            if (l.tag === 5 || l.tag === 26) {
              if (e === null) {
                o = e = l;
                try {
                  if (n = o.stateNode, u)
                    i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    f = o.stateNode;
                    var z = o.memoizedProps.style, S = z != null && z.hasOwnProperty("display") ? z.display : null;
                    f.style.display = S == null || typeof S == "boolean" ? "" : ("" + S).trim();
                  }
                } catch (T) {
                  Tt(o, o.return, T);
                }
              }
            } else if (l.tag === 6) {
              if (e === null) {
                o = l;
                try {
                  o.stateNode.nodeValue = u ? "" : o.memoizedProps;
                } catch (T) {
                  Tt(o, o.return, T);
                }
              }
            } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === t) && l.child !== null) {
              l.child.return = l, l = l.child;
              continue;
            }
            if (l === t) break t;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t) break t;
              e === l && (e = null), l = l.return;
            }
            e === l && (e = null), l.sibling.return = l.return, l = l.sibling;
          }
        a & 4 && (a = t.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, Zc(t, e))));
        break;
      case 19:
        ol(l, t), dl(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Zc(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ol(l, t), dl(t);
    }
  }
  function dl(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, a = t.return; a !== null; ) {
          if (xo(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(r(160));
        switch (e.tag) {
          case 27:
            var u = e.stateNode, n = Xc(t);
            Un(t, n, u);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (ta(i, ""), e.flags &= -33);
            var f = Xc(t);
            Un(t, f, i);
            break;
          case 3:
          case 4:
            var o = e.stateNode.containerInfo, g = Xc(t);
            jc(
              t,
              g,
              o
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (A) {
        Tt(t, t.return, A);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function Go(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        Go(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), t = t.sibling;
      }
  }
  function ye(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        Ho(t, l.alternate, l), l = l.sibling;
  }
  function Le(t) {
    for (t = t.child; t !== null; ) {
      var l = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          he(4, l, l.return), Le(l);
          break;
        case 1:
          ql(l, l.return);
          var e = l.stateNode;
          typeof e.componentWillUnmount == "function" && Ro(
            l,
            l.return,
            e
          ), Le(l);
          break;
        case 27:
          Au(l.stateNode);
        case 26:
        case 5:
          ql(l, l.return), Le(l);
          break;
        case 22:
          l.memoizedState === null && Le(l);
          break;
        case 30:
          Le(l);
          break;
        default:
          Le(l);
      }
      t = t.sibling;
    }
  }
  function ve(t, l, e) {
    for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var a = l.alternate, u = t, n = l, i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ve(
            u,
            n,
            e
          ), hu(4, n);
          break;
        case 1:
          if (ve(
            u,
            n,
            e
          ), a = n, u = a.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (g) {
              Tt(a, a.return, g);
            }
          if (a = n, u = a.updateQueue, u !== null) {
            var f = a.stateNode;
            try {
              var o = u.shared.hiddenCallbacks;
              if (o !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < o.length; u++)
                  ds(o[u], f);
            } catch (g) {
              Tt(a, a.return, g);
            }
          }
          e && i & 64 && Mo(n), yu(n, n.return);
          break;
        case 27:
          Uo(n);
        case 26:
        case 5:
          ve(
            u,
            n,
            e
          ), e && a === null && i & 4 && Do(n), yu(n, n.return);
          break;
        case 12:
          ve(
            u,
            n,
            e
          );
          break;
        case 13:
          ve(
            u,
            n,
            e
          ), e && i & 4 && Yo(u, n);
          break;
        case 22:
          n.memoizedState === null && ve(
            u,
            n,
            e
          ), yu(n, n.return);
          break;
        case 30:
          break;
        default:
          ve(
            u,
            n,
            e
          );
      }
      l = l.sibling;
    }
  }
  function Vc(t, l) {
    var e = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && Ia(e));
  }
  function Lc(t, l) {
    t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && Ia(t));
  }
  function Cl(t, l, e, a) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Xo(
          t,
          l,
          e,
          a
        ), l = l.sibling;
  }
  function Xo(t, l, e, a) {
    var u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Cl(
          t,
          l,
          e,
          a
        ), u & 2048 && hu(9, l);
        break;
      case 1:
        Cl(
          t,
          l,
          e,
          a
        );
        break;
      case 3:
        Cl(
          t,
          l,
          e,
          a
        ), u & 2048 && (t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && Ia(t)));
        break;
      case 12:
        if (u & 2048) {
          Cl(
            t,
            l,
            e,
            a
          ), t = l.stateNode;
          try {
            var n = l.memoizedProps, i = n.id, f = n.onPostCommit;
            typeof f == "function" && f(
              i,
              l.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (o) {
            Tt(l, l.return, o);
          }
        } else
          Cl(
            t,
            l,
            e,
            a
          );
        break;
      case 13:
        Cl(
          t,
          l,
          e,
          a
        );
        break;
      case 23:
        break;
      case 22:
        n = l.stateNode, i = l.alternate, l.memoizedState !== null ? n._visibility & 2 ? Cl(
          t,
          l,
          e,
          a
        ) : vu(t, l) : n._visibility & 2 ? Cl(
          t,
          l,
          e,
          a
        ) : (n._visibility |= 2, Sa(
          t,
          l,
          e,
          a,
          (l.subtreeFlags & 10256) !== 0
        )), u & 2048 && Vc(i, l);
        break;
      case 24:
        Cl(
          t,
          l,
          e,
          a
        ), u & 2048 && Lc(l.alternate, l);
        break;
      default:
        Cl(
          t,
          l,
          e,
          a
        );
    }
  }
  function Sa(t, l, e, a, u) {
    for (u = u && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null; ) {
      var n = t, i = l, f = e, o = a, g = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Sa(
            n,
            i,
            f,
            o,
            u
          ), hu(8, i);
          break;
        case 23:
          break;
        case 22:
          var A = i.stateNode;
          i.memoizedState !== null ? A._visibility & 2 ? Sa(
            n,
            i,
            f,
            o,
            u
          ) : vu(
            n,
            i
          ) : (A._visibility |= 2, Sa(
            n,
            i,
            f,
            o,
            u
          )), u && g & 2048 && Vc(
            i.alternate,
            i
          );
          break;
        case 24:
          Sa(
            n,
            i,
            f,
            o,
            u
          ), u && g & 2048 && Lc(i.alternate, i);
          break;
        default:
          Sa(
            n,
            i,
            f,
            o,
            u
          );
      }
      l = l.sibling;
    }
  }
  function vu(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t, a = l, u = a.flags;
        switch (a.tag) {
          case 22:
            vu(e, a), u & 2048 && Vc(
              a.alternate,
              a
            );
            break;
          case 24:
            vu(e, a), u & 2048 && Lc(a.alternate, a);
            break;
          default:
            vu(e, a);
        }
        l = l.sibling;
      }
  }
  var mu = 8192;
  function pa(t) {
    if (t.subtreeFlags & mu)
      for (t = t.child; t !== null; )
        jo(t), t = t.sibling;
  }
  function jo(t) {
    switch (t.tag) {
      case 26:
        pa(t), t.flags & mu && t.memoizedState !== null && j1(
          Dl,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        pa(t);
        break;
      case 3:
      case 4:
        var l = Dl;
        Dl = Ln(t.stateNode.containerInfo), pa(t), Dl = l;
        break;
      case 22:
        t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = mu, mu = 16777216, pa(t), mu = l) : pa(t));
        break;
      default:
        pa(t);
    }
  }
  function Qo(t) {
    var l = t.alternate;
    if (l !== null && (t = l.child, t !== null)) {
      l.child = null;
      do
        l = t.sibling, t.sibling = null, t = l;
      while (t !== null);
    }
  }
  function gu(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          Gt = a, Vo(
            a,
            t
          );
        }
      Qo(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Zo(t), t = t.sibling;
  }
  function Zo(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        gu(t), t.flags & 2048 && he(9, t, t.return);
        break;
      case 3:
        gu(t);
        break;
      case 12:
        gu(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, Nn(t)) : gu(t);
        break;
      default:
        gu(t);
    }
  }
  function Nn(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          Gt = a, Vo(
            a,
            t
          );
        }
      Qo(t);
    }
    for (t = t.child; t !== null; ) {
      switch (l = t, l.tag) {
        case 0:
        case 11:
        case 15:
          he(8, l, l.return), Nn(l);
          break;
        case 22:
          e = l.stateNode, e._visibility & 2 && (e._visibility &= -3, Nn(l));
          break;
        default:
          Nn(l);
      }
      t = t.sibling;
    }
  }
  function Vo(t, l) {
    for (; Gt !== null; ) {
      var e = Gt;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          he(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ia(e.memoizedState.cache);
      }
      if (a = e.child, a !== null) a.return = e, Gt = a;
      else
        t: for (e = t; Gt !== null; ) {
          a = Gt;
          var u = a.sibling, n = a.return;
          if (qo(a), a === e) {
            Gt = null;
            break t;
          }
          if (u !== null) {
            u.return = n, Gt = u;
            break t;
          }
          Gt = n;
        }
    }
  }
  var e1 = {
    getCacheForType: function(t) {
      var l = kt(qt), e = l.data.get(t);
      return e === void 0 && (e = t(), l.data.set(t, e)), e;
    }
  }, a1 = typeof WeakMap == "function" ? WeakMap : Map, yt = 0, Et = null, ut = null, it = 0, vt = 0, hl = null, me = !1, Ta = !1, wc = !1, Il = 0, Mt = 0, ge = 0, we = 0, Kc = 0, _l = 0, Ea = 0, bu = null, ul = null, Jc = !1, kc = 0, Hn = 1 / 0, qn = null, be = null, Zt = 0, Se = null, Aa = null, Oa = 0, $c = 0, Wc = null, Lo = null, Su = 0, Fc = null;
  function yl() {
    if ((yt & 2) !== 0 && it !== 0)
      return it & -it;
    if (O.T !== null) {
      var t = oa;
      return t !== 0 ? t : uf();
    }
    return nr();
  }
  function wo() {
    _l === 0 && (_l = (it & 536870912) === 0 || rt ? lr() : 536870912);
    var t = Ol.current;
    return t !== null && (t.flags |= 32), _l;
  }
  function vl(t, l, e) {
    (t === Et && (vt === 2 || vt === 9) || t.cancelPendingCommit !== null) && (_a(t, 0), pe(
      t,
      it,
      _l,
      !1
    )), Ba(t, e), ((yt & 2) === 0 || t !== Et) && (t === Et && ((yt & 2) === 0 && (we |= e), Mt === 4 && pe(
      t,
      it,
      _l,
      !1
    )), Yl(t));
  }
  function Ko(t, l, e) {
    if ((yt & 6) !== 0) throw Error(r(327));
    var a = !e && (l & 124) === 0 && (l & t.expiredLanes) === 0 || Ya(t, l), u = a ? i1(t, l) : tf(t, l, !0), n = a;
    do {
      if (u === 0) {
        Ta && !a && pe(t, l, 0, !1);
        break;
      } else {
        if (e = t.current.alternate, n && !u1(e)) {
          u = tf(t, l, !1), n = !1;
          continue;
        }
        if (u === 2) {
          if (n = l, t.errorRecoveryDisabledLanes & n)
            var i = 0;
          else
            i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            l = i;
            t: {
              var f = t;
              u = bu;
              var o = f.current.memoizedState.isDehydrated;
              if (o && (_a(f, i).flags |= 256), i = tf(
                f,
                i,
                !1
              ), i !== 2) {
                if (wc && !o) {
                  f.errorRecoveryDisabledLanes |= n, we |= n, u = 4;
                  break t;
                }
                n = ul, ul = u, n !== null && (ul === null ? ul = n : ul.push.apply(
                  ul,
                  n
                ));
              }
              u = i;
            }
            if (n = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          _a(t, 0), pe(t, l, 0, !0);
          break;
        }
        t: {
          switch (a = t, n = u, n) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              pe(
                a,
                l,
                _l,
                !me
              );
              break t;
            case 2:
              ul = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((l & 62914560) === l && (u = kc + 300 - Ul(), 10 < u)) {
            if (pe(
              a,
              l,
              _l,
              !me
            ), Lu(a, 0, !0) !== 0) break t;
            a.timeoutHandle = Td(
              Jo.bind(
                null,
                a,
                e,
                ul,
                qn,
                Jc,
                l,
                _l,
                we,
                Ea,
                me,
                n,
                2,
                -0,
                0
              ),
              u
            );
            break t;
          }
          Jo(
            a,
            e,
            ul,
            qn,
            Jc,
            l,
            _l,
            we,
            Ea,
            me,
            n,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Yl(t);
  }
  function Jo(t, l, e, a, u, n, i, f, o, g, A, z, S, T) {
    if (t.timeoutHandle = -1, z = l.subtreeFlags, (z & 8192 || (z & 16785408) === 16785408) && (zu = { stylesheets: null, count: 0, unsuspend: X1 }, jo(l), z = Q1(), z !== null)) {
      t.cancelPendingCommit = z(
        td.bind(
          null,
          t,
          l,
          n,
          e,
          a,
          u,
          i,
          f,
          o,
          A,
          1,
          S,
          T
        )
      ), pe(t, n, i, !g);
      return;
    }
    td(
      t,
      l,
      n,
      e,
      a,
      u,
      i,
      f,
      o
    );
  }
  function u1(t) {
    for (var l = t; ; ) {
      var e = l.tag;
      if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var a = 0; a < e.length; a++) {
          var u = e[a], n = u.getSnapshot;
          u = u.value;
          try {
            if (!rl(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (e = l.child, l.subtreeFlags & 16384 && e !== null)
        e.return = l, l = e;
      else {
        if (l === t) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return !0;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    return !0;
  }
  function pe(t, l, e, a) {
    l &= ~Kc, l &= ~we, t.suspendedLanes |= l, t.pingedLanes &= ~l, a && (t.warmLanes |= l), a = t.expirationTimes;
    for (var u = l; 0 < u; ) {
      var n = 31 - fl(u), i = 1 << n;
      a[n] = -1, u &= ~i;
    }
    e !== 0 && ar(t, e, l);
  }
  function Cn() {
    return (yt & 6) === 0 ? (pu(0), !1) : !0;
  }
  function Pc() {
    if (ut !== null) {
      if (vt === 0)
        var t = ut.return;
      else
        t = ut, wl = Xe = null, vc(t), ga = null, su = 0, t = ut;
      for (; t !== null; )
        zo(t.alternate, t), t = t.return;
      ut = null;
    }
  }
  function _a(t, l) {
    var e = t.timeoutHandle;
    e !== -1 && (t.timeoutHandle = -1, E1(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), Pc(), Et = t, ut = e = Zl(t.current, null), it = l, vt = 0, hl = null, me = !1, Ta = Ya(t, l), wc = !1, Ea = _l = Kc = we = ge = Mt = 0, ul = bu = null, Jc = !1, (l & 8) !== 0 && (l |= l & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= l; 0 < a; ) {
        var u = 31 - fl(a), n = 1 << u;
        l |= t[u], a &= ~n;
      }
    return Il = l, en(), e;
  }
  function ko(t, l) {
    lt = null, O.H = En, l === lu || l === dn ? (l = ss(), vt = 3) : l === cs ? (l = ss(), vt = 4) : vt = l === oo ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, hl = l, ut === null && (Mt = 1, Mn(
      t,
      pl(l, t.current)
    ));
  }
  function $o() {
    var t = O.H;
    return O.H = En, t === null ? En : t;
  }
  function Wo() {
    var t = O.A;
    return O.A = e1, t;
  }
  function Ic() {
    Mt = 4, me || (it & 4194048) !== it && Ol.current !== null || (Ta = !0), (ge & 134217727) === 0 && (we & 134217727) === 0 || Et === null || pe(
      Et,
      it,
      _l,
      !1
    );
  }
  function tf(t, l, e) {
    var a = yt;
    yt |= 2;
    var u = $o(), n = Wo();
    (Et !== t || it !== l) && (qn = null, _a(t, l)), l = !1;
    var i = Mt;
    t: do
      try {
        if (vt !== 0 && ut !== null) {
          var f = ut, o = hl;
          switch (vt) {
            case 8:
              Pc(), i = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ol.current === null && (l = !0);
              var g = vt;
              if (vt = 0, hl = null, za(t, f, o, g), e && Ta) {
                i = 0;
                break t;
              }
              break;
            default:
              g = vt, vt = 0, hl = null, za(t, f, o, g);
          }
        }
        n1(), i = Mt;
        break;
      } catch (A) {
        ko(t, A);
      }
    while (!0);
    return l && t.shellSuspendCounter++, wl = Xe = null, yt = a, O.H = u, O.A = n, ut === null && (Et = null, it = 0, en()), i;
  }
  function n1() {
    for (; ut !== null; ) Fo(ut);
  }
  function i1(t, l) {
    var e = yt;
    yt |= 2;
    var a = $o(), u = Wo();
    Et !== t || it !== l ? (qn = null, Hn = Ul() + 500, _a(t, l)) : Ta = Ya(
      t,
      l
    );
    t: do
      try {
        if (vt !== 0 && ut !== null) {
          l = ut;
          var n = hl;
          l: switch (vt) {
            case 1:
              vt = 0, hl = null, za(t, l, n, 1);
              break;
            case 2:
            case 9:
              if (fs(n)) {
                vt = 0, hl = null, Po(l);
                break;
              }
              l = function() {
                vt !== 2 && vt !== 9 || Et !== t || (vt = 7), Yl(t);
              }, n.then(l, l);
              break t;
            case 3:
              vt = 7;
              break t;
            case 4:
              vt = 5;
              break t;
            case 7:
              fs(n) ? (vt = 0, hl = null, Po(l)) : (vt = 0, hl = null, za(t, l, n, 7));
              break;
            case 5:
              var i = null;
              switch (ut.tag) {
                case 26:
                  i = ut.memoizedState;
                case 5:
                case 27:
                  var f = ut;
                  if (!i || Hd(i)) {
                    vt = 0, hl = null;
                    var o = f.sibling;
                    if (o !== null) ut = o;
                    else {
                      var g = f.return;
                      g !== null ? (ut = g, Yn(g)) : ut = null;
                    }
                    break l;
                  }
              }
              vt = 0, hl = null, za(t, l, n, 5);
              break;
            case 6:
              vt = 0, hl = null, za(t, l, n, 6);
              break;
            case 8:
              Pc(), Mt = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        c1();
        break;
      } catch (A) {
        ko(t, A);
      }
    while (!0);
    return wl = Xe = null, O.H = a, O.A = u, yt = e, ut !== null ? 0 : (Et = null, it = 0, en(), Mt);
  }
  function c1() {
    for (; ut !== null && !D0(); )
      Fo(ut);
  }
  function Fo(t) {
    var l = Oo(t.alternate, t, Il);
    t.memoizedProps = t.pendingProps, l === null ? Yn(t) : ut = l;
  }
  function Po(t) {
    var l = t, e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = bo(
          e,
          l,
          l.pendingProps,
          l.type,
          void 0,
          it
        );
        break;
      case 11:
        l = bo(
          e,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          it
        );
        break;
      case 5:
        vc(l);
      default:
        zo(e, l), l = ut = Pr(l, Il), l = Oo(e, l, Il);
    }
    t.memoizedProps = t.pendingProps, l === null ? Yn(t) : ut = l;
  }
  function za(t, l, e, a) {
    wl = Xe = null, vc(l), ga = null, su = 0;
    var u = l.return;
    try {
      if (Wh(
        t,
        u,
        l,
        e,
        it
      )) {
        Mt = 1, Mn(
          t,
          pl(e, t.current)
        ), ut = null;
        return;
      }
    } catch (n) {
      if (u !== null) throw ut = u, n;
      Mt = 1, Mn(
        t,
        pl(e, t.current)
      ), ut = null;
      return;
    }
    l.flags & 32768 ? (rt || a === 1 ? t = !0 : Ta || (it & 536870912) !== 0 ? t = !1 : (me = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Ol.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Io(l, t)) : Yn(l);
  }
  function Yn(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        Io(
          l,
          me
        );
        return;
      }
      t = l.return;
      var e = Ph(
        l.alternate,
        l,
        Il
      );
      if (e !== null) {
        ut = e;
        return;
      }
      if (l = l.sibling, l !== null) {
        ut = l;
        return;
      }
      ut = l = t;
    } while (l !== null);
    Mt === 0 && (Mt = 5);
  }
  function Io(t, l) {
    do {
      var e = Ih(t.alternate, t);
      if (e !== null) {
        e.flags &= 32767, ut = e;
        return;
      }
      if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
        ut = t;
        return;
      }
      ut = t = e;
    } while (t !== null);
    Mt = 6, ut = null;
  }
  function td(t, l, e, a, u, n, i, f, o) {
    t.cancelPendingCommit = null;
    do
      Bn();
    while (Zt !== 0);
    if ((yt & 6) !== 0) throw Error(r(327));
    if (l !== null) {
      if (l === t.current) throw Error(r(177));
      if (n = l.lanes | l.childLanes, n |= Li, X0(
        t,
        e,
        n,
        i,
        f,
        o
      ), t === Et && (ut = Et = null, it = 0), Aa = l, Se = t, Oa = e, $c = n, Wc = u, Lo = a, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, o1(Qu, function() {
        return nd(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || a) {
        a = O.T, O.T = null, u = q.p, q.p = 2, i = yt, yt |= 4;
        try {
          t1(t, l, e);
        } finally {
          yt = i, q.p = u, O.T = a;
        }
      }
      Zt = 1, ld(), ed(), ad();
    }
  }
  function ld() {
    if (Zt === 1) {
      Zt = 0;
      var t = Se, l = Aa, e = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || e) {
        e = O.T, O.T = null;
        var a = q.p;
        q.p = 2;
        var u = yt;
        yt |= 4;
        try {
          Bo(l, t);
          var n = hf, i = Zr(t.containerInfo), f = n.focusedElem, o = n.selectionRange;
          if (i !== f && f && f.ownerDocument && Qr(
            f.ownerDocument.documentElement,
            f
          )) {
            if (o !== null && Xi(f)) {
              var g = o.start, A = o.end;
              if (A === void 0 && (A = g), "selectionStart" in f)
                f.selectionStart = g, f.selectionEnd = Math.min(
                  A,
                  f.value.length
                );
              else {
                var z = f.ownerDocument || document, S = z && z.defaultView || window;
                if (S.getSelection) {
                  var T = S.getSelection(), k = f.textContent.length, L = Math.min(o.start, k), St = o.end === void 0 ? L : Math.min(o.end, k);
                  !T.extend && L > St && (i = St, St = L, L = i);
                  var v = jr(
                    f,
                    L
                  ), h = jr(
                    f,
                    St
                  );
                  if (v && h && (T.rangeCount !== 1 || T.anchorNode !== v.node || T.anchorOffset !== v.offset || T.focusNode !== h.node || T.focusOffset !== h.offset)) {
                    var m = z.createRange();
                    m.setStart(v.node, v.offset), T.removeAllRanges(), L > St ? (T.addRange(m), T.extend(h.node, h.offset)) : (m.setEnd(h.node, h.offset), T.addRange(m));
                  }
                }
              }
            }
            for (z = [], T = f; T = T.parentNode; )
              T.nodeType === 1 && z.push({
                element: T,
                left: T.scrollLeft,
                top: T.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < z.length; f++) {
              var _ = z[f];
              _.element.scrollLeft = _.left, _.element.scrollTop = _.top;
            }
          }
          $n = !!df, hf = df = null;
        } finally {
          yt = u, q.p = a, O.T = e;
        }
      }
      t.current = l, Zt = 2;
    }
  }
  function ed() {
    if (Zt === 2) {
      Zt = 0;
      var t = Se, l = Aa, e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        e = O.T, O.T = null;
        var a = q.p;
        q.p = 2;
        var u = yt;
        yt |= 4;
        try {
          Ho(t, l.alternate, l);
        } finally {
          yt = u, q.p = a, O.T = e;
        }
      }
      Zt = 3;
    }
  }
  function ad() {
    if (Zt === 4 || Zt === 3) {
      Zt = 0, x0();
      var t = Se, l = Aa, e = Oa, a = Lo;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? Zt = 5 : (Zt = 0, Aa = Se = null, ud(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (u === 0 && (be = null), bi(e), l = l.stateNode, cl && typeof cl.onCommitFiberRoot == "function")
        try {
          cl.onCommitFiberRoot(
            Ca,
            l,
            void 0,
            (l.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        l = O.T, u = q.p, q.p = 2, O.T = null;
        try {
          for (var n = t.onRecoverableError, i = 0; i < a.length; i++) {
            var f = a[i];
            n(f.value, {
              componentStack: f.stack
            });
          }
        } finally {
          O.T = l, q.p = u;
        }
      }
      (Oa & 3) !== 0 && Bn(), Yl(t), u = t.pendingLanes, (e & 4194090) !== 0 && (u & 42) !== 0 ? t === Fc ? Su++ : (Su = 0, Fc = t) : Su = 0, pu(0);
    }
  }
  function ud(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, Ia(l)));
  }
  function Bn(t) {
    return ld(), ed(), ad(), nd();
  }
  function nd() {
    if (Zt !== 5) return !1;
    var t = Se, l = $c;
    $c = 0;
    var e = bi(Oa), a = O.T, u = q.p;
    try {
      q.p = 32 > e ? 32 : e, O.T = null, e = Wc, Wc = null;
      var n = Se, i = Oa;
      if (Zt = 0, Aa = Se = null, Oa = 0, (yt & 6) !== 0) throw Error(r(331));
      var f = yt;
      if (yt |= 4, Zo(n.current), Xo(
        n,
        n.current,
        i,
        e
      ), yt = f, pu(0, !1), cl && typeof cl.onPostCommitFiberRoot == "function")
        try {
          cl.onPostCommitFiberRoot(Ca, n);
        } catch {
        }
      return !0;
    } finally {
      q.p = u, O.T = a, ud(t, l);
    }
  }
  function id(t, l, e) {
    l = pl(e, l), l = Dc(t.stateNode, l, 2), t = re(t, l, 2), t !== null && (Ba(t, 2), Yl(t));
  }
  function Tt(t, l, e) {
    if (t.tag === 3)
      id(t, t, e);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          id(
            l,
            t,
            e
          );
          break;
        } else if (l.tag === 1) {
          var a = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (be === null || !be.has(a))) {
            t = pl(e, t), e = ro(2), a = re(l, e, 2), a !== null && (so(
              e,
              a,
              l,
              t
            ), Ba(a, 2), Yl(a));
            break;
          }
        }
        l = l.return;
      }
  }
  function lf(t, l, e) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new a1();
      var u = /* @__PURE__ */ new Set();
      a.set(l, u);
    } else
      u = a.get(l), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(l, u));
    u.has(e) || (wc = !0, u.add(e), t = f1.bind(null, t, l, e), l.then(t, t));
  }
  function f1(t, l, e) {
    var a = t.pingCache;
    a !== null && a.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, Et === t && (it & e) === e && (Mt === 4 || Mt === 3 && (it & 62914560) === it && 300 > Ul() - kc ? (yt & 2) === 0 && _a(t, 0) : Kc |= e, Ea === it && (Ea = 0)), Yl(t);
  }
  function cd(t, l) {
    l === 0 && (l = er()), t = ca(t, l), t !== null && (Ba(t, l), Yl(t));
  }
  function r1(t) {
    var l = t.memoizedState, e = 0;
    l !== null && (e = l.retryLane), cd(t, e);
  }
  function s1(t, l) {
    var e = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode, u = t.memoizedState;
        u !== null && (e = u.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(l), cd(t, e);
  }
  function o1(t, l) {
    return yi(t, l);
  }
  var Gn = null, Ma = null, ef = !1, Xn = !1, af = !1, Ke = 0;
  function Yl(t) {
    t !== Ma && t.next === null && (Ma === null ? Gn = Ma = t : Ma = Ma.next = t), Xn = !0, ef || (ef = !0, h1());
  }
  function pu(t, l) {
    if (!af && Xn) {
      af = !0;
      do
        for (var e = !1, a = Gn; a !== null; ) {
          if (t !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = a.suspendedLanes, f = a.pingedLanes;
              n = (1 << 31 - fl(42 | t) + 1) - 1, n &= u & ~(i & ~f), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (e = !0, od(a, n));
          } else
            n = it, n = Lu(
              a,
              a === Et ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Ya(a, n) || (e = !0, od(a, n));
          a = a.next;
        }
      while (e);
      af = !1;
    }
  }
  function d1() {
    fd();
  }
  function fd() {
    Xn = ef = !1;
    var t = 0;
    Ke !== 0 && (T1() && (t = Ke), Ke = 0);
    for (var l = Ul(), e = null, a = Gn; a !== null; ) {
      var u = a.next, n = rd(a, l);
      n === 0 ? (a.next = null, e === null ? Gn = u : e.next = u, u === null && (Ma = e)) : (e = a, (t !== 0 || (n & 3) !== 0) && (Xn = !0)), a = u;
    }
    pu(t);
  }
  function rd(t, l) {
    for (var e = t.suspendedLanes, a = t.pingedLanes, u = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - fl(n), f = 1 << i, o = u[i];
      o === -1 ? ((f & e) === 0 || (f & a) !== 0) && (u[i] = G0(f, l)) : o <= l && (t.expiredLanes |= f), n &= ~f;
    }
    if (l = Et, e = it, e = Lu(
      t,
      t === l ? e : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, e === 0 || t === l && (vt === 2 || vt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && vi(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((e & 3) === 0 || Ya(t, e)) {
      if (l = e & -e, l === t.callbackPriority) return l;
      switch (a !== null && vi(a), bi(e)) {
        case 2:
        case 8:
          e = If;
          break;
        case 32:
          e = Qu;
          break;
        case 268435456:
          e = tr;
          break;
        default:
          e = Qu;
      }
      return a = sd.bind(null, t), e = yi(e, a), t.callbackPriority = l, t.callbackNode = e, l;
    }
    return a !== null && a !== null && vi(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function sd(t, l) {
    if (Zt !== 0 && Zt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var e = t.callbackNode;
    if (Bn() && t.callbackNode !== e)
      return null;
    var a = it;
    return a = Lu(
      t,
      t === Et ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (Ko(t, a, l), rd(t, Ul()), t.callbackNode != null && t.callbackNode === e ? sd.bind(null, t) : null);
  }
  function od(t, l) {
    if (Bn()) return null;
    Ko(t, l, !0);
  }
  function h1() {
    A1(function() {
      (yt & 6) !== 0 ? yi(
        Pf,
        d1
      ) : fd();
    });
  }
  function uf() {
    return Ke === 0 && (Ke = lr()), Ke;
  }
  function dd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : $u("" + t);
  }
  function hd(t, l) {
    var e = l.ownerDocument.createElement("input");
    return e.name = l.name, e.value = l.value, t.id && e.setAttribute("form", t.id), l.parentNode.insertBefore(e, l), t = new FormData(t), e.parentNode.removeChild(e), t;
  }
  function y1(t, l, e, a, u) {
    if (l === "submit" && e && e.stateNode === u) {
      var n = dd(
        (u[tl] || null).action
      ), i = a.submitter;
      i && (l = (l = i[tl] || null) ? dd(l.formAction) : i.getAttribute("formAction"), l !== null && (n = l, i = null));
      var f = new Iu(
        "action",
        "action",
        null,
        a,
        u
      );
      t.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Ke !== 0) {
                  var o = i ? hd(u, i) : new FormData(u);
                  Oc(
                    e,
                    {
                      pending: !0,
                      data: o,
                      method: u.method,
                      action: n
                    },
                    null,
                    o
                  );
                }
              } else
                typeof n == "function" && (f.preventDefault(), o = i ? hd(u, i) : new FormData(u), Oc(
                  e,
                  {
                    pending: !0,
                    data: o,
                    method: u.method,
                    action: n
                  },
                  n,
                  o
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var nf = 0; nf < Vi.length; nf++) {
    var cf = Vi[nf], v1 = cf.toLowerCase(), m1 = cf[0].toUpperCase() + cf.slice(1);
    Rl(
      v1,
      "on" + m1
    );
  }
  Rl(wr, "onAnimationEnd"), Rl(Kr, "onAnimationIteration"), Rl(Jr, "onAnimationStart"), Rl("dblclick", "onDoubleClick"), Rl("focusin", "onFocus"), Rl("focusout", "onBlur"), Rl(Hh, "onTransitionRun"), Rl(qh, "onTransitionStart"), Rl(Ch, "onTransitionCancel"), Rl(kr, "onTransitionEnd"), Fe("onMouseEnter", ["mouseout", "mouseover"]), Fe("onMouseLeave", ["mouseout", "mouseover"]), Fe("onPointerEnter", ["pointerout", "pointerover"]), Fe("onPointerLeave", ["pointerout", "pointerover"]), xe(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), xe(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), xe("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), xe(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), xe(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), xe(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Tu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), g1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tu)
  );
  function yd(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var a = t[e], u = a.event;
      a = a.listeners;
      t: {
        var n = void 0;
        if (l)
          for (var i = a.length - 1; 0 <= i; i--) {
            var f = a[i], o = f.instance, g = f.currentTarget;
            if (f = f.listener, o !== n && u.isPropagationStopped())
              break t;
            n = f, u.currentTarget = g;
            try {
              n(u);
            } catch (A) {
              zn(A);
            }
            u.currentTarget = null, n = o;
          }
        else
          for (i = 0; i < a.length; i++) {
            if (f = a[i], o = f.instance, g = f.currentTarget, f = f.listener, o !== n && u.isPropagationStopped())
              break t;
            n = f, u.currentTarget = g;
            try {
              n(u);
            } catch (A) {
              zn(A);
            }
            u.currentTarget = null, n = o;
          }
      }
    }
  }
  function nt(t, l) {
    var e = l[Si];
    e === void 0 && (e = l[Si] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    e.has(a) || (vd(l, t, 2, !1), e.add(a));
  }
  function ff(t, l, e) {
    var a = 0;
    l && (a |= 4), vd(
      e,
      t,
      a,
      l
    );
  }
  var jn = "_reactListening" + Math.random().toString(36).slice(2);
  function rf(t) {
    if (!t[jn]) {
      t[jn] = !0, cr.forEach(function(e) {
        e !== "selectionchange" && (g1.has(e) || ff(e, !1, t), ff(e, !0, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[jn] || (l[jn] = !0, ff("selectionchange", !1, l));
    }
  }
  function vd(t, l, e, a) {
    switch (Xd(l)) {
      case 2:
        var u = L1;
        break;
      case 8:
        u = w1;
        break;
      default:
        u = Af;
    }
    e = u.bind(
      null,
      l,
      e,
      t
    ), u = void 0, !xi || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (u = !0), a ? u !== void 0 ? t.addEventListener(l, e, {
      capture: !0,
      passive: u
    }) : t.addEventListener(l, e, !0) : u !== void 0 ? t.addEventListener(l, e, {
      passive: u
    }) : t.addEventListener(l, e, !1);
  }
  function sf(t, l, e, a, u) {
    var n = a;
    if ((l & 1) === 0 && (l & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var f = a.stateNode.containerInfo;
          if (f === u) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var o = i.tag;
              if ((o === 3 || o === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; f !== null; ) {
            if (i = ke(f), i === null) return;
            if (o = i.tag, o === 5 || o === 6 || o === 26 || o === 27) {
              a = n = i;
              continue t;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    Tr(function() {
      var g = n, A = Ri(e), z = [];
      t: {
        var S = $r.get(t);
        if (S !== void 0) {
          var T = Iu, k = t;
          switch (t) {
            case "keypress":
              if (Fu(e) === 0) break t;
            case "keydown":
            case "keyup":
              T = oh;
              break;
            case "focusin":
              k = "focus", T = qi;
              break;
            case "focusout":
              k = "blur", T = qi;
              break;
            case "beforeblur":
            case "afterblur":
              T = qi;
              break;
            case "click":
              if (e.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              T = Or;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              T = I0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              T = yh;
              break;
            case wr:
            case Kr:
            case Jr:
              T = eh;
              break;
            case kr:
              T = mh;
              break;
            case "scroll":
            case "scrollend":
              T = F0;
              break;
            case "wheel":
              T = bh;
              break;
            case "copy":
            case "cut":
            case "paste":
              T = uh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              T = zr;
              break;
            case "toggle":
            case "beforetoggle":
              T = ph;
          }
          var L = (l & 4) !== 0, St = !L && (t === "scroll" || t === "scrollend"), v = L ? S !== null ? S + "Capture" : null : S;
          L = [];
          for (var h = g, m; h !== null; ) {
            var _ = h;
            if (m = _.stateNode, _ = _.tag, _ !== 5 && _ !== 26 && _ !== 27 || m === null || v === null || (_ = ja(h, v), _ != null && L.push(
              Eu(h, _, m)
            )), St) break;
            h = h.return;
          }
          0 < L.length && (S = new T(
            S,
            k,
            null,
            e,
            A
          ), z.push({ event: S, listeners: L }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (S = t === "mouseover" || t === "pointerover", T = t === "mouseout" || t === "pointerout", S && e !== Mi && (k = e.relatedTarget || e.fromElement) && (ke(k) || k[Je]))
            break t;
          if ((T || S) && (S = A.window === A ? A : (S = A.ownerDocument) ? S.defaultView || S.parentWindow : window, T ? (k = e.relatedTarget || e.toElement, T = g, k = k ? ke(k) : null, k !== null && (St = E(k), L = k.tag, k !== St || L !== 5 && L !== 27 && L !== 6) && (k = null)) : (T = null, k = g), T !== k)) {
            if (L = Or, _ = "onMouseLeave", v = "onMouseEnter", h = "mouse", (t === "pointerout" || t === "pointerover") && (L = zr, _ = "onPointerLeave", v = "onPointerEnter", h = "pointer"), St = T == null ? S : Xa(T), m = k == null ? S : Xa(k), S = new L(
              _,
              h + "leave",
              T,
              e,
              A
            ), S.target = St, S.relatedTarget = m, _ = null, ke(A) === g && (L = new L(
              v,
              h + "enter",
              k,
              e,
              A
            ), L.target = m, L.relatedTarget = St, _ = L), St = _, T && k)
              l: {
                for (L = T, v = k, h = 0, m = L; m; m = Ra(m))
                  h++;
                for (m = 0, _ = v; _; _ = Ra(_))
                  m++;
                for (; 0 < h - m; )
                  L = Ra(L), h--;
                for (; 0 < m - h; )
                  v = Ra(v), m--;
                for (; h--; ) {
                  if (L === v || v !== null && L === v.alternate)
                    break l;
                  L = Ra(L), v = Ra(v);
                }
                L = null;
              }
            else L = null;
            T !== null && md(
              z,
              S,
              T,
              L,
              !1
            ), k !== null && St !== null && md(
              z,
              St,
              k,
              L,
              !0
            );
          }
        }
        t: {
          if (S = g ? Xa(g) : window, T = S.nodeName && S.nodeName.toLowerCase(), T === "select" || T === "input" && S.type === "file")
            var G = qr;
          else if (Nr(S))
            if (Cr)
              G = xh;
            else {
              G = Rh;
              var at = Mh;
            }
          else
            T = S.nodeName, !T || T.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? g && zi(g.elementType) && (G = qr) : G = Dh;
          if (G && (G = G(t, g))) {
            Hr(
              z,
              G,
              e,
              A
            );
            break t;
          }
          at && at(t, S, g), t === "focusout" && g && S.type === "number" && g.memoizedProps.value != null && _i(S, "number", S.value);
        }
        switch (at = g ? Xa(g) : window, t) {
          case "focusin":
            (Nr(at) || at.contentEditable === "true") && (ua = at, ji = g, ka = null);
            break;
          case "focusout":
            ka = ji = ua = null;
            break;
          case "mousedown":
            Qi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Qi = !1, Vr(z, e, A);
            break;
          case "selectionchange":
            if (Nh) break;
          case "keydown":
          case "keyup":
            Vr(z, e, A);
        }
        var j;
        if (Yi)
          t: {
            switch (t) {
              case "compositionstart":
                var w = "onCompositionStart";
                break t;
              case "compositionend":
                w = "onCompositionEnd";
                break t;
              case "compositionupdate":
                w = "onCompositionUpdate";
                break t;
            }
            w = void 0;
          }
        else
          aa ? xr(t, e) && (w = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (w = "onCompositionStart");
        w && (Mr && e.locale !== "ko" && (aa || w !== "onCompositionStart" ? w === "onCompositionEnd" && aa && (j = Er()) : (ne = A, Ui = "value" in ne ? ne.value : ne.textContent, aa = !0)), at = Qn(g, w), 0 < at.length && (w = new _r(
          w,
          t,
          null,
          e,
          A
        ), z.push({ event: w, listeners: at }), j ? w.data = j : (j = Ur(e), j !== null && (w.data = j)))), (j = Eh ? Ah(t, e) : Oh(t, e)) && (w = Qn(g, "onBeforeInput"), 0 < w.length && (at = new _r(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          A
        ), z.push({
          event: at,
          listeners: w
        }), at.data = j)), y1(
          z,
          t,
          g,
          e,
          A
        );
      }
      yd(z, l);
    });
  }
  function Eu(t, l, e) {
    return {
      instance: t,
      listener: l,
      currentTarget: e
    };
  }
  function Qn(t, l) {
    for (var e = l + "Capture", a = []; t !== null; ) {
      var u = t, n = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = ja(t, e), u != null && a.unshift(
        Eu(t, u, n)
      ), u = ja(t, l), u != null && a.push(
        Eu(t, u, n)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function Ra(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function md(t, l, e, a, u) {
    for (var n = l._reactName, i = []; e !== null && e !== a; ) {
      var f = e, o = f.alternate, g = f.stateNode;
      if (f = f.tag, o !== null && o === a) break;
      f !== 5 && f !== 26 && f !== 27 || g === null || (o = g, u ? (g = ja(e, n), g != null && i.unshift(
        Eu(e, g, o)
      )) : u || (g = ja(e, n), g != null && i.push(
        Eu(e, g, o)
      ))), e = e.return;
    }
    i.length !== 0 && t.push({ event: l, listeners: i });
  }
  var b1 = /\r\n?/g, S1 = /\u0000|\uFFFD/g;
  function gd(t) {
    return (typeof t == "string" ? t : "" + t).replace(b1, `
`).replace(S1, "");
  }
  function bd(t, l) {
    return l = gd(l), gd(t) === l;
  }
  function Zn() {
  }
  function bt(t, l, e, a, u, n) {
    switch (e) {
      case "children":
        typeof a == "string" ? l === "body" || l === "textarea" && a === "" || ta(t, a) : (typeof a == "number" || typeof a == "bigint") && l !== "body" && ta(t, "" + a);
        break;
      case "className":
        Ku(t, "class", a);
        break;
      case "tabIndex":
        Ku(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ku(t, e, a);
        break;
      case "style":
        Sr(t, a, n);
        break;
      case "data":
        if (l !== "object") {
          Ku(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (l !== "a" || e !== "href")) {
          t.removeAttribute(e);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        a = $u("" + a), t.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (e === "formAction" ? (l !== "input" && bt(t, l, "name", u.name, u, null), bt(
            t,
            l,
            "formEncType",
            u.formEncType,
            u,
            null
          ), bt(
            t,
            l,
            "formMethod",
            u.formMethod,
            u,
            null
          ), bt(
            t,
            l,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (bt(t, l, "encType", u.encType, u, null), bt(t, l, "method", u.method, u, null), bt(t, l, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        a = $u("" + a), t.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (t.onclick = Zn);
        break;
      case "onScroll":
        a != null && nt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && nt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (e = a.__html, e != null) {
            if (u.children != null) throw Error(r(60));
            t.innerHTML = e;
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
        e = $u("" + a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          e
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
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "" + a) : t.removeAttribute(e);
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
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "") : t.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, a) : t.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(e, a) : t.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(e) : t.setAttribute(e, a);
        break;
      case "popover":
        nt("beforetoggle", t), nt("toggle", t), wu(t, "popover", a);
        break;
      case "xlinkActuate":
        jl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        jl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        jl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        jl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        jl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        jl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        jl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        jl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        jl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        wu(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = $0.get(e) || e, wu(t, e, a));
    }
  }
  function of(t, l, e, a, u, n) {
    switch (e) {
      case "style":
        Sr(t, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (e = a.__html, e != null) {
            if (u.children != null) throw Error(r(60));
            t.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string" ? ta(t, a) : (typeof a == "number" || typeof a == "bigint") && ta(t, "" + a);
        break;
      case "onScroll":
        a != null && nt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && nt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Zn);
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
        if (!fr.hasOwnProperty(e))
          t: {
            if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), l = e.slice(2, u ? e.length - 7 : void 0), n = t[tl] || null, n = n != null ? n[e] : null, typeof n == "function" && t.removeEventListener(l, n, u), typeof a == "function")) {
              typeof n != "function" && n !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(l, a, u);
              break t;
            }
            e in t ? t[e] = a : a === !0 ? t.setAttribute(e, "") : wu(t, e, a);
          }
    }
  }
  function Vt(t, l, e) {
    switch (l) {
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
        nt("error", t), nt("load", t);
        var a = !1, u = !1, n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var i = e[n];
            if (i != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, l));
                default:
                  bt(t, l, n, i, e, null);
              }
          }
        u && bt(t, l, "srcSet", e.srcSet, e, null), a && bt(t, l, "src", e.src, e, null);
        return;
      case "input":
        nt("invalid", t);
        var f = n = i = u = null, o = null, g = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var A = e[a];
            if (A != null)
              switch (a) {
                case "name":
                  u = A;
                  break;
                case "type":
                  i = A;
                  break;
                case "checked":
                  o = A;
                  break;
                case "defaultChecked":
                  g = A;
                  break;
                case "value":
                  n = A;
                  break;
                case "defaultValue":
                  f = A;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (A != null)
                    throw Error(r(137, l));
                  break;
                default:
                  bt(t, l, a, A, e, null);
              }
          }
        vr(
          t,
          n,
          f,
          o,
          g,
          i,
          u,
          !1
        ), Ju(t);
        return;
      case "select":
        nt("invalid", t), a = i = n = null;
        for (u in e)
          if (e.hasOwnProperty(u) && (f = e[u], f != null))
            switch (u) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                i = f;
                break;
              case "multiple":
                a = f;
              default:
                bt(t, l, u, f, e, null);
            }
        l = n, e = i, t.multiple = !!a, l != null ? Ie(t, !!a, l, !1) : e != null && Ie(t, !!a, e, !0);
        return;
      case "textarea":
        nt("invalid", t), n = u = a = null;
        for (i in e)
          if (e.hasOwnProperty(i) && (f = e[i], f != null))
            switch (i) {
              case "value":
                a = f;
                break;
              case "defaultValue":
                u = f;
                break;
              case "children":
                n = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(r(91));
                break;
              default:
                bt(t, l, i, f, e, null);
            }
        gr(t, a, u, n), Ju(t);
        return;
      case "option":
        for (o in e)
          if (e.hasOwnProperty(o) && (a = e[o], a != null))
            switch (o) {
              case "selected":
                t.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                bt(t, l, o, a, e, null);
            }
        return;
      case "dialog":
        nt("beforetoggle", t), nt("toggle", t), nt("cancel", t), nt("close", t);
        break;
      case "iframe":
      case "object":
        nt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Tu.length; a++)
          nt(Tu[a], t);
        break;
      case "image":
        nt("error", t), nt("load", t);
        break;
      case "details":
        nt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        nt("error", t), nt("load", t);
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
        for (g in e)
          if (e.hasOwnProperty(g) && (a = e[g], a != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, l));
              default:
                bt(t, l, g, a, e, null);
            }
        return;
      default:
        if (zi(l)) {
          for (A in e)
            e.hasOwnProperty(A) && (a = e[A], a !== void 0 && of(
              t,
              l,
              A,
              a,
              e,
              void 0
            ));
          return;
        }
    }
    for (f in e)
      e.hasOwnProperty(f) && (a = e[f], a != null && bt(t, l, f, a, e, null));
  }
  function p1(t, l, e, a) {
    switch (l) {
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
        var u = null, n = null, i = null, f = null, o = null, g = null, A = null;
        for (T in e) {
          var z = e[T];
          if (e.hasOwnProperty(T) && z != null)
            switch (T) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                o = z;
              default:
                a.hasOwnProperty(T) || bt(t, l, T, null, a, z);
            }
        }
        for (var S in a) {
          var T = a[S];
          if (z = e[S], a.hasOwnProperty(S) && (T != null || z != null))
            switch (S) {
              case "type":
                n = T;
                break;
              case "name":
                u = T;
                break;
              case "checked":
                g = T;
                break;
              case "defaultChecked":
                A = T;
                break;
              case "value":
                i = T;
                break;
              case "defaultValue":
                f = T;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null)
                  throw Error(r(137, l));
                break;
              default:
                T !== z && bt(
                  t,
                  l,
                  S,
                  T,
                  a,
                  z
                );
            }
        }
        Oi(
          t,
          i,
          f,
          o,
          g,
          A,
          n,
          u
        );
        return;
      case "select":
        T = i = f = S = null;
        for (n in e)
          if (o = e[n], e.hasOwnProperty(n) && o != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                T = o;
              default:
                a.hasOwnProperty(n) || bt(
                  t,
                  l,
                  n,
                  null,
                  a,
                  o
                );
            }
        for (u in a)
          if (n = a[u], o = e[u], a.hasOwnProperty(u) && (n != null || o != null))
            switch (u) {
              case "value":
                S = n;
                break;
              case "defaultValue":
                f = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== o && bt(
                  t,
                  l,
                  u,
                  n,
                  a,
                  o
                );
            }
        l = f, e = i, a = T, S != null ? Ie(t, !!e, S, !1) : !!a != !!e && (l != null ? Ie(t, !!e, l, !0) : Ie(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        T = S = null;
        for (f in e)
          if (u = e[f], e.hasOwnProperty(f) && u != null && !a.hasOwnProperty(f))
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                bt(t, l, f, null, a, u);
            }
        for (i in a)
          if (u = a[i], n = e[i], a.hasOwnProperty(i) && (u != null || n != null))
            switch (i) {
              case "value":
                S = u;
                break;
              case "defaultValue":
                T = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== n && bt(t, l, i, u, a, n);
            }
        mr(t, S, T);
        return;
      case "option":
        for (var k in e)
          if (S = e[k], e.hasOwnProperty(k) && S != null && !a.hasOwnProperty(k))
            switch (k) {
              case "selected":
                t.selected = !1;
                break;
              default:
                bt(
                  t,
                  l,
                  k,
                  null,
                  a,
                  S
                );
            }
        for (o in a)
          if (S = a[o], T = e[o], a.hasOwnProperty(o) && S !== T && (S != null || T != null))
            switch (o) {
              case "selected":
                t.selected = S && typeof S != "function" && typeof S != "symbol";
                break;
              default:
                bt(
                  t,
                  l,
                  o,
                  S,
                  a,
                  T
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
        for (var L in e)
          S = e[L], e.hasOwnProperty(L) && S != null && !a.hasOwnProperty(L) && bt(t, l, L, null, a, S);
        for (g in a)
          if (S = a[g], T = e[g], a.hasOwnProperty(g) && S !== T && (S != null || T != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(r(137, l));
                break;
              default:
                bt(
                  t,
                  l,
                  g,
                  S,
                  a,
                  T
                );
            }
        return;
      default:
        if (zi(l)) {
          for (var St in e)
            S = e[St], e.hasOwnProperty(St) && S !== void 0 && !a.hasOwnProperty(St) && of(
              t,
              l,
              St,
              void 0,
              a,
              S
            );
          for (A in a)
            S = a[A], T = e[A], !a.hasOwnProperty(A) || S === T || S === void 0 && T === void 0 || of(
              t,
              l,
              A,
              S,
              a,
              T
            );
          return;
        }
    }
    for (var v in e)
      S = e[v], e.hasOwnProperty(v) && S != null && !a.hasOwnProperty(v) && bt(t, l, v, null, a, S);
    for (z in a)
      S = a[z], T = e[z], !a.hasOwnProperty(z) || S === T || S == null && T == null || bt(t, l, z, S, a, T);
  }
  var df = null, hf = null;
  function Vn(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Sd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function pd(t, l) {
    if (t === 0)
      switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && l === "foreignObject" ? 0 : t;
  }
  function yf(t, l) {
    return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var vf = null;
  function T1() {
    var t = window.event;
    return t && t.type === "popstate" ? t === vf ? !1 : (vf = t, !0) : (vf = null, !1);
  }
  var Td = typeof setTimeout == "function" ? setTimeout : void 0, E1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Ed = typeof Promise == "function" ? Promise : void 0, A1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ed < "u" ? function(t) {
    return Ed.resolve(null).then(t).catch(O1);
  } : Td;
  function O1(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Te(t) {
    return t === "head";
  }
  function Ad(t, l) {
    var e = l, a = 0, u = 0;
    do {
      var n = e.nextSibling;
      if (t.removeChild(e), n && n.nodeType === 8)
        if (e = n.data, e === "/$") {
          if (0 < a && 8 > a) {
            e = a;
            var i = t.ownerDocument;
            if (e & 1 && Au(i.documentElement), e & 2 && Au(i.body), e & 4)
              for (e = i.head, Au(e), i = e.firstChild; i; ) {
                var f = i.nextSibling, o = i.nodeName;
                i[Ga] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && i.rel.toLowerCase() === "stylesheet" || e.removeChild(i), i = f;
              }
          }
          if (u === 0) {
            t.removeChild(n), Uu(l);
            return;
          }
          u--;
        } else
          e === "$" || e === "$?" || e === "$!" ? u++ : a = e.charCodeAt(0) - 48;
      else a = 0;
      e = n;
    } while (e);
    Uu(l);
  }
  function mf(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (l = l.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          mf(e), pi(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(e);
    }
  }
  function _1(t, l, e, a) {
    for (; t.nodeType === 1; ) {
      var u = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[Ga])
          switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (n = t.getAttribute("rel"), n === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (n !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (n = t.getAttribute("src"), (n !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (l === "input" && t.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === n)
          return t;
      } else return t;
      if (t = xl(t.nextSibling), t === null) break;
    }
    return null;
  }
  function z1(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = xl(t.nextSibling), t === null)) return null;
    return t;
  }
  function gf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete";
  }
  function M1(t, l) {
    var e = t.ownerDocument;
    if (t.data !== "$?" || e.readyState === "complete")
      l();
    else {
      var a = function() {
        l(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function xl(t) {
    for (; t != null; t = t.nextSibling) {
      var l = t.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (l = t.data, l === "$" || l === "$!" || l === "$?" || l === "F!" || l === "F")
          break;
        if (l === "/$") return null;
      }
    }
    return t;
  }
  var bf = null;
  function Od(t) {
    t = t.previousSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "$" || e === "$!" || e === "$?") {
          if (l === 0) return t;
          l--;
        } else e === "/$" && l++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function _d(t, l, e) {
    switch (l = Vn(e), t) {
      case "html":
        if (t = l.documentElement, !t) throw Error(r(452));
        return t;
      case "head":
        if (t = l.head, !t) throw Error(r(453));
        return t;
      case "body":
        if (t = l.body, !t) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function Au(t) {
    for (var l = t.attributes; l.length; )
      t.removeAttributeNode(l[0]);
    pi(t);
  }
  var zl = /* @__PURE__ */ new Map(), zd = /* @__PURE__ */ new Set();
  function Ln(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var te = q.d;
  q.d = {
    f: R1,
    r: D1,
    D: x1,
    C: U1,
    L: N1,
    m: H1,
    X: C1,
    S: q1,
    M: Y1
  };
  function R1() {
    var t = te.f(), l = Cn();
    return t || l;
  }
  function D1(t) {
    var l = $e(t);
    l !== null && l.tag === 5 && l.type === "form" ? ws(l) : te.r(t);
  }
  var Da = typeof document > "u" ? null : document;
  function Md(t, l, e) {
    var a = Da;
    if (a && typeof l == "string" && l) {
      var u = Sl(l);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), zd.has(u) || (zd.add(u), t = { rel: t, crossOrigin: e, href: l }, a.querySelector(u) === null && (l = a.createElement("link"), Vt(l, "link", t), Yt(l), a.head.appendChild(l)));
    }
  }
  function x1(t) {
    te.D(t), Md("dns-prefetch", t, null);
  }
  function U1(t, l) {
    te.C(t, l), Md("preconnect", t, l);
  }
  function N1(t, l, e) {
    te.L(t, l, e);
    var a = Da;
    if (a && t && l) {
      var u = 'link[rel="preload"][as="' + Sl(l) + '"]';
      l === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + Sl(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (u += '[imagesizes="' + Sl(
        e.imageSizes
      ) + '"]')) : u += '[href="' + Sl(t) + '"]';
      var n = u;
      switch (l) {
        case "style":
          n = xa(t);
          break;
        case "script":
          n = Ua(t);
      }
      zl.has(n) || (t = U(
        {
          rel: "preload",
          href: l === "image" && e && e.imageSrcSet ? void 0 : t,
          as: l
        },
        e
      ), zl.set(n, t), a.querySelector(u) !== null || l === "style" && a.querySelector(Ou(n)) || l === "script" && a.querySelector(_u(n)) || (l = a.createElement("link"), Vt(l, "link", t), Yt(l), a.head.appendChild(l)));
    }
  }
  function H1(t, l) {
    te.m(t, l);
    var e = Da;
    if (e && t) {
      var a = l && typeof l.as == "string" ? l.as : "script", u = 'link[rel="modulepreload"][as="' + Sl(a) + '"][href="' + Sl(t) + '"]', n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ua(t);
      }
      if (!zl.has(n) && (t = U({ rel: "modulepreload", href: t }, l), zl.set(n, t), e.querySelector(u) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(_u(n)))
              return;
        }
        a = e.createElement("link"), Vt(a, "link", t), Yt(a), e.head.appendChild(a);
      }
    }
  }
  function q1(t, l, e) {
    te.S(t, l, e);
    var a = Da;
    if (a && t) {
      var u = We(a).hoistableStyles, n = xa(t);
      l = l || "default";
      var i = u.get(n);
      if (!i) {
        var f = { loading: 0, preload: null };
        if (i = a.querySelector(
          Ou(n)
        ))
          f.loading = 5;
        else {
          t = U(
            { rel: "stylesheet", href: t, "data-precedence": l },
            e
          ), (e = zl.get(n)) && Sf(t, e);
          var o = i = a.createElement("link");
          Yt(o), Vt(o, "link", t), o._p = new Promise(function(g, A) {
            o.onload = g, o.onerror = A;
          }), o.addEventListener("load", function() {
            f.loading |= 1;
          }), o.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, wn(i, l, a);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: f
        }, u.set(n, i);
      }
    }
  }
  function C1(t, l) {
    te.X(t, l);
    var e = Da;
    if (e && t) {
      var a = We(e).hoistableScripts, u = Ua(t), n = a.get(u);
      n || (n = e.querySelector(_u(u)), n || (t = U({ src: t, async: !0 }, l), (l = zl.get(u)) && pf(t, l), n = e.createElement("script"), Yt(n), Vt(n, "link", t), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n));
    }
  }
  function Y1(t, l) {
    te.M(t, l);
    var e = Da;
    if (e && t) {
      var a = We(e).hoistableScripts, u = Ua(t), n = a.get(u);
      n || (n = e.querySelector(_u(u)), n || (t = U({ src: t, async: !0, type: "module" }, l), (l = zl.get(u)) && pf(t, l), n = e.createElement("script"), Yt(n), Vt(n, "link", t), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n));
    }
  }
  function Rd(t, l, e, a) {
    var u = (u = F.current) ? Ln(u) : null;
    if (!u) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (l = xa(e.href), e = We(
          u
        ).hoistableStyles, a = e.get(l), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          t = xa(e.href);
          var n = We(
            u
          ).hoistableStyles, i = n.get(t);
          if (i || (u = u.ownerDocument || u, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(t, i), (n = u.querySelector(
            Ou(t)
          )) && !n._p && (i.instance = n, i.state.loading = 5), zl.has(t) || (e = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, zl.set(t, e), n || B1(
            u,
            t,
            e,
            i.state
          ))), l && a === null)
            throw Error(r(528, ""));
          return i;
        }
        if (l && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = Ua(e), e = We(
          u
        ).hoistableScripts, a = e.get(l), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, t));
    }
  }
  function xa(t) {
    return 'href="' + Sl(t) + '"';
  }
  function Ou(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Dd(t) {
    return U({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function B1(t, l, e, a) {
    t.querySelector('link[rel="preload"][as="style"][' + l + "]") ? a.loading = 1 : (l = t.createElement("link"), a.preload = l, l.addEventListener("load", function() {
      return a.loading |= 1;
    }), l.addEventListener("error", function() {
      return a.loading |= 2;
    }), Vt(l, "link", e), Yt(l), t.head.appendChild(l));
  }
  function Ua(t) {
    return '[src="' + Sl(t) + '"]';
  }
  function _u(t) {
    return "script[async]" + t;
  }
  function xd(t, l, e) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + Sl(e.href) + '"]'
          );
          if (a)
            return l.instance = a, Yt(a), a;
          var u = U({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), Yt(a), Vt(a, "style", u), wn(a, e.precedence, t), l.instance = a;
        case "stylesheet":
          u = xa(e.href);
          var n = t.querySelector(
            Ou(u)
          );
          if (n)
            return l.state.loading |= 4, l.instance = n, Yt(n), n;
          a = Dd(e), (u = zl.get(u)) && Sf(a, u), n = (t.ownerDocument || t).createElement("link"), Yt(n);
          var i = n;
          return i._p = new Promise(function(f, o) {
            i.onload = f, i.onerror = o;
          }), Vt(n, "link", a), l.state.loading |= 4, wn(n, e.precedence, t), l.instance = n;
        case "script":
          return n = Ua(e.src), (u = t.querySelector(
            _u(n)
          )) ? (l.instance = u, Yt(u), u) : (a = e, (u = zl.get(n)) && (a = U({}, e), pf(a, u)), t = t.ownerDocument || t, u = t.createElement("script"), Yt(u), Vt(u, "link", a), t.head.appendChild(u), l.instance = u);
        case "void":
          return null;
        default:
          throw Error(r(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (a = l.instance, l.state.loading |= 4, wn(a, e.precedence, t));
    return l.instance;
  }
  function wn(t, l, e) {
    for (var a = e.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = a.length ? a[a.length - 1] : null, n = u, i = 0; i < a.length; i++) {
      var f = a[i];
      if (f.dataset.precedence === l) n = f;
      else if (n !== u) break;
    }
    n ? n.parentNode.insertBefore(t, n.nextSibling) : (l = e.nodeType === 9 ? e.head : e, l.insertBefore(t, l.firstChild));
  }
  function Sf(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title);
  }
  function pf(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
  }
  var Kn = null;
  function Ud(t, l, e) {
    if (Kn === null) {
      var a = /* @__PURE__ */ new Map(), u = Kn = /* @__PURE__ */ new Map();
      u.set(e, a);
    } else
      u = Kn, a = u.get(e), a || (a = /* @__PURE__ */ new Map(), u.set(e, a));
    if (a.has(t)) return a;
    for (a.set(t, null), e = e.getElementsByTagName(t), u = 0; u < e.length; u++) {
      var n = e[u];
      if (!(n[Ga] || n[Jt] || t === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = n.getAttribute(l) || "";
        i = t + i;
        var f = a.get(i);
        f ? f.push(n) : a.set(i, [n]);
      }
    }
    return a;
  }
  function Nd(t, l, e) {
    t = t.ownerDocument || t, t.head.insertBefore(
      e,
      l === "title" ? t.querySelector("head > title") : null
    );
  }
  function G1(t, l, e) {
    if (e === 1 || l.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "")
          break;
        return !0;
      case "link":
        if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError)
          break;
        switch (l.rel) {
          case "stylesheet":
            return t = l.disabled, typeof l.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string")
          return !0;
    }
    return !1;
  }
  function Hd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var zu = null;
  function X1() {
  }
  function j1(t, l, e) {
    if (zu === null) throw Error(r(475));
    var a = zu;
    if (l.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var u = xa(e.href), n = t.querySelector(
          Ou(u)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (a.count++, a = Jn.bind(a), t.then(a, a)), l.state.loading |= 4, l.instance = n, Yt(n);
          return;
        }
        n = t.ownerDocument || t, e = Dd(e), (u = zl.get(u)) && Sf(e, u), n = n.createElement("link"), Yt(n);
        var i = n;
        i._p = new Promise(function(f, o) {
          i.onload = f, i.onerror = o;
        }), Vt(n, "link", e), l.instance = n;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (a.count++, l = Jn.bind(a), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  function Q1() {
    if (zu === null) throw Error(r(475));
    var t = zu;
    return t.stylesheets && t.count === 0 && Tf(t, t.stylesheets), 0 < t.count ? function(l) {
      var e = setTimeout(function() {
        if (t.stylesheets && Tf(t, t.stylesheets), t.unsuspend) {
          var a = t.unsuspend;
          t.unsuspend = null, a();
        }
      }, 6e4);
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(e);
      };
    } : null;
  }
  function Jn() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Tf(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var kn = null;
  function Tf(t, l) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, kn = /* @__PURE__ */ new Map(), l.forEach(Z1, t), kn = null, Jn.call(t));
  }
  function Z1(t, l) {
    if (!(l.state.loading & 4)) {
      var e = kn.get(t);
      if (e) var a = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), kn.set(t, e);
        for (var u = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < u.length; n++) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), a = i);
        }
        a && e.set(null, a);
      }
      u = l.instance, i = u.getAttribute("data-precedence"), n = e.get(i) || a, n === a && e.set(null, u), e.set(i, u), this.count++, a = Jn.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), n ? n.parentNode.insertBefore(u, n.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), l.state.loading |= 4;
    }
  }
  var Mu = {
    $$typeof: J,
    Provider: null,
    Consumer: null,
    _currentValue: K,
    _currentValue2: K,
    _threadCount: 0
  };
  function V1(t, l, e, a, u, n, i, f) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = mi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mi(0), this.hiddenUpdates = mi(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function qd(t, l, e, a, u, n, i, f, o, g, A, z) {
    return t = new V1(
      t,
      l,
      e,
      i,
      f,
      o,
      g,
      z
    ), l = 1, n === !0 && (l |= 24), n = sl(3, null, null, l), t.current = n, n.stateNode = t, l = lc(), l.refCount++, t.pooledCache = l, l.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: l
    }, nc(n), t;
  }
  function Cd(t) {
    return t ? (t = fa, t) : fa;
  }
  function Yd(t, l, e, a, u, n) {
    u = Cd(u), a.context === null ? a.context = u : a.pendingContext = u, a = fe(l), a.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = re(t, a, l), e !== null && (vl(e, t, l), au(e, t, l));
  }
  function Bd(t, l) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function Ef(t, l) {
    Bd(t, l), (t = t.alternate) && Bd(t, l);
  }
  function Gd(t) {
    if (t.tag === 13) {
      var l = ca(t, 67108864);
      l !== null && vl(l, t, 67108864), Ef(t, 67108864);
    }
  }
  var $n = !0;
  function L1(t, l, e, a) {
    var u = O.T;
    O.T = null;
    var n = q.p;
    try {
      q.p = 2, Af(t, l, e, a);
    } finally {
      q.p = n, O.T = u;
    }
  }
  function w1(t, l, e, a) {
    var u = O.T;
    O.T = null;
    var n = q.p;
    try {
      q.p = 8, Af(t, l, e, a);
    } finally {
      q.p = n, O.T = u;
    }
  }
  function Af(t, l, e, a) {
    if ($n) {
      var u = Of(a);
      if (u === null)
        sf(
          t,
          l,
          a,
          Wn,
          e
        ), jd(t, a);
      else if (J1(
        u,
        t,
        l,
        e,
        a
      ))
        a.stopPropagation();
      else if (jd(t, a), l & 4 && -1 < K1.indexOf(t)) {
        for (; u !== null; ) {
          var n = $e(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var i = De(n.pendingLanes);
                  if (i !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; i; ) {
                      var o = 1 << 31 - fl(i);
                      f.entanglements[1] |= o, i &= ~o;
                    }
                    Yl(n), (yt & 6) === 0 && (Hn = Ul() + 500, pu(0));
                  }
                }
                break;
              case 13:
                f = ca(n, 2), f !== null && vl(f, n, 2), Cn(), Ef(n, 2);
            }
          if (n = Of(a), n === null && sf(
            t,
            l,
            a,
            Wn,
            e
          ), n === u) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else
        sf(
          t,
          l,
          a,
          null,
          e
        );
    }
  }
  function Of(t) {
    return t = Ri(t), _f(t);
  }
  var Wn = null;
  function _f(t) {
    if (Wn = null, t = ke(t), t !== null) {
      var l = E(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (t = x(l), t !== null) return t;
          t = null;
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return Wn = t, null;
  }
  function Xd(t) {
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
        switch (U0()) {
          case Pf:
            return 2;
          case If:
            return 8;
          case Qu:
          case N0:
            return 32;
          case tr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var zf = !1, Ee = null, Ae = null, Oe = null, Ru = /* @__PURE__ */ new Map(), Du = /* @__PURE__ */ new Map(), _e = [], K1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function jd(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ee = null;
        break;
      case "dragenter":
      case "dragleave":
        Ae = null;
        break;
      case "mouseover":
      case "mouseout":
        Oe = null;
        break;
      case "pointerover":
      case "pointerout":
        Ru.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Du.delete(l.pointerId);
    }
  }
  function xu(t, l, e, a, u, n) {
    return t === null || t.nativeEvent !== n ? (t = {
      blockedOn: l,
      domEventName: e,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [u]
    }, l !== null && (l = $e(l), l !== null && Gd(l)), t) : (t.eventSystemFlags |= a, l = t.targetContainers, u !== null && l.indexOf(u) === -1 && l.push(u), t);
  }
  function J1(t, l, e, a, u) {
    switch (l) {
      case "focusin":
        return Ee = xu(
          Ee,
          t,
          l,
          e,
          a,
          u
        ), !0;
      case "dragenter":
        return Ae = xu(
          Ae,
          t,
          l,
          e,
          a,
          u
        ), !0;
      case "mouseover":
        return Oe = xu(
          Oe,
          t,
          l,
          e,
          a,
          u
        ), !0;
      case "pointerover":
        var n = u.pointerId;
        return Ru.set(
          n,
          xu(
            Ru.get(n) || null,
            t,
            l,
            e,
            a,
            u
          )
        ), !0;
      case "gotpointercapture":
        return n = u.pointerId, Du.set(
          n,
          xu(
            Du.get(n) || null,
            t,
            l,
            e,
            a,
            u
          )
        ), !0;
    }
    return !1;
  }
  function Qd(t) {
    var l = ke(t.target);
    if (l !== null) {
      var e = E(l);
      if (e !== null) {
        if (l = e.tag, l === 13) {
          if (l = x(e), l !== null) {
            t.blockedOn = l, j0(t.priority, function() {
              if (e.tag === 13) {
                var a = yl();
                a = gi(a);
                var u = ca(e, a);
                u !== null && vl(u, e, a), Ef(e, a);
              }
            });
            return;
          }
        } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Fn(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var e = Of(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var a = new e.constructor(
          e.type,
          e
        );
        Mi = a, e.target.dispatchEvent(a), Mi = null;
      } else
        return l = $e(e), l !== null && Gd(l), t.blockedOn = e, !1;
      l.shift();
    }
    return !0;
  }
  function Zd(t, l, e) {
    Fn(t) && e.delete(l);
  }
  function k1() {
    zf = !1, Ee !== null && Fn(Ee) && (Ee = null), Ae !== null && Fn(Ae) && (Ae = null), Oe !== null && Fn(Oe) && (Oe = null), Ru.forEach(Zd), Du.forEach(Zd);
  }
  function Pn(t, l) {
    t.blockedOn === l && (t.blockedOn = null, zf || (zf = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      k1
    )));
  }
  var In = null;
  function Vd(t) {
    In !== t && (In = t, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        In === t && (In = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l], a = t[l + 1], u = t[l + 2];
          if (typeof a != "function") {
            if (_f(a || e) === null)
              continue;
            break;
          }
          var n = $e(e);
          n !== null && (t.splice(l, 3), l -= 3, Oc(
            n,
            {
              pending: !0,
              data: u,
              method: e.method,
              action: a
            },
            a,
            u
          ));
        }
      }
    ));
  }
  function Uu(t) {
    function l(o) {
      return Pn(o, t);
    }
    Ee !== null && Pn(Ee, t), Ae !== null && Pn(Ae, t), Oe !== null && Pn(Oe, t), Ru.forEach(l), Du.forEach(l);
    for (var e = 0; e < _e.length; e++) {
      var a = _e[e];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < _e.length && (e = _e[0], e.blockedOn === null); )
      Qd(e), e.blockedOn === null && _e.shift();
    if (e = (t.ownerDocument || t).$$reactFormReplay, e != null)
      for (a = 0; a < e.length; a += 3) {
        var u = e[a], n = e[a + 1], i = u[tl] || null;
        if (typeof n == "function")
          i || Vd(e);
        else if (i) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (u = n, i = n[tl] || null)
              f = i.formAction;
            else if (_f(u) !== null) continue;
          } else f = i.action;
          typeof f == "function" ? e[a + 1] = f : (e.splice(a, 3), a -= 3), Vd(e);
        }
      }
  }
  function Mf(t) {
    this._internalRoot = t;
  }
  ti.prototype.render = Mf.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(r(409));
    var e = l.current, a = yl();
    Yd(e, a, t, l, null, null);
  }, ti.prototype.unmount = Mf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      Yd(t.current, 2, null, t, null, null), Cn(), l[Je] = null;
    }
  };
  function ti(t) {
    this._internalRoot = t;
  }
  ti.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var l = nr();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < _e.length && l !== 0 && l < _e[e].priority; e++) ;
      _e.splice(e, 0, t), e === 0 && Qd(t);
    }
  };
  var Ld = s.version;
  if (Ld !== "19.1.1")
    throw Error(
      r(
        527,
        Ld,
        "19.1.1"
      )
    );
  q.findDOMNode = function(t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = R(l), t = t !== null ? p(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var $1 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var li = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!li.isDisabled && li.supportsFiber)
      try {
        Ca = li.inject(
          $1
        ), cl = li;
      } catch {
      }
  }
  return qu.createRoot = function(t, l) {
    if (!b(t)) throw Error(r(299));
    var e = !1, a = "", u = no, n = io, i = co, f = null;
    return l != null && (l.unstable_strictMode === !0 && (e = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (n = l.onCaughtError), l.onRecoverableError !== void 0 && (i = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (f = l.unstable_transitionCallbacks)), l = qd(
      t,
      1,
      !1,
      null,
      null,
      e,
      a,
      u,
      n,
      i,
      f,
      null
    ), t[Je] = l.current, rf(t), new Mf(l);
  }, qu.hydrateRoot = function(t, l, e) {
    if (!b(t)) throw Error(r(299));
    var a = !1, u = "", n = no, i = io, f = co, o = null, g = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (o = e.unstable_transitionCallbacks), e.formState !== void 0 && (g = e.formState)), l = qd(
      t,
      1,
      !0,
      l,
      e ?? null,
      a,
      u,
      n,
      i,
      f,
      o,
      g
    ), l.context = Cd(null), e = l.current, a = yl(), a = gi(a), u = fe(a), u.callback = null, re(e, u, a), e = a, l.current.lanes = e, Ba(l, e), Yl(l), t[Je] = l.current, rf(t), new ti(l);
  }, qu.version = "19.1.1", qu;
}
var o0;
function $y() {
  if (o0) return Hf.exports;
  o0 = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (s) {
        console.error(s);
      }
  }
  return c(), Hf.exports = ky(), Hf.exports;
}
var Wy = $y(), d0 = function(s, y) {
  var r = arguments;
  if (y == null || !Xu.call(y, "css"))
    return ht.createElement.apply(void 0, r);
  var b = r.length, E = new Array(b);
  E[0] = Ff, E[1] = Wf(s, y);
  for (var x = 2; x < b; x++)
    E[x] = r[x];
  return ht.createElement.apply(null, E);
};
(function(c) {
  var s;
  s || (s = c.JSX || (c.JSX = {}));
})(d0 || (d0 = {}));
var Fy = /* @__PURE__ */ kf(function(c, s) {
  var y = c.styles, r = oi([y], void 0, ht.useContext($f)), b = ht.useRef();
  return n0(function() {
    var E = s.key + "-global", x = new s.sheet.constructor({
      key: E,
      nonce: s.sheet.nonce,
      container: s.sheet.container,
      speedy: s.sheet.isSpeedy
    }), H = !1, R = document.querySelector('style[data-emotion="' + E + " " + r.name + '"]');
    return s.sheet.tags.length && (x.before = s.sheet.tags[0]), R !== null && (H = !0, R.setAttribute("data-emotion", E), x.hydrate([R])), b.current = [x, H], function() {
      x.flush();
    };
  }, [s]), n0(function() {
    var E = b.current, x = E[0], H = E[1];
    if (H) {
      E[1] = !1;
      return;
    }
    if (r.next !== void 0 && Jf(s, r.next, !0), x.tags.length) {
      var R = x.tags[x.tags.length - 1].nextElementSibling;
      x.before = R, x.flush();
    }
    s.insert("", r, x, !1);
  }, [s, r.name]), null;
});
function Ft() {
  for (var c = arguments.length, s = new Array(c), y = 0; y < c; y++)
    s[y] = arguments[y];
  return oi(s);
}
const Py = Ft`
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
`, Iy = () => /* @__PURE__ */ Nt(Fy, { styles: Py });
var tv = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, lv = /* @__PURE__ */ T0(
  function(c) {
    return tv.test(c) || c.charCodeAt(0) === 111 && c.charCodeAt(1) === 110 && c.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ev = lv, av = function(s) {
  return s !== "theme";
}, h0 = function(s) {
  return typeof s == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  s.charCodeAt(0) > 96 ? ev : av;
}, y0 = function(s, y, r) {
  var b;
  if (y) {
    var E = y.shouldForwardProp;
    b = s.__emotion_forwardProp && E ? function(x) {
      return s.__emotion_forwardProp(x) && E(x);
    } : E;
  }
  return typeof b != "function" && r && (b = s.__emotion_forwardProp), b;
}, uv = function(s) {
  var y = s.cache, r = s.serialized, b = s.isStringTag;
  return Kf(y, r, b), M0(function() {
    return Jf(y, r, b);
  }), null;
}, nv = function c(s, y) {
  var r = s.__emotion_real === s, b = r && s.__emotion_base || s, E, x;
  y !== void 0 && (E = y.label, x = y.target);
  var H = y0(s, y, r), R = H || h0(b), p = !R("as");
  return function() {
    var U = arguments, C = r && s.__emotion_styles !== void 0 ? s.__emotion_styles.slice(0) : [];
    if (E !== void 0 && C.push("label:" + E + ";"), U[0] == null || U[0].raw === void 0)
      C.push.apply(C, U);
    else {
      var B = U[0];
      C.push(B[0]);
      for (var tt = U.length, Q = 1; Q < tt; Q++)
        C.push(U[Q], B[Q]);
    }
    var X = kf(function(Z, $, et) {
      var J = p && Z.as || b, mt = "", M = [], I = Z;
      if (Z.theme == null) {
        I = {};
        for (var W in Z)
          I[W] = Z[W];
        I.theme = ht.useContext($f);
      }
      typeof Z.className == "string" ? mt = O0($.registered, M, Z.className) : Z.className != null && (mt = Z.className + " ");
      var jt = oi(C.concat(M), $.registered, I);
      mt += $.key + "-" + jt.name, x !== void 0 && (mt += " " + x);
      var gl = p && H === void 0 ? h0(J) : R, Ml = {};
      for (var It in Z)
        p && It === "as" || gl(It) && (Ml[It] = Z[It]);
      return Ml.className = mt, et && (Ml.ref = et), /* @__PURE__ */ ht.createElement(ht.Fragment, null, /* @__PURE__ */ ht.createElement(uv, {
        cache: $,
        serialized: jt,
        isStringTag: typeof J == "string"
      }), /* @__PURE__ */ ht.createElement(J, Ml));
    });
    return X.displayName = E !== void 0 ? E : "Styled(" + (typeof b == "string" ? b : b.displayName || b.name || "Component") + ")", X.defaultProps = s.defaultProps, X.__emotion_real = X, X.__emotion_base = b, X.__emotion_styles = C, X.__emotion_forwardProp = H, Object.defineProperty(X, "toString", {
      value: function() {
        return "." + x;
      }
    }), X.withComponent = function(Z, $) {
      var et = c(Z, Xf({}, y, $, {
        shouldForwardProp: y0(X, $, !0)
      }));
      return et.apply(void 0, C);
    }, X;
  };
}, iv = [
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
], Qf = nv.bind(null);
iv.forEach(function(c) {
  Qf[c] = Qf(c);
});
const cv = Qf.button`
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
`, fv = () => {
  const [c, s] = ht.useState([]);
  return {
    chat: c,
    addMessage: (b) => {
      s((E) => [...E, b]);
    },
    updateLastMessageValue: (b) => {
      s((E) => {
        const x = [...E];
        return x[x.length - 1].value = b, x;
      });
    }
  };
}, rv = async ({ onNewMessageChunk: c, question: s }) => {
  const r = (await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: "Bearer undefined",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "openai/gpt-3.5-turbo",
      messages: [{ role: "user", content: s }],
      stream: !0
    })
  })).body?.getReader();
  if (!r)
    throw new Error("Response body is not readable");
  const b = new TextDecoder();
  let E = "";
  try {
    for (; ; ) {
      const { done: x, value: H } = await r.read();
      if (x) break;
      for (E += b.decode(H, { stream: !0 }); ; ) {
        const R = E.indexOf(`
`);
        if (R === -1) break;
        const p = E.slice(0, R).trim();
        if (E = E.slice(R + 1), p.startsWith("data: ")) {
          const U = p.slice(6);
          if (U === "[DONE]") break;
          try {
            const B = JSON.parse(U).choices[0].delta.content ?? "";
            B && c(B);
          } catch (C) {
            console.error(C);
          }
        }
      }
    }
  } finally {
    r.cancel();
  }
}, sv = () => {
  const [c, s] = ht.useState(""), [y, r] = ht.useState(!1), [b, E] = ht.useState(""), { addMessage: x, updateLastMessageValue: H, chat: R } = fv(), p = ht.useRef(null), U = (B) => {
    s(B.target.value);
  }, C = async (B) => {
    if (B.preventDefault(), c.length === 0) return;
    const tt = c;
    x({ value: tt, role: "user" }), s(""), r(!1), x({ value: "...", role: "assistant" });
    let X = "";
    try {
      await rv({
        onNewMessageChunk: (Z) => {
          E(($) => $ + Z), X += Z;
        },
        question: tt
      }), H(X), E("");
    } catch (Z) {
      console.error("Error durante el streaming:", Z);
    }
  };
  return ht.useEffect(() => {
    c.length > 0 ? r(!0) : r(!1);
  }, [c]), ht.useEffect(() => {
    p.current && p.current.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  }, [R]), ht.useEffect(() => {
    p.current && (p.current.scrollTop = p.current.scrollHeight);
  }, [b]), /* @__PURE__ */ le(
    "div",
    {
      id: "chat-widget",
      css: Ft`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: var(--component-width, 100%);
        height: var(--component-height, 100%);
        max-height: var(--component-height, 100%);
        max-width: var(--component-width, 100%);
      `,
      children: [
        /* @__PURE__ */ le(
          "div",
          {
            className: "screen",
            ref: p,
            css: Ft`
          height: 100%;
          padding: 10px;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          align-items: flex-end;
          background-color: var(--gris-100);
        `,
            children: [
              R.map((B, tt) => /* @__PURE__ */ le(
                "div",
                {
                  css: Ft`
              display: flex;
              flex-direction: column;
              width: 100%;
              align-items: ${B.role === "user" ? "flex-end" : "flex-start"};
              margin-bottom: 10px;
            `,
                  children: [
                    /* @__PURE__ */ Nt(
                      "div",
                      {
                        css: Ft`
                display: flex;
                align-items: center;
                margin-bottom: 5px;
              `,
                        children: /* @__PURE__ */ Nt(
                          "span",
                          {
                            css: Ft`
                  font-weight: bold;
                  margin-right: 5px;
                `,
                            children: B.role === "user" ? "Tu" : "Assistant"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ le(
                      "div",
                      {
                        css: Ft`
                background-color: ${B.role === "user" ? "var(--primary-color)" : "var(--gris-95)"};
                color: ${B.role === "user" ? "var(--gris-100)" : "var(--gris-0)"};
                padding: 16px;
                border-radius: ${B.role === "user" ? "16px 0px 16px 16px" : "0px 16px 16px 16px"};
                max-width: 80%;
                word-wrap: break-word;
              `,
                        children: [
                          B.role === "user" && B.value,
                          B.role === "bot" && B.value?.map((Q, X) => /* @__PURE__ */ Nt(
                            "div",
                            {
                              css: Ft`
                      background-color: var(--gris-100);
                      padding: 16px;
                      border-radius: 16px;
                      max-width: 100%;
                      word-wrap: break-word;
                      margin-bottom: 10px;
                      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
                    `,
                              children: /* @__PURE__ */ le(
                                "div",
                                {
                                  css: Ft`
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                      `,
                                  children: [
                                    /* @__PURE__ */ Nt(
                                      "img",
                                      {
                                        css: Ft`
                          border-radius: 8px;
                          height: auto;
                          max-width: 200px;
                          object-fit: cover;
                        `,
                                        src: Q.urlToImage,
                                        alt: Q.title
                                      }
                                    ),
                                    /* @__PURE__ */ le(
                                      "div",
                                      {
                                        css: Ft`
                          margin-left: 10px;
                          display: flex;
                          flex-direction: column;
                        `,
                                        children: [
                                          /* @__PURE__ */ Nt(
                                            "small",
                                            {
                                              css: Ft`
                            align-self: flex-end;
                            margin-bottom: 10px;
                          `,
                                              children: new Date(Q.publishedAt).toLocaleString()
                                            }
                                          ),
                                          /* @__PURE__ */ Nt("h3", { children: Q.title }),
                                          /* @__PURE__ */ Nt("p", { children: Q.description }),
                                          /* @__PURE__ */ Nt(
                                            "div",
                                            {
                                              css: Ft`
                            display: flex;
                            flex-direction: row;
                            justify-content: flex-end;
                          `,
                                              children: /* @__PURE__ */ Nt("small", { children: Q.source.name })
                                            }
                                          )
                                        ]
                                      }
                                    )
                                  ]
                                }
                              )
                            },
                            X
                          )),
                          B.role === "assistant" && B.value
                        ]
                      }
                    )
                  ]
                },
                tt
              )),
              b && /* @__PURE__ */ Nt(
                "div",
                {
                  css: Ft`
              background-color: var(--gris-100);
              padding: 16px;
              border-radius: 16px;
              max-width: 100%;
              word-wrap: break-word;
              margin-bottom: 10px;
              box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
            `,
                  children: /* @__PURE__ */ Nt("p", { children: b })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ le(
          "form",
          {
            css: Ft`
          height: 100px;
          width: 100%;
          padding: 10px;
          background-color: #fff;
          display: flex;
          place-items: center;
          justify-content: space-around;
          border-top: 1px solid var(--border-color);
        `,
            onSubmit: C,
            children: [
              /* @__PURE__ */ Nt(
                "textarea",
                {
                  css: Ft`
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
                  value: c,
                  onChange: U,
                  onFocus: () => r(!0),
                  onBlur: () => r(!1),
                  required: !0,
                  onKeyDown: (B) => B.key === "Enter" && C(B),
                  type: "text",
                  rows: 1,
                  placeholder: "Escribe tu mensaje..."
                }
              ),
              /* @__PURE__ */ Nt(cv, { className: `${y ? "typing" : ""}`, type: "submit", children: /* @__PURE__ */ le(
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
                    /* @__PURE__ */ Nt("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
                    /* @__PURE__ */ Nt("path", { d: "M10 14l11 -11" }),
                    /* @__PURE__ */ Nt("path", { d: "M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" })
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
class ov extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const s = document.createElement("div");
    s.id = "root", this.shadowRoot.appendChild(s);
    const y = A0({
      key: "css",
      container: this.shadowRoot,
      prepend: !0
    });
    Wy.createRoot(s).render(
      /* @__PURE__ */ Nt(ht.StrictMode, { children: /* @__PURE__ */ le(Qy, { value: y, children: [
        /* @__PURE__ */ Nt(Iy, {}),
        /* @__PURE__ */ Nt(sv, {})
      ] }) })
    );
  }
}
customElements.define("chat-widget", ov);
