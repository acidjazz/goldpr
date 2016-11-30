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
  "clients": ["invisalign", "galderma", "biopharmx", "natera", "coolsculpting", "restylane", "dysport", "sculptra", "wholefoods", "haggens", "abbot", "generalmills", "iteris", "kia", "lifelock", "mattel", "mazda", "mitsubishi", "nike", "nestle", "newbalance", "redbull", "tmobile", "xbox", "obi", "sema", "mixim", "hansens", "tylenol", "drybar"],
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJjb25maWcuY29mZmVlIiwiaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUEsQ0FBQSxHQUVFO0VBQUEsQ0FBQSxFQUFHLFNBQUE7V0FDRCxJQUFDLENBQUEsT0FBRCxHQUFXLFdBQUEsQ0FBWSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxJQUFiLENBQVosRUFBNkIsR0FBN0I7RUFEVixDQUFIO0VBR0EsQ0FBQSxFQUNFO0lBQUEsTUFBQSxFQUFRLEtBQVI7SUFDQSxPQUFBLEVBQVMsQ0FEVDtHQUpGO0VBT0EsSUFBQSxFQUFNLFNBQUMsRUFBRCxFQUFLLE1BQUwsRUFBbUIsR0FBbkI7O01BQUssU0FBTzs7O01BQU8sTUFBSTs7SUFFM0IsSUFBRyxDQUFBLENBQUEsRUFBQSxZQUFrQixNQUFsQixDQUFIO01BQ0UsRUFBQSxHQUFLLENBQUEsQ0FBRSxFQUFGLEVBRFA7O0lBR0EsSUFBRyxNQUFBLEtBQVksS0FBZjtNQUNFLEVBQUUsQ0FBQyxXQUFILENBQWUsTUFBZixFQURGOztJQUdBLElBQUcsR0FBQSxLQUFTLEtBQVo7TUFDRSxFQUFFLENBQUMsUUFBSCxDQUFZLEdBQVosRUFERjs7QUFHQSxXQUFPO0VBWEgsQ0FQTjtFQW9CQSxHQUFBLEVBQUssU0FBQyxFQUFELEVBQUssQ0FBTDs7TUFBSyxJQUFFOztJQUVWLElBQUcsQ0FBQyxDQUFDLE1BQUYsSUFBYSxDQUFDLENBQUMsT0FBRixHQUFZLENBQTVCO01BRUUsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsS0FBVixFQUFpQixRQUFqQjtNQUNBLFVBQUEsQ0FBVyxTQUFBO1FBQ1QsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsUUFBVixFQUFvQixLQUFwQjtlQUNBLElBQUMsQ0FBQSxJQUFELENBQU0sRUFBTixFQUFVLElBQVYsRUFBZ0IsS0FBaEI7TUFGUyxDQUFYLEVBR0UsQ0FBQyxDQUFDLE9BQUYsR0FB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QUMscUJBQUgsQ0FBQTtBQUVQLFdBQ0UsQ0FBQyxJQUFJLENBQUMsR0FBTCxJQUFZLENBQVosSUFBaUIsSUFBSSxDQUFDLE1BQUwsSUFBZSxDQUFqQyxDQUFBLElBQ0EsQ0FBQyxJQUFJLENBQUMsR0FBTCxJQUFZLE1BQU0sQ0FBQyxXQUFuQixJQUFrQyxJQUFJLENBQUMsTUFBTCxJQUFlLE1BQU0sQ0FBQyxXQUF6RDtFQU5RLENBakhaO0VBMEhBLFFBQUEsRUFBVSxTQUFDLEVBQUQ7QUFDUixRQUFBO0lBQUEsSUFBQSxHQUFPLEVBQUUsQ0FBQyxxQkFBSCxDQUFBO0lBQ1AsTUFBQSxHQUFTLElBQUksQ0FBQyxNQUFMLEdBQVksSUFBSSxDQUFDO0lBRTFCLFFBQUEsR0FBVyxJQUFJLENBQUMsR0FBTCxHQUFXLE1BQUEsR0FBTztJQUM3QixTQUFBLEdBQVksTUFBTSxDQUFDLFdBQVAsR0FBbUI7SUFDL0IsR0FBQSxHQUFNLE1BQU0sQ0FBQyxXQUFQLEdBQW1CLENBQW5CLEdBQXVCLE1BQUEsR0FBTztJQUNwQyxJQUFBLEdBQU8sU0FBQSxHQUFVO0lBQ2pCLElBQUEsR0FBTyxHQUFBLEdBQU0sSUFBSSxDQUFDLEdBQUwsQ0FBUyxJQUFULENBQUEsR0FBZSxHQUFmLEdBQW1CO0lBQ2hDLE1BQUEsR0FBUyxJQUFJLENBQUMsR0FBTCxDQUFTLElBQVQsQ0FBQSxHQUFlLEdBQWYsR0FBbUI7SUFDNUIsSUFBb0IsSUFBQSxHQUFPLENBQTNCO01BQUEsTUFBQSxHQUFTLENBQUMsT0FBVjs7QUFFQSxXQUFPLENBQUMsSUFBRCxFQUFPLE1BQVA7RUFaQyxDQTFIViIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJfID1cblxuICBpOiAtPlxuICAgIEBjb25zb2xlID0gc2V0SW50ZXJ2YWwoQGRldGVjdC5iaW5kKEApLCAyMDApXG5cbiAgcDpcbiAgICBvZmZpbmc6IGZhbHNlXG4gICAgb2ZmdGltZTogMFxuXG4gIHR1cm46IChlbCwgcmVtb3ZlPWZhbHNlLCBhZGQ9ZmFsc2UpIC0+XG5cbiAgICBpZiBlbCBub3QgaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgIGVsID0gJChlbClcblxuICAgIGlmIHJlbW92ZSBpc250IGZhbHNlXG4gICAgICBlbC5yZW1vdmVDbGFzcyhyZW1vdmUpXG5cbiAgICBpZiBhZGQgaXNudCBmYWxzZVxuICAgICAgZWwuYWRkQ2xhc3MoYWRkKVxuXG4gICAgcmV0dXJuIHRydWVcblxuICBvZmY6IChlbCwgcD17fSkgLT5cblxuICAgIGlmIHAub2ZmaW5nIGFuZCBwLm9mZnRpbWUgPiAwXG5cbiAgICAgIEB0dXJuIGVsLCBmYWxzZSwgJ29mZmluZydcbiAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgQHR1cm4gZWwsICdvZmZpbmcnLCBmYWxzZVxuICAgICAgICBAdHVybiBlbCwgJ29uJywgJ29mZidcbiAgICAgICwgcC5vZmZ0aW1lKjEwMDAgKyAxMDBcblxuICAgIGVsc2VcbiAgICAgIEB0dXJuIGVsLCAnb24nLCAnb2ZmJ1xuXG4gICAgcmV0dXJuXG5cbiAgb246IChlbCwgcCkgLT5cbiAgICBAdHVybiBlbCwgJ29mZicsICdvbidcblxuICBzd2FwOiAoZWwsIHApIC0+XG5cbiAgICBpZiBlbCBub3QgaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgIGVsID0gJChlbClcblxuICAgIGlmIGVsLmhhc0NsYXNzICdvZmYnXG4gICAgICBAb24gZWwsIHBcbiAgICBlbHNlXG4gICAgICBAb2ZmIGVsLCBwXG5cbiAgICByZXR1cm5cblxuICBlbmNvZGU6IChzdHIpIC0+XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpXG4gICAgICAucmVwbGFjZSgvIS9nLCAnJTIxJylcbiAgICAgIC5yZXBsYWNlKC8nL2csICclMjcnKVxuICAgICAgLnJlcGxhY2UoL1xcKC9nLCAnJTI4JylcbiAgICAgIC5yZXBsYWNlKC9cXCkvZywgJyUyOScpXG4gICAgICAucmVwbGFjZSgvXFwqL2csICclMkEnKVxuICAgICAgLnJlcGxhY2UoLyUyMC9nLCAnKycpXG5cbiAgdDogKGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZSkgLT5cbiAgICBfZ2FxLnB1c2ggWydfdHJhY2tFdmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZV1cblxuICByYW5kOiAobWluLCBtYXgpIC0+XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCkgKyBtaW5cblxuICBsb2FkOiAoc2NyaXB0LCBpbml0aWF0ZSwgY29tcGxldGUpIC0+XG5cbiAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgJ3NjcmlwdCdcbiAgICBlbC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCdcbiAgICBlbC5zcmMgPSBzY3JpcHRcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyICdsb2FkJyAsIChlKSAtPlxuICAgICAgY29tcGxldGUoKSBpZiB0eXBlb2YgY29tcGxldGUgaXMgJ2Z1bmN0aW9uJ1xuICAgICAgd2luZG93W2luaXRpYXRlXS5pKCkgaWYgaW5pdGlhdGUgaXNudCB1bmRlZmluZWQgYW5kIGluaXRpYXRlIGlzbnQgZmFsc2VcbiAgICAsIGZhbHNlXG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKVxuXG4gIGxsYzogLT5cbiAgICBhc2NpaSA9IFwiXCJcIlxuXG4gICAgICAlY21tbS8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uL21tbVxuICAgICAgbW1vLi4uLi4uLi4uLi4uLi4uLi06Oi8vOjotLi4uLi4uLi06Ojo6Ojo6Ojo6Ojo6LS4uLi4uLi4uLTo6Ly8vOi0ub21tXG4gICAgICBtZC0uLi4uLi4uLi4uLi4uOit5aGRkZGRkZGh5Ky0uLi4uL2RkZGRkZGRkZGRkZGQrLi4uLi4uL3NoZGRkZGRkZHlvZG1cbiAgICAgIG1vLi4uLi4uLi4uLi4uLi1obW1taHl5eXlkbW1taDouLi4vbW1tbWhoaGhoaGhoaCsuLi4uOnlkbW1kaHl5eWhkZG9vbVxuICAgICAgbS0uLi4uLi4uLi4uLi4uLi1zczotLi4uLi15bW1teS4uLi9tbW1tLS0tLS0tLS0tLi4uLjpkbW1tczotLi4uLTovLi1tXG4gICAgICBkLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLnltbW15Li4uL21tbW0tLytvb28rOi0uLi4ueW1tbXktOitvb28rLy0uLmRcbiAgICAgIGguLi4uLi4uLi4uLi4uLi4uLi4uLi4uLjpzbW1tZDouLi4vbW1tbWhtbW1tbW1kaCsuLi5kbW1tc2hkbW1tbW1taHMtaFxuICAgICAgaC4uLi4uLi4uLi4uLi4uLi4uLi4uLjpzZG1tZHk6Li4uLjpoaGRobysvLyt5bW1tbSsuLmRtbW1keW8vLytzZG1tbWhoXG4gICAgICBkLi4uLi4uLi4uLi4uLi4uLi4uLSt5ZG1tZHkvLi4uLi4uLi0tOi4uLi4uLi5zbW1taC4ueW1tbXMuLi4uLi46bW1tbW1cbiAgICAgIG0tLi4uLi4uLi4uLi4uLi4tOnNobW1tZHMvLS0tLS0uLi4uOnMvLS0uLi4tOmhtbW1zLi46ZG1tZC8tLi4uLW9tbW1tbVxuICAgICAgbW8uLi4uLi4uLi4uLi4uLmhtbW1tbW1oaGhoaGhoaC4uLitkbW1kaHl5eWhkbW1teS0uLi4vaG1tbWh5eXlobW1tZGhtXG4gICAgICBtZC0uLi4uLi4uLi4uLi4uZGRkZGRkZGRkZGRkZGRkLi4uLStzaGRkZGRkZGRoeS8tLi4uLi4tb3lkZGRkZGRkaG86ZG1cbiAgICAgIG1tby4uLi4uLi4uLi4uLi46Ojo6Ojo6Ojo6Ojo6OjouLi4uLi4uLTovLy86Oi0uLi4uLi4uLi4uLi06Ly8vOi0uLm9tbVxuICAgICAgbW1tLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4vbW1tXG5cbiAgICAgIDo6IHN5bnRhY3RpYyBzdWdhciBieSAyNTZcbiAgICAgIDo6IGh0dHA6Ly8yNTYuaW8vXG4gICAgICA6OiAje2NvbmZpZy5tZXRhLnJlcG99XG4gICAgXCJcIlwiXG4gICAgY29uc29sZS5sb2cgYXNjaWksIFwiY29sb3I6IGdyZXk7IGZvbnQtZmFtaWx5OiBNZW5sbywgbW9ub3NwYWNlO1wiXG5cbiAgZGV0ZWN0OiAtPlxuICAgIGlmICgoKHdpbmRvdy5vdXRlckhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCkgPiAxMDApIHx8ICgod2luZG93Lm91dGVyV2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aCkgPiAxMDApKVxuICAgICAgQGxsYygpXG4gICAgICBjbGVhckludGVydmFsIEBjb25zb2xlXG5cbl8uaSgpXG4iLCJjb25maWcgPSB7XCJjbGllbnRzXCI6W1wiaW52aXNhbGlnblwiLFwiZ2FsZGVybWFcIixcImJpb3BoYXJteFwiLFwibmF0ZXJhXCIsXCJjb29sc2N1bHB0aW5nXCIsXCJyZXN0eWxhbmVcIixcImR5c3BvcnRcIixcInNjdWxwdHJhXCIsXCJ3aG9sZWZvb2RzXCIsXCJoYWdnZW5zXCIsXCJhYmJvdFwiLFwiZ2VuZXJhbG1pbGxzXCIsXCJpdGVyaXNcIixcImtpYVwiLFwibGlmZWxvY2tcIixcIm1hdHRlbFwiLFwibWF6ZGFcIixcIm1pdHN1YmlzaGlcIixcIm5pa2VcIixcIm5lc3RsZVwiLFwibmV3YmFsYW5jZVwiLFwicmVkYnVsbFwiLFwidG1vYmlsZVwiLFwieGJveFwiLFwib2JpXCIsXCJzZW1hXCIsXCJtaXhpbVwiLFwiaGFuc2Vuc1wiLFwidHlsZW5vbFwiLFwiZHJ5YmFyXCJdLFwiY29sb3JcIjp7XCJibGFjazFcIjpcIiMwMDAwMDBcIixcIndoaXRlMVwiOlwiI0ZGRkZGRlwiLFwid2hpdGUyXCI6XCIjRjdFRUVBXCIsXCJyZWQxXCI6XCIjRUU2OTdBXCIsXCJibHVlMVwiOlwiI0QxRTBFQlwiLFwiZ29sZDFcIjpcIiNCMDk3NkRcIn0sXCJmb250XCI6e1wiY29weTFcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjE2cHhcIn0sXCJjb3B5MlwiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gbWVkaXVtXCIsXCJmb250LXNpemVcIjpcIjE2cHhcIn0sXCJjb3B5M1wiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gbGlnaHRcIixcImZvbnQtc2l6ZVwiOlwiMTRweFwifSxcImNvcHk0XCI6e1wiZm9udC1mYW1pbHlcIjpcImdvdGhhbSBib2xkXCIsXCJmb250LXNpemVcIjpcIjIwcHhcIn0sXCJjb3B5NVwiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gbGlnaHRcIixcImZvbnQtc2l6ZVwiOlwiMTJweFwifSxcImNvcHk2XCI6e1wiZm9udC1mYW1pbHlcIjpcImdvdGhhbSBtZWRpdW1cIixcImZvbnQtc2l6ZVwiOlwiMTRweFwifSxcImNvcHk3XCI6e1wiZm9udC1mYW1pbHlcIjpcImdvdGhhbSBib2xkXCIsXCJmb250LXNpemVcIjpcIjEycHhcIn0sXCJoMVwiOntcImZvbnQtZmFtaWx5XCI6XCJuZXV0cmF0ZXh0IGJvbGRcIixcImZvbnQtc2l6ZVwiOlwiNDBweFwifSxcImgyXCI6e1wiZm9udC1mYW1pbHlcIjpcIm5ldXRyYXRleHQgZGVtaVwiLFwiZm9udC1zaXplXCI6XCIyMHB4XCJ9LFwiaDNcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjMwcHhcIn0sXCJoNFwiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gYm9sZFwiLFwiZm9udC1zaXplXCI6XCIzMHB4XCJ9LFwiaDVcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjIwcHhcIn0sXCJoNlwiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gYm9va1wiLFwiZm9udC1zaXplXCI6XCIzMDBweFwifX0sXCJtZW51XCI6W1wic3RhbmRvdXRcIixcImFwcHJvYWNoXCIsXCJ3b3JrXCIsXCJzZXJ2aWNlc1wiLFwidGVhbVwiLFwiY2xpZW50c1wiLFwiY29udGFjdFwiXSxcIm1ldGFcIjp7XCJ0aXRsZVwiOlwiR29sZCBQUlwiLFwidXJsXCI6XCJodHRwOi8vd3d3LmdvbGRwci5jb20vXCIsXCJyZXBvXCI6XCJodHRwOi8vd3d3LmdpdGh1Yi5jb20vYWNpZGphenovZ29sZHByXCIsXCJkZXNjcmlwdGlvblwiOlwiV2UgaGVscCBjb21wYW5pZXMgZ3Jvd1wiLFwia2V5d29yZHNcIjpcIndvbWVucyBiZWF1dHkgcHIsIHdvbWVucyBoZWFsdGggcHIsIHNvY2lhbCBtZWRpYVwiLFwiaW1hZ2VcIjpcImltZy9zaGFyZS5qcGdcIn0sXCJzb2NpYWxcIjp7XCJmYWNlYm9va1wiOlwiaHR0cDovL3d3dy5mYWNlYm9vay5jb20vZ29sZHByXCIsXCJ0d2l0dGVyXCI6XCJodHRwOi8vd3d3LnR3aXR0ZXIuY29tL2dvbGRwcl9cIixcImluc3RhZ3JhbVwiOlwiaHR0cDovL3d3dy5pbnN0YWdyYW0uY29tL2dvbGRwclwiLFwibWFpbFwiOlwiaGVsbG9AZ29sZHByLmNvbVwiLFwibWFwXCI6XCJodHRwczovL2dvby5nbC9tYXBzL1NUTmZhNnpzMzRzXCIsXCJwaG9uZVwiOjk0OTc0MzM5MTF9LFwic3R1ZGllc1wiOntcIjFcIjp7XCJuYW1lXCI6XCJDYXNlIFN0dWR5IDFcIixcInR5cGVcIjpcIkhlYWx0aCBhbmQgQmVhdXR5XCIsXCJsaW5rXCI6XCJDYXNlU3R1ZHkxX1Jlc3R5bGFuZV9IZWFsdGhfYW5kX0JlYXV0eS5wZGZcIixcInZpZGVvXCI6XCJodHRwczovL3ZpbWVvLmNvbS8xNTg0MzIxOTlcIn0sXCIyXCI6e1wibmFtZVwiOlwiQ2FzZSBTdHVkeSAyXCIsXCJ0eXBlXCI6XCJIZWFsdGggYW5kIEJlYXV0eVwiLFwibGlua1wiOlwiQ2FzZVN0dWR5Ml9Db29sc2N1bHB0aW5nX0hlYWx0aF9hbmRfQmVhdXR5LnBkZlwiLFwidmlkZW9cIjpcImh0dHBzOi8vdmltZW8uY29tLzE1ODQzMTg2MVwifSxcIjNcIjp7XCJuYW1lXCI6XCJDYXNlIFN0dWR5IDNcIixcInR5cGVcIjpcIkhlYWx0aCBhbmQgQmVhdXR5XCIsXCJsaW5rXCI6XCJDYXNlU3R1ZHkzX0ludmlzYWxpZ25fSGVhbHRoX2FuZF9CZWF1dHkucGRmXCJ9LFwiNFwiOntcIm5hbWVcIjpcIkNhc2UgU3R1ZHkgNFwiLFwidHlwZVwiOlwiV29tZW4ncyBIZWFsdGhcIixcImxpbmtcIjpcIkNhc2VTdHVkeTRfUGFub3JhbWFOSVBUX1dvbWVuc19IZWFsdGgucGRmXCJ9LFwiNVwiOntcIm5hbWVcIjpcIkNhc2UgU3R1ZHkgNVwiLFwidHlwZVwiOlwiV29tZW4ncyBIZWFsdGhcIixcImxpbmtcIjpcIkNhc2VTdHVkeTVfVmlvbGV0X1dvbWVuc19IZWFsdGgucGRmXCJ9LFwiNlwiOntcIm5hbWVcIjpcIkNhc2UgU3R1ZHkgNlwiLFwidHlwZVwiOlwiRm9vZCBhbmQgQmV2ZXJhZ2VcIixcImxpbmtcIjpcIkNhc2VTdHVkeTZfV2hvbGVGb29kc19Gb29kX2FuZF9CZXZlcmFnZS5wZGZcIn19LFwidGVhbVwiOlt7XCJuYW1lXCI6XCJTaGFyaSBHb2xkXCIsXCJwb3NpdGlvblwiOlwiRm91bmRlci9DRU9cIixcImVtYWlsXCI6XCJzZ29sZEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkFkcmllbm5lIEtlbXBcIixcInBvc2l0aW9uXCI6XCJCdXNpbmVzcyBMZWFkLCBTdHJhdGVneVwiLFwiZW1haWxcIjpcImFrZW1wQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiU3RlcGhhbmllIEdvZGRhcmRcIixcInBvc2l0aW9uXCI6XCJCdXNpbmVzcyBMZWFkLCBTdHJhdGVneVwiLFwiZW1haWxcIjpcInNnb2RkYXJkQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiSmFja2llIEpvcmdlXCIsXCJwb3NpdGlvblwiOlwiTWVkaWEgU3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcImpqb3JnZUBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIlNhcmEgUmVjb3JkXCIsXCJwb3NpdGlvblwiOlwiQmxvZ2dlci9JbmZsdWVuY2VyIFJlbGF0aW9uc1wiLFwiZW1haWxcIjpcInNyZWNvcmRAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJTaGFyb24gU2NvdHRcIixcInBvc2l0aW9uXCI6XCJNZWRpYSBzdHJhdGVnaXN0XCIsXCJlbWFpbFwiOlwic3Njb3R0QGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiU2hhbm5vbiBTbWl0aFwiLFwicG9zaXRpb25cIjpcIk1lZGlhIHN0cmF0ZWdpc3RcIixcImVtYWlsXCI6XCJzc21pdGhAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJQYW0gU2NobGljaHRlclwiLFwicG9zaXRpb25cIjpcIk1lZGlhIFJlbGF0aW9uc1wiLFwiZW1haWxcIjpcIlBzY2hsaWNodGVyQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiRGlhbmEgTWFublwiLFwicG9zaXRpb25cIjpcIkFjY291bnQgRGlyZWN0b3JcIixcImVtYWlsXCI6XCJkbWFubkBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkppbGwgRWRnZXdvcnRoXCIsXCJwb3NpdGlvblwiOlwiQWNjb3VudCBEaXJlY3RvclwiLFwiZW1haWxcIjpcImplZGdld29ydGhAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJLcmlzIEVsbGVuYmVyZ1wiLFwicG9zaXRpb25cIjpcIkVudGVydGFpbm1lbnQgTGVhZFwiLFwiZW1haWxcIjpcImtlbGxlbmJlcmdAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJEaWFuYSBNb2Vja1wiLFwicG9zaXRpb25cIjpcIkFuYWx5dGljcy9BY2NvdW50IFN1cHBvcnRcIixcImVtYWlsXCI6XCJkbW9lY2tAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJLeW0gQ2xldmVsYW5kXCIsXCJwb3NpdGlvblwiOlwiQWNjb3VudCBDb29yZGluYXRvclwiLFwiZW1haWxcIjpcImtjbGV2ZWxhbmRAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJKYW1pIEVpZHN2b2xkXCIsXCJwb3NpdGlvblwiOlwiU29jaWFsIE1lZGlhIEJ1c2luZXNzIExlYWRcIixcImVtYWlsXCI6XCJqZWlkc3ZvbGRAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJBc2hsZXkgQ2xpbmVcIixcInBvc2l0aW9uXCI6XCJTb2NpYWwgTWVkaWEgU3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcImFjbGluZUBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIktlbGxpZSBBcmVuc1wiLFwicG9zaXRpb25cIjpcIlNvY2lhbCBNZWRpYSBBY2N0IE1hbmFnZXJcIixcImVtYWlsXCI6XCJrYXJlbnNAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJKYW1pZSBEYWRhbnRcIixcInBvc2l0aW9uXCI6XCJTb2NpYWwgQ29uc3VtZXIgQ3VzdG9tZXIgU2VydmljZVwiLFwiZW1haWxcIjpcImpkYWRhbnRAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJCcmlhbm5hIEpvbnNzb25cIixcInBvc2l0aW9uXCI6XCJTb2NpYWwgTWVkaWEgQ29tbXVuaXR5IE1hbmFnZXJcIixcImVtYWlsXCI6XCJiam9uc3NvbkBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkNhbWVyb24gSm9uc3NvblwiLFwicG9zaXRpb25cIjpcIkRpZ2l0YWwgU3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcImNqb25zc29uQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiTGF1cmVuIENvd2xlc1wiLFwicG9zaXRpb25cIjpcIkRpZ2l0YWwvU29jaWFsIFN0cmF0ZWdpc3RcIixcImVtYWlsXCI6XCJsY293bGVzQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiTWVsaXNzYSBBbmdlcnRcIixcInBvc2l0aW9uXCI6XCJTb2NpYWwgTWVkaWEgU3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcIm1hbmdlcnRAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJBbGxpc29uIEhpbm9qb3NhXCIsXCJwb3NpdGlvblwiOlwiQ0ZPXCIsXCJlbWFpbFwiOlwiYWhpbm9qb3NhQGdvbGRwci5jb21cIn1dfTsiLCJJbmRleCA9XG5cbiAgdmFsczogW11cbiAgc2VjdGlvbjogJ2hvbWUnXG4gIHZpczogZmFsc2VcbiAgY2FjaGU6XG4gICAgd2luZG93OiB3aW5kb3dcbiAgICBzdGlja2llZDogZmFsc2VcbiAgICBsYXhpbjoge31cblxuICBpOiAtPlxuICAgIFxuXG4gICAgSW5kZXguY2FjaGUud2luZG93ID0gJCh3aW5kb3cpXG4gICAgaWYgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlIGlzbnQgdW5kZWZpbmVkXG4gICAgICBJbmRleC52aXMgPSBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGVcbiAgICAgIHNldEludGVydmFsIEluZGV4LnZpc2libGUsIDIwMFxuXG5cbiAgICBpZiBJbmRleC5jYWNoZS53aW5kb3cud2lkdGgoKSA+IDEwMDBcbiAgICAgIHNldEludGVydmFsIEluZGV4LmhlYWRlciwgNTBcblxuICAgIEluZGV4LmxheGNhY2hlKClcbiAgICBzZXRJbnRlcnZhbCBJbmRleC5jaGVjaywgMTAwXG4gICAgc2V0SW50ZXJ2YWwgSW5kZXgubWVudSwgNTAwXG5cbiAgICBJbmRleC5oYW5kbGVycygpXG4gICAgY29uc29sZS5sb2cgJ0luZGV4LmkoKSdcblxuXG4gIHZpc2libGU6IC0+XG4gICAgaWYgSW5kZXgudmlzIGlzbnQgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlXG4gICAgICBJbmRleC52aXMgPSBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGVcbiAgICAgIF8ub2ZmICcuYmx1ZUNpcmNsZSdcbiAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgXy5vbiAnLmJsdWVDaXJjbGUnXG4gICAgICAsIDEwXG5cbiAgaGFuZGxlcnM6IC0+XG5cbiAgICAkKCdcbiAgICAgIGhlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gYS5vcHRpb24sIC5tb2JpbGUgPiAuaW5uZXIgPiAubWVudSA+IGEub3B0aW9uLFxuICAgICAgaGVhZGVyID4gLmlubmVyIGEubG9nb1xuICAgICcpLmNsaWNrIEluZGV4Lm9wdGlvblxuICAgICQoJy5idXJnZXInKS5jbGljayBJbmRleC5idXJnZXJcblxuICBidXJnZXI6IC0+XG4gICAgXy5zd2FwICcubW9iaWxlLCAuYnVyZ2VyLCAuYnVyZ2VyID4gLmlubmVyID4gLm1lbnUnXG5cbiAgb3B0aW9uOiAoZXZlbnQpIC0+XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBoYXNoID0gJCh0aGlzKS5kYXRhICdhbmNob3InXG4gICAgXy5vZmYgJ2hlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gLm9wdGlvbiwgLm1vYmlsZSA+IC5pbm5lciA+IC5tZW51ID4gLm9wdGlvbidcbiAgICBfLm9mZiAnLm1vYmlsZSwgLmJ1cmdlcidcbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAkKCdodG1sLCBib2R5Jykuc2Nyb2xsVG8gXCIjI3toYXNofVwiLFxuICAgICAgICBkdXJhdGlvbjogNTBcbiAgICAgICAgb2Zmc2V0OiAtNjBcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSBoYXNoXG4gICAgLCAyMDBcblxuICBoZWFkZXI6IC0+XG5cbiAgICBzdGlja3lTcG90ID0gMzAwXG5cbiAgICBpZiBJbmRleC5jYWNoZS53aW5kb3cuc2Nyb2xsVG9wKCkgPiBzdGlja3lTcG90IGFuZCBJbmRleC5jYWNoZS5zdGlja2llZCBpcyBmYWxzZVxuICAgICAgXy5vbiAnI3N0aWNreSdcbiAgICAgIEluZGV4LmNhY2hlLnN0aWNraWVkID0gdHJ1ZVxuXG4gICAgaWYgSW5kZXguY2FjaGUud2luZG93LnNjcm9sbFRvcCgpIDwgc3RpY2t5U3BvdCBhbmQgSW5kZXguY2FjaGUuc3RpY2tpZWQgaXMgdHJ1ZVxuICAgICAgXy5vZmYgJyNzdGlja3knXG4gICAgICBJbmRleC5jYWNoZS5zdGlja2llZCA9IG9mZlxuXG4gIG1lbnU6IC0+XG5cbiAgICAkKCcuc2VjdGlvbicpLmVhY2ggKGksIGVsKSAtPlxuICAgICAgc2VjdGlvbiA9ICQoZWwpLmRhdGEgJ3NlY3Rpb24nXG4gICAgICBpZiBJbmRleC5pblZpZXdwb3J0IGVsXG4gICAgICAgIF8ub2ZmICdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IC5vcHRpb24sIC5tb2JpbGUgPiAuaW5uZXIgPiAubWVudSA+IC5vcHRpb24nXG4gICAgICAgIF8ub24gXCIub3B0aW9uXyN7c2VjdGlvbn1cIlxuICAgICAgICByZXR1cm4gdHJ1ZVxuXG4gIGxheGNhY2hlOiAtPlxuICAgICQoJy5sYXhpbicpLmVhY2ggKGksIGVsKSAtPlxuICAgICAgSW5kZXguY2FjaGUubGF4aW5baV0gPSBlbFxuXG4gIGNoZWNrOiAtPlxuICAgIGZvciBpLCBlbCBvZiBJbmRleC5jYWNoZS5sYXhpblxuXG4gICAgICBpZiBJbmRleC5pblZpZXdwb3J0IGVsXG4gICAgICAgIFtwZXJjLCBkaWZmXSA9IEluZGV4LnZpZXdhYmxlIGVsXG4gICAgICAgIGplbCA9ICQoZWwpXG5cbiAgICAgICAgdGhyZXNoID0gamVsLmRhdGEgJ3RocmVzaCdcbiAgICAgICAgdGhyZXNoID0gNTAgaWYgdGhyZXNoIGlzIHVuZGVmaW5lZFxuXG4gICAgICAgIGlmIHBlcmMgPiB0aHJlc2ggYW5kIGplbC5oYXNDbGFzcyAnb2ZmJ1xuICAgICAgICAgIF8ub24gamVsXG4gICAgICAgIGlmIHBlcmMgPCB0aHJlc2ggYW5kIGplbC5oYXNDbGFzcyAnb24nXG4gICAgICAgICAgXy5vZmYgamVsXG5cbiAgICAgICAgIyMjXG4gICAgICAgIGlmIEluZGV4LmNhY2hlLndpbmRvdy53aWR0aCgpID4gMTAwMFxuICAgICAgICAgIGlmIGplbC5oYXNDbGFzcyAnbGF4aW5fdmVydCdcbiAgICAgICAgICAgIHZhbCA9IE1hdGgucm91bmQoZGlmZilcbiAgICAgICAgICAgICN2YWwgPSBNYXRoLnJvdW5kKGRpZmYpXG4gICAgICAgICAgICBpZiBJbmRleC52YWxzP1tpXSBpc250IHZhbCozXG4gICAgICAgICAgICAgIGplbC5maW5kKCcuaW5uZXI6Zmlyc3QnKS5jc3MgJ3RyYW5zZm9ybScsIFwidHJhbnNsYXRlM2QoMCwgI3t2YWwqM31weCwgMHB4KVwiXG4gICAgICAgICAgICAgIGplbC5maW5kKCcub3ZlcmxheScpLmNzcyAndHJhbnNmb3JtJywgXCJ0cmFuc2xhdGUzZCgwLCAje3ZhbCoyfXB4LCAwcHgpXCJcbiAgICAgICAgICAgICAgamVsLmZpbmQoJy5vdmVybGF5ID4gLmlubmVyJykuY3NzICd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZTNkKDAsICN7dmFsLzV9cHgsIDBweClcIlxuICAgICAgICAgICAgICBJbmRleC52YWxzW2ldID0gdmFsKjNcbiAgICAgICAgIyMjXG4gICBcbiAgaW5WaWV3cG9ydDogKGVsKSAtPlxuXG4gICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICByZXR1cm4oXG4gICAgICAocmVjdC50b3AgPj0gMCB8fCByZWN0LmJvdHRvbSA+PSAwKSAmJlxuICAgICAgKHJlY3QudG9wIDw9IHdpbmRvdy5pbm5lckhlaWdodCB8fCByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgKVxuXG4gIHZpZXdhYmxlOiAoZWwpIC0+XG4gICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgaGVpZ2h0ID0gcmVjdC5ib3R0b20tcmVjdC50b3BcblxuICAgIGVsTWlkZGxlID0gcmVjdC50b3AgKyBoZWlnaHQvMlxuICAgIHdpbk1pZGRsZSA9IHdpbmRvdy5pbm5lckhlaWdodC8yXG4gICAgbWF4ID0gd2luZG93LmlubmVySGVpZ2h0LzIgKyBoZWlnaHQvMlxuICAgIGRpZmYgPSB3aW5NaWRkbGUtZWxNaWRkbGVcbiAgICBwZXJjID0gMTAwIC0gTWF0aC5hYnMoZGlmZikqMTAwL21heFxuICAgIG5vbmFicyA9IE1hdGguYWJzKGRpZmYpKjEwMC9tYXhcbiAgICBub25hYnMgPSAtbm9uYWJzIGlmIGRpZmYgPCAwXG5cbiAgICByZXR1cm4gW3BlcmMsIG5vbmFic11cblxuIl19
