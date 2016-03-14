var _;

_ = {
  console: false,
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
    ascii = "\n%cmmm/............................................................./mmm\nmmo................-:://::-.......-:::::::::::::-........-::///:-.omm\nmd-.............:+yhddddddhy+-..../ddddddddddddd+....../shdddddddyodm\nmo.............-hmmmhyyyydmmmh:.../mmmmhhhhhhhhh+....:ydmmdhyyyhddoom\nm-..............-ss:-....-ymmmy.../mmmm---------....:dmmms:-...-:/.-m\nd.........................ymmmy.../mmmm-/+ooo+:-....ymmmy-:+ooo+/-..d\nh.......................:smmmd:.../mmmmhmmmmmmdh+...dmmmshdmmmmmmhs-h\nh.....................:sdmmdy:....:hhdho+//+ymmmm+..dmmmdyo//+sdmmmhh\nd..................-+ydmmdy/.......--:.......smmmh..ymmms......:mmmmm\nm-..............-:shmmmds/-----....:s/--...-:hmmms..:dmmd/-...-ommmmm\nmo..............hmmmmmmhhhhhhhh...+dmmdhyyyhdmmmy-.../hmmmhyyyhmmmdhm\nmd-.............ddddddddddddddd...-+shdddddddhy/-.....-oydddddddho:dm\nmmo.............:::::::::::::::.......-:///::-...........-:///:-..omm\nmmm/............................................................./mmm\n\n:: syntactic sugar by 256\n:: http://256.sh/\n:: " + data.repo;
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

//# sourceMappingURL=data:application/json;base64,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RUFBeUMsS0FBekMsQ0FBVjtFQURDLENBckRIO0VBdURBLElBQUEsRUFBTSxTQUFDLEdBQUQsRUFBTSxHQUFOO0FBQ0osV0FBTyxJQUFJLENBQUMsS0FBTCxDQUFXLElBQUksQ0FBQyxNQUFMLENBQUEsQ0FBQSxHQUFnQixHQUEzQixDQUFBLEdBQWtDO0VBRHJDLENBdkROO0VBMERBLEdBQUEsRUFBSyxTQUFBO0FBQ0gsUUFBQTtJQUFBLEtBQUEsR0FBUSwyaENBQUEsR0FtQkQsSUFBSSxDQUFDO1dBR1osT0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CLDZDQUFuQjtFQXZCRyxDQTFETDtFQW1GQSxNQUFBLEVBQVEsU0FBQTtJQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBUCxHQUFxQixNQUFNLENBQUMsV0FBN0IsQ0FBQSxHQUE0QyxHQUFoRDtNQUNFLENBQUMsQ0FBQyxHQUFGLENBQUE7YUFDQSxhQUFBLENBQWMsQ0FBQyxDQUFDLE9BQWhCLEVBRkY7O0VBRE0sQ0FuRlI7OztBQXdGRixDQUFDLENBQUMsT0FBRixHQUFZLFdBQUEsQ0FBWSxDQUFDLENBQUMsTUFBZCxFQUFzQixHQUF0QiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiXyA9XG5cbiAgY29uc29sZTogZmFsc2VcblxuICBvZmY6IChlbCkgLT5cbiAgICBpID0gMFxuICAgIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcblxuICAgIHdoaWxlIGkgaXNudCBsZW5cbiAgICAgIGlmIGFyZ3VtZW50c1tpXSBpbnN0YW5jZW9mIGpRdWVyeVxuICAgICAgICBhcmd1bWVudHNbaV0ucmVtb3ZlQ2xhc3MoXCJvblwiKS5hZGRDbGFzcyBcIm9mZlwiXG4gICAgICBlbHNlXG4gICAgICAgICQoYXJndW1lbnRzW2ldKS5yZW1vdmVDbGFzcyhcIm9uXCIpLmFkZENsYXNzIFwib2ZmXCJcbiAgICAgIGkrK1xuICAgIHJldHVyblxuXG4gIG9uOiAoZWwpIC0+XG4gICAgaSA9IDBcbiAgICBsZW4gPSBhcmd1bWVudHMubGVuZ3RoXG5cbiAgICB3aGlsZSBpIGlzbnQgbGVuXG4gICAgICBpZiBhcmd1bWVudHNbaV0gaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgICAgYXJndW1lbnRzW2ldLnJlbW92ZUNsYXNzKFwib2ZmXCIpLmFkZENsYXNzIFwib25cIlxuICAgICAgZWxzZVxuICAgICAgICAkKGFyZ3VtZW50c1tpXSkucmVtb3ZlQ2xhc3MoXCJvZmZcIikuYWRkQ2xhc3MgXCJvblwiXG4gICAgICBpKytcbiAgICByZXR1cm5cblxuICBzd2FwOiAoZWwpIC0+XG4gICAgaSA9IDBcbiAgICBsZW4gPSBhcmd1bWVudHMubGVuZ3RoXG5cbiAgICB3aGlsZSBpIGlzbnQgbGVuXG4gICAgICBpZiBhcmd1bWVudHNbaV0gaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgICAgaWYgYXJndW1lbnRzW2ldLmhhc0NsYXNzICdvZmYnXG4gICAgICAgICAgXy5vbiBhcmd1bWVudHNbaV1cbiAgICAgICAgZWxzZVxuICAgICAgICAgIF8ub2ZmIGFyZ3VtZW50c1tpXVxuICAgICAgZWxzZVxuICAgICAgICBpZiAkKGFyZ3VtZW50c1tpXSkuaGFzQ2xhc3MgJ29mZidcbiAgICAgICAgICBfLm9uICQoYXJndW1lbnRzW2ldKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgXy5vZmYgJChhcmd1bWVudHNbaV0pXG4gICAgICBpKytcbiAgICByZXR1cm5cblxuICBlbmNvZGU6IChzdHIpIC0+XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpXG4gICAgICAucmVwbGFjZSgvIS9nLCAnJTIxJylcbiAgICAgIC5yZXBsYWNlKC8nL2csICclMjcnKVxuICAgICAgLnJlcGxhY2UoL1xcKC9nLCAnJTI4JylcbiAgICAgIC5yZXBsYWNlKC9cXCkvZywgJyUyOScpXG4gICAgICAucmVwbGFjZSgvXFwqL2csICclMkEnKVxuICAgICAgLnJlcGxhY2UoLyUyMC9nLCAnKycpXG5cbiAgdDogKGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZSkgLT5cbiAgICBfZ2FxLnB1c2ggWydfdHJhY2tFdmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZV1cbiAgcmFuZDogKG1pbiwgbWF4KSAtPlxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpICsgbWluXG5cbiAgbGxjOiAtPlxuICAgIGFzY2lpID0gXCJcIlwiXG4gICAgICBcbiAgICAgICVjbW1tLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4vbW1tXG4gICAgICBtbW8uLi4uLi4uLi4uLi4uLi4uLTo6Ly86Oi0uLi4uLi4uLTo6Ojo6Ojo6Ojo6OjotLi4uLi4uLi4tOjovLy86LS5vbW1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi46K3loZGRkZGRkaHkrLS4uLi4vZGRkZGRkZGRkZGRkZCsuLi4uLi4vc2hkZGRkZGRkeW9kbVxuICAgICAgbW8uLi4uLi4uLi4uLi4uLWhtbW1oeXl5eWRtbW1oOi4uLi9tbW1taGhoaGhoaGhoKy4uLi46eWRtbWRoeXl5aGRkb29tXG4gICAgICBtLS4uLi4uLi4uLi4uLi4uLXNzOi0uLi4uLXltbW15Li4uL21tbW0tLS0tLS0tLS0uLi4uOmRtbW1zOi0uLi4tOi8uLW1cbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4ueW1tbXkuLi4vbW1tbS0vK29vbys6LS4uLi55bW1teS06K29vbysvLS4uZFxuICAgICAgaC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNtbW1kOi4uLi9tbW1taG1tbW1tbWRoKy4uLmRtbW1zaGRtbW1tbW1ocy1oXG4gICAgICBoLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNkbW1keTouLi4uOmhoZGhvKy8vK3ltbW1tKy4uZG1tbWR5by8vK3NkbW1taGhcbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4tK3lkbW1keS8uLi4uLi4uLS06Li4uLi4uLnNtbW1oLi55bW1tcy4uLi4uLjptbW1tbVxuICAgICAgbS0uLi4uLi4uLi4uLi4uLi06c2htbW1kcy8tLS0tLS4uLi46cy8tLS4uLi06aG1tbXMuLjpkbW1kLy0uLi4tb21tbW1tXG4gICAgICBtby4uLi4uLi4uLi4uLi4uaG1tbW1tbWhoaGhoaGhoLi4uK2RtbWRoeXl5aGRtbW15LS4uLi9obW1taHl5eWhtbW1kaG1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi5kZGRkZGRkZGRkZGRkZGQuLi4tK3NoZGRkZGRkZGh5Ly0uLi4uLi1veWRkZGRkZGRobzpkbVxuICAgICAgbW1vLi4uLi4uLi4uLi4uLjo6Ojo6Ojo6Ojo6Ojo6Oi4uLi4uLi4tOi8vLzo6LS4uLi4uLi4uLi4uLTovLy86LS4ub21tXG4gICAgICBtbW0vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9tbW1cblxuICAgICAgOjogc3ludGFjdGljIHN1Z2FyIGJ5IDI1NlxuICAgICAgOjogaHR0cDovLzI1Ni5zaC9cbiAgICAgIDo6ICN7ZGF0YS5yZXBvfVxuICAgIFwiXCJcIlxuXG4gICAgY29uc29sZS5sb2cgYXNjaWksIFwiY29sb3I6IGdyZXk7IGZvbnQtZmFtaWx5OiBNZW5sbywgbW9ub3NwYWNlO1wiXG5cbiAgZGV0ZWN0OiAtPlxuICAgIGlmICgod2luZG93Lm91dGVySGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSA+IDEwMClcbiAgICAgIF8ubGxjKClcbiAgICAgIGNsZWFySW50ZXJ2YWwgXy5jb25zb2xlXG5cbl8uY29uc29sZSA9IHNldEludGVydmFsIF8uZGV0ZWN0LCAyMDBcblxuIl19
