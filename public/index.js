(() => {
    var t = {
            806: function (t, e, r) {
                "use strict";
                var n =
                        (this && this.__awaiter) ||
                        function (t, e, r, n) {
                            return new (r || (r = Promise))(function (o, i) {
                                function s(t) {
                                    try {
                                        c(n.next(t));
                                    } catch (t) {
                                        i(t);
                                    }
                                }
                                function a(t) {
                                    try {
                                        c(n.throw(t));
                                    } catch (t) {
                                        i(t);
                                    }
                                }
                                function c(t) {
                                    var e;
                                    t.done
                                        ? o(t.value)
                                        : ((e = t.value),
                                          e instanceof r
                                              ? e
                                              : new r(function (t) {
                                                    t(e);
                                                })).then(s, a);
                                }
                                c((n = n.apply(t, e || [])).next());
                            });
                        },
                    o =
                        (this && this.__generator) ||
                        function (t, e) {
                            var r,
                                n,
                                o,
                                i = {
                                    label: 0,
                                    sent: function () {
                                        if (1 & o[0]) throw o[1];
                                        return o[1];
                                    },
                                    trys: [],
                                    ops: [],
                                },
                                s = Object.create(
                                    ("function" == typeof Iterator
                                        ? Iterator
                                        : Object
                                    ).prototype
                                );
                            return (
                                (s.next = a(0)),
                                (s.throw = a(1)),
                                (s.return = a(2)),
                                "function" == typeof Symbol &&
                                    (s[Symbol.iterator] = function () {
                                        return this;
                                    }),
                                s
                            );
                            function a(a) {
                                return function (c) {
                                    return (function (a) {
                                        if (r)
                                            throw new TypeError(
                                                "Generator is already executing."
                                            );
                                        for (
                                            ;
                                            s && ((s = 0), a[0] && (i = 0)), i;

                                        )
                                            try {
                                                if (
                                                    ((r = 1),
                                                    n &&
                                                        (o =
                                                            2 & a[0]
                                                                ? n.return
                                                                : a[0]
                                                                  ? n.throw ||
                                                                    ((o =
                                                                        n.return) &&
                                                                        o.call(
                                                                            n
                                                                        ),
                                                                    0)
                                                                  : n.next) &&
                                                        !(o = o.call(n, a[1]))
                                                            .done)
                                                )
                                                    return o;
                                                switch (
                                                    ((n = 0),
                                                    o &&
                                                        (a = [
                                                            2 & a[0],
                                                            o.value,
                                                        ]),
                                                    a[0])
                                                ) {
                                                    case 0:
                                                    case 1:
                                                        o = a;
                                                        break;
                                                    case 4:
                                                        return (
                                                            i.label++,
                                                            {
                                                                value: a[1],
                                                                done: !1,
                                                            }
                                                        );
                                                    case 5:
                                                        i.label++,
                                                            (n = a[1]),
                                                            (a = [0]);
                                                        continue;
                                                    case 7:
                                                        (a = i.ops.pop()),
                                                            i.trys.pop();
                                                        continue;
                                                    default:
                                                        if (
                                                            !(
                                                                (o =
                                                                    (o = i.trys)
                                                                        .length >
                                                                        0 &&
                                                                    o[
                                                                        o.length -
                                                                            1
                                                                    ]) ||
                                                                (6 !== a[0] &&
                                                                    2 !== a[0])
                                                            )
                                                        ) {
                                                            i = 0;
                                                            continue;
                                                        }
                                                        if (
                                                            3 === a[0] &&
                                                            (!o ||
                                                                (a[1] > o[0] &&
                                                                    a[1] <
                                                                        o[3]))
                                                        ) {
                                                            i.label = a[1];
                                                            break;
                                                        }
                                                        if (
                                                            6 === a[0] &&
                                                            i.label < o[1]
                                                        ) {
                                                            (i.label = o[1]),
                                                                (o = a);
                                                            break;
                                                        }
                                                        if (
                                                            o &&
                                                            i.label < o[2]
                                                        ) {
                                                            (i.label = o[2]),
                                                                i.ops.push(a);
                                                            break;
                                                        }
                                                        o[2] && i.ops.pop(),
                                                            i.trys.pop();
                                                        continue;
                                                }
                                                a = e.call(t, i);
                                            } catch (t) {
                                                (a = [6, t]), (n = 0);
                                            } finally {
                                                r = o = 0;
                                            }
                                        if (5 & a[0]) throw a[1];
                                        return {
                                            value: a[0] ? a[1] : void 0,
                                            done: !0,
                                        };
                                    })([a, c]);
                                };
                            }
                        },
                    i =
                        (this && this.__importDefault) ||
                        function (t) {
                            return t && t.__esModule ? t : { default: t };
                        };
                Object.defineProperty(e, "__esModule", { value: !0 });
                var s = r(896),
                    a = i(r(928)),
                    c = r(935),
                    u = r(81),
                    p = r(932);
                !(function () {
                    var t = this;
                    s.promises
                        .readFile(
                            a.default.join(process.cwd(), "config.json"),
                            "utf-8"
                        )
                        .then(function (t) {
                            var e = JSON.parse(t),
                                r =
                                    parseInt(e.rootHost.split(/:/, 2)[1], 10) ||
                                    80;
                            (0, u.runServer)(r, e);
                        })
                        .catch(function (e) {
                            return n(t, void 0, void 0, function () {
                                return o(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            return (
                                                (0, c.log)(
                                                    "Error reading config file: ".concat(
                                                        e.message
                                                    ),
                                                    "Error"
                                                ),
                                                [
                                                    4,
                                                    s.promises.writeFile(
                                                        a.default.join(
                                                            process.cwd(),
                                                            "config.json"
                                                        ),
                                                        '{"version":"'.concat(
                                                            process.env
                                                                .npm_package_version,
                                                            '","rootHost":"localhost","childHost":[]}'
                                                        )
                                                    ),
                                                ]
                                            );
                                        case 1:
                                            return (
                                                t.sent(), (0, p.exit)(1), [2]
                                            );
                                    }
                                });
                            });
                        });
                })();
            },
            206: function (t, e, r) {
                "use strict";
                var n =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.checkPing = function (t) {
                        return new Promise(function (e) {
                            return o.default.sys.probe(t, function (t) {
                                e(t || !1);
                            });
                        });
                    }),
                    (e.redirectServer = function (t, e, r) {
                        (0, i.log)(
                            "Redirecting to "
                                .concat(e)
                                .concat(r ? "/" + r : ""),
                            "Debug"
                        ),
                            t.writeHead(302, {
                                Location: "http://"
                                    .concat(e)
                                    .concat(r ? "/" + r : ""),
                            }),
                            t.end();
                    });
                var o = n(r(113)),
                    i = r(935);
            },
            81: function (t, e, r) {
                "use strict";
                var n =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.runServer = function (t, e) {
                        i.default
                            .createServer(function (t, r) {
                                t.setEncoding("utf-8");
                                var n = (0, u.parseRequest)(t),
                                    i = n.url.replace(/^\//, "").split("?", 2),
                                    l = i[0],
                                    h = i[1],
                                    f = h
                                        ? h.split("&").reduce(function (t, e) {
                                              var r = e.split("="),
                                                  n = r[0],
                                                  o = r[1];
                                              return (t[n] = o), t;
                                          }, {})
                                        : {};
                                if (
                                    ((0, c.log)(
                                        ""
                                            .concat(n.Host, "/")
                                            .concat(l, " : ")
                                            .concat(JSON.stringify(f)),
                                        "Debug"
                                    ),
                                    n.Host === e.rootHost)
                                )
                                    return "" === l
                                        ? (r.writeHead(303, {
                                              "Content-Type": "text/html",
                                          }),
                                          void r.end(
                                              '<html><head><meta http-equiv="refresh" content="0;url=/index.html"></head></html>'
                                          ))
                                        : "api/redirect" === l
                                          ? (r.writeHead(200, {
                                                "Content-Type":
                                                    "text/event-stream",
                                                Connection: "keep-alive",
                                                "Cache-Control": "no-cache",
                                            }),
                                            r.write("data: connected\n\n"),
                                            void setInterval(function () {
                                                (0, p.checkPing)(
                                                    f.host.split(/:/, 2)[0]
                                                )
                                                    .then(function (t) {
                                                        t
                                                            ? r.write(
                                                                  "data: redirect\n\n"
                                                              )
                                                            : r.write(
                                                                  "data: ping\n\n"
                                                              );
                                                    })
                                                    .catch(function (t) {
                                                        r.writeHead(500, {
                                                            "Content-Type":
                                                                "text/plain",
                                                        }),
                                                            r.end(
                                                                "Internal Server Error"
                                                            ),
                                                            (0, c.log)(
                                                                "Error pinging host: ".concat(
                                                                    t.message
                                                                ),
                                                                "Error"
                                                            );
                                                    });
                                            }, 5e3))
                                          : o.default.existsSync(
                                                  s.default.join(
                                                      process.cwd(),
                                                      "resources",
                                                      l
                                                  )
                                              )
                                            ? void (0, a.getHTML)(
                                                  s.default.join(
                                                      process.cwd(),
                                                      "resources",
                                                      l
                                                  )
                                              )
                                                  .then(function (t) {
                                                      r.end(t);
                                                  })
                                                  .catch(function (t) {
                                                      r.writeHead(500, {
                                                          "Content-Type":
                                                              "text/plain",
                                                      }),
                                                          r.end(
                                                              "Internal Server Error"
                                                          ),
                                                          (0, c.log)(
                                                              "Error reading file: ".concat(
                                                                  t.message
                                                              ),
                                                              "Error"
                                                          );
                                                  })
                                            : (r.writeHead(404, {
                                                  "Content-Type": "text/plain",
                                              }),
                                              void r.end("Not Found"));
                                e.childHost.some(function (t) {
                                    return t === n.Host;
                                })
                                    ? (0, p.checkPing)(n.Host.split(":", 2)[0])
                                          .then(function (t) {
                                              t
                                                  ? (0, p.redirectServer)(
                                                        r,
                                                        n.Host,
                                                        l
                                                    )
                                                  : (0, p.redirectServer)(
                                                        r,
                                                        e.rootHost,
                                                        "fallback.html?host="
                                                            .concat(n.Host)
                                                            .concat(
                                                                "" !== l
                                                                    ? "&path=" +
                                                                          l
                                                                    : ""
                                                            )
                                                    );
                                          })
                                          .catch(function (t) {
                                              r.writeHead(500, {
                                                  "Content-Type": "text/plain",
                                              }),
                                                  r.end(
                                                      "Internal Server Error"
                                                  ),
                                                  (0, c.log)(
                                                      "Error pinging host: ".concat(
                                                          t.message
                                                      ),
                                                      "Error"
                                                  );
                                          })
                                    : (r.writeHead(404, {
                                          "Content-Type": "text/plain",
                                      }),
                                      r.end("Not Found"));
                            })
                            .listen(t),
                            (0, c.log)("Server is running on port ".concat(t));
                    });
                var o = n(r(896)),
                    i = n(r(611)),
                    s = n(r(928)),
                    a = r(341),
                    c = r(935),
                    u = r(38),
                    p = r(206);
            },
            341: function (t, e, r) {
                "use strict";
                var n =
                        (this && this.__awaiter) ||
                        function (t, e, r, n) {
                            return new (r || (r = Promise))(function (o, i) {
                                function s(t) {
                                    try {
                                        c(n.next(t));
                                    } catch (t) {
                                        i(t);
                                    }
                                }
                                function a(t) {
                                    try {
                                        c(n.throw(t));
                                    } catch (t) {
                                        i(t);
                                    }
                                }
                                function c(t) {
                                    var e;
                                    t.done
                                        ? o(t.value)
                                        : ((e = t.value),
                                          e instanceof r
                                              ? e
                                              : new r(function (t) {
                                                    t(e);
                                                })).then(s, a);
                                }
                                c((n = n.apply(t, e || [])).next());
                            });
                        },
                    o =
                        (this && this.__generator) ||
                        function (t, e) {
                            var r,
                                n,
                                o,
                                i = {
                                    label: 0,
                                    sent: function () {
                                        if (1 & o[0]) throw o[1];
                                        return o[1];
                                    },
                                    trys: [],
                                    ops: [],
                                },
                                s = Object.create(
                                    ("function" == typeof Iterator
                                        ? Iterator
                                        : Object
                                    ).prototype
                                );
                            return (
                                (s.next = a(0)),
                                (s.throw = a(1)),
                                (s.return = a(2)),
                                "function" == typeof Symbol &&
                                    (s[Symbol.iterator] = function () {
                                        return this;
                                    }),
                                s
                            );
                            function a(a) {
                                return function (c) {
                                    return (function (a) {
                                        if (r)
                                            throw new TypeError(
                                                "Generator is already executing."
                                            );
                                        for (
                                            ;
                                            s && ((s = 0), a[0] && (i = 0)), i;

                                        )
                                            try {
                                                if (
                                                    ((r = 1),
                                                    n &&
                                                        (o =
                                                            2 & a[0]
                                                                ? n.return
                                                                : a[0]
                                                                  ? n.throw ||
                                                                    ((o =
                                                                        n.return) &&
                                                                        o.call(
                                                                            n
                                                                        ),
                                                                    0)
                                                                  : n.next) &&
                                                        !(o = o.call(n, a[1]))
                                                            .done)
                                                )
                                                    return o;
                                                switch (
                                                    ((n = 0),
                                                    o &&
                                                        (a = [
                                                            2 & a[0],
                                                            o.value,
                                                        ]),
                                                    a[0])
                                                ) {
                                                    case 0:
                                                    case 1:
                                                        o = a;
                                                        break;
                                                    case 4:
                                                        return (
                                                            i.label++,
                                                            {
                                                                value: a[1],
                                                                done: !1,
                                                            }
                                                        );
                                                    case 5:
                                                        i.label++,
                                                            (n = a[1]),
                                                            (a = [0]);
                                                        continue;
                                                    case 7:
                                                        (a = i.ops.pop()),
                                                            i.trys.pop();
                                                        continue;
                                                    default:
                                                        if (
                                                            !(
                                                                (o =
                                                                    (o = i.trys)
                                                                        .length >
                                                                        0 &&
                                                                    o[
                                                                        o.length -
                                                                            1
                                                                    ]) ||
                                                                (6 !== a[0] &&
                                                                    2 !== a[0])
                                                            )
                                                        ) {
                                                            i = 0;
                                                            continue;
                                                        }
                                                        if (
                                                            3 === a[0] &&
                                                            (!o ||
                                                                (a[1] > o[0] &&
                                                                    a[1] <
                                                                        o[3]))
                                                        ) {
                                                            i.label = a[1];
                                                            break;
                                                        }
                                                        if (
                                                            6 === a[0] &&
                                                            i.label < o[1]
                                                        ) {
                                                            (i.label = o[1]),
                                                                (o = a);
                                                            break;
                                                        }
                                                        if (
                                                            o &&
                                                            i.label < o[2]
                                                        ) {
                                                            (i.label = o[2]),
                                                                i.ops.push(a);
                                                            break;
                                                        }
                                                        o[2] && i.ops.pop(),
                                                            i.trys.pop();
                                                        continue;
                                                }
                                                a = e.call(t, i);
                                            } catch (t) {
                                                (a = [6, t]), (n = 0);
                                            } finally {
                                                r = o = 0;
                                            }
                                        if (5 & a[0]) throw a[1];
                                        return {
                                            value: a[0] ? a[1] : void 0,
                                            done: !0,
                                        };
                                    })([a, c]);
                                };
                            }
                        };
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.getHTML = function (t) {
                        return n(this, void 0, void 0, function () {
                            return o(this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        return [
                                            4,
                                            i.promises
                                                .readFile(t, "utf-8")
                                                .then(function (t) {
                                                    return t;
                                                }),
                                        ];
                                    case 1:
                                        return [2, e.sent()];
                                }
                            });
                        });
                    });
                var i = r(896);
            },
            935: (t, e) => {
                "use strict";
                function r(t, e) {
                    void 0 === e && (e = "Info");
                    for (
                        var r = new Date(),
                            n = ("00" + r.getHours()).slice(-2),
                            o = ("00" + r.getMinutes()).slice(-2),
                            i = ("00" + r.getSeconds()).slice(-2),
                            s = 0,
                            a = t.split("\n");
                        s < a.length;
                        s++
                    ) {
                        var c = a[s];
                        console.log(
                            "["
                                .concat(n, ":")
                                .concat(o, ":")
                                .concat(i, "] [")
                                .concat(e, "] ")
                                .concat(c)
                        );
                    }
                }
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.log = r),
                    (e.logHTML = function (t) {
                        for (
                            var e = ""
                                    .concat(t.method, " ")
                                    .concat(t.url, " HTTP/")
                                    .concat(t.httpVersion, "\n"),
                                n = void 0,
                                o = 0,
                                i = t.rawHeaders;
                            o < i.length;
                            o++
                        ) {
                            var s = i[o];
                            void 0 === n
                                ? (n = s)
                                : ((e += "".concat(n, ": ").concat(s, "\n")),
                                  (n = void 0));
                        }
                        e += "\n";
                        var a = "";
                        t.on("data", function (t) {
                            return (a += t);
                        }),
                            t.on("end", function () {
                                e += a;
                            }),
                            r(e);
                    });
            },
            38: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.parseRequest = function (t) {
                        for (
                            var e = {
                                    method: t.method || "",
                                    url: t.url || "",
                                    httpVersion: t.httpVersion || "",
                                },
                                r = void 0,
                                n = 0,
                                o = t.rawHeaders;
                            n < o.length;
                            n++
                        ) {
                            var i = o[n];
                            void 0 === r ? (r = i) : ((e[r] = i), (r = void 0));
                        }
                        var s = "";
                        return (
                            t.on("data", function (t) {
                                return (s += t);
                            }),
                            t.on("end", function () {
                                e.body += s;
                            }),
                            e
                        );
                    });
            },
            113: (t, e, r) => {
                var n = {};
                (n.sys = r(9)), (n.promise = r(973)), (t.exports = n);
            },
            55: (t, e, r) => {
                "use strict";
                var n = r(23),
                    o = r(459),
                    i = r(394),
                    s = r(447);
                function a() {}
                (a.isLinux = function (t) {
                    return ["aix", "android", "linux"].indexOf(t) >= 0;
                }),
                    (a.isMacOS = function (t) {
                        return ["darwin", "freebsd"].indexOf(t) >= 0;
                    }),
                    (a.isWindow = function (t) {
                        return t && null !== t.match(/^win/);
                    }),
                    (a.isPlatformSupport = function (t) {
                        return (
                            this.isWindow(t) ||
                            this.isLinux(t) ||
                            this.isMacOS(t)
                        );
                    }),
                    (a.getExecutablePath = function (t, e) {
                        if (!this.isPlatformSupport(t))
                            throw new Error(
                                n.format("Platform |%s| is not support", t)
                            );
                        var r = null;
                        return (
                            "aix" === t
                                ? (r = "/usr/sbin/ping")
                                : a.isLinux(t)
                                  ? (r = e ? "ping6" : "ping")
                                  : a.isWindow(t)
                                    ? (r =
                                          process.env.SystemRoot +
                                          "/system32/ping.exe")
                                    : a.isMacOS(t) &&
                                      (r = e ? "/sbin/ping6" : "/sbin/ping"),
                            r
                        );
                    }),
                    (a.createBuilder = function (t) {
                        if (!this.isPlatformSupport(t))
                            throw new Error(
                                n.format("Platform |%s| is not support", t)
                            );
                        var e = null;
                        return (
                            a.isLinux(t)
                                ? (e = o)
                                : a.isWindow(t)
                                  ? (e = s)
                                  : a.isMacOS(t) && (e = i),
                            e
                        );
                    }),
                    (t.exports = a);
            },
            459: (t, e, r) => {
                "use strict";
                var n = r(23),
                    o = {},
                    i = {
                        numeric: !0,
                        timeout: 2,
                        deadline: !1,
                        min_reply: 1,
                        v6: !1,
                        sourceAddr: "",
                        packetSize: 56,
                        extra: [],
                    };
                (o.getCommandArguments = function (t, e) {
                    var r = e || {},
                        o = [];
                    return (
                        [
                            "numeric",
                            "timeout",
                            "deadline",
                            "min_reply",
                            "v6",
                            "sourceAddr",
                            "extra",
                            "packetSize",
                        ].forEach(function (t) {
                            "boolean" != typeof r[t] && (r[t] = r[t] || i[t]);
                        }),
                        r.numeric && o.push("-n"),
                        r.timeout &&
                            (o = o.concat(["-W", n.format("%d", r.timeout)])),
                        r.deadline &&
                            (o = o.concat(["-w", n.format("%d", r.deadline)])),
                        r.min_reply &&
                            (o = o.concat(["-c", n.format("%d", r.min_reply)])),
                        r.sourceAddr &&
                            (o = o.concat([
                                "-I",
                                n.format("%s", r.sourceAddr),
                            ])),
                        r.packetSize &&
                            (o = o.concat([
                                "-s",
                                n.format("%d", r.packetSize),
                            ])),
                        r.extra && (o = o.concat(r.extra)),
                        o.push(t),
                        o
                    );
                }),
                    (o.getSpawnOptions = function () {
                        return {
                            shell: !1,
                            env: Object.assign(process.env, { LANG: "C" }),
                        };
                    }),
                    (t.exports = o);
            },
            394: (t, e, r) => {
                "use strict";
                var n = r(23),
                    o = {},
                    i = {
                        numeric: !0,
                        timeout: 2,
                        deadline: !1,
                        min_reply: 1,
                        v6: !1,
                        sourceAddr: "",
                        packetSize: 56,
                        extra: [],
                    };
                (o.getCommandArguments = function (t, e) {
                    var r = e || {},
                        o = [];
                    if (
                        ([
                            "numeric",
                            "timeout",
                            "deadline",
                            "min_reply",
                            "v6",
                            "sourceAddr",
                            "extra",
                            "packetSize",
                        ].forEach(function (t) {
                            "boolean" != typeof r[t] && (r[t] = r[t] || i[t]);
                        }),
                        r.numeric && o.push("-n"),
                        r.timeout)
                    ) {
                        if (e.v6)
                            throw new Error(
                                "There is no timeout option on ping6"
                            );
                        o = o.concat(["-W", n.format("%d", 1e3 * r.timeout)]);
                    }
                    return (
                        r.deadline &&
                            (o = o.concat(["-t", n.format("%d", r.deadline)])),
                        r.min_reply &&
                            (o = o.concat(["-c", n.format("%d", r.min_reply)])),
                        r.sourceAddr &&
                            (o = o.concat([
                                "-S",
                                n.format("%s", r.sourceAddr),
                            ])),
                        r.packetSize &&
                            (o = o.concat([
                                "-s",
                                n.format("%d", r.packetSize),
                            ])),
                        r.extra && (o = o.concat(r.extra)),
                        o.push(t),
                        o
                    );
                }),
                    (o.getSpawnOptions = function () {
                        return {};
                    }),
                    (t.exports = o);
            },
            447: (t, e, r) => {
                "use strict";
                var n = r(23),
                    o = {},
                    i = {
                        numeric: !0,
                        timeout: 5,
                        min_reply: 1,
                        v6: !1,
                        sourceAddr: "",
                        packetSize: 32,
                        extra: [],
                    };
                (o.getCommandArguments = function (t, e) {
                    var r = e || {},
                        o = [];
                    if (
                        ([
                            "numeric",
                            "timeout",
                            "min_reply",
                            "v6",
                            "sourceAddr",
                            "extra",
                            "packetSize",
                        ].forEach(function (t) {
                            "boolean" != typeof r[t] && (r[t] = r[t] || i[t]);
                        }),
                        o.push(r.v6 ? "-6" : "-4"),
                        r.numeric || o.push("-a"),
                        r.timeout &&
                            (o = o.concat([
                                "-w",
                                n.format("%d", 1e3 * r.timeout),
                            ])),
                        r.deadline)
                    )
                        throw new Error(
                            "There is no deadline option on windows"
                        );
                    return (
                        r.min_reply &&
                            (o = o.concat(["-n", n.format("%d", r.min_reply)])),
                        r.sourceAddr &&
                            (o = o.concat([
                                "-S",
                                n.format("%s", r.sourceAddr),
                            ])),
                        r.packetSize &&
                            (o = o.concat([
                                "-l",
                                n.format("%d", r.packetSize),
                            ])),
                        r.extra && (o = o.concat(r.extra)),
                        o.push(t),
                        o
                    );
                }),
                    (o.getSpawnOptions = function () {
                        return { windowsHide: !0 };
                    }),
                    (t.exports = o);
            },
            424: (t) => {
                "use strict";
                function e(t, e) {
                    (this._state = 0),
                        (this._response = {
                            inputHost: t,
                            host: "unknown",
                            alive: !1,
                            output: "unknown",
                            time: "unknown",
                            times: [],
                            min: "unknown",
                            max: "unknown",
                            avg: "unknown",
                            stddev: "unknown",
                            packetLoss: "unknown",
                        }),
                        (this._times = []),
                        (this._lines = []),
                        (this._stripRegex = /[ ]*\r?\n?$/g),
                        (this._pingConfig = e || {});
                }
                (e.prototype.STATES = {
                    INIT: 0,
                    HEADER: 1,
                    BODY: 2,
                    FOOTER: 3,
                    END: 4,
                }),
                    (e.prototype._changeState = function (t) {
                        if (
                            Object.keys(this.STATES)
                                .map(function (t) {
                                    return this.STATES[t];
                                }, this)
                                .indexOf(t) < 0
                        )
                            throw new Error("Unknown state");
                        return (this._state = t), this;
                    }),
                    (e.prototype._processHeader = function (t) {
                        throw new Error(
                            "Subclass should implement this method"
                        );
                    }),
                    (e.prototype._processBody = function (t) {
                        throw new Error(
                            "Subclass should implement this method"
                        );
                    }),
                    (e.prototype._processFooter = function (t) {
                        throw new Error(
                            "Subclass should implement this method"
                        );
                    }),
                    (e.prototype.eat = function (t) {
                        var e = [this.STATES.INIT, this.STATES.HEADER];
                        this._lines.push(t);
                        var r = t.replace(this._stripRegex, "");
                        if (0 === r.length);
                        else if (e.indexOf(this._state) >= 0)
                            this._processHeader(r);
                        else if (this._state === this.STATES.BODY)
                            this._processBody(r);
                        else if (this._state === this.STATES.FOOTER)
                            this._processFooter(r);
                        else if (this._state !== this.STATES.END)
                            throw new Error("Unknown state");
                        return this;
                    }),
                    (e.prototype.getResult = function () {
                        var t = Object.assign({}, this._response);
                        if (
                            ((t.output = this._lines.join("\n")),
                            (t.alive = this._times.length > 0),
                            t.alive &&
                                ((this._response.time = this._times[0]),
                                (t.time = this._response.time),
                                (this._response.times = this._times),
                                (t.times = this._response.times)),
                            "unknown" === t.stddev && t.alive)
                        ) {
                            var e = this._times.length,
                                r =
                                    this._times.reduce(function (e, r) {
                                        var n = r - t.avg;
                                        return e + n * n;
                                    }, 0) / e;
                            t.stddev = Math.round(1e3 * Math.sqrt(r)) / 1e3;
                        }
                        return (
                            [
                                "min",
                                "avg",
                                "max",
                                "stddev",
                                "packetLoss",
                            ].forEach(function (e) {
                                var r = t[e];
                                "number" == typeof r && (t[e] = r.toFixed(3));
                            }),
                            t
                        );
                    }),
                    (t.exports = e);
            },
            975: (t, e, r) => {
                "use strict";
                var n = r(23),
                    o = r(55),
                    i = r(599),
                    s = r(786),
                    a = r(395);
                function c() {}
                (c.createParser = function (t, e, r) {
                    var c = r || {};
                    if (!o.isPlatformSupport(e))
                        throw new Error(
                            n.format("Platform |%s| is not support", e)
                        );
                    var u = null;
                    return (
                        o.isWindow(e)
                            ? (u = new i(t, c))
                            : o.isMacOS(e)
                              ? (u = new s(t, c))
                              : o.isLinux(e) && (u = new a(t, c)),
                        u
                    );
                }),
                    (t.exports = c);
            },
            395: (t, e, r) => {
                "use strict";
                var n = r(23),
                    o = r(424),
                    i = r(786);
                function s(t, e) {
                    o.call(this, t, e);
                }
                n.inherits(s, o),
                    (s.prototype._processHeader = function (t) {
                        var e = t.split(" ");
                        if (-1 === e[1].indexOf("("))
                            (this._response.host = e[1]),
                                (this._response.numeric_host = e[2].slice(
                                    1,
                                    -1
                                ));
                        else {
                            var r = e
                                .slice(1, -3)
                                .join("")
                                .match(/([^\s()]+)/g);
                            (this._response.host = r.shift()),
                                (this._response.numeric_host = r.pop());
                        }
                        this._changeState(this.STATES.BODY);
                    }),
                    (s.prototype._processBody = function (t) {
                        i.prototype._processBody.call(this, t);
                    }),
                    (s.prototype._processFooter = function (t) {
                        i.prototype._processFooter.call(this, t);
                    }),
                    (t.exports = s);
            },
            786: (t, e, r) => {
                "use strict";
                var n = r(23),
                    o = r(424);
                function i(t, e) {
                    o.call(this, t, e);
                }
                n.inherits(i, o),
                    (i.prototype._processHeader = function (t) {
                        var e = t.split(" ");
                        (this._response.host = e[1]),
                            (this._response.numeric_host = e[2].slice(1, -2)),
                            this._changeState(this.STATES.BODY);
                    }),
                    (i.prototype._processBody = function (t) {
                        if ((t.match(/=/g) || []).length >= 3) {
                            var e = /([0-9.]+)[ ]*ms/.exec(t);
                            this._times.push(parseFloat(e[1], 10));
                        }
                        t.indexOf("---") >= 0 &&
                            this._changeState(this.STATES.FOOTER);
                    }),
                    (i.prototype._processFooter = function (t) {
                        var e = t.match(/ ([\d.]+)%/);
                        if (
                            (e &&
                                (this._response.packetLoss = parseFloat(
                                    e[1],
                                    10
                                )),
                            (t.match(/[/]/g) || []).length >= 3)
                        ) {
                            var r = /([0-9.]+)/g,
                                n = r.exec(t),
                                o = r.exec(t),
                                i = r.exec(t),
                                s = r.exec(t);
                            n &&
                                o &&
                                i &&
                                s &&
                                ((this._response.min = parseFloat(n[1], 10)),
                                (this._response.avg = parseFloat(o[1], 10)),
                                (this._response.max = parseFloat(i[1], 10)),
                                (this._response.stddev = parseFloat(s[1], 10)),
                                this._changeState(this.STATES.END)),
                                this._changeState(this.STATES.END);
                        }
                    }),
                    (t.exports = i);
            },
            599: (t, e, r) => {
                "use strict";
                var n = r(23),
                    o = r(424);
                function i(t, e) {
                    o.call(this, t, e),
                        (this._ipv4Regex = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/);
                }
                n.inherits(i, o),
                    (i.prototype._processHeader = function (t) {
                        var e = -1 === t.indexOf("["),
                            r = t.split(" ");
                        if (e)
                            (this._response.host = r.find(function (t) {
                                return this._ipv4Regex.test(t);
                            }, this)),
                                (this._response.numeric_host =
                                    this._response.host);
                        else {
                            var n = r.find(function (t) {
                                    return -1 !== t.indexOf("[");
                                }, this),
                                o = r.indexOf(n),
                                i = /\[(.*)\]/.exec(n);
                            (this._response.numeric_host = i ? i[1] : "NA"),
                                (this._response.host = r[o - 1]);
                        }
                        this._changeState(this.STATES.BODY);
                    }),
                    (i.prototype._processIPV6Body = function (t) {
                        var e = t.split(" "),
                            r = e.filter(function (t) {
                                return (
                                    t.indexOf("=") >= 0 || t.indexOf("<") >= 0
                                );
                            });
                        if (
                            (r = r.map(function (t) {
                                var r = t,
                                    n = e.indexOf(t) + 1;
                                return (
                                    n < e.length &&
                                        "ms" === e[n] &&
                                        (r += "ms"),
                                    r
                                );
                            })).length >= 1
                        ) {
                            var n = r.find(function (t) {
                                    return t.search(/(ms|мс)/i) >= 0;
                                }),
                                o = /([0-9.]+)/.exec(n);
                            this._times.push(parseFloat(o[1], 10));
                        }
                    }),
                    (i.prototype._processIPV4Body = function (t) {
                        var e = t.split(" ").filter(function (t) {
                            return t.indexOf("=") >= 0 || t.indexOf("<") >= 0;
                        });
                        if (e.length >= 3) {
                            var r = this._pingConfig.packetSize,
                                o = e.find(function (t) {
                                    var e = n.format("=%d", r);
                                    return t.indexOf(e) >= 0;
                                }),
                                i = e.indexOf(o),
                                s = e[i + 1],
                                a = /([0-9.]+)/.exec(s);
                            this._times.push(parseFloat(a[1], 10));
                        }
                    }),
                    (i.prototype._processBody = function (t) {
                        ":" === t.slice(-1)
                            ? this._changeState(this.STATES.FOOTER)
                            : this._pingConfig.v6
                              ? this._processIPV6Body(t)
                              : this._processIPV4Body(t);
                    }),
                    (i.prototype._processFooter = function (t) {
                        var e = t.match(/([\d.]+)%/);
                        if (
                            (e &&
                                (this._response.packetLoss = parseFloat(
                                    e[1],
                                    10
                                )),
                            t.search(/(ms|мсек)/i) >= 0)
                        ) {
                            var r = /([0-9.]+)/g,
                                n = r.exec(t),
                                o = r.exec(t),
                                i = r.exec(t);
                            n &&
                                o &&
                                i &&
                                ((this._response.min = parseFloat(n[1], 10)),
                                (this._response.max = parseFloat(o[1], 10)),
                                (this._response.avg = parseFloat(i[1], 10)),
                                this._changeState(this.STATES.END));
                        }
                    }),
                    (t.exports = i);
            },
            973: (t, e, r) => {
                "use strict";
                var n = r(23),
                    o = r(278),
                    i = r(317),
                    s = r(857),
                    a = r(55),
                    c = r(975);
                e.probe = function (t, e) {
                    try {
                        var r = (function (t, e) {
                            var r = e || {};
                            return (
                                void 0 === r.v6 && (r.v6 = o.isIPv6(t)),
                                new Promise(function (e, o) {
                                    var u = null,
                                        p = s.platform();
                                    try {
                                        var l = a.createBuilder(p),
                                            h = a.getExecutablePath(p, r.v6),
                                            f = l.getCommandArguments(t, r),
                                            d = l.getSpawnOptions();
                                        u = i.spawn(h, f, d);
                                    } catch (t) {
                                        return void o(t);
                                    }
                                    var m = c.createParser(t, p, r);
                                    u.once("error", function () {
                                        var t = new Error(
                                            n.format(
                                                "ping.probe: %s. %s",
                                                "there was an error while executing the ping program. ",
                                                "Check the path or permissions..."
                                            )
                                        );
                                        o(t);
                                    });
                                    var v = [];
                                    u.stdout.on("data", function (t) {
                                        v.push(String(t));
                                    }),
                                        u.stderr.on("data", function (t) {
                                            v.push(String(t));
                                        }),
                                        u.once("close", function () {
                                            v.join("")
                                                .split("\n")
                                                .forEach(m.eat, m);
                                            var t = m.getResult();
                                            e(t);
                                        });
                                })
                            );
                        })(t, e);
                        return r;
                    } catch (t) {
                        return Promise.reject(t);
                    }
                };
            },
            9: (t, e, r) => {
                "use strict";
                var n = r(973);
                e.probe = function (t, e, r) {
                    var o = r || {};
                    return n
                        .probe(t, o)
                        .then(function (t) {
                            e(t.alive, null);
                        })
                        .catch(function (t) {
                            e(null, t);
                        });
                };
            },
            317: (t) => {
                "use strict";
                t.exports = require("child_process");
            },
            896: (t) => {
                "use strict";
                t.exports = require("fs");
            },
            611: (t) => {
                "use strict";
                t.exports = require("http");
            },
            278: (t) => {
                "use strict";
                t.exports = require("net");
            },
            857: (t) => {
                "use strict";
                t.exports = require("os");
            },
            928: (t) => {
                "use strict";
                t.exports = require("path");
            },
            932: (t) => {
                "use strict";
                t.exports = require("process");
            },
            23: (t) => {
                "use strict";
                t.exports = require("util");
            },
        },
        e = {};
    !(function r(n) {
        var o = e[n];
        if (void 0 !== o) return o.exports;
        var i = (e[n] = { exports: {} });
        return t[n].call(i.exports, i, i.exports, r), i.exports;
    })(806);
})();