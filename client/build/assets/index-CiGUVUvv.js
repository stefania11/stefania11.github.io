var xf = (e) => {
  throw TypeError(e);
};
var nl = (e, t, n) => t.has(e) || xf("Cannot " + n);
var T = (e, t, n) => (
    nl(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  Y = (e, t, n) =>
    t.has(e)
      ? xf("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  U = (e, t, n, r) => (
    nl(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  ke = (e, t, n) => (nl(e, t, "access private method"), n);
var Hs = (e, t, n, r) => ({
  set _(i) {
    U(e, t, i, n);
  },
  get _() {
    return T(e, t, r);
  },
});
function ow(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function Mm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Rm = { exports: {} },
  ba = {},
  Lm = { exports: {} },
  W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Is = Symbol.for("react.element"),
  aw = Symbol.for("react.portal"),
  lw = Symbol.for("react.fragment"),
  cw = Symbol.for("react.strict_mode"),
  uw = Symbol.for("react.profiler"),
  dw = Symbol.for("react.provider"),
  fw = Symbol.for("react.context"),
  hw = Symbol.for("react.forward_ref"),
  pw = Symbol.for("react.suspense"),
  mw = Symbol.for("react.memo"),
  gw = Symbol.for("react.lazy"),
  wf = Symbol.iterator;
function yw(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (wf && e[wf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Fm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  _m = Object.assign,
  Om = {};
function pi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Om),
    (this.updater = n || Fm);
}
pi.prototype.isReactComponent = {};
pi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
pi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Vm() {}
Vm.prototype = pi.prototype;
function vu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Om),
    (this.updater = n || Fm);
}
var xu = (vu.prototype = new Vm());
xu.constructor = vu;
_m(xu, pi.prototype);
xu.isPureReactComponent = !0;
var bf = Array.isArray,
  zm = Object.prototype.hasOwnProperty,
  wu = { current: null },
  Bm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Um(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      zm.call(t, r) && !Bm.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Is,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: wu.current,
  };
}
function vw(e, t) {
  return {
    $$typeof: Is,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function bu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Is;
}
function xw(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Sf = /\/+/g;
function rl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? xw("" + e.key)
    : t.toString(36);
}
function go(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Is:
          case aw:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + rl(o, 0) : r),
      bf(i)
        ? ((n = ""),
          e != null && (n = e.replace(Sf, "$&/") + "/"),
          go(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (bu(i) &&
            (i = vw(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Sf, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), bf(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = r + rl(s, a);
      o += go(s, t, n, l, i);
    }
  else if (((l = yw(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (l = r + rl(s, a++)), (o += go(s, t, n, l, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return o;
}
function $s(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    go(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function ww(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var _e = { current: null },
  yo = { transition: null },
  bw = {
    ReactCurrentDispatcher: _e,
    ReactCurrentBatchConfig: yo,
    ReactCurrentOwner: wu,
  };
function Hm() {
  throw Error("act(...) is not supported in production builds of React.");
}
W.Children = {
  map: $s,
  forEach: function (e, t, n) {
    $s(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      $s(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      $s(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!bu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
W.Component = pi;
W.Fragment = lw;
W.Profiler = uw;
W.PureComponent = vu;
W.StrictMode = cw;
W.Suspense = pw;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bw;
W.act = Hm;
W.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = _m({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = wu.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      zm.call(t, l) &&
        !Bm.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Is, type: e.type, key: i, ref: s, props: r, _owner: o };
};
W.createContext = function (e) {
  return (
    (e = {
      $$typeof: fw,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: dw, _context: e }),
    (e.Consumer = e)
  );
};
W.createElement = Um;
W.createFactory = function (e) {
  var t = Um.bind(null, e);
  return (t.type = e), t;
};
W.createRef = function () {
  return { current: null };
};
W.forwardRef = function (e) {
  return { $$typeof: hw, render: e };
};
W.isValidElement = bu;
W.lazy = function (e) {
  return { $$typeof: gw, _payload: { _status: -1, _result: e }, _init: ww };
};
W.memo = function (e, t) {
  return { $$typeof: mw, type: e, compare: t === void 0 ? null : t };
};
W.startTransition = function (e) {
  var t = yo.transition;
  yo.transition = {};
  try {
    e();
  } finally {
    yo.transition = t;
  }
};
W.unstable_act = Hm;
W.useCallback = function (e, t) {
  return _e.current.useCallback(e, t);
};
W.useContext = function (e) {
  return _e.current.useContext(e);
};
W.useDebugValue = function () {};
W.useDeferredValue = function (e) {
  return _e.current.useDeferredValue(e);
};
W.useEffect = function (e, t) {
  return _e.current.useEffect(e, t);
};
W.useId = function () {
  return _e.current.useId();
};
W.useImperativeHandle = function (e, t, n) {
  return _e.current.useImperativeHandle(e, t, n);
};
W.useInsertionEffect = function (e, t) {
  return _e.current.useInsertionEffect(e, t);
};
W.useLayoutEffect = function (e, t) {
  return _e.current.useLayoutEffect(e, t);
};
W.useMemo = function (e, t) {
  return _e.current.useMemo(e, t);
};
W.useReducer = function (e, t, n) {
  return _e.current.useReducer(e, t, n);
};
W.useRef = function (e) {
  return _e.current.useRef(e);
};
W.useState = function (e) {
  return _e.current.useState(e);
};
W.useSyncExternalStore = function (e, t, n) {
  return _e.current.useSyncExternalStore(e, t, n);
};
W.useTransition = function () {
  return _e.current.useTransition();
};
W.version = "18.3.1";
Lm.exports = W;
var w = Lm.exports;
const Re = Mm(w),
  Sw = ow({ __proto__: null, default: Re }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cw = w,
  kw = Symbol.for("react.element"),
  Ew = Symbol.for("react.fragment"),
  Aw = Object.prototype.hasOwnProperty,
  Pw = Cw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Tw = { key: !0, ref: !0, __self: !0, __source: !0 };
function $m(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Aw.call(t, r) && !Tw.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: kw,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Pw.current,
  };
}
ba.Fragment = Ew;
ba.jsx = $m;
ba.jsxs = $m;
Rm.exports = ba;
var d = Rm.exports,
  Wm = { exports: {} },
  tt = {},
  Km = { exports: {} },
  Gm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, D) {
    var L = P.length;
    P.push(D);
    e: for (; 0 < L; ) {
      var $ = (L - 1) >>> 1,
        re = P[$];
      if (0 < i(re, D)) (P[$] = D), (P[L] = re), (L = $);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var D = P[0],
      L = P.pop();
    if (L !== D) {
      P[0] = L;
      e: for (var $ = 0, re = P.length, pt = re >>> 1; $ < pt; ) {
        var it = 2 * ($ + 1) - 1,
          Ci = P[it],
          Ut = it + 1,
          Un = P[Ut];
        if (0 > i(Ci, L))
          Ut < re && 0 > i(Un, Ci)
            ? ((P[$] = Un), (P[Ut] = L), ($ = Ut))
            : ((P[$] = Ci), (P[it] = L), ($ = it));
        else if (Ut < re && 0 > i(Un, L)) (P[$] = Un), (P[Ut] = L), ($ = Ut);
        else break e;
      }
    }
    return D;
  }
  function i(P, D) {
    var L = P.sortIndex - D.sortIndex;
    return L !== 0 ? L : P.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    c = [],
    u = 1,
    f = null,
    h = 3,
    g = !1,
    x = !1,
    y = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(P) {
    for (var D = n(c); D !== null; ) {
      if (D.callback === null) r(c);
      else if (D.startTime <= P)
        r(c), (D.sortIndex = D.expirationTime), t(l, D);
      else break;
      D = n(c);
    }
  }
  function S(P) {
    if (((y = !1), v(P), !x))
      if (n(l) !== null) (x = !0), H(C);
      else {
        var D = n(c);
        D !== null && O(S, D.startTime - P);
      }
  }
  function C(P, D) {
    (x = !1), y && ((y = !1), m(E), (E = -1)), (g = !0);
    var L = h;
    try {
      for (
        v(D), f = n(l);
        f !== null && (!(f.expirationTime > D) || (P && !z()));

      ) {
        var $ = f.callback;
        if (typeof $ == "function") {
          (f.callback = null), (h = f.priorityLevel);
          var re = $(f.expirationTime <= D);
          (D = e.unstable_now()),
            typeof re == "function" ? (f.callback = re) : f === n(l) && r(l),
            v(D);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var pt = !0;
      else {
        var it = n(c);
        it !== null && O(S, it.startTime - D), (pt = !1);
      }
      return pt;
    } finally {
      (f = null), (h = L), (g = !1);
    }
  }
  var k = !1,
    A = null,
    E = -1,
    I = 5,
    N = -1;
  function z() {
    return !(e.unstable_now() - N < I);
  }
  function F() {
    if (A !== null) {
      var P = e.unstable_now();
      N = P;
      var D = !0;
      try {
        D = A(!0, P);
      } finally {
        D ? K() : ((k = !1), (A = null));
      }
    } else k = !1;
  }
  var K;
  if (typeof p == "function")
    K = function () {
      p(F);
    };
  else if (typeof MessageChannel < "u") {
    var M = new MessageChannel(),
      Q = M.port2;
    (M.port1.onmessage = F),
      (K = function () {
        Q.postMessage(null);
      });
  } else
    K = function () {
      b(F, 0);
    };
  function H(P) {
    (A = P), k || ((k = !0), K());
  }
  function O(P, D) {
    E = b(function () {
      P(e.unstable_now());
    }, D);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || g || ((x = !0), H(C));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (I = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (P) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = h;
      }
      var L = h;
      h = D;
      try {
        return P();
      } finally {
        h = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, D) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var L = h;
      h = P;
      try {
        return D();
      } finally {
        h = L;
      }
    }),
    (e.unstable_scheduleCallback = function (P, D, L) {
      var $ = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? $ + L : $))
          : (L = $),
        P)
      ) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return (
        (re = L + re),
        (P = {
          id: u++,
          callback: D,
          priorityLevel: P,
          startTime: L,
          expirationTime: re,
          sortIndex: -1,
        }),
        L > $
          ? ((P.sortIndex = L),
            t(c, P),
            n(l) === null &&
              P === n(c) &&
              (y ? (m(E), (E = -1)) : (y = !0), O(S, L - $)))
          : ((P.sortIndex = re), t(l, P), x || g || ((x = !0), H(C))),
        P
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (P) {
      var D = h;
      return function () {
        var L = h;
        h = D;
        try {
          return P.apply(this, arguments);
        } finally {
          h = L;
        }
      };
    });
})(Gm);
Km.exports = Gm;
var jw = Km.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nw = w,
  Ze = jw;
function j(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Qm = new Set(),
  rs = {};
function hr(e, t) {
  Zr(e, t), Zr(e + "Capture", t);
}
function Zr(e, t) {
  for (rs[e] = t, e = 0; e < t.length; e++) Qm.add(t[e]);
}
var Jt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Xl = Object.prototype.hasOwnProperty,
  Iw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Cf = {},
  kf = {};
function Dw(e) {
  return Xl.call(kf, e)
    ? !0
    : Xl.call(Cf, e)
      ? !1
      : Iw.test(e)
        ? (kf[e] = !0)
        : ((Cf[e] = !0), !1);
}
function Mw(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Rw(e, t, n, r) {
  if (t === null || typeof t > "u" || Mw(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Oe(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new Oe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ce[t] = new Oe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ce[e] = new Oe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ce[e] = new Oe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new Oe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ce[e] = new Oe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ce[e] = new Oe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ce[e] = new Oe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ce[e] = new Oe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Su = /[\-:]([a-z])/g;
function Cu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Su, Cu);
    Ce[t] = new Oe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Su, Cu);
    Ce[t] = new Oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Su, Cu);
  Ce[t] = new Oe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ce[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ce.xlinkHref = new Oe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ce[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ku(e, t, n, r) {
  var i = Ce.hasOwnProperty(t) ? Ce[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Rw(t, n, i, r) && (n = null),
    r || i === null
      ? Dw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var on = Nw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ws = Symbol.for("react.element"),
  xr = Symbol.for("react.portal"),
  wr = Symbol.for("react.fragment"),
  Eu = Symbol.for("react.strict_mode"),
  Jl = Symbol.for("react.profiler"),
  Ym = Symbol.for("react.provider"),
  qm = Symbol.for("react.context"),
  Au = Symbol.for("react.forward_ref"),
  Zl = Symbol.for("react.suspense"),
  ec = Symbol.for("react.suspense_list"),
  Pu = Symbol.for("react.memo"),
  fn = Symbol.for("react.lazy"),
  Xm = Symbol.for("react.offscreen"),
  Ef = Symbol.iterator;
function Ei(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ef && e[Ef]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var le = Object.assign,
  il;
function Fi(e) {
  if (il === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      il = (t && t[1]) || "";
    }
  return (
    `
` +
    il +
    e
  );
}
var sl = !1;
function ol(e, t) {
  if (!e || sl) return "";
  sl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (sl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Fi(e) : "";
}
function Lw(e) {
  switch (e.tag) {
    case 5:
      return Fi(e.type);
    case 16:
      return Fi("Lazy");
    case 13:
      return Fi("Suspense");
    case 19:
      return Fi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ol(e.type, !1)), e;
    case 11:
      return (e = ol(e.type.render, !1)), e;
    case 1:
      return (e = ol(e.type, !0)), e;
    default:
      return "";
  }
}
function tc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case wr:
      return "Fragment";
    case xr:
      return "Portal";
    case Jl:
      return "Profiler";
    case Eu:
      return "StrictMode";
    case Zl:
      return "Suspense";
    case ec:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case qm:
        return (e.displayName || "Context") + ".Consumer";
      case Ym:
        return (e._context.displayName || "Context") + ".Provider";
      case Au:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Pu:
        return (
          (t = e.displayName || null), t !== null ? t : tc(e.type) || "Memo"
        );
      case fn:
        (t = e._payload), (e = e._init);
        try {
          return tc(e(t));
        } catch {}
    }
  return null;
}
function Fw(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return tc(t);
    case 8:
      return t === Eu ? "StrictMode" : "Mode";
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
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function In(e) {
  switch (typeof e) {
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
function Jm(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function _w(e) {
  var t = Jm(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ks(e) {
  e._valueTracker || (e._valueTracker = _w(e));
}
function Zm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Jm(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Lo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function nc(e, t) {
  var n = t.checked;
  return le({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Af(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = In(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function eg(e, t) {
  (t = t.checked), t != null && ku(e, "checked", t, !1);
}
function rc(e, t) {
  eg(e, t);
  var n = In(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ic(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ic(e, t.type, In(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Pf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ic(e, t, n) {
  (t !== "number" || Lo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var _i = Array.isArray;
function Fr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + In(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function sc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return le({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Tf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (_i(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: In(n) };
}
function tg(e, t) {
  var n = In(t.value),
    r = In(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function jf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ng(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function oc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ng(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Gs,
  rg = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Gs = Gs || document.createElement("div"),
          Gs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Gs.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function is(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Hi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ow = ["Webkit", "ms", "Moz", "O"];
Object.keys(Hi).forEach(function (e) {
  Ow.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Hi[t] = Hi[e]);
  });
});
function ig(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Hi.hasOwnProperty(e) && Hi[e])
      ? ("" + t).trim()
      : t + "px";
}
function sg(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = ig(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Vw = le(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function ac(e, t) {
  if (t) {
    if (Vw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function lc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var cc = null;
function Tu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var uc = null,
  _r = null,
  Or = null;
function Nf(e) {
  if ((e = Rs(e))) {
    if (typeof uc != "function") throw Error(j(280));
    var t = e.stateNode;
    t && ((t = Aa(t)), uc(e.stateNode, e.type, t));
  }
}
function og(e) {
  _r ? (Or ? Or.push(e) : (Or = [e])) : (_r = e);
}
function ag() {
  if (_r) {
    var e = _r,
      t = Or;
    if (((Or = _r = null), Nf(e), t)) for (e = 0; e < t.length; e++) Nf(t[e]);
  }
}
function lg(e, t) {
  return e(t);
}
function cg() {}
var al = !1;
function ug(e, t, n) {
  if (al) return e(t, n);
  al = !0;
  try {
    return lg(e, t, n);
  } finally {
    (al = !1), (_r !== null || Or !== null) && (cg(), ag());
  }
}
function ss(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Aa(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var dc = !1;
if (Jt)
  try {
    var Ai = {};
    Object.defineProperty(Ai, "passive", {
      get: function () {
        dc = !0;
      },
    }),
      window.addEventListener("test", Ai, Ai),
      window.removeEventListener("test", Ai, Ai);
  } catch {
    dc = !1;
  }
function zw(e, t, n, r, i, s, o, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var $i = !1,
  Fo = null,
  _o = !1,
  fc = null,
  Bw = {
    onError: function (e) {
      ($i = !0), (Fo = e);
    },
  };
function Uw(e, t, n, r, i, s, o, a, l) {
  ($i = !1), (Fo = null), zw.apply(Bw, arguments);
}
function Hw(e, t, n, r, i, s, o, a, l) {
  if ((Uw.apply(this, arguments), $i)) {
    if ($i) {
      var c = Fo;
      ($i = !1), (Fo = null);
    } else throw Error(j(198));
    _o || ((_o = !0), (fc = c));
  }
}
function pr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function dg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function If(e) {
  if (pr(e) !== e) throw Error(j(188));
}
function $w(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = pr(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return If(i), e;
        if (s === r) return If(i), t;
        s = s.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function fg(e) {
  return (e = $w(e)), e !== null ? hg(e) : null;
}
function hg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = hg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var pg = Ze.unstable_scheduleCallback,
  Df = Ze.unstable_cancelCallback,
  Ww = Ze.unstable_shouldYield,
  Kw = Ze.unstable_requestPaint,
  he = Ze.unstable_now,
  Gw = Ze.unstable_getCurrentPriorityLevel,
  ju = Ze.unstable_ImmediatePriority,
  mg = Ze.unstable_UserBlockingPriority,
  Oo = Ze.unstable_NormalPriority,
  Qw = Ze.unstable_LowPriority,
  gg = Ze.unstable_IdlePriority,
  Sa = null,
  Rt = null;
function Yw(e) {
  if (Rt && typeof Rt.onCommitFiberRoot == "function")
    try {
      Rt.onCommitFiberRoot(Sa, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var St = Math.clz32 ? Math.clz32 : Jw,
  qw = Math.log,
  Xw = Math.LN2;
function Jw(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((qw(e) / Xw) | 0)) | 0;
}
var Qs = 64,
  Ys = 4194304;
function Oi(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Vo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = Oi(a)) : ((s &= o), s !== 0 && (r = Oi(s)));
  } else (o = n & ~i), o !== 0 ? (r = Oi(o)) : s !== 0 && (r = Oi(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - St(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Zw(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function e1(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - St(s),
      a = 1 << o,
      l = i[o];
    l === -1
      ? (!(a & n) || a & r) && (i[o] = Zw(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a);
  }
}
function hc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function yg() {
  var e = Qs;
  return (Qs <<= 1), !(Qs & 4194240) && (Qs = 64), e;
}
function ll(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ds(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - St(t)),
    (e[t] = n);
}
function t1(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - St(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function Nu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - St(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var q = 0;
function vg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var xg,
  Iu,
  wg,
  bg,
  Sg,
  pc = !1,
  qs = [],
  Cn = null,
  kn = null,
  En = null,
  os = new Map(),
  as = new Map(),
  pn = [],
  n1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Mf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Cn = null;
      break;
    case "dragenter":
    case "dragleave":
      kn = null;
      break;
    case "mouseover":
    case "mouseout":
      En = null;
      break;
    case "pointerover":
    case "pointerout":
      os.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      as.delete(t.pointerId);
  }
}
function Pi(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = Rs(t)), t !== null && Iu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function r1(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Cn = Pi(Cn, e, t, n, r, i)), !0;
    case "dragenter":
      return (kn = Pi(kn, e, t, n, r, i)), !0;
    case "mouseover":
      return (En = Pi(En, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return os.set(s, Pi(os.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), as.set(s, Pi(as.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Cg(e) {
  var t = Qn(e.target);
  if (t !== null) {
    var n = pr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = dg(n)), t !== null)) {
          (e.blockedOn = t),
            Sg(e.priority, function () {
              wg(n);
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
function vo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = mc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (cc = r), n.target.dispatchEvent(r), (cc = null);
    } else return (t = Rs(n)), t !== null && Iu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Rf(e, t, n) {
  vo(e) && n.delete(t);
}
function i1() {
  (pc = !1),
    Cn !== null && vo(Cn) && (Cn = null),
    kn !== null && vo(kn) && (kn = null),
    En !== null && vo(En) && (En = null),
    os.forEach(Rf),
    as.forEach(Rf);
}
function Ti(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    pc ||
      ((pc = !0),
      Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority, i1)));
}
function ls(e) {
  function t(i) {
    return Ti(i, e);
  }
  if (0 < qs.length) {
    Ti(qs[0], e);
    for (var n = 1; n < qs.length; n++) {
      var r = qs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Cn !== null && Ti(Cn, e),
      kn !== null && Ti(kn, e),
      En !== null && Ti(En, e),
      os.forEach(t),
      as.forEach(t),
      n = 0;
    n < pn.length;
    n++
  )
    (r = pn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < pn.length && ((n = pn[0]), n.blockedOn === null); )
    Cg(n), n.blockedOn === null && pn.shift();
}
var Vr = on.ReactCurrentBatchConfig,
  zo = !0;
function s1(e, t, n, r) {
  var i = q,
    s = Vr.transition;
  Vr.transition = null;
  try {
    (q = 1), Du(e, t, n, r);
  } finally {
    (q = i), (Vr.transition = s);
  }
}
function o1(e, t, n, r) {
  var i = q,
    s = Vr.transition;
  Vr.transition = null;
  try {
    (q = 4), Du(e, t, n, r);
  } finally {
    (q = i), (Vr.transition = s);
  }
}
function Du(e, t, n, r) {
  if (zo) {
    var i = mc(e, t, n, r);
    if (i === null) vl(e, t, r, Bo, n), Mf(e, r);
    else if (r1(i, e, t, n, r)) r.stopPropagation();
    else if ((Mf(e, r), t & 4 && -1 < n1.indexOf(e))) {
      for (; i !== null; ) {
        var s = Rs(i);
        if (
          (s !== null && xg(s),
          (s = mc(e, t, n, r)),
          s === null && vl(e, t, r, Bo, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else vl(e, t, r, null, n);
  }
}
var Bo = null;
function mc(e, t, n, r) {
  if (((Bo = null), (e = Tu(r)), (e = Qn(e)), e !== null))
    if (((t = pr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = dg(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Bo = e), null;
}
function kg(e) {
  switch (e) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Gw()) {
        case ju:
          return 1;
        case mg:
          return 4;
        case Oo:
        case Qw:
          return 16;
        case gg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var bn = null,
  Mu = null,
  xo = null;
function Eg() {
  if (xo) return xo;
  var e,
    t = Mu,
    n = t.length,
    r,
    i = "value" in bn ? bn.value : bn.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (xo = i.slice(e, 1 < r ? 1 - r : void 0));
}
function wo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Xs() {
  return !0;
}
function Lf() {
  return !1;
}
function nt(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Xs
        : Lf),
      (this.isPropagationStopped = Lf),
      this
    );
  }
  return (
    le(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Xs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Xs));
      },
      persist: function () {},
      isPersistent: Xs,
    }),
    t
  );
}
var mi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ru = nt(mi),
  Ms = le({}, mi, { view: 0, detail: 0 }),
  a1 = nt(Ms),
  cl,
  ul,
  ji,
  Ca = le({}, Ms, {
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
    getModifierState: Lu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ji &&
            (ji && e.type === "mousemove"
              ? ((cl = e.screenX - ji.screenX), (ul = e.screenY - ji.screenY))
              : (ul = cl = 0),
            (ji = e)),
          cl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ul;
    },
  }),
  Ff = nt(Ca),
  l1 = le({}, Ca, { dataTransfer: 0 }),
  c1 = nt(l1),
  u1 = le({}, Ms, { relatedTarget: 0 }),
  dl = nt(u1),
  d1 = le({}, mi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  f1 = nt(d1),
  h1 = le({}, mi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  p1 = nt(h1),
  m1 = le({}, mi, { data: 0 }),
  _f = nt(m1),
  g1 = {
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
    MozPrintableKey: "Unidentified",
  },
  y1 = {
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
    224: "Meta",
  },
  v1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function x1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = v1[e]) ? !!t[e] : !1;
}
function Lu() {
  return x1;
}
var w1 = le({}, Ms, {
    key: function (e) {
      if (e.key) {
        var t = g1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = wo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? y1[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Lu,
    charCode: function (e) {
      return e.type === "keypress" ? wo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? wo(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  b1 = nt(w1),
  S1 = le({}, Ca, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Of = nt(S1),
  C1 = le({}, Ms, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Lu,
  }),
  k1 = nt(C1),
  E1 = le({}, mi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  A1 = nt(E1),
  P1 = le({}, Ca, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  T1 = nt(P1),
  j1 = [9, 13, 27, 32],
  Fu = Jt && "CompositionEvent" in window,
  Wi = null;
Jt && "documentMode" in document && (Wi = document.documentMode);
var N1 = Jt && "TextEvent" in window && !Wi,
  Ag = Jt && (!Fu || (Wi && 8 < Wi && 11 >= Wi)),
  Vf = " ",
  zf = !1;
function Pg(e, t) {
  switch (e) {
    case "keyup":
      return j1.indexOf(t.keyCode) !== -1;
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
function Tg(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var br = !1;
function I1(e, t) {
  switch (e) {
    case "compositionend":
      return Tg(t);
    case "keypress":
      return t.which !== 32 ? null : ((zf = !0), Vf);
    case "textInput":
      return (e = t.data), e === Vf && zf ? null : e;
    default:
      return null;
  }
}
function D1(e, t) {
  if (br)
    return e === "compositionend" || (!Fu && Pg(e, t))
      ? ((e = Eg()), (xo = Mu = bn = null), (br = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ag && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var M1 = {
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
  week: !0,
};
function Bf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!M1[e.type] : t === "textarea";
}
function jg(e, t, n, r) {
  og(r),
    (t = Uo(t, "onChange")),
    0 < t.length &&
      ((n = new Ru("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ki = null,
  cs = null;
function R1(e) {
  zg(e, 0);
}
function ka(e) {
  var t = kr(e);
  if (Zm(t)) return e;
}
function L1(e, t) {
  if (e === "change") return t;
}
var Ng = !1;
if (Jt) {
  var fl;
  if (Jt) {
    var hl = "oninput" in document;
    if (!hl) {
      var Uf = document.createElement("div");
      Uf.setAttribute("oninput", "return;"),
        (hl = typeof Uf.oninput == "function");
    }
    fl = hl;
  } else fl = !1;
  Ng = fl && (!document.documentMode || 9 < document.documentMode);
}
function Hf() {
  Ki && (Ki.detachEvent("onpropertychange", Ig), (cs = Ki = null));
}
function Ig(e) {
  if (e.propertyName === "value" && ka(cs)) {
    var t = [];
    jg(t, cs, e, Tu(e)), ug(R1, t);
  }
}
function F1(e, t, n) {
  e === "focusin"
    ? (Hf(), (Ki = t), (cs = n), Ki.attachEvent("onpropertychange", Ig))
    : e === "focusout" && Hf();
}
function _1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ka(cs);
}
function O1(e, t) {
  if (e === "click") return ka(t);
}
function V1(e, t) {
  if (e === "input" || e === "change") return ka(t);
}
function z1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var kt = typeof Object.is == "function" ? Object.is : z1;
function us(e, t) {
  if (kt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Xl.call(t, i) || !kt(e[i], t[i])) return !1;
  }
  return !0;
}
function $f(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Wf(e, t) {
  var n = $f(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
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
    n = $f(n);
  }
}
function Dg(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Dg(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Mg() {
  for (var e = window, t = Lo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Lo(e.document);
  }
  return t;
}
function _u(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function B1(e) {
  var t = Mg(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Dg(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && _u(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Wf(n, s));
        var o = Wf(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var U1 = Jt && "documentMode" in document && 11 >= document.documentMode,
  Sr = null,
  gc = null,
  Gi = null,
  yc = !1;
function Kf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  yc ||
    Sr == null ||
    Sr !== Lo(r) ||
    ((r = Sr),
    "selectionStart" in r && _u(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Gi && us(Gi, r)) ||
      ((Gi = r),
      (r = Uo(gc, "onSelect")),
      0 < r.length &&
        ((t = new Ru("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Sr))));
}
function Js(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Cr = {
    animationend: Js("Animation", "AnimationEnd"),
    animationiteration: Js("Animation", "AnimationIteration"),
    animationstart: Js("Animation", "AnimationStart"),
    transitionend: Js("Transition", "TransitionEnd"),
  },
  pl = {},
  Rg = {};
Jt &&
  ((Rg = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Cr.animationend.animation,
    delete Cr.animationiteration.animation,
    delete Cr.animationstart.animation),
  "TransitionEvent" in window || delete Cr.transitionend.transition);
function Ea(e) {
  if (pl[e]) return pl[e];
  if (!Cr[e]) return e;
  var t = Cr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Rg) return (pl[e] = t[n]);
  return e;
}
var Lg = Ea("animationend"),
  Fg = Ea("animationiteration"),
  _g = Ea("animationstart"),
  Og = Ea("transitionend"),
  Vg = new Map(),
  Gf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function On(e, t) {
  Vg.set(e, t), hr(t, [e]);
}
for (var ml = 0; ml < Gf.length; ml++) {
  var gl = Gf[ml],
    H1 = gl.toLowerCase(),
    $1 = gl[0].toUpperCase() + gl.slice(1);
  On(H1, "on" + $1);
}
On(Lg, "onAnimationEnd");
On(Fg, "onAnimationIteration");
On(_g, "onAnimationStart");
On("dblclick", "onDoubleClick");
On("focusin", "onFocus");
On("focusout", "onBlur");
On(Og, "onTransitionEnd");
Zr("onMouseEnter", ["mouseout", "mouseover"]);
Zr("onMouseLeave", ["mouseout", "mouseover"]);
Zr("onPointerEnter", ["pointerout", "pointerover"]);
Zr("onPointerLeave", ["pointerout", "pointerover"]);
hr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
hr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
hr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
hr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
hr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
hr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Vi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  W1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vi));
function Qf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Hw(r, t, void 0, e), (e.currentTarget = null);
}
function zg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          Qf(i, a, c), (s = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          Qf(i, a, c), (s = l);
        }
    }
  }
  if (_o) throw ((e = fc), (_o = !1), (fc = null), e);
}
function ee(e, t) {
  var n = t[Sc];
  n === void 0 && (n = t[Sc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Bg(t, e, 2, !1), n.add(r));
}
function yl(e, t, n) {
  var r = 0;
  t && (r |= 4), Bg(n, e, r, t);
}
var Zs = "_reactListening" + Math.random().toString(36).slice(2);
function ds(e) {
  if (!e[Zs]) {
    (e[Zs] = !0),
      Qm.forEach(function (n) {
        n !== "selectionchange" && (W1.has(n) || yl(n, !1, e), yl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Zs] || ((t[Zs] = !0), yl("selectionchange", !1, t));
  }
}
function Bg(e, t, n, r) {
  switch (kg(t)) {
    case 1:
      var i = s1;
      break;
    case 4:
      i = o1;
      break;
    default:
      i = Du;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !dc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
}
function vl(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Qn(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  ug(function () {
    var c = s,
      u = Tu(n),
      f = [];
    e: {
      var h = Vg.get(e);
      if (h !== void 0) {
        var g = Ru,
          x = e;
        switch (e) {
          case "keypress":
            if (wo(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = b1;
            break;
          case "focusin":
            (x = "focus"), (g = dl);
            break;
          case "focusout":
            (x = "blur"), (g = dl);
            break;
          case "beforeblur":
          case "afterblur":
            g = dl;
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
            g = Ff;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = c1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = k1;
            break;
          case Lg:
          case Fg:
          case _g:
            g = f1;
            break;
          case Og:
            g = A1;
            break;
          case "scroll":
            g = a1;
            break;
          case "wheel":
            g = T1;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = p1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Of;
        }
        var y = (t & 4) !== 0,
          b = !y && e === "scroll",
          m = y ? (h !== null ? h + "Capture" : null) : h;
        y = [];
        for (var p = c, v; p !== null; ) {
          v = p;
          var S = v.stateNode;
          if (
            (v.tag === 5 &&
              S !== null &&
              ((v = S),
              m !== null && ((S = ss(p, m)), S != null && y.push(fs(p, S, v)))),
            b)
          )
            break;
          p = p.return;
        }
        0 < y.length &&
          ((h = new g(h, x, null, n, u)), f.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          h &&
            n !== cc &&
            (x = n.relatedTarget || n.fromElement) &&
            (Qn(x) || x[Zt]))
        )
          break e;
        if (
          (g || h) &&
          ((h =
            u.window === u
              ? u
              : (h = u.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          g
            ? ((x = n.relatedTarget || n.toElement),
              (g = c),
              (x = x ? Qn(x) : null),
              x !== null &&
                ((b = pr(x)), x !== b || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((g = null), (x = c)),
          g !== x)
        ) {
          if (
            ((y = Ff),
            (S = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Of),
              (S = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (b = g == null ? h : kr(g)),
            (v = x == null ? h : kr(x)),
            (h = new y(S, p + "leave", g, n, u)),
            (h.target = b),
            (h.relatedTarget = v),
            (S = null),
            Qn(u) === c &&
              ((y = new y(m, p + "enter", x, n, u)),
              (y.target = v),
              (y.relatedTarget = b),
              (S = y)),
            (b = S),
            g && x)
          )
            t: {
              for (y = g, m = x, p = 0, v = y; v; v = gr(v)) p++;
              for (v = 0, S = m; S; S = gr(S)) v++;
              for (; 0 < p - v; ) (y = gr(y)), p--;
              for (; 0 < v - p; ) (m = gr(m)), v--;
              for (; p--; ) {
                if (y === m || (m !== null && y === m.alternate)) break t;
                (y = gr(y)), (m = gr(m));
              }
              y = null;
            }
          else y = null;
          g !== null && Yf(f, h, g, y, !1),
            x !== null && b !== null && Yf(f, b, x, y, !0);
        }
      }
      e: {
        if (
          ((h = c ? kr(c) : window),
          (g = h.nodeName && h.nodeName.toLowerCase()),
          g === "select" || (g === "input" && h.type === "file"))
        )
          var C = L1;
        else if (Bf(h))
          if (Ng) C = V1;
          else {
            C = _1;
            var k = F1;
          }
        else
          (g = h.nodeName) &&
            g.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (C = O1);
        if (C && (C = C(e, c))) {
          jg(f, C, n, u);
          break e;
        }
        k && k(e, h, c),
          e === "focusout" &&
            (k = h._wrapperState) &&
            k.controlled &&
            h.type === "number" &&
            ic(h, "number", h.value);
      }
      switch (((k = c ? kr(c) : window), e)) {
        case "focusin":
          (Bf(k) || k.contentEditable === "true") &&
            ((Sr = k), (gc = c), (Gi = null));
          break;
        case "focusout":
          Gi = gc = Sr = null;
          break;
        case "mousedown":
          yc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (yc = !1), Kf(f, n, u);
          break;
        case "selectionchange":
          if (U1) break;
        case "keydown":
        case "keyup":
          Kf(f, n, u);
      }
      var A;
      if (Fu)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        br
          ? Pg(e, n) && (E = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (Ag &&
          n.locale !== "ko" &&
          (br || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && br && (A = Eg())
            : ((bn = u),
              (Mu = "value" in bn ? bn.value : bn.textContent),
              (br = !0))),
        (k = Uo(c, E)),
        0 < k.length &&
          ((E = new _f(E, e, null, n, u)),
          f.push({ event: E, listeners: k }),
          A ? (E.data = A) : ((A = Tg(n)), A !== null && (E.data = A)))),
        (A = N1 ? I1(e, n) : D1(e, n)) &&
          ((c = Uo(c, "onBeforeInput")),
          0 < c.length &&
            ((u = new _f("onBeforeInput", "beforeinput", null, n, u)),
            f.push({ event: u, listeners: c }),
            (u.data = A)));
    }
    zg(f, t);
  });
}
function fs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Uo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = ss(e, n)),
      s != null && r.unshift(fs(e, s, i)),
      (s = ss(e, t)),
      s != null && r.push(fs(e, s, i))),
      (e = e.return);
  }
  return r;
}
function gr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Yf(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      i
        ? ((l = ss(n, s)), l != null && o.unshift(fs(n, l, a)))
        : i || ((l = ss(n, s)), l != null && o.push(fs(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var K1 = /\r\n?/g,
  G1 = /\u0000|\uFFFD/g;
function qf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      K1,
      `
`,
    )
    .replace(G1, "");
}
function eo(e, t, n) {
  if (((t = qf(t)), qf(e) !== t && n)) throw Error(j(425));
}
function Ho() {}
var vc = null,
  xc = null;
function wc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var bc = typeof setTimeout == "function" ? setTimeout : void 0,
  Q1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Xf = typeof Promise == "function" ? Promise : void 0,
  Y1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Xf < "u"
        ? function (e) {
            return Xf.resolve(null).then(e).catch(q1);
          }
        : bc;
function q1(e) {
  setTimeout(function () {
    throw e;
  });
}
function xl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), ls(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  ls(t);
}
function An(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Jf(e) {
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
var gi = Math.random().toString(36).slice(2),
  Mt = "__reactFiber$" + gi,
  hs = "__reactProps$" + gi,
  Zt = "__reactContainer$" + gi,
  Sc = "__reactEvents$" + gi,
  X1 = "__reactListeners$" + gi,
  J1 = "__reactHandles$" + gi;
function Qn(e) {
  var t = e[Mt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Zt] || n[Mt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Jf(e); e !== null; ) {
          if ((n = e[Mt])) return n;
          e = Jf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Rs(e) {
  return (
    (e = e[Mt] || e[Zt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function kr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function Aa(e) {
  return e[hs] || null;
}
var Cc = [],
  Er = -1;
function Vn(e) {
  return { current: e };
}
function te(e) {
  0 > Er || ((e.current = Cc[Er]), (Cc[Er] = null), Er--);
}
function J(e, t) {
  Er++, (Cc[Er] = e.current), (e.current = t);
}
var Dn = {},
  Ie = Vn(Dn),
  Be = Vn(!1),
  or = Dn;
function ei(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Dn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ue(e) {
  return (e = e.childContextTypes), e != null;
}
function $o() {
  te(Be), te(Ie);
}
function Zf(e, t, n) {
  if (Ie.current !== Dn) throw Error(j(168));
  J(Ie, t), J(Be, n);
}
function Ug(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(j(108, Fw(e) || "Unknown", i));
  return le({}, n, r);
}
function Wo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Dn),
    (or = Ie.current),
    J(Ie, e),
    J(Be, Be.current),
    !0
  );
}
function eh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n
    ? ((e = Ug(e, t, or)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      te(Be),
      te(Ie),
      J(Ie, e))
    : te(Be),
    J(Be, n);
}
var Kt = null,
  Pa = !1,
  wl = !1;
function Hg(e) {
  Kt === null ? (Kt = [e]) : Kt.push(e);
}
function Z1(e) {
  (Pa = !0), Hg(e);
}
function zn() {
  if (!wl && Kt !== null) {
    wl = !0;
    var e = 0,
      t = q;
    try {
      var n = Kt;
      for (q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Kt = null), (Pa = !1);
    } catch (i) {
      throw (Kt !== null && (Kt = Kt.slice(e + 1)), pg(ju, zn), i);
    } finally {
      (q = t), (wl = !1);
    }
  }
  return null;
}
var Ar = [],
  Pr = 0,
  Ko = null,
  Go = 0,
  lt = [],
  ct = 0,
  ar = null,
  Gt = 1,
  Qt = "";
function $n(e, t) {
  (Ar[Pr++] = Go), (Ar[Pr++] = Ko), (Ko = e), (Go = t);
}
function $g(e, t, n) {
  (lt[ct++] = Gt), (lt[ct++] = Qt), (lt[ct++] = ar), (ar = e);
  var r = Gt;
  e = Qt;
  var i = 32 - St(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - St(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Gt = (1 << (32 - St(t) + i)) | (n << i) | r),
      (Qt = s + e);
  } else (Gt = (1 << s) | (n << i) | r), (Qt = e);
}
function Ou(e) {
  e.return !== null && ($n(e, 1), $g(e, 1, 0));
}
function Vu(e) {
  for (; e === Ko; )
    (Ko = Ar[--Pr]), (Ar[Pr] = null), (Go = Ar[--Pr]), (Ar[Pr] = null);
  for (; e === ar; )
    (ar = lt[--ct]),
      (lt[ct] = null),
      (Qt = lt[--ct]),
      (lt[ct] = null),
      (Gt = lt[--ct]),
      (lt[ct] = null);
}
var qe = null,
  Ye = null,
  ie = !1,
  bt = null;
function Wg(e, t) {
  var n = ut(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function th(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (qe = e), (Ye = An(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (qe = e), (Ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ar !== null ? { id: Gt, overflow: Qt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ut(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (qe = e),
            (Ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function kc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ec(e) {
  if (ie) {
    var t = Ye;
    if (t) {
      var n = t;
      if (!th(e, t)) {
        if (kc(e)) throw Error(j(418));
        t = An(n.nextSibling);
        var r = qe;
        t && th(e, t)
          ? Wg(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ie = !1), (qe = e));
      }
    } else {
      if (kc(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (ie = !1), (qe = e);
    }
  }
}
function nh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  qe = e;
}
function to(e) {
  if (e !== qe) return !1;
  if (!ie) return nh(e), (ie = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !wc(e.type, e.memoizedProps))),
    t && (t = Ye))
  ) {
    if (kc(e)) throw (Kg(), Error(j(418)));
    for (; t; ) Wg(e, t), (t = An(t.nextSibling));
  }
  if ((nh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ye = An(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ye = null;
    }
  } else Ye = qe ? An(e.stateNode.nextSibling) : null;
  return !0;
}
function Kg() {
  for (var e = Ye; e; ) e = An(e.nextSibling);
}
function ti() {
  (Ye = qe = null), (ie = !1);
}
function zu(e) {
  bt === null ? (bt = [e]) : bt.push(e);
}
var e2 = on.ReactCurrentBatchConfig;
function Ni(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function no(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function rh(e) {
  var t = e._init;
  return t(e._payload);
}
function Gg(e) {
  function t(m, p) {
    if (e) {
      var v = m.deletions;
      v === null ? ((m.deletions = [p]), (m.flags |= 16)) : v.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function i(m, p) {
    return (m = Nn(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function s(m, p, v) {
    return (
      (m.index = v),
      e
        ? ((v = m.alternate),
          v !== null
            ? ((v = v.index), v < p ? ((m.flags |= 2), p) : v)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, p, v, S) {
    return p === null || p.tag !== 6
      ? ((p = Pl(v, m.mode, S)), (p.return = m), p)
      : ((p = i(p, v)), (p.return = m), p);
  }
  function l(m, p, v, S) {
    var C = v.type;
    return C === wr
      ? u(m, p, v.props.children, S, v.key)
      : p !== null &&
          (p.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === fn &&
              rh(C) === p.type))
        ? ((S = i(p, v.props)), (S.ref = Ni(m, p, v)), (S.return = m), S)
        : ((S = Po(v.type, v.key, v.props, null, m.mode, S)),
          (S.ref = Ni(m, p, v)),
          (S.return = m),
          S);
  }
  function c(m, p, v, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== v.containerInfo ||
      p.stateNode.implementation !== v.implementation
      ? ((p = Tl(v, m.mode, S)), (p.return = m), p)
      : ((p = i(p, v.children || [])), (p.return = m), p);
  }
  function u(m, p, v, S, C) {
    return p === null || p.tag !== 7
      ? ((p = rr(v, m.mode, S, C)), (p.return = m), p)
      : ((p = i(p, v)), (p.return = m), p);
  }
  function f(m, p, v) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Pl("" + p, m.mode, v)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ws:
          return (
            (v = Po(p.type, p.key, p.props, null, m.mode, v)),
            (v.ref = Ni(m, null, p)),
            (v.return = m),
            v
          );
        case xr:
          return (p = Tl(p, m.mode, v)), (p.return = m), p;
        case fn:
          var S = p._init;
          return f(m, S(p._payload), v);
      }
      if (_i(p) || Ei(p))
        return (p = rr(p, m.mode, v, null)), (p.return = m), p;
      no(m, p);
    }
    return null;
  }
  function h(m, p, v, S) {
    var C = p !== null ? p.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return C !== null ? null : a(m, p, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ws:
          return v.key === C ? l(m, p, v, S) : null;
        case xr:
          return v.key === C ? c(m, p, v, S) : null;
        case fn:
          return (C = v._init), h(m, p, C(v._payload), S);
      }
      if (_i(v) || Ei(v)) return C !== null ? null : u(m, p, v, S, null);
      no(m, v);
    }
    return null;
  }
  function g(m, p, v, S, C) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (m = m.get(v) || null), a(p, m, "" + S, C);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Ws:
          return (m = m.get(S.key === null ? v : S.key) || null), l(p, m, S, C);
        case xr:
          return (m = m.get(S.key === null ? v : S.key) || null), c(p, m, S, C);
        case fn:
          var k = S._init;
          return g(m, p, v, k(S._payload), C);
      }
      if (_i(S) || Ei(S)) return (m = m.get(v) || null), u(p, m, S, C, null);
      no(p, S);
    }
    return null;
  }
  function x(m, p, v, S) {
    for (
      var C = null, k = null, A = p, E = (p = 0), I = null;
      A !== null && E < v.length;
      E++
    ) {
      A.index > E ? ((I = A), (A = null)) : (I = A.sibling);
      var N = h(m, A, v[E], S);
      if (N === null) {
        A === null && (A = I);
        break;
      }
      e && A && N.alternate === null && t(m, A),
        (p = s(N, p, E)),
        k === null ? (C = N) : (k.sibling = N),
        (k = N),
        (A = I);
    }
    if (E === v.length) return n(m, A), ie && $n(m, E), C;
    if (A === null) {
      for (; E < v.length; E++)
        (A = f(m, v[E], S)),
          A !== null &&
            ((p = s(A, p, E)), k === null ? (C = A) : (k.sibling = A), (k = A));
      return ie && $n(m, E), C;
    }
    for (A = r(m, A); E < v.length; E++)
      (I = g(A, m, E, v[E], S)),
        I !== null &&
          (e && I.alternate !== null && A.delete(I.key === null ? E : I.key),
          (p = s(I, p, E)),
          k === null ? (C = I) : (k.sibling = I),
          (k = I));
    return (
      e &&
        A.forEach(function (z) {
          return t(m, z);
        }),
      ie && $n(m, E),
      C
    );
  }
  function y(m, p, v, S) {
    var C = Ei(v);
    if (typeof C != "function") throw Error(j(150));
    if (((v = C.call(v)), v == null)) throw Error(j(151));
    for (
      var k = (C = null), A = p, E = (p = 0), I = null, N = v.next();
      A !== null && !N.done;
      E++, N = v.next()
    ) {
      A.index > E ? ((I = A), (A = null)) : (I = A.sibling);
      var z = h(m, A, N.value, S);
      if (z === null) {
        A === null && (A = I);
        break;
      }
      e && A && z.alternate === null && t(m, A),
        (p = s(z, p, E)),
        k === null ? (C = z) : (k.sibling = z),
        (k = z),
        (A = I);
    }
    if (N.done) return n(m, A), ie && $n(m, E), C;
    if (A === null) {
      for (; !N.done; E++, N = v.next())
        (N = f(m, N.value, S)),
          N !== null &&
            ((p = s(N, p, E)), k === null ? (C = N) : (k.sibling = N), (k = N));
      return ie && $n(m, E), C;
    }
    for (A = r(m, A); !N.done; E++, N = v.next())
      (N = g(A, m, E, N.value, S)),
        N !== null &&
          (e && N.alternate !== null && A.delete(N.key === null ? E : N.key),
          (p = s(N, p, E)),
          k === null ? (C = N) : (k.sibling = N),
          (k = N));
    return (
      e &&
        A.forEach(function (F) {
          return t(m, F);
        }),
      ie && $n(m, E),
      C
    );
  }
  function b(m, p, v, S) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === wr &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Ws:
          e: {
            for (var C = v.key, k = p; k !== null; ) {
              if (k.key === C) {
                if (((C = v.type), C === wr)) {
                  if (k.tag === 7) {
                    n(m, k.sibling),
                      (p = i(k, v.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  k.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === fn &&
                    rh(C) === k.type)
                ) {
                  n(m, k.sibling),
                    (p = i(k, v.props)),
                    (p.ref = Ni(m, k, v)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, k);
                break;
              } else t(m, k);
              k = k.sibling;
            }
            v.type === wr
              ? ((p = rr(v.props.children, m.mode, S, v.key)),
                (p.return = m),
                (m = p))
              : ((S = Po(v.type, v.key, v.props, null, m.mode, S)),
                (S.ref = Ni(m, p, v)),
                (S.return = m),
                (m = S));
          }
          return o(m);
        case xr:
          e: {
            for (k = v.key; p !== null; ) {
              if (p.key === k)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === v.containerInfo &&
                  p.stateNode.implementation === v.implementation
                ) {
                  n(m, p.sibling),
                    (p = i(p, v.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = Tl(v, m.mode, S)), (p.return = m), (m = p);
          }
          return o(m);
        case fn:
          return (k = v._init), b(m, p, k(v._payload), S);
      }
      if (_i(v)) return x(m, p, v, S);
      if (Ei(v)) return y(m, p, v, S);
      no(m, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = i(p, v)), (p.return = m), (m = p))
          : (n(m, p), (p = Pl(v, m.mode, S)), (p.return = m), (m = p)),
        o(m))
      : n(m, p);
  }
  return b;
}
var ni = Gg(!0),
  Qg = Gg(!1),
  Qo = Vn(null),
  Yo = null,
  Tr = null,
  Bu = null;
function Uu() {
  Bu = Tr = Yo = null;
}
function Hu(e) {
  var t = Qo.current;
  te(Qo), (e._currentValue = t);
}
function Ac(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function zr(e, t) {
  (Yo = e),
    (Bu = Tr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ze = !0), (e.firstContext = null));
}
function ft(e) {
  var t = e._currentValue;
  if (Bu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Tr === null)) {
      if (Yo === null) throw Error(j(308));
      (Tr = e), (Yo.dependencies = { lanes: 0, firstContext: e });
    } else Tr = Tr.next = e;
  return t;
}
var Yn = null;
function $u(e) {
  Yn === null ? (Yn = [e]) : Yn.push(e);
}
function Yg(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), $u(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    en(e, r)
  );
}
function en(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var hn = !1;
function Wu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function qg(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Yt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Pn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), G & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      en(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), $u(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    en(e, n)
  );
}
function bo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Nu(e, n);
  }
}
function ih(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function qo(e, t, n, r) {
  var i = e.updateQueue;
  hn = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      c = l.next;
    (l.next = null), o === null ? (s = c) : (o.next = c), (o = l);
    var u = e.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (a = u.lastBaseUpdate),
      a !== o &&
        (a === null ? (u.firstBaseUpdate = c) : (a.next = c),
        (u.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var f = i.baseState;
    (o = 0), (u = c = l = null), (a = s);
    do {
      var h = a.lane,
        g = a.eventTime;
      if ((r & h) === h) {
        u !== null &&
          (u = u.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            y = a;
          switch (((h = t), (g = n), y.tag)) {
            case 1:
              if (((x = y.payload), typeof x == "function")) {
                f = x.call(g, f, h);
                break e;
              }
              f = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = y.payload),
                (h = typeof x == "function" ? x.call(g, f, h) : x),
                h == null)
              )
                break e;
              f = le({}, f, h);
              break e;
            case 2:
              hn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [a]) : h.push(a));
      } else
        (g = {
          eventTime: g,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          u === null ? ((c = u = g), (l = f)) : (u = u.next = g),
          (o |= h);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (u === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = u),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (cr |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function sh(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(j(191, i));
        i.call(r);
      }
    }
}
var Ls = {},
  Lt = Vn(Ls),
  ps = Vn(Ls),
  ms = Vn(Ls);
function qn(e) {
  if (e === Ls) throw Error(j(174));
  return e;
}
function Ku(e, t) {
  switch ((J(ms, t), J(ps, e), J(Lt, Ls), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : oc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = oc(t, e));
  }
  te(Lt), J(Lt, t);
}
function ri() {
  te(Lt), te(ps), te(ms);
}
function Xg(e) {
  qn(ms.current);
  var t = qn(Lt.current),
    n = oc(t, e.type);
  t !== n && (J(ps, e), J(Lt, n));
}
function Gu(e) {
  ps.current === e && (te(Lt), te(ps));
}
var se = Vn(0);
function Xo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var bl = [];
function Qu() {
  for (var e = 0; e < bl.length; e++)
    bl[e]._workInProgressVersionPrimary = null;
  bl.length = 0;
}
var So = on.ReactCurrentDispatcher,
  Sl = on.ReactCurrentBatchConfig,
  lr = 0,
  ae = null,
  me = null,
  ve = null,
  Jo = !1,
  Qi = !1,
  gs = 0,
  t2 = 0;
function Ee() {
  throw Error(j(321));
}
function Yu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!kt(e[n], t[n])) return !1;
  return !0;
}
function qu(e, t, n, r, i, s) {
  if (
    ((lr = s),
    (ae = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (So.current = e === null || e.memoizedState === null ? s2 : o2),
    (e = n(r, i)),
    Qi)
  ) {
    s = 0;
    do {
      if (((Qi = !1), (gs = 0), 25 <= s)) throw Error(j(301));
      (s += 1),
        (ve = me = null),
        (t.updateQueue = null),
        (So.current = a2),
        (e = n(r, i));
    } while (Qi);
  }
  if (
    ((So.current = Zo),
    (t = me !== null && me.next !== null),
    (lr = 0),
    (ve = me = ae = null),
    (Jo = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function Xu() {
  var e = gs !== 0;
  return (gs = 0), e;
}
function jt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ve === null ? (ae.memoizedState = ve = e) : (ve = ve.next = e), ve;
}
function ht() {
  if (me === null) {
    var e = ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = me.next;
  var t = ve === null ? ae.memoizedState : ve.next;
  if (t !== null) (ve = t), (me = e);
  else {
    if (e === null) throw Error(j(310));
    (me = e),
      (e = {
        memoizedState: me.memoizedState,
        baseState: me.baseState,
        baseQueue: me.baseQueue,
        queue: me.queue,
        next: null,
      }),
      ve === null ? (ae.memoizedState = ve = e) : (ve = ve.next = e);
  }
  return ve;
}
function ys(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Cl(e) {
  var t = ht(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = me,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      c = s;
    do {
      var u = c.lane;
      if ((lr & u) === u)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var f = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (o = r)) : (l = l.next = f),
          (ae.lanes |= u),
          (cr |= u);
      }
      c = c.next;
    } while (c !== null && c !== s);
    l === null ? (o = r) : (l.next = a),
      kt(r, t.memoizedState) || (ze = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (ae.lanes |= s), (cr |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function kl(e) {
  var t = ht(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    kt(s, t.memoizedState) || (ze = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Jg() {}
function Zg(e, t) {
  var n = ae,
    r = ht(),
    i = t(),
    s = !kt(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (ze = !0)),
    (r = r.queue),
    Ju(ny.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ve !== null && ve.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      vs(9, ty.bind(null, n, r, i, t), void 0, null),
      xe === null)
    )
      throw Error(j(349));
    lr & 30 || ey(n, t, i);
  }
  return i;
}
function ey(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ty(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ry(t) && iy(e);
}
function ny(e, t, n) {
  return n(function () {
    ry(t) && iy(e);
  });
}
function ry(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !kt(e, n);
  } catch {
    return !0;
  }
}
function iy(e) {
  var t = en(e, 1);
  t !== null && Ct(t, e, 1, -1);
}
function oh(e) {
  var t = jt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ys,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = i2.bind(null, ae, e)),
    [t.memoizedState, e]
  );
}
function vs(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function sy() {
  return ht().memoizedState;
}
function Co(e, t, n, r) {
  var i = jt();
  (ae.flags |= e),
    (i.memoizedState = vs(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ta(e, t, n, r) {
  var i = ht();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (me !== null) {
    var o = me.memoizedState;
    if (((s = o.destroy), r !== null && Yu(r, o.deps))) {
      i.memoizedState = vs(t, n, s, r);
      return;
    }
  }
  (ae.flags |= e), (i.memoizedState = vs(1 | t, n, s, r));
}
function ah(e, t) {
  return Co(8390656, 8, e, t);
}
function Ju(e, t) {
  return Ta(2048, 8, e, t);
}
function oy(e, t) {
  return Ta(4, 2, e, t);
}
function ay(e, t) {
  return Ta(4, 4, e, t);
}
function ly(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function cy(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ta(4, 4, ly.bind(null, t, e), n)
  );
}
function Zu() {}
function uy(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function dy(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function fy(e, t, n) {
  return lr & 21
    ? (kt(n, t) || ((n = yg()), (ae.lanes |= n), (cr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ze = !0)), (e.memoizedState = n));
}
function n2(e, t) {
  var n = q;
  (q = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Sl.transition;
  Sl.transition = {};
  try {
    e(!1), t();
  } finally {
    (q = n), (Sl.transition = r);
  }
}
function hy() {
  return ht().memoizedState;
}
function r2(e, t, n) {
  var r = jn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    py(e))
  )
    my(t, n);
  else if (((n = Yg(e, t, n, r)), n !== null)) {
    var i = Fe();
    Ct(n, e, r, i), gy(n, t, r);
  }
}
function i2(e, t, n) {
  var r = jn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (py(e)) my(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), kt(a, o))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), $u(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Yg(e, t, i, r)),
      n !== null && ((i = Fe()), Ct(n, e, r, i), gy(n, t, r));
  }
}
function py(e) {
  var t = e.alternate;
  return e === ae || (t !== null && t === ae);
}
function my(e, t) {
  Qi = Jo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function gy(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Nu(e, n);
  }
}
var Zo = {
    readContext: ft,
    useCallback: Ee,
    useContext: Ee,
    useEffect: Ee,
    useImperativeHandle: Ee,
    useInsertionEffect: Ee,
    useLayoutEffect: Ee,
    useMemo: Ee,
    useReducer: Ee,
    useRef: Ee,
    useState: Ee,
    useDebugValue: Ee,
    useDeferredValue: Ee,
    useTransition: Ee,
    useMutableSource: Ee,
    useSyncExternalStore: Ee,
    useId: Ee,
    unstable_isNewReconciler: !1,
  },
  s2 = {
    readContext: ft,
    useCallback: function (e, t) {
      return (jt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ft,
    useEffect: ah,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Co(4194308, 4, ly.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Co(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Co(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = jt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = jt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = r2.bind(null, ae, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = jt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: oh,
    useDebugValue: Zu,
    useDeferredValue: function (e) {
      return (jt().memoizedState = e);
    },
    useTransition: function () {
      var e = oh(!1),
        t = e[0];
      return (e = n2.bind(null, e[1])), (jt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ae,
        i = jt();
      if (ie) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), xe === null)) throw Error(j(349));
        lr & 30 || ey(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        ah(ny.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        vs(9, ty.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = jt(),
        t = xe.identifierPrefix;
      if (ie) {
        var n = Qt,
          r = Gt;
        (n = (r & ~(1 << (32 - St(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = gs++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = t2++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  o2 = {
    readContext: ft,
    useCallback: uy,
    useContext: ft,
    useEffect: Ju,
    useImperativeHandle: cy,
    useInsertionEffect: oy,
    useLayoutEffect: ay,
    useMemo: dy,
    useReducer: Cl,
    useRef: sy,
    useState: function () {
      return Cl(ys);
    },
    useDebugValue: Zu,
    useDeferredValue: function (e) {
      var t = ht();
      return fy(t, me.memoizedState, e);
    },
    useTransition: function () {
      var e = Cl(ys)[0],
        t = ht().memoizedState;
      return [e, t];
    },
    useMutableSource: Jg,
    useSyncExternalStore: Zg,
    useId: hy,
    unstable_isNewReconciler: !1,
  },
  a2 = {
    readContext: ft,
    useCallback: uy,
    useContext: ft,
    useEffect: Ju,
    useImperativeHandle: cy,
    useInsertionEffect: oy,
    useLayoutEffect: ay,
    useMemo: dy,
    useReducer: kl,
    useRef: sy,
    useState: function () {
      return kl(ys);
    },
    useDebugValue: Zu,
    useDeferredValue: function (e) {
      var t = ht();
      return me === null ? (t.memoizedState = e) : fy(t, me.memoizedState, e);
    },
    useTransition: function () {
      var e = kl(ys)[0],
        t = ht().memoizedState;
      return [e, t];
    },
    useMutableSource: Jg,
    useSyncExternalStore: Zg,
    useId: hy,
    unstable_isNewReconciler: !1,
  };
function yt(e, t) {
  if (e && e.defaultProps) {
    (t = le({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Pc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : le({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ja = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? pr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Fe(),
      i = jn(e),
      s = Yt(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Pn(e, s, i)),
      t !== null && (Ct(t, e, i, r), bo(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Fe(),
      i = jn(e),
      s = Yt(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Pn(e, s, i)),
      t !== null && (Ct(t, e, i, r), bo(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Fe(),
      r = jn(e),
      i = Yt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Pn(e, i, r)),
      t !== null && (Ct(t, e, r, n), bo(t, e, r));
  },
};
function lh(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !us(n, r) || !us(i, s)
        : !0
  );
}
function yy(e, t, n) {
  var r = !1,
    i = Dn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = ft(s))
      : ((i = Ue(t) ? or : Ie.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? ei(e, i) : Dn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ja),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function ch(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ja.enqueueReplaceState(t, t.state, null);
}
function Tc(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Wu(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = ft(s))
    : ((s = Ue(t) ? or : Ie.current), (i.context = ei(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Pc(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ja.enqueueReplaceState(i, i.state, null),
      qo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ii(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Lw(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function El(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function jc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var l2 = typeof WeakMap == "function" ? WeakMap : Map;
function vy(e, t, n) {
  (n = Yt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ta || ((ta = !0), (Vc = r)), jc(e, t);
    }),
    n
  );
}
function xy(e, t, n) {
  (n = Yt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        jc(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        jc(e, t),
          typeof r != "function" &&
            (Tn === null ? (Tn = new Set([this])) : Tn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function uh(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new l2();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = S2.bind(null, e, t, n)), t.then(e, e));
}
function dh(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function fh(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Yt(-1, 1)), (t.tag = 2), Pn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var c2 = on.ReactCurrentOwner,
  ze = !1;
function Me(e, t, n, r) {
  t.child = e === null ? Qg(t, null, n, r) : ni(t, e.child, n, r);
}
function hh(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    zr(t, i),
    (r = qu(e, t, n, r, s, i)),
    (n = Xu()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        tn(e, t, i))
      : (ie && n && Ou(t), (t.flags |= 1), Me(e, t, r, i), t.child)
  );
}
function ph(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !ad(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), wy(e, t, s, r, i))
      : ((e = Po(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : us), n(o, r) && e.ref === t.ref)
    )
      return tn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Nn(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function wy(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (us(s, r) && e.ref === t.ref)
      if (((ze = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (ze = !0);
      else return (t.lanes = e.lanes), tn(e, t, i);
  }
  return Nc(e, t, n, r, i);
}
function by(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        J(Nr, Ke),
        (Ke |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          J(Nr, Ke),
          (Ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        J(Nr, Ke),
        (Ke |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      J(Nr, Ke),
      (Ke |= r);
  return Me(e, t, i, n), t.child;
}
function Sy(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Nc(e, t, n, r, i) {
  var s = Ue(n) ? or : Ie.current;
  return (
    (s = ei(t, s)),
    zr(t, i),
    (n = qu(e, t, n, r, s, i)),
    (r = Xu()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        tn(e, t, i))
      : (ie && r && Ou(t), (t.flags |= 1), Me(e, t, n, i), t.child)
  );
}
function mh(e, t, n, r, i) {
  if (Ue(n)) {
    var s = !0;
    Wo(t);
  } else s = !1;
  if ((zr(t, i), t.stateNode === null))
    ko(e, t), yy(t, n, r), Tc(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = ft(c))
      : ((c = Ue(n) ? or : Ie.current), (c = ei(t, c)));
    var u = n.getDerivedStateFromProps,
      f =
        typeof u == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== c) && ch(t, o, r, c)),
      (hn = !1);
    var h = t.memoizedState;
    (o.state = h),
      qo(t, r, o, i),
      (l = t.memoizedState),
      a !== r || h !== l || Be.current || hn
        ? (typeof u == "function" && (Pc(t, n, u, r), (l = t.memoizedState)),
          (a = hn || lh(t, n, a, r, h, l, c))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = c),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      qg(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : yt(t.type, a)),
      (o.props = c),
      (f = t.pendingProps),
      (h = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = ft(l))
        : ((l = Ue(n) ? or : Ie.current), (l = ei(t, l)));
    var g = n.getDerivedStateFromProps;
    (u =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== f || h !== l) && ch(t, o, r, l)),
      (hn = !1),
      (h = t.memoizedState),
      (o.state = h),
      qo(t, r, o, i);
    var x = t.memoizedState;
    a !== f || h !== x || Be.current || hn
      ? (typeof g == "function" && (Pc(t, n, g, r), (x = t.memoizedState)),
        (c = hn || lh(t, n, c, r, h, x, l) || !1)
          ? (u ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, x, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, x, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (o.props = r),
        (o.state = x),
        (o.context = l),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ic(e, t, n, r, s, i);
}
function Ic(e, t, n, r, i, s) {
  Sy(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && eh(t, n, !1), tn(e, t, s);
  (r = t.stateNode), (c2.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = ni(t, e.child, null, s)), (t.child = ni(t, null, a, s)))
      : Me(e, t, a, s),
    (t.memoizedState = r.state),
    i && eh(t, n, !0),
    t.child
  );
}
function Cy(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Zf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Zf(e, t.context, !1),
    Ku(e, t.containerInfo);
}
function gh(e, t, n, r, i) {
  return ti(), zu(i), (t.flags |= 256), Me(e, t, n, r), t.child;
}
var Dc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Mc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ky(e, t, n) {
  var r = t.pendingProps,
    i = se.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    J(se, i & 1),
    e === null)
  )
    return (
      Ec(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Da(o, r, 0, null)),
              (e = rr(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Mc(n)),
              (t.memoizedState = Dc),
              e)
            : ed(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return u2(e, t, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Nn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = Nn(a, s)) : ((s = rr(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Mc(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Dc),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Nn(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ed(e, t) {
  return (
    (t = Da({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ro(e, t, n, r) {
  return (
    r !== null && zu(r),
    ni(t, e.child, null, n),
    (e = ed(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function u2(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = El(Error(j(422)))), ro(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (i = t.mode),
          (r = Da({ mode: "visible", children: r.children }, i, 0, null)),
          (s = rr(s, i, o, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && ni(t, e.child, null, o),
          (t.child.memoizedState = Mc(o)),
          (t.memoizedState = Dc),
          s);
  if (!(t.mode & 1)) return ro(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(j(419))), (r = El(s, r, void 0)), ro(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), ze || a)) {
    if (((r = xe), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), en(e, i), Ct(r, e, i, -1));
    }
    return od(), (r = El(Error(j(421)))), ro(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = C2.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Ye = An(i.nextSibling)),
      (qe = t),
      (ie = !0),
      (bt = null),
      e !== null &&
        ((lt[ct++] = Gt),
        (lt[ct++] = Qt),
        (lt[ct++] = ar),
        (Gt = e.id),
        (Qt = e.overflow),
        (ar = t)),
      (t = ed(t, r.children)),
      (t.flags |= 4096),
      t);
}
function yh(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ac(e.return, t, n);
}
function Al(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Ey(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Me(e, t, r.children, n), (r = se.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && yh(e, n, t);
        else if (e.tag === 19) yh(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((J(se, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Xo(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Al(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Xo(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Al(t, !0, n, null, s);
        break;
      case "together":
        Al(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ko(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function tn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (cr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Nn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Nn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function d2(e, t, n) {
  switch (t.tag) {
    case 3:
      Cy(t), ti();
      break;
    case 5:
      Xg(t);
      break;
    case 1:
      Ue(t.type) && Wo(t);
      break;
    case 4:
      Ku(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      J(Qo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (J(se, se.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? ky(e, t, n)
            : (J(se, se.current & 1),
              (e = tn(e, t, n)),
              e !== null ? e.sibling : null);
      J(se, se.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ey(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        J(se, se.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), by(e, t, n);
  }
  return tn(e, t, n);
}
var Ay, Rc, Py, Ty;
Ay = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Rc = function () {};
Py = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), qn(Lt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = nc(e, i)), (r = nc(e, r)), (s = []);
        break;
      case "select":
        (i = le({}, i, { value: void 0 })),
          (r = le({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = sc(e, i)), (r = sc(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ho);
    }
    ac(n, r);
    var o;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var a = i[c];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (rs.hasOwnProperty(c)
              ? s || (s = [])
              : (s = s || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((a = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (s || (s = []), s.push(c, n)), (n = l);
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(c, l))
            : c === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (s = s || []).push(c, "" + l)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (rs.hasOwnProperty(c)
                  ? (l != null && c === "onScroll" && ee("scroll", e),
                    s || a === l || (s = []))
                  : (s = s || []).push(c, l));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ty = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ii(e, t) {
  if (!ie)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ae(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function f2(e, t, n) {
  var r = t.pendingProps;
  switch ((Vu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ae(t), null;
    case 1:
      return Ue(t.type) && $o(), Ae(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ri(),
        te(Be),
        te(Ie),
        Qu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (to(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), bt !== null && (Uc(bt), (bt = null)))),
        Rc(e, t),
        Ae(t),
        null
      );
    case 5:
      Gu(t);
      var i = qn(ms.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Py(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return Ae(t), null;
        }
        if (((e = qn(Lt.current)), to(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Mt] = t), (r[hs] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ee("cancel", r), ee("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ee("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Vi.length; i++) ee(Vi[i], r);
              break;
            case "source":
              ee("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ee("error", r), ee("load", r);
              break;
            case "details":
              ee("toggle", r);
              break;
            case "input":
              Af(r, s), ee("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                ee("invalid", r);
              break;
            case "textarea":
              Tf(r, s), ee("invalid", r);
          }
          ac(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      eo(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      eo(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : rs.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  ee("scroll", r);
            }
          switch (n) {
            case "input":
              Ks(r), Pf(r, s, !0);
              break;
            case "textarea":
              Ks(r), jf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Ho);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ng(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Mt] = t),
            (e[hs] = r),
            Ay(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = lc(n, r)), n)) {
              case "dialog":
                ee("cancel", e), ee("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Vi.length; i++) ee(Vi[i], e);
                i = r;
                break;
              case "source":
                ee("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ee("error", e), ee("load", e), (i = r);
                break;
              case "details":
                ee("toggle", e), (i = r);
                break;
              case "input":
                Af(e, r), (i = nc(e, r)), ee("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = le({}, r, { value: void 0 })),
                  ee("invalid", e);
                break;
              case "textarea":
                Tf(e, r), (i = sc(e, r)), ee("invalid", e);
                break;
              default:
                i = r;
            }
            ac(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? sg(e, l)
                  : s === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && rg(e, l))
                    : s === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && is(e, l)
                        : typeof l == "number" && is(e, "" + l)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (rs.hasOwnProperty(s)
                          ? l != null && s === "onScroll" && ee("scroll", e)
                          : l != null && ku(e, s, l, o));
              }
            switch (n) {
              case "input":
                Ks(e), Pf(e, r, !1);
                break;
              case "textarea":
                Ks(e), jf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + In(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Fr(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Fr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ho);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ae(t), null;
    case 6:
      if (e && t.stateNode != null) Ty(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (((n = qn(ms.current)), qn(Lt.current), to(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Mt] = t),
            (s = r.nodeValue !== n) && ((e = qe), e !== null))
          )
            switch (e.tag) {
              case 3:
                eo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  eo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Mt] = t),
            (t.stateNode = r);
      }
      return Ae(t), null;
    case 13:
      if (
        (te(se),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ie && Ye !== null && t.mode & 1 && !(t.flags & 128))
          Kg(), ti(), (t.flags |= 98560), (s = !1);
        else if (((s = to(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(j(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(j(317));
            s[Mt] = t;
          } else
            ti(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ae(t), (s = !1);
        } else bt !== null && (Uc(bt), (bt = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || se.current & 1 ? ye === 0 && (ye = 3) : od())),
          t.updateQueue !== null && (t.flags |= 4),
          Ae(t),
          null);
    case 4:
      return (
        ri(), Rc(e, t), e === null && ds(t.stateNode.containerInfo), Ae(t), null
      );
    case 10:
      return Hu(t.type._context), Ae(t), null;
    case 17:
      return Ue(t.type) && $o(), Ae(t), null;
    case 19:
      if ((te(se), (s = t.memoizedState), s === null)) return Ae(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Ii(s, !1);
        else {
          if (ye !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Xo(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Ii(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return J(se, (se.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            he() > si &&
            ((t.flags |= 128), (r = !0), Ii(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Xo(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ii(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !ie)
            )
              return Ae(t), null;
          } else
            2 * he() - s.renderingStartTime > si &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ii(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = he()),
          (t.sibling = null),
          (n = se.current),
          J(se, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ae(t), null);
    case 22:
    case 23:
      return (
        sd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ke & 1073741824 && (Ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ae(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function h2(e, t) {
  switch ((Vu(t), t.tag)) {
    case 1:
      return (
        Ue(t.type) && $o(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ri(),
        te(Be),
        te(Ie),
        Qu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Gu(t), null;
    case 13:
      if (
        (te(se), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(j(340));
        ti();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return te(se), null;
    case 4:
      return ri(), null;
    case 10:
      return Hu(t.type._context), null;
    case 22:
    case 23:
      return sd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var io = !1,
  je = !1,
  p2 = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function jr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        de(e, t, r);
      }
    else n.current = null;
}
function Lc(e, t, n) {
  try {
    n();
  } catch (r) {
    de(e, t, r);
  }
}
var vh = !1;
function m2(e, t) {
  if (((vc = zo), (e = Mg()), _u(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            c = 0,
            u = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = o + i),
                f !== s || (r !== 0 && f.nodeType !== 3) || (l = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (h = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++c === i && (a = o),
                h === s && ++u === r && (l = o),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = h), (h = f.parentNode);
            }
            f = g;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (xc = { focusedElem: e, selectionRange: n }, zo = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var y = x.memoizedProps,
                    b = x.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : yt(t.type, y),
                      b,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (S) {
          de(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (x = vh), (vh = !1), x;
}
function Yi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Lc(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Na(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Fc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function jy(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), jy(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Mt], delete t[hs], delete t[Sc], delete t[X1], delete t[J1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ny(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function xh(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ny(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function _c(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ho));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_c(e, t, n), e = e.sibling; e !== null; ) _c(e, t, n), (e = e.sibling);
}
function Oc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Oc(e, t, n), e = e.sibling; e !== null; ) Oc(e, t, n), (e = e.sibling);
}
var we = null,
  wt = !1;
function an(e, t, n) {
  for (n = n.child; n !== null; ) Iy(e, t, n), (n = n.sibling);
}
function Iy(e, t, n) {
  if (Rt && typeof Rt.onCommitFiberUnmount == "function")
    try {
      Rt.onCommitFiberUnmount(Sa, n);
    } catch {}
  switch (n.tag) {
    case 5:
      je || jr(n, t);
    case 6:
      var r = we,
        i = wt;
      (we = null),
        an(e, t, n),
        (we = r),
        (wt = i),
        we !== null &&
          (wt
            ? ((e = we),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : we.removeChild(n.stateNode));
      break;
    case 18:
      we !== null &&
        (wt
          ? ((e = we),
            (n = n.stateNode),
            e.nodeType === 8
              ? xl(e.parentNode, n)
              : e.nodeType === 1 && xl(e, n),
            ls(e))
          : xl(we, n.stateNode));
      break;
    case 4:
      (r = we),
        (i = wt),
        (we = n.stateNode.containerInfo),
        (wt = !0),
        an(e, t, n),
        (we = r),
        (wt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !je &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Lc(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      an(e, t, n);
      break;
    case 1:
      if (
        !je &&
        (jr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          de(n, t, a);
        }
      an(e, t, n);
      break;
    case 21:
      an(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((je = (r = je) || n.memoizedState !== null), an(e, t, n), (je = r))
        : an(e, t, n);
      break;
    default:
      an(e, t, n);
  }
}
function wh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new p2()),
      t.forEach(function (r) {
        var i = k2.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function mt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (we = a.stateNode), (wt = !1);
              break e;
            case 3:
              (we = a.stateNode.containerInfo), (wt = !0);
              break e;
            case 4:
              (we = a.stateNode.containerInfo), (wt = !0);
              break e;
          }
          a = a.return;
        }
        if (we === null) throw Error(j(160));
        Iy(s, o, i), (we = null), (wt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (c) {
        de(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Dy(t, e), (t = t.sibling);
}
function Dy(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((mt(t, e), Tt(e), r & 4)) {
        try {
          Yi(3, e, e.return), Na(3, e);
        } catch (y) {
          de(e, e.return, y);
        }
        try {
          Yi(5, e, e.return);
        } catch (y) {
          de(e, e.return, y);
        }
      }
      break;
    case 1:
      mt(t, e), Tt(e), r & 512 && n !== null && jr(n, n.return);
      break;
    case 5:
      if (
        (mt(t, e),
        Tt(e),
        r & 512 && n !== null && jr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          is(i, "");
        } catch (y) {
          de(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && eg(i, s),
              lc(a, o);
            var c = lc(a, s);
            for (o = 0; o < l.length; o += 2) {
              var u = l[o],
                f = l[o + 1];
              u === "style"
                ? sg(i, f)
                : u === "dangerouslySetInnerHTML"
                  ? rg(i, f)
                  : u === "children"
                    ? is(i, f)
                    : ku(i, u, f, c);
            }
            switch (a) {
              case "input":
                rc(i, s);
                break;
              case "textarea":
                tg(i, s);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var g = s.value;
                g != null
                  ? Fr(i, !!s.multiple, g, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Fr(i, !!s.multiple, s.defaultValue, !0)
                      : Fr(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[hs] = s;
          } catch (y) {
            de(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((mt(t, e), Tt(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (y) {
          de(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (mt(t, e), Tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ls(t.containerInfo);
        } catch (y) {
          de(e, e.return, y);
        }
      break;
    case 4:
      mt(t, e), Tt(e);
      break;
    case 13:
      mt(t, e),
        Tt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (rd = he())),
        r & 4 && wh(e);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((je = (c = je) || u), mt(t, e), (je = c)) : mt(t, e),
        Tt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !u && e.mode & 1)
        )
          for (R = e, u = e.child; u !== null; ) {
            for (f = R = u; R !== null; ) {
              switch (((h = R), (g = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Yi(4, h, h.return);
                  break;
                case 1:
                  jr(h, h.return);
                  var x = h.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (y) {
                      de(r, n, y);
                    }
                  }
                  break;
                case 5:
                  jr(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Sh(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = h), (R = g)) : Sh(f);
            }
            u = u.sibling;
          }
        e: for (u = null, f = e; ; ) {
          if (f.tag === 5) {
            if (u === null) {
              u = f;
              try {
                (i = f.stateNode),
                  c
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = ig("display", o)));
              } catch (y) {
                de(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (u === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (y) {
                de(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            u === f && (u = null), (f = f.return);
          }
          u === f && (u = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      mt(t, e), Tt(e), r & 4 && wh(e);
      break;
    case 21:
      break;
    default:
      mt(t, e), Tt(e);
  }
}
function Tt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ny(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (is(i, ""), (r.flags &= -33));
          var s = xh(e);
          Oc(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = xh(e);
          _c(e, a, o);
          break;
        default:
          throw Error(j(161));
      }
    } catch (l) {
      de(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function g2(e, t, n) {
  (R = e), My(e);
}
function My(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var i = R,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || io;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || je;
        a = io;
        var c = je;
        if (((io = o), (je = l) && !c))
          for (R = i; R !== null; )
            (o = R),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Ch(i)
                : l !== null
                  ? ((l.return = o), (R = l))
                  : Ch(i);
        for (; s !== null; ) (R = s), My(s), (s = s.sibling);
        (R = i), (io = a), (je = c);
      }
      bh(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (R = s)) : bh(e);
  }
}
function bh(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              je || Na(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !je)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : yt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = t.updateQueue;
              s !== null && sh(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                sh(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var u = c.memoizedState;
                  if (u !== null) {
                    var f = u.dehydrated;
                    f !== null && ls(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(j(163));
          }
        je || (t.flags & 512 && Fc(t));
      } catch (h) {
        de(t, t.return, h);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function Sh(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function Ch(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Na(4, t);
          } catch (l) {
            de(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              de(t, i, l);
            }
          }
          var s = t.return;
          try {
            Fc(t);
          } catch (l) {
            de(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Fc(t);
          } catch (l) {
            de(t, o, l);
          }
      }
    } catch (l) {
      de(t, t.return, l);
    }
    if (t === e) {
      R = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (R = a);
      break;
    }
    R = t.return;
  }
}
var y2 = Math.ceil,
  ea = on.ReactCurrentDispatcher,
  td = on.ReactCurrentOwner,
  dt = on.ReactCurrentBatchConfig,
  G = 0,
  xe = null,
  pe = null,
  Se = 0,
  Ke = 0,
  Nr = Vn(0),
  ye = 0,
  xs = null,
  cr = 0,
  Ia = 0,
  nd = 0,
  qi = null,
  Ve = null,
  rd = 0,
  si = 1 / 0,
  Wt = null,
  ta = !1,
  Vc = null,
  Tn = null,
  so = !1,
  Sn = null,
  na = 0,
  Xi = 0,
  zc = null,
  Eo = -1,
  Ao = 0;
function Fe() {
  return G & 6 ? he() : Eo !== -1 ? Eo : (Eo = he());
}
function jn(e) {
  return e.mode & 1
    ? G & 2 && Se !== 0
      ? Se & -Se
      : e2.transition !== null
        ? (Ao === 0 && (Ao = yg()), Ao)
        : ((e = q),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : kg(e.type))),
          e)
    : 1;
}
function Ct(e, t, n, r) {
  if (50 < Xi) throw ((Xi = 0), (zc = null), Error(j(185)));
  Ds(e, n, r),
    (!(G & 2) || e !== xe) &&
      (e === xe && (!(G & 2) && (Ia |= n), ye === 4 && mn(e, Se)),
      He(e, r),
      n === 1 && G === 0 && !(t.mode & 1) && ((si = he() + 500), Pa && zn()));
}
function He(e, t) {
  var n = e.callbackNode;
  e1(e, t);
  var r = Vo(e, e === xe ? Se : 0);
  if (r === 0)
    n !== null && Df(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Df(n), t === 1))
      e.tag === 0 ? Z1(kh.bind(null, e)) : Hg(kh.bind(null, e)),
        Y1(function () {
          !(G & 6) && zn();
        }),
        (n = null);
    else {
      switch (vg(r)) {
        case 1:
          n = ju;
          break;
        case 4:
          n = mg;
          break;
        case 16:
          n = Oo;
          break;
        case 536870912:
          n = gg;
          break;
        default:
          n = Oo;
      }
      n = By(n, Ry.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ry(e, t) {
  if (((Eo = -1), (Ao = 0), G & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if (Br() && e.callbackNode !== n) return null;
  var r = Vo(e, e === xe ? Se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ra(e, r);
  else {
    t = r;
    var i = G;
    G |= 2;
    var s = Fy();
    (xe !== e || Se !== t) && ((Wt = null), (si = he() + 500), nr(e, t));
    do
      try {
        w2();
        break;
      } catch (a) {
        Ly(e, a);
      }
    while (!0);
    Uu(),
      (ea.current = s),
      (G = i),
      pe !== null ? (t = 0) : ((xe = null), (Se = 0), (t = ye));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = hc(e)), i !== 0 && ((r = i), (t = Bc(e, i)))), t === 1)
    )
      throw ((n = xs), nr(e, 0), mn(e, r), He(e, he()), n);
    if (t === 6) mn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !v2(i) &&
          ((t = ra(e, r)),
          t === 2 && ((s = hc(e)), s !== 0 && ((r = s), (t = Bc(e, s)))),
          t === 1))
      )
        throw ((n = xs), nr(e, 0), mn(e, r), He(e, he()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Wn(e, Ve, Wt);
          break;
        case 3:
          if (
            (mn(e, r), (r & 130023424) === r && ((t = rd + 500 - he()), 10 < t))
          ) {
            if (Vo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Fe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = bc(Wn.bind(null, e, Ve, Wt), t);
            break;
          }
          Wn(e, Ve, Wt);
          break;
        case 4:
          if ((mn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - St(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = he() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * y2(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = bc(Wn.bind(null, e, Ve, Wt), r);
            break;
          }
          Wn(e, Ve, Wt);
          break;
        case 5:
          Wn(e, Ve, Wt);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return He(e, he()), e.callbackNode === n ? Ry.bind(null, e) : null;
}
function Bc(e, t) {
  var n = qi;
  return (
    e.current.memoizedState.isDehydrated && (nr(e, t).flags |= 256),
    (e = ra(e, t)),
    e !== 2 && ((t = Ve), (Ve = n), t !== null && Uc(t)),
    e
  );
}
function Uc(e) {
  Ve === null ? (Ve = e) : Ve.push.apply(Ve, e);
}
function v2(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!kt(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function mn(e, t) {
  for (
    t &= ~nd,
      t &= ~Ia,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - St(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function kh(e) {
  if (G & 6) throw Error(j(327));
  Br();
  var t = Vo(e, 0);
  if (!(t & 1)) return He(e, he()), null;
  var n = ra(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = hc(e);
    r !== 0 && ((t = r), (n = Bc(e, r)));
  }
  if (n === 1) throw ((n = xs), nr(e, 0), mn(e, t), He(e, he()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Wn(e, Ve, Wt),
    He(e, he()),
    null
  );
}
function id(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    (G = n), G === 0 && ((si = he() + 500), Pa && zn());
  }
}
function ur(e) {
  Sn !== null && Sn.tag === 0 && !(G & 6) && Br();
  var t = G;
  G |= 1;
  var n = dt.transition,
    r = q;
  try {
    if (((dt.transition = null), (q = 1), e)) return e();
  } finally {
    (q = r), (dt.transition = n), (G = t), !(G & 6) && zn();
  }
}
function sd() {
  (Ke = Nr.current), te(Nr);
}
function nr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Q1(n)), pe !== null))
    for (n = pe.return; n !== null; ) {
      var r = n;
      switch ((Vu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && $o();
          break;
        case 3:
          ri(), te(Be), te(Ie), Qu();
          break;
        case 5:
          Gu(r);
          break;
        case 4:
          ri();
          break;
        case 13:
          te(se);
          break;
        case 19:
          te(se);
          break;
        case 10:
          Hu(r.type._context);
          break;
        case 22:
        case 23:
          sd();
      }
      n = n.return;
    }
  if (
    ((xe = e),
    (pe = e = Nn(e.current, null)),
    (Se = Ke = t),
    (ye = 0),
    (xs = null),
    (nd = Ia = cr = 0),
    (Ve = qi = null),
    Yn !== null)
  ) {
    for (t = 0; t < Yn.length; t++)
      if (((n = Yn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    Yn = null;
  }
  return e;
}
function Ly(e, t) {
  do {
    var n = pe;
    try {
      if ((Uu(), (So.current = Zo), Jo)) {
        for (var r = ae.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Jo = !1;
      }
      if (
        ((lr = 0),
        (ve = me = ae = null),
        (Qi = !1),
        (gs = 0),
        (td.current = null),
        n === null || n.return === null)
      ) {
        (ye = 1), (xs = t), (pe = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = Se),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            u = a,
            f = u.tag;
          if (!(u.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = u.alternate;
            h
              ? ((u.updateQueue = h.updateQueue),
                (u.memoizedState = h.memoizedState),
                (u.lanes = h.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var g = dh(o);
          if (g !== null) {
            (g.flags &= -257),
              fh(g, o, a, s, t),
              g.mode & 1 && uh(s, c, t),
              (t = g),
              (l = c);
            var x = t.updateQueue;
            if (x === null) {
              var y = new Set();
              y.add(l), (t.updateQueue = y);
            } else x.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              uh(s, c, t), od();
              break e;
            }
            l = Error(j(426));
          }
        } else if (ie && a.mode & 1) {
          var b = dh(o);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              fh(b, o, a, s, t),
              zu(ii(l, a));
            break e;
          }
        }
        (s = l = ii(l, a)),
          ye !== 4 && (ye = 2),
          qi === null ? (qi = [s]) : qi.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var m = vy(s, l, t);
              ih(s, m);
              break e;
            case 1:
              a = l;
              var p = s.type,
                v = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Tn === null || !Tn.has(v))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var S = xy(s, a, t);
                ih(s, S);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Oy(n);
    } catch (C) {
      (t = C), pe === n && n !== null && (pe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Fy() {
  var e = ea.current;
  return (ea.current = Zo), e === null ? Zo : e;
}
function od() {
  (ye === 0 || ye === 3 || ye === 2) && (ye = 4),
    xe === null || (!(cr & 268435455) && !(Ia & 268435455)) || mn(xe, Se);
}
function ra(e, t) {
  var n = G;
  G |= 2;
  var r = Fy();
  (xe !== e || Se !== t) && ((Wt = null), nr(e, t));
  do
    try {
      x2();
      break;
    } catch (i) {
      Ly(e, i);
    }
  while (!0);
  if ((Uu(), (G = n), (ea.current = r), pe !== null)) throw Error(j(261));
  return (xe = null), (Se = 0), ye;
}
function x2() {
  for (; pe !== null; ) _y(pe);
}
function w2() {
  for (; pe !== null && !Ww(); ) _y(pe);
}
function _y(e) {
  var t = zy(e.alternate, e, Ke);
  (e.memoizedProps = e.pendingProps),
    t === null ? Oy(e) : (pe = t),
    (td.current = null);
}
function Oy(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = h2(n, t)), n !== null)) {
        (n.flags &= 32767), (pe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ye = 6), (pe = null);
        return;
      }
    } else if (((n = f2(n, t, Ke)), n !== null)) {
      pe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      pe = t;
      return;
    }
    pe = t = e;
  } while (t !== null);
  ye === 0 && (ye = 5);
}
function Wn(e, t, n) {
  var r = q,
    i = dt.transition;
  try {
    (dt.transition = null), (q = 1), b2(e, t, n, r);
  } finally {
    (dt.transition = i), (q = r);
  }
  return null;
}
function b2(e, t, n, r) {
  do Br();
  while (Sn !== null);
  if (G & 6) throw Error(j(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (t1(e, s),
    e === xe && ((pe = xe = null), (Se = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      so ||
      ((so = !0),
      By(Oo, function () {
        return Br(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = dt.transition), (dt.transition = null);
    var o = q;
    q = 1;
    var a = G;
    (G |= 4),
      (td.current = null),
      m2(e, n),
      Dy(n, e),
      B1(xc),
      (zo = !!vc),
      (xc = vc = null),
      (e.current = n),
      g2(n),
      Kw(),
      (G = a),
      (q = o),
      (dt.transition = s);
  } else e.current = n;
  if (
    (so && ((so = !1), (Sn = e), (na = i)),
    (s = e.pendingLanes),
    s === 0 && (Tn = null),
    Yw(n.stateNode),
    He(e, he()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ta) throw ((ta = !1), (e = Vc), (Vc = null), e);
  return (
    na & 1 && e.tag !== 0 && Br(),
    (s = e.pendingLanes),
    s & 1 ? (e === zc ? Xi++ : ((Xi = 0), (zc = e))) : (Xi = 0),
    zn(),
    null
  );
}
function Br() {
  if (Sn !== null) {
    var e = vg(na),
      t = dt.transition,
      n = q;
    try {
      if (((dt.transition = null), (q = 16 > e ? 16 : e), Sn === null))
        var r = !1;
      else {
        if (((e = Sn), (Sn = null), (na = 0), G & 6)) throw Error(j(331));
        var i = G;
        for (G |= 4, R = e.current; R !== null; ) {
          var s = R,
            o = s.child;
          if (R.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (R = c; R !== null; ) {
                  var u = R;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yi(8, u, s);
                  }
                  var f = u.child;
                  if (f !== null) (f.return = u), (R = f);
                  else
                    for (; R !== null; ) {
                      u = R;
                      var h = u.sibling,
                        g = u.return;
                      if ((jy(u), u === c)) {
                        R = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = g), (R = h);
                        break;
                      }
                      R = g;
                    }
                }
              }
              var x = s.alternate;
              if (x !== null) {
                var y = x.child;
                if (y !== null) {
                  x.child = null;
                  do {
                    var b = y.sibling;
                    (y.sibling = null), (y = b);
                  } while (y !== null);
                }
              }
              R = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (R = o);
          else
            e: for (; R !== null; ) {
              if (((s = R), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Yi(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                (m.return = s.return), (R = m);
                break e;
              }
              R = s.return;
            }
        }
        var p = e.current;
        for (R = p; R !== null; ) {
          o = R;
          var v = o.child;
          if (o.subtreeFlags & 2064 && v !== null) (v.return = o), (R = v);
          else
            e: for (o = p; R !== null; ) {
              if (((a = R), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Na(9, a);
                  }
                } catch (C) {
                  de(a, a.return, C);
                }
              if (a === o) {
                R = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (R = S);
                break e;
              }
              R = a.return;
            }
        }
        if (
          ((G = i), zn(), Rt && typeof Rt.onPostCommitFiberRoot == "function")
        )
          try {
            Rt.onPostCommitFiberRoot(Sa, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (q = n), (dt.transition = t);
    }
  }
  return !1;
}
function Eh(e, t, n) {
  (t = ii(n, t)),
    (t = vy(e, t, 1)),
    (e = Pn(e, t, 1)),
    (t = Fe()),
    e !== null && (Ds(e, 1, t), He(e, t));
}
function de(e, t, n) {
  if (e.tag === 3) Eh(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Eh(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Tn === null || !Tn.has(r)))
        ) {
          (e = ii(n, e)),
            (e = xy(t, e, 1)),
            (t = Pn(t, e, 1)),
            (e = Fe()),
            t !== null && (Ds(t, 1, e), He(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function S2(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Fe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    xe === e &&
      (Se & n) === n &&
      (ye === 4 || (ye === 3 && (Se & 130023424) === Se && 500 > he() - rd)
        ? nr(e, 0)
        : (nd |= n)),
    He(e, t);
}
function Vy(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ys), (Ys <<= 1), !(Ys & 130023424) && (Ys = 4194304))
      : (t = 1));
  var n = Fe();
  (e = en(e, t)), e !== null && (Ds(e, t, n), He(e, n));
}
function C2(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Vy(e, n);
}
function k2(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  r !== null && r.delete(t), Vy(e, n);
}
var zy;
zy = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Be.current) ze = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ze = !1), d2(e, t, n);
      ze = !!(e.flags & 131072);
    }
  else (ze = !1), ie && t.flags & 1048576 && $g(t, Go, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ko(e, t), (e = t.pendingProps);
      var i = ei(t, Ie.current);
      zr(t, n), (i = qu(null, t, r, e, i, n));
      var s = Xu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ue(r) ? ((s = !0), Wo(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Wu(t),
            (i.updater = ja),
            (t.stateNode = i),
            (i._reactInternals = t),
            Tc(t, r, e, n),
            (t = Ic(null, t, r, !0, s, n)))
          : ((t.tag = 0), ie && s && Ou(t), Me(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ko(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = A2(r)),
          (e = yt(r, e)),
          i)
        ) {
          case 0:
            t = Nc(null, t, r, e, n);
            break e;
          case 1:
            t = mh(null, t, r, e, n);
            break e;
          case 11:
            t = hh(null, t, r, e, n);
            break e;
          case 14:
            t = ph(null, t, r, yt(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : yt(r, i)),
        Nc(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : yt(r, i)),
        mh(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Cy(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          qg(e, t),
          qo(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = ii(Error(j(423)), t)), (t = gh(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = ii(Error(j(424)), t)), (t = gh(e, t, r, n, i));
            break e;
          } else
            for (
              Ye = An(t.stateNode.containerInfo.firstChild),
                qe = t,
                ie = !0,
                bt = null,
                n = Qg(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ti(), r === i)) {
            t = tn(e, t, n);
            break e;
          }
          Me(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Xg(t),
        e === null && Ec(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        wc(r, i) ? (o = null) : s !== null && wc(r, s) && (t.flags |= 32),
        Sy(e, t),
        Me(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Ec(t), null;
    case 13:
      return ky(e, t, n);
    case 4:
      return (
        Ku(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ni(t, null, r, n)) : Me(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : yt(r, i)),
        hh(e, t, r, i, n)
      );
    case 7:
      return Me(e, t, t.pendingProps, n), t.child;
    case 8:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          J(Qo, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (kt(s.value, o)) {
            if (s.children === i.children && !Be.current) {
              t = tn(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = Yt(-1, n & -n)), (l.tag = 2);
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        u === null
                          ? (l.next = l)
                          : ((l.next = u.next), (u.next = l)),
                          (c.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      Ac(s.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(j(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Ac(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Me(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        zr(t, n),
        (i = ft(i)),
        (r = r(i)),
        (t.flags |= 1),
        Me(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = yt(r, t.pendingProps)),
        (i = yt(r.type, i)),
        ph(e, t, r, i, n)
      );
    case 15:
      return wy(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : yt(r, i)),
        ko(e, t),
        (t.tag = 1),
        Ue(r) ? ((e = !0), Wo(t)) : (e = !1),
        zr(t, n),
        yy(t, r, i),
        Tc(t, r, i, n),
        Ic(null, t, r, !0, e, n)
      );
    case 19:
      return Ey(e, t, n);
    case 22:
      return by(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function By(e, t) {
  return pg(e, t);
}
function E2(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ut(e, t, n, r) {
  return new E2(e, t, n, r);
}
function ad(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function A2(e) {
  if (typeof e == "function") return ad(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Au)) return 11;
    if (e === Pu) return 14;
  }
  return 2;
}
function Nn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ut(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Po(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) ad(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case wr:
        return rr(n.children, i, s, t);
      case Eu:
        (o = 8), (i |= 8);
        break;
      case Jl:
        return (
          (e = ut(12, n, t, i | 2)), (e.elementType = Jl), (e.lanes = s), e
        );
      case Zl:
        return (e = ut(13, n, t, i)), (e.elementType = Zl), (e.lanes = s), e;
      case ec:
        return (e = ut(19, n, t, i)), (e.elementType = ec), (e.lanes = s), e;
      case Xm:
        return Da(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ym:
              o = 10;
              break e;
            case qm:
              o = 9;
              break e;
            case Au:
              o = 11;
              break e;
            case Pu:
              o = 14;
              break e;
            case fn:
              (o = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ut(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function rr(e, t, n, r) {
  return (e = ut(7, e, r, t)), (e.lanes = n), e;
}
function Da(e, t, n, r) {
  return (
    (e = ut(22, e, r, t)),
    (e.elementType = Xm),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Pl(e, t, n) {
  return (e = ut(6, e, null, t)), (e.lanes = n), e;
}
function Tl(e, t, n) {
  return (
    (t = ut(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function P2(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ll(0)),
    (this.expirationTimes = ll(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ll(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function ld(e, t, n, r, i, s, o, a, l) {
  return (
    (e = new P2(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = ut(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Wu(s),
    e
  );
}
function T2(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: xr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Uy(e) {
  if (!e) return Dn;
  e = e._reactInternals;
  e: {
    if (pr(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ue(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ue(n)) return Ug(e, n, t);
  }
  return t;
}
function Hy(e, t, n, r, i, s, o, a, l) {
  return (
    (e = ld(n, r, !0, e, i, s, o, a, l)),
    (e.context = Uy(null)),
    (n = e.current),
    (r = Fe()),
    (i = jn(n)),
    (s = Yt(r, i)),
    (s.callback = t ?? null),
    Pn(n, s, i),
    (e.current.lanes = i),
    Ds(e, i, r),
    He(e, r),
    e
  );
}
function Ma(e, t, n, r) {
  var i = t.current,
    s = Fe(),
    o = jn(i);
  return (
    (n = Uy(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Yt(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Pn(i, t, o)),
    e !== null && (Ct(e, i, o, s), bo(e, i, o)),
    o
  );
}
function ia(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ah(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function cd(e, t) {
  Ah(e, t), (e = e.alternate) && Ah(e, t);
}
function j2() {
  return null;
}
var $y =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ud(e) {
  this._internalRoot = e;
}
Ra.prototype.render = ud.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  Ma(e, t, null, null);
};
Ra.prototype.unmount = ud.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ur(function () {
      Ma(null, e, null, null);
    }),
      (t[Zt] = null);
  }
};
function Ra(e) {
  this._internalRoot = e;
}
Ra.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = bg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < pn.length && t !== 0 && t < pn[n].priority; n++);
    pn.splice(n, 0, e), n === 0 && Cg(e);
  }
};
function dd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function La(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ph() {}
function N2(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = ia(o);
        s.call(c);
      };
    }
    var o = Hy(t, r, e, 0, null, !1, !1, "", Ph);
    return (
      (e._reactRootContainer = o),
      (e[Zt] = o.current),
      ds(e.nodeType === 8 ? e.parentNode : e),
      ur(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = ia(l);
      a.call(c);
    };
  }
  var l = ld(e, 0, !1, null, null, !1, !1, "", Ph);
  return (
    (e._reactRootContainer = l),
    (e[Zt] = l.current),
    ds(e.nodeType === 8 ? e.parentNode : e),
    ur(function () {
      Ma(t, l, n, r);
    }),
    l
  );
}
function Fa(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = ia(o);
        a.call(l);
      };
    }
    Ma(t, o, e, i);
  } else o = N2(n, t, e, i, r);
  return ia(o);
}
xg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Oi(t.pendingLanes);
        n !== 0 &&
          (Nu(t, n | 1), He(t, he()), !(G & 6) && ((si = he() + 500), zn()));
      }
      break;
    case 13:
      ur(function () {
        var r = en(e, 1);
        if (r !== null) {
          var i = Fe();
          Ct(r, e, 1, i);
        }
      }),
        cd(e, 1);
  }
};
Iu = function (e) {
  if (e.tag === 13) {
    var t = en(e, 134217728);
    if (t !== null) {
      var n = Fe();
      Ct(t, e, 134217728, n);
    }
    cd(e, 134217728);
  }
};
wg = function (e) {
  if (e.tag === 13) {
    var t = jn(e),
      n = en(e, t);
    if (n !== null) {
      var r = Fe();
      Ct(n, e, t, r);
    }
    cd(e, t);
  }
};
bg = function () {
  return q;
};
Sg = function (e, t) {
  var n = q;
  try {
    return (q = e), t();
  } finally {
    q = n;
  }
};
uc = function (e, t, n) {
  switch (t) {
    case "input":
      if ((rc(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Aa(r);
            if (!i) throw Error(j(90));
            Zm(r), rc(r, i);
          }
        }
      }
      break;
    case "textarea":
      tg(e, n);
      break;
    case "select":
      (t = n.value), t != null && Fr(e, !!n.multiple, t, !1);
  }
};
lg = id;
cg = ur;
var I2 = { usingClientEntryPoint: !1, Events: [Rs, kr, Aa, og, ag, id] },
  Di = {
    findFiberByHostInstance: Qn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  D2 = {
    bundleType: Di.bundleType,
    version: Di.version,
    rendererPackageName: Di.rendererPackageName,
    rendererConfig: Di.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: on.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = fg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Di.findFiberByHostInstance || j2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var oo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!oo.isDisabled && oo.supportsFiber)
    try {
      (Sa = oo.inject(D2)), (Rt = oo);
    } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I2;
tt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!dd(t)) throw Error(j(200));
  return T2(e, t, null, n);
};
tt.createRoot = function (e, t) {
  if (!dd(e)) throw Error(j(299));
  var n = !1,
    r = "",
    i = $y;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = ld(e, 1, !1, null, null, n, !1, r, i)),
    (e[Zt] = t.current),
    ds(e.nodeType === 8 ? e.parentNode : e),
    new ud(t)
  );
};
tt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(j(188))
      : ((e = Object.keys(e).join(",")), Error(j(268, e)));
  return (e = fg(t)), (e = e === null ? null : e.stateNode), e;
};
tt.flushSync = function (e) {
  return ur(e);
};
tt.hydrate = function (e, t, n) {
  if (!La(t)) throw Error(j(200));
  return Fa(null, e, t, !0, n);
};
tt.hydrateRoot = function (e, t, n) {
  if (!dd(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = $y;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Hy(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[Zt] = t.current),
    ds(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Ra(t);
};
tt.render = function (e, t, n) {
  if (!La(t)) throw Error(j(200));
  return Fa(null, e, t, !1, n);
};
tt.unmountComponentAtNode = function (e) {
  if (!La(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (ur(function () {
        Fa(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Zt] = null);
        });
      }),
      !0)
    : !1;
};
tt.unstable_batchedUpdates = id;
tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!La(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return Fa(e, t, n, !1, r);
};
tt.version = "18.3.1-next-f1338f8080-20240426";
function Wy() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wy);
    } catch (e) {
      console.error(e);
    }
}
Wy(), (Wm.exports = tt);
var Fs = Wm.exports;
const M2 = Mm(Fs);
var Ky,
  Th = Fs;
(Ky = Th.createRoot), Th.hydrateRoot;
function R2(e, t) {
  if (e instanceof RegExp) return { keys: !1, pattern: e };
  var n,
    r,
    i,
    s,
    o = [],
    a = "",
    l = e.split("/");
  for (l[0] || l.shift(); (i = l.shift()); )
    (n = i[0]),
      n === "*"
        ? (o.push(n), (a += i[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : n === ":"
          ? ((r = i.indexOf("?", 1)),
            (s = i.indexOf(".", 1)),
            o.push(i.substring(1, ~r ? r : ~s ? s : i.length)),
            (a += ~r && !~s ? "(?:/([^/]+?))?" : "/([^/]+?)"),
            ~s && (a += (~r ? "?" : "") + "\\" + i.substring(s)))
          : (a += "/" + i);
  return {
    keys: o,
    pattern: new RegExp("^" + a + (t ? "(?=$|/)" : "/?$"), "i"),
  };
}
var Gy = { exports: {} },
  Qy = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oi = w;
function L2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var F2 = typeof Object.is == "function" ? Object.is : L2,
  _2 = oi.useState,
  O2 = oi.useEffect,
  V2 = oi.useLayoutEffect,
  z2 = oi.useDebugValue;
function B2(e, t) {
  var n = t(),
    r = _2({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    s = r[1];
  return (
    V2(
      function () {
        (i.value = n), (i.getSnapshot = t), jl(i) && s({ inst: i });
      },
      [e, n, t],
    ),
    O2(
      function () {
        return (
          jl(i) && s({ inst: i }),
          e(function () {
            jl(i) && s({ inst: i });
          })
        );
      },
      [e],
    ),
    z2(n),
    n
  );
}
function jl(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !F2(e, n);
  } catch {
    return !0;
  }
}
function U2(e, t) {
  return t();
}
var H2 =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? U2
    : B2;
Qy.useSyncExternalStore =
  oi.useSyncExternalStore !== void 0 ? oi.useSyncExternalStore : H2;
Gy.exports = Qy;
var $2 = Gy.exports;
const W2 = Sw.useInsertionEffect,
  K2 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  G2 = K2 ? w.useLayoutEffect : w.useEffect,
  Q2 = W2 || G2,
  Yy = (e) => {
    const t = w.useRef([e, (...n) => t[0](...n)]).current;
    return (
      Q2(() => {
        t[0] = e;
      }),
      t[1]
    );
  },
  Y2 = "popstate",
  fd = "pushState",
  hd = "replaceState",
  q2 = "hashchange",
  jh = [Y2, fd, hd, q2],
  X2 = (e) => {
    for (const t of jh) addEventListener(t, e);
    return () => {
      for (const t of jh) removeEventListener(t, e);
    };
  },
  qy = (e, t) => $2.useSyncExternalStore(X2, e, t),
  J2 = () => location.search,
  Z2 = ({ ssrSearch: e = "" } = {}) => qy(J2, () => e),
  Nh = () => location.pathname,
  eb = ({ ssrPath: e } = {}) => qy(Nh, e ? () => e : Nh),
  tb = (e, { replace: t = !1, state: n = null } = {}) =>
    history[t ? hd : fd](n, "", e),
  nb = (e = {}) => [eb(e), tb],
  Ih = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Ih] > "u") {
  for (const e of [fd, hd]) {
    const t = history[e];
    history[e] = function () {
      const n = t.apply(this, arguments),
        r = new Event(e);
      return (r.arguments = arguments), dispatchEvent(r), n;
    };
  }
  Object.defineProperty(window, Ih, { value: !0 });
}
const rb = (e, t) =>
    t.toLowerCase().indexOf(e.toLowerCase())
      ? "~" + t
      : t.slice(e.length) || "/",
  Xy = (e = "") => (e === "/" ? "" : e),
  ib = (e, t) => (e[0] === "~" ? e.slice(1) : Xy(t) + e),
  sb = (e = "", t) => rb(Dh(Xy(e)), Dh(t)),
  Dh = (e) => {
    try {
      return decodeURI(e);
    } catch {
      return e;
    }
  },
  Jy = {
    hook: nb,
    searchHook: Z2,
    parser: R2,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    hrefs: (e) => e,
  },
  Zy = w.createContext(Jy),
  yi = () => w.useContext(Zy),
  ev = {},
  tv = w.createContext(ev),
  ob = () => w.useContext(tv),
  _a = (e) => {
    const [t, n] = e.hook(e);
    return [sb(e.base, t), Yy((r, i) => n(ib(r, e.base), i))];
  },
  ab = () => _a(yi()),
  pd = (e, t, n, r) => {
    const { pattern: i, keys: s } =
        t instanceof RegExp ? { keys: !1, pattern: t } : e(t || "*", r),
      o = i.exec(n) || [],
      [a, ...l] = o;
    return a !== void 0
      ? [
          !0,
          (() => {
            const c =
              s !== !1
                ? Object.fromEntries(s.map((f, h) => [f, l[h]]))
                : o.groups;
            let u = { ...l };
            return c && Object.assign(u, c), u;
          })(),
          ...(r ? [a] : []),
        ]
      : [!1, null];
  },
  lb = (e) => pd(yi().parser, e, ab()[0]),
  cb = ({ children: e, ...t }) => {
    var u, f;
    const n = yi(),
      r = t.hook ? Jy : n;
    let i = r;
    const [s, o] = ((u = t.ssrPath) == null ? void 0 : u.split("?")) ?? [];
    o && ((t.ssrSearch = o), (t.ssrPath = s)),
      (t.hrefs = t.hrefs ?? ((f = t.hook) == null ? void 0 : f.hrefs));
    let a = w.useRef({}),
      l = a.current,
      c = l;
    for (let h in r) {
      const g = h === "base" ? r[h] + (t[h] || "") : t[h] || r[h];
      l === c && g !== c[h] && (a.current = c = { ...c }),
        (c[h] = g),
        g !== r[h] && (i = c);
    }
    return w.createElement(Zy.Provider, { value: i, children: e });
  },
  Mh = ({ children: e, component: t }, n) =>
    t ? w.createElement(t, { params: n }) : typeof e == "function" ? e(n) : e,
  ub = (e) => {
    let t = w.useRef(ev),
      n = t.current;
    for (const r in e) e[r] !== n[r] && (n = e);
    return Object.keys(e).length === 0 && (n = e), (t.current = n);
  },
  yr = ({ path: e, nest: t, match: n, ...r }) => {
    const i = yi(),
      [s] = _a(i),
      [o, a, l] = n ?? pd(i.parser, e, s, t),
      c = ub({ ...ob(), ...a });
    if (!o) return null;
    const u = l ? w.createElement(cb, { base: l }, Mh(r, c)) : Mh(r, c);
    return w.createElement(tv.Provider, { value: c, children: u });
  },
  Ge = w.forwardRef((e, t) => {
    const n = yi(),
      [r, i] = _a(n),
      {
        to: s = "",
        href: o = s,
        onClick: a,
        asChild: l,
        children: c,
        className: u,
        replace: f,
        state: h,
        ...g
      } = e,
      x = Yy((b) => {
        b.ctrlKey ||
          b.metaKey ||
          b.altKey ||
          b.shiftKey ||
          b.button !== 0 ||
          (a == null || a(b),
          b.defaultPrevented || (b.preventDefault(), i(o, e)));
      }),
      y = n.hrefs(o[0] === "~" ? o.slice(1) : n.base + o, n);
    return l && w.isValidElement(c)
      ? w.cloneElement(c, { onClick: x, href: y })
      : w.createElement("a", {
          ...g,
          onClick: x,
          href: y,
          className: u != null && u.call ? u(r === o) : u,
          children: c,
          ref: t,
        });
  }),
  nv = (e) =>
    Array.isArray(e)
      ? e.flatMap((t) => nv(t && t.type === w.Fragment ? t.props.children : t))
      : [e],
  db = ({ children: e, location: t }) => {
    const n = yi(),
      [r] = _a(n);
    for (const i of nv(e)) {
      let s = 0;
      if (
        w.isValidElement(i) &&
        (s = pd(n.parser, i.props.path, t || r, i.props.nest))[0]
      )
        return w.cloneElement(i, { match: s });
    }
    return null;
  };
function To(e) {
  if (!(window.location.pathname === "/" || window.location.pathname === "")) {
    window.location.href = `/#${e}`;
    return;
  }
  const n = document.getElementById(e);
  n && window.scrollTo({ top: n.offsetTop - 100, behavior: "smooth" });
}
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fb = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  rv = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var hb = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pb = w.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: i = "",
      children: s,
      iconNode: o,
      ...a
    },
    l,
  ) =>
    w.createElement(
      "svg",
      {
        ref: l,
        ...hb,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: rv("lucide", i),
        ...a,
      },
      [
        ...o.map(([c, u]) => w.createElement(c, u)),
        ...(Array.isArray(s) ? s : [s]),
      ],
    ),
);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const X = (e, t) => {
  const n = w.forwardRef(({ className: r, ...i }, s) =>
    w.createElement(pb, {
      ref: s,
      iconNode: t,
      className: rv(`lucide-${fb(e)}`, r),
      ...i,
    }),
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sa = X("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mb = X("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rh = X("Award", [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv",
    },
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gb = X("BookOpen", [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lh = X("Briefcase", [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Oa = X("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yb = X("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vb = X("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xb = X("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wb = X("Code", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ir = X("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bb = X("FileText", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sb = X("Filter", [
  [
    "polygon",
    { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cb = X("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef",
    },
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vr = X("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
  ],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kb = X("GraduationCap", [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0",
    },
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Eb = X("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ab = X("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f",
    },
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pb = X("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tb = X("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jb = X("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nb = X("Share", [
  ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" }],
  ["polyline", { points: "16 6 12 2 8 6", key: "m901s6" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "15", key: "1p0rca" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nl = X("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx",
    },
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ib = X("Tag", [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0",
    },
  ],
  [
    "circle",
    { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Db = X("Twitter", [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mb = X("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rb = X("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oa = X("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  md = w.createContext({});
function gd(e) {
  const t = w.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Va = w.createContext(null),
  yd = w.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
class Lb extends w.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function Fb({ children: e, isPresent: t }) {
  const n = w.useId(),
    r = w.useRef(null),
    i = w.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: s } = w.useContext(yd);
  return (
    w.useInsertionEffect(() => {
      const { width: o, height: a, top: l, left: c } = i.current;
      if (t || !r.current || !o || !a) return;
      r.current.dataset.motionPopId = n;
      const u = document.createElement("style");
      return (
        s && (u.nonce = s),
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    d.jsx(Lb, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: w.cloneElement(e, { ref: r }),
    })
  );
}
const _b = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: s,
  mode: o,
}) => {
  const a = gd(Ob),
    l = w.useId(),
    c = w.useCallback(
      (f) => {
        a.set(f, !0);
        for (const h of a.values()) if (!h) return;
        r && r();
      },
      [a, r],
    ),
    u = w.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: c,
        register: (f) => (a.set(f, !1), () => a.delete(f)),
      }),
      s ? [Math.random(), c] : [n, c],
    );
  return (
    w.useMemo(() => {
      a.forEach((f, h) => a.set(h, !1));
    }, [n]),
    w.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    o === "popLayout" && (e = d.jsx(Fb, { isPresent: n, children: e })),
    d.jsx(Va.Provider, { value: u, children: e })
  );
};
function Ob() {
  return new Map();
}
function iv(e = !0) {
  const t = w.useContext(Va);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    s = w.useId();
  w.useEffect(() => {
    e && i(s);
  }, [e]);
  const o = w.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const ao = (e) => e.key || "";
function Fh(e) {
  const t = [];
  return (
    w.Children.forEach(e, (n) => {
      w.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const vd = typeof window < "u",
  sv = vd ? w.useLayoutEffect : w.useEffect,
  Vb = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: s = "sync",
    propagate: o = !1,
  }) => {
    const [a, l] = iv(o),
      c = w.useMemo(() => Fh(e), [e]),
      u = o && !a ? [] : c.map(ao),
      f = w.useRef(!0),
      h = w.useRef(c),
      g = gd(() => new Map()),
      [x, y] = w.useState(c),
      [b, m] = w.useState(c);
    sv(() => {
      (f.current = !1), (h.current = c);
      for (let S = 0; S < b.length; S++) {
        const C = ao(b[S]);
        u.includes(C) ? g.delete(C) : g.get(C) !== !0 && g.set(C, !1);
      }
    }, [b, u.length, u.join("-")]);
    const p = [];
    if (c !== x) {
      let S = [...c];
      for (let C = 0; C < b.length; C++) {
        const k = b[C],
          A = ao(k);
        u.includes(A) || (S.splice(C, 0, k), p.push(k));
      }
      s === "wait" && p.length && (S = p), m(Fh(S)), y(c);
      return;
    }
    const { forceRender: v } = w.useContext(md);
    return d.jsx(d.Fragment, {
      children: b.map((S) => {
        const C = ao(S),
          k = o && !a ? !1 : c === b || u.includes(C),
          A = () => {
            if (g.has(C)) g.set(C, !0);
            else return;
            let E = !0;
            g.forEach((I) => {
              I || (E = !1);
            }),
              E &&
                (v == null || v(),
                m(h.current),
                o && (l == null || l()),
                r && r());
          };
        return d.jsx(
          _b,
          {
            isPresent: k,
            initial: !f.current || n ? void 0 : !1,
            custom: k ? void 0 : t,
            presenceAffectsLayout: i,
            mode: s,
            onExitComplete: k ? void 0 : A,
            children: S,
          },
          C,
        );
      }),
    });
  },
  Xe = (e) => e;
let Hc = Xe;
function xd(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const ai = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  qt = (e) => e * 1e3,
  Xt = (e) => e / 1e3,
  zb = { skipAnimations: !1, useManualTiming: !1 };
function Bb(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const s = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(c) {
    s.has(c) && (l.schedule(c), e()), c(o);
  }
  const l = {
    schedule: (c, u = !1, f = !1) => {
      const g = f && r ? t : n;
      return u && s.add(c), g.has(c) || g.add(c), c;
    },
    cancel: (c) => {
      n.delete(c), s.delete(c);
    },
    process: (c) => {
      if (((o = c), r)) {
        i = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        t.forEach(a),
        t.clear(),
        (r = !1),
        i && ((i = !1), l.process(c));
    },
  };
  return l;
}
const lo = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Ub = 40;
function ov(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = lo.reduce((m, p) => ((m[p] = Bb(s)), m), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: c,
      preRender: u,
      render: f,
      postRender: h,
    } = o,
    g = () => {
      const m = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, Ub), 1)),
        (i.timestamp = m),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        c.process(i),
        u.process(i),
        f.process(i),
        h.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(g));
    },
    x = () => {
      (n = !0), (r = !0), i.isProcessing || e(g);
    };
  return {
    schedule: lo.reduce((m, p) => {
      const v = o[p];
      return (m[p] = (S, C = !1, k = !1) => (n || x(), v.schedule(S, C, k))), m;
    }, {}),
    cancel: (m) => {
      for (let p = 0; p < lo.length; p++) o[lo[p]].cancel(m);
    },
    state: i,
    steps: o,
  };
}
const {
    schedule: ne,
    cancel: Mn,
    state: be,
    steps: Il,
  } = ov(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Xe, !0),
  av = w.createContext({ strict: !1 }),
  _h = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  li = {};
for (const e in _h) li[e] = { isEnabled: (t) => _h[e].some((n) => !!t[n]) };
function Hb(e) {
  for (const t in e) li[t] = { ...li[t], ...e[t] };
}
const $b = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function aa(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    $b.has(e)
  );
}
let lv = (e) => !aa(e);
function Wb(e) {
  e && (lv = (t) => (t.startsWith("on") ? !aa(t) : e(t)));
}
try {
  Wb(require("@emotion/is-prop-valid").default);
} catch {}
function Kb(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((lv(i) ||
        (n === !0 && aa(i)) ||
        (!t && !aa(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function Gb(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
const za = w.createContext({});
function ws(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ba(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const wd = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  bd = ["initial", ...wd];
function Ua(e) {
  return Ba(e.animate) || bd.some((t) => ws(e[t]));
}
function cv(e) {
  return !!(Ua(e) || e.variants);
}
function Qb(e, t) {
  if (Ua(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ws(n) ? n : void 0,
      animate: ws(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Yb(e) {
  const { initial: t, animate: n } = Qb(e, w.useContext(za));
  return w.useMemo(() => ({ initial: t, animate: n }), [Oh(t), Oh(n)]);
}
function Oh(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const qb = Symbol.for("motionComponentSymbol");
function Ir(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Xb(e, t, n) {
  return w.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Ir(n) && (n.current = r));
    },
    [t],
  );
}
const Sd = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Jb = "framerAppearId",
  uv = "data-" + Sd(Jb),
  { schedule: Cd, cancel: SN } = ov(queueMicrotask, !1),
  dv = w.createContext({});
function Zb(e, t, n, r, i) {
  var s, o;
  const { visualElement: a } = w.useContext(za),
    l = w.useContext(av),
    c = w.useContext(Va),
    u = w.useContext(yd).reducedMotion,
    f = w.useRef(null);
  (r = r || l.renderer),
    !f.current &&
      r &&
      (f.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: c,
        blockInitialAnimation: c ? c.initial === !1 : !1,
        reducedMotionConfig: u,
      }));
  const h = f.current,
    g = w.useContext(dv);
  h &&
    !h.projection &&
    i &&
    (h.type === "html" || h.type === "svg") &&
    eS(f.current, n, i, g);
  const x = w.useRef(!1);
  w.useInsertionEffect(() => {
    h && x.current && h.update(n, c);
  });
  const y = n[uv],
    b = w.useRef(
      !!y &&
        !(
          !((s = window.MotionHandoffIsComplete) === null || s === void 0) &&
          s.call(window, y)
        ) &&
        ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
          ? void 0
          : o.call(window, y)),
    );
  return (
    sv(() => {
      h &&
        ((x.current = !0),
        (window.MotionIsMounted = !0),
        h.updateFeatures(),
        Cd.render(h.render),
        b.current && h.animationState && h.animationState.animateChanges());
    }),
    w.useEffect(() => {
      h &&
        (!b.current && h.animationState && h.animationState.animateChanges(),
        b.current &&
          (queueMicrotask(() => {
            var m;
            (m = window.MotionHandoffMarkAsComplete) === null ||
              m === void 0 ||
              m.call(window, y);
          }),
          (b.current = !1)));
    }),
    h
  );
}
function eS(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: c,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : fv(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (a && Ir(a)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: c,
    });
}
function fv(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : fv(e.parent);
}
function tS({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  var s, o;
  e && Hb(e);
  function a(c, u) {
    let f;
    const h = { ...w.useContext(yd), ...c, layoutId: nS(c) },
      { isStatic: g } = h,
      x = Yb(c),
      y = r(c, g);
    if (!g && vd) {
      rS();
      const b = iS(h);
      (f = b.MeasureLayout),
        (x.visualElement = Zb(i, y, h, t, b.ProjectionNode));
    }
    return d.jsxs(za.Provider, {
      value: x,
      children: [
        f && x.visualElement
          ? d.jsx(f, { visualElement: x.visualElement, ...h })
          : null,
        n(i, c, Xb(y, x.visualElement, u), y, g, x.visualElement),
      ],
    });
  }
  a.displayName = `motion.${typeof i == "string" ? i : `create(${(o = (s = i.displayName) !== null && s !== void 0 ? s : i.name) !== null && o !== void 0 ? o : ""})`}`;
  const l = w.forwardRef(a);
  return (l[qb] = i), l;
}
function nS({ layoutId: e }) {
  const t = w.useContext(md).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function rS(e, t) {
  w.useContext(av).strict;
}
function iS(e) {
  const { drag: t, layout: n } = li;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const sS = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function kd(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(sS.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Vh(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function Ed(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = Vh(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, s] = Vh(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
const $c = (e) => Array.isArray(e),
  oS = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  aS = (e) => ($c(e) ? e[e.length - 1] || 0 : e),
  Ne = (e) => !!(e && e.getVelocity);
function jo(e) {
  const t = Ne(e) ? e.get() : e;
  return oS(t) ? t.toValue() : t;
}
function lS(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  i,
  s,
) {
  const o = { latestValues: cS(r, i, s, e), renderState: t() };
  return (
    n &&
      ((o.onMount = (a) => n({ props: r, current: a, ...o })),
      (o.onUpdate = (a) => n(a))),
    o
  );
}
const hv = (e) => (t, n) => {
  const r = w.useContext(za),
    i = w.useContext(Va),
    s = () => lS(e, t, r, i);
  return n ? s() : gd(s);
};
function cS(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const h in s) i[h] = jo(s[h]);
  let { initial: o, animate: a } = e;
  const l = Ua(e),
    c = cv(e);
  t &&
    c &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || o === !1;
  const f = u ? a : o;
  if (f && typeof f != "boolean" && !Ba(f)) {
    const h = Array.isArray(f) ? f : [f];
    for (let g = 0; g < h.length; g++) {
      const x = Ed(e, h[g]);
      if (x) {
        const { transitionEnd: y, transition: b, ...m } = x;
        for (const p in m) {
          let v = m[p];
          if (Array.isArray(v)) {
            const S = u ? v.length - 1 : 0;
            v = v[S];
          }
          v !== null && (i[p] = v);
        }
        for (const p in y) i[p] = y[p];
      }
    }
  }
  return i;
}
const vi = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  mr = new Set(vi),
  pv = (e) => (t) => typeof t == "string" && t.startsWith(e),
  mv = pv("--"),
  uS = pv("var(--"),
  Ad = (e) => (uS(e) ? dS.test(e.split("/*")[0].trim()) : !1),
  dS =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  gv = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  nn = (e, t, n) => (n > t ? t : n < e ? e : n),
  xi = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  bs = { ...xi, transform: (e) => nn(0, 1, e) },
  co = { ...xi, default: 1 },
  _s = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  un = _s("deg"),
  Ft = _s("%"),
  _ = _s("px"),
  fS = _s("vh"),
  hS = _s("vw"),
  zh = {
    ...Ft,
    parse: (e) => Ft.parse(e) / 100,
    transform: (e) => Ft.transform(e * 100),
  },
  pS = {
    borderWidth: _,
    borderTopWidth: _,
    borderRightWidth: _,
    borderBottomWidth: _,
    borderLeftWidth: _,
    borderRadius: _,
    radius: _,
    borderTopLeftRadius: _,
    borderTopRightRadius: _,
    borderBottomRightRadius: _,
    borderBottomLeftRadius: _,
    width: _,
    maxWidth: _,
    height: _,
    maxHeight: _,
    top: _,
    right: _,
    bottom: _,
    left: _,
    padding: _,
    paddingTop: _,
    paddingRight: _,
    paddingBottom: _,
    paddingLeft: _,
    margin: _,
    marginTop: _,
    marginRight: _,
    marginBottom: _,
    marginLeft: _,
    backgroundPositionX: _,
    backgroundPositionY: _,
  },
  mS = {
    rotate: un,
    rotateX: un,
    rotateY: un,
    rotateZ: un,
    scale: co,
    scaleX: co,
    scaleY: co,
    scaleZ: co,
    skew: un,
    skewX: un,
    skewY: un,
    distance: _,
    translateX: _,
    translateY: _,
    translateZ: _,
    x: _,
    y: _,
    z: _,
    perspective: _,
    transformPerspective: _,
    opacity: bs,
    originX: zh,
    originY: zh,
    originZ: _,
  },
  Bh = { ...xi, transform: Math.round },
  Pd = {
    ...pS,
    ...mS,
    zIndex: Bh,
    size: _,
    fillOpacity: bs,
    strokeOpacity: bs,
    numOctaves: Bh,
  },
  gS = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  yS = vi.length;
function vS(e, t, n) {
  let r = "",
    i = !0;
  for (let s = 0; s < yS; s++) {
    const o = vi[s],
      a = e[o];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (o.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const c = gv(a, Pd[o]);
      if (!l) {
        i = !1;
        const u = gS[o] || o;
        r += `${u}(${c}) `;
      }
      n && (t[o] = c);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function Td(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1,
    a = !1;
  for (const l in t) {
    const c = t[l];
    if (mr.has(l)) {
      o = !0;
      continue;
    } else if (mv(l)) {
      i[l] = c;
      continue;
    } else {
      const u = gv(c, Pd[l]);
      l.startsWith("origin") ? ((a = !0), (s[l] = u)) : (r[l] = u);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = vS(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = s;
    r.transformOrigin = `${l} ${c} ${u}`;
  }
}
const xS = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  wS = { offset: "strokeDashoffset", array: "strokeDasharray" };
function bS(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? xS : wS;
  e[s.offset] = _.transform(-r);
  const o = _.transform(t),
    a = _.transform(n);
  e[s.array] = `${o} ${a}`;
}
function Uh(e, t, n) {
  return typeof e == "string" ? e : _.transform(t + n * e);
}
function SS(e, t, n) {
  const r = Uh(t, e.x, e.width),
    i = Uh(n, e.y, e.height);
  return `${r} ${i}`;
}
function jd(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...c
  },
  u,
  f,
) {
  if ((Td(e, c, f), u)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: h, style: g, dimensions: x } = e;
  h.transform && (x && (g.transform = h.transform), delete h.transform),
    x &&
      (i !== void 0 || s !== void 0 || g.transform) &&
      (g.transformOrigin = SS(
        x,
        i !== void 0 ? i : 0.5,
        s !== void 0 ? s : 0.5,
      )),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    o !== void 0 && bS(h, o, a, l, !1);
}
const Nd = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  yv = () => ({ ...Nd(), attrs: {} }),
  Id = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function vv(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n) e.style.setProperty(s, n[s]);
}
const xv = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function wv(e, t, n, r) {
  vv(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(xv.has(i) ? i : Sd(i), t.attrs[i]);
}
const la = {};
function CS(e) {
  Object.assign(la, e);
}
function bv(e, { layout: t, layoutId: n }) {
  return (
    mr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!la[e] || e === "opacity"))
  );
}
function Dd(e, t, n) {
  var r;
  const { style: i } = e,
    s = {};
  for (const o in i)
    (Ne(i[o]) ||
      (t.style && Ne(t.style[o])) ||
      bv(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (s[o] = i[o]);
  return s;
}
function Sv(e, t, n) {
  const r = Dd(e, t, n);
  for (const i in e)
    if (Ne(e[i]) || Ne(t[i])) {
      const s =
        vi.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
function kS(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const Hh = ["x", "y", "width", "height", "cx", "cy", "r"],
  ES = {
    useVisualState: hv({
      scrapeMotionValuesFromProps: Sv,
      createRenderState: yv,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: r,
        latestValues: i,
      }) => {
        if (!n) return;
        let s = !!e.drag;
        if (!s) {
          for (const a in i)
            if (mr.has(a)) {
              s = !0;
              break;
            }
        }
        if (!s) return;
        let o = !t;
        if (t)
          for (let a = 0; a < Hh.length; a++) {
            const l = Hh[a];
            e[l] !== t[l] && (o = !0);
          }
        o &&
          ne.read(() => {
            kS(n, r),
              ne.render(() => {
                jd(r, i, Id(n.tagName), e.transformTemplate), wv(n, r);
              });
          });
      },
    }),
  },
  AS = {
    useVisualState: hv({
      scrapeMotionValuesFromProps: Dd,
      createRenderState: Nd,
    }),
  };
function Cv(e, t, n) {
  for (const r in t) !Ne(t[r]) && !bv(r, n) && (e[r] = t[r]);
}
function PS({ transformTemplate: e }, t) {
  return w.useMemo(() => {
    const n = Nd();
    return Td(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function TS(e, t) {
  const n = e.style || {},
    r = {};
  return Cv(r, n, e), Object.assign(r, PS(e, t)), r;
}
function jS(e, t) {
  const n = {},
    r = TS(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function NS(e, t, n, r) {
  const i = w.useMemo(() => {
    const s = yv();
    return (
      jd(s, t, Id(r), e.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    Cv(s, e.style, e), (i.style = { ...s, ...i.style });
  }
  return i;
}
function IS(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const l = (kd(n) ? NS : jS)(r, s, o, n),
      c = Kb(r, typeof n == "string", e),
      u = n !== w.Fragment ? { ...c, ...l, ref: i } : {},
      { children: f } = r,
      h = w.useMemo(() => (Ne(f) ? f.get() : f), [f]);
    return w.createElement(n, { ...u, children: h });
  };
}
function DS(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const o = {
      ...(kd(r) ? ES : AS),
      preloadedFeatures: e,
      useRender: IS(i),
      createVisualElement: t,
      Component: r,
    };
    return tS(o);
  };
}
function kv(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Ha(e, t, n) {
  const r = e.getProps();
  return Ed(r, t, n !== void 0 ? n : r.custom, e);
}
const MS = xd(() => window.ScrollTimeline !== void 0);
class RS {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  get finished() {
    return Promise.all(
      this.animations.map((t) => ("finished" in t ? t.finished : t)),
    );
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) => {
      if (MS() && i.attachTimeline) return i.attachTimeline(t);
      if (typeof n == "function") return n(i);
    });
    return () => {
      r.forEach((i, s) => {
        i && i(), this.animations[s].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class LS extends RS {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function Md(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Wc = 2e4;
function Ev(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Wc; ) (t += n), (r = e.next(t));
  return t >= Wc ? 1 / 0 : t;
}
function Rd(e) {
  return typeof e == "function";
}
function $h(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const Ld = (e) => Array.isArray(e) && typeof e[0] == "number",
  FS = { linearEasing: void 0 };
function _S(e, t) {
  const n = xd(e);
  return () => {
    var r;
    return (r = FS[t]) !== null && r !== void 0 ? r : n();
  };
}
const ca = _S(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Av = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++) r += e(ai(0, i - 1, s)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function Pv(e) {
  return !!(
    (typeof e == "function" && ca()) ||
    !e ||
    (typeof e == "string" && (e in Kc || ca())) ||
    Ld(e) ||
    (Array.isArray(e) && e.every(Pv))
  );
}
const zi = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Kc = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: zi([0, 0.65, 0.55, 1]),
    circOut: zi([0.55, 0, 1, 0.45]),
    backIn: zi([0.31, 0.01, 0.66, -0.59]),
    backOut: zi([0.33, 1.53, 0.69, 0.99]),
  };
function Tv(e, t) {
  if (e)
    return typeof e == "function" && ca()
      ? Av(e, t)
      : Ld(e)
        ? zi(e)
        : Array.isArray(e)
          ? e.map((n) => Tv(n, t) || Kc.easeOut)
          : Kc[e];
}
const gt = { x: !1, y: !1 };
function jv() {
  return gt.x || gt.y;
}
function OS(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let i = document;
    const s = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
    return s ? Array.from(s) : [];
  }
  return Array.from(e);
}
function Nv(e, t) {
  const n = OS(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function Wh(e) {
  return (t) => {
    t.pointerType === "touch" || jv() || e(t);
  };
}
function VS(e, t, n = {}) {
  const [r, i, s] = Nv(e, n),
    o = Wh((a) => {
      const { target: l } = a,
        c = t(a);
      if (typeof c != "function" || !l) return;
      const u = Wh((f) => {
        c(f), l.removeEventListener("pointerleave", u);
      });
      l.addEventListener("pointerleave", u, i);
    });
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", o, i);
    }),
    s
  );
}
const Iv = (e, t) => (t ? (e === t ? !0 : Iv(e, t.parentElement)) : !1),
  Fd = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  zS = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function BS(e) {
  return zS.has(e.tagName) || e.tabIndex !== -1;
}
const Bi = new WeakSet();
function Kh(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Dl(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const US = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Kh(() => {
    if (Bi.has(n)) return;
    Dl(n, "down");
    const i = Kh(() => {
        Dl(n, "up");
      }),
      s = () => Dl(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Gh(e) {
  return Fd(e) && !jv();
}
function HS(e, t, n = {}) {
  const [r, i, s] = Nv(e, n),
    o = (a) => {
      const l = a.currentTarget;
      if (!Gh(a) || Bi.has(l)) return;
      Bi.add(l);
      const c = t(a),
        u = (g, x) => {
          window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", h),
            !(!Gh(g) || !Bi.has(l)) &&
              (Bi.delete(l), typeof c == "function" && c(g, { success: x }));
        },
        f = (g) => {
          u(g, n.useGlobalTarget || Iv(l, g.target));
        },
        h = (g) => {
          u(g, !1);
        };
      window.addEventListener("pointerup", f, i),
        window.addEventListener("pointercancel", h, i);
    };
  return (
    r.forEach((a) => {
      !BS(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i),
        a.addEventListener("focus", (c) => US(c, i), i);
    }),
    s
  );
}
function $S(e) {
  return e === "x" || e === "y"
    ? gt[e]
      ? null
      : ((gt[e] = !0),
        () => {
          gt[e] = !1;
        })
    : gt.x || gt.y
      ? null
      : ((gt.x = gt.y = !0),
        () => {
          gt.x = gt.y = !1;
        });
}
const Dv = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...vi,
]);
let No;
function WS() {
  No = void 0;
}
const _t = {
  now: () => (
    No === void 0 &&
      _t.set(
        be.isProcessing || zb.useManualTiming
          ? be.timestamp
          : performance.now(),
      ),
    No
  ),
  set: (e) => {
    (No = e), queueMicrotask(WS);
  },
};
function _d(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Od(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Vd {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return _d(this.subscriptions, t), () => Od(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function Mv(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Qh = 30,
  KS = (e) => !isNaN(parseFloat(e));
class GS {
  constructor(t, n = {}) {
    (this.version = "11.18.2"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const s = _t.now();
        this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = _t.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = KS(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Vd());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            ne.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = _t.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Qh
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Qh);
    return Mv(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Ss(e, t) {
  return new GS(e, t);
}
function QS(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ss(n));
}
function YS(e, t) {
  const n = Ha(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = aS(s[o]);
    QS(e, o, a);
  }
}
function qS(e) {
  return !!(Ne(e) && e.add);
}
function Gc(e, t) {
  const n = e.getValue("willChange");
  if (qS(n)) return n.add(t);
}
function Rv(e) {
  return e.props[uv];
}
const Lv = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  XS = 1e-7,
  JS = 12;
function ZS(e, t, n, r, i) {
  let s,
    o,
    a = 0;
  do (o = t + (n - t) / 2), (s = Lv(o, r, i) - e), s > 0 ? (n = o) : (t = o);
  while (Math.abs(s) > XS && ++a < JS);
  return o;
}
function Os(e, t, n, r) {
  if (e === t && n === r) return Xe;
  const i = (s) => ZS(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : Lv(i(s), t, r));
}
const Fv = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  _v = (e) => (t) => 1 - e(1 - t),
  Ov = Os(0.33, 1.53, 0.69, 0.99),
  zd = _v(Ov),
  Vv = Fv(zd),
  zv = (e) =>
    (e *= 2) < 1 ? 0.5 * zd(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Bd = (e) => 1 - Math.sin(Math.acos(e)),
  Bv = _v(Bd),
  Uv = Fv(Bd),
  Hv = (e) => /^0[^.\s]+$/u.test(e);
function eC(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || Hv(e)
      : !0;
}
const Ji = (e) => Math.round(e * 1e5) / 1e5,
  Ud = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function tC(e) {
  return e == null;
}
const nC =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Hd = (e, t) => (n) =>
    !!(
      (typeof n == "string" && nC.test(n) && n.startsWith(e)) ||
      (t && !tC(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  $v = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, s, o, a] = r.match(Ud);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  rC = (e) => nn(0, 255, e),
  Ml = { ...xi, transform: (e) => Math.round(rC(e)) },
  Xn = {
    test: Hd("rgb", "red"),
    parse: $v("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Ml.transform(e) +
      ", " +
      Ml.transform(t) +
      ", " +
      Ml.transform(n) +
      ", " +
      Ji(bs.transform(r)) +
      ")",
  };
function iC(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Qc = { test: Hd("#"), parse: iC, transform: Xn.transform },
  Dr = {
    test: Hd("hsl", "hue"),
    parse: $v("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Ft.transform(Ji(t)) +
      ", " +
      Ft.transform(Ji(n)) +
      ", " +
      Ji(bs.transform(r)) +
      ")",
  },
  Te = {
    test: (e) => Xn.test(e) || Qc.test(e) || Dr.test(e),
    parse: (e) =>
      Xn.test(e) ? Xn.parse(e) : Dr.test(e) ? Dr.parse(e) : Qc.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? Xn.transform(e)
          : Dr.transform(e),
  },
  sC =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function oC(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Ud)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(sC)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Wv = "number",
  Kv = "color",
  aC = "var",
  lC = "var(",
  Yh = "${}",
  cC =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Cs(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const a = t
    .replace(
      cC,
      (l) => (
        Te.test(l)
          ? (r.color.push(s), i.push(Kv), n.push(Te.parse(l)))
          : l.startsWith(lC)
            ? (r.var.push(s), i.push(aC), n.push(l))
            : (r.number.push(s), i.push(Wv), n.push(parseFloat(l))),
        ++s,
        Yh
      ),
    )
    .split(Yh);
  return { values: n, split: a, indexes: r, types: i };
}
function Gv(e) {
  return Cs(e).values;
}
function Qv(e) {
  const { split: t, types: n } = Cs(e),
    r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const a = n[o];
        a === Wv
          ? (s += Ji(i[o]))
          : a === Kv
            ? (s += Te.transform(i[o]))
            : (s += i[o]);
      }
    return s;
  };
}
const uC = (e) => (typeof e == "number" ? 0 : e);
function dC(e) {
  const t = Gv(e);
  return Qv(e)(t.map(uC));
}
const Rn = {
    test: oC,
    parse: Gv,
    createTransformer: Qv,
    getAnimatableNone: dC,
  },
  fC = new Set(["brightness", "contrast", "saturate", "opacity"]);
function hC(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Ud) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = fC.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const pC = /\b([a-z-]*)\(.*?\)/gu,
  Yc = {
    ...Rn,
    getAnimatableNone: (e) => {
      const t = e.match(pC);
      return t ? t.map(hC).join(" ") : e;
    },
  },
  mC = {
    ...Pd,
    color: Te,
    backgroundColor: Te,
    outlineColor: Te,
    fill: Te,
    stroke: Te,
    borderColor: Te,
    borderTopColor: Te,
    borderRightColor: Te,
    borderBottomColor: Te,
    borderLeftColor: Te,
    filter: Yc,
    WebkitFilter: Yc,
  },
  $d = (e) => mC[e];
function Yv(e, t) {
  let n = $d(e);
  return (
    n !== Yc && (n = Rn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const gC = new Set(["auto", "none", "0"]);
function yC(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    typeof s == "string" && !gC.has(s) && Cs(s).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const s of t) e[s] = Yv(n, i);
}
const qh = (e) => e === xi || e === _,
  Xh = (e, t) => parseFloat(e.split(", ")[t]),
  Jh =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Xh(i[1], t);
      {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? Xh(s[1], e) : 0;
      }
    },
  vC = new Set(["x", "y", "z"]),
  xC = vi.filter((e) => !vC.has(e));
function wC(e) {
  const t = [];
  return (
    xC.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const ci = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Jh(4, 13),
  y: Jh(5, 14),
};
ci.translateX = ci.x;
ci.translateY = ci.y;
const sr = new Set();
let qc = !1,
  Xc = !1;
function qv() {
  if (Xc) {
    const e = Array.from(sr).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = wC(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var a;
            (a = r.getValue(s)) === null || a === void 0 || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Xc = !1), (qc = !1), sr.forEach((e) => e.complete()), sr.clear();
}
function Xv() {
  sr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Xc = !0);
  });
}
function bC() {
  Xv(), qv();
}
class Wd {
  constructor(t, n, r, i, s, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (sr.add(this),
          qc || ((qc = !0), ne.read(Xv), ne.resolveKeyframes(qv)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const o = i == null ? void 0 : i.get(),
            a = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), i && o === void 0 && i.set(t[0]);
        } else t[s] = t[s - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      sr.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), sr.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Jv = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  SC = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function CC(e) {
  const t = SC.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Zv(e, t, n = 1) {
  const [r, i] = CC(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return Jv(o) ? parseFloat(o) : o;
  }
  return Ad(i) ? Zv(i, t, n + 1) : i;
}
const e0 = (e) => (t) => t.test(e),
  kC = { test: (e) => e === "auto", parse: (e) => e },
  t0 = [xi, _, Ft, un, hS, fS, kC],
  Zh = (e) => t0.find(e0(e));
class n0 extends Wd {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == "string" && ((c = c.trim()), Ad(c))) {
        const u = Zv(c, n.current);
        u !== void 0 && (t[l] = u),
          l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if ((this.resolveNoneKeyframes(), !Dv.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      o = Zh(i),
      a = Zh(s);
    if (o !== a)
      if (qh(o) && qh(a))
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          typeof c == "string" && (t[l] = parseFloat(c));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) eC(t[i]) && r.push(i);
    r.length && yC(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ci[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1,
      a = i[o];
    (i[o] = ci[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, c]) => {
          n.getValue(l).set(c);
        }),
      this.resolveNoneKeyframes();
  }
}
const ep = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Rn.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function EC(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function AC(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    o = ep(i, t),
    a = ep(s, t);
  return !o || !a ? !1 : EC(e) || ((n === "spring" || Rd(n)) && r);
}
const PC = (e) => e !== null;
function $a(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(PC),
    s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
const TC = 40;
class r0 {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = _t.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > TC
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && bC(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = _t.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: i,
      velocity: s,
      delay: o,
      onComplete: a,
      onUpdate: l,
      isGenerator: c,
    } = this.options;
    if (!c && !AC(t, r, i, s))
      if (o) this.options.duration = 0;
      else {
        l && l($a(t, this.options, n)), a && a(), this.resolveFinishedPromise();
        return;
      }
    const u = this.initPlayback(t, n);
    u !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...u }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const oe = (e, t, n) => e + (t - e) * n;
function Rl(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function jC({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = Rl(l, a, e + 1 / 3)), (s = Rl(l, a, e)), (o = Rl(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function ua(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Ll = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  NC = [Qc, Xn, Dr],
  IC = (e) => NC.find((t) => t.test(e));
function tp(e) {
  const t = IC(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Dr && (n = jC(n)), n;
}
const np = (e, t) => {
    const n = tp(e),
      r = tp(t);
    if (!n || !r) return ua(e, t);
    const i = { ...n };
    return (s) => (
      (i.red = Ll(n.red, r.red, s)),
      (i.green = Ll(n.green, r.green, s)),
      (i.blue = Ll(n.blue, r.blue, s)),
      (i.alpha = oe(n.alpha, r.alpha, s)),
      Xn.transform(i)
    );
  },
  DC = (e, t) => (n) => t(e(n)),
  Vs = (...e) => e.reduce(DC),
  Jc = new Set(["none", "hidden"]);
function MC(e, t) {
  return Jc.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function RC(e, t) {
  return (n) => oe(e, t, n);
}
function Kd(e) {
  return typeof e == "number"
    ? RC
    : typeof e == "string"
      ? Ad(e)
        ? ua
        : Te.test(e)
          ? np
          : _C
      : Array.isArray(e)
        ? i0
        : typeof e == "object"
          ? Te.test(e)
            ? np
            : LC
          : ua;
}
function i0(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => Kd(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function LC(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Kd(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function FC(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s],
      a = e.indexes[o][i[o]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[s] = l), i[o]++;
  }
  return r;
}
const _C = (e, t) => {
  const n = Rn.createTransformer(t),
    r = Cs(e),
    i = Cs(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Jc.has(e) && !i.values.length) || (Jc.has(t) && !r.values.length)
      ? MC(e, t)
      : Vs(i0(FC(r, i), i.values), n)
    : ua(e, t);
};
function s0(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? oe(e, t, n)
    : Kd(e)(e, t);
}
const OC = 5;
function o0(e, t, n) {
  const r = Math.max(t - OC, 0);
  return Mv(n - e(r), t - r);
}
const ue = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Fl = 0.001;
function VC({
  duration: e = ue.duration,
  bounce: t = ue.bounce,
  velocity: n = ue.velocity,
  mass: r = ue.mass,
}) {
  let i,
    s,
    o = 1 - t;
  (o = nn(ue.minDamping, ue.maxDamping, o)),
    (e = nn(ue.minDuration, ue.maxDuration, Xt(e))),
    o < 1
      ? ((i = (c) => {
          const u = c * o,
            f = u * e,
            h = u - n,
            g = Zc(c, o),
            x = Math.exp(-f);
          return Fl - (h / g) * x;
        }),
        (s = (c) => {
          const f = c * o * e,
            h = f * n + n,
            g = Math.pow(o, 2) * Math.pow(c, 2) * e,
            x = Math.exp(-f),
            y = Zc(Math.pow(c, 2), o);
          return ((-i(c) + Fl > 0 ? -1 : 1) * ((h - g) * x)) / y;
        }))
      : ((i = (c) => {
          const u = Math.exp(-c * e),
            f = (c - n) * e + 1;
          return -Fl + u * f;
        }),
        (s = (c) => {
          const u = Math.exp(-c * e),
            f = (n - c) * (e * e);
          return u * f;
        }));
  const a = 5 / e,
    l = BC(i, s, a);
  if (((e = qt(e)), isNaN(l)))
    return { stiffness: ue.stiffness, damping: ue.damping, duration: e };
  {
    const c = Math.pow(l, 2) * r;
    return { stiffness: c, damping: o * 2 * Math.sqrt(r * c), duration: e };
  }
}
const zC = 12;
function BC(e, t, n) {
  let r = n;
  for (let i = 1; i < zC; i++) r = r - e(r) / t(r);
  return r;
}
function Zc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const UC = ["duration", "bounce"],
  HC = ["stiffness", "damping", "mass"];
function rp(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function $C(e) {
  let t = {
    velocity: ue.velocity,
    stiffness: ue.stiffness,
    damping: ue.damping,
    mass: ue.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!rp(e, HC) && rp(e, UC))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        s = 2 * nn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: ue.mass, stiffness: i, damping: s };
    } else {
      const n = VC(e);
      (t = { ...t, ...n, mass: ue.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function a0(e = ue.visualDuration, t = ue.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: s },
    {
      stiffness: l,
      damping: c,
      mass: u,
      duration: f,
      velocity: h,
      isResolvedFromDuration: g,
    } = $C({ ...n, velocity: -Xt(n.velocity || 0) }),
    x = h || 0,
    y = c / (2 * Math.sqrt(l * u)),
    b = o - s,
    m = Xt(Math.sqrt(l / u)),
    p = Math.abs(b) < 5;
  r || (r = p ? ue.restSpeed.granular : ue.restSpeed.default),
    i || (i = p ? ue.restDelta.granular : ue.restDelta.default);
  let v;
  if (y < 1) {
    const C = Zc(m, y);
    v = (k) => {
      const A = Math.exp(-y * m * k);
      return (
        o - A * (((x + y * m * b) / C) * Math.sin(C * k) + b * Math.cos(C * k))
      );
    };
  } else if (y === 1) v = (C) => o - Math.exp(-m * C) * (b + (x + m * b) * C);
  else {
    const C = m * Math.sqrt(y * y - 1);
    v = (k) => {
      const A = Math.exp(-y * m * k),
        E = Math.min(C * k, 300);
      return (
        o - (A * ((x + y * m * b) * Math.sinh(E) + C * b * Math.cosh(E))) / C
      );
    };
  }
  const S = {
    calculatedDuration: (g && f) || null,
    next: (C) => {
      const k = v(C);
      if (g) a.done = C >= f;
      else {
        let A = 0;
        y < 1 && (A = C === 0 ? qt(x) : o0(v, C, k));
        const E = Math.abs(A) <= r,
          I = Math.abs(o - k) <= i;
        a.done = E && I;
      }
      return (a.value = a.done ? o : k), a;
    },
    toString: () => {
      const C = Math.min(Ev(S), Wc),
        k = Av((A) => S.next(C * A).value, C, 30);
      return C + "ms " + k;
    },
  };
  return S;
}
function ip({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: u,
}) {
  const f = e[0],
    h = { done: !1, value: f },
    g = (E) => (a !== void 0 && E < a) || (l !== void 0 && E > l),
    x = (E) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - E) < Math.abs(l - E)
          ? a
          : l;
  let y = n * t;
  const b = f + y,
    m = o === void 0 ? b : o(b);
  m !== b && (y = m - f);
  const p = (E) => -y * Math.exp(-E / r),
    v = (E) => m + p(E),
    S = (E) => {
      const I = p(E),
        N = v(E);
      (h.done = Math.abs(I) <= c), (h.value = h.done ? m : N);
    };
  let C, k;
  const A = (E) => {
    g(h.value) &&
      ((C = E),
      (k = a0({
        keyframes: [h.value, x(h.value)],
        velocity: o0(v, E, h.value),
        damping: i,
        stiffness: s,
        restDelta: c,
        restSpeed: u,
      })));
  };
  return (
    A(0),
    {
      calculatedDuration: null,
      next: (E) => {
        let I = !1;
        return (
          !k && C === void 0 && ((I = !0), S(E), A(E)),
          C !== void 0 && E >= C ? k.next(E - C) : (!I && S(E), h)
        );
      },
    }
  );
}
const WC = Os(0.42, 0, 1, 1),
  KC = Os(0, 0, 0.58, 1),
  l0 = Os(0.42, 0, 0.58, 1),
  GC = (e) => Array.isArray(e) && typeof e[0] != "number",
  sp = {
    linear: Xe,
    easeIn: WC,
    easeInOut: l0,
    easeOut: KC,
    circIn: Bd,
    circInOut: Uv,
    circOut: Bv,
    backIn: zd,
    backInOut: Vv,
    backOut: Ov,
    anticipate: zv,
  },
  op = (e) => {
    if (Ld(e)) {
      Hc(e.length === 4);
      const [t, n, r, i] = e;
      return Os(t, n, r, i);
    } else if (typeof e == "string") return Hc(sp[e] !== void 0), sp[e];
    return e;
  };
function QC(e, t, n) {
  const r = [],
    i = n || s0,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || Xe : t;
      a = Vs(l, a);
    }
    r.push(a);
  }
  return r;
}
function YC(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((Hc(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = QC(t, r, i),
    l = a.length,
    c = (u) => {
      if (o && u < e[0]) return t[0];
      let f = 0;
      if (l > 1) for (; f < e.length - 2 && !(u < e[f + 1]); f++);
      const h = ai(e[f], e[f + 1], u);
      return a[f](h);
    };
  return n ? (u) => c(nn(e[0], e[s - 1], u)) : c;
}
function qC(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = ai(0, t, r);
    e.push(oe(n, 1, i));
  }
}
function XC(e) {
  const t = [0];
  return qC(t, e.length - 1), t;
}
function JC(e, t) {
  return e.map((n) => n * t);
}
function ZC(e, t) {
  return e.map(() => t || l0).splice(0, e.length - 1);
}
function da({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = GC(r) ? r.map(op) : op(r),
    s = { done: !1, value: t[0] },
    o = JC(n && n.length === t.length ? n : XC(t), e),
    a = YC(o, t, { ease: Array.isArray(i) ? i : ZC(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((s.value = a(l)), (s.done = l >= e), s),
  };
}
const ek = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => ne.update(t, !0),
      stop: () => Mn(t),
      now: () => (be.isProcessing ? be.timestamp : _t.now()),
    };
  },
  tk = { decay: ip, inertia: ip, tween: da, keyframes: da, spring: a0 },
  nk = (e) => e / 100;
class Gd extends r0 {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options,
      o = (i == null ? void 0 : i.KeyframeResolver) || Wd,
      a = (l, c) => this.onKeyframesResolved(l, c);
    (this.resolver = new o(s, a, n, r, i)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes),
        );
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: s,
        velocity: o = 0,
      } = this.options,
      a = Rd(n) ? n : tk[n] || da;
    let l, c;
    a !== da &&
      typeof t[0] != "number" &&
      ((l = Vs(nk, s0(t[0], t[1]))), (t = [0, 100]));
    const u = a({ ...this.options, keyframes: t });
    s === "mirror" &&
      (c = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      u.calculatedDuration === null && (u.calculatedDuration = Ev(u));
    const { calculatedDuration: f } = u,
      h = f + i,
      g = h * (r + 1) - i;
    return {
      generator: u,
      mirroredGenerator: c,
      mapPercentToKeyframes: l,
      calculatedDuration: f,
      resolvedDuration: h,
      totalDuration: g,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: E } = this.options;
      return { done: !0, value: E[E.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: s,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: c,
      totalDuration: u,
      resolvedDuration: f,
    } = r;
    if (this.startTime === null) return s.next(0);
    const {
      delay: h,
      repeat: g,
      repeatType: x,
      repeatDelay: y,
      onUpdate: b,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - u / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const m = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
      p = this.speed >= 0 ? m < 0 : m > u;
    (this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = u);
    let v = this.currentTime,
      S = s;
    if (g) {
      const E = Math.min(this.currentTime, u) / f;
      let I = Math.floor(E),
        N = E % 1;
      !N && E >= 1 && (N = 1),
        N === 1 && I--,
        (I = Math.min(I, g + 1)),
        !!(I % 2) &&
          (x === "reverse"
            ? ((N = 1 - N), y && (N -= y / f))
            : x === "mirror" && (S = o)),
        (v = nn(0, 1, N) * f);
    }
    const C = p ? { done: !1, value: l[0] } : S.next(v);
    a && (C.value = a(C.value));
    let { done: k } = C;
    !p &&
      c !== null &&
      (k = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const A =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && k));
    return (
      A && i !== void 0 && (C.value = $a(l, this.options, i)),
      b && b(C.value),
      A && this.finish(),
      C
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Xt(t.calculatedDuration) : 0;
  }
  get time() {
    return Xt(this.currentTime);
  }
  set time(t) {
    (t = qt(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = Xt(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = ek, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))), n && n();
    const i = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = i)
        : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const rk = new Set(["opacity", "clipPath", "filter", "transform"]);
function ik(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a = "easeInOut",
    times: l,
  } = {},
) {
  const c = { [t]: n };
  l && (c.offset = l);
  const u = Tv(a, i);
  return (
    Array.isArray(u) && (c.easing = u),
    e.animate(c, {
      delay: r,
      duration: i,
      easing: Array.isArray(u) ? "linear" : u,
      fill: "both",
      iterations: s + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
const sk = xd(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  fa = 10,
  ok = 2e4;
function ak(e) {
  return Rd(e.type) || e.type === "spring" || !Pv(e.ease);
}
function lk(e, t) {
  const n = new Gd({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < ok; ) (r = n.sample(s)), i.push(r.value), (s += fa);
  return { times: void 0, keyframes: i, duration: s - fa, ease: "linear" };
}
const c0 = { anticipate: zv, backInOut: Vv, circInOut: Uv };
function ck(e) {
  return e in c0;
}
class ap extends r0 {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options;
    (this.resolver = new n0(
      s,
      (o, a) => this.onKeyframesResolved(o, a),
      n,
      r,
      i,
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let {
      duration: r = 300,
      times: i,
      ease: s,
      type: o,
      motionValue: a,
      name: l,
      startTime: c,
    } = this.options;
    if (!a.owner || !a.owner.current) return !1;
    if (
      (typeof s == "string" && ca() && ck(s) && (s = c0[s]), ak(this.options))
    ) {
      const {
          onComplete: f,
          onUpdate: h,
          motionValue: g,
          element: x,
          ...y
        } = this.options,
        b = lk(t, y);
      (t = b.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (r = b.duration),
        (i = b.times),
        (s = b.ease),
        (o = "keyframes");
    }
    const u = ik(a.owner.current, l, t, {
      ...this.options,
      duration: r,
      times: i,
      ease: s,
    });
    return (
      (u.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? ($h(u, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (u.onfinish = () => {
            const { onComplete: f } = this.options;
            a.set($a(t, this.options, n)),
              f && f(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: u, duration: r, times: i, type: o, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return Xt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return Xt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = qt(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Xe;
      const { animation: r } = n;
      $h(r, t);
    }
    return Xe;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: s,
      ease: o,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: c,
          onUpdate: u,
          onComplete: f,
          element: h,
          ...g
        } = this.options,
        x = new Gd({
          ...g,
          keyframes: r,
          duration: i,
          type: s,
          ease: o,
          times: a,
          isGenerator: !0,
        }),
        y = qt(this.time);
      c.setWithVelocity(x.sample(y - fa).value, x.sample(y).value, fa);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: s,
      damping: o,
      type: a,
    } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: l, transformTemplate: c } = n.owner.getProps();
    return (
      sk() &&
      r &&
      rk.has(r) &&
      !l &&
      !c &&
      !i &&
      s !== "mirror" &&
      o !== 0 &&
      a !== "inertia"
    );
  }
}
const uk = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  dk = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  fk = { type: "keyframes", duration: 0.8 },
  hk = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  pk = (e, { keyframes: t }) =>
    t.length > 2
      ? fk
      : mr.has(e)
        ? e.startsWith("scale")
          ? dk(t[1])
          : uk
        : hk;
function mk({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...u
}) {
  return !!Object.keys(u).length;
}
const Qd =
  (e, t, n, r = {}, i, s) =>
  (o) => {
    const a = Md(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: c = 0 } = r;
    c = c - qt(l);
    let u = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -c,
      onUpdate: (h) => {
        t.set(h), a.onUpdate && a.onUpdate(h);
      },
      onComplete: () => {
        o(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: s ? void 0 : i,
    };
    mk(a) || (u = { ...u, ...pk(e, u) }),
      u.duration && (u.duration = qt(u.duration)),
      u.repeatDelay && (u.repeatDelay = qt(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from);
    let f = !1;
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        ((u.duration = 0), u.delay === 0 && (f = !0)),
      f && !s && t.get() !== void 0)
    ) {
      const h = $a(u.keyframes, a);
      if (h !== void 0)
        return (
          ne.update(() => {
            u.onUpdate(h), u.onComplete();
          }),
          new LS([])
        );
    }
    return !s && ap.supports(u) ? new ap(u) : new Gd(u);
  };
function gk({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function u0(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (o = r);
  const c = [],
    u = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const h = e.getValue(
        f,
        (s = e.latestValues[f]) !== null && s !== void 0 ? s : null,
      ),
      g = l[f];
    if (g === void 0 || (u && gk(u, f))) continue;
    const x = { delay: n, ...Md(o || {}, f) };
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const m = Rv(e);
      if (m) {
        const p = window.MotionHandoffAnimation(m, f, ne);
        p !== null && ((x.startTime = p), (y = !0));
      }
    }
    Gc(e, f),
      h.start(
        Qd(f, h, g, e.shouldReduceMotion && Dv.has(f) ? { type: !1 } : x, e, y),
      );
    const b = h.animation;
    b && c.push(b);
  }
  return (
    a &&
      Promise.all(c).then(() => {
        ne.update(() => {
          a && YS(e, a);
        });
      }),
    c
  );
}
function eu(e, t, n = {}) {
  var r;
  const i = Ha(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0,
  );
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(u0(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: f,
              staggerDirection: h,
            } = s;
            return yk(e, t, u + c, f, h, n);
          }
        : () => Promise.resolve(),
    { when: l } = s;
  if (l) {
    const [c, u] = l === "beforeChildren" ? [o, a] : [a, o];
    return c().then(() => u());
  } else return Promise.all([o(), a(n.delay)]);
}
function yk(e, t, n = 0, r = 0, i = 1, s) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return (
    Array.from(e.variantChildren)
      .sort(vk)
      .forEach((c, u) => {
        c.notify("AnimationStart", t),
          o.push(
            eu(c, t, { ...s, delay: n + l(u) }).then(() =>
              c.notify("AnimationComplete", t),
            ),
          );
      }),
    Promise.all(o)
  );
}
function vk(e, t) {
  return e.sortNodePosition(t);
}
function xk(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => eu(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = eu(e, t, n);
  else {
    const i = typeof t == "function" ? Ha(e, t, n.custom) : t;
    r = Promise.all(u0(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const wk = bd.length;
function d0(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? d0(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < wk; n++) {
    const r = bd[n],
      i = e.props[r];
    (ws(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const bk = [...wd].reverse(),
  Sk = wd.length;
function Ck(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => xk(e, n, r)));
}
function kk(e) {
  let t = Ck(e),
    n = lp(),
    r = !0;
  const i = (l) => (c, u) => {
    var f;
    const h = Ha(
      e,
      u,
      l === "exit"
        ? (f = e.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0,
    );
    if (h) {
      const { transition: g, transitionEnd: x, ...y } = h;
      c = { ...c, ...y, ...x };
    }
    return c;
  };
  function s(l) {
    t = l(e);
  }
  function o(l) {
    const { props: c } = e,
      u = d0(e.parent) || {},
      f = [],
      h = new Set();
    let g = {},
      x = 1 / 0;
    for (let b = 0; b < Sk; b++) {
      const m = bk[b],
        p = n[m],
        v = c[m] !== void 0 ? c[m] : u[m],
        S = ws(v),
        C = m === l ? p.isActive : null;
      C === !1 && (x = b);
      let k = v === u[m] && v !== c[m] && S;
      if (
        (k && r && e.manuallyAnimateOnMount && (k = !1),
        (p.protectedKeys = { ...g }),
        (!p.isActive && C === null) ||
          (!v && !p.prevProp) ||
          Ba(v) ||
          typeof v == "boolean")
      )
        continue;
      const A = Ek(p.prevProp, v);
      let E = A || (m === l && p.isActive && !k && S) || (b > x && S),
        I = !1;
      const N = Array.isArray(v) ? v : [v];
      let z = N.reduce(i(m), {});
      C === !1 && (z = {});
      const { prevResolvedValues: F = {} } = p,
        K = { ...F, ...z },
        M = (O) => {
          (E = !0),
            h.has(O) && ((I = !0), h.delete(O)),
            (p.needsAnimating[O] = !0);
          const P = e.getValue(O);
          P && (P.liveStyle = !1);
        };
      for (const O in K) {
        const P = z[O],
          D = F[O];
        if (g.hasOwnProperty(O)) continue;
        let L = !1;
        $c(P) && $c(D) ? (L = !kv(P, D)) : (L = P !== D),
          L
            ? P != null
              ? M(O)
              : h.add(O)
            : P !== void 0 && h.has(O)
              ? M(O)
              : (p.protectedKeys[O] = !0);
      }
      (p.prevProp = v),
        (p.prevResolvedValues = z),
        p.isActive && (g = { ...g, ...z }),
        r && e.blockInitialAnimation && (E = !1),
        E &&
          (!(k && A) || I) &&
          f.push(...N.map((O) => ({ animation: O, options: { type: m } })));
    }
    if (h.size) {
      const b = {};
      h.forEach((m) => {
        const p = e.getBaseTarget(m),
          v = e.getValue(m);
        v && (v.liveStyle = !0), (b[m] = p ?? null);
      }),
        f.push({ animation: b });
    }
    let y = !!f.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (y = !1),
      (r = !1),
      y ? t(f) : Promise.resolve()
    );
  }
  function a(l, c) {
    var u;
    if (n[l].isActive === c) return Promise.resolve();
    (u = e.variantChildren) === null ||
      u === void 0 ||
      u.forEach((h) => {
        var g;
        return (g = h.animationState) === null || g === void 0
          ? void 0
          : g.setActive(l, c);
      }),
      (n[l].isActive = c);
    const f = o(l);
    for (const h in n) n[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      (n = lp()), (r = !0);
    },
  };
}
function Ek(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !kv(t, e) : !1;
}
function Hn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function lp() {
  return {
    animate: Hn(!0),
    whileInView: Hn(),
    whileHover: Hn(),
    whileTap: Hn(),
    whileDrag: Hn(),
    whileFocus: Hn(),
    exit: Hn(),
  };
}
class Bn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class Ak extends Bn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = kk(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ba(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let Pk = 0;
class Tk extends Bn {
  constructor() {
    super(...arguments), (this.id = Pk++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const jk = { animation: { Feature: Ak }, exit: { Feature: Tk } };
function ks(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function zs(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const Nk = (e) => (t) => Fd(t) && e(t, zs(t));
function Zi(e, t, n, r) {
  return ks(e, t, Nk(n), r);
}
const cp = (e, t) => Math.abs(e - t);
function Ik(e, t) {
  const n = cp(e.x, t.x),
    r = cp(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class f0 {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = Ol(this.lastMoveEventInfo, this.history),
          h = this.startEvent !== null,
          g = Ik(f.offset, { x: 0, y: 0 }) >= 3;
        if (!h && !g) return;
        const { point: x } = f,
          { timestamp: y } = be;
        this.history.push({ ...x, timestamp: y });
        const { onStart: b, onMove: m } = this.handlers;
        h ||
          (b && b(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, h) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = _l(h, this.transformPagePoint)),
          ne.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, h) => {
        this.end();
        const { onEnd: g, onSessionEnd: x, resumeAnimation: y } = this.handlers;
        if (
          (this.dragSnapToOrigin && y && y(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const b = Ol(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : _l(h, this.transformPagePoint),
          this.history,
        );
        this.startEvent && g && g(f, b), x && x(f, b);
      }),
      !Fd(t))
    )
      return;
    (this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const o = zs(t),
      a = _l(o, this.transformPagePoint),
      { point: l } = a,
      { timestamp: c } = be;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: u } = n;
    u && u(t, Ol(a, this.history)),
      (this.removeListeners = Vs(
        Zi(this.contextWindow, "pointermove", this.handlePointerMove),
        Zi(this.contextWindow, "pointerup", this.handlePointerUp),
        Zi(this.contextWindow, "pointercancel", this.handlePointerUp),
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Mn(this.updatePoint);
  }
}
function _l(e, t) {
  return t ? { point: t(e.point) } : e;
}
function up(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ol({ point: e }, t) {
  return {
    point: e,
    delta: up(e, h0(t)),
    offset: up(e, Dk(t)),
    velocity: Mk(t, 0.1),
  };
}
function Dk(e) {
  return e[0];
}
function h0(e) {
  return e[e.length - 1];
}
function Mk(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = h0(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > qt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = Xt(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
const p0 = 1e-4,
  Rk = 1 - p0,
  Lk = 1 + p0,
  m0 = 0.01,
  Fk = 0 - m0,
  _k = 0 + m0;
function et(e) {
  return e.max - e.min;
}
function Ok(e, t, n) {
  return Math.abs(e - t) <= n;
}
function dp(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = oe(t.min, t.max, e.origin)),
    (e.scale = et(n) / et(t)),
    (e.translate = oe(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= Rk && e.scale <= Lk) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= Fk && e.translate <= _k) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function es(e, t, n, r) {
  dp(e.x, t.x, n.x, r ? r.originX : void 0),
    dp(e.y, t.y, n.y, r ? r.originY : void 0);
}
function fp(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + et(t));
}
function Vk(e, t, n) {
  fp(e.x, t.x, n.x), fp(e.y, t.y, n.y);
}
function hp(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + et(t));
}
function ts(e, t, n) {
  hp(e.x, t.x, n.x), hp(e.y, t.y, n.y);
}
function zk(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? oe(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? oe(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function pp(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function Bk(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: pp(e.x, n, i), y: pp(e.y, t, r) };
}
function mp(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Uk(e, t) {
  return { x: mp(e.x, t.x), y: mp(e.y, t.y) };
}
function Hk(e, t) {
  let n = 0.5;
  const r = et(e),
    i = et(t);
  return (
    i > r
      ? (n = ai(t.min, t.max - r, e.min))
      : r > i && (n = ai(e.min, e.max - i, t.min)),
    nn(0, 1, n)
  );
}
function $k(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const tu = 0.35;
function Wk(e = tu) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = tu),
    { x: gp(e, "left", "right"), y: gp(e, "top", "bottom") }
  );
}
function gp(e, t, n) {
  return { min: yp(e, t), max: yp(e, n) };
}
function yp(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const vp = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Mr = () => ({ x: vp(), y: vp() }),
  xp = () => ({ min: 0, max: 0 }),
  fe = () => ({ x: xp(), y: xp() });
function ot(e) {
  return [e("x"), e("y")];
}
function g0({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function Kk({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Gk(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Vl(e) {
  return e === void 0 || e === 1;
}
function nu({ scale: e, scaleX: t, scaleY: n }) {
  return !Vl(e) || !Vl(t) || !Vl(n);
}
function Kn(e) {
  return (
    nu(e) ||
    y0(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function y0(e) {
  return wp(e.x) || wp(e.y);
}
function wp(e) {
  return e && e !== "0%";
}
function ha(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function bp(e, t, n, r, i) {
  return i !== void 0 && (e = ha(e, i, r)), ha(e, n, r) + t;
}
function ru(e, t = 0, n = 1, r, i) {
  (e.min = bp(e.min, t, n, r, i)), (e.max = bp(e.max, t, n, r, i));
}
function v0(e, { x: t, y: n }) {
  ru(e.x, t.translate, t.scale, t.originPoint),
    ru(e.y, n.translate, n.scale, n.originPoint);
}
const Sp = 0.999999999999,
  Cp = 1.0000000000001;
function Qk(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    (s = n[a]), (o = s.projectionDelta);
    const { visualElement: l } = s.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        Lr(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), v0(e, o)),
      r && Kn(s.latestValues) && Lr(e, s.latestValues));
  }
  t.x < Cp && t.x > Sp && (t.x = 1), t.y < Cp && t.y > Sp && (t.y = 1);
}
function Rr(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function kp(e, t, n, r, i = 0.5) {
  const s = oe(e.min, e.max, i);
  ru(e, t, n, s, r);
}
function Lr(e, t) {
  kp(e.x, t.x, t.scaleX, t.scale, t.originX),
    kp(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function x0(e, t) {
  return g0(Gk(e.getBoundingClientRect(), t));
}
function Yk(e, t, n) {
  const r = x0(e, n),
    { scroll: i } = t;
  return i && (Rr(r.x, i.offset.x), Rr(r.y, i.offset.y)), r;
}
const w0 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  qk = new WeakMap();
class Xk {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = fe()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (u) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(zs(u).point);
      },
      s = (u, f) => {
        const { drag: h, dragPropagation: g, onDragStart: x } = this.getProps();
        if (
          h &&
          !g &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = $S(h)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          ot((b) => {
            let m = this.getAxisMotionValue(b).get() || 0;
            if (Ft.test(m)) {
              const { projection: p } = this.visualElement;
              if (p && p.layout) {
                const v = p.layout.layoutBox[b];
                v && (m = et(v) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[b] = m;
          }),
          x && ne.postRender(() => x(u, f)),
          Gc(this.visualElement, "transform");
        const { animationState: y } = this.visualElement;
        y && y.setActive("whileDrag", !0);
      },
      o = (u, f) => {
        const {
          dragPropagation: h,
          dragDirectionLock: g,
          onDirectionLock: x,
          onDrag: y,
        } = this.getProps();
        if (!h && !this.openDragLock) return;
        const { offset: b } = f;
        if (g && this.currentDirection === null) {
          (this.currentDirection = Jk(b)),
            this.currentDirection !== null && x && x(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, b),
          this.updateAxis("y", f.point, b),
          this.visualElement.render(),
          y && y(u, f);
      },
      a = (u, f) => this.stop(u, f),
      l = () =>
        ot((u) => {
          var f;
          return (
            this.getAnimationState(u) === "paused" &&
            ((f = this.getAxisMotionValue(u).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new f0(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: o,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        contextWindow: w0(this.visualElement),
      },
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && ne.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !uo(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = zk(o, this.constraints[t], this.elastic[t])),
      s.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      s = this.constraints;
    n && Ir(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
        ? (this.constraints = Bk(i.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = Wk(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        ot((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = $k(i.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Ir(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = Yk(r, i.root, this.visualElement.getTransformPagePoint());
    let o = Uk(i.layout.layoutBox, s);
    if (n) {
      const a = n(Kk(o));
      (this.hasMutatedConstraints = !!a), a && (o = g0(a));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      c = ot((u) => {
        if (!uo(u, n, this.currentDirection)) return;
        let f = (l && l[u]) || {};
        o && (f = { min: 0, max: 0 });
        const h = i ? 200 : 1e6,
          g = i ? 40 : 1e7,
          x = {
            type: "inertia",
            velocity: r ? t[u] : 0,
            bounceStiffness: h,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...f,
          };
        return this.startAxisValueAnimation(u, x);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Gc(this.visualElement, t), r.start(Qd(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    ot((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    ot((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    ot((n) => {
      const { drag: r } = this.getProps();
      if (!uo(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n];
        s.set(t[n] - oe(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Ir(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    ot((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[o] = Hk({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      ot((o) => {
        if (!uo(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: c } = this.constraints[o];
        a.set(oe(l, c, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    qk.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Zi(t, "pointerdown", (l) => {
        const { drag: c, dragListener: u = !0 } = this.getProps();
        c && u && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Ir(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      ne.read(r);
    const o = ks(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (ot((u) => {
              const f = this.getAxisMotionValue(u);
              f &&
                ((this.originPoint[u] += l[u].translate),
                f.set(f.get() + l[u].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      o(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = tu,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function uo(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Jk(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class Zk extends Bn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Xe),
      (this.removeListeners = Xe),
      (this.controls = new Xk(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Xe);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Ep = (e) => (t, n) => {
  e && ne.postRender(() => e(t, n));
};
class eE extends Bn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Xe);
  }
  onPointerDown(t) {
    this.session = new f0(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: w0(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Ep(t),
      onStart: Ep(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && ne.postRender(() => i(s, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Zi(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Io = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Ap(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Mi = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (_.test(e)) e = parseFloat(e);
        else return e;
      const n = Ap(e, t.target.x),
        r = Ap(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  tE = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Rn.parse(e);
      if (i.length > 5) return r;
      const s = Rn.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + o] /= a), (i[1 + o] /= l);
      const c = oe(a, l, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= c),
        typeof i[3 + o] == "number" && (i[3 + o] /= c),
        s(i)
      );
    },
  };
class nE extends w.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    CS(rE),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Io.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = s),
        i || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              ne.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Cd.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function b0(e) {
  const [t, n] = iv(),
    r = w.useContext(md);
  return d.jsx(nE, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: w.useContext(dv),
    isPresent: t,
    safeToRemove: n,
  });
}
const rE = {
  borderRadius: {
    ...Mi,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: Mi,
  borderTopRightRadius: Mi,
  borderBottomLeftRadius: Mi,
  borderBottomRightRadius: Mi,
  boxShadow: tE,
};
function iE(e, t, n) {
  const r = Ne(e) ? e : Ss(e);
  return r.start(Qd("", r, t, n)), r.animation;
}
function sE(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const oE = (e, t) => e.depth - t.depth;
class aE {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    _d(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Od(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(oE),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function lE(e, t) {
  const n = _t.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (Mn(r), e(s - t));
    };
  return ne.read(r, !0), () => Mn(r);
}
const S0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  cE = S0.length,
  Pp = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Tp = (e) => typeof e == "number" || _.test(e);
function uE(e, t, n, r, i, s) {
  i
    ? ((e.opacity = oe(0, n.opacity !== void 0 ? n.opacity : 1, dE(r))),
      (e.opacityExit = oe(t.opacity !== void 0 ? t.opacity : 1, 0, fE(r))))
    : s &&
      (e.opacity = oe(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r,
      ));
  for (let o = 0; o < cE; o++) {
    const a = `border${S0[o]}Radius`;
    let l = jp(t, a),
      c = jp(n, a);
    if (l === void 0 && c === void 0) continue;
    l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || Tp(l) === Tp(c)
        ? ((e[a] = Math.max(oe(Pp(l), Pp(c), r), 0)),
          (Ft.test(c) || Ft.test(l)) && (e[a] += "%"))
        : (e[a] = c);
  }
  (t.rotate || n.rotate) && (e.rotate = oe(t.rotate || 0, n.rotate || 0, r));
}
function jp(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const dE = C0(0, 0.5, Bv),
  fE = C0(0.5, 0.95, Xe);
function C0(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(ai(e, t, r)));
}
function Np(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function st(e, t) {
  Np(e.x, t.x), Np(e.y, t.y);
}
function Ip(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Dp(e, t, n, r, i) {
  return (
    (e -= t), (e = ha(e, 1 / n, r)), i !== void 0 && (e = ha(e, 1 / i, r)), e
  );
}
function hE(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (Ft.test(t) &&
      ((t = parseFloat(t)), (t = oe(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = oe(s.min, s.max, r);
  e === s && (a -= t),
    (e.min = Dp(e.min, t, n, a, i)),
    (e.max = Dp(e.max, t, n, a, i));
}
function Mp(e, t, [n, r, i], s, o) {
  hE(e, t[n], t[r], t[i], t.scale, s, o);
}
const pE = ["x", "scaleX", "originX"],
  mE = ["y", "scaleY", "originY"];
function Rp(e, t, n, r) {
  Mp(e.x, t, pE, n ? n.x : void 0, r ? r.x : void 0),
    Mp(e.y, t, mE, n ? n.y : void 0, r ? r.y : void 0);
}
function Lp(e) {
  return e.translate === 0 && e.scale === 1;
}
function k0(e) {
  return Lp(e.x) && Lp(e.y);
}
function Fp(e, t) {
  return e.min === t.min && e.max === t.max;
}
function gE(e, t) {
  return Fp(e.x, t.x) && Fp(e.y, t.y);
}
function _p(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function E0(e, t) {
  return _p(e.x, t.x) && _p(e.y, t.y);
}
function Op(e) {
  return et(e.x) / et(e.y);
}
function Vp(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class yE {
  constructor() {
    this.members = [];
  }
  add(t) {
    _d(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Od(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function vE(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: c,
      rotate: u,
      rotateX: f,
      rotateY: h,
      skewX: g,
      skewY: x,
    } = n;
    c && (r = `perspective(${c}px) ${r}`),
      u && (r += `rotate(${u}deg) `),
      f && (r += `rotateX(${f}deg) `),
      h && (r += `rotateY(${h}deg) `),
      g && (r += `skewX(${g}deg) `),
      x && (r += `skewY(${x}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const Gn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Ui = typeof window < "u" && window.MotionDebug !== void 0,
  zl = ["", "X", "Y", "Z"],
  xE = { visibility: "hidden" },
  zp = 1e3;
let wE = 0;
function Bl(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function A0(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Rv(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", ne, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && A0(r);
}
function P0({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      (this.id = wE++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            Ui &&
              (Gn.totalNodes =
                Gn.resolvedTargetDeltas =
                Gn.recalculatedProjection =
                  0),
            this.nodes.forEach(CE),
            this.nodes.forEach(TE),
            this.nodes.forEach(jE),
            this.nodes.forEach(kE),
            Ui && window.MotionDebug.record(Gn);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new aE());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new Vd()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = sE(o)), (this.instance = o);
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (c || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const h = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = lE(h, 250)),
            Io.hasAnimatedSinceResize &&
              ((Io.hasAnimatedSinceResize = !1), this.nodes.forEach(Up));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          u &&
          (l || c) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: h,
              hasRelativeTargetChanged: g,
              layout: x,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const y =
                  this.options.transition || u.getDefaultTransition() || RE,
                { onLayoutAnimationStart: b, onLayoutAnimationComplete: m } =
                  u.getProps(),
                p = !this.targetLayout || !E0(this.targetLayout, x) || g,
                v = !h && g;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                v ||
                (h && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, v);
                const S = { ...Md(y, "layout"), onPlay: b, onComplete: m };
                (u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((S.delay = 0), (S.type = !1)),
                  this.startAnimation(S);
              } else
                h || Up(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = x;
            },
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Mn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(NE),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          A0(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const f = this.path[u];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Bp);
        return;
      }
      this.isUpdating || this.nodes.forEach(AE),
        (this.isUpdating = !1),
        this.nodes.forEach(PE),
        this.nodes.forEach(bE),
        this.nodes.forEach(SE),
        this.clearAllSnapshots();
      const a = _t.now();
      (be.delta = nn(0, 1e3 / 60, a - be.timestamp)),
        (be.timestamp = a),
        (be.isProcessing = !0),
        Il.update.process(be),
        Il.preRender.process(be),
        Il.render.process(be),
        (be.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Cd.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(EE), this.sharedNodes.forEach(IE);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        ne.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ne.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = fe()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0,
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !k0(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        u = c !== this.prevTransformTemplateValue;
      o &&
        (a || Kn(this.latestValues) || u) &&
        (i(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        LE(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var o;
      const { visualElement: a } = this.options;
      if (!a) return fe();
      const l = a.measureViewportBox();
      if (
        !(
          ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
          this.path.some(FE)
        )
      ) {
        const { scroll: u } = this.root;
        u && (Rr(l.x, u.offset.x), Rr(l.y, u.offset.y));
      }
      return l;
    }
    removeElementScroll(o) {
      var a;
      const l = fe();
      if (
        (st(l, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c],
          { scroll: f, options: h } = u;
        u !== this.root &&
          f &&
          h.layoutScroll &&
          (f.wasRoot && st(l, o), Rr(l.x, f.offset.x), Rr(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(o, a = !1) {
      const l = fe();
      st(l, o);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          Lr(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          Kn(u.latestValues) && Lr(l, u.latestValues);
      }
      return Kn(this.latestValues) && Lr(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = fe();
      st(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Kn(c.latestValues)) continue;
        nu(c.latestValues) && c.updateSnapshot();
        const u = fe(),
          f = c.measurePageBox();
        st(u, f),
          Rp(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return Kn(this.latestValues) && Rp(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== be.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (
        !(
          o ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: f, layoutId: h } = this.options;
      if (!(!this.layout || !(f || h))) {
        if (
          ((this.resolvedRelativeTargetAt = be.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = fe()),
              (this.relativeTargetOrigin = fe()),
              ts(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox,
              ),
              st(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = fe()), (this.targetWithTransforms = fe())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                Vk(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : st(this.target, this.layout.layoutBox),
                  v0(this.target, this.targetDelta))
                : st(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = g),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = fe()),
                (this.relativeTargetOrigin = fe()),
                ts(this.relativeTargetOrigin, this.target, g.target),
                st(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Ui && Gn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          nu(this.parent.latestValues) ||
          y0(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (c = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === be.timestamp && (c = !1),
        c)
      )
        return;
      const { layout: u, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || f))
      )
        return;
      st(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x,
        g = this.treeScale.y;
      Qk(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = fe()));
      const { target: x } = a;
      if (!x) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Ip(this.prevProjectionDelta.x, this.projectionDelta.x),
          Ip(this.prevProjectionDelta.y, this.projectionDelta.y)),
        es(this.projectionDelta, this.layoutCorrected, x, this.latestValues),
        (this.treeScale.x !== h ||
          this.treeScale.y !== g ||
          !Vp(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Vp(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", x)),
        Ui && Gn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        o)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Mr()),
        (this.projectionDelta = Mr()),
        (this.projectionDeltaWithTransform = Mr());
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        c = l ? l.latestValues : {},
        u = { ...this.latestValues },
        f = Mr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const h = fe(),
        g = l ? l.source : void 0,
        x = this.layout ? this.layout.source : void 0,
        y = g !== x,
        b = this.getStack(),
        m = !b || b.members.length <= 1,
        p = !!(y && !m && this.options.crossfade === !0 && !this.path.some(ME));
      this.animationProgress = 0;
      let v;
      (this.mixTargetDelta = (S) => {
        const C = S / 1e3;
        Hp(f.x, o.x, C),
          Hp(f.y, o.y, C),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (ts(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            DE(this.relativeTarget, this.relativeTargetOrigin, h, C),
            v && gE(this.relativeTarget, v) && (this.isProjectionDirty = !1),
            v || (v = fe()),
            st(v, this.relativeTarget)),
          y &&
            ((this.animationValues = u), uE(u, c, this.latestValues, C, p, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Mn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ne.update(() => {
          (Io.hasAnimatedSinceResize = !0),
            (this.currentAnimation = iE(0, zp, {
              ...o,
              onUpdate: (a) => {
                this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(zp),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: c,
        latestValues: u,
      } = o;
      if (!(!a || !l || !c)) {
        if (
          this !== o &&
          this.layout &&
          c &&
          T0(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || fe();
          const f = et(this.layout.layoutBox.x);
          (l.x.min = o.target.x.min), (l.x.max = l.x.min + f);
          const h = et(this.layout.layoutBox.y);
          (l.y.min = o.target.y.min), (l.y.max = l.y.min + h);
        }
        st(a, l),
          Lr(a, u),
          es(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new yE()),
        this.sharedNodes.get(o).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const c = {};
      l.z && Bl("z", o, c, this.animationValues);
      for (let u = 0; u < zl.length; u++)
        Bl(`rotate${zl[u]}`, o, c, this.animationValues),
          Bl(`skew${zl[u]}`, o, c, this.animationValues);
      o.render();
      for (const u in c)
        o.setStaticValue(u, c[u]),
          this.animationValues && (this.animationValues[u] = c[u]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return xE;
      const c = { visibility: "" },
        u = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ""),
          (c.pointerEvents = jo(o == null ? void 0 : o.pointerEvents) || ""),
          (c.transform = u ? u(this.latestValues, "") : "none"),
          c
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const y = {};
        return (
          this.options.layoutId &&
            ((y.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (y.pointerEvents = jo(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !Kn(this.latestValues) &&
            ((y.transform = u ? u({}, "") : "none"), (this.hasProjected = !1)),
          y
        );
      }
      const h = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (c.transform = vE(
          this.projectionDeltaWithTransform,
          this.treeScale,
          h,
        )),
        u && (c.transform = u(h, c.transform));
      const { x: g, y: x } = this.projectionDelta;
      (c.transformOrigin = `${g.origin * 100}% ${x.origin * 100}% 0`),
        f.animationValues
          ? (c.opacity =
              f === this
                ? (l =
                    (a = h.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : h.opacityExit)
          : (c.opacity =
              f === this
                ? h.opacity !== void 0
                  ? h.opacity
                  : ""
                : h.opacityExit !== void 0
                  ? h.opacityExit
                  : 0);
      for (const y in la) {
        if (h[y] === void 0) continue;
        const { correct: b, applyTo: m } = la[y],
          p = c.transform === "none" ? h[y] : b(h[y], f);
        if (m) {
          const v = m.length;
          for (let S = 0; S < v; S++) c[m[S]] = p;
        } else c[y] = p;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents =
            f === this
              ? jo(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Bp),
        this.root.sharedNodes.clear();
    }
  };
}
function bE(e) {
  e.updateLayout();
}
function SE(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = n.source !== e.layout.source;
    s === "size"
      ? ot((f) => {
          const h = o ? n.measuredBox[f] : n.layoutBox[f],
            g = et(h);
          (h.min = r[f].min), (h.max = h.min + g);
        })
      : T0(s, n.layoutBox, r) &&
        ot((f) => {
          const h = o ? n.measuredBox[f] : n.layoutBox[f],
            g = et(r[f]);
          (h.max = h.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + g));
        });
    const a = Mr();
    es(a, r, n.layoutBox);
    const l = Mr();
    o ? es(l, e.applyTransform(i, !0), n.measuredBox) : es(l, r, n.layoutBox);
    const c = !k0(a);
    let u = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: h, layout: g } = f;
        if (h && g) {
          const x = fe();
          ts(x, n.layoutBox, h.layoutBox);
          const y = fe();
          ts(y, r, g.layoutBox),
            E0(x, y) || (u = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = y),
              (e.relativeTargetOrigin = x),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function CE(e) {
  Ui && Gn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function kE(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function EE(e) {
  e.clearSnapshot();
}
function Bp(e) {
  e.clearMeasurements();
}
function AE(e) {
  e.isLayoutDirty = !1;
}
function PE(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Up(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function TE(e) {
  e.resolveTargetDelta();
}
function jE(e) {
  e.calcProjection();
}
function NE(e) {
  e.resetSkewAndRotation();
}
function IE(e) {
  e.removeLeadSnapshot();
}
function Hp(e, t, n) {
  (e.translate = oe(t.translate, 0, n)),
    (e.scale = oe(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function $p(e, t, n, r) {
  (e.min = oe(t.min, n.min, r)), (e.max = oe(t.max, n.max, r));
}
function DE(e, t, n, r) {
  $p(e.x, t.x, n.x, r), $p(e.y, t.y, n.y, r);
}
function ME(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const RE = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Wp = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Kp = Wp("applewebkit/") && !Wp("chrome/") ? Math.round : Xe;
function Gp(e) {
  (e.min = Kp(e.min)), (e.max = Kp(e.max));
}
function LE(e) {
  Gp(e.x), Gp(e.y);
}
function T0(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Ok(Op(t), Op(n), 0.2))
  );
}
function FE(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const _E = P0({
    attachResizeListener: (e, t) => ks(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Ul = { current: void 0 },
  j0 = P0({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Ul.current) {
        const e = new _E({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Ul.current = e);
      }
      return Ul.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  OE = {
    pan: { Feature: eE },
    drag: { Feature: Zk, ProjectionNode: j0, MeasureLayout: b0 },
  };
function Qp(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    s = r[i];
  s && ne.postRender(() => s(t, zs(t)));
}
class VE extends Bn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = VS(
        t,
        (n) => (Qp(this.node, n, "Start"), (r) => Qp(this.node, r, "End")),
      ));
  }
  unmount() {}
}
class zE extends Bn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Vs(
      ks(this.node.current, "focus", () => this.onFocus()),
      ks(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Yp(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    s = r[i];
  s && ne.postRender(() => s(t, zs(t)));
}
class BE extends Bn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = HS(
        t,
        (n) => (
          Yp(this.node, n, "Start"),
          (r, { success: i }) => Yp(this.node, r, i ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const iu = new WeakMap(),
  Hl = new WeakMap(),
  UE = (e) => {
    const t = iu.get(e.target);
    t && t(e);
  },
  HE = (e) => {
    e.forEach(UE);
  };
function $E({ root: e, ...t }) {
  const n = e || document;
  Hl.has(n) || Hl.set(n, {});
  const r = Hl.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(HE, { root: e, ...t })), r[i];
}
function WE(e, t, n) {
  const r = $E(t);
  return (
    iu.set(e, n),
    r.observe(e),
    () => {
      iu.delete(e), r.unobserve(e);
    }
  );
}
const KE = { some: 0, all: 1 };
class GE extends Bn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : KE[i],
      },
      a = (l) => {
        const { isIntersecting: c } = l;
        if (
          this.isInView === c ||
          ((this.isInView = c), s && !c && this.hasEnteredView)
        )
          return;
        c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c);
        const { onViewportEnter: u, onViewportLeave: f } = this.node.getProps(),
          h = c ? u : f;
        h && h(l);
      };
    return WE(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(QE(t, n)) && this.startObserver();
  }
  unmount() {}
}
function QE({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const YE = {
    inView: { Feature: GE },
    tap: { Feature: BE },
    focus: { Feature: zE },
    hover: { Feature: VE },
  },
  qE = { layout: { ProjectionNode: j0, MeasureLayout: b0 } },
  su = { current: null },
  N0 = { current: !1 };
function XE() {
  if (((N0.current = !0), !!vd))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (su.current = e.matches);
      e.addListener(t), t();
    } else su.current = !1;
}
const JE = [...t0, Te, Rn],
  ZE = (e) => JE.find(e0(e)),
  qp = new WeakMap();
function eA(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r];
    if (Ne(i)) e.addValue(r, i);
    else if (Ne(s)) e.addValue(r, Ss(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, Ss(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Xp = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class tA {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o,
    },
    a = {},
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Wd),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const g = _t.now();
        this.renderScheduledAt < g &&
          ((this.renderScheduledAt = g), ne.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: c, onUpdate: u } = o;
    (this.onUpdate = u),
      (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = Ua(n)),
      (this.isVariantNode = cv(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: f, ...h } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const g in h) {
      const x = h[g];
      l[g] !== void 0 && Ne(x) && x.set(l[g], !1);
    }
  }
  mount(t) {
    (this.current = t),
      qp.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      N0.current || XE(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : su.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    qp.delete(this.current),
      this.projection && this.projection.unmount(),
      Mn(this.notifyUpdate),
      Mn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = mr.has(t),
      i = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && ne.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      s = n.on("renderRequest", this.scheduleRender);
    let o;
    window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), s(), o && o(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in li) {
      const n = li[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : fe();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Xp.length; r++) {
      const i = Xp[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = eA(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Ss(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
            r !== void 0
          ? r
          : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (Jv(i) || Hv(i))
          ? (i = parseFloat(i))
          : !ZE(i) && Rn.test(n) && (i = Yv(t, n)),
        this.setBaseTarget(t, Ne(i) ? i.get() : i)),
      Ne(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const o = Ed(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom,
      );
      o && (i = o[t]);
    }
    if (r && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !Ne(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Vd()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class I0 extends tA {
  constructor() {
    super(...arguments), (this.KeyframeResolver = n0);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ne(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function nA(e) {
  return window.getComputedStyle(e);
}
class rA extends I0 {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = vv);
  }
  readValueFromInstance(t, n) {
    if (mr.has(n)) {
      const r = $d(n);
      return (r && r.default) || 0;
    } else {
      const r = nA(t),
        i = (mv(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return x0(t, n);
  }
  build(t, n, r) {
    Td(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Dd(t, n, r);
  }
}
class iA extends I0 {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = fe);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (mr.has(n)) {
      const r = $d(n);
      return (r && r.default) || 0;
    }
    return (n = xv.has(n) ? n : Sd(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Sv(t, n, r);
  }
  build(t, n, r) {
    jd(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    wv(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Id(t.tagName)), super.mount(t);
  }
}
const sA = (e, t) =>
    kd(e) ? new iA(t) : new rA(t, { allowProjection: e !== w.Fragment }),
  oA = DS({ ...jk, ...YE, ...OE, ...qE }, sA),
  V = Gb(oA);
function ui() {
  const [e, t] = w.useState(!1),
    [n, r] = w.useState(!1),
    i = () => {
      t(!e);
    };
  w.useEffect(() => {
    const a = () => {
      const l = window.scrollY > 10;
      l !== n && r(l);
    };
    return (
      window.addEventListener("scroll", a),
      () => {
        window.removeEventListener("scroll", a);
      }
    );
  }, [n]);
  const s = (a) => {
      To(a), t(!1);
    },
    o = [
      { id: "news", label: "News" },
      { id: "about", label: "About" },
      { id: "projects", label: "Projects" },
      { id: "talks", label: "Talks" },
      { id: "blog", label: "Blog", isPage: !0 },
    ];
  return d.jsxs("header", {
    className: `py-6 px-6 md:px-16 fixed top-0 left-0 w-full z-40 transition-all duration-300 print:hidden ${n ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`,
    children: [
      d.jsxs("div", {
        className: "container mx-auto flex justify-between items-center",
        children: [
          d.jsx(Ge, {
            href: "/",
            className: "text-xl font-bold",
            children: d.jsx("span", {
              className: "font-bold",
              children: "Stefania Druga",
            }),
          }),
          d.jsx("button", {
            className: "block md:hidden",
            onClick: i,
            children: d.jsx(jb, { className: "h-6 w-6" }),
          }),
          d.jsxs("nav", {
            className: "hidden md:flex items-center gap-8",
            children: [
              o.map((a) =>
                a.isPage
                  ? d.jsx(
                      Ge,
                      {
                        href: `/${a.id}`,
                        className:
                          "text-sm relative nav-link hover:text-gray-600 transition-colors",
                        children: a.label,
                      },
                      a.id,
                    )
                  : d.jsx(
                      "a",
                      {
                        href: `#${a.id}`,
                        className:
                          "text-sm relative nav-link hover:text-gray-600 transition-colors",
                        onClick: (l) => {
                          l.preventDefault(), s(a.id);
                        },
                        children: a.label,
                      },
                      a.id,
                    ),
              ),
              d.jsx(Ge, {
                href: "/publications",
                className:
                  "text-sm relative nav-link hover:text-gray-600 transition-colors",
                children: "Publications",
              }),
              d.jsx(Ge, {
                href: "/resume",
                className:
                  "text-sm relative nav-link hover:text-gray-600 transition-colors",
                children: "Resume",
              }),
            ],
          }),
        ],
      }),
      d.jsx(Vb, {
        children:
          e &&
          d.jsx(V.div, {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 },
            transition: { duration: 0.2 },
            className:
              "absolute top-full left-0 w-full bg-white py-4 px-6 shadow-lg",
            children: d.jsxs("nav", {
              className: "flex flex-col space-y-4",
              children: [
                o.map((a) =>
                  a.isPage
                    ? d.jsx(
                        Ge,
                        {
                          href: `/${a.id}`,
                          className:
                            "py-2 px-4 hover:bg-gray-50 rounded-md transition-colors",
                          onClick: () => t(!1),
                          children: a.label,
                        },
                        a.id,
                      )
                    : d.jsx(
                        "a",
                        {
                          href: `#${a.id}`,
                          className:
                            "py-2 px-4 hover:bg-gray-50 rounded-md transition-colors",
                          onClick: (l) => {
                            l.preventDefault(), s(a.id);
                          },
                          children: a.label,
                        },
                        a.id,
                      ),
                ),
                d.jsx(Ge, {
                  href: "/publications",
                  className:
                    "py-2 px-4 hover:bg-gray-50 rounded-md transition-colors",
                  children: "Publications",
                }),
                d.jsx(Ge, {
                  href: "/resume",
                  className:
                    "py-2 px-4 hover:bg-gray-50 rounded-md transition-colors",
                  children: "Resume",
                }),
              ],
            }),
          }),
      }),
    ],
  });
}
var D0 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Jp = Re.createContext && Re.createContext(D0),
  aA = ["attr", "size", "title"];
function lA(e, t) {
  if (e == null) return {};
  var n = cA(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function cA(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function pa() {
  return (
    (pa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pa.apply(this, arguments)
  );
}
function Zp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ma(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Zp(Object(n), !0).forEach(function (r) {
          uA(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Zp(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function uA(e, t, n) {
  return (
    (t = dA(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function dA(e) {
  var t = fA(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function fA(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function M0(e) {
  return (
    e &&
    e.map((t, n) =>
      Re.createElement(t.tag, ma({ key: n }, t.attr), M0(t.child)),
    )
  );
}
function hA(e) {
  return (t) =>
    Re.createElement(pA, pa({ attr: ma({}, e.attr) }, t), M0(e.child));
}
function pA(e) {
  var t = (n) => {
    var { attr: r, size: i, title: s } = e,
      o = lA(e, aA),
      a = i || n.size || "1em",
      l;
    return (
      n.className && (l = n.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      Re.createElement(
        "svg",
        pa(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: l,
            style: ma(ma({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        s && Re.createElement("title", null, s),
        e.children,
      )
    );
  };
  return Jp !== void 0
    ? Re.createElement(Jp.Consumer, null, (n) => t(n))
    : t(D0);
}
function ou(e) {
  return hA({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z",
        },
        child: [],
      },
    ],
  })(e);
}
function di() {
  const e = [
    {
      icon: d.jsx(Db, { className: "w-5 h-5" }),
      href: "https://x.com/Stefania_druga",
      ariaLabel: "X",
    },
    {
      icon: d.jsx(Ab, { className: "w-5 h-5" }),
      href: "https://www.linkedin.com/in/drugastefania/",
      ariaLabel: "LinkedIn",
    },
    {
      icon: d.jsx(Cb, { className: "w-5 h-5" }),
      href: "https://github.com/stefania11",
      ariaLabel: "GitHub",
    },
    {
      icon: d.jsx(gb, { className: "w-5 h-5" }),
      href: "https://medium.com/@Stefania_druga",
      ariaLabel: "Medium",
    },
    {
      icon: d.jsx(ou, { className: "w-5 h-5" }),
      href: "https://stefaniadruga.substack.com/",
      ariaLabel: "Substack",
    },
  ];
  return d.jsx("footer", {
    className: "py-10 px-6 md:px-16 bg-gray-100 text-gray-800 print:hidden",
    children: d.jsxs("div", {
      className: "container mx-auto",
      children: [
        d.jsx("div", {
          className: "flex flex-col items-center",
          children: d.jsx("div", {
            className: "flex space-x-4 mb-6",
            children: e.map((t, n) =>
              d.jsx(
                "a",
                {
                  href: t.href,
                  "aria-label": t.ariaLabel,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110",
                  style: {
                    backgroundColor:
                      n % 3 === 0
                        ? "rgba(255, 214, 224, 0.5)"
                        : n % 3 === 1
                          ? "rgba(224, 214, 255, 0.5)"
                          : "rgba(193, 240, 219, 0.5)",
                  },
                  children: t.icon,
                },
                n,
              ),
            ),
          }),
        }),
        d.jsx("div", {
          className:
            "border-t border-gray-200 mt-4 pt-6 text-center text-gray-600",
          children: d.jsxs("p", {
            children: [
              "© ",
              new Date().getFullYear(),
              " Stefania Druga. All rights reserved.",
            ],
          }),
        }),
      ],
    }),
  });
}
function mA() {
  return d.jsxs("section", {
    className:
      "pt-32 pb-20 px-6 md:px-16 min-h-screen flex items-center relative",
    children: [
      d.jsx("div", {
        className: "container mx-auto",
        children: d.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
          children: [
            d.jsxs(V.div, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.2 },
              children: [
                d.jsxs("h1", {
                  className:
                    "text-6xl md:text-7xl font-bold leading-tight mb-6",
                  children: [
                    "Hi, I'm",
                    " ",
                    d.jsx("span", {
                      className:
                        "bg-gradient-to-r from-[#FFD6E0] via-[#E0D6FF] to-[#C1F0DB] bg-clip-text text-transparent",
                      children: "Stefania",
                    }),
                  ],
                }),
                d.jsx("p", {
                  className: "text-xl md:text-2xl text-gray-800 mb-8",
                  children:
                    "I research how to build multimodal AI applications for people to learn and research with and about artificial intelligence.",
                }),
                d.jsxs("div", {
                  className: "flex flex-wrap gap-4 mt-8",
                  children: [
                    d.jsx(V.a, {
                      href: "#contact",
                      onClick: (e) => {
                        e.preventDefault(), To("contact");
                      },
                      className:
                        "bg-black text-white px-8 py-3 rounded-full transition",
                      whileHover: { y: -5 },
                      whileTap: { scale: 0.98 },
                      children: "Get in touch",
                    }),
                    d.jsx(V.a, {
                      href: "#research",
                      onClick: (e) => {
                        e.preventDefault(), To("research");
                      },
                      className:
                        "border border-black px-8 py-3 rounded-full transition",
                      whileHover: { y: -5 },
                      whileTap: { scale: 0.98 },
                      children: "View my research",
                    }),
                  ],
                }),
              ],
            }),
            d.jsxs(V.div, {
              className: "relative group",
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.8, delay: 0.4 },
              children: [
                d.jsx("div", {
                  className:
                    "absolute -inset-1 bg-gradient-to-r from-[#FFD6E0] via-[#E0D6FF] to-[#C1F0DB] rounded-xl blur-md opacity-50 group-hover:opacity-80 transition duration-1000",
                }),
                d.jsx("div", {
                  className: "relative rounded-xl overflow-hidden",
                  style: { aspectRatio: "1/1.2" },
                  children: d.jsx("div", {
                    className:
                      "w-full h-full relative after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r after:from-[#FFD6E0]/10 after:via-transparent after:to-[#C1F0DB]/10",
                    children: d.jsx("img", {
                      src: "/blossom_headshot.jpg",
                      alt: "Stefania Druga with cherry blossoms",
                      className: "w-full h-full object-cover",
                      style: {
                        filter: "contrast(1.1) brightness(1.05)",
                        opacity: 0.85,
                        objectPosition: "center center",
                        transform: "scale(1.0)",
                        transformOrigin: "center",
                      },
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      d.jsx(V.div, {
        className: "absolute bottom-12 left-1/2 transform -translate-x-1/2",
        animate: { y: [0, 10, 0] },
        transition: { repeat: 1 / 0, duration: 1.5 },
        children: d.jsx(vb, {
          className: "h-8 w-8 cursor-pointer",
          onClick: () => To("news"),
        }),
      }),
    ],
  });
}
function gA() {
  const e = [
    {
      id: 0,
      title: "AI Co-Scientist Talk at AIE World Fair 2025",
      date: "June 2025",
      description: "Talk on Real-time AI Co-Scientist at AIE World Fair 2025",
      icon: d.jsx(Nl, { className: "w-5 h-5" }),
      link: "https://www.ai.engineer/schedule",
      color: "#C1F0DB",
    },
    {
      id: 1,
      title: "Keynote at Seoul Meta Week 2025",
      date: "June 2025",
      description:
        "Keynote on the future of multimodal AI applications at Seoul Meta Week",
      icon: d.jsx(Nl, { className: "w-5 h-5" }),
      link: "https://seoulmetaweek.com/",
      color: "#E0D6FF",
    },
    {
      id: 2,
      title: "Scratch AI Copilot Paper IDC 2025",
      date: "June 2025",
      description:
        "Scratch AI Copilot Paper accepted at ACM IDC 2025 conference in Iceland",
      icon: d.jsx(Nl, { className: "w-5 h-5" }),
      link: "https://idc.acm.org/2025/",
      color: "#FFD6E0",
    },
  ];
  return d.jsx("div", {
    className: "py-20 px-6 md:px-16",
    children: d.jsxs("div", {
      className: "container mx-auto",
      children: [
        d.jsxs("h2", {
          className: "text-4xl md:text-5xl font-bold mb-12 relative",
          children: [
            "Latest News",
            d.jsx("span", {
              className: "absolute -bottom-2 left-0 w-24 h-1 bg-[#FFD6E0]",
            }),
          ],
        }),
        d.jsx("div", {
          className: "grid grid-cols-1 gap-8 md:gap-12",
          children: e.map((t) =>
            d.jsx(
              V.div,
              {
                className: "bg-white rounded-xl shadow-sm overflow-hidden",
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, margin: "-50px" },
                transition: { duration: 0.5 },
                children: d.jsxs("div", {
                  className: "flex flex-col md:flex-row",
                  children: [
                    t.thumbnail &&
                      d.jsx("div", {
                        className: "md:w-1/3 relative overflow-hidden",
                        children: d.jsx("img", {
                          src: t.thumbnail,
                          alt: t.title,
                          className:
                            "w-full h-48 md:h-full object-cover transition-transform duration-500 hover:scale-105",
                        }),
                      }),
                    d.jsx("div", {
                      className: `flex-1 p-6 ${t.thumbnail ? "" : "md:flex md:items-center"}`,
                      children: d.jsxs("div", {
                        className: "w-full",
                        children: [
                          d.jsxs("div", {
                            className: "flex items-center mb-2",
                            children: [
                              d.jsx("div", {
                                className:
                                  "w-8 h-8 rounded-full flex items-center justify-center mr-3",
                                style: { backgroundColor: t.color },
                                children: t.icon,
                              }),
                              d.jsx("span", {
                                className: "text-gray-600",
                                children: t.date,
                              }),
                            ],
                          }),
                          d.jsx("h3", {
                            className: "text-xl font-bold mb-3",
                            children: t.title,
                          }),
                          d.jsx("p", {
                            className: "text-gray-700 mb-4",
                            children: t.description,
                          }),
                          t.link &&
                            d.jsx(V.div, {
                              whileHover: { y: -2 },
                              whileTap: { scale: 0.98 },
                              children: d.jsx("a", {
                                href: t.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                  "mt-2 text-gray-500 hover:text-gray-700 text-sm inline-flex items-center transition-colors",
                                children: "Read more",
                              }),
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
              },
              t.id,
            ),
          ),
        }),
      ],
    }),
  });
}
const yA = {
  about: {
    paragraphs: [
      "I'm Stefania Druga, an Independent Researcher, formerly a Research Scientist at Google DeepMind, where I worked on novel multimodal AI applications. I have a master's degree from MIT, PhD from UW and have been doing research on AI education since 2015.",
      "During graduate school, I built the first open-source platform for K12 AI Education - Cognimates. My research focuses on the development of AI literacy tools and curriculum for children and communities.",
      "When I'm not coding and writing papers, I enjoy trail running, yoga, and riding my bicycle.",
    ],
    infoBoxes: [
      {
        title: "Education",
        color: "#E0D6FF",
        items: [
          "PhD, University of Washington",
          "MSc, MIT Media Lab",
          "BSc, Computer Science",
        ],
      },
      {
        title: "Skills",
        color: "#C1F0DB",
        items: [
          "AI/ML Research",
          "Ed-Tech Development",
          "R&D",
          "HCI Design",
          "Teaching",
        ],
      },
      {
        title: "Interests",
        color: "#FFD6E0",
        items: [
          "Multimodal AI",
          "AI For Science",
          "AI Education",
          "Creative Learning",
          "Family Learning",
        ],
      },
      {
        title: "Languages",
        color: "#E0D6FF",
        items: [
          "English",
          "Romanian",
          "French",
          "Spanish",
          "Italian",
          "Portuguese",
          "Japanese",
        ],
      },
    ],
  },
  research: {
    projects: [
      {
        title: "AI Literacy for Kids",
        description:
          "Exploring how children understand and interact with AI systems through the development of new learning tools.",
        image:
          "https://images.unsplash.com/photo-1581092921461-7717a5f1ecf9?auto=format&fit=crop&w=600&h=300",
        link: "#",
      },
      {
        title: "Cognimates Platform",
        description:
          "A platform designed to help children create with AI and understand how these technologies work.",
        image:
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&h=300",
        link: "#",
      },
      {
        title: "Family AI Literacy",
        description:
          "Studying how families learn together about AI and develop shared understanding of these technologies.",
        image:
          "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?auto=format&fit=crop&w=600&h=300",
        link: "#",
      },
    ],
  },
  projects: [
    {
      title: "HacKIDemia",
      description:
        "A global organization I founded that brings hands-on learning to children around the world, empowering them to become makers and creators of technology.",
      image:
        "https://images.unsplash.com/photo-1535572290543-960a8046f5af?auto=format&fit=crop&w=800&h=600",
      link: "#",
      gradient: "from-[#E0D6FF] to-[#FFD6E0]",
      tags: [
        { name: "Education", color: "#FFD6E0" },
        { name: "Making", color: "#C1F0DB" },
        { name: "Global", color: "#E0D6FF" },
      ],
    },
    {
      title: "Cognimates",
      description:
        "An AI education platform that allows children to create projects with artificial intelligence and learn about how these technologies work through hands-on activities.",
      image:
        "https://cognimates-copilot.replit.app/assets/images/code_project.jpg",
      link: "https://github.com/stefania11/cognimates-gui",
      gradient: "from-[#C1F0DB] to-[#E0D6FF]",
      tags: [
        { name: "AI", color: "#FFD6E0" },
        { name: "Education", color: "#C1F0DB" },
        { name: "Programming", color: "#E0D6FF" },
      ],
    },
    {
      title: "AI Playground",
      description:
        "An interactive platform to explore AI concepts through playful activities and experiments, making advanced technologies accessible and engaging for all ages.",
      image: "http://aiplayground.me/static/media/landing.1cac0bbd.jpg",
      link: "http://aiplayground.me/",
      gradient: "from-[#FFD6E0] to-[#C1F0DB]",
      tags: [
        { name: "Research", color: "#FFD6E0" },
        { name: "AI Literacy", color: "#C1F0DB" },
        { name: "Interactive Learning", color: "#E0D6FF" },
      ],
    },
  ],
  talks: [
    {
      title: "Next-gen AI Engineers",
      venue: "AI Engineer Summit",
      year: "2023",
      description:
        "A talk about developing the next generation of AI engineers and making AI education accessible to all. Over 38,000 views!",
      image: "/ai_engineer_talk.png",
      link: "https://www.youtube.com/watch?v=ySYLsoAhXmg",
    },
    {
      title: "Teaching Kids About AI",
      venue: "TED Conference",
      year: "2022",
      description:
        "A talk about the importance of teaching AI literacy to children and how we can make these concepts accessible.",
      image:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&h=338",
      link: "#",
    },
    {
      title: "AI Education for All",
      venue: "ISTE Conference",
      year: "2021",
      description:
        "Discussing approaches to making AI education accessible to diverse populations of learners.",
      image:
        "https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&w=600&h=338",
      link: "#",
    },
    {
      title: "The Future of Family Learning",
      venue: "MIT Media Lab",
      year: "2020",
      description:
        "Exploring how families can learn together about emerging technologies like AI and robotics.",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&h=338",
      link: "#",
    },
    {
      title: "Designing AI Tools for Children",
      venue: "CHI Conference",
      year: "2019",
      description:
        "A presentation on designing child-friendly interfaces for AI-enabled tools and applications.",
      image:
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=600&h=338",
      link: "#",
    },
  ],
  publications: [
    {
      title: "Growing up with AI: How do children learn about AI?",
      venue: "IMX",
      year: "2022",
      authors: "Druga, S.",
      tags: [
        { name: "AI Education", color: "#E0D6FF" },
        { name: "HCI", color: "#C1F0DB" },
      ],
      abstractLink: "https://stefania11.github.io/publications/",
      pdfLink: "https://dl.acm.org/doi/abs/10.1145/3505284.3528577",
    },
    {
      title:
        "Research Priorities for Artificial Intelligence in Global Childhood Development",
      venue: "IEEE Pervasive Computing",
      year: "2022",
      authors: "Druga, S., Pataranutaporn, P., Green, D., Shah, P.",
      tags: [
        { name: "AI Development", color: "#FFD6E0" },
        { name: "Global Computing", color: "#E0D6FF" },
      ],
      abstractLink: "https://stefania11.github.io/publications/",
      pdfLink: "https://ieeexplore.ieee.org/abstract/document/9851512/",
    },
    {
      title:
        "TalkingTree: A Case Study on Designing for Agency with Generative AI in Education",
      venue: "CSCW",
      year: "2022",
      authors: "Seok, J., Hartmann, B., Druga, S.",
      tags: [
        { name: "Generative AI", color: "#C1F0DB" },
        { name: "Education", color: "#FFD6E0" },
      ],
      abstractLink: "https://stefania11.github.io/publications/",
      pdfLink: "https://dl.acm.org/doi/abs/10.1145/3501247.3531547",
    },
    {
      title:
        "How do children's perceptions of machine intelligence change when training & coding smart programs?",
      venue: "IDC",
      year: "2021",
      authors: "Druga, S., Vu, S.T., Likhith, E., Oh, L., Qiu, T.",
      tags: [
        { name: "Child-Agent Interaction", color: "#E0D6FF" },
        { name: "Machine Learning", color: "#FFD6E0" },
      ],
      abstractLink: "https://stefania11.github.io/publications/",
      pdfLink: "https://dl.acm.org/doi/abs/10.1145/3459990.3465176",
    },
    {
      title:
        "Learning with Friends: Designing Social Robot Learning Companions for Young Children",
      venue: "CSCL",
      year: "2021",
      authors:
        "Leong, Z., Chen, Z., Druga, S., Lee, Y., Sande, S., Rollins, C., Oleksy, M.",
      tags: [
        { name: "Social Robotics", color: "#E0D6FF" },
        { name: "Learning Companions", color: "#C1F0DB" },
      ],
      abstractLink: "https://stefania11.github.io/publications/",
      pdfLink: "https://repository.isls.org/handle/1/7470",
    },
  ],
};
function vA() {
  const { about: e } = yA;
  return d.jsx("div", {
    className: "py-20 px-6 md:px-16 bg-gray-50",
    children: d.jsxs("div", {
      className: "container mx-auto",
      children: [
        d.jsxs(V.h2, {
          className: "text-4xl md:text-5xl font-bold mb-12 relative",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.5 },
          children: [
            "About Me",
            d.jsx("span", {
              className: "absolute -bottom-2 left-0 w-24 h-1 bg-[#FFD6E0]",
            }),
          ],
        }),
        d.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-12",
          children: [
            d.jsx(V.div, {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: !0 },
              transition: { duration: 0.5, delay: 0.2 },
              children: e.paragraphs.map((t, n) =>
                d.jsx(
                  "p",
                  {
                    className: "text-lg mb-6 leading-relaxed text-gray-800",
                    children: t,
                  },
                  n,
                ),
              ),
            }),
            d.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-6",
              children: e.infoBoxes.map((t, n) =>
                d.jsxs(
                  V.div,
                  {
                    className:
                      "bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300",
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 0.3, delay: n * 0.1 + 0.3 },
                    children: [
                      d.jsx("h3", {
                        className: "text-xl font-bold mb-4",
                        style: { color: t.color },
                        children: t.title,
                      }),
                      d.jsx("ul", {
                        className: "space-y-2",
                        children: t.items.map((r, i) =>
                          d.jsx(
                            "li",
                            { className: "text-gray-700", children: r },
                            i,
                          ),
                        ),
                      }),
                    ],
                  },
                  n,
                ),
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
const xA = "/assets/chembuddy-15lBJUgC.png",
  wA = "/assets/cognimates-CaIRHZfh.png",
  bA = "/assets/gemini-BMfZqDfK.png";
function SA() {
  const e = [
      {
        id: 1,
        title: "Google Home Gemini Extension",
        description:
          "Led the development of Google Home's Gemini Extension, bringing multimodal AI capabilities to smart home devices, enabling users to interact with their homes through natural language and visual inputs.",
        image: bA,
        link: "https://support.google.com/googlenest/answer/12494697",
        tags: [
          { name: "Gemini AI", color: "#C1F0DB" },
          { name: "Smart Home", color: "#FFD6E0" },
          { name: "Multimodal Interaction", color: "#E0D6FF" },
        ],
        gradient: "from-[#C1F0DB] via-[#FFD6E0] to-[#E0D6FF]",
      },
      {
        id: 2,
        title: "ChemBuddy: Multimodal AI Chemistry Assistant",
        description:
          "An AI-powered learning companion that combines computer vision, voice interaction, and sensor data to help students understand chemistry concepts through real-time experiment analysis.",
        image: xA,
        link: "",
        tags: [
          { name: "Multimodal AI", color: "#FFD6E0" },
          { name: "Computer Vision", color: "#E0D6FF" },
          { name: "Education", color: "#C1F0DB" },
        ],
        gradient: "from-[#FFD6E0] via-[#E0D6FF] to-[#C1F0DB]",
      },
      {
        id: 3,
        title: "Cognimates",
        description:
          "AI education platform for children to train their own machine learning models. Users can also code smart games using their custom models.",
        image: wA,
        link: "http://cognimatescopilot.com/",
        tags: [
          { name: "AI Education", color: "#FFD6E0" },
          { name: "Creative Coding", color: "#E0D6FF" },
          { name: "Child-Computer Interaction", color: "#C1F0DB" },
        ],
        gradient: "from-[#E0D6FF] via-[#C1F0DB] to-[#FFD6E0]",
      },
    ],
    [t, n] = w.useState(null);
  return d.jsx("div", {
    className: "py-20 px-6 md:px-16 bg-gray-50",
    id: "projects",
    children: d.jsxs("div", {
      className: "container mx-auto",
      children: [
        d.jsxs("h2", {
          className: "text-4xl md:text-5xl font-bold mb-12 relative",
          children: [
            "Projects",
            d.jsx("span", {
              className: "absolute -bottom-2 left-0 w-24 h-1 bg-[#E0D6FF]",
            }),
          ],
        }),
        d.jsx("div", {
          className: "space-y-20",
          children: e.map((r, i) =>
            d.jsxs(
              "div",
              {
                className:
                  "grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
                children: [
                  d.jsxs("div", {
                    className: i % 2 === 0 ? "order-2 md:order-1" : "",
                    children: [
                      d.jsx("h3", {
                        className: "text-2xl font-bold mb-4",
                        children: r.title,
                      }),
                      d.jsx("p", {
                        className: "text-lg text-gray-800 mb-6",
                        children: r.description,
                      }),
                      d.jsx("div", {
                        className: "flex flex-wrap gap-2 mb-6",
                        children: r.tags.map((s, o) =>
                          d.jsx(
                            "span",
                            {
                              className:
                                "px-3 py-1 rounded-full text-sm font-medium",
                              style: { backgroundColor: s.color },
                              children: s.name,
                            },
                            o,
                          ),
                        ),
                      }),
                      r.link &&
                        d.jsx(V.a, {
                          href: r.link,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "inline-block bg-gray-300 text-gray-700 px-4 py-1.5 rounded-full transform transition text-sm",
                          whileHover: { y: -3 },
                          whileTap: { scale: 0.98 },
                          children: "Visit Project",
                        }),
                    ],
                  }),
                  d.jsx(V.div, {
                    className: `group ${i % 2 === 0 ? "order-1 md:order-2" : ""}`,
                    onHoverStart: () => n(r.id),
                    onHoverEnd: () => n(null),
                    children: d.jsxs("div", {
                      className: "relative",
                      children: [
                        d.jsx(V.div, {
                          className:
                            "absolute -inset-1 rounded-lg blur-md opacity-50 transition duration-1000",
                          style: {
                            backgroundImage: `linear-gradient(to right, ${r.gradient
                              .split(" ")
                              .join(", ")
                              .replace(/from-\[|\]|via-\[|to-\[/g, "")})`,
                          },
                          animate: { opacity: t === r.id ? 0.8 : 0.5 },
                        }),
                        d.jsx("div", {
                          className:
                            "relative rounded-lg overflow-hidden h-[300px] flex items-center justify-center bg-white",
                          children: d.jsx("img", {
                            src: r.image,
                            alt: r.title,
                            className: `max-w-full max-h-full object-contain ${r.id === 1 ? "w-[85%]" : ""}`,
                            style: { maxHeight: "280px" },
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              },
              r.id,
            ),
          ),
        }),
      ],
    }),
  });
}
const CA = "/assets/ai_coscientist-CgKQYCua.png",
  kA = "/assets/multimodal_lego-DKDzs1WC.png",
  EA = "/assets/ai_engineer_talk-BgrQyN-M.png",
  AA = "/assets/swe_korea-CkWs5qEW.png";
function PA() {
  const e = [
      {
        id: 1,
        title: "Beyond Text: Real-World Applications of Multimodal AI",
        venue: "Seoul Meta Week",
        date: "June 26, 2025",
        year: "2025",
        description:
          "Keynote on the future of multimodal AI applications at Seoul Meta Week. Expect technical insights + live demos!",
        image: AA,
        link: "https://seoulmetaweek.com/",
      },
      {
        id: 2,
        title: "Real-time Experiments with an AI Co-Scientist",
        venue: "AI Engineer Summit",
        date: "June 5, 2025 at 11:30 AM",
        year: "2025",
        description:
          "Join me at the AI Engineer Summit to explore how AI can be used to perform real-time experiments with an AI co-scientist. I'll share insights on how to leverage AI and open-source hardware to perform real-time experiments with an AI co-scientist. Expect technical insights + live demos!",
        image: CA,
        link: "https://www.ai.engineer/schedule",
      },
      {
        id: 3,
        title: "Future of Multimodal Applications",
        venue: "Infobip Shift Miami",
        date: "May 6, 2025 at 10:00 AM",
        year: "2025",
        description: `Excited to attend #InfobipShift Miami this year (May 5-7)! I'll be giving a keynote talk on "The Future of Multimodal AI Applications". Join me to explore AI that sees, hears & interacts in real-time. Expect technical insights + live demos! Slide deck now available online.`,
        image: kA,
        link: "https://shift.infobip.com/us/schedule/",
        slidesLink: "https://stefania11.github.io/future_multimodal_ai/",
      },
      {
        id: 4,
        title: "Next-gen AI Engineers",
        venue: "AI Engineer Summit",
        date: "April 2023",
        year: "2023",
        description:
          "My talk on the next generation of AI Engineers has reached over 38,000 views on YouTube. The session explores critical skills and mindsets needed for building the future of AI systems.",
        image: EA,
        link: "https://www.youtube.com/watch?v=ySYLsoAhXmg",
      },
    ],
    t = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    },
    n = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };
  return d.jsx("div", {
    className: "py-20 px-6 md:px-16",
    id: "talks",
    children: d.jsxs("div", {
      className: "container mx-auto",
      children: [
        d.jsxs("h2", {
          className: "text-4xl md:text-5xl font-bold mb-12 relative",
          children: [
            "Talks",
            d.jsx("span", {
              className: "absolute -bottom-2 left-0 w-24 h-1 bg-[#FFD6E0]",
            }),
          ],
        }),
        d.jsx(V.div, {
          className: "grid grid-cols-1 md:grid-cols-2 gap-12",
          variants: t,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, margin: "-50px" },
          children: e.map((r) =>
            d.jsxs(
              V.div,
              {
                className:
                  "bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300",
                variants: n,
                children: [
                  d.jsx("div", {
                    className:
                      "aspect-video bg-gray-100 mb-4 rounded-lg overflow-hidden",
                    children: d.jsx("img", {
                      src: r.image,
                      alt: r.title,
                      className: "w-full h-full object-cover",
                    }),
                  }),
                  d.jsxs("div", {
                    className:
                      "flex flex-wrap items-center gap-4 mb-3 text-sm text-gray-600",
                    children: [
                      d.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          d.jsx(Oa, { className: "w-4 h-4 mr-1" }),
                          r.date,
                        ],
                      }),
                      d.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          d.jsx(Tb, { className: "w-4 h-4 mr-1" }),
                          r.venue,
                        ],
                      }),
                    ],
                  }),
                  d.jsx("h3", {
                    className: "text-xl font-bold mb-2",
                    children: r.title,
                  }),
                  d.jsx("p", {
                    className: "mb-4 text-gray-700",
                    children: r.description,
                  }),
                  d.jsxs("div", {
                    className: "flex gap-3",
                    children: [
                      d.jsxs("a", {
                        href: r.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "inline-flex items-center bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors",
                        children: [
                          r.id === 1 ? "View Schedule" : "Watch Talk",
                          d.jsx(ir, { className: "ml-2 h-4 w-4" }),
                        ],
                      }),
                      r.slidesLink &&
                        d.jsxs("a", {
                          href: r.slidesLink,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "inline-flex items-center bg-[#FFD6E0] text-black px-4 py-2 rounded-full hover:bg-[#ffc1d4] transition-colors",
                          children: [
                            "View Slides",
                            d.jsx(ir, { className: "ml-2 h-4 w-4" }),
                          ],
                        }),
                    ],
                  }),
                ],
              },
              r.id,
            ),
          ),
        }),
      ],
    }),
  });
}
function TA() {
  const e = [
    {
      id: "post-1",
      title: "AI in the Physical World: How to Build Real-Time Multimodal Apps",
      date: "May 30, 2025",
      excerpt:
        "A guide to creating multimodal applications that bridge the digital and physical worlds with real-time capabilities.",
      coverImage:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*xx1clm4XX5a4rC-Rnw3nOg.png",
      slug: "ai-physical-world-multimodal-apps",
      externalUrl:
        "https://medium.com/@Stefania_druga/ai-in-the-physical-world-how-to-build-real-time-multimodal-apps-378c3d4f685d",
    },
    {
      id: "post-2",
      title:
        "Supercharge Your Scratch Projects: Introducing Cognimates Copilot",
      date: "February 20, 2024",
      excerpt:
        "An AI teammate for kids that helps children enhance their Scratch projects with artificial intelligence capabilities.",
      coverImage:
        "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*cugpF125AeJd3ZYrJpHgkw.gif",
      slug: "cognimates-copilot",
      externalUrl:
        "https://medium.com/bits-and-behavior/supercharge-your-scratch-projects-introducing-cognimates-copilot-an-ai-teammate-for-kids-52e616e4096e",
    },
    {
      id: "post-3",
      title:
        "Empowering kids for a Future They'll Help Build: A Parents Handbook",
      date: "January 15, 2024",
      excerpt:
        "A guide for parents on how to prepare children for a future where they'll actively participate in shaping technology and society.",
      coverImage:
        "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*RgP4s7rea4cXZ5PEUJ50Eg.gif",
      slug: "parents-handbook",
      externalUrl:
        "https://medium.com/@Stefania_druga/empowering-kids-for-a-future-theyll-help-build-a-parents-handbook-f1f01ae38718",
    },
    {
      id: "post-4",
      title: "Multimodal AI: A Powerful Tool for Social Good",
      date: "April 19, 2024",
      excerpt:
        "Summary of my presentation at the Innovation Exchange on how multimodal AI can be leveraged for social impact and addressing real-world challenges.",
      coverImage:
        "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=1740&auto=format&fit=crop",
      slug: "multimodal-ai-social-good",
      externalUrl:
        "https://medium.com/@Stefania_druga/multimodal-ai-a-powerful-tool-for-social-good-694cbfb76699",
    },
    {
      id: "post-5",
      title: "Creativity is dead! Long live creativity.",
      date: "October 10, 2023",
      excerpt:
        "Musings from Creative Summit 2023 in Sweden on how generative AI is changing creative ecosystems and what this means for human creativity.",
      coverImage:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*eIJaZVOGVy-lROagYIqPtw.jpeg",
      slug: "creativity-generative-ai",
      externalUrl:
        "https://medium.com/@Stefania_druga/creativity-is-dead-long-live-creativity-b0264814e544",
    },
    {
      id: "post-6",
      title: "How do children and parents learn about AI together?",
      date: "August 15, 2023",
      excerpt:
        "Exploring family as a Third Space for AI Literacies and how parents and children can collaboratively develop understanding of AI technologies.",
      coverImage:
        "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=1740&auto=format&fit=crop",
      slug: "family-ai-learning",
      externalUrl:
        "https://medium.com/@Stefania_druga/how-do-children-and-parents-learn-about-ai-together-5b2b6b6b6b6b",
    },
  ];
  return d.jsx("div", {
    className: "py-20 px-6 md:px-16 bg-gray-50",
    id: "blog",
    children: d.jsx("div", {
      className: "container mx-auto",
      children: d.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
        children: e.map((t, n) =>
          d.jsx(
            V.div,
            {
              className:
                "bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0, margin: "-50px" },
              transition: { duration: 0.5, delay: n * 0.1 },
              children: d.jsxs("div", {
                className: "block",
                children: [
                  d.jsx("div", {
                    className:
                      "aspect-video bg-gray-100 relative overflow-hidden",
                    children: d.jsx("img", {
                      src: t.coverImage,
                      alt: t.title,
                      className: "w-full h-full object-cover",
                      loading: "lazy",
                    }),
                  }),
                  d.jsxs("div", {
                    className: "p-6",
                    children: [
                      d.jsxs("div", {
                        className:
                          "flex items-center text-sm text-gray-500 mb-2",
                        children: [
                          d.jsx(Oa, { className: "w-4 h-4 mr-1" }),
                          d.jsx("span", { children: t.date }),
                        ],
                      }),
                      d.jsx("h3", {
                        className:
                          "text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors",
                        children: t.title,
                      }),
                      d.jsx("p", {
                        className: "text-gray-600 mb-4 line-clamp-2",
                        children: t.excerpt,
                      }),
                      d.jsxs("a", {
                        href:
                          t.externalUrl || "https://medium.com/@Stefania_druga",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "text-blue-600 inline-flex items-center text-sm font-medium hover:text-blue-800",
                        children: [
                          "Read on Medium",
                          d.jsx(mb, { className: "ml-1 w-4 h-4" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            },
            t.id,
          ),
        ),
      }),
    }),
  });
}
function jA() {
  const [e, t] = w.useState(!1);
  return (
    w.useEffect(() => {
      const n = () => {
        t(window.innerWidth < 768);
      };
      return (
        n(),
        window.addEventListener("resize", n),
        () => {
          window.removeEventListener("resize", n);
        }
      );
    }, []),
    e
  );
}
function NA() {
  const [e, t] = w.useState({ x: 0, y: 0 }),
    [n, r] = w.useState(!1),
    i = jA();
  return (
    w.useEffect(() => {
      if (i) return;
      const s = (o) => {
        t({ x: o.clientX, y: o.clientY }), n || r(!0);
      };
      return (
        window.addEventListener("mousemove", s),
        () => {
          window.removeEventListener("mousemove", s);
        }
      );
    }, [i, n]),
    i || !n
      ? null
      : d.jsx(V.div, {
          className:
            "fixed w-16 h-16 rounded-full bg-[#E0D6FF] mix-blend-difference pointer-events-none z-50",
          animate: { x: e.x - 32, y: e.y - 32 },
          transition: {
            type: "spring",
            mass: 0.5,
            damping: 20,
            stiffness: 100,
          },
        })
  );
}
function IA() {
  const e = w.useRef(null);
  return (
    w.useEffect(
      () => (
        (e.current = new IntersectionObserver(
          (n) => {
            n.forEach((r) => {
              r.isIntersecting && r.target.classList.add("visible");
            });
          },
          { root: null, rootMargin: "0px", threshold: 0.1 },
        )),
        () => {
          e.current && e.current.disconnect();
        }
      ),
      [],
    ),
    { registerSection: (n) => (n && e.current && e.current.observe(n), n) }
  );
}
function DA() {
  const { registerSection: e } = IA();
  return (
    w.useEffect(() => {
      (document.title = "Stefania Druga | Portfolio"), window.scrollTo(0, 0);
    }, []),
    d.jsxs(d.Fragment, {
      children: [
        d.jsx(NA, {}),
        d.jsx(ui, {}),
        d.jsxs("main", {
          children: [
            d.jsx(mA, {}),
            d.jsx("section", {
              id: "news",
              ref: e,
              className: "section-fade",
              children: d.jsx(gA, {}),
            }),
            d.jsx("section", {
              id: "about",
              ref: e,
              className: "section-fade",
              children: d.jsx(vA, {}),
            }),
            d.jsx("section", {
              id: "projects",
              ref: e,
              className: "section-fade",
              children: d.jsx(SA, {}),
            }),
            d.jsx("section", {
              id: "talks",
              ref: e,
              className: "section-fade",
              children: d.jsx(PA, {}),
            }),
            d.jsx("section", {
              id: "blog",
              ref: e,
              className: "section-fade",
              children: d.jsx(TA, {}),
            }),
          ],
        }),
        d.jsx(di, {}),
      ],
    })
  );
}
function MA() {
  w.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const e = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    },
    t = [
      "Multimodal AI",
      "Large Language Models applications.",
      "Program synthesis for computer-supported coding.",
      "Research on Creative AI applications.",
      "Extensive experience in building programming platforms for children.",
      "Teaching classes about creative learning and prototyping with AI.",
    ],
    n = [
      "ASU GSV Summit's 2025 Leading Women in AI, 2025",
      "NSF FMitF Grant for End-User Programming project, 2021",
      "Jacobs Foundation Grant for AI Literacy project, 2020",
      "Weizenbaum Research Fellow in Criticality of AI-based Systems Lab in Berlin, 2019",
      "Google Fellow, Google & NYU ITP, 2019",
      "LEGO Papert Fellow, MIT MediaLab, 2018",
      "Finalist of Ideas for Europe competition, EU, 2017",
      "Women to Watch in Science, Women at the frontier, 2016",
    ],
    r = ["Romanian", "English", "French", "Spanish", "Italian", "Portuguese"],
    i = ["Trail running and Ashtanga yoga", "Reading science fiction books"],
    s = [
      {
        title: "Research Scientist, Google Gemini",
        period: "January 2024 - Present",
        description: "Working on multimodal AI applications",
        link: "https://gemini.google.com",
      },
      {
        title: "Principal Researcher, Center of Applied AI Research U. Chicago",
        period: "July 2023 - January 2024",
        description: "Working on LLM applications for social impact",
        link: "https://www.chicagobooth.edu/research/center-for-applied-artificial-intelligence",
      },
      {
        title: "Research Intern, HAX Microsoft Research",
        period: "March 2023 - July 2023",
        description: "Working on novel LLM applications",
        link: "https://www.microsoft.com/en-us/research/group/hax-team",
      },
      {
        title: "Product Engineer, Fixie.ai",
        period: "December 2022 - March 2023",
        description: [
          "Help prototype new LLM platform for distributed specialized LLM agents",
          "Designed and ran user-studies to evaluate the platform",
          "Organized large-scale community events for prototyping and building LLM Agents",
        ],
        link: "https://fixie.ai",
      },
      {
        title: "AI Research Resident, X Moonshot Factory",
        period: "March 2022 – October 2022",
        description: "Build future developper tools with AI.",
        link: "https://x.company/",
      },
    ],
    o = [
      {
        title: "ChemBuddy: Multimodal AI Chemistry Assistant",
        description:
          "An AI-powered learning companion that combines computer vision, voice interaction, and sensor data to help students understand chemistry concepts through real-time experiment analysis.",
      },
      {
        title: "MathMind Platform",
        description:
          "An interactive multimodal AI system designed to detect algebraic misconceptions directly from images of student work, provide targeted conceptual feedback, and generate personalized practice exercises enhanced with visual representations.",
      },
      {
        title: "Cognimates",
        description:
          "AI education platform for children to train their own machine learning models. Users can also code smart games using their custom models.",
        link: "http://cognimatescopilot.com/",
      },
      {
        title: "AI Literacy Playground",
        description:
          "Playground for AI explainability allowing users to classify custom datasets. Users may also identify anchors in images to support algorithms interpretability.",
        link: "http://aiplayground.me/",
      },
      {
        title: "TileCode",
        description:
          "TileCode is an app for designing, coding, and playing video games directly on low-cost arcade gaming handhelds. Our starting point are retro video games to be created via a set of visual rules.",
        link: "https://microsoft.github.io/tilecode/",
      },
    ],
    a = [
      {
        degree: "Ph.D. ­Information School",
        major: "Informatics",
        institution: "University of Washington",
        year: "2023",
        gpa: "3.9/4",
      },
      {
        degree: "Master of Science",
        major: "Media Arts and Science",
        institution: "Massachusetts Institute of Technology",
        year: "2018",
        gpa: "5/5",
      },
      {
        degree: "Master of Science",
        major: "Instructional Design",
        institution:
          "Technical University of Lisbon, Poitiers University, UNED Madrid",
        year: "2008",
        gpa: "5/5",
      },
      {
        degree: "Bachelor of Communication",
        major: "Public Relations & Communication",
        institution: "Polytechnic University of Timisoara",
        year: "2005",
        gpa: "5/5",
      },
    ],
    l = [
      {
        title: "Creative AI Track Lead, MIT MediaLab Berlin",
        location: "Berlin, Germany",
        period: "Jun. 2018 – Jul. 2018",
        description: [
          "Designed and ran the machine learning for creative AI track, selected 10 participants from 300 applications.",
          "Organized a series of lectures, talks, and site­visits to partner organizations.",
          "Mentored students on their projects, documented and published final results.",
        ],
        link: "http://berlin.media.mit.edu",
      },
      {
        title: "Co-founder, HacKIDemia",
        location: "Global",
        period: "Jan. 2012 – Nov. 2020",
        description: [
          "Overseeing HacKIDemia, a global organization for children STEM education.",
          "We are designing a 21st century curriculum by using latest technologies and scientific inventions.",
          "We trained local teams in 40 countries with 600 mentors and 10.000 children involved to date.",
        ],
        link: "https://hackidemia.com",
      },
    ],
    c = () => {
      window.print();
    };
  return d.jsxs(d.Fragment, {
    children: [
      d.jsx(ui, {}),
      d.jsx("div", {
        className:
          "min-h-screen bg-gray-50 pt-24 pb-16 print:bg-white print:pt-2",
        children: d.jsx("div", {
          className: "container mx-auto px-6 md:px-16 print:px-0",
          children: d.jsx("div", {
            className: "max-w-5xl mx-auto",
            children: d.jsxs("div", {
              className:
                "bg-white p-8 rounded-xl shadow-sm mb-8 print:shadow-none print:p-0",
              children: [
                d.jsxs("div", {
                  className:
                    "flex justify-between items-center mb-10 print:hidden",
                  children: [
                    d.jsx(Ge, {
                      href: "/",
                      children: d.jsxs(V.div, {
                        className:
                          "inline-flex items-center text-sm font-medium cursor-pointer px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200",
                        whileHover: { x: -5 },
                        children: [
                          d.jsx(sa, { className: "mr-2 h-4 w-4" }),
                          "Back to Portfolio",
                        ],
                      }),
                    }),
                    d.jsxs("a", {
                      href: "#",
                      onClick: (u) => {
                        u.preventDefault(), c();
                      },
                      className:
                        "inline-flex items-center text-sm font-medium cursor-pointer px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200",
                      children: [
                        d.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "h-4 w-4 mr-2",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          children: d.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4",
                          }),
                        }),
                        "Print Resume",
                      ],
                    }),
                  ],
                }),
                d.jsxs("header", {
                  className: "text-center mb-8 print:mb-4",
                  children: [
                    d.jsx("h1", {
                      className: "text-4xl md:text-5xl font-bold mb-3",
                      children: "Stefania Druga",
                    }),
                    d.jsxs("div", {
                      className:
                        "flex justify-center items-center flex-wrap gap-3 text-gray-600",
                      children: [
                        d.jsxs("div", {
                          className: "flex items-center",
                          children: [
                            d.jsx(Pb, { className: "h-4 w-4 mr-1" }),
                            d.jsx("span", {
                              children: "stefania@hackidemia.com",
                            }),
                          ],
                        }),
                        d.jsxs("div", {
                          className: "flex items-center",
                          children: [
                            d.jsx(vr, { className: "h-4 w-4 mr-1" }),
                            d.jsx("a", {
                              href: "https://stefania11.github.io",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "hover:underline",
                              children: "stefania11.github.io",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                d.jsx("div", {
                  className: "flex justify-center flex-wrap mb-10 print:hidden",
                  children: d.jsx("div", {
                    className: "flex flex-wrap justify-center gap-2 max-w-4xl",
                    children: [
                      {
                        id: "qualifications",
                        label: "Qualifications",
                        icon: d.jsx(Lh, { className: "h-4 w-4 mr-2" }),
                        color: "rgba(255, 214, 224, 0.5)",
                      },
                      {
                        id: "education",
                        label: "Education",
                        icon: d.jsx(kb, { className: "h-4 w-4 mr-2" }),
                        color: "rgba(224, 214, 255, 0.5)",
                      },
                      {
                        id: "awards",
                        label: "Awards",
                        icon: d.jsx(Rh, { className: "h-4 w-4 mr-2" }),
                        color: "rgba(193, 240, 219, 0.5)",
                      },
                      {
                        id: "experience",
                        label: "Experience",
                        icon: d.jsx(Lh, { className: "h-4 w-4 mr-2" }),
                        color: "rgba(255, 224, 176, 0.5)",
                      },
                      {
                        id: "projects",
                        label: "Projects",
                        icon: d.jsx(wb, { className: "h-4 w-4 mr-2" }),
                        color: "rgba(176, 224, 255, 0.5)",
                      },
                      {
                        id: "languages",
                        label: "Languages",
                        icon: d.jsx(vr, { className: "h-4 w-4 mr-2" }),
                        color: "rgba(224, 240, 193, 0.5)",
                      },
                      {
                        id: "passions",
                        label: "Passions",
                        icon: d.jsx(Eb, { className: "h-4 w-4 mr-2" }),
                        color: "rgba(240, 193, 224, 0.5)",
                      },
                    ].map((u) =>
                      d.jsxs(
                        V.a,
                        {
                          href: `#${u.id}`,
                          className:
                            "flex items-center justify-center whitespace-nowrap px-5 py-2 rounded-full transition-colors hover:shadow-md",
                          style: { backgroundColor: u.color },
                          whileHover: { scale: 1.05 },
                          whileTap: { scale: 0.98 },
                          children: [u.icon, u.label],
                        },
                        u.id,
                      ),
                    ),
                  }),
                }),
                d.jsxs(V.section, {
                  id: "awards",
                  variants: e,
                  initial: "hidden",
                  animate: "visible",
                  className: "mb-16 print:mb-8 print:break-inside-avoid",
                  children: [
                    d.jsxs("h2", {
                      className:
                        "text-2xl font-bold mb-6 relative inline-block",
                      children: [
                        "Awards",
                        d.jsx("span", {
                          className:
                            "absolute -bottom-2 left-0 w-full h-1 bg-[#C1F0DB]",
                        }),
                      ],
                    }),
                    d.jsx("ul", {
                      className: "space-y-3 mt-6",
                      children: n.map((u, f) =>
                        d.jsxs(
                          V.li,
                          {
                            className: "flex items-start",
                            initial: { opacity: 0, x: -20 },
                            animate: { opacity: 1, x: 0 },
                            transition: { delay: f * 0.1 },
                            children: [
                              d.jsx("span", {
                                className:
                                  "inline-block w-6 h-6 rounded-full bg-[#C1F0DB] flex-shrink-0 mr-3 flex items-center justify-center",
                                children: d.jsx(Rh, {
                                  className: "h-3 w-3 text-gray-700",
                                }),
                              }),
                              d.jsx("span", {
                                className: "text-lg",
                                children: u,
                              }),
                            ],
                          },
                          f,
                        ),
                      ),
                    }),
                  ],
                }),
                d.jsxs(V.section, {
                  id: "qualifications",
                  variants: e,
                  initial: "hidden",
                  animate: "visible",
                  className: "mb-16 print:mb-8 print:break-inside-avoid",
                  children: [
                    d.jsxs("h2", {
                      className:
                        "text-2xl font-bold mb-6 relative inline-block",
                      children: [
                        "Qualifications Summary",
                        d.jsx("span", {
                          className:
                            "absolute -bottom-2 left-0 w-full h-1 bg-[#FFD6E0]",
                        }),
                      ],
                    }),
                    d.jsx("ul", {
                      className: "space-y-3 mt-6",
                      children: t.map((u, f) =>
                        d.jsxs(
                          V.li,
                          {
                            className: "flex items-start",
                            initial: { opacity: 0, x: -20 },
                            animate: { opacity: 1, x: 0 },
                            transition: { delay: f * 0.1 },
                            children: [
                              d.jsx("span", {
                                className:
                                  "inline-block w-6 h-6 rounded-full bg-[#E0D6FF] flex-shrink-0 mr-3",
                              }),
                              d.jsx("span", {
                                className: "text-lg",
                                children: u,
                              }),
                            ],
                          },
                          f,
                        ),
                      ),
                    }),
                  ],
                }),
                d.jsxs(V.section, {
                  id: "education",
                  variants: e,
                  initial: "hidden",
                  animate: "visible",
                  className: "mb-16 print:mb-8 print:break-inside-avoid",
                  children: [
                    d.jsxs("h2", {
                      className:
                        "text-2xl font-bold mb-6 relative inline-block",
                      children: [
                        "Education",
                        d.jsx("span", {
                          className:
                            "absolute -bottom-2 left-0 w-full h-1 bg-[#C1F0DB]",
                        }),
                      ],
                    }),
                    d.jsx("div", {
                      className: "overflow-x-auto mt-6",
                      children: d.jsxs("table", {
                        className: "min-w-full divide-y divide-gray-200",
                        children: [
                          d.jsx("thead", {
                            className: "bg-gray-50",
                            children: d.jsxs("tr", {
                              children: [
                                d.jsx("th", {
                                  scope: "col",
                                  className:
                                    "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                  children: "Degree",
                                }),
                                d.jsx("th", {
                                  scope: "col",
                                  className:
                                    "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                  children: "Major",
                                }),
                                d.jsx("th", {
                                  scope: "col",
                                  className:
                                    "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                  children: "Institution",
                                }),
                                d.jsx("th", {
                                  scope: "col",
                                  className:
                                    "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                  children: "Year",
                                }),
                                d.jsx("th", {
                                  scope: "col",
                                  className:
                                    "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                  children: "GPA",
                                }),
                              ],
                            }),
                          }),
                          d.jsx("tbody", {
                            className: "bg-white divide-y divide-gray-200",
                            children: a.map((u, f) =>
                              d.jsxs(
                                V.tr,
                                {
                                  initial: { opacity: 0 },
                                  animate: { opacity: 1 },
                                  transition: { delay: f * 0.1 },
                                  children: [
                                    d.jsx("td", {
                                      className:
                                        "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",
                                      children: u.degree,
                                    }),
                                    d.jsx("td", {
                                      className:
                                        "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                      children: u.major,
                                    }),
                                    d.jsx("td", {
                                      className:
                                        "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                      children: u.institution,
                                    }),
                                    d.jsx("td", {
                                      className:
                                        "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                      children: u.year,
                                    }),
                                    d.jsx("td", {
                                      className:
                                        "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                      children: u.gpa,
                                    }),
                                  ],
                                },
                                f,
                              ),
                            ),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                d.jsxs(V.section, {
                  id: "experience",
                  variants: e,
                  initial: "hidden",
                  animate: "visible",
                  className: "mb-16 print:mb-8 print:break-inside-avoid",
                  children: [
                    d.jsxs("h2", {
                      className:
                        "text-2xl font-bold mb-6 relative inline-block",
                      children: [
                        "Experience",
                        d.jsx("span", {
                          className:
                            "absolute -bottom-2 left-0 w-full h-1 bg-[#E0D6FF]",
                        }),
                      ],
                    }),
                    d.jsxs("div", {
                      className: "space-y-8 mt-6",
                      children: [
                        d.jsx("h3", {
                          className: "text-xl font-semibold mb-4",
                          children: "Research Experience",
                        }),
                        s.map((u, f) =>
                          d.jsxs(
                            V.div,
                            {
                              className:
                                "border-l-4 border-[#E0D6FF] pl-6 py-2",
                              initial: { opacity: 0, y: 20 },
                              animate: { opacity: 1, y: 0 },
                              transition: { delay: f * 0.1 },
                              children: [
                                d.jsx("h3", {
                                  className: "text-xl font-bold",
                                  children: u.title,
                                }),
                                d.jsx("p", {
                                  className: "text-gray-600 mb-2",
                                  children: u.period,
                                }),
                                Array.isArray(u.description)
                                  ? d.jsx("ul", {
                                      className:
                                        "list-disc list-inside space-y-1 mb-2",
                                      children: u.description.map((h, g) =>
                                        d.jsx("li", { children: h }, g),
                                      ),
                                    })
                                  : d.jsx("p", {
                                      className: "mb-2",
                                      children: u.description,
                                    }),
                                d.jsxs("a", {
                                  href: u.link,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "text-blue-600 hover:underline flex items-center print:text-black",
                                  children: [
                                    d.jsx(vr, { className: "h-4 w-4 mr-1" }),
                                    u.link
                                      .replace(/^https?:\/\//, "")
                                      .replace(/\/$/, ""),
                                  ],
                                }),
                              ],
                            },
                            `research-${f}`,
                          ),
                        ),
                        d.jsx("h3", {
                          className: "text-xl font-semibold mb-4 mt-12",
                          children: "Professional Experience",
                        }),
                        l.map((u, f) =>
                          d.jsxs(
                            V.div,
                            {
                              className:
                                "border-l-4 border-[#FFD6E0] pl-6 py-2",
                              initial: { opacity: 0, y: 20 },
                              animate: { opacity: 1, y: 0 },
                              transition: { delay: f * 0.1 },
                              children: [
                                d.jsxs("div", {
                                  className:
                                    "flex flex-col md:flex-row md:justify-between md:items-start mb-2",
                                  children: [
                                    d.jsx("h3", {
                                      className: "text-xl font-bold",
                                      children: u.title,
                                    }),
                                    d.jsxs("div", {
                                      className: "text-gray-600",
                                      children: [
                                        d.jsx("div", {
                                          className:
                                            "flex items-center md:justify-end",
                                          children: d.jsx("span", {
                                            children: u.location,
                                          }),
                                        }),
                                        d.jsx("div", {
                                          className:
                                            "flex items-center md:justify-end",
                                          children: d.jsx("span", {
                                            children: u.period,
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                d.jsx("ul", {
                                  className:
                                    "list-disc list-inside space-y-1 mb-2",
                                  children: u.description.map((h, g) =>
                                    d.jsx("li", { children: h }, g),
                                  ),
                                }),
                                d.jsxs("a", {
                                  href: u.link,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "text-blue-600 hover:underline flex items-center print:text-black",
                                  children: [
                                    d.jsx(vr, { className: "h-4 w-4 mr-1" }),
                                    u.link
                                      .replace(/^https?:\/\//, "")
                                      .replace(/\/$/, ""),
                                  ],
                                }),
                              ],
                            },
                            `professional-${f}`,
                          ),
                        ),
                      ],
                    }),
                  ],
                }),
                d.jsxs(V.section, {
                  id: "projects",
                  variants: e,
                  initial: "hidden",
                  animate: "visible",
                  className: "mb-16 print:mb-8 print:break-inside-avoid",
                  children: [
                    d.jsxs("h2", {
                      className:
                        "text-2xl font-bold mb-6 relative inline-block",
                      children: [
                        "Active Projects",
                        d.jsx("span", {
                          className:
                            "absolute -bottom-2 left-0 w-full h-1 bg-[#FFD6E0]",
                        }),
                      ],
                    }),
                    d.jsx("div", {
                      className: "grid gap-6 mt-6",
                      children: o.map((u, f) =>
                        d.jsxs(
                          V.div,
                          {
                            className:
                              "bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow print:border-0 print:shadow-none print:p-3",
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: f * 0.1 },
                            whileHover: { y: -5 },
                            children: [
                              d.jsxs("h3", {
                                className:
                                  "text-xl font-bold mb-2 flex items-center",
                                children: [
                                  d.jsx("span", {
                                    className:
                                      "inline-block w-3 h-3 rounded-full bg-[#FFD6E0] mr-2",
                                  }),
                                  u.title,
                                ],
                              }),
                              d.jsx("p", {
                                className: "mb-4",
                                children: u.description,
                              }),
                              d.jsxs("a", {
                                href: u.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: `inline-flex items-center bg-gray-300 text-gray-700 px-3 py-1.5 rounded-full text-sm print:bg-white print:text-black print:border print:border-black ${!u.link && "hidden"}`,
                                children: [
                                  "Visit Project",
                                  d.jsx(vr, { className: "ml-2 h-3 w-3" }),
                                ],
                              }),
                            ],
                          },
                          f,
                        ),
                      ),
                    }),
                  ],
                }),
                d.jsxs(V.section, {
                  id: "languages",
                  variants: e,
                  initial: "hidden",
                  animate: "visible",
                  className: "mb-16 print:mb-8 print:break-inside-avoid",
                  children: [
                    d.jsxs("h2", {
                      className:
                        "text-2xl font-bold mb-6 relative inline-block",
                      children: [
                        "Languages",
                        d.jsx("span", {
                          className:
                            "absolute -bottom-2 left-0 w-full h-1 bg-[#E0D6FF]",
                        }),
                      ],
                    }),
                    d.jsx("div", {
                      className: "grid grid-cols-1 md:grid-cols-2 gap-3 mt-6",
                      children: r.map((u, f) =>
                        d.jsxs(
                          V.div,
                          {
                            className: "flex items-start",
                            initial: { opacity: 0, x: -20 },
                            animate: { opacity: 1, x: 0 },
                            transition: { delay: f * 0.1 },
                            children: [
                              d.jsx("span", {
                                className:
                                  "inline-block w-6 h-6 rounded-full bg-[#E0D6FF] flex-shrink-0 mr-3 flex items-center justify-center",
                                children: d.jsx(vr, {
                                  className: "h-3 w-3 text-gray-700",
                                }),
                              }),
                              d.jsx("span", {
                                className: "text-lg",
                                children: u,
                              }),
                            ],
                          },
                          f,
                        ),
                      ),
                    }),
                  ],
                }),
                d.jsxs(V.section, {
                  id: "passions",
                  variants: e,
                  initial: "hidden",
                  animate: "visible",
                  className: "mb-16 print:mb-8 print:break-inside-avoid",
                  children: [
                    d.jsxs("h2", {
                      className:
                        "text-2xl font-bold mb-6 relative inline-block",
                      children: [
                        "Passions",
                        d.jsx("span", {
                          className:
                            "absolute -bottom-2 left-0 w-full h-1 bg-[#FFD6E0]",
                        }),
                      ],
                    }),
                    d.jsx("ul", {
                      className: "space-y-5 mt-6",
                      children: i.map((u, f) =>
                        d.jsxs(
                          V.li,
                          {
                            className: "flex items-start",
                            initial: { opacity: 0, x: -20 },
                            animate: { opacity: 1, x: 0 },
                            transition: { delay: f * 0.1 },
                            children: [
                              d.jsx("span", {
                                className:
                                  "inline-block w-6 h-6 rounded-full bg-[#FFD6E0] flex-shrink-0 mr-3 flex items-center justify-center",
                                children:
                                  f === 0
                                    ? d.jsxs("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-3 w-3 text-gray-700",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: [
                                          d.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z",
                                            clipRule: "evenodd",
                                          }),
                                          d.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2",
                                          }),
                                        ],
                                      })
                                    : d.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-3 w-3 text-gray-700",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: d.jsx("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                                        }),
                                      }),
                              }),
                              f === 1
                                ? d.jsx("span", {
                                    className: "text-lg",
                                    children: d.jsx("a", {
                                      href: "https://www.goodreads.com/user/show/10667897-stefania",
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      className:
                                        "text-blue-600 hover:underline flex items-center print:text-black",
                                      children: u,
                                    }),
                                  })
                                : d.jsx("span", {
                                    className: "text-lg",
                                    children: u,
                                  }),
                            ],
                          },
                          f,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
      d.jsx(di, {}),
    ],
  });
}
function RA() {
  const [e, t] = w.useState(null),
    [n, r] = w.useState(null),
    i = [
      { name: "AI Education", color: "rgba(255, 214, 224, 0.5)" },
      { name: "AI Literacy", color: "rgba(224, 214, 255, 0.5)" },
      { name: "Multimodal AI", color: "rgba(193, 240, 219, 0.5)" },
      { name: "Child-AI Interaction", color: "rgba(255, 224, 176, 0.5)" },
      { name: "Creative Computing", color: "rgba(176, 224, 255, 0.5)" },
    ],
    s = {
      "2025-1": ["AI Education", "Creative Computing"],
      "2025-2": ["Multimodal AI", "AI Education"],
      "2025-3": ["AI Education", "Multimodal AI"],
      "FACCT '24": ["AI Literacy"],
      "JCHE '24": ["AI Education", "Multimodal AI"],
      "FAccT '23": ["AI Literacy"],
      "C&C'23": ["Creative Computing", "AI Literacy"],
      "Arxiv '23'": ["AI Education", "Creative Computing"],
      "VL/HCC '23'": ["Creative Computing", "AI Education"],
      "MAKE '23": ["Creative Computing", "AI Education"],
      "IDC '23": ["Child-AI Interaction", "AI Literacy"],
      "arXiv '23": ["Creative Computing", "AI Literacy"],
      "UW '23'": ["AI Education", "AI Literacy", "Child-AI Interaction"],
      "MIT PRESS '22": ["AI Literacy"],
      "CHI '22": ["AI Education", "AI Literacy", "Child-AI Interaction"],
      "IDC '22": ["Creative Computing", "Child-AI Interaction"],
      "ITICSE '22": ["AI Education"],
      "IJCCI '22": ["Child-AI Interaction"],
      "UW '22": ["AI Education", "Creative Computing"],
      "IDC '21": ["Child-AI Interaction", "AI Education"],
      "CLS '21": ["AI Education"],
      "KDD '21": ["AI Literacy", "Child-AI Interaction"],
      "JoDS '20": ["AI Literacy"],
      "IDC '20": ["Child-AI Interaction", "Creative Computing"],
      "CACM '20": ["AI Education"],
      "FABLEARN '19": ["AI Education", "AI Literacy"],
      "CHIPLAY '19": ["Creative Computing", "Child-AI Interaction"],
      "IDC '18": ["Child-AI Interaction"],
      "MIT '18": ["AI Education", "Creative Computing", "Child-AI Interaction"],
      "CHI '17": ["Child-AI Interaction"],
      "IDC '17": ["Child-AI Interaction"],
      "ISWC '18": ["Multimodal AI"],
      "SIGRAPH '14": ["Creative Computing"],
      "EUROMIME '10": ["AI Education"],
    },
    o = (c) => {
      if (!n) return !0;
      const u = c.id || c.venue;
      return s[u] ? s[u].includes(n) : !1;
    },
    a = (c) => {
      r(n === c ? null : c);
    };
  w.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const l = [
    {
      year: "2025",
      categories: [
        {
          title: "",
          items: [
            {
              id: "2025-1",
              venue: "IDC '25",
              title:
                "Cognimates Copilot: Supporting Children's Creative AI Learning and Coding",
              authors: "Druga Stefania and Amy J. Ko",
              year: "2025",
              link: "https://arxiv.org/abs/2505.03867",
            },
            {
              id: "2025-2",
              venue: "UIST '25",
              title:
                "ChemBuddy: An AI-Powered Multimodal Chemistry Lab Assistant Addressing Misconceptions in Middle-School Science",
              authors: "Stefania Druga",
              year: "2025",
            },
            {
              id: "2025-3",
              venue: "UIST '25",
              title:
                "MathMind: AI-Powered Misconception Detection for Middle School Algebra Learning",
              authors: "Stefania Druga",
              year: "2025",
            },
          ],
        },
      ],
    },
    {
      year: "2024",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "FACCT '24",
              title:
                'From "AI" to Probabilistic Automation: How Does Anthropomorphization of Technical Systems Descriptions Influence Trust?',
              authors:
                "Nanna Inia, Stefania Druga, Peter Zukerman, and Emily Bender",
              year: "2024",
              link: "https://faculty.washington.edu/ebender/papers/From_AI_to_Probabilistic_Automation_PREPRINT.pdf",
            },
            {
              venue: "JCHE '24",
              title:
                "A Benchmark for Math Misconceptions: Bridging Gaps in Middle School Algebra with AI-Supported Personalized Instruction",
              authors: "Nancy Otero, and Stefania Druga",
              year: "2024",
              link: "https://arxiv.org/abs/2412.03765",
            },
          ],
        },
      ],
    },
    {
      year: "2023",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "FAccT '23",
              title:
                "Language Models and Society: Bridging Research and Policy",
              authors:
                "Stefania Druga, Ioana Baldini, Mihaela Vorvoreanu, and Rishi Bommasani",
              year: "2023",
              link: "/pdf/FAccT_2023_Language_Models_Society.pdf",
            },
            {
              venue: "C&C'23",
              title: "The Prompt Artists (Honorable Mention)",
              authors:
                "Minsuk Chang, Stefania Druga, Alex Fiannaca, Pedro Vergani, Chinmay Kulkarni, Carrie Cai, and Michael Terry",
              year: "2023",
              link: "https://arxiv.org/pdf/2303.12253",
            },
            {
              venue: "Arxiv '23'",
              title:
                "AI Friends: Designing Creative Coding Assistants for Families",
              authors: "Stefania Druga, and Amy J. Ko",
              year: "2023",
              link: "https://arxiv.org/pdf/2303.12253.pdf",
            },
            {
              venue: "VL/HCC '23'",
              title:
                "Scratch Copilot Evaluation: Assessing AI-Assisted Creative Coding for Families",
              authors: "Stefania Druga, and Nancy Otero",
              year: "2023",
              link: "http://arxiv.org/abs/2305.10417",
            },
            {
              venue: "MAKE '23",
              title:
                "Generative AI for Makers: AI Has Truly Arrived — and It's Here to Help You Make and Craft",
              authors: "Stefania Druga",
              year: "2023",
              link: "https://makezine.com/article/craft/fine-art/generative-ai-for-makers-ai-has-truly-arrived-and-its-here-to-help-you-make-and-craft/",
            },
            {
              venue: "IDC '23",
              title:
                "Factors used by Children to Make Sense of Algorithmic Fairness",
              authors:
                "Jean Salac, Rotem Landesman, Stefania Druga, and Amy J. Ko",
              year: "2023",
              link: "/pdf/IDC2023_Children_Sensemaking_Algo_Fairness.pdf",
            },
            {
              venue: "arXiv '23",
              title:
                "A Word is Worth a Thousand Pictures: Prompts as AI Design Material",
              authors:
                "Chinmay Kulkarni, Stefania Druga, Minsuk Chang, Alex Fiannaca, Carrie Cai, and Michael Terry",
              year: "2023",
              link: "https://arxiv.org/pdf/2303.12647.pdf",
            },
            {
              venue: "UW '23'",
              title: "PhD Thesis: Creative AI Literacies for Families",
              authors: "Druga Stefania",
              year: "2023",
            },
            {
              venue: "MAKE '23",
              title:
                "Book: Creative AI, A Guide to Making and Tinkering with Artificial Intelligence",
              authors: "Druga Stefania",
              year: "2023",
              link: "https://digital.lib.washington.edu/researchworks/items/03853bd4-b257-4fe8-8158-b08032c5efd8",
            },
          ],
        },
      ],
    },
    {
      year: "2022",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "MIT PRESS '22",
              title:
                "The 4As: Ask, Adapt, Author, Analyze: AI Literacy Framework for Families",
              authors:
                "Druga Stefania, Yip Jason, Preston Michael, and Dillon Devin",
              year: "2022",
              link: "/pdf/MITP2022_4As_AI_Literacy_Framework_for_Families.pdf",
            },
            {
              venue: "CHI '22",
              title:
                "Family as a Third Space for AI Literacies: How do children and parents learn about AI together?",
              authors: "Stefania Druga, Fee Christoph, and Amy J. Ko",
              year: "2022",
              link: "/pdf/Druga2022FamilyAILiteracy.pdf",
            },
            {
              venue: "IDC '22",
              title:
                "How families design and program games: a qualitative analysis of a 4-week online in-home study",
              authors: "Stefania Druga, Thomas Ball, and Amy J. Ko",
              year: "2022",
              link: "/pdf/IDC_2022_TileCode_Families.pdf",
            },
            {
              venue: "ITICSE '22",
              title: "The Landscape of Teaching Resources for AI Education",
              authors: "Stefania Druga, Nancy Otero, and Amy J. Ko",
              year: "2022",
              link: "/pdf/Final_ITICSE_Submission___Landscape_AI_ressources.pdf",
            },
            {
              venue: "IJCCI '22",
              title:
                "Examining voice assistants in the context of children's speech",
              authors:
                "Min Kyong Kim, Stefania Druga, Shaghayegh Esmaeili, Julia Woodward, Alex Shaw, Ayushi Jain, Jaida Langham, Kristy Hollingshead, Silvia B Lovato, Erin Beneteau, and others",
              year: "2022",
              link: "/pdf/IJCCI_Examining_voice_assistants_in_the_context_of_children_speech.pdf",
            },
            {
              venue: "UW '22",
              title:
                "Interest-Driven Creative Programming for Youth with AI Friends",
              authors: "Druga Stefania",
              year: "2022",
              link: "/pdf/GE_2022_Interest_Driven_Creative_Programming_for_Youth.pdf",
            },
          ],
        },
      ],
    },
    {
      year: "2021",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "IDC '21",
              title:
                "How do children's perceptions of machine intelligence change when training and coding smart programs?",
              authors: "Stefania Druga, and Amy J. Ko",
              year: "2021",
              link: "/pdf/IDC_Machine_Intelligence_Perception_2021.pdf",
            },
            {
              venue: "CLS '21",
              title:
                "Imagining Future Designs of Tools for Youth Data Literacies",
              authors:
                "Regina Cheng, Stefania Druga, Emilia Gan, Catherine D'Ignazio, Rahul Bhargava, Victor Lee, Camillia Matuk, Tamara Clegg, Andee Rubin, and Yasmin Kafai",
              year: "2021",
              link: "/pdf/CLS_Future_Data_Literacies_Workshop_at_Connected_Learning_Summit_July_2021.pdf",
            },
            {
              venue: "KDD '21",
              title:
                "A Design Framework for Citizen-Science AI Platforms for Families",
              authors: "Fangqing He*, Yifeng Wang*, and Stefania Druga",
              year: "2021",
              link: "/pdf/FEED_A_Design_Framework_for_Citizen_Science_AI_Platforms_for_Families_2021.pdf",
            },
          ],
        },
      ],
    },
    {
      year: "2020",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "JoDS '20",
              title:
                "The 4As: Ask, Adapt, Author, Analyze AI Literacy Framework for Families",
              authors:
                "Druga Stefania, Yip Jason, Preston Michael, and Dillon Devin",
              year: "2020",
              link: "/pdf/JODS_Author_Draft_The_4As__Ask__Adapt__Author__Analyze___AI_Literacy_Framework_for_Families.pdf",
            },
            {
              venue: "IDC '20",
              title: "Research Toolkit for Future-Oriented Play with Families",
              authors: "Michelson Rebecca Druga Stefania",
              year: "2020",
              link: "/pdf/INTERACT_Camera_Ready_Smart_Toys_Design.pdf",
            },
            {
              venue: "IDC '20",
              title:
                '"Puffy and Sticking Out" CollaborativeImage Classification with Kids',
              authors: "Druga Stefania Tian Yubing",
              year: "2020",
              link: "/pdf/IDC_Workshop_Puffy_sticking_out.pdf",
            },
            {
              venue: "CACM '20",
              title: "It Is Time for More Critical CS Education",
              authors:
                "Amy J. Ko, Alannah Oleson, Neil Ryan, Yim Register, Benjamin Xie, Mina Tari, Matthew Davidson, Stefania Druga, and Dastyni Loksa",
              year: "2020",
              link: "/pdf/CACM_Critical_CS_2020.pdf",
            },
          ],
        },
      ],
    },
    {
      year: "2019",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "FABLEARN '19",
              title: "Inclusive AI literacy for kids around the world",
              authors:
                "Druga Stefania, Vu Sarah T, Likhith Eesh, and Qiu Tammy",
              year: "2019",
              link: "/pdf/FABLEARN_Inclusive_AI_2019.pdf",
            },
            {
              venue: "CHIPLAY '19",
              title:
                "Ballbit Adventure: A Physical Game for a Collaborative Racing",
              authors: "Kuang Quincy, Zhang Jiaxin, and Druga Stefania",
              year: "2019",
              link: "/pdf/CHI_PLAY_Ballbit_Adventure_2019.pdf",
            },
            {
              venue: "CHIPLAY '19",
              title:
                "The Humming Box: AI-powered Tangible Music Toy for Children",
              authors:
                "Chen Chunhan, Tang Yihan, Xie Tianyi, and Druga Stefania",
              year: "2019",
              link: "/pdf/CHI_PLAY_Humming_Box_2019.pdf",
            },
            {
              venue: "CHIPLAY '19",
              title: "Legoons: Inflatable Construction Kit for Children",
              authors: "Yang Xuefei, and Druga Stefania",
              year: "2019",
              link: "/pdf/CHI_PLAY_Legoons_2019.pdf",
            },
          ],
        },
      ],
    },
    {
      year: "2018",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "IDC '18",
              title:
                "How smart are the smart toys? children and parents' agent interaction and intelligence attribution",
              authors:
                "Druga Stefania, Williams Randi, Park Hae Won, and Breazeal Cynthia",
              year: "2018",
              link: "/pdf/IDC_How_smart_toys_2018.pdf",
            },
            {
              venue: "IDC '18",
              title: `" My doll says it's ok" a study of children's conformity to a talking doll`,
              authors:
                "Williams Randi, Machado Christian Vázquez, Druga Stefania, Breazeal Cynthia, and Maes Pattie",
              year: "2018",
              link: "/pdf/IDC_WIP_Doll_2018.pdf",
            },
            {
              venue: "MIT '18",
              title:
                "Growing up with AI: Cognimates: from coding to teaching machines",
              authors: "Druga Stefania",
              year: "2018",
              link: "/pdf/MIT_Thesis_Growin_up_with_AI_Stefania_Druga_2018.pdf",
            },
            {
              venue: "MIT '18",
              title: "Cognimates",
              authors: "Druga Stefania, Vu Sarah, Likhith Eesh, and Qui Tammy",
              year: "2018",
              link: "https://www.cognimates.me",
            },
          ],
        },
      ],
    },
    {
      year: "2017",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "CHI '17",
              title:
                "Embodied learning and play in sensorimotor augmentations for kids",
              authors: "Druga Stefania",
              year: "2017",
              link: "/pdf/CHI_Workshop_Embodied_learning_2017.pdf",
            },
            {
              venue: "IDC '17",
              title:
                '"Hey Google is it OK if I eat you?" Initial Explorations in Child-Agent Interaction',
              authors:
                "Druga Stefania, Williams Randi, Breazeal Cynthia, and Resnick Mitchel",
              year: "2017",
              link: "/pdf/IDC_WIP_Hey_Google_2017.pdf",
            },
            {
              venue: "ISWC '18",
              title:
                "Motif: a wearable sonic cueing device for memory support and cognitive intervention",
              authors: "Druga Stefania, Maes Pattie, and Rieger Alexandra",
              year: "2017",
              link: "/pdf/ISWC_WIP_Motif_2017.pdf",
            },
          ],
        },
      ],
    },
    {
      year: "2014",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "SIGRAPH '14",
              title:
                "Open Source Hardware (OSHW) Supporting Interaction between Traditional Crafts and Emergent Science: Wayang Kulit over Microfluidic Interfaces",
              authors:
                "Ausareny Justyna, Kera Denisa, Druga Stefania, and Reshef Yair",
              year: "2014",
              link: "/pdf/SIGRAPH_Workshop_OSHW_2014.pdf",
            },
          ],
        },
      ],
    },
    {
      year: "2010",
      categories: [
        {
          title: "",
          items: [
            {
              venue: "EUROMIME '10",
              title:
                "Open Education Resources Practices and Copyrights for Teachers",
              authors: "Druga Stefania",
              year: "2010",
              link: "/pdf/EUROMIME_Thesis_OER_2010.pdf",
            },
          ],
        },
      ],
    },
  ];
  return d.jsxs(d.Fragment, {
    children: [
      d.jsx(ui, {}),
      d.jsx("div", {
        className: "min-h-screen pt-32 pb-24 px-6 md:px-16 bg-gray-50",
        children: d.jsxs("div", {
          className: "container mx-auto",
          children: [
            d.jsxs("div", {
              className: "mb-12",
              children: [
                d.jsx(Ge, {
                  href: "/",
                  children: d.jsxs(V.div, {
                    className:
                      "inline-flex items-center text-sm font-medium cursor-pointer px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 mb-8",
                    whileHover: { x: -5 },
                    onClick: (c) => {},
                    children: [
                      d.jsx(sa, { className: "mr-2 h-4 w-4" }),
                      "Back to Portfolio",
                    ],
                  }),
                }),
                d.jsx(V.h1, {
                  className: "text-4xl md:text-5xl font-bold mb-6",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5 },
                  children: "Publications",
                }),
                d.jsx(V.div, {
                  className: "h-1 w-24 bg-[#FFD6E0] mb-8",
                  initial: { width: 0 },
                  animate: { width: 96 },
                  transition: { duration: 0.7, delay: 0.2 },
                }),
                d.jsx(V.p, {
                  className: "text-xl text-gray-700 max-w-3xl",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { duration: 0.5, delay: 0.3 },
                  children:
                    "My research explores human-AI collaboration, multimodal systems, and how people learn with artificial intelligence.",
                }),
              ],
            }),
            d.jsxs("div", {
              className: "flex flex-wrap justify-center gap-3 mb-12 pb-2",
              children: [
                i.map((c) =>
                  d.jsxs(
                    V.button,
                    {
                      onClick: () => a(c.name),
                      className: `px-4 py-2 rounded-full hover:shadow-md transition-colors whitespace-nowrap flex items-center ${n === c.name ? "ring-2 ring-offset-2 ring-gray-900" : ""}`,
                      style: { backgroundColor: c.color },
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.98 },
                      children: [
                        c.name,
                        n === c.name &&
                          d.jsx(yb, { className: "ml-2 h-4 w-4" }),
                      ],
                    },
                    c.name,
                  ),
                ),
                n &&
                  d.jsxs(V.button, {
                    onClick: () => r(null),
                    className:
                      "px-4 py-2 rounded-full hover:shadow-md transition-colors whitespace-nowrap flex items-center bg-gray-200",
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.98 },
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    children: [
                      "Clear Filter ",
                      d.jsx(oa, { className: "ml-2 h-4 w-4" }),
                    ],
                  }),
              ],
            }),
            n &&
              d.jsx(V.div, {
                className: "text-center mb-8",
                initial: { opacity: 0, y: -10 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.3 },
                children: d.jsxs("p", {
                  className: "text-lg",
                  children: [
                    "Showing publications tagged with ",
                    d.jsx("span", { className: "font-semibold", children: n }),
                  ],
                }),
              }),
            d.jsx("div", {
              className: "space-y-20",
              children: l.map((c, u) =>
                !n || c.categories.some((h) => h.items.some((g) => o(g)))
                  ? d.jsxs(
                      V.div,
                      {
                        id: `year-${c.year}`,
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: !0, margin: "-50px" },
                        transition: { duration: 0.5, delay: u * 0.1 },
                        className: "scroll-mt-32",
                        children: [
                          d.jsxs("h2", {
                            className:
                              "text-3xl font-bold mb-8 relative inline-block",
                            children: [
                              c.year,
                              d.jsx(V.span, {
                                className:
                                  "absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#FFD6E0] via-[#E0D6FF] to-[#C1F0DB]",
                                style: { width: "100%" },
                                initial: { width: 0 },
                                whileInView: { width: "100%" },
                                viewport: { once: !0 },
                                transition: { duration: 0.7 },
                              }),
                            ],
                          }),
                          d.jsx("div", {
                            className: "space-y-8",
                            children: c.categories.map((h, g) => {
                              const x = h.items.filter((y) => o(y));
                              return x.length === 0
                                ? null
                                : d.jsxs(
                                    "div",
                                    {
                                      children: [
                                        h.title &&
                                          d.jsx("h3", {
                                            className:
                                              "text-xl font-semibold mb-4",
                                            children: h.title,
                                          }),
                                        d.jsx("div", {
                                          className: "grid grid-cols-1 gap-8",
                                          children: x.map((y, b) => {
                                            const m = [
                                                "#FFD6E0",
                                                "#E0D6FF",
                                                "#C1F0DB",
                                              ],
                                              p = m[Math.floor(b % m.length)];
                                            return d.jsx(
                                              V.div,
                                              {
                                                className:
                                                  "bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all",
                                                whileHover: { y: -5 },
                                                onHoverStart: () =>
                                                  t(y.id || `${y.title}-${b}`),
                                                onHoverEnd: () => t(null),
                                                children: d.jsx("div", {
                                                  className:
                                                    "border-l-8 pl-6 py-6 px-6 relative",
                                                  style: { borderColor: p },
                                                  children: d.jsxs("div", {
                                                    className:
                                                      "flex flex-col md:flex-row md:items-start",
                                                    children: [
                                                      d.jsx("div", {
                                                        className:
                                                          "md:w-1/5 mb-4 md:mb-0",
                                                        children: d.jsxs(
                                                          "span",
                                                          {
                                                            className:
                                                              "px-3 py-1 rounded-full text-sm font-medium inline-flex items-center",
                                                            style: {
                                                              backgroundColor: `${p}40`,
                                                            },
                                                            children: [
                                                              d.jsx(bb, {
                                                                className:
                                                                  "w-3 h-3 mr-1",
                                                              }),
                                                              y.venue,
                                                            ],
                                                          },
                                                        ),
                                                      }),
                                                      d.jsxs("div", {
                                                        className: "md:w-4/5",
                                                        children: [
                                                          d.jsx("h3", {
                                                            className:
                                                              "text-xl font-bold mb-3",
                                                            children: y.title,
                                                          }),
                                                          d.jsxs("p", {
                                                            className:
                                                              "text-gray-700 mb-4 flex items-start",
                                                            children: [
                                                              d.jsx(Rb, {
                                                                className:
                                                                  "w-4 h-4 mr-2 mt-1 flex-shrink-0",
                                                              }),
                                                              y.authors,
                                                            ],
                                                          }),
                                                          y.link &&
                                                            d.jsxs(V.a, {
                                                              href: y.link,
                                                              target: "_blank",
                                                              rel: "noopener noreferrer",
                                                              className:
                                                                "inline-flex items-center text-blue-600 hover:text-blue-800 font-medium",
                                                              whileHover: {
                                                                x: 5,
                                                              },
                                                              children: [
                                                                "Read Paper",
                                                                d.jsx(ir, {
                                                                  className:
                                                                    "ml-2 h-4 w-4",
                                                                }),
                                                              ],
                                                            }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                              },
                                              y.id || `${y.title}-${b}`,
                                            );
                                          }),
                                        }),
                                      ],
                                    },
                                    g,
                                  );
                            }),
                          }),
                        ],
                      },
                      c.year,
                    )
                  : null,
              ),
            }),
          ],
        }),
      }),
      d.jsx(di, {}),
    ],
  });
}
function LA() {
  const [e, t] = w.useState(null),
    [n, r] = w.useState(null),
    i = [
      { name: "AI Education", color: "rgba(255, 214, 224, 0.5)" },
      { name: "AI Research", color: "rgba(224, 214, 255, 0.5)" },
      { name: "Multimodal AI", color: "rgba(193, 240, 219, 0.5)" },
      { name: "Creativity", color: "rgba(255, 224, 176, 0.5)" },
      { name: "Family Learning", color: "rgba(176, 224, 255, 0.5)" },
      { name: "Generative AI", color: "rgba(176, 255, 224, 0.5)" },
    ],
    s = {
      "post-1": ["AI Education", "Family Learning"],
      "post-2": ["Family Learning", "AI Education"],
      "post-3": ["Multimodal AI", "AI Research"],
      "post-4": ["Creativity", "Generative AI"],
      "post-5": ["Family Learning", "AI Education"],
      "post-6": ["AI Research", "Generative AI"],
      "post-7": ["AI Education", "Family Learning"],
    },
    o = (c) => {
      if (!n) return !0;
      const u = c.id;
      return s[u] ? s[u].includes(n) : !1;
    },
    a = (c) => {
      r(n === c ? null : c);
    };
  w.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const l = [
    {
      id: "post-1",
      title: "AI in the Physical World: How to Build Real-Time Multimodal Apps",
      date: "May 30, 2025",
      author: "Stefania Druga",
      excerpt:
        "A guide to creating multimodal applications that bridge the digital and physical worlds with real-time capabilities.",
      coverImage:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*xx1clm4XX5a4rC-Rnw3nOg.png",
      tags: ["Multimodal AI", "AI Research"],
      slug: "ai-physical-world-multimodal-apps",
      externalUrl:
        "https://medium.com/@Stefania_druga/ai-in-the-physical-world-how-to-build-real-time-multimodal-apps-378c3d4f685d",
    },
    {
      id: "post-2",
      title:
        "Supercharge Your Scratch Projects: Introducing Cognimates Copilot",
      date: "February 20, 2024",
      author: "Stefania Druga",
      excerpt:
        "An AI teammate for kids that helps children enhance their Scratch projects with artificial intelligence capabilities.",
      coverImage:
        "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*cugpF125AeJd3ZYrJpHgkw.gif",
      tags: ["AI Education", "Family Learning"],
      slug: "cognimates-copilot",
      externalUrl:
        "https://medium.com/bits-and-behavior/supercharge-your-scratch-projects-introducing-cognimates-copilot-an-ai-teammate-for-kids-52e616e4096e",
    },
    {
      id: "post-2",
      title:
        "Empowering kids for a Future They'll Help Build: A Parents Handbook",
      date: "January 15, 2024",
      author: "Stefania Druga",
      excerpt:
        "A guide for parents on how to prepare children for a future where they'll actively participate in shaping technology and society.",
      coverImage:
        "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*RgP4s7rea4cXZ5PEUJ50Eg.gif",
      tags: ["Family Learning", "AI Education"],
      slug: "parents-handbook",
      externalUrl:
        "https://medium.com/@Stefania_druga/empowering-kids-for-a-future-theyll-help-build-a-parents-handbook-f1f01ae38718",
    },
    {
      id: "post-3",
      title: "Multimodal AI: A Powerful Tool for Social Good",
      date: "April 19, 2024",
      author: "Stefania Druga",
      excerpt:
        "Summary of my presentation at the Innovation Exchange on how multimodal AI can be leveraged for social impact and addressing real-world challenges.",
      coverImage:
        "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=1740&auto=format&fit=crop",
      tags: ["Multimodal AI", "AI Research"],
      slug: "multimodal-ai-social-good",
    },
    {
      id: "post-4",
      title: "Creativity is dead! Long live creativity.",
      date: "October 10, 2023",
      author: "Stefania Druga",
      excerpt:
        "Musings from Creative Summit 2023 in Sweden on how generative AI is changing creative ecosystems and what this means for human creativity.",
      coverImage:
        "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?q=80&w=1664&auto=format&fit=crop",
      tags: ["Creativity", "Generative AI"],
      slug: "creativity-generative-ai",
    },
    {
      id: "post-5",
      title: "How do children and parents learn about AI together?",
      date: "August 15, 2023",
      author: "Stefania Druga",
      excerpt:
        "Exploring family as a Third Space for AI Literacies and how parents and children can collaboratively develop understanding of AI technologies.",
      coverImage:
        "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=1740&auto=format&fit=crop",
      tags: ["Family Learning", "AI Education"],
      slug: "family-ai-learning",
    },
    {
      id: "post-6",
      title: "So you think you can Agent?",
      date: "July 5, 2023",
      author: "Stefania Druga",
      excerpt:
        "Highlights and lessons from the first Fixie Hackathon in Seattle, exploring the capabilities and limitations of AI agent technologies.",
      coverImage:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
      tags: ["AI Research", "Generative AI"],
      slug: "ai-agent-hackathon",
    },
    {
      id: "post-7",
      title: "The Landscape of Teaching Resources for AI Education",
      date: "June 22, 2023",
      author: "Stefania Druga",
      excerpt:
        "A systematic analysis of existing AI education resources and how they can be effectively used in different learning contexts.",
      coverImage:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1864&auto=format&fit=crop",
      tags: ["AI Education", "Family Learning"],
      slug: "ai-education-resources",
    },
  ];
  return d.jsxs("div", {
    className: "min-h-screen flex flex-col",
    children: [
      d.jsx(ui, {}),
      d.jsxs("main", {
        className: "flex-grow",
        children: [
          d.jsx("div", {
            className: "bg-white py-8 border-b border-gray-100 mt-20",
            children: d.jsx("div", {
              className: "container mx-auto px-6 md:px-16",
              children: d.jsx("p", {
                className: "text-xl text-gray-600 max-w-2xl",
                children:
                  "Thoughts, insights, and tutorials on AI education, research, and industry trends.",
              }),
            }),
          }),
          d.jsx("div", {
            className: "bg-gray-50 py-6 border-b border-gray-100",
            children: d.jsxs("div", {
              className: "container mx-auto px-6 md:px-16",
              children: [
                d.jsxs("div", {
                  className: "flex items-center mb-2",
                  children: [
                    d.jsx(Sb, { className: "w-4 h-4 mr-2 text-gray-600" }),
                    d.jsx("span", {
                      className: "text-gray-600 font-medium",
                      children: "Filter by:",
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "flex flex-wrap gap-2 mt-2",
                  children: [
                    i.map((c) =>
                      d.jsx(
                        "button",
                        {
                          onClick: () => a(c.name),
                          className: `px-3 py-1 rounded-full text-sm transition-colors ${n === c.name ? "bg-gray-800 text-white" : "text-gray-700"}`,
                          style: {
                            backgroundColor: n === c.name ? "#333" : c.color,
                          },
                          children: d.jsxs("span", {
                            className: "flex items-center",
                            children: [
                              c.name,
                              n === c.name &&
                                d.jsx(oa, { className: "w-3 h-3 ml-1" }),
                            ],
                          }),
                        },
                        c.name,
                      ),
                    ),
                    n &&
                      d.jsx("button", {
                        onClick: () => r(null),
                        className:
                          "px-3 py-1 rounded-full text-sm bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors",
                        children: d.jsxs("span", {
                          className: "flex items-center",
                          children: [
                            "Clear Filter",
                            d.jsx(oa, { className: "w-3 h-3 ml-1" }),
                          ],
                        }),
                      }),
                  ],
                }),
              ],
            }),
          }),
          d.jsx("div", {
            className: "py-16 px-6 md:px-16",
            children: d.jsxs("div", {
              className: "container mx-auto",
              children: [
                d.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                  children: l.filter(o).map((c) =>
                    d.jsx(
                      V.div,
                      {
                        className:
                          "bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow",
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: !0, margin: "-50px" },
                        transition: { duration: 0.5 },
                        onMouseEnter: () => t(c.id),
                        onMouseLeave: () => t(null),
                        children: d.jsxs("div", {
                          className: "block",
                          children: [
                            d.jsx("div", {
                              className:
                                "aspect-video bg-gray-100 relative overflow-hidden",
                              children: d.jsx("img", {
                                src: c.coverImage,
                                alt: c.title,
                                className: "w-full h-full object-cover",
                                loading: "lazy",
                              }),
                            }),
                            d.jsxs("div", {
                              className: "p-6",
                              children: [
                                d.jsxs("div", {
                                  className:
                                    "flex items-center text-sm text-gray-500 mb-2",
                                  children: [
                                    d.jsx(Oa, { className: "w-4 h-4 mr-1" }),
                                    d.jsx("span", { children: c.date }),
                                  ],
                                }),
                                d.jsx("h3", {
                                  className:
                                    "text-xl font-bold mb-2 transition-colors",
                                  children: c.title,
                                }),
                                d.jsx("p", {
                                  className: "text-gray-600 mb-4 line-clamp-3",
                                  children: c.excerpt,
                                }),
                                d.jsx("div", {
                                  className: "flex flex-wrap gap-2 mb-4",
                                  children: c.tags.map((u) => {
                                    const f = i.find((h) => h.name === u);
                                    return d.jsx(
                                      "span",
                                      {
                                        className:
                                          "px-2 py-1 text-xs rounded-full",
                                        style: {
                                          backgroundColor:
                                            (f == null ? void 0 : f.color) ||
                                            "rgba(224, 214, 255, 0.5)",
                                        },
                                        children: u,
                                      },
                                      u,
                                    );
                                  }),
                                }),
                                d.jsxs("a", {
                                  href:
                                    c.externalUrl ||
                                    "https://medium.com/@Stefania_druga",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "text-blue-600 inline-flex items-center text-sm font-medium hover:text-blue-800",
                                  children: [
                                    "Read on Medium",
                                    d.jsx(ir, { className: "w-3 h-3 ml-1" }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      c.id,
                    ),
                  ),
                }),
                l.filter(o).length === 0 &&
                  d.jsxs("div", {
                    className: "text-center py-16",
                    children: [
                      d.jsx("h3", {
                        className: "text-xl font-semibold mb-2",
                        children: "No blog posts found",
                      }),
                      d.jsx("p", {
                        className: "text-gray-600",
                        children:
                          "No blog posts match the selected filter. Try a different category.",
                      }),
                    ],
                  }),
              ],
            }),
          }),
        ],
      }),
      d.jsx(di, {}),
    ],
  });
}
function FA() {
  const [, e] = lb("/blog/:slug"),
    t = e == null ? void 0 : e.slug;
  w.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const n = [
      {
        id: "post-1",
        title: "Building Intuitive Multimodal AI Interfaces for Education",
        date: "May 15, 2025",
        author: "Stefania Druga",
        content: `
        <p class="mb-4">Multimodal AI interfaces have the potential to revolutionize how we teach and learn by engaging multiple senses simultaneously. In educational settings, these interfaces can help students grasp complex concepts more intuitively by combining visual, auditory, and interactive elements.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Why Multimodality Matters in Education</h2>
        
        <p class="mb-4">Different students learn in different ways. Some are visual learners who understand concepts better through images and diagrams. Others are auditory learners who benefit from verbal explanations. And some are kinesthetic learners who need hands-on experiences to fully grasp new ideas.</p>
        
        <p class="mb-4">Multimodal AI interfaces address these varying learning styles by presenting information in multiple formats simultaneously. This approach doesn't just accommodate different learning preferences—it actively strengthens connections between different types of understanding.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Practical Applications</h2>
        
        <p class="mb-4">Here are some examples of how multimodal AI interfaces are being used in educational settings:</p>
        
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Interactive science simulations</strong> that combine visual models with verbal explanations and allow students to manipulate variables.</li>
          <li class="mb-2"><strong>Language learning apps</strong> that use speech recognition, text, and images to create immersive learning experiences.</li>
          <li class="mb-2"><strong>Math tutoring systems</strong> that provide step-by-step visual and verbal guidance, adapting to each student's pace and learning style.</li>
        </ul>
        
        <p class="mb-4">One project I've been working on involves using multimodal AI to help children learn programming concepts. By combining visual block-based programming with natural language instructions and interactive feedback, we've created an environment where children can learn computational thinking in a way that feels intuitive and engaging.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Challenges and Considerations</h2>
        
        <p class="mb-4">Despite their potential, multimodal AI interfaces in education face several challenges:</p>
        
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Cognitive load:</strong> Too much information across multiple modalities can overwhelm learners.</li>
          <li class="mb-2"><strong>Accessibility:</strong> Interfaces must be designed to be accessible to students with various abilities.</li>
          <li class="mb-2"><strong>Technical requirements:</strong> Schools with limited technological resources may struggle to implement these solutions.</li>
        </ul>
        
        <p class="mb-4">As we continue to develop and refine multimodal AI interfaces for education, it's essential to keep these considerations in mind and conduct thorough testing with diverse groups of students.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Looking Ahead</h2>
        
        <p class="mb-4">The future of multimodal AI in education looks promising. As technologies like natural language processing, computer vision, and speech recognition continue to advance, we can expect even more sophisticated and personalized learning experiences.</p>
        
        <p class="mb-4">The key will be creating interfaces that don't just use multiple modalities for their own sake, but thoughtfully integrate them to support meaningful learning experiences that are accessible to all students.</p>
      `,
        coverImage: "/assets/images/blog/multimodal-ai-education.jpg",
        tags: ["AI Education", "Multimodal AI"],
        slug: "multimodal-ai-education",
      },
      {
        id: "post-2",
        title: "The Future of AI Research: Trends to Watch in 2025",
        date: "April 22, 2025",
        author: "Stefania Druga",
        content: `
        <p class="mb-4">As we move through 2025, several key trends are emerging in AI research that will likely shape both academic inquiry and industry applications in the coming years.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">1. Multimodal Foundation Models</h2>
        
        <p class="mb-4">While large language models dominated the AI landscape in previous years, we're now seeing the rise of truly multimodal foundation models that can process and generate across text, images, audio, and video simultaneously. These models are showing remarkable capabilities in understanding context across modalities and generating cohesive, creative outputs that blend different media types.</p>
        
        <p class="mb-4">Research directions to watch include:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Models that can reason across modalities rather than just process them independently</li>
          <li class="mb-2">Integration of physical world understanding through robotics applications</li>
          <li class="mb-2">More efficient architectures that reduce the massive computational requirements</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">2. AI for Scientific Discovery</h2>
        
        <p class="mb-4">AI systems are increasingly being applied to accelerate scientific discovery across fields including materials science, drug discovery, and fundamental physics. What's particularly exciting is the emergence of AI systems that can not just predict outcomes but suggest novel hypotheses and experimental designs.</p>
        
        <p class="mb-4">Recent breakthroughs have shown AI systems that can:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Design new molecules with specific properties</li>
          <li class="mb-2">Identify patterns in astronomical data that human scientists missed</li>
          <li class="mb-2">Generate and test scientific hypotheses in automated labs</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">3. Interpretable and Trustworthy AI</h2>
        
        <p class="mb-4">As AI systems become more complex and are deployed in increasingly sensitive domains, the need for interpretability and trustworthiness has never been greater. Research in this area is moving beyond simple explanations of individual predictions to more comprehensive approaches to understanding model behavior.</p>
        
        <p class="mb-4">Key developments include:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">New mathematical frameworks for proving properties of neural networks</li>
          <li class="mb-2">Techniques for evaluating model robustness across diverse contexts</li>
          <li class="mb-2">Methods for detecting and mitigating bias in complex systems</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">4. AI for Sustainability</h2>
        
        <p class="mb-4">With increasing awareness of climate change and environmental challenges, AI research is focusing more on sustainability applications. This includes both using AI to address environmental problems and making AI itself more environmentally friendly.</p>
        
        <p class="mb-4">Notable research directions include:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Climate modeling and prediction at unprecedented scales</li>
          <li class="mb-2">Optimization of energy systems and smart grids</li>
          <li class="mb-2">More energy-efficient AI training and inference techniques</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">5. Human-AI Collaboration</h2>
        
        <p class="mb-4">Rather than viewing AI as either a tool or a replacement for human work, research is increasingly focusing on how humans and AI can work together effectively, leveraging the strengths of both.</p>
        
        <p class="mb-4">Exciting developments in this space include:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">AI systems that can adapt to individual human work styles and preferences</li>
          <li class="mb-2">Collaborative interfaces that make AI capabilities more accessible to non-experts</li>
          <li class="mb-2">Studies on how AI affects human skill development and creativity</li>
        </ul>
        
        <p class="mb-4">As these research trends continue to develop, we can expect to see increasingly sophisticated AI applications that address complex real-world problems while working harmoniously with human users.</p>
      `,
        coverImage: "/assets/images/blog/ai-research-trends.jpg",
        tags: ["AI Research", "Industry Insights"],
        slug: "ai-research-trends-2025",
      },
      {
        id: "post-3",
        title:
          "Tutorial: Creating AI-Enhanced Learning Activities for Children",
        date: "March 8, 2025",
        author: "Stefania Druga",
        content: `
        <p class="mb-4">AI tools offer exciting new possibilities for creating engaging learning activities for children. In this tutorial, I'll walk through the process of designing educational experiences that thoughtfully incorporate AI while promoting creativity and critical thinking.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Step 1: Define Your Learning Objectives</h2>
        
        <p class="mb-4">Before incorporating any technology, start by clearly defining what you want children to learn. Consider:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Specific knowledge or skills you want to develop</li>
          <li class="mb-2">Age-appropriate learning goals</li>
          <li class="mb-2">How you'll measure or observe progress</li>
        </ul>
        
        <p class="mb-4">For this tutorial, let's say our objective is to help 8-10 year olds develop storytelling skills while learning about different ecosystems.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Step 2: Choose Appropriate AI Tools</h2>
        
        <p class="mb-4">Many AI tools are available, but not all are suitable for children. Look for:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Age-appropriate content and safety features</li>
          <li class="mb-2">Intuitive interfaces that children can navigate</li>
          <li class="mb-2">Tools that complement rather than replace creative thinking</li>
        </ul>
        
        <p class="mb-4">For our example, we might use:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">A child-friendly text-to-image generator for creating ecosystem visuals</li>
          <li class="mb-2">A simple AI assistant that can answer questions about animals and plants</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Step 3: Design the Activity Structure</h2>
        
        <p class="mb-4">Create a clear structure that integrates AI tools as part of a broader learning experience:</p>
        
        <h3 class="text-xl font-semibold mt-6 mb-3">Example Activity: "Ecosystem Storytellers"</h3>
        
        <ol class="list-decimal pl-6 mb-4">
          <li class="mb-2">
            <strong>Introduction (15 minutes):</strong> Show children pictures of different ecosystems (desert, rainforest, ocean) and discuss the plants and animals that live there.
          </li>
          <li class="mb-2">
            <strong>Research Phase (20 minutes):</strong> Children use the AI assistant to learn about an ecosystem of their choice, asking questions like "What animals live in the rainforest?" or "How do plants survive in the desert?"
          </li>
          <li class="mb-2">
            <strong>Story Planning (15 minutes):</strong> Children create a story outline featuring animals from their chosen ecosystem, deciding on characters and a simple plot.
          </li>
          <li class="mb-2">
            <strong>Illustration Creation (20 minutes):</strong> Using the text-to-image generator, children create illustrations for their story by describing scenes from their ecosystem.
          </li>
          <li class="mb-2">
            <strong>Storytelling (25 minutes):</strong> Children finalize their stories and share them with the group.
          </li>
          <li class="mb-2">
            <strong>Reflection (15 minutes):</strong> Discuss what children learned about ecosystems and how the AI tools helped their creative process.
          </li>
        </ol>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Step 4: Prepare Supporting Materials</h2>
        
        <p class="mb-4">Create resources to guide the activity:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Simple instructions for using the AI tools</li>
          <li class="mb-2">Ecosystem fact sheets as backup information</li>
          <li class="mb-2">Story planning templates</li>
          <li class="mb-2">Questions to guide reflection</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Step 5: Facilitate the Learning Experience</h2>
        
        <p class="mb-4">When running the activity:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Model how to use the AI tools appropriately</li>
          <li class="mb-2">Encourage children to think critically about AI-generated information</li>
          <li class="mb-2">Provide support when needed, but allow for exploration</li>
          <li class="mb-2">Emphasize that AI is a tool to enhance creativity, not replace it</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Step 6: Assess and Iterate</h2>
        
        <p class="mb-4">After running the activity:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Observe which parts of the activity engaged children most</li>
          <li class="mb-2">Note any challenges children faced with the AI tools</li>
          <li class="mb-2">Gather feedback from children about their experience</li>
          <li class="mb-2">Refine the activity based on your observations</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Tips for Success</h2>
        
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Balance screen time</strong> with hands-on activities</li>
          <li class="mb-2"><strong>Discuss AI literacy</strong> as part of the activity</li>
          <li class="mb-2"><strong>Have non-digital alternatives</strong> ready in case of technical issues</li>
          <li class="mb-2"><strong>Focus on the learning objectives</strong> rather than the technology</li>
        </ul>
        
        <p class="mb-4">By thoughtfully incorporating AI tools into learning activities, we can create engaging experiences that help children develop important skills while also learning to interact with AI in productive ways.</p>
      `,
        coverImage: "/assets/images/blog/ai-learning-activities.jpg",
        tags: ["Tutorials", "AI Education"],
        slug: "ai-learning-activities-tutorial",
      },
    ],
    r = n.find((s) => s.slug === t);
  if (!r)
    return d.jsxs("div", {
      className: "min-h-screen flex flex-col",
      children: [
        d.jsx(ui, {}),
        d.jsx("main", {
          className: "flex-grow flex items-center justify-center",
          children: d.jsxs("div", {
            className: "text-center",
            children: [
              d.jsx("h1", {
                className: "text-4xl font-bold mb-4",
                children: "Blog Post Not Found",
              }),
              d.jsx("p", {
                className: "text-gray-600 mb-6",
                children:
                  "The blog post you're looking for doesn't exist or has been removed.",
              }),
              d.jsx(Ge, {
                href: "/blog",
                children: d.jsxs("a", {
                  className:
                    "inline-flex items-center text-blue-600 font-medium",
                  children: [
                    d.jsx(sa, { className: "w-4 h-4 mr-2" }),
                    "Back to All Blog Posts",
                  ],
                }),
              }),
            ],
          }),
        }),
        d.jsx(di, {}),
      ],
    });
  const i = n
    .filter((s) => s.id !== r.id && s.tags.some((o) => r.tags.includes(o)))
    .slice(0, 2);
  return d.jsxs("div", {
    className: "min-h-screen flex flex-col",
    children: [
      d.jsx(ui, {}),
      d.jsxs("main", {
        className: "flex-grow",
        children: [
          d.jsxs("div", {
            className: "relative h-[40vh] md:h-[50vh] bg-gray-100",
            children: [
              d.jsx("div", {
                className: "absolute inset-0 bg-center bg-cover",
                style: {
                  backgroundImage: `url(${r.coverImage})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                },
                children: d.jsx("div", {
                  className: "absolute inset-0 bg-black bg-opacity-40",
                }),
              }),
              d.jsx("div", {
                className:
                  "container mx-auto px-6 md:px-16 relative h-full flex items-end pb-12",
                children: d.jsxs("div", {
                  className: "text-white max-w-2xl",
                  children: [
                    d.jsx(Ge, {
                      href: "/blog",
                      children: d.jsxs("a", {
                        className:
                          "inline-flex items-center text-white opacity-80 hover:opacity-100 mb-6",
                        children: [
                          d.jsx(sa, { className: "w-4 h-4 mr-2" }),
                          "Back to All Blog Posts",
                        ],
                      }),
                    }),
                    d.jsx("h1", {
                      className:
                        "text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
                      children: r.title,
                    }),
                    d.jsxs("div", {
                      className:
                        "flex flex-wrap items-center text-sm opacity-80",
                      children: [
                        d.jsxs("div", {
                          className: "flex items-center mr-6 mb-2",
                          children: [
                            d.jsx(Oa, { className: "w-4 h-4 mr-1" }),
                            d.jsx("span", { children: r.date }),
                          ],
                        }),
                        d.jsxs("div", {
                          className: "flex items-center mb-2",
                          children: [
                            d.jsx(Mb, { className: "w-4 h-4 mr-1" }),
                            d.jsx("span", { children: r.author }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          d.jsx("div", {
            className: "bg-gray-50 py-6 border-b border-gray-100",
            children: d.jsx("div", {
              className: "container mx-auto px-6 md:px-16",
              children: d.jsxs("div", {
                className: "flex items-center justify-between flex-wrap",
                children: [
                  d.jsxs("div", {
                    className: "flex items-center mb-4 md:mb-0",
                    children: [
                      d.jsx(ou, { className: "w-5 h-5 mr-2 text-gray-700" }),
                      d.jsx("span", {
                        className: "text-gray-700 font-medium",
                        children: "Enjoy this post? Subscribe for updates:",
                      }),
                    ],
                  }),
                  d.jsxs("a", {
                    href: "https://stefaniadruga.substack.com/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "inline-flex items-center bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors",
                    children: [
                      "Subscribe to Newsletter",
                      d.jsx(ir, { className: "ml-2 h-4 w-4" }),
                    ],
                  }),
                ],
              }),
            }),
          }),
          d.jsx("div", {
            className: "py-12 px-6 md:px-16",
            children: d.jsx("div", {
              className: "container mx-auto",
              children: d.jsxs("div", {
                className: "flex flex-col lg:flex-row gap-12",
                children: [
                  d.jsxs("div", {
                    className: "lg:w-2/3",
                    children: [
                      d.jsx("article", {
                        className: "prose prose-lg max-w-none",
                        children: d.jsx("div", {
                          dangerouslySetInnerHTML: { __html: r.content },
                        }),
                      }),
                      d.jsxs("div", {
                        className: "mt-12 pt-8 border-t border-gray-100",
                        children: [
                          d.jsxs("h3", {
                            className:
                              "text-gray-700 font-medium mb-3 flex items-center",
                            children: [
                              d.jsx(Ib, { className: "w-4 h-4 mr-2" }),
                              "Topics",
                            ],
                          }),
                          d.jsx("div", {
                            className: "flex flex-wrap gap-2",
                            children: r.tags.map((s) =>
                              d.jsx(
                                Ge,
                                {
                                  href: `/blog?tag=${encodeURIComponent(s)}`,
                                  children: d.jsx("a", {
                                    className:
                                      "px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors",
                                    children: s,
                                  }),
                                },
                                s,
                              ),
                            ),
                          }),
                        ],
                      }),
                      d.jsxs("div", {
                        className: "mt-8",
                        children: [
                          d.jsxs("h3", {
                            className:
                              "text-gray-700 font-medium mb-3 flex items-center",
                            children: [
                              d.jsx(Nb, { className: "w-4 h-4 mr-2" }),
                              "Share this post",
                            ],
                          }),
                          d.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              d.jsx("a", {
                                href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(r.title)}&url=${encodeURIComponent(window.location.href)}`,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                  "p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
                                children: d.jsx("svg", {
                                  className: "w-5 h-5 text-gray-700",
                                  viewBox: "0 0 24 24",
                                  fill: "currentColor",
                                  children: d.jsx("path", {
                                    d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548z",
                                  }),
                                }),
                              }),
                              d.jsx("a", {
                                href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                  "p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
                                children: d.jsx("svg", {
                                  className: "w-5 h-5 text-gray-700",
                                  viewBox: "0 0 24 24",
                                  fill: "currentColor",
                                  children: d.jsx("path", {
                                    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                                  }),
                                }),
                              }),
                              d.jsx("a", {
                                href: `mailto:?subject=${encodeURIComponent(r.title)}&body=${encodeURIComponent(window.location.href)}`,
                                className:
                                  "p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
                                children: d.jsxs("svg", {
                                  className: "w-5 h-5 text-gray-700",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeWidth: "2",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  children: [
                                    d.jsx("path", {
                                      d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
                                    }),
                                    d.jsx("polyline", {
                                      points: "22,6 12,13 2,6",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "lg:w-1/3 mt-12 lg:mt-0",
                    children: [
                      d.jsxs("div", {
                        className: "bg-gray-50 p-6 rounded-xl mb-8",
                        children: [
                          d.jsx("h3", {
                            className: "text-lg font-semibold mb-4",
                            children: "About the Author",
                          }),
                          d.jsx("p", {
                            className: "text-gray-600 mb-4",
                            children:
                              "Stefania Druga is a researcher and educator specializing in AI education, child-computer interaction, and creative computing. Her work focuses on making AI more accessible and understandable for learners of all ages.",
                          }),
                          d.jsxs("a", {
                            href: "https://linkedin.com/in/stefania-druga",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "text-blue-600 inline-flex items-center text-sm font-medium",
                            children: [
                              "View Profile",
                              d.jsx(ir, { className: "ml-1 w-3 h-3" }),
                            ],
                          }),
                        ],
                      }),
                      i.length > 0 &&
                        d.jsxs("div", {
                          className: "mb-8",
                          children: [
                            d.jsx("h3", {
                              className: "text-lg font-semibold mb-4",
                              children: "Related Posts",
                            }),
                            d.jsx("div", {
                              className: "space-y-4",
                              children: i.map((s) =>
                                d.jsx(
                                  Ge,
                                  {
                                    href: `/blog/${s.slug}`,
                                    children: d.jsx("a", {
                                      className: "block group",
                                      children: d.jsxs("div", {
                                        className: "flex items-start",
                                        children: [
                                          d.jsx("div", {
                                            className:
                                              "w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100",
                                            children: d.jsx("div", {
                                              className:
                                                "w-full h-full bg-center bg-cover",
                                              style: {
                                                backgroundImage: `url(${s.coverImage})`,
                                                backgroundPosition: "center",
                                                backgroundSize: "cover",
                                              },
                                            }),
                                          }),
                                          d.jsxs("div", {
                                            className: "ml-4",
                                            children: [
                                              d.jsx("h4", {
                                                className:
                                                  "font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2",
                                                children: s.title,
                                              }),
                                              d.jsx("div", {
                                                className:
                                                  "text-sm text-gray-500 mt-1",
                                                children: s.date,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  },
                                  s.id,
                                ),
                              ),
                            }),
                          ],
                        }),
                      d.jsxs("div", {
                        className: "bg-gray-800 text-white p-6 rounded-xl",
                        children: [
                          d.jsxs("div", {
                            className: "flex items-center mb-4",
                            children: [
                              d.jsx(ou, {
                                className: "w-6 h-6 mr-3 text-gray-300",
                              }),
                              d.jsx("h3", {
                                className: "text-lg font-semibold",
                                children: "Subscribe to Updates",
                              }),
                            ],
                          }),
                          d.jsx("p", {
                            className: "text-gray-300 mb-4",
                            children:
                              "Get new blog posts and updates delivered directly to your inbox.",
                          }),
                          d.jsxs("a", {
                            href: "https://stefaniadruga.substack.com/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "inline-flex items-center bg-white text-gray-800 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors w-full justify-center",
                            children: [
                              "Subscribe to Newsletter",
                              d.jsx(ir, { className: "ml-2 h-4 w-4" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
      d.jsx(di, {}),
    ],
  });
}
function R0(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = R0(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function L0() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = R0(e)) && (r && (r += " "), (r += t));
  return r;
}
const Yd = "-",
  _A = (e) => {
    const t = VA(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (o) => {
        const a = o.split(Yd);
        return a[0] === "" && a.length !== 1 && a.shift(), F0(a, t) || OA(o);
      },
      getConflictingClassGroupIds: (o, a) => {
        const l = n[o] || [];
        return a && r[o] ? [...l, ...r[o]] : l;
      },
    };
  },
  F0 = (e, t) => {
    var o;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      i = r ? F0(e.slice(1), r) : void 0;
    if (i) return i;
    if (t.validators.length === 0) return;
    const s = e.join(Yd);
    return (o = t.validators.find(({ validator: a }) => a(s))) == null
      ? void 0
      : o.classGroupId;
  },
  em = /^\[(.+)\]$/,
  OA = (e) => {
    if (em.test(e)) {
      const t = em.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  VA = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      BA(Object.entries(e.classGroups), n).forEach(([s, o]) => {
        au(o, r, s, t);
      }),
      r
    );
  },
  au = (e, t, n, r) => {
    e.forEach((i) => {
      if (typeof i == "string") {
        const s = i === "" ? t : tm(t, i);
        s.classGroupId = n;
        return;
      }
      if (typeof i == "function") {
        if (zA(i)) {
          au(i(r), t, n, r);
          return;
        }
        t.validators.push({ validator: i, classGroupId: n });
        return;
      }
      Object.entries(i).forEach(([s, o]) => {
        au(o, tm(t, s), n, r);
      });
    });
  },
  tm = (e, t) => {
    let n = e;
    return (
      t.split(Yd).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  zA = (e) => e.isThemeGetter,
  BA = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const i = r.map((s) =>
            typeof s == "string"
              ? t + s
              : typeof s == "object"
                ? Object.fromEntries(
                    Object.entries(s).map(([o, a]) => [t + o, a]),
                  )
                : s,
          );
          return [n, i];
        })
      : e,
  UA = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const i = (s, o) => {
      n.set(s, o), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(s) {
        let o = n.get(s);
        if (o !== void 0) return o;
        if ((o = r.get(s)) !== void 0) return i(s, o), o;
      },
      set(s, o) {
        n.has(s) ? n.set(s, o) : i(s, o);
      },
    };
  },
  _0 = "!",
  HA = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      i = t[0],
      s = t.length,
      o = (a) => {
        const l = [];
        let c = 0,
          u = 0,
          f;
        for (let b = 0; b < a.length; b++) {
          let m = a[b];
          if (c === 0) {
            if (m === i && (r || a.slice(b, b + s) === t)) {
              l.push(a.slice(u, b)), (u = b + s);
              continue;
            }
            if (m === "/") {
              f = b;
              continue;
            }
          }
          m === "[" ? c++ : m === "]" && c--;
        }
        const h = l.length === 0 ? a : a.substring(u),
          g = h.startsWith(_0),
          x = g ? h.substring(1) : h,
          y = f && f > u ? f - u : void 0;
        return {
          modifiers: l,
          hasImportantModifier: g,
          baseClassName: x,
          maybePostfixModifierPosition: y,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: o }) : o;
  },
  $A = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  WA = (e) => ({ cache: UA(e.cacheSize), parseClassName: HA(e), ..._A(e) }),
  KA = /\s+/,
  GA = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
      } = t,
      s = [],
      o = e.trim().split(KA);
    let a = "";
    for (let l = o.length - 1; l >= 0; l -= 1) {
      const c = o[l],
        {
          modifiers: u,
          hasImportantModifier: f,
          baseClassName: h,
          maybePostfixModifierPosition: g,
        } = n(c);
      let x = !!g,
        y = r(x ? h.substring(0, g) : h);
      if (!y) {
        if (!x) {
          a = c + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((y = r(h)), !y)) {
          a = c + (a.length > 0 ? " " + a : a);
          continue;
        }
        x = !1;
      }
      const b = $A(u).join(":"),
        m = f ? b + _0 : b,
        p = m + y;
      if (s.includes(p)) continue;
      s.push(p);
      const v = i(y, x);
      for (let S = 0; S < v.length; ++S) {
        const C = v[S];
        s.push(m + C);
      }
      a = c + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function QA() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = O0(t)) && (r && (r += " "), (r += n));
  return r;
}
const O0 = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = O0(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function YA(e, ...t) {
  let n,
    r,
    i,
    s = o;
  function o(l) {
    const c = t.reduce((u, f) => f(u), e());
    return (n = WA(c)), (r = n.cache.get), (i = n.cache.set), (s = a), a(l);
  }
  function a(l) {
    const c = r(l);
    if (c) return c;
    const u = GA(l, n);
    return i(l, u), u;
  }
  return function () {
    return s(QA.apply(null, arguments));
  };
}
const Z = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  V0 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  qA = /^\d+\/\d+$/,
  XA = new Set(["px", "full", "screen"]),
  JA = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  ZA =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  eP = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  tP = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  nP =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Ht = (e) => Ur(e) || XA.has(e) || qA.test(e),
  ln = (e) => wi(e, "length", uP),
  Ur = (e) => !!e && !Number.isNaN(Number(e)),
  $l = (e) => wi(e, "number", Ur),
  Ri = (e) => !!e && Number.isInteger(Number(e)),
  rP = (e) => e.endsWith("%") && Ur(e.slice(0, -1)),
  B = (e) => V0.test(e),
  cn = (e) => JA.test(e),
  iP = new Set(["length", "size", "percentage"]),
  sP = (e) => wi(e, iP, z0),
  oP = (e) => wi(e, "position", z0),
  aP = new Set(["image", "url"]),
  lP = (e) => wi(e, aP, fP),
  cP = (e) => wi(e, "", dP),
  Li = () => !0,
  wi = (e, t, n) => {
    const r = V0.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  uP = (e) => ZA.test(e) && !eP.test(e),
  z0 = () => !1,
  dP = (e) => tP.test(e),
  fP = (e) => nP.test(e),
  hP = () => {
    const e = Z("colors"),
      t = Z("spacing"),
      n = Z("blur"),
      r = Z("brightness"),
      i = Z("borderColor"),
      s = Z("borderRadius"),
      o = Z("borderSpacing"),
      a = Z("borderWidth"),
      l = Z("contrast"),
      c = Z("grayscale"),
      u = Z("hueRotate"),
      f = Z("invert"),
      h = Z("gap"),
      g = Z("gradientColorStops"),
      x = Z("gradientColorStopPositions"),
      y = Z("inset"),
      b = Z("margin"),
      m = Z("opacity"),
      p = Z("padding"),
      v = Z("saturate"),
      S = Z("scale"),
      C = Z("sepia"),
      k = Z("skew"),
      A = Z("space"),
      E = Z("translate"),
      I = () => ["auto", "contain", "none"],
      N = () => ["auto", "hidden", "clip", "visible", "scroll"],
      z = () => ["auto", B, t],
      F = () => [B, t],
      K = () => ["", Ht, ln],
      M = () => ["auto", Ur, B],
      Q = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      H = () => ["solid", "dashed", "dotted", "double", "none"],
      O = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      P = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      D = () => ["", "0", B],
      L = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      $ = () => [Ur, B];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Li],
        spacing: [Ht, ln],
        blur: ["none", "", cn, B],
        brightness: $(),
        borderColor: [e],
        borderRadius: ["none", "", "full", cn, B],
        borderSpacing: F(),
        borderWidth: K(),
        contrast: $(),
        grayscale: D(),
        hueRotate: $(),
        invert: D(),
        gap: F(),
        gradientColorStops: [e],
        gradientColorStopPositions: [rP, ln],
        inset: z(),
        margin: z(),
        opacity: $(),
        padding: F(),
        saturate: $(),
        scale: $(),
        sepia: D(),
        skew: $(),
        space: F(),
        translate: F(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", B] }],
        container: ["container"],
        columns: [{ columns: [cn] }],
        "break-after": [{ "break-after": L() }],
        "break-before": [{ "break-before": L() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...Q(), B] }],
        overflow: [{ overflow: N() }],
        "overflow-x": [{ "overflow-x": N() }],
        "overflow-y": [{ "overflow-y": N() }],
        overscroll: [{ overscroll: I() }],
        "overscroll-x": [{ "overscroll-x": I() }],
        "overscroll-y": [{ "overscroll-y": I() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [y] }],
        "inset-x": [{ "inset-x": [y] }],
        "inset-y": [{ "inset-y": [y] }],
        start: [{ start: [y] }],
        end: [{ end: [y] }],
        top: [{ top: [y] }],
        right: [{ right: [y] }],
        bottom: [{ bottom: [y] }],
        left: [{ left: [y] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Ri, B] }],
        basis: [{ basis: z() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", B] }],
        grow: [{ grow: D() }],
        shrink: [{ shrink: D() }],
        order: [{ order: ["first", "last", "none", Ri, B] }],
        "grid-cols": [{ "grid-cols": [Li] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Ri, B] }, B] }],
        "col-start": [{ "col-start": M() }],
        "col-end": [{ "col-end": M() }],
        "grid-rows": [{ "grid-rows": [Li] }],
        "row-start-end": [{ row: ["auto", { span: [Ri, B] }, B] }],
        "row-start": [{ "row-start": M() }],
        "row-end": [{ "row-end": M() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", B] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", B] }],
        gap: [{ gap: [h] }],
        "gap-x": [{ "gap-x": [h] }],
        "gap-y": [{ "gap-y": [h] }],
        "justify-content": [{ justify: ["normal", ...P()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...P(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...P(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [p] }],
        px: [{ px: [p] }],
        py: [{ py: [p] }],
        ps: [{ ps: [p] }],
        pe: [{ pe: [p] }],
        pt: [{ pt: [p] }],
        pr: [{ pr: [p] }],
        pb: [{ pb: [p] }],
        pl: [{ pl: [p] }],
        m: [{ m: [b] }],
        mx: [{ mx: [b] }],
        my: [{ my: [b] }],
        ms: [{ ms: [b] }],
        me: [{ me: [b] }],
        mt: [{ mt: [b] }],
        mr: [{ mr: [b] }],
        mb: [{ mb: [b] }],
        ml: [{ ml: [b] }],
        "space-x": [{ "space-x": [A] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [A] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", B, t] }],
        "min-w": [{ "min-w": [B, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              B,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [cn] },
              cn,
            ],
          },
        ],
        h: [{ h: [B, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [B, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [B, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [B, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", cn, ln] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              $l,
            ],
          },
        ],
        "font-family": [{ font: [Li] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              B,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Ur, $l] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Ht,
              B,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", B] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", B] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [m] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [m] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...H(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Ht, ln] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Ht, B] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: F() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              B,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", B] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [m] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Q(), oP] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", sP] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              lP,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [x] }],
        "gradient-via-pos": [{ via: [x] }],
        "gradient-to-pos": [{ to: [x] }],
        "gradient-from": [{ from: [g] }],
        "gradient-via": [{ via: [g] }],
        "gradient-to": [{ to: [g] }],
        rounded: [{ rounded: [s] }],
        "rounded-s": [{ "rounded-s": [s] }],
        "rounded-e": [{ "rounded-e": [s] }],
        "rounded-t": [{ "rounded-t": [s] }],
        "rounded-r": [{ "rounded-r": [s] }],
        "rounded-b": [{ "rounded-b": [s] }],
        "rounded-l": [{ "rounded-l": [s] }],
        "rounded-ss": [{ "rounded-ss": [s] }],
        "rounded-se": [{ "rounded-se": [s] }],
        "rounded-ee": [{ "rounded-ee": [s] }],
        "rounded-es": [{ "rounded-es": [s] }],
        "rounded-tl": [{ "rounded-tl": [s] }],
        "rounded-tr": [{ "rounded-tr": [s] }],
        "rounded-br": [{ "rounded-br": [s] }],
        "rounded-bl": [{ "rounded-bl": [s] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [m] }],
        "border-style": [{ border: [...H(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [m] }],
        "divide-style": [{ divide: H() }],
        "border-color": [{ border: [i] }],
        "border-color-x": [{ "border-x": [i] }],
        "border-color-y": [{ "border-y": [i] }],
        "border-color-s": [{ "border-s": [i] }],
        "border-color-e": [{ "border-e": [i] }],
        "border-color-t": [{ "border-t": [i] }],
        "border-color-r": [{ "border-r": [i] }],
        "border-color-b": [{ "border-b": [i] }],
        "border-color-l": [{ "border-l": [i] }],
        "divide-color": [{ divide: [i] }],
        "outline-style": [{ outline: ["", ...H()] }],
        "outline-offset": [{ "outline-offset": [Ht, B] }],
        "outline-w": [{ outline: [Ht, ln] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: K() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [m] }],
        "ring-offset-w": [{ "ring-offset": [Ht, ln] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", cn, cP] }],
        "shadow-color": [{ shadow: [Li] }],
        opacity: [{ opacity: [m] }],
        "mix-blend": [{ "mix-blend": [...O(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": O() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", cn, B] }],
        grayscale: [{ grayscale: [c] }],
        "hue-rotate": [{ "hue-rotate": [u] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [v] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
        "backdrop-invert": [{ "backdrop-invert": [f] }],
        "backdrop-opacity": [{ "backdrop-opacity": [m] }],
        "backdrop-saturate": [{ "backdrop-saturate": [v] }],
        "backdrop-sepia": [{ "backdrop-sepia": [C] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [o] }],
        "border-spacing-x": [{ "border-spacing-x": [o] }],
        "border-spacing-y": [{ "border-spacing-y": [o] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              B,
            ],
          },
        ],
        duration: [{ duration: $() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", B] }],
        delay: [{ delay: $() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", B] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [S] }],
        "scale-x": [{ "scale-x": [S] }],
        "scale-y": [{ "scale-y": [S] }],
        rotate: [{ rotate: [Ri, B] }],
        "translate-x": [{ "translate-x": [E] }],
        "translate-y": [{ "translate-y": [E] }],
        "skew-x": [{ "skew-x": [k] }],
        "skew-y": [{ "skew-y": [k] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              B,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              B,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": F() }],
        "scroll-mx": [{ "scroll-mx": F() }],
        "scroll-my": [{ "scroll-my": F() }],
        "scroll-ms": [{ "scroll-ms": F() }],
        "scroll-me": [{ "scroll-me": F() }],
        "scroll-mt": [{ "scroll-mt": F() }],
        "scroll-mr": [{ "scroll-mr": F() }],
        "scroll-mb": [{ "scroll-mb": F() }],
        "scroll-ml": [{ "scroll-ml": F() }],
        "scroll-p": [{ "scroll-p": F() }],
        "scroll-px": [{ "scroll-px": F() }],
        "scroll-py": [{ "scroll-py": F() }],
        "scroll-ps": [{ "scroll-ps": F() }],
        "scroll-pe": [{ "scroll-pe": F() }],
        "scroll-pt": [{ "scroll-pt": F() }],
        "scroll-pr": [{ "scroll-pr": F() }],
        "scroll-pb": [{ "scroll-pb": F() }],
        "scroll-pl": [{ "scroll-pl": F() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", B] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Ht, ln, $l] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  pP = YA(hP);
function rt(...e) {
  return pP(L0(e));
}
const B0 = w.forwardRef(({ className: e, ...t }, n) =>
  d.jsx("div", {
    ref: n,
    className: rt(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e,
    ),
    ...t,
  }),
);
B0.displayName = "Card";
const mP = w.forwardRef(({ className: e, ...t }, n) =>
  d.jsx("div", {
    ref: n,
    className: rt("flex flex-col space-y-1.5 p-6", e),
    ...t,
  }),
);
mP.displayName = "CardHeader";
const gP = w.forwardRef(({ className: e, ...t }, n) =>
  d.jsx("div", {
    ref: n,
    className: rt("text-2xl font-semibold leading-none tracking-tight", e),
    ...t,
  }),
);
gP.displayName = "CardTitle";
const yP = w.forwardRef(({ className: e, ...t }, n) =>
  d.jsx("div", {
    ref: n,
    className: rt("text-sm text-muted-foreground", e),
    ...t,
  }),
);
yP.displayName = "CardDescription";
const U0 = w.forwardRef(({ className: e, ...t }, n) =>
  d.jsx("div", { ref: n, className: rt("p-6 pt-0", e), ...t }),
);
U0.displayName = "CardContent";
const vP = w.forwardRef(({ className: e, ...t }, n) =>
  d.jsx("div", {
    ref: n,
    className: rt("flex items-center p-6 pt-0", e),
    ...t,
  }),
);
vP.displayName = "CardFooter";
function xP() {
  return (
    w.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    d.jsx("div", {
      className:
        "min-h-screen w-full flex items-center justify-center bg-gray-50",
      children: d.jsx(B0, {
        className: "w-full max-w-md mx-4",
        children: d.jsxs(U0, {
          className: "pt-6",
          children: [
            d.jsxs("div", {
              className: "flex mb-4 gap-2",
              children: [
                d.jsx(xb, { className: "h-8 w-8 text-red-500" }),
                d.jsx("h1", {
                  className: "text-2xl font-bold text-gray-900",
                  children: "404 Page Not Found",
                }),
              ],
            }),
            d.jsx("p", {
              className: "mt-4 text-sm text-gray-600",
              children: "Did you forget to add the page to the router?",
            }),
          ],
        }),
      }),
    })
  );
}
function wP() {
  return d.jsxs(db, {
    children: [
      d.jsx(yr, { path: "/", component: DA }),
      d.jsx(yr, { path: "/resume", component: MA }),
      d.jsx(yr, { path: "/publications", component: RA }),
      d.jsx(yr, { path: "/blog", component: LA }),
      d.jsx(yr, { path: "/blog/:slug", component: FA }),
      d.jsx(yr, { component: xP }),
    ],
  });
}
var Wa = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Ka = typeof window > "u" || "Deno" in globalThis;
function vt() {}
function bP(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function SP(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function CP(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function nm(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kP(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function rm(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: i,
    predicate: s,
    queryKey: o,
    stale: a,
  } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== qd(o, t.options)) return !1;
    } else if (!As(t.queryKey, o)) return !1;
  }
  if (n !== "all") {
    const l = t.isActive();
    if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (i && i !== t.state.fetchStatus) ||
    (s && !s(t))
  );
}
function im(e, t) {
  const { exact: n, status: r, predicate: i, mutationKey: s } = e;
  if (s) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Es(t.options.mutationKey) !== Es(s)) return !1;
    } else if (!As(t.options.mutationKey, s)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function qd(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Es)(e);
}
function Es(e) {
  return JSON.stringify(e, (t, n) =>
    lu(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, i) => ((r[i] = n[i]), r), {})
      : n,
  );
}
function As(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? !Object.keys(t).some((n) => !As(e[n], t[n]))
        : !1;
}
function H0(e, t) {
  if (e === t) return e;
  const n = sm(e) && sm(t);
  if (n || (lu(e) && lu(t))) {
    const r = n ? e : Object.keys(e),
      i = r.length,
      s = n ? t : Object.keys(t),
      o = s.length,
      a = n ? [] : {};
    let l = 0;
    for (let c = 0; c < o; c++) {
      const u = n ? c : s[c];
      ((!n && r.includes(u)) || n) && e[u] === void 0 && t[u] === void 0
        ? ((a[u] = void 0), l++)
        : ((a[u] = H0(e[u], t[u])), a[u] === e[u] && e[u] !== void 0 && l++);
    }
    return i === o && l === i ? e : a;
  }
  return t;
}
function sm(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function lu(e) {
  if (!om(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !om(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function om(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function EP(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function AP(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
      ? H0(e, t)
      : t;
}
function PP(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function TP(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Xd = Symbol();
function $0(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Xd
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var Jn,
  gn,
  $r,
  Em,
  jP =
    ((Em = class extends Wa {
      constructor() {
        super();
        Y(this, Jn);
        Y(this, gn);
        Y(this, $r);
        U(this, $r, (t) => {
          if (!Ka && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        T(this, gn) || this.setEventListener(T(this, $r));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = T(this, gn)) == null || t.call(this), U(this, gn, void 0));
      }
      setEventListener(t) {
        var n;
        U(this, $r, t),
          (n = T(this, gn)) == null || n.call(this),
          U(
            this,
            gn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            }),
          );
      }
      setFocused(t) {
        T(this, Jn) !== t && (U(this, Jn, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof T(this, Jn) == "boolean"
          ? T(this, Jn)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Jn = new WeakMap()),
    (gn = new WeakMap()),
    ($r = new WeakMap()),
    Em),
  W0 = new jP(),
  Wr,
  yn,
  Kr,
  Am,
  NP =
    ((Am = class extends Wa {
      constructor() {
        super();
        Y(this, Wr, !0);
        Y(this, yn);
        Y(this, Kr);
        U(this, Kr, (t) => {
          if (!Ka && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        T(this, yn) || this.setEventListener(T(this, Kr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = T(this, yn)) == null || t.call(this), U(this, yn, void 0));
      }
      setEventListener(t) {
        var n;
        U(this, Kr, t),
          (n = T(this, yn)) == null || n.call(this),
          U(this, yn, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        T(this, Wr) !== t &&
          (U(this, Wr, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return T(this, Wr);
      }
    }),
    (Wr = new WeakMap()),
    (yn = new WeakMap()),
    (Kr = new WeakMap()),
    Am),
  ga = new NP();
function IP() {
  let e, t;
  const n = new Promise((i, s) => {
    (e = i), (t = s);
  });
  (n.status = "pending"), n.catch(() => {});
  function r(i) {
    Object.assign(n, i), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (i) => {
      r({ status: "fulfilled", value: i }), e(i);
    }),
    (n.reject = (i) => {
      r({ status: "rejected", reason: i }), t(i);
    }),
    n
  );
}
function DP(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function K0(e) {
  return (e ?? "online") === "online" ? ga.isOnline() : !0;
}
var G0 = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function Wl(e) {
  return e instanceof G0;
}
function Q0(e) {
  let t = !1,
    n = 0,
    r = !1,
    i;
  const s = IP(),
    o = (y) => {
      var b;
      r || (h(new G0(y)), (b = e.abort) == null || b.call(e));
    },
    a = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    c = () =>
      W0.isFocused() &&
      (e.networkMode === "always" || ga.isOnline()) &&
      e.canRun(),
    u = () => K0(e.networkMode) && e.canRun(),
    f = (y) => {
      var b;
      r ||
        ((r = !0),
        (b = e.onSuccess) == null || b.call(e, y),
        i == null || i(),
        s.resolve(y));
    },
    h = (y) => {
      var b;
      r ||
        ((r = !0),
        (b = e.onError) == null || b.call(e, y),
        i == null || i(),
        s.reject(y));
    },
    g = () =>
      new Promise((y) => {
        var b;
        (i = (m) => {
          (r || c()) && y(m);
        }),
          (b = e.onPause) == null || b.call(e);
      }).then(() => {
        var y;
        (i = void 0), r || (y = e.onContinue) == null || y.call(e);
      }),
    x = () => {
      if (r) return;
      let y;
      const b = n === 0 ? e.initialPromise : void 0;
      try {
        y = b ?? e.fn();
      } catch (m) {
        y = Promise.reject(m);
      }
      Promise.resolve(y)
        .then(f)
        .catch((m) => {
          var k;
          if (r) return;
          const p = e.retry ?? (Ka ? 0 : 3),
            v = e.retryDelay ?? DP,
            S = typeof v == "function" ? v(n, m) : v,
            C =
              p === !0 ||
              (typeof p == "number" && n < p) ||
              (typeof p == "function" && p(n, m));
          if (t || !C) {
            h(m);
            return;
          }
          n++,
            (k = e.onFail) == null || k.call(e, n, m),
            EP(S)
              .then(() => (c() ? void 0 : g()))
              .then(() => {
                t ? h(m) : x();
              });
        });
    };
  return {
    promise: s,
    cancel: o,
    continue: () => (i == null || i(), s),
    cancelRetry: a,
    continueRetry: l,
    canStart: u,
    start: () => (u() ? x() : g().then(x), s),
  };
}
function MP() {
  let e = [],
    t = 0,
    n = (a) => {
      a();
    },
    r = (a) => {
      a();
    },
    i = (a) => setTimeout(a, 0);
  const s = (a) => {
      t
        ? e.push(a)
        : i(() => {
            n(a);
          });
    },
    o = () => {
      const a = e;
      (e = []),
        a.length &&
          i(() => {
            r(() => {
              a.forEach((l) => {
                n(l);
              });
            });
          });
    };
  return {
    batch: (a) => {
      let l;
      t++;
      try {
        l = a();
      } finally {
        t--, t || o();
      }
      return l;
    },
    batchCalls:
      (a) =>
      (...l) => {
        s(() => {
          a(...l);
        });
      },
    schedule: s,
    setNotifyFunction: (a) => {
      n = a;
    },
    setBatchNotifyFunction: (a) => {
      r = a;
    },
    setScheduler: (a) => {
      i = a;
    },
  };
}
var Le = MP(),
  Zn,
  Pm,
  Y0 =
    ((Pm = class {
      constructor() {
        Y(this, Zn);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          SP(this.gcTime) &&
            U(
              this,
              Zn,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (Ka ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        T(this, Zn) && (clearTimeout(T(this, Zn)), U(this, Zn, void 0));
      }
    }),
    (Zn = new WeakMap()),
    Pm),
  Gr,
  Qr,
  at,
  Pe,
  js,
  er,
  xt,
  $t,
  Tm,
  RP =
    ((Tm = class extends Y0 {
      constructor(t) {
        super();
        Y(this, xt);
        Y(this, Gr);
        Y(this, Qr);
        Y(this, at);
        Y(this, Pe);
        Y(this, js);
        Y(this, er);
        U(this, er, !1),
          U(this, js, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          U(this, at, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          U(this, Gr, FP(this.options)),
          (this.state = t.state ?? T(this, Gr)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = T(this, Pe)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...T(this, js), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          T(this, at).remove(this);
      }
      setData(t, n) {
        const r = AP(this.state.data, t, this.options);
        return (
          ke(this, xt, $t).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        ke(this, xt, $t).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, i;
        const n = (r = T(this, Pe)) == null ? void 0 : r.promise;
        return (
          (i = T(this, Pe)) == null || i.cancel(t),
          n ? n.then(vt).catch(vt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(T(this, Gr));
      }
      isActive() {
        return this.observers.some((t) => kP(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Xd ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
            ? this.observers.some((t) => t.getCurrentResult().isStale)
            : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !CP(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = T(this, Pe)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = T(this, Pe)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          T(this, at).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (T(this, Pe) &&
              (T(this, er)
                ? T(this, Pe).cancel({ revert: !0 })
                : T(this, Pe).cancelRetry()),
            this.scheduleGc()),
          T(this, at).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          ke(this, xt, $t).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var l, c, u;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (T(this, Pe))
            return T(this, Pe).continueRetry(), T(this, Pe).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const f = this.observers.find((h) => h.options.queryFn);
          f && this.setOptions(f.options);
        }
        const r = new AbortController(),
          i = (f) => {
            Object.defineProperty(f, "signal", {
              enumerable: !0,
              get: () => (U(this, er, !0), r.signal),
            });
          },
          s = () => {
            const f = $0(this.options, n),
              h = { queryKey: this.queryKey, meta: this.meta };
            return (
              i(h),
              U(this, er, !1),
              this.options.persister ? this.options.persister(f, h, this) : f(h)
            );
          },
          o = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: s,
          };
        i(o),
          (l = this.options.behavior) == null || l.onFetch(o, this),
          U(this, Qr, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((c = o.fetchOptions) == null ? void 0 : c.meta)) &&
            ke(this, xt, $t).call(this, {
              type: "fetch",
              meta: (u = o.fetchOptions) == null ? void 0 : u.meta,
            });
        const a = (f) => {
          var h, g, x, y;
          (Wl(f) && f.silent) ||
            ke(this, xt, $t).call(this, { type: "error", error: f }),
            Wl(f) ||
              ((g = (h = T(this, at).config).onError) == null ||
                g.call(h, f, this),
              (y = (x = T(this, at).config).onSettled) == null ||
                y.call(x, this.state.data, f, this)),
            this.scheduleGc();
        };
        return (
          U(
            this,
            Pe,
            Q0({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: o.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (f) => {
                var h, g, x, y;
                if (f === void 0) {
                  a(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(f);
                } catch (b) {
                  a(b);
                  return;
                }
                (g = (h = T(this, at).config).onSuccess) == null ||
                  g.call(h, f, this),
                  (y = (x = T(this, at).config).onSettled) == null ||
                    y.call(x, f, this.state.error, this),
                  this.scheduleGc();
              },
              onError: a,
              onFail: (f, h) => {
                ke(this, xt, $t).call(this, {
                  type: "failed",
                  failureCount: f,
                  error: h,
                });
              },
              onPause: () => {
                ke(this, xt, $t).call(this, { type: "pause" });
              },
              onContinue: () => {
                ke(this, xt, $t).call(this, { type: "continue" });
              },
              retry: o.options.retry,
              retryDelay: o.options.retryDelay,
              networkMode: o.options.networkMode,
              canRun: () => !0,
            }),
          ),
          T(this, Pe).start()
        );
      }
    }),
    (Gr = new WeakMap()),
    (Qr = new WeakMap()),
    (at = new WeakMap()),
    (Pe = new WeakMap()),
    (js = new WeakMap()),
    (er = new WeakMap()),
    (xt = new WeakSet()),
    ($t = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...LP(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const i = t.error;
            return Wl(i) && i.revert && T(this, Qr)
              ? { ...T(this, Qr), fetchStatus: "idle" }
              : {
                  ...r,
                  error: i,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: i,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        Le.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            T(this, at).notify({ query: this, type: "updated", action: t });
        });
    }),
    Tm);
function LP(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: K0(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function FP(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Nt,
  jm,
  _P =
    ((jm = class extends Wa {
      constructor(t = {}) {
        super();
        Y(this, Nt);
        (this.config = t), U(this, Nt, new Map());
      }
      build(t, n, r) {
        const i = n.queryKey,
          s = n.queryHash ?? qd(i, n);
        let o = this.get(s);
        return (
          o ||
            ((o = new RP({
              cache: this,
              queryKey: i,
              queryHash: s,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(i),
            })),
            this.add(o)),
          o
        );
      }
      add(t) {
        T(this, Nt).has(t.queryHash) ||
          (T(this, Nt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = T(this, Nt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && T(this, Nt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Le.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return T(this, Nt).get(t);
      }
      getAll() {
        return [...T(this, Nt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => rm(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => rm(t, r)) : n;
      }
      notify(t) {
        Le.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Le.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Le.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Nt = new WeakMap()),
    jm),
  It,
  De,
  tr,
  Dt,
  dn,
  Nm,
  OP =
    ((Nm = class extends Y0 {
      constructor(t) {
        super();
        Y(this, Dt);
        Y(this, It);
        Y(this, De);
        Y(this, tr);
        (this.mutationId = t.mutationId),
          U(this, De, t.mutationCache),
          U(this, It, []),
          (this.state = t.state || VP()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        T(this, It).includes(t) ||
          (T(this, It).push(t),
          this.clearGcTimeout(),
          T(this, De).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        U(
          this,
          It,
          T(this, It).filter((n) => n !== t),
        ),
          this.scheduleGc(),
          T(this, De).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        T(this, It).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : T(this, De).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = T(this, tr)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var i, s, o, a, l, c, u, f, h, g, x, y, b, m, p, v, S, C, k, A;
        U(
          this,
          tr,
          Q0({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (E, I) => {
              ke(this, Dt, dn).call(this, {
                type: "failed",
                failureCount: E,
                error: I,
              });
            },
            onPause: () => {
              ke(this, Dt, dn).call(this, { type: "pause" });
            },
            onContinue: () => {
              ke(this, Dt, dn).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => T(this, De).canRun(this),
          }),
        );
        const n = this.state.status === "pending",
          r = !T(this, tr).canStart();
        try {
          if (!n) {
            ke(this, Dt, dn).call(this, {
              type: "pending",
              variables: t,
              isPaused: r,
            }),
              await ((s = (i = T(this, De).config).onMutate) == null
                ? void 0
                : s.call(i, t, this));
            const I = await ((a = (o = this.options).onMutate) == null
              ? void 0
              : a.call(o, t));
            I !== this.state.context &&
              ke(this, Dt, dn).call(this, {
                type: "pending",
                context: I,
                variables: t,
                isPaused: r,
              });
          }
          const E = await T(this, tr).start();
          return (
            await ((c = (l = T(this, De).config).onSuccess) == null
              ? void 0
              : c.call(l, E, t, this.state.context, this)),
            await ((f = (u = this.options).onSuccess) == null
              ? void 0
              : f.call(u, E, t, this.state.context)),
            await ((g = (h = T(this, De).config).onSettled) == null
              ? void 0
              : g.call(
                  h,
                  E,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                )),
            await ((y = (x = this.options).onSettled) == null
              ? void 0
              : y.call(x, E, null, t, this.state.context)),
            ke(this, Dt, dn).call(this, { type: "success", data: E }),
            E
          );
        } catch (E) {
          try {
            throw (
              (await ((m = (b = T(this, De).config).onError) == null
                ? void 0
                : m.call(b, E, t, this.state.context, this)),
              await ((v = (p = this.options).onError) == null
                ? void 0
                : v.call(p, E, t, this.state.context)),
              await ((C = (S = T(this, De).config).onSettled) == null
                ? void 0
                : C.call(
                    S,
                    void 0,
                    E,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((A = (k = this.options).onSettled) == null
                ? void 0
                : A.call(k, void 0, E, t, this.state.context)),
              E)
            );
          } finally {
            ke(this, Dt, dn).call(this, { type: "error", error: E });
          }
        } finally {
          T(this, De).runNext(this);
        }
      }
    }),
    (It = new WeakMap()),
    (De = new WeakMap()),
    (tr = new WeakMap()),
    (Dt = new WeakSet()),
    (dn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        Le.batch(() => {
          T(this, It).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            T(this, De).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    Nm);
function VP() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var We,
  Ns,
  Im,
  zP =
    ((Im = class extends Wa {
      constructor(t = {}) {
        super();
        Y(this, We);
        Y(this, Ns);
        (this.config = t), U(this, We, new Map()), U(this, Ns, Date.now());
      }
      build(t, n, r) {
        const i = new OP({
          mutationCache: this,
          mutationId: ++Hs(this, Ns)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(i), i;
      }
      add(t) {
        const n = fo(t),
          r = T(this, We).get(n) ?? [];
        r.push(t),
          T(this, We).set(n, r),
          this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        var r;
        const n = fo(t);
        if (T(this, We).has(n)) {
          const i =
            (r = T(this, We).get(n)) == null
              ? void 0
              : r.filter((s) => s !== t);
          i && (i.length === 0 ? T(this, We).delete(n) : T(this, We).set(n, i));
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        var r;
        const n =
          (r = T(this, We).get(fo(t))) == null
            ? void 0
            : r.find((i) => i.state.status === "pending");
        return !n || n === t;
      }
      runNext(t) {
        var r;
        const n =
          (r = T(this, We).get(fo(t))) == null
            ? void 0
            : r.find((i) => i !== t && i.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
      }
      clear() {
        Le.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return [...T(this, We).values()].flat();
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => im(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => im(t, n));
      }
      notify(t) {
        Le.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Le.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(vt))),
        );
      }
    }),
    (We = new WeakMap()),
    (Ns = new WeakMap()),
    Im);
function fo(e) {
  var t;
  return (
    ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
  );
}
function am(e) {
  return {
    onFetch: (t, n) => {
      var u, f, h, g, x;
      const r = t.options,
        i =
          (h =
            (f = (u = t.fetchOptions) == null ? void 0 : u.meta) == null
              ? void 0
              : f.fetchMore) == null
            ? void 0
            : h.direction,
        s = ((g = t.state.data) == null ? void 0 : g.pages) || [],
        o = ((x = t.state.data) == null ? void 0 : x.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        l = 0;
      const c = async () => {
        let y = !1;
        const b = (v) => {
            Object.defineProperty(v, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (y = !0)
                  : t.signal.addEventListener("abort", () => {
                      y = !0;
                    }),
                t.signal
              ),
            });
          },
          m = $0(t.options, t.fetchOptions),
          p = async (v, S, C) => {
            if (y) return Promise.reject();
            if (S == null && v.pages.length) return Promise.resolve(v);
            const k = {
              queryKey: t.queryKey,
              pageParam: S,
              direction: C ? "backward" : "forward",
              meta: t.options.meta,
            };
            b(k);
            const A = await m(k),
              { maxPages: E } = t.options,
              I = C ? TP : PP;
            return {
              pages: I(v.pages, A, E),
              pageParams: I(v.pageParams, S, E),
            };
          };
        if (i && s.length) {
          const v = i === "backward",
            S = v ? BP : lm,
            C = { pages: s, pageParams: o },
            k = S(r, C);
          a = await p(C, k, v);
        } else {
          const v = e ?? s.length;
          do {
            const S = l === 0 ? (o[0] ?? r.initialPageParam) : lm(r, a);
            if (l > 0 && S == null) break;
            (a = await p(a, S)), l++;
          } while (l < v);
        }
        return a;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var y, b;
            return (b = (y = t.options).persister) == null
              ? void 0
              : b.call(
                  y,
                  c,
                  {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n,
                );
          })
        : (t.fetchFn = c);
    },
  };
}
function lm(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function BP(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var ce,
  vn,
  xn,
  Yr,
  qr,
  wn,
  Xr,
  Jr,
  Dm,
  UP =
    ((Dm = class {
      constructor(e = {}) {
        Y(this, ce);
        Y(this, vn);
        Y(this, xn);
        Y(this, Yr);
        Y(this, qr);
        Y(this, wn);
        Y(this, Xr);
        Y(this, Jr);
        U(this, ce, e.queryCache || new _P()),
          U(this, vn, e.mutationCache || new zP()),
          U(this, xn, e.defaultOptions || {}),
          U(this, Yr, new Map()),
          U(this, qr, new Map()),
          U(this, wn, 0);
      }
      mount() {
        Hs(this, wn)._++,
          T(this, wn) === 1 &&
            (U(
              this,
              Xr,
              W0.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), T(this, ce).onFocus());
              }),
            ),
            U(
              this,
              Jr,
              ga.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), T(this, ce).onOnline());
              }),
            ));
      }
      unmount() {
        var e, t;
        Hs(this, wn)._--,
          T(this, wn) === 0 &&
            ((e = T(this, Xr)) == null || e.call(this),
            U(this, Xr, void 0),
            (t = T(this, Jr)) == null || t.call(this),
            U(this, Jr, void 0));
      }
      isFetching(e) {
        return T(this, ce).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return T(this, vn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = T(this, ce).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0) return this.fetchQuery(e);
        {
          const n = this.defaultQueryOptions(e),
            r = T(this, ce).build(this, n);
          return (
            e.revalidateIfStale &&
              r.isStaleByTime(nm(n.staleTime, r)) &&
              this.prefetchQuery(n),
            Promise.resolve(t)
          );
        }
      }
      getQueriesData(e) {
        return T(this, ce)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          i = T(this, ce).get(r.queryHash),
          s = i == null ? void 0 : i.state.data,
          o = bP(t, s);
        if (o !== void 0)
          return T(this, ce)
            .build(this, r)
            .setData(o, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Le.batch(() =>
          T(this, ce)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]),
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = T(this, ce).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = T(this, ce);
        Le.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = T(this, ce),
          r = { type: "active", ...e };
        return Le.batch(
          () => (
            n.findAll(e).forEach((i) => {
              i.reset();
            }),
            this.refetchQueries(r, t)
          ),
        );
      }
      cancelQueries(e = {}, t = {}) {
        const n = { revert: !0, ...t },
          r = Le.batch(() =>
            T(this, ce)
              .findAll(e)
              .map((i) => i.cancel(n)),
          );
        return Promise.all(r).then(vt).catch(vt);
      }
      invalidateQueries(e = {}, t = {}) {
        return Le.batch(() => {
          if (
            (T(this, ce)
              .findAll(e)
              .forEach((r) => {
                r.invalidate();
              }),
            e.refetchType === "none")
          )
            return Promise.resolve();
          const n = { ...e, type: e.refetchType ?? e.type ?? "active" };
          return this.refetchQueries(n, t);
        });
      }
      refetchQueries(e = {}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0,
          },
          r = Le.batch(() =>
            T(this, ce)
              .findAll(e)
              .filter((i) => !i.isDisabled())
              .map((i) => {
                let s = i.fetch(void 0, n);
                return (
                  n.throwOnError || (s = s.catch(vt)),
                  i.state.fetchStatus === "paused" ? Promise.resolve() : s
                );
              }),
          );
        return Promise.all(r).then(vt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = T(this, ce).build(this, t);
        return n.isStaleByTime(nm(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(vt).catch(vt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = am(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(vt).catch(vt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = am(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return ga.isOnline()
          ? T(this, vn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return T(this, ce);
      }
      getMutationCache() {
        return T(this, vn);
      }
      getDefaultOptions() {
        return T(this, xn);
      }
      setDefaultOptions(e) {
        U(this, xn, e);
      }
      setQueryDefaults(e, t) {
        T(this, Yr).set(Es(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...T(this, Yr).values()];
        let n = {};
        return (
          t.forEach((r) => {
            As(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        T(this, qr).set(Es(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...T(this, qr).values()];
        let n = {};
        return (
          t.forEach((r) => {
            As(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...T(this, xn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = qd(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.enabled !== !0 && t.queryFn === Xd && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...T(this, xn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        T(this, ce).clear(), T(this, vn).clear();
      }
    }),
    (ce = new WeakMap()),
    (vn = new WeakMap()),
    (xn = new WeakMap()),
    (Yr = new WeakMap()),
    (qr = new WeakMap()),
    (wn = new WeakMap()),
    (Xr = new WeakMap()),
    (Jr = new WeakMap()),
    Dm),
  HP = w.createContext(void 0),
  $P = ({ client: e, children: t }) => (
    w.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    d.jsx(HP.Provider, { value: e, children: t })
  );
async function WP(e) {
  if (!e.ok) {
    const t = (await e.text()) || e.statusText;
    throw new Error(`${e.status}: ${t}`);
  }
}
const KP =
    ({ on401: e }) =>
    async ({ queryKey: t }) => {
      const n = await fetch(t[0], { credentials: "include" });
      return e === "returnNull" && n.status === 401
        ? null
        : (await WP(n), await n.json());
    },
  GP = new UP({
    defaultOptions: {
      queries: {
        queryFn: KP({ on401: "throw" }),
        refetchInterval: !1,
        refetchOnWindowFocus: !1,
        staleTime: 1 / 0,
        retry: !1,
      },
      mutations: { retry: !1 },
    },
  });
function ge(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (i) {
    if ((e == null || e(i), n === !1 || !i.defaultPrevented))
      return t == null ? void 0 : t(i);
  };
}
function cm(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function q0(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((i) => {
      const s = cm(i, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let i = 0; i < r.length; i++) {
          const s = r[i];
          typeof s == "function" ? s() : cm(e[i], null);
        }
      };
  };
}
function Et(...e) {
  return w.useCallback(q0(...e), e);
}
function Ga(e, t = []) {
  let n = [];
  function r(s, o) {
    const a = w.createContext(o),
      l = n.length;
    n = [...n, o];
    const c = (f) => {
      var m;
      const { scope: h, children: g, ...x } = f,
        y = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[l]) || a,
        b = w.useMemo(() => x, Object.values(x));
      return d.jsx(y.Provider, { value: b, children: g });
    };
    c.displayName = s + "Provider";
    function u(f, h) {
      var y;
      const g = ((y = h == null ? void 0 : h[e]) == null ? void 0 : y[l]) || a,
        x = w.useContext(g);
      if (x) return x;
      if (o !== void 0) return o;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return [c, u];
  }
  const i = () => {
    const s = n.map((o) => w.createContext(o));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || s;
      return w.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (i.scopeName = e), [r, QP(i, ...t)];
}
function QP(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((i) => ({ useScope: i(), scopeName: i.scopeName }));
    return function (s) {
      const o = r.reduce((a, { useScope: l, scopeName: c }) => {
        const f = l(s)[`__scope${c}`];
        return { ...a, ...f };
      }, {});
      return w.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function cu(e) {
  const t = YP(e),
    n = w.forwardRef((r, i) => {
      const { children: s, ...o } = r,
        a = w.Children.toArray(s),
        l = a.find(XP);
      if (l) {
        const c = l.props.children,
          u = a.map((f) =>
            f === l
              ? w.Children.count(c) > 1
                ? w.Children.only(null)
                : w.isValidElement(c)
                  ? c.props.children
                  : null
              : f,
          );
        return d.jsx(t, {
          ...o,
          ref: i,
          children: w.isValidElement(c) ? w.cloneElement(c, void 0, u) : null,
        });
      }
      return d.jsx(t, { ...o, ref: i, children: s });
    });
  return (n.displayName = `${e}.Slot`), n;
}
function YP(e) {
  const t = w.forwardRef((n, r) => {
    const { children: i, ...s } = n;
    if (w.isValidElement(i)) {
      const o = ZP(i),
        a = JP(s, i.props);
      return (
        i.type !== w.Fragment && (a.ref = r ? q0(r, o) : o),
        w.cloneElement(i, a)
      );
    }
    return w.Children.count(i) > 1 ? w.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var X0 = Symbol("radix.slottable");
function qP(e) {
  const t = ({ children: n }) => d.jsx(d.Fragment, { children: n });
  return (t.displayName = `${e}.Slottable`), (t.__radixId = X0), t;
}
function XP(e) {
  return (
    w.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === X0
  );
}
function JP(e, t) {
  const n = { ...t };
  for (const r in t) {
    const i = e[r],
      s = t[r];
    /^on[A-Z]/.test(r)
      ? i && s
        ? (n[r] = (...a) => {
            s(...a), i(...a);
          })
        : i && (n[r] = i)
      : r === "style"
        ? (n[r] = { ...i, ...s })
        : r === "className" && (n[r] = [i, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function ZP(e) {
  var r, i;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (i = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : i.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var eT = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  $e = eT.reduce((e, t) => {
    const n = cu(`Primitive.${t}`),
      r = w.forwardRef((i, s) => {
        const { asChild: o, ...a } = i,
          l = o ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          d.jsx(l, { ...a, ref: s })
        );
      });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function J0(e, t) {
  e && Fs.flushSync(() => e.dispatchEvent(t));
}
function Vt(e) {
  const t = w.useRef(e);
  return (
    w.useEffect(() => {
      t.current = e;
    }),
    w.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function tT(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Vt(e);
  w.useEffect(() => {
    const r = (i) => {
      i.key === "Escape" && n(i);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var nT = "DismissableLayer",
  uu = "dismissableLayer.update",
  rT = "dismissableLayer.pointerDownOutside",
  iT = "dismissableLayer.focusOutside",
  um,
  Z0 = w.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Jd = w.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: i,
        onFocusOutside: s,
        onInteractOutside: o,
        onDismiss: a,
        ...l
      } = e,
      c = w.useContext(Z0),
      [u, f] = w.useState(null),
      h =
        (u == null ? void 0 : u.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, g] = w.useState({}),
      x = Et(t, (A) => f(A)),
      y = Array.from(c.layers),
      [b] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
      m = y.indexOf(b),
      p = u ? y.indexOf(u) : -1,
      v = c.layersWithOutsidePointerEventsDisabled.size > 0,
      S = p >= m,
      C = oT((A) => {
        const E = A.target,
          I = [...c.branches].some((N) => N.contains(E));
        !S ||
          I ||
          (i == null || i(A),
          o == null || o(A),
          A.defaultPrevented || a == null || a());
      }, h),
      k = aT((A) => {
        const E = A.target;
        [...c.branches].some((N) => N.contains(E)) ||
          (s == null || s(A),
          o == null || o(A),
          A.defaultPrevented || a == null || a());
      }, h);
    return (
      tT((A) => {
        p === c.layers.size - 1 &&
          (r == null || r(A),
          !A.defaultPrevented && a && (A.preventDefault(), a()));
      }, h),
      w.useEffect(() => {
        if (u)
          return (
            n &&
              (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((um = h.body.style.pointerEvents),
                (h.body.style.pointerEvents = "none")),
              c.layersWithOutsidePointerEventsDisabled.add(u)),
            c.layers.add(u),
            dm(),
            () => {
              n &&
                c.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (h.body.style.pointerEvents = um);
            }
          );
      }, [u, h, n, c]),
      w.useEffect(
        () => () => {
          u &&
            (c.layers.delete(u),
            c.layersWithOutsidePointerEventsDisabled.delete(u),
            dm());
        },
        [u, c],
      ),
      w.useEffect(() => {
        const A = () => g({});
        return (
          document.addEventListener(uu, A),
          () => document.removeEventListener(uu, A)
        );
      }, []),
      d.jsx($e.div, {
        ...l,
        ref: x,
        style: {
          pointerEvents: v ? (S ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: ge(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: ge(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: ge(
          e.onPointerDownCapture,
          C.onPointerDownCapture,
        ),
      })
    );
  });
Jd.displayName = nT;
var sT = "DismissableLayerBranch",
  ex = w.forwardRef((e, t) => {
    const n = w.useContext(Z0),
      r = w.useRef(null),
      i = Et(t, r);
    return (
      w.useEffect(() => {
        const s = r.current;
        if (s)
          return (
            n.branches.add(s),
            () => {
              n.branches.delete(s);
            }
          );
      }, [n.branches]),
      d.jsx($e.div, { ...e, ref: i })
    );
  });
ex.displayName = sT;
function oT(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Vt(e),
    r = w.useRef(!1),
    i = w.useRef(() => {});
  return (
    w.useEffect(() => {
      const s = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              tx(rT, n, c, { discrete: !0 });
            };
            const c = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", i.current),
                (i.current = l),
                t.addEventListener("click", i.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", i.current);
          r.current = !1;
        },
        o = window.setTimeout(() => {
          t.addEventListener("pointerdown", s);
        }, 0);
      return () => {
        window.clearTimeout(o),
          t.removeEventListener("pointerdown", s),
          t.removeEventListener("click", i.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function aT(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Vt(e),
    r = w.useRef(!1);
  return (
    w.useEffect(() => {
      const i = (s) => {
        s.target &&
          !r.current &&
          tx(iT, n, { originalEvent: s }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", i),
        () => t.removeEventListener("focusin", i)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function dm() {
  const e = new CustomEvent(uu);
  document.dispatchEvent(e);
}
function tx(e, t, n, { discrete: r }) {
  const i = n.originalEvent.target,
    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }),
    r ? J0(i, s) : i.dispatchEvent(s);
}
var lT = Jd,
  cT = ex,
  dr = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {};
const uT = ["top", "right", "bottom", "left"],
  Ln = Math.min,
  Qe = Math.max,
  ya = Math.round,
  ho = Math.floor,
  Ot = (e) => ({ x: e, y: e }),
  dT = { left: "right", right: "left", bottom: "top", top: "bottom" },
  fT = { start: "end", end: "start" };
function du(e, t, n) {
  return Qe(e, Ln(t, n));
}
function rn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function sn(e) {
  return e.split("-")[0];
}
function bi(e) {
  return e.split("-")[1];
}
function Zd(e) {
  return e === "x" ? "y" : "x";
}
function ef(e) {
  return e === "y" ? "height" : "width";
}
function Fn(e) {
  return ["top", "bottom"].includes(sn(e)) ? "y" : "x";
}
function tf(e) {
  return Zd(Fn(e));
}
function hT(e, t, n) {
  n === void 0 && (n = !1);
  const r = bi(e),
    i = tf(e),
    s = ef(i);
  let o =
    i === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return t.reference[s] > t.floating[s] && (o = va(o)), [o, va(o)];
}
function pT(e) {
  const t = va(e);
  return [fu(e), t, fu(t)];
}
function fu(e) {
  return e.replace(/start|end/g, (t) => fT[t]);
}
function mT(e, t, n) {
  const r = ["left", "right"],
    i = ["right", "left"],
    s = ["top", "bottom"],
    o = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? i : r) : t ? r : i;
    case "left":
    case "right":
      return t ? s : o;
    default:
      return [];
  }
}
function gT(e, t, n, r) {
  const i = bi(e);
  let s = mT(sn(e), n === "start", r);
  return (
    i && ((s = s.map((o) => o + "-" + i)), t && (s = s.concat(s.map(fu)))), s
  );
}
function va(e) {
  return e.replace(/left|right|bottom|top/g, (t) => dT[t]);
}
function yT(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function nx(e) {
  return typeof e != "number"
    ? yT(e)
    : { top: e, right: e, bottom: e, left: e };
}
function xa(e) {
  const { x: t, y: n, width: r, height: i } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n,
  };
}
function fm(e, t, n) {
  let { reference: r, floating: i } = e;
  const s = Fn(t),
    o = tf(t),
    a = ef(o),
    l = sn(t),
    c = s === "y",
    u = r.x + r.width / 2 - i.width / 2,
    f = r.y + r.height / 2 - i.height / 2,
    h = r[a] / 2 - i[a] / 2;
  let g;
  switch (l) {
    case "top":
      g = { x: u, y: r.y - i.height };
      break;
    case "bottom":
      g = { x: u, y: r.y + r.height };
      break;
    case "right":
      g = { x: r.x + r.width, y: f };
      break;
    case "left":
      g = { x: r.x - i.width, y: f };
      break;
    default:
      g = { x: r.x, y: r.y };
  }
  switch (bi(t)) {
    case "start":
      g[o] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      g[o] += h * (n && c ? -1 : 1);
      break;
  }
  return g;
}
const vT = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: i = "absolute",
      middleware: s = [],
      platform: o,
    } = n,
    a = s.filter(Boolean),
    l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let c = await o.getElementRects({ reference: e, floating: t, strategy: i }),
    { x: u, y: f } = fm(c, r, l),
    h = r,
    g = {},
    x = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: b, fn: m } = a[y],
      {
        x: p,
        y: v,
        data: S,
        reset: C,
      } = await m({
        x: u,
        y: f,
        initialPlacement: r,
        placement: h,
        strategy: i,
        middlewareData: g,
        rects: c,
        platform: o,
        elements: { reference: e, floating: t },
      });
    (u = p ?? u),
      (f = v ?? f),
      (g = { ...g, [b]: { ...g[b], ...S } }),
      C &&
        x <= 50 &&
        (x++,
        typeof C == "object" &&
          (C.placement && (h = C.placement),
          C.rects &&
            (c =
              C.rects === !0
                ? await o.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: i,
                  })
                : C.rects),
          ({ x: u, y: f } = fm(c, h, l))),
        (y = -1));
  }
  return { x: u, y: f, placement: h, strategy: i, middlewareData: g };
};
async function Ps(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: i, platform: s, rects: o, elements: a, strategy: l } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: u = "viewport",
      elementContext: f = "floating",
      altBoundary: h = !1,
      padding: g = 0,
    } = rn(t, e),
    x = nx(g),
    b = a[h ? (f === "floating" ? "reference" : "floating") : f],
    m = xa(
      await s.getClippingRect({
        element:
          (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null ||
          n
            ? b
            : b.contextElement ||
              (await (s.getDocumentElement == null
                ? void 0
                : s.getDocumentElement(a.floating))),
        boundary: c,
        rootBoundary: u,
        strategy: l,
      }),
    ),
    p =
      f === "floating"
        ? { x: r, y: i, width: o.floating.width, height: o.floating.height }
        : o.reference,
    v = await (s.getOffsetParent == null
      ? void 0
      : s.getOffsetParent(a.floating)),
    S = (await (s.isElement == null ? void 0 : s.isElement(v)))
      ? (await (s.getScale == null ? void 0 : s.getScale(v))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = xa(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: p,
            offsetParent: v,
            strategy: l,
          })
        : p,
    );
  return {
    top: (m.top - C.top + x.top) / S.y,
    bottom: (C.bottom - m.bottom + x.bottom) / S.y,
    left: (m.left - C.left + x.left) / S.x,
    right: (C.right - m.right + x.right) / S.x,
  };
}
const xT = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: i,
          rects: s,
          platform: o,
          elements: a,
          middlewareData: l,
        } = t,
        { element: c, padding: u = 0 } = rn(e, t) || {};
      if (c == null) return {};
      const f = nx(u),
        h = { x: n, y: r },
        g = tf(i),
        x = ef(g),
        y = await o.getDimensions(c),
        b = g === "y",
        m = b ? "top" : "left",
        p = b ? "bottom" : "right",
        v = b ? "clientHeight" : "clientWidth",
        S = s.reference[x] + s.reference[g] - h[g] - s.floating[x],
        C = h[g] - s.reference[g],
        k = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
      let A = k ? k[v] : 0;
      (!A || !(await (o.isElement == null ? void 0 : o.isElement(k)))) &&
        (A = a.floating[v] || s.floating[x]);
      const E = S / 2 - C / 2,
        I = A / 2 - y[x] / 2 - 1,
        N = Ln(f[m], I),
        z = Ln(f[p], I),
        F = N,
        K = A - y[x] - z,
        M = A / 2 - y[x] / 2 + E,
        Q = du(F, M, K),
        H =
          !l.arrow &&
          bi(i) != null &&
          M !== Q &&
          s.reference[x] / 2 - (M < F ? N : z) - y[x] / 2 < 0,
        O = H ? (M < F ? M - F : M - K) : 0;
      return {
        [g]: h[g] + O,
        data: {
          [g]: Q,
          centerOffset: M - Q - O,
          ...(H && { alignmentOffset: O }),
        },
        reset: H,
      };
    },
  }),
  wT = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: i,
              middlewareData: s,
              rects: o,
              initialPlacement: a,
              platform: l,
              elements: c,
            } = t,
            {
              mainAxis: u = !0,
              crossAxis: f = !0,
              fallbackPlacements: h,
              fallbackStrategy: g = "bestFit",
              fallbackAxisSideDirection: x = "none",
              flipAlignment: y = !0,
              ...b
            } = rn(e, t);
          if ((n = s.arrow) != null && n.alignmentOffset) return {};
          const m = sn(i),
            p = Fn(a),
            v = sn(a) === a,
            S = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)),
            C = h || (v || !y ? [va(a)] : pT(a)),
            k = x !== "none";
          !h && k && C.push(...gT(a, y, x, S));
          const A = [a, ...C],
            E = await Ps(t, b),
            I = [];
          let N = ((r = s.flip) == null ? void 0 : r.overflows) || [];
          if ((u && I.push(E[m]), f)) {
            const M = hT(i, o, S);
            I.push(E[M[0]], E[M[1]]);
          }
          if (
            ((N = [...N, { placement: i, overflows: I }]),
            !I.every((M) => M <= 0))
          ) {
            var z, F;
            const M = (((z = s.flip) == null ? void 0 : z.index) || 0) + 1,
              Q = A[M];
            if (Q)
              return {
                data: { index: M, overflows: N },
                reset: { placement: Q },
              };
            let H =
              (F = N.filter((O) => O.overflows[0] <= 0).sort(
                (O, P) => O.overflows[1] - P.overflows[1],
              )[0]) == null
                ? void 0
                : F.placement;
            if (!H)
              switch (g) {
                case "bestFit": {
                  var K;
                  const O =
                    (K = N.filter((P) => {
                      if (k) {
                        const D = Fn(P.placement);
                        return D === p || D === "y";
                      }
                      return !0;
                    })
                      .map((P) => [
                        P.placement,
                        P.overflows
                          .filter((D) => D > 0)
                          .reduce((D, L) => D + L, 0),
                      ])
                      .sort((P, D) => P[1] - D[1])[0]) == null
                      ? void 0
                      : K[0];
                  O && (H = O);
                  break;
                }
                case "initialPlacement":
                  H = a;
                  break;
              }
            if (i !== H) return { reset: { placement: H } };
          }
          return {};
        },
      }
    );
  };
function hm(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function pm(e) {
  return uT.some((t) => e[t] >= 0);
}
const bT = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...i } = rn(e, t);
        switch (r) {
          case "referenceHidden": {
            const s = await Ps(t, { ...i, elementContext: "reference" }),
              o = hm(s, n.reference);
            return {
              data: { referenceHiddenOffsets: o, referenceHidden: pm(o) },
            };
          }
          case "escaped": {
            const s = await Ps(t, { ...i, altBoundary: !0 }),
              o = hm(s, n.floating);
            return { data: { escapedOffsets: o, escaped: pm(o) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function ST(e, t) {
  const { placement: n, platform: r, elements: i } = e,
    s = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
    o = sn(n),
    a = bi(n),
    l = Fn(n) === "y",
    c = ["left", "top"].includes(o) ? -1 : 1,
    u = s && l ? -1 : 1,
    f = rn(t, e);
  let {
    mainAxis: h,
    crossAxis: g,
    alignmentAxis: x,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis,
      };
  return (
    a && typeof x == "number" && (g = a === "end" ? x * -1 : x),
    l ? { x: g * u, y: h * c } : { x: h * c, y: g * u }
  );
}
const CT = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: i, y: s, placement: o, middlewareData: a } = t,
            l = await ST(t, e);
          return o === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: i + l.x, y: s + l.y, data: { ...l, placement: o } };
        },
      }
    );
  },
  kT = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: i } = t,
            {
              mainAxis: s = !0,
              crossAxis: o = !1,
              limiter: a = {
                fn: (b) => {
                  let { x: m, y: p } = b;
                  return { x: m, y: p };
                },
              },
              ...l
            } = rn(e, t),
            c = { x: n, y: r },
            u = await Ps(t, l),
            f = Fn(sn(i)),
            h = Zd(f);
          let g = c[h],
            x = c[f];
          if (s) {
            const b = h === "y" ? "top" : "left",
              m = h === "y" ? "bottom" : "right",
              p = g + u[b],
              v = g - u[m];
            g = du(p, g, v);
          }
          if (o) {
            const b = f === "y" ? "top" : "left",
              m = f === "y" ? "bottom" : "right",
              p = x + u[b],
              v = x - u[m];
            x = du(p, x, v);
          }
          const y = a.fn({ ...t, [h]: g, [f]: x });
          return {
            ...y,
            data: { x: y.x - n, y: y.y - r, enabled: { [h]: s, [f]: o } },
          };
        },
      }
    );
  },
  ET = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: i, rects: s, middlewareData: o } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: c = !0 } = rn(e, t),
            u = { x: n, y: r },
            f = Fn(i),
            h = Zd(f);
          let g = u[h],
            x = u[f];
          const y = rn(a, t),
            b =
              typeof y == "number"
                ? { mainAxis: y, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...y };
          if (l) {
            const v = h === "y" ? "height" : "width",
              S = s.reference[h] - s.floating[v] + b.mainAxis,
              C = s.reference[h] + s.reference[v] - b.mainAxis;
            g < S ? (g = S) : g > C && (g = C);
          }
          if (c) {
            var m, p;
            const v = h === "y" ? "width" : "height",
              S = ["top", "left"].includes(sn(i)),
              C =
                s.reference[f] -
                s.floating[v] +
                ((S && ((m = o.offset) == null ? void 0 : m[f])) || 0) +
                (S ? 0 : b.crossAxis),
              k =
                s.reference[f] +
                s.reference[v] +
                (S ? 0 : ((p = o.offset) == null ? void 0 : p[f]) || 0) -
                (S ? b.crossAxis : 0);
            x < C ? (x = C) : x > k && (x = k);
          }
          return { [h]: g, [f]: x };
        },
      }
    );
  },
  AT = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: i, rects: s, platform: o, elements: a } = t,
            { apply: l = () => {}, ...c } = rn(e, t),
            u = await Ps(t, c),
            f = sn(i),
            h = bi(i),
            g = Fn(i) === "y",
            { width: x, height: y } = s.floating;
          let b, m;
          f === "top" || f === "bottom"
            ? ((b = f),
              (m =
                h ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((m = f), (b = h === "end" ? "top" : "bottom"));
          const p = y - u.top - u.bottom,
            v = x - u.left - u.right,
            S = Ln(y - u[b], p),
            C = Ln(x - u[m], v),
            k = !t.middlewareData.shift;
          let A = S,
            E = C;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (E = v),
            (r = t.middlewareData.shift) != null && r.enabled.y && (A = p),
            k && !h)
          ) {
            const N = Qe(u.left, 0),
              z = Qe(u.right, 0),
              F = Qe(u.top, 0),
              K = Qe(u.bottom, 0);
            g
              ? (E = x - 2 * (N !== 0 || z !== 0 ? N + z : Qe(u.left, u.right)))
              : (A =
                  y - 2 * (F !== 0 || K !== 0 ? F + K : Qe(u.top, u.bottom)));
          }
          await l({ ...t, availableWidth: E, availableHeight: A });
          const I = await o.getDimensions(a.floating);
          return x !== I.width || y !== I.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Qa() {
  return typeof window < "u";
}
function Si(e) {
  return rx(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Je(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Bt(e) {
  var t;
  return (t = (rx(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function rx(e) {
  return Qa() ? e instanceof Node || e instanceof Je(e).Node : !1;
}
function At(e) {
  return Qa() ? e instanceof Element || e instanceof Je(e).Element : !1;
}
function zt(e) {
  return Qa() ? e instanceof HTMLElement || e instanceof Je(e).HTMLElement : !1;
}
function mm(e) {
  return !Qa() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Je(e).ShadowRoot;
}
function Bs(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: i } = Pt(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(i)
  );
}
function PT(e) {
  return ["table", "td", "th"].includes(Si(e));
}
function Ya(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function nf(e) {
  const t = rf(),
    n = At(e) ? Pt(e) : e;
  return (
    ["transform", "translate", "scale", "rotate", "perspective"].some((r) =>
      n[r] ? n[r] !== "none" : !1,
    ) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(
      (r) => (n.willChange || "").includes(r),
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r),
    )
  );
}
function TT(e) {
  let t = _n(e);
  for (; zt(t) && !fi(t); ) {
    if (nf(t)) return t;
    if (Ya(t)) return null;
    t = _n(t);
  }
  return null;
}
function rf() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function fi(e) {
  return ["html", "body", "#document"].includes(Si(e));
}
function Pt(e) {
  return Je(e).getComputedStyle(e);
}
function qa(e) {
  return At(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function _n(e) {
  if (Si(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (mm(e) && e.host) || Bt(e);
  return mm(t) ? t.host : t;
}
function ix(e) {
  const t = _n(e);
  return fi(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : zt(t) && Bs(t)
      ? t
      : ix(t);
}
function Ts(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = ix(e),
    s = i === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = Je(i);
  if (s) {
    const a = hu(o);
    return t.concat(
      o,
      o.visualViewport || [],
      Bs(i) ? i : [],
      a && n ? Ts(a) : [],
    );
  }
  return t.concat(i, Ts(i, [], n));
}
function hu(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function sx(e) {
  const t = Pt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const i = zt(e),
    s = i ? e.offsetWidth : n,
    o = i ? e.offsetHeight : r,
    a = ya(n) !== s || ya(r) !== o;
  return a && ((n = s), (r = o)), { width: n, height: r, $: a };
}
function sf(e) {
  return At(e) ? e : e.contextElement;
}
function Hr(e) {
  const t = sf(e);
  if (!zt(t)) return Ot(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: i, $: s } = sx(t);
  let o = (s ? ya(n.width) : n.width) / r,
    a = (s ? ya(n.height) : n.height) / i;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: o, y: a }
  );
}
const jT = Ot(0);
function ox(e) {
  const t = Je(e);
  return !rf() || !t.visualViewport
    ? jT
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function NT(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== Je(e)) ? !1 : t;
}
function fr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(),
    s = sf(e);
  let o = Ot(1);
  t && (r ? At(r) && (o = Hr(r)) : (o = Hr(e)));
  const a = NT(s, n, r) ? ox(s) : Ot(0);
  let l = (i.left + a.x) / o.x,
    c = (i.top + a.y) / o.y,
    u = i.width / o.x,
    f = i.height / o.y;
  if (s) {
    const h = Je(s),
      g = r && At(r) ? Je(r) : r;
    let x = h,
      y = hu(x);
    for (; y && r && g !== x; ) {
      const b = Hr(y),
        m = y.getBoundingClientRect(),
        p = Pt(y),
        v = m.left + (y.clientLeft + parseFloat(p.paddingLeft)) * b.x,
        S = m.top + (y.clientTop + parseFloat(p.paddingTop)) * b.y;
      (l *= b.x),
        (c *= b.y),
        (u *= b.x),
        (f *= b.y),
        (l += v),
        (c += S),
        (x = Je(y)),
        (y = hu(x));
    }
  }
  return xa({ width: u, height: f, x: l, y: c });
}
function of(e, t) {
  const n = qa(e).scrollLeft;
  return t ? t.left + n : fr(Bt(e)).left + n;
}
function ax(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    i = r.left + t.scrollLeft - (n ? 0 : of(e, r)),
    s = r.top + t.scrollTop;
  return { x: i, y: s };
}
function IT(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: i } = e;
  const s = i === "fixed",
    o = Bt(r),
    a = t ? Ya(t.floating) : !1;
  if (r === o || (a && s)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    c = Ot(1);
  const u = Ot(0),
    f = zt(r);
  if (
    (f || (!f && !s)) &&
    ((Si(r) !== "body" || Bs(o)) && (l = qa(r)), zt(r))
  ) {
    const g = fr(r);
    (c = Hr(r)), (u.x = g.x + r.clientLeft), (u.y = g.y + r.clientTop);
  }
  const h = o && !f && !s ? ax(o, l, !0) : Ot(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x + h.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y + h.y,
  };
}
function DT(e) {
  return Array.from(e.getClientRects());
}
function MT(e) {
  const t = Bt(e),
    n = qa(e),
    r = e.ownerDocument.body,
    i = Qe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    s = Qe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + of(e);
  const a = -n.scrollTop;
  return (
    Pt(r).direction === "rtl" && (o += Qe(t.clientWidth, r.clientWidth) - i),
    { width: i, height: s, x: o, y: a }
  );
}
function RT(e, t) {
  const n = Je(e),
    r = Bt(e),
    i = n.visualViewport;
  let s = r.clientWidth,
    o = r.clientHeight,
    a = 0,
    l = 0;
  if (i) {
    (s = i.width), (o = i.height);
    const c = rf();
    (!c || (c && t === "fixed")) && ((a = i.offsetLeft), (l = i.offsetTop));
  }
  return { width: s, height: o, x: a, y: l };
}
function LT(e, t) {
  const n = fr(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    s = zt(e) ? Hr(e) : Ot(1),
    o = e.clientWidth * s.x,
    a = e.clientHeight * s.y,
    l = i * s.x,
    c = r * s.y;
  return { width: o, height: a, x: l, y: c };
}
function gm(e, t, n) {
  let r;
  if (t === "viewport") r = RT(e, n);
  else if (t === "document") r = MT(Bt(e));
  else if (At(t)) r = LT(t, n);
  else {
    const i = ox(e);
    r = { x: t.x - i.x, y: t.y - i.y, width: t.width, height: t.height };
  }
  return xa(r);
}
function lx(e, t) {
  const n = _n(e);
  return n === t || !At(n) || fi(n)
    ? !1
    : Pt(n).position === "fixed" || lx(n, t);
}
function FT(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Ts(e, [], !1).filter((a) => At(a) && Si(a) !== "body"),
    i = null;
  const s = Pt(e).position === "fixed";
  let o = s ? _n(e) : e;
  for (; At(o) && !fi(o); ) {
    const a = Pt(o),
      l = nf(o);
    !l && a.position === "fixed" && (i = null),
      (
        s
          ? !l && !i
          : (!l &&
              a.position === "static" &&
              !!i &&
              ["absolute", "fixed"].includes(i.position)) ||
            (Bs(o) && !l && lx(e, o))
      )
        ? (r = r.filter((u) => u !== o))
        : (i = a),
      (o = _n(o));
  }
  return t.set(e, r), r;
}
function _T(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e;
  const o = [
      ...(n === "clippingAncestors"
        ? Ya(t)
          ? []
          : FT(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = o[0],
    l = o.reduce(
      (c, u) => {
        const f = gm(t, u, i);
        return (
          (c.top = Qe(f.top, c.top)),
          (c.right = Ln(f.right, c.right)),
          (c.bottom = Ln(f.bottom, c.bottom)),
          (c.left = Qe(f.left, c.left)),
          c
        );
      },
      gm(t, a, i),
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function OT(e) {
  const { width: t, height: n } = sx(e);
  return { width: t, height: n };
}
function VT(e, t, n) {
  const r = zt(t),
    i = Bt(t),
    s = n === "fixed",
    o = fr(e, !0, s, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Ot(0);
  if (r || (!r && !s))
    if (((Si(t) !== "body" || Bs(i)) && (a = qa(t)), r)) {
      const h = fr(t, !0, s, t);
      (l.x = h.x + t.clientLeft), (l.y = h.y + t.clientTop);
    } else i && (l.x = of(i));
  const c = i && !r && !s ? ax(i, a) : Ot(0),
    u = o.left + a.scrollLeft - l.x - c.x,
    f = o.top + a.scrollTop - l.y - c.y;
  return { x: u, y: f, width: o.width, height: o.height };
}
function Kl(e) {
  return Pt(e).position === "static";
}
function ym(e, t) {
  if (!zt(e) || Pt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return Bt(e) === n && (n = n.ownerDocument.body), n;
}
function cx(e, t) {
  const n = Je(e);
  if (Ya(e)) return n;
  if (!zt(e)) {
    let i = _n(e);
    for (; i && !fi(i); ) {
      if (At(i) && !Kl(i)) return i;
      i = _n(i);
    }
    return n;
  }
  let r = ym(e, t);
  for (; r && PT(r) && Kl(r); ) r = ym(r, t);
  return r && fi(r) && Kl(r) && !nf(r) ? n : r || TT(e) || n;
}
const zT = async function (e) {
  const t = this.getOffsetParent || cx,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: VT(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function BT(e) {
  return Pt(e).direction === "rtl";
}
const UT = {
  convertOffsetParentRelativeRectToViewportRelativeRect: IT,
  getDocumentElement: Bt,
  getClippingRect: _T,
  getOffsetParent: cx,
  getElementRects: zT,
  getClientRects: DT,
  getDimensions: OT,
  getScale: Hr,
  isElement: At,
  isRTL: BT,
};
function ux(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function HT(e, t) {
  let n = null,
    r;
  const i = Bt(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
  }
  function o(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s();
    const c = e.getBoundingClientRect(),
      { left: u, top: f, width: h, height: g } = c;
    if ((a || t(), !h || !g)) return;
    const x = ho(f),
      y = ho(i.clientWidth - (u + h)),
      b = ho(i.clientHeight - (f + g)),
      m = ho(u),
      v = {
        rootMargin: -x + "px " + -y + "px " + -b + "px " + -m + "px",
        threshold: Qe(0, Ln(1, l)) || 1,
      };
    let S = !0;
    function C(k) {
      const A = k[0].intersectionRatio;
      if (A !== l) {
        if (!S) return o();
        A
          ? o(!1, A)
          : (r = setTimeout(() => {
              o(!1, 1e-7);
            }, 1e3));
      }
      A === 1 && !ux(c, e.getBoundingClientRect()) && o(), (S = !1);
    }
    try {
      n = new IntersectionObserver(C, { ...v, root: i.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, v);
    }
    n.observe(e);
  }
  return o(!0), s;
}
function $T(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: i = !0,
      ancestorResize: s = !0,
      elementResize: o = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    c = sf(e),
    u = i || s ? [...(c ? Ts(c) : []), ...Ts(t)] : [];
  u.forEach((m) => {
    i && m.addEventListener("scroll", n, { passive: !0 }),
      s && m.addEventListener("resize", n);
  });
  const f = c && a ? HT(c, n) : null;
  let h = -1,
    g = null;
  o &&
    ((g = new ResizeObserver((m) => {
      let [p] = m;
      p &&
        p.target === c &&
        g &&
        (g.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var v;
          (v = g) == null || v.observe(t);
        }))),
        n();
    })),
    c && !l && g.observe(c),
    g.observe(t));
  let x,
    y = l ? fr(e) : null;
  l && b();
  function b() {
    const m = fr(e);
    y && !ux(y, m) && n(), (y = m), (x = requestAnimationFrame(b));
  }
  return (
    n(),
    () => {
      var m;
      u.forEach((p) => {
        i && p.removeEventListener("scroll", n),
          s && p.removeEventListener("resize", n);
      }),
        f == null || f(),
        (m = g) == null || m.disconnect(),
        (g = null),
        l && cancelAnimationFrame(x);
    }
  );
}
const WT = CT,
  KT = kT,
  GT = wT,
  QT = AT,
  YT = bT,
  vm = xT,
  qT = ET,
  XT = (e, t, n) => {
    const r = new Map(),
      i = { platform: UT, ...n },
      s = { ...i.platform, _c: r };
    return vT(e, t, { ...i, platform: s });
  };
var Do = typeof document < "u" ? w.useLayoutEffect : w.useEffect;
function wa(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, i;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!wa(e[r], t[r])) return !1;
      return !0;
    }
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const s = i[r];
      if (!(s === "_owner" && e.$$typeof) && !wa(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function dx(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function xm(e, t) {
  const n = dx(e);
  return Math.round(t * n) / n;
}
function Gl(e) {
  const t = w.useRef(e);
  return (
    Do(() => {
      t.current = e;
    }),
    t
  );
}
function JT(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: i,
      elements: { reference: s, floating: o } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: c,
    } = e,
    [u, f] = w.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [h, g] = w.useState(r);
  wa(h, r) || g(r);
  const [x, y] = w.useState(null),
    [b, m] = w.useState(null),
    p = w.useCallback((P) => {
      P !== k.current && ((k.current = P), y(P));
    }, []),
    v = w.useCallback((P) => {
      P !== A.current && ((A.current = P), m(P));
    }, []),
    S = s || x,
    C = o || b,
    k = w.useRef(null),
    A = w.useRef(null),
    E = w.useRef(u),
    I = l != null,
    N = Gl(l),
    z = Gl(i),
    F = Gl(c),
    K = w.useCallback(() => {
      if (!k.current || !A.current) return;
      const P = { placement: t, strategy: n, middleware: h };
      z.current && (P.platform = z.current),
        XT(k.current, A.current, P).then((D) => {
          const L = { ...D, isPositioned: F.current !== !1 };
          M.current &&
            !wa(E.current, L) &&
            ((E.current = L),
            Fs.flushSync(() => {
              f(L);
            }));
        });
    }, [h, t, n, z, F]);
  Do(() => {
    c === !1 &&
      E.current.isPositioned &&
      ((E.current.isPositioned = !1), f((P) => ({ ...P, isPositioned: !1 })));
  }, [c]);
  const M = w.useRef(!1);
  Do(
    () => (
      (M.current = !0),
      () => {
        M.current = !1;
      }
    ),
    [],
  ),
    Do(() => {
      if ((S && (k.current = S), C && (A.current = C), S && C)) {
        if (N.current) return N.current(S, C, K);
        K();
      }
    }, [S, C, K, N, I]);
  const Q = w.useMemo(
      () => ({ reference: k, floating: A, setReference: p, setFloating: v }),
      [p, v],
    ),
    H = w.useMemo(() => ({ reference: S, floating: C }), [S, C]),
    O = w.useMemo(() => {
      const P = { position: n, left: 0, top: 0 };
      if (!H.floating) return P;
      const D = xm(H.floating, u.x),
        L = xm(H.floating, u.y);
      return a
        ? {
            ...P,
            transform: "translate(" + D + "px, " + L + "px)",
            ...(dx(H.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: D, top: L };
    }, [n, a, H.floating, u.x, u.y]);
  return w.useMemo(
    () => ({ ...u, update: K, refs: Q, elements: H, floatingStyles: O }),
    [u, K, Q, H, O],
  );
}
const ZT = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: i } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? vm({ element: r.current, padding: i }).fn(n)
            : {}
          : r
            ? vm({ element: r, padding: i }).fn(n)
            : {};
      },
    };
  },
  ej = (e, t) => ({ ...WT(e), options: [e, t] }),
  tj = (e, t) => ({ ...KT(e), options: [e, t] }),
  nj = (e, t) => ({ ...qT(e), options: [e, t] }),
  rj = (e, t) => ({ ...GT(e), options: [e, t] }),
  ij = (e, t) => ({ ...QT(e), options: [e, t] }),
  sj = (e, t) => ({ ...YT(e), options: [e, t] }),
  oj = (e, t) => ({ ...ZT(e), options: [e, t] });
var aj = "Arrow",
  fx = w.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: i = 5, ...s } = e;
    return d.jsx($e.svg, {
      ...s,
      ref: t,
      width: r,
      height: i,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : d.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
fx.displayName = aj;
var lj = fx;
function cj(e) {
  const [t, n] = w.useState(void 0);
  return (
    dr(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((i) => {
          if (!Array.isArray(i) || !i.length) return;
          const s = i[0];
          let o, a;
          if ("borderBoxSize" in s) {
            const l = s.borderBoxSize,
              c = Array.isArray(l) ? l[0] : l;
            (o = c.inlineSize), (a = c.blockSize);
          } else (o = e.offsetWidth), (a = e.offsetHeight);
          n({ width: o, height: a });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var hx = "Popper",
  [px, mx] = Ga(hx),
  [kN, gx] = px(hx),
  yx = "PopperAnchor",
  vx = w.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...i } = e,
      s = gx(yx, n),
      o = w.useRef(null),
      a = Et(t, o);
    return (
      w.useEffect(() => {
        s.onAnchorChange((r == null ? void 0 : r.current) || o.current);
      }),
      r ? null : d.jsx($e.div, { ...i, ref: a })
    );
  });
vx.displayName = yx;
var af = "PopperContent",
  [uj, dj] = px(af),
  xx = w.forwardRef((e, t) => {
    var Un, hf, pf, mf, gf, yf;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: i = 0,
        align: s = "center",
        alignOffset: o = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: c = [],
        collisionPadding: u = 0,
        sticky: f = "partial",
        hideWhenDetached: h = !1,
        updatePositionStrategy: g = "optimized",
        onPlaced: x,
        ...y
      } = e,
      b = gx(af, n),
      [m, p] = w.useState(null),
      v = Et(t, (ki) => p(ki)),
      [S, C] = w.useState(null),
      k = cj(S),
      A = (k == null ? void 0 : k.width) ?? 0,
      E = (k == null ? void 0 : k.height) ?? 0,
      I = r + (s !== "center" ? "-" + s : ""),
      N =
        typeof u == "number"
          ? u
          : { top: 0, right: 0, bottom: 0, left: 0, ...u },
      z = Array.isArray(c) ? c : [c],
      F = z.length > 0,
      K = { padding: N, boundary: z.filter(hj), altBoundary: F },
      {
        refs: M,
        floatingStyles: Q,
        placement: H,
        isPositioned: O,
        middlewareData: P,
      } = JT({
        strategy: "fixed",
        placement: I,
        whileElementsMounted: (...ki) =>
          $T(...ki, { animationFrame: g === "always" }),
        elements: { reference: b.anchor },
        middleware: [
          ej({ mainAxis: i + E, alignmentAxis: o }),
          l &&
            tj({
              mainAxis: !0,
              crossAxis: !1,
              limiter: f === "partial" ? nj() : void 0,
              ...K,
            }),
          l && rj({ ...K }),
          ij({
            ...K,
            apply: ({
              elements: ki,
              rects: vf,
              availableWidth: nw,
              availableHeight: rw,
            }) => {
              const { width: iw, height: sw } = vf.reference,
                Us = ki.floating.style;
              Us.setProperty("--radix-popper-available-width", `${nw}px`),
                Us.setProperty("--radix-popper-available-height", `${rw}px`),
                Us.setProperty("--radix-popper-anchor-width", `${iw}px`),
                Us.setProperty("--radix-popper-anchor-height", `${sw}px`);
            },
          }),
          S && oj({ element: S, padding: a }),
          pj({ arrowWidth: A, arrowHeight: E }),
          h && sj({ strategy: "referenceHidden", ...K }),
        ],
      }),
      [D, L] = Sx(H),
      $ = Vt(x);
    dr(() => {
      O && ($ == null || $());
    }, [O, $]);
    const re = (Un = P.arrow) == null ? void 0 : Un.x,
      pt = (hf = P.arrow) == null ? void 0 : hf.y,
      it = ((pf = P.arrow) == null ? void 0 : pf.centerOffset) !== 0,
      [Ci, Ut] = w.useState();
    return (
      dr(() => {
        m && Ut(window.getComputedStyle(m).zIndex);
      }, [m]),
      d.jsx("div", {
        ref: M.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Q,
          transform: O ? Q.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: Ci,
          "--radix-popper-transform-origin": [
            (mf = P.transformOrigin) == null ? void 0 : mf.x,
            (gf = P.transformOrigin) == null ? void 0 : gf.y,
          ].join(" "),
          ...(((yf = P.hide) == null ? void 0 : yf.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: d.jsx(uj, {
          scope: n,
          placedSide: D,
          onArrowChange: C,
          arrowX: re,
          arrowY: pt,
          shouldHideArrow: it,
          children: d.jsx($e.div, {
            "data-side": D,
            "data-align": L,
            ...y,
            ref: v,
            style: { ...y.style, animation: O ? void 0 : "none" },
          }),
        }),
      })
    );
  });
xx.displayName = af;
var wx = "PopperArrow",
  fj = { top: "bottom", right: "left", bottom: "top", left: "right" },
  bx = w.forwardRef(function (t, n) {
    const { __scopePopper: r, ...i } = t,
      s = dj(wx, r),
      o = fj[s.placedSide];
    return d.jsx("span", {
      ref: s.onArrowChange,
      style: {
        position: "absolute",
        left: s.arrowX,
        top: s.arrowY,
        [o]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[s.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[s.placedSide],
        visibility: s.shouldHideArrow ? "hidden" : void 0,
      },
      children: d.jsx(lj, {
        ...i,
        ref: n,
        style: { ...i.style, display: "block" },
      }),
    });
  });
bx.displayName = wx;
function hj(e) {
  return e !== null;
}
var pj = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, m, p;
    const { placement: n, rects: r, middlewareData: i } = t,
      o = ((b = i.arrow) == null ? void 0 : b.centerOffset) !== 0,
      a = o ? 0 : e.arrowWidth,
      l = o ? 0 : e.arrowHeight,
      [c, u] = Sx(n),
      f = { start: "0%", center: "50%", end: "100%" }[u],
      h = (((m = i.arrow) == null ? void 0 : m.x) ?? 0) + a / 2,
      g = (((p = i.arrow) == null ? void 0 : p.y) ?? 0) + l / 2;
    let x = "",
      y = "";
    return (
      c === "bottom"
        ? ((x = o ? f : `${h}px`), (y = `${-l}px`))
        : c === "top"
          ? ((x = o ? f : `${h}px`), (y = `${r.floating.height + l}px`))
          : c === "right"
            ? ((x = `${-l}px`), (y = o ? f : `${g}px`))
            : c === "left" &&
              ((x = `${r.floating.width + l}px`), (y = o ? f : `${g}px`)),
      { data: { x, y } }
    );
  },
});
function Sx(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var mj = vx,
  gj = xx,
  yj = bx,
  vj = "Portal",
  Cx = w.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [i, s] = w.useState(!1);
    dr(() => s(!0), []);
    const o =
      n ||
      (i &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return o ? M2.createPortal(d.jsx($e.div, { ...r, ref: t }), o) : null;
  });
Cx.displayName = vj;
function xj(e, t) {
  return w.useReducer((n, r) => t[n][r] ?? n, e);
}
var lf = (e) => {
  const { present: t, children: n } = e,
    r = wj(t),
    i =
      typeof n == "function" ? n({ present: r.isPresent }) : w.Children.only(n),
    s = Et(r.ref, bj(i));
  return typeof n == "function" || r.isPresent
    ? w.cloneElement(i, { ref: s })
    : null;
};
lf.displayName = "Presence";
function wj(e) {
  const [t, n] = w.useState(),
    r = w.useRef({}),
    i = w.useRef(e),
    s = w.useRef("none"),
    o = e ? "mounted" : "unmounted",
    [a, l] = xj(o, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    w.useEffect(() => {
      const c = po(r.current);
      s.current = a === "mounted" ? c : "none";
    }, [a]),
    dr(() => {
      const c = r.current,
        u = i.current;
      if (u !== e) {
        const h = s.current,
          g = po(c);
        e
          ? l("MOUNT")
          : g === "none" || (c == null ? void 0 : c.display) === "none"
            ? l("UNMOUNT")
            : l(u && h !== g ? "ANIMATION_OUT" : "UNMOUNT"),
          (i.current = e);
      }
    }, [e, l]),
    dr(() => {
      if (t) {
        let c;
        const u = t.ownerDocument.defaultView ?? window,
          f = (g) => {
            const y = po(r.current).includes(g.animationName);
            if (g.target === t && y && (l("ANIMATION_END"), !i.current)) {
              const b = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (c = u.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = b);
                }));
            }
          },
          h = (g) => {
            g.target === t && (s.current = po(r.current));
          };
        return (
          t.addEventListener("animationstart", h),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            u.clearTimeout(c),
              t.removeEventListener("animationstart", h),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f);
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: w.useCallback((c) => {
        c && (r.current = getComputedStyle(c)), n(c);
      }, []),
    }
  );
}
function po(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function bj(e) {
  var r, i;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (i = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : i.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function Sj({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, i] = Cj({ defaultProp: t, onChange: n }),
    s = e !== void 0,
    o = s ? e : r,
    a = Vt(n),
    l = w.useCallback(
      (c) => {
        if (s) {
          const f = typeof c == "function" ? c(e) : c;
          f !== e && a(f);
        } else i(c);
      },
      [s, e, i, a],
    );
  return [o, l];
}
function Cj({ defaultProp: e, onChange: t }) {
  const n = w.useState(e),
    [r] = n,
    i = w.useRef(r),
    s = Vt(t);
  return (
    w.useEffect(() => {
      i.current !== r && (s(r), (i.current = r));
    }, [r, i, s]),
    n
  );
}
var kj = "VisuallyHidden",
  Xa = w.forwardRef((e, t) =>
    d.jsx($e.span, {
      ...e,
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    }),
  );
Xa.displayName = kj;
var Ej = Xa,
  [Ja, EN] = Ga("Tooltip", [mx]),
  cf = mx(),
  kx = "TooltipProvider",
  Aj = 700,
  wm = "tooltip.open",
  [Pj, Ex] = Ja(kx),
  Ax = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = Aj,
        skipDelayDuration: r = 300,
        disableHoverableContent: i = !1,
        children: s,
      } = e,
      o = w.useRef(!0),
      a = w.useRef(!1),
      l = w.useRef(0);
    return (
      w.useEffect(() => {
        const c = l.current;
        return () => window.clearTimeout(c);
      }, []),
      d.jsx(Pj, {
        scope: t,
        isOpenDelayedRef: o,
        delayDuration: n,
        onOpen: w.useCallback(() => {
          window.clearTimeout(l.current), (o.current = !1);
        }, []),
        onClose: w.useCallback(() => {
          window.clearTimeout(l.current),
            (l.current = window.setTimeout(() => (o.current = !0), r));
        }, [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: w.useCallback((c) => {
          a.current = c;
        }, []),
        disableHoverableContent: i,
        children: s,
      })
    );
  };
Ax.displayName = kx;
var Px = "Tooltip",
  [AN, Za] = Ja(Px),
  pu = "TooltipTrigger",
  Tj = w.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      i = Za(pu, n),
      s = Ex(pu, n),
      o = cf(n),
      a = w.useRef(null),
      l = Et(t, a, i.onTriggerChange),
      c = w.useRef(!1),
      u = w.useRef(!1),
      f = w.useCallback(() => (c.current = !1), []);
    return (
      w.useEffect(
        () => () => document.removeEventListener("pointerup", f),
        [f],
      ),
      d.jsx(mj, {
        asChild: !0,
        ...o,
        children: d.jsx($e.button, {
          "aria-describedby": i.open ? i.contentId : void 0,
          "data-state": i.stateAttribute,
          ...r,
          ref: l,
          onPointerMove: ge(e.onPointerMove, (h) => {
            h.pointerType !== "touch" &&
              !u.current &&
              !s.isPointerInTransitRef.current &&
              (i.onTriggerEnter(), (u.current = !0));
          }),
          onPointerLeave: ge(e.onPointerLeave, () => {
            i.onTriggerLeave(), (u.current = !1);
          }),
          onPointerDown: ge(e.onPointerDown, () => {
            i.open && i.onClose(),
              (c.current = !0),
              document.addEventListener("pointerup", f, { once: !0 });
          }),
          onFocus: ge(e.onFocus, () => {
            c.current || i.onOpen();
          }),
          onBlur: ge(e.onBlur, i.onClose),
          onClick: ge(e.onClick, i.onClose),
        }),
      })
    );
  });
Tj.displayName = pu;
var jj = "TooltipPortal",
  [PN, Nj] = Ja(jj, { forceMount: void 0 }),
  hi = "TooltipContent",
  Tx = w.forwardRef((e, t) => {
    const n = Nj(hi, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: i = "top", ...s } = e,
      o = Za(hi, e.__scopeTooltip);
    return d.jsx(lf, {
      present: r || o.open,
      children: o.disableHoverableContent
        ? d.jsx(jx, { side: i, ...s, ref: t })
        : d.jsx(Ij, { side: i, ...s, ref: t }),
    });
  }),
  Ij = w.forwardRef((e, t) => {
    const n = Za(hi, e.__scopeTooltip),
      r = Ex(hi, e.__scopeTooltip),
      i = w.useRef(null),
      s = Et(t, i),
      [o, a] = w.useState(null),
      { trigger: l, onClose: c } = n,
      u = i.current,
      { onPointerInTransitChange: f } = r,
      h = w.useCallback(() => {
        a(null), f(!1);
      }, [f]),
      g = w.useCallback(
        (x, y) => {
          const b = x.currentTarget,
            m = { x: x.clientX, y: x.clientY },
            p = Fj(m, b.getBoundingClientRect()),
            v = _j(m, p),
            S = Oj(y.getBoundingClientRect()),
            C = zj([...v, ...S]);
          a(C), f(!0);
        },
        [f],
      );
    return (
      w.useEffect(() => () => h(), [h]),
      w.useEffect(() => {
        if (l && u) {
          const x = (b) => g(b, u),
            y = (b) => g(b, l);
          return (
            l.addEventListener("pointerleave", x),
            u.addEventListener("pointerleave", y),
            () => {
              l.removeEventListener("pointerleave", x),
                u.removeEventListener("pointerleave", y);
            }
          );
        }
      }, [l, u, g, h]),
      w.useEffect(() => {
        if (o) {
          const x = (y) => {
            const b = y.target,
              m = { x: y.clientX, y: y.clientY },
              p =
                (l == null ? void 0 : l.contains(b)) ||
                (u == null ? void 0 : u.contains(b)),
              v = !Vj(m, o);
            p ? h() : v && (h(), c());
          };
          return (
            document.addEventListener("pointermove", x),
            () => document.removeEventListener("pointermove", x)
          );
        }
      }, [l, u, o, c, h]),
      d.jsx(jx, { ...e, ref: s })
    );
  }),
  [Dj, Mj] = Ja(Px, { isInside: !1 }),
  Rj = qP("TooltipContent"),
  jx = w.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": i,
        onEscapeKeyDown: s,
        onPointerDownOutside: o,
        ...a
      } = e,
      l = Za(hi, n),
      c = cf(n),
      { onClose: u } = l;
    return (
      w.useEffect(
        () => (
          document.addEventListener(wm, u),
          () => document.removeEventListener(wm, u)
        ),
        [u],
      ),
      w.useEffect(() => {
        if (l.trigger) {
          const f = (h) => {
            const g = h.target;
            g != null && g.contains(l.trigger) && u();
          };
          return (
            window.addEventListener("scroll", f, { capture: !0 }),
            () => window.removeEventListener("scroll", f, { capture: !0 })
          );
        }
      }, [l.trigger, u]),
      d.jsx(Jd, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: o,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: u,
        children: d.jsxs(gj, {
          "data-state": l.stateAttribute,
          ...c,
          ...a,
          ref: t,
          style: {
            ...a.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            d.jsx(Rj, { children: r }),
            d.jsx(Dj, {
              scope: n,
              isInside: !0,
              children: d.jsx(Ej, {
                id: l.contentId,
                role: "tooltip",
                children: i || r,
              }),
            }),
          ],
        }),
      })
    );
  });
Tx.displayName = hi;
var Nx = "TooltipArrow",
  Lj = w.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      i = cf(n);
    return Mj(Nx, n).isInside ? null : d.jsx(yj, { ...i, ...r, ref: t });
  });
Lj.displayName = Nx;
function Fj(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    i = Math.abs(t.right - e.x),
    s = Math.abs(t.left - e.x);
  switch (Math.min(n, r, i, s)) {
    case s:
      return "left";
    case i:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function _j(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function Oj(e) {
  const { top: t, right: n, bottom: r, left: i } = e;
  return [
    { x: i, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: i, y: r },
  ];
}
function Vj(e, t) {
  const { x: n, y: r } = e;
  let i = !1;
  for (let s = 0, o = t.length - 1; s < t.length; o = s++) {
    const a = t[s].x,
      l = t[s].y,
      c = t[o].x,
      u = t[o].y;
    l > r != u > r && n < ((c - a) * (r - l)) / (u - l) + a && (i = !i);
  }
  return i;
}
function zj(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0,
    ),
    Bj(t)
  );
}
function Bj(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1],
        o = t[t.length - 2];
      if ((s.x - o.x) * (i.y - o.y) >= (s.y - o.y) * (i.x - o.x)) t.pop();
      else break;
    }
    t.push(i);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const i = e[r];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1],
        o = n[n.length - 2];
      if ((s.x - o.x) * (i.y - o.y) >= (s.y - o.y) * (i.x - o.x)) n.pop();
      else break;
    }
    n.push(i);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var Uj = Ax,
  Ix = Tx;
const Hj = Uj,
  $j = w.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    d.jsx(Ix, {
      ref: r,
      sideOffset: t,
      className: rt(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
        e,
      ),
      ...n,
    }),
  );
$j.displayName = Ix.displayName;
const Wj = 1,
  Kj = 1e6;
let Ql = 0;
function Gj() {
  return (Ql = (Ql + 1) % Number.MAX_SAFE_INTEGER), Ql.toString();
}
const Yl = new Map(),
  bm = (e) => {
    if (Yl.has(e)) return;
    const t = setTimeout(() => {
      Yl.delete(e), ns({ type: "REMOVE_TOAST", toastId: e });
    }, Kj);
    Yl.set(e, t);
  },
  Qj = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Wj) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? bm(n)
            : e.toasts.forEach((r) => {
                bm(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  Mo = [];
let Ro = { toasts: [] };
function ns(e) {
  (Ro = Qj(Ro, e)),
    Mo.forEach((t) => {
      t(Ro);
    });
}
function Yj({ ...e }) {
  const t = Gj(),
    n = (i) => ns({ type: "UPDATE_TOAST", toast: { ...i, id: t } }),
    r = () => ns({ type: "DISMISS_TOAST", toastId: t });
  return (
    ns({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (i) => {
          i || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function qj() {
  const [e, t] = w.useState(Ro);
  return (
    w.useEffect(
      () => (
        Mo.push(t),
        () => {
          const n = Mo.indexOf(t);
          n > -1 && Mo.splice(n, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: Yj,
      dismiss: (n) => ns({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function Xj(e) {
  const t = e + "CollectionProvider",
    [n, r] = Ga(t),
    [i, s] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    o = (y) => {
      const { scope: b, children: m } = y,
        p = Re.useRef(null),
        v = Re.useRef(new Map()).current;
      return d.jsx(i, { scope: b, itemMap: v, collectionRef: p, children: m });
    };
  o.displayName = t;
  const a = e + "CollectionSlot",
    l = cu(a),
    c = Re.forwardRef((y, b) => {
      const { scope: m, children: p } = y,
        v = s(a, m),
        S = Et(b, v.collectionRef);
      return d.jsx(l, { ref: S, children: p });
    });
  c.displayName = a;
  const u = e + "CollectionItemSlot",
    f = "data-radix-collection-item",
    h = cu(u),
    g = Re.forwardRef((y, b) => {
      const { scope: m, children: p, ...v } = y,
        S = Re.useRef(null),
        C = Et(b, S),
        k = s(u, m);
      return (
        Re.useEffect(
          () => (
            k.itemMap.set(S, { ref: S, ...v }), () => void k.itemMap.delete(S)
          ),
        ),
        d.jsx(h, { [f]: "", ref: C, children: p })
      );
    });
  g.displayName = u;
  function x(y) {
    const b = s(e + "CollectionConsumer", y);
    return Re.useCallback(() => {
      const p = b.collectionRef.current;
      if (!p) return [];
      const v = Array.from(p.querySelectorAll(`[${f}]`));
      return Array.from(b.itemMap.values()).sort(
        (k, A) => v.indexOf(k.ref.current) - v.indexOf(A.ref.current),
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return [{ Provider: o, Slot: c, ItemSlot: g }, x, r];
}
var uf = "ToastProvider",
  [df, Jj, Zj] = Xj("Toast"),
  [Dx, TN] = Ga("Toast", [Zj]),
  [eN, el] = Dx(uf),
  Mx = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: i = "right",
        swipeThreshold: s = 50,
        children: o,
      } = e,
      [a, l] = w.useState(null),
      [c, u] = w.useState(0),
      f = w.useRef(!1),
      h = w.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${uf}\`. Expected non-empty \`string\`.`,
        ),
      d.jsx(df.Provider, {
        scope: t,
        children: d.jsx(eN, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: i,
          swipeThreshold: s,
          toastCount: c,
          viewport: a,
          onViewportChange: l,
          onToastAdd: w.useCallback(() => u((g) => g + 1), []),
          onToastRemove: w.useCallback(() => u((g) => g - 1), []),
          isFocusedToastEscapeKeyDownRef: f,
          isClosePausedRef: h,
          children: o,
        }),
      })
    );
  };
Mx.displayName = uf;
var Rx = "ToastViewport",
  tN = ["F8"],
  mu = "toast.viewportPause",
  gu = "toast.viewportResume",
  Lx = w.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = tN,
        label: i = "Notifications ({hotkey})",
        ...s
      } = e,
      o = el(Rx, n),
      a = Jj(n),
      l = w.useRef(null),
      c = w.useRef(null),
      u = w.useRef(null),
      f = w.useRef(null),
      h = Et(t, f, o.onViewportChange),
      g = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      x = o.toastCount > 0;
    w.useEffect(() => {
      const b = (m) => {
        var v;
        r.length !== 0 &&
          r.every((S) => m[S] || m.code === S) &&
          ((v = f.current) == null || v.focus());
      };
      return (
        document.addEventListener("keydown", b),
        () => document.removeEventListener("keydown", b)
      );
    }, [r]),
      w.useEffect(() => {
        const b = l.current,
          m = f.current;
        if (x && b && m) {
          const p = () => {
              if (!o.isClosePausedRef.current) {
                const k = new CustomEvent(mu);
                m.dispatchEvent(k), (o.isClosePausedRef.current = !0);
              }
            },
            v = () => {
              if (o.isClosePausedRef.current) {
                const k = new CustomEvent(gu);
                m.dispatchEvent(k), (o.isClosePausedRef.current = !1);
              }
            },
            S = (k) => {
              !b.contains(k.relatedTarget) && v();
            },
            C = () => {
              b.contains(document.activeElement) || v();
            };
          return (
            b.addEventListener("focusin", p),
            b.addEventListener("focusout", S),
            b.addEventListener("pointermove", p),
            b.addEventListener("pointerleave", C),
            window.addEventListener("blur", p),
            window.addEventListener("focus", v),
            () => {
              b.removeEventListener("focusin", p),
                b.removeEventListener("focusout", S),
                b.removeEventListener("pointermove", p),
                b.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", p),
                window.removeEventListener("focus", v);
            }
          );
        }
      }, [x, o.isClosePausedRef]);
    const y = w.useCallback(
      ({ tabbingDirection: b }) => {
        const p = a().map((v) => {
          const S = v.ref.current,
            C = [S, ...pN(S)];
          return b === "forwards" ? C : C.reverse();
        });
        return (b === "forwards" ? p.reverse() : p).flat();
      },
      [a],
    );
    return (
      w.useEffect(() => {
        const b = f.current;
        if (b) {
          const m = (p) => {
            var C, k, A;
            const v = p.altKey || p.ctrlKey || p.metaKey;
            if (p.key === "Tab" && !v) {
              const E = document.activeElement,
                I = p.shiftKey;
              if (p.target === b && I) {
                (C = c.current) == null || C.focus();
                return;
              }
              const F = y({ tabbingDirection: I ? "backwards" : "forwards" }),
                K = F.findIndex((M) => M === E);
              ql(F.slice(K + 1))
                ? p.preventDefault()
                : I
                  ? (k = c.current) == null || k.focus()
                  : (A = u.current) == null || A.focus();
            }
          };
          return (
            b.addEventListener("keydown", m),
            () => b.removeEventListener("keydown", m)
          );
        }
      }, [a, y]),
      d.jsxs(cT, {
        ref: l,
        role: "region",
        "aria-label": i.replace("{hotkey}", g),
        tabIndex: -1,
        style: { pointerEvents: x ? void 0 : "none" },
        children: [
          x &&
            d.jsx(yu, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const b = y({ tabbingDirection: "forwards" });
                ql(b);
              },
            }),
          d.jsx(df.Slot, {
            scope: n,
            children: d.jsx($e.ol, { tabIndex: -1, ...s, ref: h }),
          }),
          x &&
            d.jsx(yu, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const b = y({ tabbingDirection: "backwards" });
                ql(b);
              },
            }),
        ],
      })
    );
  });
Lx.displayName = Rx;
var Fx = "ToastFocusProxy",
  yu = w.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...i } = e,
      s = el(Fx, n);
    return d.jsx(Xa, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...i,
      ref: t,
      style: { position: "fixed" },
      onFocus: (o) => {
        var c;
        const a = o.relatedTarget;
        !((c = s.viewport) != null && c.contains(a)) && r();
      },
    });
  });
yu.displayName = Fx;
var tl = "Toast",
  nN = "toast.swipeStart",
  rN = "toast.swipeMove",
  iN = "toast.swipeCancel",
  sN = "toast.swipeEnd",
  _x = w.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: i, onOpenChange: s, ...o } = e,
      [a = !0, l] = Sj({ prop: r, defaultProp: i, onChange: s });
    return d.jsx(lf, {
      present: n || a,
      children: d.jsx(lN, {
        open: a,
        ...o,
        ref: t,
        onClose: () => l(!1),
        onPause: Vt(e.onPause),
        onResume: Vt(e.onResume),
        onSwipeStart: ge(e.onSwipeStart, (c) => {
          c.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: ge(e.onSwipeMove, (c) => {
          const { x: u, y: f } = c.detail.delta;
          c.currentTarget.setAttribute("data-swipe", "move"),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${u}px`,
            ),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${f}px`,
            );
        }),
        onSwipeCancel: ge(e.onSwipeCancel, (c) => {
          c.currentTarget.setAttribute("data-swipe", "cancel"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: ge(e.onSwipeEnd, (c) => {
          const { x: u, y: f } = c.detail.delta;
          c.currentTarget.setAttribute("data-swipe", "end"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${u}px`,
            ),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${f}px`,
            ),
            l(!1);
        }),
      }),
    });
  });
_x.displayName = tl;
var [oN, aN] = Dx(tl, { onClose() {} }),
  lN = w.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: i,
        open: s,
        onClose: o,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: c,
        onSwipeStart: u,
        onSwipeMove: f,
        onSwipeCancel: h,
        onSwipeEnd: g,
        ...x
      } = e,
      y = el(tl, n),
      [b, m] = w.useState(null),
      p = Et(t, (M) => m(M)),
      v = w.useRef(null),
      S = w.useRef(null),
      C = i || y.duration,
      k = w.useRef(0),
      A = w.useRef(C),
      E = w.useRef(0),
      { onToastAdd: I, onToastRemove: N } = y,
      z = Vt(() => {
        var Q;
        (b == null ? void 0 : b.contains(document.activeElement)) &&
          ((Q = y.viewport) == null || Q.focus()),
          o();
      }),
      F = w.useCallback(
        (M) => {
          !M ||
            M === 1 / 0 ||
            (window.clearTimeout(E.current),
            (k.current = new Date().getTime()),
            (E.current = window.setTimeout(z, M)));
        },
        [z],
      );
    w.useEffect(() => {
      const M = y.viewport;
      if (M) {
        const Q = () => {
            F(A.current), c == null || c();
          },
          H = () => {
            const O = new Date().getTime() - k.current;
            (A.current = A.current - O),
              window.clearTimeout(E.current),
              l == null || l();
          };
        return (
          M.addEventListener(mu, H),
          M.addEventListener(gu, Q),
          () => {
            M.removeEventListener(mu, H), M.removeEventListener(gu, Q);
          }
        );
      }
    }, [y.viewport, C, l, c, F]),
      w.useEffect(() => {
        s && !y.isClosePausedRef.current && F(C);
      }, [s, C, y.isClosePausedRef, F]),
      w.useEffect(() => (I(), () => N()), [I, N]);
    const K = w.useMemo(() => (b ? $x(b) : null), [b]);
    return y.viewport
      ? d.jsxs(d.Fragment, {
          children: [
            K &&
              d.jsx(cN, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: K,
              }),
            d.jsx(oN, {
              scope: n,
              onClose: z,
              children: Fs.createPortal(
                d.jsx(df.ItemSlot, {
                  scope: n,
                  children: d.jsx(lT, {
                    asChild: !0,
                    onEscapeKeyDown: ge(a, () => {
                      y.isFocusedToastEscapeKeyDownRef.current || z(),
                        (y.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: d.jsx($e.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": s ? "open" : "closed",
                      "data-swipe-direction": y.swipeDirection,
                      ...x,
                      ref: p,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: ge(e.onKeyDown, (M) => {
                        M.key === "Escape" &&
                          (a == null || a(M.nativeEvent),
                          M.nativeEvent.defaultPrevented ||
                            ((y.isFocusedToastEscapeKeyDownRef.current = !0),
                            z()));
                      }),
                      onPointerDown: ge(e.onPointerDown, (M) => {
                        M.button === 0 &&
                          (v.current = { x: M.clientX, y: M.clientY });
                      }),
                      onPointerMove: ge(e.onPointerMove, (M) => {
                        if (!v.current) return;
                        const Q = M.clientX - v.current.x,
                          H = M.clientY - v.current.y,
                          O = !!S.current,
                          P = ["left", "right"].includes(y.swipeDirection),
                          D = ["left", "up"].includes(y.swipeDirection)
                            ? Math.min
                            : Math.max,
                          L = P ? D(0, Q) : 0,
                          $ = P ? 0 : D(0, H),
                          re = M.pointerType === "touch" ? 10 : 2,
                          pt = { x: L, y: $ },
                          it = { originalEvent: M, delta: pt };
                        O
                          ? ((S.current = pt), mo(rN, f, it, { discrete: !1 }))
                          : Sm(pt, y.swipeDirection, re)
                            ? ((S.current = pt),
                              mo(nN, u, it, { discrete: !1 }),
                              M.target.setPointerCapture(M.pointerId))
                            : (Math.abs(Q) > re || Math.abs(H) > re) &&
                              (v.current = null);
                      }),
                      onPointerUp: ge(e.onPointerUp, (M) => {
                        const Q = S.current,
                          H = M.target;
                        if (
                          (H.hasPointerCapture(M.pointerId) &&
                            H.releasePointerCapture(M.pointerId),
                          (S.current = null),
                          (v.current = null),
                          Q)
                        ) {
                          const O = M.currentTarget,
                            P = { originalEvent: M, delta: Q };
                          Sm(Q, y.swipeDirection, y.swipeThreshold)
                            ? mo(sN, g, P, { discrete: !0 })
                            : mo(iN, h, P, { discrete: !0 }),
                            O.addEventListener(
                              "click",
                              (D) => D.preventDefault(),
                              { once: !0 },
                            );
                        }
                      }),
                    }),
                  }),
                }),
                y.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  cN = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      i = el(tl, t),
      [s, o] = w.useState(!1),
      [a, l] = w.useState(!1);
    return (
      fN(() => o(!0)),
      w.useEffect(() => {
        const c = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(c);
      }, []),
      a
        ? null
        : d.jsx(Cx, {
            asChild: !0,
            children: d.jsx(Xa, {
              ...r,
              children:
                s && d.jsxs(d.Fragment, { children: [i.label, " ", n] }),
            }),
          })
    );
  },
  uN = "ToastTitle",
  Ox = w.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return d.jsx($e.div, { ...r, ref: t });
  });
Ox.displayName = uN;
var dN = "ToastDescription",
  Vx = w.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return d.jsx($e.div, { ...r, ref: t });
  });
Vx.displayName = dN;
var zx = "ToastAction",
  Bx = w.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? d.jsx(Hx, {
          altText: n,
          asChild: !0,
          children: d.jsx(ff, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${zx}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
Bx.displayName = zx;
var Ux = "ToastClose",
  ff = w.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      i = aN(Ux, n);
    return d.jsx(Hx, {
      asChild: !0,
      children: d.jsx($e.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: ge(e.onClick, i.onClose),
      }),
    });
  });
ff.displayName = Ux;
var Hx = w.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...i } = e;
  return d.jsx($e.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...i,
    ref: t,
  });
});
function $x(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        hN(r))
      ) {
        const i = r.ariaHidden || r.hidden || r.style.display === "none",
          s = r.dataset.radixToastAnnounceExclude === "";
        if (!i)
          if (s) {
            const o = r.dataset.radixToastAnnounceAlt;
            o && t.push(o);
          } else t.push(...$x(r));
      }
    }),
    t
  );
}
function mo(e, t, n, { discrete: r }) {
  const i = n.originalEvent.currentTarget,
    s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }),
    r ? J0(i, s) : i.dispatchEvent(s);
}
var Sm = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    i = Math.abs(e.y),
    s = r > i;
  return t === "left" || t === "right" ? s && r > n : !s && i > n;
};
function fN(e = () => {}) {
  const t = Vt(e);
  dr(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t)),
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function hN(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function pN(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const i = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || i
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ql(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t),
  );
}
var mN = Mx,
  Wx = Lx,
  Kx = _x,
  Gx = Ox,
  Qx = Vx,
  Yx = Bx,
  qx = ff;
const Cm = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  km = L0,
  gN = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return km(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: i, defaultVariants: s } = t,
      o = Object.keys(i).map((c) => {
        const u = n == null ? void 0 : n[c],
          f = s == null ? void 0 : s[c];
        if (u === null) return null;
        const h = Cm(u) || Cm(f);
        return i[c][h];
      }),
      a =
        n &&
        Object.entries(n).reduce((c, u) => {
          let [f, h] = u;
          return h === void 0 || (c[f] = h), c;
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((c, u) => {
              let { class: f, className: h, ...g } = u;
              return Object.entries(g).every((x) => {
                let [y, b] = x;
                return Array.isArray(b)
                  ? b.includes({ ...s, ...a }[y])
                  : { ...s, ...a }[y] === b;
              })
                ? [...c, f, h]
                : c;
            }, []);
    return km(
      e,
      o,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  },
  yN = mN,
  Xx = w.forwardRef(({ className: e, ...t }, n) =>
    d.jsx(Wx, {
      ref: n,
      className: rt(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e,
      ),
      ...t,
    }),
  );
Xx.displayName = Wx.displayName;
const vN = gN(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  Jx = w.forwardRef(({ className: e, variant: t, ...n }, r) =>
    d.jsx(Kx, { ref: r, className: rt(vN({ variant: t }), e), ...n }),
  );
Jx.displayName = Kx.displayName;
const xN = w.forwardRef(({ className: e, ...t }, n) =>
  d.jsx(Yx, {
    ref: n,
    className: rt(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e,
    ),
    ...t,
  }),
);
xN.displayName = Yx.displayName;
const Zx = w.forwardRef(({ className: e, ...t }, n) =>
  d.jsx(qx, {
    ref: n,
    className: rt(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e,
    ),
    "toast-close": "",
    ...t,
    children: d.jsx(oa, { className: "h-4 w-4" }),
  }),
);
Zx.displayName = qx.displayName;
const ew = w.forwardRef(({ className: e, ...t }, n) =>
  d.jsx(Gx, { ref: n, className: rt("text-sm font-semibold", e), ...t }),
);
ew.displayName = Gx.displayName;
const tw = w.forwardRef(({ className: e, ...t }, n) =>
  d.jsx(Qx, { ref: n, className: rt("text-sm opacity-90", e), ...t }),
);
tw.displayName = Qx.displayName;
function wN() {
  const { toasts: e } = qj();
  return d.jsxs(yN, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: i, ...s }) {
        return d.jsxs(
          Jx,
          {
            ...s,
            children: [
              d.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && d.jsx(ew, { children: n }),
                  r && d.jsx(tw, { children: r }),
                ],
              }),
              i,
              d.jsx(Zx, {}),
            ],
          },
          t,
        );
      }),
      d.jsx(Xx, {}),
    ],
  });
}
(function () {
  const e = sessionStorage.redirect;
  delete sessionStorage.redirect,
    e && e !== location.href && history.replaceState(null, "", e);
})();
Ky(document.getElementById("root")).render(
  d.jsx($P, {
    client: GP,
    children: d.jsxs(Hj, { children: [d.jsx(wP, {}), d.jsx(wN, {})] }),
  }),
);
