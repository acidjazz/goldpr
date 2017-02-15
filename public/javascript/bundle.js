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
    if (document.location.hostname === 'www.goldpr.com' && document.location.protocol !== 'https:') {
      if (document.location.hash !== "") {
        document.location = 'https://www.goldpr.com/' + document.location.hash;
      } else {
        document.location = 'https://www.goldpr.com/';
      }
    }
    if (document.location.hostname === 'goldpr.com') {
      if (document.location.hash !== "") {
        document.location = 'https://www.goldpr.com/' + document.location.hash;
      } else {
        document.location = 'https://www.goldpr.com/';
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
    console.log('Index.i()');
    if (document.location.hash !== '') {
      return $('html, body').scrollTo("" + document.location.hash, {
        duration: 50,
        offset: -60
      });
    }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJjb25maWcuY29mZmVlIiwiaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUEsQ0FBQSxHQUVFO0VBQUEsQ0FBQSxFQUFHLFNBQUE7V0FDRCxJQUFDLENBQUEsT0FBRCxHQUFXLFdBQUEsQ0FBWSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxJQUFiLENBQVosRUFBNkIsR0FBN0I7RUFEVixDQUFIO0VBR0EsQ0FBQSxFQUNFO0lBQUEsTUFBQSxFQUFRLEtBQVI7SUFDQSxPQUFBLEVBQVMsQ0FEVDtHQUpGO0VBT0EsSUFBQSxFQUFNLFNBQUMsRUFBRCxFQUFLLE1BQUwsRUFBbUIsR0FBbkI7O01BQUssU0FBTzs7O01BQU8sTUFBSTs7SUFFM0IsSUFBRyxDQUFBLENBQUEsRUFBQSxZQUFrQixNQUFsQixDQUFIO01BQ0UsRUFBQSxHQUFLLENBQUEsQ0FBRSxFQUFGLEVBRFA7O0lBR0EsSUFBRyxNQUFBLEtBQVksS0FBZjtNQUNFLEVBQUUsQ0FBQyxXQUFILENBQWUsTUFBZixFQURGOztJQUdBLElBQUcsR0FBQSxLQUFTLEtBQVo7TUFDRSxFQUFFLENBQUMsUUFBSCxDQUFZLEdBQVosRUFERjs7QUFHQSxXQUFPO0VBWEgsQ0FQTjtFQW9CQSxHQUFBLEVBQUssU0FBQyxFQUFELEVBQUssQ0FBTDs7TUFBSyxJQUFFOztJQUVWLElBQUcsQ0FBQyxDQUFDLE1BQUYsSUFBYSxDQUFDLENBQUMsT0FBRixHQUFZLENBQTVCO01BRUUsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsS0FBVixFQUFpQixRQUFqQjtNQUNBLFVBQUEsQ0FBVyxTQUFBO1FBQ1QsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsUUFBVixFQUFvQixLQUFwQjtlQUNBLElBQUMsQ0FBQSxJQUFELENBQU0sRUFBTixFQUFVLElBQVYsRUFBZ0IsS0FBaEI7TUFGUyxDQUFYLEVBR0UsQ0FBQyxDQUFDLE9BQUYsR0FBVSxJQUFWLEdBQWlCLEdBSG5CLEVBSEY7S0FBQSxNQUFBO01BU0UsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsSUFBVixFQUFnQixLQUFoQixFQVRGOztFQUZHLENBcEJMO0VBbUNBLEVBQUEsRUFBSSxTQUFDLEVBQUQsRUFBSyxDQUFMO1dBQ0YsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsS0FBVixFQUFpQixJQUFqQjtFQURFLENBbkNKO0VBc0NBLElBQUEsRUFBTSxTQUFDLEVBQUQsRUFBSyxDQUFMO0lBRUosSUFBRyxDQUFBLENBQUEsRUFBQSxZQUFrQixNQUFsQixDQUFIO01BQ0UsRUFBQSxHQUFLLENBQUEsQ0FBRSxFQUFGLEVBRFA7O0lBR0EsSUFBRyxFQUFFLENBQUMsUUFBSCxDQUFZLEtBQVosQ0FBSDtNQUNFLElBQUMsQ0FBQSxFQUFELENBQUksRUFBSixFQUFRLENBQVIsRUFERjtLQUFBLE1BQUE7TUFHRSxJQUFDLENBQUEsR0FBRCxDQUFLLEVBQUwsRUFBUyxDQUFULEVBSEY7O0VBTEksQ0F0Q047RUFrREEsTUFBQSxFQUFRLFNBQUMsR0FBRDtBQUNOLFdBQU8sa0JBQUEsQ0FBbUIsR0FBbkIsQ0FDTCxDQUFDLE9BREksQ0FDSSxJQURKLEVBQ1UsS0FEVixDQUVMLENBQUMsT0FGSSxDQUVJLElBRkosRUFFVSxLQUZWLENBR0wsQ0FBQyxPQUhJLENBR0ksS0FISixFQUdXLEtBSFgsQ0FJTCxDQUFDLE9BSkksQ0FJSSxLQUpKLEVBSVcsS0FKWCxDQUtMLENBQUMsT0FMSSxDQUtJLEtBTEosRUFLVyxLQUxYLENBTUwsQ0FBQyxPQU5JLENBTUksTUFOSixFQU1ZLEdBTlo7RUFERCxDQWxEUjtFQTJEQSxDQUFBLEVBQUcsU0FBQyxRQUFELEVBQVcsTUFBWCxFQUFtQixLQUFuQixFQUEwQixLQUExQjtXQUNELElBQUksQ0FBQyxJQUFMLENBQVUsQ0FBQyxhQUFELEVBQWdCLFFBQWhCLEVBQTBCLE1BQTFCLEVBQWtDLEtBQWxDLEVBQXlDLEtBQXpDLENBQVY7RUFEQyxDQTNESDtFQThEQSxJQUFBLEVBQU0sU0FBQyxHQUFELEVBQU0sR0FBTjtBQUNKLFdBQU8sSUFBSSxDQUFDLEtBQUwsQ0FBVyxJQUFJLENBQUMsTUFBTCxDQUFBLENBQUEsR0FBZ0IsR0FBM0IsQ0FBQSxHQUFrQztFQURyQyxDQTlETjtFQWlFQSxJQUFBLEVBQU0sU0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixRQUFuQjtBQUVKLFFBQUE7SUFBQSxFQUFBLEdBQUssUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkI7SUFDTCxFQUFFLENBQUMsSUFBSCxHQUFVO0lBQ1YsRUFBRSxDQUFDLEdBQUgsR0FBUztJQUNULEVBQUUsQ0FBQyxnQkFBSCxDQUFvQixNQUFwQixFQUE2QixTQUFDLENBQUQ7TUFDM0IsSUFBYyxPQUFPLFFBQVAsS0FBbUIsVUFBakM7UUFBQSxRQUFBLENBQUEsRUFBQTs7TUFDQSxJQUF3QixRQUFBLEtBQWMsTUFBZCxJQUE0QixRQUFBLEtBQWMsS0FBbEU7ZUFBQSxNQUFPLENBQUEsUUFBQSxDQUFTLENBQUMsQ0FBakIsQ0FBQSxFQUFBOztJQUYyQixDQUE3QixFQUdFLEtBSEY7V0FLQSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQWQsQ0FBMEIsRUFBMUI7RUFWSSxDQWpFTjtFQTZFQSxHQUFBLEVBQUssU0FBQTtBQUNILFFBQUE7SUFBQSxLQUFBLEdBQVEsMmhDQUFBLEdBbUJELE1BQU0sQ0FBQyxJQUFJLENBQUM7V0FFbkIsT0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CLDZDQUFuQjtFQXRCRyxDQTdFTDtFQXFHQSxNQUFBLEVBQVEsU0FBQTtJQUNOLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLE1BQU0sQ0FBQyxXQUE3QixDQUFBLEdBQTRDLEdBQTdDLENBQUEsSUFBcUQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFQLEdBQW9CLE1BQU0sQ0FBQyxVQUE1QixDQUFBLEdBQTBDLEdBQTNDLENBQXpEO01BQ0UsSUFBQyxDQUFBLEdBQUQsQ0FBQTthQUNBLGFBQUEsQ0FBYyxJQUFDLENBQUEsT0FBZixFQUZGOztFQURNLENBckdSOzs7QUEwR0YsQ0FBQyxDQUFDLENBQUYsQ0FBQTs7QUM1R0EsSUFBQTs7QUFBQSxNQUFBLEdBQVM7RUFBQyxTQUFBLEVBQVUsQ0FBQyxZQUFELEVBQWMsVUFBZCxFQUF5QixXQUF6QixFQUFxQyxRQUFyQyxFQUE4QyxlQUE5QyxFQUE4RCxNQUE5RCxFQUFxRSxXQUFyRSxFQUFpRixXQUFqRixFQUE2RixTQUE3RixFQUF1RyxVQUF2RyxFQUFrSCxNQUFsSCxFQUF5SCxNQUF6SCxFQUFnSSxZQUFoSSxFQUE2SSxTQUE3SSxFQUF1SixPQUF2SixFQUErSixRQUEvSixFQUF3SyxjQUF4SyxFQUF1TCxLQUF2TCxFQUE2TCxVQUE3TCxFQUF3TSxRQUF4TSxFQUFpTixPQUFqTixFQUF5TixZQUF6TixFQUFzTyxNQUF0TyxFQUE2TyxRQUE3TyxFQUFzUCxZQUF0UCxFQUFtUSxTQUFuUSxFQUE2USxTQUE3USxFQUF1UixNQUF2UixFQUE4UixLQUE5UixFQUFvUyxNQUFwUyxFQUEyUyxPQUEzUyxFQUFtVCxTQUFuVCxFQUE2VCxTQUE3VCxFQUF1VSxRQUF2VSxFQUFnVixRQUFoVixDQUFYO0VBQXFXLE9BQUEsRUFBUTtJQUFDLFFBQUEsRUFBUyxTQUFWO0lBQW9CLFFBQUEsRUFBUyxTQUE3QjtJQUF1QyxRQUFBLEVBQVMsU0FBaEQ7SUFBMEQsTUFBQSxFQUFPLFNBQWpFO0lBQTJFLE9BQUEsRUFBUSxTQUFuRjtJQUE2RixPQUFBLEVBQVEsU0FBckc7R0FBN1c7RUFBNmQsTUFBQSxFQUFPO0lBQUMsT0FBQSxFQUFRO01BQUMsYUFBQSxFQUFjLGNBQWY7TUFBOEIsV0FBQSxFQUFZLE1BQTFDO0tBQVQ7SUFBMkQsT0FBQSxFQUFRO01BQUMsYUFBQSxFQUFjLGVBQWY7TUFBK0IsV0FBQSxFQUFZLE1BQTNDO0tBQW5FO0lBQXNILE9BQUEsRUFBUTtNQUFDLGFBQUEsRUFBYyxjQUFmO01BQThCLFdBQUEsRUFBWSxNQUExQztLQUE5SDtJQUFnTCxPQUFBLEVBQVE7TUFBQyxhQUFBLEVBQWMsYUFBZjtNQUE2QixXQUFBLEVBQVksTUFBekM7S0FBeEw7SUFBeU8sT0FBQSxFQUFRO01BQUMsYUFBQSxFQUFjLGNBQWY7TUFBOEIsV0FBQSxFQUFZLE1BQTFDO0tBQWpQO0lBQW1TLE9BQUEsRUFBUTtNQUFDLGFBQUEsRUFBYyxlQUFmO01BQStCLFdBQUEsRUFBWSxNQUEzQztLQUEzUztJQUE4VixPQUFBLEVBQVE7TUFBQyxhQUFBLEVBQWMsYUFBZjtNQUE2QixXQUFBLEVBQVksTUFBekM7S0FBdFc7SUFBdVosSUFBQSxFQUFLO01BQUMsYUFBQSxFQUFjLGlCQUFmO01BQWlDLFdBQUEsRUFBWSxNQUE3QztLQUE1WjtJQUFpZCxJQUFBLEVBQUs7TUFBQyxhQUFBLEVBQWMsaUJBQWY7TUFBaUMsV0FBQSxFQUFZLE1BQTdDO0tBQXRkO0lBQTJnQixJQUFBLEVBQUs7TUFBQyxhQUFBLEVBQWMsY0FBZjtNQUE4QixXQUFBLEVBQVksTUFBMUM7S0FBaGhCO0lBQWtrQixJQUFBLEVBQUs7TUFBQyxhQUFBLEVBQWMsYUFBZjtNQUE2QixXQUFBLEVBQVksTUFBekM7S0FBdmtCO0lBQXduQixJQUFBLEVBQUs7TUFBQyxhQUFBLEVBQWMsY0FBZjtNQUE4QixXQUFBLEVBQVksTUFBMUM7S0FBN25CO0lBQStxQixJQUFBLEVBQUs7TUFBQyxhQUFBLEVBQWMsYUFBZjtNQUE2QixXQUFBLEVBQVksT0FBekM7S0FBcHJCO0dBQXBlO0VBQTJzQyxNQUFBLEVBQU8sQ0FBQyxVQUFELEVBQVksVUFBWixFQUF1QixNQUF2QixFQUE4QixVQUE5QixFQUF5QyxNQUF6QyxFQUFnRCxTQUFoRCxFQUEwRCxTQUExRCxDQUFsdEM7RUFBdXhDLE1BQUEsRUFBTztJQUFDLE9BQUEsRUFBUSxTQUFUO0lBQW1CLEtBQUEsRUFBTSx3QkFBekI7SUFBa0QsTUFBQSxFQUFPLHVDQUF6RDtJQUFpRyxhQUFBLEVBQWMsd0JBQS9HO0lBQXdJLFVBQUEsRUFBVyxrREFBbko7SUFBc00sT0FBQSxFQUFRLGVBQTlNO0dBQTl4QztFQUE2L0MsUUFBQSxFQUFTO0lBQUMsVUFBQSxFQUFXLGdDQUFaO0lBQTZDLFNBQUEsRUFBVSxnQ0FBdkQ7SUFBd0YsV0FBQSxFQUFZLGlDQUFwRztJQUFzSSxNQUFBLEVBQU8sa0JBQTdJO0lBQWdLLEtBQUEsRUFBTSxpQ0FBdEs7SUFBd00sT0FBQSxFQUFRLFVBQWhOO0dBQXRnRDtFQUFrdUQsU0FBQSxFQUFVO0lBQUMsR0FBQSxFQUFJO01BQUMsTUFBQSxFQUFPLGNBQVI7TUFBdUIsTUFBQSxFQUFPLG1CQUE5QjtNQUFrRCxNQUFBLEVBQU8sNENBQXpEO01BQXNHLE9BQUEsRUFBUSw2QkFBOUc7S0FBTDtJQUFrSixHQUFBLEVBQUk7TUFBQyxNQUFBLEVBQU8sY0FBUjtNQUF1QixNQUFBLEVBQU8sbUJBQTlCO01BQWtELE1BQUEsRUFBTyxnREFBekQ7TUFBMEcsT0FBQSxFQUFRLDZCQUFsSDtLQUF0SjtJQUF1UyxHQUFBLEVBQUk7TUFBQyxNQUFBLEVBQU8sY0FBUjtNQUF1QixNQUFBLEVBQU8sbUJBQTlCO01BQWtELE1BQUEsRUFBTyw2Q0FBekQ7S0FBM1M7SUFBbVosR0FBQSxFQUFJO01BQUMsTUFBQSxFQUFPLGNBQVI7TUFBdUIsTUFBQSxFQUFPLGdCQUE5QjtNQUErQyxNQUFBLEVBQU8sMkNBQXREO0tBQXZaO0lBQTBmLEdBQUEsRUFBSTtNQUFDLE1BQUEsRUFBTyxjQUFSO01BQXVCLE1BQUEsRUFBTyxnQkFBOUI7TUFBK0MsTUFBQSxFQUFPLHFDQUF0RDtLQUE5ZjtJQUEybEIsR0FBQSxFQUFJO01BQUMsTUFBQSxFQUFPLGNBQVI7TUFBdUIsTUFBQSxFQUFPLG1CQUE5QjtNQUFrRCxNQUFBLEVBQU8sNkNBQXpEO0tBQS9sQjtHQUE1dUQ7RUFBbzdFLE1BQUEsRUFBTztJQUFDO01BQUMsTUFBQSxFQUFPLFlBQVI7TUFBcUIsVUFBQSxFQUFXLGFBQWhDO01BQThDLE9BQUEsRUFBUSxrQkFBdEQ7S0FBRCxFQUEyRTtNQUFDLE1BQUEsRUFBTyxlQUFSO01BQXdCLFVBQUEsRUFBVyx5QkFBbkM7TUFBNkQsT0FBQSxFQUFRLGtCQUFyRTtLQUEzRSxFQUFvSztNQUFDLE1BQUEsRUFBTyxtQkFBUjtNQUE0QixVQUFBLEVBQVcseUJBQXZDO01BQWlFLE9BQUEsRUFBUSxxQkFBekU7S0FBcEssRUFBb1E7TUFBQyxNQUFBLEVBQU8sY0FBUjtNQUF1QixVQUFBLEVBQVcsa0JBQWxDO01BQXFELE9BQUEsRUFBUSxtQkFBN0Q7S0FBcFEsRUFBc1Y7TUFBQyxNQUFBLEVBQU8sYUFBUjtNQUFzQixVQUFBLEVBQVcsOEJBQWpDO01BQWdFLE9BQUEsRUFBUSxvQkFBeEU7S0FBdFYsRUFBb2I7TUFBQyxNQUFBLEVBQU8sY0FBUjtNQUF1QixVQUFBLEVBQVcsa0JBQWxDO01BQXFELE9BQUEsRUFBUSxtQkFBN0Q7S0FBcGIsRUFBc2dCO01BQUMsTUFBQSxFQUFPLGVBQVI7TUFBd0IsVUFBQSxFQUFXLGtCQUFuQztNQUFzRCxPQUFBLEVBQVEsb0JBQTlEO0tBQXRnQixFQUEwbEI7TUFBQyxNQUFBLEVBQU8sZ0JBQVI7TUFBeUIsVUFBQSxFQUFXLHdCQUFwQztNQUE2RCxPQUFBLEVBQVEsb0JBQXJFO0tBQTFsQixFQUFxckI7TUFBQyxNQUFBLEVBQU8sZUFBUjtNQUF3QixVQUFBLEVBQVcsa0JBQW5DO01BQXNELE9BQUEsRUFBUSxtQkFBOUQ7S0FBcnJCLEVBQXd3QjtNQUFDLE1BQUEsRUFBTyxnQkFBUjtNQUF5QixVQUFBLEVBQVcsaUJBQXBDO01BQXNELE9BQUEsRUFBUSx3QkFBOUQ7S0FBeHdCLEVBQWcyQjtNQUFDLE1BQUEsRUFBTyxZQUFSO01BQXFCLFVBQUEsRUFBVyxrQkFBaEM7TUFBbUQsT0FBQSxFQUFRLGtCQUEzRDtLQUFoMkIsRUFBKzZCO01BQUMsTUFBQSxFQUFPLGdCQUFSO01BQXlCLFVBQUEsRUFBVyxrQkFBcEM7TUFBdUQsT0FBQSxFQUFRLHVCQUEvRDtLQUEvNkIsRUFBdWdDO01BQUMsTUFBQSxFQUFPLGdCQUFSO01BQXlCLFVBQUEsRUFBVyxvQkFBcEM7TUFBeUQsT0FBQSxFQUFRLHVCQUFqRTtLQUF2Z0MsRUFBaW1DO01BQUMsTUFBQSxFQUFPLGFBQVI7TUFBc0IsVUFBQSxFQUFXLDJCQUFqQztNQUE2RCxPQUFBLEVBQVEsbUJBQXJFO0tBQWptQyxFQUEyckM7TUFBQyxNQUFBLEVBQU8sZUFBUjtNQUF3QixVQUFBLEVBQVcscUJBQW5DO01BQXlELE9BQUEsRUFBUSx1QkFBakU7S0FBM3JDLEVBQXF4QztNQUFDLE1BQUEsRUFBTyxlQUFSO01BQXdCLFVBQUEsRUFBVyw0QkFBbkM7TUFBZ0UsT0FBQSxFQUFRLHNCQUF4RTtLQUFyeEMsRUFBcTNDO01BQUMsTUFBQSxFQUFPLGtCQUFSO01BQTJCLFVBQUEsRUFBVyxXQUF0QztNQUFrRCxPQUFBLEVBQVEsc0JBQTFEO0tBQXIzQyxFQUF1OEM7TUFBQyxNQUFBLEVBQU8sY0FBUjtNQUF1QixVQUFBLEVBQVcseUJBQWxDO01BQTRELE9BQUEsRUFBUSxtQkFBcEU7S0FBdjhDLEVBQWdpRDtNQUFDLE1BQUEsRUFBTyxjQUFSO01BQXVCLFVBQUEsRUFBVywyQkFBbEM7TUFBOEQsT0FBQSxFQUFRLG1CQUF0RTtLQUFoaUQsRUFBMm5EO01BQUMsTUFBQSxFQUFPLGNBQVI7TUFBdUIsVUFBQSxFQUFXLGtDQUFsQztNQUFxRSxPQUFBLEVBQVEsb0JBQTdFO0tBQTNuRCxFQUE4dEQ7TUFBQyxNQUFBLEVBQU8saUJBQVI7TUFBMEIsVUFBQSxFQUFXLGdDQUFyQztNQUFzRSxPQUFBLEVBQVEscUJBQTlFO0tBQTl0RCxFQUFtMEQ7TUFBQyxNQUFBLEVBQU8saUJBQVI7TUFBMEIsVUFBQSxFQUFXLG9CQUFyQztNQUEwRCxPQUFBLEVBQVEscUJBQWxFO0tBQW4wRCxFQUE0NUQ7TUFBQyxNQUFBLEVBQU8sZUFBUjtNQUF3QixVQUFBLEVBQVcsMkJBQW5DO01BQStELE9BQUEsRUFBUSxvQkFBdkU7S0FBNTVELEVBQXkvRDtNQUFDLE1BQUEsRUFBTyxnQkFBUjtNQUF5QixVQUFBLEVBQVcseUJBQXBDO01BQThELE9BQUEsRUFBUSxvQkFBdEU7S0FBei9ELEVBQXFsRTtNQUFDLE1BQUEsRUFBTyxrQkFBUjtNQUEyQixVQUFBLEVBQVcsS0FBdEM7TUFBNEMsT0FBQSxFQUFRLHNCQUFwRDtLQUFybEU7R0FBMzdFOzs7QUNBVCxJQUFBOztBQUFBLEtBQUEsR0FFRTtFQUFBLElBQUEsRUFBTSxFQUFOO0VBQ0EsT0FBQSxFQUFTLE1BRFQ7RUFFQSxHQUFBLEVBQUssS0FGTDtFQUdBLEtBQUEsRUFDRTtJQUFBLE1BQUEsRUFBUSxNQUFSO0lBQ0EsUUFBQSxFQUFVLEtBRFY7SUFFQSxLQUFBLEVBQU8sRUFGUDtHQUpGO0VBUUEsQ0FBQSxFQUFHLFNBQUE7SUFFRCxJQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBbEIsS0FBOEIsZ0JBQTlCLElBQW1ELFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBbEIsS0FBZ0MsUUFBdEY7TUFDRSxJQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBbEIsS0FBNEIsRUFBL0I7UUFDRSxRQUFRLENBQUMsUUFBVCxHQUFvQix5QkFBQSxHQUE0QixRQUFRLENBQUMsUUFBUSxDQUFDLEtBRHBFO09BQUEsTUFBQTtRQUdFLFFBQVEsQ0FBQyxRQUFULEdBQW9CLDBCQUh0QjtPQURGOztJQU1BLElBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFsQixLQUE4QixZQUFqQztNQUNFLElBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFsQixLQUE0QixFQUEvQjtRQUNFLFFBQVEsQ0FBQyxRQUFULEdBQW9CLHlCQUFBLEdBQTRCLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FEcEU7T0FBQSxNQUFBO1FBR0UsUUFBUSxDQUFDLFFBQVQsR0FBb0IsMEJBSHRCO09BREY7O0lBT0EsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFaLEdBQXFCLENBQUEsQ0FBRSxNQUFGO0lBQ3JCLElBQUcsUUFBUSxDQUFDLGVBQVQsS0FBOEIsTUFBakM7TUFDRSxLQUFLLENBQUMsR0FBTixHQUFZLFFBQVEsQ0FBQztNQUNyQixXQUFBLENBQVksS0FBSyxDQUFDLE9BQWxCLEVBQTJCLEdBQTNCLEVBRkY7O0lBS0EsSUFBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFuQixDQUFBLENBQUEsR0FBNkIsSUFBaEM7TUFDRSxXQUFBLENBQVksS0FBSyxDQUFDLE1BQWxCLEVBQTBCLEVBQTFCLEVBREY7O0lBR0EsS0FBSyxDQUFDLFFBQU4sQ0FBQTtJQUNBLFdBQUEsQ0FBWSxLQUFLLENBQUMsS0FBbEIsRUFBeUIsR0FBekI7SUFDQSxXQUFBLENBQVksS0FBSyxDQUFDLElBQWxCLEVBQXdCLEdBQXhCO0lBRUEsS0FBSyxDQUFDLFFBQU4sQ0FBQTtJQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksV0FBWjtJQUVBLElBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFsQixLQUE0QixFQUEvQjthQUNFLENBQUEsQ0FBRSxZQUFGLENBQWUsQ0FBQyxRQUFoQixDQUF5QixFQUFBLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUE5QyxFQUNFO1FBQUEsUUFBQSxFQUFVLEVBQVY7UUFDQSxNQUFBLEVBQVEsQ0FBQyxFQURUO09BREYsRUFERjs7RUEvQkMsQ0FSSDtFQTRDQSxPQUFBLEVBQVMsU0FBQTtJQUNQLElBQUcsS0FBSyxDQUFDLEdBQU4sS0FBZSxRQUFRLENBQUMsZUFBM0I7TUFDRSxLQUFLLENBQUMsR0FBTixHQUFZLFFBQVEsQ0FBQztNQUNyQixDQUFDLENBQUMsR0FBRixDQUFNLGFBQU47YUFDQSxVQUFBLENBQVcsU0FBQTtlQUNULENBQUMsQ0FBQyxFQUFGLENBQUssYUFBTDtNQURTLENBQVgsRUFFRSxFQUZGLEVBSEY7O0VBRE8sQ0E1Q1Q7RUFvREEsUUFBQSxFQUFVLFNBQUE7SUFFUixDQUFBLENBQUUsaUdBQUYsQ0FHRSxDQUFDLEtBSEgsQ0FHUyxLQUFLLENBQUMsTUFIZjtXQUlBLENBQUEsQ0FBRSxTQUFGLENBQVksQ0FBQyxLQUFiLENBQW1CLEtBQUssQ0FBQyxNQUF6QjtFQU5RLENBcERWO0VBNERBLE1BQUEsRUFBUSxTQUFBO1dBQ04sQ0FBQyxDQUFDLElBQUYsQ0FBTyw0Q0FBUDtFQURNLENBNURSO0VBK0RBLE1BQUEsRUFBUSxTQUFDLEtBQUQ7QUFFTixRQUFBO0lBQUEsS0FBSyxDQUFDLGNBQU4sQ0FBQTtJQUVBLElBQUEsR0FBTyxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsSUFBUixDQUFhLFFBQWI7SUFDUCxDQUFDLENBQUMsR0FBRixDQUFNLHVFQUFOO0lBQ0EsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxrQkFBTjtXQUNBLFVBQUEsQ0FBVyxTQUFBO01BQ1QsQ0FBQSxDQUFFLFlBQUYsQ0FBZSxDQUFDLFFBQWhCLENBQXlCLEdBQUEsR0FBSSxJQUE3QixFQUNFO1FBQUEsUUFBQSxFQUFVLEVBQVY7UUFDQSxNQUFBLEVBQVEsQ0FBQyxFQURUO09BREY7YUFHQSxRQUFRLENBQUMsSUFBVCxHQUFnQjtJQUpQLENBQVgsRUFLRSxHQUxGO0VBUE0sQ0EvRFI7RUE2RUEsTUFBQSxFQUFRLFNBQUE7QUFFTixRQUFBO0lBQUEsVUFBQSxHQUFhO0lBRWIsSUFBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFuQixDQUFBLENBQUEsR0FBaUMsVUFBakMsSUFBZ0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFaLEtBQXdCLEtBQTNFO01BQ0UsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxTQUFMO01BQ0EsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFaLEdBQXVCLEtBRnpCOztJQUlBLElBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBbkIsQ0FBQSxDQUFBLEdBQWlDLFVBQWpDLElBQWdELEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBWixLQUF3QixJQUEzRTtNQUNFLENBQUMsQ0FBQyxHQUFGLENBQU0sU0FBTjthQUNBLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBWixHQUF1QixNQUZ6Qjs7RUFSTSxDQTdFUjtFQXlGQSxJQUFBLEVBQU0sU0FBQTtXQUVKLENBQUEsQ0FBRSxVQUFGLENBQWEsQ0FBQyxJQUFkLENBQW1CLFNBQUMsQ0FBRCxFQUFJLEVBQUo7QUFDakIsVUFBQTtNQUFBLE9BQUEsR0FBVSxDQUFBLENBQUUsRUFBRixDQUFLLENBQUMsSUFBTixDQUFXLFNBQVg7TUFDVixJQUFHLEtBQUssQ0FBQyxVQUFOLENBQWlCLEVBQWpCLENBQUg7UUFDRSxDQUFDLENBQUMsR0FBRixDQUFNLHVFQUFOO1FBQ0EsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxVQUFBLEdBQVcsT0FBaEI7QUFDQSxlQUFPLEtBSFQ7O0lBRmlCLENBQW5CO0VBRkksQ0F6Rk47RUFrR0EsUUFBQSxFQUFVLFNBQUE7V0FDUixDQUFBLENBQUUsUUFBRixDQUFXLENBQUMsSUFBWixDQUFpQixTQUFDLENBQUQsRUFBSSxFQUFKO2FBQ2YsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFNLENBQUEsQ0FBQSxDQUFsQixHQUF1QjtJQURSLENBQWpCO0VBRFEsQ0FsR1Y7RUFzR0EsS0FBQSxFQUFPLFNBQUE7QUFDTCxRQUFBO0FBQUE7QUFBQTtTQUFBLFFBQUE7O01BRUUsSUFBRyxLQUFLLENBQUMsVUFBTixDQUFpQixFQUFqQixDQUFIO1FBQ0UsT0FBZSxLQUFLLENBQUMsUUFBTixDQUFlLEVBQWYsQ0FBZixFQUFDLGNBQUQsRUFBTztRQUNQLEdBQUEsR0FBTSxDQUFBLENBQUUsRUFBRjtRQUVOLE1BQUEsR0FBUyxHQUFHLENBQUMsSUFBSixDQUFTLFFBQVQ7UUFDVCxJQUFlLE1BQUEsS0FBVSxNQUF6QjtVQUFBLE1BQUEsR0FBUyxHQUFUOztRQUVBLElBQUcsSUFBQSxHQUFPLE1BQVAsSUFBa0IsR0FBRyxDQUFDLFFBQUosQ0FBYSxLQUFiLENBQXJCO1VBQ0UsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxHQUFMLEVBREY7O1FBRUEsSUFBRyxJQUFBLEdBQU8sTUFBUCxJQUFrQixHQUFHLENBQUMsUUFBSixDQUFhLElBQWIsQ0FBckI7dUJBQ0UsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxHQUFOLEdBREY7U0FBQSxNQUFBOytCQUFBOzs7QUFHQTs7Ozs7Ozs7OztXQVpGO09BQUEsTUFBQTs2QkFBQTs7QUFGRjs7RUFESyxDQXRHUDtFQWlJQSxVQUFBLEVBQVksU0FBQyxFQUFEO0FBRVYsUUFBQTtJQUFBLElBQUEsR0FBTyxFQUFFLENBQUMscUJBQUgsQ0FBQTtBQUVQLFdBQ0UsQ0FBQyxJQUFJLENBQUMsR0FBTCxJQUFZLENBQVosSUFBaUIsSUFBSSxDQUFDLE1BQUwsSUFBZSxDQUFqQyxDQUFBLElBQ0EsQ0FBQyxJQUFJLENBQUMsR0FBTCxJQUFZLE1BQU0sQ0FBQyxXQUFuQixJQUFrQyxJQUFJLENBQUMsTUFBTCxJQUFlLE1BQU0sQ0FBQyxXQUF6RDtFQU5RLENBaklaO0VBMElBLFFBQUEsRUFBVSxTQUFDLEVBQUQ7QUFDUixRQUFBO0lBQUEsSUFBQSxHQUFPLEVBQUUsQ0FBQyxxQkFBSCxDQUFBO0lBQ1AsTUFBQSxHQUFTLElBQUksQ0FBQyxNQUFMLEdBQVksSUFBSSxDQUFDO0lBRTFCLFFBQUEsR0FBVyxJQUFJLENBQUMsR0FBTCxHQUFXLE1BQUEsR0FBTztJQUM3QixTQUFBLEdBQVksTUFBTSxDQUFDLFdBQVAsR0FBbUI7SUFDL0IsR0FBQSxHQUFNLE1BQU0sQ0FBQyxXQUFQLEdBQW1CLENBQW5CLEdBQXVCLE1BQUEsR0FBTztJQUNwQyxJQUFBLEdBQU8sU0FBQSxHQUFVO0lBQ2pCLElBQUEsR0FBTyxHQUFBLEdBQU0sSUFBSSxDQUFDLEdBQUwsQ0FBUyxJQUFULENBQUEsR0FBZSxHQUFmLEdBQW1CO0lBQ2hDLE1BQUEsR0FBUyxJQUFJLENBQUMsR0FBTCxDQUFTLElBQVQsQ0FBQSxHQUFlLEdBQWYsR0FBbUI7SUFDNUIsSUFBb0IsSUFBQSxHQUFPLENBQTNCO01BQUEsTUFBQSxHQUFTLENBQUMsT0FBVjs7QUFFQSxXQUFPLENBQUMsSUFBRCxFQUFPLE1BQVA7RUFaQyxDQTFJViIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJfID1cblxuICBpOiAtPlxuICAgIEBjb25zb2xlID0gc2V0SW50ZXJ2YWwoQGRldGVjdC5iaW5kKEApLCAyMDApXG5cbiAgcDpcbiAgICBvZmZpbmc6IGZhbHNlXG4gICAgb2ZmdGltZTogMFxuXG4gIHR1cm46IChlbCwgcmVtb3ZlPWZhbHNlLCBhZGQ9ZmFsc2UpIC0+XG5cbiAgICBpZiBlbCBub3QgaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgIGVsID0gJChlbClcblxuICAgIGlmIHJlbW92ZSBpc250IGZhbHNlXG4gICAgICBlbC5yZW1vdmVDbGFzcyhyZW1vdmUpXG5cbiAgICBpZiBhZGQgaXNudCBmYWxzZVxuICAgICAgZWwuYWRkQ2xhc3MoYWRkKVxuXG4gICAgcmV0dXJuIHRydWVcblxuICBvZmY6IChlbCwgcD17fSkgLT5cblxuICAgIGlmIHAub2ZmaW5nIGFuZCBwLm9mZnRpbWUgPiAwXG5cbiAgICAgIEB0dXJuIGVsLCBmYWxzZSwgJ29mZmluZydcbiAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgQHR1cm4gZWwsICdvZmZpbmcnLCBmYWxzZVxuICAgICAgICBAdHVybiBlbCwgJ29uJywgJ29mZidcbiAgICAgICwgcC5vZmZ0aW1lKjEwMDAgKyAxMDBcblxuICAgIGVsc2VcbiAgICAgIEB0dXJuIGVsLCAnb24nLCAnb2ZmJ1xuXG4gICAgcmV0dXJuXG5cbiAgb246IChlbCwgcCkgLT5cbiAgICBAdHVybiBlbCwgJ29mZicsICdvbidcblxuICBzd2FwOiAoZWwsIHApIC0+XG5cbiAgICBpZiBlbCBub3QgaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgIGVsID0gJChlbClcblxuICAgIGlmIGVsLmhhc0NsYXNzICdvZmYnXG4gICAgICBAb24gZWwsIHBcbiAgICBlbHNlXG4gICAgICBAb2ZmIGVsLCBwXG5cbiAgICByZXR1cm5cblxuICBlbmNvZGU6IChzdHIpIC0+XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpXG4gICAgICAucmVwbGFjZSgvIS9nLCAnJTIxJylcbiAgICAgIC5yZXBsYWNlKC8nL2csICclMjcnKVxuICAgICAgLnJlcGxhY2UoL1xcKC9nLCAnJTI4JylcbiAgICAgIC5yZXBsYWNlKC9cXCkvZywgJyUyOScpXG4gICAgICAucmVwbGFjZSgvXFwqL2csICclMkEnKVxuICAgICAgLnJlcGxhY2UoLyUyMC9nLCAnKycpXG5cbiAgdDogKGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZSkgLT5cbiAgICBfZ2FxLnB1c2ggWydfdHJhY2tFdmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZV1cblxuICByYW5kOiAobWluLCBtYXgpIC0+XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCkgKyBtaW5cblxuICBsb2FkOiAoc2NyaXB0LCBpbml0aWF0ZSwgY29tcGxldGUpIC0+XG5cbiAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgJ3NjcmlwdCdcbiAgICBlbC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCdcbiAgICBlbC5zcmMgPSBzY3JpcHRcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyICdsb2FkJyAsIChlKSAtPlxuICAgICAgY29tcGxldGUoKSBpZiB0eXBlb2YgY29tcGxldGUgaXMgJ2Z1bmN0aW9uJ1xuICAgICAgd2luZG93W2luaXRpYXRlXS5pKCkgaWYgaW5pdGlhdGUgaXNudCB1bmRlZmluZWQgYW5kIGluaXRpYXRlIGlzbnQgZmFsc2VcbiAgICAsIGZhbHNlXG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKVxuXG4gIGxsYzogLT5cbiAgICBhc2NpaSA9IFwiXCJcIlxuXG4gICAgICAlY21tbS8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uL21tbVxuICAgICAgbW1vLi4uLi4uLi4uLi4uLi4uLi06Oi8vOjotLi4uLi4uLi06Ojo6Ojo6Ojo6Ojo6LS4uLi4uLi4uLTo6Ly8vOi0ub21tXG4gICAgICBtZC0uLi4uLi4uLi4uLi4uOit5aGRkZGRkZGh5Ky0uLi4uL2RkZGRkZGRkZGRkZGQrLi4uLi4uL3NoZGRkZGRkZHlvZG1cbiAgICAgIG1vLi4uLi4uLi4uLi4uLi1obW1taHl5eXlkbW1taDouLi4vbW1tbWhoaGhoaGhoaCsuLi4uOnlkbW1kaHl5eWhkZG9vbVxuICAgICAgbS0uLi4uLi4uLi4uLi4uLi1zczotLi4uLi15bW1teS4uLi9tbW1tLS0tLS0tLS0tLi4uLjpkbW1tczotLi4uLTovLi1tXG4gICAgICBkLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLnltbW15Li4uL21tbW0tLytvb28rOi0uLi4ueW1tbXktOitvb28rLy0uLmRcbiAgICAgIGguLi4uLi4uLi4uLi4uLi4uLi4uLi4uLjpzbW1tZDouLi4vbW1tbWhtbW1tbW1kaCsuLi5kbW1tc2hkbW1tbW1taHMtaFxuICAgICAgaC4uLi4uLi4uLi4uLi4uLi4uLi4uLjpzZG1tZHk6Li4uLjpoaGRobysvLyt5bW1tbSsuLmRtbW1keW8vLytzZG1tbWhoXG4gICAgICBkLi4uLi4uLi4uLi4uLi4uLi4uLSt5ZG1tZHkvLi4uLi4uLi0tOi4uLi4uLi5zbW1taC4ueW1tbXMuLi4uLi46bW1tbW1cbiAgICAgIG0tLi4uLi4uLi4uLi4uLi4tOnNobW1tZHMvLS0tLS0uLi4uOnMvLS0uLi4tOmhtbW1zLi46ZG1tZC8tLi4uLW9tbW1tbVxuICAgICAgbW8uLi4uLi4uLi4uLi4uLmhtbW1tbW1oaGhoaGhoaC4uLitkbW1kaHl5eWhkbW1teS0uLi4vaG1tbWh5eXlobW1tZGhtXG4gICAgICBtZC0uLi4uLi4uLi4uLi4uZGRkZGRkZGRkZGRkZGRkLi4uLStzaGRkZGRkZGRoeS8tLi4uLi4tb3lkZGRkZGRkaG86ZG1cbiAgICAgIG1tby4uLi4uLi4uLi4uLi46Ojo6Ojo6Ojo6Ojo6OjouLi4uLi4uLTovLy86Oi0uLi4uLi4uLi4uLi06Ly8vOi0uLm9tbVxuICAgICAgbW1tLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4vbW1tXG5cbiAgICAgIDo6IHN5bnRhY3RpYyBzdWdhciBieSAyNTZcbiAgICAgIDo6IGh0dHA6Ly8yNTYuaW8vXG4gICAgICA6OiAje2NvbmZpZy5tZXRhLnJlcG99XG4gICAgXCJcIlwiXG4gICAgY29uc29sZS5sb2cgYXNjaWksIFwiY29sb3I6IGdyZXk7IGZvbnQtZmFtaWx5OiBNZW5sbywgbW9ub3NwYWNlO1wiXG5cbiAgZGV0ZWN0OiAtPlxuICAgIGlmICgoKHdpbmRvdy5vdXRlckhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCkgPiAxMDApIHx8ICgod2luZG93Lm91dGVyV2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aCkgPiAxMDApKVxuICAgICAgQGxsYygpXG4gICAgICBjbGVhckludGVydmFsIEBjb25zb2xlXG5cbl8uaSgpXG4iLCJjb25maWcgPSB7XCJjbGllbnRzXCI6W1wiaW52aXNhbGlnblwiLFwiZ2FsZGVybWFcIixcImJpb3BoYXJteFwiLFwibmF0ZXJhXCIsXCJjb29sc2N1bHB0aW5nXCIsXCJhbG1hXCIsXCJlbmRvbG9naXhcIixcInJlc3R5bGFuZVwiLFwiZHlzcG9ydFwiLFwic2N1bHB0cmFcIixcInNlcmFcIixcImNhcmVcIixcIndob2xlZm9vZHNcIixcImhhZ2dlbnNcIixcImFiYm90XCIsXCJmaW5lc3NcIixcImdlbmVyYWxtaWxsc1wiLFwia2lhXCIsXCJsaWZlbG9ja1wiLFwibWF0dGVsXCIsXCJtYXpkYVwiLFwibWl0c3ViaXNoaVwiLFwibmlrZVwiLFwibmVzdGxlXCIsXCJuZXdiYWxhbmNlXCIsXCJyZWRidWxsXCIsXCJ0bW9iaWxlXCIsXCJ4Ym94XCIsXCJvYmlcIixcInNlbWFcIixcIm1peGltXCIsXCJoYW5zZW5zXCIsXCJ0eWxlbm9sXCIsXCJkcnliYXJcIixcIml0ZXJpc1wiXSxcImNvbG9yXCI6e1wiYmxhY2sxXCI6XCIjMDAwMDAwXCIsXCJ3aGl0ZTFcIjpcIiNGRkZGRkZcIixcIndoaXRlMlwiOlwiI0Y3RUVFQVwiLFwicmVkMVwiOlwiI0VFNjk3QVwiLFwiYmx1ZTFcIjpcIiNEMUUwRUJcIixcImdvbGQxXCI6XCIjQjA5NzZEXCJ9LFwiZm9udFwiOntcImNvcHkxXCI6e1wiZm9udC1mYW1pbHlcIjpcImdvdGhhbSBsaWdodFwiLFwiZm9udC1zaXplXCI6XCIxNnB4XCJ9LFwiY29weTJcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIG1lZGl1bVwiLFwiZm9udC1zaXplXCI6XCIxNnB4XCJ9LFwiY29weTNcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjE0cHhcIn0sXCJjb3B5NFwiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gYm9sZFwiLFwiZm9udC1zaXplXCI6XCIyMHB4XCJ9LFwiY29weTVcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjEycHhcIn0sXCJjb3B5NlwiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gbWVkaXVtXCIsXCJmb250LXNpemVcIjpcIjE0cHhcIn0sXCJjb3B5N1wiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gYm9sZFwiLFwiZm9udC1zaXplXCI6XCIxMnB4XCJ9LFwiaDFcIjp7XCJmb250LWZhbWlseVwiOlwibmV1dHJhdGV4dCBib2xkXCIsXCJmb250LXNpemVcIjpcIjQwcHhcIn0sXCJoMlwiOntcImZvbnQtZmFtaWx5XCI6XCJuZXV0cmF0ZXh0IGRlbWlcIixcImZvbnQtc2l6ZVwiOlwiMjBweFwifSxcImgzXCI6e1wiZm9udC1mYW1pbHlcIjpcImdvdGhhbSBsaWdodFwiLFwiZm9udC1zaXplXCI6XCIzMHB4XCJ9LFwiaDRcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIGJvbGRcIixcImZvbnQtc2l6ZVwiOlwiMzBweFwifSxcImg1XCI6e1wiZm9udC1mYW1pbHlcIjpcImdvdGhhbSBsaWdodFwiLFwiZm9udC1zaXplXCI6XCIyMHB4XCJ9LFwiaDZcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIGJvb2tcIixcImZvbnQtc2l6ZVwiOlwiMzAwcHhcIn19LFwibWVudVwiOltcInN0YW5kb3V0XCIsXCJhcHByb2FjaFwiLFwid29ya1wiLFwic2VydmljZXNcIixcInRlYW1cIixcImNsaWVudHNcIixcImNvbnRhY3RcIl0sXCJtZXRhXCI6e1widGl0bGVcIjpcIkdvbGQgUFJcIixcInVybFwiOlwiaHR0cDovL3d3dy5nb2xkcHIuY29tL1wiLFwicmVwb1wiOlwiaHR0cDovL3d3dy5naXRodWIuY29tL2FjaWRqYXp6L2dvbGRwclwiLFwiZGVzY3JpcHRpb25cIjpcIldlIGhlbHAgY29tcGFuaWVzIGdyb3dcIixcImtleXdvcmRzXCI6XCJ3b21lbnMgYmVhdXR5IHByLCB3b21lbnMgaGVhbHRoIHByLCBzb2NpYWwgbWVkaWFcIixcImltYWdlXCI6XCJpbWcvc2hhcmUuanBnXCJ9LFwic29jaWFsXCI6e1wiZmFjZWJvb2tcIjpcImh0dHA6Ly93d3cuZmFjZWJvb2suY29tL2dvbGRwclwiLFwidHdpdHRlclwiOlwiaHR0cDovL3d3dy50d2l0dGVyLmNvbS9nb2xkcHJfXCIsXCJpbnN0YWdyYW1cIjpcImh0dHA6Ly93d3cuaW5zdGFncmFtLmNvbS9nb2xkcHJcIixcIm1haWxcIjpcImhlbGxvQGdvbGRwci5jb21cIixcIm1hcFwiOlwiaHR0cHM6Ly9nb28uZ2wvbWFwcy9TVE5mYTZ6czM0c1wiLFwicGhvbmVcIjo5NDk3NDMzOTExfSxcInN0dWRpZXNcIjp7XCIxXCI6e1wibmFtZVwiOlwiQ2FzZSBTdHVkeSAxXCIsXCJ0eXBlXCI6XCJIZWFsdGggYW5kIEJlYXV0eVwiLFwibGlua1wiOlwiQ2FzZVN0dWR5MV9SZXN0eWxhbmVfSGVhbHRoX2FuZF9CZWF1dHkucGRmXCIsXCJ2aWRlb1wiOlwiaHR0cHM6Ly92aW1lby5jb20vMTU4NDMyMTk5XCJ9LFwiMlwiOntcIm5hbWVcIjpcIkNhc2UgU3R1ZHkgMlwiLFwidHlwZVwiOlwiSGVhbHRoIGFuZCBCZWF1dHlcIixcImxpbmtcIjpcIkNhc2VTdHVkeTJfQ29vbHNjdWxwdGluZ19IZWFsdGhfYW5kX0JlYXV0eS5wZGZcIixcInZpZGVvXCI6XCJodHRwczovL3ZpbWVvLmNvbS8xNTg0MzE4NjFcIn0sXCIzXCI6e1wibmFtZVwiOlwiQ2FzZSBTdHVkeSAzXCIsXCJ0eXBlXCI6XCJIZWFsdGggYW5kIEJlYXV0eVwiLFwibGlua1wiOlwiQ2FzZVN0dWR5M19JbnZpc2FsaWduX0hlYWx0aF9hbmRfQmVhdXR5LnBkZlwifSxcIjRcIjp7XCJuYW1lXCI6XCJDYXNlIFN0dWR5IDRcIixcInR5cGVcIjpcIldvbWVuJ3MgSGVhbHRoXCIsXCJsaW5rXCI6XCJDYXNlU3R1ZHk0X1Bhbm9yYW1hTklQVF9Xb21lbnNfSGVhbHRoLnBkZlwifSxcIjVcIjp7XCJuYW1lXCI6XCJDYXNlIFN0dWR5IDVcIixcInR5cGVcIjpcIldvbWVuJ3MgSGVhbHRoXCIsXCJsaW5rXCI6XCJDYXNlU3R1ZHk1X1Zpb2xldF9Xb21lbnNfSGVhbHRoLnBkZlwifSxcIjZcIjp7XCJuYW1lXCI6XCJDYXNlIFN0dWR5IDZcIixcInR5cGVcIjpcIkZvb2QgYW5kIEJldmVyYWdlXCIsXCJsaW5rXCI6XCJDYXNlU3R1ZHk2X1dob2xlRm9vZHNfRm9vZF9hbmRfQmV2ZXJhZ2UucGRmXCJ9fSxcInRlYW1cIjpbe1wibmFtZVwiOlwiU2hhcmkgR29sZFwiLFwicG9zaXRpb25cIjpcIkZvdW5kZXIvQ0VPXCIsXCJlbWFpbFwiOlwic2dvbGRAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJBZHJpZW5uZSBLZW1wXCIsXCJwb3NpdGlvblwiOlwiQnVzaW5lc3MgTGVhZCwgU3RyYXRlZ3lcIixcImVtYWlsXCI6XCJha2VtcEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIlN0ZXBoYW5pZSBHb2RkYXJkXCIsXCJwb3NpdGlvblwiOlwiQnVzaW5lc3MgTGVhZCwgU3RyYXRlZ3lcIixcImVtYWlsXCI6XCJzZ29kZGFyZEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkphY2tpZSBKb3JnZVwiLFwicG9zaXRpb25cIjpcIk1lZGlhIFN0cmF0ZWdpc3RcIixcImVtYWlsXCI6XCJqam9yZ2VAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJTYXJhIFJlY29yZFwiLFwicG9zaXRpb25cIjpcIkJsb2dnZXIvSW5mbHVlbmNlciBSZWxhdGlvbnNcIixcImVtYWlsXCI6XCJzcmVjb3JkQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiU2hhcm9uIFNjb3R0XCIsXCJwb3NpdGlvblwiOlwiTWVkaWEgc3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcInNzY290dEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkFzaGxleSBHYXJpbmdcIixcInBvc2l0aW9uXCI6XCJBY2NvdW50IERpcmVjdG9yXCIsXCJlbWFpbFwiOlwiYWdhcmluZ0Bnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIk5hdGFzaGEgTmVsc29uXCIsXCJwb3NpdGlvblwiOlwiQWNjb3VudCBEaXJlY3RvciB8IFNFT1wiLFwiZW1haWxcIjpcIm5uZWxzb25AZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJTaGFubm9uIFNtaXRoXCIsXCJwb3NpdGlvblwiOlwiTWVkaWEgc3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcInNzbWl0aEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIlBhbSBTY2hsaWNodGVyXCIsXCJwb3NpdGlvblwiOlwiTWVkaWEgUmVsYXRpb25zXCIsXCJlbWFpbFwiOlwiUHNjaGxpY2h0ZXJAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJEaWFuYSBNYW5uXCIsXCJwb3NpdGlvblwiOlwiQWNjb3VudCBEaXJlY3RvclwiLFwiZW1haWxcIjpcImRtYW5uQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiSmlsbCBFZGdld29ydGhcIixcInBvc2l0aW9uXCI6XCJBY2NvdW50IERpcmVjdG9yXCIsXCJlbWFpbFwiOlwiamVkZ2V3b3J0aEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIktyaXMgRWxsZW5iZXJnXCIsXCJwb3NpdGlvblwiOlwiRW50ZXJ0YWlubWVudCBMZWFkXCIsXCJlbWFpbFwiOlwia2VsbGVuYmVyZ0Bnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkRpYW5hIE1vZWNrXCIsXCJwb3NpdGlvblwiOlwiQW5hbHl0aWNzL0FjY291bnQgU3VwcG9ydFwiLFwiZW1haWxcIjpcImRtb2Vja0Bnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkt5bSBDbGV2ZWxhbmRcIixcInBvc2l0aW9uXCI6XCJBY2NvdW50IENvb3JkaW5hdG9yXCIsXCJlbWFpbFwiOlwia2NsZXZlbGFuZEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkphbWkgRWlkc3ZvbGRcIixcInBvc2l0aW9uXCI6XCJTb2NpYWwgTWVkaWEgQnVzaW5lc3MgTGVhZFwiLFwiZW1haWxcIjpcImplaWRzdm9sZEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIlZhbmVzc2EgU2hhbmFoYW5cIixcInBvc2l0aW9uXCI6XCJBbmFseXRpY3NcIixcImVtYWlsXCI6XCJ2c2hhbmFoYW5AZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJBc2hsZXkgQ2xpbmVcIixcInBvc2l0aW9uXCI6XCJTb2NpYWwgTWVkaWEgU3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcImFjbGluZUBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIktlbGxpZSBBcmVuc1wiLFwicG9zaXRpb25cIjpcIlNvY2lhbCBNZWRpYSBBY2N0IE1hbmFnZXJcIixcImVtYWlsXCI6XCJrYXJlbnNAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJKYW1pZSBEYWRhbnRcIixcInBvc2l0aW9uXCI6XCJTb2NpYWwgQ29uc3VtZXIgQ3VzdG9tZXIgU2VydmljZVwiLFwiZW1haWxcIjpcImpkYWRhbnRAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJCcmlhbm5hIEpvbnNzb25cIixcInBvc2l0aW9uXCI6XCJTb2NpYWwgTWVkaWEgQ29tbXVuaXR5IE1hbmFnZXJcIixcImVtYWlsXCI6XCJiam9uc3NvbkBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkNhbWVyb24gSm9uc3NvblwiLFwicG9zaXRpb25cIjpcIkRpZ2l0YWwgU3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcImNqb25zc29uQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiTGF1cmVuIENvd2xlc1wiLFwicG9zaXRpb25cIjpcIkRpZ2l0YWwvU29jaWFsIFN0cmF0ZWdpc3RcIixcImVtYWlsXCI6XCJsY293bGVzQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiTWVsaXNzYSBBbmdlcnRcIixcInBvc2l0aW9uXCI6XCJTb2NpYWwgTWVkaWEgU3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcIm1hbmdlcnRAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJBbGxpc29uIEhpbm9qb3NhXCIsXCJwb3NpdGlvblwiOlwiQ0ZPXCIsXCJlbWFpbFwiOlwiYWhpbm9qb3NhQGdvbGRwci5jb21cIn1dfTsiLCJJbmRleCA9XG5cbiAgdmFsczogW11cbiAgc2VjdGlvbjogJ2hvbWUnXG4gIHZpczogZmFsc2VcbiAgY2FjaGU6XG4gICAgd2luZG93OiB3aW5kb3dcbiAgICBzdGlja2llZDogZmFsc2VcbiAgICBsYXhpbjoge31cblxuICBpOiAtPlxuXG4gICAgaWYgZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUgaXMgJ3d3dy5nb2xkcHIuY29tJyBhbmQgZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgaXNudCAnaHR0cHM6J1xuICAgICAgaWYgZG9jdW1lbnQubG9jYXRpb24uaGFzaCBpc250IFwiXCJcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSAnaHR0cHM6Ly93d3cuZ29sZHByLmNvbS8nICsgZG9jdW1lbnQubG9jYXRpb24uaGFzaFxuICAgICAgZWxzZVxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiA9ICdodHRwczovL3d3dy5nb2xkcHIuY29tLydcblxuICAgIGlmIGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lIGlzICdnb2xkcHIuY29tJ1xuICAgICAgaWYgZG9jdW1lbnQubG9jYXRpb24uaGFzaCBpc250IFwiXCJcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSAnaHR0cHM6Ly93d3cuZ29sZHByLmNvbS8nICsgZG9jdW1lbnQubG9jYXRpb24uaGFzaFxuICAgICAgZWxzZVxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiA9ICdodHRwczovL3d3dy5nb2xkcHIuY29tLydcbiAgICBcblxuICAgIEluZGV4LmNhY2hlLndpbmRvdyA9ICQod2luZG93KVxuICAgIGlmIGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSBpc250IHVuZGVmaW5lZFxuICAgICAgSW5kZXgudmlzID0gZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlXG4gICAgICBzZXRJbnRlcnZhbCBJbmRleC52aXNpYmxlLCAyMDBcblxuXG4gICAgaWYgSW5kZXguY2FjaGUud2luZG93LndpZHRoKCkgPiAxMDAwXG4gICAgICBzZXRJbnRlcnZhbCBJbmRleC5oZWFkZXIsIDUwXG5cbiAgICBJbmRleC5sYXhjYWNoZSgpXG4gICAgc2V0SW50ZXJ2YWwgSW5kZXguY2hlY2ssIDEwMFxuICAgIHNldEludGVydmFsIEluZGV4Lm1lbnUsIDUwMFxuXG4gICAgSW5kZXguaGFuZGxlcnMoKVxuICAgIGNvbnNvbGUubG9nICdJbmRleC5pKCknXG5cbiAgICBpZiBkb2N1bWVudC5sb2NhdGlvbi5oYXNoIGlzbnQgJydcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5zY3JvbGxUbyBcIiN7ZG9jdW1lbnQubG9jYXRpb24uaGFzaH1cIixcbiAgICAgICAgZHVyYXRpb246IDUwXG4gICAgICAgIG9mZnNldDogLTYwXG5cbiAgdmlzaWJsZTogLT5cbiAgICBpZiBJbmRleC52aXMgaXNudCBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGVcbiAgICAgIEluZGV4LnZpcyA9IGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZVxuICAgICAgXy5vZmYgJy5ibHVlQ2lyY2xlJ1xuICAgICAgc2V0VGltZW91dCAtPlxuICAgICAgICBfLm9uICcuYmx1ZUNpcmNsZSdcbiAgICAgICwgMTBcblxuICBoYW5kbGVyczogLT5cblxuICAgICQoJ1xuICAgICAgaGVhZGVyID4gLmlubmVyID4gLm1lbnUgPiBhLm9wdGlvbiwgLm1vYmlsZSA+IC5pbm5lciA+IC5tZW51ID4gYS5vcHRpb24sXG4gICAgICBoZWFkZXIgPiAuaW5uZXIgYS5sb2dvXG4gICAgJykuY2xpY2sgSW5kZXgub3B0aW9uXG4gICAgJCgnLmJ1cmdlcicpLmNsaWNrIEluZGV4LmJ1cmdlclxuXG4gIGJ1cmdlcjogLT5cbiAgICBfLnN3YXAgJy5tb2JpbGUsIC5idXJnZXIsIC5idXJnZXIgPiAuaW5uZXIgPiAubWVudSdcblxuICBvcHRpb246IChldmVudCkgLT5cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGhhc2ggPSAkKHRoaXMpLmRhdGEgJ2FuY2hvcidcbiAgICBfLm9mZiAnaGVhZGVyID4gLmlubmVyID4gLm1lbnUgPiAub3B0aW9uLCAubW9iaWxlID4gLmlubmVyID4gLm1lbnUgPiAub3B0aW9uJ1xuICAgIF8ub2ZmICcubW9iaWxlLCAuYnVyZ2VyJ1xuICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICQoJ2h0bWwsIGJvZHknKS5zY3JvbGxUbyBcIiMje2hhc2h9XCIsXG4gICAgICAgIGR1cmF0aW9uOiA1MFxuICAgICAgICBvZmZzZXQ6IC02MFxuICAgICAgbG9jYXRpb24uaGFzaCA9IGhhc2hcbiAgICAsIDIwMFxuXG4gIGhlYWRlcjogLT5cblxuICAgIHN0aWNreVNwb3QgPSAzMDBcblxuICAgIGlmIEluZGV4LmNhY2hlLndpbmRvdy5zY3JvbGxUb3AoKSA+IHN0aWNreVNwb3QgYW5kIEluZGV4LmNhY2hlLnN0aWNraWVkIGlzIGZhbHNlXG4gICAgICBfLm9uICcjc3RpY2t5J1xuICAgICAgSW5kZXguY2FjaGUuc3RpY2tpZWQgPSB0cnVlXG5cbiAgICBpZiBJbmRleC5jYWNoZS53aW5kb3cuc2Nyb2xsVG9wKCkgPCBzdGlja3lTcG90IGFuZCBJbmRleC5jYWNoZS5zdGlja2llZCBpcyB0cnVlXG4gICAgICBfLm9mZiAnI3N0aWNreSdcbiAgICAgIEluZGV4LmNhY2hlLnN0aWNraWVkID0gb2ZmXG5cbiAgbWVudTogLT5cblxuICAgICQoJy5zZWN0aW9uJykuZWFjaCAoaSwgZWwpIC0+XG4gICAgICBzZWN0aW9uID0gJChlbCkuZGF0YSAnc2VjdGlvbidcbiAgICAgIGlmIEluZGV4LmluVmlld3BvcnQgZWxcbiAgICAgICAgXy5vZmYgJ2hlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gLm9wdGlvbiwgLm1vYmlsZSA+IC5pbm5lciA+IC5tZW51ID4gLm9wdGlvbidcbiAgICAgICAgXy5vbiBcIi5vcHRpb25fI3tzZWN0aW9ufVwiXG4gICAgICAgIHJldHVybiB0cnVlXG5cbiAgbGF4Y2FjaGU6IC0+XG4gICAgJCgnLmxheGluJykuZWFjaCAoaSwgZWwpIC0+XG4gICAgICBJbmRleC5jYWNoZS5sYXhpbltpXSA9IGVsXG5cbiAgY2hlY2s6IC0+XG4gICAgZm9yIGksIGVsIG9mIEluZGV4LmNhY2hlLmxheGluXG5cbiAgICAgIGlmIEluZGV4LmluVmlld3BvcnQgZWxcbiAgICAgICAgW3BlcmMsIGRpZmZdID0gSW5kZXgudmlld2FibGUgZWxcbiAgICAgICAgamVsID0gJChlbClcblxuICAgICAgICB0aHJlc2ggPSBqZWwuZGF0YSAndGhyZXNoJ1xuICAgICAgICB0aHJlc2ggPSA1MCBpZiB0aHJlc2ggaXMgdW5kZWZpbmVkXG5cbiAgICAgICAgaWYgcGVyYyA+IHRocmVzaCBhbmQgamVsLmhhc0NsYXNzICdvZmYnXG4gICAgICAgICAgXy5vbiBqZWxcbiAgICAgICAgaWYgcGVyYyA8IHRocmVzaCBhbmQgamVsLmhhc0NsYXNzICdvbidcbiAgICAgICAgICBfLm9mZiBqZWxcblxuICAgICAgICAjIyNcbiAgICAgICAgaWYgSW5kZXguY2FjaGUud2luZG93LndpZHRoKCkgPiAxMDAwXG4gICAgICAgICAgaWYgamVsLmhhc0NsYXNzICdsYXhpbl92ZXJ0J1xuICAgICAgICAgICAgdmFsID0gTWF0aC5yb3VuZChkaWZmKVxuICAgICAgICAgICAgI3ZhbCA9IE1hdGgucm91bmQoZGlmZilcbiAgICAgICAgICAgIGlmIEluZGV4LnZhbHM/W2ldIGlzbnQgdmFsKjNcbiAgICAgICAgICAgICAgamVsLmZpbmQoJy5pbm5lcjpmaXJzdCcpLmNzcyAndHJhbnNmb3JtJywgXCJ0cmFuc2xhdGUzZCgwLCAje3ZhbCozfXB4LCAwcHgpXCJcbiAgICAgICAgICAgICAgamVsLmZpbmQoJy5vdmVybGF5JykuY3NzICd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZTNkKDAsICN7dmFsKjJ9cHgsIDBweClcIlxuICAgICAgICAgICAgICBqZWwuZmluZCgnLm92ZXJsYXkgPiAuaW5uZXInKS5jc3MgJ3RyYW5zZm9ybScsIFwidHJhbnNsYXRlM2QoMCwgI3t2YWwvNX1weCwgMHB4KVwiXG4gICAgICAgICAgICAgIEluZGV4LnZhbHNbaV0gPSB2YWwqM1xuICAgICAgICAjIyNcbiAgIFxuICBpblZpZXdwb3J0OiAoZWwpIC0+XG5cbiAgICByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIHJldHVybihcbiAgICAgIChyZWN0LnRvcCA+PSAwIHx8IHJlY3QuYm90dG9tID49IDApICYmXG4gICAgICAocmVjdC50b3AgPD0gd2luZG93LmlubmVySGVpZ2h0IHx8IHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodClcbiAgICApXG5cbiAgdmlld2FibGU6IChlbCkgLT5cbiAgICByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBoZWlnaHQgPSByZWN0LmJvdHRvbS1yZWN0LnRvcFxuXG4gICAgZWxNaWRkbGUgPSByZWN0LnRvcCArIGhlaWdodC8yXG4gICAgd2luTWlkZGxlID0gd2luZG93LmlubmVySGVpZ2h0LzJcbiAgICBtYXggPSB3aW5kb3cuaW5uZXJIZWlnaHQvMiArIGhlaWdodC8yXG4gICAgZGlmZiA9IHdpbk1pZGRsZS1lbE1pZGRsZVxuICAgIHBlcmMgPSAxMDAgLSBNYXRoLmFicyhkaWZmKSoxMDAvbWF4XG4gICAgbm9uYWJzID0gTWF0aC5hYnMoZGlmZikqMTAwL21heFxuICAgIG5vbmFicyA9IC1ub25hYnMgaWYgZGlmZiA8IDBcblxuICAgIHJldHVybiBbcGVyYywgbm9uYWJzXVxuXG4iXX0=
