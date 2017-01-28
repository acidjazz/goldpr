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
  "clients": ["invisalign", "galderma", "biopharmx", "natera", "coolsculpting", "alma", "endologix", "restylane", "dysport", "sculptra", "sera", "care", "wholefoods", "haggens", "abbot", "finess", "generalmills", "kia", "lifelock", "mattel", "mazda", "mitsubishi", "nike", "nestle", "newbalance", "redbull", "tmobile", "xbox", "obi", "sema", "mixim", "hansens", "tylenol", "drybar", "iteris"],
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
      "position": "Account Director",
      "email": "agaring@goldpr.com"
    }, {
      "name": "Natasha Nelson",
      "position": "Account Director | SEO",
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
      "position": "Analytics",
      "email": "vshanahan@goldpr.com"
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
    var location;
    if (location.hostname === 'www.goldpr.com' && location.protocol !== 'https:') {
      if (location.hash !== "") {
        location = 'https://www.goldpr.com/' + location.hash;
      } else {
        location = 'https://www.goldpr.com/';
      }
    }
    if (location.hostname === 'goldpr.com') {
      if (location.hash !== "") {
        location = 'https://www.goldpr.com/' + location.hash;
      } else {
        location = 'https://www.goldpr.com/';
      }
    }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJjb25maWcuY29mZmVlIiwiaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUEsQ0FBQSxHQUVFO0VBQUEsQ0FBQSxFQUFHLFNBQUE7V0FDRCxJQUFDLENBQUEsT0FBRCxHQUFXLFdBQUEsQ0FBWSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxJQUFiLENBQVosRUFBNkIsR0FBN0I7RUFEVixDQUFIO0VBR0EsQ0FBQSxFQUNFO0lBQUEsTUFBQSxFQUFRLEtBQVI7SUFDQSxPQUFBLEVBQVMsQ0FEVDtHQUpGO0VBT0EsSUFBQSxFQUFNLFNBQUMsRUFBRCxFQUFLLE1BQUwsRUFBbUIsR0FBbkI7O01BQUssU0FBTzs7O01BQU8sTUFBSTs7SUFFM0IsSUFBRyxDQUFBLENBQUEsRUFBQSxZQUFrQixNQUFsQixDQUFIO01BQ0UsRUFBQSxHQUFLLENBQUEsQ0FBRSxFQUFGLEVBRFA7O0lBR0EsSUFBRyxNQUFBLEtBQVksS0FBZjtNQUNFLEVBQUUsQ0FBQyxXQUFILENBQWUsTUFBZixFQURGOztJQUdBLElBQUcsR0FBQSxLQUFTLEtBQVo7TUFDRSxFQUFFLENBQUMsUUFBSCxDQUFZLEdBQVosRUFERjs7QUFHQSxXQUFPO0VBWEgsQ0FQTjtFQW9CQSxHQUFBLEVBQUssU0FBQyxFQUFELEVBQUssQ0FBTDs7TUFBSyxJQUFFOztJQUVWLElBQUcsQ0FBQyxDQUFDLE1BQUYsSUFBYSxDQUFDLENBQUMsT0FBRixHQUFZLENBQTVCO01BRUUsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsS0FBVixFQUFpQixRQUFqQjtNQUNBLFVBQUEsQ0FBVyxTQUFBO1FBQ1QsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsUUFBVixFQUFvQixLQUFwQjtlQUNBLElBQUMsQ0FBQSxJQUFELENBQU0sRUFBTixFQUFVLElBQVYsRUFBZ0IsS0FBaEI7TUFGUyxDQUFYLEVBR0UsQ0FBQyxDQUFDLE9BQUYsR0FB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QUFDLHFCQUFILENBQUE7SUFDUCxNQUFBLEdBQVMsSUFBSSxDQUFDLE1BQUwsR0FBWSxJQUFJLENBQUM7SUFFMUIsUUFBQSxHQUFXLElBQUksQ0FBQyxHQUFMLEdBQVcsTUFBQSxHQUFPO0lBQzdCLFNBQUEsR0FBWSxNQUFNLENBQUMsV0FBUCxHQUFtQjtJQUMvQixHQUFBLEdBQU0sTUFBTSxDQUFDLFdBQVAsR0FBbUIsQ0FBbkIsR0FBdUIsTUFBQSxHQUFPO0lBQ3BDLElBQUEsR0FBTyxTQUFBLEdBQVU7SUFDakIsSUFBQSxHQUFPLEdBQUEsR0FBTSxJQUFJLENBQUMsR0FBTCxDQUFTLElBQVQsQ0FBQSxHQUFlLEdBQWYsR0FBbUI7SUFDaEMsTUFBQSxHQUFTLElBQUksQ0FBQyxHQUFMLENBQVMsSUFBVCxDQUFBLEdBQWUsR0FBZixHQUFtQjtJQUM1QixJQUFvQixJQUFBLEdBQU8sQ0FBM0I7TUFBQSxNQUFBLEdBQVMsQ0FBQyxPQUFWOztBQUVBLFdBQU8sQ0FBQyxJQUFELEVBQU8sTUFBUDtFQVpDLENBdElWIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIl8gPVxuXG4gIGk6IC0+XG4gICAgQGNvbnNvbGUgPSBzZXRJbnRlcnZhbChAZGV0ZWN0LmJpbmQoQCksIDIwMClcblxuICBwOlxuICAgIG9mZmluZzogZmFsc2VcbiAgICBvZmZ0aW1lOiAwXG5cbiAgdHVybjogKGVsLCByZW1vdmU9ZmFsc2UsIGFkZD1mYWxzZSkgLT5cblxuICAgIGlmIGVsIG5vdCBpbnN0YW5jZW9mIGpRdWVyeVxuICAgICAgZWwgPSAkKGVsKVxuXG4gICAgaWYgcmVtb3ZlIGlzbnQgZmFsc2VcbiAgICAgIGVsLnJlbW92ZUNsYXNzKHJlbW92ZSlcblxuICAgIGlmIGFkZCBpc250IGZhbHNlXG4gICAgICBlbC5hZGRDbGFzcyhhZGQpXG5cbiAgICByZXR1cm4gdHJ1ZVxuXG4gIG9mZjogKGVsLCBwPXt9KSAtPlxuXG4gICAgaWYgcC5vZmZpbmcgYW5kIHAub2ZmdGltZSA+IDBcblxuICAgICAgQHR1cm4gZWwsIGZhbHNlLCAnb2ZmaW5nJ1xuICAgICAgc2V0VGltZW91dCAtPlxuICAgICAgICBAdHVybiBlbCwgJ29mZmluZycsIGZhbHNlXG4gICAgICAgIEB0dXJuIGVsLCAnb24nLCAnb2ZmJ1xuICAgICAgLCBwLm9mZnRpbWUqMTAwMCArIDEwMFxuXG4gICAgZWxzZVxuICAgICAgQHR1cm4gZWwsICdvbicsICdvZmYnXG5cbiAgICByZXR1cm5cblxuICBvbjogKGVsLCBwKSAtPlxuICAgIEB0dXJuIGVsLCAnb2ZmJywgJ29uJ1xuXG4gIHN3YXA6IChlbCwgcCkgLT5cblxuICAgIGlmIGVsIG5vdCBpbnN0YW5jZW9mIGpRdWVyeVxuICAgICAgZWwgPSAkKGVsKVxuXG4gICAgaWYgZWwuaGFzQ2xhc3MgJ29mZidcbiAgICAgIEBvbiBlbCwgcFxuICAgIGVsc2VcbiAgICAgIEBvZmYgZWwsIHBcblxuICAgIHJldHVyblxuXG4gIGVuY29kZTogKHN0cikgLT5cbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgICAgIC5yZXBsYWNlKC8hL2csICclMjEnKVxuICAgICAgLnJlcGxhY2UoLycvZywgJyUyNycpXG4gICAgICAucmVwbGFjZSgvXFwoL2csICclMjgnKVxuICAgICAgLnJlcGxhY2UoL1xcKS9nLCAnJTI5JylcbiAgICAgIC5yZXBsYWNlKC9cXCovZywgJyUyQScpXG4gICAgICAucmVwbGFjZSgvJTIwL2csICcrJylcblxuICB0OiAoY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlKSAtPlxuICAgIF9nYXEucHVzaCBbJ190cmFja0V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlXVxuXG4gIHJhbmQ6IChtaW4sIG1heCkgLT5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KSArIG1pblxuXG4gIGxvYWQ6IChzY3JpcHQsIGluaXRpYXRlLCBjb21wbGV0ZSkgLT5cblxuICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAnc2NyaXB0J1xuICAgIGVsLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0J1xuICAgIGVsLnNyYyA9IHNjcmlwdFxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIgJ2xvYWQnICwgKGUpIC0+XG4gICAgICBjb21wbGV0ZSgpIGlmIHR5cGVvZiBjb21wbGV0ZSBpcyAnZnVuY3Rpb24nXG4gICAgICB3aW5kb3dbaW5pdGlhdGVdLmkoKSBpZiBpbml0aWF0ZSBpc250IHVuZGVmaW5lZCBhbmQgaW5pdGlhdGUgaXNudCBmYWxzZVxuICAgICwgZmFsc2VcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpXG5cbiAgbGxjOiAtPlxuICAgIGFzY2lpID0gXCJcIlwiXG5cbiAgICAgICVjbW1tLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4vbW1tXG4gICAgICBtbW8uLi4uLi4uLi4uLi4uLi4uLTo6Ly86Oi0uLi4uLi4uLTo6Ojo6Ojo6Ojo6OjotLi4uLi4uLi4tOjovLy86LS5vbW1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi46K3loZGRkZGRkaHkrLS4uLi4vZGRkZGRkZGRkZGRkZCsuLi4uLi4vc2hkZGRkZGRkeW9kbVxuICAgICAgbW8uLi4uLi4uLi4uLi4uLWhtbW1oeXl5eWRtbW1oOi4uLi9tbW1taGhoaGhoaGhoKy4uLi46eWRtbWRoeXl5aGRkb29tXG4gICAgICBtLS4uLi4uLi4uLi4uLi4uLXNzOi0uLi4uLXltbW15Li4uL21tbW0tLS0tLS0tLS0uLi4uOmRtbW1zOi0uLi4tOi8uLW1cbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4ueW1tbXkuLi4vbW1tbS0vK29vbys6LS4uLi55bW1teS06K29vbysvLS4uZFxuICAgICAgaC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNtbW1kOi4uLi9tbW1taG1tbW1tbWRoKy4uLmRtbW1zaGRtbW1tbW1ocy1oXG4gICAgICBoLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNkbW1keTouLi4uOmhoZGhvKy8vK3ltbW1tKy4uZG1tbWR5by8vK3NkbW1taGhcbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4tK3lkbW1keS8uLi4uLi4uLS06Li4uLi4uLnNtbW1oLi55bW1tcy4uLi4uLjptbW1tbVxuICAgICAgbS0uLi4uLi4uLi4uLi4uLi06c2htbW1kcy8tLS0tLS4uLi46cy8tLS4uLi06aG1tbXMuLjpkbW1kLy0uLi4tb21tbW1tXG4gICAgICBtby4uLi4uLi4uLi4uLi4uaG1tbW1tbWhoaGhoaGhoLi4uK2RtbWRoeXl5aGRtbW15LS4uLi9obW1taHl5eWhtbW1kaG1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi5kZGRkZGRkZGRkZGRkZGQuLi4tK3NoZGRkZGRkZGh5Ly0uLi4uLi1veWRkZGRkZGRobzpkbVxuICAgICAgbW1vLi4uLi4uLi4uLi4uLjo6Ojo6Ojo6Ojo6Ojo6Oi4uLi4uLi4tOi8vLzo6LS4uLi4uLi4uLi4uLTovLy86LS4ub21tXG4gICAgICBtbW0vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9tbW1cblxuICAgICAgOjogc3ludGFjdGljIHN1Z2FyIGJ5IDI1NlxuICAgICAgOjogaHR0cDovLzI1Ni5pby9cbiAgICAgIDo6ICN7Y29uZmlnLm1ldGEucmVwb31cbiAgICBcIlwiXCJcbiAgICBjb25zb2xlLmxvZyBhc2NpaSwgXCJjb2xvcjogZ3JleTsgZm9udC1mYW1pbHk6IE1lbmxvLCBtb25vc3BhY2U7XCJcblxuICBkZXRlY3Q6IC0+XG4gICAgaWYgKCgod2luZG93Lm91dGVySGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSA+IDEwMCkgfHwgKCh3aW5kb3cub3V0ZXJXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoKSA+IDEwMCkpXG4gICAgICBAbGxjKClcbiAgICAgIGNsZWFySW50ZXJ2YWwgQGNvbnNvbGVcblxuXy5pKClcbiIsImNvbmZpZyA9IHtcImNsaWVudHNcIjpbXCJpbnZpc2FsaWduXCIsXCJnYWxkZXJtYVwiLFwiYmlvcGhhcm14XCIsXCJuYXRlcmFcIixcImNvb2xzY3VscHRpbmdcIixcImFsbWFcIixcImVuZG9sb2dpeFwiLFwicmVzdHlsYW5lXCIsXCJkeXNwb3J0XCIsXCJzY3VscHRyYVwiLFwic2VyYVwiLFwiY2FyZVwiLFwid2hvbGVmb29kc1wiLFwiaGFnZ2Vuc1wiLFwiYWJib3RcIixcImZpbmVzc1wiLFwiZ2VuZXJhbG1pbGxzXCIsXCJraWFcIixcImxpZmVsb2NrXCIsXCJtYXR0ZWxcIixcIm1hemRhXCIsXCJtaXRzdWJpc2hpXCIsXCJuaWtlXCIsXCJuZXN0bGVcIixcIm5ld2JhbGFuY2VcIixcInJlZGJ1bGxcIixcInRtb2JpbGVcIixcInhib3hcIixcIm9iaVwiLFwic2VtYVwiLFwibWl4aW1cIixcImhhbnNlbnNcIixcInR5bGVub2xcIixcImRyeWJhclwiLFwiaXRlcmlzXCJdLFwiY29sb3JcIjp7XCJibGFjazFcIjpcIiMwMDAwMDBcIixcIndoaXRlMVwiOlwiI0ZGRkZGRlwiLFwid2hpdGUyXCI6XCIjRjdFRUVBXCIsXCJyZWQxXCI6XCIjRUU2OTdBXCIsXCJibHVlMVwiOlwiI0QxRTBFQlwiLFwiZ29sZDFcIjpcIiNCMDk3NkRcIn0sXCJmb250XCI6e1wiY29weTFcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjE2cHhcIn0sXCJjb3B5MlwiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gbWVkaXVtXCIsXCJmb250LXNpemVcIjpcIjE2cHhcIn0sXCJjb3B5M1wiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gbGlnaHRcIixcImZvbnQtc2l6ZVwiOlwiMTRweFwifSxcImNvcHk0XCI6e1wiZm9udC1mYW1pbHlcIjpcImdvdGhhbSBib2xkXCIsXCJmb250LXNpemVcIjpcIjIwcHhcIn0sXCJjb3B5NVwiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gbGlnaHRcIixcImZvbnQtc2l6ZVwiOlwiMTJweFwifSxcImNvcHk2XCI6e1wiZm9udC1mYW1pbHlcIjpcImdvdGhhbSBtZWRpdW1cIixcImZvbnQtc2l6ZVwiOlwiMTRweFwifSxcImNvcHk3XCI6e1wiZm9udC1mYW1pbHlcIjpcImdvdGhhbSBib2xkXCIsXCJmb250LXNpemVcIjpcIjEycHhcIn0sXCJoMVwiOntcImZvbnQtZmFtaWx5XCI6XCJuZXV0cmF0ZXh0IGJvbGRcIixcImZvbnQtc2l6ZVwiOlwiNDBweFwifSxcImgyXCI6e1wiZm9udC1mYW1pbHlcIjpcIm5ldXRyYXRleHQgZGVtaVwiLFwiZm9udC1zaXplXCI6XCIyMHB4XCJ9LFwiaDNcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjMwcHhcIn0sXCJoNFwiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gYm9sZFwiLFwiZm9udC1zaXplXCI6XCIzMHB4XCJ9LFwiaDVcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjIwcHhcIn0sXCJoNlwiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gYm9va1wiLFwiZm9udC1zaXplXCI6XCIzMDBweFwifX0sXCJtZW51XCI6W1wic3RhbmRvdXRcIixcImFwcHJvYWNoXCIsXCJ3b3JrXCIsXCJzZXJ2aWNlc1wiLFwidGVhbVwiLFwiY2xpZW50c1wiLFwiY29udGFjdFwiXSxcIm1ldGFcIjp7XCJ0aXRsZVwiOlwiR29sZCBQUlwiLFwidXJsXCI6XCJodHRwOi8vd3d3LmdvbGRwci5jb20vXCIsXCJyZXBvXCI6XCJodHRwOi8vd3d3LmdpdGh1Yi5jb20vYWNpZGphenovZ29sZHByXCIsXCJkZXNjcmlwdGlvblwiOlwiV2UgaGVscCBjb21wYW5pZXMgZ3Jvd1wiLFwia2V5d29yZHNcIjpcIndvbWVucyBiZWF1dHkgcHIsIHdvbWVucyBoZWFsdGggcHIsIHNvY2lhbCBtZWRpYVwiLFwiaW1hZ2VcIjpcImltZy9zaGFyZS5qcGdcIn0sXCJzb2NpYWxcIjp7XCJmYWNlYm9va1wiOlwiaHR0cDovL3d3dy5mYWNlYm9vay5jb20vZ29sZHByXCIsXCJ0d2l0dGVyXCI6XCJodHRwOi8vd3d3LnR3aXR0ZXIuY29tL2dvbGRwcl9cIixcImluc3RhZ3JhbVwiOlwiaHR0cDovL3d3dy5pbnN0YWdyYW0uY29tL2dvbGRwclwiLFwibWFpbFwiOlwiaGVsbG9AZ29sZHByLmNvbVwiLFwibWFwXCI6XCJodHRwczovL2dvby5nbC9tYXBzL1NUTmZhNnpzMzRzXCIsXCJwaG9uZVwiOjk0OTc0MzM5MTF9LFwic3R1ZGllc1wiOntcIjFcIjp7XCJuYW1lXCI6XCJDYXNlIFN0dWR5IDFcIixcInR5cGVcIjpcIkhlYWx0aCBhbmQgQmVhdXR5XCIsXCJsaW5rXCI6XCJDYXNlU3R1ZHkxX1Jlc3R5bGFuZV9IZWFsdGhfYW5kX0JlYXV0eS5wZGZcIixcInZpZGVvXCI6XCJodHRwczovL3ZpbWVvLmNvbS8xNTg0MzIxOTlcIn0sXCIyXCI6e1wibmFtZVwiOlwiQ2FzZSBTdHVkeSAyXCIsXCJ0eXBlXCI6XCJIZWFsdGggYW5kIEJlYXV0eVwiLFwibGlua1wiOlwiQ2FzZVN0dWR5Ml9Db29sc2N1bHB0aW5nX0hlYWx0aF9hbmRfQmVhdXR5LnBkZlwiLFwidmlkZW9cIjpcImh0dHBzOi8vdmltZW8uY29tLzE1ODQzMTg2MVwifSxcIjNcIjp7XCJuYW1lXCI6XCJDYXNlIFN0dWR5IDNcIixcInR5cGVcIjpcIkhlYWx0aCBhbmQgQmVhdXR5XCIsXCJsaW5rXCI6XCJDYXNlU3R1ZHkzX0ludmlzYWxpZ25fSGVhbHRoX2FuZF9CZWF1dHkucGRmXCJ9LFwiNFwiOntcIm5hbWVcIjpcIkNhc2UgU3R1ZHkgNFwiLFwidHlwZVwiOlwiV29tZW4ncyBIZWFsdGhcIixcImxpbmtcIjpcIkNhc2VTdHVkeTRfUGFub3JhbWFOSVBUX1dvbWVuc19IZWFsdGgucGRmXCJ9LFwiNVwiOntcIm5hbWVcIjpcIkNhc2UgU3R1ZHkgNVwiLFwidHlwZVwiOlwiV29tZW4ncyBIZWFsdGhcIixcImxpbmtcIjpcIkNhc2VTdHVkeTVfVmlvbGV0X1dvbWVuc19IZWFsdGgucGRmXCJ9LFwiNlwiOntcIm5hbWVcIjpcIkNhc2UgU3R1ZHkgNlwiLFwidHlwZVwiOlwiRm9vZCBhbmQgQmV2ZXJhZ2VcIixcImxpbmtcIjpcIkNhc2VTdHVkeTZfV2hvbGVGb29kc19Gb29kX2FuZF9CZXZlcmFnZS5wZGZcIn19LFwidGVhbVwiOlt7XCJuYW1lXCI6XCJTaGFyaSBHb2xkXCIsXCJwb3NpdGlvblwiOlwiRm91bmRlci9DRU9cIixcImVtYWlsXCI6XCJzZ29sZEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkFkcmllbm5lIEtlbXBcIixcInBvc2l0aW9uXCI6XCJCdXNpbmVzcyBMZWFkLCBTdHJhdGVneVwiLFwiZW1haWxcIjpcImFrZW1wQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiU3RlcGhhbmllIEdvZGRhcmRcIixcInBvc2l0aW9uXCI6XCJCdXNpbmVzcyBMZWFkLCBTdHJhdGVneVwiLFwiZW1haWxcIjpcInNnb2RkYXJkQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiSmFja2llIEpvcmdlXCIsXCJwb3NpdGlvblwiOlwiTWVkaWEgU3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcImpqb3JnZUBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIlNhcmEgUmVjb3JkXCIsXCJwb3NpdGlvblwiOlwiQmxvZ2dlci9JbmZsdWVuY2VyIFJlbGF0aW9uc1wiLFwiZW1haWxcIjpcInNyZWNvcmRAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJTaGFyb24gU2NvdHRcIixcInBvc2l0aW9uXCI6XCJNZWRpYSBzdHJhdGVnaXN0XCIsXCJlbWFpbFwiOlwic3Njb3R0QGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiQXNobGV5IEdhcmluZ1wiLFwicG9zaXRpb25cIjpcIkFjY291bnQgRGlyZWN0b3JcIixcImVtYWlsXCI6XCJhZ2FyaW5nQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiTmF0YXNoYSBOZWxzb25cIixcInBvc2l0aW9uXCI6XCJBY2NvdW50IERpcmVjdG9yIHwgU0VPXCIsXCJlbWFpbFwiOlwibm5lbHNvbkBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIlNoYW5ub24gU21pdGhcIixcInBvc2l0aW9uXCI6XCJNZWRpYSBzdHJhdGVnaXN0XCIsXCJlbWFpbFwiOlwic3NtaXRoQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiUGFtIFNjaGxpY2h0ZXJcIixcInBvc2l0aW9uXCI6XCJNZWRpYSBSZWxhdGlvbnNcIixcImVtYWlsXCI6XCJQc2NobGljaHRlckBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkRpYW5hIE1hbm5cIixcInBvc2l0aW9uXCI6XCJBY2NvdW50IERpcmVjdG9yXCIsXCJlbWFpbFwiOlwiZG1hbm5AZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJKaWxsIEVkZ2V3b3J0aFwiLFwicG9zaXRpb25cIjpcIkFjY291bnQgRGlyZWN0b3JcIixcImVtYWlsXCI6XCJqZWRnZXdvcnRoQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiS3JpcyBFbGxlbmJlcmdcIixcInBvc2l0aW9uXCI6XCJFbnRlcnRhaW5tZW50IExlYWRcIixcImVtYWlsXCI6XCJrZWxsZW5iZXJnQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiRGlhbmEgTW9lY2tcIixcInBvc2l0aW9uXCI6XCJBbmFseXRpY3MvQWNjb3VudCBTdXBwb3J0XCIsXCJlbWFpbFwiOlwiZG1vZWNrQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiS3ltIENsZXZlbGFuZFwiLFwicG9zaXRpb25cIjpcIkFjY291bnQgQ29vcmRpbmF0b3JcIixcImVtYWlsXCI6XCJrY2xldmVsYW5kQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiSmFtaSBFaWRzdm9sZFwiLFwicG9zaXRpb25cIjpcIlNvY2lhbCBNZWRpYSBCdXNpbmVzcyBMZWFkXCIsXCJlbWFpbFwiOlwiamVpZHN2b2xkQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiVmFuZXNzYSBTaGFuYWhhblwiLFwicG9zaXRpb25cIjpcIkFuYWx5dGljc1wiLFwiZW1haWxcIjpcInZzaGFuYWhhbkBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkFzaGxleSBDbGluZVwiLFwicG9zaXRpb25cIjpcIlNvY2lhbCBNZWRpYSBTdHJhdGVnaXN0XCIsXCJlbWFpbFwiOlwiYWNsaW5lQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiS2VsbGllIEFyZW5zXCIsXCJwb3NpdGlvblwiOlwiU29jaWFsIE1lZGlhIEFjY3QgTWFuYWdlclwiLFwiZW1haWxcIjpcImthcmVuc0Bnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkphbWllIERhZGFudFwiLFwicG9zaXRpb25cIjpcIlNvY2lhbCBDb25zdW1lciBDdXN0b21lciBTZXJ2aWNlXCIsXCJlbWFpbFwiOlwiamRhZGFudEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkJyaWFubmEgSm9uc3NvblwiLFwicG9zaXRpb25cIjpcIlNvY2lhbCBNZWRpYSBDb21tdW5pdHkgTWFuYWdlclwiLFwiZW1haWxcIjpcImJqb25zc29uQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiQ2FtZXJvbiBKb25zc29uXCIsXCJwb3NpdGlvblwiOlwiRGlnaXRhbCBTdHJhdGVnaXN0XCIsXCJlbWFpbFwiOlwiY2pvbnNzb25AZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJMYXVyZW4gQ293bGVzXCIsXCJwb3NpdGlvblwiOlwiRGlnaXRhbC9Tb2NpYWwgU3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcImxjb3dsZXNAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJNZWxpc3NhIEFuZ2VydFwiLFwicG9zaXRpb25cIjpcIlNvY2lhbCBNZWRpYSBTdHJhdGVnaXN0XCIsXCJlbWFpbFwiOlwibWFuZ2VydEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkFsbGlzb24gSGlub2pvc2FcIixcInBvc2l0aW9uXCI6XCJDRk9cIixcImVtYWlsXCI6XCJhaGlub2pvc2FAZ29sZHByLmNvbVwifV19OyIsIkluZGV4ID1cblxuICB2YWxzOiBbXVxuICBzZWN0aW9uOiAnaG9tZSdcbiAgdmlzOiBmYWxzZVxuICBjYWNoZTpcbiAgICB3aW5kb3c6IHdpbmRvd1xuICAgIHN0aWNraWVkOiBmYWxzZVxuICAgIGxheGluOiB7fVxuXG4gIGk6IC0+XG5cbiAgICBpZiBsb2NhdGlvbi5ob3N0bmFtZSBpcyAnd3d3LmdvbGRwci5jb20nIGFuZCBsb2NhdGlvbi5wcm90b2NvbCBpc250ICdodHRwczonXG4gICAgICBpZiBsb2NhdGlvbi5oYXNoIGlzbnQgXCJcIlxuICAgICAgICBsb2NhdGlvbiA9ICdodHRwczovL3d3dy5nb2xkcHIuY29tLycgKyBsb2NhdGlvbi5oYXNoXG4gICAgICBlbHNlXG4gICAgICAgIGxvY2F0aW9uID0gJ2h0dHBzOi8vd3d3LmdvbGRwci5jb20vJ1xuXG4gICAgaWYgbG9jYXRpb24uaG9zdG5hbWUgaXMgJ2dvbGRwci5jb20nXG4gICAgICBpZiBsb2NhdGlvbi5oYXNoIGlzbnQgXCJcIlxuICAgICAgICBsb2NhdGlvbiA9ICdodHRwczovL3d3dy5nb2xkcHIuY29tLycgKyBsb2NhdGlvbi5oYXNoXG4gICAgICBlbHNlXG4gICAgICAgIGxvY2F0aW9uID0gJ2h0dHBzOi8vd3d3LmdvbGRwci5jb20vJ1xuICAgIFxuXG4gICAgSW5kZXguY2FjaGUud2luZG93ID0gJCh3aW5kb3cpXG4gICAgaWYgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlIGlzbnQgdW5kZWZpbmVkXG4gICAgICBJbmRleC52aXMgPSBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGVcbiAgICAgIHNldEludGVydmFsIEluZGV4LnZpc2libGUsIDIwMFxuXG5cbiAgICBpZiBJbmRleC5jYWNoZS53aW5kb3cud2lkdGgoKSA+IDEwMDBcbiAgICAgIHNldEludGVydmFsIEluZGV4LmhlYWRlciwgNTBcblxuICAgIEluZGV4LmxheGNhY2hlKClcbiAgICBzZXRJbnRlcnZhbCBJbmRleC5jaGVjaywgMTAwXG4gICAgc2V0SW50ZXJ2YWwgSW5kZXgubWVudSwgNTAwXG5cbiAgICBJbmRleC5oYW5kbGVycygpXG4gICAgY29uc29sZS5sb2cgJ0luZGV4LmkoKSdcblxuXG4gIHZpc2libGU6IC0+XG4gICAgaWYgSW5kZXgudmlzIGlzbnQgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlXG4gICAgICBJbmRleC52aXMgPSBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGVcbiAgICAgIF8ub2ZmICcuYmx1ZUNpcmNsZSdcbiAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgXy5vbiAnLmJsdWVDaXJjbGUnXG4gICAgICAsIDEwXG5cbiAgaGFuZGxlcnM6IC0+XG5cbiAgICAkKCdcbiAgICAgIGhlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gYS5vcHRpb24sIC5tb2JpbGUgPiAuaW5uZXIgPiAubWVudSA+IGEub3B0aW9uLFxuICAgICAgaGVhZGVyID4gLmlubmVyIGEubG9nb1xuICAgICcpLmNsaWNrIEluZGV4Lm9wdGlvblxuICAgICQoJy5idXJnZXInKS5jbGljayBJbmRleC5idXJnZXJcblxuICBidXJnZXI6IC0+XG4gICAgXy5zd2FwICcubW9iaWxlLCAuYnVyZ2VyLCAuYnVyZ2VyID4gLmlubmVyID4gLm1lbnUnXG5cbiAgb3B0aW9uOiAoZXZlbnQpIC0+XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBoYXNoID0gJCh0aGlzKS5kYXRhICdhbmNob3InXG4gICAgXy5vZmYgJ2hlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gLm9wdGlvbiwgLm1vYmlsZSA+IC5pbm5lciA+IC5tZW51ID4gLm9wdGlvbidcbiAgICBfLm9mZiAnLm1vYmlsZSwgLmJ1cmdlcidcbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAkKCdodG1sLCBib2R5Jykuc2Nyb2xsVG8gXCIjI3toYXNofVwiLFxuICAgICAgICBkdXJhdGlvbjogNTBcbiAgICAgICAgb2Zmc2V0OiAtNjBcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSBoYXNoXG4gICAgLCAyMDBcblxuICBoZWFkZXI6IC0+XG5cbiAgICBzdGlja3lTcG90ID0gMzAwXG5cbiAgICBpZiBJbmRleC5jYWNoZS53aW5kb3cuc2Nyb2xsVG9wKCkgPiBzdGlja3lTcG90IGFuZCBJbmRleC5jYWNoZS5zdGlja2llZCBpcyBmYWxzZVxuICAgICAgXy5vbiAnI3N0aWNreSdcbiAgICAgIEluZGV4LmNhY2hlLnN0aWNraWVkID0gdHJ1ZVxuXG4gICAgaWYgSW5kZXguY2FjaGUud2luZG93LnNjcm9sbFRvcCgpIDwgc3RpY2t5U3BvdCBhbmQgSW5kZXguY2FjaGUuc3RpY2tpZWQgaXMgdHJ1ZVxuICAgICAgXy5vZmYgJyNzdGlja3knXG4gICAgICBJbmRleC5jYWNoZS5zdGlja2llZCA9IG9mZlxuXG4gIG1lbnU6IC0+XG5cbiAgICAkKCcuc2VjdGlvbicpLmVhY2ggKGksIGVsKSAtPlxuICAgICAgc2VjdGlvbiA9ICQoZWwpLmRhdGEgJ3NlY3Rpb24nXG4gICAgICBpZiBJbmRleC5pblZpZXdwb3J0IGVsXG4gICAgICAgIF8ub2ZmICdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IC5vcHRpb24sIC5tb2JpbGUgPiAuaW5uZXIgPiAubWVudSA+IC5vcHRpb24nXG4gICAgICAgIF8ub24gXCIub3B0aW9uXyN7c2VjdGlvbn1cIlxuICAgICAgICByZXR1cm4gdHJ1ZVxuXG4gIGxheGNhY2hlOiAtPlxuICAgICQoJy5sYXhpbicpLmVhY2ggKGksIGVsKSAtPlxuICAgICAgSW5kZXguY2FjaGUubGF4aW5baV0gPSBlbFxuXG4gIGNoZWNrOiAtPlxuICAgIGZvciBpLCBlbCBvZiBJbmRleC5jYWNoZS5sYXhpblxuXG4gICAgICBpZiBJbmRleC5pblZpZXdwb3J0IGVsXG4gICAgICAgIFtwZXJjLCBkaWZmXSA9IEluZGV4LnZpZXdhYmxlIGVsXG4gICAgICAgIGplbCA9ICQoZWwpXG5cbiAgICAgICAgdGhyZXNoID0gamVsLmRhdGEgJ3RocmVzaCdcbiAgICAgICAgdGhyZXNoID0gNTAgaWYgdGhyZXNoIGlzIHVuZGVmaW5lZFxuXG4gICAgICAgIGlmIHBlcmMgPiB0aHJlc2ggYW5kIGplbC5oYXNDbGFzcyAnb2ZmJ1xuICAgICAgICAgIF8ub24gamVsXG4gICAgICAgIGlmIHBlcmMgPCB0aHJlc2ggYW5kIGplbC5oYXNDbGFzcyAnb24nXG4gICAgICAgICAgXy5vZmYgamVsXG5cbiAgICAgICAgIyMjXG4gICAgICAgIGlmIEluZGV4LmNhY2hlLndpbmRvdy53aWR0aCgpID4gMTAwMFxuICAgICAgICAgIGlmIGplbC5oYXNDbGFzcyAnbGF4aW5fdmVydCdcbiAgICAgICAgICAgIHZhbCA9IE1hdGgucm91bmQoZGlmZilcbiAgICAgICAgICAgICN2YWwgPSBNYXRoLnJvdW5kKGRpZmYpXG4gICAgICAgICAgICBpZiBJbmRleC52YWxzP1tpXSBpc250IHZhbCozXG4gICAgICAgICAgICAgIGplbC5maW5kKCcuaW5uZXI6Zmlyc3QnKS5jc3MgJ3RyYW5zZm9ybScsIFwidHJhbnNsYXRlM2QoMCwgI3t2YWwqM31weCwgMHB4KVwiXG4gICAgICAgICAgICAgIGplbC5maW5kKCcub3ZlcmxheScpLmNzcyAndHJhbnNmb3JtJywgXCJ0cmFuc2xhdGUzZCgwLCAje3ZhbCoyfXB4LCAwcHgpXCJcbiAgICAgICAgICAgICAgamVsLmZpbmQoJy5vdmVybGF5ID4gLmlubmVyJykuY3NzICd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZTNkKDAsICN7dmFsLzV9cHgsIDBweClcIlxuICAgICAgICAgICAgICBJbmRleC52YWxzW2ldID0gdmFsKjNcbiAgICAgICAgIyMjXG4gICBcbiAgaW5WaWV3cG9ydDogKGVsKSAtPlxuXG4gICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICByZXR1cm4oXG4gICAgICAocmVjdC50b3AgPj0gMCB8fCByZWN0LmJvdHRvbSA+PSAwKSAmJlxuICAgICAgKHJlY3QudG9wIDw9IHdpbmRvdy5pbm5lckhlaWdodCB8fCByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgKVxuXG4gIHZpZXdhYmxlOiAoZWwpIC0+XG4gICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgaGVpZ2h0ID0gcmVjdC5ib3R0b20tcmVjdC50b3BcblxuICAgIGVsTWlkZGxlID0gcmVjdC50b3AgKyBoZWlnaHQvMlxuICAgIHdpbk1pZGRsZSA9IHdpbmRvdy5pbm5lckhlaWdodC8yXG4gICAgbWF4ID0gd2luZG93LmlubmVySGVpZ2h0LzIgKyBoZWlnaHQvMlxuICAgIGRpZmYgPSB3aW5NaWRkbGUtZWxNaWRkbGVcbiAgICBwZXJjID0gMTAwIC0gTWF0aC5hYnMoZGlmZikqMTAwL21heFxuICAgIG5vbmFicyA9IE1hdGguYWJzKGRpZmYpKjEwMC9tYXhcbiAgICBub25hYnMgPSAtbm9uYWJzIGlmIGRpZmYgPCAwXG5cbiAgICByZXR1cm4gW3BlcmMsIG5vbmFic11cblxuIl19
