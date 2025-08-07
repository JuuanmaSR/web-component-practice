import * as Ul from "react";
import P1, { forwardRef as qE, useContext as YE, useState as w1, useEffect as jE, StrictMode as LE } from "react";
import ZT from "react-dom";
var Gg = { exports: {} }, Cp = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fT;
function VE() {
  if (fT) return Cp;
  fT = 1;
  var s = Symbol.for("react.transitional.element"), h = Symbol.for("react.fragment");
  function p(y, b, E) {
    var R = null;
    if (E !== void 0 && (R = "" + E), b.key !== void 0 && (R = "" + b.key), "key" in b) {
      E = {};
      for (var w in b)
        w !== "key" && (E[w] = b[w]);
    } else E = b;
    return b = E.ref, {
      $$typeof: s,
      type: y,
      key: R,
      ref: b !== void 0 ? b : null,
      props: E
    };
  }
  return Cp.Fragment = h, Cp.jsx = p, Cp.jsxs = p, Cp;
}
var Hp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rT;
function GE() {
  return rT || (rT = 1, process.env.NODE_ENV !== "production" && function() {
    function s(G) {
      if (G == null) return null;
      if (typeof G == "function")
        return G.$$typeof === dt ? null : G.displayName || G.name || null;
      if (typeof G == "string") return G;
      switch (G) {
        case ne:
          return "Fragment";
        case ce:
          return "Profiler";
        case I:
          return "StrictMode";
        case le:
          return "Suspense";
        case Te:
          return "SuspenseList";
        case Se:
          return "Activity";
      }
      if (typeof G == "object")
        switch (typeof G.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), G.$$typeof) {
          case ee:
            return "Portal";
          case re:
            return (G.displayName || "Context") + ".Provider";
          case be:
            return (G._context.displayName || "Context") + ".Consumer";
          case Ae:
            var ye = G.render;
            return G = G.displayName, G || (G = ye.displayName || ye.name || "", G = G !== "" ? "ForwardRef(" + G + ")" : "ForwardRef"), G;
          case de:
            return ye = G.displayName || null, ye !== null ? ye : s(G.type) || "Memo";
          case st:
            ye = G._payload, G = G._init;
            try {
              return s(G(ye));
            } catch {
            }
        }
      return null;
    }
    function h(G) {
      return "" + G;
    }
    function p(G) {
      try {
        h(G);
        var ye = !1;
      } catch {
        ye = !0;
      }
      if (ye) {
        ye = console;
        var fe = ye.error, ze = typeof Symbol == "function" && Symbol.toStringTag && G[Symbol.toStringTag] || G.constructor.name || "Object";
        return fe.call(
          ye,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ze
        ), h(G);
      }
    }
    function y(G) {
      if (G === ne) return "<>";
      if (typeof G == "object" && G !== null && G.$$typeof === st)
        return "<...>";
      try {
        var ye = s(G);
        return ye ? "<" + ye + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function b() {
      var G = Je.A;
      return G === null ? null : G.getOwner();
    }
    function E() {
      return Error("react-stack-top-frame");
    }
    function R(G) {
      if (we.call(G, "key")) {
        var ye = Object.getOwnPropertyDescriptor(G, "key").get;
        if (ye && ye.isReactWarning) return !1;
      }
      return G.key !== void 0;
    }
    function w(G, ye) {
      function fe() {
        Qt || (Qt = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          ye
        ));
      }
      fe.isReactWarning = !0, Object.defineProperty(G, "key", {
        get: fe,
        configurable: !0
      });
    }
    function U() {
      var G = s(this.type);
      return C[G] || (C[G] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), G = this.props.ref, G !== void 0 ? G : null;
    }
    function j(G, ye, fe, ze, Ve, gt, $e, Ra) {
      return fe = gt.ref, G = {
        $$typeof: me,
        type: G,
        key: ye,
        props: gt,
        _owner: Ve
      }, (fe !== void 0 ? fe : null) !== null ? Object.defineProperty(G, "ref", {
        enumerable: !1,
        get: U
      }) : Object.defineProperty(G, "ref", { enumerable: !1, value: null }), G._store = {}, Object.defineProperty(G._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(G, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(G, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $e
      }), Object.defineProperty(G, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ra
      }), Object.freeze && (Object.freeze(G.props), Object.freeze(G)), G;
    }
    function _(G, ye, fe, ze, Ve, gt, $e, Ra) {
      var zt = ye.children;
      if (zt !== void 0)
        if (ze)
          if (kt(zt)) {
            for (ze = 0; ze < zt.length; ze++)
              $(zt[ze]);
            Object.freeze && Object.freeze(zt);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else $(zt);
      if (we.call(ye, "key")) {
        zt = s(G);
        var Wt = Object.keys(ye).filter(function(yu) {
          return yu !== "key";
        });
        ze = 0 < Wt.length ? "{key: someKey, " + Wt.join(": ..., ") + ": ...}" : "{key: someKey}", Oe[zt + ze] || (Wt = 0 < Wt.length ? "{" + Wt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ze,
          zt,
          Wt,
          zt
        ), Oe[zt + ze] = !0);
      }
      if (zt = null, fe !== void 0 && (p(fe), zt = "" + fe), R(ye) && (p(ye.key), zt = "" + ye.key), "key" in ye) {
        fe = {};
        for (var Fl in ye)
          Fl !== "key" && (fe[Fl] = ye[Fl]);
      } else fe = ye;
      return zt && w(
        fe,
        typeof G == "function" ? G.displayName || G.name || "Unknown" : G
      ), j(
        G,
        zt,
        gt,
        Ve,
        b(),
        fe,
        $e,
        Ra
      );
    }
    function $(G) {
      typeof G == "object" && G !== null && G.$$typeof === me && G._store && (G._store.validated = 1);
    }
    var ie = P1, me = Symbol.for("react.transitional.element"), ee = Symbol.for("react.portal"), ne = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), ce = Symbol.for("react.profiler"), be = Symbol.for("react.consumer"), re = Symbol.for("react.context"), Ae = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), Te = Symbol.for("react.suspense_list"), de = Symbol.for("react.memo"), st = Symbol.for("react.lazy"), Se = Symbol.for("react.activity"), dt = Symbol.for("react.client.reference"), Je = ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, we = Object.prototype.hasOwnProperty, kt = Array.isArray, pl = console.createTask ? console.createTask : function() {
      return null;
    };
    ie = {
      react_stack_bottom_frame: function(G) {
        return G();
      }
    };
    var Qt, C = {}, te = ie.react_stack_bottom_frame.bind(
      ie,
      E
    )(), ue = pl(y(E)), Oe = {};
    Hp.Fragment = ne, Hp.jsx = function(G, ye, fe, ze, Ve) {
      var gt = 1e4 > Je.recentlyCreatedOwnerStacks++;
      return _(
        G,
        ye,
        fe,
        !1,
        ze,
        Ve,
        gt ? Error("react-stack-top-frame") : te,
        gt ? pl(y(G)) : ue
      );
    }, Hp.jsxs = function(G, ye, fe, ze, Ve) {
      var gt = 1e4 > Je.recentlyCreatedOwnerStacks++;
      return _(
        G,
        ye,
        fe,
        !0,
        ze,
        Ve,
        gt ? Error("react-stack-top-frame") : te,
        gt ? pl(y(G)) : ue
      );
    };
  }()), Hp;
}
var sT;
function XE() {
  return sT || (sT = 1, process.env.NODE_ENV === "production" ? Gg.exports = VE() : Gg.exports = GE()), Gg.exports;
}
var Ig = XE();
function QE(s) {
  if (s.sheet)
    return s.sheet;
  for (var h = 0; h < document.styleSheets.length; h++)
    if (document.styleSheets[h].ownerNode === s)
      return document.styleSheets[h];
}
function ZE(s) {
  var h = document.createElement("style");
  return h.setAttribute("data-emotion", s.key), s.nonce !== void 0 && h.setAttribute("nonce", s.nonce), h.appendChild(document.createTextNode("")), h.setAttribute("data-s", ""), h;
}
var kE = /* @__PURE__ */ function() {
  function s(p) {
    var y = this;
    this._insertTag = function(b) {
      var E;
      y.tags.length === 0 ? y.insertionPoint ? E = y.insertionPoint.nextSibling : y.prepend ? E = y.container.firstChild : E = y.before : E = y.tags[y.tags.length - 1].nextSibling, y.container.insertBefore(b, E), y.tags.push(b);
    }, this.isSpeedy = p.speedy === void 0 ? !0 : p.speedy, this.tags = [], this.ctr = 0, this.nonce = p.nonce, this.key = p.key, this.container = p.container, this.prepend = p.prepend, this.insertionPoint = p.insertionPoint, this.before = null;
  }
  var h = s.prototype;
  return h.hydrate = function(y) {
    y.forEach(this._insertTag);
  }, h.insert = function(y) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ZE(this));
    var b = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var E = QE(b);
      try {
        E.insertRule(y, E.cssRules.length);
      } catch {
      }
    } else
      b.appendChild(document.createTextNode(y));
    this.ctr++;
  }, h.flush = function() {
    this.tags.forEach(function(y) {
      var b;
      return (b = y.parentNode) == null ? void 0 : b.removeChild(y);
    }), this.tags = [], this.ctr = 0;
  }, s;
}(), yn = "-ms-", ev = "-moz-", yt = "-webkit-", kT = "comm", I1 = "rule", eb = "decl", JE = "@import", JT = "@keyframes", KE = "@layer", $E = Math.abs, nv = String.fromCharCode, WE = Object.assign;
function FE(s, h) {
  return Wl(s, 0) ^ 45 ? (((h << 2 ^ Wl(s, 0)) << 2 ^ Wl(s, 1)) << 2 ^ Wl(s, 2)) << 2 ^ Wl(s, 3) : 0;
}
function KT(s) {
  return s.trim();
}
function PE(s, h) {
  return (s = h.exec(s)) ? s[0] : s;
}
function pt(s, h, p) {
  return s.replace(h, p);
}
function V1(s, h) {
  return s.indexOf(h);
}
function Wl(s, h) {
  return s.charCodeAt(h) | 0;
}
function qp(s, h, p) {
  return s.slice(h, p);
}
function Zi(s) {
  return s.length;
}
function tb(s) {
  return s.length;
}
function Xg(s, h) {
  return h.push(s), s;
}
function IE(s, h) {
  return s.map(h).join("");
}
var av = 1, Bh = 1, $T = 0, la = 0, yl = 0, qh = "";
function uv(s, h, p, y, b, E, R) {
  return { value: s, root: h, parent: p, type: y, props: b, children: E, line: av, column: Bh, length: R, return: "" };
}
function wp(s, h) {
  return WE(uv("", null, null, "", null, null, 0), s, { length: -s.length }, h);
}
function eA() {
  return yl;
}
function tA() {
  return yl = la > 0 ? Wl(qh, --la) : 0, Bh--, yl === 10 && (Bh = 1, av--), yl;
}
function Aa() {
  return yl = la < $T ? Wl(qh, la++) : 0, Bh++, yl === 10 && (Bh = 1, av++), yl;
}
function Ji() {
  return Wl(qh, la);
}
function Jg() {
  return la;
}
function Vp(s, h) {
  return qp(qh, s, h);
}
function Yp(s) {
  switch (s) {
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
function WT(s) {
  return av = Bh = 1, $T = Zi(qh = s), la = 0, [];
}
function FT(s) {
  return qh = "", s;
}
function Kg(s) {
  return KT(Vp(la - 1, G1(s === 91 ? s + 2 : s === 40 ? s + 1 : s)));
}
function lA(s) {
  for (; (yl = Ji()) && yl < 33; )
    Aa();
  return Yp(s) > 2 || Yp(yl) > 3 ? "" : " ";
}
function nA(s, h) {
  for (; --h && Aa() && !(yl < 48 || yl > 102 || yl > 57 && yl < 65 || yl > 70 && yl < 97); )
    ;
  return Vp(s, Jg() + (h < 6 && Ji() == 32 && Aa() == 32));
}
function G1(s) {
  for (; Aa(); )
    switch (yl) {
      // ] ) " '
      case s:
        return la;
      // " '
      case 34:
      case 39:
        s !== 34 && s !== 39 && G1(yl);
        break;
      // (
      case 40:
        s === 41 && G1(s);
        break;
      // \
      case 92:
        Aa();
        break;
    }
  return la;
}
function aA(s, h) {
  for (; Aa() && s + yl !== 57; )
    if (s + yl === 84 && Ji() === 47)
      break;
  return "/*" + Vp(h, la - 1) + "*" + nv(s === 47 ? s : Aa());
}
function uA(s) {
  for (; !Yp(Ji()); )
    Aa();
  return Vp(s, la);
}
function iA(s) {
  return FT($g("", null, null, null, [""], s = WT(s), 0, [0], s));
}
function $g(s, h, p, y, b, E, R, w, U) {
  for (var j = 0, _ = 0, $ = R, ie = 0, me = 0, ee = 0, ne = 1, I = 1, ce = 1, be = 0, re = "", Ae = b, le = E, Te = y, de = re; I; )
    switch (ee = be, be = Aa()) {
      // (
      case 40:
        if (ee != 108 && Wl(de, $ - 1) == 58) {
          V1(de += pt(Kg(be), "&", "&\f"), "&\f") != -1 && (ce = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        de += Kg(be);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        de += lA(ee);
        break;
      // \
      case 92:
        de += nA(Jg() - 1, 7);
        continue;
      // /
      case 47:
        switch (Ji()) {
          case 42:
          case 47:
            Xg(cA(aA(Aa(), Jg()), h, p), U);
            break;
          default:
            de += "/";
        }
        break;
      // {
      case 123 * ne:
        w[j++] = Zi(de) * ce;
      // } ; \0
      case 125 * ne:
      case 59:
      case 0:
        switch (be) {
          // \0 }
          case 0:
          case 125:
            I = 0;
          // ;
          case 59 + _:
            ce == -1 && (de = pt(de, /\f/g, "")), me > 0 && Zi(de) - $ && Xg(me > 32 ? hT(de + ";", y, p, $ - 1) : hT(pt(de, " ", "") + ";", y, p, $ - 2), U);
            break;
          // @ ;
          case 59:
            de += ";";
          // { rule/at-rule
          default:
            if (Xg(Te = dT(de, h, p, j, _, b, w, re, Ae = [], le = [], $), E), be === 123)
              if (_ === 0)
                $g(de, h, Te, Te, Ae, E, $, w, le);
              else
                switch (ie === 99 && Wl(de, 3) === 110 ? 100 : ie) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    $g(s, Te, Te, y && Xg(dT(s, Te, Te, 0, 0, b, w, re, b, Ae = [], $), le), b, le, $, w, y ? Ae : le);
                    break;
                  default:
                    $g(de, Te, Te, Te, [""], le, 0, w, le);
                }
        }
        j = _ = me = 0, ne = ce = 1, re = de = "", $ = R;
        break;
      // :
      case 58:
        $ = 1 + Zi(de), me = ee;
      default:
        if (ne < 1) {
          if (be == 123)
            --ne;
          else if (be == 125 && ne++ == 0 && tA() == 125)
            continue;
        }
        switch (de += nv(be), be * ne) {
          // &
          case 38:
            ce = _ > 0 ? 1 : (de += "\f", -1);
            break;
          // ,
          case 44:
            w[j++] = (Zi(de) - 1) * ce, ce = 1;
            break;
          // @
          case 64:
            Ji() === 45 && (de += Kg(Aa())), ie = Ji(), _ = $ = Zi(re = de += uA(Jg())), be++;
            break;
          // -
          case 45:
            ee === 45 && Zi(de) == 2 && (ne = 0);
        }
    }
  return E;
}
function dT(s, h, p, y, b, E, R, w, U, j, _) {
  for (var $ = b - 1, ie = b === 0 ? E : [""], me = tb(ie), ee = 0, ne = 0, I = 0; ee < y; ++ee)
    for (var ce = 0, be = qp(s, $ + 1, $ = $E(ne = R[ee])), re = s; ce < me; ++ce)
      (re = KT(ne > 0 ? ie[ce] + " " + be : pt(be, /&\f/g, ie[ce]))) && (U[I++] = re);
  return uv(s, h, p, b === 0 ? I1 : w, U, j, _);
}
function cA(s, h, p) {
  return uv(s, h, p, kT, nv(eA()), qp(s, 2, -2), 0);
}
function hT(s, h, p, y) {
  return uv(s, h, p, eb, qp(s, 0, y), qp(s, y + 1, -1), y);
}
function Nh(s, h) {
  for (var p = "", y = tb(s), b = 0; b < y; b++)
    p += h(s[b], b, s, h) || "";
  return p;
}
function oA(s, h, p, y) {
  switch (s.type) {
    case KE:
      if (s.children.length) break;
    case JE:
    case eb:
      return s.return = s.return || s.value;
    case kT:
      return "";
    case JT:
      return s.return = s.value + "{" + Nh(s.children, y) + "}";
    case I1:
      s.value = s.props.join(",");
  }
  return Zi(p = Nh(s.children, y)) ? s.return = s.value + "{" + p + "}" : "";
}
function fA(s) {
  var h = tb(s);
  return function(p, y, b, E) {
    for (var R = "", w = 0; w < h; w++)
      R += s[w](p, y, b, E) || "";
    return R;
  };
}
function rA(s) {
  return function(h) {
    h.root || (h = h.return) && s(h);
  };
}
function PT(s) {
  var h = /* @__PURE__ */ Object.create(null);
  return function(p) {
    return h[p] === void 0 && (h[p] = s(p)), h[p];
  };
}
var sA = function(h, p, y) {
  for (var b = 0, E = 0; b = E, E = Ji(), b === 38 && E === 12 && (p[y] = 1), !Yp(E); )
    Aa();
  return Vp(h, la);
}, dA = function(h, p) {
  var y = -1, b = 44;
  do
    switch (Yp(b)) {
      case 0:
        b === 38 && Ji() === 12 && (p[y] = 1), h[y] += sA(la - 1, p, y);
        break;
      case 2:
        h[y] += Kg(b);
        break;
      case 4:
        if (b === 44) {
          h[++y] = Ji() === 58 ? "&\f" : "", p[y] = h[y].length;
          break;
        }
      // fallthrough
      default:
        h[y] += nv(b);
    }
  while (b = Aa());
  return h;
}, hA = function(h, p) {
  return FT(dA(WT(h), p));
}, mT = /* @__PURE__ */ new WeakMap(), mA = function(h) {
  if (!(h.type !== "rule" || !h.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  h.length < 1)) {
    for (var p = h.value, y = h.parent, b = h.column === y.column && h.line === y.line; y.type !== "rule"; )
      if (y = y.parent, !y) return;
    if (!(h.props.length === 1 && p.charCodeAt(0) !== 58 && !mT.get(y)) && !b) {
      mT.set(h, !0);
      for (var E = [], R = hA(p, E), w = y.props, U = 0, j = 0; U < R.length; U++)
        for (var _ = 0; _ < w.length; _++, j++)
          h.props[j] = E[U] ? R[U].replace(/&\f/g, w[_]) : w[_] + " " + R[U];
    }
  }
}, yA = function(h) {
  if (h.type === "decl") {
    var p = h.value;
    // charcode for l
    p.charCodeAt(0) === 108 && // charcode for b
    p.charCodeAt(2) === 98 && (h.return = "", h.value = "");
  }
};
function IT(s, h) {
  switch (FE(s, h)) {
    // color-adjust
    case 5103:
      return yt + "print-" + s + s;
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
      return yt + s + s;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return yt + s + ev + s + yn + s + s;
    // flex, flex-direction
    case 6828:
    case 4268:
      return yt + s + yn + s + s;
    // order
    case 6165:
      return yt + s + yn + "flex-" + s + s;
    // align-items
    case 5187:
      return yt + s + pt(s, /(\w+).+(:[^]+)/, yt + "box-$1$2" + yn + "flex-$1$2") + s;
    // align-self
    case 5443:
      return yt + s + yn + "flex-item-" + pt(s, /flex-|-self/, "") + s;
    // align-content
    case 4675:
      return yt + s + yn + "flex-line-pack" + pt(s, /align-content|flex-|-self/, "") + s;
    // flex-shrink
    case 5548:
      return yt + s + yn + pt(s, "shrink", "negative") + s;
    // flex-basis
    case 5292:
      return yt + s + yn + pt(s, "basis", "preferred-size") + s;
    // flex-grow
    case 6060:
      return yt + "box-" + pt(s, "-grow", "") + yt + s + yn + pt(s, "grow", "positive") + s;
    // transition
    case 4554:
      return yt + pt(s, /([^-])(transform)/g, "$1" + yt + "$2") + s;
    // cursor
    case 6187:
      return pt(pt(pt(s, /(zoom-|grab)/, yt + "$1"), /(image-set)/, yt + "$1"), s, "") + s;
    // background, background-image
    case 5495:
    case 3959:
      return pt(s, /(image-set\([^]*)/, yt + "$1$`$1");
    // justify-content
    case 4968:
      return pt(pt(s, /(.+:)(flex-)?(.*)/, yt + "box-pack:$3" + yn + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + yt + s + s;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return pt(s, /(.+)-inline(.+)/, yt + "$1$2") + s;
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
      if (Zi(s) - 1 - h > 6) switch (Wl(s, h + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (Wl(s, h + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return pt(s, /(.+:)(.+)-([^]+)/, "$1" + yt + "$2-$3$1" + ev + (Wl(s, h + 3) == 108 ? "$3" : "$2-$3")) + s;
        // (s)tretch
        case 115:
          return ~V1(s, "stretch") ? IT(pt(s, "stretch", "fill-available"), h) + s : s;
      }
      break;
    // position: sticky
    case 4949:
      if (Wl(s, h + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (Wl(s, Zi(s) - 3 - (~V1(s, "!important") && 10))) {
        // stic(k)y
        case 107:
          return pt(s, ":", ":" + yt) + s;
        // (inline-)?fl(e)x
        case 101:
          return pt(s, /(.+:)([^;!]+)(;|!.+)?/, "$1" + yt + (Wl(s, 14) === 45 ? "inline-" : "") + "box$3$1" + yt + "$2$3$1" + yn + "$2box$3") + s;
      }
      break;
    // writing-mode
    case 5936:
      switch (Wl(s, h + 11)) {
        // vertical-l(r)
        case 114:
          return yt + s + yn + pt(s, /[svh]\w+-[tblr]{2}/, "tb") + s;
        // vertical-r(l)
        case 108:
          return yt + s + yn + pt(s, /[svh]\w+-[tblr]{2}/, "tb-rl") + s;
        // horizontal(-)tb
        case 45:
          return yt + s + yn + pt(s, /[svh]\w+-[tblr]{2}/, "lr") + s;
      }
      return yt + s + yn + s + s;
  }
  return s;
}
var pA = function(h, p, y, b) {
  if (h.length > -1 && !h.return) switch (h.type) {
    case eb:
      h.return = IT(h.value, h.length);
      break;
    case JT:
      return Nh([wp(h, {
        value: pt(h.value, "@", "@" + yt)
      })], b);
    case I1:
      if (h.length) return IE(h.props, function(E) {
        switch (PE(E, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Nh([wp(h, {
              props: [pt(E, /:(read-\w+)/, ":" + ev + "$1")]
            })], b);
          // :placeholder
          case "::placeholder":
            return Nh([wp(h, {
              props: [pt(E, /:(plac\w+)/, ":" + yt + "input-$1")]
            }), wp(h, {
              props: [pt(E, /:(plac\w+)/, ":" + ev + "$1")]
            }), wp(h, {
              props: [pt(E, /:(plac\w+)/, yn + "input-$1")]
            })], b);
        }
        return "";
      });
  }
}, gA = [pA], e2 = function(h) {
  var p = h.key;
  if (p === "css") {
    var y = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(y, function(ne) {
      var I = ne.getAttribute("data-emotion");
      I.indexOf(" ") !== -1 && (document.head.appendChild(ne), ne.setAttribute("data-s", ""));
    });
  }
  var b = h.stylisPlugins || gA, E = {}, R, w = [];
  R = h.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + p + ' "]'),
    function(ne) {
      for (var I = ne.getAttribute("data-emotion").split(" "), ce = 1; ce < I.length; ce++)
        E[I[ce]] = !0;
      w.push(ne);
    }
  );
  var U, j = [mA, yA];
  {
    var _, $ = [oA, rA(function(ne) {
      _.insert(ne);
    })], ie = fA(j.concat(b, $)), me = function(I) {
      return Nh(iA(I), ie);
    };
    U = function(I, ce, be, re) {
      _ = be, me(I ? I + "{" + ce.styles + "}" : ce.styles), re && (ee.inserted[ce.name] = !0);
    };
  }
  var ee = {
    key: p,
    sheet: new kE({
      key: p,
      container: R,
      nonce: h.nonce,
      speedy: h.speedy,
      prepend: h.prepend,
      insertionPoint: h.insertionPoint
    }),
    nonce: h.nonce,
    inserted: E,
    registered: {},
    insert: U
  };
  return ee.sheet.hydrate(w), ee;
};
function X1() {
  return X1 = Object.assign ? Object.assign.bind() : function(s) {
    for (var h = 1; h < arguments.length; h++) {
      var p = arguments[h];
      for (var y in p) ({}).hasOwnProperty.call(p, y) && (s[y] = p[y]);
    }
    return s;
  }, X1.apply(null, arguments);
}
var Qg = { exports: {} }, Tt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yT;
function vA() {
  if (yT) return Tt;
  yT = 1;
  var s = typeof Symbol == "function" && Symbol.for, h = s ? Symbol.for("react.element") : 60103, p = s ? Symbol.for("react.portal") : 60106, y = s ? Symbol.for("react.fragment") : 60107, b = s ? Symbol.for("react.strict_mode") : 60108, E = s ? Symbol.for("react.profiler") : 60114, R = s ? Symbol.for("react.provider") : 60109, w = s ? Symbol.for("react.context") : 60110, U = s ? Symbol.for("react.async_mode") : 60111, j = s ? Symbol.for("react.concurrent_mode") : 60111, _ = s ? Symbol.for("react.forward_ref") : 60112, $ = s ? Symbol.for("react.suspense") : 60113, ie = s ? Symbol.for("react.suspense_list") : 60120, me = s ? Symbol.for("react.memo") : 60115, ee = s ? Symbol.for("react.lazy") : 60116, ne = s ? Symbol.for("react.block") : 60121, I = s ? Symbol.for("react.fundamental") : 60117, ce = s ? Symbol.for("react.responder") : 60118, be = s ? Symbol.for("react.scope") : 60119;
  function re(le) {
    if (typeof le == "object" && le !== null) {
      var Te = le.$$typeof;
      switch (Te) {
        case h:
          switch (le = le.type, le) {
            case U:
            case j:
            case y:
            case E:
            case b:
            case $:
              return le;
            default:
              switch (le = le && le.$$typeof, le) {
                case w:
                case _:
                case ee:
                case me:
                case R:
                  return le;
                default:
                  return Te;
              }
          }
        case p:
          return Te;
      }
    }
  }
  function Ae(le) {
    return re(le) === j;
  }
  return Tt.AsyncMode = U, Tt.ConcurrentMode = j, Tt.ContextConsumer = w, Tt.ContextProvider = R, Tt.Element = h, Tt.ForwardRef = _, Tt.Fragment = y, Tt.Lazy = ee, Tt.Memo = me, Tt.Portal = p, Tt.Profiler = E, Tt.StrictMode = b, Tt.Suspense = $, Tt.isAsyncMode = function(le) {
    return Ae(le) || re(le) === U;
  }, Tt.isConcurrentMode = Ae, Tt.isContextConsumer = function(le) {
    return re(le) === w;
  }, Tt.isContextProvider = function(le) {
    return re(le) === R;
  }, Tt.isElement = function(le) {
    return typeof le == "object" && le !== null && le.$$typeof === h;
  }, Tt.isForwardRef = function(le) {
    return re(le) === _;
  }, Tt.isFragment = function(le) {
    return re(le) === y;
  }, Tt.isLazy = function(le) {
    return re(le) === ee;
  }, Tt.isMemo = function(le) {
    return re(le) === me;
  }, Tt.isPortal = function(le) {
    return re(le) === p;
  }, Tt.isProfiler = function(le) {
    return re(le) === E;
  }, Tt.isStrictMode = function(le) {
    return re(le) === b;
  }, Tt.isSuspense = function(le) {
    return re(le) === $;
  }, Tt.isValidElementType = function(le) {
    return typeof le == "string" || typeof le == "function" || le === y || le === j || le === E || le === b || le === $ || le === ie || typeof le == "object" && le !== null && (le.$$typeof === ee || le.$$typeof === me || le.$$typeof === R || le.$$typeof === w || le.$$typeof === _ || le.$$typeof === I || le.$$typeof === ce || le.$$typeof === be || le.$$typeof === ne);
  }, Tt.typeOf = re, Tt;
}
var Et = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pT;
function bA() {
  return pT || (pT = 1, process.env.NODE_ENV !== "production" && function() {
    var s = typeof Symbol == "function" && Symbol.for, h = s ? Symbol.for("react.element") : 60103, p = s ? Symbol.for("react.portal") : 60106, y = s ? Symbol.for("react.fragment") : 60107, b = s ? Symbol.for("react.strict_mode") : 60108, E = s ? Symbol.for("react.profiler") : 60114, R = s ? Symbol.for("react.provider") : 60109, w = s ? Symbol.for("react.context") : 60110, U = s ? Symbol.for("react.async_mode") : 60111, j = s ? Symbol.for("react.concurrent_mode") : 60111, _ = s ? Symbol.for("react.forward_ref") : 60112, $ = s ? Symbol.for("react.suspense") : 60113, ie = s ? Symbol.for("react.suspense_list") : 60120, me = s ? Symbol.for("react.memo") : 60115, ee = s ? Symbol.for("react.lazy") : 60116, ne = s ? Symbol.for("react.block") : 60121, I = s ? Symbol.for("react.fundamental") : 60117, ce = s ? Symbol.for("react.responder") : 60118, be = s ? Symbol.for("react.scope") : 60119;
    function re(Ee) {
      return typeof Ee == "string" || typeof Ee == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Ee === y || Ee === j || Ee === E || Ee === b || Ee === $ || Ee === ie || typeof Ee == "object" && Ee !== null && (Ee.$$typeof === ee || Ee.$$typeof === me || Ee.$$typeof === R || Ee.$$typeof === w || Ee.$$typeof === _ || Ee.$$typeof === I || Ee.$$typeof === ce || Ee.$$typeof === be || Ee.$$typeof === ne);
    }
    function Ae(Ee) {
      if (typeof Ee == "object" && Ee !== null) {
        var na = Ee.$$typeof;
        switch (na) {
          case h:
            var Fu = Ee.type;
            switch (Fu) {
              case U:
              case j:
              case y:
              case E:
              case b:
              case $:
                return Fu;
              default:
                var ds = Fu && Fu.$$typeof;
                switch (ds) {
                  case w:
                  case _:
                  case ee:
                  case me:
                  case R:
                    return ds;
                  default:
                    return na;
                }
            }
          case p:
            return na;
        }
      }
    }
    var le = U, Te = j, de = w, st = R, Se = h, dt = _, Je = y, we = ee, kt = me, pl = p, Qt = E, C = b, te = $, ue = !1;
    function Oe(Ee) {
      return ue || (ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), G(Ee) || Ae(Ee) === U;
    }
    function G(Ee) {
      return Ae(Ee) === j;
    }
    function ye(Ee) {
      return Ae(Ee) === w;
    }
    function fe(Ee) {
      return Ae(Ee) === R;
    }
    function ze(Ee) {
      return typeof Ee == "object" && Ee !== null && Ee.$$typeof === h;
    }
    function Ve(Ee) {
      return Ae(Ee) === _;
    }
    function gt(Ee) {
      return Ae(Ee) === y;
    }
    function $e(Ee) {
      return Ae(Ee) === ee;
    }
    function Ra(Ee) {
      return Ae(Ee) === me;
    }
    function zt(Ee) {
      return Ae(Ee) === p;
    }
    function Wt(Ee) {
      return Ae(Ee) === E;
    }
    function Fl(Ee) {
      return Ae(Ee) === b;
    }
    function yu(Ee) {
      return Ae(Ee) === $;
    }
    Et.AsyncMode = le, Et.ConcurrentMode = Te, Et.ContextConsumer = de, Et.ContextProvider = st, Et.Element = Se, Et.ForwardRef = dt, Et.Fragment = Je, Et.Lazy = we, Et.Memo = kt, Et.Portal = pl, Et.Profiler = Qt, Et.StrictMode = C, Et.Suspense = te, Et.isAsyncMode = Oe, Et.isConcurrentMode = G, Et.isContextConsumer = ye, Et.isContextProvider = fe, Et.isElement = ze, Et.isForwardRef = Ve, Et.isFragment = gt, Et.isLazy = $e, Et.isMemo = Ra, Et.isPortal = zt, Et.isProfiler = Wt, Et.isStrictMode = Fl, Et.isSuspense = yu, Et.isValidElementType = re, Et.typeOf = Ae;
  }()), Et;
}
var gT;
function SA() {
  return gT || (gT = 1, process.env.NODE_ENV === "production" ? Qg.exports = vA() : Qg.exports = bA()), Qg.exports;
}
var _1, vT;
function TA() {
  if (vT) return _1;
  vT = 1;
  var s = SA(), h = {
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
  }, p = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, y = {
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
  E[s.ForwardRef] = y, E[s.Memo] = b;
  function R(ee) {
    return s.isMemo(ee) ? b : E[ee.$$typeof] || h;
  }
  var w = Object.defineProperty, U = Object.getOwnPropertyNames, j = Object.getOwnPropertySymbols, _ = Object.getOwnPropertyDescriptor, $ = Object.getPrototypeOf, ie = Object.prototype;
  function me(ee, ne, I) {
    if (typeof ne != "string") {
      if (ie) {
        var ce = $(ne);
        ce && ce !== ie && me(ee, ce, I);
      }
      var be = U(ne);
      j && (be = be.concat(j(ne)));
      for (var re = R(ee), Ae = R(ne), le = 0; le < be.length; ++le) {
        var Te = be[le];
        if (!p[Te] && !(I && I[Te]) && !(Ae && Ae[Te]) && !(re && re[Te])) {
          var de = _(ne, Te);
          try {
            w(ee, Te, de);
          } catch {
          }
        }
      }
    }
    return ee;
  }
  return _1 = me, _1;
}
TA();
var EA = !0;
function t2(s, h, p) {
  var y = "";
  return p.split(" ").forEach(function(b) {
    s[b] !== void 0 ? h.push(s[b] + ";") : b && (y += b + " ");
  }), y;
}
var lb = function(h, p, y) {
  var b = h.key + "-" + p.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (y === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  EA === !1) && h.registered[b] === void 0 && (h.registered[b] = p.styles);
}, nb = function(h, p, y) {
  lb(h, p, y);
  var b = h.key + "-" + p.name;
  if (h.inserted[p.name] === void 0) {
    var E = p;
    do
      h.insert(p === E ? "." + b : "", E, h.sheet, !0), E = E.next;
    while (E !== void 0);
  }
};
function AA(s) {
  for (var h = 0, p, y = 0, b = s.length; b >= 4; ++y, b -= 4)
    p = s.charCodeAt(y) & 255 | (s.charCodeAt(++y) & 255) << 8 | (s.charCodeAt(++y) & 255) << 16 | (s.charCodeAt(++y) & 255) << 24, p = /* Math.imul(k, m): */
    (p & 65535) * 1540483477 + ((p >>> 16) * 59797 << 16), p ^= /* k >>> r: */
    p >>> 24, h = /* Math.imul(k, m): */
    (p & 65535) * 1540483477 + ((p >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  switch (b) {
    case 3:
      h ^= (s.charCodeAt(y + 2) & 255) << 16;
    case 2:
      h ^= (s.charCodeAt(y + 1) & 255) << 8;
    case 1:
      h ^= s.charCodeAt(y) & 255, h = /* Math.imul(h, m): */
      (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  return h ^= h >>> 13, h = /* Math.imul(h, m): */
  (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16), ((h ^ h >>> 15) >>> 0).toString(36);
}
var RA = {
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
}, OA = /[A-Z]|^ms/g, DA = /_EMO_([^_]+?)_([^]*?)_EMO_/g, l2 = function(h) {
  return h.charCodeAt(1) === 45;
}, bT = function(h) {
  return h != null && typeof h != "boolean";
}, N1 = /* @__PURE__ */ PT(function(s) {
  return l2(s) ? s : s.replace(OA, "-$&").toLowerCase();
}), ST = function(h, p) {
  switch (h) {
    case "animation":
    case "animationName":
      if (typeof p == "string")
        return p.replace(DA, function(y, b, E) {
          return ki = {
            name: b,
            styles: E,
            next: ki
          }, b;
        });
  }
  return RA[h] !== 1 && !l2(h) && typeof p == "number" && p !== 0 ? p + "px" : p;
};
function jp(s, h, p) {
  if (p == null)
    return "";
  var y = p;
  if (y.__emotion_styles !== void 0)
    return y;
  switch (typeof p) {
    case "boolean":
      return "";
    case "object": {
      var b = p;
      if (b.anim === 1)
        return ki = {
          name: b.name,
          styles: b.styles,
          next: ki
        }, b.name;
      var E = p;
      if (E.styles !== void 0) {
        var R = E.next;
        if (R !== void 0)
          for (; R !== void 0; )
            ki = {
              name: R.name,
              styles: R.styles,
              next: ki
            }, R = R.next;
        var w = E.styles + ";";
        return w;
      }
      return xA(s, h, p);
    }
    case "function": {
      if (s !== void 0) {
        var U = ki, j = p(s);
        return ki = U, jp(s, h, j);
      }
      break;
    }
  }
  var _ = p;
  if (h == null)
    return _;
  var $ = h[_];
  return $ !== void 0 ? $ : _;
}
function xA(s, h, p) {
  var y = "";
  if (Array.isArray(p))
    for (var b = 0; b < p.length; b++)
      y += jp(s, h, p[b]) + ";";
  else
    for (var E in p) {
      var R = p[E];
      if (typeof R != "object") {
        var w = R;
        h != null && h[w] !== void 0 ? y += E + "{" + h[w] + "}" : bT(w) && (y += N1(E) + ":" + ST(E, w) + ";");
      } else if (Array.isArray(R) && typeof R[0] == "string" && (h == null || h[R[0]] === void 0))
        for (var U = 0; U < R.length; U++)
          bT(R[U]) && (y += N1(E) + ":" + ST(E, R[U]) + ";");
      else {
        var j = jp(s, h, R);
        switch (E) {
          case "animation":
          case "animationName": {
            y += N1(E) + ":" + j + ";";
            break;
          }
          default:
            y += E + "{" + j + "}";
        }
      }
    }
  return y;
}
var TT = /label:\s*([^\s;{]+)\s*(;|$)/g, ki;
function iv(s, h, p) {
  if (s.length === 1 && typeof s[0] == "object" && s[0] !== null && s[0].styles !== void 0)
    return s[0];
  var y = !0, b = "";
  ki = void 0;
  var E = s[0];
  if (E == null || E.raw === void 0)
    y = !1, b += jp(p, h, E);
  else {
    var R = E;
    b += R[0];
  }
  for (var w = 1; w < s.length; w++)
    if (b += jp(p, h, s[w]), y) {
      var U = E;
      b += U[w];
    }
  TT.lastIndex = 0;
  for (var j = "", _; (_ = TT.exec(b)) !== null; )
    j += "-" + _[1];
  var $ = AA(b) + j;
  return {
    name: $,
    styles: b,
    next: ki
  };
}
var zA = function(h) {
  return h();
}, n2 = Ul.useInsertionEffect ? Ul.useInsertionEffect : !1, a2 = n2 || zA, ET = n2 || Ul.useLayoutEffect, u2 = /* @__PURE__ */ Ul.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ e2({
    key: "css"
  }) : null
), MA = u2.Provider, ab = function(h) {
  return /* @__PURE__ */ qE(function(p, y) {
    var b = YE(u2);
    return h(p, b, y);
  });
}, ub = /* @__PURE__ */ Ul.createContext({}), Gp = {}.hasOwnProperty, Q1 = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", ib = function(h, p) {
  var y = {};
  for (var b in p)
    Gp.call(p, b) && (y[b] = p[b]);
  return y[Q1] = h, y;
}, UA = function(h) {
  var p = h.cache, y = h.serialized, b = h.isStringTag;
  return lb(p, y, b), a2(function() {
    return nb(p, y, b);
  }), null;
}, CA = /* @__PURE__ */ ab(function(s, h, p) {
  var y = s.css;
  typeof y == "string" && h.registered[y] !== void 0 && (y = h.registered[y]);
  var b = s[Q1], E = [y], R = "";
  typeof s.className == "string" ? R = t2(h.registered, E, s.className) : s.className != null && (R = s.className + " ");
  var w = iv(E, void 0, Ul.useContext(ub));
  R += h.key + "-" + w.name;
  var U = {};
  for (var j in s)
    Gp.call(s, j) && j !== "css" && j !== Q1 && (U[j] = s[j]);
  return U.className = R, p && (U.ref = p), /* @__PURE__ */ Ul.createElement(Ul.Fragment, null, /* @__PURE__ */ Ul.createElement(UA, {
    cache: h,
    serialized: w,
    isStringTag: typeof b == "string"
  }), /* @__PURE__ */ Ul.createElement(b, U));
}), cb = CA, Ml = function(h, p, y) {
  return Gp.call(p, "css") ? Ig.jsx(cb, ib(h, p), y) : Ig.jsx(h, p, y);
}, Tf = function(h, p, y) {
  return Gp.call(p, "css") ? Ig.jsxs(cb, ib(h, p), y) : Ig.jsxs(h, p, y);
}, Zg = { exports: {} }, _p = {}, kg = { exports: {} }, B1 = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var AT;
function HA() {
  return AT || (AT = 1, function(s) {
    function h(C, te) {
      var ue = C.length;
      C.push(te);
      e: for (; 0 < ue; ) {
        var Oe = ue - 1 >>> 1, G = C[Oe];
        if (0 < b(G, te))
          C[Oe] = te, C[ue] = G, ue = Oe;
        else break e;
      }
    }
    function p(C) {
      return C.length === 0 ? null : C[0];
    }
    function y(C) {
      if (C.length === 0) return null;
      var te = C[0], ue = C.pop();
      if (ue !== te) {
        C[0] = ue;
        e: for (var Oe = 0, G = C.length, ye = G >>> 1; Oe < ye; ) {
          var fe = 2 * (Oe + 1) - 1, ze = C[fe], Ve = fe + 1, gt = C[Ve];
          if (0 > b(ze, ue))
            Ve < G && 0 > b(gt, ze) ? (C[Oe] = gt, C[Ve] = ue, Oe = Ve) : (C[Oe] = ze, C[fe] = ue, Oe = fe);
          else if (Ve < G && 0 > b(gt, ue))
            C[Oe] = gt, C[Ve] = ue, Oe = Ve;
          else break e;
        }
      }
      return te;
    }
    function b(C, te) {
      var ue = C.sortIndex - te.sortIndex;
      return ue !== 0 ? ue : C.id - te.id;
    }
    if (s.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var E = performance;
      s.unstable_now = function() {
        return E.now();
      };
    } else {
      var R = Date, w = R.now();
      s.unstable_now = function() {
        return R.now() - w;
      };
    }
    var U = [], j = [], _ = 1, $ = null, ie = 3, me = !1, ee = !1, ne = !1, I = !1, ce = typeof setTimeout == "function" ? setTimeout : null, be = typeof clearTimeout == "function" ? clearTimeout : null, re = typeof setImmediate < "u" ? setImmediate : null;
    function Ae(C) {
      for (var te = p(j); te !== null; ) {
        if (te.callback === null) y(j);
        else if (te.startTime <= C)
          y(j), te.sortIndex = te.expirationTime, h(U, te);
        else break;
        te = p(j);
      }
    }
    function le(C) {
      if (ne = !1, Ae(C), !ee)
        if (p(U) !== null)
          ee = !0, Te || (Te = !0, we());
        else {
          var te = p(j);
          te !== null && Qt(le, te.startTime - C);
        }
    }
    var Te = !1, de = -1, st = 5, Se = -1;
    function dt() {
      return I ? !0 : !(s.unstable_now() - Se < st);
    }
    function Je() {
      if (I = !1, Te) {
        var C = s.unstable_now();
        Se = C;
        var te = !0;
        try {
          e: {
            ee = !1, ne && (ne = !1, be(de), de = -1), me = !0;
            var ue = ie;
            try {
              t: {
                for (Ae(C), $ = p(U); $ !== null && !($.expirationTime > C && dt()); ) {
                  var Oe = $.callback;
                  if (typeof Oe == "function") {
                    $.callback = null, ie = $.priorityLevel;
                    var G = Oe(
                      $.expirationTime <= C
                    );
                    if (C = s.unstable_now(), typeof G == "function") {
                      $.callback = G, Ae(C), te = !0;
                      break t;
                    }
                    $ === p(U) && y(U), Ae(C);
                  } else y(U);
                  $ = p(U);
                }
                if ($ !== null) te = !0;
                else {
                  var ye = p(j);
                  ye !== null && Qt(
                    le,
                    ye.startTime - C
                  ), te = !1;
                }
              }
              break e;
            } finally {
              $ = null, ie = ue, me = !1;
            }
            te = void 0;
          }
        } finally {
          te ? we() : Te = !1;
        }
      }
    }
    var we;
    if (typeof re == "function")
      we = function() {
        re(Je);
      };
    else if (typeof MessageChannel < "u") {
      var kt = new MessageChannel(), pl = kt.port2;
      kt.port1.onmessage = Je, we = function() {
        pl.postMessage(null);
      };
    } else
      we = function() {
        ce(Je, 0);
      };
    function Qt(C, te) {
      de = ce(function() {
        C(s.unstable_now());
      }, te);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(C) {
      C.callback = null;
    }, s.unstable_forceFrameRate = function(C) {
      0 > C || 125 < C ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : st = 0 < C ? Math.floor(1e3 / C) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return ie;
    }, s.unstable_next = function(C) {
      switch (ie) {
        case 1:
        case 2:
        case 3:
          var te = 3;
          break;
        default:
          te = ie;
      }
      var ue = ie;
      ie = te;
      try {
        return C();
      } finally {
        ie = ue;
      }
    }, s.unstable_requestPaint = function() {
      I = !0;
    }, s.unstable_runWithPriority = function(C, te) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var ue = ie;
      ie = C;
      try {
        return te();
      } finally {
        ie = ue;
      }
    }, s.unstable_scheduleCallback = function(C, te, ue) {
      var Oe = s.unstable_now();
      switch (typeof ue == "object" && ue !== null ? (ue = ue.delay, ue = typeof ue == "number" && 0 < ue ? Oe + ue : Oe) : ue = Oe, C) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return G = ue + G, C = {
        id: _++,
        callback: te,
        priorityLevel: C,
        startTime: ue,
        expirationTime: G,
        sortIndex: -1
      }, ue > Oe ? (C.sortIndex = ue, h(j, C), p(U) === null && C === p(j) && (ne ? (be(de), de = -1) : ne = !0, Qt(le, ue - Oe))) : (C.sortIndex = G, h(U, C), ee || me || (ee = !0, Te || (Te = !0, we()))), C;
    }, s.unstable_shouldYield = dt, s.unstable_wrapCallback = function(C) {
      var te = ie;
      return function() {
        var ue = ie;
        ie = te;
        try {
          return C.apply(this, arguments);
        } finally {
          ie = ue;
        }
      };
    };
  }(B1)), B1;
}
var q1 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var RT;
function wA() {
  return RT || (RT = 1, function(s) {
    process.env.NODE_ENV !== "production" && function() {
      function h() {
        if (le = !1, Se) {
          var C = s.unstable_now();
          we = C;
          var te = !0;
          try {
            e: {
              re = !1, Ae && (Ae = !1, de(dt), dt = -1), be = !0;
              var ue = ce;
              try {
                t: {
                  for (R(C), I = y(me); I !== null && !(I.expirationTime > C && U()); ) {
                    var Oe = I.callback;
                    if (typeof Oe == "function") {
                      I.callback = null, ce = I.priorityLevel;
                      var G = Oe(
                        I.expirationTime <= C
                      );
                      if (C = s.unstable_now(), typeof G == "function") {
                        I.callback = G, R(C), te = !0;
                        break t;
                      }
                      I === y(me) && b(me), R(C);
                    } else b(me);
                    I = y(me);
                  }
                  if (I !== null) te = !0;
                  else {
                    var ye = y(ee);
                    ye !== null && j(
                      w,
                      ye.startTime - C
                    ), te = !1;
                  }
                }
                break e;
              } finally {
                I = null, ce = ue, be = !1;
              }
              te = void 0;
            }
          } finally {
            te ? kt() : Se = !1;
          }
        }
      }
      function p(C, te) {
        var ue = C.length;
        C.push(te);
        e: for (; 0 < ue; ) {
          var Oe = ue - 1 >>> 1, G = C[Oe];
          if (0 < E(G, te))
            C[Oe] = te, C[ue] = G, ue = Oe;
          else break e;
        }
      }
      function y(C) {
        return C.length === 0 ? null : C[0];
      }
      function b(C) {
        if (C.length === 0) return null;
        var te = C[0], ue = C.pop();
        if (ue !== te) {
          C[0] = ue;
          e: for (var Oe = 0, G = C.length, ye = G >>> 1; Oe < ye; ) {
            var fe = 2 * (Oe + 1) - 1, ze = C[fe], Ve = fe + 1, gt = C[Ve];
            if (0 > E(ze, ue))
              Ve < G && 0 > E(gt, ze) ? (C[Oe] = gt, C[Ve] = ue, Oe = Ve) : (C[Oe] = ze, C[fe] = ue, Oe = fe);
            else if (Ve < G && 0 > E(gt, ue))
              C[Oe] = gt, C[Ve] = ue, Oe = Ve;
            else break e;
          }
        }
        return te;
      }
      function E(C, te) {
        var ue = C.sortIndex - te.sortIndex;
        return ue !== 0 ? ue : C.id - te.id;
      }
      function R(C) {
        for (var te = y(ee); te !== null; ) {
          if (te.callback === null) b(ee);
          else if (te.startTime <= C)
            b(ee), te.sortIndex = te.expirationTime, p(me, te);
          else break;
          te = y(ee);
        }
      }
      function w(C) {
        if (Ae = !1, R(C), !re)
          if (y(me) !== null)
            re = !0, Se || (Se = !0, kt());
          else {
            var te = y(ee);
            te !== null && j(
              w,
              te.startTime - C
            );
          }
      }
      function U() {
        return le ? !0 : !(s.unstable_now() - we < Je);
      }
      function j(C, te) {
        dt = Te(function() {
          C(s.unstable_now());
        }, te);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), s.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var _ = performance;
        s.unstable_now = function() {
          return _.now();
        };
      } else {
        var $ = Date, ie = $.now();
        s.unstable_now = function() {
          return $.now() - ie;
        };
      }
      var me = [], ee = [], ne = 1, I = null, ce = 3, be = !1, re = !1, Ae = !1, le = !1, Te = typeof setTimeout == "function" ? setTimeout : null, de = typeof clearTimeout == "function" ? clearTimeout : null, st = typeof setImmediate < "u" ? setImmediate : null, Se = !1, dt = -1, Je = 5, we = -1;
      if (typeof st == "function")
        var kt = function() {
          st(h);
        };
      else if (typeof MessageChannel < "u") {
        var pl = new MessageChannel(), Qt = pl.port2;
        pl.port1.onmessage = h, kt = function() {
          Qt.postMessage(null);
        };
      } else
        kt = function() {
          Te(h, 0);
        };
      s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(C) {
        C.callback = null;
      }, s.unstable_forceFrameRate = function(C) {
        0 > C || 125 < C ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Je = 0 < C ? Math.floor(1e3 / C) : 5;
      }, s.unstable_getCurrentPriorityLevel = function() {
        return ce;
      }, s.unstable_next = function(C) {
        switch (ce) {
          case 1:
          case 2:
          case 3:
            var te = 3;
            break;
          default:
            te = ce;
        }
        var ue = ce;
        ce = te;
        try {
          return C();
        } finally {
          ce = ue;
        }
      }, s.unstable_requestPaint = function() {
        le = !0;
      }, s.unstable_runWithPriority = function(C, te) {
        switch (C) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            C = 3;
        }
        var ue = ce;
        ce = C;
        try {
          return te();
        } finally {
          ce = ue;
        }
      }, s.unstable_scheduleCallback = function(C, te, ue) {
        var Oe = s.unstable_now();
        switch (typeof ue == "object" && ue !== null ? (ue = ue.delay, ue = typeof ue == "number" && 0 < ue ? Oe + ue : Oe) : ue = Oe, C) {
          case 1:
            var G = -1;
            break;
          case 2:
            G = 250;
            break;
          case 5:
            G = 1073741823;
            break;
          case 4:
            G = 1e4;
            break;
          default:
            G = 5e3;
        }
        return G = ue + G, C = {
          id: ne++,
          callback: te,
          priorityLevel: C,
          startTime: ue,
          expirationTime: G,
          sortIndex: -1
        }, ue > Oe ? (C.sortIndex = ue, p(ee, C), y(me) === null && C === y(ee) && (Ae ? (de(dt), dt = -1) : Ae = !0, j(w, ue - Oe))) : (C.sortIndex = G, p(me, C), re || be || (re = !0, Se || (Se = !0, kt()))), C;
      }, s.unstable_shouldYield = U, s.unstable_wrapCallback = function(C) {
        var te = ce;
        return function() {
          var ue = ce;
          ce = te;
          try {
            return C.apply(this, arguments);
          } finally {
            ce = ue;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(q1)), q1;
}
var OT;
function i2() {
  return OT || (OT = 1, process.env.NODE_ENV === "production" ? kg.exports = HA() : kg.exports = wA()), kg.exports;
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
var DT;
function _A() {
  if (DT) return _p;
  DT = 1;
  var s = i2(), h = P1, p = ZT;
  function y(l) {
    var a = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      a += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        a += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function b(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function E(l) {
    var a = l, u = l;
    if (l.alternate) for (; a.return; ) a = a.return;
    else {
      l = a;
      do
        a = l, (a.flags & 4098) !== 0 && (u = a.return), l = a.return;
      while (l);
    }
    return a.tag === 3 ? u : null;
  }
  function R(l) {
    if (l.tag === 13) {
      var a = l.memoizedState;
      if (a === null && (l = l.alternate, l !== null && (a = l.memoizedState)), a !== null) return a.dehydrated;
    }
    return null;
  }
  function w(l) {
    if (E(l) !== l)
      throw Error(y(188));
  }
  function U(l) {
    var a = l.alternate;
    if (!a) {
      if (a = E(l), a === null) throw Error(y(188));
      return a !== l ? null : l;
    }
    for (var u = l, c = a; ; ) {
      var r = u.return;
      if (r === null) break;
      var d = r.alternate;
      if (d === null) {
        if (c = r.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (r.child === d.child) {
        for (d = r.child; d; ) {
          if (d === u) return w(r), l;
          if (d === c) return w(r), a;
          d = d.sibling;
        }
        throw Error(y(188));
      }
      if (u.return !== c.return) u = r, c = d;
      else {
        for (var v = !1, S = r.child; S; ) {
          if (S === u) {
            v = !0, u = r, c = d;
            break;
          }
          if (S === c) {
            v = !0, c = r, u = d;
            break;
          }
          S = S.sibling;
        }
        if (!v) {
          for (S = d.child; S; ) {
            if (S === u) {
              v = !0, u = d, c = r;
              break;
            }
            if (S === c) {
              v = !0, c = d, u = r;
              break;
            }
            S = S.sibling;
          }
          if (!v) throw Error(y(189));
        }
      }
      if (u.alternate !== c) throw Error(y(190));
    }
    if (u.tag !== 3) throw Error(y(188));
    return u.stateNode.current === u ? l : a;
  }
  function j(l) {
    var a = l.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return l;
    for (l = l.child; l !== null; ) {
      if (a = j(l), a !== null) return a;
      l = l.sibling;
    }
    return null;
  }
  var _ = Object.assign, $ = Symbol.for("react.element"), ie = Symbol.for("react.transitional.element"), me = Symbol.for("react.portal"), ee = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), ce = Symbol.for("react.provider"), be = Symbol.for("react.consumer"), re = Symbol.for("react.context"), Ae = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), Te = Symbol.for("react.suspense_list"), de = Symbol.for("react.memo"), st = Symbol.for("react.lazy"), Se = Symbol.for("react.activity"), dt = Symbol.for("react.memo_cache_sentinel"), Je = Symbol.iterator;
  function we(l) {
    return l === null || typeof l != "object" ? null : (l = Je && l[Je] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var kt = Symbol.for("react.client.reference");
  function pl(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === kt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case ee:
        return "Fragment";
      case I:
        return "Profiler";
      case ne:
        return "StrictMode";
      case le:
        return "Suspense";
      case Te:
        return "SuspenseList";
      case Se:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case me:
          return "Portal";
        case re:
          return (l.displayName || "Context") + ".Provider";
        case be:
          return (l._context.displayName || "Context") + ".Consumer";
        case Ae:
          var a = l.render;
          return l = l.displayName, l || (l = a.displayName || a.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case de:
          return a = l.displayName || null, a !== null ? a : pl(l.type) || "Memo";
        case st:
          a = l._payload, l = l._init;
          try {
            return pl(l(a));
          } catch {
          }
      }
    return null;
  }
  var Qt = Array.isArray, C = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, te = p.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ue = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Oe = [], G = -1;
  function ye(l) {
    return { current: l };
  }
  function fe(l) {
    0 > G || (l.current = Oe[G], Oe[G] = null, G--);
  }
  function ze(l, a) {
    G++, Oe[G] = l.current, l.current = a;
  }
  var Ve = ye(null), gt = ye(null), $e = ye(null), Ra = ye(null);
  function zt(l, a) {
    switch (ze($e, a), ze(gt, l), ze(Ve, null), a.nodeType) {
      case 9:
      case 11:
        l = (l = a.documentElement) && (l = l.namespaceURI) ? ju(l) : 0;
        break;
      default:
        if (l = a.tagName, a = a.namespaceURI)
          a = ju(a), l = Wo(a, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    fe(Ve), ze(Ve, l);
  }
  function Wt() {
    fe(Ve), fe(gt), fe($e);
  }
  function Fl(l) {
    l.memoizedState !== null && ze(Ra, l);
    var a = Ve.current, u = Wo(a, l.type);
    a !== u && (ze(gt, l), ze(Ve, u));
  }
  function yu(l) {
    gt.current === l && (fe(Ve), fe(gt)), Ra.current === l && (fe(Ra), hn._currentValue = ue);
  }
  var Ee = Object.prototype.hasOwnProperty, na = s.unstable_scheduleCallback, Fu = s.unstable_cancelCallback, ds = s.unstable_shouldYield, Ki = s.unstable_requestPaint, gn = s.unstable_now, Ef = s.unstable_getCurrentPriorityLevel, Jp = s.unstable_ImmediatePriority, Lh = s.unstable_UserBlockingPriority, Af = s.unstable_NormalPriority, Vh = s.unstable_LowPriority, lo = s.unstable_IdlePriority, hv = s.log, Kp = s.unstable_setDisableYieldValue, no = null, jl = null;
  function pu(l) {
    if (typeof hv == "function" && Kp(l), jl && typeof jl.setStrictMode == "function")
      try {
        jl.setStrictMode(no, l);
      } catch {
      }
  }
  var Pl = Math.clz32 ? Math.clz32 : mv, Gh = Math.log, $p = Math.LN2;
  function mv(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Gh(l) / $p | 0) | 0;
  }
  var ao = 256, gu = 4194304;
  function vn(l) {
    var a = l & 42;
    if (a !== 0) return a;
    switch (l & -l) {
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
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
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
        return l;
    }
  }
  function Pu(l, a, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var r = 0, d = l.suspendedLanes, v = l.pingedLanes;
    l = l.warmLanes;
    var S = c & 134217727;
    return S !== 0 ? (c = S & ~d, c !== 0 ? r = vn(c) : (v &= S, v !== 0 ? r = vn(v) : u || (u = S & ~l, u !== 0 && (r = vn(u))))) : (S = c & ~d, S !== 0 ? r = vn(S) : v !== 0 ? r = vn(v) : u || (u = c & ~l, u !== 0 && (r = vn(u)))), r === 0 ? 0 : a !== 0 && a !== r && (a & d) === 0 && (d = r & -r, u = a & -a, d >= u || d === 32 && (u & 4194048) !== 0) ? a : r;
  }
  function Oa(l, a) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & a) === 0;
  }
  function il(l, a) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return a + 250;
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
        return a + 5e3;
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
  function Iu() {
    var l = ao;
    return ao <<= 1, (ao & 4194048) === 0 && (ao = 256), l;
  }
  function $i() {
    var l = gu;
    return gu <<= 1, (gu & 62914560) === 0 && (gu = 4194304), l;
  }
  function ei(l) {
    for (var a = [], u = 0; 31 > u; u++) a.push(l);
    return a;
  }
  function Wi(l, a) {
    l.pendingLanes |= a, a !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Wp(l, a, u, c, r, d) {
    var v = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var S = l.entanglements, O = l.expirationTimes, B = l.hiddenUpdates;
    for (u = v & ~u; 0 < u; ) {
      var W = 31 - Pl(u), P = 1 << W;
      S[W] = 0, O[W] = -1;
      var Y = B[W];
      if (Y !== null)
        for (B[W] = null, W = 0; W < Y.length; W++) {
          var V = Y[W];
          V !== null && (V.lane &= -536870913);
        }
      u &= ~P;
    }
    c !== 0 && Rf(l, c, 0), d !== 0 && r === 0 && l.tag !== 0 && (l.suspendedLanes |= d & ~(v & ~a));
  }
  function Rf(l, a, u) {
    l.pendingLanes |= a, l.suspendedLanes &= ~a;
    var c = 31 - Pl(a);
    l.entangledLanes |= a, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 4194090;
  }
  function Of(l, a) {
    var u = l.entangledLanes |= a;
    for (l = l.entanglements; u; ) {
      var c = 31 - Pl(u), r = 1 << c;
      r & a | l[c] & a && (l[c] |= a), u &= ~r;
    }
  }
  function aa(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function hs(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Fp() {
    var l = te.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : ky(l.type));
  }
  function yv(l, a) {
    var u = te.p;
    try {
      return te.p = l, a();
    } finally {
      te.p = u;
    }
  }
  var Ft = Math.random().toString(36).slice(2), cl = "__reactFiber$" + Ft, Ll = "__reactProps$" + Ft, uo = "__reactContainer$" + Ft, ms = "__reactEvents$" + Ft, Pp = "__reactListeners$" + Ft, ys = "__reactHandles$" + Ft, Ip = "__reactResources$" + Ft, pe = "__reactMarker$" + Ft;
  function Df(l) {
    delete l[cl], delete l[Ll], delete l[ms], delete l[Pp], delete l[ys];
  }
  function gl(l) {
    var a = l[cl];
    if (a) return a;
    for (var u = l.parentNode; u; ) {
      if (a = u[uo] || u[cl]) {
        if (u = a.alternate, a.child !== null || u !== null && u.child !== null)
          for (l = Rl(l); l !== null; ) {
            if (u = l[cl]) return u;
            l = Rl(l);
          }
        return a;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Fi(l) {
    if (l = l[cl] || l[uo]) {
      var a = l.tag;
      if (a === 5 || a === 6 || a === 13 || a === 26 || a === 27 || a === 3)
        return l;
    }
    return null;
  }
  function xf(l) {
    var a = l.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return l.stateNode;
    throw Error(y(33));
  }
  function vu(l) {
    var a = l[Ip];
    return a || (a = l[Ip] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), a;
  }
  function Pt(l) {
    l[pe] = !0;
  }
  var zf = /* @__PURE__ */ new Set(), bn = {};
  function ti(l, a) {
    li(l, a), li(l + "Capture", a);
  }
  function li(l, a) {
    for (bn[l] = a, l = 0; l < a.length; l++)
      zf.add(a[l]);
  }
  var e0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ps = {}, Xh = {};
  function t0(l) {
    return Ee.call(Xh, l) ? !0 : Ee.call(ps, l) ? !1 : e0.test(l) ? Xh[l] = !0 : (ps[l] = !0, !1);
  }
  function bu(l, a, u) {
    if (t0(a))
      if (u === null) l.removeAttribute(a);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(a);
            return;
          case "boolean":
            var c = a.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(a);
              return;
            }
        }
        l.setAttribute(a, "" + u);
      }
  }
  function Mf(l, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttribute(a, "" + u);
    }
  }
  function Da(l, a, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(a, u, "" + c);
    }
  }
  var gs, Qh;
  function Pi(l) {
    if (gs === void 0)
      try {
        throw Error();
      } catch (u) {
        var a = u.stack.trim().match(/\n( *(at )?)/);
        gs = a && a[1] || "", Qh = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + gs + l + Qh;
  }
  var Vl = !1;
  function ni(l, a) {
    if (!l || Vl) return "";
    Vl = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (a) {
              var P = function() {
                throw Error();
              };
              if (Object.defineProperty(P.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(P, []);
                } catch (V) {
                  var Y = V;
                }
                Reflect.construct(l, [], P);
              } else {
                try {
                  P.call();
                } catch (V) {
                  Y = V;
                }
                l.call(P.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (V) {
                Y = V;
              }
              (P = l()) && typeof P.catch == "function" && P.catch(function() {
              });
            }
          } catch (V) {
            if (V && Y && typeof V.stack == "string")
              return [V.stack, Y.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      r && r.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var d = c.DetermineComponentFrameRoot(), v = d[0], S = d[1];
      if (v && S) {
        var O = v.split(`
`), B = S.split(`
`);
        for (r = c = 0; c < O.length && !O[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; r < B.length && !B[r].includes(
          "DetermineComponentFrameRoot"
        ); )
          r++;
        if (c === O.length || r === B.length)
          for (c = O.length - 1, r = B.length - 1; 1 <= c && 0 <= r && O[c] !== B[r]; )
            r--;
        for (; 1 <= c && 0 <= r; c--, r--)
          if (O[c] !== B[r]) {
            if (c !== 1 || r !== 1)
              do
                if (c--, r--, 0 > r || O[c] !== B[r]) {
                  var W = `
` + O[c].replace(" at new ", " at ");
                  return l.displayName && W.includes("<anonymous>") && (W = W.replace("<anonymous>", l.displayName)), W;
                }
              while (1 <= c && 0 <= r);
            break;
          }
      }
    } finally {
      Vl = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Pi(u) : "";
  }
  function Ii(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Pi(l.type);
      case 16:
        return Pi("Lazy");
      case 13:
        return Pi("Suspense");
      case 19:
        return Pi("SuspenseList");
      case 0:
      case 15:
        return ni(l.type, !1);
      case 11:
        return ni(l.type.render, !1);
      case 1:
        return ni(l.type, !0);
      case 31:
        return Pi("Activity");
      default:
        return "";
    }
  }
  function Zh(l) {
    try {
      var a = "";
      do
        a += Ii(l), l = l.return;
      while (l);
      return a;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function Cl(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Uf(l) {
    var a = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (a === "checkbox" || a === "radio");
  }
  function kh(l) {
    var a = Uf(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      a
    ), c = "" + l[a];
    if (!l.hasOwnProperty(a) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var r = u.get, d = u.set;
      return Object.defineProperty(l, a, {
        configurable: !0,
        get: function() {
          return r.call(this);
        },
        set: function(v) {
          c = "" + v, d.call(this, v);
        }
      }), Object.defineProperty(l, a, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return c;
        },
        setValue: function(v) {
          c = "" + v;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[a];
        }
      };
    }
  }
  function ai(l) {
    l._valueTracker || (l._valueTracker = kh(l));
  }
  function ec(l) {
    if (!l) return !1;
    var a = l._valueTracker;
    if (!a) return !0;
    var u = a.getValue(), c = "";
    return l && (c = Uf(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (a.setValue(l), !0) : !1;
  }
  function io(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var pv = /[\n"\\]/g;
  function Nn(l) {
    return l.replace(
      pv,
      function(a) {
        return "\\" + a.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function vs(l, a, u, c, r, d, v, S) {
    l.name = "", v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? l.type = v : l.removeAttribute("type"), a != null ? v === "number" ? (a === 0 && l.value === "" || l.value != a) && (l.value = "" + Cl(a)) : l.value !== "" + Cl(a) && (l.value = "" + Cl(a)) : v !== "submit" && v !== "reset" || l.removeAttribute("value"), a != null ? Cf(l, v, Cl(a)) : u != null ? Cf(l, v, Cl(u)) : c != null && l.removeAttribute("value"), r == null && d != null && (l.defaultChecked = !!d), r != null && (l.checked = r && typeof r != "function" && typeof r != "symbol"), S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" ? l.name = "" + Cl(S) : l.removeAttribute("name");
  }
  function bs(l, a, u, c, r, d, v, S) {
    if (d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (l.type = d), a != null || u != null) {
      if (!(d !== "submit" && d !== "reset" || a != null))
        return;
      u = u != null ? "" + Cl(u) : "", a = a != null ? "" + Cl(a) : u, S || a === l.value || (l.value = a), l.defaultValue = a;
    }
    c = c ?? r, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = S ? l.checked : !!c, l.defaultChecked = !!c, v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (l.name = v);
  }
  function Cf(l, a, u) {
    a === "number" && io(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function tc(l, a, u, c) {
    if (l = l.options, a) {
      a = {};
      for (var r = 0; r < u.length; r++)
        a["$" + u[r]] = !0;
      for (u = 0; u < l.length; u++)
        r = a.hasOwnProperty("$" + l[u].value), l[u].selected !== r && (l[u].selected = r), r && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Cl(u), a = null, r = 0; r < l.length; r++) {
        if (l[r].value === u) {
          l[r].selected = !0, c && (l[r].defaultSelected = !0);
          return;
        }
        a !== null || l[r].disabled || (a = l[r]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function Jh(l, a, u) {
    if (a != null && (a = "" + Cl(a), a !== l.value && (l.value = a), u == null)) {
      l.defaultValue !== a && (l.defaultValue = a);
      return;
    }
    l.defaultValue = u != null ? "" + Cl(u) : "";
  }
  function Kh(l, a, u, c) {
    if (a == null) {
      if (c != null) {
        if (u != null) throw Error(y(92));
        if (Qt(c)) {
          if (1 < c.length) throw Error(y(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), a = u;
    }
    u = Cl(a), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c);
  }
  function co(l, a) {
    if (a) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = a;
        return;
      }
    }
    l.textContent = a;
  }
  var l0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ss(l, a, u) {
    var c = a.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "" : c ? l.setProperty(a, u) : typeof u != "number" || u === 0 || l0.has(a) ? a === "float" ? l.cssFloat = u : l[a] = ("" + u).trim() : l[a] = u + "px";
  }
  function Hf(l, a, u) {
    if (a != null && typeof a != "object")
      throw Error(y(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || a != null && a.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var r in a)
        c = a[r], a.hasOwnProperty(r) && u[r] !== c && Ss(l, r, c);
    } else
      for (var d in a)
        a.hasOwnProperty(d) && Ss(l, d, a[d]);
  }
  function lc(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var gv = /* @__PURE__ */ new Map([
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
  ]), n0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function wf(l) {
    return n0.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var nc = null;
  function Ts(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var oo = null, fo = null;
  function a0(l) {
    var a = Fi(l);
    if (a && (l = a.stateNode)) {
      var u = l[Ll] || null;
      e: switch (l = a.stateNode, a.type) {
        case "input":
          if (vs(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), a = u.name, u.type === "radio" && a != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Nn(
                "" + a
              ) + '"][type="radio"]'
            ), a = 0; a < u.length; a++) {
              var c = u[a];
              if (c !== l && c.form === l.form) {
                var r = c[Ll] || null;
                if (!r) throw Error(y(90));
                vs(
                  c,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name
                );
              }
            }
            for (a = 0; a < u.length; a++)
              c = u[a], c.form === l.form && ec(c);
          }
          break e;
        case "textarea":
          Jh(l, u.value, u.defaultValue);
          break e;
        case "select":
          a = u.value, a != null && tc(l, !!u.multiple, a, !1);
      }
    }
  }
  var $h = !1;
  function ro(l, a, u) {
    if ($h) return l(a, u);
    $h = !0;
    try {
      var c = l(a);
      return c;
    } finally {
      if ($h = !1, (oo !== null || fo !== null) && (Nc(), oo && (a = oo, l = fo, fo = oo = null, a0(a), l)))
        for (a = 0; a < l.length; a++) a0(l[a]);
    }
  }
  function ac(l, a) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[Ll] || null;
    if (c === null) return null;
    u = c[a];
    e: switch (a) {
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
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        y(231, a, typeof u)
      );
    return u;
  }
  var xa = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Es = !1;
  if (xa)
    try {
      var Su = {};
      Object.defineProperty(Su, "passive", {
        get: function() {
          Es = !0;
        }
      }), window.addEventListener("test", Su, Su), window.removeEventListener("test", Su, Su);
    } catch {
      Es = !1;
    }
  var Tu = null, so = null, uc = null;
  function Wh() {
    if (uc) return uc;
    var l, a = so, u = a.length, c, r = "value" in Tu ? Tu.value : Tu.textContent, d = r.length;
    for (l = 0; l < u && a[l] === r[l]; l++) ;
    var v = u - l;
    for (c = 1; c <= v && a[u - c] === r[d - c]; c++) ;
    return uc = r.slice(l, 1 < c ? 1 - c : void 0);
  }
  function vl(l) {
    var a = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && a === 13 && (l = 13)) : l = a, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function As() {
    return !0;
  }
  function Rs() {
    return !1;
  }
  function Gl(l) {
    function a(u, c, r, d, v) {
      this._reactName = u, this._targetInst = r, this.type = c, this.nativeEvent = d, this.target = v, this.currentTarget = null;
      for (var S in l)
        l.hasOwnProperty(S) && (u = l[S], this[S] = u ? u(d) : d[S]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? As : Rs, this.isPropagationStopped = Rs, this;
    }
    return _(a.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = As);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = As);
      },
      persist: function() {
      },
      isPersistent: As
    }), a;
  }
  var ui = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Os = Gl(ui), _f = _({}, ui, { view: 0, detail: 0 }), u0 = Gl(_f), Fh, Ds, Nf, ic = _({}, _f, {
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
    getModifierState: Eu,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Nf && (Nf && l.type === "mousemove" ? (Fh = l.screenX - Nf.screenX, Ds = l.screenY - Nf.screenY) : Ds = Fh = 0, Nf = l), Fh);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Ds;
    }
  }), Ph = Gl(ic), i0 = _({}, ic, { dataTransfer: 0 }), c0 = Gl(i0), vv = _({}, _f, { relatedTarget: 0 }), Ih = Gl(vv), bv = _({}, ui, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Sv = Gl(bv), Tv = _({}, ui, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Bf = Gl(Tv), o0 = _({}, ui, { data: 0 }), em = Gl(o0), f0 = {
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
  }, r0 = {
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
  }, tm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function s0(l) {
    var a = this.nativeEvent;
    return a.getModifierState ? a.getModifierState(l) : (l = tm[l]) ? !!a[l] : !1;
  }
  function Eu() {
    return s0;
  }
  var cc = _({}, _f, {
    key: function(l) {
      if (l.key) {
        var a = f0[l.key] || l.key;
        if (a !== "Unidentified") return a;
      }
      return l.type === "keypress" ? (l = vl(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? r0[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Eu,
    charCode: function(l) {
      return l.type === "keypress" ? vl(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? vl(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), ua = Gl(cc), Sn = _({}, ic, {
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
  }), qf = Gl(Sn), xs = _({}, _f, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Eu
  }), lm = Gl(xs), Il = _({}, ui, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), d0 = Gl(Il), zs = _({}, ic, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), oc = Gl(zs), nm = _({}, ui, {
    newState: 0,
    oldState: 0
  }), h0 = Gl(nm), m0 = [9, 13, 27, 32], Yf = xa && "CompositionEvent" in window, jf = null;
  xa && "documentMode" in document && (jf = document.documentMode);
  var am = xa && "TextEvent" in window && !jf, za = xa && (!Yf || jf && 8 < jf && 11 >= jf), um = " ", Ms = !1;
  function Lf(l, a) {
    switch (l) {
      case "keyup":
        return m0.indexOf(a.keyCode) !== -1;
      case "keydown":
        return a.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ii(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ci = !1;
  function im(l, a) {
    switch (l) {
      case "compositionend":
        return ii(a);
      case "keypress":
        return a.which !== 32 ? null : (Ms = !0, um);
      case "textInput":
        return l = a.data, l === um && Ms ? null : l;
      default:
        return null;
    }
  }
  function fc(l, a) {
    if (ci)
      return l === "compositionend" || !Yf && Lf(l, a) ? (l = Wh(), uc = so = Tu = null, ci = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(a.ctrlKey || a.altKey || a.metaKey) || a.ctrlKey && a.altKey) {
          if (a.char && 1 < a.char.length)
            return a.char;
          if (a.which) return String.fromCharCode(a.which);
        }
        return null;
      case "compositionend":
        return za && a.locale !== "ko" ? null : a.data;
      default:
        return null;
    }
  }
  var y0 = {
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
  function Us(l) {
    var a = l && l.nodeName && l.nodeName.toLowerCase();
    return a === "input" ? !!y0[l.type] : a === "textarea";
  }
  function Cs(l, a, u, c) {
    oo ? fo ? fo.push(c) : fo = [c] : oo = c, a = $o(a, "onChange"), 0 < a.length && (u = new Os(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: a }));
  }
  var ia = null, ca = null;
  function cm(l) {
    jc(l, 0);
  }
  function Ma(l) {
    var a = xf(l);
    if (ec(a)) return l;
  }
  function om(l, a) {
    if (l === "change") return a;
  }
  var fm = !1;
  if (xa) {
    var rc;
    if (xa) {
      var sc = "oninput" in document;
      if (!sc) {
        var rm = document.createElement("div");
        rm.setAttribute("oninput", "return;"), sc = typeof rm.oninput == "function";
      }
      rc = sc;
    } else rc = !1;
    fm = rc && (!document.documentMode || 9 < document.documentMode);
  }
  function ho() {
    ia && (ia.detachEvent("onpropertychange", sm), ca = ia = null);
  }
  function sm(l) {
    if (l.propertyName === "value" && Ma(ca)) {
      var a = [];
      Cs(
        a,
        ca,
        l,
        Ts(l)
      ), ro(cm, a);
    }
  }
  function Hs(l, a, u) {
    l === "focusin" ? (ho(), ia = a, ca = u, ia.attachEvent("onpropertychange", sm)) : l === "focusout" && ho();
  }
  function oi(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ma(ca);
  }
  function Au(l, a) {
    if (l === "click") return Ma(a);
  }
  function dm(l, a) {
    if (l === "input" || l === "change")
      return Ma(a);
  }
  function hm(l, a) {
    return l === a && (l !== 0 || 1 / l === 1 / a) || l !== l && a !== a;
  }
  var bl = typeof Object.is == "function" ? Object.is : hm;
  function fi(l, a) {
    if (bl(l, a)) return !0;
    if (typeof l != "object" || l === null || typeof a != "object" || a === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(a);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var r = u[c];
      if (!Ee.call(a, r) || !bl(l[r], a[r]))
        return !1;
    }
    return !0;
  }
  function ri(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Ot(l, a) {
    var u = ri(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= a && c >= a)
          return { node: u, offset: a - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = ri(u);
    }
  }
  function Vf(l, a) {
    return l && a ? l === a ? !0 : l && l.nodeType === 3 ? !1 : a && a.nodeType === 3 ? Vf(l, a.parentNode) : "contains" in l ? l.contains(a) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(a) & 16) : !1 : !1;
  }
  function mm(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var a = io(l.document); a instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof a.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = a.contentWindow;
      else break;
      a = io(l.document);
    }
    return a;
  }
  function Gf(l) {
    var a = l && l.nodeName && l.nodeName.toLowerCase();
    return a && (a === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || a === "textarea" || l.contentEditable === "true");
  }
  var dc = xa && "documentMode" in document && 11 >= document.documentMode, Ua = null, oa = null, si = null, hc = !1;
  function ws(l, a, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    hc || Ua == null || Ua !== io(c) || (c = Ua, "selectionStart" in c && Gf(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), si && fi(si, c) || (si = c, c = $o(oa, "onSelect"), 0 < c.length && (a = new Os(
      "onSelect",
      "select",
      null,
      a,
      u
    ), l.push({ event: a, listeners: c }), a.target = Ua)));
  }
  function Ru(l, a) {
    var u = {};
    return u[l.toLowerCase()] = a.toLowerCase(), u["Webkit" + l] = "webkit" + a, u["Moz" + l] = "moz" + a, u;
  }
  var mc = {
    animationend: Ru("Animation", "AnimationEnd"),
    animationiteration: Ru("Animation", "AnimationIteration"),
    animationstart: Ru("Animation", "AnimationStart"),
    transitionrun: Ru("Transition", "TransitionRun"),
    transitionstart: Ru("Transition", "TransitionStart"),
    transitioncancel: Ru("Transition", "TransitionCancel"),
    transitionend: Ru("Transition", "TransitionEnd")
  }, Bn = {}, fa = {};
  xa && (fa = document.createElement("div").style, "AnimationEvent" in window || (delete mc.animationend.animation, delete mc.animationiteration.animation, delete mc.animationstart.animation), "TransitionEvent" in window || delete mc.transitionend.transition);
  function Ca(l) {
    if (Bn[l]) return Bn[l];
    if (!mc[l]) return l;
    var a = mc[l], u;
    for (u in a)
      if (a.hasOwnProperty(u) && u in fa)
        return Bn[l] = a[u];
    return l;
  }
  var p0 = Ca("animationend"), ym = Ca("animationiteration"), g0 = Ca("animationstart"), pm = Ca("transitionrun"), _s = Ca("transitionstart"), v0 = Ca("transitioncancel"), gm = Ca("transitionend"), vm = /* @__PURE__ */ new Map(), mo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  mo.push("scrollEnd");
  function qn(l, a) {
    vm.set(l, a), ti(a, [l]);
  }
  var bm = /* @__PURE__ */ new WeakMap();
  function Tn(l, a) {
    if (typeof l == "object" && l !== null) {
      var u = bm.get(l);
      return u !== void 0 ? u : (a = {
        value: l,
        source: a,
        stack: Zh(a)
      }, bm.set(l, a), a);
    }
    return {
      value: l,
      source: a,
      stack: Zh(a)
    };
  }
  var en = [], di = 0, Ha = 0;
  function ra() {
    for (var l = di, a = Ha = di = 0; a < l; ) {
      var u = en[a];
      en[a++] = null;
      var c = en[a];
      en[a++] = null;
      var r = en[a];
      en[a++] = null;
      var d = en[a];
      if (en[a++] = null, c !== null && r !== null) {
        var v = c.pending;
        v === null ? r.next = r : (r.next = v.next, v.next = r), c.pending = r;
      }
      d !== 0 && po(u, r, d);
    }
  }
  function hi(l, a, u, c) {
    en[di++] = l, en[di++] = a, en[di++] = u, en[di++] = c, Ha |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function yo(l, a, u, c) {
    return hi(l, a, u, c), Xf(l);
  }
  function wa(l, a) {
    return hi(l, null, null, a), Xf(l);
  }
  function po(l, a, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var r = !1, d = l.return; d !== null; )
      d.childLanes |= u, c = d.alternate, c !== null && (c.childLanes |= u), d.tag === 22 && (l = d.stateNode, l === null || l._visibility & 1 || (r = !0)), l = d, d = d.return;
    return l.tag === 3 ? (d = l.stateNode, r && a !== null && (r = 31 - Pl(u), l = d.hiddenUpdates, c = l[r], c === null ? l[r] = [a] : c.push(a), a.lane = u | 536870912), d) : null;
  }
  function Xf(l) {
    if (50 < Xo)
      throw Xo = 0, by = null, Error(y(185));
    for (var a = l.return; a !== null; )
      l = a, a = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var go = {};
  function b0(l, a, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = a, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function tn(l, a, u, c) {
    return new b0(l, a, u, c);
  }
  function Qf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function sa(l, a) {
    var u = l.alternate;
    return u === null ? (u = tn(
      l.tag,
      a,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = a, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, a = l.dependencies, u.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Qe(l, a) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = a, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, a = u.dependencies, l.dependencies = a === null ? null : {
      lanes: a.lanes,
      firstContext: a.firstContext
    }), l;
  }
  function ae(l, a, u, c, r, d) {
    var v = 0;
    if (c = l, typeof l == "function") Qf(l) && (v = 1);
    else if (typeof l == "string")
      v = I0(
        l,
        u,
        Ve.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case Se:
          return l = tn(31, u, a, r), l.elementType = Se, l.lanes = d, l;
        case ee:
          return Yn(u.children, r, d, a);
        case ne:
          v = 8, r |= 24;
          break;
        case I:
          return l = tn(12, u, a, r | 2), l.elementType = I, l.lanes = d, l;
        case le:
          return l = tn(13, u, a, r), l.elementType = le, l.lanes = d, l;
        case Te:
          return l = tn(19, u, a, r), l.elementType = Te, l.lanes = d, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case ce:
              case re:
                v = 10;
                break e;
              case be:
                v = 9;
                break e;
              case Ae:
                v = 11;
                break e;
              case de:
                v = 14;
                break e;
              case st:
                v = 16, c = null;
                break e;
            }
          v = 29, u = Error(
            y(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return a = tn(v, u, a, r), a.elementType = l, a.type = c, a.lanes = d, a;
  }
  function Yn(l, a, u, c) {
    return l = tn(7, l, c, a), l.lanes = u, l;
  }
  function vo(l, a, u) {
    return l = tn(6, l, null, a), l.lanes = u, l;
  }
  function wt(l, a, u) {
    return a = tn(
      4,
      l.children !== null ? l.children : [],
      l.key,
      a
    ), a.lanes = u, a.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, a;
  }
  var mi = [], yi = 0, Zf = null, bo = 0, jn = [], ln = 0, Ou = null, da = 1, Bt = "";
  function et(l, a) {
    mi[yi++] = bo, mi[yi++] = Zf, Zf = l, bo = a;
  }
  function Ns(l, a, u) {
    jn[ln++] = da, jn[ln++] = Bt, jn[ln++] = Ou, Ou = l;
    var c = da;
    l = Bt;
    var r = 32 - Pl(c) - 1;
    c &= ~(1 << r), u += 1;
    var d = 32 - Pl(a) + r;
    if (30 < d) {
      var v = r - r % 5;
      d = (c & (1 << v) - 1).toString(32), c >>= v, r -= v, da = 1 << 32 - Pl(a) + r | u << r | c, Bt = d + l;
    } else
      da = 1 << d | u << r | c, Bt = l;
  }
  function yc(l) {
    l.return !== null && (et(l, 1), Ns(l, 1, 0));
  }
  function _a(l) {
    for (; l === Zf; )
      Zf = mi[--yi], mi[yi] = null, bo = mi[--yi], mi[yi] = null;
    for (; l === Ou; )
      Ou = jn[--ln], jn[ln] = null, Bt = jn[--ln], jn[ln] = null, da = jn[--ln], jn[ln] = null;
  }
  var Zt = null, at = null, nt = !1, Ln = null, Vn = !1, pc = Error(y(519));
  function Du(l) {
    var a = Error(y(418, ""));
    throw Eo(Tn(a, l)), pc;
  }
  function kf(l) {
    var a = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (a[cl] = l, a[Ll] = c, u) {
      case "dialog":
        qe("cancel", a), qe("close", a);
        break;
      case "iframe":
      case "object":
      case "embed":
        qe("load", a);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Cr.length; u++)
          qe(Cr[u], a);
        break;
      case "source":
        qe("error", a);
        break;
      case "img":
      case "image":
      case "link":
        qe("error", a), qe("load", a);
        break;
      case "details":
        qe("toggle", a);
        break;
      case "input":
        qe("invalid", a), bs(
          a,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        ), ai(a);
        break;
      case "select":
        qe("invalid", a);
        break;
      case "textarea":
        qe("invalid", a), Kh(a, c.value, c.defaultValue, c.children), ai(a);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || a.textContent === "" + u || c.suppressHydrationWarning === !0 || wy(a.textContent, u) ? (c.popover != null && (qe("beforetoggle", a), qe("toggle", a)), c.onScroll != null && qe("scroll", a), c.onScrollEnd != null && qe("scrollend", a), c.onClick != null && (a.onclick = Zd), a = !0) : a = !1, a || Du(l);
  }
  function Sm(l) {
    for (Zt = l.return; Zt; )
      switch (Zt.tag) {
        case 5:
        case 13:
          Vn = !1;
          return;
        case 27:
        case 3:
          Vn = !0;
          return;
        default:
          Zt = Zt.return;
      }
  }
  function So(l) {
    if (l !== Zt) return !1;
    if (!nt) return Sm(l), nt = !0, !1;
    var a = l.tag, u;
    if ((u = a !== 3 && a !== 27) && ((u = a === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || eu(l.type, l.memoizedProps)), u = !u), u && at && Du(l), Sm(l), a === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(y(317));
      e: {
        for (l = l.nextSibling, a = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (a === 0) {
                at = va(l.nextSibling);
                break e;
              }
              a--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || a++;
          l = l.nextSibling;
        }
        at = null;
      }
    } else
      a === 27 ? (a = at, wi(l.type) ? (l = _i, _i = null, at = l) : at = a) : at = Zt ? va(l.stateNode.nextSibling) : null;
    return !0;
  }
  function To() {
    at = Zt = null, nt = !1;
  }
  function Tm() {
    var l = Ln;
    return l !== null && (fn === null ? fn = l : fn.push.apply(
      fn,
      l
    ), Ln = null), l;
  }
  function Eo(l) {
    Ln === null ? Ln = [l] : Ln.push(l);
  }
  var Jf = ye(null), xu = null, ha = null;
  function zu(l, a, u) {
    ze(Jf, a._currentValue), a._currentValue = u;
  }
  function Na(l) {
    l._currentValue = Jf.current, fe(Jf);
  }
  function Bs(l, a, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & a) !== a ? (l.childLanes |= a, c !== null && (c.childLanes |= a)) : c !== null && (c.childLanes & a) !== a && (c.childLanes |= a), l === u) break;
      l = l.return;
    }
  }
  function Em(l, a, u, c) {
    var r = l.child;
    for (r !== null && (r.return = l); r !== null; ) {
      var d = r.dependencies;
      if (d !== null) {
        var v = r.child;
        d = d.firstContext;
        e: for (; d !== null; ) {
          var S = d;
          d = r;
          for (var O = 0; O < a.length; O++)
            if (S.context === a[O]) {
              d.lanes |= u, S = d.alternate, S !== null && (S.lanes |= u), Bs(
                d.return,
                u,
                l
              ), c || (v = null);
              break e;
            }
          d = S.next;
        }
      } else if (r.tag === 18) {
        if (v = r.return, v === null) throw Error(y(341));
        v.lanes |= u, d = v.alternate, d !== null && (d.lanes |= u), Bs(v, u, l), v = null;
      } else v = r.child;
      if (v !== null) v.return = r;
      else
        for (v = r; v !== null; ) {
          if (v === l) {
            v = null;
            break;
          }
          if (r = v.sibling, r !== null) {
            r.return = v.return, v = r;
            break;
          }
          v = v.return;
        }
      r = v;
    }
  }
  function Ao(l, a, u, c) {
    l = null;
    for (var r = a, d = !1; r !== null; ) {
      if (!d) {
        if ((r.flags & 524288) !== 0) d = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var v = r.alternate;
        if (v === null) throw Error(y(387));
        if (v = v.memoizedProps, v !== null) {
          var S = r.type;
          bl(r.pendingProps.value, v.value) || (l !== null ? l.push(S) : l = [S]);
        }
      } else if (r === Ra.current) {
        if (v = r.alternate, v === null) throw Error(y(387));
        v.memoizedState.memoizedState !== r.memoizedState.memoizedState && (l !== null ? l.push(hn) : l = [hn]);
      }
      r = r.return;
    }
    l !== null && Em(
      a,
      l,
      u,
      c
    ), a.flags |= 262144;
  }
  function Kf(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!bl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function pi(l) {
    xu = l, ha = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function ol(l) {
    return Am(xu, l);
  }
  function $f(l, a) {
    return xu === null && pi(l), Am(l, a);
  }
  function Am(l, a) {
    var u = a._currentValue;
    if (a = { context: a, memoizedValue: u, next: null }, ha === null) {
      if (l === null) throw Error(y(308));
      ha = a, l.dependencies = { lanes: 0, firstContext: a }, l.flags |= 524288;
    } else ha = ha.next = a;
    return u;
  }
  var Ro = typeof AbortController < "u" ? AbortController : function() {
    var l = [], a = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      a.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, qs = s.unstable_scheduleCallback, S0 = s.unstable_NormalPriority, It = {
    $$typeof: re,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Oo() {
    return {
      controller: new Ro(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ba(l) {
    l.refCount--, l.refCount === 0 && qs(S0, function() {
      l.controller.abort();
    });
  }
  var gi = null, Wf = 0, Gn = 0, el = null;
  function Ys(l, a) {
    if (gi === null) {
      var u = gi = [];
      Wf = 0, Gn = Yc(), el = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return Wf++, a.then(js, js), a;
  }
  function js() {
    if (--Wf === 0 && gi !== null) {
      el !== null && (el.status = "fulfilled");
      var l = gi;
      gi = null, Gn = 0, el = null;
      for (var a = 0; a < l.length; a++) (0, l[a])();
    }
  }
  function T0(l, a) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(r) {
        u.push(r);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = a;
        for (var r = 0; r < u.length; r++) (0, u[r])(a);
      },
      function(r) {
        for (c.status = "rejected", c.reason = r, r = 0; r < u.length; r++)
          (0, u[r])(void 0);
      }
    ), c;
  }
  var Ls = C.S;
  C.S = function(l, a) {
    typeof a == "object" && a !== null && typeof a.then == "function" && Ys(l, a), Ls !== null && Ls(l, a);
  };
  var qa = ye(null);
  function Ff() {
    var l = qa.current;
    return l !== null ? l : At.pooledCache;
  }
  function gc(l, a) {
    a === null ? ze(qa, qa.current) : ze(qa, a.pool);
  }
  function Vs() {
    var l = Ff();
    return l === null ? null : { parent: It._currentValue, pool: l };
  }
  var vi = Error(y(460)), Gs = Error(y(474)), Pf = Error(y(542)), Xs = { then: function() {
  } };
  function Qs(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function If() {
  }
  function Rm(l, a, u) {
    switch (u = l[u], u === void 0 ? l.push(a) : u !== a && (a.then(If, If), a = u), a.status) {
      case "fulfilled":
        return a.value;
      case "rejected":
        throw l = a.reason, Dm(l), l;
      default:
        if (typeof a.status == "string") a.then(If, If);
        else {
          if (l = At, l !== null && 100 < l.shellSuspendCounter)
            throw Error(y(482));
          l = a, l.status = "pending", l.then(
            function(c) {
              if (a.status === "pending") {
                var r = a;
                r.status = "fulfilled", r.value = c;
              }
            },
            function(c) {
              if (a.status === "pending") {
                var r = a;
                r.status = "rejected", r.reason = c;
              }
            }
          );
        }
        switch (a.status) {
          case "fulfilled":
            return a.value;
          case "rejected":
            throw l = a.reason, Dm(l), l;
        }
        throw vc = a, vi;
    }
  }
  var vc = null;
  function Om() {
    if (vc === null) throw Error(y(459));
    var l = vc;
    return vc = null, l;
  }
  function Dm(l) {
    if (l === vi || l === Pf)
      throw Error(y(483));
  }
  var Ya = !1;
  function Zs(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ks(l, a) {
    l = l.updateQueue, a.updateQueue === l && (a.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function nn(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ja(l, a, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (ft & 2) !== 0) {
      var r = c.pending;
      return r === null ? a.next = a : (a.next = r.next, r.next = a), c.pending = a, a = Xf(l), po(l, null, u), a;
    }
    return hi(l, c, a, u), Xf(l);
  }
  function bc(l, a, u) {
    if (a = a.updateQueue, a !== null && (a = a.shared, (u & 4194048) !== 0)) {
      var c = a.lanes;
      c &= l.pendingLanes, u |= c, a.lanes = u, Of(l, u);
    }
  }
  function xm(l, a) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var r = null, d = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var v = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          d === null ? r = d = v : d = d.next = v, u = u.next;
        } while (u !== null);
        d === null ? r = d = a : d = d.next = a;
      } else r = d = a;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: d,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = a : l.next = a, u.lastBaseUpdate = a;
  }
  var zm = !1;
  function Do() {
    if (zm) {
      var l = el;
      if (l !== null) throw l;
    }
  }
  function Mu(l, a, u, c) {
    zm = !1;
    var r = l.updateQueue;
    Ya = !1;
    var d = r.firstBaseUpdate, v = r.lastBaseUpdate, S = r.shared.pending;
    if (S !== null) {
      r.shared.pending = null;
      var O = S, B = O.next;
      O.next = null, v === null ? d = B : v.next = B, v = O;
      var W = l.alternate;
      W !== null && (W = W.updateQueue, S = W.lastBaseUpdate, S !== v && (S === null ? W.firstBaseUpdate = B : S.next = B, W.lastBaseUpdate = O));
    }
    if (d !== null) {
      var P = r.baseState;
      v = 0, W = B = O = null, S = d;
      do {
        var Y = S.lane & -536870913, V = Y !== S.lane;
        if (V ? (Fe & Y) === Y : (c & Y) === Y) {
          Y !== 0 && Y === Gn && (zm = !0), W !== null && (W = W.next = {
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: null,
            next: null
          });
          e: {
            var De = l, xe = S;
            Y = a;
            var it = u;
            switch (xe.tag) {
              case 1:
                if (De = xe.payload, typeof De == "function") {
                  P = De.call(it, P, Y);
                  break e;
                }
                P = De;
                break e;
              case 3:
                De.flags = De.flags & -65537 | 128;
              case 0:
                if (De = xe.payload, Y = typeof De == "function" ? De.call(it, P, Y) : De, Y == null) break e;
                P = _({}, P, Y);
                break e;
              case 2:
                Ya = !0;
            }
          }
          Y = S.callback, Y !== null && (l.flags |= 64, V && (l.flags |= 8192), V = r.callbacks, V === null ? r.callbacks = [Y] : V.push(Y));
        } else
          V = {
            lane: Y,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          }, W === null ? (B = W = V, O = P) : W = W.next = V, v |= Y;
        if (S = S.next, S === null) {
          if (S = r.shared.pending, S === null)
            break;
          V = S, S = V.next, V.next = null, r.lastBaseUpdate = V, r.shared.pending = null;
        }
      } while (!0);
      W === null && (O = P), r.baseState = O, r.firstBaseUpdate = B, r.lastBaseUpdate = W, d === null && (r.shared.lanes = 0), Bu |= v, l.lanes = v, l.memoizedState = P;
    }
  }
  function Js(l, a) {
    if (typeof l != "function")
      throw Error(y(191, l));
    l.call(a);
  }
  function er(l, a) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Js(u[l], a);
  }
  var Sc = ye(null), tr = ye(0);
  function fl(l, a) {
    l = Nu, ze(tr, l), ze(Sc, a), Nu = l | a.baseLanes;
  }
  function xo() {
    ze(tr, Nu), ze(Sc, Sc.current);
  }
  function zo() {
    Nu = tr.current, fe(Sc), fe(tr);
  }
  var Xn = 0, Be = null, ot = null, _t = null, lr = !1, En = !1, bi = !1, ma = 0, An = 0, Uu = null, Mm = 0;
  function Nt() {
    throw Error(y(321));
  }
  function Ks(l, a) {
    if (a === null) return !1;
    for (var u = 0; u < a.length && u < l.length; u++)
      if (!bl(l[u], a[u])) return !1;
    return !0;
  }
  function $s(l, a, u, c, r, d) {
    return Xn = d, Be = a, a.memoizedState = null, a.updateQueue = null, a.lanes = 0, C.H = l === null || l.memoizedState === null ? Qm : Zm, bi = !1, d = u(c, r), bi = !1, En && (d = Um(
      a,
      u,
      c,
      r
    )), Si(l), d;
  }
  function Si(l) {
    C.H = dd;
    var a = ot !== null && ot.next !== null;
    if (Xn = 0, _t = ot = Be = null, lr = !1, An = 0, Uu = null, a) throw Error(y(300));
    l === null || tl || (l = l.dependencies, l !== null && Kf(l) && (tl = !0));
  }
  function Um(l, a, u, c) {
    Be = l;
    var r = 0;
    do {
      if (En && (Uu = null), An = 0, En = !1, 25 <= r) throw Error(y(301));
      if (r += 1, _t = ot = null, l.updateQueue != null) {
        var d = l.updateQueue;
        d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0);
      }
      C.H = Cu, d = a(u, c);
    } while (En);
    return d;
  }
  function E0() {
    var l = C.H, a = l.useState()[0];
    return a = typeof a.then == "function" ? ar(a) : a, l = l.useState()[0], (ot !== null ? ot.memoizedState : null) !== l && (Be.flags |= 1024), a;
  }
  function Ws() {
    var l = ma !== 0;
    return ma = 0, l;
  }
  function Mo(l, a, u) {
    a.updateQueue = l.updateQueue, a.flags &= -2053, l.lanes &= ~u;
  }
  function Fs(l) {
    if (lr) {
      for (l = l.memoizedState; l !== null; ) {
        var a = l.queue;
        a !== null && (a.pending = null), l = l.next;
      }
      lr = !1;
    }
    Xn = 0, _t = ot = Be = null, En = !1, An = ma = 0, Uu = null;
  }
  function Hl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return _t === null ? Be.memoizedState = _t = l : _t = _t.next = l, _t;
  }
  function qt() {
    if (ot === null) {
      var l = Be.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ot.next;
    var a = _t === null ? Be.memoizedState : _t.next;
    if (a !== null)
      _t = a, ot = l;
    else {
      if (l === null)
        throw Be.alternate === null ? Error(y(467)) : Error(y(310));
      ot = l, l = {
        memoizedState: ot.memoizedState,
        baseState: ot.baseState,
        baseQueue: ot.baseQueue,
        queue: ot.queue,
        next: null
      }, _t === null ? Be.memoizedState = _t = l : _t = _t.next = l;
    }
    return _t;
  }
  function nr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ar(l) {
    var a = An;
    return An += 1, Uu === null && (Uu = []), l = Rm(Uu, l, a), a = Be, (_t === null ? a.memoizedState : _t.next) === null && (a = a.alternate, C.H = a === null || a.memoizedState === null ? Qm : Zm), l;
  }
  function Jt(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return ar(l);
      if (l.$$typeof === re) return ol(l);
    }
    throw Error(y(438, String(l)));
  }
  function Ps(l) {
    var a = null, u = Be.updateQueue;
    if (u !== null && (a = u.memoCache), a == null) {
      var c = Be.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (a = {
        data: c.data.map(function(r) {
          return r.slice();
        }),
        index: 0
      })));
    }
    if (a == null && (a = { data: [], index: 0 }), u === null && (u = nr(), Be.updateQueue = u), u.memoCache = a, u = a.data[a.index], u === void 0)
      for (u = a.data[a.index] = Array(l), c = 0; c < l; c++)
        u[c] = dt;
    return a.index++, u;
  }
  function La(l, a) {
    return typeof a == "function" ? a(l) : a;
  }
  function ur(l) {
    var a = qt();
    return Is(a, ot, l);
  }
  function Is(l, a, u) {
    var c = l.queue;
    if (c === null) throw Error(y(311));
    c.lastRenderedReducer = u;
    var r = l.baseQueue, d = c.pending;
    if (d !== null) {
      if (r !== null) {
        var v = r.next;
        r.next = d.next, d.next = v;
      }
      a.baseQueue = r = d, c.pending = null;
    }
    if (d = l.baseState, r === null) l.memoizedState = d;
    else {
      a = r.next;
      var S = v = null, O = null, B = a, W = !1;
      do {
        var P = B.lane & -536870913;
        if (P !== B.lane ? (Fe & P) === P : (Xn & P) === P) {
          var Y = B.revertLane;
          if (Y === 0)
            O !== null && (O = O.next = {
              lane: 0,
              revertLane: 0,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            }), P === Gn && (W = !0);
          else if ((Xn & Y) === Y) {
            B = B.next, Y === Gn && (W = !0);
            continue;
          } else
            P = {
              lane: 0,
              revertLane: B.revertLane,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            }, O === null ? (S = O = P, v = d) : O = O.next = P, Be.lanes |= Y, Bu |= Y;
          P = B.action, bi && u(d, P), d = B.hasEagerState ? B.eagerState : u(d, P);
        } else
          Y = {
            lane: P,
            revertLane: B.revertLane,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null
          }, O === null ? (S = O = Y, v = d) : O = O.next = Y, Be.lanes |= P, Bu |= P;
        B = B.next;
      } while (B !== null && B !== a);
      if (O === null ? v = d : O.next = S, !bl(d, l.memoizedState) && (tl = !0, W && (u = el, u !== null)))
        throw u;
      l.memoizedState = d, l.baseState = v, l.baseQueue = O, c.lastRenderedState = d;
    }
    return r === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function ed(l) {
    var a = qt(), u = a.queue;
    if (u === null) throw Error(y(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, r = u.pending, d = a.memoizedState;
    if (r !== null) {
      u.pending = null;
      var v = r = r.next;
      do
        d = l(d, v.action), v = v.next;
      while (v !== r);
      bl(d, a.memoizedState) || (tl = !0), a.memoizedState = d, a.baseQueue === null && (a.baseState = d), u.lastRenderedState = d;
    }
    return [d, c];
  }
  function ir(l, a, u) {
    var c = Be, r = qt(), d = nt;
    if (d) {
      if (u === void 0) throw Error(y(407));
      u = u();
    } else u = a();
    var v = !bl(
      (ot || r).memoizedState,
      u
    );
    v && (r.memoizedState = u, tl = !0), r = r.queue;
    var S = Hm.bind(null, c, r, l);
    if (vt(2048, 8, S, [l]), r.getSnapshot !== a || v || _t !== null && _t.memoizedState.tag & 1) {
      if (c.flags |= 2048, an(
        9,
        fr(),
        Cm.bind(
          null,
          c,
          r,
          u,
          a
        ),
        null
      ), At === null) throw Error(y(349));
      d || (Xn & 124) !== 0 || td(c, a, u);
    }
    return u;
  }
  function td(l, a, u) {
    l.flags |= 16384, l = { getSnapshot: a, value: u }, a = Be.updateQueue, a === null ? (a = nr(), Be.updateQueue = a, a.stores = [l]) : (u = a.stores, u === null ? a.stores = [l] : u.push(l));
  }
  function Cm(l, a, u, c) {
    a.value = u, a.getSnapshot = c, wm(a) && ld(l);
  }
  function Hm(l, a, u) {
    return u(function() {
      wm(a) && ld(l);
    });
  }
  function wm(l) {
    var a = l.getSnapshot;
    l = l.value;
    try {
      var u = a();
      return !bl(l, u);
    } catch {
      return !0;
    }
  }
  function ld(l) {
    var a = wa(l, 2);
    a !== null && Dn(a, l, 2);
  }
  function cr(l) {
    var a = Hl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), bi) {
        pu(!0);
        try {
          u();
        } finally {
          pu(!1);
        }
      }
    }
    return a.memoizedState = a.baseState = l, a.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: La,
      lastRenderedState: l
    }, a;
  }
  function nd(l, a, u, c) {
    return l.baseState = u, Is(
      l,
      ot,
      typeof c == "function" ? c : La
    );
  }
  function A0(l, a, u, c, r) {
    if (Rc(l)) throw Error(y(485));
    if (l = a.action, l !== null) {
      var d = {
        payload: r,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(v) {
          d.listeners.push(v);
        }
      };
      C.T !== null ? u(!0) : d.isTransition = !1, c(d), u = a.pending, u === null ? (d.next = a.pending = d, ad(a, d)) : (d.next = u.next, a.pending = u.next = d);
    }
  }
  function ad(l, a) {
    var u = a.action, c = a.payload, r = l.state;
    if (a.isTransition) {
      var d = C.T, v = {};
      C.T = v;
      try {
        var S = u(r, c), O = C.S;
        O !== null && O(v, S), or(l, a, S);
      } catch (B) {
        id(l, a, B);
      } finally {
        C.T = d;
      }
    } else
      try {
        d = u(r, c), or(l, a, d);
      } catch (B) {
        id(l, a, B);
      }
  }
  function or(l, a, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        ud(l, a, c);
      },
      function(c) {
        return id(l, a, c);
      }
    ) : ud(l, a, u);
  }
  function ud(l, a, u) {
    a.status = "fulfilled", a.value = u, _m(a), l.state = u, a = l.pending, a !== null && (u = a.next, u === a ? l.pending = null : (u = u.next, a.next = u, ad(l, u)));
  }
  function id(l, a, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        a.status = "rejected", a.reason = u, _m(a), a = a.next;
      while (a !== c);
    }
    l.action = null;
  }
  function _m(l) {
    l = l.listeners;
    for (var a = 0; a < l.length; a++) (0, l[a])();
  }
  function cd(l, a) {
    return a;
  }
  function Nm(l, a) {
    if (nt) {
      var u = At.formState;
      if (u !== null) {
        e: {
          var c = Be;
          if (nt) {
            if (at) {
              t: {
                for (var r = at, d = Vn; r.nodeType !== 8; ) {
                  if (!d) {
                    r = null;
                    break t;
                  }
                  if (r = va(
                    r.nextSibling
                  ), r === null) {
                    r = null;
                    break t;
                  }
                }
                d = r.data, r = d === "F!" || d === "F" ? r : null;
              }
              if (r) {
                at = va(
                  r.nextSibling
                ), c = r.data === "F!";
                break e;
              }
            }
            Du(c);
          }
          c = !1;
        }
        c && (a = u[0]);
      }
    }
    return u = Hl(), u.memoizedState = u.baseState = a, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cd,
      lastRenderedState: a
    }, u.queue = c, u = Gm.bind(
      null,
      Be,
      c
    ), c.dispatch = u, c = cr(!1), d = dr.bind(
      null,
      Be,
      !1,
      c.queue
    ), c = Hl(), r = {
      state: a,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = r, u = A0.bind(
      null,
      Be,
      r,
      d,
      u
    ), r.dispatch = u, c.memoizedState = l, [a, u, !1];
  }
  function Va(l) {
    var a = qt();
    return od(a, ot, l);
  }
  function od(l, a, u) {
    if (a = Is(
      l,
      a,
      cd
    )[0], l = ur(La)[0], typeof a == "object" && a !== null && typeof a.then == "function")
      try {
        var c = ar(a);
      } catch (v) {
        throw v === vi ? Pf : v;
      }
    else c = a;
    a = qt();
    var r = a.queue, d = r.dispatch;
    return u !== a.memoizedState && (Be.flags |= 2048, an(
      9,
      fr(),
      Ev.bind(null, r, u),
      null
    )), [c, d, l];
  }
  function Ev(l, a) {
    l.action = a;
  }
  function fd(l) {
    var a = qt(), u = ot;
    if (u !== null)
      return od(a, u, l);
    qt(), a = a.memoizedState, u = qt();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [a, c, !1];
  }
  function an(l, a, u, c) {
    return l = { tag: l, create: u, deps: c, inst: a, next: null }, a = Be.updateQueue, a === null && (a = nr(), Be.updateQueue = a), u = a.lastEffect, u === null ? a.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, a.lastEffect = l), l;
  }
  function fr() {
    return { destroy: void 0, resource: void 0 };
  }
  function rr() {
    return qt().memoizedState;
  }
  function Ti(l, a, u, c) {
    var r = Hl();
    c = c === void 0 ? null : c, Be.flags |= l, r.memoizedState = an(
      1 | a,
      fr(),
      u,
      c
    );
  }
  function vt(l, a, u, c) {
    var r = qt();
    c = c === void 0 ? null : c;
    var d = r.memoizedState.inst;
    ot !== null && c !== null && Ks(c, ot.memoizedState.deps) ? r.memoizedState = an(a, d, u, c) : (Be.flags |= l, r.memoizedState = an(
      1 | a,
      d,
      u,
      c
    ));
  }
  function R0(l, a) {
    Ti(8390656, 8, l, a);
  }
  function O0(l, a) {
    vt(2048, 8, l, a);
  }
  function Bm(l, a) {
    return vt(4, 2, l, a);
  }
  function ya(l, a) {
    return vt(4, 4, l, a);
  }
  function qm(l, a) {
    if (typeof a == "function") {
      l = l();
      var u = a(l);
      return function() {
        typeof u == "function" ? u() : a(null);
      };
    }
    if (a != null)
      return l = l(), a.current = l, function() {
        a.current = null;
      };
  }
  function rd(l, a, u) {
    u = u != null ? u.concat([l]) : null, vt(4, 4, qm.bind(null, a, l), u);
  }
  function Tc() {
  }
  function Ec(l, a) {
    var u = qt();
    a = a === void 0 ? null : a;
    var c = u.memoizedState;
    return a !== null && Ks(a, c[1]) ? c[0] : (u.memoizedState = [l, a], l);
  }
  function Ym(l, a) {
    var u = qt();
    a = a === void 0 ? null : a;
    var c = u.memoizedState;
    if (a !== null && Ks(a, c[1]))
      return c[0];
    if (c = l(), bi) {
      pu(!0);
      try {
        l();
      } finally {
        pu(!1);
      }
    }
    return u.memoizedState = [c, a], c;
  }
  function sr(l, a, u) {
    return u === void 0 || (Xn & 1073741824) !== 0 ? l.memoizedState = a : (l.memoizedState = u, l = Sy(), Be.lanes |= l, Bu |= l, u);
  }
  function jm(l, a, u, c) {
    return bl(u, a) ? u : Sc.current !== null ? (l = sr(l, u, c), bl(l, a) || (tl = !0), l) : (Xn & 42) === 0 ? (tl = !0, l.memoizedState = u) : (l = Sy(), Be.lanes |= l, Bu |= l, a);
  }
  function D0(l, a, u, c, r) {
    var d = te.p;
    te.p = d !== 0 && 8 > d ? d : 8;
    var v = C.T, S = {};
    C.T = S, dr(l, !1, a, u);
    try {
      var O = r(), B = C.S;
      if (B !== null && B(S, O), O !== null && typeof O == "object" && typeof O.then == "function") {
        var W = T0(
          O,
          c
        );
        Ac(
          l,
          a,
          W,
          On(l)
        );
      } else
        Ac(
          l,
          a,
          c,
          On(l)
        );
    } catch (P) {
      Ac(
        l,
        a,
        { then: function() {
        }, status: "rejected", reason: P },
        On()
      );
    } finally {
      te.p = d, C.T = v;
    }
  }
  function Av() {
  }
  function sd(l, a, u, c) {
    if (l.tag !== 5) throw Error(y(476));
    var r = x0(l).queue;
    D0(
      l,
      r,
      a,
      ue,
      u === null ? Av : function() {
        return Uo(l), u(c);
      }
    );
  }
  function x0(l) {
    var a = l.memoizedState;
    if (a !== null) return a;
    a = {
      memoizedState: ue,
      baseState: ue,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: La,
        lastRenderedState: ue
      },
      next: null
    };
    var u = {};
    return a.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: La,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = a, l = l.alternate, l !== null && (l.memoizedState = a), a;
  }
  function Uo(l) {
    var a = x0(l).next.queue;
    Ac(l, a, {}, On());
  }
  function Qn() {
    return ol(hn);
  }
  function Lm() {
    return qt().memoizedState;
  }
  function z0() {
    return qt().memoizedState;
  }
  function M0(l) {
    for (var a = l.return; a !== null; ) {
      switch (a.tag) {
        case 24:
        case 3:
          var u = On();
          l = nn(u);
          var c = ja(a, l, u);
          c !== null && (Dn(c, a, u), bc(c, a, u)), a = { cache: Oo() }, l.payload = a;
          return;
      }
      a = a.return;
    }
  }
  function Vm(l, a, u) {
    var c = On();
    u = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Rc(l) ? U0(a, u) : (u = yo(l, a, u, c), u !== null && (Dn(u, l, c), Xm(u, a, c)));
  }
  function Gm(l, a, u) {
    var c = On();
    Ac(l, a, u, c);
  }
  function Ac(l, a, u, c) {
    var r = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Rc(l)) U0(a, r);
    else {
      var d = l.alternate;
      if (l.lanes === 0 && (d === null || d.lanes === 0) && (d = a.lastRenderedReducer, d !== null))
        try {
          var v = a.lastRenderedState, S = d(v, u);
          if (r.hasEagerState = !0, r.eagerState = S, bl(S, v))
            return hi(l, a, r, 0), At === null && ra(), !1;
        } catch {
        } finally {
        }
      if (u = yo(l, a, r, c), u !== null)
        return Dn(u, l, c), Xm(u, a, c), !0;
    }
    return !1;
  }
  function dr(l, a, u, c) {
    if (c = {
      lane: 2,
      revertLane: Yc(),
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Rc(l)) {
      if (a) throw Error(y(479));
    } else
      a = yo(
        l,
        u,
        c,
        2
      ), a !== null && Dn(a, l, 2);
  }
  function Rc(l) {
    var a = l.alternate;
    return l === Be || a !== null && a === Be;
  }
  function U0(l, a) {
    En = lr = !0;
    var u = l.pending;
    u === null ? a.next = a : (a.next = u.next, u.next = a), l.pending = a;
  }
  function Xm(l, a, u) {
    if ((u & 4194048) !== 0) {
      var c = a.lanes;
      c &= l.pendingLanes, u |= c, a.lanes = u, Of(l, u);
    }
  }
  var dd = {
    readContext: ol,
    use: Jt,
    useCallback: Nt,
    useContext: Nt,
    useEffect: Nt,
    useImperativeHandle: Nt,
    useLayoutEffect: Nt,
    useInsertionEffect: Nt,
    useMemo: Nt,
    useReducer: Nt,
    useRef: Nt,
    useState: Nt,
    useDebugValue: Nt,
    useDeferredValue: Nt,
    useTransition: Nt,
    useSyncExternalStore: Nt,
    useId: Nt,
    useHostTransitionStatus: Nt,
    useFormState: Nt,
    useActionState: Nt,
    useOptimistic: Nt,
    useMemoCache: Nt,
    useCacheRefresh: Nt
  }, Qm = {
    readContext: ol,
    use: Jt,
    useCallback: function(l, a) {
      return Hl().memoizedState = [
        l,
        a === void 0 ? null : a
      ], l;
    },
    useContext: ol,
    useEffect: R0,
    useImperativeHandle: function(l, a, u) {
      u = u != null ? u.concat([l]) : null, Ti(
        4194308,
        4,
        qm.bind(null, a, l),
        u
      );
    },
    useLayoutEffect: function(l, a) {
      return Ti(4194308, 4, l, a);
    },
    useInsertionEffect: function(l, a) {
      Ti(4, 2, l, a);
    },
    useMemo: function(l, a) {
      var u = Hl();
      a = a === void 0 ? null : a;
      var c = l();
      if (bi) {
        pu(!0);
        try {
          l();
        } finally {
          pu(!1);
        }
      }
      return u.memoizedState = [c, a], c;
    },
    useReducer: function(l, a, u) {
      var c = Hl();
      if (u !== void 0) {
        var r = u(a);
        if (bi) {
          pu(!0);
          try {
            u(a);
          } finally {
            pu(!1);
          }
        }
      } else r = a;
      return c.memoizedState = c.baseState = r, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: r
      }, c.queue = l, l = l.dispatch = Vm.bind(
        null,
        Be,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var a = Hl();
      return l = { current: l }, a.memoizedState = l;
    },
    useState: function(l) {
      l = cr(l);
      var a = l.queue, u = Gm.bind(null, Be, a);
      return a.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Tc,
    useDeferredValue: function(l, a) {
      var u = Hl();
      return sr(u, l, a);
    },
    useTransition: function() {
      var l = cr(!1);
      return l = D0.bind(
        null,
        Be,
        l.queue,
        !0,
        !1
      ), Hl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, a, u) {
      var c = Be, r = Hl();
      if (nt) {
        if (u === void 0)
          throw Error(y(407));
        u = u();
      } else {
        if (u = a(), At === null)
          throw Error(y(349));
        (Fe & 124) !== 0 || td(c, a, u);
      }
      r.memoizedState = u;
      var d = { value: u, getSnapshot: a };
      return r.queue = d, R0(Hm.bind(null, c, d, l), [
        l
      ]), c.flags |= 2048, an(
        9,
        fr(),
        Cm.bind(
          null,
          c,
          d,
          u,
          a
        ),
        null
      ), u;
    },
    useId: function() {
      var l = Hl(), a = At.identifierPrefix;
      if (nt) {
        var u = Bt, c = da;
        u = (c & ~(1 << 32 - Pl(c) - 1)).toString(32) + u, a = "«" + a + "R" + u, u = ma++, 0 < u && (a += "H" + u.toString(32)), a += "»";
      } else
        u = Mm++, a = "«" + a + "r" + u.toString(32) + "»";
      return l.memoizedState = a;
    },
    useHostTransitionStatus: Qn,
    useFormState: Nm,
    useActionState: Nm,
    useOptimistic: function(l) {
      var a = Hl();
      a.memoizedState = a.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return a.queue = u, a = dr.bind(
        null,
        Be,
        !0,
        u
      ), u.dispatch = a, [l, a];
    },
    useMemoCache: Ps,
    useCacheRefresh: function() {
      return Hl().memoizedState = M0.bind(
        null,
        Be
      );
    }
  }, Zm = {
    readContext: ol,
    use: Jt,
    useCallback: Ec,
    useContext: ol,
    useEffect: O0,
    useImperativeHandle: rd,
    useInsertionEffect: Bm,
    useLayoutEffect: ya,
    useMemo: Ym,
    useReducer: ur,
    useRef: rr,
    useState: function() {
      return ur(La);
    },
    useDebugValue: Tc,
    useDeferredValue: function(l, a) {
      var u = qt();
      return jm(
        u,
        ot.memoizedState,
        l,
        a
      );
    },
    useTransition: function() {
      var l = ur(La)[0], a = qt().memoizedState;
      return [
        typeof l == "boolean" ? l : ar(l),
        a
      ];
    },
    useSyncExternalStore: ir,
    useId: Lm,
    useHostTransitionStatus: Qn,
    useFormState: Va,
    useActionState: Va,
    useOptimistic: function(l, a) {
      var u = qt();
      return nd(u, ot, l, a);
    },
    useMemoCache: Ps,
    useCacheRefresh: z0
  }, Cu = {
    readContext: ol,
    use: Jt,
    useCallback: Ec,
    useContext: ol,
    useEffect: O0,
    useImperativeHandle: rd,
    useInsertionEffect: Bm,
    useLayoutEffect: ya,
    useMemo: Ym,
    useReducer: ed,
    useRef: rr,
    useState: function() {
      return ed(La);
    },
    useDebugValue: Tc,
    useDeferredValue: function(l, a) {
      var u = qt();
      return ot === null ? sr(u, l, a) : jm(
        u,
        ot.memoizedState,
        l,
        a
      );
    },
    useTransition: function() {
      var l = ed(La)[0], a = qt().memoizedState;
      return [
        typeof l == "boolean" ? l : ar(l),
        a
      ];
    },
    useSyncExternalStore: ir,
    useId: Lm,
    useHostTransitionStatus: Qn,
    useFormState: fd,
    useActionState: fd,
    useOptimistic: function(l, a) {
      var u = qt();
      return ot !== null ? nd(u, ot, l, a) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Ps,
    useCacheRefresh: z0
  }, Oc = null, Co = 0;
  function hd(l) {
    var a = Co;
    return Co += 1, Oc === null && (Oc = []), Rm(Oc, l, a);
  }
  function Dc(l, a) {
    a = a.props.ref, l.ref = a !== void 0 ? a : null;
  }
  function wl(l, a) {
    throw a.$$typeof === $ ? Error(y(525)) : (l = Object.prototype.toString.call(a), Error(
      y(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : l
      )
    ));
  }
  function km(l) {
    var a = l._init;
    return a(l._payload);
  }
  function un(l) {
    function a(H, M) {
      if (l) {
        var N = H.deletions;
        N === null ? (H.deletions = [M], H.flags |= 16) : N.push(M);
      }
    }
    function u(H, M) {
      if (!l) return null;
      for (; M !== null; )
        a(H, M), M = M.sibling;
      return null;
    }
    function c(H) {
      for (var M = /* @__PURE__ */ new Map(); H !== null; )
        H.key !== null ? M.set(H.key, H) : M.set(H.index, H), H = H.sibling;
      return M;
    }
    function r(H, M) {
      return H = sa(H, M), H.index = 0, H.sibling = null, H;
    }
    function d(H, M, N) {
      return H.index = N, l ? (N = H.alternate, N !== null ? (N = N.index, N < M ? (H.flags |= 67108866, M) : N) : (H.flags |= 67108866, M)) : (H.flags |= 1048576, M);
    }
    function v(H) {
      return l && H.alternate === null && (H.flags |= 67108866), H;
    }
    function S(H, M, N, F) {
      return M === null || M.tag !== 6 ? (M = vo(N, H.mode, F), M.return = H, M) : (M = r(M, N), M.return = H, M);
    }
    function O(H, M, N, F) {
      var he = N.type;
      return he === ee ? W(
        H,
        M,
        N.props.children,
        F,
        N.key
      ) : M !== null && (M.elementType === he || typeof he == "object" && he !== null && he.$$typeof === st && km(he) === M.type) ? (M = r(M, N.props), Dc(M, N), M.return = H, M) : (M = ae(
        N.type,
        N.key,
        N.props,
        null,
        H.mode,
        F
      ), Dc(M, N), M.return = H, M);
    }
    function B(H, M, N, F) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== N.containerInfo || M.stateNode.implementation !== N.implementation ? (M = wt(N, H.mode, F), M.return = H, M) : (M = r(M, N.children || []), M.return = H, M);
    }
    function W(H, M, N, F, he) {
      return M === null || M.tag !== 7 ? (M = Yn(
        N,
        H.mode,
        F,
        he
      ), M.return = H, M) : (M = r(M, N), M.return = H, M);
    }
    function P(H, M, N) {
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return M = vo(
          "" + M,
          H.mode,
          N
        ), M.return = H, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case ie:
            return N = ae(
              M.type,
              M.key,
              M.props,
              null,
              H.mode,
              N
            ), Dc(N, M), N.return = H, N;
          case me:
            return M = wt(
              M,
              H.mode,
              N
            ), M.return = H, M;
          case st:
            var F = M._init;
            return M = F(M._payload), P(H, M, N);
        }
        if (Qt(M) || we(M))
          return M = Yn(
            M,
            H.mode,
            N,
            null
          ), M.return = H, M;
        if (typeof M.then == "function")
          return P(H, hd(M), N);
        if (M.$$typeof === re)
          return P(
            H,
            $f(H, M),
            N
          );
        wl(H, M);
      }
      return null;
    }
    function Y(H, M, N, F) {
      var he = M !== null ? M.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return he !== null ? null : S(H, M, "" + N, F);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case ie:
            return N.key === he ? O(H, M, N, F) : null;
          case me:
            return N.key === he ? B(H, M, N, F) : null;
          case st:
            return he = N._init, N = he(N._payload), Y(H, M, N, F);
        }
        if (Qt(N) || we(N))
          return he !== null ? null : W(H, M, N, F, null);
        if (typeof N.then == "function")
          return Y(
            H,
            M,
            hd(N),
            F
          );
        if (N.$$typeof === re)
          return Y(
            H,
            M,
            $f(H, N),
            F
          );
        wl(H, N);
      }
      return null;
    }
    function V(H, M, N, F, he) {
      if (typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint")
        return H = H.get(N) || null, S(M, H, "" + F, he);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case ie:
            return H = H.get(
              F.key === null ? N : F.key
            ) || null, O(M, H, F, he);
          case me:
            return H = H.get(
              F.key === null ? N : F.key
            ) || null, B(M, H, F, he);
          case st:
            var Ze = F._init;
            return F = Ze(F._payload), V(
              H,
              M,
              N,
              F,
              he
            );
        }
        if (Qt(F) || we(F))
          return H = H.get(N) || null, W(M, H, F, he, null);
        if (typeof F.then == "function")
          return V(
            H,
            M,
            N,
            hd(F),
            he
          );
        if (F.$$typeof === re)
          return V(
            H,
            M,
            N,
            $f(M, F),
            he
          );
        wl(M, F);
      }
      return null;
    }
    function De(H, M, N, F) {
      for (var he = null, Ze = null, Re = M, Ue = M = 0, dl = null; Re !== null && Ue < N.length; Ue++) {
        Re.index > Ue ? (dl = Re, Re = null) : dl = Re.sibling;
        var lt = Y(
          H,
          Re,
          N[Ue],
          F
        );
        if (lt === null) {
          Re === null && (Re = dl);
          break;
        }
        l && Re && lt.alternate === null && a(H, Re), M = d(lt, M, Ue), Ze === null ? he = lt : Ze.sibling = lt, Ze = lt, Re = dl;
      }
      if (Ue === N.length)
        return u(H, Re), nt && et(H, Ue), he;
      if (Re === null) {
        for (; Ue < N.length; Ue++)
          Re = P(H, N[Ue], F), Re !== null && (M = d(
            Re,
            M,
            Ue
          ), Ze === null ? he = Re : Ze.sibling = Re, Ze = Re);
        return nt && et(H, Ue), he;
      }
      for (Re = c(Re); Ue < N.length; Ue++)
        dl = V(
          Re,
          H,
          Ue,
          N[Ue],
          F
        ), dl !== null && (l && dl.alternate !== null && Re.delete(
          dl.key === null ? Ue : dl.key
        ), M = d(
          dl,
          M,
          Ue
        ), Ze === null ? he = dl : Ze.sibling = dl, Ze = dl);
      return l && Re.forEach(function(ji) {
        return a(H, ji);
      }), nt && et(H, Ue), he;
    }
    function xe(H, M, N, F) {
      if (N == null) throw Error(y(151));
      for (var he = null, Ze = null, Re = M, Ue = M = 0, dl = null, lt = N.next(); Re !== null && !lt.done; Ue++, lt = N.next()) {
        Re.index > Ue ? (dl = Re, Re = null) : dl = Re.sibling;
        var ji = Y(H, Re, lt.value, F);
        if (ji === null) {
          Re === null && (Re = dl);
          break;
        }
        l && Re && ji.alternate === null && a(H, Re), M = d(ji, M, Ue), Ze === null ? he = ji : Ze.sibling = ji, Ze = ji, Re = dl;
      }
      if (lt.done)
        return u(H, Re), nt && et(H, Ue), he;
      if (Re === null) {
        for (; !lt.done; Ue++, lt = N.next())
          lt = P(H, lt.value, F), lt !== null && (M = d(lt, M, Ue), Ze === null ? he = lt : Ze.sibling = lt, Ze = lt);
        return nt && et(H, Ue), he;
      }
      for (Re = c(Re); !lt.done; Ue++, lt = N.next())
        lt = V(Re, H, Ue, lt.value, F), lt !== null && (l && lt.alternate !== null && Re.delete(lt.key === null ? Ue : lt.key), M = d(lt, M, Ue), Ze === null ? he = lt : Ze.sibling = lt, Ze = lt);
      return l && Re.forEach(function(Nv) {
        return a(H, Nv);
      }), nt && et(H, Ue), he;
    }
    function it(H, M, N, F) {
      if (typeof N == "object" && N !== null && N.type === ee && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case ie:
            e: {
              for (var he = N.key; M !== null; ) {
                if (M.key === he) {
                  if (he = N.type, he === ee) {
                    if (M.tag === 7) {
                      u(
                        H,
                        M.sibling
                      ), F = r(
                        M,
                        N.props.children
                      ), F.return = H, H = F;
                      break e;
                    }
                  } else if (M.elementType === he || typeof he == "object" && he !== null && he.$$typeof === st && km(he) === M.type) {
                    u(
                      H,
                      M.sibling
                    ), F = r(M, N.props), Dc(F, N), F.return = H, H = F;
                    break e;
                  }
                  u(H, M);
                  break;
                } else a(H, M);
                M = M.sibling;
              }
              N.type === ee ? (F = Yn(
                N.props.children,
                H.mode,
                F,
                N.key
              ), F.return = H, H = F) : (F = ae(
                N.type,
                N.key,
                N.props,
                null,
                H.mode,
                F
              ), Dc(F, N), F.return = H, H = F);
            }
            return v(H);
          case me:
            e: {
              for (he = N.key; M !== null; ) {
                if (M.key === he)
                  if (M.tag === 4 && M.stateNode.containerInfo === N.containerInfo && M.stateNode.implementation === N.implementation) {
                    u(
                      H,
                      M.sibling
                    ), F = r(M, N.children || []), F.return = H, H = F;
                    break e;
                  } else {
                    u(H, M);
                    break;
                  }
                else a(H, M);
                M = M.sibling;
              }
              F = wt(N, H.mode, F), F.return = H, H = F;
            }
            return v(H);
          case st:
            return he = N._init, N = he(N._payload), it(
              H,
              M,
              N,
              F
            );
        }
        if (Qt(N))
          return De(
            H,
            M,
            N,
            F
          );
        if (we(N)) {
          if (he = we(N), typeof he != "function") throw Error(y(150));
          return N = he.call(N), xe(
            H,
            M,
            N,
            F
          );
        }
        if (typeof N.then == "function")
          return it(
            H,
            M,
            hd(N),
            F
          );
        if (N.$$typeof === re)
          return it(
            H,
            M,
            $f(H, N),
            F
          );
        wl(H, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, M !== null && M.tag === 6 ? (u(H, M.sibling), F = r(M, N), F.return = H, H = F) : (u(H, M), F = vo(N, H.mode, F), F.return = H, H = F), v(H)) : u(H, M);
    }
    return function(H, M, N, F) {
      try {
        Co = 0;
        var he = it(
          H,
          M,
          N,
          F
        );
        return Oc = null, he;
      } catch (Re) {
        if (Re === vi || Re === Pf) throw Re;
        var Ze = tn(29, Re, null, H.mode);
        return Ze.lanes = F, Ze.return = H, Ze;
      } finally {
      }
    };
  }
  var xc = un(!0), Ga = un(!1), Rn = ye(null), _l = null;
  function Hu(l) {
    var a = l.alternate;
    ze(bt, bt.current & 1), ze(Rn, l), _l === null && (a === null || Sc.current !== null || a.memoizedState !== null) && (_l = l);
  }
  function Xa(l) {
    if (l.tag === 22) {
      if (ze(bt, bt.current), ze(Rn, l), _l === null) {
        var a = l.alternate;
        a !== null && a.memoizedState !== null && (_l = l);
      }
    } else Qa();
  }
  function Qa() {
    ze(bt, bt.current), ze(Rn, Rn.current);
  }
  function pa(l) {
    fe(Rn), _l === l && (_l = null), fe(bt);
  }
  var bt = ye(0);
  function hr(l) {
    for (var a = l; a !== null; ) {
      if (a.tag === 13) {
        var u = a.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || Br(u)))
          return a;
      } else if (a.tag === 19 && a.memoizedProps.revealOrder !== void 0) {
        if ((a.flags & 128) !== 0) return a;
      } else if (a.child !== null) {
        a.child.return = a, a = a.child;
        continue;
      }
      if (a === l) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === l) return null;
        a = a.return;
      }
      a.sibling.return = a.return, a = a.sibling;
    }
    return null;
  }
  function Ei(l, a, u, c) {
    a = l.memoizedState, u = u(c, a), u = u == null ? a : _({}, a, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var md = {
    enqueueSetState: function(l, a, u) {
      l = l._reactInternals;
      var c = On(), r = nn(c);
      r.payload = a, u != null && (r.callback = u), a = ja(l, r, c), a !== null && (Dn(a, l, c), bc(a, l, c));
    },
    enqueueReplaceState: function(l, a, u) {
      l = l._reactInternals;
      var c = On(), r = nn(c);
      r.tag = 1, r.payload = a, u != null && (r.callback = u), a = ja(l, r, c), a !== null && (Dn(a, l, c), bc(a, l, c));
    },
    enqueueForceUpdate: function(l, a) {
      l = l._reactInternals;
      var u = On(), c = nn(u);
      c.tag = 2, a != null && (c.callback = a), a = ja(l, c, u), a !== null && (Dn(a, l, u), bc(a, l, u));
    }
  };
  function Ho(l, a, u, c, r, d, v) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, d, v) : a.prototype && a.prototype.isPureReactComponent ? !fi(u, c) || !fi(r, d) : !0;
  }
  function zc(l, a, u, c) {
    l = a.state, typeof a.componentWillReceiveProps == "function" && a.componentWillReceiveProps(u, c), typeof a.UNSAFE_componentWillReceiveProps == "function" && a.UNSAFE_componentWillReceiveProps(u, c), a.state !== l && md.enqueueReplaceState(a, a.state, null);
  }
  function Ai(l, a) {
    var u = a;
    if ("ref" in a) {
      u = {};
      for (var c in a)
        c !== "ref" && (u[c] = a[c]);
    }
    if (l = l.defaultProps) {
      u === a && (u = _({}, u));
      for (var r in l)
        u[r] === void 0 && (u[r] = l[r]);
    }
    return u;
  }
  var mr = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var a = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(a)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function wo(l) {
    mr(l);
  }
  function Jm(l) {
    console.error(l);
  }
  function yr(l) {
    mr(l);
  }
  function pr(l, a) {
    try {
      var u = l.onUncaughtError;
      u(a.value, { componentStack: a.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Km(l, a, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: a.tag === 1 ? a.stateNode : null
      });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function $m(l, a, u) {
    return u = nn(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      pr(l, a);
    }, u;
  }
  function Wm(l) {
    return l = nn(l), l.tag = 3, l;
  }
  function cn(l, a, u, c) {
    var r = u.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var d = c.value;
      l.payload = function() {
        return r(d);
      }, l.callback = function() {
        Km(a, u, c);
      };
    }
    var v = u.stateNode;
    v !== null && typeof v.componentDidCatch == "function" && (l.callback = function() {
      Km(a, u, c), typeof r != "function" && (xi === null ? xi = /* @__PURE__ */ new Set([this]) : xi.add(this));
      var S = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: S !== null ? S : ""
      });
    });
  }
  function C0(l, a, u, c, r) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (a = u.alternate, a !== null && Ao(
        a,
        u,
        r,
        !0
      ), u = Rn.current, u !== null) {
        switch (u.tag) {
          case 13:
            return _l === null ? qc() : u.alternate === null && Vt === 0 && (Vt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = r, c === Xs ? u.flags |= 16384 : (a = u.updateQueue, a === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : a.add(c), Ld(l, c, r)), !1;
          case 22:
            return u.flags |= 65536, c === Xs ? u.flags |= 16384 : (a = u.updateQueue, a === null ? (a = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = a) : (u = a.retryQueue, u === null ? a.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), Ld(l, c, r)), !1;
        }
        throw Error(y(435, u.tag));
      }
      return Ld(l, c, r), qc(), !1;
    }
    if (nt)
      return a = Rn.current, a !== null ? ((a.flags & 65536) === 0 && (a.flags |= 256), a.flags |= 65536, a.lanes = r, c !== pc && (l = Error(y(422), { cause: c }), Eo(Tn(l, u)))) : (c !== pc && (a = Error(y(423), {
        cause: c
      }), Eo(
        Tn(a, u)
      )), l = l.current.alternate, l.flags |= 65536, r &= -r, l.lanes |= r, c = Tn(c, u), r = $m(
        l.stateNode,
        c,
        r
      ), xm(l, r), Vt !== 4 && (Vt = 2)), !1;
    var d = Error(y(520), { cause: c });
    if (d = Tn(d, u), Lo === null ? Lo = [d] : Lo.push(d), Vt !== 4 && (Vt = 2), a === null) return !0;
    c = Tn(c, u), u = a;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = r & -r, u.lanes |= l, l = $m(u.stateNode, c, l), xm(u, l), !1;
        case 1:
          if (a = u.type, d = u.stateNode, (u.flags & 128) === 0 && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (xi === null || !xi.has(d))))
            return u.flags |= 65536, r &= -r, u.lanes |= r, r = Wm(r), cn(
              r,
              l,
              u,
              c
            ), xm(u, r), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Yt = Error(y(461)), tl = !1;
  function rl(l, a, u, c) {
    a.child = l === null ? Ga(a, null, u, c) : xc(
      a,
      l.child,
      u,
      c
    );
  }
  function H0(l, a, u, c, r) {
    u = u.render;
    var d = a.ref;
    if ("ref" in c) {
      var v = {};
      for (var S in c)
        S !== "ref" && (v[S] = c[S]);
    } else v = c;
    return pi(a), c = $s(
      l,
      a,
      u,
      v,
      d,
      r
    ), S = Ws(), l !== null && !tl ? (Mo(l, a, r), Za(l, a, r)) : (nt && S && yc(a), a.flags |= 1, rl(l, a, c, r), a.child);
  }
  function wu(l, a, u, c, r) {
    if (l === null) {
      var d = u.type;
      return typeof d == "function" && !Qf(d) && d.defaultProps === void 0 && u.compare === null ? (a.tag = 15, a.type = d, Mc(
        l,
        a,
        d,
        c,
        r
      )) : (l = ae(
        u.type,
        null,
        c,
        a,
        a.mode,
        r
      ), l.ref = a.ref, l.return = a, a.child = l);
    }
    if (d = l.child, !Rd(l, r)) {
      var v = d.memoizedProps;
      if (u = u.compare, u = u !== null ? u : fi, u(v, c) && l.ref === a.ref)
        return Za(l, a, r);
    }
    return a.flags |= 1, l = sa(d, c), l.ref = a.ref, l.return = a, a.child = l;
  }
  function Mc(l, a, u, c, r) {
    if (l !== null) {
      var d = l.memoizedProps;
      if (fi(d, c) && l.ref === a.ref)
        if (tl = !1, a.pendingProps = c = d, Rd(l, r))
          (l.flags & 131072) !== 0 && (tl = !0);
        else
          return a.lanes = l.lanes, Za(l, a, r);
    }
    return pd(
      l,
      a,
      u,
      c,
      r
    );
  }
  function yd(l, a, u) {
    var c = a.pendingProps, r = c.children, d = l !== null ? l.memoizedState : null;
    if (c.mode === "hidden") {
      if ((a.flags & 128) !== 0) {
        if (c = d !== null ? d.baseLanes | u : u, l !== null) {
          for (r = a.child = l.child, d = 0; r !== null; )
            d = d | r.lanes | r.childLanes, r = r.sibling;
          a.childLanes = d & ~c;
        } else a.childLanes = 0, a.child = null;
        return Uc(
          l,
          a,
          c,
          u
        );
      }
      if ((u & 536870912) !== 0)
        a.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && gc(
          a,
          d !== null ? d.cachePool : null
        ), d !== null ? fl(a, d) : xo(), Xa(a);
      else
        return a.lanes = a.childLanes = 536870912, Uc(
          l,
          a,
          d !== null ? d.baseLanes | u : u,
          u
        );
    } else
      d !== null ? (gc(a, d.cachePool), fl(a, d), Qa(), a.memoizedState = null) : (l !== null && gc(a, null), xo(), Qa());
    return rl(l, a, r, u), a.child;
  }
  function Uc(l, a, u, c) {
    var r = Ff();
    return r = r === null ? null : { parent: It._currentValue, pool: r }, a.memoizedState = {
      baseLanes: u,
      cachePool: r
    }, l !== null && gc(a, null), xo(), Xa(a), l !== null && Ao(l, a, c, !0), null;
  }
  function gr(l, a) {
    var u = a.ref;
    if (u === null)
      l !== null && l.ref !== null && (a.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(y(284));
      (l === null || l.ref !== u) && (a.flags |= 4194816);
    }
  }
  function pd(l, a, u, c, r) {
    return pi(a), u = $s(
      l,
      a,
      u,
      c,
      void 0,
      r
    ), c = Ws(), l !== null && !tl ? (Mo(l, a, r), Za(l, a, r)) : (nt && c && yc(a), a.flags |= 1, rl(l, a, u, r), a.child);
  }
  function Fm(l, a, u, c, r, d) {
    return pi(a), a.updateQueue = null, u = Um(
      a,
      c,
      u,
      r
    ), Si(l), c = Ws(), l !== null && !tl ? (Mo(l, a, d), Za(l, a, d)) : (nt && c && yc(a), a.flags |= 1, rl(l, a, u, d), a.child);
  }
  function gd(l, a, u, c, r) {
    if (pi(a), a.stateNode === null) {
      var d = go, v = u.contextType;
      typeof v == "object" && v !== null && (d = ol(v)), d = new u(c, d), a.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = md, a.stateNode = d, d._reactInternals = a, d = a.stateNode, d.props = c, d.state = a.memoizedState, d.refs = {}, Zs(a), v = u.contextType, d.context = typeof v == "object" && v !== null ? ol(v) : go, d.state = a.memoizedState, v = u.getDerivedStateFromProps, typeof v == "function" && (Ei(
        a,
        u,
        v,
        c
      ), d.state = a.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (v = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), v !== d.state && md.enqueueReplaceState(d, d.state, null), Mu(a, c, d, r), Do(), d.state = a.memoizedState), typeof d.componentDidMount == "function" && (a.flags |= 4194308), c = !0;
    } else if (l === null) {
      d = a.stateNode;
      var S = a.memoizedProps, O = Ai(u, S);
      d.props = O;
      var B = d.context, W = u.contextType;
      v = go, typeof W == "object" && W !== null && (v = ol(W));
      var P = u.getDerivedStateFromProps;
      W = typeof P == "function" || typeof d.getSnapshotBeforeUpdate == "function", S = a.pendingProps !== S, W || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (S || B !== v) && zc(
        a,
        d,
        c,
        v
      ), Ya = !1;
      var Y = a.memoizedState;
      d.state = Y, Mu(a, c, d, r), Do(), B = a.memoizedState, S || Y !== B || Ya ? (typeof P == "function" && (Ei(
        a,
        u,
        P,
        c
      ), B = a.memoizedState), (O = Ya || Ho(
        a,
        u,
        O,
        c,
        Y,
        B,
        v
      )) ? (W || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (a.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (a.flags |= 4194308), a.memoizedProps = c, a.memoizedState = B), d.props = c, d.state = B, d.context = v, c = O) : (typeof d.componentDidMount == "function" && (a.flags |= 4194308), c = !1);
    } else {
      d = a.stateNode, ks(l, a), v = a.memoizedProps, W = Ai(u, v), d.props = W, P = a.pendingProps, Y = d.context, B = u.contextType, O = go, typeof B == "object" && B !== null && (O = ol(B)), S = u.getDerivedStateFromProps, (B = typeof S == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (v !== P || Y !== O) && zc(
        a,
        d,
        c,
        O
      ), Ya = !1, Y = a.memoizedState, d.state = Y, Mu(a, c, d, r), Do();
      var V = a.memoizedState;
      v !== P || Y !== V || Ya || l !== null && l.dependencies !== null && Kf(l.dependencies) ? (typeof S == "function" && (Ei(
        a,
        u,
        S,
        c
      ), V = a.memoizedState), (W = Ya || Ho(
        a,
        u,
        W,
        c,
        Y,
        V,
        O
      ) || l !== null && l.dependencies !== null && Kf(l.dependencies)) ? (B || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(c, V, O), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(
        c,
        V,
        O
      )), typeof d.componentDidUpdate == "function" && (a.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (a.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || v === l.memoizedProps && Y === l.memoizedState || (a.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || v === l.memoizedProps && Y === l.memoizedState || (a.flags |= 1024), a.memoizedProps = c, a.memoizedState = V), d.props = c, d.state = V, d.context = O, c = W) : (typeof d.componentDidUpdate != "function" || v === l.memoizedProps && Y === l.memoizedState || (a.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || v === l.memoizedProps && Y === l.memoizedState || (a.flags |= 1024), c = !1);
    }
    return d = c, gr(l, a), c = (a.flags & 128) !== 0, d || c ? (d = a.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : d.render(), a.flags |= 1, l !== null && c ? (a.child = xc(
      a,
      l.child,
      null,
      r
    ), a.child = xc(
      a,
      null,
      u,
      r
    )) : rl(l, a, u, r), a.memoizedState = d.state, l = a.child) : l = Za(
      l,
      a,
      r
    ), l;
  }
  function vd(l, a, u, c) {
    return To(), a.flags |= 256, rl(l, a, u, c), a.child;
  }
  var bd = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Pm(l) {
    return { baseLanes: l, cachePool: Vs() };
  }
  function Im(l, a, u) {
    return l = l !== null ? l.childLanes & ~u : 0, a && (l |= Jn), l;
  }
  function ey(l, a, u) {
    var c = a.pendingProps, r = !1, d = (a.flags & 128) !== 0, v;
    if ((v = d) || (v = l !== null && l.memoizedState === null ? !1 : (bt.current & 2) !== 0), v && (r = !0, a.flags &= -129), v = (a.flags & 32) !== 0, a.flags &= -33, l === null) {
      if (nt) {
        if (r ? Hu(a) : Qa(), nt) {
          var S = at, O;
          if (O = S) {
            e: {
              for (O = S, S = Vn; O.nodeType !== 8; ) {
                if (!S) {
                  S = null;
                  break e;
                }
                if (O = va(
                  O.nextSibling
                ), O === null) {
                  S = null;
                  break e;
                }
              }
              S = O;
            }
            S !== null ? (a.memoizedState = {
              dehydrated: S,
              treeContext: Ou !== null ? { id: da, overflow: Bt } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, O = tn(
              18,
              null,
              null,
              0
            ), O.stateNode = S, O.return = a, a.child = O, Zt = a, at = null, O = !0) : O = !1;
          }
          O || Du(a);
        }
        if (S = a.memoizedState, S !== null && (S = S.dehydrated, S !== null))
          return Br(S) ? a.lanes = 32 : a.lanes = 536870912, null;
        pa(a);
      }
      return S = c.children, c = c.fallback, r ? (Qa(), r = a.mode, S = Td(
        { mode: "hidden", children: S },
        r
      ), c = Yn(
        c,
        r,
        u,
        null
      ), S.return = a, c.return = a, S.sibling = c, a.child = S, r = a.child, r.memoizedState = Pm(u), r.childLanes = Im(
        l,
        v,
        u
      ), a.memoizedState = bd, c) : (Hu(a), Sd(a, S));
    }
    if (O = l.memoizedState, O !== null && (S = O.dehydrated, S !== null)) {
      if (d)
        a.flags & 256 ? (Hu(a), a.flags &= -257, a = Ri(
          l,
          a,
          u
        )) : a.memoizedState !== null ? (Qa(), a.child = l.child, a.flags |= 128, a = null) : (Qa(), r = c.fallback, S = a.mode, c = Td(
          { mode: "visible", children: c.children },
          S
        ), r = Yn(
          r,
          S,
          u,
          null
        ), r.flags |= 2, c.return = a, r.return = a, c.sibling = r, a.child = c, xc(
          a,
          l.child,
          null,
          u
        ), c = a.child, c.memoizedState = Pm(u), c.childLanes = Im(
          l,
          v,
          u
        ), a.memoizedState = bd, a = r);
      else if (Hu(a), Br(S)) {
        if (v = S.nextSibling && S.nextSibling.dataset, v) var B = v.dgst;
        v = B, c = Error(y(419)), c.stack = "", c.digest = v, Eo({ value: c, source: null, stack: null }), a = Ri(
          l,
          a,
          u
        );
      } else if (tl || Ao(l, a, u, !1), v = (u & l.childLanes) !== 0, tl || v) {
        if (v = At, v !== null && (c = u & -u, c = (c & 42) !== 0 ? 1 : aa(c), c = (c & (v.suspendedLanes | u)) !== 0 ? 0 : c, c !== 0 && c !== O.retryLane))
          throw O.retryLane = c, wa(l, c), Dn(v, l, c), Yt;
        S.data === "$?" || qc(), a = Ri(
          l,
          a,
          u
        );
      } else
        S.data === "$?" ? (a.flags |= 192, a.child = l.child, a = null) : (l = O.treeContext, at = va(
          S.nextSibling
        ), Zt = a, nt = !0, Ln = null, Vn = !1, l !== null && (jn[ln++] = da, jn[ln++] = Bt, jn[ln++] = Ou, da = l.id, Bt = l.overflow, Ou = a), a = Sd(
          a,
          c.children
        ), a.flags |= 4096);
      return a;
    }
    return r ? (Qa(), r = c.fallback, S = a.mode, O = l.child, B = O.sibling, c = sa(O, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = O.subtreeFlags & 65011712, B !== null ? r = sa(B, r) : (r = Yn(
      r,
      S,
      u,
      null
    ), r.flags |= 2), r.return = a, c.return = a, c.sibling = r, a.child = c, c = r, r = a.child, S = l.child.memoizedState, S === null ? S = Pm(u) : (O = S.cachePool, O !== null ? (B = It._currentValue, O = O.parent !== B ? { parent: B, pool: B } : O) : O = Vs(), S = {
      baseLanes: S.baseLanes | u,
      cachePool: O
    }), r.memoizedState = S, r.childLanes = Im(
      l,
      v,
      u
    ), a.memoizedState = bd, c) : (Hu(a), u = l.child, l = u.sibling, u = sa(u, {
      mode: "visible",
      children: c.children
    }), u.return = a, u.sibling = null, l !== null && (v = a.deletions, v === null ? (a.deletions = [l], a.flags |= 16) : v.push(l)), a.child = u, a.memoizedState = null, u);
  }
  function Sd(l, a) {
    return a = Td(
      { mode: "visible", children: a },
      l.mode
    ), a.return = l, l.child = a;
  }
  function Td(l, a) {
    return l = tn(22, l, null, a), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function Ri(l, a, u) {
    return xc(a, l.child, null, u), l = Sd(
      a,
      a.pendingProps.children
    ), l.flags |= 2, a.memoizedState = null, l;
  }
  function vr(l, a, u) {
    l.lanes |= a;
    var c = l.alternate;
    c !== null && (c.lanes |= a), Bs(l.return, a, u);
  }
  function Ed(l, a, u, c, r) {
    var d = l.memoizedState;
    d === null ? l.memoizedState = {
      isBackwards: a,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: r
    } : (d.isBackwards = a, d.rendering = null, d.renderingStartTime = 0, d.last = c, d.tail = u, d.tailMode = r);
  }
  function Ad(l, a, u) {
    var c = a.pendingProps, r = c.revealOrder, d = c.tail;
    if (rl(l, a, c.children, u), c = bt.current, (c & 2) !== 0)
      c = c & 1 | 2, a.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        e: for (l = a.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && vr(l, u, a);
          else if (l.tag === 19)
            vr(l, u, a);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === a) break e;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === a)
              break e;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      c &= 1;
    }
    switch (ze(bt, c), r) {
      case "forwards":
        for (u = a.child, r = null; u !== null; )
          l = u.alternate, l !== null && hr(l) === null && (r = u), u = u.sibling;
        u = r, u === null ? (r = a.child, a.child = null) : (r = u.sibling, u.sibling = null), Ed(
          a,
          !1,
          r,
          u,
          d
        );
        break;
      case "backwards":
        for (u = null, r = a.child, a.child = null; r !== null; ) {
          if (l = r.alternate, l !== null && hr(l) === null) {
            a.child = r;
            break;
          }
          l = r.sibling, r.sibling = u, u = r, r = l;
        }
        Ed(
          a,
          !0,
          u,
          null,
          d
        );
        break;
      case "together":
        Ed(a, !1, null, null, void 0);
        break;
      default:
        a.memoizedState = null;
    }
    return a.child;
  }
  function Za(l, a, u) {
    if (l !== null && (a.dependencies = l.dependencies), Bu |= a.lanes, (u & a.childLanes) === 0)
      if (l !== null) {
        if (Ao(
          l,
          a,
          u,
          !1
        ), (u & a.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && a.child !== l.child)
      throw Error(y(153));
    if (a.child !== null) {
      for (l = a.child, u = sa(l, l.pendingProps), a.child = u, u.return = a; l.sibling !== null; )
        l = l.sibling, u = u.sibling = sa(l, l.pendingProps), u.return = a;
      u.sibling = null;
    }
    return a.child;
  }
  function Rd(l, a) {
    return (l.lanes & a) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Kf(l)));
  }
  function w0(l, a, u) {
    switch (a.tag) {
      case 3:
        zt(a, a.stateNode.containerInfo), zu(a, It, l.memoizedState.cache), To();
        break;
      case 27:
      case 5:
        Fl(a);
        break;
      case 4:
        zt(a, a.stateNode.containerInfo);
        break;
      case 10:
        zu(
          a,
          a.type,
          a.memoizedProps.value
        );
        break;
      case 13:
        var c = a.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (Hu(a), a.flags |= 128, null) : (u & a.child.childLanes) !== 0 ? ey(l, a, u) : (Hu(a), l = Za(
            l,
            a,
            u
          ), l !== null ? l.sibling : null);
        Hu(a);
        break;
      case 19:
        var r = (l.flags & 128) !== 0;
        if (c = (u & a.childLanes) !== 0, c || (Ao(
          l,
          a,
          u,
          !1
        ), c = (u & a.childLanes) !== 0), r) {
          if (c)
            return Ad(
              l,
              a,
              u
            );
          a.flags |= 128;
        }
        if (r = a.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), ze(bt, bt.current), c) break;
        return null;
      case 22:
      case 23:
        return a.lanes = 0, yd(l, a, u);
      case 24:
        zu(a, It, l.memoizedState.cache);
    }
    return Za(l, a, u);
  }
  function _0(l, a, u) {
    if (l !== null)
      if (l.memoizedProps !== a.pendingProps)
        tl = !0;
      else {
        if (!Rd(l, u) && (a.flags & 128) === 0)
          return tl = !1, w0(
            l,
            a,
            u
          );
        tl = (l.flags & 131072) !== 0;
      }
    else
      tl = !1, nt && (a.flags & 1048576) !== 0 && Ns(a, bo, a.index);
    switch (a.lanes = 0, a.tag) {
      case 16:
        e: {
          l = a.pendingProps;
          var c = a.elementType, r = c._init;
          if (c = r(c._payload), a.type = c, typeof c == "function")
            Qf(c) ? (l = Ai(c, l), a.tag = 1, a = gd(
              null,
              a,
              c,
              l,
              u
            )) : (a.tag = 0, a = pd(
              null,
              a,
              c,
              l,
              u
            ));
          else {
            if (c != null) {
              if (r = c.$$typeof, r === Ae) {
                a.tag = 11, a = H0(
                  null,
                  a,
                  c,
                  l,
                  u
                );
                break e;
              } else if (r === de) {
                a.tag = 14, a = wu(
                  null,
                  a,
                  c,
                  l,
                  u
                );
                break e;
              }
            }
            throw a = pl(c) || c, Error(y(306, a, ""));
          }
        }
        return a;
      case 0:
        return pd(
          l,
          a,
          a.type,
          a.pendingProps,
          u
        );
      case 1:
        return c = a.type, r = Ai(
          c,
          a.pendingProps
        ), gd(
          l,
          a,
          c,
          r,
          u
        );
      case 3:
        e: {
          if (zt(
            a,
            a.stateNode.containerInfo
          ), l === null) throw Error(y(387));
          c = a.pendingProps;
          var d = a.memoizedState;
          r = d.element, ks(l, a), Mu(a, c, null, u);
          var v = a.memoizedState;
          if (c = v.cache, zu(a, It, c), c !== d.cache && Em(
            a,
            [It],
            u,
            !0
          ), Do(), c = v.element, d.isDehydrated)
            if (d = {
              element: c,
              isDehydrated: !1,
              cache: v.cache
            }, a.updateQueue.baseState = d, a.memoizedState = d, a.flags & 256) {
              a = vd(
                l,
                a,
                c,
                u
              );
              break e;
            } else if (c !== r) {
              r = Tn(
                Error(y(424)),
                a
              ), Eo(r), a = vd(
                l,
                a,
                c,
                u
              );
              break e;
            } else {
              switch (l = a.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (at = va(l.firstChild), Zt = a, nt = !0, Ln = null, Vn = !0, u = Ga(
                a,
                null,
                c,
                u
              ), a.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (To(), c === r) {
              a = Za(
                l,
                a,
                u
              );
              break e;
            }
            rl(
              l,
              a,
              c,
              u
            );
          }
          a = a.child;
        }
        return a;
      case 26:
        return gr(l, a), l === null ? (u = W0(
          a.type,
          null,
          a.pendingProps,
          null
        )) ? a.memoizedState = u : nt || (u = a.type, l = a.pendingProps, c = $n(
          $e.current
        ).createElement(u), c[cl] = a, c[Ll] = l, Ce(c, u, l), Pt(c), a.stateNode = c) : a.memoizedState = W0(
          a.type,
          l.memoizedProps,
          a.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Fl(a), l === null && nt && (c = a.stateNode = se(
          a.type,
          a.pendingProps,
          $e.current
        ), Zt = a, Vn = !0, r = at, wi(a.type) ? (_i = r, at = va(
          c.firstChild
        )) : at = r), rl(
          l,
          a,
          a.pendingProps.children,
          u
        ), gr(l, a), l === null && (a.flags |= 4194304), a.child;
      case 5:
        return l === null && nt && ((r = c = at) && (c = Po(
          c,
          a.type,
          a.pendingProps,
          Vn
        ), c !== null ? (a.stateNode = c, Zt = a, at = va(
          c.firstChild
        ), Vn = !1, r = !0) : r = !1), r || Du(a)), Fl(a), r = a.type, d = a.pendingProps, v = l !== null ? l.memoizedProps : null, c = d.children, eu(r, d) ? c = null : v !== null && eu(r, v) && (a.flags |= 32), a.memoizedState !== null && (r = $s(
          l,
          a,
          E0,
          null,
          null,
          u
        ), hn._currentValue = r), gr(l, a), rl(l, a, c, u), a.child;
      case 6:
        return l === null && nt && ((l = u = at) && (u = Hv(
          u,
          a.pendingProps,
          Vn
        ), u !== null ? (a.stateNode = u, Zt = a, at = null, l = !0) : l = !1), l || Du(a)), null;
      case 13:
        return ey(l, a, u);
      case 4:
        return zt(
          a,
          a.stateNode.containerInfo
        ), c = a.pendingProps, l === null ? a.child = xc(
          a,
          null,
          c,
          u
        ) : rl(
          l,
          a,
          c,
          u
        ), a.child;
      case 11:
        return H0(
          l,
          a,
          a.type,
          a.pendingProps,
          u
        );
      case 7:
        return rl(
          l,
          a,
          a.pendingProps,
          u
        ), a.child;
      case 8:
        return rl(
          l,
          a,
          a.pendingProps.children,
          u
        ), a.child;
      case 12:
        return rl(
          l,
          a,
          a.pendingProps.children,
          u
        ), a.child;
      case 10:
        return c = a.pendingProps, zu(a, a.type, c.value), rl(
          l,
          a,
          c.children,
          u
        ), a.child;
      case 9:
        return r = a.type._context, c = a.pendingProps.children, pi(a), r = ol(r), c = c(r), a.flags |= 1, rl(l, a, c, u), a.child;
      case 14:
        return wu(
          l,
          a,
          a.type,
          a.pendingProps,
          u
        );
      case 15:
        return Mc(
          l,
          a,
          a.type,
          a.pendingProps,
          u
        );
      case 19:
        return Ad(l, a, u);
      case 31:
        return c = a.pendingProps, u = a.mode, c = {
          mode: c.mode,
          children: c.children
        }, l === null ? (u = Td(
          c,
          u
        ), u.ref = a.ref, a.child = u, u.return = a, a = u) : (u = sa(l.child, c), u.ref = a.ref, a.child = u, u.return = a, a = u), a;
      case 22:
        return yd(l, a, u);
      case 24:
        return pi(a), c = ol(It), l === null ? (r = Ff(), r === null && (r = At, d = Oo(), r.pooledCache = d, d.refCount++, d !== null && (r.pooledCacheLanes |= u), r = d), a.memoizedState = {
          parent: c,
          cache: r
        }, Zs(a), zu(a, It, r)) : ((l.lanes & u) !== 0 && (ks(l, a), Mu(a, null, null, u), Do()), r = l.memoizedState, d = a.memoizedState, r.parent !== c ? (r = { parent: c, cache: c }, a.memoizedState = r, a.lanes === 0 && (a.memoizedState = a.updateQueue.baseState = r), zu(a, It, c)) : (c = d.cache, zu(a, It, c), c !== r.cache && Em(
          a,
          [It],
          u,
          !0
        ))), rl(
          l,
          a,
          a.pendingProps.children,
          u
        ), a.child;
      case 29:
        throw a.pendingProps;
    }
    throw Error(y(156, a.tag));
  }
  function ka(l) {
    l.flags |= 4;
  }
  function _o(l, a) {
    if (a.type !== "stylesheet" || (a.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !qy(a)) {
      if (a = Rn.current, a !== null && ((Fe & 4194048) === Fe ? _l !== null : (Fe & 62914560) !== Fe && (Fe & 536870912) === 0 || a !== _l))
        throw vc = Xs, Gs;
      l.flags |= 8192;
    }
  }
  function br(l, a) {
    a !== null && (l.flags |= 4), l.flags & 16384 && (a = l.tag !== 22 ? $i() : 536870912, l.lanes |= a, jo |= a);
  }
  function No(l, a) {
    if (!nt)
      switch (l.tailMode) {
        case "hidden":
          a = l.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), a = a.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? a || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function Me(l) {
    var a = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (a)
      for (var r = l.child; r !== null; )
        u |= r.lanes | r.childLanes, c |= r.subtreeFlags & 65011712, c |= r.flags & 65011712, r.return = l, r = r.sibling;
    else
      for (r = l.child; r !== null; )
        u |= r.lanes | r.childLanes, c |= r.subtreeFlags, c |= r.flags, r.return = l, r = r.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, a;
  }
  function ty(l, a, u) {
    var c = a.pendingProps;
    switch (_a(a), a.tag) {
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
        return Me(a), null;
      case 1:
        return Me(a), null;
      case 3:
        return u = a.stateNode, c = null, l !== null && (c = l.memoizedState.cache), a.memoizedState.cache !== c && (a.flags |= 2048), Na(It), Wt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (So(a) ? ka(a) : l === null || l.memoizedState.isDehydrated && (a.flags & 256) === 0 || (a.flags |= 1024, Tm())), Me(a), null;
      case 26:
        return u = a.memoizedState, l === null ? (ka(a), u !== null ? (Me(a), _o(a, u)) : (Me(a), a.flags &= -16777217)) : u ? u !== l.memoizedState ? (ka(a), Me(a), _o(a, u)) : (Me(a), a.flags &= -16777217) : (l.memoizedProps !== c && ka(a), Me(a), a.flags &= -16777217), null;
      case 27:
        yu(a), u = $e.current;
        var r = a.type;
        if (l !== null && a.stateNode != null)
          l.memoizedProps !== c && ka(a);
        else {
          if (!c) {
            if (a.stateNode === null)
              throw Error(y(166));
            return Me(a), null;
          }
          l = Ve.current, So(a) ? kf(a) : (l = se(r, c, u), a.stateNode = l, ka(a));
        }
        return Me(a), null;
      case 5:
        if (yu(a), u = a.type, l !== null && a.stateNode != null)
          l.memoizedProps !== c && ka(a);
        else {
          if (!c) {
            if (a.stateNode === null)
              throw Error(y(166));
            return Me(a), null;
          }
          if (l = Ve.current, So(a))
            kf(a);
          else {
            switch (r = $n(
              $e.current
            ), l) {
              case 1:
                l = r.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = r.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = r.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = r.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = r.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof c.is == "string" ? r.createElement("select", { is: c.is }) : r.createElement("select"), c.multiple ? l.multiple = !0 : c.size && (l.size = c.size);
                    break;
                  default:
                    l = typeof c.is == "string" ? r.createElement(u, { is: c.is }) : r.createElement(u);
                }
            }
            l[cl] = a, l[Ll] = c;
            e: for (r = a.child; r !== null; ) {
              if (r.tag === 5 || r.tag === 6)
                l.appendChild(r.stateNode);
              else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                r.child.return = r, r = r.child;
                continue;
              }
              if (r === a) break e;
              for (; r.sibling === null; ) {
                if (r.return === null || r.return === a)
                  break e;
                r = r.return;
              }
              r.sibling.return = r.return, r = r.sibling;
            }
            a.stateNode = l;
            e: switch (Ce(l, u, c), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!c.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && ka(a);
          }
        }
        return Me(a), a.flags &= -16777217, null;
      case 6:
        if (l && a.stateNode != null)
          l.memoizedProps !== c && ka(a);
        else {
          if (typeof c != "string" && a.stateNode === null)
            throw Error(y(166));
          if (l = $e.current, So(a)) {
            if (l = a.stateNode, u = a.memoizedProps, c = null, r = Zt, r !== null)
              switch (r.tag) {
                case 27:
                case 5:
                  c = r.memoizedProps;
              }
            l[cl] = a, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || wy(l.nodeValue, u)), l || Du(a);
          } else
            l = $n(l).createTextNode(
              c
            ), l[cl] = a, a.stateNode = l;
        }
        return Me(a), null;
      case 13:
        if (c = a.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (r = So(a), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!r) throw Error(y(318));
              if (r = a.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(y(317));
              r[cl] = a;
            } else
              To(), (a.flags & 128) === 0 && (a.memoizedState = null), a.flags |= 4;
            Me(a), r = !1;
          } else
            r = Tm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = r), r = !0;
          if (!r)
            return a.flags & 256 ? (pa(a), a) : (pa(a), null);
        }
        if (pa(a), (a.flags & 128) !== 0)
          return a.lanes = u, a;
        if (u = c !== null, l = l !== null && l.memoizedState !== null, u) {
          c = a.child, r = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (r = c.alternate.memoizedState.cachePool.pool);
          var d = null;
          c.memoizedState !== null && c.memoizedState.cachePool !== null && (d = c.memoizedState.cachePool.pool), d !== r && (c.flags |= 2048);
        }
        return u !== l && u && (a.child.flags |= 8192), br(a, a.updateQueue), Me(a), null;
      case 4:
        return Wt(), l === null && Cy(a.stateNode.containerInfo), Me(a), null;
      case 10:
        return Na(a.type), Me(a), null;
      case 19:
        if (fe(bt), r = a.memoizedState, r === null) return Me(a), null;
        if (c = (a.flags & 128) !== 0, d = r.rendering, d === null)
          if (c) No(r, !1);
          else {
            if (Vt !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = a.child; l !== null; ) {
                if (d = hr(l), d !== null) {
                  for (a.flags |= 128, No(r, !1), l = d.updateQueue, a.updateQueue = l, br(a, l), a.subtreeFlags = 0, l = u, u = a.child; u !== null; )
                    Qe(u, l), u = u.sibling;
                  return ze(
                    bt,
                    bt.current & 1 | 2
                  ), a.child;
                }
                l = l.sibling;
              }
            r.tail !== null && gn() > wd && (a.flags |= 128, c = !0, No(r, !1), a.lanes = 4194304);
          }
        else {
          if (!c)
            if (l = hr(d), l !== null) {
              if (a.flags |= 128, c = !0, l = l.updateQueue, a.updateQueue = l, br(a, l), No(r, !0), r.tail === null && r.tailMode === "hidden" && !d.alternate && !nt)
                return Me(a), null;
            } else
              2 * gn() - r.renderingStartTime > wd && u !== 536870912 && (a.flags |= 128, c = !0, No(r, !1), a.lanes = 4194304);
          r.isBackwards ? (d.sibling = a.child, a.child = d) : (l = r.last, l !== null ? l.sibling = d : a.child = d, r.last = d);
        }
        return r.tail !== null ? (a = r.tail, r.rendering = a, r.tail = a.sibling, r.renderingStartTime = gn(), a.sibling = null, l = bt.current, ze(bt, c ? l & 1 | 2 : l & 1), a) : (Me(a), null);
      case 22:
      case 23:
        return pa(a), zo(), c = a.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (a.flags |= 8192) : c && (a.flags |= 8192), c ? (u & 536870912) !== 0 && (a.flags & 128) === 0 && (Me(a), a.subtreeFlags & 6 && (a.flags |= 8192)) : Me(a), u = a.updateQueue, u !== null && br(a, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (c = a.memoizedState.cachePool.pool), c !== u && (a.flags |= 2048), l !== null && fe(qa), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), a.memoizedState.cache !== u && (a.flags |= 2048), Na(It), Me(a), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(y(156, a.tag));
  }
  function Rv(l, a) {
    switch (_a(a), a.tag) {
      case 1:
        return l = a.flags, l & 65536 ? (a.flags = l & -65537 | 128, a) : null;
      case 3:
        return Na(It), Wt(), l = a.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (a.flags = l & -65537 | 128, a) : null;
      case 26:
      case 27:
      case 5:
        return yu(a), null;
      case 13:
        if (pa(a), l = a.memoizedState, l !== null && l.dehydrated !== null) {
          if (a.alternate === null)
            throw Error(y(340));
          To();
        }
        return l = a.flags, l & 65536 ? (a.flags = l & -65537 | 128, a) : null;
      case 19:
        return fe(bt), null;
      case 4:
        return Wt(), null;
      case 10:
        return Na(a.type), null;
      case 22:
      case 23:
        return pa(a), zo(), l !== null && fe(qa), l = a.flags, l & 65536 ? (a.flags = l & -65537 | 128, a) : null;
      case 24:
        return Na(It), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ly(l, a) {
    switch (_a(a), a.tag) {
      case 3:
        Na(It), Wt();
        break;
      case 26:
      case 27:
      case 5:
        yu(a);
        break;
      case 4:
        Wt();
        break;
      case 13:
        pa(a);
        break;
      case 19:
        fe(bt);
        break;
      case 10:
        Na(a.type);
        break;
      case 22:
      case 23:
        pa(a), zo(), l !== null && fe(qa);
        break;
      case 24:
        Na(It);
    }
  }
  function Sr(l, a) {
    try {
      var u = a.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var r = c.next;
        u = r;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var d = u.create, v = u.inst;
            c = d(), v.destroy = c;
          }
          u = u.next;
        } while (u !== r);
      }
    } catch (S) {
      ht(a, a.return, S);
    }
  }
  function Oi(l, a, u) {
    try {
      var c = a.updateQueue, r = c !== null ? c.lastEffect : null;
      if (r !== null) {
        var d = r.next;
        c = d;
        do {
          if ((c.tag & l) === l) {
            var v = c.inst, S = v.destroy;
            if (S !== void 0) {
              v.destroy = void 0, r = a;
              var O = u, B = S;
              try {
                B();
              } catch (W) {
                ht(
                  r,
                  O,
                  W
                );
              }
            }
          }
          c = c.next;
        } while (c !== d);
      }
    } catch (W) {
      ht(a, a.return, W);
    }
  }
  function Od(l) {
    var a = l.updateQueue;
    if (a !== null) {
      var u = l.stateNode;
      try {
        er(a, u);
      } catch (c) {
        ht(l, l.return, c);
      }
    }
  }
  function ny(l, a, u) {
    u.props = Ai(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      ht(l, a, c);
    }
  }
  function Bo(l, a) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (r) {
      ht(l, a, r);
    }
  }
  function ga(l, a) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (r) {
          ht(l, a, r);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (r) {
          ht(l, a, r);
        }
      else u.current = null;
  }
  function qo(l) {
    var a = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (a) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (r) {
      ht(l, l.return, r);
    }
  }
  function ay(l, a, u) {
    try {
      var c = l.stateNode;
      Mv(c, l.type, u, a), c[Ll] = a;
    } catch (r) {
      ht(l, l.return, r);
    }
  }
  function N0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && wi(l.type) || l.tag === 4;
  }
  function Zn(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || N0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && wi(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Cc(l, a, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, a ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, a) : (a = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, a.appendChild(l), u = u._reactRootContainer, u != null || a.onclick !== null || (a.onclick = Zd));
    else if (c !== 4 && (c === 27 && wi(l.type) && (u = l.stateNode, a = null), l = l.child, l !== null))
      for (Cc(l, a, u), l = l.sibling; l !== null; )
        Cc(l, a, u), l = l.sibling;
  }
  function Dd(l, a, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, a ? u.insertBefore(l, a) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && wi(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (Dd(l, a, u), l = l.sibling; l !== null; )
        Dd(l, a, u), l = l.sibling;
  }
  function xd(l) {
    var a = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, r = a.attributes; r.length; )
        a.removeAttributeNode(r[0]);
      Ce(a, c, u), a[cl] = l, a[Ll] = u;
    } catch (d) {
      ht(l, l.return, d);
    }
  }
  var Ja = !1, jt = !1, zd = !1, Md = typeof WeakSet == "function" ? WeakSet : Set, ll = null;
  function uy(l, a) {
    if (l = l.containerInfo, wr = jr, l = mm(l), Gf(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var r = c.anchorOffset, d = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, d.nodeType;
            } catch {
              u = null;
              break e;
            }
            var v = 0, S = -1, O = -1, B = 0, W = 0, P = l, Y = null;
            t: for (; ; ) {
              for (var V; P !== u || r !== 0 && P.nodeType !== 3 || (S = v + r), P !== d || c !== 0 && P.nodeType !== 3 || (O = v + c), P.nodeType === 3 && (v += P.nodeValue.length), (V = P.firstChild) !== null; )
                Y = P, P = V;
              for (; ; ) {
                if (P === l) break t;
                if (Y === u && ++B === r && (S = v), Y === d && ++W === c && (O = v), (V = P.nextSibling) !== null) break;
                P = Y, Y = P.parentNode;
              }
              P = V;
            }
            u = S === -1 || O === -1 ? null : { start: S, end: O };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (_r = { focusedElem: l, selectionRange: u }, jr = !1, ll = a; ll !== null; )
      if (a = ll, l = a.child, (a.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = a, ll = l;
      else
        for (; ll !== null; ) {
          switch (a = ll, d = a.alternate, l = a.flags, a.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && d !== null) {
                l = void 0, u = a, r = d.memoizedProps, d = d.memoizedState, c = u.stateNode;
                try {
                  var De = Ai(
                    u.type,
                    r,
                    u.elementType === u.type
                  );
                  l = c.getSnapshotBeforeUpdate(
                    De,
                    d
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (xe) {
                  ht(
                    u,
                    u.return,
                    xe
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = a.stateNode.containerInfo, u = l.nodeType, u === 9)
                  Nr(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Nr(l);
                      break;
                    default:
                      l.textContent = "";
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
              if ((l & 1024) !== 0) throw Error(y(163));
          }
          if (l = a.sibling, l !== null) {
            l.return = a.return, ll = l;
            break;
          }
          ll = a.return;
        }
  }
  function iy(l, a, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        $a(l, u), c & 4 && Sr(5, u);
        break;
      case 1:
        if ($a(l, u), c & 4)
          if (l = u.stateNode, a === null)
            try {
              l.componentDidMount();
            } catch (v) {
              ht(u, u.return, v);
            }
          else {
            var r = Ai(
              u.type,
              a.memoizedProps
            );
            a = a.memoizedState;
            try {
              l.componentDidUpdate(
                r,
                a,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (v) {
              ht(
                u,
                u.return,
                v
              );
            }
          }
        c & 64 && Od(u), c & 512 && Bo(u, u.return);
        break;
      case 3:
        if ($a(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (a = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                a = u.child.stateNode;
                break;
              case 1:
                a = u.child.stateNode;
            }
          try {
            er(l, a);
          } catch (v) {
            ht(u, u.return, v);
          }
        }
        break;
      case 27:
        a === null && c & 4 && xd(u);
      case 26:
      case 5:
        $a(l, u), a === null && c & 4 && qo(u), c & 512 && Bo(u, u.return);
        break;
      case 12:
        $a(l, u);
        break;
      case 13:
        $a(l, u), c & 4 && Ud(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = Ov.bind(
          null,
          u
        ), wv(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || Ja, !c) {
          a = a !== null && a.memoizedState !== null || jt, r = Ja;
          var d = jt;
          Ja = c, (jt = a) && !d ? Di(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : $a(l, u), Ja = r, jt = d;
        }
        break;
      case 30:
        break;
      default:
        $a(l, u);
    }
  }
  function cy(l) {
    var a = l.alternate;
    a !== null && (l.alternate = null, cy(a)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (a = l.stateNode, a !== null && Df(a)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Mt = null, Sl = !1;
  function Ka(l, a, u) {
    for (u = u.child; u !== null; )
      Ke(l, a, u), u = u.sibling;
  }
  function Ke(l, a, u) {
    if (jl && typeof jl.onCommitFiberUnmount == "function")
      try {
        jl.onCommitFiberUnmount(no, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        jt || ga(u, a), Ka(
          l,
          a,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        jt || ga(u, a);
        var c = Mt, r = Sl;
        wi(u.type) && (Mt = u.stateNode, Sl = !1), Ka(
          l,
          a,
          u
        ), sn(u.stateNode), Mt = c, Sl = r;
        break;
      case 5:
        jt || ga(u, a);
      case 6:
        if (c = Mt, r = Sl, Mt = null, Ka(
          l,
          a,
          u
        ), Mt = c, Sl = r, Mt !== null)
          if (Sl)
            try {
              (Mt.nodeType === 9 ? Mt.body : Mt.nodeName === "HTML" ? Mt.ownerDocument.body : Mt).removeChild(u.stateNode);
            } catch (d) {
              ht(
                u,
                a,
                d
              );
            }
          else
            try {
              Mt.removeChild(u.stateNode);
            } catch (d) {
              ht(
                u,
                a,
                d
              );
            }
        break;
      case 18:
        Mt !== null && (Sl ? (l = Mt, Jd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), nu(l)) : Jd(Mt, u.stateNode));
        break;
      case 4:
        c = Mt, r = Sl, Mt = u.stateNode.containerInfo, Sl = !0, Ka(
          l,
          a,
          u
        ), Mt = c, Sl = r;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        jt || Oi(2, u, a), jt || Oi(4, u, a), Ka(
          l,
          a,
          u
        );
        break;
      case 1:
        jt || (ga(u, a), c = u.stateNode, typeof c.componentWillUnmount == "function" && ny(
          u,
          a,
          c
        )), Ka(
          l,
          a,
          u
        );
        break;
      case 21:
        Ka(
          l,
          a,
          u
        );
        break;
      case 22:
        jt = (c = jt) || u.memoizedState !== null, Ka(
          l,
          a,
          u
        ), jt = c;
        break;
      default:
        Ka(
          l,
          a,
          u
        );
    }
  }
  function Ud(l, a) {
    if (a.memoizedState === null && (l = a.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        nu(l);
      } catch (u) {
        ht(a, a.return, u);
      }
  }
  function oy(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var a = l.stateNode;
        return a === null && (a = l.stateNode = new Md()), a;
      case 22:
        return l = l.stateNode, a = l._retryCache, a === null && (a = l._retryCache = new Md()), a;
      default:
        throw Error(y(435, l.tag));
    }
  }
  function Cd(l, a) {
    var u = oy(l);
    a.forEach(function(c) {
      var r = Dv.bind(null, l, c);
      u.has(c) || (u.add(c), c.then(r, r));
    });
  }
  function Xl(l, a) {
    var u = a.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var r = u[c], d = l, v = a, S = v;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 27:
              if (wi(S.type)) {
                Mt = S.stateNode, Sl = !1;
                break e;
              }
              break;
            case 5:
              Mt = S.stateNode, Sl = !1;
              break e;
            case 3:
            case 4:
              Mt = S.stateNode.containerInfo, Sl = !0;
              break e;
          }
          S = S.return;
        }
        if (Mt === null) throw Error(y(160));
        Ke(d, v, r), Mt = null, Sl = !1, d = r.alternate, d !== null && (d.return = null), r.return = null;
      }
    if (a.subtreeFlags & 13878)
      for (a = a.child; a !== null; )
        Tr(a, l), a = a.sibling;
  }
  var Ql = null;
  function Tr(l, a) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Xl(a, l), sl(l), c & 4 && (Oi(3, l, l.return), Sr(3, l), Oi(5, l, l.return));
        break;
      case 1:
        Xl(a, l), sl(l), c & 512 && (jt || u === null || ga(u, u.return)), c & 64 && Ja && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var r = Ql;
        if (Xl(a, l), sl(l), c & 512 && (jt || u === null || ga(u, u.return)), c & 4) {
          var d = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, r = r.ownerDocument || r;
                  t: switch (c) {
                    case "title":
                      d = r.getElementsByTagName("title")[0], (!d || d[pe] || d[cl] || d.namespaceURI === "http://www.w3.org/2000/svg" || d.hasAttribute("itemprop")) && (d = r.createElement(c), r.head.insertBefore(
                        d,
                        r.querySelector("head > title")
                      )), Ce(d, c, u), d[cl] = l, Pt(d), c = d;
                      break e;
                    case "link":
                      var v = Ny(
                        "link",
                        "href",
                        r
                      ).get(c + (u.href || ""));
                      if (v) {
                        for (var S = 0; S < v.length; S++)
                          if (d = v[S], d.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && d.getAttribute("rel") === (u.rel == null ? null : u.rel) && d.getAttribute("title") === (u.title == null ? null : u.title) && d.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            v.splice(S, 1);
                            break t;
                          }
                      }
                      d = r.createElement(c), Ce(d, c, u), r.head.appendChild(d);
                      break;
                    case "meta":
                      if (v = Ny(
                        "meta",
                        "content",
                        r
                      ).get(c + (u.content || ""))) {
                        for (S = 0; S < v.length; S++)
                          if (d = v[S], d.getAttribute("content") === (u.content == null ? null : "" + u.content) && d.getAttribute("name") === (u.name == null ? null : u.name) && d.getAttribute("property") === (u.property == null ? null : u.property) && d.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && d.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            v.splice(S, 1);
                            break t;
                          }
                      }
                      d = r.createElement(c), Ce(d, c, u), r.head.appendChild(d);
                      break;
                    default:
                      throw Error(y(468, c));
                  }
                  d[cl] = l, Pt(d), c = d;
                }
                l.stateNode = c;
              } else
                By(
                  r,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = P0(
                r,
                c,
                l.memoizedProps
              );
          else
            d !== c ? (d === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : d.count--, c === null ? By(
              r,
              l.type,
              l.stateNode
            ) : P0(
              r,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && ay(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Xl(a, l), sl(l), c & 512 && (jt || u === null || ga(u, u.return)), u !== null && c & 4 && ay(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Xl(a, l), sl(l), c & 512 && (jt || u === null || ga(u, u.return)), l.flags & 32) {
          r = l.stateNode;
          try {
            co(r, "");
          } catch (V) {
            ht(l, l.return, V);
          }
        }
        c & 4 && l.stateNode != null && (r = l.memoizedProps, ay(
          l,
          r,
          u !== null ? u.memoizedProps : r
        )), c & 1024 && (zd = !0);
        break;
      case 6:
        if (Xl(a, l), sl(l), c & 4) {
          if (l.stateNode === null)
            throw Error(y(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (V) {
            ht(l, l.return, V);
          }
        }
        break;
      case 3:
        if (qi = null, r = Ql, Ql = Kd(a.containerInfo), Xl(a, l), Ql = r, sl(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            nu(a.containerInfo);
          } catch (V) {
            ht(l, l.return, V);
          }
        zd && (zd = !1, fy(l));
        break;
      case 4:
        c = Ql, Ql = Kd(
          l.stateNode.containerInfo
        ), Xl(a, l), sl(l), Ql = c;
        break;
      case 12:
        Xl(a, l), sl(l);
        break;
      case 13:
        Xl(a, l), sl(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (gy = gn()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, Cd(l, c)));
        break;
      case 22:
        r = l.memoizedState !== null;
        var O = u !== null && u.memoizedState !== null, B = Ja, W = jt;
        if (Ja = B || r, jt = W || O, Xl(a, l), jt = W, Ja = B, sl(l), c & 8192)
          e: for (a = l.stateNode, a._visibility = r ? a._visibility & -2 : a._visibility | 1, r && (u === null || O || Ja || jt || Ut(l)), u = null, a = l; ; ) {
            if (a.tag === 5 || a.tag === 26) {
              if (u === null) {
                O = u = a;
                try {
                  if (d = O.stateNode, r)
                    v = d.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none";
                  else {
                    S = O.stateNode;
                    var P = O.memoizedProps.style, Y = P != null && P.hasOwnProperty("display") ? P.display : null;
                    S.style.display = Y == null || typeof Y == "boolean" ? "" : ("" + Y).trim();
                  }
                } catch (V) {
                  ht(O, O.return, V);
                }
              }
            } else if (a.tag === 6) {
              if (u === null) {
                O = a;
                try {
                  O.stateNode.nodeValue = r ? "" : O.memoizedProps;
                } catch (V) {
                  ht(O, O.return, V);
                }
              }
            } else if ((a.tag !== 22 && a.tag !== 23 || a.memoizedState === null || a === l) && a.child !== null) {
              a.child.return = a, a = a.child;
              continue;
            }
            if (a === l) break e;
            for (; a.sibling === null; ) {
              if (a.return === null || a.return === l) break e;
              u === a && (u = null), a = a.return;
            }
            u === a && (u = null), a.sibling.return = a.return, a = a.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, Cd(l, u))));
        break;
      case 19:
        Xl(a, l), sl(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, Cd(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Xl(a, l), sl(l);
    }
  }
  function sl(l) {
    var a = l.flags;
    if (a & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (N0(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(y(160));
        switch (u.tag) {
          case 27:
            var r = u.stateNode, d = Zn(l);
            Dd(l, d, r);
            break;
          case 5:
            var v = u.stateNode;
            u.flags & 32 && (co(v, ""), u.flags &= -33);
            var S = Zn(l);
            Dd(l, S, v);
            break;
          case 3:
          case 4:
            var O = u.stateNode.containerInfo, B = Zn(l);
            Cc(
              l,
              B,
              O
            );
            break;
          default:
            throw Error(y(161));
        }
      } catch (W) {
        ht(l, l.return, W);
      }
      l.flags &= -3;
    }
    a & 4096 && (l.flags &= -4097);
  }
  function fy(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var a = l;
        fy(a), a.tag === 5 && a.flags & 1024 && a.stateNode.reset(), l = l.sibling;
      }
  }
  function $a(l, a) {
    if (a.subtreeFlags & 8772)
      for (a = a.child; a !== null; )
        iy(l, a.alternate, a), a = a.sibling;
  }
  function Ut(l) {
    for (l = l.child; l !== null; ) {
      var a = l;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Oi(4, a, a.return), Ut(a);
          break;
        case 1:
          ga(a, a.return);
          var u = a.stateNode;
          typeof u.componentWillUnmount == "function" && ny(
            a,
            a.return,
            u
          ), Ut(a);
          break;
        case 27:
          sn(a.stateNode);
        case 26:
        case 5:
          ga(a, a.return), Ut(a);
          break;
        case 22:
          a.memoizedState === null && Ut(a);
          break;
        case 30:
          Ut(a);
          break;
        default:
          Ut(a);
      }
      l = l.sibling;
    }
  }
  function Di(l, a, u) {
    for (u = u && (a.subtreeFlags & 8772) !== 0, a = a.child; a !== null; ) {
      var c = a.alternate, r = l, d = a, v = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          Di(
            r,
            d,
            u
          ), Sr(4, d);
          break;
        case 1:
          if (Di(
            r,
            d,
            u
          ), c = d, r = c.stateNode, typeof r.componentDidMount == "function")
            try {
              r.componentDidMount();
            } catch (B) {
              ht(c, c.return, B);
            }
          if (c = d, r = c.updateQueue, r !== null) {
            var S = c.stateNode;
            try {
              var O = r.shared.hiddenCallbacks;
              if (O !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < O.length; r++)
                  Js(O[r], S);
            } catch (B) {
              ht(c, c.return, B);
            }
          }
          u && v & 64 && Od(d), Bo(d, d.return);
          break;
        case 27:
          xd(d);
        case 26:
        case 5:
          Di(
            r,
            d,
            u
          ), u && c === null && v & 4 && qo(d), Bo(d, d.return);
          break;
        case 12:
          Di(
            r,
            d,
            u
          );
          break;
        case 13:
          Di(
            r,
            d,
            u
          ), u && v & 4 && Ud(r, d);
          break;
        case 22:
          d.memoizedState === null && Di(
            r,
            d,
            u
          ), Bo(d, d.return);
          break;
        case 30:
          break;
        default:
          Di(
            r,
            d,
            u
          );
      }
      a = a.sibling;
    }
  }
  function kn(l, a) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (l = a.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Ba(u));
  }
  function Hd(l, a) {
    l = null, a.alternate !== null && (l = a.alternate.memoizedState.cache), a = a.memoizedState.cache, a !== l && (a.refCount++, l != null && Ba(l));
  }
  function Tl(l, a, u, c) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; )
        ry(
          l,
          a,
          u,
          c
        ), a = a.sibling;
  }
  function ry(l, a, u, c) {
    var r = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Tl(
          l,
          a,
          u,
          c
        ), r & 2048 && Sr(9, a);
        break;
      case 1:
        Tl(
          l,
          a,
          u,
          c
        );
        break;
      case 3:
        Tl(
          l,
          a,
          u,
          c
        ), r & 2048 && (l = null, a.alternate !== null && (l = a.alternate.memoizedState.cache), a = a.memoizedState.cache, a !== l && (a.refCount++, l != null && Ba(l)));
        break;
      case 12:
        if (r & 2048) {
          Tl(
            l,
            a,
            u,
            c
          ), l = a.stateNode;
          try {
            var d = a.memoizedProps, v = d.id, S = d.onPostCommit;
            typeof S == "function" && S(
              v,
              a.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (O) {
            ht(a, a.return, O);
          }
        } else
          Tl(
            l,
            a,
            u,
            c
          );
        break;
      case 13:
        Tl(
          l,
          a,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        d = a.stateNode, v = a.alternate, a.memoizedState !== null ? d._visibility & 2 ? Tl(
          l,
          a,
          u,
          c
        ) : ut(l, a) : d._visibility & 2 ? Tl(
          l,
          a,
          u,
          c
        ) : (d._visibility |= 2, _u(
          l,
          a,
          u,
          c,
          (a.subtreeFlags & 10256) !== 0
        )), r & 2048 && kn(v, a);
        break;
      case 24:
        Tl(
          l,
          a,
          u,
          c
        ), r & 2048 && Hd(a.alternate, a);
        break;
      default:
        Tl(
          l,
          a,
          u,
          c
        );
    }
  }
  function _u(l, a, u, c, r) {
    for (r = r && (a.subtreeFlags & 10256) !== 0, a = a.child; a !== null; ) {
      var d = l, v = a, S = u, O = c, B = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          _u(
            d,
            v,
            S,
            O,
            r
          ), Sr(8, v);
          break;
        case 23:
          break;
        case 22:
          var W = v.stateNode;
          v.memoizedState !== null ? W._visibility & 2 ? _u(
            d,
            v,
            S,
            O,
            r
          ) : ut(
            d,
            v
          ) : (W._visibility |= 2, _u(
            d,
            v,
            S,
            O,
            r
          )), r && B & 2048 && kn(
            v.alternate,
            v
          );
          break;
        case 24:
          _u(
            d,
            v,
            S,
            O,
            r
          ), r && B & 2048 && Hd(v.alternate, v);
          break;
        default:
          _u(
            d,
            v,
            S,
            O,
            r
          );
      }
      a = a.sibling;
    }
  }
  function ut(l, a) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) {
        var u = l, c = a, r = c.flags;
        switch (c.tag) {
          case 22:
            ut(u, c), r & 2048 && kn(
              c.alternate,
              c
            );
            break;
          case 24:
            ut(u, c), r & 2048 && Hd(c.alternate, c);
            break;
          default:
            ut(u, c);
        }
        a = a.sibling;
      }
  }
  var Hc = 8192;
  function Lt(l) {
    if (l.subtreeFlags & Hc)
      for (l = l.child; l !== null; )
        B0(l), l = l.sibling;
  }
  function B0(l) {
    switch (l.tag) {
      case 26:
        Lt(l), l.flags & Hc && l.memoizedState !== null && tg(
          Ql,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Lt(l);
        break;
      case 3:
      case 4:
        var a = Ql;
        Ql = Kd(l.stateNode.containerInfo), Lt(l), Ql = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = Hc, Hc = 16777216, Lt(l), Hc = a) : Lt(l));
        break;
      default:
        Lt(l);
    }
  }
  function sy(l) {
    var a = l.alternate;
    if (a !== null && (l = a.child, l !== null)) {
      a.child = null;
      do
        a = l.sibling, l.sibling = null, l = a;
      while (l !== null);
    }
  }
  function wc(l) {
    var a = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (a !== null)
        for (var u = 0; u < a.length; u++) {
          var c = a[u];
          ll = c, hy(
            c,
            l
          );
        }
      sy(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        dy(l), l = l.sibling;
  }
  function dy(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        wc(l), l.flags & 2048 && Oi(9, l, l.return);
        break;
      case 3:
        wc(l);
        break;
      case 12:
        wc(l);
        break;
      case 22:
        var a = l.stateNode;
        l.memoizedState !== null && a._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (a._visibility &= -3, Zl(l)) : wc(l);
        break;
      default:
        wc(l);
    }
  }
  function Zl(l) {
    var a = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (a !== null)
        for (var u = 0; u < a.length; u++) {
          var c = a[u];
          ll = c, hy(
            c,
            l
          );
        }
      sy(l);
    }
    for (l = l.child; l !== null; ) {
      switch (a = l, a.tag) {
        case 0:
        case 11:
        case 15:
          Oi(8, a, a.return), Zl(a);
          break;
        case 22:
          u = a.stateNode, u._visibility & 2 && (u._visibility &= -3, Zl(a));
          break;
        default:
          Zl(a);
      }
      l = l.sibling;
    }
  }
  function hy(l, a) {
    for (; ll !== null; ) {
      var u = ll;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Oi(8, u, a);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          Ba(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, ll = c;
      else
        e: for (u = l; ll !== null; ) {
          c = ll;
          var r = c.sibling, d = c.return;
          if (cy(c), c === u) {
            ll = null;
            break e;
          }
          if (r !== null) {
            r.return = d, ll = r;
            break e;
          }
          ll = d;
        }
    }
  }
  var my = {
    getCacheForType: function(l) {
      var a = ol(It), u = a.data.get(l);
      return u === void 0 && (u = l(), a.data.set(l, u)), u;
    }
  }, q0 = typeof WeakMap == "function" ? WeakMap : Map, ft = 0, At = null, We = null, Fe = 0, rt = 0, on = null, Wa = !1, Yo = !1, yy = !1, Nu = 0, Vt = 0, Bu = 0, _c = 0, Fa = 0, Jn = 0, jo = 0, Lo = null, fn = null, py = !1, gy = 0, wd = 1 / 0, Vo = null, xi = null, El = 0, Pa = null, Go = null, Al = 0, _d = 0, Nd = null, vy = null, Xo = 0, by = null;
  function On() {
    if ((ft & 2) !== 0 && Fe !== 0)
      return Fe & -Fe;
    if (C.T !== null) {
      var l = Gn;
      return l !== 0 ? l : Yc();
    }
    return Fp();
  }
  function Sy() {
    Jn === 0 && (Jn = (Fe & 536870912) === 0 || nt ? Iu() : 536870912);
    var l = Rn.current;
    return l !== null && (l.flags |= 32), Jn;
  }
  function Dn(l, a, u) {
    (l === At && (rt === 2 || rt === 9) || l.cancelPendingCommit !== null) && (Ia(l, 0), qu(
      l,
      Fe,
      Jn,
      !1
    )), Wi(l, u), ((ft & 2) === 0 || l !== At) && (l === At && ((ft & 2) === 0 && (_c |= u), Vt === 4 && qu(
      l,
      Fe,
      Jn,
      !1
    )), rn(l));
  }
  function Qo(l, a, u) {
    if ((ft & 6) !== 0) throw Error(y(327));
    var c = !u && (a & 124) === 0 && (a & l.expiredLanes) === 0 || Oa(l, a), r = c ? Ey(l, a) : Bd(l, a, !0), d = c;
    do {
      if (r === 0) {
        Yo && !c && qu(l, a, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, d && !Y0(u)) {
          r = Bd(l, a, !1), d = !1;
          continue;
        }
        if (r === 2) {
          if (d = a, l.errorRecoveryDisabledLanes & d)
            var v = 0;
          else
            v = l.pendingLanes & -536870913, v = v !== 0 ? v : v & 536870912 ? 536870912 : 0;
          if (v !== 0) {
            a = v;
            e: {
              var S = l;
              r = Lo;
              var O = S.current.memoizedState.isDehydrated;
              if (O && (Ia(S, v).flags |= 256), v = Bd(
                S,
                v,
                !1
              ), v !== 2) {
                if (yy && !O) {
                  S.errorRecoveryDisabledLanes |= d, _c |= d, r = 4;
                  break e;
                }
                d = fn, fn = r, d !== null && (fn === null ? fn = d : fn.push.apply(
                  fn,
                  d
                ));
              }
              r = v;
            }
            if (d = !1, r !== 2) continue;
          }
        }
        if (r === 1) {
          Ia(l, 0), qu(l, a, 0, !0);
          break;
        }
        e: {
          switch (c = l, d = r, d) {
            case 0:
            case 1:
              throw Error(y(345));
            case 4:
              if ((a & 4194048) !== a) break;
            case 6:
              qu(
                c,
                a,
                Jn,
                !Wa
              );
              break e;
            case 2:
              fn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(y(329));
          }
          if ((a & 62914560) === a && (r = gy + 300 - gn(), 10 < r)) {
            if (qu(
              c,
              a,
              Jn,
              !Wa
            ), Pu(c, 0, !0) !== 0) break e;
            c.timeoutHandle = kd(
              Er.bind(
                null,
                c,
                u,
                fn,
                Vo,
                py,
                a,
                Jn,
                _c,
                jo,
                Wa,
                d,
                2,
                -0,
                0
              ),
              r
            );
            break e;
          }
          Er(
            c,
            u,
            fn,
            Vo,
            py,
            a,
            Jn,
            _c,
            jo,
            Wa,
            d,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    rn(l);
  }
  function Er(l, a, u, c, r, d, v, S, O, B, W, P, Y, V) {
    if (l.timeoutHandle = -1, P = a.subtreeFlags, (P & 8192 || (P & 16785408) === 16785408) && (lf = { stylesheets: null, count: 0, unsuspend: eg }, B0(a), P = Yy(), P !== null)) {
      l.cancelPendingCommit = P(
        V0.bind(
          null,
          l,
          a,
          d,
          u,
          c,
          r,
          v,
          S,
          O,
          W,
          1,
          Y,
          V
        )
      ), qu(l, d, v, !B);
      return;
    }
    V0(
      l,
      a,
      d,
      u,
      c,
      r,
      v,
      S,
      O
    );
  }
  function Y0(l) {
    for (var a = l; ; ) {
      var u = a.tag;
      if ((u === 0 || u === 11 || u === 15) && a.flags & 16384 && (u = a.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var r = u[c], d = r.getSnapshot;
          r = r.value;
          try {
            if (!bl(d(), r)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = a.child, a.subtreeFlags & 16384 && u !== null)
        u.return = a, a = u;
      else {
        if (a === l) break;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === l) return !0;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    return !0;
  }
  function qu(l, a, u, c) {
    a &= ~Fa, a &= ~_c, l.suspendedLanes |= a, l.pingedLanes &= ~a, c && (l.warmLanes |= a), c = l.expirationTimes;
    for (var r = a; 0 < r; ) {
      var d = 31 - Pl(r), v = 1 << d;
      c[d] = -1, r &= ~v;
    }
    u !== 0 && Rf(l, u, a);
  }
  function Nc() {
    return (ft & 6) === 0 ? (Dr(0), !1) : !0;
  }
  function zi() {
    if (We !== null) {
      if (rt === 0)
        var l = We.return;
      else
        l = We, ha = xu = null, Fs(l), Oc = null, Co = 0, l = We;
      for (; l !== null; )
        ly(l.alternate, l), l = l.return;
      We = null;
    }
  }
  function Ia(l, a) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Uv(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), zi(), At = l, We = u = sa(l.current, null), Fe = a, rt = 0, on = null, Wa = !1, Yo = Oa(l, a), yy = !1, jo = Jn = Fa = _c = Bu = Vt = 0, fn = Lo = null, py = !1, (a & 8) !== 0 && (a |= a & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= a; 0 < c; ) {
        var r = 31 - Pl(c), d = 1 << r;
        a |= l[r], c &= ~d;
      }
    return Nu = a, ra(), u;
  }
  function Ty(l, a) {
    Be = null, C.H = dd, a === vi || a === Pf ? (a = Om(), rt = 3) : a === Gs ? (a = Om(), rt = 4) : rt = a === Yt ? 8 : a !== null && typeof a == "object" && typeof a.then == "function" ? 6 : 1, on = a, We === null && (Vt = 1, pr(
      l,
      Tn(a, l.current)
    ));
  }
  function j0() {
    var l = C.H;
    return C.H = dd, l === null ? dd : l;
  }
  function Bc() {
    var l = C.A;
    return C.A = my, l;
  }
  function qc() {
    Vt = 4, Wa || (Fe & 4194048) !== Fe && Rn.current !== null || (Yo = !0), (Bu & 134217727) === 0 && (_c & 134217727) === 0 || At === null || qu(
      At,
      Fe,
      Jn,
      !1
    );
  }
  function Bd(l, a, u) {
    var c = ft;
    ft |= 2;
    var r = j0(), d = Bc();
    (At !== l || Fe !== a) && (Vo = null, Ia(l, a)), a = !1;
    var v = Vt;
    e: do
      try {
        if (rt !== 0 && We !== null) {
          var S = We, O = on;
          switch (rt) {
            case 8:
              zi(), v = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Rn.current === null && (a = !0);
              var B = rt;
              if (rt = 0, on = null, Zo(l, S, O, B), u && Yo) {
                v = 0;
                break e;
              }
              break;
            default:
              B = rt, rt = 0, on = null, Zo(l, S, O, B);
          }
        }
        qd(), v = Vt;
        break;
      } catch (W) {
        Ty(l, W);
      }
    while (!0);
    return a && l.shellSuspendCounter++, ha = xu = null, ft = c, C.H = r, C.A = d, We === null && (At = null, Fe = 0, ra()), v;
  }
  function qd() {
    for (; We !== null; ) Ry(We);
  }
  function Ey(l, a) {
    var u = ft;
    ft |= 2;
    var c = j0(), r = Bc();
    At !== l || Fe !== a ? (Vo = null, wd = gn() + 500, Ia(l, a)) : Yo = Oa(
      l,
      a
    );
    e: do
      try {
        if (rt !== 0 && We !== null) {
          a = We;
          var d = on;
          t: switch (rt) {
            case 1:
              rt = 0, on = null, Zo(l, a, d, 1);
              break;
            case 2:
            case 9:
              if (Qs(d)) {
                rt = 0, on = null, Oy(a);
                break;
              }
              a = function() {
                rt !== 2 && rt !== 9 || At !== l || (rt = 7), rn(l);
              }, d.then(a, a);
              break e;
            case 3:
              rt = 7;
              break e;
            case 4:
              rt = 5;
              break e;
            case 7:
              Qs(d) ? (rt = 0, on = null, Oy(a)) : (rt = 0, on = null, Zo(l, a, d, 7));
              break;
            case 5:
              var v = null;
              switch (We.tag) {
                case 26:
                  v = We.memoizedState;
                case 5:
                case 27:
                  var S = We;
                  if (!v || qy(v)) {
                    rt = 0, on = null;
                    var O = S.sibling;
                    if (O !== null) We = O;
                    else {
                      var B = S.return;
                      B !== null ? (We = B, Ar(B)) : We = null;
                    }
                    break t;
                  }
              }
              rt = 0, on = null, Zo(l, a, d, 5);
              break;
            case 6:
              rt = 0, on = null, Zo(l, a, d, 6);
              break;
            case 8:
              zi(), Vt = 6;
              break e;
            default:
              throw Error(y(462));
          }
        }
        Ay();
        break;
      } catch (W) {
        Ty(l, W);
      }
    while (!0);
    return ha = xu = null, C.H = c, C.A = r, ft = u, We !== null ? 0 : (At = null, Fe = 0, ra(), Vt);
  }
  function Ay() {
    for (; We !== null && !ds(); )
      Ry(We);
  }
  function Ry(l) {
    var a = _0(l.alternate, l, Nu);
    l.memoizedProps = l.pendingProps, a === null ? Ar(l) : We = a;
  }
  function Oy(l) {
    var a = l, u = a.alternate;
    switch (a.tag) {
      case 15:
      case 0:
        a = Fm(
          u,
          a,
          a.pendingProps,
          a.type,
          void 0,
          Fe
        );
        break;
      case 11:
        a = Fm(
          u,
          a,
          a.pendingProps,
          a.type.render,
          a.ref,
          Fe
        );
        break;
      case 5:
        Fs(a);
      default:
        ly(u, a), a = We = Qe(a, Nu), a = _0(u, a, Nu);
    }
    l.memoizedProps = l.pendingProps, a === null ? Ar(l) : We = a;
  }
  function Zo(l, a, u, c) {
    ha = xu = null, Fs(a), Oc = null, Co = 0;
    var r = a.return;
    try {
      if (C0(
        l,
        r,
        a,
        u,
        Fe
      )) {
        Vt = 1, pr(
          l,
          Tn(u, l.current)
        ), We = null;
        return;
      }
    } catch (d) {
      if (r !== null) throw We = r, d;
      Vt = 1, pr(
        l,
        Tn(u, l.current)
      ), We = null;
      return;
    }
    a.flags & 32768 ? (nt || c === 1 ? l = !0 : Yo || (Fe & 536870912) !== 0 ? l = !1 : (Wa = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = Rn.current, c !== null && c.tag === 13 && (c.flags |= 16384))), L0(a, l)) : Ar(a);
  }
  function Ar(l) {
    var a = l;
    do {
      if ((a.flags & 32768) !== 0) {
        L0(
          a,
          Wa
        );
        return;
      }
      l = a.return;
      var u = ty(
        a.alternate,
        a,
        Nu
      );
      if (u !== null) {
        We = u;
        return;
      }
      if (a = a.sibling, a !== null) {
        We = a;
        return;
      }
      We = a = l;
    } while (a !== null);
    Vt === 0 && (Vt = 5);
  }
  function L0(l, a) {
    do {
      var u = Rv(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, We = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !a && (l = l.sibling, l !== null)) {
        We = l;
        return;
      }
      We = l = u;
    } while (l !== null);
    Vt = 6, We = null;
  }
  function V0(l, a, u, c, r, d, v, S, O) {
    l.cancelPendingCommit = null;
    do
      jd();
    while (El !== 0);
    if ((ft & 6) !== 0) throw Error(y(327));
    if (a !== null) {
      if (a === l.current) throw Error(y(177));
      if (d = a.lanes | a.childLanes, d |= Ha, Wp(
        l,
        u,
        d,
        v,
        S,
        O
      ), l === At && (We = At = null, Fe = 0), Go = a, Pa = l, Al = u, _d = d, Nd = r, vy = c, (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, xv(Af, function() {
        return Dy(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (a.flags & 13878) !== 0, (a.subtreeFlags & 13878) !== 0 || c) {
        c = C.T, C.T = null, r = te.p, te.p = 2, v = ft, ft |= 4;
        try {
          uy(l, a, u);
        } finally {
          ft = v, te.p = r, C.T = c;
        }
      }
      El = 1, G0(), Rr(), Yd();
    }
  }
  function G0() {
    if (El === 1) {
      El = 0;
      var l = Pa, a = Go, u = (a.flags & 13878) !== 0;
      if ((a.subtreeFlags & 13878) !== 0 || u) {
        u = C.T, C.T = null;
        var c = te.p;
        te.p = 2;
        var r = ft;
        ft |= 4;
        try {
          Tr(a, l);
          var d = _r, v = mm(l.containerInfo), S = d.focusedElem, O = d.selectionRange;
          if (v !== S && S && S.ownerDocument && Vf(
            S.ownerDocument.documentElement,
            S
          )) {
            if (O !== null && Gf(S)) {
              var B = O.start, W = O.end;
              if (W === void 0 && (W = B), "selectionStart" in S)
                S.selectionStart = B, S.selectionEnd = Math.min(
                  W,
                  S.value.length
                );
              else {
                var P = S.ownerDocument || document, Y = P && P.defaultView || window;
                if (Y.getSelection) {
                  var V = Y.getSelection(), De = S.textContent.length, xe = Math.min(O.start, De), it = O.end === void 0 ? xe : Math.min(O.end, De);
                  !V.extend && xe > it && (v = it, it = xe, xe = v);
                  var H = Ot(
                    S,
                    xe
                  ), M = Ot(
                    S,
                    it
                  );
                  if (H && M && (V.rangeCount !== 1 || V.anchorNode !== H.node || V.anchorOffset !== H.offset || V.focusNode !== M.node || V.focusOffset !== M.offset)) {
                    var N = P.createRange();
                    N.setStart(H.node, H.offset), V.removeAllRanges(), xe > it ? (V.addRange(N), V.extend(M.node, M.offset)) : (N.setEnd(M.node, M.offset), V.addRange(N));
                  }
                }
              }
            }
            for (P = [], V = S; V = V.parentNode; )
              V.nodeType === 1 && P.push({
                element: V,
                left: V.scrollLeft,
                top: V.scrollTop
              });
            for (typeof S.focus == "function" && S.focus(), S = 0; S < P.length; S++) {
              var F = P[S];
              F.element.scrollLeft = F.left, F.element.scrollTop = F.top;
            }
          }
          jr = !!wr, _r = wr = null;
        } finally {
          ft = r, te.p = c, C.T = u;
        }
      }
      l.current = a, El = 2;
    }
  }
  function Rr() {
    if (El === 2) {
      El = 0;
      var l = Pa, a = Go, u = (a.flags & 8772) !== 0;
      if ((a.subtreeFlags & 8772) !== 0 || u) {
        u = C.T, C.T = null;
        var c = te.p;
        te.p = 2;
        var r = ft;
        ft |= 4;
        try {
          iy(l, a.alternate, a);
        } finally {
          ft = r, te.p = c, C.T = u;
        }
      }
      El = 3;
    }
  }
  function Yd() {
    if (El === 4 || El === 3) {
      El = 0, Ki();
      var l = Pa, a = Go, u = Al, c = vy;
      (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0 ? El = 5 : (El = 0, Go = Pa = null, X0(l, l.pendingLanes));
      var r = l.pendingLanes;
      if (r === 0 && (xi = null), hs(u), a = a.stateNode, jl && typeof jl.onCommitFiberRoot == "function")
        try {
          jl.onCommitFiberRoot(
            no,
            a,
            void 0,
            (a.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        a = C.T, r = te.p, te.p = 2, C.T = null;
        try {
          for (var d = l.onRecoverableError, v = 0; v < c.length; v++) {
            var S = c[v];
            d(S.value, {
              componentStack: S.stack
            });
          }
        } finally {
          C.T = a, te.p = r;
        }
      }
      (Al & 3) !== 0 && jd(), rn(l), r = l.pendingLanes, (u & 4194090) !== 0 && (r & 42) !== 0 ? l === by ? Xo++ : (Xo = 0, by = l) : Xo = 0, Dr(0);
    }
  }
  function X0(l, a) {
    (l.pooledCacheLanes &= a) === 0 && (a = l.pooledCache, a != null && (l.pooledCache = null, Ba(a)));
  }
  function jd(l) {
    return G0(), Rr(), Yd(), Dy();
  }
  function Dy() {
    if (El !== 5) return !1;
    var l = Pa, a = _d;
    _d = 0;
    var u = hs(Al), c = C.T, r = te.p;
    try {
      te.p = 32 > u ? 32 : u, C.T = null, u = Nd, Nd = null;
      var d = Pa, v = Al;
      if (El = 0, Go = Pa = null, Al = 0, (ft & 6) !== 0) throw Error(y(331));
      var S = ft;
      if (ft |= 4, dy(d.current), ry(
        d,
        d.current,
        v,
        u
      ), ft = S, Dr(0, !1), jl && typeof jl.onPostCommitFiberRoot == "function")
        try {
          jl.onPostCommitFiberRoot(no, d);
        } catch {
        }
      return !0;
    } finally {
      te.p = r, C.T = c, X0(l, a);
    }
  }
  function xy(l, a, u) {
    a = Tn(u, a), a = $m(l.stateNode, a, 2), l = ja(l, a, 2), l !== null && (Wi(l, 2), rn(l));
  }
  function ht(l, a, u) {
    if (l.tag === 3)
      xy(l, l, u);
    else
      for (; a !== null; ) {
        if (a.tag === 3) {
          xy(
            a,
            l,
            u
          );
          break;
        } else if (a.tag === 1) {
          var c = a.stateNode;
          if (typeof a.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (xi === null || !xi.has(c))) {
            l = Tn(u, l), u = Wm(2), c = ja(a, u, 2), c !== null && (cn(
              u,
              c,
              a,
              l
            ), Wi(c, 2), rn(c));
            break;
          }
        }
        a = a.return;
      }
  }
  function Ld(l, a, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new q0();
      var r = /* @__PURE__ */ new Set();
      c.set(a, r);
    } else
      r = c.get(a), r === void 0 && (r = /* @__PURE__ */ new Set(), c.set(a, r));
    r.has(u) || (yy = !0, r.add(u), l = zy.bind(null, l, a, u), a.then(l, l));
  }
  function zy(l, a, u) {
    var c = l.pingCache;
    c !== null && c.delete(a), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, At === l && (Fe & u) === u && (Vt === 4 || Vt === 3 && (Fe & 62914560) === Fe && 300 > gn() - gy ? (ft & 2) === 0 && Ia(l, 0) : Fa |= u, jo === Fe && (jo = 0)), rn(l);
  }
  function My(l, a) {
    a === 0 && (a = $i()), l = wa(l, a), l !== null && (Wi(l, a), rn(l));
  }
  function Ov(l) {
    var a = l.memoizedState, u = 0;
    a !== null && (u = a.retryLane), My(l, u);
  }
  function Dv(l, a) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var c = l.stateNode, r = l.memoizedState;
        r !== null && (u = r.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(y(314));
    }
    c !== null && c.delete(a), My(l, u);
  }
  function xv(l, a) {
    return na(l, a);
  }
  var Vd = null, Mi = null, Or = !1, ko = !1, Gd = !1, Ui = 0;
  function rn(l) {
    l !== Mi && l.next === null && (Mi === null ? Vd = Mi = l : Mi = Mi.next = l), ko = !0, Or || (Or = !0, k0());
  }
  function Dr(l, a) {
    if (!Gd && ko) {
      Gd = !0;
      do
        for (var u = !1, c = Vd; c !== null; ) {
          if (l !== 0) {
            var r = c.pendingLanes;
            if (r === 0) var d = 0;
            else {
              var v = c.suspendedLanes, S = c.pingedLanes;
              d = (1 << 31 - Pl(42 | l) + 1) - 1, d &= r & ~(v & ~S), d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0;
            }
            d !== 0 && (u = !0, zr(c, d));
          } else
            d = Fe, d = Pu(
              c,
              c === At ? d : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (d & 3) === 0 || Oa(c, d) || (u = !0, zr(c, d));
          c = c.next;
        }
      while (u);
      Gd = !1;
    }
  }
  function Q0() {
    xr();
  }
  function xr() {
    ko = Or = !1;
    var l = 0;
    Ui !== 0 && (Lu() && (l = Ui), Ui = 0);
    for (var a = gn(), u = null, c = Vd; c !== null; ) {
      var r = c.next, d = Uy(c, a);
      d === 0 ? (c.next = null, u === null ? Vd = r : u.next = r, r === null && (Mi = u)) : (u = c, (l !== 0 || (d & 3) !== 0) && (ko = !0)), c = r;
    }
    Dr(l);
  }
  function Uy(l, a) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, r = l.expirationTimes, d = l.pendingLanes & -62914561; 0 < d; ) {
      var v = 31 - Pl(d), S = 1 << v, O = r[v];
      O === -1 ? ((S & u) === 0 || (S & c) !== 0) && (r[v] = il(S, a)) : O <= a && (l.expiredLanes |= S), d &= ~S;
    }
    if (a = At, u = Fe, u = Pu(
      l,
      l === a ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === a && (rt === 2 || rt === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && Fu(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Oa(l, u)) {
      if (a = u & -u, a === l.callbackPriority) return a;
      switch (c !== null && Fu(c), hs(u)) {
        case 2:
        case 8:
          u = Lh;
          break;
        case 32:
          u = Af;
          break;
        case 268435456:
          u = lo;
          break;
        default:
          u = Af;
      }
      return c = Z0.bind(null, l), u = na(u, c), l.callbackPriority = a, l.callbackNode = u, a;
    }
    return c !== null && c !== null && Fu(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Z0(l, a) {
    if (El !== 0 && El !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (jd() && l.callbackNode !== u)
      return null;
    var c = Fe;
    return c = Pu(
      l,
      l === At ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (Qo(l, c, a), Uy(l, gn()), l.callbackNode != null && l.callbackNode === u ? Z0.bind(null, l) : null);
  }
  function zr(l, a) {
    if (jd()) return null;
    Qo(l, a, !0);
  }
  function k0() {
    Cv(function() {
      (ft & 6) !== 0 ? na(
        Jp,
        Q0
      ) : xr();
    });
  }
  function Yc() {
    return Ui === 0 && (Ui = Iu()), Ui;
  }
  function Xd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : wf("" + l);
  }
  function Mr(l, a) {
    var u = a.ownerDocument.createElement("input");
    return u.name = a.name, u.value = a.value, l.id && u.setAttribute("form", l.id), a.parentNode.insertBefore(u, a), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function J0(l, a, u, c, r) {
    if (a === "submit" && u && u.stateNode === r) {
      var d = Xd(
        (r[Ll] || null).action
      ), v = c.submitter;
      v && (a = (a = v[Ll] || null) ? Xd(a.formAction) : v.getAttribute("formAction"), a !== null && (d = a, v = null));
      var S = new Os(
        "action",
        "action",
        null,
        c,
        r
      );
      l.push({
        event: S,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (Ui !== 0) {
                  var O = v ? Mr(r, v) : new FormData(r);
                  sd(
                    u,
                    {
                      pending: !0,
                      data: O,
                      method: r.method,
                      action: d
                    },
                    null,
                    O
                  );
                }
              } else
                typeof d == "function" && (S.preventDefault(), O = v ? Mr(r, v) : new FormData(r), sd(
                  u,
                  {
                    pending: !0,
                    data: O,
                    method: r.method,
                    action: d
                  },
                  d,
                  O
                ));
            },
            currentTarget: r
          }
        ]
      });
    }
  }
  for (var Gt = 0; Gt < mo.length; Gt++) {
    var Ur = mo[Gt], zv = Ur.toLowerCase(), Ge = Ur[0].toUpperCase() + Ur.slice(1);
    qn(
      zv,
      "on" + Ge
    );
  }
  qn(p0, "onAnimationEnd"), qn(ym, "onAnimationIteration"), qn(g0, "onAnimationStart"), qn("dblclick", "onDoubleClick"), qn("focusin", "onFocus"), qn("focusout", "onBlur"), qn(pm, "onTransitionRun"), qn(_s, "onTransitionStart"), qn(v0, "onTransitionCancel"), qn(gm, "onTransitionEnd"), li("onMouseEnter", ["mouseout", "mouseover"]), li("onMouseLeave", ["mouseout", "mouseover"]), li("onPointerEnter", ["pointerout", "pointerover"]), li("onPointerLeave", ["pointerout", "pointerover"]), ti(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ti(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ti("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ti(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ti(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ti(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Cr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Ci = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cr)
  );
  function jc(l, a) {
    a = (a & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], r = c.event;
      c = c.listeners;
      e: {
        var d = void 0;
        if (a)
          for (var v = c.length - 1; 0 <= v; v--) {
            var S = c[v], O = S.instance, B = S.currentTarget;
            if (S = S.listener, O !== d && r.isPropagationStopped())
              break e;
            d = S, r.currentTarget = B;
            try {
              d(r);
            } catch (W) {
              mr(W);
            }
            r.currentTarget = null, d = O;
          }
        else
          for (v = 0; v < c.length; v++) {
            if (S = c[v], O = S.instance, B = S.currentTarget, S = S.listener, O !== d && r.isPropagationStopped())
              break e;
            d = S, r.currentTarget = B;
            try {
              d(r);
            } catch (W) {
              mr(W);
            }
            r.currentTarget = null, d = O;
          }
      }
    }
  }
  function qe(l, a) {
    var u = a[ms];
    u === void 0 && (u = a[ms] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (Qd(a, l, 2, !1), u.add(c));
  }
  function Jo(l, a, u) {
    var c = 0;
    a && (c |= 4), Qd(
      u,
      l,
      c,
      a
    );
  }
  var Ko = "_reactListening" + Math.random().toString(36).slice(2);
  function Cy(l) {
    if (!l[Ko]) {
      l[Ko] = !0, zf.forEach(function(u) {
        u !== "selectionchange" && (Ci.has(u) || Jo(u, !1, l), Jo(u, !0, l));
      });
      var a = l.nodeType === 9 ? l : l.ownerDocument;
      a === null || a[Ko] || (a[Ko] = !0, Jo("selectionchange", !1, a));
    }
  }
  function Qd(l, a, u, c) {
    switch (ky(a)) {
      case 2:
        var r = lg;
        break;
      case 8:
        r = ng;
        break;
      default:
        r = Qy;
    }
    u = r.bind(
      null,
      a,
      u,
      l
    ), r = void 0, !Es || a !== "touchstart" && a !== "touchmove" && a !== "wheel" || (r = !0), c ? r !== void 0 ? l.addEventListener(a, u, {
      capture: !0,
      passive: r
    }) : l.addEventListener(a, u, !0) : r !== void 0 ? l.addEventListener(a, u, {
      passive: r
    }) : l.addEventListener(a, u, !1);
  }
  function Kn(l, a, u, c, r) {
    var d = c;
    if ((a & 1) === 0 && (a & 2) === 0 && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var v = c.tag;
        if (v === 3 || v === 4) {
          var S = c.stateNode.containerInfo;
          if (S === r) break;
          if (v === 4)
            for (v = c.return; v !== null; ) {
              var O = v.tag;
              if ((O === 3 || O === 4) && v.stateNode.containerInfo === r)
                return;
              v = v.return;
            }
          for (; S !== null; ) {
            if (v = gl(S), v === null) return;
            if (O = v.tag, O === 5 || O === 6 || O === 26 || O === 27) {
              c = d = v;
              continue e;
            }
            S = S.parentNode;
          }
        }
        c = c.return;
      }
    ro(function() {
      var B = d, W = Ts(u), P = [];
      e: {
        var Y = vm.get(l);
        if (Y !== void 0) {
          var V = Os, De = l;
          switch (l) {
            case "keypress":
              if (vl(u) === 0) break e;
            case "keydown":
            case "keyup":
              V = ua;
              break;
            case "focusin":
              De = "focus", V = Ih;
              break;
            case "focusout":
              De = "blur", V = Ih;
              break;
            case "beforeblur":
            case "afterblur":
              V = Ih;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              V = Ph;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              V = c0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              V = lm;
              break;
            case p0:
            case ym:
            case g0:
              V = Sv;
              break;
            case gm:
              V = d0;
              break;
            case "scroll":
            case "scrollend":
              V = u0;
              break;
            case "wheel":
              V = oc;
              break;
            case "copy":
            case "cut":
            case "paste":
              V = Bf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              V = qf;
              break;
            case "toggle":
            case "beforetoggle":
              V = h0;
          }
          var xe = (a & 4) !== 0, it = !xe && (l === "scroll" || l === "scrollend"), H = xe ? Y !== null ? Y + "Capture" : null : Y;
          xe = [];
          for (var M = B, N; M !== null; ) {
            var F = M;
            if (N = F.stateNode, F = F.tag, F !== 5 && F !== 26 && F !== 27 || N === null || H === null || (F = ac(M, H), F != null && xe.push(
              Yu(M, F, N)
            )), it) break;
            M = M.return;
          }
          0 < xe.length && (Y = new V(
            Y,
            De,
            null,
            u,
            W
          ), P.push({ event: Y, listeners: xe }));
        }
      }
      if ((a & 7) === 0) {
        e: {
          if (Y = l === "mouseover" || l === "pointerover", V = l === "mouseout" || l === "pointerout", Y && u !== nc && (De = u.relatedTarget || u.fromElement) && (gl(De) || De[uo]))
            break e;
          if ((V || Y) && (Y = W.window === W ? W : (Y = W.ownerDocument) ? Y.defaultView || Y.parentWindow : window, V ? (De = u.relatedTarget || u.toElement, V = B, De = De ? gl(De) : null, De !== null && (it = E(De), xe = De.tag, De !== it || xe !== 5 && xe !== 27 && xe !== 6) && (De = null)) : (V = null, De = B), V !== De)) {
            if (xe = Ph, F = "onMouseLeave", H = "onMouseEnter", M = "mouse", (l === "pointerout" || l === "pointerover") && (xe = qf, F = "onPointerLeave", H = "onPointerEnter", M = "pointer"), it = V == null ? Y : xf(V), N = De == null ? Y : xf(De), Y = new xe(
              F,
              M + "leave",
              V,
              u,
              W
            ), Y.target = it, Y.relatedTarget = N, F = null, gl(W) === B && (xe = new xe(
              H,
              M + "enter",
              De,
              u,
              W
            ), xe.target = N, xe.relatedTarget = it, F = xe), it = F, V && De)
              t: {
                for (xe = V, H = De, M = 0, N = xe; N; N = Hi(N))
                  M++;
                for (N = 0, F = H; F; F = Hi(F))
                  N++;
                for (; 0 < M - N; )
                  xe = Hi(xe), M--;
                for (; 0 < N - M; )
                  H = Hi(H), N--;
                for (; M--; ) {
                  if (xe === H || H !== null && xe === H.alternate)
                    break t;
                  xe = Hi(xe), H = Hi(H);
                }
                xe = null;
              }
            else xe = null;
            V !== null && Hr(
              P,
              Y,
              V,
              xe,
              !1
            ), De !== null && it !== null && Hr(
              P,
              it,
              De,
              xe,
              !0
            );
          }
        }
        e: {
          if (Y = B ? xf(B) : window, V = Y.nodeName && Y.nodeName.toLowerCase(), V === "select" || V === "input" && Y.type === "file")
            var he = om;
          else if (Us(Y))
            if (fm)
              he = dm;
            else {
              he = oi;
              var Ze = Hs;
            }
          else
            V = Y.nodeName, !V || V.toLowerCase() !== "input" || Y.type !== "checkbox" && Y.type !== "radio" ? B && lc(B.elementType) && (he = om) : he = Au;
          if (he && (he = he(l, B))) {
            Cs(
              P,
              he,
              u,
              W
            );
            break e;
          }
          Ze && Ze(l, Y, B), l === "focusout" && B && Y.type === "number" && B.memoizedProps.value != null && Cf(Y, "number", Y.value);
        }
        switch (Ze = B ? xf(B) : window, l) {
          case "focusin":
            (Us(Ze) || Ze.contentEditable === "true") && (Ua = Ze, oa = B, si = null);
            break;
          case "focusout":
            si = oa = Ua = null;
            break;
          case "mousedown":
            hc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            hc = !1, ws(P, u, W);
            break;
          case "selectionchange":
            if (dc) break;
          case "keydown":
          case "keyup":
            ws(P, u, W);
        }
        var Re;
        if (Yf)
          e: {
            switch (l) {
              case "compositionstart":
                var Ue = "onCompositionStart";
                break e;
              case "compositionend":
                Ue = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ue = "onCompositionUpdate";
                break e;
            }
            Ue = void 0;
          }
        else
          ci ? Lf(l, u) && (Ue = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Ue = "onCompositionStart");
        Ue && (za && u.locale !== "ko" && (ci || Ue !== "onCompositionStart" ? Ue === "onCompositionEnd" && ci && (Re = Wh()) : (Tu = W, so = "value" in Tu ? Tu.value : Tu.textContent, ci = !0)), Ze = $o(B, Ue), 0 < Ze.length && (Ue = new em(
          Ue,
          l,
          null,
          u,
          W
        ), P.push({ event: Ue, listeners: Ze }), Re ? Ue.data = Re : (Re = ii(u), Re !== null && (Ue.data = Re)))), (Re = am ? im(l, u) : fc(l, u)) && (Ue = $o(B, "onBeforeInput"), 0 < Ue.length && (Ze = new em(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          W
        ), P.push({
          event: Ze,
          listeners: Ue
        }), Ze.data = Re)), J0(
          P,
          l,
          B,
          u,
          W
        );
      }
      jc(P, a);
    });
  }
  function Yu(l, a, u) {
    return {
      instance: l,
      listener: a,
      currentTarget: u
    };
  }
  function $o(l, a) {
    for (var u = a + "Capture", c = []; l !== null; ) {
      var r = l, d = r.stateNode;
      if (r = r.tag, r !== 5 && r !== 26 && r !== 27 || d === null || (r = ac(l, u), r != null && c.unshift(
        Yu(l, r, d)
      ), r = ac(l, a), r != null && c.push(
        Yu(l, r, d)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function Hi(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Hr(l, a, u, c, r) {
    for (var d = a._reactName, v = []; u !== null && u !== c; ) {
      var S = u, O = S.alternate, B = S.stateNode;
      if (S = S.tag, O !== null && O === c) break;
      S !== 5 && S !== 26 && S !== 27 || B === null || (O = B, r ? (B = ac(u, d), B != null && v.unshift(
        Yu(u, B, O)
      )) : r || (B = ac(u, d), B != null && v.push(
        Yu(u, B, O)
      ))), u = u.return;
    }
    v.length !== 0 && l.push({ event: a, listeners: v });
  }
  var xn = /\r\n?/g, Hy = /\u0000|\uFFFD/g;
  function K0(l) {
    return (typeof l == "string" ? l : "" + l).replace(xn, `
`).replace(Hy, "");
  }
  function wy(l, a) {
    return a = K0(a), K0(l) === a;
  }
  function Zd() {
  }
  function _e(l, a, u, c, r, d) {
    switch (u) {
      case "children":
        typeof c == "string" ? a === "body" || a === "textarea" && c === "" || co(l, c) : (typeof c == "number" || typeof c == "bigint") && a !== "body" && co(l, "" + c);
        break;
      case "className":
        Mf(l, "class", c);
        break;
      case "tabIndex":
        Mf(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Mf(l, u, c);
        break;
      case "style":
        Hf(l, c, d);
        break;
      case "data":
        if (a !== "object") {
          Mf(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (a !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = wf("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof d == "function" && (u === "formAction" ? (a !== "input" && _e(l, a, "name", r.name, r, null), _e(
            l,
            a,
            "formEncType",
            r.formEncType,
            r,
            null
          ), _e(
            l,
            a,
            "formMethod",
            r.formMethod,
            r,
            null
          ), _e(
            l,
            a,
            "formTarget",
            r.formTarget,
            r,
            null
          )) : (_e(l, a, "encType", r.encType, r, null), _e(l, a, "method", r.method, r, null), _e(l, a, "target", r.target, r, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = wf("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = Zd);
        break;
      case "onScroll":
        c != null && qe("scroll", l);
        break;
      case "onScrollEnd":
        c != null && qe("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(y(61));
          if (u = c.__html, u != null) {
            if (r.children != null) throw Error(y(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
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
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = wf("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
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
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
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
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        qe("beforetoggle", l), qe("toggle", l), bu(l, "popover", c);
        break;
      case "xlinkActuate":
        Da(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        Da(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        Da(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        Da(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        Da(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        Da(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        Da(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        Da(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        Da(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        bu(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = gv.get(u) || u, bu(l, u, c));
    }
  }
  function X(l, a, u, c, r, d) {
    switch (u) {
      case "style":
        Hf(l, c, d);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(y(61));
          if (u = c.__html, u != null) {
            if (r.children != null) throw Error(y(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? co(l, c) : (typeof c == "number" || typeof c == "bigint") && co(l, "" + c);
        break;
      case "onScroll":
        c != null && qe("scroll", l);
        break;
      case "onScrollEnd":
        c != null && qe("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = Zd);
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
        if (!bn.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (r = u.endsWith("Capture"), a = u.slice(2, r ? u.length - 7 : void 0), d = l[Ll] || null, d = d != null ? d[u] : null, typeof d == "function" && l.removeEventListener(a, d, r), typeof c == "function")) {
              typeof d != "function" && d !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(a, c, r);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : bu(l, u, c);
          }
    }
  }
  function Ce(l, a, u) {
    switch (a) {
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
        qe("error", l), qe("load", l);
        var c = !1, r = !1, d;
        for (d in u)
          if (u.hasOwnProperty(d)) {
            var v = u[d];
            if (v != null)
              switch (d) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(y(137, a));
                default:
                  _e(l, a, d, v, u, null);
              }
          }
        r && _e(l, a, "srcSet", u.srcSet, u, null), c && _e(l, a, "src", u.src, u, null);
        return;
      case "input":
        qe("invalid", l);
        var S = d = v = r = null, O = null, B = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var W = u[c];
            if (W != null)
              switch (c) {
                case "name":
                  r = W;
                  break;
                case "type":
                  v = W;
                  break;
                case "checked":
                  O = W;
                  break;
                case "defaultChecked":
                  B = W;
                  break;
                case "value":
                  d = W;
                  break;
                case "defaultValue":
                  S = W;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (W != null)
                    throw Error(y(137, a));
                  break;
                default:
                  _e(l, a, c, W, u, null);
              }
          }
        bs(
          l,
          d,
          S,
          O,
          B,
          v,
          r,
          !1
        ), ai(l);
        return;
      case "select":
        qe("invalid", l), c = v = d = null;
        for (r in u)
          if (u.hasOwnProperty(r) && (S = u[r], S != null))
            switch (r) {
              case "value":
                d = S;
                break;
              case "defaultValue":
                v = S;
                break;
              case "multiple":
                c = S;
              default:
                _e(l, a, r, S, u, null);
            }
        a = d, u = v, l.multiple = !!c, a != null ? tc(l, !!c, a, !1) : u != null && tc(l, !!c, u, !0);
        return;
      case "textarea":
        qe("invalid", l), d = r = c = null;
        for (v in u)
          if (u.hasOwnProperty(v) && (S = u[v], S != null))
            switch (v) {
              case "value":
                c = S;
                break;
              case "defaultValue":
                r = S;
                break;
              case "children":
                d = S;
                break;
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(y(91));
                break;
              default:
                _e(l, a, v, S, u, null);
            }
        Kh(l, c, r, d), ai(l);
        return;
      case "option":
        for (O in u)
          if (u.hasOwnProperty(O) && (c = u[O], c != null))
            switch (O) {
              case "selected":
                l.selected = c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                _e(l, a, O, c, u, null);
            }
        return;
      case "dialog":
        qe("beforetoggle", l), qe("toggle", l), qe("cancel", l), qe("close", l);
        break;
      case "iframe":
      case "object":
        qe("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < Cr.length; c++)
          qe(Cr[c], l);
        break;
      case "image":
        qe("error", l), qe("load", l);
        break;
      case "details":
        qe("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        qe("error", l), qe("load", l);
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
        for (B in u)
          if (u.hasOwnProperty(B) && (c = u[B], c != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(y(137, a));
              default:
                _e(l, a, B, c, u, null);
            }
        return;
      default:
        if (lc(a)) {
          for (W in u)
            u.hasOwnProperty(W) && (c = u[W], c !== void 0 && X(
              l,
              a,
              W,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (S in u)
      u.hasOwnProperty(S) && (c = u[S], c != null && _e(l, a, S, c, u, null));
  }
  function Mv(l, a, u, c) {
    switch (a) {
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
        var r = null, d = null, v = null, S = null, O = null, B = null, W = null;
        for (V in u) {
          var P = u[V];
          if (u.hasOwnProperty(V) && P != null)
            switch (V) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                O = P;
              default:
                c.hasOwnProperty(V) || _e(l, a, V, null, c, P);
            }
        }
        for (var Y in c) {
          var V = c[Y];
          if (P = u[Y], c.hasOwnProperty(Y) && (V != null || P != null))
            switch (Y) {
              case "type":
                d = V;
                break;
              case "name":
                r = V;
                break;
              case "checked":
                B = V;
                break;
              case "defaultChecked":
                W = V;
                break;
              case "value":
                v = V;
                break;
              case "defaultValue":
                S = V;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null)
                  throw Error(y(137, a));
                break;
              default:
                V !== P && _e(
                  l,
                  a,
                  Y,
                  V,
                  c,
                  P
                );
            }
        }
        vs(
          l,
          v,
          S,
          O,
          B,
          W,
          d,
          r
        );
        return;
      case "select":
        V = v = S = Y = null;
        for (d in u)
          if (O = u[d], u.hasOwnProperty(d) && O != null)
            switch (d) {
              case "value":
                break;
              case "multiple":
                V = O;
              default:
                c.hasOwnProperty(d) || _e(
                  l,
                  a,
                  d,
                  null,
                  c,
                  O
                );
            }
        for (r in c)
          if (d = c[r], O = u[r], c.hasOwnProperty(r) && (d != null || O != null))
            switch (r) {
              case "value":
                Y = d;
                break;
              case "defaultValue":
                S = d;
                break;
              case "multiple":
                v = d;
              default:
                d !== O && _e(
                  l,
                  a,
                  r,
                  d,
                  c,
                  O
                );
            }
        a = S, u = v, c = V, Y != null ? tc(l, !!u, Y, !1) : !!c != !!u && (a != null ? tc(l, !!u, a, !0) : tc(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        V = Y = null;
        for (S in u)
          if (r = u[S], u.hasOwnProperty(S) && r != null && !c.hasOwnProperty(S))
            switch (S) {
              case "value":
                break;
              case "children":
                break;
              default:
                _e(l, a, S, null, c, r);
            }
        for (v in c)
          if (r = c[v], d = u[v], c.hasOwnProperty(v) && (r != null || d != null))
            switch (v) {
              case "value":
                Y = r;
                break;
              case "defaultValue":
                V = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(y(91));
                break;
              default:
                r !== d && _e(l, a, v, r, c, d);
            }
        Jh(l, Y, V);
        return;
      case "option":
        for (var De in u)
          if (Y = u[De], u.hasOwnProperty(De) && Y != null && !c.hasOwnProperty(De))
            switch (De) {
              case "selected":
                l.selected = !1;
                break;
              default:
                _e(
                  l,
                  a,
                  De,
                  null,
                  c,
                  Y
                );
            }
        for (O in c)
          if (Y = c[O], V = u[O], c.hasOwnProperty(O) && Y !== V && (Y != null || V != null))
            switch (O) {
              case "selected":
                l.selected = Y && typeof Y != "function" && typeof Y != "symbol";
                break;
              default:
                _e(
                  l,
                  a,
                  O,
                  Y,
                  c,
                  V
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
        for (var xe in u)
          Y = u[xe], u.hasOwnProperty(xe) && Y != null && !c.hasOwnProperty(xe) && _e(l, a, xe, null, c, Y);
        for (B in c)
          if (Y = c[B], V = u[B], c.hasOwnProperty(B) && Y !== V && (Y != null || V != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Y != null)
                  throw Error(y(137, a));
                break;
              default:
                _e(
                  l,
                  a,
                  B,
                  Y,
                  c,
                  V
                );
            }
        return;
      default:
        if (lc(a)) {
          for (var it in u)
            Y = u[it], u.hasOwnProperty(it) && Y !== void 0 && !c.hasOwnProperty(it) && X(
              l,
              a,
              it,
              void 0,
              c,
              Y
            );
          for (W in c)
            Y = c[W], V = u[W], !c.hasOwnProperty(W) || Y === V || Y === void 0 && V === void 0 || X(
              l,
              a,
              W,
              Y,
              c,
              V
            );
          return;
        }
    }
    for (var H in u)
      Y = u[H], u.hasOwnProperty(H) && Y != null && !c.hasOwnProperty(H) && _e(l, a, H, null, c, Y);
    for (P in c)
      Y = c[P], V = u[P], !c.hasOwnProperty(P) || Y === V || Y == null && V == null || _e(l, a, P, Y, c, V);
  }
  var wr = null, _r = null;
  function $n(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function ju(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Wo(l, a) {
    if (l === 0)
      switch (a) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && a === "foreignObject" ? 0 : l;
  }
  function eu(l, a) {
    return l === "textarea" || l === "noscript" || typeof a.children == "string" || typeof a.children == "number" || typeof a.children == "bigint" || typeof a.dangerouslySetInnerHTML == "object" && a.dangerouslySetInnerHTML !== null && a.dangerouslySetInnerHTML.__html != null;
  }
  var Fo = null;
  function Lu() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Fo ? !1 : (Fo = l, !0) : (Fo = null, !1);
  }
  var kd = typeof setTimeout == "function" ? setTimeout : void 0, Uv = typeof clearTimeout == "function" ? clearTimeout : void 0, $0 = typeof Promise == "function" ? Promise : void 0, Cv = typeof queueMicrotask == "function" ? queueMicrotask : typeof $0 < "u" ? function(l) {
    return $0.resolve(null).then(l).catch(tu);
  } : kd;
  function tu(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function wi(l) {
    return l === "head";
  }
  function Jd(l, a) {
    var u = a, c = 0, r = 0;
    do {
      var d = u.nextSibling;
      if (l.removeChild(u), d && d.nodeType === 8)
        if (u = d.data, u === "/$") {
          if (0 < c && 8 > c) {
            u = c;
            var v = l.ownerDocument;
            if (u & 1 && sn(v.documentElement), u & 2 && sn(v.body), u & 4)
              for (u = v.head, sn(u), v = u.firstChild; v; ) {
                var S = v.nextSibling, O = v.nodeName;
                v[pe] || O === "SCRIPT" || O === "STYLE" || O === "LINK" && v.rel.toLowerCase() === "stylesheet" || u.removeChild(v), v = S;
              }
          }
          if (r === 0) {
            l.removeChild(d), nu(a);
            return;
          }
          r--;
        } else
          u === "$" || u === "$?" || u === "$!" ? r++ : c = u.charCodeAt(0) - 48;
      else c = 0;
      u = d;
    } while (u);
    nu(a);
  }
  function Nr(l) {
    var a = l.firstChild;
    for (a && a.nodeType === 10 && (a = a.nextSibling); a; ) {
      var u = a;
      switch (a = a.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Nr(u), Df(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Po(l, a, u, c) {
    for (; l.nodeType === 1; ) {
      var r = u;
      if (l.nodeName.toLowerCase() !== a.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[pe])
          switch (a) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (d = l.getAttribute("rel"), d === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (d !== r.rel || l.getAttribute("href") !== (r.href == null || r.href === "" ? null : r.href) || l.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) || l.getAttribute("title") !== (r.title == null ? null : r.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (d = l.getAttribute("src"), (d !== (r.src == null ? null : r.src) || l.getAttribute("type") !== (r.type == null ? null : r.type) || l.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin)) && d && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (a === "input" && l.type === "hidden") {
        var d = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && l.getAttribute("name") === d)
          return l;
      } else return l;
      if (l = va(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Hv(l, a, u) {
    if (a === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = va(l.nextSibling), l === null)) return null;
    return l;
  }
  function Br(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function wv(l, a) {
    var u = l.ownerDocument;
    if (l.data !== "$?" || u.readyState === "complete")
      a();
    else {
      var c = function() {
        a(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function va(l) {
    for (; l != null; l = l.nextSibling) {
      var a = l.nodeType;
      if (a === 1 || a === 3) break;
      if (a === 8) {
        if (a = l.data, a === "$" || a === "$!" || a === "$?" || a === "F!" || a === "F")
          break;
        if (a === "/$") return null;
      }
    }
    return l;
  }
  var _i = null;
  function Rl(l) {
    l = l.previousSibling;
    for (var a = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (a === 0) return l;
          a--;
        } else u === "/$" && a++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function se(l, a, u) {
    switch (a = $n(u), l) {
      case "html":
        if (l = a.documentElement, !l) throw Error(y(452));
        return l;
      case "head":
        if (l = a.head, !l) throw Error(y(453));
        return l;
      case "body":
        if (l = a.body, !l) throw Error(y(454));
        return l;
      default:
        throw Error(y(451));
    }
  }
  function sn(l) {
    for (var a = l.attributes; a.length; )
      l.removeAttributeNode(a[0]);
    Df(l);
  }
  var Xt = /* @__PURE__ */ new Map(), Nl = /* @__PURE__ */ new Set();
  function Kd(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Vu = te.d;
  te.d = {
    f: $d,
    r: Wd,
    D: Gu,
    C: Fd,
    L: Ni,
    m: Bl,
    X: Bi,
    S: dn,
    M: _y
  };
  function $d() {
    var l = Vu.f(), a = Nc();
    return l || a;
  }
  function Wd(l) {
    var a = Fi(l);
    a !== null && a.tag === 5 && a.type === "form" ? Uo(a) : Vu.r(l);
  }
  var Ol = typeof document > "u" ? null : document;
  function ba(l, a, u) {
    var c = Ol;
    if (c && typeof a == "string" && a) {
      var r = Nn(a);
      r = 'link[rel="' + l + '"][href="' + r + '"]', typeof u == "string" && (r += '[crossorigin="' + u + '"]'), Nl.has(r) || (Nl.add(r), l = { rel: l, crossOrigin: u, href: a }, c.querySelector(r) === null && (a = c.createElement("link"), Ce(a, "link", l), Pt(a), c.head.appendChild(a)));
    }
  }
  function Gu(l) {
    Vu.D(l), ba("dns-prefetch", l, null);
  }
  function Fd(l, a) {
    Vu.C(l, a), ba("preconnect", l, a);
  }
  function Ni(l, a, u) {
    Vu.L(l, a, u);
    var c = Ol;
    if (c && l && a) {
      var r = 'link[rel="preload"][as="' + Nn(a) + '"]';
      a === "image" && u && u.imageSrcSet ? (r += '[imagesrcset="' + Nn(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (r += '[imagesizes="' + Nn(
        u.imageSizes
      ) + '"]')) : r += '[href="' + Nn(l) + '"]';
      var d = r;
      switch (a) {
        case "style":
          d = Io(l);
          break;
        case "script":
          d = Wn(l);
      }
      Xt.has(d) || (l = _(
        {
          rel: "preload",
          href: a === "image" && u && u.imageSrcSet ? void 0 : l,
          as: a
        },
        u
      ), Xt.set(d, l), c.querySelector(r) !== null || a === "style" && c.querySelector(ef(d)) || a === "script" && c.querySelector(Lc(d)) || (a = c.createElement("link"), Ce(a, "link", l), Pt(a), c.head.appendChild(a)));
    }
  }
  function Bl(l, a) {
    Vu.m(l, a);
    var u = Ol;
    if (u && l) {
      var c = a && typeof a.as == "string" ? a.as : "script", r = 'link[rel="modulepreload"][as="' + Nn(c) + '"][href="' + Nn(l) + '"]', d = r;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = Wn(l);
      }
      if (!Xt.has(d) && (l = _({ rel: "modulepreload", href: l }, a), Xt.set(d, l), u.querySelector(r) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Lc(d)))
              return;
        }
        c = u.createElement("link"), Ce(c, "link", l), Pt(c), u.head.appendChild(c);
      }
    }
  }
  function dn(l, a, u) {
    Vu.S(l, a, u);
    var c = Ol;
    if (c && l) {
      var r = vu(c).hoistableStyles, d = Io(l);
      a = a || "default";
      var v = r.get(d);
      if (!v) {
        var S = { loading: 0, preload: null };
        if (v = c.querySelector(
          ef(d)
        ))
          S.loading = 5;
        else {
          l = _(
            { rel: "stylesheet", href: l, "data-precedence": a },
            u
          ), (u = Xt.get(d)) && Id(l, u);
          var O = v = c.createElement("link");
          Pt(O), Ce(O, "link", l), O._p = new Promise(function(B, W) {
            O.onload = B, O.onerror = W;
          }), O.addEventListener("load", function() {
            S.loading |= 1;
          }), O.addEventListener("error", function() {
            S.loading |= 2;
          }), S.loading |= 4, Pd(v, a, c);
        }
        v = {
          type: "stylesheet",
          instance: v,
          count: 1,
          state: S
        }, r.set(d, v);
      }
    }
  }
  function Bi(l, a) {
    Vu.X(l, a);
    var u = Ol;
    if (u && l) {
      var c = vu(u).hoistableScripts, r = Wn(l), d = c.get(r);
      d || (d = u.querySelector(Lc(r)), d || (l = _({ src: l, async: !0 }, a), (a = Xt.get(r)) && eh(l, a), d = u.createElement("script"), Pt(d), Ce(d, "link", l), u.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, c.set(r, d));
    }
  }
  function _y(l, a) {
    Vu.M(l, a);
    var u = Ol;
    if (u && l) {
      var c = vu(u).hoistableScripts, r = Wn(l), d = c.get(r);
      d || (d = u.querySelector(Lc(r)), d || (l = _({ src: l, async: !0, type: "module" }, a), (a = Xt.get(r)) && eh(l, a), d = u.createElement("script"), Pt(d), Ce(d, "link", l), u.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, c.set(r, d));
    }
  }
  function W0(l, a, u, c) {
    var r = (r = $e.current) ? Kd(r) : null;
    if (!r) throw Error(y(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (a = Io(u.href), u = vu(
          r
        ).hoistableStyles, c = u.get(a), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(a, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Io(u.href);
          var d = vu(
            r
          ).hoistableStyles, v = d.get(l);
          if (v || (r = r.ownerDocument || r, v = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, d.set(l, v), (d = r.querySelector(
            ef(l)
          )) && !d._p && (v.instance = d, v.state.loading = 5), Xt.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Xt.set(l, u), d || F0(
            r,
            l,
            u,
            v.state
          ))), a && c === null)
            throw Error(y(528, ""));
          return v;
        }
        if (a && c !== null)
          throw Error(y(529, ""));
        return null;
      case "script":
        return a = u.async, u = u.src, typeof u == "string" && a && typeof a != "function" && typeof a != "symbol" ? (a = Wn(u), u = vu(
          r
        ).hoistableScripts, c = u.get(a), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(a, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(y(444, l));
    }
  }
  function Io(l) {
    return 'href="' + Nn(l) + '"';
  }
  function ef(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function tf(l) {
    return _({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function F0(l, a, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + a + "]") ? c.loading = 1 : (a = l.createElement("link"), c.preload = a, a.addEventListener("load", function() {
      return c.loading |= 1;
    }), a.addEventListener("error", function() {
      return c.loading |= 2;
    }), Ce(a, "link", u), Pt(a), l.head.appendChild(a));
  }
  function Wn(l) {
    return '[src="' + Nn(l) + '"]';
  }
  function Lc(l) {
    return "script[async]" + l;
  }
  function P0(l, a, u) {
    if (a.count++, a.instance === null)
      switch (a.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + Nn(u.href) + '"]'
          );
          if (c)
            return a.instance = c, Pt(c), c;
          var r = _({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Pt(c), Ce(c, "style", r), Pd(c, u.precedence, l), a.instance = c;
        case "stylesheet":
          r = Io(u.href);
          var d = l.querySelector(
            ef(r)
          );
          if (d)
            return a.state.loading |= 4, a.instance = d, Pt(d), d;
          c = tf(u), (r = Xt.get(r)) && Id(c, r), d = (l.ownerDocument || l).createElement("link"), Pt(d);
          var v = d;
          return v._p = new Promise(function(S, O) {
            v.onload = S, v.onerror = O;
          }), Ce(d, "link", c), a.state.loading |= 4, Pd(d, u.precedence, l), a.instance = d;
        case "script":
          return d = Wn(u.src), (r = l.querySelector(
            Lc(d)
          )) ? (a.instance = r, Pt(r), r) : (c = u, (r = Xt.get(d)) && (c = _({}, u), eh(c, r)), l = l.ownerDocument || l, r = l.createElement("script"), Pt(r), Ce(r, "link", c), l.head.appendChild(r), a.instance = r);
        case "void":
          return null;
        default:
          throw Error(y(443, a.type));
      }
    else
      a.type === "stylesheet" && (a.state.loading & 4) === 0 && (c = a.instance, a.state.loading |= 4, Pd(c, u.precedence, l));
    return a.instance;
  }
  function Pd(l, a, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), r = c.length ? c[c.length - 1] : null, d = r, v = 0; v < c.length; v++) {
      var S = c[v];
      if (S.dataset.precedence === a) d = S;
      else if (d !== r) break;
    }
    d ? d.parentNode.insertBefore(l, d.nextSibling) : (a = u.nodeType === 9 ? u.head : u, a.insertBefore(l, a.firstChild));
  }
  function Id(l, a) {
    l.crossOrigin == null && (l.crossOrigin = a.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = a.referrerPolicy), l.title == null && (l.title = a.title);
  }
  function eh(l, a) {
    l.crossOrigin == null && (l.crossOrigin = a.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = a.referrerPolicy), l.integrity == null && (l.integrity = a.integrity);
  }
  var qi = null;
  function Ny(l, a, u) {
    if (qi === null) {
      var c = /* @__PURE__ */ new Map(), r = qi = /* @__PURE__ */ new Map();
      r.set(u, c);
    } else
      r = qi, c = r.get(u), c || (c = /* @__PURE__ */ new Map(), r.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), r = 0; r < u.length; r++) {
      var d = u[r];
      if (!(d[pe] || d[cl] || l === "link" && d.getAttribute("rel") === "stylesheet") && d.namespaceURI !== "http://www.w3.org/2000/svg") {
        var v = d.getAttribute(a) || "";
        v = l + v;
        var S = c.get(v);
        S ? S.push(d) : c.set(v, [d]);
      }
    }
    return c;
  }
  function By(l, a, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      a === "title" ? l.querySelector("head > title") : null
    );
  }
  function I0(l, a, u) {
    if (u === 1 || a.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof a.precedence != "string" || typeof a.href != "string" || a.href === "")
          break;
        return !0;
      case "link":
        if (typeof a.rel != "string" || typeof a.href != "string" || a.href === "" || a.onLoad || a.onError)
          break;
        switch (a.rel) {
          case "stylesheet":
            return l = a.disabled, typeof a.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (a.async && typeof a.async != "function" && typeof a.async != "symbol" && !a.onLoad && !a.onError && a.src && typeof a.src == "string")
          return !0;
    }
    return !1;
  }
  function qy(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var lf = null;
  function eg() {
  }
  function tg(l, a, u) {
    if (lf === null) throw Error(y(475));
    var c = lf;
    if (a.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var r = Io(u.href), d = l.querySelector(
          ef(r)
        );
        if (d) {
          l = d._p, l !== null && typeof l == "object" && typeof l.then == "function" && (c.count++, c = qr.bind(c), l.then(c, c)), a.state.loading |= 4, a.instance = d, Pt(d);
          return;
        }
        d = l.ownerDocument || l, u = tf(u), (r = Xt.get(r)) && Id(u, r), d = d.createElement("link"), Pt(d);
        var v = d;
        v._p = new Promise(function(S, O) {
          v.onload = S, v.onerror = O;
        }), Ce(d, "link", u), a.instance = d;
      }
      c.stylesheets === null && (c.stylesheets = /* @__PURE__ */ new Map()), c.stylesheets.set(a, l), (l = a.state.preload) && (a.state.loading & 3) === 0 && (c.count++, a = qr.bind(c), l.addEventListener("load", a), l.addEventListener("error", a));
    }
  }
  function Yy() {
    if (lf === null) throw Error(y(475));
    var l = lf;
    return l.stylesheets && l.count === 0 && Yr(l, l.stylesheets), 0 < l.count ? function(a) {
      var u = setTimeout(function() {
        if (l.stylesheets && Yr(l, l.stylesheets), l.unsuspend) {
          var c = l.unsuspend;
          l.unsuspend = null, c();
        }
      }, 6e4);
      return l.unsuspend = a, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function qr() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Yr(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var nf = null;
  function Yr(l, a) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, nf = /* @__PURE__ */ new Map(), a.forEach(zn, l), nf = null, qr.call(l));
  }
  function zn(l, a) {
    if (!(a.state.loading & 4)) {
      var u = nf.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), nf.set(l, u);
        for (var r = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), d = 0; d < r.length; d++) {
          var v = r[d];
          (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") && (u.set(v.dataset.precedence, v), c = v);
        }
        c && u.set(null, c);
      }
      r = a.instance, v = r.getAttribute("data-precedence"), d = u.get(v) || c, d === c && u.set(null, r), u.set(v, r), this.count++, c = qr.bind(this), r.addEventListener("load", c), r.addEventListener("error", c), d ? d.parentNode.insertBefore(r, d.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(r, l.firstChild)), a.state.loading |= 4;
    }
  }
  var hn = {
    $$typeof: re,
    Provider: null,
    Consumer: null,
    _currentValue: ue,
    _currentValue2: ue,
    _threadCount: 0
  };
  function _v(l, a, u, c, r, d, v, S) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ei(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ei(0), this.hiddenUpdates = ei(null), this.identifierPrefix = c, this.onUncaughtError = r, this.onCaughtError = d, this.onRecoverableError = v, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function jy(l, a, u, c, r, d, v, S, O, B, W, P) {
    return l = new _v(
      l,
      a,
      u,
      v,
      S,
      O,
      B,
      P
    ), a = 1, d === !0 && (a |= 24), d = tn(3, null, null, a), l.current = d, d.stateNode = l, a = Oo(), a.refCount++, l.pooledCache = a, a.refCount++, d.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: a
    }, Zs(d), l;
  }
  function Ly(l) {
    return l ? (l = go, l) : go;
  }
  function Vy(l, a, u, c, r, d) {
    r = Ly(r), c.context === null ? c.context = r : c.pendingContext = r, c = nn(a), c.payload = { element: u }, d = d === void 0 ? null : d, d !== null && (c.callback = d), u = ja(l, c, a), u !== null && (Dn(u, l, a), bc(u, l, a));
  }
  function Gy(l, a) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < a ? u : a;
    }
  }
  function th(l, a) {
    Gy(l, a), (l = l.alternate) && Gy(l, a);
  }
  function Xy(l) {
    if (l.tag === 13) {
      var a = wa(l, 67108864);
      a !== null && Dn(a, l, 67108864), th(l, 67108864);
    }
  }
  var jr = !0;
  function lg(l, a, u, c) {
    var r = C.T;
    C.T = null;
    var d = te.p;
    try {
      te.p = 2, Qy(l, a, u, c);
    } finally {
      te.p = d, C.T = r;
    }
  }
  function ng(l, a, u, c) {
    var r = C.T;
    C.T = null;
    var d = te.p;
    try {
      te.p = 8, Qy(l, a, u, c);
    } finally {
      te.p = d, C.T = r;
    }
  }
  function Qy(l, a, u, c) {
    if (jr) {
      var r = lh(c);
      if (r === null)
        Kn(
          l,
          a,
          c,
          nh,
          u
        ), Vc(l, c);
      else if (ug(
        r,
        l,
        a,
        u,
        c
      ))
        c.stopPropagation();
      else if (Vc(l, c), a & 4 && -1 < ag.indexOf(l)) {
        for (; r !== null; ) {
          var d = Fi(r);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (d = d.stateNode, d.current.memoizedState.isDehydrated) {
                  var v = vn(d.pendingLanes);
                  if (v !== 0) {
                    var S = d;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; v; ) {
                      var O = 1 << 31 - Pl(v);
                      S.entanglements[1] |= O, v &= ~O;
                    }
                    rn(d), (ft & 6) === 0 && (wd = gn() + 500, Dr(0));
                  }
                }
                break;
              case 13:
                S = wa(d, 2), S !== null && Dn(S, d, 2), Nc(), th(d, 2);
            }
          if (d = lh(c), d === null && Kn(
            l,
            a,
            c,
            nh,
            u
          ), d === r) break;
          r = d;
        }
        r !== null && c.stopPropagation();
      } else
        Kn(
          l,
          a,
          c,
          null,
          u
        );
    }
  }
  function lh(l) {
    return l = Ts(l), Zy(l);
  }
  var nh = null;
  function Zy(l) {
    if (nh = null, l = gl(l), l !== null) {
      var a = E(l);
      if (a === null) l = null;
      else {
        var u = a.tag;
        if (u === 13) {
          if (l = R(a), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (a.stateNode.current.memoizedState.isDehydrated)
            return a.tag === 3 ? a.stateNode.containerInfo : null;
          l = null;
        } else a !== l && (l = null);
      }
    }
    return nh = l, null;
  }
  function ky(l) {
    switch (l) {
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
        switch (Ef()) {
          case Jp:
            return 2;
          case Lh:
            return 8;
          case Af:
          case Vh:
            return 32;
          case lo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var af = !1, lu = null, Xu = null, Qu = null, Lr = /* @__PURE__ */ new Map(), Vr = /* @__PURE__ */ new Map(), Yi = [], ag = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Vc(l, a) {
    switch (l) {
      case "focusin":
      case "focusout":
        lu = null;
        break;
      case "dragenter":
      case "dragleave":
        Xu = null;
        break;
      case "mouseover":
      case "mouseout":
        Qu = null;
        break;
      case "pointerover":
      case "pointerout":
        Lr.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Vr.delete(a.pointerId);
    }
  }
  function Gc(l, a, u, c, r, d) {
    return l === null || l.nativeEvent !== d ? (l = {
      blockedOn: a,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: d,
      targetContainers: [r]
    }, a !== null && (a = Fi(a), a !== null && Xy(a)), l) : (l.eventSystemFlags |= c, a = l.targetContainers, r !== null && a.indexOf(r) === -1 && a.push(r), l);
  }
  function ug(l, a, u, c, r) {
    switch (a) {
      case "focusin":
        return lu = Gc(
          lu,
          l,
          a,
          u,
          c,
          r
        ), !0;
      case "dragenter":
        return Xu = Gc(
          Xu,
          l,
          a,
          u,
          c,
          r
        ), !0;
      case "mouseover":
        return Qu = Gc(
          Qu,
          l,
          a,
          u,
          c,
          r
        ), !0;
      case "pointerover":
        var d = r.pointerId;
        return Lr.set(
          d,
          Gc(
            Lr.get(d) || null,
            l,
            a,
            u,
            c,
            r
          )
        ), !0;
      case "gotpointercapture":
        return d = r.pointerId, Vr.set(
          d,
          Gc(
            Vr.get(d) || null,
            l,
            a,
            u,
            c,
            r
          )
        ), !0;
    }
    return !1;
  }
  function Jy(l) {
    var a = gl(l.target);
    if (a !== null) {
      var u = E(a);
      if (u !== null) {
        if (a = u.tag, a === 13) {
          if (a = R(u), a !== null) {
            l.blockedOn = a, yv(l.priority, function() {
              if (u.tag === 13) {
                var c = On();
                c = aa(c);
                var r = wa(u, c);
                r !== null && Dn(r, u, c), th(u, c);
              }
            });
            return;
          }
        } else if (a === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Gr(l) {
    if (l.blockedOn !== null) return !1;
    for (var a = l.targetContainers; 0 < a.length; ) {
      var u = lh(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        nc = c, u.target.dispatchEvent(c), nc = null;
      } else
        return a = Fi(u), a !== null && Xy(a), l.blockedOn = u, !1;
      a.shift();
    }
    return !0;
  }
  function Xr(l, a, u) {
    Gr(l) && u.delete(a);
  }
  function uf() {
    af = !1, lu !== null && Gr(lu) && (lu = null), Xu !== null && Gr(Xu) && (Xu = null), Qu !== null && Gr(Qu) && (Qu = null), Lr.forEach(Xr), Vr.forEach(Xr);
  }
  function ah(l, a) {
    l.blockedOn === a && (l.blockedOn = null, af || (af = !0, s.unstable_scheduleCallback(
      s.unstable_NormalPriority,
      uf
    )));
  }
  var Xc = null;
  function Ky(l) {
    Xc !== l && (Xc = l, s.unstable_scheduleCallback(
      s.unstable_NormalPriority,
      function() {
        Xc === l && (Xc = null);
        for (var a = 0; a < l.length; a += 3) {
          var u = l[a], c = l[a + 1], r = l[a + 2];
          if (typeof c != "function") {
            if (Zy(c || u) === null)
              continue;
            break;
          }
          var d = Fi(u);
          d !== null && (l.splice(a, 3), a -= 3, sd(
            d,
            {
              pending: !0,
              data: r,
              method: u.method,
              action: c
            },
            c,
            r
          ));
        }
      }
    ));
  }
  function nu(l) {
    function a(O) {
      return ah(O, l);
    }
    lu !== null && ah(lu, l), Xu !== null && ah(Xu, l), Qu !== null && ah(Qu, l), Lr.forEach(a), Vr.forEach(a);
    for (var u = 0; u < Yi.length; u++) {
      var c = Yi[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < Yi.length && (u = Yi[0], u.blockedOn === null); )
      Jy(u), u.blockedOn === null && Yi.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var r = u[c], d = u[c + 1], v = r[Ll] || null;
        if (typeof d == "function")
          v || Ky(u);
        else if (v) {
          var S = null;
          if (d && d.hasAttribute("formAction")) {
            if (r = d, v = d[Ll] || null)
              S = v.formAction;
            else if (Zy(r) !== null) continue;
          } else S = v.action;
          typeof S == "function" ? u[c + 1] = S : (u.splice(c, 3), c -= 3), Ky(u);
        }
      }
  }
  function $y(l) {
    this._internalRoot = l;
  }
  uh.prototype.render = $y.prototype.render = function(l) {
    var a = this._internalRoot;
    if (a === null) throw Error(y(409));
    var u = a.current, c = On();
    Vy(u, c, l, a, null, null);
  }, uh.prototype.unmount = $y.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var a = l.containerInfo;
      Vy(l.current, 2, null, l, null, null), Nc(), a[uo] = null;
    }
  };
  function uh(l) {
    this._internalRoot = l;
  }
  uh.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var a = Fp();
      l = { blockedOn: null, target: l, priority: a };
      for (var u = 0; u < Yi.length && a !== 0 && a < Yi[u].priority; u++) ;
      Yi.splice(u, 0, l), u === 0 && Jy(l);
    }
  };
  var Wy = h.version;
  if (Wy !== "19.1.1")
    throw Error(
      y(
        527,
        Wy,
        "19.1.1"
      )
    );
  te.findDOMNode = function(l) {
    var a = l._reactInternals;
    if (a === void 0)
      throw typeof l.render == "function" ? Error(y(188)) : (l = Object.keys(l).join(","), Error(y(268, l)));
    return l = U(a), l = l !== null ? j(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var kl = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: C,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qr.isDisabled && Qr.supportsFiber)
      try {
        no = Qr.inject(
          kl
        ), jl = Qr;
      } catch {
      }
  }
  return _p.createRoot = function(l, a) {
    if (!b(l)) throw Error(y(299));
    var u = !1, c = "", r = wo, d = Jm, v = yr, S = null;
    return a != null && (a.unstable_strictMode === !0 && (u = !0), a.identifierPrefix !== void 0 && (c = a.identifierPrefix), a.onUncaughtError !== void 0 && (r = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (v = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (S = a.unstable_transitionCallbacks)), a = jy(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      r,
      d,
      v,
      S,
      null
    ), l[uo] = a.current, Cy(l), new $y(a);
  }, _p.hydrateRoot = function(l, a, u) {
    if (!b(l)) throw Error(y(299));
    var c = !1, r = "", d = wo, v = Jm, S = yr, O = null, B = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (r = u.identifierPrefix), u.onUncaughtError !== void 0 && (d = u.onUncaughtError), u.onCaughtError !== void 0 && (v = u.onCaughtError), u.onRecoverableError !== void 0 && (S = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (O = u.unstable_transitionCallbacks), u.formState !== void 0 && (B = u.formState)), a = jy(
      l,
      1,
      !0,
      a,
      u ?? null,
      c,
      r,
      d,
      v,
      S,
      O,
      B
    ), a.context = Ly(null), u = a.current, c = On(), c = aa(c), r = nn(c), r.callback = null, ja(u, r, c), u = c, a.current.lanes = u, Wi(a, u), rn(a), l[uo] = a.current, Cy(l), new uh(a);
  }, _p.version = "19.1.1", _p;
}
var Np = {};
/**
 * @license React
 * react-dom-client.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xT;
function NA() {
  return xT || (xT = 1, process.env.NODE_ENV !== "production" && function() {
    function s(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function h(e, t, n, i) {
      if (n >= t.length) return i;
      var o = t[n], f = _e(e) ? e.slice() : Ge({}, e);
      return f[o] = h(e[o], t, n + 1, i), f;
    }
    function p(e, t, n) {
      if (t.length !== n.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < n.length - 1; i++)
          if (t[i] !== n[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return y(e, t, n, 0);
      }
    }
    function y(e, t, n, i) {
      var o = t[i], f = _e(e) ? e.slice() : Ge({}, e);
      return i + 1 === t.length ? (f[n[i]] = f[o], _e(f) ? f.splice(o, 1) : delete f[o]) : f[o] = y(
        e[o],
        t,
        n,
        i + 1
      ), f;
    }
    function b(e, t, n) {
      var i = t[n], o = _e(e) ? e.slice() : Ge({}, e);
      return n + 1 === t.length ? (_e(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = b(e[i], t, n + 1), o);
    }
    function E() {
      return !1;
    }
    function R() {
      return null;
    }
    function w() {
    }
    function U() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function j() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function _() {
    }
    function $(e) {
      var t = [];
      return e.forEach(function(n) {
        t.push(n);
      }), t.sort().join(", ");
    }
    function ie(e, t, n, i) {
      return new jf(e, t, n, i);
    }
    function me(e, t) {
      e.context === cf && (ht(e.current, 2, t, e, null, null), Mc());
    }
    function ee(e, t) {
      if (uu !== null) {
        var n = t.staleFamilies;
        t = t.updatedFamilies, _o(), Yf(
          e.current,
          t,
          n
        ), Mc();
      }
    }
    function ne(e) {
      uu = e;
    }
    function I(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function ce(e) {
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
    function be(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function re(e) {
      if (ce(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function Ae(e) {
      var t = e.alternate;
      if (!t) {
        if (t = ce(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var n = e, i = t; ; ) {
        var o = n.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            n = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === n) return re(o), e;
            if (f === i) return re(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (n.return !== i.return) n = o, i = f;
        else {
          for (var m = !1, g = o.child; g; ) {
            if (g === n) {
              m = !0, n = o, i = f;
              break;
            }
            if (g === i) {
              m = !0, i = o, n = f;
              break;
            }
            g = g.sibling;
          }
          if (!m) {
            for (g = f.child; g; ) {
              if (g === n) {
                m = !0, n = f, i = o;
                break;
              }
              if (g === i) {
                m = !0, i = f, n = o;
                break;
              }
              g = g.sibling;
            }
            if (!m)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (n.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (n.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return n.stateNode.current === n ? e : t;
    }
    function le(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = le(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function Te(e) {
      return e === null || typeof e != "object" ? null : (e = wy && e[wy] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function de(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Zd ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case qe:
          return "Fragment";
        case Ko:
          return "Profiler";
        case Jo:
          return "StrictMode";
        case $o:
          return "Suspense";
        case Hi:
          return "SuspenseList";
        case Hy:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case jc:
            return "Portal";
          case Kn:
            return (e.displayName || "Context") + ".Provider";
          case Qd:
            return (e._context.displayName || "Context") + ".Consumer";
          case Yu:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Hr:
            return t = e.displayName || null, t !== null ? t : de(e.type) || "Memo";
          case xn:
            t = e._payload, e = e._init;
            try {
              return de(e(t));
            } catch {
            }
        }
      return null;
    }
    function st(e) {
      return typeof e.tag == "number" ? Se(e) : typeof e.name == "string" ? e.name : null;
    }
    function Se(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return (t.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return de(t);
        case 8:
          return t === Jo ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var n = t.length - 1; 0 <= n; n--)
              if (typeof t[n].name == "string") return t[n].name;
          }
          if (e.return !== null)
            return Se(e.return);
      }
      return null;
    }
    function dt(e) {
      return { current: e };
    }
    function Je(e, t) {
      0 > $n ? console.error("Unexpected pop.") : (t !== _r[$n] && console.error("Unexpected Fiber popped."), e.current = wr[$n], wr[$n] = null, _r[$n] = null, $n--);
    }
    function we(e, t, n) {
      $n++, wr[$n] = e.current, _r[$n] = n, e.current = t;
    }
    function kt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function pl(e, t) {
      we(eu, t, e), we(Wo, e, e), we(ju, null, e);
      var n = t.nodeType;
      switch (n) {
        case 9:
        case 11:
          n = n === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? rt(t) : Ic;
          break;
        default:
          if (n = t.tagName, t = t.namespaceURI)
            t = rt(t), t = on(
              t,
              n
            );
          else
            switch (n) {
              case "svg":
                t = wh;
                break;
              case "math":
                t = Ng;
                break;
              default:
                t = Ic;
            }
      }
      n = n.toLowerCase(), n = Jh(null, n), n = {
        context: t,
        ancestorInfo: n
      }, Je(ju, e), we(ju, n, e);
    }
    function Qt(e) {
      Je(ju, e), Je(Wo, e), Je(eu, e);
    }
    function C() {
      return kt(ju.current);
    }
    function te(e) {
      e.memoizedState !== null && we(Fo, e, e);
      var t = kt(ju.current), n = e.type, i = on(t.context, n);
      n = Jh(t.ancestorInfo, n), i = { context: i, ancestorInfo: n }, t !== i && (we(Wo, e, e), we(ju, i, e));
    }
    function ue(e) {
      Wo.current === e && (Je(ju, e), Je(Wo, e)), Fo.current === e && (Je(Fo, e), zp._currentValue = os);
    }
    function Oe(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function G(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function fe(e, t) {
      if (G(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Oe(e)
        ), ye(e);
    }
    function ze(e, t) {
      if (G(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Oe(e)
        ), ye(e);
    }
    function Ve(e) {
      if (G(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          Oe(e)
        ), ye(e);
    }
    function gt(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        _i = t.inject(e), Rl = t;
      } catch (n) {
        console.error("React instrumentation encountered an error: %s.", n);
      }
      return !!t.checkDCE;
    }
    function $e(e) {
      if (typeof wv == "function" && va(e), Rl && typeof Rl.setStrictMode == "function")
        try {
          Rl.setStrictMode(_i, e);
        } catch (t) {
          sn || (sn = !0, console.error(
            "React instrumentation encountered an error: %s",
            t
          ));
        }
    }
    function Ra(e) {
      se = e;
    }
    function zt() {
      se !== null && typeof se.markCommitStopped == "function" && se.markCommitStopped();
    }
    function Wt(e) {
      se !== null && typeof se.markComponentRenderStarted == "function" && se.markComponentRenderStarted(e);
    }
    function Fl() {
      se !== null && typeof se.markComponentRenderStopped == "function" && se.markComponentRenderStopped();
    }
    function yu(e) {
      se !== null && typeof se.markRenderStarted == "function" && se.markRenderStarted(e);
    }
    function Ee() {
      se !== null && typeof se.markRenderStopped == "function" && se.markRenderStopped();
    }
    function na(e, t) {
      se !== null && typeof se.markStateUpdateScheduled == "function" && se.markStateUpdateScheduled(e, t);
    }
    function Fu(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Kd(e) / Vu | 0) | 0;
    }
    function ds(e) {
      if (e & 1) return "SyncHydrationLane";
      if (e & 2) return "Sync";
      if (e & 4) return "InputContinuousHydration";
      if (e & 8) return "InputContinuous";
      if (e & 16) return "DefaultHydration";
      if (e & 32) return "Default";
      if (e & 128) return "TransitionHydration";
      if (e & 4194048) return "Transition";
      if (e & 62914560) return "Retry";
      if (e & 67108864) return "SelectiveHydration";
      if (e & 134217728) return "IdleHydration";
      if (e & 268435456) return "Idle";
      if (e & 536870912) return "Offscreen";
      if (e & 1073741824) return "Deferred";
    }
    function Ki(e) {
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
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function gn(e, t, n) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = e.suspendedLanes, m = e.pingedLanes;
      e = e.warmLanes;
      var g = i & 134217727;
      return g !== 0 ? (i = g & ~f, i !== 0 ? o = Ki(i) : (m &= g, m !== 0 ? o = Ki(m) : n || (n = g & ~e, n !== 0 && (o = Ki(n))))) : (g = i & ~f, g !== 0 ? o = Ki(g) : m !== 0 ? o = Ki(m) : n || (n = i & ~e, n !== 0 && (o = Ki(n)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, n = t & -t, f >= n || f === 32 && (n & 4194048) !== 0) ? t : o;
    }
    function Ef(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Jp(e, t) {
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
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function Lh() {
      var e = $d;
      return $d <<= 1, ($d & 4194048) === 0 && ($d = 256), e;
    }
    function Af() {
      var e = Wd;
      return Wd <<= 1, (Wd & 62914560) === 0 && (Wd = 4194304), e;
    }
    function Vh(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function lo(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function hv(e, t, n, i, o, f) {
      var m = e.pendingLanes;
      e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
      var g = e.entanglements, T = e.expirationTimes, A = e.hiddenUpdates;
      for (n = m & ~n; 0 < n; ) {
        var L = 31 - Nl(n), Z = 1 << L;
        g[L] = 0, T[L] = -1;
        var q = A[L];
        if (q !== null)
          for (A[L] = null, L = 0; L < q.length; L++) {
            var J = q[L];
            J !== null && (J.lane &= -536870913);
          }
        n &= ~Z;
      }
      i !== 0 && Kp(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(m & ~t));
    }
    function Kp(e, t, n) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - Nl(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | n & 4194090;
    }
    function no(e, t) {
      var n = e.entangledLanes |= t;
      for (e = e.entanglements; n; ) {
        var i = 31 - Nl(n), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), n &= ~o;
      }
    }
    function jl(e) {
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
    function pu(e, t, n) {
      if (Xt)
        for (e = e.pendingUpdatersLaneMap; 0 < n; ) {
          var i = 31 - Nl(n), o = 1 << i;
          e[i].add(t), n &= ~o;
        }
    }
    function Pl(e, t) {
      if (Xt)
        for (var n = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - Nl(t);
          e = 1 << o, o = n[o], 0 < o.size && (o.forEach(function(f) {
            var m = f.alternate;
            m !== null && i.has(m) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function Gh(e) {
      return e &= -e, Ol < e ? ba < e ? (e & 134217727) !== 0 ? Gu : Fd : ba : Ol;
    }
    function $p() {
      var e = Ce.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? Gu : Gd(e.type));
    }
    function mv(e, t) {
      var n = Ce.p;
      try {
        return Ce.p = e, t();
      } finally {
        Ce.p = n;
      }
    }
    function ao(e) {
      delete e[Bl], delete e[dn], delete e[_y], delete e[W0], delete e[Io];
    }
    function gu(e) {
      var t = e[Bl];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if (t = n[Bi] || n[Bl]) {
          if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
            for (e = Xo(e); e !== null; ) {
              if (n = e[Bl])
                return n;
              e = Xo(e);
            }
          return t;
        }
        e = n, n = e.parentNode;
      }
      return null;
    }
    function vn(e) {
      if (e = e[Bl] || e[Bi]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function Pu(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function Oa(e) {
      var t = e[ef];
      return t || (t = e[ef] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function il(e) {
      e[tf] = !0;
    }
    function Iu(e, t) {
      $i(e, t), $i(e + "Capture", t);
    }
    function $i(e, t) {
      Wn[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Wn[e] = t;
      var n = e.toLowerCase();
      for (Lc[n] = e, e === "onDoubleClick" && (Lc.ondblclick = e), e = 0; e < t.length; e++)
        F0.add(t[e]);
    }
    function ei(e, t) {
      P0[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function Wi(e) {
      return Lu.call(eh, e) ? !0 : Lu.call(Id, e) ? !1 : Pd.test(e) ? eh[e] = !0 : (Id[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function Wp(e, t, n) {
      if (Wi(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof n) {
            case "symbol":
            case "object":
              return n;
            case "function":
              return n;
            case "boolean":
              if (n === !1) return n;
          }
          return n === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && n === !0 ? !0 : (fe(n, t), e === "" + n ? n : e);
      }
    }
    function Rf(e, t, n) {
      if (Wi(t))
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          fe(n, t), e.setAttribute(t, "" + n);
        }
    }
    function Of(e, t, n) {
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
        fe(n, t), e.setAttribute(t, "" + n);
      }
    }
    function aa(e, t, n, i) {
      if (i === null) e.removeAttribute(n);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(n);
            return;
        }
        fe(i, n), e.setAttributeNS(t, n, "" + i);
      }
    }
    function hs() {
    }
    function Fp() {
      if (qi === 0) {
        Ny = console.log, By = console.info, I0 = console.warn, qy = console.error, lf = console.group, eg = console.groupCollapsed, tg = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: hs,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      qi++;
    }
    function yv() {
      if (qi--, qi === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Ge({}, e, { value: Ny }),
          info: Ge({}, e, { value: By }),
          warn: Ge({}, e, { value: I0 }),
          error: Ge({}, e, { value: qy }),
          group: Ge({}, e, { value: lf }),
          groupCollapsed: Ge({}, e, { value: eg }),
          groupEnd: Ge({}, e, { value: tg })
        });
      }
      0 > qi && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function Ft(e) {
      if (Yy === void 0)
        try {
          throw Error();
        } catch (n) {
          var t = n.stack.trim().match(/\n( *(at )?)/);
          Yy = t && t[1] || "", qr = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Yy + e + qr;
    }
    function cl(e, t) {
      if (!e || nf) return "";
      var n = Yr.get(e);
      if (n !== void 0) return n;
      nf = !0, n = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = X.H, X.H = null, Fp();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var q = function() {
                  throw Error();
                };
                if (Object.defineProperty(q.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(q, []);
                  } catch (ge) {
                    var J = ge;
                  }
                  Reflect.construct(e, [], q);
                } else {
                  try {
                    q.call();
                  } catch (ge) {
                    J = ge;
                  }
                  e.call(q.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ge) {
                  J = ge;
                }
                (q = e()) && typeof q.catch == "function" && q.catch(function() {
                });
              }
            } catch (ge) {
              if (ge && J && typeof ge.stack == "string")
                return [ge.stack, J.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var m = o.DetermineComponentFrameRoot(), g = m[0], T = m[1];
        if (g && T) {
          var A = g.split(`
`), L = T.split(`
`);
          for (m = f = 0; f < A.length && !A[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; m < L.length && !L[m].includes(
            "DetermineComponentFrameRoot"
          ); )
            m++;
          if (f === A.length || m === L.length)
            for (f = A.length - 1, m = L.length - 1; 1 <= f && 0 <= m && A[f] !== L[m]; )
              m--;
          for (; 1 <= f && 0 <= m; f--, m--)
            if (A[f] !== L[m]) {
              if (f !== 1 || m !== 1)
                do
                  if (f--, m--, 0 > m || A[f] !== L[m]) {
                    var Z = `
` + A[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && Z.includes("<anonymous>") && (Z = Z.replace("<anonymous>", e.displayName)), typeof e == "function" && Yr.set(e, Z), Z;
                  }
                while (1 <= f && 0 <= m);
              break;
            }
        }
      } finally {
        nf = !1, X.H = i, yv(), Error.prepareStackTrace = n;
      }
      return A = (A = e ? e.displayName || e.name : "") ? Ft(A) : "", typeof e == "function" && Yr.set(e, A), A;
    }
    function Ll(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react_stack_bottom_frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function uo(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return Ft(e.type);
        case 16:
          return Ft("Lazy");
        case 13:
          return Ft("Suspense");
        case 19:
          return Ft("SuspenseList");
        case 0:
        case 15:
          return cl(e.type, !1);
        case 11:
          return cl(e.type.render, !1);
        case 1:
          return cl(e.type, !0);
        case 31:
          return Ft("Activity");
        default:
          return "";
      }
    }
    function ms(e) {
      try {
        var t = "";
        do {
          t += uo(e);
          var n = e._debugInfo;
          if (n)
            for (var i = n.length - 1; 0 <= i; i--) {
              var o = n[i];
              if (typeof o.name == "string") {
                var f = t, m = o.env, g = Ft(
                  o.name + (m ? " [" + m + "]" : "")
                );
                t = f + g;
              }
            }
          e = e.return;
        } while (e);
        return t;
      } catch (T) {
        return `
Error generating stack: ` + T.message + `
` + T.stack;
      }
    }
    function Pp(e) {
      return (e = e ? e.displayName || e.name : "") ? Ft(e) : "";
    }
    function ys() {
      if (zn === null) return null;
      var e = zn._debugOwner;
      return e != null ? st(e) : null;
    }
    function Ip() {
      if (zn === null) return "";
      var e = zn;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += Ft(e.type);
            break;
          case 13:
            t += Ft("Suspense");
            break;
          case 19:
            t += Ft("SuspenseList");
            break;
          case 31:
            t += Ft("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += Pp(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += Pp(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var n = e;
            e = n._debugOwner;
            var i = n._debugStack;
            e && i && (typeof i != "string" && (n._debugStack = i = Ll(i)), i !== "" && (t += `
` + i));
          } else if (e.debugStack != null) {
            var o = e.debugStack;
            (e = e.owner) && o && (t += `
` + Ll(o));
          } else break;
        var f = t;
      } catch (m) {
        f = `
Error generating stack: ` + m.message + `
` + m.stack;
      }
      return f;
    }
    function pe(e, t, n, i, o, f, m) {
      var g = zn;
      Df(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, n, i, o, f, m)
        ) : t(n, i, o, f, m);
      } finally {
        Df(g);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function Df(e) {
      X.getCurrentStack = e === null ? null : Ip, hn = !1, zn = e;
    }
    function gl(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Ve(e), e;
        default:
          return "";
      }
    }
    function Fi(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function xf(e) {
      var t = Fi(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      Ve(e[t]);
      var i = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get, f = n.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(m) {
            Ve(m), i = "" + m, f.call(this, m);
          }
        }), Object.defineProperty(e, t, {
          enumerable: n.enumerable
        }), {
          getValue: function() {
            return i;
          },
          setValue: function(m) {
            Ve(m), i = "" + m;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function vu(e) {
      e._valueTracker || (e._valueTracker = xf(e));
    }
    function Pt(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(), i = "";
      return e && (i = Fi(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== n ? (t.setValue(e), !0) : !1;
    }
    function zf(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function bn(e) {
      return e.replace(
        _v,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function ti(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || Ly || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        ys() || "A component",
        t.type
      ), Ly = !0), t.value === void 0 || t.defaultValue === void 0 || jy || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        ys() || "A component",
        t.type
      ), jy = !0);
    }
    function li(e, t, n, i, o, f, m, g) {
      e.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? (fe(m, "type"), e.type = m) : e.removeAttribute("type"), t != null ? m === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + gl(t)) : e.value !== "" + gl(t) && (e.value = "" + gl(t)) : m !== "submit" && m !== "reset" || e.removeAttribute("value"), t != null ? ps(e, m, gl(t)) : n != null ? ps(e, m, gl(n)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? (fe(g, "name"), e.name = "" + gl(g)) : e.removeAttribute("name");
    }
    function e0(e, t, n, i, o, f, m, g) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (fe(f, "type"), e.type = f), t != null || n != null) {
        if (!(f !== "submit" && f !== "reset" || t != null))
          return;
        n = n != null ? "" + gl(n) : "", t = t != null ? "" + gl(t) : n, g || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = g ? e.checked : !!i, e.defaultChecked = !!i, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (fe(m, "name"), e.name = m);
    }
    function ps(e, t, n) {
      t === "number" && zf(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
    }
    function Xh(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Ur.Children.forEach(t.children, function(n) {
        n == null || typeof n == "string" || typeof n == "number" || typeof n == "bigint" || Gy || (Gy = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || th || (th = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || Vy || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Vy = !0);
    }
    function t0() {
      var e = ys();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function bu(e, t, n, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++)
          t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
          o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && i && (e[n].defaultSelected = !0);
      } else {
        for (n = "" + gl(n), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === n) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Mf(e, t) {
      for (e = 0; e < jr.length; e++) {
        var n = jr[e];
        if (t[n] != null) {
          var i = _e(t[n]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            n,
            t0()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            n,
            t0()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || Xy || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), Xy = !0);
    }
    function Da(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || lg || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        ys() || "A component"
      ), lg = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function gs(e, t, n) {
      if (t != null && (t = "" + gl(t), t !== e.value && (e.value = t), n == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n != null ? "" + gl(n) : "";
    }
    function Qh(e, t, n, i) {
      if (t == null) {
        if (i != null) {
          if (n != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (_e(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          n = i;
        }
        n == null && (n = ""), t = n;
      }
      n = gl(t), e.defaultValue = n, i = e.textContent, i === n && i !== "" && i !== null && (e.value = i);
    }
    function Pi(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Pi(e.children[0], t) : e;
    }
    function Vl(e) {
      return "  " + "  ".repeat(e);
    }
    function ni(e) {
      return "+ " + "  ".repeat(e);
    }
    function Ii(e) {
      return "- " + "  ".repeat(e);
    }
    function Zh(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function Cl(e, t) {
      return ng.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function Uf(e, t, n) {
      var i = 120 - 2 * n;
      if (t === null)
        return ni(n) + Cl(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), ni(n) + Cl(e, i) + `
` + Ii(n) + Cl(t, i) + `
`;
      }
      return Vl(n) + Cl(e, i) + `
`;
    }
    function kh(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, n) {
        return n;
      });
    }
    function ai(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (_e(e)) return "[...]";
          if (e.$$typeof === Ci)
            return (t = de(e.type)) ? "<" + t + ">" : "<...>";
          var n = kh(e);
          if (n === "Object") {
            n = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = ai(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  n += n === "" ? "..." : ", ...";
                  break;
                }
                n += (n === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + n + "}";
          }
          return n;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function ec(e, t) {
      return typeof e != "string" || ng.test(e) ? "{" + ai(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function io(e, t, n) {
      var i = 120 - n.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var m = ec(
            t[f],
            120 - n.length - f.length - 1
          );
          i -= f.length + m.length + 2, o.push(f + "=" + m);
        }
      return o.length === 0 ? n + "<" + e + `>
` : 0 < i ? n + "<" + e + " " + o.join(" ") + `>
` : n + "<" + e + `
` + n + "  " + o.join(`
` + n + "  ") + `
` + n + `>
`;
    }
    function pv(e, t, n) {
      var i = "", o = Ge({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var m = 120 - 2 * n - f.length - 2, g = ai(e[f], m);
          t.hasOwnProperty(f) ? (m = ai(t[f], m), i += ni(n) + f + ": " + g + `
`, i += Ii(n) + f + ": " + m + `
`) : i += ni(n) + f + ": " + g + `
`;
        }
      for (var T in o)
        o.hasOwnProperty(T) && (e = ai(
          o[T],
          120 - 2 * n - T.length - 2
        ), i += Ii(n) + T + ": " + e + `
`);
      return i;
    }
    function Nn(e, t, n, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (A in n)
        n.hasOwnProperty(A) && f.set(
          A.toLowerCase(),
          A
        );
      if (f.size === 1 && f.has("children"))
        o += io(
          e,
          t,
          Vl(i)
        );
      else {
        for (var m in t)
          if (t.hasOwnProperty(m) && m !== "children") {
            var g = 120 - 2 * (i + 1) - m.length - 1, T = f.get(m.toLowerCase());
            if (T !== void 0) {
              f.delete(m.toLowerCase());
              var A = t[m];
              T = n[T];
              var L = ec(
                A,
                g
              );
              g = ec(
                T,
                g
              ), typeof A == "object" && A !== null && typeof T == "object" && T !== null && kh(A) === "Object" && kh(T) === "Object" && (2 < Object.keys(A).length || 2 < Object.keys(T).length || -1 < L.indexOf("...") || -1 < g.indexOf("...")) ? o += Vl(i + 1) + m + `={{
` + pv(
                A,
                T,
                i + 2
              ) + Vl(i + 1) + `}}
` : (o += ni(i + 1) + m + "=" + L + `
`, o += Ii(i + 1) + m + "=" + g + `
`);
            } else
              o += Vl(i + 1) + m + "=" + ec(t[m], g) + `
`;
          }
        f.forEach(function(Z) {
          if (Z !== "children") {
            var q = 120 - 2 * (i + 1) - Z.length - 1;
            o += Ii(i + 1) + Z + "=" + ec(n[Z], q) + `
`;
          }
        }), o = o === "" ? Vl(i) + "<" + e + `>
` : Vl(i) + "<" + e + `
` + o + Vl(i) + `>
`;
      }
      return e = n.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += Uf(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + Uf("" + t, null, i + 1) : o + Uf("" + t, void 0, i + 1)), o;
    }
    function vs(e, t) {
      var n = Zh(e);
      if (n === null) {
        for (n = "", e = e.child; e; )
          n += vs(e, t), e = e.sibling;
        return n;
      }
      return Vl(t) + "<" + n + `>
`;
    }
    function bs(e, t) {
      var n = Pi(e, t);
      if (n !== e && (e.children.length !== 1 || e.children[0] !== n))
        return Vl(t) + `...
` + bs(n, t + 1);
      n = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (n += Vl(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = Uf(o, e.serverProps, t), t++;
      else if (f = Zh(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var m = 120 - 2 * i - f.length - 2, g = "";
          for (A in o)
            if (o.hasOwnProperty(A) && A !== "children") {
              var T = ec(o[A], 15);
              if (m -= A.length + T.length + 2, 0 > m) {
                g += " ...";
                break;
              }
              g += " " + A + "=" + T;
            }
          i = Vl(i) + "<" + f + g + `>
`, t++;
        } else
          e.serverProps === null ? (i = io(
            f,
            o,
            ni(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = Nn(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var A = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        m = e.children[f], m.fiber === o ? (A += bs(m, t), f++) : A += vs(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (A += Vl(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], A = typeof f == "string" ? A + (Ii(t) + Cl(f, 120 - 2 * t) + `
`) : A + io(
          f.type,
          f.props,
          Ii(t)
        );
      return n + i + A;
    }
    function Cf(e) {
      try {
        return `

` + bs(e, 0);
      } catch {
        return "";
      }
    }
    function tc(e, t, n) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? n : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? Cf(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function Jh(e, t) {
      var n = Ge({}, e || ky), i = { tag: t };
      return lh.indexOf(t) !== -1 && (n.aTagInScope = null, n.buttonTagInScope = null, n.nobrTagInScope = null), nh.indexOf(t) !== -1 && (n.pTagInButtonScope = null), Qy.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (n.listItemTagAutoclosing = null, n.dlItemTagAutoclosing = null), n.current = i, t === "form" && (n.formTag = i), t === "a" && (n.aTagInScope = i), t === "button" && (n.buttonTagInScope = i), t === "nobr" && (n.nobrTagInScope = i), t === "p" && (n.pTagInButtonScope = i), t === "li" && (n.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (n.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? n.containerTagInScope = null : n.containerTagInScope || (n.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? n.implicitRootScope === !0 && (n.implicitRootScope = !1) : n.implicitRootScope = !0, n;
    }
    function Kh(e, t, n) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (n) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!n) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return Zy.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return n || t === null;
        case "html":
          return n && t === "#document" || t === null;
        case "body":
          return n && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function co(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function l0(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function Ss(e, t) {
      t = t || ky;
      var n = t.current;
      if (t = (n = Kh(
        e,
        n && n.tag,
        t.implicitRootScope
      ) ? null : n) ? null : co(e, t), t = n || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!n) + "|" + e + "|" + i, af[t]) return !1;
      af[t] = !0;
      var o = (t = zn) ? l0(t.return, i) : null, f = t !== null && o !== null ? tc(o, t, null) : "", m = "<" + e + ">";
      return n ? (n = "", i === "table" && e === "tr" && (n += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        m,
        i,
        n,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        m,
        i,
        f
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || pe(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          m
        );
      })), !1;
    }
    function Hf(e, t, n) {
      if (n || Kh("#text", t, !1))
        return !0;
      if (n = "#text|" + t, af[n]) return !1;
      af[n] = !0;
      var i = (n = zn) ? l0(n, t) : null;
      return n = n !== null && i !== null ? tc(
        i,
        n,
        n.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        n
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        n
      ), !1;
    }
    function lc(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function gv(e) {
      return e.replace(Yi, function(t, n) {
        return n.toUpperCase();
      });
    }
    function n0(e, t, n) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? Vc.hasOwnProperty(t) && Vc[t] || (Vc[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        gv(t.replace(Vr, "ms-"))
      )) : Lr.test(t) ? Vc.hasOwnProperty(t) && Vc[t] || (Vc[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !ag.test(n) || Gc.hasOwnProperty(n) && Gc[n] || (Gc[n] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        n.replace(ag, "")
      )), typeof n == "number" && (isNaN(n) ? ug || (ug = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(n) || Jy || (Jy = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), n == null || typeof n == "boolean" || n === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Gr.has(t) ? t === "float" ? e.cssFloat = n : (ze(n, t), e[t] = ("" + n).trim()) : e[t] = n + "px";
    }
    function wf(e, t, n) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, n != null) {
        if (t) {
          var i = {};
          if (n) {
            for (var o in n)
              if (n.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = lu[o] || [o], m = 0; m < f.length; m++)
                  i[f[m]] = o;
          }
          for (var g in t)
            if (t.hasOwnProperty(g) && (!n || n[g] !== t[g]))
              for (o = lu[g] || [g], f = 0; f < o.length; f++)
                i[o[f]] = g;
          g = {};
          for (var T in t)
            for (o = lu[T] || [T], f = 0; f < o.length; f++)
              g[o[f]] = T;
          T = {};
          for (var A in i)
            if (o = i[A], (f = g[A]) && o !== f && (m = o + "," + f, !T[m])) {
              T[m] = !0, m = console;
              var L = t[o];
              m.error.call(
                m,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                L == null || typeof L == "boolean" || L === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var Z in n)
          !n.hasOwnProperty(Z) || t != null && t.hasOwnProperty(Z) || (Z.indexOf("--") === 0 ? e.setProperty(Z, "") : Z === "float" ? e.cssFloat = "" : e[Z] = "");
        for (var q in t)
          A = t[q], t.hasOwnProperty(q) && n[q] !== A && n0(e, q, A);
      } else
        for (i in t)
          t.hasOwnProperty(i) && n0(e, i, t[i]);
    }
    function nc(e) {
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
    function Ts(e) {
      return ah.get(e) || e;
    }
    function oo(e, t) {
      if (Lu.call(nu, t) && nu[t])
        return !0;
      if (uh.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = Ky.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), nu[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), nu[t] = !0;
      }
      if ($y.test(t)) {
        if (e = t.toLowerCase(), e = Ky.hasOwnProperty(e) ? e : null, e == null) return nu[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), nu[t] = !0);
      }
      return !0;
    }
    function fo(e, t) {
      var n = [], i;
      for (i in t)
        oo(e, i) || n.push(i);
      t = n.map(function(o) {
        return "`" + o + "`";
      }).join(", "), n.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < n.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function a0(e, t, n, i) {
      if (Lu.call(kl, t) && kl[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), kl[t] = !0;
      if (typeof n == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), kl[t] = !0;
        if (Qr.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), kl[t] = !0;
      } else if (Qr.test(t))
        return l.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), kl[t] = !0;
      if (a.test(t) || u.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), kl[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), kl[t] = !0;
      if (o === "is" && n !== null && n !== void 0 && typeof n != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof n
        ), kl[t] = !0;
      if (typeof n == "number" && isNaN(n))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), kl[t] = !0;
      if (Xc.hasOwnProperty(o)) {
        if (o = Xc[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), kl[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), kl[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof n) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
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
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (n ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                n,
                t,
                t,
                n,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                n,
                t,
                t,
                n,
                t,
                t,
                t
              ), kl[t] = !0);
          }
        case "function":
        case "symbol":
          return kl[t] = !0, !1;
        case "string":
          if (n === "false" || n === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
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
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              n,
              t,
              n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              n
            ), kl[t] = !0;
          }
      }
      return !0;
    }
    function $h(e, t, n) {
      var i = [], o;
      for (o in t)
        a0(e, o, t[o], n) || i.push(o);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function ro(e) {
      return c.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function ac(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function xa(e) {
      var t = vn(e);
      if (t && (e = t.stateNode)) {
        var n = e[dn] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (li(
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
              for (fe(t, "name"), n = n.querySelectorAll(
                'input[name="' + bn(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < n.length; t++) {
                var i = n[t];
                if (i !== e && i.form === e.form) {
                  var o = i[dn] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  li(
                    i,
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
                i = n[t], i.form === e.form && Pt(i);
            }
            break e;
          case "textarea":
            gs(e, n.value, n.defaultValue);
            break e;
          case "select":
            t = n.value, t != null && bu(e, !!n.multiple, t, !1);
        }
      }
    }
    function Es(e, t, n) {
      if (S) return e(t, n);
      S = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (S = !1, (d !== null || v !== null) && (Mc(), d && (t = d, e = v, v = d = null, xa(t), e)))
          for (t = 0; t < e.length; t++) xa(e[t]);
      }
    }
    function Su(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var i = n[dn] || null;
      if (i === null) return null;
      n = i[t];
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
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof n + "` type."
        );
      return n;
    }
    function Tu() {
      if (V) return V;
      var e, t = Y, n = t.length, i, o = "value" in P ? P.value : P.textContent, f = o.length;
      for (e = 0; e < n && t[e] === o[e]; e++) ;
      var m = n - e;
      for (i = 1; i <= m && t[n - i] === o[f - i]; i++) ;
      return V = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function so(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function uc() {
      return !0;
    }
    function Wh() {
      return !1;
    }
    function vl(e) {
      function t(n, i, o, f, m) {
        this._reactName = n, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = m, this.currentTarget = null;
        for (var g in e)
          e.hasOwnProperty(g) && (n = e[g], this[g] = n ? n(f) : f[g]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? uc : Wh, this.isPropagationStopped = Wh, this;
      }
      return Ge(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = uc);
        },
        stopPropagation: function() {
          var n = this.nativeEvent;
          n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = uc);
        },
        persist: function() {
        },
        isPersistent: uc
      }), t;
    }
    function As(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = Y2[e]) ? !!t[e] : !1;
    }
    function Rs() {
      return As;
    }
    function Gl(e, t) {
      switch (e) {
        case "keyup":
          return W2.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== hb;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function ui(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function Os(e, t) {
      switch (e) {
        case "compositionend":
          return ui(t);
        case "keypress":
          return t.which !== yb ? null : (gb = !0, pb);
        case "textInput":
          return e = t.data, e === pb && gb ? null : e;
        default:
          return null;
      }
    }
    function _f(e, t) {
      if (ih)
        return e === "compositionend" || !Bv && Gl(e, t) ? (e = Tu(), V = Y = P = null, ih = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return mb && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function u0(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!P2[e.type] : t === "textarea";
    }
    function Fh(e) {
      if (!O) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function Ds(e, t, n, i) {
      d ? v ? v.push(i) : v = [i] : d = i, t = Tr(t, "onChange"), 0 < t.length && (n = new xe(
        "onChange",
        "change",
        null,
        n,
        i
      ), e.push({ event: n, listeners: t }));
    }
    function Nf(e) {
      Ka(e, 0);
    }
    function ic(e) {
      var t = Pu(e);
      if (Pt(t)) return e;
    }
    function Ph(e, t) {
      if (e === "change") return t;
    }
    function i0() {
      Py && (Py.detachEvent("onpropertychange", c0), Iy = Py = null);
    }
    function c0(e) {
      if (e.propertyName === "value" && ic(Iy)) {
        var t = [];
        Ds(
          t,
          Iy,
          e,
          ac(e)
        ), Es(Nf, t);
      }
    }
    function vv(e, t, n) {
      e === "focusin" ? (i0(), Py = t, Iy = n, Py.attachEvent("onpropertychange", c0)) : e === "focusout" && i0();
    }
    function Ih(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ic(Iy);
    }
    function bv(e, t) {
      if (e === "click") return ic(t);
    }
    function Sv(e, t) {
      if (e === "input" || e === "change")
        return ic(t);
    }
    function Tv(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function Bf(e, t) {
      if (Mn(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var n = Object.keys(e), i = Object.keys(t);
      if (n.length !== i.length) return !1;
      for (i = 0; i < n.length; i++) {
        var o = n[i];
        if (!Lu.call(t, o) || !Mn(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function o0(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function em(e, t) {
      var n = o0(e);
      e = 0;
      for (var i; n; ) {
        if (n.nodeType === 3) {
          if (i = e + n.textContent.length, e <= t && i >= t)
            return { node: n, offset: t - e };
          e = i;
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
        n = o0(n);
      }
    }
    function f0(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? f0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function r0(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = zf(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = typeof t.contentWindow.location.href == "string";
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = zf(e.document);
      }
      return t;
    }
    function tm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function s0(e, t, n) {
      var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Yv || ch == null || ch !== zf(i) || (i = ch, "selectionStart" in i && tm(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), ep && Bf(ep, i) || (ep = i, i = Tr(qv, "onSelect"), 0 < i.length && (t = new xe(
        "onSelect",
        "select",
        null,
        t,
        n
      ), e.push({ event: t, listeners: i }), t.target = ch)));
    }
    function Eu(e, t) {
      var n = {};
      return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    function cc(e) {
      if (jv[e]) return jv[e];
      if (!oh[e]) return e;
      var t = oh[e], n;
      for (n in t)
        if (t.hasOwnProperty(n) && n in bb)
          return jv[e] = t[n];
      return e;
    }
    function ua(e, t) {
      Rb.set(e, t), Iu(t, [e]);
    }
    function Sn(e, t) {
      if (typeof e == "object" && e !== null) {
        var n = Vv.get(e);
        return n !== void 0 ? n : (t = {
          value: e,
          source: t,
          stack: ms(t)
        }, Vv.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: ms(t)
      };
    }
    function qf() {
      for (var e = fh, t = Gv = fh = 0; t < e; ) {
        var n = au[t];
        au[t++] = null;
        var i = au[t];
        au[t++] = null;
        var o = au[t];
        au[t++] = null;
        var f = au[t];
        if (au[t++] = null, i !== null && o !== null) {
          var m = i.pending;
          m === null ? o.next = o : (o.next = m.next, m.next = o), i.pending = o;
        }
        f !== 0 && d0(n, o, f);
      }
    }
    function xs(e, t, n, i) {
      au[fh++] = e, au[fh++] = t, au[fh++] = n, au[fh++] = i, Gv |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function lm(e, t, n, i) {
      return xs(e, t, n, i), zs(e);
    }
    function Il(e, t) {
      return xs(e, null, null, t), zs(e);
    }
    function d0(e, t, n) {
      e.lanes |= n;
      var i = e.alternate;
      i !== null && (i.lanes |= n);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= n, i = f.alternate, i !== null && (i.childLanes |= n), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & ig || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - Nl(n), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = n | 536870912), f) : null;
    }
    function zs(e) {
      if (Ep > TE)
        throw ns = Ep = 0, Ap = v1 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      ns > EE && (ns = 0, Ap = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && ga(e);
      for (var t = e, n = t.return; n !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && ga(e), t = n, n = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function oc(e) {
      if (uu === null) return e;
      var t = uu(e);
      return t === void 0 ? e : t.current;
    }
    function nm(e) {
      if (uu === null) return e;
      var t = uu(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = oc(e.render), e.render !== t) ? (t = { $$typeof: Yu, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function h0(e, t) {
      if (uu === null) return !1;
      var n = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === xn) && (i = !0);
          break;
        case 11:
          (o === Yu || o === xn) && (i = !0);
          break;
        case 14:
        case 15:
          (o === Hr || o === xn) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = uu(n), e !== void 0 && e === uu(t)));
    }
    function m0(e) {
      uu !== null && typeof WeakSet == "function" && (rh === null && (rh = /* @__PURE__ */ new WeakSet()), rh.add(e));
    }
    function Yf(e, t, n) {
      var i = e.alternate, o = e.child, f = e.sibling, m = e.tag, g = e.type, T = null;
      switch (m) {
        case 0:
        case 15:
        case 1:
          T = g;
          break;
        case 11:
          T = g.render;
      }
      if (uu === null)
        throw Error("Expected resolveFamily to be set during hot reload.");
      var A = !1;
      g = !1, T !== null && (T = uu(T), T !== void 0 && (n.has(T) ? g = !0 : t.has(T) && (m === 1 ? g = !0 : A = !0))), rh !== null && (rh.has(e) || i !== null && rh.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), (g || A) && (i = Il(e, 2), i !== null && Yt(i, e, 2)), o === null || g || Yf(
        o,
        t,
        n
      ), f !== null && Yf(
        f,
        t,
        n
      );
    }
    function jf(e, t, n, i) {
      this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, Db || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function am(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function za(e, t) {
      var n = e.alternate;
      switch (n === null ? (n = ie(
        e.tag,
        t,
        e.key,
        e.mode
      ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n._debugOwner = e._debugOwner, n._debugStack = e._debugStack, n._debugTask = e._debugTask, n._debugHookTypes = e._debugHookTypes, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null, n.actualDuration = -0, n.actualStartTime = -1.1), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n.selfBaseDuration = e.selfBaseDuration, n.treeBaseDuration = e.treeBaseDuration, n._debugInfo = e._debugInfo, n._debugNeedsRemount = e._debugNeedsRemount, n.tag) {
        case 0:
        case 15:
          n.type = oc(e.type);
          break;
        case 1:
          n.type = oc(e.type);
          break;
        case 11:
          n.type = nm(e.type);
      }
      return n;
    }
    function um(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = n.selfBaseDuration, e.treeBaseDuration = n.treeBaseDuration), e;
    }
    function Ms(e, t, n, i, o, f) {
      var m = 0, g = e;
      if (typeof e == "function")
        am(e) && (m = 1), g = oc(g);
      else if (typeof e == "string")
        m = C(), m = Zo(e, n, m) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case Hy:
            return t = ie(31, n, t, o), t.elementType = Hy, t.lanes = f, t;
          case qe:
            return ii(
              n.children,
              o,
              f,
              t
            );
          case Jo:
            m = 8, o |= mn, o |= Zu;
            break;
          case Ko:
            return e = n, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = ie(12, e, t, i | Jl), t.elementType = Ko, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case $o:
            return t = ie(13, n, t, o), t.elementType = $o, t.lanes = f, t;
          case Hi:
            return t = ie(19, n, t, o), t.elementType = Hi, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Cy:
                case Kn:
                  m = 10;
                  break e;
                case Qd:
                  m = 9;
                  break e;
                case Yu:
                  m = 11, g = nm(g);
                  break e;
                case Hr:
                  m = 14;
                  break e;
                case xn:
                  m = 16, g = null;
                  break e;
              }
            g = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? n = "null" : _e(e) ? n = "array" : e !== void 0 && e.$$typeof === Ci ? (n = "<" + (de(e.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : n = typeof e, (m = i ? st(i) : null) && (g += `

Check the render method of \`` + m + "`."), m = 29, n = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (n + "." + g)
            ), g = null;
        }
      return t = ie(m, n, t, o), t.elementType = e, t.type = g, t.lanes = f, t._debugOwner = i, t;
    }
    function Lf(e, t, n) {
      return t = Ms(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        n
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function ii(e, t, n, i) {
      return e = ie(7, e, i, t), e.lanes = n, e;
    }
    function ci(e, t, n) {
      return e = ie(6, e, null, t), e.lanes = n, e;
    }
    function im(e, t, n) {
      return t = ie(
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
    function fc(e, t) {
      ia(), sh[dh++] = og, sh[dh++] = cg, cg = e, og = t;
    }
    function y0(e, t, n) {
      ia(), iu[cu++] = Zc, iu[cu++] = kc, iu[cu++] = Zr, Zr = e;
      var i = Zc;
      e = kc;
      var o = 32 - Nl(i) - 1;
      i &= ~(1 << o), n += 1;
      var f = 32 - Nl(t) + o;
      if (30 < f) {
        var m = o - o % 5;
        f = (i & (1 << m) - 1).toString(32), i >>= m, o -= m, Zc = 1 << 32 - Nl(t) + o | n << o | i, kc = f + e;
      } else
        Zc = 1 << f | n << o | i, kc = e;
    }
    function Us(e) {
      ia(), e.return !== null && (fc(e, 1), y0(e, 1, 0));
    }
    function Cs(e) {
      for (; e === cg; )
        cg = sh[--dh], sh[dh] = null, og = sh[--dh], sh[dh] = null;
      for (; e === Zr; )
        Zr = iu[--cu], iu[cu] = null, kc = iu[--cu], iu[cu] = null, Zc = iu[--cu], iu[cu] = null;
    }
    function ia() {
      ct || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function ca(e, t) {
      if (e.return === null) {
        if (ou === null)
          ou = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (ou.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          ou.distanceFromLeaf > t && (ou.distanceFromLeaf = t);
        }
        return ou;
      }
      var n = ca(
        e.return,
        t + 1
      ).children;
      return 0 < n.length && n[n.length - 1].fiber === e ? (n = n[n.length - 1], n.distanceFromLeaf > t && (n.distanceFromLeaf = t), n) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, n.push(t), t);
    }
    function cm(e, t) {
      Jc || (e = ca(e, 0), e.serverProps = null, t !== null && (t = _d(t), e.serverTail.push(t)));
    }
    function Ma(e) {
      var t = "", n = ou;
      throw n !== null && (ou = null, t = Cf(n)), ho(
        Sn(
          Error(
            `Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + t
          ),
          e
        )
      ), Xv;
    }
    function om(e) {
      var t = e.stateNode, n = e.type, i = e.memoizedProps;
      switch (t[Bl] = e, t[dn] = i, $a(n, i), n) {
        case "dialog":
          Ke("cancel", t), Ke("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Ke("load", t);
          break;
        case "video":
        case "audio":
          for (n = 0; n < Rp.length; n++)
            Ke(Rp[n], t);
          break;
        case "source":
          Ke("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Ke("error", t), Ke("load", t);
          break;
        case "details":
          Ke("toggle", t);
          break;
        case "input":
          ei("input", i), Ke("invalid", t), ti(t, i), e0(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ), vu(t);
          break;
        case "option":
          Xh(t, i);
          break;
        case "select":
          ei("select", i), Ke("invalid", t), Mf(t, i);
          break;
        case "textarea":
          ei("textarea", i), Ke("invalid", t), Da(t, i), Qh(
            t,
            i.value,
            i.defaultValue,
            i.children
          ), vu(t);
      }
      n = i.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || i.suppressHydrationWarning === !0 || ry(t.textContent, n) ? (i.popover != null && (Ke("beforetoggle", t), Ke("toggle", t)), i.onScroll != null && Ke("scroll", t), i.onScrollEnd != null && Ke("scrollend", t), i.onClick != null && (t.onclick = _u), t = !0) : t = !1, t || Ma(e);
    }
    function fm(e) {
      for (Un = e.return; Un; )
        switch (Un.tag) {
          case 5:
          case 13:
            Li = !1;
            return;
          case 27:
          case 3:
            Li = !0;
            return;
          default:
            Un = Un.return;
        }
    }
    function rc(e) {
      if (e !== Un) return !1;
      if (!ct)
        return fm(e), ct = !0, !1;
      var t = e.tag, n;
      if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Wa(e.type, e.memoizedProps)), n = !n), n && Kt) {
        for (n = Kt; n; ) {
          var i = ca(e, 0), o = _d(n);
          i.serverTail.push(o), n = o.type === "Suspense" ? vy(n) : Al(n.nextSibling);
        }
        Ma(e);
      }
      if (fm(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Kt = vy(e);
      } else
        t === 27 ? (t = Kt, Fa(e.type) ? (e = U1, U1 = null, Kt = e) : Kt = t) : Kt = Un ? Al(e.stateNode.nextSibling) : null;
      return !0;
    }
    function sc() {
      Kt = Un = null, Jc = ct = !1;
    }
    function rm() {
      var e = kr;
      return e !== null && (wn === null ? wn = e : wn.push.apply(
        wn,
        e
      ), kr = null), e;
    }
    function ho(e) {
      kr === null ? kr = [e] : kr.push(e);
    }
    function sm() {
      var e = ou;
      if (e !== null) {
        ou = null;
        for (var t = Cf(e); 0 < e.children.length; )
          e = e.children[0];
        pe(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function Hs() {
      hh = fg = null, mh = !1;
    }
    function oi(e, t, n) {
      we(Qv, t._currentValue, e), t._currentValue = n, we(Zv, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Ub && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = Ub;
    }
    function Au(e, t) {
      e._currentValue = Qv.current;
      var n = Zv.current;
      Je(Zv, t), e._currentRenderer = n, Je(Qv, t);
    }
    function dm(e, t, n) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === n) break;
        e = e.return;
      }
      e !== n && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function hm(e, t, n, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var m = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var g = f;
            f = o;
            for (var T = 0; T < t.length; T++)
              if (g.context === t[T]) {
                f.lanes |= n, g = f.alternate, g !== null && (g.lanes |= n), dm(
                  f.return,
                  n,
                  e
                ), i || (m = null);
                break e;
              }
            f = g.next;
          }
        } else if (o.tag === 18) {
          if (m = o.return, m === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          m.lanes |= n, f = m.alternate, f !== null && (f.lanes |= n), dm(
            m,
            n,
            e
          ), m = null;
        } else m = o.child;
        if (m !== null) m.return = o;
        else
          for (m = o; m !== null; ) {
            if (m === e) {
              m = null;
              break;
            }
            if (o = m.sibling, o !== null) {
              o.return = m.return, m = o;
              break;
            }
            m = m.return;
          }
        o = m;
      }
    }
    function bl(e, t, n, i) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var m = o.alternate;
          if (m === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (m = m.memoizedProps, m !== null) {
            var g = o.type;
            Mn(o.pendingProps.value, m.value) || (e !== null ? e.push(g) : e = [g]);
          }
        } else if (o === Fo.current) {
          if (m = o.alternate, m === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          m.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(zp) : e = [zp]);
        }
        o = o.return;
      }
      e !== null && hm(
        t,
        e,
        n,
        i
      ), t.flags |= 262144;
    }
    function fi(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Mn(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function ri(e) {
      fg = e, hh = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function Ot(e) {
      return mh && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), mm(fg, e);
    }
    function Vf(e, t) {
      return fg === null && ri(e), mm(e, t);
    }
    function mm(e, t) {
      var n = t._currentValue;
      if (t = { context: t, memoizedValue: n, next: null }, hh === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        hh = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else hh = hh.next = t;
      return n;
    }
    function Gf() {
      return {
        controller: new iE(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function dc(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function Ua(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && cE(oE, function() {
        e.controller.abort();
      });
    }
    function oa() {
      var e = Jr;
      return Jr = 0, e;
    }
    function si(e) {
      var t = Jr;
      return Jr = e, t;
    }
    function hc(e) {
      var t = Jr;
      return Jr += e, t;
    }
    function ws(e) {
      Fn = yh(), 0 > e.actualStartTime && (e.actualStartTime = Fn);
    }
    function Ru(e) {
      if (0 <= Fn) {
        var t = yh() - Fn;
        e.actualDuration += t, e.selfBaseDuration = t, Fn = -1;
      }
    }
    function mc(e) {
      if (0 <= Fn) {
        var t = yh() - Fn;
        e.actualDuration += t, Fn = -1;
      }
    }
    function Bn() {
      if (0 <= Fn) {
        var e = yh() - Fn;
        Fn = -1, Jr += e;
      }
    }
    function fa() {
      Fn = yh();
    }
    function Ca(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function p0(e, t) {
      if (tp === null) {
        var n = tp = [];
        kv = 0, Kr = uy(), ph = {
          status: "pending",
          value: void 0,
          then: function(i) {
            n.push(i);
          }
        };
      }
      return kv++, t.then(ym, ym), t;
    }
    function ym() {
      if (--kv === 0 && tp !== null) {
        ph !== null && (ph.status = "fulfilled");
        var e = tp;
        tp = null, Kr = 0, ph = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function g0(e, t) {
      var n = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          n.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < n.length; o++) (0, n[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < n.length; o++)
            (0, n[o])(void 0);
        }
      ), i;
    }
    function pm() {
      var e = $r.current;
      return e !== null ? e : Dt.pooledCache;
    }
    function _s(e, t) {
      t === null ? we($r, $r.current, e) : we($r, t.pool, e);
    }
    function v0() {
      var e = pm();
      return e === null ? null : { parent: Dl._currentValue, pool: e };
    }
    function gm() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function vm(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function mo() {
    }
    function qn(e, t, n) {
      X.actQueue !== null && (X.didUsePromise = !0);
      var i = e.thenables;
      switch (n = i[n], n === void 0 ? i.push(t) : n !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(mo, mo), t = n), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, Tn(e), e;
        default:
          if (typeof t.status == "string")
            t.then(mo, mo);
          else {
            if (e = Dt, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "fulfilled", f.value = o;
                }
              },
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "rejected", f.reason = o;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, Tn(e), e;
          }
          throw fp = t, yg = !0, op;
      }
    }
    function bm() {
      if (fp === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = fp;
      return fp = null, yg = !1, e;
    }
    function Tn(e) {
      if (e === op || e === mg)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function en(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function di(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function Ha(e) {
      return {
        lane: e,
        tag: Nb,
        payload: null,
        callback: null,
        next: null
      };
    }
    function ra(e, t, n) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, $v === i && !Yb) {
        var o = Se(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), Yb = !0;
      }
      return (mt & Hn) !== Sa ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = zs(e), d0(e, null, n), t) : (xs(e, i, t, n), zs(e));
    }
    function hi(e, t, n) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, n |= i, t.lanes = n, no(e, n);
      }
    }
    function yo(e, t) {
      var n = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, n === i)) {
        var o = null, f = null;
        if (n = n.firstBaseUpdate, n !== null) {
          do {
            var m = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = m : f = f.next = m, n = n.next;
          } while (n !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        n = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = n;
        return;
      }
      e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
    }
    function wa() {
      if (Wv) {
        var e = ph;
        if (e !== null) throw e;
      }
    }
    function po(e, t, n, i) {
      Wv = !1;
      var o = e.updateQueue;
      of = !1, $v = o.shared;
      var f = o.firstBaseUpdate, m = o.lastBaseUpdate, g = o.shared.pending;
      if (g !== null) {
        o.shared.pending = null;
        var T = g, A = T.next;
        T.next = null, m === null ? f = A : m.next = A, m = T;
        var L = e.alternate;
        L !== null && (L = L.updateQueue, g = L.lastBaseUpdate, g !== m && (g === null ? L.firstBaseUpdate = A : g.next = A, L.lastBaseUpdate = T));
      }
      if (f !== null) {
        var Z = o.baseState;
        m = 0, L = A = T = null, g = f;
        do {
          var q = g.lane & -536870913, J = q !== g.lane;
          if (J ? (Ie & q) === q : (i & q) === q) {
            q !== 0 && q === Kr && (Wv = !0), L !== null && (L = L.next = {
              lane: 0,
              tag: g.tag,
              payload: g.payload,
              callback: null,
              next: null
            });
            e: {
              q = e;
              var ge = g, He = t, xt = n;
              switch (ge.tag) {
                case Bb:
                  if (ge = ge.payload, typeof ge == "function") {
                    mh = !0;
                    var tt = ge.call(
                      xt,
                      Z,
                      He
                    );
                    if (q.mode & mn) {
                      $e(!0);
                      try {
                        ge.call(xt, Z, He);
                      } finally {
                        $e(!1);
                      }
                    }
                    mh = !1, Z = tt;
                    break e;
                  }
                  Z = ge;
                  break e;
                case Kv:
                  q.flags = q.flags & -65537 | 128;
                case Nb:
                  if (tt = ge.payload, typeof tt == "function") {
                    if (mh = !0, ge = tt.call(
                      xt,
                      Z,
                      He
                    ), q.mode & mn) {
                      $e(!0);
                      try {
                        tt.call(xt, Z, He);
                      } finally {
                        $e(!1);
                      }
                    }
                    mh = !1;
                  } else ge = tt;
                  if (ge == null) break e;
                  Z = Ge({}, Z, ge);
                  break e;
                case qb:
                  of = !0;
              }
            }
            q = g.callback, q !== null && (e.flags |= 64, J && (e.flags |= 8192), J = o.callbacks, J === null ? o.callbacks = [q] : J.push(q));
          } else
            J = {
              lane: q,
              tag: g.tag,
              payload: g.payload,
              callback: g.callback,
              next: null
            }, L === null ? (A = L = J, T = Z) : L = L.next = J, m |= q;
          if (g = g.next, g === null) {
            if (g = o.shared.pending, g === null)
              break;
            J = g, g = J.next, J.next = null, o.lastBaseUpdate = J, o.shared.pending = null;
          }
        } while (!0);
        L === null && (T = Z), o.baseState = T, o.firstBaseUpdate = A, o.lastBaseUpdate = L, f === null && (o.shared.lanes = 0), df |= m, e.lanes = m, e.memoizedState = Z;
      }
      $v = null;
    }
    function Xf(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function go(e, t) {
      var n = e.shared.hiddenCallbacks;
      if (n !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < n.length; e++)
          Xf(n[e], t);
    }
    function b0(e, t) {
      var n = e.callbacks;
      if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++)
          Xf(n[e], t);
    }
    function tn(e, t) {
      var n = Xi;
      we(pg, n, e), we(gh, t, e), Xi = n | t.baseLanes;
    }
    function Qf(e) {
      we(pg, Xi, e), we(
        gh,
        gh.current,
        e
      );
    }
    function sa(e) {
      Xi = pg.current, Je(gh, e), Je(pg, e);
    }
    function Qe() {
      var e = Q;
      su === null ? su = [e] : su.push(e);
    }
    function ae() {
      var e = Q;
      if (su !== null && ($c++, su[$c] !== e)) {
        var t = Se(Ne);
        if (!jb.has(t) && (jb.add(t), su !== null)) {
          for (var n = "", i = 0; i <= $c; i++) {
            var o = su[i], f = i === $c ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, n += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            n
          );
        }
      }
    }
    function Yn(e) {
      e == null || _e(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        Q,
        typeof e
      );
    }
    function vo() {
      var e = Se(Ne);
      Vb.has(e) || (Vb.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function wt() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function mi(e, t) {
      if (sp) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          Q
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        Q,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Mn(e[n], t[n])) return !1;
      return !0;
    }
    function yi(e, t, n, i, o, f) {
      ff = f, Ne = t, su = e !== null ? e._debugHookTypes : null, $c = -1, sp = e !== null && e.type !== t.type, (Object.prototype.toString.call(n) === "[object AsyncFunction]" || Object.prototype.toString.call(n) === "[object AsyncGeneratorFunction]") && (f = Se(Ne), Fv.has(f) || (Fv.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, X.H = e !== null && e.memoizedState !== null ? Iv : su !== null ? Gb : Pv, Fr = f = (t.mode & mn) !== Ct;
      var m = e1(n, i, o);
      if (Fr = !1, bh && (m = bo(
        t,
        n,
        i,
        o
      )), f) {
        $e(!0);
        try {
          m = bo(
            t,
            n,
            i,
            o
          );
        } finally {
          $e(!1);
        }
      }
      return Zf(e, t), m;
    }
    function Zf(e, t) {
      t._debugHookTypes = su, t.dependencies === null ? Kc !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: Kc
      }) : t.dependencies._debugThenableState = Kc, X.H = bg;
      var n = Rt !== null && Rt.next !== null;
      if (ff = 0, su = Q = hl = Rt = Ne = null, $c = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), gg = !1, rp = 0, Kc = null, n)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || ql || (e = e.dependencies, e !== null && fi(e) && (ql = !0)), yg ? (yg = !1, e = !0) : e = !1, e && (t = Se(t) || "Unknown", Lb.has(t) || Fv.has(t) || (Lb.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function bo(e, t, n, i) {
      Ne = e;
      var o = 0;
      do {
        if (bh && (Kc = null), rp = 0, bh = !1, o >= rE)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, sp = !1, hl = Rt = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        $c = -1, X.H = Xb, f = e1(t, n, i);
      } while (bh);
      return f;
    }
    function jn() {
      var e = X.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? yc(t) : t, e = e.useState()[0], (Rt !== null ? Rt.memoizedState : null) !== e && (Ne.flags |= 1024), t;
    }
    function ln() {
      var e = vg !== 0;
      return vg = 0, e;
    }
    function Ou(e, t, n) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Zu) !== Ct ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~n;
    }
    function da(e) {
      if (gg) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        gg = !1;
      }
      ff = 0, su = hl = Rt = Ne = null, $c = -1, Q = null, bh = !1, rp = vg = 0, Kc = null;
    }
    function Bt() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return hl === null ? Ne.memoizedState = hl = e : hl = hl.next = e, hl;
    }
    function et() {
      if (Rt === null) {
        var e = Ne.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Rt.next;
      var t = hl === null ? Ne.memoizedState : hl.next;
      if (t !== null)
        hl = t, Rt = e;
      else {
        if (e === null)
          throw Ne.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        Rt = e, e = {
          memoizedState: Rt.memoizedState,
          baseState: Rt.baseState,
          baseQueue: Rt.baseQueue,
          queue: Rt.queue,
          next: null
        }, hl === null ? Ne.memoizedState = hl = e : hl = hl.next = e;
      }
      return hl;
    }
    function Ns() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function yc(e) {
      var t = rp;
      return rp += 1, Kc === null && (Kc = gm()), e = qn(Kc, e, t), t = Ne, (hl === null ? t.memoizedState : hl.next) === null && (t = t.alternate, X.H = t !== null && t.memoizedState !== null ? Iv : Pv), e;
    }
    function _a(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return yc(e);
        if (e.$$typeof === Kn) return Ot(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function Zt(e) {
      var t = null, n = Ne.updateQueue;
      if (n !== null && (t = n.memoCache), t == null) {
        var i = Ne.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), n === null && (n = Ns(), Ne.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0 || sp)
        for (n = t.data[t.index] = Array(e), i = 0; i < e; i++)
          n[i] = K0;
      else
        n.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          n.length,
          e
        );
      return t.index++, n;
    }
    function at(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function nt(e, t, n) {
      var i = Bt();
      if (n !== void 0) {
        var o = n(t);
        if (Fr) {
          $e(!0);
          try {
            n(t);
          } finally {
            $e(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = zm.bind(
        null,
        Ne,
        e
      ), [i.memoizedState, e];
    }
    function Ln(e) {
      var t = et();
      return Vn(t, Rt, e);
    }
    function Vn(e, t, n) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = n;
      var o = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var m = o.next;
          o.next = f.next, f.next = m;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, i.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var g = m = null, T = null, A = t, L = !1;
        do {
          var Z = A.lane & -536870913;
          if (Z !== A.lane ? (Ie & Z) === Z : (ff & Z) === Z) {
            var q = A.revertLane;
            if (q === 0)
              T !== null && (T = T.next = {
                lane: 0,
                revertLane: 0,
                action: A.action,
                hasEagerState: A.hasEagerState,
                eagerState: A.eagerState,
                next: null
              }), Z === Kr && (L = !0);
            else if ((ff & q) === q) {
              A = A.next, q === Kr && (L = !0);
              continue;
            } else
              Z = {
                lane: 0,
                revertLane: A.revertLane,
                action: A.action,
                hasEagerState: A.hasEagerState,
                eagerState: A.eagerState,
                next: null
              }, T === null ? (g = T = Z, m = f) : T = T.next = Z, Ne.lanes |= q, df |= q;
            Z = A.action, Fr && n(f, Z), f = A.hasEagerState ? A.eagerState : n(f, Z);
          } else
            q = {
              lane: Z,
              revertLane: A.revertLane,
              action: A.action,
              hasEagerState: A.hasEagerState,
              eagerState: A.eagerState,
              next: null
            }, T === null ? (g = T = q, m = f) : T = T.next = q, Ne.lanes |= Z, df |= Z;
          A = A.next;
        } while (A !== null && A !== t);
        if (T === null ? m = f : T.next = g, !Mn(f, e.memoizedState) && (ql = !0, L && (n = ph, n !== null)))
          throw n;
        e.memoizedState = f, e.baseState = m, e.baseQueue = T, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function pc(e) {
      var t = et(), n = t.queue;
      if (n === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      n.lastRenderedReducer = e;
      var i = n.dispatch, o = n.pending, f = t.memoizedState;
      if (o !== null) {
        n.pending = null;
        var m = o = o.next;
        do
          f = e(f, m.action), m = m.next;
        while (m !== o);
        Mn(f, t.memoizedState) || (ql = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), n.lastRenderedState = f;
      }
      return [f, i];
    }
    function Du(e, t, n) {
      var i = Ne, o = Bt();
      if (ct) {
        if (n === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = n();
        vh || f === n() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), vh = !0);
      } else {
        if (f = t(), vh || (n = t(), Mn(f, n) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), vh = !0)), Dt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (Ie & 124) !== 0 || Sm(i, t, f);
      }
      return o.memoizedState = f, n = { value: f, getSnapshot: t }, o.queue = n, Ys(
        To.bind(null, i, n, e),
        [e]
      ), i.flags |= 2048, Ba(
        ru | xl,
        gi(),
        So.bind(
          null,
          i,
          n,
          f,
          t
        ),
        null
      ), f;
    }
    function kf(e, t, n) {
      var i = Ne, o = et(), f = ct;
      if (f) {
        if (n === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        n = n();
      } else if (n = t(), !vh) {
        var m = t();
        Mn(n, m) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), vh = !0);
      }
      (m = !Mn(
        (Rt || o).memoizedState,
        n
      )) && (o.memoizedState = n, ql = !0), o = o.queue;
      var g = To.bind(null, i, o, e);
      if (el(2048, xl, g, [e]), o.getSnapshot !== t || m || hl !== null && hl.memoizedState.tag & ru) {
        if (i.flags |= 2048, Ba(
          ru | xl,
          gi(),
          So.bind(
            null,
            i,
            o,
            n,
            t
          ),
          null
        ), Dt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (ff & 124) !== 0 || Sm(i, t, n);
      }
      return n;
    }
    function Sm(e, t, n) {
      e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ne.updateQueue, t === null ? (t = Ns(), Ne.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
    }
    function So(e, t, n, i) {
      t.value = n, t.getSnapshot = i, Tm(t) && Eo(e);
    }
    function To(e, t, n) {
      return n(function() {
        Tm(t) && Eo(e);
      });
    }
    function Tm(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Mn(e, n);
      } catch {
        return !0;
      }
    }
    function Eo(e) {
      var t = Il(e, 2);
      t !== null && Yt(t, e, 2);
    }
    function Jf(e) {
      var t = Bt();
      if (typeof e == "function") {
        var n = e;
        if (e = n(), Fr) {
          $e(!0);
          try {
            n();
          } finally {
            $e(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: at,
        lastRenderedState: e
      }, t;
    }
    function xu(e) {
      e = Jf(e);
      var t = e.queue, n = Do.bind(null, Ne, t);
      return t.dispatch = n, [e.memoizedState, n];
    }
    function ha(e) {
      var t = Bt();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = Js.bind(
        null,
        Ne,
        !0,
        n
      ), n.dispatch = t, [e, t];
    }
    function zu(e, t) {
      var n = et();
      return Na(n, Rt, e, t);
    }
    function Na(e, t, n, i) {
      return e.baseState = n, Vn(
        e,
        Rt,
        typeof i == "function" ? i : at
      );
    }
    function Bs(e, t) {
      var n = et();
      return Rt !== null ? Na(n, Rt, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    }
    function Em(e, t, n, i, o) {
      if (er(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(m) {
            f.listeners.push(m);
          }
        };
        X.T !== null ? n(!0) : f.isTransition = !1, i(f), n = t.pending, n === null ? (f.next = t.pending = f, Ao(t, f)) : (f.next = n.next, t.pending = n.next = f);
      }
    }
    function Ao(e, t) {
      var n = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = X.T, m = {};
        X.T = m, X.T._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var g = n(o, i), T = X.S;
          T !== null && T(m, g), Kf(e, t, g);
        } catch (A) {
          ol(e, t, A);
        } finally {
          X.T = f, f === null && m._updatedFibers && (e = m._updatedFibers.size, m._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          m = n(o, i), Kf(e, t, m);
        } catch (A) {
          ol(e, t, A);
        }
    }
    function Kf(e, t, n) {
      n !== null && typeof n == "object" && typeof n.then == "function" ? (n.then(
        function(i) {
          pi(e, t, i);
        },
        function(i) {
          return ol(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : pi(e, t, n);
    }
    function pi(e, t, n) {
      t.status = "fulfilled", t.value = n, $f(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Ao(e, n)));
    }
    function ol(e, t, n) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = n, $f(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function $f(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Am(e, t) {
      return t;
    }
    function Ro(e, t) {
      if (ct) {
        var n = Dt.formState;
        if (n !== null) {
          e: {
            var i = Ne;
            if (ct) {
              if (Kt) {
                t: {
                  for (var o = Kt, f = Li; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = Al(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === D1 || f === VS ? o : null;
                }
                if (o) {
                  Kt = Al(
                    o.nextSibling
                  ), i = o.data === D1;
                  break e;
                }
              }
              Ma(i);
            }
            i = !1;
          }
          i && (t = n[0]);
        }
      }
      return n = Bt(), n.memoizedState = n.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Am,
        lastRenderedState: t
      }, n.queue = i, n = Do.bind(
        null,
        Ne,
        i
      ), i.dispatch = n, i = Jf(!1), f = Js.bind(
        null,
        Ne,
        !1,
        i.queue
      ), i = Bt(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, n = Em.bind(
        null,
        Ne,
        o,
        f,
        n
      ), o.dispatch = n, i.memoizedState = e, [t, n, !1];
    }
    function qs(e) {
      var t = et();
      return S0(t, Rt, e);
    }
    function S0(e, t, n) {
      if (t = Vn(
        e,
        t,
        Am
      )[0], e = Ln(at)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = yc(t);
        } catch (m) {
          throw m === op ? mg : m;
        }
      else i = t;
      t = et();
      var o = t.queue, f = o.dispatch;
      return n !== t.memoizedState && (Ne.flags |= 2048, Ba(
        ru | xl,
        gi(),
        It.bind(null, o, n),
        null
      )), [i, f, e];
    }
    function It(e, t) {
      e.action = t;
    }
    function Oo(e) {
      var t = et(), n = Rt;
      if (n !== null)
        return S0(t, n, e);
      et(), t = t.memoizedState, n = et();
      var i = n.queue.dispatch;
      return n.memoizedState = e, [t, i, !1];
    }
    function Ba(e, t, n, i) {
      return e = {
        tag: e,
        create: n,
        deps: i,
        inst: t,
        next: null
      }, t = Ne.updateQueue, t === null && (t = Ns(), Ne.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e), e;
    }
    function gi() {
      return { destroy: void 0, resource: void 0 };
    }
    function Wf(e) {
      var t = Bt();
      return e = { current: e }, t.memoizedState = e;
    }
    function Gn(e, t, n, i) {
      var o = Bt();
      i = i === void 0 ? null : i, Ne.flags |= e, o.memoizedState = Ba(
        ru | t,
        gi(),
        n,
        i
      );
    }
    function el(e, t, n, i) {
      var o = et();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      Rt !== null && i !== null && mi(i, Rt.memoizedState.deps) ? o.memoizedState = Ba(t, f, n, i) : (Ne.flags |= e, o.memoizedState = Ba(
        ru | t,
        f,
        n,
        i
      ));
    }
    function Ys(e, t) {
      (Ne.mode & Zu) !== Ct && (Ne.mode & Ob) === Ct ? Gn(276826112, xl, e, t) : Gn(8390656, xl, e, t);
    }
    function js(e, t) {
      var n = 4194308;
      return (Ne.mode & Zu) !== Ct && (n |= 134217728), Gn(n, Kl, e, t);
    }
    function T0(e, t) {
      if (typeof t == "function") {
        e = e();
        var n = t(e);
        return function() {
          typeof n == "function" ? n() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function Ls(e, t, n) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), n = n != null ? n.concat([e]) : null;
      var i = 4194308;
      (Ne.mode & Zu) !== Ct && (i |= 134217728), Gn(
        i,
        Kl,
        T0.bind(null, t, e),
        n
      );
    }
    function qa(e, t, n) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), n = n != null ? n.concat([e]) : null, el(
        4,
        Kl,
        T0.bind(null, t, e),
        n
      );
    }
    function Ff(e, t) {
      return Bt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function gc(e, t) {
      var n = et();
      t = t === void 0 ? null : t;
      var i = n.memoizedState;
      return t !== null && mi(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
    }
    function Vs(e, t) {
      var n = Bt();
      t = t === void 0 ? null : t;
      var i = e();
      if (Fr) {
        $e(!0);
        try {
          e();
        } finally {
          $e(!1);
        }
      }
      return n.memoizedState = [i, t], i;
    }
    function vi(e, t) {
      var n = et();
      t = t === void 0 ? null : t;
      var i = n.memoizedState;
      if (t !== null && mi(t, i[1]))
        return i[0];
      if (i = e(), Fr) {
        $e(!0);
        try {
          e();
        } finally {
          $e(!1);
        }
      }
      return n.memoizedState = [i, t], i;
    }
    function Gs(e, t) {
      var n = Bt();
      return Qs(n, e, t);
    }
    function Pf(e, t) {
      var n = et();
      return If(
        n,
        Rt.memoizedState,
        e,
        t
      );
    }
    function Xs(e, t) {
      var n = et();
      return Rt === null ? Qs(n, e, t) : If(
        n,
        Rt.memoizedState,
        e,
        t
      );
    }
    function Qs(e, t, n) {
      return n === void 0 || (ff & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = n, e = C0(), Ne.lanes |= e, df |= e, n);
    }
    function If(e, t, n, i) {
      return Mn(n, t) ? n : gh.current !== null ? (e = Qs(e, n, i), Mn(e, t) || (ql = !0), e) : (ff & 42) === 0 ? (ql = !0, e.memoizedState = n) : (e = C0(), Ne.lanes |= e, df |= e, t);
    }
    function Rm(e, t, n, i, o) {
      var f = Ce.p;
      Ce.p = f !== 0 && f < ba ? f : ba;
      var m = X.T, g = {};
      X.T = g, Js(e, !1, t, n), g._updatedFibers = /* @__PURE__ */ new Set();
      try {
        var T = o(), A = X.S;
        if (A !== null && A(g, T), T !== null && typeof T == "object" && typeof T.then == "function") {
          var L = g0(
            T,
            i
          );
          Mu(
            e,
            t,
            L,
            cn(e)
          );
        } else
          Mu(
            e,
            t,
            i,
            cn(e)
          );
      } catch (Z) {
        Mu(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: Z },
          cn(e)
        );
      } finally {
        Ce.p = f, X.T = m, m === null && g._updatedFibers && (e = g._updatedFibers.size, g._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function vc(e, t, n, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = Om(e).queue;
      Rm(
        e,
        o,
        t,
        os,
        n === null ? _ : function() {
          return Dm(e), n(i);
        }
      );
    }
    function Om(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: os,
        baseState: os,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: at,
          lastRenderedState: os
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
          lastRenderedReducer: at,
          lastRenderedState: n
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function Dm(e) {
      X.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = Om(e).next.queue;
      Mu(
        e,
        t,
        {},
        cn(e)
      );
    }
    function Ya() {
      var e = Jf(!1);
      return e = Rm.bind(
        null,
        Ne,
        e.queue,
        !0,
        !1
      ), Bt().memoizedState = e, [!1, e];
    }
    function Zs() {
      var e = Ln(at)[0], t = et().memoizedState;
      return [
        typeof e == "boolean" ? e : yc(e),
        t
      ];
    }
    function ks() {
      var e = pc(at)[0], t = et().memoizedState;
      return [
        typeof e == "boolean" ? e : yc(e),
        t
      ];
    }
    function nn() {
      return Ot(zp);
    }
    function ja() {
      var e = Bt(), t = Dt.identifierPrefix;
      if (ct) {
        var n = kc, i = Zc;
        n = (i & ~(1 << 32 - Nl(i) - 1)).toString(32) + n, t = "«" + t + "R" + n, n = vg++, 0 < n && (t += "H" + n.toString(32)), t += "»";
      } else
        n = fE++, t = "«" + t + "r" + n.toString(32) + "»";
      return e.memoizedState = t;
    }
    function bc() {
      return Bt().memoizedState = xm.bind(
        null,
        Ne
      );
    }
    function xm(e, t) {
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case 24:
          case 3:
            var i = cn(n);
            e = Ha(i);
            var o = ra(n, e, i);
            o !== null && (Yt(o, n, i), hi(o, n, i)), n = Gf(), t != null && o !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), e.payload = { cache: n };
            return;
        }
        n = n.return;
      }
    }
    function zm(e, t, n) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = cn(e);
      var o = {
        lane: i,
        revertLane: 0,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      er(e) ? Sc(t, o) : (o = lm(e, t, o, i), o !== null && (Yt(o, e, i), tr(o, t, i))), na(e, i);
    }
    function Do(e, t, n) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = cn(e), Mu(e, t, n, i), na(e, i);
    }
    function Mu(e, t, n, i) {
      var o = {
        lane: i,
        revertLane: 0,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (er(e)) Sc(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var m = X.H;
          X.H = Ju;
          try {
            var g = t.lastRenderedState, T = f(g, n);
            if (o.hasEagerState = !0, o.eagerState = T, Mn(T, g))
              return xs(e, t, o, 0), Dt === null && qf(), !1;
          } catch {
          } finally {
            X.H = m;
          }
        }
        if (n = lm(e, t, o, i), n !== null)
          return Yt(n, e, i), tr(n, t, i), !0;
      }
      return !1;
    }
    function Js(e, t, n, i) {
      if (X.T === null && Kr === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: uy(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, er(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = lm(
          e,
          n,
          i,
          2
        ), t !== null && Yt(t, e, 2);
      na(e, 2);
    }
    function er(e) {
      var t = e.alternate;
      return e === Ne || t !== null && t === Ne;
    }
    function Sc(e, t) {
      bh = gg = !0;
      var n = e.pending;
      n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function tr(e, t, n) {
      if ((n & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, n |= i, t.lanes = n, no(e, n);
      }
    }
    function fl(e) {
      var t = ke;
      return e != null && (ke = t === null ? e : t.concat(e)), t;
    }
    function xo(e, t, n) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = Lf(e, n.mode, 0), t._debugInfo = ke, t.return = n), pe(
            t,
            function(m) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                m
              );
            },
            f
          );
          break;
        }
      }
    }
    function zo(e) {
      var t = dp;
      return dp += 1, Sh === null && (Sh = gm()), qn(Sh, e, t);
    }
    function Xn(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function Be(e, t) {
      throw t.$$typeof === Cr ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function ot(e, t) {
      var n = Se(e) || "Component";
      aS[n] || (aS[n] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        n,
        t,
        n
      ));
    }
    function _t(e, t) {
      var n = Se(e) || "Component";
      uS[n] || (uS[n] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        n,
        t,
        n
      ));
    }
    function lr(e) {
      function t(D, x) {
        if (e) {
          var z = D.deletions;
          z === null ? (D.deletions = [x], D.flags |= 16) : z.push(x);
        }
      }
      function n(D, x) {
        if (!e) return null;
        for (; x !== null; )
          t(D, x), x = x.sibling;
        return null;
      }
      function i(D) {
        for (var x = /* @__PURE__ */ new Map(); D !== null; )
          D.key !== null ? x.set(D.key, D) : x.set(D.index, D), D = D.sibling;
        return x;
      }
      function o(D, x) {
        return D = za(D, x), D.index = 0, D.sibling = null, D;
      }
      function f(D, x, z) {
        return D.index = z, e ? (z = D.alternate, z !== null ? (z = z.index, z < x ? (D.flags |= 67108866, x) : z) : (D.flags |= 67108866, x)) : (D.flags |= 1048576, x);
      }
      function m(D) {
        return e && D.alternate === null && (D.flags |= 67108866), D;
      }
      function g(D, x, z, K) {
        return x === null || x.tag !== 6 ? (x = ci(
          z,
          D.mode,
          K
        ), x.return = D, x._debugOwner = D, x._debugTask = D._debugTask, x._debugInfo = ke, x) : (x = o(x, z), x.return = D, x._debugInfo = ke, x);
      }
      function T(D, x, z, K) {
        var oe = z.type;
        return oe === qe ? (x = L(
          D,
          x,
          z.props.children,
          K,
          z.key
        ), xo(z, x, D), x) : x !== null && (x.elementType === oe || h0(x, z) || typeof oe == "object" && oe !== null && oe.$$typeof === xn && rf(oe) === x.type) ? (x = o(x, z.props), Xn(x, z), x.return = D, x._debugOwner = z._owner, x._debugInfo = ke, x) : (x = Lf(z, D.mode, K), Xn(x, z), x.return = D, x._debugInfo = ke, x);
      }
      function A(D, x, z, K) {
        return x === null || x.tag !== 4 || x.stateNode.containerInfo !== z.containerInfo || x.stateNode.implementation !== z.implementation ? (x = im(z, D.mode, K), x.return = D, x._debugInfo = ke, x) : (x = o(x, z.children || []), x.return = D, x._debugInfo = ke, x);
      }
      function L(D, x, z, K, oe) {
        return x === null || x.tag !== 7 ? (x = ii(
          z,
          D.mode,
          K,
          oe
        ), x.return = D, x._debugOwner = D, x._debugTask = D._debugTask, x._debugInfo = ke, x) : (x = o(x, z), x.return = D, x._debugInfo = ke, x);
      }
      function Z(D, x, z) {
        if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
          return x = ci(
            "" + x,
            D.mode,
            z
          ), x.return = D, x._debugOwner = D, x._debugTask = D._debugTask, x._debugInfo = ke, x;
        if (typeof x == "object" && x !== null) {
          switch (x.$$typeof) {
            case Ci:
              return z = Lf(
                x,
                D.mode,
                z
              ), Xn(z, x), z.return = D, D = fl(x._debugInfo), z._debugInfo = ke, ke = D, z;
            case jc:
              return x = im(
                x,
                D.mode,
                z
              ), x.return = D, x._debugInfo = ke, x;
            case xn:
              var K = fl(x._debugInfo);
              return x = rf(x), D = Z(D, x, z), ke = K, D;
          }
          if (_e(x) || Te(x))
            return z = ii(
              x,
              D.mode,
              z,
              null
            ), z.return = D, z._debugOwner = D, z._debugTask = D._debugTask, D = fl(x._debugInfo), z._debugInfo = ke, ke = D, z;
          if (typeof x.then == "function")
            return K = fl(x._debugInfo), D = Z(
              D,
              zo(x),
              z
            ), ke = K, D;
          if (x.$$typeof === Kn)
            return Z(
              D,
              Vf(D, x),
              z
            );
          Be(D, x);
        }
        return typeof x == "function" && ot(D, x), typeof x == "symbol" && _t(D, x), null;
      }
      function q(D, x, z, K) {
        var oe = x !== null ? x.key : null;
        if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
          return oe !== null ? null : g(D, x, "" + z, K);
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case Ci:
              return z.key === oe ? (oe = fl(z._debugInfo), D = T(
                D,
                x,
                z,
                K
              ), ke = oe, D) : null;
            case jc:
              return z.key === oe ? A(D, x, z, K) : null;
            case xn:
              return oe = fl(z._debugInfo), z = rf(z), D = q(
                D,
                x,
                z,
                K
              ), ke = oe, D;
          }
          if (_e(z) || Te(z))
            return oe !== null ? null : (oe = fl(z._debugInfo), D = L(
              D,
              x,
              z,
              K,
              null
            ), ke = oe, D);
          if (typeof z.then == "function")
            return oe = fl(z._debugInfo), D = q(
              D,
              x,
              zo(z),
              K
            ), ke = oe, D;
          if (z.$$typeof === Kn)
            return q(
              D,
              x,
              Vf(D, z),
              K
            );
          Be(D, z);
        }
        return typeof z == "function" && ot(D, z), typeof z == "symbol" && _t(D, z), null;
      }
      function J(D, x, z, K, oe) {
        if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
          return D = D.get(z) || null, g(x, D, "" + K, oe);
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case Ci:
              return z = D.get(
                K.key === null ? z : K.key
              ) || null, D = fl(K._debugInfo), x = T(
                x,
                z,
                K,
                oe
              ), ke = D, x;
            case jc:
              return D = D.get(
                K.key === null ? z : K.key
              ) || null, A(x, D, K, oe);
            case xn:
              var Ye = fl(K._debugInfo);
              return K = rf(K), x = J(
                D,
                x,
                z,
                K,
                oe
              ), ke = Ye, x;
          }
          if (_e(K) || Te(K))
            return z = D.get(z) || null, D = fl(K._debugInfo), x = L(
              x,
              z,
              K,
              oe,
              null
            ), ke = D, x;
          if (typeof K.then == "function")
            return Ye = fl(K._debugInfo), x = J(
              D,
              x,
              z,
              zo(K),
              oe
            ), ke = Ye, x;
          if (K.$$typeof === Kn)
            return J(
              D,
              x,
              z,
              Vf(x, K),
              oe
            );
          Be(x, K);
        }
        return typeof K == "function" && ot(x, K), typeof K == "symbol" && _t(x, K), null;
      }
      function ge(D, x, z, K) {
        if (typeof z != "object" || z === null) return K;
        switch (z.$$typeof) {
          case Ci:
          case jc:
            w(D, x, z);
            var oe = z.key;
            if (typeof oe != "string") break;
            if (K === null) {
              K = /* @__PURE__ */ new Set(), K.add(oe);
              break;
            }
            if (!K.has(oe)) {
              K.add(oe);
              break;
            }
            pe(x, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                oe
              );
            });
            break;
          case xn:
            z = rf(z), ge(D, x, z, K);
        }
        return K;
      }
      function He(D, x, z, K) {
        for (var oe = null, Ye = null, ve = null, je = x, Le = x = 0, Ht = null; je !== null && Le < z.length; Le++) {
          je.index > Le ? (Ht = je, je = null) : Ht = je.sibling;
          var al = q(
            D,
            je,
            z[Le],
            K
          );
          if (al === null) {
            je === null && (je = Ht);
            break;
          }
          oe = ge(
            D,
            al,
            z[Le],
            oe
          ), e && je && al.alternate === null && t(D, je), x = f(al, x, Le), ve === null ? Ye = al : ve.sibling = al, ve = al, je = Ht;
        }
        if (Le === z.length)
          return n(D, je), ct && fc(D, Le), Ye;
        if (je === null) {
          for (; Le < z.length; Le++)
            je = Z(D, z[Le], K), je !== null && (oe = ge(
              D,
              je,
              z[Le],
              oe
            ), x = f(
              je,
              x,
              Le
            ), ve === null ? Ye = je : ve.sibling = je, ve = je);
          return ct && fc(D, Le), Ye;
        }
        for (je = i(je); Le < z.length; Le++)
          Ht = J(
            je,
            D,
            Le,
            z[Le],
            K
          ), Ht !== null && (oe = ge(
            D,
            Ht,
            z[Le],
            oe
          ), e && Ht.alternate !== null && je.delete(
            Ht.key === null ? Le : Ht.key
          ), x = f(
            Ht,
            x,
            Le
          ), ve === null ? Ye = Ht : ve.sibling = Ht, ve = Ht);
        return e && je.forEach(function(to) {
          return t(D, to);
        }), ct && fc(D, Le), Ye;
      }
      function xt(D, x, z, K) {
        if (z == null)
          throw Error("An iterable object provided no iterator.");
        for (var oe = null, Ye = null, ve = x, je = x = 0, Le = null, Ht = null, al = z.next(); ve !== null && !al.done; je++, al = z.next()) {
          ve.index > je ? (Le = ve, ve = null) : Le = ve.sibling;
          var to = q(D, ve, al.value, K);
          if (to === null) {
            ve === null && (ve = Le);
            break;
          }
          Ht = ge(
            D,
            to,
            al.value,
            Ht
          ), e && ve && to.alternate === null && t(D, ve), x = f(to, x, je), Ye === null ? oe = to : Ye.sibling = to, Ye = to, ve = Le;
        }
        if (al.done)
          return n(D, ve), ct && fc(D, je), oe;
        if (ve === null) {
          for (; !al.done; je++, al = z.next())
            ve = Z(D, al.value, K), ve !== null && (Ht = ge(
              D,
              ve,
              al.value,
              Ht
            ), x = f(
              ve,
              x,
              je
            ), Ye === null ? oe = ve : Ye.sibling = ve, Ye = ve);
          return ct && fc(D, je), oe;
        }
        for (ve = i(ve); !al.done; je++, al = z.next())
          Le = J(
            ve,
            D,
            je,
            al.value,
            K
          ), Le !== null && (Ht = ge(
            D,
            Le,
            al.value,
            Ht
          ), e && Le.alternate !== null && ve.delete(
            Le.key === null ? je : Le.key
          ), x = f(
            Le,
            x,
            je
          ), Ye === null ? oe = Le : Ye.sibling = Le, Ye = Le);
        return e && ve.forEach(function(BE) {
          return t(D, BE);
        }), ct && fc(D, je), oe;
      }
      function tt(D, x, z, K) {
        if (typeof z == "object" && z !== null && z.type === qe && z.key === null && (xo(z, null, D), z = z.props.children), typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case Ci:
              var oe = fl(z._debugInfo);
              e: {
                for (var Ye = z.key; x !== null; ) {
                  if (x.key === Ye) {
                    if (Ye = z.type, Ye === qe) {
                      if (x.tag === 7) {
                        n(
                          D,
                          x.sibling
                        ), K = o(
                          x,
                          z.props.children
                        ), K.return = D, K._debugOwner = z._owner, K._debugInfo = ke, xo(z, K, D), D = K;
                        break e;
                      }
                    } else if (x.elementType === Ye || h0(
                      x,
                      z
                    ) || typeof Ye == "object" && Ye !== null && Ye.$$typeof === xn && rf(Ye) === x.type) {
                      n(
                        D,
                        x.sibling
                      ), K = o(x, z.props), Xn(K, z), K.return = D, K._debugOwner = z._owner, K._debugInfo = ke, D = K;
                      break e;
                    }
                    n(D, x);
                    break;
                  } else t(D, x);
                  x = x.sibling;
                }
                z.type === qe ? (K = ii(
                  z.props.children,
                  D.mode,
                  K,
                  z.key
                ), K.return = D, K._debugOwner = D, K._debugTask = D._debugTask, K._debugInfo = ke, xo(z, K, D), D = K) : (K = Lf(
                  z,
                  D.mode,
                  K
                ), Xn(K, z), K.return = D, K._debugInfo = ke, D = K);
              }
              return D = m(D), ke = oe, D;
            case jc:
              e: {
                for (oe = z, z = oe.key; x !== null; ) {
                  if (x.key === z)
                    if (x.tag === 4 && x.stateNode.containerInfo === oe.containerInfo && x.stateNode.implementation === oe.implementation) {
                      n(
                        D,
                        x.sibling
                      ), K = o(
                        x,
                        oe.children || []
                      ), K.return = D, D = K;
                      break e;
                    } else {
                      n(D, x);
                      break;
                    }
                  else t(D, x);
                  x = x.sibling;
                }
                K = im(
                  oe,
                  D.mode,
                  K
                ), K.return = D, D = K;
              }
              return m(D);
            case xn:
              return oe = fl(z._debugInfo), z = rf(z), D = tt(
                D,
                x,
                z,
                K
              ), ke = oe, D;
          }
          if (_e(z))
            return oe = fl(z._debugInfo), D = He(
              D,
              x,
              z,
              K
            ), ke = oe, D;
          if (Te(z)) {
            if (oe = fl(z._debugInfo), Ye = Te(z), typeof Ye != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var ve = Ye.call(z);
            return ve === z ? (D.tag !== 0 || Object.prototype.toString.call(D.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(ve) !== "[object Generator]") && (lS || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), lS = !0) : z.entries !== Ye || l1 || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), l1 = !0), D = xt(
              D,
              x,
              ve,
              K
            ), ke = oe, D;
          }
          if (typeof z.then == "function")
            return oe = fl(z._debugInfo), D = tt(
              D,
              x,
              zo(z),
              K
            ), ke = oe, D;
          if (z.$$typeof === Kn)
            return tt(
              D,
              x,
              Vf(D, z),
              K
            );
          Be(D, z);
        }
        return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (oe = "" + z, x !== null && x.tag === 6 ? (n(
          D,
          x.sibling
        ), K = o(x, oe), K.return = D, D = K) : (n(D, x), K = ci(
          oe,
          D.mode,
          K
        ), K.return = D, K._debugOwner = D, K._debugTask = D._debugTask, K._debugInfo = ke, D = K), m(D)) : (typeof z == "function" && ot(D, z), typeof z == "symbol" && _t(D, z), n(D, x));
      }
      return function(D, x, z, K) {
        var oe = ke;
        ke = null;
        try {
          dp = 0;
          var Ye = tt(
            D,
            x,
            z,
            K
          );
          return Sh = null, Ye;
        } catch (Ht) {
          if (Ht === op || Ht === mg) throw Ht;
          var ve = ie(29, Ht, null, D.mode);
          ve.lanes = K, ve.return = D;
          var je = ve._debugInfo = ke;
          if (ve._debugOwner = D._debugOwner, ve._debugTask = D._debugTask, je != null) {
            for (var Le = je.length - 1; 0 <= Le; Le--)
              if (typeof je[Le].stack == "string") {
                ve._debugOwner = je[Le], ve._debugTask = je[Le].debugTask;
                break;
              }
          }
          return ve;
        } finally {
          ke = oe;
        }
      };
    }
    function En(e) {
      var t = e.alternate;
      we(
        zl,
        zl.current & Eh,
        e
      ), we(du, e, e), Gi === null && (t === null || gh.current !== null || t.memoizedState !== null) && (Gi = e);
    }
    function bi(e) {
      if (e.tag === 22) {
        if (we(zl, zl.current, e), we(du, e, e), Gi === null) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (Gi = e);
        }
      } else ma(e);
    }
    function ma(e) {
      we(zl, zl.current, e), we(
        du,
        du.current,
        e
      );
    }
    function An(e) {
      Je(du, e), Gi === e && (Gi = null), Je(zl, e);
    }
    function Uu(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && (n = n.dehydrated, n === null || n.data === Pc || Pa(n)))
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
    function Mm(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        gS.has(t) || (gS.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function Nt(e, t, n, i) {
      var o = e.memoizedState, f = n(i, o);
      if (e.mode & mn) {
        $e(!0);
        try {
          f = n(i, o);
        } finally {
          $e(!1);
        }
      }
      f === void 0 && (t = de(t) || "Component", hS.has(t) || (hS.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : Ge({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Ks(e, t, n, i, o, f, m) {
      var g = e.stateNode;
      if (typeof g.shouldComponentUpdate == "function") {
        if (n = g.shouldComponentUpdate(
          i,
          f,
          m
        ), e.mode & mn) {
          $e(!0);
          try {
            n = g.shouldComponentUpdate(
              i,
              f,
              m
            );
          } finally {
            $e(!1);
          }
        }
        return n === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          de(t) || "Component"
        ), n;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Bf(n, i) || !Bf(o, f) : !0;
    }
    function $s(e, t, n, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== o && (e = Se(e) || "Component", oS.has(e) || (oS.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), n1.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function Si(e, t) {
      var n = t;
      if ("ref" in t) {
        n = {};
        for (var i in t)
          i !== "ref" && (n[i] = t[i]);
      }
      if (e = e.defaultProps) {
        n === t && (n = Ge({}, n));
        for (var o in e)
          n[o] === void 0 && (n[o] = e[o]);
      }
      return n;
    }
    function Um(e) {
      a1(e), console.warn(
        `%s

%s
`,
        Ah ? "An error occurred in the <" + Ah + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function E0(e) {
      var t = Ah ? "The above error occurred in the <" + Ah + "> component." : "The above error occurred in one of your React components.", n = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((u1 || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          n
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          $S + e[0],
          WS,
          Yg + i + Yg,
          FS
        ) : e.splice(
          0,
          0,
          $S,
          WS,
          Yg + i + Yg,
          FS
        ), e.unshift(console), i = _E.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          n
        );
    }
    function Ws(e) {
      a1(e);
    }
    function Mo(e, t) {
      try {
        Ah = t.source ? Se(t.source) : null, u1 = null;
        var n = t.value;
        if (X.actQueue !== null)
          X.thrownErrors.push(n);
        else {
          var i = e.onUncaughtError;
          i(n, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Fs(e, t, n) {
      try {
        Ah = n.source ? Se(n.source) : null, u1 = Se(t);
        var i = e.onCaughtError;
        i(n.value, {
          componentStack: n.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Hl(e, t, n) {
      return n = Ha(n), n.tag = Kv, n.payload = { element: null }, n.callback = function() {
        pe(t.source, Mo, e, t);
      }, n;
    }
    function qt(e) {
      return e = Ha(e), e.tag = Kv, e;
    }
    function nr(e, t, n, i) {
      var o = n.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          m0(n), pe(
            i.source,
            Fs,
            t,
            n,
            i
          );
        };
      }
      var m = n.stateNode;
      m !== null && typeof m.componentDidCatch == "function" && (e.callback = function() {
        m0(n), pe(
          i.source,
          Fs,
          t,
          n,
          i
        ), typeof o != "function" && (mf === null ? mf = /* @__PURE__ */ new Set([this]) : mf.add(this)), sE(this, i), typeof o == "function" || (n.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          Se(n) || "Unknown"
        );
      });
    }
    function ar(e, t, n, i, o) {
      if (n.flags |= 32768, Xt && qo(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = n.alternate, t !== null && bl(
          t,
          n,
          o,
          !0
        ), ct && (Jc = !0), n = du.current, n !== null) {
          switch (n.tag) {
            case 13:
              return Gi === null ? gd() : n.alternate === null && $t === Fc && ($t = f1), n.flags &= -257, n.flags |= 65536, n.lanes = o, i === Jv ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), ty(e, i, o)), !1;
            case 22:
              return n.flags |= 65536, i === Jv ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : n.add(i)), ty(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + n.tag + "). This is a bug in React."
          );
        }
        return ty(e, i, o), gd(), !1;
      }
      if (ct)
        return Jc = !0, t = du.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== Xv && ho(
          Sn(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            n
          )
        )) : (i !== Xv && ho(
          Sn(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            n
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = Sn(i, n), o = Hl(
          e.stateNode,
          i,
          o
        ), yo(e, o), $t !== Pr && ($t = xh)), !1;
      var f = Sn(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        n
      );
      if (Sp === null ? Sp = [f] : Sp.push(f), $t !== Pr && ($t = xh), t === null) return !0;
      i = Sn(i, n), n = t;
      do {
        switch (n.tag) {
          case 3:
            return n.flags |= 65536, e = o & -o, n.lanes |= e, e = Hl(
              n.stateNode,
              i,
              e
            ), yo(n, e), !1;
          case 1:
            if (t = n.type, f = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (mf === null || !mf.has(f))))
              return n.flags |= 65536, o &= -o, n.lanes |= o, o = qt(o), nr(
                o,
                e,
                n,
                i
              ), yo(n, o), !1;
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    function Jt(e, t, n, i) {
      t.child = e === null ? iS(t, null, n, i) : Th(
        t,
        e.child,
        n,
        i
      );
    }
    function Ps(e, t, n, i, o) {
      n = n.render;
      var f = t.ref;
      if ("ref" in i) {
        var m = {};
        for (var g in i)
          g !== "ref" && (m[g] = i[g]);
      } else m = i;
      return ri(t), Wt(t), i = yi(
        e,
        t,
        n,
        m,
        f,
        o
      ), g = ln(), Fl(), e !== null && !ql ? (Ou(e, t, o), Va(e, t, o)) : (ct && g && Us(t), t.flags |= 1, Jt(e, t, i, o), t.child);
    }
    function La(e, t, n, i, o) {
      if (e === null) {
        var f = n.type;
        return typeof f == "function" && !am(f) && f.defaultProps === void 0 && n.compare === null ? (n = oc(f), t.tag = 15, t.type = n, ld(t, f), ur(
          e,
          t,
          n,
          i,
          o
        )) : (e = Ms(
          n.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !od(e, o)) {
        var m = f.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Bf, n(m, i) && e.ref === t.ref)
          return Va(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = za(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function ur(e, t, n, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (Bf(f, i) && e.ref === t.ref && t.type === e.type)
          if (ql = !1, t.pendingProps = i = f, od(e, o))
            (e.flags & 131072) !== 0 && (ql = !0);
          else
            return t.lanes = e.lanes, Va(e, t, o);
      }
      return td(
        e,
        t,
        n,
        i,
        o
      );
    }
    function Is(e, t, n) {
      var i = t.pendingProps, o = i.children, f = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (i = f !== null ? f.baseLanes | n : n, e !== null) {
            for (o = t.child = e.child, f = 0; o !== null; )
              f = f | o.lanes | o.childLanes, o = o.sibling;
            t.childLanes = f & ~i;
          } else t.childLanes = 0, t.child = null;
          return ed(
            e,
            t,
            i,
            n
          );
        }
        if ((n & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && _s(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? tn(t, f) : Qf(t), bi(t);
        else
          return t.lanes = t.childLanes = 536870912, ed(
            e,
            t,
            f !== null ? f.baseLanes | n : n,
            n
          );
      } else
        f !== null ? (_s(t, f.cachePool), tn(t, f), ma(t), t.memoizedState = null) : (e !== null && _s(t, null), Qf(t), ma(t));
      return Jt(e, t, o, n), t.child;
    }
    function ed(e, t, n, i) {
      var o = pm();
      return o = o === null ? null : {
        parent: Dl._currentValue,
        pool: o
      }, t.memoizedState = {
        baseLanes: n,
        cachePool: o
      }, e !== null && _s(t, null), Qf(t), bi(t), e !== null && bl(e, t, i, !0), null;
    }
    function ir(e, t) {
      var n = t.ref;
      if (n === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != "function" && typeof n != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function td(e, t, n, i, o) {
      if (n.prototype && typeof n.prototype.render == "function") {
        var f = de(n) || "Unknown";
        bS[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), bS[f] = !0);
      }
      return t.mode & mn && ku.recordLegacyContextWarning(
        t,
        null
      ), e === null && (ld(t, t.type), n.contextTypes && (f = de(n) || "Unknown", TS[f] || (TS[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), ri(t), Wt(t), n = yi(
        e,
        t,
        n,
        i,
        void 0,
        o
      ), i = ln(), Fl(), e !== null && !ql ? (Ou(e, t, o), Va(e, t, o)) : (ct && i && Us(t), t.flags |= 1, Jt(e, t, n, o), t.child);
    }
    function Cm(e, t, n, i, o, f) {
      return ri(t), Wt(t), $c = -1, sp = e !== null && e.type !== t.type, t.updateQueue = null, n = bo(
        t,
        i,
        n,
        o
      ), Zf(e, t), i = ln(), Fl(), e !== null && !ql ? (Ou(e, t, f), Va(e, t, f)) : (ct && i && Us(t), t.flags |= 1, Jt(e, t, n, f), t.child);
    }
    function Hm(e, t, n, i, o) {
      switch (R(t)) {
        case !1:
          var f = t.stateNode, m = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, m, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var g = o & -o;
          if (t.lanes |= g, m = Dt, m === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          g = qt(g), nr(
            g,
            m,
            t,
            Sn(f, t)
          ), yo(t, g);
      }
      if (ri(t), t.stateNode === null) {
        if (m = cf, f = n.contextType, "contextType" in n && f !== null && (f === void 0 || f.$$typeof !== Kn) && !pS.has(n) && (pS.add(n), g = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === Qd ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          de(n) || "Component",
          g
        )), typeof f == "object" && f !== null && (m = Ot(f)), f = new n(i, m), t.mode & mn) {
          $e(!0);
          try {
            f = new n(i, m);
          } finally {
            $e(!1);
          }
        }
        if (m = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = n1, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = cS, typeof n.getDerivedStateFromProps == "function" && m === null && (m = de(n) || "Component", fS.has(m) || (fS.add(m), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          m,
          f.state === null ? "null" : "undefined",
          m
        ))), typeof n.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var T = g = m = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? m = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (m = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? g = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (g = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? T = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (T = "UNSAFE_componentWillUpdate"), m !== null || g !== null || T !== null) {
            f = de(n) || "Component";
            var A = typeof n.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            sS.has(f) || (sS.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              A,
              m !== null ? `
  ` + m : "",
              g !== null ? `
  ` + g : "",
              T !== null ? `
  ` + T : ""
            ));
          }
        }
        f = t.stateNode, m = de(n) || "Component", f.render || (n.prototype && typeof n.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          m
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          m
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          m
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          m
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          m
        ), n.childContextTypes && !yS.has(n) && (yS.add(n), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          m
        )), n.contextTypes && !mS.has(n) && (mS.add(n), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          m
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          m
        ), n.prototype && n.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          de(n) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          m
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          m
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          m
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          m
        ), g = f.props !== i, f.props !== void 0 && g && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          m
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          m,
          m
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || rS.has(n) || (rS.add(n), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          de(n)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          m
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          m
        ), typeof n.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          m
        ), (g = f.state) && (typeof g != "object" || _e(g)) && console.error("%s.state: must be set to an object or null", m), typeof f.getChildContext == "function" && typeof n.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          m
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, en(t), m = n.contextType, f.context = typeof m == "object" && m !== null ? Ot(m) : cf, f.state === i && (m = de(n) || "Component", dS.has(m) || (dS.add(m), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          m
        ))), t.mode & mn && ku.recordLegacyContextWarning(
          t,
          f
        ), ku.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, m = n.getDerivedStateFromProps, typeof m == "function" && (Nt(
          t,
          n,
          m,
          i
        ), f.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (m = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), m !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          Se(t) || "Component"
        ), n1.enqueueReplaceState(
          f,
          f.state,
          null
        )), po(t, i, f, o), wa(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Zu) !== Ct && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var L = t.memoizedProps;
        g = Si(n, L), f.props = g;
        var Z = f.context;
        T = n.contextType, m = cf, typeof T == "object" && T !== null && (m = Ot(T)), A = n.getDerivedStateFromProps, T = typeof A == "function" || typeof f.getSnapshotBeforeUpdate == "function", L = t.pendingProps !== L, T || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (L || Z !== m) && $s(
          t,
          f,
          i,
          m
        ), of = !1;
        var q = t.memoizedState;
        f.state = q, po(t, i, f, o), wa(), Z = t.memoizedState, L || q !== Z || of ? (typeof A == "function" && (Nt(
          t,
          n,
          A,
          i
        ), Z = t.memoizedState), (g = of || Ks(
          t,
          n,
          g,
          i,
          q,
          Z,
          m
        )) ? (T || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Zu) !== Ct && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Zu) !== Ct && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = Z), f.props = i, f.state = Z, f.context = m, f = g) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Zu) !== Ct && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, di(e, t), m = t.memoizedProps, T = Si(n, m), f.props = T, A = t.pendingProps, q = f.context, Z = n.contextType, g = cf, typeof Z == "object" && Z !== null && (g = Ot(Z)), L = n.getDerivedStateFromProps, (Z = typeof L == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (m !== A || q !== g) && $s(
          t,
          f,
          i,
          g
        ), of = !1, q = t.memoizedState, f.state = q, po(t, i, f, o), wa();
        var J = t.memoizedState;
        m !== A || q !== J || of || e !== null && e.dependencies !== null && fi(e.dependencies) ? (typeof L == "function" && (Nt(
          t,
          n,
          L,
          i
        ), J = t.memoizedState), (T = of || Ks(
          t,
          n,
          T,
          i,
          q,
          J,
          g
        ) || e !== null && e.dependencies !== null && fi(e.dependencies)) ? (Z || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, J, g), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          J,
          g
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || m === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = J), f.props = i, f.state = J, f.context = g, f = T) : (typeof f.componentDidUpdate != "function" || m === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (g = f, ir(e, t), m = (t.flags & 128) !== 0, g || m) {
        if (g = t.stateNode, Df(t), m && typeof n.getDerivedStateFromError != "function")
          n = null, Fn = -1;
        else {
          if (Wt(t), n = kb(g), t.mode & mn) {
            $e(!0);
            try {
              kb(g);
            } finally {
              $e(!1);
            }
          }
          Fl();
        }
        t.flags |= 1, e !== null && m ? (t.child = Th(
          t,
          e.child,
          null,
          o
        ), t.child = Th(
          t,
          null,
          n,
          o
        )) : Jt(e, t, n, o), t.memoizedState = g.state, e = t.child;
      } else
        e = Va(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (Rh || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        Se(t) || "a component"
      ), Rh = !0), e;
    }
    function wm(e, t, n, i) {
      return sc(), t.flags |= 256, Jt(e, t, n, i), t.child;
    }
    function ld(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = de(t) || "Unknown", ES[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), ES[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = de(t) || "Unknown", SS[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), SS[t] = !0));
    }
    function cr(e) {
      return { baseLanes: e, cachePool: v0() };
    }
    function nd(e, t, n) {
      return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Ea), e;
    }
    function A0(e, t, n) {
      var i, o = t.pendingProps;
      E(t) && (t.flags |= 128);
      var f = !1, m = (t.flags & 128) !== 0;
      if ((i = m) || (i = e !== null && e.memoizedState === null ? !1 : (zl.current & hp) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (ct) {
          if (f ? En(t) : ma(t), ct) {
            var g = Kt, T;
            if (!(T = !g)) {
              e: {
                var A = g;
                for (T = Li; A.nodeType !== 8; ) {
                  if (!T) {
                    T = null;
                    break e;
                  }
                  if (A = Al(A.nextSibling), A === null) {
                    T = null;
                    break e;
                  }
                }
                T = A;
              }
              T !== null ? (ia(), t.memoizedState = {
                dehydrated: T,
                treeContext: Zr !== null ? { id: Zc, overflow: kc } : null,
                retryLane: 536870912,
                hydrationErrors: null
              }, A = ie(18, null, null, Ct), A.stateNode = T, A.return = t, t.child = A, Un = t, Kt = null, T = !0) : T = !1, T = !T;
            }
            T && (cm(
              t,
              g
            ), Ma(t));
          }
          if (g = t.memoizedState, g !== null && (g = g.dehydrated, g !== null))
            return Pa(g) ? t.lanes = 32 : t.lanes = 536870912, null;
          An(t);
        }
        return g = o.children, o = o.fallback, f ? (ma(t), f = t.mode, g = or(
          {
            mode: "hidden",
            children: g
          },
          f
        ), o = ii(
          o,
          f,
          n,
          null
        ), g.return = t, o.return = t, g.sibling = o, t.child = g, f = t.child, f.memoizedState = cr(n), f.childLanes = nd(
          e,
          i,
          n
        ), t.memoizedState = c1, o) : (En(t), ad(
          t,
          g
        ));
      }
      var L = e.memoizedState;
      if (L !== null && (g = L.dehydrated, g !== null)) {
        if (m)
          t.flags & 256 ? (En(t), t.flags &= -257, t = ud(
            e,
            t,
            n
          )) : t.memoizedState !== null ? (ma(t), t.child = e.child, t.flags |= 128, t = null) : (ma(t), f = o.fallback, g = t.mode, o = or(
            {
              mode: "visible",
              children: o.children
            },
            g
          ), f = ii(
            f,
            g,
            n,
            null
          ), f.flags |= 2, o.return = t, f.return = t, o.sibling = f, t.child = o, Th(
            t,
            e.child,
            null,
            n
          ), o = t.child, o.memoizedState = cr(n), o.childLanes = nd(
            e,
            i,
            n
          ), t.memoizedState = c1, t = f);
        else if (En(t), ct && console.error(
          "We should not be hydrating here. This is a bug in React. Please file a bug."
        ), Pa(g)) {
          if (i = g.nextSibling && g.nextSibling.dataset, i) {
            T = i.dgst;
            var Z = i.msg;
            A = i.stck;
            var q = i.cstck;
          }
          g = Z, i = T, o = A, T = f = q, f = Error(g || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), f.stack = o || "", f.digest = i, i = T === void 0 ? null : T, o = {
            value: f,
            source: null,
            stack: i
          }, typeof i == "string" && Vv.set(
            f,
            o
          ), ho(o), t = ud(
            e,
            t,
            n
          );
        } else if (ql || bl(
          e,
          t,
          n,
          !1
        ), i = (n & e.childLanes) !== 0, ql || i) {
          if (i = Dt, i !== null && (o = n & -n, o = (o & 42) !== 0 ? 1 : jl(
            o
          ), o = (o & (i.suspendedLanes | n)) !== 0 ? 0 : o, o !== 0 && o !== L.retryLane))
            throw L.retryLane = o, Il(
              e,
              o
            ), Yt(
              i,
              e,
              o
            ), vS;
          g.data === Pc || gd(), t = ud(
            e,
            t,
            n
          );
        } else
          g.data === Pc ? (t.flags |= 192, t.child = e.child, t = null) : (e = L.treeContext, Kt = Al(
            g.nextSibling
          ), Un = t, ct = !0, kr = null, Jc = !1, ou = null, Li = !1, e !== null && (ia(), iu[cu++] = Zc, iu[cu++] = kc, iu[cu++] = Zr, Zc = e.id, kc = e.overflow, Zr = t), t = ad(
            t,
            o.children
          ), t.flags |= 4096);
        return t;
      }
      return f ? (ma(t), f = o.fallback, g = t.mode, T = e.child, A = T.sibling, o = za(
        T,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = T.subtreeFlags & 65011712, A !== null ? f = za(
        A,
        f
      ) : (f = ii(
        f,
        g,
        n,
        null
      ), f.flags |= 2), f.return = t, o.return = t, o.sibling = f, t.child = o, o = f, f = t.child, g = e.child.memoizedState, g === null ? g = cr(n) : (T = g.cachePool, T !== null ? (A = Dl._currentValue, T = T.parent !== A ? { parent: A, pool: A } : T) : T = v0(), g = {
        baseLanes: g.baseLanes | n,
        cachePool: T
      }), f.memoizedState = g, f.childLanes = nd(
        e,
        i,
        n
      ), t.memoizedState = c1, o) : (En(t), n = e.child, e = n.sibling, n = za(n, {
        mode: "visible",
        children: o.children
      }), n.return = t, n.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = n, t.memoizedState = null, n);
    }
    function ad(e, t) {
      return t = or(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function or(e, t) {
      return e = ie(22, e, null, t), e.lanes = 0, e.stateNode = {
        _visibility: ig,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }, e;
    }
    function ud(e, t, n) {
      return Th(t, e.child, null, n), e = ad(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function id(e, t, n) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), dm(
        e.return,
        t,
        n
      );
    }
    function _m(e, t) {
      var n = _e(e);
      return e = !n && typeof Te(e) == "function", n || e ? (n = n ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        n,
        t,
        n
      ), !1) : !0;
    }
    function cd(e, t, n, i, o) {
      var f = e.memoizedState;
      f === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: o
      } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = n, f.tailMode = o);
    }
    function Nm(e, t, n) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail;
      if (i = i.children, o !== void 0 && o !== "forwards" && o !== "backwards" && o !== "together" && !AS[o])
        if (AS[o] = !0, typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
            o
          );
      f === void 0 || i1[f] || (f !== "collapsed" && f !== "hidden" ? (i1[f] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && (i1[f] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards") && i !== void 0 && i !== null && i !== !1)
        if (_e(i)) {
          for (var m = 0; m < i.length; m++)
            if (!_m(i[m], m)) break e;
        } else if (m = Te(i), typeof m == "function") {
          if (m = m.call(i))
            for (var g = m.next(), T = 0; !g.done; g = m.next()) {
              if (!_m(g.value, T)) break e;
              T++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (Jt(e, t, i, n), i = zl.current, (i & hp) !== 0)
        i = i & Eh | hp, t.flags |= 128;
      else {
        if (e !== null && (e.flags & 128) !== 0)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && id(
                e,
                n,
                t
              );
            else if (e.tag === 19)
              id(e, n, t);
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
        i &= Eh;
      }
      switch (we(zl, i, t), o) {
        case "forwards":
          for (n = t.child, o = null; n !== null; )
            e = n.alternate, e !== null && Uu(e) === null && (o = n), n = n.sibling;
          n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), cd(
            t,
            !1,
            o,
            n,
            f
          );
          break;
        case "backwards":
          for (n = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && Uu(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = n, n = o, o = e;
          }
          cd(
            t,
            !0,
            n,
            null,
            f
          );
          break;
        case "together":
          cd(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Va(e, t, n) {
      if (e !== null && (t.dependencies = e.dependencies), Fn = -1, df |= t.lanes, (n & t.childLanes) === 0)
        if (e !== null) {
          if (bl(
            e,
            t,
            n,
            !1
          ), (n & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, n = za(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
          e = e.sibling, n = n.sibling = za(e, e.pendingProps), n.return = t;
        n.sibling = null;
      }
      return t.child;
    }
    function od(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && fi(e)));
    }
    function Ev(e, t, n) {
      switch (t.tag) {
        case 3:
          pl(
            t,
            t.stateNode.containerInfo
          ), oi(
            t,
            Dl,
            e.memoizedState.cache
          ), sc();
          break;
        case 27:
        case 5:
          te(t);
          break;
        case 4:
          pl(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          oi(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (n & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (En(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? A0(
              e,
              t,
              n
            ) : (En(t), e = Va(
              e,
              t,
              n
            ), e !== null ? e.sibling : null);
          En(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (n & t.childLanes) !== 0, i || (bl(
            e,
            t,
            n,
            !1
          ), i = (n & t.childLanes) !== 0), o) {
            if (i)
              return Nm(
                e,
                t,
                n
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), we(
            zl,
            zl.current,
            t
          ), i) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, Is(e, t, n);
        case 24:
          oi(
            t,
            Dl,
            e.memoizedState.cache
          );
      }
      return Va(e, t, n);
    }
    function fd(e, t, n) {
      if (t._debugNeedsRemount && e !== null) {
        n = Ms(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), n._debugStack = t._debugStack, n._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, n.index = t.index, n.sibling = t.sibling, n.return = t.return, n.ref = t.ref, n._debugInfo = t._debugInfo, t === i.child)
          i.child = n;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = n;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), n.flags |= 2, n;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          ql = !0;
        else {
          if (!od(e, n) && (t.flags & 128) === 0)
            return ql = !1, Ev(
              e,
              t,
              n
            );
          ql = (e.flags & 131072) !== 0;
        }
      else
        ql = !1, (i = ct) && (ia(), i = (t.flags & 1048576) !== 0), i && (i = t.index, ia(), y0(t, og, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = rf(t.elementType), t.type = e, typeof e == "function")
            am(e) ? (i = Si(
              e,
              i
            ), t.tag = 1, t.type = e = oc(e), t = Hm(
              null,
              t,
              e,
              i,
              n
            )) : (t.tag = 0, ld(t, e), t.type = e = oc(e), t = td(
              null,
              t,
              e,
              i,
              n
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === Yu) {
                t.tag = 11, t.type = e = nm(e), t = Ps(
                  null,
                  t,
                  e,
                  i,
                  n
                );
                break e;
              } else if (o === Hr) {
                t.tag = 14, t = La(
                  null,
                  t,
                  e,
                  i,
                  n
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === xn && (t = " Did you wrap a component in React.lazy() more than once?"), e = de(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + e + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return td(
            e,
            t,
            t.type,
            t.pendingProps,
            n
          );
        case 1:
          return i = t.type, o = Si(
            i,
            t.pendingProps
          ), Hm(
            e,
            t,
            i,
            o,
            n
          );
        case 3:
          e: {
            if (pl(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, di(e, t), po(t, i, null, n);
            var m = t.memoizedState;
            if (i = m.cache, oi(t, Dl, i), i !== f.cache && hm(
              t,
              [Dl],
              n,
              !0
            ), wa(), i = m.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: m.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = wm(
                  e,
                  t,
                  i,
                  n
                );
                break e;
              } else if (i !== o) {
                o = Sn(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), ho(o), t = wm(
                  e,
                  t,
                  i,
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
                for (Kt = Al(e.firstChild), Un = t, ct = !0, kr = null, Jc = !1, ou = null, Li = !0, e = iS(
                  t,
                  null,
                  i,
                  n
                ), t.child = e; e; )
                  e.flags = e.flags & -3 | 4096, e = e.sibling;
              }
            else {
              if (sc(), i === o) {
                t = Va(
                  e,
                  t,
                  n
                );
                break e;
              }
              Jt(
                e,
                t,
                i,
                n
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return ir(e, t), e === null ? (e = qu(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = e : ct || (e = t.type, n = t.pendingProps, i = kt(
            eu.current
          ), i = Fe(
            i
          ).createElement(e), i[Bl] = t, i[dn] = n, Lt(i, e, n), il(i), t.stateNode = i) : t.memoizedState = qu(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return te(t), e === null && ct && (i = kt(eu.current), o = C(), i = t.stateNode = Sy(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), Jc || (o = At(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (ca(t, 0).serverProps = o)), Un = t, Li = !0, o = Kt, Fa(t.type) ? (U1 = o, Kt = Al(
            i.firstChild
          )) : Kt = o), Jt(
            e,
            t,
            t.pendingProps.children,
            n
          ), ir(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && ct && (f = C(), i = Ss(
            t.type,
            f.ancestorInfo
          ), o = Kt, (m = !o) || (m = xi(
            o,
            t.type,
            t.pendingProps,
            Li
          ), m !== null ? (t.stateNode = m, Jc || (f = At(
            m,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (ca(t, 0).serverProps = f)), Un = t, Kt = Al(
            m.firstChild
          ), Li = !1, f = !0) : f = !1, m = !f), m && (i && cm(t, o), Ma(t))), te(t), o = t.type, f = t.pendingProps, m = e !== null ? e.memoizedProps : null, i = f.children, Wa(o, f) ? i = null : m !== null && Wa(o, m) && (t.flags |= 32), t.memoizedState !== null && (o = yi(
            e,
            t,
            jn,
            null,
            null,
            n
          ), zp._currentValue = o), ir(e, t), Jt(
            e,
            t,
            i,
            n
          ), t.child;
        case 6:
          return e === null && ct && (e = t.pendingProps, n = C(), i = n.ancestorInfo.current, e = i != null ? Hf(
            e,
            i.tag,
            n.ancestorInfo.implicitRootScope
          ) : !0, n = Kt, (i = !n) || (i = El(
            n,
            t.pendingProps,
            Li
          ), i !== null ? (t.stateNode = i, Un = t, Kt = null, i = !0) : i = !1, i = !i), i && (e && cm(t, n), Ma(t))), null;
        case 13:
          return A0(e, t, n);
        case 4:
          return pl(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = Th(
            t,
            null,
            i,
            n
          ) : Jt(
            e,
            t,
            i,
            n
          ), t.child;
        case 11:
          return Ps(
            e,
            t,
            t.type,
            t.pendingProps,
            n
          );
        case 7:
          return Jt(
            e,
            t,
            t.pendingProps,
            n
          ), t.child;
        case 8:
          return Jt(
            e,
            t,
            t.pendingProps.children,
            n
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, Jt(
            e,
            t,
            t.pendingProps.children,
            n
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || RS || (RS = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), oi(t, i, f), Jt(
            e,
            t,
            o.children,
            n
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), ri(t), o = Ot(o), Wt(t), i = e1(
            i,
            o,
            void 0
          ), Fl(), t.flags |= 1, Jt(
            e,
            t,
            i,
            n
          ), t.child;
        case 14:
          return La(
            e,
            t,
            t.type,
            t.pendingProps,
            n
          );
        case 15:
          return ur(
            e,
            t,
            t.type,
            t.pendingProps,
            n
          );
        case 19:
          return Nm(
            e,
            t,
            n
          );
        case 31:
          return i = t.pendingProps, n = t.mode, i = {
            mode: i.mode,
            children: i.children
          }, e === null ? (e = or(
            i,
            n
          ), e.ref = t.ref, t.child = e, e.return = t, t = e) : (e = za(e.child, i), e.ref = t.ref, t.child = e, e.return = t, t = e), t;
        case 22:
          return Is(e, t, n);
        case 24:
          return ri(t), i = Ot(Dl), e === null ? (o = pm(), o === null && (o = Dt, f = Gf(), o.pooledCache = f, dc(f), f !== null && (o.pooledCacheLanes |= n), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, en(t), oi(t, Dl, o)) : ((e.lanes & n) !== 0 && (di(e, t), po(t, null, null, n), wa()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), oi(t, Dl, i)) : (i = f.cache, oi(t, Dl, i), i !== o.cache && hm(
            t,
            [Dl],
            n,
            !0
          ))), Jt(
            e,
            t,
            t.pendingProps.children,
            n
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function an(e) {
      e.flags |= 4;
    }
    function fr(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & hu) !== cs)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !Ar(t)) {
        if (t = du.current, t !== null && ((Ie & 4194048) === Ie ? Gi !== null : (Ie & 62914560) !== Ie && (Ie & 536870912) === 0 || t !== Gi))
          throw fp = Jv, _b;
        e.flags |= 8192;
      }
    }
    function rr(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Af() : 536870912, e.lanes |= t, ts |= t);
    }
    function Ti(e, t) {
      if (!ct)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
              t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
          case "collapsed":
            n = e.tail;
            for (var i = null; n !== null; )
              n.alternate !== null && (i = n), n = n.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function vt(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, n = 0, i = 0;
      if (t)
        if ((e.mode & Jl) !== Ct) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            n |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & Jl) !== Ct) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var m = e.child; m !== null; )
          n |= m.lanes | m.childLanes, i |= m.subtreeFlags, i |= m.flags, o += m.actualDuration, f += m.treeBaseDuration, m = m.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          n |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = n, t;
    }
    function R0(e, t, n) {
      var i = t.pendingProps;
      switch (Cs(t), t.tag) {
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
          return vt(t), null;
        case 1:
          return vt(t), null;
        case 3:
          return n = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Au(Dl, t), Qt(t), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (rc(t) ? (sm(), an(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, rm())), vt(t), null;
        case 26:
          return n = t.memoizedState, e === null ? (an(t), n !== null ? (vt(t), fr(
            t,
            n
          )) : (vt(t), t.flags &= -16777217)) : n ? n !== e.memoizedState ? (an(t), vt(t), fr(
            t,
            n
          )) : (vt(t), t.flags &= -16777217) : (e.memoizedProps !== i && an(t), vt(t), t.flags &= -16777217), null;
        case 27:
          ue(t), n = kt(eu.current);
          var o = t.type;
          if (e !== null && t.stateNode != null)
            e.memoizedProps !== i && an(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return vt(t), null;
            }
            e = C(), rc(t) ? om(t) : (e = Sy(
              o,
              i,
              n,
              e,
              !0
            ), t.stateNode = e, an(t));
          }
          return vt(t), null;
        case 5:
          if (ue(t), n = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && an(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return vt(t), null;
            }
            if (o = C(), rc(t))
              om(t);
            else {
              switch (e = kt(eu.current), Ss(n, o.ancestorInfo), o = o.context, e = Fe(e), o) {
                case wh:
                  e = e.createElementNS(uf, n);
                  break;
                case Ng:
                  e = e.createElementNS(
                    Xr,
                    n
                  );
                  break;
                default:
                  switch (n) {
                    case "svg":
                      e = e.createElementNS(
                        uf,
                        n
                      );
                      break;
                    case "math":
                      e = e.createElementNS(
                        Xr,
                        n
                      );
                      break;
                    case "script":
                      e = e.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                      break;
                    case "select":
                      e = typeof i.is == "string" ? e.createElement("select", { is: i.is }) : e.createElement("select"), i.multiple ? e.multiple = !0 : i.size && (e.size = i.size);
                      break;
                    default:
                      e = typeof i.is == "string" ? e.createElement(n, {
                        is: i.is
                      }) : e.createElement(n), n.indexOf("-") === -1 && (n !== n.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        n
                      ), Object.prototype.toString.call(e) !== "[object HTMLUnknownElement]" || Lu.call(
                        XS,
                        n
                      ) || (XS[n] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        n
                      )));
                  }
              }
              e[Bl] = t, e[dn] = i;
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
              e: switch (Lt(e, n, i), n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  e = !!i.autoFocus;
                  break e;
                case "img":
                  e = !0;
                  break e;
                default:
                  e = !1;
              }
              e && an(t);
            }
          }
          return vt(t), t.flags &= -16777217, null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && an(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = kt(eu.current), n = C(), rc(t)) {
              e = t.stateNode, n = t.memoizedProps, o = !Jc, i = null;
              var f = Un;
              if (f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = Nd(
                      e,
                      n,
                      i
                    ), o !== null && (ca(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = Nd(
                      e,
                      n,
                      i
                    ), o !== null && (ca(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Bl] = t, e = !!(e.nodeValue === n || i !== null && i.suppressHydrationWarning === !0 || ry(e.nodeValue, n)), e || Ma(t);
            } else
              o = n.ancestorInfo.current, o != null && Hf(
                i,
                o.tag,
                n.ancestorInfo.implicitRootScope
              ), e = Fe(e).createTextNode(
                i
              ), e[Bl] = t, t.stateNode = e;
          }
          return vt(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = rc(t), i !== null && i.dehydrated !== null) {
              if (e === null) {
                if (!o)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                o[Bl] = t, vt(t), (t.mode & Jl) !== Ct && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                sm(), sc(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4, vt(t), (t.mode & Jl) !== Ct && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = rm(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (An(t), t) : (An(t), null);
          }
          return An(t), (t.flags & 128) !== 0 ? (t.lanes = n, (t.mode & Jl) !== Ct && Ca(t), t) : (n = i !== null, e = e !== null && e.memoizedState !== null, n && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), rr(t, t.updateQueue), vt(t), (t.mode & Jl) !== Ct && n && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return Qt(t), e === null && oy(
            t.stateNode.containerInfo
          ), vt(t), null;
        case 10:
          return Au(t.type, t), vt(t), null;
        case 19:
          if (Je(zl, t), o = t.memoizedState, o === null) return vt(t), null;
          if (i = (t.flags & 128) !== 0, f = o.rendering, f === null)
            if (i) Ti(o, !1);
            else {
              if ($t !== Fc || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = Uu(e), f !== null) {
                    for (t.flags |= 128, Ti(o, !1), e = f.updateQueue, t.updateQueue = e, rr(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                      um(n, e), n = n.sibling;
                    return we(
                      zl,
                      zl.current & Eh | hp,
                      t
                    ), t.child;
                  }
                  e = e.sibling;
                }
              o.tail !== null && tu() > Ag && (t.flags |= 128, i = !0, Ti(o, !1), t.lanes = 4194304);
            }
          else {
            if (!i)
              if (e = Uu(f), e !== null) {
                if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, rr(t, e), Ti(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !ct)
                  return vt(t), null;
              } else
                2 * tu() - o.renderingStartTime > Ag && n !== 536870912 && (t.flags |= 128, i = !0, Ti(o, !1), t.lanes = 4194304);
            o.isBackwards ? (f.sibling = t.child, t.child = f) : (e = o.last, e !== null ? e.sibling = f : t.child = f, o.last = f);
          }
          return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = tu(), e.sibling = null, n = zl.current, n = i ? n & Eh | hp : n & Eh, we(zl, n, t), e) : (vt(t), null);
        case 22:
        case 23:
          return An(t), sa(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (vt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : vt(t), n = t.updateQueue, n !== null && rr(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== n && (t.flags |= 2048), e !== null && Je($r, t), null;
        case 24:
          return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Au(Dl, t), vt(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function O0(e, t) {
      switch (Cs(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Jl) !== Ct && Ca(t), t) : null;
        case 3:
          return Au(Dl, t), Qt(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return ue(t), null;
        case 13:
          if (An(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            sc();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Jl) !== Ct && Ca(t), t) : null;
        case 19:
          return Je(zl, t), null;
        case 4:
          return Qt(t), null;
        case 10:
          return Au(t.type, t), null;
        case 22:
        case 23:
          return An(t), sa(t), e !== null && Je($r, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Jl) !== Ct && Ca(t), t) : null;
        case 24:
          return Au(Dl, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Bm(e, t) {
      switch (Cs(t), t.tag) {
        case 3:
          Au(Dl, t), Qt(t);
          break;
        case 26:
        case 27:
        case 5:
          ue(t);
          break;
        case 4:
          Qt(t);
          break;
        case 13:
          An(t);
          break;
        case 19:
          Je(zl, t);
          break;
        case 10:
          Au(t.type, t);
          break;
        case 22:
        case 23:
          An(t), sa(t), e !== null && Je($r, t);
          break;
        case 24:
          Au(Dl, t);
      }
    }
    function ya(e) {
      return (e.mode & Jl) !== Ct;
    }
    function qm(e, t) {
      ya(e) ? (fa(), Tc(t, e), Bn()) : Tc(t, e);
    }
    function rd(e, t, n) {
      ya(e) ? (fa(), Ec(
        n,
        e,
        t
      ), Bn()) : Ec(
        n,
        e,
        t
      );
    }
    function Tc(e, t) {
      try {
        var n = t.updateQueue, i = n !== null ? n.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          n = o;
          do {
            if ((n.tag & e) === e && ((e & xl) !== fu ? se !== null && typeof se.markComponentPassiveEffectMountStarted == "function" && se.markComponentPassiveEffectMountStarted(
              t
            ) : (e & Kl) !== fu && se !== null && typeof se.markComponentLayoutEffectMountStarted == "function" && se.markComponentLayoutEffectMountStarted(
              t
            ), i = void 0, (e & Cn) !== fu && (Ch = !0), i = pe(
              t,
              dE,
              n
            ), (e & Cn) !== fu && (Ch = !1), (e & xl) !== fu ? se !== null && typeof se.markComponentPassiveEffectMountStopped == "function" && se.markComponentPassiveEffectMountStopped() : (e & Kl) !== fu && se !== null && typeof se.markComponentLayoutEffectMountStopped == "function" && se.markComponentLayoutEffectMountStopped(), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (n.tag & Kl) !== 0 ? "useLayoutEffect" : (n.tag & Cn) !== 0 ? "useInsertionEffect" : "useEffect";
              var m = void 0;
              m = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, pe(
                t,
                function(g, T) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    g,
                    T
                  );
                },
                f,
                m
              );
            }
            n = n.next;
          } while (n !== o);
        }
      } catch (g) {
        Me(t, t.return, g);
      }
    }
    function Ec(e, t, n) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var m = i.inst, g = m.destroy;
              g !== void 0 && (m.destroy = void 0, (e & xl) !== fu ? se !== null && typeof se.markComponentPassiveEffectUnmountStarted == "function" && se.markComponentPassiveEffectUnmountStarted(
                t
              ) : (e & Kl) !== fu && se !== null && typeof se.markComponentLayoutEffectUnmountStarted == "function" && se.markComponentLayoutEffectUnmountStarted(
                t
              ), (e & Cn) !== fu && (Ch = !0), o = t, pe(
                o,
                hE,
                o,
                n,
                g
              ), (e & Cn) !== fu && (Ch = !1), (e & xl) !== fu ? se !== null && typeof se.markComponentPassiveEffectUnmountStopped == "function" && se.markComponentPassiveEffectUnmountStopped() : (e & Kl) !== fu && se !== null && typeof se.markComponentLayoutEffectUnmountStopped == "function" && se.markComponentLayoutEffectUnmountStopped());
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (T) {
        Me(t, t.return, T);
      }
    }
    function Ym(e, t) {
      ya(e) ? (fa(), Tc(t, e), Bn()) : Tc(t, e);
    }
    function sr(e, t, n) {
      ya(e) ? (fa(), Ec(
        n,
        e,
        t
      ), Bn()) : Ec(
        n,
        e,
        t
      );
    }
    function jm(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || Rh || (n.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          Se(e) || "instance"
        ), n.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          Se(e) || "instance"
        ));
        try {
          pe(
            e,
            b0,
            t,
            n
          );
        } catch (i) {
          Me(e, e.return, i);
        }
      }
    }
    function D0(e, t, n) {
      return e.getSnapshotBeforeUpdate(t, n);
    }
    function Av(e, t) {
      var n = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || Rh || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        Se(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        Se(e) || "instance"
      ));
      try {
        var o = Si(
          e.type,
          n,
          e.elementType === e.type
        ), f = pe(
          e,
          D0,
          t,
          o,
          i
        );
        n = OS, f !== void 0 || n.has(e.type) || (n.add(e.type), pe(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            Se(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (m) {
        Me(e, e.return, m);
      }
    }
    function sd(e, t, n) {
      n.props = Si(
        e.type,
        e.memoizedProps
      ), n.state = e.memoizedState, ya(e) ? (fa(), pe(
        e,
        Pb,
        e,
        t,
        n
      ), Bn()) : pe(
        e,
        Pb,
        e,
        t,
        n
      );
    }
    function x0(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = e.stateNode;
            break;
          case 30:
            n = e.stateNode;
            break;
          default:
            n = e.stateNode;
        }
        if (typeof t == "function")
          if (ya(e))
            try {
              fa(), e.refCleanup = t(n);
            } finally {
              Bn();
            }
          else e.refCleanup = t(n);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            Se(e)
          ), t.current = n;
      }
    }
    function Uo(e, t) {
      try {
        pe(e, x0, e);
      } catch (n) {
        Me(e, t, n);
      }
    }
    function Qn(e, t) {
      var n = e.ref, i = e.refCleanup;
      if (n !== null)
        if (typeof i == "function")
          try {
            if (ya(e))
              try {
                fa(), pe(e, i);
              } finally {
                Bn(e);
              }
            else pe(e, i);
          } catch (o) {
            Me(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof n == "function")
          try {
            if (ya(e))
              try {
                fa(), pe(e, n, null);
              } finally {
                Bn(e);
              }
            else pe(e, n, null);
          } catch (o) {
            Me(e, t, o);
          }
        else n.current = null;
    }
    function Lm(e, t, n, i) {
      var o = e.memoizedProps, f = o.id, m = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", sg && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        n
      ), typeof m == "function" && m(
        e.memoizedProps.id,
        t,
        i,
        n
      );
    }
    function z0(e, t, n, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", sg && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        n
      );
    }
    function M0(e) {
      var t = e.type, n = e.memoizedProps, i = e.stateNode;
      try {
        pe(
          e,
          Nu,
          i,
          t,
          n,
          e
        );
      } catch (o) {
        Me(e, e.return, o);
      }
    }
    function Vm(e, t, n) {
      try {
        pe(
          e,
          Vt,
          e.stateNode,
          e.type,
          n,
          t,
          e
        );
      } catch (i) {
        Me(e, e.return, i);
      }
    }
    function Gm(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Fa(e.type) || e.tag === 4;
    }
    function Ac(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Gm(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && Fa(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function dr(e, t, n) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = _u));
      else if (i !== 4 && (i === 27 && Fa(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
        for (dr(e, t, n), e = e.sibling; e !== null; )
          dr(e, t, n), e = e.sibling;
    }
    function Rc(e, t, n) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
      else if (i !== 4 && (i === 27 && Fa(e.type) && (n = e.stateNode), e = e.child, e !== null))
        for (Rc(e, t, n), e = e.sibling; e !== null; )
          Rc(e, t, n), e = e.sibling;
    }
    function U0(e) {
      for (var t, n = e.return; n !== null; ) {
        if (Gm(n)) {
          t = n;
          break;
        }
        n = n.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, n = Ac(e), Rc(
            e,
            n,
            t
          );
          break;
        case 5:
          n = t.stateNode, t.flags & 32 && (Bu(n), t.flags &= -33), t = Ac(e), Rc(
            e,
            t,
            n
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, n = Ac(e), dr(
            e,
            n,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function Xm(e) {
      var t = e.stateNode, n = e.memoizedProps;
      try {
        pe(
          e,
          Dn,
          e.type,
          n,
          t,
          e
        );
      } catch (i) {
        Me(e, e.return, i);
      }
    }
    function dd(e, t) {
      if (e = e.containerInfo, x1 = jg, e = r0(e), tm(e)) {
        if ("selectionStart" in e)
          var n = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var i = n.getSelection && n.getSelection();
            if (i && i.rangeCount !== 0) {
              n = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                n.nodeType, f.nodeType;
              } catch {
                n = null;
                break e;
              }
              var m = 0, g = -1, T = -1, A = 0, L = 0, Z = e, q = null;
              t: for (; ; ) {
                for (var J; Z !== n || o !== 0 && Z.nodeType !== 3 || (g = m + o), Z !== f || i !== 0 && Z.nodeType !== 3 || (T = m + i), Z.nodeType === 3 && (m += Z.nodeValue.length), (J = Z.firstChild) !== null; )
                  q = Z, Z = J;
                for (; ; ) {
                  if (Z === e) break t;
                  if (q === n && ++A === o && (g = m), q === f && ++L === i && (T = m), (J = Z.nextSibling) !== null) break;
                  Z = q, q = Z.parentNode;
                }
                Z = J;
              }
              n = g === -1 || T === -1 ? null : { start: g, end: T };
            } else n = null;
          }
        n = n || { start: 0, end: 0 };
      } else n = null;
      for (z1 = {
        focusedElem: e,
        selectionRange: n
      }, jg = !1, Yl = t; Yl !== null; )
        if (t = Yl, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
          e.return = t, Yl = e;
        else
          for (; Yl !== null; ) {
            switch (e = t = Yl, n = e.alternate, o = e.flags, e.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && n !== null && Av(e, n);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, n = e.nodeType, n === 9)
                    Vo(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Vo(e);
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
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, Yl = e;
              break;
            }
            Yl = t.return;
          }
    }
    function Qm(e, t, n) {
      var i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Ga(e, n), i & 4 && qm(n, Kl | ru);
          break;
        case 1:
          if (Ga(e, n), i & 4)
            if (e = n.stateNode, t === null)
              n.type.defaultProps || "ref" in n.memoizedProps || Rh || (e.props !== n.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                Se(n) || "instance"
              ), e.state !== n.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                Se(n) || "instance"
              )), ya(n) ? (fa(), pe(
                n,
                t1,
                n,
                e
              ), Bn()) : pe(
                n,
                t1,
                n,
                e
              );
            else {
              var o = Si(
                n.type,
                t.memoizedProps
              );
              t = t.memoizedState, n.type.defaultProps || "ref" in n.memoizedProps || Rh || (e.props !== n.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                Se(n) || "instance"
              ), e.state !== n.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                Se(n) || "instance"
              )), ya(n) ? (fa(), pe(
                n,
                $b,
                n,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), Bn()) : pe(
                n,
                $b,
                n,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          i & 64 && jm(n), i & 512 && Uo(n, n.return);
          break;
        case 3:
          if (t = oa(), Ga(e, n), i & 64 && (i = n.updateQueue, i !== null)) {
            if (o = null, n.child !== null)
              switch (n.child.tag) {
                case 27:
                case 5:
                  o = n.child.stateNode;
                  break;
                case 1:
                  o = n.child.stateNode;
              }
            try {
              pe(
                n,
                b0,
                i,
                o
              );
            } catch (m) {
              Me(n, n.return, m);
            }
          }
          e.effectDuration += si(t);
          break;
        case 27:
          t === null && i & 4 && Xm(n);
        case 26:
        case 5:
          Ga(e, n), t === null && i & 4 && M0(n), i & 512 && Uo(n, n.return);
          break;
        case 12:
          if (i & 4) {
            i = oa(), Ga(e, n), e = n.stateNode, e.effectDuration += hc(i);
            try {
              pe(
                n,
                Lm,
                n,
                t,
                rg,
                e.effectDuration
              );
            } catch (m) {
              Me(n, n.return, m);
            }
          } else Ga(e, n);
          break;
        case 13:
          Ga(e, n), i & 4 && Co(e, n), i & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Sr.bind(
            null,
            n
          ), Go(e, n))));
          break;
        case 22:
          if (i = n.memoizedState !== null || Wc, !i) {
            t = t !== null && t.memoizedState !== null || nl, o = Wc;
            var f = nl;
            Wc = i, (nl = t) && !f ? Xa(
              e,
              n,
              (n.subtreeFlags & 8772) !== 0
            ) : Ga(e, n), Wc = o, nl = f;
          }
          break;
        case 30:
          break;
        default:
          Ga(e, n);
      }
    }
    function Zm(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Zm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ao(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function Cu(e, t, n) {
      for (n = n.child; n !== null; )
        Oc(
          e,
          t,
          n
        ), n = n.sibling;
    }
    function Oc(e, t, n) {
      if (Rl && typeof Rl.onCommitFiberUnmount == "function")
        try {
          Rl.onCommitFiberUnmount(_i, n);
        } catch (f) {
          sn || (sn = !0, console.error(
            "React instrumentation encountered an error: %s",
            f
          ));
        }
      switch (n.tag) {
        case 26:
          nl || Qn(n, t), Cu(
            e,
            t,
            n
          ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
          break;
        case 27:
          nl || Qn(n, t);
          var i = ml, o = Pn;
          Fa(n.type) && (ml = n.stateNode, Pn = !1), Cu(
            e,
            t,
            n
          ), pe(
            n,
            Qo,
            n.stateNode
          ), ml = i, Pn = o;
          break;
        case 5:
          nl || Qn(n, t);
        case 6:
          if (i = ml, o = Pn, ml = null, Cu(
            e,
            t,
            n
          ), ml = i, Pn = o, ml !== null)
            if (Pn)
              try {
                pe(
                  n,
                  jo,
                  ml,
                  n.stateNode
                );
              } catch (f) {
                Me(
                  n,
                  t,
                  f
                );
              }
            else
              try {
                pe(
                  n,
                  Jn,
                  ml,
                  n.stateNode
                );
              } catch (f) {
                Me(
                  n,
                  t,
                  f
                );
              }
          break;
        case 18:
          ml !== null && (Pn ? (e = ml, Lo(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            n.stateNode
          ), Yc(e)) : Lo(ml, n.stateNode));
          break;
        case 4:
          i = ml, o = Pn, ml = n.stateNode.containerInfo, Pn = !0, Cu(
            e,
            t,
            n
          ), ml = i, Pn = o;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          nl || Ec(
            Cn,
            n,
            t
          ), nl || rd(
            n,
            t,
            Kl
          ), Cu(
            e,
            t,
            n
          );
          break;
        case 1:
          nl || (Qn(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function" && sd(
            n,
            t,
            i
          )), Cu(
            e,
            t,
            n
          );
          break;
        case 21:
          Cu(
            e,
            t,
            n
          );
          break;
        case 22:
          nl = (i = nl) || n.memoizedState !== null, Cu(
            e,
            t,
            n
          ), nl = i;
          break;
        default:
          Cu(
            e,
            t,
            n
          );
      }
    }
    function Co(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          pe(
            t,
            On,
            e
          );
        } catch (n) {
          Me(t, t.return, n);
        }
    }
    function hd(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new DS()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new DS()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function Dc(e, t) {
      var n = hd(e);
      t.forEach(function(i) {
        var o = Oi.bind(null, e, i);
        if (!n.has(i)) {
          if (n.add(i), Xt)
            if (Oh !== null && Dh !== null)
              qo(Dh, Oh);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          i.then(o, o);
        }
      });
    }
    function wl(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var o = e, f = t, m = n[i], g = f;
          e: for (; g !== null; ) {
            switch (g.tag) {
              case 27:
                if (Fa(g.type)) {
                  ml = g.stateNode, Pn = !1;
                  break e;
                }
                break;
              case 5:
                ml = g.stateNode, Pn = !1;
                break e;
              case 3:
              case 4:
                ml = g.stateNode.containerInfo, Pn = !0;
                break e;
            }
            g = g.return;
          }
          if (ml === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          Oc(o, f, m), ml = null, Pn = !1, o = m, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null; )
          km(t, e), t = t.sibling;
    }
    function km(e, t) {
      var n = e.alternate, i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          wl(t, e), un(e), i & 4 && (Ec(
            Cn | ru,
            e,
            e.return
          ), Tc(Cn | ru, e), rd(
            e,
            e.return,
            Kl | ru
          ));
          break;
        case 1:
          wl(t, e), un(e), i & 512 && (nl || n === null || Qn(n, n.return)), i & 64 && Wc && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? i : n.concat(i))));
          break;
        case 26:
          var o = Ku;
          if (wl(t, e), un(e), i & 512 && (nl || n === null || Qn(n, n.return)), i & 4)
            if (t = n !== null ? n.memoizedState : null, i = e.memoizedState, n === null)
              if (i === null)
                if (e.stateNode === null) {
                  e: {
                    i = e.type, n = e.memoizedProps, t = o.ownerDocument || o;
                    t: switch (i) {
                      case "title":
                        o = t.getElementsByTagName("title")[0], (!o || o[tf] || o[Bl] || o.namespaceURI === uf || o.hasAttribute("itemprop")) && (o = t.createElement(i), t.head.insertBefore(
                          o,
                          t.querySelector("head > title")
                        )), Lt(o, i, n), o[Bl] = e, il(o), i = o;
                        break e;
                      case "link":
                        var f = Ry(
                          "link",
                          "href",
                          t
                        ).get(i + (n.href || ""));
                        if (f) {
                          for (var m = 0; m < f.length; m++)
                            if (o = f[m], o.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && o.getAttribute("rel") === (n.rel == null ? null : n.rel) && o.getAttribute("title") === (n.title == null ? null : n.title) && o.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                              f.splice(m, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), Lt(o, i, n), t.head.appendChild(o);
                        break;
                      case "meta":
                        if (f = Ry(
                          "meta",
                          "content",
                          t
                        ).get(i + (n.content || ""))) {
                          for (m = 0; m < f.length; m++)
                            if (o = f[m], fe(
                              n.content,
                              "content"
                            ), o.getAttribute("content") === (n.content == null ? null : "" + n.content) && o.getAttribute("name") === (n.name == null ? null : n.name) && o.getAttribute("property") === (n.property == null ? null : n.property) && o.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && o.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                              f.splice(m, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), Lt(o, i, n), t.head.appendChild(o);
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + i + '". This is a bug in React.'
                        );
                    }
                    o[Bl] = e, il(o), i = o;
                  }
                  e.stateNode = i;
                } else
                  Oy(
                    o,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = Bd(
                  o,
                  i,
                  e.memoizedProps
                );
            else
              t !== i ? (t === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : t.count--, i === null ? Oy(
                o,
                e.type,
                e.stateNode
              ) : Bd(
                o,
                i,
                e.memoizedProps
              )) : i === null && e.stateNode !== null && Vm(
                e,
                e.memoizedProps,
                n.memoizedProps
              );
          break;
        case 27:
          wl(t, e), un(e), i & 512 && (nl || n === null || Qn(n, n.return)), n !== null && i & 4 && Vm(
            e,
            e.memoizedProps,
            n.memoizedProps
          );
          break;
        case 5:
          if (wl(t, e), un(e), i & 512 && (nl || n === null || Qn(n, n.return)), e.flags & 32) {
            t = e.stateNode;
            try {
              pe(e, Bu, t);
            } catch (L) {
              Me(e, e.return, L);
            }
          }
          i & 4 && e.stateNode != null && (t = e.memoizedProps, Vm(
            e,
            t,
            n !== null ? n.memoizedProps : t
          )), i & 1024 && (o1 = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (wl(t, e), un(e), i & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            i = e.memoizedProps, n = n !== null ? n.memoizedProps : i, t = e.stateNode;
            try {
              pe(
                e,
                _c,
                t,
                n,
                i
              );
            } catch (L) {
              Me(e, e.return, L);
            }
          }
          break;
        case 3:
          if (o = oa(), Bg = null, f = Ku, Ku = Er(t.containerInfo), wl(t, e), Ku = f, un(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
              pe(
                e,
                by,
                t.containerInfo
              );
            } catch (L) {
              Me(e, e.return, L);
            }
          o1 && (o1 = !1, xc(e)), t.effectDuration += si(o);
          break;
        case 4:
          i = Ku, Ku = Er(
            e.stateNode.containerInfo
          ), wl(t, e), un(e), Ku = i;
          break;
        case 12:
          i = oa(), wl(t, e), un(e), e.stateNode.effectDuration += hc(i);
          break;
        case 13:
          wl(t, e), un(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (m1 = tu()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, Dc(e, i)));
          break;
        case 22:
          o = e.memoizedState !== null;
          var g = n !== null && n.memoizedState !== null, T = Wc, A = nl;
          if (Wc = T || o, nl = A || g, wl(t, e), nl = A, Wc = T, un(e), i & 8192)
            e: for (t = e.stateNode, t._visibility = o ? t._visibility & ~ig : t._visibility | ig, o && (n === null || g || Wc || nl || _l(e)), n = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (n === null) {
                  g = n = t;
                  try {
                    f = g.stateNode, o ? pe(g, fn, f) : pe(
                      g,
                      gy,
                      g.stateNode,
                      g.memoizedProps
                    );
                  } catch (L) {
                    Me(g, g.return, L);
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  g = t;
                  try {
                    m = g.stateNode, o ? pe(g, py, m) : pe(
                      g,
                      wd,
                      m,
                      g.memoizedProps
                    );
                  } catch (L) {
                    Me(g, g.return, L);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                n === t && (n = null), t = t.return;
              }
              n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
            }
          i & 4 && (i = e.updateQueue, i !== null && (n = i.retryQueue, n !== null && (i.retryQueue = null, Dc(e, n))));
          break;
        case 19:
          wl(t, e), un(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, Dc(e, i)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          wl(t, e), un(e);
      }
    }
    function un(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          pe(e, U0, e);
        } catch (n) {
          Me(e, e.return, n);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function xc(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          xc(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function Ga(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          Qm(e, t.alternate, t), t = t.sibling;
    }
    function Rn(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          rd(
            e,
            e.return,
            Kl
          ), _l(e);
          break;
        case 1:
          Qn(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && sd(
            e,
            e.return,
            t
          ), _l(e);
          break;
        case 27:
          pe(
            e,
            Qo,
            e.stateNode
          );
        case 26:
        case 5:
          Qn(e, e.return), _l(e);
          break;
        case 22:
          e.memoizedState === null && _l(e);
          break;
        case 30:
          _l(e);
          break;
        default:
          _l(e);
      }
    }
    function _l(e) {
      for (e = e.child; e !== null; )
        Rn(e), e = e.sibling;
    }
    function Hu(e, t, n, i) {
      var o = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Xa(
            e,
            n,
            i
          ), qm(n, Kl);
          break;
        case 1:
          if (Xa(
            e,
            n,
            i
          ), t = n.stateNode, typeof t.componentDidMount == "function" && pe(
            n,
            t1,
            n,
            t
          ), t = n.updateQueue, t !== null) {
            e = n.stateNode;
            try {
              pe(
                n,
                go,
                t,
                e
              );
            } catch (f) {
              Me(n, n.return, f);
            }
          }
          i && o & 64 && jm(n), Uo(n, n.return);
          break;
        case 27:
          Xm(n);
        case 26:
        case 5:
          Xa(
            e,
            n,
            i
          ), i && t === null && o & 4 && M0(n), Uo(n, n.return);
          break;
        case 12:
          if (i && o & 4) {
            o = oa(), Xa(
              e,
              n,
              i
            ), i = n.stateNode, i.effectDuration += hc(o);
            try {
              pe(
                n,
                Lm,
                n,
                t,
                rg,
                i.effectDuration
              );
            } catch (f) {
              Me(n, n.return, f);
            }
          } else
            Xa(
              e,
              n,
              i
            );
          break;
        case 13:
          Xa(
            e,
            n,
            i
          ), i && o & 4 && Co(e, n);
          break;
        case 22:
          n.memoizedState === null && Xa(
            e,
            n,
            i
          ), Uo(n, n.return);
          break;
        case 30:
          break;
        default:
          Xa(
            e,
            n,
            i
          );
      }
    }
    function Xa(e, t, n) {
      for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        Hu(
          e,
          t.alternate,
          t,
          n
        ), t = t.sibling;
    }
    function Qa(e, t) {
      var n = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && dc(e), n != null && Ua(n));
    }
    function pa(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (dc(t), e != null && Ua(e));
    }
    function bt(e, t, n, i) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          hr(
            e,
            t,
            n,
            i
          ), t = t.sibling;
    }
    function hr(e, t, n, i) {
      var o = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          bt(
            e,
            t,
            n,
            i
          ), o & 2048 && Ym(t, xl | ru);
          break;
        case 1:
          bt(
            e,
            t,
            n,
            i
          );
          break;
        case 3:
          var f = oa();
          bt(
            e,
            t,
            n,
            i
          ), o & 2048 && (n = null, t.alternate !== null && (n = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== n && (dc(t), n != null && Ua(n))), e.passiveEffectDuration += si(f);
          break;
        case 12:
          if (o & 2048) {
            o = oa(), bt(
              e,
              t,
              n,
              i
            ), e = t.stateNode, e.passiveEffectDuration += hc(o);
            try {
              pe(
                t,
                z0,
                t,
                t.alternate,
                rg,
                e.passiveEffectDuration
              );
            } catch (g) {
              Me(t, t.return, g);
            }
          } else
            bt(
              e,
              t,
              n,
              i
            );
          break;
        case 13:
          bt(
            e,
            t,
            n,
            i
          );
          break;
        case 23:
          break;
        case 22:
          f = t.stateNode;
          var m = t.alternate;
          t.memoizedState !== null ? f._visibility & Qc ? bt(
            e,
            t,
            n,
            i
          ) : Ho(
            e,
            t
          ) : f._visibility & Qc ? bt(
            e,
            t,
            n,
            i
          ) : (f._visibility |= Qc, Ei(
            e,
            t,
            n,
            i,
            (t.subtreeFlags & 10256) !== 0
          )), o & 2048 && Qa(m, t);
          break;
        case 24:
          bt(
            e,
            t,
            n,
            i
          ), o & 2048 && pa(t.alternate, t);
          break;
        default:
          bt(
            e,
            t,
            n,
            i
          );
      }
    }
    function Ei(e, t, n, i, o) {
      for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
        md(
          e,
          t,
          n,
          i,
          o
        ), t = t.sibling;
    }
    function md(e, t, n, i, o) {
      var f = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Ei(
            e,
            t,
            n,
            i,
            o
          ), Ym(t, xl);
          break;
        case 23:
          break;
        case 22:
          var m = t.stateNode;
          t.memoizedState !== null ? m._visibility & Qc ? Ei(
            e,
            t,
            n,
            i,
            o
          ) : Ho(
            e,
            t
          ) : (m._visibility |= Qc, Ei(
            e,
            t,
            n,
            i,
            o
          )), o && f & 2048 && Qa(
            t.alternate,
            t
          );
          break;
        case 24:
          Ei(
            e,
            t,
            n,
            i,
            o
          ), o && f & 2048 && pa(t.alternate, t);
          break;
        default:
          Ei(
            e,
            t,
            n,
            i,
            o
          );
      }
    }
    function Ho(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var n = e, i = t, o = i.flags;
          switch (i.tag) {
            case 22:
              Ho(
                n,
                i
              ), o & 2048 && Qa(
                i.alternate,
                i
              );
              break;
            case 24:
              Ho(
                n,
                i
              ), o & 2048 && pa(
                i.alternate,
                i
              );
              break;
            default:
              Ho(
                n,
                i
              );
          }
          t = t.sibling;
        }
    }
    function zc(e) {
      if (e.subtreeFlags & mp)
        for (e = e.child; e !== null; )
          Ai(e), e = e.sibling;
    }
    function Ai(e) {
      switch (e.tag) {
        case 26:
          zc(e), e.flags & mp && e.memoizedState !== null && V0(
            Ku,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          zc(e);
          break;
        case 3:
        case 4:
          var t = Ku;
          Ku = Er(
            e.stateNode.containerInfo
          ), zc(e), Ku = t;
          break;
        case 22:
          e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = mp, mp = 16777216, zc(e), mp = t) : zc(e));
          break;
        default:
          zc(e);
      }
    }
    function mr(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function wo(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            Yl = i, Km(
              i,
              e
            );
          }
        mr(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          Jm(e), e = e.sibling;
    }
    function Jm(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          wo(e), e.flags & 2048 && sr(
            e,
            e.return,
            xl | ru
          );
          break;
        case 3:
          var t = oa();
          wo(e), e.stateNode.passiveEffectDuration += si(t);
          break;
        case 12:
          t = oa(), wo(e), e.stateNode.passiveEffectDuration += hc(t);
          break;
        case 22:
          t = e.stateNode, e.memoizedState !== null && t._visibility & Qc && (e.return === null || e.return.tag !== 13) ? (t._visibility &= ~Qc, yr(e)) : wo(e);
          break;
        default:
          wo(e);
      }
    }
    function yr(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            Yl = i, Km(
              i,
              e
            );
          }
        mr(e);
      }
      for (e = e.child; e !== null; )
        pr(e), e = e.sibling;
    }
    function pr(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          sr(
            e,
            e.return,
            xl
          ), yr(e);
          break;
        case 22:
          var t = e.stateNode;
          t._visibility & Qc && (t._visibility &= ~Qc, yr(e));
          break;
        default:
          yr(e);
      }
    }
    function Km(e, t) {
      for (; Yl !== null; ) {
        var n = Yl, i = n;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            sr(
              i,
              t,
              xl
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (i = i.memoizedState.cachePool.pool, i != null && dc(i));
            break;
          case 24:
            Ua(i.memoizedState.cache);
        }
        if (i = n.child, i !== null) i.return = n, Yl = i;
        else
          e: for (n = e; Yl !== null; ) {
            i = Yl;
            var o = i.sibling, f = i.return;
            if (Zm(i), i === n) {
              Yl = null;
              break e;
            }
            if (o !== null) {
              o.return = f, Yl = o;
              break e;
            }
            Yl = f;
          }
      }
    }
    function $m() {
      yE.forEach(function(e) {
        return e();
      });
    }
    function Wm() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || X.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function cn(e) {
      if ((mt & Hn) !== Sa && Ie !== 0)
        return Ie & -Ie;
      var t = X.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e = Kr, e !== 0 ? e : uy()) : $p();
    }
    function C0() {
      Ea === 0 && (Ea = (Ie & 536870912) === 0 || ct ? Lh() : 536870912);
      var e = du.current;
      return e !== null && (e.flags |= 32), Ea;
    }
    function Yt(e, t, n) {
      if (Ch && console.error("useInsertionEffect must not schedule updates."), b1 && (Rg = !0), (e === Dt && (St === Ir || St === es) || e.cancelPendingCommit !== null) && (Uc(e, 0), wu(
        e,
        Ie,
        Ea,
        !1
      )), lo(e, n), (mt & Hn) !== 0 && e === Dt) {
        if (hn)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = Pe && Se(Pe) || "Unknown", BS.has(e) || (BS.add(e), t = Se(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              NS || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), NS = !0);
          }
      } else
        Xt && pu(e, t, n), N0(t), e === Dt && ((mt & Hn) === Sa && (hf |= n), $t === Pr && wu(
          e,
          Ie,
          Ea,
          !1
        )), Zn(e);
    }
    function tl(e, t, n) {
      if ((mt & (Hn | $u)) !== Sa)
        throw Error("Should not already be working.");
      var i = !n && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Ef(e, t), o = i ? Pm(e, t) : vd(e, t, !0), f = i;
      do {
        if (o === Fc) {
          Mh && !i && wu(e, t, 0, !1);
          break;
        } else {
          if (n = e.current.alternate, f && !H0(n)) {
            o = vd(e, t, !1), f = !1;
            continue;
          }
          if (o === xh) {
            if (f = t, e.errorRecoveryDisabledLanes & f)
              var m = 0;
            else
              m = e.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
            if (m !== 0) {
              t = m;
              e: {
                o = e;
                var g = m;
                m = Sp;
                var T = o.current.memoizedState.isDehydrated;
                if (T && (Uc(
                  o,
                  g
                ).flags |= 256), g = vd(
                  o,
                  g,
                  !1
                ), g !== xh) {
                  if (d1 && !T) {
                    o.errorRecoveryDisabledLanes |= f, hf |= f, o = Pr;
                    break e;
                  }
                  o = wn, wn = m, o !== null && (wn === null ? wn = o : wn.push.apply(
                    wn,
                    o
                  ));
                }
                o = g;
              }
              if (f = !1, o !== xh) continue;
            }
          }
          if (o === pp) {
            Uc(e, 0), wu(e, t, 0, !0);
            break;
          }
          e: {
            switch (i = e, o) {
              case Fc:
              case pp:
                throw Error("Root did not complete. This is a bug in React.");
              case Pr:
                if ((t & 4194048) !== t) break;
              case Tg:
                wu(
                  i,
                  t,
                  Ea,
                  !sf
                );
                break e;
              case xh:
                wn = null;
                break;
              case f1:
              case xS:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (X.actQueue !== null)
              Ad(
                i,
                n,
                t,
                wn,
                Tp,
                Eg,
                Ea,
                hf,
                ts
              );
            else {
              if ((t & 62914560) === t && (f = m1 + MS - tu(), 10 < f)) {
                if (wu(
                  i,
                  t,
                  Ea,
                  !sf
                ), gn(i, 0, !0) !== 0) break e;
                i.timeoutHandle = QS(
                  rl.bind(
                    null,
                    i,
                    n,
                    wn,
                    Tp,
                    Eg,
                    t,
                    Ea,
                    hf,
                    ts,
                    sf,
                    o,
                    bE,
                    Cb,
                    0
                  ),
                  f
                );
                break e;
              }
              rl(
                i,
                n,
                wn,
                Tp,
                Eg,
                t,
                Ea,
                hf,
                ts,
                sf,
                o,
                gE,
                Cb,
                0
              );
            }
          }
        }
        break;
      } while (!0);
      Zn(e);
    }
    function rl(e, t, n, i, o, f, m, g, T, A, L, Z, q, J) {
      if (e.timeoutHandle = is, Z = t.subtreeFlags, (Z & 8192 || (Z & 16785408) === 16785408) && (xp = { stylesheets: null, count: 0, unsuspend: L0 }, Ai(t), Z = G0(), Z !== null)) {
        e.cancelPendingCommit = Z(
          Ad.bind(
            null,
            e,
            t,
            f,
            n,
            i,
            o,
            m,
            g,
            T,
            L,
            vE,
            q,
            J
          )
        ), wu(
          e,
          f,
          m,
          !A
        );
        return;
      }
      Ad(
        e,
        t,
        f,
        n,
        i,
        o,
        m,
        g,
        T
      );
    }
    function H0(e) {
      for (var t = e; ; ) {
        var n = t.tag;
        if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
          for (var i = 0; i < n.length; i++) {
            var o = n[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!Mn(f(), o)) return !1;
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
    function wu(e, t, n, i) {
      t &= ~h1, t &= ~hf, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - Nl(o), m = 1 << f;
        i[f] = -1, o &= ~m;
      }
      n !== 0 && Kp(e, n, t);
    }
    function Mc() {
      return (mt & (Hn | $u)) === Sa ? (Cc(0), !1) : !0;
    }
    function yd() {
      if (Pe !== null) {
        if (St === In)
          var e = Pe.return;
        else
          e = Pe, Hs(), da(e), Sh = null, dp = 0, e = Pe;
        for (; e !== null; )
          Bm(e.alternate, e), e = e.return;
        Pe = null;
      }
    }
    function Uc(e, t) {
      var n = e.timeoutHandle;
      n !== is && (e.timeoutHandle = is, HE(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), yd(), Dt = e, Pe = n = za(e.current, null), Ie = t, St = In, Ta = null, sf = !1, Mh = Ef(e, t), d1 = !1, $t = Fc, ts = Ea = h1 = hf = df = 0, wn = Sp = null, Eg = !1, (t & 8) !== 0 && (t |= t & 32);
      var i = e.entangledLanes;
      if (i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; ) {
          var o = 31 - Nl(i), f = 1 << o;
          t |= e[o], i &= ~f;
        }
      return Xi = t, qf(), t = Mb(), 1e3 < t - zb && (X.recentlyCreatedOwnerStacks = 0, zb = t), ku.discardPendingWarnings(), n;
    }
    function gr(e, t) {
      Ne = null, X.H = bg, X.getCurrentStack = null, hn = !1, zn = null, t === op || t === mg ? (t = bm(), St = vp) : t === _b ? (t = bm(), St = zS) : St = t === vS ? s1 : t !== null && typeof t == "object" && typeof t.then == "function" ? zh : gp, Ta = t;
      var n = Pe;
      if (n === null)
        $t = pp, Mo(
          e,
          Sn(t, e.current)
        );
      else
        switch (n.mode & Jl && Ru(n), Fl(), St) {
          case gp:
            se !== null && typeof se.markComponentErrored == "function" && se.markComponentErrored(
              n,
              t,
              Ie
            );
            break;
          case Ir:
          case es:
          case vp:
          case zh:
          case bp:
            se !== null && typeof se.markComponentSuspended == "function" && se.markComponentSuspended(
              n,
              t,
              Ie
            );
        }
    }
    function pd() {
      var e = X.H;
      return X.H = bg, e === null ? bg : e;
    }
    function Fm() {
      var e = X.A;
      return X.A = mE, e;
    }
    function gd() {
      $t = Pr, sf || (Ie & 4194048) !== Ie && du.current !== null || (Mh = !0), (df & 134217727) === 0 && (hf & 134217727) === 0 || Dt === null || wu(
        Dt,
        Ie,
        Ea,
        !1
      );
    }
    function vd(e, t, n) {
      var i = mt;
      mt |= Hn;
      var o = pd(), f = Fm();
      if (Dt !== e || Ie !== t) {
        if (Xt) {
          var m = e.memoizedUpdaters;
          0 < m.size && (qo(e, Ie), m.clear()), Pl(e, t);
        }
        Tp = null, Uc(e, t);
      }
      yu(t), t = !1, m = $t;
      e: do
        try {
          if (St !== In && Pe !== null) {
            var g = Pe, T = Ta;
            switch (St) {
              case s1:
                yd(), m = Tg;
                break e;
              case vp:
              case Ir:
              case es:
              case zh:
                du.current === null && (t = !0);
                var A = St;
                if (St = In, Ta = null, Ri(e, g, T, A), n && Mh) {
                  m = Fc;
                  break e;
                }
                break;
              default:
                A = St, St = In, Ta = null, Ri(e, g, T, A);
            }
          }
          bd(), m = $t;
          break;
        } catch (L) {
          gr(e, L);
        }
      while (!0);
      return t && e.shellSuspendCounter++, Hs(), mt = i, X.H = o, X.A = f, Ee(), Pe === null && (Dt = null, Ie = 0, qf()), m;
    }
    function bd() {
      for (; Pe !== null; ) ey(Pe);
    }
    function Pm(e, t) {
      var n = mt;
      mt |= Hn;
      var i = pd(), o = Fm();
      if (Dt !== e || Ie !== t) {
        if (Xt) {
          var f = e.memoizedUpdaters;
          0 < f.size && (qo(e, Ie), f.clear()), Pl(e, t);
        }
        Tp = null, Ag = tu() + US, Uc(e, t);
      } else
        Mh = Ef(
          e,
          t
        );
      yu(t);
      e: do
        try {
          if (St !== In && Pe !== null)
            t: switch (t = Pe, f = Ta, St) {
              case gp:
                St = In, Ta = null, Ri(
                  e,
                  t,
                  f,
                  gp
                );
                break;
              case Ir:
              case es:
                if (vm(f)) {
                  St = In, Ta = null, Sd(t);
                  break;
                }
                t = function() {
                  St !== Ir && St !== es || Dt !== e || (St = bp), Zn(e);
                }, f.then(t, t);
                break e;
              case vp:
                St = bp;
                break e;
              case zS:
                St = r1;
                break e;
              case bp:
                vm(f) ? (St = In, Ta = null, Sd(t)) : (St = In, Ta = null, Ri(
                  e,
                  t,
                  f,
                  bp
                ));
                break;
              case r1:
                var m = null;
                switch (Pe.tag) {
                  case 26:
                    m = Pe.memoizedState;
                  case 5:
                  case 27:
                    var g = Pe;
                    if (!m || Ar(m)) {
                      St = In, Ta = null;
                      var T = g.sibling;
                      if (T !== null) Pe = T;
                      else {
                        var A = g.return;
                        A !== null ? (Pe = A, vr(A)) : Pe = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                St = In, Ta = null, Ri(
                  e,
                  t,
                  f,
                  r1
                );
                break;
              case zh:
                St = In, Ta = null, Ri(
                  e,
                  t,
                  f,
                  zh
                );
                break;
              case s1:
                yd(), $t = Tg;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          X.actQueue !== null ? bd() : Im();
          break;
        } catch (L) {
          gr(e, L);
        }
      while (!0);
      return Hs(), X.H = i, X.A = o, mt = n, Pe !== null ? (se !== null && typeof se.markRenderYielded == "function" && se.markRenderYielded(), Fc) : (Ee(), Dt = null, Ie = 0, qf(), $t);
    }
    function Im() {
      for (; Pe !== null && !$0(); )
        ey(Pe);
    }
    function ey(e) {
      var t = e.alternate;
      (e.mode & Jl) !== Ct ? (ws(e), t = pe(
        e,
        fd,
        t,
        e,
        Xi
      ), Ru(e)) : t = pe(
        e,
        fd,
        t,
        e,
        Xi
      ), e.memoizedProps = e.pendingProps, t === null ? vr(e) : Pe = t;
    }
    function Sd(e) {
      var t = pe(e, Td, e);
      e.memoizedProps = e.pendingProps, t === null ? vr(e) : Pe = t;
    }
    function Td(e) {
      var t = e.alternate, n = (e.mode & Jl) !== Ct;
      switch (n && ws(e), e.tag) {
        case 15:
        case 0:
          t = Cm(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            Ie
          );
          break;
        case 11:
          t = Cm(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            Ie
          );
          break;
        case 5:
          da(e);
        default:
          Bm(t, e), e = Pe = um(e, Xi), t = fd(t, e, Xi);
      }
      return n && Ru(e), t;
    }
    function Ri(e, t, n, i) {
      Hs(), da(t), Sh = null, dp = 0;
      var o = t.return;
      try {
        if (ar(
          e,
          o,
          t,
          n,
          Ie
        )) {
          $t = pp, Mo(
            e,
            Sn(n, e.current)
          ), Pe = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw Pe = o, f;
        $t = pp, Mo(
          e,
          Sn(n, e.current)
        ), Pe = null;
        return;
      }
      t.flags & 32768 ? (ct || i === gp ? e = !0 : Mh || (Ie & 536870912) !== 0 ? e = !1 : (sf = e = !0, (i === Ir || i === es || i === vp || i === zh) && (i = du.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Ed(t, e)) : vr(t);
    }
    function vr(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          Ed(
            t,
            sf
          );
          return;
        }
        var n = t.alternate;
        if (e = t.return, ws(t), n = pe(
          t,
          R0,
          n,
          t,
          Xi
        ), (t.mode & Jl) !== Ct && mc(t), n !== null) {
          Pe = n;
          return;
        }
        if (t = t.sibling, t !== null) {
          Pe = t;
          return;
        }
        Pe = t = e;
      } while (t !== null);
      $t === Fc && ($t = xS);
    }
    function Ed(e, t) {
      do {
        var n = O0(e.alternate, e);
        if (n !== null) {
          n.flags &= 32767, Pe = n;
          return;
        }
        if ((e.mode & Jl) !== Ct) {
          mc(e), n = e.actualDuration;
          for (var i = e.child; i !== null; )
            n += i.actualDuration, i = i.sibling;
          e.actualDuration = n;
        }
        if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
          Pe = e;
          return;
        }
        Pe = e = n;
      } while (e !== null);
      $t = Tg, Pe = null;
    }
    function Ad(e, t, n, i, o, f, m, g, T) {
      e.cancelPendingCommit = null;
      do
        _o();
      while ($l !== ls);
      if (ku.flushLegacyContextWarning(), ku.flushPendingUnsafeLifecycleWarnings(), (mt & (Hn | $u)) !== Sa)
        throw Error("Should not already be working.");
      if (se !== null && typeof se.markCommitStarted == "function" && se.markCommitStarted(n), t === null) zt();
      else {
        if (n === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= Gv, hv(
          e,
          n,
          f,
          m,
          g,
          T
        ), e === Dt && (Pe = Dt = null, Ie = 0), Uh = t, yf = e, pf = n, p1 = f, g1 = o, _S = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, ay(Po, function() {
          return br(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), rg = yh(), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = X.T, X.T = null, o = Ce.p, Ce.p = Ol, m = mt, mt |= $u;
          try {
            dd(e, t, n);
          } finally {
            mt = m, Ce.p = o, X.T = i;
          }
        }
        $l = CS, Za(), Rd(), w0();
      }
    }
    function Za() {
      if ($l === CS) {
        $l = ls;
        var e = yf, t = Uh, n = pf, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = X.T, X.T = null;
          var o = Ce.p;
          Ce.p = Ol;
          var f = mt;
          mt |= $u;
          try {
            Oh = n, Dh = e, km(t, e), Dh = Oh = null, n = z1;
            var m = r0(e.containerInfo), g = n.focusedElem, T = n.selectionRange;
            if (m !== g && g && g.ownerDocument && f0(
              g.ownerDocument.documentElement,
              g
            )) {
              if (T !== null && tm(g)) {
                var A = T.start, L = T.end;
                if (L === void 0 && (L = A), "selectionStart" in g)
                  g.selectionStart = A, g.selectionEnd = Math.min(
                    L,
                    g.value.length
                  );
                else {
                  var Z = g.ownerDocument || document, q = Z && Z.defaultView || window;
                  if (q.getSelection) {
                    var J = q.getSelection(), ge = g.textContent.length, He = Math.min(
                      T.start,
                      ge
                    ), xt = T.end === void 0 ? He : Math.min(T.end, ge);
                    !J.extend && He > xt && (m = xt, xt = He, He = m);
                    var tt = em(
                      g,
                      He
                    ), D = em(
                      g,
                      xt
                    );
                    if (tt && D && (J.rangeCount !== 1 || J.anchorNode !== tt.node || J.anchorOffset !== tt.offset || J.focusNode !== D.node || J.focusOffset !== D.offset)) {
                      var x = Z.createRange();
                      x.setStart(tt.node, tt.offset), J.removeAllRanges(), He > xt ? (J.addRange(x), J.extend(D.node, D.offset)) : (x.setEnd(D.node, D.offset), J.addRange(x));
                    }
                  }
                }
              }
              for (Z = [], J = g; J = J.parentNode; )
                J.nodeType === 1 && Z.push({
                  element: J,
                  left: J.scrollLeft,
                  top: J.scrollTop
                });
              for (typeof g.focus == "function" && g.focus(), g = 0; g < Z.length; g++) {
                var z = Z[g];
                z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
              }
            }
            jg = !!x1, z1 = x1 = null;
          } finally {
            mt = f, Ce.p = o, X.T = i;
          }
        }
        e.current = t, $l = HS;
      }
    }
    function Rd() {
      if ($l === HS) {
        $l = ls;
        var e = yf, t = Uh, n = pf, i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = X.T, X.T = null;
          var o = Ce.p;
          Ce.p = Ol;
          var f = mt;
          mt |= $u;
          try {
            se !== null && typeof se.markLayoutEffectsStarted == "function" && se.markLayoutEffectsStarted(n), Oh = n, Dh = e, Qm(
              e,
              t.alternate,
              t
            ), Dh = Oh = null, se !== null && typeof se.markLayoutEffectsStopped == "function" && se.markLayoutEffectsStopped();
          } finally {
            mt = f, Ce.p = o, X.T = i;
          }
        }
        $l = wS;
      }
    }
    function w0() {
      if ($l === SE || $l === wS) {
        $l = ls, Cv();
        var e = yf, t = Uh, n = pf, i = _S, o = (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0;
        o ? $l = y1 : ($l = ls, Uh = yf = null, ka(e, e.pendingLanes), ns = 0, Ap = null);
        var f = e.pendingLanes;
        if (f === 0 && (mf = null), o || Bo(e), o = Gh(n), t = t.stateNode, Rl && typeof Rl.onCommitFiberRoot == "function")
          try {
            var m = (t.current.flags & 128) === 128;
            switch (o) {
              case Ol:
                var g = Jd;
                break;
              case ba:
                g = Nr;
                break;
              case Gu:
                g = Po;
                break;
              case Fd:
                g = Br;
                break;
              default:
                g = Po;
            }
            Rl.onCommitFiberRoot(
              _i,
              t,
              g,
              m
            );
          } catch (Z) {
            sn || (sn = !0, console.error(
              "React instrumentation encountered an error: %s",
              Z
            ));
          }
        if (Xt && e.memoizedUpdaters.clear(), $m(), i !== null) {
          m = X.T, g = Ce.p, Ce.p = Ol, X.T = null;
          try {
            var T = e.onRecoverableError;
            for (t = 0; t < i.length; t++) {
              var A = i[t], L = _0(A.stack);
              pe(
                A.source,
                T,
                A.value,
                L
              );
            }
          } finally {
            X.T = m, Ce.p = g;
          }
        }
        (pf & 3) !== 0 && _o(), Zn(e), f = e.pendingLanes, (n & 4194090) !== 0 && (f & 42) !== 0 ? (dg = !0, e === v1 ? Ep++ : (Ep = 0, v1 = e)) : Ep = 0, Cc(0), zt();
      }
    }
    function _0(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function ka(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ua(t)));
    }
    function _o(e) {
      return Za(), Rd(), w0(), br();
    }
    function br() {
      if ($l !== y1) return !1;
      var e = yf, t = p1;
      p1 = 0;
      var n = Gh(pf), i = Gu > n ? Gu : n;
      n = X.T;
      var o = Ce.p;
      try {
        Ce.p = i, X.T = null, i = g1, g1 = null;
        var f = yf, m = pf;
        if ($l = ls, Uh = yf = null, pf = 0, (mt & (Hn | $u)) !== Sa)
          throw Error("Cannot flush passive effects while already rendering.");
        b1 = !0, Rg = !1, se !== null && typeof se.markPassiveEffectsStarted == "function" && se.markPassiveEffectsStarted(m);
        var g = mt;
        if (mt |= $u, Jm(f.current), hr(
          f,
          f.current,
          m,
          i
        ), se !== null && typeof se.markPassiveEffectsStopped == "function" && se.markPassiveEffectsStopped(), Bo(f), mt = g, Cc(0, !1), Rg ? f === Ap ? ns++ : (ns = 0, Ap = f) : ns = 0, Rg = b1 = !1, Rl && typeof Rl.onPostCommitFiberRoot == "function")
          try {
            Rl.onPostCommitFiberRoot(_i, f);
          } catch (A) {
            sn || (sn = !0, console.error(
              "React instrumentation encountered an error: %s",
              A
            ));
          }
        var T = f.current.stateNode;
        return T.effectDuration = 0, T.passiveEffectDuration = 0, !0;
      } finally {
        Ce.p = o, X.T = n, ka(e, t);
      }
    }
    function No(e, t, n) {
      t = Sn(n, t), t = Hl(e.stateNode, t, 2), e = ra(e, t, 2), e !== null && (lo(e, 2), Zn(e));
    }
    function Me(e, t, n) {
      if (Ch = !1, e.tag === 3)
        No(e, e, n);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            No(
              t,
              e,
              n
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (mf === null || !mf.has(i))) {
              e = Sn(n, e), n = qt(2), i = ra(t, n, 2), i !== null && (nr(
                n,
                i,
                t,
                e
              ), lo(i, 2), Zn(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          n
        );
      }
    }
    function ty(e, t, n) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new pE();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(n) || (d1 = !0, o.add(n), i = Rv.bind(null, e, t, n), Xt && qo(e, n), t.then(i, i));
    }
    function Rv(e, t, n) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Wm() && X.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), Dt === e && (Ie & n) === n && ($t === Pr || $t === f1 && (Ie & 62914560) === Ie && tu() - m1 < MS ? (mt & Hn) === Sa && Uc(e, 0) : h1 |= n, ts === Ie && (ts = 0)), Zn(e);
    }
    function ly(e, t) {
      t === 0 && (t = Af()), e = Il(e, t), e !== null && (lo(e, t), Zn(e));
    }
    function Sr(e) {
      var t = e.memoizedState, n = 0;
      t !== null && (n = t.retryLane), ly(e, n);
    }
    function Oi(e, t) {
      var n = 0;
      switch (e.tag) {
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (n = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), ly(e, n);
    }
    function Od(e, t, n) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === Jo;
          f = n || f, o.tag !== 22 ? o.flags & 67108864 ? f && pe(
            o,
            ny,
            i,
            o,
            (o.mode & Ob) === Ct
          ) : Od(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? pe(
            o,
            ny,
            i,
            o
          ) : o.subtreeFlags & 67108864 && pe(
            o,
            Od,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function ny(e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
      $e(!0);
      try {
        Rn(t), n && pr(t), Hu(e, t.alternate, t, !1), n && md(e, t, 0, null, !1, 0);
      } finally {
        $e(!1);
      }
    }
    function Bo(e) {
      var t = !0;
      e.current.mode & (mn | Zu) || (t = !1), Od(
        e,
        e.current,
        t
      );
    }
    function ga(e) {
      if ((mt & Hn) === Sa) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = Se(e) || "ReactComponent", Og !== null) {
            if (Og.has(t)) return;
            Og.add(t);
          } else Og = /* @__PURE__ */ new Set([t]);
          pe(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function qo(e, t) {
      Xt && e.memoizedUpdaters.forEach(function(n) {
        pu(e, n, t);
      });
    }
    function ay(e, t) {
      var n = X.actQueue;
      return n !== null ? (n.push(t), AE) : kd(e, t);
    }
    function N0(e) {
      Wm() && X.actQueue === null && pe(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          Se(e)
        );
      });
    }
    function Zn(e) {
      e !== Hh && e.next === null && (Hh === null ? Dg = Hh = e : Hh = Hh.next = e), xg = !0, X.actQueue !== null ? T1 || (T1 = !0, ll()) : S1 || (S1 = !0, ll());
    }
    function Cc(e, t) {
      if (!E1 && xg) {
        E1 = !0;
        do
          for (var n = !1, i = Dg; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var m = i.suspendedLanes, g = i.pingedLanes;
                f = (1 << 31 - Nl(42 | e) + 1) - 1, f &= o & ~(m & ~g), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (n = !0, zd(i, f));
            } else
              f = Ie, f = gn(
                i,
                i === Dt ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== is
              ), (f & 3) === 0 || Ef(i, f) || (n = !0, zd(i, f));
            i = i.next;
          }
        while (n);
        E1 = !1;
      }
    }
    function Dd() {
      xd();
    }
    function xd() {
      xg = T1 = S1 = !1;
      var e = 0;
      as !== 0 && (Yo() && (e = as), as = 0);
      for (var t = tu(), n = null, i = Dg; i !== null; ) {
        var o = i.next, f = Ja(i, t);
        f === 0 ? (i.next = null, n === null ? Dg = o : n.next = o, o === null && (Hh = n)) : (n = i, (e !== 0 || (f & 3) !== 0) && (xg = !0)), i = o;
      }
      Cc(e);
    }
    function Ja(e, t) {
      for (var n = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var m = 31 - Nl(f), g = 1 << m, T = o[m];
        T === -1 ? ((g & n) === 0 || (g & i) !== 0) && (o[m] = Jp(g, t)) : T <= t && (e.expiredLanes |= g), f &= ~g;
      }
      if (t = Dt, n = Ie, n = gn(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== is
      ), i = e.callbackNode, n === 0 || e === t && (St === Ir || St === es) || e.cancelPendingCommit !== null)
        return i !== null && Md(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((n & 3) === 0 || Ef(e, n)) {
        if (t = n & -n, t !== e.callbackPriority || X.actQueue !== null && i !== A1)
          Md(i);
        else return t;
        switch (Gh(n)) {
          case Ol:
          case ba:
            n = Nr;
            break;
          case Gu:
            n = Po;
            break;
          case Fd:
            n = Br;
            break;
          default:
            n = Po;
        }
        return i = jt.bind(null, e), X.actQueue !== null ? (X.actQueue.push(i), n = A1) : n = kd(n, i), e.callbackPriority = t, e.callbackNode = n, t;
      }
      return i !== null && Md(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function jt(e, t) {
      if (dg = sg = !1, $l !== ls && $l !== y1)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var n = e.callbackNode;
      if (_o() && e.callbackNode !== n)
        return null;
      var i = Ie;
      return i = gn(
        e,
        e === Dt ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== is
      ), i === 0 ? null : (tl(
        e,
        i,
        t
      ), Ja(e, tu()), e.callbackNode != null && e.callbackNode === n ? jt.bind(null, e) : null);
    }
    function zd(e, t) {
      if (_o()) return null;
      sg = dg, dg = !1, tl(e, t, !0);
    }
    function Md(e) {
      e !== A1 && e !== null && Uv(e);
    }
    function ll() {
      X.actQueue !== null && X.actQueue.push(function() {
        return xd(), null;
      }), wE(function() {
        (mt & (Hn | $u)) !== Sa ? kd(
          Jd,
          Dd
        ) : xd();
      });
    }
    function uy() {
      return as === 0 && (as = Lh()), as;
    }
    function iy(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (fe(e, "action"), ro("" + e));
    }
    function cy(e, t) {
      var n = t.ownerDocument.createElement("input");
      return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
    }
    function Mt(e, t, n, i, o) {
      if (t === "submit" && n && n.stateNode === o) {
        var f = iy(
          (o[dn] || null).action
        ), m = i.submitter;
        m && (t = (t = m[dn] || null) ? iy(t.formAction) : m.getAttribute("formAction"), t !== null && (f = t, m = null));
        var g = new xe(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: g,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (as !== 0) {
                    var T = m ? cy(
                      o,
                      m
                    ) : new FormData(o), A = {
                      pending: !0,
                      data: T,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(A), vc(
                      n,
                      A,
                      null,
                      T
                    );
                  }
                } else
                  typeof f == "function" && (g.preventDefault(), T = m ? cy(
                    o,
                    m
                  ) : new FormData(o), A = {
                    pending: !0,
                    data: T,
                    method: o.method,
                    action: f
                  }, Object.freeze(A), vc(
                    n,
                    A,
                    f,
                    T
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function Sl(e, t, n) {
      e.currentTarget = n;
      try {
        t(e);
      } catch (i) {
        a1(i);
      }
      e.currentTarget = null;
    }
    function Ka(e, t) {
      t = (t & 4) !== 0;
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var m = i.length - 1; 0 <= m; m--) {
              var g = i[m], T = g.instance, A = g.currentTarget;
              if (g = g.listener, T !== o && f.isPropagationStopped())
                break e;
              T !== null ? pe(
                T,
                Sl,
                f,
                g,
                A
              ) : Sl(f, g, A), o = T;
            }
          else
            for (m = 0; m < i.length; m++) {
              if (g = i[m], T = g.instance, A = g.currentTarget, g = g.listener, T !== o && f.isPropagationStopped())
                break e;
              T !== null ? pe(
                T,
                Sl,
                f,
                g,
                A
              ) : Sl(f, g, A), o = T;
            }
        }
      }
    }
    function Ke(e, t) {
      R1.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var n = t[_y];
      n === void 0 && (n = t[_y] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      n.has(i) || (Cd(t, e, 2, !1), n.add(i));
    }
    function Ud(e, t, n) {
      R1.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), Cd(
        n,
        e,
        i,
        t
      );
    }
    function oy(e) {
      if (!e[zg]) {
        e[zg] = !0, F0.forEach(function(n) {
          n !== "selectionchange" && (R1.has(n) || Ud(n, !1, e), Ud(n, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[zg] || (t[zg] = !0, Ud("selectionchange", !1, t));
      }
    }
    function Cd(e, t, n, i) {
      switch (Gd(t)) {
        case Ol:
          var o = xv;
          break;
        case ba:
          o = Vd;
          break;
        default:
          o = Mi;
      }
      n = o.bind(
        null,
        t,
        n,
        e
      ), o = void 0, !B || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
      }) : e.addEventListener(
        t,
        n,
        !1
      );
    }
    function Xl(e, t, n, i, o) {
      var f = i;
      if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var m = i.tag;
          if (m === 3 || m === 4) {
            var g = i.stateNode.containerInfo;
            if (g === o) break;
            if (m === 4)
              for (m = i.return; m !== null; ) {
                var T = m.tag;
                if ((T === 3 || T === 4) && m.stateNode.containerInfo === o)
                  return;
                m = m.return;
              }
            for (; g !== null; ) {
              if (m = gu(g), m === null) return;
              if (T = m.tag, T === 5 || T === 6 || T === 26 || T === 27) {
                i = f = m;
                continue e;
              }
              g = g.parentNode;
            }
          }
          i = i.return;
        }
      Es(function() {
        var A = f, L = ac(n), Z = [];
        e: {
          var q = Rb.get(e);
          if (q !== void 0) {
            var J = xe, ge = e;
            switch (e) {
              case "keypress":
                if (so(n) === 0) break e;
              case "keydown":
              case "keyup":
                J = L2;
                break;
              case "focusin":
                ge = "focus", J = lt;
                break;
              case "focusout":
                ge = "blur", J = lt;
                break;
              case "beforeblur":
              case "afterblur":
                J = lt;
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
                J = Ze;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                J = Ue;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                J = X2;
                break;
              case Sb:
              case Tb:
              case Eb:
                J = Nv;
                break;
              case Ab:
                J = Z2;
                break;
              case "scroll":
              case "scrollend":
                J = H;
                break;
              case "wheel":
                J = J2;
                break;
              case "copy":
              case "cut":
              case "paste":
                J = w2;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                J = db;
                break;
              case "toggle":
              case "beforetoggle":
                J = $2;
            }
            var He = (t & 4) !== 0, xt = !He && (e === "scroll" || e === "scrollend"), tt = He ? q !== null ? q + "Capture" : null : q;
            He = [];
            for (var D = A, x; D !== null; ) {
              var z = D;
              if (x = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || x === null || tt === null || (z = Su(D, tt), z != null && He.push(
                Ql(
                  D,
                  z,
                  x
                )
              )), xt) break;
              D = D.return;
            }
            0 < He.length && (q = new J(
              q,
              ge,
              null,
              n,
              L
            ), Z.push({
              event: q,
              listeners: He
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (q = e === "mouseover" || e === "pointerover", J = e === "mouseout" || e === "pointerout", q && n !== r && (ge = n.relatedTarget || n.fromElement) && (gu(ge) || ge[Bi]))
              break e;
            if ((J || q) && (q = L.window === L ? L : (q = L.ownerDocument) ? q.defaultView || q.parentWindow : window, J ? (ge = n.relatedTarget || n.toElement, J = A, ge = ge ? gu(ge) : null, ge !== null && (xt = ce(ge), He = ge.tag, ge !== xt || He !== 5 && He !== 27 && He !== 6) && (ge = null)) : (J = null, ge = A), J !== ge)) {
              if (He = Ze, z = "onMouseLeave", tt = "onMouseEnter", D = "mouse", (e === "pointerout" || e === "pointerover") && (He = db, z = "onPointerLeave", tt = "onPointerEnter", D = "pointer"), xt = J == null ? q : Pu(J), x = ge == null ? q : Pu(ge), q = new He(
                z,
                D + "leave",
                J,
                n,
                L
              ), q.target = xt, q.relatedTarget = x, z = null, gu(L) === A && (He = new He(
                tt,
                D + "enter",
                ge,
                n,
                L
              ), He.target = x, He.relatedTarget = xt, z = He), xt = z, J && ge)
                t: {
                  for (He = J, tt = ge, D = 0, x = He; x; x = sl(x))
                    D++;
                  for (x = 0, z = tt; z; z = sl(z))
                    x++;
                  for (; 0 < D - x; )
                    He = sl(He), D--;
                  for (; 0 < x - D; )
                    tt = sl(tt), x--;
                  for (; D--; ) {
                    if (He === tt || tt !== null && He === tt.alternate)
                      break t;
                    He = sl(He), tt = sl(tt);
                  }
                  He = null;
                }
              else He = null;
              J !== null && fy(
                Z,
                q,
                J,
                He,
                !1
              ), ge !== null && xt !== null && fy(
                Z,
                xt,
                ge,
                He,
                !0
              );
            }
          }
          e: {
            if (q = A ? Pu(A) : window, J = q.nodeName && q.nodeName.toLowerCase(), J === "select" || J === "input" && q.type === "file")
              var K = Ph;
            else if (u0(q))
              if (vb)
                K = Sv;
              else {
                K = Ih;
                var oe = vv;
              }
            else
              J = q.nodeName, !J || J.toLowerCase() !== "input" || q.type !== "checkbox" && q.type !== "radio" ? A && nc(A.elementType) && (K = Ph) : K = bv;
            if (K && (K = K(e, A))) {
              Ds(
                Z,
                K,
                n,
                L
              );
              break e;
            }
            oe && oe(e, q, A), e === "focusout" && A && q.type === "number" && A.memoizedProps.value != null && ps(q, "number", q.value);
          }
          switch (oe = A ? Pu(A) : window, e) {
            case "focusin":
              (u0(oe) || oe.contentEditable === "true") && (ch = oe, qv = A, ep = null);
              break;
            case "focusout":
              ep = qv = ch = null;
              break;
            case "mousedown":
              Yv = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Yv = !1, s0(
                Z,
                n,
                L
              );
              break;
            case "selectionchange":
              if (I2) break;
            case "keydown":
            case "keyup":
              s0(
                Z,
                n,
                L
              );
          }
          var Ye;
          if (Bv)
            e: {
              switch (e) {
                case "compositionstart":
                  var ve = "onCompositionStart";
                  break e;
                case "compositionend":
                  ve = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  ve = "onCompositionUpdate";
                  break e;
              }
              ve = void 0;
            }
          else
            ih ? Gl(e, n) && (ve = "onCompositionEnd") : e === "keydown" && n.keyCode === hb && (ve = "onCompositionStart");
          ve && (mb && n.locale !== "ko" && (ih || ve !== "onCompositionStart" ? ve === "onCompositionEnd" && ih && (Ye = Tu()) : (P = L, Y = "value" in P ? P.value : P.textContent, ih = !0)), oe = Tr(
            A,
            ve
          ), 0 < oe.length && (ve = new sb(
            ve,
            e,
            null,
            n,
            L
          ), Z.push({
            event: ve,
            listeners: oe
          }), Ye ? ve.data = Ye : (Ye = ui(n), Ye !== null && (ve.data = Ye)))), (Ye = F2 ? Os(e, n) : _f(e, n)) && (ve = Tr(
            A,
            "onBeforeInput"
          ), 0 < ve.length && (oe = new N2(
            "onBeforeInput",
            "beforeinput",
            null,
            n,
            L
          ), Z.push({
            event: oe,
            listeners: ve
          }), oe.data = Ye)), Mt(
            Z,
            e,
            A,
            n,
            L
          );
        }
        Ka(Z, t);
      });
    }
    function Ql(e, t, n) {
      return {
        instance: e,
        listener: t,
        currentTarget: n
      };
    }
    function Tr(e, t) {
      for (var n = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = Su(e, n), o != null && i.unshift(
          Ql(e, o, f)
        ), o = Su(e, t), o != null && i.push(
          Ql(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function sl(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function fy(e, t, n, i, o) {
      for (var f = t._reactName, m = []; n !== null && n !== i; ) {
        var g = n, T = g.alternate, A = g.stateNode;
        if (g = g.tag, T !== null && T === i) break;
        g !== 5 && g !== 26 && g !== 27 || A === null || (T = A, o ? (A = Su(n, f), A != null && m.unshift(
          Ql(n, A, T)
        )) : o || (A = Su(n, f), A != null && m.push(
          Ql(n, A, T)
        ))), n = n.return;
      }
      m.length !== 0 && e.push({ event: t, listeners: m });
    }
    function $a(e, t) {
      fo(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || Wy || (Wy = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var n = {
        registrationNameDependencies: Wn,
        possibleRegistrationNames: Lc
      };
      nc(e) || typeof t.is == "string" || $h(e, t, n), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function Ut(e, t, n, i) {
      t !== n && (n = Tl(n), Tl(t) !== n && (i[e] = t));
    }
    function Di(e, t, n) {
      t.forEach(function(i) {
        n[sy(i)] = i === "style" ? wc(e) : e.getAttribute(i);
      });
    }
    function kn(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function Hd(e, t) {
      return e = e.namespaceURI === Xr || e.namespaceURI === uf ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function Tl(e) {
      return G(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        Oe(e)
      ), ye(e)), (typeof e == "string" ? e : "" + e).replace(RE, `
`).replace(OE, "");
    }
    function ry(e, t) {
      return t = Tl(t), Tl(e) === t;
    }
    function _u() {
    }
    function ut(e, t, n, i, o, f) {
      switch (n) {
        case "children":
          typeof i == "string" ? (Hf(i, t, !1), t === "body" || t === "textarea" && i === "" || lc(e, i)) : (typeof i == "number" || typeof i == "bigint") && (Hf("" + i, t, !1), t !== "body" && lc(e, "" + i));
          break;
        case "className":
          Of(e, "class", i);
          break;
        case "tabIndex":
          Of(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Of(e, n, i);
          break;
        case "style":
          wf(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            Of(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || n !== "href")) {
            console.error(
              n === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              n,
              n
            ), e.removeAttribute(n);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(n);
            break;
          }
          fe(i, n), i = ro("" + i), e.setAttribute(n, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? n === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || Cg || (Cg = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Ug || (Ug = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? n === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || Mg ? t !== "button" || o.type == null || o.type === "submit" || Mg ? typeof i == "function" && (o.name == null || jS || (jS = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Cg || (Cg = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Ug || (Ug = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Mg = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Mg = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            n === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              n,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (n === "formAction" ? (t !== "input" && ut(e, t, "name", o.name, o, null), ut(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), ut(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), ut(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (ut(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), ut(e, t, "method", o.method, o, null), ut(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(n);
            break;
          }
          fe(i, n), i = ro("" + i), e.setAttribute(n, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && kn(n, i), e.onclick = _u);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && kn(n, i), Ke("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && kn(n, i), Ke("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (n = i.__html, n != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = n;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
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
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          fe(i, n), n = ro("" + i), e.setAttributeNS(us, "xlink:href", n);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (fe(i, n), e.setAttribute(n, "" + i)) : e.removeAttribute(n);
          break;
        case "inert":
          i !== "" || Hg[n] || (Hg[n] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            n
          ));
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
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(n, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (fe(i, n), e.setAttribute(n, i)) : e.removeAttribute(n);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (fe(i, n), e.setAttribute(n, i)) : e.removeAttribute(n);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(n) : (fe(i, n), e.setAttribute(n, i));
          break;
        case "popover":
          Ke("beforetoggle", e), Ke("toggle", e), Rf(e, "popover", i);
          break;
        case "xlinkActuate":
          aa(
            e,
            us,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          aa(
            e,
            us,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          aa(
            e,
            us,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          aa(
            e,
            us,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          aa(
            e,
            us,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          aa(
            e,
            us,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          aa(
            e,
            O1,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          aa(
            e,
            O1,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          aa(
            e,
            O1,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), Rf(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          LS || i == null || typeof i != "object" || (LS = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N" ? (n = Ts(n), Rf(e, n, i)) : Wn.hasOwnProperty(n) && i != null && typeof i != "function" && kn(n, i);
      }
    }
    function Hc(e, t, n, i, o, f) {
      switch (n) {
        case "style":
          wf(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (n = i.__html, n != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = n;
            }
          }
          break;
        case "children":
          typeof i == "string" ? lc(e, i) : (typeof i == "number" || typeof i == "bigint") && lc(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && kn(n, i), Ke("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && kn(n, i), Ke("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && kn(n, i), e.onclick = _u);
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
          if (Wn.hasOwnProperty(n))
            i != null && typeof i != "function" && kn(n, i);
          else
            e: {
              if (n[0] === "o" && n[1] === "n" && (o = n.endsWith("Capture"), t = n.slice(2, o ? n.length - 7 : void 0), f = e[dn] || null, f = f != null ? f[n] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, i, o);
                break e;
              }
              n in e ? e[n] = i : i === !0 ? e.setAttribute(n, "") : Rf(e, n, i);
            }
      }
    }
    function Lt(e, t, n) {
      switch ($a(t, n), t) {
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
          Ke("error", e), Ke("load", e);
          var i = !1, o = !1, f;
          for (f in n)
            if (n.hasOwnProperty(f)) {
              var m = n[f];
              if (m != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    ut(e, t, f, m, n, null);
                }
            }
          o && ut(e, t, "srcSet", n.srcSet, n, null), i && ut(e, t, "src", n.src, n, null);
          return;
        case "input":
          ei("input", n), Ke("invalid", e);
          var g = f = m = o = null, T = null, A = null;
          for (i in n)
            if (n.hasOwnProperty(i)) {
              var L = n[i];
              if (L != null)
                switch (i) {
                  case "name":
                    o = L;
                    break;
                  case "type":
                    m = L;
                    break;
                  case "checked":
                    T = L;
                    break;
                  case "defaultChecked":
                    A = L;
                    break;
                  case "value":
                    f = L;
                    break;
                  case "defaultValue":
                    g = L;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (L != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    ut(e, t, i, L, n, null);
                }
            }
          ti(e, n), e0(
            e,
            f,
            g,
            T,
            A,
            m,
            o,
            !1
          ), vu(e);
          return;
        case "select":
          ei("select", n), Ke("invalid", e), i = m = f = null;
          for (o in n)
            if (n.hasOwnProperty(o) && (g = n[o], g != null))
              switch (o) {
                case "value":
                  f = g;
                  break;
                case "defaultValue":
                  m = g;
                  break;
                case "multiple":
                  i = g;
                default:
                  ut(
                    e,
                    t,
                    o,
                    g,
                    n,
                    null
                  );
              }
          Mf(e, n), t = f, n = m, e.multiple = !!i, t != null ? bu(e, !!i, t, !1) : n != null && bu(e, !!i, n, !0);
          return;
        case "textarea":
          ei("textarea", n), Ke("invalid", e), f = o = i = null;
          for (m in n)
            if (n.hasOwnProperty(m) && (g = n[m], g != null))
              switch (m) {
                case "value":
                  i = g;
                  break;
                case "defaultValue":
                  o = g;
                  break;
                case "children":
                  f = g;
                  break;
                case "dangerouslySetInnerHTML":
                  if (g != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  ut(
                    e,
                    t,
                    m,
                    g,
                    n,
                    null
                  );
              }
          Da(e, n), Qh(e, i, o, f), vu(e);
          return;
        case "option":
          Xh(e, n);
          for (T in n)
            if (n.hasOwnProperty(T) && (i = n[T], i != null))
              switch (T) {
                case "selected":
                  e.selected = i && typeof i != "function" && typeof i != "symbol";
                  break;
                default:
                  ut(e, t, T, i, n, null);
              }
          return;
        case "dialog":
          Ke("beforetoggle", e), Ke("toggle", e), Ke("cancel", e), Ke("close", e);
          break;
        case "iframe":
        case "object":
          Ke("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < Rp.length; i++)
            Ke(Rp[i], e);
          break;
        case "image":
          Ke("error", e), Ke("load", e);
          break;
        case "details":
          Ke("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Ke("error", e), Ke("load", e);
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
          for (A in n)
            if (n.hasOwnProperty(A) && (i = n[A], i != null))
              switch (A) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  ut(e, t, A, i, n, null);
              }
          return;
        default:
          if (nc(t)) {
            for (L in n)
              n.hasOwnProperty(L) && (i = n[L], i !== void 0 && Hc(
                e,
                t,
                L,
                i,
                n,
                void 0
              ));
            return;
          }
      }
      for (g in n)
        n.hasOwnProperty(g) && (i = n[g], i != null && ut(e, t, g, i, n, null));
    }
    function B0(e, t, n, i) {
      switch ($a(t, i), t) {
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
          var o = null, f = null, m = null, g = null, T = null, A = null, L = null;
          for (J in n) {
            var Z = n[J];
            if (n.hasOwnProperty(J) && Z != null)
              switch (J) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  T = Z;
                default:
                  i.hasOwnProperty(J) || ut(
                    e,
                    t,
                    J,
                    null,
                    i,
                    Z
                  );
              }
          }
          for (var q in i) {
            var J = i[q];
            if (Z = n[q], i.hasOwnProperty(q) && (J != null || Z != null))
              switch (q) {
                case "type":
                  f = J;
                  break;
                case "name":
                  o = J;
                  break;
                case "checked":
                  A = J;
                  break;
                case "defaultChecked":
                  L = J;
                  break;
                case "value":
                  m = J;
                  break;
                case "defaultValue":
                  g = J;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (J != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  J !== Z && ut(
                    e,
                    t,
                    q,
                    J,
                    i,
                    Z
                  );
              }
          }
          t = n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || YS || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), YS = !0), !t || i || qS || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), qS = !0), li(
            e,
            m,
            g,
            T,
            A,
            L,
            f,
            o
          );
          return;
        case "select":
          J = m = g = q = null;
          for (f in n)
            if (T = n[f], n.hasOwnProperty(f) && T != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  J = T;
                default:
                  i.hasOwnProperty(f) || ut(
                    e,
                    t,
                    f,
                    null,
                    i,
                    T
                  );
              }
          for (o in i)
            if (f = i[o], T = n[o], i.hasOwnProperty(o) && (f != null || T != null))
              switch (o) {
                case "value":
                  q = f;
                  break;
                case "defaultValue":
                  g = f;
                  break;
                case "multiple":
                  m = f;
                default:
                  f !== T && ut(
                    e,
                    t,
                    o,
                    f,
                    i,
                    T
                  );
              }
          i = g, t = m, n = J, q != null ? bu(e, !!t, q, !1) : !!n != !!t && (i != null ? bu(e, !!t, i, !0) : bu(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          J = q = null;
          for (g in n)
            if (o = n[g], n.hasOwnProperty(g) && o != null && !i.hasOwnProperty(g))
              switch (g) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  ut(e, t, g, null, i, o);
              }
          for (m in i)
            if (o = i[m], f = n[m], i.hasOwnProperty(m) && (o != null || f != null))
              switch (m) {
                case "value":
                  q = o;
                  break;
                case "defaultValue":
                  J = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && ut(e, t, m, o, i, f);
              }
          gs(e, q, J);
          return;
        case "option":
          for (var ge in n)
            if (q = n[ge], n.hasOwnProperty(ge) && q != null && !i.hasOwnProperty(ge))
              switch (ge) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  ut(
                    e,
                    t,
                    ge,
                    null,
                    i,
                    q
                  );
              }
          for (T in i)
            if (q = i[T], J = n[T], i.hasOwnProperty(T) && q !== J && (q != null || J != null))
              switch (T) {
                case "selected":
                  e.selected = q && typeof q != "function" && typeof q != "symbol";
                  break;
                default:
                  ut(
                    e,
                    t,
                    T,
                    q,
                    i,
                    J
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
          for (var He in n)
            q = n[He], n.hasOwnProperty(He) && q != null && !i.hasOwnProperty(He) && ut(
              e,
              t,
              He,
              null,
              i,
              q
            );
          for (A in i)
            if (q = i[A], J = n[A], i.hasOwnProperty(A) && q !== J && (q != null || J != null))
              switch (A) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  ut(
                    e,
                    t,
                    A,
                    q,
                    i,
                    J
                  );
              }
          return;
        default:
          if (nc(t)) {
            for (var xt in n)
              q = n[xt], n.hasOwnProperty(xt) && q !== void 0 && !i.hasOwnProperty(xt) && Hc(
                e,
                t,
                xt,
                void 0,
                i,
                q
              );
            for (L in i)
              q = i[L], J = n[L], !i.hasOwnProperty(L) || q === J || q === void 0 && J === void 0 || Hc(
                e,
                t,
                L,
                q,
                i,
                J
              );
            return;
          }
      }
      for (var tt in n)
        q = n[tt], n.hasOwnProperty(tt) && q != null && !i.hasOwnProperty(tt) && ut(e, t, tt, null, i, q);
      for (Z in i)
        q = i[Z], J = n[Z], !i.hasOwnProperty(Z) || q === J || q == null && J == null || ut(e, t, Z, q, i, J);
    }
    function sy(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function wc(e) {
      var t = {};
      e = e.style;
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function dy(e, t, n) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var m = t[f];
            m != null && typeof m != "boolean" && m !== "" && (f.indexOf("--") === 0 ? (ze(m, f), i += o + f + ":" + ("" + m).trim()) : typeof m != "number" || m === 0 || Gr.has(f) ? (ze(m, f), i += o + f.replace(Xu, "-$1").toLowerCase().replace(Qu, "-ms-") + ":" + ("" + m).trim()) : i += o + f.replace(Xu, "-$1").toLowerCase().replace(Qu, "-ms-") + ":" + m + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = Tl(i), Tl(t) !== i && (n.style = wc(e)));
      }
    }
    function Zl(e, t, n, i, o, f) {
      if (o.delete(n), e = e.getAttribute(n), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (fe(i, t), e === "" + i)
              return;
        }
      Ut(t, e, i, f);
    }
    function hy(e, t, n, i, o, f) {
      if (o.delete(n), e = e.getAttribute(n), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      Ut(t, e, i, f);
    }
    function my(e, t, n, i, o, f) {
      if (o.delete(n), e = e.getAttribute(n), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (fe(i, n), e === "" + i)
              return;
        }
      Ut(t, e, i, f);
    }
    function q0(e, t, n, i, o, f) {
      if (o.delete(n), e = e.getAttribute(n), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (fe(i, t), e === "" + i))
              return;
        }
      Ut(t, e, i, f);
    }
    function ft(e, t, n, i, o, f) {
      if (o.delete(n), e = e.getAttribute(n), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (fe(i, t), n = ro("" + i), e === n)
              return;
        }
      Ut(t, e, i, f);
    }
    function At(e, t, n, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), m = e.attributes, g = 0; g < m.length; g++)
        switch (m[g].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(m[g].name);
        }
      if (nc(t)) {
        for (var T in n)
          if (n.hasOwnProperty(T)) {
            var A = n[T];
            if (A != null) {
              if (Wn.hasOwnProperty(T))
                typeof A != "function" && kn(T, A);
              else if (n.suppressHydrationWarning !== !0)
                switch (T) {
                  case "children":
                    typeof A != "string" && typeof A != "number" || Ut(
                      "children",
                      e.textContent,
                      A,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    m = e.innerHTML, A = A ? A.__html : void 0, A != null && (A = Hd(e, A), Ut(
                      T,
                      m,
                      A,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(T), dy(e, A, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(T.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      T
                    );
                    continue;
                  case "className":
                    f.delete("class"), m = Wp(
                      e,
                      "class",
                      A
                    ), Ut(
                      "className",
                      m,
                      A,
                      o
                    );
                    continue;
                  default:
                    i.context === Ic && t !== "svg" && t !== "math" ? f.delete(T.toLowerCase()) : f.delete(T), m = Wp(
                      e,
                      T,
                      A
                    ), Ut(
                      T,
                      m,
                      A,
                      o
                    );
                }
            }
          }
      } else
        for (A in n)
          if (n.hasOwnProperty(A) && (T = n[A], T != null)) {
            if (Wn.hasOwnProperty(A))
              typeof T != "function" && kn(A, T);
            else if (n.suppressHydrationWarning !== !0)
              switch (A) {
                case "children":
                  typeof T != "string" && typeof T != "number" || Ut(
                    "children",
                    e.textContent,
                    T,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  m = e.innerHTML, T = T ? T.__html : void 0, T != null && (T = Hd(e, T), m !== T && (o[A] = { __html: m }));
                  continue;
                case "className":
                  Zl(
                    e,
                    A,
                    "class",
                    T,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Zl(
                    e,
                    A,
                    "tabindex",
                    T,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(A), dy(e, T, o);
                  continue;
                case "multiple":
                  f.delete(A), Ut(
                    A,
                    e.multiple,
                    T,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(A), Ut(
                    A,
                    e.muted,
                    T,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), Ut(
                    A,
                    e.autofocus,
                    T,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(A), m = e.getAttribute("data"), Ut(
                      A,
                      m,
                      T,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(T !== "" || t === "a" && A === "href" || t === "object" && A === "data")) {
                    console.error(
                      A === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      A,
                      A
                    );
                    continue;
                  }
                  ft(
                    e,
                    A,
                    A,
                    T,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (m = e.getAttribute(A), typeof T == "function") {
                    f.delete(A.toLowerCase()), A === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (m === DE) {
                    f.delete(A.toLowerCase()), Ut(
                      A,
                      "function",
                      T,
                      o
                    );
                    continue;
                  }
                  ft(
                    e,
                    A,
                    A.toLowerCase(),
                    T,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  ft(
                    e,
                    A,
                    "xlink:href",
                    T,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  my(
                    e,
                    A,
                    "contenteditable",
                    T,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  my(
                    e,
                    A,
                    "spellcheck",
                    T,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  my(
                    e,
                    A,
                    A,
                    T,
                    f,
                    o
                  );
                  continue;
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
                  hy(
                    e,
                    A,
                    A.toLowerCase(),
                    T,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    g = e;
                    var L = m = A, Z = o;
                    if (f.delete(L), g = g.getAttribute(L), g === null)
                      switch (typeof T) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (T === !1) break e;
                      }
                    else if (T != null)
                      switch (typeof T) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (T === !0 && g === "") break e;
                          break;
                        default:
                          if (fe(T, m), g === "" + T)
                            break e;
                      }
                    Ut(
                      m,
                      g,
                      T,
                      Z
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (g = e, L = m = A, Z = o, f.delete(L), g = g.getAttribute(L), g === null)
                      switch (typeof T) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(T) || 1 > T) break e;
                      }
                    else if (T != null)
                      switch (typeof T) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(T) || 1 > T) && (fe(T, m), g === "" + T))
                            break e;
                      }
                    Ut(
                      m,
                      g,
                      T,
                      Z
                    );
                  }
                  continue;
                case "rowSpan":
                  q0(
                    e,
                    A,
                    "rowspan",
                    T,
                    f,
                    o
                  );
                  continue;
                case "start":
                  q0(
                    e,
                    A,
                    A,
                    T,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Zl(
                    e,
                    A,
                    "x-height",
                    T,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Zl(
                    e,
                    A,
                    "xlink:actuate",
                    T,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Zl(
                    e,
                    A,
                    "xlink:arcrole",
                    T,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Zl(
                    e,
                    A,
                    "xlink:role",
                    T,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Zl(
                    e,
                    A,
                    "xlink:show",
                    T,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Zl(
                    e,
                    A,
                    "xlink:title",
                    T,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Zl(
                    e,
                    A,
                    "xlink:type",
                    T,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Zl(
                    e,
                    A,
                    "xml:base",
                    T,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Zl(
                    e,
                    A,
                    "xml:lang",
                    T,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Zl(
                    e,
                    A,
                    "xml:space",
                    T,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  T !== "" || Hg[A] || (Hg[A] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    A
                  )), hy(
                    e,
                    A,
                    A,
                    T,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < A.length) || A[0] !== "o" && A[0] !== "O" || A[1] !== "n" && A[1] !== "N") {
                    g = Ts(A), m = !1, i.context === Ic && t !== "svg" && t !== "math" ? f.delete(g.toLowerCase()) : (L = A.toLowerCase(), L = Xc.hasOwnProperty(
                      L
                    ) && Xc[L] || null, L !== null && L !== A && (m = !0, f.delete(L)), f.delete(g));
                    e: if (L = e, Z = g, g = T, Wi(Z))
                      if (L.hasAttribute(Z))
                        L = L.getAttribute(
                          Z
                        ), fe(
                          g,
                          Z
                        ), g = L === "" + g ? g : L;
                      else {
                        switch (typeof g) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (L = Z.toLowerCase().slice(0, 5), L !== "data-" && L !== "aria-")
                              break e;
                        }
                        g = g === void 0 ? void 0 : null;
                      }
                    else g = void 0;
                    m || Ut(
                      A,
                      g,
                      T,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && n.suppressHydrationWarning !== !0 && Di(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function We(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function Fe(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function rt(e) {
      switch (e) {
        case uf:
          return wh;
        case Xr:
          return Ng;
        default:
          return Ic;
      }
    }
    function on(e, t) {
      if (e === Ic)
        switch (t) {
          case "svg":
            return wh;
          case "math":
            return Ng;
          default:
            return Ic;
        }
      return e === wh && t === "foreignObject" ? Ic : e;
    }
    function Wa(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Yo() {
      var e = window.event;
      return e && e.type === "popstate" ? e === M1 ? !1 : (M1 = e, !0) : (M1 = null, !1);
    }
    function yy(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Nu(e, t, n) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && e.focus();
          break;
        case "img":
          n.src ? e.src = n.src : n.srcSet && (e.srcset = n.srcSet);
      }
    }
    function Vt(e, t, n, i) {
      B0(e, t, n, i), e[dn] = i;
    }
    function Bu(e) {
      lc(e, "");
    }
    function _c(e, t, n) {
      e.nodeValue = n;
    }
    function Fa(e) {
      return e === "head";
    }
    function Jn(e, t) {
      e.removeChild(t);
    }
    function jo(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function Lo(e, t) {
      var n = t, i = 0, o = 0;
      do {
        var f = n.nextSibling;
        if (e.removeChild(n), f && f.nodeType === 8)
          if (n = f.data, n === _g) {
            if (0 < i && 8 > i) {
              n = i;
              var m = e.ownerDocument;
              if (n & zE && Qo(m.documentElement), n & ME && Qo(m.body), n & UE)
                for (n = m.head, Qo(n), m = n.firstChild; m; ) {
                  var g = m.nextSibling, T = m.nodeName;
                  m[tf] || T === "SCRIPT" || T === "STYLE" || T === "LINK" && m.rel.toLowerCase() === "stylesheet" || n.removeChild(m), m = g;
                }
            }
            if (o === 0) {
              e.removeChild(f), Yc(t);
              return;
            }
            o--;
          } else
            n === wg || n === Pc || n === Op ? o++ : i = n.charCodeAt(0) - 48;
        else i = 0;
        n = f;
      } while (n);
      Yc(t);
    }
    function fn(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function py(e) {
      e.nodeValue = "";
    }
    function gy(e, t) {
      t = t[CE], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function wd(e, t) {
      e.nodeValue = t;
    }
    function Vo(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var n = t;
        switch (t = t.nextSibling, n.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Vo(n), ao(n);
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
    function xi(e, t, n, i) {
      for (; e.nodeType === 1; ) {
        var o = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[tf])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          fe(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = Al(e.nextSibling), e === null) break;
      }
      return null;
    }
    function El(e, t, n) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Al(e.nextSibling), e === null)) return null;
      return e;
    }
    function Pa(e) {
      return e.data === Op || e.data === Pc && e.ownerDocument.readyState === GS;
    }
    function Go(e, t) {
      var n = e.ownerDocument;
      if (e.data !== Pc || n.readyState === GS)
        t();
      else {
        var i = function() {
          t(), n.removeEventListener("DOMContentLoaded", i);
        };
        n.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function Al(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === wg || t === Op || t === Pc || t === D1 || t === VS)
            break;
          if (t === _g) return null;
        }
      }
      return e;
    }
    function _d(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), n = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          n[sy(f.name)] = f.name.toLowerCase() === "style" ? wc(e) : f.value;
        }
        return { type: t, props: n };
      }
      return e.nodeType === 8 ? { type: "Suspense", props: {} } : e.nodeValue;
    }
    function Nd(e, t, n) {
      return n === null || n[xE] !== !0 ? (e.nodeValue === t ? e = null : (t = Tl(t), e = Tl(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function vy(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === _g) {
            if (t === 0)
              return Al(e.nextSibling);
            t--;
          } else
            n !== wg && n !== Op && n !== Pc || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function Xo(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === wg || n === Op || n === Pc) {
            if (t === 0) return e;
            t--;
          } else n === _g && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function by(e) {
      Yc(e);
    }
    function On(e) {
      Yc(e);
    }
    function Sy(e, t, n, i, o) {
      switch (o && Ss(e, i.ancestorInfo), t = Fe(n), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function Dn(e, t, n, i) {
      if (!n[Bi] && vn(n)) {
        var o = n.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = n.attributes; o.length; )
        n.removeAttributeNode(o[0]);
      Lt(n, e, t), n[Bl] = i, n[dn] = t;
    }
    function Qo(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      ao(e);
    }
    function Er(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Y0(e, t, n) {
      var i = _h;
      if (i && typeof t == "string" && t) {
        var o = bn(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof n == "string" && (o += '[crossorigin="' + n + '"]'), KS.has(o) || (KS.add(o), e = { rel: e, crossOrigin: n, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), Lt(t, "link", e), il(t), i.head.appendChild(t)));
      }
    }
    function qu(e, t, n, i) {
      var o = (o = eu.current) ? Er(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof n.precedence == "string" && typeof n.href == "string" ? (n = zi(n.href), t = Oa(o).hoistableStyles, i = t.get(n), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
            e = zi(n.href);
            var f = Oa(o).hoistableStyles, m = f.get(e);
            if (!m && (o = o.ownerDocument || o, m = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: cs, preload: null }
            }, f.set(e, m), (f = o.querySelector(
              Ia(e)
            )) && !f._p && (m.instance = f, m.state.loading = Dp | hu), !mu.has(e))) {
              var g = {
                rel: "preload",
                as: "style",
                href: n.href,
                crossOrigin: n.crossOrigin,
                integrity: n.integrity,
                media: n.media,
                hrefLang: n.hrefLang,
                referrerPolicy: n.referrerPolicy
              };
              mu.set(e, g), f || j0(
                o,
                e,
                g,
                m.state
              );
            }
            if (t && i === null)
              throw n = `

  - ` + Nc(t) + `
  + ` + Nc(n), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + n
              );
            return m;
          }
          if (t && i !== null)
            throw n = `

  - ` + Nc(t) + `
  + ` + Nc(n), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + n
            );
          return null;
        case "script":
          return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = Bc(n), t = Oa(o).hoistableScripts, i = t.get(n), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function Nc(e) {
      var t = 0, n = "<link";
      return typeof e.rel == "string" ? (t++, n += ' rel="' + e.rel + '"') : Lu.call(e, "rel") && (t++, n += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, n += ' href="' + e.href + '"') : Lu.call(e, "href") && (t++, n += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, n += ' precedence="' + e.precedence + '"') : Lu.call(e, "precedence") && (t++, n += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (n += " ..."), n + " />";
    }
    function zi(e) {
      return 'href="' + bn(e) + '"';
    }
    function Ia(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function Ty(e) {
      return Ge({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function j0(e, t, n, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = Dp : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= Dp;
      }), t.addEventListener("error", function() {
        return i.loading |= kS;
      }), Lt(t, "link", n), il(t), e.head.appendChild(t));
    }
    function Bc(e) {
      return '[src="' + bn(e) + '"]';
    }
    function qc(e) {
      return "script[async]" + e;
    }
    function Bd(e, t, n) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + bn(n.href) + '"]'
            );
            if (i)
              return t.instance = i, il(i), i;
            var o = Ge({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), il(i), Lt(i, "style", o), qd(i, n.precedence, e), t.instance = i;
          case "stylesheet":
            o = zi(n.href);
            var f = e.querySelector(
              Ia(o)
            );
            if (f)
              return t.state.loading |= hu, t.instance = f, il(f), f;
            i = Ty(n), (o = mu.get(o)) && Ey(i, o), f = (e.ownerDocument || e).createElement("link"), il(f);
            var m = f;
            return m._p = new Promise(function(g, T) {
              m.onload = g, m.onerror = T;
            }), Lt(f, "link", i), t.state.loading |= hu, qd(f, n.precedence, e), t.instance = f;
          case "script":
            return f = Bc(n.src), (o = e.querySelector(
              qc(f)
            )) ? (t.instance = o, il(o), o) : (i = n, (o = mu.get(f)) && (i = Ge({}, n), Ay(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), il(o), Lt(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & hu) === cs && (i = t.instance, t.state.loading |= hu, qd(i, n.precedence, e));
      return t.instance;
    }
    function qd(e, t, n) {
      for (var i = n.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, m = 0; m < i.length; m++) {
        var g = i[m];
        if (g.dataset.precedence === t) f = g;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
    }
    function Ey(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function Ay(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function Ry(e, t, n) {
      if (Bg === null) {
        var i = /* @__PURE__ */ new Map(), o = Bg = /* @__PURE__ */ new Map();
        o.set(n, i);
      } else
        o = Bg, i = o.get(n), i || (i = /* @__PURE__ */ new Map(), o.set(n, i));
      if (i.has(e)) return i;
      for (i.set(e, null), n = n.getElementsByTagName(e), o = 0; o < n.length; o++) {
        var f = n[o];
        if (!(f[tf] || f[Bl] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== uf) {
          var m = f.getAttribute(t) || "";
          m = e + m;
          var g = i.get(m);
          g ? g.push(f) : i.set(m, [f]);
        }
      }
      return i;
    }
    function Oy(e, t, n) {
      e = e.ownerDocument || e, e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function Zo(e, t, n) {
      var i = !n.ancestorInfo.containerTagInScope;
      if (n.context === wh || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              n = [], t.onLoad && n.push("`onLoad`"), o && n.push("`onError`"), f != null && n.push("`disabled`"), o = We(n, "and"), o += n.length === 1 ? " prop" : " props", f = n.length === 1 ? "an " + o : "the " + o, n.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof e == "string" && t == null;
            default:
              return !0;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function Ar(e) {
      return !(e.type === "stylesheet" && (e.state.loading & JS) === cs);
    }
    function L0() {
    }
    function V0(e, t, n) {
      if (xp === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var i = xp;
      if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & hu) === cs) {
        if (t.instance === null) {
          var o = zi(n.href), f = e.querySelector(
            Ia(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++, i = Rr.bind(i), e.then(i, i)), t.state.loading |= hu, t.instance = f, il(f);
            return;
          }
          f = e.ownerDocument || e, n = Ty(n), (o = mu.get(o)) && Ey(n, o), f = f.createElement("link"), il(f);
          var m = f;
          m._p = new Promise(function(g, T) {
            m.onload = g, m.onerror = T;
          }), Lt(f, "link", n), t.instance = f;
        }
        i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & JS) === cs && (i.count++, t = Rr.bind(i), e.addEventListener("load", t), e.addEventListener("error", t));
      }
    }
    function G0() {
      if (xp === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var e = xp;
      return e.stylesheets && e.count === 0 && Yd(e, e.stylesheets), 0 < e.count ? function(t) {
        var n = setTimeout(function() {
          if (e.stylesheets && Yd(e, e.stylesheets), e.unsuspend) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, 6e4);
        return e.unsuspend = t, function() {
          e.unsuspend = null, clearTimeout(n);
        };
      } : null;
    }
    function Rr() {
      if (this.count--, this.count === 0) {
        if (this.stylesheets)
          Yd(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function Yd(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, qg = /* @__PURE__ */ new Map(), t.forEach(X0, e), qg = null, Rr.call(e));
    }
    function X0(e, t) {
      if (!(t.state.loading & hu)) {
        var n = qg.get(e);
        if (n) var i = n.get(C1);
        else {
          n = /* @__PURE__ */ new Map(), qg.set(e, n);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var m = o[f];
            (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (n.set(m.dataset.precedence, m), i = m);
          }
          i && n.set(C1, i);
        }
        o = t.instance, m = o.getAttribute("data-precedence"), f = n.get(m) || i, f === i && n.set(C1, o), n.set(m, o), this.count++, i = Rr.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= hu;
      }
    }
    function jd(e, t, n, i, o, f, m, g) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = is, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Vh(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vh(0), this.hiddenUpdates = Vh(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = g, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = n ? "hydrateRoot()" : "createRoot()";
    }
    function Dy(e, t, n, i, o, f, m, g, T, A, L, Z) {
      return e = new jd(
        e,
        t,
        n,
        m,
        g,
        T,
        A,
        Z
      ), t = nE, f === !0 && (t |= mn | Zu), Xt && (t |= Jl), f = ie(3, null, null, t), e.current = f, f.stateNode = e, t = Gf(), dc(t), e.pooledCache = t, dc(t), f.memoizedState = {
        element: i,
        isDehydrated: n,
        cache: t
      }, en(f), e;
    }
    function xy(e) {
      return e ? (e = cf, e) : cf;
    }
    function ht(e, t, n, i, o, f) {
      if (Rl && typeof Rl.onScheduleFiberRoot == "function")
        try {
          Rl.onScheduleFiberRoot(_i, i, n);
        } catch (m) {
          sn || (sn = !0, console.error(
            "React instrumentation encountered an error: %s",
            m
          ));
        }
      se !== null && typeof se.markRenderScheduled == "function" && se.markRenderScheduled(t), o = xy(o), i.context === null ? i.context = o : i.pendingContext = o, hn && zn !== null && !PS && (PS = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        Se(zn) || "Unknown"
      )), i = Ha(t), i.payload = { element: n }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), n = ra(e, i, t), n !== null && (Yt(n, e, t), hi(n, e, t));
    }
    function Ld(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function zy(e, t) {
      Ld(e, t), (e = e.alternate) && Ld(e, t);
    }
    function My(e) {
      if (e.tag === 13) {
        var t = Il(e, 67108864);
        t !== null && Yt(t, e, 67108864), zy(e, 67108864);
      }
    }
    function Ov() {
      return zn;
    }
    function Dv() {
      for (var e = /* @__PURE__ */ new Map(), t = 1, n = 0; 31 > n; n++) {
        var i = ds(t);
        e.set(t, i), t *= 2;
      }
      return e;
    }
    function xv(e, t, n, i) {
      var o = X.T;
      X.T = null;
      var f = Ce.p;
      try {
        Ce.p = Ol, Mi(e, t, n, i);
      } finally {
        Ce.p = f, X.T = o;
      }
    }
    function Vd(e, t, n, i) {
      var o = X.T;
      X.T = null;
      var f = Ce.p;
      try {
        Ce.p = ba, Mi(e, t, n, i);
      } finally {
        Ce.p = f, X.T = o;
      }
    }
    function Mi(e, t, n, i) {
      if (jg) {
        var o = Or(i);
        if (o === null)
          Xl(
            e,
            t,
            i,
            Lg,
            n
          ), Ui(e, i);
        else if (Dr(
          o,
          e,
          t,
          n,
          i
        ))
          i.stopPropagation();
        else if (Ui(e, i), t & 4 && -1 < NE.indexOf(e)) {
          for (; o !== null; ) {
            var f = vn(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var m = Ki(f.pendingLanes);
                    if (m !== 0) {
                      var g = f;
                      for (g.pendingLanes |= 2, g.entangledLanes |= 2; m; ) {
                        var T = 1 << 31 - Nl(m);
                        g.entanglements[1] |= T, m &= ~T;
                      }
                      Zn(f), (mt & (Hn | $u)) === Sa && (Ag = tu() + US, Cc(0));
                    }
                  }
                  break;
                case 13:
                  g = Il(f, 2), g !== null && Yt(g, f, 2), Mc(), zy(f, 2);
              }
            if (f = Or(i), f === null && Xl(
              e,
              t,
              i,
              Lg,
              n
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          Xl(
            e,
            t,
            i,
            null,
            n
          );
      }
    }
    function Or(e) {
      return e = ac(e), ko(e);
    }
    function ko(e) {
      if (Lg = null, e = gu(e), e !== null) {
        var t = ce(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (e = be(t), e !== null) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return Lg = e, null;
    }
    function Gd(e) {
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
          return Ol;
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
          return ba;
        case "message":
          switch (wi()) {
            case Jd:
              return Ol;
            case Nr:
              return ba;
            case Po:
            case Hv:
              return Gu;
            case Br:
              return Fd;
            default:
              return Gu;
          }
        default:
          return Gu;
      }
    }
    function Ui(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          gf = null;
          break;
        case "dragenter":
        case "dragleave":
          vf = null;
          break;
        case "mouseover":
        case "mouseout":
          bf = null;
          break;
        case "pointerover":
        case "pointerout":
          Mp.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Up.delete(t.pointerId);
      }
    }
    function rn(e, t, n, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = vn(t), t !== null && My(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function Dr(e, t, n, i, o) {
      switch (t) {
        case "focusin":
          return gf = rn(
            gf,
            e,
            t,
            n,
            i,
            o
          ), !0;
        case "dragenter":
          return vf = rn(
            vf,
            e,
            t,
            n,
            i,
            o
          ), !0;
        case "mouseover":
          return bf = rn(
            bf,
            e,
            t,
            n,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return Mp.set(
            f,
            rn(
              Mp.get(f) || null,
              e,
              t,
              n,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, Up.set(
            f,
            rn(
              Up.get(f) || null,
              e,
              t,
              n,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function Q0(e) {
      var t = gu(e.target);
      if (t !== null) {
        var n = ce(t);
        if (n !== null) {
          if (t = n.tag, t === 13) {
            if (t = be(n), t !== null) {
              e.blockedOn = t, mv(e.priority, function() {
                if (n.tag === 13) {
                  var i = cn(n);
                  i = jl(i);
                  var o = Il(
                    n,
                    i
                  );
                  o !== null && Yt(o, n, i), zy(n, i);
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
    function xr(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Or(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var i = new n.constructor(
            n.type,
            n
          ), o = i;
          r !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), r = o, n.target.dispatchEvent(i), r === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), r = null;
        } else
          return t = vn(n), t !== null && My(t), e.blockedOn = n, !1;
        t.shift();
      }
      return !0;
    }
    function Uy(e, t, n) {
      xr(e) && n.delete(t);
    }
    function Z0() {
      H1 = !1, gf !== null && xr(gf) && (gf = null), vf !== null && xr(vf) && (vf = null), bf !== null && xr(bf) && (bf = null), Mp.forEach(Uy), Up.forEach(Uy);
    }
    function zr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, H1 || (H1 = !0, Gt.unstable_scheduleCallback(
        Gt.unstable_NormalPriority,
        Z0
      )));
    }
    function k0(e) {
      Vg !== e && (Vg = e, Gt.unstable_scheduleCallback(
        Gt.unstable_NormalPriority,
        function() {
          Vg === e && (Vg = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (ko(i || n) === null)
                continue;
              break;
            }
            var f = vn(n);
            f !== null && (e.splice(t, 3), t -= 3, n = {
              pending: !0,
              data: o,
              method: n.method,
              action: i
            }, Object.freeze(n), vc(
              f,
              n,
              i,
              o
            ));
          }
        }
      ));
    }
    function Yc(e) {
      function t(T) {
        return zr(T, e);
      }
      gf !== null && zr(gf, e), vf !== null && zr(vf, e), bf !== null && zr(bf, e), Mp.forEach(t), Up.forEach(t);
      for (var n = 0; n < Sf.length; n++) {
        var i = Sf[n];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < Sf.length && (n = Sf[0], n.blockedOn === null); )
        Q0(n), n.blockedOn === null && Sf.shift();
      if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
        for (i = 0; i < n.length; i += 3) {
          var o = n[i], f = n[i + 1], m = o[dn] || null;
          if (typeof f == "function")
            m || k0(n);
          else if (m) {
            var g = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, m = f[dn] || null)
                g = m.formAction;
              else if (ko(o) !== null) continue;
            } else g = m.action;
            typeof g == "function" ? n[i + 1] = g : (n.splice(i, 3), i -= 3), k0(n);
          }
        }
    }
    function Xd(e) {
      this._internalRoot = e;
    }
    function Mr(e) {
      this._internalRoot = e;
    }
    function J0(e) {
      e[Bi] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Gt = i2(), Ur = P1, zv = ZT, Ge = Object.assign, Cr = Symbol.for("react.element"), Ci = Symbol.for("react.transitional.element"), jc = Symbol.for("react.portal"), qe = Symbol.for("react.fragment"), Jo = Symbol.for("react.strict_mode"), Ko = Symbol.for("react.profiler"), Cy = Symbol.for("react.provider"), Qd = Symbol.for("react.consumer"), Kn = Symbol.for("react.context"), Yu = Symbol.for("react.forward_ref"), $o = Symbol.for("react.suspense"), Hi = Symbol.for("react.suspense_list"), Hr = Symbol.for("react.memo"), xn = Symbol.for("react.lazy"), Hy = Symbol.for("react.activity"), K0 = Symbol.for("react.memo_cache_sentinel"), wy = Symbol.iterator, Zd = Symbol.for("react.client.reference"), _e = Array.isArray, X = Ur.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ce = zv.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Mv = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), wr = [], _r = [], $n = -1, ju = dt(null), Wo = dt(null), eu = dt(null), Fo = dt(null), Lu = Object.prototype.hasOwnProperty, kd = Gt.unstable_scheduleCallback, Uv = Gt.unstable_cancelCallback, $0 = Gt.unstable_shouldYield, Cv = Gt.unstable_requestPaint, tu = Gt.unstable_now, wi = Gt.unstable_getCurrentPriorityLevel, Jd = Gt.unstable_ImmediatePriority, Nr = Gt.unstable_UserBlockingPriority, Po = Gt.unstable_NormalPriority, Hv = Gt.unstable_LowPriority, Br = Gt.unstable_IdlePriority, wv = Gt.log, va = Gt.unstable_setDisableYieldValue, _i = null, Rl = null, se = null, sn = !1, Xt = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Nl = Math.clz32 ? Math.clz32 : Fu, Kd = Math.log, Vu = Math.LN2, $d = 256, Wd = 4194304, Ol = 2, ba = 8, Gu = 32, Fd = 268435456, Ni = Math.random().toString(36).slice(2), Bl = "__reactFiber$" + Ni, dn = "__reactProps$" + Ni, Bi = "__reactContainer$" + Ni, _y = "__reactEvents$" + Ni, W0 = "__reactListeners$" + Ni, Io = "__reactHandles$" + Ni, ef = "__reactResources$" + Ni, tf = "__reactMarker$" + Ni, F0 = /* @__PURE__ */ new Set(), Wn = {}, Lc = {}, P0 = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Pd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Id = {}, eh = {}, qi = 0, Ny, By, I0, qy, lf, eg, tg;
    hs.__reactDisabledLog = !0;
    var Yy, qr, nf = !1, Yr = new (typeof WeakMap == "function" ? WeakMap : Map)(), zn = null, hn = !1, _v = /[\n"\\]/g, jy = !1, Ly = !1, Vy = !1, Gy = !1, th = !1, Xy = !1, jr = ["value", "defaultValue"], lg = !1, ng = /["'&<>\n\t]|^\s|\s$/, Qy = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), lh = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), nh = lh.concat(["button"]), Zy = "dd dt li option optgroup p rp rt".split(" "), ky = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, af = {}, lu = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, Xu = /([A-Z])/g, Qu = /^ms-/, Lr = /^(?:webkit|moz|o)[A-Z]/, Vr = /^-ms-/, Yi = /-(.)/g, ag = /;\s*$/, Vc = {}, Gc = {}, ug = !1, Jy = !1, Gr = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Xr = "http://www.w3.org/1998/Math/MathML", uf = "http://www.w3.org/2000/svg", ah = /* @__PURE__ */ new Map([
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
    ]), Xc = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Ky = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, nu = {}, $y = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), uh = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Wy = !1, kl = {}, Qr = /^on./, l = /^on[^A-Z]/, a = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), u = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), c = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, r = null, d = null, v = null, S = !1, O = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), B = !1;
    if (O)
      try {
        var W = {};
        Object.defineProperty(W, "passive", {
          get: function() {
            B = !0;
          }
        }), window.addEventListener("test", W, W), window.removeEventListener("test", W, W);
      } catch {
        B = !1;
      }
    var P = null, Y = null, V = null, De = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, xe = vl(De), it = Ge({}, De, { view: 0, detail: 0 }), H = vl(it), M, N, F, he = Ge({}, it, {
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
      getModifierState: Rs,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== F && (F && e.type === "mousemove" ? (M = e.screenX - F.screenX, N = e.screenY - F.screenY) : N = M = 0, F = e), M);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : N;
      }
    }), Ze = vl(he), Re = Ge({}, he, { dataTransfer: 0 }), Ue = vl(Re), dl = Ge({}, it, { relatedTarget: 0 }), lt = vl(dl), ji = Ge({}, De, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Nv = vl(ji), H2 = Ge({}, De, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), w2 = vl(H2), _2 = Ge({}, De, { data: 0 }), sb = vl(
      _2
    ), N2 = sb, B2 = {
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
    }, q2 = {
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
    }, Y2 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, j2 = Ge({}, it, {
      key: function(e) {
        if (e.key) {
          var t = B2[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = so(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? q2[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Rs,
      charCode: function(e) {
        return e.type === "keypress" ? so(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? so(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), L2 = vl(j2), V2 = Ge({}, he, {
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
    }), db = vl(V2), G2 = Ge({}, it, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Rs
    }), X2 = vl(G2), Q2 = Ge({}, De, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Z2 = vl(Q2), k2 = Ge({}, he, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), J2 = vl(k2), K2 = Ge({}, De, {
      newState: 0,
      oldState: 0
    }), $2 = vl(K2), W2 = [9, 13, 27, 32], hb = 229, Bv = O && "CompositionEvent" in window, Fy = null;
    O && "documentMode" in document && (Fy = document.documentMode);
    var F2 = O && "TextEvent" in window && !Fy, mb = O && (!Bv || Fy && 8 < Fy && 11 >= Fy), yb = 32, pb = String.fromCharCode(yb), gb = !1, ih = !1, P2 = {
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
    }, Py = null, Iy = null, vb = !1;
    O && (vb = Fh("input") && (!document.documentMode || 9 < document.documentMode));
    var Mn = typeof Object.is == "function" ? Object.is : Tv, I2 = O && "documentMode" in document && 11 >= document.documentMode, ch = null, qv = null, ep = null, Yv = !1, oh = {
      animationend: Eu("Animation", "AnimationEnd"),
      animationiteration: Eu("Animation", "AnimationIteration"),
      animationstart: Eu("Animation", "AnimationStart"),
      transitionrun: Eu("Transition", "TransitionRun"),
      transitionstart: Eu("Transition", "TransitionStart"),
      transitioncancel: Eu("Transition", "TransitionCancel"),
      transitionend: Eu("Transition", "TransitionEnd")
    }, jv = {}, bb = {};
    O && (bb = document.createElement("div").style, "AnimationEvent" in window || (delete oh.animationend.animation, delete oh.animationiteration.animation, delete oh.animationstart.animation), "TransitionEvent" in window || delete oh.transitionend.transition);
    var Sb = cc("animationend"), Tb = cc("animationiteration"), Eb = cc("animationstart"), eE = cc("transitionrun"), tE = cc("transitionstart"), lE = cc("transitioncancel"), Ab = cc("transitionend"), Rb = /* @__PURE__ */ new Map(), Lv = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    Lv.push("scrollEnd");
    var Vv = /* @__PURE__ */ new WeakMap(), ig = 1, Qc = 2, au = [], fh = 0, Gv = 0, cf = {};
    Object.freeze(cf);
    var uu = null, rh = null, Ct = 0, nE = 1, Jl = 2, mn = 8, Zu = 16, Ob = 64, Db = !1;
    try {
      var xb = Object.preventExtensions({});
    } catch {
      Db = !0;
    }
    var sh = [], dh = 0, cg = null, og = 0, iu = [], cu = 0, Zr = null, Zc = 1, kc = "", Un = null, Kt = null, ct = !1, Jc = !1, ou = null, kr = null, Li = !1, Xv = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), zb = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var aE = performance, Mb = function() {
        return aE.now();
      };
    else {
      var uE = Date;
      Mb = function() {
        return uE.now();
      };
    }
    var Qv = dt(null), Zv = dt(null), Ub = {}, fg = null, hh = null, mh = !1, iE = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(n, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(n) {
          return n();
        });
      };
    }, cE = Gt.unstable_scheduleCallback, oE = Gt.unstable_NormalPriority, Dl = {
      $$typeof: Kn,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, yh = Gt.unstable_now, Cb = -0, rg = -0, Fn = -1.1, Jr = -0, sg = !1, dg = !1, tp = null, kv = 0, Kr = 0, ph = null, Hb = X.S;
    X.S = function(e, t) {
      typeof t == "object" && t !== null && typeof t.then == "function" && p0(e, t), Hb !== null && Hb(e, t);
    };
    var $r = dt(null), ku = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, lp = [], np = [], ap = [], up = [], ip = [], cp = [], Wr = /* @__PURE__ */ new Set();
    ku.recordUnsafeLifecycleWarnings = function(e, t) {
      Wr.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && lp.push(e), e.mode & mn && typeof t.UNSAFE_componentWillMount == "function" && np.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && ap.push(e), e.mode & mn && typeof t.UNSAFE_componentWillReceiveProps == "function" && up.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && ip.push(e), e.mode & mn && typeof t.UNSAFE_componentWillUpdate == "function" && cp.push(e));
    }, ku.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < lp.length && (lp.forEach(function(g) {
        e.add(
          Se(g) || "Component"
        ), Wr.add(g.type);
      }), lp = []);
      var t = /* @__PURE__ */ new Set();
      0 < np.length && (np.forEach(function(g) {
        t.add(
          Se(g) || "Component"
        ), Wr.add(g.type);
      }), np = []);
      var n = /* @__PURE__ */ new Set();
      0 < ap.length && (ap.forEach(function(g) {
        n.add(
          Se(g) || "Component"
        ), Wr.add(g.type);
      }), ap = []);
      var i = /* @__PURE__ */ new Set();
      0 < up.length && (up.forEach(
        function(g) {
          i.add(
            Se(g) || "Component"
          ), Wr.add(g.type);
        }
      ), up = []);
      var o = /* @__PURE__ */ new Set();
      0 < ip.length && (ip.forEach(function(g) {
        o.add(
          Se(g) || "Component"
        ), Wr.add(g.type);
      }), ip = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < cp.length && (cp.forEach(function(g) {
        f.add(
          Se(g) || "Component"
        ), Wr.add(g.type);
      }), cp = []), 0 < t.size) {
        var m = $(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          m
        );
      }
      0 < i.size && (m = $(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        m
      )), 0 < f.size && (m = $(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        m
      )), 0 < e.size && (m = $(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        m
      )), 0 < n.size && (m = $(
        n
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        m
      )), 0 < o.size && (m = $(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        m
      ));
    };
    var hg = /* @__PURE__ */ new Map(), wb = /* @__PURE__ */ new Set();
    ku.recordLegacyContextWarning = function(e, t) {
      for (var n = null, i = e; i !== null; )
        i.mode & mn && (n = i), i = i.return;
      n === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !wb.has(e.type) && (i = hg.get(n), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], hg.set(n, i)), i.push(e));
    }, ku.flushLegacyContextWarning = function() {
      hg.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], n = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            n.add(Se(o) || "Component"), wb.add(o.type);
          });
          var i = $(n);
          pe(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, ku.discardPendingWarnings = function() {
      lp = [], np = [], ap = [], up = [], ip = [], cp = [], hg = /* @__PURE__ */ new Map();
    };
    var op = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), _b = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), mg = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), Jv = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, fp = null, yg = !1, fu = 0, ru = 1, Cn = 2, Kl = 4, xl = 8, Nb = 0, Bb = 1, qb = 2, Kv = 3, of = !1, Yb = !1, $v = null, Wv = !1, gh = dt(null), pg = dt(0), vh, jb = /* @__PURE__ */ new Set(), Lb = /* @__PURE__ */ new Set(), Fv = /* @__PURE__ */ new Set(), Vb = /* @__PURE__ */ new Set(), ff = 0, Ne = null, Rt = null, hl = null, gg = !1, bh = !1, Fr = !1, vg = 0, rp = 0, Kc = null, fE = 0, rE = 25, Q = null, su = null, $c = -1, sp = !1, bg = {
      readContext: Ot,
      use: _a,
      useCallback: wt,
      useContext: wt,
      useEffect: wt,
      useImperativeHandle: wt,
      useLayoutEffect: wt,
      useInsertionEffect: wt,
      useMemo: wt,
      useReducer: wt,
      useRef: wt,
      useState: wt,
      useDebugValue: wt,
      useDeferredValue: wt,
      useTransition: wt,
      useSyncExternalStore: wt,
      useId: wt,
      useHostTransitionStatus: wt,
      useFormState: wt,
      useActionState: wt,
      useOptimistic: wt,
      useMemoCache: wt,
      useCacheRefresh: wt
    }, Pv = null, Gb = null, Iv = null, Xb = null, Vi = null, Ju = null, Sg = null;
    Pv = {
      readContext: function(e) {
        return Ot(e);
      },
      use: _a,
      useCallback: function(e, t) {
        return Q = "useCallback", Qe(), Yn(t), Ff(e, t);
      },
      useContext: function(e) {
        return Q = "useContext", Qe(), Ot(e);
      },
      useEffect: function(e, t) {
        return Q = "useEffect", Qe(), Yn(t), Ys(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return Q = "useImperativeHandle", Qe(), Yn(n), Ls(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        Q = "useInsertionEffect", Qe(), Yn(t), Gn(4, Cn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return Q = "useLayoutEffect", Qe(), Yn(t), js(e, t);
      },
      useMemo: function(e, t) {
        Q = "useMemo", Qe(), Yn(t);
        var n = X.H;
        X.H = Vi;
        try {
          return Vs(e, t);
        } finally {
          X.H = n;
        }
      },
      useReducer: function(e, t, n) {
        Q = "useReducer", Qe();
        var i = X.H;
        X.H = Vi;
        try {
          return nt(e, t, n);
        } finally {
          X.H = i;
        }
      },
      useRef: function(e) {
        return Q = "useRef", Qe(), Wf(e);
      },
      useState: function(e) {
        Q = "useState", Qe();
        var t = X.H;
        X.H = Vi;
        try {
          return xu(e);
        } finally {
          X.H = t;
        }
      },
      useDebugValue: function() {
        Q = "useDebugValue", Qe();
      },
      useDeferredValue: function(e, t) {
        return Q = "useDeferredValue", Qe(), Gs(e, t);
      },
      useTransition: function() {
        return Q = "useTransition", Qe(), Ya();
      },
      useSyncExternalStore: function(e, t, n) {
        return Q = "useSyncExternalStore", Qe(), Du(
          e,
          t,
          n
        );
      },
      useId: function() {
        return Q = "useId", Qe(), ja();
      },
      useFormState: function(e, t) {
        return Q = "useFormState", Qe(), vo(), Ro(e, t);
      },
      useActionState: function(e, t) {
        return Q = "useActionState", Qe(), Ro(e, t);
      },
      useOptimistic: function(e) {
        return Q = "useOptimistic", Qe(), ha(e);
      },
      useHostTransitionStatus: nn,
      useMemoCache: Zt,
      useCacheRefresh: function() {
        return Q = "useCacheRefresh", Qe(), bc();
      }
    }, Gb = {
      readContext: function(e) {
        return Ot(e);
      },
      use: _a,
      useCallback: function(e, t) {
        return Q = "useCallback", ae(), Ff(e, t);
      },
      useContext: function(e) {
        return Q = "useContext", ae(), Ot(e);
      },
      useEffect: function(e, t) {
        return Q = "useEffect", ae(), Ys(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return Q = "useImperativeHandle", ae(), Ls(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        Q = "useInsertionEffect", ae(), Gn(4, Cn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return Q = "useLayoutEffect", ae(), js(e, t);
      },
      useMemo: function(e, t) {
        Q = "useMemo", ae();
        var n = X.H;
        X.H = Vi;
        try {
          return Vs(e, t);
        } finally {
          X.H = n;
        }
      },
      useReducer: function(e, t, n) {
        Q = "useReducer", ae();
        var i = X.H;
        X.H = Vi;
        try {
          return nt(e, t, n);
        } finally {
          X.H = i;
        }
      },
      useRef: function(e) {
        return Q = "useRef", ae(), Wf(e);
      },
      useState: function(e) {
        Q = "useState", ae();
        var t = X.H;
        X.H = Vi;
        try {
          return xu(e);
        } finally {
          X.H = t;
        }
      },
      useDebugValue: function() {
        Q = "useDebugValue", ae();
      },
      useDeferredValue: function(e, t) {
        return Q = "useDeferredValue", ae(), Gs(e, t);
      },
      useTransition: function() {
        return Q = "useTransition", ae(), Ya();
      },
      useSyncExternalStore: function(e, t, n) {
        return Q = "useSyncExternalStore", ae(), Du(
          e,
          t,
          n
        );
      },
      useId: function() {
        return Q = "useId", ae(), ja();
      },
      useActionState: function(e, t) {
        return Q = "useActionState", ae(), Ro(e, t);
      },
      useFormState: function(e, t) {
        return Q = "useFormState", ae(), vo(), Ro(e, t);
      },
      useOptimistic: function(e) {
        return Q = "useOptimistic", ae(), ha(e);
      },
      useHostTransitionStatus: nn,
      useMemoCache: Zt,
      useCacheRefresh: function() {
        return Q = "useCacheRefresh", ae(), bc();
      }
    }, Iv = {
      readContext: function(e) {
        return Ot(e);
      },
      use: _a,
      useCallback: function(e, t) {
        return Q = "useCallback", ae(), gc(e, t);
      },
      useContext: function(e) {
        return Q = "useContext", ae(), Ot(e);
      },
      useEffect: function(e, t) {
        Q = "useEffect", ae(), el(2048, xl, e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return Q = "useImperativeHandle", ae(), qa(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return Q = "useInsertionEffect", ae(), el(4, Cn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return Q = "useLayoutEffect", ae(), el(4, Kl, e, t);
      },
      useMemo: function(e, t) {
        Q = "useMemo", ae();
        var n = X.H;
        X.H = Ju;
        try {
          return vi(e, t);
        } finally {
          X.H = n;
        }
      },
      useReducer: function(e, t, n) {
        Q = "useReducer", ae();
        var i = X.H;
        X.H = Ju;
        try {
          return Ln(e, t, n);
        } finally {
          X.H = i;
        }
      },
      useRef: function() {
        return Q = "useRef", ae(), et().memoizedState;
      },
      useState: function() {
        Q = "useState", ae();
        var e = X.H;
        X.H = Ju;
        try {
          return Ln(at);
        } finally {
          X.H = e;
        }
      },
      useDebugValue: function() {
        Q = "useDebugValue", ae();
      },
      useDeferredValue: function(e, t) {
        return Q = "useDeferredValue", ae(), Pf(e, t);
      },
      useTransition: function() {
        return Q = "useTransition", ae(), Zs();
      },
      useSyncExternalStore: function(e, t, n) {
        return Q = "useSyncExternalStore", ae(), kf(
          e,
          t,
          n
        );
      },
      useId: function() {
        return Q = "useId", ae(), et().memoizedState;
      },
      useFormState: function(e) {
        return Q = "useFormState", ae(), vo(), qs(e);
      },
      useActionState: function(e) {
        return Q = "useActionState", ae(), qs(e);
      },
      useOptimistic: function(e, t) {
        return Q = "useOptimistic", ae(), zu(e, t);
      },
      useHostTransitionStatus: nn,
      useMemoCache: Zt,
      useCacheRefresh: function() {
        return Q = "useCacheRefresh", ae(), et().memoizedState;
      }
    }, Xb = {
      readContext: function(e) {
        return Ot(e);
      },
      use: _a,
      useCallback: function(e, t) {
        return Q = "useCallback", ae(), gc(e, t);
      },
      useContext: function(e) {
        return Q = "useContext", ae(), Ot(e);
      },
      useEffect: function(e, t) {
        Q = "useEffect", ae(), el(2048, xl, e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return Q = "useImperativeHandle", ae(), qa(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return Q = "useInsertionEffect", ae(), el(4, Cn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return Q = "useLayoutEffect", ae(), el(4, Kl, e, t);
      },
      useMemo: function(e, t) {
        Q = "useMemo", ae();
        var n = X.H;
        X.H = Sg;
        try {
          return vi(e, t);
        } finally {
          X.H = n;
        }
      },
      useReducer: function(e, t, n) {
        Q = "useReducer", ae();
        var i = X.H;
        X.H = Sg;
        try {
          return pc(e, t, n);
        } finally {
          X.H = i;
        }
      },
      useRef: function() {
        return Q = "useRef", ae(), et().memoizedState;
      },
      useState: function() {
        Q = "useState", ae();
        var e = X.H;
        X.H = Sg;
        try {
          return pc(at);
        } finally {
          X.H = e;
        }
      },
      useDebugValue: function() {
        Q = "useDebugValue", ae();
      },
      useDeferredValue: function(e, t) {
        return Q = "useDeferredValue", ae(), Xs(e, t);
      },
      useTransition: function() {
        return Q = "useTransition", ae(), ks();
      },
      useSyncExternalStore: function(e, t, n) {
        return Q = "useSyncExternalStore", ae(), kf(
          e,
          t,
          n
        );
      },
      useId: function() {
        return Q = "useId", ae(), et().memoizedState;
      },
      useFormState: function(e) {
        return Q = "useFormState", ae(), vo(), Oo(e);
      },
      useActionState: function(e) {
        return Q = "useActionState", ae(), Oo(e);
      },
      useOptimistic: function(e, t) {
        return Q = "useOptimistic", ae(), Bs(e, t);
      },
      useHostTransitionStatus: nn,
      useMemoCache: Zt,
      useCacheRefresh: function() {
        return Q = "useCacheRefresh", ae(), et().memoizedState;
      }
    }, Vi = {
      readContext: function(e) {
        return j(), Ot(e);
      },
      use: function(e) {
        return U(), _a(e);
      },
      useCallback: function(e, t) {
        return Q = "useCallback", U(), Qe(), Ff(e, t);
      },
      useContext: function(e) {
        return Q = "useContext", U(), Qe(), Ot(e);
      },
      useEffect: function(e, t) {
        return Q = "useEffect", U(), Qe(), Ys(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return Q = "useImperativeHandle", U(), Qe(), Ls(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        Q = "useInsertionEffect", U(), Qe(), Gn(4, Cn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return Q = "useLayoutEffect", U(), Qe(), js(e, t);
      },
      useMemo: function(e, t) {
        Q = "useMemo", U(), Qe();
        var n = X.H;
        X.H = Vi;
        try {
          return Vs(e, t);
        } finally {
          X.H = n;
        }
      },
      useReducer: function(e, t, n) {
        Q = "useReducer", U(), Qe();
        var i = X.H;
        X.H = Vi;
        try {
          return nt(e, t, n);
        } finally {
          X.H = i;
        }
      },
      useRef: function(e) {
        return Q = "useRef", U(), Qe(), Wf(e);
      },
      useState: function(e) {
        Q = "useState", U(), Qe();
        var t = X.H;
        X.H = Vi;
        try {
          return xu(e);
        } finally {
          X.H = t;
        }
      },
      useDebugValue: function() {
        Q = "useDebugValue", U(), Qe();
      },
      useDeferredValue: function(e, t) {
        return Q = "useDeferredValue", U(), Qe(), Gs(e, t);
      },
      useTransition: function() {
        return Q = "useTransition", U(), Qe(), Ya();
      },
      useSyncExternalStore: function(e, t, n) {
        return Q = "useSyncExternalStore", U(), Qe(), Du(
          e,
          t,
          n
        );
      },
      useId: function() {
        return Q = "useId", U(), Qe(), ja();
      },
      useFormState: function(e, t) {
        return Q = "useFormState", U(), Qe(), Ro(e, t);
      },
      useActionState: function(e, t) {
        return Q = "useActionState", U(), Qe(), Ro(e, t);
      },
      useOptimistic: function(e) {
        return Q = "useOptimistic", U(), Qe(), ha(e);
      },
      useMemoCache: function(e) {
        return U(), Zt(e);
      },
      useHostTransitionStatus: nn,
      useCacheRefresh: function() {
        return Q = "useCacheRefresh", Qe(), bc();
      }
    }, Ju = {
      readContext: function(e) {
        return j(), Ot(e);
      },
      use: function(e) {
        return U(), _a(e);
      },
      useCallback: function(e, t) {
        return Q = "useCallback", U(), ae(), gc(e, t);
      },
      useContext: function(e) {
        return Q = "useContext", U(), ae(), Ot(e);
      },
      useEffect: function(e, t) {
        Q = "useEffect", U(), ae(), el(2048, xl, e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return Q = "useImperativeHandle", U(), ae(), qa(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return Q = "useInsertionEffect", U(), ae(), el(4, Cn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return Q = "useLayoutEffect", U(), ae(), el(4, Kl, e, t);
      },
      useMemo: function(e, t) {
        Q = "useMemo", U(), ae();
        var n = X.H;
        X.H = Ju;
        try {
          return vi(e, t);
        } finally {
          X.H = n;
        }
      },
      useReducer: function(e, t, n) {
        Q = "useReducer", U(), ae();
        var i = X.H;
        X.H = Ju;
        try {
          return Ln(e, t, n);
        } finally {
          X.H = i;
        }
      },
      useRef: function() {
        return Q = "useRef", U(), ae(), et().memoizedState;
      },
      useState: function() {
        Q = "useState", U(), ae();
        var e = X.H;
        X.H = Ju;
        try {
          return Ln(at);
        } finally {
          X.H = e;
        }
      },
      useDebugValue: function() {
        Q = "useDebugValue", U(), ae();
      },
      useDeferredValue: function(e, t) {
        return Q = "useDeferredValue", U(), ae(), Pf(e, t);
      },
      useTransition: function() {
        return Q = "useTransition", U(), ae(), Zs();
      },
      useSyncExternalStore: function(e, t, n) {
        return Q = "useSyncExternalStore", U(), ae(), kf(
          e,
          t,
          n
        );
      },
      useId: function() {
        return Q = "useId", U(), ae(), et().memoizedState;
      },
      useFormState: function(e) {
        return Q = "useFormState", U(), ae(), qs(e);
      },
      useActionState: function(e) {
        return Q = "useActionState", U(), ae(), qs(e);
      },
      useOptimistic: function(e, t) {
        return Q = "useOptimistic", U(), ae(), zu(e, t);
      },
      useMemoCache: function(e) {
        return U(), Zt(e);
      },
      useHostTransitionStatus: nn,
      useCacheRefresh: function() {
        return Q = "useCacheRefresh", ae(), et().memoizedState;
      }
    }, Sg = {
      readContext: function(e) {
        return j(), Ot(e);
      },
      use: function(e) {
        return U(), _a(e);
      },
      useCallback: function(e, t) {
        return Q = "useCallback", U(), ae(), gc(e, t);
      },
      useContext: function(e) {
        return Q = "useContext", U(), ae(), Ot(e);
      },
      useEffect: function(e, t) {
        Q = "useEffect", U(), ae(), el(2048, xl, e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return Q = "useImperativeHandle", U(), ae(), qa(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return Q = "useInsertionEffect", U(), ae(), el(4, Cn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return Q = "useLayoutEffect", U(), ae(), el(4, Kl, e, t);
      },
      useMemo: function(e, t) {
        Q = "useMemo", U(), ae();
        var n = X.H;
        X.H = Ju;
        try {
          return vi(e, t);
        } finally {
          X.H = n;
        }
      },
      useReducer: function(e, t, n) {
        Q = "useReducer", U(), ae();
        var i = X.H;
        X.H = Ju;
        try {
          return pc(e, t, n);
        } finally {
          X.H = i;
        }
      },
      useRef: function() {
        return Q = "useRef", U(), ae(), et().memoizedState;
      },
      useState: function() {
        Q = "useState", U(), ae();
        var e = X.H;
        X.H = Ju;
        try {
          return pc(at);
        } finally {
          X.H = e;
        }
      },
      useDebugValue: function() {
        Q = "useDebugValue", U(), ae();
      },
      useDeferredValue: function(e, t) {
        return Q = "useDeferredValue", U(), ae(), Xs(e, t);
      },
      useTransition: function() {
        return Q = "useTransition", U(), ae(), ks();
      },
      useSyncExternalStore: function(e, t, n) {
        return Q = "useSyncExternalStore", U(), ae(), kf(
          e,
          t,
          n
        );
      },
      useId: function() {
        return Q = "useId", U(), ae(), et().memoizedState;
      },
      useFormState: function(e) {
        return Q = "useFormState", U(), ae(), Oo(e);
      },
      useActionState: function(e) {
        return Q = "useActionState", U(), ae(), Oo(e);
      },
      useOptimistic: function(e, t) {
        return Q = "useOptimistic", U(), ae(), Bs(e, t);
      },
      useMemoCache: function(e) {
        return U(), Zt(e);
      },
      useHostTransitionStatus: nn,
      useCacheRefresh: function() {
        return Q = "useCacheRefresh", ae(), et().memoizedState;
      }
    };
    var Qb = {
      react_stack_bottom_frame: function(e, t, n) {
        var i = hn;
        hn = !0;
        try {
          return e(t, n);
        } finally {
          hn = i;
        }
      }
    }, e1 = Qb.react_stack_bottom_frame.bind(Qb), Zb = {
      react_stack_bottom_frame: function(e) {
        var t = hn;
        hn = !0;
        try {
          return e.render();
        } finally {
          hn = t;
        }
      }
    }, kb = Zb.react_stack_bottom_frame.bind(Zb), Jb = {
      react_stack_bottom_frame: function(e, t) {
        try {
          t.componentDidMount();
        } catch (n) {
          Me(e, e.return, n);
        }
      }
    }, t1 = Jb.react_stack_bottom_frame.bind(
      Jb
    ), Kb = {
      react_stack_bottom_frame: function(e, t, n, i, o) {
        try {
          t.componentDidUpdate(n, i, o);
        } catch (f) {
          Me(e, e.return, f);
        }
      }
    }, $b = Kb.react_stack_bottom_frame.bind(
      Kb
    ), Wb = {
      react_stack_bottom_frame: function(e, t) {
        var n = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: n !== null ? n : ""
        });
      }
    }, sE = Wb.react_stack_bottom_frame.bind(
      Wb
    ), Fb = {
      react_stack_bottom_frame: function(e, t, n) {
        try {
          n.componentWillUnmount();
        } catch (i) {
          Me(e, t, i);
        }
      }
    }, Pb = Fb.react_stack_bottom_frame.bind(
      Fb
    ), Ib = {
      react_stack_bottom_frame: function(e) {
        e.resourceKind != null && console.error(
          "Expected only SimpleEffects when enableUseEffectCRUDOverload is disabled, got %s",
          e.resourceKind
        );
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, dE = Ib.react_stack_bottom_frame.bind(Ib), eS = {
      react_stack_bottom_frame: function(e, t, n) {
        try {
          n();
        } catch (i) {
          Me(e, t, i);
        }
      }
    }, hE = eS.react_stack_bottom_frame.bind(eS), tS = {
      react_stack_bottom_frame: function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, rf = tS.react_stack_bottom_frame.bind(tS), Sh = null, dp = 0, ke = null, l1, lS = l1 = !1, nS = {}, aS = {}, uS = {};
    w = function(e, t, n) {
      if (n !== null && typeof n == "object" && n._store && (!n._store.validated && n.key == null || n._store.validated === 2)) {
        if (typeof n._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        n._store.validated = 1;
        var i = Se(e), o = i || "null";
        if (!nS[o]) {
          nS[o] = !0, n = n._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = Se(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var m = "";
          n != null && e !== n && (i = null, typeof n.tag == "number" ? i = Se(n) : typeof n.name == "string" && (i = n.name), i && (m = " It was passed a child from " + i + ".")), pe(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              m
            );
          });
        }
      }
    };
    var Th = lr(!0), iS = lr(!1), du = dt(null), Gi = null, Eh = 1, hp = 2, zl = dt(0), cS = {}, oS = /* @__PURE__ */ new Set(), fS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), sS = /* @__PURE__ */ new Set(), dS = /* @__PURE__ */ new Set(), hS = /* @__PURE__ */ new Set(), mS = /* @__PURE__ */ new Set(), yS = /* @__PURE__ */ new Set(), pS = /* @__PURE__ */ new Set(), gS = /* @__PURE__ */ new Set();
    Object.freeze(cS);
    var n1 = {
      enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var i = cn(e), o = Ha(i);
        o.payload = t, n != null && (Mm(n), o.callback = n), t = ra(e, o, i), t !== null && (Yt(t, e, i), hi(t, e, i)), na(e, i);
      },
      enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var i = cn(e), o = Ha(i);
        o.tag = Bb, o.payload = t, n != null && (Mm(n), o.callback = n), t = ra(e, o, i), t !== null && (Yt(t, e, i), hi(t, e, i)), na(e, i);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = cn(e), i = Ha(n);
        i.tag = qb, t != null && (Mm(t), i.callback = t), t = ra(e, i, n), t !== null && (Yt(t, e, n), hi(t, e, n)), se !== null && typeof se.markForceUpdateScheduled == "function" && se.markForceUpdateScheduled(e, n);
      }
    }, a1 = typeof reportError == "function" ? reportError : function(e) {
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
    }, Ah = null, u1 = null, vS = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), ql = !1, bS = {}, SS = {}, TS = {}, ES = {}, Rh = !1, AS = {}, i1 = {}, c1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, RS = !1, OS = null;
    OS = /* @__PURE__ */ new Set();
    var Wc = !1, nl = !1, o1 = !1, DS = typeof WeakSet == "function" ? WeakSet : Set, Yl = null, Oh = null, Dh = null, ml = null, Pn = !1, Ku = null, mp = 8192, mE = {
      getCacheForType: function(e) {
        var t = Ot(Dl), n = t.data.get(e);
        return n === void 0 && (n = e(), t.data.set(e, n)), n;
      },
      getOwner: function() {
        return zn;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var yp = Symbol.for;
      yp("selector.component"), yp("selector.has_pseudo_class"), yp("selector.role"), yp("selector.test_id"), yp("selector.text");
    }
    var yE = [], pE = typeof WeakMap == "function" ? WeakMap : Map, Sa = 0, Hn = 2, $u = 4, Fc = 0, pp = 1, xh = 2, f1 = 3, Pr = 4, Tg = 6, xS = 5, mt = Sa, Dt = null, Pe = null, Ie = 0, In = 0, gp = 1, Ir = 2, vp = 3, zS = 4, r1 = 5, zh = 6, bp = 7, s1 = 8, es = 9, St = In, Ta = null, sf = !1, Mh = !1, d1 = !1, Xi = 0, $t = Fc, df = 0, hf = 0, h1 = 0, Ea = 0, ts = 0, Sp = null, wn = null, Eg = !1, m1 = 0, MS = 300, Ag = 1 / 0, US = 500, Tp = null, mf = null, gE = 0, vE = 1, bE = 2, ls = 0, CS = 1, HS = 2, wS = 3, SE = 4, y1 = 5, $l = 0, yf = null, Uh = null, pf = 0, p1 = 0, g1 = null, _S = null, TE = 50, Ep = 0, v1 = null, b1 = !1, Rg = !1, EE = 50, ns = 0, Ap = null, Ch = !1, Og = null, NS = !1, BS = /* @__PURE__ */ new Set(), AE = {}, Dg = null, Hh = null, S1 = !1, T1 = !1, xg = !1, E1 = !1, as = 0, A1 = {};
    (function() {
      for (var e = 0; e < Lv.length; e++) {
        var t = Lv[e], n = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), ua(n, "on" + t);
      }
      ua(Sb, "onAnimationEnd"), ua(Tb, "onAnimationIteration"), ua(Eb, "onAnimationStart"), ua("dblclick", "onDoubleClick"), ua("focusin", "onFocus"), ua("focusout", "onBlur"), ua(eE, "onTransitionRun"), ua(tE, "onTransitionStart"), ua(lE, "onTransitionCancel"), ua(Ab, "onTransitionEnd");
    })(), $i("onMouseEnter", ["mouseout", "mouseover"]), $i("onMouseLeave", ["mouseout", "mouseover"]), $i("onPointerEnter", ["pointerout", "pointerover"]), $i("onPointerLeave", ["pointerout", "pointerover"]), Iu(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), Iu(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), Iu("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Iu(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), Iu(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), Iu(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var Rp = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), R1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rp)
    ), zg = "_reactListening" + Math.random().toString(36).slice(2), qS = !1, YS = !1, Mg = !1, jS = !1, Ug = !1, Cg = !1, LS = !1, Hg = {}, RE = /\r\n?/g, OE = /\u0000|\uFFFD/g, us = "http://www.w3.org/1999/xlink", O1 = "http://www.w3.org/XML/1998/namespace", DE = "javascript:throw new Error('React form unexpectedly submitted.')", xE = "suppressHydrationWarning", wg = "$", _g = "/$", Pc = "$?", Op = "$!", zE = 1, ME = 2, UE = 4, D1 = "F!", VS = "F", GS = "complete", CE = "style", Ic = 0, wh = 1, Ng = 2, x1 = null, z1 = null, XS = { dialog: !0, webview: !0 }, M1 = null, QS = typeof setTimeout == "function" ? setTimeout : void 0, HE = typeof clearTimeout == "function" ? clearTimeout : void 0, is = -1, ZS = typeof Promise == "function" ? Promise : void 0, wE = typeof queueMicrotask == "function" ? queueMicrotask : typeof ZS < "u" ? function(e) {
      return ZS.resolve(null).then(e).catch(yy);
    } : QS, U1 = null, cs = 0, Dp = 1, kS = 2, JS = 3, hu = 4, mu = /* @__PURE__ */ new Map(), KS = /* @__PURE__ */ new Set(), eo = Ce.d;
    Ce.d = {
      f: function() {
        var e = eo.f(), t = Mc();
        return e || t;
      },
      r: function(e) {
        var t = vn(e);
        t !== null && t.tag === 5 && t.type === "form" ? Dm(t) : eo.r(e);
      },
      D: function(e) {
        eo.D(e), Y0("dns-prefetch", e, null);
      },
      C: function(e, t) {
        eo.C(e, t), Y0("preconnect", e, t);
      },
      L: function(e, t, n) {
        eo.L(e, t, n);
        var i = _h;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + bn(t) + '"]';
          t === "image" && n && n.imageSrcSet ? (o += '[imagesrcset="' + bn(
            n.imageSrcSet
          ) + '"]', typeof n.imageSizes == "string" && (o += '[imagesizes="' + bn(
            n.imageSizes
          ) + '"]')) : o += '[href="' + bn(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = zi(e);
              break;
            case "script":
              f = Bc(e);
          }
          mu.has(f) || (e = Ge(
            {
              rel: "preload",
              href: t === "image" && n && n.imageSrcSet ? void 0 : e,
              as: t
            },
            n
          ), mu.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            Ia(f)
          ) || t === "script" && i.querySelector(qc(f)) || (t = i.createElement("link"), Lt(t, "link", e), il(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        eo.m(e, t);
        var n = _h;
        if (n && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + bn(i) + '"][href="' + bn(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = Bc(e);
          }
          if (!mu.has(f) && (e = Ge({ rel: "modulepreload", href: e }, t), mu.set(f, e), n.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (n.querySelector(qc(f)))
                  return;
            }
            i = n.createElement("link"), Lt(i, "link", e), il(i), n.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        eo.X(e, t);
        var n = _h;
        if (n && e) {
          var i = Oa(n).hoistableScripts, o = Bc(e), f = i.get(o);
          f || (f = n.querySelector(
            qc(o)
          ), f || (e = Ge({ src: e, async: !0 }, t), (t = mu.get(o)) && Ay(e, t), f = n.createElement("script"), il(f), Lt(f, "link", e), n.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, n) {
        eo.S(e, t, n);
        var i = _h;
        if (i && e) {
          var o = Oa(i).hoistableStyles, f = zi(e);
          t = t || "default";
          var m = o.get(f);
          if (!m) {
            var g = { loading: cs, preload: null };
            if (m = i.querySelector(
              Ia(f)
            ))
              g.loading = Dp | hu;
            else {
              e = Ge(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                n
              ), (n = mu.get(f)) && Ey(e, n);
              var T = m = i.createElement("link");
              il(T), Lt(T, "link", e), T._p = new Promise(function(A, L) {
                T.onload = A, T.onerror = L;
              }), T.addEventListener("load", function() {
                g.loading |= Dp;
              }), T.addEventListener("error", function() {
                g.loading |= kS;
              }), g.loading |= hu, qd(m, t, i);
            }
            m = {
              type: "stylesheet",
              instance: m,
              count: 1,
              state: g
            }, o.set(f, m);
          }
        }
      },
      M: function(e, t) {
        eo.M(e, t);
        var n = _h;
        if (n && e) {
          var i = Oa(n).hoistableScripts, o = Bc(e), f = i.get(o);
          f || (f = n.querySelector(
            qc(o)
          ), f || (e = Ge({ src: e, async: !0, type: "module" }, t), (t = mu.get(o)) && Ay(e, t), f = n.createElement("script"), il(f), Lt(f, "link", e), n.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var _h = typeof document > "u" ? null : document, Bg = null, xp = null, C1 = null, qg = null, os = Mv, zp = {
      $$typeof: Kn,
      Provider: null,
      Consumer: null,
      _currentValue: os,
      _currentValue2: os,
      _threadCount: 0
    }, $S = "%c%s%c ", WS = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", FS = "", Yg = " ", _E = Function.prototype.bind, PS = !1, IS = null, eT = null, tT = null, lT = null, nT = null, aT = null, uT = null, iT = null, cT = null;
    IS = function(e, t, n, i) {
      t = s(e, t), t !== null && (n = h(t.memoizedState, n, 0, i), t.memoizedState = n, t.baseState = n, e.memoizedProps = Ge({}, e.memoizedProps), n = Il(e, 2), n !== null && Yt(n, e, 2));
    }, eT = function(e, t, n) {
      t = s(e, t), t !== null && (n = b(t.memoizedState, n, 0), t.memoizedState = n, t.baseState = n, e.memoizedProps = Ge({}, e.memoizedProps), n = Il(e, 2), n !== null && Yt(n, e, 2));
    }, tT = function(e, t, n, i) {
      t = s(e, t), t !== null && (n = p(t.memoizedState, n, i), t.memoizedState = n, t.baseState = n, e.memoizedProps = Ge({}, e.memoizedProps), n = Il(e, 2), n !== null && Yt(n, e, 2));
    }, lT = function(e, t, n) {
      e.pendingProps = h(e.memoizedProps, t, 0, n), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Il(e, 2), t !== null && Yt(t, e, 2);
    }, nT = function(e, t) {
      e.pendingProps = b(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Il(e, 2), t !== null && Yt(t, e, 2);
    }, aT = function(e, t, n) {
      e.pendingProps = p(
        e.memoizedProps,
        t,
        n
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Il(e, 2), t !== null && Yt(t, e, 2);
    }, uT = function(e) {
      var t = Il(e, 2);
      t !== null && Yt(t, e, 2);
    }, iT = function(e) {
      R = e;
    }, cT = function(e) {
      E = e;
    };
    var jg = !0, Lg = null, H1 = !1, gf = null, vf = null, bf = null, Mp = /* @__PURE__ */ new Map(), Up = /* @__PURE__ */ new Map(), Sf = [], NE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Vg = null;
    if (Mr.prototype.render = Xd.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var n = arguments;
      typeof n[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : I(n[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof n[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), n = e;
      var i = t.current, o = cn(i);
      ht(i, o, n, t, null, null);
    }, Mr.prototype.unmount = Xd.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (mt & (Hn | $u)) !== Sa && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), ht(e.current, 2, null, e, null, null), Mc(), t[Bi] = null;
      }
    }, Mr.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = $p();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Sf.length && t !== 0 && t < Sf[n].priority; n++) ;
        Sf.splice(n, 0, e), n === 0 && Q0(e);
      }
    }, function() {
      var e = Ur.version;
      if (e !== "19.1.1")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.1.1
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    }(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), Ce.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = Ae(t), e = e !== null ? le(e) : null, e = e === null ? null : e.stateNode, e;
    }, !function() {
      var e = {
        bundleType: 1,
        version: "19.1.1",
        rendererPackageName: "react-dom",
        currentDispatcherRef: X,
        reconcilerVersion: "19.1.1"
      };
      return e.overrideHookState = IS, e.overrideHookStateDeletePath = eT, e.overrideHookStateRenamePath = tT, e.overrideProps = lT, e.overridePropsDeletePath = nT, e.overridePropsRenamePath = aT, e.scheduleUpdate = uT, e.setErrorHandler = iT, e.setSuspenseHandler = cT, e.scheduleRefresh = ee, e.scheduleRoot = me, e.setRefreshHandler = ne, e.getCurrentFiber = Ov, e.getLaneLabelMap = Dv, e.injectProfilingHooks = Ra, gt(e);
    }() && O && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var oT = window.location.protocol;
      /^(https?|file):$/.test(oT) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (oT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    Np.createRoot = function(e, t) {
      if (!I(e))
        throw Error("Target container is not a DOM element.");
      J0(e);
      var n = !1, i = "", o = Um, f = E0, m = Ws, g = null;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === Ci && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (m = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (g = t.unstable_transitionCallbacks)), t = Dy(
        e,
        1,
        !1,
        null,
        null,
        n,
        i,
        o,
        f,
        m,
        g,
        null
      ), e[Bi] = t.current, oy(e), new Xd(t);
    }, Np.hydrateRoot = function(e, t, n) {
      if (!I(e))
        throw Error("Target container is not a DOM element.");
      J0(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = Um, m = E0, g = Ws, T = null, A = null;
      return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (f = n.onUncaughtError), n.onCaughtError !== void 0 && (m = n.onCaughtError), n.onRecoverableError !== void 0 && (g = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (T = n.unstable_transitionCallbacks), n.formState !== void 0 && (A = n.formState)), t = Dy(
        e,
        1,
        !0,
        t,
        n ?? null,
        i,
        o,
        f,
        m,
        g,
        T,
        A
      ), t.context = xy(null), n = t.current, i = cn(n), i = jl(i), o = Ha(i), o.callback = null, ra(n, o, i), n = i, t.current.lanes = n, lo(t, n), Zn(t), e[Bi] = t.current, oy(e), new Mr(t);
    }, Np.version = "19.1.1", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Np;
}
var zT;
function BA() {
  if (zT) return Zg.exports;
  zT = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (h) {
        console.error(h);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (s(), Zg.exports = _A()) : Zg.exports = NA(), Zg.exports;
}
var qA = BA(), MT = function(h, p) {
  var y = arguments;
  if (p == null || !Gp.call(p, "css"))
    return Ul.createElement.apply(void 0, y);
  var b = y.length, E = new Array(b);
  E[0] = cb, E[1] = ib(h, p);
  for (var R = 2; R < b; R++)
    E[R] = y[R];
  return Ul.createElement.apply(null, E);
};
(function(s) {
  var h;
  h || (h = s.JSX || (s.JSX = {}));
})(MT || (MT = {}));
var YA = /* @__PURE__ */ ab(function(s, h) {
  var p = s.styles, y = iv([p], void 0, Ul.useContext(ub)), b = Ul.useRef();
  return ET(function() {
    var E = h.key + "-global", R = new h.sheet.constructor({
      key: E,
      nonce: h.sheet.nonce,
      container: h.sheet.container,
      speedy: h.sheet.isSpeedy
    }), w = !1, U = document.querySelector('style[data-emotion="' + E + " " + y.name + '"]');
    return h.sheet.tags.length && (R.before = h.sheet.tags[0]), U !== null && (w = !0, U.setAttribute("data-emotion", E), R.hydrate([U])), b.current = [R, w], function() {
      R.flush();
    };
  }, [h]), ET(function() {
    var E = b.current, R = E[0], w = E[1];
    if (w) {
      E[1] = !1;
      return;
    }
    if (y.next !== void 0 && nb(h, y.next, !0), R.tags.length) {
      var U = R.tags[R.tags.length - 1].nextElementSibling;
      R.before = U, R.flush();
    }
    h.insert("", y, R, !1);
  }, [h, y.name]), null;
});
function _n() {
  for (var s = arguments.length, h = new Array(s), p = 0; p < s; p++)
    h[p] = arguments[p];
  return iv(h);
}
const jA = _n`
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
`, LA = () => /* @__PURE__ */ Ml(YA, { styles: jA });
var VA = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, GA = /* @__PURE__ */ PT(
  function(s) {
    return VA.test(s) || s.charCodeAt(0) === 111 && s.charCodeAt(1) === 110 && s.charCodeAt(2) < 91;
  }
  /* Z+1 */
), XA = GA, QA = function(h) {
  return h !== "theme";
}, UT = function(h) {
  return typeof h == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  h.charCodeAt(0) > 96 ? XA : QA;
}, CT = function(h, p, y) {
  var b;
  if (p) {
    var E = p.shouldForwardProp;
    b = h.__emotion_forwardProp && E ? function(R) {
      return h.__emotion_forwardProp(R) && E(R);
    } : E;
  }
  return typeof b != "function" && y && (b = h.__emotion_forwardProp), b;
}, ZA = function(h) {
  var p = h.cache, y = h.serialized, b = h.isStringTag;
  return lb(p, y, b), a2(function() {
    return nb(p, y, b);
  }), null;
}, kA = function s(h, p) {
  var y = h.__emotion_real === h, b = y && h.__emotion_base || h, E, R;
  p !== void 0 && (E = p.label, R = p.target);
  var w = CT(h, p, y), U = w || UT(b), j = !U("as");
  return function() {
    var _ = arguments, $ = y && h.__emotion_styles !== void 0 ? h.__emotion_styles.slice(0) : [];
    if (E !== void 0 && $.push("label:" + E + ";"), _[0] == null || _[0].raw === void 0)
      $.push.apply($, _);
    else {
      var ie = _[0];
      $.push(ie[0]);
      for (var me = _.length, ee = 1; ee < me; ee++)
        $.push(_[ee], ie[ee]);
    }
    var ne = ab(function(I, ce, be) {
      var re = j && I.as || b, Ae = "", le = [], Te = I;
      if (I.theme == null) {
        Te = {};
        for (var de in I)
          Te[de] = I[de];
        Te.theme = Ul.useContext(ub);
      }
      typeof I.className == "string" ? Ae = t2(ce.registered, le, I.className) : I.className != null && (Ae = I.className + " ");
      var st = iv($.concat(le), ce.registered, Te);
      Ae += ce.key + "-" + st.name, R !== void 0 && (Ae += " " + R);
      var Se = j && w === void 0 ? UT(re) : U, dt = {};
      for (var Je in I)
        j && Je === "as" || Se(Je) && (dt[Je] = I[Je]);
      return dt.className = Ae, be && (dt.ref = be), /* @__PURE__ */ Ul.createElement(Ul.Fragment, null, /* @__PURE__ */ Ul.createElement(ZA, {
        cache: ce,
        serialized: st,
        isStringTag: typeof re == "string"
      }), /* @__PURE__ */ Ul.createElement(re, dt));
    });
    return ne.displayName = E !== void 0 ? E : "Styled(" + (typeof b == "string" ? b : b.displayName || b.name || "Component") + ")", ne.defaultProps = h.defaultProps, ne.__emotion_real = ne, ne.__emotion_base = b, ne.__emotion_styles = $, ne.__emotion_forwardProp = w, Object.defineProperty(ne, "toString", {
      value: function() {
        return "." + R;
      }
    }), ne.withComponent = function(I, ce) {
      var be = s(I, X1({}, p, ce, {
        shouldForwardProp: CT(ne, ce, !0)
      }));
      return be.apply(void 0, $);
    }, ne;
  };
}, JA = [
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
], Z1 = kA.bind(null);
JA.forEach(function(s) {
  Z1[s] = Z1(s);
});
const KA = Z1.button`
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
function c2(s, h) {
  return function() {
    return s.apply(h, arguments);
  };
}
const { toString: $A } = Object.prototype, { getPrototypeOf: ob } = Object, { iterator: cv, toStringTag: o2 } = Symbol, ov = /* @__PURE__ */ ((s) => (h) => {
  const p = $A.call(h);
  return s[p] || (s[p] = p.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Wu = (s) => (s = s.toLowerCase(), (h) => ov(h) === s), fv = (s) => (h) => typeof h === s, { isArray: Yh } = Array, Lp = fv("undefined");
function Xp(s) {
  return s !== null && !Lp(s) && s.constructor !== null && !Lp(s.constructor) && ea(s.constructor.isBuffer) && s.constructor.isBuffer(s);
}
const f2 = Wu("ArrayBuffer");
function WA(s) {
  let h;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? h = ArrayBuffer.isView(s) : h = s && s.buffer && f2(s.buffer), h;
}
const FA = fv("string"), ea = fv("function"), r2 = fv("number"), Qp = (s) => s !== null && typeof s == "object", PA = (s) => s === !0 || s === !1, Wg = (s) => {
  if (ov(s) !== "object")
    return !1;
  const h = ob(s);
  return (h === null || h === Object.prototype || Object.getPrototypeOf(h) === null) && !(o2 in s) && !(cv in s);
}, IA = (s) => {
  if (!Qp(s) || Xp(s))
    return !1;
  try {
    return Object.keys(s).length === 0 && Object.getPrototypeOf(s) === Object.prototype;
  } catch {
    return !1;
  }
}, eR = Wu("Date"), tR = Wu("File"), lR = Wu("Blob"), nR = Wu("FileList"), aR = (s) => Qp(s) && ea(s.pipe), uR = (s) => {
  let h;
  return s && (typeof FormData == "function" && s instanceof FormData || ea(s.append) && ((h = ov(s)) === "formdata" || // detect form-data instance
  h === "object" && ea(s.toString) && s.toString() === "[object FormData]"));
}, iR = Wu("URLSearchParams"), [cR, oR, fR, rR] = ["ReadableStream", "Request", "Response", "Headers"].map(Wu), sR = (s) => s.trim ? s.trim() : s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Zp(s, h, { allOwnKeys: p = !1 } = {}) {
  if (s === null || typeof s > "u")
    return;
  let y, b;
  if (typeof s != "object" && (s = [s]), Yh(s))
    for (y = 0, b = s.length; y < b; y++)
      h.call(null, s[y], y, s);
  else {
    if (Xp(s))
      return;
    const E = p ? Object.getOwnPropertyNames(s) : Object.keys(s), R = E.length;
    let w;
    for (y = 0; y < R; y++)
      w = E[y], h.call(null, s[w], w, s);
  }
}
function s2(s, h) {
  if (Xp(s))
    return null;
  h = h.toLowerCase();
  const p = Object.keys(s);
  let y = p.length, b;
  for (; y-- > 0; )
    if (b = p[y], h === b.toLowerCase())
      return b;
  return null;
}
const fs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, d2 = (s) => !Lp(s) && s !== fs;
function k1() {
  const { caseless: s } = d2(this) && this || {}, h = {}, p = (y, b) => {
    const E = s && s2(h, b) || b;
    Wg(h[E]) && Wg(y) ? h[E] = k1(h[E], y) : Wg(y) ? h[E] = k1({}, y) : Yh(y) ? h[E] = y.slice() : h[E] = y;
  };
  for (let y = 0, b = arguments.length; y < b; y++)
    arguments[y] && Zp(arguments[y], p);
  return h;
}
const dR = (s, h, p, { allOwnKeys: y } = {}) => (Zp(h, (b, E) => {
  p && ea(b) ? s[E] = c2(b, p) : s[E] = b;
}, { allOwnKeys: y }), s), hR = (s) => (s.charCodeAt(0) === 65279 && (s = s.slice(1)), s), mR = (s, h, p, y) => {
  s.prototype = Object.create(h.prototype, y), s.prototype.constructor = s, Object.defineProperty(s, "super", {
    value: h.prototype
  }), p && Object.assign(s.prototype, p);
}, yR = (s, h, p, y) => {
  let b, E, R;
  const w = {};
  if (h = h || {}, s == null) return h;
  do {
    for (b = Object.getOwnPropertyNames(s), E = b.length; E-- > 0; )
      R = b[E], (!y || y(R, s, h)) && !w[R] && (h[R] = s[R], w[R] = !0);
    s = p !== !1 && ob(s);
  } while (s && (!p || p(s, h)) && s !== Object.prototype);
  return h;
}, pR = (s, h, p) => {
  s = String(s), (p === void 0 || p > s.length) && (p = s.length), p -= h.length;
  const y = s.indexOf(h, p);
  return y !== -1 && y === p;
}, gR = (s) => {
  if (!s) return null;
  if (Yh(s)) return s;
  let h = s.length;
  if (!r2(h)) return null;
  const p = new Array(h);
  for (; h-- > 0; )
    p[h] = s[h];
  return p;
}, vR = /* @__PURE__ */ ((s) => (h) => s && h instanceof s)(typeof Uint8Array < "u" && ob(Uint8Array)), bR = (s, h) => {
  const y = (s && s[cv]).call(s);
  let b;
  for (; (b = y.next()) && !b.done; ) {
    const E = b.value;
    h.call(s, E[0], E[1]);
  }
}, SR = (s, h) => {
  let p;
  const y = [];
  for (; (p = s.exec(h)) !== null; )
    y.push(p);
  return y;
}, TR = Wu("HTMLFormElement"), ER = (s) => s.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(p, y, b) {
    return y.toUpperCase() + b;
  }
), HT = (({ hasOwnProperty: s }) => (h, p) => s.call(h, p))(Object.prototype), AR = Wu("RegExp"), h2 = (s, h) => {
  const p = Object.getOwnPropertyDescriptors(s), y = {};
  Zp(p, (b, E) => {
    let R;
    (R = h(b, E, s)) !== !1 && (y[E] = R || b);
  }), Object.defineProperties(s, y);
}, RR = (s) => {
  h2(s, (h, p) => {
    if (ea(s) && ["arguments", "caller", "callee"].indexOf(p) !== -1)
      return !1;
    const y = s[p];
    if (ea(y)) {
      if (h.enumerable = !1, "writable" in h) {
        h.writable = !1;
        return;
      }
      h.set || (h.set = () => {
        throw Error("Can not rewrite read-only method '" + p + "'");
      });
    }
  });
}, OR = (s, h) => {
  const p = {}, y = (b) => {
    b.forEach((E) => {
      p[E] = !0;
    });
  };
  return Yh(s) ? y(s) : y(String(s).split(h)), p;
}, DR = () => {
}, xR = (s, h) => s != null && Number.isFinite(s = +s) ? s : h;
function zR(s) {
  return !!(s && ea(s.append) && s[o2] === "FormData" && s[cv]);
}
const MR = (s) => {
  const h = new Array(10), p = (y, b) => {
    if (Qp(y)) {
      if (h.indexOf(y) >= 0)
        return;
      if (Xp(y))
        return y;
      if (!("toJSON" in y)) {
        h[b] = y;
        const E = Yh(y) ? [] : {};
        return Zp(y, (R, w) => {
          const U = p(R, b + 1);
          !Lp(U) && (E[w] = U);
        }), h[b] = void 0, E;
      }
    }
    return y;
  };
  return p(s, 0);
}, UR = Wu("AsyncFunction"), CR = (s) => s && (Qp(s) || ea(s)) && ea(s.then) && ea(s.catch), m2 = ((s, h) => s ? setImmediate : h ? ((p, y) => (fs.addEventListener("message", ({ source: b, data: E }) => {
  b === fs && E === p && y.length && y.shift()();
}, !1), (b) => {
  y.push(b), fs.postMessage(p, "*");
}))(`axios@${Math.random()}`, []) : (p) => setTimeout(p))(
  typeof setImmediate == "function",
  ea(fs.postMessage)
), HR = typeof queueMicrotask < "u" ? queueMicrotask.bind(fs) : typeof process < "u" && process.nextTick || m2, wR = (s) => s != null && ea(s[cv]), k = {
  isArray: Yh,
  isArrayBuffer: f2,
  isBuffer: Xp,
  isFormData: uR,
  isArrayBufferView: WA,
  isString: FA,
  isNumber: r2,
  isBoolean: PA,
  isObject: Qp,
  isPlainObject: Wg,
  isEmptyObject: IA,
  isReadableStream: cR,
  isRequest: oR,
  isResponse: fR,
  isHeaders: rR,
  isUndefined: Lp,
  isDate: eR,
  isFile: tR,
  isBlob: lR,
  isRegExp: AR,
  isFunction: ea,
  isStream: aR,
  isURLSearchParams: iR,
  isTypedArray: vR,
  isFileList: nR,
  forEach: Zp,
  merge: k1,
  extend: dR,
  trim: sR,
  stripBOM: hR,
  inherits: mR,
  toFlatObject: yR,
  kindOf: ov,
  kindOfTest: Wu,
  endsWith: pR,
  toArray: gR,
  forEachEntry: bR,
  matchAll: SR,
  isHTMLForm: TR,
  hasOwnProperty: HT,
  hasOwnProp: HT,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: h2,
  freezeMethods: RR,
  toObjectSet: OR,
  toCamelCase: ER,
  noop: DR,
  toFiniteNumber: xR,
  findKey: s2,
  global: fs,
  isContextDefined: d2,
  isSpecCompliantForm: zR,
  toJSONObject: MR,
  isAsyncFn: UR,
  isThenable: CR,
  setImmediate: m2,
  asap: HR,
  isIterable: wR
};
function Xe(s, h, p, y, b) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = s, this.name = "AxiosError", h && (this.code = h), p && (this.config = p), y && (this.request = y), b && (this.response = b, this.status = b.status ? b.status : null);
}
k.inherits(Xe, Error, {
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
      config: k.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const y2 = Xe.prototype, p2 = {};
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
].forEach((s) => {
  p2[s] = { value: s };
});
Object.defineProperties(Xe, p2);
Object.defineProperty(y2, "isAxiosError", { value: !0 });
Xe.from = (s, h, p, y, b, E) => {
  const R = Object.create(y2);
  return k.toFlatObject(s, R, function(U) {
    return U !== Error.prototype;
  }, (w) => w !== "isAxiosError"), Xe.call(R, s.message, h, p, y, b), R.cause = s, R.name = s.name, E && Object.assign(R, E), R;
};
const _R = null;
function J1(s) {
  return k.isPlainObject(s) || k.isArray(s);
}
function g2(s) {
  return k.endsWith(s, "[]") ? s.slice(0, -2) : s;
}
function wT(s, h, p) {
  return s ? s.concat(h).map(function(b, E) {
    return b = g2(b), !p && E ? "[" + b + "]" : b;
  }).join(p ? "." : "") : h;
}
function NR(s) {
  return k.isArray(s) && !s.some(J1);
}
const BR = k.toFlatObject(k, {}, null, function(h) {
  return /^is[A-Z]/.test(h);
});
function rv(s, h, p) {
  if (!k.isObject(s))
    throw new TypeError("target must be an object");
  h = h || new FormData(), p = k.toFlatObject(p, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(ne, I) {
    return !k.isUndefined(I[ne]);
  });
  const y = p.metaTokens, b = p.visitor || _, E = p.dots, R = p.indexes, U = (p.Blob || typeof Blob < "u" && Blob) && k.isSpecCompliantForm(h);
  if (!k.isFunction(b))
    throw new TypeError("visitor must be a function");
  function j(ee) {
    if (ee === null) return "";
    if (k.isDate(ee))
      return ee.toISOString();
    if (k.isBoolean(ee))
      return ee.toString();
    if (!U && k.isBlob(ee))
      throw new Xe("Blob is not supported. Use a Buffer instead.");
    return k.isArrayBuffer(ee) || k.isTypedArray(ee) ? U && typeof Blob == "function" ? new Blob([ee]) : Buffer.from(ee) : ee;
  }
  function _(ee, ne, I) {
    let ce = ee;
    if (ee && !I && typeof ee == "object") {
      if (k.endsWith(ne, "{}"))
        ne = y ? ne : ne.slice(0, -2), ee = JSON.stringify(ee);
      else if (k.isArray(ee) && NR(ee) || (k.isFileList(ee) || k.endsWith(ne, "[]")) && (ce = k.toArray(ee)))
        return ne = g2(ne), ce.forEach(function(re, Ae) {
          !(k.isUndefined(re) || re === null) && h.append(
            // eslint-disable-next-line no-nested-ternary
            R === !0 ? wT([ne], Ae, E) : R === null ? ne : ne + "[]",
            j(re)
          );
        }), !1;
    }
    return J1(ee) ? !0 : (h.append(wT(I, ne, E), j(ee)), !1);
  }
  const $ = [], ie = Object.assign(BR, {
    defaultVisitor: _,
    convertValue: j,
    isVisitable: J1
  });
  function me(ee, ne) {
    if (!k.isUndefined(ee)) {
      if ($.indexOf(ee) !== -1)
        throw Error("Circular reference detected in " + ne.join("."));
      $.push(ee), k.forEach(ee, function(ce, be) {
        (!(k.isUndefined(ce) || ce === null) && b.call(
          h,
          ce,
          k.isString(be) ? be.trim() : be,
          ne,
          ie
        )) === !0 && me(ce, ne ? ne.concat(be) : [be]);
      }), $.pop();
    }
  }
  if (!k.isObject(s))
    throw new TypeError("data must be an object");
  return me(s), h;
}
function _T(s) {
  const h = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(s).replace(/[!'()~]|%20|%00/g, function(y) {
    return h[y];
  });
}
function fb(s, h) {
  this._pairs = [], s && rv(s, this, h);
}
const v2 = fb.prototype;
v2.append = function(h, p) {
  this._pairs.push([h, p]);
};
v2.toString = function(h) {
  const p = h ? function(y) {
    return h.call(this, y, _T);
  } : _T;
  return this._pairs.map(function(b) {
    return p(b[0]) + "=" + p(b[1]);
  }, "").join("&");
};
function qR(s) {
  return encodeURIComponent(s).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function b2(s, h, p) {
  if (!h)
    return s;
  const y = p && p.encode || qR;
  k.isFunction(p) && (p = {
    serialize: p
  });
  const b = p && p.serialize;
  let E;
  if (b ? E = b(h, p) : E = k.isURLSearchParams(h) ? h.toString() : new fb(h, p).toString(y), E) {
    const R = s.indexOf("#");
    R !== -1 && (s = s.slice(0, R)), s += (s.indexOf("?") === -1 ? "?" : "&") + E;
  }
  return s;
}
class NT {
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
  use(h, p, y) {
    return this.handlers.push({
      fulfilled: h,
      rejected: p,
      synchronous: y ? y.synchronous : !1,
      runWhen: y ? y.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(h) {
    this.handlers[h] && (this.handlers[h] = null);
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
  forEach(h) {
    k.forEach(this.handlers, function(y) {
      y !== null && h(y);
    });
  }
}
const S2 = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, YR = typeof URLSearchParams < "u" ? URLSearchParams : fb, jR = typeof FormData < "u" ? FormData : null, LR = typeof Blob < "u" ? Blob : null, VR = {
  isBrowser: !0,
  classes: {
    URLSearchParams: YR,
    FormData: jR,
    Blob: LR
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, rb = typeof window < "u" && typeof document < "u", K1 = typeof navigator == "object" && navigator || void 0, GR = rb && (!K1 || ["ReactNative", "NativeScript", "NS"].indexOf(K1.product) < 0), XR = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", QR = rb && window.location.href || "http://localhost", ZR = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: rb,
  hasStandardBrowserEnv: GR,
  hasStandardBrowserWebWorkerEnv: XR,
  navigator: K1,
  origin: QR
}, Symbol.toStringTag, { value: "Module" })), pn = {
  ...ZR,
  ...VR
};
function kR(s, h) {
  return rv(s, new pn.classes.URLSearchParams(), {
    visitor: function(p, y, b, E) {
      return pn.isNode && k.isBuffer(p) ? (this.append(y, p.toString("base64")), !1) : E.defaultVisitor.apply(this, arguments);
    },
    ...h
  });
}
function JR(s) {
  return k.matchAll(/\w+|\[(\w*)]/g, s).map((h) => h[0] === "[]" ? "" : h[1] || h[0]);
}
function KR(s) {
  const h = {}, p = Object.keys(s);
  let y;
  const b = p.length;
  let E;
  for (y = 0; y < b; y++)
    E = p[y], h[E] = s[E];
  return h;
}
function T2(s) {
  function h(p, y, b, E) {
    let R = p[E++];
    if (R === "__proto__") return !0;
    const w = Number.isFinite(+R), U = E >= p.length;
    return R = !R && k.isArray(b) ? b.length : R, U ? (k.hasOwnProp(b, R) ? b[R] = [b[R], y] : b[R] = y, !w) : ((!b[R] || !k.isObject(b[R])) && (b[R] = []), h(p, y, b[R], E) && k.isArray(b[R]) && (b[R] = KR(b[R])), !w);
  }
  if (k.isFormData(s) && k.isFunction(s.entries)) {
    const p = {};
    return k.forEachEntry(s, (y, b) => {
      h(JR(y), b, p, 0);
    }), p;
  }
  return null;
}
function $R(s, h, p) {
  if (k.isString(s))
    try {
      return (h || JSON.parse)(s), k.trim(s);
    } catch (y) {
      if (y.name !== "SyntaxError")
        throw y;
    }
  return (p || JSON.stringify)(s);
}
const kp = {
  transitional: S2,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(h, p) {
    const y = p.getContentType() || "", b = y.indexOf("application/json") > -1, E = k.isObject(h);
    if (E && k.isHTMLForm(h) && (h = new FormData(h)), k.isFormData(h))
      return b ? JSON.stringify(T2(h)) : h;
    if (k.isArrayBuffer(h) || k.isBuffer(h) || k.isStream(h) || k.isFile(h) || k.isBlob(h) || k.isReadableStream(h))
      return h;
    if (k.isArrayBufferView(h))
      return h.buffer;
    if (k.isURLSearchParams(h))
      return p.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), h.toString();
    let w;
    if (E) {
      if (y.indexOf("application/x-www-form-urlencoded") > -1)
        return kR(h, this.formSerializer).toString();
      if ((w = k.isFileList(h)) || y.indexOf("multipart/form-data") > -1) {
        const U = this.env && this.env.FormData;
        return rv(
          w ? { "files[]": h } : h,
          U && new U(),
          this.formSerializer
        );
      }
    }
    return E || b ? (p.setContentType("application/json", !1), $R(h)) : h;
  }],
  transformResponse: [function(h) {
    const p = this.transitional || kp.transitional, y = p && p.forcedJSONParsing, b = this.responseType === "json";
    if (k.isResponse(h) || k.isReadableStream(h))
      return h;
    if (h && k.isString(h) && (y && !this.responseType || b)) {
      const R = !(p && p.silentJSONParsing) && b;
      try {
        return JSON.parse(h);
      } catch (w) {
        if (R)
          throw w.name === "SyntaxError" ? Xe.from(w, Xe.ERR_BAD_RESPONSE, this, null, this.response) : w;
      }
    }
    return h;
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
    FormData: pn.classes.FormData,
    Blob: pn.classes.Blob
  },
  validateStatus: function(h) {
    return h >= 200 && h < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
k.forEach(["delete", "get", "head", "post", "put", "patch"], (s) => {
  kp.headers[s] = {};
});
const WR = k.toObjectSet([
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
]), FR = (s) => {
  const h = {};
  let p, y, b;
  return s && s.split(`
`).forEach(function(R) {
    b = R.indexOf(":"), p = R.substring(0, b).trim().toLowerCase(), y = R.substring(b + 1).trim(), !(!p || h[p] && WR[p]) && (p === "set-cookie" ? h[p] ? h[p].push(y) : h[p] = [y] : h[p] = h[p] ? h[p] + ", " + y : y);
  }), h;
}, BT = Symbol("internals");
function Bp(s) {
  return s && String(s).trim().toLowerCase();
}
function Fg(s) {
  return s === !1 || s == null ? s : k.isArray(s) ? s.map(Fg) : String(s);
}
function PR(s) {
  const h = /* @__PURE__ */ Object.create(null), p = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let y;
  for (; y = p.exec(s); )
    h[y[1]] = y[2];
  return h;
}
const IR = (s) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim());
function Y1(s, h, p, y, b) {
  if (k.isFunction(y))
    return y.call(this, h, p);
  if (b && (h = p), !!k.isString(h)) {
    if (k.isString(y))
      return h.indexOf(y) !== -1;
    if (k.isRegExp(y))
      return y.test(h);
  }
}
function e3(s) {
  return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (h, p, y) => p.toUpperCase() + y);
}
function t3(s, h) {
  const p = k.toCamelCase(" " + h);
  ["get", "set", "has"].forEach((y) => {
    Object.defineProperty(s, y + p, {
      value: function(b, E, R) {
        return this[y].call(this, h, b, E, R);
      },
      configurable: !0
    });
  });
}
let ta = class {
  constructor(h) {
    h && this.set(h);
  }
  set(h, p, y) {
    const b = this;
    function E(w, U, j) {
      const _ = Bp(U);
      if (!_)
        throw new Error("header name must be a non-empty string");
      const $ = k.findKey(b, _);
      (!$ || b[$] === void 0 || j === !0 || j === void 0 && b[$] !== !1) && (b[$ || U] = Fg(w));
    }
    const R = (w, U) => k.forEach(w, (j, _) => E(j, _, U));
    if (k.isPlainObject(h) || h instanceof this.constructor)
      R(h, p);
    else if (k.isString(h) && (h = h.trim()) && !IR(h))
      R(FR(h), p);
    else if (k.isObject(h) && k.isIterable(h)) {
      let w = {}, U, j;
      for (const _ of h) {
        if (!k.isArray(_))
          throw TypeError("Object iterator must return a key-value pair");
        w[j = _[0]] = (U = w[j]) ? k.isArray(U) ? [...U, _[1]] : [U, _[1]] : _[1];
      }
      R(w, p);
    } else
      h != null && E(p, h, y);
    return this;
  }
  get(h, p) {
    if (h = Bp(h), h) {
      const y = k.findKey(this, h);
      if (y) {
        const b = this[y];
        if (!p)
          return b;
        if (p === !0)
          return PR(b);
        if (k.isFunction(p))
          return p.call(this, b, y);
        if (k.isRegExp(p))
          return p.exec(b);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(h, p) {
    if (h = Bp(h), h) {
      const y = k.findKey(this, h);
      return !!(y && this[y] !== void 0 && (!p || Y1(this, this[y], y, p)));
    }
    return !1;
  }
  delete(h, p) {
    const y = this;
    let b = !1;
    function E(R) {
      if (R = Bp(R), R) {
        const w = k.findKey(y, R);
        w && (!p || Y1(y, y[w], w, p)) && (delete y[w], b = !0);
      }
    }
    return k.isArray(h) ? h.forEach(E) : E(h), b;
  }
  clear(h) {
    const p = Object.keys(this);
    let y = p.length, b = !1;
    for (; y--; ) {
      const E = p[y];
      (!h || Y1(this, this[E], E, h, !0)) && (delete this[E], b = !0);
    }
    return b;
  }
  normalize(h) {
    const p = this, y = {};
    return k.forEach(this, (b, E) => {
      const R = k.findKey(y, E);
      if (R) {
        p[R] = Fg(b), delete p[E];
        return;
      }
      const w = h ? e3(E) : String(E).trim();
      w !== E && delete p[E], p[w] = Fg(b), y[w] = !0;
    }), this;
  }
  concat(...h) {
    return this.constructor.concat(this, ...h);
  }
  toJSON(h) {
    const p = /* @__PURE__ */ Object.create(null);
    return k.forEach(this, (y, b) => {
      y != null && y !== !1 && (p[b] = h && k.isArray(y) ? y.join(", ") : y);
    }), p;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([h, p]) => h + ": " + p).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(h) {
    return h instanceof this ? h : new this(h);
  }
  static concat(h, ...p) {
    const y = new this(h);
    return p.forEach((b) => y.set(b)), y;
  }
  static accessor(h) {
    const y = (this[BT] = this[BT] = {
      accessors: {}
    }).accessors, b = this.prototype;
    function E(R) {
      const w = Bp(R);
      y[w] || (t3(b, R), y[w] = !0);
    }
    return k.isArray(h) ? h.forEach(E) : E(h), this;
  }
};
ta.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
k.reduceDescriptors(ta.prototype, ({ value: s }, h) => {
  let p = h[0].toUpperCase() + h.slice(1);
  return {
    get: () => s,
    set(y) {
      this[p] = y;
    }
  };
});
k.freezeMethods(ta);
function j1(s, h) {
  const p = this || kp, y = h || p, b = ta.from(y.headers);
  let E = y.data;
  return k.forEach(s, function(w) {
    E = w.call(p, E, b.normalize(), h ? h.status : void 0);
  }), b.normalize(), E;
}
function E2(s) {
  return !!(s && s.__CANCEL__);
}
function jh(s, h, p) {
  Xe.call(this, s ?? "canceled", Xe.ERR_CANCELED, h, p), this.name = "CanceledError";
}
k.inherits(jh, Xe, {
  __CANCEL__: !0
});
function A2(s, h, p) {
  const y = p.config.validateStatus;
  !p.status || !y || y(p.status) ? s(p) : h(new Xe(
    "Request failed with status code " + p.status,
    [Xe.ERR_BAD_REQUEST, Xe.ERR_BAD_RESPONSE][Math.floor(p.status / 100) - 4],
    p.config,
    p.request,
    p
  ));
}
function l3(s) {
  const h = /^([-+\w]{1,25})(:?\/\/|:)/.exec(s);
  return h && h[1] || "";
}
function n3(s, h) {
  s = s || 10;
  const p = new Array(s), y = new Array(s);
  let b = 0, E = 0, R;
  return h = h !== void 0 ? h : 1e3, function(U) {
    const j = Date.now(), _ = y[E];
    R || (R = j), p[b] = U, y[b] = j;
    let $ = E, ie = 0;
    for (; $ !== b; )
      ie += p[$++], $ = $ % s;
    if (b = (b + 1) % s, b === E && (E = (E + 1) % s), j - R < h)
      return;
    const me = _ && j - _;
    return me ? Math.round(ie * 1e3 / me) : void 0;
  };
}
function a3(s, h) {
  let p = 0, y = 1e3 / h, b, E;
  const R = (j, _ = Date.now()) => {
    p = _, b = null, E && (clearTimeout(E), E = null), s(...j);
  };
  return [(...j) => {
    const _ = Date.now(), $ = _ - p;
    $ >= y ? R(j, _) : (b = j, E || (E = setTimeout(() => {
      E = null, R(b);
    }, y - $)));
  }, () => b && R(b)];
}
const tv = (s, h, p = 3) => {
  let y = 0;
  const b = n3(50, 250);
  return a3((E) => {
    const R = E.loaded, w = E.lengthComputable ? E.total : void 0, U = R - y, j = b(U), _ = R <= w;
    y = R;
    const $ = {
      loaded: R,
      total: w,
      progress: w ? R / w : void 0,
      bytes: U,
      rate: j || void 0,
      estimated: j && w && _ ? (w - R) / j : void 0,
      event: E,
      lengthComputable: w != null,
      [h ? "download" : "upload"]: !0
    };
    s($);
  }, p);
}, qT = (s, h) => {
  const p = s != null;
  return [(y) => h[0]({
    lengthComputable: p,
    total: s,
    loaded: y
  }), h[1]];
}, YT = (s) => (...h) => k.asap(() => s(...h)), u3 = pn.hasStandardBrowserEnv ? /* @__PURE__ */ ((s, h) => (p) => (p = new URL(p, pn.origin), s.protocol === p.protocol && s.host === p.host && (h || s.port === p.port)))(
  new URL(pn.origin),
  pn.navigator && /(msie|trident)/i.test(pn.navigator.userAgent)
) : () => !0, i3 = pn.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(s, h, p, y, b, E) {
      const R = [s + "=" + encodeURIComponent(h)];
      k.isNumber(p) && R.push("expires=" + new Date(p).toGMTString()), k.isString(y) && R.push("path=" + y), k.isString(b) && R.push("domain=" + b), E === !0 && R.push("secure"), document.cookie = R.join("; ");
    },
    read(s) {
      const h = document.cookie.match(new RegExp("(^|;\\s*)(" + s + ")=([^;]*)"));
      return h ? decodeURIComponent(h[3]) : null;
    },
    remove(s) {
      this.write(s, "", Date.now() - 864e5);
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
function c3(s) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(s);
}
function o3(s, h) {
  return h ? s.replace(/\/?\/$/, "") + "/" + h.replace(/^\/+/, "") : s;
}
function R2(s, h, p) {
  let y = !c3(h);
  return s && (y || p == !1) ? o3(s, h) : h;
}
const jT = (s) => s instanceof ta ? { ...s } : s;
function ss(s, h) {
  h = h || {};
  const p = {};
  function y(j, _, $, ie) {
    return k.isPlainObject(j) && k.isPlainObject(_) ? k.merge.call({ caseless: ie }, j, _) : k.isPlainObject(_) ? k.merge({}, _) : k.isArray(_) ? _.slice() : _;
  }
  function b(j, _, $, ie) {
    if (k.isUndefined(_)) {
      if (!k.isUndefined(j))
        return y(void 0, j, $, ie);
    } else return y(j, _, $, ie);
  }
  function E(j, _) {
    if (!k.isUndefined(_))
      return y(void 0, _);
  }
  function R(j, _) {
    if (k.isUndefined(_)) {
      if (!k.isUndefined(j))
        return y(void 0, j);
    } else return y(void 0, _);
  }
  function w(j, _, $) {
    if ($ in h)
      return y(j, _);
    if ($ in s)
      return y(void 0, j);
  }
  const U = {
    url: E,
    method: E,
    data: E,
    baseURL: R,
    transformRequest: R,
    transformResponse: R,
    paramsSerializer: R,
    timeout: R,
    timeoutMessage: R,
    withCredentials: R,
    withXSRFToken: R,
    adapter: R,
    responseType: R,
    xsrfCookieName: R,
    xsrfHeaderName: R,
    onUploadProgress: R,
    onDownloadProgress: R,
    decompress: R,
    maxContentLength: R,
    maxBodyLength: R,
    beforeRedirect: R,
    transport: R,
    httpAgent: R,
    httpsAgent: R,
    cancelToken: R,
    socketPath: R,
    responseEncoding: R,
    validateStatus: w,
    headers: (j, _, $) => b(jT(j), jT(_), $, !0)
  };
  return k.forEach(Object.keys({ ...s, ...h }), function(_) {
    const $ = U[_] || b, ie = $(s[_], h[_], _);
    k.isUndefined(ie) && $ !== w || (p[_] = ie);
  }), p;
}
const O2 = (s) => {
  const h = ss({}, s);
  let { data: p, withXSRFToken: y, xsrfHeaderName: b, xsrfCookieName: E, headers: R, auth: w } = h;
  h.headers = R = ta.from(R), h.url = b2(R2(h.baseURL, h.url, h.allowAbsoluteUrls), s.params, s.paramsSerializer), w && R.set(
    "Authorization",
    "Basic " + btoa((w.username || "") + ":" + (w.password ? unescape(encodeURIComponent(w.password)) : ""))
  );
  let U;
  if (k.isFormData(p)) {
    if (pn.hasStandardBrowserEnv || pn.hasStandardBrowserWebWorkerEnv)
      R.setContentType(void 0);
    else if ((U = R.getContentType()) !== !1) {
      const [j, ..._] = U ? U.split(";").map(($) => $.trim()).filter(Boolean) : [];
      R.setContentType([j || "multipart/form-data", ..._].join("; "));
    }
  }
  if (pn.hasStandardBrowserEnv && (y && k.isFunction(y) && (y = y(h)), y || y !== !1 && u3(h.url))) {
    const j = b && E && i3.read(E);
    j && R.set(b, j);
  }
  return h;
}, f3 = typeof XMLHttpRequest < "u", r3 = f3 && function(s) {
  return new Promise(function(p, y) {
    const b = O2(s);
    let E = b.data;
    const R = ta.from(b.headers).normalize();
    let { responseType: w, onUploadProgress: U, onDownloadProgress: j } = b, _, $, ie, me, ee;
    function ne() {
      me && me(), ee && ee(), b.cancelToken && b.cancelToken.unsubscribe(_), b.signal && b.signal.removeEventListener("abort", _);
    }
    let I = new XMLHttpRequest();
    I.open(b.method.toUpperCase(), b.url, !0), I.timeout = b.timeout;
    function ce() {
      if (!I)
        return;
      const re = ta.from(
        "getAllResponseHeaders" in I && I.getAllResponseHeaders()
      ), le = {
        data: !w || w === "text" || w === "json" ? I.responseText : I.response,
        status: I.status,
        statusText: I.statusText,
        headers: re,
        config: s,
        request: I
      };
      A2(function(de) {
        p(de), ne();
      }, function(de) {
        y(de), ne();
      }, le), I = null;
    }
    "onloadend" in I ? I.onloadend = ce : I.onreadystatechange = function() {
      !I || I.readyState !== 4 || I.status === 0 && !(I.responseURL && I.responseURL.indexOf("file:") === 0) || setTimeout(ce);
    }, I.onabort = function() {
      I && (y(new Xe("Request aborted", Xe.ECONNABORTED, s, I)), I = null);
    }, I.onerror = function() {
      y(new Xe("Network Error", Xe.ERR_NETWORK, s, I)), I = null;
    }, I.ontimeout = function() {
      let Ae = b.timeout ? "timeout of " + b.timeout + "ms exceeded" : "timeout exceeded";
      const le = b.transitional || S2;
      b.timeoutErrorMessage && (Ae = b.timeoutErrorMessage), y(new Xe(
        Ae,
        le.clarifyTimeoutError ? Xe.ETIMEDOUT : Xe.ECONNABORTED,
        s,
        I
      )), I = null;
    }, E === void 0 && R.setContentType(null), "setRequestHeader" in I && k.forEach(R.toJSON(), function(Ae, le) {
      I.setRequestHeader(le, Ae);
    }), k.isUndefined(b.withCredentials) || (I.withCredentials = !!b.withCredentials), w && w !== "json" && (I.responseType = b.responseType), j && ([ie, ee] = tv(j, !0), I.addEventListener("progress", ie)), U && I.upload && ([$, me] = tv(U), I.upload.addEventListener("progress", $), I.upload.addEventListener("loadend", me)), (b.cancelToken || b.signal) && (_ = (re) => {
      I && (y(!re || re.type ? new jh(null, s, I) : re), I.abort(), I = null);
    }, b.cancelToken && b.cancelToken.subscribe(_), b.signal && (b.signal.aborted ? _() : b.signal.addEventListener("abort", _)));
    const be = l3(b.url);
    if (be && pn.protocols.indexOf(be) === -1) {
      y(new Xe("Unsupported protocol " + be + ":", Xe.ERR_BAD_REQUEST, s));
      return;
    }
    I.send(E || null);
  });
}, s3 = (s, h) => {
  const { length: p } = s = s ? s.filter(Boolean) : [];
  if (h || p) {
    let y = new AbortController(), b;
    const E = function(j) {
      if (!b) {
        b = !0, w();
        const _ = j instanceof Error ? j : this.reason;
        y.abort(_ instanceof Xe ? _ : new jh(_ instanceof Error ? _.message : _));
      }
    };
    let R = h && setTimeout(() => {
      R = null, E(new Xe(`timeout ${h} of ms exceeded`, Xe.ETIMEDOUT));
    }, h);
    const w = () => {
      s && (R && clearTimeout(R), R = null, s.forEach((j) => {
        j.unsubscribe ? j.unsubscribe(E) : j.removeEventListener("abort", E);
      }), s = null);
    };
    s.forEach((j) => j.addEventListener("abort", E));
    const { signal: U } = y;
    return U.unsubscribe = () => k.asap(w), U;
  }
}, d3 = function* (s, h) {
  let p = s.byteLength;
  if (p < h) {
    yield s;
    return;
  }
  let y = 0, b;
  for (; y < p; )
    b = y + h, yield s.slice(y, b), y = b;
}, h3 = async function* (s, h) {
  for await (const p of m3(s))
    yield* d3(p, h);
}, m3 = async function* (s) {
  if (s[Symbol.asyncIterator]) {
    yield* s;
    return;
  }
  const h = s.getReader();
  try {
    for (; ; ) {
      const { done: p, value: y } = await h.read();
      if (p)
        break;
      yield y;
    }
  } finally {
    await h.cancel();
  }
}, LT = (s, h, p, y) => {
  const b = h3(s, h);
  let E = 0, R, w = (U) => {
    R || (R = !0, y && y(U));
  };
  return new ReadableStream({
    async pull(U) {
      try {
        const { done: j, value: _ } = await b.next();
        if (j) {
          w(), U.close();
          return;
        }
        let $ = _.byteLength;
        if (p) {
          let ie = E += $;
          p(ie);
        }
        U.enqueue(new Uint8Array(_));
      } catch (j) {
        throw w(j), j;
      }
    },
    cancel(U) {
      return w(U), b.return();
    }
  }, {
    highWaterMark: 2
  });
}, sv = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", D2 = sv && typeof ReadableStream == "function", y3 = sv && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((s) => (h) => s.encode(h))(new TextEncoder()) : async (s) => new Uint8Array(await new Response(s).arrayBuffer())), x2 = (s, ...h) => {
  try {
    return !!s(...h);
  } catch {
    return !1;
  }
}, p3 = D2 && x2(() => {
  let s = !1;
  const h = new Request(pn.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return s = !0, "half";
    }
  }).headers.has("Content-Type");
  return s && !h;
}), VT = 64 * 1024, $1 = D2 && x2(() => k.isReadableStream(new Response("").body)), lv = {
  stream: $1 && ((s) => s.body)
};
sv && ((s) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((h) => {
    !lv[h] && (lv[h] = k.isFunction(s[h]) ? (p) => p[h]() : (p, y) => {
      throw new Xe(`Response type '${h}' is not supported`, Xe.ERR_NOT_SUPPORT, y);
    });
  });
})(new Response());
const g3 = async (s) => {
  if (s == null)
    return 0;
  if (k.isBlob(s))
    return s.size;
  if (k.isSpecCompliantForm(s))
    return (await new Request(pn.origin, {
      method: "POST",
      body: s
    }).arrayBuffer()).byteLength;
  if (k.isArrayBufferView(s) || k.isArrayBuffer(s))
    return s.byteLength;
  if (k.isURLSearchParams(s) && (s = s + ""), k.isString(s))
    return (await y3(s)).byteLength;
}, v3 = async (s, h) => {
  const p = k.toFiniteNumber(s.getContentLength());
  return p ?? g3(h);
}, b3 = sv && (async (s) => {
  let {
    url: h,
    method: p,
    data: y,
    signal: b,
    cancelToken: E,
    timeout: R,
    onDownloadProgress: w,
    onUploadProgress: U,
    responseType: j,
    headers: _,
    withCredentials: $ = "same-origin",
    fetchOptions: ie
  } = O2(s);
  j = j ? (j + "").toLowerCase() : "text";
  let me = s3([b, E && E.toAbortSignal()], R), ee;
  const ne = me && me.unsubscribe && (() => {
    me.unsubscribe();
  });
  let I;
  try {
    if (U && p3 && p !== "get" && p !== "head" && (I = await v3(_, y)) !== 0) {
      let le = new Request(h, {
        method: "POST",
        body: y,
        duplex: "half"
      }), Te;
      if (k.isFormData(y) && (Te = le.headers.get("content-type")) && _.setContentType(Te), le.body) {
        const [de, st] = qT(
          I,
          tv(YT(U))
        );
        y = LT(le.body, VT, de, st);
      }
    }
    k.isString($) || ($ = $ ? "include" : "omit");
    const ce = "credentials" in Request.prototype;
    ee = new Request(h, {
      ...ie,
      signal: me,
      method: p.toUpperCase(),
      headers: _.normalize().toJSON(),
      body: y,
      duplex: "half",
      credentials: ce ? $ : void 0
    });
    let be = await fetch(ee, ie);
    const re = $1 && (j === "stream" || j === "response");
    if ($1 && (w || re && ne)) {
      const le = {};
      ["status", "statusText", "headers"].forEach((Se) => {
        le[Se] = be[Se];
      });
      const Te = k.toFiniteNumber(be.headers.get("content-length")), [de, st] = w && qT(
        Te,
        tv(YT(w), !0)
      ) || [];
      be = new Response(
        LT(be.body, VT, de, () => {
          st && st(), ne && ne();
        }),
        le
      );
    }
    j = j || "text";
    let Ae = await lv[k.findKey(lv, j) || "text"](be, s);
    return !re && ne && ne(), await new Promise((le, Te) => {
      A2(le, Te, {
        data: Ae,
        headers: ta.from(be.headers),
        status: be.status,
        statusText: be.statusText,
        config: s,
        request: ee
      });
    });
  } catch (ce) {
    throw ne && ne(), ce && ce.name === "TypeError" && /Load failed|fetch/i.test(ce.message) ? Object.assign(
      new Xe("Network Error", Xe.ERR_NETWORK, s, ee),
      {
        cause: ce.cause || ce
      }
    ) : Xe.from(ce, ce && ce.code, s, ee);
  }
}), W1 = {
  http: _R,
  xhr: r3,
  fetch: b3
};
k.forEach(W1, (s, h) => {
  if (s) {
    try {
      Object.defineProperty(s, "name", { value: h });
    } catch {
    }
    Object.defineProperty(s, "adapterName", { value: h });
  }
});
const GT = (s) => `- ${s}`, S3 = (s) => k.isFunction(s) || s === null || s === !1, z2 = {
  getAdapter: (s) => {
    s = k.isArray(s) ? s : [s];
    const { length: h } = s;
    let p, y;
    const b = {};
    for (let E = 0; E < h; E++) {
      p = s[E];
      let R;
      if (y = p, !S3(p) && (y = W1[(R = String(p)).toLowerCase()], y === void 0))
        throw new Xe(`Unknown adapter '${R}'`);
      if (y)
        break;
      b[R || "#" + E] = y;
    }
    if (!y) {
      const E = Object.entries(b).map(
        ([w, U]) => `adapter ${w} ` + (U === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let R = h ? E.length > 1 ? `since :
` + E.map(GT).join(`
`) : " " + GT(E[0]) : "as no adapter specified";
      throw new Xe(
        "There is no suitable adapter to dispatch the request " + R,
        "ERR_NOT_SUPPORT"
      );
    }
    return y;
  },
  adapters: W1
};
function L1(s) {
  if (s.cancelToken && s.cancelToken.throwIfRequested(), s.signal && s.signal.aborted)
    throw new jh(null, s);
}
function XT(s) {
  return L1(s), s.headers = ta.from(s.headers), s.data = j1.call(
    s,
    s.transformRequest
  ), ["post", "put", "patch"].indexOf(s.method) !== -1 && s.headers.setContentType("application/x-www-form-urlencoded", !1), z2.getAdapter(s.adapter || kp.adapter)(s).then(function(y) {
    return L1(s), y.data = j1.call(
      s,
      s.transformResponse,
      y
    ), y.headers = ta.from(y.headers), y;
  }, function(y) {
    return E2(y) || (L1(s), y && y.response && (y.response.data = j1.call(
      s,
      s.transformResponse,
      y.response
    ), y.response.headers = ta.from(y.response.headers))), Promise.reject(y);
  });
}
const M2 = "1.11.0", dv = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((s, h) => {
  dv[s] = function(y) {
    return typeof y === s || "a" + (h < 1 ? "n " : " ") + s;
  };
});
const QT = {};
dv.transitional = function(h, p, y) {
  function b(E, R) {
    return "[Axios v" + M2 + "] Transitional option '" + E + "'" + R + (y ? ". " + y : "");
  }
  return (E, R, w) => {
    if (h === !1)
      throw new Xe(
        b(R, " has been removed" + (p ? " in " + p : "")),
        Xe.ERR_DEPRECATED
      );
    return p && !QT[R] && (QT[R] = !0, console.warn(
      b(
        R,
        " has been deprecated since v" + p + " and will be removed in the near future"
      )
    )), h ? h(E, R, w) : !0;
  };
};
dv.spelling = function(h) {
  return (p, y) => (console.warn(`${y} is likely a misspelling of ${h}`), !0);
};
function T3(s, h, p) {
  if (typeof s != "object")
    throw new Xe("options must be an object", Xe.ERR_BAD_OPTION_VALUE);
  const y = Object.keys(s);
  let b = y.length;
  for (; b-- > 0; ) {
    const E = y[b], R = h[E];
    if (R) {
      const w = s[E], U = w === void 0 || R(w, E, s);
      if (U !== !0)
        throw new Xe("option " + E + " must be " + U, Xe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (p !== !0)
      throw new Xe("Unknown option " + E, Xe.ERR_BAD_OPTION);
  }
}
const Pg = {
  assertOptions: T3,
  validators: dv
}, Qi = Pg.validators;
let rs = class {
  constructor(h) {
    this.defaults = h || {}, this.interceptors = {
      request: new NT(),
      response: new NT()
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
  async request(h, p) {
    try {
      return await this._request(h, p);
    } catch (y) {
      if (y instanceof Error) {
        let b = {};
        Error.captureStackTrace ? Error.captureStackTrace(b) : b = new Error();
        const E = b.stack ? b.stack.replace(/^.+\n/, "") : "";
        try {
          y.stack ? E && !String(y.stack).endsWith(E.replace(/^.+\n.+\n/, "")) && (y.stack += `
` + E) : y.stack = E;
        } catch {
        }
      }
      throw y;
    }
  }
  _request(h, p) {
    typeof h == "string" ? (p = p || {}, p.url = h) : p = h || {}, p = ss(this.defaults, p);
    const { transitional: y, paramsSerializer: b, headers: E } = p;
    y !== void 0 && Pg.assertOptions(y, {
      silentJSONParsing: Qi.transitional(Qi.boolean),
      forcedJSONParsing: Qi.transitional(Qi.boolean),
      clarifyTimeoutError: Qi.transitional(Qi.boolean)
    }, !1), b != null && (k.isFunction(b) ? p.paramsSerializer = {
      serialize: b
    } : Pg.assertOptions(b, {
      encode: Qi.function,
      serialize: Qi.function
    }, !0)), p.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? p.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : p.allowAbsoluteUrls = !0), Pg.assertOptions(p, {
      baseUrl: Qi.spelling("baseURL"),
      withXsrfToken: Qi.spelling("withXSRFToken")
    }, !0), p.method = (p.method || this.defaults.method || "get").toLowerCase();
    let R = E && k.merge(
      E.common,
      E[p.method]
    );
    E && k.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (ee) => {
        delete E[ee];
      }
    ), p.headers = ta.concat(R, E);
    const w = [];
    let U = !0;
    this.interceptors.request.forEach(function(ne) {
      typeof ne.runWhen == "function" && ne.runWhen(p) === !1 || (U = U && ne.synchronous, w.unshift(ne.fulfilled, ne.rejected));
    });
    const j = [];
    this.interceptors.response.forEach(function(ne) {
      j.push(ne.fulfilled, ne.rejected);
    });
    let _, $ = 0, ie;
    if (!U) {
      const ee = [XT.bind(this), void 0];
      for (ee.unshift(...w), ee.push(...j), ie = ee.length, _ = Promise.resolve(p); $ < ie; )
        _ = _.then(ee[$++], ee[$++]);
      return _;
    }
    ie = w.length;
    let me = p;
    for ($ = 0; $ < ie; ) {
      const ee = w[$++], ne = w[$++];
      try {
        me = ee(me);
      } catch (I) {
        ne.call(this, I);
        break;
      }
    }
    try {
      _ = XT.call(this, me);
    } catch (ee) {
      return Promise.reject(ee);
    }
    for ($ = 0, ie = j.length; $ < ie; )
      _ = _.then(j[$++], j[$++]);
    return _;
  }
  getUri(h) {
    h = ss(this.defaults, h);
    const p = R2(h.baseURL, h.url, h.allowAbsoluteUrls);
    return b2(p, h.params, h.paramsSerializer);
  }
};
k.forEach(["delete", "get", "head", "options"], function(h) {
  rs.prototype[h] = function(p, y) {
    return this.request(ss(y || {}, {
      method: h,
      url: p,
      data: (y || {}).data
    }));
  };
});
k.forEach(["post", "put", "patch"], function(h) {
  function p(y) {
    return function(E, R, w) {
      return this.request(ss(w || {}, {
        method: h,
        headers: y ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: E,
        data: R
      }));
    };
  }
  rs.prototype[h] = p(), rs.prototype[h + "Form"] = p(!0);
});
let E3 = class U2 {
  constructor(h) {
    if (typeof h != "function")
      throw new TypeError("executor must be a function.");
    let p;
    this.promise = new Promise(function(E) {
      p = E;
    });
    const y = this;
    this.promise.then((b) => {
      if (!y._listeners) return;
      let E = y._listeners.length;
      for (; E-- > 0; )
        y._listeners[E](b);
      y._listeners = null;
    }), this.promise.then = (b) => {
      let E;
      const R = new Promise((w) => {
        y.subscribe(w), E = w;
      }).then(b);
      return R.cancel = function() {
        y.unsubscribe(E);
      }, R;
    }, h(function(E, R, w) {
      y.reason || (y.reason = new jh(E, R, w), p(y.reason));
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
  subscribe(h) {
    if (this.reason) {
      h(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(h) : this._listeners = [h];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(h) {
    if (!this._listeners)
      return;
    const p = this._listeners.indexOf(h);
    p !== -1 && this._listeners.splice(p, 1);
  }
  toAbortSignal() {
    const h = new AbortController(), p = (y) => {
      h.abort(y);
    };
    return this.subscribe(p), h.signal.unsubscribe = () => this.unsubscribe(p), h.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let h;
    return {
      token: new U2(function(b) {
        h = b;
      }),
      cancel: h
    };
  }
};
function A3(s) {
  return function(p) {
    return s.apply(null, p);
  };
}
function R3(s) {
  return k.isObject(s) && s.isAxiosError === !0;
}
const F1 = {
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
Object.entries(F1).forEach(([s, h]) => {
  F1[h] = s;
});
function C2(s) {
  const h = new rs(s), p = c2(rs.prototype.request, h);
  return k.extend(p, rs.prototype, h, { allOwnKeys: !0 }), k.extend(p, h, null, { allOwnKeys: !0 }), p.create = function(b) {
    return C2(ss(s, b));
  }, p;
}
const ul = C2(kp);
ul.Axios = rs;
ul.CanceledError = jh;
ul.CancelToken = E3;
ul.isCancel = E2;
ul.VERSION = M2;
ul.toFormData = rv;
ul.AxiosError = Xe;
ul.Cancel = ul.CanceledError;
ul.all = function(h) {
  return Promise.all(h);
};
ul.spread = A3;
ul.isAxiosError = R3;
ul.mergeConfig = ss;
ul.AxiosHeaders = ta;
ul.formToJSON = (s) => T2(k.isHTMLForm(s) ? new FormData(s) : s);
ul.getAdapter = z2.getAdapter;
ul.HttpStatusCode = F1;
ul.default = ul;
const {
  Axios: N3,
  AxiosError: B3,
  CanceledError: q3,
  isCancel: Y3,
  CancelToken: j3,
  VERSION: L3,
  all: V3,
  Cancel: G3,
  isAxiosError: X3,
  spread: Q3,
  toFormData: Z3,
  AxiosHeaders: k3,
  HttpStatusCode: J3,
  formToJSON: K3,
  getAdapter: $3,
  mergeConfig: W3
} = ul, O3 = void 0, D3 = "https://newsapi.org/v2/", x3 = ul.create({
  baseURL: D3
}), z3 = async ({ search: s }) => {
  const { data: h } = await x3.get("everything", {
    params: {
      q: s,
      sortBy: "popularity",
      language: "es",
      pageSize: 10,
      apiKey: O3
    }
  });
  return h;
}, M3 = () => {
  const [s, h] = w1(""), [p, y] = w1(!1), [b, E] = w1([]), R = (U) => {
    h(U.target.value);
  }, w = async (U) => {
    if (U.preventDefault(), s.length !== 0) {
      E((j) => [
        ...j,
        { type: "user", value: s }
      ]), h(""), y(!1);
      try {
        const { articles: j } = await z3({ search: s });
        E((_) => [
          ..._,
          { type: "bot", value: j }
        ]);
      } catch (j) {
        console.log(j);
      }
    }
  };
  return jE(() => {
    s.length > 0 ? y(!0) : y(!1);
  }, [s]), /* @__PURE__ */ Tf(
    "div",
    {
      id: "chat-widget",
      css: _n`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: var(--component-width, 100%);
        height: var(--component-height, 100%);
        max-height: var(--component-height, 100%);
        max-width: var(--component-width, 100%);
      `,
      children: [
        /* @__PURE__ */ Ml(
          "div",
          {
            className: "screen",
            css: _n`
          height: 100%;
          padding: 10px;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          align-items: flex-end;
          background-color: var(--gris-100);
        `,
            children: b.map((U, j) => /* @__PURE__ */ Tf(
              "div",
              {
                css: _n`
              display: flex;
              flex-direction: column;
              width: 100%;
              align-items: ${U.type === "user" ? "flex-end" : "flex-start"};
              margin-bottom: 10px;
            `,
                children: [
                  /* @__PURE__ */ Ml(
                    "div",
                    {
                      css: _n`
                display: flex;
                align-items: center;
                margin-bottom: 5px;
              `,
                      children: /* @__PURE__ */ Ml(
                        "span",
                        {
                          css: _n`
                  font-weight: bold;
                  margin-right: 5px;
                `,
                          children: U.type === "user" ? "Tu" : "Bot"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ Tf(
                    "div",
                    {
                      css: _n`
                background-color: ${U.type === "user" ? "var(--primary-color)" : "var(--gris-95)"};
                color: ${U.type === "user" ? "var(--gris-100)" : "var(--gris-0)"};
                padding: 16px;
                border-radius: ${U.type === "user" ? "16px 0px 16px 16px" : "0px 16px 16px 16px"};
                max-width: 80%;
                word-wrap: break-word;
              `,
                      children: [
                        U.type === "user" && U.value,
                        U.type === "bot" && U.value?.map((_, $) => /* @__PURE__ */ Ml(
                          "div",
                          {
                            css: _n`
                      background-color: var(--gris-100);
                      padding: 16px;
                      border-radius: 16px;
                      max-width: 100%;
                      word-wrap: break-word;
                      margin-bottom: 10px;
                      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
                    `,
                            children: /* @__PURE__ */ Tf(
                              "div",
                              {
                                css: _n`
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                      `,
                                children: [
                                  /* @__PURE__ */ Ml(
                                    "img",
                                    {
                                      css: _n`
                          border-radius: 8px;
                          height: auto;
                          max-width: 200px;
                          object-fit: cover;
                        `,
                                      src: _.urlToImage,
                                      alt: _.title
                                    }
                                  ),
                                  /* @__PURE__ */ Tf(
                                    "div",
                                    {
                                      css: _n`
                          margin-left: 10px;
                          display: flex;
                          flex-direction: column;
                        `,
                                      children: [
                                        /* @__PURE__ */ Ml(
                                          "small",
                                          {
                                            css: _n`
                            align-self: flex-end;
                            margin-bottom: 10px;
                          `,
                                            children: new Date(_.publishedAt).toLocaleString()
                                          }
                                        ),
                                        /* @__PURE__ */ Ml("h3", { children: _.title }),
                                        /* @__PURE__ */ Ml("p", { children: _.description }),
                                        /* @__PURE__ */ Ml(
                                          "div",
                                          {
                                            css: _n`
                            display: flex;
                            flex-direction: row;
                            justify-content: flex-end;
                          `,
                                            children: /* @__PURE__ */ Ml("small", { children: _.source.name })
                                          }
                                        )
                                      ]
                                    }
                                  )
                                ]
                              }
                            )
                          },
                          $
                        ))
                      ]
                    }
                  )
                ]
              },
              j
            ))
          }
        ),
        /* @__PURE__ */ Tf(
          "form",
          {
            css: _n`
          height: 100px;
          width: 100%;
          padding: 10px;
          background-color: #fff;
          display: flex;
          place-items: center;
          justify-content: space-around;
          border-top: 1px solid var(--border-color);
        `,
            onSubmit: w,
            children: [
              /* @__PURE__ */ Ml(
                "textarea",
                {
                  css: _n`
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
                  value: s,
                  onChange: R,
                  onFocus: () => y(!0),
                  onBlur: () => y(!1),
                  required: !0,
                  onKeyDown: (U) => U.key === "Enter" && w(U),
                  type: "text",
                  rows: 1,
                  placeholder: "Escribe tu mensaje..."
                }
              ),
              /* @__PURE__ */ Ml(KA, { className: `${p ? "typing" : ""}`, type: "submit", children: /* @__PURE__ */ Tf(
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
                    /* @__PURE__ */ Ml("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
                    /* @__PURE__ */ Ml("path", { d: "M10 14l11 -11" }),
                    /* @__PURE__ */ Ml("path", { d: "M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" })
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
class U3 extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const h = document.createElement("div");
    h.id = "root", this.shadowRoot.appendChild(h);
    const p = e2({
      key: "css",
      container: this.shadowRoot,
      prepend: !0
    });
    qA.createRoot(h).render(
      /* @__PURE__ */ Ml(LE, { children: /* @__PURE__ */ Tf(MA, { value: p, children: [
        /* @__PURE__ */ Ml(LA, {}),
        /* @__PURE__ */ Ml(M3, {})
      ] }) })
    );
  }
}
customElements.define("chat-widget", U3);
