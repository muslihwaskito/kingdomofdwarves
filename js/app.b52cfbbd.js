(function (t) {
  function e(e) {
    for (
      var n, o, r = e[0], c = e[1], p = e[2], d = 0, g = [];
      d < r.length;
      d++
    )
      (o = r[d]),
        Object.prototype.hasOwnProperty.call(i, o) && i[o] && g.push(i[o][0]),
        (i[o] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
    l && l(e);
    while (g.length) g.shift()();
    return s.push.apply(s, p || []), a();
  }
  function a() {
    for (var t, e = 0; e < s.length; e++) {
      for (var a = s[e], n = !0, r = 1; r < a.length; r++) {
        var c = a[r];
        0 !== i[c] && (n = !1);
      }
      n && (s.splice(e--, 1), (t = o((o.s = a[0]))));
    }
    return t;
  }
  var n = {},
    i = { app: 0 },
    s = [];
  function o(e) {
    if (n[e]) return n[e].exports;
    var a = (n[e] = { i: e, l: !1, exports: {} });
    return t[e].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
  }
  (o.m = t),
    (o.c = n),
    (o.d = function (t, e, a) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (o.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function (t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (o.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          o.d(
            a,
            n,
            function (e) {
              return t[e];
            }.bind(null, n)
          );
      return a;
    }),
    (o.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = "/");
  var r = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = r.push.bind(r);
  (r.push = e), (r = r.slice());
  for (var p = 0; p < r.length; p++) e(r[p]);
  var l = c;
  s.push([0, "chunk-vendors"]), a();
})({
  0: function (t, e, a) {
    t.exports = a("56d7");
  },
  "0073": function (t, e, a) {
    t.exports = a.p + "img/4152.4c3fa29b.png";
  },
  "0140": function (t, e, a) {
    t.exports = a.p + "img/395.7af1d7dc.png";
  },
  "017d": function (t, e, a) {
    t.exports = a.p + "img/r2-696.181c4c60.png";
  },
  "01b2": function (t, e, a) {
    t.exports = a.p + "img/white-hood.cbed7c9a.jpeg";
  },
  "02e1": function (t, e, a) {
    t.exports = a.p + "img/20.804074a4.png";
  },
  "0449": function (t, e, a) {
    t.exports = a.p + "img/g-83.1b3d4694.png";
  },
  "0523": function (t, e, a) {
    t.exports = a.p + "img/4105.723f2b7e.png";
  },
  "055c": function (t, e, a) {
    t.exports = a.p + "img/s2-sneak-peek-crop-1100.3ea49f2d.png";
  },
  "07ca": function (t, e, a) {
    t.exports = a.p + "img/4194.3c0de04d.png";
  },
  "088f": function (t, e, a) {
    t.exports = a.p + "img/spent-token.174a9eae.gif";
  },
  "0923": function (t, e, a) {
    t.exports = a.p + "img/4348.4f169a75.png";
  },
  "0c9d": function (t, e, a) {
    t.exports = a.p + "img/j-310.faa3bb32.png";
  },
  "0ed5": function (t, e, a) {
    t.exports = a.p + "img/holo-beard.48adf347.png";
  },
  "0edc": function (t, e, a) {
    t.exports = a.p + "img/d-avatar.5f98e79f.png";
  },
  "0f8a": function (t, e, a) {
    t.exports = a.p + "img/341.ef39f318.png";
  },
  "0fe7": function (t, e, a) {
    t.exports = a.p + "img/770.b272c7ca.png";
  },
  "10ac": function (t, e, a) {
    t.exports = a.p + "img/Palpatine_4.a972b6d3.jpg";
  },
  1151: function (t, e, a) {
    t.exports = a.p + "img/Sailor_Dwarf.a455f7d7.jpg";
  },
  1321: function (t, e, a) {
    t.exports = a.p + "img/j2-620.8280c895.png";
  },
  "17cf": function (t, e, a) {
    t.exports = a.p + "img/4355.788d004b.png";
  },
  "190e": function (t, e, a) {
    t.exports = a.p + "img/687.dd4d6a4d.png";
  },
  "1ab0": function (t, e, a) {
    t.exports = a.p + "img/s2-sneak-peek-mobile.8551c390.png";
  },
  "1bb8": function (t, e, a) {
    t.exports = a.p + "img/1007.d8ffac7d.png";
  },
  "1c1a": function (t, e, a) {
    t.exports = a.p + "img/jack-skellington.9037698d.jpg";
  },
  "1cad": function (t, e, a) {},
  "1d56": function (t, e, a) {
    t.exports = a.p + "img/294.713c8d8c.png";
  },
  "207d": function (t, e, a) {
    t.exports = a.p + "img/36.5c6c384a.png";
  },
  "234c": function (t, e, a) {
    t.exports = a.p + "img/l-485.fb1e0a38.png";
  },
  2371: function (t, e, a) {
    t.exports = a.p + "img/4047.c8350f1f.png";
  },
  "245a": function (t, e, a) {
    t.exports = a.p + "img/110.b2035f75.png";
  },
  "252e": function (t, e, a) {
    t.exports = a.p + "img/299.e153a984.png";
  },
  "26b1": function (t, e, a) {
    t.exports = a.p + "img/n-493.40e61c05.png";
  },
  2740: function (t, e, a) {
    t.exports = a.p + "img/solsea.dff22bcb.svg";
  },
  "288c": function (t, e, a) {
    t.exports = a.p + "img/o-322.3aa3cc10.png";
  },
  "28f9": function (t, e, a) {
    t.exports = a.p + "img/3841.acfd3708.png";
  },
  "2a25": function (t, e, a) {
    t.exports = a.p + "img/f-95.1e91fa5c.png";
  },
  "2b24": function (t, e) {
    t.exports =
      "data:image/png;base64,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";
  },
  "2b44": function (t, e, a) {
    "use strict";
    a("e51a");
  },
  "2e19": function (t, e, a) {
    t.exports = a.p + "img/4111.b407c2ce.png";
  },
  "2ea0": function (t, e, a) {
    t.exports = a.p + "img/e2-979.f3fcee29.png";
  },
  "2ee0": function (t, e, a) {
    t.exports = a.p + "img/King Silver.338ab10d.jpg";
  },
  "2f1f": function (t, e, a) {
    t.exports = a.p + "img/65.dcc121a9.png";
  },
  3028: function (t, e, a) {
    t.exports = a.p + "img/Irish.062b27f8.jpg";
  },
  3038: function (t, e, a) {
    t.exports = a.p + "img/748.b52cdba7.png";
  },
  3067: function (t, e, a) {
    t.exports = a.p + "img/964.cabf61ec.png";
  },
  "337e": function (t, e, a) {
    t.exports = a.p + "media/landing-video-mobile.e745ee3b.mp4";
  },
  "33ef": function (t, e, a) {
    t.exports = a.p + "img/l2-874.b61fb459.png";
  },
  3444: function (t, e, a) {
    t.exports = a.p + "img/135.f6978e3d.png";
  },
  "363c": function (t, e, a) {
    t.exports = a.p + "img/c-247.3333eb4f.png";
  },
  "369b": function (t, e, a) {
    t.exports = a.p + "img/4396.4df6b3c9.png";
  },
  3981: function (t, e, a) {
    t.exports = a.p + "img/285.ee9eee80.png";
  },
  "39a2": function (t, e, a) {
    t.exports = a.p + "img/05-kingblood_3.507fde88.jpg";
  },
  "39e1": function (t, e, a) {
    "use strict";
    a("5177");
  },
  "39e5": function (t, e, a) {
    t.exports = a.p + "img/347.365a2183.png";
  },
  "39ef": function (t, e, a) {
    t.exports = a.p + "img/3952.e1d21e1a.png";
  },
  "3c56": function (t, e, a) {},
  "3ce4": function (t, e, a) {
    t.exports = a.p + "img/HalfFace_Dwarf.eb091476.jpg";
  },
  "3df2": function (t, e, a) {
    t.exports = a.p + "img/865.c719f531.png";
  },
  "3e90": function (t, e, a) {
    t.exports = a.p + "img/PurpleKing_Dwarf.16aa7a63.jpg";
  },
  "3ea8": function (t, e, a) {
    "use strict";
    a("6c7a");
  },
  "40c0": function (t, e, a) {
    t.exports = a.p + "img/3927.9ba85aaf.png";
  },
  "40da": function (t, e, a) {
    t.exports = a.p + "img/3917.5a418480.png";
  },
  4142: function (t, e, a) {
    t.exports = a.p + "img/kingblood_2.a3688f8e.jpg";
  },
  "41cd": function (t, e, a) {
    t.exports = a.p + "img/705.08819a8f.png";
  },
  "41f6": function (t, e, a) {
    t.exports = a.p + "img/730.d87e50d8.png";
  },
  "42d8": function (t, e, a) {
    t.exports = a.p + "img/4176.7494072c.png";
  },
  "43f4": function (t, e, a) {
    t.exports = a.p + "img/d2-558.eb0aa1be.png";
  },
  "45dd": function (t, e, a) {
    t.exports = a.p + "img/02-Avatar_02.220426fb.jpg";
  },
  "48f2": function (t, e, a) {
    t.exports = a.p + "img/759.f84f3d96.png";
  },
  "4aac": function (t, e, a) {
    t.exports = a.p + "img/59.e592dbdf.png";
  },
  "4b49": function (t, e, a) {
    t.exports = a.p + "img/747.fb6ac2c8.png";
  },
  "4c12": function (t, e, a) {
    t.exports = a.p + "img/a-473.4759aba3.png";
  },
  5110: function (t, e, a) {
    t.exports = a.p + "img/08-826.ae00f8bb.png";
  },
  5177: function (t, e, a) {},
  "52ba": function (t, e, a) {
    t.exports = a.p + "img/coin.9cfdc112.png";
  },
  5424: function (t, e, a) {
    t.exports = a.p + "img/4089.bcffaaa6.png";
  },
  "564e": function (t, e, a) {
    t.exports = a.p + "img/02-6001.7de26cf0.png";
  },
  "56d7": function (t, e, a) {
    "use strict";
    a.r(e);
    a("e260"), a("e6cf"), a("cca6"), a("a79d");
    var n = a("2b0e"),
      i = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "v-app",
          { attrs: { id: "app" } },
          [
            n(
              "v-container",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.isLoaded,
                    expression: "isLoaded",
                  },
                ],
                attrs: { fluid: "", id: "app-wrapper" },
              },
              [
                n(
                  "v-sheet",
                  {
                    staticClass: "overflow-hidden",
                    staticStyle: { position: "relative" },
                    attrs: { id: "sheet" },
                  },
                  [n("app-header"), n("router-view"), n("app-footer")],
                  1
                ),
              ],
              1
            ),
            n(
              "v-row",
              [
                n(
                  "v-container",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !t.isLoaded,
                        expression: "!isLoaded",
                      },
                    ],
                  },
                  [
                    n(
                      "div",
                      {
                        staticClass: "d-flex align-center justify-center",
                        staticStyle: {
                          height: "90vh",
                          position: "absolute",
                          left: "50%",
                          right: "50%",
                        },
                      },
                      [
                        n(
                          "v-progress-circular",
                          {
                            attrs: {
                              size:
                                t.$vuetify.breakpoint.xs ||
                                t.$vuetify.breakpoint.sm
                                  ? 160
                                  : 260,
                              indeterminate: "",
                              value: 50,
                              width: "2",
                              color: "white darken-2",
                            },
                          },
                          [
                            n("img", {
                              attrs: {
                                src: a("6fad"),
                                height:
                                  t.$vuetify.breakpoint.xs ||
                                  t.$vuetify.breakpoint.sm
                                    ? 150
                                    : 250,
                              },
                            }),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]
                ),
                t._l(t.images, function (e, a) {
                  return n(
                    "v-col",
                    {
                      key: a,
                      class: t.isLoaded ? "d-none" : "loading",
                      attrs: { cols: "12", sm: "6", md: "4" },
                    },
                    [
                      n("v-img", {
                        attrs: {
                          height: "400",
                          width: "400",
                          contain: "",
                          src: e,
                        },
                        on: { load: t.handleLoad },
                      }),
                    ],
                    1
                  );
                }),
              ],
              2
            ),
          ],
          1
        );
      },
      s = [],
      o =
        (a("159b"),
        a("d3b7"),
        a("ddb0"),
        a("b0c0"),
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            [
              a(
                "v-app-bar",
                {
                  attrs: {
                    flat: "",
                    dark: "",
                    absolute: "",
                    id: "nav-bar",
                    color: "transparent",
                  },
                },
                [
                  a("v-spacer"),
                  t.drawer
                    ? t._e()
                    : t._l(t.socialLinks, function (t) {
                        return a(
                          "v-btn",
                          {
                            key: t.href,
                            staticClass: "d-none d-sm-flex",
                            attrs: {
                              plain: "",
                              href: t.href,
                              target: "_blank",
                            },
                          },
                          [
                            a("iconify-icon", {
                              attrs: { icon: t.icon, height: "auto" },
                            }),
                          ],
                          1
                        );
                      }),
                  a(
                    "v-icon",
                    {
                      staticClass: "ml-2",
                      attrs: {
                        medium: t.$vuetify.breakpoint.xs,
                        large: !t.$vuetify.breakpoint.xs,
                      },
                      on: {
                        click: function (e) {
                          e.stopPropagation(), (t.drawer = !t.drawer);
                        },
                      },
                    },
                    [t._v("mdi-menu")]
                  ),
                ],
                2
              ),
              a(
                "v-navigation-drawer",
                {
                  staticStyle: { "z-index": "1" },
                  attrs: {
                    dark: "",
                    fixed: "",
                    temporary: "",
                    right: "",
                    width: t.$vuetify.breakpoint.xs ? "100vw" : 400,
                  },
                  model: {
                    value: t.drawer,
                    callback: function (e) {
                      t.drawer = e;
                    },
                    expression: "drawer",
                  },
                },
                [
                  !t.soldOut && t.$vuetify.breakpoint.xs
                    ? [
                        a(
                          "v-list-item",
                          {
                            staticClass: "mt-3 mb-2",
                            staticStyle: { "justify-content": "center" },
                          },
                          [
                            a(
                              "v-btn",
                              {
                                attrs: {
                                  id: "header-btn",
                                  medium: "",
                                  href: t.mintIsLive
                                    ? "https://app.kingdomofdwarves.io"
                                    : "#",
                                },
                              },
                              [
                                t._v(
                                  " " +
                                    t._s(
                                      t.mintIsLive
                                        ? "MINT NOW!"
                                        : "MINTING SOON!"
                                    ) +
                                    " "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        a("v-divider"),
                      ]
                    : t._e(),
                  a(
                    "v-list-item",
                    {
                      staticClass: "my-2",
                      style:
                        t.$vuetify.breakpoint.xs && !t.soldOut
                          ? "justify-content: center;"
                          : "justify-content: center; padding-top: .25rem;",
                    },
                    t._l(t.socialLinks, function (t) {
                      return a(
                        "v-btn",
                        {
                          key: t.href,
                          attrs: { plain: "", href: t.href, target: "_blank" },
                        },
                        [
                          a("iconify-icon", {
                            attrs: { icon: t.icon, height: "auto" },
                          }),
                        ],
                        1
                      );
                    }),
                    1
                  ),
                  a("v-divider"),
                  a(
                    "v-list",
                    { attrs: { dark: "", flat: "" } },
                    t._l(t.internalLinks, function (e) {
                      return a(
                        "v-list-item",
                        {
                          key: e.href,
                          staticStyle: { "justify-content": "center" },
                          attrs: { link: "" },
                        },
                        [
                          a(
                            "v-btn",
                            {
                              key: e.href,
                              attrs: {
                                plain: "",
                                href: e.href,
                                target: e.target,
                                color: "gray",
                              },
                            },
                            [
                              e.icon
                                ? a(
                                    "v-list-item-icon",
                                    { staticStyle: { margin: "auto" } },
                                    [
                                      a("iconify-icon", {
                                        attrs: { icon: e.icon, height: "16" },
                                      }),
                                    ],
                                    1
                                  )
                                : t._e(),
                              a(
                                "v-list-item",
                                [
                                  a("v-list-item-title", [
                                    t._v(" " + t._s(e.name) + " "),
                                  ]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      );
                    }),
                    1
                  ),
                  a("v-divider"),
                  a(
                    "h4",
                    {
                      staticClass: "mt-4",
                      staticStyle: { "text-align": "center" },
                    },
                    [t._v("KINGDOM APP")]
                  ),
                  a(
                    "v-list-item",
                    { staticStyle: { "justify-content": "center" } },
                    [
                      a(
                        "v-list",
                        { attrs: { dense: "", dark: "", flat: "" } },
                        t._l(t.appLinks, function (e) {
                          return a(
                            "v-btn",
                            {
                              key: e.href,
                              attrs: {
                                plain: "",
                                href: e.href,
                                target: e.target,
                                color: "gray",
                                small: !t.$vuetify.breakpoint.xs,
                                "x-small": t.$vuetify.breakpoint.xs,
                              },
                            },
                            [t._v(" " + t._s(e.name) + " ")]
                          );
                        }),
                        1
                      ),
                    ],
                    1
                  ),
                ],
                2
              ),
            ],
            1
          );
        }),
      r = [],
      c = (a("99af"), a("5ea9")),
      p = !1,
      l = new Date("2022-03-15T19:00:00Z"),
      d = "2022",
      g = l.getMonth() + 1,
      m = l.getDate(),
      f = l.getHours(),
      u = l.getMinutes(),
      h = ""
        .concat(d, "-")
        .concat(g, "-")
        .concat(m, " ")
        .concat(f, ":")
        .concat(u, ":00"),
      v = {
        components: { "iconify-icon": c["a"] },
        data: function () {
          return {
            soldOut: p,
            premintDateString: h,
            drawer: null,
            mintIsLive: !1,
            socialLinks: [
              {
                href: "https://youtube.com/channel/UCwFfmosdTrXv9JB0b-pdiqw",
                icon: "mdi:youtube",
              },
              {
                href: "https://twitter.com/kofdwarves",
                icon: "mdi:twitter",
              },
              {
                href: "https://t.me/KingdomOf_Dwarves",
                icon: "mdi:telegram",
              },
              {
                href: "https://medium.com/@kingdomofdwarves",
                icon: "mdi:medium",
              },
            ],
            internalLinks: [
              { name: "About", href: "#about", icon: "" },
              { name: "Metaverse", href: "#metaverse", icon: "" },
              { name: "Lore + Podcasts", href: "#lore-and-podcasts", icon: "" },
              { name: "Features", href: "#standout-features", icon: "" },
              { name: "Roadmap", href: "#roadmap", icon: "" },
              { name: "Team", href: "#team", icon: "" },
              { name: "FAQ", href: "#faq", icon: "" },
            ],
            appLinks: [
              {
                name: "Lore",
                href: "https://app.kingdomofdwarves.io/lore",
                icon: "",
              },
              {
                name: "Podcasts",
                href: "https://app.kingdomofdwarves.io/podcasts",
                icon: "",
              },
              {
                name: "Rarities",
                href: "https://app.kingdomofdwarves.io/rarities",
                icon: "",
              },
              {
                name: "Gallery",
                href: "https://app.kingdomofdwarves.io/gallery",
                icon: "",
              },
            ],
          };
        },
        mounted: function () {
          this.mintIsLive = l.getTime() <= new Date().getTime();
        },
        beforeMount: function () {
          this.touch = matchMedia("(hover: none), (pointer: coarse)").matches;
        },
      },
      b = v,
      A = (a("be24"), a("2877")),
      w = a("6544"),
      x = a.n(w),
      y = a("40dc"),
      k = a("8336"),
      C = a("ce7e"),
      I = a("132d"),
      E = a("8860"),
      j = a("da13"),
      S = a("34c3"),
      T = a("5d23"),
      O = a("f774"),
      D = a("2fa4"),
      R = Object(A["a"])(b, o, r, !1, null, "3fce0d3e", null),
      _ = R.exports;
    x()(R, {
      VAppBar: y["a"],
      VBtn: k["a"],
      VDivider: C["a"],
      VIcon: I["a"],
      VList: E["a"],
      VListItem: j["a"],
      VListItemIcon: S["a"],
      VListItemTitle: T["a"],
      VNavigationDrawer: O["a"],
      VSpacer: D["a"],
    });
    var L = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "v-footer",
          { staticClass: "text-center", attrs: { padless: "", dark: "" } },
          [
            a(
              "v-row",
              { staticClass: "my-2" },
              [
                a(
                  "v-col",
                  { attrs: { cols: "12 my-n1" } },
                  [
                    t._l(t.headerLinks, function (t, e) {
                      return [
                        a(
                          "v-btn",
                          {
                            key: e,
                            class: t.class,
                            attrs: {
                              plain: "",
                              href: t.href,
                              target: "_blank",
                            },
                          },
                          [
                            a("iconify-icon", {
                              attrs: { icon: t.icon, height: "20" },
                            }),
                          ],
                          1
                        ),
                      ];
                    }),
                  ],
                  2
                ),
                a("v-col", { attrs: { cols: "12 my-n1" } }, [
                  t._v(" " + t._s(new Date().getFullYear()) + " — "),
                  a("strong", [t._v("KINGDOM OF DWARVES")]),
                ]),
              ],
              1
            ),
          ],
          1
        );
      },
      V = [],
      W = {
        components: { "iconify-icon": c["a"] },
        data: function () {
          return {
            headerLinks: [
              {
                href: "https://youtube.com/channel/UCwFfmosdTrXv9JB0b-pdiqw",
                icon: "mdi:youtube",
              },
              {
                href: "https://twitter.com/kofdwarves",
                icon: "mdi:twitter",
              },
              {
                href: "https://t.me/KingdomOf_Dwarves",
                icon: "mdi:telegram",
              },
              {
                href: "https://medium.com/@kingdomofdwarves",
                icon: "mdi:medium",
              },
            ],
          };
        },
      },
      M = W,
      G = a("62ad"),
      N = a("553a"),
      Y = a("0fd9"),
      P = Object(A["a"])(M, L, V, !1, null, null, null),
      K = P.exports;
    x()(P, { VBtn: k["a"], VCol: G["a"], VFooter: N["a"], VRow: Y["a"] });
    var B = {
        name: "App",
        components: { "app-header": _, "app-footer": K },
        data: function () {
          return { isLoaded: !1, imageCount: 0, images: {} };
        },
        mounted: function () {
          this.importAll(a("8050"));
        },
        methods: {
          handleLoad: function () {
            this.imageCount++,
              this.imageCount === this.preloadAmt && (this.isLoaded = !0);
          },
          importAll: function (t) {
            var e = {},
              a = 1;
            t.keys().forEach(function (n) {
              (e[a] = t(n)), (a += 1);
            }),
              (this.images = e);
          },
        },
        computed: {
          preloadAmt: function () {
            switch (this.$vuetify.breakpoint.name) {
              case "xs":
                return 10;
              case "sm":
                return 20;
              case "md":
                return 30;
              case "lg":
                return 30;
              case "xl":
                return 30;
              default:
                return 10;
            }
          },
        },
      },
      F = B,
      Z = (a("5c0b"), a("7496")),
      q = a("a523"),
      Q = a("adda"),
      H = a("490a"),
      U = a("8dd9"),
      z = Object(A["a"])(F, i, s, !1, null, null, null),
      J = z.exports;
    x()(z, {
      VApp: Z["a"],
      VCol: G["a"],
      VContainer: q["a"],
      VImg: Q["a"],
      VProgressCircular: H["a"],
      VRow: Y["a"],
      VSheet: U["a"],
    });
    var X = a("f309");
    n["a"].use(X["a"]);
    var $ = new X["a"]({}),
      tt = a("8c4f"),
      et = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "v-main",
          { attrs: { id: "main" } },
          [
            a(
              "v-container",
              { attrs: { id: "page-wrapper" } },
              [
                a("home-page"),
                a("about-page"),
                a("metaverse-page"),
                a("lore-page"),
                a("features-page"),
                a("roadmap-page"),
                a("team-page"),
                a("faq-page"),
              ],
              1
            ),
          ],
          1
        );
      },
      at = [],
      nt = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { attrs: { "data-aos": "fade-in", "data-aos-duration": "2000" } },
          [
            n(
              "video",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.$vuetify.breakpoint.xs,
                    expression: "$vuetify.breakpoint.xs",
                  },
                ],
                staticStyle: { width: "100vw", "max-width": "1440px" },
                attrs: { playsinline: "", autoplay: "", muted: "", loop: "" },
                domProps: { muted: !0 },
              },
              [n("source", { attrs: { src: a("337e"), type: "video/mp4" } })]
            ),
            n(
              "video",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !t.$vuetify.breakpoint.xs,
                    expression: "!$vuetify.breakpoint.xs",
                  },
                ],
                staticStyle: { width: "100vw", "max-width": "1440px" },
                attrs: { playsinline: "", autoplay: "", muted: "", loop: "" },
                domProps: { muted: !0 },
              },
              [n("source", { attrs: { src: a("9a7a"), type: "video/mp4" } })]
            ),
          ]
        );
      },
      it = [],
      st = {},
      ot = Object(A["a"])(st, nt, it, !1, null, null, null),
      rt = ot.exports,
      ct = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "v-container",
          {
            staticClass: "my-5",
            attrs: { fluid: "", id: "standout-features" },
          },
          [
            n("app-title", { attrs: { title: "STANDOUT FEATURES" } }),
            n("h5", { staticClass: "text-center d-sm-none pb-0" }, [
              t._v("Swipe to see more"),
            ]),
            n(
              "v-row",
              [
                n(
                  "v-card",
                  { attrs: { dark: "" } },
                  [
                    n(
                      "v-tabs",
                      { attrs: { dark: "", centered: "" } },
                      [
                        n("v-tab", [t._v(" Our Pillars ")]),
                        n(
                          "v-tab-item",
                          {
                            staticStyle: {
                              "background-color": "#1E1E1E !important",
                            },
                            attrs: { dark: "" },
                          },
                          [
                            n(
                              "v-card",
                              { attrs: { flat: "", dark: "" } },
                              [
                                n(
                                  "v-card-text",
                                  { attrs: { dark: "" } },
                                  [
                                    n(
                                      "v-row",
                                      [
                                        n(
                                          "v-col",
                                          {
                                            staticStyle: { margin: "auto" },
                                            attrs: {
                                              id: "our-pillars",
                                              "data-aos": "fade-in",
                                              "data-aos-duration": "1000",
                                              cols: "12",
                                              md: "10",
                                            },
                                          },
                                          [
                                            n(
                                              "div",
                                              { staticClass: "text-div" },
                                              t._l(t.pillars, function (e, i) {
                                                return n(
                                                  "v-row",
                                                  { key: i },
                                                  [
                                                    n(
                                                      "v-col",
                                                      {
                                                        attrs: {
                                                          cols: "12",
                                                          md: "4",
                                                        },
                                                      },
                                                      [
                                                        n("v-img", {
                                                          staticClass:
                                                            "mt-10 with-border",
                                                          staticStyle: {
                                                            width: "300px",
                                                            margin: "auto",
                                                          },
                                                          attrs: {
                                                            eager: "",
                                                            contain: "",
                                                            src: a("cf2b")(
                                                              "./" + e.imgSrc
                                                            ),
                                                          },
                                                        }),
                                                      ],
                                                      1
                                                    ),
                                                    n(
                                                      "v-col",
                                                      {
                                                        staticStyle: {
                                                          margin: "auto",
                                                        },
                                                        attrs: {
                                                          cols: "12",
                                                          md: "8",
                                                        },
                                                      },
                                                      [
                                                        n(
                                                          "h2",
                                                          {
                                                            staticClass:
                                                              "pillar-title text-gold",
                                                          },
                                                          [
                                                            t._v(
                                                              " " +
                                                                t._s(e.title) +
                                                                " "
                                                            ),
                                                          ]
                                                        ),
                                                        n(
                                                          "h3",
                                                          {
                                                            staticClass:
                                                              "description",
                                                          },
                                                          [
                                                            t._v(
                                                              t._s(
                                                                e.description
                                                              )
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                );
                                              }),
                                              1
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      pt = [],
      lt = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "v-row",
          { staticClass: "text-center" },
          [
            a("v-col", [
              a("h1", { attrs: { id: t.id } }, [t._v(t._s(t.title))]),
            ]),
          ],
          1
        );
      },
      dt = [],
      gt = { props: ["title", "id"] },
      mt = gt,
      ft = (a("d0b1"), Object(A["a"])(mt, lt, dt, !1, null, "4541ac38", null)),
      ut = ft.exports;
    x()(ft, { VCol: G["a"], VRow: Y["a"] });
    var ht = {
        name: "Tabbed",
        components: { "app-title": ut },
        data: function () {
          return {
            tab: null,
            items: ["Season Drops", "Whitelist Tokens", "Community Events"],
            pillars: [
              {
                title: "METAVERSE & ANIMATION",
                imgSrc: "dwarf-body.jpeg",
                description:
                  "We have an Academy Award-Winning animator on our team who will be\n            bringing the dwarves to life. There are immediate plans to create\n            animated shorts with possible TV series collaborations in the\n            future. Animation will create opportunities to develop our community\n            in the Metaverse and we are sourcing partnerships to make this a\n            reality.",
              },
              {
                title: "LORE & GAMIFICATION",
                imgSrc: "the-under-realms-map.jpeg",
                description:
                  "Our NFTs are connected to the Lore like never seen before. As\n            seasons progress, the attributes and roles of each dwarf in the\n            collection will become more substantial as well. Dwarf holders will\n            be able to earn additional items which will increase the value of\n            their Dwarf as they collect more. Furthermore, The Kingdom Lore\n            incorporates game-design elements that can be adapted into a variety\n            of game types including table-top board games and role-playing\n            games.",
              },
              {
                title: "KINGDOM CURRENCY",
                imgSrc: "jewels.jpg",
                description:
                  "The currency of the Dwarven Kingdom is KOD. Earn KOD by participating in P2E (Play to Earn) scenarios or by stalking your dwarves! You can spend your COD in various ways. KOD is the official currency for playing in community based events such as 1v1 fighting competitions where the winner takes the pot!",
              },
              {
                title: "TOP QUALITY ART",
                imgSrc: "s1-crown.jpeg",
                description:
                  "We will never compromise on the art for Kingdom of Dwarves. Our\n            cinematic-quality, 3D dwarves are created by award-winning artists\n            who have worked on Game of Thrones, Westworld, Gears of War, and\n            Disney/Pixar. Each Season will reveal new 3D assets and unique\n            lore-based item sets to collect. To give back, we will uplift other\n            artists in the KoD Community who want to pursue 3D modeling,\n            rigging, or animation by providing scholarships and guidance\n            directly from our core team.",
              },
            ],
          };
        },
        beforeMount: function () {
          this.touch = matchMedia("(hover: none), (pointer: coarse)").matches;
        },
      },
      vt = ht,
      bt = (a("6cd3"), a("955e"), a("b0af")),
      At = a("99d9"),
      wt = a("71a3"),
      xt = a("c671"),
      yt = a("fe57"),
      kt = Object(A["a"])(vt, ct, pt, !1, null, "980919a8", null),
      Ct = kt.exports;
    x()(kt, {
      VBtn: k["a"],
      VCard: bt["a"],
      VCardText: At["a"],
      VCol: G["a"],
      VContainer: q["a"],
      VImg: Q["a"],
      VRow: Y["a"],
      VTab: wt["a"],
      VTabItem: xt["a"],
      VTabs: yt["a"],
    });
    var It = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "v-container",
          { attrs: { fluid: "" } },
          [
            a(
              "v-row",
              [
                a(
                  "v-col",
                  {
                    attrs: {
                      "data-aos": "fade-in",
                      "data-aos-duration": "1000",
                      cols: "12",
                      md: "10",
                      id: "metaverse",
                    },
                  },
                  [
                    a(
                      "div",
                      { staticClass: "text-div" },
                      [
                        a("app-title", {
                          attrs: { title: "METAVERSE PRESENCE" },
                        }),
                        a("h3", { staticClass: "mb-2" }, [
                          t._v(
                            "We're building a whole world in our own Metaverse Worlds package! Our vast 3D empire has special buildings and terrain, all designed with impeccable detail. Engage with the community in events such as metaverse PVP battles and massive worldwide hunts."
                          ),
                        ]),
                      ],
                      1
                    ),
                    a(
                      "v-row",
                      {
                        staticClass: "mt-6",
                        staticStyle: { "justify-content": "center" },
                      },
                      [
                        a("youtube-media", {
                          staticClass: "with-border",
                          attrs: {
                            "player-width": 0.8 * t.windowWidth,
                            "player-height": 0.5 * t.windowWidth,
                            "video-id": t.videoId,
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      Et = [],
      jt = {
        name: "Metaverse",
        components: { "app-title": ut },
        data: function () {
          return {
            videoId: "isn5ymLm9ro",
            windowWidth: window.innerWidth,
            txt: "",
          };
        },
        watch: {
          windowWidth: function (t, e) {
            this.txt = "it changed to ".concat(t, " from ").concat(e);
          },
        },
        mounted: function () {
          var t = this;
          this.$nextTick(function () {
            window.addEventListener("resize", t.onResize);
          });
        },
        beforeDestroy: function () {
          window.removeEventListener("resize", this.onResize);
        },
        methods: {
          onResize: function () {
            this.windowWidth = window.innerWidth;
          },
        },
      },
      St = jt,
      Tt =
        (a("a028"),
        a("da29"),
        Object(A["a"])(St, It, Et, !1, null, "e21ed60e", null)),
      Ot = Tt.exports;
    x()(Tt, { VBtn: k["a"], VCol: G["a"], VContainer: q["a"], VRow: Y["a"] });
    var Dt = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "v-container",
          {
            staticClass: "my-5",
            attrs: { fluid: "", id: "lore-and-podcasts" },
          },
          [
            n(
              "v-row",
              [
                n(
                  "v-col",
                  {
                    attrs: {
                      "data-aos": "fade-in",
                      "data-aos-duration": "1000",
                      cols: "12",
                      md: "10",
                    },
                  },
                  [n("app-title", { attrs: { title: "LORE AND PODCASTS" } })],
                  1
                ),
              ],
              1
            ),
            n(
              "v-row",
              [
                n(
                  "v-col",
                  {
                    attrs: {
                      "data-aos": "fade-in",
                      "data-aos-duration": "1000",
                      cols: "12",
                      md: "10",
                      lg: "5",
                    },
                  },
                  [
                    n("v-img", {
                      staticClass: "with-border",
                      attrs: { eager: "", contain: "", src: a("5f3f") },
                    }),
                  ],
                  1
                ),
                n(
                  "v-col",
                  {
                    attrs: {
                      "data-aos": "fade-in",
                      "data-aos-duration": "1000",
                      cols: "12",
                      md: "10",
                      lg: "5",
                    },
                  },
                  [
                    n(
                      "div",
                      { staticClass: "text-div" },
                      [
                        n("h4", [
                          n("span", { staticClass: "text-gold" }, [
                            t._v("KINGDOM of DWARVES"),
                          ]),
                        ]),
                        n("h3", { staticClass: "mb-2" }, [
                          t._v(
                            "Kingdom of Dwarves is Every dwarves is a unique and unique warrior created by an Emmy and Academy Award winning artist with a portfolio of works including Game of Thrones, Westworld, and Gears of War."
                          ),
                        ]),
                        n(
                          "v-btn",
                          {
                            staticClass: "social-btn mt-4",
                            attrs: {
                              large: "",
                              href: "https://medium.com/@kingdomofdwarves",
                              target: "_blank",
                            },
                          },
                          [t._v(" READ THE LORE ")]
                        ),
                      ],
                      1
                    ),
                  ]
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      Rt = [],
      _t = { name: "LoreAndMore", components: { "app-title": ut } },
      Lt = _t,
      Vt = (a("6c39"), Object(A["a"])(Lt, Dt, Rt, !1, null, "493b625c", null)),
      Wt = Vt.exports;
    x()(Vt, {
      VBtn: k["a"],
      VCol: G["a"],
      VContainer: q["a"],
      VImg: Q["a"],
      VRow: Y["a"],
    });
    var Mt = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "v-container",
          { staticClass: "my-5", attrs: { fluid: "", id: "about" } },
          [
            n(
              "v-row",
              [
                n(
                  "v-col",
                  {
                    attrs: {
                      "data-aos": "fade-in",
                      "data-aos-duration": "1000",
                      cols: "12",
                      md: "6",
                      order: "2",
                      "order-md": "1",
                    },
                  },
                  [
                    n(
                      "div",
                      { staticClass: "text-div" },
                      [
                        n("app-title", {
                          attrs: { title: "KINGDOM OF DWARVES" },
                        }),
                        n("h3", [
                          t._v(
                            " Kingdom of Dwarves is a quirky, quirky warrior created by an Emmy and Academy Award-winning artist with a portfolio of work including Game of Thrones, Westworld, and Gears of War. "
                          ),
                        ]),
                      ],
                      1
                    ),
                    n(
                      "div",
                      { staticClass: "text-div mt-2" },
                      [
                        n(
                          "v-row",
                          { staticStyle: { "text-align": "center" , "margin-top": "5px"} },
                          [
                            n(
                              "v-col",
                              { attrs: { cols: "12" } },
                              [
                                !t.mintIsLive && t.mintApproaching
                                  ? [
                                      n(
                                        "v-row",
                                        [
                                          n("v-spacer"),
                                          n(
                                            "v-col",
                                            {
                                              attrs: {
                                                cols: "12",
                                                sm: "5",
                                                lg: "4",
                                              },
                                            },
                                            [
                                              n("h3", [
                                                t._v("Join the $KOD"),
                                              ]),
                                              n(
                                                "v-btn",
                                                {
                                                  staticClass: "mx-1 mt-2",
                                                  attrs: {
                                                    "x-large": "",
                                                    href: t.magicEdenWLBtnHref,
                                                    target: "_blank",
                                                    id: "mint-btn-desktop",
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.magicEdenWLBtnText
                                                      ) +
                                                      " "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          n(
                                            "v-col",
                                            {
                                              attrs: {
                                                cols: "12",
                                                sm: "5",
                                                lg: "4",
                                              },
                                            },
                                            [
                                              n("h3", [
                                                t._v("Join the Kingdom"),
                                              ]),
                                              n(
                                                "v-btn",
                                                {
                                                  staticClass: "mx-1 mt-2",
                                                  attrs: {
                                                    "x-large": "",
                                                    href: t.magicEdenDwarfBtnHref,
                                                    target: "_blank",
                                                    id: "mint-btn-desktop",
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.magicEdenDwarfBtnText
                                                      ) +
                                                      " "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          n("v-spacer"),
                                        ],
                                        1
                                      ),
                                    ]
                                  : t.mintIsLive
                                  ? [
                                      t.showWarningText
                                        ? t._e()
                                        : n(
                                            "v-btn",
                                            {
                                              staticStyle: {
                                                color: "lightcoral !important",
                                              },
                                              attrs: {
                                                id: "mint-btn",
                                                text: "",
                                              },
                                              on: {
                                                click: function (e) {
                                                  t.showWarningText =
                                                    !t.showWarningText;
                                                },
                                              },
                                            },
                                            [
                                              t._v(
                                                " CLICK HERE: Whitelist Token Advisory! "
                                              ),
                                            ]
                                          ),
                                      t.showWarningText
                                        ? n(
                                            "div",
                                            {
                                              staticStyle: {
                                                "max-width": "600px",
                                                margin: "auto",
                                                color: "lightcoral",
                                                "margin-bottom": "-.5rem",
                                              },
                                            },
                                            [
                                              n("strong", [t._v("WARNING")]),
                                              t._v(
                                                ": We do NOT recommend purchasing a Whitelist token for the current Season Drop AFTER minting is live. A WL token can only be used ONCE per Season Drop. It's very likely that a token trading on a secondary market has already been used for the current Season. Please tread cautiously! "
                                              ),
                                              n(
                                                "h3",
                                                {
                                                  staticStyle: {
                                                    color: "white",
                                                    "margin-top": "1rem",
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    "Example of a claimed token:"
                                                  ),
                                                ]
                                              ),
                                              n("v-img", {
                                                staticStyle: { margin: "auto" },
                                                attrs: {
                                                  eager: "",
                                                  width: "250",
                                                  src: a("088f"),
                                                },
                                              }),
                                            ],
                                            1
                                          )
                                        : t._e(),
                                      n("h4", { staticClass: "mt-3" }, [
                                        t._v(
                                          " Season " +
                                            t._s(t.upcommingSeason) +
                                            " is here! "
                                        ),
                                      ]),
                                      n(
                                        "v-btn",
                                        {
                                          staticClass: "mx-1 mt-2",
                                          attrs: {
                                            "x-large": "",
                                            href: "https://app.kingdomofdwarves.io/mint",
                                            id: "mint-btn-desktop",
                                          },
                                        },
                                        [t._v(" Mint Now! ")]
                                      ),
                                    ]
                                  : [
                                      n("h3", [
                                        t._v(
                                          " Season " +
                                            t._s(t.currentSeason) +
                                            " is SOLD OUT! "
                                        ),
                                      ]),
                                      n(
                                        "v-btn",
                                        {
                                          staticClass: "mx-1 mt-2",
                                          attrs: {
                                            large: "",
                                            href: t.magicEdenDwarfBtnHref,
                                            target: "_blank",
                                            id: "mint-btn-desktop",
                                          },
                                        },
                                        [
                                          t._v(
                                            " " + t._s(t.magicedenBtnText) + " "
                                          ),
                                        ]
                                      ),
                                    ],
                              ],
                              2
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ]
                ),
                n(
                  "v-col",
                  {
                    attrs: {
                      "data-aos": "fade-in",
                      "data-aos-duration": "1000",
                      cols: "12",
                      md: "6",
                      order: "1",
                      "order-md": "2",
                    },
                  },
                  [n("app-slide")],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      Gt = [],
      Nt = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "v-card",
          {
            staticClass: "mx-auto",
            attrs: { elevation: "24", "max-width": "600", dark: "" },
          },
          [
            a(
              "v-carousel",
              {
                attrs: {
                  cycle: "",
                  continuous: "",
                  dark: "",
                  interval: "1000",
                  "show-arrows": !1,
                  "hide-delimiter-background": "",
                  "hide-delimiters": "",
                  height: "auto",
                },
              },
              t._l(t.images, function (t, e) {
                return a(
                  "v-carousel-item",
                  { key: e, attrs: { eager: "" } },
                  [a("v-img", { attrs: { eager: "", contain: "", src: t } })],
                  1
                );
              }),
              1
            ),
          ],
          1
        );
      },
      Yt = [],
      Pt =
        (a("4e827"),
        {
          name: "Carousel",
          data: function () {
            return { images: {}, imageCounter: 0 };
          },
          mounted: function () {
            this.importAll(a("fc94"));
          },
          methods: {
            importAll: function (t) {
              var e = {},
                a = 1;
              t
                .keys()
                .sort()
                .forEach(function (n) {
                  (e[a] = t(n)), (a += 1);
                }),
                (this.images = e);
            },
          },
        }),
      Kt = Pt,
      Bt = (a("6e24"), a("5e66")),
      Ft = a("3e35"),
      Zt = Object(A["a"])(Kt, Nt, Yt, !1, null, "0cf1a484", null),
      qt = Zt.exports;
    x()(Zt, {
      VCard: bt["a"],
      VCarousel: Bt["a"],
      VCarouselItem: Ft["a"],
      VImg: Q["a"],
    });
    var Qt = a("2b64"),
      Ht = a.n(Qt),
      Ut = !1,
      zt = 2,
      Jt = 3,
      Xt = new Date("2022-03-15T19:00:00Z"),
      $t = "2022",
      te = Xt.getMonth() + 1,
      ee = Xt.getDate(),
      ae = Xt.getHours(),
      ne = Xt.getMinutes(),
      ie = ""
        .concat($t, "-")
        .concat(te, "-")
        .concat(ee, " ")
        .concat(ae, ":")
        .concat(ne, ":00"),
      se = {
        name: "About",
        components: { "app-title": ut, "app-slide": qt, "app-countdown": Ht.a },
        data: function () {
          return {
            soldOut: Ut,
            currentSeason: zt,
            upcommingSeason: Jt,
            premintDateString: ie,
            mintIsLive: !1,
            showWarningText: !1,
            mintApproaching: Xt > new Date(),
            magicEdenWLBtnText: "Buy A Token",
            magicEdenWLBtnHref:
              "/marketplace/kingdom_of_dwarves_whitelist",
            magicEdenDwarfBtnText: "Buy A Dwarf",
            magicEdenDwarfBtnHref:
              "/marketplace/kingdom_of_dwarves",
          };
        },
        beforeMount: function () {
          this.touch = matchMedia("(hover: none), (pointer: coarse)").matches;
        },
        mounted: function () {
          this.checkAndSetMintIsLive();
        },
        methods: {
          timeElapsedHandler: function () {
            (this.mintApproaching = !1), this.checkAndSetMintIsLive();
          },
          checkAndSetMintIsLive: function () {
            this.soldOut
              ? ((this.mintIsLive = !1), (this.mintApproaching = !1))
              : (this.mintIsLive = Xt.getTime() <= new Date().getTime());
          },
        },
      },
      oe = se,
      re =
        (a("6c9a"),
        a("c8f1"),
        Object(A["a"])(oe, Mt, Gt, !1, null, "27bd825a", null)),
      ce = re.exports;
    x()(re, {
      VBtn: k["a"],
      VCol: G["a"],
      VContainer: q["a"],
      VImg: Q["a"],
      VRow: Y["a"],
      VSpacer: D["a"],
    });
    var pe = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "v-container",
          { staticClass: "my-10", attrs: { fluid: "" } },
          [
            a(
              "div",
              { staticClass: "px-0 px-sm-10", attrs: { id: "roadmap" } },
              [
                a("app-title", { attrs: { title: "THE ROADMAP" } }),
                a(
                  "v-row",
                  [
                    t._l(t.timeline, function (e, n) {
                      return [
                        a(
                          "v-row",
                          {
                            key: n,
                            staticStyle: {
                              "justify-content": "center",
                              margin: "0",
                            },
                          },
                          [
                            a(
                              "div",
                              {
                                key: n,
                                staticClass: "header-container",
                                staticStyle: { width: "80%" },
                              },
                              [
                                a("h1", [t._v(t._s(e.title))]),
                                a("h4", [t._v(t._s(e.subtitle))]),
                              ]
                            ),
                            a(
                              "v-timeline",
                              {
                                attrs: {
                                  dense: t.$vuetify.breakpoint.smAndDown,
                                },
                              },
                              t._l(e.objectives, function (e, n) {
                                return a(
                                  "v-timeline-item",
                                  {
                                    key: n,
                                    attrs: {
                                      icon: e.icon,
                                      color: "black",
                                      medium: "",
                                      dark: "",
                                      "data-aos": "fade-in",
                                      "data-aos-duration": "1000",
                                    },
                                  },
                                  [
                                    a(
                                      "v-card",
                                      { staticClass: "elevation-2" },
                                      [
                                        a(
                                          "v-card-title",
                                          {
                                            class:
                                              t.$vuetify.breakpoint.xs ||
                                              t.$vuetify.breakpoint.sm
                                                ? "text-subtitle-1 text-gold"
                                                : "text-h6 text-gold",
                                          },
                                          [t._v(" " + t._s(e.title) + " ")]
                                        ),
                                        a("v-card-text", [
                                          a(
                                            "ul",
                                            t._l(e.lines, function (e, n) {
                                              return a(
                                                "li",
                                                {
                                                  key: n,
                                                  staticClass: "line-text",
                                                },
                                                [t._v(" " + t._s(e) + " ")]
                                              );
                                            }),
                                            0
                                          ),
                                        ]),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                );
                              }),
                              1
                            ),
                          ],
                          1
                        ),
                      ];
                    }),
                  ],
                  2
                ),
              ],
              1
            ),
          ]
        );
      },
      le = [],
      de = {
        name: "Roadmap",
        components: { "app-title": ut },
        data: function () {
          return {
            timeline: [
                {
                  title: "Road Map Kingdom of Dwarves",
                  subtitle: "",
                  objectives: [
                    {
                      icon: "mdi-draw",
                      title: "Q12022",
                      lines: [
                        "Private-sale ",
                        "Pre-Sale",
                        "Aggresive Marketing",
                        "Airdrop",
                        "PancakeSwap Listing",
                        "CMC & Coingecko",

                      ],
                    },
                    {
                      icon: "mdi-menu",
                      title: "Q2 2022",
                      lines: [
                        "Create meaningful partnerships with Metaverse companies",
                        "Begin the process of animating the collection",
                        "Release the 13 Kings and Realms",
                        "Release a rare King's Guard Weapon, the Direforge Blade, to equip for a few lucky dwarves!",
                        "Build out the ability for dwarf holders to interact with their dwarves on the KoD website.",
                        "Rarity of season 1 assets are revealed on the website.",
                        "Certik Audit ",
                      ],
                    },
                    {
                      icon: "mdi-currency-usd",
                      title: "Q3 2022",
                      lines: [
                        "Listing Gate.io and Houbi Global ",
                        "Announce that dwarves holders from Season 1 will earn $KOD at a higher yield rate than subsequent seasons.",
                        "Provide Arts Scholarships to NFT Kingdom Of Dwarves holders and community members.",
                        "Gather creative work from artists in the community and invite them to help build the world of KoD together.",
                        "Short animation debut and continue animation quest",
                        "Animated actions for metaverse use",
                        "Reveal the special Lore Season 2 and 3",
                        "Keep developing Armory and website for more dwarf owner interactivity",
                        "Funding is raised to build liquidity for KOD. Start the $KOD system development.",
                        "Award a second Arts Scholarship to $KOD holders and community members.",
                        "Merchandise available for purchase",
                      ],
                    },
                    {
                      icon: "mdi-palette",
                      title: "Q4 2022",
                      lines: [
                        "Short animated debut with multiple characters in a built-in 3D environment.",
                        "Goal: $KOD holders interact on Metaverse",
                        "Goal: TV show in production",
                        "Kingdom Lore includes all characters from all 8 Seasons",
                        "$KOD Token holders and NFT KOD tokens earn passive income by staking their dwarves, and Hold $KOD tokens.",
                        "first purchase NFT using binance and later to buy items in the Armory, and participate in exclusive battles",
                        "The KOD community drives decision making in Kingdom Of Dwarves",
                      ],
                    },
                  ],
                },
                // {
                //   title: "Q1 2022",
                //   subtitle: "Season 2 & 3 Drops",
                //   objectives: [
                //     {
                //       icon: "mdi-draw",
                //       title: "METAVERSE & ANIMATION",
                //       lines: [
                //         "Debut animated shorts and continue animation pursuits",
                //         "Animate actions for metaverse use",
                //       ],
                //     },
                //     {
                //       icon: "mdi-menu",
                //       title: "LORE & GAMIFICATION",
                //       lines: [
                //         "Reveal Season 2 and 3 specific Lore",
                //         "Continue developing the Armory and website for more dwarf owner interactivity",
                //       ],
                //     },
                //     {
                //       icon: "mdi-currency-usd",
                //       title: "KINGDOM CURRENCY",
                //       lines: [
                //         "Funding raised to establish liquidity for CRWN. Begin the development of the CRWN systems.",
                //       ],
                //     },
                //     {
                //       icon: "mdi-palette",
                //       title: "TOP QUALITY ART",
                //       lines: [
                //         "Award a second Art Scholarship to an NFT holder and community member.",
                //         "Merchandise available for purchase",
                //       ],
                //     },
                //   ],
                // },
                // {
                //   title: "Q2 2022",
                //   subtitle: "Season 4, 5, & 6 Drops",
                //   objectives: [
                //     {
                //       icon: "mdi-draw",
                //       title: "METAVERSE & ANIMATION",
                //       lines: [
                //         "The 3D environment for animated shorts is developed",
                //         "Additional characters rigged for animation",
                //         "Pitches to TV networks will be pursued",
                //       ],
                //     },
                //     {
                //       icon: "mdi-menu",
                //       title: "LORE & GAMIFICATION",
                //       lines: [
                //         "Reveal the new characters and lore for Seasons 4, 5, and 6",
                //         "Development of a table-top board game",
                //       ],
                //     },
                //     {
                //       icon: "mdi-currency-usd",
                //       title: "KINGDOM CURRENCY",
                //       lines: [
                //         "$CRWN is funded and available for staking and utility",
                //         "The Kingdom DAO is established where holders will have the opportunity to vote on key decisions",
                //       ],
                //     },
                //     {
                //       icon: "mdi-palette",
                //       title: "TOP QUALITY ART",
                //       lines: [
                //         "Award a third Art Scholarship to an NFT holder and community member",
                //       ],
                //     },
                //   ],
                // },
                // {
                //   title: "Q3 2022",
                //   subtitle: "Season 7 & 8 Drops",
                //   objectives: [
                //     {
                //       icon: "mdi-draw",
                //       title: "METAVERSE & ANIMATION",
                //       lines: [
                //         "Debut of animated shorts with multiple characters in a built-out 3D environment.",
                //         "Goal: Dwarf holders interact in the Metaverse",
                //         "Goal: TV show in production",
                //       ],
                //     },
                //     {
                //       icon: "mdi-menu",
                //       title: "LORE & GAMIFICATION",
                //       lines: [
                //         "Kingdom Lore encompasses all characters from all 8 Seasons",
                //       ],
                //     },
                //     {
                //       icon: "mdi-currency-usd",
                //       title: "KINGDOM CURRENCY",
                //       lines: [
                //         "NFT holders earn passive income by staking their dwarves, use $CRWN to buy items in the Armory, and participate in exclusive battles  ",
                //         "The KoD community is driving decision-making in the Kingdom DAO",
                //       ],
                //     },
                //     {
                //       icon: "mdi-palette",
                //       title: "TOP QUALITY ART",
                //       lines: [
                //         "Award a fourth Art Scholarship to an NFT holder and community member  ",
                //         "Miniature 3D models of NFTs will be available",
                //         "Announcement of the next NFT for Kingdom of Dwarves",
                //       ],
                //     },
                //   ],
                // },
              ],
          };
        },
      },
      ge = de,
      me = (a("3ea8"), a("8414")),
      fe = a("1e06"),
      ue = Object(A["a"])(ge, pe, le, !1, null, "694d30c2", null),
      he = ue.exports;
    x()(ue, {
      VCard: bt["a"],
      VCardText: At["a"],
      VCardTitle: At["b"],
      VContainer: q["a"],
      VRow: Y["a"],
      VTimeline: me["a"],
      VTimelineItem: fe["a"],
    });
    var ve = function () {
      var t = this,
      e = t.$createElement,
      a = t._self._c || e;
    return a(
      "v-container",
      {
        staticClass: "my-5",
        attrs: {
          fluid: "",
          id: "faq",
        },
      },
      [
        a("app-title", {
          attrs: {
            title: "PARTNERS",
          },
        }),
        a(
          "v-expansion-panels",
          {
            attrs: {
              multiple: "",
              dark: "",
              accordion: "",
              focusable: "",
              id: "exp-panels",
            },
            model: {
              value: t.panel,
              callback: function (e) {
                t.panel = e;
              },
              expression: "panel",
            },
          },
          t._l(t.items, function (e, n) {
            return a(
              "v-expansion-panel",
              {
                key: n,
                staticClass: "panel",
              },
              [
                a(
                  "v-expansion-panel-header",
                  {
                    staticClass: "text-left",
                  },
                  [a("h2", [t._v(" " + t._s(e.question) + " ")])]
                ),
                a("v-expansion-panel-content", [
                  a(
                    "h3",
                    {
                      staticClass: "mt-4 text-gold",
                    },
                    [t._v(t._s(e.answer))]
                  ),
                ]),
              ],
              1
            );
          }),
          1
        ),
      ],
      1
    );
      },
      be = [],
      Ae = {
        name: "Roadmap",
        components: { "app-title": ut },
        data: function () {
          return {
            panel: [],
            items: [
              
            ],
          };
        },
      },
      we = Ae,
      xe = (a("6db3"), a("cd55")),
      ye = a("49e2"),
      ke = a("c865"),
      Ce = a("0393"),
      Ie = Object(A["a"])(we, ve, be, !1, null, "31b865d3", null),
      Ee = Ie.exports;
    x()(Ie, {
      VContainer: q["a"],
      VExpansionPanel: xe["a"],
      VExpansionPanelContent: ye["a"],
      VExpansionPanelHeader: ke["a"],
      VExpansionPanels: Ce["a"],
    });
    var je = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "v-container",
          { staticClass: "my-5", attrs: { fluid: "", id: "team" } },
          [
            n(
              "v-row",
              [
                n(
                  "v-col",
                  [
                    n("app-title", { attrs: { title: "THE GUILDMASTERS" } }),
                    n("h3", { staticClass: "mb-2 px-sm-15" }, [
                      t._v(
                        " Fellow adventurers and long-time friends who have a shared love for all things fantastical. Journey with us as we create a Kingdom that is full of fantasy and fun! "
                      ),
                    ]),
                    n(
                      "v-row",
                      { attrs: { id: "guildmasters" } },
                      [
                        n(
                          "v-col",
                          {
                            staticClass: "mt-5 px-sm-3",
                            attrs: {
                              sm: "12",
                              md: "6",
                              "data-aos": "fade-in",
                              "data-aos-duration": "1000",
                            },
                          },
                          [
                            n("v-img", {
                              staticClass: "portrait",
                              attrs: {
                                "max-height": "250",
                                "max-width": "250",
                                contain: "",
                                src: a("c850"),
                              },
                            }),
                            n("v-divider", {
                              staticClass: "mx-auto my-4",
                              attrs: { inset: "", color: "white" },
                            }),
                            n("h3", { staticClass: "mb-2 text-gold" }, [
                              t._v(" GM CITRIKS "),
                            ]),
                            n(
                              "h3",
                              { staticClass: "mb-2" },
                              [
                                t._v(" aka: Jose Limon "),
                                n(
                                  "v-btn",
                                  {
                                    staticClass: "pl-0 ml-n2 pb-1",
                                    attrs: {
                                      plain: "",
                                      dark: "",
                                      href: "https://www.linkedin.com/in/limonj",
                                      target: "_blank",
                                    },
                                  },
                                  [
                                    n("v-icon", { attrs: { medium: "" } }, [
                                      t._v("mdi-linkedin"),
                                    ]),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            n("h4", { staticClass: "mb-2 px-sm-5" }, [
                              t._v(
                                " Our guild's Emmy Award-Winning, CG Artist having worked previously on Game of Thrones, Westworld, and Gears of War. "
                              ),
                            ]),
                          ],
                          1
                        ),
                        n(
                          "v-col",
                          {
                            staticClass: "mt-5 px-sm-3",
                            attrs: {
                              sm: "12",
                              md: "6",
                              "data-aos": "fade-in",
                              "data-aos-duration": "1000",
                            },
                          },
                          [
                            n("v-img", {
                              staticClass: "portrait",
                              attrs: {
                                "max-height": "250",
                                "max-width": "250",
                                contain: "",
                                src: a("6b7a"),
                              },
                            }),
                            n("v-divider", {
                              staticClass: "mx-auto my-4",
                              attrs: { inset: "", color: "white" },
                            }),
                            n("h3", { staticClass: "mb-2 text-gold" }, [
                              t._v(" GM ALOEFARMER "),
                            ]),
                            n(
                              "h3",
                              { staticClass: "mb-2" },
                              [
                                t._v(" aka: Evan Mayfield "),
                              ],
                              1
                            ),
                            n("h4", { staticClass: "mb-2 px-sm-5" }, [
                              t._v(
                                " Our guild's Academy Award-Winning Art Director with many years in the industry working with companies such as Pixar, Disney, and Sony. "
                              ),
                            ]),
                          ],
                          1
                        ),
                        n(
                          "v-col",
                          {
                            staticClass: "mt-5 px-sm-3",
                            attrs: {
                              sm: "12",
                              md: "6",
                              "data-aos": "fade-in",
                              "data-aos-duration": "1000",
                            },
                          },
                          [
                            n("v-img", {
                              staticClass: "portrait",
                              attrs: {
                                "max-height": "250",
                                "max-width": "250",
                                contain: "",
                                src: a("6517"),
                              },
                            }),
                            n("v-divider", {
                              staticClass: "mx-auto my-4",
                              attrs: { inset: "", color: "white" },
                            }),
                            n("h3", { staticClass: "mb-2 text-gold" }, [
                              t._v(" GM DOUGHY "),
                            ]),
                            n(
                              "h3",
                              { staticClass: "mb-2" },
                              [
                                t._v(" aka: Danny Pham "),
                              ],
                              1
                            ),
                            n("h4", { staticClass: "mb-2 px-sm-5" }, [
                              t._v(
                                " Our guild's lead developer who is fully engrossed in blockchain technology and trends surrounding the NFT space. "
                              ),
                            ]),
                          ],
                          1
                        ),
                        n(
                          "v-col",
                          {
                            staticClass: "mt-5 px-sm-3",
                            attrs: {
                              sm: "12",
                              md: "6",
                              "data-aos": "fade-in",
                              "data-aos-duration": "1000",
                            },
                          },
                          [
                            n("v-img", {
                              staticClass: "portrait",
                              attrs: {
                                "max-height": "250",
                                "max-width": "250",
                                contain: "",
                                src: a("a33d"),
                              },
                            }),
                            n("v-divider", {
                              staticClass: "mx-auto my-4",
                              attrs: { inset: "", color: "white" },
                            }),
                            n("h3", { staticClass: "mb-2 text-gold" }, [
                              t._v(" GM MAGEUSTA "),
                            ]),
                            n(
                              "h3",
                              { staticClass: "mb-2" },
                              [
                                t._v(" aka: Richie Yi "),
                              ],
                              1
                            ),
                            n("h4", { staticClass: "mb-2 px-sm-5" }, [
                              t._v(
                                " Our guild's developer and lover of nostalgic lore. He has delved into many role-playing games and developed a deep passion for spell-caster classes. "
                              ),
                            ]),
                          ],
                          1
                        ),
                        n(
                          "v-col",
                          {
                            staticClass: "mt-5 px-sm-3",
                            attrs: {
                              sm: "12",
                              md: "6",
                              "data-aos": "fade-in",
                              "data-aos-duration": "1000",
                            },
                          },
                          [
                            n("v-img", {
                              staticClass: "portrait",
                              attrs: {
                                "max-height": "250",
                                "max-width": "250",
                                contain: "",
                                src: a("1c1a"),
                              },
                            }),
                            n("v-divider", {
                              staticClass: "mx-auto my-4",
                              attrs: { inset: "", color: "white" },
                            }),
                            n("h3", { staticClass: "mb-2 text-gold" }, [
                              t._v(" GM TWOSHEETS "),
                            ]),
                            n(
                              "h3",
                              { staticClass: "mb-2" },
                              [
                                t._v(" aka: Thomas Farr "),
                              ],
                              1
                            ),
                            n("h4", { staticClass: "mb-2 px-sm-5" }, [
                              t._v(
                                " Our guild's developer and fellow adventurer. Spending many years playing MMORPGS, they have a soft spot for anything fantastical. "
                              ),
                            ]),
                          ],
                          1
                        ),
                        n(
                          "v-col",
                          {
                            staticClass: "mt-5 mb-10 px-sm-3",
                            attrs: {
                              sm: "12",
                              md: "6",
                              "data-aos": "fade-in",
                              "data-aos-duration": "1000",
                            },
                          },
                          [
                            n("v-img", {
                              staticClass: "portrait",
                              attrs: {
                                "max-height": "250",
                                "max-width": "250",
                                contain: "",
                                src: a("7d15"),
                              },
                            }),
                            n("v-divider", {
                              staticClass: "mx-auto my-4",
                              attrs: { inset: "", color: "white" },
                            }),
                            n("h3", { staticClass: "mb-2 text-gold" }, [
                              t._v(" GM FALCONESS "),
                            ]),
                            n("h3", { staticClass: "mb-2" }, [
                              t._v(" aka: Elizabeth Mayfield "),
                            ]),
                            n("h4", { staticClass: "mb-2 px-sm-5" }, [
                              t._v(
                                " Our guild's marketing guru and bird-of-prey lover! With a keen eye and wonderous creativity, she shapes compelling material and strategies for the Kingdom. "
                              ),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            n(
              "v-row",
              [
                n(
                  "v-col",
                  [
                    n("app-title", { attrs: { title: "CONTRIBUTORS" } }),
                    n("h3", { staticClass: "mb-2 px-sm-15" }, [
                      t._v(" Those also involved in furthering the Kingdom! "),
                    ]),
                    n(
                      "v-row",
                      [
                        n(
                          "v-col",
                          {
                            staticClass: "mt-5 px-sm-3 mx-auto",
                            attrs: { cols: "12", md: "6" },
                          },
                          [
                            n("v-img", {
                              staticClass: "portrait",
                              attrs: {
                                "max-height": "250",
                                "max-width": "250",
                                contain: "",
                                src: a("e55e"),
                              },
                            }),
                            n("v-divider", {
                              staticClass: "mx-auto my-4",
                              attrs: { inset: "", color: "white" },
                            }),
                            n("h3", { staticClass: "text-gold" }, [
                              t._v(" Mitch Gonzalez "),
                            ]),
                            n("h4", { staticClass: "mt-2" }, [
                              t._v(
                                " Our guild's VFX movie and video game industry professional. Mitch truly wields the force when it comes to visual effects. He has experience leading some of the top VFX teams as a previs supervisor and is well-versed in the animation handshake between Maya and Unreal Engine. Some of his amazing accolades and blockbuster projects include: "
                              ),
                            ]),
                            n(
                              "ul",
                              {
                                staticClass: "text-gold",
                                staticStyle: {
                                  "list-style-type": "none",
                                  "padding-left": "0",
                                  "margin-top": ".5rem",
                                },
                              },
                              [
                                n("li", [t._v("Dune (2021)")]),
                                n("li", [
                                  t._v(
                                    "Star Wars: Episode IX - The Rise of Skywalker (2019)"
                                  ),
                                ]),
                                n("li", [
                                  t._v(
                                    "Fast & Furious Presents: Hobbs & Shaw (2019)"
                                  ),
                                ]),
                                n("li", [t._v("Apex Legends (2019)")]),
                                n("li", [t._v("Gears 5 (2019)")]),
                              ]
                            ),
                            n(
                              "v-btn",
                              {
                                staticClass: "mt-1",
                                attrs: {
                                  plain: "",
                                  dark: "",
                                  href: "https://www.imdb.com/name/nm4442235/?ref_=fn_al_nm_1",
                                  target: "_blank",
                                },
                              },
                              [
                                t._v(" See more: "),
                                n("v-img", {
                                  staticStyle: { border: "0px" },
                                  attrs: {
                                    "max-height": "40",
                                    contain: "",
                                    src: a("2b24"),
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      Se = [],
      Te = { name: "Team", components: { "app-title": ut } },
      Oe = Te,
      De = (a("71a2"), Object(A["a"])(Oe, je, Se, !1, null, "1d038602", null)),
      Re = De.exports;
    x()(De, {
      VBtn: k["a"],
      VCol: G["a"],
      VContainer: q["a"],
      VDivider: C["a"],
      VIcon: I["a"],
      VImg: Q["a"],
      VRow: Y["a"],
    });
    var _e = {
        name: "Main",
        components: {
          "home-page": rt,
          "about-page": ce,
          "metaverse-page": Ot,
          "lore-page": Wt,
          "features-page": Ct,
          "roadmap-page": he,
          "faq-page": Ee,
          "team-page": Re,
        },
      },
      Le = _e,
      Ve = (a("39e1"), a("f6c4")),
      We = Object(A["a"])(Le, et, at, !1, null, "7dda8f33", null),
      Me = We.exports;
    x()(We, { VContainer: q["a"], VMain: Ve["a"] });
    var Ge = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "v-container",
          {
            staticClass: "pt-10 pb-0 py-sm-15 mt-10",
            attrs: { fluid: "", id: "priority-access" },
          },
          [
            n(
              "v-row",
              [
                n(
                  "v-col",
                  { attrs: { cols: "12" } },
                  [
                    n("app-title", { attrs: { title: "PRIORITY ACCESS" } }),
                    n("h3", { staticClass: "text-center" }, [
                      t._v(
                        " Featured here is a collection of the most prized creations. "
                      ),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
            n(
              "v-row",
              [
                n(
                  "v-container",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !t.isLoaded,
                        expression: "!isLoaded",
                      },
                    ],
                  },
                  [
                    n(
                      "div",
                      {
                        staticClass: "d-flex align-center justify-center",
                        staticStyle: {
                          height: "60vh",
                          position: "absolute",
                          left: "50%",
                          right: "50%",
                        },
                      },
                      [
                        n(
                          "v-progress-circular",
                          {
                            attrs: {
                              size:
                                t.$vuetify.breakpoint.xs ||
                                t.$vuetify.breakpoint.sm
                                  ? 160
                                  : 260,
                              indeterminate: "",
                              value: 50,
                              width: "2",
                              color: "white darken-2",
                            },
                          },
                          [
                            n("img", {
                              attrs: {
                                src: a("6fad"),
                                height:
                                  t.$vuetify.breakpoint.xs ||
                                  t.$vuetify.breakpoint.sm
                                    ? 150
                                    : 250,
                              },
                            }),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]
                ),
                t._l(t.images, function (e, a) {
                  return n(
                    "v-col",
                    {
                      key: a,
                      class: t.isLoaded ? "loaded" : "loading",
                      attrs: { cols: "12", sm: "6", md: "4" },
                    },
                    [
                      n("v-img", {
                        attrs: {
                          "max-height": 400,
                          "max-width": 400,
                          contain: "",
                          src: e,
                        },
                        on: { load: t.handleLoad },
                      }),
                      n("h3", { staticClass: "text-center mt-3" }, [
                        t._v("# " + t._s(a)),
                      ]),
                    ],
                    1
                  );
                }),
              ],
              2
            ),
          ],
          1
        );
      },
      Ne = [],
      Ye = {
        name: "Team",
        components: { "app-title": ut },
        data: function () {
          return { imageCount: 0, images: {}, isLoaded: !1 };
        },
        mounted: function () {
          this.importAll(a("c372"));
        },
        methods: {
          handleLoad: function () {
            console.log("here"),
              this.imageCount++,
              this.imageCount === this.preloadAmt && (this.isLoaded = !0);
          },
          importAll: function (t) {
            var e = {},
              a = 1;
            t.keys().forEach(function (n) {
              (e[a] = t(n)), (a += 1);
            }),
              (this.images = e);
          },
        },
        computed: {
          preloadAmt: function () {
            switch (this.$vuetify.breakpoint.name) {
              case "xs":
                return 10;
              case "sm":
                return 20;
              case "md":
                return 50;
              case "lg":
                return 50;
              case "xl":
                return 50;
              default:
                return 10;
            }
          },
        },
      },
      Pe = Ye,
      Ke = (a("fb7b"), Object(A["a"])(Pe, Ge, Ne, !1, null, "438dba7c", null)),
      Be = Ke.exports;
    x()(Ke, {
      VCol: G["a"],
      VContainer: q["a"],
      VImg: Q["a"],
      VProgressCircular: H["a"],
      VRow: Y["a"],
    });
    var Fe = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "v-container",
          {
            staticClass: "pt-10 pb-0 py-sm-15 mt-10 mb-5",
            attrs: { fluid: "", id: "protected" },
          },
          [
            a(
              "v-row",
              { attrs: { id: "main-row" } },
              [
                a(
                  "v-col",
                  { attrs: { cols: "12 px-10" } },
                  [
                    a("app-title", { attrs: { title: "PROTECTED" } }),
                    a("h3", { staticClass: "text-center" }, [
                      t._v(" Enter the password to continue. "),
                    ]),
                    a(
                      "v-form",
                      {
                        on: {
                          submit: function (e) {
                            return (
                              e.preventDefault(),
                              t.validateBeforeSubmit.apply(null, arguments)
                            );
                          },
                        },
                      },
                      [
                        a(
                          "div",
                          { staticClass: "row ma-auto" },
                          [
                            a("v-spacer"),
                            a(
                              "div",
                              {
                                staticClass:
                                  "col-12 col-sm-6 col-md-4 text-center",
                              },
                              [
                                a("v-text-field", {
                                  attrs: {
                                    label: "Password",
                                    type: "password",
                                    required: "",
                                    clearable: "",
                                    dark: "",
                                  },
                                  model: {
                                    value: t.password,
                                    callback: function (e) {
                                      t.password =
                                        "string" === typeof e ? e.trim() : e;
                                    },
                                    expression: "password",
                                  },
                                }),
                                t.error
                                  ? a(
                                      "div",
                                      {
                                        staticClass: "mb-4",
                                        staticStyle: { color: "#E57373" },
                                      },
                                      [a("h3", [t._v("Incorrect password.")])]
                                    )
                                  : t._e(),
                                a(
                                  "v-btn",
                                  {
                                    staticClass: "text-body-1 mt-2",
                                    attrs: {
                                      type: "submit",
                                      dark: "",
                                      medium: "",
                                    },
                                  },
                                  [t._v(" SUBMIT ")]
                                ),
                              ],
                              1
                            ),
                            a("v-spacer"),
                          ],
                          1
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      Ze = [],
      qe = a("e3fe"),
      Qe = a.n(qe),
      He = {
        name: "Protected",
        components: { "app-title": ut },
        data: function () {
          return { error: null, password: null };
        },
        methods: {
          validateBeforeSubmit: function () {
            "Dumbledwarf6000!" === this.password
              ? ((this.error = !1),
                Qe.a.setItem("user-password", this.password),
                aa.push("priority_access"))
              : (this.error = !0);
          },
        },
      },
      Ue = He,
      ze = (a("2b44"), a("4bd4")),
      Je = a("8654"),
      Xe = Object(A["a"])(Ue, Fe, Ze, !1, null, "645ca63c", null),
      $e = Xe.exports;
    x()(Xe, {
      VBtn: k["a"],
      VCol: G["a"],
      VContainer: q["a"],
      VForm: ze["a"],
      VRow: Y["a"],
      VSpacer: D["a"],
      VTextField: Je["a"],
    }),
      n["a"].use(tt["a"]);
    var ta = [
        { path: "/", name: "Main", component: Me },
        {
          path: "/priority_access",
          name: "PriorityAccess",
          component: Be,
          meta: { requiresAuth: !0 },
        },
        { path: "/protected", name: "Protected", component: $e },
        {
          path: "/discord",
          beforeEnter: function () {
            window.location.href = "https://discord.gg/kingdomofdwarves";
          },
        },
        { path: "*", redirect: "/" },
      ],
      ea = new tt["a"]({
        mode: "history",
        base: "/",
        routes: ta,
        scrollBehavior: function (t, e, a) {
          return a || (t.hash ? { selector: t.hash } : { x: 0, y: 0 });
        },
      });
    ea.beforeEach(function (t, e, a) {
      if (t.meta.requiresAuth) {
        var n = Qe.a.getItem("user-password");
        n && "Dumbledwarf6000!" == n ? a() : a("/protected");
      } else a();
    });
    var aa = ea,
      na = a("f5af"),
      ia = a.n(na),
      sa = (a("e829"), a("f6dd"));
    (n["a"].config.productionTip = !1),
      n["a"].use(sa["a"], { global: !0, componentId: "youtube-media" }),
      new n["a"]({
        created: function () {
          ia.a.init();
        },
        vuetify: $,
        router: aa,
        render: function (t) {
          return t(J);
        },
      }).$mount("#app");
  },
  "577e2": function (t, e, a) {
    t.exports = a.p + "img/q-airbender.b0e71909.png";
  },
  "578d": function (t, e, a) {
    t.exports = a.p + "img/3865.c6ae1ee3.png";
  },
  5998: function (t, e, a) {
    t.exports = a.p + "img/04-PurpleKing_Dwarf.16aa7a63.jpg";
  },
  "599f": function (t, e, a) {
    t.exports = a.p + "img/ZombieKing_Dwarf.19177c60.jpg";
  },
  "59b7": function (t, e, a) {
    t.exports = a.p + "img/4454.1b1a0087.png";
  },
  "59ec": function (t, e, a) {
    t.exports = a.p + "img/161.69d6dd35.png";
  },
  "5a19": function (t, e, a) {},
  "5a91": function (t, e, a) {
    t.exports = a.p + "img/364.375163ba.png";
  },
  "5c0b": function (t, e, a) {
    "use strict";
    a("9c0c");
  },
  "5c83": function (t, e, a) {
    t.exports = a.p + "img/6013.553ded74.png";
  },
  "5d21": function (t, e, a) {
    t.exports = a.p + "img/b-150.7e90758b.png";
  },
  "5f3f": function (t, e, a) {
    t.exports = a.p + "img/kod-map-with-realms.307e0c20.jpeg";
  },
  "62cf": function (t, e, a) {
    t.exports = a.p + "img/p2-560.bfbba6be.png";
  },
  6427: function (t, e, a) {
    t.exports = a.p + "img/t2-998.424b78c5.png";
  },
  6517: function (t, e, a) {
    t.exports = a.p + "img/ZombieKing_Dwarf.19177c60.jpg";
  },
  "67c2": function (t, e, a) {
    t.exports = a.p + "img/03-King Gold.2f52ed87.jpg";
  },
  "683f": function (t, e, a) {
    t.exports = a.p + "img/JACK_Skellington_3.0ab1f0a0.jpg";
  },
  "686e": function (t, e, a) {
    t.exports = a.p + "img/magic-eden.9a4b3713.png";
  },
  6884: function (t, e, a) {
    t.exports = a.p + "img/soulcrusher.75dc6d00.png";
  },
  "6ac0": function (t, e, a) {
    t.exports = a.p + "img/u2-682.db53aaff.png";
  },
  "6b7a": function (t, e, a) {
    t.exports = a.p + "img/avatar.4688b028.jpg";
  },
  "6c39": function (t, e, a) {
    "use strict";
    a("ef5c");
  },
  "6c58": function (t, e, a) {
    t.exports = a.p + "img/the-under-realms-map.e7f2edbb.jpeg";
  },
  "6c7a": function (t, e, a) {},
  "6c9a": function (t, e, a) {
    "use strict";
    a("c6b7");
  },
  "6cd3": function (t, e, a) {
    "use strict";
    a("c3e0");
  },
  "6db3": function (t, e, a) {
    "use strict";
    a("9854");
  },
  "6e24": function (t, e, a) {
    "use strict";
    a("c91c");
  },
  "6fad": function (t, e, a) {
    t.exports = a.p + "img/kod-high-420x420.bf99ab73.png";
  },
  7070: function (t, e, a) {
    t.exports = a.p + "img/o2-664.0d4205e8.png";
  },
  "71a2": function (t, e, a) {
    "use strict";
    a("c70e");
  },
  "734b": function (t, e, a) {
    t.exports = a.p + "img/dwarf-body.ce5716af.jpeg";
  },
  "75c1": function (t, e, a) {
    t.exports = a.p + "img/4422.33df0478.png";
  },
  7848: function (t, e, a) {
    t.exports = a.p + "img/solsea-small.8724ac4b.jpg";
  },
  "78e8": function (t, e) {
    t.exports =
      "data:image/png;base64,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";
  },
  "799d": function (t, e, a) {
    t.exports = a.p + "img/4108.2f144eb3.png";
  },
  "7d15": function (t, e, a) {
    t.exports = a.p + "img/falconess-dwarf.7eec06dd.png";
  },
  8050: function (t, e, a) {
    var n = {
      "./accessories.jpg": "d457",
      "./coin.png": "52ba",
      "./digitaleyes.svg": "af4a",
      "./dwarf-body.jpeg": "734b",
      "./dwarves/resolution_600/Black_Dwarf.jpg": "aa6a",
      "./dwarves/resolution_600/HalfFace_Dwarf.jpg": "3ce4",
      "./dwarves/resolution_600/InvisibleKing_Dwarf.jpg": "fe63",
      "./dwarves/resolution_600/PurpleKing_Dwarf.jpg": "3e90",
      "./dwarves/resolution_600/Scar_Dwarf.jpg": "c850",
      "./dwarves/resolution_600/ZombieKing_Dwarf.jpg": "6517",
      "./dwarves/resolution_600/airbender.jpg": "a33d",
      "./dwarves/resolution_600/avatar.jpg": "6b7a",
      "./dwarves/resolution_600/blackout.jpg": "ec78",
      "./dwarves/resolution_600/eye-slash-old-format.jpg": "f4bf",
      "./dwarves/resolution_600/falconess-dwarf.png": "7d15",
      "./dwarves/resolution_600/jack-skellington.jpg": "1c1a",
      "./dwarves/resolution_600/palpatine.png": "e55e",
      "./eye-slash-old-format.jpeg": "9786",
      "./ftx-logo.png": "dccf",
      "./imdb.png": "2b24",
      "./jewels.jpg": "dba1",
      "./kod-map-with-realms.jpeg": "5f3f",
      "./magic-eden.png": "686e",
      "./s1-crown.jpeg": "88ee",
      "./s1-shield.jpeg": "b7c4",
      "./s2-dwarf.png": "f294",
      "./s2-sneak-peek-crop-1100.png": "055c",
      "./s2-sneak-peek-crop.png": "a40d",
      "./s2-sneak-peek-mobile-2.png": "b2c5",
      "./s2-sneak-peek-mobile.png": "1ab0",
      "./solport.png": "78e8",
      "./solsea-small.jpg": "7848",
      "./solsea.svg": "2740",
      "./soulcrusher.png": "6884",
      "./spent-token.gif": "088f",
      "./the-under-realms-map.jpeg": "6c58",
      "./token-spinning.gif": "ee0e",
      "./white-hood.jpeg": "01b2",
      "./wl-token-cropped.png": "d100",
    };
    function i(t) {
      var e = s(t);
      return a(e);
    }
    function s(t) {
      if (!a.o(n, t)) {
        var e = new Error("Cannot find module '" + t + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      return n[t];
    }
    (i.keys = function () {
      return Object.keys(n);
    }),
      (i.resolve = s),
      (t.exports = i),
      (i.id = "8050");
  },
  8145: function (t, e, a) {
    t.exports = a.p + "img/i2-797.72bd143e.png";
  },
  8311: function (t, e, a) {
    t.exports = a.p + "img/305.54a98a00.png";
  },
  8453: function (t, e, a) {
    t.exports = a.p + "img/h-palpatine.995d93a2.png";
  },
  "88ee": function (t, e, a) {
    t.exports = a.p + "img/s1-crown.cd99d764.jpeg";
  },
  "893d": function (t, e, a) {
    t.exports = a.p + "img/343.e38fdf17.png";
  },
  "8ab1": function (t, e, a) {},
  "8d25": function (t, e, a) {
    t.exports = a.p + "img/q2-608.e02f65c4.png";
  },
  "8e7f": function (t, e, a) {
    t.exports = a.p + "img/EvilGold_Dwarf.fafd21fe.jpg";
  },
  "8eb1": function (t, e, a) {},
  "90e31": function (t, e, a) {
    t.exports = a.p + "img/279.7170c024.png";
  },
  "910e": function (t, e, a) {
    t.exports = a.p + "img/p-211.0e9bb02d.png";
  },
  9139: function (t, e, a) {
    t.exports = a.p + "img/4121.43778a71.png";
  },
  "950f": function (t, e, a) {
    t.exports = a.p + "img/5022.cdc86d7b.png";
  },
  "955e": function (t, e, a) {
    "use strict";
    a("a67b");
  },
  9668: function (t, e, a) {
    t.exports = a.p + "img/4082.f1065c10.png";
  },
  "96b7": function (t, e, a) {
    t.exports = a.p + "img/123.65c36a5f.png";
  },
  "96f5": function (t, e, a) {
    t.exports = a.p + "img/n2-654.891348cb.png";
  },
  9786: function (t, e, a) {
    t.exports = a.p + "img/eye-slash-old-format.d8a9037e.jpeg";
  },
  9854: function (t, e, a) {},
  "98eb": function (t, e, a) {
    t.exports = a.p + "img/127.65726b2a.png";
  },
  "99d1": function (t, e, a) {
    t.exports = a.p + "img/22.c57523fe.png";
  },
  "9a60": function (t, e, a) {
    t.exports = a.p + "img/b2-544.77ba7a86.png";
  },
  "9a7a": function (t, e, a) {
    t.exports = a.p + "media/landing-video-desktop.67ee145a.mp4";
  },
  "9c0c": function (t, e, a) {},
  a028: function (t, e, a) {
    "use strict";
    a("8ab1");
  },
  a323: function (t, e, a) {
    t.exports = a.p + "img/171.b48c1846.png";
  },
  a33d: function (t, e, a) {
    t.exports = a.p + "img/airbender.fee3f6c6.jpg";
  },
  a40d: function (t, e, a) {
    t.exports = a.p + "img/s2-sneak-peek-crop.33fca1bf.png";
  },
  a67b: function (t, e, a) {},
  a740: function (t, e, a) {
    t.exports = a.p + "img/h2-799.51d085c6.png";
  },
  a8b4: function (t, e, a) {
    t.exports = a.p + "img/4423.eb2b779d.png";
  },
  aa6a: function (t, e, a) {
    t.exports = a.p + "img/Black_Dwarf.5123ab3f.jpg";
  },
  acc5: function (t, e, a) {
    t.exports = a.p + "img/4006.2d2e14d3.png";
  },
  ace3: function (t, e, a) {
    t.exports = a.p + "img/4269.6bd5f339.png";
  },
  ad46: function (t, e, a) {
    t.exports = a.p + "img/i-482.6d8f077e.png";
  },
  af4a: function (t, e, a) {
    t.exports = a.p + "img/digitaleyes.63ba4dc0.svg";
  },
  af87: function (t, e, a) {
    t.exports = a.p + "img/f2-754.2df9bf1c.png";
  },
  b2c5: function (t, e, a) {
    t.exports = a.p + "img/s2-sneak-peek-mobile-2.259c473d.png";
  },
  b4a9: function (t, e, a) {
    t.exports = a.p + "img/u-england.20fc820a.png";
  },
  b637: function (t, e, a) {
    t.exports = a.p + "img/3946.1da2f8a1.png";
  },
  b7c4: function (t, e, a) {
    t.exports = a.p + "img/s1-shield.7cc5d050.jpeg";
  },
  b945: function (t, e, a) {
    t.exports = a.p + "img/4389.81b17f3c.png";
  },
  ba47: function (t, e, a) {
    t.exports = a.p + "img/Twitter_2.ad8b84ca.jpg";
  },
  ba74: function (t, e, a) {},
  be24: function (t, e, a) {
    "use strict";
    a("5a19");
  },
  be55: function (t, e, a) {
    t.exports = a.p + "img/4146.16c9fcc9.png";
  },
  c1d2: function (t, e, a) {
    t.exports = a.p + "img/3902.f46f96e3.png";
  },
  c2f6: function (t, e, a) {
    t.exports = a.p + "img/4027.f9a0b5a8.png";
  },
  c319: function (t, e, a) {
    t.exports = a.p + "img/58.33c066b3.png";
  },
  c372: function (t, e, a) {
    var n = {
      "./01-Black_Dwarf.jpg": "c8e7",
      "./02-388.png": "f7db",
      "./02-6001.png": "564e",
      "./02-Avatar_02.jpg": "45dd",
      "./03-King Gold.jpg": "67c2",
      "./04-PurpleKing_Dwarf.jpg": "5998",
      "./05-kingblood_3.jpg": "39a2",
      "./07-782.png": "f68c",
      "./08-826.png": "5110",
      "./1007.png": "1bb8",
      "./106 (1).png": "c38e",
      "./106.png": "ef05",
      "./110.png": "245a",
      "./123.png": "96b7",
      "./127.png": "98eb",
      "./135.png": "3444",
      "./161.png": "59ec",
      "./171.png": "a323",
      "./20.png": "02e1",
      "./207.png": "c609",
      "./22.png": "99d1",
      "./276.png": "eff8",
      "./279.png": "90e31",
      "./285.png": "3981",
      "./294.png": "1d56",
      "./299.png": "252e",
      "./305.png": "8311",
      "./341.png": "0f8a",
      "./343.png": "893d",
      "./347.png": "39e5",
      "./36.png": "207d",
      "./364.png": "5a91",
      "./367.png": "c9df",
      "./374.png": "fe48",
      "./3841.png": "28f9",
      "./3865.png": "578d",
      "./3879.png": "e293",
      "./3902.png": "c1d2",
      "./3917.png": "40da",
      "./3927.png": "40c0",
      "./3946.png": "b637",
      "./395.png": "0140",
      "./3952.png": "39ef",
      "./4006.png": "acc5",
      "./4027.png": "c2f6",
      "./4047.png": "2371",
      "./4082.png": "9668",
      "./4089.png": "5424",
      "./4105.png": "0523",
      "./4108.png": "799d",
      "./4111.png": "2e19",
      "./4121.png": "9139",
      "./4140.png": "ca10",
      "./4146.png": "be55",
      "./4152.png": "0073",
      "./4176.png": "42d8",
      "./4194.png": "07ca",
      "./4257.png": "e067",
      "./4269.png": "ace3",
      "./4312.png": "d3fe",
      "./4348.png": "0923",
      "./4355.png": "17cf",
      "./4389.png": "b945",
      "./4396.png": "369b",
      "./4422.png": "75c1",
      "./4423.png": "a8b4",
      "./4454.png": "59b7",
      "./4996.png": "fcae",
      "./5022.png": "950f",
      "./58.png": "c319",
      "./59.png": "4aac",
      "./6013.png": "5c83",
      "./6026.png": "f41b",
      "./65.png": "2f1f",
      "./687.png": "190e",
      "./705.png": "41cd",
      "./730.png": "41f6",
      "./739.png": "d72c",
      "./74.png": "de11",
      "./747.png": "4b49",
      "./748.png": "3038",
      "./759.png": "48f2",
      "./770.png": "0fe7",
      "./784.png": "d01f",
      "./865.png": "3df2",
      "./964.png": "3067",
      "./Airbender_01.jpg": "f37e",
      "./BrainScan_blue.jpg": "ff59",
      "./EvilGold_Dwarf.jpg": "8e7f",
      "./Irish.jpg": "3028",
      "./JACK_Skellington_3.jpg": "683f",
      "./King Silver.jpg": "2ee0",
      "./Palpatine_2.jpg": "d1d8",
      "./Palpatine_4.jpg": "10ac",
      "./Sailor_Dwarf.jpg": "1151",
      "./Twitter_2.jpg": "ba47",
      "./ZombieKing_Dwarf.jpg": "599f",
      "./holo-beard.png": "0ed5",
      "./kingblood_2.jpg": "4142",
      "./tribal-santa.png": "fc4a",
    };
    function i(t) {
      var e = s(t);
      return a(e);
    }
    function s(t) {
      if (!a.o(n, t)) {
        var e = new Error("Cannot find module '" + t + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      return n[t];
    }
    (i.keys = function () {
      return Object.keys(n);
    }),
      (i.resolve = s),
      (t.exports = i),
      (i.id = "c372");
  },
  c38e: function (t, e, a) {
    t.exports = a.p + "img/106 (1).d2993d5a.png";
  },
  c3e0: function (t, e, a) {},
  c53b: function (t, e, a) {
    t.exports = a.p + "img/k2-872.e39e1ac3.png";
  },
  c609: function (t, e, a) {
    t.exports = a.p + "img/207.1cbdec06.png";
  },
  c6b7: function (t, e, a) {},
  c70e: function (t, e, a) {},
  c850: function (t, e, a) {
    t.exports = a.p + "img/Scar_Dwarf.c038841e.jpg";
  },
  c8e1: function (t, e, a) {
    t.exports = a.p + "img/s-110.6a3baf0d.png";
  },
  c8e7: function (t, e, a) {
    t.exports = a.p + "img/01-Black_Dwarf.5123ab3f.jpg";
  },
  c8f1: function (t, e, a) {
    "use strict";
    a("ba74");
  },
  c91c: function (t, e, a) {},
  c96aa: function (t, e, a) {
    t.exports = a.p + "img/t2-631.debc9b6e.png";
  },
  c9df: function (t, e, a) {
    t.exports = a.p + "img/367.bb675365.png";
  },
  ca10: function (t, e, a) {
    t.exports = a.p + "img/4140.35a90e15.png";
  },
  ce95: function (t, e, a) {
    t.exports = a.p + "img/c2-547.74ae3aef.png";
  },
  cf2b: function (t, e, a) {
    var n = {
      "./accessories.jpg": "d457",
      "./coin.png": "52ba",
      "./digitaleyes.svg": "af4a",
      "./dwarf-body.jpeg": "734b",
      "./dwarves/resolution_600/Black_Dwarf.jpg": "aa6a",
      "./dwarves/resolution_600/HalfFace_Dwarf.jpg": "3ce4",
      "./dwarves/resolution_600/InvisibleKing_Dwarf.jpg": "fe63",
      "./dwarves/resolution_600/PurpleKing_Dwarf.jpg": "3e90",
      "./dwarves/resolution_600/Scar_Dwarf.jpg": "c850",
      "./dwarves/resolution_600/ZombieKing_Dwarf.jpg": "6517",
      "./dwarves/resolution_600/airbender.jpg": "a33d",
      "./dwarves/resolution_600/avatar.jpg": "6b7a",
      "./dwarves/resolution_600/blackout.jpg": "ec78",
      "./dwarves/resolution_600/eye-slash-old-format.jpg": "f4bf",
      "./dwarves/resolution_600/falconess-dwarf.png": "7d15",
      "./dwarves/resolution_600/jack-skellington.jpg": "1c1a",
      "./dwarves/resolution_600/palpatine.png": "e55e",
      "./eye-slash-old-format.jpeg": "9786",
      "./ftx-logo.png": "dccf",
      "./imdb.png": "2b24",
      "./jewels.jpg": "dba1",
      "./kod-map-with-realms.jpeg": "5f3f",
      "./magic-eden.png": "686e",
      "./s1-crown.jpeg": "88ee",
      "./s1-shield.jpeg": "b7c4",
      "./s2-dwarf.png": "f294",
      "./s2-sneak-peek-crop-1100.png": "055c",
      "./s2-sneak-peek-crop.png": "a40d",
      "./s2-sneak-peek-mobile-2.png": "b2c5",
      "./s2-sneak-peek-mobile.png": "1ab0",
      "./solport.png": "78e8",
      "./solsea-small.jpg": "7848",
      "./solsea.svg": "2740",
      "./soulcrusher.png": "6884",
      "./spent-token.gif": "088f",
      "./the-under-realms-map.jpeg": "6c58",
      "./token-spinning.gif": "ee0e",
      "./white-hood.jpeg": "01b2",
      "./wl-token-cropped.png": "d100",
    };
    function i(t) {
      var e = s(t);
      return a(e);
    }
    function s(t) {
      if (!a.o(n, t)) {
        var e = new Error("Cannot find module '" + t + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      return n[t];
    }
    (i.keys = function () {
      return Object.keys(n);
    }),
      (i.resolve = s),
      (t.exports = i),
      (i.id = "cf2b");
  },
  d01f: function (t, e, a) {
    t.exports = a.p + "img/784.b2c0952b.png";
  },
  d0b1: function (t, e, a) {
    "use strict";
    a("3c56");
  },
  d100: function (t, e, a) {
    t.exports = a.p + "img/wl-token-cropped.05107fdc.png";
  },
  d178: function (t, e, a) {
    t.exports = a.p + "img/s2-707.ce6b2d4f.png";
  },
  d1d8: function (t, e, a) {
    t.exports = a.p + "img/Palpatine_2.7c244927.jpg";
  },
  d3fe: function (t, e, a) {
    t.exports = a.p + "img/4312.8753da54.png";
  },
  d457: function (t, e, a) {
    t.exports = a.p + "img/accessories.3c23ff09.jpg";
  },
  d5ae: function (t, e, a) {
    t.exports = a.p + "img/g2-795.d9bd954f.png";
  },
  d72c: function (t, e, a) {
    t.exports = a.p + "img/739.51461cb3.png";
  },
  da29: function (t, e, a) {
    "use strict";
    a("1cad");
  },
  dba1: function (t, e, a) {
    t.exports = a.p + "img/jewels.e8615ae1.jpg";
  },
  dc92: function (t, e, a) {
    t.exports = a.p + "img/k-320.8e6c67b2.png";
  },
  dccf: function (t, e) {
    t.exports =
      "data:image/png;base64,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";
  },
  de11: function (t, e, a) {
    t.exports = a.p + "img/74.919b39f4.png";
  },
  df10: function (t, e, a) {
    t.exports = a.p + "img/a2-515.9f3ecf85.png";
  },
  dfdb: function (t, e, a) {
    t.exports = a.p + "img/m2-778.59106f7a.png";
  },
  e067: function (t, e, a) {
    t.exports = a.p + "img/4257.ce2d29de.png";
  },
  e293: function (t, e, a) {
    t.exports = a.p + "img/3879.9374b8ca.png";
  },
  e51a: function (t, e, a) {},
  e55e: function (t, e, a) {
    t.exports = a.p + "img/palpatine.995d93a2.png";
  },
  e93a: function (t, e, a) {
    t.exports = a.p + "img/e-147.642011ed.png";
  },
  ec78: function (t, e, a) {
    t.exports = a.p + "img/blackout.c010916c.jpg";
  },
  ed9d: function (t, e, a) {
    t.exports = a.p + "img/t-102.a2531fe3.png";
  },
  ee0e: function (t, e, a) {
    t.exports = a.p + "img/token-spinning.92c6aabb.gif";
  },
  ef05: function (t, e, a) {
    t.exports = a.p + "img/106.6d9e9bbd.png";
  },
  ef5c: function (t, e, a) {},
  eff8: function (t, e, a) {
    t.exports = a.p + "img/276.d51a51f6.png";
  },
  f073: function (t, e, a) {
    t.exports = a.p + "img/m-jack-skellington.7a4414e1.png";
  },
  f294: function (t, e, a) {
    t.exports = a.p + "img/s2-dwarf.b3c6b79e.png";
  },
  f37e: function (t, e, a) {
    t.exports = a.p + "img/Airbender_01.5c430ba6.jpg";
  },
  f3c6: function (t, e, a) {
    t.exports = a.p + "img/r-14.80364cea.png";
  },
  f41b: function (t, e, a) {
    t.exports = a.p + "img/6026.09b84499.png";
  },
  f4bf: function (t, e, a) {
    t.exports = a.p + "img/eye-slash-old-format.818891cf.jpg";
  },
  f68c: function (t, e, a) {
    t.exports = a.p + "img/07-782.3adcbcb5.png";
  },
  f7db: function (t, e, a) {
    t.exports = a.p + "img/02-388.625b28d1.png";
  },
  fb7b: function (t, e, a) {
    "use strict";
    a("8eb1");
  },
  fc4a: function (t, e, a) {
    t.exports = a.p + "img/tribal-santa.2446cf02.png";
  },
  fc94: function (t, e, a) {
    var n = {
      "./a-473.png": "4c12",
      "./a2-515.png": "df10",
      "./b-150.png": "5d21",
      "./b2-544.png": "9a60",
      "./c-247.png": "363c",
      "./c2-547.png": "ce95",
      "./d-avatar.png": "0edc",
      "./d2-558.png": "43f4",
      "./e-147.png": "e93a",
      "./e2-979.png": "2ea0",
      "./f-95.png": "2a25",
      "./f2-754.png": "af87",
      "./g-83.png": "0449",
      "./g2-795.png": "d5ae",
      "./h-palpatine.png": "8453",
      "./h2-799.png": "a740",
      "./i-482.png": "ad46",
      "./i2-797.png": "8145",
      "./j-310.png": "0c9d",
      "./j2-620.png": "1321",
      "./k-320.png": "dc92",
      "./k2-872.png": "c53b",
      "./l-485.png": "234c",
      "./l2-874.png": "33ef",
      "./m-jack-skellington.png": "f073",
      "./m2-778.png": "dfdb",
      "./n-493.png": "26b1",
      "./n2-654.png": "96f5",
      "./o-322.png": "288c",
      "./o2-664.png": "7070",
      "./p-211.png": "910e",
      "./p2-560.png": "62cf",
      "./q-airbender.png": "577e2",
      "./q2-608.png": "8d25",
      "./r-14.png": "f3c6",
      "./r2-696.png": "017d",
      "./s-110.png": "c8e1",
      "./s2-707.png": "d178",
      "./t-102.png": "ed9d",
      "./t2-631.png": "c96aa",
      "./t2-998.png": "6427",
      "./u-england.png": "b4a9",
      "./u2-682.png": "6ac0",
    };
    function i(t) {
      var e = s(t);
      return a(e);
    }
    function s(t) {
      if (!a.o(n, t)) {
        var e = new Error("Cannot find module '" + t + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      return n[t];
    }
    (i.keys = function () {
      return Object.keys(n);
    }),
      (i.resolve = s),
      (t.exports = i),
      (i.id = "fc94");
  },
  fcae: function (t, e, a) {
    t.exports = a.p + "img/4996.7eec06dd.png";
  },
  fe48: function (t, e, a) {
    t.exports = a.p + "img/374.fa8058b8.png";
  },
  fe63: function (t, e, a) {
    t.exports = a.p + "img/InvisibleKing_Dwarf.7a41911f.jpg";
  },
  ff59: function (t, e, a) {
    t.exports = a.p + "img/BrainScan_blue.60656965.jpg";
  },
});
//# sourceMappingURL=app.b52cfbbd.js.map
