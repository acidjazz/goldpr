var _;_={i:function(){return this.console=setInterval(this.detect.bind(this),200)},p:{offing:!1,offtime:0},turn:function(m,d,n){return null==d&&(d=!1),null==n&&(n=!1),m instanceof jQuery||(m=$(m)),d!==!1&&m.removeClass(d),n!==!1&&m.addClass(n),!0},off:function(m,d){null==d&&(d={}),d.offing&&d.offtime>0?(this.turn(m,!1,"offing"),setTimeout(function(){return this.turn(m,"offing",!1),this.turn(m,"on","off")},1e3*d.offtime+100)):this.turn(m,"on","off")},on:function(m,d){return this.turn(m,"off","on")},swap:function(m,d){m instanceof jQuery||(m=$(m)),m.hasClass("off")?this.on(m,d):this.off(m,d)},encode:function(m){return encodeURIComponent(m).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+")},t:function(m,d,n,o){return _gaq.push(["_trackEvent",m,d,n,o])},rand:function(m,d){return Math.floor(Math.random()*d)+m},load:function(m,d,n){var o;return o=document.createElement("script"),o.type="text/javascript",o.src=m,o.addEventListener("load",function(m){if("function"==typeof n&&n(),void 0!==d&&d!==!1)return window[d].i()},!1),document.body.appendChild(o)},llc:function(){var m;return m="\n%cmmm/............................................................./mmm\nmmo................-:://::-.......-:::::::::::::-........-::///:-.omm\nmd-.............:+yhddddddhy+-..../ddddddddddddd+....../shdddddddyodm\nmo.............-hmmmhyyyydmmmh:.../mmmmhhhhhhhhh+....:ydmmdhyyyhddoom\nm-..............-ss:-....-ymmmy.../mmmm---------....:dmmms:-...-:/.-m\nd.........................ymmmy.../mmmm-/+ooo+:-....ymmmy-:+ooo+/-..d\nh.......................:smmmd:.../mmmmhmmmmmmdh+...dmmmshdmmmmmmhs-h\nh.....................:sdmmdy:....:hhdho+//+ymmmm+..dmmmdyo//+sdmmmhh\nd..................-+ydmmdy/.......--:.......smmmh..ymmms......:mmmmm\nm-..............-:shmmmds/-----....:s/--...-:hmmms..:dmmd/-...-ommmmm\nmo..............hmmmmmmhhhhhhhh...+dmmdhyyyhdmmmy-.../hmmmhyyyhmmmdhm\nmd-.............ddddddddddddddd...-+shdddddddhy/-.....-oydddddddho:dm\nmmo.............:::::::::::::::.......-:///::-...........-:///:-..omm\nmmm/............................................................./mmm\n\n:: syntactic sugar by 256\n:: http://256.io/\n:: "+config.meta.repo,console.log(m,"color: grey; font-family: Menlo, monospace;")},detect:function(){if(window.outerHeight-window.innerHeight>100||window.outerWidth-window.innerWidth>100)return this.llc(),clearInterval(this.console)}},_.i();
var config;config={clients:["invisalign","galderma","biopharmx","natera","coolsculpting","alma","endologix","restylane","dysport","sculptra","sera","care","wholefoods","haggens","abbot","finess","generalmills","kia","lifelock","mattel","mazda","mitsubishi","nike","nestle","newbalance","redbull","tmobile","xbox","obi","sema","mixim","hansens","tylenol","drybar","iteris"],color:{black1:"#000000",white1:"#FFFFFF",white2:"#F7EEEA",red1:"#EE697A",blue1:"#D1E0EB",gold1:"#B0976D"},font:{copy1:{"font-family":"gotham light","font-size":"16px"},copy2:{"font-family":"gotham medium","font-size":"16px"},copy3:{"font-family":"gotham light","font-size":"14px"},copy4:{"font-family":"gotham bold","font-size":"20px"},copy5:{"font-family":"gotham light","font-size":"12px"},copy6:{"font-family":"gotham medium","font-size":"14px"},copy7:{"font-family":"gotham bold","font-size":"12px"},h1:{"font-family":"neutratext bold","font-size":"40px"},h2:{"font-family":"neutratext demi","font-size":"20px"},h3:{"font-family":"gotham light","font-size":"30px"},h4:{"font-family":"gotham bold","font-size":"30px"},h5:{"font-family":"gotham light","font-size":"20px"},h6:{"font-family":"gotham book","font-size":"300px"}},menu:["standout","approach","work","services","team","clients","contact"],meta:{title:"Gold PR : Award Winning + Top Global Public Relations Firm",url:"http://www.goldpr.com/",repo:"http://www.github.com/acidjazz/goldpr",description:"Award winning public relations agency. Gold PR is a California based PR firm trusted by the some of the largest brands across the globe.",keywords:"womens beauty pr, womens health pr, social media",image:"img/share.jpg"},social:{facebook:"http://www.facebook.com/goldpr",twitter:"http://www.twitter.com/goldpr_",instagram:"http://www.instagram.com/goldpr",mail:"hello@goldpr.com",map:"https://goo.gl/maps/STNfa6zs34s",phone:9497433911},studies:{1:{name:"Case Study 1",type:"Health and Beauty",link:"CaseStudy1_Restylane_Health_and_Beauty.pdf",video:"https://vimeo.com/158432199"},2:{name:"Case Study 2",type:"Health and Beauty",link:"CaseStudy2_Coolsculpting_Health_and_Beauty.pdf",video:"https://vimeo.com/158431861"},3:{name:"Case Study 3",type:"Health and Beauty",link:"CaseStudy3_Invisalign_Health_and_Beauty.pdf"},4:{name:"Case Study 4",type:"Women's Health",link:"CaseStudy4_PanoramaNIPT_Womens_Health.pdf"},5:{name:"Case Study 5",type:"Women's Health",link:"CaseStudy5_Violet_Womens_Health.pdf"},6:{name:"Case Study 6",type:"Food and Beverage",link:"CaseStudy6_WholeFoods_Food_and_Beverage.pdf"}},team:[{name:"Shari Gold",position:"Founder/CEO",email:"sgold@goldpr.com"},{name:"Adrienne Kemp",position:"Business Lead, Strategy",email:"akemp@goldpr.com"},{name:"Stephanie Goddard",position:"Business Lead, Strategy",email:"sgoddard@goldpr.com"},{name:"Jackie Jorge",position:"Media Strategist",email:"jjorge@goldpr.com"},{name:"Sara Record",position:"Blogger/Influencer Relations",email:"srecord@goldpr.com"},{name:"Sharon Scott",position:"Media strategist",email:"sscott@goldpr.com"},{name:"Ashley Garing",position:"Account Director",email:"agaring@goldpr.com"},{name:"Natasha Nelson",position:"Account Director | SEO",email:"nnelson@goldpr.com"},{name:"Shannon Smith",position:"Media strategist",email:"ssmith@goldpr.com"},{name:"Pam Schlichter",position:"Media Relations",email:"Pschlichter@goldpr.com"},{name:"Diana Mann",position:"Account Director",email:"dmann@goldpr.com"},{name:"Jill Edgeworth",position:"Account Director",email:"jedgeworth@goldpr.com"},{name:"Kris Ellenberg",position:"Entertainment Lead",email:"kellenberg@goldpr.com"},{name:"Diana Moeck",position:"Analytics/Account Support",email:"dmoeck@goldpr.com"},{name:"Kym Cleveland",position:"Account Coordinator",email:"kcleveland@goldpr.com"},{name:"Jami Eidsvold",position:"Social Media Business Lead",email:"jeidsvold@goldpr.com"},{name:"Vanessa Shanahan",position:"Analytics",email:"vshanahan@goldpr.com"},{name:"Ashley Cline",position:"Social Media Strategist",email:"acline@goldpr.com"},{name:"Kellie Arens",position:"Social Media Acct Manager",email:"karens@goldpr.com"},{name:"Jamie Dadant",position:"Social Consumer Customer Service",email:"jdadant@goldpr.com"},{name:"Brianna Jonsson",position:"Social Media Community Manager",email:"bjonsson@goldpr.com"},{name:"Cameron Jonsson",position:"Digital Strategist",email:"cjonsson@goldpr.com"},{name:"Lauren Cowles",position:"Digital/Social Strategist",email:"lcowles@goldpr.com"},{name:"Melissa Angert",position:"Social Media Strategist",email:"mangert@goldpr.com"},{name:"Allison Hinojosa",position:"CFO",email:"ahinojosa@goldpr.com"}]};
var Index;Index={vals:[],section:"home",vis:!1,cache:{window:window,stickied:!1,laxin:{}},i:function(){if("www.goldpr.com"===document.location.hostname&&"https:"!==document.location.protocol&&(""!==document.location.hash?document.location="https://www.goldpr.com/"+document.location.hash:document.location="https://www.goldpr.com/"),"goldpr.com"===document.location.hostname&&(""!==document.location.hash?document.location="https://www.goldpr.com/"+document.location.hash:document.location="https://www.goldpr.com/"),Index.cache.window=$(window),void 0!==document.visibilityState&&(Index.vis=document.visibilityState,setInterval(Index.visible,200)),Index.cache.window.width()>1e3&&setInterval(Index.header,50),Index.laxcache(),setInterval(Index.check,100),setInterval(Index.menu,500),Index.handlers(),console.log("Index.i()"),""!==document.location.hash)return $("html, body").scrollTo(""+document.location.hash,{duration:50,offset:-60})},visible:function(){if(Index.vis!==document.visibilityState)return Index.vis=document.visibilityState,_.off(".blueCircle"),setTimeout(function(){return _.on(".blueCircle")},10)},handlers:function(){return $("header > .inner > .menu > a.option, .mobile > .inner > .menu > a.option, header > .inner a.logo").click(Index.option),$(".burger").click(Index.burger)},burger:function(){return _.swap(".mobile, .burger, .burger > .inner > .menu")},option:function(n){var e;return n.preventDefault(),e=$(this).data("anchor"),_.off("header > .inner > .menu > .option, .mobile > .inner > .menu > .option"),_.off(".mobile, .burger"),setTimeout(function(){return $("html, body").scrollTo("#"+e,{duration:50,offset:-60}),location.hash=e},200)},header:function(){var n;if(n=300,Index.cache.window.scrollTop()>n&&Index.cache.stickied===!1&&(_.on("#sticky"),Index.cache.stickied=!0),Index.cache.window.scrollTop()<n&&Index.cache.stickied===!0)return _.off("#sticky"),Index.cache.stickied=!1},menu:function(){return $(".section").each(function(n,e){var o;if(o=$(e).data("section"),Index.inViewport(e))return _.off("header > .inner > .menu > .option, .mobile > .inner > .menu > .option"),_.on(".option_"+o),!0})},laxcache:function(){return $(".laxin").each(function(n,e){return Index.cache.laxin[n]=e})},check:function(){var n,e,o,t,i,c,r,a,d;c=Index.cache.laxin,a=[];for(o in c)e=c[o],Index.inViewport(e)?(r=Index.viewable(e),i=r[0],n=r[1],t=$(e),d=t.data("thresh"),void 0===d&&(d=50),i>d&&t.hasClass("off")&&_.on(t),i<d&&t.hasClass("on")?a.push(_.off(t)):a.push(void 0)):a.push(void 0);return a},inViewport:function(n){var e;return e=n.getBoundingClientRect(),(e.top>=0||e.bottom>=0)&&(e.top<=window.innerHeight||e.bottom<=window.innerHeight)},viewable:function(n){var e,o,t,i,c,r,a,d;return a=n.getBoundingClientRect(),t=a.bottom-a.top,o=a.top+t/2,d=window.innerHeight/2,i=window.innerHeight/2+t/2,e=d-o,r=100-100*Math.abs(e)/i,c=100*Math.abs(e)/i,e<0&&(c=-c),[r,c]}};