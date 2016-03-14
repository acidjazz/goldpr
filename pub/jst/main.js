var _;

_ = {
  console: false,
  repo: 'http://www.github.com/acidjazz/goldpr',
  off: function(el) {
    var i, len;
    i = 0;
    len = arguments.length;
    while (i !== len) {
      if (arguments[i] instanceof jQuery) {
        arguments[i].removeClass("on").addClass("off");
      } else {
        $(arguments[i]).removeClass("on").addClass("off");
      }
      i++;
    }
  },
  on: function(el) {
    var i, len;
    i = 0;
    len = arguments.length;
    while (i !== len) {
      if (arguments[i] instanceof jQuery) {
        arguments[i].removeClass("off").addClass("on");
      } else {
        $(arguments[i]).removeClass("off").addClass("on");
      }
      i++;
    }
  },
  swap: function(el) {
    var i, len;
    i = 0;
    len = arguments.length;
    while (i !== len) {
      if (arguments[i] instanceof jQuery) {
        if (arguments[i].hasClass('off')) {
          _.on(arguments[i]);
        } else {
          _.off(arguments[i]);
        }
      } else {
        if ($(arguments[i]).hasClass('off')) {
          _.on($(arguments[i]));
        } else {
          _.off($(arguments[i]));
        }
      }
      i++;
    }
  },
  encode: function(str) {
    return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
  },
  t: function(category, action, label, value) {
    return _gaq.push(['_trackEvent', category, action, label, value]);
  },
  rand: function(min, max) {
    return Math.floor(Math.random() * max) + min;
  },
  llc: function() {
    var ascii;
    ascii = "\n%cmmm/............................................................./mmm\nmmo................-:://::-.......-:::::::::::::-........-::///:-.omm\nmd-.............:+yhddddddhy+-..../ddddddddddddd+....../shdddddddyodm\nmo.............-hmmmhyyyydmmmh:.../mmmmhhhhhhhhh+....:ydmmdhyyyhddoom\nm-..............-ss:-....-ymmmy.../mmmm---------....:dmmms:-...-:/.-m\nd.........................ymmmy.../mmmm-/+ooo+:-....ymmmy-:+ooo+/-..d\nh.......................:smmmd:.../mmmmhmmmmmmdh+...dmmmshdmmmmmmhs-h\nh.....................:sdmmdy:....:hhdho+//+ymmmm+..dmmmdyo//+sdmmmhh\nd..................-+ydmmdy/.......--:.......smmmh..ymmms......:mmmmm\nm-..............-:shmmmds/-----....:s/--...-:hmmms..:dmmd/-...-ommmmm\nmo..............hmmmmmmhhhhhhhh...+dmmdhyyyhdmmmy-.../hmmmhyyyhmmmdhm\nmd-.............ddddddddddddddd...-+shdddddddhy/-.....-oydddddddho:dm\nmmo.............:::::::::::::::.......-:///::-...........-:///:-..omm\nmmm/............................................................./mmm\n\n:: syntactic sugar by 256\n:: http://256.sh/\n:: " + _.repo;
    return console.log(ascii, "color: grey; font-family: Menlo, monospace;");
  },
  detect: function() {
    if ((window.outerHeight - window.innerHeight) > 100) {
      _.llc();
      return clearInterval(_.console);
    }
  }
};

_.console = setInterval(_.detect, 200);

//# sourceMappingURL=data:application/json;base64,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MEIsTUFBMUIsRUFBa0MsS0FBbEMsRUFBeUMsS0FBekMsQ0FBVjtFQURDLENBdERIO0VBd0RBLElBQUEsRUFBTSxTQUFDLEdBQUQsRUFBTSxHQUFOO0FBQ0osV0FBTyxJQUFJLENBQUMsS0FBTCxDQUFXLElBQUksQ0FBQyxNQUFMLENBQUEsQ0FBQSxHQUFnQixHQUEzQixDQUFBLEdBQWtDO0VBRHJDLENBeEROO0VBMkRBLEdBQUEsRUFBSyxTQUFBO0FBQ0gsUUFBQTtJQUFBLEtBQUEsR0FBUSwyaENBQUEsR0FtQkQsQ0FBQyxDQUFDO1dBR1QsT0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CLDZDQUFuQjtFQXZCRyxDQTNETDtFQW9GQSxNQUFBLEVBQVEsU0FBQTtJQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBUCxHQUFxQixNQUFNLENBQUMsV0FBN0IsQ0FBQSxHQUE0QyxHQUFoRDtNQUNFLENBQUMsQ0FBQyxHQUFGLENBQUE7YUFDQSxhQUFBLENBQWMsQ0FBQyxDQUFDLE9BQWhCLEVBRkY7O0VBRE0sQ0FwRlI7OztBQXlGRixDQUFDLENBQUMsT0FBRixHQUFZLFdBQUEsQ0FBWSxDQUFDLENBQUMsTUFBZCxFQUFzQixHQUF0QiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiXyA9XG5cbiAgY29uc29sZTogZmFsc2VcbiAgcmVwbzogJ2h0dHA6Ly93d3cuZ2l0aHViLmNvbS9hY2lkamF6ei9nb2xkcHInXG5cbiAgb2ZmOiAoZWwpIC0+XG4gICAgaSA9IDBcbiAgICBsZW4gPSBhcmd1bWVudHMubGVuZ3RoXG5cbiAgICB3aGlsZSBpIGlzbnQgbGVuXG4gICAgICBpZiBhcmd1bWVudHNbaV0gaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgICAgYXJndW1lbnRzW2ldLnJlbW92ZUNsYXNzKFwib25cIikuYWRkQ2xhc3MgXCJvZmZcIlxuICAgICAgZWxzZVxuICAgICAgICAkKGFyZ3VtZW50c1tpXSkucmVtb3ZlQ2xhc3MoXCJvblwiKS5hZGRDbGFzcyBcIm9mZlwiXG4gICAgICBpKytcbiAgICByZXR1cm5cblxuICBvbjogKGVsKSAtPlxuICAgIGkgPSAwXG4gICAgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxuXG4gICAgd2hpbGUgaSBpc250IGxlblxuICAgICAgaWYgYXJndW1lbnRzW2ldIGluc3RhbmNlb2YgalF1ZXJ5XG4gICAgICAgIGFyZ3VtZW50c1tpXS5yZW1vdmVDbGFzcyhcIm9mZlwiKS5hZGRDbGFzcyBcIm9uXCJcbiAgICAgIGVsc2VcbiAgICAgICAgJChhcmd1bWVudHNbaV0pLnJlbW92ZUNsYXNzKFwib2ZmXCIpLmFkZENsYXNzIFwib25cIlxuICAgICAgaSsrXG4gICAgcmV0dXJuXG5cbiAgc3dhcDogKGVsKSAtPlxuICAgIGkgPSAwXG4gICAgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxuXG4gICAgd2hpbGUgaSBpc250IGxlblxuICAgICAgaWYgYXJndW1lbnRzW2ldIGluc3RhbmNlb2YgalF1ZXJ5XG4gICAgICAgIGlmIGFyZ3VtZW50c1tpXS5oYXNDbGFzcyAnb2ZmJ1xuICAgICAgICAgIF8ub24gYXJndW1lbnRzW2ldXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBfLm9mZiBhcmd1bWVudHNbaV1cbiAgICAgIGVsc2VcbiAgICAgICAgaWYgJChhcmd1bWVudHNbaV0pLmhhc0NsYXNzICdvZmYnXG4gICAgICAgICAgXy5vbiAkKGFyZ3VtZW50c1tpXSlcbiAgICAgICAgZWxzZVxuICAgICAgICAgIF8ub2ZmICQoYXJndW1lbnRzW2ldKVxuICAgICAgaSsrXG4gICAgcmV0dXJuXG5cbiAgZW5jb2RlOiAoc3RyKSAtPlxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKVxuICAgICAgLnJlcGxhY2UoLyEvZywgJyUyMScpXG4gICAgICAucmVwbGFjZSgvJy9nLCAnJTI3JylcbiAgICAgIC5yZXBsYWNlKC9cXCgvZywgJyUyOCcpXG4gICAgICAucmVwbGFjZSgvXFwpL2csICclMjknKVxuICAgICAgLnJlcGxhY2UoL1xcKi9nLCAnJTJBJylcbiAgICAgIC5yZXBsYWNlKC8lMjAvZywgJysnKVxuXG4gIHQ6IChjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgdmFsdWUpIC0+XG4gICAgX2dhcS5wdXNoIFsnX3RyYWNrRXZlbnQnLCBjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgdmFsdWVdXG4gIHJhbmQ6IChtaW4sIG1heCkgLT5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KSArIG1pblxuXG4gIGxsYzogLT5cbiAgICBhc2NpaSA9IFwiXCJcIlxuICAgICAgXG4gICAgICAlY21tbS8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uL21tbVxuICAgICAgbW1vLi4uLi4uLi4uLi4uLi4uLi06Oi8vOjotLi4uLi4uLi06Ojo6Ojo6Ojo6Ojo6LS4uLi4uLi4uLTo6Ly8vOi0ub21tXG4gICAgICBtZC0uLi4uLi4uLi4uLi4uOit5aGRkZGRkZGh5Ky0uLi4uL2RkZGRkZGRkZGRkZGQrLi4uLi4uL3NoZGRkZGRkZHlvZG1cbiAgICAgIG1vLi4uLi4uLi4uLi4uLi1obW1taHl5eXlkbW1taDouLi4vbW1tbWhoaGhoaGhoaCsuLi4uOnlkbW1kaHl5eWhkZG9vbVxuICAgICAgbS0uLi4uLi4uLi4uLi4uLi1zczotLi4uLi15bW1teS4uLi9tbW1tLS0tLS0tLS0tLi4uLjpkbW1tczotLi4uLTovLi1tXG4gICAgICBkLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLnltbW15Li4uL21tbW0tLytvb28rOi0uLi4ueW1tbXktOitvb28rLy0uLmRcbiAgICAgIGguLi4uLi4uLi4uLi4uLi4uLi4uLi4uLjpzbW1tZDouLi4vbW1tbWhtbW1tbW1kaCsuLi5kbW1tc2hkbW1tbW1taHMtaFxuICAgICAgaC4uLi4uLi4uLi4uLi4uLi4uLi4uLjpzZG1tZHk6Li4uLjpoaGRobysvLyt5bW1tbSsuLmRtbW1keW8vLytzZG1tbWhoXG4gICAgICBkLi4uLi4uLi4uLi4uLi4uLi4uLSt5ZG1tZHkvLi4uLi4uLi0tOi4uLi4uLi5zbW1taC4ueW1tbXMuLi4uLi46bW1tbW1cbiAgICAgIG0tLi4uLi4uLi4uLi4uLi4tOnNobW1tZHMvLS0tLS0uLi4uOnMvLS0uLi4tOmhtbW1zLi46ZG1tZC8tLi4uLW9tbW1tbVxuICAgICAgbW8uLi4uLi4uLi4uLi4uLmhtbW1tbW1oaGhoaGhoaC4uLitkbW1kaHl5eWhkbW1teS0uLi4vaG1tbWh5eXlobW1tZGhtXG4gICAgICBtZC0uLi4uLi4uLi4uLi4uZGRkZGRkZGRkZGRkZGRkLi4uLStzaGRkZGRkZGRoeS8tLi4uLi4tb3lkZGRkZGRkaG86ZG1cbiAgICAgIG1tby4uLi4uLi4uLi4uLi46Ojo6Ojo6Ojo6Ojo6OjouLi4uLi4uLTovLy86Oi0uLi4uLi4uLi4uLi06Ly8vOi0uLm9tbVxuICAgICAgbW1tLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4vbW1tXG5cbiAgICAgIDo6IHN5bnRhY3RpYyBzdWdhciBieSAyNTZcbiAgICAgIDo6IGh0dHA6Ly8yNTYuc2gvXG4gICAgICA6OiAje18ucmVwb31cbiAgICBcIlwiXCJcblxuICAgIGNvbnNvbGUubG9nIGFzY2lpLCBcImNvbG9yOiBncmV5OyBmb250LWZhbWlseTogTWVubG8sIG1vbm9zcGFjZTtcIlxuXG4gIGRldGVjdDogLT5cbiAgICBpZiAoKHdpbmRvdy5vdXRlckhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCkgPiAxMDApXG4gICAgICBfLmxsYygpXG4gICAgICBjbGVhckludGVydmFsIF8uY29uc29sZVxuXG5fLmNvbnNvbGUgPSBzZXRJbnRlcnZhbCBfLmRldGVjdCwgMjAwXG5cbiJdfQ==
