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
    return $('time').each((function(_this) {
      return function(i, el) {
        var jel;
        jel = $(el);
        jel.html(moment(jel.attr('title')).format('MMMM Do YYYY'));
        return jel.attr('aria-label', moment(jel.attr('title')).calendar());
      };
    })(this));

    /*
    $('.basal-entry').attr('basal-name', @name)
    $('.basal-entry').attr('basal-structure', 'blog')
    
    Basal.i config.basal.client, ->
      $('time').each (i, el) =>
        jel = $ el
        jel.html moment(jel.attr('title')).format('MMMM Do YYYY')
        jel.attr 'aria-label', moment(jel.attr('title')).calendar()
    
        for entry in Basal.structures.blog.entries
          if entry.name is Article.name
            title = entry.entities.title.value
            description = entry.entities.description.value
            image = entry.entities.image.value
    
            url = 'https://www.goldpr.com/article/#' + Article.name
    
            document.title = title
    
            $('meta[name=description]').attr 'content', description
    
            $('head')
              .append($("<meta property='fb:app_id' content='#{config.meta.fb_appid}' />"))
              .append($("<meta property='og:url' content='#{url}' />"))
              .append($("<meta property='og:title' content='#{title}' />"))
              .append($("<meta property='og:description' content='#{description}' />"))
              .append($("<meta property='og:image' content='#{image}' />"));
    
            $('head')
              .append($("<meta name='twitter:title' content='#{title}' />"))
              .append($("<meta name='twitter:description' content='#{description}' />"))
              .append($("<meta name='twitter:image' content='#{image}' />"));
    
            $('meta[property="og:url"]').attr 'content', 'https://www.goldpr.com/article/#' + Article.name
            $('meta[property="og:title"]').attr 'content', title
            $('meta[property="og:description"]').attr 'content', description
            $('meta[property="og:image"]').attr 'content', image
    
            $('meta[name="twitter:title"]').attr 'content', title
            $('meta[name="twitter:description"]').attr 'content', description
            $('meta[name="twitter:image"]').attr 'content', image
     */
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
  ],
  "blog": {
    "_id": "58add6585aa59b12b729e133",
    "name": "blog",
    "clientAccess": true,
    "entities": {
      "title": {
        "name": "title",
        "type": "Text"
      },
      "description": {
        "name": "description",
        "type": "Text"
      },
      "tags": {
        "name": "tags",
        "type": "Tags"
      },
      "image": {
        "name": "image",
        "type": "Image"
      },
      "blog": {
        "name": "blog",
        "type": "Blog"
      }
    },
    "client": {
      "id": "58add4455aa59b12b729e131",
      "name": "Gold PR",
      "profile": "https://s3.amazonaws.com/basal/0ffb5052e84160fe1a3b0f738cb95cc1.jpeg"
    },
    "user": {
      "id": "57f7339f5aa59b213c7cb362",
      "name": "kevin olson",
      "picture": "https://lh6.googleusercontent.com/-G6NOOtsjrAw/AAAAAAAAAAI/AAAAAAAADMw/KtWFXm0ygCY/photo.jpg"
    },
    "updated_at": "2017-04-11T19:17:36+00:00",
    "created_at": "2017-02-22T18:20:08+00:00",
    "entries": [
      {
        "_id": "58ed2c405aa59b18d55e5ce3",
        "name": "bulldog award",
        "entities": {
          "title": {
            "name": "title",
            "type": "Text",
            "value": "GOLD PR HONORED WITH PRESTIGIOUS BULLDOG MEDIA RELATIONS AWARD"
          },
          "description": {
            "name": "description",
            "type": "Text",
            "value": "Top Southern CA PR Firm Wins in Best Use of a Personality/Celebrity Category"
          },
          "tags": {
            "name": "tags",
            "type": "Tags",
            "value": ["award"]
          },
          "image": {
            "name": "image",
            "type": "Image",
            "value": "https://s3.amazonaws.com/basal/lVd5Wzkz2GADlH9Ojpek0H8AzfTtWBYwJXdn0yBU.jpeg"
          },
          "blog": {
            "name": "blog",
            "type": "Blog",
            "value": "<p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:11pt;font-family:'Helvetica Neue';color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\">Newport Beach, Calif. (March 27, 2017)</span><span style=\"font-size:11pt;font-family:'Helvetica Neue';color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\"> – </span><a href=\"http://www.goldpr.com/\"><span style=\"vertical-align: baseline;\">GOLD PR</span></a><span style=\"vertical-align: baseline;\">, </span><span style=\"font-size:11pt;font-family:'Helvetica Neue';color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\">a top Southern California public relations agency specializing in consumer and women’s health, beauty, lifestyle and medical technology, was honored with a 2017 </span><a href=\"https://www.bulldogreporter.com/\"><span style=\"vertical-align: baseline;\">Bulldog</span></a><span style=\"font-size:11pt;font-family:'Helvetica Neue';color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\"> Media Relations Award for its successful PR campaign in the Best Use of a Personality/Celebrity category</span><span style=\"font-size:11pt;font-family:'Helvetica Neue';color:#343434;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\">. The </span><span style=\"font-size:11pt;font-family:'Helvetica Neue';color:#343434;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\">Fear No Mirror: </span><a href=\"http://www.coolsculpting.com/\"><span style=\"vertical-align: baseline;\">Coolsculpting</span></a><span style=\"font-size:11pt;font-family:'Helvetica Neue';color:#343434;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\"> and Molly Sims</span><span style=\"font-size:11pt;font-family:'Helvetica Neue';color:#343434;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\"> campaign included strategies for consumer awareness, education and driving trial through traditional publicity and social media engagement.</span></p><p><b style=\"font-weight:normal;\" id=\"docs-internal-guid-b5c1f668-5e74-5654-450d-e08362f8f599\"><br></b></p><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:11pt;font-family:'Helvetica Neue';color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\">“We are honored to receive this prestigious industry award for excellence, creativity and achievement </span><span style=\"font-size:11pt;font-family:'Helvetica Neue';color:#1d1e1f;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\">in media relations.</span><span style=\"font-size:11pt;font-family:'Helvetica Neue';color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\"> This award is a testament to the creative and passionate team of professionals at GOLD who work tirelessly to combine innovative communications strategies with flawless execution to drive measurable results for our clients,” said agency founder, Shari Gold. “GOLD is a PR firm that understands</span><span style=\"font-size:16pt;font-family:Times;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\"> </span><span style=\"font-size:11pt;font-family:'Helvetica Neue';color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\">women --</span><span style=\"font-size:16pt;font-family:Times;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\"> </span><span style=\"font-size:11pt;font-family:'Helvetica Neue';color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\">how they come to trust brands and what influences their purchase behavior. This knowledge was applied to all the work our team delivered for CoolSculpting including this memorable campaign with Molly Sims,”</span><span style=\"font-size:16pt;font-family:Times;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\"> </span><span style=\"font-size:11pt;font-family:'Helvetica Neue';color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\">she continued. </span></p><p><b style=\"font-weight:normal;\"><br></b></p><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:11pt;font-family:'Helvetica Neue';color:#000000;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\">The Bulldog Media Relations Awards attract some of the best work from hundreds of top PR firms. They are judged by award-winning journalists including a Pulitzer Prize winner. This year’s judges come from several different media outlets including&nbsp;</span><span style=\"font-size:11pt;font-family:'Helvetica Neue';color:#000000;background-color:#ffffff;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\">The Washington Post, USA Today, Forbes and The Oregonian. </span></p><p><b style=\"font-weight:normal;\"><br></b></p><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:11pt;font-family:'Helvetica Neue';color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\">In addition to the Bulldog Media Relations Award, GOLD PR has been recognized for its outstanding work in public relations, communications, social and influencer marketing through accolades that include: </span><span style=\"font-size:11pt;font-family:'Helvetica Neue';color:#000000;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\">PR News’</span><span style=\"font-size:11pt;font-family:'Helvetica Neue';color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\"> Digital PR Award, </span><span style=\"font-size:11pt;font-family:'Helvetica Neue';color:#000000;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\">PR News’</span><span style=\"font-size:11pt;font-family:'Helvetica Neue';color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\"> Agency Elite and Platinum PR Awards.</span></p><p><b style=\"font-weight:normal;\"><br></b></p><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:11pt;font-family:'Helvetica Neue';color:#343434;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:underline;vertical-align:baseline;white-space:pre-wrap;\">About Bulldog Reporter</span></p><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:11pt;font-family:'Helvetica Neue';color:#343434;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\">Bulldog Reporter provides news and insights to public relations and corporate communications professionals with the mission of helping these practitioners achieve superior performance. Bulldog Reporter publishes a daily newsletter, with a summary of relevant news called the </span><a href=\"http://try.bulldogreporter.com/sign-up-for-bulldog-reporters-daily-dog-2\"><span style=\"vertical-align: baseline;\">Daily ’Dog</span></a><span style=\"font-size:11pt;font-family:'Helvetica Neue';color:#343434;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\"> and runs an industry awards program —the Bulldog Awards—to recognize excellence in public relations and communications.</span></p><p><b style=\"font-weight:normal;\"><br></b></p><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:11pt;font-family:'Helvetica Neue';color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:underline;vertical-align:baseline;white-space:pre-wrap;\">About GOLD PR</span></p><p></p><p dir=\"ltr\" style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><a href=\"http://www.goldpr.com/\"><span style=\"vertical-align: baseline;\">GOLD PR</span></a><span style=\"vertical-align: baseline;\"> </span><span style=\"font-size:11pt;font-family:'Helvetica Neue';color:#2a2a2a;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;\">(GOLD), established in 2001, has been an independent and highly influential PR and social communications agency representing brands that focus on understanding, reaching and motivating consumer purchase behavior with specific expertise in engaging women. GOLD specializes in integrating brand communications programs across traditional, social and digital media for some of the world's most significant and successful brands in consumer health, beauty, medical technology, pharma, automotive, lifestyle and food and beverage sectors. For more information, visit: </span><span style=\"text-decoration: underline; font-size: 11pt; font-family: &quot;Helvetica Neue&quot;; color: rgb(0, 0, 255); background-color: transparent; font-weight: 400; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; vertical-align: baseline; white-space: pre-wrap;\"><a href=\"http://www.goldpr.com/\" style=\"text-decoration:none;\">http://www.goldpr.com/</a></span></p><div><br></div>"
          }
        },
        "structure": {
          "id": "58add6585aa59b12b729e133",
          "name": "blog"
        },
        "client": {
          "id": "58add4455aa59b12b729e131",
          "name": "Gold PR",
          "profile": "https://s3.amazonaws.com/basal/0ffb5052e84160fe1a3b0f738cb95cc1.jpeg"
        },
        "user": {
          "id": "57f7339f5aa59b213c7cb362",
          "name": "kevin olson",
          "picture": "https://lh6.googleusercontent.com/-G6NOOtsjrAw/AAAAAAAAAAI/AAAAAAAADMw/KtWFXm0ygCY/photo.jpg"
        },
        "updated_at": "2017-04-11T20:14:27+00:00",
        "created_at": "2017-04-11T19:19:28+00:00",
        "active": true
      }
    ]
  }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJhcnRpY2xlLmNvZmZlZSIsImJhc2FsLmNvZmZlZSIsImJsb2cuY29mZmVlIiwiY29uZmlnLmNvZmZlZSIsImluZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOztBQUFBLENBQUEsR0FFRTtFQUFBLENBQUEsRUFBRyxTQUFBO1dBQ0QsSUFBQyxDQUFBLE9BQUQsR0FBVyxXQUFBLENBQVksSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsSUFBYixDQUFaLEVBQTZCLEdBQTdCO0VBRFYsQ0FBSDtFQUdBLENBQUEsRUFDRTtJQUFBLE1BQUEsRUFBUSxLQUFSO0lBQ0EsT0FBQSxFQUFTLENBRFQ7R0FKRjtFQU9BLElBQUEsRUFBTSxTQUFDLEVBQUQsRUFBSyxNQUFMLEVBQW1CLEdBQW5COztNQUFLLFNBQU87OztNQUFPLE1BQUk7O0lBRTNCLElBQUcsQ0FBQSxDQUFBLEVBQUEsWUFBa0IsTUFBbEIsQ0FBSDtNQUNFLEVBQUEsR0FBSyxDQUFBLENBQUUsRUFBRixFQURQOztJQUdBLElBQUcsTUFBQSxLQUFZLEtBQWY7TUFDRSxFQUFFLENBQUMsV0FBSCxDQUFlLE1BQWYsRUFERjs7SUFHQSxJQUFHLEdBQUEsS0FBUyxLQUFaO01BQ0UsRUFBRSxDQUFDLFFBQUgsQ0FBWSxHQUFaLEVBREY7O0FBR0EsV0FBTztFQVhILENBUE47RUFvQkEsR0FBQSxFQUFLLFNBQUMsRUFBRCxFQUFLLENBQUw7O01BQUssSUFBRTs7SUFFVixJQUFHLENBQUMsQ0FBQyxNQUFGLElBQWEsQ0FBQyxDQUFDLE9BQUYsR0FBWSxDQUE1QjtNQUVFLElBQUMsQ0FBQSxJQUFELENBQU0sRUFBTixFQUFVLEtBQVYsRUFBaUIsUUFBakI7TUFDQSxVQUFBLENBQVcsU0FBQTtRQUNULElBQUMsQ0FBQSxJQUFELENBQU0sRUFBTixFQUFVLFFBQVYsRUFBb0IsS0FBcEI7ZUFDQSxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxJQUFW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Q0FBQyxPQUFWOztBQUVBLFdBQU8sQ0FBQyxJQUFELEVBQU8sTUFBUDtFQVpDLENBMUlWIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIl8gPVxuXG4gIGk6IC0+XG4gICAgQGNvbnNvbGUgPSBzZXRJbnRlcnZhbChAZGV0ZWN0LmJpbmQoQCksIDIwMClcblxuICBwOlxuICAgIG9mZmluZzogZmFsc2VcbiAgICBvZmZ0aW1lOiAwXG5cbiAgdHVybjogKGVsLCByZW1vdmU9ZmFsc2UsIGFkZD1mYWxzZSkgLT5cblxuICAgIGlmIGVsIG5vdCBpbnN0YW5jZW9mIGpRdWVyeVxuICAgICAgZWwgPSAkKGVsKVxuXG4gICAgaWYgcmVtb3ZlIGlzbnQgZmFsc2VcbiAgICAgIGVsLnJlbW92ZUNsYXNzKHJlbW92ZSlcblxuICAgIGlmIGFkZCBpc250IGZhbHNlXG4gICAgICBlbC5hZGRDbGFzcyhhZGQpXG5cbiAgICByZXR1cm4gdHJ1ZVxuXG4gIG9mZjogKGVsLCBwPXt9KSAtPlxuXG4gICAgaWYgcC5vZmZpbmcgYW5kIHAub2ZmdGltZSA+IDBcblxuICAgICAgQHR1cm4gZWwsIGZhbHNlLCAnb2ZmaW5nJ1xuICAgICAgc2V0VGltZW91dCAtPlxuICAgICAgICBAdHVybiBlbCwgJ29mZmluZycsIGZhbHNlXG4gICAgICAgIEB0dXJuIGVsLCAnb24nLCAnb2ZmJ1xuICAgICAgLCBwLm9mZnRpbWUqMTAwMCArIDEwMFxuXG4gICAgZWxzZVxuICAgICAgQHR1cm4gZWwsICdvbicsICdvZmYnXG5cbiAgICByZXR1cm5cblxuICBvbjogKGVsLCBwKSAtPlxuICAgIEB0dXJuIGVsLCAnb2ZmJywgJ29uJ1xuXG4gIHN3YXA6IChlbCwgcCkgLT5cblxuICAgIGlmIGVsIG5vdCBpbnN0YW5jZW9mIGpRdWVyeVxuICAgICAgZWwgPSAkKGVsKVxuXG4gICAgaWYgZWwuaGFzQ2xhc3MgJ29mZidcbiAgICAgIEBvbiBlbCwgcFxuICAgIGVsc2VcbiAgICAgIEBvZmYgZWwsIHBcblxuICAgIHJldHVyblxuXG4gIGVuY29kZTogKHN0cikgLT5cbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgICAgIC5yZXBsYWNlKC8hL2csICclMjEnKVxuICAgICAgLnJlcGxhY2UoLycvZywgJyUyNycpXG4gICAgICAucmVwbGFjZSgvXFwoL2csICclMjgnKVxuICAgICAgLnJlcGxhY2UoL1xcKS9nLCAnJTI5JylcbiAgICAgIC5yZXBsYWNlKC9cXCovZywgJyUyQScpXG4gICAgICAucmVwbGFjZSgvJTIwL2csICcrJylcblxuICB0OiAoY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlKSAtPlxuICAgIF9nYXEucHVzaCBbJ190cmFja0V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlXVxuXG4gIHJhbmQ6IChtaW4sIG1heCkgLT5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KSArIG1pblxuXG4gIGxvYWQ6IChzY3JpcHQsIGluaXRpYXRlLCBjb21wbGV0ZSkgLT5cblxuICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAnc2NyaXB0J1xuICAgIGVsLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0J1xuICAgIGVsLnNyYyA9IHNjcmlwdFxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIgJ2xvYWQnICwgKGUpIC0+XG4gICAgICBjb21wbGV0ZSgpIGlmIHR5cGVvZiBjb21wbGV0ZSBpcyAnZnVuY3Rpb24nXG4gICAgICB3aW5kb3dbaW5pdGlhdGVdLmkoKSBpZiBpbml0aWF0ZSBpc250IHVuZGVmaW5lZCBhbmQgaW5pdGlhdGUgaXNudCBmYWxzZVxuICAgICwgZmFsc2VcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpXG5cbiAgbGxjOiAtPlxuICAgIGFzY2lpID0gXCJcIlwiXG5cbiAgICAgICVjbW1tLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4vbW1tXG4gICAgICBtbW8uLi4uLi4uLi4uLi4uLi4uLTo6Ly86Oi0uLi4uLi4uLTo6Ojo6Ojo6Ojo6OjotLi4uLi4uLi4tOjovLy86LS5vbW1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi46K3loZGRkZGRkaHkrLS4uLi4vZGRkZGRkZGRkZGRkZCsuLi4uLi4vc2hkZGRkZGRkeW9kbVxuICAgICAgbW8uLi4uLi4uLi4uLi4uLWhtbW1oeXl5eWRtbW1oOi4uLi9tbW1taGhoaGhoaGhoKy4uLi46eWRtbWRoeXl5aGRkb29tXG4gICAgICBtLS4uLi4uLi4uLi4uLi4uLXNzOi0uLi4uLXltbW15Li4uL21tbW0tLS0tLS0tLS0uLi4uOmRtbW1zOi0uLi4tOi8uLW1cbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4ueW1tbXkuLi4vbW1tbS0vK29vbys6LS4uLi55bW1teS06K29vbysvLS4uZFxuICAgICAgaC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNtbW1kOi4uLi9tbW1taG1tbW1tbWRoKy4uLmRtbW1zaGRtbW1tbW1ocy1oXG4gICAgICBoLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNkbW1keTouLi4uOmhoZGhvKy8vK3ltbW1tKy4uZG1tbWR5by8vK3NkbW1taGhcbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4tK3lkbW1keS8uLi4uLi4uLS06Li4uLi4uLnNtbW1oLi55bW1tcy4uLi4uLjptbW1tbVxuICAgICAgbS0uLi4uLi4uLi4uLi4uLi06c2htbW1kcy8tLS0tLS4uLi46cy8tLS4uLi06aG1tbXMuLjpkbW1kLy0uLi4tb21tbW1tXG4gICAgICBtby4uLi4uLi4uLi4uLi4uaG1tbW1tbWhoaGhoaGhoLi4uK2RtbWRoeXl5aGRtbW15LS4uLi9obW1taHl5eWhtbW1kaG1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi5kZGRkZGRkZGRkZGRkZGQuLi4tK3NoZGRkZGRkZGh5Ly0uLi4uLi1veWRkZGRkZGRobzpkbVxuICAgICAgbW1vLi4uLi4uLi4uLi4uLjo6Ojo6Ojo6Ojo6Ojo6Oi4uLi4uLi4tOi8vLzo6LS4uLi4uLi4uLi4uLTovLy86LS4ub21tXG4gICAgICBtbW0vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9tbW1cblxuICAgICAgOjogc3ludGFjdGljIHN1Z2FyIGJ5IDI1NlxuICAgICAgOjogaHR0cDovLzI1Ni5pby9cbiAgICAgIDo6ICN7Y29uZmlnLm1ldGEucmVwb31cbiAgICBcIlwiXCJcbiAgICBjb25zb2xlLmxvZyBhc2NpaSwgXCJjb2xvcjogZ3JleTsgZm9udC1mYW1pbHk6IE1lbmxvLCBtb25vc3BhY2U7XCJcblxuICBkZXRlY3Q6IC0+XG4gICAgaWYgKCgod2luZG93Lm91dGVySGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSA+IDEwMCkgfHwgKCh3aW5kb3cub3V0ZXJXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoKSA+IDEwMCkpXG4gICAgICBAbGxjKClcbiAgICAgIGNsZWFySW50ZXJ2YWwgQGNvbnNvbGVcblxuXy5pKClcbiIsIkFydGljbGUgPSBcblxuICBuYW1lOiBmYWxzZVxuXG4gIGk6IC0+XG5cbiAgICBAbmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJylcblxuICAgICQoJ3RpbWUnKS5lYWNoIChpLCBlbCkgPT5cbiAgICAgIGplbCA9ICQgZWxcbiAgICAgIGplbC5odG1sIG1vbWVudChqZWwuYXR0cigndGl0bGUnKSkuZm9ybWF0KCdNTU1NIERvIFlZWVknKVxuICAgICAgamVsLmF0dHIgJ2FyaWEtbGFiZWwnLCBtb21lbnQoamVsLmF0dHIoJ3RpdGxlJykpLmNhbGVuZGFyKClcbiAgICAjIyNcbiAgICAkKCcuYmFzYWwtZW50cnknKS5hdHRyKCdiYXNhbC1uYW1lJywgQG5hbWUpXG4gICAgJCgnLmJhc2FsLWVudHJ5JykuYXR0cignYmFzYWwtc3RydWN0dXJlJywgJ2Jsb2cnKVxuXG4gICAgQmFzYWwuaSBjb25maWcuYmFzYWwuY2xpZW50LCAtPlxuICAgICAgJCgndGltZScpLmVhY2ggKGksIGVsKSA9PlxuICAgICAgICBqZWwgPSAkIGVsXG4gICAgICAgIGplbC5odG1sIG1vbWVudChqZWwuYXR0cigndGl0bGUnKSkuZm9ybWF0KCdNTU1NIERvIFlZWVknKVxuICAgICAgICBqZWwuYXR0ciAnYXJpYS1sYWJlbCcsIG1vbWVudChqZWwuYXR0cigndGl0bGUnKSkuY2FsZW5kYXIoKVxuXG4gICAgICAgIGZvciBlbnRyeSBpbiBCYXNhbC5zdHJ1Y3R1cmVzLmJsb2cuZW50cmllc1xuICAgICAgICAgIGlmIGVudHJ5Lm5hbWUgaXMgQXJ0aWNsZS5uYW1lXG4gICAgICAgICAgICB0aXRsZSA9IGVudHJ5LmVudGl0aWVzLnRpdGxlLnZhbHVlXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA9IGVudHJ5LmVudGl0aWVzLmRlc2NyaXB0aW9uLnZhbHVlXG4gICAgICAgICAgICBpbWFnZSA9IGVudHJ5LmVudGl0aWVzLmltYWdlLnZhbHVlXG5cbiAgICAgICAgICAgIHVybCA9ICdodHRwczovL3d3dy5nb2xkcHIuY29tL2FydGljbGUvIycgKyBBcnRpY2xlLm5hbWVcblxuICAgICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSB0aXRsZVxuXG4gICAgICAgICAgICAkKCdtZXRhW25hbWU9ZGVzY3JpcHRpb25dJykuYXR0ciAnY29udGVudCcsIGRlc2NyaXB0aW9uXG5cbiAgICAgICAgICAgICQoJ2hlYWQnKVxuICAgICAgICAgICAgICAuYXBwZW5kKCQoXCI8bWV0YSBwcm9wZXJ0eT0nZmI6YXBwX2lkJyBjb250ZW50PScje2NvbmZpZy5tZXRhLmZiX2FwcGlkfScgLz5cIikpXG4gICAgICAgICAgICAgIC5hcHBlbmQoJChcIjxtZXRhIHByb3BlcnR5PSdvZzp1cmwnIGNvbnRlbnQ9JyN7dXJsfScgLz5cIikpXG4gICAgICAgICAgICAgIC5hcHBlbmQoJChcIjxtZXRhIHByb3BlcnR5PSdvZzp0aXRsZScgY29udGVudD0nI3t0aXRsZX0nIC8+XCIpKVxuICAgICAgICAgICAgICAuYXBwZW5kKCQoXCI8bWV0YSBwcm9wZXJ0eT0nb2c6ZGVzY3JpcHRpb24nIGNvbnRlbnQ9JyN7ZGVzY3JpcHRpb259JyAvPlwiKSlcbiAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPG1ldGEgcHJvcGVydHk9J29nOmltYWdlJyBjb250ZW50PScje2ltYWdlfScgLz5cIikpO1xuXG4gICAgICAgICAgICAkKCdoZWFkJylcbiAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPG1ldGEgbmFtZT0ndHdpdHRlcjp0aXRsZScgY29udGVudD0nI3t0aXRsZX0nIC8+XCIpKVxuICAgICAgICAgICAgICAuYXBwZW5kKCQoXCI8bWV0YSBuYW1lPSd0d2l0dGVyOmRlc2NyaXB0aW9uJyBjb250ZW50PScje2Rlc2NyaXB0aW9ufScgLz5cIikpXG4gICAgICAgICAgICAgIC5hcHBlbmQoJChcIjxtZXRhIG5hbWU9J3R3aXR0ZXI6aW1hZ2UnIGNvbnRlbnQ9JyN7aW1hZ2V9JyAvPlwiKSk7XG5cbiAgICAgICAgICAgICQoJ21ldGFbcHJvcGVydHk9XCJvZzp1cmxcIl0nKS5hdHRyICdjb250ZW50JywgJ2h0dHBzOi8vd3d3LmdvbGRwci5jb20vYXJ0aWNsZS8jJyArIEFydGljbGUubmFtZVxuICAgICAgICAgICAgJCgnbWV0YVtwcm9wZXJ0eT1cIm9nOnRpdGxlXCJdJykuYXR0ciAnY29udGVudCcsIHRpdGxlXG4gICAgICAgICAgICAkKCdtZXRhW3Byb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIl0nKS5hdHRyICdjb250ZW50JywgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICQoJ21ldGFbcHJvcGVydHk9XCJvZzppbWFnZVwiXScpLmF0dHIgJ2NvbnRlbnQnLCBpbWFnZVxuXG4gICAgICAgICAgICAkKCdtZXRhW25hbWU9XCJ0d2l0dGVyOnRpdGxlXCJdJykuYXR0ciAnY29udGVudCcsIHRpdGxlXG4gICAgICAgICAgICAkKCdtZXRhW25hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCJdJykuYXR0ciAnY29udGVudCcsIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAkKCdtZXRhW25hbWU9XCJ0d2l0dGVyOmltYWdlXCJdJykuYXR0ciAnY29udGVudCcsIGltYWdlXG4gICAgICAgICAgICAjIyNcbiIsIkJhc2FsID1cblxuICBkb21haW46ICcvL2Jhc2FsLnRlY2gvYXBpJ1xuICBjbGllbnQ6IGZhbHNlXG5cbiAgZGF0YTogZmFsc2VcbiAgc3RydWN0dXJlczogZmFsc2VcblxuICBjb21wbGV0ZTogZmFsc2VcblxuICBpOiAoY2xpZW50LCBjb21wbGV0ZSkgLT5cblxuICAgIEBjb21wbGV0ZSA9IGNvbXBsZXRlXG5cbiAgICBAY2xpZW50ID0gY2xpZW50XG5cbiAgICBAZ2V0U3RydWN0dXJlcyA9PlxuICAgICAgQGxvb3AoKVxuICAgICAgQGVudHJ5KClcblxuICB0eXBlOiAoZWwsIHR5cGUsIG5hbWUsIGVudHJ5KSAtPlxuICAgIHN3aXRjaCB0eXBlXG4gICAgICB3aGVuICdjc3MtYmFja2dyb3VuZCdcbiAgICAgICAgZWwuY3NzICdiYWNrZ3JvdW5kLWltYWdlJywgXCJ1cmwoI3tlbnRyeS5lbnRpdGllc1tuYW1lXS52YWx1ZX0pXCJcbiAgICAgIHdoZW4gJ2RhdGUnXG4gICAgICAgIGVsLmh0bWwgbW9tZW50KGVudHJ5LmVudGl0aWVzW25hbWVdLnZhbHVlLCAnTU0vREQvWVlZWScpLmZvcm1hdCBlbC5hdHRyKCdiYXNhbC1kYXRlZm9ybWF0JylcbiAgICAgIHdoZW4gJ2ltYWdlJ1xuICAgICAgICBlbC5hdHRyICdzcmMnLCBlbnRyeS5lbnRpdGllc1tuYW1lXS52YWx1ZVxuICAgICAgd2hlbiAndGV4dCdcbiAgICAgICAgZWwuaHRtbCBlbnRyeS5lbnRpdGllc1tuYW1lXS52YWx1ZVxuICAgICAgd2hlbiAnaHJlZidcbiAgICAgICAgZWwuYXR0ciAnaHJlZicsIGVudHJ5LmVudGl0aWVzW25hbWVdLnZhbHVlXG5cbiAgZW50cnk6IC0+XG4gICAgJCgnLmJhc2FsLWVudHJ5JykuZWFjaCAoaSwgZWwpIC0+XG5cbiAgICAgIGVsID0gJChlbClcbiAgICAgIHN0cnVjdHVyZSA9IGVsLmF0dHIgJ2Jhc2FsLXN0cnVjdHVyZSdcbiAgICAgIG5hbWUgPSBlbC5hdHRyICdiYXNhbC1uYW1lJ1xuICAgICAgZW50aXR5TmFtZSA9IGVsLmF0dHIgJ2Jhc2FsLWVudGl0eSdcbiAgICAgIGF0dHIgPSBlbC5hdHRyICdiYXNhbC1hdHRyJ1xuICAgICAgdHlwZSA9IGVsLmF0dHIgJ2Jhc2FsLXR5cGUnXG5cbiAgICAgIEJhc2FsLmVycm9yKFwiU3RydWN0dXJlIG5vdCBmb3VuZCBcXFwiI3tzdHJ1Y3R1cmV9XFxcIlwiKSBpZiAhQmFzYWwuc3RydWN0dXJlc1tzdHJ1Y3R1cmVdP1xuXG4gICAgICBmb3Iga2V5LCBlbnRyeSBvZiBCYXNhbC5zdHJ1Y3R1cmVzW3N0cnVjdHVyZV0uZW50cmllc1xuICAgICAgICBjb250aW51ZSBpZiBlbnRyeS5hY3RpdmUgaXNudCB0cnVlXG4gICAgICAgIGlmIG5hbWUgaXMgZW50cnkubmFtZVxuICAgICAgICAgIGVsLmF0dHIgJ3RpdGxlJywgZW50cnkuY3JlYXRlZF9hdCBpZiBlbC5hdHRyKCdiYXNhbC1kYXRlJykgaXMgJ2NyZWF0ZWQnXG4gICAgICAgICAgZm9yIGJrZXksIGVudGl0eSBvZiBlbnRyeS5lbnRpdGllc1xuICAgICAgICAgICAgaWYgZW50aXR5Lm5hbWUgaXMgZW50aXR5TmFtZVxuICAgICAgICAgICAgICBpZiB0eXBlXG4gICAgICAgICAgICAgICAgQmFzYWwudHlwZSBlbCwgdHlwZSwgZW50aXR5Lm5hbWUsIGVudHJ5XG4gICAgICAgICAgICAgIGVsc2UgaWYgYXR0clxuICAgICAgICAgICAgICAgIGVsLmF0dHIgYXR0ciwgZW50aXR5LnZhbHVlXG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBlbC5odG1sIGVudGl0eS52YWx1ZVxuXG4gIGxvb3A6IC0+XG5cbiAgICAkKCcuYmFzYWwtbG9vcCcpLmVhY2goIChpLCBlbCkgLT5cblxuICAgICAgZWwgPSAkKGVsKVxuICAgICAgc3RydWN0dXJlID0gZWwuYXR0cihcImJhc2FsLXN0cnVjdHVyZVwiKVxuXG4gICAgICBCYXNhbC5lcnJvcihcIlN0cnVjdHVyZSBub3QgZm91bmQgXFxcIiN7c3RydWN0dXJlfVxcXCJcIikgaWYgIUJhc2FsLnN0cnVjdHVyZXNbc3RydWN0dXJlXT9cblxuICAgICAgdGVtcGxhdGUgPSBlbC5jaGlsZHJlbigpLnJlbW92ZSgpXG5cbiAgICAgIGZvciBvd24gbmFtZSwgZW50cnkgb2YgQmFzYWwuc3RydWN0dXJlc1tzdHJ1Y3R1cmVdLmVudHJpZXNcbiAgICAgICAgY29udGludWUgaWYgZW50cnkuYWN0aXZlIGlzbnQgdHJ1ZVxuICAgICAgICB0cGwgPSB0ZW1wbGF0ZS5jbG9uZSgpXG4gICAgICAgIHRwbC5hdHRyKCdocmVmJywgdHBsLmF0dHIoJ2Jhc2FsLWxpbmsnKSArIGVudHJ5Lm5hbWUpIGlmIHRwbC5oYXNDbGFzcyAnYmFzYWwtbGluaydcbiAgICAgICAgdHBsLmZpbmQoJyonKS5lYWNoIChjaSwgY2VsKSAtPlxuICAgICAgICAgIGpjZWwgPSAkKGNlbClcbiAgICAgICAgICBuYW1lID0gamNlbC5hdHRyKCdiYXNhbC1uYW1lJylcbiAgICAgICAgICB0eXBlID0gamNlbC5hdHRyKCdiYXNhbC10eXBlJylcbiAgICAgICAgICBuYW1lcyA9IGpjZWwuYXR0cignYmFzYWwtbmFtZXMnKT8uc3BsaXQgJywnXG4gICAgICAgICAgdHlwZXMgPSBqY2VsLmF0dHIoJ2Jhc2FsLXR5cGVzJyk/LnNwbGl0ICcsJ1xuXG4gICAgICAgICAgcmV0dXJuIHRydWUgaWYgbmFtZSBpcyB1bmRlZmluZWQgYW5kIG5hbWVzIGlzIHVuZGVmaW5lZFxuXG4gICAgICAgICAgaWYgbmFtZXMgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgICBuYW1lcyA9IFtuYW1lXVxuICAgICAgICAgICAgdHlwZXMgPSBbdHlwZV1cblxuICAgICAgICAgIGZvciBuYW1lLCBpIGluIG5hbWVzXG4gICAgICAgICAgICB0eXBlID0gdHlwZXNbaV1cblxuICAgICAgICAgICAgaWYgdHlwZSBpc250IHVuZGVmaW5lZFxuICAgICAgICAgICAgICBzd2l0Y2ggdHlwZVxuICAgICAgICAgICAgICAgIHdoZW4gJ2Nzcy1iYWNrZ3JvdW5kJ1xuICAgICAgICAgICAgICAgICAgamNlbC5jc3MgJ2JhY2tncm91bmQtaW1hZ2UnLCBcInVybCgje2VudHJ5LmVudGl0aWVzW25hbWVdLnZhbHVlfSlcIlxuICAgICAgICAgICAgICAgIHdoZW4gJ2RhdGUnXG4gICAgICAgICAgICAgICAgICBqY2VsLmh0bWwgbW9tZW50KGVudHJ5LmVudGl0aWVzW25hbWVdLnZhbHVlLCAnTU0vREQvWVlZWScpLmZvcm1hdCBqY2VsLmF0dHIoJ2Jhc2FsLWRhdGVmb3JtYXQnKVxuICAgICAgICAgICAgICAgIHdoZW4gJ2ltYWdlJ1xuICAgICAgICAgICAgICAgICAgamNlbC5hdHRyICdzcmMnLCBlbnRyeS5lbnRpdGllc1tuYW1lXS52YWx1ZVxuICAgICAgICAgICAgICAgIHdoZW4gJ3RleHQnXG4gICAgICAgICAgICAgICAgICBqY2VsLmh0bWwgZW50cnkuZW50aXRpZXNbbmFtZV0udmFsdWVcbiAgICAgICAgICAgICAgICB3aGVuICdocmVmJ1xuICAgICAgICAgICAgICAgICAgamNlbC5hdHRyICdocmVmJywgZW50cnkuZW50aXRpZXNbbmFtZV0udmFsdWVcblxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBpZiBuYW1lIGlzICdzdHJ1Y3R1cmUtbmFtZSdcbiAgICAgICAgICAgICAgICBqY2VsLmh0bWwgZW50cnkubmFtZVxuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgamNlbC5odG1sIGVudHJ5LmVudGl0aWVzW25hbWVdLnZhbHVlXG4gICAgICAgIGVsLmFwcGVuZCB0cGxcblxuICAgICAgKS5wcm9taXNlKCkuZG9uZSAtPlxuICAgICAgICBCYXNhbC5jb21wbGV0ZT8oKVxuXG4gIGdldFN0cnVjdHVyZXM6IChjb21wbGV0ZSkgLT5cbiAgICBAanNvbnAgXCJzdHJ1Y3R1cmVzXCIsIGNsaWVudDogQGNsaWVudCwgKHJlc3VsdCkgPT5cbiAgICAgIEBzdHJ1Y3R1cmVzID0ge31cbiAgICAgIGZvciBpLHN0cnVjdHVyZSBvZiByZXN1bHQuZGF0YVxuICAgICAgICBAc3RydWN0dXJlc1tzdHJ1Y3R1cmUubmFtZV0gPSBzdHJ1Y3R1cmVcbiAgICAgIGNvbXBsZXRlPygpXG5cbiAganNvbnA6IChlbmRwb2ludCwgcGFyYW1zLCBjb21wbGV0ZSkgLT5cblxuICAgIHBhcmFtcy5jYWxsYmFjayA9ICdCYXNhbC5jYWxsYmFjaydcblxuICAgIHNjcmlwdCA9IFwiI3tkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbH0je0Bkb21haW59LyN7ZW5kcG9pbnR9P1wiICsgJC5wYXJhbSBwYXJhbXNcblxuICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAnc2NyaXB0J1xuICAgIGVsLnNyYyA9IHNjcmlwdFxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIgJ2xvYWQnICwgKGUpIC0+XG4gICAgICBjb21wbGV0ZT8oQmFzYWwuZGF0YSlcbiAgICAgIEJhc2FsLmRhdGEgPSBmYWxzZVxuICAgICwgZmFsc2VcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoZWwpXG5cbiAgY2FsbGJhY2s6IChkYXRhKSAtPlxuICAgIEJhc2FsLmRhdGEgPSBkYXRhXG5cbiAgZXJyb3I6IChtZXNzYWdlKSAtPlxuICAgIHRocm93IG5ldyBFcnJvciBcImJhc2FsOiAje21lc3NhZ2V9XCJcbiIsIkJsb2cgPSBcblxuICBpOiAtPlxuXG4gICAgQmFzYWwuaSBjb25maWcuYmFzYWwuY2xpZW50XG4iLCJjb25maWcgPSB7XCJiYXNhbFwiOntcImNsaWVudFwiOlwiNThhZGQ0NDU1YWE1OWIxMmI3MjllMTMxXCJ9LFwiY2xpZW50c1wiOltcImludmlzYWxpZ25cIixcImdhbGRlcm1hXCIsXCJiaW9waGFybXhcIixcIm5hdGVyYVwiLFwiY29vbHNjdWxwdGluZ1wiLFwiYWxtYVwiLFwiZW5kb2xvZ2l4XCIsXCJyZXN0eWxhbmVcIixcImR5c3BvcnRcIixcInNjdWxwdHJhXCIsXCJzZXJhXCIsXCJjYXJlXCIsXCJ3aG9sZWZvb2RzXCIsXCJoYWdnZW5zXCIsXCJhYmJvdFwiLFwiZmluZXNzXCIsXCJnZW5lcmFsbWlsbHNcIixcImtpYVwiLFwibGlmZWxvY2tcIixcIm1hdHRlbFwiLFwibWF6ZGFcIixcIm1pdHN1YmlzaGlcIixcIm5pa2VcIixcIm5lc3RsZVwiLFwibmV3YmFsYW5jZVwiLFwicmVkYnVsbFwiLFwidG1vYmlsZVwiLFwieGJveFwiLFwib2JpXCIsXCJzZW1hXCIsXCJtaXhpbVwiLFwiaGFuc2Vuc1wiLFwidHlsZW5vbFwiLFwiZHJ5YmFyXCIsXCJpdGVyaXNcIixcIm5lb2R5bmVcIl0sXCJjb2xvclwiOntcImJsYWNrMVwiOlwiIzAwMDAwMFwiLFwid2hpdGUxXCI6XCIjRkZGRkZGXCIsXCJ3aGl0ZTJcIjpcIiNGN0VFRUFcIixcInJlZDFcIjpcIiNFRTY5N0FcIixcImJsdWUxXCI6XCIjRDFFMEVCXCIsXCJnb2xkMVwiOlwiI0IwOTc2RFwifSxcImZvbnRcIjp7XCJjb3B5MVwiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gbGlnaHRcIixcImZvbnQtc2l6ZVwiOlwiMTZweFwifSxcImNvcHkyXCI6e1wiZm9udC1mYW1pbHlcIjpcImdvdGhhbSBtZWRpdW1cIixcImZvbnQtc2l6ZVwiOlwiMTZweFwifSxcImNvcHkzXCI6e1wiZm9udC1mYW1pbHlcIjpcImdvdGhhbSBsaWdodFwiLFwiZm9udC1zaXplXCI6XCIxNHB4XCJ9LFwiY29weTRcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIGJvbGRcIixcImZvbnQtc2l6ZVwiOlwiMjBweFwifSxcImNvcHk1XCI6e1wiZm9udC1mYW1pbHlcIjpcImdvdGhhbSBsaWdodFwiLFwiZm9udC1zaXplXCI6XCIxMnB4XCJ9LFwiY29weTZcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIG1lZGl1bVwiLFwiZm9udC1zaXplXCI6XCIxNHB4XCJ9LFwiY29weTdcIjp7XCJmb250LWZhbWlseVwiOlwiZ290aGFtIGJvbGRcIixcImZvbnQtc2l6ZVwiOlwiMTJweFwifSxcImgxXCI6e1wiZm9udC1mYW1pbHlcIjpcIm5ldXRyYXRleHQgYm9sZFwiLFwiZm9udC1zaXplXCI6XCI0MHB4XCJ9LFwiaDJcIjp7XCJmb250LWZhbWlseVwiOlwibmV1dHJhdGV4dCBkZW1pXCIsXCJmb250LXNpemVcIjpcIjIwcHhcIn0sXCJoM1wiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gbGlnaHRcIixcImZvbnQtc2l6ZVwiOlwiMzBweFwifSxcImg0XCI6e1wiZm9udC1mYW1pbHlcIjpcImdvdGhhbSBib2xkXCIsXCJmb250LXNpemVcIjpcIjMwcHhcIn0sXCJoNVwiOntcImZvbnQtZmFtaWx5XCI6XCJnb3RoYW0gbGlnaHRcIixcImZvbnQtc2l6ZVwiOlwiMjBweFwifSxcImg2XCI6e1wiZm9udC1mYW1pbHlcIjpcImdvdGhhbSBib29rXCIsXCJmb250LXNpemVcIjpcIjMwMHB4XCJ9fSxcIm1lbnVcIjpbXCJzdGFuZG91dFwiLFwiYXBwcm9hY2hcIixcIndvcmtcIixcInNlcnZpY2VzXCIsXCJ0ZWFtXCIsXCJjbGllbnRzXCIsXCJjb250YWN0XCJdLFwibWV0YVwiOntcInRpdGxlXCI6XCJHb2xkIFBSIDogVG9wIFB1YmxpYyBSZWxhdGlvbnMgRmlybSArIERpZ2l0YWwgQWdlbmN5XCIsXCJ1cmxcIjpcImh0dHBzOi8vd3d3LmdvbGRwci5jb20vXCIsXCJyZXBvXCI6XCJodHRwOi8vd3d3LmdpdGh1Yi5jb20vYWNpZGphenovZ29sZHByXCIsXCJkZXNjcmlwdGlvblwiOlwiQXdhcmQgd2lubmluZyBwdWJsaWMgcmVsYXRpb25zIGFuZCBkaWdpdGFsIGFnZW5jeS4gR09MRCBQUiBpcyBhIENhbGlmb3JuaWEgYmFzZWQgUFIgZmlybSB0cnVzdGVkIGJ5IHNvbWUgb2YgdGhlIGxhcmdlc3QgYnJhbmRzIGFjcm9zcyB0aGUgZ2xvYmUuXCIsXCJrZXl3b3Jkc1wiOlwid29tZW5zIGJlYXV0eSBwciwgd29tZW5zIGhlYWx0aCBwciwgc29jaWFsIG1lZGlhXCIsXCJpbWFnZVwiOlwiaW1nL3NoYXJlLmpwZ1wiLFwiZmJfYXBwaWRcIjoyMzgwNjY0MDY2NjkwMTJ9LFwic29jaWFsXCI6e1wiZmFjZWJvb2tcIjpcImh0dHA6Ly93d3cuZmFjZWJvb2suY29tL2dvbGRwclwiLFwidHdpdHRlclwiOlwiaHR0cDovL3d3dy50d2l0dGVyLmNvbS9nb2xkcHJfXCIsXCJpbnN0YWdyYW1cIjpcImh0dHA6Ly93d3cuaW5zdGFncmFtLmNvbS9nb2xkcHJcIixcIm1haWxcIjpcImhlbGxvQGdvbGRwci5jb21cIixcIm1hcFwiOlwiaHR0cHM6Ly9nb28uZ2wvbWFwcy9TVE5mYTZ6czM0c1wiLFwicGhvbmVcIjo5NDk3NDMzOTExfSxcInN0dWRpZXNcIjp7XCIxXCI6e1wibmFtZVwiOlwiQ2FzZSBTdHVkeSAxXCIsXCJ0eXBlXCI6XCJIZWFsdGggYW5kIEJlYXV0eVwiLFwibGlua1wiOlwiQ2FzZVN0dWR5MV9SZXN0eWxhbmVfSGVhbHRoX2FuZF9CZWF1dHkucGRmXCIsXCJ2aWRlb1wiOlwiaHR0cHM6Ly92aW1lby5jb20vMTU4NDMyMTk5XCJ9LFwiMlwiOntcIm5hbWVcIjpcIkNhc2UgU3R1ZHkgMlwiLFwidHlwZVwiOlwiSGVhbHRoIGFuZCBCZWF1dHlcIixcImxpbmtcIjpcIkNhc2VTdHVkeTJfQ29vbHNjdWxwdGluZ19IZWFsdGhfYW5kX0JlYXV0eS5wZGZcIixcInZpZGVvXCI6XCJodHRwczovL3ZpbWVvLmNvbS8xNTg0MzE4NjFcIn0sXCIzXCI6e1wibmFtZVwiOlwiQ2FzZSBTdHVkeSAzXCIsXCJ0eXBlXCI6XCJIZWFsdGggYW5kIEJlYXV0eVwiLFwibGlua1wiOlwiQ2FzZVN0dWR5M19JbnZpc2FsaWduX0hlYWx0aF9hbmRfQmVhdXR5LnBkZlwifSxcIjRcIjp7XCJuYW1lXCI6XCJDYXNlIFN0dWR5IDRcIixcInR5cGVcIjpcIldvbWVuJ3MgSGVhbHRoXCIsXCJsaW5rXCI6XCJDYXNlU3R1ZHk0X1Bhbm9yYW1hTklQVF9Xb21lbnNfSGVhbHRoLnBkZlwifSxcIjVcIjp7XCJuYW1lXCI6XCJDYXNlIFN0dWR5IDVcIixcInR5cGVcIjpcIldvbWVuJ3MgSGVhbHRoXCIsXCJsaW5rXCI6XCJDYXNlU3R1ZHk1X1Zpb2xldF9Xb21lbnNfSGVhbHRoLnBkZlwifSxcIjZcIjp7XCJuYW1lXCI6XCJDYXNlIFN0dWR5IDZcIixcInR5cGVcIjpcIkZvb2QgYW5kIEJldmVyYWdlXCIsXCJsaW5rXCI6XCJDYXNlU3R1ZHk2X1dob2xlRm9vZHNfRm9vZF9hbmRfQmV2ZXJhZ2UucGRmXCJ9fSxcInRlYW1cIjpbe1wibmFtZVwiOlwiU2hhcmkgR29sZFwiLFwicG9zaXRpb25cIjpcIkZvdW5kZXIvQ0VPXCIsXCJlbWFpbFwiOlwic2dvbGRAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJBZHJpZW5uZSBLZW1wXCIsXCJwb3NpdGlvblwiOlwiQnVzaW5lc3MgTGVhZCwgU3RyYXRlZ3lcIixcImVtYWlsXCI6XCJha2VtcEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIlN0ZXBoYW5pZSBHb2RkYXJkXCIsXCJwb3NpdGlvblwiOlwiQnVzaW5lc3MgTGVhZCwgU3RyYXRlZ3lcIixcImVtYWlsXCI6XCJzZ29kZGFyZEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkphY2tpZSBKb3JnZVwiLFwicG9zaXRpb25cIjpcIk1lZGlhIFN0cmF0ZWdpc3RcIixcImVtYWlsXCI6XCJqam9yZ2VAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJTYXJhIFJlY29yZFwiLFwicG9zaXRpb25cIjpcIkJsb2dnZXIvSW5mbHVlbmNlciBSZWxhdGlvbnNcIixcImVtYWlsXCI6XCJzcmVjb3JkQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiU2hhcm9uIFNjb3R0XCIsXCJwb3NpdGlvblwiOlwiTWVkaWEgc3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcInNzY290dEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkFzaGxleSBHYXJpbmdcIixcInBvc2l0aW9uXCI6XCJBY2NvdW50IERpcmVjdG9yXCIsXCJlbWFpbFwiOlwiYWdhcmluZ0Bnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIk5hdGFzaGEgTmVsc29uXCIsXCJwb3NpdGlvblwiOlwiQWNjb3VudCBEaXJlY3RvciB8IFNFT1wiLFwiZW1haWxcIjpcIm5uZWxzb25AZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJTaGFubm9uIFNtaXRoXCIsXCJwb3NpdGlvblwiOlwiTWVkaWEgc3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcInNzbWl0aEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIlBhbSBTY2hsaWNodGVyXCIsXCJwb3NpdGlvblwiOlwiTWVkaWEgUmVsYXRpb25zXCIsXCJlbWFpbFwiOlwiUHNjaGxpY2h0ZXJAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJEaWFuYSBNYW5uXCIsXCJwb3NpdGlvblwiOlwiQWNjb3VudCBEaXJlY3RvclwiLFwiZW1haWxcIjpcImRtYW5uQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiSmlsbCBFZGdld29ydGhcIixcInBvc2l0aW9uXCI6XCJBY2NvdW50IERpcmVjdG9yXCIsXCJlbWFpbFwiOlwiamVkZ2V3b3J0aEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIktyaXMgRWxsZW5iZXJnXCIsXCJwb3NpdGlvblwiOlwiRW50ZXJ0YWlubWVudCBMZWFkXCIsXCJlbWFpbFwiOlwia2VsbGVuYmVyZ0Bnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkRpYW5hIE1vZWNrXCIsXCJwb3NpdGlvblwiOlwiQW5hbHl0aWNzL0FjY291bnQgU3VwcG9ydFwiLFwiZW1haWxcIjpcImRtb2Vja0Bnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkt5bSBDbGV2ZWxhbmRcIixcInBvc2l0aW9uXCI6XCJBY2NvdW50IENvb3JkaW5hdG9yXCIsXCJlbWFpbFwiOlwia2NsZXZlbGFuZEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkphbWkgRWlkc3ZvbGRcIixcInBvc2l0aW9uXCI6XCJTb2NpYWwgTWVkaWEgQnVzaW5lc3MgTGVhZFwiLFwiZW1haWxcIjpcImplaWRzdm9sZEBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIlZhbmVzc2EgU2hhbmFoYW5cIixcInBvc2l0aW9uXCI6XCJBbmFseXRpY3NcIixcImVtYWlsXCI6XCJ2c2hhbmFoYW5AZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJBc2hsZXkgQ2xpbmVcIixcInBvc2l0aW9uXCI6XCJTb2NpYWwgTWVkaWEgU3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcImFjbGluZUBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIktlbGxpZSBBcmVuc1wiLFwicG9zaXRpb25cIjpcIlNvY2lhbCBNZWRpYSBBY2N0IE1hbmFnZXJcIixcImVtYWlsXCI6XCJrYXJlbnNAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJKYW1pZSBEYWRhbnRcIixcInBvc2l0aW9uXCI6XCJTb2NpYWwgQ29uc3VtZXIgQ3VzdG9tZXIgU2VydmljZVwiLFwiZW1haWxcIjpcImpkYWRhbnRAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJCcmlhbm5hIEpvbnNzb25cIixcInBvc2l0aW9uXCI6XCJTb2NpYWwgTWVkaWEgQ29tbXVuaXR5IE1hbmFnZXJcIixcImVtYWlsXCI6XCJiam9uc3NvbkBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkNhbWVyb24gSm9uc3NvblwiLFwicG9zaXRpb25cIjpcIkRpZ2l0YWwgU3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcImNqb25zc29uQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiTGF1cmVuIENvd2xlc1wiLFwicG9zaXRpb25cIjpcIkRpZ2l0YWwvU29jaWFsIFN0cmF0ZWdpc3RcIixcImVtYWlsXCI6XCJsY293bGVzQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiTWVsaXNzYSBBbmdlcnRcIixcInBvc2l0aW9uXCI6XCJTb2NpYWwgTWVkaWEgU3RyYXRlZ2lzdFwiLFwiZW1haWxcIjpcIm1hbmdlcnRAZ29sZHByLmNvbVwifSx7XCJuYW1lXCI6XCJBbGxpc29uIEhpbm9qb3NhXCIsXCJwb3NpdGlvblwiOlwiQ0ZPXCIsXCJlbWFpbFwiOlwiYWhpbm9qb3NhQGdvbGRwci5jb21cIn0se1wibmFtZVwiOlwiQ2FpdGxpbiBIYW5zb25cIixcInBvc2l0aW9uXCI6XCJBY2NvdW50IE1hbmFuZ2VyXCIsXCJlbWFpbFwiOlwiY2hhbnNvbkBnb2xkcHIuY29tXCJ9LHtcIm5hbWVcIjpcIkFuZHJlYSBaaXRvXCIsXCJwb3NpdGlvblwiOlwiQW5hbHl0aWNzXCIsXCJlbWFpbFwiOlwiYXppdG9AZ29sZHByLmNvbVwifV0sXCJibG9nXCI6e1wiX2lkXCI6XCI1OGFkZDY1ODVhYTU5YjEyYjcyOWUxMzNcIixcIm5hbWVcIjpcImJsb2dcIixcImNsaWVudEFjY2Vzc1wiOnRydWUsXCJlbnRpdGllc1wiOntcInRpdGxlXCI6e1wibmFtZVwiOlwidGl0bGVcIixcInR5cGVcIjpcIlRleHRcIn0sXCJkZXNjcmlwdGlvblwiOntcIm5hbWVcIjpcImRlc2NyaXB0aW9uXCIsXCJ0eXBlXCI6XCJUZXh0XCJ9LFwidGFnc1wiOntcIm5hbWVcIjpcInRhZ3NcIixcInR5cGVcIjpcIlRhZ3NcIn0sXCJpbWFnZVwiOntcIm5hbWVcIjpcImltYWdlXCIsXCJ0eXBlXCI6XCJJbWFnZVwifSxcImJsb2dcIjp7XCJuYW1lXCI6XCJibG9nXCIsXCJ0eXBlXCI6XCJCbG9nXCJ9fSxcImNsaWVudFwiOntcImlkXCI6XCI1OGFkZDQ0NTVhYTU5YjEyYjcyOWUxMzFcIixcIm5hbWVcIjpcIkdvbGQgUFJcIixcInByb2ZpbGVcIjpcImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9iYXNhbC8wZmZiNTA1MmU4NDE2MGZlMWEzYjBmNzM4Y2I5NWNjMS5qcGVnXCJ9LFwidXNlclwiOntcImlkXCI6XCI1N2Y3MzM5ZjVhYTU5YjIxM2M3Y2IzNjJcIixcIm5hbWVcIjpcImtldmluIG9sc29uXCIsXCJwaWN0dXJlXCI6XCJodHRwczovL2xoNi5nb29nbGV1c2VyY29udGVudC5jb20vLUc2Tk9PdHNqckF3L0FBQUFBQUFBQUFJL0FBQUFBQUFBRE13L0t0V0ZYbTB5Z0NZL3Bob3RvLmpwZ1wifSxcInVwZGF0ZWRfYXRcIjpcIjIwMTctMDQtMTFUMTk6MTc6MzYrMDA6MDBcIixcImNyZWF0ZWRfYXRcIjpcIjIwMTctMDItMjJUMTg6MjA6MDgrMDA6MDBcIixcImVudHJpZXNcIjpbe1wiX2lkXCI6XCI1OGVkMmM0MDVhYTU5YjE4ZDU1ZTVjZTNcIixcIm5hbWVcIjpcImJ1bGxkb2cgYXdhcmRcIixcImVudGl0aWVzXCI6e1widGl0bGVcIjp7XCJuYW1lXCI6XCJ0aXRsZVwiLFwidHlwZVwiOlwiVGV4dFwiLFwidmFsdWVcIjpcIkdPTEQgUFIgSE9OT1JFRCBXSVRIIFBSRVNUSUdJT1VTIEJVTExET0cgTUVESUEgUkVMQVRJT05TIEFXQVJEXCJ9LFwiZGVzY3JpcHRpb25cIjp7XCJuYW1lXCI6XCJkZXNjcmlwdGlvblwiLFwidHlwZVwiOlwiVGV4dFwiLFwidmFsdWVcIjpcIlRvcCBTb3V0aGVybiBDQSBQUiBGaXJtIFdpbnMgaW4gQmVzdCBVc2Ugb2YgYSBQZXJzb25hbGl0eS9DZWxlYnJpdHkgQ2F0ZWdvcnlcIn0sXCJ0YWdzXCI6e1wibmFtZVwiOlwidGFnc1wiLFwidHlwZVwiOlwiVGFnc1wiLFwidmFsdWVcIjpbXCJhd2FyZFwiXX0sXCJpbWFnZVwiOntcIm5hbWVcIjpcImltYWdlXCIsXCJ0eXBlXCI6XCJJbWFnZVwiLFwidmFsdWVcIjpcImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9iYXNhbC9sVmQ1V3prejJHQURsSDlPanBlazBIOEF6ZlR0V0JZd0pYZG4weUJVLmpwZWdcIn0sXCJibG9nXCI6e1wibmFtZVwiOlwiYmxvZ1wiLFwidHlwZVwiOlwiQmxvZ1wiLFwidmFsdWVcIjpcIjxwIGRpcj1cXFwibHRyXFxcIiBzdHlsZT1cXFwibGluZS1oZWlnaHQ6MS4yO21hcmdpbi10b3A6MHB0O21hcmdpbi1ib3R0b206MHB0O1xcXCI+PHNwYW4gc3R5bGU9XFxcImZvbnQtc2l6ZToxMXB0O2ZvbnQtZmFtaWx5OidIZWx2ZXRpY2EgTmV1ZSc7Y29sb3I6IzAwMDAwMDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2ZvbnQtd2VpZ2h0OjcwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO3RleHQtZGVjb3JhdGlvbjpub25lO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lO3doaXRlLXNwYWNlOnByZS13cmFwO1xcXCI+TmV3cG9ydCBCZWFjaCwgQ2FsaWYuIChNYXJjaCAyNywgMjAxNyk8L3NwYW4+PHNwYW4gc3R5bGU9XFxcImZvbnQtc2l6ZToxMXB0O2ZvbnQtZmFtaWx5OidIZWx2ZXRpY2EgTmV1ZSc7Y29sb3I6IzAwMDAwMDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2ZvbnQtd2VpZ2h0OjQwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO3RleHQtZGVjb3JhdGlvbjpub25lO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lO3doaXRlLXNwYWNlOnByZS13cmFwO1xcXCI+IOKAkyA8L3NwYW4+PGEgaHJlZj1cXFwiaHR0cDovL3d3dy5nb2xkcHIuY29tL1xcXCI+PHNwYW4gc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXFwiPkdPTEQgUFI8L3NwYW4+PC9hPjxzcGFuIHN0eWxlPVxcXCJ2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxcIj4sIDwvc3Bhbj48c3BhbiBzdHlsZT1cXFwiZm9udC1zaXplOjExcHQ7Zm9udC1mYW1pbHk6J0hlbHZldGljYSBOZXVlJztjb2xvcjojMDAwMDAwO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dmVydGljYWwtYWxpZ246YmFzZWxpbmU7d2hpdGUtc3BhY2U6cHJlLXdyYXA7XFxcIj5hIHRvcCBTb3V0aGVybiBDYWxpZm9ybmlhIHB1YmxpYyByZWxhdGlvbnMgYWdlbmN5IHNwZWNpYWxpemluZyBpbiBjb25zdW1lciBhbmQgd29tZW7igJlzIGhlYWx0aCwgYmVhdXR5LCBsaWZlc3R5bGUgYW5kIG1lZGljYWwgdGVjaG5vbG9neSwgd2FzIGhvbm9yZWQgd2l0aCBhIDIwMTcgPC9zcGFuPjxhIGhyZWY9XFxcImh0dHBzOi8vd3d3LmJ1bGxkb2dyZXBvcnRlci5jb20vXFxcIj48c3BhbiBzdHlsZT1cXFwidmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcXCI+QnVsbGRvZzwvc3Bhbj48L2E+PHNwYW4gc3R5bGU9XFxcImZvbnQtc2l6ZToxMXB0O2ZvbnQtZmFtaWx5OidIZWx2ZXRpY2EgTmV1ZSc7Y29sb3I6IzAwMDAwMDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2ZvbnQtd2VpZ2h0OjQwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO3RleHQtZGVjb3JhdGlvbjpub25lO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lO3doaXRlLXNwYWNlOnByZS13cmFwO1xcXCI+IE1lZGlhIFJlbGF0aW9ucyBBd2FyZCBmb3IgaXRzIHN1Y2Nlc3NmdWwgUFIgY2FtcGFpZ24gaW4gdGhlIEJlc3QgVXNlIG9mIGEgUGVyc29uYWxpdHkvQ2VsZWJyaXR5IGNhdGVnb3J5PC9zcGFuPjxzcGFuIHN0eWxlPVxcXCJmb250LXNpemU6MTFwdDtmb250LWZhbWlseTonSGVsdmV0aWNhIE5ldWUnO2NvbG9yOiMzNDM0MzQ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtmb250LXdlaWdodDo0MDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDt0ZXh0LWRlY29yYXRpb246bm9uZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTt3aGl0ZS1zcGFjZTpwcmUtd3JhcDtcXFwiPi4gVGhlIDwvc3Bhbj48c3BhbiBzdHlsZT1cXFwiZm9udC1zaXplOjExcHQ7Zm9udC1mYW1pbHk6J0hlbHZldGljYSBOZXVlJztjb2xvcjojMzQzNDM0O2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc3R5bGU6aXRhbGljO2ZvbnQtdmFyaWFudDpub3JtYWw7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dmVydGljYWwtYWxpZ246YmFzZWxpbmU7d2hpdGUtc3BhY2U6cHJlLXdyYXA7XFxcIj5GZWFyIE5vIE1pcnJvcjogPC9zcGFuPjxhIGhyZWY9XFxcImh0dHA6Ly93d3cuY29vbHNjdWxwdGluZy5jb20vXFxcIj48c3BhbiBzdHlsZT1cXFwidmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcXCI+Q29vbHNjdWxwdGluZzwvc3Bhbj48L2E+PHNwYW4gc3R5bGU9XFxcImZvbnQtc2l6ZToxMXB0O2ZvbnQtZmFtaWx5OidIZWx2ZXRpY2EgTmV1ZSc7Y29sb3I6IzM0MzQzNDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2ZvbnQtd2VpZ2h0OjQwMDtmb250LXN0eWxlOml0YWxpYztmb250LXZhcmlhbnQ6bm9ybWFsO3RleHQtZGVjb3JhdGlvbjpub25lO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lO3doaXRlLXNwYWNlOnByZS13cmFwO1xcXCI+IGFuZCBNb2xseSBTaW1zPC9zcGFuPjxzcGFuIHN0eWxlPVxcXCJmb250LXNpemU6MTFwdDtmb250LWZhbWlseTonSGVsdmV0aWNhIE5ldWUnO2NvbG9yOiMzNDM0MzQ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtmb250LXdlaWdodDo0MDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDt0ZXh0LWRlY29yYXRpb246bm9uZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTt3aGl0ZS1zcGFjZTpwcmUtd3JhcDtcXFwiPiBjYW1wYWlnbiBpbmNsdWRlZCBzdHJhdGVnaWVzIGZvciBjb25zdW1lciBhd2FyZW5lc3MsIGVkdWNhdGlvbiBhbmQgZHJpdmluZyB0cmlhbCB0aHJvdWdoIHRyYWRpdGlvbmFsIHB1YmxpY2l0eSBhbmQgc29jaWFsIG1lZGlhIGVuZ2FnZW1lbnQuPC9zcGFuPjwvcD48cD48YiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6bm9ybWFsO1xcXCIgaWQ9XFxcImRvY3MtaW50ZXJuYWwtZ3VpZC1iNWMxZjY2OC01ZTc0LTU2NTQtNDUwZC1lMDgzNjJmOGY1OTlcXFwiPjxicj48L2I+PC9wPjxwIGRpcj1cXFwibHRyXFxcIiBzdHlsZT1cXFwibGluZS1oZWlnaHQ6MS4yO21hcmdpbi10b3A6MHB0O21hcmdpbi1ib3R0b206MHB0O1xcXCI+PHNwYW4gc3R5bGU9XFxcImZvbnQtc2l6ZToxMXB0O2ZvbnQtZmFtaWx5OidIZWx2ZXRpY2EgTmV1ZSc7Y29sb3I6IzAwMDAwMDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2ZvbnQtd2VpZ2h0OjQwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO3RleHQtZGVjb3JhdGlvbjpub25lO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lO3doaXRlLXNwYWNlOnByZS13cmFwO1xcXCI+4oCcV2UgYXJlIGhvbm9yZWQgdG8gcmVjZWl2ZSB0aGlzIHByZXN0aWdpb3VzIGluZHVzdHJ5IGF3YXJkIGZvciBleGNlbGxlbmNlLCBjcmVhdGl2aXR5IGFuZCBhY2hpZXZlbWVudCA8L3NwYW4+PHNwYW4gc3R5bGU9XFxcImZvbnQtc2l6ZToxMXB0O2ZvbnQtZmFtaWx5OidIZWx2ZXRpY2EgTmV1ZSc7Y29sb3I6IzFkMWUxZjtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2ZvbnQtd2VpZ2h0OjQwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO3RleHQtZGVjb3JhdGlvbjpub25lO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lO3doaXRlLXNwYWNlOnByZS13cmFwO1xcXCI+aW4gbWVkaWEgcmVsYXRpb25zLjwvc3Bhbj48c3BhbiBzdHlsZT1cXFwiZm9udC1zaXplOjExcHQ7Zm9udC1mYW1pbHk6J0hlbHZldGljYSBOZXVlJztjb2xvcjojMDAwMDAwO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dmVydGljYWwtYWxpZ246YmFzZWxpbmU7d2hpdGUtc3BhY2U6cHJlLXdyYXA7XFxcIj4gVGhpcyBhd2FyZCBpcyBhIHRlc3RhbWVudCB0byB0aGUgY3JlYXRpdmUgYW5kIHBhc3Npb25hdGUgdGVhbSBvZiBwcm9mZXNzaW9uYWxzIGF0IEdPTEQgd2hvIHdvcmsgdGlyZWxlc3NseSB0byBjb21iaW5lIGlubm92YXRpdmUgY29tbXVuaWNhdGlvbnMgc3RyYXRlZ2llcyB3aXRoIGZsYXdsZXNzIGV4ZWN1dGlvbiB0byBkcml2ZSBtZWFzdXJhYmxlIHJlc3VsdHMgZm9yIG91ciBjbGllbnRzLOKAnSBzYWlkIGFnZW5jeSBmb3VuZGVyLCBTaGFyaSBHb2xkLiDigJxHT0xEIGlzIGEgUFIgZmlybSB0aGF0IHVuZGVyc3RhbmRzPC9zcGFuPjxzcGFuIHN0eWxlPVxcXCJmb250LXNpemU6MTZwdDtmb250LWZhbWlseTpUaW1lcztjb2xvcjojMDAwMDAwO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dmVydGljYWwtYWxpZ246YmFzZWxpbmU7d2hpdGUtc3BhY2U6cHJlLXdyYXA7XFxcIj4gPC9zcGFuPjxzcGFuIHN0eWxlPVxcXCJmb250LXNpemU6MTFwdDtmb250LWZhbWlseTonSGVsdmV0aWNhIE5ldWUnO2NvbG9yOiMwMDAwMDA7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtmb250LXdlaWdodDo0MDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDt0ZXh0LWRlY29yYXRpb246bm9uZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTt3aGl0ZS1zcGFjZTpwcmUtd3JhcDtcXFwiPndvbWVuIC0tPC9zcGFuPjxzcGFuIHN0eWxlPVxcXCJmb250LXNpemU6MTZwdDtmb250LWZhbWlseTpUaW1lcztjb2xvcjojMDAwMDAwO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dmVydGljYWwtYWxpZ246YmFzZWxpbmU7d2hpdGUtc3BhY2U6cHJlLXdyYXA7XFxcIj4gPC9zcGFuPjxzcGFuIHN0eWxlPVxcXCJmb250LXNpemU6MTFwdDtmb250LWZhbWlseTonSGVsdmV0aWNhIE5ldWUnO2NvbG9yOiMwMDAwMDA7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtmb250LXdlaWdodDo0MDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDt0ZXh0LWRlY29yYXRpb246bm9uZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTt3aGl0ZS1zcGFjZTpwcmUtd3JhcDtcXFwiPmhvdyB0aGV5IGNvbWUgdG8gdHJ1c3QgYnJhbmRzIGFuZCB3aGF0IGluZmx1ZW5jZXMgdGhlaXIgcHVyY2hhc2UgYmVoYXZpb3IuIFRoaXMga25vd2xlZGdlIHdhcyBhcHBsaWVkIHRvIGFsbCB0aGUgd29yayBvdXIgdGVhbSBkZWxpdmVyZWQgZm9yIENvb2xTY3VscHRpbmcgaW5jbHVkaW5nIHRoaXMgbWVtb3JhYmxlIGNhbXBhaWduIHdpdGggTW9sbHkgU2ltcyzigJ08L3NwYW4+PHNwYW4gc3R5bGU9XFxcImZvbnQtc2l6ZToxNnB0O2ZvbnQtZmFtaWx5OlRpbWVzO2NvbG9yOiMwMDAwMDA7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtmb250LXdlaWdodDo0MDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDt0ZXh0LWRlY29yYXRpb246bm9uZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTt3aGl0ZS1zcGFjZTpwcmUtd3JhcDtcXFwiPiA8L3NwYW4+PHNwYW4gc3R5bGU9XFxcImZvbnQtc2l6ZToxMXB0O2ZvbnQtZmFtaWx5OidIZWx2ZXRpY2EgTmV1ZSc7Y29sb3I6IzAwMDAwMDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2ZvbnQtd2VpZ2h0OjQwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO3RleHQtZGVjb3JhdGlvbjpub25lO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lO3doaXRlLXNwYWNlOnByZS13cmFwO1xcXCI+c2hlIGNvbnRpbnVlZC4gPC9zcGFuPjwvcD48cD48YiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6bm9ybWFsO1xcXCI+PGJyPjwvYj48L3A+PHAgZGlyPVxcXCJsdHJcXFwiIHN0eWxlPVxcXCJsaW5lLWhlaWdodDoxLjI7bWFyZ2luLXRvcDowcHQ7bWFyZ2luLWJvdHRvbTowcHQ7XFxcIj48c3BhbiBzdHlsZT1cXFwiZm9udC1zaXplOjExcHQ7Zm9udC1mYW1pbHk6J0hlbHZldGljYSBOZXVlJztjb2xvcjojMDAwMDAwO2JhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtmb250LXdlaWdodDo0MDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDt0ZXh0LWRlY29yYXRpb246bm9uZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTt3aGl0ZS1zcGFjZTpwcmUtd3JhcDtcXFwiPlRoZSBCdWxsZG9nIE1lZGlhIFJlbGF0aW9ucyBBd2FyZHMgYXR0cmFjdCBzb21lIG9mIHRoZSBiZXN0IHdvcmsgZnJvbSBodW5kcmVkcyBvZiB0b3AgUFIgZmlybXMuIFRoZXkgYXJlIGp1ZGdlZCBieSBhd2FyZC13aW5uaW5nIGpvdXJuYWxpc3RzIGluY2x1ZGluZyBhIFB1bGl0emVyIFByaXplIHdpbm5lci4gVGhpcyB5ZWFy4oCZcyBqdWRnZXMgY29tZSBmcm9tIHNldmVyYWwgZGlmZmVyZW50IG1lZGlhIG91dGxldHMgaW5jbHVkaW5nJm5ic3A7PC9zcGFuPjxzcGFuIHN0eWxlPVxcXCJmb250LXNpemU6MTFwdDtmb250LWZhbWlseTonSGVsdmV0aWNhIE5ldWUnO2NvbG9yOiMwMDAwMDA7YmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO2ZvbnQtd2VpZ2h0OjQwMDtmb250LXN0eWxlOml0YWxpYztmb250LXZhcmlhbnQ6bm9ybWFsO3RleHQtZGVjb3JhdGlvbjpub25lO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lO3doaXRlLXNwYWNlOnByZS13cmFwO1xcXCI+VGhlIFdhc2hpbmd0b24gUG9zdCwgVVNBIFRvZGF5LCBGb3JiZXMgYW5kIFRoZSBPcmVnb25pYW4uIDwvc3Bhbj48L3A+PHA+PGIgc3R5bGU9XFxcImZvbnQtd2VpZ2h0Om5vcm1hbDtcXFwiPjxicj48L2I+PC9wPjxwIGRpcj1cXFwibHRyXFxcIiBzdHlsZT1cXFwibGluZS1oZWlnaHQ6MS4yO21hcmdpbi10b3A6MHB0O21hcmdpbi1ib3R0b206MHB0O1xcXCI+PHNwYW4gc3R5bGU9XFxcImZvbnQtc2l6ZToxMXB0O2ZvbnQtZmFtaWx5OidIZWx2ZXRpY2EgTmV1ZSc7Y29sb3I6IzAwMDAwMDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2ZvbnQtd2VpZ2h0OjQwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO3RleHQtZGVjb3JhdGlvbjpub25lO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lO3doaXRlLXNwYWNlOnByZS13cmFwO1xcXCI+SW4gYWRkaXRpb24gdG8gdGhlIEJ1bGxkb2cgTWVkaWEgUmVsYXRpb25zIEF3YXJkLCBHT0xEIFBSIGhhcyBiZWVuIHJlY29nbml6ZWQgZm9yIGl0cyBvdXRzdGFuZGluZyB3b3JrIGluIHB1YmxpYyByZWxhdGlvbnMsIGNvbW11bmljYXRpb25zLCBzb2NpYWwgYW5kIGluZmx1ZW5jZXIgbWFya2V0aW5nIHRocm91Z2ggYWNjb2xhZGVzIHRoYXQgaW5jbHVkZTogPC9zcGFuPjxzcGFuIHN0eWxlPVxcXCJmb250LXNpemU6MTFwdDtmb250LWZhbWlseTonSGVsdmV0aWNhIE5ldWUnO2NvbG9yOiMwMDAwMDA7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtmb250LXdlaWdodDo0MDA7Zm9udC1zdHlsZTppdGFsaWM7Zm9udC12YXJpYW50Om5vcm1hbDt0ZXh0LWRlY29yYXRpb246bm9uZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTt3aGl0ZS1zcGFjZTpwcmUtd3JhcDtcXFwiPlBSIE5ld3PigJk8L3NwYW4+PHNwYW4gc3R5bGU9XFxcImZvbnQtc2l6ZToxMXB0O2ZvbnQtZmFtaWx5OidIZWx2ZXRpY2EgTmV1ZSc7Y29sb3I6IzAwMDAwMDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2ZvbnQtd2VpZ2h0OjQwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO3RleHQtZGVjb3JhdGlvbjpub25lO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lO3doaXRlLXNwYWNlOnByZS13cmFwO1xcXCI+IERpZ2l0YWwgUFIgQXdhcmQsIDwvc3Bhbj48c3BhbiBzdHlsZT1cXFwiZm9udC1zaXplOjExcHQ7Zm9udC1mYW1pbHk6J0hlbHZldGljYSBOZXVlJztjb2xvcjojMDAwMDAwO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc3R5bGU6aXRhbGljO2ZvbnQtdmFyaWFudDpub3JtYWw7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dmVydGljYWwtYWxpZ246YmFzZWxpbmU7d2hpdGUtc3BhY2U6cHJlLXdyYXA7XFxcIj5QUiBOZXdz4oCZPC9zcGFuPjxzcGFuIHN0eWxlPVxcXCJmb250LXNpemU6MTFwdDtmb250LWZhbWlseTonSGVsdmV0aWNhIE5ldWUnO2NvbG9yOiMwMDAwMDA7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtmb250LXdlaWdodDo0MDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDt0ZXh0LWRlY29yYXRpb246bm9uZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTt3aGl0ZS1zcGFjZTpwcmUtd3JhcDtcXFwiPiBBZ2VuY3kgRWxpdGUgYW5kIFBsYXRpbnVtIFBSIEF3YXJkcy48L3NwYW4+PC9wPjxwPjxiIHN0eWxlPVxcXCJmb250LXdlaWdodDpub3JtYWw7XFxcIj48YnI+PC9iPjwvcD48cCBkaXI9XFxcImx0clxcXCIgc3R5bGU9XFxcImxpbmUtaGVpZ2h0OjEuMjttYXJnaW4tdG9wOjBwdDttYXJnaW4tYm90dG9tOjBwdDtcXFwiPjxzcGFuIHN0eWxlPVxcXCJmb250LXNpemU6MTFwdDtmb250LWZhbWlseTonSGVsdmV0aWNhIE5ldWUnO2NvbG9yOiMzNDM0MzQ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtmb250LXdlaWdodDo3MDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lO3doaXRlLXNwYWNlOnByZS13cmFwO1xcXCI+QWJvdXQgQnVsbGRvZyBSZXBvcnRlcjwvc3Bhbj48L3A+PHAgZGlyPVxcXCJsdHJcXFwiIHN0eWxlPVxcXCJsaW5lLWhlaWdodDoxLjI7bWFyZ2luLXRvcDowcHQ7bWFyZ2luLWJvdHRvbTowcHQ7XFxcIj48c3BhbiBzdHlsZT1cXFwiZm9udC1zaXplOjExcHQ7Zm9udC1mYW1pbHk6J0hlbHZldGljYSBOZXVlJztjb2xvcjojMzQzNDM0O2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dmVydGljYWwtYWxpZ246YmFzZWxpbmU7d2hpdGUtc3BhY2U6cHJlLXdyYXA7XFxcIj5CdWxsZG9nIFJlcG9ydGVyIHByb3ZpZGVzIG5ld3MgYW5kIGluc2lnaHRzIHRvIHB1YmxpYyByZWxhdGlvbnMgYW5kIGNvcnBvcmF0ZSBjb21tdW5pY2F0aW9ucyBwcm9mZXNzaW9uYWxzIHdpdGggdGhlIG1pc3Npb24gb2YgaGVscGluZyB0aGVzZSBwcmFjdGl0aW9uZXJzIGFjaGlldmUgc3VwZXJpb3IgcGVyZm9ybWFuY2UuIEJ1bGxkb2cgUmVwb3J0ZXIgcHVibGlzaGVzIGEgZGFpbHkgbmV3c2xldHRlciwgd2l0aCBhIHN1bW1hcnkgb2YgcmVsZXZhbnQgbmV3cyBjYWxsZWQgdGhlIDwvc3Bhbj48YSBocmVmPVxcXCJodHRwOi8vdHJ5LmJ1bGxkb2dyZXBvcnRlci5jb20vc2lnbi11cC1mb3ItYnVsbGRvZy1yZXBvcnRlcnMtZGFpbHktZG9nLTJcXFwiPjxzcGFuIHN0eWxlPVxcXCJ2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxcIj5EYWlseSDigJlEb2c8L3NwYW4+PC9hPjxzcGFuIHN0eWxlPVxcXCJmb250LXNpemU6MTFwdDtmb250LWZhbWlseTonSGVsdmV0aWNhIE5ldWUnO2NvbG9yOiMzNDM0MzQ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtmb250LXdlaWdodDo0MDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDt0ZXh0LWRlY29yYXRpb246bm9uZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTt3aGl0ZS1zcGFjZTpwcmUtd3JhcDtcXFwiPiBhbmQgcnVucyBhbiBpbmR1c3RyeSBhd2FyZHMgcHJvZ3JhbSDigJR0aGUgQnVsbGRvZyBBd2FyZHPigJR0byByZWNvZ25pemUgZXhjZWxsZW5jZSBpbiBwdWJsaWMgcmVsYXRpb25zIGFuZCBjb21tdW5pY2F0aW9ucy48L3NwYW4+PC9wPjxwPjxiIHN0eWxlPVxcXCJmb250LXdlaWdodDpub3JtYWw7XFxcIj48YnI+PC9iPjwvcD48cCBkaXI9XFxcImx0clxcXCIgc3R5bGU9XFxcImxpbmUtaGVpZ2h0OjEuMjttYXJnaW4tdG9wOjBwdDttYXJnaW4tYm90dG9tOjBwdDtcXFwiPjxzcGFuIHN0eWxlPVxcXCJmb250LXNpemU6MTFwdDtmb250LWZhbWlseTonSGVsdmV0aWNhIE5ldWUnO2NvbG9yOiMwMDAwMDA7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtmb250LXdlaWdodDo3MDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lO3doaXRlLXNwYWNlOnByZS13cmFwO1xcXCI+QWJvdXQgR09MRCBQUjwvc3Bhbj48L3A+PHA+PC9wPjxwIGRpcj1cXFwibHRyXFxcIiBzdHlsZT1cXFwibGluZS1oZWlnaHQ6MS4yO21hcmdpbi10b3A6MHB0O21hcmdpbi1ib3R0b206MHB0O1xcXCI+PGEgaHJlZj1cXFwiaHR0cDovL3d3dy5nb2xkcHIuY29tL1xcXCI+PHNwYW4gc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXFwiPkdPTEQgUFI8L3NwYW4+PC9hPjxzcGFuIHN0eWxlPVxcXCJ2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxcIj4gPC9zcGFuPjxzcGFuIHN0eWxlPVxcXCJmb250LXNpemU6MTFwdDtmb250LWZhbWlseTonSGVsdmV0aWNhIE5ldWUnO2NvbG9yOiMyYTJhMmE7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtmb250LXdlaWdodDo0MDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDt0ZXh0LWRlY29yYXRpb246bm9uZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTt3aGl0ZS1zcGFjZTpwcmUtd3JhcDtcXFwiPihHT0xEKSwgZXN0YWJsaXNoZWQgaW4gMjAwMSwgaGFzIGJlZW4gYW4gaW5kZXBlbmRlbnQgYW5kIGhpZ2hseSBpbmZsdWVudGlhbCBQUiBhbmQgc29jaWFsIGNvbW11bmljYXRpb25zIGFnZW5jeSByZXByZXNlbnRpbmcgYnJhbmRzIHRoYXQgZm9jdXMgb24gdW5kZXJzdGFuZGluZywgcmVhY2hpbmcgYW5kIG1vdGl2YXRpbmcgY29uc3VtZXIgcHVyY2hhc2UgYmVoYXZpb3Igd2l0aCBzcGVjaWZpYyBleHBlcnRpc2UgaW4gZW5nYWdpbmcgd29tZW4uIEdPTEQgc3BlY2lhbGl6ZXMgaW4gaW50ZWdyYXRpbmcgYnJhbmQgY29tbXVuaWNhdGlvbnMgcHJvZ3JhbXMgYWNyb3NzIHRyYWRpdGlvbmFsLCBzb2NpYWwgYW5kIGRpZ2l0YWwgbWVkaWEgZm9yIHNvbWUgb2YgdGhlIHdvcmxkJ3MgbW9zdCBzaWduaWZpY2FudCBhbmQgc3VjY2Vzc2Z1bCBicmFuZHMgaW4gY29uc3VtZXIgaGVhbHRoLCBiZWF1dHksIG1lZGljYWwgdGVjaG5vbG9neSwgcGhhcm1hLCBhdXRvbW90aXZlLCBsaWZlc3R5bGUgYW5kIGZvb2QgYW5kIGJldmVyYWdlIHNlY3RvcnMuIEZvciBtb3JlIGluZm9ybWF0aW9uLCB2aXNpdDogPC9zcGFuPjxzcGFuIHN0eWxlPVxcXCJ0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgZm9udC1zaXplOiAxMXB0OyBmb250LWZhbWlseTogJnF1b3Q7SGVsdmV0aWNhIE5ldWUmcXVvdDs7IGNvbG9yOiByZ2IoMCwgMCwgMjU1KTsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IGZvbnQtd2VpZ2h0OiA0MDA7IGZvbnQtc3R5bGU6IG5vcm1hbDsgZm9udC12YXJpYW50LWxpZ2F0dXJlczogbm9ybWFsOyBmb250LXZhcmlhbnQtY2Fwczogbm9ybWFsOyB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXFwiPjxhIGhyZWY9XFxcImh0dHA6Ly93d3cuZ29sZHByLmNvbS9cXFwiIHN0eWxlPVxcXCJ0ZXh0LWRlY29yYXRpb246bm9uZTtcXFwiPmh0dHA6Ly93d3cuZ29sZHByLmNvbS88L2E+PC9zcGFuPjwvcD48ZGl2Pjxicj48L2Rpdj5cIn19LFwic3RydWN0dXJlXCI6e1wiaWRcIjpcIjU4YWRkNjU4NWFhNTliMTJiNzI5ZTEzM1wiLFwibmFtZVwiOlwiYmxvZ1wifSxcImNsaWVudFwiOntcImlkXCI6XCI1OGFkZDQ0NTVhYTU5YjEyYjcyOWUxMzFcIixcIm5hbWVcIjpcIkdvbGQgUFJcIixcInByb2ZpbGVcIjpcImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9iYXNhbC8wZmZiNTA1MmU4NDE2MGZlMWEzYjBmNzM4Y2I5NWNjMS5qcGVnXCJ9LFwidXNlclwiOntcImlkXCI6XCI1N2Y3MzM5ZjVhYTU5YjIxM2M3Y2IzNjJcIixcIm5hbWVcIjpcImtldmluIG9sc29uXCIsXCJwaWN0dXJlXCI6XCJodHRwczovL2xoNi5nb29nbGV1c2VyY29udGVudC5jb20vLUc2Tk9PdHNqckF3L0FBQUFBQUFBQUFJL0FBQUFBQUFBRE13L0t0V0ZYbTB5Z0NZL3Bob3RvLmpwZ1wifSxcInVwZGF0ZWRfYXRcIjpcIjIwMTctMDQtMTFUMjA6MTQ6MjcrMDA6MDBcIixcImNyZWF0ZWRfYXRcIjpcIjIwMTctMDQtMTFUMTk6MTk6MjgrMDA6MDBcIixcImFjdGl2ZVwiOnRydWV9XX19OyIsIkluZGV4ID1cblxuICB2YWxzOiBbXVxuICBzZWN0aW9uOiAnaG9tZSdcbiAgdmlzOiBmYWxzZVxuICBjYWNoZTpcbiAgICB3aW5kb3c6IHdpbmRvd1xuICAgIHN0aWNraWVkOiBmYWxzZVxuICAgIGxheGluOiB7fVxuXG4gIGk6IC0+XG5cbiAgICBpZiBkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSBpcyAnd3d3LmdvbGRwci5jb20nIGFuZCBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCBpc250ICdodHRwczonXG4gICAgICBpZiBkb2N1bWVudC5sb2NhdGlvbi5oYXNoIGlzbnQgXCJcIlxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiA9ICdodHRwczovL3d3dy5nb2xkcHIuY29tLycgKyBkb2N1bWVudC5sb2NhdGlvbi5oYXNoXG4gICAgICBlbHNlXG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gJ2h0dHBzOi8vd3d3LmdvbGRwci5jb20vJ1xuXG4gICAgaWYgZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUgaXMgJ2dvbGRwci5jb20nXG4gICAgICBpZiBkb2N1bWVudC5sb2NhdGlvbi5oYXNoIGlzbnQgXCJcIlxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiA9ICdodHRwczovL3d3dy5nb2xkcHIuY29tLycgKyBkb2N1bWVudC5sb2NhdGlvbi5oYXNoXG4gICAgICBlbHNlXG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gJ2h0dHBzOi8vd3d3LmdvbGRwci5jb20vJ1xuICAgIFxuXG4gICAgSW5kZXguY2FjaGUud2luZG93ID0gJCh3aW5kb3cpXG4gICAgaWYgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlIGlzbnQgdW5kZWZpbmVkXG4gICAgICBJbmRleC52aXMgPSBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGVcbiAgICAgIHNldEludGVydmFsIEluZGV4LnZpc2libGUsIDIwMFxuXG5cbiAgICBpZiBJbmRleC5jYWNoZS53aW5kb3cud2lkdGgoKSA+IDEwMDBcbiAgICAgIHNldEludGVydmFsIEluZGV4LmhlYWRlciwgNTBcblxuICAgIEluZGV4LmxheGNhY2hlKClcbiAgICBzZXRJbnRlcnZhbCBJbmRleC5jaGVjaywgMTAwXG4gICAgc2V0SW50ZXJ2YWwgSW5kZXgubWVudSwgNTAwXG5cbiAgICBJbmRleC5oYW5kbGVycygpXG4gICAgY29uc29sZS5sb2cgJ0luZGV4LmkoKSdcblxuICAgIGlmIGRvY3VtZW50LmxvY2F0aW9uLmhhc2ggaXNudCAnJ1xuICAgICAgJCgnaHRtbCwgYm9keScpLnNjcm9sbFRvIFwiI3tkb2N1bWVudC5sb2NhdGlvbi5oYXNofVwiLFxuICAgICAgICBkdXJhdGlvbjogNTBcbiAgICAgICAgb2Zmc2V0OiAtNjBcblxuICB2aXNpYmxlOiAtPlxuICAgIGlmIEluZGV4LnZpcyBpc250IGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZVxuICAgICAgSW5kZXgudmlzID0gZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlXG4gICAgICBfLm9mZiAnLmJsdWVDaXJjbGUnXG4gICAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAgIF8ub24gJy5ibHVlQ2lyY2xlJ1xuICAgICAgLCAxMFxuXG4gIGhhbmRsZXJzOiAtPlxuXG4gICAgJCgnXG4gICAgICBoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IGEub3B0aW9uLCAubW9iaWxlID4gLmlubmVyID4gLm1lbnUgPiBhLm9wdGlvbixcbiAgICAgIGhlYWRlciA+IC5pbm5lciBhLmxvZ29cbiAgICAnKS5jbGljayBJbmRleC5vcHRpb25cbiAgICAkKCcuYnVyZ2VyJykuY2xpY2sgSW5kZXguYnVyZ2VyXG5cbiAgYnVyZ2VyOiAtPlxuICAgIF8uc3dhcCAnLm1vYmlsZSwgLmJ1cmdlciwgLmJ1cmdlciA+IC5pbm5lciA+IC5tZW51J1xuXG4gIG9wdGlvbjogKGV2ZW50KSAtPlxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgaGFzaCA9ICQodGhpcykuZGF0YSAnYW5jaG9yJ1xuICAgIF8ub2ZmICdoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IC5vcHRpb24sIC5tb2JpbGUgPiAuaW5uZXIgPiAubWVudSA+IC5vcHRpb24nXG4gICAgXy5vZmYgJy5tb2JpbGUsIC5idXJnZXInXG4gICAgc2V0VGltZW91dCAtPlxuICAgICAgJCgnaHRtbCwgYm9keScpLnNjcm9sbFRvIFwiIyN7aGFzaH1cIixcbiAgICAgICAgZHVyYXRpb246IDUwXG4gICAgICAgIG9mZnNldDogLTYwXG4gICAgICBsb2NhdGlvbi5oYXNoID0gaGFzaFxuICAgICwgMjAwXG5cbiAgaGVhZGVyOiAtPlxuXG4gICAgc3RpY2t5U3BvdCA9IDMwMFxuXG4gICAgaWYgSW5kZXguY2FjaGUud2luZG93LnNjcm9sbFRvcCgpID4gc3RpY2t5U3BvdCBhbmQgSW5kZXguY2FjaGUuc3RpY2tpZWQgaXMgZmFsc2VcbiAgICAgIF8ub24gJyNzdGlja3knXG4gICAgICBJbmRleC5jYWNoZS5zdGlja2llZCA9IHRydWVcblxuICAgIGlmIEluZGV4LmNhY2hlLndpbmRvdy5zY3JvbGxUb3AoKSA8IHN0aWNreVNwb3QgYW5kIEluZGV4LmNhY2hlLnN0aWNraWVkIGlzIHRydWVcbiAgICAgIF8ub2ZmICcjc3RpY2t5J1xuICAgICAgSW5kZXguY2FjaGUuc3RpY2tpZWQgPSBvZmZcblxuICBtZW51OiAtPlxuXG4gICAgJCgnLnNlY3Rpb24nKS5lYWNoIChpLCBlbCkgLT5cbiAgICAgIHNlY3Rpb24gPSAkKGVsKS5kYXRhICdzZWN0aW9uJ1xuICAgICAgaWYgSW5kZXguaW5WaWV3cG9ydCBlbFxuICAgICAgICBfLm9mZiAnaGVhZGVyID4gLmlubmVyID4gLm1lbnUgPiAub3B0aW9uLCAubW9iaWxlID4gLmlubmVyID4gLm1lbnUgPiAub3B0aW9uJ1xuICAgICAgICBfLm9uIFwiLm9wdGlvbl8je3NlY3Rpb259XCJcbiAgICAgICAgcmV0dXJuIHRydWVcblxuICBsYXhjYWNoZTogLT5cbiAgICAkKCcubGF4aW4nKS5lYWNoIChpLCBlbCkgLT5cbiAgICAgIEluZGV4LmNhY2hlLmxheGluW2ldID0gZWxcblxuICBjaGVjazogLT5cbiAgICBmb3IgaSwgZWwgb2YgSW5kZXguY2FjaGUubGF4aW5cblxuICAgICAgaWYgSW5kZXguaW5WaWV3cG9ydCBlbFxuICAgICAgICBbcGVyYywgZGlmZl0gPSBJbmRleC52aWV3YWJsZSBlbFxuICAgICAgICBqZWwgPSAkKGVsKVxuXG4gICAgICAgIHRocmVzaCA9IGplbC5kYXRhICd0aHJlc2gnXG4gICAgICAgIHRocmVzaCA9IDUwIGlmIHRocmVzaCBpcyB1bmRlZmluZWRcblxuICAgICAgICBpZiBwZXJjID4gdGhyZXNoIGFuZCBqZWwuaGFzQ2xhc3MgJ29mZidcbiAgICAgICAgICBfLm9uIGplbFxuICAgICAgICBpZiBwZXJjIDwgdGhyZXNoIGFuZCBqZWwuaGFzQ2xhc3MgJ29uJ1xuICAgICAgICAgIF8ub2ZmIGplbFxuXG4gICAgICAgICMjI1xuICAgICAgICBpZiBJbmRleC5jYWNoZS53aW5kb3cud2lkdGgoKSA+IDEwMDBcbiAgICAgICAgICBpZiBqZWwuaGFzQ2xhc3MgJ2xheGluX3ZlcnQnXG4gICAgICAgICAgICB2YWwgPSBNYXRoLnJvdW5kKGRpZmYpXG4gICAgICAgICAgICAjdmFsID0gTWF0aC5yb3VuZChkaWZmKVxuICAgICAgICAgICAgaWYgSW5kZXgudmFscz9baV0gaXNudCB2YWwqM1xuICAgICAgICAgICAgICBqZWwuZmluZCgnLmlubmVyOmZpcnN0JykuY3NzICd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZTNkKDAsICN7dmFsKjN9cHgsIDBweClcIlxuICAgICAgICAgICAgICBqZWwuZmluZCgnLm92ZXJsYXknKS5jc3MgJ3RyYW5zZm9ybScsIFwidHJhbnNsYXRlM2QoMCwgI3t2YWwqMn1weCwgMHB4KVwiXG4gICAgICAgICAgICAgIGplbC5maW5kKCcub3ZlcmxheSA+IC5pbm5lcicpLmNzcyAndHJhbnNmb3JtJywgXCJ0cmFuc2xhdGUzZCgwLCAje3ZhbC81fXB4LCAwcHgpXCJcbiAgICAgICAgICAgICAgSW5kZXgudmFsc1tpXSA9IHZhbCozXG4gICAgICAgICMjI1xuICAgXG4gIGluVmlld3BvcnQ6IChlbCkgLT5cblxuICAgIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgcmV0dXJuKFxuICAgICAgKHJlY3QudG9wID49IDAgfHwgcmVjdC5ib3R0b20gPj0gMCkgJiZcbiAgICAgIChyZWN0LnRvcCA8PSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0KVxuICAgIClcblxuICB2aWV3YWJsZTogKGVsKSAtPlxuICAgIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGhlaWdodCA9IHJlY3QuYm90dG9tLXJlY3QudG9wXG5cbiAgICBlbE1pZGRsZSA9IHJlY3QudG9wICsgaGVpZ2h0LzJcbiAgICB3aW5NaWRkbGUgPSB3aW5kb3cuaW5uZXJIZWlnaHQvMlxuICAgIG1heCA9IHdpbmRvdy5pbm5lckhlaWdodC8yICsgaGVpZ2h0LzJcbiAgICBkaWZmID0gd2luTWlkZGxlLWVsTWlkZGxlXG4gICAgcGVyYyA9IDEwMCAtIE1hdGguYWJzKGRpZmYpKjEwMC9tYXhcbiAgICBub25hYnMgPSBNYXRoLmFicyhkaWZmKSoxMDAvbWF4XG4gICAgbm9uYWJzID0gLW5vbmFicyBpZiBkaWZmIDwgMFxuXG4gICAgcmV0dXJuIFtwZXJjLCBub25hYnNdXG5cbiJdfQ==
