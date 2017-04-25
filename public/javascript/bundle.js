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
              $('head').append($("<meta property='og:url' content='" + url + "' />")).append($("<meta property='og:title' content='" + title + "' />")).append($("<meta property='og:description' content='" + description + "' />")).append($("<meta property='og:image' content='" + image + "' />"));
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJhcnRpY2xlLmNvZmZlZSIsImJhc2FsLmNvZmZlZSIsImJsb2cuY29mZmVlIiwiY29uZmlnLmNvZmZlZSIsImluZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOztBQUFBLENBQUEsR0FFRTtFQUFBLENBQUEsRUFBRyxTQUFBO1dBQ0QsSUFBQyxDQUFBLE9BQUQsR0FBVyxXQUFBLENBQVksSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsSUFBYixDQUFaLEVBQTZCLEdBQTdCO0VBRFYsQ0FBSDtFQUdBLENBQUEsRUFDRTtJQUFBLE1BQUEsRUFBUSxLQUFSO0lBQ0EsT0FBQSxFQUFTLENBRFQ7R0FKRjtFQU9BLElBQUEsRUFBTSxTQUFDLEVBQUQsRUFBSyxNQUFMLEVBQW1CLEdBQW5COztNQUFLLFNBQU87OztNQUFPLE1BQUk7O0lBRTNCLElBQUcsQ0FBQSxDQUFBLEVBQUEsWUFBa0IsTUFBbEIsQ0FBSDtNQUNFLEVBQUEsR0FBSyxDQUFBLENBQUUsRUFBRixFQURQOztJQUdBLElBQUcsTUFBQSxLQUFZLEtBQWY7TUFDRSxFQUFFLENBQUMsV0FBSCxDQUFlLE1BQWYsRUFERjs7SUFHQSxJQUFHLEdBQUEsS0FBUyxLQUFaO01BQ0UsRUFBRSxDQUFDLFFBQUgsQ0FBWSxHQUFaLEVBREY7O0FBR0EsV0FBTztFQVhILENBUE47RUFvQkEsR0FBQSxFQUFLLFNBQUMsRUFBRCxFQUFLLENBQUw7O01BQUssSUFBRTs7SUFFVixJQUFHLENBQUMsQ0FBQyxNQUFGLElBQWEsQ0FBQyxDQUFDLE9BQUYsR0FBWSxDQUE1QjtNQUVFLElBQUMsQ0FBQSxJQUFELENBQU0sRUFBTixFQUFVLEtBQVYsRUFBaUIsUUFBakI7TUFDQSxVQUFBLENBQVcsU0FBQTtRQUNULElBQUMsQ0FBQSxJQUFELENBQU0sRUFBTixFQUFVLFFBQVYsRUFBb0IsS0FBcEI7ZUFDQSxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxJQUFW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SCxDQUFBO0lBQ1AsTUFBQSxHQUFTLElBQUksQ0FBQyxNQUFMLEdBQVksSUFBSSxDQUFDO0lBRTFCLFFBQUEsR0FBVyxJQUFJLENBQUMsR0FBTCxHQUFXLE1BQUEsR0FBTztJQUM3QixTQUFBLEdBQVksTUFBTSxDQUFDLFdBQVAsR0FBbUI7SUFDL0IsR0FBQSxHQUFNLE1BQU0sQ0FBQyxXQUFQLEdBQW1CLENBQW5CLEdBQXVCLE1BQUEsR0FBTztJQUNwQyxJQUFBLEdBQU8sU0FBQSxHQUFVO0lBQ2pCLElBQUEsR0FBTyxHQUFBLEdBQU0sSUFBSSxDQUFDLEdBQUwsQ0FBUyxJQUFULENBQUEsR0FBZSxHQUFmLEdBQW1CO0lBQ2hDLE1BQUEsR0FBUyxJQUFJLENBQUMsR0FBTCxDQUFTLElBQVQsQ0FBQSxHQUFlLEdBQWYsR0FBbUI7SUFDNUIsSUFBb0IsSUFBQSxHQUFPLENBQTNCO01BQUEsTUFBQSxHQUFTLENBQUMsT0FBVjs7QUFFQSxXQUFPLENBQUMsSUFBRCxFQUFPLE1BQVA7RUFaQyxDQTFJViIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJfID1cblxuICBpOiAtPlxuICAgIEBjb25zb2xlID0gc2V0SW50ZXJ2YWwoQGRldGVjdC5iaW5kKEApLCAyMDApXG5cbiAgcDpcbiAgICBvZmZpbmc6IGZhbHNlXG4gICAgb2ZmdGltZTogMFxuXG4gIHR1cm46IChlbCwgcmVtb3ZlPWZhbHNlLCBhZGQ9ZmFsc2UpIC0+XG5cbiAgICBpZiBlbCBub3QgaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgIGVsID0gJChlbClcblxuICAgIGlmIHJlbW92ZSBpc250IGZhbHNlXG4gICAgICBlbC5yZW1vdmVDbGFzcyhyZW1vdmUpXG5cbiAgICBpZiBhZGQgaXNudCBmYWxzZVxuICAgICAgZWwuYWRkQ2xhc3MoYWRkKVxuXG4gICAgcmV0dXJuIHRydWVcblxuICBvZmY6IChlbCwgcD17fSkgLT5cblxuICAgIGlmIHAub2ZmaW5nIGFuZCBwLm9mZnRpbWUgPiAwXG5cbiAgICAgIEB0dXJuIGVsLCBmYWxzZSwgJ29mZmluZydcbiAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgQHR1cm4gZWwsICdvZmZpbmcnLCBmYWxzZVxuICAgICAgICBAdHVybiBlbCwgJ29uJywgJ29mZidcbiAgICAgICwgcC5vZmZ0aW1lKjEwMDAgKyAxMDBcblxuICAgIGVsc2VcbiAgICAgIEB0dXJuIGVsLCAnb24nLCAnb2ZmJ1xuXG4gICAgcmV0dXJuXG5cbiAgb246IChlbCwgcCkgLT5cbiAgICBAdHVybiBlbCwgJ29mZicsICdvbidcblxuICBzd2FwOiAoZWwsIHApIC0+XG5cbiAgICBpZiBlbCBub3QgaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgIGVsID0gJChlbClcblxuICAgIGlmIGVsLmhhc0NsYXNzICdvZmYnXG4gICAgICBAb24gZWwsIHBcbiAgICBlbHNlXG4gICAgICBAb2ZmIGVsLCBwXG5cbiAgICByZXR1cm5cblxuICBlbmNvZGU6IChzdHIpIC0+XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpXG4gICAgICAucmVwbGFjZSgvIS9nLCAnJTIxJylcbiAgICAgIC5yZXBsYWNlKC8nL2csICclMjcnKVxuICAgICAgLnJlcGxhY2UoL1xcKC9nLCAnJTI4JylcbiAgICAgIC5yZXBsYWNlKC9cXCkvZywgJyUyOScpXG4gICAgICAucmVwbGFjZSgvXFwqL2csICclMkEnKVxuICAgICAgLnJlcGxhY2UoLyUyMC9nLCAnKycpXG5cbiAgdDogKGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZSkgLT5cbiAgICBfZ2FxLnB1c2ggWydfdHJhY2tFdmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZV1cblxuICByYW5kOiAobWluLCBtYXgpIC0+XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCkgKyBtaW5cblxuICBsb2FkOiAoc2NyaXB0LCBpbml0aWF0ZSwgY29tcGxldGUpIC0+XG5cbiAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgJ3NjcmlwdCdcbiAgICBlbC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCdcbiAgICBlbC5zcmMgPSBzY3JpcHRcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyICdsb2FkJyAsIChlKSAtPlxuICAgICAgY29tcGxldGUoKSBpZiB0eXBlb2YgY29tcGxldGUgaXMgJ2Z1bmN0aW9uJ1xuICAgICAgd2luZG93W2luaXRpYXRlXS5pKCkgaWYgaW5pdGlhdGUgaXNudCB1bmRlZmluZWQgYW5kIGluaXRpYXRlIGlzbnQgZmFsc2VcbiAgICAsIGZhbHNlXG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKVxuXG4gIGxsYzogLT5cbiAgICBhc2NpaSA9IFwiXCJcIlxuXG4gICAgICAlY21tbS8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uL21tbVxuICAgICAgbW1vLi4uLi4uLi4uLi4uLi4uLi06Oi8vOjotLi4uLi4uLi06Ojo6Ojo6Ojo6Ojo6LS4uLi4uLi4uLTo6Ly8vOi0ub21tXG4gICAgICBtZC0uLi4uLi4uLi4uLi4uOit5aGRkZGRkZGh5Ky0uLi4uL2RkZGRkZGRkZGRkZGQrLi4uLi4uL3NoZGRkZGRkZHlvZG1cbiAgICAgIG1vLi4uLi4uLi4uLi4uLi1obW1taHl5eXlkbW1taDouLi4vbW1tbWhoaGhoaGhoaCsuLi4uOnlkbW1kaHl5eWhkZG9vbVxuICAgICAgbS0uLi4uLi4uLi4uLi4uLi1zczotLi4uLi15bW1teS4uLi9tbW1tLS0tLS0tLS0tLi4uLjpkbW1tczotLi4uLTovLi1tXG4gICAgICBkLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLnltbW15Li4uL21tbW0tLytvb28rOi0uLi4ueW1tbXktOitvb28rLy0uLmRcbiAgICAgIGguLi4uLi4uLi4uLi4uLi4uLi4uLi4uLjpzbW1tZDouLi4vbW1tbWhtbW1tbW1kaCsuLi5kbW1tc2hkbW1tbW1taHMtaFxuICAgICAgaC4uLi4uLi4uLi4uLi4uLi4uLi4uLjpzZG1tZHk6Li4uLjpoaGRobysvLyt5bW1tbSsuLmRtbW1keW8vLytzZG1tbWhoXG4gICAgICBkLi4uLi4uLi4uLi4uLi4uLi4uLSt5ZG1tZHkvLi4uLi4uLi0tOi4uLi4uLi5zbW1taC4ueW1tbXMuLi4uLi46bW1tbW1cbiAgICAgIG0tLi4uLi4uLi4uLi4uLi4tOnNobW1tZHMvLS0tLS0uLi4uOnMvLS0uLi4tOmhtbW1zLi46ZG1tZC8tLi4uLW9tbW1tbVxuICAgICAgbW8uLi4uLi4uLi4uLi4uLmhtbW1tbW1oaGhoaGhoaC4uLitkbW1kaHl5eWhkbW1teS0uLi4vaG1tbWh5eXlobW1tZGhtXG4gICAgICBtZC0uLi4uLi4uLi4uLi4uZGRkZGRkZGRkZGRkZGRkLi4uLStzaGRkZGRkZGRoeS8tLi4uLi4tb3lkZGRkZGRkaG86ZG1cbiAgICAgIG1tby4uLi4uLi4uLi4uLi46Ojo6Ojo6Ojo6Ojo6OjouLi4uLi4uLTovLy86Oi0uLi4uLi4uLi4uLi06Ly8vOi0uLm9tbVxuICAgICAgbW1tLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4vbW1tXG5cbiAgICAgIDo6IHN5bnRhY3RpYyBzdWdhciBieSAyNTZcbiAgICAgIDo6IGh0dHA6Ly8yNTYuaW8vXG4gICAgICA6OiAje2NvbmZpZy5tZXRhLnJlcG99XG4gICAgXCJcIlwiXG4gICAgY29uc29sZS5sb2cgYXNjaWksIFwiY29sb3I6IGdyZXk7IGZvbnQtZmFtaWx5OiBNZW5sbywgbW9ub3NwYWNlO1wiXG5cbiAgZGV0ZWN0OiAtPlxuICAgIGlmICgoKHdpbmRvdy5vdXRlckhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCkgPiAxMDApIHx8ICgod2luZG93Lm91dGVyV2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aCkgPiAxMDApKVxuICAgICAgQGxsYygpXG4gICAgICBjbGVhckludGVydmFsIEBjb25zb2xlXG5cbl8uaSgpXG4iLCJBcnRpY2xlID0gXG5cbiAgbmFtZTogZmFsc2VcblxuICBpOiAtPlxuXG4gICAgQG5hbWUgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpXG5cbiAgICAkKCcuYmFzYWwtZW50cnknKS5hdHRyKCdiYXNhbC1uYW1lJywgQG5hbWUpXG4gICAgJCgnLmJhc2FsLWVudHJ5JykuYXR0cignYmFzYWwtc3RydWN0dXJlJywgJ2Jsb2cnKVxuXG4gICAgQmFzYWwuaSBjb25maWcuYmFzYWwuY2xpZW50LCAtPlxuICAgICAgJCgndGltZScpLmVhY2ggKGksIGVsKSA9PlxuICAgICAgICBqZWwgPSAkIGVsXG4gICAgICAgIGplbC5odG1sIG1vbWVudChqZWwuYXR0cigndGl0bGUnKSkuZm9ybWF0KCdNTU1NIERvIFlZWVknKVxuICAgICAgICBqZWwuYXR0ciAnYXJpYS1sYWJlbCcsIG1vbWVudChqZWwuYXR0cigndGl0bGUnKSkuY2FsZW5kYXIoKVxuXG4gICAgICAgIGZvciBlbnRyeSBpbiBCYXNhbC5zdHJ1Y3R1cmVzLmJsb2cuZW50cmllc1xuICAgICAgICAgIGlmIGVudHJ5Lm5hbWUgaXMgQXJ0aWNsZS5uYW1lXG4gICAgICAgICAgICB0aXRsZSA9IGVudHJ5LmVudGl0aWVzLnRpdGxlLnZhbHVlXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA9IGVudHJ5LmVudGl0aWVzLmRlc2NyaXB0aW9uLnZhbHVlXG4gICAgICAgICAgICBpbWFnZSA9IGVudHJ5LmVudGl0aWVzLmltYWdlLnZhbHVlXG5cbiAgICAgICAgICAgIHVybCA9ICdodHRwczovL3d3dy5nb2xkcHIuY29tL2FydGljbGUvIycgKyBBcnRpY2xlLm5hbWVcblxuICAgICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSB0aXRsZVxuXG4gICAgICAgICAgICAkKCdtZXRhW25hbWU9ZGVzY3JpcHRpb25dJykuYXR0ciAnY29udGVudCcsIGRlc2NyaXB0aW9uXG5cbiAgICAgICAgICAgICQoJ2hlYWQnKVxuICAgICAgICAgICAgICAuYXBwZW5kKCQoXCI8bWV0YSBwcm9wZXJ0eT0nb2c6dXJsJyBjb250ZW50PScje3VybH0nIC8+XCIpKVxuICAgICAgICAgICAgICAuYXBwZW5kKCQoXCI8bWV0YSBwcm9wZXJ0eT0nb2c6dGl0bGUnIGNvbnRlbnQ9JyN7dGl0bGV9JyAvPlwiKSlcbiAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPG1ldGEgcHJvcGVydHk9J29nOmRlc2NyaXB0aW9uJyBjb250ZW50PScje2Rlc2NyaXB0aW9ufScgLz5cIikpXG4gICAgICAgICAgICAgIC5hcHBlbmQoJChcIjxtZXRhIHByb3BlcnR5PSdvZzppbWFnZScgY29udGVudD0nI3tpbWFnZX0nIC8+XCIpKTtcblxuICAgICAgICAgICAgJCgnaGVhZCcpXG4gICAgICAgICAgICAgIC5hcHBlbmQoJChcIjxtZXRhIG5hbWU9J3R3aXR0ZXI6dGl0bGUnIGNvbnRlbnQ9JyN7dGl0bGV9JyAvPlwiKSlcbiAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPG1ldGEgbmFtZT0ndHdpdHRlcjpkZXNjcmlwdGlvbicgY29udGVudD0nI3tkZXNjcmlwdGlvbn0nIC8+XCIpKVxuICAgICAgICAgICAgICAuYXBwZW5kKCQoXCI8bWV0YSBuYW1lPSd0d2l0dGVyOmltYWdlJyBjb250ZW50PScje2ltYWdlfScgLz5cIikpO1xuXG4gICAgICAgICAgICAjIyNcbiAgICAgICAgICAgICQoJ21ldGFbcHJvcGVydHk9XCJvZzp1cmxcIl0nKS5hdHRyICdjb250ZW50JywgJ2h0dHBzOi8vd3d3LmdvbGRwci5jb20vYXJ0aWNsZS8jJyArIEFydGljbGUubmFtZVxuICAgICAgICAgICAgJCgnbWV0YVtwcm9wZXJ0eT1cIm9nOnRpdGxlXCJdJykuYXR0ciAnY29udGVudCcsIHRpdGxlXG4gICAgICAgICAgICAkKCdtZXRhW3Byb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIl0nKS5hdHRyICdjb250ZW50JywgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICQoJ21ldGFbcHJvcGVydHk9XCJvZzppbWFnZVwiXScpLmF0dHIgJ2NvbnRlbnQnLCBpbWFnZVxuXG4gICAgICAgICAgICAkKCdtZXRhW25hbWU9XCJ0d2l0dGVyOnRpdGxlXCJdJykuYXR0ciAnY29udGVudCcsIHRpdGxlXG4gICAgICAgICAgICAkKCdtZXRhW25hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCJdJykuYXR0ciAnY29udGVudCcsIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAkKCdtZXRhW25hbWU9XCJ0d2l0dGVyOmltYWdlXCJdJykuYXR0ciAnY29udGVudCcsIGltYWdlXG4gICAgICAgICAgICAjIyNcbiIsIkJhc2FsID1cblxuICBkb21haW46ICcvL2Jhc2FsLnRlY2gvYXBpJ1xuICBjbGllbnQ6IGZhbHNlXG5cbiAgZGF0YTogZmFsc2VcbiAgc3RydWN0dXJlczogZmFsc2VcblxuICBjb21wbGV0ZTogZmFsc2VcblxuICBpOiAoY2xpZW50LCBjb21wbGV0ZSkgLT5cblxuICAgIEBjb21wbGV0ZSA9IGNvbXBsZXRlXG5cbiAgICBAY2xpZW50ID0gY2xpZW50XG5cbiAgICBAZ2V0U3RydWN0dXJlcyA9PlxuICAgICAgQGxvb3AoKVxuICAgICAgQGVudHJ5KClcblxuICB0eXBlOiAoZWwsIHR5cGUsIG5hbWUsIGVudHJ5KSAtPlxuICAgIHN3aXRjaCB0eXBlXG4gICAgICB3aGVuICdjc3MtYmFja2dyb3VuZCdcbiAgICAgICAgZWwuY3NzICdiYWNrZ3JvdW5kLWltYWdlJywgXCJ1cmwoI3tlbnRyeS5lbnRpdGllc1tuYW1lXS52YWx1ZX0pXCJcbiAgICAgIHdoZW4gJ2RhdGUnXG4gICAgICAgIGVsLmh0bWwgbW9tZW50KGVudHJ5LmVudGl0aWVzW25hbWVdLnZhbHVlLCAnTU0vREQvWVlZWScpLmZvcm1hdCBlbC5hdHRyKCdiYXNhbC1kYXRlZm9ybWF0JylcbiAgICAgIHdoZW4gJ2ltYWdlJ1xuICAgICAgICBlbC5hdHRyICdzcmMnLCBlbnRyeS5lbnRpdGllc1tuYW1lXS52YWx1ZVxuICAgICAgd2hlbiAndGV4dCdcbiAgICAgICAgZWwuaHRtbCBlbnRyeS5lbnRpdGllc1tuYW1lXS52YWx1ZVxuICAgICAgd2hlbiAnaHJlZidcbiAgICAgICAgZWwuYXR0ciAnaHJlZicsIGVudHJ5LmVudGl0aWVzW25hbWVdLnZhbHVlXG5cbiAgZW50cnk6IC0+XG4gICAgJCgnLmJhc2FsLWVudHJ5JykuZWFjaCAoaSwgZWwpIC0+XG5cbiAgICAgIGVsID0gJChlbClcbiAgICAgIHN0cnVjdHVyZSA9IGVsLmF0dHIgJ2Jhc2FsLXN0cnVjdHVyZSdcbiAgICAgIG5hbWUgPSBlbC5hdHRyICdiYXNhbC1uYW1lJ1xuICAgICAgZW50aXR5TmFtZSA9IGVsLmF0dHIgJ2Jhc2FsLWVudGl0eSdcbiAgICAgIGF0dHIgPSBlbC5hdHRyICdiYXNhbC1hdHRyJ1xuICAgICAgdHlwZSA9IGVsLmF0dHIgJ2Jhc2FsLXR5cGUnXG5cbiAgICAgIEJhc2FsLmVycm9yKFwiU3RydWN0dXJlIG5vdCBmb3VuZCBcXFwiI3tzdHJ1Y3R1cmV9XFxcIlwiKSBpZiAhQmFzYWwuc3RydWN0dXJlc1tzdHJ1Y3R1cmVdP1xuXG4gICAgICBmb3Iga2V5LCBlbnRyeSBvZiBCYXNhbC5zdHJ1Y3R1cmVzW3N0cnVjdHVyZV0uZW50cmllc1xuICAgICAgICBjb250aW51ZSBpZiBlbnRyeS5hY3RpdmUgaXNudCB0cnVlXG4gICAgICAgIGlmIG5hbWUgaXMgZW50cnkubmFtZVxuICAgICAgICAgIGVsLmF0dHIgJ3RpdGxlJywgZW50cnkuY3JlYXRlZF9hdCBpZiBlbC5hdHRyKCdiYXNhbC1kYXRlJykgaXMgJ2NyZWF0ZWQnXG4gICAgICAgICAgZm9yIGJrZXksIGVudGl0eSBvZiBlbnRyeS5lbnRpdGllc1xuICAgICAgICAgICAgaWYgZW50aXR5Lm5hbWUgaXMgZW50aXR5TmFtZVxuICAgICAgICAgICAgICBpZiB0eXBlXG4gICAgICAgICAgICAgICAgQmFzYWwudHlwZSBlbCwgdHlwZSwgZW50aXR5Lm5hbWUsIGVudHJ5XG4gICAgICAgICAgICAgIGVsc2UgaWYgYXR0clxuICAgICAgICAgICAgICAgIGVsLmF0dHIgYXR0ciwgZW50aXR5LnZhbHVlXG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBlbC5odG1sIGVudGl0eS52YWx1ZVxuXG4gIGxvb3A6IC0+XG5cbiAgICAkKCcuYmFzYWwtbG9vcCcpLmVhY2goIChpLCBlbCkgLT5cblxuICAgICAgZWwgPSAkKGVsKVxuICAgICAgc3RydWN0dXJlID0gZWwuYXR0cihcImJhc2FsLXN0cnVjdHVyZVwiKVxuXG4gICAgICBCYXNhbC5lcnJvcihcIlN0cnVjdHVyZSBub3QgZm91bmQgXFxcIiN7c3RydWN0dXJlfVxcXCJcIikgaWYgIUJhc2FsLnN0cnVjdHVyZXNbc3RydWN0dXJlXT9cblxuICAgICAgdGVtcGxhdGUgPSBlbC5jaGlsZHJlbigpLnJlbW92ZSgpXG5cbiAgICAgIGZvciBvd24gbmFtZSwgZW50cnkgb2YgQmFzYWwuc3RydWN0dXJlc1tzdHJ1Y3R1cmVdLmVudHJpZXNcbiAgICAgICAgY29udGludWUgaWYgZW50cnkuYWN0aXZlIGlzbnQgdHJ1ZVxuICAgICAgICB0cGwgPSB0ZW1wbGF0ZS5jbG9uZSgpXG4gICAgICAgIHRwbC5hdHRyKCdocmVmJywgdHBsLmF0dHIoJ2Jhc2FsLWxpbmsnKSArIGVudHJ5Lm5hbWUpIGlmIHRwbC5oYXNDbGFzcyAnYmFzYWwtbGluaydcbiAgICAgICAgdHBsLmZpbmQoJyonKS5lYWNoIChjaSwgY2VsKSAtPlxuICAgICAgICAgIGpjZWwgPSAkKGNlbClcbiAgICAgICAgICBuYW1lID0gamNlbC5hdHRyKCdiYXNhbC1uYW1lJylcbiAgICAgICAgICB0eXBlID0gamNlbC5hdHRyKCdiYXNhbC10eXBlJylcbiAgICAgICAgICBuYW1lcyA9IGpjZWwuYXR0cignYmFzYWwtbmFtZXMnKT8uc3BsaXQgJywnXG4gICAgICAgICAgdHlwZXMgPSBqY2VsLmF0dHIoJ2Jhc2FsLXR5cGVzJyk/LnNwbGl0ICcsJ1xuXG4gICAgICAgICAgcmV0dXJuIHRydWUgaWYgbmFtZSBpcyB1bmRlZmluZWQgYW5kIG5hbWVzIGlzIHVuZGVmaW5lZFxuXG4gICAgICAgICAgaWYgbmFtZXMgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgICBuYW1lcyA9IFtuYW1lXVxuICAgICAgICAgICAgdHlwZXMgPSBbdHlwZV1cblxuICAgICAgICAgIGZvciBuYW1lLCBpIGluIG5hbWVzXG4gICAgICAgICAgICB0eXBlID0gdHlwZXNbaV1cblxuICAgICAgICAgICAgaWYgdHlwZSBpc250IHVuZGVmaW5lZFxuICAgICAgICAgICAgICBzd2l0Y2ggdHlwZVxuICAgICAgICAgICAgICAgIHdoZW4gJ2Nzcy1iYWNrZ3JvdW5kJ1xuICAgICAgICAgICAgICAgICAgamNlbC5jc3MgJ2JhY2tncm91bmQtaW1hZ2UnLCBcInVybCgje2VudHJ5LmVudGl0aWVzW25hbWVdLnZhbHVlfSlcIlxuICAgICAgICAgICAgICAgIHdoZW4gJ2RhdGUnXG4gICAgICAgICAgICAgICAgICBqY2VsLmh0bWwgbW9tZW50KGVudHJ5LmVudGl0aWVzW25hbWVdLnZhbHVlLCAnTU0vREQvWVlZWScpLmZvcm1hdCBqY2VsLmF0dHIoJ2Jhc2FsLWRhdGVmb3JtYXQnKVxuICAgICAgICAgICAgICAgIHdoZW4gJ2ltYWdlJ1xuICAgICAgICAgICAgICAgICAgamNlbC5hdHRyICdzcmMnLCBlbnRyeS5lbnRpdGllc1tuYW1lXS52YWx1ZVxuICAgICAgICAgICAgICAgIHdoZW4gJ3RleHQnXG4gICAgICAgICAgICAgICAgICBqY2VsLmh0bWwgZW50cnkuZW50aXRpZXNbbmFtZV0udmFsdWVcbiAgICAgICAgICAgICAgICB3aGVuICdocmVmJ1xuICAgICAgICAgICAgICAgICAgamNlbC5hdHRyICdocmVmJywgZW50cnkuZW50aXRpZXNbbmFtZV0udmFsdWVcblxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBpZiBuYW1lIGlzICdzdHJ1Y3R1cmUtbmFtZSdcbiAgICAgICAgICAgICAgICBqY2VsLmh0bWwgZW50cnkubmFtZVxuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgamNlbC5odG1sIGVudHJ5LmVudGl0aWVzW25hbWVdLnZhbHVlXG4gICAgICAgIGVsLmFwcGVuZCB0cGxcblxuICAgICAgKS5wcm9taXNlKCkuZG9uZSAtPlxuICAgICAgICBCYXNhbC5jb21wbGV0ZT8oKVxuXG4gIGdldFN0cnVjdHVyZXM6IChjb21wbGV0ZSkgLT5cbiAgICBAanNvbnAgXCJzdHJ1Y3R1cmVzXCIsIGNsaWVudDogQGNsaWVudCwgKHJlc3VsdCkgPT5cbiAgICAgIEBzdHJ1Y3R1cmVzID0ge31cbiAgICAgIGZvciBpLHN0cnVjdHVyZSBvZiByZXN1bHQuZGF0YVxuICAgICAgICBAc3RydWN0dXJlc1tzdHJ1Y3R1cmUubmFtZV0gPSBzdHJ1Y3R1cmVcbiAgICAgIGNvbXBsZXRlPygpXG5cbiAganNvbnA6IChlbmRwb2ludCwgcGFyYW1zLCBjb21wbGV0ZSkgLT5cblxuICAgIHBhcmFtcy5jYWxsYmFjayA9ICdCYXNhbC5jYWxsYmFjaydcblxuICAgIHNjcmlwdCA9IFwiI3tkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbH0je0Bkb21haW59LyN7ZW5kcG9pbnR9P1wiICsgJC5wYXJhbSBwYXJhbXNcblxuICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAnc2NyaXB0J1xuICAgIGVsLnNyYyA9IHNjcmlwdFxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIgJ2xvYWQnICwgKGUpIC0+XG4gICAgICBjb21wbGV0ZT8oQmFzYWwuZGF0YSlcbiAgICAgIEJhc2FsLmRhdGEgPSBmYWxzZVxuICAgICwgZmFsc2VcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoZWwpXG5cbiAgY2FsbGJhY2s6IChkYXRhKSAtPlxuICAgIEJhc2FsLmRhdGEgPSBkYXRhXG5cbiAgZXJyb3I6IChtZXNzYWdlKSAtPlxuICAgIHRocm93IG5ldyBFcnJvciBcImJhc2FsOiAje21lc3NhZ2V9XCJcbiIsIkJsb2cgPSBcblxuICBpOiAtPlxuXG4gICAgQmFzYWwuaSBjb25maWcuYmFzYWwuY2xpZW50XG5cblxuIiwiY29uZmlnID0ge1wiYmFzYWxcIjp7XCJjbGllbnRcIjpcIjU4YWRkNDQ1NWFhNTliMTJiNzI5ZTEzMVwifSxcImNsaWVudHNcIjpbXCJpbnZpc2FsaWduXCIsXCJnYWxkZXJtYVwiLFwiYmlvcGhhcm14XCIsXCJuYXRlcmFcIixcImNvb2xzY3VscHRpbmdcIixcImFsbWFcIixcImVuZG9sb2dpeFwiLFwicmVzdHlsYW5lXCIsXCJkeXNwb3J0XCIsXCJzY3VscHRyYVwiLFwic2VyYVwiLFwiY2FyZVwiLFwid2hvbGVmb29kc1wiLFwiaGFnZ2Vuc1wiLFwiYWJib3RcIixcImZpbmVzc1wiLFwiZ2VuZXJhbG1pbGxzXCIsXCJraWFcIixcImxpZmVsb2NrXCIsXCJtYXR0ZWxcIixcIm1hemRhXCIsXCJtaXRzdWJpc2hpXCIsXCJuaWtlXCIsXCJuZXN0bGVcIixcIm5ld2JhbGFuY2VcIixcInJlZGJ1bGxcIixcInRtb2JpbGVcIixcInhib3hcIixcIm9iaVwiLFwic2VtYVwiLFwibWl4aW1cIixcImhhbnNlbnNcIixcInR5bGVub2xcIixcImRyeWJhclwiLFwiaXRlcmlzXCIsXCJuZW9keW5lXCJdLFwiY29sb3JcIjp7XCJibGFjazFcIjpcIiMwMDAwMDBcIixcIndoaXRlMVwiOlwiI0ZGRkZGRlwiLFwid2hpdGUyXCI6XCIjRjdFRUVBXCIsXCJyZWQxXCI6XCIjRUU2OTdBXCIsXCJibHVlMVwiOlwiI0QxRTBFQlwiLFwiZ29sZDFcIjpcIiNCMDk3NkRcIn0sXCJmb250XCI6e1wiY29weTFcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjE2cHhcIn0sXCJjb3B5MlwiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gbWVkaXVtXCIsXCJmb250LXNpemVcIjpcIjE2cHhcIn0sXCJjb3B5M1wiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gbGlnaHRcIixcImZvbnQtc2l6ZVwiOlwiMTRweFwifSxcImNvcHk0XCI6e1wiZm9udC1mYW1pbHlcIjpcImdvdGhhbSBib2xkXCIsXCJmb250LXNpemVcIjpcIjIwcHhcIn0sXCJjb3B5NVwiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gbGlnaHRcIixcImZvbnQtc2l6ZVwiOlwiMTJweFwifSxcImNvcHk2XCI6e1wiZm9udC1mYW1pbHlcIjpcImdvdGhhbSBtZWRpdW1cIixcImZvbnQtc2l6ZVwiOlwiMTRweFwifSxcImNvcHk3XCI6e1wiZm9udC1mYW1pbHlcIjpcImdvdGhhbSBib2xkXCIsXCJmb250LXNpemVcIjpcIjEycHhcIn0sXCJoMVwiOntcImZvbnQtZmFtaWx5XCI6XCJuZXV0cmF0ZXh0IGJvbGRcIixcImZvbnQtc2l6ZVwiOlwiNDBweFwifSxcImgyXCI6e1wiZm9udC1mYW1pbHlcIjpcIm5ldXRyYXRleHQgZGVtaVwiLFwiZm9udC1zaXplXCI6XCIyMHB4XCJ9LFwiaDNcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjMwcHhcIn0sXCJoNFwiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gYm9sZFwiLFwiZm9udC1zaXplXCI6XCIzMHB4XCJ9LFwiaDVcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIGxpZ2h0XCIsXCJmb250LXNpemVcIjpcIjIwcHhcIn0sXCJoNlwiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gYm9va1wiLFwiZm9udC1zaXplXCI6XCIzMDBweFwifX0sXCJtZW51XCI6W1wic3RhbmRvdXRcIixcImFwcHJvYWNoXCIsXCJ3b3JrXCIsXCJzZXJ2aWNlc1wiLFwidGVhbVwiLFwiY2xpZW50c1wiLFwiY29udGFjdFwiXSxcIm1ldGFcIjp7XCJ0aXRsZVwiOlwiR29sZCBQUiA6IFRvcCBQdWJsaWMgUmVsYXRpb25zIEZpcm0gKyBEaWdpdGFsIEFnZW5jeVwiLFwidXJsXCI6XCJodHRwczovL3d3dy5nb2xkcHIuY29tL1wiLFwicmVwb1wiOlwiaHR0cDovL3d3dy5naXRodWIuY29tL2FjaWRqYXp6L2dvbGRwclwiLFwiZGVzY3JpcHRpb25cIjpcIkF3YXJkIHdpbm5pbmcgcHVibGljIHJlbGF0aW9ucyBhbmQgZGlnaXRhbCBhZ2VuY3kuIEdPTEQgUFIgaXMgYSBDYWxpZm9ybmlhIGJhc2VkIFBSIGZpcm0gdHJ1c3RlZCBieSBzb21lIG9mIHRoZSBsYXJnZXN0IGJyYW5kcyBhY3Jvc3MgdGhlIGdsb2JlLlwiLFwia2V5d29yZHNcIjpcIndvbWVucyBiZWF1dHkgcHIsIHdvbWVucyBoZWFsdGggcHIsIHNvY2lhbCBtZWRpYVwiLFwiaW1hZ2VcIjpcImltZy9zaGFyZS5qcGdcIn0sXCJzb2NpYWxcIjp7XCJmYWNlYm9va1wiOlwiaHR0cDovL3d3dy5mYWNlYm9vay5jb20vZ29sZHByXCIsXCJ0d2l0dGVyXCI6XCJodHRwOi8vd3d3LnR3aXR0ZXIuY29tL2dvbGRwcl9cIixcImluc3RhZ3JhbVwiOlwiaHR0cDovL3d3dy5pbnN0YWdyYW0uY29tL2dvbGRwclwiLFwibWFpbFwiOlwiaGVsbG9AZ29sZHByLmNvbVwiLFwibWFwXCI6XCJodHRwczovL2dvby5nbC9tYXBzL1NUTmZhNnpzMzRzXCIsXCJwaG9uZVwiOjk0OTc0MzM5MTF9LFwic3R1ZGllc1wiOntcIjFcIjp7XCJuYW1lXCI6XCJDYXNlIFN0dWR5IDFcIixcInR5cGVcIjpcIkhlYWx0aCBhbmQgQmVhdXR5XCIsXCJsaW5rXCI6XCJDYXNlU3R1ZHkxX1Jlc3R5bGFuZV9IZWFsdGhfYW5kX0JlYXV0eS5wZGZcIixcInZpZGVvXCI6XCJodHRwczovL3ZpbWVvLmNvbS8xNTg0MzIxOTlcIn0sXCIyXCI6e1wibmFtZVwiOlwiQ2FzZSBTdHVkeSAyXCIsXCJ0eXBlXCI6XCJIZWFsdGggYW5kIEJlYXV0eVwiLFwibGlua1wiOlwiQ2FzZVN0dWR5Ml9Db29sc2N1bHB0aW5nX0hlYWx0aF9hbmRfQmVhdXR5LnBkZlwiLFwidmlkZW9cIjpcImh0dHBzOi8vdmltZW8uY29tLzE1ODQzMTg2MVwifSxcIjNcIjp7XCJuYW1lXCI6XCJDYXNlIFN0dWR5IDNcIixcInR5cGVcIjpcIkhlYWx0aCBhbmQgQmVhdXR5XCIsXCJsaW5rXCI6XCJDYXNlU3R1ZHkzX0ludmlzYWxpZ25fSGVhbHRoX2FuZF9CZWF1dHkucGRmXCJ9LFwiNFwiOntcIm5hbWVcIjpcIkNhc2UgU3R1ZHkgNFwiLFwidHlwZVwiOlwiV29tZW4ncyBIZWFsdGhcIixcImxpbmtcIjpcIkNhc2VTdHVkeTRfUGFub3JhbWFOSVBUX1dvbWVuc19IZWFsdGgucGRmXCJ9LFwiNVwiOntcIm5hbWVcIjpcIkNhc2UgU3R1ZHkgNVwiLFwidHlwZVwiOlwiV29tZW4ncyBIZWFsdGhcIixcImxpbmtcIjpcIkNhc2VTdHVkeTVfVmlvbGV0X1dvbWVuc19IZWFsdGgucGRmXCJ9LFwiNlwiOntcIm5hbWVcIjpcIkNhc2UgU3R1ZHkgNlwiLFwidHlwZVwiOlwiRm9vZCBhbmQgQmV2ZXJhZ2VcIixcImxpbmtcIjpcIkNhc2VTdHVkeTZfV2hvbGVGb29kc19Gb29kX2FuZF9CZXZlcmFnZS5wZGZcIn19LFwidGVhbVwiOlt7XCJuYW1lXCI6XCJTaGFyaSBHb2xkXCIsXCJwb3NpdGlvblwiOlwiRm91bmRlci9DRU9cIixcImVtYWlsXCI6XCJzZ29sZEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkFkcmllbm5lIEtlbXBcIixcInBvc2l0aW9uXCI6XCJCdXNpbmVzcyBMZWFkLCBTdHJhdGVneVwiLFwiZW1haWxcIjpcImFrZW1wQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiU3RlcGhhbmllIEdvZGRhcmRcIixcInBvc2l0aW9uXCI6XCJCdXNpbmVzcyBMZWFkLCBTdHJhdGVneVwiLFwiZW1haWxcIjpcInNnb2RkYXJkQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiSmFja2llIEpvcmdlXCIsXCJwb3NpdGlvblwiOlwiTWVkaWEgU3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcImpqb3JnZUBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIlNhcmEgUmVjb3JkXCIsXCJwb3NpdGlvblwiOlwiQmxvZ2dlci9JbmZsdWVuY2VyIFJlbGF0aW9uc1wiLFwiZW1haWxcIjpcInNyZWNvcmRAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJTaGFyb24gU2NvdHRcIixcInBvc2l0aW9uXCI6XCJNZWRpYSBzdHJhdGVnaXN0XCIsXCJlbWFpbFwiOlwic3Njb3R0QGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiQXNobGV5IEdhcmluZ1wiLFwicG9zaXRpb25cIjpcIkFjY291bnQgRGlyZWN0b3JcIixcImVtYWlsXCI6XCJhZ2FyaW5nQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiTmF0YXNoYSBOZWxzb25cIixcInBvc2l0aW9uXCI6XCJBY2NvdW50IERpcmVjdG9yIHwgU0VPXCIsXCJlbWFpbFwiOlwibm5lbHNvbkBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIlNoYW5ub24gU21pdGhcIixcInBvc2l0aW9uXCI6XCJNZWRpYSBzdHJhdGVnaXN0XCIsXCJlbWFpbFwiOlwic3NtaXRoQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiUGFtIFNjaGxpY2h0ZXJcIixcInBvc2l0aW9uXCI6XCJNZWRpYSBSZWxhdGlvbnNcIixcImVtYWlsXCI6XCJQc2NobGljaHRlckBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkRpYW5hIE1hbm5cIixcInBvc2l0aW9uXCI6XCJBY2NvdW50IERpcmVjdG9yXCIsXCJlbWFpbFwiOlwiZG1hbm5AZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJKaWxsIEVkZ2V3b3J0aFwiLFwicG9zaXRpb25cIjpcIkFjY291bnQgRGlyZWN0b3JcIixcImVtYWlsXCI6XCJqZWRnZXdvcnRoQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiS3JpcyBFbGxlbmJlcmdcIixcInBvc2l0aW9uXCI6XCJFbnRlcnRhaW5tZW50IExlYWRcIixcImVtYWlsXCI6XCJrZWxsZW5iZXJnQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiRGlhbmEgTW9lY2tcIixcInBvc2l0aW9uXCI6XCJBbmFseXRpY3MvQWNjb3VudCBTdXBwb3J0XCIsXCJlbWFpbFwiOlwiZG1vZWNrQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiS3ltIENsZXZlbGFuZFwiLFwicG9zaXRpb25cIjpcIkFjY291bnQgQ29vcmRpbmF0b3JcIixcImVtYWlsXCI6XCJrY2xldmVsYW5kQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiSmFtaSBFaWRzdm9sZFwiLFwicG9zaXRpb25cIjpcIlNvY2lhbCBNZWRpYSBCdXNpbmVzcyBMZWFkXCIsXCJlbWFpbFwiOlwiamVpZHN2b2xkQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiVmFuZXNzYSBTaGFuYWhhblwiLFwicG9zaXRpb25cIjpcIkFuYWx5dGljc1wiLFwiZW1haWxcIjpcInZzaGFuYWhhbkBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkFzaGxleSBDbGluZVwiLFwicG9zaXRpb25cIjpcIlNvY2lhbCBNZWRpYSBTdHJhdGVnaXN0XCIsXCJlbWFpbFwiOlwiYWNsaW5lQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiS2VsbGllIEFyZW5zXCIsXCJwb3NpdGlvblwiOlwiU29jaWFsIE1lZGlhIEFjY3QgTWFuYWdlclwiLFwiZW1haWxcIjpcImthcmVuc0Bnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkphbWllIERhZGFudFwiLFwicG9zaXRpb25cIjpcIlNvY2lhbCBDb25zdW1lciBDdXN0b21lciBTZXJ2aWNlXCIsXCJlbWFpbFwiOlwiamRhZGFudEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkJyaWFubmEgSm9uc3NvblwiLFwicG9zaXRpb25cIjpcIlNvY2lhbCBNZWRpYSBDb21tdW5pdHkgTWFuYWdlclwiLFwiZW1haWxcIjpcImJqb25zc29uQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiQ2FtZXJvbiBKb25zc29uXCIsXCJwb3NpdGlvblwiOlwiRGlnaXRhbCBTdHJhdGVnaXN0XCIsXCJlbWFpbFwiOlwiY2pvbnNzb25AZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJMYXVyZW4gQ293bGVzXCIsXCJwb3NpdGlvblwiOlwiRGlnaXRhbC9Tb2NpYWwgU3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcImxjb3dsZXNAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJNZWxpc3NhIEFuZ2VydFwiLFwicG9zaXRpb25cIjpcIlNvY2lhbCBNZWRpYSBTdHJhdGVnaXN0XCIsXCJlbWFpbFwiOlwibWFuZ2VydEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkFsbGlzb24gSGlub2pvc2FcIixcInBvc2l0aW9uXCI6XCJDRk9cIixcImVtYWlsXCI6XCJhaGlub2pvc2FAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJDYWl0bGluIEhhbnNvblwiLFwicG9zaXRpb25cIjpcIkFjY291bnQgTWFuYW5nZXJcIixcImVtYWlsXCI6XCJjaGFuc29uQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiQW5kcmVhIFppdG9cIixcInBvc2l0aW9uXCI6XCJBbmFseXRpY3NcIixcImVtYWlsXCI6XCJheml0b0Bnb2xkcHIuY29tXCJ9XX07IiwiSW5kZXggPVxuXG4gIHZhbHM6IFtdXG4gIHNlY3Rpb246ICdob21lJ1xuICB2aXM6IGZhbHNlXG4gIGNhY2hlOlxuICAgIHdpbmRvdzogd2luZG93XG4gICAgc3RpY2tpZWQ6IGZhbHNlXG4gICAgbGF4aW46IHt9XG5cbiAgaTogLT5cblxuICAgIGlmIGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lIGlzICd3d3cuZ29sZHByLmNvbScgYW5kIGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sIGlzbnQgJ2h0dHBzOidcbiAgICAgIGlmIGRvY3VtZW50LmxvY2F0aW9uLmhhc2ggaXNudCBcIlwiXG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gJ2h0dHBzOi8vd3d3LmdvbGRwci5jb20vJyArIGRvY3VtZW50LmxvY2F0aW9uLmhhc2hcbiAgICAgIGVsc2VcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSAnaHR0cHM6Ly93d3cuZ29sZHByLmNvbS8nXG5cbiAgICBpZiBkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSBpcyAnZ29sZHByLmNvbSdcbiAgICAgIGlmIGRvY3VtZW50LmxvY2F0aW9uLmhhc2ggaXNudCBcIlwiXG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gJ2h0dHBzOi8vd3d3LmdvbGRwci5jb20vJyArIGRvY3VtZW50LmxvY2F0aW9uLmhhc2hcbiAgICAgIGVsc2VcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSAnaHR0cHM6Ly93d3cuZ29sZHByLmNvbS8nXG4gICAgXG5cbiAgICBJbmRleC5jYWNoZS53aW5kb3cgPSAkKHdpbmRvdylcbiAgICBpZiBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgaXNudCB1bmRlZmluZWRcbiAgICAgIEluZGV4LnZpcyA9IGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZVxuICAgICAgc2V0SW50ZXJ2YWwgSW5kZXgudmlzaWJsZSwgMjAwXG5cblxuICAgIGlmIEluZGV4LmNhY2hlLndpbmRvdy53aWR0aCgpID4gMTAwMFxuICAgICAgc2V0SW50ZXJ2YWwgSW5kZXguaGVhZGVyLCA1MFxuXG4gICAgSW5kZXgubGF4Y2FjaGUoKVxuICAgIHNldEludGVydmFsIEluZGV4LmNoZWNrLCAxMDBcbiAgICBzZXRJbnRlcnZhbCBJbmRleC5tZW51LCA1MDBcblxuICAgIEluZGV4LmhhbmRsZXJzKClcbiAgICBjb25zb2xlLmxvZyAnSW5kZXguaSgpJ1xuXG4gICAgaWYgZG9jdW1lbnQubG9jYXRpb24uaGFzaCBpc250ICcnXG4gICAgICAkKCdodG1sLCBib2R5Jykuc2Nyb2xsVG8gXCIje2RvY3VtZW50LmxvY2F0aW9uLmhhc2h9XCIsXG4gICAgICAgIGR1cmF0aW9uOiA1MFxuICAgICAgICBvZmZzZXQ6IC02MFxuXG4gIHZpc2libGU6IC0+XG4gICAgaWYgSW5kZXgudmlzIGlzbnQgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlXG4gICAgICBJbmRleC52aXMgPSBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGVcbiAgICAgIF8ub2ZmICcuYmx1ZUNpcmNsZSdcbiAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgXy5vbiAnLmJsdWVDaXJjbGUnXG4gICAgICAsIDEwXG5cbiAgaGFuZGxlcnM6IC0+XG5cbiAgICAkKCdcbiAgICAgIGhlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gYS5vcHRpb24sIC5tb2JpbGUgPiAuaW5uZXIgPiAubWVudSA+IGEub3B0aW9uLFxuICAgICAgaGVhZGVyID4gLmlubmVyIGEubG9nb1xuICAgICcpLmNsaWNrIEluZGV4Lm9wdGlvblxuICAgICQoJy5idXJnZXInKS5jbGljayBJbmRleC5idXJnZXJcblxuICBidXJnZXI6IC0+XG4gICAgXy5zd2FwICcubW9iaWxlLCAuYnVyZ2VyLCAuYnVyZ2VyID4gLmlubmVyID4gLm1lbnUnXG5cbiAgb3B0aW9uOiAoZXZlbnQpIC0+XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBoYXNoID0gJCh0aGlzKS5kYXRhICdhbmNob3InXG4gICAgXy5vZmYgJ2hlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gLm9wdGlvbiwgLm1vYmlsZSA+IC5pbm5lciA+IC5tZW51ID4gLm9wdGlvbidcbiAgICBfLm9mZiAnLm1vYmlsZSwgLmJ1cmdlcidcbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAkKCdodG1sLCBib2R5Jykuc2Nyb2xsVG8gXCIjI3toYXNofVwiLFxuICAgICAgICBkdXJhdGlvbjogNTBcbiAgICAgICAgb2Zmc2V0OiAtNjBcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSBoYXNoXG4gICAgLCAyMDBcblxuICBoZWFkZXI6IC0+XG5cbiAgICBzdGlja3lTcG90ID0gMzAwXG5cbiAgICBpZiBJbmRleC5jYWNoZS53aW5kb3cuc2Nyb2xsVG9wKCkgPiBzdGlja3lTcG90IGFuZCBJbmRleC5jYWNoZS5zdGlja2llZCBpcyBmYWxzZVxuICAgICAgXy5vbiAnI3N0aWNreSdcbiAgICAgIEluZGV4LmNhY2hlLnN0aWNraWVkID0gdHJ1ZVxuXG4gICAgaWYgSW5kZXguY2FjaGUud2luZG93LnNjcm9sbFRvcCgpIDwgc3RpY2t5U3BvdCBhbmQgSW5kZXguY2FjaGUuc3RpY2tpZWQgaXMgdHJ1ZVxuICAgICAgXy5vZmYgJyNzdGlja3knXG4gICAgICBJbmRleC5jYWNoZS5zdGlja2llZCA9IG9mZlxuXG4gIG1lbnU6IC0+XG5cbiAgICAkKCcuc2VjdGlvbicpLmVhY2ggKGksIGVsKSAtPlxuICAgICAgc2VjdGlvbiA9ICQoZWwpLmRhdGEgJ3NlY3Rpb24nXG4gICAgICBpZiBJbmRleC5pblZpZXdwb3J0IGVsXG4gICAgICAgIF8ub2ZmICdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IC5vcHRpb24sIC5tb2JpbGUgPiAuaW5uZXIgPiAubWVudSA+IC5vcHRpb24nXG4gICAgICAgIF8ub24gXCIub3B0aW9uXyN7c2VjdGlvbn1cIlxuICAgICAgICByZXR1cm4gdHJ1ZVxuXG4gIGxheGNhY2hlOiAtPlxuICAgICQoJy5sYXhpbicpLmVhY2ggKGksIGVsKSAtPlxuICAgICAgSW5kZXguY2FjaGUubGF4aW5baV0gPSBlbFxuXG4gIGNoZWNrOiAtPlxuICAgIGZvciBpLCBlbCBvZiBJbmRleC5jYWNoZS5sYXhpblxuXG4gICAgICBpZiBJbmRleC5pblZpZXdwb3J0IGVsXG4gICAgICAgIFtwZXJjLCBkaWZmXSA9IEluZGV4LnZpZXdhYmxlIGVsXG4gICAgICAgIGplbCA9ICQoZWwpXG5cbiAgICAgICAgdGhyZXNoID0gamVsLmRhdGEgJ3RocmVzaCdcbiAgICAgICAgdGhyZXNoID0gNTAgaWYgdGhyZXNoIGlzIHVuZGVmaW5lZFxuXG4gICAgICAgIGlmIHBlcmMgPiB0aHJlc2ggYW5kIGplbC5oYXNDbGFzcyAnb2ZmJ1xuICAgICAgICAgIF8ub24gamVsXG4gICAgICAgIGlmIHBlcmMgPCB0aHJlc2ggYW5kIGplbC5oYXNDbGFzcyAnb24nXG4gICAgICAgICAgXy5vZmYgamVsXG5cbiAgICAgICAgIyMjXG4gICAgICAgIGlmIEluZGV4LmNhY2hlLndpbmRvdy53aWR0aCgpID4gMTAwMFxuICAgICAgICAgIGlmIGplbC5oYXNDbGFzcyAnbGF4aW5fdmVydCdcbiAgICAgICAgICAgIHZhbCA9IE1hdGgucm91bmQoZGlmZilcbiAgICAgICAgICAgICN2YWwgPSBNYXRoLnJvdW5kKGRpZmYpXG4gICAgICAgICAgICBpZiBJbmRleC52YWxzP1tpXSBpc250IHZhbCozXG4gICAgICAgICAgICAgIGplbC5maW5kKCcuaW5uZXI6Zmlyc3QnKS5jc3MgJ3RyYW5zZm9ybScsIFwidHJhbnNsYXRlM2QoMCwgI3t2YWwqM31weCwgMHB4KVwiXG4gICAgICAgICAgICAgIGplbC5maW5kKCcub3ZlcmxheScpLmNzcyAndHJhbnNmb3JtJywgXCJ0cmFuc2xhdGUzZCgwLCAje3ZhbCoyfXB4LCAwcHgpXCJcbiAgICAgICAgICAgICAgamVsLmZpbmQoJy5vdmVybGF5ID4gLmlubmVyJykuY3NzICd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZTNkKDAsICN7dmFsLzV9cHgsIDBweClcIlxuICAgICAgICAgICAgICBJbmRleC52YWxzW2ldID0gdmFsKjNcbiAgICAgICAgIyMjXG4gICBcbiAgaW5WaWV3cG9ydDogKGVsKSAtPlxuXG4gICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICByZXR1cm4oXG4gICAgICAocmVjdC50b3AgPj0gMCB8fCByZWN0LmJvdHRvbSA+PSAwKSAmJlxuICAgICAgKHJlY3QudG9wIDw9IHdpbmRvdy5pbm5lckhlaWdodCB8fCByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgKVxuXG4gIHZpZXdhYmxlOiAoZWwpIC0+XG4gICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgaGVpZ2h0ID0gcmVjdC5ib3R0b20tcmVjdC50b3BcblxuICAgIGVsTWlkZGxlID0gcmVjdC50b3AgKyBoZWlnaHQvMlxuICAgIHdpbk1pZGRsZSA9IHdpbmRvdy5pbm5lckhlaWdodC8yXG4gICAgbWF4ID0gd2luZG93LmlubmVySGVpZ2h0LzIgKyBoZWlnaHQvMlxuICAgIGRpZmYgPSB3aW5NaWRkbGUtZWxNaWRkbGVcbiAgICBwZXJjID0gMTAwIC0gTWF0aC5hYnMoZGlmZikqMTAwL21heFxuICAgIG5vbmFicyA9IE1hdGguYWJzKGRpZmYpKjEwMC9tYXhcbiAgICBub25hYnMgPSAtbm9uYWJzIGlmIGRpZmYgPCAwXG5cbiAgICByZXR1cm4gW3BlcmMsIG5vbmFic11cblxuIl19
