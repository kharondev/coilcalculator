var lokasjon,
  SE,
  __extends =
    (this && this.__extends) ||
    (function () {
      var t = function (i, a) {
        return (t =
          Object.setPrototypeOf ||
          ({
            __proto__: [],
          } instanceof Array &&
            function (t, i) {
              t.__proto__ = i;
            }) ||
          function (t, i) {
            for (var a in i) i.hasOwnProperty(a) && (t[a] = i[a]);
          })(i, a);
      };
      return function (i, a) {
        function e() {
          this.constructor = i;
        }
        t(i, a),
          (i.prototype =
            null === a
              ? Object.create(a)
              : ((e.prototype = a.prototype), new e()));
      };
    })();
!(function (t) {
  var i, a;
  (i = t.Reklame || (t.Reklame = {})),
    ((a = i.Adsense || (i.Adsense = {})).vis = function (i) {
      setTimeout(function () {
        var a, e;
        (a = i),
          (e = t.scaffold.$body.attr("data-slot"))
            ? (a.html(
                '<center class="adsensereklame">\n                <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-5496946968214683" data-ad-slot="' +
                  e +
                  '" data-ad-format="auto"></ins>\n            </center>'
              ),
              (adsbygoogle = window.adsbygoogle || []).push({}))
            : console.warn("No slot");
      }, 0);
    }),
    (a.matchedContent = function (t) {
      t.html(
        '<center class="matchedcontent">\n                <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-5496946968214683" data-ad-slot="1886315648" data-ad-format="autorelaxed"></ins>\n            </center>'
      );
    });
})(SE || (SE = {})),
  (function (t) {
    var i, a;
    (i = t.Reklame || (t.Reklame = {})),
      ((a = i.Adblock || (i.Adblock = {})).adbNoticeHidden =
        "true" === sessionStorage.getItem("adbnoticeHide")),
      (a.gjem = function () {
        sessionStorage.setItem("adbnoticeHide", "true");
      }),
      (a.mas = function (i) {
        if (!a.adbNoticeHidden) {
          var e =
            '<div class="adbnotice">' +
            $("#template-reklamemelding").html() +
            "</div>";
          i.after(e);
          var n = $(".adbnotice");
          n.find(".close").click(function () {
            n.find(".alert").html("Ok.<br />No sweat."),
              setTimeout(function () {
                n.slideUp();
              }, 750),
              a.gjem();
          }),
            t.Ga.gad("adshow", "blockernotice");
        }
      });
  })(SE || (SE = {})),
  (function (t) {
    var i, a;
    (i = t.Reklame || (t.Reklame = {})),
      (a = (function () {
        function a(t) {
          var a = this;
          (this.scaffold = t),
            (this.$bunn = $(".bunnreklame")),
            (this.$topp = $(".toppreklame"));
          var e = $(".matchedcont");
          if (location.href.toLowerCase().indexOf("?appmode=f") > -1)
            return (
              this.$bunn.remove(),
              this.$topp.remove(),
              e.remove(),
              void i.Adblock.gjem()
            );
          i.Adsense.matchedContent(e),
            this.sjekkOgVis(),
            setTimeout(function () {
              a.sjekk();
            }, 4e3);
        }
        return (
          (a.prototype.sjekk = function () {
            var a,
              e = $(".adsensereklame iframe").length;
            e > 0
              ? (a = "abg")
              : ((a = "ingen"),
                (this.adblokket = !0),
                i.Adblock.mas(this.$bunn)),
              !this.adblokket &&
                i.Adblock.adbNoticeHidden &&
                sessionStorage.removeItem("adbnoticeHide");
            var n = "abgshow: " + e;
            t.Ga.gad("adshow", a, n);
          }),
          (a.prototype.sjekkOgVis = function () {
            this.$topp.length > 0 && i.Adsense.vis(this.$topp);
          }),
          a
        );
      })()),
      (i.Page = a);
  })(SE || (SE = {})),
  (function (t) {
    !(function (i) {
      var a = function (t) {
        t.slideUp(200, function () {
          t.remove();
        });
      };
      (i.ccMenuMsg = function (t, i, e) {
        void 0 === e && (e = "danger" === i ? 7500 : 3500);
        var n,
          r =
            "menumsg-" +
            (function () {
              for (
                var t = [],
                  i =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                  a = 0;
                a < 8;
                a++
              )
                t.push(i.charAt(Math.floor(Math.random() * i.length)));
              return t.join("");
            })();
        $(".menumsg-inner").append(
          '<div class="alert alert-' +
            i +
            ' fade5" id="' +
            r +
            '" ><a class="close">&times;</a>' +
            t +
            "</div>"
        ),
          $(".menumsg-inner").css({
            opacity: 0.9,
          }),
          e > 0 &&
            ((n = $("#" + r)),
            setTimeout(function () {
              a(n);
            }, e)),
          $("#" + r).click(function () {
            a($("#" + r));
          });
      }),
        (i.seSave = function (t, a) {
          !(function (t, i, a) {
            var e;
            if (a) {
              var n = new Date();
              n.setTime(n.getTime() + 24 * a * 60 * 60 * 1e3),
                (e = "; expires=" + n.toUTCString());
            } else e = "";
            document.cookie =
              encodeURIComponent(t) +
              "=" +
              encodeURIComponent(i) +
              e +
              "; path=/";
          })("steamengine-" + t, JSON.stringify(a), 9999),
            i.ccMenuMsg("Settings have been saved.", "success");
        }),
        (i.seLoad = function (t) {
          var a = (function (t) {
            for (
              var i = encodeURIComponent(t) + "=",
                a = 0,
                e = document.cookie.split(";");
              a < e.length;
              a++
            ) {
              for (var n = e[a]; " " === n.charAt(0); )
                n = n.substring(1, n.length);
              if (0 === n.indexOf(i))
                return decodeURIComponent(n.substring(i.length, n.length));
            }
          })("steamengine-" + t);
          if (a)
            return (
              i.ccMenuMsg("Settings have been loaded.", "success"),
              $.parseJSON(a)
            );
        }),
        (i.activateBlinkies = function (t) {
          t.find(".blinky").each(function (t, i) {
            var a, e, n;
            (a = $(i)),
              (n = $(a.attr("data-blink"))),
              a
                .css("cursor", "help")
                .mouseenter(function () {
                  (e = setInterval(function () {
                    n.fadeTo(180, 0.2).fadeTo(360, 1);
                  }, 900)),
                    n.fadeTo(80, 0.2).fadeTo(240, 1);
                })
                .mouseleave(function () {
                  clearInterval(e);
                });
          });
        });
      var e = (function () {
        return function (t) {
          var i = this;
          t.each(function (t, a) {
            var e = $(a);
            e.focus(function (t) {
              i.inpVal = $(t.currentTarget).val();
            })
              .blur(function () {
                clearTimeout(i.inpTimeout);
              })
              .keyup(function () {
                clearTimeout(i.inpTimeout),
                  (i.inpTimeout = setTimeout(function () {
                    i.inpVal !== e.val() &&
                      "" !== e.val() &&
                      ((i.inpVal = e.val()),
                      e.change(),
                      e.addClass("reading"),
                      setTimeout(function () {
                        e.removeClass("reading");
                      }, 250));
                  }, 2500));
              });
          });
        };
      })();
      (i.init = function () {
        i.activateBlinkies($("body")),
          $(".link-ecf-imac").each(function (t, i) {
            $(i)
              .attr(
                "href",
                "http://www.e-cigarette-forum.com/forum/blogs/dampmaskin/5833-steam-engine-vape-calc.html"
              )
              .attr("target", "_blank")
              .attr("title", "e-cigarette-forum blog post")
              .html("e-cigarette-forum");
          }),
          $("a.wplink").each(function (t, i) {
            $(i).attr("target", "_blank");
            var a = $(i).attr("title") || $(i).html();
            $(i)
              .attr("title", "Wikipedia: " + a + " (opens in a new tab)")
              .attr("rel", "nofollow");
          }),
          new e($("input"));
      }),
        (i.setHelpClass = function (t) {
          t.find("*").each(function (t, i) {
            if ("A" !== i.tagName) {
              var a = $(i).attr("title");
              void 0 !== a && "" !== a && $(i).addClass("helpcursor");
            }
          });
        }),
        (i.getQs = function () {
          var t,
            i = {},
            a = function (t) {
              return decodeURIComponent(t.replace(/\+/g, " "));
            },
            e = location.search.substring(1).split("&");
          for (var n in e)
            e.hasOwnProperty(n) &&
              (t = e[n].split("=")).length > 1 &&
              "ref" !== t[0] &&
              (i[a(t[0])] = a(t[1]));
          return i;
        }),
        (i.updateQs = function (t) {
          "" === (t = t.replace("&", "?"))
            ? history.replaceState("", "", "?")
            : history.replaceState("", "", t);
        }),
        (i.readNumber = function (t) {
          return parseFloat(t.replace(",", "."));
        }),
        (i.limVal = function (t) {
          var a = i.readNumber(t.val()),
            e = parseFloat(t.attr("max"));
          if (null != e && a > e) return t.val(e), e;
          var n = parseFloat(t.attr("min"));
          return null != n && a < n ? (t.val(n), n) : a;
        });
      var n = (function () {
        function i(i) {
          (this.$body = i),
            (this.customcss = new t.Themes.Themes().loadSetting().loadCSS()),
            (this._pageName = i.attr("id")),
            this.checkWWW(),
            $("#navtab-" + this._pageName).addClass("active"),
            $(".menumsg").html('<div class="menumsg-inner"></div>');
        }
        return (
          (i.prototype.pageName = function () {
            return this._pageName;
          }),
          (i.prototype.checkWWW = function () {
            "http://steam-engine.org" === window.location.href.substr(0, 23) &&
              (window.location.href = window.location.href.replace(
                "//steam-engine.org",
                "//www.steam-engine.org"
              ));
          }),
          i
        );
      })();
      i.Scaffold = n;
    })(t.Global || (t.Global = {}));
  })(SE || (SE = {})),
  (function (t) {
    (t.BackTo || (t.BackTo = {})).init = function (t) {
      var i,
        a = "sebackto",
        e = {
          url: (i = new URLSearchParams(window.location.search)).get("btUrl"),
          img: i.get("btImg"),
          nm: i.get("btNm"),
        };
      if (
        (e.url
          ? sessionStorage.setItem(a, JSON.stringify(e))
          : (e = $.parseJSON(sessionStorage.getItem(a))),
        e && e.url)
      ) {
        var n = "Click here to return to " + (e.nm || "site");
        t.addClass("container text-center").html(
          '<a href="' +
            e.url +
            '" rel="nofollow">' +
            (e.img
              ? '<img src="' +
                e.img +
                '" style="max-height:6em;" alt="Back to ' +
                (e.nm || "site") +
                '" />' +
                (e.nm ? "<p>" + n + "</p>" : "")
              : "<p>" + n + "</p>") +
            "</a>"
        );
      }
    };
  })(SE || (SE = {})),
  (function (t) {
    var i, a, e;
    (i = t.Data || (t.Data = {})),
      (a = i.Batt || (i.Batt = {})),
      (e = $.parseJSON(localStorage.getItem("CustomDataBatt")) || []),
      (a.batts = [
        {
          nm: "AW IMR",
          q: 600,
          a: 4,
          ff: "14500",
        },
        {
          nm: "AW IMR",
          q: 650,
          a: 9,
          nomu: 3.7,
          ff: "14500",
        },
        {
          nm: "AW IMR",
          q: 550,
          a: 4,
          ff: "16340",
        },
        {
          nm: "AW IMR",
          q: 700,
          c: 8.5,
          ff: "18350",
        },
        {
          nm: "AW IMR",
          q: 800,
          a: 12,
          ff: "18350",
        },
        {
          nm: "AW IMR",
          q: 1100,
          c: 15,
          ff: "18490",
        },
        {
          nm: "AW IMR",
          q: 1200,
          c: 15,
          ff: "18490",
        },
        {
          nm: "AW IMR",
          q: 1600,
          c: 15,
          ff: "18650",
        },
        {
          nm: "AW IMR",
          q: 2e3,
          c: 5,
          ff: "18650",
        },
        {
          nm: "AW IMR",
          q: 2200,
          a: 20,
          ff: "18650",
        },
        {
          nm: "AWT 4500mah 75A",
          q: 4500,
          a: 35,
          ff: "26650",
        },
        {
          nm: "EH IMR",
          q: 800,
          c: 8,
          ff: "18350",
        },
        {
          nm: "EH IMR",
          q: 1100,
          c: 8,
          ff: "18500",
        },
        {
          nm: "EH IMR",
          q: 2e3,
          c: 8,
          ff: "18650",
        },
        {
          nm: "EH IMR",
          q: 2250,
          c: 8,
          ff: "18650",
        },
        {
          nm: "Efest IMR",
          q: 700,
          c: 15,
          ff: "18350",
        },
        {
          nm: "Efest IMR",
          q: 800,
          c: 8,
          ff: "18350",
        },
        {
          nm: "Efest IMR",
          q: 1100,
          c: 8,
          ff: "18490",
        },
        {
          nm: "Efest IMR",
          q: 700,
          c: 6,
          ff: "18500",
        },
        {
          nm: "Efest IMR",
          q: 1e3,
          a: 15,
          ff: "18500",
        },
        {
          nm: "Efest IMR",
          q: 1100,
          a: 10,
          ff: "18500",
        },
        {
          nm: "Efest IMR",
          q: 1500,
          a: 15,
          ff: "18650",
        },
        {
          nm: "Efest IMR",
          q: 1600,
          a: 30,
          ff: "18650",
        },
        {
          nm: "Efest IMR",
          q: 2e3,
          a: 10,
          ff: "18650",
        },
        {
          nm: "Efest IMR",
          q: 2100,
          a: 30,
          ff: "18650",
        },
        {
          nm: "Efest IMR",
          q: 2250,
          a: 10,
          ff: "18650",
        },
        {
          nm: "Efest IMR 35A",
          q: 2500,
          a: 20,
          ff: "18650",
        },
        {
          nm: "Efest IMR",
          q: 3100,
          a: 20,
          ff: "18650",
        },
        {
          nm: "Efest IMR",
          q: 3500,
          a: 32,
          ff: "26650",
        },
        {
          nm: "Innokin iTaste MVP 2.0",
          q: 2600,
          c: 3,
          ff: "custom",
          t: "The C rating is a guesstimate based on the 0.8Ω limit of the MVP2. This is a regulated device, so remember to choose APV under Device type.",
        },
        {
          nm: "Innokin iTaste VV v3",
          q: 800,
          c: 4,
          ff: "custom",
          t: "The C rating is a guesstimate based on the 11W max power of the VV v3. The official battery capacity is 800 mAh, but some units or clones have been reported to contain a 650 mAh battery. This is a regulated device, so remember to choose APV under Device type.",
        },
        {
          nm: "Keeppower IMR",
          q: 5200,
          a: 30,
          ff: "26650",
        },
        {
          nm: "LG 18650HB6",
          q: 1500,
          a: 30,
          t: "LGDAHB61865",
          chem: "NCM",
          ff: "18650",
        },
        {
          nm: "LG 18650HE2",
          q: 2500,
          c: 8,
          ff: "18650",
        },
        {
          nm: "LG 18650HG2",
          q: 3e3,
          a: 20,
          ff: "18650",
        },
        {
          nm: "MNKE IMR",
          q: 1500,
          c: 20,
          ff: "18650",
        },
        {
          nm: "MNKE IMR",
          q: 3500,
          a: 20,
          ff: "26650",
        },
        {
          nm: "Molicel INR20700A 35A 2800mAh",
          q: 3e3,
          a: 30,
          ff: "20700",
          srcUrl:
            "https://www.e-cigarette-forum.com/threads/bench-test-results-molicel-inr20700a-35a-2800mah-20700-the-five-%E2%80%9Cleg%E2%80%9D-battery-rewrapped-by-many.882025/",
        },
        {
          nm: "Molicel P26A 35A 2600mAh",
          q: 2600,
          a: 25,
          ff: "18650",
          srcUrl:
            "https://www.e-cigarette-forum.com/threads/bench-retest-results-molicel-p26a-2600mah-18650-beats-vtc5a-best-all-around-18650.902761/",
        },
        {
          nm: "Molicel P28A 2800mAh",
          q: 2700,
          a: 25,
          ff: "18650",
          srcUrl:
            "https://www.e-cigarette-forum.com/threads/bench-retest-results-molicel-p28a-2800mah-18650-equal-to-p26a-tied-for-best-all-around-18650.905961/",
        },
        {
          nm: "Molicel M42A 20A 4000mAh",
          q: 4100,
          a: 15,
          ff: "20700",
          srcUrl:
            "https://www.e-cigarette-forum.com/threads/bench-test-results-early-samples-molicel-m42a-20a-4000mah-20700-accurately-rated-great-20700.884423/",
        },
        {
          nm: "Molicel P42A 4000mAh",
          q: 4100,
          a: 30,
          ff: "21700",
          srcUrl:
            "https://www.e-cigarette-forum.com/threads/bench-retest-results-molicel-p42a-4000mah-21700-beats-40t-one-of-the-best-batteries-available.901847/",
        },
        {
          nm: "MXJO IMR 35A",
          q: 2500,
          a: 20,
          ff: "18650",
        },
        {
          nm: "MXJO IMR 20A",
          q: 3e3,
          a: 20,
          ff: "18650",
        },
        {
          nm: "Nitecore/NL188",
          q: 3100,
          c: 2,
          ff: "18650",
        },
        {
          nm: "Orbtronic PD2900",
          q: 2900,
          a: 10,
          ff: "18650",
        },
        {
          nm: "Orbtronic SX22",
          q: 2e3,
          c: 11,
          ff: "18650",
        },
        {
          nm: "Orbtronic SX30",
          q: 2100,
          c: 14.2,
          ff: "18650",
        },
        {
          nm: "Orbtronic",
          q: 3600,
          c: 1.3,
          ff: "18650",
        },
        {
          nm: "Orbtronic CGR18650CH",
          q: 2250,
          c: 4.4,
          ff: "18650",
        },
        {
          nm: "Orbtronic NCR18650A",
          q: 3100,
          c: 2,
          ff: "18650",
        },
        {
          nm: "Panasonic CGR18650CH",
          q: 2250,
          c: 4.4,
          ff: "18650",
        },
        {
          nm: "Panasonic NCR18650A",
          q: 3100,
          c: 2,
          ff: "18650",
        },
        {
          nm: "Panasonic NCR18650B",
          q: 3400,
          c: 2,
          ff: "18650",
        },
        {
          nm: "Panasonic NCR18650BD",
          q: 3200,
          a: 10,
          ff: "18650",
        },
        {
          nm: "Panasonic NCR18650PD",
          q: 2900,
          c: 3.4,
          ff: "18650",
        },
        {
          nm: "Panasonic NCR18650PF",
          q: 2900,
          a: 10,
          ff: "18650",
        },
        {
          nm: "Panasonic CGR26650A",
          q: 2650,
          a: 50,
          ff: "26650",
        },
        {
          nm: "Samsung 30T",
          q: 3e3,
          a: 35,
          ff: "21700",
          srcUrl:
            "https://www.e-cigarette-forum.com/threads/bench-retest-results-samsung-30t-21700-an-incredible-35a-3000mah-battery.863985/",
        },
        {
          nm: "Samsung 40T",
          q: 4e3,
          a: 25,
          ff: "21700",
          srcUrl:
            "https://www.e-cigarette-forum.com/threads/bench-re-retest-results-samsung-40t-35a-4000mah-21700-amazing-performer-but-25a-35a.873677/",
        },
        {
          nm: "Samsung ICR18650-26F",
          q: 2600,
          c: 2,
          ff: "18650",
        },
        {
          nm: "Samsung INR18650-20R",
          q: 2e3,
          c: 10,
          ff: "18650",
        },
        {
          nm: "Samsung INR18650-25R",
          q: 2500,
          c: 8.8,
          ff: "18650",
        },
        {
          nm: "Samsung INR18650-20S",
          q: 2e3,
          a: 30,
          ff: "18650",
          srcUrl:
            "https://www.e-cigarette-forum.com/threads/bench-test-results-samsung-20s-18650-hardest-hitting-18650-right-now-beats-hb6-and-vtc6a.864225",
        },
        {
          nm: "Samsung INR18650-20Q",
          q: 2e3,
          a: 15,
          ff: "18650",
        },
        {
          nm: "Samsung INR18650-30Q",
          q: 3e3,
          a: 15,
          nomu: 3.6,
          ff: "18650",
        },
        {
          nm: "Sanyo UR16650ZTA",
          q: 2500,
          a: 5,
          ff: "16650",
        },
        {
          nm: "Sanyo UR18650EX",
          q: 2e3,
          c: 10,
          ff: "18650",
        },
        {
          nm: "Sanyo UR18650F",
          q: 2400,
          c: 1,
          t: "This is a low drain battery not really suited for vaping.",
          ff: "18650",
        },
        {
          nm: "Sibeile IMR",
          q: 1100,
          c: 1.5,
          ff: "18500",
        },
        {
          nm: "Sibeile IMR",
          q: 1100,
          a: 22,
          ff: "18500",
        },
        {
          nm: "Sony US18650VTC3",
          q: 1600,
          a: 30,
          ff: "18650",
        },
        {
          nm: "Sony US18650VTC4",
          q: 2100,
          a: 30,
          ff: "18650",
        },
        {
          nm: "Sony US18650VTC5",
          q: 2600,
          a: 30,
          ff: "18650",
        },
        {
          nm: "Sony US18650VTC5A",
          q: 2500,
          a: 25,
          ff: "18650",
          srcUrl:
            "https://www.e-cigarette-forum.com/threads/sony-vtc5a-2500mah-18650-bench-test-results-a-fantastic-25a-battery.746719/",
        },
        {
          nm: "Sony US18650v3",
          q: 2250,
          a: 10,
          ff: "18650",
        },
        {
          nm: "Sony US26650VT",
          q: 3500,
          a: 50,
          ff: "26650",
        },
        {
          nm: "Torchy IMR",
          q: 850,
          c: 3.5,
          ff: "18350",
        },
        {
          nm: "UltraFire BRC 4000mAh li-ion",
          q: 2600,
          c: 1.15,
          ff: "18650",
          t: "The true capacity of this battery is much lower than 4000 mAh. The C rating is a rough estimate.",
        },
        {
          nm: "UltraFire XSL 1200mAh",
          q: 750,
          a: 1.2,
          ff: "18350",
          t: "The true capacity of this battery is much lower than 1200 mAh.",
        },
        {
          nm: "Vappower IMR",
          q: 4200,
          a: 40,
          ff: "26650",
        },
        {
          nm: "Vamped",
          q: 2e3,
          a: 20,
          ff: "18650",
          t: "This is a 20A battery with a 40A pulse discharge rate.",
        },
        {
          nm: "Vamped",
          q: 3500,
          a: 40,
          ff: "26650",
        },
        {
          nm: "Xtar IMR",
          q: 850,
          c: 5,
          ff: "18350",
        },
        {
          nm: "Xtar IMR",
          q: 1100,
          c: 15,
          ff: "18500",
        },
      ].concat(e));
  })(SE || (SE = {})),
  (function (t) {
    var i, a, e;
    (i = t.Data || (t.Data = {})),
      (a = i.Mat || (i.Mat = {})),
      (e = $.parseJSON(localStorage.getItem("CustomDataMat")) || []),
      (a.mats = [
        {
          id: "ka1",
          nm: "Kanthal A1 / APM",
          rstv: 1.45,
          hc: 0.46,
          dens: 7.1,
          tfr: [
            [20, 1],
            [100, 1.0001],
            [400, 1.001],
            [500, 1.01],
            [600, 1.02],
            [700, 1.02],
            [800, 1.03],
            [900, 1.04],
            [1e3, 1.04],
            [1200, 1.04],
            [1300, 1.04],
            [1400, 1.05],
          ],
        },
        {
          id: "ka",
          nm: "Kanthal A / AE / AF",
          rstv: 1.39,
          hc: 0.4625,
          dens: 7.15,
          tfr: [
            [20, 1],
            [100, 1.001],
            [200, 1.01],
            [300, 1.015],
            [400, 1.02],
            [500, 1.03],
            [600, 1.04],
            [700, 1.045],
            [800, 1.05],
            [900, 1.055],
            [1e3, 1.06],
            [1300, 1.065],
          ],
        },
        {
          id: "kd",
          nm: "Kanthal D",
          rstv: 1.35,
          hc: 0.465,
          dens: 7.25,
          tfr: [
            [20, 1],
            [100, 1.001],
            [200, 1.01],
            [300, 1.015],
            [400, 1.02],
            [500, 1.03],
            [600, 1.04],
            [700, 1.05],
            [800, 1.06],
            [900, 1.07],
            [1100, 1.075],
            [1200, 1.08],
            [1300, 1.085],
          ],
        },
        {
          id: "n20",
          nm: "Nichrome N20",
          rstv: 0.95,
          hc: 0.447,
          dens: 8.7,
        },
        {
          id: "n40",
          nm: "Nichrome N40",
          rstv: 1.04,
          hc: 0.447,
          dens: 8.6,
        },
        {
          id: "n60",
          nm: "Nichrome N60 (C)",
          rstv: 1.11,
          hc: 0.447,
          dens: 8.5,
          tcr: 4e-4,
          tfr: [
            [20, 1],
            [93, 1.017],
            [204, 1.035],
            [315, 1.052],
            [427, 1.069],
            [538, 1.086],
            [649, 1.092],
            [760, 1.098],
            [871, 1.102],
            [985, 1.105],
          ],
        },
        {
          id: "n70",
          nm: "Nichrome N70 (B)",
          rstv: 1.18,
          hc: 0.447,
          dens: 8.4,
        },
        {
          id: "n80",
          nm: "Nichrome N80 (A)",
          rstv: 1.09,
          hc: 0.447,
          dens: 8.31,
          tfr: [
            [20, 1],
            [93, 1.008],
            [204, 1.02],
            [315, 1.033],
            [427, 1.048],
            [538, 1.063],
          ],
        },
        {
          id: "n90",
          nm: "Nichrome N90",
          rstv: 0.75,
          hc: 0.44,
          dens: 8.7,
        },
        {
          id: "ss304",
          nm: "SS 304",
          rstv: 0.713,
          hc: 0.5,
          dens: 8,
          tfr: [
            [-100, 0.8412],
            [20, 1],
            [100, 1.0909],
            [150, 1.1426],
            [200, 1.1917],
            [250, 1.2388],
            [300, 1.2844],
            [500, 1.4445],
          ],
        },
        {
          id: "ss316",
          nm: "SS 316",
          rstv: 0.771,
          hc: 0.5,
          dens: 8,
          tfr: [
            [-100, 0.8646],
            [20, 1],
            [100, 1.0795],
            [150, 1.1258],
            [200, 1.1678],
            [250, 1.2075],
            [300, 1.2463],
            [500, 1.3844],
          ],
        },
        {
          id: "ss316l",
          nm: "SS 316L / Elite",
          rstv: 0.75,
          hc: 0.5,
          dens: 8,
          tfr: [
            [-183, 0.7588],
            [-173, 0.7717],
            [-123, 0.8366],
            [-73, 0.8962],
            [-23, 0.9546],
            [0, 0.978],
            [20, 1],
            [100, 1.08],
            [105, 1.084],
            [110, 1.089],
            [115, 1.094],
            [120, 1.099],
            [125, 1.103],
            [130, 1.108],
            [135, 1.112],
            [140, 1.117],
            [145, 1.121],
            [150, 1.126],
            [155, 1.13],
            [160, 1.134],
            [165, 1.139],
            [170, 1.143],
            [175, 1.147],
            [180, 1.151],
            [185, 1.156],
            [190, 1.16],
            [195, 1.164],
            [200, 1.168],
            [205, 1.172],
            [210, 1.176],
            [215, 1.18],
            [220, 1.184],
            [225, 1.188],
            [230, 1.192],
            [235, 1.196],
            [240, 1.2],
            [245, 1.204],
            [250, 1.207],
            [255, 1.211],
            [260, 1.215],
            [265, 1.219],
            [270, 1.223],
            [275, 1.227],
            [280, 1.231],
            [285, 1.235],
            [290, 1.239],
            [295, 1.242],
            [300, 1.246],
            [327, 1.2672],
            [427, 1.3372],
            [527, 1.4008],
            [627, 1.454],
            [727, 1.5006],
          ],
        },
        {
          id: "ss317l",
          nm: "SS 317L / Haywire",
          rstv: 0.81,
          hc: 0.5,
          dens: 7.9,
          tcr: 94e-5,
        },
        {
          id: "ss321",
          nm: "SS 321",
          rstv: 0.746,
          hc: 0.5,
          dens: 8.09,
          tfr: [
            [-272, 0.702412869],
            [-269, 0.702412869],
            [-263, 0.702412869],
            [-253, 0.701072386],
            [-243, 0.699731903],
            [-233, 0.701072386],
            [-223, 0.705093834],
            [-213, 0.711796247],
            [-203, 0.719839142],
            [-193, 0.731903485],
            [-183, 0.745308311],
            [-173, 0.760053619],
            [-123, 0.827077748],
            [-73, 0.892761394],
            [-23, 0.95308311],
            [0, 0.978552279],
            [20, 1],
            [27, 1.008042895],
            [77, 1.058981233],
            [127, 1.108579088],
            [227, 1.197050938],
            [327, 1.278820375],
            [427, 1.352546917],
            [527, 1.420911528],
            [627, 1.478552279],
            [727, 1.526809651],
            [827, 1.569705094],
            [927, 1.608579088],
            [1027, 1.644772118],
            [1127, 1.679624665],
            [1227, 1.713136729],
            [1327, 1.742627346],
            [1399, 1.764075067],
          ],
        },
        {
          id: "ss430",
          nm: "SS 430",
          rstv: 0.6,
          hc: 0.46,
          dens: 7.74,
          tcr: 0.00138,
        },
        {
          id: "ss904l",
          nm: "SS 904L",
          rstv: 0.9398,
          hc: 0.5,
          dens: 8,
          tfr: [
            [20, 1],
            [100, 1.0486],
            [200, 1.1406],
            [300, 1.2054],
            [400, 1.2297],
            [500, 1.2378],
            [600, 1.2406],
            [700, 1.2568],
          ],
        },
        {
          id: "au",
          nm: "Gold",
          rstv: 0.035,
          hc: 0.129,
          dens: 19.32,
          tcr: 0.0034,
        },
        {
          id: "ag",
          nm: "Silver",
          rstv: 0.0159,
          hc: 0.233,
          dens: 10.49,
          tcr: 0.0038,
        },
        {
          id: "cu",
          nm: "Copper",
          rstv: 0.0168,
          hc: 0.385,
          dens: 8.96,
          tcr: 0.003862,
        },
        {
          id: "ti1",
          nm: "Titanium 1",
          rstv: 0.47,
          hc: 0.523,
          dens: 4.43,
          tcr: 0.0035,
          tfr: [
            [20, 1],
            [24, 1.022177419],
            [37, 1.066532258],
            [53, 1.120967742],
            [66, 1.169354839],
            [78, 1.213709677],
            [94, 1.272177419],
            [106, 1.3125],
            [120, 1.366935484],
            [134, 1.41733871],
            [147, 1.463709677],
            [159, 1.510080645],
            [176, 1.572580645],
            [189, 1.622983871],
            [221, 1.739919355],
            [233, 1.782258065],
            [247, 1.836693548],
            [258, 1.872983871],
            [270, 1.915322581],
            [287, 1.97983871],
            [301, 2.028225806],
            [323, 2.106854839],
            [339, 2.163306452],
            [353, 2.20766129],
            [364, 2.245967742],
            [374, 2.278225806],
            [392, 2.336693548],
            [404, 2.379032258],
            [419, 2.425403226],
            [431, 2.465725806],
            [445, 2.510080645],
            [460, 2.556451613],
            [479, 2.614919355],
            [497, 2.665322581],
            [513, 2.709677419],
            [541, 2.788306452],
            [557, 2.828629032],
            [574, 2.870967742],
            [594, 2.921370968],
            [609, 2.959677419],
            [630, 3.006048387],
            [646, 3.04233871],
            [669, 3.090725806],
            [683, 3.116935484],
            [702, 3.153225806],
            [720, 3.189516129],
            [739, 3.219758065],
            [753, 3.243951613],
            [770, 3.27016129],
            [794, 3.306451613],
            [812, 3.330645161],
            [830, 3.352822581],
            [843, 3.370967742],
          ],
        },
        {
          id: "ti2",
          nm: "Titanium 2 (R50400)",
          rstv: 0.56,
          hc: 0.54,
          dens: 4.51,
          tfr: [
            [20, 1],
            [27, 1.027237354],
            [44, 1.091439689],
            [61, 1.145914397],
            [76, 1.210116732],
            [95, 1.262645914],
            [109, 1.317120623],
            [128, 1.383268482],
            [146, 1.443579767],
            [163, 1.505836576],
            [181, 1.56614786],
            [199, 1.630350195],
            [217, 1.694552529],
            [233, 1.750972763],
            [247, 1.80155642],
            [266, 1.86770428],
            [287, 1.939688716],
            [311, 2.027237354],
            [328, 2.087548638],
            [343, 2.13618677],
            [360, 2.190661479],
            [387, 2.274319066],
            [413, 2.357976654],
            [430, 2.406614786],
            [456, 2.492217899],
            [475, 2.542801556],
            [495, 2.605058366],
            [521, 2.673151751],
            [535, 2.710116732],
            [555, 2.760700389],
            [569, 2.793774319],
            [591, 2.842412451],
            [606, 2.879377432],
            [628, 2.929961089],
            [641, 2.957198444],
            [658, 2.990272374],
            [672, 3.019455253],
            [693, 3.058365759],
            [719, 3.10311284],
            [743, 3.142023346],
            [755, 3.175097276],
            [772, 3.196498054],
            [800, 3.219844358],
            [836, 3.26459144],
          ],
        },
        {
          id: "tie",
          nm: "Titanium ready (e-SG)",
          rstv: 0.85,
          hc: 0.56,
          dens: 4.75,
        },
        {
          id: "w",
          nm: "Tungsten",
          rstv: 0.056,
          dens: 19.25,
          hc: 0.134,
          tcr: 0.0045,
        },
        {
          id: "nio",
          nm: "Niobium alloy",
          rstv: 1.46809443507,
          hc: 0.45,
          dens: 7.5,
        },
        {
          id: "ni200lin",
          nm: "Nickel Ni200 (linear TCR)",
          rstv: 0.096,
          hc: 0.456,
          dens: 8.89,
          tcr: 0.006,
        },
        {
          id: "ni200",
          nm: "Nickel Ni200  (TFR curve)",
          rstv: 0.096,
          hc: 0.456,
          dens: 8.89,
          tcr: 0.006,
          tfr: [
            [-73.33333333333333, 0.620729625225067],
            [-17.77777777777778, 0.827668249607086],
            [20, 1],
            [21.11111111111111, 1.00000214576721],
            [93.33333333333333, 1.31032383441925],
            [204.44444444444446, 1.94822633266449],
            [315.55555555555554, 2.82758617401123],
            [426.6666666666667, 3.51726651191711],
          ],
        },
        {
          id: "nife30",
          nm: "NiFe30 (Resistherm - TFR)",
          rstv: 0.33,
          hc: 0.42,
          dens: 8.5,
          tcr: 0.0032,
          tfr: [
            [20, 1],
            [100, 41 / 33],
            [200, 52 / 33],
            [300, 64 / 33],
            [400, 76 / 33],
            [500, 89 / 33],
          ],
        },
        {
          id: "dicodes",
          nm: "NiFe30 (Resistherm - TCR)",
          rstv: 0.33,
          hc: 0.42,
          dens: 8.5,
          tcr: 0.0032,
        },
        {
          id: "reactor",
          nm: "NiFe (Reactor Wire)",
          rstv: 0.4334,
          hc: 0.42,
          dens: 8.5,
          tcr: 0.004,
        },
        {
          id: "nife30stealth",
          nm: "NiFe30 (StealthVape)",
          rstv: 0.21,
          hc: 0.42,
          dens: 8.5,
          tcr: 0.005,
        },
        {
          id: "invar36",
          nm: "Invar 36 / Nilo 36 / Pernifer 36",
          rstv: 0.82,
          hc: 0.515,
          dens: 8.055,
          tcr: 0.001,
          tfr: [
            [20, 1],
            [100, 1.075],
            [200, 1.2125],
            [300, 1.3125],
            [400, 1.3875],
            [500, 1.4625],
            [600, 1.5125],
          ],
        },
        {
          id: "nidh",
          nm: "Nickel DH",
          rstv: 0.09,
          hc: 0.48,
          dens: 8.9,
          tfr: [
            [-100, 0.6],
            [20, 1],
            [100, 1.4],
            [150, 1.6941],
            [200, 2.08],
            [250, 2.5092],
            [300, 2.97],
            [500, 4.23],
          ],
        },
        {
          id: "nft70",
          nm: "Nifethal 70 (Alloy120)",
          rstv: 0.2,
          hc: 0.52,
          dens: 8.45,
          tfr: [
            [-100, 0.576],
            [20, 1],
            [100, 1.42],
            [150, 1.68],
            [200, 1.91],
            [250, 2.19],
            [300, 2.47],
            [500, 3.66],
          ],
        },
        {
          id: "nft52",
          nm: "Nifethal 52 (Alloy52)",
          rstv: 0.37,
          hc: 0.5,
          dens: 8.2,
          tfr: [
            [-100, 0.664],
            [20, 1],
            [100, 1.33],
            [150, 1.53],
            [200, 1.73],
            [250, 1.93],
            [300, 2.13],
            [500, 2.77],
          ],
        },
        {
          id: "zr",
          nm: "Zirconium (pure)",
          rstv: 0.433,
          hc: 0.278,
          dens: 6.52,
          tcr: 0.0044,
        },
      ].concat(e)),
      (a.findMat = function (t) {
        for (var i = 0, e = a.mats; i < e.length; i++) {
          var n = e[i];
          if (n.id === t) return n;
        }
      });
  })(SE || (SE = {})),
  (function (t) {
    var i, a, e, n;
    (i = t.Data || (t.Data = {})),
      (a = i.Mod || (i.Mod = {})),
      (e = [
        {
          nm: "Beyond Vape Solara",
          chip: "DNA30",
        },
        {
          nm: "Cana Modz",
          chip: "ClouporDNA30",
        },
        {
          nm: "Craving Vapor HexOhm",
          chip: "OKRT10",
        },
        {
          nm: "Craving Vapor HexOhm V2",
          chip: "OKL2T20W12",
        },
        {
          nm: "Hana Modz V3",
          chip: "DNA30",
        },
        {
          nm: "Hana Modz DNA 40",
          chip: "DNA40",
        },
        {
          nm: "Lost Vape Therion DNA 75",
          chip: "DNA75",
        },
        {
          nm: "Lost Vape Therion DNA 133",
          chip: "DNA133",
        },
        {
          nm: "Lost Vape Therion DNA 166",
          chip: "DNA166",
        },
        {
          nm: "Notcigs Buzz Pro",
          chip: "notcigsvv",
        },
        {
          nm: "Pioneer4You/Green Leaf Seven 22",
          chip: "SX220",
        },
        {
          nm: "Pioneer4You/Green Leaf Seven 30W",
          chip: "SX300",
        },
        {
          nm: "Pioneer4You/Green Leaf IPV",
          chip: "SX330",
        },
        {
          nm: "Pioneer4You/Green Leaf IPV D2",
          chip: "SX130H",
        },
        {
          nm: "Pioneer4You/Green Leaf IPV Mini",
          chip: "SX130",
        },
        {
          nm: "Pioneer4You/Green Leaf IPV Mini 2",
          chip: "SX330v2c",
        },
        {
          nm: "Pioneer4You/Green Leaf IPV V2",
          chip: "SX330v2",
        },
        {
          nm: "Pioneer4You/Green Leaf IPV V2S",
          chip: "SX330v2s",
        },
        {
          nm: "Pioneer4You/Green Leaf IPV V3 100W",
          chip: "SX330v3",
        },
        {
          nm: "Pioneer4You/Green Leaf IPV V3 150W",
          chip: "SX330v3s",
        },
        {
          nm: "Pioneer4You/Green Leaf IPV V3 200W",
          chip: "SX330v3si",
        },
        {
          nm: "Pioneer4You/Green Leaf IPV V4 100W",
          chip: "SX330v4s",
        },
        {
          nm: "Protovapor XPV DNA-20D",
          chip: "DNA20",
        },
        {
          nm: "Protovapor XPV DNA-30D",
          chip: "DNA30",
        },
        {
          nm: "Protovapor XPV DNA-40D",
          chip: "DNA40",
        },
        {
          nm: "Raffmods Ranger",
          chip: "OKRT10",
        },
        {
          nm: "Reo VV Grand/Woodvil",
          chip: "notcigsvv",
        },
        {
          nm: "Sigelei 30W",
          chip: "SX300",
        },
        {
          nm: "Sigelei Raptor",
          chip: "SX330v3",
        },
        {
          nm: "Sigelei 100W",
          chip: "SX330v3",
        },
        {
          nm: "Sigelei Mini",
          chip: "SX130v1.5",
        },
        {
          nm: "SvoëMesto Semovar",
          chip: "NivelV3",
        },
        {
          nm: "Vapor Flask v1/v2 DNA 30",
          chip: "DNA30",
        },
        {
          nm: "Vapor Flask v2 DNA 40",
          chip: "DNA40",
        },
        {
          nm: "Vapor Shark DNA",
          chip: "DNA20",
        },
        {
          nm: "Vapor Shark DNA/rDNA 30",
          chip: "DNA30",
        },
        {
          nm: "Vapor Shark rDNA 40",
          chip: "DNA40",
        },
      ]),
      (n = [
        {
          nm: "AceSmok Ace 50",
          umin: 3,
          umax: 6,
          pmin: 3,
          pmax: 50,
          rmin: 0.3,
          rmax: 3.3,
          imax: 15,
        },
        {
          nm: "Ante Meridiem Axis",
          umin: 2.8,
          umax: 5.75,
          pmax: 76.8,
          rmin: 0.16,
          rmax: 3,
          imax: 16,
        },
        {
          nm: "Anyvape AnyMOD",
          umin: 3,
          umax: 6,
          pmin: 3,
          pmax: 18,
          imax: 5,
        },
        {
          nm: "Arrow 100W",
          umin: 1.1,
          umax: 13,
          pmin: 7,
          pmax: 100,
          rmin: 0.2,
          rmax: 3.3,
          imax: 25,
        },
        {
          nm: "Artisan Supermax",
          umin: 3,
          umax: 6,
          pmin: 5,
          pmax: 82,
          rmin: 0.2,
          rmax: 3,
          imax: 16,
        },
        {
          nm: "Asmodus Snow Wolf 200W",
          umin: 0.5,
          umax: 7,
          pmin: 5,
          pmax: 200,
          rmin: 0.05,
          rmax: 2.5,
          imax: 35,
        },
        {
          nm: "Aspire CF Sub Ohm",
          umin: 3.2,
          umax: 4.2,
          pmin: 20,
          pmax: 58.75,
          rmin: 0.3,
          rmax: 1,
          imax: 40,
        },
        {
          nm: "Beastmode Industries BMI 100 Watt V.1",
          umin: 1,
          umax: 9.5,
          pmin: 10,
          pmax: 100,
          rmin: 0.15,
          rmax: 3,
          imax: 40,
        },
        {
          nm: "Billet Box rev. 3a",
          umax: 5.5,
          pmax: 12,
          imax: 3,
        },
        {
          nm: "Cloupor DNA-30",
          umin: 4,
          umax: 8.3,
          pmin: 7,
          pmax: 30,
          rmin: 0.3,
          rmax: 3.3,
          imax: 10,
          chipnm: "ClouporDNA30",
        },
        {
          nm: "Cloupor DNA-50",
          umin: 3.2,
          umax: 9,
          pmin: 7,
          pmax: 50,
          rmin: 0.2,
          rmax: 3,
          imax: 10,
          chipnm: "ClouporDNA50",
        },
        {
          nm: "Cloupor GT",
          umin: 0.5,
          umax: 7,
          pmin: 1,
          pmax: 80,
          rmin: 0.1,
          rmax: 3.5,
          imax: 20,
        },
        {
          nm: "Cloupor Mini",
          umin: 3.6,
          umax: 7,
          pmin: 7,
          pmax: 30,
          rmin: 0.45,
          rmax: 3,
          imax: 10,
        },
        {
          nm: "Cloupor T5",
          umin: 2,
          umax: 9.3,
          pmin: 7,
          pmax: 50,
          rmin: 0.2,
          rmax: 3.6,
          imax: 10,
        },
        {
          nm: "Cloupor T6",
          umax: 9.3,
          pmin: 7,
          pmax: 100,
          rmin: 0.2,
          rmax: 4,
          imax: 15,
        },
        {
          nm: "Cloupor T8",
          umin: 1.5,
          umax: 7.6,
          pmin: 7,
          pmax: 150,
          rmin: 0.15,
          rmax: 4,
          imax: 20,
        },
        {
          nm: "Cloupor ZNA50",
          umin: 3.6,
          umax: 8.5,
          pmin: 7,
          pmax: 50,
          rmin: 0.3,
          rmax: 3.3,
          imax: 10,
        },
        {
          nm: "C-Tratech Smart Box 50W",
          umin: 1,
          umax: 10,
          pmin: 3,
          pmax: 50,
          rmin: 0.25,
          rmax: 3,
          imax: 15,
        },
        {
          nm: "Dicodes Dani Extreme",
          umin: 1.87,
          umax: 7.7,
          pmin: 5,
          pmax: 20,
          rmin: 0.3,
          rmax: 9.9,
          imax: 8,
        },
        {
          nm: "Dicodes Dani Extreme v2 / Pipeline Pro v2",
          umax: 12,
          pmin: 5,
          pmax: 40,
          rmin: 0.05,
          rmax: 5,
          imax: 15,
        },
        {
          nm: "DJK Wood Mods The Nerd VV",
          umin: 3,
          umax: 5.5,
          pmax: 76.8,
          rmin: 0.2,
          rmax: 3,
          imax: 16,
        },
        {
          nm: "Dovpo DT-50",
          umin: 2.5,
          umax: 7,
          pmax: 50,
          rmin: 0.2,
          imax: 25,
        },
        {
          nm: "Dovpo E-LVT",
          umin: 3,
          umax: 6,
          pmin: 3,
          pmax: 15,
          rmin: 1.3,
          imax: 5,
        },
        {
          nm: "Dovpo E-Mech",
          umin: 3,
          umax: 6,
          pmin: 3,
          pmax: 30,
          rmin: 0.5,
          rmax: 5,
          imax: 7,
        },
        {
          nm: "Dovpo TC 50",
          umin: 3.2,
          umax: 4.2,
          pmin: 1,
          pmax: 50,
          rmin: 0.1,
          rmax: 3,
          imax: 23,
        },
        {
          nm: "eGo Twist",
          umin: 3.2,
          umax: 4.8,
          pmin: 4,
          pmax: 12,
          rmin: 1.2,
          rmax: 3,
          imax: 2.5,
        },
        {
          nm: "eGo-V V3",
          umin: 3,
          umax: 6,
          pmin: 3,
          pmax: 15,
          rmin: 1.2,
          imax: 2.5,
        },
        {
          nm: "Evod V v3",
          umin: 3,
          umax: 6,
          pmin: 3,
          pmax: 15,
          rmin: 1.2,
          imax: 2.5,
        },
        {
          nm: "Evolv DNA-20D",
          umin: 4,
          umax: 8.3,
          pmin: 7,
          pmax: 20,
          rmin: 1,
          rmax: 3.3,
          imax: 6,
          chipnm: "DNA20",
        },
        {
          nm: "Evolv DNA-30D",
          umin: 4,
          umax: 8.3,
          pmin: 7,
          pmax: 30,
          rmin: 0.5,
          rmax: 3,
          imax: 10,
          chipnm: "DNA30",
        },
        {
          nm: "Evolv DNA-40 (std. wire)",
          umin: 1,
          umax: 9,
          pmin: 1,
          pmax: 40,
          rmin: 0.16,
          rmax: 2,
          imax: 16,
          chipnm: "DNA40",
        },
        {
          nm: "Evolv DNA-40 (Ni 200)",
          umin: 1,
          umax: 9,
          pmin: 1,
          pmax: 40,
          rmin: 0.1,
          rmax: 1,
          imax: 16,
          chipnm: "DNA40temp",
        },
        {
          nm: "Evolv DNA-60",
          umin: 0.2,
          umax: 9,
          pmin: 1,
          pmax: 60,
          imax: 22,
          chipnm: "DNA60",
        },
        {
          nm: "Evolv DNA-75",
          umin: 0.2,
          umax: 6.2,
          pmin: 1,
          pmax: 75,
          imax: 30,
          chipnm: "DNA75",
        },
        {
          nm: "Evolv DNA-200 (2 cells, DNA-133)",
          umax: 6,
          pmin: 1,
          pmax: 133,
          imax: 50,
          chipnm: "DNA133",
        },
        {
          nm: "Evolv DNA-200 (3 cells)",
          umax: 9,
          pmin: 1,
          pmax: 200,
          imax: 50,
          chipnm: "DNA200",
        },
        {
          nm: "Evolv DNA-200 (TC mode)",
          umax: 6.25,
          pmin: 1,
          pmax: 200,
          imax: 70,
          chipnm: "DNA200TC",
        },
        {
          nm: "Evolv DNA-250 (2 cells, DNA-166)",
          umax: 6,
          pmin: 1,
          pmax: 166,
          imax: 55,
          chipnm: "DNA166",
        },
        {
          nm: "Evolv DNA-250 (3 cells)",
          umax: 9,
          pmin: 1,
          pmax: 250,
          imax: 55,
          chipnm: "DNA250",
        },
        {
          nm: "Evolv Kick 2",
          umin: 2,
          umax: 6.3,
          pmin: 5,
          pmax: 15,
          rmin: 0.5,
          rmax: 3.3,
          imax: 6,
        },
        {
          nm: "Eleaf iStick",
          umin: 3,
          umax: 5.5,
          pmin: 3,
          pmax: 20,
          rmin: 1,
          rmax: 3,
          imax: 4.5,
        },
        {
          nm: "Eleaf iStick 30W",
          umin: 2,
          umax: 8,
          pmin: 5,
          pmax: 30,
          rmin: 0.4,
          rmax: 5,
          imax: 8.66,
        },
        {
          nm: "Eleaf iStick 40W TC",
          umax: 8,
          pmin: 5,
          pmax: 40,
          rmin: 0.05,
          rmax: 3.5,
          imax: 14.5,
        },
        {
          nm: "Eleaf iStick 50W",
          umin: 2,
          umax: 10,
          pmin: 5,
          pmax: 50,
          rmin: 0.2,
          rmax: 5,
          imax: 25,
        },
        {
          nm: "Eleaf iStick 100W",
          umin: 2,
          umax: 10,
          pmin: 5,
          pmax: 100,
          rmin: 0.15,
          rmax: 5,
          imax: 25,
        },
        {
          nm: "Gossmods The Duke",
          umin: 3,
          umax: 6,
          pmax: 50,
          rmin: 0.5,
          imax: 10,
        },
        {
          nm: "Grand Innovations GI2",
          umin: 1,
          umax: 5.5,
          pmin: 1,
          pmax: 100,
          rmin: 0.4,
          rmax: 4,
          imax: 25,
        },
        {
          nm: "Heatvape Invader Mini",
          umin: 1,
          umax: 9.9,
          pmin: 1,
          pmax: 50,
          rmin: 0.16,
          rmax: 2,
          imax: 17.6,
        },
        {
          nm: "Heatvape Invader Mini (TC mode)",
          umin: 1,
          umax: 9.9,
          pmin: 1,
          pmax: 50,
          rmin: 0.1,
          rmax: 1,
          imax: 17.6,
        },
        {
          nm: "iJoy A160",
          umin: 1,
          umax: 7,
          pmin: 5,
          pmax: 160,
          rmin: 0.03,
          rmax: 3,
          imax: 35,
        },
        {
          nm: "Innokin Cool Fire II",
          umax: 6,
          pmin: 7,
          pmax: 12.5,
          rmin: 1,
          imax: 5,
        },
        {
          nm: "Innokin Cool Fire IV",
          umin: 3,
          umax: 7.5,
          pmin: 6,
          pmax: 40,
          rmin: 0.2,
          imax: 14.5,
        },
        {
          nm: "Innokin Disrupter",
          umin: 3,
          umax: 7.5,
          pmin: 6,
          pmax: 50,
          rmin: 0.2,
          rmax: 3.1,
          imax: 16,
        },
        {
          nm: "Innokin iTaste 134 / iTaste 134 mini",
          umin: 3,
          umax: 6,
          pmin: 6.5,
          pmax: 12.5,
          rmin: 1.2,
          rmax: 3.5,
          imax: 3,
        },
        {
          nm: "Innokin iTaste MVP 2.0",
          umin: 3.3,
          umax: 5,
          pmin: 6,
          pmax: 11,
          rmin: 0.8,
          imax: 3.5,
        },
        {
          nm: "Innokin iTaste MVP 20 Watt",
          umin: 3.3,
          umax: 7.5,
          pmin: 6,
          pmax: 20,
          rmin: 1,
          imax: 6,
        },
        {
          nm: "Innokin iTaste MVP 3.0",
          umin: 3,
          umax: 9,
          pmin: 6,
          pmax: 30,
          rmin: 0.4,
          rmax: 2.5,
          imax: 9,
        },
        {
          nm: "Innokin iTaste MVP 3 Pro",
          umin: 3,
          umax: 9,
          pmin: 6,
          pmax: 60,
          rmin: 0.2,
          rmax: 3.1,
          imax: 17.5,
        },
        {
          nm: "Innokin iTaste SVD",
          umin: 3.3,
          umax: 6,
          pmin: 3,
          pmax: 15,
          rmin: 1.3,
          rmax: 6,
          imax: 5,
        },
        {
          nm: "Innokin iTaste SVD2",
          umin: 2,
          umax: 6.3,
          pmin: 5,
          pmax: 20,
          rmin: 0.5,
          rmax: 3,
          imax: 6,
        },
        {
          nm: "Innokin iTaste VTR",
          umin: 3,
          umax: 6,
          pmin: 3,
          pmax: 15,
          rmin: 0.8,
          imax: 5,
        },
        {
          nm: "Innokin iTaste VV V3.0",
          umin: 3.3,
          umax: 5,
          pmin: 6,
          pmax: 11,
          rmin: 1.2,
          imax: 3.5,
        },
        {
          nm: "Joy4life Beyang 30W",
          umax: 5.5,
          pmax: 30,
          rmin: 0.2,
          imax: 20,
        },
        {
          nm: "Joyetech eCom Supreme",
          umin: 3,
          umax: 8,
          pmin: 5,
          pmax: 30,
          rmin: 0.5,
          imax: 8,
        },
        {
          nm: "Joyetech eVic",
          umin: 3,
          umax: 5,
          pmin: 2,
          pmax: 11,
          rmin: 1.5,
          imax: 2.5,
        },
        {
          nm: "Joyetech eVic VT",
          umax: 8,
          pmax: 60,
          imax: 20,
          rmin: 0.15,
          rmax: 3.5,
        },
        {
          nm: "Joyetech eVic VT (TC mode)",
          umax: 8,
          pmax: 60,
          imax: 20,
          rmin: 0.05,
          rmax: 1,
        },
        {
          nm: "Joyetech eVic Supreme",
          umax: 6,
          pmax: 30,
          rmin: 0.5,
          rmax: 5,
          imax: 6,
        },
        {
          nm: "J Well Alesia",
          umin: 1,
          umax: 8,
          pmin: 7,
          pmax: 40,
          rmin: 0.3,
          rmax: 3,
          imax: 18,
        },
        {
          nm: "J Well Troca",
          umin: 1,
          umax: 8,
          pmin: 7,
          pmax: 30,
          rmin: 0.3,
          rmax: 3,
          imax: 12,
        },
        {
          nm: "Kanger e-Power v3",
          umax: 6,
          pmax: 12,
          imax: 2,
        },
        {
          nm: "Kanger IPOW 2",
          umax: 5,
          pmax: 15,
          imax: 3.9,
        },
        {
          nm: "Kanger KBOX",
          umin: 2.2,
          umax: 10,
          pmin: 8,
          pmax: 40,
          rmin: 0.4,
          rmax: 3,
          imax: 10,
        },
        {
          nm: "Kanger KBOX Mini / SUBOX Mini",
          umax: 9,
          pmin: 7,
          pmax: 50,
          rmin: 0.3,
          imax: 12,
        },
        {
          nm: "Kanger K-Simar 20",
          umin: 1.8,
          umax: 7,
          pmin: 2.8,
          pmax: 20,
          rmin: 0.5,
          rmax: 2.5,
          imax: 3.7,
        },
        {
          nm: "Kangside e-Huge",
          umin: 3.2,
          umax: 7.3,
          pmin: 7,
          pmax: 35,
          rmin: 0.5,
          rmax: 3,
          imax: 12,
        },
        {
          nm: "Kamry 20",
          umin: 3.6,
          umax: 7.6,
          pmin: 7,
          pmax: 23,
          rmin: 0.2,
          rmax: 3,
          imax: 10,
        },
        {
          nm: "Kamry 60W",
          umin: 1.4,
          umax: 8,
          pmin: 7,
          pmax: 60,
          rmin: 0.3,
          imax: 20,
        },
        {
          nm: "Kamry God Box",
          umin: 1.5,
          umax: 10.5,
          pmin: 5,
          pmax: 180,
          rmin: 0.3,
          rmax: 3,
          imax: 30,
        },
        {
          nm: "KangXin VF clone v3",
          umin: 1,
          umax: 9.9,
          pmin: 1,
          pmax: 40,
          rmin: 0.16,
          rmax: 2,
          imax: 16,
        },
        {
          nm: "KangXin KX5-50W",
          umin: 3.2,
          umax: 11.5,
          pmin: 5,
          pmax: 50,
          rmin: 0.2,
          rmax: 3,
          imax: 11.59,
        },
        {
          nm: "Koopor Mini KP60",
          rmin: 0.1,
          rmax: 3,
          pmin: 1,
          pmax: 60,
          umin: 0.8,
          umax: 9,
          imin: 1,
          imax: 30,
        },
        {
          nm: "Koopor Mini KP60 (TC)",
          rmin: 0.06,
          rmax: 2,
          pmin: 1,
          pmax: 60,
          umin: 0.8,
          umax: 9,
          imin: 1,
          imax: 30,
        },
        {
          nm: "KSD 30",
          umin: 1.8,
          umax: 8.2,
          pmin: 7,
          pmax: 30,
          rmin: 0.5,
          rmax: 7,
          imax: 7.8,
        },
        {
          nm: "KSD Kmax (single battery)",
          umin: 3,
          umax: 6,
          pmin: 3,
          pmax: 15,
          rmin: 1.2,
          imax: 3,
        },
        {
          nm: "KSD Kmax (stacked)",
          umin: 3,
          umax: 6,
          pmin: 3,
          pmax: 15,
          rmin: 1.2,
          imax: 5,
        },
        {
          nm: "L-Rider Lambo 6.0",
          umin: 3,
          umax: 6,
          pmin: 1,
          pmax: 20,
          rmin: 0.6,
          imax: 5,
        },
        {
          nm: "L-Rider Lavatube",
          umin: 3,
          umax: 6,
          pmax: 15,
          rmin: 1.3,
          imax: 2.5,
        },
        {
          nm: "Lotus Jellyfish",
          umax: 6,
          pmax: 53,
          rmin: 0.1,
          rmax: 3.5,
          imax: 30,
        },
        {
          nm: "Lotus LE80",
          umin: 3.3,
          umax: 6,
          pmin: 6.6,
          pmax: 180,
          rmin: 0.2,
          rmax: 5,
          imax: 30,
        },
        {
          nm: "Luxyoun Smaug",
          umax: 17.5,
          pmax: 150,
          rmin: 0.3,
          rmax: 3,
          imax: 40,
        },
        {
          nm: "Majesty 150W",
          umin: 1,
          umax: 8.4,
          pmin: 3,
          pmax: 150,
          rmin: 0.1,
          rmax: 4,
          imax: 30,
        },
        {
          nm: "Megatron 260",
          umin: 7.5,
          umax: 12.6,
          pmin: 7,
          pmax: 260,
          rmin: 0.3,
          rmax: 4,
          imax: 30,
        },
        {
          nm: "Naos Raptor 10A",
          umin: 0.59,
          umax: 6,
          pmax: 50,
          imax: 10,
        },
        {
          nm: "Naos Raptor 20A",
          umin: 0.59,
          umax: 6,
          pmax: 120,
          imax: 20,
        },
        {
          nm: "Nivel V3",
          umin: 3,
          umax: 6,
          pmax: 15,
          rmin: 1,
          imax: 3.5,
          chipnm: "NivelV3",
        },
        {
          nm: "Notcigs VV",
          umin: 3.3,
          umax: 5.5,
          pmax: 15,
          imax: 3.3,
          chipnm: "notcigsvv",
        },
        {
          nm: "OKL2-T/20-W12",
          umin: 3.3,
          umax: 5.5,
          pmax: 110,
          rmin: 0.2,
          imax: 20,
          chipnm: "OKL2T20W12",
        },
        {
          nm: "OKR-T10",
          umin: 0.591,
          umax: 6,
          pmax: 50,
          rmin: 0.6,
          imax: 10,
          chipnm: "OKRT10",
        },
        {
          nm: "Pioneer4You/Green Leaf P-Max",
          umin: 3,
          umax: 6,
          pmin: 5,
          pmax: 15,
          rmin: 1,
          rmax: 5,
          imax: 5,
        },
        {
          nm: "ProVari 2, ProVari 2.5",
          umin: 2.9,
          umax: 6,
          pmin: 0,
          pmax: 15,
          rmin: 1.2,
          imax: 3.5,
        },
        {
          nm: "ProVari P3 beta",
          umin: 2.9,
          umax: 6,
          pmin: 3,
          pmax: 20,
          rmin: 0.7,
          imax: 5,
        },
        {
          nm: "ProVari P35",
          umin: 2.9,
          umax: 6,
          pmin: 3,
          pmax: 20,
          rmin: 0.7,
          imax: 5.5,
        },
        {
          nm: "Psmoke GI2",
          umin: 1,
          umax: 5.5,
          pmin: 1,
          pmax: 100,
          rmin: 0.1,
          rmax: 4,
          imax: 20,
        },
        {
          nm: "RainbowHeaven Arrow",
          umin: 1.1,
          umax: 13,
          pmin: 7,
          pmax: 100,
          rmin: 0.3,
          rmax: 3.3,
          imax: 30,
        },
        {
          nm: "Robbot Tech ZNA50",
          umax: 11,
          pmin: 7,
          pmax: 50,
          rmin: 0.3,
          rmax: 3.5,
          imax: 30,
        },
        {
          nm: "Sigelei 20W",
          umin: 3,
          umax: 8.5,
          pmin: 7,
          pmax: 20,
          rmin: 0.5,
          rmax: 3,
          imax: 5.35,
        },
        {
          nm: "Sigelei 50W",
          umin: 3.6,
          umax: 8.5,
          pmin: 7,
          pmax: 50,
          rmin: 0.2,
          rmax: 3,
          imax: 16,
        },
        {
          nm: "Sigelei 75W TC",
          umin: 0.5,
          umax: 8.5,
          pmin: 5,
          pmax: 75,
          rmin: 0.05,
          rmax: 2.5,
          imax: 25,
        },
        {
          nm: "Sigelei 150W",
          umax: 7.5,
          pmax: 150,
          imax: 30,
        },
        {
          nm: "Sigelei Fuchai 213 Plus",
          umin: 1,
          umax: 7.5,
          pmin: 10,
          pmax: 223,
          rmin: 0.1,
          rmax: 3,
          imax: 35,
        },
        {
          nm: "Sigelei Kick",
          umax: 4.2,
          pmax: 10,
          rmin: 1,
          imax: 4,
        },
        {
          nm: "Sigelei Legend v2",
          umin: 3,
          umax: 6,
          pmin: 3,
          pmax: 15,
          rmin: 1.2,
          imax: 5,
        },
        {
          nm: "Sigelei Vmax",
          umin: 3,
          umax: 6,
          pmin: 3,
          pmax: 15,
          rmin: 1.25,
          rmax: 3,
          imax: 5,
        },
        {
          nm: "Sigelei Zmax V3",
          umin: 3,
          umax: 6,
          pmin: 3,
          pmax: 15,
          rmin: 1.5,
          rmax: 3,
          imax: 4,
        },
        {
          nm: "Sigelei Zmax V5",
          umin: 3,
          umax: 6,
          pmin: 3,
          pmax: 15,
          rmin: 1.2,
          imax: 4,
        },
        {
          nm: "Simeiyue God 180",
          umin: 1,
          umax: 12.6,
          pmax: 180,
          rmin: 0.5,
          rmax: 4,
          imax: 20,
        },
        {
          nm: "Simeiyue God 180s",
          umin: 1,
          umax: 9.6,
          pmax: 220,
          rmin: 0.2,
          rmax: 4,
          imax: 23,
        },
        {
          nm: "Simeiyue God 260",
          umin: 1,
          umax: 11,
          pmin: 5,
          pmax: 260,
          rmin: 0.3,
          rmax: 4,
          imax: 35,
        },
        {
          nm: "Smok Ace",
          umin: 3,
          umax: 6,
          pmin: 3,
          pmax: 15,
          rmin: 1.2,
          rmax: 3,
          imax: 5,
        },
        {
          nm: "Smok BEC Pro",
          umin: 3,
          umax: 12,
          pmin: 6,
          pmax: 50,
          rmin: 0.2,
          rmax: 9.9,
          imax: 10,
        },
        {
          nm: "Smok G-Priv 220W",
          pmin: 1,
          pmax: 220,
          umax: 8,
          rmin: 0.06,
          rmax: 3,
          imax: 30,
        },
        {
          nm: "Smok Sid",
          umin: 3,
          umax: 6,
          pmin: 3,
          pmax: 15,
          rmin: 1.2,
          rmax: 3,
          imax: 4,
        },
        {
          nm: "Smok X Cube II",
          umin: 0.35,
          umax: 8,
          pmin: 6,
          pmax: 160,
          rmin: 0.01,
          rmax: 3,
          imax: 20,
        },
        {
          nm: "Smok X Pro BT50",
          umax: 12,
          pmax: 50,
          rmin: 0.2,
          rmax: 3,
          imax: 16,
        },
        {
          nm: "Smok X Pro M36",
          umax: 6.7,
          pmax: 36,
          rmin: 0.2,
          rmax: 4,
          imax: 16,
        },
        {
          nm: "Smok X Pro M50",
          umin: 3,
          umax: 12,
          pmin: 6,
          pmax: 50,
          rmin: 0.2,
          rmax: 4,
          imax: 11,
        },
        {
          nm: "Smok X Pro M80",
          umin: 2.8,
          umax: 12,
          pmin: 6,
          pmax: 80,
          rmin: 0.1,
          rmax: 30,
          imax: 20,
        },
        {
          nm: "Smok Zmax",
          umin: 3,
          umax: 6,
          pmin: 3,
          pmax: 15,
          rmin: 1.2,
          imax: 4,
        },
        {
          nm: "Smok Zmax Mini",
          umin: 3,
          umax: 6,
          pmin: 3,
          pmax: 15,
          rmin: 1.2,
          imax: 6,
        },
        {
          nm: "SMY 260W",
          umax: 12.6,
          pmax: 260,
          rmin: 0.3,
          rmax: 4,
          imax: 30,
        },
        {
          nm: "SMY 50TC",
          umin: 1,
          umax: 14,
          pmin: 5,
          pmax: 50,
          rmin: 0.1,
          rmax: 3,
          imax: 35,
        },
        {
          nm: "SMY GOD 180",
          umin: 1.5,
          umax: 10.5,
          pmin: 5,
          pmax: 180,
          rmin: 0.3,
          rmax: 4,
          imax: 30,
        },
        {
          nm: "Steam STM-1 / STM-2",
          umin: 3,
          umax: 6,
          pmin: 3,
          pmax: 15,
          imax: 4,
        },
        {
          nm: "Sunzip Vapmod Deezel",
          umax: 8.4,
          pmin: 3,
          pmax: 150,
          imax: 38.8,
          rmin: 0.099,
          rmax: 3,
        },
        {
          nm: "Taifun The Eye",
          umin: 2.5,
          umax: 8,
          pmax: 24,
          rmin: 0.7,
          rmax: 6,
          imax: 5,
        },
        {
          nm: "Taifun The Eye (updated)",
          umin: 2.5,
          umax: 8,
          pmax: 24,
          rmin: 0.5,
          rmax: 6,
          imax: 7,
        },
        {
          nm: "Tesla",
          umin: 3,
          umax: 6,
          pmin: 3,
          pmax: 15,
          rmin: 1.2,
          imax: 3,
        },
        {
          nm: "Tesla 120W",
          umax: 11,
          pmin: 7.5,
          pmax: 120,
          rmin: 0.18,
          rmax: 3,
          imax: 24,
        },
        {
          nm: "Tesla 2 Sub Mod",
          umax: 4.2,
          pmax: 100,
          rmin: 0.1,
          rmax: 3.5,
          imax: 40,
        },
        {
          nm: "Tesla Spider",
          umax: 4.8,
          pmax: 12,
          imax: 3,
        },
        {
          nm: "Tobeco ZNA 36",
          umin: 1.2,
          umax: 11,
          pmin: 5,
          pmax: 36,
          rmin: 0.3,
          rmax: 3.3,
          imax: 12,
        },
        {
          nm: "Vamo 35W (clone)",
          umax: 9,
          pmin: 7,
          pmax: 35,
          rmin: 0.3,
          rmax: 3,
          imax: 10,
        },
        {
          nm: "Vamo V1 / V2 / V3 / V5",
          umin: 3,
          umax: 6,
          pmin: 3,
          pmax: 15,
          rmin: 1.2,
          rmax: 5,
          imax: 3.2,
        },
        {
          nm: "Vamo V7",
          umin: 1,
          umax: 9,
          pmin: 3,
          pmax: 40,
          rmin: 0.2,
          rmax: 5,
          imax: 10,
        },
        {
          nm: "VaporFi Vox II",
          umin: 3,
          umax: 8.5,
          pmin: 7,
          pmax: 50,
          rmin: 0.2,
          rmax: 3,
          imax: 22,
        },
        {
          nm: "Vicious Ant VariAnt 120W",
          umin: 2,
          umax: 8.4,
          pmin: 5,
          pmax: 120,
          rmin: 0.2,
          imax: 20,
        },
        {
          nm: "Vicious Ant VariAnt 250W",
          umin: 2,
          umax: 8.4,
          pmin: 5,
          pmax: 250,
          imax: 30,
        },
        {
          nm: "Vision Spinner / Spinner II",
          umin: 3.3,
          umax: 4.8,
          pmin: 4,
          pmax: 12,
          rmin: 1.2,
          rmax: 3,
          imax: 2.5,
        },
        {
          nm: "Vision X.Fir/X.Gun",
          umin: 3,
          umax: 6,
          pmin: 6,
          pmax: 12,
          imax: 2.5,
        },
        {
          nm: "Volcano Lavatube",
          umin: 3,
          umax: 6,
          pmax: 12.5,
          imax: 2.5,
        },
        {
          nm: "Volcano Lavatube v2.5",
          umin: 3,
          umax: 6,
          pmax: 15,
          imax: 3,
        },
        {
          nm: "Wismec Reuleaux RX200S (4.10)",
          umax: 9,
          pmin: 2,
          pmax: 250,
          rmin: 0.05,
          rmax: 3.5,
          imax: 35,
        },
        {
          nm: "YiHi SX130",
          umin: 3,
          umax: 8,
          pmin: 5,
          pmax: 30,
          rmin: 0.5,
          rmax: 3,
          imax: 13,
          chipnm: "SX130",
        },
        {
          nm: "YiHi SX130 v1.5",
          umax: 8.5,
          pmax: 30,
          rmin: 0.3,
          rmax: 3,
          imax: 13,
          chipnm: "SX130v1.5",
        },
        {
          nm: "YiHi SX130H",
          umin: 1,
          umax: 7,
          pmin: 7,
          pmax: 75,
          rmin: 0.2,
          rmax: 3,
          imax: 25,
          chipnm: "SX130H",
        },
        {
          nm: "YiHi SX220",
          umin: 4,
          umax: 8.5,
          pmin: 7,
          pmax: 22,
          rmin: 0.5,
          rmax: 3.5,
          imax: 5.5,
          chipnm: "SX220",
        },
        {
          nm: "YiHi SX300",
          umin: 4,
          umax: 8.5,
          pmin: 7,
          pmax: 30,
          rmin: 0.5,
          rmax: 3,
          imax: 10,
          chipnm: "SX300",
        },
        {
          nm: "YiHi SX330 V1 35W",
          umin: 3.6,
          umax: 8.5,
          pmin: 7,
          pmax: 35,
          rmin: 0.3,
          rmax: 3,
          imax: 13.5,
          chipnm: "SX330",
        },
        {
          nm: "YiHi SX330 V2 50W",
          umin: 3.6,
          umax: 8.5,
          pmin: 7,
          pmax: 50,
          rmin: 0.2,
          rmax: 3,
          imax: 16,
          chipnm: "SX330v2",
        },
        {
          nm: "YiHi SX330 V2C 70W",
          umin: 3.6,
          umax: 8.5,
          pmin: 7,
          pmax: 70,
          rmin: 0.2,
          rmax: 3,
          imax: 30,
          chipnm: "SX330v2c",
        },
        {
          nm: "YiHi SX330 V2 S 60W",
          umin: 3.6,
          umax: 8.5,
          pmin: 7,
          pmax: 60,
          rmin: 0.2,
          rmax: 3,
          imax: 20,
          chipnm: "SX330v2s",
        },
        {
          nm: "YiHi SX330 V3 100W",
          umin: 1,
          umax: 7,
          pmin: 10,
          pmax: 100,
          rmin: 0.15,
          rmax: 1.5,
          imax: 30,
          chipnm: "SX330v3",
        },
        {
          nm: "YiHi SX330 V3 150W",
          umin: 1.3,
          umax: 8.5,
          pmin: 10,
          pmax: 150,
          rmin: 0.1,
          rmax: 3,
          imax: 40,
          chipnm: "SX330v3-150",
        },
        {
          nm: "YiHi SX330 V3S 150W",
          umin: 1,
          umax: 7,
          pmin: 7,
          pmax: 150,
          rmin: 0.1,
          rmax: 3,
          imax: 40,
          chipnm: "SX330v3s",
        },
        {
          nm: "YiHi SX330-V3Si 200W",
          umax: 8.5,
          pmax: 200,
          rmin: 0.1,
          rmax: 3,
          imax: 40,
          chipnm: "SX330v3si",
        },
        {
          nm: "YiHi SX330 V4S 100W",
          umin: 1,
          umax: 7,
          pmin: 7,
          pmax: 100,
          rmin: 0.1,
          rmax: 3,
          imax: 35,
          chipnm: "SX330v4s",
        },
        {
          nm: "YiHi SX350 30W",
          umin: 1.5,
          umax: 9.5,
          pmin: 5,
          pmax: 30,
          rmin: 0.2,
          rmax: 3,
          imax: 12.5,
        },
        {
          nm: "YiHi SX350 50W",
          umin: 1,
          umax: 9.5,
          pmin: 5,
          pmax: 50,
          rmin: 0.2,
          rmax: 3,
          imax: 25,
        },
        {
          nm: "YiHi SX350 100W",
          umin: 1,
          umax: 9.5,
          pmin: 10,
          pmax: 100,
          rmin: 0.15,
          rmax: 3,
          imax: 40,
        },
        {
          nm: "YiHi SX350J VJ mode",
          umin: 1,
          umax: 9.5,
          pmin: 5,
          pmax: 50,
          rmin: 0.05,
          rmax: 0.3,
          imax: 40,
        },
        {
          nm: "YiHi SX350J VW/single batt mode",
          umin: 1,
          umax: 9.5,
          pmin: 5,
          pmax: 60,
          rmin: 0.15,
          rmax: 1.5,
          imax: 40,
        },
        {
          nm: "YiHi SX350J VW/dual batt mode",
          umin: 1,
          umax: 9.5,
          pmin: 5,
          pmax: 120,
          rmin: 0.15,
          rmax: 3,
          imax: 40,
        },
        {
          nm: "YiHi SX460",
          umin: 1,
          umax: 9.5,
          pmin: 5,
          pmax: 200,
          rmin: 0.15,
          rmax: 3,
          imax: 22,
        },
        {
          nm: "YiHi SX470",
          umin: 2,
          umax: 8.5,
          pmin: 5,
          pmax: 20,
          rmin: 0.5,
          rmax: 3,
          imax: 4.5,
        },
        {
          nm: "YiHi SX450",
          umin: 2,
          umax: 8.5,
          pmin: 5,
          pmax: 20,
          rmin: 1,
          rmax: 3.5,
          imax: 4.5,
        },
        {
          nm: "YiHi SXMini",
          umax: 9.5,
          pmax: 60,
          rmin: 0.15,
          rmax: 3,
          imax: 40,
        },
      ]),
      (a.getPresets = function () {
        var t = $.parseJSON(localStorage.getItem("CustomDataMod")) || [];
        return (function () {
          for (
            var t = function (t) {
                for (var i = 0, a = n; i < a.length; i++) {
                  var e = a[i];
                  if (e.chipnm === t) return e;
                }
              },
              i = [],
              a = 0,
              r = e;
            a < r.length;
            a++
          ) {
            var s = r[a],
              o = t(s.chip);
            i.push({
              alias: !0,
              nm: s.nm,
              nm2: o.nm,
              chipnm: o.chipnm,
              umin: o.umin,
              umax: o.umax,
              imin: o.imin,
              imax: o.imax,
              pmin: o.pmin,
              pmax: o.pmax,
              rmin: o.rmin,
              rmax: o.rmax,
            });
          }
          return n.concat(i);
        })().concat(t);
      });
  })(SE || (SE = {})),
  (function (t) {
    var i, a;
    (i = t.Themes || (t.Themes = {})),
      (a = (function () {
        function i() {
          (this.$seltheme = $("#themestab .selectedtheme")),
            this.bind(),
            this.writeNm();
        }
        return (
          (i.prototype.bind = function () {
            var t = this;
            $(".themez")
              .mouseenter(function (t) {
                $(t.delegateTarget).addClass("active");
              })
              .mouseleave(function (t) {
                $(t.delegateTarget).removeClass("active");
              })
              .click(function (i) {
                var a = $(i.delegateTarget);
                a.hasClass("bootswatch")
                  ? t.changeTheme({
                      url: a.attr("data-url"),
                      nm: a.text(),
                    })
                  : console.warn("unknown css");
              }),
              $(".removethemes").click(function () {
                t.changeTheme(), t.$seltheme.html("Default theme");
              }),
              $(".advancedthemes").click(function (t) {
                $(".themes-advanced").slideToggle(),
                  $(t.delegateTarget).toggleClass("active");
              }),
              $("#usecustomcssfile").click(function (i) {
                var a = $("#customcssfile").val();
                t.changeTheme({
                  nm: "Custom CSS file: " + a,
                  url: a,
                });
              });
          }),
          (i.prototype.changeTheme = function (i) {
            t.scaffold.customcss.saveSetting(i).loadCSS(), this.writeNm();
          }),
          (i.prototype.writeNm = function () {
            t.scaffold.customcss.theme
              ? this.$seltheme.html(t.scaffold.customcss.theme.nm)
              : this.$seltheme.html("Default theme");
          }),
          i
        );
      })()),
      (i.Page = a);
  })(SE || (SE = {})),
  (function (t) {
    var i, a, e;
    (i = t.Custom || (t.Custom = {})),
      (a = function (t) {
        for (var i in t)
          t.hasOwnProperty(i) && (isNaN(t[i]) || (t[i] = parseFloat(t[i])));
        return t;
      }),
      (e = (function () {
        function t(t) {
          var e = this;
          (this.$div = t),
            (this.data = []),
            (this.navn = "CustomData"),
            (this.templateData = Handlebars.compile(
              $("#template-data").html()
            )),
            (this.templateNoData = Handlebars.compile(
              $("#template-nodata").html()
            )),
            t.find(".import").click(function () {
              var t = e.$div.find("textarea");
              e.addJson(t), e.updateList(), t.val("");
            }),
            this.updateList(),
            this.$div.find("ul").click(function (n) {
              var r = $(n.target),
                s = (
                  r.is("li.customitem") ? r : r.parents("li.customitem")
                ).data("ii");
              if (r.hasClass("delete") || r.parents(".delete").length > 0)
                e.delete(s), e.updateList();
              else {
                var o = t.find("textarea"),
                  m = i.stripp(e.data[s]);
                (m = a(m)), o.val(JSON.stringify(m));
              }
            });
        }
        return (
          (t.prototype.get = function () {
            this.load(), this.updateList();
          }),
          (t.prototype.addJson = function (t) {
            var i = $.parseJSON(t.val());
            this.add(i);
          }),
          (t.prototype.itemDataHtml = function (t) {
            return t.nm;
          }),
          (t.prototype.updateList = function () {
            var t = [];
            if (0 === this.data.length) t.push(this.templateNoData({}));
            else
              for (var i = 0; i < this.data.length; i++)
                t.push(
                  this.templateData({
                    ii: i,
                    html: this.itemDataHtml(this.data[i]),
                  })
                );
            this.$div.find("ul").html(t.join(""));
          }),
          (t.prototype.add = function (t) {
            t.id || (t.id = "Custom" + new Date().toISOString()),
              this.data.push(t),
              this.save();
          }),
          (t.prototype.delete = function (t) {
            this.data.splice(t, 1), this.save();
          }),
          (t.prototype.save = function () {
            localStorage.setItem(this.navn, JSON.stringify(this.data));
          }),
          (t.prototype.load = function () {
            this.data = $.parseJSON(localStorage.getItem(this.navn)) || [];
          }),
          t
        );
      })()),
      (i.CustomData = e);
  })(SE || (SE = {})),
  (function (t) {
    var i, a, e;
    (i = t.Custom || (t.Custom = {})),
      (a = i.Batt || (i.Batt = {})),
      (e = (function (t) {
        function a(i) {
          var a = t.call(this, i) || this;
          return (
            (a.data = []),
            (a.templateBatt = Handlebars.compile(
              $("#template-data-batt").html()
            )),
            (a.navn += "Batt"),
            a.get(),
            i.find(".add").click(function () {
              a.addBatt();
            }),
            a
          );
        }
        return (
          __extends(a, t),
          (a.prototype.addBatt = function () {
            var i = this.$div.find("form"),
              a = {
                nm:
                  i.find(".nm").val() ||
                  "Custom " + new Date().toLocaleString(),
                q: i.find(".q").val() || 1e3,
                c: i.find(".c").val() || void 0,
                a: i.find(".a").val() || void 0,
                ff: "custom",
              };
            a.a || a.c
              ? (t.prototype.add.call(this, a), this.updateList())
              : alert(
                  "You need to provide either a C rating or a max continuous discharge current."
                );
          }),
          (a.prototype.itemDataHtml = function (t) {
            return (t.json = JSON.stringify(i.stripp(t))), this.templateBatt(t);
          }),
          a
        );
      })(i.CustomData)),
      (a.CustomBatt = e);
  })(SE || (SE = {})),
  (function (t) {
    var i, a, e;
    (i = t.Custom || (t.Custom = {})),
      (a = i.Mat || (i.Mat = {})),
      (e = (function (a) {
        function e(t) {
          var i = a.call(this, t) || this;
          return (
            (i.data = []),
            (i.templateMat = Handlebars.compile(
              $("#template-data-mat").html()
            )),
            (i.navn += "Mat"),
            i.get(),
            t.find(".add").click(function () {
              i.addMat();
            }),
            i
          );
        }
        return (
          __extends(e, a),
          (e.prototype.addMat = function () {
            var i = this.$div.find("form"),
              e = {
                id: void 0,
                nm:
                  i.find(".nm").val() ||
                  "Custom " + new Date().toLocaleString(),
                rstv: i.find(".rstv").val() || 0.5,
                hc: i.find(".hc").val() || 0.5,
                dens: i.find(".dens").val() || 7.5,
                tcr: i.find(".tcr").val() || void 0,
              },
              n = i.find(".tfr").val();
            if (n)
              if (n.indexOf("]") > -1)
                try {
                  e.tfr = JSON.parse(n);
                } catch (t) {
                  alert("Could not parse JSON.");
                }
              else {
                var r = n.split(",");
                if (t.Mth.isEven(r.length)) {
                  e.tfr = [];
                  for (var s = 0; s < r.length; s += 2) {
                    var o = parseFloat(r[s]),
                      m = parseFloat(r[s + 1]);
                    e.tfr.push([o, m]);
                  }
                } else alert("The number of input values should be even.");
              }
            e.rstv && e.hc && e.dens
              ? (a.prototype.add.call(this, e), this.updateList())
              : alert(
                  "Resistivity, heat capacity and density are required values."
                );
          }),
          (e.prototype.itemDataHtml = function (t) {
            return (t.json = JSON.stringify(i.stripp(t))), this.templateMat(t);
          }),
          e
        );
      })(i.CustomData)),
      (a.CustomMat = e);
  })(SE || (SE = {})),
  (function (t) {
    var i, a, e;
    (i = t.Custom || (t.Custom = {})),
      (a = i.Mod || (i.Mod = {})),
      (e = (function (t) {
        function a(i) {
          var a = t.call(this, i) || this;
          return (
            (a.data = []),
            (a.templateMod = Handlebars.compile(
              $("#template-data-mod").html()
            )),
            (a.navn += "Mod"),
            a.get(),
            i.find(".add").click(function () {
              a.addMod();
            }),
            a
          );
        }
        return (
          __extends(a, t),
          (a.prototype.addMod = function () {
            var i = this.$div.find("form"),
              a = {
                nm:
                  i.find(".nm").val() ||
                  "Custom " + new Date().toLocaleString(),
                umin: i.find(".umin").val() || void 0,
                umax: i.find(".umax").val() || void 0,
                pmin: i.find(".pmin").val() || void 0,
                pmax: i.find(".pmax").val() || void 0,
                rmin: i.find(".rmin").val() || void 0,
                rmax: i.find(".rmax").val() || void 0,
                imax: i.find(".imax").val() || void 0,
              };
            a.umax && a.pmax && a.imax
              ? (t.prototype.add.call(this, a), this.updateList())
              : alert(
                  "Max voltage, max power and max current are required values."
                );
          }),
          (a.prototype.itemDataHtml = function (t) {
            return (t.json = JSON.stringify(i.stripp(t))), this.templateMod(t);
          }),
          a
        );
      })(i.CustomData)),
      (a.CustomMod = e);
  })(SE || (SE = {})),
  (function (t) {
    !(function (t) {
      t.stripp = function (t) {
        return delete t.id, delete t.json, t;
      };
      var i = (function () {
        return function () {
          var i = window.location.hash.substr(1),
            a = $(".custommat"),
            e = $(".custombatt"),
            n = $(".custommod");
          "mat" === i
            ? (e.hide(), n.hide(), new t.Mat.CustomMat(a))
            : "batt" === i
            ? (a.hide(), n.hide(), new t.Batt.CustomBatt(e))
            : "mod" === i
            ? (a.hide(), e.hide(), new t.Mod.CustomMod(n))
            : (new t.Mat.CustomMat(a),
              new t.Batt.CustomBatt(e),
              new t.Mod.CustomMod(n));
        };
      })();
      t.Page = i;
    })(t.Custom || (t.Custom = {}));
  })(SE || (SE = {})),
  (function (t) {
    var i, a;
    (i = t.About || (t.About = {})),
      (a = (function () {
        return function () {};
      })()),
      (i.Page = a);
  })(SE || (SE = {})),
  (function (t) {
    var i;
    (function (i) {
      (i.optionsHtml = function (i) {
        t.Data.Batt.batts.sort(function (t, i) {
          return t.ff !== i.ff ? (t.ff > i.ff ? 1 : -1) : t.nm > i.nm ? 1 : -1;
        });
        for (var a = [], e = 0, n = i; e < n.length; e++) {
          var r = n[e];
          r.a && (r.c = (1e3 * r.a) / r.q),
            a.push(
              '<option \n                    class="notranslate" \n                    data-battcap="' +
                r.q +
                '" \n                    data-a="' +
                (r.a || "null") +
                '" \n                    data-crating="' +
                r.c +
                '" \n                    data-nm="' +
                r.nm +
                '" \n                    data-ff="' +
                r.ff +
                '"\n                    data-t="' +
                (r.t || "") +
                '" \n                    data-srcUrl="' +
                (r.srcUrl || "") +
                '" \n                    value="' +
                r.nm +
                "," +
                r.q +
                "," +
                r.c +
                '"\n                    ' +
                (r.t ? ' title="' + r.t + '"' : "") +
                "\n                >\n                    " +
                r.ff +
                " - \n                    " +
                r.nm +
                " (\n                        " +
                r.q +
                " mAh, " +
                (r.a ? r.a + "A = " + t.Mth.round(r.c) + "C" : r.c + "C") +
                "\n                    )\n                </option>"
            );
        }
        return a.join("");
      }),
        (i.initFormFactorFilter = function (i, a) {
          i.html(e()),
            i.find("input").click(function (i) {
              a.val(""), t.Global.updateQs("?");
              var e = $(i.delegateTarget).val();
              "all" === e
                ? a.find("option").show()
                : a.find("option").each(function (t, i) {
                    $(i).attr("data-ff") === e ||
                    "" === $(i).attr("data-battcap")
                      ? $(i).show()
                      : $(i).hide();
                  });
            });
        });
      var a = function (t, i) {
          return (
            void 0 === i && (i = !1),
            '\n            <label class="radio-inline" for="formfactor' +
              t +
              '">\n                <input class="" type="radio" name="formfactorfilter" value="' +
              t +
              '" id="formfactor' +
              t +
              '" ' +
              (i ? " checked=checked" : "") +
              " />\n                " +
              t +
              "\n            </label>\n        "
          );
        },
        e = function () {
          return (
            '<div class="radio">' +
            a("all", !0) +
            a("custom") +
            '</div>\n        <div class="radio">' +
            a("14500") +
            a("16340") +
            a("16650") +
            '</div>\n        <div class="radio">' +
            a("18350") +
            a("18490") +
            a("18500") +
            a("18650") +
            '</div>\n        <div class="radio">' +
            a("20700") +
            a("21700") +
            a("26650") +
            "</div>"
          );
        };
    })((i = t.Batt || (t.Batt = {})).Presets || (i.Presets = {}));
  })(SE || (SE = {})),
  (function (t) {
    !(function (i) {
      var a = {
          apv: $("#bd-pv-apv"),
          mech: $("#bd-pv-mech"),
          vw: $("#bd-mode-vw"),
          vv: $("#bd-mode-vv"),
          attyres: $("#bd-attyres"),
          vapeu: $("#bd-vapeu"),
          vapep: $("#bd-vapep"),
          battu: $("#bd-battu"),
          effic: $("#bd-effic"),
          battcap: $("#bd-battcap"),
          crating: $("#bd-crating"),
          nomu: $("#bd-nomu"),
          hidemech: $(".bd-hidemech"),
          hideapv: $(".bd-hideapv"),
          hidevw: $(".bd-hidevw"),
          hidevv: $(".bd-hidevv"),
          always: $(".col-always"),
          attyresultscol: $(".attyresultscol"),
          battruntime: $("#bd-battruntime"),
          battpre: $("#bd-battpre"),
        },
        e = (function () {
          function e() {
            this.coil = e.defCoil;
            var t = "-template";
            (this.templ = {
              atty: Handlebars.compile($("#attyresults" + t).html()),
              batt: Handlebars.compile($("#battresults" + t).html()),
              limit: Handlebars.compile($("#battlimit" + t).html()),
              runtime: Handlebars.compile($("#battruntime" + t).html()),
            }),
              (this.inpVal = e.defVal);
          }
          return (
            (e.prototype.bdShowHide = function () {
              var t = "blind",
                i = "col-md-";
              this.inpVal.apv
                ? (a.hidemech.show(t),
                  a.hideapv.hide(),
                  this.inpVal.vw
                    ? (a.hidevw.hide(), a.hidevv.show(t))
                    : (a.hidevw.show(t), a.hidevv.hide()),
                  a.always.removeClass(i + 4).addClass(i + 3))
                : (a.hidemech.hide(),
                  a.hideapv.show(t),
                  a.always.removeClass(i + 3).addClass(i + 4));
            }),
            (e.prototype.calc = function () {
              var i, n;
              (this.coil = e.defCoil),
                this.inpVal.apv
                  ? (this.inpVal.vw
                      ? ((this.coil.p = this.inpVal.vwset),
                        (this.coil.u = Math.sqrt(
                          this.coil.p * this.inpVal.attyres
                        )),
                        (this.coil.c = this.coil.u / this.inpVal.attyres))
                      : ((this.coil.u = this.inpVal.vvset),
                        (this.coil.c = this.coil.u / this.inpVal.attyres),
                        (this.coil.p = this.coil.u * this.coil.c)),
                    a.attyresultscol.show(),
                    $("#bd-attyresults").html(
                      this.templ.atty({
                        u: t.Mth.round(this.coil.u),
                        p: t.Mth.round(this.coil.p),
                        i: t.Mth.round(this.coil.c),
                      })
                    ),
                    (i =
                      (n = this.coil.p / this.inpVal.effic) /
                      this.inpVal.battu))
                  : ((n =
                      (i = this.inpVal.battu / this.inpVal.attyres) *
                      this.inpVal.battu),
                    a.attyresultscol.hide()),
                $("#bd-battresults").html(
                  this.templ.batt({
                    u: t.Mth.round(this.inpVal.battu),
                    i: t.Mth.round(i),
                    p: t.Mth.round(n),
                  })
                );
              var r = (this.inpVal.battcap / 1e3) * this.inpVal.crating,
                s = (i / r) * 100,
                o = {
                  amplimit: t.Mth.round(r),
                  battu: this.inpVal.battu.toString(),
                  headroom: t.Mth.round(100 - s, 0),
                };
              s > 100
                ? (o.over100 = "x")
                : s > 90
                ? (o.over90 = "x")
                : s > 80
                ? (o.over80 = "x")
                : s > 70
                ? (o.over70 = "x")
                : (o.ok = "x"),
                $("#bd-battlimit").html(this.templ.limit(o));
              var m,
                l,
                c = (this.inpVal.battcap / 1e3) * this.inpVal.nomu;
              if (this.inpVal.apv)
                (m = this.inpVal.vw
                  ? this.inpVal.vwset
                  : this.inpVal.vvset *
                    (this.inpVal.nomu / this.inpVal.attyres)),
                  (l = (c / n) * 60);
              else {
                var h = this.inpVal.nomu / this.inpVal.attyres;
                (m = this.inpVal.nomu * h),
                  (l = (c / (m /= this.inpVal.effic)) * 60);
              }
              a.battruntime.html(
                this.templ.runtime({
                  nomu: this.inpVal.nomu.toString(),
                  cappow: t.Mth.round(c),
                  attyres: this.inpVal.attyres.toString(),
                  nomp: t.Mth.round(m),
                  battime: t.Mth.round(l, 0),
                  battpuffs: t.Mth.round(l / (5 / 60), 0),
                })
              ),
                $("#bd-battlimitpanel").show(),
                $("#bd-battruntimepanel").show(),
                t.Global.setHelpClass($(".panel"));
            }),
            (e.prototype.read = function () {
              (this.inpVal = {
                apv: a.apv.is(":checked"),
                vw: a.vw.is(":checked"),
                attyres: t.Global.limVal(a.attyres),
                vvset: t.Global.limVal(a.vapeu),
                vwset: t.Global.limVal(a.vapep),
                effic: void 0,
                nomu: t.Global.limVal(a.nomu),
                battcap: t.Global.limVal(a.battcap),
                crating: t.Global.limVal(a.crating),
                battu: t.Global.limVal(a.battu),
              }),
                (this.inpVal.effic = this.inpVal.apv
                  ? parseInt(a.effic.val(), 10) / 100
                  : 1),
                this.inpVal.effic > 1
                  ? ((this.inpVal.effic = 1),
                    a.battu.val(this.inpVal.battu),
                    a.effic.val(t.Mth.round(100 * this.inpVal.effic, 0)))
                  : this.inpVal.effic < 0.01 &&
                    ((this.inpVal.effic = 0.01),
                    a.effic.val(t.Mth.round(100 * this.inpVal.effic, 0)));
            }),
            (e.prototype.write = function () {
              this.inpVal.apv
                ? a.apv.prop("checked", !0)
                : a.mech.prop("checked", !0),
                this.inpVal.vw
                  ? a.vw.prop("checked", !0)
                  : a.vv.prop("checked", !0),
                a.attyres.val(this.inpVal.attyres),
                a.vapeu.val(this.inpVal.vvset),
                a.vapep.val(this.inpVal.vwset),
                a.battu.val(this.inpVal.battu),
                a.effic.val(t.Mth.round(100 * this.inpVal.effic, 0)),
                a.battcap.val(this.inpVal.battcap),
                a.crating.val(t.Mth.round(this.inpVal.crating, 2)),
                a.nomu.val(this.inpVal.nomu);
            }),
            (e.prototype.load = function (t) {
              void 0 === t
                ? $("#bd-load").hide()
                : (this.inpVal.nomu = this.inpVal.nomu || 3.7),
                this.write(),
                this.calc(),
                this.bdShowHide();
            }),
            (e.prototype.setPre = function () {
              var i = a.battpre.find(":selected");
              if (i.val()) {
                var e = i.attr("data-battcap");
                if (e) {
                  (this.inpVal.battcap = parseFloat(e)),
                    (this.inpVal.nomu = parseFloat(i.attr("data-nomu")) || 3.7),
                    (this.inpVal.crating = parseFloat(i.attr("data-crating"))),
                    this.write(),
                    this.calc();
                  var n =
                    "Presets for convenience only, not to be trusted blindly. Please verify capacity, nominal voltage and C rating.";
                  return (
                    i.attr("title")
                      ? t.Global.ccMenuMsg(
                          "<p>Note: " +
                            i.attr("title") +
                            "</p><p>" +
                            n +
                            "</p>",
                          "danger",
                          16e3
                        )
                      : t.Global.ccMenuMsg(
                          "<p>Note: " + n + "</p>",
                          "warning",
                          8e3
                        ),
                    {
                      nm: i.attr("data-nm"),
                      mah: parseFloat(i.attr("data-battcap")),
                      a:
                        "null" === i.attr("data-a")
                          ? null
                          : parseFloat(i.attr("data-a")),
                      c: parseFloat(i.attr("data-crating")),
                      t: i.attr("data-t"),
                      srcUrl: i.attr("data-srcUrl"),
                    }
                  );
                }
              }
            }),
            (e.prototype.makePreOpts = function (t) {
              i.Presets.initFormFactorFilter($(".formfactorfilter"), a.battpre),
                a.battpre.html(
                  '<option data-battcap=""></option>' + i.Presets.optionsHtml(t)
                );
            }),
            (e.prototype.getPre = function () {
              this.makePreOpts(t.Data.Batt.batts);
            }),
            (e.defVal = {
              apv: !1,
              vw: !1,
              attyres: 1.8,
              vvset: 3.7,
              vwset: 7.5,
              battu: 4.2,
              effic: 0.9,
              battcap: 700,
              crating: 5,
              nomu: 3.7,
            }),
            (e.defCoil = {
              p: 0,
              u: 0,
              c: 0,
            }),
            e
          );
        })();
      i.init = function () {
        var i = new e();
        i.write(),
          i.getPre(),
          $("#bd-pv-radio input").change(function () {
            i.read(),
              i.calc(),
              i.bdShowHide(),
              t.Ga.gad("batt", "apv", t.Conv.bool2int(i.inpVal.apv));
          }),
          $("#bd-mode-radio input").change(function () {
            i.read(),
              (i.inpVal.vwset = i.coil.p),
              (i.inpVal.vvset = i.coil.u),
              i.calc(),
              i.inpVal.vw
                ? a.vapep.val(t.Mth.round(i.inpVal.vwset, 1))
                : a.vapeu.val(t.Mth.round(i.inpVal.vvset, 1)),
              i.bdShowHide(),
              t.Ga.gad("batt", "vw", t.Conv.bool2int(i.inpVal.vw));
          }),
          $("input.form-control").change(function () {
            i.read(), i.calc(), t.Ga.gad("batt", "calc");
          }),
          $("#bd-reset").click(function () {
            i.write(),
              i.calc(),
              i.bdShowHide(),
              t.Global.ccMenuMsg(
                "Default settings have been restored.",
                "success"
              ),
              t.Ga.gad("batt", "reset");
          }),
          $("#bd-save").click(function () {
            t.Global.seSave("bd", i.inpVal),
              $("#bd-load").show(),
              t.Ga.gad("batt", "save");
          }),
          $("#bd-load").click(function () {
            i.load(t.Global.seLoad("bd")), t.Ga.gad("batt", "load");
          }),
          a.battpre.change(function () {
            $(".fade5").remove();
            var a = i.setPre();
            a
              ? (a.nm
                  ? (t.Global.updateQs(
                      "&b=" +
                        a.nm.replace(/ /g, "_") +
                        "&mah=" +
                        a.mah +
                        "&c=" +
                        a.c
                    ),
                    t.Ga.gad("batt", "preset", a.nm))
                  : t.Global.updateQs("?"),
                n(a))
              : n();
          }),
          i.load(e.defVal);
        var r = t.Global.getQs();
        if (Object.keys(r).length > 0) {
          var s = r.b.replace(/_/g, " ");
          setTimeout(function () {
            a.battpre.val(s + "," + r.mah + "," + r.c), i.setPre();
          }, 1e3);
        }
        i.bdShowHide(), i.calc();
      };
      var n = function (i) {
        var a = $(".aboutbattery");
        i || a.html(""),
          a.html(
            '<div class="alert alert-info">\n                <dl class="dl-horizontal">\n                    <dt>Name</dt>\n                    <dd>' +
              i.nm +
              "</dd>\n                    <dt>Capacity</dt>\n                    <dd>" +
              i.mah +
              " mAh</dd>\n                    <dt>C-rating</dt>\n                    <dd>\n                        " +
              (i.a ? "~ " : "") +
              " \n                        " +
              t.Mth.round(i.c, 1) +
              "\n                    </dd>\n                    <dt>Amps</dt>\n                    <dd>\n                        " +
              (i.a
                ? t.Mth.round(i.a, 1)
                : "~ " + t.Mth.round((i.c * i.mah) / 1e3, 1)) +
              " A\n                    </dd>\n                    " +
              (i.t
                ? "<dt>Note</dt>\n                        <dd>" + i.t + "</dd>"
                : "") +
              "\n                    " +
              (i.srcUrl
                ? '<dt>Source</dt>\n                        <dd>\n                            <a href="' +
                  i.srcUrl +
                  '" target="_blank" rel="nofollow">Link</a>\n                        </dd>'
                : "") +
              "\n                </dl>    \n            </div>"
          );
      };
    })(t.Batt || (t.Batt = {}));
  })(SE || (SE = {})),
  (function (t) {
    var i, a;
    ((a = i || (i = {}))[(a.ounce = 28.349523125)] = "ounce"),
      (a[(a.grain = 0.06479891)] = "grain");
    var e = (function () {
      function t() {}
      return (
        (t.mm2in = function (t) {
          return t / 25.4;
        }),
        (t.in2mm = function (t) {
          return 25.4 * t;
        }),
        (t.cm2in = function (t) {
          return t / 2.54;
        }),
        (t.in2cm = function (t) {
          return 2.54 * t;
        }),
        (t.g2oz = function (t) {
          return t / 28.349523125;
        }),
        (t.oz2g = function (t) {
          return 28.349523125 * t;
        }),
        (t.g2gr = function (t) {
          return t / 0.06479891;
        }),
        (t.gr2g = function (t) {
          return 0.06479891 * t;
        }),
        (t.awg2in = function (t) {
          return 0.005 * Math.pow(92, (36 - t) / 39);
        }),
        (t.awg2mm = function (i) {
          return t.in2mm(t.awg2in(i));
        }),
        (t.getBaseLog = function (t, i) {
          return Math.log(i) / Math.log(t);
        }),
        (t.in2awg = function (i) {
          return -39 * t.getBaseLog(92, i / 0.005) + 36;
        }),
        (t.mm2awg = function (i) {
          return t.in2awg(t.mm2in(i));
        }),
        (t.in2awgApprox = function (i) {
          var a = t.in2awg(i),
            e = Math.round(a);
          if (Math.abs(t.awg2in(e) - i) / i < 0.01)
            return {
              hit: [e.toString(), i],
            };
          var n = Math.floor(a),
            r = Math.ceil(a);
          return {
            gt: [n.toString(), t.awg2in(n)],
            lt: [r.toString(), t.awg2in(r)],
          };
        }),
        (t.mm2awgApprox = function (i) {
          return t.in2awgApprox(t.mm2in(i));
        }),
        (t.findClosestGaugeIn = function (t, i) {
          for (var a = {}, e = 0, n = t; e < n.length; e++) {
            var r = n[e];
            if (r[1] > i) a.lt = r;
            else if (r[1] === i)
              return {
                hit: r,
              };
            if (r[1] < i)
              return {
                gt: r,
                lt: a.lt,
              };
          }
          return a;
        }),
        (t.findClosestGaugeMm = function (i, a) {
          return t.findClosestGaugeIn(i, t.mm2in(a));
        }),
        (t.findGaugeIn = function (t, i) {
          for (var a = 0, e = t; a < e.length; a++) {
            var n = e[a];
            if (String(n[0]) === i) return n[1];
          }
        }),
        (t.findGaugeMm = function (i, a) {
          return t.in2mm(t.findGaugeIn(i, a));
        }),
        (t.c2f = function (t) {
          return (9 * t) / 5 + 32;
        }),
        (t.f2c = function (t) {
          return (5 * (t - 32)) / 9;
        }),
        (t.in2 = 645.16),
        (t.in3 = 25.4 * t.in2),
        (t.fracArr = [
          "1/64",
          "1/32",
          "3/64",
          "1/16",
          "5/64",
          "3/32",
          "7/64",
          "1/8",
          "9/64",
          "5/32",
          "11/64",
          "3/16",
          "13/64",
          "7/32",
          "15/64",
          "1/4",
          "17/64",
          "9/32",
          "19/64",
          "5/16",
          "21/64",
          "11/32",
          "23/64",
          "3/8",
          "25/64",
          "13/32",
          "27/64",
          "7/16",
          "29/64",
          "15/32",
          "31/64",
          "1/2",
          "33/64",
          "17/32",
          "35/64",
          "9/16",
          "37/64",
          "19/32",
          "39/64",
          "5/8",
          "41/64",
          "21/32",
          "43/64",
          "11/16",
          "45/64",
          "23/32",
          "47/64",
          "3/4",
          "49/64",
          "25/32",
          "51/64",
          "13/16",
          "53/64",
          "27/32",
          "55/64",
          "7/8",
          "57/64",
          "29/32",
          "59/64",
          "15/16",
          "61/64",
          "31/32",
          "63/64",
        ]),
        (t.bwgArr = [
          ["00000 (5/0)", 0.5],
          ["0000 (4/0)", 0.454],
          ["000 (3/0)", 0.425],
          ["00 (2/0)", 0.38],
          ["0", 0.34],
          ["1", 0.3],
          ["2", 0.284],
          ["3", 0.259],
          ["4", 0.238],
          ["5", 0.22],
          ["6", 0.203],
          ["6.5", 0.188],
          ["7", 0.18],
          ["7.5", 0.172],
          ["8", 0.165],
          ["8.5", 0.156],
          ["9", 0.148],
          ["9.5", 0.141],
          ["10", 0.134],
          ["10.5", 0.126],
          ["11", 0.12],
          ["11.5", 0.115],
          ["12", 0.109],
          ["12.5", 0.1],
          ["13", 0.095],
          ["13.5", 0.089],
          ["14", 0.083],
          ["14.5", 0.078],
          ["15", 0.072],
          ["15.5", 0.068],
          ["16", 0.065],
          ["16.5", 0.062],
          ["17", 0.058],
          ["17.5", 0.056],
          ["18", 0.049],
          ["18.5", 0.046],
          ["19", 0.042],
          ["19.5", 0.039],
          ["20", 0.03575],
          ["20.5", 0.343],
          ["21", 0.03225],
          ["21.5", 0.0303],
          ["22", 0.02825],
          ["22.5", 0.0263],
          ["23", 0.02525],
          ["23.5", 0.0233],
          ["24", 0.02225],
          ["24.5", 0.0213],
          ["25", 0.02025],
          ["25.5", 0.0193],
          ["26", 0.01825],
          ["27", 0.01625],
          ["28", 0.01425],
          ["29", 0.01325],
          ["30", 0.01225],
          ["31", 0.01025],
          ["32", 0.00925],
          ["33", 0.00825],
          ["34", 0.00725],
          ["35", 0.005],
          ["36", 0.004],
        ]),
        (t.swgArr = [
          ["7/0", 0.5],
          ["6/0", 0.464],
          ["5/0", 0.432],
          ["4/0", 0.4],
          ["3/0", 0.372],
          ["2/0", 0.348],
          ["0", 0.324],
          ["1", 0.3],
          ["2", 0.276],
          ["3", 0.252],
          ["4", 0.232],
          ["5", 0.212],
          ["6", 0.192],
          ["7", 0.176],
          ["8", 0.16],
          ["9", 0.144],
          ["10", 0.128],
          ["11", 0.116],
          ["12", 0.104],
          ["13", 0.092],
          ["14", 0.08],
          ["15", 0.072],
          ["16", 0.064],
          ["17", 0.056],
          ["18", 0.048],
          ["19", 0.04],
          ["20", 0.0369],
          ["21", 0.032],
          ["22", 0.028],
          ["23", 0.024],
          ["24", 0.022],
          ["25", 0.02],
          ["26", 0.018],
          ["27", 0.0164],
          ["28", 0.0148],
          ["29", 0.0136],
          ["30", 0.0124],
          ["31", 0.0116],
          ["32", 0.0108],
          ["33", 0.01],
          ["34", 0.0092],
          ["35", 0.0084],
          ["36", 0.0076],
          ["37", 0.0068],
          ["38", 0.006],
          ["39", 0.0052],
          ["40", 0.0048],
          ["41", 0.0044],
          ["42", 0.004],
          ["43", 0.0036],
          ["44", 0.0032],
          ["45", 0.0028],
          ["46", 0.0024],
          ["47", 0.002],
          ["48", 0.0016],
          ["49", 0.0012],
          ["50", 0.001],
        ]),
        t
      );
    })();
    t.Conv = e;
  })(SE || (SE = {})),
  (function (t) {
    !(function (i) {
      (t.Conv || (t.Conv = {})).bool2int = function (t) {
        return t ? 1 : 0;
      };
    })();
  })(SE || (SE = {})),
  (function (t) {
    !(function (i) {
      var a;
      ((a = i.CUnits || (i.CUnits = {}))[(a.mm = 0)] = "mm"),
        (a[(a.inch = 1)] = "inch"),
        (a[(a.awg = 2)] = "awg"),
        (a[(a.bwg = 3)] = "bwg"),
        (a[(a.swg = 4)] = "swg"),
        (a[(a.fracIn = 5)] = "fracIn");
      var e = (function () {
        function i(i) {
          (this.$el = i),
            (this.defaultValues = function () {
              return {
                fracInArr: [],
                fromValue: 1,
                fromUnit: 1,
                fromStep: 0.001,
                toUnit: 0,
                toDigits: 3,
                useUnit: 1,
                mm: 0,
                showSi: !0,
                toValue: void 0,
              };
            }),
            (this.conf = this.defaultValues());
          for (var a = 0, e = t.Conv.fracArr; a < e.length; a++) {
            var n = e[a].split("/");
            this.conf.fracInArr.push([
              "<sup>" + n[0] + "</sup>/<sub>" + n[1] + "</sub>",
              parseInt(n[0], 10) / parseInt(n[1], 10),
            ]);
          }
          this.conf.fracInArr.reverse(),
            this.bind(),
            this.convert(),
            t.Ga.gad("coil-con", "init");
        }
        return (
          (i.prototype.bind = function () {
            var i = this;
            this.$el.fromu.val(this.conf.fromUnit).change(function (a) {
              (i.conf.fromUnit = parseInt($(a.delegateTarget).val(), 10)),
                i.$el.fromvsel.hide(),
                i.$el.fromv.show(),
                (i.conf.fromValue = i.$el.fromv.val()),
                2 === i.conf.fromUnit
                  ? (i.conf.fromStep = 1)
                  : 1 === i.conf.fromUnit
                  ? (i.conf.fromStep = 0.001)
                  : 3 === i.conf.fromUnit
                  ? (i.$el.fromv.hide(),
                    i.$el.fromvsel.show().html(i.conFillSel(t.Conv.bwgArr)),
                    (i.conf.fromValue = i.$el.fromvsel.val()))
                  : 4 === i.conf.fromUnit
                  ? (i.$el.fromv.hide(),
                    i.$el.fromvsel.show().html(i.conFillSel(t.Conv.swgArr)),
                    (i.conf.fromValue = i.$el.fromvsel.val()))
                  : 5 === i.conf.fromUnit
                  ? (i.$el.fromv.hide(),
                    i.$el.fromvsel.show().html(i.conFillSel(i.conf.fracInArr)),
                    (i.conf.fromValue = i.$el.fromvsel.val()))
                  : (i.conf.fromStep = 0.1),
                i.$el.fromv.attr("step", i.conf.fromStep),
                i.convert(),
                t.Ga.gad("coil-con", "fromu", i.conf.fromUnit);
            }),
              this.$el.fromv
                .val(this.conf.fromValue)
                .attr("step", this.conf.fromStep)
                .change(function (a) {
                  (i.conf.fromValue = t.Global.readNumber(
                    $(a.delegateTarget).val()
                  )),
                    isNaN(i.conf.fromValue) &&
                      ((i.conf.fromValue = 1),
                      $(a.delegateTarget).val(i.conf.fromValue)),
                    i.convert(),
                    t.Ga.gad("coil-con", "fromv", i.conf.fromValue);
                }),
              this.$el.fromvsel.change(function (a) {
                (i.conf.fromValue = $(a.delegateTarget).val()),
                  i.convert(),
                  t.Ga.gad("coil-con", "fromvsel", i.conf.fromValue);
              }),
              this.$el.tou.val(this.conf.toUnit).change(function (a) {
                (i.conf.toUnit = parseInt($(a.delegateTarget).val(), 10)),
                  i.convert(),
                  t.Ga.gad("coil-con", "tou", i.conf.toUnit);
              }),
              this.$el.tod.val(this.conf.toDigits).change(function (a) {
                (i.conf.toDigits = parseInt($(a.delegateTarget).val(), 10)),
                  isNaN(i.conf.toDigits) &&
                    ((i.conf.toDigits = 3),
                    $(a.delegateTarget).val(i.conf.toDigits)),
                  i.convert(),
                  t.Ga.gad("coil-con", "tod", i.conf.toDigits);
              }),
              this.$el.swap.click(function () {
                var t = i.conf.fromUnit;
                if (
                  ((i.conf.fromUnit = i.conf.toUnit),
                  (i.conf.toUnit = t),
                  i.$el.fromu.val(i.conf.fromUnit),
                  i.$el.tou.val(i.conf.toUnit),
                  void 0 === i.conf.toValue)
                )
                  (i.conf.toValue = i.conf.fromValue),
                    (i.conf.fromValue = void 0),
                    i.$el.fromv.val("");
                else {
                  var a = i.conf.fromValue;
                  (i.conf.fromValue = i.conf.toValue),
                    (i.conf.toValue = a),
                    i.$el.fromv.val(i.conf.fromValue),
                    i.convert();
                }
              });
          }),
          (i.prototype.conFillSel = function (t) {
            for (var i = [], a = 0, e = t; a < e.length; a++) {
              var n = e[a];
              i.push('<option value="' + n[0] + '">' + n[0] + "</option>");
            }
            return i.join("");
          }),
          (i.prototype.uNm = function (t) {
            return 0 === t
              ? "mm"
              : 1 === t || 5 === t
              ? "in"
              : 2 === t
              ? "AWG"
              : 3 === t
              ? "BWG"
              : 4 === t
              ? "SWG"
              : void console.warn("unknown unit", t);
          }),
          (i.prototype.convert = function () {
            var i,
              a = this.conf;
            0 === a.fromUnit || 1 === a.fromUnit
              ? (a.useUnit = a.fromUnit)
              : a.showSi
              ? (a.useUnit = 0)
              : (a.useUnit = 1),
              0 === a.fromUnit
                ? (a.mm = a.fromValue)
                : 1 === a.fromUnit
                ? (a.mm = t.Conv.in2mm(a.fromValue))
                : 2 === a.fromUnit
                ? (a.mm = t.Conv.awg2mm(a.fromValue))
                : 3 === a.fromUnit
                ? (a.mm = t.Conv.in2mm(
                    t.Conv.findGaugeIn(t.Conv.bwgArr, a.fromValue.toString())
                  ))
                : 4 === a.fromUnit
                ? (a.mm = t.Conv.in2mm(
                    t.Conv.findGaugeIn(t.Conv.swgArr, a.fromValue.toString())
                  ))
                : 5 === a.fromUnit &&
                  (a.mm = t.Conv.in2mm(
                    t.Conv.findGaugeIn(a.fracInArr, a.fromValue.toString())
                  ));
            var e = [];
            (a.toValue = void 0),
              0 === a.toUnit
                ? ((i = a.mm), (a.toValue = i))
                : 1 === a.toUnit
                ? ((i = t.Conv.mm2in(a.mm)), (a.toValue = i))
                : 2 === a.toUnit
                ? ((i = t.Conv.mm2awg(a.mm)), (a.toValue = i))
                : 3 === a.toUnit
                ? e.push(this.writeGa(t.Conv.bwgArr, "BWG"))
                : 4 === a.toUnit
                ? e.push(this.writeGa(t.Conv.swgArr, "SWG"))
                : 5 === a.toUnit && e.push(this.writeGa(a.fracInArr, "in")),
              0 === e.length &&
                e.push(
                  "<strong>" +
                    t.Mth.round(i, a.toDigits) +
                    " " +
                    this.uNm(a.toUnit) +
                    "</strong>"
                );
            var n = [];
            n.push(a.fromValue + " "),
              n.push(" " + this.uNm(a.fromUnit)),
              (a.showSi && 0 === a.toUnit) ||
                ((a.showSi || 1 !== a.toUnit) &&
                  (a.showSi && 1 === a.fromUnit
                    ? n.push(
                        " (" +
                          t.Mth.round(t.Conv.in2mm(a.fromValue), a.toDigits) +
                          " " +
                          this.uNm(0) +
                          ")"
                      )
                    : a.showSi || 0 !== a.fromUnit
                    ? 2 === a.fromUnit
                      ? 1 === a.useUnit
                        ? n.push(
                            " (" +
                              t.Mth.round(
                                t.Conv.awg2in(a.fromValue),
                                a.toDigits
                              ) +
                              " " +
                              this.uNm(1) +
                              ")"
                          )
                        : n.push(
                            " (" +
                              t.Mth.round(
                                t.Conv.awg2mm(a.fromValue),
                                a.toDigits
                              ) +
                              " " +
                              this.uNm(0) +
                              ")"
                          )
                      : 3 === a.fromUnit
                      ? a.showSi && 0 !== a.toUnit
                        ? n.push(
                            " (" +
                              t.Mth.round(
                                t.Conv.in2mm(
                                  t.Conv.findGaugeIn(
                                    t.Conv.bwgArr,
                                    a.fromValue.toString()
                                  )
                                ),
                                a.toDigits
                              ) +
                              " " +
                              this.uNm(0) +
                              ")"
                          )
                        : a.showSi ||
                          1 === a.toUnit ||
                          n.push(
                            " (" +
                              t.Mth.round(
                                t.Conv.findGaugeIn(
                                  t.Conv.bwgArr,
                                  a.fromValue.toString()
                                ),
                                a.toDigits
                              ) +
                              " " +
                              this.uNm(1) +
                              ")"
                          )
                      : 4 === a.fromUnit
                      ? a.showSi && 0 !== a.toUnit
                        ? n.push(
                            " (" +
                              t.Mth.round(
                                t.Conv.in2mm(
                                  t.Conv.findGaugeIn(
                                    t.Conv.swgArr,
                                    a.fromValue.toString()
                                  )
                                ),
                                a.toDigits
                              ) +
                              " " +
                              this.uNm(0) +
                              ")"
                          )
                        : a.showSi ||
                          1 === a.toUnit ||
                          n.push(
                            " (" +
                              t.Mth.round(
                                t.Conv.findGaugeIn(
                                  t.Conv.swgArr,
                                  a.fromValue.toString()
                                ),
                                a.toDigits
                              ) +
                              " " +
                              this.uNm(1) +
                              ")"
                          )
                      : 5 === a.fromUnit &&
                        (a.showSi && 0 !== a.toUnit
                          ? n.push(
                              " (" +
                                t.Mth.round(
                                  t.Conv.in2mm(
                                    t.Conv.findGaugeIn(
                                      a.fracInArr,
                                      a.fromValue.toString()
                                    )
                                  ),
                                  a.toDigits
                                ) +
                                " " +
                                this.uNm(0) +
                                ")"
                            )
                          : a.showSi ||
                            1 === a.toUnit ||
                            n.push(
                              " (" +
                                t.Mth.round(
                                  t.Conv.findGaugeIn(
                                    a.fracInArr,
                                    a.fromValue.toString()
                                  ),
                                  a.toDigits
                                ) +
                                " " +
                                this.uNm(1) +
                                ")"
                            ))
                    : n.push(
                        " (" +
                          t.Mth.round(t.Conv.mm2in(a.fromValue), a.toDigits) +
                          " " +
                          this.uNm(1) +
                          ")"
                      ))),
              this.$el.resinput.html(n.join("")),
              this.$el.resoutput.html(e.join("")),
              this.$el.note.hide();
          }),
          (i.prototype.writeGa = function (i, a) {
            void 0 === a && (a = "GA");
            var e = t.Conv.findClosestGaugeIn(i, t.Conv.mm2in(this.conf.mm)),
              n = [];
            if (void 0 !== e.hit)
              n.push("<strong>" + e.hit + " " + a + "</strong>");
            else if (void 0 !== e.lt && void 0 !== e.gt) {
              var r = t.Conv.findGaugeIn(i, e.gt[0]),
                s = t.Conv.findGaugeIn(i, e.lt[0]),
                o = 100 - (this.conf.mm / t.Conv.in2mm(r)) * 100,
                m = 100 - (this.conf.mm / t.Conv.in2mm(s)) * 100;
              n.push(
                "<i>between</i><br /><strong>" + e.gt + " " + a + "</strong> ("
              ),
                0 === this.conf.useUnit
                  ? n.push(t.Mth.round(t.Conv.in2mm(r), this.conf.toDigits))
                  : n.push(t.Mth.round(r, this.conf.toDigits)),
                n.push(" " + this.conf.useUnit + ') <span class="label label-'),
                Math.abs(o) < Math.abs(m)
                  ? n.push("success")
                  : n.push("default"),
                n.push('">'),
                o > 0 && n.push("+"),
                n.push(
                  t.Mth.round(o) +
                    "%</span><br /><i>and</i></br><strong>" +
                    e.lt +
                    " " +
                    a +
                    "</strong> ("
                ),
                0 === this.conf.useUnit
                  ? n.push(t.Mth.round(t.Conv.in2mm(s), this.conf.toDigits))
                  : n.push(t.Mth.round(s, this.conf.toDigits)),
                n.push(" " + this.conf.useUnit + ') <span class="label label-'),
                Math.abs(m) < Math.abs(o)
                  ? n.push("success")
                  : n.push("default"),
                n.push('">'),
                m > 0 && n.push("+"),
                n.push(t.Mth.round(m) + "%</span>");
            } else {
              r = void 0;
              (r = void 0 !== e.lt ? i[i.length - 1][1] : i[0][1]),
                0 === this.conf.useUnit && (r = t.Conv.in2mm(r)),
                void 0 !== e.lt
                  ? n.push(
                      '<span class="label label-danger">Input too small, min ' +
                        t.Mth.round(r, this.conf.toDigits) +
                        " " +
                        this.conf.useUnit +
                        "</span>"
                    )
                  : void 0 !== e.gt &&
                    n.push(
                      '<span class="label label-danger">Input too large, max ' +
                        t.Mth.round(r, this.conf.toDigits) +
                        " " +
                        this.conf.useUnit +
                        "</span>"
                    );
            }
            return n.join("");
          }),
          i
        );
      })();
      (i.Page = e),
        (i.initConv = function (t, a) {
          var e = Handlebars.compile(t.text())({
              mm: 0,
              in: 1,
              awg: 2,
              bwg: 3,
              swg: 4,
              fracIn: 5,
            }),
            n = a.find(".confromu"),
            r = a.find(".contou");
          n.html(e),
            r.html(e),
            new i.Page({
              fromu: n,
              fromv: a.find(".confromv"),
              fromvsel: a.find(".confromvsel"),
              note: a.find(".connote"),
              resinput: a.find(".conresinput"),
              resoutput: a.find(".conresoutput"),
              tod: a.find(".contod"),
              tou: a.find(".contou"),
              swap: a.find(".swapinputoutput"),
            });
        }),
        (i.init = function () {
          i.initConv($(".template-unitopt"), $(".convui"));
        });
    })(t.Converter || (t.Converter = {}));
  })(SE || (SE = {})),
  (function (t) {
    var i, a, e;
    (i = t.Coil || (t.Coil = {})),
      (a = i.CoilConverter || (i.CoilConverter = {})),
      (e = (function () {
        function i(t) {
          var i = this;
          (this.$rct = t),
            (this.loaded = !1),
            (this.visible = !1),
            (this.$convPanel = t.find(".converterpanel")),
            (this.$resPanel = t.find(".resultspanel")),
            this.$rct.find(".nav .tab").click(function (t) {
              i.$rct.find(".nav li").toggleClass("active"),
                t.preventDefault(),
                i.visible
                  ? i.showRes()
                  : i.loaded
                  ? i.showConv()
                  : (i.loadConv().done(function () {
                      i.showConv();
                    }),
                    (i.loaded = !0),
                    (i.loaded = !0)),
                (i.visible = !i.visible);
            });
        }
        return (
          (i.prototype.loadConv = function () {
            var i = this,
              a = $.Deferred();
            return (
              $.get("converter.html", {}, function (e) {
                var n = $("<div>" + e + "</div>"),
                  r = n.find(".convui");
                r.find(".col").removeClass("col col-md-6"),
                  i.$convPanel.append(r);
                var s = n.find("script.template-unitopt");
                t.Converter.initConv(s, r), a.resolve();
              }),
              a.promise()
            );
          }),
          (i.prototype.showConv = function () {
            this.$resPanel.slideUp(), this.$convPanel.slideDown();
          }),
          (i.prototype.showRes = function () {
            this.$convPanel.slideUp(), this.$resPanel.slideDown();
          }),
          i
        );
      })()),
      (a.CoilConverter = e);
  })(SE || (SE = {})),
  (function (t) {
    var i;
    ((i = t.Coil || (t.Coil = {})).Recommend || (i.Recommend = {})).run =
      function (i, a, e, n, r, s) {
        var o =
            a *
            (e / 1e3) *
            (1 === i || 8 === i
              ? 2
              : 2 === i || 9 === i
              ? 3
              : 3 === i || 10 === i || 11 === i
              ? 4
              : 4 === i
              ? 5
              : 5 === i
              ? 6
              : 6 === i
              ? 7
              : 7 === i
              ? 8
              : 1),
          m = Math.sqrt(o * n);
        r.html(t.Mth.dround(o, -1)), s.html(t.Mth.round(m, 1));
      };
  })(SE || (SE = {})),
  (function (t) {
    !(function (i) {
      var a, e, n;
      ((a = i.CSetup || (i.CSetup = {}))[(a.single = 0)] = "single"),
        (a[(a.par2 = 1)] = "par2"),
        (a[(a.par3 = 2)] = "par3"),
        (a[(a.par4 = 3)] = "par4"),
        (a[(a.par5 = 4)] = "par5"),
        (a[(a.par6 = 5)] = "par6"),
        (a[(a.par7 = 6)] = "par7"),
        (a[(a.par8 = 7)] = "par8"),
        (a[(a.ser2 = 8)] = "ser2"),
        (a[(a.ser3 = 9)] = "ser3"),
        (a[(a.ser4 = 10)] = "ser4"),
        (a[(a.serPar = 11)] = "serPar"),
        ((n = e || (e = {}))[(n.round = 0)] = "round"),
        (n[(n.roundmulti = 1)] = "roundmulti"),
        (n[(n.ribbon = 2)] = "ribbon");
      var r = (function () {
        function a(i, e) {
          (this.$in = i), (this.$out = e);
          var n = "template";
          (this.templ = {
            fracinput: Handlebars.compile($("#fracinput-" + n).html()),
            results: Handlebars.compile($("#results-" + n).html()),
            advanced: Handlebars.compile($("#advancedresults-" + n).html()),
            setup: Handlebars.compile($("#" + n + "-setup").html()),
            profile: Handlebars.compile($("#" + n + "-profile").html()),
            mats: Handlebars.compile($("#" + n + "-mats").html()),
          }),
            this.$in.mat.html(this.templ.mats(a.mats)),
            (this.coil = a.def()),
            this.$in.setup.html(
              this.templ.setup({
                single: 0,
                par2: 1,
                par3: 2,
                par4: 3,
                par5: 4,
                par6: 5,
                par7: 6,
                par8: 7,
                ser2: 8,
                ser3: 9,
                ser4: 10,
                serPar: 11,
              })
            ),
            this.$in.profile.html(
              this.templ.profile({
                round: 0,
                roundmulti: 1,
                ribbon: 2,
              })
            ),
            this.bind(),
            this.toggAdvanced();
          var r = t.Global.getQs();
          (this.coil.showSi = !0),
            Object.keys(r).length > 0
              ? (this.import(r),
                t.Global.ccMenuMsg("Settings have been imported.", "success"),
                t.Ga.gad("coil", "importqs", JSON.stringify(r)))
              : (this.updateUnits(),
                this.toggAdvanced(),
                this.ccWrite(),
                this.writeDia(),
                this.findRstv(),
                this.findTwist(),
                this.wireLength(),
                this.wraps()),
            this.multicoilInfo();
        }
        return (
          (a.def = function () {
            return {
              showSi: !0,
              advanced: !1,
              mat: "ka1",
              profile: 0,
              strands: 1,
              twistpitch: 0,
              awg: 30,
              setup: 0,
              targetr: 1.8,
              rstv: 0.028472674975859414,
              wirelength: 63.21850692027117,
              dia: 0.2546390029766585,
              width: 0.5,
              thick: 0.1,
              innerdia: 1.3,
              leglength: 5,
              wrapspace: 0.01,
              hf: 200,
            };
          }),
          (a.prototype.setTargetrR = function (t) {
            var i = this,
              a = function (t) {
                i.$in.targetr.attr("step", t);
              };
            return (
              t > this.coil.targetr
                ? t >= 1
                  ? a(0.1)
                  : t >= 0.4 && a(0.05)
                : t <= 0.4
                ? a(0.01)
                : t <= 1 && a(0.05),
              t
            );
          }),
          (a.prototype.bind = function () {
            var i = this;
            this.$in.advanced
              .click(function () {
                (i.coil.advanced = !i.coil.advanced),
                  i.toggAdvanced(),
                  t.Ga.gad("coil", "advanced", i.coil.advanced);
              })
              .mouseenter(function () {
                $(".cd-advanced").addClass("bg-warning");
              })
              .mouseleave(function () {
                $(".cd-advanced").removeClass("bg-warning");
              }),
              this.$in.units.change(function () {
                (i.coil.showSi = !i.coil.showSi),
                  i.updateUnits(),
                  i.ccWrite(),
                  i.writeDia(),
                  i.writeRstv(),
                  i.findRstv(),
                  i.findTwist(),
                  i.wireLength(),
                  i.wraps(),
                  t.Ga.gad("coil", "showsi", i.coil.showSi);
              }),
              this.$in.mat.change(function (a) {
                (i.coil.mat = $(a.delegateTarget).val()),
                  "c" === i.coil.mat &&
                    ((i.coil.advanced = !0), i.toggAdvanced()),
                  i.writeDia(),
                  i.findRstv(),
                  i.findTwist(),
                  i.wireLength(),
                  i.wraps(),
                  t.Ga.gad("coil", "mat", i.coil.mat);
              }),
              this.$in.profile.change(function (a) {
                (i.coil.profile = parseInt($(a.delegateTarget).val(), 10)),
                  0 === i.coil.profile
                    ? (i.coil.strands = 1)
                    : 1 === i.coil.profile
                    ? i.coil.strands < 2 && (i.coil.strands = 2)
                    : 2 === i.coil.profile
                    ? (i.coil.strands = 1)
                    : console.log("Unknown profile"),
                  i.ccWrite(),
                  i.writeDia(),
                  i.findRstv(),
                  i.findTwist(),
                  i.wireLength(),
                  i.wraps(),
                  t.Ga.gad("coil", "profile", $(a.delegateTarget).val());
              }),
              this.$in.awg.change(function (a) {
                var e = t.Global.limVal($(a.delegateTarget));
                $(a.delegateTarget)
                  .parents(".form-group")
                  .removeClass("has-warning"),
                  (i.coil.awg = e),
                  (i.coil.dia = t.Conv.awg2mm(i.coil.awg)),
                  i.writeDia(),
                  i.findRstv(),
                  i.findTwist(),
                  i.wireLength(),
                  i.wraps(),
                  i.validerTwistPitch(),
                  t.Ga.gad("coil", "awg", i.coil.awg);
              }),
              this.$in.dia.change(function (a) {
                (i.coil.dia = t.Global.readNumber($(a.delegateTarget).val())),
                  i.coil.showSi || (i.coil.dia = t.Conv.in2mm(i.coil.dia)),
                  $(a.delegateTarget)
                    .parents(".form-group")
                    .removeClass("has-warning"),
                  (i.coil.awg = void 0);
                var e = $("#cd-awg");
                e.parents(".form-group").addClass("has-warning"),
                  (i.coil.awg = t.Conv.mm2awg(i.coil.dia));
                var n = Math.round(100 * i.coil.awg) / 100;
                e.val(n.toString()),
                  i.findRstv(),
                  i.findTwist(),
                  i.wireLength(),
                  i.wraps(),
                  i.validerTwistPitch(),
                  t.Ga.gad("coil", "dia", i.coil.dia);
              }),
              this.$in.strands.change(function (a) {
                (i.coil.strands = parseInt($(a.delegateTarget).val(), 10)),
                  0 !== i.coil.twistpitch &&
                    i.coil.strands > 4 &&
                    ((i.coil.strands = 4), $(a.delegateTarget).val(4)),
                  i.findRstv(),
                  i.findTwist(),
                  i.wireLength(),
                  i.wraps(),
                  t.Ga.gad("coil", "pitch", i.coil.twistpitch),
                  $(".cd-twistpitch-output").html(i.coil.strands.toString());
              }),
              this.$in.twistpitch.change(function (a) {
                (i.coil.twistpitch = t.Global.readNumber(
                  $(a.delegateTarget).val()
                )),
                  i.coil.showSi ||
                    (i.coil.twistpitch = t.Conv.in2mm(i.coil.twistpitch)),
                  0 !== i.coil.twistpitch &&
                    i.coil.strands > 4 &&
                    ((i.coil.strands = 4), i.$in.strands.val(4)),
                  i.findRstv(),
                  i.findTwist(),
                  i.wireLength(),
                  i.wraps(),
                  i.validerTwistPitch(),
                  t.Ga.gad("coil", "pitch", i.coil.twistpitch);
              }),
              this.$in.ribbonwidth.change(function (a) {
                (i.coil.width = t.Global.readNumber($(a.delegateTarget).val())),
                  i.coil.showSi || (i.coil.width = t.Conv.in2mm(i.coil.width)),
                  i.ribbonCheck(),
                  i.findRstv(),
                  i.wireLength(),
                  i.wraps(),
                  t.Ga.gad("coil", "ribbonwidth", i.coil.width);
              }),
              this.$in.thickness.change(function (a) {
                (i.coil.thick = t.Global.readNumber($(a.delegateTarget).val())),
                  i.coil.showSi || (i.coil.thick = t.Conv.in2mm(i.coil.thick)),
                  i.ribbonCheck(),
                  i.findRstv(),
                  i.wireLength(),
                  i.wraps(),
                  t.Ga.gad("coil", "thickness", i.coil.thick);
              }),
              this.$in.thickWarnBtn.click(function () {
                var t = i.coil.thick;
                (i.coil.thick = i.coil.width),
                  (i.coil.width = t),
                  i.ccWrite(),
                  i.ribbonCheck(),
                  i.findRstv(),
                  i.wireLength(),
                  i.wraps();
              }),
              this.$in.setup.change(function (a) {
                (i.coil.setup = parseInt($(a.delegateTarget).val(), 10)),
                  i.multicoilInfo(),
                  i.findRstv(),
                  i.findTwist(),
                  i.wireLength(),
                  i.wraps(),
                  t.Ga.gad("coil", "setup", i.coil.setup);
              }),
              this.$in.targetr.change(function (a) {
                (i.coil.targetr = i.setTargetrR(
                  t.Global.readNumber($(a.delegateTarget).val())
                )),
                  i.findRstv(),
                  i.findTwist(),
                  i.wireLength(),
                  i.wraps(),
                  t.Ga.gad("coil", "targetr", i.coil.targetr);
              }),
              this.$in.rstv.change(function (a) {
                (i.coil.rstv = t.Global.readNumber($(a.delegateTarget).val())),
                  (i.coil.mat = "c"),
                  i.$in.mat.val(i.coil.mat),
                  i.coil.showSi || (i.coil.rstv = t.Conv.mm2in(i.coil.rstv)),
                  i.wireLength(),
                  i.wraps(),
                  t.Ga.gad("coil", "rstv", i.coil.rstv);
              }),
              this.$in.len.change(function (a) {
                (i.coil.wirelength = t.Global.readNumber(
                  $(a.delegateTarget).val()
                )),
                  (i.coil.wirelengthManual = !0),
                  i.coil.showSi ||
                    (i.coil.wirelength = t.Conv.in2mm(i.coil.wirelength)),
                  i.wraps(),
                  t.Ga.gad("coil", "wirelength", i.coil.wirelength);
              }),
              this.$in.leglength.change(function (a) {
                (i.coil.leglength = t.Global.readNumber(
                  $(a.delegateTarget).val()
                )),
                  i.coil.showSi ||
                    (i.coil.leglength = t.Conv.in2mm(i.coil.leglength)),
                  i.wraps(),
                  t.Ga.gad("coil", "leglength", i.coil.leglength);
              }),
              this.$in.wrapspace.change(function (a) {
                (i.coil.wrapspace = t.Global.readNumber(
                  $(a.delegateTarget).val()
                )),
                  i.coil.showSi ||
                    (i.coil.wrapspace = t.Conv.in2mm(i.coil.wrapspace)),
                  i.wraps(),
                  t.Ga.gad("coil", "wrapspace", i.coil.wrapspace);
              }),
              this.$in.hf.change(function (a) {
                (i.coil.hf = $(a.delegateTarget).val()),
                  i.wraps(),
                  t.Ga.gad("coil", "hf", i.coil.hf);
              }),
              this.$in.innerdia.change(function (a) {
                (i.coil.innerdia = t.Global.readNumber(
                  $(a.delegateTarget).val()
                )),
                  i.coil.showSi ||
                    (i.coil.innerdia = t.Conv.in2mm(i.coil.innerdia)),
                  $("#cd-innerdia-presets .btn").removeClass("active"),
                  i.wraps(),
                  t.Ga.gad("coil", "innerdia", i.coil.innerdia);
              }),
              this.$in.reset.click(function () {
                (i.coil = a.def()),
                  i.updateUnits(),
                  i.ccWrite(),
                  i.writeDia(),
                  i.findRstv(),
                  i.findTwist(),
                  i.wireLength(),
                  i.wraps(),
                  i.toggAdvanced(),
                  t.Global.ccMenuMsg(
                    "Default settings have been restored.",
                    "success"
                  ),
                  t.Ga.gad("coil", "reset");
              }),
              $(".fractioninputdiv").each(function (t, a) {
                i.setupFracInput($(a));
              }),
              $("input, select").change(function () {
                i.export();
              }),
              $(".btn").click(function () {
                i.export();
              });
          }),
          (a.prototype.findXArea = function () {
            return 2 === this.coil.profile
              ? this.coil.width * this.coil.thick
              : Math.PI *
                  (this.coil.dia / 2) *
                  (this.coil.dia / 2) *
                  this.coil.strands;
          }),
          (a.prototype.ds = function (i, a, e) {
            return (
              void 0 === a && (a = 3),
              void 0 === e && (e = 5),
              this.coil.showSi
                ? t.Mth.round(i, a)
                : t.Mth.round(t.Conv.mm2in(i), e)
            );
          }),
          (a.prototype.writeRstv = function () {
            this.coil.showSi
              ? this.$in.rstv
                  .val(t.Mth.round(this.coil.rstv, 5))
                  .parents(".form-group")
              : this.$in.rstv
                  .val(t.Mth.round(t.Conv.in2mm(this.coil.rstv), 4))
                  .parents(".form-group");
          }),
          (a.prototype.findRstv = function () {
            if ("c" !== this.coil.mat) {
              var i =
                t.Data.Mat.findMat(this.coil.mat).rstv / 1e3 / this.findXArea();
              (this.coil.rstv = i), this.writeRstv();
            }
          }),
          (a.prototype.getRfactor = function () {
            var t = this.coil.setup;
            return 0 === t || 11 === t
              ? 1
              : 1 === t
              ? 0.5
              : 2 === t
              ? 1 / 3
              : 3 === t
              ? 0.25
              : 4 === t
              ? 0.2
              : 5 === t
              ? 1 / 6
              : 6 === t
              ? 1 / 7
              : 7 === t
              ? 1 / 8
              : 8 === t
              ? 2
              : 9 === t
              ? 3
              : 10 === t
              ? 4
              : void console.log(
                  "Warning: getRfactor(spole) failed, unknown setup [" +
                    t +
                    "]."
                );
          }),
          (a.prototype.findTwist = function () {
            if (0 === this.coil.twistpitch) this.coil.twistfactor = 1;
            else if (this.coil.strands > 1) {
              this.coil.twistlead = this.coil.twistpitch * this.coil.strands;
              var t = this.coil.dia * Math.PI,
                i = Math.sqrt(
                  t * t + this.coil.twistlead * this.coil.twistlead
                );
              (this.coil.twistfactor = i / this.coil.twistlead),
                (this.coil.rstv *= this.coil.twistfactor),
                this.writeRstv();
            } else this.coil.twistfactor = 1;
          }),
          (a.prototype.wireLength = function () {
            (this.coil.wirelengthManual = !1),
              (this.coil.wirelength = this.coil.targetr / this.coil.rstv),
              (this.coil.wirelength /= this.getRfactor()),
              $("#cd-len").val(this.ds(this.coil.wirelength, 2, 3));
          }),
          (a.prototype.export = function () {
            var t = [],
              i = this.coil;
            i.showSi || t.push(["si", "false"]),
              i.advanced && t.push(["a", "true"]);
            var e,
              n,
              r = a.def();
            "c" === i.mat
              ? t.push(["rstv", i.rstv.toString()])
              : i.mat !== r.mat && t.push(["mat", i.mat]),
              i.profile !== r.profile &&
                t.push([
                  "p",
                  ((e = i.profile),
                  2 === e ? "ribbon" : 1 === e ? "roundmulti" : void 0),
                ]),
              i.twistpitch !== r.twistpitch &&
                t.push(["tp", i.twistpitch.toString()]),
              i.setup !== r.setup &&
                t.push([
                  "s",
                  ((n = i.setup),
                  1 === n
                    ? "dp"
                    : 2 === n
                    ? "tp"
                    : 3 === n
                    ? "qp"
                    : 4 === n
                    ? "5p"
                    : 5 === n
                    ? "6p"
                    : 6 === n
                    ? "7p"
                    : 7 === n
                    ? "8p"
                    : 8 === n
                    ? "ds"
                    : 9 === n
                    ? "ts"
                    : 10 === n
                    ? "qs"
                    : 11 === n
                    ? "qsp"
                    : void 0),
                ]),
              i.targetr !== r.targetr && t.push(["r", i.targetr.toString()]),
              i.hf !== r.hf && t.push(["hf", i.hf.toString()]),
              2 === i.profile
                ? (i.width !== r.width && t.push(["width", i.width.toString()]),
                  i.thick !== r.thick && t.push(["thick", i.thick.toString()]))
                : (i.strands !== r.strands &&
                    t.push(["str", i.strands.toString()]),
                  i.awg === Math.round(i.awg)
                    ? i.awg !== r.awg && t.push(["awg", i.awg.toString()])
                    : i.dia !== r.dia && t.push(["dia", i.dia.toString()])),
              i.wirelengthManual && t.push(["wl", i.wirelength.toString()]),
              i.innerdia !== r.innerdia &&
                t.push(["id", i.innerdia.toString()]),
              i.leglength !== r.leglength &&
                t.push(["ll", i.leglength.toString()]),
              i.wrapspace !== r.wrapspace &&
                t.push(["ws", i.wrapspace.toString()]);
            for (var s = [], o = 0, m = t; o < m.length; o++) {
              var l = m[o];
              s.push(l.join("="));
            }
            history.replaceState(
              null,
              null,
              location.pathname + "?" + s.join("&")
            );
          }),
          (a.prototype.wraps = function () {
            var a,
              e,
              n = this,
              r = this.coil,
              s = r.dia;
            2 === r.profile
              ? ((a = r.innerdia + 2 * r.thick), (e = r.innerdia + r.thick))
              : (0 !== r.twistpitch &&
                  (2 === r.strands
                    ? (s *= 2)
                    : 3 === r.strands
                    ? (s /= 2 * Math.sqrt(3) - 3)
                    : 4 === r.strands && (s *= 1 + Math.sqrt(2))),
                (a = r.innerdia + 2 * s),
                (e = r.innerdia + s));
            var o = a * Math.PI,
              m =
                2 === r.profile
                  ? r.wrapspace + r.width
                  : 0 === r.twistpitch
                  ? (r.wrapspace + r.dia) * r.strands
                  : r.wrapspace + s,
              l = Math.sqrt(o * o + m * m),
              c = r.targetr / this.getRfactor(),
              h =
                2 === r.profile
                  ? (180 * Math.atan2(r.wrapspace + r.width, o)) / Math.PI
                  : 0 === r.twistpitch
                  ? (180 * Math.atan2((r.wrapspace + r.dia) * r.strands, o)) /
                    Math.PI
                  : (180 * Math.atan2(r.wrapspace + s, o)) / Math.PI,
              u = r.wirelength - r.leglength,
              d = u / l,
              p = Math.round(d),
              f =
                2 === r.profile
                  ? (d - 1) * (r.wrapspace + r.width) + r.width
                  : 0 === r.twistpitch
                  ? (d - 1) * ((r.wrapspace + r.dia) * r.strands) +
                    r.dia * r.strands
                  : (d - 1) * (r.wrapspace + s) + s,
              v = r.leglength / r.wirelength,
              g = v * c,
              x = (1 - v) * c,
              w = r.showSi
                ? {
                    nmLen: "mm",
                    udl: 1,
                    nmArea: "mm²",
                    nmDens: "<sup>g</sup>/<sub>cm&sup3;</sub>",
                    nmMass: "mg",
                    nmVol: "mm³",
                  }
                : {
                    nmLen: "in",
                    udl: 3,
                    nmArea: "in²",
                    nmDens: "<sup>oz</sup>/<sub>in&sup3;</sub>",
                    nmMass: "gr",
                    nmVol: "in³",
                  },
              b = (p / d) * x + g,
              S = ((Math.round(d + 1) - 0.5) / d) * x + g,
              C = {
                unmlen: w.nmLen,
                wirelength: this.ds(r.wirelength, w.udl, w.udl),
                numberOfWraps: t.Mth.round(d),
                roundedNumberOfWraps: p.toString(),
                roundedNumberOfWrapsActualRes: t.Mth.round(b),
                halfRoundedNumberOfWraps:
                  Math.round(d + 1) + "/" + Math.round(d),
                halfRoundedNumberOfWrapsActualRes: t.Mth.round(S),
                legloss: t.Mth.round(100 * v, 1),
              };
            0 !== r.setup && (C.coilresistance = t.Mth.round(c)),
              v > 1
                ? ((C.leglossclass = "danger"),
                  (C.leglosstitle =
                    "Legs are too long. Please change your parameters and try again."))
                : v > 0.3
                ? ((C.leglossclass = "warning"),
                  (C.leglosstitle =
                    "You are losing too much heat in the legs. Consider changing your parameters."))
                : v > 0.2 &&
                  (C.leglosstitle =
                    "You are losing a lot of heat in the legs. Consider changing your parameters.");
            var y = {
              unmlen: w.nmLen,
              unmarea: w.nmArea,
              unmvol: w.nmVol,
              unmdensity: w.nmDens,
              unmmass: w.nmMass,
              wirelength: this.ds(u, w.udl, w.udl),
              outerdia: this.ds(a, w.udl + 1, w.udl + 1),
              neutralaxisdia: this.ds(e, w.udl + 1, w.udl + 1),
              loopcircum: this.ds(o, w.udl + 1, w.udl + 1),
              helixangle: t.Mth.round(h, 1),
              looplength: this.ds(l, w.udl + 1, w.udl + 1),
              coilwidth: this.ds(f, w.udl, w.udl),
            };
            u <= 0 && (y.wirelengthWarning = "x");
            var M = 1 - v,
              k =
                2 === r.profile
                  ? 2 * r.width + 2 * r.thick
                  : r.dia * Math.PI * r.strands,
              T = r.wirelength * k * r.twistfactor,
              V = T * M,
              P = this.findXArea(),
              I = P * r.wirelength * r.twistfactor,
              A = t.Data.Mat.findMat(r.mat),
              N = A ? A.dens : void 0,
              D = I * N,
              F = (A ? A.hc : void 0) * D;
            (r.hc = F),
              (r.surface = T),
              (C.heatcapacity = t.Mth.round(F)),
              this.$out.results.html(this.templ.results(C));
            var G, R, q, W, E;
            (G = r.hf),
              n.$out.heaticon.css(
                "color",
                "#" +
                  ((R = G),
                  (W =
                    (q = [
                      "00C0E3",
                      "00D4E2",
                      "00E1D9",
                      "00E0C3",
                      "00DFAD",
                      "00DE98",
                      "00DC6E",
                      "00DA44",
                      "33D400",
                      "59D200",
                      "7FD000",
                      "A4CE00",
                      "B7CD00",
                      "C9CC00",
                      "CBBC00",
                      "CAA800",
                      "C99400",
                      "C88100",
                      "C76E00",
                      "C65B00",
                      "C54800",
                      "C43500",
                      "C32300",
                      "C21100",
                      "C10000",
                      "C00012",
                      "BF0024",
                    ]).length - 1),
                  (E = Math.round(t.Mth.map(R, 100, 330, 0, W))),
                  q[(E = t.Mth.constrain(E, 0, W))])
              ),
              i.Recommend.run(
                r.setup,
                T,
                r.hf,
                r.targetr,
                this.$out.hfp,
                this.$out.hfu
              ),
              r.showSi
                ? ((y.surfacearea = t.Mth.round(T)),
                  (y.coilarea = t.Mth.round(V)),
                  (y.xarea = t.Mth.round(P, 3)),
                  (y.wirevolume = t.Mth.round(I, 3)),
                  (y.density = t.Mth.round(N || 0, 3)),
                  (y.wiremass = t.Mth.round(D, 3)))
                : ((y.surfacearea = t.Mth.round(T / t.Conv.in2, 5)),
                  (y.coilarea = t.Mth.round(V / t.Conv.in2, 5)),
                  (y.xarea = t.Mth.round(P / t.Conv.in2, 6)),
                  (y.wirevolume = t.Mth.round(I / t.Conv.in3, 6)),
                  (y.density = t.Mth.round(0.578036672 * N, 3)),
                  (y.wiremass = t.Mth.round(t.Conv.g2gr(D / 1e3), 7))),
              this.$out.advanced.html(this.templ.advanced(y));
          }),
          (a.prototype.setupFracInput = function (i) {
            var a = this,
              e = i.find("input").filter(":first"),
              n = i.attr("id"),
              r = i.find(".help-block").filter(":first");
            0 === r.length
              ? i.append(
                  this.templ.fracinput({
                    id: n,
                  })
                )
              : r.before(
                  this.templ.fracinput({
                    id: n,
                  })
                );
            var s = $("#" + n + "scd-fractionpresets").find(".btn");
            s.click(function (n) {
              s.removeClass("active");
              var r = $(n.delegateTarget);
              r.addClass("active");
              var o = r.attr("data-cd-im");
              e
                .val(
                  a.coil.showSi
                    ? t.Mth.round(t.Conv.in2mm(parseFloat(o)), 3)
                    : r.attr("data-cd-im")
                )
                .change(),
                a.wraps(),
                t.Ga.gad("coil", "fracinputdiv-" + i.attr("id"), r.text());
            }),
              $("#" + n + "-fractionbtn").click(function (t) {
                $(t.delegateTarget).hasClass("active")
                  ? $("#" + n + "scd-fractionpresets").slideUp()
                  : $("#" + n + "scd-fractionpresets").slideDown(),
                  $(t.delegateTarget).toggleClass("active");
              }),
              $("#" + n).change(function () {
                s.removeClass("active");
              });
          }),
          (a.prototype.writeDia = function () {
            this.$in.dia.val(this.ds(this.coil.dia, 3, 5));
          }),
          (a.prototype.ccWrite = function () {
            var t = this.$in;
            t.mat.val(this.coil.mat),
              t.profile.val(this.coil.profile),
              0 === this.coil.profile
                ? ($(".cd-wiredimensions").hide(),
                  $(".cd-wirediameter").show(),
                  $(".cd-twistpitch").hide(),
                  $(".cd-strands").hide())
                : 1 === this.coil.profile
                ? ($(".cd-wiredimensions").hide(),
                  $(".cd-wirediameter").show(),
                  t.twistpitch.val(this.ds(this.coil.twistpitch)),
                  $(".cd-twistpitch").show(),
                  $(".cd-twistpitch-output").html(this.coil.strands.toString()),
                  $(".cd-strands").show())
                : 2 === this.coil.profile
                ? ($(".cd-wirediameter").hide(),
                  $(".cd-wiredimensions").show(),
                  t.ribbonwidth.val(this.ds(this.coil.width, 4, 7)),
                  t.thickness.val(this.ds(this.coil.thick, 4, 7)),
                  $(".cd-twistpitch").hide(),
                  $(".cd-strands").hide())
                : console.log("Unknown profile"),
              t.awg.val(this.coil.awg),
              t.dia
                .val(this.ds(this.coil.dia))
                .parents(".form-group")
                .removeClass("has-warning"),
              t.strands.val(this.coil.strands),
              t.setup.val(this.coil.setup),
              t.targetr.val(this.coil.targetr),
              t.innerdia.val(this.ds(this.coil.innerdia, 2, 3)),
              t.leglength.val(this.ds(this.coil.leglength, 1, 3)),
              t.hf.val(this.coil.hf),
              t.wrapspace.val(this.ds(this.coil.wrapspace));
          }),
          (a.prototype.updateUnits = function () {
            this.coil.showSi
              ? ($(".cd-im").hide(),
                $(".cd-si").show(),
                this.$in.unitsSi.prop("checked", !0))
              : ($(".cd-si").hide(),
                $(".cd-im").show(),
                this.$in.unitsIm.prop("checked", !0));
          }),
          (a.prototype.multicoilInfo = function () {
            $(".cd-setup-s").hide(),
              $(".cd-setup-dp").hide(),
              $(".cd-setup-ds").hide(),
              $(".cd-setup-tp").hide(),
              $(".cd-setup-ts").hide(),
              $(".cd-setup-qp").hide(),
              $(".cd-setup-qs").hide(),
              $(".cd-setup-qsp").hide(),
              0 === this.coil.setup
                ? ($("body").removeClass("showmulti").addClass("hidemulti"),
                  $(".cd-setup-single").show(),
                  $("#cd-len-number").html("").hide())
                : ($(".cd-setup-single").hide(),
                  $("body").removeClass("hidemulti").addClass("showmulti"),
                  1 === this.coil.setup
                    ? $(".cd-setup-dp").show()
                    : 8 === this.coil.setup
                    ? $(".cd-setup-ds").show()
                    : 2 === this.coil.setup
                    ? $(".cd-setup-tp").show()
                    : 9 === this.coil.setup
                    ? $(".cd-setup-ts").show()
                    : 3 === this.coil.setup
                    ? $(".cd-setup-qp").show()
                    : 10 === this.coil.setup
                    ? $(".cd-setup-qs").show()
                    : 11 === this.coil.setup && $(".cd-setup-qsp").show(),
                  $("#cd-len-number")
                    .html(
                      " (&times; " +
                        $("#cd-setup")
                          .find("option:selected")
                          .attr("data-setup-wires") +
                        " wires)"
                    )
                    .show());
          }),
          (a.prototype.toggAdvanced = function () {
            var t = function (t, i, a) {
              a
                ? (t.show(),
                  i && i.addClass("active"),
                  $(".col-always").removeClass("col-lg-3").addClass("col-lg-4"))
                : (t.hide(),
                  i && i.removeClass("active"),
                  $(".col-always")
                    .removeClass("col-lg-4")
                    .addClass("col-lg-3"));
            };
            t($(".cd-advanced"), $("#cd-basicadvanced"), this.coil.advanced),
              t($(".cd-adv"), void 0, this.coil.advanced),
              t($(".cd-bas"), void 0, !this.coil.advanced);
          }),
          (a.prototype.import = function (i) {
            var a = this.coil;
            i.mat && (a.mat = i.mat),
              i.a && (a.advanced = !0),
              i.hasOwnProperty("si") && (a.showSi = !1),
              i.ll && (a.leglength = parseFloat(i.ll)),
              i.id && (a.innerdia = parseFloat(i.id)),
              i.r && (a.targetr = this.setTargetrR(parseFloat(i.r)));
            var e, n;
            i.s &&
              (a.setup =
                "dp" === (e = i.s)
                  ? 1
                  : "tp" === e
                  ? 2
                  : "qp" === e
                  ? 3
                  : "5p" === e
                  ? 4
                  : "6p" === e
                  ? 5
                  : "7p" === e
                  ? 6
                  : "8p" === e
                  ? 7
                  : "ds" === e
                  ? 8
                  : "ts" === e
                  ? 9
                  : "qs" === e
                  ? 10
                  : "qsp" === e
                  ? 11
                  : void 0),
              i.p &&
                (a.profile =
                  "ribbon" === (n = i.p) ? 2 : "roundmulti" === n ? 1 : void 0),
              i.tp && (a.twistpitch = parseFloat(i.tp)),
              i.str && (a.strands = parseInt(i.str, 10)),
              i.wl && (a.wirelength = parseFloat(i.wl)),
              i.ws && (a.wrapspace = parseFloat(i.ws)),
              i.hf && (a.hf = parseFloat(i.hf)),
              this.updateUnits(),
              2 === a.profile
                ? ((a.thick = parseFloat(i.thick)),
                  (a.width = parseFloat(i.width)))
                : (i.awg
                    ? ((a.awg = parseFloat(i.awg)),
                      (a.dia = t.Conv.awg2mm(a.awg)))
                    : i.dia &&
                      ((a.dia = parseFloat(i.dia)),
                      (a.awg = t.Conv.mm2awg(a.dia))),
                  this.$in.awg.val(a.awg),
                  this.writeDia()),
              this.ccWrite(),
              this.findRstv(),
              this.findTwist(),
              i.rstv &&
                ((a.mat = "c"),
                this.$in.mat.val(a.mat),
                (a.rstv = parseFloat(i.rstv)),
                this.writeRstv()),
              i.wl
                ? ((a.wirelength = parseFloat(i.wl)),
                  $("#cd-len").val(this.ds(a.wirelength)))
                : this.wireLength(),
              i.a && this.toggAdvanced(),
              this.wraps();
          }),
          (a.prototype.validerTwistPitch = function () {
            var t = this.$in.twistpitch.parents(".form-group"),
              i = t.find(".tpwarn");
            this.coil.twistpitch <= this.coil.dia && 0 !== this.coil.twistpitch
              ? (t.addClass("has-error"),
                0 === i.length &&
                  t.append(
                    '<span class="label label-danger tpwarn">\n                            Twist pitch must be greater than wire diameter, or zero.\n                        </span>'
                  ))
              : t.removeClass("has-error").find(".tpwarn").remove();
          }),
          (a.prototype.ribbonCheck = function () {
            var t = $(".cd-wiredimensions");
            this.coil.width < this.coil.thick
              ? (t.addClass("has-warning"), $("#thicknesswarning").show())
              : (t.removeClass("has-warning"), $("#thicknesswarning").hide());
          }),
          a
        );
      })();
      (i.Page = r),
        (i.init2 = function () {
          new r(
            {
              mat: $("#cd-material"),
              advanced: $("#cd-basicadvanced"),
              units: $(".cd-units"),
              unitsSi: $("#cd-units-si"),
              unitsIm: $("#cd-units-im"),
              profile: $("#cd-profile"),
              awg: $("#cd-awg"),
              dia: $("#cd-dia"),
              strands: $("#cd-strands"),
              twistpitch: $("#cd-twistpitch"),
              ribbonwidth: $("#cd-ribbonwidth"),
              thickness: $("#cd-thickness"),
              thickWarnBtn: $("#thicknesswarning .btn"),
              setup: $("#cd-setup"),
              targetr: $("#cd-targetr"),
              rstv: $("#cd-rstv"),
              len: $("#cd-len"),
              leglength: $("#cd-leglength"),
              wrapspace: $("#cd-wrapspace"),
              innerdia: $("#cd-innerdia"),
              reset: $("#cc-resetdefaults"),
              hf: $("#hf"),
            },
            {
              results: $("#results"),
              advanced: $("#advancedresults"),
              heaticon: $("#heaticon"),
              hfp: $("#hfp"),
              hfu: $("#hfu"),
            }
          );
        }),
        (i.init = function () {
          (r.mats = t.Data.Mat.mats),
            i.init2(),
            new i.CoilConverter.CoilConverter($("#rescontab"));
        });
    })(t.Coil || (t.Coil = {}));
  })(SE || (SE = {})),
  (function (t) {
    var i, a;
    (i = t.Juice || (t.Juice = {})),
      (a = (function () {
        function t(t) {
          this._density = t;
        }
        return (
          (t.prototype.setVol = function (t) {
            (this._volume = t), (this._weight = this._volume * this._density);
          }),
          (t.prototype.setWgt = function (t) {
            (this._weight = t), (this._volume = t / this._density);
          }),
          (t.prototype.subtractVol = function (t) {
            return this.setVol(this._volume - t), this._volume;
          }),
          (t.prototype.vol = function (t) {
            return void 0 !== t && this.setVol(t), this._volume;
          }),
          (t.prototype.wgt = function (t) {
            return void 0 !== t && this.setWgt(t), this._weight;
          }),
          t
        );
      })()),
      (i.Ingredient = a);
  })(SE || (SE = {})),
  (function (t) {
    !(function (i) {
      var a, e;
      ((e = a || (a = {}))[(e.pg = 1.0373)] = "pg"),
        (e[(e.vg = 1.2613)] = "vg"),
        (e[(e.nic = 1.00925)] = "nic"),
        (e[(e.water = 0.9982)] = "water"),
        (e[(e.flavor = 1.06)] = "flavor");
      var n = (function () {
          function a() {
            (this.mixByWeight = !1),
              (this.templates = {
                batch: Handlebars.compile($("#juice-batch-template").html()),
                nicBase: Handlebars.compile($("#nicbase-template").html()),
                target: Handlebars.compile($("#target-template").html()),
                flavor: Handlebars.compile($("#flavor-template").html()),
                resTr: Handlebars.compile($("#restr-template").html()),
                breakdown: Handlebars.compile($("#breakdown-template").html()),
                ingredients: Handlebars.compile(
                  $("#ingredients-template").html()
                ),
                results: Handlebars.compile($("#results-template").html()),
              }),
              (this.mix = a.defaultMix),
              $("#juice-batch").html(
                this.templates.batch({
                  inptype: "number",
                })
              ),
              $("#nicbase").html(
                this.templates.nicBase({
                  inptype: "number",
                })
              ),
              $("#target").html(
                this.templates.target({
                  inptype: "number",
                })
              ),
              (this.mix.target.pg = new i.Ingredient(1.0373)),
              (this.mix.target.vg = new i.Ingredient(1.2613)),
              (this.mix.target.nic = new i.Ingredient(1.00925)),
              (this.mix.nicBase.pg = new i.Ingredient(1.0373)),
              (this.mix.nicBase.vg = new i.Ingredient(1.2613)),
              (this.mix.nicBase.nic = new i.Ingredient(1.00925)),
              (this.mix.addVg = new i.Ingredient(1.2613)),
              (this.mix.addPg = new i.Ingredient(1.0373)),
              this.calc();
          }
          return (
            (a.prototype.batchUnit = function () {
              return this.mixByWeight ? "g" : "ml";
            }),
            (a.prototype.showTd = function (i) {
              var a = "",
                e = "",
                n = !0,
                r = "";
              return (
                i.vol() < 0 &&
                  ((a = " danger"),
                  (e =
                    "A negative value means that the current mix is not feasible."),
                  (r = ' style="cursor:help;"'),
                  (n = !1)),
                {
                  html:
                    '<td class="text-right' +
                    a +
                    ' volume" title="' +
                    e +
                    '"' +
                    r +
                    ">" +
                    t.Mth.round(i.vol()) +
                    '</td>\n                <td class="text-right' +
                    a +
                    ' weight" title="' +
                    e +
                    '"' +
                    r +
                    ">" +
                    t.Mth.round(i.wgt()) +
                    "</td>",
                  ok: n,
                }
              );
            }),
            (a.prototype.calc = function () {
              if (
                ((this.mix.nicBase.nonNicPercent =
                  100 - this.mix.nicBase.nicPercent),
                (this.mix.nicBase.realVgPercent =
                  this.mix.nicBase.nomVgPercent *
                  (this.mix.nicBase.nonNicPercent / 100)),
                (this.mix.nicBase.realPgPercent =
                  this.mix.nicBase.nomPgPercent *
                  (this.mix.nicBase.nonNicPercent / 100)),
                this.mix.target.nic.vol(
                  (this.mix.batchSize * this.mix.target.nicPercent) / 100
                ),
                0 === this.mix.target.nicPercent
                  ? (this.mix.nicBase.totalVolume = 0)
                  : (this.mix.nicBase.totalVolume =
                      this.mix.target.nic.vol() /
                      (this.mix.nicBase.nicPercent / 100)),
                this.mix.nicBase.nic.vol(
                  (this.mix.target.nicPercent / 100) * this.mix.batchSize
                ),
                this.mix.nicBase.pg.vol(
                  this.mix.nicBase.totalVolume *
                    (this.mix.nicBase.realPgPercent / 100)
                ),
                this.mix.nicBase.vg.vol(
                  this.mix.nicBase.totalVolume *
                    (this.mix.nicBase.realVgPercent / 100)
                ),
                this.mix.target.pg.vol(
                  (this.mix.target.nomPgPercent / 100) *
                    (this.mix.batchSize - this.mix.nicBase.nic.vol())
                ),
                this.mix.target.vg.vol(
                  (this.mix.target.nomVgPercent / 100) *
                    (this.mix.batchSize - this.mix.nicBase.nic.vol())
                ),
                this.mix.addPg.vol(
                  this.mix.target.pg.vol() - this.mix.nicBase.pg.vol()
                ),
                this.mix.addVg.vol(
                  this.mix.target.vg.vol() - this.mix.nicBase.vg.vol()
                ),
                this.mix.flavors)
              )
                for (var a = 0, e = this.mix.flavors; a < e.length; a++) {
                  ((f = e[a]).vol = this.mix.batchSize * (f.perc / 100)),
                    f.vg
                      ? this.mix.addVg.subtractVol(f.vol)
                      : this.mix.addPg.subtractVol(f.vol);
                }
              var n = function (t) {
                (t.totalVolume = t.nic.vol() + t.pg.vol() + t.vg.vol()),
                  (t.totalWeight = t.nic.wgt() + t.pg.wgt() + t.vg.wgt()),
                  0 === t.totalVolume
                    ? (t.density = 0)
                    : (t.density =
                        (t.nic.wgt() + t.pg.wgt() + t.vg.wgt()) /
                        t.totalVolume);
              };
              n(this.mix.nicBase);
              var r,
                s = new i.Ingredient(this.mix.nicBase.density);
              s.vol(this.mix.nicBase.totalVolume), n(this.mix.target);
              var o,
                m = !0,
                l = $("#ej-results"),
                c = [];
              (r = this.showTd(this.mix.nicBase.nic)).ok || (m = !1),
                c.push(
                  this.templates.resTr({
                    nm: "Nicotine",
                    res: r.html,
                  })
                ),
                (r = this.showTd(this.mix.nicBase.vg)).ok || (m = !1),
                c.push(
                  this.templates.resTr({
                    nm: "VG",
                    res: r.html,
                  })
                ),
                (r = this.showTd(this.mix.nicBase.pg)).ok || (m = !1),
                c.push(
                  this.templates.resTr({
                    nm: "PG",
                    res: r.html,
                  })
                ),
                $("#ej-breakdown").html(
                  this.templates.breakdown({
                    batchunit: this.batchUnit(),
                    tbody: c.join(""),
                    sumvolume: t.Mth.round(this.mix.nicBase.totalVolume),
                    sumweight: t.Mth.round(this.mix.nicBase.totalWeight),
                    density: t.Mth.round(this.mix.nicBase.density),
                  })
                ),
                (c = []),
                (r = this.showTd(this.mix.nicBase.nic)).ok || (m = !1),
                c.push(
                  this.templates.resTr({
                    nm: "Nicotine",
                    res: r.html,
                  })
                ),
                (r = this.showTd(this.mix.target.vg)).ok || (m = !1),
                c.push(
                  this.templates.resTr({
                    nm: "VG",
                    res: r.html,
                  })
                ),
                (r = this.showTd(this.mix.target.pg)).ok || (m = !1),
                c.push(
                  this.templates.resTr({
                    nm: "PG",
                    res: r.html,
                  })
                ),
                $("#ej-ingredients").html(
                  this.templates.ingredients({
                    batchunit: this.batchUnit(),
                    tbody: c.join(""),
                    sumvolume: t.Mth.round(this.mix.target.totalVolume),
                    sumweight: t.Mth.round(this.mix.target.totalWeight),
                    density: t.Mth.round(this.mix.target.density),
                  })
                ),
                (c = []),
                (o =
                  100 === this.mix.nicBase.nomVgPercent
                    ? "Nicotine base (VG)"
                    : 100 === this.mix.nicBase.nomPgPercent
                    ? "Nicotine base (PG)"
                    : "Nicotine base (PG/VG)"),
                (r = this.showTd(s)).ok || (m = !1),
                this.mix.target.nic.vol() > 0 &&
                  c.push(
                    this.templates.resTr({
                      nm: o,
                      res: r.html,
                    })
                  );
              var h = 0,
                u = 0;
              if (this.mix.flavors)
                for (var d = 0, p = this.mix.flavors; d < p.length; d++) {
                  var f,
                    v = void 0,
                    g = void 0;
                  (f = p[d]).vg
                    ? ((v = "<i>" + f.nm + " (VG)</i>"),
                      (g = new i.Ingredient(1.16065)).vol(f.vol),
                      (r = this.showTd(g)))
                    : ((v = "<i>" + f.nm + " (PG)</i>"),
                      (g = new i.Ingredient(1.04865)).vol(f.vol),
                      (r = this.showTd(g))),
                    r.ok || (m = !1),
                    c.push(
                      this.templates.resTr({
                        nm: v,
                        res: r.html,
                      })
                    ),
                    (h += g.vol()),
                    (u += g.wgt());
                }
              (r = this.showTd(this.mix.addVg)).ok || (m = !1),
                c.push(
                  this.templates.resTr({
                    nm: "VG",
                    res: r.html,
                  })
                ),
                (r = this.showTd(this.mix.addPg)).ok || (m = !1),
                c.push(
                  this.templates.resTr({
                    nm: "PG",
                    res: r.html,
                  })
                ),
                l.html(
                  this.templates.results({
                    batchunit: this.batchUnit(),
                    tbody: c.join(""),
                    sumvolume: t.Mth.round(
                      this.mix.addPg.vol() + this.mix.addVg.vol() + s.vol() + h
                    ),
                    sumweight: t.Mth.round(
                      this.mix.addPg.wgt() + this.mix.addVg.wgt() + s.wgt() + u
                    ),
                  })
                ),
                t.Global.activateBlinkies(l),
                this.mix.nicBase.nicPercent < this.mix.target.nicPercent
                  ? ($("#errormsg-targetnic").show(), (m = !1))
                  : $("#errormsg-targetnic").hide();
              var x = $("#ej-errormsg"),
                w = $("#ej-okmsg");
              m
                ? x.is(":visible") && (w.slideDown(200), x.slideUp(200))
                : x.is(":visible") || (x.slideDown(200), w.slideUp(200));
            }),
            (a.prototype.addFlavor = function (t, i, a) {
              $("#ej-flavoring").append(
                this.templates.flavor({
                  nm: t,
                  perc: i,
                  vg: a,
                })
              );
            }),
            (a.prototype.writeFlavors = function () {
              if (0 === this.mix.flavors.length)
                this.addFlavor("Flavor", 0, !1);
              else
                for (var t = 0, i = this.mix.flavors; t < i.length; t++) {
                  var a = i[t];
                  this.addFlavor(a.nm, a.perc, a.vg);
                }
            }),
            (a.prototype.write = function () {
              $("#ej-batch").val(this.mix.batchSize),
                $("#ej-nicbasepgp").val(this.mix.nicBase.nomPgPercent),
                $("#ej-nicbasevgp").val(this.mix.nicBase.nomVgPercent),
                $("#ej-targetpgp").val(this.mix.target.nomPgPercent),
                $("#ej-targetvgp").val(this.mix.target.nomVgPercent),
                $("#ej-mixby").find("input").prop("checked", !1),
                this.mixByWeight
                  ? $("#ej-mixbyweight").prop("checked", !0)
                  : $("#ej-mixbyvolume").prop("checked", !0),
                this.mixByWeight
                  ? ($(".ej-nic-unit span").html("<sup>mg</sup>/<sub>ml</sub>"),
                    $("#ej-nicbasenicp").val(10 * this.mix.nicBase.nicPercent),
                    $("#ej-targetnicp").val(10 * this.mix.target.nicPercent))
                  : ($(".ej-nic-unit span").html("%"),
                    $("#ej-nicbasenicp").val(this.mix.nicBase.nicPercent),
                    $("#ej-targetnicp").val(this.mix.target.nicPercent));
            }),
            (a.prototype.getFlavors = function () {
              var t = [];
              $("#ej-flavoring tr").each(function (i, a) {
                t.push({
                  nm: $(a).find(".flavor-nm").val(),
                  perc: parseFloat($(a).find(".flavor-percent").val()),
                  vg: $(a).find(".flavor-vg").is(":checked"),
                  vol: null,
                });
              }),
                (this.mix.flavors = t);
            }),
            (a.prototype.import = function (t) {
              (this.mix.batchSize = t.batchSize),
                (this.mixByWeight = t.mixByWeight),
                (this.mix.nicBase.nicPercent = t.baseStrength),
                (this.mix.nicBase.nomPgPercent = t.basePg),
                (this.mix.nicBase.nomVgPercent = 100 - t.basePg),
                (this.mix.target.nicPercent = t.targetStrength),
                (this.mix.target.nomPgPercent = t.targetPg),
                (this.mix.target.nomVgPercent = 100 - t.targetPg),
                (this.mix.flavors = t.flavors),
                this.write(),
                this.writeFlavors(),
                this.calc();
            }),
            (a.prototype.export = function () {
              return {
                batchSize: this.mix.batchSize,
                mixByWeight: this.mixByWeight,
                baseStrength: this.mix.nicBase.nicPercent,
                basePg: this.mix.nicBase.nomPgPercent,
                targetStrength: this.mix.target.nicPercent,
                targetPg: this.mix.target.nomPgPercent,
                flavors: this.mix.flavors,
              };
            }),
            (a.defaultMix = {
              flavors: [],
              nicBase: {
                nicPercent: 2.7,
                nomVgPercent: 0,
                nomPgPercent: 100,
              },
              batchSize: 10,
              target: {
                nicPercent: 1.8,
                nomPgPercent: 70,
                nomVgPercent: 30,
              },
              mixByWeight: !1,
            }),
            a
          );
        })(),
        r = !1;
      i.init = function () {
        if (r) console.warn("already inited");
        else {
          r = !0;
          var i = new n();
          $("#ej-batch").change(function (a) {
            (i.mix.batchSize = parseFloat($(a.delegateTarget).val())),
              i.calc(),
              t.Ga.gad("juice", "batch", i.mix.batchSize);
          }),
            $("#ej-mixby input").change(function (a) {
              (i.mixByWeight = "weight" === $(a.delegateTarget).val()),
                t.Ga.gad("juice", "mixby", i.mixByWeight),
                i.write(),
                i.calc();
            }),
            $("#ej-nicbasenicp").change(function (a) {
              (i.mix.nicBase.nicPercent = parseFloat(
                $(a.delegateTarget).val()
              )),
                i.mixByWeight && (i.mix.nicBase.nicPercent /= 10),
                i.calc(),
                t.Ga.gad("juice", "nicbasenicp", i.mix.nicBase.nicPercent);
            }),
            $("#ej-nicbasepgp").change(function (a) {
              (i.mix.nicBase.nomPgPercent = parseFloat(
                $(a.delegateTarget).val()
              )),
                (i.mix.nicBase.nomVgPercent = 100 - i.mix.nicBase.nomPgPercent),
                $("#ej-nicbasevgp").val(i.mix.nicBase.nomVgPercent),
                i.calc(),
                t.Ga.gad("juice", "nicbasepgp", i.mix.nicBase.nomPgPercent);
            }),
            $("#ej-nicbasevgp").change(function (a) {
              (i.mix.nicBase.nomVgPercent = parseFloat(
                $(a.delegateTarget).val()
              )),
                (i.mix.nicBase.nomPgPercent = 100 - i.mix.nicBase.nomVgPercent),
                $("#ej-nicbasepgp").val(i.mix.nicBase.nomPgPercent),
                i.calc(),
                t.Ga.gad("juice", "nicbasevgp", i.mix.nicBase.nomVgPercent);
            }),
            $("#ej-targetnicp").change(function (a) {
              (i.mix.target.nicPercent = parseFloat($(a.delegateTarget).val())),
                i.mixByWeight && (i.mix.target.nicPercent /= 10),
                i.calc(),
                t.Ga.gad("juice", "targetnicp", i.mix.target.nicPercent);
            }),
            $("#ej-targetpgp").change(function (a) {
              (i.mix.target.nomPgPercent = parseFloat(
                $(a.delegateTarget).val()
              )),
                (i.mix.target.nomVgPercent = 100 - i.mix.target.nomPgPercent),
                $("#ej-targetvgp").val(i.mix.target.nomVgPercent),
                t.Ga.gad("juice", "targptpgp", i.mix.target.nomPgPercent),
                i.calc();
            }),
            $("#ej-targetvgp").change(function (a) {
              (i.mix.target.nomVgPercent = parseFloat(
                $(a.delegateTarget).val()
              )),
                (i.mix.target.nomPgPercent = 100 - i.mix.target.nomVgPercent),
                $("#ej-targetpgp").val(i.mix.target.nomPgPercent),
                t.Ga.gad("juice", "targetvgp", i.mix.target.nomVgPercent),
                i.calc();
            }),
            $("#ej-save").click(function () {
              t.Global.seSave("ej2", i.export()), t.Ga.gad("juice", "save");
            }),
            $("#ej-load").click(function () {
              var a = t.Global.seLoad("ej2");
              a
                ? (i.import(a), t.Ga.gad("juice", "load"))
                : t.Ga.gad("juice", "loadfailed");
            }),
            $("#ej-reset").click(function () {
              (i = new n()),
                $("#ej-flavoring").html(""),
                i.write(),
                i.calc(),
                t.Global.ccMenuMsg(
                  "Default settings have been restored.",
                  "success"
                ),
                t.Ga.gad("juice", "reset");
            }),
            $("#ej-addflavor").click(function () {
              t.Ga.gad("juice", "flavor", "add"),
                i.addFlavor("Flavor " + (i.mix.flavors.length + 1), 0, !1),
                i.getFlavors(),
                i.calc();
            }),
            $("#ej-flavoring").on("change", "input", function () {
              t.Ga.gad("juice", "flavor", "change"), i.getFlavors(), i.calc();
            }),
            $("#ej-flavoring").on("click", ".deleteflavor", function () {
              t.Ga.gad("juice", "flavor", "remove"),
                $(this).parents("tr").remove(),
                i.getFlavors(),
                i.calc();
            }),
            i.mix.flavors.length > 0 &&
              setTimeout(function () {
                t.Ga.gad("juice", "flavor", "loadwithflavor");
              }, 500),
            $("main").on("click", ".showdetails", function (t) {
              var i = $(t.currentTarget);
              i.toggleClass("active"),
                i.parents(".panel").find(".details").slideToggle();
            });
        }
      };
    })(t.Juice || (t.Juice = {}));
  })(SE || (SE = {})),
  (function (t) {
    var i, a;
    (i = t.ModRangeCalc || (t.ModRangeCalc = {})),
      (a = (function () {
        function t() {
          this.chartSetup = {
            linje: void 0,
          };
        }
        return (
          (t.prototype.update = function (t) {
            var i = t.rmin || 0;
            i = Math.round(30 * i) / 30;
            for (var a = [], e = 0; e < 125; e++) a.push(e / 50);
            for (var n = [], r = 0, s = a; r < s.length; r++) {
              (f = s[r]) < t.rmin || f > t.rmax
                ? n.push(0)
                : n.push(t.imax * t.imax * f);
            }
            for (var o = [], m = 0, l = a; m < l.length; m++) {
              (f = l[m]) < t.rmin || f > t.rmax
                ? o.push(0)
                : o.push((t.umax * t.umax) / f);
            }
            var c = [];
            for (e = 0; e < a.length; e++) c.push(Math.min(n[e], o[e], t.pmax));
            for (
              var h = [
                  {
                    data: c,
                    fillColor: "rgba(220,255,220,0.2)",
                    label: void 0,
                    strokeColor: void 0,
                  },
                ],
                u = [],
                d = 0,
                p = a;
              d < p.length;
              d++
            ) {
              var f = p[d];
              Math.round(4 * f) / 4 === f ? u.push(f.toString()) : u.push("");
            }
            var v = {
                labels: u,
                datasets: h,
              },
              g = document.getElementById("mainchart").getContext("2d");
            this.chartSetup.linje = new Chart(g);
            this.chartSetup.linje.Line(v, {
              bezierCurve: !1,
              animation: !1,
              responsive: !0,
              maintainAspectRatio: !1,
              pointDot: !1,
              scaleGridLineColor: "rgba(0,0,0,.1)",
              datasetFill: !0,
              showTooltips: !1,
            });
          }),
          t
        );
      })()),
      (i.ModrangeChart = a);
  })(SE || (SE = {})),
  (function (t) {
    var i, a;
    (i = t.ModRangeCalc || (t.ModRangeCalc = {})),
      (a = (function () {
        function a(t) {
          (this.settings = t),
            (this.chart = new i.ModrangeChart()),
            (this.$inp = t.$inp);
        }
        return (
          (a.prototype.getInputs = function () {
            this.mrInputs = {
              umax: parseFloat(this.$inp.umax.val()),
              pmax: parseFloat(this.$inp.pmax.val()),
              rmin: parseFloat(this.$inp.rmin.val()),
              rmax: parseFloat(this.$inp.rmax.val()),
              imax: parseFloat(this.$inp.imax.val()),
            };
          }),
          (a.prototype.calc = function () {
            this.getInputs(),
              $(".imax").html(this.mrInputs.imax.toString()),
              $(".umax").html(this.mrInputs.umax.toString()),
              $(".pmax").html(this.mrInputs.pmax.toString()),
              $(".rmin").html(this.mrInputs.rmin.toString()),
              $(".rmax").html(this.mrInputs.rmax.toString());
            var i = this.mrInputs.pmax / this.mrInputs.imax;
            $("#res1").find(".ures").html(t.Mth.dround(i)),
              i > this.mrInputs.umax
                ? ($("#res1 .maxu").show(), (i = this.mrInputs.umax))
                : $("#res1 .maxu").hide();
            var a = i / this.mrInputs.imax;
            $("#res1").find(".rres").html(t.Mth.dround(a)),
              a < this.mrInputs.rmin
                ? ($("#res1 .minr").show(),
                  $("#res1 .maxr").hide(),
                  (a = this.mrInputs.rmin))
                : a > this.mrInputs.rmax
                ? ($("#res1 .minr").hide(),
                  $("#res1 .maxr").show(),
                  (a = this.mrInputs.rmax))
                : ($("#res1 .minr").hide(), $("#res1 .maxr").hide()),
              $("#res3").find(".rmin").html(t.Mth.dround(a));
            var e = this.mrInputs.pmax / this.mrInputs.umax;
            $("#res2").find(".ires").html(t.Mth.dround(e)),
              e > this.mrInputs.imax
                ? ((e = this.mrInputs.imax), $("#res2 .maxi").show())
                : $("#res2 .maxi").hide();
            var n = this.mrInputs.umax / e;
            $("#res2").find(".rres").html(t.Mth.dround(n)),
              n < this.mrInputs.rmin
                ? ($("#res2 .minr").show(),
                  $("#res2 .maxr").hide(),
                  (n = this.mrInputs.rmin))
                : n > this.mrInputs.rmax
                ? ($("#res2 .minr").hide(),
                  $("#res2 .maxr").show(),
                  (n = this.mrInputs.rmax))
                : ($("#res2 .minr").hide(), $("#res2 .maxr").hide()),
              $("#res3").find(".rmax").html(t.Mth.dround(n));
            var r,
              s = this.mrInputs.umax / this.mrInputs.imax;
            s < this.mrInputs.rmin
              ? ($("#res3 .rmid").html(
                  '<s title="Median resistance is below ohm limit." class="text-muted helpcursor">' +
                    t.Mth.dround(s) +
                    "</s> " +
                    t.Mth.dround(this.mrInputs.rmin)
                ),
                (r = this.mrInputs.rmin))
              : s > this.mrInputs.rmax
              ? ($("#res3 .rmid").html(
                  '<s title="Median resistance is above ohm limit." class="text-muted helpcursor">' +
                    t.Mth.dround(s) +
                    "</s> " +
                    t.Mth.dround(this.mrInputs.rmax)
                ),
                (r = this.mrInputs.rmax))
              : ($("#res3 .rmid").html(t.Mth.dround(s)), (r = s));
            var o,
              m,
              l = (n + r) / 2;
            $("#res3 .rsweet").html(t.Mth.dround(l)),
              (o = $("#res3 .panel-footer")),
              (m = o.find(".help-block")),
              a === n
                ? (m.html(
                    "<code>No range for max power.</code> \n                        Consider decreasing the power (wattage), increasing the current or voltage, or widen the resistance range."
                  ),
                  o.show())
                : o.hide(),
              "function" == typeof Chart
                ? this.chart.update(this.mrInputs)
                : console.warn("Chart not loaded");
          }),
          (a.prototype.getPresets = function () {
            (this.mrPresets = t.Data.Mod.getPresets()),
              $("#modpreset").html(
                this.settings.templates.presets(this.mrPresets)
              );
          }),
          (a.prototype.changePresets = function (i) {
            var a = this.mrPresets[i];
            void 0 === a.umin && (a.umin = 0),
              void 0 === a.umax && (a.umax = 999),
              void 0 === a.pmin && (a.pmin = 0),
              void 0 === a.pmax && (a.pmax = 999),
              void 0 === a.imax && (a.imax = 999),
              this.$inp.umin.val(t.Mth.round(a.umin)),
              this.$inp.umax.val(t.Mth.round(a.umax)),
              this.$inp.pmin.val(t.Mth.round(a.pmin)),
              this.$inp.pmax.val(t.Mth.round(a.pmax)),
              this.$inp.imax.val(t.Mth.round(a.imax)),
              void 0 === a.rmin
                ? ((a.rmin = 0.01), this.$inp.rmin.val(""))
                : this.$inp.rmin.val(t.Mth.round(a.rmin)),
              void 0 === a.rmax
                ? ((a.rmax = 999), this.$inp.rmax.val(""))
                : this.$inp.rmax.val(t.Mth.round(a.rmax)),
              this.calc();
          }),
          a
        );
      })()),
      (i.Page = a),
      (i.init = function () {
        var a = {
            templates: {
              presets: Handlebars.compile($("#template-presets").html()),
            },
            $inp: {
              imax: $("#imax"),
              umin: $("#umin"),
              umax: $("#umax"),
              pmin: $("#pmin"),
              pmax: $("#pmax"),
              rmin: $("#rmin"),
              rmax: $("#rmax"),
            },
          },
          e = new i.Page(a);
        e.calc(),
          e.getPresets(),
          $("input").change(function () {
            e.calc();
          }),
          $("#modpreset").change(function (i) {
            var a = $(i.delegateTarget).val();
            "" !== a &&
              (e.changePresets(parseInt(a, 10)),
              t.Ga.gad(
                "modrange",
                "preset",
                $(i.delegateTarget)
                  .find("option:selected")
                  .html()
                  .replace(/ /g, "_")
              ));
          });
      });
  })(SE || (SE = {})),
  (function (t) {
    !(function (i) {
      var a, e;
      ((e = a || (a = {}))[(e.u = 0)] = "u"),
        (e[(e.r = 1)] = "r"),
        (e[(e.p = 2)] = "p"),
        (e[(e.i = 3)] = "i");
      var n = (function () {
        function i() {
          (this.calc = {
            r: void 0,
            u: void 0,
          }),
            this.ohmInit();
        }
        return (
          (i.getBeg = function (t) {
            return "r" === t
              ? a.r
              : "u" === t
              ? a.u
              : "i" === t
              ? a.i
              : "p" === t
              ? a.p
              : void 0;
          }),
          (i.prototype.ohmWrite = function (i) {
            void 0 === i
              ? ($("#cc-r").val(t.Mth.round(this.calc.r, 2)),
                $("#cc-u").val(t.Mth.round(this.calc.u, 2)),
                $("#cc-i").val(t.Mth.round(this.calc.i, 2)),
                $("#cc-p").val(t.Mth.round(this.calc.p, 2)))
              : (i.attr("id") !== $("#cc-r").attr("id") &&
                  $("#cc-r").val(t.Mth.round(this.calc.r, 2)),
                i.attr("id") !== $("#cc-u").attr("id") &&
                  $("#cc-u").val(t.Mth.round(this.calc.u, 2)),
                i.attr("id") !== $("#cc-i").attr("id") &&
                  $("#cc-i").val(t.Mth.round(this.calc.i, 2)),
                i.attr("id") !== $("#cc-p").attr("id") &&
                  $("#cc-p").val(t.Mth.round(this.calc.p, 2)));
          }),
          (i.prototype.ohmInit = function () {
            (this.settings = i.defaultSettings),
              (this.calc = i.defaultCalc),
              (this.calc.i = this.calc.u / this.calc.r),
              (this.calc.p = this.calc.u * this.calc.i);
          }),
          (i.prototype.ohmLoad = function () {
            var i = t.Global.seLoad("ohm");
            void 0 === i
              ? (this.ohmInit(), $("#ohm-load").hide())
              : (this.calc = i);
          }),
          (i.prototype.clearPadlocks = function () {
            $(".form-group").find("i").removeClass("lb1 lb2").attr("title", "");
          }),
          (i.prototype.updatePadlocks = function (t) {
            this.clearPadlocks(),
              $("#cc-" + a[t.lockbtn1] + "-cg")
                .find("i")
                .addClass("lb1")
                .attr(
                  "title",
                  "This value will stay constant when you adjust other values."
                ),
              $("#cc-" + a[t.lockbtn2] + "-cg")
                .find("i")
                .addClass("lb2")
                .attr(
                  "title",
                  "This value will stay constant when you adjust " +
                    a[t.lockbtn1].toUpperCase() +
                    "."
                );
          }),
          (i.prototype.showLocks = function () {
            var t = this.settings;
            $("#cc-locksimple").find(".btn").removeClass("btn-primary active"),
              $("#cc-locksimple")
                .find('.btn[data-lock="' + a[t.lockbtn1] + '"]')
                .addClass("btn-primary"),
              $("#cc-locksimple")
                .find('.btn[data-lock="' + a[t.lockbtn2] + '"]')
                .addClass("active"),
              this.updatePadlocks(t);
          }),
          (i.prototype.setR = function (i) {
            var e = this.calc;
            (e.r = i),
              this.settings.rlock === a.u
                ? ((e.i = e.u / e.r), (e.p = e.u * e.i))
                : this.settings.rlock === a.i
                ? ((e.u = e.i * e.r), (e.p = e.u * e.i))
                : this.settings.rlock === a.p &&
                  ((e.i = Math.sqrt(e.p / e.r)), (e.u = e.i * e.r)),
              t.Ga.gad("ohm", "r", i);
          }),
          (i.prototype.setU = function (i) {
            var e = this.calc;
            (e.u = i),
              this.settings.ulock === a.r
                ? ((e.i = e.u / e.r), (e.p = e.u * e.i))
                : this.settings.ulock === a.i
                ? ((e.r = e.u / e.i), (e.p = e.u * e.i))
                : this.settings.ulock === a.p &&
                  ((e.r = (e.u * e.u) / e.p), (e.i = e.u / e.r)),
              t.Ga.gad("ohm", "u", i);
          }),
          (i.prototype.setI = function (i) {
            var e = this.calc;
            (e.i = i),
              this.settings.ilock === a.r
                ? ((e.u = e.r * e.i), (e.p = e.u * e.i))
                : this.settings.ilock === a.u
                ? ((e.r = e.u / e.i), (e.p = e.u * e.i))
                : this.settings.ilock === a.p &&
                  ((e.u = e.p / e.i), (e.r = e.u / e.i)),
              t.Ga.gad("ohm", "i", i);
          }),
          (i.prototype.setP = function (i) {
            var e = this.calc;
            (e.p = i),
              this.settings.plock === a.r
                ? ((e.u = Math.sqrt(e.p * e.r)), (e.i = e.u / e.r))
                : this.settings.plock === a.u
                ? ((e.r = (e.u * e.u) / e.p), (e.i = e.u / e.r))
                : this.settings.plock === a.i &&
                  ((e.r = e.p / (this.calc.i * this.calc.i)),
                  (this.calc.u = this.calc.i * this.calc.r)),
              t.Ga.gad("ohm", "p", i);
          }),
          (i.defaultSettings = {
            rlock: a.u,
            ulock: a.r,
            ilock: a.r,
            plock: a.r,
            lockadvanced: !1,
            lockbtn1: a.r,
            lockbtn2: a.u,
          }),
          (i.defaultCalc = {
            r: 2.5,
            u: 3.5,
          }),
          i
        );
      })();
      i.init = function () {
        var i = new n();
        $("#ohm-reset").click(function () {
          i.ohmInit(),
            i.ohmWrite(),
            i.showLocks(),
            t.Global.ccMenuMsg(
              "Default settings have been restored.",
              "success"
            ),
            t.Ga.gad("ohm", "reset");
        }),
          $("#ohm-save").click(function () {
            var a = i.settings;
            (a.lockbtn1 = n.getBeg(
              $("#cc-locksimple").find(".btn-primary").attr("data-lock")
            )),
              (a.lockbtn2 = n.getBeg(
                $("#cc-locksimple").find(".active").attr("data-lock")
              )),
              t.Global.seSave("ohm", a),
              $("#ohm-load").show(),
              t.Ga.gad("ohm", "save");
          }),
          $("#ohm-load").click(function () {
            i.ohmLoad(), i.ohmWrite(), i.showLocks(), t.Ga.gad("ohm", "load");
          }),
          $(".btn-group .cc-lock").click(function (t) {
            var e = i.settings,
              r = $(t.delegateTarget);
            r.hasClass("btn-primary") ||
              ((e.lockbtn2 = e.lockbtn1),
              (e.lockbtn1 = n.getBeg(r.attr("data-lock"))),
              $(".btn-group .cc-lock").removeClass("active"),
              $(".btn-group .cc-lock.btn-primary").addClass("active"),
              $(".btn-group .cc-lock").removeClass("btn-primary"),
              r.addClass("btn-primary"),
              i.showLocks());
            var s = n.getBeg(r.attr("data-lock"));
            s !== a.r && (e.rlock = s),
              s !== a.u && (e.ulock = s),
              s !== a.i && (e.ilock = s),
              s !== a.p && (e.plock = s),
              i.showLocks(),
              i.ohmWrite();
          }),
          $("#cc-r").change(function (t) {
            i.setR(parseFloat($(t.delegateTarget).val())),
              i.ohmWrite($(t.delegateTarget));
          }),
          $("#cc-u").change(function (t) {
            i.setU(parseFloat($(t.delegateTarget).val())),
              i.ohmWrite($(t.delegateTarget));
          }),
          $("#cc-i").change(function (t) {
            i.setI(parseFloat($(t.delegateTarget).val())),
              i.ohmWrite($(t.delegateTarget));
          }),
          $("#cc-p").change(function (t) {
            i.setP(parseFloat($(t.delegateTarget).val())),
              i.ohmWrite($(t.delegateTarget));
          }),
          i.ohmLoad(),
          i.ohmWrite(),
          i.showLocks();
      };
    })(t.OhmCalc || (t.OhmCalc = {}));
  })(SE || (SE = {})),
  (function (t) {
    var i;
    ((i = t.WireWiz || (t.WireWiz = {})).DnaTxt || (i.DnaTxt = {})).init =
      function (a, e) {
        var n,
          r,
          s =
            ((n = a),
            (r = []).push("DNA200"),
            1 === n.length
              ? r.push(
                  "-" +
                    n[0]
                      .mat()
                      .nm.replace(/ /g, "_")
                      .replace(/\//g, "_")
                      .replace(/__/g, " ")
                      .replace(/__/g, " ")
                )
              : (3 === n[0].wireType()
                  ? r.push("-Clapton")
                  : 4 === n[0].wireType()
                  ? r.push("-StaggeredClapton")
                  : 2 === n[0].wireType()
                  ? r.push("-Twisted")
                  : 1 === n[0].wireType() && r.push("-Parallel"),
                n[1] &&
                  n[1].mat &&
                  n[2] &&
                  n[2].mat &&
                  (r.push(
                    "-" +
                      n[1]
                        .mat()
                        .nm.replace(/ /g, "_")
                        .replace(/\//g, "_")
                        .replace(/__/g, " ")
                        .replace(/__/g, " ")
                  ),
                  r.push(
                    "-" +
                      n[2]
                        .mat()
                        .nm.replace(/ /g, "_")
                        .replace(/\//g, "_")
                        .replace(/__/g, " ")
                        .replace(/__/g, " ")
                  ))),
            r.push("-SteamEngine.csv"),
            r.join("")),
          o = (function (t, i) {
            for (var a = 0, e = t; a < e.length; a++) {
              var n = e[a];
              if (n.id() === i) return n;
            }
          })(a, e);
        if (o.resFactorsNormalized) {
          var m = (function (i, a) {
            for (var e = [], n = 0; n < a.length; n++)
              e.push(
                "\n" +
                  t.Mth.round(t.Conv.c2f(i[n]), 4) +
                  "," +
                  t.Mth.round(a[n], 10)
              );
            return '"Temperature (degF)","Electrical Resistivity"' + e.join("");
          })(i.TFR.tempPoints, o.resFactorsNormalized());
          return {
            txt: m,
            html:
              '<a id="dna200downloadlink" href="data:application/octet-stream,' +
              encodeURI(m) +
              '" download="' +
              s +
              '" title="' +
              s +
              '" class="btn btn-default">\n                    <i class="glyphicon glyphicon-download-alt"></i>\n                    Download TFR table as CSV\n                </a>\n                <span style="cursor:help;" title="The download button does not work with Microsoft Internet Explorer or Microsoft Edge. Use a different browser, or make a CSV file in Notepad and copy-paste the data to the file manually.">\n                    (button does not support MSIE or Edge)\n                </span>',
          };
        }
        return {
          txt: "",
          html: '<span class="help-block">No TFR curve for the selected material(s).</span>',
        };
      };
  })(SE || (SE = {})),
  (function (t) {
    var i, a;
    (i = t.WireWiz || (t.WireWiz = {})),
      (a = (function () {
        function a(t) {
          this.wires = t;
        }
        return (
          (a.prototype.findDirectChildren = function (t) {
            for (var i = [], a = 0, e = this.wires; a < e.length; a++) {
              var n = e[a];
              n.parent() === t.id() && i.push(n);
            }
            return i;
          }),
          (a.prototype.calcParThickness = function (t, i) {
            for (var a = 0, e = i; a < e.length; a++) {
              var n = e[a];
              t.width(t.width() + n.width()),
                n.thick() > t.thick() && t.thick(n.thick());
            }
          }),
          (a.prototype.calcTwistThickness = function (t, i) {
            var a = i[0];
            2 === t.strands()
              ? (t.width(2 * a.width()), t.thick(2 * a.thick()))
              : 3 === t.strands()
              ? (t.width(a.width() / (2 * Math.sqrt(3) - 3)),
                t.thick(a.thick() / (2 * Math.sqrt(3) - 3)))
              : (t.width(a.width() * (1 + Math.sqrt(2))),
                t.thick(a.thick() * (1 + Math.sqrt(2))));
          }),
          (a.prototype.calcThickness = function () {
            for (var t = this.wires.length - 1; t >= 0; t--) {
              var a = this.wires[t];
              if (0 === a.wireType())
                a.findResFactorsForSingle(i.TFR.tempPoints);
              else {
                var e = this.findDirectChildren(a);
                e.length > 0 &&
                  (a.width(0),
                  a.thick(0),
                  1 === a.wireType()
                    ? this.calcParThickness(a, e)
                    : 2 === a.wireType()
                    ? this.calcTwistThickness(a, e)
                    : 3 === a.wireType()
                    ? (a.width(e[0].width() + 2 * e[1].thick()),
                      a.thick(e[0].thick() + 2 * e[1].thick()))
                    : 4 === a.wireType() &&
                      (a.width(2 * e[0].width() + 4 * e[1].thick()),
                      a.thick(e[0].thick() + 2 * e[1].thick())));
              }
            }
          }),
          (a.prototype.calcLenghts = function () {
            for (
              var t = function (t, i, a) {
                  var e, n;
                  0 === i.profile()
                    ? (e = Math.PI * (i.dia() + 2 * a.thick()))
                    : (e =
                        2 * (i.width() + 2 * a.thick()) +
                        2 * (i.thick() + 2 * a.thick()));
                  return (
                    (n =
                      3 === t.wireType()
                        ? a.width() + t.wrapSpacing()
                        : 2 * (a.width() + t.wrapSpacing())),
                    (i.len() / n) * Math.sqrt(e * e + n * n)
                  );
                },
                i = function (t, i, a) {
                  var e;
                  if (0 === i.profile()) {
                    var n = i.dia() + 2 * a.thick();
                    e = Math.PI * n + 2 * a.thick();
                  } else {
                    e =
                      4 * (i.width() + 2 * a.thick()) +
                      2 * (i.thick() + 2 * a.thick());
                  }
                  var r = 2 * (a.width() + t.wrapSpacing());
                  return (i.len() / r) * Math.sqrt(e * e + r * r);
                },
                a = 0;
              a < this.wires.length;
              a++
            ) {
              var e = this.wires[a];
              if (0 !== e.len()) {
                var n = this.findDirectChildren(e);
                if (1 === e.wireType())
                  for (var r = 0, s = n; r < s.length; r++) {
                    s[r].len(e.len());
                  }
                else if (2 === e.wireType()) {
                  if (0 === e.twistpitch()) n[0].len(e.len());
                  else {
                    var o = e.twistpitch() * e.strands(),
                      m = n[0].width() * Math.PI,
                      l = Math.sqrt(Math.pow(o, 2) + Math.pow(m, 2)),
                      c = (e.len() / o) * l;
                    n[0].len(c);
                  }
                  var h = $('.slot[data-id="' + a + '"]').find(
                      ".slothead:first"
                    ),
                    u = h.find(".twistpitchtoosmall"),
                    d = h.find(".twistpitch").parents(".form-group:first");
                  e.twistpitch() <= n[0].width()
                    ? (u.show(), d.addClass("has-error"))
                    : (u.hide(), d.removeClass("has-error"));
                } else
                  3 === e.wireType()
                    ? (n[0].len(e.len()), n[1].len(t(e, n[0], n[1])))
                    : 4 === e.wireType() &&
                      (n[0].len(e.len()),
                      n[1].len(t(e, n[0], n[1])),
                      n[2].len(i(e, n[0], n[2])));
              }
            }
          }),
          (a.prototype.calcResFactors = function (a, e) {
            var n = [];
            if (e)
              for (var r = 0, s = e; r < s.length; r++) {
                var o = s[r];
                0 === this.findDirectChildren(o).length &&
                  o.findResFactorsForSingle(i.TFR.tempPoints);
              }
            for (var m = !0, l = 0; l < i.TFR.tempPoints.length && m; l++) {
              var c = [];
              if (0 === a.wireType())
                if (a.resFactors())
                  (p = a.resFactors()[l]) ? c.push(a.res() * p) : (m = !1);
                else m = !1;
              else if (2 === a.wireType())
                if (e[0].resFactors())
                  for (var h = 0; h < a.strands(); h++) {
                    (p = e[0].resFactors()[l])
                      ? c.push(e[0].res() * p)
                      : (m = !1);
                  }
                else m = !1;
              else if (4 === a.wireType()) {
                if (e[0].resFactors && e[1].resFactors && e[2].resFactors)
                  (p = e[0].resFactors()[l])
                    ? c.push(e[0].res() * p, e[0].res() * p)
                    : (m = !1),
                    (p = e[1].resFactors()[l])
                      ? c.push(e[1].res() * p, e[1].res() * p)
                      : (m = !1),
                    (p = e[2].resFactors()[l])
                      ? c.push(e[2].res() * p)
                      : (m = !1);
                else m = !1;
              } else
                for (var u = 0, d = e; u < d.length; u++) {
                  var p;
                  if (!(o = d[u]).resFactors) {
                    (m = !1), (c = []);
                    break;
                  }
                  if (!(p = o.resFactors()[l])) {
                    (m = !1), (c = []);
                    break;
                  }
                  c.push(o.res() * p);
                }
              0 !== c.length && m ? n.push(t.Mth.paRes(c)) : a.resFactors([]);
            }
            n.length > 0 && a.resFactors(n),
              a.resFactors().length > 0 &&
                a.resFactorsNormalized(
                  i.TFR.normalizeResFactors(a.resFactors(), i.TFR.tempPoints)
                );
          }),
          (a.prototype.calcPhysicalProps = function () {
            for (var i = this.wires.length - 1; i >= 0; i--) {
              var a = this.wires[i],
                e = void 0;
              if (0 !== a.wireType()) {
                for (
                  var n = [], r = 0, s = (e = this.findDirectChildren(a));
                  r < s.length;
                  r++
                ) {
                  var o = s[r];
                  n.push(o.rstv() * (o.len() / a.len()));
                }
                a.rstv(t.Mth.paRes(n));
              }
              if ((a.res((a.rstv() * a.len()) / 1e3), 0 === a.wireType()))
                0 === a.profile()
                  ? (a.surfaceArea(Math.PI * a.dia() * a.len()),
                    a.xArea(Math.PI * Math.pow(a.dia() / 2, 2)))
                  : (a.surfaceArea((2 * a.width() + 2 * a.thick()) * a.len()),
                    a.xArea(a.width() * a.thick())),
                  a.volume(a.xArea() * a.len()),
                  a.dens(a.mat().dens),
                  a.mass(a.dens() * a.volume()),
                  a.hc(a.mat().hc * a.mass());
              else if (2 === a.wireType())
                a.rstv(e[0].rstv() / a.strands()),
                  a.res(e[0].res() / a.strands()),
                  a.surfaceArea(e[0].surfaceArea() * a.strands()),
                  a.xArea(e[0].xArea() * a.strands()),
                  a.volume(e[0].volume() * a.strands()),
                  a.mass(e[0].mass() * a.strands()),
                  a.hc(e[0].hc() * a.strands()),
                  a.dens(e[0].dens());
              else if (4 === a.wireType())
                a.rstv(
                  t.Mth.paRes([e[0].rstv() / 2, e[1].rstv() / 2, e[2].rstv()])
                ),
                  a.res(
                    t.Mth.paRes([e[0].res() / 2, e[1].res() / 2, e[2].res()])
                  ),
                  a.surfaceArea(
                    2 * e[0].surfaceArea() +
                      2 * e[1].surfaceArea() +
                      e[2].surfaceArea()
                  ),
                  a.xArea(2 * e[0].xArea() + 2 * e[1].xArea() + e[2].xArea()),
                  a.volume(
                    2 * e[0].volume() + 2 * e[1].volume() + e[2].volume()
                  ),
                  a.mass(2 * e[0].mass() + 2 * e[1].mass() + e[2].mass()),
                  a.hc(2 * e[0].hc() + 2 * e[1].hc() + e[2].hc()),
                  a.dens(a.mass() / a.volume());
              else {
                a.surfaceArea(0), a.xArea(0), a.volume(0), a.mass(0), a.hc(0);
                for (var m = 0, l = e; m < l.length; m++) {
                  o = l[m];
                  a.surfaceArea(a.surfaceArea() + o.surfaceArea()),
                    a.xArea(a.xArea() + o.xArea()),
                    a.volume(a.volume() + o.volume()),
                    a.mass(a.mass() + o.mass()),
                    a.hc(a.hc() + o.hc());
                }
                a.dens(a.mass() / a.volume());
              }
              a.ampsPerVolt(1 / a.res()), this.calcResFactors(a, e);
            }
          }),
          (a.prototype.ampsPercent = function () {
            for (var t = 0, i = this.wires; t < i.length; t++) {
              var a = i[t];
              a.ampsPercent(a.ampsPerVolt() / this.wires[0].ampsPerVolt());
            }
          }),
          a
        );
      })()),
      (i.WWCalc = a);
  })(SE || (SE = {})),
  (function (t) {
    var i, a;
    (a = t.WireWiz || (t.WireWiz = {})),
      ((i = a.TFR || (a.TFR = {})).tempPoints = [
        -40, 20, 50, 100, 150, 200, 250, 300,
      ]),
      (i.tfrFactor = function (t, i) {
        for (var a, e, n = 0, r = t; n < r.length; n++) {
          var s = r[n];
          if (s[0] <= i) a = s;
          else if (s[0] > i) {
            e = s;
            break;
          }
        }
        a
          ? e || ((e = t[t.length - 1]), (a = t[t.length - 2]))
          : ((a = t[0]), (e = t[1]));
        var o = e[0] - a[0],
          m = (i - a[0]) / o;
        return (e[1] - a[1]) * m + a[1];
      }),
      (i.tcrFactor = function (t, i) {
        return 1 + t * (i - 20);
      }),
      (i.tfrInverse = function (t, i) {
        for (var a, e, n = 0, r = t; n < r.length; n++) {
          var s = r[n];
          if (s[1] <= i) a = s;
          else if (s[1] > i) {
            e = s;
            break;
          }
        }
        a
          ? e || ((e = t[t.length - 1]), (a = t[t.length - 2]))
          : ((a = t[1]), (e = t[0]));
        var o = e[1] - a[1],
          m = (i - a[1]) / o;
        return (e[0] - a[0]) * m + a[0];
      }),
      (i.normalizeResFactors = function (t, i) {
        for (
          var a = (function (t, i) {
              var a = (function (t) {
                for (var i = 0; i < t.length; i++) if (t[i] > 10) return i;
                return null;
              })(i);
              if (null !== a) return t[a];
              console.warn("Could not find normal temp point");
            })(t, i),
            e = [],
            n = 0,
            r = t;
          n < r.length;
          n++
        ) {
          var s = r[n];
          e.push(s / a);
        }
        return e;
      });
  })(SE || (SE = {})),
  (function (t) {
    !(function (t) {
      var i, a;
      ((i = t.WireType || (t.WireType = {}))[(i.sing = 0)] = "sing"),
        (i[(i.paral = 1)] = "paral"),
        (i[(i.twist = 2)] = "twist"),
        (i[(i.clapt = 3)] = "clapt"),
        (i[(i.staggClapt = 4)] = "staggClapt"),
        ((a = t.WProfile || (t.WProfile = {}))[(a.round = 0)] = "round"),
        (a[(a.ribbon = 1)] = "ribbon");
      var e = (function () {
        function i(t) {
          this.data = t;
        }
        return (
          (i.prototype.wireType = function () {
            return this.data.wireType;
          }),
          (i.prototype.resFactorsNormalized = function (t) {
            return (
              void 0 !== t && (this.data.resFactorsNormalized = t),
              this.data.resFactorsNormalized
            );
          }),
          (i.prototype.nm = function () {
            return this.data.nm;
          }),
          (i.prototype.mat = function () {
            return this.data.mat;
          }),
          (i.prototype.id = function () {
            return this.data.id;
          }),
          (i.prototype.thick = function (t) {
            return void 0 !== t && (this.data.thick = t), this.data.thick;
          }),
          (i.prototype.width = function (t) {
            return void 0 !== t && (this.data.width = t), this.data.width;
          }),
          (i.prototype.parent = function () {
            return this.data.parent;
          }),
          (i.prototype.res = function (t) {
            return void 0 !== t && (this.data.res = t), this.data.res;
          }),
          (i.prototype.rstv = function (t) {
            if (void 0 === t) return this.data.rstv;
            this.data.rstv = t;
          }),
          (i.prototype.hc = function (t) {
            return void 0 !== t && (this.data.hc = t), this.data.hc;
          }),
          (i.prototype.ampsPercent = function (t) {
            return (
              void 0 !== t && (this.data.ampsPercent = t), this.data.ampsPercent
            );
          }),
          (i.prototype.ampsPerVolt = function (t) {
            return (
              void 0 !== t && (this.data.ampsPerVolt = t), this.data.ampsPerVolt
            );
          }),
          (i.prototype.len = function (t) {
            if (void 0 === t) return this.data.len;
            this.data.len = t;
          }),
          (i.prototype.surfaceArea = function (t) {
            if (void 0 === t) return this.data.surfaceArea;
            this.data.surfaceArea = t;
          }),
          (i.prototype.xArea = function (t) {
            if (void 0 === t) return this.data.xArea;
            this.data.xArea = t;
          }),
          (i.prototype.volume = function (t) {
            return void 0 !== t && (this.data.volume = t), this.data.volume;
          }),
          (i.prototype.mass = function (t) {
            return void 0 !== t && (this.data.mass = t), this.data.mass;
          }),
          (i.prototype.dens = function (t) {
            return void 0 !== t && (this.data.dens = t), this.data.dens;
          }),
          (i.prototype.profile = function () {
            return this.data.profile;
          }),
          (i.prototype.dia = function () {
            return this.data.dia;
          }),
          (i.prototype.resFactors = function (t) {
            return (
              void 0 !== t && (this.data.resFactors = t), this.data.resFactors
            );
          }),
          (i.prototype.wrapSpacing = function () {
            return this.data.wrapSpacing;
          }),
          (i.prototype.strands = function () {
            return this.data.strands;
          }),
          (i.prototype.twistpitch = function () {
            return this.data.twistpitch;
          }),
          (i.prototype.readFromSlot = function (t) {
            if (0 === this.data.wireType) {
              this.data.profile = parseInt(
                t.find(".wireprofile:first").val(),
                10
              );
              var i = void 0;
              0 === this.data.profile
                ? ((this.data.dia = parseFloat(t.find(".dia:first").val())),
                  (this.data.width = this.data.dia),
                  (this.data.thick = this.data.dia),
                  (this.data.circum = this.data.dia * Math.PI),
                  (i = Math.pow(this.data.dia / 2, 2) * Math.PI))
                : 1 === this.data.profile
                ? ((this.data.width = parseFloat(t.find(".width:first").val())),
                  (this.data.thick = parseFloat(t.find(".thick:first").val())),
                  (this.data.circum =
                    2 * this.data.width + 2 * this.data.thick),
                  (i = this.data.width * this.data.thick))
                : console.warn("unknown profile", this.data.profile),
                (this.data.rstv = this.data.mat.rstv / i);
            } else
              3 === this.data.wireType
                ? (this.data.wrapSpacing = parseFloat(
                    t.find(".wrapspacing:first").val()
                  ))
                : 4 === this.data.wireType
                ? (this.data.wrapSpacing = parseFloat(
                    t.find(".wrapspacing:first").val()
                  ))
                : 2 === this.data.wireType &&
                  ((this.data.strands = parseInt(
                    t.find(".strands:first").val(),
                    10
                  )),
                  (this.data.twistpitch = parseFloat(
                    t.find(".twistpitch:first").val()
                  )));
          }),
          (i.prototype.findResFactorsForSingle = function (t) {
            if (this.mat().tcr || this.mat().tfr) {
              for (var a = [], e = 0, n = t; e < n.length; e++) {
                var r = n[e];
                a.push(i.resFactor(this.mat(), r));
              }
              this.resFactors(a);
            } else
              console.warn(
                "Material " + this.mat().id + " lacks both tfr and tcr."
              );
          }),
          (i.resFactor = function (i, a) {
            return i.tfr
              ? t.TFR.tfrFactor(i.tfr, a)
              : i.tcr
              ? t.TFR.tcrFactor(i.tcr, a)
              : void 0;
          }),
          i
        );
      })();
      t.Wire = e;
    })(t.WireWiz || (t.WireWiz = {}));
  })(SE || (SE = {})),
  (function (t) {
    var i, a;
    (i = t.WireWiz || (t.WireWiz = {})),
      ((a = i.TfrChart || (i.TfrChart = {})).update = function (e, n, r) {
        var s = function () {
            setTimeout(function () {
              a.update(e + 1, n, r);
            }, 1e3);
          },
          o = $("#tfrchart");
        if (e > 10)
          o.html(
            '<p class="text-muted" style="margin:1em;">Chart not available.</p>'
          );
        else {
          var m =
              '<p class="text-muted"><i class="glyphicon glyphicon-hourglass"></i> Loading chart ...</p>',
            l = "Retrying in a sec.";
          if ("function" != typeof Chart)
            return (
              console.warn("Chart not loaded.", l, typeof Chart),
              o.html(m),
              void s()
            );
          var c = $("#mainchart");
          if (!c)
            return (
              console.warn("Chart div does not exist.", l), o.html(m), void s()
            );
          var h = c.get(0);
          if (!h)
            return (
              console.warn("Canvas does not exist.", l), o.html(m), void s()
            );
          if (!h.getContext)
            return (
              console.warn("Canvas does not have a getContext property.", l),
              o.html(m),
              void s()
            );
          var u = h.getContext("2d"),
            d = {
              labels: (function (a) {
                for (
                  var e = [], n = 0, r = i.TFR.tempPoints;
                  n < r.length;
                  n++
                ) {
                  var s = r[n];
                  "F" === a
                    ? e.push(t.Mth.round(t.Conv.c2f(s), 0) + "°F")
                    : e.push(t.Mth.round(s, 0) + "°C");
                }
                return e;
              })(n),
              datasets: (function (t) {
                for (var i = [], a = 0, e = t; a < e.length; a++) {
                  var n = e[a];
                  0 === n.wireType() &&
                    i.push({
                      label: n.nm(),
                      fillColor: "rgba(220,220,220,0.2)",
                      strokeColor: "rgba(220,220,220,1)",
                      pointColor: "rgba(220,220,220,1)",
                      pointStrokeColor: "#fff",
                      pointHighlightFill: "#fff",
                      pointHighlightStroke: "rgba(220,220,220,1)",
                      data: n.resFactorsNormalized(),
                    });
                }
                return (
                  i.push({
                    label: "Result",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(0,0,0,1)",
                    pointColor: "rgba(0,0,0,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: t[0].resFactorsNormalized(),
                  }),
                  i
                );
              })(r),
            };
          new Chart(u)
            .Line(d, {
              bezierCurve: !1,
              animation: !1,
              responsive: !0,
              maintainAspectRatio: !1,
              showTooltips: !1,
              legendTemplate:
                '<ul class="<%=name.toLowerCase()%>-legend"><% for (let i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
              scaleOverride: !0,
              scaleSteps: 4,
              scaleStepWidth: 1,
              scaleStartValue: 0,
            })
            .generateLegend();
        }
      });
  })(SE || (SE = {})),
  (function (t) {
    var i, a;
    (i = t.WireWiz || (t.WireWiz = {})),
      ((a = i.TfrEquiv || (i.TfrEquiv = {})).init = function (i, e) {
        var n = {
          c: 210,
          f: 410,
          matvalg: "ni200",
        };
        return (
          $("#tfrequivmat").html(
            (function (t) {
              for (var a = [], e = 0, n = i; e < n.length; e++) {
                var r = n[e];
                r.tfr &&
                  -1 === ["ka1", "ka", "kd", "n60", "n80"].indexOf(r.id) &&
                  a.push(
                    '<option value="' +
                      r.id +
                      '"' +
                      (r.id === t.matvalg ? ' selected="selected"' : "") +
                      ">" +
                      r.nm +
                      "</option>"
                  );
              }
              return a.join("");
            })(n)
          ),
          $("#tfrequivc").change(function (i) {
            (n.c = parseFloat($(i.delegateTarget).val())),
              (n.f = t.Conv.c2f(n.c)),
              $("#tfrequivf").val(t.Mth.round(n.f, 0)),
              a.regn(n, e);
          }),
          $("#tfrequivf").change(function (i) {
            (n.f = parseFloat($(i.delegateTarget).val())),
              (n.c = t.Conv.f2c(n.f)),
              $("#tfrequivc").val(t.Mth.round(n.c, 0)),
              a.regn(n, e);
          }),
          $("#tfrequivmat").change(function (t) {
            (n.matvalg = $(t.delegateTarget).val()), a.regn(n, e);
          }),
          a.regn(n, e),
          n
        );
      }),
      (a.regn = function (a, e) {
        a.mat = t.Data.Mat.findMat(a.matvalg);
        for (var n = [], r = 0; r < i.TFR.tempPoints.length; r++)
          n.push([i.TFR.tempPoints[r], e[0].resFactorsNormalized()[r]]);
        var s = i.TFR.tfrFactor(n, a.c),
          o = $("#tfrfactorattemp");
        if (
          (o
            .html(t.Mth.round(s, 5))
            .removeClass("label-danger label-warning label-info label-success"),
          s < 1.1
            ? o.addClass("label-danger")
            : s < 1.6
            ? o.addClass("label-warning")
            : s < 1.8
            ? o.addClass("label-info")
            : o.addClass("label-success"),
          s > 1.1)
        ) {
          var m = i.TFR.tfrInverse(a.mat.tfr, s);
          $("#tfradjustmat").html(a.mat.nm),
            $("#tfradjustc").html(t.Mth.round(m, -1)),
            $("#tfradjustf").html(t.Mth.round(t.Conv.c2f(m), -1)),
            $("#tfrequivres").show();
        } else $("#tfrequivres").hide();
      });
  })(SE || (SE = {})),
  (function (t) {
    var i, a, e, n;
    (i = t.WireWiz || (t.WireWiz = {})),
      (a = "wirewiz"),
      (e = function (t) {
        return t ? "x" : "";
      }),
      (n = (function () {
        function n(t) {
          (this.tempscale = "C"),
            (this.tfrequivInited = !1),
            (this.coil = {
              innerdia: 2,
              wraps: 8,
              wrapspacing: 0.05,
              leglength: 5,
            }),
            (this.mats = t.mats),
            (this.templates = t.templates),
            (this.$wb = $("#workbench")),
            this.bindStaticInputs(),
            this.$wb.html('<div class="slot"></div>'),
            this.writeSlot(this.$wb.find(".slot")),
            this.updateSlot(this.$wb.find(".slot"), 0),
            this.calc(),
            this.showInfo(),
            this.regnTfrEquiv(this.tfrequiv),
            this.$wb.find(".slot").addClass("finalslot").removeClass("subslot"),
            this.bindWorkbenchInputs();
        }
        return (
          (n.prototype.regnTfrEquiv = function (t) {
            this.tfrequiv && i.TfrEquiv.regn(t, this.wires);
          }),
          (n.prototype.updateTfrChart = function (t) {
            void 0 === t && (t = 0),
              i.TfrChart.update(t, this.tempscale, this.wires);
          }),
          (n.prototype.updateTfrTable = function () {
            var a;
            if (this.wires[0].resFactorsNormalized.length > 0) {
              a = {
                data: e(!0),
                c: [],
                f: [],
                tfr: [],
              };
              for (var n = 0; n < i.TFR.tempPoints.length; n++)
                a.c.push(t.Mth.round(i.TFR.tempPoints[n], 0)),
                  a.f.push(t.Mth.round(t.Conv.c2f(i.TFR.tempPoints[n]), 0)),
                  a.tfr.push(
                    t.Mth.round(this.wires[0].resFactorsNormalized()[n], 5)
                  );
            }
            $("#tfrtable").html(this.templates.tfr.table(a));
          }),
          (n.prototype.makeDna200Link = function (i) {
            var a = t.WireWiz.DnaTxt.init(this.wires, i);
            $("#tfrdna200 .downloadlink").html(a.html),
              $("#tfrdna200 textarea").val(a.txt);
          }),
          (n.prototype.initTfrEquiv = function (t) {
            this.tfrequiv = i.TfrEquiv.init(t, this.wires);
          }),
          (n.prototype.read = function (a) {
            var e = this;
            a.find(".slot").each(function (a, n) {
              var r = $(n),
                s = r.find(".subslots:first").children(".slot");
              s.length > 2
                ? s.find("a.closeslot").show()
                : s.find("a.closeslot").hide(),
                r.attr("data-id", a);
              var o = new i.Wire({
                wireType: parseInt(r.find("select.typ").val(), 10),
                id: a,
                parent: parseInt(r.parents(".slot:first").attr("data-id"), 10),
                nm: void 0,
                mat: t.Data.Mat.findMat(r.find(".mat:first").val()),
                resFactorsNormalized: void 0,
              });
              o.readFromSlot(r), e.wires.push(o);
            });
          }),
          (n.prototype.writeSlot = function (t) {
            var i = parseInt(
              t.parents(".slot:first").find("select:first").val(),
              10
            );
            t.html(
              this.templates.slot.leftpart({
                showRemove: e(1 === i),
                showParallel: e(2 !== i && 1 !== i),
                single: 0,
                parallel: 1,
                twisted: 2,
                clapton: 3,
                staggeredclapton: 4,
              })
            ).addClass("subslot");
          }),
          (n.prototype.updateSlot = function (t, i) {
            t.removeClass("wire"), t.find("a.closeslot").hide();
            var a = t.find(".slottypoptions"),
              e = t.find(".subslots");
            if (1 === i || 2 === i || 3 === i || 4 === i)
              a.html(""), e.html("");
            else if (0 === i) {
              t.addClass("wire");
              for (
                var n = {
                    round: 0,
                    ribbon: 1,
                    materials: [],
                  },
                  r = 0,
                  s = this.mats;
                r < s.length;
                r++
              ) {
                var o = s[r];
                if ("c" !== o.id) {
                  var m = {
                    id: o.id,
                    nm: o.nm,
                    showStar: !o.tcr && !o.tfr,
                  };
                  n.materials.push(m);
                }
              }
              a.html(this.templates.slot.singl(n)), e.html("");
            } else console.warn("unknown typ", i);
          }),
          (n.prototype.showInfo = function () {
            for (
              var a = function (t) {
                  for (var a = [], e = 0; e < i.TFR.tempPoints.length; e++)
                    a.push([i.TFR.tempPoints[e], t[e]]);
                  return (
                    (i.TFR.tfrFactor(a, 300) - i.TFR.tfrFactor(a, 20)) / 280
                  );
                },
                n = 0;
              n < this.wires.length;
              n++
            ) {
              var r = this.wires[n],
                s = r.resFactorsNormalized() || [];
              0 === n &&
                0 === s.length &&
                ($("#tcresults").hide(), $("#notcresults").show());
              var o = $('.slot[data-id="' + r.id() + '"]').find(
                  ".slotinfo:first"
                ),
                m = {
                  mainslot: e(0 === r.id()),
                  singleoutput: e(0 === r.wireType()),
                  res: t.Mth.round(r.res(), 3),
                  rstv: t.Mth.round(r.rstv()),
                  heatfluxperwatt: t.Mth.round(
                    (r.ampsPercent() / r.surfaceArea()) * 1e3
                  ),
                  hc: t.Mth.round(r.hc()),
                  powerdissipated: t.Mth.round(100 * r.ampsPercent()),
                  length: t.Mth.round(r.len()),
                  surface: t.Mth.round(r.surfaceArea()),
                  xarea: t.Mth.round(r.xArea()),
                  volume: t.Mth.round(r.volume()),
                  mass: t.Mth.round(r.mass()),
                  dens: t.Mth.round(r.dens()),
                };
              s.length > 0 &&
                ((m.tcrsensitivity = t.Mth.round(1e6 * a(s), 0)),
                (m.tcprecision = t.Mth.round(1e6 * a(s) * r.res(), 0))),
                r.ampsPerVolt() > 1
                  ? ((m.superamp = e(!0)),
                    (m.ampspervolt = t.Mth.round(r.ampsPerVolt())))
                  : (m.milliampspervolt = t.Mth.round(1e3 * r.ampsPerVolt())),
                0 === r.profile()
                  ? ((m.profileround = e(!0)), (m.dia = t.Mth.round(r.dia())))
                  : ((m.width = t.Mth.round(r.width())),
                    (m.thick = t.Mth.round(r.thick()))),
                o.html(this.templates.slot.info(m));
            }
          }),
          (n.prototype.findCoilLength = function () {
            var t = this.coil;
            (t.outerdia = t.innerdia + 2 * this.wires[0].thick()),
              (t.circum = t.outerdia * Math.PI),
              (t.wrapwidth = this.wires[0].width() + t.wrapspacing),
              (t.wraplength = Math.sqrt(
                t.wrapwidth * t.wrapwidth + t.circum * t.circum
              )),
              (t.coillength = t.wraplength * t.wraps + t.leglength);
          }),
          (n.prototype.calc = function () {
            (this.wires = []), this.read(this.$wb);
            var t = new i.WWCalc(this.wires);
            t.calcThickness(),
              this.findCoilLength(),
              (this.totalLength = this.coil.coillength),
              this.wires[0].len(this.totalLength),
              t.calcLenghts(),
              t.calcPhysicalProps(),
              t.ampsPercent(),
              $("#notcresults").hide(),
              $("#tcresults").show(),
              $("#tfrchart").is(":visible")
                ? this.updateTfrChart()
                : $("#tfrtable").is(":visible")
                ? this.updateTfrTable()
                : $("#tfrdna200").is(":visible") && this.makeDna200Link(0);
          }),
          (n.prototype.bindStaticInputs = function () {
            var e = this;
            $("#showsuboutput").click(function (i) {
              e.$wb.toggleClass("hidesuboutputs"),
                t.Ga.gad(
                  a,
                  "showsuboutput",
                  $(i.delegateTarget).is(":checked")
                );
            }),
              $("#innerdia").change(function (t) {
                (e.coil.innerdia = parseFloat($(t.delegateTarget).val())),
                  e.calc(),
                  e.showInfo(),
                  e.regnTfrEquiv(e.tfrequiv);
              }),
              $("#wraps").change(function (t) {
                (e.coil.wraps = parseFloat($(t.delegateTarget).val())),
                  e.calc(),
                  e.showInfo(),
                  e.regnTfrEquiv(e.tfrequiv);
              }),
              $("#wrapspacing").change(function (t) {
                (e.coil.wrapspacing = parseFloat($(t.delegateTarget).val())),
                  e.calc(),
                  e.showInfo(),
                  e.regnTfrEquiv(e.tfrequiv);
              }),
              $("#leglength").change(function (t) {
                (e.coil.leglength = parseFloat($(t.delegateTarget).val())),
                  e.calc(),
                  e.showInfo(),
                  e.regnTfrEquiv(e.tfrequiv);
              }),
              $("#showtfrmain").click(function (t) {
                $("#tfrinfo .tab-pane").hide(),
                  $("#temppointsdiv")
                    .show()
                    .find("input")
                    .val(i.TFR.tempPoints.toString()),
                  $("#tfrmain").show(),
                  $("#tfrinfo li.active").removeClass("active"),
                  $(t.delegateTarget).parents("li:first").addClass("active"),
                  $("#usetemppoints").removeClass("btn-success");
              }),
              $("#showtfrchart").click(function (t) {
                $("#tfrinfo .tab-pane").hide(),
                  $("#tfrchart").show(),
                  e.updateTfrChart(),
                  $("#tfrinfo li.active").removeClass("active"),
                  $(t.delegateTarget).parents("li:first").addClass("active");
              }),
              $("#showtfrtable").click(function (t) {
                $("#tfrinfo .tab-pane").hide(),
                  $("#tfrtable").show(),
                  e.updateTfrTable(),
                  $("#tfrinfo li.active").removeClass("active"),
                  $(t.delegateTarget).parents("li:first").addClass("active");
              }),
              $("#showtfrequiv").click(function (t) {
                $("#tfrinfo .tab-pane").hide(),
                  $("#tfrequiv").show(),
                  e.tfrequivInited ||
                    (e.initTfrEquiv(e.mats), (e.tfrequivInited = !0)),
                  $("#tfrinfo li.active").removeClass("active"),
                  $(t.delegateTarget).parents("li:first").addClass("active");
              }),
              $("#showtfrdna200").click(function (t) {
                $("#tfrinfo .tab-pane").hide(),
                  $("#tfrdna200").show(),
                  e.makeDna200Link(0),
                  $("#tfrinfo li.active").removeClass("active"),
                  $(t.delegateTarget).parents("li:first").addClass("active");
              }),
              $("#tempscales input").change(function (t) {
                (e.tempscale = $(t.delegateTarget).attr("data-tempscale")),
                  e.calc(),
                  e.showInfo(),
                  e.regnTfrEquiv(e.tfrequiv);
              });
          }),
          (n.prototype.bindWorkbenchInputs = function () {
            var e = this;
            this.$wb.on("change", ".typ", function (i) {
              var n = $(i.currentTarget),
                r = n.parents(".slot").filter(":first"),
                s = parseInt(n.val(), 10);
              e.updateSlot(r, s);
              var o,
                m = r.find(".subslots");
              m.html(
                2 === (o = s)
                  ? e.templates.slot.twist({})
                  : 1 === o
                  ? e.templates.slot.paral({})
                  : 3 === o
                  ? e.templates.slot.clapt({})
                  : 4 === o
                  ? e.templates.slot.staggclapt({})
                  : void 0
              ),
                e.writeSlot(r.find(".slot")),
                e.updateSlot(r.find(".slot"), 0),
                e.calc(),
                e.showInfo(),
                e.regnTfrEquiv(e.tfrequiv),
                m.find(".showadvancedslothead:first").click(function (t) {
                  $(t.delegateTarget).toggleClass("active"),
                    m.find(".advancedslothead:first").slideToggle();
                }),
                t.Ga.gad(a, "typ", s);
            }),
              this.$wb.on("click", ".addwire", function (i) {
                var n = $(i.currentTarget),
                  r = n.parents(".subslots").filter(":first");
                n.before('<div class="slot"></div>');
                var s = r.find(".slot:last");
                e.writeSlot(s),
                  e.updateSlot(s, 0),
                  e.calc(),
                  e.showInfo(),
                  e.regnTfrEquiv(e.tfrequiv),
                  t.Ga.gad(a, "addwire");
              }),
              this.$wb.on("change", ".wireprofile", function (i) {
                var e = $(i.currentTarget),
                  n = e.parents(".slot:first"),
                  r = n.find(".ribbon:first"),
                  s = n.find(".round:first");
                0 === parseInt(e.val(), 10)
                  ? (r.hide(), s.show())
                  : 1 === parseInt(e.val(), 10)
                  ? (s.hide(), r.show())
                  : console.warn("unknown profile", e.val()),
                  t.Ga.gad(a, "wireprofile", e.val());
              }),
              this.$wb.on("change", "input, select", function (i) {
                var a = $(i.currentTarget);
                a.hasClass("awg")
                  ? a
                      .parents(".slot:first")
                      .find(".dia:first")
                      .val(t.Mth.round(t.Conv.awg2mm(parseInt(a.val(), 10)), 3))
                  : a.hasClass("dia") &&
                    a.parents(".slot:first").find(".awg:first").val(""),
                  e.calc(),
                  e.showInfo(),
                  e.regnTfrEquiv(e.tfrequiv);
              }),
              this.$wb.on("click", "a.closeslot", function (i) {
                $(i.currentTarget).parents(".slot:first").remove(),
                  e.calc(),
                  e.showInfo(),
                  e.regnTfrEquiv(e.tfrequiv),
                  t.Ga.gad(a, "closeslot");
              }),
              $("#temppointsdiv").on("click", "#usetemppoints", function (t) {
                (i.TFR.tempPoints = $("#temppointsdiv input")
                  .val()
                  .split(",")
                  .map(Number)),
                  e.calc(),
                  e.showInfo(),
                  e.regnTfrEquiv(e.tfrequiv),
                  $(t.currentTarget).addClass("btn-success");
              });
          }),
          n
        );
      })()),
      (i.init = function () {
        var i = "#template-slot-",
          e = {
            slot: {
              singl: Handlebars.compile($(i + "singl").html()),
              twist: Handlebars.compile($(i + "twist").html()),
              paral: Handlebars.compile($(i + "paral").html()),
              clapt: Handlebars.compile($(i + "clapt").html()),
              staggclapt: Handlebars.compile($(i + "staggclapt").html()),
              leftpart: Handlebars.compile($(i + "leftpart").html()),
              info: Handlebars.compile($(i + "info").html()),
            },
            tfr: {
              table: Handlebars.compile($("#template-tfr-table").html()),
            },
          };
        new n({
          mats: t.Data.Mat.mats,
          templates: e,
        }),
          t.Ga.gad(a, "pageload");
      });
  })(SE || (SE = {})),
  (function (t) {
    var i, a, e;
    (i = t.Themes || (t.Themes = {})),
      (a = "customcss"),
      (e = (function () {
        function t() {}
        return (
          (t.prototype.loadCSS = function () {
            var t = $("head");
            return (
              t.find("link." + a).remove(),
              this.theme
                ? (t.append(
                    '<link rel="stylesheet" type="text/css" href="' +
                      this.theme.url +
                      '" class="' +
                      a +
                      '">'
                  ),
                  $("body").removeClass("defaulttheme").addClass("customtheme"))
                : $("body").removeClass("customtheme").addClass("defaulttheme"),
              this
            );
          }),
          (t.prototype.loadSetting = function () {
            var t = localStorage.getItem(a);
            return (this.theme = t ? $.parseJSON(t) : void 0), this;
          }),
          (t.prototype.saveSetting = function (t) {
            return (
              (this.theme = t),
              t
                ? localStorage.setItem(a, JSON.stringify(t))
                : localStorage.removeItem(a),
              this
            );
          }),
          t
        );
      })()),
      (i.Themes = e);
  })(SE || (SE = {})),
  (function (t) {
    var i;
    ((i = t.Mth || (t.Mth = {})).round = function (t, i) {
      return (
        void 0 === i && (i = 2),
        i < 1 ? Math.round(t || 0).toString() : (t || 0).toFixed(i)
      );
    }),
      (i.dround = function (t, a) {
        return (
          void 0 === a && (a = 0),
          a < -1 && (a = -1),
          t < 1
            ? i.round(t, 3 + a)
            : t < 10
            ? i.round(t, 2 + a)
            : t < 100
            ? i.round(t, 1 + a)
            : i.round(t, a)
        );
      }),
      (i.paRes = function (t) {
        if (0 === t.length) return 1 / 0;
        for (var i = 0, a = 0, e = t; a < e.length; a++) {
          var n = e[a];
          if (0 === n) return 0;
          i += 1 / n;
        }
        return 1 / i;
      }),
      (i.map = function (t, i, a, e, n) {
        return (
          void 0 === e && (e = 0),
          void 0 === n && (n = 1),
          ((t - i) * (n - e)) / (a - i) + e
        );
      }),
      (i.constrain = function (t, i, a) {
        return (
          void 0 === i && (i = 0),
          void 0 === a && (a = 1),
          t < i ? i : t > a ? a : t
        );
      }),
      (i.isEven = function (t) {
        return t % 2 == 0;
      });
  })(SE || (SE = {})),
  (function (t) {
    "use strict";
    var i = !1,
      a = (function () {
        return function () {
          var t = this;
          (this.ga = function (t, i, a, e, n) {
            ga(t, i, a, e, n);
          }),
            (this.gad = function (i, a, e) {
              clearTimeout(t.timeout),
                (t.timeout = setTimeout(function () {
                  t.ga("send", "event", i, a, e);
                }, 2001));
            });
        };
      })();
    (t.Ga = new a()),
      (t.scaffold = new t.Global.Scaffold($("body"))),
      (t.init = function () {
        if (i) console.warn("already loaded");
        else {
          switch (
            ((i = !0),
            t.Global.init(),
            (t.scaffold.reklame = new t.Reklame.Page(t.scaffold)),
            t.scaffold.pageName())
          ) {
            case "main":
              break;
            case "ohm":
              t.OhmCalc.init();
              break;
            case "coil":
              t.Coil.init();
              break;
            case "batt":
              t.Batt.init();
              break;
            case "modrange":
              t.ModRangeCalc.init();
              break;
            case "juice":
              t.Juice.init();
              break;
            case "wirewiz":
              t.WireWiz.init();
              break;
            case "converter":
              t.Converter.init();
              break;
            case "about":
              new t.About.Page();
              break;
            case "themes":
              new t.Themes.Page();
              break;
            case "customdata":
              new t.Custom.Page();
              break;
            default:
              console.error(
                "SE: pagename [" + t.scaffold.pageName() + "] not valid"
              );
          }
          t.BackTo.init($(".sebackto"));
        }
      });
  })(SE || (SE = {})),
  $(document).ready(function () {
    SE.init();
  });
