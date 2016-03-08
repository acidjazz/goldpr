var Index;

Index = {
  vals: [],
  cache: {
    window: window,
    stickied: false,
    laxin: {}
  },
  i: function() {
    Index.cache.window = $(window);
    if (Index.cache.window.width() > 1000) {
      setInterval(Index.header, 50);
    }
    Index.laxcache();
    setInterval(Index.check, 50);
    if (location.hash !== '') {
      _.on(".option_" + (location.hash.replace('#', '')));
    }
    return Index.handlers();
  },
  handlers: function() {
    $('header > .inner > .menu > a.option, .mobile > .inner > .menu > a.option, header > .inner a.logo').click(Index.option);
    return $('.burger').click(Index.burger);
  },
  burger: function() {
    return _.swap('.mobile, .burger, .menu');
  },
  option: function(event) {
    var hash;
    event.preventDefault();
    hash = $(this).data('anchor');
    _.off('header > .inner > .menu > .option, .mobile > .inner > .menu > .option');
    _.off('.mobile, .burger');
    _.on(".option_" + hash);
    return setTimeout(function() {
      $('html, body').scrollTo("#" + hash, {
        duration: 50,
        offset: -60
      });
      location.hash = hash;
      return _.off('.mobile > .inner > .menu > .option');
    }, 200);
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
  laxcache: function() {
    $('.laxin').each(function(i, el) {
      return Index.cache.laxin[i] = el;
    });
    return console.log(Index.cache.laxin);
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
            if Index.vals?[i] isnt val*6
              jel.find('.inner:first').css 'transform', "translate3d(0, #{val*6}px, 0px)"
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

//# sourceMappingURL=data:application/json;base64,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U0FBQyxFQUFEO0FBQ1IsUUFBQTtJQUFBLElBQUEsR0FBTyxFQUFFLENBQUMscUJBQUgsQ0FBQTtJQUNQLE1BQUEsR0FBUyxJQUFJLENBQUMsTUFBTCxHQUFZLElBQUksQ0FBQztJQUUxQixRQUFBLEdBQVcsSUFBSSxDQUFDLEdBQUwsR0FBVyxNQUFBLEdBQU87SUFDN0IsU0FBQSxHQUFZLE1BQU0sQ0FBQyxXQUFQLEdBQW1CO0lBQy9CLEdBQUEsR0FBTSxNQUFNLENBQUMsV0FBUCxHQUFtQixDQUFuQixHQUF1QixNQUFBLEdBQU87SUFDcEMsSUFBQSxHQUFPLFNBQUEsR0FBVTtJQUNqQixJQUFBLEdBQU8sR0FBQSxHQUFNLElBQUksQ0FBQyxHQUFMLENBQVMsSUFBVCxDQUFBLEdBQWUsR0FBZixHQUFtQjtJQUNoQyxNQUFBLEdBQVMsSUFBSSxDQUFDLEdBQUwsQ0FBUyxJQUFULENBQUEsR0FBZSxHQUFmLEdBQW1CO0lBQzVCLElBQW9CLElBQUEsR0FBTyxDQUEzQjtNQUFBLE1BQUEsR0FBUyxDQUFDLE9BQVY7O0FBRUEsV0FBTyxDQUFDLElBQUQsRUFBTyxNQUFQO0VBWkMsQ0F2R1YiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJJbmRleCA9XG5cbiAgdmFsczogW11cbiAgY2FjaGU6XG4gICAgd2luZG93OiB3aW5kb3dcbiAgICBzdGlja2llZDogZmFsc2VcbiAgICBsYXhpbjoge31cblxuICBpOiAtPlxuXG4gICAgSW5kZXguY2FjaGUud2luZG93ID0gJCh3aW5kb3cpXG5cblxuICAgIGlmIEluZGV4LmNhY2hlLndpbmRvdy53aWR0aCgpID4gMTAwMFxuICAgICAgc2V0SW50ZXJ2YWwgSW5kZXguaGVhZGVyLCA1MFxuXG4gICAgSW5kZXgubGF4Y2FjaGUoKVxuICAgIHNldEludGVydmFsIEluZGV4LmNoZWNrLCA1MFxuXG4gICAgaWYgbG9jYXRpb24uaGFzaCBpc250ICcnXG4gICAgICBfLm9uIFwiLm9wdGlvbl8je2xvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsJycpfVwiXG5cbiAgICBJbmRleC5oYW5kbGVycygpXG5cbiAgaGFuZGxlcnM6IC0+XG5cbiAgICAkKCdcbiAgICAgIGhlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gYS5vcHRpb24sIC5tb2JpbGUgPiAuaW5uZXIgPiAubWVudSA+IGEub3B0aW9uLFxuICAgICAgaGVhZGVyID4gLmlubmVyIGEubG9nb1xuICAgICcpLmNsaWNrIEluZGV4Lm9wdGlvblxuICAgICQoJy5idXJnZXInKS5jbGljayBJbmRleC5idXJnZXJcblxuICBidXJnZXI6IC0+XG4gICAgXy5zd2FwICcubW9iaWxlLCAuYnVyZ2VyLCAubWVudSdcblxuICBvcHRpb246KGV2ZW50KSAtPlxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgaGFzaCA9ICQodGhpcykuZGF0YSAnYW5jaG9yJ1xuICAgIF8ub2ZmICdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IC5vcHRpb24sIC5tb2JpbGUgPiAuaW5uZXIgPiAubWVudSA+IC5vcHRpb24nXG4gICAgXy5vZmYgJy5tb2JpbGUsIC5idXJnZXInXG4gICAgXy5vbiBcIi5vcHRpb25fI3toYXNofVwiXG4gICAgc2V0VGltZW91dCAtPlxuICAgICAgJCgnaHRtbCwgYm9keScpLnNjcm9sbFRvIFwiIyN7aGFzaH1cIixcbiAgICAgICAgZHVyYXRpb246IDUwXG4gICAgICAgIG9mZnNldDogLTYwXG4gICAgICBsb2NhdGlvbi5oYXNoID0gaGFzaFxuICAgICAgXy5vZmYgJy5tb2JpbGUgPiAuaW5uZXIgPiAubWVudSA+IC5vcHRpb24nXG4gICAgLCAyMDBcblxuICBoZWFkZXI6IC0+XG5cbiAgICBzdGlja3lTcG90ID0gMjAwXG5cbiAgICBpZiBJbmRleC5jYWNoZS53aW5kb3cuc2Nyb2xsVG9wKCkgPiBzdGlja3lTcG90IGFuZCBJbmRleC5jYWNoZS5zdGlja2llZCBpcyBmYWxzZVxuICAgICAgXy5vbiAnI3N0aWNreSdcbiAgICAgIEluZGV4LmNhY2hlLnN0aWNraWVkID0gdHJ1ZVxuXG4gICAgaWYgSW5kZXguY2FjaGUud2luZG93LnNjcm9sbFRvcCgpIDwgc3RpY2t5U3BvdCBhbmQgSW5kZXguY2FjaGUuc3RpY2tpZWQgaXMgdHJ1ZVxuICAgICAgXy5vZmYgJyNzdGlja3knXG4gICAgICBJbmRleC5jYWNoZS5zdGlja2llZCA9IG9mZlxuXG4gIGxheGNhY2hlOiAtPlxuICAgICQoJy5sYXhpbicpLmVhY2ggKGksIGVsKSAtPlxuICAgICAgSW5kZXguY2FjaGUubGF4aW5baV0gPSBlbFxuICAgIGNvbnNvbGUubG9nIEluZGV4LmNhY2hlLmxheGluXG5cbiAgY2hlY2s6IC0+XG5cbiAgICAjJCgnLmxheGluJykuZWFjaCAoaSwgZWwpIC0+XG4gICAgZm9yIGksIGVsIG9mIEluZGV4LmNhY2hlLmxheGluXG5cbiAgICAgIGlmIEluZGV4LmluVmlld3BvcnQgZWxcbiAgICAgICAgW3BlcmMsIGRpZmZdID0gSW5kZXgudmlld2FibGUgZWxcbiAgICAgICAgamVsID0gJChlbClcblxuICAgICAgICB0aHJlc2ggPSBqZWwuZGF0YSAndGhyZXNoJ1xuICAgICAgICB0aHJlc2ggPSA1MCBpZiB0aHJlc2ggaXMgdW5kZWZpbmVkXG5cbiAgICAgICAgaWYgcGVyYyA+IHRocmVzaCBhbmQgamVsLmhhc0NsYXNzICdvZmYnXG4gICAgICAgICAgXy5vbiBqZWxcbiAgICAgICAgaWYgcGVyYyA8IHRocmVzaCBhbmQgamVsLmhhc0NsYXNzICdvbidcbiAgICAgICAgICBfLm9mZiBqZWxcblxuICAgICAgICAjIyMgIFxuICAgICAgICBpZiBJbmRleC5jYWNoZS53aW5kb3cud2lkdGgoKSA+IDEwMDBcbiAgICAgICAgICBpZiBqZWwuaGFzQ2xhc3MgJ2xheGluX3ZlcnQnXG4gICAgICAgICAgICB2YWwgPSBNYXRoLnJvdW5kKGRpZmYpXG4gICAgICAgICAgICBpZiBJbmRleC52YWxzP1tpXSBpc250IHZhbCo2XG4gICAgICAgICAgICAgIGplbC5maW5kKCcuaW5uZXI6Zmlyc3QnKS5jc3MgJ3RyYW5zZm9ybScsIFwidHJhbnNsYXRlM2QoMCwgI3t2YWwqNn1weCwgMHB4KVwiXG4gICAgICAgICAgICAgIGplbC5maW5kKCcub3ZlcmxheScpLmNzcyAndHJhbnNmb3JtJywgXCJ0cmFuc2xhdGUzZCgwLCAje3ZhbCoyfXB4LCAwcHgpXCJcbiAgICAgICAgICAgICAgamVsLmZpbmQoJy5vdmVybGF5ID4gLmlubmVyJykuY3NzICd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZTNkKDAsICN7dmFsLzV9cHgsIDBweClcIlxuICAgICAgICAgICAgICBJbmRleC52YWxzW2ldID0gdmFsKjNcbiAgICAgICAgIyMjXG4gICBcbiAgaW5WaWV3cG9ydDogKGVsKSAtPlxuXG4gICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICByZXR1cm4oXG4gICAgICAocmVjdC50b3AgPj0gMCB8fCByZWN0LmJvdHRvbSA+PSAwKSAmJlxuICAgICAgKHJlY3QudG9wIDw9IHdpbmRvdy5pbm5lckhlaWdodCB8fCByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgKVxuXG4gIHZpZXdhYmxlOiAoZWwpIC0+XG4gICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgaGVpZ2h0ID0gcmVjdC5ib3R0b20tcmVjdC50b3BcblxuICAgIGVsTWlkZGxlID0gcmVjdC50b3AgKyBoZWlnaHQvMlxuICAgIHdpbk1pZGRsZSA9IHdpbmRvdy5pbm5lckhlaWdodC8yXG4gICAgbWF4ID0gd2luZG93LmlubmVySGVpZ2h0LzIgKyBoZWlnaHQvMlxuICAgIGRpZmYgPSB3aW5NaWRkbGUtZWxNaWRkbGVcbiAgICBwZXJjID0gMTAwIC0gTWF0aC5hYnMoZGlmZikqMTAwL21heFxuICAgIG5vbmFicyA9IE1hdGguYWJzKGRpZmYpKjEwMC9tYXhcbiAgICBub25hYnMgPSAtbm9uYWJzIGlmIGRpZmYgPCAwXG5cbiAgICByZXR1cm4gW3BlcmMsIG5vbmFic11cbiJdfQ==
