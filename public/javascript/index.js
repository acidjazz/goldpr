var Index;

Index = {
  vals: [],
  section: 'home',
  vis: false,
  cache: {
    window: window,
    stickied: false,
    laxin: {}
  },
  i: function() {
    Index.cache.window = $(window);
    if (document.visibilityState !== void 0) {
      Index.vis = document.visibilityState;
      setInterval(Index.visible, 200);
    }
    if (Index.cache.window.width() > 1000) {
      setInterval(Index.header, 50);
    }
    Index.laxcache();
    setInterval(Index.check, 100);
    setInterval(Index.menu, 500);
    return Index.handlers();
  },
  visible: function() {
    if (Index.vis !== document.visibilityState) {
      Index.vis = document.visibilityState;
      _.off('.blueCircle');
      return setTimeout(function() {
        return _.on('.blueCircle');
      }, 10);
    }
  },
  handlers: function() {
    $('header > .inner > .menu > a.option, .mobile > .inner > .menu > a.option, header > .inner a.logo').click(Index.option);
    return $('.burger').click(Index.burger);
  },
  burger: function() {
    return _.swap('.mobile, .burger, .burger > .inner > .menu');
  },
  option: function(event) {
    var hash;
    event.preventDefault();
    hash = $(this).data('anchor');
    _.off('header > .inner > .menu > .option, .mobile > .inner > .menu > .option');
    _.off('.mobile, .burger');
    return setTimeout(function() {
      $('html, body').scrollTo("#" + hash, {
        duration: 50,
        offset: -60
      });
      return location.hash = hash;
    }, 200);
  },
  header: function() {
    var stickySpot;
    stickySpot = 300;
    if (Index.cache.window.scrollTop() > stickySpot && Index.cache.stickied === false) {
      _.on('#sticky');
      Index.cache.stickied = true;
    }
    if (Index.cache.window.scrollTop() < stickySpot && Index.cache.stickied === true) {
      _.off('#sticky');
      return Index.cache.stickied = false;
    }
  },
  menu: function() {
    return $('.section').each(function(i, el) {
      var section;
      section = $(el).data('section');
      if (Index.inViewport(el)) {
        _.off('header > .inner > .menu > .option, .mobile > .inner > .menu > .option');
        _.on(".option_" + section);
        return true;
      }
    });
  },
  laxcache: function() {
    return $('.laxin').each(function(i, el) {
      return Index.cache.laxin[i] = el;
    });
  },
  check: function() {
    var diff, el, i, jel, perc, ref, ref1, results, thresh;
    ref = Index.cache.laxin;
    results = [];
    for (i in ref) {
      el = ref[i];
      if (Index.inViewport(el)) {
        ref1 = Index.viewable(el), perc = ref1[0], diff = ref1[1];
        jel = $(el);
        thresh = jel.data('thresh');
        if (thresh === void 0) {
          thresh = 50;
        }
        if (perc > thresh && jel.hasClass('off')) {
          _.on(jel);
        }
        if (perc < thresh && jel.hasClass('on')) {
          results.push(_.off(jel));
        } else {
          results.push(void 0);
        }

        /*
        if Index.cache.window.width() > 1000
          if jel.hasClass 'laxin_vert'
            val = Math.round(diff)
            #val = Math.round(diff)
            if Index.vals?[i] isnt val*3
              jel.find('.inner:first').css 'transform', "translate3d(0, #{val*3}px, 0px)"
              jel.find('.overlay').css 'transform', "translate3d(0, #{val*2}px, 0px)"
              jel.find('.overlay > .inner').css 'transform', "translate3d(0, #{val/5}px, 0px)"
              Index.vals[i] = val*3
         */
      } else {
        results.push(void 0);
      }
    }
    return results;
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

//# sourceMappingURL=data:application/json;base64,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QSxHQUFTLENBQUMsT0FBVjs7QUFFQSxXQUFPLENBQUMsSUFBRCxFQUFPLE1BQVA7RUFaQyxDQXhIViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIkluZGV4ID1cblxuICB2YWxzOiBbXVxuICBzZWN0aW9uOiAnaG9tZSdcbiAgdmlzOiBmYWxzZVxuICBjYWNoZTpcbiAgICB3aW5kb3c6IHdpbmRvd1xuICAgIHN0aWNraWVkOiBmYWxzZVxuICAgIGxheGluOiB7fVxuXG4gIGk6IC0+XG5cbiAgICBJbmRleC5jYWNoZS53aW5kb3cgPSAkKHdpbmRvdylcbiAgICBpZiBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgaXNudCB1bmRlZmluZWRcbiAgICAgIEluZGV4LnZpcyA9IGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZVxuICAgICAgc2V0SW50ZXJ2YWwgSW5kZXgudmlzaWJsZSwgMjAwXG5cblxuICAgIGlmIEluZGV4LmNhY2hlLndpbmRvdy53aWR0aCgpID4gMTAwMFxuICAgICAgc2V0SW50ZXJ2YWwgSW5kZXguaGVhZGVyLCA1MFxuXG4gICAgSW5kZXgubGF4Y2FjaGUoKVxuICAgIHNldEludGVydmFsIEluZGV4LmNoZWNrLCAxMDBcbiAgICBzZXRJbnRlcnZhbCBJbmRleC5tZW51LCA1MDBcblxuICAgIEluZGV4LmhhbmRsZXJzKClcblxuXG4gIHZpc2libGU6IC0+XG4gICAgaWYgSW5kZXgudmlzIGlzbnQgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlXG4gICAgICBJbmRleC52aXMgPSBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGVcbiAgICAgIF8ub2ZmICcuYmx1ZUNpcmNsZSdcbiAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgXy5vbiAnLmJsdWVDaXJjbGUnXG4gICAgICAsIDEwXG5cbiAgaGFuZGxlcnM6IC0+XG5cbiAgICAkKCdcbiAgICAgIGhlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gYS5vcHRpb24sIC5tb2JpbGUgPiAuaW5uZXIgPiAubWVudSA+IGEub3B0aW9uLFxuICAgICAgaGVhZGVyID4gLmlubmVyIGEubG9nb1xuICAgICcpLmNsaWNrIEluZGV4Lm9wdGlvblxuICAgICQoJy5idXJnZXInKS5jbGljayBJbmRleC5idXJnZXJcblxuICBidXJnZXI6IC0+XG4gICAgXy5zd2FwICcubW9iaWxlLCAuYnVyZ2VyLCAuYnVyZ2VyID4gLmlubmVyID4gLm1lbnUnXG5cbiAgb3B0aW9uOiAoZXZlbnQpIC0+XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBoYXNoID0gJCh0aGlzKS5kYXRhICdhbmNob3InXG4gICAgXy5vZmYgJ2hlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gLm9wdGlvbiwgLm1vYmlsZSA+IC5pbm5lciA+IC5tZW51ID4gLm9wdGlvbidcbiAgICBfLm9mZiAnLm1vYmlsZSwgLmJ1cmdlcidcbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAkKCdodG1sLCBib2R5Jykuc2Nyb2xsVG8gXCIjI3toYXNofVwiLFxuICAgICAgICBkdXJhdGlvbjogNTBcbiAgICAgICAgb2Zmc2V0OiAtNjBcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSBoYXNoXG4gICAgLCAyMDBcblxuICBoZWFkZXI6IC0+XG5cbiAgICBzdGlja3lTcG90ID0gMzAwXG5cbiAgICBpZiBJbmRleC5jYWNoZS53aW5kb3cuc2Nyb2xsVG9wKCkgPiBzdGlja3lTcG90IGFuZCBJbmRleC5jYWNoZS5zdGlja2llZCBpcyBmYWxzZVxuICAgICAgXy5vbiAnI3N0aWNreSdcbiAgICAgIEluZGV4LmNhY2hlLnN0aWNraWVkID0gdHJ1ZVxuXG4gICAgaWYgSW5kZXguY2FjaGUud2luZG93LnNjcm9sbFRvcCgpIDwgc3RpY2t5U3BvdCBhbmQgSW5kZXguY2FjaGUuc3RpY2tpZWQgaXMgdHJ1ZVxuICAgICAgXy5vZmYgJyNzdGlja3knXG4gICAgICBJbmRleC5jYWNoZS5zdGlja2llZCA9IG9mZlxuXG4gIG1lbnU6IC0+XG5cbiAgICAkKCcuc2VjdGlvbicpLmVhY2ggKGksIGVsKSAtPlxuICAgICAgc2VjdGlvbiA9ICQoZWwpLmRhdGEgJ3NlY3Rpb24nXG4gICAgICBpZiBJbmRleC5pblZpZXdwb3J0IGVsXG4gICAgICAgIF8ub2ZmICdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IC5vcHRpb24sIC5tb2JpbGUgPiAuaW5uZXIgPiAubWVudSA+IC5vcHRpb24nXG4gICAgICAgIF8ub24gXCIub3B0aW9uXyN7c2VjdGlvbn1cIlxuICAgICAgICByZXR1cm4gdHJ1ZVxuXG4gIGxheGNhY2hlOiAtPlxuICAgICQoJy5sYXhpbicpLmVhY2ggKGksIGVsKSAtPlxuICAgICAgSW5kZXguY2FjaGUubGF4aW5baV0gPSBlbFxuXG4gIGNoZWNrOiAtPlxuICAgIGZvciBpLCBlbCBvZiBJbmRleC5jYWNoZS5sYXhpblxuXG4gICAgICBpZiBJbmRleC5pblZpZXdwb3J0IGVsXG4gICAgICAgIFtwZXJjLCBkaWZmXSA9IEluZGV4LnZpZXdhYmxlIGVsXG4gICAgICAgIGplbCA9ICQoZWwpXG5cbiAgICAgICAgdGhyZXNoID0gamVsLmRhdGEgJ3RocmVzaCdcbiAgICAgICAgdGhyZXNoID0gNTAgaWYgdGhyZXNoIGlzIHVuZGVmaW5lZFxuXG4gICAgICAgIGlmIHBlcmMgPiB0aHJlc2ggYW5kIGplbC5oYXNDbGFzcyAnb2ZmJ1xuICAgICAgICAgIF8ub24gamVsXG4gICAgICAgIGlmIHBlcmMgPCB0aHJlc2ggYW5kIGplbC5oYXNDbGFzcyAnb24nXG4gICAgICAgICAgXy5vZmYgamVsXG5cbiAgICAgICAgIyMjXG4gICAgICAgIGlmIEluZGV4LmNhY2hlLndpbmRvdy53aWR0aCgpID4gMTAwMFxuICAgICAgICAgIGlmIGplbC5oYXNDbGFzcyAnbGF4aW5fdmVydCdcbiAgICAgICAgICAgIHZhbCA9IE1hdGgucm91bmQoZGlmZilcbiAgICAgICAgICAgICN2YWwgPSBNYXRoLnJvdW5kKGRpZmYpXG4gICAgICAgICAgICBpZiBJbmRleC52YWxzP1tpXSBpc250IHZhbCozXG4gICAgICAgICAgICAgIGplbC5maW5kKCcuaW5uZXI6Zmlyc3QnKS5jc3MgJ3RyYW5zZm9ybScsIFwidHJhbnNsYXRlM2QoMCwgI3t2YWwqM31weCwgMHB4KVwiXG4gICAgICAgICAgICAgIGplbC5maW5kKCcub3ZlcmxheScpLmNzcyAndHJhbnNmb3JtJywgXCJ0cmFuc2xhdGUzZCgwLCAje3ZhbCoyfXB4LCAwcHgpXCJcbiAgICAgICAgICAgICAgamVsLmZpbmQoJy5vdmVybGF5ID4gLmlubmVyJykuY3NzICd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZTNkKDAsICN7dmFsLzV9cHgsIDBweClcIlxuICAgICAgICAgICAgICBJbmRleC52YWxzW2ldID0gdmFsKjNcbiAgICAgICAgIyMjXG4gICBcbiAgaW5WaWV3cG9ydDogKGVsKSAtPlxuXG4gICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICByZXR1cm4oXG4gICAgICAocmVjdC50b3AgPj0gMCB8fCByZWN0LmJvdHRvbSA+PSAwKSAmJlxuICAgICAgKHJlY3QudG9wIDw9IHdpbmRvdy5pbm5lckhlaWdodCB8fCByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgKVxuXG4gIHZpZXdhYmxlOiAoZWwpIC0+XG4gICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgaGVpZ2h0ID0gcmVjdC5ib3R0b20tcmVjdC50b3BcblxuICAgIGVsTWlkZGxlID0gcmVjdC50b3AgKyBoZWlnaHQvMlxuICAgIHdpbk1pZGRsZSA9IHdpbmRvdy5pbm5lckhlaWdodC8yXG4gICAgbWF4ID0gd2luZG93LmlubmVySGVpZ2h0LzIgKyBoZWlnaHQvMlxuICAgIGRpZmYgPSB3aW5NaWRkbGUtZWxNaWRkbGVcbiAgICBwZXJjID0gMTAwIC0gTWF0aC5hYnMoZGlmZikqMTAwL21heFxuICAgIG5vbmFicyA9IE1hdGguYWJzKGRpZmYpKjEwMC9tYXhcbiAgICBub25hYnMgPSAtbm9uYWJzIGlmIGRpZmYgPCAwXG5cbiAgICByZXR1cm4gW3BlcmMsIG5vbmFic11cbiJdfQ==
