var _;

_ = {
  i: function() {
    return this.console = setInterval(this.detect.bind(this), 200);
  },
  p: {
    offing: false,
    offtime: 0
  },
  turn: function(el, remove, add) {
    if (remove == null) {
      remove = false;
    }
    if (add == null) {
      add = false;
    }
    if (!(el instanceof jQuery)) {
      el = $(el);
    }
    if (remove !== false) {
      el.removeClass(remove);
    }
    if (add !== false) {
      el.addClass(add);
    }
    return true;
  },
  off: function(el, p) {
    if (p == null) {
      p = {};
    }
    if (p.offing && p.offtime > 0) {
      this.turn(el, false, 'offing');
      setTimeout(function() {
        this.turn(el, 'offing', false);
        return this.turn(el, 'on', 'off');
      }, p.offtime * 1000 + 100);
    } else {
      this.turn(el, 'on', 'off');
    }
  },
  on: function(el, p) {
    return this.turn(el, 'off', 'on');
  },
  swap: function(el, p) {
    if (!(el instanceof jQuery)) {
      el = $(el);
    }
    if (el.hasClass('off')) {
      this.on(el, p);
    } else {
      this.off(el, p);
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
  load: function(script, initiate, complete) {
    var el;
    el = document.createElement('script');
    el.type = 'text/javascript';
    el.src = script;
    el.addEventListener('load', function(e) {
      if (typeof complete === 'function') {
        complete();
      }
      if (initiate !== void 0 && initiate !== false) {
        return window[initiate].i();
      }
    }, false);
    return document.body.appendChild(el);
  },
  llc: function() {
    var ascii;
    ascii = "\n%cmmm/............................................................./mmm\nmmo................-:://::-.......-:::::::::::::-........-::///:-.omm\nmd-.............:+yhddddddhy+-..../ddddddddddddd+....../shdddddddyodm\nmo.............-hmmmhyyyydmmmh:.../mmmmhhhhhhhhh+....:ydmmdhyyyhddoom\nm-..............-ss:-....-ymmmy.../mmmm---------....:dmmms:-...-:/.-m\nd.........................ymmmy.../mmmm-/+ooo+:-....ymmmy-:+ooo+/-..d\nh.......................:smmmd:.../mmmmhmmmmmmdh+...dmmmshdmmmmmmhs-h\nh.....................:sdmmdy:....:hhdho+//+ymmmm+..dmmmdyo//+sdmmmhh\nd..................-+ydmmdy/.......--:.......smmmh..ymmms......:mmmmm\nm-..............-:shmmmds/-----....:s/--...-:hmmms..:dmmd/-...-ommmmm\nmo..............hmmmmmmhhhhhhhh...+dmmdhyyyhdmmmy-.../hmmmhyyyhmmmdhm\nmd-.............ddddddddddddddd...-+shdddddddhy/-.....-oydddddddho:dm\nmmo.............:::::::::::::::.......-:///::-...........-:///:-..omm\nmmm/............................................................./mmm\n\n:: syntactic sugar by 256\n:: http://256.io/\n:: " + config.meta.repo;
    return console.log(ascii, "color: grey; font-family: Menlo, monospace;");
  },
  detect: function() {
    if (((window.outerHeight - window.innerHeight) > 100) || ((window.outerWidth - window.innerWidth) > 100)) {
      this.llc();
      return clearInterval(this.console);
    }
  }
};

_.i();

var config;

config = {
  "clients": ["invisalign", "galderma", "biopharmx", "natera", "coolsculpting", "alma", "restylane", "dysport", "sculptra", "sera", "care", "wholefoods", "haggens", "abbot", "finess", "generalmills", "iteris", "kia", "lifelock", "mattel", "mazda", "mitsubishi", "nike", "nestle", "newbalance", "redbull", "tmobile", "xbox", "obi", "sema", "mixim", "hansens", "tylenol", "drybar"],
  "color": {
    "black1": "#000000",
    "white1": "#FFFFFF",
    "white2": "#F7EEEA",
    "red1": "#EE697A",
    "blue1": "#D1E0EB",
    "gold1": "#B0976D"
  },
  "font": {
    "copy1": {
      "font-family": "gotham light",
      "font-size": "16px"
    },
    "copy2": {
      "font-family": "gotham medium",
      "font-size": "16px"
    },
    "copy3": {
      "font-family": "gotham light",
      "font-size": "14px"
    },
    "copy4": {
      "font-family": "gotham bold",
      "font-size": "20px"
    },
    "copy5": {
      "font-family": "gotham light",
      "font-size": "12px"
    },
    "copy6": {
      "font-family": "gotham medium",
      "font-size": "14px"
    },
    "copy7": {
      "font-family": "gotham bold",
      "font-size": "12px"
    },
    "h1": {
      "font-family": "neutratext bold",
      "font-size": "40px"
    },
    "h2": {
      "font-family": "neutratext demi",
      "font-size": "20px"
    },
    "h3": {
      "font-family": "gotham light",
      "font-size": "30px"
    },
    "h4": {
      "font-family": "gotham bold",
      "font-size": "30px"
    },
    "h5": {
      "font-family": "gotham light",
      "font-size": "20px"
    },
    "h6": {
      "font-family": "gotham book",
      "font-size": "300px"
    }
  },
  "menu": ["standout", "approach", "work", "services", "team", "clients", "contact"],
  "meta": {
    "title": "Gold PR",
    "url": "http://www.goldpr.com/",
    "repo": "http://www.github.com/acidjazz/goldpr",
    "description": "We help companies grow",
    "keywords": "womens beauty pr, womens health pr, social media",
    "image": "img/share.jpg"
  },
  "social": {
    "facebook": "http://www.facebook.com/goldpr",
    "twitter": "http://www.twitter.com/goldpr_",
    "instagram": "http://www.instagram.com/goldpr",
    "mail": "hello@goldpr.com",
    "map": "https://goo.gl/maps/STNfa6zs34s",
    "phone": 9497433911
  },
  "studies": {
    "1": {
      "name": "Case Study 1",
      "type": "Health and Beauty",
      "link": "CaseStudy1_Restylane_Health_and_Beauty.pdf",
      "video": "https://vimeo.com/158432199"
    },
    "2": {
      "name": "Case Study 2",
      "type": "Health and Beauty",
      "link": "CaseStudy2_Coolsculpting_Health_and_Beauty.pdf",
      "video": "https://vimeo.com/158431861"
    },
    "3": {
      "name": "Case Study 3",
      "type": "Health and Beauty",
      "link": "CaseStudy3_Invisalign_Health_and_Beauty.pdf"
    },
    "4": {
      "name": "Case Study 4",
      "type": "Women's Health",
      "link": "CaseStudy4_PanoramaNIPT_Womens_Health.pdf"
    },
    "5": {
      "name": "Case Study 5",
      "type": "Women's Health",
      "link": "CaseStudy5_Violet_Womens_Health.pdf"
    },
    "6": {
      "name": "Case Study 6",
      "type": "Food and Beverage",
      "link": "CaseStudy6_WholeFoods_Food_and_Beverage.pdf"
    }
  },
  "team": [
    {
      "name": "Shari Gold",
      "position": "Founder/CEO",
      "email": "sgold@goldpr.com"
    }, {
      "name": "Adrienne Kemp",
      "position": "Business Lead, Strategy",
      "email": "akemp@goldpr.com"
    }, {
      "name": "Stephanie Goddard",
      "position": "Business Lead, Strategy",
      "email": "sgoddard@goldpr.com"
    }, {
      "name": "Jackie Jorge",
      "position": "Media Strategist",
      "email": "jjorge@goldpr.com"
    }, {
      "name": "Sara Record",
      "position": "Blogger/Influencer Relations",
      "email": "srecord@goldpr.com"
    }, {
      "name": "Sharon Scott",
      "position": "Media strategist",
      "email": "sscott@goldpr.com"
    }, {
      "name": "Ashley Garing",
      "position": "Missing",
      "email": "agaring@goldpr.com"
    }, {
      "name": "Natasha Nelson",
      "position": "Missing",
      "email": "nnelson@goldpr.com"
    }, {
      "name": "Shannon Smith",
      "position": "Media strategist",
      "email": "ssmith@goldpr.com"
    }, {
      "name": "Pam Schlichter",
      "position": "Media Relations",
      "email": "Pschlichter@goldpr.com"
    }, {
      "name": "Diana Mann",
      "position": "Account Director",
      "email": "dmann@goldpr.com"
    }, {
      "name": "Jill Edgeworth",
      "position": "Account Director",
      "email": "jedgeworth@goldpr.com"
    }, {
      "name": "Kris Ellenberg",
      "position": "Entertainment Lead",
      "email": "kellenberg@goldpr.com"
    }, {
      "name": "Diana Moeck",
      "position": "Analytics/Account Support",
      "email": "dmoeck@goldpr.com"
    }, {
      "name": "Kym Cleveland",
      "position": "Account Coordinator",
      "email": "kcleveland@goldpr.com"
    }, {
      "name": "Jami Eidsvold",
      "position": "Social Media Business Lead",
      "email": "jeidsvold@goldpr.com"
    }, {
      "name": "Vanessa Shanahan",
      "position": "Missing",
      "email": "missing@goldpr.com"
    }, {
      "name": "Ashley Cline",
      "position": "Social Media Strategist",
      "email": "acline@goldpr.com"
    }, {
      "name": "Kellie Arens",
      "position": "Social Media Acct Manager",
      "email": "karens@goldpr.com"
    }, {
      "name": "Jamie Dadant",
      "position": "Social Consumer Customer Service",
      "email": "jdadant@goldpr.com"
    }, {
      "name": "Brianna Jonsson",
      "position": "Social Media Community Manager",
      "email": "bjonsson@goldpr.com"
    }, {
      "name": "Cameron Jonsson",
      "position": "Digital Strategist",
      "email": "cjonsson@goldpr.com"
    }, {
      "name": "Lauren Cowles",
      "position": "Digital/Social Strategist",
      "email": "lcowles@goldpr.com"
    }, {
      "name": "Melissa Angert",
      "position": "Social Media Strategist",
      "email": "mangert@goldpr.com"
    }, {
      "name": "Allison Hinojosa",
      "position": "CFO",
      "email": "ahinojosa@goldpr.com"
    }
  ]
};

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
    Index.handlers();
    return console.log('Index.i()');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJjb25maWcuY29mZmVlIiwiaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUEsQ0FBQSxHQUVFO0VBQUEsQ0FBQSxFQUFHLFNBQUE7V0FDRCxJQUFDLENBQUEsT0FBRCxHQUFXLFdBQUEsQ0FBWSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxJQUFiLENBQVosRUFBNkIsR0FBN0I7RUFEVixDQUFIO0VBR0EsQ0FBQSxFQUNFO0lBQUEsTUFBQSxFQUFRLEtBQVI7SUFDQSxPQUFBLEVBQVMsQ0FEVDtHQUpGO0VBT0EsSUFBQSxFQUFNLFNBQUMsRUFBRCxFQUFLLE1BQUwsRUFBbUIsR0FBbkI7O01BQUssU0FBTzs7O01BQU8sTUFBSTs7SUFFM0IsSUFBRyxDQUFBLENBQUEsRUFBQSxZQUFrQixNQUFsQixDQUFIO01BQ0UsRUFBQSxHQUFLLENBQUEsQ0FBRSxFQUFGLEVBRFA7O0lBR0EsSUFBRyxNQUFBLEtBQVksS0FBZjtNQUNFLEVBQUUsQ0FBQyxXQUFILENBQWUsTUFBZixFQURGOztJQUdBLElBQUcsR0FBQSxLQUFTLEtBQVo7TUFDRSxFQUFFLENBQUMsUUFBSCxDQUFZLEdBQVosRUFERjs7QUFHQSxXQUFPO0VBWEgsQ0FQTjtFQW9CQSxHQUFBLEVBQUssU0FBQyxFQUFELEVBQUssQ0FBTDs7TUFBSyxJQUFFOztJQUVWLElBQUcsQ0FBQyxDQUFDLE1BQUYsSUFBYSxDQUFDLENBQUMsT0FBRixHQUFZLENBQTVCO01BRUUsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsS0FBVixFQUFpQixRQUFqQjtNQUNBLFVBQUEsQ0FBVyxTQUFBO1FBQ1QsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsUUFBVixFQUFvQixLQUFwQjtlQUNBLElBQUMsQ0FBQSxJQUFELENBQU0sRUFBTixFQUFVLElBQVYsRUFBZ0IsS0FBaEI7TUFGUyxDQUFYLEVBR0UsQ0FBQyxDQUFDLE9BQUYsR0FB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QixJQUFvQixJQUFBLEdBQU8sQ0FBM0I7TUFBQSxNQUFBLEdBQVMsQ0FBQyxPQUFWOztBQUVBLFdBQU8sQ0FBQyxJQUFELEVBQU8sTUFBUDtFQVpDLENBMUhWIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIl8gPVxuXG4gIGk6IC0+XG4gICAgQGNvbnNvbGUgPSBzZXRJbnRlcnZhbChAZGV0ZWN0LmJpbmQoQCksIDIwMClcblxuICBwOlxuICAgIG9mZmluZzogZmFsc2VcbiAgICBvZmZ0aW1lOiAwXG5cbiAgdHVybjogKGVsLCByZW1vdmU9ZmFsc2UsIGFkZD1mYWxzZSkgLT5cblxuICAgIGlmIGVsIG5vdCBpbnN0YW5jZW9mIGpRdWVyeVxuICAgICAgZWwgPSAkKGVsKVxuXG4gICAgaWYgcmVtb3ZlIGlzbnQgZmFsc2VcbiAgICAgIGVsLnJlbW92ZUNsYXNzKHJlbW92ZSlcblxuICAgIGlmIGFkZCBpc250IGZhbHNlXG4gICAgICBlbC5hZGRDbGFzcyhhZGQpXG5cbiAgICByZXR1cm4gdHJ1ZVxuXG4gIG9mZjogKGVsLCBwPXt9KSAtPlxuXG4gICAgaWYgcC5vZmZpbmcgYW5kIHAub2ZmdGltZSA+IDBcblxuICAgICAgQHR1cm4gZWwsIGZhbHNlLCAnb2ZmaW5nJ1xuICAgICAgc2V0VGltZW91dCAtPlxuICAgICAgICBAdHVybiBlbCwgJ29mZmluZycsIGZhbHNlXG4gICAgICAgIEB0dXJuIGVsLCAnb24nLCAnb2ZmJ1xuICAgICAgLCBwLm9mZnRpbWUqMTAwMCArIDEwMFxuXG4gICAgZWxzZVxuICAgICAgQHR1cm4gZWwsICdvbicsICdvZmYnXG5cbiAgICByZXR1cm5cblxuICBvbjogKGVsLCBwKSAtPlxuICAgIEB0dXJuIGVsLCAnb2ZmJywgJ29uJ1xuXG4gIHN3YXA6IChlbCwgcCkgLT5cblxuICAgIGlmIGVsIG5vdCBpbnN0YW5jZW9mIGpRdWVyeVxuICAgICAgZWwgPSAkKGVsKVxuXG4gICAgaWYgZWwuaGFzQ2xhc3MgJ29mZidcbiAgICAgIEBvbiBlbCwgcFxuICAgIGVsc2VcbiAgICAgIEBvZmYgZWwsIHBcblxuICAgIHJldHVyblxuXG4gIGVuY29kZTogKHN0cikgLT5cbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgICAgIC5yZXBsYWNlKC8hL2csICclMjEnKVxuICAgICAgLnJlcGxhY2UoLycvZywgJyUyNycpXG4gICAgICAucmVwbGFjZSgvXFwoL2csICclMjgnKVxuICAgICAgLnJlcGxhY2UoL1xcKS9nLCAnJTI5JylcbiAgICAgIC5yZXBsYWNlKC9cXCovZywgJyUyQScpXG4gICAgICAucmVwbGFjZSgvJTIwL2csICcrJylcblxuICB0OiAoY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlKSAtPlxuICAgIF9nYXEucHVzaCBbJ190cmFja0V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlXVxuXG4gIHJhbmQ6IChtaW4sIG1heCkgLT5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KSArIG1pblxuXG4gIGxvYWQ6IChzY3JpcHQsIGluaXRpYXRlLCBjb21wbGV0ZSkgLT5cblxuICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAnc2NyaXB0J1xuICAgIGVsLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0J1xuICAgIGVsLnNyYyA9IHNjcmlwdFxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIgJ2xvYWQnICwgKGUpIC0+XG4gICAgICBjb21wbGV0ZSgpIGlmIHR5cGVvZiBjb21wbGV0ZSBpcyAnZnVuY3Rpb24nXG4gICAgICB3aW5kb3dbaW5pdGlhdGVdLmkoKSBpZiBpbml0aWF0ZSBpc250IHVuZGVmaW5lZCBhbmQgaW5pdGlhdGUgaXNudCBmYWxzZVxuICAgICwgZmFsc2VcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpXG5cbiAgbGxjOiAtPlxuICAgIGFzY2lpID0gXCJcIlwiXG5cbiAgICAgICVjbW1tLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4vbW1tXG4gICAgICBtbW8uLi4uLi4uLi4uLi4uLi4uLTo6Ly86Oi0uLi4uLi4uLTo6Ojo6Ojo6Ojo6OjotLi4uLi4uLi4tOjovLy86LS5vbW1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi46K3loZGRkZGRkaHkrLS4uLi4vZGRkZGRkZGRkZGRkZCsuLi4uLi4vc2hkZGRkZGRkeW9kbVxuICAgICAgbW8uLi4uLi4uLi4uLi4uLWhtbW1oeXl5eWRtbW1oOi4uLi9tbW1taGhoaGhoaGhoKy4uLi46eWRtbWRoeXl5aGRkb29tXG4gICAgICBtLS4uLi4uLi4uLi4uLi4uLXNzOi0uLi4uLXltbW15Li4uL21tbW0tLS0tLS0tLS0uLi4uOmRtbW1zOi0uLi4tOi8uLW1cbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4ueW1tbXkuLi4vbW1tbS0vK29vbys6LS4uLi55bW1teS06K29vbysvLS4uZFxuICAgICAgaC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNtbW1kOi4uLi9tbW1taG1tbW1tbWRoKy4uLmRtbW1zaGRtbW1tbW1ocy1oXG4gICAgICBoLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNkbW1keTouLi4uOmhoZGhvKy8vK3ltbW1tKy4uZG1tbWR5by8vK3NkbW1taGhcbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4tK3lkbW1keS8uLi4uLi4uLS06Li4uLi4uLnNtbW1oLi55bW1tcy4uLi4uLjptbW1tbVxuICAgICAgbS0uLi4uLi4uLi4uLi4uLi06c2htbW1kcy8tLS0tLS4uLi46cy8tLS4uLi06aG1tbXMuLjpkbW1kLy0uLi4tb21tbW1tXG4gICAgICBtby4uLi4uLi4uLi4uLi4uaG1tbW1tbWhoaGhoaGhoLi4uK2RtbWRoeXl5aGRtbW15LS4uLi9obW1taHl5eWhtbW1kaG1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi5kZGRkZGRkZGRkZGRkZGQuLi4tK3NoZGRkZGRkZGh5Ly0uLi4uLi1veWRkZGRkZGRobzpkbVxuICAgICAgbW1vLi4uLi4uLi4uLi4uLjo6Ojo6Ojo6Ojo6Ojo6Oi4uLi4uLi4tOi8vLzo6LS4uLi4uLi4uLi4uLTovLy86LS4ub21tXG4gICAgICBtbW0vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9tbW1cblxuICAgICAgOjogc3ludGFjdGljIHN1Z2FyIGJ5IDI1NlxuICAgICAgOjogaHR0cDovLzI1Ni5pby9cbiAgICAgIDo6ICN7Y29uZmlnLm1ldGEucmVwb31cbiAgICBcIlwiXCJcbiAgICBjb25zb2xlLmxvZyBhc2NpaSwgXCJjb2xvcjogZ3JleTsgZm9udC1mYW1pbHk6IE1lbmxvLCBtb25vc3BhY2U7XCJcblxuICBkZXRlY3Q6IC0+XG4gICAgaWYgKCgod2luZG93Lm91dGVySGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSA+IDEwMCkgfHwgKCh3aW5kb3cub3V0ZXJXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoKSA+IDEwMCkpXG4gICAgICBAbGxjKClcbiAgICAgIGNsZWFySW50ZXJ2YWwgQGNvbnNvbGVcblxuXy5pKClcbiIsImNvbmZpZyA9IHtcImNsaWVudHNcIjpbXCJpbnZpc2FsaWduXCIsXCJnYWxkZXJtYVwiLFwiYmlvcGhhcm14XCIsXCJuYXRlcmFcIixcImNvb2xzY3VscHRpbmdcIixcImFsbWFcIixcInJlc3R5bGFuZVwiLFwiZHlzcG9ydFwiLFwic2N1bHB0cmFcIixcInNlcmFcIixcImNhcmVcIixcIndob2xlZm9vZHNcIixcImhhZ2dlbnNcIixcImFiYm90XCIsXCJmaW5lc3NcIixcImdlbmVyYWxtaWxsc1wiLFwiaXRlcmlzXCIsXCJraWFcIixcImxpZmVsb2NrXCIsXCJtYXR0ZWxcIixcIm1hemRhXCIsXCJtaXRzdWJpc2hpXCIsXCJuaWtlXCIsXCJuZXN0bGVcIixcIm5ld2JhbGFuY2VcIixcInJlZGJ1bGxcIixcInRtb2JpbGVcIixcInhib3hcIixcIm9iaVwiLFwic2VtYVwiLFwibWl4aW1cIixcImhhbnNlbnNcIixcInR5bGVub2xcIixcImRyeWJhclwiXSxcImNvbG9yXCI6e1wiYmxhY2sxXCI6XCIjMDAwMDAwXCIsXCJ3aGl0ZTFcIjpcIiNGRkZGRkZcIixcIndoaXRlMlwiOlwiI0Y3RUVFQVwiLFwicmVkMVwiOlwiI0VFNjk3QVwiLFwiYmx1ZTFcIjpcIiNEMUUwRUJcIixcImdvbGQxXCI6XCIjQjA5NzZEXCJ9LFwiZm9udFwiOntcImNvcHkxXCI6e1wiZm9udC1mYW1pbHlcIjpcImdvdGhhbSBsaWdodFwiLFwiZm9udC1zaXplXCI6XCIxNnB4XCJ9LFwiY29weTJcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIG1lZGl1bVwiLFwiZm9udC1zaXplXCI6XCIxNnB4XCJ9LFwiY29weTNcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjE0cHhcIn0sXCJjb3B5NFwiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gYm9sZFwiLFwiZm9udC1zaXplXCI6XCIyMHB4XCJ9LFwiY29weTVcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjEycHhcIn0sXCJjb3B5NlwiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gbWVkaXVtXCIsXCJmb250LXNpemVcIjpcIjE0cHhcIn0sXCJjb3B5N1wiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gYm9sZFwiLFwiZm9udC1zaXplXCI6XCIxMnB4XCJ9LFwiaDFcIjp7XCJmb250LWZhbWlseVwiOlwibmV1dHJhdGV4dCBib2xkXCIsXCJmb250LXNpemVcIjpcIjQwcHhcIn0sXCJoMlwiOntcImZvbnQtZmFtaWx5XCI6XCJuZXV0cmF0ZXh0IGRlbWlcIixcImZvbnQtc2l6ZVwiOlwiMjBweFwifSxcImgzXCI6e1wiZm9udC1mYW1pbHlcIjpcImdvdGhhbSBsaWdodFwiLFwiZm9udC1zaXplXCI6XCIzMHB4XCJ9LFwiaDRcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIGJvbGRcIixcImZvbnQtc2l6ZVwiOlwiMzBweFwifSxcImg1XCI6e1wiZm9udC1mYW1pbHlcIjpcImdvdGhhbSBsaWdodFwiLFwiZm9udC1zaXplXCI6XCIyMHB4XCJ9LFwiaDZcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIGJvb2tcIixcImZvbnQtc2l6ZVwiOlwiMzAwcHhcIn19LFwibWVudVwiOltcInN0YW5kb3V0XCIsXCJhcHByb2FjaFwiLFwid29ya1wiLFwic2VydmljZXNcIixcInRlYW1cIixcImNsaWVudHNcIixcImNvbnRhY3RcIl0sXCJtZXRhXCI6e1widGl0bGVcIjpcIkdvbGQgUFJcIixcInVybFwiOlwiaHR0cDovL3d3dy5nb2xkcHIuY29tL1wiLFwicmVwb1wiOlwiaHR0cDovL3d3dy5naXRodWIuY29tL2FjaWRqYXp6L2dvbGRwclwiLFwiZGVzY3JpcHRpb25cIjpcIldlIGhlbHAgY29tcGFuaWVzIGdyb3dcIixcImtleXdvcmRzXCI6XCJ3b21lbnMgYmVhdXR5IHByLCB3b21lbnMgaGVhbHRoIHByLCBzb2NpYWwgbWVkaWFcIixcImltYWdlXCI6XCJpbWcvc2hhcmUuanBnXCJ9LFwic29jaWFsXCI6e1wiZmFjZWJvb2tcIjpcImh0dHA6Ly93d3cuZmFjZWJvb2suY29tL2dvbGRwclwiLFwidHdpdHRlclwiOlwiaHR0cDovL3d3dy50d2l0dGVyLmNvbS9nb2xkcHJfXCIsXCJpbnN0YWdyYW1cIjpcImh0dHA6Ly93d3cuaW5zdGFncmFtLmNvbS9nb2xkcHJcIixcIm1haWxcIjpcImhlbGxvQGdvbGRwci5jb21cIixcIm1hcFwiOlwiaHR0cHM6Ly9nb28uZ2wvbWFwcy9TVE5mYTZ6czM0c1wiLFwicGhvbmVcIjo5NDk3NDMzOTExfSxcInN0dWRpZXNcIjp7XCIxXCI6e1wibmFtZVwiOlwiQ2FzZSBTdHVkeSAxXCIsXCJ0eXBlXCI6XCJIZWFsdGggYW5kIEJlYXV0eVwiLFwibGlua1wiOlwiQ2FzZVN0dWR5MV9SZXN0eWxhbmVfSGVhbHRoX2FuZF9CZWF1dHkucGRmXCIsXCJ2aWRlb1wiOlwiaHR0cHM6Ly92aW1lby5jb20vMTU4NDMyMTk5XCJ9LFwiMlwiOntcIm5hbWVcIjpcIkNhc2UgU3R1ZHkgMlwiLFwidHlwZVwiOlwiSGVhbHRoIGFuZCBCZWF1dHlcIixcImxpbmtcIjpcIkNhc2VTdHVkeTJfQ29vbHNjdWxwdGluZ19IZWFsdGhfYW5kX0JlYXV0eS5wZGZcIixcInZpZGVvXCI6XCJodHRwczovL3ZpbWVvLmNvbS8xNTg0MzE4NjFcIn0sXCIzXCI6e1wibmFtZVwiOlwiQ2FzZSBTdHVkeSAzXCIsXCJ0eXBlXCI6XCJIZWFsdGggYW5kIEJlYXV0eVwiLFwibGlua1wiOlwiQ2FzZVN0dWR5M19JbnZpc2FsaWduX0hlYWx0aF9hbmRfQmVhdXR5LnBkZlwifSxcIjRcIjp7XCJuYW1lXCI6XCJDYXNlIFN0dWR5IDRcIixcInR5cGVcIjpcIldvbWVuJ3MgSGVhbHRoXCIsXCJsaW5rXCI6XCJDYXNlU3R1ZHk0X1Bhbm9yYW1hTklQVF9Xb21lbnNfSGVhbHRoLnBkZlwifSxcIjVcIjp7XCJuYW1lXCI6XCJDYXNlIFN0dWR5IDVcIixcInR5cGVcIjpcIldvbWVuJ3MgSGVhbHRoXCIsXCJsaW5rXCI6XCJDYXNlU3R1ZHk1X1Zpb2xldF9Xb21lbnNfSGVhbHRoLnBkZlwifSxcIjZcIjp7XCJuYW1lXCI6XCJDYXNlIFN0dWR5IDZcIixcInR5cGVcIjpcIkZvb2QgYW5kIEJldmVyYWdlXCIsXCJsaW5rXCI6XCJDYXNlU3R1ZHk2X1dob2xlRm9vZHNfRm9vZF9hbmRfQmV2ZXJhZ2UucGRmXCJ9fSxcInRlYW1cIjpbe1wibmFtZVwiOlwiU2hhcmkgR29sZFwiLFwicG9zaXRpb25cIjpcIkZvdW5kZXIvQ0VPXCIsXCJlbWFpbFwiOlwic2dvbGRAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJBZHJpZW5uZSBLZW1wXCIsXCJwb3NpdGlvblwiOlwiQnVzaW5lc3MgTGVhZCwgU3RyYXRlZ3lcIixcImVtYWlsXCI6XCJha2VtcEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIlN0ZXBoYW5pZSBHb2RkYXJkXCIsXCJwb3NpdGlvblwiOlwiQnVzaW5lc3MgTGVhZCwgU3RyYXRlZ3lcIixcImVtYWlsXCI6XCJzZ29kZGFyZEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkphY2tpZSBKb3JnZVwiLFwicG9zaXRpb25cIjpcIk1lZGlhIFN0cmF0ZWdpc3RcIixcImVtYWlsXCI6XCJqam9yZ2VAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJTYXJhIFJlY29yZFwiLFwicG9zaXRpb25cIjpcIkJsb2dnZXIvSW5mbHVlbmNlciBSZWxhdGlvbnNcIixcImVtYWlsXCI6XCJzcmVjb3JkQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiU2hhcm9uIFNjb3R0XCIsXCJwb3NpdGlvblwiOlwiTWVkaWEgc3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcInNzY290dEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkFzaGxleSBHYXJpbmdcIixcInBvc2l0aW9uXCI6XCJNaXNzaW5nXCIsXCJlbWFpbFwiOlwiYWdhcmluZ0Bnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIk5hdGFzaGEgTmVsc29uXCIsXCJwb3NpdGlvblwiOlwiTWlzc2luZ1wiLFwiZW1haWxcIjpcIm5uZWxzb25AZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJTaGFubm9uIFNtaXRoXCIsXCJwb3NpdGlvblwiOlwiTWVkaWEgc3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcInNzbWl0aEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIlBhbSBTY2hsaWNodGVyXCIsXCJwb3NpdGlvblwiOlwiTWVkaWEgUmVsYXRpb25zXCIsXCJlbWFpbFwiOlwiUHNjaGxpY2h0ZXJAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJEaWFuYSBNYW5uXCIsXCJwb3NpdGlvblwiOlwiQWNjb3VudCBEaXJlY3RvclwiLFwiZW1haWxcIjpcImRtYW5uQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiSmlsbCBFZGdld29ydGhcIixcInBvc2l0aW9uXCI6XCJBY2NvdW50IERpcmVjdG9yXCIsXCJlbWFpbFwiOlwiamVkZ2V3b3J0aEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIktyaXMgRWxsZW5iZXJnXCIsXCJwb3NpdGlvblwiOlwiRW50ZXJ0YWlubWVudCBMZWFkXCIsXCJlbWFpbFwiOlwia2VsbGVuYmVyZ0Bnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkRpYW5hIE1vZWNrXCIsXCJwb3NpdGlvblwiOlwiQW5hbHl0aWNzL0FjY291bnQgU3VwcG9ydFwiLFwiZW1haWxcIjpcImRtb2Vja0Bnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkt5bSBDbGV2ZWxhbmRcIixcInBvc2l0aW9uXCI6XCJBY2NvdW50IENvb3JkaW5hdG9yXCIsXCJlbWFpbFwiOlwia2NsZXZlbGFuZEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkphbWkgRWlkc3ZvbGRcIixcInBvc2l0aW9uXCI6XCJTb2NpYWwgTWVkaWEgQnVzaW5lc3MgTGVhZFwiLFwiZW1haWxcIjpcImplaWRzdm9sZEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIlZhbmVzc2EgU2hhbmFoYW5cIixcInBvc2l0aW9uXCI6XCJNaXNzaW5nXCIsXCJlbWFpbFwiOlwibWlzc2luZ0Bnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkFzaGxleSBDbGluZVwiLFwicG9zaXRpb25cIjpcIlNvY2lhbCBNZWRpYSBTdHJhdGVnaXN0XCIsXCJlbWFpbFwiOlwiYWNsaW5lQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiS2VsbGllIEFyZW5zXCIsXCJwb3NpdGlvblwiOlwiU29jaWFsIE1lZGlhIEFjY3QgTWFuYWdlclwiLFwiZW1haWxcIjpcImthcmVuc0Bnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkphbWllIERhZGFudFwiLFwicG9zaXRpb25cIjpcIlNvY2lhbCBDb25zdW1lciBDdXN0b21lciBTZXJ2aWNlXCIsXCJlbWFpbFwiOlwiamRhZGFudEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkJyaWFubmEgSm9uc3NvblwiLFwicG9zaXRpb25cIjpcIlNvY2lhbCBNZWRpYSBDb21tdW5pdHkgTWFuYWdlclwiLFwiZW1haWxcIjpcImJqb25zc29uQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiQ2FtZXJvbiBKb25zc29uXCIsXCJwb3NpdGlvblwiOlwiRGlnaXRhbCBTdHJhdGVnaXN0XCIsXCJlbWFpbFwiOlwiY2pvbnNzb25AZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJMYXVyZW4gQ293bGVzXCIsXCJwb3NpdGlvblwiOlwiRGlnaXRhbC9Tb2NpYWwgU3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcImxjb3dsZXNAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJNZWxpc3NhIEFuZ2VydFwiLFwicG9zaXRpb25cIjpcIlNvY2lhbCBNZWRpYSBTdHJhdGVnaXN0XCIsXCJlbWFpbFwiOlwibWFuZ2VydEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkFsbGlzb24gSGlub2pvc2FcIixcInBvc2l0aW9uXCI6XCJDRk9cIixcImVtYWlsXCI6XCJhaGlub2pvc2FAZ29sZHByLmNvbVwifV19OyIsIkluZGV4ID1cblxuICB2YWxzOiBbXVxuICBzZWN0aW9uOiAnaG9tZSdcbiAgdmlzOiBmYWxzZVxuICBjYWNoZTpcbiAgICB3aW5kb3c6IHdpbmRvd1xuICAgIHN0aWNraWVkOiBmYWxzZVxuICAgIGxheGluOiB7fVxuXG4gIGk6IC0+XG4gICAgXG5cbiAgICBJbmRleC5jYWNoZS53aW5kb3cgPSAkKHdpbmRvdylcbiAgICBpZiBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgaXNudCB1bmRlZmluZWRcbiAgICAgIEluZGV4LnZpcyA9IGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZVxuICAgICAgc2V0SW50ZXJ2YWwgSW5kZXgudmlzaWJsZSwgMjAwXG5cblxuICAgIGlmIEluZGV4LmNhY2hlLndpbmRvdy53aWR0aCgpID4gMTAwMFxuICAgICAgc2V0SW50ZXJ2YWwgSW5kZXguaGVhZGVyLCA1MFxuXG4gICAgSW5kZXgubGF4Y2FjaGUoKVxuICAgIHNldEludGVydmFsIEluZGV4LmNoZWNrLCAxMDBcbiAgICBzZXRJbnRlcnZhbCBJbmRleC5tZW51LCA1MDBcblxuICAgIEluZGV4LmhhbmRsZXJzKClcbiAgICBjb25zb2xlLmxvZyAnSW5kZXguaSgpJ1xuXG5cbiAgdmlzaWJsZTogLT5cbiAgICBpZiBJbmRleC52aXMgaXNudCBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGVcbiAgICAgIEluZGV4LnZpcyA9IGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZVxuICAgICAgXy5vZmYgJy5ibHVlQ2lyY2xlJ1xuICAgICAgc2V0VGltZW91dCAtPlxuICAgICAgICBfLm9uICcuYmx1ZUNpcmNsZSdcbiAgICAgICwgMTBcblxuICBoYW5kbGVyczogLT5cblxuICAgICQoJ1xuICAgICAgaGVhZGVyID4gLmlubmVyID4gLm1lbnUgPiBhLm9wdGlvbiwgLm1vYmlsZSA+IC5pbm5lciA+IC5tZW51ID4gYS5vcHRpb24sXG4gICAgICBoZWFkZXIgPiAuaW5uZXIgYS5sb2dvXG4gICAgJykuY2xpY2sgSW5kZXgub3B0aW9uXG4gICAgJCgnLmJ1cmdlcicpLmNsaWNrIEluZGV4LmJ1cmdlclxuXG4gIGJ1cmdlcjogLT5cbiAgICBfLnN3YXAgJy5tb2JpbGUsIC5idXJnZXIsIC5idXJnZXIgPiAuaW5uZXIgPiAubWVudSdcblxuICBvcHRpb246IChldmVudCkgLT5cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGhhc2ggPSAkKHRoaXMpLmRhdGEgJ2FuY2hvcidcbiAgICBfLm9mZiAnaGVhZGVyID4gLmlubmVyID4gLm1lbnUgPiAub3B0aW9uLCAubW9iaWxlID4gLmlubmVyID4gLm1lbnUgPiAub3B0aW9uJ1xuICAgIF8ub2ZmICcubW9iaWxlLCAuYnVyZ2VyJ1xuICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICQoJ2h0bWwsIGJvZHknKS5zY3JvbGxUbyBcIiMje2hhc2h9XCIsXG4gICAgICAgIGR1cmF0aW9uOiA1MFxuICAgICAgICBvZmZzZXQ6IC02MFxuICAgICAgbG9jYXRpb24uaGFzaCA9IGhhc2hcbiAgICAsIDIwMFxuXG4gIGhlYWRlcjogLT5cblxuICAgIHN0aWNreVNwb3QgPSAzMDBcblxuICAgIGlmIEluZGV4LmNhY2hlLndpbmRvdy5zY3JvbGxUb3AoKSA+IHN0aWNreVNwb3QgYW5kIEluZGV4LmNhY2hlLnN0aWNraWVkIGlzIGZhbHNlXG4gICAgICBfLm9uICcjc3RpY2t5J1xuICAgICAgSW5kZXguY2FjaGUuc3RpY2tpZWQgPSB0cnVlXG5cbiAgICBpZiBJbmRleC5jYWNoZS53aW5kb3cuc2Nyb2xsVG9wKCkgPCBzdGlja3lTcG90IGFuZCBJbmRleC5jYWNoZS5zdGlja2llZCBpcyB0cnVlXG4gICAgICBfLm9mZiAnI3N0aWNreSdcbiAgICAgIEluZGV4LmNhY2hlLnN0aWNraWVkID0gb2ZmXG5cbiAgbWVudTogLT5cblxuICAgICQoJy5zZWN0aW9uJykuZWFjaCAoaSwgZWwpIC0+XG4gICAgICBzZWN0aW9uID0gJChlbCkuZGF0YSAnc2VjdGlvbidcbiAgICAgIGlmIEluZGV4LmluVmlld3BvcnQgZWxcbiAgICAgICAgXy5vZmYgJ2hlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gLm9wdGlvbiwgLm1vYmlsZSA+IC5pbm5lciA+IC5tZW51ID4gLm9wdGlvbidcbiAgICAgICAgXy5vbiBcIi5vcHRpb25fI3tzZWN0aW9ufVwiXG4gICAgICAgIHJldHVybiB0cnVlXG5cbiAgbGF4Y2FjaGU6IC0+XG4gICAgJCgnLmxheGluJykuZWFjaCAoaSwgZWwpIC0+XG4gICAgICBJbmRleC5jYWNoZS5sYXhpbltpXSA9IGVsXG5cbiAgY2hlY2s6IC0+XG4gICAgZm9yIGksIGVsIG9mIEluZGV4LmNhY2hlLmxheGluXG5cbiAgICAgIGlmIEluZGV4LmluVmlld3BvcnQgZWxcbiAgICAgICAgW3BlcmMsIGRpZmZdID0gSW5kZXgudmlld2FibGUgZWxcbiAgICAgICAgamVsID0gJChlbClcblxuICAgICAgICB0aHJlc2ggPSBqZWwuZGF0YSAndGhyZXNoJ1xuICAgICAgICB0aHJlc2ggPSA1MCBpZiB0aHJlc2ggaXMgdW5kZWZpbmVkXG5cbiAgICAgICAgaWYgcGVyYyA+IHRocmVzaCBhbmQgamVsLmhhc0NsYXNzICdvZmYnXG4gICAgICAgICAgXy5vbiBqZWxcbiAgICAgICAgaWYgcGVyYyA8IHRocmVzaCBhbmQgamVsLmhhc0NsYXNzICdvbidcbiAgICAgICAgICBfLm9mZiBqZWxcblxuICAgICAgICAjIyNcbiAgICAgICAgaWYgSW5kZXguY2FjaGUud2luZG93LndpZHRoKCkgPiAxMDAwXG4gICAgICAgICAgaWYgamVsLmhhc0NsYXNzICdsYXhpbl92ZXJ0J1xuICAgICAgICAgICAgdmFsID0gTWF0aC5yb3VuZChkaWZmKVxuICAgICAgICAgICAgI3ZhbCA9IE1hdGgucm91bmQoZGlmZilcbiAgICAgICAgICAgIGlmIEluZGV4LnZhbHM/W2ldIGlzbnQgdmFsKjNcbiAgICAgICAgICAgICAgamVsLmZpbmQoJy5pbm5lcjpmaXJzdCcpLmNzcyAndHJhbnNmb3JtJywgXCJ0cmFuc2xhdGUzZCgwLCAje3ZhbCozfXB4LCAwcHgpXCJcbiAgICAgICAgICAgICAgamVsLmZpbmQoJy5vdmVybGF5JykuY3NzICd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZTNkKDAsICN7dmFsKjJ9cHgsIDBweClcIlxuICAgICAgICAgICAgICBqZWwuZmluZCgnLm92ZXJsYXkgPiAuaW5uZXInKS5jc3MgJ3RyYW5zZm9ybScsIFwidHJhbnNsYXRlM2QoMCwgI3t2YWwvNX1weCwgMHB4KVwiXG4gICAgICAgICAgICAgIEluZGV4LnZhbHNbaV0gPSB2YWwqM1xuICAgICAgICAjIyNcbiAgIFxuICBpblZpZXdwb3J0OiAoZWwpIC0+XG5cbiAgICByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIHJldHVybihcbiAgICAgIChyZWN0LnRvcCA+PSAwIHx8IHJlY3QuYm90dG9tID49IDApICYmXG4gICAgICAocmVjdC50b3AgPD0gd2luZG93LmlubmVySGVpZ2h0IHx8IHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodClcbiAgICApXG5cbiAgdmlld2FibGU6IChlbCkgLT5cbiAgICByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBoZWlnaHQgPSByZWN0LmJvdHRvbS1yZWN0LnRvcFxuXG4gICAgZWxNaWRkbGUgPSByZWN0LnRvcCArIGhlaWdodC8yXG4gICAgd2luTWlkZGxlID0gd2luZG93LmlubmVySGVpZ2h0LzJcbiAgICBtYXggPSB3aW5kb3cuaW5uZXJIZWlnaHQvMiArIGhlaWdodC8yXG4gICAgZGlmZiA9IHdpbk1pZGRsZS1lbE1pZGRsZVxuICAgIHBlcmMgPSAxMDAgLSBNYXRoLmFicyhkaWZmKSoxMDAvbWF4XG4gICAgbm9uYWJzID0gTWF0aC5hYnMoZGlmZikqMTAwL21heFxuICAgIG5vbmFicyA9IC1ub25hYnMgaWYgZGlmZiA8IDBcblxuICAgIHJldHVybiBbcGVyYywgbm9uYWJzXVxuXG4iXX0=
