var _;_={i:function(){return this.console=setInterval(this.detect.bind(this),200)},p:{offing:!1,offtime:0},turn:function(m,d,n){return null==d&&(d=!1),null==n&&(n=!1),m instanceof jQuery||(m=$(m)),!1!==d&&m.removeClass(d),!1!==n&&m.addClass(n),!0},off:function(m,d){null==d&&(d={}),d.offing&&d.offtime>0?(this.turn(m,!1,"offing"),setTimeout(function(){return this.turn(m,"offing",!1),this.turn(m,"on","off")},1e3*d.offtime+100)):this.turn(m,"on","off")},on:function(m,d){return this.turn(m,"off","on")},swap:function(m,d){m instanceof jQuery||(m=$(m)),m.hasClass("off")?this.on(m,d):this.off(m,d)},encode:function(m){return encodeURIComponent(m).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+")},t:function(m,d,n,o){return _gaq.push(["_trackEvent",m,d,n,o])},rand:function(m,d){return Math.floor(Math.random()*d)+m},load:function(m,d,n){var o;return o=document.createElement("script"),o.type="text/javascript",o.src=m,o.addEventListener("load",function(m){if("function"==typeof n&&n(),void 0!==d&&!1!==d)return window[d].i()},!1),document.body.appendChild(o)},llc:function(){var m;return m="\n%cmmm/............................................................./mmm\nmmo................-:://::-.......-:::::::::::::-........-::///:-.omm\nmd-.............:+yhddddddhy+-..../ddddddddddddd+....../shdddddddyodm\nmo.............-hmmmhyyyydmmmh:.../mmmmhhhhhhhhh+....:ydmmdhyyyhddoom\nm-..............-ss:-....-ymmmy.../mmmm---------....:dmmms:-...-:/.-m\nd.........................ymmmy.../mmmm-/+ooo+:-....ymmmy-:+ooo+/-..d\nh.......................:smmmd:.../mmmmhmmmmmmdh+...dmmmshdmmmmmmhs-h\nh.....................:sdmmdy:....:hhdho+//+ymmmm+..dmmmdyo//+sdmmmhh\nd..................-+ydmmdy/.......--:.......smmmh..ymmms......:mmmmm\nm-..............-:shmmmds/-----....:s/--...-:hmmms..:dmmd/-...-ommmmm\nmo..............hmmmmmmhhhhhhhh...+dmmdhyyyhdmmmy-.../hmmmhyyyhmmmdhm\nmd-.............ddddddddddddddd...-+shdddddddhy/-.....-oydddddddho:dm\nmmo.............:::::::::::::::.......-:///::-...........-:///:-..omm\nmmm/............................................................./mmm\n\n:: syntactic sugar by 256\n:: http://256.io/\n:: "+config.meta.repo,console.log(m,"color: grey; font-family: Menlo, monospace;")},detect:function(){if(window.outerHeight-window.innerHeight>100||window.outerWidth-window.innerWidth>100)return this.llc(),clearInterval(this.console)}},_.i();
var Article;Article={name:!1,i:function(){return this.name=window.location.hash.replace("#",""),$("time").each(function(t){return function(t,a){var e;return e=$(a),e.html(moment(e.attr("title")).format("MMMM Do YYYY")),e.attr("aria-label",moment(e.attr("title")).calendar())}}())}};
var Basal,hasProp={}.hasOwnProperty;Basal={domain:"//basal.tech/api",client:!1,data:!1,structures:!1,complete:!1,i:function(t,a){return this.complete=a,this.client=t,this.getStructures(function(t){return function(){return t.loop(),t.entry()}}(this))},type:function(t,a,e,r){switch(a){case"css-background":return t.css("background-image","url("+r.entities[e].value+")");case"date":return t.html(moment(r.entities[e].value,"MM/DD/YYYY").format(t.attr("basal-dateformat")));case"image":return t.attr("src",r.entities[e].value);case"text":return t.html(r.entities[e].value);case"href":return t.attr("href",r.entities[e].value)}},entry:function(){return $(".basal-entry").each(function(t,a){var e,r,n,s,u,i,l,c,o,h,p;a=$(a),h=a.attr("basal-structure"),l=a.attr("basal-name"),s=a.attr("basal-entity"),e=a.attr("basal-attr"),p=a.attr("basal-type"),null==Basal.structures[h]&&Basal.error('Structure not found "'+h+'"'),c=Basal.structures[h].entries,o=[];for(i in c)u=c[i],!0===u.active&&(l===u.name?("created"===a.attr("basal-date")&&a.attr("title",u.created_at),o.push(function(){var t,i;t=u.entities,i=[];for(r in t)n=t[r],n.name===s?p?i.push(Basal.type(a,p,n.name,u)):e?i.push(a.attr(e,n.value)):i.push(a.html(n.value)):i.push(void 0);return i}())):o.push(void 0));return o})},loop:function(){return $(".basal-loop").each(function(t,a){var e,r,n,s,u,i,l;a=$(a),u=a.attr("basal-structure"),null==Basal.structures[u]&&Basal.error('Structure not found "'+u+'"'),i=a.children().remove(),n=Basal.structures[u].entries,s=[];for(r in n)hasProp.call(n,r)&&(e=n[r],!0===e.active&&(l=i.clone(),l.hasClass("basal-link")&&l.attr("href",l.attr("basal-link")+e.name),l.find("*").each(function(a,n){var s,u,i,l,c,o,h,p,d;if(u=$(n),r=u.attr("basal-name"),p=u.attr("basal-type"),l=null!=(c=u.attr("basal-names"))?c.split(","):void 0,d=null!=(o=u.attr("basal-types"))?o.split(","):void 0,void 0===r&&void 0===l)return!0;for(void 0===l&&(l=[r],d=[p]),h=[],t=s=0,i=l.length;s<i;t=++s)if(r=l[t],void 0!==(p=d[t]))switch(p){case"css-background":h.push(u.css("background-image","url("+e.entities[r].value+")"));break;case"date":h.push(u.html(moment(e.entities[r].value,"MM/DD/YYYY").format(u.attr("basal-dateformat"))));break;case"image":h.push(u.attr("src",e.entities[r].value));break;case"text":h.push(u.html(e.entities[r].value));break;case"href":h.push(u.attr("href",e.entities[r].value));break;default:h.push(void 0)}else"structure-name"===r?h.push(u.html(e.name)):h.push(u.html(e.entities[r].value));return h}),s.push(a.append(l))));return s}).promise().done(function(){return"function"==typeof Basal.complete?Basal.complete():void 0})},getStructures:function(t){return this.jsonp("structures",{client:this.client},function(a){return function(e){var r,n,s;a.structures={},n=e.data;for(r in n)s=n[r],a.structures[s.name]=s;return"function"==typeof t?t():void 0}}(this))},jsonp:function(t,a,e){var r,n;return a.callback="Basal.callback",n=""+document.location.protocol+this.domain+"/"+t+"?"+$.param(a),r=document.createElement("script"),r.src=n,r.addEventListener("load",function(t){return"function"==typeof e&&e(Basal.data),Basal.data=!1},!1),document.getElementsByTagName("head")[0].appendChild(r)},callback:function(t){return Basal.data=t},error:function(t){throw new Error("basal: "+t)}};
var Blog;Blog={i:function(){return Basal.i(config.basal.client)}};
var config;config={basal:{client:"58add4455aa59b12b729e131"},clients:["invisalign","galderma","biopharmx","natera","coolsculpting","alma","endologix","restylane","dysport","sculptra","sera","care","wholefoods","haggens","abbot","finess","generalmills","kia","lifelock","mattel","mazda","mitsubishi","nike","nestle","newbalance","redbull","tmobile","xbox","obi","sema","mixim","hansens","tylenol","drybar","iteris","neodyne"],color:{black1:"#000000",white1:"#FFFFFF",white2:"#F7EEEA",red1:"#EE697A",blue1:"#D1E0EB",gold1:"#B0976D"},font:{copy1:{"font-family":"gotham light","font-size":"16px"},copy2:{"font-family":"gotham medium","font-size":"16px"},copy3:{"font-family":"gotham light","font-size":"14px"},copy4:{"font-family":"gotham bold","font-size":"20px"},copy5:{"font-family":"gotham light","font-size":"12px"},copy6:{"font-family":"gotham medium","font-size":"14px"},copy7:{"font-family":"gotham bold","font-size":"12px"},h1:{"font-family":"neutratext bold","font-size":"40px"},h2:{"font-family":"neutratext demi","font-size":"20px"},h3:{"font-family":"gotham light","font-size":"30px"},h4:{"font-family":"gotham bold","font-size":"30px"},h5:{"font-family":"gotham light","font-size":"20px"},h6:{"font-family":"gotham book","font-size":"300px"}},menu:["standout","approach","work","services","team","clients","contact"],meta:{title:"Gold PR : Top Public Relations Firm + Digital Agency",url:"https://www.goldpr.com/",repo:"http://www.github.com/acidjazz/goldpr",description:"Award winning public relations and digital agency. GOLD PR is a California based PR firm trusted by some of the largest brands across the globe.",keywords:"womens beauty pr, womens health pr, social media",image:"img/share.jpg",fb_appid:0xd885279a3ad4},social:{facebook:"http://www.facebook.com/goldpr",twitter:"http://www.twitter.com/goldpr_",instagram:"http://www.instagram.com/goldpr",mail:"hello@goldpr.com",map:"https://goo.gl/maps/STNfa6zs34s",phone:9497433911},studies:{1:{name:"Case Study 1",type:"Health and Beauty",link:"CaseStudy1_Restylane_Health_and_Beauty.pdf",video:"https://vimeo.com/158432199"},2:{name:"Case Study 2",type:"Health and Beauty",link:"CaseStudy2_Coolsculpting_Health_and_Beauty.pdf",video:"https://vimeo.com/158431861"},3:{name:"Case Study 3",type:"Health and Beauty",link:"CaseStudy3_Invisalign_Health_and_Beauty.pdf"},4:{name:"Case Study 4",type:"Women's Health",link:"CaseStudy4_PanoramaNIPT_Womens_Health.pdf"},5:{name:"Case Study 5",type:"Women's Health",link:"CaseStudy5_Violet_Womens_Health.pdf"},6:{name:"Case Study 6",type:"Food and Beverage",link:"CaseStudy6_WholeFoods_Food_and_Beverage.pdf"}},team:[{name:"Shari Gold",position:"Founder/CEO",email:"sgold@goldpr.com"},{name:"Adrienne Kemp",position:"Business Lead, Strategy",email:"akemp@goldpr.com"},{name:"Stephanie Goddard",position:"Business Lead, Strategy",email:"sgoddard@goldpr.com"},{name:"Jackie Jorge",position:"Media Strategist",email:"jjorge@goldpr.com"},{name:"Sara Record",position:"Blogger/Influencer Relations",email:"srecord@goldpr.com"},{name:"Sharon Scott",position:"Media strategist",email:"sscott@goldpr.com"},{name:"Ashley Garing",position:"Account Director",email:"agaring@goldpr.com"},{name:"Natasha Nelson",position:"Account Director | SEO",email:"nnelson@goldpr.com"},{name:"Shannon Smith",position:"Media strategist",email:"ssmith@goldpr.com"},{name:"Pam Schlichter",position:"Media Relations",email:"Pschlichter@goldpr.com"},{name:"Diana Mann",position:"Account Director",email:"dmann@goldpr.com"},{name:"Jill Edgeworth",position:"Account Director",email:"jedgeworth@goldpr.com"},{name:"Kris Ellenberg",position:"Entertainment Lead",email:"kellenberg@goldpr.com"},{name:"Diana Moeck",position:"Analytics/Account Support",email:"dmoeck@goldpr.com"},{name:"Kym Cleveland",position:"Account Coordinator",email:"kcleveland@goldpr.com"},{name:"Jami Eidsvold",position:"Social Media Business Lead",email:"jeidsvold@goldpr.com"},{name:"Vanessa Shanahan",position:"Analytics",email:"vshanahan@goldpr.com"},{name:"Ashley Cline",position:"Social Media Strategist",email:"acline@goldpr.com"},{name:"Kellie Arens",position:"Social Media Acct Manager",email:"karens@goldpr.com"},{name:"Jamie Dadant",position:"Social Consumer Customer Service",email:"jdadant@goldpr.com"},{name:"Brianna Jonsson",position:"Social Media Community Manager",email:"bjonsson@goldpr.com"},{name:"Cameron Jonsson",position:"Digital Strategist",email:"cjonsson@goldpr.com"},{name:"Lauren Cowles",position:"Digital/Social Strategist",email:"lcowles@goldpr.com"},{name:"Melissa Angert",position:"Social Media Strategist",email:"mangert@goldpr.com"},{name:"Allison Hinojosa",position:"CFO",email:"ahinojosa@goldpr.com"},{name:"Caitlin Hanson",position:"Account Mananger",email:"chanson@goldpr.com"},{name:"Andrea Zito",position:"Analytics",email:"azito@goldpr.com"}],blog:{_id:"58add6585aa59b12b729e133",name:"blog",clientAccess:!0,entities:{title:{name:"title",type:"Text"},description:{name:"description",type:"Text"},tags:{name:"tags",type:"Tags"},image:{name:"image",type:"Image"},blog:{name:"blog",type:"Blog"}},client:{id:"58add4455aa59b12b729e131",name:"Gold PR",profile:"https://s3.amazonaws.com/basal/0ffb5052e84160fe1a3b0f738cb95cc1.jpeg"},user:{id:"57f7339f5aa59b213c7cb362",name:"kevin olson",picture:"https://lh6.googleusercontent.com/-G6NOOtsjrAw/AAAAAAAAAAI/AAAAAAAADMw/KtWFXm0ygCY/photo.jpg"},updated_at:"2017-04-11T19:17:36+00:00",created_at:"2017-02-22T18:20:08+00:00",entries:[{_id:"58ed2c405aa59b18d55e5ce3",name:"bulldog award",entities:{title:{name:"title",type:"Text",value:"GOLD PR HONORED WITH PRESTIGIOUS BULLDOG MEDIA RELATIONS AWARD"},description:{name:"description",type:"Text",value:"Top Southern CA PR Firm Wins in Best Use of a Personality/Celebrity Category"},tags:{name:"tags",type:"Tags",value:["award"]},image:{name:"image",type:"Image",value:"https://s3.amazonaws.com/basal/lVd5Wzkz2GADlH9Ojpek0H8AzfTtWBYwJXdn0yBU.jpeg",thumbnails:{20:"https://s3.amazonaws.com/basal/lVd5Wzkz2GADlH9Ojpek0H8AzfTtWBYwJXdn0yBU-20.jpeg",100:"https://s3.amazonaws.com/basal/lVd5Wzkz2GADlH9Ojpek0H8AzfTtWBYwJXdn0yBU-100.jpeg"}},blog:{name:"blog",type:"Blog",value:'<p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:\'Helvetica Neue\';color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Newport Beach, Calif. (March 27, 2017)</span><span style="font-size:11pt;font-family:\'Helvetica Neue\';color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> – </span><a href="http://www.goldpr.com/"><span style="vertical-align: baseline;">GOLD PR</span></a><span style="vertical-align: baseline;">, </span><span style="font-size:11pt;font-family:\'Helvetica Neue\';color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">a top Southern California public relations agency specializing in consumer and women’s health, beauty, lifestyle and medical technology, was honored with a 2017 </span><a href="https://www.bulldogreporter.com/"><span style="vertical-align: baseline;">Bulldog</span></a><span style="font-size:11pt;font-family:\'Helvetica Neue\';color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> Media Relations Award for its successful PR campaign in the Best Use of a Personality/Celebrity category</span><span style="font-size:11pt;font-family:\'Helvetica Neue\';color:#343434;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">. The </span><span style="font-size:11pt;font-family:\'Helvetica Neue\';color:#343434;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Fear No Mirror: </span><a href="http://www.coolsculpting.com/"><span style="vertical-align: baseline;">Coolsculpting</span></a><span style="font-size:11pt;font-family:\'Helvetica Neue\';color:#343434;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> and Molly Sims</span><span style="font-size:11pt;font-family:\'Helvetica Neue\';color:#343434;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> campaign included strategies for consumer awareness, education and driving trial through traditional publicity and social media engagement.</span></p><p><b style="font-weight:normal;" id="docs-internal-guid-b5c1f668-5e74-5654-450d-e08362f8f599"><br></b></p><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:\'Helvetica Neue\';color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">“We are honored to receive this prestigious industry award for excellence, creativity and achievement </span><span style="font-size:11pt;font-family:\'Helvetica Neue\';color:#1d1e1f;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">in media relations.</span><span style="font-size:11pt;font-family:\'Helvetica Neue\';color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> This award is a testament to the creative and passionate team of professionals at GOLD who work tirelessly to combine innovative communications strategies with flawless execution to drive measurable results for our clients,” said agency founder, Shari Gold. “GOLD is a PR firm that understands</span><span style="font-size:16pt;font-family:Times;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> </span><span style="font-size:11pt;font-family:\'Helvetica Neue\';color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">women --</span><span style="font-size:16pt;font-family:Times;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> </span><span style="font-size:11pt;font-family:\'Helvetica Neue\';color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">how they come to trust brands and what influences their purchase behavior. This knowledge was applied to all the work our team delivered for CoolSculpting including this memorable campaign with Molly Sims,”</span><span style="font-size:16pt;font-family:Times;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> </span><span style="font-size:11pt;font-family:\'Helvetica Neue\';color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">she continued. </span></p><p><b style="font-weight:normal;"><br></b></p><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:\'Helvetica Neue\';color:#000000;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">The Bulldog Media Relations Awards attract some of the best work from hundreds of top PR firms. They are judged by award-winning journalists including a Pulitzer Prize winner. This year’s judges come from several different media outlets including&nbsp;</span><span style="font-size:11pt;font-family:\'Helvetica Neue\';color:#000000;background-color:#ffffff;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">The Washington Post, USA Today, Forbes and The Oregonian. </span></p><p><b style="font-weight:normal;"><br></b></p><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:\'Helvetica Neue\';color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">In addition to the Bulldog Media Relations Award, GOLD PR has been recognized for its outstanding work in public relations, communications, social and influencer marketing through accolades that include: </span><span style="font-size:11pt;font-family:\'Helvetica Neue\';color:#000000;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">PR News’</span><span style="font-size:11pt;font-family:\'Helvetica Neue\';color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> Digital PR Award, </span><span style="font-size:11pt;font-family:\'Helvetica Neue\';color:#000000;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">PR News’</span><span style="font-size:11pt;font-family:\'Helvetica Neue\';color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> Agency Elite and Platinum PR Awards.</span></p><p><b style="font-weight:normal;"><br></b></p><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:\'Helvetica Neue\';color:#343434;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:underline;vertical-align:baseline;white-space:pre-wrap;">About Bulldog Reporter</span></p><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:\'Helvetica Neue\';color:#343434;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Bulldog Reporter provides news and insights to public relations and corporate communications professionals with the mission of helping these practitioners achieve superior performance. Bulldog Reporter publishes a daily newsletter, with a summary of relevant news called the </span><a href="http://try.bulldogreporter.com/sign-up-for-bulldog-reporters-daily-dog-2"><span style="vertical-align: baseline;">Daily ’Dog</span></a><span style="font-size:11pt;font-family:\'Helvetica Neue\';color:#343434;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> and runs an industry awards program —the Bulldog Awards—to recognize excellence in public relations and communications.</span></p><p><b style="font-weight:normal;"><br></b></p><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:\'Helvetica Neue\';color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:underline;vertical-align:baseline;white-space:pre-wrap;">About GOLD PR</span></p><p></p><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="vertical-align: baseline;">GOLD PR</span><span style="vertical-align: baseline;"> </span><span style="font-size:11pt;font-family:\'Helvetica Neue\';color:#2a2a2a;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">(GOLD), established in 2001, has been an independent and highly influential PR and social communications agency representing brands that focus on understanding, reaching and motivating consumer purchase behavior with specific expertise in engaging women. GOLD specializes in integrating brand communications programs across traditional, social and digital media for some of the world\'s most significant and successful brands in consumer health, beauty, medical technology, pharma, automotive, lifestyle and food and beverage sectors.</span></p>'}},structure:{id:"58add6585aa59b12b729e133",name:"blog"},client:{id:"58add4455aa59b12b729e131",name:"Gold PR",profile:"https://s3.amazonaws.com/basal/0ffb5052e84160fe1a3b0f738cb95cc1.jpeg"},user:{id:"57f7339f5aa59b213c7cb362",name:"kevin olson",picture:"https://lh6.googleusercontent.com/-G6NOOtsjrAw/AAAAAAAAAAI/AAAAAAAADMw/KtWFXm0ygCY/photo.jpg"},updated_at:"2017-05-18T03:31:21+00:00",created_at:"2017-04-11T19:19:28+00:00",active:!0}]}};
var Index;Index={vals:[],section:"home",vis:!1,cache:{window:window,stickied:!1,laxin:{}},i:function(){if("www.goldpr.com"===document.location.hostname&&"https:"!==document.location.protocol&&(""!==document.location.hash?document.location="https://www.goldpr.com/"+document.location.hash:document.location="https://www.goldpr.com/"),"goldpr.com"===document.location.hostname&&(""!==document.location.hash?document.location="https://www.goldpr.com/"+document.location.hash:document.location="https://www.goldpr.com/"),Index.cache.window=$(window),void 0!==document.visibilityState&&(Index.vis=document.visibilityState,setInterval(Index.visible,200)),Index.cache.window.width()>1e3&&setInterval(Index.header,50),Index.laxcache(),setInterval(Index.check,100),setInterval(Index.menu,500),Index.handlers(),console.log("Index.i()"),""!==document.location.hash)return $("html, body").scrollTo(""+document.location.hash,{duration:50,offset:-60})},visible:function(){if(Index.vis!==document.visibilityState)return Index.vis=document.visibilityState,_.off(".blueCircle"),setTimeout(function(){return _.on(".blueCircle")},10)},handlers:function(){return $("header > .inner > .menu > a.option, .mobile > .inner > .menu > a.option, header > .inner a.logo").click(Index.option),$(".burger").click(Index.burger)},burger:function(){return _.swap(".mobile, .burger, .burger > .inner > .menu")},option:function(n){var e;return n.preventDefault(),e=$(this).data("anchor"),_.off("header > .inner > .menu > .option, .mobile > .inner > .menu > .option"),_.off(".mobile, .burger"),setTimeout(function(){return $("html, body").scrollTo("#"+e,{duration:50,offset:-60}),location.hash=e},200)},header:function(){var n;if(n=300,Index.cache.window.scrollTop()>n&&!1===Index.cache.stickied&&(_.on("#sticky"),Index.cache.stickied=!0),Index.cache.window.scrollTop()<n&&!0===Index.cache.stickied)return _.off("#sticky"),Index.cache.stickied=!1},menu:function(){return $(".section").each(function(n,e){var o;if(o=$(e).data("section"),Index.inViewport(e))return _.off("header > .inner > .menu > .option, .mobile > .inner > .menu > .option"),_.on(".option_"+o),!0})},laxcache:function(){return $(".laxin").each(function(n,e){return Index.cache.laxin[n]=e})},check:function(){var n,e,o,t,i,c,r,a;i=Index.cache.laxin,r=[];for(e in i)n=i[e],Index.inViewport(n)?(c=Index.viewable(n),t=c[0],c[1],o=$(n),a=o.data("thresh"),void 0===a&&(a=50),t>a&&o.hasClass("off")&&_.on(o),t<a&&o.hasClass("on")?r.push(_.off(o)):r.push(void 0)):r.push(void 0);return r},inViewport:function(n){var e;return e=n.getBoundingClientRect(),(e.top>=0||e.bottom>=0)&&(e.top<=window.innerHeight||e.bottom<=window.innerHeight)},viewable:function(n){var e,o,t,i,c,r,a,d;return a=n.getBoundingClientRect(),t=a.bottom-a.top,o=a.top+t/2,d=window.innerHeight/2,i=window.innerHeight/2+t/2,e=d-o,r=100-100*Math.abs(e)/i,c=100*Math.abs(e)/i,e<0&&(c=-c),[r,c]}};