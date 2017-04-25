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
  name: false,
  i: function() {
    this.name = window.location.hash.replace('#', '');
    $('.basal-entry').attr('basal-name', this.name);
    $('.basal-entry').attr('basal-structure', 'blog');
    return Basal.i(config.basal.client, function() {
      return $('time').each((function(_this) {
        return function(i, el) {
          var description, entry, image, j, jel, len, ref, results, title, url;
          jel = $(el);
          jel.html(moment(jel.attr('title')).format('MMMM Do YYYY'));
          jel.attr('aria-label', moment(jel.attr('title')).calendar());
          ref = Basal.structures.blog.entries;
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            entry = ref[j];
            if (entry.name === Article.name) {
              title = entry.entities.title.value;
              description = entry.entities.description.value;
              image = entry.entities.image.value;
              url = 'https://www.goldpr.com/article/#' + Article.name;
              document.title = title;
              $('meta[name=description]').attr('content', description);
              $('head').append($("<meta property='fb:app_id' content='" + config.meta.fb_appid + "' />")).append($("<meta property='og:url' content='" + url + "' />")).append($("<meta property='og:title' content='" + title + "' />")).append($("<meta property='og:description' content='" + description + "' />")).append($("<meta property='og:image' content='" + image + "' />"));
              results.push($('head').append($("<meta name='twitter:title' content='" + title + "' />")).append($("<meta name='twitter:description' content='" + description + "' />")).append($("<meta name='twitter:image' content='" + image + "' />")));

              /*
              $('meta[property="og:url"]').attr 'content', 'https://www.goldpr.com/article/#' + Article.name
              $('meta[property="og:title"]').attr 'content', title
              $('meta[property="og:description"]').attr 'content', description
              $('meta[property="og:image"]').attr 'content', image
              
              $('meta[name="twitter:title"]').attr 'content', title
              $('meta[name="twitter:description"]').attr 'content', description
              $('meta[name="twitter:image"]').attr 'content', image
               */
            } else {
              results.push(void 0);
            }
          }
          return results;
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
  "clients": ["invisalign", "galderma", "biopharmx", "natera", "coolsculpting", "alma", "endologix", "restylane", "dysport", "sculptra", "sera", "care", "wholefoods", "haggens", "abbot", "finess", "generalmills", "kia", "lifelock", "mattel", "mazda", "mitsubishi", "nike", "nestle", "newbalance", "redbull", "tmobile", "xbox", "obi", "sema", "mixim", "hansens", "tylenol", "drybar", "iteris", "neodyne"],
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
    "image": "img/share.jpg",
    "fb_appid": 238066406669012
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
    }, {
      "name": "Caitlin Hanson",
      "position": "Account Mananger",
      "email": "chanson@goldpr.com"
    }, {
      "name": "Andrea Zito",
      "position": "Analytics",
      "email": "azito@goldpr.com"
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJhcnRpY2xlLmNvZmZlZSIsImJhc2FsLmNvZmZlZSIsImJsb2cuY29mZmVlIiwiY29uZmlnLmNvZmZlZSIsImluZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOztBQUFBLENBQUEsR0FFRTtFQUFBLENBQUEsRUFBRyxTQUFBO1dBQ0QsSUFBQyxDQUFBLE9BQUQsR0FBVyxXQUFBLENBQVksSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsSUFBYixDQUFaLEVBQTZCLEdBQTdCO0VBRFYsQ0FBSDtFQUdBLENBQUEsRUFDRTtJQUFBLE1BQUEsRUFBUSxLQUFSO0lBQ0EsT0FBQSxFQUFTLENBRFQ7R0FKRjtFQU9BLElBQUEsRUFBTSxTQUFDLEVBQUQsRUFBSyxNQUFMLEVBQW1CLEdBQW5COztNQUFLLFNBQU87OztNQUFPLE1BQUk7O0lBRTNCLElBQUcsQ0FBQSxDQUFBLEVBQUEsWUFBa0IsTUFBbEIsQ0FBSDtNQUNFLEVBQUEsR0FBSyxDQUFBLENBQUUsRUFBRixFQURQOztJQUdBLElBQUcsTUFBQSxLQUFZLEtBQWY7TUFDRSxFQUFFLENBQUMsV0FBSCxDQUFlLE1BQWYsRUFERjs7SUFHQSxJQUFHLEdBQUEsS0FBUyxLQUFaO01BQ0UsRUFBRSxDQUFDLFFBQUgsQ0FBWSxHQUFaLEVBREY7O0FBR0EsV0FBTztFQVhILENBUE47RUFvQkEsR0FBQSxFQUFLLFNBQUMsRUFBRCxFQUFLLENBQUw7O01BQUssSUFBRTs7SUFFVixJQUFHLENBQUMsQ0FBQyxNQUFGLElBQWEsQ0FBQyxDQUFDLE9BQUYsR0FBWSxDQUE1QjtNQUVFLElBQUMsQ0FBQSxJQUFELENBQU0sRUFBTixFQUFVLEtBQVYsRUFBaUIsUUFBakI7TUFDQSxVQUFBLENBQVcsU0FBQTtRQUNULElBQUMsQ0FBQSxJQUFELENBQU0sRUFBTixFQUFVLFFBQVYsRUFBb0IsS0FBcEI7ZUFDQSxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxJQUFW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Q0FBQyxNQUFMLElBQWUsTUFBTSxDQUFDLFdBQXpEO0VBTlEsQ0FqSVo7RUEwSUEsUUFBQSxFQUFVLFNBQUMsRUFBRDtBQUNSLFFBQUE7SUFBQSxJQUFBLEdBQU8sRUFBRSxDQUFDLHFCQUFILENBQUE7SUFDUCxNQUFBLEdBQVMsSUFBSSxDQUFDLE1BQUwsR0FBWSxJQUFJLENBQUM7SUFFMUIsUUFBQSxHQUFXLElBQUksQ0FBQyxHQUFMLEdBQVcsTUFBQSxHQUFPO0lBQzdCLFNBQUEsR0FBWSxNQUFNLENBQUMsV0FBUCxHQUFtQjtJQUMvQixHQUFBLEdBQU0sTUFBTSxDQUFDLFdBQVAsR0FBbUIsQ0FBbkIsR0FBdUIsTUFBQSxHQUFPO0lBQ3BDLElBQUEsR0FBTyxTQUFBLEdBQVU7SUFDakIsSUFBQSxHQUFPLEdBQUEsR0FBTSxJQUFJLENBQUMsR0FBTCxDQUFTLElBQVQsQ0FBQSxHQUFlLEdBQWYsR0FBbUI7SUFDaEMsTUFBQSxHQUFTLElBQUksQ0FBQyxHQUFMLENBQVMsSUFBVCxDQUFBLEdBQWUsR0FBZixHQUFtQjtJQUM1QixJQUFvQixJQUFBLEdBQU8sQ0FBM0I7TUFBQSxNQUFBLEdBQVMsQ0FBQyxPQUFWOztBQUVBLFdBQU8sQ0FBQyxJQUFELEVBQU8sTUFBUDtFQVpDLENBMUlWIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIl8gPVxuXG4gIGk6IC0+XG4gICAgQGNvbnNvbGUgPSBzZXRJbnRlcnZhbChAZGV0ZWN0LmJpbmQoQCksIDIwMClcblxuICBwOlxuICAgIG9mZmluZzogZmFsc2VcbiAgICBvZmZ0aW1lOiAwXG5cbiAgdHVybjogKGVsLCByZW1vdmU9ZmFsc2UsIGFkZD1mYWxzZSkgLT5cblxuICAgIGlmIGVsIG5vdCBpbnN0YW5jZW9mIGpRdWVyeVxuICAgICAgZWwgPSAkKGVsKVxuXG4gICAgaWYgcmVtb3ZlIGlzbnQgZmFsc2VcbiAgICAgIGVsLnJlbW92ZUNsYXNzKHJlbW92ZSlcblxuICAgIGlmIGFkZCBpc250IGZhbHNlXG4gICAgICBlbC5hZGRDbGFzcyhhZGQpXG5cbiAgICByZXR1cm4gdHJ1ZVxuXG4gIG9mZjogKGVsLCBwPXt9KSAtPlxuXG4gICAgaWYgcC5vZmZpbmcgYW5kIHAub2ZmdGltZSA+IDBcblxuICAgICAgQHR1cm4gZWwsIGZhbHNlLCAnb2ZmaW5nJ1xuICAgICAgc2V0VGltZW91dCAtPlxuICAgICAgICBAdHVybiBlbCwgJ29mZmluZycsIGZhbHNlXG4gICAgICAgIEB0dXJuIGVsLCAnb24nLCAnb2ZmJ1xuICAgICAgLCBwLm9mZnRpbWUqMTAwMCArIDEwMFxuXG4gICAgZWxzZVxuICAgICAgQHR1cm4gZWwsICdvbicsICdvZmYnXG5cbiAgICByZXR1cm5cblxuICBvbjogKGVsLCBwKSAtPlxuICAgIEB0dXJuIGVsLCAnb2ZmJywgJ29uJ1xuXG4gIHN3YXA6IChlbCwgcCkgLT5cblxuICAgIGlmIGVsIG5vdCBpbnN0YW5jZW9mIGpRdWVyeVxuICAgICAgZWwgPSAkKGVsKVxuXG4gICAgaWYgZWwuaGFzQ2xhc3MgJ29mZidcbiAgICAgIEBvbiBlbCwgcFxuICAgIGVsc2VcbiAgICAgIEBvZmYgZWwsIHBcblxuICAgIHJldHVyblxuXG4gIGVuY29kZTogKHN0cikgLT5cbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgICAgIC5yZXBsYWNlKC8hL2csICclMjEnKVxuICAgICAgLnJlcGxhY2UoLycvZywgJyUyNycpXG4gICAgICAucmVwbGFjZSgvXFwoL2csICclMjgnKVxuICAgICAgLnJlcGxhY2UoL1xcKS9nLCAnJTI5JylcbiAgICAgIC5yZXBsYWNlKC9cXCovZywgJyUyQScpXG4gICAgICAucmVwbGFjZSgvJTIwL2csICcrJylcblxuICB0OiAoY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlKSAtPlxuICAgIF9nYXEucHVzaCBbJ190cmFja0V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlXVxuXG4gIHJhbmQ6IChtaW4sIG1heCkgLT5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KSArIG1pblxuXG4gIGxvYWQ6IChzY3JpcHQsIGluaXRpYXRlLCBjb21wbGV0ZSkgLT5cblxuICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAnc2NyaXB0J1xuICAgIGVsLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0J1xuICAgIGVsLnNyYyA9IHNjcmlwdFxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIgJ2xvYWQnICwgKGUpIC0+XG4gICAgICBjb21wbGV0ZSgpIGlmIHR5cGVvZiBjb21wbGV0ZSBpcyAnZnVuY3Rpb24nXG4gICAgICB3aW5kb3dbaW5pdGlhdGVdLmkoKSBpZiBpbml0aWF0ZSBpc250IHVuZGVmaW5lZCBhbmQgaW5pdGlhdGUgaXNudCBmYWxzZVxuICAgICwgZmFsc2VcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpXG5cbiAgbGxjOiAtPlxuICAgIGFzY2lpID0gXCJcIlwiXG5cbiAgICAgICVjbW1tLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4vbW1tXG4gICAgICBtbW8uLi4uLi4uLi4uLi4uLi4uLTo6Ly86Oi0uLi4uLi4uLTo6Ojo6Ojo6Ojo6OjotLi4uLi4uLi4tOjovLy86LS5vbW1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi46K3loZGRkZGRkaHkrLS4uLi4vZGRkZGRkZGRkZGRkZCsuLi4uLi4vc2hkZGRkZGRkeW9kbVxuICAgICAgbW8uLi4uLi4uLi4uLi4uLWhtbW1oeXl5eWRtbW1oOi4uLi9tbW1taGhoaGhoaGhoKy4uLi46eWRtbWRoeXl5aGRkb29tXG4gICAgICBtLS4uLi4uLi4uLi4uLi4uLXNzOi0uLi4uLXltbW15Li4uL21tbW0tLS0tLS0tLS0uLi4uOmRtbW1zOi0uLi4tOi8uLW1cbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4ueW1tbXkuLi4vbW1tbS0vK29vbys6LS4uLi55bW1teS06K29vbysvLS4uZFxuICAgICAgaC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNtbW1kOi4uLi9tbW1taG1tbW1tbWRoKy4uLmRtbW1zaGRtbW1tbW1ocy1oXG4gICAgICBoLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNkbW1keTouLi4uOmhoZGhvKy8vK3ltbW1tKy4uZG1tbWR5by8vK3NkbW1taGhcbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4tK3lkbW1keS8uLi4uLi4uLS06Li4uLi4uLnNtbW1oLi55bW1tcy4uLi4uLjptbW1tbVxuICAgICAgbS0uLi4uLi4uLi4uLi4uLi06c2htbW1kcy8tLS0tLS4uLi46cy8tLS4uLi06aG1tbXMuLjpkbW1kLy0uLi4tb21tbW1tXG4gICAgICBtby4uLi4uLi4uLi4uLi4uaG1tbW1tbWhoaGhoaGhoLi4uK2RtbWRoeXl5aGRtbW15LS4uLi9obW1taHl5eWhtbW1kaG1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi5kZGRkZGRkZGRkZGRkZGQuLi4tK3NoZGRkZGRkZGh5Ly0uLi4uLi1veWRkZGRkZGRobzpkbVxuICAgICAgbW1vLi4uLi4uLi4uLi4uLjo6Ojo6Ojo6Ojo6Ojo6Oi4uLi4uLi4tOi8vLzo6LS4uLi4uLi4uLi4uLTovLy86LS4ub21tXG4gICAgICBtbW0vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9tbW1cblxuICAgICAgOjogc3ludGFjdGljIHN1Z2FyIGJ5IDI1NlxuICAgICAgOjogaHR0cDovLzI1Ni5pby9cbiAgICAgIDo6ICN7Y29uZmlnLm1ldGEucmVwb31cbiAgICBcIlwiXCJcbiAgICBjb25zb2xlLmxvZyBhc2NpaSwgXCJjb2xvcjogZ3JleTsgZm9udC1mYW1pbHk6IE1lbmxvLCBtb25vc3BhY2U7XCJcblxuICBkZXRlY3Q6IC0+XG4gICAgaWYgKCgod2luZG93Lm91dGVySGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSA+IDEwMCkgfHwgKCh3aW5kb3cub3V0ZXJXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoKSA+IDEwMCkpXG4gICAgICBAbGxjKClcbiAgICAgIGNsZWFySW50ZXJ2YWwgQGNvbnNvbGVcblxuXy5pKClcbiIsIkFydGljbGUgPSBcblxuICBuYW1lOiBmYWxzZVxuXG4gIGk6IC0+XG5cbiAgICBAbmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJylcblxuICAgICQoJy5iYXNhbC1lbnRyeScpLmF0dHIoJ2Jhc2FsLW5hbWUnLCBAbmFtZSlcbiAgICAkKCcuYmFzYWwtZW50cnknKS5hdHRyKCdiYXNhbC1zdHJ1Y3R1cmUnLCAnYmxvZycpXG5cbiAgICBCYXNhbC5pIGNvbmZpZy5iYXNhbC5jbGllbnQsIC0+XG4gICAgICAkKCd0aW1lJykuZWFjaCAoaSwgZWwpID0+XG4gICAgICAgIGplbCA9ICQgZWxcbiAgICAgICAgamVsLmh0bWwgbW9tZW50KGplbC5hdHRyKCd0aXRsZScpKS5mb3JtYXQoJ01NTU0gRG8gWVlZWScpXG4gICAgICAgIGplbC5hdHRyICdhcmlhLWxhYmVsJywgbW9tZW50KGplbC5hdHRyKCd0aXRsZScpKS5jYWxlbmRhcigpXG5cbiAgICAgICAgZm9yIGVudHJ5IGluIEJhc2FsLnN0cnVjdHVyZXMuYmxvZy5lbnRyaWVzXG4gICAgICAgICAgaWYgZW50cnkubmFtZSBpcyBBcnRpY2xlLm5hbWVcbiAgICAgICAgICAgIHRpdGxlID0gZW50cnkuZW50aXRpZXMudGl0bGUudmFsdWVcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gZW50cnkuZW50aXRpZXMuZGVzY3JpcHRpb24udmFsdWVcbiAgICAgICAgICAgIGltYWdlID0gZW50cnkuZW50aXRpZXMuaW1hZ2UudmFsdWVcblxuICAgICAgICAgICAgdXJsID0gJ2h0dHBzOi8vd3d3LmdvbGRwci5jb20vYXJ0aWNsZS8jJyArIEFydGljbGUubmFtZVxuXG4gICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlXG5cbiAgICAgICAgICAgICQoJ21ldGFbbmFtZT1kZXNjcmlwdGlvbl0nKS5hdHRyICdjb250ZW50JywgZGVzY3JpcHRpb25cblxuICAgICAgICAgICAgJCgnaGVhZCcpXG4gICAgICAgICAgICAgIC5hcHBlbmQoJChcIjxtZXRhIHByb3BlcnR5PSdmYjphcHBfaWQnIGNvbnRlbnQ9JyN7Y29uZmlnLm1ldGEuZmJfYXBwaWR9JyAvPlwiKSlcbiAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPG1ldGEgcHJvcGVydHk9J29nOnVybCcgY29udGVudD0nI3t1cmx9JyAvPlwiKSlcbiAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPG1ldGEgcHJvcGVydHk9J29nOnRpdGxlJyBjb250ZW50PScje3RpdGxlfScgLz5cIikpXG4gICAgICAgICAgICAgIC5hcHBlbmQoJChcIjxtZXRhIHByb3BlcnR5PSdvZzpkZXNjcmlwdGlvbicgY29udGVudD0nI3tkZXNjcmlwdGlvbn0nIC8+XCIpKVxuICAgICAgICAgICAgICAuYXBwZW5kKCQoXCI8bWV0YSBwcm9wZXJ0eT0nb2c6aW1hZ2UnIGNvbnRlbnQ9JyN7aW1hZ2V9JyAvPlwiKSk7XG5cbiAgICAgICAgICAgICQoJ2hlYWQnKVxuICAgICAgICAgICAgICAuYXBwZW5kKCQoXCI8bWV0YSBuYW1lPSd0d2l0dGVyOnRpdGxlJyBjb250ZW50PScje3RpdGxlfScgLz5cIikpXG4gICAgICAgICAgICAgIC5hcHBlbmQoJChcIjxtZXRhIG5hbWU9J3R3aXR0ZXI6ZGVzY3JpcHRpb24nIGNvbnRlbnQ9JyN7ZGVzY3JpcHRpb259JyAvPlwiKSlcbiAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPG1ldGEgbmFtZT0ndHdpdHRlcjppbWFnZScgY29udGVudD0nI3tpbWFnZX0nIC8+XCIpKTtcblxuICAgICAgICAgICAgIyMjXG4gICAgICAgICAgICAkKCdtZXRhW3Byb3BlcnR5PVwib2c6dXJsXCJdJykuYXR0ciAnY29udGVudCcsICdodHRwczovL3d3dy5nb2xkcHIuY29tL2FydGljbGUvIycgKyBBcnRpY2xlLm5hbWVcbiAgICAgICAgICAgICQoJ21ldGFbcHJvcGVydHk9XCJvZzp0aXRsZVwiXScpLmF0dHIgJ2NvbnRlbnQnLCB0aXRsZVxuICAgICAgICAgICAgJCgnbWV0YVtwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJdJykuYXR0ciAnY29udGVudCcsIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAkKCdtZXRhW3Byb3BlcnR5PVwib2c6aW1hZ2VcIl0nKS5hdHRyICdjb250ZW50JywgaW1hZ2VcblxuICAgICAgICAgICAgJCgnbWV0YVtuYW1lPVwidHdpdHRlcjp0aXRsZVwiXScpLmF0dHIgJ2NvbnRlbnQnLCB0aXRsZVxuICAgICAgICAgICAgJCgnbWV0YVtuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiXScpLmF0dHIgJ2NvbnRlbnQnLCBkZXNjcmlwdGlvblxuICAgICAgICAgICAgJCgnbWV0YVtuYW1lPVwidHdpdHRlcjppbWFnZVwiXScpLmF0dHIgJ2NvbnRlbnQnLCBpbWFnZVxuICAgICAgICAgICAgIyMjXG4iLCJCYXNhbCA9XG5cbiAgZG9tYWluOiAnLy9iYXNhbC50ZWNoL2FwaSdcbiAgY2xpZW50OiBmYWxzZVxuXG4gIGRhdGE6IGZhbHNlXG4gIHN0cnVjdHVyZXM6IGZhbHNlXG5cbiAgY29tcGxldGU6IGZhbHNlXG5cbiAgaTogKGNsaWVudCwgY29tcGxldGUpIC0+XG5cbiAgICBAY29tcGxldGUgPSBjb21wbGV0ZVxuXG4gICAgQGNsaWVudCA9IGNsaWVudFxuXG4gICAgQGdldFN0cnVjdHVyZXMgPT5cbiAgICAgIEBsb29wKClcbiAgICAgIEBlbnRyeSgpXG5cbiAgdHlwZTogKGVsLCB0eXBlLCBuYW1lLCBlbnRyeSkgLT5cbiAgICBzd2l0Y2ggdHlwZVxuICAgICAgd2hlbiAnY3NzLWJhY2tncm91bmQnXG4gICAgICAgIGVsLmNzcyAnYmFja2dyb3VuZC1pbWFnZScsIFwidXJsKCN7ZW50cnkuZW50aXRpZXNbbmFtZV0udmFsdWV9KVwiXG4gICAgICB3aGVuICdkYXRlJ1xuICAgICAgICBlbC5odG1sIG1vbWVudChlbnRyeS5lbnRpdGllc1tuYW1lXS52YWx1ZSwgJ01NL0REL1lZWVknKS5mb3JtYXQgZWwuYXR0cignYmFzYWwtZGF0ZWZvcm1hdCcpXG4gICAgICB3aGVuICdpbWFnZSdcbiAgICAgICAgZWwuYXR0ciAnc3JjJywgZW50cnkuZW50aXRpZXNbbmFtZV0udmFsdWVcbiAgICAgIHdoZW4gJ3RleHQnXG4gICAgICAgIGVsLmh0bWwgZW50cnkuZW50aXRpZXNbbmFtZV0udmFsdWVcbiAgICAgIHdoZW4gJ2hyZWYnXG4gICAgICAgIGVsLmF0dHIgJ2hyZWYnLCBlbnRyeS5lbnRpdGllc1tuYW1lXS52YWx1ZVxuXG4gIGVudHJ5OiAtPlxuICAgICQoJy5iYXNhbC1lbnRyeScpLmVhY2ggKGksIGVsKSAtPlxuXG4gICAgICBlbCA9ICQoZWwpXG4gICAgICBzdHJ1Y3R1cmUgPSBlbC5hdHRyICdiYXNhbC1zdHJ1Y3R1cmUnXG4gICAgICBuYW1lID0gZWwuYXR0ciAnYmFzYWwtbmFtZSdcbiAgICAgIGVudGl0eU5hbWUgPSBlbC5hdHRyICdiYXNhbC1lbnRpdHknXG4gICAgICBhdHRyID0gZWwuYXR0ciAnYmFzYWwtYXR0cidcbiAgICAgIHR5cGUgPSBlbC5hdHRyICdiYXNhbC10eXBlJ1xuXG4gICAgICBCYXNhbC5lcnJvcihcIlN0cnVjdHVyZSBub3QgZm91bmQgXFxcIiN7c3RydWN0dXJlfVxcXCJcIikgaWYgIUJhc2FsLnN0cnVjdHVyZXNbc3RydWN0dXJlXT9cblxuICAgICAgZm9yIGtleSwgZW50cnkgb2YgQmFzYWwuc3RydWN0dXJlc1tzdHJ1Y3R1cmVdLmVudHJpZXNcbiAgICAgICAgY29udGludWUgaWYgZW50cnkuYWN0aXZlIGlzbnQgdHJ1ZVxuICAgICAgICBpZiBuYW1lIGlzIGVudHJ5Lm5hbWVcbiAgICAgICAgICBlbC5hdHRyICd0aXRsZScsIGVudHJ5LmNyZWF0ZWRfYXQgaWYgZWwuYXR0cignYmFzYWwtZGF0ZScpIGlzICdjcmVhdGVkJ1xuICAgICAgICAgIGZvciBia2V5LCBlbnRpdHkgb2YgZW50cnkuZW50aXRpZXNcbiAgICAgICAgICAgIGlmIGVudGl0eS5uYW1lIGlzIGVudGl0eU5hbWVcbiAgICAgICAgICAgICAgaWYgdHlwZVxuICAgICAgICAgICAgICAgIEJhc2FsLnR5cGUgZWwsIHR5cGUsIGVudGl0eS5uYW1lLCBlbnRyeVxuICAgICAgICAgICAgICBlbHNlIGlmIGF0dHJcbiAgICAgICAgICAgICAgICBlbC5hdHRyIGF0dHIsIGVudGl0eS52YWx1ZVxuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZWwuaHRtbCBlbnRpdHkudmFsdWVcblxuICBsb29wOiAtPlxuXG4gICAgJCgnLmJhc2FsLWxvb3AnKS5lYWNoKCAoaSwgZWwpIC0+XG5cbiAgICAgIGVsID0gJChlbClcbiAgICAgIHN0cnVjdHVyZSA9IGVsLmF0dHIoXCJiYXNhbC1zdHJ1Y3R1cmVcIilcblxuICAgICAgQmFzYWwuZXJyb3IoXCJTdHJ1Y3R1cmUgbm90IGZvdW5kIFxcXCIje3N0cnVjdHVyZX1cXFwiXCIpIGlmICFCYXNhbC5zdHJ1Y3R1cmVzW3N0cnVjdHVyZV0/XG5cbiAgICAgIHRlbXBsYXRlID0gZWwuY2hpbGRyZW4oKS5yZW1vdmUoKVxuXG4gICAgICBmb3Igb3duIG5hbWUsIGVudHJ5IG9mIEJhc2FsLnN0cnVjdHVyZXNbc3RydWN0dXJlXS5lbnRyaWVzXG4gICAgICAgIGNvbnRpbnVlIGlmIGVudHJ5LmFjdGl2ZSBpc250IHRydWVcbiAgICAgICAgdHBsID0gdGVtcGxhdGUuY2xvbmUoKVxuICAgICAgICB0cGwuYXR0cignaHJlZicsIHRwbC5hdHRyKCdiYXNhbC1saW5rJykgKyBlbnRyeS5uYW1lKSBpZiB0cGwuaGFzQ2xhc3MgJ2Jhc2FsLWxpbmsnXG4gICAgICAgIHRwbC5maW5kKCcqJykuZWFjaCAoY2ksIGNlbCkgLT5cbiAgICAgICAgICBqY2VsID0gJChjZWwpXG4gICAgICAgICAgbmFtZSA9IGpjZWwuYXR0cignYmFzYWwtbmFtZScpXG4gICAgICAgICAgdHlwZSA9IGpjZWwuYXR0cignYmFzYWwtdHlwZScpXG4gICAgICAgICAgbmFtZXMgPSBqY2VsLmF0dHIoJ2Jhc2FsLW5hbWVzJyk/LnNwbGl0ICcsJ1xuICAgICAgICAgIHR5cGVzID0gamNlbC5hdHRyKCdiYXNhbC10eXBlcycpPy5zcGxpdCAnLCdcblxuICAgICAgICAgIHJldHVybiB0cnVlIGlmIG5hbWUgaXMgdW5kZWZpbmVkIGFuZCBuYW1lcyBpcyB1bmRlZmluZWRcblxuICAgICAgICAgIGlmIG5hbWVzIGlzIHVuZGVmaW5lZFxuICAgICAgICAgICAgbmFtZXMgPSBbbmFtZV1cbiAgICAgICAgICAgIHR5cGVzID0gW3R5cGVdXG5cbiAgICAgICAgICBmb3IgbmFtZSwgaSBpbiBuYW1lc1xuICAgICAgICAgICAgdHlwZSA9IHR5cGVzW2ldXG5cbiAgICAgICAgICAgIGlmIHR5cGUgaXNudCB1bmRlZmluZWRcbiAgICAgICAgICAgICAgc3dpdGNoIHR5cGVcbiAgICAgICAgICAgICAgICB3aGVuICdjc3MtYmFja2dyb3VuZCdcbiAgICAgICAgICAgICAgICAgIGpjZWwuY3NzICdiYWNrZ3JvdW5kLWltYWdlJywgXCJ1cmwoI3tlbnRyeS5lbnRpdGllc1tuYW1lXS52YWx1ZX0pXCJcbiAgICAgICAgICAgICAgICB3aGVuICdkYXRlJ1xuICAgICAgICAgICAgICAgICAgamNlbC5odG1sIG1vbWVudChlbnRyeS5lbnRpdGllc1tuYW1lXS52YWx1ZSwgJ01NL0REL1lZWVknKS5mb3JtYXQgamNlbC5hdHRyKCdiYXNhbC1kYXRlZm9ybWF0JylcbiAgICAgICAgICAgICAgICB3aGVuICdpbWFnZSdcbiAgICAgICAgICAgICAgICAgIGpjZWwuYXR0ciAnc3JjJywgZW50cnkuZW50aXRpZXNbbmFtZV0udmFsdWVcbiAgICAgICAgICAgICAgICB3aGVuICd0ZXh0J1xuICAgICAgICAgICAgICAgICAgamNlbC5odG1sIGVudHJ5LmVudGl0aWVzW25hbWVdLnZhbHVlXG4gICAgICAgICAgICAgICAgd2hlbiAnaHJlZidcbiAgICAgICAgICAgICAgICAgIGpjZWwuYXR0ciAnaHJlZicsIGVudHJ5LmVudGl0aWVzW25hbWVdLnZhbHVlXG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgaWYgbmFtZSBpcyAnc3RydWN0dXJlLW5hbWUnXG4gICAgICAgICAgICAgICAgamNlbC5odG1sIGVudHJ5Lm5hbWVcbiAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGpjZWwuaHRtbCBlbnRyeS5lbnRpdGllc1tuYW1lXS52YWx1ZVxuICAgICAgICBlbC5hcHBlbmQgdHBsXG5cbiAgICAgICkucHJvbWlzZSgpLmRvbmUgLT5cbiAgICAgICAgQmFzYWwuY29tcGxldGU/KClcblxuICBnZXRTdHJ1Y3R1cmVzOiAoY29tcGxldGUpIC0+XG4gICAgQGpzb25wIFwic3RydWN0dXJlc1wiLCBjbGllbnQ6IEBjbGllbnQsIChyZXN1bHQpID0+XG4gICAgICBAc3RydWN0dXJlcyA9IHt9XG4gICAgICBmb3IgaSxzdHJ1Y3R1cmUgb2YgcmVzdWx0LmRhdGFcbiAgICAgICAgQHN0cnVjdHVyZXNbc3RydWN0dXJlLm5hbWVdID0gc3RydWN0dXJlXG4gICAgICBjb21wbGV0ZT8oKVxuXG4gIGpzb25wOiAoZW5kcG9pbnQsIHBhcmFtcywgY29tcGxldGUpIC0+XG5cbiAgICBwYXJhbXMuY2FsbGJhY2sgPSAnQmFzYWwuY2FsbGJhY2snXG5cbiAgICBzY3JpcHQgPSBcIiN7ZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2x9I3tAZG9tYWlufS8je2VuZHBvaW50fT9cIiArICQucGFyYW0gcGFyYW1zXG5cbiAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgJ3NjcmlwdCdcbiAgICBlbC5zcmMgPSBzY3JpcHRcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyICdsb2FkJyAsIChlKSAtPlxuICAgICAgY29tcGxldGU/KEJhc2FsLmRhdGEpXG4gICAgICBCYXNhbC5kYXRhID0gZmFsc2VcbiAgICAsIGZhbHNlXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKGVsKVxuXG4gIGNhbGxiYWNrOiAoZGF0YSkgLT5cbiAgICBCYXNhbC5kYXRhID0gZGF0YVxuXG4gIGVycm9yOiAobWVzc2FnZSkgLT5cbiAgICB0aHJvdyBuZXcgRXJyb3IgXCJiYXNhbDogI3ttZXNzYWdlfVwiXG4iLCJCbG9nID0gXG5cbiAgaTogLT5cblxuICAgIEJhc2FsLmkgY29uZmlnLmJhc2FsLmNsaWVudFxuXG5cbiIsImNvbmZpZyA9IHtcImJhc2FsXCI6e1wiY2xpZW50XCI6XCI1OGFkZDQ0NTVhYTU5YjEyYjcyOWUxMzFcIn0sXCJjbGllbnRzXCI6W1wiaW52aXNhbGlnblwiLFwiZ2FsZGVybWFcIixcImJpb3BoYXJteFwiLFwibmF0ZXJhXCIsXCJjb29sc2N1bHB0aW5nXCIsXCJhbG1hXCIsXCJlbmRvbG9naXhcIixcInJlc3R5bGFuZVwiLFwiZHlzcG9ydFwiLFwic2N1bHB0cmFcIixcInNlcmFcIixcImNhcmVcIixcIndob2xlZm9vZHNcIixcImhhZ2dlbnNcIixcImFiYm90XCIsXCJmaW5lc3NcIixcImdlbmVyYWxtaWxsc1wiLFwia2lhXCIsXCJsaWZlbG9ja1wiLFwibWF0dGVsXCIsXCJtYXpkYVwiLFwibWl0c3ViaXNoaVwiLFwibmlrZVwiLFwibmVzdGxlXCIsXCJuZXdiYWxhbmNlXCIsXCJyZWRidWxsXCIsXCJ0bW9iaWxlXCIsXCJ4Ym94XCIsXCJvYmlcIixcInNlbWFcIixcIm1peGltXCIsXCJoYW5zZW5zXCIsXCJ0eWxlbm9sXCIsXCJkcnliYXJcIixcIml0ZXJpc1wiLFwibmVvZHluZVwiXSxcImNvbG9yXCI6e1wiYmxhY2sxXCI6XCIjMDAwMDAwXCIsXCJ3aGl0ZTFcIjpcIiNGRkZGRkZcIixcIndoaXRlMlwiOlwiI0Y3RUVFQVwiLFwicmVkMVwiOlwiI0VFNjk3QVwiLFwiYmx1ZTFcIjpcIiNEMUUwRUJcIixcImdvbGQxXCI6XCIjQjA5NzZEXCJ9LFwiZm9udFwiOntcImNvcHkxXCI6e1wiZm9udC1mYW1pbHlcIjpcImdvdGhhbSBsaWdodFwiLFwiZm9udC1zaXplXCI6XCIxNnB4XCJ9LFwiY29weTJcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIG1lZGl1bVwiLFwiZm9udC1zaXplXCI6XCIxNnB4XCJ9LFwiY29weTNcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjE0cHhcIn0sXCJjb3B5NFwiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gYm9sZFwiLFwiZm9udC1zaXplXCI6XCIyMHB4XCJ9LFwiY29weTVcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjEycHhcIn0sXCJjb3B5NlwiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gbWVkaXVtXCIsXCJmb250LXNpemVcIjpcIjE0cHhcIn0sXCJjb3B5N1wiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gYm9sZFwiLFwiZm9udC1zaXplXCI6XCIxMnB4XCJ9LFwiaDFcIjp7XCJmb250LWZhbWlseVwiOlwibmV1dHJhdGV4dCBib2xkXCIsXCJmb250LXNpemVcIjpcIjQwcHhcIn0sXCJoMlwiOntcImZvbnQtZmFtaWx5XCI6XCJuZXV0cmF0ZXh0IGRlbWlcIixcImZvbnQtc2l6ZVwiOlwiMjBweFwifSxcImgzXCI6e1wiZm9udC1mYW1pbHlcIjpcImdvdGhhbSBsaWdodFwiLFwiZm9udC1zaXplXCI6XCIzMHB4XCJ9LFwiaDRcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIGJvbGRcIixcImZvbnQtc2l6ZVwiOlwiMzBweFwifSxcImg1XCI6e1wiZm9udC1mYW1pbHlcIjpcImdvdGhhbSBsaWdodFwiLFwiZm9udC1zaXplXCI6XCIyMHB4XCJ9LFwiaDZcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIGJvb2tcIixcImZvbnQtc2l6ZVwiOlwiMzAwcHhcIn19LFwibWVudVwiOltcInN0YW5kb3V0XCIsXCJhcHByb2FjaFwiLFwid29ya1wiLFwic2VydmljZXNcIixcInRlYW1cIixcImNsaWVudHNcIixcImNvbnRhY3RcIl0sXCJtZXRhXCI6e1widGl0bGVcIjpcIkdvbGQgUFIgOiBUb3AgUHVibGljIFJlbGF0aW9ucyBGaXJtICsgRGlnaXRhbCBBZ2VuY3lcIixcInVybFwiOlwiaHR0cHM6Ly93d3cuZ29sZHByLmNvbS9cIixcInJlcG9cIjpcImh0dHA6Ly93d3cuZ2l0aHViLmNvbS9hY2lkamF6ei9nb2xkcHJcIixcImRlc2NyaXB0aW9uXCI6XCJBd2FyZCB3aW5uaW5nIHB1YmxpYyByZWxhdGlvbnMgYW5kIGRpZ2l0YWwgYWdlbmN5LiBHT0xEIFBSIGlzIGEgQ2FsaWZvcm5pYSBiYXNlZCBQUiBmaXJtIHRydXN0ZWQgYnkgc29tZSBvZiB0aGUgbGFyZ2VzdCBicmFuZHMgYWNyb3NzIHRoZSBnbG9iZS5cIixcImtleXdvcmRzXCI6XCJ3b21lbnMgYmVhdXR5IHByLCB3b21lbnMgaGVhbHRoIHByLCBzb2NpYWwgbWVkaWFcIixcImltYWdlXCI6XCJpbWcvc2hhcmUuanBnXCIsXCJmYl9hcHBpZFwiOjIzODA2NjQwNjY2OTAxMn0sXCJzb2NpYWxcIjp7XCJmYWNlYm9va1wiOlwiaHR0cDovL3d3dy5mYWNlYm9vay5jb20vZ29sZHByXCIsXCJ0d2l0dGVyXCI6XCJodHRwOi8vd3d3LnR3aXR0ZXIuY29tL2dvbGRwcl9cIixcImluc3RhZ3JhbVwiOlwiaHR0cDovL3d3dy5pbnN0YWdyYW0uY29tL2dvbGRwclwiLFwibWFpbFwiOlwiaGVsbG9AZ29sZHByLmNvbVwiLFwibWFwXCI6XCJodHRwczovL2dvby5nbC9tYXBzL1NUTmZhNnpzMzRzXCIsXCJwaG9uZVwiOjk0OTc0MzM5MTF9LFwic3R1ZGllc1wiOntcIjFcIjp7XCJuYW1lXCI6XCJDYXNlIFN0dWR5IDFcIixcInR5cGVcIjpcIkhlYWx0aCBhbmQgQmVhdXR5XCIsXCJsaW5rXCI6XCJDYXNlU3R1ZHkxX1Jlc3R5bGFuZV9IZWFsdGhfYW5kX0JlYXV0eS5wZGZcIixcInZpZGVvXCI6XCJodHRwczovL3ZpbWVvLmNvbS8xNTg0MzIxOTlcIn0sXCIyXCI6e1wibmFtZVwiOlwiQ2FzZSBTdHVkeSAyXCIsXCJ0eXBlXCI6XCJIZWFsdGggYW5kIEJlYXV0eVwiLFwibGlua1wiOlwiQ2FzZVN0dWR5Ml9Db29sc2N1bHB0aW5nX0hlYWx0aF9hbmRfQmVhdXR5LnBkZlwiLFwidmlkZW9cIjpcImh0dHBzOi8vdmltZW8uY29tLzE1ODQzMTg2MVwifSxcIjNcIjp7XCJuYW1lXCI6XCJDYXNlIFN0dWR5IDNcIixcInR5cGVcIjpcIkhlYWx0aCBhbmQgQmVhdXR5XCIsXCJsaW5rXCI6XCJDYXNlU3R1ZHkzX0ludmlzYWxpZ25fSGVhbHRoX2FuZF9CZWF1dHkucGRmXCJ9LFwiNFwiOntcIm5hbWVcIjpcIkNhc2UgU3R1ZHkgNFwiLFwidHlwZVwiOlwiV29tZW4ncyBIZWFsdGhcIixcImxpbmtcIjpcIkNhc2VTdHVkeTRfUGFub3JhbWFOSVBUX1dvbWVuc19IZWFsdGgucGRmXCJ9LFwiNVwiOntcIm5hbWVcIjpcIkNhc2UgU3R1ZHkgNVwiLFwidHlwZVwiOlwiV29tZW4ncyBIZWFsdGhcIixcImxpbmtcIjpcIkNhc2VTdHVkeTVfVmlvbGV0X1dvbWVuc19IZWFsdGgucGRmXCJ9LFwiNlwiOntcIm5hbWVcIjpcIkNhc2UgU3R1ZHkgNlwiLFwidHlwZVwiOlwiRm9vZCBhbmQgQmV2ZXJhZ2VcIixcImxpbmtcIjpcIkNhc2VTdHVkeTZfV2hvbGVGb29kc19Gb29kX2FuZF9CZXZlcmFnZS5wZGZcIn19LFwidGVhbVwiOlt7XCJuYW1lXCI6XCJTaGFyaSBHb2xkXCIsXCJwb3NpdGlvblwiOlwiRm91bmRlci9DRU9cIixcImVtYWlsXCI6XCJzZ29sZEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkFkcmllbm5lIEtlbXBcIixcInBvc2l0aW9uXCI6XCJCdXNpbmVzcyBMZWFkLCBTdHJhdGVneVwiLFwiZW1haWxcIjpcImFrZW1wQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiU3RlcGhhbmllIEdvZGRhcmRcIixcInBvc2l0aW9uXCI6XCJCdXNpbmVzcyBMZWFkLCBTdHJhdGVneVwiLFwiZW1haWxcIjpcInNnb2RkYXJkQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiSmFja2llIEpvcmdlXCIsXCJwb3NpdGlvblwiOlwiTWVkaWEgU3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcImpqb3JnZUBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIlNhcmEgUmVjb3JkXCIsXCJwb3NpdGlvblwiOlwiQmxvZ2dlci9JbmZsdWVuY2VyIFJlbGF0aW9uc1wiLFwiZW1haWxcIjpcInNyZWNvcmRAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJTaGFyb24gU2NvdHRcIixcInBvc2l0aW9uXCI6XCJNZWRpYSBzdHJhdGVnaXN0XCIsXCJlbWFpbFwiOlwic3Njb3R0QGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiQXNobGV5IEdhcmluZ1wiLFwicG9zaXRpb25cIjpcIkFjY291bnQgRGlyZWN0b3JcIixcImVtYWlsXCI6XCJhZ2FyaW5nQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiTmF0YXNoYSBOZWxzb25cIixcInBvc2l0aW9uXCI6XCJBY2NvdW50IERpcmVjdG9yIHwgU0VPXCIsXCJlbWFpbFwiOlwibm5lbHNvbkBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIlNoYW5ub24gU21pdGhcIixcInBvc2l0aW9uXCI6XCJNZWRpYSBzdHJhdGVnaXN0XCIsXCJlbWFpbFwiOlwic3NtaXRoQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiUGFtIFNjaGxpY2h0ZXJcIixcInBvc2l0aW9uXCI6XCJNZWRpYSBSZWxhdGlvbnNcIixcImVtYWlsXCI6XCJQc2NobGljaHRlckBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkRpYW5hIE1hbm5cIixcInBvc2l0aW9uXCI6XCJBY2NvdW50IERpcmVjdG9yXCIsXCJlbWFpbFwiOlwiZG1hbm5AZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJKaWxsIEVkZ2V3b3J0aFwiLFwicG9zaXRpb25cIjpcIkFjY291bnQgRGlyZWN0b3JcIixcImVtYWlsXCI6XCJqZWRnZXdvcnRoQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiS3JpcyBFbGxlbmJlcmdcIixcInBvc2l0aW9uXCI6XCJFbnRlcnRhaW5tZW50IExlYWRcIixcImVtYWlsXCI6XCJrZWxsZW5iZXJnQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiRGlhbmEgTW9lY2tcIixcInBvc2l0aW9uXCI6XCJBbmFseXRpY3MvQWNjb3VudCBTdXBwb3J0XCIsXCJlbWFpbFwiOlwiZG1vZWNrQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiS3ltIENsZXZlbGFuZFwiLFwicG9zaXRpb25cIjpcIkFjY291bnQgQ29vcmRpbmF0b3JcIixcImVtYWlsXCI6XCJrY2xldmVsYW5kQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiSmFtaSBFaWRzdm9sZFwiLFwicG9zaXRpb25cIjpcIlNvY2lhbCBNZWRpYSBCdXNpbmVzcyBMZWFkXCIsXCJlbWFpbFwiOlwiamVpZHN2b2xkQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiVmFuZXNzYSBTaGFuYWhhblwiLFwicG9zaXRpb25cIjpcIkFuYWx5dGljc1wiLFwiZW1haWxcIjpcInZzaGFuYWhhbkBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkFzaGxleSBDbGluZVwiLFwicG9zaXRpb25cIjpcIlNvY2lhbCBNZWRpYSBTdHJhdGVnaXN0XCIsXCJlbWFpbFwiOlwiYWNsaW5lQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiS2VsbGllIEFyZW5zXCIsXCJwb3NpdGlvblwiOlwiU29jaWFsIE1lZGlhIEFjY3QgTWFuYWdlclwiLFwiZW1haWxcIjpcImthcmVuc0Bnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkphbWllIERhZGFudFwiLFwicG9zaXRpb25cIjpcIlNvY2lhbCBDb25zdW1lciBDdXN0b21lciBTZXJ2aWNlXCIsXCJlbWFpbFwiOlwiamRhZGFudEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkJyaWFubmEgSm9uc3NvblwiLFwicG9zaXRpb25cIjpcIlNvY2lhbCBNZWRpYSBDb21tdW5pdHkgTWFuYWdlclwiLFwiZW1haWxcIjpcImJqb25zc29uQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiQ2FtZXJvbiBKb25zc29uXCIsXCJwb3NpdGlvblwiOlwiRGlnaXRhbCBTdHJhdGVnaXN0XCIsXCJlbWFpbFwiOlwiY2pvbnNzb25AZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJMYXVyZW4gQ293bGVzXCIsXCJwb3NpdGlvblwiOlwiRGlnaXRhbC9Tb2NpYWwgU3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcImxjb3dsZXNAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJNZWxpc3NhIEFuZ2VydFwiLFwicG9zaXRpb25cIjpcIlNvY2lhbCBNZWRpYSBTdHJhdGVnaXN0XCIsXCJlbWFpbFwiOlwibWFuZ2VydEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkFsbGlzb24gSGlub2pvc2FcIixcInBvc2l0aW9uXCI6XCJDRk9cIixcImVtYWlsXCI6XCJhaGlub2pvc2FAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJDYWl0bGluIEhhbnNvblwiLFwicG9zaXRpb25cIjpcIkFjY291bnQgTWFuYW5nZXJcIixcImVtYWlsXCI6XCJjaGFuc29uQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiQW5kcmVhIFppdG9cIixcInBvc2l0aW9uXCI6XCJBbmFseXRpY3NcIixcImVtYWlsXCI6XCJheml0b0Bnb2xkcHIuY29tXCJ9XX07IiwiSW5kZXggPVxuXG4gIHZhbHM6IFtdXG4gIHNlY3Rpb246ICdob21lJ1xuICB2aXM6IGZhbHNlXG4gIGNhY2hlOlxuICAgIHdpbmRvdzogd2luZG93XG4gICAgc3RpY2tpZWQ6IGZhbHNlXG4gICAgbGF4aW46IHt9XG5cbiAgaTogLT5cblxuICAgIGlmIGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lIGlzICd3d3cuZ29sZHByLmNvbScgYW5kIGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sIGlzbnQgJ2h0dHBzOidcbiAgICAgIGlmIGRvY3VtZW50LmxvY2F0aW9uLmhhc2ggaXNudCBcIlwiXG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gJ2h0dHBzOi8vd3d3LmdvbGRwci5jb20vJyArIGRvY3VtZW50LmxvY2F0aW9uLmhhc2hcbiAgICAgIGVsc2VcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSAnaHR0cHM6Ly93d3cuZ29sZHByLmNvbS8nXG5cbiAgICBpZiBkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSBpcyAnZ29sZHByLmNvbSdcbiAgICAgIGlmIGRvY3VtZW50LmxvY2F0aW9uLmhhc2ggaXNudCBcIlwiXG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gJ2h0dHBzOi8vd3d3LmdvbGRwci5jb20vJyArIGRvY3VtZW50LmxvY2F0aW9uLmhhc2hcbiAgICAgIGVsc2VcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSAnaHR0cHM6Ly93d3cuZ29sZHByLmNvbS8nXG4gICAgXG5cbiAgICBJbmRleC5jYWNoZS53aW5kb3cgPSAkKHdpbmRvdylcbiAgICBpZiBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgaXNudCB1bmRlZmluZWRcbiAgICAgIEluZGV4LnZpcyA9IGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZVxuICAgICAgc2V0SW50ZXJ2YWwgSW5kZXgudmlzaWJsZSwgMjAwXG5cblxuICAgIGlmIEluZGV4LmNhY2hlLndpbmRvdy53aWR0aCgpID4gMTAwMFxuICAgICAgc2V0SW50ZXJ2YWwgSW5kZXguaGVhZGVyLCA1MFxuXG4gICAgSW5kZXgubGF4Y2FjaGUoKVxuICAgIHNldEludGVydmFsIEluZGV4LmNoZWNrLCAxMDBcbiAgICBzZXRJbnRlcnZhbCBJbmRleC5tZW51LCA1MDBcblxuICAgIEluZGV4LmhhbmRsZXJzKClcbiAgICBjb25zb2xlLmxvZyAnSW5kZXguaSgpJ1xuXG4gICAgaWYgZG9jdW1lbnQubG9jYXRpb24uaGFzaCBpc250ICcnXG4gICAgICAkKCdodG1sLCBib2R5Jykuc2Nyb2xsVG8gXCIje2RvY3VtZW50LmxvY2F0aW9uLmhhc2h9XCIsXG4gICAgICAgIGR1cmF0aW9uOiA1MFxuICAgICAgICBvZmZzZXQ6IC02MFxuXG4gIHZpc2libGU6IC0+XG4gICAgaWYgSW5kZXgudmlzIGlzbnQgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlXG4gICAgICBJbmRleC52aXMgPSBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGVcbiAgICAgIF8ub2ZmICcuYmx1ZUNpcmNsZSdcbiAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgXy5vbiAnLmJsdWVDaXJjbGUnXG4gICAgICAsIDEwXG5cbiAgaGFuZGxlcnM6IC0+XG5cbiAgICAkKCdcbiAgICAgIGhlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gYS5vcHRpb24sIC5tb2JpbGUgPiAuaW5uZXIgPiAubWVudSA+IGEub3B0aW9uLFxuICAgICAgaGVhZGVyID4gLmlubmVyIGEubG9nb1xuICAgICcpLmNsaWNrIEluZGV4Lm9wdGlvblxuICAgICQoJy5idXJnZXInKS5jbGljayBJbmRleC5idXJnZXJcblxuICBidXJnZXI6IC0+XG4gICAgXy5zd2FwICcubW9iaWxlLCAuYnVyZ2VyLCAuYnVyZ2VyID4gLmlubmVyID4gLm1lbnUnXG5cbiAgb3B0aW9uOiAoZXZlbnQpIC0+XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBoYXNoID0gJCh0aGlzKS5kYXRhICdhbmNob3InXG4gICAgXy5vZmYgJ2hlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gLm9wdGlvbiwgLm1vYmlsZSA+IC5pbm5lciA+IC5tZW51ID4gLm9wdGlvbidcbiAgICBfLm9mZiAnLm1vYmlsZSwgLmJ1cmdlcidcbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAkKCdodG1sLCBib2R5Jykuc2Nyb2xsVG8gXCIjI3toYXNofVwiLFxuICAgICAgICBkdXJhdGlvbjogNTBcbiAgICAgICAgb2Zmc2V0OiAtNjBcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSBoYXNoXG4gICAgLCAyMDBcblxuICBoZWFkZXI6IC0+XG5cbiAgICBzdGlja3lTcG90ID0gMzAwXG5cbiAgICBpZiBJbmRleC5jYWNoZS53aW5kb3cuc2Nyb2xsVG9wKCkgPiBzdGlja3lTcG90IGFuZCBJbmRleC5jYWNoZS5zdGlja2llZCBpcyBmYWxzZVxuICAgICAgXy5vbiAnI3N0aWNreSdcbiAgICAgIEluZGV4LmNhY2hlLnN0aWNraWVkID0gdHJ1ZVxuXG4gICAgaWYgSW5kZXguY2FjaGUud2luZG93LnNjcm9sbFRvcCgpIDwgc3RpY2t5U3BvdCBhbmQgSW5kZXguY2FjaGUuc3RpY2tpZWQgaXMgdHJ1ZVxuICAgICAgXy5vZmYgJyNzdGlja3knXG4gICAgICBJbmRleC5jYWNoZS5zdGlja2llZCA9IG9mZlxuXG4gIG1lbnU6IC0+XG5cbiAgICAkKCcuc2VjdGlvbicpLmVhY2ggKGksIGVsKSAtPlxuICAgICAgc2VjdGlvbiA9ICQoZWwpLmRhdGEgJ3NlY3Rpb24nXG4gICAgICBpZiBJbmRleC5pblZpZXdwb3J0IGVsXG4gICAgICAgIF8ub2ZmICdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IC5vcHRpb24sIC5tb2JpbGUgPiAuaW5uZXIgPiAubWVudSA+IC5vcHRpb24nXG4gICAgICAgIF8ub24gXCIub3B0aW9uXyN7c2VjdGlvbn1cIlxuICAgICAgICByZXR1cm4gdHJ1ZVxuXG4gIGxheGNhY2hlOiAtPlxuICAgICQoJy5sYXhpbicpLmVhY2ggKGksIGVsKSAtPlxuICAgICAgSW5kZXguY2FjaGUubGF4aW5baV0gPSBlbFxuXG4gIGNoZWNrOiAtPlxuICAgIGZvciBpLCBlbCBvZiBJbmRleC5jYWNoZS5sYXhpblxuXG4gICAgICBpZiBJbmRleC5pblZpZXdwb3J0IGVsXG4gICAgICAgIFtwZXJjLCBkaWZmXSA9IEluZGV4LnZpZXdhYmxlIGVsXG4gICAgICAgIGplbCA9ICQoZWwpXG5cbiAgICAgICAgdGhyZXNoID0gamVsLmRhdGEgJ3RocmVzaCdcbiAgICAgICAgdGhyZXNoID0gNTAgaWYgdGhyZXNoIGlzIHVuZGVmaW5lZFxuXG4gICAgICAgIGlmIHBlcmMgPiB0aHJlc2ggYW5kIGplbC5oYXNDbGFzcyAnb2ZmJ1xuICAgICAgICAgIF8ub24gamVsXG4gICAgICAgIGlmIHBlcmMgPCB0aHJlc2ggYW5kIGplbC5oYXNDbGFzcyAnb24nXG4gICAgICAgICAgXy5vZmYgamVsXG5cbiAgICAgICAgIyMjXG4gICAgICAgIGlmIEluZGV4LmNhY2hlLndpbmRvdy53aWR0aCgpID4gMTAwMFxuICAgICAgICAgIGlmIGplbC5oYXNDbGFzcyAnbGF4aW5fdmVydCdcbiAgICAgICAgICAgIHZhbCA9IE1hdGgucm91bmQoZGlmZilcbiAgICAgICAgICAgICN2YWwgPSBNYXRoLnJvdW5kKGRpZmYpXG4gICAgICAgICAgICBpZiBJbmRleC52YWxzP1tpXSBpc250IHZhbCozXG4gICAgICAgICAgICAgIGplbC5maW5kKCcuaW5uZXI6Zmlyc3QnKS5jc3MgJ3RyYW5zZm9ybScsIFwidHJhbnNsYXRlM2QoMCwgI3t2YWwqM31weCwgMHB4KVwiXG4gICAgICAgICAgICAgIGplbC5maW5kKCcub3ZlcmxheScpLmNzcyAndHJhbnNmb3JtJywgXCJ0cmFuc2xhdGUzZCgwLCAje3ZhbCoyfXB4LCAwcHgpXCJcbiAgICAgICAgICAgICAgamVsLmZpbmQoJy5vdmVybGF5ID4gLmlubmVyJykuY3NzICd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZTNkKDAsICN7dmFsLzV9cHgsIDBweClcIlxuICAgICAgICAgICAgICBJbmRleC52YWxzW2ldID0gdmFsKjNcbiAgICAgICAgIyMjXG4gICBcbiAgaW5WaWV3cG9ydDogKGVsKSAtPlxuXG4gICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICByZXR1cm4oXG4gICAgICAocmVjdC50b3AgPj0gMCB8fCByZWN0LmJvdHRvbSA+PSAwKSAmJlxuICAgICAgKHJlY3QudG9wIDw9IHdpbmRvdy5pbm5lckhlaWdodCB8fCByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgKVxuXG4gIHZpZXdhYmxlOiAoZWwpIC0+XG4gICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgaGVpZ2h0ID0gcmVjdC5ib3R0b20tcmVjdC50b3BcblxuICAgIGVsTWlkZGxlID0gcmVjdC50b3AgKyBoZWlnaHQvMlxuICAgIHdpbk1pZGRsZSA9IHdpbmRvdy5pbm5lckhlaWdodC8yXG4gICAgbWF4ID0gd2luZG93LmlubmVySGVpZ2h0LzIgKyBoZWlnaHQvMlxuICAgIGRpZmYgPSB3aW5NaWRkbGUtZWxNaWRkbGVcbiAgICBwZXJjID0gMTAwIC0gTWF0aC5hYnMoZGlmZikqMTAwL21heFxuICAgIG5vbmFicyA9IE1hdGguYWJzKGRpZmYpKjEwMC9tYXhcbiAgICBub25hYnMgPSAtbm9uYWJzIGlmIGRpZmYgPCAwXG5cbiAgICByZXR1cm4gW3BlcmMsIG5vbmFic11cblxuIl19
