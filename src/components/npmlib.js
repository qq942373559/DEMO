import * as u from "react";
import B, { useState as jt, version as Rg, isValidElement as Ig, useContext as Dt, createContext as Vo, useRef as ze, useLayoutEffect as Pg, useEffect as Mt, forwardRef as tr, useMemo as an, Children as Ng, createRef as Mg, useCallback as ks, useImperativeHandle as Xl, cloneElement as _g } from "react";
import * as Tg from "react-dom";
import Us, { createPortal as Dg, unstable_batchedUpdates as Ag, flushSync as Bi } from "react-dom";
function Fg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Wi = { exports: {} }, fo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gs;
function jg() {
  if (Gs) return fo;
  Gs = 1;
  var e = B, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(l, s, c) {
    var d, f = {}, v = null, h = null;
    c !== void 0 && (v = "" + c), s.key !== void 0 && (v = "" + s.key), s.ref !== void 0 && (h = s.ref);
    for (d in s) r.call(s, d) && !a.hasOwnProperty(d) && (f[d] = s[d]);
    if (l && l.defaultProps) for (d in s = l.defaultProps, s) f[d] === void 0 && (f[d] = s[d]);
    return { $$typeof: t, type: l, key: v, ref: h, props: f, _owner: o.current };
  }
  return fo.Fragment = n, fo.jsx = i, fo.jsxs = i, fo;
}
var vo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qs;
function Lg() {
  return qs || (qs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = B, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), l = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), b = Symbol.iterator, m = "@@iterator";
    function g(A) {
      if (A === null || typeof A != "object")
        return null;
      var ee = b && A[b] || A[m];
      return typeof ee == "function" ? ee : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(A) {
      {
        for (var ee = arguments.length, me = new Array(ee > 1 ? ee - 1 : 0), we = 1; we < ee; we++)
          me[we - 1] = arguments[we];
        S("error", A, me);
      }
    }
    function S(A, ee, me) {
      {
        var we = y.ReactDebugCurrentFrame, Ge = we.getStackAddendum();
        Ge !== "" && (ee += "%s", me = me.concat([Ge]));
        var Ke = me.map(function(Xe) {
          return String(Xe);
        });
        Ke.unshift("Warning: " + ee), Function.prototype.apply.call(console[A], console, Ke);
      }
    }
    var E = !1, C = !1, x = !1, w = !1, $ = !1, O;
    O = Symbol.for("react.module.reference");
    function R(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === r || A === a || $ || A === o || A === c || A === d || w || A === h || E || C || x || typeof A == "object" && A !== null && (A.$$typeof === v || A.$$typeof === f || A.$$typeof === i || A.$$typeof === l || A.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === O || A.getModuleId !== void 0));
    }
    function _(A, ee, me) {
      var we = A.displayName;
      if (we)
        return we;
      var Ge = ee.displayName || ee.name || "";
      return Ge !== "" ? me + "(" + Ge + ")" : me;
    }
    function I(A) {
      return A.displayName || "Context";
    }
    function F(A) {
      if (A == null)
        return null;
      if (typeof A.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof A == "function")
        return A.displayName || A.name || null;
      if (typeof A == "string")
        return A;
      switch (A) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case c:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case l:
            var ee = A;
            return I(ee) + ".Consumer";
          case i:
            var me = A;
            return I(me._context) + ".Provider";
          case s:
            return _(A, A.render, "ForwardRef");
          case f:
            var we = A.displayName || null;
            return we !== null ? we : F(A.type) || "Memo";
          case v: {
            var Ge = A, Ke = Ge._payload, Xe = Ge._init;
            try {
              return F(Xe(Ke));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, V = 0, N, P, T, j, H, L, q;
    function k() {
    }
    k.__reactDisabledLog = !0;
    function U() {
      {
        if (V === 0) {
          N = console.log, P = console.info, T = console.warn, j = console.error, H = console.group, L = console.groupCollapsed, q = console.groupEnd;
          var A = {
            configurable: !0,
            enumerable: !0,
            value: k,
            writable: !0
          };
          Object.defineProperties(console, {
            info: A,
            log: A,
            warn: A,
            error: A,
            group: A,
            groupCollapsed: A,
            groupEnd: A
          });
        }
        V++;
      }
    }
    function G() {
      {
        if (V--, V === 0) {
          var A = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, A, {
              value: N
            }),
            info: M({}, A, {
              value: P
            }),
            warn: M({}, A, {
              value: T
            }),
            error: M({}, A, {
              value: j
            }),
            group: M({}, A, {
              value: H
            }),
            groupCollapsed: M({}, A, {
              value: L
            }),
            groupEnd: M({}, A, {
              value: q
            })
          });
        }
        V < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = y.ReactCurrentDispatcher, Y;
    function Q(A, ee, me) {
      {
        if (Y === void 0)
          try {
            throw Error();
          } catch (Ge) {
            var we = Ge.stack.trim().match(/\n( *(at )?)/);
            Y = we && we[1] || "";
          }
        return `
` + Y + A;
      }
    }
    var pe = !1, Z;
    {
      var X = typeof WeakMap == "function" ? WeakMap : Map;
      Z = new X();
    }
    function te(A, ee) {
      if (!A || pe)
        return "";
      {
        var me = Z.get(A);
        if (me !== void 0)
          return me;
      }
      var we;
      pe = !0;
      var Ge = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ke;
      Ke = le.current, le.current = null, U();
      try {
        if (ee) {
          var Xe = function() {
            throw Error();
          };
          if (Object.defineProperty(Xe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Xe, []);
            } catch (at) {
              we = at;
            }
            Reflect.construct(A, [], Xe);
          } else {
            try {
              Xe.call();
            } catch (at) {
              we = at;
            }
            A.call(Xe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (at) {
            we = at;
          }
          A();
        }
      } catch (at) {
        if (at && we && typeof at.stack == "string") {
          for (var nt = at.stack.split(`
`), xe = we.stack.split(`
`), ye = nt.length - 1, de = xe.length - 1; ye >= 1 && de >= 0 && nt[ye] !== xe[de]; )
            de--;
          for (; ye >= 1 && de >= 0; ye--, de--)
            if (nt[ye] !== xe[de]) {
              if (ye !== 1 || de !== 1)
                do
                  if (ye--, de--, de < 0 || nt[ye] !== xe[de]) {
                    var he = `
` + nt[ye].replace(" at new ", " at ");
                    return A.displayName && he.includes("<anonymous>") && (he = he.replace("<anonymous>", A.displayName)), typeof A == "function" && Z.set(A, he), he;
                  }
                while (ye >= 1 && de >= 0);
              break;
            }
        }
      } finally {
        pe = !1, le.current = Ke, G(), Error.prepareStackTrace = Ge;
      }
      var Ze = A ? A.displayName || A.name : "", st = Ze ? Q(Ze) : "";
      return typeof A == "function" && Z.set(A, st), st;
    }
    function fe(A, ee, me) {
      return te(A, !1);
    }
    function W(A) {
      var ee = A.prototype;
      return !!(ee && ee.isReactComponent);
    }
    function ae(A, ee, me) {
      if (A == null)
        return "";
      if (typeof A == "function")
        return te(A, W(A));
      if (typeof A == "string")
        return Q(A);
      switch (A) {
        case c:
          return Q("Suspense");
        case d:
          return Q("SuspenseList");
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case s:
            return fe(A.render);
          case f:
            return ae(A.type, ee, me);
          case v: {
            var we = A, Ge = we._payload, Ke = we._init;
            try {
              return ae(Ke(Ge), ee, me);
            } catch {
            }
          }
        }
      return "";
    }
    var ie = Object.prototype.hasOwnProperty, ue = {}, ve = y.ReactDebugCurrentFrame;
    function $e(A) {
      if (A) {
        var ee = A._owner, me = ae(A.type, A._source, ee ? ee.type : null);
        ve.setExtraStackFrame(me);
      } else
        ve.setExtraStackFrame(null);
    }
    function Re(A, ee, me, we, Ge) {
      {
        var Ke = Function.call.bind(ie);
        for (var Xe in A)
          if (Ke(A, Xe)) {
            var nt = void 0;
            try {
              if (typeof A[Xe] != "function") {
                var xe = Error((we || "React class") + ": " + me + " type `" + Xe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof A[Xe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw xe.name = "Invariant Violation", xe;
              }
              nt = A[Xe](ee, Xe, we, me, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ye) {
              nt = ye;
            }
            nt && !(nt instanceof Error) && ($e(Ge), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", we || "React class", me, Xe, typeof nt), $e(null)), nt instanceof Error && !(nt.message in ue) && (ue[nt.message] = !0, $e(Ge), p("Failed %s type: %s", me, nt.message), $e(null));
          }
      }
    }
    var Se = Array.isArray;
    function _e(A) {
      return Se(A);
    }
    function J(A) {
      {
        var ee = typeof Symbol == "function" && Symbol.toStringTag, me = ee && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return me;
      }
    }
    function re(A) {
      try {
        return ge(A), !1;
      } catch {
        return !0;
      }
    }
    function ge(A) {
      return "" + A;
    }
    function be(A) {
      if (re(A))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", J(A)), ge(A);
    }
    var Ie = y.ReactCurrentOwner, Me = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ue, rt, ct;
    ct = {};
    function ft(A) {
      if (ie.call(A, "ref")) {
        var ee = Object.getOwnPropertyDescriptor(A, "ref").get;
        if (ee && ee.isReactWarning)
          return !1;
      }
      return A.ref !== void 0;
    }
    function De(A) {
      if (ie.call(A, "key")) {
        var ee = Object.getOwnPropertyDescriptor(A, "key").get;
        if (ee && ee.isReactWarning)
          return !1;
      }
      return A.key !== void 0;
    }
    function Te(A, ee) {
      if (typeof A.ref == "string" && Ie.current && ee && Ie.current.stateNode !== ee) {
        var me = F(Ie.current.type);
        ct[me] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(Ie.current.type), A.ref), ct[me] = !0);
      }
    }
    function Ye(A, ee) {
      {
        var me = function() {
          Ue || (Ue = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ee));
        };
        me.isReactWarning = !0, Object.defineProperty(A, "key", {
          get: me,
          configurable: !0
        });
      }
    }
    function Je(A, ee) {
      {
        var me = function() {
          rt || (rt = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ee));
        };
        me.isReactWarning = !0, Object.defineProperty(A, "ref", {
          get: me,
          configurable: !0
        });
      }
    }
    var et = function(A, ee, me, we, Ge, Ke, Xe) {
      var nt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: A,
        key: ee,
        ref: me,
        props: Xe,
        // Record the component responsible for creating this element.
        _owner: Ke
      };
      return nt._store = {}, Object.defineProperty(nt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(nt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: we
      }), Object.defineProperty(nt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ge
      }), Object.freeze && (Object.freeze(nt.props), Object.freeze(nt)), nt;
    };
    function lt(A, ee, me, we, Ge) {
      {
        var Ke, Xe = {}, nt = null, xe = null;
        me !== void 0 && (be(me), nt = "" + me), De(ee) && (be(ee.key), nt = "" + ee.key), ft(ee) && (xe = ee.ref, Te(ee, Ge));
        for (Ke in ee)
          ie.call(ee, Ke) && !Me.hasOwnProperty(Ke) && (Xe[Ke] = ee[Ke]);
        if (A && A.defaultProps) {
          var ye = A.defaultProps;
          for (Ke in ye)
            Xe[Ke] === void 0 && (Xe[Ke] = ye[Ke]);
        }
        if (nt || xe) {
          var de = typeof A == "function" ? A.displayName || A.name || "Unknown" : A;
          nt && Ye(Xe, de), xe && Je(Xe, de);
        }
        return et(A, nt, xe, Ge, we, Ie.current, Xe);
      }
    }
    var It = y.ReactCurrentOwner, mt = y.ReactDebugCurrentFrame;
    function vt(A) {
      if (A) {
        var ee = A._owner, me = ae(A.type, A._source, ee ? ee.type : null);
        mt.setExtraStackFrame(me);
      } else
        mt.setExtraStackFrame(null);
    }
    var Fe;
    Fe = !1;
    function Ee(A) {
      return typeof A == "object" && A !== null && A.$$typeof === t;
    }
    function Ve() {
      {
        if (It.current) {
          var A = F(It.current.type);
          if (A)
            return `

Check the render method of \`` + A + "`.";
        }
        return "";
      }
    }
    function je(A) {
      return "";
    }
    var qe = {};
    function Ae(A) {
      {
        var ee = Ve();
        if (!ee) {
          var me = typeof A == "string" ? A : A.displayName || A.name;
          me && (ee = `

Check the top-level render call using <` + me + ">.");
        }
        return ee;
      }
    }
    function ce(A, ee) {
      {
        if (!A._store || A._store.validated || A.key != null)
          return;
        A._store.validated = !0;
        var me = Ae(ee);
        if (qe[me])
          return;
        qe[me] = !0;
        var we = "";
        A && A._owner && A._owner !== It.current && (we = " It was passed a child from " + F(A._owner.type) + "."), vt(A), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', me, we), vt(null);
      }
    }
    function We(A, ee) {
      {
        if (typeof A != "object")
          return;
        if (_e(A))
          for (var me = 0; me < A.length; me++) {
            var we = A[me];
            Ee(we) && ce(we, ee);
          }
        else if (Ee(A))
          A._store && (A._store.validated = !0);
        else if (A) {
          var Ge = g(A);
          if (typeof Ge == "function" && Ge !== A.entries)
            for (var Ke = Ge.call(A), Xe; !(Xe = Ke.next()).done; )
              Ee(Xe.value) && ce(Xe.value, ee);
        }
      }
    }
    function dt(A) {
      {
        var ee = A.type;
        if (ee == null || typeof ee == "string")
          return;
        var me;
        if (typeof ee == "function")
          me = ee.propTypes;
        else if (typeof ee == "object" && (ee.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ee.$$typeof === f))
          me = ee.propTypes;
        else
          return;
        if (me) {
          var we = F(ee);
          Re(me, A.props, "prop", we, A);
        } else if (ee.PropTypes !== void 0 && !Fe) {
          Fe = !0;
          var Ge = F(ee);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ge || "Unknown");
        }
        typeof ee.getDefaultProps == "function" && !ee.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Qe(A) {
      {
        for (var ee = Object.keys(A.props), me = 0; me < ee.length; me++) {
          var we = ee[me];
          if (we !== "children" && we !== "key") {
            vt(A), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", we), vt(null);
            break;
          }
        }
        A.ref !== null && (vt(A), p("Invalid attribute `ref` supplied to `React.Fragment`."), vt(null));
      }
    }
    var Pe = {};
    function Oe(A, ee, me, we, Ge, Ke) {
      {
        var Xe = R(A);
        if (!Xe) {
          var nt = "";
          (A === void 0 || typeof A == "object" && A !== null && Object.keys(A).length === 0) && (nt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var xe = je();
          xe ? nt += xe : nt += Ve();
          var ye;
          A === null ? ye = "null" : _e(A) ? ye = "array" : A !== void 0 && A.$$typeof === t ? (ye = "<" + (F(A.type) || "Unknown") + " />", nt = " Did you accidentally export a JSX literal instead of a component?") : ye = typeof A, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ye, nt);
        }
        var de = lt(A, ee, me, Ge, Ke);
        if (de == null)
          return de;
        if (Xe) {
          var he = ee.children;
          if (he !== void 0)
            if (we)
              if (_e(he)) {
                for (var Ze = 0; Ze < he.length; Ze++)
                  We(he[Ze], A);
                Object.freeze && Object.freeze(he);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(he, A);
        }
        if (ie.call(ee, "key")) {
          var st = F(A), at = Object.keys(ee).filter(function(At) {
            return At !== "key";
          }), Wt = at.length > 0 ? "{key: someKey, " + at.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pe[st + Wt]) {
            var kt = at.length > 0 ? "{" + at.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Wt, st, kt, st), Pe[st + Wt] = !0;
          }
        }
        return A === r ? Qe(de) : dt(de), de;
      }
    }
    function Ne(A, ee, me) {
      return Oe(A, ee, me, !0);
    }
    function Le(A, ee, me) {
      return Oe(A, ee, me, !1);
    }
    var tt = Le, gt = Ne;
    vo.Fragment = r, vo.jsx = tt, vo.jsxs = gt;
  }()), vo;
}
process.env.NODE_ENV === "production" ? Wi.exports = jg() : Wi.exports = Lg();
var Ju = Wi.exports;
const Ww = (e) => {
  const { msg: t } = e, [n, r] = jt(0), o = () => {
    r(n + 1), alert(t);
  };
  return /* @__PURE__ */ Ju.jsxs("button", { onClick: o, children: [
    "count is ",
    n
  ] });
};
var ed = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var a = "", i = 0; i < arguments.length; i++) {
        var l = arguments[i];
        l && (a = o(a, r(l)));
      }
      return a;
    }
    function r(a) {
      if (typeof a == "string" || typeof a == "number")
        return a;
      if (typeof a != "object")
        return "";
      if (Array.isArray(a))
        return n.apply(null, a);
      if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
        return a.toString();
      var i = "";
      for (var l in a)
        t.call(a, l) && a[l] && (i = o(i, l));
      return i;
    }
    function o(a, i) {
      return i ? a ? a + " " + i : a + i : a;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(ed);
var Hg = ed.exports;
const ne = /* @__PURE__ */ Fg(Hg);
function ke() {
  return ke = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ke.apply(null, arguments);
}
var ki = { exports: {} }, Et = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ks;
function zg() {
  if (Ks) return Et;
  Ks = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function m(g) {
    if (typeof g == "object" && g !== null) {
      var y = g.$$typeof;
      switch (y) {
        case e:
          switch (g = g.type, g) {
            case n:
            case o:
            case r:
            case c:
            case d:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case l:
                case i:
                case s:
                case v:
                case f:
                case a:
                  return g;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return Et.ContextConsumer = i, Et.ContextProvider = a, Et.Element = e, Et.ForwardRef = s, Et.Fragment = n, Et.Lazy = v, Et.Memo = f, Et.Portal = t, Et.Profiler = o, Et.StrictMode = r, Et.Suspense = c, Et.SuspenseList = d, Et.isAsyncMode = function() {
    return !1;
  }, Et.isConcurrentMode = function() {
    return !1;
  }, Et.isContextConsumer = function(g) {
    return m(g) === i;
  }, Et.isContextProvider = function(g) {
    return m(g) === a;
  }, Et.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, Et.isForwardRef = function(g) {
    return m(g) === s;
  }, Et.isFragment = function(g) {
    return m(g) === n;
  }, Et.isLazy = function(g) {
    return m(g) === v;
  }, Et.isMemo = function(g) {
    return m(g) === f;
  }, Et.isPortal = function(g) {
    return m(g) === t;
  }, Et.isProfiler = function(g) {
    return m(g) === o;
  }, Et.isStrictMode = function(g) {
    return m(g) === r;
  }, Et.isSuspense = function(g) {
    return m(g) === c;
  }, Et.isSuspenseList = function(g) {
    return m(g) === d;
  }, Et.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === o || g === r || g === c || g === d || g === h || typeof g == "object" && g !== null && (g.$$typeof === v || g.$$typeof === f || g.$$typeof === a || g.$$typeof === i || g.$$typeof === s || g.$$typeof === b || g.getModuleId !== void 0);
  }, Et.typeOf = m, Et;
}
var xt = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xs;
function Vg() {
  return Xs || (Xs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), b = !1, m = !1, g = !1, y = !1, p = !1, S;
    S = Symbol.for("react.module.reference");
    function E(W) {
      return !!(typeof W == "string" || typeof W == "function" || W === n || W === o || p || W === r || W === c || W === d || y || W === h || b || m || g || typeof W == "object" && W !== null && (W.$$typeof === v || W.$$typeof === f || W.$$typeof === a || W.$$typeof === i || W.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      W.$$typeof === S || W.getModuleId !== void 0));
    }
    function C(W) {
      if (typeof W == "object" && W !== null) {
        var ae = W.$$typeof;
        switch (ae) {
          case e:
            var ie = W.type;
            switch (ie) {
              case n:
              case o:
              case r:
              case c:
              case d:
                return ie;
              default:
                var ue = ie && ie.$$typeof;
                switch (ue) {
                  case l:
                  case i:
                  case s:
                  case v:
                  case f:
                  case a:
                    return ue;
                  default:
                    return ae;
                }
            }
          case t:
            return ae;
        }
      }
    }
    var x = i, w = a, $ = e, O = s, R = n, _ = v, I = f, F = t, M = o, V = r, N = c, P = d, T = !1, j = !1;
    function H(W) {
      return T || (T = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(W) {
      return j || (j = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(W) {
      return C(W) === i;
    }
    function k(W) {
      return C(W) === a;
    }
    function U(W) {
      return typeof W == "object" && W !== null && W.$$typeof === e;
    }
    function G(W) {
      return C(W) === s;
    }
    function le(W) {
      return C(W) === n;
    }
    function Y(W) {
      return C(W) === v;
    }
    function Q(W) {
      return C(W) === f;
    }
    function pe(W) {
      return C(W) === t;
    }
    function Z(W) {
      return C(W) === o;
    }
    function X(W) {
      return C(W) === r;
    }
    function te(W) {
      return C(W) === c;
    }
    function fe(W) {
      return C(W) === d;
    }
    xt.ContextConsumer = x, xt.ContextProvider = w, xt.Element = $, xt.ForwardRef = O, xt.Fragment = R, xt.Lazy = _, xt.Memo = I, xt.Portal = F, xt.Profiler = M, xt.StrictMode = V, xt.Suspense = N, xt.SuspenseList = P, xt.isAsyncMode = H, xt.isConcurrentMode = L, xt.isContextConsumer = q, xt.isContextProvider = k, xt.isElement = U, xt.isForwardRef = G, xt.isFragment = le, xt.isLazy = Y, xt.isMemo = Q, xt.isPortal = pe, xt.isProfiler = Z, xt.isStrictMode = X, xt.isSuspense = te, xt.isSuspenseList = fe, xt.isValidElementType = E, xt.typeOf = C;
  }()), xt;
}
process.env.NODE_ENV === "production" ? ki.exports = zg() : ki.exports = Vg();
var So = ki.exports;
function Jn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [];
  return B.Children.forEach(e, function(r) {
    r == null && !t.keepEmpty || (Array.isArray(r) ? n = n.concat(Jn(r)) : So.isFragment(r) && r.props ? n = n.concat(Jn(r.props.children, t)) : n.push(r));
  }), n;
}
var Ui = {}, Yl = [], Bg = function(t) {
  Yl.push(t);
};
function vr(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Yl.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function Wg(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Yl.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function td() {
  Ui = {};
}
function nd(e, t, n) {
  !t && !Ui[n] && (e(!1, n), Ui[n] = !0);
}
function ut(e, t) {
  nd(vr, e, t);
}
function Gi(e, t) {
  nd(Wg, e, t);
}
ut.preMessage = Bg;
ut.resetWarned = td;
ut.noteOnce = Gi;
function Be(e) {
  "@babel/helpers - typeof";
  return Be = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Be(e);
}
function kg(e, t) {
  if (Be(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Be(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function rd(e) {
  var t = kg(e, "string");
  return Be(t) == "symbol" ? t : t + "";
}
function D(e, t, n) {
  return (t = rd(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ys(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ys(Object(n), !0).forEach(function(r) {
      D(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ys(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ro(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Ug(e) {
  return e && Be(e) === "object" && Ro(e.nativeElement) ? e.nativeElement : Ro(e) ? e : null;
}
function Co(e) {
  var t = Ug(e);
  if (t)
    return t;
  if (e instanceof B.Component) {
    var n;
    return (n = Us.findDOMNode) === null || n === void 0 ? void 0 : n.call(Us, e);
  }
  return null;
}
function za(e, t, n) {
  var r = u.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
var Ql = function(t, n) {
  typeof t == "function" ? t(n) : Be(t) === "object" && t && "current" in t && (t.current = n);
}, bn = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var o = n.filter(Boolean);
  return o.length <= 1 ? o[0] : function(a) {
    n.forEach(function(i) {
      Ql(i, a);
    });
  };
}, Va = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return za(function() {
    return bn.apply(void 0, n);
  }, n, function(o, a) {
    return o.length !== a.length || o.every(function(i, l) {
      return i !== a[l];
    });
  });
}, Bo = function(t) {
  var n, r, o = So.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((n = o.prototype) !== null && n !== void 0 && n.render) && o.$$typeof !== So.ForwardRef || typeof t == "function" && !((r = t.prototype) !== null && r !== void 0 && r.render) && t.$$typeof !== So.ForwardRef);
};
function Qs(e) {
  return /* @__PURE__ */ Ig(e) && !So.isFragment(e);
}
Number(Rg.split(".")[0]) >= 19;
var qi = /* @__PURE__ */ u.createContext(null);
function Gg(e) {
  var t = e.children, n = e.onBatchResize, r = u.useRef(0), o = u.useRef([]), a = u.useContext(qi), i = u.useCallback(function(l, s, c) {
    r.current += 1;
    var d = r.current;
    o.current.push({
      size: l,
      element: s,
      data: c
    }), Promise.resolve().then(function() {
      d === r.current && (n == null || n(o.current), o.current = []);
    }), a == null || a(l, s, c);
  }, [n, a]);
  return /* @__PURE__ */ u.createElement(qi.Provider, {
    value: i
  }, t);
}
var od = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var r = -1;
    return t.some(function(o, a) {
      return o[0] === n ? (r = a, !0) : !1;
    }), r;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(n) {
        var r = e(this.__entries__, n), o = this.__entries__[r];
        return o && o[1];
      }, t.prototype.set = function(n, r) {
        var o = e(this.__entries__, n);
        ~o ? this.__entries__[o][1] = r : this.__entries__.push([n, r]);
      }, t.prototype.delete = function(n) {
        var r = this.__entries__, o = e(r, n);
        ~o && r.splice(o, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, r) {
        r === void 0 && (r = null);
        for (var o = 0, a = this.__entries__; o < a.length; o++) {
          var i = a[o];
          n.call(r, i[1], i[0]);
        }
      }, t;
    }()
  );
}(), Ki = typeof window < "u" && typeof document < "u" && window.document === document, Oa = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), qg = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Oa) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Kg = 2;
function Xg(e, t) {
  var n = !1, r = !1, o = 0;
  function a() {
    n && (n = !1, e()), r && l();
  }
  function i() {
    qg(a);
  }
  function l() {
    var s = Date.now();
    if (n) {
      if (s - o < Kg)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(i, t);
    o = s;
  }
  return l;
}
var Yg = 20, Qg = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Zg = typeof MutationObserver < "u", Jg = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Xg(this.refresh.bind(this), Yg);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, r = n.indexOf(t);
      ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return t.forEach(function(n) {
        return n.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !Ki || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Zg ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Ki || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, r = n === void 0 ? "" : n, o = Qg.some(function(a) {
        return !!~r.indexOf(a);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), ad = function(e, t) {
  for (var n = 0, r = Object.keys(t); n < r.length; n++) {
    var o = r[n];
    Object.defineProperty(e, o, {
      value: t[o],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, Yr = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Oa;
}, id = Ba(0, 0, 0, 0);
function Ra(e) {
  return parseFloat(e) || 0;
}
function Zs(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(r, o) {
    var a = e["border-" + o + "-width"];
    return r + Ra(a);
  }, 0);
}
function em(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, o = t; r < o.length; r++) {
    var a = o[r], i = e["padding-" + a];
    n[a] = Ra(i);
  }
  return n;
}
function tm(e) {
  var t = e.getBBox();
  return Ba(0, 0, t.width, t.height);
}
function nm(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return id;
  var r = Yr(e).getComputedStyle(e), o = em(r), a = o.left + o.right, i = o.top + o.bottom, l = Ra(r.width), s = Ra(r.height);
  if (r.boxSizing === "border-box" && (Math.round(l + a) !== t && (l -= Zs(r, "left", "right") + a), Math.round(s + i) !== n && (s -= Zs(r, "top", "bottom") + i)), !om(e)) {
    var c = Math.round(l + a) - t, d = Math.round(s + i) - n;
    Math.abs(c) !== 1 && (l -= c), Math.abs(d) !== 1 && (s -= d);
  }
  return Ba(o.left, o.top, l, s);
}
var rm = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Yr(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Yr(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function om(e) {
  return e === Yr(e).document.documentElement;
}
function am(e) {
  return Ki ? rm(e) ? tm(e) : nm(e) : id;
}
function im(e) {
  var t = e.x, n = e.y, r = e.width, o = e.height, a = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, i = Object.create(a.prototype);
  return ad(i, {
    x: t,
    y: n,
    width: r,
    height: o,
    top: n,
    right: t + r,
    bottom: o + n,
    left: t
  }), i;
}
function Ba(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var lm = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ba(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = am(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), sm = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n) {
      var r = im(n);
      ad(this, { target: t, contentRect: r });
    }
    return e;
  }()
), cm = (
  /** @class */
  function() {
    function e(t, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new od(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Yr(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new lm(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Yr(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
          return new sm(r.target, r.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), ld = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new od(), sd = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = Jg.getInstance(), r = new cm(t, n, this);
      ld.set(this, r);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  sd.prototype[e] = function() {
    var t;
    return (t = ld.get(this))[e].apply(t, arguments);
  };
});
var um = function() {
  return typeof Oa.ResizeObserver < "u" ? Oa.ResizeObserver : sd;
}(), Qn = /* @__PURE__ */ new Map();
function cd(e) {
  e.forEach(function(t) {
    var n, r = t.target;
    (n = Qn.get(r)) === null || n === void 0 || n.forEach(function(o) {
      return o(r);
    });
  });
}
var ud = new um(cd);
process.env.NODE_ENV;
process.env.NODE_ENV;
function dm(e, t) {
  Qn.has(e) || (Qn.set(e, /* @__PURE__ */ new Set()), ud.observe(e)), Qn.get(e).add(t);
}
function fm(e, t) {
  Qn.has(e) && (Qn.get(e).delete(t), Qn.get(e).size || (ud.unobserve(e), Qn.delete(e)));
}
function Vt(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Js(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, rd(r.key), r);
  }
}
function Bt(e, t, n) {
  return t && Js(e.prototype, t), n && Js(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Io(e, t) {
  return Io = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Io(e, t);
}
function hr(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Io(e, t);
}
function Po(e) {
  return Po = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Po(e);
}
function Zl() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Zl = function() {
    return !!e;
  })();
}
function ht(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vm(e, t) {
  if (t && (Be(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return ht(e);
}
function pr(e) {
  var t = Zl();
  return function() {
    var n, r = Po(e);
    if (t) {
      var o = Po(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return vm(this, n);
  };
}
var gm = /* @__PURE__ */ function(e) {
  hr(n, e);
  var t = pr(n);
  function n() {
    return Vt(this, n), t.apply(this, arguments);
  }
  return Bt(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(u.Component);
function mm(e, t) {
  var n = e.children, r = e.disabled, o = u.useRef(null), a = u.useRef(null), i = u.useContext(qi), l = typeof n == "function", s = l ? n(o) : n, c = u.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), d = !l && /* @__PURE__ */ u.isValidElement(s) && Bo(s), f = d ? s.ref : null, v = Va(f, o), h = function() {
    var y;
    return Co(o.current) || // Support `nativeElement` format
    (o.current && Be(o.current) === "object" ? Co((y = o.current) === null || y === void 0 ? void 0 : y.nativeElement) : null) || Co(a.current);
  };
  u.useImperativeHandle(t, function() {
    return h();
  });
  var b = u.useRef(e);
  b.current = e;
  var m = u.useCallback(function(g) {
    var y = b.current, p = y.onResize, S = y.data, E = g.getBoundingClientRect(), C = E.width, x = E.height, w = g.offsetWidth, $ = g.offsetHeight, O = Math.floor(C), R = Math.floor(x);
    if (c.current.width !== O || c.current.height !== R || c.current.offsetWidth !== w || c.current.offsetHeight !== $) {
      var _ = {
        width: O,
        height: R,
        offsetWidth: w,
        offsetHeight: $
      };
      c.current = _;
      var I = w === Math.round(C) ? C : w, F = $ === Math.round(x) ? x : $, M = z(z({}, _), {}, {
        offsetWidth: I,
        offsetHeight: F
      });
      i == null || i(M, g, S), p && Promise.resolve().then(function() {
        p(M, g);
      });
    }
  }, []);
  return u.useEffect(function() {
    var g = h();
    return g && !r && dm(g, m), function() {
      return fm(g, m);
    };
  }, [o.current, r]), /* @__PURE__ */ u.createElement(gm, {
    ref: a
  }, d ? /* @__PURE__ */ u.cloneElement(s, {
    ref: v
  }) : s);
}
var dd = /* @__PURE__ */ u.forwardRef(mm);
process.env.NODE_ENV !== "production" && (dd.displayName = "SingleObserver");
var hm = "rc-observer-key";
function pm(e, t) {
  var n = e.children, r = typeof n == "function" ? [n] : Jn(n);
  return process.env.NODE_ENV !== "production" && (r.length > 1 ? vr(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : r.length === 0 && vr(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), r.map(function(o, a) {
    var i = (o == null ? void 0 : o.key) || "".concat(hm, "-").concat(a);
    return /* @__PURE__ */ u.createElement(dd, ke({}, e, {
      key: i,
      ref: a === 0 ? t : void 0
    }), o);
  });
}
var nr = /* @__PURE__ */ u.forwardRef(pm);
process.env.NODE_ENV !== "production" && (nr.displayName = "ResizeObserver");
nr.Collection = Gg;
function gr(e, t) {
  var n = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(r) {
    delete n[r];
  }), n;
}
function Xi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function bm(e) {
  if (Array.isArray(e)) return Xi(e);
}
function fd(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Jl(e, t) {
  if (e) {
    if (typeof e == "string") return Xi(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Xi(e, t) : void 0;
  }
}
function ym() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ce(e) {
  return bm(e) || fd(e) || Jl(e) || ym();
}
var vd = function(t) {
  return +setTimeout(t, 16);
}, gd = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (vd = function(t) {
  return window.requestAnimationFrame(t);
}, gd = function(t) {
  return window.cancelAnimationFrame(t);
});
var ec = 0, Wa = /* @__PURE__ */ new Map();
function md(e) {
  Wa.delete(e);
}
var St = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  ec += 1;
  var r = ec;
  function o(a) {
    if (a === 0)
      md(r), t();
    else {
      var i = vd(function() {
        o(a - 1);
      });
      Wa.set(r, i);
    }
  }
  return o(n), r;
};
St.cancel = function(e) {
  var t = Wa.get(e);
  return md(e), gd(t);
};
process.env.NODE_ENV !== "production" && (St.ids = function() {
  return Wa;
});
function hd(e) {
  if (Array.isArray(e)) return e;
}
function Sm(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        s = !1;
      } else for (; !(s = (r = a.call(n)).done) && (l.push(r.value), l.length !== t); s = !0) ;
    } catch (d) {
      c = !0, o = d;
    } finally {
      try {
        if (!s && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw o;
      }
    }
    return l;
  }
}
function pd() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K(e, t) {
  return hd(e) || Sm(e, t) || Jl(e, t) || pd();
}
function No(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function on() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Cm(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var n = t; n; ) {
    if (n === e)
      return !0;
    n = n.parentNode;
  }
  return !1;
}
var tc = "data-rc-order", nc = "data-rc-priority", Em = "rc-util-key", Yi = /* @__PURE__ */ new Map();
function bd() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Em;
}
function ka(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function xm(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function es(e) {
  return Array.from((Yi.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function yd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!on())
    return null;
  var n = t.csp, r = t.prepend, o = t.priority, a = o === void 0 ? 0 : o, i = xm(r), l = i === "prependQueue", s = document.createElement("style");
  s.setAttribute(tc, i), l && a && s.setAttribute(nc, "".concat(a)), n != null && n.nonce && (s.nonce = n == null ? void 0 : n.nonce), s.innerHTML = e;
  var c = ka(t), d = c.firstChild;
  if (r) {
    if (l) {
      var f = (t.styles || es(c)).filter(function(v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute(tc)))
          return !1;
        var h = Number(v.getAttribute(nc) || 0);
        return a >= h;
      });
      if (f.length)
        return c.insertBefore(s, f[f.length - 1].nextSibling), s;
    }
    c.insertBefore(s, d);
  } else
    c.appendChild(s);
  return s;
}
function Sd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = ka(t);
  return (t.styles || es(n)).find(function(r) {
    return r.getAttribute(bd(t)) === e;
  });
}
function Mo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Sd(e, t);
  if (n) {
    var r = ka(t);
    r.removeChild(n);
  }
}
function wm(e, t) {
  var n = Yi.get(e);
  if (!n || !Cm(document, n)) {
    var r = yd("", t), o = r.parentNode;
    Yi.set(e, o), e.removeChild(r);
  }
}
function Zn(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = ka(n), o = es(r), a = z(z({}, n), {}, {
    styles: o
  });
  wm(r, a);
  var i = Sd(t, a);
  if (i) {
    var l, s;
    if ((l = a.csp) !== null && l !== void 0 && l.nonce && i.nonce !== ((s = a.csp) === null || s === void 0 ? void 0 : s.nonce)) {
      var c;
      i.nonce = (c = a.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var d = yd(e, a);
  return d.setAttribute(bd(a), t), d;
}
function $m(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.includes(r)) continue;
    n[r] = e[r];
  }
  return n;
}
function yt(e, t) {
  if (e == null) return {};
  var n, r, o = $m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function Ia(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(a, i) {
    var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, s = r.has(a);
    if (ut(!s, "Warning: There may be circular references"), s)
      return !1;
    if (a === i)
      return !0;
    if (n && l > 1)
      return !1;
    r.add(a);
    var c = l + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(i) || a.length !== i.length)
        return !1;
      for (var d = 0; d < a.length; d++)
        if (!o(a[d], i[d], c))
          return !1;
      return !0;
    }
    if (a && i && Be(a) === "object" && Be(i) === "object") {
      var f = Object.keys(a);
      return f.length !== Object.keys(i).length ? !1 : f.every(function(v) {
        return o(a[v], i[v], c);
      });
    }
    return !1;
  }
  return o(e, t);
}
var Om = "%";
function Qi(e) {
  return e.join(Om);
}
var Rm = /* @__PURE__ */ function() {
  function e(t) {
    Vt(this, e), D(this, "instanceId", void 0), D(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return Bt(e, [{
    key: "get",
    value: function(n) {
      return this.opGet(Qi(n));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(n) {
      return this.cache.get(n) || null;
    }
  }, {
    key: "update",
    value: function(n, r) {
      return this.opUpdate(Qi(n), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(n, r) {
      var o = this.cache.get(n), a = r(o);
      a === null ? this.cache.delete(n) : this.cache.set(n, a);
    }
  }]), e;
}(), Qr = "data-token-hash", Fn = "data-css-hash", Im = "data-cache-path", cr = "__cssinjs_instance__";
function Pm() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(Fn, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[cr] = o[cr] || e, o[cr] === e && document.head.insertBefore(o, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(Fn, "]"))).forEach(function(o) {
      var a = o.getAttribute(Fn);
      if (r[a]) {
        if (o[cr] === e) {
          var i;
          (i = o.parentNode) === null || i === void 0 || i.removeChild(o);
        }
      } else
        r[a] = !0;
    });
  }
  return new Rm(e);
}
var Ua = /* @__PURE__ */ u.createContext({
  hashPriority: "low",
  cache: Pm(),
  defaultCache: !0
});
function Nm(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var ts = /* @__PURE__ */ function() {
  function e() {
    Vt(this, e), D(this, "cache", void 0), D(this, "keys", void 0), D(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Bt(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(n) {
      var r, o, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = {
        map: this.cache
      };
      return n.forEach(function(l) {
        if (!i)
          i = void 0;
        else {
          var s;
          i = (s = i) === null || s === void 0 || (s = s.map) === null || s === void 0 ? void 0 : s.get(l);
        }
      }), (r = i) !== null && r !== void 0 && r.value && a && (i.value[1] = this.cacheCallTimes++), (o = i) === null || o === void 0 ? void 0 : o.value;
    }
  }, {
    key: "get",
    value: function(n) {
      var r;
      return (r = this.internalGet(n, !0)) === null || r === void 0 ? void 0 : r[0];
    }
  }, {
    key: "has",
    value: function(n) {
      return !!this.internalGet(n);
    }
  }, {
    key: "set",
    value: function(n, r) {
      var o = this;
      if (!this.has(n)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var a = this.keys.reduce(function(c, d) {
            var f = K(c, 2), v = f[1];
            return o.internalGet(d)[1] < v ? [d, o.internalGet(d)[1]] : c;
          }, [this.keys[0], this.cacheCallTimes]), i = K(a, 1), l = i[0];
          this.delete(l);
        }
        this.keys.push(n);
      }
      var s = this.cache;
      n.forEach(function(c, d) {
        if (d === n.length - 1)
          s.set(c, {
            value: [r, o.cacheCallTimes++]
          });
        else {
          var f = s.get(c);
          f ? f.map || (f.map = /* @__PURE__ */ new Map()) : s.set(c, {
            map: /* @__PURE__ */ new Map()
          }), s = s.get(c).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(n, r) {
      var o = n.get(r[0]);
      if (r.length === 1) {
        var a;
        return o.map ? n.set(r[0], {
          map: o.map
        }) : n.delete(r[0]), (a = o.value) === null || a === void 0 ? void 0 : a[0];
      }
      var i = this.deleteByPath(o.map, r.slice(1));
      return (!o.map || o.map.size === 0) && !o.value && n.delete(r[0]), i;
    }
  }, {
    key: "delete",
    value: function(n) {
      if (this.has(n))
        return this.keys = this.keys.filter(function(r) {
          return !Nm(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
}();
D(ts, "MAX_CACHE_SIZE", 20);
D(ts, "MAX_CACHE_OFFSET", 5);
var rc = 0, Cd = /* @__PURE__ */ function() {
  function e(t) {
    Vt(this, e), D(this, "derivatives", void 0), D(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = rc, t.length === 0 && vr(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), rc += 1;
  }
  return Bt(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, o) {
        return o(n, r);
      }, void 0);
    }
  }]), e;
}(), ci = new ts();
function Zi(e) {
  var t = Array.isArray(e) ? e : [e];
  return ci.has(t) || ci.set(t, new Cd(t)), ci.get(t);
}
var Mm = /* @__PURE__ */ new WeakMap(), ui = {};
function _m(e, t) {
  for (var n = Mm, r = 0; r < t.length; r += 1) {
    var o = t[r];
    n.has(o) || n.set(o, /* @__PURE__ */ new WeakMap()), n = n.get(o);
  }
  return n.has(ui) || n.set(ui, e()), n.get(ui);
}
var oc = /* @__PURE__ */ new WeakMap();
function Eo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = oc.get(e) || "";
  return n || (Object.keys(e).forEach(function(r) {
    var o = e[r];
    n += r, o instanceof Cd ? n += o.id : o && Be(o) === "object" ? n += Eo(o, t) : n += o;
  }), t && (n = No(n)), oc.set(e, n)), n;
}
function ac(e, t) {
  return No("".concat(t, "_").concat(Eo(e, !0)));
}
var Ji = on();
function oe(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function Pa(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (o)
    return e;
  var a = z(z({}, r), {}, D(D({}, Qr, t), Fn, n)), i = Object.keys(a).map(function(l) {
    var s = a[l];
    return s ? "".concat(l, '="').concat(s, '"') : null;
  }).filter(function(l) {
    return l;
  }).join(" ");
  return "<style ".concat(i, ">").concat(e, "</style>");
}
var ha = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(n ? "".concat(n, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, Tm = function(t, n, r) {
  return Object.keys(t).length ? ".".concat(n).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var a = K(o, 2), i = a[0], l = a[1];
    return "".concat(i, ":").concat(l, ";");
  }).join(""), "}") : "";
}, Ed = function(t, n, r) {
  var o = {}, a = {};
  return Object.entries(t).forEach(function(i) {
    var l, s, c = K(i, 2), d = c[0], f = c[1];
    if (r != null && (l = r.preserve) !== null && l !== void 0 && l[d])
      a[d] = f;
    else if ((typeof f == "string" || typeof f == "number") && !(r != null && (s = r.ignore) !== null && s !== void 0 && s[d])) {
      var v, h = ha(d, r == null ? void 0 : r.prefix);
      o[h] = typeof f == "number" && !(r != null && (v = r.unitless) !== null && v !== void 0 && v[d]) ? "".concat(f, "px") : String(f), a[d] = "var(".concat(h, ")");
    }
  }), [a, Tm(o, n, {
    scope: r == null ? void 0 : r.scope
  })];
}, ic = process.env.NODE_ENV !== "test" && on() ? u.useLayoutEffect : u.useEffect, Rt = function(t, n) {
  var r = u.useRef(!0);
  ic(function() {
    return t(r.current);
  }, n), ic(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, xo = function(t, n) {
  Rt(function(r) {
    if (!r)
      return t();
  }, n);
}, Dm = z({}, u), lc = Dm.useInsertionEffect, Am = function(t, n, r) {
  u.useMemo(t, r), Rt(function() {
    return n(!0);
  }, r);
}, Fm = lc ? function(e, t, n) {
  return lc(function() {
    return e(), t();
  }, n);
} : Am, jm = z({}, u), Lm = jm.useInsertionEffect, Hm = function(t) {
  var n = [], r = !1;
  function o(a) {
    if (r) {
      process.env.NODE_ENV !== "production" && vr(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    n.push(a);
  }
  return u.useEffect(function() {
    return r = !1, function() {
      r = !0, n.length && n.forEach(function(a) {
        return a();
      });
    };
  }, t), o;
}, zm = function() {
  return function(t) {
    t();
  };
}, Vm = typeof Lm < "u" ? Hm : zm;
function Bm() {
  return !1;
}
var el = !1;
function Wm() {
  return el;
}
const km = process.env.NODE_ENV === "production" ? Bm : Wm;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var di = window;
  if (typeof di.webpackHotUpdate == "function") {
    var Um = di.webpackHotUpdate;
    di.webpackHotUpdate = function() {
      return el = !0, setTimeout(function() {
        el = !1;
      }, 0), Um.apply(void 0, arguments);
    };
  }
}
function ns(e, t, n, r, o) {
  var a = u.useContext(Ua), i = a.cache, l = [e].concat(Ce(t)), s = Qi(l), c = Vm([s]), d = km(), f = function(m) {
    i.opUpdate(s, function(g) {
      var y = g || [void 0, void 0], p = K(y, 2), S = p[0], E = S === void 0 ? 0 : S, C = p[1], x = C;
      process.env.NODE_ENV !== "production" && C && d && (r == null || r(x, d), x = null);
      var w = x || n(), $ = [E, w];
      return m ? m($) : $;
    });
  };
  u.useMemo(
    function() {
      f();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [s]
    /* eslint-enable */
  );
  var v = i.opGet(s);
  process.env.NODE_ENV !== "production" && !v && (f(), v = i.opGet(s));
  var h = v[1];
  return Fm(function() {
    o == null || o(h);
  }, function(b) {
    return f(function(m) {
      var g = K(m, 2), y = g[0], p = g[1];
      return b && y === 0 && (o == null || o(h)), [y + 1, p];
    }), function() {
      i.opUpdate(s, function(m) {
        var g = m || [], y = K(g, 2), p = y[0], S = p === void 0 ? 0 : p, E = y[1], C = S - 1;
        return C === 0 ? (c(function() {
          (b || !i.opGet(s)) && (r == null || r(E, !1));
        }), null) : [S - 1, E];
      });
    };
  }, [s]), h;
}
var Gm = {}, qm = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Cr = /* @__PURE__ */ new Map();
function Km(e) {
  Cr.set(e, (Cr.get(e) || 0) + 1);
}
function Xm(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(Qr, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[cr] === t) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var Ym = 0;
function Qm(e, t) {
  Cr.set(e, (Cr.get(e) || 0) - 1);
  var n = Array.from(Cr.keys()), r = n.filter(function(o) {
    var a = Cr.get(o) || 0;
    return a <= 0;
  });
  n.length - r.length > Ym && r.forEach(function(o) {
    Xm(o, t), Cr.delete(o);
  });
}
var Zm = function(t, n, r, o) {
  var a = r.getDerivativeToken(t), i = z(z({}, a), n);
  return o && (i = o(i)), i;
}, xd = "token";
function Jm(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Dt(Ua), o = r.cache.instanceId, a = r.container, i = n.salt, l = i === void 0 ? "" : i, s = n.override, c = s === void 0 ? Gm : s, d = n.formatToken, f = n.getComputedToken, v = n.cssVar, h = _m(function() {
    return Object.assign.apply(Object, [{}].concat(Ce(t)));
  }, t), b = Eo(h), m = Eo(c), g = v ? Eo(v) : "", y = ns(xd, [l, e.id, b, m, g], function() {
    var p, S = f ? f(h, c, e) : Zm(h, c, e, d), E = z({}, S), C = "";
    if (v) {
      var x = Ed(S, v.key, {
        prefix: v.prefix,
        ignore: v.ignore,
        unitless: v.unitless,
        preserve: v.preserve
      }), w = K(x, 2);
      S = w[0], C = w[1];
    }
    var $ = ac(S, l);
    S._tokenKey = $, E._tokenKey = ac(E, l);
    var O = (p = v == null ? void 0 : v.key) !== null && p !== void 0 ? p : $;
    S._themeKey = O, Km(O);
    var R = "".concat(qm, "-").concat(No($));
    return S._hashId = R, [S, R, E, C, (v == null ? void 0 : v.key) || ""];
  }, function(p) {
    Qm(p[0]._themeKey, o);
  }, function(p) {
    var S = K(p, 4), E = S[0], C = S[3];
    if (v && C) {
      var x = Zn(C, No("css-variables-".concat(E._themeKey)), {
        mark: Fn,
        prepend: "queue",
        attachTo: a,
        priority: -999
      });
      x[cr] = o, x.setAttribute(Qr, E._themeKey);
    }
  });
  return y;
}
var eh = function(t, n, r) {
  var o = K(t, 5), a = o[2], i = o[3], l = o[4], s = r || {}, c = s.plain;
  if (!i)
    return null;
  var d = a._tokenKey, f = -999, v = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, h = Pa(i, l, d, v, c);
  return [f, d, h];
}, th = {
  animationIterationCount: 1,
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
}, wd = "comm", $d = "rule", Od = "decl", nh = "@import", rh = "@keyframes", oh = "@layer", Rd = Math.abs, rs = String.fromCharCode;
function Id(e) {
  return e.trim();
}
function pa(e, t, n) {
  return e.replace(t, n);
}
function ah(e, t, n) {
  return e.indexOf(t, n);
}
function _o(e, t) {
  return e.charCodeAt(t) | 0;
}
function Zr(e, t, n) {
  return e.slice(t, n);
}
function Bn(e) {
  return e.length;
}
function ih(e) {
  return e.length;
}
function na(e, t) {
  return t.push(e), e;
}
var Ga = 1, Jr = 1, Pd = 0, In = 0, Kt = 0, oo = "";
function os(e, t, n, r, o, a, i, l) {
  return { value: e, root: t, parent: n, type: r, props: o, children: a, line: Ga, column: Jr, length: i, return: "", siblings: l };
}
function lh() {
  return Kt;
}
function sh() {
  return Kt = In > 0 ? _o(oo, --In) : 0, Jr--, Kt === 10 && (Jr = 1, Ga--), Kt;
}
function jn() {
  return Kt = In < Pd ? _o(oo, In++) : 0, Jr++, Kt === 10 && (Jr = 1, Ga++), Kt;
}
function ur() {
  return _o(oo, In);
}
function ba() {
  return In;
}
function qa(e, t) {
  return Zr(oo, e, t);
}
function To(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function ch(e) {
  return Ga = Jr = 1, Pd = Bn(oo = e), In = 0, [];
}
function uh(e) {
  return oo = "", e;
}
function fi(e) {
  return Id(qa(In - 1, tl(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function dh(e) {
  for (; (Kt = ur()) && Kt < 33; )
    jn();
  return To(e) > 2 || To(Kt) > 3 ? "" : " ";
}
function fh(e, t) {
  for (; --t && jn() && !(Kt < 48 || Kt > 102 || Kt > 57 && Kt < 65 || Kt > 70 && Kt < 97); )
    ;
  return qa(e, ba() + (t < 6 && ur() == 32 && jn() == 32));
}
function tl(e) {
  for (; jn(); )
    switch (Kt) {
      case e:
        return In;
      case 34:
      case 39:
        e !== 34 && e !== 39 && tl(Kt);
        break;
      case 40:
        e === 41 && tl(e);
        break;
      case 92:
        jn();
        break;
    }
  return In;
}
function vh(e, t) {
  for (; jn() && e + Kt !== 57; )
    if (e + Kt === 84 && ur() === 47)
      break;
  return "/*" + qa(t, In - 1) + "*" + rs(e === 47 ? e : jn());
}
function gh(e) {
  for (; !To(ur()); )
    jn();
  return qa(e, In);
}
function mh(e) {
  return uh(ya("", null, null, null, [""], e = ch(e), 0, [0], e));
}
function ya(e, t, n, r, o, a, i, l, s) {
  for (var c = 0, d = 0, f = i, v = 0, h = 0, b = 0, m = 1, g = 1, y = 1, p = 0, S = "", E = o, C = a, x = r, w = S; g; )
    switch (b = p, p = jn()) {
      case 40:
        if (b != 108 && _o(w, f - 1) == 58) {
          ah(w += pa(fi(p), "&", "&\f"), "&\f", Rd(c ? l[c - 1] : 0)) != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += fi(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += dh(b);
        break;
      case 92:
        w += fh(ba() - 1, 7);
        continue;
      case 47:
        switch (ur()) {
          case 42:
          case 47:
            na(hh(vh(jn(), ba()), t, n, s), s), (To(b || 1) == 5 || To(ur() || 1) == 5) && Bn(w) && Zr(w, -1, void 0) !== " " && (w += " ");
            break;
          default:
            w += "/";
        }
        break;
      case 123 * m:
        l[c++] = Bn(w) * y;
      case 125 * m:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            g = 0;
          case 59 + d:
            y == -1 && (w = pa(w, /\f/g, "")), h > 0 && (Bn(w) - f || m === 0 && b === 47) && na(h > 32 ? cc(w + ";", r, n, f - 1, s) : cc(pa(w, " ", "") + ";", r, n, f - 2, s), s);
            break;
          case 59:
            w += ";";
          default:
            if (na(x = sc(w, t, n, c, d, o, l, S, E = [], C = [], f, a), a), p === 123)
              if (d === 0)
                ya(w, t, x, x, E, a, f, l, C);
              else
                switch (v === 99 && _o(w, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ya(e, x, x, r && na(sc(e, x, x, 0, 0, o, l, S, o, E = [], f, C), C), o, C, f, l, r ? E : C);
                    break;
                  default:
                    ya(w, x, x, x, [""], C, 0, l, C);
                }
        }
        c = d = h = 0, m = y = 1, S = w = "", f = i;
        break;
      case 58:
        f = 1 + Bn(w), h = b;
      default:
        if (m < 1) {
          if (p == 123)
            --m;
          else if (p == 125 && m++ == 0 && sh() == 125)
            continue;
        }
        switch (w += rs(p), p * m) {
          case 38:
            y = d > 0 ? 1 : (w += "\f", -1);
            break;
          case 44:
            l[c++] = (Bn(w) - 1) * y, y = 1;
            break;
          case 64:
            ur() === 45 && (w += fi(jn())), v = ur(), d = f = Bn(S = w += gh(ba())), p++;
            break;
          case 45:
            b === 45 && Bn(w) == 2 && (m = 0);
        }
    }
  return a;
}
function sc(e, t, n, r, o, a, i, l, s, c, d, f) {
  for (var v = o - 1, h = o === 0 ? a : [""], b = ih(h), m = 0, g = 0, y = 0; m < r; ++m)
    for (var p = 0, S = Zr(e, v + 1, v = Rd(g = i[m])), E = e; p < b; ++p)
      (E = Id(g > 0 ? h[p] + " " + S : pa(S, /&\f/g, h[p]))) && (s[y++] = E);
  return os(e, t, n, o === 0 ? $d : l, s, c, d, f);
}
function hh(e, t, n, r) {
  return os(e, t, n, wd, rs(lh()), Zr(e, 2, -2), 0, r);
}
function cc(e, t, n, r, o) {
  return os(e, t, n, Od, Zr(e, 0, r), Zr(e, r + 1, -1), r, o);
}
function nl(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function ph(e, t, n, r) {
  switch (e.type) {
    case oh:
      if (e.children.length) break;
    case nh:
    case Od:
      return e.return = e.return || e.value;
    case wd:
      return "";
    case rh:
      return e.return = e.value + "{" + nl(e.children, r) + "}";
    case $d:
      if (!Bn(e.value = e.props.join(","))) return "";
  }
  return Bn(n = nl(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Nd(e, t) {
  var n = t.path, r = t.parentSelectors;
  ut(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var bh = function(t, n, r) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, a = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || a.indexOf(n) === -1 && !o.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && Nd("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, yh = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && Nd("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, uc = "data-ant-cssinjs-cache-path", Md = "_FILE_STYLE__", $r, _d = !0;
function Sh() {
  if (!$r && ($r = {}, on())) {
    var e = document.createElement("div");
    e.className = uc, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var a = o.split(":"), i = K(a, 2), l = i[0], s = i[1];
      $r[l] = s;
    });
    var n = document.querySelector("style[".concat(uc, "]"));
    if (n) {
      var r;
      _d = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function Ch(e) {
  return Sh(), !!$r[e];
}
function Eh(e) {
  var t = $r[e], n = null;
  if (t && on())
    if (_d)
      n = Md;
    else {
      var r = document.querySelector("style[".concat(Fn, '="').concat($r[e], '"]'));
      r ? n = r.innerHTML : delete $r[e];
    }
  return [n, t];
}
var Td = "_skip_check_", Dd = "_multi_value_";
function Sa(e) {
  var t = nl(mh(e), ph);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function xh(e) {
  return Be(e) === "object" && e && (Td in e || Dd in e);
}
function dc(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), o = n === "low" ? ":where(".concat(r, ")") : r, a = e.split(",").map(function(i) {
    var l, s = i.trim().split(/\s+/), c = s[0] || "", d = ((l = c.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) || "";
    return c = "".concat(d).concat(o).concat(c.slice(d.length)), [c].concat(Ce(s.slice(1))).join(" ");
  });
  return a.join(",");
}
var wh = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, a = r.injectHash, i = r.parentSelectors, l = n.hashId, s = n.layer, c = n.path, d = n.hashPriority, f = n.transformers, v = f === void 0 ? [] : f, h = n.linters, b = h === void 0 ? [] : h, m = "", g = {};
  function y(E) {
    var C = E.getName(l);
    if (!g[C]) {
      var x = e(E.style, n, {
        root: !1,
        parentSelectors: i
      }), w = K(x, 1), $ = w[0];
      g[C] = "@keyframes ".concat(E.getName(l)).concat($);
    }
  }
  function p(E) {
    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return E.forEach(function(x) {
      Array.isArray(x) ? p(x, C) : x && C.push(x);
    }), C;
  }
  var S = p(Array.isArray(t) ? t : [t]);
  return S.forEach(function(E) {
    var C = typeof E == "string" && !o ? {} : E;
    if (typeof C == "string")
      m += "".concat(C, `
`);
    else if (C._keyframe)
      y(C);
    else {
      var x = v.reduce(function(w, $) {
        var O;
        return ($ == null || (O = $.visit) === null || O === void 0 ? void 0 : O.call($, w)) || w;
      }, C);
      Object.keys(x).forEach(function(w) {
        var $ = x[w];
        if (Be($) === "object" && $ && (w !== "animationName" || !$._keyframe) && !xh($)) {
          var O = !1, R = w.trim(), _ = !1;
          (o || a) && l ? R.startsWith("@") ? O = !0 : R === "&" ? R = dc("", l, d) : R = dc(w, l, d) : o && !l && (R === "&" || R === "") && (R = "", _ = !0);
          var I = e($, n, {
            root: _,
            injectHash: O,
            parentSelectors: [].concat(Ce(i), [R])
          }), F = K(I, 2), M = F[0], V = F[1];
          g = z(z({}, g), V), m += "".concat(R).concat(M);
        } else {
          let T = function(j, H) {
            process.env.NODE_ENV !== "production" && (Be($) !== "object" || !($ != null && $[Td])) && [bh, yh].concat(Ce(b)).forEach(function(k) {
              return k(j, H, {
                path: c,
                hashId: l,
                parentSelectors: i
              });
            });
            var L = j.replace(/[A-Z]/g, function(k) {
              return "-".concat(k.toLowerCase());
            }), q = H;
            !th[j] && typeof q == "number" && q !== 0 && (q = "".concat(q, "px")), j === "animationName" && H !== null && H !== void 0 && H._keyframe && (y(H), q = H.getName(l)), m += "".concat(L, ":").concat(q, ";");
          };
          var N, P = (N = $ == null ? void 0 : $.value) !== null && N !== void 0 ? N : $;
          Be($) === "object" && $ !== null && $ !== void 0 && $[Dd] && Array.isArray(P) ? P.forEach(function(j) {
            T(w, j);
          }) : T(w, P);
        }
      });
    }
  }), o ? s && (m = "@layer ".concat(s.name, " {").concat(m, "}"), s.dependencies && (g["@layer ".concat(s.name)] = s.dependencies.map(function(E) {
    return "@layer ".concat(E, ", ").concat(s.name, ";");
  }).join(`
`))) : m = "{".concat(m, "}"), [m, g];
};
function Ad(e, t) {
  return No("".concat(e.join("%")).concat(t));
}
function $h() {
  return null;
}
var Fd = "style";
function rl(e, t) {
  var n = e.token, r = e.path, o = e.hashId, a = e.layer, i = e.nonce, l = e.clientOnly, s = e.order, c = s === void 0 ? 0 : s, d = u.useContext(Ua), f = d.autoClear, v = d.mock, h = d.defaultCache, b = d.hashPriority, m = d.container, g = d.ssrInline, y = d.transformers, p = d.linters, S = d.cache, E = d.layer, C = n._tokenKey, x = [C];
  E && x.push("layer"), x.push.apply(x, Ce(r));
  var w = Ji;
  process.env.NODE_ENV !== "production" && v !== void 0 && (w = v === "client");
  var $ = ns(
    Fd,
    x,
    // Create cache if needed
    function() {
      var F = x.join("|");
      if (Ch(F)) {
        var M = Eh(F), V = K(M, 2), N = V[0], P = V[1];
        if (N)
          return [N, C, P, {}, l, c];
      }
      var T = t(), j = wh(T, {
        hashId: o,
        hashPriority: b,
        layer: E ? a : void 0,
        path: r.join("-"),
        transformers: y,
        linters: p
      }), H = K(j, 2), L = H[0], q = H[1], k = Sa(L), U = Ad(x, k);
      return [k, C, U, q, l, c];
    },
    // Remove cache if no need
    function(F, M) {
      var V = K(F, 3), N = V[2];
      (M || f) && Ji && Mo(N, {
        mark: Fn
      });
    },
    // Effect: Inject style here
    function(F) {
      var M = K(F, 4), V = M[0];
      M[1];
      var N = M[2], P = M[3];
      if (w && V !== Md) {
        var T = {
          mark: Fn,
          prepend: E ? !1 : "queue",
          attachTo: m,
          priority: c
        }, j = typeof i == "function" ? i() : i;
        j && (T.csp = {
          nonce: j
        });
        var H = [], L = [];
        Object.keys(P).forEach(function(k) {
          k.startsWith("@layer") ? H.push(k) : L.push(k);
        }), H.forEach(function(k) {
          Zn(Sa(P[k]), "_layer-".concat(k), z(z({}, T), {}, {
            prepend: !0
          }));
        });
        var q = Zn(V, N, T);
        q[cr] = S.instanceId, q.setAttribute(Qr, C), process.env.NODE_ENV !== "production" && q.setAttribute(Im, x.join("|")), L.forEach(function(k) {
          Zn(Sa(P[k]), "_effect-".concat(k), T);
        });
      }
    }
  ), O = K($, 3), R = O[0], _ = O[1], I = O[2];
  return function(F) {
    var M;
    return !g || w || !h ? M = /* @__PURE__ */ u.createElement($h, null) : M = /* @__PURE__ */ u.createElement("style", ke({}, D(D({}, Qr, _), Fn, I), {
      dangerouslySetInnerHTML: {
        __html: R
      }
    })), /* @__PURE__ */ u.createElement(u.Fragment, null, M, F);
  };
}
var Oh = function(t, n, r) {
  var o = K(t, 6), a = o[0], i = o[1], l = o[2], s = o[3], c = o[4], d = o[5], f = r || {}, v = f.plain;
  if (c)
    return null;
  var h = a, b = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  };
  return h = Pa(a, i, l, b, v), s && Object.keys(s).forEach(function(m) {
    if (!n[m]) {
      n[m] = !0;
      var g = Sa(s[m]), y = Pa(g, i, "_effect-".concat(m), b, v);
      m.startsWith("@layer") ? h = y + h : h += y;
    }
  }), [d, l, h];
}, jd = "cssVar", Rh = function(t, n) {
  var r = t.key, o = t.prefix, a = t.unitless, i = t.ignore, l = t.token, s = t.scope, c = s === void 0 ? "" : s, d = Dt(Ua), f = d.cache.instanceId, v = d.container, h = l._tokenKey, b = [].concat(Ce(t.path), [r, c, h]), m = ns(jd, b, function() {
    var g = n(), y = Ed(g, r, {
      prefix: o,
      unitless: a,
      ignore: i,
      scope: c
    }), p = K(y, 2), S = p[0], E = p[1], C = Ad(b, E);
    return [S, E, C, r];
  }, function(g) {
    var y = K(g, 3), p = y[2];
    Ji && Mo(p, {
      mark: Fn
    });
  }, function(g) {
    var y = K(g, 3), p = y[1], S = y[2];
    if (p) {
      var E = Zn(p, S, {
        mark: Fn,
        prepend: "queue",
        attachTo: v,
        priority: -999
      });
      E[cr] = f, E.setAttribute(Qr, r);
    }
  });
  return m;
}, Ih = function(t, n, r) {
  var o = K(t, 4), a = o[1], i = o[2], l = o[3], s = r || {}, c = s.plain;
  if (!a)
    return null;
  var d = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, v = Pa(a, l, i, f, c);
  return [d, i, v];
};
D(D(D({}, Fd, Oh), xd, eh), jd, Ih);
var Ot = /* @__PURE__ */ function() {
  function e(t, n) {
    Vt(this, e), D(this, "name", void 0), D(this, "style", void 0), D(this, "_keyframe", !0), this.name = t, this.style = n;
  }
  return Bt(e, [{
    key: "getName",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n ? "".concat(n, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function Ar(e) {
  return e.notSplit = !0, e;
}
Ar(["borderTop", "borderBottom"]), Ar(["borderTop"]), Ar(["borderBottom"]), Ar(["borderLeft", "borderRight"]), Ar(["borderLeft"]), Ar(["borderRight"]);
var as = /* @__PURE__ */ Vo({});
function Ld(e) {
  return hd(e) || fd(e) || Jl(e) || pd();
}
function Wn(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function Hd(e, t, n, r) {
  if (!t.length)
    return n;
  var o = Ld(t), a = o[0], i = o.slice(1), l;
  return !e && typeof a == "number" ? l = [] : Array.isArray(e) ? l = Ce(e) : l = z({}, e), r && n === void 0 && i.length === 1 ? delete l[a][i[0]] : l[a] = Hd(l[a], i, n, r), l;
}
function Dn(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !Wn(e, t.slice(0, -1)) ? e : Hd(e, t, n, r);
}
function Ph(e) {
  return Be(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function fc(e) {
  return Array.isArray(e) ? [] : {};
}
var Nh = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function kr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = fc(t[0]);
  return t.forEach(function(o) {
    function a(i, l) {
      var s = new Set(l), c = Wn(o, i), d = Array.isArray(c);
      if (d || Ph(c)) {
        if (!s.has(c)) {
          s.add(c);
          var f = Wn(r, i);
          d ? r = Dn(r, i, []) : (!f || Be(f) !== "object") && (r = Dn(r, i, fc(c))), Nh(c).forEach(function(v) {
            a([].concat(Ce(i), [v]), s);
          });
        }
      } else
        r = Dn(r, i, c);
    }
    a([]);
  }), r;
}
function zd() {
}
let Yn = null;
function Mh() {
  Yn = null, td();
}
let is = zd;
process.env.NODE_ENV !== "production" && (is = (e, t, n) => {
  ut(e, `[antd: ${t}] ${n}`), process.env.NODE_ENV === "test" && Mh();
});
const Vd = /* @__PURE__ */ u.createContext({}), zt = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = u.useContext(Vd), n = (r, o, a) => {
    if (!r)
      if (t === !1 && o === "deprecated") {
        const i = Yn;
        Yn || (Yn = {}), Yn[e] = Yn[e] || [], Yn[e].includes(a || "") || Yn[e].push(a || ""), i || console.warn("[antd] There exists deprecated usage in your code:", Yn);
      } else
        process.env.NODE_ENV !== "production" && is(r, e, a);
  };
  return n.deprecated = (r, o, a, i) => {
    n(r, "deprecated", `\`${o}\` is deprecated. Please use \`${a}\` instead.${i ? ` ${i}` : ""}`);
  }, n;
} : () => {
  const e = () => {
  };
  return e.deprecated = zd, e;
}, Ka = is, _h = /* @__PURE__ */ Vo(void 0);
var Th = {
  // Options
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
}, Dh = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: !0
}, Ah = z(z({}, Dh), {}, {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  dateFormat: "M/D/YYYY",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
});
const Bd = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, vc = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, Ah),
  timePickerLocale: Object.assign({}, Bd)
}, vn = "${label} is not a valid ${type}", eo = {
  locale: "en",
  Pagination: Th,
  DatePicker: vc,
  TimePicker: Bd,
  Calendar: vc,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    deselectAll: "Deselect all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand",
    collapse: "Collapse"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: vn,
        method: vn,
        array: vn,
        object: vn,
        number: vn,
        date: vn,
        boolean: vn,
        integer: vn,
        float: vn,
        regexp: vn,
        email: vn,
        url: vn,
        hex: vn
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  },
  ColorPicker: {
    presetEmpty: "Empty",
    transparent: "Transparent",
    singleColor: "Single",
    gradientColor: "Gradient"
  }
};
Object.assign({}, eo.Modal);
let Ca = [];
const gc = () => Ca.reduce((e, t) => Object.assign(Object.assign({}, e), t), eo.Modal);
function Fh(e) {
  if (e) {
    const t = Object.assign({}, e);
    return Ca.push(t), gc(), () => {
      Ca = Ca.filter((n) => n !== t), gc();
    };
  }
  Object.assign({}, eo.Modal);
}
const ls = /* @__PURE__ */ Vo(void 0), Xa = (e, t) => {
  const n = u.useContext(ls), r = u.useMemo(() => {
    var a;
    const i = eo[e], l = (a = n == null ? void 0 : n[e]) !== null && a !== void 0 ? a : {};
    return Object.assign(Object.assign({}, typeof i == "function" ? i() : i), l || {});
  }, [e, t, n]), o = u.useMemo(() => {
    const a = n == null ? void 0 : n.locale;
    return n != null && n.exist && !a ? eo.locale : a;
  }, [n]);
  return [r, o];
}, Wd = "internalMark", kd = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const a = zt("LocaleProvider");
    process.env.NODE_ENV !== "production" && a(r === Wd, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  u.useEffect(() => Fh(t == null ? void 0 : t.Modal), [t]);
  const o = u.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ u.createElement(ls.Provider, {
    value: o
  }, n);
};
process.env.NODE_ENV !== "production" && (kd.displayName = "LocaleProvider");
function en(e, t) {
  jh(e) && (e = "100%");
  var n = Lh(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function ra(e) {
  return Math.min(1, Math.max(0, e));
}
function jh(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Lh(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Ud(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function oa(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Er(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Hh(e, t, n) {
  return {
    r: en(e, 255) * 255,
    g: en(t, 255) * 255,
    b: en(n, 255) * 255
  };
}
function mc(e, t, n) {
  e = en(e, 255), t = en(t, 255), n = en(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), a = 0, i = 0, l = (r + o) / 2;
  if (r === o)
    i = 0, a = 0;
  else {
    var s = r - o;
    switch (i = l > 0.5 ? s / (2 - r - o) : s / (r + o), r) {
      case e:
        a = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / s + 2;
        break;
      case n:
        a = (e - t) / s + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: i, l };
}
function vi(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function zh(e, t, n) {
  var r, o, a;
  if (e = en(e, 360), t = en(t, 100), n = en(n, 100), t === 0)
    o = n, a = n, r = n;
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - i;
    r = vi(l, i, e + 1 / 3), o = vi(l, i, e), a = vi(l, i, e - 1 / 3);
  }
  return { r: r * 255, g: o * 255, b: a * 255 };
}
function ol(e, t, n) {
  e = en(e, 255), t = en(t, 255), n = en(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), a = 0, i = r, l = r - o, s = r === 0 ? 0 : l / r;
  if (r === o)
    a = 0;
  else {
    switch (r) {
      case e:
        a = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / l + 2;
        break;
      case n:
        a = (e - t) / l + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s, v: i };
}
function Vh(e, t, n) {
  e = en(e, 360) * 6, t = en(t, 100), n = en(n, 100);
  var r = Math.floor(e), o = e - r, a = n * (1 - t), i = n * (1 - o * t), l = n * (1 - (1 - o) * t), s = r % 6, c = [n, i, a, a, l, n][s], d = [l, n, n, i, a, a][s], f = [a, a, l, n, n, i][s];
  return { r: c * 255, g: d * 255, b: f * 255 };
}
function al(e, t, n, r) {
  var o = [
    Er(Math.round(e).toString(16)),
    Er(Math.round(t).toString(16)),
    Er(Math.round(n).toString(16))
  ];
  return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function Bh(e, t, n, r, o) {
  var a = [
    Er(Math.round(e).toString(16)),
    Er(Math.round(t).toString(16)),
    Er(Math.round(n).toString(16)),
    Er(Wh(r))
  ];
  return o && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function Wh(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function hc(e) {
  return hn(e) / 255;
}
function hn(e) {
  return parseInt(e, 16);
}
function kh(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var il = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function Wr(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, o = null, a = null, i = !1, l = !1;
  return typeof e == "string" && (e = qh(e)), typeof e == "object" && (Kn(e.r) && Kn(e.g) && Kn(e.b) ? (t = Hh(e.r, e.g, e.b), i = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Kn(e.h) && Kn(e.s) && Kn(e.v) ? (r = oa(e.s), o = oa(e.v), t = Vh(e.h, r, o), i = !0, l = "hsv") : Kn(e.h) && Kn(e.s) && Kn(e.l) && (r = oa(e.s), a = oa(e.l), t = zh(e.h, r, a), i = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Ud(n), {
    ok: i,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var Uh = "[-\\+]?\\d+%?", Gh = "[-\\+]?\\d*\\.\\d+%?", dr = "(?:".concat(Gh, ")|(?:").concat(Uh, ")"), gi = "[\\s|\\(]+(".concat(dr, ")[,|\\s]+(").concat(dr, ")[,|\\s]+(").concat(dr, ")\\s*\\)?"), mi = "[\\s|\\(]+(".concat(dr, ")[,|\\s]+(").concat(dr, ")[,|\\s]+(").concat(dr, ")[,|\\s]+(").concat(dr, ")\\s*\\)?"), _n = {
  CSS_UNIT: new RegExp(dr),
  rgb: new RegExp("rgb" + gi),
  rgba: new RegExp("rgba" + mi),
  hsl: new RegExp("hsl" + gi),
  hsla: new RegExp("hsla" + mi),
  hsv: new RegExp("hsv" + gi),
  hsva: new RegExp("hsva" + mi),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function qh(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (il[e])
    e = il[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = _n.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = _n.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = _n.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = _n.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = _n.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = _n.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = _n.hex8.exec(e), n ? {
    r: hn(n[1]),
    g: hn(n[2]),
    b: hn(n[3]),
    a: hc(n[4]),
    format: t ? "name" : "hex8"
  } : (n = _n.hex6.exec(e), n ? {
    r: hn(n[1]),
    g: hn(n[2]),
    b: hn(n[3]),
    format: t ? "name" : "hex"
  } : (n = _n.hex4.exec(e), n ? {
    r: hn(n[1] + n[1]),
    g: hn(n[2] + n[2]),
    b: hn(n[3] + n[3]),
    a: hc(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = _n.hex3.exec(e), n ? {
    r: hn(n[1] + n[1]),
    g: hn(n[2] + n[2]),
    b: hn(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Kn(e) {
  return !!_n.CSS_UNIT.exec(String(e));
}
var Xt = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = kh(t)), this.originalInput = t;
      var o = Wr(t);
      this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : o.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, r, o, a = t.r / 255, i = t.g / 255, l = t.b / 255;
      return a <= 0.03928 ? n = a / 12.92 : n = Math.pow((a + 0.055) / 1.055, 2.4), i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), l <= 0.03928 ? o = l / 12.92 : o = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * o;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = Ud(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = ol(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = ol(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = mc(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = mc(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), al(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), Bh(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), r = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(en(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(en(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + al(this.r, this.g, this.b, !1), n = 0, r = Object.entries(il); n < r.length; n++) {
        var o = r[n], a = o[0], i = o[1];
        if (t === i)
          return a;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var r = !1, o = this.a < 1 && this.a >= 0, a = !n && o && (t.startsWith("hex") || t === "name");
      return a ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = ra(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = ra(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = ra(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = ra(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), r = (n.h + t) % 360;
      return n.h = r < 0 ? 360 + r : r, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(), o = new e(t).toRgb(), a = n / 100, i = {
        r: (o.r - r.r) * a + r.r,
        g: (o.g - r.g) * a + r.g,
        b: (o.b - r.b) * a + r.b,
        a: (o.a - r.a) * a + r.a
      };
      return new e(i);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var r = this.toHsl(), o = 360 / n, a = [this];
      for (r.h = (r.h - (o * t >> 1) + 720) % 360; --t; )
        r.h = (r.h + o) % 360, a.push(new e(r));
      return a;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), r = n.h, o = n.s, a = n.v, i = [], l = 1 / t; t--; )
        i.push(new e({ h: r, s: o, v: a })), a = (a + l) % 1;
      return i;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), r = new e(t).toRgb(), o = n.a + r.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
        g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
        b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
        a: o
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), r = n.h, o = [this], a = 360 / t, i = 1; i < t; i++)
        o.push(new e({ h: (r + i * a) % 360, s: n.s, l: n.l }));
      return o;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), aa = 2, pc = 0.16, Kh = 0.05, Xh = 0.05, Yh = 0.15, Gd = 5, qd = 4, Qh = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function bc(e) {
  var t = e.r, n = e.g, r = e.b, o = ol(t, n, r);
  return {
    h: o.h * 360,
    s: o.s,
    v: o.v
  };
}
function ia(e) {
  var t = e.r, n = e.g, r = e.b;
  return "#".concat(al(t, n, r, !1));
}
function Zh(e, t, n) {
  var r = n / 100, o = {
    r: (t.r - e.r) * r + e.r,
    g: (t.g - e.g) * r + e.g,
    b: (t.b - e.b) * r + e.b
  };
  return o;
}
function yc(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - aa * t : Math.round(e.h) + aa * t : r = n ? Math.round(e.h) + aa * t : Math.round(e.h) - aa * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Sc(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - pc * t : t === qd ? r = e.s + pc : r = e.s + Kh * t, r > 1 && (r = 1), n && t === Gd && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function Cc(e, t, n) {
  var r;
  return n ? r = e.v + Xh * t : r = e.v - Yh * t, r > 1 && (r = 1), Number(r.toFixed(2));
}
function Do(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = Wr(e), o = Gd; o > 0; o -= 1) {
    var a = bc(r), i = ia(Wr({
      h: yc(a, o, !0),
      s: Sc(a, o, !0),
      v: Cc(a, o, !0)
    }));
    n.push(i);
  }
  n.push(ia(r));
  for (var l = 1; l <= qd; l += 1) {
    var s = bc(r), c = ia(Wr({
      h: yc(s, l),
      s: Sc(s, l),
      v: Cc(s, l)
    }));
    n.push(c);
  }
  return t.theme === "dark" ? Qh.map(function(d) {
    var f = d.index, v = d.opacity, h = ia(Zh(Wr(t.backgroundColor || "#141414"), Wr(n[f]), v * 100));
    return h;
  }) : n;
}
var hi = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, ll = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
ll.primary = ll[5];
var sl = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
sl.primary = sl[5];
var cl = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
cl.primary = cl[5];
var ul = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
ul.primary = ul[5];
var dl = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
dl.primary = dl[5];
var fl = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
fl.primary = fl[5];
var vl = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
vl.primary = vl[5];
var gl = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
gl.primary = gl[5];
var Na = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Na.primary = Na[5];
var ml = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
ml.primary = ml[5];
var hl = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
hl.primary = hl[5];
var pl = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
pl.primary = pl[5];
var bl = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
bl.primary = bl[5];
var pi = {
  red: ll,
  volcano: sl,
  orange: cl,
  gold: ul,
  yellow: dl,
  lime: fl,
  green: vl,
  cyan: gl,
  blue: Na,
  geekblue: ml,
  purple: hl,
  magenta: pl,
  grey: bl
};
const Kd = {
  blue: "#1677FF",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  /**
   * @deprecated Use magenta instead
   */
  pink: "#EB2F96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, Ao = Object.assign(Object.assign({}, Kd), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
});
function Jh(e, t) {
  let {
    generateColorPalettes: n,
    generateNeutralColorPalettes: r
  } = t;
  const {
    colorSuccess: o,
    colorWarning: a,
    colorError: i,
    colorInfo: l,
    colorPrimary: s,
    colorBgBase: c,
    colorTextBase: d
  } = e, f = n(s), v = n(o), h = n(a), b = n(i), m = n(l), g = r(c, d), y = e.colorLink || e.colorInfo, p = n(y);
  return Object.assign(Object.assign({}, g), {
    colorPrimaryBg: f[1],
    colorPrimaryBgHover: f[2],
    colorPrimaryBorder: f[3],
    colorPrimaryBorderHover: f[4],
    colorPrimaryHover: f[5],
    colorPrimary: f[6],
    colorPrimaryActive: f[7],
    colorPrimaryTextHover: f[8],
    colorPrimaryText: f[9],
    colorPrimaryTextActive: f[10],
    colorSuccessBg: v[1],
    colorSuccessBgHover: v[2],
    colorSuccessBorder: v[3],
    colorSuccessBorderHover: v[4],
    colorSuccessHover: v[4],
    colorSuccess: v[6],
    colorSuccessActive: v[7],
    colorSuccessTextHover: v[8],
    colorSuccessText: v[9],
    colorSuccessTextActive: v[10],
    colorErrorBg: b[1],
    colorErrorBgHover: b[2],
    colorErrorBgActive: b[3],
    colorErrorBorder: b[3],
    colorErrorBorderHover: b[4],
    colorErrorHover: b[5],
    colorError: b[6],
    colorErrorActive: b[7],
    colorErrorTextHover: b[8],
    colorErrorText: b[9],
    colorErrorTextActive: b[10],
    colorWarningBg: h[1],
    colorWarningBgHover: h[2],
    colorWarningBorder: h[3],
    colorWarningBorderHover: h[4],
    colorWarningHover: h[4],
    colorWarning: h[6],
    colorWarningActive: h[7],
    colorWarningTextHover: h[8],
    colorWarningText: h[9],
    colorWarningTextActive: h[10],
    colorInfoBg: m[1],
    colorInfoBgHover: m[2],
    colorInfoBorder: m[3],
    colorInfoBorderHover: m[4],
    colorInfoHover: m[4],
    colorInfo: m[6],
    colorInfoActive: m[7],
    colorInfoTextHover: m[8],
    colorInfoText: m[9],
    colorInfoTextActive: m[10],
    colorLinkHover: p[4],
    colorLink: p[6],
    colorLinkActive: p[7],
    colorBgMask: new Xt("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const ep = (e) => {
  let t = e, n = e, r = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function tp(e) {
  const {
    motionUnit: t,
    motionBase: n,
    borderRadius: r,
    lineWidth: o
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(n + t).toFixed(1)}s`,
    motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, ep(r));
}
const np = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function Ea(e) {
  return (e + 8) / e;
}
function rp(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const o = r - 1, a = e * Math.pow(Math.E, o / 5), i = r > 1 ? Math.floor(a) : Math.ceil(a);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((n) => ({
    size: n,
    lineHeight: Ea(n)
  }));
}
const op = (e) => {
  const t = rp(e), n = t.map((d) => d.size), r = t.map((d) => d.lineHeight), o = n[1], a = n[0], i = n[2], l = r[1], s = r[0], c = r[2];
  return {
    fontSizeSM: a,
    fontSize: o,
    fontSizeLG: i,
    fontSizeXL: n[3],
    fontSizeHeading1: n[6],
    fontSizeHeading2: n[5],
    fontSizeHeading3: n[4],
    fontSizeHeading4: n[3],
    fontSizeHeading5: n[2],
    lineHeight: l,
    lineHeightLG: c,
    lineHeightSM: s,
    fontHeight: Math.round(l * o),
    fontHeightLG: Math.round(c * i),
    fontHeightSM: Math.round(s * a),
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2]
  };
};
function ap(e) {
  const {
    sizeUnit: t,
    sizeStep: n
  } = e;
  return {
    sizeXXL: t * (n + 8),
    // 48
    sizeXL: t * (n + 4),
    // 32
    sizeLG: t * (n + 2),
    // 24
    sizeMD: t * (n + 1),
    // 20
    sizeMS: t * n,
    // 16
    size: t * n,
    // 16
    sizeSM: t * (n - 1),
    // 12
    sizeXS: t * (n - 2),
    // 8
    sizeXXS: t * (n - 3)
    // 4
  };
}
const Xn = (e, t) => new Xt(e).setAlpha(t).toRgbString(), go = (e, t) => new Xt(e).darken(t).toHexString(), ip = (e) => {
  const t = Do(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, lp = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: Xn(r, 0.88),
    colorTextSecondary: Xn(r, 0.65),
    colorTextTertiary: Xn(r, 0.45),
    colorTextQuaternary: Xn(r, 0.25),
    colorFill: Xn(r, 0.15),
    colorFillSecondary: Xn(r, 0.06),
    colorFillTertiary: Xn(r, 0.04),
    colorFillQuaternary: Xn(r, 0.02),
    colorBgLayout: go(n, 4),
    colorBgContainer: go(n, 0),
    colorBgElevated: go(n, 0),
    colorBgSpotlight: Xn(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: go(n, 15),
    colorBorderSecondary: go(n, 6)
  };
};
function sp(e) {
  hi.pink = hi.magenta, pi.pink = pi.magenta;
  const t = Object.keys(Kd).map((n) => {
    const r = e[n] === hi[n] ? pi[n] : Do(e[n]);
    return new Array(10).fill(1).reduce((o, a, i) => (o[`${n}-${i + 1}`] = r[i], o[`${n}${i + 1}`] = r[i], o), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), Jh(e, {
    generateColorPalettes: ip,
    generateNeutralColorPalettes: lp
  })), op(e.fontSize)), ap(e)), np(e)), tp(e));
}
const Xd = Zi(sp), yl = {
  token: Ao,
  override: {
    override: Ao
  },
  hashed: !0
}, Yd = /* @__PURE__ */ B.createContext(yl), Fo = "ant", Qd = "anticon", cp = ["outlined", "borderless", "filled"], up = (e, t) => t || (e ? `${Fo}-${e}` : Fo), Ct = /* @__PURE__ */ u.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: up,
  iconPrefixCls: Qd
}), dp = `-ant-${Date.now()}-${Math.random()}`;
function fp(e, t) {
  const n = {}, r = (i, l) => {
    let s = i.clone();
    return s = (l == null ? void 0 : l(s)) || s, s.toRgbString();
  }, o = (i, l) => {
    const s = new Xt(i), c = Do(s.toRgbString());
    n[`${l}-color`] = r(s), n[`${l}-color-disabled`] = c[1], n[`${l}-color-hover`] = c[4], n[`${l}-color-active`] = c[6], n[`${l}-color-outline`] = s.clone().setAlpha(0.2).toRgbString(), n[`${l}-color-deprecated-bg`] = c[0], n[`${l}-color-deprecated-border`] = c[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const i = new Xt(t.primaryColor), l = Do(i.toRgbString());
    l.forEach((c, d) => {
      n[`primary-${d + 1}`] = c;
    }), n["primary-color-deprecated-l-35"] = r(i, (c) => c.lighten(35)), n["primary-color-deprecated-l-20"] = r(i, (c) => c.lighten(20)), n["primary-color-deprecated-t-20"] = r(i, (c) => c.tint(20)), n["primary-color-deprecated-t-50"] = r(i, (c) => c.tint(50)), n["primary-color-deprecated-f-12"] = r(i, (c) => c.setAlpha(c.getAlpha() * 0.12));
    const s = new Xt(l[0]);
    n["primary-color-active-deprecated-f-30"] = r(s, (c) => c.setAlpha(c.getAlpha() * 0.3)), n["primary-color-active-deprecated-d-02"] = r(s, (c) => c.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((i) => `--${e}-${i}: ${n[i]};`).join(`
`)}
  }
  `.trim();
}
function vp(e, t) {
  const n = fp(e, t);
  on() ? Zn(n, `${dp}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Ka(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Ln = /* @__PURE__ */ u.createContext(!1), gp = (e) => {
  let {
    children: t,
    disabled: n
  } = e;
  const r = u.useContext(Ln);
  return /* @__PURE__ */ u.createElement(Ln.Provider, {
    value: n ?? r
  }, t);
}, to = /* @__PURE__ */ u.createContext(void 0), mp = (e) => {
  let {
    children: t,
    size: n
  } = e;
  const r = u.useContext(to);
  return /* @__PURE__ */ u.createElement(to.Provider, {
    value: n || r
  }, t);
};
function hp() {
  const e = Dt(Ln), t = Dt(to);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var Zd = /* @__PURE__ */ Bt(function e() {
  Vt(this, e);
}), Jd = "CALC_UNIT", pp = new RegExp(Jd, "g");
function bi(e) {
  return typeof e == "number" ? "".concat(e).concat(Jd) : e;
}
var bp = /* @__PURE__ */ function(e) {
  hr(n, e);
  var t = pr(n);
  function n(r, o) {
    var a;
    Vt(this, n), a = t.call(this), D(ht(a), "result", ""), D(ht(a), "unitlessCssVar", void 0), D(ht(a), "lowPriority", void 0);
    var i = Be(r);
    return a.unitlessCssVar = o, r instanceof n ? a.result = "(".concat(r.result, ")") : i === "number" ? a.result = bi(r) : i === "string" && (a.result = r), a;
  }
  return Bt(n, [{
    key: "add",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(bi(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(bi(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof n ? this.result = "".concat(this.result, " * ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " * ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof n ? this.result = "".concat(this.result, " / ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " / ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(o) {
      return this.lowPriority || o ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function(o) {
      var a = this, i = o || {}, l = i.unit, s = !0;
      return typeof l == "boolean" ? s = l : Array.from(this.unitlessCssVar).some(function(c) {
        return a.result.includes(c);
      }) && (s = !1), this.result = this.result.replace(pp, s ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
}(Zd), yp = /* @__PURE__ */ function(e) {
  hr(n, e);
  var t = pr(n);
  function n(r) {
    var o;
    return Vt(this, n), o = t.call(this), D(ht(o), "result", 0), r instanceof n ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return Bt(n, [{
    key: "add",
    value: function(o) {
      return o instanceof n ? this.result += o.result : typeof o == "number" && (this.result += o), this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof n ? this.result -= o.result : typeof o == "number" && (this.result -= o), this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return o instanceof n ? this.result *= o.result : typeof o == "number" && (this.result *= o), this;
    }
  }, {
    key: "div",
    value: function(o) {
      return o instanceof n ? this.result /= o.result : typeof o == "number" && (this.result /= o), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), n;
}(Zd), Sp = function(t, n) {
  var r = t === "css" ? bp : yp;
  return function(o) {
    return new r(o, n);
  };
}, Ec = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function $t(e) {
  var t = u.useRef();
  t.current = e;
  var n = u.useCallback(function() {
    for (var r, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(a));
  }, []);
  return n;
}
function jo(e) {
  var t = u.useRef(!1), n = u.useState(e), r = K(n, 2), o = r[0], a = r[1];
  u.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function i(l, s) {
    s && t.current || a(l);
  }
  return [o, i];
}
function yi(e) {
  return e !== void 0;
}
function Jt(e, t) {
  var n = t || {}, r = n.defaultValue, o = n.value, a = n.onChange, i = n.postState, l = jo(function() {
    return yi(o) ? o : yi(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), s = K(l, 2), c = s[0], d = s[1], f = o !== void 0 ? o : c, v = i ? i(f) : f, h = $t(a), b = jo([f]), m = K(b, 2), g = m[0], y = m[1];
  xo(function() {
    var S = g[0];
    c !== S && h(c, S);
  }, [g]), xo(function() {
    yi(o) || d(o);
  }, [o]);
  var p = $t(function(S, E) {
    d(S, E), y([f], E);
  });
  return [v, p];
}
function xc(e, t, n, r) {
  var o = z({}, t[e]);
  if (r != null && r.deprecatedTokens) {
    var a = r.deprecatedTokens;
    a.forEach(function(l) {
      var s = K(l, 2), c = s[0], d = s[1];
      if (process.env.NODE_ENV !== "production" && ut(!(o != null && o[c]), "Component Token `".concat(String(c), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(d), "` instead.")), o != null && o[c] || o != null && o[d]) {
        var f;
        (f = o[d]) !== null && f !== void 0 || (o[d] = o == null ? void 0 : o[c]);
      }
    });
  }
  var i = z(z({}, n), o);
  return Object.keys(i).forEach(function(l) {
    i[l] === t[l] && delete i[l];
  }), i;
}
var ef = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", Sl = !0;
function Pt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!ef)
    return Object.assign.apply(Object, [{}].concat(t));
  Sl = !1;
  var r = {};
  return t.forEach(function(o) {
    if (Be(o) === "object") {
      var a = Object.keys(o);
      a.forEach(function(i) {
        Object.defineProperty(r, i, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return o[i];
          }
        });
      });
    }
  }), Sl = !0, r;
}
var wc = {};
function Cp() {
}
var Ep = function(t) {
  var n, r = t, o = Cp;
  return ef && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), r = new Proxy(t, {
    get: function(i, l) {
      if (Sl) {
        var s;
        (s = n) === null || s === void 0 || s.add(l);
      }
      return i[l];
    }
  }), o = function(i, l) {
    var s;
    wc[i] = {
      global: Array.from(n),
      component: z(z({}, (s = wc[i]) === null || s === void 0 ? void 0 : s.component), l)
    };
  }), {
    token: r,
    keys: n,
    flush: o
  };
};
function $c(e, t, n) {
  if (typeof n == "function") {
    var r;
    return n(Pt(t, (r = t[e]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function xp(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(a) {
        return oe(a);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(a) {
        return oe(a);
      }).join(","), ")");
    }
  };
}
var wp = 1e3 * 60 * 10, $p = /* @__PURE__ */ function() {
  function e() {
    Vt(this, e), D(this, "map", /* @__PURE__ */ new Map()), D(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), D(this, "nextID", 0), D(this, "lastAccessBeat", /* @__PURE__ */ new Map()), D(this, "accessBeat", 0);
  }
  return Bt(e, [{
    key: "set",
    value: function(n, r) {
      this.clear();
      var o = this.getCompositeKey(n);
      this.map.set(o, r), this.lastAccessBeat.set(o, Date.now());
    }
  }, {
    key: "get",
    value: function(n) {
      var r = this.getCompositeKey(n), o = this.map.get(r);
      return this.lastAccessBeat.set(r, Date.now()), this.accessBeat += 1, o;
    }
  }, {
    key: "getCompositeKey",
    value: function(n) {
      var r = this, o = n.map(function(a) {
        return a && Be(a) === "object" ? "obj_".concat(r.getObjectID(a)) : "".concat(Be(a), "_").concat(a);
      });
      return o.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(n) {
      if (this.objectIDMap.has(n))
        return this.objectIDMap.get(n);
      var r = this.nextID;
      return this.objectIDMap.set(n, r), this.nextID += 1, r;
    }
  }, {
    key: "clear",
    value: function() {
      var n = this;
      if (this.accessBeat > 1e4) {
        var r = Date.now();
        this.lastAccessBeat.forEach(function(o, a) {
          r - o > wp && (n.map.delete(a), n.lastAccessBeat.delete(a));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), Oc = new $p();
function Op(e, t) {
  return B.useMemo(function() {
    var n = Oc.get(t);
    if (n)
      return n;
    var r = e();
    return Oc.set(t, r), r;
  }, t);
}
var Rp = function() {
  return {};
};
function Ip(e) {
  var t = e.useCSP, n = t === void 0 ? Rp : t, r = e.useToken, o = e.usePrefix, a = e.getResetStyles, i = e.getCommonStyle, l = e.getCompUnitless;
  function s(v, h, b, m) {
    var g = Array.isArray(v) ? v[0] : v;
    function y($) {
      return "".concat(String(g)).concat($.slice(0, 1).toUpperCase()).concat($.slice(1));
    }
    var p = (m == null ? void 0 : m.unitless) || {}, S = typeof l == "function" ? l(v) : {}, E = z(z({}, S), {}, D({}, y("zIndexPopup"), !0));
    Object.keys(p).forEach(function($) {
      E[y($)] = p[$];
    });
    var C = z(z({}, m), {}, {
      unitless: E,
      prefixToken: y
    }), x = d(v, h, b, C), w = c(g, b, C);
    return function($) {
      var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $, R = x($, O), _ = K(R, 2), I = _[1], F = w(O), M = K(F, 2), V = M[0], N = M[1];
      return [V, I, N];
    };
  }
  function c(v, h, b) {
    var m = b.unitless, g = b.injectStyle, y = g === void 0 ? !0 : g, p = b.prefixToken, S = b.ignore, E = function(w) {
      var $ = w.rootCls, O = w.cssVar, R = O === void 0 ? {} : O, _ = r(), I = _.realToken;
      return Rh({
        path: [v],
        prefix: R.prefix,
        key: R.key,
        unitless: m,
        ignore: S,
        token: I,
        scope: $
      }, function() {
        var F = $c(v, I, h), M = xc(v, I, F, {
          deprecatedTokens: b == null ? void 0 : b.deprecatedTokens
        });
        return Object.keys(F).forEach(function(V) {
          M[p(V)] = M[V], delete M[V];
        }), M;
      }), null;
    }, C = function(w) {
      var $ = r(), O = $.cssVar;
      return [function(R) {
        return y && O ? /* @__PURE__ */ B.createElement(B.Fragment, null, /* @__PURE__ */ B.createElement(E, {
          rootCls: w,
          cssVar: O,
          component: v
        }), R) : R;
      }, O == null ? void 0 : O.key];
    };
    return C;
  }
  function d(v, h, b) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, g = Array.isArray(v) ? v : [v, v], y = K(g, 1), p = y[0], S = g.join("-"), E = e.layer || {
      name: "antd"
    };
    return function(C) {
      var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : C, w = r(), $ = w.theme, O = w.realToken, R = w.hashId, _ = w.token, I = w.cssVar, F = o(), M = F.rootPrefixCls, V = F.iconPrefixCls, N = n(), P = I ? "css" : "js", T = Op(function() {
        var U = /* @__PURE__ */ new Set();
        return I && Object.keys(m.unitless || {}).forEach(function(G) {
          U.add(ha(G, I.prefix)), U.add(ha(G, Ec(p, I.prefix)));
        }), Sp(P, U);
      }, [P, p, I == null ? void 0 : I.prefix]), j = xp(P), H = j.max, L = j.min, q = {
        theme: $,
        token: _,
        hashId: R,
        nonce: function() {
          return N.nonce;
        },
        clientOnly: m.clientOnly,
        layer: E,
        // antd is always at top of styles
        order: m.order || -999
      };
      rl(z(z({}, q), {}, {
        clientOnly: !1,
        path: ["Shared", M]
      }), function() {
        return typeof a == "function" ? a(_) : [];
      });
      var k = rl(z(z({}, q), {}, {
        path: [S, C, V]
      }), function() {
        if (m.injectStyle === !1)
          return [];
        var U = Ep(_), G = U.token, le = U.flush, Y = $c(p, O, b), Q = ".".concat(C), pe = xc(p, O, Y, {
          deprecatedTokens: m.deprecatedTokens
        });
        I && Y && Be(Y) === "object" && Object.keys(Y).forEach(function(fe) {
          Y[fe] = "var(".concat(ha(fe, Ec(p, I.prefix)), ")");
        });
        var Z = Pt(G, {
          componentCls: Q,
          prefixCls: C,
          iconCls: ".".concat(V),
          antCls: ".".concat(M),
          calc: T,
          // @ts-ignore
          max: H,
          // @ts-ignore
          min: L
        }, I ? Y : pe), X = h(Z, {
          hashId: R,
          prefixCls: C,
          rootPrefixCls: M,
          iconPrefixCls: V
        });
        le(p, pe);
        var te = typeof i == "function" ? i(Z, C, x, m.resetFont) : null;
        return [m.resetStyle === !1 ? null : te, X];
      });
      return [k, R];
    };
  }
  function f(v, h, b) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, g = d(v, h, b, z({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, m)), y = function(S) {
      var E = S.prefixCls, C = S.rootCls, x = C === void 0 ? E : C;
      return g(E, x), null;
    };
    return process.env.NODE_ENV !== "production" && (y.displayName = "SubStyle_".concat(String(Array.isArray(v) ? v.join(".") : v))), y;
  }
  return {
    genStyleHooks: s,
    genSubStyleComponent: f,
    genComponentStyleHook: d
  };
}
const Lo = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], Pp = "5.20.6";
function Si(e) {
  return e >= 0 && e <= 255;
}
function la(e, t) {
  const {
    r: n,
    g: r,
    b: o,
    a
  } = new Xt(e).toRgb();
  if (a < 1)
    return e;
  const {
    r: i,
    g: l,
    b: s
  } = new Xt(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const d = Math.round((n - i * (1 - c)) / c), f = Math.round((r - l * (1 - c)) / c), v = Math.round((o - s * (1 - c)) / c);
    if (Si(d) && Si(f) && Si(v))
      return new Xt({
        r: d,
        g: f,
        b: v,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new Xt({
    r: n,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var Np = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function tf(e) {
  const {
    override: t
  } = e, n = Np(e, ["override"]), r = Object.assign({}, t);
  Object.keys(Ao).forEach((v) => {
    delete r[v];
  });
  const o = Object.assign(Object.assign({}, n), r), a = 480, i = 576, l = 768, s = 992, c = 1200, d = 1600;
  if (o.motion === !1) {
    const v = "0s";
    o.motionDurationFast = v, o.motionDurationMid = v, o.motionDurationSlow = v;
  }
  return Object.assign(Object.assign(Object.assign({}, o), {
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: la(o.colorBorderSecondary, o.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: o.colorTextQuaternary,
    colorTextDisabled: o.colorTextQuaternary,
    colorTextHeading: o.colorText,
    colorTextLabel: o.colorTextSecondary,
    colorTextDescription: o.colorTextTertiary,
    colorTextLightSolid: o.colorWhite,
    colorHighlight: o.colorError,
    colorBgTextHover: o.colorFillSecondary,
    colorBgTextActive: o.colorFill,
    colorIcon: o.colorTextTertiary,
    colorIconHover: o.colorText,
    colorErrorOutline: la(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: la(o.colorWarningBg, o.colorBgContainer),
    // Font
    fontSizeIcon: o.fontSizeSM,
    // Line
    lineWidthFocus: o.lineWidth * 4,
    // Control
    lineWidth: o.lineWidth,
    controlOutlineWidth: o.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: o.controlHeight / 2,
    controlItemBgHover: o.colorFillTertiary,
    controlItemBgActive: o.colorPrimaryBg,
    controlItemBgActiveHover: o.colorPrimaryBgHover,
    controlItemBgActiveDisabled: o.colorFill,
    controlTmpOutline: o.colorFillQuaternary,
    controlOutline: la(o.colorPrimaryBg, o.colorBgContainer),
    lineType: o.lineType,
    borderRadius: o.borderRadius,
    borderRadiusXS: o.borderRadiusXS,
    borderRadiusSM: o.borderRadiusSM,
    borderRadiusLG: o.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: o.sizeXXS,
    paddingXS: o.sizeXS,
    paddingSM: o.sizeSM,
    padding: o.size,
    paddingMD: o.sizeMD,
    paddingLG: o.sizeLG,
    paddingXL: o.sizeXL,
    paddingContentHorizontalLG: o.sizeLG,
    paddingContentVerticalLG: o.sizeMS,
    paddingContentHorizontal: o.sizeMS,
    paddingContentVertical: o.sizeSM,
    paddingContentHorizontalSM: o.size,
    paddingContentVerticalSM: o.sizeXS,
    marginXXS: o.sizeXXS,
    marginXS: o.sizeXS,
    marginSM: o.sizeSM,
    margin: o.size,
    marginMD: o.sizeMD,
    marginLG: o.sizeLG,
    marginXL: o.sizeXL,
    marginXXL: o.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: a,
    screenXSMin: a,
    screenXSMax: i - 1,
    screenSM: i,
    screenSMMin: i,
    screenSMMax: l - 1,
    screenMD: l,
    screenMDMin: l,
    screenMDMax: s - 1,
    screenLG: s,
    screenLGMin: s,
    screenLGMax: c - 1,
    screenXL: c,
    screenXLMin: c,
    screenXLMax: d - 1,
    screenXXL: d,
    screenXXLMin: d,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new Xt("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Xt("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Xt("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), r);
}
var Rc = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const nf = {
  lineHeight: !0,
  lineHeightSM: !0,
  lineHeightLG: !0,
  lineHeightHeading1: !0,
  lineHeightHeading2: !0,
  lineHeightHeading3: !0,
  lineHeightHeading4: !0,
  lineHeightHeading5: !0,
  opacityLoading: !0,
  fontWeightStrong: !0,
  zIndexPopupBase: !0,
  zIndexBase: !0,
  opacityImage: !0
}, Mp = {
  size: !0,
  sizeSM: !0,
  sizeLG: !0,
  sizeMD: !0,
  sizeXS: !0,
  sizeXXS: !0,
  sizeMS: !0,
  sizeXL: !0,
  sizeXXL: !0,
  sizeUnit: !0,
  sizeStep: !0,
  motionBase: !0,
  motionUnit: !0
}, _p = {
  screenXS: !0,
  screenXSMin: !0,
  screenXSMax: !0,
  screenSM: !0,
  screenSMMin: !0,
  screenSMMax: !0,
  screenMD: !0,
  screenMDMin: !0,
  screenMDMax: !0,
  screenLG: !0,
  screenLGMin: !0,
  screenLGMax: !0,
  screenXL: !0,
  screenXLMin: !0,
  screenXLMax: !0,
  screenXXL: !0,
  screenXXLMin: !0
}, rf = (e, t, n) => {
  const r = n.getDerivativeToken(e), {
    override: o
  } = t, a = Rc(t, ["override"]);
  let i = Object.assign(Object.assign({}, r), {
    override: o
  });
  return i = tf(i), a && Object.entries(a).forEach((l) => {
    let [s, c] = l;
    const {
      theme: d
    } = c, f = Rc(c, ["theme"]);
    let v = f;
    d && (v = rf(Object.assign(Object.assign({}, i), f), {
      override: f
    }, d)), i[s] = v;
  }), i;
};
function Nn() {
  const {
    token: e,
    hashed: t,
    theme: n,
    override: r,
    cssVar: o
  } = B.useContext(Yd), a = `${Pp}-${t || ""}`, i = n || Xd, [l, s, c] = Jm(i, [Ao, e], {
    salt: a,
    override: r,
    getComputedToken: rf,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: tf,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: nf,
      ignore: Mp,
      preserve: _p
    }
  });
  return [i, c, t ? s : "", l, o];
}
const Ma = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, un = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: e.colorText,
    fontSize: e.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: e.lineHeight,
    listStyle: "none",
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: t ? "inherit" : e.fontFamily
  };
}, Wo = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), Tp = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
}), Dp = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active, &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), Ap = (e, t, n, r) => {
  const o = `[class^="${t}"], [class*=" ${t}"]`, a = n ? `.${n}` : o, i = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let l = {};
  return r !== !1 && (l = {
    fontFamily: e.fontFamily,
    fontSize: e.fontSize
  }), {
    [a]: Object.assign(Object.assign(Object.assign({}, l), i), {
      [o]: i
    })
  };
}, Fp = (e) => ({
  outline: `${oe(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), jp = (e) => ({
  "&:focus-visible": Object.assign({}, Fp(e))
}), of = (e, t) => {
  const [n, r] = Nn();
  return rl({
    theme: n,
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, Wo()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, {
  genStyleHooks: yn,
  genComponentStyleHook: Lp,
  genSubStyleComponent: Hp
} = Ip({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = Dt(Ct);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [e, t, n, r, o] = Nn();
    return {
      theme: e,
      realToken: t,
      hashId: n,
      token: r,
      cssVar: o
    };
  },
  useCSP: () => {
    const {
      csp: e,
      iconPrefixCls: t
    } = Dt(Ct);
    return of(t, e), e ?? {};
  },
  getResetStyles: (e) => [{
    "&": Dp(e)
  }],
  getCommonStyle: Ap,
  getCompUnitless: () => nf
});
function zp(e, t) {
  return Lo.reduce((n, r) => {
    const o = e[`${r}1`], a = e[`${r}3`], i = e[`${r}6`], l = e[`${r}7`];
    return Object.assign(Object.assign({}, n), t(r, {
      lightColor: o,
      lightBorderColor: a,
      darkColor: i,
      textColor: l
    }));
  }, {});
}
const Vp = Object.assign({}, u), {
  useId: Ic
} = Vp, Bp = () => "", Wp = typeof Ic > "u" ? Bp : Ic;
function kp(e, t, n) {
  var r, o;
  const a = zt("ConfigProvider"), i = e || {}, l = i.inherit === !1 || !t ? Object.assign(Object.assign({}, yl), {
    hashed: (r = t == null ? void 0 : t.hashed) !== null && r !== void 0 ? r : yl.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, s = Wp();
  if (process.env.NODE_ENV !== "production") {
    const c = i.cssVar || l.cssVar, d = !!(typeof i.cssVar == "object" && (!((o = i.cssVar) === null || o === void 0) && o.key) || s);
    process.env.NODE_ENV !== "production" && a(!c || d, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return za(() => {
    var c, d;
    if (!e)
      return t;
    const f = Object.assign({}, l.components);
    Object.keys(e.components || {}).forEach((b) => {
      f[b] = Object.assign(Object.assign({}, f[b]), e.components[b]);
    });
    const v = `css-var-${s.replace(/:/g, "")}`, h = ((c = i.cssVar) !== null && c !== void 0 ? c : l.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: n == null ? void 0 : n.prefixCls
    }, typeof l.cssVar == "object" ? l.cssVar : {}), typeof i.cssVar == "object" ? i.cssVar : {}), {
      key: typeof i.cssVar == "object" && ((d = i.cssVar) === null || d === void 0 ? void 0 : d.key) || v
    });
    return Object.assign(Object.assign(Object.assign({}, l), i), {
      token: Object.assign(Object.assign({}, l.token), i.token),
      components: f,
      cssVar: h
    });
  }, [i, l], (c, d) => c.some((f, v) => {
    const h = d[v];
    return !Ia(f, h, !0);
  }));
}
var Up = ["children"], af = /* @__PURE__ */ u.createContext({});
function Gp(e) {
  var t = e.children, n = yt(e, Up);
  return /* @__PURE__ */ u.createElement(af.Provider, {
    value: n
  }, t);
}
var qp = /* @__PURE__ */ function(e) {
  hr(n, e);
  var t = pr(n);
  function n() {
    return Vt(this, n), t.apply(this, arguments);
  }
  return Bt(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(u.Component);
function Kp(e) {
  var t = u.useReducer(function(l) {
    return l + 1;
  }, 0), n = K(t, 2), r = n[1], o = u.useRef(e), a = $t(function() {
    return o.current;
  }), i = $t(function(l) {
    o.current = typeof l == "function" ? l(o.current) : l, r();
  });
  return [a, i];
}
var lr = "none", sa = "appear", ca = "enter", ua = "leave", Pc = "none", An = "prepare", Ur = "start", Gr = "active", ss = "end", lf = "prepared";
function Nc(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function Xp(e, t) {
  var n = {
    animationend: Nc("Animation", "AnimationEnd"),
    transitionend: Nc("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var Yp = Xp(on(), typeof window < "u" ? window : {}), sf = {};
if (on()) {
  var Qp = document.createElement("div");
  sf = Qp.style;
}
var da = {};
function cf(e) {
  if (da[e])
    return da[e];
  var t = Yp[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var a = n[o];
      if (Object.prototype.hasOwnProperty.call(t, a) && a in sf)
        return da[e] = t[a], da[e];
    }
  return "";
}
var uf = cf("animationend"), df = cf("transitionend"), ff = !!(uf && df), Mc = uf || "animationend", _c = df || "transitionend";
function Tc(e, t) {
  if (!e) return null;
  if (Be(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const Zp = function(e) {
  var t = ze();
  function n(o) {
    o && (o.removeEventListener(_c, e), o.removeEventListener(Mc, e));
  }
  function r(o) {
    t.current && t.current !== o && n(t.current), o && o !== t.current && (o.addEventListener(_c, e), o.addEventListener(Mc, e), t.current = o);
  }
  return u.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [r, n];
};
var vf = on() ? Pg : Mt;
const Jp = function() {
  var e = u.useRef(null);
  function t() {
    St.cancel(e.current);
  }
  function n(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var a = St(function() {
      o <= 1 ? r({
        isCanceled: function() {
          return a !== e.current;
        }
      }) : n(r, o - 1);
    });
    e.current = a;
  }
  return u.useEffect(function() {
    return function() {
      t();
    };
  }, []), [n, t];
};
var e0 = [An, Ur, Gr, ss], t0 = [An, lf], gf = !1, n0 = !0;
function mf(e) {
  return e === Gr || e === ss;
}
const r0 = function(e, t, n) {
  var r = jo(Pc), o = K(r, 2), a = o[0], i = o[1], l = Jp(), s = K(l, 2), c = s[0], d = s[1];
  function f() {
    i(An, !0);
  }
  var v = t ? t0 : e0;
  return vf(function() {
    if (a !== Pc && a !== ss) {
      var h = v.indexOf(a), b = v[h + 1], m = n(a);
      m === gf ? i(b, !0) : b && c(function(g) {
        function y() {
          g.isCanceled() || i(b, !0);
        }
        m === !0 ? y() : Promise.resolve(m).then(y);
      });
    }
  }, [e, a]), u.useEffect(function() {
    return function() {
      d();
    };
  }, []), [f, a];
};
function o0(e, t, n, r) {
  var o = r.motionEnter, a = o === void 0 ? !0 : o, i = r.motionAppear, l = i === void 0 ? !0 : i, s = r.motionLeave, c = s === void 0 ? !0 : s, d = r.motionDeadline, f = r.motionLeaveImmediately, v = r.onAppearPrepare, h = r.onEnterPrepare, b = r.onLeavePrepare, m = r.onAppearStart, g = r.onEnterStart, y = r.onLeaveStart, p = r.onAppearActive, S = r.onEnterActive, E = r.onLeaveActive, C = r.onAppearEnd, x = r.onEnterEnd, w = r.onLeaveEnd, $ = r.onVisibleChanged, O = jo(), R = K(O, 2), _ = R[0], I = R[1], F = Kp(lr), M = K(F, 2), V = M[0], N = M[1], P = jo(null), T = K(P, 2), j = T[0], H = T[1], L = V(), q = ze(!1), k = ze(null);
  function U() {
    return n();
  }
  var G = ze(!1);
  function le() {
    N(lr), H(null, !0);
  }
  var Y = $t(function(Re) {
    var Se = V();
    if (Se !== lr) {
      var _e = U();
      if (!(Re && !Re.deadline && Re.target !== _e)) {
        var J = G.current, re;
        Se === sa && J ? re = C == null ? void 0 : C(_e, Re) : Se === ca && J ? re = x == null ? void 0 : x(_e, Re) : Se === ua && J && (re = w == null ? void 0 : w(_e, Re)), J && re !== !1 && le();
      }
    }
  }), Q = Zp(Y), pe = K(Q, 1), Z = pe[0], X = function(Se) {
    switch (Se) {
      case sa:
        return D(D(D({}, An, v), Ur, m), Gr, p);
      case ca:
        return D(D(D({}, An, h), Ur, g), Gr, S);
      case ua:
        return D(D(D({}, An, b), Ur, y), Gr, E);
      default:
        return {};
    }
  }, te = u.useMemo(function() {
    return X(L);
  }, [L]), fe = r0(L, !e, function(Re) {
    if (Re === An) {
      var Se = te[An];
      return Se ? Se(U()) : gf;
    }
    if (ie in te) {
      var _e;
      H(((_e = te[ie]) === null || _e === void 0 ? void 0 : _e.call(te, U(), null)) || null);
    }
    return ie === Gr && L !== lr && (Z(U()), d > 0 && (clearTimeout(k.current), k.current = setTimeout(function() {
      Y({
        deadline: !0
      });
    }, d))), ie === lf && le(), n0;
  }), W = K(fe, 2), ae = W[0], ie = W[1], ue = mf(ie);
  G.current = ue, vf(function() {
    I(t);
    var Re = q.current;
    q.current = !0;
    var Se;
    !Re && t && l && (Se = sa), Re && t && a && (Se = ca), (Re && !t && c || !Re && f && !t && c) && (Se = ua);
    var _e = X(Se);
    Se && (e || _e[An]) ? (N(Se), ae()) : N(lr);
  }, [t]), Mt(function() {
    // Cancel appear
    (L === sa && !l || // Cancel enter
    L === ca && !a || // Cancel leave
    L === ua && !c) && N(lr);
  }, [l, a, c]), Mt(function() {
    return function() {
      q.current = !1, clearTimeout(k.current);
    };
  }, []);
  var ve = u.useRef(!1);
  Mt(function() {
    _ && (ve.current = !0), _ !== void 0 && L === lr && ((ve.current || _) && ($ == null || $(_)), ve.current = !0);
  }, [_, L]);
  var $e = j;
  return te[An] && ie === Ur && ($e = z({
    transition: "none"
  }, $e)), [L, ie, $e, _ ?? t];
}
function a0(e) {
  var t = e;
  Be(e) === "object" && (t = e.transitionSupport);
  function n(o, a) {
    return !!(o.motionName && t && a !== !1);
  }
  var r = /* @__PURE__ */ u.forwardRef(function(o, a) {
    var i = o.visible, l = i === void 0 ? !0 : i, s = o.removeOnLeave, c = s === void 0 ? !0 : s, d = o.forceRender, f = o.children, v = o.motionName, h = o.leavedClassName, b = o.eventProps, m = u.useContext(af), g = m.motion, y = n(o, g), p = ze(), S = ze();
    function E() {
      try {
        return p.current instanceof HTMLElement ? p.current : Co(S.current);
      } catch {
        return null;
      }
    }
    var C = o0(y, l, E, o), x = K(C, 4), w = x[0], $ = x[1], O = x[2], R = x[3], _ = u.useRef(R);
    R && (_.current = !0);
    var I = u.useCallback(function(j) {
      p.current = j, Ql(a, j);
    }, [a]), F, M = z(z({}, b), {}, {
      visible: l
    });
    if (!f)
      F = null;
    else if (w === lr)
      R ? F = f(z({}, M), I) : !c && _.current && h ? F = f(z(z({}, M), {}, {
        className: h
      }), I) : d || !c && !h ? F = f(z(z({}, M), {}, {
        style: {
          display: "none"
        }
      }), I) : F = null;
    else {
      var V;
      $ === An ? V = "prepare" : mf($) ? V = "active" : $ === Ur && (V = "start");
      var N = Tc(v, "".concat(w, "-").concat(V));
      F = f(z(z({}, M), {}, {
        className: ne(Tc(v, w), D(D({}, N, N && V), v, typeof v == "string")),
        style: O
      }), I);
    }
    if (/* @__PURE__ */ u.isValidElement(F) && Bo(F)) {
      var P = F, T = P.ref;
      T || (F = /* @__PURE__ */ u.cloneElement(F, {
        ref: I
      }));
    }
    return /* @__PURE__ */ u.createElement(qp, {
      ref: S
    }, F);
  });
  return r.displayName = "CSSMotion", r;
}
const Nr = a0(ff);
var Cl = "add", El = "keep", xl = "remove", Ci = "removed";
function i0(e) {
  var t;
  return e && Be(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, z(z({}, t), {}, {
    key: String(t.key)
  });
}
function wl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(i0);
}
function l0() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, o = t.length, a = wl(e), i = wl(t);
  a.forEach(function(c) {
    for (var d = !1, f = r; f < o; f += 1) {
      var v = i[f];
      if (v.key === c.key) {
        r < f && (n = n.concat(i.slice(r, f).map(function(h) {
          return z(z({}, h), {}, {
            status: Cl
          });
        })), r = f), n.push(z(z({}, v), {}, {
          status: El
        })), r += 1, d = !0;
        break;
      }
    }
    d || n.push(z(z({}, c), {}, {
      status: xl
    }));
  }), r < o && (n = n.concat(i.slice(r).map(function(c) {
    return z(z({}, c), {}, {
      status: Cl
    });
  })));
  var l = {};
  n.forEach(function(c) {
    var d = c.key;
    l[d] = (l[d] || 0) + 1;
  });
  var s = Object.keys(l).filter(function(c) {
    return l[c] > 1;
  });
  return s.forEach(function(c) {
    n = n.filter(function(d) {
      var f = d.key, v = d.status;
      return f !== c || v !== xl;
    }), n.forEach(function(d) {
      d.key === c && (d.status = El);
    });
  }), n;
}
var s0 = ["component", "children", "onVisibleChanged", "onAllRemoved"], c0 = ["status"], u0 = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function d0(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Nr, n = /* @__PURE__ */ function(r) {
    hr(a, r);
    var o = pr(a);
    function a() {
      var i;
      Vt(this, a);
      for (var l = arguments.length, s = new Array(l), c = 0; c < l; c++)
        s[c] = arguments[c];
      return i = o.call.apply(o, [this].concat(s)), D(ht(i), "state", {
        keyEntities: []
      }), D(ht(i), "removeKey", function(d) {
        i.setState(function(f) {
          var v = f.keyEntities.map(function(h) {
            return h.key !== d ? h : z(z({}, h), {}, {
              status: Ci
            });
          });
          return {
            keyEntities: v
          };
        }, function() {
          var f = i.state.keyEntities, v = f.filter(function(h) {
            var b = h.status;
            return b !== Ci;
          }).length;
          v === 0 && i.props.onAllRemoved && i.props.onAllRemoved();
        });
      }), i;
    }
    return Bt(a, [{
      key: "render",
      value: function() {
        var l = this, s = this.state.keyEntities, c = this.props, d = c.component, f = c.children, v = c.onVisibleChanged;
        c.onAllRemoved;
        var h = yt(c, s0), b = d || u.Fragment, m = {};
        return u0.forEach(function(g) {
          m[g] = h[g], delete h[g];
        }), delete h.keys, /* @__PURE__ */ u.createElement(b, h, s.map(function(g, y) {
          var p = g.status, S = yt(g, c0), E = p === Cl || p === El;
          return /* @__PURE__ */ u.createElement(t, ke({}, m, {
            key: S.key,
            visible: E,
            eventProps: S,
            onVisibleChanged: function(x) {
              v == null || v(x, {
                key: S.key
              }), x || l.removeKey(S.key);
            }
          }), function(C, x) {
            return f(z(z({}, C), {}, {
              index: y
            }), x);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(l, s) {
        var c = l.keys, d = s.keyEntities, f = wl(c), v = l0(d, f);
        return {
          keyEntities: v.filter(function(h) {
            var b = d.find(function(m) {
              var g = m.key;
              return h.key === g;
            });
            return !(b && b.status === Ci && h.status === xl);
          })
        };
      }
    }]), a;
  }(u.Component);
  return D(n, "defaultProps", {
    component: "div"
  }), n;
}
d0(ff);
function f0(e) {
  const {
    children: t
  } = e, [, n] = Nn(), {
    motion: r
  } = n, o = u.useRef(!1);
  return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ u.createElement(Gp, {
    motion: r
  }, t) : t;
}
const hf = /* @__PURE__ */ u.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return zt("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (hf.displayName = "PropWarning");
const v0 = process.env.NODE_ENV !== "production" ? hf : () => null;
var g0 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let $l = !1;
process.env.NODE_ENV;
const m0 = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let pf;
function h0() {
  return pf || Fo;
}
function p0(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const b0 = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r,
    holderRender: o
  } = e;
  t !== void 0 && (pf = t), r && p0(r) && (process.env.NODE_ENV !== "production" && Ka(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), vp(h0(), r));
}, y0 = (e) => {
  const {
    children: t,
    csp: n,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: a,
    form: i,
    locale: l,
    componentSize: s,
    direction: c,
    space: d,
    virtual: f,
    dropdownMatchSelectWidth: v,
    popupMatchSelectWidth: h,
    popupOverflow: b,
    legacyLocale: m,
    parentContext: g,
    iconPrefixCls: y,
    theme: p,
    componentDisabled: S,
    segmented: E,
    statistic: C,
    spin: x,
    calendar: w,
    carousel: $,
    cascader: O,
    collapse: R,
    typography: _,
    checkbox: I,
    descriptions: F,
    divider: M,
    drawer: V,
    skeleton: N,
    steps: P,
    image: T,
    layout: j,
    list: H,
    mentions: L,
    modal: q,
    progress: k,
    result: U,
    slider: G,
    breadcrumb: le,
    menu: Y,
    pagination: Q,
    input: pe,
    textArea: Z,
    empty: X,
    badge: te,
    radio: fe,
    rate: W,
    switch: ae,
    transfer: ie,
    avatar: ue,
    message: ve,
    tag: $e,
    table: Re,
    card: Se,
    tabs: _e,
    timeline: J,
    timePicker: re,
    upload: ge,
    notification: be,
    tree: Ie,
    colorPicker: Me,
    datePicker: Ue,
    rangePicker: rt,
    flex: ct,
    wave: ft,
    dropdown: De,
    warning: Te,
    tour: Ye,
    floatButtonGroup: Je,
    variant: et,
    inputNumber: lt,
    treeSelect: It
  } = e, mt = u.useCallback((Qe, Pe) => {
    const {
      prefixCls: Oe
    } = e;
    if (Pe)
      return Pe;
    const Ne = Oe || g.getPrefixCls("");
    return Qe ? `${Ne}-${Qe}` : Ne;
  }, [g.getPrefixCls, e.prefixCls]), vt = y || g.iconPrefixCls || Qd, Fe = n || g.csp;
  of(vt, Fe);
  const Ee = kp(p, g.theme, {
    prefixCls: mt("")
  });
  process.env.NODE_ENV !== "production" && ($l = $l || !!Ee);
  const Ve = {
    csp: Fe,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: a,
    locale: l || m,
    direction: c,
    space: d,
    virtual: f,
    popupMatchSelectWidth: h ?? v,
    popupOverflow: b,
    getPrefixCls: mt,
    iconPrefixCls: vt,
    theme: Ee,
    segmented: E,
    statistic: C,
    spin: x,
    calendar: w,
    carousel: $,
    cascader: O,
    collapse: R,
    typography: _,
    checkbox: I,
    descriptions: F,
    divider: M,
    drawer: V,
    skeleton: N,
    steps: P,
    image: T,
    input: pe,
    textArea: Z,
    layout: j,
    list: H,
    mentions: L,
    modal: q,
    progress: k,
    result: U,
    slider: G,
    breadcrumb: le,
    menu: Y,
    pagination: Q,
    empty: X,
    badge: te,
    radio: fe,
    rate: W,
    switch: ae,
    transfer: ie,
    avatar: ue,
    message: ve,
    tag: $e,
    table: Re,
    card: Se,
    tabs: _e,
    timeline: J,
    timePicker: re,
    upload: ge,
    notification: be,
    tree: Ie,
    colorPicker: Me,
    datePicker: Ue,
    rangePicker: rt,
    flex: ct,
    wave: ft,
    dropdown: De,
    warning: Te,
    tour: Ye,
    floatButtonGroup: Je,
    variant: et,
    inputNumber: lt,
    treeSelect: It
  };
  process.env.NODE_ENV !== "production" && zt("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const je = Object.assign({}, g);
  Object.keys(Ve).forEach((Qe) => {
    Ve[Qe] !== void 0 && (je[Qe] = Ve[Qe]);
  }), m0.forEach((Qe) => {
    const Pe = e[Qe];
    Pe && (je[Qe] = Pe);
  }), typeof r < "u" && (je.button = Object.assign({
    autoInsertSpace: r
  }, je.button));
  const qe = za(() => je, je, (Qe, Pe) => {
    const Oe = Object.keys(Qe), Ne = Object.keys(Pe);
    return Oe.length !== Ne.length || Oe.some((Le) => Qe[Le] !== Pe[Le]);
  }), Ae = u.useMemo(() => ({
    prefixCls: vt,
    csp: Fe
  }), [vt, Fe]);
  let ce = /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(v0, {
    dropdownMatchSelectWidth: v
  }), t);
  const We = u.useMemo(() => {
    var Qe, Pe, Oe, Ne;
    return kr(((Qe = eo.Form) === null || Qe === void 0 ? void 0 : Qe.defaultValidateMessages) || {}, ((Oe = (Pe = qe.locale) === null || Pe === void 0 ? void 0 : Pe.Form) === null || Oe === void 0 ? void 0 : Oe.defaultValidateMessages) || {}, ((Ne = qe.form) === null || Ne === void 0 ? void 0 : Ne.validateMessages) || {}, (i == null ? void 0 : i.validateMessages) || {});
  }, [qe, i == null ? void 0 : i.validateMessages]);
  Object.keys(We).length > 0 && (ce = /* @__PURE__ */ u.createElement(_h.Provider, {
    value: We
  }, ce)), l && (ce = /* @__PURE__ */ u.createElement(kd, {
    locale: l,
    _ANT_MARK__: Wd
  }, ce)), (vt || Fe) && (ce = /* @__PURE__ */ u.createElement(as.Provider, {
    value: Ae
  }, ce)), s && (ce = /* @__PURE__ */ u.createElement(mp, {
    size: s
  }, ce)), ce = /* @__PURE__ */ u.createElement(f0, null, ce);
  const dt = u.useMemo(() => {
    const Qe = Ee || {}, {
      algorithm: Pe,
      token: Oe,
      components: Ne,
      cssVar: Le
    } = Qe, tt = g0(Qe, ["algorithm", "token", "components", "cssVar"]), gt = Pe && (!Array.isArray(Pe) || Pe.length > 0) ? Zi(Pe) : Xd, A = {};
    Object.entries(Ne || {}).forEach((me) => {
      let [we, Ge] = me;
      const Ke = Object.assign({}, Ge);
      "algorithm" in Ke && (Ke.algorithm === !0 ? Ke.theme = gt : (Array.isArray(Ke.algorithm) || typeof Ke.algorithm == "function") && (Ke.theme = Zi(Ke.algorithm)), delete Ke.algorithm), A[we] = Ke;
    });
    const ee = Object.assign(Object.assign({}, Ao), Oe);
    return Object.assign(Object.assign({}, tt), {
      theme: gt,
      token: ee,
      components: A,
      override: Object.assign({
        override: ee
      }, A),
      cssVar: Le
    });
  }, [Ee]);
  return p && (ce = /* @__PURE__ */ u.createElement(Yd.Provider, {
    value: dt
  }, ce)), qe.warning && (ce = /* @__PURE__ */ u.createElement(Vd.Provider, {
    value: qe.warning
  }, ce)), S !== void 0 && (ce = /* @__PURE__ */ u.createElement(gp, {
    disabled: S
  }, ce)), /* @__PURE__ */ u.createElement(Ct.Provider, {
    value: qe
  }, ce);
}, br = (e) => {
  const t = u.useContext(Ct), n = u.useContext(ls);
  return /* @__PURE__ */ u.createElement(y0, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
br.ConfigContext = Ct;
br.SizeContext = to;
br.config = b0;
br.useConfig = hp;
Object.defineProperty(br, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Ka(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), to)
});
process.env.NODE_ENV !== "production" && (br.displayName = "ConfigProvider");
function bf(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function S0(e) {
  return bf(e) instanceof ShadowRoot;
}
function _a(e) {
  return S0(e) ? bf(e) : null;
}
function C0(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function E0(e, t) {
  ut(e, "[@ant-design/icons] ".concat(t));
}
function Dc(e) {
  return Be(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (Be(e.icon) === "object" || typeof e.icon == "function");
}
function Ac() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[C0(n)] = r;
    }
    return t;
  }, {});
}
function Ol(e, t, n) {
  return n ? /* @__PURE__ */ B.createElement(e.tag, z(z({
    key: t
  }, Ac(e.attrs)), n), (e.children || []).map(function(r, o) {
    return Ol(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ B.createElement(e.tag, z({
    key: t
  }, Ac(e.attrs)), (e.children || []).map(function(r, o) {
    return Ol(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function yf(e) {
  return Do(e)[0];
}
function Sf(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var x0 = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, w0 = function(t) {
  var n = Dt(as), r = n.csp, o = n.prefixCls, a = x0;
  o && (a = a.replace(/anticon/g, o)), Mt(function() {
    var i = t.current, l = _a(i);
    Zn(a, "@ant-design-icons", {
      prepend: !0,
      csp: r,
      attachTo: l
    });
  }, []);
}, $0 = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], wo = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function O0(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  wo.primaryColor = t, wo.secondaryColor = n || yf(t), wo.calculated = !!n;
}
function R0() {
  return z({}, wo);
}
var ao = function(t) {
  var n = t.icon, r = t.className, o = t.onClick, a = t.style, i = t.primaryColor, l = t.secondaryColor, s = yt(t, $0), c = u.useRef(), d = wo;
  if (i && (d = {
    primaryColor: i,
    secondaryColor: l || yf(i)
  }), w0(c), E0(Dc(n), "icon should be icon definiton, but got ".concat(n)), !Dc(n))
    return null;
  var f = n;
  return f && typeof f.icon == "function" && (f = z(z({}, f), {}, {
    icon: f.icon(d.primaryColor, d.secondaryColor)
  })), Ol(f.icon, "svg-".concat(f.name), z(z({
    className: r,
    onClick: o,
    style: a,
    "data-icon": f.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, s), {}, {
    ref: c
  }));
};
ao.displayName = "IconReact";
ao.getTwoToneColors = R0;
ao.setTwoToneColors = O0;
function Cf(e) {
  var t = Sf(e), n = K(t, 2), r = n[0], o = n[1];
  return ao.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function I0() {
  var e = ao.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var P0 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Cf(Na.primary);
var Sn = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.className, r = e.icon, o = e.spin, a = e.rotate, i = e.tabIndex, l = e.onClick, s = e.twoToneColor, c = yt(e, P0), d = u.useContext(as), f = d.prefixCls, v = f === void 0 ? "anticon" : f, h = d.rootClassName, b = ne(h, v, D(D({}, "".concat(v, "-").concat(r.name), !!r.name), "".concat(v, "-spin"), !!o || r.name === "loading"), n), m = i;
  m === void 0 && l && (m = -1);
  var g = a ? {
    msTransform: "rotate(".concat(a, "deg)"),
    transform: "rotate(".concat(a, "deg)")
  } : void 0, y = Sf(s), p = K(y, 2), S = p[0], E = p[1];
  return /* @__PURE__ */ u.createElement("span", ke({
    role: "img",
    "aria-label": r.name
  }, c, {
    ref: t,
    tabIndex: m,
    onClick: l,
    className: b
  }), /* @__PURE__ */ u.createElement(ao, {
    icon: r,
    primaryColor: S,
    secondaryColor: E,
    style: g
  }));
});
Sn.displayName = "AntdIcon";
Sn.getTwoToneColor = I0;
Sn.setTwoToneColor = Cf;
var N0 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, M0 = function(t, n) {
  return /* @__PURE__ */ u.createElement(Sn, ke({}, t, {
    ref: n,
    icon: N0
  }));
}, cs = /* @__PURE__ */ u.forwardRef(M0);
process.env.NODE_ENV !== "production" && (cs.displayName = "CloseCircleFilled");
var _0 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, T0 = function(t, n) {
  return /* @__PURE__ */ u.createElement(Sn, ke({}, t, {
    ref: n,
    icon: _0
  }));
}, Ef = /* @__PURE__ */ u.forwardRef(T0);
process.env.NODE_ENV !== "production" && (Ef.displayName = "CloseOutlined");
var D0 = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`, A0 = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, F0 = "".concat(D0, " ").concat(A0).split(/[\s\n]+/), j0 = "aria-", L0 = "data-";
function Fc(e, t) {
  return e.indexOf(t) === 0;
}
function Ir(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = z({}, t);
  var r = {};
  return Object.keys(e).forEach(function(o) {
    // Aria
    (n.aria && (o === "role" || Fc(o, j0)) || // Data
    n.data && Fc(o, L0) || // Attr
    n.attr && F0.includes(o)) && (r[o] = e[o]);
  }), r;
}
function xf(e) {
  return e && /* @__PURE__ */ B.isValidElement(e) && e.type === B.Fragment;
}
const H0 = (e, t, n) => /* @__PURE__ */ B.isValidElement(e) ? /* @__PURE__ */ B.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n) : t;
function mr(e, t) {
  return H0(e, e, t);
}
const io = (e) => {
  const [, , , , t] = Nn();
  return t ? `${e}-css-var` : "";
};
var se = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function(t) {
    var n = t.keyCode;
    if (t.altKey && !t.ctrlKey || t.metaKey || // Function keys don't generate text
    n >= se.F1 && n <= se.F12)
      return !1;
    switch (n) {
      case se.ALT:
      case se.CAPS_LOCK:
      case se.CONTEXT_MENU:
      case se.CTRL:
      case se.DOWN:
      case se.END:
      case se.ESC:
      case se.HOME:
      case se.INSERT:
      case se.LEFT:
      case se.MAC_FF_META:
      case se.META:
      case se.NUMLOCK:
      case se.NUM_CENTER:
      case se.PAGE_DOWN:
      case se.PAGE_UP:
      case se.PAUSE:
      case se.PRINT_SCREEN:
      case se.RIGHT:
      case se.SHIFT:
      case se.UP:
      case se.WIN_KEY:
      case se.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= se.ZERO && t <= se.NINE || t >= se.NUM_ZERO && t <= se.NUM_MULTIPLY || t >= se.A && t <= se.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case se.SPACE:
      case se.QUESTION_MARK:
      case se.NUM_PLUS:
      case se.NUM_MINUS:
      case se.NUM_PERIOD:
      case se.NUM_DIVISION:
      case se.SEMICOLON:
      case se.DASH:
      case se.EQUALS:
      case se.COMMA:
      case se.PERIOD:
      case se.SLASH:
      case se.APOSTROPHE:
      case se.SINGLE_QUOTE:
      case se.OPEN_SQUARE_BRACKET:
      case se.BACKSLASH:
      case se.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, z0 = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, V0 = function(t, n) {
  return /* @__PURE__ */ u.createElement(Sn, ke({}, t, {
    ref: n,
    icon: z0
  }));
}, us = /* @__PURE__ */ u.forwardRef(V0);
process.env.NODE_ENV !== "production" && (us.displayName = "LoadingOutlined");
const ds = /* @__PURE__ */ B.createContext(void 0);
process.env.NODE_ENV !== "production" && (ds.displayName = "zIndexContext");
const Sr = 100, B0 = 10, W0 = Sr * B0, wf = {
  Modal: Sr,
  Drawer: Sr,
  Popover: Sr,
  Popconfirm: Sr,
  Tooltip: Sr,
  Tour: Sr
}, k0 = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function U0(e) {
  return e in wf;
}
function $f(e, t) {
  const [, n] = Nn(), r = B.useContext(ds), o = U0(e);
  let a;
  if (t !== void 0)
    a = [t, t];
  else {
    let i = r ?? 0;
    o ? i += // Use preset token zIndex by default but not stack when has parent container
    (r ? 0 : n.zIndexPopupBase) + // Container offset
    wf[e] : i += k0[e], a = [r === void 0 ? t : i, i];
  }
  if (process.env.NODE_ENV !== "production") {
    const i = zt(e), l = n.zIndexPopupBase + W0, s = a[0] || 0;
    process.env.NODE_ENV !== "production" && i(t !== void 0 || s <= l, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.");
  }
  return a;
}
function ln() {
  ln = function() {
    return t;
  };
  var e, t = {}, n = Object.prototype, r = n.hasOwnProperty, o = Object.defineProperty || function(N, P, T) {
    N[P] = T.value;
  }, a = typeof Symbol == "function" ? Symbol : {}, i = a.iterator || "@@iterator", l = a.asyncIterator || "@@asyncIterator", s = a.toStringTag || "@@toStringTag";
  function c(N, P, T) {
    return Object.defineProperty(N, P, {
      value: T,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), N[P];
  }
  try {
    c({}, "");
  } catch {
    c = function(T, j, H) {
      return T[j] = H;
    };
  }
  function d(N, P, T, j) {
    var H = P && P.prototype instanceof y ? P : y, L = Object.create(H.prototype), q = new M(j || []);
    return o(L, "_invoke", {
      value: R(N, T, q)
    }), L;
  }
  function f(N, P, T) {
    try {
      return {
        type: "normal",
        arg: N.call(P, T)
      };
    } catch (j) {
      return {
        type: "throw",
        arg: j
      };
    }
  }
  t.wrap = d;
  var v = "suspendedStart", h = "suspendedYield", b = "executing", m = "completed", g = {};
  function y() {
  }
  function p() {
  }
  function S() {
  }
  var E = {};
  c(E, i, function() {
    return this;
  });
  var C = Object.getPrototypeOf, x = C && C(C(V([])));
  x && x !== n && r.call(x, i) && (E = x);
  var w = S.prototype = y.prototype = Object.create(E);
  function $(N) {
    ["next", "throw", "return"].forEach(function(P) {
      c(N, P, function(T) {
        return this._invoke(P, T);
      });
    });
  }
  function O(N, P) {
    function T(H, L, q, k) {
      var U = f(N[H], N, L);
      if (U.type !== "throw") {
        var G = U.arg, le = G.value;
        return le && Be(le) == "object" && r.call(le, "__await") ? P.resolve(le.__await).then(function(Y) {
          T("next", Y, q, k);
        }, function(Y) {
          T("throw", Y, q, k);
        }) : P.resolve(le).then(function(Y) {
          G.value = Y, q(G);
        }, function(Y) {
          return T("throw", Y, q, k);
        });
      }
      k(U.arg);
    }
    var j;
    o(this, "_invoke", {
      value: function(L, q) {
        function k() {
          return new P(function(U, G) {
            T(L, q, U, G);
          });
        }
        return j = j ? j.then(k, k) : k();
      }
    });
  }
  function R(N, P, T) {
    var j = v;
    return function(H, L) {
      if (j === b) throw Error("Generator is already running");
      if (j === m) {
        if (H === "throw") throw L;
        return {
          value: e,
          done: !0
        };
      }
      for (T.method = H, T.arg = L; ; ) {
        var q = T.delegate;
        if (q) {
          var k = _(q, T);
          if (k) {
            if (k === g) continue;
            return k;
          }
        }
        if (T.method === "next") T.sent = T._sent = T.arg;
        else if (T.method === "throw") {
          if (j === v) throw j = m, T.arg;
          T.dispatchException(T.arg);
        } else T.method === "return" && T.abrupt("return", T.arg);
        j = b;
        var U = f(N, P, T);
        if (U.type === "normal") {
          if (j = T.done ? m : h, U.arg === g) continue;
          return {
            value: U.arg,
            done: T.done
          };
        }
        U.type === "throw" && (j = m, T.method = "throw", T.arg = U.arg);
      }
    };
  }
  function _(N, P) {
    var T = P.method, j = N.iterator[T];
    if (j === e) return P.delegate = null, T === "throw" && N.iterator.return && (P.method = "return", P.arg = e, _(N, P), P.method === "throw") || T !== "return" && (P.method = "throw", P.arg = new TypeError("The iterator does not provide a '" + T + "' method")), g;
    var H = f(j, N.iterator, P.arg);
    if (H.type === "throw") return P.method = "throw", P.arg = H.arg, P.delegate = null, g;
    var L = H.arg;
    return L ? L.done ? (P[N.resultName] = L.value, P.next = N.nextLoc, P.method !== "return" && (P.method = "next", P.arg = e), P.delegate = null, g) : L : (P.method = "throw", P.arg = new TypeError("iterator result is not an object"), P.delegate = null, g);
  }
  function I(N) {
    var P = {
      tryLoc: N[0]
    };
    1 in N && (P.catchLoc = N[1]), 2 in N && (P.finallyLoc = N[2], P.afterLoc = N[3]), this.tryEntries.push(P);
  }
  function F(N) {
    var P = N.completion || {};
    P.type = "normal", delete P.arg, N.completion = P;
  }
  function M(N) {
    this.tryEntries = [{
      tryLoc: "root"
    }], N.forEach(I, this), this.reset(!0);
  }
  function V(N) {
    if (N || N === "") {
      var P = N[i];
      if (P) return P.call(N);
      if (typeof N.next == "function") return N;
      if (!isNaN(N.length)) {
        var T = -1, j = function H() {
          for (; ++T < N.length; ) if (r.call(N, T)) return H.value = N[T], H.done = !1, H;
          return H.value = e, H.done = !0, H;
        };
        return j.next = j;
      }
    }
    throw new TypeError(Be(N) + " is not iterable");
  }
  return p.prototype = S, o(w, "constructor", {
    value: S,
    configurable: !0
  }), o(S, "constructor", {
    value: p,
    configurable: !0
  }), p.displayName = c(S, s, "GeneratorFunction"), t.isGeneratorFunction = function(N) {
    var P = typeof N == "function" && N.constructor;
    return !!P && (P === p || (P.displayName || P.name) === "GeneratorFunction");
  }, t.mark = function(N) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(N, S) : (N.__proto__ = S, c(N, s, "GeneratorFunction")), N.prototype = Object.create(w), N;
  }, t.awrap = function(N) {
    return {
      __await: N
    };
  }, $(O.prototype), c(O.prototype, l, function() {
    return this;
  }), t.AsyncIterator = O, t.async = function(N, P, T, j, H) {
    H === void 0 && (H = Promise);
    var L = new O(d(N, P, T, j), H);
    return t.isGeneratorFunction(P) ? L : L.next().then(function(q) {
      return q.done ? q.value : L.next();
    });
  }, $(w), c(w, s, "Generator"), c(w, i, function() {
    return this;
  }), c(w, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(N) {
    var P = Object(N), T = [];
    for (var j in P) T.push(j);
    return T.reverse(), function H() {
      for (; T.length; ) {
        var L = T.pop();
        if (L in P) return H.value = L, H.done = !1, H;
      }
      return H.done = !0, H;
    };
  }, t.values = V, M.prototype = {
    constructor: M,
    reset: function(P) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(F), !P) for (var T in this) T.charAt(0) === "t" && r.call(this, T) && !isNaN(+T.slice(1)) && (this[T] = e);
    },
    stop: function() {
      this.done = !0;
      var P = this.tryEntries[0].completion;
      if (P.type === "throw") throw P.arg;
      return this.rval;
    },
    dispatchException: function(P) {
      if (this.done) throw P;
      var T = this;
      function j(G, le) {
        return q.type = "throw", q.arg = P, T.next = G, le && (T.method = "next", T.arg = e), !!le;
      }
      for (var H = this.tryEntries.length - 1; H >= 0; --H) {
        var L = this.tryEntries[H], q = L.completion;
        if (L.tryLoc === "root") return j("end");
        if (L.tryLoc <= this.prev) {
          var k = r.call(L, "catchLoc"), U = r.call(L, "finallyLoc");
          if (k && U) {
            if (this.prev < L.catchLoc) return j(L.catchLoc, !0);
            if (this.prev < L.finallyLoc) return j(L.finallyLoc);
          } else if (k) {
            if (this.prev < L.catchLoc) return j(L.catchLoc, !0);
          } else {
            if (!U) throw Error("try statement without catch or finally");
            if (this.prev < L.finallyLoc) return j(L.finallyLoc);
          }
        }
      }
    },
    abrupt: function(P, T) {
      for (var j = this.tryEntries.length - 1; j >= 0; --j) {
        var H = this.tryEntries[j];
        if (H.tryLoc <= this.prev && r.call(H, "finallyLoc") && this.prev < H.finallyLoc) {
          var L = H;
          break;
        }
      }
      L && (P === "break" || P === "continue") && L.tryLoc <= T && T <= L.finallyLoc && (L = null);
      var q = L ? L.completion : {};
      return q.type = P, q.arg = T, L ? (this.method = "next", this.next = L.finallyLoc, g) : this.complete(q);
    },
    complete: function(P, T) {
      if (P.type === "throw") throw P.arg;
      return P.type === "break" || P.type === "continue" ? this.next = P.arg : P.type === "return" ? (this.rval = this.arg = P.arg, this.method = "return", this.next = "end") : P.type === "normal" && T && (this.next = T), g;
    },
    finish: function(P) {
      for (var T = this.tryEntries.length - 1; T >= 0; --T) {
        var j = this.tryEntries[T];
        if (j.finallyLoc === P) return this.complete(j.completion, j.afterLoc), F(j), g;
      }
    },
    catch: function(P) {
      for (var T = this.tryEntries.length - 1; T >= 0; --T) {
        var j = this.tryEntries[T];
        if (j.tryLoc === P) {
          var H = j.completion;
          if (H.type === "throw") {
            var L = H.arg;
            F(j);
          }
          return L;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function(P, T, j) {
      return this.delegate = {
        iterator: V(P),
        resultName: T,
        nextLoc: j
      }, this.method === "next" && (this.arg = e), g;
    }
  }, t;
}
function jc(e, t, n, r, o, a, i) {
  try {
    var l = e[a](i), s = l.value;
  } catch (c) {
    return void n(c);
  }
  l.done ? t(s) : Promise.resolve(s).then(r, o);
}
function Mr(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, o) {
      var a = e.apply(t, n);
      function i(s) {
        jc(a, r, o, i, l, "next", s);
      }
      function l(s) {
        jc(a, r, o, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var ko = z({}, Tg), G0 = ko.version, q0 = ko.render, K0 = ko.unmountComponentAtNode, Ya;
try {
  var X0 = Number((G0 || "").split(".")[0]);
  X0 >= 18 && (Ya = ko.createRoot);
} catch {
}
function Lc(e) {
  var t = ko.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && Be(t) === "object" && (t.usingClientEntryPoint = e);
}
var Ta = "__rc_react_root__";
function Y0(e, t) {
  Lc(!0);
  var n = t[Ta] || Ya(t);
  Lc(!1), n.render(e), t[Ta] = n;
}
function Q0(e, t) {
  q0(e, t);
}
function Z0(e, t) {
  if (Ya) {
    Y0(e, t);
    return;
  }
  Q0(e, t);
}
function J0(e) {
  return Rl.apply(this, arguments);
}
function Rl() {
  return Rl = Mr(/* @__PURE__ */ ln().mark(function e(t) {
    return ln().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.resolve().then(function() {
            var o;
            (o = t[Ta]) === null || o === void 0 || o.unmount(), delete t[Ta];
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), Rl.apply(this, arguments);
}
function eb(e) {
  K0(e);
}
function tb(e) {
  return Il.apply(this, arguments);
}
function Il() {
  return Il = Mr(/* @__PURE__ */ ln().mark(function e(t) {
    return ln().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          if (Ya === void 0) {
            r.next = 2;
            break;
          }
          return r.abrupt("return", J0(t));
        case 2:
          eb(t);
        case 3:
        case "end":
          return r.stop();
      }
    }, e);
  })), Il.apply(this, arguments);
}
const Ei = () => ({
  height: 0,
  opacity: 0
}), Hc = (e) => {
  const {
    scrollHeight: t
  } = e;
  return {
    height: t,
    opacity: 1
  };
}, nb = (e) => ({
  height: e ? e.offsetHeight : 0
}), xi = (e, t) => (t == null ? void 0 : t.deadline) === !0 || t.propertyName === "height", rb = function() {
  return {
    motionName: `${arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Fo}-motion-collapse`,
    onAppearStart: Ei,
    onEnterStart: Ei,
    onAppearActive: Hc,
    onEnterActive: Hc,
    onLeaveStart: nb,
    onLeaveActive: Ei,
    onAppearEnd: xi,
    onEnterEnd: xi,
    onLeaveEnd: xi,
    motionDeadline: 500
  };
}, fs = (e, t, n) => n !== void 0 ? n : `${e}-${t}`, Of = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), n = t.width, r = t.height;
      if (n || r)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var o = e.getBoundingClientRect(), a = o.width, i = o.height;
      if (a || i)
        return !0;
    }
  }
  return !1;
}, ob = (e) => {
  const {
    componentCls: t,
    colorPrimary: n
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${n})`,
      boxShadow: "0 0 0 0 currentcolor",
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: "0 0 0 6px currentcolor",
          opacity: 0
        },
        "&.wave-quick": {
          transition: [`box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`, `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`].join(",")
        }
      }
    }
  };
}, ab = Lp("Wave", (e) => [ob(e)]), Rf = `${Fo}-wave-target`;
function ib(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function wi(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && ib(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function lb(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: r
  } = getComputedStyle(e);
  return wi(t) ? t : wi(n) ? n : wi(r) ? r : null;
}
function $i(e) {
  return Number.isNaN(e) ? 0 : e;
}
const sb = (e) => {
  const {
    className: t,
    target: n,
    component: r
  } = e, o = u.useRef(null), [a, i] = u.useState(null), [l, s] = u.useState([]), [c, d] = u.useState(0), [f, v] = u.useState(0), [h, b] = u.useState(0), [m, g] = u.useState(0), [y, p] = u.useState(!1), S = {
    left: c,
    top: f,
    width: h,
    height: m,
    borderRadius: l.map((x) => `${x}px`).join(" ")
  };
  a && (S["--wave-color"] = a);
  function E() {
    const x = getComputedStyle(n);
    i(lb(n));
    const w = x.position === "static", {
      borderLeftWidth: $,
      borderTopWidth: O
    } = x;
    d(w ? n.offsetLeft : $i(-parseFloat($))), v(w ? n.offsetTop : $i(-parseFloat(O))), b(n.offsetWidth), g(n.offsetHeight);
    const {
      borderTopLeftRadius: R,
      borderTopRightRadius: _,
      borderBottomLeftRadius: I,
      borderBottomRightRadius: F
    } = x;
    s([R, _, F, I].map((M) => $i(parseFloat(M))));
  }
  if (u.useEffect(() => {
    if (n) {
      const x = St(() => {
        E(), p(!0);
      });
      let w;
      return typeof ResizeObserver < "u" && (w = new ResizeObserver(E), w.observe(n)), () => {
        St.cancel(x), w == null || w.disconnect();
      };
    }
  }, []), !y)
    return null;
  const C = (r === "Checkbox" || r === "Radio") && (n == null ? void 0 : n.classList.contains(Rf));
  return /* @__PURE__ */ u.createElement(Nr, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (x, w) => {
      var $;
      if (w.deadline || w.propertyName === "opacity") {
        const O = ($ = o.current) === null || $ === void 0 ? void 0 : $.parentElement;
        tb(O).then(() => {
          O == null || O.remove();
        });
      }
      return !1;
    }
  }, (x, w) => {
    let {
      className: $
    } = x;
    return /* @__PURE__ */ u.createElement("div", {
      ref: bn(o, w),
      className: ne(t, $, {
        "wave-quick": C
      }),
      style: S
    });
  });
}, cb = (e, t) => {
  var n;
  const {
    component: r
  } = t;
  if (r === "Checkbox" && !(!((n = e.querySelector("input")) === null || n === void 0) && n.checked))
    return;
  const o = document.createElement("div");
  o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", e == null || e.insertBefore(o, e == null ? void 0 : e.firstChild), Z0(/* @__PURE__ */ u.createElement(sb, Object.assign({}, t, {
    target: e
  })), o);
}, ub = (e, t, n) => {
  const {
    wave: r
  } = u.useContext(Ct), [, o, a] = Nn(), i = $t((c) => {
    const d = e.current;
    if (r != null && r.disabled || !d)
      return;
    const f = d.querySelector(`.${Rf}`) || d, {
      showEffect: v
    } = r || {};
    (v || cb)(f, {
      className: t,
      token: o,
      component: n,
      event: c,
      hashId: a
    });
  }), l = u.useRef();
  return (c) => {
    St.cancel(l.current), l.current = St(() => {
      i(c);
    });
  };
}, If = (e) => {
  const {
    children: t,
    disabled: n,
    component: r
  } = e, {
    getPrefixCls: o
  } = Dt(Ct), a = ze(null), i = o("wave"), [, l] = ab(i), s = ub(a, ne(i, l), r);
  if (B.useEffect(() => {
    const d = a.current;
    if (!d || d.nodeType !== 1 || n)
      return;
    const f = (v) => {
      !Of(v.target) || // No need wave
      !d.getAttribute || d.getAttribute("disabled") || d.disabled || d.className.includes("disabled") || d.className.includes("-leave") || s(v);
    };
    return d.addEventListener("click", f, !0), () => {
      d.removeEventListener("click", f, !0);
    };
  }, [n]), !/* @__PURE__ */ B.isValidElement(t))
    return t ?? null;
  const c = Bo(t) ? bn(t.ref, a) : a;
  return mr(t, {
    ref: c
  });
};
process.env.NODE_ENV !== "production" && (If.displayName = "Wave");
const kn = (e) => {
  const t = B.useContext(to);
  return B.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
}, Pf = /* @__PURE__ */ u.createContext(null), lo = (e, t) => {
  const n = u.useContext(Pf), r = u.useMemo(() => {
    if (!n)
      return "";
    const {
      compactDirection: o,
      isFirstItem: a,
      isLastItem: i
    } = n, l = o === "vertical" ? "-vertical-" : "-";
    return ne(`${e}-compact${l}item`, {
      [`${e}-compact${l}first-item`]: a,
      [`${e}-compact${l}last-item`]: i,
      [`${e}-compact${l}item-rtl`]: t === "rtl"
    });
  }, [e, t, n]);
  return {
    compactSize: n == null ? void 0 : n.compactSize,
    compactDirection: n == null ? void 0 : n.compactDirection,
    compactItemClassnames: r
  };
}, db = (e) => {
  let {
    children: t
  } = e;
  return /* @__PURE__ */ u.createElement(Pf.Provider, {
    value: null
  }, t);
};
var fb = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Nf = /* @__PURE__ */ u.createContext(void 0), vb = (e) => {
  const {
    getPrefixCls: t,
    direction: n
  } = u.useContext(Ct), {
    prefixCls: r,
    size: o,
    className: a
  } = e, i = fb(e, ["prefixCls", "size", "className"]), l = t("btn-group", r), [, , s] = Nn();
  let c = "";
  switch (o) {
    case "large":
      c = "lg";
      break;
    case "small":
      c = "sm";
      break;
  }
  if (process.env.NODE_ENV !== "production") {
    const f = zt("Button.Group");
    process.env.NODE_ENV !== "production" && f(!o || ["large", "small", "middle"].includes(o), "usage", "Invalid prop `size`.");
  }
  const d = ne(l, {
    [`${l}-${c}`]: c,
    [`${l}-rtl`]: n === "rtl"
  }, a, s);
  return /* @__PURE__ */ u.createElement(Nf.Provider, {
    value: o
  }, /* @__PURE__ */ u.createElement("div", Object.assign({}, i, {
    className: d
  })));
}, zc = /^[\u4e00-\u9fa5]{2}$/, Pl = zc.test.bind(zc);
function Vc(e) {
  return typeof e == "string";
}
function fa(e) {
  return e === "text" || e === "link";
}
function gb(e, t) {
  if (e == null)
    return;
  const n = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && Vc(e.type) && Pl(e.props.children) ? mr(e, {
    children: e.props.children.split("").join(n)
  }) : Vc(e) ? Pl(e) ? /* @__PURE__ */ B.createElement("span", null, e.split("").join(n)) : /* @__PURE__ */ B.createElement("span", null, e) : xf(e) ? /* @__PURE__ */ B.createElement("span", null, e) : e;
}
function mb(e, t) {
  let n = !1;
  const r = [];
  return B.Children.forEach(e, (o) => {
    const a = typeof o, i = a === "string" || a === "number";
    if (n && i) {
      const l = r.length - 1, s = r[l];
      r[l] = `${s}${o}`;
    } else
      r.push(o);
    n = i;
  }), B.Children.map(r, (o) => gb(o, t));
}
const Mf = /* @__PURE__ */ tr((e, t) => {
  const {
    className: n,
    style: r,
    children: o,
    prefixCls: a
  } = e, i = ne(`${a}-icon`, n);
  return /* @__PURE__ */ B.createElement("span", {
    ref: t,
    className: i,
    style: r
  }, o);
}), Bc = /* @__PURE__ */ tr((e, t) => {
  const {
    prefixCls: n,
    className: r,
    style: o,
    iconClassName: a
  } = e, i = ne(`${n}-loading-icon`, r);
  return /* @__PURE__ */ B.createElement(Mf, {
    prefixCls: n,
    className: i,
    style: o,
    ref: t
  }, /* @__PURE__ */ B.createElement(us, {
    className: a
  }));
}), Oi = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), Ri = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), hb = (e) => {
  const {
    prefixCls: t,
    loading: n,
    existIcon: r,
    className: o,
    style: a
  } = e, i = !!n;
  return r ? /* @__PURE__ */ B.createElement(Bc, {
    prefixCls: t,
    className: o,
    style: a
  }) : /* @__PURE__ */ B.createElement(Nr, {
    visible: i,
    // We do not really use this motionName
    motionName: `${t}-loading-icon-motion`,
    motionLeave: i,
    removeOnLeave: !0,
    onAppearStart: Oi,
    onAppearActive: Ri,
    onEnterStart: Oi,
    onEnterActive: Ri,
    onLeaveStart: Ri,
    onLeaveActive: Oi
  }, (l, s) => {
    let {
      className: c,
      style: d
    } = l;
    return /* @__PURE__ */ B.createElement(Bc, {
      prefixCls: t,
      className: o,
      style: Object.assign(Object.assign({}, a), d),
      ref: s,
      iconClassName: c
    });
  });
}, Wc = (e, t) => ({
  // Border
  [`> span, > ${e}`]: {
    "&:not(:last-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: t
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: t
        }
      }
    }
  }
}), pb = (e) => {
  const {
    componentCls: t,
    fontSize: n,
    lineWidth: r,
    groupBorderColor: o,
    colorErrorHover: a
  } = e;
  return {
    [`${t}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${t}`]: {
          "&:not(:last-child)": {
            [`&, & > ${t}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: e.calc(r).mul(-1).equal(),
            [`&, & > ${t}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [t]: {
          position: "relative",
          zIndex: 1,
          "&:hover, &:focus, &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${t}-icon-only`]: {
          fontSize: n
        }
      },
      // Border Color
      Wc(`${t}-primary`, o),
      Wc(`${t}-danger`, a)
    ]
  };
}, _f = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: n,
    paddingBlock: r
  } = e;
  return Pt(e, {
    buttonPaddingHorizontal: t,
    buttonPaddingVertical: r,
    buttonIconOnlyFontSize: n
  });
}, Tf = (e) => {
  var t, n, r, o, a, i;
  const l = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, s = (n = e.contentFontSizeSM) !== null && n !== void 0 ? n : e.fontSize, c = (r = e.contentFontSizeLG) !== null && r !== void 0 ? r : e.fontSizeLG, d = (o = e.contentLineHeight) !== null && o !== void 0 ? o : Ea(l), f = (a = e.contentLineHeightSM) !== null && a !== void 0 ? a : Ea(s), v = (i = e.contentLineHeightLG) !== null && i !== void 0 ? i : Ea(c);
  return {
    fontWeight: 400,
    defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
    primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
    dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
    primaryColor: e.colorTextLightSolid,
    dangerColor: e.colorTextLightSolid,
    borderColorDisabled: e.colorBorder,
    defaultGhostColor: e.colorBgContainer,
    ghostBg: "transparent",
    defaultGhostBorderColor: e.colorBgContainer,
    paddingInline: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineSM: 8 - e.lineWidth,
    onlyIconSize: e.fontSizeLG,
    onlyIconSizeSM: e.fontSizeLG - 2,
    onlyIconSizeLG: e.fontSizeLG + 2,
    groupBorderColor: e.colorPrimaryHover,
    linkHoverBg: "transparent",
    textHoverBg: e.colorBgTextHover,
    defaultColor: e.colorText,
    defaultBg: e.colorBgContainer,
    defaultBorderColor: e.colorBorder,
    defaultBorderColorDisabled: e.colorBorder,
    defaultHoverBg: e.colorBgContainer,
    defaultHoverColor: e.colorPrimaryHover,
    defaultHoverBorderColor: e.colorPrimaryHover,
    defaultActiveBg: e.colorBgContainer,
    defaultActiveColor: e.colorPrimaryActive,
    defaultActiveBorderColor: e.colorPrimaryActive,
    contentFontSize: l,
    contentFontSizeSM: s,
    contentFontSizeLG: c,
    contentLineHeight: d,
    contentLineHeightSM: f,
    contentLineHeightLG: v,
    paddingBlock: Math.max((e.controlHeight - l * d) / 2 - e.lineWidth, 0),
    paddingBlockSM: Math.max((e.controlHeightSM - s * f) / 2 - e.lineWidth, 0),
    paddingBlockLG: Math.max((e.controlHeightLG - c * v) / 2 - e.lineWidth, 0)
  };
}, bb = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    fontWeight: r
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-flex",
      gap: e.marginXS,
      alignItems: "center",
      justifyContent: "center",
      fontWeight: r,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      background: "transparent",
      border: `${oe(e.lineWidth)} ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: e.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      "> span": {
        display: "inline-block"
      },
      [`${t}-icon`]: {
        lineHeight: 1
      },
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": Object.assign({}, jp(e)),
      [`&${t}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em"
      },
      [`&${t}-two-chinese-chars > *:not(${n})`]: {
        marginInlineEnd: "-0.34em",
        letterSpacing: "0.34em"
      },
      // iconPosition="end"
      "&-icon-end": {
        flexDirection: "row-reverse"
      }
    }
  };
}, er = (e, t, n) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": n
  }
}), yb = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), Sb = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), Cb = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), Ho = (e, t, n, r, o, a, i, l) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: n || void 0,
    background: t,
    borderColor: r || void 0,
    boxShadow: "none"
  }, er(e, Object.assign({
    background: t
  }, i), Object.assign({
    background: t
  }, l))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: o || void 0,
      borderColor: a || void 0
    }
  })
}), vs = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, Cb(e))
}), Df = (e) => Object.assign({}, vs(e)), Da = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), Af = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Df(e)), {
  background: e.defaultBg,
  borderColor: e.defaultBorderColor,
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}), er(e.componentCls, {
  color: e.defaultHoverColor,
  borderColor: e.defaultHoverBorderColor,
  background: e.defaultHoverBg
}, {
  color: e.defaultActiveColor,
  borderColor: e.defaultActiveBorderColor,
  background: e.defaultActiveBg
})), Ho(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: e.colorError,
    borderColor: e.colorError
  }, er(e.componentCls, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), Ho(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), vs(e))
}), Eb = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Df(e)), {
  color: e.primaryColor,
  background: e.colorPrimary,
  boxShadow: e.primaryShadow
}), er(e.componentCls, {
  color: e.colorTextLightSolid,
  background: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  background: e.colorPrimaryActive
})), Ho(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    background: e.colorError,
    boxShadow: e.dangerShadow,
    color: e.dangerColor
  }, er(e.componentCls, {
    background: e.colorErrorHover
  }, {
    background: e.colorErrorActive
  })), Ho(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), vs(e))
}), xb = (e) => Object.assign(Object.assign({}, Af(e)), {
  borderStyle: "dashed"
}), wb = (e) => Object.assign(Object.assign(Object.assign({
  color: e.colorLink
}, er(e.componentCls, {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), Da(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, er(e.componentCls, {
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), Da(e))
}), $b = (e) => Object.assign(Object.assign(Object.assign({}, er(e.componentCls, {
  color: e.colorText,
  background: e.textHoverBg
}, {
  color: e.colorText,
  background: e.colorBgTextActive
})), Da(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, Da(e)), er(e.componentCls, {
    color: e.colorErrorHover,
    background: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    background: e.colorErrorBgActive
  }))
}), Ob = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: Af(e),
    [`${t}-primary`]: Eb(e),
    [`${t}-dashed`]: xb(e),
    [`${t}-link`]: wb(e),
    [`${t}-text`]: $b(e),
    [`${t}-ghost`]: Ho(e.componentCls, e.ghostBg, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)
  };
}, gs = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: n,
    controlHeight: r,
    fontSize: o,
    lineHeight: a,
    borderRadius: i,
    buttonPaddingHorizontal: l,
    iconCls: s,
    buttonPaddingVertical: c
  } = e, d = `${n}-icon-only`;
  return [
    {
      [t]: {
        fontSize: o,
        lineHeight: a,
        height: r,
        padding: `${oe(c)} ${oe(l)}`,
        borderRadius: i,
        [`&${d}`]: {
          width: r,
          paddingInline: 0,
          // make `btn-icon-only` not too narrow
          [`&${n}-compact-item`]: {
            flex: "none"
          },
          [`&${n}-round`]: {
            width: "auto"
          },
          [s]: {
            fontSize: e.buttonIconOnlyFontSize
          }
        },
        // Loading
        [`&${n}-loading`]: {
          opacity: e.opacityLoading,
          cursor: "default"
        },
        [`${n}-loading-icon`]: {
          transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${n}${n}-circle${t}`]: yb(e)
    },
    {
      [`${n}${n}-round${t}`]: Sb(e)
    }
  ];
}, Rb = (e) => {
  const t = Pt(e, {
    fontSize: e.contentFontSize,
    lineHeight: e.contentLineHeight
  });
  return gs(t, e.componentCls);
}, Ib = (e) => {
  const t = Pt(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    lineHeight: e.contentLineHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: e.paddingBlockSM,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return gs(t, `${e.componentCls}-sm`);
}, Pb = (e) => {
  const t = Pt(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    lineHeight: e.contentLineHeightLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: e.paddingBlockLG,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return gs(t, `${e.componentCls}-lg`);
}, Nb = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`&${t}-block`]: {
        width: "100%"
      }
    }
  };
}, Mb = yn("Button", (e) => {
  const t = _f(e);
  return [
    // Shared
    bb(t),
    // Size
    Rb(t),
    Ib(t),
    Pb(t),
    // Block
    Nb(t),
    // Group (type, ghost, danger, loading)
    Ob(t),
    // Button Group
    pb(t)
  ];
}, Tf, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function _b(e, t, n) {
  const {
    focusElCls: r,
    focus: o,
    borderElCls: a
  } = n, i = a ? "> *" : "", l = ["hover", o ? "focus" : null, "active"].filter(Boolean).map((s) => `&:${s} ${i}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal()
    },
    "&-item": Object.assign(Object.assign({
      [l]: {
        zIndex: 2
      }
    }, r ? {
      [`&${r}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${i}`]: {
        zIndex: 0
      }
    })
  };
}
function Tb(e, t, n) {
  const {
    borderElCls: r
  } = n, o = r ? `> ${r}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function Uo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: n
  } = e, r = `${n}-compact`;
  return {
    [r]: Object.assign(Object.assign({}, _b(e, r, t)), Tb(n, r, t))
  };
}
function Db(e, t) {
  return {
    // border collapse
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: e.calc(e.lineWidth).mul(-1).equal()
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function Ab(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function Fb(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, Db(e, t)), Ab(e.componentCls, t))
  };
}
const jb = (e) => {
  const {
    componentCls: t,
    calc: n
  } = e;
  return {
    [t]: {
      // Special styles for Primary Button
      [`&-compact-item${t}-primary`]: {
        [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: n(e.lineWidth).mul(-1).equal(),
            insetInlineStart: n(e.lineWidth).mul(-1).equal(),
            display: "inline-block",
            width: e.lineWidth,
            height: `calc(100% + ${oe(e.lineWidth)} * 2)`,
            backgroundColor: e.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      "&-compact-vertical-item": {
        [`&${t}-primary`]: {
          [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: n(e.lineWidth).mul(-1).equal(),
              insetInlineStart: n(e.lineWidth).mul(-1).equal(),
              display: "inline-block",
              width: `calc(100% + ${oe(e.lineWidth)} * 2)`,
              height: e.lineWidth,
              backgroundColor: e.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
}, Lb = Hp(["Button", "compact"], (e) => {
  const t = _f(e);
  return [
    // Space Compact
    Uo(t),
    Fb(t),
    jb(t)
  ];
}, Tf);
var Hb = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function zb(e) {
  if (typeof e == "object" && e) {
    let t = e == null ? void 0 : e.delay;
    return t = !Number.isNaN(t) && typeof t == "number" ? t : 0, {
      loading: t <= 0,
      delay: t
    };
  }
  return {
    loading: !!e,
    delay: 0
  };
}
const Vb = /* @__PURE__ */ B.forwardRef((e, t) => {
  var n, r, o;
  const {
    loading: a = !1,
    prefixCls: i,
    type: l,
    danger: s = !1,
    shape: c = "default",
    size: d,
    styles: f,
    disabled: v,
    className: h,
    rootClassName: b,
    children: m,
    icon: g,
    iconPosition: y = "start",
    ghost: p = !1,
    block: S = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: E = "button",
    classNames: C,
    style: x = {},
    autoInsertSpace: w
  } = e, $ = Hb(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace"]), O = l || "default", {
    getPrefixCls: R,
    direction: _,
    button: I
  } = Dt(Ct), F = (n = w ?? (I == null ? void 0 : I.autoInsertSpace)) !== null && n !== void 0 ? n : !0, M = R("btn", i), [V, N, P] = Mb(M), T = Dt(Ln), j = v ?? T, H = Dt(Nf), L = an(() => zb(a), [a]), [q, k] = jt(L.loading), [U, G] = jt(!1), Y = bn(t, /* @__PURE__ */ Mg()), Q = Ng.count(m) === 1 && !g && !fa(O);
  Mt(() => {
    let re = null;
    L.delay > 0 ? re = setTimeout(() => {
      re = null, k(!0);
    }, L.delay) : k(L.loading);
    function ge() {
      re && (clearTimeout(re), re = null);
    }
    return ge;
  }, [L]), Mt(() => {
    if (!Y || !Y.current || !F)
      return;
    const re = Y.current.textContent;
    Q && Pl(re) ? U || G(!0) : U && G(!1);
  }, [Y]);
  const pe = (re) => {
    const {
      onClick: ge
    } = e;
    if (q || j) {
      re.preventDefault();
      return;
    }
    ge == null || ge(re);
  };
  if (process.env.NODE_ENV !== "production") {
    const re = zt("Button");
    process.env.NODE_ENV !== "production" && re(!(typeof g == "string" && g.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${g}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && re(!(p && fa(O)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: Z,
    compactItemClassnames: X
  } = lo(M, _), te = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, fe = kn((re) => {
    var ge, be;
    return (be = (ge = d ?? Z) !== null && ge !== void 0 ? ge : H) !== null && be !== void 0 ? be : re;
  }), W = fe && te[fe] || "", ae = q ? "loading" : g, ie = gr($, ["navigate"]), ue = ne(M, N, P, {
    [`${M}-${c}`]: c !== "default" && c,
    [`${M}-${O}`]: O,
    [`${M}-${W}`]: W,
    [`${M}-icon-only`]: !m && m !== 0 && !!ae,
    [`${M}-background-ghost`]: p && !fa(O),
    [`${M}-loading`]: q,
    [`${M}-two-chinese-chars`]: U && F && !q,
    [`${M}-block`]: S,
    [`${M}-dangerous`]: s,
    [`${M}-rtl`]: _ === "rtl",
    [`${M}-icon-end`]: y === "end"
  }, X, h, b, I == null ? void 0 : I.className), ve = Object.assign(Object.assign({}, I == null ? void 0 : I.style), x), $e = ne(C == null ? void 0 : C.icon, (r = I == null ? void 0 : I.classNames) === null || r === void 0 ? void 0 : r.icon), Re = Object.assign(Object.assign({}, (f == null ? void 0 : f.icon) || {}), ((o = I == null ? void 0 : I.styles) === null || o === void 0 ? void 0 : o.icon) || {}), Se = g && !q ? /* @__PURE__ */ B.createElement(Mf, {
    prefixCls: M,
    className: $e,
    style: Re
  }, g) : /* @__PURE__ */ B.createElement(hb, {
    existIcon: !!g,
    prefixCls: M,
    loading: q
  }), _e = m || m === 0 ? mb(m, Q && F) : null;
  if (ie.href !== void 0)
    return V(/* @__PURE__ */ B.createElement("a", Object.assign({}, ie, {
      className: ne(ue, {
        [`${M}-disabled`]: j
      }),
      href: j ? void 0 : ie.href,
      style: ve,
      onClick: pe,
      ref: Y,
      tabIndex: j ? -1 : 0
    }), Se, _e));
  let J = /* @__PURE__ */ B.createElement("button", Object.assign({}, $, {
    type: E,
    className: ue,
    style: ve,
    onClick: pe,
    disabled: j,
    ref: Y
  }), Se, _e, !!X && /* @__PURE__ */ B.createElement(Lb, {
    key: "compact",
    prefixCls: M
  }));
  return fa(O) || (J = /* @__PURE__ */ B.createElement(If, {
    component: "Button",
    disabled: q
  }, J)), V(J);
}), Qa = Vb;
Qa.Group = vb;
Qa.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (Qa.displayName = "Button");
var Ff = /* @__PURE__ */ u.createContext(null), kc = [];
function Bb(e, t) {
  var n = u.useState(function() {
    if (!on())
      return null;
    var b = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && b.setAttribute("data-debug", t), b;
  }), r = K(n, 1), o = r[0], a = u.useRef(!1), i = u.useContext(Ff), l = u.useState(kc), s = K(l, 2), c = s[0], d = s[1], f = i || (a.current ? void 0 : function(b) {
    d(function(m) {
      var g = [b].concat(Ce(m));
      return g;
    });
  });
  function v() {
    o.parentElement || document.body.appendChild(o), a.current = !0;
  }
  function h() {
    var b;
    (b = o.parentElement) === null || b === void 0 || b.removeChild(o), a.current = !1;
  }
  return Rt(function() {
    return e ? i ? i(v) : v() : h(), h;
  }, [e]), Rt(function() {
    c.length && (c.forEach(function(b) {
      return b();
    }), d(kc));
  }, [c]), [o, f];
}
function Wb(e) {
  var t = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)), n = document.createElement("div");
  n.id = t;
  var r = n.style;
  r.position = "absolute", r.left = "0", r.top = "0", r.width = "100px", r.height = "100px", r.overflow = "scroll";
  var o, a;
  if (e) {
    var i = getComputedStyle(e);
    r.scrollbarColor = i.scrollbarColor, r.scrollbarWidth = i.scrollbarWidth;
    var l = getComputedStyle(e, "::-webkit-scrollbar"), s = parseInt(l.width, 10), c = parseInt(l.height, 10);
    try {
      var d = s ? "width: ".concat(l.width, ";") : "", f = c ? "height: ".concat(l.height, ";") : "";
      Zn(`
#`.concat(t, `::-webkit-scrollbar {
`).concat(d, `
`).concat(f, `
}`), t);
    } catch (b) {
      console.error(b), o = s, a = c;
    }
  }
  document.body.appendChild(n);
  var v = e && o && !isNaN(o) ? o : n.offsetWidth - n.clientWidth, h = e && a && !isNaN(a) ? a : n.offsetHeight - n.clientHeight;
  return document.body.removeChild(n), Mo(t), {
    width: v,
    height: h
  };
}
function kb(e) {
  return typeof document > "u" || !e || !(e instanceof Element) ? {
    width: 0,
    height: 0
  } : Wb(e);
}
function Ub() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var Gb = "rc-util-locker-".concat(Date.now()), Uc = 0;
function qb(e) {
  var t = !!e, n = u.useState(function() {
    return Uc += 1, "".concat(Gb, "_").concat(Uc);
  }), r = K(n, 1), o = r[0];
  Rt(function() {
    if (t) {
      var a = kb(document.body).width, i = Ub();
      Zn(`
html body {
  overflow-y: hidden;
  `.concat(i ? "width: calc(100% - ".concat(a, "px);") : "", `
}`), o);
    } else
      Mo(o);
    return function() {
      Mo(o);
    };
  }, [t, o]);
}
var Kb = !1;
function Xb(e) {
  return Kb;
}
var Gc = function(t) {
  return t === !1 ? !1 : !on() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, ms = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.open, r = e.autoLock, o = e.getContainer, a = e.debug, i = e.autoDestroy, l = i === void 0 ? !0 : i, s = e.children, c = u.useState(n), d = K(c, 2), f = d[0], v = d[1], h = f || n;
  process.env.NODE_ENV !== "production" && ut(on() || !n, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), u.useEffect(function() {
    (l || n) && v(n);
  }, [n, l]);
  var b = u.useState(function() {
    return Gc(o);
  }), m = K(b, 2), g = m[0], y = m[1];
  u.useEffect(function() {
    var I = Gc(o);
    y(I ?? null);
  });
  var p = Bb(h && !g, a), S = K(p, 2), E = S[0], C = S[1], x = g ?? E;
  qb(r && n && on() && (x === E || x === document.body));
  var w = null;
  if (s && Bo(s) && t) {
    var $ = s;
    w = $.ref;
  }
  var O = Va(w, t);
  if (!h || !on() || g === void 0)
    return null;
  var R = x === !1 || Xb(), _ = s;
  return t && (_ = /* @__PURE__ */ u.cloneElement(s, {
    ref: O
  })), /* @__PURE__ */ u.createElement(Ff.Provider, {
    value: C
  }, R ? _ : /* @__PURE__ */ Dg(_, x));
});
process.env.NODE_ENV !== "production" && (ms.displayName = "Portal");
function Yb() {
  var e = z({}, u);
  return e.useId;
}
var qc = 0, Kc = Yb();
const Qb = Kc ? (
  // Use React `useId`
  function(t) {
    var n = Kc();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : n);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var n = u.useState("ssr-id"), r = K(n, 2), o = r[0], a = r[1];
    return u.useEffect(function() {
      var i = qc;
      qc += 1, a("rc_unique_".concat(i));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : o);
  }
);
var xr = "RC_FORM_INTERNAL_HOOKS", wt = function() {
  ut(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, no = /* @__PURE__ */ u.createContext({
  getFieldValue: wt,
  getFieldsValue: wt,
  getFieldError: wt,
  getFieldWarning: wt,
  getFieldsError: wt,
  isFieldsTouched: wt,
  isFieldTouched: wt,
  isFieldValidating: wt,
  isFieldsValidating: wt,
  resetFields: wt,
  setFields: wt,
  setFieldValue: wt,
  setFieldsValue: wt,
  validateFields: wt,
  submit: wt,
  getInternalHooks: function() {
    return wt(), {
      dispatch: wt,
      initEntityValue: wt,
      registerField: wt,
      useSubscribe: wt,
      setInitialValues: wt,
      destroyForm: wt,
      setCallbacks: wt,
      registerWatch: wt,
      getFields: wt,
      setValidateMessages: wt,
      setPreserve: wt,
      getInitialValue: wt
    };
  }
}), Aa = /* @__PURE__ */ u.createContext(null);
function Nl(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Zb(e) {
  return e && !!e._init;
}
function Ml() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var _l = Ml();
function Jb(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function ey(e, t, n) {
  if (Zl()) return Reflect.construct.apply(null, arguments);
  var r = [null];
  r.push.apply(r, t);
  var o = new (e.bind.apply(e, r))();
  return n && Io(o, n.prototype), o;
}
function Tl(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Tl = function(r) {
    if (r === null || !Jb(r)) return r;
    if (typeof r != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(r)) return t.get(r);
      t.set(r, o);
    }
    function o() {
      return ey(r, arguments, Po(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Io(o, r);
  }, Tl(e);
}
var ty = /%[sdj%]/g, jf = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (jf = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function Dl(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function pn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var o = 0, a = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var i = e.replace(ty, function(l) {
      if (l === "%%")
        return "%";
      if (o >= a)
        return l;
      switch (l) {
        case "%s":
          return String(n[o++]);
        case "%d":
          return Number(n[o++]);
        case "%j":
          try {
            return JSON.stringify(n[o++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return l;
      }
    });
    return i;
  }
  return e;
}
function ny(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Yt(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || ny(t) && typeof e == "string" && !e);
}
function ry(e, t, n) {
  var r = [], o = 0, a = e.length;
  function i(l) {
    r.push.apply(r, Ce(l || [])), o++, o === a && n(r);
  }
  e.forEach(function(l) {
    t(l, i);
  });
}
function Xc(e, t, n) {
  var r = 0, o = e.length;
  function a(i) {
    if (i && i.length) {
      n(i);
      return;
    }
    var l = r;
    r = r + 1, l < o ? t(e[l], a) : n([]);
  }
  a([]);
}
function oy(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, Ce(e[n] || []));
  }), t;
}
var Yc = /* @__PURE__ */ function(e) {
  hr(n, e);
  var t = pr(n);
  function n(r, o) {
    var a;
    return Vt(this, n), a = t.call(this, "Async Validation Error"), D(ht(a), "errors", void 0), D(ht(a), "fields", void 0), a.errors = r, a.fields = o, a;
  }
  return Bt(n);
}(/* @__PURE__ */ Tl(Error));
function ay(e, t, n, r, o) {
  if (t.first) {
    var a = new Promise(function(v, h) {
      var b = function(y) {
        return r(y), y.length ? h(new Yc(y, Dl(y))) : v(o);
      }, m = oy(e);
      Xc(m, n, b);
    });
    return a.catch(function(v) {
      return v;
    }), a;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], l = Object.keys(e), s = l.length, c = 0, d = [], f = new Promise(function(v, h) {
    var b = function(g) {
      if (d.push.apply(d, g), c++, c === s)
        return r(d), d.length ? h(new Yc(d, Dl(d))) : v(o);
    };
    l.length || (r(d), v(o)), l.forEach(function(m) {
      var g = e[m];
      i.indexOf(m) !== -1 ? Xc(g, n, b) : ry(g, n, b);
    });
  });
  return f.catch(function(v) {
    return v;
  }), f;
}
function iy(e) {
  return !!(e && e.message !== void 0);
}
function ly(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function Qc(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = ly(t, e.fullFields) : r = t[n.field || e.fullField], iy(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function Zc(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        Be(r) === "object" && Be(e[n]) === "object" ? e[n] = z(z({}, e[n]), r) : e[n] = r;
      }
  }
  return e;
}
var Fr = "enum", sy = function(t, n, r, o, a) {
  t[Fr] = Array.isArray(t[Fr]) ? t[Fr] : [], t[Fr].indexOf(n) === -1 && o.push(pn(a.messages[Fr], t.fullField, t[Fr].join(", ")));
}, cy = function(t, n, r, o, a) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || o.push(pn(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(n) || o.push(pn(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, uy = function(t, n, r, o, a) {
  var i = typeof t.len == "number", l = typeof t.min == "number", s = typeof t.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, d = n, f = null, v = typeof n == "number", h = typeof n == "string", b = Array.isArray(n);
  if (v ? f = "number" : h ? f = "string" : b && (f = "array"), !f)
    return !1;
  b && (d = n.length), h && (d = n.replace(c, "_").length), i ? d !== t.len && o.push(pn(a.messages[f].len, t.fullField, t.len)) : l && !s && d < t.min ? o.push(pn(a.messages[f].min, t.fullField, t.min)) : s && !l && d > t.max ? o.push(pn(a.messages[f].max, t.fullField, t.max)) : l && s && (d < t.min || d > t.max) && o.push(pn(a.messages[f].range, t.fullField, t.min, t.max));
}, Lf = function(t, n, r, o, a, i) {
  t.required && (!r.hasOwnProperty(t.field) || Yt(n, i || t.type)) && o.push(pn(a.messages.required, t.fullField));
}, va;
const dy = function() {
  if (va)
    return va;
  var e = "[a-fA-F\\d:]", t = function(x) {
    return x && x.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(e, ")|(?<=").concat(e, ")(?=\\s|$))") : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", o = [
    "(?:".concat(r, ":){7}(?:").concat(r, "|:)"),
    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
    "(?:".concat(r, ":){6}(?:").concat(n, "|:").concat(r, "|:)"),
    // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::
    "(?:".concat(r, ":){5}(?::").concat(n, "|(?::").concat(r, "){1,2}|:)"),
    // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::
    "(?:".concat(r, ":){4}(?:(?::").concat(r, "){0,1}:").concat(n, "|(?::").concat(r, "){1,3}|:)"),
    // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::
    "(?:".concat(r, ":){3}(?:(?::").concat(r, "){0,2}:").concat(n, "|(?::").concat(r, "){1,4}|:)"),
    // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::
    "(?:".concat(r, ":){2}(?:(?::").concat(r, "){0,3}:").concat(n, "|(?::").concat(r, "){1,5}|:)"),
    // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::
    "(?:".concat(r, ":){1}(?:(?::").concat(r, "){0,4}:").concat(n, "|(?::").concat(r, "){1,6}|:)"),
    // 1::              1::3:4:5:6:7:8   1::8            1::
    "(?::(?:(?::".concat(r, "){0,5}:").concat(n, "|(?::").concat(r, "){1,7}|:))")
    // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::
  ], a = "(?:%[0-9a-zA-Z]{1,})?", i = "(?:".concat(o.join("|"), ")").concat(a), l = new RegExp("(?:^".concat(n, "$)|(?:^").concat(i, "$)")), s = new RegExp("^".concat(n, "$")), c = new RegExp("^".concat(i, "$")), d = function(x) {
    return x && x.exact ? l : new RegExp("(?:".concat(t(x)).concat(n).concat(t(x), ")|(?:").concat(t(x)).concat(i).concat(t(x), ")"), "g");
  };
  d.v4 = function(C) {
    return C && C.exact ? s : new RegExp("".concat(t(C)).concat(n).concat(t(C)), "g");
  }, d.v6 = function(C) {
    return C && C.exact ? c : new RegExp("".concat(t(C)).concat(i).concat(t(C)), "g");
  };
  var f = "(?:(?:[a-z]+:)?//)", v = "(?:\\S+(?::\\S*)?@)?", h = d.v4().source, b = d.v6().source, m = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", g = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", y = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", p = "(?::\\d{2,5})?", S = '(?:[/?#][^\\s"]*)?', E = "(?:".concat(f, "|www\\.)").concat(v, "(?:localhost|").concat(h, "|").concat(b, "|").concat(m).concat(g).concat(y, ")").concat(p).concat(S);
  return va = new RegExp("(?:^".concat(E, "$)"), "i"), va;
};
var Jc = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, bo = {
  integer: function(t) {
    return bo.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return bo.number(t) && !bo.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return Be(t) === "object" && !bo.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Jc.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(dy());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Jc.hex);
  }
}, fy = function(t, n, r, o, a) {
  if (t.required && n === void 0) {
    Lf(t, n, r, o, a);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], l = t.type;
  i.indexOf(l) > -1 ? bo[l](n) || o.push(pn(a.messages.types[l], t.fullField, t.type)) : l && Be(n) !== t.type && o.push(pn(a.messages.types[l], t.fullField, t.type));
}, vy = function(t, n, r, o, a) {
  (/^\s+$/.test(n) || n === "") && o.push(pn(a.messages.whitespace, t.fullField));
};
const bt = {
  required: Lf,
  whitespace: vy,
  type: fy,
  range: uy,
  enum: sy,
  pattern: cy
};
var gy = function(t, n, r, o, a) {
  var i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (Yt(n) && !t.required)
      return r();
    bt.required(t, n, o, i, a);
  }
  r(i);
}, my = function(t, n, r, o, a) {
  var i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (n == null && !t.required)
      return r();
    bt.required(t, n, o, i, a, "array"), n != null && (bt.type(t, n, o, i, a), bt.range(t, n, o, i, a));
  }
  r(i);
}, hy = function(t, n, r, o, a) {
  var i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (Yt(n) && !t.required)
      return r();
    bt.required(t, n, o, i, a), n !== void 0 && bt.type(t, n, o, i, a);
  }
  r(i);
}, py = function(t, n, r, o, a) {
  var i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (Yt(n, "date") && !t.required)
      return r();
    if (bt.required(t, n, o, i, a), !Yt(n, "date")) {
      var s;
      n instanceof Date ? s = n : s = new Date(n), bt.type(t, s, o, i, a), s && bt.range(t, s.getTime(), o, i, a);
    }
  }
  r(i);
}, by = "enum", yy = function(t, n, r, o, a) {
  var i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (Yt(n) && !t.required)
      return r();
    bt.required(t, n, o, i, a), n !== void 0 && bt[by](t, n, o, i, a);
  }
  r(i);
}, Sy = function(t, n, r, o, a) {
  var i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (Yt(n) && !t.required)
      return r();
    bt.required(t, n, o, i, a), n !== void 0 && (bt.type(t, n, o, i, a), bt.range(t, n, o, i, a));
  }
  r(i);
}, Cy = function(t, n, r, o, a) {
  var i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (Yt(n) && !t.required)
      return r();
    bt.required(t, n, o, i, a), n !== void 0 && (bt.type(t, n, o, i, a), bt.range(t, n, o, i, a));
  }
  r(i);
}, Ey = function(t, n, r, o, a) {
  var i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (Yt(n) && !t.required)
      return r();
    bt.required(t, n, o, i, a), n !== void 0 && bt.type(t, n, o, i, a);
  }
  r(i);
}, xy = function(t, n, r, o, a) {
  var i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (n === "" && (n = void 0), Yt(n) && !t.required)
      return r();
    bt.required(t, n, o, i, a), n !== void 0 && (bt.type(t, n, o, i, a), bt.range(t, n, o, i, a));
  }
  r(i);
}, wy = function(t, n, r, o, a) {
  var i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (Yt(n) && !t.required)
      return r();
    bt.required(t, n, o, i, a), n !== void 0 && bt.type(t, n, o, i, a);
  }
  r(i);
}, $y = function(t, n, r, o, a) {
  var i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (Yt(n, "string") && !t.required)
      return r();
    bt.required(t, n, o, i, a), Yt(n, "string") || bt.pattern(t, n, o, i, a);
  }
  r(i);
}, Oy = function(t, n, r, o, a) {
  var i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (Yt(n) && !t.required)
      return r();
    bt.required(t, n, o, i, a), Yt(n) || bt.type(t, n, o, i, a);
  }
  r(i);
}, Ry = function(t, n, r, o, a) {
  var i = [], l = Array.isArray(n) ? "array" : Be(n);
  bt.required(t, n, o, i, a, l), r(i);
}, Iy = function(t, n, r, o, a) {
  var i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (Yt(n, "string") && !t.required)
      return r();
    bt.required(t, n, o, i, a, "string"), Yt(n, "string") || (bt.type(t, n, o, i, a), bt.range(t, n, o, i, a), bt.pattern(t, n, o, i, a), t.whitespace === !0 && bt.whitespace(t, n, o, i, a));
  }
  r(i);
}, Ii = function(t, n, r, o, a) {
  var i = t.type, l = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Yt(n, i) && !t.required)
      return r();
    bt.required(t, n, o, l, a, i), Yt(n, i) || bt.type(t, n, o, l, a);
  }
  r(l);
};
const $o = {
  string: Iy,
  method: Ey,
  number: xy,
  boolean: hy,
  regexp: Oy,
  integer: Cy,
  float: Sy,
  array: my,
  object: wy,
  enum: yy,
  pattern: $y,
  date: py,
  url: Ii,
  hex: Ii,
  email: Ii,
  required: Ry,
  any: gy
};
var Go = /* @__PURE__ */ function() {
  function e(t) {
    Vt(this, e), D(this, "rules", null), D(this, "_messages", _l), this.define(t);
  }
  return Bt(e, [{
    key: "define",
    value: function(n) {
      var r = this;
      if (!n)
        throw new Error("Cannot configure a schema with no rules");
      if (Be(n) !== "object" || Array.isArray(n))
        throw new Error("Rules must be an object");
      this.rules = {}, Object.keys(n).forEach(function(o) {
        var a = n[o];
        r.rules[o] = Array.isArray(a) ? a : [a];
      });
    }
  }, {
    key: "messages",
    value: function(n) {
      return n && (this._messages = Zc(Ml(), n)), this._messages;
    }
  }, {
    key: "validate",
    value: function(n) {
      var r = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      }, i = n, l = o, s = a;
      if (typeof l == "function" && (s = l, l = {}), !this.rules || Object.keys(this.rules).length === 0)
        return s && s(null, i), Promise.resolve(i);
      function c(b) {
        var m = [], g = {};
        function y(S) {
          if (Array.isArray(S)) {
            var E;
            m = (E = m).concat.apply(E, Ce(S));
          } else
            m.push(S);
        }
        for (var p = 0; p < b.length; p++)
          y(b[p]);
        m.length ? (g = Dl(m), s(m, g)) : s(null, i);
      }
      if (l.messages) {
        var d = this.messages();
        d === _l && (d = Ml()), Zc(d, l.messages), l.messages = d;
      } else
        l.messages = this.messages();
      var f = {}, v = l.keys || Object.keys(this.rules);
      v.forEach(function(b) {
        var m = r.rules[b], g = i[b];
        m.forEach(function(y) {
          var p = y;
          typeof p.transform == "function" && (i === n && (i = z({}, i)), g = i[b] = p.transform(g), g != null && (p.type = p.type || (Array.isArray(g) ? "array" : Be(g)))), typeof p == "function" ? p = {
            validator: p
          } : p = z({}, p), p.validator = r.getValidationMethod(p), p.validator && (p.field = b, p.fullField = p.fullField || b, p.type = r.getType(p), f[b] = f[b] || [], f[b].push({
            rule: p,
            value: g,
            source: i,
            field: b
          }));
        });
      });
      var h = {};
      return ay(f, l, function(b, m) {
        var g = b.rule, y = (g.type === "object" || g.type === "array") && (Be(g.fields) === "object" || Be(g.defaultField) === "object");
        y = y && (g.required || !g.required && b.value), g.field = b.field;
        function p(w, $) {
          return z(z({}, $), {}, {
            fullField: "".concat(g.fullField, ".").concat(w),
            fullFields: g.fullFields ? [].concat(Ce(g.fullFields), [w]) : [w]
          });
        }
        function S() {
          var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], $ = Array.isArray(w) ? w : [w];
          !l.suppressWarning && $.length && e.warning("async-validator:", $), $.length && g.message !== void 0 && ($ = [].concat(g.message));
          var O = $.map(Qc(g, i));
          if (l.first && O.length)
            return h[g.field] = 1, m(O);
          if (!y)
            m(O);
          else {
            if (g.required && !b.value)
              return g.message !== void 0 ? O = [].concat(g.message).map(Qc(g, i)) : l.error && (O = [l.error(g, pn(l.messages.required, g.field))]), m(O);
            var R = {};
            g.defaultField && Object.keys(b.value).map(function(F) {
              R[F] = g.defaultField;
            }), R = z(z({}, R), b.rule.fields);
            var _ = {};
            Object.keys(R).forEach(function(F) {
              var M = R[F], V = Array.isArray(M) ? M : [M];
              _[F] = V.map(p.bind(null, F));
            });
            var I = new e(_);
            I.messages(l.messages), b.rule.options && (b.rule.options.messages = l.messages, b.rule.options.error = l.error), I.validate(b.value, b.rule.options || l, function(F) {
              var M = [];
              O && O.length && M.push.apply(M, Ce(O)), F && F.length && M.push.apply(M, Ce(F)), m(M.length ? M : null);
            });
          }
        }
        var E;
        if (g.asyncValidator)
          E = g.asyncValidator(g, b.value, S, b.source, l);
        else if (g.validator) {
          try {
            E = g.validator(g, b.value, S, b.source, l);
          } catch (w) {
            var C, x;
            (C = (x = console).error) === null || C === void 0 || C.call(x, w), l.suppressValidatorError || setTimeout(function() {
              throw w;
            }, 0), S(w.message);
          }
          E === !0 ? S() : E === !1 ? S(typeof g.message == "function" ? g.message(g.fullField || g.field) : g.message || "".concat(g.fullField || g.field, " fails")) : E instanceof Array ? S(E) : E instanceof Error && S(E.message);
        }
        E && E.then && E.then(function() {
          return S();
        }, function(w) {
          return S(w);
        });
      }, function(b) {
        c(b);
      }, i);
    }
  }, {
    key: "getType",
    value: function(n) {
      if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !$o.hasOwnProperty(n.type))
        throw new Error(pn("Unknown rule type %s", n.type));
      return n.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function(n) {
      if (typeof n.validator == "function")
        return n.validator;
      var r = Object.keys(n), o = r.indexOf("message");
      return o !== -1 && r.splice(o, 1), r.length === 1 && r[0] === "required" ? $o.required : $o[this.getType(n)] || void 0;
    }
  }]), e;
}();
D(Go, "register", function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  $o[t] = n;
});
D(Go, "warning", jf);
D(Go, "messages", _l);
D(Go, "validators", $o);
var gn = "'${name}' is not a valid ${type}", Hf = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: gn,
    method: gn,
    array: gn,
    object: gn,
    number: gn,
    date: gn,
    boolean: gn,
    integer: gn,
    float: gn,
    regexp: gn,
    email: gn,
    url: gn,
    hex: gn
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
}, eu = Go;
function Py(e, t) {
  return e.replace(/\\?\$\{\w+\}/g, function(n) {
    if (n.startsWith("\\"))
      return n.slice(1);
    var r = n.slice(2, -1);
    return t[r];
  });
}
var tu = "CODE_LOGIC_ERROR";
function Al(e, t, n, r, o) {
  return Fl.apply(this, arguments);
}
function Fl() {
  return Fl = Mr(/* @__PURE__ */ ln().mark(function e(t, n, r, o, a) {
    var i, l, s, c, d, f, v, h, b;
    return ln().wrap(function(g) {
      for (; ; ) switch (g.prev = g.next) {
        case 0:
          return i = z({}, r), delete i.ruleIndex, eu.warning = function() {
          }, i.validator && (l = i.validator, i.validator = function() {
            try {
              return l.apply(void 0, arguments);
            } catch (y) {
              return console.error(y), Promise.reject(tu);
            }
          }), s = null, i && i.type === "array" && i.defaultField && (s = i.defaultField, delete i.defaultField), c = new eu(D({}, t, [i])), d = kr(Hf, o.validateMessages), c.messages(d), f = [], g.prev = 10, g.next = 13, Promise.resolve(c.validate(D({}, t, n), z({}, o)));
        case 13:
          g.next = 18;
          break;
        case 15:
          g.prev = 15, g.t0 = g.catch(10), g.t0.errors && (f = g.t0.errors.map(function(y, p) {
            var S = y.message, E = S === tu ? d.default : S;
            return /* @__PURE__ */ u.isValidElement(E) ? (
              // Wrap ReactNode with `key`
              /* @__PURE__ */ u.cloneElement(E, {
                key: "error_".concat(p)
              })
            ) : E;
          }));
        case 18:
          if (!(!f.length && s)) {
            g.next = 23;
            break;
          }
          return g.next = 21, Promise.all(n.map(function(y, p) {
            return Al("".concat(t, ".").concat(p), y, s, o, a);
          }));
        case 21:
          return v = g.sent, g.abrupt("return", v.reduce(function(y, p) {
            return [].concat(Ce(y), Ce(p));
          }, []));
        case 23:
          return h = z(z({}, r), {}, {
            name: t,
            enum: (r.enum || []).join(", ")
          }, a), b = f.map(function(y) {
            return typeof y == "string" ? Py(y, h) : y;
          }), g.abrupt("return", b);
        case 26:
        case "end":
          return g.stop();
      }
    }, e, null, [[10, 15]]);
  })), Fl.apply(this, arguments);
}
function Ny(e, t, n, r, o, a) {
  var i = e.join("."), l = n.map(function(d, f) {
    var v = d.validator, h = z(z({}, d), {}, {
      ruleIndex: f
    });
    return v && (h.validator = function(b, m, g) {
      var y = !1, p = function() {
        for (var C = arguments.length, x = new Array(C), w = 0; w < C; w++)
          x[w] = arguments[w];
        Promise.resolve().then(function() {
          ut(!y, "Your validator function has already return a promise. `callback` will be ignored."), y || g.apply(void 0, x);
        });
      }, S = v(b, m, p);
      y = S && typeof S.then == "function" && typeof S.catch == "function", ut(y, "`callback` is deprecated. Please return a promise instead."), y && S.then(function() {
        g();
      }).catch(function(E) {
        g(E || " ");
      });
    }), h;
  }).sort(function(d, f) {
    var v = d.warningOnly, h = d.ruleIndex, b = f.warningOnly, m = f.ruleIndex;
    return !!v == !!b ? h - m : v ? 1 : -1;
  }), s;
  if (o === !0)
    s = new Promise(/* @__PURE__ */ function() {
      var d = Mr(/* @__PURE__ */ ln().mark(function f(v, h) {
        var b, m, g;
        return ln().wrap(function(p) {
          for (; ; ) switch (p.prev = p.next) {
            case 0:
              b = 0;
            case 1:
              if (!(b < l.length)) {
                p.next = 12;
                break;
              }
              return m = l[b], p.next = 5, Al(i, t, m, r, a);
            case 5:
              if (g = p.sent, !g.length) {
                p.next = 9;
                break;
              }
              return h([{
                errors: g,
                rule: m
              }]), p.abrupt("return");
            case 9:
              b += 1, p.next = 1;
              break;
            case 12:
              v([]);
            case 13:
            case "end":
              return p.stop();
          }
        }, f);
      }));
      return function(f, v) {
        return d.apply(this, arguments);
      };
    }());
  else {
    var c = l.map(function(d) {
      return Al(i, t, d, r, a).then(function(f) {
        return {
          errors: f,
          rule: d
        };
      });
    });
    s = (o ? _y(c) : My(c)).then(function(d) {
      return Promise.reject(d);
    });
  }
  return s.catch(function(d) {
    return d;
  }), s;
}
function My(e) {
  return jl.apply(this, arguments);
}
function jl() {
  return jl = Mr(/* @__PURE__ */ ln().mark(function e(t) {
    return ln().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.all(t).then(function(o) {
            var a, i = (a = []).concat.apply(a, Ce(o));
            return i;
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), jl.apply(this, arguments);
}
function _y(e) {
  return Ll.apply(this, arguments);
}
function Ll() {
  return Ll = Mr(/* @__PURE__ */ ln().mark(function e(t) {
    var n;
    return ln().wrap(function(o) {
      for (; ; ) switch (o.prev = o.next) {
        case 0:
          return n = 0, o.abrupt("return", new Promise(function(a) {
            t.forEach(function(i) {
              i.then(function(l) {
                l.errors.length && a([l]), n += 1, n === t.length && a([]);
              });
            });
          }));
        case 2:
        case "end":
          return o.stop();
      }
    }, e);
  })), Ll.apply(this, arguments);
}
function Ht(e) {
  return Nl(e);
}
function nu(e, t) {
  var n = {};
  return t.forEach(function(r) {
    var o = Wn(e, r);
    n = Dn(n, r, o);
  }), n;
}
function Kr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(r) {
    return zf(t, r, n);
  });
}
function zf(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !n && e.length !== t.length ? !1 : t.every(function(r, o) {
    return e[o] === r;
  });
}
function Ty(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || Be(e) !== "object" || Be(t) !== "object")
    return !1;
  var n = Object.keys(e), r = Object.keys(t), o = new Set([].concat(n, r));
  return Ce(o).every(function(a) {
    var i = e[a], l = t[a];
    return typeof i == "function" && typeof l == "function" ? !0 : i === l;
  });
}
function Dy(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && Be(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function ru(e, t, n) {
  var r = e.length;
  if (t < 0 || t >= r || n < 0 || n >= r)
    return e;
  var o = e[t], a = t - n;
  return a > 0 ? [].concat(Ce(e.slice(0, n)), [o], Ce(e.slice(n, t)), Ce(e.slice(t + 1, r))) : a < 0 ? [].concat(Ce(e.slice(0, t)), Ce(e.slice(t + 1, n + 1)), [o], Ce(e.slice(n + 1, r))) : e;
}
var Ay = ["name"], $n = [];
function Pi(e, t, n, r, o, a) {
  return typeof e == "function" ? e(t, n, "source" in a ? {
    source: a.source
  } : {}) : r !== o;
}
var hs = /* @__PURE__ */ function(e) {
  hr(n, e);
  var t = pr(n);
  function n(r) {
    var o;
    if (Vt(this, n), o = t.call(this, r), D(ht(o), "state", {
      resetCount: 0
    }), D(ht(o), "cancelRegisterFunc", null), D(ht(o), "mounted", !1), D(ht(o), "touched", !1), D(ht(o), "dirty", !1), D(ht(o), "validatePromise", void 0), D(ht(o), "prevValidating", void 0), D(ht(o), "errors", $n), D(ht(o), "warnings", $n), D(ht(o), "cancelRegister", function() {
      var s = o.props, c = s.preserve, d = s.isListField, f = s.name;
      o.cancelRegisterFunc && o.cancelRegisterFunc(d, c, Ht(f)), o.cancelRegisterFunc = null;
    }), D(ht(o), "getNamePath", function() {
      var s = o.props, c = s.name, d = s.fieldContext, f = d.prefixName, v = f === void 0 ? [] : f;
      return c !== void 0 ? [].concat(Ce(v), Ce(c)) : [];
    }), D(ht(o), "getRules", function() {
      var s = o.props, c = s.rules, d = c === void 0 ? [] : c, f = s.fieldContext;
      return d.map(function(v) {
        return typeof v == "function" ? v(f) : v;
      });
    }), D(ht(o), "refresh", function() {
      o.mounted && o.setState(function(s) {
        var c = s.resetCount;
        return {
          resetCount: c + 1
        };
      });
    }), D(ht(o), "metaCache", null), D(ht(o), "triggerMetaEvent", function(s) {
      var c = o.props.onMetaChange;
      if (c) {
        var d = z(z({}, o.getMeta()), {}, {
          destroy: s
        });
        Ia(o.metaCache, d) || c(d), o.metaCache = d;
      } else
        o.metaCache = null;
    }), D(ht(o), "onStoreChange", function(s, c, d) {
      var f = o.props, v = f.shouldUpdate, h = f.dependencies, b = h === void 0 ? [] : h, m = f.onReset, g = d.store, y = o.getNamePath(), p = o.getValue(s), S = o.getValue(g), E = c && Kr(c, y);
      switch (d.type === "valueUpdate" && d.source === "external" && !Ia(p, S) && (o.touched = !0, o.dirty = !0, o.validatePromise = null, o.errors = $n, o.warnings = $n, o.triggerMetaEvent()), d.type) {
        case "reset":
          if (!c || E) {
            o.touched = !1, o.dirty = !1, o.validatePromise = void 0, o.errors = $n, o.warnings = $n, o.triggerMetaEvent(), m == null || m(), o.refresh();
            return;
          }
          break;
        case "remove": {
          if (v && Pi(v, s, g, p, S, d)) {
            o.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var C = d.data;
          if (E) {
            "touched" in C && (o.touched = C.touched), "validating" in C && !("originRCField" in C) && (o.validatePromise = C.validating ? Promise.resolve([]) : null), "errors" in C && (o.errors = C.errors || $n), "warnings" in C && (o.warnings = C.warnings || $n), o.dirty = !0, o.triggerMetaEvent(), o.reRender();
            return;
          } else if ("value" in C && Kr(c, y, !0)) {
            o.reRender();
            return;
          }
          if (v && !y.length && Pi(v, s, g, p, S, d)) {
            o.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var x = b.map(Ht);
          if (x.some(function(w) {
            return Kr(d.relatedFields, w);
          })) {
            o.reRender();
            return;
          }
          break;
        }
        default:
          if (E || (!b.length || y.length || v) && Pi(v, s, g, p, S, d)) {
            o.reRender();
            return;
          }
          break;
      }
      v === !0 && o.reRender();
    }), D(ht(o), "validateRules", function(s) {
      var c = o.getNamePath(), d = o.getValue(), f = s || {}, v = f.triggerName, h = f.validateOnly, b = h === void 0 ? !1 : h, m = Promise.resolve().then(/* @__PURE__ */ Mr(/* @__PURE__ */ ln().mark(function g() {
        var y, p, S, E, C, x, w;
        return ln().wrap(function(O) {
          for (; ; ) switch (O.prev = O.next) {
            case 0:
              if (o.mounted) {
                O.next = 2;
                break;
              }
              return O.abrupt("return", []);
            case 2:
              if (y = o.props, p = y.validateFirst, S = p === void 0 ? !1 : p, E = y.messageVariables, C = y.validateDebounce, x = o.getRules(), v && (x = x.filter(function(R) {
                return R;
              }).filter(function(R) {
                var _ = R.validateTrigger;
                if (!_)
                  return !0;
                var I = Nl(_);
                return I.includes(v);
              })), !(C && v)) {
                O.next = 10;
                break;
              }
              return O.next = 8, new Promise(function(R) {
                setTimeout(R, C);
              });
            case 8:
              if (o.validatePromise === m) {
                O.next = 10;
                break;
              }
              return O.abrupt("return", []);
            case 10:
              return w = Ny(c, d, x, s, S, E), w.catch(function(R) {
                return R;
              }).then(function() {
                var R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $n;
                if (o.validatePromise === m) {
                  var _;
                  o.validatePromise = null;
                  var I = [], F = [];
                  (_ = R.forEach) === null || _ === void 0 || _.call(R, function(M) {
                    var V = M.rule.warningOnly, N = M.errors, P = N === void 0 ? $n : N;
                    V ? F.push.apply(F, Ce(P)) : I.push.apply(I, Ce(P));
                  }), o.errors = I, o.warnings = F, o.triggerMetaEvent(), o.reRender();
                }
              }), O.abrupt("return", w);
            case 13:
            case "end":
              return O.stop();
          }
        }, g);
      })));
      return b || (o.validatePromise = m, o.dirty = !0, o.errors = $n, o.warnings = $n, o.triggerMetaEvent(), o.reRender()), m;
    }), D(ht(o), "isFieldValidating", function() {
      return !!o.validatePromise;
    }), D(ht(o), "isFieldTouched", function() {
      return o.touched;
    }), D(ht(o), "isFieldDirty", function() {
      if (o.dirty || o.props.initialValue !== void 0)
        return !0;
      var s = o.props.fieldContext, c = s.getInternalHooks(xr), d = c.getInitialValue;
      return d(o.getNamePath()) !== void 0;
    }), D(ht(o), "getErrors", function() {
      return o.errors;
    }), D(ht(o), "getWarnings", function() {
      return o.warnings;
    }), D(ht(o), "isListField", function() {
      return o.props.isListField;
    }), D(ht(o), "isList", function() {
      return o.props.isList;
    }), D(ht(o), "isPreserve", function() {
      return o.props.preserve;
    }), D(ht(o), "getMeta", function() {
      o.prevValidating = o.isFieldValidating();
      var s = {
        touched: o.isFieldTouched(),
        validating: o.prevValidating,
        errors: o.errors,
        warnings: o.warnings,
        name: o.getNamePath(),
        validated: o.validatePromise === null
      };
      return s;
    }), D(ht(o), "getOnlyChild", function(s) {
      if (typeof s == "function") {
        var c = o.getMeta();
        return z(z({}, o.getOnlyChild(s(o.getControlled(), c, o.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var d = Jn(s);
      return d.length !== 1 || !/* @__PURE__ */ u.isValidElement(d[0]) ? {
        child: d,
        isFunction: !1
      } : {
        child: d[0],
        isFunction: !1
      };
    }), D(ht(o), "getValue", function(s) {
      var c = o.props.fieldContext.getFieldsValue, d = o.getNamePath();
      return Wn(s || c(!0), d);
    }), D(ht(o), "getControlled", function() {
      var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = o.props, d = c.name, f = c.trigger, v = c.validateTrigger, h = c.getValueFromEvent, b = c.normalize, m = c.valuePropName, g = c.getValueProps, y = c.fieldContext, p = v !== void 0 ? v : y.validateTrigger, S = o.getNamePath(), E = y.getInternalHooks, C = y.getFieldsValue, x = E(xr), w = x.dispatch, $ = o.getValue(), O = g || function(M) {
        return D({}, m, M);
      }, R = s[f], _ = d !== void 0 ? O($) : {};
      process.env.NODE_ENV !== "production" && _ && Object.keys(_).forEach(function(M) {
        ut(typeof _[M] != "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(M, ")"));
      });
      var I = z(z({}, s), _);
      I[f] = function() {
        o.touched = !0, o.dirty = !0, o.triggerMetaEvent();
        for (var M, V = arguments.length, N = new Array(V), P = 0; P < V; P++)
          N[P] = arguments[P];
        h ? M = h.apply(void 0, N) : M = Dy.apply(void 0, [m].concat(N)), b && (M = b(M, $, C(!0))), w({
          type: "updateValue",
          namePath: S,
          value: M
        }), R && R.apply(void 0, N);
      };
      var F = Nl(p || []);
      return F.forEach(function(M) {
        var V = I[M];
        I[M] = function() {
          V && V.apply(void 0, arguments);
          var N = o.props.rules;
          N && N.length && w({
            type: "validateField",
            namePath: S,
            triggerName: M
          });
        };
      }), I;
    }), r.fieldContext) {
      var a = r.fieldContext.getInternalHooks, i = a(xr), l = i.initEntityValue;
      l(ht(o));
    }
    return o;
  }
  return Bt(n, [{
    key: "componentDidMount",
    value: function() {
      var o = this.props, a = o.shouldUpdate, i = o.fieldContext;
      if (this.mounted = !0, i) {
        var l = i.getInternalHooks, s = l(xr), c = s.registerField;
        this.cancelRegisterFunc = c(this);
      }
      a === !0 && this.reRender();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1;
    }
  }, {
    key: "reRender",
    value: function() {
      this.mounted && this.forceUpdate();
    }
  }, {
    key: "render",
    value: function() {
      var o = this.state.resetCount, a = this.props.children, i = this.getOnlyChild(a), l = i.child, s = i.isFunction, c;
      return s ? c = l : /* @__PURE__ */ u.isValidElement(l) ? c = /* @__PURE__ */ u.cloneElement(l, this.getControlled(l.props)) : (ut(!l, "`children` of Field is not validate ReactElement."), c = l), /* @__PURE__ */ u.createElement(u.Fragment, {
        key: o
      }, c);
    }
  }]), n;
}(u.Component);
D(hs, "contextType", no);
D(hs, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function Vf(e) {
  var t = e.name, n = yt(e, Ay), r = u.useContext(no), o = u.useContext(Aa), a = t !== void 0 ? Ht(t) : void 0, i = "keep";
  return n.isListField || (i = "_".concat((a || []).join("_"))), process.env.NODE_ENV !== "production" && n.preserve === !1 && n.isListField && a.length <= 1 && ut(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ u.createElement(hs, ke({
    key: i,
    name: a,
    isListField: !!o
  }, n, {
    fieldContext: r
  }));
}
function Fy(e) {
  var t = e.name, n = e.initialValue, r = e.children, o = e.rules, a = e.validateTrigger, i = e.isListField, l = u.useContext(no), s = u.useContext(Aa), c = u.useRef({
    keys: [],
    id: 0
  }), d = c.current, f = u.useMemo(function() {
    var m = Ht(l.prefixName) || [];
    return [].concat(Ce(m), Ce(Ht(t)));
  }, [l.prefixName, t]), v = u.useMemo(function() {
    return z(z({}, l), {}, {
      prefixName: f
    });
  }, [l, f]), h = u.useMemo(function() {
    return {
      getKey: function(g) {
        var y = f.length, p = g[y];
        return [d.keys[p], g.slice(y + 1)];
      }
    };
  }, [f]);
  if (typeof r != "function")
    return ut(!1, "Form.List only accepts function as children."), null;
  var b = function(g, y, p) {
    var S = p.source;
    return S === "internal" ? !1 : g !== y;
  };
  return /* @__PURE__ */ u.createElement(Aa.Provider, {
    value: h
  }, /* @__PURE__ */ u.createElement(no.Provider, {
    value: v
  }, /* @__PURE__ */ u.createElement(Vf, {
    name: [],
    shouldUpdate: b,
    rules: o,
    validateTrigger: a,
    initialValue: n,
    isList: !0,
    isListField: i ?? !!s
  }, function(m, g) {
    var y = m.value, p = y === void 0 ? [] : y, S = m.onChange, E = l.getFieldValue, C = function() {
      var O = E(f || []);
      return O || [];
    }, x = {
      add: function(O, R) {
        var _ = C();
        R >= 0 && R <= _.length ? (d.keys = [].concat(Ce(d.keys.slice(0, R)), [d.id], Ce(d.keys.slice(R))), S([].concat(Ce(_.slice(0, R)), [O], Ce(_.slice(R))))) : (process.env.NODE_ENV !== "production" && (R < 0 || R > _.length) && ut(!1, "The second parameter of the add function should be a valid positive number."), d.keys = [].concat(Ce(d.keys), [d.id]), S([].concat(Ce(_), [O]))), d.id += 1;
      },
      remove: function(O) {
        var R = C(), _ = new Set(Array.isArray(O) ? O : [O]);
        _.size <= 0 || (d.keys = d.keys.filter(function(I, F) {
          return !_.has(F);
        }), S(R.filter(function(I, F) {
          return !_.has(F);
        })));
      },
      move: function(O, R) {
        if (O !== R) {
          var _ = C();
          O < 0 || O >= _.length || R < 0 || R >= _.length || (d.keys = ru(d.keys, O, R), S(ru(_, O, R)));
        }
      }
    }, w = p || [];
    return Array.isArray(w) || (w = [], process.env.NODE_ENV !== "production" && ut(!1, "Current value of '".concat(f.join(" > "), "' is not an array type."))), r(w.map(function($, O) {
      var R = d.keys[O];
      return R === void 0 && (d.keys[O] = d.id, R = d.keys[O], d.id += 1), {
        name: O,
        key: R,
        isListField: !0
      };
    }), x, g);
  })));
}
function jy(e) {
  var t = !1, n = e.length, r = [];
  return e.length ? new Promise(function(o, a) {
    e.forEach(function(i, l) {
      i.catch(function(s) {
        return t = !0, s;
      }).then(function(s) {
        n -= 1, r[l] = s, !(n > 0) && (t && a(r), o(r));
      });
    });
  }) : Promise.resolve([]);
}
var Bf = "__@field_split__";
function Ni(e) {
  return e.map(function(t) {
    return "".concat(Be(t), ":").concat(t);
  }).join(Bf);
}
var jr = /* @__PURE__ */ function() {
  function e() {
    Vt(this, e), D(this, "kvs", /* @__PURE__ */ new Map());
  }
  return Bt(e, [{
    key: "set",
    value: function(n, r) {
      this.kvs.set(Ni(n), r);
    }
  }, {
    key: "get",
    value: function(n) {
      return this.kvs.get(Ni(n));
    }
  }, {
    key: "update",
    value: function(n, r) {
      var o = this.get(n), a = r(o);
      a ? this.set(n, a) : this.delete(n);
    }
  }, {
    key: "delete",
    value: function(n) {
      this.kvs.delete(Ni(n));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(n) {
      return Ce(this.kvs.entries()).map(function(r) {
        var o = K(r, 2), a = o[0], i = o[1], l = a.split(Bf);
        return n({
          key: l.map(function(s) {
            var c = s.match(/^([^:]*):(.*)$/), d = K(c, 3), f = d[1], v = d[2];
            return f === "number" ? Number(v) : v;
          }),
          value: i
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var n = {};
      return this.map(function(r) {
        var o = r.key, a = r.value;
        return n[o.join(".")] = a, null;
      }), n;
    }
  }]), e;
}(), Ly = ["name"], Hy = /* @__PURE__ */ Bt(function e(t) {
  var n = this;
  Vt(this, e), D(this, "formHooked", !1), D(this, "forceRootUpdate", void 0), D(this, "subscribable", !0), D(this, "store", {}), D(this, "fieldEntities", []), D(this, "initialValues", {}), D(this, "callbacks", {}), D(this, "validateMessages", null), D(this, "preserve", null), D(this, "lastValidatePromise", null), D(this, "getForm", function() {
    return {
      getFieldValue: n.getFieldValue,
      getFieldsValue: n.getFieldsValue,
      getFieldError: n.getFieldError,
      getFieldWarning: n.getFieldWarning,
      getFieldsError: n.getFieldsError,
      isFieldsTouched: n.isFieldsTouched,
      isFieldTouched: n.isFieldTouched,
      isFieldValidating: n.isFieldValidating,
      isFieldsValidating: n.isFieldsValidating,
      resetFields: n.resetFields,
      setFields: n.setFields,
      setFieldValue: n.setFieldValue,
      setFieldsValue: n.setFieldsValue,
      validateFields: n.validateFields,
      submit: n.submit,
      _init: !0,
      getInternalHooks: n.getInternalHooks
    };
  }), D(this, "getInternalHooks", function(r) {
    return r === xr ? (n.formHooked = !0, {
      dispatch: n.dispatch,
      initEntityValue: n.initEntityValue,
      registerField: n.registerField,
      useSubscribe: n.useSubscribe,
      setInitialValues: n.setInitialValues,
      destroyForm: n.destroyForm,
      setCallbacks: n.setCallbacks,
      setValidateMessages: n.setValidateMessages,
      getFields: n.getFields,
      setPreserve: n.setPreserve,
      getInitialValue: n.getInitialValue,
      registerWatch: n.registerWatch
    }) : (ut(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), D(this, "useSubscribe", function(r) {
    n.subscribable = r;
  }), D(this, "prevWithoutPreserves", null), D(this, "setInitialValues", function(r, o) {
    if (n.initialValues = r || {}, o) {
      var a, i = kr(r, n.store);
      (a = n.prevWithoutPreserves) === null || a === void 0 || a.map(function(l) {
        var s = l.key;
        i = Dn(i, s, Wn(r, s));
      }), n.prevWithoutPreserves = null, n.updateStore(i);
    }
  }), D(this, "destroyForm", function(r) {
    if (r)
      n.updateStore({});
    else {
      var o = new jr();
      n.getFieldEntities(!0).forEach(function(a) {
        n.isMergedPreserve(a.isPreserve()) || o.set(a.getNamePath(), !0);
      }), n.prevWithoutPreserves = o;
    }
  }), D(this, "getInitialValue", function(r) {
    var o = Wn(n.initialValues, r);
    return r.length ? kr(o) : o;
  }), D(this, "setCallbacks", function(r) {
    n.callbacks = r;
  }), D(this, "setValidateMessages", function(r) {
    n.validateMessages = r;
  }), D(this, "setPreserve", function(r) {
    n.preserve = r;
  }), D(this, "watchList", []), D(this, "registerWatch", function(r) {
    return n.watchList.push(r), function() {
      n.watchList = n.watchList.filter(function(o) {
        return o !== r;
      });
    };
  }), D(this, "notifyWatch", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (n.watchList.length) {
      var o = n.getFieldsValue(), a = n.getFieldsValue(!0);
      n.watchList.forEach(function(i) {
        i(o, a, r);
      });
    }
  }), D(this, "timeoutId", null), D(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !n.timeoutId && typeof window < "u" && (n.timeoutId = setTimeout(function() {
      n.timeoutId = null, n.formHooked || ut(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), D(this, "updateStore", function(r) {
    n.store = r;
  }), D(this, "getFieldEntities", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return r ? n.fieldEntities.filter(function(o) {
      return o.getNamePath().length;
    }) : n.fieldEntities;
  }), D(this, "getFieldsMap", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, o = new jr();
    return n.getFieldEntities(r).forEach(function(a) {
      var i = a.getNamePath();
      o.set(i, a);
    }), o;
  }), D(this, "getFieldEntitiesForNamePathList", function(r) {
    if (!r)
      return n.getFieldEntities(!0);
    var o = n.getFieldsMap(!0);
    return r.map(function(a) {
      var i = Ht(a);
      return o.get(i) || {
        INVALIDATE_NAME_PATH: Ht(a)
      };
    });
  }), D(this, "getFieldsValue", function(r, o) {
    n.warningUnhooked();
    var a, i, l;
    if (r === !0 || Array.isArray(r) ? (a = r, i = o) : r && Be(r) === "object" && (l = r.strict, i = r.filter), a === !0 && !i)
      return n.store;
    var s = n.getFieldEntitiesForNamePathList(Array.isArray(a) ? a : null), c = [];
    return s.forEach(function(d) {
      var f, v, h = "INVALIDATE_NAME_PATH" in d ? d.INVALIDATE_NAME_PATH : d.getNamePath();
      if (l) {
        var b, m;
        if ((b = (m = d).isList) !== null && b !== void 0 && b.call(m))
          return;
      } else if (!a && (f = (v = d).isListField) !== null && f !== void 0 && f.call(v))
        return;
      if (!i)
        c.push(h);
      else {
        var g = "getMeta" in d ? d.getMeta() : null;
        i(g) && c.push(h);
      }
    }), nu(n.store, c.map(Ht));
  }), D(this, "getFieldValue", function(r) {
    n.warningUnhooked();
    var o = Ht(r);
    return Wn(n.store, o);
  }), D(this, "getFieldsError", function(r) {
    n.warningUnhooked();
    var o = n.getFieldEntitiesForNamePathList(r);
    return o.map(function(a, i) {
      return a && !("INVALIDATE_NAME_PATH" in a) ? {
        name: a.getNamePath(),
        errors: a.getErrors(),
        warnings: a.getWarnings()
      } : {
        name: Ht(r[i]),
        errors: [],
        warnings: []
      };
    });
  }), D(this, "getFieldError", function(r) {
    n.warningUnhooked();
    var o = Ht(r), a = n.getFieldsError([o])[0];
    return a.errors;
  }), D(this, "getFieldWarning", function(r) {
    n.warningUnhooked();
    var o = Ht(r), a = n.getFieldsError([o])[0];
    return a.warnings;
  }), D(this, "isFieldsTouched", function() {
    n.warningUnhooked();
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    var i = o[0], l = o[1], s, c = !1;
    o.length === 0 ? s = null : o.length === 1 ? Array.isArray(i) ? (s = i.map(Ht), c = !1) : (s = null, c = i) : (s = i.map(Ht), c = l);
    var d = n.getFieldEntities(!0), f = function(g) {
      return g.isFieldTouched();
    };
    if (!s)
      return c ? d.every(function(m) {
        return f(m) || m.isList();
      }) : d.some(f);
    var v = new jr();
    s.forEach(function(m) {
      v.set(m, []);
    }), d.forEach(function(m) {
      var g = m.getNamePath();
      s.forEach(function(y) {
        y.every(function(p, S) {
          return g[S] === p;
        }) && v.update(y, function(p) {
          return [].concat(Ce(p), [m]);
        });
      });
    });
    var h = function(g) {
      return g.some(f);
    }, b = v.map(function(m) {
      var g = m.value;
      return g;
    });
    return c ? b.every(h) : b.some(h);
  }), D(this, "isFieldTouched", function(r) {
    return n.warningUnhooked(), n.isFieldsTouched([r]);
  }), D(this, "isFieldsValidating", function(r) {
    n.warningUnhooked();
    var o = n.getFieldEntities();
    if (!r)
      return o.some(function(i) {
        return i.isFieldValidating();
      });
    var a = r.map(Ht);
    return o.some(function(i) {
      var l = i.getNamePath();
      return Kr(a, l) && i.isFieldValidating();
    });
  }), D(this, "isFieldValidating", function(r) {
    return n.warningUnhooked(), n.isFieldsValidating([r]);
  }), D(this, "resetWithFieldInitialValue", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = new jr(), a = n.getFieldEntities(!0);
    a.forEach(function(s) {
      var c = s.props.initialValue, d = s.getNamePath();
      if (c !== void 0) {
        var f = o.get(d) || /* @__PURE__ */ new Set();
        f.add({
          entity: s,
          value: c
        }), o.set(d, f);
      }
    });
    var i = function(c) {
      c.forEach(function(d) {
        var f = d.props.initialValue;
        if (f !== void 0) {
          var v = d.getNamePath(), h = n.getInitialValue(v);
          if (h !== void 0)
            ut(!1, "Form already set 'initialValues' with path '".concat(v.join("."), "'. Field can not overwrite it."));
          else {
            var b = o.get(v);
            if (b && b.size > 1)
              ut(!1, "Multiple Field with path '".concat(v.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (b) {
              var m = n.getFieldValue(v), g = d.isListField();
              !g && (!r.skipExist || m === void 0) && n.updateStore(Dn(n.store, v, Ce(b)[0].value));
            }
          }
        }
      });
    }, l;
    r.entities ? l = r.entities : r.namePathList ? (l = [], r.namePathList.forEach(function(s) {
      var c = o.get(s);
      if (c) {
        var d;
        (d = l).push.apply(d, Ce(Ce(c).map(function(f) {
          return f.entity;
        })));
      }
    })) : l = a, i(l);
  }), D(this, "resetFields", function(r) {
    n.warningUnhooked();
    var o = n.store;
    if (!r) {
      n.updateStore(kr(n.initialValues)), n.resetWithFieldInitialValue(), n.notifyObservers(o, null, {
        type: "reset"
      }), n.notifyWatch();
      return;
    }
    var a = r.map(Ht);
    a.forEach(function(i) {
      var l = n.getInitialValue(i);
      n.updateStore(Dn(n.store, i, l));
    }), n.resetWithFieldInitialValue({
      namePathList: a
    }), n.notifyObservers(o, a, {
      type: "reset"
    }), n.notifyWatch(a);
  }), D(this, "setFields", function(r) {
    n.warningUnhooked();
    var o = n.store, a = [];
    r.forEach(function(i) {
      var l = i.name, s = yt(i, Ly), c = Ht(l);
      a.push(c), "value" in s && n.updateStore(Dn(n.store, c, s.value)), n.notifyObservers(o, [c], {
        type: "setField",
        data: i
      });
    }), n.notifyWatch(a);
  }), D(this, "getFields", function() {
    var r = n.getFieldEntities(!0), o = r.map(function(a) {
      var i = a.getNamePath(), l = a.getMeta(), s = z(z({}, l), {}, {
        name: i,
        value: n.getFieldValue(i)
      });
      return Object.defineProperty(s, "originRCField", {
        value: !0
      }), s;
    });
    return o;
  }), D(this, "initEntityValue", function(r) {
    var o = r.props.initialValue;
    if (o !== void 0) {
      var a = r.getNamePath(), i = Wn(n.store, a);
      i === void 0 && n.updateStore(Dn(n.store, a, o));
    }
  }), D(this, "isMergedPreserve", function(r) {
    var o = r !== void 0 ? r : n.preserve;
    return o ?? !0;
  }), D(this, "registerField", function(r) {
    n.fieldEntities.push(r);
    var o = r.getNamePath();
    if (n.notifyWatch([o]), r.props.initialValue !== void 0) {
      var a = n.store;
      n.resetWithFieldInitialValue({
        entities: [r],
        skipExist: !0
      }), n.notifyObservers(a, [r.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(i, l) {
      var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (n.fieldEntities = n.fieldEntities.filter(function(f) {
        return f !== r;
      }), !n.isMergedPreserve(l) && (!i || s.length > 1)) {
        var c = i ? void 0 : n.getInitialValue(o);
        if (o.length && n.getFieldValue(o) !== c && n.fieldEntities.every(function(f) {
          return (
            // Only reset when no namePath exist
            !zf(f.getNamePath(), o)
          );
        })) {
          var d = n.store;
          n.updateStore(Dn(d, o, c, !0)), n.notifyObservers(d, [o], {
            type: "remove"
          }), n.triggerDependenciesUpdate(d, o);
        }
      }
      n.notifyWatch([o]);
    };
  }), D(this, "dispatch", function(r) {
    switch (r.type) {
      case "updateValue": {
        var o = r.namePath, a = r.value;
        n.updateValue(o, a);
        break;
      }
      case "validateField": {
        var i = r.namePath, l = r.triggerName;
        n.validateFields([i], {
          triggerName: l
        });
        break;
      }
    }
  }), D(this, "notifyObservers", function(r, o, a) {
    if (n.subscribable) {
      var i = z(z({}, a), {}, {
        store: n.getFieldsValue(!0)
      });
      n.getFieldEntities().forEach(function(l) {
        var s = l.onStoreChange;
        s(r, o, i);
      });
    } else
      n.forceRootUpdate();
  }), D(this, "triggerDependenciesUpdate", function(r, o) {
    var a = n.getDependencyChildrenFields(o);
    return a.length && n.validateFields(a), n.notifyObservers(r, a, {
      type: "dependenciesUpdate",
      relatedFields: [o].concat(Ce(a))
    }), a;
  }), D(this, "updateValue", function(r, o) {
    var a = Ht(r), i = n.store;
    n.updateStore(Dn(n.store, a, o)), n.notifyObservers(i, [a], {
      type: "valueUpdate",
      source: "internal"
    }), n.notifyWatch([a]);
    var l = n.triggerDependenciesUpdate(i, a), s = n.callbacks.onValuesChange;
    if (s) {
      var c = nu(n.store, [a]);
      s(c, n.getFieldsValue());
    }
    n.triggerOnFieldsChange([a].concat(Ce(l)));
  }), D(this, "setFieldsValue", function(r) {
    n.warningUnhooked();
    var o = n.store;
    if (r) {
      var a = kr(n.store, r);
      n.updateStore(a);
    }
    n.notifyObservers(o, null, {
      type: "valueUpdate",
      source: "external"
    }), n.notifyWatch();
  }), D(this, "setFieldValue", function(r, o) {
    n.setFields([{
      name: r,
      value: o
    }]);
  }), D(this, "getDependencyChildrenFields", function(r) {
    var o = /* @__PURE__ */ new Set(), a = [], i = new jr();
    n.getFieldEntities().forEach(function(s) {
      var c = s.props.dependencies;
      (c || []).forEach(function(d) {
        var f = Ht(d);
        i.update(f, function() {
          var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return v.add(s), v;
        });
      });
    });
    var l = function s(c) {
      var d = i.get(c) || /* @__PURE__ */ new Set();
      d.forEach(function(f) {
        if (!o.has(f)) {
          o.add(f);
          var v = f.getNamePath();
          f.isFieldDirty() && v.length && (a.push(v), s(v));
        }
      });
    };
    return l(r), a;
  }), D(this, "triggerOnFieldsChange", function(r, o) {
    var a = n.callbacks.onFieldsChange;
    if (a) {
      var i = n.getFields();
      if (o) {
        var l = new jr();
        o.forEach(function(c) {
          var d = c.name, f = c.errors;
          l.set(d, f);
        }), i.forEach(function(c) {
          c.errors = l.get(c.name) || c.errors;
        });
      }
      var s = i.filter(function(c) {
        var d = c.name;
        return Kr(r, d);
      });
      s.length && a(s, i);
    }
  }), D(this, "validateFields", function(r, o) {
    n.warningUnhooked();
    var a, i;
    Array.isArray(r) || typeof r == "string" || typeof o == "string" ? (a = r, i = o) : i = r;
    var l = !!a, s = l ? a.map(Ht) : [], c = [], d = String(Date.now()), f = /* @__PURE__ */ new Set(), v = i || {}, h = v.recursive, b = v.dirty;
    n.getFieldEntities(!0).forEach(function(p) {
      if (l || s.push(p.getNamePath()), !(!p.props.rules || !p.props.rules.length) && !(b && !p.isFieldDirty())) {
        var S = p.getNamePath();
        if (f.add(S.join(d)), !l || Kr(s, S, h)) {
          var E = p.validateRules(z({
            validateMessages: z(z({}, Hf), n.validateMessages)
          }, i));
          c.push(E.then(function() {
            return {
              name: S,
              errors: [],
              warnings: []
            };
          }).catch(function(C) {
            var x, w = [], $ = [];
            return (x = C.forEach) === null || x === void 0 || x.call(C, function(O) {
              var R = O.rule.warningOnly, _ = O.errors;
              R ? $.push.apply($, Ce(_)) : w.push.apply(w, Ce(_));
            }), w.length ? Promise.reject({
              name: S,
              errors: w,
              warnings: $
            }) : {
              name: S,
              errors: w,
              warnings: $
            };
          }));
        }
      }
    });
    var m = jy(c);
    n.lastValidatePromise = m, m.catch(function(p) {
      return p;
    }).then(function(p) {
      var S = p.map(function(E) {
        var C = E.name;
        return C;
      });
      n.notifyObservers(n.store, S, {
        type: "validateFinish"
      }), n.triggerOnFieldsChange(S, p);
    });
    var g = m.then(function() {
      return n.lastValidatePromise === m ? Promise.resolve(n.getFieldsValue(s)) : Promise.reject([]);
    }).catch(function(p) {
      var S = p.filter(function(E) {
        return E && E.errors.length;
      });
      return Promise.reject({
        values: n.getFieldsValue(s),
        errorFields: S,
        outOfDate: n.lastValidatePromise !== m
      });
    });
    g.catch(function(p) {
      return p;
    });
    var y = s.filter(function(p) {
      return f.has(p.join(d));
    });
    return n.triggerOnFieldsChange(y), g;
  }), D(this, "submit", function() {
    n.warningUnhooked(), n.validateFields().then(function(r) {
      var o = n.callbacks.onFinish;
      if (o)
        try {
          o(r);
        } catch (a) {
          console.error(a);
        }
    }).catch(function(r) {
      var o = n.callbacks.onFinishFailed;
      o && o(r);
    });
  }), this.forceRootUpdate = t;
});
function Wf(e) {
  var t = u.useRef(), n = u.useState({}), r = K(n, 2), o = r[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var a = function() {
        o({});
      }, i = new Hy(a);
      t.current = i.getForm();
    }
  return [t.current];
}
var Hl = /* @__PURE__ */ u.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), zy = function(t) {
  var n = t.validateMessages, r = t.onFormChange, o = t.onFormFinish, a = t.children, i = u.useContext(Hl), l = u.useRef({});
  return /* @__PURE__ */ u.createElement(Hl.Provider, {
    value: z(z({}, i), {}, {
      validateMessages: z(z({}, i.validateMessages), n),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(c, d) {
        r && r(c, {
          changedFields: d,
          forms: l.current
        }), i.triggerFormChange(c, d);
      },
      triggerFormFinish: function(c, d) {
        o && o(c, {
          values: d,
          forms: l.current
        }), i.triggerFormFinish(c, d);
      },
      registerForm: function(c, d) {
        c && (l.current = z(z({}, l.current), {}, D({}, c, d))), i.registerForm(c, d);
      },
      unregisterForm: function(c) {
        var d = z({}, l.current);
        delete d[c], l.current = d, i.unregisterForm(c);
      }
    })
  }, a);
}, Vy = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], By = function(t, n) {
  var r = t.name, o = t.initialValues, a = t.fields, i = t.form, l = t.preserve, s = t.children, c = t.component, d = c === void 0 ? "form" : c, f = t.validateMessages, v = t.validateTrigger, h = v === void 0 ? "onChange" : v, b = t.onValuesChange, m = t.onFieldsChange, g = t.onFinish, y = t.onFinishFailed, p = t.clearOnDestroy, S = yt(t, Vy), E = u.useRef(null), C = u.useContext(Hl), x = Wf(i), w = K(x, 1), $ = w[0], O = $.getInternalHooks(xr), R = O.useSubscribe, _ = O.setInitialValues, I = O.setCallbacks, F = O.setValidateMessages, M = O.setPreserve, V = O.destroyForm;
  u.useImperativeHandle(n, function() {
    return z(z({}, $), {}, {
      nativeElement: E.current
    });
  }), u.useEffect(function() {
    return C.registerForm(r, $), function() {
      C.unregisterForm(r);
    };
  }, [C, $, r]), F(z(z({}, C.validateMessages), f)), I({
    onValuesChange: b,
    onFieldsChange: function(U) {
      if (C.triggerFormChange(r, U), m) {
        for (var G = arguments.length, le = new Array(G > 1 ? G - 1 : 0), Y = 1; Y < G; Y++)
          le[Y - 1] = arguments[Y];
        m.apply(void 0, [U].concat(le));
      }
    },
    onFinish: function(U) {
      C.triggerFormFinish(r, U), g && g(U);
    },
    onFinishFailed: y
  }), M(l);
  var N = u.useRef(null);
  _(o, !N.current), N.current || (N.current = !0), u.useEffect(
    function() {
      return function() {
        return V(p);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var P, T = typeof s == "function";
  if (T) {
    var j = $.getFieldsValue(!0);
    P = s(j, $);
  } else
    P = s;
  R(!T);
  var H = u.useRef();
  u.useEffect(function() {
    Ty(H.current || [], a || []) || $.setFields(a || []), H.current = a;
  }, [a, $]);
  var L = u.useMemo(function() {
    return z(z({}, $), {}, {
      validateTrigger: h
    });
  }, [$, h]), q = /* @__PURE__ */ u.createElement(Aa.Provider, {
    value: null
  }, /* @__PURE__ */ u.createElement(no.Provider, {
    value: L
  }, P));
  return d === !1 ? q : /* @__PURE__ */ u.createElement(d, ke({}, S, {
    ref: E,
    onSubmit: function(U) {
      U.preventDefault(), U.stopPropagation(), $.submit();
    },
    onReset: function(U) {
      var G;
      U.preventDefault(), $.resetFields(), (G = S.onReset) === null || G === void 0 || G.call(S, U);
    }
  }), q);
};
function ou(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var Wy = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), n = ze(t);
  ut(n.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function ky() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0], o = t[1], a = o === void 0 ? {} : o, i = Zb(a) ? {
    form: a
  } : a, l = i.form, s = jt(), c = K(s, 2), d = c[0], f = c[1], v = an(function() {
    return ou(d);
  }, [d]), h = ze(v);
  h.current = v;
  var b = Dt(no), m = l || b, g = m && m._init;
  process.env.NODE_ENV !== "production" && ut(t.length === 2 ? l ? g : !0 : g, "useWatch requires a form instance since it can not auto detect from context.");
  var y = Ht(r), p = ze(y);
  return p.current = y, Wy(y), Mt(
    function() {
      if (g) {
        var S = m.getFieldsValue, E = m.getInternalHooks, C = E(xr), x = C.registerWatch, w = function(_, I) {
          var F = i.preserve ? I : _;
          return typeof r == "function" ? r(F) : Wn(F, p.current);
        }, $ = x(function(R, _) {
          var I = w(R, _), F = ou(I);
          h.current !== F && (h.current = F, f(I));
        }), O = w(S(), S(!0));
        return d !== O && f(O), $;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [g]
  ), d;
}
var Uy = /* @__PURE__ */ u.forwardRef(By), qo = Uy;
qo.FormProvider = zy;
qo.Field = Vf;
qo.List = Fy;
qo.useForm = Wf;
qo.useWatch = ky;
const Pn = /* @__PURE__ */ u.createContext({});
process.env.NODE_ENV !== "production" && (Pn.displayName = "FormItemInputContext");
const Gy = (e) => {
  let {
    children: t,
    status: n,
    override: r
  } = e;
  const o = Dt(Pn), a = an(() => {
    const i = Object.assign({}, o);
    return r && delete i.isFormItemInput, n && (delete i.status, delete i.hasFeedback, delete i.feedbackIcon), i;
  }, [n, r, o]);
  return /* @__PURE__ */ u.createElement(Pn.Provider, {
    value: a
  }, t);
}, qy = /* @__PURE__ */ Vo(void 0), ro = (e) => {
  const {
    space: t,
    form: n,
    children: r
  } = e;
  if (r == null)
    return null;
  let o = r;
  return n && (o = /* @__PURE__ */ B.createElement(Gy, {
    override: !0,
    status: !0
  }, o)), t && (o = /* @__PURE__ */ B.createElement(db, null, o)), o;
}, Ky = (e) => ({
  [e.componentCls]: {
    // For common/openAnimation
    [`${e.antCls}-motion-collapse-legacy`]: {
      overflow: "hidden",
      "&-active": {
        transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
      }
    },
    [`${e.antCls}-motion-collapse`]: {
      overflow: "hidden",
      transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
    }
  }
}), Xy = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), Yy = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), ps = function(e, t, n, r) {
  const a = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${a}${e}-enter,
      ${a}${e}-appear
    `]: Object.assign(Object.assign({}, Xy(r)), {
      animationPlayState: "paused"
    }),
    [`${a}${e}-leave`]: Object.assign(Object.assign({}, Yy(r)), {
      animationPlayState: "paused"
    }),
    [`
      ${a}${e}-enter${e}-enter-active,
      ${a}${e}-appear${e}-appear-active
    `]: {
      animationName: t,
      animationPlayState: "running"
    },
    [`${a}${e}-leave${e}-leave-active`]: {
      animationName: n,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, Qy = new Ot("antMoveDownIn", {
  "0%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), Zy = new Ot("antMoveDownOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), Jy = new Ot("antMoveLeftIn", {
  "0%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), eS = new Ot("antMoveLeftOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), tS = new Ot("antMoveRightIn", {
  "0%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), nS = new Ot("antMoveRightOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), rS = new Ot("antMoveUpIn", {
  "0%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), oS = new Ot("antMoveUpOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), aS = {
  "move-up": {
    inKeyframes: rS,
    outKeyframes: oS
  },
  "move-down": {
    inKeyframes: Qy,
    outKeyframes: Zy
  },
  "move-left": {
    inKeyframes: Jy,
    outKeyframes: eS
  },
  "move-right": {
    inKeyframes: tS,
    outKeyframes: nS
  }
}, au = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: o,
    outKeyframes: a
  } = aS[t];
  return [ps(r, o, a, e.motionDurationMid), {
    [`
        ${r}-enter,
        ${r}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, kf = new Ot("antSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), Uf = new Ot("antSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), Gf = new Ot("antSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
}), qf = new Ot("antSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
}), iS = new Ot("antSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), lS = new Ot("antSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), sS = new Ot("antSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
}), cS = new Ot("antSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
}), uS = {
  "slide-up": {
    inKeyframes: kf,
    outKeyframes: Uf
  },
  "slide-down": {
    inKeyframes: Gf,
    outKeyframes: qf
  },
  "slide-left": {
    inKeyframes: iS,
    outKeyframes: lS
  },
  "slide-right": {
    inKeyframes: sS,
    outKeyframes: cS
  }
}, iu = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: o,
    outKeyframes: a
  } = uS[t];
  return [ps(r, o, a, e.motionDurationMid), {
    [`
      ${r}-enter,
      ${r}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutQuint,
      "&-prepare": {
        transform: "scale(1)"
      }
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInQuint
    }
  }];
}, dS = new Ot("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), fS = new Ot("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), lu = new Ot("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), su = new Ot("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), vS = new Ot("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), gS = new Ot("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), mS = new Ot("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), hS = new Ot("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), pS = new Ot("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), bS = new Ot("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), yS = new Ot("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), SS = new Ot("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), CS = {
  zoom: {
    inKeyframes: dS,
    outKeyframes: fS
  },
  "zoom-big": {
    inKeyframes: lu,
    outKeyframes: su
  },
  "zoom-big-fast": {
    inKeyframes: lu,
    outKeyframes: su
  },
  "zoom-left": {
    inKeyframes: mS,
    outKeyframes: hS
  },
  "zoom-right": {
    inKeyframes: pS,
    outKeyframes: bS
  },
  "zoom-up": {
    inKeyframes: vS,
    outKeyframes: gS
  },
  "zoom-down": {
    inKeyframes: yS,
    outKeyframes: SS
  }
}, Kf = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: o,
    outKeyframes: a
  } = CS[t];
  return [ps(r, o, a, t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid), {
    [`
        ${r}-enter,
        ${r}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
};
function ES(e) {
  return (t) => /* @__PURE__ */ u.createElement(br, {
    theme: {
      token: {
        motion: !1,
        zIndexPopupBase: 0
      }
    }
  }, /* @__PURE__ */ u.createElement(e, Object.assign({}, t)));
}
const Xf = (e, t, n, r) => ES((a) => {
  const {
    prefixCls: i,
    style: l
  } = a, s = u.useRef(null), [c, d] = u.useState(0), [f, v] = u.useState(0), [h, b] = Jt(!1, {
    value: a.open
  }), {
    getPrefixCls: m
  } = u.useContext(Ct), g = m(t || "select", i);
  u.useEffect(() => {
    if (b(!0), typeof ResizeObserver < "u") {
      const S = new ResizeObserver((C) => {
        const x = C[0].target;
        d(x.offsetHeight + 8), v(x.offsetWidth);
      }), E = setInterval(() => {
        var C;
        const x = n ? `.${n(g)}` : `.${g}-dropdown`, w = (C = s.current) === null || C === void 0 ? void 0 : C.querySelector(x);
        w && (clearInterval(E), S.observe(w));
      }, 10);
      return () => {
        clearInterval(E), S.disconnect();
      };
    }
  }, []);
  let y = Object.assign(Object.assign({}, a), {
    style: Object.assign(Object.assign({}, l), {
      margin: 0
    }),
    open: h,
    visible: h,
    getPopupContainer: () => s.current
  });
  r && (y = r(y));
  const p = {
    paddingBottom: c,
    position: "relative",
    minWidth: f
  };
  return /* @__PURE__ */ u.createElement("div", {
    ref: s,
    style: p
  }, /* @__PURE__ */ u.createElement(e, Object.assign({}, y)));
}), bs = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4));
};
var Za = function(t) {
  var n = t.className, r = t.customizeIcon, o = t.customizeIconProps, a = t.children, i = t.onMouseDown, l = t.onClick, s = typeof r == "function" ? r(o) : r;
  return /* @__PURE__ */ u.createElement("span", {
    className: n,
    onMouseDown: function(d) {
      d.preventDefault(), i == null || i(d);
    },
    style: {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    unselectable: "on",
    onClick: l,
    "aria-hidden": !0
  }, s !== void 0 ? s : /* @__PURE__ */ u.createElement("span", {
    className: ne(n.split(/\s+/).map(function(c) {
      return "".concat(c, "-icon");
    }))
  }, a));
}, xS = function(t, n, r, o, a) {
  var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !1, l = arguments.length > 6 ? arguments[6] : void 0, s = arguments.length > 7 ? arguments[7] : void 0, c = B.useMemo(function() {
    if (Be(o) === "object")
      return o.clearIcon;
    if (a)
      return a;
  }, [o, a]), d = B.useMemo(function() {
    return !!(!i && o && (r.length || l) && !(s === "combobox" && l === ""));
  }, [o, i, r.length, l, s]);
  return {
    allowClear: d,
    clearIcon: /* @__PURE__ */ B.createElement(Za, {
      className: "".concat(t, "-clear"),
      onMouseDown: n,
      customizeIcon: c
    }, "×")
  };
}, Yf = /* @__PURE__ */ u.createContext(null);
function wS() {
  return u.useContext(Yf);
}
function $S() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10, t = u.useState(!1), n = K(t, 2), r = n[0], o = n[1], a = u.useRef(null), i = function() {
    window.clearTimeout(a.current);
  };
  u.useEffect(function() {
    return i;
  }, []);
  var l = function(c, d) {
    i(), a.current = window.setTimeout(function() {
      o(c), d && d();
    }, e);
  };
  return [r, l, i];
}
function Qf() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250, t = u.useRef(null), n = u.useRef(null);
  u.useEffect(function() {
    return function() {
      window.clearTimeout(n.current);
    };
  }, []);
  function r(o) {
    (o || t.current === null) && (t.current = o), window.clearTimeout(n.current), n.current = window.setTimeout(function() {
      t.current = null;
    }, e);
  }
  return [function() {
    return t.current;
  }, r];
}
function OS(e, t, n, r) {
  var o = u.useRef(null);
  o.current = {
    open: t,
    triggerOpen: n,
    customizedTrigger: r
  }, u.useEffect(function() {
    function a(i) {
      var l;
      if (!((l = o.current) !== null && l !== void 0 && l.customizedTrigger)) {
        var s = i.target;
        s.shadowRoot && i.composed && (s = i.composedPath()[0] || s), o.current.open && e().filter(function(c) {
          return c;
        }).every(function(c) {
          return !c.contains(s) && c !== s;
        }) && o.current.triggerOpen(!1);
      }
    }
    return window.addEventListener("mousedown", a), function() {
      return window.removeEventListener("mousedown", a);
    };
  }, []);
}
function RS(e) {
  return ![
    // System function button
    se.ESC,
    se.SHIFT,
    se.BACKSPACE,
    se.TAB,
    se.WIN_KEY,
    se.ALT,
    se.META,
    se.WIN_KEY_RIGHT,
    se.CTRL,
    se.SEMICOLON,
    se.EQUALS,
    se.CAPS_LOCK,
    se.CONTEXT_MENU,
    // F1-F12
    se.F1,
    se.F2,
    se.F3,
    se.F4,
    se.F5,
    se.F6,
    se.F7,
    se.F8,
    se.F9,
    se.F10,
    se.F11,
    se.F12
  ].includes(e);
}
var IS = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], Lr = void 0;
function PS(e, t) {
  var n = e.prefixCls, r = e.invalidate, o = e.item, a = e.renderItem, i = e.responsive, l = e.responsiveDisabled, s = e.registerSize, c = e.itemKey, d = e.className, f = e.style, v = e.children, h = e.display, b = e.order, m = e.component, g = m === void 0 ? "div" : m, y = yt(e, IS), p = i && !h;
  function S($) {
    s(c, $);
  }
  u.useEffect(function() {
    return function() {
      S(null);
    };
  }, []);
  var E = a && o !== Lr ? a(o) : v, C;
  r || (C = {
    opacity: p ? 0 : 1,
    height: p ? 0 : Lr,
    overflowY: p ? "hidden" : Lr,
    order: i ? b : Lr,
    pointerEvents: p ? "none" : Lr,
    position: p ? "absolute" : Lr
  });
  var x = {};
  p && (x["aria-hidden"] = !0);
  var w = /* @__PURE__ */ u.createElement(g, ke({
    className: ne(!r && n, d),
    style: z(z({}, C), f)
  }, x, y, {
    ref: t
  }), E);
  return i && (w = /* @__PURE__ */ u.createElement(nr, {
    onResize: function(O) {
      var R = O.offsetWidth;
      S(R);
    },
    disabled: l
  }, w)), w;
}
var Oo = /* @__PURE__ */ u.forwardRef(PS);
Oo.displayName = "Item";
function NS(e) {
  if (typeof MessageChannel > "u")
    St(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function MS() {
  var e = u.useRef(null), t = function(r) {
    e.current || (e.current = [], NS(function() {
      Ag(function() {
        e.current.forEach(function(o) {
          o();
        }), e.current = null;
      });
    })), e.current.push(r);
  };
  return t;
}
function mo(e, t) {
  var n = u.useState(t), r = K(n, 2), o = r[0], a = r[1], i = $t(function(l) {
    e(function() {
      a(l);
    });
  });
  return [o, i];
}
var Fa = /* @__PURE__ */ B.createContext(null), _S = ["component"], TS = ["className"], DS = ["className"], AS = function(t, n) {
  var r = u.useContext(Fa);
  if (!r) {
    var o = t.component, a = o === void 0 ? "div" : o, i = yt(t, _S);
    return /* @__PURE__ */ u.createElement(a, ke({}, i, {
      ref: n
    }));
  }
  var l = r.className, s = yt(r, TS), c = t.className, d = yt(t, DS);
  return /* @__PURE__ */ u.createElement(Fa.Provider, {
    value: null
  }, /* @__PURE__ */ u.createElement(Oo, ke({
    ref: n,
    className: ne(l, c)
  }, s, d)));
}, Zf = /* @__PURE__ */ u.forwardRef(AS);
Zf.displayName = "RawItem";
var FS = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], Jf = "responsive", ev = "invalidate";
function jS(e) {
  return "+ ".concat(e.length, " ...");
}
function LS(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-overflow" : n, o = e.data, a = o === void 0 ? [] : o, i = e.renderItem, l = e.renderRawItem, s = e.itemKey, c = e.itemWidth, d = c === void 0 ? 10 : c, f = e.ssr, v = e.style, h = e.className, b = e.maxCount, m = e.renderRest, g = e.renderRawRest, y = e.suffix, p = e.component, S = p === void 0 ? "div" : p, E = e.itemComponent, C = e.onVisibleChange, x = yt(e, FS), w = f === "full", $ = MS(), O = mo($, null), R = K(O, 2), _ = R[0], I = R[1], F = _ || 0, M = mo($, /* @__PURE__ */ new Map()), V = K(M, 2), N = V[0], P = V[1], T = mo($, 0), j = K(T, 2), H = j[0], L = j[1], q = mo($, 0), k = K(q, 2), U = k[0], G = k[1], le = mo($, 0), Y = K(le, 2), Q = Y[0], pe = Y[1], Z = jt(null), X = K(Z, 2), te = X[0], fe = X[1], W = jt(null), ae = K(W, 2), ie = ae[0], ue = ae[1], ve = u.useMemo(function() {
    return ie === null && w ? Number.MAX_SAFE_INTEGER : ie || 0;
  }, [ie, _]), $e = jt(!1), Re = K($e, 2), Se = Re[0], _e = Re[1], J = "".concat(r, "-item"), re = Math.max(H, U), ge = b === Jf, be = a.length && ge, Ie = b === ev, Me = be || typeof b == "number" && a.length > b, Ue = an(function() {
    var Ae = a;
    return be ? _ === null && w ? Ae = a : Ae = a.slice(0, Math.min(a.length, F / d)) : typeof b == "number" && (Ae = a.slice(0, b)), Ae;
  }, [a, d, _, b, be]), rt = an(function() {
    return be ? a.slice(ve + 1) : a.slice(Ue.length);
  }, [a, Ue, be, ve]), ct = ks(function(Ae, ce) {
    var We;
    return typeof s == "function" ? s(Ae) : (We = s && (Ae == null ? void 0 : Ae[s])) !== null && We !== void 0 ? We : ce;
  }, [s]), ft = ks(i || function(Ae) {
    return Ae;
  }, [i]);
  function De(Ae, ce, We) {
    ie === Ae && (ce === void 0 || ce === te) || (ue(Ae), We || (_e(Ae < a.length - 1), C == null || C(Ae)), ce !== void 0 && fe(ce));
  }
  function Te(Ae, ce) {
    I(ce.clientWidth);
  }
  function Ye(Ae, ce) {
    P(function(We) {
      var dt = new Map(We);
      return ce === null ? dt.delete(Ae) : dt.set(Ae, ce), dt;
    });
  }
  function Je(Ae, ce) {
    G(ce), L(U);
  }
  function et(Ae, ce) {
    pe(ce);
  }
  function lt(Ae) {
    return N.get(ct(Ue[Ae], Ae));
  }
  Rt(function() {
    if (F && typeof re == "number" && Ue) {
      var Ae = Q, ce = Ue.length, We = ce - 1;
      if (!ce) {
        De(0, null);
        return;
      }
      for (var dt = 0; dt < ce; dt += 1) {
        var Qe = lt(dt);
        if (w && (Qe = Qe || 0), Qe === void 0) {
          De(dt - 1, void 0, !0);
          break;
        }
        if (Ae += Qe, // Only one means `totalWidth` is the final width
        We === 0 && Ae <= F || // Last two width will be the final width
        dt === We - 1 && Ae + lt(We) <= F) {
          De(We, null);
          break;
        } else if (Ae + re > F) {
          De(dt - 1, Ae - Qe - Q + U);
          break;
        }
      }
      y && lt(0) + Q > F && fe(null);
    }
  }, [F, N, U, Q, ct, Ue]);
  var It = Se && !!rt.length, mt = {};
  te !== null && be && (mt = {
    position: "absolute",
    left: te,
    top: 0
  });
  var vt = {
    prefixCls: J,
    responsive: be,
    component: E,
    invalidate: Ie
  }, Fe = l ? function(Ae, ce) {
    var We = ct(Ae, ce);
    return /* @__PURE__ */ u.createElement(Fa.Provider, {
      key: We,
      value: z(z({}, vt), {}, {
        order: ce,
        item: Ae,
        itemKey: We,
        registerSize: Ye,
        display: ce <= ve
      })
    }, l(Ae, ce));
  } : function(Ae, ce) {
    var We = ct(Ae, ce);
    return /* @__PURE__ */ u.createElement(Oo, ke({}, vt, {
      order: ce,
      key: We,
      item: Ae,
      renderItem: ft,
      itemKey: We,
      registerSize: Ye,
      display: ce <= ve
    }));
  }, Ee, Ve = {
    order: It ? ve : Number.MAX_SAFE_INTEGER,
    className: "".concat(J, "-rest"),
    registerSize: Je,
    display: It
  };
  if (g)
    g && (Ee = /* @__PURE__ */ u.createElement(Fa.Provider, {
      value: z(z({}, vt), Ve)
    }, g(rt)));
  else {
    var je = m || jS;
    Ee = /* @__PURE__ */ u.createElement(Oo, ke({}, vt, Ve), typeof je == "function" ? je(rt) : je);
  }
  var qe = /* @__PURE__ */ u.createElement(S, ke({
    className: ne(!Ie && r, h),
    style: v,
    ref: t
  }, x), Ue.map(Fe), Me ? Ee : null, y && /* @__PURE__ */ u.createElement(Oo, ke({}, vt, {
    responsive: ge,
    responsiveDisabled: !be,
    order: ve,
    className: "".concat(J, "-suffix"),
    registerSize: et,
    display: !0,
    style: mt
  }), y));
  return ge && (qe = /* @__PURE__ */ u.createElement(nr, {
    onResize: Te,
    disabled: !be
  }, qe)), qe;
}
var Ko = /* @__PURE__ */ u.forwardRef(LS);
Ko.displayName = "Overflow";
Ko.Item = Zf;
Ko.RESPONSIVE = Jf;
Ko.INVALIDATE = ev;
var HS = function(t, n) {
  var r, o = t.prefixCls, a = t.id, i = t.inputElement, l = t.disabled, s = t.tabIndex, c = t.autoFocus, d = t.autoComplete, f = t.editable, v = t.activeDescendantId, h = t.value, b = t.maxLength, m = t.onKeyDown, g = t.onMouseDown, y = t.onChange, p = t.onPaste, S = t.onCompositionStart, E = t.onCompositionEnd, C = t.open, x = t.attrs, w = i || /* @__PURE__ */ u.createElement("input", null), $ = w, O = $.ref, R = $.props, _ = R.onKeyDown, I = R.onChange, F = R.onMouseDown, M = R.onCompositionStart, V = R.onCompositionEnd, N = R.style;
  return vr(!("maxLength" in w.props), "Passing 'maxLength' to input element directly may not work because input in BaseSelect is controlled."), w = /* @__PURE__ */ u.cloneElement(w, z(z(z({
    type: "search"
  }, R), {}, {
    // Override over origin props
    id: a,
    ref: bn(n, O),
    disabled: l,
    tabIndex: s,
    autoComplete: d || "off",
    autoFocus: c,
    className: ne("".concat(o, "-selection-search-input"), (r = w) === null || r === void 0 || (r = r.props) === null || r === void 0 ? void 0 : r.className),
    role: "combobox",
    "aria-expanded": C || !1,
    "aria-haspopup": "listbox",
    "aria-owns": "".concat(a, "_list"),
    "aria-autocomplete": "list",
    "aria-controls": "".concat(a, "_list"),
    "aria-activedescendant": C ? v : void 0
  }, x), {}, {
    value: f ? h : "",
    maxLength: b,
    readOnly: !f,
    unselectable: f ? null : "on",
    style: z(z({}, N), {}, {
      opacity: f ? null : 0
    }),
    onKeyDown: function(T) {
      m(T), _ && _(T);
    },
    onMouseDown: function(T) {
      g(T), F && F(T);
    },
    onChange: function(T) {
      y(T), I && I(T);
    },
    onCompositionStart: function(T) {
      S(T), M && M(T);
    },
    onCompositionEnd: function(T) {
      E(T), V && V(T);
    },
    onPaste: p
  })), w;
}, ys = /* @__PURE__ */ u.forwardRef(HS);
process.env.NODE_ENV !== "production" && (ys.displayName = "Input");
function Ss(e) {
  return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
}
var zS = typeof window < "u" && window.document && window.document.documentElement, VS = process.env.NODE_ENV !== "test" && zS;
function BS(e) {
  return e != null;
}
function WS(e) {
  return !e && e !== 0;
}
function cu(e) {
  return ["string", "number"].includes(Be(e));
}
function tv(e) {
  var t = void 0;
  return e && (cu(e.title) ? t = e.title.toString() : cu(e.label) && (t = e.label.toString())), t;
}
function kS(e, t) {
  VS ? u.useLayoutEffect(e, t) : u.useEffect(e, t);
}
function US(e) {
  var t;
  return (t = e.key) !== null && t !== void 0 ? t : e.value;
}
var uu = function(t) {
  t.preventDefault(), t.stopPropagation();
}, GS = function(t) {
  var n = t.id, r = t.prefixCls, o = t.values, a = t.open, i = t.searchValue, l = t.autoClearSearchValue, s = t.inputRef, c = t.placeholder, d = t.disabled, f = t.mode, v = t.showSearch, h = t.autoFocus, b = t.autoComplete, m = t.activeDescendantId, g = t.tabIndex, y = t.removeIcon, p = t.maxTagCount, S = t.maxTagTextLength, E = t.maxTagPlaceholder, C = E === void 0 ? function(fe) {
    return "+ ".concat(fe.length, " ...");
  } : E, x = t.tagRender, w = t.onToggleOpen, $ = t.onRemove, O = t.onInputChange, R = t.onInputPaste, _ = t.onInputKeyDown, I = t.onInputMouseDown, F = t.onInputCompositionStart, M = t.onInputCompositionEnd, V = u.useRef(null), N = jt(0), P = K(N, 2), T = P[0], j = P[1], H = jt(!1), L = K(H, 2), q = L[0], k = L[1], U = "".concat(r, "-selection"), G = a || f === "multiple" && l === !1 || f === "tags" ? i : "", le = f === "tags" || f === "multiple" && l === !1 || v && (a || q);
  kS(function() {
    j(V.current.scrollWidth);
  }, [G]);
  var Y = function(W, ae, ie, ue, ve) {
    return /* @__PURE__ */ u.createElement("span", {
      title: tv(W),
      className: ne("".concat(U, "-item"), D({}, "".concat(U, "-item-disabled"), ie))
    }, /* @__PURE__ */ u.createElement("span", {
      className: "".concat(U, "-item-content")
    }, ae), ue && /* @__PURE__ */ u.createElement(Za, {
      className: "".concat(U, "-item-remove"),
      onMouseDown: uu,
      onClick: ve,
      customizeIcon: y
    }, "×"));
  }, Q = function(W, ae, ie, ue, ve, $e) {
    var Re = function(_e) {
      uu(_e), w(!a);
    };
    return /* @__PURE__ */ u.createElement("span", {
      onMouseDown: Re
    }, x({
      label: ae,
      value: W,
      disabled: ie,
      closable: ue,
      onClose: ve,
      isMaxTag: !!$e
    }));
  }, pe = function(W) {
    var ae = W.disabled, ie = W.label, ue = W.value, ve = !d && !ae, $e = ie;
    if (typeof S == "number" && (typeof ie == "string" || typeof ie == "number")) {
      var Re = String($e);
      Re.length > S && ($e = "".concat(Re.slice(0, S), "..."));
    }
    var Se = function(J) {
      J && J.stopPropagation(), $(W);
    };
    return typeof x == "function" ? Q(ue, $e, ae, ve, Se) : Y(W, $e, ae, ve, Se);
  }, Z = function(W) {
    var ae = typeof C == "function" ? C(W) : C;
    return typeof x == "function" ? Q(void 0, ae, !1, !1, void 0, !0) : Y({
      title: ae
    }, ae, !1);
  }, X = /* @__PURE__ */ u.createElement("div", {
    className: "".concat(U, "-search"),
    style: {
      width: T
    },
    onFocus: function() {
      k(!0);
    },
    onBlur: function() {
      k(!1);
    }
  }, /* @__PURE__ */ u.createElement(ys, {
    ref: s,
    open: a,
    prefixCls: r,
    id: n,
    inputElement: null,
    disabled: d,
    autoFocus: h,
    autoComplete: b,
    editable: le,
    activeDescendantId: m,
    value: G,
    onKeyDown: _,
    onMouseDown: I,
    onChange: O,
    onPaste: R,
    onCompositionStart: F,
    onCompositionEnd: M,
    tabIndex: g,
    attrs: Ir(t, !0)
  }), /* @__PURE__ */ u.createElement("span", {
    ref: V,
    className: "".concat(U, "-search-mirror"),
    "aria-hidden": !0
  }, G, " ")), te = /* @__PURE__ */ u.createElement(Ko, {
    prefixCls: "".concat(U, "-overflow"),
    data: o,
    renderItem: pe,
    renderRest: Z,
    suffix: X,
    itemKey: US,
    maxCount: p
  });
  return /* @__PURE__ */ u.createElement(u.Fragment, null, te, !o.length && !G && /* @__PURE__ */ u.createElement("span", {
    className: "".concat(U, "-placeholder")
  }, c));
}, qS = function(t) {
  var n = t.inputElement, r = t.prefixCls, o = t.id, a = t.inputRef, i = t.disabled, l = t.autoFocus, s = t.autoComplete, c = t.activeDescendantId, d = t.mode, f = t.open, v = t.values, h = t.placeholder, b = t.tabIndex, m = t.showSearch, g = t.searchValue, y = t.activeValue, p = t.maxLength, S = t.onInputKeyDown, E = t.onInputMouseDown, C = t.onInputChange, x = t.onInputPaste, w = t.onInputCompositionStart, $ = t.onInputCompositionEnd, O = t.title, R = u.useState(!1), _ = K(R, 2), I = _[0], F = _[1], M = d === "combobox", V = M || m, N = v[0], P = g || "";
  M && y && !I && (P = y), u.useEffect(function() {
    M && F(!1);
  }, [M, y]);
  var T = d !== "combobox" && !f && !m ? !1 : !!P, j = O === void 0 ? tv(N) : O, H = u.useMemo(function() {
    return N ? null : /* @__PURE__ */ u.createElement("span", {
      className: "".concat(r, "-selection-placeholder"),
      style: T ? {
        visibility: "hidden"
      } : void 0
    }, h);
  }, [N, T, h, r]);
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement("span", {
    className: "".concat(r, "-selection-search")
  }, /* @__PURE__ */ u.createElement(ys, {
    ref: a,
    prefixCls: r,
    id: o,
    open: f,
    inputElement: n,
    disabled: i,
    autoFocus: l,
    autoComplete: s,
    editable: V,
    activeDescendantId: c,
    value: P,
    onKeyDown: S,
    onMouseDown: E,
    onChange: function(q) {
      F(!0), C(q);
    },
    onPaste: x,
    onCompositionStart: w,
    onCompositionEnd: $,
    tabIndex: b,
    attrs: Ir(t, !0),
    maxLength: M ? p : void 0
  })), !M && N ? /* @__PURE__ */ u.createElement("span", {
    className: "".concat(r, "-selection-item"),
    title: j,
    style: T ? {
      visibility: "hidden"
    } : void 0
  }, N.label) : null, H);
}, KS = function(t, n) {
  var r = ze(null), o = ze(!1), a = t.prefixCls, i = t.open, l = t.mode, s = t.showSearch, c = t.tokenWithEnter, d = t.disabled, f = t.autoClearSearchValue, v = t.onSearch, h = t.onSearchSubmit, b = t.onToggleOpen, m = t.onInputKeyDown, g = t.domRef;
  u.useImperativeHandle(n, function() {
    return {
      focus: function(T) {
        r.current.focus(T);
      },
      blur: function() {
        r.current.blur();
      }
    };
  });
  var y = Qf(0), p = K(y, 2), S = p[0], E = p[1], C = function(T) {
    var j = T.which;
    (j === se.UP || j === se.DOWN) && T.preventDefault(), m && m(T), j === se.ENTER && l === "tags" && !o.current && !i && (h == null || h(T.target.value)), RS(j) && b(!0);
  }, x = function() {
    E(!0);
  }, w = ze(null), $ = function(T) {
    v(T, !0, o.current) !== !1 && b(!0);
  }, O = function() {
    o.current = !0;
  }, R = function(T) {
    o.current = !1, l !== "combobox" && $(T.target.value);
  }, _ = function(T) {
    var j = T.target.value;
    if (c && w.current && /[\r\n]/.test(w.current)) {
      var H = w.current.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
      j = j.replace(H, w.current);
    }
    w.current = null, $(j);
  }, I = function(T) {
    var j = T.clipboardData, H = j == null ? void 0 : j.getData("text");
    w.current = H || "";
  }, F = function(T) {
    var j = T.target;
    if (j !== r.current) {
      var H = document.body.style.msTouchAction !== void 0;
      H ? setTimeout(function() {
        r.current.focus();
      }) : r.current.focus();
    }
  }, M = function(T) {
    var j = S();
    T.target !== r.current && !j && !(l === "combobox" && d) && T.preventDefault(), (l !== "combobox" && (!s || !j) || !i) && (i && f !== !1 && v("", !0, !1), b());
  }, V = {
    inputRef: r,
    onInputKeyDown: C,
    onInputMouseDown: x,
    onInputChange: _,
    onInputPaste: I,
    onInputCompositionStart: O,
    onInputCompositionEnd: R
  }, N = l === "multiple" || l === "tags" ? /* @__PURE__ */ u.createElement(GS, ke({}, t, V)) : /* @__PURE__ */ u.createElement(qS, ke({}, t, V));
  return /* @__PURE__ */ u.createElement("div", {
    ref: g,
    className: "".concat(a, "-selector"),
    onClick: F,
    onMouseDown: M
  }, N);
}, nv = /* @__PURE__ */ u.forwardRef(KS);
process.env.NODE_ENV !== "production" && (nv.displayName = "Selector");
function XS(e) {
  var t = e.prefixCls, n = e.align, r = e.arrow, o = e.arrowPos, a = r || {}, i = a.className, l = a.content, s = o.x, c = s === void 0 ? 0 : s, d = o.y, f = d === void 0 ? 0 : d, v = u.useRef();
  if (!n || !n.points)
    return null;
  var h = {
    position: "absolute"
  };
  if (n.autoArrow !== !1) {
    var b = n.points[0], m = n.points[1], g = b[0], y = b[1], p = m[0], S = m[1];
    g === p || !["t", "b"].includes(g) ? h.top = f : g === "t" ? h.top = 0 : h.bottom = 0, y === S || !["l", "r"].includes(y) ? h.left = c : y === "l" ? h.left = 0 : h.right = 0;
  }
  return /* @__PURE__ */ u.createElement("div", {
    ref: v,
    className: ne("".concat(t, "-arrow"), i),
    style: h
  }, l);
}
function YS(e) {
  var t = e.prefixCls, n = e.open, r = e.zIndex, o = e.mask, a = e.motion;
  return o ? /* @__PURE__ */ u.createElement(Nr, ke({}, a, {
    motionAppear: !0,
    visible: n,
    removeOnLeave: !0
  }), function(i) {
    var l = i.className;
    return /* @__PURE__ */ u.createElement("div", {
      style: {
        zIndex: r
      },
      className: ne("".concat(t, "-mask"), l)
    });
  }) : null;
}
var rv = /* @__PURE__ */ u.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (rv.displayName = "PopupContent");
var ov = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.popup, r = e.className, o = e.prefixCls, a = e.style, i = e.target, l = e.onVisibleChanged, s = e.open, c = e.keepDom, d = e.fresh, f = e.onClick, v = e.mask, h = e.arrow, b = e.arrowPos, m = e.align, g = e.motion, y = e.maskMotion, p = e.forceRender, S = e.getPopupContainer, E = e.autoDestroy, C = e.portal, x = e.zIndex, w = e.onMouseEnter, $ = e.onMouseLeave, O = e.onPointerEnter, R = e.ready, _ = e.offsetX, I = e.offsetY, F = e.offsetR, M = e.offsetB, V = e.onAlign, N = e.onPrepare, P = e.stretch, T = e.targetWidth, j = e.targetHeight, H = typeof n == "function" ? n() : n, L = s || c, q = (S == null ? void 0 : S.length) > 0, k = u.useState(!S || !q), U = K(k, 2), G = U[0], le = U[1];
  if (Rt(function() {
    !G && q && i && le(!0);
  }, [G, q, i]), !G)
    return null;
  var Y = "auto", Q = {
    left: "-1000vw",
    top: "-1000vh",
    right: Y,
    bottom: Y
  };
  if (R || !s) {
    var pe, Z = m.points, X = m.dynamicInset || ((pe = m._experimental) === null || pe === void 0 ? void 0 : pe.dynamicInset), te = X && Z[0][1] === "r", fe = X && Z[0][0] === "b";
    te ? (Q.right = F, Q.left = Y) : (Q.left = _, Q.right = Y), fe ? (Q.bottom = M, Q.top = Y) : (Q.top = I, Q.bottom = Y);
  }
  var W = {};
  return P && (P.includes("height") && j ? W.height = j : P.includes("minHeight") && j && (W.minHeight = j), P.includes("width") && T ? W.width = T : P.includes("minWidth") && T && (W.minWidth = T)), s || (W.pointerEvents = "none"), /* @__PURE__ */ u.createElement(C, {
    open: p || L,
    getContainer: S && function() {
      return S(i);
    },
    autoDestroy: E
  }, /* @__PURE__ */ u.createElement(YS, {
    prefixCls: o,
    open: s,
    zIndex: x,
    mask: v,
    motion: y
  }), /* @__PURE__ */ u.createElement(nr, {
    onResize: V,
    disabled: !s
  }, function(ae) {
    return /* @__PURE__ */ u.createElement(Nr, ke({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: p,
      leavedClassName: "".concat(o, "-hidden")
    }, g, {
      onAppearPrepare: N,
      onEnterPrepare: N,
      visible: s,
      onVisibleChanged: function(ue) {
        var ve;
        g == null || (ve = g.onVisibleChanged) === null || ve === void 0 || ve.call(g, ue), l(ue);
      }
    }), function(ie, ue) {
      var ve = ie.className, $e = ie.style, Re = ne(o, ve, r);
      return /* @__PURE__ */ u.createElement("div", {
        ref: bn(ae, t, ue),
        className: Re,
        style: z(z(z(z({
          "--arrow-x": "".concat(b.x || 0, "px"),
          "--arrow-y": "".concat(b.y || 0, "px")
        }, Q), W), $e), {}, {
          boxSizing: "border-box",
          zIndex: x
        }, a),
        onMouseEnter: w,
        onMouseLeave: $,
        onPointerEnter: O,
        onClick: f
      }, h && /* @__PURE__ */ u.createElement(XS, {
        prefixCls: o,
        arrow: h,
        arrowPos: b,
        align: m
      }), /* @__PURE__ */ u.createElement(rv, {
        cache: !s && !d
      }, H));
    });
  }));
});
process.env.NODE_ENV !== "production" && (ov.displayName = "Popup");
var av = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.children, r = e.getTriggerDOMNode, o = Bo(n), a = u.useCallback(function(l) {
    Ql(t, r ? r(l) : l);
  }, [r]), i = Va(a, n.ref);
  return o ? /* @__PURE__ */ u.cloneElement(n, {
    ref: i
  }) : n;
});
process.env.NODE_ENV !== "production" && (av.displayName = "TriggerWrapper");
var du = /* @__PURE__ */ u.createContext(null);
function fu(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function QS(e, t, n, r) {
  return u.useMemo(function() {
    var o = fu(n ?? t), a = fu(r ?? t), i = new Set(o), l = new Set(a);
    return e && (i.has("hover") && (i.delete("hover"), i.add("click")), l.has("hover") && (l.delete("hover"), l.add("click"))), [i, l];
  }, [e, t, n, r]);
}
function ZS() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 ? arguments[2] : void 0;
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function JS(e, t, n, r) {
  for (var o = n.points, a = Object.keys(e), i = 0; i < a.length; i += 1) {
    var l, s = a[i];
    if (ZS((l = e[s]) === null || l === void 0 ? void 0 : l.points, o, r))
      return "".concat(t, "-placement-").concat(s);
  }
  return "";
}
function vu(e, t, n, r) {
  return t || (n ? {
    motionName: "".concat(e, "-").concat(n)
  } : r ? {
    motionName: r
  } : null);
}
function Xo(e) {
  return e.ownerDocument.defaultView;
}
function zl(e) {
  for (var t = [], n = e == null ? void 0 : e.parentElement, r = ["hidden", "scroll", "clip", "auto"]; n; ) {
    var o = Xo(n).getComputedStyle(n), a = o.overflowX, i = o.overflowY, l = o.overflow;
    [a, i, l].some(function(s) {
      return r.includes(s);
    }) && t.push(n), n = n.parentElement;
  }
  return t;
}
function zo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function ho(e) {
  return zo(parseFloat(e), 0);
}
function gu(e, t) {
  var n = z({}, e);
  return (t || []).forEach(function(r) {
    if (!(r instanceof HTMLBodyElement || r instanceof HTMLHtmlElement)) {
      var o = Xo(r).getComputedStyle(r), a = o.overflow, i = o.overflowClipMargin, l = o.borderTopWidth, s = o.borderBottomWidth, c = o.borderLeftWidth, d = o.borderRightWidth, f = r.getBoundingClientRect(), v = r.offsetHeight, h = r.clientHeight, b = r.offsetWidth, m = r.clientWidth, g = ho(l), y = ho(s), p = ho(c), S = ho(d), E = zo(Math.round(f.width / b * 1e3) / 1e3), C = zo(Math.round(f.height / v * 1e3) / 1e3), x = (b - m - p - S) * E, w = (v - h - g - y) * C, $ = g * C, O = y * C, R = p * E, _ = S * E, I = 0, F = 0;
      if (a === "clip") {
        var M = ho(i);
        I = M * E, F = M * C;
      }
      var V = f.x + R - I, N = f.y + $ - F, P = V + f.width + 2 * I - R - _ - x, T = N + f.height + 2 * F - $ - O - w;
      n.left = Math.max(n.left, V), n.top = Math.max(n.top, N), n.right = Math.min(n.right, P), n.bottom = Math.min(n.bottom, T);
    }
  }), n;
}
function mu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = "".concat(t), r = n.match(/^(.*)\%$/);
  return r ? e * (parseFloat(r[1]) / 100) : parseFloat(n);
}
function hu(e, t) {
  var n = t || [], r = K(n, 2), o = r[0], a = r[1];
  return [mu(e.width, o), mu(e.height, a)];
}
function pu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function Hr(e, t) {
  var n = t[0], r = t[1], o, a;
  return n === "t" ? a = e.y : n === "b" ? a = e.y + e.height : a = e.y + e.height / 2, r === "l" ? o = e.x : r === "r" ? o = e.x + e.width : o = e.x + e.width / 2, {
    x: o,
    y: a
  };
}
function ir(e, t) {
  var n = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return e.map(function(r, o) {
    return o === t ? n[r] || "c" : r;
  }).join("");
}
function eC(e, t, n, r, o, a, i) {
  var l = u.useState({
    ready: !1,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: o[r] || {}
  }), s = K(l, 2), c = s[0], d = s[1], f = u.useRef(0), v = u.useMemo(function() {
    return t ? zl(t) : [];
  }, [t]), h = u.useRef({}), b = function() {
    h.current = {};
  };
  e || b();
  var m = $t(function() {
    if (t && n && e) {
      let wn = function(uo, qn) {
        var yr = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : re, Zo = U.x + uo, Jo = U.y + qn, ii = Zo + fe, li = Jo + te, He = Math.max(Zo, yr.left), ot = Math.max(Jo, yr.top), Nt = Math.min(ii, yr.right), Lt = Math.min(li, yr.bottom);
        return Math.max(0, (Nt - He) * (Lt - ot));
      }, Dr = function() {
        Ge = U.y + We, Ke = Ge + te, Xe = U.x + ce, nt = Xe + fe;
      };
      var p, S, E, C, x = t, w = x.ownerDocument, $ = Xo(x), O = $.getComputedStyle(x), R = O.width, _ = O.height, I = O.position, F = x.style.left, M = x.style.top, V = x.style.right, N = x.style.bottom, P = x.style.overflow, T = z(z({}, o[r]), a), j = w.createElement("div");
      (p = x.parentElement) === null || p === void 0 || p.appendChild(j), j.style.left = "".concat(x.offsetLeft, "px"), j.style.top = "".concat(x.offsetTop, "px"), j.style.position = I, j.style.height = "".concat(x.offsetHeight, "px"), j.style.width = "".concat(x.offsetWidth, "px"), x.style.left = "0", x.style.top = "0", x.style.right = "auto", x.style.bottom = "auto", x.style.overflow = "hidden";
      var H;
      if (Array.isArray(n))
        H = {
          x: n[0],
          y: n[1],
          width: 0,
          height: 0
        };
      else {
        var L, q, k = n.getBoundingClientRect();
        k.x = (L = k.x) !== null && L !== void 0 ? L : k.left, k.y = (q = k.y) !== null && q !== void 0 ? q : k.top, H = {
          x: k.x,
          y: k.y,
          width: k.width,
          height: k.height
        };
      }
      var U = x.getBoundingClientRect();
      U.x = (S = U.x) !== null && S !== void 0 ? S : U.left, U.y = (E = U.y) !== null && E !== void 0 ? E : U.top;
      var G = w.documentElement, le = G.clientWidth, Y = G.clientHeight, Q = G.scrollWidth, pe = G.scrollHeight, Z = G.scrollTop, X = G.scrollLeft, te = U.height, fe = U.width, W = H.height, ae = H.width, ie = {
        left: 0,
        top: 0,
        right: le,
        bottom: Y
      }, ue = {
        left: -X,
        top: -Z,
        right: Q - X,
        bottom: pe - Z
      }, ve = T.htmlRegion, $e = "visible", Re = "visibleFirst";
      ve !== "scroll" && ve !== Re && (ve = $e);
      var Se = ve === Re, _e = gu(ue, v), J = gu(ie, v), re = ve === $e ? J : _e, ge = Se ? J : re;
      x.style.left = "auto", x.style.top = "auto", x.style.right = "0", x.style.bottom = "0";
      var be = x.getBoundingClientRect();
      x.style.left = F, x.style.top = M, x.style.right = V, x.style.bottom = N, x.style.overflow = P, (C = x.parentElement) === null || C === void 0 || C.removeChild(j);
      var Ie = zo(Math.round(fe / parseFloat(R) * 1e3) / 1e3), Me = zo(Math.round(te / parseFloat(_) * 1e3) / 1e3);
      if (Ie === 0 || Me === 0 || Ro(n) && !Of(n))
        return;
      var Ue = T.offset, rt = T.targetOffset, ct = hu(U, Ue), ft = K(ct, 2), De = ft[0], Te = ft[1], Ye = hu(H, rt), Je = K(Ye, 2), et = Je[0], lt = Je[1];
      H.x -= et, H.y -= lt;
      var It = T.points || [], mt = K(It, 2), vt = mt[0], Fe = mt[1], Ee = pu(Fe), Ve = pu(vt), je = Hr(H, Ee), qe = Hr(U, Ve), Ae = z({}, T), ce = je.x - qe.x + De, We = je.y - qe.y + Te, dt = wn(ce, We), Qe = wn(ce, We, J), Pe = Hr(H, ["t", "l"]), Oe = Hr(U, ["t", "l"]), Ne = Hr(H, ["b", "r"]), Le = Hr(U, ["b", "r"]), tt = T.overflow || {}, gt = tt.adjustX, A = tt.adjustY, ee = tt.shiftX, me = tt.shiftY, we = function(qn) {
        return typeof qn == "boolean" ? qn : qn >= 0;
      }, Ge, Ke, Xe, nt;
      Dr();
      var xe = we(A), ye = Ve[0] === Ee[0];
      if (xe && Ve[0] === "t" && (Ke > ge.bottom || h.current.bt)) {
        var de = We;
        ye ? de -= te - W : de = Pe.y - Le.y - Te;
        var he = wn(ce, de), Ze = wn(ce, de, J);
        // Of course use larger one
        he > dt || he === dt && (!Se || // Choose recommend one
        Ze >= Qe) ? (h.current.bt = !0, We = de, Te = -Te, Ae.points = [ir(Ve, 0), ir(Ee, 0)]) : h.current.bt = !1;
      }
      if (xe && Ve[0] === "b" && (Ge < ge.top || h.current.tb)) {
        var st = We;
        ye ? st += te - W : st = Ne.y - Oe.y - Te;
        var at = wn(ce, st), Wt = wn(ce, st, J);
        // Of course use larger one
        at > dt || at === dt && (!Se || // Choose recommend one
        Wt >= Qe) ? (h.current.tb = !0, We = st, Te = -Te, Ae.points = [ir(Ve, 0), ir(Ee, 0)]) : h.current.tb = !1;
      }
      var kt = we(gt), At = Ve[1] === Ee[1];
      if (kt && Ve[1] === "l" && (nt > ge.right || h.current.rl)) {
        var _t = ce;
        At ? _t -= fe - ae : _t = Pe.x - Le.x - De;
        var nn = wn(_t, We), tn = wn(_t, We, J);
        // Of course use larger one
        nn > dt || nn === dt && (!Se || // Choose recommend one
        tn >= Qe) ? (h.current.rl = !0, ce = _t, De = -De, Ae.points = [ir(Ve, 1), ir(Ee, 1)]) : h.current.rl = !1;
      }
      if (kt && Ve[1] === "r" && (Xe < ge.left || h.current.lr)) {
        var Ut = ce;
        At ? Ut += fe - ae : Ut = Ne.x - Oe.x - De;
        var Cn = wn(Ut, We), Un = wn(Ut, We, J);
        // Of course use larger one
        Cn > dt || Cn === dt && (!Se || // Choose recommend one
        Un >= Qe) ? (h.current.lr = !0, ce = Ut, De = -De, Ae.points = [ir(Ve, 1), ir(Ee, 1)]) : h.current.lr = !1;
      }
      Dr();
      var En = ee === !0 ? 0 : ee;
      typeof En == "number" && (Xe < J.left && (ce -= Xe - J.left - De, H.x + ae < J.left + En && (ce += H.x - J.left + ae - En)), nt > J.right && (ce -= nt - J.right - De, H.x > J.right - En && (ce += H.x - J.right + En)));
      var dn = me === !0 ? 0 : me;
      typeof dn == "number" && (Ge < J.top && (We -= Ge - J.top - Te, H.y + W < J.top + dn && (We += H.y - J.top + W - dn)), Ke > J.bottom && (We -= Ke - J.bottom - Te, H.y > J.bottom - dn && (We += H.y - J.bottom + dn)));
      var rr = U.x + ce, Gn = rr + fe, cn = U.y + We, pt = cn + te, it = H.x, Qt = it + ae, Gt = H.y, Tt = Gt + W, qt = Math.max(rr, it), fn = Math.min(Gn, Qt), rn = (qt + fn) / 2, Mn = rn - rr, zn = Math.max(cn, Gt), xn = Math.min(pt, Tt), or = (zn + xn) / 2, ar = or - cn;
      i == null || i(t, Ae);
      var co = be.right - U.x - (ce + U.width), Vn = be.bottom - U.y - (We + U.height);
      Ie === 1 && (ce = Math.round(ce), co = Math.round(co)), Me === 1 && (We = Math.round(We), Vn = Math.round(Vn));
      var ai = {
        ready: !0,
        offsetX: ce / Ie,
        offsetY: We / Me,
        offsetR: co / Ie,
        offsetB: Vn / Me,
        arrowX: Mn / Ie,
        arrowY: ar / Me,
        scaleX: Ie,
        scaleY: Me,
        align: Ae
      };
      d(ai);
    }
  }), g = function() {
    f.current += 1;
    var S = f.current;
    Promise.resolve().then(function() {
      f.current === S && m();
    });
  }, y = function() {
    d(function(S) {
      return z(z({}, S), {}, {
        ready: !1
      });
    });
  };
  return Rt(y, [r]), Rt(function() {
    e || y();
  }, [e]), [c.ready, c.offsetX, c.offsetY, c.offsetR, c.offsetB, c.arrowX, c.arrowY, c.scaleX, c.scaleY, c.align, g];
}
function tC(e, t, n, r, o) {
  Rt(function() {
    if (e && t && n) {
      let f = function() {
        r(), o();
      };
      var a = t, i = n, l = zl(a), s = zl(i), c = Xo(i), d = new Set([c].concat(Ce(l), Ce(s)));
      return d.forEach(function(v) {
        v.addEventListener("scroll", f, {
          passive: !0
        });
      }), c.addEventListener("resize", f, {
        passive: !0
      }), r(), function() {
        d.forEach(function(v) {
          v.removeEventListener("scroll", f), c.removeEventListener("resize", f);
        });
      };
    }
  }, [e, t, n]);
}
function nC(e, t, n, r, o, a, i, l) {
  var s = u.useRef(e);
  s.current = e, u.useEffect(function() {
    if (t && r && (!o || a)) {
      var c = function(y) {
        var p;
        s.current && !i(((p = y.composedPath) === null || p === void 0 || (p = p.call(y)) === null || p === void 0 ? void 0 : p[0]) || y.target) && l(!1);
      }, d = Xo(r);
      d.addEventListener("mousedown", c, !0), d.addEventListener("contextmenu", c, !0);
      var f = _a(n);
      if (f && (f.addEventListener("mousedown", c, !0), f.addEventListener("contextmenu", c, !0)), process.env.NODE_ENV !== "production") {
        var v, h, b = n == null || (v = n.getRootNode) === null || v === void 0 ? void 0 : v.call(n), m = (h = r.getRootNode) === null || h === void 0 ? void 0 : h.call(r);
        vr(b === m, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        d.removeEventListener("mousedown", c, !0), d.removeEventListener("contextmenu", c, !0), f && (f.removeEventListener("mousedown", c, !0), f.removeEventListener("contextmenu", c, !0));
      };
    }
  }, [t, n, r, o, a]);
}
var rC = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function oC() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ms, t = /* @__PURE__ */ u.forwardRef(function(n, r) {
    var o = n.prefixCls, a = o === void 0 ? "rc-trigger-popup" : o, i = n.children, l = n.action, s = l === void 0 ? "hover" : l, c = n.showAction, d = n.hideAction, f = n.popupVisible, v = n.defaultPopupVisible, h = n.onPopupVisibleChange, b = n.afterPopupVisibleChange, m = n.mouseEnterDelay, g = n.mouseLeaveDelay, y = g === void 0 ? 0.1 : g, p = n.focusDelay, S = n.blurDelay, E = n.mask, C = n.maskClosable, x = C === void 0 ? !0 : C, w = n.getPopupContainer, $ = n.forceRender, O = n.autoDestroy, R = n.destroyPopupOnHide, _ = n.popup, I = n.popupClassName, F = n.popupStyle, M = n.popupPlacement, V = n.builtinPlacements, N = V === void 0 ? {} : V, P = n.popupAlign, T = n.zIndex, j = n.stretch, H = n.getPopupClassNameFromAlign, L = n.fresh, q = n.alignPoint, k = n.onPopupClick, U = n.onPopupAlign, G = n.arrow, le = n.popupMotion, Y = n.maskMotion, Q = n.popupTransitionName, pe = n.popupAnimation, Z = n.maskTransitionName, X = n.maskAnimation, te = n.className, fe = n.getTriggerDOMNode, W = yt(n, rC), ae = O || R || !1, ie = u.useState(!1), ue = K(ie, 2), ve = ue[0], $e = ue[1];
    Rt(function() {
      $e(bs());
    }, []);
    var Re = u.useRef({}), Se = u.useContext(du), _e = u.useMemo(function() {
      return {
        registerSubPopup: function(ot, Nt) {
          Re.current[ot] = Nt, Se == null || Se.registerSubPopup(ot, Nt);
        }
      };
    }, [Se]), J = Qb(), re = u.useState(null), ge = K(re, 2), be = ge[0], Ie = ge[1], Me = u.useRef(null), Ue = $t(function(He) {
      Me.current = He, Ro(He) && be !== He && Ie(He), Se == null || Se.registerSubPopup(J, He);
    }), rt = u.useState(null), ct = K(rt, 2), ft = ct[0], De = ct[1], Te = u.useRef(null), Ye = $t(function(He) {
      Ro(He) && ft !== He && (De(He), Te.current = He);
    }), Je = u.Children.only(i), et = (Je == null ? void 0 : Je.props) || {}, lt = {}, It = $t(function(He) {
      var ot, Nt, Lt = ft;
      return (Lt == null ? void 0 : Lt.contains(He)) || ((ot = _a(Lt)) === null || ot === void 0 ? void 0 : ot.host) === He || He === Lt || (be == null ? void 0 : be.contains(He)) || ((Nt = _a(be)) === null || Nt === void 0 ? void 0 : Nt.host) === He || He === be || Object.values(Re.current).some(function(Ft) {
        return (Ft == null ? void 0 : Ft.contains(He)) || He === Ft;
      });
    }), mt = vu(a, le, pe, Q), vt = vu(a, Y, X, Z), Fe = u.useState(v || !1), Ee = K(Fe, 2), Ve = Ee[0], je = Ee[1], qe = f ?? Ve, Ae = $t(function(He) {
      f === void 0 && je(He);
    });
    Rt(function() {
      je(f || !1);
    }, [f]);
    var ce = u.useRef(qe);
    ce.current = qe;
    var We = u.useRef([]);
    We.current = [];
    var dt = $t(function(He) {
      var ot;
      Ae(He), ((ot = We.current[We.current.length - 1]) !== null && ot !== void 0 ? ot : qe) !== He && (We.current.push(He), h == null || h(He));
    }), Qe = u.useRef(), Pe = function() {
      clearTimeout(Qe.current);
    }, Oe = function(ot) {
      var Nt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      Pe(), Nt === 0 ? dt(ot) : Qe.current = setTimeout(function() {
        dt(ot);
      }, Nt * 1e3);
    };
    u.useEffect(function() {
      return Pe;
    }, []);
    var Ne = u.useState(!1), Le = K(Ne, 2), tt = Le[0], gt = Le[1];
    Rt(function(He) {
      (!He || qe) && gt(!0);
    }, [qe]);
    var A = u.useState(null), ee = K(A, 2), me = ee[0], we = ee[1], Ge = u.useState(null), Ke = K(Ge, 2), Xe = Ke[0], nt = Ke[1], xe = function(ot) {
      nt([ot.clientX, ot.clientY]);
    }, ye = eC(qe, be, q && Xe !== null ? Xe : ft, M, N, P, U), de = K(ye, 11), he = de[0], Ze = de[1], st = de[2], at = de[3], Wt = de[4], kt = de[5], At = de[6], _t = de[7], nn = de[8], tn = de[9], Ut = de[10], Cn = QS(ve, s, c, d), Un = K(Cn, 2), En = Un[0], dn = Un[1], rr = En.has("click"), Gn = dn.has("click") || dn.has("contextMenu"), cn = $t(function() {
      tt || Ut();
    }), pt = function() {
      ce.current && q && Gn && Oe(!1);
    };
    tC(qe, ft, be, cn, pt), Rt(function() {
      cn();
    }, [Xe, M]), Rt(function() {
      qe && !(N != null && N[M]) && cn();
    }, [JSON.stringify(P)]);
    var it = u.useMemo(function() {
      var He = JS(N, a, tn, q);
      return ne(He, H == null ? void 0 : H(tn));
    }, [tn, H, N, a, q]);
    u.useImperativeHandle(r, function() {
      return {
        nativeElement: Te.current,
        popupElement: Me.current,
        forceAlign: cn
      };
    });
    var Qt = u.useState(0), Gt = K(Qt, 2), Tt = Gt[0], qt = Gt[1], fn = u.useState(0), rn = K(fn, 2), Mn = rn[0], zn = rn[1], xn = function() {
      if (j && ft) {
        var ot = ft.getBoundingClientRect();
        qt(ot.width), zn(ot.height);
      }
    }, or = function() {
      xn(), cn();
    }, ar = function(ot) {
      gt(!1), Ut(), b == null || b(ot);
    }, co = function() {
      return new Promise(function(ot) {
        xn(), we(function() {
          return ot;
        });
      });
    };
    Rt(function() {
      me && (Ut(), me(), we(null));
    }, [me]);
    function Vn(He, ot, Nt, Lt) {
      lt[He] = function(Ft) {
        var ea;
        Lt == null || Lt(Ft), Oe(ot, Nt);
        for (var si = arguments.length, Ws = new Array(si > 1 ? si - 1 : 0), ta = 1; ta < si; ta++)
          Ws[ta - 1] = arguments[ta];
        (ea = et[He]) === null || ea === void 0 || ea.call.apply(ea, [et, Ft].concat(Ws));
      };
    }
    (rr || Gn) && (lt.onClick = function(He) {
      var ot;
      ce.current && Gn ? Oe(!1) : !ce.current && rr && (xe(He), Oe(!0));
      for (var Nt = arguments.length, Lt = new Array(Nt > 1 ? Nt - 1 : 0), Ft = 1; Ft < Nt; Ft++)
        Lt[Ft - 1] = arguments[Ft];
      (ot = et.onClick) === null || ot === void 0 || ot.call.apply(ot, [et, He].concat(Lt));
    }), nC(qe, Gn, ft, be, E, x, It, Oe);
    var ai = En.has("hover"), wn = dn.has("hover"), Dr, uo;
    ai && (Vn("onMouseEnter", !0, m, function(He) {
      xe(He);
    }), Vn("onPointerEnter", !0, m, function(He) {
      xe(He);
    }), Dr = function(ot) {
      (qe || tt) && be !== null && be !== void 0 && be.contains(ot.target) && Oe(!0, m);
    }, q && (lt.onMouseMove = function(He) {
      var ot;
      (ot = et.onMouseMove) === null || ot === void 0 || ot.call(et, He);
    })), wn && (Vn("onMouseLeave", !1, y), Vn("onPointerLeave", !1, y), uo = function() {
      Oe(!1, y);
    }), En.has("focus") && Vn("onFocus", !0, p), dn.has("focus") && Vn("onBlur", !1, S), En.has("contextMenu") && (lt.onContextMenu = function(He) {
      var ot;
      ce.current && dn.has("contextMenu") ? Oe(!1) : (xe(He), Oe(!0)), He.preventDefault();
      for (var Nt = arguments.length, Lt = new Array(Nt > 1 ? Nt - 1 : 0), Ft = 1; Ft < Nt; Ft++)
        Lt[Ft - 1] = arguments[Ft];
      (ot = et.onContextMenu) === null || ot === void 0 || ot.call.apply(ot, [et, He].concat(Lt));
    }), te && (lt.className = ne(et.className, te));
    var qn = z(z({}, et), lt), yr = {}, Zo = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    Zo.forEach(function(He) {
      W[He] && (yr[He] = function() {
        for (var ot, Nt = arguments.length, Lt = new Array(Nt), Ft = 0; Ft < Nt; Ft++)
          Lt[Ft] = arguments[Ft];
        (ot = qn[He]) === null || ot === void 0 || ot.call.apply(ot, [qn].concat(Lt)), W[He].apply(W, Lt);
      });
    });
    var Jo = /* @__PURE__ */ u.cloneElement(Je, z(z({}, qn), yr)), ii = {
      x: kt,
      y: At
    }, li = G ? z({}, G !== !0 ? G : {}) : null;
    return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(nr, {
      disabled: !qe,
      ref: Ye,
      onResize: or
    }, /* @__PURE__ */ u.createElement(av, {
      getTriggerDOMNode: fe
    }, Jo)), /* @__PURE__ */ u.createElement(du.Provider, {
      value: _e
    }, /* @__PURE__ */ u.createElement(ov, {
      portal: e,
      ref: Ue,
      prefixCls: a,
      popup: _,
      className: ne(I, it),
      style: F,
      target: ft,
      onMouseEnter: Dr,
      onMouseLeave: uo,
      onPointerEnter: Dr,
      zIndex: T,
      open: qe,
      keepDom: tt,
      fresh: L,
      onClick: k,
      mask: E,
      motion: mt,
      maskMotion: vt,
      onVisibleChanged: ar,
      onPrepare: co,
      forceRender: $,
      autoDestroy: ae,
      getPopupContainer: w,
      align: tn,
      arrow: li,
      arrowPos: ii,
      ready: he,
      offsetX: Ze,
      offsetY: st,
      offsetR: at,
      offsetB: Wt,
      onAlign: cn,
      stretch: j,
      targetWidth: Tt / _t,
      targetHeight: Mn / nn
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const iv = oC(ms);
var aC = ["prefixCls", "disabled", "visible", "children", "popupElement", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "builtinPlacements", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"], iC = function(t) {
  var n = t === !0 ? 0 : 1;
  return {
    bottomLeft: {
      points: ["tl", "bl"],
      offset: [0, 4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    bottomRight: {
      points: ["tr", "br"],
      offset: [0, 4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    topLeft: {
      points: ["bl", "tl"],
      offset: [0, -4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    topRight: {
      points: ["br", "tr"],
      offset: [0, -4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    }
  };
}, lC = function(t, n) {
  var r = t.prefixCls;
  t.disabled;
  var o = t.visible, a = t.children, i = t.popupElement, l = t.animation, s = t.transitionName, c = t.dropdownStyle, d = t.dropdownClassName, f = t.direction, v = f === void 0 ? "ltr" : f, h = t.placement, b = t.builtinPlacements, m = t.dropdownMatchSelectWidth, g = t.dropdownRender, y = t.dropdownAlign, p = t.getPopupContainer, S = t.empty, E = t.getTriggerDOMNode, C = t.onPopupVisibleChange, x = t.onPopupMouseEnter, w = yt(t, aC), $ = "".concat(r, "-dropdown"), O = i;
  g && (O = g(i));
  var R = u.useMemo(function() {
    return b || iC(m);
  }, [b, m]), _ = l ? "".concat($, "-").concat(l) : s, I = typeof m == "number", F = u.useMemo(function() {
    return I ? null : m === !1 ? "minWidth" : "width";
  }, [m, I]), M = c;
  I && (M = z(z({}, M), {}, {
    width: m
  }));
  var V = u.useRef(null);
  return u.useImperativeHandle(n, function() {
    return {
      getPopupElement: function() {
        var P;
        return (P = V.current) === null || P === void 0 ? void 0 : P.popupElement;
      }
    };
  }), /* @__PURE__ */ u.createElement(iv, ke({}, w, {
    showAction: C ? ["click"] : [],
    hideAction: C ? ["click"] : [],
    popupPlacement: h || (v === "rtl" ? "bottomRight" : "bottomLeft"),
    builtinPlacements: R,
    prefixCls: $,
    popupTransitionName: _,
    popup: /* @__PURE__ */ u.createElement("div", {
      onMouseEnter: x
    }, O),
    ref: V,
    stretch: F,
    popupAlign: y,
    popupVisible: o,
    getPopupContainer: p,
    popupClassName: ne(d, D({}, "".concat($, "-empty"), S)),
    popupStyle: M,
    getTriggerDOMNode: E,
    onPopupVisibleChange: C
  }), a);
}, lv = /* @__PURE__ */ u.forwardRef(lC);
process.env.NODE_ENV !== "production" && (lv.displayName = "SelectTrigger");
function bu(e, t) {
  var n = e.key, r;
  return "value" in e && (r = e.value), n ?? (r !== void 0 ? r : "rc-index-key-".concat(t));
}
function Vl(e) {
  return typeof e < "u" && !Number.isNaN(e);
}
function sv(e, t) {
  var n = e || {}, r = n.label, o = n.value, a = n.options, i = n.groupLabel, l = r || (t ? "children" : "label");
  return {
    label: l,
    value: o || "value",
    options: a || "options",
    groupLabel: i || l
  };
}
function sC(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.fieldNames, r = t.childrenAsData, o = [], a = sv(n, !1), i = a.label, l = a.value, s = a.options, c = a.groupLabel;
  function d(f, v) {
    Array.isArray(f) && f.forEach(function(h) {
      if (v || !(s in h)) {
        var b = h[l];
        o.push({
          key: bu(h, o.length),
          groupOption: v,
          data: h,
          label: h[i],
          value: b
        });
      } else {
        var m = h[c];
        m === void 0 && r && (m = h.label), o.push({
          key: bu(h, o.length),
          group: !0,
          data: h,
          label: m
        }), d(h[s], !0);
      }
    });
  }
  return d(e, !1), o;
}
function Bl(e) {
  var t = z({}, e);
  return "props" in t || Object.defineProperty(t, "props", {
    get: function() {
      return ut(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), t;
    }
  }), t;
}
var cC = function(t, n, r) {
  if (!n || !n.length)
    return null;
  var o = !1, a = function l(s, c) {
    var d = Ld(c), f = d[0], v = d.slice(1);
    if (!f)
      return [s];
    var h = s.split(f);
    return o = o || h.length > 1, h.reduce(function(b, m) {
      return [].concat(Ce(b), Ce(l(m, v)));
    }, []).filter(Boolean);
  }, i = a(t, n);
  return o ? typeof r < "u" ? i.slice(0, r) : i : null;
}, Cs = /* @__PURE__ */ u.createContext(null);
function uC(e) {
  var t = e.visible, n = e.values;
  if (!t)
    return null;
  var r = 50;
  return /* @__PURE__ */ u.createElement("span", {
    "aria-live": "polite",
    style: {
      width: 0,
      height: 0,
      position: "absolute",
      overflow: "hidden",
      opacity: 0
    }
  }, "".concat(n.slice(0, r).map(function(o) {
    var a = o.label, i = o.value;
    return ["number", "string"].includes(Be(a)) ? a : i;
  }).join(", ")), n.length > r ? ", ..." : null);
}
var dC = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "suffixIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "builtinPlacements", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"], fC = ["value", "onChange", "removeIcon", "placeholder", "autoFocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabIndex"], ja = function(t) {
  return t === "tags" || t === "multiple";
}, cv = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n, r = e.id, o = e.prefixCls, a = e.className, i = e.showSearch, l = e.tagRender, s = e.direction, c = e.omitDomProps, d = e.displayValues, f = e.onDisplayValuesChange, v = e.emptyOptions, h = e.notFoundContent, b = h === void 0 ? "Not Found" : h, m = e.onClear, g = e.mode, y = e.disabled, p = e.loading, S = e.getInputElement, E = e.getRawInputElement, C = e.open, x = e.defaultOpen, w = e.onDropdownVisibleChange, $ = e.activeValue, O = e.onActiveValueChange, R = e.activeDescendantId, _ = e.searchValue, I = e.autoClearSearchValue, F = e.onSearch, M = e.onSearchSplit, V = e.tokenSeparators, N = e.allowClear, P = e.suffixIcon, T = e.clearIcon, j = e.OptionList, H = e.animation, L = e.transitionName, q = e.dropdownStyle, k = e.dropdownClassName, U = e.dropdownMatchSelectWidth, G = e.dropdownRender, le = e.dropdownAlign, Y = e.placement, Q = e.builtinPlacements, pe = e.getPopupContainer, Z = e.showAction, X = Z === void 0 ? [] : Z, te = e.onFocus, fe = e.onBlur, W = e.onKeyUp, ae = e.onKeyDown, ie = e.onMouseDown, ue = yt(e, dC), ve = ja(g), $e = (i !== void 0 ? i : ve) || g === "combobox", Re = z({}, ue);
  fC.forEach(function(pt) {
    delete Re[pt];
  }), c == null || c.forEach(function(pt) {
    delete Re[pt];
  });
  var Se = u.useState(!1), _e = K(Se, 2), J = _e[0], re = _e[1];
  u.useEffect(function() {
    re(bs());
  }, []);
  var ge = u.useRef(null), be = u.useRef(null), Ie = u.useRef(null), Me = u.useRef(null), Ue = u.useRef(null), rt = u.useRef(!1), ct = $S(), ft = K(ct, 3), De = ft[0], Te = ft[1], Ye = ft[2];
  u.useImperativeHandle(t, function() {
    var pt, it;
    return {
      focus: (pt = Me.current) === null || pt === void 0 ? void 0 : pt.focus,
      blur: (it = Me.current) === null || it === void 0 ? void 0 : it.blur,
      scrollTo: function(Gt) {
        var Tt;
        return (Tt = Ue.current) === null || Tt === void 0 ? void 0 : Tt.scrollTo(Gt);
      },
      nativeElement: ge.current || be.current
    };
  });
  var Je = u.useMemo(function() {
    var pt;
    if (g !== "combobox")
      return _;
    var it = (pt = d[0]) === null || pt === void 0 ? void 0 : pt.value;
    return typeof it == "string" || typeof it == "number" ? String(it) : "";
  }, [_, g, d]), et = g === "combobox" && typeof S == "function" && S() || null, lt = typeof E == "function" && E(), It = Va(be, lt == null || (n = lt.props) === null || n === void 0 ? void 0 : n.ref), mt = u.useState(!1), vt = K(mt, 2), Fe = vt[0], Ee = vt[1];
  Rt(function() {
    Ee(!0);
  }, []);
  var Ve = Jt(!1, {
    defaultValue: x,
    value: C
  }), je = K(Ve, 2), qe = je[0], Ae = je[1], ce = Fe ? qe : !1, We = !b && v;
  (y || We && ce && g === "combobox") && (ce = !1);
  var dt = We ? !1 : ce, Qe = u.useCallback(function(pt) {
    var it = pt !== void 0 ? pt : !ce;
    y || (Ae(it), ce !== it && (w == null || w(it)));
  }, [y, ce, Ae, w]), Pe = u.useMemo(function() {
    return (V || []).some(function(pt) {
      return [`
`, `\r
`].includes(pt);
    });
  }, [V]), Oe = u.useContext(Cs) || {}, Ne = Oe.maxCount, Le = Oe.rawValues, tt = function(it, Qt, Gt) {
    if (!(ve && Vl(Ne) && (Le == null ? void 0 : Le.size) >= Ne)) {
      var Tt = !0, qt = it;
      O == null || O(null);
      var fn = cC(it, V, Vl(Ne) ? Ne - Le.size : void 0), rn = Gt ? null : fn;
      return g !== "combobox" && rn && (qt = "", M == null || M(rn), Qe(!1), Tt = !1), F && Je !== qt && F(qt, {
        source: Qt ? "typing" : "effect"
      }), Tt;
    }
  }, gt = function(it) {
    !it || !it.trim() || F(it, {
      source: "submit"
    });
  };
  u.useEffect(function() {
    !ce && !ve && g !== "combobox" && tt("", !1, !1);
  }, [ce]), u.useEffect(function() {
    qe && y && Ae(!1), y && !rt.current && Te(!1);
  }, [y]);
  var A = Qf(), ee = K(A, 2), me = ee[0], we = ee[1], Ge = u.useRef(!1), Ke = function(it) {
    var Qt = me(), Gt = it.key, Tt = Gt === "Enter";
    if (Tt && (g !== "combobox" && it.preventDefault(), ce || Qe(!0)), we(!!Je), Gt === "Backspace" && !Qt && ve && !Je && d.length) {
      for (var qt = Ce(d), fn = null, rn = qt.length - 1; rn >= 0; rn -= 1) {
        var Mn = qt[rn];
        if (!Mn.disabled) {
          qt.splice(rn, 1), fn = Mn;
          break;
        }
      }
      fn && f(qt, {
        type: "remove",
        values: [fn]
      });
    }
    for (var zn = arguments.length, xn = new Array(zn > 1 ? zn - 1 : 0), or = 1; or < zn; or++)
      xn[or - 1] = arguments[or];
    if (ce && (!Tt || !Ge.current)) {
      var ar;
      (ar = Ue.current) === null || ar === void 0 || ar.onKeyDown.apply(ar, [it].concat(xn));
    }
    Tt && (Ge.current = !0), ae == null || ae.apply(void 0, [it].concat(xn));
  }, Xe = function(it) {
    for (var Qt = arguments.length, Gt = new Array(Qt > 1 ? Qt - 1 : 0), Tt = 1; Tt < Qt; Tt++)
      Gt[Tt - 1] = arguments[Tt];
    if (ce) {
      var qt;
      (qt = Ue.current) === null || qt === void 0 || qt.onKeyUp.apply(qt, [it].concat(Gt));
    }
    it.key === "Enter" && (Ge.current = !1), W == null || W.apply(void 0, [it].concat(Gt));
  }, nt = function(it) {
    var Qt = d.filter(function(Gt) {
      return Gt !== it;
    });
    f(Qt, {
      type: "remove",
      values: [it]
    });
  }, xe = u.useRef(!1), ye = function() {
    Te(!0), y || (te && !xe.current && te.apply(void 0, arguments), X.includes("focus") && Qe(!0)), xe.current = !0;
  }, de = function() {
    rt.current = !0, Te(!1, function() {
      xe.current = !1, rt.current = !1, Qe(!1);
    }), !y && (Je && (g === "tags" ? F(Je, {
      source: "submit"
    }) : g === "multiple" && F("", {
      source: "blur"
    })), fe && fe.apply(void 0, arguments));
  }, he = [];
  u.useEffect(function() {
    return function() {
      he.forEach(function(pt) {
        return clearTimeout(pt);
      }), he.splice(0, he.length);
    };
  }, []);
  var Ze = function(it) {
    var Qt, Gt = it.target, Tt = (Qt = Ie.current) === null || Qt === void 0 ? void 0 : Qt.getPopupElement();
    if (Tt && Tt.contains(Gt)) {
      var qt = setTimeout(function() {
        var zn = he.indexOf(qt);
        if (zn !== -1 && he.splice(zn, 1), Ye(), !J && !Tt.contains(document.activeElement)) {
          var xn;
          (xn = Me.current) === null || xn === void 0 || xn.focus();
        }
      });
      he.push(qt);
    }
    for (var fn = arguments.length, rn = new Array(fn > 1 ? fn - 1 : 0), Mn = 1; Mn < fn; Mn++)
      rn[Mn - 1] = arguments[Mn];
    ie == null || ie.apply(void 0, [it].concat(rn));
  }, st = u.useState({}), at = K(st, 2), Wt = at[1];
  function kt() {
    Wt({});
  }
  var At;
  lt && (At = function(it) {
    Qe(it);
  }), OS(function() {
    var pt;
    return [ge.current, (pt = Ie.current) === null || pt === void 0 ? void 0 : pt.getPopupElement()];
  }, dt, Qe, !!lt);
  var _t = u.useMemo(function() {
    return z(z({}, e), {}, {
      notFoundContent: b,
      open: ce,
      triggerOpen: dt,
      id: r,
      showSearch: $e,
      multiple: ve,
      toggleOpen: Qe
    });
  }, [e, b, dt, ce, r, $e, ve, Qe]), nn = !!P || p, tn;
  nn && (tn = /* @__PURE__ */ u.createElement(Za, {
    className: ne("".concat(o, "-arrow"), D({}, "".concat(o, "-arrow-loading"), p)),
    customizeIcon: P,
    customizeIconProps: {
      loading: p,
      searchValue: Je,
      open: ce,
      focused: De,
      showSearch: $e
    }
  }));
  var Ut = function() {
    var it;
    m == null || m(), (it = Me.current) === null || it === void 0 || it.focus(), f([], {
      type: "clear",
      values: d
    }), tt("", !1, !1);
  }, Cn = xS(o, Ut, d, N, T, y, Je, g), Un = Cn.allowClear, En = Cn.clearIcon, dn = /* @__PURE__ */ u.createElement(j, {
    ref: Ue
  }), rr = ne(o, a, D(D(D(D(D(D(D(D(D(D({}, "".concat(o, "-focused"), De), "".concat(o, "-multiple"), ve), "".concat(o, "-single"), !ve), "".concat(o, "-allow-clear"), N), "".concat(o, "-show-arrow"), nn), "".concat(o, "-disabled"), y), "".concat(o, "-loading"), p), "".concat(o, "-open"), ce), "".concat(o, "-customize-input"), et), "".concat(o, "-show-search"), $e)), Gn = /* @__PURE__ */ u.createElement(lv, {
    ref: Ie,
    disabled: y,
    prefixCls: o,
    visible: dt,
    popupElement: dn,
    animation: H,
    transitionName: L,
    dropdownStyle: q,
    dropdownClassName: k,
    direction: s,
    dropdownMatchSelectWidth: U,
    dropdownRender: G,
    dropdownAlign: le,
    placement: Y,
    builtinPlacements: Q,
    getPopupContainer: pe,
    empty: v,
    getTriggerDOMNode: function(it) {
      return (
        // TODO: This is workaround and should be removed in `rc-select`
        // And use new standard `nativeElement` for ref.
        // But we should update `rc-resize-observer` first.
        be.current || it
      );
    },
    onPopupVisibleChange: At,
    onPopupMouseEnter: kt
  }, lt ? /* @__PURE__ */ u.cloneElement(lt, {
    ref: It
  }) : /* @__PURE__ */ u.createElement(nv, ke({}, e, {
    domRef: be,
    prefixCls: o,
    inputElement: et,
    ref: Me,
    id: r,
    showSearch: $e,
    autoClearSearchValue: I,
    mode: g,
    activeDescendantId: R,
    tagRender: l,
    values: d,
    open: ce,
    onToggleOpen: Qe,
    activeValue: $,
    searchValue: Je,
    onSearch: tt,
    onSearchSubmit: gt,
    onRemove: nt,
    tokenWithEnter: Pe
  }))), cn;
  return lt ? cn = Gn : cn = /* @__PURE__ */ u.createElement("div", ke({
    className: rr
  }, Re, {
    ref: ge,
    onMouseDown: Ze,
    onKeyDown: Ke,
    onKeyUp: Xe,
    onFocus: ye,
    onBlur: de
  }), /* @__PURE__ */ u.createElement(uC, {
    visible: De && !ce,
    values: d
  }), Gn, tn, Un && En), /* @__PURE__ */ u.createElement(Yf.Provider, {
    value: _t
  }, cn);
});
process.env.NODE_ENV !== "production" && (cv.displayName = "BaseSelect");
var Es = function() {
  return null;
};
Es.isSelectOptGroup = !0;
var xs = function() {
  return null;
};
xs.isSelectOption = !0;
var uv = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.height, r = e.offsetY, o = e.offsetX, a = e.children, i = e.prefixCls, l = e.onInnerResize, s = e.innerProps, c = e.rtl, d = e.extra, f = {}, v = {
    display: "flex",
    flexDirection: "column"
  };
  return r !== void 0 && (f = {
    height: n,
    position: "relative",
    overflow: "hidden"
  }, v = z(z({}, v), {}, D(D(D(D(D({
    transform: "translateY(".concat(r, "px)")
  }, c ? "marginRight" : "marginLeft", -o), "position", "absolute"), "left", 0), "right", 0), "top", 0))), /* @__PURE__ */ u.createElement("div", {
    style: f
  }, /* @__PURE__ */ u.createElement(nr, {
    onResize: function(b) {
      var m = b.offsetHeight;
      m && l && l();
    }
  }, /* @__PURE__ */ u.createElement("div", ke({
    style: v,
    className: ne(D({}, "".concat(i, "-holder-inner"), i)),
    ref: t
  }, s), a, d)));
});
uv.displayName = "Filler";
function vC(e) {
  var t = e.children, n = e.setRef, r = u.useCallback(function(o) {
    n(o);
  }, []);
  return /* @__PURE__ */ u.cloneElement(t, {
    ref: r
  });
}
function gC(e, t, n, r, o, a, i, l) {
  var s = l.getKey;
  return e.slice(t, n + 1).map(function(c, d) {
    var f = t + d, v = i(c, f, {
      style: {
        width: r
      },
      offsetX: o
    }), h = s(c);
    return /* @__PURE__ */ u.createElement(vC, {
      key: h,
      setRef: function(m) {
        return a(c, m);
      }
    }, v);
  });
}
function mC(e, t, n) {
  var r = e.length, o = t.length, a, i;
  if (r === 0 && o === 0)
    return null;
  r < o ? (a = e, i = t) : (a = t, i = e);
  var l = {
    __EMPTY_ITEM__: !0
  };
  function s(b) {
    return b !== void 0 ? n(b) : l;
  }
  for (var c = null, d = Math.abs(r - o) !== 1, f = 0; f < i.length; f += 1) {
    var v = s(a[f]), h = s(i[f]);
    if (v !== h) {
      c = f, d = d || v !== s(i[f + 1]);
      break;
    }
  }
  return c === null ? null : {
    index: c,
    multiple: d
  };
}
function hC(e, t, n) {
  var r = u.useState(e), o = K(r, 2), a = o[0], i = o[1], l = u.useState(null), s = K(l, 2), c = s[0], d = s[1];
  return u.useEffect(function() {
    var f = mC(a || [], e || [], t);
    (f == null ? void 0 : f.index) !== void 0 && d(e[f.index]), i(e);
  }, [e]), [c];
}
var yu = (typeof navigator > "u" ? "undefined" : Be(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
const dv = function(e, t, n, r) {
  var o = ze(!1), a = ze(null);
  function i() {
    clearTimeout(a.current), o.current = !0, a.current = setTimeout(function() {
      o.current = !1;
    }, 50);
  }
  var l = ze({
    top: e,
    bottom: t,
    left: n,
    right: r
  });
  return l.current.top = e, l.current.bottom = t, l.current.left = n, l.current.right = r, function(s, c) {
    var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, f = s ? (
      // Pass origin wheel when on the left
      c < 0 && l.current.left || // Pass origin wheel when on the right
      c > 0 && l.current.right
    ) : c < 0 && l.current.top || // Pass origin wheel when on the bottom
    c > 0 && l.current.bottom;
    return d && f ? (clearTimeout(a.current), o.current = !1) : (!f || o.current) && i(), !o.current && f;
  };
};
function pC(e, t, n, r, o, a, i) {
  var l = ze(0), s = ze(null), c = ze(null), d = ze(!1), f = dv(t, n, r, o);
  function v(p, S) {
    if (St.cancel(s.current), !f(!1, S)) {
      var E = p;
      if (!E._virtualHandled)
        E._virtualHandled = !0;
      else
        return;
      l.current += S, c.current = S, yu || E.preventDefault(), s.current = St(function() {
        var C = d.current ? 10 : 1;
        i(l.current * C, !1), l.current = 0;
      });
    }
  }
  function h(p, S) {
    i(S, !0), yu || p.preventDefault();
  }
  var b = ze(null), m = ze(null);
  function g(p) {
    if (e) {
      St.cancel(m.current), m.current = St(function() {
        b.current = null;
      }, 2);
      var S = p.deltaX, E = p.deltaY, C = p.shiftKey, x = S, w = E;
      (b.current === "sx" || !b.current && C && E && !S) && (x = E, w = 0, b.current = "sx");
      var $ = Math.abs(x), O = Math.abs(w);
      b.current === null && (b.current = a && $ > O ? "x" : "y"), b.current === "y" ? v(p, w) : h(p, x);
    }
  }
  function y(p) {
    e && (d.current = p.detail === c.current);
  }
  return [g, y];
}
function bC(e, t, n, r) {
  var o = u.useMemo(function() {
    return [/* @__PURE__ */ new Map(), []];
  }, [e, n.id, r]), a = K(o, 2), i = a[0], l = a[1], s = function(d) {
    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : d, v = i.get(d), h = i.get(f);
    if (v === void 0 || h === void 0)
      for (var b = e.length, m = l.length; m < b; m += 1) {
        var g, y = e[m], p = t(y);
        i.set(p, m);
        var S = (g = n.get(p)) !== null && g !== void 0 ? g : r;
        if (l[m] = (l[m - 1] || 0) + S, p === d && (v = m), p === f && (h = m), v !== void 0 && h !== void 0)
          break;
      }
    return {
      top: l[v - 1] || 0,
      bottom: l[h]
    };
  };
  return s;
}
var yC = /* @__PURE__ */ function() {
  function e() {
    Vt(this, e), D(this, "maps", void 0), D(this, "id", 0), this.maps = /* @__PURE__ */ Object.create(null);
  }
  return Bt(e, [{
    key: "set",
    value: function(n, r) {
      this.maps[n] = r, this.id += 1;
    }
  }, {
    key: "get",
    value: function(n) {
      return this.maps[n];
    }
  }]), e;
}();
function SC(e, t, n) {
  var r = u.useState(0), o = K(r, 2), a = o[0], i = o[1], l = ze(/* @__PURE__ */ new Map()), s = ze(new yC()), c = ze();
  function d() {
    St.cancel(c.current);
  }
  function f() {
    var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    d();
    var b = function() {
      l.current.forEach(function(g, y) {
        if (g && g.offsetParent) {
          var p = Co(g), S = p.offsetHeight;
          s.current.get(y) !== S && s.current.set(y, p.offsetHeight);
        }
      }), i(function(g) {
        return g + 1;
      });
    };
    h ? b() : c.current = St(b);
  }
  function v(h, b) {
    var m = e(h);
    l.current.get(m), b ? (l.current.set(m, b), f()) : l.current.delete(m);
  }
  return Mt(function() {
    return d;
  }, []), [v, f, s.current, a];
}
var Su = 14 / 15;
function CC(e, t, n) {
  var r = ze(!1), o = ze(0), a = ze(0), i = ze(null), l = ze(null), s, c = function(h) {
    if (r.current) {
      var b = Math.ceil(h.touches[0].pageX), m = Math.ceil(h.touches[0].pageY), g = o.current - b, y = a.current - m, p = Math.abs(g) > Math.abs(y);
      p ? o.current = b : a.current = m;
      var S = n(p, p ? g : y, !1, h);
      S && h.preventDefault(), clearInterval(l.current), S && (l.current = setInterval(function() {
        p ? g *= Su : y *= Su;
        var E = Math.floor(p ? g : y);
        (!n(p, E, !0) || Math.abs(E) <= 0.1) && clearInterval(l.current);
      }, 16));
    }
  }, d = function() {
    r.current = !1, s();
  }, f = function(h) {
    s(), h.touches.length === 1 && !r.current && (r.current = !0, o.current = Math.ceil(h.touches[0].pageX), a.current = Math.ceil(h.touches[0].pageY), i.current = h.target, i.current.addEventListener("touchmove", c, {
      passive: !1
    }), i.current.addEventListener("touchend", d, {
      passive: !0
    }));
  };
  s = function() {
    i.current && (i.current.removeEventListener("touchmove", c), i.current.removeEventListener("touchend", d));
  }, Rt(function() {
    return e && t.current.addEventListener("touchstart", f, {
      passive: !0
    }), function() {
      var v;
      (v = t.current) === null || v === void 0 || v.removeEventListener("touchstart", f), s(), clearInterval(l.current);
    };
  }, [e]);
}
var Cu = 10;
function EC(e, t, n, r, o, a, i, l) {
  var s = u.useRef(), c = u.useState(null), d = K(c, 2), f = d[0], v = d[1];
  return Rt(function() {
    if (f && f.times < Cu) {
      if (!e.current) {
        v(function(j) {
          return z({}, j);
        });
        return;
      }
      a();
      var h = f.targetAlign, b = f.originAlign, m = f.index, g = f.offset, y = e.current.clientHeight, p = !1, S = h, E = null;
      if (y) {
        for (var C = h || b, x = 0, w = 0, $ = 0, O = Math.min(t.length - 1, m), R = 0; R <= O; R += 1) {
          var _ = o(t[R]);
          w = x;
          var I = n.get(_);
          $ = w + (I === void 0 ? r : I), x = $;
        }
        for (var F = C === "top" ? g : y - g, M = O; M >= 0; M -= 1) {
          var V = o(t[M]), N = n.get(V);
          if (N === void 0) {
            p = !0;
            break;
          }
          if (F -= N, F <= 0)
            break;
        }
        switch (C) {
          case "top":
            E = w - g;
            break;
          case "bottom":
            E = $ - y + g;
            break;
          default: {
            var P = e.current.scrollTop, T = P + y;
            w < P ? S = "top" : $ > T && (S = "bottom");
          }
        }
        E !== null && i(E), E !== f.lastTop && (p = !0);
      }
      p && v(z(z({}, f), {}, {
        times: f.times + 1,
        targetAlign: S,
        lastTop: E
      }));
    } else process.env.NODE_ENV !== "production" && (f == null ? void 0 : f.times) === Cu && ut(!1, "Seems `scrollTo` with `rc-virtual-list` reach the max limitation. Please fire issue for us. Thanks.");
  }, [f, e.current]), function(h) {
    if (h == null) {
      l();
      return;
    }
    if (St.cancel(s.current), typeof h == "number")
      i(h);
    else if (h && Be(h) === "object") {
      var b, m = h.align;
      "index" in h ? b = h.index : b = t.findIndex(function(p) {
        return o(p) === h.key;
      });
      var g = h.offset, y = g === void 0 ? 0 : g;
      v({
        times: 0,
        index: b,
        offset: y,
        originAlign: m
      });
    }
  };
}
function Eu(e, t) {
  var n = "touches" in e ? e.touches[0] : e;
  return n[t ? "pageX" : "pageY"];
}
var Wl = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.rtl, o = e.scrollOffset, a = e.scrollRange, i = e.onStartMove, l = e.onStopMove, s = e.onScroll, c = e.horizontal, d = e.spinSize, f = e.containerSize, v = e.style, h = e.thumbStyle, b = u.useState(!1), m = K(b, 2), g = m[0], y = m[1], p = u.useState(null), S = K(p, 2), E = S[0], C = S[1], x = u.useState(null), w = K(x, 2), $ = w[0], O = w[1], R = !r, _ = u.useRef(), I = u.useRef(), F = u.useState(!1), M = K(F, 2), V = M[0], N = M[1], P = u.useRef(), T = function() {
    clearTimeout(P.current), N(!0), P.current = setTimeout(function() {
      N(!1);
    }, 3e3);
  }, j = a - f || 0, H = f - d || 0, L = u.useMemo(function() {
    if (o === 0 || j === 0)
      return 0;
    var Z = o / j;
    return Z * H;
  }, [o, j, H]), q = function(X) {
    X.stopPropagation(), X.preventDefault();
  }, k = u.useRef({
    top: L,
    dragging: g,
    pageY: E,
    startTop: $
  });
  k.current = {
    top: L,
    dragging: g,
    pageY: E,
    startTop: $
  };
  var U = function(X) {
    y(!0), C(Eu(X, c)), O(k.current.top), i(), X.stopPropagation(), X.preventDefault();
  };
  u.useEffect(function() {
    var Z = function(W) {
      W.preventDefault();
    }, X = _.current, te = I.current;
    return X.addEventListener("touchstart", Z, {
      passive: !1
    }), te.addEventListener("touchstart", U, {
      passive: !1
    }), function() {
      X.removeEventListener("touchstart", Z), te.removeEventListener("touchstart", U);
    };
  }, []);
  var G = u.useRef();
  G.current = j;
  var le = u.useRef();
  le.current = H, u.useEffect(function() {
    if (g) {
      var Z, X = function(W) {
        var ae = k.current, ie = ae.dragging, ue = ae.pageY, ve = ae.startTop;
        St.cancel(Z);
        var $e = _.current.getBoundingClientRect(), Re = f / (c ? $e.width : $e.height);
        if (ie) {
          var Se = (Eu(W, c) - ue) * Re, _e = ve;
          !R && c ? _e -= Se : _e += Se;
          var J = G.current, re = le.current, ge = re ? _e / re : 0, be = Math.ceil(ge * J);
          be = Math.max(be, 0), be = Math.min(be, J), Z = St(function() {
            s(be, c);
          });
        }
      }, te = function() {
        y(!1), l();
      };
      return window.addEventListener("mousemove", X, {
        passive: !0
      }), window.addEventListener("touchmove", X, {
        passive: !0
      }), window.addEventListener("mouseup", te, {
        passive: !0
      }), window.addEventListener("touchend", te, {
        passive: !0
      }), function() {
        window.removeEventListener("mousemove", X), window.removeEventListener("touchmove", X), window.removeEventListener("mouseup", te), window.removeEventListener("touchend", te), St.cancel(Z);
      };
    }
  }, [g]), u.useEffect(function() {
    return T(), function() {
      clearTimeout(P.current);
    };
  }, [o]), u.useImperativeHandle(t, function() {
    return {
      delayHidden: T
    };
  });
  var Y = "".concat(n, "-scrollbar"), Q = {
    position: "absolute",
    visibility: V ? null : "hidden"
  }, pe = {
    position: "absolute",
    background: "rgba(0, 0, 0, 0.5)",
    borderRadius: 99,
    cursor: "pointer",
    userSelect: "none"
  };
  return c ? (Q.height = 8, Q.left = 0, Q.right = 0, Q.bottom = 0, pe.height = "100%", pe.width = d, R ? pe.left = L : pe.right = L) : (Q.width = 8, Q.top = 0, Q.bottom = 0, R ? Q.right = 0 : Q.left = 0, pe.width = "100%", pe.height = d, pe.top = L), /* @__PURE__ */ u.createElement("div", {
    ref: _,
    className: ne(Y, D(D(D({}, "".concat(Y, "-horizontal"), c), "".concat(Y, "-vertical"), !c), "".concat(Y, "-visible"), V)),
    style: z(z({}, Q), v),
    onMouseDown: q,
    onMouseMove: T
  }, /* @__PURE__ */ u.createElement("div", {
    ref: I,
    className: ne("".concat(Y, "-thumb"), D({}, "".concat(Y, "-thumb-moving"), g)),
    style: z(z({}, pe), h),
    onMouseDown: U
  }));
});
process.env.NODE_ENV !== "production" && (Wl.displayName = "ScrollBar");
var xC = 20;
function xu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = e / t * e;
  return isNaN(n) && (n = 0), n = Math.max(n, xC), Math.floor(n);
}
var wC = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "scrollWidth", "component", "onScroll", "onVirtualScroll", "onVisibleChange", "innerProps", "extraRender", "styles"], $C = [], OC = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function RC(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-virtual-list" : n, o = e.className, a = e.height, i = e.itemHeight, l = e.fullHeight, s = l === void 0 ? !0 : l, c = e.style, d = e.data, f = e.children, v = e.itemKey, h = e.virtual, b = e.direction, m = e.scrollWidth, g = e.component, y = g === void 0 ? "div" : g, p = e.onScroll, S = e.onVirtualScroll, E = e.onVisibleChange, C = e.innerProps, x = e.extraRender, w = e.styles, $ = yt(e, wC), O = u.useCallback(function(xe) {
    return typeof v == "function" ? v(xe) : xe == null ? void 0 : xe[v];
  }, [v]), R = SC(O), _ = K(R, 4), I = _[0], F = _[1], M = _[2], V = _[3], N = !!(h !== !1 && a && i), P = u.useMemo(function() {
    return Object.values(M.maps).reduce(function(xe, ye) {
      return xe + ye;
    }, 0);
  }, [M.id, M.maps]), T = N && d && (Math.max(i * d.length, P) > a || !!m), j = b === "rtl", H = ne(r, D({}, "".concat(r, "-rtl"), j), o), L = d || $C, q = ze(), k = ze(), U = ze(), G = jt(0), le = K(G, 2), Y = le[0], Q = le[1], pe = jt(0), Z = K(pe, 2), X = Z[0], te = Z[1], fe = jt(!1), W = K(fe, 2), ae = W[0], ie = W[1], ue = function() {
    ie(!0);
  }, ve = function() {
    ie(!1);
  }, $e = {
    getKey: O
  };
  function Re(xe) {
    Q(function(ye) {
      var de;
      typeof xe == "function" ? de = xe(ye) : de = xe;
      var he = Fe(de);
      return q.current.scrollTop = he, he;
    });
  }
  var Se = ze({
    start: 0,
    end: L.length
  }), _e = ze(), J = hC(L, O), re = K(J, 1), ge = re[0];
  _e.current = ge;
  var be = u.useMemo(function() {
    if (!N)
      return {
        scrollHeight: void 0,
        start: 0,
        end: L.length - 1,
        offset: void 0
      };
    if (!T) {
      var xe;
      return {
        scrollHeight: ((xe = k.current) === null || xe === void 0 ? void 0 : xe.offsetHeight) || 0,
        start: 0,
        end: L.length - 1,
        offset: void 0
      };
    }
    for (var ye = 0, de, he, Ze, st = L.length, at = 0; at < st; at += 1) {
      var Wt = L[at], kt = O(Wt), At = M.get(kt), _t = ye + (At === void 0 ? i : At);
      _t >= Y && de === void 0 && (de = at, he = ye), _t > Y + a && Ze === void 0 && (Ze = at), ye = _t;
    }
    return de === void 0 && (de = 0, he = 0, Ze = Math.ceil(a / i)), Ze === void 0 && (Ze = L.length - 1), Ze = Math.min(Ze + 1, L.length - 1), {
      scrollHeight: ye,
      start: de,
      end: Ze,
      offset: he
    };
  }, [T, N, Y, L, V, a]), Ie = be.scrollHeight, Me = be.start, Ue = be.end, rt = be.offset;
  Se.current.start = Me, Se.current.end = Ue;
  var ct = u.useState({
    width: 0,
    height: a
  }), ft = K(ct, 2), De = ft[0], Te = ft[1], Ye = function(ye) {
    Te({
      width: ye.offsetWidth,
      height: ye.offsetHeight
    });
  }, Je = ze(), et = ze(), lt = u.useMemo(function() {
    return xu(De.width, m);
  }, [De.width, m]), It = u.useMemo(function() {
    return xu(De.height, Ie);
  }, [De.height, Ie]), mt = Ie - a, vt = ze(mt);
  vt.current = mt;
  function Fe(xe) {
    var ye = xe;
    return Number.isNaN(vt.current) || (ye = Math.min(ye, vt.current)), ye = Math.max(ye, 0), ye;
  }
  var Ee = Y <= 0, Ve = Y >= mt, je = X <= 0, qe = X >= m, Ae = dv(Ee, Ve, je, qe), ce = function() {
    return {
      x: j ? -X : X,
      y: Y
    };
  }, We = ze(ce()), dt = $t(function(xe) {
    if (S) {
      var ye = z(z({}, ce()), xe);
      (We.current.x !== ye.x || We.current.y !== ye.y) && (S(ye), We.current = ye);
    }
  });
  function Qe(xe, ye) {
    var de = xe;
    ye ? (Bi(function() {
      te(de);
    }), dt()) : Re(de);
  }
  function Pe(xe) {
    var ye = xe.currentTarget.scrollTop;
    ye !== Y && Re(ye), p == null || p(xe), dt();
  }
  var Oe = function(ye) {
    var de = ye, he = m ? m - De.width : 0;
    return de = Math.max(de, 0), de = Math.min(de, he), de;
  }, Ne = $t(function(xe, ye) {
    ye ? (Bi(function() {
      te(function(de) {
        var he = de + (j ? -xe : xe);
        return Oe(he);
      });
    }), dt()) : Re(function(de) {
      var he = de + xe;
      return he;
    });
  }), Le = pC(N, Ee, Ve, je, qe, !!m, Ne), tt = K(Le, 2), gt = tt[0], A = tt[1];
  CC(N, q, function(xe, ye, de, he) {
    var Ze = he;
    return Ae(xe, ye, de) ? !1 : !Ze || !Ze._virtualHandled ? (Ze && (Ze._virtualHandled = !0), gt({
      preventDefault: function() {
      },
      deltaX: xe ? ye : 0,
      deltaY: xe ? 0 : ye
    }), !0) : !1;
  }), Rt(function() {
    function xe(de) {
      N && de.preventDefault();
    }
    var ye = q.current;
    return ye.addEventListener("wheel", gt, {
      passive: !1
    }), ye.addEventListener("DOMMouseScroll", A, {
      passive: !0
    }), ye.addEventListener("MozMousePixelScroll", xe, {
      passive: !1
    }), function() {
      ye.removeEventListener("wheel", gt), ye.removeEventListener("DOMMouseScroll", A), ye.removeEventListener("MozMousePixelScroll", xe);
    };
  }, [N]), Rt(function() {
    if (m) {
      var xe = Oe(X);
      te(xe), dt({
        x: xe
      });
    }
  }, [De.width, m]);
  var ee = function() {
    var ye, de;
    (ye = Je.current) === null || ye === void 0 || ye.delayHidden(), (de = et.current) === null || de === void 0 || de.delayHidden();
  }, me = EC(q, L, M, i, O, function() {
    return F(!0);
  }, Re, ee);
  u.useImperativeHandle(t, function() {
    return {
      nativeElement: U.current,
      getScrollInfo: ce,
      scrollTo: function(ye) {
        function de(he) {
          return he && Be(he) === "object" && ("left" in he || "top" in he);
        }
        de(ye) ? (ye.left !== void 0 && te(Oe(ye.left)), me(ye.top)) : me(ye);
      }
    };
  }), Rt(function() {
    if (E) {
      var xe = L.slice(Me, Ue + 1);
      E(xe, L);
    }
  }, [Me, Ue, L]);
  var we = bC(L, O, M, i), Ge = x == null ? void 0 : x({
    start: Me,
    end: Ue,
    virtual: T,
    offsetX: X,
    offsetY: rt,
    rtl: j,
    getSize: we
  }), Ke = gC(L, Me, Ue, m, X, I, f, $e), Xe = null;
  a && (Xe = z(D({}, s ? "height" : "maxHeight", a), OC), N && (Xe.overflowY = "hidden", m && (Xe.overflowX = "hidden"), ae && (Xe.pointerEvents = "none")));
  var nt = {};
  return j && (nt.dir = "rtl"), /* @__PURE__ */ u.createElement("div", ke({
    ref: U,
    style: z(z({}, c), {}, {
      position: "relative"
    }),
    className: H
  }, nt, $), /* @__PURE__ */ u.createElement(nr, {
    onResize: Ye
  }, /* @__PURE__ */ u.createElement(y, {
    className: "".concat(r, "-holder"),
    style: Xe,
    ref: q,
    onScroll: Pe,
    onMouseEnter: ee
  }, /* @__PURE__ */ u.createElement(uv, {
    prefixCls: r,
    height: Ie,
    offsetX: X,
    offsetY: rt,
    scrollWidth: m,
    onInnerResize: F,
    ref: k,
    innerProps: C,
    rtl: j,
    extra: Ge
  }, Ke))), T && Ie > a && /* @__PURE__ */ u.createElement(Wl, {
    ref: Je,
    prefixCls: r,
    scrollOffset: Y,
    scrollRange: Ie,
    rtl: j,
    onScroll: Qe,
    onStartMove: ue,
    onStopMove: ve,
    spinSize: It,
    containerSize: De.height,
    style: w == null ? void 0 : w.verticalScrollBar,
    thumbStyle: w == null ? void 0 : w.verticalScrollBarThumb
  }), T && m > De.width && /* @__PURE__ */ u.createElement(Wl, {
    ref: et,
    prefixCls: r,
    scrollOffset: X,
    scrollRange: m,
    rtl: j,
    onScroll: Qe,
    onStartMove: ue,
    onStopMove: ve,
    spinSize: lt,
    containerSize: De.width,
    horizontal: !0,
    style: w == null ? void 0 : w.horizontalScrollBar,
    thumbStyle: w == null ? void 0 : w.horizontalScrollBarThumb
  }));
}
var fv = /* @__PURE__ */ u.forwardRef(RC);
fv.displayName = "List";
function IC() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
var PC = ["disabled", "title", "children", "style", "className"];
function wu(e) {
  return typeof e == "string" || typeof e == "number";
}
var NC = function(t, n) {
  var r = wS(), o = r.prefixCls, a = r.id, i = r.open, l = r.multiple, s = r.mode, c = r.searchValue, d = r.toggleOpen, f = r.notFoundContent, v = r.onPopupScroll, h = u.useContext(Cs), b = h.maxCount, m = h.flattenOptions, g = h.onActiveValue, y = h.defaultActiveFirstOption, p = h.onSelect, S = h.menuItemSelectedIcon, E = h.rawValues, C = h.fieldNames, x = h.virtual, w = h.direction, $ = h.listHeight, O = h.listItemHeight, R = h.optionRender, _ = "".concat(o, "-item"), I = za(function() {
    return m;
  }, [i, m], function(Z, X) {
    return X[0] && Z[1] !== X[1];
  }), F = u.useRef(null), M = u.useMemo(function() {
    return l && Vl(b) && (E == null ? void 0 : E.size) >= b;
  }, [l, b, E == null ? void 0 : E.size]), V = function(X) {
    X.preventDefault();
  }, N = function(X) {
    var te;
    (te = F.current) === null || te === void 0 || te.scrollTo(typeof X == "number" ? {
      index: X
    } : X);
  }, P = function(X) {
    for (var te = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, fe = I.length, W = 0; W < fe; W += 1) {
      var ae = (X + W * te + fe) % fe, ie = I[ae] || {}, ue = ie.group, ve = ie.data;
      if (!ue && !(ve != null && ve.disabled) && !M)
        return ae;
    }
    return -1;
  }, T = u.useState(function() {
    return P(0);
  }), j = K(T, 2), H = j[0], L = j[1], q = function(X) {
    var te = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    L(X);
    var fe = {
      source: te ? "keyboard" : "mouse"
    }, W = I[X];
    if (!W) {
      g(null, -1, fe);
      return;
    }
    g(W.value, X, fe);
  };
  Mt(function() {
    q(y !== !1 ? P(0) : -1);
  }, [I.length, c]);
  var k = u.useCallback(function(Z) {
    return E.has(Z) && s !== "combobox";
  }, [s, Ce(E).toString(), E.size]);
  Mt(function() {
    var Z = setTimeout(function() {
      if (!l && i && E.size === 1) {
        var te = Array.from(E)[0], fe = I.findIndex(function(W) {
          var ae = W.data;
          return ae.value === te;
        });
        fe !== -1 && (q(fe), N(fe));
      }
    });
    if (i) {
      var X;
      (X = F.current) === null || X === void 0 || X.scrollTo(void 0);
    }
    return function() {
      return clearTimeout(Z);
    };
  }, [i, c]);
  var U = function(X) {
    X !== void 0 && p(X, {
      selected: !E.has(X)
    }), l || d(!1);
  };
  if (u.useImperativeHandle(n, function() {
    return {
      onKeyDown: function(X) {
        var te = X.which, fe = X.ctrlKey;
        switch (te) {
          case se.N:
          case se.P:
          case se.UP:
          case se.DOWN: {
            var W = 0;
            if (te === se.UP ? W = -1 : te === se.DOWN ? W = 1 : IC() && fe && (te === se.N ? W = 1 : te === se.P && (W = -1)), W !== 0) {
              var ae = P(H + W, W);
              N(ae), q(ae, !0);
            }
            break;
          }
          case se.ENTER: {
            var ie, ue = I[H];
            ue && !(ue != null && (ie = ue.data) !== null && ie !== void 0 && ie.disabled) && !M ? U(ue.value) : U(void 0), i && X.preventDefault();
            break;
          }
          case se.ESC:
            d(!1), i && X.stopPropagation();
        }
      },
      onKeyUp: function() {
      },
      scrollTo: function(X) {
        N(X);
      }
    };
  }), I.length === 0)
    return /* @__PURE__ */ u.createElement("div", {
      role: "listbox",
      id: "".concat(a, "_list"),
      className: "".concat(_, "-empty"),
      onMouseDown: V
    }, f);
  var G = Object.keys(C).map(function(Z) {
    return C[Z];
  }), le = function(X) {
    return X.label;
  };
  function Y(Z, X) {
    var te = Z.group;
    return {
      role: te ? "presentation" : "option",
      id: "".concat(a, "_list_").concat(X)
    };
  }
  var Q = function(X) {
    var te = I[X];
    if (!te)
      return null;
    var fe = te.data || {}, W = fe.value, ae = te.group, ie = Ir(fe, !0), ue = le(te);
    return te ? /* @__PURE__ */ u.createElement("div", ke({
      "aria-label": typeof ue == "string" && !ae ? ue : null
    }, ie, {
      key: X
    }, Y(te, X), {
      "aria-selected": k(W)
    }), W) : null;
  }, pe = {
    role: "listbox",
    id: "".concat(a, "_list")
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, x && /* @__PURE__ */ u.createElement("div", ke({}, pe, {
    style: {
      height: 0,
      width: 0,
      overflow: "hidden"
    }
  }), Q(H - 1), Q(H), Q(H + 1)), /* @__PURE__ */ u.createElement(fv, {
    itemKey: "key",
    ref: F,
    data: I,
    height: $,
    itemHeight: O,
    fullHeight: !1,
    onMouseDown: V,
    onScroll: v,
    virtual: x,
    direction: w,
    innerProps: x ? null : pe
  }, function(Z, X) {
    var te = Z.group, fe = Z.groupOption, W = Z.data, ae = Z.label, ie = Z.value, ue = W.key;
    if (te) {
      var ve, $e = (ve = W.title) !== null && ve !== void 0 ? ve : wu(ae) ? ae.toString() : void 0;
      return /* @__PURE__ */ u.createElement("div", {
        className: ne(_, "".concat(_, "-group"), W.className),
        title: $e
      }, ae !== void 0 ? ae : ue);
    }
    var Re = W.disabled, Se = W.title;
    W.children;
    var _e = W.style, J = W.className, re = yt(W, PC), ge = gr(re, G), be = k(ie), Ie = Re || !be && M, Me = "".concat(_, "-option"), Ue = ne(_, Me, J, D(D(D(D({}, "".concat(Me, "-grouped"), fe), "".concat(Me, "-active"), H === X && !Ie), "".concat(Me, "-disabled"), Ie), "".concat(Me, "-selected"), be)), rt = le(Z), ct = !S || typeof S == "function" || be, ft = typeof rt == "number" ? rt : rt || ie, De = wu(ft) ? ft.toString() : void 0;
    return Se !== void 0 && (De = Se), /* @__PURE__ */ u.createElement("div", ke({}, Ir(ge), x ? {} : Y(Z, X), {
      "aria-selected": be,
      className: Ue,
      title: De,
      onMouseMove: function() {
        H === X || Ie || q(X);
      },
      onClick: function() {
        Ie || U(ie);
      },
      style: _e
    }), /* @__PURE__ */ u.createElement("div", {
      className: "".concat(Me, "-content")
    }, typeof R == "function" ? R(Z, {
      index: X
    }) : ft), /* @__PURE__ */ u.isValidElement(S) || be, ct && /* @__PURE__ */ u.createElement(Za, {
      className: "".concat(_, "-option-state"),
      customizeIcon: S,
      customizeIconProps: {
        value: ie,
        disabled: Ie,
        isSelected: be
      }
    }, be ? "✓" : null));
  }));
}, vv = /* @__PURE__ */ u.forwardRef(NC);
process.env.NODE_ENV !== "production" && (vv.displayName = "OptionList");
const MC = function(e, t) {
  var n = u.useRef({
    values: /* @__PURE__ */ new Map(),
    options: /* @__PURE__ */ new Map()
  }), r = u.useMemo(function() {
    var a = n.current, i = a.values, l = a.options, s = e.map(function(f) {
      if (f.label === void 0) {
        var v;
        return z(z({}, f), {}, {
          label: (v = i.get(f.value)) === null || v === void 0 ? void 0 : v.label
        });
      }
      return f;
    }), c = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
    return s.forEach(function(f) {
      c.set(f.value, f), d.set(f.value, t.get(f.value) || l.get(f.value));
    }), n.current.values = c, n.current.options = d, s;
  }, [e, t]), o = u.useCallback(function(a) {
    return t.get(a) || n.current.options.get(a);
  }, [t]);
  return [r, o];
};
function Mi(e, t) {
  return Ss(e).join("").toUpperCase().includes(t);
}
const _C = function(e, t, n, r, o) {
  return u.useMemo(function() {
    if (!n || r === !1)
      return e;
    var a = t.options, i = t.label, l = t.value, s = [], c = typeof r == "function", d = n.toUpperCase(), f = c ? r : function(h, b) {
      return o ? Mi(b[o], d) : b[a] ? Mi(b[i !== "children" ? i : "label"], d) : Mi(b[l], d);
    }, v = c ? function(h) {
      return Bl(h);
    } : function(h) {
      return h;
    };
    return e.forEach(function(h) {
      if (h[a]) {
        var b = f(n, v(h));
        if (b)
          s.push(h);
        else {
          var m = h[a].filter(function(g) {
            return f(n, v(g));
          });
          m.length && s.push(z(z({}, h), {}, D({}, a, m)));
        }
        return;
      }
      f(n, v(h)) && s.push(h);
    }), s;
  }, [e, r, o, n, t]);
};
var $u = 0, TC = process.env.NODE_ENV !== "test" && on();
function DC() {
  var e;
  return TC ? (e = $u, $u += 1) : e = "TEST_OR_SSR", e;
}
function AC(e) {
  var t = u.useState(), n = K(t, 2), r = n[0], o = n[1];
  return u.useEffect(function() {
    o("rc_select_".concat(DC()));
  }, []), e || r;
}
var FC = ["children", "value"], jC = ["children"];
function LC(e) {
  var t = e, n = t.key, r = t.props, o = r.children, a = r.value, i = yt(r, FC);
  return z({
    key: n,
    value: a !== void 0 ? a : n,
    children: o
  }, i);
}
function ws(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return Jn(e).map(function(n, r) {
    if (!/* @__PURE__ */ u.isValidElement(n) || !n.type)
      return null;
    var o = n, a = o.type.isSelectOptGroup, i = o.key, l = o.props, s = l.children, c = yt(l, jC);
    return t || !a ? LC(n) : z(z({
      key: "__RC_SELECT_GRP__".concat(i === null ? r : i, "__"),
      label: i
    }, c), {}, {
      options: ws(s)
    });
  }).filter(function(n) {
    return n;
  });
}
var HC = function(t, n, r, o, a) {
  return u.useMemo(function() {
    var i = t, l = !t;
    l && (i = ws(n));
    var s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = function(h, b, m) {
      m && typeof m == "string" && h.set(b[m], b);
    }, f = function v(h) {
      for (var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, m = 0; m < h.length; m += 1) {
        var g = h[m];
        !g[r.options] || b ? (s.set(g[r.value], g), d(c, g, r.label), d(c, g, o), d(c, g, a)) : v(g[r.options], !0);
      }
    };
    return f(i), {
      options: i,
      valueOptions: s,
      labelOptions: c
    };
  }, [t, n, r, o, a]);
};
function Ou(e) {
  var t = u.useRef();
  t.current = e;
  var n = u.useCallback(function() {
    return t.current.apply(t, arguments);
  }, []);
  return n;
}
function zC(e) {
  var t = e.mode, n = e.options, r = e.children, o = e.backfill, a = e.allowClear, i = e.placeholder, l = e.getInputElement, s = e.showSearch, c = e.onSearch, d = e.defaultOpen, f = e.autoFocus, v = e.labelInValue, h = e.value, b = e.inputValue, m = e.optionLabelProp, g = ja(t), y = s !== void 0 ? s : g || t === "combobox", p = n || ws(r);
  if (ut(t !== "tags" || p.every(function(x) {
    return !x.disabled;
  }), "Please avoid setting option to disabled in tags mode since user can always type text as tag."), t === "tags" || t === "combobox") {
    var S = p.some(function(x) {
      return x.options ? x.options.some(function(w) {
        return typeof ("value" in w ? w.value : w.key) == "number";
      }) : typeof ("value" in x ? x.value : x.key) == "number";
    });
    ut(!S, "`value` of Option should not use number type when `mode` is `tags` or `combobox`.");
  }
  if (ut(t !== "combobox" || !m, "`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly."), ut(t === "combobox" || !o, "`backfill` only works with `combobox` mode."), ut(t === "combobox" || !l, "`getInputElement` only work with `combobox` mode."), Gi(t !== "combobox" || !l || !a || !i, "Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`."), c && !y && t !== "combobox" && t !== "tags" && ut(!1, "`onSearch` should work with `showSearch` instead of use alone."), Gi(!d || f, "`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed."), h != null) {
    var E = Ss(h);
    ut(!v || E.every(function(x) {
      return Be(x) === "object" && ("key" in x || "value" in x);
    }), "`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`"), ut(!g || Array.isArray(h), "`value` should be array when `mode` is `multiple` or `tags`");
  }
  if (r) {
    var C = null;
    Jn(r).some(function(x) {
      if (!/* @__PURE__ */ u.isValidElement(x) || !x.type)
        return !1;
      var w = x, $ = w.type;
      if ($.isSelectOption)
        return !1;
      if ($.isSelectOptGroup) {
        var O = Jn(x.props.children).every(function(R) {
          return !/* @__PURE__ */ u.isValidElement(R) || !x.type || R.type.isSelectOption ? !0 : (C = R.type, !1);
        });
        return !O;
      }
      return C = $, !0;
    }), C && ut(!1, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(C.displayName || C.name || C, "`.")), ut(b === void 0, "`inputValue` is deprecated, please use `searchValue` instead.");
  }
}
function VC(e, t) {
  if (e) {
    var n = function r(o) {
      for (var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = 0; i < o.length; i++) {
        var l = o[i];
        if (l[t == null ? void 0 : t.value] === null)
          return ut(!1, "`value` in Select options should not be `null`."), !0;
        if (!a && Array.isArray(l[t == null ? void 0 : t.options]) && r(l[t == null ? void 0 : t.options], !0))
          break;
      }
    };
    n(e);
  }
}
var BC = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "optionRender", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "direction", "listHeight", "listItemHeight", "labelRender", "value", "defaultValue", "labelInValue", "onChange", "maxCount"], WC = ["inputValue"];
function kC(e) {
  return !e || Be(e) !== "object";
}
var gv = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.id, r = e.mode, o = e.prefixCls, a = o === void 0 ? "rc-select" : o, i = e.backfill, l = e.fieldNames, s = e.inputValue, c = e.searchValue, d = e.onSearch, f = e.autoClearSearchValue, v = f === void 0 ? !0 : f, h = e.onSelect, b = e.onDeselect, m = e.dropdownMatchSelectWidth, g = m === void 0 ? !0 : m, y = e.filterOption, p = e.filterSort, S = e.optionFilterProp, E = e.optionLabelProp, C = e.options, x = e.optionRender, w = e.children, $ = e.defaultActiveFirstOption, O = e.menuItemSelectedIcon, R = e.virtual, _ = e.direction, I = e.listHeight, F = I === void 0 ? 200 : I, M = e.listItemHeight, V = M === void 0 ? 20 : M, N = e.labelRender, P = e.value, T = e.defaultValue, j = e.labelInValue, H = e.onChange, L = e.maxCount, q = yt(e, BC), k = AC(n), U = ja(r), G = !!(!C && w), le = u.useMemo(function() {
    return y === void 0 && r === "combobox" ? !1 : y;
  }, [y, r]), Y = u.useMemo(
    function() {
      return sv(l, G);
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [
      // We stringify fieldNames to avoid unnecessary re-renders.
      JSON.stringify(l),
      G
    ]
    /* eslint-enable react-hooks/exhaustive-deps */
  ), Q = Jt("", {
    value: c !== void 0 ? c : s,
    postState: function(Oe) {
      return Oe || "";
    }
  }), pe = K(Q, 2), Z = pe[0], X = pe[1], te = HC(C, w, Y, S, E), fe = te.valueOptions, W = te.labelOptions, ae = te.options, ie = u.useCallback(function(Pe) {
    var Oe = Ss(Pe);
    return Oe.map(function(Ne) {
      var Le, tt, gt, A, ee;
      if (kC(Ne))
        Le = Ne;
      else {
        var me;
        gt = Ne.key, tt = Ne.label, Le = (me = Ne.value) !== null && me !== void 0 ? me : gt;
      }
      var we = fe.get(Le);
      if (we) {
        var Ge;
        if (tt === void 0 && (tt = we == null ? void 0 : we[E || Y.label]), gt === void 0 && (gt = (Ge = we == null ? void 0 : we.key) !== null && Ge !== void 0 ? Ge : Le), A = we == null ? void 0 : we.disabled, ee = we == null ? void 0 : we.title, process.env.NODE_ENV !== "production" && !E) {
          var Ke = we == null ? void 0 : we[Y.label];
          Ke !== void 0 && !/* @__PURE__ */ u.isValidElement(Ke) && !/* @__PURE__ */ u.isValidElement(tt) && Ke !== tt && ut(!1, "`label` of `value` is not same as `label` in Select options.");
        }
      }
      return {
        label: tt,
        value: Le,
        key: gt,
        disabled: A,
        title: ee
      };
    });
  }, [Y, E, fe]), ue = Jt(T, {
    value: P
  }), ve = K(ue, 2), $e = ve[0], Re = ve[1], Se = u.useMemo(function() {
    var Pe, Oe = U && $e === null ? [] : $e, Ne = ie(Oe);
    return r === "combobox" && WS((Pe = Ne[0]) === null || Pe === void 0 ? void 0 : Pe.value) ? [] : Ne;
  }, [$e, ie, r, U]), _e = MC(Se, fe), J = K(_e, 2), re = J[0], ge = J[1], be = u.useMemo(function() {
    if (!r && re.length === 1) {
      var Pe = re[0];
      if (Pe.value === null && (Pe.label === null || Pe.label === void 0))
        return [];
    }
    return re.map(function(Oe) {
      var Ne;
      return z(z({}, Oe), {}, {
        label: (Ne = typeof N == "function" ? N(Oe) : Oe.label) !== null && Ne !== void 0 ? Ne : Oe.value
      });
    });
  }, [r, re, N]), Ie = u.useMemo(function() {
    return new Set(re.map(function(Pe) {
      return Pe.value;
    }));
  }, [re]);
  u.useEffect(function() {
    if (r === "combobox") {
      var Pe, Oe = (Pe = re[0]) === null || Pe === void 0 ? void 0 : Pe.value;
      X(BS(Oe) ? String(Oe) : "");
    }
  }, [re]);
  var Me = Ou(function(Pe, Oe) {
    var Ne = Oe ?? Pe;
    return D(D({}, Y.value, Pe), Y.label, Ne);
  }), Ue = u.useMemo(function() {
    if (r !== "tags")
      return ae;
    var Pe = Ce(ae), Oe = function(Le) {
      return fe.has(Le);
    };
    return Ce(re).sort(function(Ne, Le) {
      return Ne.value < Le.value ? -1 : 1;
    }).forEach(function(Ne) {
      var Le = Ne.value;
      Oe(Le) || Pe.push(Me(Le, Ne.label));
    }), Pe;
  }, [Me, ae, fe, re, r]), rt = _C(Ue, Y, Z, le, S), ct = u.useMemo(function() {
    return r !== "tags" || !Z || rt.some(function(Pe) {
      return Pe[S || "value"] === Z;
    }) || rt.some(function(Pe) {
      return Pe[Y.value] === Z;
    }) ? rt : [Me(Z)].concat(Ce(rt));
  }, [Me, S, r, rt, Z, Y]), ft = function Pe(Oe) {
    var Ne = Ce(Oe).sort(function(Le, tt) {
      return p(Le, tt, {
        searchValue: Z
      });
    });
    return Ne.map(function(Le) {
      return Array.isArray(Le.options) ? z(z({}, Le), {}, {
        options: Le.options.length > 0 ? Pe(Le.options) : Le.options
      }) : Le;
    });
  }, De = u.useMemo(function() {
    return p ? ft(ct) : ct;
  }, [ct, p, Z]), Te = u.useMemo(function() {
    return sC(De, {
      fieldNames: Y,
      childrenAsData: G
    });
  }, [De, Y, G]), Ye = function(Oe) {
    var Ne = ie(Oe);
    if (Re(Ne), H && // Trigger event only when value changed
    (Ne.length !== re.length || Ne.some(function(gt, A) {
      var ee;
      return ((ee = re[A]) === null || ee === void 0 ? void 0 : ee.value) !== (gt == null ? void 0 : gt.value);
    }))) {
      var Le = j ? Ne : Ne.map(function(gt) {
        return gt.value;
      }), tt = Ne.map(function(gt) {
        return Bl(ge(gt.value));
      });
      H(
        // Value
        U ? Le : Le[0],
        // Option
        U ? tt : tt[0]
      );
    }
  }, Je = u.useState(null), et = K(Je, 2), lt = et[0], It = et[1], mt = u.useState(0), vt = K(mt, 2), Fe = vt[0], Ee = vt[1], Ve = $ !== void 0 ? $ : r !== "combobox", je = u.useCallback(function(Pe, Oe) {
    var Ne = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, Le = Ne.source, tt = Le === void 0 ? "keyboard" : Le;
    Ee(Oe), i && r === "combobox" && Pe !== null && tt === "keyboard" && It(String(Pe));
  }, [i, r]), qe = function(Oe, Ne, Le) {
    var tt = function() {
      var xe, ye = ge(Oe);
      return [j ? {
        label: ye == null ? void 0 : ye[Y.label],
        value: Oe,
        key: (xe = ye == null ? void 0 : ye.key) !== null && xe !== void 0 ? xe : Oe
      } : Oe, Bl(ye)];
    };
    if (Ne && h) {
      var gt = tt(), A = K(gt, 2), ee = A[0], me = A[1];
      h(ee, me);
    } else if (!Ne && b && Le !== "clear") {
      var we = tt(), Ge = K(we, 2), Ke = Ge[0], Xe = Ge[1];
      b(Ke, Xe);
    }
  }, Ae = Ou(function(Pe, Oe) {
    var Ne, Le = U ? Oe.selected : !0;
    Le ? Ne = U ? [].concat(Ce(re), [Pe]) : [Pe] : Ne = re.filter(function(tt) {
      return tt.value !== Pe;
    }), Ye(Ne), qe(Pe, Le), r === "combobox" ? It("") : (!ja || v) && (X(""), It(""));
  }), ce = function(Oe, Ne) {
    Ye(Oe);
    var Le = Ne.type, tt = Ne.values;
    (Le === "remove" || Le === "clear") && tt.forEach(function(gt) {
      qe(gt.value, !1, Le);
    });
  }, We = function(Oe, Ne) {
    if (X(Oe), It(null), Ne.source === "submit") {
      var Le = (Oe || "").trim();
      if (Le) {
        var tt = Array.from(new Set([].concat(Ce(Ie), [Le])));
        Ye(tt), qe(Le, !0), X("");
      }
      return;
    }
    Ne.source !== "blur" && (r === "combobox" && Ye(Oe), d == null || d(Oe));
  }, dt = function(Oe) {
    var Ne = Oe;
    r !== "tags" && (Ne = Oe.map(function(tt) {
      var gt = W.get(tt);
      return gt == null ? void 0 : gt.value;
    }).filter(function(tt) {
      return tt !== void 0;
    }));
    var Le = Array.from(new Set([].concat(Ce(Ie), Ce(Ne))));
    Ye(Le), Le.forEach(function(tt) {
      qe(tt, !0);
    });
  }, Qe = u.useMemo(function() {
    var Pe = R !== !1 && g !== !1;
    return z(z({}, te), {}, {
      flattenOptions: Te,
      onActiveValue: je,
      defaultActiveFirstOption: Ve,
      onSelect: Ae,
      menuItemSelectedIcon: O,
      rawValues: Ie,
      fieldNames: Y,
      virtual: Pe,
      direction: _,
      listHeight: F,
      listItemHeight: V,
      childrenAsData: G,
      maxCount: L,
      optionRender: x
    });
  }, [L, te, Te, je, Ve, Ae, O, Ie, Y, R, g, _, F, V, G, x]);
  return process.env.NODE_ENV !== "production" && (zC(e), VC(ae, Y)), /* @__PURE__ */ u.createElement(Cs.Provider, {
    value: Qe
  }, /* @__PURE__ */ u.createElement(cv, ke({}, q, {
    // >>> MISC
    id: k,
    prefixCls: a,
    ref: t,
    omitDomProps: WC,
    mode: r,
    displayValues: be,
    onDisplayValuesChange: ce,
    direction: _,
    searchValue: Z,
    onSearch: We,
    autoClearSearchValue: v,
    onSearchSplit: dt,
    dropdownMatchSelectWidth: g,
    OptionList: vv,
    emptyOptions: !Te.length,
    activeValue: lt,
    activeDescendantId: "".concat(k, "_list_").concat(Fe)
  })));
});
process.env.NODE_ENV !== "production" && (gv.displayName = "Select");
var $s = gv;
$s.Option = xs;
$s.OptGroup = Es;
function Pr(e, t, n) {
  return ne({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: n
  });
}
const Yo = (e, t) => t || e, mv = () => {
  const [, e] = Nn(), n = new Xt(e.colorBgBase).toHsl().l < 0.5 ? {
    opacity: 0.65
  } : {};
  return /* @__PURE__ */ u.createElement("svg", {
    style: n,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ u.createElement("title", null, "empty image"), /* @__PURE__ */ u.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ u.createElement("g", {
    transform: "translate(24 31.67)"
  }, /* @__PURE__ */ u.createElement("ellipse", {
    fillOpacity: ".8",
    fill: "#F5F5F7",
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /* @__PURE__ */ u.createElement("path", {
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
    fill: "#AEB8C2"
  }), /* @__PURE__ */ u.createElement("path", {
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    fill: "url(#linearGradient-1)",
    transform: "translate(13.56)"
  }), /* @__PURE__ */ u.createElement("path", {
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
    fill: "#F5F5F7"
  }), /* @__PURE__ */ u.createElement("path", {
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
    fill: "#DCE0E6"
  })), /* @__PURE__ */ u.createElement("path", {
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
    fill: "#DCE0E6"
  }), /* @__PURE__ */ u.createElement("g", {
    transform: "translate(149.65 15.383)",
    fill: "#FFF"
  }, /* @__PURE__ */ u.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /* @__PURE__ */ u.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};
process.env.NODE_ENV !== "production" && (mv.displayName = "EmptyImage");
const hv = () => {
  const [, e] = Nn(), {
    colorFill: t,
    colorFillTertiary: n,
    colorFillQuaternary: r,
    colorBgContainer: o
  } = e, {
    borderColor: a,
    shadowColor: i,
    contentColor: l
  } = an(() => ({
    borderColor: new Xt(t).onBackground(o).toHexShortString(),
    shadowColor: new Xt(n).onBackground(o).toHexShortString(),
    contentColor: new Xt(r).onBackground(o).toHexShortString()
  }), [t, n, r, o]);
  return /* @__PURE__ */ u.createElement("svg", {
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ u.createElement("title", null, "Simple Empty"), /* @__PURE__ */ u.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ u.createElement("ellipse", {
    fill: i,
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /* @__PURE__ */ u.createElement("g", {
    fillRule: "nonzero",
    stroke: a
  }, /* @__PURE__ */ u.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /* @__PURE__ */ u.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    fill: l
  }))));
};
process.env.NODE_ENV !== "production" && (hv.displayName = "SimpleImage");
const UC = (e) => {
  const {
    componentCls: t,
    margin: n,
    marginXS: r,
    marginXL: o,
    fontSize: a,
    lineHeight: i
  } = e;
  return {
    [t]: {
      marginInline: r,
      fontSize: a,
      lineHeight: i,
      textAlign: "center",
      // 原来 &-image 没有父子结构，现在为了外层承担我们的 hashId，改成父子结构
      [`${t}-image`]: {
        height: e.emptyImgHeight,
        marginBottom: r,
        opacity: e.opacityImage,
        img: {
          height: "100%"
        },
        svg: {
          maxWidth: "100%",
          height: "100%",
          margin: "auto"
        }
      },
      [`${t}-description`]: {
        color: e.colorTextDescription
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的 hashId，改成父子结构
      [`${t}-footer`]: {
        marginTop: n
      },
      "&-normal": {
        marginBlock: o,
        color: e.colorTextDescription,
        [`${t}-description`]: {
          color: e.colorTextDescription
        },
        [`${t}-image`]: {
          height: e.emptyImgHeightMD
        }
      },
      "&-small": {
        marginBlock: r,
        color: e.colorTextDescription,
        [`${t}-image`]: {
          height: e.emptyImgHeightSM
        }
      }
    }
  };
}, GC = yn("Empty", (e) => {
  const {
    componentCls: t,
    controlHeightLG: n,
    calc: r
  } = e, o = Pt(e, {
    emptyImgCls: `${t}-img`,
    emptyImgHeight: r(n).mul(2.5).equal(),
    emptyImgHeightMD: n,
    emptyImgHeightSM: r(n).mul(0.875).equal()
  });
  return [UC(o)];
});
var qC = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const pv = /* @__PURE__ */ u.createElement(mv, null), bv = /* @__PURE__ */ u.createElement(hv, null), sr = (e) => {
  var {
    className: t,
    rootClassName: n,
    prefixCls: r,
    image: o = pv,
    description: a,
    children: i,
    imageStyle: l,
    style: s
  } = e, c = qC(e, ["className", "rootClassName", "prefixCls", "image", "description", "children", "imageStyle", "style"]);
  const {
    getPrefixCls: d,
    direction: f,
    empty: v
  } = u.useContext(Ct), h = d("empty", r), [b, m, g] = GC(h), [y] = Xa("Empty"), p = typeof a < "u" ? a : y == null ? void 0 : y.description, S = typeof p == "string" ? p : "empty";
  let E = null;
  return typeof o == "string" ? E = /* @__PURE__ */ u.createElement("img", {
    alt: S,
    src: o
  }) : E = o, b(/* @__PURE__ */ u.createElement("div", Object.assign({
    className: ne(m, g, h, v == null ? void 0 : v.className, {
      [`${h}-normal`]: o === bv,
      [`${h}-rtl`]: f === "rtl"
    }, t, n),
    style: Object.assign(Object.assign({}, v == null ? void 0 : v.style), s)
  }, c), /* @__PURE__ */ u.createElement("div", {
    className: `${h}-image`,
    style: l
  }, E), p && /* @__PURE__ */ u.createElement("div", {
    className: `${h}-description`
  }, p), i && /* @__PURE__ */ u.createElement("div", {
    className: `${h}-footer`
  }, i)));
};
sr.PRESENTED_IMAGE_DEFAULT = pv;
sr.PRESENTED_IMAGE_SIMPLE = bv;
process.env.NODE_ENV !== "production" && (sr.displayName = "Empty");
const KC = (e) => {
  const {
    componentName: t
  } = e, {
    getPrefixCls: n
  } = Dt(Ct), r = n("empty");
  switch (t) {
    case "Table":
    case "List":
      return /* @__PURE__ */ B.createElement(sr, {
        image: sr.PRESENTED_IMAGE_SIMPLE
      });
    case "Select":
    case "TreeSelect":
    case "Cascader":
    case "Transfer":
    case "Mentions":
      return /* @__PURE__ */ B.createElement(sr, {
        image: sr.PRESENTED_IMAGE_SIMPLE,
        className: `${r}-small`
      });
    case "Table.filter":
      return null;
    default:
      return /* @__PURE__ */ B.createElement(sr, null);
  }
}, Ja = function(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
  var r, o;
  const {
    variant: a,
    [e]: i
  } = Dt(Ct), l = Dt(qy), s = i == null ? void 0 : i.variant;
  let c;
  typeof t < "u" ? c = t : n === !1 ? c = "borderless" : c = (o = (r = l ?? s) !== null && r !== void 0 ? r : a) !== null && o !== void 0 ? o : "outlined";
  const d = cp.includes(c);
  return [c, d];
}, XC = (e) => {
  const n = {
    overflow: {
      adjustX: !0,
      adjustY: !0,
      shiftY: !0
    },
    htmlRegion: e === "scroll" ? "scroll" : "visible",
    dynamicInset: !0
  };
  return {
    bottomLeft: Object.assign(Object.assign({}, n), {
      points: ["tl", "bl"],
      offset: [0, 4]
    }),
    bottomRight: Object.assign(Object.assign({}, n), {
      points: ["tr", "br"],
      offset: [0, 4]
    }),
    topLeft: Object.assign(Object.assign({}, n), {
      points: ["bl", "tl"],
      offset: [0, -4]
    }),
    topRight: Object.assign(Object.assign({}, n), {
      points: ["br", "tr"],
      offset: [0, -4]
    })
  };
};
function YC(e, t) {
  return e || XC(t);
}
const Ru = (e) => {
  const {
    optionHeight: t,
    optionFontSize: n,
    optionLineHeight: r,
    optionPadding: o
  } = e;
  return {
    position: "relative",
    display: "block",
    minHeight: t,
    padding: o,
    color: e.colorText,
    fontWeight: "normal",
    fontSize: n,
    lineHeight: r,
    boxSizing: "border-box"
  };
}, QC = (e) => {
  const {
    antCls: t,
    componentCls: n
  } = e, r = `${n}-item`, o = `&${t}-slide-up-enter${t}-slide-up-enter-active`, a = `&${t}-slide-up-appear${t}-slide-up-appear-active`, i = `&${t}-slide-up-leave${t}-slide-up-leave-active`, l = `${n}-dropdown-placement-`;
  return [
    {
      [`${n}-dropdown`]: Object.assign(Object.assign({}, un(e)), {
        position: "absolute",
        top: -9999,
        zIndex: e.zIndexPopup,
        boxSizing: "border-box",
        padding: e.paddingXXS,
        overflow: "hidden",
        fontSize: e.fontSize,
        // Fix select render lag of long text in chrome
        // https://github.com/ant-design/ant-design/issues/11456
        // https://github.com/ant-design/ant-design/issues/11843
        fontVariant: "initial",
        backgroundColor: e.colorBgElevated,
        borderRadius: e.borderRadiusLG,
        outline: "none",
        boxShadow: e.boxShadowSecondary,
        [`
          ${o}${l}bottomLeft,
          ${a}${l}bottomLeft
        `]: {
          animationName: kf
        },
        [`
          ${o}${l}topLeft,
          ${a}${l}topLeft,
          ${o}${l}topRight,
          ${a}${l}topRight
        `]: {
          animationName: Gf
        },
        [`${i}${l}bottomLeft`]: {
          animationName: Uf
        },
        [`
          ${i}${l}topLeft,
          ${i}${l}topRight
        `]: {
          animationName: qf
        },
        "&-hidden": {
          display: "none"
        },
        [r]: Object.assign(Object.assign({}, Ru(e)), {
          cursor: "pointer",
          transition: `background ${e.motionDurationSlow} ease`,
          borderRadius: e.borderRadiusSM,
          // =========== Group ============
          "&-group": {
            color: e.colorTextDescription,
            fontSize: e.fontSizeSM,
            cursor: "default"
          },
          // =========== Option ===========
          "&-option": {
            display: "flex",
            "&-content": Object.assign({
              flex: "auto"
            }, Ma),
            "&-state": {
              flex: "none",
              display: "flex",
              alignItems: "center"
            },
            [`&-active:not(${r}-option-disabled)`]: {
              backgroundColor: e.optionActiveBg
            },
            [`&-selected:not(${r}-option-disabled)`]: {
              color: e.optionSelectedColor,
              fontWeight: e.optionSelectedFontWeight,
              backgroundColor: e.optionSelectedBg,
              [`${r}-option-state`]: {
                color: e.colorPrimary
              },
              [`&:has(+ ${r}-option-selected:not(${r}-option-disabled))`]: {
                borderEndStartRadius: 0,
                borderEndEndRadius: 0,
                [`& + ${r}-option-selected:not(${r}-option-disabled)`]: {
                  borderStartStartRadius: 0,
                  borderStartEndRadius: 0
                }
              }
            },
            "&-disabled": {
              [`&${r}-option-selected`]: {
                backgroundColor: e.colorBgContainerDisabled
              },
              color: e.colorTextDisabled,
              cursor: "not-allowed"
            },
            "&-grouped": {
              paddingInlineStart: e.calc(e.controlPaddingHorizontal).mul(2).equal()
            }
          },
          "&-empty": Object.assign(Object.assign({}, Ru(e)), {
            color: e.colorTextDisabled
          })
        }),
        // =========================== RTL ===========================
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Follow code may reuse in other components
    iu(e, "slide-up"),
    iu(e, "slide-down"),
    au(e, "move-up"),
    au(e, "move-down")
  ];
}, ZC = (e) => {
  const {
    multipleSelectItemHeight: t,
    paddingXXS: n,
    lineWidth: r,
    INTERNAL_FIXED_ITEM_MARGIN: o
  } = e, a = e.max(e.calc(n).sub(r).equal(), 0), i = e.max(e.calc(a).sub(o).equal(), 0);
  return {
    basePadding: a,
    containerPadding: i,
    itemHeight: oe(t),
    itemLineHeight: oe(e.calc(t).sub(e.calc(e.lineWidth).mul(2)).equal())
  };
}, JC = (e) => {
  const {
    multipleSelectItemHeight: t,
    selectHeight: n,
    lineWidth: r
  } = e;
  return e.calc(n).sub(t).div(2).sub(r).equal();
}, eE = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    borderRadiusSM: r,
    motionDurationSlow: o,
    paddingXS: a,
    multipleItemColorDisabled: i,
    multipleItemBorderColorDisabled: l,
    colorIcon: s,
    colorIconHover: c,
    INTERNAL_FIXED_ITEM_MARGIN: d
  } = e;
  return {
    /**
     * Do not merge `height` & `line-height` under style with `selection` & `search`, since chrome
     * may update to redesign with its align logic.
     */
    // =========================== Overflow ===========================
    [`${t}-selection-overflow`]: {
      position: "relative",
      display: "flex",
      flex: "auto",
      flexWrap: "wrap",
      maxWidth: "100%",
      "&-item": {
        flex: "none",
        alignSelf: "center",
        maxWidth: "100%",
        display: "inline-flex"
      },
      // ======================== Selections ==========================
      [`${t}-selection-item`]: {
        display: "flex",
        alignSelf: "center",
        flex: "none",
        boxSizing: "border-box",
        maxWidth: "100%",
        marginBlock: d,
        borderRadius: r,
        cursor: "default",
        transition: `font-size ${o}, line-height ${o}, height ${o}`,
        marginInlineEnd: e.calc(d).mul(2).equal(),
        paddingInlineStart: a,
        paddingInlineEnd: e.calc(a).div(2).equal(),
        [`${t}-disabled&`]: {
          color: i,
          borderColor: l,
          cursor: "not-allowed"
        },
        // It's ok not to do this, but 24px makes bottom narrow in view should adjust
        "&-content": {
          display: "inline-block",
          marginInlineEnd: e.calc(a).div(2).equal(),
          overflow: "hidden",
          whiteSpace: "pre",
          // fix whitespace wrapping. custom tags display all whitespace within.
          textOverflow: "ellipsis"
        },
        "&-remove": Object.assign(Object.assign({}, Wo()), {
          display: "inline-flex",
          alignItems: "center",
          color: s,
          fontWeight: "bold",
          fontSize: 10,
          lineHeight: "inherit",
          cursor: "pointer",
          [`> ${n}`]: {
            verticalAlign: "-0.2em"
          },
          "&:hover": {
            color: c
          }
        })
      }
    }
  };
}, tE = (e, t) => {
  const {
    componentCls: n,
    INTERNAL_FIXED_ITEM_MARGIN: r
  } = e, o = `${n}-selection-overflow`, a = e.multipleSelectItemHeight, i = JC(e), l = t ? `${n}-${t}` : "", s = ZC(e);
  return {
    [`${n}-multiple${l}`]: Object.assign(Object.assign({}, eE(e)), {
      // ========================= Selector =========================
      [`${n}-selector`]: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        height: "100%",
        // Multiple is little different that horizontal is follow the vertical
        paddingInline: s.basePadding,
        paddingBlock: s.containerPadding,
        borderRadius: e.borderRadius,
        [`${n}-disabled&`]: {
          background: e.multipleSelectorBgDisabled,
          cursor: "not-allowed"
        },
        "&:after": {
          display: "inline-block",
          width: 0,
          margin: `${oe(r)} 0`,
          lineHeight: oe(a),
          visibility: "hidden",
          content: '"\\a0"'
        }
      },
      // ======================== Selections ========================
      [`${n}-selection-item`]: {
        height: s.itemHeight,
        lineHeight: oe(s.itemLineHeight)
      },
      // ========================== Input ==========================
      [`${o}-item + ${o}-item`]: {
        [`${n}-selection-search`]: {
          marginInlineStart: 0
        }
      },
      // https://github.com/ant-design/ant-design/issues/44754
      [`${o}-item-suffix`]: {
        height: "100%"
      },
      [`${n}-selection-search`]: {
        display: "inline-flex",
        position: "relative",
        maxWidth: "100%",
        marginInlineStart: e.calc(e.inputPaddingHorizontalBase).sub(i).equal(),
        "\n          &-input,\n          &-mirror\n        ": {
          height: a,
          fontFamily: e.fontFamily,
          lineHeight: oe(a),
          transition: `all ${e.motionDurationSlow}`
        },
        "&-input": {
          width: "100%",
          minWidth: 4.1
          // fix search cursor missing
        },
        "&-mirror": {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          insetInlineEnd: "auto",
          zIndex: 999,
          whiteSpace: "pre",
          // fix whitespace wrapping caused width calculation bug
          visibility: "hidden"
        }
      },
      // ======================= Placeholder =======================
      [`${n}-selection-placeholder`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: e.inputPaddingHorizontalBase,
        insetInlineEnd: e.inputPaddingHorizontalBase,
        transform: "translateY(-50%)",
        transition: `all ${e.motionDurationSlow}`
      }
    })
  };
};
function _i(e, t) {
  const {
    componentCls: n
  } = e, r = t ? `${n}-${t}` : "", o = {
    [`${n}-multiple${r}`]: {
      fontSize: e.fontSize,
      // ========================= Selector =========================
      [`${n}-selector`]: {
        [`${n}-show-search&`]: {
          cursor: "text"
        }
      },
      [`
        &${n}-show-arrow ${n}-selector,
        &${n}-allow-clear ${n}-selector
      `]: {
        paddingInlineEnd: e.calc(e.fontSizeIcon).add(e.controlPaddingHorizontal).equal()
      }
    }
  };
  return [tE(e, t), o];
}
const nE = (e) => {
  const {
    componentCls: t
  } = e, n = Pt(e, {
    selectHeight: e.controlHeightSM,
    multipleSelectItemHeight: e.multipleItemHeightSM,
    borderRadius: e.borderRadiusSM,
    borderRadiusSM: e.borderRadiusXS
  }), r = Pt(e, {
    fontSize: e.fontSizeLG,
    selectHeight: e.controlHeightLG,
    multipleSelectItemHeight: e.multipleItemHeightLG,
    borderRadius: e.borderRadiusLG,
    borderRadiusSM: e.borderRadius
  });
  return [
    _i(e),
    // ======================== Small ========================
    _i(n, "sm"),
    // Padding
    {
      [`${t}-multiple${t}-sm`]: {
        [`${t}-selection-placeholder`]: {
          insetInline: e.calc(e.controlPaddingHorizontalSM).sub(e.lineWidth).equal()
        },
        // https://github.com/ant-design/ant-design/issues/29559
        [`${t}-selection-search`]: {
          marginInlineStart: 2
          // Magic Number
        }
      }
    },
    // ======================== Large ========================
    _i(r, "lg")
  ];
};
function Ti(e, t) {
  const {
    componentCls: n,
    inputPaddingHorizontalBase: r,
    borderRadius: o
  } = e, a = e.calc(e.controlHeight).sub(e.calc(e.lineWidth).mul(2)).equal(), i = t ? `${n}-${t}` : "";
  return {
    [`${n}-single${i}`]: {
      fontSize: e.fontSize,
      height: e.controlHeight,
      // ========================= Selector =========================
      [`${n}-selector`]: Object.assign(Object.assign({}, un(e, !0)), {
        display: "flex",
        borderRadius: o,
        [`${n}-selection-search`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: r,
          insetInlineEnd: r,
          bottom: 0,
          "&-input": {
            width: "100%",
            WebkitAppearance: "textfield"
          }
        },
        [`
          ${n}-selection-item,
          ${n}-selection-placeholder
        `]: {
          padding: 0,
          lineHeight: oe(a),
          transition: `all ${e.motionDurationSlow}, visibility 0s`,
          alignSelf: "center"
        },
        [`${n}-selection-placeholder`]: {
          transition: "none",
          pointerEvents: "none"
        },
        // For common baseline align
        [[
          "&:after",
          /* For '' value baseline align */
          `${n}-selection-item:empty:after`,
          /* For undefined value baseline align */
          `${n}-selection-placeholder:empty:after`
        ].join(",")]: {
          display: "inline-block",
          width: 0,
          visibility: "hidden",
          content: '"\\a0"'
        }
      }),
      [`
        &${n}-show-arrow ${n}-selection-item,
        &${n}-show-arrow ${n}-selection-placeholder
      `]: {
        paddingInlineEnd: e.showArrowPaddingInlineEnd
      },
      // Opacity selection if open
      [`&${n}-open ${n}-selection-item`]: {
        color: e.colorTextPlaceholder
      },
      // ========================== Input ==========================
      // We only change the style of non-customize input which is only support by `combobox` mode.
      // Not customize
      [`&:not(${n}-customize-input)`]: {
        [`${n}-selector`]: {
          width: "100%",
          height: "100%",
          padding: `0 ${oe(r)}`,
          [`${n}-selection-search-input`]: {
            height: a
          },
          "&:after": {
            lineHeight: oe(a)
          }
        }
      },
      [`&${n}-customize-input`]: {
        [`${n}-selector`]: {
          "&:after": {
            display: "none"
          },
          [`${n}-selection-search`]: {
            position: "static",
            width: "100%"
          },
          [`${n}-selection-placeholder`]: {
            position: "absolute",
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: `0 ${oe(r)}`,
            "&:after": {
              display: "none"
            }
          }
        }
      }
    }
  };
}
function rE(e) {
  const {
    componentCls: t
  } = e, n = e.calc(e.controlPaddingHorizontalSM).sub(e.lineWidth).equal();
  return [
    Ti(e),
    // ======================== Small ========================
    // Shared
    Ti(Pt(e, {
      controlHeight: e.controlHeightSM,
      borderRadius: e.borderRadiusSM
    }), "sm"),
    // padding
    {
      [`${t}-single${t}-sm`]: {
        [`&:not(${t}-customize-input)`]: {
          [`${t}-selection-search`]: {
            insetInlineStart: n,
            insetInlineEnd: n
          },
          [`${t}-selector`]: {
            padding: `0 ${oe(n)}`
          },
          // With arrow should provides `padding-right` to show the arrow
          [`&${t}-show-arrow ${t}-selection-search`]: {
            insetInlineEnd: e.calc(n).add(e.calc(e.fontSize).mul(1.5)).equal()
          },
          [`
            &${t}-show-arrow ${t}-selection-item,
            &${t}-show-arrow ${t}-selection-placeholder
          `]: {
            paddingInlineEnd: e.calc(e.fontSize).mul(1.5).equal()
          }
        }
      }
    },
    // ======================== Large ========================
    // Shared
    Ti(Pt(e, {
      controlHeight: e.singleItemHeightLG,
      fontSize: e.fontSizeLG,
      borderRadius: e.borderRadiusLG
    }), "lg")
  ];
}
const oE = (e) => {
  const {
    fontSize: t,
    lineHeight: n,
    lineWidth: r,
    controlHeight: o,
    controlHeightSM: a,
    controlHeightLG: i,
    paddingXXS: l,
    controlPaddingHorizontal: s,
    zIndexPopupBase: c,
    colorText: d,
    fontWeightStrong: f,
    controlItemBgActive: v,
    controlItemBgHover: h,
    colorBgContainer: b,
    colorFillSecondary: m,
    colorBgContainerDisabled: g,
    colorTextDisabled: y
  } = e, p = l * 2, S = r * 2, E = Math.min(o - p, o - S), C = Math.min(a - p, a - S), x = Math.min(i - p, i - S);
  return {
    INTERNAL_FIXED_ITEM_MARGIN: Math.floor(l / 2),
    zIndexPopup: c + 50,
    optionSelectedColor: d,
    optionSelectedFontWeight: f,
    optionSelectedBg: v,
    optionActiveBg: h,
    optionPadding: `${(o - t * n) / 2}px ${s}px`,
    optionFontSize: t,
    optionLineHeight: n,
    optionHeight: o,
    selectorBg: b,
    clearBg: b,
    singleItemHeightLG: i,
    multipleItemBg: m,
    multipleItemBorderColor: "transparent",
    multipleItemHeight: E,
    multipleItemHeightSM: C,
    multipleItemHeightLG: x,
    multipleSelectorBgDisabled: g,
    multipleItemColorDisabled: y,
    multipleItemBorderColorDisabled: "transparent",
    showArrowPaddingInlineEnd: Math.ceil(e.fontSize * 1.25)
  };
}, yv = (e, t) => {
  const {
    componentCls: n,
    antCls: r,
    controlOutlineWidth: o
  } = e;
  return {
    [`&:not(${n}-customize-input) ${n}-selector`]: {
      border: `${oe(e.lineWidth)} ${e.lineType} ${t.borderColor}`,
      background: e.selectorBg
    },
    [`&:not(${n}-disabled):not(${n}-customize-input):not(${r}-pagination-size-changer)`]: {
      [`&:hover ${n}-selector`]: {
        borderColor: t.hoverBorderHover
      },
      [`${n}-focused& ${n}-selector`]: {
        borderColor: t.activeBorderColor,
        boxShadow: `0 0 0 ${oe(o)} ${t.activeShadowColor}`,
        outline: 0
      }
    }
  };
}, Iu = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}`]: Object.assign({}, yv(e, t))
}), aE = (e) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign({}, yv(e, {
    borderColor: e.colorBorder,
    hoverBorderHover: e.colorPrimaryHover,
    activeBorderColor: e.colorPrimary,
    activeShadowColor: e.controlOutline
  })), Iu(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderHover: e.colorErrorHover,
    activeBorderColor: e.colorError,
    activeShadowColor: e.colorErrorOutline
  })), Iu(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderHover: e.colorWarningHover,
    activeBorderColor: e.colorWarning,
    activeShadowColor: e.colorWarningOutline
  })), {
    [`&${e.componentCls}-disabled`]: {
      [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]: {
        background: e.colorBgContainerDisabled,
        color: e.colorTextDisabled
      }
    },
    [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
      background: e.multipleItemBg,
      border: `${oe(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`
    }
  })
}), Sv = (e, t) => {
  const {
    componentCls: n,
    antCls: r
  } = e;
  return {
    [`&:not(${n}-customize-input) ${n}-selector`]: {
      background: t.bg,
      border: `${oe(e.lineWidth)} ${e.lineType} transparent`,
      color: t.color
    },
    [`&:not(${n}-disabled):not(${n}-customize-input):not(${r}-pagination-size-changer)`]: {
      [`&:hover ${n}-selector`]: {
        background: t.hoverBg
      },
      [`${n}-focused& ${n}-selector`]: {
        background: e.selectorBg,
        borderColor: t.activeBorderColor,
        outline: 0
      }
    }
  };
}, Pu = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}`]: Object.assign({}, Sv(e, t))
}), iE = (e) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign({}, Sv(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.colorPrimary,
    color: e.colorText
  })), Pu(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    color: e.colorError
  })), Pu(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    color: e.colorWarning
  })), {
    [`&${e.componentCls}-disabled`]: {
      [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]: {
        borderColor: e.colorBorder,
        background: e.colorBgContainerDisabled,
        color: e.colorTextDisabled
      }
    },
    [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
      background: e.colorBgContainer,
      border: `${oe(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
    }
  })
}), lE = (e) => ({
  "&-borderless": {
    [`${e.componentCls}-selector`]: {
      background: "transparent",
      borderColor: "transparent"
    },
    [`&${e.componentCls}-disabled`]: {
      [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]: {
        color: e.colorTextDisabled
      }
    },
    [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
      background: e.multipleItemBg,
      border: `${oe(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`
    },
    // Status
    [`&${e.componentCls}-status-error`]: {
      [`${e.componentCls}-selection-item`]: {
        color: e.colorError
      }
    },
    [`&${e.componentCls}-status-warning`]: {
      [`${e.componentCls}-selection-item`]: {
        color: e.colorWarning
      }
    }
  }
}), sE = (e) => ({
  [e.componentCls]: Object.assign(Object.assign(Object.assign({}, aE(e)), iE(e)), lE(e))
}), cE = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    position: "relative",
    transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
    input: {
      cursor: "pointer"
    },
    [`${t}-show-search&`]: {
      cursor: "text",
      input: {
        cursor: "auto",
        color: "inherit",
        height: "100%"
      }
    },
    [`${t}-disabled&`]: {
      cursor: "not-allowed",
      input: {
        cursor: "not-allowed"
      }
    }
  };
}, uE = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-selection-search-input`]: {
      margin: 0,
      padding: 0,
      background: "transparent",
      border: "none",
      outline: "none",
      appearance: "none",
      fontFamily: "inherit",
      "&::-webkit-search-cancel-button": {
        display: "none",
        "-webkit-appearance": "none"
      }
    }
  };
}, dE = (e) => {
  const {
    antCls: t,
    componentCls: n,
    inputPaddingHorizontalBase: r,
    iconCls: o
  } = e;
  return {
    [n]: Object.assign(Object.assign({}, un(e)), {
      position: "relative",
      display: "inline-block",
      cursor: "pointer",
      [`&:not(${n}-customize-input) ${n}-selector`]: Object.assign(Object.assign({}, cE(e)), uE(e)),
      // ======================== Selection ========================
      [`${n}-selection-item`]: Object.assign(Object.assign({
        flex: 1,
        fontWeight: "normal",
        position: "relative",
        userSelect: "none"
      }, Ma), {
        // https://github.com/ant-design/ant-design/issues/40421
        [`> ${t}-typography`]: {
          display: "inline"
        }
      }),
      // ======================= Placeholder =======================
      [`${n}-selection-placeholder`]: Object.assign(Object.assign({}, Ma), {
        flex: 1,
        color: e.colorTextPlaceholder,
        pointerEvents: "none"
      }),
      // ========================== Arrow ==========================
      [`${n}-arrow`]: Object.assign(Object.assign({}, Wo()), {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: r,
        height: e.fontSizeIcon,
        marginTop: e.calc(e.fontSizeIcon).mul(-1).div(2).equal(),
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        lineHeight: 1,
        textAlign: "center",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        transition: `opacity ${e.motionDurationSlow} ease`,
        [o]: {
          verticalAlign: "top",
          transition: `transform ${e.motionDurationSlow}`,
          "> svg": {
            verticalAlign: "top"
          },
          [`&:not(${n}-suffix)`]: {
            pointerEvents: "auto"
          }
        },
        [`${n}-disabled &`]: {
          cursor: "not-allowed"
        },
        "> *:not(:last-child)": {
          marginInlineEnd: 8
          // FIXME: magic
        }
      }),
      // ========================== Clear ==========================
      [`${n}-clear`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: r,
        zIndex: 1,
        display: "inline-block",
        width: e.fontSizeIcon,
        height: e.fontSizeIcon,
        marginTop: e.calc(e.fontSizeIcon).mul(-1).div(2).equal(),
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        fontStyle: "normal",
        lineHeight: 1,
        textAlign: "center",
        textTransform: "none",
        cursor: "pointer",
        opacity: 0,
        transition: `color ${e.motionDurationMid} ease, opacity ${e.motionDurationSlow} ease`,
        textRendering: "auto",
        "&:before": {
          display: "block"
        },
        "&:hover": {
          color: e.colorTextTertiary
        }
      },
      [`&:hover ${n}-clear`]: {
        opacity: 1,
        background: e.colorBgBase
      }
    }),
    // ========================= Feedback ==========================
    [`${n}-has-feedback`]: {
      [`${n}-clear`]: {
        insetInlineEnd: e.calc(r).add(e.fontSize).add(e.paddingXS).equal()
      }
    }
  };
}, fE = (e) => {
  const {
    componentCls: t
  } = e;
  return [
    {
      [t]: {
        // ==================== In Form ====================
        [`&${t}-in-form-item`]: {
          width: "100%"
        }
      }
    },
    // =====================================================
    // ==                       LTR                       ==
    // =====================================================
    // Base
    dE(e),
    // Single
    rE(e),
    // Multiple
    nE(e),
    // Dropdown
    QC(e),
    // =====================================================
    // ==                       RTL                       ==
    // =====================================================
    {
      [`${t}-rtl`]: {
        direction: "rtl"
      }
    },
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Uo(e, {
      borderElCls: `${t}-selector`,
      focusElCls: `${t}-focused`
    })
  ];
}, vE = yn("Select", (e, t) => {
  let {
    rootPrefixCls: n
  } = t;
  const r = Pt(e, {
    rootPrefixCls: n,
    inputPaddingHorizontalBase: e.calc(e.paddingSM).sub(1).equal(),
    multipleSelectItemHeight: e.multipleItemHeight,
    selectHeight: e.controlHeight
  });
  return [fE(r), sE(r)];
}, oE, {
  unitless: {
    optionLineHeight: !0,
    optionSelectedFontWeight: !0
  }
});
var gE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" }, mE = function(t, n) {
  return /* @__PURE__ */ u.createElement(Sn, ke({}, t, {
    ref: n,
    icon: gE
  }));
}, Cv = /* @__PURE__ */ u.forwardRef(mE);
process.env.NODE_ENV !== "production" && (Cv.displayName = "CheckOutlined");
var hE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" }, pE = function(t, n) {
  return /* @__PURE__ */ u.createElement(Sn, ke({}, t, {
    ref: n,
    icon: hE
  }));
}, Os = /* @__PURE__ */ u.forwardRef(pE);
process.env.NODE_ENV !== "production" && (Os.displayName = "DownOutlined");
var bE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" }, yE = function(t, n) {
  return /* @__PURE__ */ u.createElement(Sn, ke({}, t, {
    ref: n,
    icon: bE
  }));
}, Rs = /* @__PURE__ */ u.forwardRef(yE);
process.env.NODE_ENV !== "production" && (Rs.displayName = "SearchOutlined");
function SE(e) {
  let {
    suffixIcon: t,
    clearIcon: n,
    menuItemSelectedIcon: r,
    removeIcon: o,
    loading: a,
    multiple: i,
    hasFeedback: l,
    prefixCls: s,
    showSuffixIcon: c,
    feedbackIcon: d,
    showArrow: f,
    componentName: v
  } = e;
  process.env.NODE_ENV !== "production" && zt(v).deprecated(!n, "clearIcon", "allowClear={{ clearIcon: React.ReactNode }}");
  const h = n ?? /* @__PURE__ */ u.createElement(cs, null), b = (p) => t === null && !l && !f ? null : /* @__PURE__ */ u.createElement(u.Fragment, null, c !== !1 && p, l && d);
  let m = null;
  if (t !== void 0)
    m = b(t);
  else if (a)
    m = b(/* @__PURE__ */ u.createElement(us, {
      spin: !0
    }));
  else {
    const p = `${s}-suffix`;
    m = (S) => {
      let {
        open: E,
        showSearch: C
      } = S;
      return b(E && C ? /* @__PURE__ */ u.createElement(Rs, {
        className: p
      }) : /* @__PURE__ */ u.createElement(Os, {
        className: p
      }));
    };
  }
  let g = null;
  r !== void 0 ? g = r : i ? g = /* @__PURE__ */ u.createElement(Cv, null) : g = null;
  let y = null;
  return o !== void 0 ? y = o : y = /* @__PURE__ */ u.createElement(Ef, null), {
    clearIcon: h,
    suffixIcon: m,
    itemIcon: g,
    removeIcon: y
  };
}
function CE(e, t) {
  return t !== void 0 ? t : e !== null;
}
var EE = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Ev = "SECRET_COMBOBOX_MODE_DO_NOT_USE", xv = (e, t) => {
  var n;
  const {
    prefixCls: r,
    bordered: o,
    className: a,
    rootClassName: i,
    getPopupContainer: l,
    popupClassName: s,
    dropdownClassName: c,
    listHeight: d = 256,
    placement: f,
    listItemHeight: v,
    size: h,
    disabled: b,
    notFoundContent: m,
    status: g,
    builtinPlacements: y,
    dropdownMatchSelectWidth: p,
    popupMatchSelectWidth: S,
    direction: E,
    style: C,
    allowClear: x,
    variant: w,
    dropdownStyle: $,
    transitionName: O,
    tagRender: R,
    maxCount: _
  } = e, I = EE(e, ["prefixCls", "bordered", "className", "rootClassName", "getPopupContainer", "popupClassName", "dropdownClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "builtinPlacements", "dropdownMatchSelectWidth", "popupMatchSelectWidth", "direction", "style", "allowClear", "variant", "dropdownStyle", "transitionName", "tagRender", "maxCount"]), {
    getPopupContainer: F,
    getPrefixCls: M,
    renderEmpty: V,
    direction: N,
    virtual: P,
    popupMatchSelectWidth: T,
    popupOverflow: j,
    select: H
  } = u.useContext(Ct), [, L] = Nn(), q = v ?? (L == null ? void 0 : L.controlHeight), k = M("select", r), U = M(), G = E ?? N, {
    compactSize: le,
    compactItemClassnames: Y
  } = lo(k, G), [Q, pe] = Ja("select", w, o), Z = io(k), [X, te, fe] = vE(k, Z), W = u.useMemo(() => {
    const {
      mode: et
    } = e;
    if (et !== "combobox")
      return et === Ev ? "combobox" : et;
  }, [e.mode]), ae = W === "multiple" || W === "tags", ie = CE(e.suffixIcon, e.showArrow), ue = (n = S ?? p) !== null && n !== void 0 ? n : T, {
    status: ve,
    hasFeedback: $e,
    isFormItemInput: Re,
    feedbackIcon: Se
  } = u.useContext(Pn), _e = Yo(ve, g);
  let J;
  m !== void 0 ? J = m : W === "combobox" ? J = null : J = (V == null ? void 0 : V("Select")) || /* @__PURE__ */ u.createElement(KC, {
    componentName: "Select"
  });
  const {
    suffixIcon: re,
    itemIcon: ge,
    removeIcon: be,
    clearIcon: Ie
  } = SE(Object.assign(Object.assign({}, I), {
    multiple: ae,
    hasFeedback: $e,
    feedbackIcon: Se,
    showSuffixIcon: ie,
    prefixCls: k,
    componentName: "Select"
  })), Me = x === !0 ? {
    clearIcon: Ie
  } : x, Ue = gr(I, ["suffixIcon", "itemIcon"]), rt = ne(s || c, {
    [`${k}-dropdown-${G}`]: G === "rtl"
  }, i, fe, Z, te), ct = kn((et) => {
    var lt;
    return (lt = h ?? le) !== null && lt !== void 0 ? lt : et;
  }), ft = u.useContext(Ln), De = b ?? ft, Te = ne({
    [`${k}-lg`]: ct === "large",
    [`${k}-sm`]: ct === "small",
    [`${k}-rtl`]: G === "rtl",
    [`${k}-${Q}`]: pe,
    [`${k}-in-form-item`]: Re
  }, Pr(k, _e, $e), Y, H == null ? void 0 : H.className, a, i, fe, Z, te), Ye = u.useMemo(() => f !== void 0 ? f : G === "rtl" ? "bottomRight" : "bottomLeft", [f, G]);
  if (process.env.NODE_ENV !== "production") {
    const et = zt("Select");
    et.deprecated(!c, "dropdownClassName", "popupClassName"), et.deprecated(p === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), process.env.NODE_ENV !== "production" && et(!("showArrow" in e), "deprecated", "`showArrow` is deprecated which will be removed in next major version. It will be a default behavior, you can hide it by setting `suffixIcon` to null."), et.deprecated(!("bordered" in e), "bordered", "variant"), process.env.NODE_ENV !== "production" && et(!(typeof _ < "u" && !ae), "usage", "`maxCount` only works with mode `multiple` or `tags`");
  }
  const [Je] = $f("SelectLike", $ == null ? void 0 : $.zIndex);
  return X(/* @__PURE__ */ u.createElement($s, Object.assign({
    ref: t,
    virtual: P,
    showSearch: H == null ? void 0 : H.showSearch
  }, Ue, {
    style: Object.assign(Object.assign({}, H == null ? void 0 : H.style), C),
    dropdownMatchSelectWidth: ue,
    transitionName: fs(U, "slide-up", O),
    builtinPlacements: YC(y, j),
    listHeight: d,
    listItemHeight: q,
    mode: W,
    prefixCls: k,
    placement: Ye,
    direction: G,
    suffixIcon: re,
    menuItemSelectedIcon: ge,
    removeIcon: be,
    allowClear: Me,
    notFoundContent: J,
    className: Te,
    getPopupContainer: l || F,
    dropdownClassName: rt,
    disabled: De,
    dropdownStyle: Object.assign(Object.assign({}, $), {
      zIndex: Je
    }),
    maxCount: ae ? _ : void 0,
    tagRender: ae ? R : void 0
  })));
};
process.env.NODE_ENV !== "production" && (xv.displayName = "Select");
const _r = /* @__PURE__ */ u.forwardRef(xv), xE = Xf(_r);
_r.SECRET_COMBOBOX_MODE_DO_NOT_USE = Ev;
_r.Option = xs;
_r.OptGroup = Es;
_r._InternalPanelDoNotUseOrYouWillBeFired = xE;
process.env.NODE_ENV !== "production" && (_r.displayName = "Select");
const La = (e) => e ? typeof e == "function" ? e() : e : null;
function Is(e) {
  var t = e.children, n = e.prefixCls, r = e.id, o = e.overlayInnerStyle, a = e.className, i = e.style;
  return /* @__PURE__ */ u.createElement("div", {
    className: ne("".concat(n, "-content"), a),
    style: i
  }, /* @__PURE__ */ u.createElement("div", {
    className: "".concat(n, "-inner"),
    id: r,
    role: "tooltip",
    style: o
  }, typeof t == "function" ? t() : t));
}
var zr = {
  shiftX: 64,
  adjustY: 1
}, Vr = {
  adjustX: 1,
  shiftY: !0
}, On = [0, 0], wE = {
  left: {
    points: ["cr", "cl"],
    overflow: Vr,
    offset: [-4, 0],
    targetOffset: On
  },
  right: {
    points: ["cl", "cr"],
    overflow: Vr,
    offset: [4, 0],
    targetOffset: On
  },
  top: {
    points: ["bc", "tc"],
    overflow: zr,
    offset: [0, -4],
    targetOffset: On
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: zr,
    offset: [0, 4],
    targetOffset: On
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: zr,
    offset: [0, -4],
    targetOffset: On
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: Vr,
    offset: [-4, 0],
    targetOffset: On
  },
  topRight: {
    points: ["br", "tr"],
    overflow: zr,
    offset: [0, -4],
    targetOffset: On
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: Vr,
    offset: [4, 0],
    targetOffset: On
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: zr,
    offset: [0, 4],
    targetOffset: On
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: Vr,
    offset: [4, 0],
    targetOffset: On
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: zr,
    offset: [0, 4],
    targetOffset: On
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: Vr,
    offset: [-4, 0],
    targetOffset: On
  }
}, $E = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"], OE = function(t, n) {
  var r = t.overlayClassName, o = t.trigger, a = o === void 0 ? ["hover"] : o, i = t.mouseEnterDelay, l = i === void 0 ? 0 : i, s = t.mouseLeaveDelay, c = s === void 0 ? 0.1 : s, d = t.overlayStyle, f = t.prefixCls, v = f === void 0 ? "rc-tooltip" : f, h = t.children, b = t.onVisibleChange, m = t.afterVisibleChange, g = t.transitionName, y = t.animation, p = t.motion, S = t.placement, E = S === void 0 ? "right" : S, C = t.align, x = C === void 0 ? {} : C, w = t.destroyTooltipOnHide, $ = w === void 0 ? !1 : w, O = t.defaultVisible, R = t.getTooltipContainer, _ = t.overlayInnerStyle;
  t.arrowContent;
  var I = t.overlay, F = t.id, M = t.showArrow, V = M === void 0 ? !0 : M, N = yt(t, $E), P = ze(null);
  Xl(n, function() {
    return P.current;
  });
  var T = z({}, N);
  "visible" in t && (T.popupVisible = t.visible);
  var j = function() {
    return /* @__PURE__ */ u.createElement(Is, {
      key: "content",
      prefixCls: v,
      id: F,
      overlayInnerStyle: _
    }, I);
  };
  return /* @__PURE__ */ u.createElement(iv, ke({
    popupClassName: r,
    prefixCls: v,
    popup: j,
    action: a,
    builtinPlacements: wE,
    popupPlacement: E,
    ref: P,
    popupAlign: x,
    getPopupContainer: R,
    onPopupVisibleChange: b,
    afterPopupVisibleChange: m,
    popupTransitionName: g,
    popupAnimation: y,
    popupMotion: p,
    defaultPopupVisible: O,
    autoDestroy: $,
    mouseLeaveDelay: c,
    popupStyle: d,
    mouseEnterDelay: l,
    arrow: V
  }, T), h);
};
const RE = /* @__PURE__ */ tr(OE);
function wv(e) {
  const {
    sizePopupArrow: t,
    borderRadiusXS: n,
    borderRadiusOuter: r
  } = e, o = t / 2, a = 0, i = o, l = r * 1 / Math.sqrt(2), s = o - r * (1 - 1 / Math.sqrt(2)), c = o - n * (1 / Math.sqrt(2)), d = r * (Math.sqrt(2) - 1) + n * (1 / Math.sqrt(2)), f = 2 * o - c, v = d, h = 2 * o - l, b = s, m = 2 * o - a, g = i, y = o * Math.sqrt(2) + r * (Math.sqrt(2) - 2), p = r * (Math.sqrt(2) - 1), S = `polygon(${p}px 100%, 50% ${p}px, ${2 * o - p}px 100%, ${p}px 100%)`, E = `path('M ${a} ${i} A ${r} ${r} 0 0 0 ${l} ${s} L ${c} ${d} A ${n} ${n} 0 0 1 ${f} ${v} L ${h} ${b} A ${r} ${r} 0 0 0 ${m} ${g} Z')`;
  return {
    arrowShadowWidth: y,
    arrowPath: E,
    arrowPolygon: S
  };
}
const IE = (e, t, n) => {
  const {
    sizePopupArrow: r,
    arrowPolygon: o,
    arrowPath: a,
    arrowShadowWidth: i,
    borderRadiusXS: l,
    calc: s
  } = e;
  return {
    pointerEvents: "none",
    width: r,
    height: r,
    overflow: "hidden",
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: r,
      height: s(r).div(2).equal(),
      background: t,
      clipPath: {
        _multi_value_: !0,
        value: [o, a]
      },
      content: '""'
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: i,
      height: i,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: !0,
        value: `0 0 ${oe(l)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: n,
      zIndex: 0,
      background: "transparent"
    }
  };
}, $v = 8;
function Ps(e) {
  const {
    contentRadius: t,
    limitVerticalRadius: n
  } = e, r = t > 12 ? t + 2 : 12;
  return {
    arrowOffsetHorizontal: r,
    arrowOffsetVertical: n ? $v : r
  };
}
function ga(e, t) {
  return e ? t : {};
}
function Ov(e, t, n) {
  const {
    componentCls: r,
    boxShadowPopoverArrow: o,
    arrowOffsetVertical: a,
    arrowOffsetHorizontal: i
  } = e, {
    arrowDistance: l = 0,
    arrowPlacement: s = {
      left: !0,
      right: !0,
      top: !0,
      bottom: !0
    }
  } = {};
  return {
    [r]: Object.assign(Object.assign(Object.assign(Object.assign({
      // ============================ Basic ============================
      [`${r}-arrow`]: [Object.assign(Object.assign({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, IE(e, t, o)), {
        "&:before": {
          background: t
        }
      })]
    }, ga(!!s.top, {
      [[`&-placement-top > ${r}-arrow`, `&-placement-topLeft > ${r}-arrow`, `&-placement-topRight > ${r}-arrow`].join(",")]: {
        bottom: l,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top > ${r}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      "&-placement-topLeft": {
        "--arrow-offset-horizontal": i,
        [`> ${r}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: i
          }
        }
      },
      "&-placement-topRight": {
        "--arrow-offset-horizontal": `calc(100% - ${oe(i)})`,
        [`> ${r}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: i
          }
        }
      }
    })), ga(!!s.bottom, {
      [[`&-placement-bottom > ${r}-arrow`, `&-placement-bottomLeft > ${r}-arrow`, `&-placement-bottomRight > ${r}-arrow`].join(",")]: {
        top: l,
        transform: "translateY(-100%)"
      },
      [`&-placement-bottom > ${r}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(-100%)"
      },
      "&-placement-bottomLeft": {
        "--arrow-offset-horizontal": i,
        [`> ${r}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: i
          }
        }
      },
      "&-placement-bottomRight": {
        "--arrow-offset-horizontal": `calc(100% - ${oe(i)})`,
        [`> ${r}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: i
          }
        }
      }
    })), ga(!!s.left, {
      [[`&-placement-left > ${r}-arrow`, `&-placement-leftTop > ${r}-arrow`, `&-placement-leftBottom > ${r}-arrow`].join(",")]: {
        right: {
          _skip_check_: !0,
          value: l
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left > ${r}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop > ${r}-arrow`]: {
        top: a
      },
      [`&-placement-leftBottom > ${r}-arrow`]: {
        bottom: a
      }
    })), ga(!!s.right, {
      [[`&-placement-right > ${r}-arrow`, `&-placement-rightTop > ${r}-arrow`, `&-placement-rightBottom > ${r}-arrow`].join(",")]: {
        left: {
          _skip_check_: !0,
          value: l
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right > ${r}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop > ${r}-arrow`]: {
        top: a
      },
      [`&-placement-rightBottom > ${r}-arrow`]: {
        bottom: a
      }
    }))
  };
}
function PE(e, t, n, r) {
  if (r === !1)
    return {
      adjustX: !1,
      adjustY: !1
    };
  const o = r && typeof r == "object" ? r : {}, a = {};
  switch (e) {
    case "top":
    case "bottom":
      a.shiftX = t.arrowOffsetHorizontal * 2 + n, a.shiftY = !0, a.adjustY = !0;
      break;
    case "left":
    case "right":
      a.shiftY = t.arrowOffsetVertical * 2 + n, a.shiftX = !0, a.adjustX = !0;
      break;
  }
  const i = Object.assign(Object.assign({}, a), o);
  return i.shiftX || (i.adjustX = !0), i.shiftY || (i.adjustY = !0), i;
}
const Nu = {
  left: {
    points: ["cr", "cl"]
  },
  right: {
    points: ["cl", "cr"]
  },
  top: {
    points: ["bc", "tc"]
  },
  bottom: {
    points: ["tc", "bc"]
  },
  topLeft: {
    points: ["bl", "tl"]
  },
  leftTop: {
    points: ["tr", "tl"]
  },
  topRight: {
    points: ["br", "tr"]
  },
  rightTop: {
    points: ["tl", "tr"]
  },
  bottomRight: {
    points: ["tr", "br"]
  },
  rightBottom: {
    points: ["bl", "br"]
  },
  bottomLeft: {
    points: ["tl", "bl"]
  },
  leftBottom: {
    points: ["br", "bl"]
  }
}, NE = {
  topLeft: {
    points: ["bl", "tc"]
  },
  leftTop: {
    points: ["tr", "cl"]
  },
  topRight: {
    points: ["br", "tc"]
  },
  rightTop: {
    points: ["tl", "cr"]
  },
  bottomRight: {
    points: ["tr", "bc"]
  },
  rightBottom: {
    points: ["bl", "cr"]
  },
  bottomLeft: {
    points: ["tl", "bc"]
  },
  leftBottom: {
    points: ["br", "cl"]
  }
}, ME = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function _E(e) {
  const {
    arrowWidth: t,
    autoAdjustOverflow: n,
    arrowPointAtCenter: r,
    offset: o,
    borderRadius: a,
    visibleFirst: i
  } = e, l = t / 2, s = {};
  return Object.keys(Nu).forEach((c) => {
    const d = r && NE[c] || Nu[c], f = Object.assign(Object.assign({}, d), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (s[c] = f, ME.has(c) && (f.autoArrow = !1), c) {
      case "top":
      case "topLeft":
      case "topRight":
        f.offset[1] = -l - o;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        f.offset[1] = l + o;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        f.offset[0] = -l - o;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        f.offset[0] = l + o;
        break;
    }
    const v = Ps({
      contentRadius: a,
      limitVerticalRadius: !0
    });
    if (r)
      switch (c) {
        case "topLeft":
        case "bottomLeft":
          f.offset[0] = -v.arrowOffsetHorizontal - l;
          break;
        case "topRight":
        case "bottomRight":
          f.offset[0] = v.arrowOffsetHorizontal + l;
          break;
        case "leftTop":
        case "rightTop":
          f.offset[1] = -v.arrowOffsetHorizontal * 2 + l;
          break;
        case "leftBottom":
        case "rightBottom":
          f.offset[1] = v.arrowOffsetHorizontal * 2 - l;
          break;
      }
    f.overflow = PE(c, v, t, n), i && (f.htmlRegion = "visibleFirst");
  }), s;
}
const TE = (e) => {
  const {
    componentCls: t,
    // ant-tooltip
    tooltipMaxWidth: n,
    tooltipColor: r,
    tooltipBg: o,
    tooltipBorderRadius: a,
    zIndexPopup: i,
    controlHeight: l,
    boxShadowSecondary: s,
    paddingSM: c,
    paddingXS: d
  } = e;
  return [
    {
      [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, un(e)), {
        position: "absolute",
        zIndex: i,
        display: "block",
        width: "max-content",
        maxWidth: n,
        visibility: "visible",
        // When use `autoArrow`, origin will follow the arrow position
        "--valid-offset-x": "var(--arrow-offset-horizontal, var(--arrow-x))",
        transformOrigin: ["var(--valid-offset-x, 50%)", "var(--arrow-y, 50%)"].join(" "),
        "&-hidden": {
          display: "none"
        },
        "--antd-arrow-background-color": o,
        // Wrapper for the tooltip content
        [`${t}-inner`]: {
          minWidth: "1em",
          minHeight: l,
          padding: `${oe(e.calc(c).div(2).equal())} ${oe(d)}`,
          color: r,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: o,
          borderRadius: a,
          boxShadow: s,
          boxSizing: "border-box"
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${t}-inner`]: {
            borderRadius: e.min(a, $v)
          }
        },
        [`${t}-content`]: {
          position: "relative"
        }
      }), zp(e, (f, v) => {
        let {
          darkColor: h
        } = v;
        return {
          [`&${t}-${f}`]: {
            [`${t}-inner`]: {
              backgroundColor: h
            },
            [`${t}-arrow`]: {
              "--antd-arrow-background-color": h
            }
          }
        };
      })), {
        // RTL
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Arrow Style
    Ov(e, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow
      }
    }
  ];
}, DE = (e) => Object.assign(Object.assign({
  zIndexPopup: e.zIndexPopupBase + 70
}, Ps({
  contentRadius: e.borderRadius,
  limitVerticalRadius: !0
})), wv(Pt(e, {
  borderRadiusOuter: Math.min(e.borderRadiusOuter, 4)
}))), Rv = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return yn("Tooltip", (r) => {
    const {
      borderRadius: o,
      colorTextLightSolid: a,
      colorBgSpotlight: i
    } = r, l = Pt(r, {
      // default variables
      tooltipMaxWidth: 250,
      tooltipColor: a,
      tooltipBorderRadius: o,
      tooltipBg: i
    });
    return [TE(l), Kf(r, "zoom-big-fast")];
  }, DE, {
    resetStyle: !1,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle: t
  })(e);
}, AE = Lo.map((e) => `${e}-inverse`);
function FE(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [].concat(Ce(AE), Ce(Lo)).includes(e) : Lo.includes(e);
}
function Iv(e, t) {
  const n = FE(t), r = ne({
    [`${e}-${t}`]: t && n
  }), o = {}, a = {};
  return t && !n && (o.background = t, a["--antd-arrow-background-color"] = t), {
    className: r,
    overlayStyle: o,
    arrowStyle: a
  };
}
const jE = (e) => {
  const {
    prefixCls: t,
    className: n,
    placement: r = "top",
    title: o,
    color: a,
    overlayInnerStyle: i
  } = e, {
    getPrefixCls: l
  } = u.useContext(Ct), s = l("tooltip", t), [c, d, f] = Rv(s), v = Iv(s, a), h = v.arrowStyle, b = Object.assign(Object.assign({}, i), v.overlayStyle), m = ne(d, f, s, `${s}-pure`, `${s}-placement-${r}`, n, v.className);
  return c(/* @__PURE__ */ u.createElement("div", {
    className: m,
    style: h
  }, /* @__PURE__ */ u.createElement("div", {
    className: `${s}-arrow`
  }), /* @__PURE__ */ u.createElement(Is, Object.assign({}, e, {
    className: d,
    prefixCls: s,
    overlayInnerStyle: b
  }), o)));
};
var LE = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const HE = /* @__PURE__ */ u.forwardRef((e, t) => {
  var n, r;
  const {
    prefixCls: o,
    openClassName: a,
    getTooltipContainer: i,
    overlayClassName: l,
    color: s,
    overlayInnerStyle: c,
    children: d,
    afterOpenChange: f,
    afterVisibleChange: v,
    destroyTooltipOnHide: h,
    arrow: b = !0,
    title: m,
    overlay: g,
    builtinPlacements: y,
    arrowPointAtCenter: p = !1,
    autoAdjustOverflow: S = !0
  } = e, E = !!b, [, C] = Nn(), {
    getPopupContainer: x,
    getPrefixCls: w,
    direction: $
  } = u.useContext(Ct), O = zt("Tooltip"), R = u.useRef(null), _ = () => {
    var J;
    (J = R.current) === null || J === void 0 || J.forceAlign();
  };
  u.useImperativeHandle(t, () => {
    var J;
    return {
      forceAlign: _,
      forcePopupAlign: () => {
        O.deprecated(!1, "forcePopupAlign", "forceAlign"), _();
      },
      nativeElement: (J = R.current) === null || J === void 0 ? void 0 : J.nativeElement
    };
  }), process.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"]].forEach((J) => {
    let [re, ge] = J;
    O.deprecated(!(re in e), re, ge);
  }), process.env.NODE_ENV !== "production" && O(!h || typeof h == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && O(!b || typeof b == "boolean" || !("arrowPointAtCenter" in b), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [I, F] = Jt(!1, {
    value: (n = e.open) !== null && n !== void 0 ? n : e.visible,
    defaultValue: (r = e.defaultOpen) !== null && r !== void 0 ? r : e.defaultVisible
  }), M = !m && !g && m !== 0, V = (J) => {
    var re, ge;
    F(M ? !1 : J), M || ((re = e.onOpenChange) === null || re === void 0 || re.call(e, J), (ge = e.onVisibleChange) === null || ge === void 0 || ge.call(e, J));
  }, N = u.useMemo(() => {
    var J, re;
    let ge = p;
    return typeof b == "object" && (ge = (re = (J = b.pointAtCenter) !== null && J !== void 0 ? J : b.arrowPointAtCenter) !== null && re !== void 0 ? re : p), y || _E({
      arrowPointAtCenter: ge,
      autoAdjustOverflow: S,
      arrowWidth: E ? C.sizePopupArrow : 0,
      borderRadius: C.borderRadius,
      offset: C.marginXXS,
      visibleFirst: !0
    });
  }, [p, b, y, C]), P = u.useMemo(() => m === 0 ? m : g || m || "", [g, m]), T = /* @__PURE__ */ u.createElement(ro, {
    space: !0
  }, typeof P == "function" ? P() : P), {
    getPopupContainer: j,
    placement: H = "top",
    mouseEnterDelay: L = 0.1,
    mouseLeaveDelay: q = 0.1,
    overlayStyle: k,
    rootClassName: U
  } = e, G = LE(e, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]), le = w("tooltip", o), Y = w(), Q = e["data-popover-inject"];
  let pe = I;
  !("open" in e) && !("visible" in e) && M && (pe = !1);
  const Z = /* @__PURE__ */ u.isValidElement(d) && !xf(d) ? d : /* @__PURE__ */ u.createElement("span", null, d), X = Z.props, te = !X.className || typeof X.className == "string" ? ne(X.className, a || `${le}-open`) : X.className, [fe, W, ae] = Rv(le, !Q), ie = Iv(le, s), ue = ie.arrowStyle, ve = Object.assign(Object.assign({}, c), ie.overlayStyle), $e = ne(l, {
    [`${le}-rtl`]: $ === "rtl"
  }, ie.className, U, W, ae), [Re, Se] = $f("Tooltip", G.zIndex), _e = /* @__PURE__ */ u.createElement(RE, Object.assign({}, G, {
    zIndex: Re,
    showArrow: E,
    placement: H,
    mouseEnterDelay: L,
    mouseLeaveDelay: q,
    prefixCls: le,
    overlayClassName: $e,
    overlayStyle: Object.assign(Object.assign({}, ue), k),
    getTooltipContainer: j || i || x,
    ref: R,
    builtinPlacements: N,
    overlay: T,
    visible: pe,
    onVisibleChange: V,
    afterVisibleChange: f ?? v,
    overlayInnerStyle: ve,
    arrowContent: /* @__PURE__ */ u.createElement("span", {
      className: `${le}-arrow-content`
    }),
    motion: {
      motionName: fs(Y, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    },
    destroyTooltipOnHide: !!h
  }), pe ? mr(Z, {
    className: te
  }) : Z);
  return fe(/* @__PURE__ */ u.createElement(ds.Provider, {
    value: Se
  }, _e));
}), ei = HE;
process.env.NODE_ENV !== "production" && (ei.displayName = "Tooltip");
ei._InternalPanelDoNotUseOrYouWillBeFired = jE;
const zE = (e) => {
  const {
    componentCls: t,
    popoverColor: n,
    titleMinWidth: r,
    fontWeightStrong: o,
    innerPadding: a,
    boxShadowSecondary: i,
    colorTextHeading: l,
    borderRadiusLG: s,
    zIndexPopup: c,
    titleMarginBottom: d,
    colorBgElevated: f,
    popoverBg: v,
    titleBorderBottom: h,
    innerContentPadding: b,
    titlePadding: m
  } = e;
  return [
    {
      [t]: Object.assign(Object.assign({}, un(e)), {
        position: "absolute",
        top: 0,
        // use `left` to fix https://github.com/ant-design/ant-design/issues/39195
        left: {
          _skip_check_: !0,
          value: 0
        },
        zIndex: c,
        fontWeight: "normal",
        whiteSpace: "normal",
        textAlign: "start",
        cursor: "auto",
        userSelect: "text",
        // When use `autoArrow`, origin will follow the arrow position
        "--valid-offset-x": "var(--arrow-offset-horizontal, var(--arrow-x))",
        transformOrigin: ["var(--valid-offset-x, 50%)", "var(--arrow-y, 50%)"].join(" "),
        "--antd-arrow-background-color": f,
        width: "max-content",
        maxWidth: "100vw",
        "&-rtl": {
          direction: "rtl"
        },
        "&-hidden": {
          display: "none"
        },
        [`${t}-content`]: {
          position: "relative"
        },
        [`${t}-inner`]: {
          backgroundColor: v,
          backgroundClip: "padding-box",
          borderRadius: s,
          boxShadow: i,
          padding: a
        },
        [`${t}-title`]: {
          minWidth: r,
          marginBottom: d,
          color: l,
          fontWeight: o,
          borderBottom: h,
          padding: m
        },
        [`${t}-inner-content`]: {
          color: n,
          padding: b
        }
      })
    },
    // Arrow Style
    Ov(e, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow,
        display: "inline-block",
        [`${t}-content`]: {
          display: "inline-block"
        }
      }
    }
  ];
}, VE = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: Lo.map((n) => {
      const r = e[`${n}6`];
      return {
        [`&${t}-${n}`]: {
          "--antd-arrow-background-color": r,
          [`${t}-inner`]: {
            backgroundColor: r
          },
          [`${t}-arrow`]: {
            background: "transparent"
          }
        }
      };
    })
  };
}, BE = (e) => {
  const {
    lineWidth: t,
    controlHeight: n,
    fontHeight: r,
    padding: o,
    wireframe: a,
    zIndexPopupBase: i,
    borderRadiusLG: l,
    marginXS: s,
    lineType: c,
    colorSplit: d,
    paddingSM: f
  } = e, v = n - r, h = v / 2, b = v / 2 - t, m = o;
  return Object.assign(Object.assign(Object.assign({
    titleMinWidth: 177,
    zIndexPopup: i + 30
  }, wv(e)), Ps({
    contentRadius: l,
    limitVerticalRadius: !0
  })), {
    // internal
    innerPadding: a ? 0 : 12,
    titleMarginBottom: a ? 0 : s,
    titlePadding: a ? `${h}px ${m}px ${b}px` : 0,
    titleBorderBottom: a ? `${t}px ${c} ${d}` : "none",
    innerContentPadding: a ? `${f}px ${m}px` : 0
  });
}, Pv = yn("Popover", (e) => {
  const {
    colorBgElevated: t,
    colorText: n
  } = e, r = Pt(e, {
    popoverBg: t,
    popoverColor: n
  });
  return [zE(r), VE(r), Kf(r, "zoom-big")];
}, BE, {
  resetStyle: !1,
  deprecatedTokens: [["width", "titleMinWidth"], ["minWidth", "titleMinWidth"]]
});
var WE = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Nv = (e) => {
  let {
    title: t,
    content: n,
    prefixCls: r
  } = e;
  return !t && !n ? null : /* @__PURE__ */ u.createElement(u.Fragment, null, t && /* @__PURE__ */ u.createElement("div", {
    className: `${r}-title`
  }, t), n && /* @__PURE__ */ u.createElement("div", {
    className: `${r}-inner-content`
  }, n));
}, kE = (e) => {
  const {
    hashId: t,
    prefixCls: n,
    className: r,
    style: o,
    placement: a = "top",
    title: i,
    content: l,
    children: s
  } = e, c = La(i), d = La(l), f = ne(t, n, `${n}-pure`, `${n}-placement-${a}`, r);
  return /* @__PURE__ */ u.createElement("div", {
    className: f,
    style: o
  }, /* @__PURE__ */ u.createElement("div", {
    className: `${n}-arrow`
  }), /* @__PURE__ */ u.createElement(Is, Object.assign({}, e, {
    className: t,
    prefixCls: n
  }), s || /* @__PURE__ */ u.createElement(Nv, {
    prefixCls: n,
    title: c,
    content: d
  })));
}, UE = (e) => {
  const {
    prefixCls: t,
    className: n
  } = e, r = WE(e, ["prefixCls", "className"]), {
    getPrefixCls: o
  } = u.useContext(Ct), a = o("popover", t), [i, l, s] = Pv(a);
  return i(/* @__PURE__ */ u.createElement(kE, Object.assign({}, r, {
    prefixCls: a,
    hashId: l,
    className: ne(n, s)
  })));
};
var GE = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const qE = /* @__PURE__ */ u.forwardRef((e, t) => {
  var n, r;
  const {
    prefixCls: o,
    title: a,
    content: i,
    overlayClassName: l,
    placement: s = "top",
    trigger: c = "hover",
    children: d,
    mouseEnterDelay: f = 0.1,
    mouseLeaveDelay: v = 0.1,
    onOpenChange: h,
    overlayStyle: b = {}
  } = e, m = GE(e, ["prefixCls", "title", "content", "overlayClassName", "placement", "trigger", "children", "mouseEnterDelay", "mouseLeaveDelay", "onOpenChange", "overlayStyle"]), {
    getPrefixCls: g
  } = u.useContext(Ct), y = g("popover", o), [p, S, E] = Pv(y), C = g(), x = ne(l, S, E), [w, $] = Jt(!1, {
    value: (n = e.open) !== null && n !== void 0 ? n : e.visible,
    defaultValue: (r = e.defaultOpen) !== null && r !== void 0 ? r : e.defaultVisible
  }), O = (M, V) => {
    $(M, !0), h == null || h(M, V);
  }, R = (M) => {
    M.keyCode === se.ESC && O(!1, M);
  }, _ = (M) => {
    O(M);
  }, I = La(a), F = La(i);
  return p(/* @__PURE__ */ u.createElement(ei, Object.assign({
    placement: s,
    trigger: c,
    mouseEnterDelay: f,
    mouseLeaveDelay: v,
    overlayStyle: b
  }, m, {
    prefixCls: y,
    overlayClassName: x,
    ref: t,
    open: w,
    onOpenChange: _,
    overlay: I || F ? /* @__PURE__ */ u.createElement(Nv, {
      prefixCls: y,
      title: I,
      content: F
    }) : null,
    transitionName: fs(C, "zoom-big", m.transitionName),
    "data-popover-inject": !0
  }), mr(d, {
    onKeyDown: (M) => {
      var V, N;
      /* @__PURE__ */ u.isValidElement(d) && ((N = d == null ? void 0 : (V = d.props).onKeyDown) === null || N === void 0 || N.call(V, M)), R(M);
    }
  })));
}), Ns = qE;
Ns._InternalPanelDoNotUseOrYouWillBeFired = UE;
process.env.NODE_ENV !== "production" && (Ns.displayName = "Popover");
var KE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" }, XE = function(t, n) {
  return /* @__PURE__ */ u.createElement(Sn, ke({}, t, {
    ref: n,
    icon: KE
  }));
}, Mv = /* @__PURE__ */ u.forwardRef(XE);
process.env.NODE_ENV !== "production" && (Mv.displayName = "RightOutlined");
function Ms(e) {
  return Pt(e, {
    inputAffixPadding: e.paddingXXS
  });
}
const _s = (e) => {
  const {
    controlHeight: t,
    fontSize: n,
    lineHeight: r,
    lineWidth: o,
    controlHeightSM: a,
    controlHeightLG: i,
    fontSizeLG: l,
    lineHeightLG: s,
    paddingSM: c,
    controlPaddingHorizontalSM: d,
    controlPaddingHorizontal: f,
    colorFillAlter: v,
    colorPrimaryHover: h,
    colorPrimary: b,
    controlOutlineWidth: m,
    controlOutline: g,
    colorErrorOutline: y,
    colorWarningOutline: p,
    colorBgContainer: S
  } = e;
  return {
    paddingBlock: Math.max(Math.round((t - n * r) / 2 * 10) / 10 - o, 0),
    paddingBlockSM: Math.max(Math.round((a - n * r) / 2 * 10) / 10 - o, 0),
    paddingBlockLG: Math.ceil((i - l * s) / 2 * 10) / 10 - o,
    paddingInline: c - o,
    paddingInlineSM: d - o,
    paddingInlineLG: f - o,
    addonBg: v,
    activeBorderColor: b,
    hoverBorderColor: h,
    activeShadow: `0 0 0 ${m}px ${g}`,
    errorActiveShadow: `0 0 0 ${m}px ${y}`,
    warningActiveShadow: `0 0 0 ${m}px ${p}`,
    hoverBg: S,
    activeBg: S,
    inputFontSize: n,
    inputFontSizeLG: l,
    inputFontSizeSM: n
  };
}, YE = (e) => ({
  borderColor: e.hoverBorderColor,
  backgroundColor: e.hoverBg
}), Ts = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "input[disabled], textarea[disabled]": {
    cursor: "not-allowed"
  },
  "&:hover:not([disabled])": Object.assign({}, YE(Pt(e, {
    hoverBorderColor: e.colorBorder,
    hoverBg: e.colorBgContainerDisabled
  })))
}), _v = (e, t) => ({
  background: e.colorBgContainer,
  borderWidth: e.lineWidth,
  borderStyle: e.lineType,
  borderColor: t.borderColor,
  "&:hover": {
    borderColor: t.hoverBorderColor,
    backgroundColor: e.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: t.activeBorderColor,
    boxShadow: t.activeShadow,
    outline: 0,
    backgroundColor: e.activeBg
  }
}), Mu = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, _v(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  }),
  [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
    borderColor: t.borderColor
  }
}), Tv = (e, t) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, _v(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeShadow: e.activeShadow
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, Ts(e))
  }), Mu(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), Mu(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), _u = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      borderColor: t.addonBorderColor,
      color: t.addonColor
    }
  }
}), Dv = (e) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.addonBg,
        border: `${oe(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    }
  }, _u(e, {
    status: "error",
    addonBorderColor: e.colorError,
    addonColor: e.colorErrorText
  })), _u(e, {
    status: "warning",
    addonBorderColor: e.colorWarning,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group-addon`]: Object.assign({}, Ts(e))
    }
  })
}), Av = (e, t) => {
  const {
    componentCls: n
  } = e;
  return {
    "&-borderless": Object.assign({
      background: "transparent",
      border: "none",
      "&:focus, &:focus-within": {
        outline: "none"
      },
      // >>>>> Disabled
      [`&${n}-disabled, &[disabled]`]: {
        color: e.colorTextDisabled
      },
      // >>>>> Status
      [`&${n}-status-error`]: {
        "&, & input, & textarea": {
          color: e.colorError
        }
      },
      [`&${n}-status-warning`]: {
        "&, & input, & textarea": {
          color: e.colorWarning
        }
      }
    }, t)
  };
}, Fv = (e, t) => ({
  background: t.bg,
  borderWidth: e.lineWidth,
  borderStyle: e.lineType,
  borderColor: "transparent",
  "input&, & input, textarea&, & textarea": {
    color: t == null ? void 0 : t.inputColor
  },
  "&:hover": {
    background: t.hoverBg
  },
  "&:focus, &:focus-within": {
    outline: 0,
    borderColor: t.activeBorderColor,
    backgroundColor: e.activeBg
  }
}), Tu = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Fv(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  })
}), jv = (e, t) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Fv(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.activeBorderColor
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, Ts(e))
  }), Tu(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    inputColor: e.colorErrorText,
    affixColor: e.colorError
  })), Tu(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    inputColor: e.colorWarningText,
    affixColor: e.colorWarning
  })), t)
}), Du = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      background: t.addonBg,
      color: t.addonColor
    }
  }
}), Lv = (e) => ({
  "&-filled": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.colorFillTertiary
      },
      [`${e.componentCls}-filled:not(:focus):not(:focus-within)`]: {
        "&:not(:first-child)": {
          borderInlineStart: `${oe(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        },
        "&:not(:last-child)": {
          borderInlineEnd: `${oe(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        }
      }
    }
  }, Du(e, {
    status: "error",
    addonBg: e.colorErrorBg,
    addonColor: e.colorErrorText
  })), Du(e, {
    status: "warning",
    addonBg: e.colorWarningBg,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group`]: {
        "&-addon": {
          background: e.colorFillTertiary,
          color: e.colorTextDisabled
        },
        "&-addon:first-child": {
          borderInlineStart: `${oe(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${oe(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${oe(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        "&-addon:last-child": {
          borderInlineEnd: `${oe(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${oe(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${oe(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        }
      }
    }
  })
}), Hv = (e) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color: e,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
}), zv = (e) => {
  const {
    paddingBlockLG: t,
    lineHeightLG: n,
    borderRadiusLG: r,
    paddingInlineLG: o
  } = e;
  return {
    padding: `${oe(t)} ${oe(o)}`,
    fontSize: e.inputFontSizeLG,
    lineHeight: n,
    borderRadius: r
  };
}, Vv = (e) => ({
  padding: `${oe(e.paddingBlockSM)} ${oe(e.paddingInlineSM)}`,
  fontSize: e.inputFontSizeSM,
  borderRadius: e.borderRadiusSM
}), ti = (e) => Object.assign(Object.assign({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${oe(e.paddingBlock)} ${oe(e.paddingInline)}`,
  color: e.colorText,
  fontSize: e.inputFontSize,
  lineHeight: e.lineHeight,
  borderRadius: e.borderRadius,
  transition: `all ${e.motionDurationMid}`
}, Hv(e.colorTextPlaceholder)), {
  // Reset height for `textarea`s
  "textarea&": {
    maxWidth: "100%",
    // prevent textarea resize from coming out of its container
    height: "auto",
    minHeight: e.controlHeight,
    lineHeight: e.lineHeight,
    verticalAlign: "bottom",
    transition: `all ${e.motionDurationSlow}, height 0s`,
    resize: "vertical"
  },
  // Size
  "&-lg": Object.assign({}, zv(e)),
  "&-sm": Object.assign({}, Vv(e)),
  // RTL
  "&-rtl, &-textarea-rtl": {
    direction: "rtl"
  }
}), Bv = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    "&[class*='col-']": {
      paddingInlineEnd: e.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, zv(e)),
    [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, Vv(e)),
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&-lg ${n}-select-single ${n}-select-selector`]: {
      height: e.controlHeightLG
    },
    [`&-sm ${n}-select-single ${n}-select-selector`]: {
      height: e.controlHeightSM
    },
    [`> ${t}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${t}-group`]: {
      "&-addon, &-wrap": {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${oe(e.paddingInline)}`,
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.inputFontSize,
        textAlign: "center",
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${n}-select`]: {
          margin: `${oe(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${oe(e.calc(e.paddingInline).mul(-1).equal())}`,
          [`&${n}-select-single:not(${n}-select-customize-input):not(${n}-pagination-size-changer)`]: {
            [`${n}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${oe(e.lineWidth)} ${e.lineType} transparent`,
              boxShadow: "none"
            }
          },
          "&-open, &-focused": {
            [`${n}-select-selector`]: {
              color: e.colorPrimary
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${n}-cascader-picker`]: {
          margin: `-9px ${oe(e.calc(e.paddingInline).mul(-1).equal())}`,
          backgroundColor: "transparent",
          [`${n}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      }
    },
    [t]: {
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        // Fix https://gw.alipayobjects.com/zos/rmsportal/DHNpoqfMXSfrSnlZvhsJ.png
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      }
    },
    // Reset rounded corners
    [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${n}-select ${n}-select-selector`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}-affix-wrapper`]: {
      [`&:not(:first-child) ${t}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${t}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${n}-select ${n}-select-selector`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${t}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${t}-search &`]: {
          borderStartStartRadius: e.borderRadius,
          borderEndStartRadius: e.borderRadius
        }
      },
      [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${t}-group-compact`]: Object.assign(Object.assign({
      display: "block"
    }, Tp()), {
      [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: e.lineWidth,
          "&:hover, &:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-flex",
        float: "none",
        verticalAlign: "top",
        // https://github.com/ant-design/ant-design-pro/issues/139
        borderRadius: 0
      },
      [`
        & > ${t}-affix-wrapper,
        & > ${t}-number-affix-wrapper,
        & > ${n}-picker-range
      `]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
        borderInlineEndWidth: e.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [t]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${n}-select > ${n}-select-selector,
      & > ${n}-select-auto-complete ${t},
      & > ${n}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderRadius: 0,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`& > ${n}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${n}-select > ${n}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${n}-select:first-child > ${n}-select-selector,
      & > ${n}-select-auto-complete:first-child ${t},
      & > ${n}-cascader-picker:first-child ${t}`]: {
        borderStartStartRadius: e.borderRadius,
        borderEndStartRadius: e.borderRadius
      },
      [`& > *:last-child,
      & > ${n}-select:last-child > ${n}-select-selector,
      & > ${n}-cascader-picker:last-child ${t},
      & > ${n}-cascader-picker-focused:last-child ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderStartEndRadius: e.borderRadius,
        borderEndEndRadius: e.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${n}-select-auto-complete ${t}`]: {
        verticalAlign: "top"
      },
      [`${t}-group-wrapper + ${t}-group-wrapper`]: {
        marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
        [`${t}-affix-wrapper`]: {
          borderRadius: 0
        }
      },
      [`${t}-group-wrapper:not(:last-child)`]: {
        [`&${t}-search > ${t}-group`]: {
          [`& > ${t}-group-addon > ${t}-search-button`]: {
            borderRadius: 0
          },
          [`& > ${t}`]: {
            borderStartStartRadius: e.borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: e.borderRadius
          }
        }
      }
    })
  };
}, QE = (e) => {
  const {
    componentCls: t,
    controlHeightSM: n,
    lineWidth: r,
    calc: o
  } = e, i = o(n).sub(o(r).mul(2)).sub(16).div(2).equal();
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, un(e)), ti(e)), Tv(e)), jv(e)), Av(e)), {
      '&[type="color"]': {
        height: e.controlHeight,
        [`&${t}-lg`]: {
          height: e.controlHeightLG
        },
        [`&${t}-sm`]: {
          height: n,
          paddingTop: i,
          paddingBottom: i
        }
      },
      '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
        "-webkit-appearance": "none"
      }
    })
  };
}, ZE = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // ========================= Input =========================
    [`${t}-clear-icon`]: {
      margin: 0,
      color: e.colorTextQuaternary,
      fontSize: e.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${e.motionDurationSlow}`,
      "&:hover": {
        color: e.colorTextTertiary
      },
      "&:active": {
        color: e.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${oe(e.inputAffixPadding)}`
      }
    }
  };
}, JE = (e) => {
  const {
    componentCls: t,
    inputAffixPadding: n,
    colorTextDescription: r,
    motionDurationSlow: o,
    colorIcon: a,
    colorIconHover: i,
    iconCls: l
  } = e, s = `${t}-affix-wrapper`, c = `${t}-affix-wrapper-disabled`;
  return {
    [s]: Object.assign(Object.assign(Object.assign(Object.assign({}, ti(e)), {
      display: "inline-flex",
      [`&:not(${t}-disabled):hover`]: {
        zIndex: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      },
      "&-focused, &:focus": {
        zIndex: 1
      },
      [`> input${t}`]: {
        padding: 0
      },
      [`> input${t}, > textarea${t}`]: {
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        background: "transparent",
        color: "inherit",
        "&::-ms-reveal": {
          display: "none"
        },
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        display: "inline-block",
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [t]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: e.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: r
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: e.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: n
        },
        "&-suffix": {
          marginInlineStart: n
        }
      }
    }), ZE(e)), {
      // password
      [`${l}${t}-password-icon`]: {
        color: a,
        cursor: "pointer",
        transition: `all ${o}`,
        "&:hover": {
          color: i
        }
      }
    }),
    [c]: {
      // password disabled
      [`${l}${t}-password-icon`]: {
        color: a,
        cursor: "not-allowed",
        "&:hover": {
          color: a
        }
      }
    }
  };
}, e1 = (e) => {
  const {
    componentCls: t,
    borderRadiusLG: n,
    borderRadiusSM: r
  } = e;
  return {
    [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, un(e)), Bv(e)), {
      "&-rtl": {
        direction: "rtl"
      },
      "&-wrapper": Object.assign(Object.assign(Object.assign({
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        "&-rtl": {
          direction: "rtl"
        },
        // Size
        "&-lg": {
          [`${t}-group-addon`]: {
            borderRadius: n,
            fontSize: e.inputFontSizeLG
          }
        },
        "&-sm": {
          [`${t}-group-addon`]: {
            borderRadius: r
          }
        }
      }, Dv(e)), Lv(e)), {
        // '&-disabled': {
        //   [`${componentCls}-group-addon`]: {
        //     ...genDisabledStyle(token),
        //   },
        // },
        // Fix the issue of using icons in Space Compact mode
        // https://github.com/ant-design/ant-design/issues/42122
        [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderRadius: 0
          }
        },
        [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        },
        // Fix the issue of input use show-count param in space compact mode
        // https://github.com/ant-design/ant-design/issues/46872
        [`&:not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}-affix-wrapper`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        }
      })
    })
  };
}, t1 = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e, r = `${t}-search`;
  return {
    [r]: {
      [t]: {
        "&:hover, &:focus": {
          borderColor: e.colorPrimaryHover,
          [`+ ${t}-group-addon ${r}-button:not(${n}-btn-primary)`]: {
            borderInlineStartColor: e.colorPrimaryHover
          }
        }
      },
      [`${t}-affix-wrapper`]: {
        borderRadius: 0
      },
      // fix slight height diff in Firefox:
      // https://ant.design/components/auto-complete-cn/#auto-complete-demo-certain-category
      [`${t}-lg`]: {
        lineHeight: e.calc(e.lineHeightLG).sub(2e-4).equal()
      },
      [`> ${t}-group`]: {
        [`> ${t}-group-addon:last-child`]: {
          insetInlineStart: -1,
          padding: 0,
          border: 0,
          [`${r}-button`]: {
            // Fix https://github.com/ant-design/ant-design/issues/47150
            marginInlineEnd: -1,
            paddingTop: 0,
            paddingBottom: 0,
            borderStartStartRadius: 0,
            borderEndStartRadius: 0,
            boxShadow: "none"
          },
          [`${r}-button:not(${n}-btn-primary)`]: {
            color: e.colorTextDescription,
            "&:hover": {
              color: e.colorPrimaryHover
            },
            "&:active": {
              color: e.colorPrimaryActive
            },
            [`&${n}-btn-loading::before`]: {
              insetInlineStart: 0,
              insetInlineEnd: 0,
              insetBlockStart: 0,
              insetBlockEnd: 0
            }
          }
        }
      },
      [`${r}-button`]: {
        height: e.controlHeight,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`&-large ${r}-button`]: {
        height: e.controlHeightLG
      },
      [`&-small ${r}-button`]: {
        height: e.controlHeightSM
      },
      "&-rtl": {
        direction: "rtl"
      },
      // ===================== Compact Item Customized Styles =====================
      [`&${t}-compact-item`]: {
        [`&:not(${t}-compact-last-item)`]: {
          [`${t}-group-addon`]: {
            [`${t}-search-button`]: {
              marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
              borderRadius: 0
            }
          }
        },
        [`&:not(${t}-compact-first-item)`]: {
          [`${t},${t}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: {
          "&:hover, &:focus, &:active": {
            zIndex: 2
          }
        },
        [`> ${t}-affix-wrapper-focused`]: {
          zIndex: 2
        }
      }
    }
  };
}, n1 = (e) => {
  const {
    componentCls: t,
    paddingLG: n
  } = e, r = `${t}-textarea`;
  return {
    [r]: {
      position: "relative",
      "&-show-count": {
        // https://github.com/ant-design/ant-design/issues/33049
        [`> ${t}`]: {
          height: "100%"
        },
        [`${t}-data-count`]: {
          position: "absolute",
          bottom: e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),
          insetInlineEnd: 0,
          color: e.colorTextDescription,
          whiteSpace: "nowrap",
          pointerEvents: "none"
        }
      },
      [`
        &-allow-clear > ${t},
        &-affix-wrapper${r}-has-feedback ${t}
      `]: {
        paddingInlineEnd: n
      },
      [`&-affix-wrapper${t}-affix-wrapper`]: {
        padding: 0,
        [`> textarea${t}`]: {
          fontSize: "inherit",
          border: "none",
          outline: "none",
          background: "transparent",
          "&:focus": {
            boxShadow: "none !important"
          }
        },
        [`${t}-suffix`]: {
          margin: 0,
          "> *:not(:last-child)": {
            marginInline: 0
          },
          // Clear Icon
          [`${t}-clear-icon`]: {
            position: "absolute",
            insetInlineEnd: e.paddingInline,
            insetBlockStart: e.paddingXS
          },
          // Feedback Icon
          [`${r}-suffix`]: {
            position: "absolute",
            top: 0,
            insetInlineEnd: e.paddingInline,
            bottom: 0,
            zIndex: 1,
            display: "inline-flex",
            alignItems: "center",
            margin: "auto",
            pointerEvents: "none"
          }
        }
      },
      [`&-affix-wrapper${t}-affix-wrapper-sm`]: {
        [`${t}-suffix`]: {
          [`${t}-clear-icon`]: {
            insetInlineEnd: e.paddingInlineSM
          }
        }
      }
    }
  };
}, r1 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-out-of-range`]: {
      [`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]: {
        color: e.colorError
      }
    }
  };
}, Ds = yn("Input", (e) => {
  const t = Pt(e, Ms(e));
  return [
    QE(t),
    n1(t),
    JE(t),
    e1(t),
    t1(t),
    r1(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Uo(t)
  ];
}, _s, {
  resetFont: !1
});
var Wv = /* @__PURE__ */ B.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.forceRender, o = e.className, a = e.style, i = e.children, l = e.isActive, s = e.role, c = B.useState(l || r), d = K(c, 2), f = d[0], v = d[1];
  return B.useEffect(function() {
    (r || l) && v(!0);
  }, [r, l]), f ? /* @__PURE__ */ B.createElement("div", {
    ref: t,
    className: ne("".concat(n, "-content"), D(D({}, "".concat(n, "-content-active"), l), "".concat(n, "-content-inactive"), !l), o),
    style: a,
    role: s
  }, /* @__PURE__ */ B.createElement("div", {
    className: "".concat(n, "-content-box")
  }, i)) : null;
});
Wv.displayName = "PanelContent";
var o1 = ["showArrow", "headerClass", "isActive", "onItemClick", "forceRender", "className", "prefixCls", "collapsible", "accordion", "panelKey", "extra", "header", "expandIcon", "openMotion", "destroyInactivePanel", "children"], kv = /* @__PURE__ */ B.forwardRef(function(e, t) {
  var n = e.showArrow, r = n === void 0 ? !0 : n, o = e.headerClass, a = e.isActive, i = e.onItemClick, l = e.forceRender, s = e.className, c = e.prefixCls, d = e.collapsible, f = e.accordion, v = e.panelKey, h = e.extra, b = e.header, m = e.expandIcon, g = e.openMotion, y = e.destroyInactivePanel, p = e.children, S = yt(e, o1), E = d === "disabled", C = d === "header", x = d === "icon", w = h != null && typeof h != "boolean", $ = function() {
    i == null || i(v);
  }, O = function(V) {
    (V.key === "Enter" || V.keyCode === se.ENTER || V.which === se.ENTER) && $();
  }, R = typeof m == "function" ? m(e) : /* @__PURE__ */ B.createElement("i", {
    className: "arrow"
  });
  R && (R = /* @__PURE__ */ B.createElement("div", {
    className: "".concat(c, "-expand-icon"),
    onClick: ["header", "icon"].includes(d) ? $ : void 0
  }, R));
  var _ = ne(D(D(D({}, "".concat(c, "-item"), !0), "".concat(c, "-item-active"), a), "".concat(c, "-item-disabled"), E), s), I = ne(o, D(D(D({}, "".concat(c, "-header"), !0), "".concat(c, "-header-collapsible-only"), C), "".concat(c, "-icon-collapsible-only"), x)), F = {
    className: I,
    "aria-expanded": a,
    "aria-disabled": E,
    onKeyDown: O
  };
  return !C && !x && (F.onClick = $, F.role = f ? "tab" : "button", F.tabIndex = E ? -1 : 0), /* @__PURE__ */ B.createElement("div", ke({}, S, {
    ref: t,
    className: _
  }), /* @__PURE__ */ B.createElement("div", F, r && R, /* @__PURE__ */ B.createElement("span", {
    className: "".concat(c, "-header-text"),
    onClick: d === "header" ? $ : void 0
  }, b), w && /* @__PURE__ */ B.createElement("div", {
    className: "".concat(c, "-extra")
  }, h)), /* @__PURE__ */ B.createElement(Nr, ke({
    visible: a,
    leavedClassName: "".concat(c, "-content-hidden")
  }, g, {
    forceRender: l,
    removeOnLeave: y
  }), function(M, V) {
    var N = M.className, P = M.style;
    return /* @__PURE__ */ B.createElement(Wv, {
      ref: V,
      prefixCls: c,
      className: N,
      style: P,
      isActive: a,
      forceRender: l,
      role: f ? "tabpanel" : void 0
    }, p);
  }));
}), a1 = ["children", "label", "key", "collapsible", "onItemClick", "destroyInactivePanel"], i1 = function(t, n) {
  var r = n.prefixCls, o = n.accordion, a = n.collapsible, i = n.destroyInactivePanel, l = n.onItemClick, s = n.activeKey, c = n.openMotion, d = n.expandIcon;
  return t.map(function(f, v) {
    var h = f.children, b = f.label, m = f.key, g = f.collapsible, y = f.onItemClick, p = f.destroyInactivePanel, S = yt(f, a1), E = String(m ?? v), C = g ?? a, x = p ?? i, w = function(R) {
      C !== "disabled" && (l(R), y == null || y(R));
    }, $ = !1;
    return o ? $ = s[0] === E : $ = s.indexOf(E) > -1, /* @__PURE__ */ B.createElement(kv, ke({}, S, {
      prefixCls: r,
      key: E,
      panelKey: E,
      isActive: $,
      accordion: o,
      openMotion: c,
      expandIcon: d,
      header: b,
      collapsible: C,
      onItemClick: w,
      destroyInactivePanel: x
    }), h);
  });
}, l1 = function(t, n, r) {
  if (!t) return null;
  var o = r.prefixCls, a = r.accordion, i = r.collapsible, l = r.destroyInactivePanel, s = r.onItemClick, c = r.activeKey, d = r.openMotion, f = r.expandIcon, v = t.key || String(n), h = t.props, b = h.header, m = h.headerClass, g = h.destroyInactivePanel, y = h.collapsible, p = h.onItemClick, S = !1;
  a ? S = c[0] === v : S = c.indexOf(v) > -1;
  var E = y ?? i, C = function($) {
    E !== "disabled" && (s($), p == null || p($));
  }, x = {
    key: v,
    panelKey: v,
    header: b,
    headerClass: m,
    isActive: S,
    prefixCls: o,
    destroyInactivePanel: g ?? l,
    openMotion: d,
    accordion: a,
    children: t.props.children,
    onItemClick: C,
    expandIcon: f,
    collapsible: E
  };
  return typeof t.type == "string" ? t : (Object.keys(x).forEach(function(w) {
    typeof x[w] > "u" && delete x[w];
  }), /* @__PURE__ */ B.cloneElement(t, x));
};
function s1(e, t, n) {
  return Array.isArray(e) ? i1(e, n) : Jn(t).map(function(r, o) {
    return l1(r, o, n);
  });
}
function c1(e) {
  var t = e;
  if (!Array.isArray(t)) {
    var n = Be(t);
    t = n === "number" || n === "string" ? [t] : [];
  }
  return t.map(function(r) {
    return String(r);
  });
}
var u1 = /* @__PURE__ */ B.forwardRef(function(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-collapse" : n, o = e.destroyInactivePanel, a = o === void 0 ? !1 : o, i = e.style, l = e.accordion, s = e.className, c = e.children, d = e.collapsible, f = e.openMotion, v = e.expandIcon, h = e.activeKey, b = e.defaultActiveKey, m = e.onChange, g = e.items, y = ne(r, s), p = Jt([], {
    value: h,
    onChange: function(O) {
      return m == null ? void 0 : m(O);
    },
    defaultValue: b,
    postState: c1
  }), S = K(p, 2), E = S[0], C = S[1], x = function(O) {
    return C(function() {
      if (l)
        return E[0] === O ? [] : [O];
      var R = E.indexOf(O), _ = R > -1;
      return _ ? E.filter(function(I) {
        return I !== O;
      }) : [].concat(Ce(E), [O]);
    });
  };
  ut(!c, "[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");
  var w = s1(g, c, {
    prefixCls: r,
    accordion: l,
    openMotion: f,
    expandIcon: v,
    collapsible: d,
    destroyInactivePanel: a,
    onItemClick: x,
    activeKey: E
  });
  return /* @__PURE__ */ B.createElement("div", ke({
    ref: t,
    className: y,
    style: i,
    role: l ? "tablist" : void 0
  }, Ir(e, {
    aria: !0,
    data: !0
  })), w);
});
const As = Object.assign(u1, {
  /**
   * @deprecated use `items` instead, will be removed in `v4.0.0`
   */
  Panel: kv
});
As.Panel;
const d1 = /* @__PURE__ */ u.forwardRef((e, t) => {
  process.env.NODE_ENV !== "production" && zt("Collapse.Panel").deprecated(!("disabled" in e), "disabled", 'collapsible="disabled"');
  const {
    getPrefixCls: n
  } = u.useContext(Ct), {
    prefixCls: r,
    className: o,
    showArrow: a = !0
  } = e, i = n("collapse", r), l = ne({
    [`${i}-no-arrow`]: !a
  }, o);
  return /* @__PURE__ */ u.createElement(As.Panel, Object.assign({
    ref: t
  }, e, {
    prefixCls: i,
    className: l
  }));
}), f1 = (e) => {
  const {
    componentCls: t,
    contentBg: n,
    padding: r,
    headerBg: o,
    headerPadding: a,
    collapseHeaderPaddingSM: i,
    collapseHeaderPaddingLG: l,
    collapsePanelBorderRadius: s,
    lineWidth: c,
    lineType: d,
    colorBorder: f,
    colorText: v,
    colorTextHeading: h,
    colorTextDisabled: b,
    fontSizeLG: m,
    lineHeight: g,
    lineHeightLG: y,
    marginSM: p,
    paddingSM: S,
    paddingLG: E,
    paddingXS: C,
    motionDurationSlow: x,
    fontSizeIcon: w,
    contentPadding: $,
    fontHeight: O,
    fontHeightLG: R
  } = e, _ = `${oe(c)} ${d} ${f}`;
  return {
    [t]: Object.assign(Object.assign({}, un(e)), {
      backgroundColor: o,
      border: _,
      borderRadius: s,
      "&-rtl": {
        direction: "rtl"
      },
      [`& > ${t}-item`]: {
        borderBottom: _,
        "&:last-child": {
          [`
            &,
            & > ${t}-header`]: {
            borderRadius: `0 0 ${oe(s)} ${oe(s)}`
          }
        },
        [`> ${t}-header`]: {
          position: "relative",
          // Compatible with old version of antd, should remove in next version
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "flex-start",
          padding: a,
          color: h,
          lineHeight: g,
          cursor: "pointer",
          transition: `all ${x}, visibility 0s`,
          [`> ${t}-header-text`]: {
            flex: "auto"
          },
          "&:focus": {
            outline: "none"
          },
          // >>>>> Arrow
          [`${t}-expand-icon`]: {
            height: O,
            display: "flex",
            alignItems: "center",
            paddingInlineEnd: p
          },
          [`${t}-arrow`]: Object.assign(Object.assign({}, Wo()), {
            fontSize: w,
            // when `transform: rotate()` is applied to icon's root element
            transition: `transform ${x}`,
            // when `transform: rotate()` is applied to icon's child element
            svg: {
              transition: `transform ${x}`
            }
          }),
          // >>>>> Text
          [`${t}-header-text`]: {
            marginInlineEnd: "auto"
          }
        },
        [`${t}-icon-collapsible-only`]: {
          cursor: "unset",
          [`${t}-expand-icon`]: {
            cursor: "pointer"
          }
        }
      },
      [`${t}-content`]: {
        color: v,
        backgroundColor: n,
        borderTop: _,
        [`& > ${t}-content-box`]: {
          padding: $
        },
        "&-hidden": {
          display: "none"
        }
      },
      "&-small": {
        [`> ${t}-item`]: {
          [`> ${t}-header`]: {
            padding: i,
            paddingInlineStart: C,
            [`> ${t}-expand-icon`]: {
              // Arrow offset
              marginInlineStart: e.calc(S).sub(C).equal()
            }
          },
          [`> ${t}-content > ${t}-content-box`]: {
            padding: S
          }
        }
      },
      "&-large": {
        [`> ${t}-item`]: {
          fontSize: m,
          lineHeight: y,
          [`> ${t}-header`]: {
            padding: l,
            paddingInlineStart: r,
            [`> ${t}-expand-icon`]: {
              height: R,
              // Arrow offset
              marginInlineStart: e.calc(E).sub(r).equal()
            }
          },
          [`> ${t}-content > ${t}-content-box`]: {
            padding: E
          }
        }
      },
      [`${t}-item:last-child`]: {
        borderBottom: 0,
        [`> ${t}-content`]: {
          borderRadius: `0 0 ${oe(s)} ${oe(s)}`
        }
      },
      [`& ${t}-item-disabled > ${t}-header`]: {
        "\n          &,\n          & > .arrow\n        ": {
          color: b,
          cursor: "not-allowed"
        }
      },
      // ========================== Icon Position ==========================
      [`&${t}-icon-position-end`]: {
        [`& > ${t}-item`]: {
          [`> ${t}-header`]: {
            [`${t}-expand-icon`]: {
              order: 1,
              paddingInlineEnd: 0,
              paddingInlineStart: p
            }
          }
        }
      }
    })
  };
}, v1 = (e) => {
  const {
    componentCls: t
  } = e, n = `> ${t}-item > ${t}-header ${t}-arrow`;
  return {
    [`${t}-rtl`]: {
      [n]: {
        transform: "rotate(180deg)"
      }
    }
  };
}, g1 = (e) => {
  const {
    componentCls: t,
    headerBg: n,
    paddingXXS: r,
    colorBorder: o
  } = e;
  return {
    [`${t}-borderless`]: {
      backgroundColor: n,
      border: 0,
      [`> ${t}-item`]: {
        borderBottom: `1px solid ${o}`
      },
      [`
        > ${t}-item:last-child,
        > ${t}-item:last-child ${t}-header
      `]: {
        borderRadius: 0
      },
      [`> ${t}-item:last-child`]: {
        borderBottom: 0
      },
      [`> ${t}-item > ${t}-content`]: {
        backgroundColor: "transparent",
        borderTop: 0
      },
      [`> ${t}-item > ${t}-content > ${t}-content-box`]: {
        paddingTop: r
      }
    }
  };
}, m1 = (e) => {
  const {
    componentCls: t,
    paddingSM: n
  } = e;
  return {
    [`${t}-ghost`]: {
      backgroundColor: "transparent",
      border: 0,
      [`> ${t}-item`]: {
        borderBottom: 0,
        [`> ${t}-content`]: {
          backgroundColor: "transparent",
          border: 0,
          [`> ${t}-content-box`]: {
            paddingBlock: n
          }
        }
      }
    }
  };
}, h1 = (e) => ({
  headerPadding: `${e.paddingSM}px ${e.padding}px`,
  headerBg: e.colorFillAlter,
  contentPadding: `${e.padding}px 16px`,
  // Fixed Value
  contentBg: e.colorBgContainer
}), p1 = yn("Collapse", (e) => {
  const t = Pt(e, {
    collapseHeaderPaddingSM: `${oe(e.paddingXS)} ${oe(e.paddingSM)}`,
    collapseHeaderPaddingLG: `${oe(e.padding)} ${oe(e.paddingLG)}`,
    collapsePanelBorderRadius: e.borderRadiusLG
  });
  return [f1(t), g1(t), m1(t), v1(t), Ky(t)];
}, h1), Uv = /* @__PURE__ */ u.forwardRef((e, t) => {
  const {
    getPrefixCls: n,
    direction: r,
    collapse: o
  } = u.useContext(Ct), {
    prefixCls: a,
    className: i,
    rootClassName: l,
    style: s,
    bordered: c = !0,
    ghost: d,
    size: f,
    expandIconPosition: v = "start",
    children: h,
    expandIcon: b
  } = e, m = kn((_) => {
    var I;
    return (I = f ?? _) !== null && I !== void 0 ? I : "middle";
  }), g = n("collapse", a), y = n(), [p, S, E] = p1(g);
  if (process.env.NODE_ENV !== "production") {
    const _ = zt("Collapse");
    process.env.NODE_ENV !== "production" && _(v !== "left" && v !== "right", "deprecated", "`expandIconPosition` with `left` or `right` is deprecated. Please use `start` or `end` instead.");
  }
  const C = u.useMemo(() => v === "left" ? "start" : v === "right" ? "end" : v, [v]), x = b ?? (o == null ? void 0 : o.expandIcon), w = u.useCallback(function() {
    let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const I = typeof x == "function" ? x(_) : /* @__PURE__ */ u.createElement(Mv, {
      rotate: _.isActive ? 90 : void 0,
      "aria-label": _.isActive ? "expanded" : "collapsed"
    });
    return mr(I, () => {
      var F;
      return {
        className: ne((F = I == null ? void 0 : I.props) === null || F === void 0 ? void 0 : F.className, `${g}-arrow`)
      };
    });
  }, [x, g]), $ = ne(`${g}-icon-position-${C}`, {
    [`${g}-borderless`]: !c,
    [`${g}-rtl`]: r === "rtl",
    [`${g}-ghost`]: !!d,
    [`${g}-${m}`]: m !== "middle"
  }, o == null ? void 0 : o.className, i, l, S, E), O = Object.assign(Object.assign({}, rb(y)), {
    motionAppear: !1,
    leavedClassName: `${g}-content-hidden`
  }), R = u.useMemo(() => h ? Jn(h).map((_, I) => {
    var F, M;
    if (!((F = _.props) === null || F === void 0) && F.disabled) {
      const V = (M = _.key) !== null && M !== void 0 ? M : String(I), {
        disabled: N,
        collapsible: P
      } = _.props, T = Object.assign(Object.assign({}, gr(_.props, ["disabled"])), {
        key: V,
        collapsible: P ?? (N ? "disabled" : void 0)
      });
      return mr(_, T);
    }
    return _;
  }) : null, [h]);
  return p(
    // @ts-ignore
    /* @__PURE__ */ u.createElement(As, Object.assign({
      ref: t,
      openMotion: O
    }, gr(e, ["rootClassName"]), {
      expandIcon: w,
      prefixCls: g,
      className: $,
      style: Object.assign(Object.assign({}, o == null ? void 0 : o.style), s)
    }), R)
  );
});
process.env.NODE_ENV !== "production" && (Uv.displayName = "Collapse");
const b1 = Object.assign(Uv, {
  Panel: d1
}), Zt = Math.round;
function Di(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = t(r[o] || 0, n[o] || "", o);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const Au = (e, t, n) => n === 0 ? e : e / 100;
function po(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
class ni {
  constructor(t) {
    D(this, "isValid", !0), D(this, "r", 0), D(this, "g", 0), D(this, "b", 0), D(this, "a", 1), D(this, "_h", void 0), D(this, "_s", void 0), D(this, "_l", void 0), D(this, "_v", void 0), D(this, "_max", void 0), D(this, "_min", void 0), D(this, "_brightness", void 0);
    function n(r) {
      return r[0] in t && r[1] in t && r[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(a) {
        return r.startsWith(a);
      };
      const r = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (t instanceof ni)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (n("rgb"))
      this.r = po(t.r), this.g = po(t.g), this.b = po(t.b), this.a = typeof t.a == "number" ? po(t.a, 1) : 1;
    else if (n("hsl"))
      this.fromHsl(t);
    else if (n("hsv"))
      this.fromHsv(t);
    else
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(t));
  }
  // ======================= Setter =======================
  setR(t) {
    return this._sc("r", t);
  }
  setG(t) {
    return this._sc("g", t);
  }
  setB(t) {
    return this._sc("b", t);
  }
  setA(t) {
    return this._sc("a", t, 1);
  }
  setHue(t) {
    const n = this.toHsv();
    return n.h = t, this._c(n);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function t(a) {
      const i = a / 255;
      return i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
    }
    const n = t(this.r), r = t(this.g), o = t(this.b);
    return 0.2126 * n + 0.7152 * r + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = Zt(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._s = 0 : this._s = t / this.getMax();
    }
    return this._s;
  }
  getLightness() {
    return typeof this._l > "u" && (this._l = (this.getMax() + this.getMin()) / 510), this._l;
  }
  getValue() {
    return typeof this._v > "u" && (this._v = this.getMax() / 255), this._v;
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   * Note: this is not the b of HSB
   * @see http://www.w3.org/TR/AERT#color-contrast
   */
  getBrightness() {
    return typeof this._brightness > "u" && (this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3), this._brightness;
  }
  // ======================== Func ========================
  darken(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() - t / 100;
    return o < 0 && (o = 0), this._c({
      h: n,
      s: r,
      l: o,
      a: this.a
    });
  }
  lighten(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() + t / 100;
    return o > 1 && (o = 1), this._c({
      h: n,
      s: r,
      l: o,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, n = 50) {
    const r = this._c(t), o = n / 100, a = (l) => (r[l] - this[l]) * o + this[l], i = {
      r: Zt(a("r")),
      g: Zt(a("g")),
      b: Zt(a("b")),
      a: Zt(a("a") * 100) / 100
    };
    return this._c(i);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(t = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, t);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(t = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, t);
  }
  onBackground(t) {
    const n = this._c(t), r = this.a + n.a * (1 - this.a), o = (a) => Zt((this[a] * this.a + n[a] * n.a * (1 - this.a)) / r);
    return this._c({
      r: o("r"),
      g: o("g"),
      b: o("b"),
      a: r
    });
  }
  // ======================= Status =======================
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return this.getBrightness() >= 128;
  }
  // ======================== MISC ========================
  equals(t) {
    return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let t = "#";
    const n = (this.r || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const r = (this.g || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const o = (this.b || 0).toString(16);
    if (t += o.length === 2 ? o : "0" + o, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const a = Zt(this.a * 255).toString(16);
      t += a.length === 2 ? a : "0" + a;
    }
    return t;
  }
  /** CSS support color pattern */
  toHsl() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      l: this.getLightness(),
      a: this.a
    };
  }
  /** CSS support color pattern */
  toHslString() {
    const t = this.getHue(), n = Zt(this.getSaturation() * 100), r = Zt(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${n}%,${r}%,${this.a})` : `hsl(${t},${n}%,${r}%)`;
  }
  /** Same as toHsb */
  toHsv() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      v: this.getValue(),
      a: this.a
    };
  }
  toRgb() {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a
    };
  }
  toRgbString() {
    return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
  }
  toString() {
    return this.toRgbString();
  }
  // ====================== Privates ======================
  /** Return a new FastColor object with one channel changed */
  _sc(t, n, r) {
    const o = this.clone();
    return o[t] = po(n, r), o;
  }
  _c(t) {
    return new this.constructor(t);
  }
  getMax() {
    return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(t) {
    const n = t.replace("#", "");
    function r(o, a) {
      return parseInt(n[o] + n[a || o], 16);
    }
    n.length < 6 ? (this.r = r(0), this.g = r(1), this.b = r(2), this.a = n[3] ? r(3) / 255 : 1) : (this.r = r(0, 1), this.g = r(2, 3), this.b = r(4, 5), this.a = n[6] ? r(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: n,
    l: r,
    a: o
  }) {
    if (this._h = t % 360, this._s = n, this._l = r, this.a = typeof o == "number" ? o : 1, n <= 0) {
      const v = Zt(r * 255);
      this.r = v, this.g = v, this.b = v;
    }
    let a = 0, i = 0, l = 0;
    const s = t / 60, c = (1 - Math.abs(2 * r - 1)) * n, d = c * (1 - Math.abs(s % 2 - 1));
    s >= 0 && s < 1 ? (a = c, i = d) : s >= 1 && s < 2 ? (a = d, i = c) : s >= 2 && s < 3 ? (i = c, l = d) : s >= 3 && s < 4 ? (i = d, l = c) : s >= 4 && s < 5 ? (a = d, l = c) : s >= 5 && s < 6 && (a = c, l = d);
    const f = r - c / 2;
    this.r = Zt((a + f) * 255), this.g = Zt((i + f) * 255), this.b = Zt((l + f) * 255);
  }
  fromHsv({
    h: t,
    s: n,
    v: r,
    a: o
  }) {
    this._h = t % 360, this._s = n, this._v = r, this.a = typeof o == "number" ? o : 1;
    const a = Zt(r * 255);
    if (this.r = a, this.g = a, this.b = a, n <= 0)
      return;
    const i = t / 60, l = Math.floor(i), s = i - l, c = Zt(r * (1 - n) * 255), d = Zt(r * (1 - n * s) * 255), f = Zt(r * (1 - n * (1 - s)) * 255);
    switch (l) {
      case 0:
        this.g = f, this.b = c;
        break;
      case 1:
        this.r = d, this.b = c;
        break;
      case 2:
        this.r = c, this.b = f;
        break;
      case 3:
        this.r = c, this.g = d;
        break;
      case 4:
        this.r = f, this.g = c;
        break;
      case 5:
      default:
        this.g = c, this.b = d;
        break;
    }
  }
  fromHsvString(t) {
    const n = Di(t, Au);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = Di(t, Au);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(t) {
    const n = Di(t, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? Zt(r / 100 * 255) : r
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
}
var y1 = ["b"], S1 = ["v"], Ai = function(t) {
  return Math.round(Number(t || 0));
}, C1 = function(t) {
  if (t instanceof ni)
    return t;
  if (t && Be(t) === "object" && "h" in t && "b" in t) {
    var n = t, r = n.b, o = yt(n, y1);
    return z(z({}, o), {}, {
      v: r
    });
  }
  return typeof t == "string" && /hsb/.test(t) ? t.replace(/hsb/, "hsv") : t;
}, Hn = /* @__PURE__ */ function(e) {
  hr(n, e);
  var t = pr(n);
  function n(r) {
    return Vt(this, n), t.call(this, C1(r));
  }
  return Bt(n, [{
    key: "toHsbString",
    value: function() {
      var o = this.toHsb(), a = Ai(o.s * 100), i = Ai(o.b * 100), l = Ai(o.h), s = o.a, c = "hsb(".concat(l, ", ").concat(a, "%, ").concat(i, "%)"), d = "hsba(".concat(l, ", ").concat(a, "%, ").concat(i, "%, ").concat(s.toFixed(s === 0 ? 0 : 2), ")");
      return s === 1 ? c : d;
    }
  }, {
    key: "toHsb",
    value: function() {
      var o = this.toHsv(), a = o.v, i = yt(o, S1);
      return z(z({}, i), {}, {
        b: a,
        a: this.a
      });
    }
  }]), n;
}(ni), E1 = "rc-color-picker", Xr = function(t) {
  return t instanceof Hn ? t : new Hn(t);
}, x1 = Xr("#1677ff"), Gv = function(t) {
  var n = t.offset, r = t.targetRef, o = t.containerRef, a = t.color, i = t.type, l = o.current.getBoundingClientRect(), s = l.width, c = l.height, d = r.current.getBoundingClientRect(), f = d.width, v = d.height, h = f / 2, b = v / 2, m = (n.x + h) / s, g = 1 - (n.y + b) / c, y = a.toHsb(), p = m, S = (n.x + h) / s * 360;
  if (i)
    switch (i) {
      case "hue":
        return Xr(z(z({}, y), {}, {
          h: S <= 0 ? 0 : S
        }));
      case "alpha":
        return Xr(z(z({}, y), {}, {
          a: p <= 0 ? 0 : p
        }));
    }
  return Xr({
    h: y.h,
    s: m <= 0 ? 0 : m,
    b: g >= 1 ? 1 : g,
    a: y.a
  });
}, qv = function(t, n) {
  var r = t.toHsb();
  switch (n) {
    case "hue":
      return {
        x: r.h / 360 * 100,
        y: 50
      };
    case "alpha":
      return {
        x: t.a * 100,
        y: 50
      };
    default:
      return {
        x: r.s * 100,
        y: (1 - r.b) * 100
      };
  }
}, Fs = function(t) {
  var n = t.color, r = t.prefixCls, o = t.className, a = t.style, i = t.onClick, l = "".concat(r, "-color-block");
  return /* @__PURE__ */ B.createElement("div", {
    className: ne(l, o),
    style: a,
    onClick: i
  }, /* @__PURE__ */ B.createElement("div", {
    className: "".concat(l, "-inner"),
    style: {
      background: n
    }
  }));
};
function w1(e) {
  var t = "touches" in e ? e.touches[0] : e, n = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, r = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: t.pageX - n,
    pageY: t.pageY - r
  };
}
function Kv(e) {
  var t = e.targetRef, n = e.containerRef, r = e.direction, o = e.onDragChange, a = e.onDragChangeComplete, i = e.calculate, l = e.color, s = e.disabledDrag, c = jt({
    x: 0,
    y: 0
  }), d = K(c, 2), f = d[0], v = d[1], h = ze(null), b = ze(null);
  Mt(function() {
    v(i());
  }, [l]), Mt(function() {
    return function() {
      document.removeEventListener("mousemove", h.current), document.removeEventListener("mouseup", b.current), document.removeEventListener("touchmove", h.current), document.removeEventListener("touchend", b.current), h.current = null, b.current = null;
    };
  }, []);
  var m = function(E) {
    var C = w1(E), x = C.pageX, w = C.pageY, $ = n.current.getBoundingClientRect(), O = $.x, R = $.y, _ = $.width, I = $.height, F = t.current.getBoundingClientRect(), M = F.width, V = F.height, N = M / 2, P = V / 2, T = Math.max(0, Math.min(x - O, _)) - N, j = Math.max(0, Math.min(w - R, I)) - P, H = {
      x: T,
      y: r === "x" ? f.y : j
    };
    if (M === 0 && V === 0 || M !== V)
      return !1;
    o == null || o(H);
  }, g = function(E) {
    E.preventDefault(), m(E);
  }, y = function(E) {
    E.preventDefault(), document.removeEventListener("mousemove", h.current), document.removeEventListener("mouseup", b.current), document.removeEventListener("touchmove", h.current), document.removeEventListener("touchend", b.current), h.current = null, b.current = null, a == null || a();
  }, p = function(E) {
    document.removeEventListener("mousemove", h.current), document.removeEventListener("mouseup", b.current), !s && (m(E), document.addEventListener("mousemove", g), document.addEventListener("mouseup", y), document.addEventListener("touchmove", g), document.addEventListener("touchend", y), h.current = g, b.current = y);
  };
  return [f, p];
}
var Xv = function(t) {
  var n = t.size, r = n === void 0 ? "default" : n, o = t.color, a = t.prefixCls;
  return /* @__PURE__ */ B.createElement("div", {
    className: ne("".concat(a, "-handler"), D({}, "".concat(a, "-handler-sm"), r === "small")),
    style: {
      backgroundColor: o
    }
  });
}, Yv = function(t) {
  var n = t.children, r = t.style, o = t.prefixCls;
  return /* @__PURE__ */ B.createElement("div", {
    className: "".concat(o, "-palette"),
    style: z({
      position: "relative"
    }, r)
  }, n);
}, Qv = /* @__PURE__ */ tr(function(e, t) {
  var n = e.children, r = e.x, o = e.y;
  return /* @__PURE__ */ B.createElement("div", {
    ref: t,
    style: {
      position: "absolute",
      left: "".concat(r, "%"),
      top: "".concat(o, "%"),
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, n);
}), $1 = function(t) {
  var n = t.color, r = t.onChange, o = t.prefixCls, a = t.onChangeComplete, i = t.disabled, l = ze(), s = ze(), c = ze(n), d = $t(function(m) {
    var g = Gv({
      offset: m,
      targetRef: s,
      containerRef: l,
      color: n
    });
    c.current = g, r(g);
  }), f = Kv({
    color: n,
    containerRef: l,
    targetRef: s,
    calculate: function() {
      return qv(n);
    },
    onDragChange: d,
    onDragChangeComplete: function() {
      return a == null ? void 0 : a(c.current);
    },
    disabledDrag: i
  }), v = K(f, 2), h = v[0], b = v[1];
  return /* @__PURE__ */ B.createElement("div", {
    ref: l,
    className: "".concat(o, "-select"),
    onMouseDown: b,
    onTouchStart: b
  }, /* @__PURE__ */ B.createElement(Yv, {
    prefixCls: o
  }, /* @__PURE__ */ B.createElement(Qv, {
    x: h.x,
    y: h.y,
    ref: s
  }, /* @__PURE__ */ B.createElement(Xv, {
    color: n.toRgbString(),
    prefixCls: o
  })), /* @__PURE__ */ B.createElement("div", {
    className: "".concat(o, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(n.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, O1 = function(t, n) {
  var r = Jt(t, {
    value: n
  }), o = K(r, 2), a = o[0], i = o[1], l = an(function() {
    return Xr(a);
  }, [a]);
  return [l, i];
}, R1 = function(t) {
  var n = t.colors, r = t.children, o = t.direction, a = o === void 0 ? "to right" : o, i = t.type, l = t.prefixCls, s = an(function() {
    return n.map(function(c, d) {
      var f = Xr(c);
      return i === "alpha" && d === n.length - 1 && (f = new Hn(f.setA(1))), f.toRgbString();
    }).join(",");
  }, [n, i]);
  return /* @__PURE__ */ B.createElement("div", {
    className: "".concat(l, "-gradient"),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(".concat(a, ", ").concat(s, ")")
    }
  }, r);
}, I1 = function(t) {
  var n = t.prefixCls, r = t.colors, o = t.disabled, a = t.onChange, i = t.onChangeComplete, l = t.color, s = t.type, c = ze(), d = ze(), f = ze(l), v = function(C) {
    return s === "hue" ? C.getHue() : C.a * 100;
  }, h = $t(function(E) {
    var C = Gv({
      offset: E,
      targetRef: d,
      containerRef: c,
      color: l,
      type: s
    });
    f.current = C, a(v(C));
  }), b = Kv({
    color: l,
    targetRef: d,
    containerRef: c,
    calculate: function() {
      return qv(l, s);
    },
    onDragChange: h,
    onDragChangeComplete: function() {
      i(v(f.current));
    },
    direction: "x",
    disabledDrag: o
  }), m = K(b, 2), g = m[0], y = m[1], p = B.useMemo(function() {
    if (s === "hue") {
      var E = l.toHsb();
      E.s = 1, E.b = 1, E.a = 1;
      var C = new Hn(E);
      return C;
    }
    return l;
  }, [l, s]), S = B.useMemo(function() {
    return r.map(function(E) {
      return "".concat(E.color, " ").concat(E.percent, "%");
    });
  }, [r]);
  return /* @__PURE__ */ B.createElement("div", {
    ref: c,
    className: ne("".concat(n, "-slider"), "".concat(n, "-slider-").concat(s)),
    onMouseDown: y,
    onTouchStart: y
  }, /* @__PURE__ */ B.createElement(Yv, {
    prefixCls: n
  }, /* @__PURE__ */ B.createElement(Qv, {
    x: g.x,
    y: g.y,
    ref: d
  }, /* @__PURE__ */ B.createElement(Xv, {
    size: "small",
    color: p.toHexString(),
    prefixCls: n
  })), /* @__PURE__ */ B.createElement(R1, {
    colors: S,
    type: s,
    prefixCls: n
  })));
};
function P1(e) {
  return u.useMemo(function() {
    var t = e || {}, n = t.slider;
    return [n || I1];
  }, [e]);
}
var N1 = [{
  color: "rgb(255, 0, 0)",
  percent: 0
}, {
  color: "rgb(255, 255, 0)",
  percent: 17
}, {
  color: "rgb(0, 255, 0)",
  percent: 33
}, {
  color: "rgb(0, 255, 255)",
  percent: 50
}, {
  color: "rgb(0, 0, 255)",
  percent: 67
}, {
  color: "rgb(255, 0, 255)",
  percent: 83
}, {
  color: "rgb(255, 0, 0)",
  percent: 100
}], Zv = /* @__PURE__ */ tr(function(e, t) {
  var n = e.value, r = e.defaultValue, o = e.prefixCls, a = o === void 0 ? E1 : o, i = e.onChange, l = e.onChangeComplete, s = e.className, c = e.style, d = e.panelRender, f = e.disabledAlpha, v = f === void 0 ? !1 : f, h = e.disabled, b = h === void 0 ? !1 : h, m = e.components, g = P1(m), y = K(g, 1), p = y[0], S = O1(r || x1, n), E = K(S, 2), C = E[0], x = E[1], w = an(function() {
    return C.setA(1).toRgbString();
  }, [C]), $ = function(j, H) {
    n || x(j), i == null || i(j, H);
  }, O = function(j) {
    return new Hn(C.setHue(j));
  }, R = function(j) {
    return new Hn(C.setA(j / 100));
  }, _ = function(j) {
    $(O(j), {
      type: "hue",
      value: j
    });
  }, I = function(j) {
    $(R(j), {
      type: "alpha",
      value: j
    });
  }, F = function(j) {
    l && l(O(j));
  }, M = function(j) {
    l && l(R(j));
  }, V = ne("".concat(a, "-panel"), s, D({}, "".concat(a, "-panel-disabled"), b)), N = {
    prefixCls: a,
    disabled: b,
    color: C
  }, P = /* @__PURE__ */ B.createElement(B.Fragment, null, /* @__PURE__ */ B.createElement($1, ke({
    onChange: $
  }, N, {
    onChangeComplete: l
  })), /* @__PURE__ */ B.createElement("div", {
    className: "".concat(a, "-slider-container")
  }, /* @__PURE__ */ B.createElement("div", {
    className: ne("".concat(a, "-slider-group"), D({}, "".concat(a, "-slider-group-disabled-alpha"), v))
  }, /* @__PURE__ */ B.createElement(p, ke({}, N, {
    type: "hue",
    colors: N1,
    min: 0,
    max: 359,
    value: C.getHue(),
    onChange: _,
    onChangeComplete: F
  })), !v && /* @__PURE__ */ B.createElement(p, ke({}, N, {
    type: "alpha",
    colors: [{
      percent: 0,
      color: "rgba(255, 0, 4, 0)"
    }, {
      percent: 100,
      color: w
    }],
    min: 0,
    max: 100,
    value: C.a * 100,
    onChange: I,
    onChangeComplete: M
  }))), /* @__PURE__ */ B.createElement(Fs, {
    color: C.toRgbString(),
    prefixCls: a
  })));
  return /* @__PURE__ */ B.createElement("div", {
    className: V,
    style: c,
    ref: t
  }, typeof d == "function" ? d(P) : P);
});
process.env.NODE_ENV !== "production" && (Zv.displayName = "ColorPicker");
const yo = (e, t) => (e == null ? void 0 : e.replace(/[^\w/]/gi, "").slice(0, t ? 8 : 6)) || "", M1 = (e, t) => e ? yo(e, t) : "";
let Rn = /* @__PURE__ */ function() {
  function e(t) {
    Vt(this, e);
    var n;
    if (this.cleared = !1, t instanceof e) {
      this.metaColor = t.metaColor.clone(), this.colors = (n = t.colors) === null || n === void 0 ? void 0 : n.map((o) => ({
        color: new e(o.color),
        percent: o.percent
      })), this.cleared = t.cleared;
      return;
    }
    const r = Array.isArray(t);
    r && t.length ? (this.colors = t.map((o) => {
      let {
        color: a,
        percent: i
      } = o;
      return {
        color: new e(a),
        percent: i
      };
    }), this.metaColor = new Hn(this.colors[0].color.metaColor)) : this.metaColor = new Hn(r ? "" : t), (!t || r && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0);
  }
  return Bt(e, [{
    key: "toHsb",
    value: function() {
      return this.metaColor.toHsb();
    }
  }, {
    key: "toHsbString",
    value: function() {
      return this.metaColor.toHsbString();
    }
  }, {
    key: "toHex",
    value: function() {
      return M1(this.toHexString(), this.metaColor.a < 1);
    }
  }, {
    key: "toHexString",
    value: function() {
      return this.metaColor.toHexString();
    }
  }, {
    key: "toRgb",
    value: function() {
      return this.metaColor.toRgb();
    }
  }, {
    key: "toRgbString",
    value: function() {
      return this.metaColor.toRgbString();
    }
  }, {
    key: "isGradient",
    value: function() {
      return !!this.colors && !this.cleared;
    }
  }, {
    key: "getColors",
    value: function() {
      return this.colors || [{
        color: this,
        percent: 0
      }];
    }
  }, {
    key: "toCssString",
    value: function() {
      const {
        colors: n
      } = this;
      return n ? `linear-gradient(90deg, ${n.map((o) => `${o.color.toRgbString()} ${o.percent}%`).join(", ")})` : this.metaColor.toRgbString();
    }
  }, {
    key: "equals",
    value: function(n) {
      return !n || this.isGradient() !== n.isGradient() ? !1 : this.isGradient() ? this.colors.length === n.colors.length && this.colors.every((r, o) => {
        const a = n.colors[o];
        return r.percent === a.percent && r.color.equals(a.color);
      }) : this.toHexString() === n.toHexString();
    }
  }]);
}();
const _1 = (e) => {
  const {
    componentCls: t,
    sizePaddingEdgeHorizontal: n,
    colorSplit: r,
    lineWidth: o,
    textPaddingInline: a,
    orientationMargin: i,
    verticalMarginInline: l
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, un(e)), {
      borderBlockStart: `${oe(o)} solid ${r}`,
      // vertical
      "&-vertical": {
        position: "relative",
        top: "-0.06em",
        display: "inline-block",
        height: "0.9em",
        marginInline: l,
        marginBlock: 0,
        verticalAlign: "middle",
        borderTop: 0,
        borderInlineStart: `${oe(o)} solid ${r}`
      },
      "&-horizontal": {
        display: "flex",
        clear: "both",
        width: "100%",
        minWidth: "100%",
        // Fix https://github.com/ant-design/ant-design/issues/10914
        margin: `${oe(e.dividerHorizontalGutterMargin)} 0`
      },
      [`&-horizontal${t}-with-text`]: {
        display: "flex",
        alignItems: "center",
        margin: `${oe(e.dividerHorizontalWithTextGutterMargin)} 0`,
        color: e.colorTextHeading,
        fontWeight: 500,
        fontSize: e.fontSizeLG,
        whiteSpace: "nowrap",
        textAlign: "center",
        borderBlockStart: `0 ${r}`,
        "&::before, &::after": {
          position: "relative",
          width: "50%",
          borderBlockStart: `${oe(o)} solid transparent`,
          // Chrome not accept `inherit` in `border-top`
          borderBlockStartColor: "inherit",
          borderBlockEnd: 0,
          transform: "translateY(50%)",
          content: "''"
        }
      },
      [`&-horizontal${t}-with-text-left`]: {
        "&::before": {
          width: `calc(${i} * 100%)`
        },
        "&::after": {
          width: `calc(100% - ${i} * 100%)`
        }
      },
      [`&-horizontal${t}-with-text-right`]: {
        "&::before": {
          width: `calc(100% - ${i} * 100%)`
        },
        "&::after": {
          width: `calc(${i} * 100%)`
        }
      },
      [`${t}-inner-text`]: {
        display: "inline-block",
        paddingBlock: 0,
        paddingInline: a
      },
      "&-dashed": {
        background: "none",
        borderColor: r,
        borderStyle: "dashed",
        borderWidth: `${oe(o)} 0 0`
      },
      [`&-horizontal${t}-with-text${t}-dashed`]: {
        "&::before, &::after": {
          borderStyle: "dashed none none"
        }
      },
      [`&-vertical${t}-dashed`]: {
        borderInlineStartWidth: o,
        borderInlineEnd: 0,
        borderBlockStart: 0,
        borderBlockEnd: 0
      },
      "&-dotted": {
        background: "none",
        borderColor: r,
        borderStyle: "dotted",
        borderWidth: `${oe(o)} 0 0`
      },
      [`&-horizontal${t}-with-text${t}-dotted`]: {
        "&::before, &::after": {
          borderStyle: "dotted none none"
        }
      },
      [`&-vertical${t}-dotted`]: {
        borderInlineStartWidth: o,
        borderInlineEnd: 0,
        borderBlockStart: 0,
        borderBlockEnd: 0
      },
      [`&-plain${t}-with-text`]: {
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.fontSize
      },
      [`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]: {
        "&::before": {
          width: 0
        },
        "&::after": {
          width: "100%"
        },
        [`${t}-inner-text`]: {
          paddingInlineStart: n
        }
      },
      [`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]: {
        "&::before": {
          width: "100%"
        },
        "&::after": {
          width: 0
        },
        [`${t}-inner-text`]: {
          paddingInlineEnd: n
        }
      }
    })
  };
}, T1 = (e) => ({
  textPaddingInline: "1em",
  orientationMargin: 0.05,
  verticalMarginInline: e.marginXS
}), D1 = yn("Divider", (e) => {
  const t = Pt(e, {
    dividerHorizontalWithTextGutterMargin: e.margin,
    dividerHorizontalGutterMargin: e.marginLG,
    sizePaddingEdgeHorizontal: 0
  });
  return [_1(t)];
}, T1, {
  unitless: {
    orientationMargin: !0
  }
});
var A1 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Jv = (e) => {
  const {
    getPrefixCls: t,
    direction: n,
    divider: r
  } = u.useContext(Ct), {
    prefixCls: o,
    type: a = "horizontal",
    orientation: i = "center",
    orientationMargin: l,
    className: s,
    rootClassName: c,
    children: d,
    dashed: f,
    variant: v = "solid",
    plain: h,
    style: b
  } = e, m = A1(e, ["prefixCls", "type", "orientation", "orientationMargin", "className", "rootClassName", "children", "dashed", "variant", "plain", "style"]), g = t("divider", o), [y, p, S] = D1(g), E = !!d, C = i === "left" && l != null, x = i === "right" && l != null, w = ne(g, r == null ? void 0 : r.className, p, S, `${g}-${a}`, {
    [`${g}-with-text`]: E,
    [`${g}-with-text-${i}`]: E,
    [`${g}-dashed`]: !!f,
    [`${g}-${v}`]: v !== "solid",
    [`${g}-plain`]: !!h,
    [`${g}-rtl`]: n === "rtl",
    [`${g}-no-default-orientation-margin-left`]: C,
    [`${g}-no-default-orientation-margin-right`]: x
  }, s, c), $ = u.useMemo(() => typeof l == "number" ? l : /^\d+$/.test(l) ? Number(l) : l, [l]), O = Object.assign(Object.assign({}, C && {
    marginLeft: $
  }), x && {
    marginRight: $
  });
  if (process.env.NODE_ENV !== "production") {
    const R = zt("Divider");
    process.env.NODE_ENV !== "production" && R(!d || a !== "vertical", "usage", "`children` not working in `vertical` mode.");
  }
  return y(/* @__PURE__ */ u.createElement("div", Object.assign({
    className: w,
    style: Object.assign(Object.assign({}, r == null ? void 0 : r.style), b)
  }, m, {
    // biome-ignore lint/a11y/useAriaPropsForRole: divider do not need aria-value
    role: "separator"
  }), d && a !== "vertical" && /* @__PURE__ */ u.createElement("span", {
    className: `${g}-inner-text`,
    style: O
  }, d)));
};
process.env.NODE_ENV !== "production" && (Jv.displayName = "Divider");
var Fu = function(t) {
  return t ? {
    left: t.offsetLeft,
    right: t.parentElement.clientWidth - t.clientWidth - t.offsetLeft,
    width: t.clientWidth
  } : null;
}, Br = function(t) {
  return t !== void 0 ? "".concat(t, "px") : void 0;
};
function F1(e) {
  var t = e.prefixCls, n = e.containerRef, r = e.value, o = e.getValueIndex, a = e.motionName, i = e.onMotionStart, l = e.onMotionEnd, s = e.direction, c = u.useRef(null), d = u.useState(r), f = K(d, 2), v = f[0], h = f[1], b = function(F) {
    var M, V = o(F), N = (M = n.current) === null || M === void 0 ? void 0 : M.querySelectorAll(".".concat(t, "-item"))[V];
    return (N == null ? void 0 : N.offsetParent) && N;
  }, m = u.useState(null), g = K(m, 2), y = g[0], p = g[1], S = u.useState(null), E = K(S, 2), C = E[0], x = E[1];
  Rt(function() {
    if (v !== r) {
      var I = b(v), F = b(r), M = Fu(I), V = Fu(F);
      h(r), p(M), x(V), I && F ? i() : l();
    }
  }, [r]);
  var w = u.useMemo(function() {
    return Br(s === "rtl" ? -(y == null ? void 0 : y.right) : y == null ? void 0 : y.left);
  }, [s, y]), $ = u.useMemo(function() {
    return Br(s === "rtl" ? -(C == null ? void 0 : C.right) : C == null ? void 0 : C.left);
  }, [s, C]), O = function() {
    return {
      transform: "translateX(var(--thumb-start-left))",
      width: "var(--thumb-start-width)"
    };
  }, R = function() {
    return {
      transform: "translateX(var(--thumb-active-left))",
      width: "var(--thumb-active-width)"
    };
  }, _ = function() {
    p(null), x(null), l();
  };
  return !y || !C ? null : /* @__PURE__ */ u.createElement(Nr, {
    visible: !0,
    motionName: a,
    motionAppear: !0,
    onAppearStart: O,
    onAppearActive: R,
    onVisibleChanged: _
  }, function(I, F) {
    var M = I.className, V = I.style, N = z(z({}, V), {}, {
      "--thumb-start-left": w,
      "--thumb-start-width": Br(y == null ? void 0 : y.width),
      "--thumb-active-left": $,
      "--thumb-active-width": Br(C == null ? void 0 : C.width)
    }), P = {
      ref: bn(c, F),
      style: N,
      className: ne("".concat(t, "-thumb"), M)
    };
    return process.env.NODE_ENV === "test" && (P["data-test-style"] = JSON.stringify(N)), /* @__PURE__ */ u.createElement("div", P);
  });
}
var j1 = ["prefixCls", "direction", "options", "disabled", "defaultValue", "value", "onChange", "className", "motionName"];
function L1(e) {
  if (typeof e.title < "u")
    return e.title;
  if (Be(e.label) !== "object") {
    var t;
    return (t = e.label) === null || t === void 0 ? void 0 : t.toString();
  }
}
function H1(e) {
  return e.map(function(t) {
    if (Be(t) === "object" && t !== null) {
      var n = L1(t);
      return z(z({}, t), {}, {
        title: n
      });
    }
    return {
      label: t == null ? void 0 : t.toString(),
      title: t == null ? void 0 : t.toString(),
      value: t
    };
  });
}
var z1 = function(t) {
  var n = t.prefixCls, r = t.className, o = t.disabled, a = t.checked, i = t.label, l = t.title, s = t.value, c = t.onChange, d = function(v) {
    o || c(v, s);
  };
  return /* @__PURE__ */ u.createElement("label", {
    className: ne(r, D({}, "".concat(n, "-item-disabled"), o))
  }, /* @__PURE__ */ u.createElement("input", {
    className: "".concat(n, "-item-input"),
    type: "radio",
    disabled: o,
    checked: a,
    onChange: d
  }), /* @__PURE__ */ u.createElement("div", {
    className: "".concat(n, "-item-label"),
    title: l
  }, i));
}, eg = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n, r, o = e.prefixCls, a = o === void 0 ? "rc-segmented" : o, i = e.direction, l = e.options, s = l === void 0 ? [] : l, c = e.disabled, d = e.defaultValue, f = e.value, v = e.onChange, h = e.className, b = h === void 0 ? "" : h, m = e.motionName, g = m === void 0 ? "thumb-motion" : m, y = yt(e, j1), p = u.useRef(null), S = u.useMemo(function() {
    return bn(p, t);
  }, [p, t]), E = u.useMemo(function() {
    return H1(s);
  }, [s]), C = Jt((n = E[0]) === null || n === void 0 ? void 0 : n.value, {
    value: f,
    defaultValue: d
  }), x = K(C, 2), w = x[0], $ = x[1], O = u.useState(!1), R = K(O, 2), _ = R[0], I = R[1], F = function(N, P) {
    c || ($(P), v == null || v(P));
  }, M = gr(y, ["children"]);
  return /* @__PURE__ */ u.createElement("div", ke({}, M, {
    className: ne(a, (r = {}, D(r, "".concat(a, "-rtl"), i === "rtl"), D(r, "".concat(a, "-disabled"), c), r), b),
    ref: S
  }), /* @__PURE__ */ u.createElement("div", {
    className: "".concat(a, "-group")
  }, /* @__PURE__ */ u.createElement(F1, {
    prefixCls: a,
    value: w,
    containerRef: p,
    motionName: "".concat(a, "-").concat(g),
    direction: i,
    getValueIndex: function(N) {
      return E.findIndex(function(P) {
        return P.value === N;
      });
    },
    onMotionStart: function() {
      I(!0);
    },
    onMotionEnd: function() {
      I(!1);
    }
  }), E.map(function(V) {
    return /* @__PURE__ */ u.createElement(z1, ke({}, V, {
      key: V.value,
      prefixCls: a,
      className: ne(V.className, "".concat(a, "-item"), D({}, "".concat(a, "-item-selected"), V.value === w && !_)),
      checked: V.value === w,
      onChange: F,
      disabled: !!c || !!V.disabled
    }));
  })));
});
process.env.NODE_ENV !== "production" && (eg.displayName = "Segmented");
var V1 = eg;
function ju(e, t) {
  return {
    [`${e}, ${e}:hover, ${e}:focus`]: {
      color: t.colorTextDisabled,
      cursor: "not-allowed"
    }
  };
}
function Lu(e) {
  return {
    backgroundColor: e.itemSelectedBg,
    boxShadow: e.boxShadowTertiary
  };
}
const B1 = Object.assign({
  overflow: "hidden"
}, Ma), W1 = (e) => {
  const {
    componentCls: t
  } = e, n = e.calc(e.controlHeight).sub(e.calc(e.trackPadding).mul(2)).equal(), r = e.calc(e.controlHeightLG).sub(e.calc(e.trackPadding).mul(2)).equal(), o = e.calc(e.controlHeightSM).sub(e.calc(e.trackPadding).mul(2)).equal();
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, un(e)), {
      display: "inline-block",
      padding: e.trackPadding,
      color: e.itemColor,
      background: e.trackBg,
      borderRadius: e.borderRadius,
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      [`${t}-group`]: {
        position: "relative",
        display: "flex",
        alignItems: "stretch",
        justifyItems: "flex-start",
        width: "100%"
      },
      // RTL styles
      [`&${t}-rtl`]: {
        direction: "rtl"
      },
      // block styles
      [`&${t}-block`]: {
        display: "flex"
      },
      [`&${t}-block ${t}-item`]: {
        flex: 1,
        minWidth: 0
      },
      // item styles
      [`${t}-item`]: {
        position: "relative",
        textAlign: "center",
        cursor: "pointer",
        transition: `color ${e.motionDurationMid} ${e.motionEaseInOut}`,
        borderRadius: e.borderRadiusSM,
        // Fix Safari render bug
        // https://github.com/ant-design/ant-design/issues/45250
        transform: "translateZ(0)",
        "&-selected": Object.assign(Object.assign({}, Lu(e)), {
          color: e.itemSelectedColor
        }),
        "&::after": {
          content: '""',
          position: "absolute",
          zIndex: -1,
          width: "100%",
          height: "100%",
          top: 0,
          insetInlineStart: 0,
          borderRadius: "inherit",
          transition: `background-color ${e.motionDurationMid}`,
          // This is mandatory to make it not clickable or hoverable
          // Ref: https://github.com/ant-design/ant-design/issues/40888
          pointerEvents: "none"
        },
        [`&:hover:not(${t}-item-selected):not(${t}-item-disabled)`]: {
          color: e.itemHoverColor,
          "&::after": {
            backgroundColor: e.itemHoverBg
          }
        },
        [`&:active:not(${t}-item-selected):not(${t}-item-disabled)`]: {
          color: e.itemHoverColor,
          "&::after": {
            backgroundColor: e.itemActiveBg
          }
        },
        "&-label": Object.assign({
          minHeight: n,
          lineHeight: oe(n),
          padding: `0 ${oe(e.segmentedPaddingHorizontal)}`
        }, B1),
        // syntactic sugar to add `icon` for Segmented Item
        "&-icon + *": {
          marginInlineStart: e.calc(e.marginSM).div(2).equal()
        },
        "&-input": {
          position: "absolute",
          insetBlockStart: 0,
          insetInlineStart: 0,
          width: 0,
          height: 0,
          opacity: 0,
          pointerEvents: "none"
        }
      },
      // thumb styles
      [`${t}-thumb`]: Object.assign(Object.assign({}, Lu(e)), {
        position: "absolute",
        insetBlockStart: 0,
        insetInlineStart: 0,
        width: 0,
        height: "100%",
        padding: `${oe(e.paddingXXS)} 0`,
        borderRadius: e.borderRadiusSM,
        [`& ~ ${t}-item:not(${t}-item-selected):not(${t}-item-disabled)::after`]: {
          backgroundColor: "transparent"
        }
      }),
      // size styles
      [`&${t}-lg`]: {
        borderRadius: e.borderRadiusLG,
        [`${t}-item-label`]: {
          minHeight: r,
          lineHeight: oe(r),
          padding: `0 ${oe(e.segmentedPaddingHorizontal)}`,
          fontSize: e.fontSizeLG
        },
        [`${t}-item, ${t}-thumb`]: {
          borderRadius: e.borderRadius
        }
      },
      [`&${t}-sm`]: {
        borderRadius: e.borderRadiusSM,
        [`${t}-item-label`]: {
          minHeight: o,
          lineHeight: oe(o),
          padding: `0 ${oe(e.segmentedPaddingHorizontalSM)}`
        },
        [`${t}-item, ${t}-thumb`]: {
          borderRadius: e.borderRadiusXS
        }
      }
    }), ju(`&-disabled ${t}-item`, e)), ju(`${t}-item-disabled`, e)), {
      // transition effect when `appear-active`
      [`${t}-thumb-motion-appear-active`]: {
        transition: `transform ${e.motionDurationSlow} ${e.motionEaseInOut}, width ${e.motionDurationSlow} ${e.motionEaseInOut}`,
        willChange: "transform, width"
      }
    })
  };
}, k1 = (e) => {
  const {
    colorTextLabel: t,
    colorText: n,
    colorFillSecondary: r,
    colorBgElevated: o,
    colorFill: a,
    lineWidthBold: i,
    colorBgLayout: l
  } = e;
  return {
    trackPadding: i,
    trackBg: l,
    itemColor: t,
    itemHoverColor: n,
    itemHoverBg: r,
    itemSelectedBg: o,
    itemActiveBg: a,
    itemSelectedColor: n
  };
}, U1 = yn("Segmented", (e) => {
  const {
    lineWidth: t,
    calc: n
  } = e, r = Pt(e, {
    segmentedPaddingHorizontal: n(e.controlPaddingHorizontal).sub(t).equal(),
    segmentedPaddingHorizontalSM: n(e.controlPaddingHorizontalSM).sub(t).equal()
  });
  return [W1(r)];
}, k1);
var Hu = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function G1(e) {
  return typeof e == "object" && !!(e != null && e.icon);
}
const q1 = /* @__PURE__ */ u.forwardRef((e, t) => {
  const {
    prefixCls: n,
    className: r,
    rootClassName: o,
    block: a,
    options: i = [],
    size: l = "middle",
    style: s
  } = e, c = Hu(e, ["prefixCls", "className", "rootClassName", "block", "options", "size", "style"]), {
    getPrefixCls: d,
    direction: f,
    segmented: v
  } = u.useContext(Ct), h = d("segmented", n), [b, m, g] = U1(h), y = kn(l), p = u.useMemo(() => i.map((C) => {
    if (G1(C)) {
      const {
        icon: x,
        label: w
      } = C, $ = Hu(C, ["icon", "label"]);
      return Object.assign(Object.assign({}, $), {
        label: /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement("span", {
          className: `${h}-item-icon`
        }, x), w && /* @__PURE__ */ u.createElement("span", null, w))
      });
    }
    return C;
  }), [i, h]), S = ne(r, o, v == null ? void 0 : v.className, {
    [`${h}-block`]: a,
    [`${h}-sm`]: y === "small",
    [`${h}-lg`]: y === "large"
  }, m, g), E = Object.assign(Object.assign({}, v == null ? void 0 : v.style), s);
  return b(/* @__PURE__ */ u.createElement(V1, Object.assign({}, c, {
    className: S,
    style: E,
    options: p,
    ref: t,
    prefixCls: h,
    direction: f
  })));
}), tg = q1;
process.env.NODE_ENV !== "production" && (tg.displayName = "Segmented");
const ng = /* @__PURE__ */ B.createContext({}), rg = /* @__PURE__ */ B.createContext({}), sn = (e) => e instanceof Rn ? e : new Rn(e), xa = (e) => Math.round(Number(e || 0)), js = (e) => xa(e.toHsb().a * 100), wa = (e, t) => {
  const n = e.toHsb();
  return n.a = 1, sn(n);
}, og = (e, t) => {
  const n = [{
    percent: 0,
    color: e[0].color
  }].concat(Ce(e), [{
    percent: 100,
    color: e[e.length - 1].color
  }]);
  for (let r = 0; r < n.length - 1; r += 1) {
    const o = n[r].percent, a = n[r + 1].percent, i = n[r].color, l = n[r + 1].color;
    if (o <= t && t <= a) {
      const s = a - o;
      if (s === 0)
        return i;
      const c = (t - o) / s * 100, d = new Hn(i), f = new Hn(l);
      return d.mix(f, c).toRgbString();
    }
  }
  return "";
}, ag = (e) => {
  let {
    prefixCls: t,
    value: n,
    onChange: r
  } = e;
  const o = () => {
    if (r && n && !n.cleared) {
      const a = n.toHsb();
      a.a = 0;
      const i = sn(a);
      i.cleared = !0, r(i);
    }
  };
  return /* @__PURE__ */ B.createElement("div", {
    className: `${t}-clear`,
    onClick: o
  });
};
var fr;
(function(e) {
  e.hex = "hex", e.rgb = "rgb", e.hsb = "hsb";
})(fr || (fr = {}));
var K1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" } }] }, name: "up", theme: "outlined" }, X1 = function(t, n) {
  return /* @__PURE__ */ u.createElement(Sn, ke({}, t, {
    ref: n,
    icon: K1
  }));
}, ig = /* @__PURE__ */ u.forwardRef(X1);
process.env.NODE_ENV !== "production" && (ig.displayName = "UpOutlined");
function kl() {
  return typeof BigInt == "function";
}
function lg(e) {
  return !e && e !== 0 && !Number.isNaN(e) || !String(e).trim();
}
function Or(e) {
  var t = e.trim(), n = t.startsWith("-");
  n && (t = t.slice(1)), t = t.replace(/(\.\d*[^0])0*$/, "$1").replace(/\.0*$/, "").replace(/^0+/, ""), t.startsWith(".") && (t = "0".concat(t));
  var r = t || "0", o = r.split("."), a = o[0] || "0", i = o[1] || "0";
  a === "0" && i === "0" && (n = !1);
  var l = n ? "-" : "";
  return {
    negative: n,
    negativeStr: l,
    trimStr: r,
    integerStr: a,
    decimalStr: i,
    fullStr: "".concat(l).concat(r)
  };
}
function Ls(e) {
  var t = String(e);
  return !Number.isNaN(Number(t)) && t.includes("e");
}
function wr(e) {
  var t = String(e);
  if (Ls(e)) {
    var n = Number(t.slice(t.indexOf("e-") + 2)), r = t.match(/\.(\d+)/);
    return r != null && r[1] && (n += r[1].length), n;
  }
  return t.includes(".") && Hs(t) ? t.length - t.indexOf(".") - 1 : 0;
}
function ri(e) {
  var t = String(e);
  if (Ls(e)) {
    if (e > Number.MAX_SAFE_INTEGER)
      return String(kl() ? BigInt(e).toString() : Number.MAX_SAFE_INTEGER);
    if (e < Number.MIN_SAFE_INTEGER)
      return String(kl() ? BigInt(e).toString() : Number.MIN_SAFE_INTEGER);
    t = e.toFixed(wr(t));
  }
  return Or(t).fullStr;
}
function Hs(e) {
  return typeof e == "number" ? !Number.isNaN(e) : e ? (
    // Normal type: 11.28
    /^\s*-?\d+(\.\d+)?\s*$/.test(e) || // Pre-number: 1.
    /^\s*-?\d+\.\s*$/.test(e) || // Post-number: .1
    /^\s*-?\.\d+\s*$/.test(e)
  ) : !1;
}
var Y1 = /* @__PURE__ */ function() {
  function e(t) {
    if (Vt(this, e), D(this, "origin", ""), D(this, "negative", void 0), D(this, "integer", void 0), D(this, "decimal", void 0), D(this, "decimalLen", void 0), D(this, "empty", void 0), D(this, "nan", void 0), lg(t)) {
      this.empty = !0;
      return;
    }
    if (this.origin = String(t), t === "-" || Number.isNaN(t)) {
      this.nan = !0;
      return;
    }
    var n = t;
    if (Ls(n) && (n = Number(n)), n = typeof n == "string" ? n : ri(n), Hs(n)) {
      var r = Or(n);
      this.negative = r.negative;
      var o = r.trimStr.split(".");
      this.integer = BigInt(o[0]);
      var a = o[1] || "0";
      this.decimal = BigInt(a), this.decimalLen = a.length;
    } else
      this.nan = !0;
  }
  return Bt(e, [{
    key: "getMark",
    value: function() {
      return this.negative ? "-" : "";
    }
  }, {
    key: "getIntegerStr",
    value: function() {
      return this.integer.toString();
    }
    /**
     * @private get decimal string
     */
  }, {
    key: "getDecimalStr",
    value: function() {
      return this.decimal.toString().padStart(this.decimalLen, "0");
    }
    /**
     * @private Align BigIntDecimal with same decimal length. e.g. 12.3 + 5 = 1230000
     * This is used for add function only.
     */
  }, {
    key: "alignDecimal",
    value: function(n) {
      var r = "".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(n, "0"));
      return BigInt(r);
    }
  }, {
    key: "negate",
    value: function() {
      var n = new e(this.toString());
      return n.negative = !n.negative, n;
    }
  }, {
    key: "cal",
    value: function(n, r, o) {
      var a = Math.max(this.getDecimalStr().length, n.getDecimalStr().length), i = this.alignDecimal(a), l = n.alignDecimal(a), s = r(i, l).toString(), c = o(a), d = Or(s), f = d.negativeStr, v = d.trimStr, h = "".concat(f).concat(v.padStart(c + 1, "0"));
      return new e("".concat(h.slice(0, -c), ".").concat(h.slice(-c)));
    }
  }, {
    key: "add",
    value: function(n) {
      if (this.isInvalidate())
        return new e(n);
      var r = new e(n);
      return r.isInvalidate() ? this : this.cal(r, function(o, a) {
        return o + a;
      }, function(o) {
        return o;
      });
    }
  }, {
    key: "multi",
    value: function(n) {
      var r = new e(n);
      return this.isInvalidate() || r.isInvalidate() ? new e(NaN) : this.cal(r, function(o, a) {
        return o * a;
      }, function(o) {
        return o * 2;
      });
    }
  }, {
    key: "isEmpty",
    value: function() {
      return this.empty;
    }
  }, {
    key: "isNaN",
    value: function() {
      return this.nan;
    }
  }, {
    key: "isInvalidate",
    value: function() {
      return this.isEmpty() || this.isNaN();
    }
  }, {
    key: "equals",
    value: function(n) {
      return this.toString() === (n == null ? void 0 : n.toString());
    }
  }, {
    key: "lessEquals",
    value: function(n) {
      return this.add(n.negate().toString()).toNumber() <= 0;
    }
  }, {
    key: "toNumber",
    value: function() {
      return this.isNaN() ? NaN : Number(this.toString());
    }
  }, {
    key: "toString",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      return n ? this.isInvalidate() ? "" : Or("".concat(this.getMark()).concat(this.getIntegerStr(), ".").concat(this.getDecimalStr())).fullStr : this.origin;
    }
  }]), e;
}(), Q1 = /* @__PURE__ */ function() {
  function e(t) {
    if (Vt(this, e), D(this, "origin", ""), D(this, "number", void 0), D(this, "empty", void 0), lg(t)) {
      this.empty = !0;
      return;
    }
    this.origin = String(t), this.number = Number(t);
  }
  return Bt(e, [{
    key: "negate",
    value: function() {
      return new e(-this.toNumber());
    }
  }, {
    key: "add",
    value: function(n) {
      if (this.isInvalidate())
        return new e(n);
      var r = Number(n);
      if (Number.isNaN(r))
        return this;
      var o = this.number + r;
      if (o > Number.MAX_SAFE_INTEGER)
        return new e(Number.MAX_SAFE_INTEGER);
      if (o < Number.MIN_SAFE_INTEGER)
        return new e(Number.MIN_SAFE_INTEGER);
      var a = Math.max(wr(this.number), wr(r));
      return new e(o.toFixed(a));
    }
  }, {
    key: "multi",
    value: function(n) {
      var r = Number(n);
      if (this.isInvalidate() || Number.isNaN(r))
        return new e(NaN);
      var o = this.number * r;
      if (o > Number.MAX_SAFE_INTEGER)
        return new e(Number.MAX_SAFE_INTEGER);
      if (o < Number.MIN_SAFE_INTEGER)
        return new e(Number.MIN_SAFE_INTEGER);
      var a = Math.max(wr(this.number), wr(r));
      return new e(o.toFixed(a));
    }
  }, {
    key: "isEmpty",
    value: function() {
      return this.empty;
    }
  }, {
    key: "isNaN",
    value: function() {
      return Number.isNaN(this.number);
    }
  }, {
    key: "isInvalidate",
    value: function() {
      return this.isEmpty() || this.isNaN();
    }
  }, {
    key: "equals",
    value: function(n) {
      return this.toNumber() === (n == null ? void 0 : n.toNumber());
    }
  }, {
    key: "lessEquals",
    value: function(n) {
      return this.add(n.negate().toString()).toNumber() <= 0;
    }
  }, {
    key: "toNumber",
    value: function() {
      return this.number;
    }
  }, {
    key: "toString",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      return n ? this.isInvalidate() ? "" : ri(this.number) : this.origin;
    }
  }]), e;
}();
function Tn(e) {
  return kl() ? new Y1(e) : new Q1(e);
}
function $a(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (e === "")
    return "";
  var o = Or(e), a = o.negativeStr, i = o.integerStr, l = o.decimalStr, s = "".concat(t).concat(l), c = "".concat(a).concat(i);
  if (n >= 0) {
    var d = Number(l[n]);
    if (d >= 5 && !r) {
      var f = Tn(e).add("".concat(a, "0.").concat("0".repeat(n)).concat(10 - d));
      return $a(f.toString(), t, n, r);
    }
    return n === 0 ? c : "".concat(c).concat(t).concat(l.padEnd(n, "0").slice(0, n));
  }
  return s === ".0" ? c : "".concat(c).concat(s);
}
function Z1(e) {
  return !!(e.addonBefore || e.addonAfter);
}
function J1(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
function zu(e, t, n) {
  var r = t.cloneNode(!0), o = Object.create(e, {
    target: {
      value: r
    },
    currentTarget: {
      value: r
    }
  });
  return r.value = n, typeof t.selectionStart == "number" && typeof t.selectionEnd == "number" && (r.selectionStart = t.selectionStart, r.selectionEnd = t.selectionEnd), r.setSelectionRange = function() {
    t.setSelectionRange.apply(t, arguments);
  }, o;
}
function Ha(e, t, n, r) {
  if (n) {
    var o = t;
    if (t.type === "click") {
      o = zu(t, e, ""), n(o);
      return;
    }
    if (e.type !== "file" && r !== void 0) {
      o = zu(t, e, r), n(o);
      return;
    }
    n(o);
  }
}
function sg(e, t) {
  if (e) {
    e.focus(t);
    var n = t || {}, r = n.cursor;
    if (r) {
      var o = e.value.length;
      switch (r) {
        case "start":
          e.setSelectionRange(0, 0);
          break;
        case "end":
          e.setSelectionRange(o, o);
          break;
        default:
          e.setSelectionRange(0, o);
      }
    }
  }
}
var zs = /* @__PURE__ */ B.forwardRef(function(e, t) {
  var n, r, o = e.inputElement, a = e.children, i = e.prefixCls, l = e.prefix, s = e.suffix, c = e.addonBefore, d = e.addonAfter, f = e.className, v = e.style, h = e.disabled, b = e.readOnly, m = e.focused, g = e.triggerFocus, y = e.allowClear, p = e.value, S = e.handleReset, E = e.hidden, C = e.classes, x = e.classNames, w = e.dataAttrs, $ = e.styles, O = e.components, R = e.onClear, _ = a ?? o, I = (O == null ? void 0 : O.affixWrapper) || "span", F = (O == null ? void 0 : O.groupWrapper) || "span", M = (O == null ? void 0 : O.wrapper) || "span", V = (O == null ? void 0 : O.groupAddon) || "span", N = ze(null), P = function(W) {
    var ae;
    (ae = N.current) !== null && ae !== void 0 && ae.contains(W.target) && (g == null || g());
  }, T = J1(e), j = /* @__PURE__ */ _g(_, {
    value: p,
    className: ne(_.props.className, !T && (x == null ? void 0 : x.variant)) || null
  }), H = ze(null);
  if (B.useImperativeHandle(t, function() {
    return {
      nativeElement: H.current || N.current
    };
  }), T) {
    var L = null;
    if (y) {
      var q = !h && !b && p, k = "".concat(i, "-clear-icon"), U = Be(y) === "object" && y !== null && y !== void 0 && y.clearIcon ? y.clearIcon : "✖";
      L = /* @__PURE__ */ B.createElement("span", {
        onClick: function(W) {
          S == null || S(W), R == null || R();
        },
        onMouseDown: function(W) {
          return W.preventDefault();
        },
        className: ne(k, D(D({}, "".concat(k, "-hidden"), !q), "".concat(k, "-has-suffix"), !!s)),
        role: "button",
        tabIndex: -1
      }, U);
    }
    var G = "".concat(i, "-affix-wrapper"), le = ne(G, D(D(D(D(D({}, "".concat(i, "-disabled"), h), "".concat(G, "-disabled"), h), "".concat(G, "-focused"), m), "".concat(G, "-readonly"), b), "".concat(G, "-input-with-clear-btn"), s && y && p), C == null ? void 0 : C.affixWrapper, x == null ? void 0 : x.affixWrapper, x == null ? void 0 : x.variant), Y = (s || y) && /* @__PURE__ */ B.createElement("span", {
      className: ne("".concat(i, "-suffix"), x == null ? void 0 : x.suffix),
      style: $ == null ? void 0 : $.suffix
    }, L, s);
    j = /* @__PURE__ */ B.createElement(I, ke({
      className: le,
      style: $ == null ? void 0 : $.affixWrapper,
      onClick: P
    }, w == null ? void 0 : w.affixWrapper, {
      ref: N
    }), l && /* @__PURE__ */ B.createElement("span", {
      className: ne("".concat(i, "-prefix"), x == null ? void 0 : x.prefix),
      style: $ == null ? void 0 : $.prefix
    }, l), j, Y);
  }
  if (Z1(e)) {
    var Q = "".concat(i, "-group"), pe = "".concat(Q, "-addon"), Z = "".concat(Q, "-wrapper"), X = ne("".concat(i, "-wrapper"), Q, C == null ? void 0 : C.wrapper, x == null ? void 0 : x.wrapper), te = ne(Z, D({}, "".concat(Z, "-disabled"), h), C == null ? void 0 : C.group, x == null ? void 0 : x.groupWrapper);
    j = /* @__PURE__ */ B.createElement(F, {
      className: te,
      ref: H
    }, /* @__PURE__ */ B.createElement(M, {
      className: X
    }, c && /* @__PURE__ */ B.createElement(V, {
      className: pe
    }, c), j, d && /* @__PURE__ */ B.createElement(V, {
      className: pe
    }, d)));
  }
  return /* @__PURE__ */ B.cloneElement(j, {
    className: ne((n = j.props) === null || n === void 0 ? void 0 : n.className, f) || null,
    style: z(z({}, (r = j.props) === null || r === void 0 ? void 0 : r.style), v),
    hidden: E
  });
}), ex = ["show"];
function cg(e, t) {
  return u.useMemo(function() {
    var n = {};
    t && (n.show = Be(t) === "object" && t.formatter ? t.formatter : !!t), n = z(z({}, n), e);
    var r = n, o = r.show, a = yt(r, ex);
    return z(z({}, a), {}, {
      show: !!o,
      showFormatter: typeof o == "function" ? o : void 0,
      strategy: a.strategy || function(i) {
        return i.length;
      }
    });
  }, [e, t]);
}
var tx = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "onKeyUp", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "count", "type", "classes", "classNames", "styles", "onCompositionStart", "onCompositionEnd"], nx = /* @__PURE__ */ tr(function(e, t) {
  var n = e.autoComplete, r = e.onChange, o = e.onFocus, a = e.onBlur, i = e.onPressEnter, l = e.onKeyDown, s = e.onKeyUp, c = e.prefixCls, d = c === void 0 ? "rc-input" : c, f = e.disabled, v = e.htmlSize, h = e.className, b = e.maxLength, m = e.suffix, g = e.showCount, y = e.count, p = e.type, S = p === void 0 ? "text" : p, E = e.classes, C = e.classNames, x = e.styles, w = e.onCompositionStart, $ = e.onCompositionEnd, O = yt(e, tx), R = jt(!1), _ = K(R, 2), I = _[0], F = _[1], M = ze(!1), V = ze(!1), N = ze(null), P = ze(null), T = function(re) {
    N.current && sg(N.current, re);
  }, j = Jt(e.defaultValue, {
    value: e.value
  }), H = K(j, 2), L = H[0], q = H[1], k = L == null ? "" : String(L), U = jt(null), G = K(U, 2), le = G[0], Y = G[1], Q = cg(y, g), pe = Q.max || b, Z = Q.strategy(k), X = !!pe && Z > pe;
  Xl(t, function() {
    var J;
    return {
      focus: T,
      blur: function() {
        var ge;
        (ge = N.current) === null || ge === void 0 || ge.blur();
      },
      setSelectionRange: function(ge, be, Ie) {
        var Me;
        (Me = N.current) === null || Me === void 0 || Me.setSelectionRange(ge, be, Ie);
      },
      select: function() {
        var ge;
        (ge = N.current) === null || ge === void 0 || ge.select();
      },
      input: N.current,
      nativeElement: ((J = P.current) === null || J === void 0 ? void 0 : J.nativeElement) || N.current
    };
  }), Mt(function() {
    F(function(J) {
      return J && f ? !1 : J;
    });
  }, [f]);
  var te = function(re, ge, be) {
    var Ie = ge;
    if (!M.current && Q.exceedFormatter && Q.max && Q.strategy(ge) > Q.max) {
      if (Ie = Q.exceedFormatter(ge, {
        max: Q.max
      }), ge !== Ie) {
        var Me, Ue;
        Y([((Me = N.current) === null || Me === void 0 ? void 0 : Me.selectionStart) || 0, ((Ue = N.current) === null || Ue === void 0 ? void 0 : Ue.selectionEnd) || 0]);
      }
    } else if (be.source === "compositionEnd")
      return;
    q(Ie), N.current && Ha(N.current, re, r, Ie);
  };
  Mt(function() {
    if (le) {
      var J;
      (J = N.current) === null || J === void 0 || J.setSelectionRange.apply(J, Ce(le));
    }
  }, [le]);
  var fe = function(re) {
    te(re, re.target.value, {
      source: "change"
    });
  }, W = function(re) {
    M.current = !1, te(re, re.currentTarget.value, {
      source: "compositionEnd"
    }), $ == null || $(re);
  }, ae = function(re) {
    i && re.key === "Enter" && !V.current && (V.current = !0, i(re)), l == null || l(re);
  }, ie = function(re) {
    re.key === "Enter" && (V.current = !1), s == null || s(re);
  }, ue = function(re) {
    F(!0), o == null || o(re);
  }, ve = function(re) {
    F(!1), a == null || a(re);
  }, $e = function(re) {
    q(""), T(), N.current && Ha(N.current, re, r);
  }, Re = X && "".concat(d, "-out-of-range"), Se = function() {
    var re = gr(e, [
      "prefixCls",
      "onPressEnter",
      "addonBefore",
      "addonAfter",
      "prefix",
      "suffix",
      "allowClear",
      // Input elements must be either controlled or uncontrolled,
      // specify either the value prop, or the defaultValue prop, but not both.
      "defaultValue",
      "showCount",
      "count",
      "classes",
      "htmlSize",
      "styles",
      "classNames",
      "onClear"
    ]);
    return /* @__PURE__ */ B.createElement("input", ke({
      autoComplete: n
    }, re, {
      onChange: fe,
      onFocus: ue,
      onBlur: ve,
      onKeyDown: ae,
      onKeyUp: ie,
      className: ne(d, D({}, "".concat(d, "-disabled"), f), C == null ? void 0 : C.input),
      style: x == null ? void 0 : x.input,
      ref: N,
      size: v,
      type: S,
      onCompositionStart: function(be) {
        M.current = !0, w == null || w(be);
      },
      onCompositionEnd: W
    }));
  }, _e = function() {
    var re = Number(pe) > 0;
    if (m || Q.show) {
      var ge = Q.showFormatter ? Q.showFormatter({
        value: k,
        count: Z,
        maxLength: pe
      }) : "".concat(Z).concat(re ? " / ".concat(pe) : "");
      return /* @__PURE__ */ B.createElement(B.Fragment, null, Q.show && /* @__PURE__ */ B.createElement("span", {
        className: ne("".concat(d, "-show-count-suffix"), D({}, "".concat(d, "-show-count-has-suffix"), !!m), C == null ? void 0 : C.count),
        style: z({}, x == null ? void 0 : x.count)
      }, ge), m);
    }
    return null;
  };
  return /* @__PURE__ */ B.createElement(zs, ke({}, O, {
    prefixCls: d,
    className: ne(h, Re),
    handleReset: $e,
    value: k,
    focused: I,
    triggerFocus: T,
    suffix: _e(),
    disabled: f,
    classes: E,
    classNames: C,
    styles: x
  }), Se());
});
function rx(e, t) {
  return typeof Proxy < "u" && e ? new Proxy(e, {
    get: function(r, o) {
      if (t[o])
        return t[o];
      var a = r[o];
      return typeof a == "function" ? a.bind(r) : a;
    }
  }) : e;
}
function ox(e, t) {
  var n = ze(null);
  function r() {
    try {
      var a = e.selectionStart, i = e.selectionEnd, l = e.value, s = l.substring(0, a), c = l.substring(i);
      n.current = {
        start: a,
        end: i,
        value: l,
        beforeTxt: s,
        afterTxt: c
      };
    } catch {
    }
  }
  function o() {
    if (e && n.current && t)
      try {
        var a = e.value, i = n.current, l = i.beforeTxt, s = i.afterTxt, c = i.start, d = a.length;
        if (a.startsWith(l))
          d = l.length;
        else if (a.endsWith(s))
          d = a.length - n.current.afterTxt.length;
        else {
          var f = l[c - 1], v = a.indexOf(f, c - 1);
          v !== -1 && (d = v + 1);
        }
        e.setSelectionRange(d, d);
      } catch (h) {
        ut(!1, "Something warning of cursor restore. Please fire issue about this: ".concat(h.message));
      }
  }
  return [r, o];
}
var ax = function() {
  var t = jt(!1), n = K(t, 2), r = n[0], o = n[1];
  return Rt(function() {
    o(bs());
  }, []), r;
}, ix = 200, lx = 600;
function sx(e) {
  var t = e.prefixCls, n = e.upNode, r = e.downNode, o = e.upDisabled, a = e.downDisabled, i = e.onStep, l = u.useRef(), s = u.useRef([]), c = u.useRef();
  c.current = i;
  var d = function() {
    clearTimeout(l.current);
  }, f = function(S, E) {
    S.preventDefault(), d(), c.current(E);
    function C() {
      c.current(E), l.current = setTimeout(C, ix);
    }
    l.current = setTimeout(C, lx);
  };
  u.useEffect(function() {
    return function() {
      d(), s.current.forEach(function(p) {
        return St.cancel(p);
      });
    };
  }, []);
  var v = ax();
  if (v)
    return null;
  var h = "".concat(t, "-handler"), b = ne(h, "".concat(h, "-up"), D({}, "".concat(h, "-up-disabled"), o)), m = ne(h, "".concat(h, "-down"), D({}, "".concat(h, "-down-disabled"), a)), g = function() {
    return s.current.push(St(d));
  }, y = {
    unselectable: "on",
    role: "button",
    onMouseUp: g,
    onMouseLeave: g
  };
  return /* @__PURE__ */ u.createElement("div", {
    className: "".concat(h, "-wrap")
  }, /* @__PURE__ */ u.createElement("span", ke({}, y, {
    onMouseDown: function(S) {
      f(S, !0);
    },
    "aria-label": "Increase Value",
    "aria-disabled": o,
    className: b
  }), n || /* @__PURE__ */ u.createElement("span", {
    unselectable: "on",
    className: "".concat(t, "-handler-up-inner")
  })), /* @__PURE__ */ u.createElement("span", ke({}, y, {
    onMouseDown: function(S) {
      f(S, !1);
    },
    "aria-label": "Decrease Value",
    "aria-disabled": a,
    className: m
  }), r || /* @__PURE__ */ u.createElement("span", {
    unselectable: "on",
    className: "".concat(t, "-handler-down-inner")
  })));
}
function Vu(e) {
  var t = typeof e == "number" ? ri(e) : Or(e).fullStr, n = t.includes(".");
  return n ? Or(t.replace(/(\d)\.(\d)/g, "$1$2.")).fullStr : e + "0";
}
const cx = function() {
  var e = ze(0), t = function() {
    St.cancel(e.current);
  };
  return Mt(function() {
    return t;
  }, []), function(n) {
    t(), e.current = St(function() {
      n();
    });
  };
};
var ux = ["prefixCls", "className", "style", "min", "max", "step", "defaultValue", "value", "disabled", "readOnly", "upHandler", "downHandler", "keyboard", "changeOnWheel", "controls", "classNames", "stringMode", "parser", "formatter", "precision", "decimalSeparator", "onChange", "onInput", "onPressEnter", "onStep", "changeOnBlur", "domRef"], dx = ["disabled", "style", "prefixCls", "value", "prefix", "suffix", "addonBefore", "addonAfter", "className", "classNames"], Bu = function(t, n) {
  return t || n.isEmpty() ? n.toString() : n.toNumber();
}, Wu = function(t) {
  var n = Tn(t);
  return n.isInvalidate() ? null : n;
}, fx = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.className, o = e.style, a = e.min, i = e.max, l = e.step, s = l === void 0 ? 1 : l, c = e.defaultValue, d = e.value, f = e.disabled, v = e.readOnly, h = e.upHandler, b = e.downHandler, m = e.keyboard, g = e.changeOnWheel, y = g === void 0 ? !1 : g, p = e.controls, S = p === void 0 ? !0 : p;
  e.classNames;
  var E = e.stringMode, C = e.parser, x = e.formatter, w = e.precision, $ = e.decimalSeparator, O = e.onChange, R = e.onInput, _ = e.onPressEnter, I = e.onStep, F = e.changeOnBlur, M = F === void 0 ? !0 : F, V = e.domRef, N = yt(e, ux), P = "".concat(n, "-input"), T = u.useRef(null), j = u.useState(!1), H = K(j, 2), L = H[0], q = H[1], k = u.useRef(!1), U = u.useRef(!1), G = u.useRef(!1), le = u.useState(function() {
    return Tn(d ?? c);
  }), Y = K(le, 2), Q = Y[0], pe = Y[1];
  function Z(Fe) {
    d === void 0 && pe(Fe);
  }
  var X = u.useCallback(function(Fe, Ee) {
    if (!Ee)
      return w >= 0 ? w : Math.max(wr(Fe), wr(s));
  }, [w, s]), te = u.useCallback(function(Fe) {
    var Ee = String(Fe);
    if (C)
      return C(Ee);
    var Ve = Ee;
    return $ && (Ve = Ve.replace($, ".")), Ve.replace(/[^\w.-]+/g, "");
  }, [C, $]), fe = u.useRef(""), W = u.useCallback(function(Fe, Ee) {
    if (x)
      return x(Fe, {
        userTyping: Ee,
        input: String(fe.current)
      });
    var Ve = typeof Fe == "number" ? ri(Fe) : Fe;
    if (!Ee) {
      var je = X(Ve, Ee);
      if (Hs(Ve) && ($ || je >= 0)) {
        var qe = $ || ".";
        Ve = $a(Ve, qe, je);
      }
    }
    return Ve;
  }, [x, X, $]), ae = u.useState(function() {
    var Fe = c ?? d;
    return Q.isInvalidate() && ["string", "number"].includes(Be(Fe)) ? Number.isNaN(Fe) ? "" : Fe : W(Q.toString(), !1);
  }), ie = K(ae, 2), ue = ie[0], ve = ie[1];
  fe.current = ue;
  function $e(Fe, Ee) {
    ve(W(
      // Invalidate number is sometime passed by external control, we should let it go
      // Otherwise is controlled by internal interactive logic which check by userTyping
      // You can ref 'show limited value when input is not focused' test for more info.
      Fe.isInvalidate() ? Fe.toString(!1) : Fe.toString(!Ee),
      Ee
    ));
  }
  var Re = u.useMemo(function() {
    return Wu(i);
  }, [i, w]), Se = u.useMemo(function() {
    return Wu(a);
  }, [a, w]), _e = u.useMemo(function() {
    return !Re || !Q || Q.isInvalidate() ? !1 : Re.lessEquals(Q);
  }, [Re, Q]), J = u.useMemo(function() {
    return !Se || !Q || Q.isInvalidate() ? !1 : Q.lessEquals(Se);
  }, [Se, Q]), re = ox(T.current, L), ge = K(re, 2), be = ge[0], Ie = ge[1], Me = function(Ee) {
    return Re && !Ee.lessEquals(Re) ? Re : Se && !Se.lessEquals(Ee) ? Se : null;
  }, Ue = function(Ee) {
    return !Me(Ee);
  }, rt = function(Ee, Ve) {
    var je = Ee, qe = Ue(je) || je.isEmpty();
    if (!je.isEmpty() && !Ve && (je = Me(je) || je, qe = !0), !v && !f && qe) {
      var Ae = je.toString(), ce = X(Ae, Ve);
      return ce >= 0 && (je = Tn($a(Ae, ".", ce)), Ue(je) || (je = Tn($a(Ae, ".", ce, !0)))), je.equals(Q) || (Z(je), O == null || O(je.isEmpty() ? null : Bu(E, je)), d === void 0 && $e(je, Ve)), je;
    }
    return Q;
  }, ct = cx(), ft = function Fe(Ee) {
    if (be(), fe.current = Ee, ve(Ee), !U.current) {
      var Ve = te(Ee), je = Tn(Ve);
      je.isNaN() || rt(je, !0);
    }
    R == null || R(Ee), ct(function() {
      var qe = Ee;
      C || (qe = Ee.replace(/。/g, ".")), qe !== Ee && Fe(qe);
    });
  }, De = function() {
    U.current = !0;
  }, Te = function() {
    U.current = !1, ft(T.current.value);
  }, Ye = function(Ee) {
    ft(Ee.target.value);
  }, Je = function(Ee) {
    var Ve;
    if (!(Ee && _e || !Ee && J)) {
      k.current = !1;
      var je = Tn(G.current ? Vu(s) : s);
      Ee || (je = je.negate());
      var qe = (Q || Tn(0)).add(je.toString()), Ae = rt(qe, !1);
      I == null || I(Bu(E, Ae), {
        offset: G.current ? Vu(s) : s,
        type: Ee ? "up" : "down"
      }), (Ve = T.current) === null || Ve === void 0 || Ve.focus();
    }
  }, et = function(Ee) {
    var Ve = Tn(te(ue)), je;
    Ve.isNaN() ? je = rt(Q, Ee) : je = rt(Ve, Ee), d !== void 0 ? $e(Q, !1) : je.isNaN() || $e(je, !1);
  }, lt = function() {
    k.current = !0;
  }, It = function(Ee) {
    var Ve = Ee.key, je = Ee.shiftKey;
    k.current = !0, G.current = je, Ve === "Enter" && (U.current || (k.current = !1), et(!1), _ == null || _(Ee)), m !== !1 && !U.current && ["Up", "ArrowUp", "Down", "ArrowDown"].includes(Ve) && (Je(Ve === "Up" || Ve === "ArrowUp"), Ee.preventDefault());
  }, mt = function() {
    k.current = !1, G.current = !1;
  };
  u.useEffect(function() {
    if (y && L) {
      var Fe = function(je) {
        Je(je.deltaY < 0), je.preventDefault();
      }, Ee = T.current;
      if (Ee)
        return Ee.addEventListener("wheel", Fe, {
          passive: !1
        }), function() {
          return Ee.removeEventListener("wheel", Fe);
        };
    }
  });
  var vt = function() {
    M && et(!1), q(!1), k.current = !1;
  };
  return xo(function() {
    Q.isInvalidate() || $e(Q, !1);
  }, [w, x]), xo(function() {
    var Fe = Tn(d);
    pe(Fe);
    var Ee = Tn(te(ue));
    (!Fe.equals(Ee) || !k.current || x) && $e(Fe, k.current);
  }, [d]), xo(function() {
    x && Ie();
  }, [ue]), /* @__PURE__ */ u.createElement("div", {
    ref: V,
    className: ne(n, r, D(D(D(D(D({}, "".concat(n, "-focused"), L), "".concat(n, "-disabled"), f), "".concat(n, "-readonly"), v), "".concat(n, "-not-a-number"), Q.isNaN()), "".concat(n, "-out-of-range"), !Q.isInvalidate() && !Ue(Q))),
    style: o,
    onFocus: function() {
      q(!0);
    },
    onBlur: vt,
    onKeyDown: It,
    onKeyUp: mt,
    onCompositionStart: De,
    onCompositionEnd: Te,
    onBeforeInput: lt
  }, S && /* @__PURE__ */ u.createElement(sx, {
    prefixCls: n,
    upNode: h,
    downNode: b,
    upDisabled: _e,
    downDisabled: J,
    onStep: Je
  }), /* @__PURE__ */ u.createElement("div", {
    className: "".concat(P, "-wrap")
  }, /* @__PURE__ */ u.createElement("input", ke({
    autoComplete: "off",
    role: "spinbutton",
    "aria-valuemin": a,
    "aria-valuemax": i,
    "aria-valuenow": Q.isInvalidate() ? null : Q.toString(),
    step: s
  }, N, {
    ref: bn(T, t),
    className: P,
    value: ue,
    onChange: Ye,
    disabled: f,
    readOnly: v
  }))));
}), ug = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.disabled, r = e.style, o = e.prefixCls, a = o === void 0 ? "rc-input-number" : o, i = e.value, l = e.prefix, s = e.suffix, c = e.addonBefore, d = e.addonAfter, f = e.className, v = e.classNames, h = yt(e, dx), b = u.useRef(null), m = u.useRef(null), g = u.useRef(null), y = function(S) {
    g.current && sg(g.current, S);
  };
  return u.useImperativeHandle(t, function() {
    return rx(g.current, {
      nativeElement: b.current.nativeElement || m.current
    });
  }), /* @__PURE__ */ u.createElement(zs, {
    className: f,
    triggerFocus: y,
    prefixCls: a,
    value: i,
    disabled: n,
    style: r,
    prefix: l,
    suffix: s,
    addonAfter: d,
    addonBefore: c,
    classNames: v,
    components: {
      affixWrapper: "div",
      groupWrapper: "div",
      wrapper: "div",
      groupAddon: "div"
    },
    ref: b
  }, /* @__PURE__ */ u.createElement(fx, ke({
    prefixCls: a,
    disabled: n,
    ref: g,
    domRef: m,
    className: v == null ? void 0 : v.input
  }, h)));
});
process.env.NODE_ENV !== "production" && (ug.displayName = "InputNumber");
const vx = (e) => {
  var t;
  const n = (t = e.handleVisible) !== null && t !== void 0 ? t : "auto";
  return Object.assign(Object.assign({}, _s(e)), {
    controlWidth: 90,
    handleWidth: e.controlHeightSM - e.lineWidth * 2,
    handleFontSize: e.fontSize / 2,
    handleVisible: n,
    handleActiveBg: e.colorFillAlter,
    handleBg: e.colorBgContainer,
    filledHandleBg: new Xt(e.colorFillSecondary).onBackground(e.colorBgContainer).toHexString(),
    handleHoverColor: e.colorPrimary,
    handleBorderColor: e.colorBorder,
    handleOpacity: n === !0 ? 1 : 0
  });
}, ku = (e, t) => {
  let {
    componentCls: n,
    borderRadiusSM: r,
    borderRadiusLG: o
  } = e;
  const a = t === "lg" ? o : r;
  return {
    [`&-${t}`]: {
      [`${n}-handler-wrap`]: {
        borderStartEndRadius: a,
        borderEndEndRadius: a
      },
      [`${n}-handler-up`]: {
        borderStartEndRadius: a
      },
      [`${n}-handler-down`]: {
        borderEndEndRadius: a
      }
    }
  };
}, gx = (e) => {
  const {
    componentCls: t,
    lineWidth: n,
    lineType: r,
    borderRadius: o,
    inputFontSizeSM: a,
    inputFontSizeLG: i,
    controlHeightLG: l,
    controlHeightSM: s,
    colorError: c,
    paddingInlineSM: d,
    paddingBlockSM: f,
    paddingBlockLG: v,
    paddingInlineLG: h,
    colorTextDescription: b,
    motionDurationMid: m,
    handleHoverColor: g,
    handleOpacity: y,
    paddingInline: p,
    paddingBlock: S,
    handleBg: E,
    handleActiveBg: C,
    colorTextDisabled: x,
    borderRadiusSM: w,
    borderRadiusLG: $,
    controlWidth: O,
    handleBorderColor: R,
    filledHandleBg: _,
    lineHeightLG: I,
    calc: F
  } = e;
  return [
    {
      [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, un(e)), ti(e)), {
        display: "inline-block",
        width: O,
        margin: 0,
        padding: 0,
        borderRadius: o
      }), Tv(e, {
        [`${t}-handler-wrap`]: {
          background: E,
          [`${t}-handler-down`]: {
            borderBlockStart: `${oe(n)} ${r} ${R}`
          }
        }
      })), jv(e, {
        [`${t}-handler-wrap`]: {
          background: _,
          [`${t}-handler-down`]: {
            borderBlockStart: `${oe(n)} ${r} ${R}`
          }
        },
        "&:focus-within": {
          [`${t}-handler-wrap`]: {
            background: E
          }
        }
      })), Av(e)), {
        "&-rtl": {
          direction: "rtl",
          [`${t}-input`]: {
            direction: "rtl"
          }
        },
        "&-lg": {
          padding: 0,
          fontSize: i,
          lineHeight: I,
          borderRadius: $,
          [`input${t}-input`]: {
            height: F(l).sub(F(n).mul(2)).equal(),
            padding: `${oe(v)} ${oe(h)}`
          }
        },
        "&-sm": {
          padding: 0,
          fontSize: a,
          borderRadius: w,
          [`input${t}-input`]: {
            height: F(s).sub(F(n).mul(2)).equal(),
            padding: `${oe(f)} ${oe(d)}`
          }
        },
        // ===================== Out Of Range =====================
        "&-out-of-range": {
          [`${t}-input-wrap`]: {
            input: {
              color: c
            }
          }
        },
        // Style for input-group: input with label, with button or dropdown...
        "&-group": Object.assign(Object.assign(Object.assign({}, un(e)), Bv(e)), {
          "&-wrapper": Object.assign(Object.assign(Object.assign({
            display: "inline-block",
            textAlign: "start",
            verticalAlign: "top",
            [`${t}-affix-wrapper`]: {
              width: "100%"
            },
            // Size
            "&-lg": {
              [`${t}-group-addon`]: {
                borderRadius: $,
                fontSize: e.fontSizeLG
              }
            },
            "&-sm": {
              [`${t}-group-addon`]: {
                borderRadius: w
              }
            }
          }, Dv(e)), Lv(e)), {
            // Fix the issue of using icons in Space Compact mode
            // https://github.com/ant-design/ant-design/issues/45764
            [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]: {
              [`${t}, ${t}-group-addon`]: {
                borderRadius: 0
              }
            },
            [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
              [`${t}, ${t}-group-addon`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0
              }
            },
            [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
              [`${t}, ${t}-group-addon`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0
              }
            }
          })
        }),
        [`&-disabled ${t}-input`]: {
          cursor: "not-allowed"
        },
        [t]: {
          "&-input": Object.assign(Object.assign(Object.assign(Object.assign({}, un(e)), {
            width: "100%",
            padding: `${oe(S)} ${oe(p)}`,
            textAlign: "start",
            backgroundColor: "transparent",
            border: 0,
            borderRadius: o,
            outline: 0,
            transition: `all ${m} linear`,
            appearance: "textfield",
            fontSize: "inherit"
          }), Hv(e.colorTextPlaceholder)), {
            '&[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button': {
              margin: 0,
              webkitAppearance: "none",
              appearance: "none"
            }
          })
        },
        [`&:hover ${t}-handler-wrap, &-focused ${t}-handler-wrap`]: {
          width: e.handleWidth,
          opacity: 1
        }
      })
    },
    // Handler
    {
      [t]: Object.assign(Object.assign(Object.assign({
        [`${t}-handler-wrap`]: {
          position: "absolute",
          insetBlockStart: 0,
          insetInlineEnd: 0,
          width: 0,
          opacity: y,
          height: "100%",
          borderStartStartRadius: 0,
          borderStartEndRadius: o,
          borderEndEndRadius: o,
          borderEndStartRadius: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          transition: `all ${m}`,
          overflow: "hidden",
          // Fix input number inside Menu makes icon too large
          // We arise the selector priority by nest selector here
          // https://github.com/ant-design/ant-design/issues/14367
          [`${t}-handler`]: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: "auto",
            height: "40%",
            [`
              ${t}-handler-up-inner,
              ${t}-handler-down-inner
            `]: {
              marginInlineEnd: 0,
              fontSize: e.handleFontSize
            }
          }
        },
        [`${t}-handler`]: {
          height: "50%",
          overflow: "hidden",
          color: b,
          fontWeight: "bold",
          lineHeight: 0,
          textAlign: "center",
          cursor: "pointer",
          borderInlineStart: `${oe(n)} ${r} ${R}`,
          transition: `all ${m} linear`,
          "&:active": {
            background: C
          },
          // Hover
          "&:hover": {
            height: "60%",
            [`
              ${t}-handler-up-inner,
              ${t}-handler-down-inner
            `]: {
              color: g
            }
          },
          "&-up-inner, &-down-inner": Object.assign(Object.assign({}, Wo()), {
            color: b,
            transition: `all ${m} linear`,
            userSelect: "none"
          })
        },
        [`${t}-handler-up`]: {
          borderStartEndRadius: o
        },
        [`${t}-handler-down`]: {
          borderEndEndRadius: o
        }
      }, ku(e, "lg")), ku(e, "sm")), {
        // Disabled
        "&-disabled, &-readonly": {
          [`${t}-handler-wrap`]: {
            display: "none"
          },
          [`${t}-input`]: {
            color: "inherit"
          }
        },
        [`
          ${t}-handler-up-disabled,
          ${t}-handler-down-disabled
        `]: {
          cursor: "not-allowed"
        },
        [`
          ${t}-handler-up-disabled:hover &-handler-up-inner,
          ${t}-handler-down-disabled:hover &-handler-down-inner
        `]: {
          color: x
        }
      })
    }
  ];
}, mx = (e) => {
  const {
    componentCls: t,
    paddingBlock: n,
    paddingInline: r,
    inputAffixPadding: o,
    controlWidth: a,
    borderRadiusLG: i,
    borderRadiusSM: l,
    paddingInlineLG: s,
    paddingInlineSM: c,
    paddingBlockLG: d,
    paddingBlockSM: f,
    motionDurationMid: v
  } = e;
  return {
    [`${t}-affix-wrapper`]: Object.assign(Object.assign({
      [`input${t}-input`]: {
        padding: `${oe(n)} 0`
      }
    }, ti(e)), {
      // or number handler will cover form status
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      width: a,
      padding: 0,
      paddingInlineStart: r,
      "&-lg": {
        borderRadius: i,
        paddingInlineStart: s,
        [`input${t}-input`]: {
          padding: `${oe(d)} 0`
        }
      },
      "&-sm": {
        borderRadius: l,
        paddingInlineStart: c,
        [`input${t}-input`]: {
          padding: `${oe(f)} 0`
        }
      },
      [`&:not(${t}-disabled):hover`]: {
        zIndex: 1
      },
      "&-focused, &:focus": {
        zIndex: 1
      },
      [`&-disabled > ${t}-disabled`]: {
        background: "transparent"
      },
      [`> div${t}`]: {
        width: "100%",
        border: "none",
        outline: "none",
        [`&${t}-focused`]: {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        display: "inline-block",
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [`${t}-handler-wrap`]: {
        zIndex: 2
      },
      [t]: {
        position: "static",
        color: "inherit",
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          pointerEvents: "none"
        },
        "&-prefix": {
          marginInlineEnd: o
        },
        "&-suffix": {
          insetBlockStart: 0,
          insetInlineEnd: 0,
          height: "100%",
          marginInlineEnd: r,
          marginInlineStart: o,
          transition: `margin ${v}`
        }
      },
      [`&:hover ${t}-handler-wrap, &-focused ${t}-handler-wrap`]: {
        width: e.handleWidth,
        opacity: 1
      },
      [`&:not(${t}-affix-wrapper-without-controls):hover ${t}-suffix`]: {
        marginInlineEnd: e.calc(e.handleWidth).add(r).equal()
      }
    })
  };
}, hx = yn("InputNumber", (e) => {
  const t = Pt(e, Ms(e));
  return [
    gx(t),
    mx(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Uo(t)
  ];
}, vx, {
  unitless: {
    handleOpacity: !0
  }
});
var px = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const dg = /* @__PURE__ */ u.forwardRef((e, t) => {
  if (process.env.NODE_ENV !== "production") {
    const Q = zt("InputNumber");
    Q.deprecated(!("bordered" in e), "bordered", "variant"), Q(!(e.type === "number" && e.changeOnWheel), "usage", "When `type=number` is used together with `changeOnWheel`, changeOnWheel may not work properly. Please delete `type=number` if it is not necessary.");
  }
  const {
    getPrefixCls: n,
    direction: r
  } = u.useContext(Ct), o = u.useRef(null);
  u.useImperativeHandle(t, () => o.current);
  const {
    className: a,
    rootClassName: i,
    size: l,
    disabled: s,
    prefixCls: c,
    addonBefore: d,
    addonAfter: f,
    prefix: v,
    suffix: h,
    bordered: b,
    readOnly: m,
    status: g,
    controls: y,
    variant: p
  } = e, S = px(e, ["className", "rootClassName", "size", "disabled", "prefixCls", "addonBefore", "addonAfter", "prefix", "suffix", "bordered", "readOnly", "status", "controls", "variant"]), E = n("input-number", c), C = io(E), [x, w, $] = hx(E, C), {
    compactSize: O,
    compactItemClassnames: R
  } = lo(E, r);
  let _ = /* @__PURE__ */ u.createElement(ig, {
    className: `${E}-handler-up-inner`
  }), I = /* @__PURE__ */ u.createElement(Os, {
    className: `${E}-handler-down-inner`
  });
  const F = typeof y == "boolean" ? y : void 0;
  typeof y == "object" && (_ = typeof y.upIcon > "u" ? _ : /* @__PURE__ */ u.createElement("span", {
    className: `${E}-handler-up-inner`
  }, y.upIcon), I = typeof y.downIcon > "u" ? I : /* @__PURE__ */ u.createElement("span", {
    className: `${E}-handler-down-inner`
  }, y.downIcon));
  const {
    hasFeedback: M,
    status: V,
    isFormItemInput: N,
    feedbackIcon: P
  } = u.useContext(Pn), T = Yo(V, g), j = kn((Q) => {
    var pe;
    return (pe = l ?? O) !== null && pe !== void 0 ? pe : Q;
  }), H = u.useContext(Ln), L = s ?? H, [q, k] = Ja("inputNumber", p, b), U = M && /* @__PURE__ */ u.createElement(u.Fragment, null, P), G = ne({
    [`${E}-lg`]: j === "large",
    [`${E}-sm`]: j === "small",
    [`${E}-rtl`]: r === "rtl",
    [`${E}-in-form-item`]: N
  }, w), le = `${E}-group`, Y = /* @__PURE__ */ u.createElement(ug, Object.assign({
    ref: o,
    disabled: L,
    className: ne($, C, a, i, R),
    upHandler: _,
    downHandler: I,
    prefixCls: E,
    readOnly: m,
    controls: F,
    prefix: v,
    suffix: U || h,
    addonBefore: d && /* @__PURE__ */ u.createElement(ro, {
      form: !0,
      space: !0
    }, d),
    addonAfter: f && /* @__PURE__ */ u.createElement(ro, {
      form: !0,
      space: !0
    }, f),
    classNames: {
      input: G,
      variant: ne({
        [`${E}-${q}`]: k
      }, Pr(E, T, M)),
      affixWrapper: ne({
        [`${E}-affix-wrapper-sm`]: j === "small",
        [`${E}-affix-wrapper-lg`]: j === "large",
        [`${E}-affix-wrapper-rtl`]: r === "rtl",
        [`${E}-affix-wrapper-without-controls`]: y === !1
      }, w),
      wrapper: ne({
        [`${le}-rtl`]: r === "rtl"
      }, w),
      groupWrapper: ne({
        [`${E}-group-wrapper-sm`]: j === "small",
        [`${E}-group-wrapper-lg`]: j === "large",
        [`${E}-group-wrapper-rtl`]: r === "rtl",
        [`${E}-group-wrapper-${q}`]: k
      }, Pr(`${E}-group-wrapper`, T, M), w)
    }
  }, S));
  return x(Y);
}), Vs = dg, bx = (e) => /* @__PURE__ */ u.createElement(br, {
  theme: {
    components: {
      InputNumber: {
        handleVisible: !0
      }
    }
  }
}, /* @__PURE__ */ u.createElement(dg, Object.assign({}, e)));
process.env.NODE_ENV !== "production" && (Vs.displayName = "InputNumber");
Vs._InternalPanelDoNotUseOrYouWillBeFired = bx;
const Rr = (e) => {
  let {
    prefixCls: t,
    min: n = 0,
    max: r = 100,
    value: o,
    onChange: a,
    className: i,
    formatter: l
  } = e;
  const s = `${t}-steppers`, [c, d] = jt(o);
  return Mt(() => {
    Number.isNaN(o) || d(o);
  }, [o]), /* @__PURE__ */ B.createElement(Vs, {
    className: ne(s, i),
    min: n,
    max: r,
    value: c,
    formatter: l,
    size: "small",
    onChange: (f) => {
      o || d(f || 0), a == null || a(f);
    }
  });
}, yx = (e) => {
  let {
    prefixCls: t,
    value: n,
    onChange: r
  } = e;
  const o = `${t}-alpha-input`, [a, i] = jt(sn(n || "#000"));
  Mt(() => {
    n && i(n);
  }, [n]);
  const l = (s) => {
    const c = a.toHsb();
    c.a = (s || 0) / 100;
    const d = sn(c);
    n || i(d), r == null || r(d);
  };
  return /* @__PURE__ */ B.createElement(Rr, {
    value: js(a),
    prefixCls: t,
    formatter: (s) => `${s}%`,
    className: o,
    onChange: l
  });
}, Sx = (e) => {
  const {
    getPrefixCls: t,
    direction: n
  } = Dt(Ct), {
    prefixCls: r,
    className: o
  } = e, a = t("input-group", r), i = t("input"), [l, s] = Ds(i), c = ne(a, {
    [`${a}-lg`]: e.size === "large",
    [`${a}-sm`]: e.size === "small",
    [`${a}-compact`]: e.compact,
    [`${a}-rtl`]: n === "rtl"
  }, s, o), d = Dt(Pn), f = an(() => Object.assign(Object.assign({}, d), {
    isFormItemInput: !1
  }), [d]);
  return process.env.NODE_ENV !== "production" && zt("Input.Group").deprecated(!1, "Input.Group", "Space.Compact"), l(/* @__PURE__ */ u.createElement("span", {
    className: c,
    style: e.style,
    onMouseEnter: e.onMouseEnter,
    onMouseLeave: e.onMouseLeave,
    onFocus: e.onFocus,
    onBlur: e.onBlur
  }, /* @__PURE__ */ u.createElement(Pn.Provider, {
    value: f
  }, e.children)));
}, fg = (e) => {
  let t;
  return typeof e == "object" && (e != null && e.clearIcon) ? t = e : e && (t = {
    clearIcon: /* @__PURE__ */ B.createElement(cs, null)
  }), t;
};
function vg(e, t) {
  const n = ze([]), r = () => {
    n.current.push(setTimeout(() => {
      var o, a, i, l;
      !((o = e.current) === null || o === void 0) && o.input && ((a = e.current) === null || a === void 0 ? void 0 : a.input.getAttribute("type")) === "password" && (!((i = e.current) === null || i === void 0) && i.input.hasAttribute("value")) && ((l = e.current) === null || l === void 0 || l.input.removeAttribute("value"));
    }));
  };
  return Mt(() => (t && r(), () => n.current.forEach((o) => {
    o && clearTimeout(o);
  })), []), r;
}
function Cx(e) {
  return !!(e.prefix || e.suffix || e.allowClear || e.showCount);
}
var Ex = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function xx(e, t) {
  if (!e)
    return;
  e.focus(t);
  const {
    cursor: n
  } = t || {};
  if (n) {
    const r = e.value.length;
    switch (n) {
      case "start":
        e.setSelectionRange(0, 0);
        break;
      case "end":
        e.setSelectionRange(r, r);
        break;
      default:
        e.setSelectionRange(0, r);
    }
  }
}
const Qo = /* @__PURE__ */ tr((e, t) => {
  var n;
  const {
    prefixCls: r,
    bordered: o = !0,
    status: a,
    size: i,
    disabled: l,
    onBlur: s,
    onFocus: c,
    suffix: d,
    allowClear: f,
    addonAfter: v,
    addonBefore: h,
    className: b,
    style: m,
    styles: g,
    rootClassName: y,
    onChange: p,
    classNames: S,
    variant: E
  } = e, C = Ex(e, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "style", "styles", "rootClassName", "onChange", "classNames", "variant"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: W
    } = zt("Input");
    W(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: x,
    direction: w,
    input: $
  } = B.useContext(Ct), O = x("input", r), R = ze(null), _ = io(O), [I, F, M] = Ds(O, _), {
    compactSize: V,
    compactItemClassnames: N
  } = lo(O, w), P = kn((W) => {
    var ae;
    return (ae = i ?? V) !== null && ae !== void 0 ? ae : W;
  }), T = B.useContext(Ln), j = l ?? T, {
    status: H,
    hasFeedback: L,
    feedbackIcon: q
  } = Dt(Pn), k = Yo(H, a), U = Cx(e) || !!L, G = ze(U);
  if (process.env.NODE_ENV !== "production") {
    const W = zt("Input");
    Mt(() => {
      var ae;
      U && !G.current && process.env.NODE_ENV !== "production" && W(document.activeElement === ((ae = R.current) === null || ae === void 0 ? void 0 : ae.input), "usage", "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ"), G.current = U;
    }, [U]);
  }
  const le = vg(R, !0), Y = (W) => {
    le(), s == null || s(W);
  }, Q = (W) => {
    le(), c == null || c(W);
  }, pe = (W) => {
    le(), p == null || p(W);
  }, Z = (L || d) && /* @__PURE__ */ B.createElement(B.Fragment, null, d, L && q), X = fg(f ?? ($ == null ? void 0 : $.allowClear)), [te, fe] = Ja("input", E, o);
  return I(/* @__PURE__ */ B.createElement(nx, Object.assign({
    ref: bn(t, R),
    prefixCls: O,
    autoComplete: $ == null ? void 0 : $.autoComplete
  }, C, {
    disabled: j,
    onBlur: Y,
    onFocus: Q,
    style: Object.assign(Object.assign({}, $ == null ? void 0 : $.style), m),
    styles: Object.assign(Object.assign({}, $ == null ? void 0 : $.styles), g),
    suffix: Z,
    allowClear: X,
    className: ne(b, y, M, _, N, $ == null ? void 0 : $.className),
    onChange: pe,
    addonBefore: h && /* @__PURE__ */ B.createElement(ro, {
      form: !0,
      space: !0
    }, h),
    addonAfter: v && /* @__PURE__ */ B.createElement(ro, {
      form: !0,
      space: !0
    }, v),
    classNames: Object.assign(Object.assign(Object.assign({}, S), $ == null ? void 0 : $.classNames), {
      input: ne({
        [`${O}-sm`]: P === "small",
        [`${O}-lg`]: P === "large",
        [`${O}-rtl`]: w === "rtl"
      }, S == null ? void 0 : S.input, (n = $ == null ? void 0 : $.classNames) === null || n === void 0 ? void 0 : n.input, F),
      variant: ne({
        [`${O}-${te}`]: fe
      }, Pr(O, k)),
      affixWrapper: ne({
        [`${O}-affix-wrapper-sm`]: P === "small",
        [`${O}-affix-wrapper-lg`]: P === "large",
        [`${O}-affix-wrapper-rtl`]: w === "rtl"
      }, F),
      wrapper: ne({
        [`${O}-group-rtl`]: w === "rtl"
      }, F),
      groupWrapper: ne({
        [`${O}-group-wrapper-sm`]: P === "small",
        [`${O}-group-wrapper-lg`]: P === "large",
        [`${O}-group-wrapper-rtl`]: w === "rtl",
        [`${O}-group-wrapper-${te}`]: fe
      }, Pr(`${O}-group-wrapper`, k, L), F)
    })
  })));
});
process.env.NODE_ENV !== "production" && (Qo.displayName = "Input");
const wx = (e) => {
  const {
    componentCls: t,
    paddingXS: n
  } = e;
  return {
    [t]: {
      display: "inline-flex",
      alignItems: "center",
      flexWrap: "nowrap",
      columnGap: n,
      "&-rtl": {
        direction: "rtl"
      },
      [`${t}-input`]: {
        textAlign: "center",
        paddingInline: e.paddingXXS
      },
      // ================= Size =================
      [`&${t}-sm ${t}-input`]: {
        paddingInline: e.calc(e.paddingXXS).div(2).equal()
      },
      [`&${t}-lg ${t}-input`]: {
        paddingInline: e.paddingXS
      }
    }
  };
}, $x = yn(["Input", "OTP"], (e) => {
  const t = Pt(e, Ms(e));
  return [wx(t)];
}, _s);
var Ox = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Rx = /* @__PURE__ */ u.forwardRef((e, t) => {
  const {
    value: n,
    onChange: r,
    onActiveChange: o,
    index: a,
    mask: i
  } = e, l = Ox(e, ["value", "onChange", "onActiveChange", "index", "mask"]), s = n && typeof i == "string" ? i : n, c = (b) => {
    r(a, b.target.value);
  }, d = u.useRef(null);
  u.useImperativeHandle(t, () => d.current);
  const f = () => {
    St(() => {
      var b;
      const m = (b = d.current) === null || b === void 0 ? void 0 : b.input;
      document.activeElement === m && m && m.select();
    });
  }, v = (b) => {
    let {
      key: m
    } = b;
    m === "ArrowLeft" ? o(a - 1) : m === "ArrowRight" && o(a + 1), f();
  }, h = (b) => {
    b.key === "Backspace" && !n && o(a - 1), f();
  };
  return /* @__PURE__ */ u.createElement(Qo, Object.assign({}, l, {
    ref: d,
    value: s,
    onInput: c,
    onFocus: f,
    onKeyDown: v,
    onKeyUp: h,
    onMouseDown: f,
    onMouseUp: f,
    type: i === !0 ? "password" : "text"
  }));
});
var Ix = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function ma(e) {
  return (e || "").split("");
}
const Px = /* @__PURE__ */ u.forwardRef((e, t) => {
  const {
    prefixCls: n,
    length: r = 6,
    size: o,
    defaultValue: a,
    value: i,
    onChange: l,
    formatter: s,
    variant: c,
    disabled: d,
    status: f,
    autoFocus: v,
    mask: h
  } = e, b = Ix(e, ["prefixCls", "length", "size", "defaultValue", "value", "onChange", "formatter", "variant", "disabled", "status", "autoFocus", "mask"]);
  if (process.env.NODE_ENV !== "production") {
    const L = zt("Input.OTP");
    process.env.NODE_ENV !== "production" && L(!(typeof h == "string" && h.length > 1), "usage", "`mask` prop should be a single character.");
  }
  const {
    getPrefixCls: m,
    direction: g
  } = u.useContext(Ct), y = m("otp", n), p = Ir(b, {
    aria: !0,
    data: !0,
    attr: !0
  }), S = io(y), [E, C, x] = $x(y, S), w = kn((L) => o ?? L), $ = u.useContext(Pn), O = Yo($.status, f), R = u.useMemo(() => Object.assign(Object.assign({}, $), {
    status: O,
    hasFeedback: !1,
    feedbackIcon: null
  }), [$, O]), _ = u.useRef(null), I = u.useRef({});
  u.useImperativeHandle(t, () => ({
    focus: () => {
      var L;
      (L = I.current[0]) === null || L === void 0 || L.focus();
    },
    blur: () => {
      var L;
      for (let q = 0; q < r; q += 1)
        (L = I.current[q]) === null || L === void 0 || L.blur();
    },
    nativeElement: _.current
  }));
  const F = (L) => s ? s(L) : L, [M, V] = u.useState(ma(F(a || "")));
  u.useEffect(() => {
    i !== void 0 && V(ma(i));
  }, [i]);
  const N = $t((L) => {
    V(L), l && L.length === r && L.every((q) => q) && L.some((q, k) => M[k] !== q) && l(L.join(""));
  }), P = $t((L, q) => {
    let k = Ce(M);
    for (let G = 0; G < L; G += 1)
      k[G] || (k[G] = "");
    q.length <= 1 ? k[L] = q : k = k.slice(0, L).concat(ma(q)), k = k.slice(0, r);
    for (let G = k.length - 1; G >= 0 && !k[G]; G -= 1)
      k.pop();
    const U = F(k.map((G) => G || " ").join(""));
    return k = ma(U).map((G, le) => G === " " && !k[le] ? k[le] : G), k;
  }), T = (L, q) => {
    var k;
    const U = P(L, q), G = Math.min(L + q.length, r - 1);
    G !== L && ((k = I.current[G]) === null || k === void 0 || k.focus()), N(U);
  }, j = (L) => {
    var q;
    (q = I.current[L]) === null || q === void 0 || q.focus();
  }, H = {
    variant: c,
    disabled: d,
    status: O,
    mask: h
  };
  return E(/* @__PURE__ */ u.createElement("div", Object.assign({}, p, {
    ref: _,
    className: ne(y, {
      [`${y}-sm`]: w === "small",
      [`${y}-lg`]: w === "large",
      [`${y}-rtl`]: g === "rtl"
    }, x, C)
  }), /* @__PURE__ */ u.createElement(Pn.Provider, {
    value: R
  }, Array.from({
    length: r
  }).map((L, q) => {
    const k = `otp-${q}`, U = M[q] || "";
    return /* @__PURE__ */ u.createElement(Rx, Object.assign({
      ref: (G) => {
        I.current[q] = G;
      },
      key: k,
      index: q,
      size: w,
      htmlSize: 1,
      className: `${y}-input`,
      onChange: T,
      value: U,
      onActiveChange: j,
      autoFocus: q === 0 && v
    }, H));
  }))));
});
var Nx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { tag: "path", attrs: { d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, name: "eye-invisible", theme: "outlined" }, Mx = function(t, n) {
  return /* @__PURE__ */ u.createElement(Sn, ke({}, t, {
    ref: n,
    icon: Nx
  }));
}, gg = /* @__PURE__ */ u.forwardRef(Mx);
process.env.NODE_ENV !== "production" && (gg.displayName = "EyeInvisibleOutlined");
var _x = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, name: "eye", theme: "outlined" }, Tx = function(t, n) {
  return /* @__PURE__ */ u.createElement(Sn, ke({}, t, {
    ref: n,
    icon: _x
  }));
}, mg = /* @__PURE__ */ u.forwardRef(Tx);
process.env.NODE_ENV !== "production" && (mg.displayName = "EyeOutlined");
var Dx = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Ax = (e) => e ? /* @__PURE__ */ u.createElement(mg, null) : /* @__PURE__ */ u.createElement(gg, null), Fx = {
  click: "onClick",
  hover: "onMouseOver"
}, hg = /* @__PURE__ */ u.forwardRef((e, t) => {
  const {
    disabled: n,
    action: r = "click",
    visibilityToggle: o = !0,
    iconRender: a = Ax
  } = e, i = u.useContext(Ln), l = n ?? i, s = typeof o == "object" && o.visible !== void 0, [c, d] = jt(() => s ? o.visible : !1), f = ze(null);
  u.useEffect(() => {
    s && d(o.visible);
  }, [s, o]);
  const v = vg(f), h = () => {
    l || (c && v(), d((R) => {
      var _;
      const I = !R;
      return typeof o == "object" && ((_ = o.onVisibleChange) === null || _ === void 0 || _.call(o, I)), I;
    }));
  }, b = (R) => {
    const _ = Fx[r] || "", I = a(c), F = {
      [_]: h,
      className: `${R}-icon`,
      key: "passwordIcon",
      onMouseDown: (M) => {
        M.preventDefault();
      },
      onMouseUp: (M) => {
        M.preventDefault();
      }
    };
    return /* @__PURE__ */ u.cloneElement(/* @__PURE__ */ u.isValidElement(I) ? I : /* @__PURE__ */ u.createElement("span", null, I), F);
  }, {
    className: m,
    prefixCls: g,
    inputPrefixCls: y,
    size: p
  } = e, S = Dx(e, ["className", "prefixCls", "inputPrefixCls", "size"]), {
    getPrefixCls: E
  } = u.useContext(Ct), C = E("input", y), x = E("input-password", g), w = o && b(x), $ = ne(x, m, {
    [`${x}-${p}`]: !!p
  }), O = Object.assign(Object.assign({}, gr(S, ["suffix", "iconRender", "visibilityToggle"])), {
    type: c ? "text" : "password",
    className: $,
    prefixCls: C,
    suffix: w
  });
  return p && (O.size = p), /* @__PURE__ */ u.createElement(Qo, Object.assign({
    ref: bn(t, f)
  }, O));
});
process.env.NODE_ENV !== "production" && (hg.displayName = "Input.Password");
var jx = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const pg = /* @__PURE__ */ u.forwardRef((e, t) => {
  const {
    prefixCls: n,
    inputPrefixCls: r,
    className: o,
    size: a,
    suffix: i,
    enterButton: l = !1,
    addonAfter: s,
    loading: c,
    disabled: d,
    onSearch: f,
    onChange: v,
    onCompositionStart: h,
    onCompositionEnd: b
  } = e, m = jx(e, ["prefixCls", "inputPrefixCls", "className", "size", "suffix", "enterButton", "addonAfter", "loading", "disabled", "onSearch", "onChange", "onCompositionStart", "onCompositionEnd"]), {
    getPrefixCls: g,
    direction: y
  } = u.useContext(Ct), p = u.useRef(!1), S = g("input-search", n), E = g("input", r), {
    compactSize: C
  } = lo(S, y), x = kn((H) => {
    var L;
    return (L = a ?? C) !== null && L !== void 0 ? L : H;
  }), w = u.useRef(null), $ = (H) => {
    H != null && H.target && H.type === "click" && f && f(H.target.value, H, {
      source: "clear"
    }), v == null || v(H);
  }, O = (H) => {
    var L;
    document.activeElement === ((L = w.current) === null || L === void 0 ? void 0 : L.input) && H.preventDefault();
  }, R = (H) => {
    var L, q;
    f && f((q = (L = w.current) === null || L === void 0 ? void 0 : L.input) === null || q === void 0 ? void 0 : q.value, H, {
      source: "input"
    });
  }, _ = (H) => {
    p.current || c || R(H);
  }, I = typeof l == "boolean" ? /* @__PURE__ */ u.createElement(Rs, null) : null, F = `${S}-button`;
  let M;
  const V = l || {}, N = V.type && V.type.__ANT_BUTTON === !0;
  N || V.type === "button" ? M = mr(V, Object.assign({
    onMouseDown: O,
    onClick: (H) => {
      var L, q;
      (q = (L = V == null ? void 0 : V.props) === null || L === void 0 ? void 0 : L.onClick) === null || q === void 0 || q.call(L, H), R(H);
    },
    key: "enterButton"
  }, N ? {
    className: F,
    size: x
  } : {})) : M = /* @__PURE__ */ u.createElement(Qa, {
    className: F,
    type: l ? "primary" : void 0,
    size: x,
    disabled: d,
    key: "enterButton",
    onMouseDown: O,
    onClick: R,
    loading: c,
    icon: I
  }, l), s && (M = [M, mr(s, {
    key: "addonAfter"
  })]);
  const P = ne(S, {
    [`${S}-rtl`]: y === "rtl",
    [`${S}-${x}`]: !!x,
    [`${S}-with-button`]: !!l
  }, o), T = (H) => {
    p.current = !0, h == null || h(H);
  }, j = (H) => {
    p.current = !1, b == null || b(H);
  };
  return /* @__PURE__ */ u.createElement(Qo, Object.assign({
    ref: bn(w, t),
    onPressEnter: _
  }, m, {
    size: x,
    onCompositionStart: T,
    onCompositionEnd: j,
    prefixCls: E,
    addonAfter: M,
    suffix: i,
    onChange: $,
    className: P,
    disabled: d
  }));
});
process.env.NODE_ENV !== "production" && (pg.displayName = "Search");
var Lx = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`, Hx = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"], Fi = {}, mn;
function zx(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
  if (t && Fi[n])
    return Fi[n];
  var r = window.getComputedStyle(e), o = r.getPropertyValue("box-sizing") || r.getPropertyValue("-moz-box-sizing") || r.getPropertyValue("-webkit-box-sizing"), a = parseFloat(r.getPropertyValue("padding-bottom")) + parseFloat(r.getPropertyValue("padding-top")), i = parseFloat(r.getPropertyValue("border-bottom-width")) + parseFloat(r.getPropertyValue("border-top-width")), l = Hx.map(function(c) {
    return "".concat(c, ":").concat(r.getPropertyValue(c));
  }).join(";"), s = {
    sizingStyle: l,
    paddingSize: a,
    borderSize: i,
    boxSizing: o
  };
  return t && n && (Fi[n] = s), s;
}
function Vx(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  mn || (mn = document.createElement("textarea"), mn.setAttribute("tab-index", "-1"), mn.setAttribute("aria-hidden", "true"), mn.setAttribute("name", "hiddenTextarea"), document.body.appendChild(mn)), e.getAttribute("wrap") ? mn.setAttribute("wrap", e.getAttribute("wrap")) : mn.removeAttribute("wrap");
  var o = zx(e, t), a = o.paddingSize, i = o.borderSize, l = o.boxSizing, s = o.sizingStyle;
  mn.setAttribute("style", "".concat(s, ";").concat(Lx)), mn.value = e.value || e.placeholder || "";
  var c = void 0, d = void 0, f, v = mn.scrollHeight;
  if (l === "border-box" ? v += i : l === "content-box" && (v -= a), n !== null || r !== null) {
    mn.value = " ";
    var h = mn.scrollHeight - a;
    n !== null && (c = h * n, l === "border-box" && (c = c + a + i), v = Math.max(c, v)), r !== null && (d = h * r, l === "border-box" && (d = d + a + i), f = v > d ? "" : "hidden", v = Math.min(d, v));
  }
  var b = {
    height: v,
    overflowY: f,
    resize: "none"
  };
  return c && (b.minHeight = c), d && (b.maxHeight = d), b;
}
var Bx = ["prefixCls", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"], ji = 0, Li = 1, Hi = 2, Wx = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e, r = n.prefixCls, o = n.defaultValue, a = n.value, i = n.autoSize, l = n.onResize, s = n.className, c = n.style, d = n.disabled, f = n.onChange, v = n.onInternalAutoSize, h = yt(n, Bx), b = Jt(o, {
    value: a,
    postState: function(G) {
      return G ?? "";
    }
  }), m = K(b, 2), g = m[0], y = m[1], p = function(G) {
    y(G.target.value), f == null || f(G);
  }, S = u.useRef();
  u.useImperativeHandle(t, function() {
    return {
      textArea: S.current
    };
  });
  var E = u.useMemo(function() {
    return i && Be(i) === "object" ? [i.minRows, i.maxRows] : [];
  }, [i]), C = K(E, 2), x = C[0], w = C[1], $ = !!i, O = function() {
    try {
      if (document.activeElement === S.current) {
        var G = S.current, le = G.selectionStart, Y = G.selectionEnd, Q = G.scrollTop;
        S.current.setSelectionRange(le, Y), S.current.scrollTop = Q;
      }
    } catch {
    }
  }, R = u.useState(Hi), _ = K(R, 2), I = _[0], F = _[1], M = u.useState(), V = K(M, 2), N = V[0], P = V[1], T = function() {
    F(ji), process.env.NODE_ENV === "test" && (v == null || v());
  };
  Rt(function() {
    $ && T();
  }, [a, x, w, $]), Rt(function() {
    if (I === ji)
      F(Li);
    else if (I === Li) {
      var U = Vx(S.current, !1, x, w);
      F(Hi), P(U);
    } else
      O();
  }, [I]);
  var j = u.useRef(), H = function() {
    St.cancel(j.current);
  }, L = function(G) {
    I === Hi && (l == null || l(G), i && (H(), j.current = St(function() {
      T();
    })));
  };
  u.useEffect(function() {
    return H;
  }, []);
  var q = $ ? N : null, k = z(z({}, c), q);
  return (I === ji || I === Li) && (k.overflowY = "hidden", k.overflowX = "hidden"), /* @__PURE__ */ u.createElement(nr, {
    onResize: L,
    disabled: !(i || l)
  }, /* @__PURE__ */ u.createElement("textarea", ke({}, h, {
    ref: S,
    style: k,
    className: ne(r, s, D({}, "".concat(r, "-disabled"), d)),
    disabled: d,
    value: g,
    onChange: p
  })));
}), kx = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "showCount", "count", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize", "onClear", "onPressEnter", "readOnly", "autoSize", "onKeyDown"], Ux = /* @__PURE__ */ B.forwardRef(function(e, t) {
  var n, r = e.defaultValue, o = e.value, a = e.onFocus, i = e.onBlur, l = e.onChange, s = e.allowClear, c = e.maxLength, d = e.onCompositionStart, f = e.onCompositionEnd, v = e.suffix, h = e.prefixCls, b = h === void 0 ? "rc-textarea" : h, m = e.showCount, g = e.count, y = e.className, p = e.style, S = e.disabled, E = e.hidden, C = e.classNames, x = e.styles, w = e.onResize, $ = e.onClear, O = e.onPressEnter, R = e.readOnly, _ = e.autoSize, I = e.onKeyDown, F = yt(e, kx), M = Jt(r, {
    value: o,
    defaultValue: r
  }), V = K(M, 2), N = V[0], P = V[1], T = N == null ? "" : String(N), j = B.useState(!1), H = K(j, 2), L = H[0], q = H[1], k = B.useRef(!1), U = B.useState(null), G = K(U, 2), le = G[0], Y = G[1], Q = ze(null), pe = ze(null), Z = function() {
    var Te;
    return (Te = pe.current) === null || Te === void 0 ? void 0 : Te.textArea;
  }, X = function() {
    Z().focus();
  };
  Xl(t, function() {
    var De;
    return {
      resizableTextArea: pe.current,
      focus: X,
      blur: function() {
        Z().blur();
      },
      nativeElement: ((De = Q.current) === null || De === void 0 ? void 0 : De.nativeElement) || Z()
    };
  }), Mt(function() {
    q(function(De) {
      return !S && De;
    });
  }, [S]);
  var te = B.useState(null), fe = K(te, 2), W = fe[0], ae = fe[1];
  B.useEffect(function() {
    if (W) {
      var De;
      (De = Z()).setSelectionRange.apply(De, Ce(W));
    }
  }, [W]);
  var ie = cg(g, m), ue = (n = ie.max) !== null && n !== void 0 ? n : c, ve = Number(ue) > 0, $e = ie.strategy(T), Re = !!ue && $e > ue, Se = function(Te, Ye) {
    var Je = Ye;
    !k.current && ie.exceedFormatter && ie.max && ie.strategy(Ye) > ie.max && (Je = ie.exceedFormatter(Ye, {
      max: ie.max
    }), Ye !== Je && ae([Z().selectionStart || 0, Z().selectionEnd || 0])), P(Je), Ha(Te.currentTarget, Te, l, Je);
  }, _e = function(Te) {
    k.current = !0, d == null || d(Te);
  }, J = function(Te) {
    k.current = !1, Se(Te, Te.currentTarget.value), f == null || f(Te);
  }, re = function(Te) {
    Se(Te, Te.target.value);
  }, ge = function(Te) {
    Te.key === "Enter" && O && O(Te), I == null || I(Te);
  }, be = function(Te) {
    q(!0), a == null || a(Te);
  }, Ie = function(Te) {
    q(!1), i == null || i(Te);
  }, Me = function(Te) {
    P(""), X(), Ha(Z(), Te, l);
  }, Ue = v, rt;
  ie.show && (ie.showFormatter ? rt = ie.showFormatter({
    value: T,
    count: $e,
    maxLength: ue
  }) : rt = "".concat($e).concat(ve ? " / ".concat(ue) : ""), Ue = /* @__PURE__ */ B.createElement(B.Fragment, null, Ue, /* @__PURE__ */ B.createElement("span", {
    className: ne("".concat(b, "-data-count"), C == null ? void 0 : C.count),
    style: x == null ? void 0 : x.count
  }, rt)));
  var ct = function(Te) {
    var Ye;
    w == null || w(Te), (Ye = Z()) !== null && Ye !== void 0 && Ye.style.height && Y(!0);
  }, ft = !_ && !m && !s;
  return /* @__PURE__ */ B.createElement(zs, {
    ref: Q,
    value: T,
    allowClear: s,
    handleReset: Me,
    suffix: Ue,
    prefixCls: b,
    classNames: z(z({}, C), {}, {
      affixWrapper: ne(C == null ? void 0 : C.affixWrapper, D(D({}, "".concat(b, "-show-count"), m), "".concat(b, "-textarea-allow-clear"), s))
    }),
    disabled: S,
    focused: L,
    className: ne(y, Re && "".concat(b, "-out-of-range")),
    style: z(z({}, p), le && !ft ? {
      height: "auto"
    } : {}),
    dataAttrs: {
      affixWrapper: {
        "data-count": typeof rt == "string" ? rt : void 0
      }
    },
    hidden: E,
    readOnly: R,
    onClear: $
  }, /* @__PURE__ */ B.createElement(Wx, ke({}, F, {
    autoSize: _,
    maxLength: c,
    onKeyDown: ge,
    onChange: re,
    onFocus: be,
    onBlur: Ie,
    onCompositionStart: _e,
    onCompositionEnd: J,
    className: ne(C == null ? void 0 : C.textarea),
    style: z(z({}, x == null ? void 0 : x.textarea), {}, {
      resize: p == null ? void 0 : p.resize
    }),
    disabled: S,
    prefixCls: b,
    onResize: ct,
    ref: pe,
    readOnly: R
  })));
}), Gx = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const qx = /* @__PURE__ */ tr((e, t) => {
  var n, r;
  const {
    prefixCls: o,
    bordered: a = !0,
    size: i,
    disabled: l,
    status: s,
    allowClear: c,
    classNames: d,
    rootClassName: f,
    className: v,
    style: h,
    styles: b,
    variant: m
  } = e, g = Gx(e, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "classNames", "rootClassName", "className", "style", "styles", "variant"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: H
    } = zt("TextArea");
    H(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: y,
    direction: p,
    textArea: S
  } = u.useContext(Ct), E = kn(i), C = u.useContext(Ln), x = l ?? C, {
    status: w,
    hasFeedback: $,
    feedbackIcon: O
  } = u.useContext(Pn), R = Yo(w, s), _ = u.useRef(null);
  u.useImperativeHandle(t, () => {
    var H;
    return {
      resizableTextArea: (H = _.current) === null || H === void 0 ? void 0 : H.resizableTextArea,
      focus: (L) => {
        var q, k;
        xx((k = (q = _.current) === null || q === void 0 ? void 0 : q.resizableTextArea) === null || k === void 0 ? void 0 : k.textArea, L);
      },
      blur: () => {
        var L;
        return (L = _.current) === null || L === void 0 ? void 0 : L.blur();
      }
    };
  });
  const I = y("input", o), F = io(I), [M, V, N] = Ds(I, F), [P, T] = Ja("textArea", m, a), j = fg(c ?? (S == null ? void 0 : S.allowClear));
  return M(/* @__PURE__ */ u.createElement(Ux, Object.assign({
    autoComplete: S == null ? void 0 : S.autoComplete
  }, g, {
    style: Object.assign(Object.assign({}, S == null ? void 0 : S.style), h),
    styles: Object.assign(Object.assign({}, S == null ? void 0 : S.styles), b),
    disabled: x,
    allowClear: j,
    className: ne(N, F, v, f, S == null ? void 0 : S.className),
    classNames: Object.assign(Object.assign(Object.assign({}, d), S == null ? void 0 : S.classNames), {
      textarea: ne({
        [`${I}-sm`]: E === "small",
        [`${I}-lg`]: E === "large"
      }, V, d == null ? void 0 : d.textarea, (n = S == null ? void 0 : S.classNames) === null || n === void 0 ? void 0 : n.textarea),
      variant: ne({
        [`${I}-${P}`]: T
      }, Pr(I, R)),
      affixWrapper: ne(`${I}-textarea-affix-wrapper`, {
        [`${I}-affix-wrapper-rtl`]: p === "rtl",
        [`${I}-affix-wrapper-sm`]: E === "small",
        [`${I}-affix-wrapper-lg`]: E === "large",
        [`${I}-textarea-show-count`]: e.showCount || ((r = e.count) === null || r === void 0 ? void 0 : r.show)
      }, V)
    }),
    prefixCls: I,
    suffix: $ && /* @__PURE__ */ u.createElement("span", {
      className: `${I}-textarea-suffix`
    }, O),
    ref: _
  })));
}), so = Qo;
so.Group = Sx;
so.Search = pg;
so.TextArea = qx;
so.Password = hg;
so.OTP = Px;
const Kx = /(^#[\da-f]{6}$)|(^#[\da-f]{8}$)/i, Xx = (e) => Kx.test(`#${e}`), Yx = (e) => {
  let {
    prefixCls: t,
    value: n,
    onChange: r
  } = e;
  const o = `${t}-hex-input`, [a, i] = jt(() => n ? yo(n.toHexString()) : void 0);
  Mt(() => {
    n && i(yo(n.toHexString()));
  }, [n]);
  const l = (s) => {
    const c = s.target.value;
    i(yo(c)), Xx(yo(c, !0)) && (r == null || r(sn(c)));
  };
  return /* @__PURE__ */ B.createElement(so, {
    className: o,
    value: a,
    prefix: "#",
    onChange: l,
    size: "small"
  });
}, Qx = (e) => {
  let {
    prefixCls: t,
    value: n,
    onChange: r
  } = e;
  const o = `${t}-hsb-input`, [a, i] = jt(sn(n || "#000"));
  Mt(() => {
    n && i(n);
  }, [n]);
  const l = (s, c) => {
    const d = a.toHsb();
    d[c] = c === "h" ? s : (s || 0) / 100;
    const f = sn(d);
    n || i(f), r == null || r(f);
  };
  return /* @__PURE__ */ B.createElement("div", {
    className: o
  }, /* @__PURE__ */ B.createElement(Rr, {
    max: 360,
    min: 0,
    value: Number(a.toHsb().h),
    prefixCls: t,
    className: o,
    formatter: (s) => xa(s || 0).toString(),
    onChange: (s) => l(Number(s), "h")
  }), /* @__PURE__ */ B.createElement(Rr, {
    max: 100,
    min: 0,
    value: Number(a.toHsb().s) * 100,
    prefixCls: t,
    className: o,
    formatter: (s) => `${xa(s || 0)}%`,
    onChange: (s) => l(Number(s), "s")
  }), /* @__PURE__ */ B.createElement(Rr, {
    max: 100,
    min: 0,
    value: Number(a.toHsb().b) * 100,
    prefixCls: t,
    className: o,
    formatter: (s) => `${xa(s || 0)}%`,
    onChange: (s) => l(Number(s), "b")
  }));
}, Zx = (e) => {
  let {
    prefixCls: t,
    value: n,
    onChange: r
  } = e;
  const o = `${t}-rgb-input`, [a, i] = jt(sn(n || "#000"));
  Mt(() => {
    n && i(n);
  }, [n]);
  const l = (s, c) => {
    const d = a.toRgb();
    d[c] = s || 0;
    const f = sn(d);
    n || i(f), r == null || r(f);
  };
  return /* @__PURE__ */ B.createElement("div", {
    className: o
  }, /* @__PURE__ */ B.createElement(Rr, {
    max: 255,
    min: 0,
    value: Number(a.toRgb().r),
    prefixCls: t,
    className: o,
    onChange: (s) => l(Number(s), "r")
  }), /* @__PURE__ */ B.createElement(Rr, {
    max: 255,
    min: 0,
    value: Number(a.toRgb().g),
    prefixCls: t,
    className: o,
    onChange: (s) => l(Number(s), "g")
  }), /* @__PURE__ */ B.createElement(Rr, {
    max: 255,
    min: 0,
    value: Number(a.toRgb().b),
    prefixCls: t,
    className: o,
    onChange: (s) => l(Number(s), "b")
  }));
}, Jx = [fr.hex, fr.hsb, fr.rgb].map((e) => ({
  value: e,
  label: e.toLocaleUpperCase()
})), ew = (e) => {
  const {
    prefixCls: t,
    format: n,
    value: r,
    disabledAlpha: o,
    onFormatChange: a,
    onChange: i
  } = e, [l, s] = Jt(fr.hex, {
    value: n,
    onChange: a
  }), c = `${t}-input`, d = (v) => {
    s(v);
  }, f = an(() => {
    const v = {
      value: r,
      prefixCls: t,
      onChange: i
    };
    switch (l) {
      case fr.hsb:
        return /* @__PURE__ */ B.createElement(Qx, Object.assign({}, v));
      case fr.rgb:
        return /* @__PURE__ */ B.createElement(Zx, Object.assign({}, v));
      default:
        return /* @__PURE__ */ B.createElement(Yx, Object.assign({}, v));
    }
  }, [l, t, r, i]);
  return /* @__PURE__ */ B.createElement("div", {
    className: `${c}-container`
  }, /* @__PURE__ */ B.createElement(_r, {
    value: l,
    variant: "borderless",
    getPopupContainer: (v) => v,
    popupMatchSelectWidth: 68,
    placement: "bottomRight",
    onChange: d,
    className: `${t}-format-select`,
    size: "small",
    options: Jx
  }), /* @__PURE__ */ B.createElement("div", {
    className: c
  }, f), !o && /* @__PURE__ */ B.createElement(yx, {
    prefixCls: t,
    value: r,
    onChange: i
  }));
};
function Ul(e, t, n) {
  return (e - t) / (n - t);
}
function Bs(e, t, n, r) {
  var o = Ul(t, n, r), a = {};
  switch (e) {
    case "rtl":
      a.right = "".concat(o * 100, "%"), a.transform = "translateX(50%)";
      break;
    case "btt":
      a.bottom = "".concat(o * 100, "%"), a.transform = "translateY(50%)";
      break;
    case "ttb":
      a.top = "".concat(o * 100, "%"), a.transform = "translateY(-50%)";
      break;
    default:
      a.left = "".concat(o * 100, "%"), a.transform = "translateX(-50%)";
      break;
  }
  return a;
}
function qr(e, t) {
  return Array.isArray(e) ? e[t] : e;
}
var Tr = /* @__PURE__ */ u.createContext({
  min: 0,
  max: 0,
  direction: "ltr",
  step: 1,
  includedStart: 0,
  includedEnd: 0,
  tabIndex: 0,
  keyboard: !0,
  styles: {},
  classNames: {}
}), bg = /* @__PURE__ */ u.createContext({}), tw = ["prefixCls", "value", "valueIndex", "onStartMove", "onDelete", "style", "render", "dragging", "draggingDelete", "onOffsetChange", "onChangeComplete", "onFocus", "onMouseEnter"], Gl = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.value, o = e.valueIndex, a = e.onStartMove, i = e.onDelete, l = e.style, s = e.render, c = e.dragging, d = e.draggingDelete, f = e.onOffsetChange, v = e.onChangeComplete, h = e.onFocus, b = e.onMouseEnter, m = yt(e, tw), g = u.useContext(Tr), y = g.min, p = g.max, S = g.direction, E = g.disabled, C = g.keyboard, x = g.range, w = g.tabIndex, $ = g.ariaLabelForHandle, O = g.ariaLabelledByForHandle, R = g.ariaValueTextFormatterForHandle, _ = g.styles, I = g.classNames, F = "".concat(n, "-handle"), M = function(U) {
    E || a(U, o);
  }, V = function(U) {
    h == null || h(U, o);
  }, N = function(U) {
    b(U, o);
  }, P = function(U) {
    if (!E && C) {
      var G = null;
      switch (U.which || U.keyCode) {
        case se.LEFT:
          G = S === "ltr" || S === "btt" ? -1 : 1;
          break;
        case se.RIGHT:
          G = S === "ltr" || S === "btt" ? 1 : -1;
          break;
        case se.UP:
          G = S !== "ttb" ? 1 : -1;
          break;
        case se.DOWN:
          G = S !== "ttb" ? -1 : 1;
          break;
        case se.HOME:
          G = "min";
          break;
        case se.END:
          G = "max";
          break;
        case se.PAGE_UP:
          G = 2;
          break;
        case se.PAGE_DOWN:
          G = -2;
          break;
        case se.BACKSPACE:
        case se.DELETE:
          i(o);
          break;
      }
      G !== null && (U.preventDefault(), f(G, o));
    }
  }, T = function(U) {
    switch (U.which || U.keyCode) {
      case se.LEFT:
      case se.RIGHT:
      case se.UP:
      case se.DOWN:
      case se.HOME:
      case se.END:
      case se.PAGE_UP:
      case se.PAGE_DOWN:
        v == null || v();
        break;
    }
  }, j = Bs(S, r, y, p), H = {};
  if (o !== null) {
    var L;
    H = {
      tabIndex: E ? null : qr(w, o),
      role: "slider",
      "aria-valuemin": y,
      "aria-valuemax": p,
      "aria-valuenow": r,
      "aria-disabled": E,
      "aria-label": qr($, o),
      "aria-labelledby": qr(O, o),
      "aria-valuetext": (L = qr(R, o)) === null || L === void 0 ? void 0 : L(r),
      "aria-orientation": S === "ltr" || S === "rtl" ? "horizontal" : "vertical",
      onMouseDown: M,
      onTouchStart: M,
      onFocus: V,
      onMouseEnter: N,
      onKeyDown: P,
      onKeyUp: T
    };
  }
  var q = /* @__PURE__ */ u.createElement("div", ke({
    ref: t,
    className: ne(F, D(D(D({}, "".concat(F, "-").concat(o + 1), o !== null && x), "".concat(F, "-dragging"), c), "".concat(F, "-dragging-delete"), d), I.handle),
    style: z(z(z({}, j), l), _.handle)
  }, H, m));
  return s && (q = s(q, {
    index: o,
    prefixCls: n,
    value: r,
    dragging: c,
    draggingDelete: d
  })), q;
});
process.env.NODE_ENV !== "production" && (Gl.displayName = "Handle");
var nw = ["prefixCls", "style", "onStartMove", "onOffsetChange", "values", "handleRender", "activeHandleRender", "draggingIndex", "draggingDelete", "onFocus"], yg = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.style, o = e.onStartMove, a = e.onOffsetChange, i = e.values, l = e.handleRender, s = e.activeHandleRender, c = e.draggingIndex, d = e.draggingDelete, f = e.onFocus, v = yt(e, nw), h = u.useRef({}), b = u.useState(!1), m = K(b, 2), g = m[0], y = m[1], p = u.useState(-1), S = K(p, 2), E = S[0], C = S[1], x = function(_) {
    C(_), y(!0);
  }, w = function(_, I) {
    x(I), f == null || f(_);
  }, $ = function(_, I) {
    x(I);
  };
  u.useImperativeHandle(t, function() {
    return {
      focus: function(_) {
        var I;
        (I = h.current[_]) === null || I === void 0 || I.focus();
      },
      hideHelp: function() {
        Bi(function() {
          y(!1);
        });
      }
    };
  });
  var O = z({
    prefixCls: n,
    onStartMove: o,
    onOffsetChange: a,
    render: l,
    onFocus: w,
    onMouseEnter: $
  }, v);
  return /* @__PURE__ */ u.createElement(u.Fragment, null, i.map(function(R, _) {
    var I = c === _;
    return /* @__PURE__ */ u.createElement(Gl, ke({
      ref: function(M) {
        M ? h.current[_] = M : delete h.current[_];
      },
      dragging: I,
      draggingDelete: I && d,
      style: qr(r, _),
      key: _,
      value: R,
      valueIndex: _
    }, O));
  }), s && g && /* @__PURE__ */ u.createElement(Gl, ke({
    key: "a11y"
  }, O, {
    value: i[E],
    valueIndex: null,
    dragging: c !== -1,
    draggingDelete: d,
    render: s,
    style: {
      pointerEvents: "none"
    },
    tabIndex: null,
    "aria-hidden": !0
  })));
});
process.env.NODE_ENV !== "production" && (yg.displayName = "Handles");
var rw = function(t) {
  var n = t.prefixCls, r = t.style, o = t.children, a = t.value, i = t.onClick, l = u.useContext(Tr), s = l.min, c = l.max, d = l.direction, f = l.includedStart, v = l.includedEnd, h = l.included, b = "".concat(n, "-text"), m = Bs(d, a, s, c);
  return /* @__PURE__ */ u.createElement("span", {
    className: ne(b, D({}, "".concat(b, "-active"), h && f <= a && a <= v)),
    style: z(z({}, m), r),
    onMouseDown: function(y) {
      y.stopPropagation();
    },
    onClick: function() {
      i(a);
    }
  }, o);
}, ow = function(t) {
  var n = t.prefixCls, r = t.marks, o = t.onClick, a = "".concat(n, "-mark");
  return r.length ? /* @__PURE__ */ u.createElement("div", {
    className: a
  }, r.map(function(i) {
    var l = i.value, s = i.style, c = i.label;
    return /* @__PURE__ */ u.createElement(rw, {
      key: l,
      prefixCls: a,
      style: s,
      value: l,
      onClick: o
    }, c);
  })) : null;
}, aw = function(t) {
  var n = t.prefixCls, r = t.value, o = t.style, a = t.activeStyle, i = u.useContext(Tr), l = i.min, s = i.max, c = i.direction, d = i.included, f = i.includedStart, v = i.includedEnd, h = "".concat(n, "-dot"), b = d && f <= r && r <= v, m = z(z({}, Bs(c, r, l, s)), typeof o == "function" ? o(r) : o);
  return b && (m = z(z({}, m), typeof a == "function" ? a(r) : a)), /* @__PURE__ */ u.createElement("span", {
    className: ne(h, D({}, "".concat(h, "-active"), b)),
    style: m
  });
}, iw = function(t) {
  var n = t.prefixCls, r = t.marks, o = t.dots, a = t.style, i = t.activeStyle, l = u.useContext(Tr), s = l.min, c = l.max, d = l.step, f = u.useMemo(function() {
    var v = /* @__PURE__ */ new Set();
    if (r.forEach(function(b) {
      v.add(b.value);
    }), o && d !== null)
      for (var h = s; h <= c; )
        v.add(h), h += d;
    return Array.from(v);
  }, [s, c, d, o, r]);
  return /* @__PURE__ */ u.createElement("div", {
    className: "".concat(n, "-step")
  }, f.map(function(v) {
    return /* @__PURE__ */ u.createElement(aw, {
      prefixCls: n,
      key: v,
      value: v,
      style: a,
      activeStyle: i
    });
  }));
}, Uu = function(t) {
  var n = t.prefixCls, r = t.style, o = t.start, a = t.end, i = t.index, l = t.onStartMove, s = t.replaceCls, c = u.useContext(Tr), d = c.direction, f = c.min, v = c.max, h = c.disabled, b = c.range, m = c.classNames, g = "".concat(n, "-track"), y = Ul(o, f, v), p = Ul(a, f, v), S = function(w) {
    !h && l && l(w, -1);
  }, E = {};
  switch (d) {
    case "rtl":
      E.right = "".concat(y * 100, "%"), E.width = "".concat(p * 100 - y * 100, "%");
      break;
    case "btt":
      E.bottom = "".concat(y * 100, "%"), E.height = "".concat(p * 100 - y * 100, "%");
      break;
    case "ttb":
      E.top = "".concat(y * 100, "%"), E.height = "".concat(p * 100 - y * 100, "%");
      break;
    default:
      E.left = "".concat(y * 100, "%"), E.width = "".concat(p * 100 - y * 100, "%");
  }
  var C = s || ne(g, D(D({}, "".concat(g, "-").concat(i + 1), i !== null && b), "".concat(n, "-track-draggable"), l), m.track);
  return /* @__PURE__ */ u.createElement("div", {
    className: C,
    style: z(z({}, E), r),
    onMouseDown: S,
    onTouchStart: S
  });
}, lw = function(t) {
  var n = t.prefixCls, r = t.style, o = t.values, a = t.startPoint, i = t.onStartMove, l = u.useContext(Tr), s = l.included, c = l.range, d = l.min, f = l.styles, v = l.classNames, h = u.useMemo(function() {
    if (!c) {
      if (o.length === 0)
        return [];
      var m = a ?? d, g = o[0];
      return [{
        start: Math.min(m, g),
        end: Math.max(m, g)
      }];
    }
    for (var y = [], p = 0; p < o.length - 1; p += 1)
      y.push({
        start: o[p],
        end: o[p + 1]
      });
    return y;
  }, [o, c, a, d]);
  if (!s)
    return null;
  var b = v.tracks || f.tracks ? /* @__PURE__ */ u.createElement(Uu, {
    index: null,
    prefixCls: n,
    start: h[0].start,
    end: h[h.length - 1].end,
    replaceCls: ne(v.tracks, "".concat(n, "-tracks")),
    style: f.tracks
  }) : null;
  return /* @__PURE__ */ u.createElement(u.Fragment, null, b, h.map(function(m, g) {
    var y = m.start, p = m.end;
    return /* @__PURE__ */ u.createElement(Uu, {
      index: g,
      prefixCls: n,
      style: z(z({}, qr(r, g)), f.track),
      start: y,
      end: p,
      key: g,
      onStartMove: i
    });
  }));
}, sw = 130;
function Gu(e) {
  var t = "targetTouches" in e ? e.targetTouches[0] : e;
  return {
    pageX: t.pageX,
    pageY: t.pageY
  };
}
function cw(e, t, n, r, o, a, i, l, s, c, d) {
  var f = u.useState(null), v = K(f, 2), h = v[0], b = v[1], m = u.useState(-1), g = K(m, 2), y = g[0], p = g[1], S = u.useState(!1), E = K(S, 2), C = E[0], x = E[1], w = u.useState(n), $ = K(w, 2), O = $[0], R = $[1], _ = u.useState(n), I = K(_, 2), F = I[0], M = I[1], V = u.useRef(null), N = u.useRef(null), P = u.useRef(null), T = u.useContext(bg), j = T.onDragStart, H = T.onDragChange;
  u.useLayoutEffect(function() {
    y === -1 && R(n);
  }, [n, y]), u.useEffect(function() {
    return function() {
      document.removeEventListener("mousemove", V.current), document.removeEventListener("mouseup", N.current), P.current && (P.current.removeEventListener("touchmove", V.current), P.current.removeEventListener("touchend", N.current));
    };
  }, []);
  var L = function(le, Y, Q) {
    Y !== void 0 && b(Y), R(le);
    var pe = le;
    Q && (pe = le.filter(function(Z, X) {
      return X !== y;
    })), i(pe), H && H({
      rawValues: le,
      deleteIndex: Q ? y : -1,
      draggingIndex: y,
      draggingValue: Y
    });
  }, q = $t(function(G, le, Y) {
    if (G === -1) {
      var Q = F[0], pe = F[F.length - 1], Z = r - Q, X = o - pe, te = le * (o - r);
      te = Math.max(te, Z), te = Math.min(te, X);
      var fe = a(Q + te);
      te = fe - Q;
      var W = F.map(function(ve) {
        return ve + te;
      });
      L(W);
    } else {
      var ae = (o - r) * le, ie = Ce(O);
      ie[G] = F[G];
      var ue = s(ie, ae, G, "dist");
      L(ue.values, ue.value, Y);
    }
  }), k = function(le, Y, Q) {
    le.stopPropagation();
    var pe = Q || n, Z = pe[Y];
    p(Y), b(Z), M(pe), R(pe), x(!1);
    var X = Gu(le), te = X.pageX, fe = X.pageY, W = !1;
    j && j({
      rawValues: pe,
      draggingIndex: Y,
      draggingValue: Z
    });
    var ae = function(ve) {
      ve.preventDefault();
      var $e = Gu(ve), Re = $e.pageX, Se = $e.pageY, _e = Re - te, J = Se - fe, re = e.current.getBoundingClientRect(), ge = re.width, be = re.height, Ie, Me;
      switch (t) {
        case "btt":
          Ie = -J / be, Me = _e;
          break;
        case "ttb":
          Ie = J / be, Me = _e;
          break;
        case "rtl":
          Ie = -_e / ge, Me = J;
          break;
        default:
          Ie = _e / ge, Me = J;
      }
      W = c ? Math.abs(Me) > sw && d < O.length : !1, x(W), q(Y, Ie, W);
    }, ie = function ue(ve) {
      ve.preventDefault(), document.removeEventListener("mouseup", ue), document.removeEventListener("mousemove", ae), P.current && (P.current.removeEventListener("touchmove", V.current), P.current.removeEventListener("touchend", N.current)), V.current = null, N.current = null, P.current = null, l(W), p(-1), x(!1);
    };
    document.addEventListener("mouseup", ie), document.addEventListener("mousemove", ae), le.currentTarget.addEventListener("touchend", ie), le.currentTarget.addEventListener("touchmove", ae), V.current = ae, N.current = ie, P.current = le.currentTarget;
  }, U = u.useMemo(function() {
    var G = Ce(n).sort(function(Z, X) {
      return Z - X;
    }), le = Ce(O).sort(function(Z, X) {
      return Z - X;
    }), Y = {};
    le.forEach(function(Z) {
      Y[Z] = (Y[Z] || 0) + 1;
    }), G.forEach(function(Z) {
      Y[Z] = (Y[Z] || 0) - 1;
    });
    var Q = c ? 1 : 0, pe = Object.values(Y).reduce(function(Z, X) {
      return Z + Math.abs(X);
    }, 0);
    return pe <= Q ? O : n;
  }, [n, O, c]);
  return [y, h, C, U, k];
}
function uw(e, t, n, r, o, a) {
  var i = u.useCallback(function(h) {
    return Math.max(e, Math.min(t, h));
  }, [e, t]), l = u.useCallback(function(h) {
    if (n !== null) {
      var b = e + Math.round((i(h) - e) / n) * n, m = function(S) {
        return (String(S).split(".")[1] || "").length;
      }, g = Math.max(m(n), m(t), m(e)), y = Number(b.toFixed(g));
      return e <= y && y <= t ? y : null;
    }
    return null;
  }, [n, e, t, i]), s = u.useCallback(function(h) {
    var b = i(h), m = r.map(function(p) {
      return p.value;
    });
    n !== null && m.push(l(h)), m.push(e, t);
    var g = m[0], y = t - e;
    return m.forEach(function(p) {
      var S = Math.abs(b - p);
      S <= y && (g = p, y = S);
    }), g;
  }, [e, t, r, n, i, l]), c = function h(b, m, g) {
    var y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit";
    if (typeof m == "number") {
      var p, S = b[g], E = S + m, C = [];
      r.forEach(function(R) {
        C.push(R.value);
      }), C.push(e, t), C.push(l(S));
      var x = m > 0 ? 1 : -1;
      y === "unit" ? C.push(l(S + x * n)) : C.push(l(E)), C = C.filter(function(R) {
        return R !== null;
      }).filter(function(R) {
        return m < 0 ? R <= S : R >= S;
      }), y === "unit" && (C = C.filter(function(R) {
        return R !== S;
      }));
      var w = y === "unit" ? S : E;
      p = C[0];
      var $ = Math.abs(p - w);
      if (C.forEach(function(R) {
        var _ = Math.abs(R - w);
        _ < $ && (p = R, $ = _);
      }), p === void 0)
        return m < 0 ? e : t;
      if (y === "dist")
        return p;
      if (Math.abs(m) > 1) {
        var O = Ce(b);
        return O[g] = p, h(O, m - x, g, y);
      }
      return p;
    } else {
      if (m === "min")
        return e;
      if (m === "max")
        return t;
    }
  }, d = function(b, m, g) {
    var y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit", p = b[g], S = c(b, m, g, y);
    return {
      value: S,
      changed: S !== p
    };
  }, f = function(b) {
    return a === null && b === 0 || typeof a == "number" && b < a;
  }, v = function(b, m, g) {
    var y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit", p = b.map(s), S = p[g], E = c(p, m, g, y);
    if (p[g] = E, o === !1) {
      var C = a || 0;
      g > 0 && p[g - 1] !== S && (p[g] = Math.max(p[g], p[g - 1] + C)), g < p.length - 1 && p[g + 1] !== S && (p[g] = Math.min(p[g], p[g + 1] - C));
    } else if (typeof a == "number" || a === null) {
      for (var x = g + 1; x < p.length; x += 1)
        for (var w = !0; f(p[x] - p[x - 1]) && w; ) {
          var $ = d(p, 1, x);
          p[x] = $.value, w = $.changed;
        }
      for (var O = g; O > 0; O -= 1)
        for (var R = !0; f(p[O] - p[O - 1]) && R; ) {
          var _ = d(p, -1, O - 1);
          p[O - 1] = _.value, R = _.changed;
        }
      for (var I = p.length - 1; I > 0; I -= 1)
        for (var F = !0; f(p[I] - p[I - 1]) && F; ) {
          var M = d(p, -1, I - 1);
          p[I - 1] = M.value, F = M.changed;
        }
      for (var V = 0; V < p.length - 1; V += 1)
        for (var N = !0; f(p[V + 1] - p[V]) && N; ) {
          var P = d(p, 1, V + 1);
          p[V + 1] = P.value, N = P.changed;
        }
    }
    return {
      value: p[g],
      values: p
    };
  };
  return [s, v];
}
function dw(e) {
  return an(function() {
    if (e === !0 || !e)
      return [!!e, !1, !1, 0];
    var t = e.editable, n = e.draggableTrack, r = e.minCount, o = e.maxCount;
    return process.env.NODE_ENV !== "production" && vr(!t || !n, "`editable` can not work with `draggableTrack`."), [!0, t, !t && n, r || 0, o];
  }, [e]);
}
var Sg = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-slider" : n, o = e.className, a = e.style, i = e.classNames, l = e.styles, s = e.disabled, c = s === void 0 ? !1 : s, d = e.keyboard, f = d === void 0 ? !0 : d, v = e.autoFocus, h = e.onFocus, b = e.onBlur, m = e.min, g = m === void 0 ? 0 : m, y = e.max, p = y === void 0 ? 100 : y, S = e.step, E = S === void 0 ? 1 : S, C = e.value, x = e.defaultValue, w = e.range, $ = e.count, O = e.onChange, R = e.onBeforeChange, _ = e.onAfterChange, I = e.onChangeComplete, F = e.allowCross, M = F === void 0 ? !0 : F, V = e.pushable, N = V === void 0 ? !1 : V, P = e.reverse, T = e.vertical, j = e.included, H = j === void 0 ? !0 : j, L = e.startPoint, q = e.trackStyle, k = e.handleStyle, U = e.railStyle, G = e.dotStyle, le = e.activeDotStyle, Y = e.marks, Q = e.dots, pe = e.handleRender, Z = e.activeHandleRender, X = e.track, te = e.tabIndex, fe = te === void 0 ? 0 : te, W = e.ariaLabelForHandle, ae = e.ariaLabelledByForHandle, ie = e.ariaValueTextFormatterForHandle, ue = u.useRef(null), ve = u.useRef(null), $e = u.useMemo(function() {
    return T ? P ? "ttb" : "btt" : P ? "rtl" : "ltr";
  }, [P, T]), Re = dw(w), Se = K(Re, 5), _e = Se[0], J = Se[1], re = Se[2], ge = Se[3], be = Se[4], Ie = u.useMemo(function() {
    return isFinite(g) ? g : 0;
  }, [g]), Me = u.useMemo(function() {
    return isFinite(p) ? p : 100;
  }, [p]), Ue = u.useMemo(function() {
    return E !== null && E <= 0 ? 1 : E;
  }, [E]), rt = u.useMemo(function() {
    return typeof N == "boolean" ? N ? Ue : !1 : N >= 0 ? N : !1;
  }, [N, Ue]), ct = u.useMemo(function() {
    return Object.keys(Y || {}).map(function(de) {
      var he = Y[de], Ze = {
        value: Number(de)
      };
      return he && Be(he) === "object" && !/* @__PURE__ */ u.isValidElement(he) && ("label" in he || "style" in he) ? (Ze.style = he.style, Ze.label = he.label) : Ze.label = he, Ze;
    }).filter(function(de) {
      var he = de.label;
      return he || typeof he == "number";
    }).sort(function(de, he) {
      return de.value - he.value;
    });
  }, [Y]), ft = uw(Ie, Me, Ue, ct, M, rt), De = K(ft, 2), Te = De[0], Ye = De[1], Je = Jt(x, {
    value: C
  }), et = K(Je, 2), lt = et[0], It = et[1], mt = u.useMemo(function() {
    var de = lt == null ? [] : Array.isArray(lt) ? lt : [lt], he = K(de, 1), Ze = he[0], st = Ze === void 0 ? Ie : Ze, at = lt === null ? [] : [st];
    if (_e) {
      if (at = Ce(de), $ || lt === void 0) {
        var Wt = $ >= 0 ? $ + 1 : 2;
        for (at = at.slice(0, Wt); at.length < Wt; ) {
          var kt;
          at.push((kt = at[at.length - 1]) !== null && kt !== void 0 ? kt : Ie);
        }
      }
      at.sort(function(At, _t) {
        return At - _t;
      });
    }
    return at.forEach(function(At, _t) {
      at[_t] = Te(At);
    }), at;
  }, [lt, _e, Ie, $, Te]), vt = function(he) {
    return _e ? he : he[0];
  }, Fe = $t(function(de) {
    var he = Ce(de).sort(function(Ze, st) {
      return Ze - st;
    });
    O && !Ia(he, mt, !0) && O(vt(he)), It(he);
  }), Ee = $t(function(de) {
    de && ue.current.hideHelp();
    var he = vt(mt);
    _ == null || _(he), ut(!_, "[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."), I == null || I(he);
  }), Ve = function(he) {
    if (!(c || !J || mt.length <= ge)) {
      var Ze = Ce(mt);
      Ze.splice(he, 1), R == null || R(vt(Ze)), Fe(Ze);
      var st = Math.max(0, he - 1);
      ue.current.hideHelp(), ue.current.focus(st);
    }
  }, je = cw(ve, $e, mt, Ie, Me, Te, Fe, Ee, Ye, J, ge), qe = K(je, 5), Ae = qe[0], ce = qe[1], We = qe[2], dt = qe[3], Qe = qe[4], Pe = function(he, Ze) {
    if (!c) {
      var st = Ce(mt), at = 0, Wt = 0, kt = Me - Ie;
      mt.forEach(function(Ut, Cn) {
        var Un = Math.abs(he - Ut);
        Un <= kt && (kt = Un, at = Cn), Ut < he && (Wt = Cn);
      });
      var At = at;
      J && kt !== 0 && (!be || mt.length < be) ? (st.splice(Wt + 1, 0, he), At = Wt + 1) : st[at] = he, _e && !mt.length && $ === void 0 && st.push(he);
      var _t = vt(st);
      if (R == null || R(_t), Fe(st), Ze) {
        var nn, tn;
        (nn = document.activeElement) === null || nn === void 0 || (tn = nn.blur) === null || tn === void 0 || tn.call(nn), ue.current.focus(At), Qe(Ze, At, st);
      } else
        _ == null || _(_t), ut(!_, "[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."), I == null || I(_t);
    }
  }, Oe = function(he) {
    he.preventDefault();
    var Ze = ve.current.getBoundingClientRect(), st = Ze.width, at = Ze.height, Wt = Ze.left, kt = Ze.top, At = Ze.bottom, _t = Ze.right, nn = he.clientX, tn = he.clientY, Ut;
    switch ($e) {
      case "btt":
        Ut = (At - tn) / at;
        break;
      case "ttb":
        Ut = (tn - kt) / at;
        break;
      case "rtl":
        Ut = (_t - nn) / st;
        break;
      default:
        Ut = (nn - Wt) / st;
    }
    var Cn = Ie + Ut * (Me - Ie);
    Pe(Te(Cn), he);
  }, Ne = u.useState(null), Le = K(Ne, 2), tt = Le[0], gt = Le[1], A = function(he, Ze) {
    if (!c) {
      var st = Ye(mt, he, Ze);
      R == null || R(vt(mt)), Fe(st.values), gt(st.value);
    }
  };
  u.useEffect(function() {
    if (tt !== null) {
      var de = mt.indexOf(tt);
      de >= 0 && ue.current.focus(de);
    }
    gt(null);
  }, [tt]);
  var ee = u.useMemo(function() {
    return re && Ue === null ? (process.env.NODE_ENV !== "production" && ut(!1, "`draggableTrack` is not supported when `step` is `null`."), !1) : re;
  }, [re, Ue]), me = $t(function(de, he) {
    Qe(de, he), R == null || R(vt(mt));
  }), we = Ae !== -1;
  u.useEffect(function() {
    if (!we) {
      var de = mt.lastIndexOf(ce);
      ue.current.focus(de);
    }
  }, [we]);
  var Ge = u.useMemo(function() {
    return Ce(dt).sort(function(de, he) {
      return de - he;
    });
  }, [dt]), Ke = u.useMemo(function() {
    return _e ? [Ge[0], Ge[Ge.length - 1]] : [Ie, Ge[0]];
  }, [Ge, _e, Ie]), Xe = K(Ke, 2), nt = Xe[0], xe = Xe[1];
  u.useImperativeHandle(t, function() {
    return {
      focus: function() {
        ue.current.focus(0);
      },
      blur: function() {
        var he, Ze = document, st = Ze.activeElement;
        (he = ve.current) !== null && he !== void 0 && he.contains(st) && (st == null || st.blur());
      }
    };
  }), u.useEffect(function() {
    v && ue.current.focus(0);
  }, []);
  var ye = u.useMemo(function() {
    return {
      min: Ie,
      max: Me,
      direction: $e,
      disabled: c,
      keyboard: f,
      step: Ue,
      included: H,
      includedStart: nt,
      includedEnd: xe,
      range: _e,
      tabIndex: fe,
      ariaLabelForHandle: W,
      ariaLabelledByForHandle: ae,
      ariaValueTextFormatterForHandle: ie,
      styles: l || {},
      classNames: i || {}
    };
  }, [Ie, Me, $e, c, f, Ue, H, nt, xe, _e, fe, W, ae, ie, l, i]);
  return /* @__PURE__ */ u.createElement(Tr.Provider, {
    value: ye
  }, /* @__PURE__ */ u.createElement("div", {
    ref: ve,
    className: ne(r, o, D(D(D(D({}, "".concat(r, "-disabled"), c), "".concat(r, "-vertical"), T), "".concat(r, "-horizontal"), !T), "".concat(r, "-with-marks"), ct.length)),
    style: a,
    onMouseDown: Oe
  }, /* @__PURE__ */ u.createElement("div", {
    className: ne("".concat(r, "-rail"), i == null ? void 0 : i.rail),
    style: z(z({}, U), l == null ? void 0 : l.rail)
  }), X !== !1 && /* @__PURE__ */ u.createElement(lw, {
    prefixCls: r,
    style: q,
    values: mt,
    startPoint: L,
    onStartMove: ee ? me : void 0
  }), /* @__PURE__ */ u.createElement(iw, {
    prefixCls: r,
    marks: ct,
    dots: Q,
    style: G,
    activeStyle: le
  }), /* @__PURE__ */ u.createElement(yg, {
    ref: ue,
    prefixCls: r,
    style: k,
    values: dt,
    draggingIndex: Ae,
    draggingDelete: We,
    onStartMove: me,
    onOffsetChange: A,
    onFocus: h,
    onBlur: b,
    handleRender: pe,
    activeHandleRender: Z,
    onChangeComplete: Ee,
    onDelete: J ? Ve : void 0
  }), /* @__PURE__ */ u.createElement(ow, {
    prefixCls: r,
    marks: ct,
    onClick: Pe
  })));
});
process.env.NODE_ENV !== "production" && (Sg.displayName = "Slider");
const ql = /* @__PURE__ */ u.forwardRef((e, t) => {
  const {
    open: n,
    draggingDelete: r
  } = e, o = ze(null), a = n && !r, i = ze(null);
  function l() {
    St.cancel(i.current), i.current = null;
  }
  function s() {
    i.current = St(() => {
      var c;
      (c = o.current) === null || c === void 0 || c.forceAlign(), i.current = null;
    });
  }
  return u.useEffect(() => (a ? s() : l(), l), [a, e.title]), /* @__PURE__ */ u.createElement(ei, Object.assign({
    ref: bn(o, t)
  }, e, {
    open: a
  }));
});
process.env.NODE_ENV !== "production" && (ql.displayName = "SliderTooltip");
const fw = (e) => {
  const {
    componentCls: t,
    antCls: n,
    controlSize: r,
    dotSize: o,
    marginFull: a,
    marginPart: i,
    colorFillContentHover: l,
    handleColorDisabled: s,
    calc: c,
    handleSize: d,
    handleSizeHover: f,
    handleActiveColor: v,
    handleActiveOutlineColor: h,
    handleLineWidth: b,
    handleLineWidthHover: m,
    motionDurationMid: g
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, un(e)), {
      position: "relative",
      height: r,
      margin: `${oe(i)} ${oe(a)}`,
      padding: 0,
      cursor: "pointer",
      touchAction: "none",
      "&-vertical": {
        margin: `${oe(a)} ${oe(i)}`
      },
      [`${t}-rail`]: {
        position: "absolute",
        backgroundColor: e.railBg,
        borderRadius: e.borderRadiusXS,
        transition: `background-color ${g}`
      },
      [`${t}-track,${t}-tracks`]: {
        position: "absolute",
        transition: `background-color ${g}`
      },
      [`${t}-track`]: {
        backgroundColor: e.trackBg,
        borderRadius: e.borderRadiusXS
      },
      [`${t}-track-draggable`]: {
        boxSizing: "content-box",
        backgroundClip: "content-box",
        border: "solid rgba(0,0,0,0)"
      },
      "&:hover": {
        [`${t}-rail`]: {
          backgroundColor: e.railHoverBg
        },
        [`${t}-track`]: {
          backgroundColor: e.trackHoverBg
        },
        [`${t}-dot`]: {
          borderColor: l
        },
        [`${t}-handle::after`]: {
          boxShadow: `0 0 0 ${oe(b)} ${e.colorPrimaryBorderHover}`
        },
        [`${t}-dot-active`]: {
          borderColor: e.dotActiveBorderColor
        }
      },
      [`${t}-handle`]: {
        position: "absolute",
        width: d,
        height: d,
        outline: "none",
        userSelect: "none",
        // Dragging status
        "&-dragging-delete": {
          opacity: 0
        },
        // 扩大选区
        "&::before": {
          content: '""',
          position: "absolute",
          insetInlineStart: c(b).mul(-1).equal(),
          insetBlockStart: c(b).mul(-1).equal(),
          width: c(d).add(c(b).mul(2)).equal(),
          height: c(d).add(c(b).mul(2)).equal(),
          backgroundColor: "transparent"
        },
        "&::after": {
          content: '""',
          position: "absolute",
          insetBlockStart: 0,
          insetInlineStart: 0,
          width: d,
          height: d,
          backgroundColor: e.colorBgElevated,
          boxShadow: `0 0 0 ${oe(b)} ${e.handleColor}`,
          outline: "0px solid transparent",
          borderRadius: "50%",
          cursor: "pointer",
          transition: `
            inset-inline-start ${g},
            inset-block-start ${g},
            width ${g},
            height ${g},
            box-shadow ${g},
            outline ${g}
          `
        },
        "&:hover, &:active, &:focus": {
          "&::before": {
            insetInlineStart: c(f).sub(d).div(2).add(m).mul(-1).equal(),
            insetBlockStart: c(f).sub(d).div(2).add(m).mul(-1).equal(),
            width: c(f).add(c(m).mul(2)).equal(),
            height: c(f).add(c(m).mul(2)).equal()
          },
          "&::after": {
            boxShadow: `0 0 0 ${oe(m)} ${v}`,
            outline: `6px solid ${h}`,
            width: f,
            height: f,
            insetInlineStart: e.calc(d).sub(f).div(2).equal(),
            insetBlockStart: e.calc(d).sub(f).div(2).equal()
          }
        }
      },
      [`&-lock ${t}-handle`]: {
        "&::before, &::after": {
          transition: "none"
        }
      },
      [`${t}-mark`]: {
        position: "absolute",
        fontSize: e.fontSize
      },
      [`${t}-mark-text`]: {
        position: "absolute",
        display: "inline-block",
        color: e.colorTextDescription,
        textAlign: "center",
        wordBreak: "keep-all",
        cursor: "pointer",
        userSelect: "none",
        "&-active": {
          color: e.colorText
        }
      },
      [`${t}-step`]: {
        position: "absolute",
        background: "transparent",
        pointerEvents: "none"
      },
      [`${t}-dot`]: {
        position: "absolute",
        width: o,
        height: o,
        backgroundColor: e.colorBgElevated,
        border: `${oe(b)} solid ${e.dotBorderColor}`,
        borderRadius: "50%",
        cursor: "pointer",
        transition: `border-color ${e.motionDurationSlow}`,
        pointerEvents: "auto",
        "&-active": {
          borderColor: e.dotActiveBorderColor
        }
      },
      [`&${t}-disabled`]: {
        cursor: "not-allowed",
        [`${t}-rail`]: {
          backgroundColor: `${e.railBg} !important`
        },
        [`${t}-track`]: {
          backgroundColor: `${e.trackBgDisabled} !important`
        },
        [`
          ${t}-dot
        `]: {
          backgroundColor: e.colorBgElevated,
          borderColor: e.trackBgDisabled,
          boxShadow: "none",
          cursor: "not-allowed"
        },
        [`${t}-handle::after`]: {
          backgroundColor: e.colorBgElevated,
          cursor: "not-allowed",
          width: d,
          height: d,
          boxShadow: `0 0 0 ${oe(b)} ${s}`,
          insetInlineStart: 0,
          insetBlockStart: 0
        },
        [`
          ${t}-mark-text,
          ${t}-dot
        `]: {
          cursor: "not-allowed !important"
        }
      },
      [`&-tooltip ${n}-tooltip-inner`]: {
        minWidth: "unset"
      }
    })
  };
}, Cg = (e, t) => {
  const {
    componentCls: n,
    railSize: r,
    handleSize: o,
    dotSize: a,
    marginFull: i,
    calc: l
  } = e, s = t ? "paddingBlock" : "paddingInline", c = t ? "width" : "height", d = t ? "height" : "width", f = t ? "insetBlockStart" : "insetInlineStart", v = t ? "top" : "insetInlineStart", h = l(r).mul(3).sub(o).div(2).equal(), b = l(o).sub(r).div(2).equal(), m = t ? {
    borderWidth: `${oe(b)} 0`,
    transform: `translateY(${oe(l(b).mul(-1).equal())})`
  } : {
    borderWidth: `0 ${oe(b)}`,
    transform: `translateX(${oe(e.calc(b).mul(-1).equal())})`
  };
  return {
    [s]: r,
    [d]: l(r).mul(3).equal(),
    [`${n}-rail`]: {
      [c]: "100%",
      [d]: r
    },
    [`${n}-track,${n}-tracks`]: {
      [d]: r
    },
    [`${n}-track-draggable`]: Object.assign({}, m),
    [`${n}-handle`]: {
      [f]: h
    },
    [`${n}-mark`]: {
      // Reset all
      insetInlineStart: 0,
      top: 0,
      // https://github.com/ant-design/ant-design/issues/43731
      [v]: l(r).mul(3).add(t ? 0 : i).equal(),
      [c]: "100%"
    },
    [`${n}-step`]: {
      // Reset all
      insetInlineStart: 0,
      top: 0,
      [v]: r,
      [c]: "100%",
      [d]: r
    },
    [`${n}-dot`]: {
      position: "absolute",
      [f]: l(r).sub(a).div(2).equal()
    }
  };
}, vw = (e) => {
  const {
    componentCls: t,
    marginPartWithMark: n
  } = e;
  return {
    [`${t}-horizontal`]: Object.assign(Object.assign({}, Cg(e, !0)), {
      [`&${t}-with-marks`]: {
        marginBottom: n
      }
    })
  };
}, gw = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-vertical`]: Object.assign(Object.assign({}, Cg(e, !1)), {
      height: "100%"
    })
  };
}, mw = (e) => {
  const n = e.controlHeightLG / 4, r = e.controlHeightSM / 2, o = e.lineWidth + 1, a = e.lineWidth + 1 * 1.5, i = e.colorPrimary, l = new Xt(i).setAlpha(0.2).toRgbString();
  return {
    controlSize: n,
    railSize: 4,
    handleSize: n,
    handleSizeHover: r,
    dotSize: 8,
    handleLineWidth: o,
    handleLineWidthHover: a,
    railBg: e.colorFillTertiary,
    railHoverBg: e.colorFillSecondary,
    trackBg: e.colorPrimaryBorder,
    trackHoverBg: e.colorPrimaryBorderHover,
    handleColor: e.colorPrimaryBorder,
    handleActiveColor: i,
    handleActiveOutlineColor: l,
    handleColorDisabled: new Xt(e.colorTextDisabled).onBackground(e.colorBgContainer).toHexShortString(),
    dotBorderColor: e.colorBorderSecondary,
    dotActiveBorderColor: e.colorPrimaryBorder,
    trackBgDisabled: e.colorBgContainerDisabled
  };
}, hw = yn("Slider", (e) => {
  const t = Pt(e, {
    marginPart: e.calc(e.controlHeight).sub(e.controlSize).div(2).equal(),
    marginFull: e.calc(e.controlSize).div(2).equal(),
    marginPartWithMark: e.calc(e.controlHeightLG).sub(e.controlSize).equal()
  });
  return [fw(t), vw(t), gw(t)];
}, mw), Eg = /* @__PURE__ */ Vo({});
function zi() {
  const [e, t] = u.useState(!1), n = u.useRef(), r = () => {
    St.cancel(n.current);
  }, o = (a) => {
    r(), a ? t(a) : n.current = St(() => {
      t(a);
    });
  };
  return u.useEffect(() => r, []), [e, o];
}
var pw = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function bw(e, t) {
  return e || e === null ? e : t || t === null ? t : (n) => typeof n == "number" ? n.toString() : "";
}
const xg = /* @__PURE__ */ B.forwardRef((e, t) => {
  const {
    prefixCls: n,
    range: r,
    className: o,
    rootClassName: a,
    style: i,
    disabled: l,
    // Deprecated Props
    tooltipPrefixCls: s,
    tipFormatter: c,
    tooltipVisible: d,
    getTooltipPopupContainer: f,
    tooltipPlacement: v,
    tooltip: h = {},
    onChangeComplete: b
  } = e, m = pw(e, ["prefixCls", "range", "className", "rootClassName", "style", "disabled", "tooltipPrefixCls", "tipFormatter", "tooltipVisible", "getTooltipPopupContainer", "tooltipPlacement", "tooltip", "onChangeComplete"]), {
    vertical: g
  } = e, {
    direction: y,
    slider: p,
    getPrefixCls: S,
    getPopupContainer: E
  } = B.useContext(Ct), C = B.useContext(Ln), x = l ?? C, {
    handleRender: w,
    direction: $
  } = B.useContext(Eg), R = ($ || y) === "rtl", [_, I] = zi(), [F, M] = zi(), V = Object.assign({}, h), {
    open: N,
    placement: P,
    getPopupContainer: T,
    prefixCls: j,
    formatter: H
  } = V, L = N ?? d, q = (_ || F) && L !== !1, k = bw(H, c), [U, G] = zi(), le = (ue) => {
    b == null || b(ue), G(!1);
  }, Y = (ue, ve) => ue || (ve ? R ? "left" : "right" : "top"), Q = S("slider", n), [pe, Z, X] = hw(Q), te = ne(o, p == null ? void 0 : p.className, a, {
    [`${Q}-rtl`]: R,
    [`${Q}-lock`]: U
  }, Z, X);
  if (R && !m.vertical && (m.reverse = !m.reverse), process.env.NODE_ENV !== "production") {
    const ue = zt("Slider");
    [["tooltipPrefixCls", "prefixCls"], ["getTooltipPopupContainer", "getPopupContainer"], ["tipFormatter", "formatter"], ["tooltipPlacement", "placement"], ["tooltipVisible", "open"]].forEach((ve) => {
      let [$e, Re] = ve;
      ue.deprecated(!($e in e), $e, `tooltip.${Re}`);
    });
  }
  B.useEffect(() => {
    const ue = () => {
      St(() => {
        M(!1);
      }, 1);
    };
    return document.addEventListener("mouseup", ue), () => {
      document.removeEventListener("mouseup", ue);
    };
  }, []);
  const fe = r && !L, W = w || ((ue, ve) => {
    const {
      index: $e
    } = ve, Re = ue.props;
    function Se(ge, be, Ie) {
      var Me, Ue, rt, ct;
      Ie && ((Ue = (Me = m)[ge]) === null || Ue === void 0 || Ue.call(Me, be)), (ct = (rt = Re)[ge]) === null || ct === void 0 || ct.call(rt, be);
    }
    const _e = Object.assign(Object.assign({}, Re), {
      onMouseEnter: (ge) => {
        I(!0), Se("onMouseEnter", ge);
      },
      onMouseLeave: (ge) => {
        I(!1), Se("onMouseLeave", ge);
      },
      onMouseDown: (ge) => {
        M(!0), G(!0), Se("onMouseDown", ge);
      },
      onFocus: (ge) => {
        var be;
        M(!0), (be = m.onFocus) === null || be === void 0 || be.call(m, ge), Se("onFocus", ge, !0);
      },
      onBlur: (ge) => {
        var be;
        M(!1), (be = m.onBlur) === null || be === void 0 || be.call(m, ge), Se("onBlur", ge, !0);
      }
    }), J = /* @__PURE__ */ B.cloneElement(ue, _e), re = (!!L || q) && k !== null;
    return fe ? J : /* @__PURE__ */ B.createElement(ql, Object.assign({}, V, {
      prefixCls: S("tooltip", j ?? s),
      title: k ? k(ve.value) : "",
      open: re,
      placement: Y(P ?? v, g),
      key: $e,
      overlayClassName: `${Q}-tooltip`,
      getPopupContainer: T || f || E
    }), J);
  }), ae = fe ? (ue, ve) => {
    const $e = /* @__PURE__ */ B.cloneElement(ue, {
      style: Object.assign(Object.assign({}, ue.props.style), {
        visibility: "hidden"
      })
    });
    return /* @__PURE__ */ B.createElement(ql, Object.assign({}, V, {
      prefixCls: S("tooltip", j ?? s),
      title: k ? k(ve.value) : "",
      open: k !== null && q,
      placement: Y(P ?? v, g),
      key: "tooltip",
      overlayClassName: `${Q}-tooltip`,
      getPopupContainer: T || f || E,
      draggingDelete: ve.draggingDelete
    }), $e);
  } : void 0, ie = Object.assign(Object.assign({}, p == null ? void 0 : p.style), i);
  return pe(
    // @ts-ignore
    /* @__PURE__ */ B.createElement(Sg, Object.assign({}, m, {
      step: m.step,
      range: r,
      className: te,
      style: ie,
      disabled: x,
      ref: t,
      prefixCls: Q,
      handleRender: W,
      activeHandleRender: ae,
      onChangeComplete: le
    }))
  );
});
process.env.NODE_ENV !== "production" && (xg.displayName = "Slider");
var yw = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const wg = (e) => {
  const {
    prefixCls: t,
    colors: n,
    type: r,
    color: o,
    range: a = !1,
    className: i,
    activeIndex: l,
    onActive: s,
    onDragStart: c,
    onDragChange: d,
    onKeyDelete: f
  } = e, v = yw(e, ["prefixCls", "colors", "type", "color", "range", "className", "activeIndex", "onActive", "onDragStart", "onDragChange", "onKeyDelete"]), h = Object.assign(Object.assign({}, v), {
    track: !1
  }), b = u.useMemo(() => `linear-gradient(90deg, ${n.map((x) => `${x.color} ${x.percent}%`).join(", ")})`, [n]), m = u.useMemo(() => !o || !r ? null : r === "alpha" ? o.toRgbString() : `hsl(${o.toHsb().h}, 100%, 50%)`, [o, r]), g = $t(c), y = $t(d), p = u.useMemo(() => ({
    onDragStart: g,
    onDragChange: y
  }), []), S = $t((C, x) => {
    const {
      onFocus: w,
      style: $,
      className: O,
      onKeyDown: R
    } = C.props, _ = Object.assign({}, $);
    return r === "gradient" && (_.background = og(n, x.value)), /* @__PURE__ */ u.cloneElement(C, {
      onFocus: (I) => {
        s == null || s(x.index), w == null || w(I);
      },
      style: _,
      className: ne(O, {
        [`${t}-slider-handle-active`]: l === x.index
      }),
      onKeyDown: (I) => {
        (I.key === "Delete" || I.key === "Backspace") && f && f(x.index), R == null || R(I);
      }
    });
  }), E = u.useMemo(() => ({
    direction: "ltr",
    handleRender: S
  }), []);
  return /* @__PURE__ */ u.createElement(Eg.Provider, {
    value: E
  }, /* @__PURE__ */ u.createElement(bg.Provider, {
    value: p
  }, /* @__PURE__ */ u.createElement(xg, Object.assign({}, h, {
    className: ne(i, `${t}-slider`),
    tooltip: {
      open: !1
    },
    range: {
      editable: a,
      minCount: 2
    },
    styles: {
      rail: {
        background: b
      },
      handle: m ? {
        background: m
      } : {}
    },
    classNames: {
      rail: `${t}-slider-rail`,
      handle: `${t}-slider-handle`
    }
  }))));
}, Sw = (e) => {
  const {
    value: t,
    onChange: n,
    onChangeComplete: r
  } = e, o = (i) => n(i[0]), a = (i) => r(i[0]);
  return /* @__PURE__ */ u.createElement(wg, Object.assign({}, e, {
    value: [t],
    onChange: o,
    onChangeComplete: a
  }));
};
function qu(e) {
  return Ce(e).sort((t, n) => t.percent - n.percent);
}
const Cw = (e) => {
  const {
    prefixCls: t,
    mode: n,
    onChange: r,
    onChangeComplete: o,
    onActive: a,
    activeIndex: i,
    onGradientDragging: l,
    colors: s
  } = e, c = n === "gradient", d = u.useMemo(() => s.map((y) => ({
    percent: y.percent,
    color: y.color.toRgbString()
  })), [s]), f = u.useMemo(() => d.map((y) => y.percent), [d]), v = u.useRef(d), h = (y) => {
    let {
      rawValues: p,
      draggingIndex: S,
      draggingValue: E
    } = y;
    if (p.length > d.length) {
      const C = og(d, E), x = Ce(d);
      x.splice(S, 0, {
        percent: E,
        color: C
      }), v.current = x;
    } else
      v.current = d;
    l(!0), r(new Rn(qu(v.current)), !0);
  }, b = (y) => {
    let {
      deleteIndex: p,
      draggingIndex: S,
      draggingValue: E
    } = y, C = Ce(v.current);
    p !== -1 ? C.splice(p, 1) : (C[S] = Object.assign(Object.assign({}, C[S]), {
      percent: E
    }), C = qu(C)), r(new Rn(C), !0);
  }, m = (y) => {
    const p = Ce(d);
    p.splice(y, 1);
    const S = new Rn(p);
    r(S), o(S);
  }, g = (y) => {
    o(new Rn(d)), i >= y.length && a(y.length - 1), l(!1);
  };
  return c ? /* @__PURE__ */ u.createElement(wg, {
    min: 0,
    max: 100,
    prefixCls: t,
    className: `${t}-gradient-slider`,
    colors: d,
    color: null,
    value: f,
    range: !0,
    onChangeComplete: g,
    disabled: !1,
    type: "gradient",
    // Active
    activeIndex: i,
    onActive: a,
    // Drag
    onDragStart: h,
    onDragChange: b,
    onKeyDelete: m
  }) : null;
}, Ew = /* @__PURE__ */ u.memo(Cw);
var xw = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const ww = {
  slider: Sw
}, Ku = () => {
  const e = Dt(ng), {
    mode: t,
    onModeChange: n,
    modeOptions: r,
    prefixCls: o,
    allowClear: a,
    value: i,
    disabledAlpha: l,
    onChange: s,
    onClear: c,
    onChangeComplete: d,
    activeIndex: f,
    gradientDragging: v
  } = e, h = xw(e, ["mode", "onModeChange", "modeOptions", "prefixCls", "allowClear", "value", "disabledAlpha", "onChange", "onClear", "onChangeComplete", "activeIndex", "gradientDragging"]), b = B.useMemo(() => i.cleared ? [{
    percent: 0,
    color: new Rn("")
  }, {
    percent: 100,
    color: new Rn("")
  }] : i.getColors(), [i]), m = !i.isGradient(), [g, y] = B.useState(i);
  Rt(() => {
    var $;
    m || y(($ = b[f]) === null || $ === void 0 ? void 0 : $.color);
  }, [v, f]);
  const p = B.useMemo(() => {
    var $;
    return m ? i : v ? g : ($ = b[f]) === null || $ === void 0 ? void 0 : $.color;
  }, [i, f, m, g, v]), S = ($, O) => {
    let R = sn($);
    if (i.cleared) {
      const I = R.toRgb();
      if (!I.r && !I.g && !I.b && O) {
        const {
          type: F,
          value: M = 0
        } = O;
        R = new Rn({
          h: F === "hue" ? M : 0,
          s: 1,
          b: 1,
          a: F === "alpha" ? M / 100 : 1
        });
      } else
        R = wa(R);
    }
    if (t === "single")
      return R;
    const _ = Ce(b);
    return _[f] = Object.assign(Object.assign({}, _[f]), {
      color: R
    }), new Rn(_);
  }, E = ($, O, R) => {
    s(S($, R), O);
  }, C = ($, O) => {
    d(S($, O));
  };
  let x = null;
  const w = r.length > 1;
  return (a || w) && (x = /* @__PURE__ */ B.createElement("div", {
    className: `${o}-operation`
  }, w && /* @__PURE__ */ B.createElement(tg, {
    size: "small",
    options: r,
    value: t,
    onChange: n
  }), /* @__PURE__ */ B.createElement(ag, Object.assign({
    prefixCls: o,
    value: i,
    onChange: ($) => {
      s($), c == null || c();
    }
  }, h)))), /* @__PURE__ */ B.createElement(B.Fragment, null, x, /* @__PURE__ */ B.createElement(Ew, Object.assign({}, e, {
    colors: b
  })), /* @__PURE__ */ B.createElement(Zv, {
    prefixCls: o,
    value: p == null ? void 0 : p.toHsb(),
    disabledAlpha: l,
    onChange: ($, O) => {
      E($, !0, O);
    },
    onChangeComplete: ($, O) => {
      C($, O);
    },
    components: ww
  }), /* @__PURE__ */ B.createElement(ew, Object.assign({
    value: p,
    onChange: E,
    prefixCls: o,
    disabledAlpha: l
  }, h)));
}, Vi = (e) => e.map((t) => (t.colors = t.colors.map(sn), t)), $w = (e, t) => {
  const {
    r: n,
    g: r,
    b: o,
    a
  } = e.toRgb(), i = new Hn(e.toRgbString()).onBackground(t).toHsv();
  return a <= 0.5 ? i.v > 0.5 : n * 0.299 + r * 0.587 + o * 0.114 > 192;
}, Xu = (e) => {
  let {
    label: t
  } = e;
  return `panel-${t}`;
}, Ow = (e) => {
  let {
    prefixCls: t,
    presets: n,
    value: r,
    onChange: o
  } = e;
  const [a] = Xa("ColorPicker"), [, i] = Nn(), [l] = Jt(Vi(n), {
    value: Vi(n),
    postState: Vi
  }), s = `${t}-presets`, c = an(() => l.reduce((v, h) => {
    const {
      defaultOpen: b = !0
    } = h;
    return b && v.push(Xu(h)), v;
  }, []), [l]), d = (v) => {
    o == null || o(v);
  }, f = l.map((v) => {
    var h;
    return {
      key: Xu(v),
      label: /* @__PURE__ */ B.createElement("div", {
        className: `${s}-label`
      }, v == null ? void 0 : v.label),
      children: /* @__PURE__ */ B.createElement("div", {
        className: `${s}-items`
      }, Array.isArray(v == null ? void 0 : v.colors) && ((h = v.colors) === null || h === void 0 ? void 0 : h.length) > 0 ? v.colors.map((b, m) => /* @__PURE__ */ B.createElement(
        Fs,
        {
          // eslint-disable-next-line react/no-array-index-key
          key: `preset-${m}-${b.toHexString()}`,
          color: sn(b).toRgbString(),
          prefixCls: t,
          className: ne(`${s}-color`, {
            [`${s}-color-checked`]: b.toHexString() === (r == null ? void 0 : r.toHexString()),
            [`${s}-color-bright`]: $w(b, i.colorBgElevated)
          }),
          onClick: () => d(b)
        }
      )) : /* @__PURE__ */ B.createElement("span", {
        className: `${s}-empty`
      }, a.presetEmpty))
    };
  });
  return /* @__PURE__ */ B.createElement("div", {
    className: s
  }, /* @__PURE__ */ B.createElement(b1, {
    defaultActiveKey: c,
    ghost: !0,
    items: f
  }));
}, Yu = () => {
  const {
    prefixCls: e,
    value: t,
    presets: n,
    onChange: r
  } = Dt(rg);
  return Array.isArray(n) ? /* @__PURE__ */ B.createElement(Ow, {
    value: t,
    presets: n,
    prefixCls: e,
    onChange: r
  }) : null;
}, $g = (e) => {
  const {
    prefixCls: t,
    presets: n,
    panelRender: r,
    value: o,
    onChange: a,
    onClear: i,
    allowClear: l,
    disabledAlpha: s,
    mode: c,
    onModeChange: d,
    modeOptions: f,
    onChangeComplete: v,
    activeIndex: h,
    onActive: b,
    format: m,
    onFormatChange: g,
    gradientDragging: y,
    onGradientDragging: p
  } = e, S = `${t}-inner`, E = B.useMemo(() => ({
    prefixCls: t,
    value: o,
    onChange: a,
    onClear: i,
    allowClear: l,
    disabledAlpha: s,
    mode: c,
    onModeChange: d,
    modeOptions: f,
    onChangeComplete: v,
    activeIndex: h,
    onActive: b,
    format: m,
    onFormatChange: g,
    gradientDragging: y,
    onGradientDragging: p
  }), [t, o, a, i, l, s, c, d, f, v, h, b, m, g, y, p]), C = B.useMemo(() => ({
    prefixCls: t,
    value: o,
    presets: n,
    onChange: a
  }), [t, o, n, a]), x = /* @__PURE__ */ B.createElement("div", {
    className: `${S}-content`
  }, /* @__PURE__ */ B.createElement(Ku, null), Array.isArray(n) && /* @__PURE__ */ B.createElement(Jv, null), /* @__PURE__ */ B.createElement(Yu, null));
  return /* @__PURE__ */ B.createElement(ng.Provider, {
    value: E
  }, /* @__PURE__ */ B.createElement(rg.Provider, {
    value: C
  }, /* @__PURE__ */ B.createElement("div", {
    className: S
  }, typeof r == "function" ? r(x, {
    components: {
      Picker: Ku,
      Presets: Yu
    }
  }) : x)));
};
process.env.NODE_ENV !== "production" && ($g.displayName = "ColorPickerPanel");
var Rw = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Iw = /* @__PURE__ */ tr((e, t) => {
  const {
    color: n,
    prefixCls: r,
    open: o,
    disabled: a,
    format: i,
    className: l,
    showText: s,
    activeIndex: c
  } = e, d = Rw(e, ["color", "prefixCls", "open", "disabled", "format", "className", "showText", "activeIndex"]), f = `${r}-trigger`, v = `${f}-text`, h = `${v}-cell`, [b] = Xa("ColorPicker"), m = B.useMemo(() => {
    if (!s)
      return "";
    if (typeof s == "function")
      return s(n);
    if (n.cleared)
      return b.transparent;
    if (n.isGradient())
      return n.getColors().map((S, E) => {
        const C = c !== -1 && c !== E;
        return /* @__PURE__ */ B.createElement("span", {
          key: E,
          className: ne(h, C && `${h}-inactive`)
        }, S.color.toRgbString(), " ", S.percent, "%");
      });
    const y = n.toHexString().toUpperCase(), p = js(n);
    switch (i) {
      case "rgb":
        return n.toRgbString();
      case "hsb":
        return n.toHsbString();
      default:
        return p < 100 ? `${y.slice(0, 7)},${p}%` : y;
    }
  }, [n, i, s, c]), g = an(() => n.cleared ? /* @__PURE__ */ B.createElement(ag, {
    prefixCls: r
  }) : /* @__PURE__ */ B.createElement(Fs, {
    prefixCls: r,
    color: n.toCssString()
  }), [n, r]);
  return /* @__PURE__ */ B.createElement("div", Object.assign({
    ref: t,
    className: ne(f, l, {
      [`${f}-active`]: o,
      [`${f}-disabled`]: a
    })
  }, Ir(d)), g, s && /* @__PURE__ */ B.createElement("div", {
    className: v
  }, m));
});
function Pw(e, t, n) {
  const [r] = Xa("ColorPicker"), [o, a] = Jt(e, {
    value: t
  }), [i, l] = u.useState("single"), [s, c] = u.useMemo(() => {
    const m = (Array.isArray(n) ? n : [n]).filter((S) => S);
    m.length || m.push("single");
    const g = new Set(m), y = [], p = (S, E) => {
      g.has(S) && y.push({
        label: E,
        value: S
      });
    };
    return p("single", r.singleColor), p("gradient", r.gradientColor), [y, g];
  }, [n]), [d, f] = u.useState(null), v = $t((m) => {
    f(m), a(m);
  }), h = u.useMemo(() => {
    const m = sn(o || "");
    return m.equals(d) ? d : m;
  }, [o, d]), b = u.useMemo(() => {
    var m;
    return c.has(i) ? i : (m = s[0]) === null || m === void 0 ? void 0 : m.value;
  }, [c, i, s]);
  return u.useEffect(() => {
    l(h.isGradient() ? "gradient" : "single");
  }, [h]), [h, v, b, l, s];
}
const Og = (e, t) => ({
  backgroundImage: `conic-gradient(${t} 0 25%, transparent 0 50%, ${t} 0 75%, transparent 0)`,
  backgroundSize: `${e} ${e}`
}), Qu = (e, t) => {
  const {
    componentCls: n,
    borderRadiusSM: r,
    colorPickerInsetShadow: o,
    lineWidth: a,
    colorFillSecondary: i
  } = e;
  return {
    [`${n}-color-block`]: Object.assign(Object.assign({
      position: "relative",
      borderRadius: r,
      width: t,
      height: t,
      boxShadow: o,
      flex: "none"
    }, Og("50%", e.colorFillSecondary)), {
      [`${n}-color-block-inner`]: {
        width: "100%",
        height: "100%",
        boxShadow: `inset 0 0 0 ${oe(a)} ${i}`,
        borderRadius: "inherit"
      }
    })
  };
}, Nw = (e) => {
  const {
    componentCls: t,
    antCls: n,
    fontSizeSM: r,
    lineHeightSM: o,
    colorPickerAlphaInputWidth: a,
    marginXXS: i,
    paddingXXS: l,
    controlHeightSM: s,
    marginXS: c,
    fontSizeIcon: d,
    paddingXS: f,
    colorTextPlaceholder: v,
    colorPickerInputNumberHandleWidth: h,
    lineWidth: b
  } = e;
  return {
    [`${t}-input-container`]: {
      display: "flex",
      [`${t}-steppers${n}-input-number`]: {
        fontSize: r,
        lineHeight: o,
        [`${n}-input-number-input`]: {
          paddingInlineStart: l,
          paddingInlineEnd: 0
        },
        [`${n}-input-number-handler-wrap`]: {
          width: h
        }
      },
      [`${t}-steppers${t}-alpha-input`]: {
        flex: `0 0 ${oe(a)}`,
        marginInlineStart: i
      },
      [`${t}-format-select${n}-select`]: {
        marginInlineEnd: c,
        width: "auto",
        "&-single": {
          [`${n}-select-selector`]: {
            padding: 0,
            border: 0
          },
          [`${n}-select-arrow`]: {
            insetInlineEnd: 0
          },
          [`${n}-select-selection-item`]: {
            paddingInlineEnd: e.calc(d).add(i).equal(),
            fontSize: r,
            lineHeight: oe(s)
          },
          [`${n}-select-item-option-content`]: {
            fontSize: r,
            lineHeight: o
          },
          [`${n}-select-dropdown`]: {
            [`${n}-select-item`]: {
              minHeight: "auto"
            }
          }
        }
      },
      [`${t}-input`]: {
        gap: i,
        alignItems: "center",
        flex: 1,
        width: 0,
        [`${t}-hsb-input,${t}-rgb-input`]: {
          display: "flex",
          gap: i,
          alignItems: "center"
        },
        [`${t}-steppers`]: {
          flex: 1
        },
        [`${t}-hex-input${n}-input-affix-wrapper`]: {
          flex: 1,
          padding: `0 ${oe(f)}`,
          [`${n}-input`]: {
            fontSize: r,
            textTransform: "uppercase",
            lineHeight: oe(e.calc(s).sub(e.calc(b).mul(2)).equal())
          },
          [`${n}-input-prefix`]: {
            color: v
          }
        }
      }
    }
  };
}, Mw = (e) => {
  const {
    componentCls: t,
    controlHeightLG: n,
    borderRadiusSM: r,
    colorPickerInsetShadow: o,
    marginSM: a,
    colorBgElevated: i,
    colorFillSecondary: l,
    lineWidthBold: s,
    colorPickerHandlerSize: c
  } = e;
  return {
    userSelect: "none",
    [`${t}-select`]: {
      [`${t}-palette`]: {
        minHeight: e.calc(n).mul(4).equal(),
        overflow: "hidden",
        borderRadius: r
      },
      [`${t}-saturation`]: {
        position: "absolute",
        borderRadius: "inherit",
        boxShadow: o,
        inset: 0
      },
      marginBottom: a
    },
    // ======================== Panel =========================
    [`${t}-handler`]: {
      width: c,
      height: c,
      border: `${oe(s)} solid ${i}`,
      position: "relative",
      borderRadius: "50%",
      cursor: "pointer",
      boxShadow: `${o}, 0 0 0 1px ${l}`
    }
  };
}, _w = (e) => {
  const {
    componentCls: t,
    antCls: n,
    colorTextQuaternary: r,
    paddingXXS: o,
    colorPickerPresetColorSize: a,
    fontSizeSM: i,
    colorText: l,
    lineHeightSM: s,
    lineWidth: c,
    borderRadius: d,
    colorFill: f,
    colorWhite: v,
    marginXXS: h,
    paddingXS: b,
    fontHeightSM: m
  } = e;
  return {
    [`${t}-presets`]: {
      [`${n}-collapse-item > ${n}-collapse-header`]: {
        padding: 0,
        [`${n}-collapse-expand-icon`]: {
          height: m,
          color: r,
          paddingInlineEnd: o
        }
      },
      [`${n}-collapse`]: {
        display: "flex",
        flexDirection: "column",
        gap: h
      },
      [`${n}-collapse-item > ${n}-collapse-content > ${n}-collapse-content-box`]: {
        padding: `${oe(b)} 0`
      },
      "&-label": {
        fontSize: i,
        color: l,
        lineHeight: s
      },
      "&-items": {
        display: "flex",
        flexWrap: "wrap",
        gap: e.calc(h).mul(1.5).equal(),
        [`${t}-presets-color`]: {
          position: "relative",
          cursor: "pointer",
          width: a,
          height: a,
          "&::before": {
            content: '""',
            pointerEvents: "none",
            width: e.calc(a).add(e.calc(c).mul(4)).equal(),
            height: e.calc(a).add(e.calc(c).mul(4)).equal(),
            position: "absolute",
            top: e.calc(c).mul(-2).equal(),
            insetInlineStart: e.calc(c).mul(-2).equal(),
            borderRadius: d,
            border: `${oe(c)} solid transparent`,
            transition: `border-color ${e.motionDurationMid} ${e.motionEaseInBack}`
          },
          "&:hover::before": {
            borderColor: f
          },
          "&::after": {
            boxSizing: "border-box",
            position: "absolute",
            top: "50%",
            insetInlineStart: "21.5%",
            display: "table",
            width: e.calc(a).div(13).mul(5).equal(),
            height: e.calc(a).div(13).mul(8).equal(),
            border: `${oe(e.lineWidthBold)} solid ${e.colorWhite}`,
            borderTop: 0,
            borderInlineStart: 0,
            transform: "rotate(45deg) scale(0) translate(-50%,-50%)",
            opacity: 0,
            content: '""',
            transition: `all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`
          },
          [`&${t}-presets-color-checked`]: {
            "&::after": {
              opacity: 1,
              borderColor: v,
              transform: "rotate(45deg) scale(1) translate(-50%,-50%)",
              transition: `transform ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`
            },
            [`&${t}-presets-color-bright`]: {
              "&::after": {
                borderColor: "rgba(0, 0, 0, 0.45)"
              }
            }
          }
        }
      },
      "&-empty": {
        fontSize: i,
        color: r
      }
    }
  };
}, Tw = (e) => {
  const {
    componentCls: t,
    colorPickerInsetShadow: n,
    colorBgElevated: r,
    colorFillSecondary: o,
    lineWidthBold: a,
    colorPickerHandlerSizeSM: i,
    colorPickerSliderHeight: l,
    marginSM: s,
    marginXS: c
  } = e, d = e.calc(i).sub(e.calc(a).mul(2).equal()).equal(), f = e.calc(i).add(e.calc(a).mul(2).equal()).equal(), v = {
    "&:after": {
      transform: "scale(1)",
      boxShadow: `${n}, 0 0 0 1px ${e.colorPrimaryActive}`
    }
  };
  return {
    // ======================== Slider ========================
    [`${t}-slider`]: [Og(oe(l), e.colorFillSecondary), {
      margin: 0,
      padding: 0,
      height: l,
      borderRadius: e.calc(l).div(2).equal(),
      "&-rail": {
        height: l,
        borderRadius: e.calc(l).div(2).equal(),
        boxShadow: n
      },
      [`& ${t}-slider-handle`]: {
        width: d,
        height: d,
        top: 0,
        borderRadius: "100%",
        "&:before": {
          display: "block",
          position: "absolute",
          background: "transparent",
          left: {
            _skip_check_: !0,
            value: "50%"
          },
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: f,
          height: f,
          borderRadius: "100%"
        },
        "&:after": {
          width: i,
          height: i,
          border: `${oe(a)} solid ${r}`,
          boxShadow: `${n}, 0 0 0 1px ${o}`,
          outline: "none",
          insetInlineStart: e.calc(a).mul(-1).equal(),
          top: e.calc(a).mul(-1).equal(),
          background: "transparent",
          transition: "none"
        },
        "&:focus": v
      }
    }],
    // ======================== Layout ========================
    [`${t}-slider-container`]: {
      display: "flex",
      gap: s,
      marginBottom: s,
      // Group
      [`${t}-slider-group`]: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        display: "flex",
        "&-disabled-alpha": {
          justifyContent: "center"
        }
      }
    },
    [`${t}-gradient-slider`]: {
      marginBottom: c,
      [`& ${t}-slider-handle`]: {
        "&:after": {
          transform: "scale(0.8)"
        },
        "&-active, &:focus": v
      }
    }
  };
}, Kl = (e, t, n) => ({
  borderInlineEndWidth: e.lineWidth,
  borderColor: t,
  boxShadow: `0 0 0 ${oe(e.controlOutlineWidth)} ${n}`,
  outline: 0
}), Dw = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    "&-rtl": {
      [`${t}-presets-color`]: {
        "&::after": {
          direction: "ltr"
        }
      },
      [`${t}-clear`]: {
        "&::after": {
          direction: "ltr"
        }
      }
    }
  };
}, Zu = (e, t, n) => {
  const {
    componentCls: r,
    borderRadiusSM: o,
    lineWidth: a,
    colorSplit: i,
    colorBorder: l,
    red6: s
  } = e;
  return {
    [`${r}-clear`]: Object.assign(Object.assign({
      width: t,
      height: t,
      borderRadius: o,
      border: `${oe(a)} solid ${i}`,
      position: "relative",
      overflow: "hidden",
      cursor: "inherit",
      transition: `all ${e.motionDurationFast}`
    }, n), {
      "&::after": {
        content: '""',
        position: "absolute",
        insetInlineEnd: e.calc(a).mul(-1).equal(),
        top: e.calc(a).mul(-1).equal(),
        display: "block",
        width: 40,
        // maximum
        height: 2,
        // fixed
        transformOrigin: "calc(100% - 1px) 1px",
        transform: "rotate(-45deg)",
        backgroundColor: s
      },
      "&:hover": {
        borderColor: l
      }
    })
  };
}, Aw = (e) => {
  const {
    componentCls: t,
    colorError: n,
    colorWarning: r,
    colorErrorHover: o,
    colorWarningHover: a,
    colorErrorOutline: i,
    colorWarningOutline: l
  } = e;
  return {
    [`&${t}-status-error`]: {
      borderColor: n,
      "&:hover": {
        borderColor: o
      },
      [`&${t}-trigger-active`]: Object.assign({}, Kl(e, n, i))
    },
    [`&${t}-status-warning`]: {
      borderColor: r,
      "&:hover": {
        borderColor: a
      },
      [`&${t}-trigger-active`]: Object.assign({}, Kl(e, r, l))
    }
  };
}, Fw = (e) => {
  const {
    componentCls: t,
    controlHeightLG: n,
    controlHeightSM: r,
    controlHeight: o,
    controlHeightXS: a,
    borderRadius: i,
    borderRadiusSM: l,
    borderRadiusXS: s,
    borderRadiusLG: c,
    fontSizeLG: d
  } = e;
  return {
    [`&${t}-lg`]: {
      minWidth: n,
      minHeight: n,
      borderRadius: c,
      [`${t}-color-block, ${t}-clear`]: {
        width: o,
        height: o,
        borderRadius: i
      },
      [`${t}-trigger-text`]: {
        fontSize: d
      }
    },
    [`&${t}-sm`]: {
      minWidth: r,
      minHeight: r,
      borderRadius: l,
      [`${t}-color-block, ${t}-clear`]: {
        width: a,
        height: a,
        borderRadius: s
      },
      [`${t}-trigger-text`]: {
        lineHeight: oe(a)
      }
    }
  };
}, jw = (e) => {
  const {
    antCls: t,
    componentCls: n,
    colorPickerWidth: r,
    colorPrimary: o,
    motionDurationMid: a,
    colorBgElevated: i,
    colorTextDisabled: l,
    colorText: s,
    colorBgContainerDisabled: c,
    borderRadius: d,
    marginXS: f,
    marginSM: v,
    controlHeight: h,
    controlHeightSM: b,
    colorBgTextActive: m,
    colorPickerPresetColorSize: g,
    colorPickerPreviewSize: y,
    lineWidth: p,
    colorBorder: S,
    paddingXXS: E,
    fontSize: C,
    colorPrimaryHover: x,
    controlOutline: w
  } = e;
  return [{
    [n]: Object.assign({
      [`${n}-inner`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        "&-content": {
          display: "flex",
          flexDirection: "column",
          width: r,
          [`& > ${t}-divider`]: {
            margin: `${oe(v)} 0 ${oe(f)}`
          }
        },
        [`${n}-panel`]: Object.assign({}, Mw(e))
      }, Tw(e)), Qu(e, y)), Nw(e)), _w(e)), Zu(e, g, {
        marginInlineStart: "auto"
      })), {
        // Operation bar
        [`${n}-operation`]: {
          display: "flex",
          justifyContent: "space-between",
          marginBottom: f
        }
      }),
      "&-trigger": Object.assign(Object.assign(Object.assign(Object.assign({
        minWidth: h,
        minHeight: h,
        borderRadius: d,
        border: `${oe(p)} solid ${S}`,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "flex-start",
        justifyContent: "center",
        transition: `all ${a}`,
        background: i,
        padding: e.calc(E).sub(p).equal(),
        [`${n}-trigger-text`]: {
          marginInlineStart: f,
          marginInlineEnd: e.calc(f).sub(e.calc(E).sub(p)).equal(),
          fontSize: C,
          color: s,
          alignSelf: "center",
          "&-cell": {
            "&:not(:last-child):after": {
              content: '", "'
            },
            "&-inactive": {
              color: l
            }
          }
        },
        "&:hover": {
          borderColor: x
        },
        [`&${n}-trigger-active`]: Object.assign({}, Kl(e, o, w)),
        "&-disabled": {
          color: l,
          background: c,
          cursor: "not-allowed",
          "&:hover": {
            borderColor: m
          },
          [`${n}-trigger-text`]: {
            color: l
          }
        }
      }, Zu(e, b)), Qu(e, b)), Aw(e)), Fw(e))
    }, Dw(e))
  }, Uo(e, {
    focusElCls: `${n}-trigger-active`
  })];
}, Lw = yn("ColorPicker", (e) => {
  const {
    colorTextQuaternary: t,
    marginSM: n
  } = e, r = 8, o = Pt(e, {
    colorPickerWidth: 234,
    colorPickerHandlerSize: 16,
    colorPickerHandlerSizeSM: 12,
    colorPickerAlphaInputWidth: 44,
    colorPickerInputNumberHandleWidth: 16,
    colorPickerPresetColorSize: 24,
    colorPickerInsetShadow: `inset 0 0 1px 0 ${t}`,
    colorPickerSliderHeight: r,
    colorPickerPreviewSize: e.calc(r).mul(2).add(n).equal()
  });
  return [jw(o)];
});
var Hw = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const oi = (e) => {
  const {
    mode: t,
    value: n,
    defaultValue: r,
    format: o,
    defaultFormat: a,
    allowClear: i = !1,
    presets: l,
    children: s,
    trigger: c = "click",
    open: d,
    disabled: f,
    placement: v = "bottomLeft",
    arrow: h = !0,
    panelRender: b,
    showText: m,
    style: g,
    className: y,
    size: p,
    rootClassName: S,
    prefixCls: E,
    styles: C,
    disabledAlpha: x = !1,
    onFormatChange: w,
    onChange: $,
    onClear: O,
    onOpenChange: R,
    onChangeComplete: _,
    getPopupContainer: I,
    autoAdjustOverflow: F = !0,
    destroyTooltipOnHide: M
  } = e, V = Hw(e, ["mode", "value", "defaultValue", "format", "defaultFormat", "allowClear", "presets", "children", "trigger", "open", "disabled", "placement", "arrow", "panelRender", "showText", "style", "className", "size", "rootClassName", "prefixCls", "styles", "disabledAlpha", "onFormatChange", "onChange", "onClear", "onOpenChange", "onChangeComplete", "getPopupContainer", "autoAdjustOverflow", "destroyTooltipOnHide"]), {
    getPrefixCls: N,
    direction: P,
    colorPicker: T
  } = Dt(Ct), j = Dt(Ln), H = f ?? j, [L, q] = Jt(!1, {
    value: d,
    postState: (Ye) => !H && Ye,
    onChange: R
  }), [k, U] = Jt(o, {
    value: o,
    defaultValue: a,
    onChange: w
  }), G = N("color-picker", E), [le, Y, Q, pe, Z] = Pw(r, n, t), X = an(() => js(le) < 100, [le]), [te, fe] = B.useState(null), W = (Ye) => {
    if (_) {
      let Je = sn(Ye);
      x && X && (Je = wa(Ye)), _(Je);
    }
  }, ae = (Ye, Je) => {
    let et = sn(Ye);
    x && X && (et = wa(et)), Y(et), fe(null), $ && $(et, et.toCssString()), Je || W(et);
  }, [ie, ue] = B.useState(0), [ve, $e] = B.useState(!1), Re = (Ye) => {
    if (pe(Ye), Ye === "single" && le.isGradient())
      ue(0), ae(new Rn(le.getColors()[0].color)), fe(le);
    else if (Ye === "gradient" && !le.isGradient()) {
      const Je = X ? wa(le) : le;
      ae(new Rn(te || [{
        percent: 0,
        color: Je
      }, {
        percent: 100,
        color: Je
      }]));
    }
  }, {
    status: Se
  } = B.useContext(Pn), {
    compactSize: _e,
    compactItemClassnames: J
  } = lo(G, P), re = kn((Ye) => {
    var Je;
    return (Je = p ?? _e) !== null && Je !== void 0 ? Je : Ye;
  }), ge = io(G), [be, Ie, Me] = Lw(G, ge), Ue = {
    [`${G}-rtl`]: P
  }, rt = ne(S, Me, ge, Ue), ct = ne(Pr(G, Se), {
    [`${G}-sm`]: re === "small",
    [`${G}-lg`]: re === "large"
  }, J, T == null ? void 0 : T.className, rt, y, Ie), ft = ne(G, rt);
  if (process.env.NODE_ENV !== "production") {
    const Ye = zt("ColorPicker");
    process.env.NODE_ENV !== "production" && Ye(!(x && X), "usage", "`disabledAlpha` will make the alpha to be 100% when use alpha color.");
  }
  const De = {
    open: L,
    trigger: c,
    placement: v,
    arrow: h,
    rootClassName: S,
    getPopupContainer: I,
    autoAdjustOverflow: F,
    destroyTooltipOnHide: M
  }, Te = Object.assign(Object.assign({}, T == null ? void 0 : T.style), g);
  return be(/* @__PURE__ */ B.createElement(Ns, Object.assign({
    style: C == null ? void 0 : C.popup,
    overlayInnerStyle: C == null ? void 0 : C.popupOverlayInner,
    onOpenChange: (Ye) => {
      (!Ye || !H) && q(Ye);
    },
    content: /* @__PURE__ */ B.createElement(ro, {
      form: !0
    }, /* @__PURE__ */ B.createElement($g, {
      mode: Q,
      onModeChange: Re,
      modeOptions: Z,
      prefixCls: G,
      value: le,
      allowClear: i,
      disabled: H,
      disabledAlpha: x,
      presets: l,
      panelRender: b,
      format: k,
      onFormatChange: U,
      onChange: ae,
      onChangeComplete: W,
      onClear: O,
      activeIndex: ie,
      onActive: ue,
      gradientDragging: ve,
      onGradientDragging: $e
    })),
    overlayClassName: ft
  }, De), s || /* @__PURE__ */ B.createElement(Iw, Object.assign({
    activeIndex: L ? ie : -1,
    open: L,
    className: ct,
    style: Te,
    prefixCls: G,
    disabled: H,
    showText: m,
    format: k
  }, V, {
    color: le
  }))));
};
process.env.NODE_ENV !== "production" && (oi.displayName = "ColorPicker");
const zw = Xf(
  oi,
  "color-picker",
  /* istanbul ignore next */
  (e) => e,
  (e) => Object.assign(Object.assign({}, e), {
    placement: "bottom",
    autoAdjustOverflow: !1
  })
);
oi._InternalPanelDoNotUseOrYouWillBeFired = zw;
const kw = () => /* @__PURE__ */ Ju.jsx(oi, { defaultValue: "#1677ff" });
export {
  Ww as Button,
  kw as ColorPicker
};
