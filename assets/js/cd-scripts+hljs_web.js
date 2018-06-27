/*! highlight.js v9.12.0 | BSD3 License | git.io/hljslicense */ ! function(e) {
  var n = "object" == typeof window && window || "object" == typeof self && self;
  "undefined" != typeof exports ? e(exports) : n && (n.hljs = e({}), "function" == typeof define && define.amd && define([], function() {
    return n.hljs
  }))
}(function(e) {
  function n(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  }

  function t(e) {
    return e.nodeName.toLowerCase()
  }

  function r(e, n) {
    var t = e && e.exec(n);
    return t && 0 === t.index
  }

  function a(e) {
    return k.test(e)
  }

  function i(e) {
    var n, t, r, i, o = e.className + " ";
    if (o += e.parentNode ? e.parentNode.className : "", t = B.exec(o)) return w(t[1]) ? t[1] : "no-highlight";
    for (o = o.split(/\s+/), n = 0, r = o.length; r > n; n++)
      if (i = o[n], a(i) || w(i)) return i
  }

  function o(e) {
    var n, t = {},
      r = Array.prototype.slice.call(arguments, 1);
    for (n in e) t[n] = e[n];
    return r.forEach(function(e) {
      for (n in e) t[n] = e[n]
    }), t
  }

  function u(e) {
    var n = [];
    return function r(e, a) {
      for (var i = e.firstChild; i; i = i.nextSibling) 3 === i.nodeType ? a += i.nodeValue.length : 1 === i.nodeType && (n.push({
        event: "start",
        offset: a,
        node: i
      }), a = r(i, a), t(i).match(/br|hr|img|input/) || n.push({
        event: "stop",
        offset: a,
        node: i
      }));
      return a
    }(e, 0), n
  }

  function c(e, r, a) {
    function i() {
      return e.length && r.length ? e[0].offset !== r[0].offset ? e[0].offset < r[0].offset ? e : r : "start" === r[0].event ? e : r : e.length ? e : r
    }

    function o(e) {
      function r(e) {
        return " " + e.nodeName + '="' + n(e.value).replace('"', "&quot;") + '"'
      }
      s += "<" + t(e) + E.map.call(e.attributes, r).join("") + ">"
    }

    function u(e) {
      s += "</" + t(e) + ">"
    }

    function c(e) {
      ("start" === e.event ? o : u)(e.node)
    }
    for (var l = 0, s = "", f = []; e.length || r.length;) {
      var g = i();
      if (s += n(a.substring(l, g[0].offset)), l = g[0].offset, g === e) {
        f.reverse().forEach(u);
        do c(g.splice(0, 1)[0]), g = i(); while (g === e && g.length && g[0].offset === l);
        f.reverse().forEach(o)
      } else "start" === g[0].event ? f.push(g[0].node) : f.pop(), c(g.splice(0, 1)[0])
    }
    return s + n(a.substr(l))
  }

  function l(e) {
    return e.v && !e.cached_variants && (e.cached_variants = e.v.map(function(n) {
      return o(e, {
        v: null
      }, n)
    })), e.cached_variants || e.eW && [o(e)] || [e]
  }

  function s(e) {
    function n(e) {
      return e && e.source || e
    }

    function t(t, r) {
      return new RegExp(n(t), "m" + (e.cI ? "i" : "") + (r ? "g" : ""))
    }

    function r(a, i) {
      if (!a.compiled) {
        if (a.compiled = !0, a.k = a.k || a.bK, a.k) {
          var o = {},
            u = function(n, t) {
              e.cI && (t = t.toLowerCase()), t.split(" ").forEach(function(e) {
                var t = e.split("|");
                o[t[0]] = [n, t[1] ? Number(t[1]) : 1]
              })
            };
          "string" == typeof a.k ? u("keyword", a.k) : x(a.k).forEach(function(e) {
            u(e, a.k[e])
          }), a.k = o
        }
        a.lR = t(a.l || /\w+/, !0), i && (a.bK && (a.b = "\\b(" + a.bK.split(" ").join("|") + ")\\b"), a.b || (a.b = /\B|\b/), a.bR = t(a.b), a.e || a.eW || (a.e = /\B|\b/), a.e && (a.eR = t(a.e)), a.tE = n(a.e) || "", a.eW && i.tE && (a.tE += (a.e ? "|" : "") + i.tE)), a.i && (a.iR = t(a.i)), null == a.r && (a.r = 1), a.c || (a.c = []), a.c = Array.prototype.concat.apply([], a.c.map(function(e) {
          return l("self" === e ? a : e)
        })), a.c.forEach(function(e) {
          r(e, a)
        }), a.starts && r(a.starts, i);
        var c = a.c.map(function(e) {
          return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
        }).concat([a.tE, a.i]).map(n).filter(Boolean);
        a.t = c.length ? t(c.join("|"), !0) : {
          exec: function() {
            return null
          }
        }
      }
    }
    r(e)
  }

  function f(e, t, a, i) {
    function o(e, n) {
      var t, a;
      for (t = 0, a = n.c.length; a > t; t++)
        if (r(n.c[t].bR, e)) return n.c[t]
    }

    function u(e, n) {
      if (r(e.eR, n)) {
        for (; e.endsParent && e.parent;) e = e.parent;
        return e
      }
      return e.eW ? u(e.parent, n) : void 0
    }

    function c(e, n) {
      return !a && r(n.iR, e)
    }

    function l(e, n) {
      var t = N.cI ? n[0].toLowerCase() : n[0];
      return e.k.hasOwnProperty(t) && e.k[t]
    }

    function p(e, n, t, r) {
      var a = r ? "" : I.classPrefix,
        i = '<span class="' + a,
        o = t ? "" : C;
      return i += e + '">', i + n + o
    }

    function h() {
      var e, t, r, a;
      if (!E.k) return n(k);
      for (a = "", t = 0, E.lR.lastIndex = 0, r = E.lR.exec(k); r;) a += n(k.substring(t, r.index)), e = l(E, r), e ? (B += e[1], a += p(e[0], n(r[0]))) : a += n(r[0]), t = E.lR.lastIndex, r = E.lR.exec(k);
      return a + n(k.substr(t))
    }

    function d() {
      var e = "string" == typeof E.sL;
      if (e && !y[E.sL]) return n(k);
      var t = e ? f(E.sL, k, !0, x[E.sL]) : g(k, E.sL.length ? E.sL : void 0);
      return E.r > 0 && (B += t.r), e && (x[E.sL] = t.top), p(t.language, t.value, !1, !0)
    }

    function b() {
      L += null != E.sL ? d() : h(), k = ""
    }

    function v(e) {
      L += e.cN ? p(e.cN, "", !0) : "", E = Object.create(e, {
        parent: {
          value: E
        }
      })
    }

    function m(e, n) {
      if (k += e, null == n) return b(), 0;
      var t = o(n, E);
      if (t) return t.skip ? k += n : (t.eB && (k += n), b(), t.rB || t.eB || (k = n)), v(t, n), t.rB ? 0 : n.length;
      var r = u(E, n);
      if (r) {
        var a = E;
        a.skip ? k += n : (a.rE || a.eE || (k += n), b(), a.eE && (k = n));
        do E.cN && (L += C), E.skip || (B += E.r), E = E.parent; while (E !== r.parent);
        return r.starts && v(r.starts, ""), a.rE ? 0 : n.length
      }
      if (c(n, E)) throw new Error('Illegal lexeme "' + n + '" for mode "' + (E.cN || "<unnamed>") + '"');
      return k += n, n.length || 1
    }
    var N = w(e);
    if (!N) throw new Error('Unknown language: "' + e + '"');
    s(N);
    var R, E = i || N,
      x = {},
      L = "";
    for (R = E; R !== N; R = R.parent) R.cN && (L = p(R.cN, "", !0) + L);
    var k = "",
      B = 0;
    try {
      for (var M, j, O = 0;;) {
        if (E.t.lastIndex = O, M = E.t.exec(t), !M) break;
        j = m(t.substring(O, M.index), M[0]), O = M.index + j
      }
      for (m(t.substr(O)), R = E; R.parent; R = R.parent) R.cN && (L += C);
      return {
        r: B,
        value: L,
        language: e,
        top: E
      }
    } catch (T) {
      if (T.message && -1 !== T.message.indexOf("Illegal")) return {
        r: 0,
        value: n(t)
      };
      throw T
    }
  }

  function g(e, t) {
    t = t || I.languages || x(y);
    var r = {
        r: 0,
        value: n(e)
      },
      a = r;
    return t.filter(w).forEach(function(n) {
      var t = f(n, e, !1);
      t.language = n, t.r > a.r && (a = t), t.r > r.r && (a = r, r = t)
    }), a.language && (r.second_best = a), r
  }

  function p(e) {
    return I.tabReplace || I.useBR ? e.replace(M, function(e, n) {
      return I.useBR && "\n" === e ? "<br>" : I.tabReplace ? n.replace(/\t/g, I.tabReplace) : ""
    }) : e
  }

  function h(e, n, t) {
    var r = n ? L[n] : t,
      a = [e.trim()];
    return e.match(/\bhljs\b/) || a.push("hljs"), -1 === e.indexOf(r) && a.push(r), a.join(" ").trim()
  }

  function d(e) {
    var n, t, r, o, l, s = i(e);
    a(s) || (I.useBR ? (n = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), n.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : n = e, l = n.textContent, r = s ? f(s, l, !0) : g(l), t = u(n), t.length && (o = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), o.innerHTML = r.value, r.value = c(t, u(o), l)), r.value = p(r.value), e.innerHTML = r.value, e.className = h(e.className, s, r.language), e.result = {
      language: r.language,
      re: r.r
    }, r.second_best && (e.second_best = {
      language: r.second_best.language,
      re: r.second_best.r
    }))
  }

  function b(e) {
    I = o(I, e)
  }

  function v() {
    if (!v.called) {
      v.called = !0;
      var e = document.querySelectorAll("pre code");
      E.forEach.call(e, d)
    }
  }

  function m() {
    addEventListener("DOMContentLoaded", v, !1), addEventListener("load", v, !1)
  }

  function N(n, t) {
    var r = y[n] = t(e);
    r.aliases && r.aliases.forEach(function(e) {
      L[e] = n
    })
  }

  function R() {
    return x(y)
  }

  function w(e) {
    return e = (e || "").toLowerCase(), y[e] || y[L[e]]
  }
  var E = [],
    x = Object.keys,
    y = {},
    L = {},
    k = /^(no-?highlight|plain|text)$/i,
    B = /\blang(?:uage)?-([\w-]+)\b/i,
    M = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
    C = "</span>",
    I = {
      classPrefix: "hljs-",
      tabReplace: null,
      useBR: !1,
      languages: void 0
    };
  return e.highlight = f, e.highlightAuto = g, e.fixMarkup = p, e.highlightBlock = d, e.configure = b, e.initHighlighting = v, e.initHighlightingOnLoad = m, e.registerLanguage = N, e.listLanguages = R, e.getLanguage = w, e.inherit = o, e.IR = "[a-zA-Z]\\w*", e.UIR = "[a-zA-Z_]\\w*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = {
    b: "\\\\[\\s\\S]",
    r: 0
  }, e.ASM = {
    cN: "string",
    b: "'",
    e: "'",
    i: "\\n",
    c: [e.BE]
  }, e.QSM = {
    cN: "string",
    b: '"',
    e: '"',
    i: "\\n",
    c: [e.BE]
  }, e.PWM = {
    b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, e.C = function(n, t, r) {
    var a = e.inherit({
      cN: "comment",
      b: n,
      e: t,
      c: []
    }, r || {});
    return a.c.push(e.PWM), a.c.push({
      cN: "doctag",
      b: "(?:TODO|FIXME|NOTE|BUG|XXX):",
      r: 0
    }), a
  }, e.CLCM = e.C("//", "$"), e.CBCM = e.C("/\\*", "\\*/"), e.HCM = e.C("#", "$"), e.NM = {
    cN: "number",
    b: e.NR,
    r: 0
  }, e.CNM = {
    cN: "number",
    b: e.CNR,
    r: 0
  }, e.BNM = {
    cN: "number",
    b: e.BNR,
    r: 0
  }, e.CSSNM = {
    cN: "number",
    b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    r: 0
  }, e.RM = {
    cN: "regexp",
    b: /\//,
    e: /\/[gimuy]*/,
    i: /\n/,
    c: [e.BE, {
      b: /\[/,
      e: /\]/,
      r: 0,
      c: [e.BE]
    }]
  }, e.TM = {
    cN: "title",
    b: e.IR,
    r: 0
  }, e.UTM = {
    cN: "title",
    b: e.UIR,
    r: 0
  }, e.METHOD_GUARD = {
    b: "\\.\\s*" + e.UIR,
    r: 0
  }, e
});
hljs.registerLanguage("http", function(e) {
  var t = "HTTP/[0-9\\.]+";
  return {
    aliases: ["https"],
    i: "\\S",
    c: [{
      b: "^" + t,
      e: "$",
      c: [{
        cN: "number",
        b: "\\b\\d{3}\\b"
      }]
    }, {
      b: "^[A-Z]+ (.*?) " + t + "$",
      rB: !0,
      e: "$",
      c: [{
        cN: "string",
        b: " ",
        e: " ",
        eB: !0,
        eE: !0
      }, {
        b: t
      }, {
        cN: "keyword",
        b: "[A-Z]+"
      }]
    }, {
      cN: "attribute",
      b: "^\\w",
      e: ": ",
      eE: !0,
      i: "\\n|\\s|=",
      starts: {
        e: "$",
        r: 0
      }
    }, {
      b: "\\n\\n",
      starts: {
        sL: [],
        eW: !0
      }
    }]
  }
});
hljs.registerLanguage("php", function(e) {
  var c = {
      b: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"
    },
    i = {
      cN: "meta",
      b: /<\?(php)?|\?>/
    },
    t = {
      cN: "string",
      c: [e.BE, i],
      v: [{
        b: 'b"',
        e: '"'
      }, {
        b: "b'",
        e: "'"
      }, e.inherit(e.ASM, {
        i: null
      }), e.inherit(e.QSM, {
        i: null
      })]
    },
    a = {
      v: [e.BNM, e.CNM]
    };
  return {
    aliases: ["php3", "php4", "php5", "php6"],
    cI: !0,
    k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
    c: [e.HCM, e.C("//", "$", {
      c: [i]
    }), e.C("/\\*", "\\*/", {
      c: [{
        cN: "doctag",
        b: "@[A-Za-z]+"
      }]
    }), e.C("__halt_compiler.+?;", !1, {
      eW: !0,
      k: "__halt_compiler",
      l: e.UIR
    }), {
      cN: "string",
      b: /<<<['"]?\w+['"]?$/,
      e: /^\w+;?$/,
      c: [e.BE, {
        cN: "subst",
        v: [{
          b: /\$\w+/
        }, {
          b: /\{\$/,
          e: /\}/
        }]
      }]
    }, i, {
      cN: "keyword",
      b: /\$this\b/
    }, c, {
      b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
    }, {
      cN: "function",
      bK: "function",
      e: /[;{]/,
      eE: !0,
      i: "\\$|\\[|%",
      c: [e.UTM, {
        cN: "params",
        b: "\\(",
        e: "\\)",
        c: ["self", c, e.CBCM, t, a]
      }]
    }, {
      cN: "class",
      bK: "class interface",
      e: "{",
      eE: !0,
      i: /[:\(\$"]/,
      c: [{
        bK: "extends implements"
      }, e.UTM]
    }, {
      bK: "namespace",
      e: ";",
      i: /[\.']/,
      c: [e.UTM]
    }, {
      bK: "use",
      e: ";",
      c: [e.UTM]
    }, {
      b: "=>"
    }, t, a]
  }
});
hljs.registerLanguage("scss", function(e) {
  var t = "[a-zA-Z-][a-zA-Z0-9_-]*",
    i = {
      cN: "variable",
      b: "(\\$" + t + ")\\b"
    },
    r = {
      cN: "number",
      b: "#[0-9A-Fa-f]+"
    };
  ({
    cN: "attribute",
    b: "[A-Z\\_\\.\\-]+",
    e: ":",
    eE: !0,
    i: "[^\\s]",
    starts: {
      eW: !0,
      eE: !0,
      c: [r, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
        cN: "meta",
        b: "!important"
      }]
    }
  });
  return {
    cI: !0,
    i: "[=/|']",
    c: [e.CLCM, e.CBCM, {
      cN: "selector-id",
      b: "\\#[A-Za-z0-9_-]+",
      r: 0
    }, {
      cN: "selector-class",
      b: "\\.[A-Za-z0-9_-]+",
      r: 0
    }, {
      cN: "selector-attr",
      b: "\\[",
      e: "\\]",
      i: "$"
    }, {
      cN: "selector-tag",
      b: "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
      r: 0
    }, {
      b: ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"
    }, {
      b: "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"
    }, i, {
      cN: "attribute",
      b: "\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
      i: "[^\\s]"
    }, {
      b: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
    }, {
      b: ":",
      e: ";",
      c: [i, r, e.CSSNM, e.QSM, e.ASM, {
        cN: "meta",
        b: "!important"
      }]
    }, {
      b: "@",
      e: "[{;]",
      k: "mixin include extend for if else each while charset import debug media page content font-face namespace warn",
      c: [i, e.QSM, e.ASM, r, e.CSSNM, {
        b: "\\s[A-Za-z0-9_.-]+",
        r: 0
      }]
    }]
  }
});
hljs.registerLanguage("ruby", function(e) {
  var b = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
    r = {
      keyword: "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
      literal: "true false nil"
    },
    c = {
      cN: "doctag",
      b: "@[A-Za-z]+"
    },
    a = {
      b: "#<",
      e: ">"
    },
    s = [e.C("#", "$", {
      c: [c]
    }), e.C("^\\=begin", "^\\=end", {
      c: [c],
      r: 10
    }), e.C("^__END__", "\\n$")],
    n = {
      cN: "subst",
      b: "#\\{",
      e: "}",
      k: r
    },
    t = {
      cN: "string",
      c: [e.BE, n],
      v: [{
        b: /'/,
        e: /'/
      }, {
        b: /"/,
        e: /"/
      }, {
        b: /`/,
        e: /`/
      }, {
        b: "%[qQwWx]?\\(",
        e: "\\)"
      }, {
        b: "%[qQwWx]?\\[",
        e: "\\]"
      }, {
        b: "%[qQwWx]?{",
        e: "}"
      }, {
        b: "%[qQwWx]?<",
        e: ">"
      }, {
        b: "%[qQwWx]?/",
        e: "/"
      }, {
        b: "%[qQwWx]?%",
        e: "%"
      }, {
        b: "%[qQwWx]?-",
        e: "-"
      }, {
        b: "%[qQwWx]?\\|",
        e: "\\|"
      }, {
        b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
      }, {
        b: /<<(-?)\w+$/,
        e: /^\s*\w+$/
      }]
    },
    i = {
      cN: "params",
      b: "\\(",
      e: "\\)",
      endsParent: !0,
      k: r
    },
    d = [t, a, {
      cN: "class",
      bK: "class module",
      e: "$|;",
      i: /=/,
      c: [e.inherit(e.TM, {
        b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
      }), {
        b: "<\\s*",
        c: [{
          b: "(" + e.IR + "::)?" + e.IR
        }]
      }].concat(s)
    }, {
      cN: "function",
      bK: "def",
      e: "$|;",
      c: [e.inherit(e.TM, {
        b: b
      }), i].concat(s)
    }, {
      b: e.IR + "::"
    }, {
      cN: "symbol",
      b: e.UIR + "(\\!|\\?)?:",
      r: 0
    }, {
      cN: "symbol",
      b: ":(?!\\s)",
      c: [t, {
        b: b
      }],
      r: 0
    }, {
      cN: "number",
      b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
      r: 0
    }, {
      b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
    }, {
      cN: "params",
      b: /\|/,
      e: /\|/,
      k: r
    }, {
      b: "(" + e.RSR + "|unless)\\s*",
      k: "unless",
      c: [a, {
        cN: "regexp",
        c: [e.BE, n],
        i: /\n/,
        v: [{
          b: "/",
          e: "/[a-z]*"
        }, {
          b: "%r{",
          e: "}[a-z]*"
        }, {
          b: "%r\\(",
          e: "\\)[a-z]*"
        }, {
          b: "%r!",
          e: "![a-z]*"
        }, {
          b: "%r\\[",
          e: "\\][a-z]*"
        }]
      }].concat(s),
      r: 0
    }].concat(s);
  n.c = d, i.c = d;
  var l = "[>?]>",
    o = "[\\w#]+\\(\\w+\\):\\d+:\\d+>",
    u = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",
    w = [{
      b: /^\s*=>/,
      starts: {
        e: "$",
        c: d
      }
    }, {
      cN: "meta",
      b: "^(" + l + "|" + o + "|" + u + ")",
      starts: {
        e: "$",
        c: d
      }
    }];
  return {
    aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
    k: r,
    i: /\/\*/,
    c: s.concat(w).concat(d)
  }
});
hljs.registerLanguage("coffeescript", function(e) {
  var c = {
      keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super yield import export from as default await then unless until loop of by when and or is isnt not",
      literal: "true false null undefined yes no on off",
      built_in: "npm require console print module global window document"
    },
    n = "[A-Za-z$_][0-9A-Za-z$_]*",
    r = {
      cN: "subst",
      b: /#\{/,
      e: /}/,
      k: c
    },
    i = [e.BNM, e.inherit(e.CNM, {
      starts: {
        e: "(\\s*/)?",
        r: 0
      }
    }), {
      cN: "string",
      v: [{
        b: /'''/,
        e: /'''/,
        c: [e.BE]
      }, {
        b: /'/,
        e: /'/,
        c: [e.BE]
      }, {
        b: /"""/,
        e: /"""/,
        c: [e.BE, r]
      }, {
        b: /"/,
        e: /"/,
        c: [e.BE, r]
      }]
    }, {
      cN: "regexp",
      v: [{
        b: "///",
        e: "///",
        c: [r, e.HCM]
      }, {
        b: "//[gim]*",
        r: 0
      }, {
        b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
      }]
    }, {
      b: "@" + n
    }, {
      sL: "javascript",
      eB: !0,
      eE: !0,
      v: [{
        b: "```",
        e: "```"
      }, {
        b: "`",
        e: "`"
      }]
    }];
  r.c = i;
  var s = e.inherit(e.TM, {
      b: n
    }),
    t = "(\\(.*\\))?\\s*\\B[-=]>",
    o = {
      cN: "params",
      b: "\\([^\\(]",
      rB: !0,
      c: [{
        b: /\(/,
        e: /\)/,
        k: c,
        c: ["self"].concat(i)
      }]
    };
  return {
    aliases: ["coffee", "cson", "iced"],
    k: c,
    i: /\/\*/,
    c: i.concat([e.C("###", "###"), e.HCM, {
      cN: "function",
      b: "^\\s*" + n + "\\s*=\\s*" + t,
      e: "[-=]>",
      rB: !0,
      c: [s, o]
    }, {
      b: /[:\(,=]\s*/,
      r: 0,
      c: [{
        cN: "function",
        b: t,
        e: "[-=]>",
        rB: !0,
        c: [o]
      }]
    }, {
      cN: "class",
      bK: "class",
      e: "$",
      i: /[:="\[\]]/,
      c: [{
        bK: "extends",
        eW: !0,
        i: /[:="\[\]]/,
        c: [s]
      }, s]
    }, {
      b: n + ":",
      e: ":",
      rB: !0,
      rE: !0,
      r: 0
    }])
  }
});
hljs.registerLanguage("javascript", function(e) {
  var r = "[A-Za-z$_][0-9A-Za-z$_]*",
    t = {
      keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
      literal: "true false null undefined NaN Infinity",
      built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
    },
    a = {
      cN: "number",
      v: [{
        b: "\\b(0[bB][01]+)"
      }, {
        b: "\\b(0[oO][0-7]+)"
      }, {
        b: e.CNR
      }],
      r: 0
    },
    n = {
      cN: "subst",
      b: "\\$\\{",
      e: "\\}",
      k: t,
      c: []
    },
    c = {
      cN: "string",
      b: "`",
      e: "`",
      c: [e.BE, n]
    };
  n.c = [e.ASM, e.QSM, c, a, e.RM];
  var s = n.c.concat([e.CBCM, e.CLCM]);
  return {
    aliases: ["js", "jsx"],
    k: t,
    c: [{
      cN: "meta",
      r: 10,
      b: /^\s*['"]use (strict|asm)['"]/
    }, {
      cN: "meta",
      b: /^#!/,
      e: /$/
    }, e.ASM, e.QSM, c, e.CLCM, e.CBCM, a, {
      b: /[{,]\s*/,
      r: 0,
      c: [{
        b: r + "\\s*:",
        rB: !0,
        r: 0,
        c: [{
          cN: "attr",
          b: r,
          r: 0
        }]
      }]
    }, {
      b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
      k: "return throw case",
      c: [e.CLCM, e.CBCM, e.RM, {
        cN: "function",
        b: "(\\(.*?\\)|" + r + ")\\s*=>",
        rB: !0,
        e: "\\s*=>",
        c: [{
          cN: "params",
          v: [{
            b: r
          }, {
            b: /\(\s*\)/
          }, {
            b: /\(/,
            e: /\)/,
            eB: !0,
            eE: !0,
            k: t,
            c: s
          }]
        }]
      }, {
        b: /</,
        e: /(\/\w+|\w+\/)>/,
        sL: "xml",
        c: [{
          b: /<\w+\s*\/>/,
          skip: !0
        }, {
          b: /<\w+/,
          e: /(\/\w+|\w+\/)>/,
          skip: !0,
          c: [{
            b: /<\w+\s*\/>/,
            skip: !0
          }, "self"]
        }]
      }],
      r: 0
    }, {
      cN: "function",
      bK: "function",
      e: /\{/,
      eE: !0,
      c: [e.inherit(e.TM, {
        b: r
      }), {
        cN: "params",
        b: /\(/,
        e: /\)/,
        eB: !0,
        eE: !0,
        c: s
      }],
      i: /\[|%/
    }, {
      b: /\$[(.]/
    }, e.METHOD_GUARD, {
      cN: "class",
      bK: "class",
      e: /[{;=]/,
      eE: !0,
      i: /[:"\[\]]/,
      c: [{
        bK: "extends"
      }, e.UTM]
    }, {
      bK: "constructor",
      e: /\{/,
      eE: !0
    }],
    i: /#(?!!)/
  }
});
hljs.registerLanguage("python", function(e) {
  var r = {
      keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",
      built_in: "Ellipsis NotImplemented"
    },
    b = {
      cN: "meta",
      b: /^(>>>|\.\.\.) /
    },
    c = {
      cN: "subst",
      b: /\{/,
      e: /\}/,
      k: r,
      i: /#/
    },
    a = {
      cN: "string",
      c: [e.BE],
      v: [{
        b: /(u|b)?r?'''/,
        e: /'''/,
        c: [b],
        r: 10
      }, {
        b: /(u|b)?r?"""/,
        e: /"""/,
        c: [b],
        r: 10
      }, {
        b: /(fr|rf|f)'''/,
        e: /'''/,
        c: [b, c]
      }, {
        b: /(fr|rf|f)"""/,
        e: /"""/,
        c: [b, c]
      }, {
        b: /(u|r|ur)'/,
        e: /'/,
        r: 10
      }, {
        b: /(u|r|ur)"/,
        e: /"/,
        r: 10
      }, {
        b: /(b|br)'/,
        e: /'/
      }, {
        b: /(b|br)"/,
        e: /"/
      }, {
        b: /(fr|rf|f)'/,
        e: /'/,
        c: [c]
      }, {
        b: /(fr|rf|f)"/,
        e: /"/,
        c: [c]
      }, e.ASM, e.QSM]
    },
    s = {
      cN: "number",
      r: 0,
      v: [{
        b: e.BNR + "[lLjJ]?"
      }, {
        b: "\\b(0o[0-7]+)[lLjJ]?"
      }, {
        b: e.CNR + "[lLjJ]?"
      }]
    },
    i = {
      cN: "params",
      b: /\(/,
      e: /\)/,
      c: ["self", b, s, a]
    };
  return c.c = [a, s, b], {
    aliases: ["py", "gyp"],
    k: r,
    i: /(<\/|->|\?)|=>/,
    c: [b, s, a, e.HCM, {
      v: [{
        cN: "function",
        bK: "def"
      }, {
        cN: "class",
        bK: "class"
      }],
      e: /:/,
      i: /[${=;\n,]/,
      c: [e.UTM, i, {
        b: /->/,
        eW: !0,
        k: "None"
      }]
    }, {
      cN: "meta",
      b: /^[\t ]*@/,
      e: /$/
    }, {
      b: /\b(print|exec)\(/
    }]
  }
});
hljs.registerLanguage("xml", function(s) {
  var e = "[A-Za-z0-9\\._:-]+",
    t = {
      eW: !0,
      i: /</,
      r: 0,
      c: [{
        cN: "attr",
        b: e,
        r: 0
      }, {
        b: /=\s*/,
        r: 0,
        c: [{
          cN: "string",
          endsParent: !0,
          v: [{
            b: /"/,
            e: /"/
          }, {
            b: /'/,
            e: /'/
          }, {
            b: /[^\s"'=<>`]+/
          }]
        }]
      }]
    };
  return {
    aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"],
    cI: !0,
    c: [{
      cN: "meta",
      b: "<!DOCTYPE",
      e: ">",
      r: 10,
      c: [{
        b: "\\[",
        e: "\\]"
      }]
    }, s.C("<!--", "-->", {
      r: 10
    }), {
      b: "<\\!\\[CDATA\\[",
      e: "\\]\\]>",
      r: 10
    }, {
      b: /<\?(php)?/,
      e: /\?>/,
      sL: "php",
      c: [{
        b: "/\\*",
        e: "\\*/",
        skip: !0
      }]
    }, {
      cN: "tag",
      b: "<style(?=\\s|>|$)",
      e: ">",
      k: {
        name: "style"
      },
      c: [t],
      starts: {
        e: "</style>",
        rE: !0,
        sL: ["css", "xml"]
      }
    }, {
      cN: "tag",
      b: "<script(?=\\s|>|$)",
      e: ">",
      k: {
        name: "script"
      },
      c: [t],
      starts: {
        e: "</script>",
        rE: !0,
        sL: ["actionscript", "javascript", "handlebars", "xml"]
      }
    }, {
      cN: "meta",
      v: [{
        b: /<\?xml/,
        e: /\?>/,
        r: 10
      }, {
        b: /<\?\w+/,
        e: /\?>/
      }]
    }, {
      cN: "tag",
      b: "</?",
      e: "/?>",
      c: [{
        cN: "name",
        b: /[^\/><\s]+/,
        r: 0
      }, t]
    }]
  }
});
hljs.registerLanguage("markdown", function(e) {
  return {
    aliases: ["md", "mkdown", "mkd"],
    c: [{
      cN: "section",
      v: [{
        b: "^#{1,6}",
        e: "$"
      }, {
        b: "^.+?\\n[=-]{2,}$"
      }]
    }, {
      b: "<",
      e: ">",
      sL: "xml",
      r: 0
    }, {
      cN: "bullet",
      b: "^([*+-]|(\\d+\\.))\\s+"
    }, {
      cN: "strong",
      b: "[*_]{2}.+?[*_]{2}"
    }, {
      cN: "emphasis",
      v: [{
        b: "\\*.+?\\*"
      }, {
        b: "_.+?_",
        r: 0
      }]
    }, {
      cN: "quote",
      b: "^>\\s+",
      e: "$"
    }, {
      cN: "code",
      v: [{
        b: "^```w*s*$",
        e: "^```s*$"
      }, {
        b: "`.+?`"
      }, {
        b: "^( {4}|	)",
        e: "$",
        r: 0
      }]
    }, {
      b: "^[-\\*]{3,}",
      e: "$"
    }, {
      b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
      rB: !0,
      c: [{
        cN: "string",
        b: "\\[",
        e: "\\]",
        eB: !0,
        rE: !0,
        r: 0
      }, {
        cN: "link",
        b: "\\]\\(",
        e: "\\)",
        eB: !0,
        eE: !0
      }, {
        cN: "symbol",
        b: "\\]\\[",
        e: "\\]",
        eB: !0,
        eE: !0
      }],
      r: 10
    }, {
      b: /^\[[^\n]+\]:/,
      rB: !0,
      c: [{
        cN: "symbol",
        b: /\[/,
        e: /\]/,
        eB: !0,
        eE: !0
      }, {
        cN: "link",
        b: /:\s*/,
        e: /$/,
        eB: !0
      }]
    }]
  }
});
hljs.registerLanguage("sql", function(e) {
  var t = e.C("--", "$");
  return {
    cI: !0,
    i: /[<>{}*#]/,
    c: [{
      bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment",
      e: /;/,
      eW: !0,
      l: /[\w\.]+/,
      k: {
        keyword: "abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
        literal: "true false null",
        built_in: "array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void"
      },
      c: [{
        cN: "string",
        b: "'",
        e: "'",
        c: [e.BE, {
          b: "''"
        }]
      }, {
        cN: "string",
        b: '"',
        e: '"',
        c: [e.BE, {
          b: '""'
        }]
      }, {
        cN: "string",
        b: "`",
        e: "`",
        c: [e.BE]
      }, e.CNM, e.CBCM, t]
    }, e.CBCM, t]
  }
});
hljs.registerLanguage("css", function(e) {
  var c = "[a-zA-Z-][a-zA-Z0-9_-]*",
    t = {
      b: /[A-Z\_\.\-]+\s*:/,
      rB: !0,
      e: ";",
      eW: !0,
      c: [{
        cN: "attribute",
        b: /\S/,
        e: ":",
        eE: !0,
        starts: {
          eW: !0,
          eE: !0,
          c: [{
            b: /[\w-]+\(/,
            rB: !0,
            c: [{
              cN: "built_in",
              b: /[\w-]+/
            }, {
              b: /\(/,
              e: /\)/,
              c: [e.ASM, e.QSM]
            }]
          }, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
            cN: "number",
            b: "#[0-9A-Fa-f]+"
          }, {
            cN: "meta",
            b: "!important"
          }]
        }
      }]
    };
  return {
    cI: !0,
    i: /[=\/|'\$]/,
    c: [e.CBCM, {
      cN: "selector-id",
      b: /#[A-Za-z0-9_-]+/
    }, {
      cN: "selector-class",
      b: /\.[A-Za-z0-9_-]+/
    }, {
      cN: "selector-attr",
      b: /\[/,
      e: /\]/,
      i: "$"
    }, {
      cN: "selector-pseudo",
      b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
    }, {
      b: "@(font-face|page)",
      l: "[a-z-]+",
      k: "font-face page"
    }, {
      b: "@",
      e: "[{;]",
      i: /:/,
      c: [{
        cN: "keyword",
        b: /\w+/
      }, {
        b: /\s/,
        eW: !0,
        eE: !0,
        r: 0,
        c: [e.ASM, e.QSM, e.CSSNM]
      }]
    }, {
      cN: "selector-tag",
      b: c,
      r: 0
    }, {
      b: "{",
      e: "}",
      i: /\S/,
      c: [e.CBCM, t]
    }]
  }
});
hljs.registerLanguage("apache", function(e) {
  var r = {
    cN: "number",
    b: "[\\$%]\\d+"
  };
  return {
    aliases: ["apacheconf"],
    cI: !0,
    c: [e.HCM, {
      cN: "section",
      b: "</?",
      e: ">"
    }, {
      cN: "attribute",
      b: /\w+/,
      r: 0,
      k: {
        nomarkup: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
      },
      starts: {
        e: /$/,
        r: 0,
        k: {
          literal: "on off all"
        },
        c: [{
          cN: "meta",
          b: "\\s\\[",
          e: "\\]$"
        }, {
          cN: "variable",
          b: "[\\$%]\\{",
          e: "\\}",
          c: ["self", r]
        }, r, e.QSM]
      }
    }],
    i: /\S/
  }
});
hljs.registerLanguage("json", function(e) {
  var i = {
      literal: "true false null"
    },
    n = [e.QSM, e.CNM],
    r = {
      e: ",",
      eW: !0,
      eE: !0,
      c: n,
      k: i
    },
    t = {
      b: "{",
      e: "}",
      c: [{
        cN: "attr",
        b: /"/,
        e: /"/,
        c: [e.BE],
        i: "\\n"
      }, e.inherit(r, {
        b: /:/
      })],
      i: "\\S"
    },
    c = {
      b: "\\[",
      e: "\\]",
      c: [e.inherit(r)],
      i: "\\S"
    };
  return n.splice(n.length, 0, t, c), {
    c: n,
    k: i,
    i: "\\S"
  }
});
'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var body = document.body;
  var wpAdminBar = document.getElementById('wpadminbar');
  var header = document.getElementById('header');
  var headerMenu = document.getElementById('header-menu');
  var siteInfo = document.querySelector('#header .site-info');
  var searchToggle = document.querySelector('.header-inner .search-toggle');

  /*   Remove link shadows on images link
  /* -------------------------------------------------- */
  var images = document.querySelectorAll('.entry img');
  if (images) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var image = _step.value;

        var parent = image.parentNode;
        if (parent.tagName === 'A') {
          parent.style.boxShadow = 'none';
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  /*   Masonry responsive widgets
  /* -------------------------------------------------- */
  var sidebarInner = document.querySelector('#sidebar-s1 .sidebar-inner');
  var widgets = document.querySelectorAll('.widget');
  var masonryHandler = function masonryHandler() {
    if (window.matchMedia('(max-width: 980px) and (min-width: 641px)').matches || document.body.classList.contains('bottom-sidebar-s1')) {
      /* eslint-disable-next-line no-unused-vars, no-undef */
      var msnry = new Masonry(sidebarInner, {
        itemSelector: '.widget',
        percentPosition: !0,
        isAnimated: !0
      });
      if (widgets) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = widgets[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var widget = _step2.value;

            widget.style.position = 'absolute';
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    } else {
      if (widgets) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = widgets[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _widget = _step3.value;

            _widget.style.position = '';
            _widget.style.top = '';
            _widget.style.left = '';
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    }
  };
  window.addEventListener('load', masonryHandler);
  window.addEventListener('resize', masonryHandler);

  /*   Back To Top
  /* -------------------------------------------------- */
  var backToTop = document.getElementById('back-to-top');

  var showBackToTop = function showBackToTop() {
    if (window.pageYOffset > 100) {
      backToTop.style.display = 'block';
      backToTop.classList.add('is-shown');
    } else {
      backToTop.style.display = 'none';
      backToTop.classList.remove('is-shown');
      setTimeout(function () {
        backToTop.classList.remove('clicked');
      }, 400);
    }
  };
  window.addEventListener('scroll', showBackToTop);

  var scrollToTop = function scrollToTop(event) {
    event.preventDefault();
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
    backToTop.classList.add('clicked');
  };
  backToTop.addEventListener('click', scrollToTop);

  var stickBackToTopOnFooter = function stickBackToTopOnFooter() {
    var scrollHeight = body.scrollHeight;
    var scrollPosition = window.pageYOffset + window.innerHeight;
    var footerHeight = document.getElementById('footer').clientHeight;
    if (scrollHeight - scrollPosition < footerHeight) {
      backToTop.style.bottom = footerHeight + 'px';
      backToTop.classList.add('abs');
    } else {
      backToTop.style.bottom = '';
      backToTop.classList.remove('abs');
    }
  };
  addEventListener('scroll', stickBackToTopOnFooter);

  /*   Smooth Scroll
  /* -------------------------------------------------- */
  var headerInner = document.querySelector('#header .header-inner');
  var links = document.querySelectorAll('a[href*="#"]:not(.noscroll)');

  var inPageLinkHandler = function inPageLinkHandler(event) {
    event.preventDefault();
    var href = event.target.getAttribute('href'); // Get href attr of the link
    var hrefPageUrl = href.split('#')[0];
    var currentUrl = location.href.split('#')[0];

    if (hrefPageUrl === currentUrl || hrefPageUrl === '') {
      // If the link goes on the same page, run smooth scroll
      href = href.split('#').pop();
      var target = void 0;
      if (href === '#' || href === '') {
        target = document.documentElement;
      } else {
        target = document.getElementById(href);
      }
      var rect = target.getBoundingClientRect();
      var targetPosition = window.pageYOffset + rect.top;
      if (window.matchMedia('(min-width: 767px)').matches) {
        if (body.classList.contains('admin-bar') && window.getComputedStyle(wpAdminBar).getPropertyValue('position') === 'fixed') {
          // When the admin bar is shown.
          targetPosition -= wpAdminBar.clientHeight;
        }
        if (body.classList.contains('sticky-header') && body.classList.contains('header-row')) {
          // When the header is sticky.
          targetPosition -= headerInner.clientHeight;
        } else if (body.classList.contains('sticky-header') && body.classList.contains('header-column') && body.classList.contains('header-menu-enabled')) {
          targetPosition -= headerMenu.clientHeight;
        }
      }
      window.scroll({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = links[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var link = _step4.value;

      link.addEventListener('click', inPageLinkHandler);
    }

    /*   Sticky Header
    /* -------------------------------------------------- */
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  if (body.classList.contains('sticky-header')) {
    var stickyHeaderHandler = function stickyHeaderHandler() {
      var siteInfoHgt = siteInfo.offsetHeight;
      var scrollTop = window.pageYOffset;

      // Reset values on devices smaller than 768px.
      if (!window.matchMedia('(min-width: 767px)').matches) {
        header.classList.remove('sticky');
        body.style.paddingTop = '';
        header.style.top = '';
        searchToggle.style.top = '';
        searchToggle.style.height = '';
      }

      // When header row is set
      if (body.classList.contains('header-row')) {
        // Do nothing on devices smaller than 768px.
        if (!window.matchMedia('(min-width: 767px)').matches) {
          return;
        }

        if (scrollTop > 0) {
          // On scroll
          header.classList.add('sticky');
          body.style.paddingTop = header.clientHeight + 'px';
        } else {
          // Not on scroll
          header.classList.remove('sticky');
          body.style.paddingTop = '';
        }
      }

      // When header column is set
      else if (body.classList.contains('header-column')) {
          // Abort on devices smaller than 768px.
          if (!window.matchMedia('(min-width: 767px)').matches) {
            return;
          }

          // Adjust search toggle behavior for the sticky header
          if (body.classList.contains('header-menu-enabled')) {
            if (scrollTop > 0) {
              // On scroll
              var headerMenuHgt = headerMenu.clientHeight;
              searchToggle.style.top = siteInfoHgt + 'px';
              searchToggle.style.height = headerMenuHgt + 'px';
            } else {
              // Not on scroll
              searchToggle.style.top = scrollTop;
              searchToggle.style.height = '';
            }
          }

          // Sticky header
          if (scrollTop > siteInfoHgt) {
            // On scroll
            header.classList.add('sticky');
            body.style.paddingTop = header.clientHeight + 'px';
            if (body.classList.contains('admin-bar')) {
              // When user is logged in
              header.style.top = -siteInfoHgt + wpAdminBar.clientHeight + 'px';
            } else {
              header.style.top = -siteInfoHgt + 'px';
            }
          } else {
            // Not on scroll - Remove sticky header
            header.classList.remove('sticky');
            body.style.paddingTop = '';
            header.style.top = '';
          }
        }
    };
    stickyHeaderHandler();
    window.addEventListener('resize', stickyHeaderHandler);
    window.addEventListener('scroll', stickyHeaderHandler);
  }

  /*   Fix : Padding of the menu on mobile devices
  /* -------------------------------------------------- */
  var getMenuPaddingTop = function getMenuPaddingTop() {
    var includesAdminBar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    var height = siteInfo.offsetHeight;
    if (body.classList.contains('admin-bar') && includesAdminBar) {
      height += wpAdminBar.clientHeight;
    }
    return height;
  };

  var headerNav = document.getElementById('header-nav');

  var fixMobilePaddingOnMenu = function fixMobilePaddingOnMenu() {
    if (body.classList.contains('header-menu-enabled') && window.matchMedia('(max-width: 767px)').matches) {
      headerNav.style.paddingTop = getMenuPaddingTop() + 'px';
    } else {
      headerNav.style.paddingTop = '0';
    }
  };
  fixMobilePaddingOnMenu();
  window.addEventListener('resize', fixMobilePaddingOnMenu);

  /*   Toggle : Search Toggle
  /* -------------------------------------------------- */
  var toggleState = false;
  var closeToggle = document.querySelector('.modal-search-form .close-toggle');

  // Search toggle
  var searchToggleHandler = function searchToggleHandler() {
    toggleState = true;
    if (toggleState) {
      searchToggle.classList.add('open');
      body.classList.add('modal-search-open');
      body.classList.remove('modal-search-closed');

      if (body.classList.contains('modal-search-open')) {
        setTimeout(function () {
          document.querySelector('.modal-search-form .search-inner').focus();
        }, 290);
      }
    }
  };
  searchToggle.addEventListener('click', searchToggleHandler);

  // Close toggle
  var closeToggleHandler = function closeToggleHandler() {
    toggleState = false;
    if (!toggleState) {
      searchToggle.classList.remove('open');
      body.classList.remove('modal-search-open');
      body.classList.add('modal-search-closed');
    }
  };
  closeToggle.addEventListener('click', closeToggleHandler);

  document.onkeydown = function (event) {
    event = event || window.event;
    if (event.keyCode === 27) {
      toggleState = false;
      if (!toggleState) {
        searchToggle.classList.remove('open');
        body.classList.remove('modal-search-open');
        body.classList.add('modal-search-closed');
      }
    }
  };

  /*   Toggle : Nav Menu Toggle
  /* -------------------------------------------------- */
  var navCount = 0;
  var navToggle = document.querySelector('.nav-toggle.header-menu');

  var menuOverlay = document.createElement('div');
  menuOverlay.classList.add('menu-overlay');
  if (headerMenu) {
    headerMenu.insertBefore(menuOverlay, null);
  }

  var navToggleHandler = function navToggleHandler() {
    var top = 0;
    navCount++;
    if (navCount % 2 === 1) {
      navToggle.classList.add('open');
      body.classList.add('header-menu-closed');

      if (body.classList.contains('admin-bar')) {
        top += wpAdminBar.clientHeight;
      }
      navToggle.style.position = 'fixed';
      navToggle.style.top = top + 'px';
      navToggle.style.height = getMenuPaddingTop(false) + 'px';
    } else if (navCount % 2 === 0) {
      navToggle.classList.remove('open');
      body.classList.remove('header-menu-closed');

      navToggle.style.position = 'relative';
      navToggle.style.top = 'auto';
      navToggle.style.height = 'auto';
    }
  };
  navToggle.addEventListener('click', navToggleHandler);

  var menuOverlayHandler = function menuOverlayHandler() {
    navToggle.classList.remove('open');
    navToggle.classList.add('closed');
    body.classList.add('header-menu-closed');

    navToggle.style.position = 'relative';
    navToggle.style.top = 'auto';
    navToggle.style.height = 'auto';
  };
  menuOverlay.addEventListener('click', menuOverlayHandler);

  /*   Pagination : Underline Animate
  /* -------------------------------------------------- */
  var pageNumbers = document.querySelector('ul.page-numbers');
  var pageNumbersEls = document.querySelectorAll('ul.page-numbers li');
  var currentPageNumber = document.querySelector('ul.page-numbers .current');

  if (pageNumbers) {
    var currentParent = currentPageNumber.parentNode;
    var _actionBar = document.createElement('span');
    _actionBar.classList.add('action-bar');
    _actionBar.style.width = currentParent.offsetWidth + 'px';
    _actionBar.style.left = currentParent.offsetLeft + 'px';
    pageNumbers.insertBefore(_actionBar, null);
    currentPageNumber.style.borderBottom = 0;

    var pageNumbersElHoverHandler = function pageNumbersElHoverHandler(event) {
      _actionBar.style.width = event.target.parentNode.offsetWidth + 'px';
      _actionBar.style.left = event.target.parentNode.offsetLeft + 'px';
    };
    var pageNumbersElHoverOutHandler = function pageNumbersElHoverOutHandler() {
      _actionBar.style.width = currentParent.offsetWidth + 'px';
      _actionBar.style.left = currentParent.offsetLeft + 'px';
    };
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = pageNumbersEls[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var el = _step5.value;

        el.addEventListener('mouseover', pageNumbersElHoverHandler);
        el.addEventListener('mouseout', pageNumbersElHoverOutHandler);
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5.return) {
          _iterator5.return();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }
  }

  /*   Comments : Comment Tab
  /* -------------------------------------------------- */
  var tabmenu = document.querySelector('#comments .comment-tabmenu');
  var tabItems = document.querySelectorAll('#comments .tabitem');
  var actionBar = document.createElement('span');
  var pingList = document.getElementById('ping-list');
  var commentList = document.getElementById('comment-list');

  if (tabmenu) {
    actionBar.classList.add('action-bar');
    tabmenu.insertBefore(actionBar, null);
    actionBar.style.width = tabItems[0].clientWidth + 'px';
  }

  if (pingList) {
    pingList.style.display = 'none';
  }

  var tabItemsHandler = function tabItemsHandler(event) {
    event.preventDefault();
    var target = event.target;

    // Do nothing when clicked the item which is already active
    if (target.parentNode.classList.contains('active')) {
      return;
    }

    if (target.getAttribute('href').includes('#comment')) {
      target.parentNode.classList.add('active');
      tabItems[1].classList.remove('active');
      if (commentList) {
        commentList.classList.add('active');
        commentList.style.display = 'block';
      }
      if (pingList) {
        pingList.classList.remove('active');
        pingList.style.display = 'none';
      }
    } else if (target.getAttribute('href').includes('#ping')) {
      target.parentNode.classList.add('active');
      tabItems[0].classList.remove('active');
      if (pingList) {
        pingList.classList.add('active');
        pingList.style.display = 'block';
      }
      if (commentList) {
        commentList.classList.remove('active');
        commentList.style.display = 'none';
      }
    }

    actionBar.style.width = target.offsetWidth + 'px';
    actionBar.style.left = target.parentNode.offsetLeft + 'px';
  };

  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = tabItems[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var item = _step6.value;

      item.addEventListener('click', tabItemsHandler);
    }

    /*   Recent Posts Widget : Adjust the date style
    /* -------------------------------------------------- */
  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6.return) {
        _iterator6.return();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }

  var dates = document.querySelectorAll('.widget_recent_entries .post-date');

  if (dates) {
    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
      for (var _iterator7 = dates[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
        var date = _step7.value;

        if (date.previousElementSibling.tagName === 'A') {
          var _parent = date.previousElementSibling;
          _parent.innerHTML = '<span class="recent_entries_post-title">' + _parent.textContent + '</span>';
          var titleNode = date.previousElementSibling.children[0];
          _parent.insertBefore(date, titleNode);
        }
      }
    } catch (err) {
      _didIteratorError7 = true;
      _iteratorError7 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion7 && _iterator7.return) {
          _iterator7.return();
        }
      } finally {
        if (_didIteratorError7) {
          throw _iteratorError7;
        }
      }
    }
  }
});