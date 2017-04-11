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

var Article;

Article = {
  i: function() {
    var name;
    name = window.location.hash.replace('#', '');
    $('.basal-entry').attr('basal-name', name);
    $('.basal-entry').attr('basal-structure', 'blog');
    return Basal.i(config.basal.client, function() {
      return $('time').each((function(_this) {
        return function(i, el) {
          var jel;
          jel = $(el);
          jel.html(moment(jel.attr('title')).format('MMMM Do YYYY'));
          return jel.attr('aria-label', moment(jel.attr('title')).calendar());
        };
      })(this));
    });
  }
};

var Basal,
  hasProp = {}.hasOwnProperty;

Basal = {
  domain: '//basal.tech/api',
  client: false,
  data: false,
  structures: false,
  complete: false,
  i: function(client, complete) {
    this.complete = complete;
    this.client = client;
    return this.getStructures((function(_this) {
      return function() {
        _this.loop();
        return _this.entry();
      };
    })(this));
  },
  type: function(el, type, name, entry) {
    switch (type) {
      case 'css-background':
        return el.css('background-image', "url(" + entry.entities[name].value + ")");
      case 'date':
        return el.html(moment(entry.entities[name].value, 'MM/DD/YYYY').format(el.attr('basal-dateformat')));
      case 'image':
        return el.attr('src', entry.entities[name].value);
      case 'text':
        return el.html(entry.entities[name].value);
      case 'href':
        return el.attr('href', entry.entities[name].value);
    }
  },
  entry: function() {
    return $('.basal-entry').each(function(i, el) {
      var attr, bkey, entity, entityName, entry, key, name, ref, results, structure, type;
      el = $(el);
      structure = el.attr('basal-structure');
      name = el.attr('basal-name');
      entityName = el.attr('basal-entity');
      attr = el.attr('basal-attr');
      type = el.attr('basal-type');
      if (Basal.structures[structure] == null) {
        Basal.error("Structure not found \"" + structure + "\"");
      }
      ref = Basal.structures[structure].entries;
      results = [];
      for (key in ref) {
        entry = ref[key];
        if (entry.active !== true) {
          continue;
        }
        if (name === entry.name) {
          if (el.attr('basal-date') === 'created') {
            el.attr('title', entry.created_at);
          }
          results.push((function() {
            var ref1, results1;
            ref1 = entry.entities;
            results1 = [];
            for (bkey in ref1) {
              entity = ref1[bkey];
              if (entity.name === entityName) {
                if (type) {
                  results1.push(Basal.type(el, type, entity.name, entry));
                } else if (attr) {
                  results1.push(el.attr(attr, entity.value));
                } else {
                  results1.push(el.html(entity.value));
                }
              } else {
                results1.push(void 0);
              }
            }
            return results1;
          })());
        } else {
          results.push(void 0);
        }
      }
      return results;
    });
  },
  loop: function() {
    return $('.basal-loop').each(function(i, el) {
      var entry, name, ref, results, structure, template, tpl;
      el = $(el);
      structure = el.attr("basal-structure");
      if (Basal.structures[structure] == null) {
        Basal.error("Structure not found \"" + structure + "\"");
      }
      template = el.children().remove();
      ref = Basal.structures[structure].entries;
      results = [];
      for (name in ref) {
        if (!hasProp.call(ref, name)) continue;
        entry = ref[name];
        if (entry.active !== true) {
          continue;
        }
        tpl = template.clone();
        if (tpl.hasClass('basal-link')) {
          tpl.attr('href', tpl.attr('basal-link') + entry.name);
        }
        tpl.find('*').each(function(ci, cel) {
          var j, jcel, len, names, ref1, ref2, results1, type, types;
          jcel = $(cel);
          name = jcel.attr('basal-name');
          type = jcel.attr('basal-type');
          names = (ref1 = jcel.attr('basal-names')) != null ? ref1.split(',') : void 0;
          types = (ref2 = jcel.attr('basal-types')) != null ? ref2.split(',') : void 0;
          if (name === void 0 && names === void 0) {
            return true;
          }
          if (names === void 0) {
            names = [name];
            types = [type];
          }
          results1 = [];
          for (i = j = 0, len = names.length; j < len; i = ++j) {
            name = names[i];
            type = types[i];
            if (type !== void 0) {
              switch (type) {
                case 'css-background':
                  results1.push(jcel.css('background-image', "url(" + entry.entities[name].value + ")"));
                  break;
                case 'date':
                  results1.push(jcel.html(moment(entry.entities[name].value, 'MM/DD/YYYY').format(jcel.attr('basal-dateformat'))));
                  break;
                case 'image':
                  results1.push(jcel.attr('src', entry.entities[name].value));
                  break;
                case 'text':
                  results1.push(jcel.html(entry.entities[name].value));
                  break;
                case 'href':
                  results1.push(jcel.attr('href', entry.entities[name].value));
                  break;
                default:
                  results1.push(void 0);
              }
            } else {
              if (name === 'structure-name') {
                results1.push(jcel.html(entry.name));
              } else {
                results1.push(jcel.html(entry.entities[name].value));
              }
            }
          }
          return results1;
        });
        results.push(el.append(tpl));
      }
      return results;
    }).promise().done(function() {
      return typeof Basal.complete === "function" ? Basal.complete() : void 0;
    });
  },
  getStructures: function(complete) {
    return this.jsonp("structures", {
      client: this.client
    }, (function(_this) {
      return function(result) {
        var i, ref, structure;
        _this.structures = {};
        ref = result.data;
        for (i in ref) {
          structure = ref[i];
          _this.structures[structure.name] = structure;
        }
        return typeof complete === "function" ? complete() : void 0;
      };
    })(this));
  },
  jsonp: function(endpoint, params, complete) {
    var el, script;
    params.callback = 'Basal.callback';
    script = ("" + document.location.protocol + this.domain + "/" + endpoint + "?") + $.param(params);
    el = document.createElement('script');
    el.src = script;
    el.addEventListener('load', function(e) {
      if (typeof complete === "function") {
        complete(Basal.data);
      }
      return Basal.data = false;
    }, false);
    return document.getElementsByTagName('head')[0].appendChild(el);
  },
  callback: function(data) {
    return Basal.data = data;
  },
  error: function(message) {
    throw new Error("basal: " + message);
  }
};

var Blog;

Blog = {
  i: function() {
    return Basal.i(config.basal.client);
  }
};

var config;

config = {
  "basal": {
    "client": "58add4455aa59b12b729e131"
  },
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
    "title": "Gold PR : Top Public Relations Firm + Digital Agency",
    "url": "https://www.goldpr.com/",
    "repo": "http://www.github.com/acidjazz/goldpr",
    "description": "Award winning public relations and digital agency. GOLD PR is a California based PR firm trusted by some of the largest brands across the globe.",
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJhcnRpY2xlLmNvZmZlZSIsImJhc2FsLmNvZmZlZSIsImJsb2cuY29mZmVlIiwiY29uZmlnLmNvZmZlZSIsImluZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOztBQUFBLENBQUEsR0FFRTtFQUFBLENBQUEsRUFBRyxTQUFBO1dBQ0QsSUFBQyxDQUFBLE9BQUQsR0FBVyxXQUFBLENBQVksSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsSUFBYixDQUFaLEVBQTZCLEdBQTdCO0VBRFYsQ0FBSDtFQUdBLENBQUEsRUFDRTtJQUFBLE1BQUEsRUFBUSxLQUFSO0lBQ0EsT0FBQSxFQUFTLENBRFQ7R0FKRjtFQU9BLElBQUEsRUFBTSxTQUFDLEVBQUQsRUFBSyxNQUFMLEVBQW1CLEdBQW5COztNQUFLLFNBQU87OztNQUFPLE1BQUk7O0lBRTNCLElBQUcsQ0FBQSxDQUFBLEVBQUEsWUFBa0IsTUFBbEIsQ0FBSDtNQUNFLEVBQUEsR0FBSyxDQUFBLENBQUUsRUFBRixFQURQOztJQUdBLElBQUcsTUFBQSxLQUFZLEtBQWY7TUFDRSxFQUFFLENBQUMsV0FBSCxDQUFlLE1BQWYsRUFERjs7SUFHQSxJQUFHLEdBQUEsS0FBUyxLQUFaO01BQ0UsRUFBRSxDQUFDLFFBQUgsQ0FBWSxHQUFaLEVBREY7O0FBR0EsV0FBTztFQVhILENBUE47RUFvQkEsR0FBQSxFQUFLLFNBQUMsRUFBRCxFQUFLLENBQUw7O01BQUssSUFBRTs7SUFFVixJQUFHLENBQUMsQ0FBQyxNQUFGLElBQWEsQ0FBQyxDQUFDLE9BQUYsR0FBWSxDQUE1QjtNQUVFLElBQUMsQ0FBQSxJQUFELENBQU0sRUFBTixFQUFVLEtBQVYsRUFBaUIsUUFBakI7TUFDQSxVQUFBLENBQVcsU0FBQTtRQUNULElBQUMsQ0FBQSxJQUFELENBQU0sRUFBTixFQUFVLFFBQVYsRUFBb0IsS0FBcEI7ZUFDQSxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxJQUFWLEVBQWdCLEtBQWhCO01BRlMsQ0FBWCxFQUdFLENBQUMsQ0FBQyxPQUFGLEdBQVUsSUFBVixHQUFpQixHQUhuQixFQUhGO0tBQUEsTUFBQTtNQVNFLElBQUMsQ0FBQSxJQUFELENBQU0sRUFBTixFQUFVLElBQVYsRUFBZ0IsS0FBaEIsRUFURjs7RUFGRyxDQXBCTDtFQW1DQSxFQUFBLEVBQUksU0FBQyxFQUFELEVBQUssQ0FBTDtXQUNGLElBQUMsQ0FBQSxJQUFELENBQU0sRUFBTixFQUFVLEtBQVYsRUFBaUIsSUFBakI7RUFERSxDQW5DSjtFQXNDQSxJQUFBLEVBQU0sU0FBQyxFQUFELEVBQUssQ0FBTDtJQUVKLElBQUcsQ0FBQSxDQUFBLEVBQUEsWUFBa0IsTUFBbEIsQ0FBSDtNQUNFLEVBQUEsR0FBSyxDQUFBLENBQUUsRUFBRixFQURQOztJQUdBLElBQUcsRUFBRSxDQUFDLFFBQUgsQ0FBWSxLQUFaLENBQUg7TUFDRSxJQUFDLENBQUEsRUFBRCxDQUFJLEVBQUosRUFBUSxDQUFSLEVBREY7S0FBQSxNQUFBO01BR0UsSUFBQyxDQUFBLEdBQUQsQ0FBSyxFQUFMLEVBQVMsQ0FBVCxFQUhGOztFQUxJLENBdENOO0VBa0RBLE1BQUEsRUFBUSxTQUFDLEdBQUQ7QUFDTixXQUFPLGtCQUFBLENBQW1CLEdBQW5CLENBQ0wsQ0FBQyxPQURJLENBQ0ksSUFESixFQUNVLEtBRFYsQ0FFTCxDQUFDLE9BRkksQ0FFSSxJQUZKLEVBRVUsS0FGVixDQUdMLENBQUMsT0FISSxDQUdJLEtBSEosRUFHVyxLQUhYLENBSUwsQ0FBQyxPQUpJLENBSUksS0FKSixFQUlXLEtBSlgsQ0FLTCxDQUFDLE9BTEksQ0FLSSxLQUxKLEVBS1csS0FMWCxDQU1MLENBQUMsT0FOSSxDQU1JLE1BTkosRUFNWSxHQU5aO0VBREQsQ0FsRFI7RUEyREEsQ0FBQSxFQUFHLFNBQUMsUUFBRCxFQUFXLE1BQVgsRUFBbUIsS0FBbkIsRUFBMEIsS0FBMUI7V0FDRCxJQUFJLENBQUMsSUFBTCxDQUFVLENBQUMsYUFBRCxFQUFnQixRQUFoQixFQUEwQixNQUExQixFQUFrQyxLQUFsQyxFQUF5QyxLQUF6QyxDQUFWO0VBREMsQ0EzREg7RUE4REEsSUFBQSxFQUFNLFNBQUMsR0FBRCxFQUFNLEdBQU47QUFDSixXQUFPLElBQUksQ0FBQyxLQUFMLENBQVcsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFBLEdBQWdCLEdBQTNCLENBQUEsR0FBa0M7RUFEckMsQ0E5RE47RUFpRUEsSUFBQSxFQUFNLFNBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsUUFBbkI7QUFFSixRQUFBO0lBQUEsRUFBQSxHQUFLLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCO0lBQ0wsRUFBRSxDQUFDLElBQUgsR0FBVTtJQUNWLEVBQUUsQ0FBQyxHQUFILEdBQVM7SUFDVCxFQUFFLENBQUMsZ0JBQUgsQ0FBb0IsTUFBcEIsRUFBNkIsU0FBQyxDQUFEO01BQzNCLElBQWMsT0FBTyxRQUFQLEtBQW1CLFVBQWpDO1FBQUEsUUFBQSxDQUFBLEVBQUE7O01BQ0EsSUFBd0IsUUFBQSxLQUFjLE1BQWQsSUFBNEIsUUFBQSxLQUFjLEtBQWxFO2VBQUEsTUFBTyxDQUFBLFFBQUEsQ0FBUyxDQUFDLENBQWpCLENBQUEsRUFBQTs7SUFGMkIsQ0FBN0IsRUFHRSxLQUhGO1dBS0EsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFkLENBQTBCLEVBQTFCO0VBVkksQ0FqRU47RUE2RUEsR0FBQSxFQUFLLFNBQUE7QUFDSCxRQUFBO0lBQUEsS0FBQSxHQUFRLDJoQ0FBQSxHQW1CRCxNQUFNLENBQUMsSUFBSSxDQUFDO1dBRW5CLE9BQU8sQ0FBQyxHQUFSLENBQVksS0FBWixFQUFtQiw2Q0FBbkI7RUF0QkcsQ0E3RUw7RUFxR0EsTUFBQSxFQUFRLFNBQUE7SUFDTixJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBUCxHQUFxQixNQUFNLENBQUMsV0FBN0IsQ0FBQSxHQUE0QyxHQUE3QyxDQUFBLElBQXFELENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBUCxHQUFvQixNQUFNLENBQUMsVUFBNUIsQ0FBQSxHQUEwQyxHQUEzQyxDQUF6RDtNQUNFLElBQUMsQ0FBQSxHQUFELENBQUE7YUFDQSxhQUFBLENBQWMsSUFBQyxDQUFBLE9BQWYsRUFGRjs7RUFETSxDQXJHUjs7O0FBMEdGLENBQUMsQ0FBQyxDQUFGLENBQUE7O0FDNUdBLElBQUE7O0FBQUEsT0FBQSxHQUVFO0VBQUEsQ0FBQSxFQUFHLFNBQUE7QUFFRCxRQUFBO0lBQUEsSUFBQSxHQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQXJCLENBQTZCLEdBQTdCLEVBQWtDLEVBQWxDO0lBRVAsQ0FBQSxDQUFFLGNBQUYsQ0FBaUIsQ0FBQyxJQUFsQixDQUF1QixZQUF2QixFQUFxQyxJQUFyQztJQUNBLENBQUEsQ0FBRSxjQUFGLENBQWlCLENBQUMsSUFBbEIsQ0FBdUIsaUJBQXZCLEVBQTBDLE1BQTFDO1dBRUEsS0FBSyxDQUFDLENBQU4sQ0FBUSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQXJCLEVBQTZCLFNBQUE7YUFDM0IsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLElBQVYsQ0FBZSxDQUFBLFNBQUEsS0FBQTtlQUFBLFNBQUMsQ0FBRCxFQUFJLEVBQUo7QUFDYixjQUFBO1VBQUEsR0FBQSxHQUFNLENBQUEsQ0FBRSxFQUFGO1VBQ04sR0FBRyxDQUFDLElBQUosQ0FBUyxNQUFBLENBQU8sR0FBRyxDQUFDLElBQUosQ0FBUyxPQUFULENBQVAsQ0FBeUIsQ0FBQyxNQUExQixDQUFpQyxjQUFqQyxDQUFUO2lCQUNBLEdBQUcsQ0FBQyxJQUFKLENBQVMsWUFBVCxFQUF1QixNQUFBLENBQU8sR0FBRyxDQUFDLElBQUosQ0FBUyxPQUFULENBQVAsQ0FBeUIsQ0FBQyxRQUExQixDQUFBLENBQXZCO1FBSGE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQWY7SUFEMkIsQ0FBN0I7RUFQQyxDQUFIOzs7QUNGRixJQUFBLEtBQUE7RUFBQTs7QUFBQSxLQUFBLEdBRUU7RUFBQSxNQUFBLEVBQVEsa0JBQVI7RUFDQSxNQUFBLEVBQVEsS0FEUjtFQUdBLElBQUEsRUFBTSxLQUhOO0VBSUEsVUFBQSxFQUFZLEtBSlo7RUFNQSxRQUFBLEVBQVUsS0FOVjtFQVFBLENBQUEsRUFBRyxTQUFDLE1BQUQsRUFBUyxRQUFUO0lBRUQsSUFBQyxDQUFBLFFBQUQsR0FBWTtJQUVaLElBQUMsQ0FBQSxNQUFELEdBQVU7V0FFVixJQUFDLENBQUEsYUFBRCxDQUFlLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQTtRQUNiLEtBQUMsQ0FBQSxJQUFELENBQUE7ZUFDQSxLQUFDLENBQUEsS0FBRCxDQUFBO01BRmE7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQWY7RUFOQyxDQVJIO0VBa0JBLElBQUEsRUFBTSxTQUFDLEVBQUQsRUFBSyxJQUFMLEVBQVcsSUFBWCxFQUFpQixLQUFqQjtBQUNKLFlBQU8sSUFBUDtBQUFBLFdBQ08sZ0JBRFA7ZUFFSSxFQUFFLENBQUMsR0FBSCxDQUFPLGtCQUFQLEVBQTJCLE1BQUEsR0FBTyxLQUFLLENBQUMsUUFBUyxDQUFBLElBQUEsQ0FBSyxDQUFDLEtBQTVCLEdBQWtDLEdBQTdEO0FBRkosV0FHTyxNQUhQO2VBSUksRUFBRSxDQUFDLElBQUgsQ0FBUSxNQUFBLENBQU8sS0FBSyxDQUFDLFFBQVMsQ0FBQSxJQUFBLENBQUssQ0FBQyxLQUE1QixFQUFtQyxZQUFuQyxDQUFnRCxDQUFDLE1BQWpELENBQXdELEVBQUUsQ0FBQyxJQUFILENBQVEsa0JBQVIsQ0FBeEQsQ0FBUjtBQUpKLFdBS08sT0FMUDtlQU1JLEVBQUUsQ0FBQyxJQUFILENBQVEsS0FBUixFQUFlLEtBQUssQ0FBQyxRQUFTLENBQUEsSUFBQSxDQUFLLENBQUMsS0FBcEM7QUFOSixXQU9PLE1BUFA7ZUFRSSxFQUFFLENBQUMsSUFBSCxDQUFRLEtBQUssQ0FBQyxRQUFTLENBQUEsSUFBQSxDQUFLLENBQUMsS0FBN0I7QUFSSixXQVNPLE1BVFA7ZUFVSSxFQUFFLENBQUMsSUFBSCxDQUFRLE1BQVIsRUFBZ0IsS0FBSyxDQUFDLFFBQVMsQ0FBQSxJQUFBLENBQUssQ0FBQyxLQUFyQztBQVZKO0VBREksQ0FsQk47RUErQkEsS0FBQSxFQUFPLFNBQUE7V0FDTCxDQUFBLENBQUUsY0FBRixDQUFpQixDQUFDLElBQWxCLENBQXVCLFNBQUMsQ0FBRCxFQUFJLEVBQUo7QUFFckIsVUFBQTtNQUFBLEVBQUEsR0FBSyxDQUFBLENBQUUsRUFBRjtNQUNMLFNBQUEsR0FBWSxFQUFFLENBQUMsSUFBSCxDQUFRLGlCQUFSO01BQ1osSUFBQSxHQUFPLEVBQUUsQ0FBQyxJQUFILENBQVEsWUFBUjtNQUNQLFVBQUEsR0FBYSxFQUFFLENBQUMsSUFBSCxDQUFRLGNBQVI7TUFDYixJQUFBLEdBQU8sRUFBRSxDQUFDLElBQUgsQ0FBUSxZQUFSO01BQ1AsSUFBQSxHQUFPLEVBQUUsQ0FBQyxJQUFILENBQVEsWUFBUjtNQUVQLElBQXdELG1DQUF4RDtRQUFBLEtBQUssQ0FBQyxLQUFOLENBQVksd0JBQUEsR0FBeUIsU0FBekIsR0FBbUMsSUFBL0MsRUFBQTs7QUFFQTtBQUFBO1dBQUEsVUFBQTs7UUFDRSxJQUFZLEtBQUssQ0FBQyxNQUFOLEtBQWtCLElBQTlCO0FBQUEsbUJBQUE7O1FBQ0EsSUFBRyxJQUFBLEtBQVEsS0FBSyxDQUFDLElBQWpCO1VBQ0UsSUFBcUMsRUFBRSxDQUFDLElBQUgsQ0FBUSxZQUFSLENBQUEsS0FBeUIsU0FBOUQ7WUFBQSxFQUFFLENBQUMsSUFBSCxDQUFRLE9BQVIsRUFBaUIsS0FBSyxDQUFDLFVBQXZCLEVBQUE7Ozs7QUFDQTtBQUFBO2lCQUFBLFlBQUE7O2NBQ0UsSUFBRyxNQUFNLENBQUMsSUFBUCxLQUFlLFVBQWxCO2dCQUNFLElBQUcsSUFBSDtnQ0FDRSxLQUFLLENBQUMsSUFBTixDQUFXLEVBQVgsRUFBZSxJQUFmLEVBQXFCLE1BQU0sQ0FBQyxJQUE1QixFQUFrQyxLQUFsQyxHQURGO2lCQUFBLE1BRUssSUFBRyxJQUFIO2dDQUNILEVBQUUsQ0FBQyxJQUFILENBQVEsSUFBUixFQUFjLE1BQU0sQ0FBQyxLQUFyQixHQURHO2lCQUFBLE1BQUE7Z0NBR0gsRUFBRSxDQUFDLElBQUgsQ0FBUSxNQUFNLENBQUMsS0FBZixHQUhHO2lCQUhQO2VBQUEsTUFBQTtzQ0FBQTs7QUFERjs7Z0JBRkY7U0FBQSxNQUFBOytCQUFBOztBQUZGOztJQVhxQixDQUF2QjtFQURLLENBL0JQO0VBd0RBLElBQUEsRUFBTSxTQUFBO1dBRUosQ0FBQSxDQUFFLGFBQUYsQ0FBZ0IsQ0FBQyxJQUFqQixDQUF1QixTQUFDLENBQUQsRUFBSSxFQUFKO0FBRXJCLFVBQUE7TUFBQSxFQUFBLEdBQUssQ0FBQSxDQUFFLEVBQUY7TUFDTCxTQUFBLEdBQVksRUFBRSxDQUFDLElBQUgsQ0FBUSxpQkFBUjtNQUVaLElBQXdELG1DQUF4RDtRQUFBLEtBQUssQ0FBQyxLQUFOLENBQVksd0JBQUEsR0FBeUIsU0FBekIsR0FBbUMsSUFBL0MsRUFBQTs7TUFFQSxRQUFBLEdBQVcsRUFBRSxDQUFDLFFBQUgsQ0FBQSxDQUFhLENBQUMsTUFBZCxDQUFBO0FBRVg7QUFBQTtXQUFBLFdBQUE7OztRQUNFLElBQVksS0FBSyxDQUFDLE1BQU4sS0FBa0IsSUFBOUI7QUFBQSxtQkFBQTs7UUFDQSxHQUFBLEdBQU0sUUFBUSxDQUFDLEtBQVQsQ0FBQTtRQUNOLElBQXlELEdBQUcsQ0FBQyxRQUFKLENBQWEsWUFBYixDQUF6RDtVQUFBLEdBQUcsQ0FBQyxJQUFKLENBQVMsTUFBVCxFQUFpQixHQUFHLENBQUMsSUFBSixDQUFTLFlBQVQsQ0FBQSxHQUF5QixLQUFLLENBQUMsSUFBaEQsRUFBQTs7UUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLEdBQVQsQ0FBYSxDQUFDLElBQWQsQ0FBbUIsU0FBQyxFQUFELEVBQUssR0FBTDtBQUNqQixjQUFBO1VBQUEsSUFBQSxHQUFPLENBQUEsQ0FBRSxHQUFGO1VBQ1AsSUFBQSxHQUFPLElBQUksQ0FBQyxJQUFMLENBQVUsWUFBVjtVQUNQLElBQUEsR0FBTyxJQUFJLENBQUMsSUFBTCxDQUFVLFlBQVY7VUFDUCxLQUFBLG1EQUFnQyxDQUFFLEtBQTFCLENBQWdDLEdBQWhDO1VBQ1IsS0FBQSxtREFBZ0MsQ0FBRSxLQUExQixDQUFnQyxHQUFoQztVQUVSLElBQWUsSUFBQSxLQUFRLE1BQVIsSUFBc0IsS0FBQSxLQUFTLE1BQTlDO0FBQUEsbUJBQU8sS0FBUDs7VUFFQSxJQUFHLEtBQUEsS0FBUyxNQUFaO1lBQ0UsS0FBQSxHQUFRLENBQUMsSUFBRDtZQUNSLEtBQUEsR0FBUSxDQUFDLElBQUQsRUFGVjs7QUFJQTtlQUFBLCtDQUFBOztZQUNFLElBQUEsR0FBTyxLQUFNLENBQUEsQ0FBQTtZQUViLElBQUcsSUFBQSxLQUFVLE1BQWI7QUFDRSxzQkFBTyxJQUFQO0FBQUEscUJBQ08sZ0JBRFA7Z0NBRUksSUFBSSxDQUFDLEdBQUwsQ0FBUyxrQkFBVCxFQUE2QixNQUFBLEdBQU8sS0FBSyxDQUFDLFFBQVMsQ0FBQSxJQUFBLENBQUssQ0FBQyxLQUE1QixHQUFrQyxHQUEvRDtBQURHO0FBRFAscUJBR08sTUFIUDtnQ0FJSSxJQUFJLENBQUMsSUFBTCxDQUFVLE1BQUEsQ0FBTyxLQUFLLENBQUMsUUFBUyxDQUFBLElBQUEsQ0FBSyxDQUFDLEtBQTVCLEVBQW1DLFlBQW5DLENBQWdELENBQUMsTUFBakQsQ0FBd0QsSUFBSSxDQUFDLElBQUwsQ0FBVSxrQkFBVixDQUF4RCxDQUFWO0FBREc7QUFIUCxxQkFLTyxPQUxQO2dDQU1JLElBQUksQ0FBQyxJQUFMLENBQVUsS0FBVixFQUFpQixLQUFLLENBQUMsUUFBUyxDQUFBLElBQUEsQ0FBSyxDQUFDLEtBQXRDO0FBREc7QUFMUCxxQkFPTyxNQVBQO2dDQVFJLElBQUksQ0FBQyxJQUFMLENBQVUsS0FBSyxDQUFDLFFBQVMsQ0FBQSxJQUFBLENBQUssQ0FBQyxLQUEvQjtBQURHO0FBUFAscUJBU08sTUFUUDtnQ0FVSSxJQUFJLENBQUMsSUFBTCxDQUFVLE1BQVYsRUFBa0IsS0FBSyxDQUFDLFFBQVMsQ0FBQSxJQUFBLENBQUssQ0FBQyxLQUF2QztBQURHO0FBVFA7O0FBQUEsZUFERjthQUFBLE1BQUE7Y0FjRSxJQUFHLElBQUEsS0FBUSxnQkFBWDs4QkFDRSxJQUFJLENBQUMsSUFBTCxDQUFVLEtBQUssQ0FBQyxJQUFoQixHQURGO2VBQUEsTUFBQTs4QkFHRSxJQUFJLENBQUMsSUFBTCxDQUFVLEtBQUssQ0FBQyxRQUFTLENBQUEsSUFBQSxDQUFLLENBQUMsS0FBL0IsR0FIRjtlQWRGOztBQUhGOztRQWJpQixDQUFuQjtxQkFrQ0EsRUFBRSxDQUFDLE1BQUgsQ0FBVSxHQUFWO0FBdENGOztJQVRxQixDQUF2QixDQWlERyxDQUFDLE9BakRKLENBQUEsQ0FpRGEsQ0FBQyxJQWpEZCxDQWlEbUIsU0FBQTtvREFDZixLQUFLLENBQUM7SUFEUyxDQWpEbkI7RUFGSSxDQXhETjtFQThHQSxhQUFBLEVBQWUsU0FBQyxRQUFEO1dBQ2IsSUFBQyxDQUFBLEtBQUQsQ0FBTyxZQUFQLEVBQXFCO01BQUEsTUFBQSxFQUFRLElBQUMsQ0FBQSxNQUFUO0tBQXJCLEVBQXNDLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQyxNQUFEO0FBQ3BDLFlBQUE7UUFBQSxLQUFDLENBQUEsVUFBRCxHQUFjO0FBQ2Q7QUFBQSxhQUFBLFFBQUE7O1VBQ0UsS0FBQyxDQUFBLFVBQVcsQ0FBQSxTQUFTLENBQUMsSUFBVixDQUFaLEdBQThCO0FBRGhDO2dEQUVBO01BSm9DO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUF0QztFQURhLENBOUdmO0VBcUhBLEtBQUEsRUFBTyxTQUFDLFFBQUQsRUFBVyxNQUFYLEVBQW1CLFFBQW5CO0FBRUwsUUFBQTtJQUFBLE1BQU0sQ0FBQyxRQUFQLEdBQWtCO0lBRWxCLE1BQUEsR0FBUyxDQUFBLEVBQUEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQXJCLEdBQWdDLElBQUMsQ0FBQSxNQUFqQyxHQUF3QyxHQUF4QyxHQUEyQyxRQUEzQyxHQUFvRCxHQUFwRCxDQUFBLEdBQXlELENBQUMsQ0FBQyxLQUFGLENBQVEsTUFBUjtJQUVsRSxFQUFBLEdBQUssUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkI7SUFDTCxFQUFFLENBQUMsR0FBSCxHQUFTO0lBQ1QsRUFBRSxDQUFDLGdCQUFILENBQW9CLE1BQXBCLEVBQTZCLFNBQUMsQ0FBRDs7UUFDM0IsU0FBVSxLQUFLLENBQUM7O2FBQ2hCLEtBQUssQ0FBQyxJQUFOLEdBQWE7SUFGYyxDQUE3QixFQUdFLEtBSEY7V0FLQSxRQUFRLENBQUMsb0JBQVQsQ0FBOEIsTUFBOUIsQ0FBc0MsQ0FBQSxDQUFBLENBQUUsQ0FBQyxXQUF6QyxDQUFxRCxFQUFyRDtFQWJLLENBckhQO0VBb0lBLFFBQUEsRUFBVSxTQUFDLElBQUQ7V0FDUixLQUFLLENBQUMsSUFBTixHQUFhO0VBREwsQ0FwSVY7RUF1SUEsS0FBQSxFQUFPLFNBQUMsT0FBRDtBQUNMLFVBQVUsSUFBQSxLQUFBLENBQU0sU0FBQSxHQUFVLE9BQWhCO0VBREwsQ0F2SVA7OztBQ0ZGLElBQUE7O0FBQUEsSUFBQSxHQUVFO0VBQUEsQ0FBQSxFQUFHLFNBQUE7V0FFRCxLQUFLLENBQUMsQ0FBTixDQUFRLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBckI7RUFGQyxDQUFIOzs7QUNGRixJQUFBOztBQUFBLE1BQUEsR0FBUztFQUFDLE9BQUEsRUFBUTtJQUFDLFFBQUEsRUFBUywwQkFBVjtHQUFUO0VBQStDLFNBQUEsRUFBVSxDQUFDLFlBQUQsRUFBYyxVQUFkLEVBQXlCLFdBQXpCLEVBQXFDLFFBQXJDLEVBQThDLGVBQTlDLEVBQThELE1BQTlELEVBQXFFLFdBQXJFLEVBQWlGLFdBQWpGLEVBQTZGLFNBQTdGLEVBQXVHLFVBQXZHLEVBQWtILE1BQWxILEVBQXlILE1BQXpILEVBQWdJLFlBQWhJLEVBQTZJLFNBQTdJLEVBQXVKLE9BQXZKLEVBQStKLFFBQS9KLEVBQXdLLGNBQXhLLEVBQXVMLEtBQXZMLEVBQTZMLFVBQTdMLEVBQXdNLFFBQXhNLEVBQWlOLE9BQWpOLEVBQXlOLFlBQXpOLEVBQXNPLE1BQXRPLEVBQTZPLFFBQTdPLEVBQXNQLFlBQXRQLEVBQW1RLFNBQW5RLEVBQTZRLFNBQTdRLEVBQXVSLE1BQXZSLEVBQThSLEtBQTlSLEVBQW9TLE1BQXBTLEVBQTJTLE9BQTNTLEVBQW1ULFNBQW5ULEVBQTZULFNBQTdULEVBQXVVLFFBQXZVLEVBQWdWLFFBQWhWLENBQXpEO0VBQW1aLE9BQUEsRUFBUTtJQUFDLFFBQUEsRUFBUyxTQUFWO0lBQW9CLFFBQUEsRUFBUyxTQUE3QjtJQUF1QyxRQUFBLEVBQVMsU0FBaEQ7SUFBMEQsTUFBQSxFQUFPLFNBQWpFO0lBQTJFLE9BQUEsRUFBUSxTQUFuRjtJQUE2RixPQUFBLEVBQVEsU0FBckc7R0FBM1o7RUFBMmdCLE1BQUEsRUFBTztJQUFDLE9BQUEsRUFBUTtNQUFDLGFBQUEsRUFBYyxjQUFmO01BQThCLFdBQUEsRUFBWSxNQUExQztLQUFUO0lBQTJELE9BQUEsRUFBUTtNQUFDLGFBQUEsRUFBYyxlQUFmO01BQStCLFdBQUEsRUFBWSxNQUEzQztLQUFuRTtJQUFzSCxPQUFBLEVBQVE7TUFBQyxhQUFBLEVBQWMsY0FBZjtNQUE4QixXQUFBLEVBQVksTUFBMUM7S0FBOUg7SUFBZ0wsT0FBQSxFQUFRO01BQUMsYUFBQSxFQUFjLGFBQWY7TUFBNkIsV0FBQSxFQUFZLE1BQXpDO0tBQXhMO0lBQXlPLE9BQUEsRUFBUTtNQUFDLGFBQUEsRUFBYyxjQUFmO01BQThCLFdBQUEsRUFBWSxNQUExQztLQUFqUDtJQUFtUyxPQUFBLEVBQVE7TUFBQyxhQUFBLEVBQWMsZUFBZjtNQUErQixXQUFBLEVBQVksTUFBM0M7S0FBM1M7SUFBOFYsT0FBQSxFQUFRO01BQUMsYUFBQSxFQUFjLGFBQWY7TUFBNkIsV0FBQSxFQUFZLE1BQXpDO0tBQXRXO0lBQXVaLElBQUEsRUFBSztNQUFDLGFBQUEsRUFBYyxpQkFBZjtNQUFpQyxXQUFBLEVBQVksTUFBN0M7S0FBNVo7SUFBaWQsSUFBQSxFQUFLO01BQUMsYUFBQSxFQUFjLGlCQUFmO01BQWlDLFdBQUEsRUFBWSxNQUE3QztLQUF0ZDtJQUEyZ0IsSUFBQSxFQUFLO01BQUMsYUFBQSxFQUFjLGNBQWY7TUFBOEIsV0FBQSxFQUFZLE1BQTFDO0tBQWhoQjtJQUFra0IsSUFBQSxFQUFLO01BQUMsYUFBQSxFQUFjLGFBQWY7TUFBNkIsV0FBQSxFQUFZLE1BQXpDO0tBQXZrQjtJQUF3bkIsSUFBQSxFQUFLO01BQUMsYUFBQSxFQUFjLGNBQWY7TUFBOEIsV0FBQSxFQUFZLE1BQTFDO0tBQTduQjtJQUErcUIsSUFBQSxFQUFLO01BQUMsYUFBQSxFQUFjLGFBQWY7TUFBNkIsV0FBQSxFQUFZLE9BQXpDO0tBQXByQjtHQUFsaEI7RUFBeXZDLE1BQUEsRUFBTyxDQUFDLFVBQUQsRUFBWSxVQUFaLEVBQXVCLE1BQXZCLEVBQThCLFVBQTlCLEVBQXlDLE1BQXpDLEVBQWdELFNBQWhELEVBQTBELFNBQTFELENBQWh3QztFQUFxMEMsTUFBQSxFQUFPO0lBQUMsT0FBQSxFQUFRLHNEQUFUO0lBQWdFLEtBQUEsRUFBTSx5QkFBdEU7SUFBZ0csTUFBQSxFQUFPLHVDQUF2RztJQUErSSxhQUFBLEVBQWMsa0pBQTdKO0lBQWdULFVBQUEsRUFBVyxrREFBM1Q7SUFBOFcsT0FBQSxFQUFRLGVBQXRYO0dBQTUwQztFQUFtdEQsUUFBQSxFQUFTO0lBQUMsVUFBQSxFQUFXLGdDQUFaO0lBQTZDLFNBQUEsRUFBVSxnQ0FBdkQ7SUFBd0YsV0FBQSxFQUFZLGlDQUFwRztJQUFzSSxNQUFBLEVBQU8sa0JBQTdJO0lBQWdLLEtBQUEsRUFBTSxpQ0FBdEs7SUFBd00sT0FBQSxFQUFRLFVBQWhOO0dBQTV0RDtFQUF3N0QsU0FBQSxFQUFVO0lBQUMsR0FBQSxFQUFJO01BQUMsTUFBQSxFQUFPLGNBQVI7TUFBdUIsTUFBQSxFQUFPLG1CQUE5QjtNQUFrRCxNQUFBLEVBQU8sNENBQXpEO01BQXNHLE9BQUEsRUFBUSw2QkFBOUc7S0FBTDtJQUFrSixHQUFBLEVBQUk7TUFBQyxNQUFBLEVBQU8sY0FBUjtNQUF1QixNQUFBLEVBQU8sbUJBQTlCO01BQWtELE1BQUEsRUFBTyxnREFBekQ7TUFBMEcsT0FBQSxFQUFRLDZCQUFsSDtLQUF0SjtJQUF1UyxHQUFBLEVBQUk7TUFBQyxNQUFBLEVBQU8sY0FBUjtNQUF1QixNQUFBLEVBQU8sbUJBQTlCO01BQWtELE1BQUEsRUFBTyw2Q0FBekQ7S0FBM1M7SUFBbVosR0FBQSxFQUFJO01BQUMsTUFBQSxFQUFPLGNBQVI7TUFBdUIsTUFBQSxFQUFPLGdCQUE5QjtNQUErQyxNQUFBLEVBQU8sMkNBQXREO0tBQXZaO0lBQTBmLEdBQUEsRUFBSTtNQUFDLE1BQUEsRUFBTyxjQUFSO01BQXVCLE1BQUEsRUFBTyxnQkFBOUI7TUFBK0MsTUFBQSxFQUFPLHFDQUF0RDtLQUE5ZjtJQUEybEIsR0FBQSxFQUFJO01BQUMsTUFBQSxFQUFPLGNBQVI7TUFBdUIsTUFBQSxFQUFPLG1CQUE5QjtNQUFrRCxNQUFBLEVBQU8sNkNBQXpEO0tBQS9sQjtHQUFsOEQ7RUFBMG9GLE1BQUEsRUFBTztJQUFDO01BQUMsTUFBQSxFQUFPLFlBQVI7TUFBcUIsVUFBQSxFQUFXLGFBQWhDO01BQThDLE9BQUEsRUFBUSxrQkFBdEQ7S0FBRCxFQUEyRTtNQUFDLE1BQUEsRUFBTyxlQUFSO01BQXdCLFVBQUEsRUFBVyx5QkFBbkM7TUFBNkQsT0FBQSxFQUFRLGtCQUFyRTtLQUEzRSxFQUFvSztNQUFDLE1BQUEsRUFBTyxtQkFBUjtNQUE0QixVQUFBLEVBQVcseUJBQXZDO01BQWlFLE9BQUEsRUFBUSxxQkFBekU7S0FBcEssRUFBb1E7TUFBQyxNQUFBLEVBQU8sY0FBUjtNQUF1QixVQUFBLEVBQVcsa0JBQWxDO01BQXFELE9BQUEsRUFBUSxtQkFBN0Q7S0FBcFEsRUFBc1Y7TUFBQyxNQUFBLEVBQU8sYUFBUjtNQUFzQixVQUFBLEVBQVcsOEJBQWpDO01BQWdFLE9BQUEsRUFBUSxvQkFBeEU7S0FBdFYsRUFBb2I7TUFBQyxNQUFBLEVBQU8sY0FBUjtNQUF1QixVQUFBLEVBQVcsa0JBQWxDO01BQXFELE9BQUEsRUFBUSxtQkFBN0Q7S0FBcGIsRUFBc2dCO01BQUMsTUFBQSxFQUFPLGVBQVI7TUFBd0IsVUFBQSxFQUFXLGtCQUFuQztNQUFzRCxPQUFBLEVBQVEsb0JBQTlEO0tBQXRnQixFQUEwbEI7TUFBQyxNQUFBLEVBQU8sZ0JBQVI7TUFBeUIsVUFBQSxFQUFXLHdCQUFwQztNQUE2RCxPQUFBLEVBQVEsb0JBQXJFO0tBQTFsQixFQUFxckI7TUFBQyxNQUFBLEVBQU8sZUFBUjtNQUF3QixVQUFBLEVBQVcsa0JBQW5DO01BQXNELE9BQUEsRUFBUSxtQkFBOUQ7S0FBcnJCLEVBQXd3QjtNQUFDLE1BQUEsRUFBTyxnQkFBUjtNQUF5QixVQUFBLEVBQVcsaUJBQXBDO01BQXNELE9BQUEsRUFBUSx3QkFBOUQ7S0FBeHdCLEVBQWcyQjtNQUFDLE1BQUEsRUFBTyxZQUFSO01BQXFCLFVBQUEsRUFBVyxrQkFBaEM7TUFBbUQsT0FBQSxFQUFRLGtCQUEzRDtLQUFoMkIsRUFBKzZCO01BQUMsTUFBQSxFQUFPLGdCQUFSO01BQXlCLFVBQUEsRUFBVyxrQkFBcEM7TUFBdUQsT0FBQSxFQUFRLHVCQUEvRDtLQUEvNkIsRUFBdWdDO01BQUMsTUFBQSxFQUFPLGdCQUFSO01BQXlCLFVBQUEsRUFBVyxvQkFBcEM7TUFBeUQsT0FBQSxFQUFRLHVCQUFqRTtLQUF2Z0MsRUFBaW1DO01BQUMsTUFBQSxFQUFPLGFBQVI7TUFBc0IsVUFBQSxFQUFXLDJCQUFqQztNQUE2RCxPQUFBLEVBQVEsbUJBQXJFO0tBQWptQyxFQUEyckM7TUFBQyxNQUFBLEVBQU8sZUFBUjtNQUF3QixVQUFBLEVBQVcscUJBQW5DO01BQXlELE9BQUEsRUFBUSx1QkFBakU7S0FBM3JDLEVBQXF4QztNQUFDLE1BQUEsRUFBTyxlQUFSO01BQXdCLFVBQUEsRUFBVyw0QkFBbkM7TUFBZ0UsT0FBQSxFQUFRLHNCQUF4RTtLQUFyeEMsRUFBcTNDO01BQUMsTUFBQSxFQUFPLGtCQUFSO01BQTJCLFVBQUEsRUFBVyxXQUF0QztNQUFrRCxPQUFBLEVBQVEsc0JBQTFEO0tBQXIzQyxFQUF1OEM7TUFBQyxNQUFBLEVBQU8sY0FBUjtNQUF1QixVQUFBLEVBQVcseUJBQWxDO01BQTRELE9BQUEsRUFBUSxtQkFBcEU7S0FBdjhDLEVBQWdpRDtNQUFDLE1BQUEsRUFBTyxjQUFSO01BQXVCLFVBQUEsRUFBVywyQkFBbEM7TUFBOEQsT0FBQSxFQUFRLG1CQUF0RTtLQUFoaUQsRUFBMm5EO01BQUMsTUFBQSxFQUFPLGNBQVI7TUFBdUIsVUFBQSxFQUFXLGtDQUFsQztNQUFxRSxPQUFBLEVBQVEsb0JBQTdFO0tBQTNuRCxFQUE4dEQ7TUFBQyxNQUFBLEVBQU8saUJBQVI7TUFBMEIsVUFBQSxFQUFXLGdDQUFyQztNQUFzRSxPQUFBLEVBQVEscUJBQTlFO0tBQTl0RCxFQUFtMEQ7TUFBQyxNQUFBLEVBQU8saUJBQVI7TUFBMEIsVUFBQSxFQUFXLG9CQUFyQztNQUEwRCxPQUFBLEVBQVEscUJBQWxFO0tBQW4wRCxFQUE0NUQ7TUFBQyxNQUFBLEVBQU8sZUFBUjtNQUF3QixVQUFBLEVBQVcsMkJBQW5DO01BQStELE9BQUEsRUFBUSxvQkFBdkU7S0FBNTVELEVBQXkvRDtNQUFDLE1BQUEsRUFBTyxnQkFBUjtNQUF5QixVQUFBLEVBQVcseUJBQXBDO01BQThELE9BQUEsRUFBUSxvQkFBdEU7S0FBei9ELEVBQXFsRTtNQUFDLE1BQUEsRUFBTyxrQkFBUjtNQUEyQixVQUFBLEVBQVcsS0FBdEM7TUFBNEMsT0FBQSxFQUFRLHNCQUFwRDtLQUFybEU7R0FBanBGOzs7QUNBVCxJQUFBOztBQUFBLEtBQUEsR0FFRTtFQUFBLElBQUEsRUFBTSxFQUFOO0VBQ0EsT0FBQSxFQUFTLE1BRFQ7RUFFQSxHQUFBLEVBQUssS0FGTDtFQUdBLEtBQUEsRUFDRTtJQUFBLE1BQUEsRUFBUSxNQUFSO0lBQ0EsUUFBQSxFQUFVLEtBRFY7SUFFQSxLQUFBLEVBQU8sRUFGUDtHQUpGO0VBUUEsQ0FBQSxFQUFHLFNBQUE7SUFFRCxJQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBbEIsS0FBOEIsZ0JBQTlCLElBQW1ELFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBbEIsS0FBZ0MsUUFBdEY7TUFDRSxJQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBbEIsS0FBNEIsRUFBL0I7UUFDRSxRQUFRLENBQUMsUUFBVCxHQUFvQix5QkFBQSxHQUE0QixRQUFRLENBQUMsUUFBUSxDQUFDLEtBRHBFO09BQUEsTUFBQTtRQUdFLFFBQVEsQ0FBQyxRQUFULEdBQW9CLDBCQUh0QjtPQURGOztJQU1BLElBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFsQixLQUE4QixZQUFqQztNQUNFLElBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFsQixLQUE0QixFQUEvQjtRQUNFLFFBQVEsQ0FBQyxRQUFULEdBQW9CLHlCQUFBLEdBQTRCLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FEcEU7T0FBQSxNQUFBO1FBR0UsUUFBUSxDQUFDLFFBQVQsR0FBb0IsMEJBSHRCO09BREY7O0lBT0EsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFaLEdBQXFCLENBQUEsQ0FBRSxNQUFGO0lBQ3JCLElBQUcsUUFBUSxDQUFDLGVBQVQsS0FBOEIsTUFBakM7TUFDRSxLQUFLLENBQUMsR0FBTixHQUFZLFFBQVEsQ0FBQztNQUNyQixXQUFBLENBQVksS0FBSyxDQUFDLE9BQWxCLEVBQTJCLEdBQTNCLEVBRkY7O0lBS0EsSUFBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFuQixDQUFBLENBQUEsR0FBNkIsSUFBaEM7TUFDRSxXQUFBLENBQVksS0FBSyxDQUFDLE1BQWxCLEVBQTBCLEVBQTFCLEVBREY7O0lBR0EsS0FBSyxDQUFDLFFBQU4sQ0FBQTtJQUNBLFdBQUEsQ0FBWSxLQUFLLENBQUMsS0FBbEIsRUFBeUIsR0FBekI7SUFDQSxXQUFBLENBQVksS0FBSyxDQUFDLElBQWxCLEVBQXdCLEdBQXhCO0lBRUEsS0FBSyxDQUFDLFFBQU4sQ0FBQTtJQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksV0FBWjtJQUVBLElBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFsQixLQUE0QixFQUEvQjthQUNFLENBQUEsQ0FBRSxZQUFGLENBQWUsQ0FBQyxRQUFoQixDQUF5QixFQUFBLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUE5QyxFQUNFO1FBQUEsUUFBQSxFQUFVLEVBQVY7UUFDQSxNQUFBLEVBQVEsQ0FBQyxFQURUO09BREYsRUFERjs7RUEvQkMsQ0FSSDtFQTRDQSxPQUFBLEVBQVMsU0FBQTtJQUNQLElBQUcsS0FBSyxDQUFDLEdBQU4sS0FBZSxRQUFRLENBQUMsZUFBM0I7TUFDRSxLQUFLLENBQUMsR0FBTixHQUFZLFFBQVEsQ0FBQztNQUNyQixDQUFDLENBQUMsR0FBRixDQUFNLGFBQU47YUFDQSxVQUFBLENBQVcsU0FBQTtlQUNULENBQUMsQ0FBQyxFQUFGLENBQUssYUFBTDtNQURTLENBQVgsRUFFRSxFQUZGLEVBSEY7O0VBRE8sQ0E1Q1Q7RUFvREEsUUFBQSxFQUFVLFNBQUE7SUFFUixDQUFBLENBQUUsaUdBQUYsQ0FHRSxDQUFDLEtBSEgsQ0FHUyxLQUFLLENBQUMsTUFIZjtXQUlBLENBQUEsQ0FBRSxTQUFGLENBQVksQ0FBQyxLQUFiLENBQW1CLEtBQUssQ0FBQyxNQUF6QjtFQU5RLENBcERWO0VBNERBLE1BQUEsRUFBUSxTQUFBO1dBQ04sQ0FBQyxDQUFDLElBQUYsQ0FBTyw0Q0FBUDtFQURNLENBNURSO0VBK0RBLE1BQUEsRUFBUSxTQUFDLEtBQUQ7QUFFTixRQUFBO0lBQUEsS0FBSyxDQUFDLGNBQU4sQ0FBQTtJQUVBLElBQUEsR0FBTyxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsSUFBUixDQUFhLFFBQWI7SUFDUCxDQUFDLENBQUMsR0FBRixDQUFNLHVFQUFOO0lBQ0EsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxrQkFBTjtXQUNBLFVBQUEsQ0FBVyxTQUFBO01BQ1QsQ0FBQSxDQUFFLFlBQUYsQ0FBZSxDQUFDLFFBQWhCLENBQXlCLEdBQUEsR0FBSSxJQUE3QixFQUNFO1FBQUEsUUFBQSxFQUFVLEVBQVY7UUFDQSxNQUFBLEVBQVEsQ0FBQyxFQURUO09BREY7YUFHQSxRQUFRLENBQUMsSUFBVCxHQUFnQjtJQUpQLENBQVgsRUFLRSxHQUxGO0VBUE0sQ0EvRFI7RUE2RUEsTUFBQSxFQUFRLFNBQUE7QUFFTixRQUFBO0lBQUEsVUFBQSxHQUFhO0lBRWIsSUFBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFuQixDQUFBLENBQUEsR0FBaUMsVUFBakMsSUFBZ0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFaLEtBQXdCLEtBQTNFO01BQ0UsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxTQUFMO01BQ0EsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFaLEdBQXVCLEtBRnpCOztJQUlBLElBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBbkIsQ0FBQSxDQUFBLEdBQWlDLFVBQWpDLElBQWdELEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBWixLQUF3QixJQUEzRTtNQUNFLENBQUMsQ0FBQyxHQUFGLENBQU0sU0FBTjthQUNBLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBWixHQUF1QixNQUZ6Qjs7RUFSTSxDQTdFUjtFQXlGQSxJQUFBLEVBQU0sU0FBQTtXQUVKLENBQUEsQ0FBRSxVQUFGLENBQWEsQ0FBQyxJQUFkLENBQW1CLFNBQUMsQ0FBRCxFQUFJLEVBQUo7QUFDakIsVUFBQTtNQUFBLE9BQUEsR0FBVSxDQUFBLENBQUUsRUFBRixDQUFLLENBQUMsSUFBTixDQUFXLFNBQVg7TUFDVixJQUFHLEtBQUssQ0FBQyxVQUFOLENBQWlCLEVBQWpCLENBQUg7UUFDRSxDQUFDLENBQUMsR0FBRixDQUFNLHVFQUFOO1FBQ0EsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxVQUFBLEdBQVcsT0FBaEI7QUFDQSxlQUFPLEtBSFQ7O0lBRmlCLENBQW5CO0VBRkksQ0F6Rk47RUFrR0EsUUFBQSxFQUFVLFNBQUE7V0FDUixDQUFBLENBQUUsUUFBRixDQUFXLENBQUMsSUFBWixDQUFpQixTQUFDLENBQUQsRUFBSSxFQUFKO2FBQ2YsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFNLENBQUEsQ0FBQSxDQUFsQixHQUF1QjtJQURSLENBQWpCO0VBRFEsQ0FsR1Y7RUFzR0EsS0FBQSxFQUFPLFNBQUE7QUFDTCxRQUFBO0FBQUE7QUFBQTtTQUFBLFFBQUE7O01BRUUsSUFBRyxLQUFLLENBQUMsVUFBTixDQUFpQixFQUFqQixDQUFIO1FBQ0UsT0FBZSxLQUFLLENBQUMsUUFBTixDQUFlLEVBQWYsQ0FBZixFQUFDLGNBQUQsRUFBTztRQUNQLEdBQUEsR0FBTSxDQUFBLENBQUUsRUFBRjtRQUVOLE1BQUEsR0FBUyxHQUFHLENBQUMsSUFBSixDQUFTLFFBQVQ7UUFDVCxJQUFlLE1BQUEsS0FBVSxNQUF6QjtVQUFBLE1BQUEsR0FBUyxHQUFUOztRQUVBLElBQUcsSUFBQSxHQUFPLE1BQVAsSUFBa0IsR0FBRyxDQUFDLFFBQUosQ0FBYSxLQUFiLENBQXJCO1VBQ0UsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxHQUFMLEVBREY7O1FBRUEsSUFBRyxJQUFBLEdBQU8sTUFBUCxJQUFrQixHQUFHLENBQUMsUUFBSixDQUFhLElBQWIsQ0FBckI7dUJBQ0UsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxHQUFOLEdBREY7U0FBQSxNQUFBOytCQUFBOzs7QUFHQTs7Ozs7Ozs7OztXQVpGO09BQUEsTUFBQTs2QkFBQTs7QUFGRjs7RUFESyxDQXRHUDtFQWlJQSxVQUFBLEVBQVksU0FBQyxFQUFEO0FBRVYsUUFBQTtJQUFBLElBQUEsR0FBTyxFQUFFLENBQUMscUJBQUgsQ0FBQTtBQUVQLFdBQ0UsQ0FBQyxJQUFJLENBQUMsR0FBTCxJQUFZLENBQVosSUFBaUIsSUFBSSxDQUFDLE1BQUwsSUFBZSxDQUFqQyxDQUFBLElBQ0EsQ0FBQyxJQUFJLENBQUMsR0FBTCxJQUFZLE1BQU0sQ0FBQyxXQUFuQixJQUFrQyxJQUFJLENBQUMsTUFBTCxJQUFlLE1BQU0sQ0FBQyxXQUF6RDtFQU5RLENBaklaO0VBMElBLFFBQUEsRUFBVSxTQUFDLEVBQUQ7QUFDUixRQUFBO0lBQUEsSUFBQSxHQUFPLEVBQUUsQ0FBQyxxQkFBSCxDQUFBO0lBQ1AsTUFBQSxHQUFTLElBQUksQ0FBQyxNQUFMLEdBQVksSUFBSSxDQUFDO0lBRTFCLFFBQUEsR0FBVyxJQUFJLENBQUMsR0FBTCxHQUFXLE1BQUEsR0FBTztJQUM3QixTQUFBLEdBQVksTUFBTSxDQUFDLFdBQVAsR0FBbUI7SUFDL0IsR0FBQSxHQUFNLE1BQU0sQ0FBQyxXQUFQLEdBQW1CLENBQW5CLEdBQXVCLE1BQUEsR0FBTztJQUNwQyxJQUFBLEdBQU8sU0FBQSxHQUFVO0lBQ2pCLElBQUEsR0FBTyxHQUFBLEdBQU0sSUFBSSxDQUFDLEdBQUwsQ0FBUyxJQUFULENBQUEsR0FBZSxHQUFmLEdBQW1CO0lBQ2hDLE1BQUEsR0FBUyxJQUFJLENBQUMsR0FBTCxDQUFTLElBQVQsQ0FBQSxHQUFlLEdBQWYsR0FBbUI7SUFDNUIsSUFBb0IsSUFBQSxHQUFPLENBQTNCO01BQUEsTUFBQSxHQUFTLENBQUMsT0FBVjs7QUFFQSxXQUFPLENBQUMsSUFBRCxFQUFPLE1BQVA7RUFaQyxDQTFJViIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJfID1cblxuICBpOiAtPlxuICAgIEBjb25zb2xlID0gc2V0SW50ZXJ2YWwoQGRldGVjdC5iaW5kKEApLCAyMDApXG5cbiAgcDpcbiAgICBvZmZpbmc6IGZhbHNlXG4gICAgb2ZmdGltZTogMFxuXG4gIHR1cm46IChlbCwgcmVtb3ZlPWZhbHNlLCBhZGQ9ZmFsc2UpIC0+XG5cbiAgICBpZiBlbCBub3QgaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgIGVsID0gJChlbClcblxuICAgIGlmIHJlbW92ZSBpc250IGZhbHNlXG4gICAgICBlbC5yZW1vdmVDbGFzcyhyZW1vdmUpXG5cbiAgICBpZiBhZGQgaXNudCBmYWxzZVxuICAgICAgZWwuYWRkQ2xhc3MoYWRkKVxuXG4gICAgcmV0dXJuIHRydWVcblxuICBvZmY6IChlbCwgcD17fSkgLT5cblxuICAgIGlmIHAub2ZmaW5nIGFuZCBwLm9mZnRpbWUgPiAwXG5cbiAgICAgIEB0dXJuIGVsLCBmYWxzZSwgJ29mZmluZydcbiAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgQHR1cm4gZWwsICdvZmZpbmcnLCBmYWxzZVxuICAgICAgICBAdHVybiBlbCwgJ29uJywgJ29mZidcbiAgICAgICwgcC5vZmZ0aW1lKjEwMDAgKyAxMDBcblxuICAgIGVsc2VcbiAgICAgIEB0dXJuIGVsLCAnb24nLCAnb2ZmJ1xuXG4gICAgcmV0dXJuXG5cbiAgb246IChlbCwgcCkgLT5cbiAgICBAdHVybiBlbCwgJ29mZicsICdvbidcblxuICBzd2FwOiAoZWwsIHApIC0+XG5cbiAgICBpZiBlbCBub3QgaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgIGVsID0gJChlbClcblxuICAgIGlmIGVsLmhhc0NsYXNzICdvZmYnXG4gICAgICBAb24gZWwsIHBcbiAgICBlbHNlXG4gICAgICBAb2ZmIGVsLCBwXG5cbiAgICByZXR1cm5cblxuICBlbmNvZGU6IChzdHIpIC0+XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpXG4gICAgICAucmVwbGFjZSgvIS9nLCAnJTIxJylcbiAgICAgIC5yZXBsYWNlKC8nL2csICclMjcnKVxuICAgICAgLnJlcGxhY2UoL1xcKC9nLCAnJTI4JylcbiAgICAgIC5yZXBsYWNlKC9cXCkvZywgJyUyOScpXG4gICAgICAucmVwbGFjZSgvXFwqL2csICclMkEnKVxuICAgICAgLnJlcGxhY2UoLyUyMC9nLCAnKycpXG5cbiAgdDogKGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZSkgLT5cbiAgICBfZ2FxLnB1c2ggWydfdHJhY2tFdmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZV1cblxuICByYW5kOiAobWluLCBtYXgpIC0+XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCkgKyBtaW5cblxuICBsb2FkOiAoc2NyaXB0LCBpbml0aWF0ZSwgY29tcGxldGUpIC0+XG5cbiAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgJ3NjcmlwdCdcbiAgICBlbC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCdcbiAgICBlbC5zcmMgPSBzY3JpcHRcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyICdsb2FkJyAsIChlKSAtPlxuICAgICAgY29tcGxldGUoKSBpZiB0eXBlb2YgY29tcGxldGUgaXMgJ2Z1bmN0aW9uJ1xuICAgICAgd2luZG93W2luaXRpYXRlXS5pKCkgaWYgaW5pdGlhdGUgaXNudCB1bmRlZmluZWQgYW5kIGluaXRpYXRlIGlzbnQgZmFsc2VcbiAgICAsIGZhbHNlXG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKVxuXG4gIGxsYzogLT5cbiAgICBhc2NpaSA9IFwiXCJcIlxuXG4gICAgICAlY21tbS8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uL21tbVxuICAgICAgbW1vLi4uLi4uLi4uLi4uLi4uLi06Oi8vOjotLi4uLi4uLi06Ojo6Ojo6Ojo6Ojo6LS4uLi4uLi4uLTo6Ly8vOi0ub21tXG4gICAgICBtZC0uLi4uLi4uLi4uLi4uOit5aGRkZGRkZGh5Ky0uLi4uL2RkZGRkZGRkZGRkZGQrLi4uLi4uL3NoZGRkZGRkZHlvZG1cbiAgICAgIG1vLi4uLi4uLi4uLi4uLi1obW1taHl5eXlkbW1taDouLi4vbW1tbWhoaGhoaGhoaCsuLi4uOnlkbW1kaHl5eWhkZG9vbVxuICAgICAgbS0uLi4uLi4uLi4uLi4uLi1zczotLi4uLi15bW1teS4uLi9tbW1tLS0tLS0tLS0tLi4uLjpkbW1tczotLi4uLTovLi1tXG4gICAgICBkLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLnltbW15Li4uL21tbW0tLytvb28rOi0uLi4ueW1tbXktOitvb28rLy0uLmRcbiAgICAgIGguLi4uLi4uLi4uLi4uLi4uLi4uLi4uLjpzbW1tZDouLi4vbW1tbWhtbW1tbW1kaCsuLi5kbW1tc2hkbW1tbW1taHMtaFxuICAgICAgaC4uLi4uLi4uLi4uLi4uLi4uLi4uLjpzZG1tZHk6Li4uLjpoaGRobysvLyt5bW1tbSsuLmRtbW1keW8vLytzZG1tbWhoXG4gICAgICBkLi4uLi4uLi4uLi4uLi4uLi4uLSt5ZG1tZHkvLi4uLi4uLi0tOi4uLi4uLi5zbW1taC4ueW1tbXMuLi4uLi46bW1tbW1cbiAgICAgIG0tLi4uLi4uLi4uLi4uLi4tOnNobW1tZHMvLS0tLS0uLi4uOnMvLS0uLi4tOmhtbW1zLi46ZG1tZC8tLi4uLW9tbW1tbVxuICAgICAgbW8uLi4uLi4uLi4uLi4uLmhtbW1tbW1oaGhoaGhoaC4uLitkbW1kaHl5eWhkbW1teS0uLi4vaG1tbWh5eXlobW1tZGhtXG4gICAgICBtZC0uLi4uLi4uLi4uLi4uZGRkZGRkZGRkZGRkZGRkLi4uLStzaGRkZGRkZGRoeS8tLi4uLi4tb3lkZGRkZGRkaG86ZG1cbiAgICAgIG1tby4uLi4uLi4uLi4uLi46Ojo6Ojo6Ojo6Ojo6OjouLi4uLi4uLTovLy86Oi0uLi4uLi4uLi4uLi06Ly8vOi0uLm9tbVxuICAgICAgbW1tLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4vbW1tXG5cbiAgICAgIDo6IHN5bnRhY3RpYyBzdWdhciBieSAyNTZcbiAgICAgIDo6IGh0dHA6Ly8yNTYuaW8vXG4gICAgICA6OiAje2NvbmZpZy5tZXRhLnJlcG99XG4gICAgXCJcIlwiXG4gICAgY29uc29sZS5sb2cgYXNjaWksIFwiY29sb3I6IGdyZXk7IGZvbnQtZmFtaWx5OiBNZW5sbywgbW9ub3NwYWNlO1wiXG5cbiAgZGV0ZWN0OiAtPlxuICAgIGlmICgoKHdpbmRvdy5vdXRlckhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCkgPiAxMDApIHx8ICgod2luZG93Lm91dGVyV2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aCkgPiAxMDApKVxuICAgICAgQGxsYygpXG4gICAgICBjbGVhckludGVydmFsIEBjb25zb2xlXG5cbl8uaSgpXG4iLCJBcnRpY2xlID0gXG5cbiAgaTogLT5cblxuICAgIG5hbWUgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpXG5cbiAgICAkKCcuYmFzYWwtZW50cnknKS5hdHRyKCdiYXNhbC1uYW1lJywgbmFtZSlcbiAgICAkKCcuYmFzYWwtZW50cnknKS5hdHRyKCdiYXNhbC1zdHJ1Y3R1cmUnLCAnYmxvZycpXG5cbiAgICBCYXNhbC5pIGNvbmZpZy5iYXNhbC5jbGllbnQsIC0+XG4gICAgICAkKCd0aW1lJykuZWFjaCAoaSwgZWwpID0+XG4gICAgICAgIGplbCA9ICQgZWxcbiAgICAgICAgamVsLmh0bWwgbW9tZW50KGplbC5hdHRyKCd0aXRsZScpKS5mb3JtYXQoJ01NTU0gRG8gWVlZWScpXG4gICAgICAgIGplbC5hdHRyICdhcmlhLWxhYmVsJywgbW9tZW50KGplbC5hdHRyKCd0aXRsZScpKS5jYWxlbmRhcigpXG4iLCJCYXNhbCA9XG5cbiAgZG9tYWluOiAnLy9iYXNhbC50ZWNoL2FwaSdcbiAgY2xpZW50OiBmYWxzZVxuXG4gIGRhdGE6IGZhbHNlXG4gIHN0cnVjdHVyZXM6IGZhbHNlXG5cbiAgY29tcGxldGU6IGZhbHNlXG5cbiAgaTogKGNsaWVudCwgY29tcGxldGUpIC0+XG5cbiAgICBAY29tcGxldGUgPSBjb21wbGV0ZVxuXG4gICAgQGNsaWVudCA9IGNsaWVudFxuXG4gICAgQGdldFN0cnVjdHVyZXMgPT5cbiAgICAgIEBsb29wKClcbiAgICAgIEBlbnRyeSgpXG5cbiAgdHlwZTogKGVsLCB0eXBlLCBuYW1lLCBlbnRyeSkgLT5cbiAgICBzd2l0Y2ggdHlwZVxuICAgICAgd2hlbiAnY3NzLWJhY2tncm91bmQnXG4gICAgICAgIGVsLmNzcyAnYmFja2dyb3VuZC1pbWFnZScsIFwidXJsKCN7ZW50cnkuZW50aXRpZXNbbmFtZV0udmFsdWV9KVwiXG4gICAgICB3aGVuICdkYXRlJ1xuICAgICAgICBlbC5odG1sIG1vbWVudChlbnRyeS5lbnRpdGllc1tuYW1lXS52YWx1ZSwgJ01NL0REL1lZWVknKS5mb3JtYXQgZWwuYXR0cignYmFzYWwtZGF0ZWZvcm1hdCcpXG4gICAgICB3aGVuICdpbWFnZSdcbiAgICAgICAgZWwuYXR0ciAnc3JjJywgZW50cnkuZW50aXRpZXNbbmFtZV0udmFsdWVcbiAgICAgIHdoZW4gJ3RleHQnXG4gICAgICAgIGVsLmh0bWwgZW50cnkuZW50aXRpZXNbbmFtZV0udmFsdWVcbiAgICAgIHdoZW4gJ2hyZWYnXG4gICAgICAgIGVsLmF0dHIgJ2hyZWYnLCBlbnRyeS5lbnRpdGllc1tuYW1lXS52YWx1ZVxuXG4gIGVudHJ5OiAtPlxuICAgICQoJy5iYXNhbC1lbnRyeScpLmVhY2ggKGksIGVsKSAtPlxuXG4gICAgICBlbCA9ICQoZWwpXG4gICAgICBzdHJ1Y3R1cmUgPSBlbC5hdHRyICdiYXNhbC1zdHJ1Y3R1cmUnXG4gICAgICBuYW1lID0gZWwuYXR0ciAnYmFzYWwtbmFtZSdcbiAgICAgIGVudGl0eU5hbWUgPSBlbC5hdHRyICdiYXNhbC1lbnRpdHknXG4gICAgICBhdHRyID0gZWwuYXR0ciAnYmFzYWwtYXR0cidcbiAgICAgIHR5cGUgPSBlbC5hdHRyICdiYXNhbC10eXBlJ1xuXG4gICAgICBCYXNhbC5lcnJvcihcIlN0cnVjdHVyZSBub3QgZm91bmQgXFxcIiN7c3RydWN0dXJlfVxcXCJcIikgaWYgIUJhc2FsLnN0cnVjdHVyZXNbc3RydWN0dXJlXT9cblxuICAgICAgZm9yIGtleSwgZW50cnkgb2YgQmFzYWwuc3RydWN0dXJlc1tzdHJ1Y3R1cmVdLmVudHJpZXNcbiAgICAgICAgY29udGludWUgaWYgZW50cnkuYWN0aXZlIGlzbnQgdHJ1ZVxuICAgICAgICBpZiBuYW1lIGlzIGVudHJ5Lm5hbWVcbiAgICAgICAgICBlbC5hdHRyICd0aXRsZScsIGVudHJ5LmNyZWF0ZWRfYXQgaWYgZWwuYXR0cignYmFzYWwtZGF0ZScpIGlzICdjcmVhdGVkJ1xuICAgICAgICAgIGZvciBia2V5LCBlbnRpdHkgb2YgZW50cnkuZW50aXRpZXNcbiAgICAgICAgICAgIGlmIGVudGl0eS5uYW1lIGlzIGVudGl0eU5hbWVcbiAgICAgICAgICAgICAgaWYgdHlwZVxuICAgICAgICAgICAgICAgIEJhc2FsLnR5cGUgZWwsIHR5cGUsIGVudGl0eS5uYW1lLCBlbnRyeVxuICAgICAgICAgICAgICBlbHNlIGlmIGF0dHJcbiAgICAgICAgICAgICAgICBlbC5hdHRyIGF0dHIsIGVudGl0eS52YWx1ZVxuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZWwuaHRtbCBlbnRpdHkudmFsdWVcblxuICBsb29wOiAtPlxuXG4gICAgJCgnLmJhc2FsLWxvb3AnKS5lYWNoKCAoaSwgZWwpIC0+XG5cbiAgICAgIGVsID0gJChlbClcbiAgICAgIHN0cnVjdHVyZSA9IGVsLmF0dHIoXCJiYXNhbC1zdHJ1Y3R1cmVcIilcblxuICAgICAgQmFzYWwuZXJyb3IoXCJTdHJ1Y3R1cmUgbm90IGZvdW5kIFxcXCIje3N0cnVjdHVyZX1cXFwiXCIpIGlmICFCYXNhbC5zdHJ1Y3R1cmVzW3N0cnVjdHVyZV0/XG5cbiAgICAgIHRlbXBsYXRlID0gZWwuY2hpbGRyZW4oKS5yZW1vdmUoKVxuXG4gICAgICBmb3Igb3duIG5hbWUsIGVudHJ5IG9mIEJhc2FsLnN0cnVjdHVyZXNbc3RydWN0dXJlXS5lbnRyaWVzXG4gICAgICAgIGNvbnRpbnVlIGlmIGVudHJ5LmFjdGl2ZSBpc250IHRydWVcbiAgICAgICAgdHBsID0gdGVtcGxhdGUuY2xvbmUoKVxuICAgICAgICB0cGwuYXR0cignaHJlZicsIHRwbC5hdHRyKCdiYXNhbC1saW5rJykgKyBlbnRyeS5uYW1lKSBpZiB0cGwuaGFzQ2xhc3MgJ2Jhc2FsLWxpbmsnXG4gICAgICAgIHRwbC5maW5kKCcqJykuZWFjaCAoY2ksIGNlbCkgLT5cbiAgICAgICAgICBqY2VsID0gJChjZWwpXG4gICAgICAgICAgbmFtZSA9IGpjZWwuYXR0cignYmFzYWwtbmFtZScpXG4gICAgICAgICAgdHlwZSA9IGpjZWwuYXR0cignYmFzYWwtdHlwZScpXG4gICAgICAgICAgbmFtZXMgPSBqY2VsLmF0dHIoJ2Jhc2FsLW5hbWVzJyk/LnNwbGl0ICcsJ1xuICAgICAgICAgIHR5cGVzID0gamNlbC5hdHRyKCdiYXNhbC10eXBlcycpPy5zcGxpdCAnLCdcblxuICAgICAgICAgIHJldHVybiB0cnVlIGlmIG5hbWUgaXMgdW5kZWZpbmVkIGFuZCBuYW1lcyBpcyB1bmRlZmluZWRcblxuICAgICAgICAgIGlmIG5hbWVzIGlzIHVuZGVmaW5lZFxuICAgICAgICAgICAgbmFtZXMgPSBbbmFtZV1cbiAgICAgICAgICAgIHR5cGVzID0gW3R5cGVdXG5cbiAgICAgICAgICBmb3IgbmFtZSwgaSBpbiBuYW1lc1xuICAgICAgICAgICAgdHlwZSA9IHR5cGVzW2ldXG5cbiAgICAgICAgICAgIGlmIHR5cGUgaXNudCB1bmRlZmluZWRcbiAgICAgICAgICAgICAgc3dpdGNoIHR5cGVcbiAgICAgICAgICAgICAgICB3aGVuICdjc3MtYmFja2dyb3VuZCdcbiAgICAgICAgICAgICAgICAgIGpjZWwuY3NzICdiYWNrZ3JvdW5kLWltYWdlJywgXCJ1cmwoI3tlbnRyeS5lbnRpdGllc1tuYW1lXS52YWx1ZX0pXCJcbiAgICAgICAgICAgICAgICB3aGVuICdkYXRlJ1xuICAgICAgICAgICAgICAgICAgamNlbC5odG1sIG1vbWVudChlbnRyeS5lbnRpdGllc1tuYW1lXS52YWx1ZSwgJ01NL0REL1lZWVknKS5mb3JtYXQgamNlbC5hdHRyKCdiYXNhbC1kYXRlZm9ybWF0JylcbiAgICAgICAgICAgICAgICB3aGVuICdpbWFnZSdcbiAgICAgICAgICAgICAgICAgIGpjZWwuYXR0ciAnc3JjJywgZW50cnkuZW50aXRpZXNbbmFtZV0udmFsdWVcbiAgICAgICAgICAgICAgICB3aGVuICd0ZXh0J1xuICAgICAgICAgICAgICAgICAgamNlbC5odG1sIGVudHJ5LmVudGl0aWVzW25hbWVdLnZhbHVlXG4gICAgICAgICAgICAgICAgd2hlbiAnaHJlZidcbiAgICAgICAgICAgICAgICAgIGpjZWwuYXR0ciAnaHJlZicsIGVudHJ5LmVudGl0aWVzW25hbWVdLnZhbHVlXG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgaWYgbmFtZSBpcyAnc3RydWN0dXJlLW5hbWUnXG4gICAgICAgICAgICAgICAgamNlbC5odG1sIGVudHJ5Lm5hbWVcbiAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGpjZWwuaHRtbCBlbnRyeS5lbnRpdGllc1tuYW1lXS52YWx1ZVxuICAgICAgICBlbC5hcHBlbmQgdHBsXG5cbiAgICAgICkucHJvbWlzZSgpLmRvbmUgLT5cbiAgICAgICAgQmFzYWwuY29tcGxldGU/KClcblxuICBnZXRTdHJ1Y3R1cmVzOiAoY29tcGxldGUpIC0+XG4gICAgQGpzb25wIFwic3RydWN0dXJlc1wiLCBjbGllbnQ6IEBjbGllbnQsIChyZXN1bHQpID0+XG4gICAgICBAc3RydWN0dXJlcyA9IHt9XG4gICAgICBmb3IgaSxzdHJ1Y3R1cmUgb2YgcmVzdWx0LmRhdGFcbiAgICAgICAgQHN0cnVjdHVyZXNbc3RydWN0dXJlLm5hbWVdID0gc3RydWN0dXJlXG4gICAgICBjb21wbGV0ZT8oKVxuXG4gIGpzb25wOiAoZW5kcG9pbnQsIHBhcmFtcywgY29tcGxldGUpIC0+XG5cbiAgICBwYXJhbXMuY2FsbGJhY2sgPSAnQmFzYWwuY2FsbGJhY2snXG5cbiAgICBzY3JpcHQgPSBcIiN7ZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2x9I3tAZG9tYWlufS8je2VuZHBvaW50fT9cIiArICQucGFyYW0gcGFyYW1zXG5cbiAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgJ3NjcmlwdCdcbiAgICBlbC5zcmMgPSBzY3JpcHRcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyICdsb2FkJyAsIChlKSAtPlxuICAgICAgY29tcGxldGU/KEJhc2FsLmRhdGEpXG4gICAgICBCYXNhbC5kYXRhID0gZmFsc2VcbiAgICAsIGZhbHNlXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKGVsKVxuXG4gIGNhbGxiYWNrOiAoZGF0YSkgLT5cbiAgICBCYXNhbC5kYXRhID0gZGF0YVxuXG4gIGVycm9yOiAobWVzc2FnZSkgLT5cbiAgICB0aHJvdyBuZXcgRXJyb3IgXCJiYXNhbDogI3ttZXNzYWdlfVwiXG4iLCJCbG9nID0gXG5cbiAgaTogLT5cblxuICAgIEJhc2FsLmkgY29uZmlnLmJhc2FsLmNsaWVudFxuXG5cbiIsImNvbmZpZyA9IHtcImJhc2FsXCI6e1wiY2xpZW50XCI6XCI1OGFkZDQ0NTVhYTU5YjEyYjcyOWUxMzFcIn0sXCJjbGllbnRzXCI6W1wiaW52aXNhbGlnblwiLFwiZ2FsZGVybWFcIixcImJpb3BoYXJteFwiLFwibmF0ZXJhXCIsXCJjb29sc2N1bHB0aW5nXCIsXCJhbG1hXCIsXCJlbmRvbG9naXhcIixcInJlc3R5bGFuZVwiLFwiZHlzcG9ydFwiLFwic2N1bHB0cmFcIixcInNlcmFcIixcImNhcmVcIixcIndob2xlZm9vZHNcIixcImhhZ2dlbnNcIixcImFiYm90XCIsXCJmaW5lc3NcIixcImdlbmVyYWxtaWxsc1wiLFwia2lhXCIsXCJsaWZlbG9ja1wiLFwibWF0dGVsXCIsXCJtYXpkYVwiLFwibWl0c3ViaXNoaVwiLFwibmlrZVwiLFwibmVzdGxlXCIsXCJuZXdiYWxhbmNlXCIsXCJyZWRidWxsXCIsXCJ0bW9iaWxlXCIsXCJ4Ym94XCIsXCJvYmlcIixcInNlbWFcIixcIm1peGltXCIsXCJoYW5zZW5zXCIsXCJ0eWxlbm9sXCIsXCJkcnliYXJcIixcIml0ZXJpc1wiXSxcImNvbG9yXCI6e1wiYmxhY2sxXCI6XCIjMDAwMDAwXCIsXCJ3aGl0ZTFcIjpcIiNGRkZGRkZcIixcIndoaXRlMlwiOlwiI0Y3RUVFQVwiLFwicmVkMVwiOlwiI0VFNjk3QVwiLFwiYmx1ZTFcIjpcIiNEMUUwRUJcIixcImdvbGQxXCI6XCIjQjA5NzZEXCJ9LFwiZm9udFwiOntcImNvcHkxXCI6e1wiZm9udC1mYW1pbHlcIjpcImdvdGhhbSBsaWdodFwiLFwiZm9udC1zaXplXCI6XCIxNnB4XCJ9LFwiY29weTJcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIG1lZGl1bVwiLFwiZm9udC1zaXplXCI6XCIxNnB4XCJ9LFwiY29weTNcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjE0cHhcIn0sXCJjb3B5NFwiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gYm9sZFwiLFwiZm9udC1zaXplXCI6XCIyMHB4XCJ9LFwiY29weTVcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjEycHhcIn0sXCJjb3B5NlwiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gbWVkaXVtXCIsXCJmb250LXNpemVcIjpcIjE0cHhcIn0sXCJjb3B5N1wiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gYm9sZFwiLFwiZm9udC1zaXplXCI6XCIxMnB4XCJ9LFwiaDFcIjp7XCJmb250LWZhbWlseVwiOlwibmV1dHJhdGV4dCBib2xkXCIsXCJmb250LXNpemVcIjpcIjQwcHhcIn0sXCJoMlwiOntcImZvbnQtZmFtaWx5XCI6XCJuZXV0cmF0ZXh0IGRlbWlcIixcImZvbnQtc2l6ZVwiOlwiMjBweFwifSxcImgzXCI6e1wiZm9udC1mYW1pbHlcIjpcImdvdGhhbSBsaWdodFwiLFwiZm9udC1zaXplXCI6XCIzMHB4XCJ9LFwiaDRcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIGJvbGRcIixcImZvbnQtc2l6ZVwiOlwiMzBweFwifSxcImg1XCI6e1wiZm9udC1mYW1pbHlcIjpcImdvdGhhbSBsaWdodFwiLFwiZm9udC1zaXplXCI6XCIyMHB4XCJ9LFwiaDZcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIGJvb2tcIixcImZvbnQtc2l6ZVwiOlwiMzAwcHhcIn19LFwibWVudVwiOltcInN0YW5kb3V0XCIsXCJhcHByb2FjaFwiLFwid29ya1wiLFwic2VydmljZXNcIixcInRlYW1cIixcImNsaWVudHNcIixcImNvbnRhY3RcIl0sXCJtZXRhXCI6e1widGl0bGVcIjpcIkdvbGQgUFIgOiBUb3AgUHVibGljIFJlbGF0aW9ucyBGaXJtICsgRGlnaXRhbCBBZ2VuY3lcIixcInVybFwiOlwiaHR0cHM6Ly93d3cuZ29sZHByLmNvbS9cIixcInJlcG9cIjpcImh0dHA6Ly93d3cuZ2l0aHViLmNvbS9hY2lkamF6ei9nb2xkcHJcIixcImRlc2NyaXB0aW9uXCI6XCJBd2FyZCB3aW5uaW5nIHB1YmxpYyByZWxhdGlvbnMgYW5kIGRpZ2l0YWwgYWdlbmN5LiBHT0xEIFBSIGlzIGEgQ2FsaWZvcm5pYSBiYXNlZCBQUiBmaXJtIHRydXN0ZWQgYnkgc29tZSBvZiB0aGUgbGFyZ2VzdCBicmFuZHMgYWNyb3NzIHRoZSBnbG9iZS5cIixcImtleXdvcmRzXCI6XCJ3b21lbnMgYmVhdXR5IHByLCB3b21lbnMgaGVhbHRoIHByLCBzb2NpYWwgbWVkaWFcIixcImltYWdlXCI6XCJpbWcvc2hhcmUuanBnXCJ9LFwic29jaWFsXCI6e1wiZmFjZWJvb2tcIjpcImh0dHA6Ly93d3cuZmFjZWJvb2suY29tL2dvbGRwclwiLFwidHdpdHRlclwiOlwiaHR0cDovL3d3dy50d2l0dGVyLmNvbS9nb2xkcHJfXCIsXCJpbnN0YWdyYW1cIjpcImh0dHA6Ly93d3cuaW5zdGFncmFtLmNvbS9nb2xkcHJcIixcIm1haWxcIjpcImhlbGxvQGdvbGRwci5jb21cIixcIm1hcFwiOlwiaHR0cHM6Ly9nb28uZ2wvbWFwcy9TVE5mYTZ6czM0c1wiLFwicGhvbmVcIjo5NDk3NDMzOTExfSxcInN0dWRpZXNcIjp7XCIxXCI6e1wibmFtZVwiOlwiQ2FzZSBTdHVkeSAxXCIsXCJ0eXBlXCI6XCJIZWFsdGggYW5kIEJlYXV0eVwiLFwibGlua1wiOlwiQ2FzZVN0dWR5MV9SZXN0eWxhbmVfSGVhbHRoX2FuZF9CZWF1dHkucGRmXCIsXCJ2aWRlb1wiOlwiaHR0cHM6Ly92aW1lby5jb20vMTU4NDMyMTk5XCJ9LFwiMlwiOntcIm5hbWVcIjpcIkNhc2UgU3R1ZHkgMlwiLFwidHlwZVwiOlwiSGVhbHRoIGFuZCBCZWF1dHlcIixcImxpbmtcIjpcIkNhc2VTdHVkeTJfQ29vbHNjdWxwdGluZ19IZWFsdGhfYW5kX0JlYXV0eS5wZGZcIixcInZpZGVvXCI6XCJodHRwczovL3ZpbWVvLmNvbS8xNTg0MzE4NjFcIn0sXCIzXCI6e1wibmFtZVwiOlwiQ2FzZSBTdHVkeSAzXCIsXCJ0eXBlXCI6XCJIZWFsdGggYW5kIEJlYXV0eVwiLFwibGlua1wiOlwiQ2FzZVN0dWR5M19JbnZpc2FsaWduX0hlYWx0aF9hbmRfQmVhdXR5LnBkZlwifSxcIjRcIjp7XCJuYW1lXCI6XCJDYXNlIFN0dWR5IDRcIixcInR5cGVcIjpcIldvbWVuJ3MgSGVhbHRoXCIsXCJsaW5rXCI6XCJDYXNlU3R1ZHk0X1Bhbm9yYW1hTklQVF9Xb21lbnNfSGVhbHRoLnBkZlwifSxcIjVcIjp7XCJuYW1lXCI6XCJDYXNlIFN0dWR5IDVcIixcInR5cGVcIjpcIldvbWVuJ3MgSGVhbHRoXCIsXCJsaW5rXCI6XCJDYXNlU3R1ZHk1X1Zpb2xldF9Xb21lbnNfSGVhbHRoLnBkZlwifSxcIjZcIjp7XCJuYW1lXCI6XCJDYXNlIFN0dWR5IDZcIixcInR5cGVcIjpcIkZvb2QgYW5kIEJldmVyYWdlXCIsXCJsaW5rXCI6XCJDYXNlU3R1ZHk2X1dob2xlRm9vZHNfRm9vZF9hbmRfQmV2ZXJhZ2UucGRmXCJ9fSxcInRlYW1cIjpbe1wibmFtZVwiOlwiU2hhcmkgR29sZFwiLFwicG9zaXRpb25cIjpcIkZvdW5kZXIvQ0VPXCIsXCJlbWFpbFwiOlwic2dvbGRAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJBZHJpZW5uZSBLZW1wXCIsXCJwb3NpdGlvblwiOlwiQnVzaW5lc3MgTGVhZCwgU3RyYXRlZ3lcIixcImVtYWlsXCI6XCJha2VtcEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIlN0ZXBoYW5pZSBHb2RkYXJkXCIsXCJwb3NpdGlvblwiOlwiQnVzaW5lc3MgTGVhZCwgU3RyYXRlZ3lcIixcImVtYWlsXCI6XCJzZ29kZGFyZEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkphY2tpZSBKb3JnZVwiLFwicG9zaXRpb25cIjpcIk1lZGlhIFN0cmF0ZWdpc3RcIixcImVtYWlsXCI6XCJqam9yZ2VAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJTYXJhIFJlY29yZFwiLFwicG9zaXRpb25cIjpcIkJsb2dnZXIvSW5mbHVlbmNlciBSZWxhdGlvbnNcIixcImVtYWlsXCI6XCJzcmVjb3JkQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiU2hhcm9uIFNjb3R0XCIsXCJwb3NpdGlvblwiOlwiTWVkaWEgc3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcInNzY290dEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkFzaGxleSBHYXJpbmdcIixcInBvc2l0aW9uXCI6XCJBY2NvdW50IERpcmVjdG9yXCIsXCJlbWFpbFwiOlwiYWdhcmluZ0Bnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIk5hdGFzaGEgTmVsc29uXCIsXCJwb3NpdGlvblwiOlwiQWNjb3VudCBEaXJlY3RvciB8IFNFT1wiLFwiZW1haWxcIjpcIm5uZWxzb25AZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJTaGFubm9uIFNtaXRoXCIsXCJwb3NpdGlvblwiOlwiTWVkaWEgc3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcInNzbWl0aEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIlBhbSBTY2hsaWNodGVyXCIsXCJwb3NpdGlvblwiOlwiTWVkaWEgUmVsYXRpb25zXCIsXCJlbWFpbFwiOlwiUHNjaGxpY2h0ZXJAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJEaWFuYSBNYW5uXCIsXCJwb3NpdGlvblwiOlwiQWNjb3VudCBEaXJlY3RvclwiLFwiZW1haWxcIjpcImRtYW5uQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiSmlsbCBFZGdld29ydGhcIixcInBvc2l0aW9uXCI6XCJBY2NvdW50IERpcmVjdG9yXCIsXCJlbWFpbFwiOlwiamVkZ2V3b3J0aEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIktyaXMgRWxsZW5iZXJnXCIsXCJwb3NpdGlvblwiOlwiRW50ZXJ0YWlubWVudCBMZWFkXCIsXCJlbWFpbFwiOlwia2VsbGVuYmVyZ0Bnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkRpYW5hIE1vZWNrXCIsXCJwb3NpdGlvblwiOlwiQW5hbHl0aWNzL0FjY291bnQgU3VwcG9ydFwiLFwiZW1haWxcIjpcImRtb2Vja0Bnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkt5bSBDbGV2ZWxhbmRcIixcInBvc2l0aW9uXCI6XCJBY2NvdW50IENvb3JkaW5hdG9yXCIsXCJlbWFpbFwiOlwia2NsZXZlbGFuZEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkphbWkgRWlkc3ZvbGRcIixcInBvc2l0aW9uXCI6XCJTb2NpYWwgTWVkaWEgQnVzaW5lc3MgTGVhZFwiLFwiZW1haWxcIjpcImplaWRzdm9sZEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIlZhbmVzc2EgU2hhbmFoYW5cIixcInBvc2l0aW9uXCI6XCJBbmFseXRpY3NcIixcImVtYWlsXCI6XCJ2c2hhbmFoYW5AZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJBc2hsZXkgQ2xpbmVcIixcInBvc2l0aW9uXCI6XCJTb2NpYWwgTWVkaWEgU3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcImFjbGluZUBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIktlbGxpZSBBcmVuc1wiLFwicG9zaXRpb25cIjpcIlNvY2lhbCBNZWRpYSBBY2N0IE1hbmFnZXJcIixcImVtYWlsXCI6XCJrYXJlbnNAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJKYW1pZSBEYWRhbnRcIixcInBvc2l0aW9uXCI6XCJTb2NpYWwgQ29uc3VtZXIgQ3VzdG9tZXIgU2VydmljZVwiLFwiZW1haWxcIjpcImpkYWRhbnRAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJCcmlhbm5hIEpvbnNzb25cIixcInBvc2l0aW9uXCI6XCJTb2NpYWwgTWVkaWEgQ29tbXVuaXR5IE1hbmFnZXJcIixcImVtYWlsXCI6XCJiam9uc3NvbkBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkNhbWVyb24gSm9uc3NvblwiLFwicG9zaXRpb25cIjpcIkRpZ2l0YWwgU3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcImNqb25zc29uQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiTGF1cmVuIENvd2xlc1wiLFwicG9zaXRpb25cIjpcIkRpZ2l0YWwvU29jaWFsIFN0cmF0ZWdpc3RcIixcImVtYWlsXCI6XCJsY293bGVzQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiTWVsaXNzYSBBbmdlcnRcIixcInBvc2l0aW9uXCI6XCJTb2NpYWwgTWVkaWEgU3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcIm1hbmdlcnRAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJBbGxpc29uIEhpbm9qb3NhXCIsXCJwb3NpdGlvblwiOlwiQ0ZPXCIsXCJlbWFpbFwiOlwiYWhpbm9qb3NhQGdvbGRwci5jb21cIn1dfTsiLCJJbmRleCA9XG5cbiAgdmFsczogW11cbiAgc2VjdGlvbjogJ2hvbWUnXG4gIHZpczogZmFsc2VcbiAgY2FjaGU6XG4gICAgd2luZG93OiB3aW5kb3dcbiAgICBzdGlja2llZDogZmFsc2VcbiAgICBsYXhpbjoge31cblxuICBpOiAtPlxuXG4gICAgaWYgZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUgaXMgJ3d3dy5nb2xkcHIuY29tJyBhbmQgZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgaXNudCAnaHR0cHM6J1xuICAgICAgaWYgZG9jdW1lbnQubG9jYXRpb24uaGFzaCBpc250IFwiXCJcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSAnaHR0cHM6Ly93d3cuZ29sZHByLmNvbS8nICsgZG9jdW1lbnQubG9jYXRpb24uaGFzaFxuICAgICAgZWxzZVxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiA9ICdodHRwczovL3d3dy5nb2xkcHIuY29tLydcblxuICAgIGlmIGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lIGlzICdnb2xkcHIuY29tJ1xuICAgICAgaWYgZG9jdW1lbnQubG9jYXRpb24uaGFzaCBpc250IFwiXCJcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSAnaHR0cHM6Ly93d3cuZ29sZHByLmNvbS8nICsgZG9jdW1lbnQubG9jYXRpb24uaGFzaFxuICAgICAgZWxzZVxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiA9ICdodHRwczovL3d3dy5nb2xkcHIuY29tLydcbiAgICBcblxuICAgIEluZGV4LmNhY2hlLndpbmRvdyA9ICQod2luZG93KVxuICAgIGlmIGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSBpc250IHVuZGVmaW5lZFxuICAgICAgSW5kZXgudmlzID0gZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlXG4gICAgICBzZXRJbnRlcnZhbCBJbmRleC52aXNpYmxlLCAyMDBcblxuXG4gICAgaWYgSW5kZXguY2FjaGUud2luZG93LndpZHRoKCkgPiAxMDAwXG4gICAgICBzZXRJbnRlcnZhbCBJbmRleC5oZWFkZXIsIDUwXG5cbiAgICBJbmRleC5sYXhjYWNoZSgpXG4gICAgc2V0SW50ZXJ2YWwgSW5kZXguY2hlY2ssIDEwMFxuICAgIHNldEludGVydmFsIEluZGV4Lm1lbnUsIDUwMFxuXG4gICAgSW5kZXguaGFuZGxlcnMoKVxuICAgIGNvbnNvbGUubG9nICdJbmRleC5pKCknXG5cbiAgICBpZiBkb2N1bWVudC5sb2NhdGlvbi5oYXNoIGlzbnQgJydcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5zY3JvbGxUbyBcIiN7ZG9jdW1lbnQubG9jYXRpb24uaGFzaH1cIixcbiAgICAgICAgZHVyYXRpb246IDUwXG4gICAgICAgIG9mZnNldDogLTYwXG5cbiAgdmlzaWJsZTogLT5cbiAgICBpZiBJbmRleC52aXMgaXNudCBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGVcbiAgICAgIEluZGV4LnZpcyA9IGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZVxuICAgICAgXy5vZmYgJy5ibHVlQ2lyY2xlJ1xuICAgICAgc2V0VGltZW91dCAtPlxuICAgICAgICBfLm9uICcuYmx1ZUNpcmNsZSdcbiAgICAgICwgMTBcblxuICBoYW5kbGVyczogLT5cblxuICAgICQoJ1xuICAgICAgaGVhZGVyID4gLmlubmVyID4gLm1lbnUgPiBhLm9wdGlvbiwgLm1vYmlsZSA+IC5pbm5lciA+IC5tZW51ID4gYS5vcHRpb24sXG4gICAgICBoZWFkZXIgPiAuaW5uZXIgYS5sb2dvXG4gICAgJykuY2xpY2sgSW5kZXgub3B0aW9uXG4gICAgJCgnLmJ1cmdlcicpLmNsaWNrIEluZGV4LmJ1cmdlclxuXG4gIGJ1cmdlcjogLT5cbiAgICBfLnN3YXAgJy5tb2JpbGUsIC5idXJnZXIsIC5idXJnZXIgPiAuaW5uZXIgPiAubWVudSdcblxuICBvcHRpb246IChldmVudCkgLT5cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGhhc2ggPSAkKHRoaXMpLmRhdGEgJ2FuY2hvcidcbiAgICBfLm9mZiAnaGVhZGVyID4gLmlubmVyID4gLm1lbnUgPiAub3B0aW9uLCAubW9iaWxlID4gLmlubmVyID4gLm1lbnUgPiAub3B0aW9uJ1xuICAgIF8ub2ZmICcubW9iaWxlLCAuYnVyZ2VyJ1xuICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICQoJ2h0bWwsIGJvZHknKS5zY3JvbGxUbyBcIiMje2hhc2h9XCIsXG4gICAgICAgIGR1cmF0aW9uOiA1MFxuICAgICAgICBvZmZzZXQ6IC02MFxuICAgICAgbG9jYXRpb24uaGFzaCA9IGhhc2hcbiAgICAsIDIwMFxuXG4gIGhlYWRlcjogLT5cblxuICAgIHN0aWNreVNwb3QgPSAzMDBcblxuICAgIGlmIEluZGV4LmNhY2hlLndpbmRvdy5zY3JvbGxUb3AoKSA+IHN0aWNreVNwb3QgYW5kIEluZGV4LmNhY2hlLnN0aWNraWVkIGlzIGZhbHNlXG4gICAgICBfLm9uICcjc3RpY2t5J1xuICAgICAgSW5kZXguY2FjaGUuc3RpY2tpZWQgPSB0cnVlXG5cbiAgICBpZiBJbmRleC5jYWNoZS53aW5kb3cuc2Nyb2xsVG9wKCkgPCBzdGlja3lTcG90IGFuZCBJbmRleC5jYWNoZS5zdGlja2llZCBpcyB0cnVlXG4gICAgICBfLm9mZiAnI3N0aWNreSdcbiAgICAgIEluZGV4LmNhY2hlLnN0aWNraWVkID0gb2ZmXG5cbiAgbWVudTogLT5cblxuICAgICQoJy5zZWN0aW9uJykuZWFjaCAoaSwgZWwpIC0+XG4gICAgICBzZWN0aW9uID0gJChlbCkuZGF0YSAnc2VjdGlvbidcbiAgICAgIGlmIEluZGV4LmluVmlld3BvcnQgZWxcbiAgICAgICAgXy5vZmYgJ2hlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gLm9wdGlvbiwgLm1vYmlsZSA+IC5pbm5lciA+IC5tZW51ID4gLm9wdGlvbidcbiAgICAgICAgXy5vbiBcIi5vcHRpb25fI3tzZWN0aW9ufVwiXG4gICAgICAgIHJldHVybiB0cnVlXG5cbiAgbGF4Y2FjaGU6IC0+XG4gICAgJCgnLmxheGluJykuZWFjaCAoaSwgZWwpIC0+XG4gICAgICBJbmRleC5jYWNoZS5sYXhpbltpXSA9IGVsXG5cbiAgY2hlY2s6IC0+XG4gICAgZm9yIGksIGVsIG9mIEluZGV4LmNhY2hlLmxheGluXG5cbiAgICAgIGlmIEluZGV4LmluVmlld3BvcnQgZWxcbiAgICAgICAgW3BlcmMsIGRpZmZdID0gSW5kZXgudmlld2FibGUgZWxcbiAgICAgICAgamVsID0gJChlbClcblxuICAgICAgICB0aHJlc2ggPSBqZWwuZGF0YSAndGhyZXNoJ1xuICAgICAgICB0aHJlc2ggPSA1MCBpZiB0aHJlc2ggaXMgdW5kZWZpbmVkXG5cbiAgICAgICAgaWYgcGVyYyA+IHRocmVzaCBhbmQgamVsLmhhc0NsYXNzICdvZmYnXG4gICAgICAgICAgXy5vbiBqZWxcbiAgICAgICAgaWYgcGVyYyA8IHRocmVzaCBhbmQgamVsLmhhc0NsYXNzICdvbidcbiAgICAgICAgICBfLm9mZiBqZWxcblxuICAgICAgICAjIyNcbiAgICAgICAgaWYgSW5kZXguY2FjaGUud2luZG93LndpZHRoKCkgPiAxMDAwXG4gICAgICAgICAgaWYgamVsLmhhc0NsYXNzICdsYXhpbl92ZXJ0J1xuICAgICAgICAgICAgdmFsID0gTWF0aC5yb3VuZChkaWZmKVxuICAgICAgICAgICAgI3ZhbCA9IE1hdGgucm91bmQoZGlmZilcbiAgICAgICAgICAgIGlmIEluZGV4LnZhbHM/W2ldIGlzbnQgdmFsKjNcbiAgICAgICAgICAgICAgamVsLmZpbmQoJy5pbm5lcjpmaXJzdCcpLmNzcyAndHJhbnNmb3JtJywgXCJ0cmFuc2xhdGUzZCgwLCAje3ZhbCozfXB4LCAwcHgpXCJcbiAgICAgICAgICAgICAgamVsLmZpbmQoJy5vdmVybGF5JykuY3NzICd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZTNkKDAsICN7dmFsKjJ9cHgsIDBweClcIlxuICAgICAgICAgICAgICBqZWwuZmluZCgnLm92ZXJsYXkgPiAuaW5uZXInKS5jc3MgJ3RyYW5zZm9ybScsIFwidHJhbnNsYXRlM2QoMCwgI3t2YWwvNX1weCwgMHB4KVwiXG4gICAgICAgICAgICAgIEluZGV4LnZhbHNbaV0gPSB2YWwqM1xuICAgICAgICAjIyNcbiAgIFxuICBpblZpZXdwb3J0OiAoZWwpIC0+XG5cbiAgICByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIHJldHVybihcbiAgICAgIChyZWN0LnRvcCA+PSAwIHx8IHJlY3QuYm90dG9tID49IDApICYmXG4gICAgICAocmVjdC50b3AgPD0gd2luZG93LmlubmVySGVpZ2h0IHx8IHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodClcbiAgICApXG5cbiAgdmlld2FibGU6IChlbCkgLT5cbiAgICByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBoZWlnaHQgPSByZWN0LmJvdHRvbS1yZWN0LnRvcFxuXG4gICAgZWxNaWRkbGUgPSByZWN0LnRvcCArIGhlaWdodC8yXG4gICAgd2luTWlkZGxlID0gd2luZG93LmlubmVySGVpZ2h0LzJcbiAgICBtYXggPSB3aW5kb3cuaW5uZXJIZWlnaHQvMiArIGhlaWdodC8yXG4gICAgZGlmZiA9IHdpbk1pZGRsZS1lbE1pZGRsZVxuICAgIHBlcmMgPSAxMDAgLSBNYXRoLmFicyhkaWZmKSoxMDAvbWF4XG4gICAgbm9uYWJzID0gTWF0aC5hYnMoZGlmZikqMTAwL21heFxuICAgIG5vbmFicyA9IC1ub25hYnMgaWYgZGlmZiA8IDBcblxuICAgIHJldHVybiBbcGVyYywgbm9uYWJzXVxuXG4iXX0=
