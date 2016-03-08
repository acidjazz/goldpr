var Index;

Index = {
  vals: [],
  cache: {
    window: false,
    home: false,
    stickied: false,
    laxin: {}
  },
  i: function() {
    Index.cache.window = $(window);
    Index.cache.home = $('#home');
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
    stickySpot = -200;
    if (Index.cache.home.offset().top < stickySpot && Index.cache.stickied === false) {
      _.on('#sticky');
      Index.cache.stickied = true;
    }
    if (Index.cache.home.offset().top > stickySpot && Index.cache.stickied === true) {
      _.off('#sticky');
      return Index.cache.stickied = false;
    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOztBQUFBLEtBQUEsR0FFRTtFQUFBLElBQUEsRUFBTSxFQUFOO0VBQ0EsS0FBQSxFQUNFO0lBQUEsTUFBQSxFQUFRLEtBQVI7SUFDQSxJQUFBLEVBQU0sS0FETjtJQUVBLFFBQUEsRUFBVSxLQUZWO0lBR0EsS0FBQSxFQUFPLEVBSFA7R0FGRjtFQU9BLENBQUEsRUFBRyxTQUFBO0lBRUQsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFaLEdBQXFCLENBQUEsQ0FBRSxNQUFGO0lBQ3JCLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBWixHQUFtQixDQUFBLENBQUUsT0FBRjtJQUduQixJQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQW5CLENBQUEsQ0FBQSxHQUE2QixJQUFoQztNQUNFLFdBQUEsQ0FBWSxLQUFLLENBQUMsTUFBbEIsRUFBMEIsRUFBMUIsRUFERjs7SUFHQSxLQUFLLENBQUMsUUFBTixDQUFBO0lBQ0EsV0FBQSxDQUFZLEtBQUssQ0FBQyxLQUFsQixFQUF5QixFQUF6QjtJQUVBLElBQUcsUUFBUSxDQUFDLElBQVQsS0FBbUIsRUFBdEI7TUFDRSxDQUFDLENBQUMsRUFBRixDQUFLLFVBQUEsR0FBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBZCxDQUFzQixHQUF0QixFQUEwQixFQUExQixDQUFELENBQWYsRUFERjs7V0FHQSxLQUFLLENBQUMsUUFBTixDQUFBO0VBZkMsQ0FQSDtFQXdCQSxRQUFBLEVBQVUsU0FBQTtJQUVSLENBQUEsQ0FBRSxpR0FBRixDQUdFLENBQUMsS0FISCxDQUdTLEtBQUssQ0FBQyxNQUhmO1dBSUEsQ0FBQSxDQUFFLFNBQUYsQ0FBWSxDQUFDLEtBQWIsQ0FBbUIsS0FBSyxDQUFDLE1BQXpCO0VBTlEsQ0F4QlY7RUFnQ0EsTUFBQSxFQUFRLFNBQUE7V0FDTixDQUFDLENBQUMsSUFBRixDQUFPLHlCQUFQO0VBRE0sQ0FoQ1I7RUFtQ0EsTUFBQSxFQUFPLFNBQUMsS0FBRDtBQUVMLFFBQUE7SUFBQSxLQUFLLENBQUMsY0FBTixDQUFBO0lBRUEsSUFBQSxHQUFPLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxJQUFSLENBQWEsUUFBYjtJQUNQLENBQUMsQ0FBQyxHQUFGLENBQU0sdUVBQU47SUFDQSxDQUFDLENBQUMsR0FBRixDQUFNLGtCQUFOO0lBQ0EsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxVQUFBLEdBQVcsSUFBaEI7V0FDQSxVQUFBLENBQVcsU0FBQTtNQUNULENBQUEsQ0FBRSxZQUFGLENBQWUsQ0FBQyxRQUFoQixDQUF5QixHQUFBLEdBQUksSUFBN0IsRUFDRTtRQUFBLFFBQUEsRUFBVSxFQUFWO1FBQ0EsTUFBQSxFQUFRLENBQUMsRUFEVDtPQURGO01BR0EsUUFBUSxDQUFDLElBQVQsR0FBZ0I7YUFDaEIsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxvQ0FBTjtJQUxTLENBQVgsRUFNRSxHQU5GO0VBUkssQ0FuQ1A7RUFtREEsTUFBQSxFQUFRLFNBQUE7QUFFTixRQUFBO0lBQUEsVUFBQSxHQUFhLENBQUM7SUFFZCxJQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQWpCLENBQUEsQ0FBeUIsQ0FBQyxHQUExQixHQUFnQyxVQUFoQyxJQUErQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVosS0FBd0IsS0FBMUU7TUFDRSxDQUFDLENBQUMsRUFBRixDQUFLLFNBQUw7TUFDQSxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVosR0FBdUIsS0FGekI7O0lBSUEsSUFBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFqQixDQUFBLENBQXlCLENBQUMsR0FBMUIsR0FBZ0MsVUFBaEMsSUFBK0MsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFaLEtBQXdCLElBQTFFO01BQ0UsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxTQUFOO2FBQ0EsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFaLEdBQXVCLE1BRnpCOztFQVJNLENBbkRSO0VBK0RBLFFBQUEsRUFBVSxTQUFBO1dBQ1IsQ0FBQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLElBQVosQ0FBaUIsU0FBQyxDQUFELEVBQUksRUFBSjthQUNmLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBTSxDQUFBLENBQUEsQ0FBbEIsR0FBdUI7SUFEUixDQUFqQjtFQURRLENBL0RWO0VBbUVBLEtBQUEsRUFBTyxTQUFBO0FBR0wsUUFBQTtBQUFBO0FBQUE7U0FBQSxRQUFBOztNQUVFLElBQUcsS0FBSyxDQUFDLFVBQU4sQ0FBaUIsRUFBakIsQ0FBSDtRQUNFLE9BQWUsS0FBSyxDQUFDLFFBQU4sQ0FBZSxFQUFmLENBQWYsRUFBQyxjQUFELEVBQU87UUFDUCxHQUFBLEdBQU0sQ0FBQSxDQUFFLEVBQUY7UUFFTixNQUFBLEdBQVMsR0FBRyxDQUFDLElBQUosQ0FBUyxRQUFUO1FBQ1QsSUFBZSxNQUFBLEtBQVUsTUFBekI7VUFBQSxNQUFBLEdBQVMsR0FBVDs7UUFFQSxJQUFHLElBQUEsR0FBTyxNQUFQLElBQWtCLEdBQUcsQ0FBQyxRQUFKLENBQWEsS0FBYixDQUFyQjtVQUNFLENBQUMsQ0FBQyxFQUFGLENBQUssR0FBTCxFQURGOztRQUVBLElBQUcsSUFBQSxHQUFPLE1BQVAsSUFBa0IsR0FBRyxDQUFDLFFBQUosQ0FBYSxJQUFiLENBQXJCO3VCQUNFLENBQUMsQ0FBQyxHQUFGLENBQU0sR0FBTixHQURGO1NBQUEsTUFBQTsrQkFBQTs7O0FBR0E7Ozs7Ozs7OztXQVpGO09BQUEsTUFBQTs2QkFBQTs7QUFGRjs7RUFISyxDQW5FUDtFQStGQSxVQUFBLEVBQVksU0FBQyxFQUFEO0FBRVYsUUFBQTtJQUFBLElBQUEsR0FBTyxFQUFFLENBQUMscUJBQUgsQ0FBQTtBQUVQLFdBQ0UsQ0FBQyxJQUFJLENBQUMsR0FBTCxJQUFZLENBQVosSUFBaUIsSUFBSSxDQUFDLE1BQUwsSUFBZSxDQUFqQyxDQUFBLElBQ0EsQ0FBQyxJQUFJLENBQUMsR0FBTCxJQUFZLE1BQU0sQ0FBQyxXQUFuQixJQUFrQyxJQUFJLENBQUMsTUFBTCxJQUFlLE1BQU0sQ0FBQyxXQUF6RDtFQU5RLENBL0ZaO0VBd0dBLFFBQUEsRUFBVSxTQUFDLEVBQUQ7QUFDUixRQUFBO0lBQUEsSUFBQSxHQUFPLEVBQUUsQ0FBQyxxQkFBSCxDQUFBO0lBQ1AsTUFBQSxHQUFTLElBQUksQ0FBQyxNQUFMLEdBQVksSUFBSSxDQUFDO0lBRTFCLFFBQUEsR0FBVyxJQUFJLENBQUMsR0FBTCxHQUFXLE1BQUEsR0FBTztJQUM3QixTQUFBLEdBQVksTUFBTSxDQUFDLFdBQVAsR0FBbUI7SUFDL0IsR0FBQSxHQUFNLE1BQU0sQ0FBQyxXQUFQLEdBQW1CLENBQW5CLEdBQXVCLE1BQUEsR0FBTztJQUNwQyxJQUFBLEdBQU8sU0FBQSxHQUFVO0lBQ2pCLElBQUEsR0FBTyxHQUFBLEdBQU0sSUFBSSxDQUFDLEdBQUwsQ0FBUyxJQUFULENBQUEsR0FBZSxHQUFmLEdBQW1CO0lBQ2hDLE1BQUEsR0FBUyxJQUFJLENBQUMsR0FBTCxDQUFTLElBQVQsQ0FBQSxHQUFlLEdBQWYsR0FBbUI7SUFDNUIsSUFBb0IsSUFBQSxHQUFPLENBQTNCO01BQUEsTUFBQSxHQUFTLENBQUMsT0FBVjs7QUFFQSxXQUFPLENBQUMsSUFBRCxFQUFPLE1BQVA7RUFaQyxDQXhHViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIkluZGV4ID1cblxuICB2YWxzOiBbXVxuICBjYWNoZTpcbiAgICB3aW5kb3c6IGZhbHNlXG4gICAgaG9tZTogZmFsc2VcbiAgICBzdGlja2llZDogZmFsc2VcbiAgICBsYXhpbjoge31cblxuICBpOiAtPlxuXG4gICAgSW5kZXguY2FjaGUud2luZG93ID0gJCh3aW5kb3cpXG4gICAgSW5kZXguY2FjaGUuaG9tZSA9ICQoJyNob21lJylcblxuXG4gICAgaWYgSW5kZXguY2FjaGUud2luZG93LndpZHRoKCkgPiAxMDAwXG4gICAgICBzZXRJbnRlcnZhbCBJbmRleC5oZWFkZXIsIDUwXG5cbiAgICBJbmRleC5sYXhjYWNoZSgpXG4gICAgc2V0SW50ZXJ2YWwgSW5kZXguY2hlY2ssIDUwXG5cbiAgICBpZiBsb2NhdGlvbi5oYXNoIGlzbnQgJydcbiAgICAgIF8ub24gXCIub3B0aW9uXyN7bG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywnJyl9XCJcblxuICAgIEluZGV4LmhhbmRsZXJzKClcblxuICBoYW5kbGVyczogLT5cblxuICAgICQoJ1xuICAgICAgaGVhZGVyID4gLmlubmVyID4gLm1lbnUgPiBhLm9wdGlvbiwgLm1vYmlsZSA+IC5pbm5lciA+IC5tZW51ID4gYS5vcHRpb24sXG4gICAgICBoZWFkZXIgPiAuaW5uZXIgYS5sb2dvXG4gICAgJykuY2xpY2sgSW5kZXgub3B0aW9uXG4gICAgJCgnLmJ1cmdlcicpLmNsaWNrIEluZGV4LmJ1cmdlclxuXG4gIGJ1cmdlcjogLT5cbiAgICBfLnN3YXAgJy5tb2JpbGUsIC5idXJnZXIsIC5tZW51J1xuXG4gIG9wdGlvbjooZXZlbnQpIC0+XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBoYXNoID0gJCh0aGlzKS5kYXRhICdhbmNob3InXG4gICAgXy5vZmYgJ2hlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gLm9wdGlvbiwgLm1vYmlsZSA+IC5pbm5lciA+IC5tZW51ID4gLm9wdGlvbidcbiAgICBfLm9mZiAnLm1vYmlsZSwgLmJ1cmdlcidcbiAgICBfLm9uIFwiLm9wdGlvbl8je2hhc2h9XCJcbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAkKCdodG1sLCBib2R5Jykuc2Nyb2xsVG8gXCIjI3toYXNofVwiLFxuICAgICAgICBkdXJhdGlvbjogNTBcbiAgICAgICAgb2Zmc2V0OiAtNjBcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSBoYXNoXG4gICAgICBfLm9mZiAnLm1vYmlsZSA+IC5pbm5lciA+IC5tZW51ID4gLm9wdGlvbidcbiAgICAsIDIwMFxuXG4gIGhlYWRlcjogLT5cblxuICAgIHN0aWNreVNwb3QgPSAtMjAwXG5cbiAgICBpZiBJbmRleC5jYWNoZS5ob21lLm9mZnNldCgpLnRvcCA8IHN0aWNreVNwb3QgYW5kIEluZGV4LmNhY2hlLnN0aWNraWVkIGlzIGZhbHNlXG4gICAgICBfLm9uICcjc3RpY2t5J1xuICAgICAgSW5kZXguY2FjaGUuc3RpY2tpZWQgPSB0cnVlXG5cbiAgICBpZiBJbmRleC5jYWNoZS5ob21lLm9mZnNldCgpLnRvcCA+IHN0aWNreVNwb3QgYW5kIEluZGV4LmNhY2hlLnN0aWNraWVkIGlzIHRydWVcbiAgICAgIF8ub2ZmICcjc3RpY2t5J1xuICAgICAgSW5kZXguY2FjaGUuc3RpY2tpZWQgPSBvZmZcblxuICBsYXhjYWNoZTogLT5cbiAgICAkKCcubGF4aW4nKS5lYWNoIChpLCBlbCkgLT5cbiAgICAgIEluZGV4LmNhY2hlLmxheGluW2ldID0gZWxcblxuICBjaGVjazogLT5cblxuICAgICMkKCcubGF4aW4nKS5lYWNoIChpLCBlbCkgLT5cbiAgICBmb3IgaSwgZWwgb2YgSW5kZXguY2FjaGUubGF4aW5cblxuICAgICAgaWYgSW5kZXguaW5WaWV3cG9ydCBlbFxuICAgICAgICBbcGVyYywgZGlmZl0gPSBJbmRleC52aWV3YWJsZSBlbFxuICAgICAgICBqZWwgPSAkKGVsKVxuXG4gICAgICAgIHRocmVzaCA9IGplbC5kYXRhICd0aHJlc2gnXG4gICAgICAgIHRocmVzaCA9IDUwIGlmIHRocmVzaCBpcyB1bmRlZmluZWRcblxuICAgICAgICBpZiBwZXJjID4gdGhyZXNoIGFuZCBqZWwuaGFzQ2xhc3MgJ29mZidcbiAgICAgICAgICBfLm9uIGplbFxuICAgICAgICBpZiBwZXJjIDwgdGhyZXNoIGFuZCBqZWwuaGFzQ2xhc3MgJ29uJ1xuICAgICAgICAgIF8ub2ZmIGplbFxuXG4gICAgICAgICMjI1xuICAgICAgICBpZiBJbmRleC5jYWNoZS53aW5kb3cud2lkdGgoKSA+IDEwMDBcbiAgICAgICAgICBpZiBqZWwuaGFzQ2xhc3MgJ2xheGluX3ZlcnQnXG4gICAgICAgICAgICB2YWwgPSBNYXRoLnJvdW5kKGRpZmYpXG4gICAgICAgICAgICBpZiBJbmRleC52YWxzP1tpXSBpc250IHZhbCo2XG4gICAgICAgICAgICAgIGplbC5maW5kKCcuaW5uZXI6Zmlyc3QnKS5jc3MgJ3RyYW5zZm9ybScsIFwidHJhbnNsYXRlM2QoMCwgI3t2YWwqNn1weCwgMHB4KVwiXG4gICAgICAgICAgICAgIGplbC5maW5kKCcub3ZlcmxheScpLmNzcyAndHJhbnNmb3JtJywgXCJ0cmFuc2xhdGUzZCgwLCAje3ZhbCoyfXB4LCAwcHgpXCJcbiAgICAgICAgICAgICAgamVsLmZpbmQoJy5vdmVybGF5ID4gLmlubmVyJykuY3NzICd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZTNkKDAsICN7dmFsLzV9cHgsIDBweClcIlxuICAgICAgICAgICAgICBJbmRleC52YWxzW2ldID0gdmFsKjNcbiAgICAgICAgIyMjXG4gICBcbiAgaW5WaWV3cG9ydDogKGVsKSAtPlxuXG4gICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICByZXR1cm4oXG4gICAgICAocmVjdC50b3AgPj0gMCB8fCByZWN0LmJvdHRvbSA+PSAwKSAmJlxuICAgICAgKHJlY3QudG9wIDw9IHdpbmRvdy5pbm5lckhlaWdodCB8fCByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgKVxuXG4gIHZpZXdhYmxlOiAoZWwpIC0+XG4gICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgaGVpZ2h0ID0gcmVjdC5ib3R0b20tcmVjdC50b3BcblxuICAgIGVsTWlkZGxlID0gcmVjdC50b3AgKyBoZWlnaHQvMlxuICAgIHdpbk1pZGRsZSA9IHdpbmRvdy5pbm5lckhlaWdodC8yXG4gICAgbWF4ID0gd2luZG93LmlubmVySGVpZ2h0LzIgKyBoZWlnaHQvMlxuICAgIGRpZmYgPSB3aW5NaWRkbGUtZWxNaWRkbGVcbiAgICBwZXJjID0gMTAwIC0gTWF0aC5hYnMoZGlmZikqMTAwL21heFxuICAgIG5vbmFicyA9IE1hdGguYWJzKGRpZmYpKjEwMC9tYXhcbiAgICBub25hYnMgPSAtbm9uYWJzIGlmIGRpZmYgPCAwXG5cbiAgICByZXR1cm4gW3BlcmMsIG5vbmFic11cbiJdfQ==
