(() => {
  "use strict";
  var n = {
      27: (n, r, e) => {
        e.d(r, { Z: () => o });
        var t = e(645),
          i = e.n(t)()(function (n) {
            return n[1];
          });
        i.push([
          n.id,
          ".page__wrapper__center {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.contacts__header {\r\n  margin-bottom: 0.5rem;\r\n  font-size: 30px;\r\n}\r\n.contacts__email {\r\n  font-weight: 400;\r\n}\r\n\r\n.contacts__link svg {\r\n  width: 48px;\r\n  height: 48px;\r\n  margin: 5rem 0;\r\n}\r\n\r\n.contacts__link {\r\n  text-decoration: none;\r\n}\r\n",
          "",
        ]);
        const o = i;
      },
      650: (n, r, e) => {
        e.d(r, { Z: () => o });
        var t = e(645),
          i = e.n(t)()(function (n) {
            return n[1];
          });
        i.push([
          n.id,
          '.post__expander {\r\n  width: 100%;\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 20px 1.5rem;\r\n  background-color: white;\r\n  border: none;\r\n  border-bottom: 1px solid #ddd;\r\n  font-weight: 600;\r\n  font-size: 20px;\r\n}\r\n\r\n.post__content {\r\n  text-align: justify;\r\n  max-height: 0;\r\n  overflow: hidden;\r\n  transition: max-height 0.5s ease-out;\r\n  padding: 1rem 10rem;\r\n  line-height: 150%;\r\n}\r\n\r\n.active {\r\n  background-color: #ddd;\r\n}\r\n\r\n.active .post__expander__icon,\r\n.active .post__expander__icon::after {\r\n  transform: rotate(135deg);\r\n}\r\n\r\n.post__expander > .post__expander__icon,\r\n.post__expander > .post__expander__icon::after {\r\n  /* top: 10px; */\r\n  position: relative;\r\n  display: block;\r\n  width: 25px;\r\n  height: 4px;\r\n  background-color: gray;\r\n  transition-duration: 500ms;\r\n}\r\n\r\n.post__expander > .post__expander__icon::after {\r\n  top: 0;\r\n  transform: rotate(90deg);\r\n  content: "";\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .post__content {\r\n    padding: 0 1rem;\r\n    margin: 0;\r\n  }\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n  .post__content {\r\n    padding: 0 3rem;\r\n  }\r\n}\r\n',
          "",
        ]);
        const o = i;
      },
      264: (n, r, e) => {
        e.d(r, { Z: () => u });
        var t = e(645),
          i = e.n(t),
          o = e(667),
          a = e.n(o),
          s = e(376),
          l = e(417),
          p = e(361),
          c = i()(function (n) {
            return n[1];
          }),
          d = a()(s.Z),
          f = a()(l.Z),
          h = a()(p.Z);
        c.push([
          n.id,
          '*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  margin: 0;\r\n  font-family: "Open Sans", "Roboto", Arial, sans-serif;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n.intro-page {\r\n  height: 100vh;\r\n  background-size: 100% auto;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 100% auto;\r\n}\r\n\r\n.intro-page__container {\r\n  font-family: "Roboto", Arial, sans-serif;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  height: 100%;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: aliceblue;\r\n}\r\n\r\n.intro-page__preheader {\r\n  font-size: 14px;\r\n  letter-spacing: 0.5px;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n  letter-spacing: 2.5px;\r\n}\r\n\r\n.intro-page__header {\r\n  text-align: center;\r\n  margin: 5% 0 0 0;\r\n  /* letter-spacing: 3px; */\r\n  font-size: 5rem;\r\n}\r\n\r\n.intro-page__nav {\r\n  position: absolute;\r\n  bottom: 0;\r\n  text-decoration: none;\r\n  width: 50px;\r\n  height: 50px;\r\n  transition-timing-function: linear;\r\n}\r\n.intro-page__nav::after,\r\n.intro-page__nav::before {\r\n  position: absolute;\r\n  display: block;\r\n  width: 30px;\r\n  height: 3px;\r\n  top: 20px;\r\n  background-color: aliceblue;\r\n  content: "";\r\n  border-radius: 10%;\r\n}\r\n\r\n.intro-page__nav::before {\r\n  transform: rotate(-45deg);\r\n  left: 20px;\r\n}\r\n\r\n.intro-page__nav::after {\r\n  right: 20px;\r\n  transform: rotate(45deg);\r\n}\r\n\r\n@media (min-width: 420px) and (max-width: 1200px) {\r\n  .intro-page {\r\n    background-image: url(' +
            d +
            ");\r\n    background-size: auto 100%;\r\n  }\r\n}\r\n\r\n@media (max-width: 420px) {\r\n  .intro-page {\r\n    background-image: url(" +
            f +
            ");\r\n    background-size: auto 100%;\r\n  }\r\n  .intro-page__header {\r\n    font-size: 4rem;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .intro-page {\r\n    background-image: url(" +
            h +
            ");\r\n  }\r\n}\r\n",
          "",
        ]);
        const u = c;
      },
      69: (n, r, e) => {
        e.d(r, { Z: () => o });
        var t = e(645),
          i = e.n(t)()(function (n) {
            return n[1];
          });
        i.push([
          n.id,
          ".list {\r\n  padding: 2rem;\r\n}\r\n\r\n.list__item {\r\n  list-style-type: none;\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  align-items: flex-start;\r\n  margin: 2rem 4rem;\r\n}\r\n.list__item__icon {\r\n  width: 70px;\r\n  height: 70px;\r\n}\r\n.list__item__content {\r\n  margin-left: 2rem;\r\n  text-align: start;\r\n}\r\n\r\n.list__item__header {\r\n  font-size: 18px;\r\n  margin-bottom: 0rem;\r\n}\r\n\r\n.list__item__desc {\r\n  font-size: 16px;\r\n  font-weight: 300;\r\n  margin-top: 1rem;\r\n  text-align: justify;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .list__item {\r\n    /* align-items: center;\r\n    flex-flow: column; */\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n  }\r\n  .list__item__icon {\r\n    margin-bottom: 1rem;\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n\r\n  .page__header {\r\n    font-size: 30px;\r\n  }\r\n}\r\n",
          "",
        ]);
        const o = i;
      },
      2: (n, r, e) => {
        e.d(r, { Z: () => o });
        var t = e(645),
          i = e.n(t)()(function (n) {
            return n[1];
          });
        i.push([
          n.id,
          ".page {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.page_vertical {\r\n  flex-direction: column;\r\n}\r\n\r\n.half {\r\n  min-height: 50vh;\r\n}\r\n\r\n.page__wrapper {\r\n  width: 60%;\r\n  text-align: center;\r\n}\r\n\r\n.page__p {\r\n  font-size: 22px;\r\n  font-weight: 300;\r\n  margin: 0 15px;\r\n}\r\n\r\n.page__header {\r\n  /* text-transform: uppercase; */\r\n  font-size: 38px;\r\n  line-height: 1.23;\r\n  margin-bottom: 50px 0;\r\n  font-weight: 700;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .page__wrapper {\r\n    width: 100%;\r\n  }\r\n  .page__header {\r\n    font-size: 30px;\r\n  }\r\n}\r\n\r\n.page__wrapper_fixed {\r\n  width: 100vh;\r\n}\r\n",
          "",
        ]);
        const o = i;
      },
      159: (n, r, e) => {
        e.d(r, { Z: () => o });
        var t = e(645),
          i = e.n(t)()(function (n) {
            return n[1];
          });
        i.push([
          n.id,
          ".profile-page {\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.profile-page__image-container {\r\n  flex: 0 0 40%;\r\n  margin: 0 7% 7% 7%;\r\n  display: flex;\r\n  align-items: center;\r\n  /* justify-content: space-around; */\r\n  overflow: hidden;\r\n  height: 600px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.profile-page__image {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n.profile-page__info {\r\n  padding: 50px;\r\n  text-align: center;\r\n}\r\n.profile-page__info h2 {\r\n  margin-bottom: 10px;\r\n  font-size: 30px;\r\n  /* text-transform: uppercase; */\r\n}\r\n.profile-page h3 {\r\n  text-transform: lowercase;\r\n  color: grey;\r\n  font-weight: 300;\r\n\r\n  font-size: 14px;\r\n}\r\n.profile-page__info p {\r\n  max-width: 400px;\r\n  font-size: 18px;\r\n  font-weight: 300;\r\n}\r\n.profile-page__info span {\r\n  margin: 1rem auto;\r\n  display: block;\r\n  width: 50px;\r\n  height: 2px;\r\n  background-color: #ccc;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .profile-page {\r\n    flex-flow: column nowrap;\r\n    /* justify-content: space-around; */\r\n  }\r\n  .profile-page__info h2 {\r\n    font-size: 30px;\r\n  }\r\n}\r\n",
          "",
        ]);
        const o = i;
      },
      645: (n) => {
        n.exports = function (n) {
          var r = [];
          return (
            (r.toString = function () {
              return this.map(function (r) {
                var e = n(r);
                return r[2] ? "@media ".concat(r[2], " {").concat(e, "}") : e;
              }).join("");
            }),
            (r.i = function (n, e, t) {
              "string" == typeof n && (n = [[null, n, ""]]);
              var i = {};
              if (t)
                for (var o = 0; o < this.length; o++) {
                  var a = this[o][0];
                  null != a && (i[a] = !0);
                }
              for (var s = 0; s < n.length; s++) {
                var l = [].concat(n[s]);
                (t && i[l[0]]) ||
                  (e &&
                    (l[2]
                      ? (l[2] = "".concat(e, " and ").concat(l[2]))
                      : (l[2] = e)),
                  r.push(l));
              }
            }),
            r
          );
        };
      },
      667: (n) => {
        n.exports = function (n, r) {
          return (
            r || (r = {}),
            "string" != typeof (n = n && n.__esModule ? n.default : n)
              ? n
              : (/^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
                r.hash && (n += r.hash),
                /["'() \t\n]/.test(n) || r.needQuotes
                  ? '"'.concat(
                      n.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : n)
          );
        };
      },
      376: (n, r, e) => {
        e.d(r, { Z: () => t });
        const t = e.p + "images/photo-mid.jpeg";
      },
      417: (n, r, e) => {
        e.d(r, { Z: () => t });
        const t = e.p + "images/photo-small.jpeg";
      },
      361: (n, r, e) => {
        e.d(r, { Z: () => t });
        const t = e.p + "images/photo.jpg";
      },
      695: (n) => {
        var r = {};
        n.exports = function (n) {
          if (void 0 === r[n]) {
            var e = document.querySelector(n);
            if (
              window.HTMLIFrameElement &&
              e instanceof window.HTMLIFrameElement
            )
              try {
                e = e.contentDocument.head;
              } catch (n) {
                e = null;
              }
            r[n] = e;
          }
          return r[n];
        };
      },
      379: (n) => {
        var r = [];
        function e(n) {
          for (var e = -1, t = 0; t < r.length; t++)
            if (r[t].identifier === n) {
              e = t;
              break;
            }
          return e;
        }
        function t(n, t) {
          for (var o = {}, a = [], s = 0; s < n.length; s++) {
            var l = n[s],
              p = t.base ? l[0] + t.base : l[0],
              c = o[p] || 0,
              d = "".concat(p, " ").concat(c);
            o[p] = c + 1;
            var f = e(d),
              h = { css: l[1], media: l[2], sourceMap: l[3] };
            -1 !== f
              ? (r[f].references++, r[f].updater(h))
              : r.push({ identifier: d, updater: i(h, t), references: 1 }),
              a.push(d);
          }
          return a;
        }
        function i(n, r) {
          var e = r.domAPI(r);
          return (
            e.update(n),
            function (r) {
              if (r) {
                if (
                  r.css === n.css &&
                  r.media === n.media &&
                  r.sourceMap === n.sourceMap
                )
                  return;
                e.update((n = r));
              } else e.remove();
            }
          );
        }
        n.exports = function (n, i) {
          var o = t((n = n || []), (i = i || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < o.length; a++) {
              var s = e(o[a]);
              r[s].references--;
            }
            for (var l = t(n, i), p = 0; p < o.length; p++) {
              var c = e(o[p]);
              0 === r[c].references && (r[c].updater(), r.splice(c, 1));
            }
            o = l;
          };
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var r = document.createElement("style");
          return n.setAttributes(r, n.attributes), n.insert(r), r;
        };
      },
      795: (n) => {
        n.exports = function (n) {
          var r = n.insertStyleElement(n);
          return {
            update: function (e) {
              !(function (n, r, e) {
                var t = e.css,
                  i = e.media,
                  o = e.sourceMap;
                i ? n.setAttribute("media", i) : n.removeAttribute("media"),
                  o &&
                    "undefined" != typeof btoa &&
                    (t +=
                      "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                        " */"
                      )),
                  r.styleTagTransform(t, n);
              })(r, n, e);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(r);
            },
          };
        };
      },
    },
    r = {};
  function e(t) {
    var i = r[t];
    if (void 0 !== i) return i.exports;
    var o = (r[t] = { id: t, exports: {} });
    return n[t](o, o.exports, e), o.exports;
  }
  (e.n = (n) => {
    var r = n && n.__esModule ? () => n.default : () => n;
    return e.d(r, { a: r }), r;
  }),
    (e.d = (n, r) => {
      for (var t in r)
        e.o(r, t) &&
          !e.o(n, t) &&
          Object.defineProperty(n, t, { enumerable: !0, get: r[t] });
    }),
    (e.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (n) {
        if ("object" == typeof window) return window;
      }
    })()),
    (e.o = (n, r) => Object.prototype.hasOwnProperty.call(n, r)),
    (() => {
      var n;
      e.g.importScripts && (n = e.g.location + "");
      var r = e.g.document;
      if (!n && r && (r.currentScript && (n = r.currentScript.src), !n)) {
        var t = r.getElementsByTagName("script");
        t.length && (n = t[t.length - 1].src);
      }
      if (!n)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (n = n
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (e.p = n);
    })(),
    (() => {
      var n = e(379),
        r = e.n(n),
        t = e(795),
        i = e.n(t),
        o = e(695),
        a = e.n(o),
        s = e(216),
        l = e.n(s),
        p = e(27),
        c = {
          styleTagTransform: function (n, r) {
            if (r.styleSheet) r.styleSheet.cssText = n;
            else {
              for (; r.firstChild; ) r.removeChild(r.firstChild);
              r.appendChild(document.createTextNode(n));
            }
          },
          setAttributes: function (n) {
            var r = e.nc;
            r && n.setAttribute("nonce", r);
          },
          insert: function (n) {
            var r = a()("head");
            if (!r)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            r.appendChild(n);
          },
        };
      (c.domAPI = i()),
        (c.insertStyleElement = l()),
        r()(p.Z, c),
        p.Z && p.Z.locals && p.Z.locals;
      var d = e(650),
        f = {
          styleTagTransform: function (n, r) {
            if (r.styleSheet) r.styleSheet.cssText = n;
            else {
              for (; r.firstChild; ) r.removeChild(r.firstChild);
              r.appendChild(document.createTextNode(n));
            }
          },
          setAttributes: function (n) {
            var r = e.nc;
            r && n.setAttribute("nonce", r);
          },
          insert: function (n) {
            var r = a()("head");
            if (!r)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            r.appendChild(n);
          },
        };
      (f.domAPI = i()),
        (f.insertStyleElement = l()),
        r()(d.Z, f),
        d.Z && d.Z.locals && d.Z.locals;
      var h = e(264),
        u = {
          styleTagTransform: function (n, r) {
            if (r.styleSheet) r.styleSheet.cssText = n;
            else {
              for (; r.firstChild; ) r.removeChild(r.firstChild);
              r.appendChild(document.createTextNode(n));
            }
          },
          setAttributes: function (n) {
            var r = e.nc;
            r && n.setAttribute("nonce", r);
          },
          insert: function (n) {
            var r = a()("head");
            if (!r)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            r.appendChild(n);
          },
        };
      (u.domAPI = i()),
        (u.insertStyleElement = l()),
        r()(h.Z, u),
        h.Z && h.Z.locals && h.Z.locals;
      var m = e(69),
        g = {
          styleTagTransform: function (n, r) {
            if (r.styleSheet) r.styleSheet.cssText = n;
            else {
              for (; r.firstChild; ) r.removeChild(r.firstChild);
              r.appendChild(document.createTextNode(n));
            }
          },
          setAttributes: function (n) {
            var r = e.nc;
            r && n.setAttribute("nonce", r);
          },
          insert: function (n) {
            var r = a()("head");
            if (!r)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            r.appendChild(n);
          },
        };
      (g.domAPI = i()),
        (g.insertStyleElement = l()),
        r()(m.Z, g),
        m.Z && m.Z.locals && m.Z.locals;
      var x = e(2),
        _ = {
          styleTagTransform: function (n, r) {
            if (r.styleSheet) r.styleSheet.cssText = n;
            else {
              for (; r.firstChild; ) r.removeChild(r.firstChild);
              r.appendChild(document.createTextNode(n));
            }
          },
          setAttributes: function (n) {
            var r = e.nc;
            r && n.setAttribute("nonce", r);
          },
          insert: function (n) {
            var r = a()("head");
            if (!r)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            r.appendChild(n);
          },
        };
      (_.domAPI = i()),
        (_.insertStyleElement = l()),
        r()(x.Z, _),
        x.Z && x.Z.locals && x.Z.locals;
      var v = e(159),
        b = {
          styleTagTransform: function (n, r) {
            if (r.styleSheet) r.styleSheet.cssText = n;
            else {
              for (; r.firstChild; ) r.removeChild(r.firstChild);
              r.appendChild(document.createTextNode(n));
            }
          },
          setAttributes: function (n) {
            var r = e.nc;
            r && n.setAttribute("nonce", r);
          },
          insert: function (n) {
            var r = a()("head");
            if (!r)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            r.appendChild(n);
          },
        };
      (b.domAPI = i()),
        (b.insertStyleElement = l()),
        r()(v.Z, b),
        v.Z && v.Z.locals && v.Z.locals,
        e.p,
        e.p,
        e.p,
        e.p,
        e.p,
        e.p,
        e.p,
        e.p,
        e.p,
        e.p,
        e.p;
      let y = document.querySelector(".intro-page__nav");
      (y.style.transitionDuration = "1500ms"),
        setInterval(() => {
          y.style.bottom = "" === y.style.bottom ? "5px" : "";
        }, 1500);
      let w = document.getElementsByClassName("post");
      for (let n of w) {
        let r = n.querySelector(".post__expander"),
          e = n.querySelector(".post__content");
        n.querySelector(".post__expander span,.post__expander span:after"),
          "BUTTON" === r.tagName &&
            r.addEventListener("click", function (n) {
              this.classList.toggle("active"),
                e.style.maxHeight
                  ? (e.style.maxHeight = null)
                  : (e.style.maxHeight = e.scrollHeight + "px");
            });
      }
    })();
})();
