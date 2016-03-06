var Index;

Index = {
  vals: [],
  cache: {
    window: window,
    stickied: false
  },
  i: function() {
    Index.cache.window = $(window);
    Index.handlers();
    if (Index.cache.window.width() > 1000) {
      setInterval(Index.header, 20);
    }
    setInterval(Index.check, 10);
    if (location.hash !== '') {
      return _.on(".option_" + (location.hash.replace('#', '')));
    }
  },
  handlers: function() {
    return $('header > .inner > .menu > .option').click(Index.option);
  },
  option: function(e) {
    var hash;
    hash = $(this).html();
    _.off('header > .inner > .menu > .option');
    _.on(".option_" + hash);
    e.preventDefault();
    location.hash = hash;
    return $('html, body').scrollTo("#" + hash, {
      offset: -60
    });
  },
  header: function() {
    var stickySpot;
    stickySpot = 200;
    if (Index.cache.window.scrollTop() > stickySpot && Index.cache.stickied === false) {
      _.on('#sticky');
      Index.cache.stickied = true;
    }
    if (Index.cache.window.scrollTop() < stickySpot && Index.cache.stickied === true) {
      _.off('#sticky');
      return Index.cache.stickied = false;
    }
  },
  check: function() {
    return $('.laxin').each(function(i, el) {
      var diff, jel, perc, ref, ref1, thresh, val;
      if (Index.inViewport(el)) {
        ref = Index.viewable(el), perc = ref[0], diff = ref[1];
        jel = $(el);
        thresh = jel.data('thresh');
        if (thresh === void 0) {
          thresh = 50;
        }
        if (perc > thresh && jel.hasClass('off')) {
          _.on(jel);
        }
        if (perc < thresh && jel.hasClass('on')) {
          _.off(jel);
        }
        if (Index.cache.window.width() > 1000) {
          if (jel.hasClass('laxin_vert')) {
            val = Math.round(diff);
            if (((ref1 = Index.vals) != null ? ref1[i] : void 0) !== val) {
              jel.find('.inner:first').css('transform', "translate3d(0, " + (val * 5) + "px, 0px)");
              jel.find('.overlay').css('transform', "translate3d(0, " + (val * 2) + "px, 0px)");
              jel.find('.overlay > .inner').css('transform', "translate3d(0, " + (val / 5) + "px, 0px)");
              return Index.vals[i] = val;
            }
          }
        }
      }
    });
  },
  inViewport: function(el) {
    var rect;
    rect = el.getBoundingClientRect();
    return (rect.top >= 0 || rect.bottom >= 0) && (rect.top <= window.innerHeight || rect.bottom <= window.innerHeight);
  },
  viewable: function(el) {
    var diff, elMiddle, height, max, nonabs, perc, rect, winMiddle;
    rect = el.getBoundingClientRect();
    height = rect.bottom - rect.top;
    elMiddle = rect.top + height / 2;
    winMiddle = window.innerHeight / 2;
    max = window.innerHeight / 2 + height / 2;
    diff = winMiddle - elMiddle;
    perc = 100 - Math.abs(diff) * 100 / max;
    nonabs = Math.abs(diff) * 100 / max;
    if (diff < 0) {
      nonabs = -nonabs;
    }
    return [perc, nonabs];
  }
};

//# sourceMappingURL=data:application/json;base64,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QUwsSUFBWSxNQUFNLENBQUMsV0FBbkIsSUFBa0MsSUFBSSxDQUFDLE1BQUwsSUFBZSxNQUFNLENBQUMsV0FBekQ7RUFOUSxDQXpFWjtFQWtGQSxRQUFBLEVBQVUsU0FBQyxFQUFEO0FBQ1IsUUFBQTtJQUFBLElBQUEsR0FBTyxFQUFFLENBQUMscUJBQUgsQ0FBQTtJQUNQLE1BQUEsR0FBUyxJQUFJLENBQUMsTUFBTCxHQUFZLElBQUksQ0FBQztJQUUxQixRQUFBLEdBQVcsSUFBSSxDQUFDLEdBQUwsR0FBVyxNQUFBLEdBQU87SUFDN0IsU0FBQSxHQUFZLE1BQU0sQ0FBQyxXQUFQLEdBQW1CO0lBQy9CLEdBQUEsR0FBTSxNQUFNLENBQUMsV0FBUCxHQUFtQixDQUFuQixHQUF1QixNQUFBLEdBQU87SUFDcEMsSUFBQSxHQUFPLFNBQUEsR0FBVTtJQUNqQixJQUFBLEdBQU8sR0FBQSxHQUFNLElBQUksQ0FBQyxHQUFMLENBQVMsSUFBVCxDQUFBLEdBQWUsR0FBZixHQUFtQjtJQUNoQyxNQUFBLEdBQVMsSUFBSSxDQUFDLEdBQUwsQ0FBUyxJQUFULENBQUEsR0FBZSxHQUFmLEdBQW1CO0lBQzVCLElBQW9CLElBQUEsR0FBTyxDQUEzQjtNQUFBLE1BQUEsR0FBUyxDQUFDLE9BQVY7O0FBRUEsV0FBTyxDQUFDLElBQUQsRUFBTyxNQUFQO0VBWkMsQ0FsRlYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJJbmRleCA9XG5cbiAgdmFsczogW11cbiAgY2FjaGU6XG4gICAgd2luZG93OiB3aW5kb3dcbiAgICBzdGlja2llZDogZmFsc2VcblxuICBpOiAtPlxuXG4gICAgSW5kZXguY2FjaGUud2luZG93ID0gJCh3aW5kb3cpXG5cbiAgICBJbmRleC5oYW5kbGVycygpXG5cbiAgICBpZiBJbmRleC5jYWNoZS53aW5kb3cud2lkdGgoKSA+IDEwMDBcbiAgICAgIHNldEludGVydmFsIEluZGV4LmhlYWRlciwgMjBcblxuICAgIHNldEludGVydmFsIEluZGV4LmNoZWNrLCAxMFxuXG4gICAgaWYgbG9jYXRpb24uaGFzaCBpc250ICcnXG4gICAgICBfLm9uIFwiLm9wdGlvbl8je2xvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsJycpfVwiXG5cblxuICBoYW5kbGVyczogLT5cblxuICAgICQoJ2hlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gLm9wdGlvbicpLmNsaWNrIEluZGV4Lm9wdGlvblxuXG5cbiAgb3B0aW9uOihlKSAtPlxuICAgIGhhc2ggPSAkKHRoaXMpLmh0bWwoKVxuICAgIF8ub2ZmICdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IC5vcHRpb24nXG4gICAgXy5vbiBcIi5vcHRpb25fI3toYXNofVwiXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbG9jYXRpb24uaGFzaCA9IGhhc2hcbiAgICAkKCdodG1sLCBib2R5Jykuc2Nyb2xsVG8gXCIjI3toYXNofVwiLFxuICAgICAgb2Zmc2V0OiAtNjBcblxuICBoZWFkZXI6IC0+XG5cbiAgICBzdGlja3lTcG90ID0gMjAwXG5cbiAgICBpZiBJbmRleC5jYWNoZS53aW5kb3cuc2Nyb2xsVG9wKCkgPiBzdGlja3lTcG90IGFuZCBJbmRleC5jYWNoZS5zdGlja2llZCBpcyBmYWxzZVxuICAgICAgXy5vbiAnI3N0aWNreSdcbiAgICAgIEluZGV4LmNhY2hlLnN0aWNraWVkID0gdHJ1ZVxuXG4gICAgaWYgSW5kZXguY2FjaGUud2luZG93LnNjcm9sbFRvcCgpIDwgc3RpY2t5U3BvdCBhbmQgSW5kZXguY2FjaGUuc3RpY2tpZWQgaXMgdHJ1ZVxuICAgICAgXy5vZmYgJyNzdGlja3knXG4gICAgICBJbmRleC5jYWNoZS5zdGlja2llZCA9IG9mZlxuXG4gIGNoZWNrOiAtPlxuXG5cbiAgICAkKCcubGF4aW4nKS5lYWNoIChpLCBlbCkgLT5cblxuICAgICAgaWYgSW5kZXguaW5WaWV3cG9ydCBlbFxuICAgICAgICBbcGVyYywgZGlmZl0gPSBJbmRleC52aWV3YWJsZSBlbFxuICAgICAgICBqZWwgPSAkKGVsKVxuXG4gICAgICAgIHRocmVzaCA9IGplbC5kYXRhICd0aHJlc2gnXG4gICAgICAgIHRocmVzaCA9IDUwIGlmIHRocmVzaCBpcyB1bmRlZmluZWRcblxuICAgICAgICBpZiBwZXJjID4gdGhyZXNoIGFuZCBqZWwuaGFzQ2xhc3MgJ29mZidcbiAgICAgICAgICBfLm9uIGplbFxuICAgICAgICBpZiBwZXJjIDwgdGhyZXNoIGFuZCBqZWwuaGFzQ2xhc3MgJ29uJ1xuICAgICAgICAgIF8ub2ZmIGplbFxuXG4gICAgICAgIGlmIEluZGV4LmNhY2hlLndpbmRvdy53aWR0aCgpID4gMTAwMFxuICAgICAgICAgIGlmIGplbC5oYXNDbGFzcyAnbGF4aW5fdmVydCdcbiAgICAgICAgICAgIHZhbCA9IE1hdGgucm91bmQoZGlmZilcbiAgICAgICAgICAgIGlmIEluZGV4LnZhbHM/W2ldIGlzbnQgdmFsXG4gICAgICAgICAgICAgIGplbC5maW5kKCcuaW5uZXI6Zmlyc3QnKS5jc3MgJ3RyYW5zZm9ybScsIFwidHJhbnNsYXRlM2QoMCwgI3t2YWwqNX1weCwgMHB4KVwiXG4gICAgICAgICAgICAgIGplbC5maW5kKCcub3ZlcmxheScpLmNzcyAndHJhbnNmb3JtJywgXCJ0cmFuc2xhdGUzZCgwLCAje3ZhbCoyfXB4LCAwcHgpXCJcbiAgICAgICAgICAgICAgamVsLmZpbmQoJy5vdmVybGF5ID4gLmlubmVyJykuY3NzICd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZTNkKDAsICN7dmFsLzV9cHgsIDBweClcIlxuICAgICAgICAgICAgICBJbmRleC52YWxzW2ldID0gdmFsXG5cbiAgIFxuICBpblZpZXdwb3J0OiAoZWwpIC0+XG5cbiAgICByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIHJldHVybihcbiAgICAgIChyZWN0LnRvcCA+PSAwIHx8IHJlY3QuYm90dG9tID49IDApICYmXG4gICAgICAocmVjdC50b3AgPD0gd2luZG93LmlubmVySGVpZ2h0IHx8IHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodClcbiAgICApXG5cbiAgdmlld2FibGU6IChlbCkgLT5cbiAgICByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBoZWlnaHQgPSByZWN0LmJvdHRvbS1yZWN0LnRvcFxuXG4gICAgZWxNaWRkbGUgPSByZWN0LnRvcCArIGhlaWdodC8yXG4gICAgd2luTWlkZGxlID0gd2luZG93LmlubmVySGVpZ2h0LzJcbiAgICBtYXggPSB3aW5kb3cuaW5uZXJIZWlnaHQvMiArIGhlaWdodC8yXG4gICAgZGlmZiA9IHdpbk1pZGRsZS1lbE1pZGRsZVxuICAgIHBlcmMgPSAxMDAgLSBNYXRoLmFicyhkaWZmKSoxMDAvbWF4XG4gICAgbm9uYWJzID0gTWF0aC5hYnMoZGlmZikqMTAwL21heFxuICAgIG5vbmFicyA9IC1ub25hYnMgaWYgZGlmZiA8IDBcblxuICAgIHJldHVybiBbcGVyYywgbm9uYWJzXVxuIl19
