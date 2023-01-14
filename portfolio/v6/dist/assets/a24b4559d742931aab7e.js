(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{236:function(e,t,n){var content=n(272);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(51).default)("6eebf2b1",content,!0,{sourceMap:!1})},237:function(e,t,n){var content=n(274);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(51).default)("2b151711",content,!0,{sourceMap:!1})},271:function(e,t,n){"use strict";var o=n(236);n.n(o).a},272:function(e,t,n){(t=n(50)(!1)).push([e.i,'.timeline-marker:before{left:0;height:1rem;width:1rem;top:4px;transition:background .2s ease-in-out}.timeline-marker:after,.timeline-marker:before{position:absolute;display:block;background-color:#cbd5e0;content:""}.timeline-marker:after{bottom:0;width:3px;top:24px;left:6px}.timeline-item:not(.period):hover .timeline-marker:before{background-color:#e53e3e}.timeline-item:not(.period):hover .timeline-content,.timeline-item:not(.period):hover .timeline-info{color:#1a202c}@media (min-width:768px){.timeline-item{overflow:hidden;padding-bottom:40px}.timeline-marker{position:absolute;left:50%;margin-left:-7.5px}.timeline-item:nth-child(2n) .timeline-content,.timeline-item:nth-child(odd) .timeline-info{float:left;text-align:right;padding-right:30px}.timeline-item:nth-child(2n) .timeline-info,.timeline-item:nth-child(odd) .timeline-content{float:right;text-align:left;padding-left:30px}.timeline-item.period .timeline-content{float:none;padding:0;width:100%;text-align:center}.period .timeline-marker:after{bottom:0;height:4rem;top:auto}}',""]),e.exports=t},273:function(e,t,n){"use strict";var o=n(237);n.n(o).a},274:function(e,t,n){(t=n(50)(!1)).push([e.i,".developmint{color:#15831d;text-decoration:none}.developmint:hover{text-decoration:underline}",""]),e.exports=t},305:function(e,t,n){"use strict";n.r(t);var o={props:{period:{type:Boolean,default:!1},title:{type:String,required:!0},when:{type:String,default:""}}},r=(n(271),n(16)),l={name:"Timeline",components:{TimelineItem:Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"timeline-item relative md:block pl-8 md:pl-0",class:{"period my-2 md:my-12 py-12 md:mt-0":e.period}},[e.period?e._e():n("div",{staticClass:"timeline-info md:w-1/2 mb-2 font-bold text-xs tracking-wide uppercase whitespace-no-wrap md:block md:mb-0 md:mt-1 md:p-0"},[n("span",{staticClass:"mt-1",domProps:{textContent:e._s(e.when)}})]),e._v(" "),e.period?e._e():n("div",{staticClass:"timeline-marker absolute inset-y-0 left-0 w-8 md:block md:m-0 md:p-0"}),e._v(" "),n("div",{staticClass:"timeline-content pb-8 md:block md:m-0 md:p-0",class:{"md:w-1/2":!e.period}},[n(e.period?"h2":"h3",{tag:"component",staticClass:"font-bold text-black",class:{"text-xl font-bold":e.period,"text-lg":!e.period},domProps:{textContent:e._s(e.title)}}),e._v(" "),n("p",{class:{"mt-2":e.period}},[e._t("default")],2)],1)])}),[],!1,null,null,null).exports}},m=(n(273),{components:{Timeline:Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"w-full text-gray-600 leading-snug pt-4 md:pt-0"},[n("TimelineItem",{attrs:{period:"",title:"Founded Cogs Web Development and Hosting",when:"June 2018"}},[e._v("\n    Since the Summer of 2018, I launched my first business, Cogs Web Hosting and Development.\n    The purpose of creating this company is to better myself as a developer and Information Technologies\n    specialist. Combining my years of experience building and developing websites, I decided to make\n    the jump to launching my own business. Now I spend most of my days learning constantly different\n    skills from programming to document design and marketing.\n  ")]),e._v(" "),n("TimelineItem",{attrs:{title:"Created Cogs Website",when:"March 2020"}},[e._v("\n    This project has taken many different turns and a variety of different versions.\n    At first I built the site using only Bootstrap as the Front-End and utilized Javascript\n    for the backend. From then I created 6 different versions of the site using Jekyll, Ruby on Rails,\n    Hugo and now finally settled on using Gatsby.js, which is under development right now,\n    "),n("a",{staticClass:"text-gray-700 hover:text-gray",attrs:{href:"https://www.cogswebdevandhosting.ml",rel:"noopener",target:"_blank"}},[e._v("cogswebdevandhosting.ml")]),e._v(".\n    "),n("br"),e._v(" "),n("br"),e._v("\n    I decided to relaunch my companies site, to not only redesign the site but to add more functionality\n    to the site itself and to make things easier to get in contact and process payments.\n    "),n("br"),e._v(" "),n("br"),e._v(" "),n("b",[e._v("Used Technologies")]),n("br"),e._v("\n    Gatsby.js, Vue.js, BootStrap 4\n  ")]),e._v(" "),n("TimelineItem",{attrs:{title:"Created my first Personal Blog",when:"February 2020"}},[e._v("\n    After talking with a lot of people about my choice of programming languages, I decided to work on a\n    talk about PHP, it's flaws and advantages, as well as the upcoming future of the language."),n("br"),e._v('\n    I named it "'),n("span",{staticClass:"font-semibold text-indigo-600",domProps:{textContent:e._s("PHP is dead - Long live PHP!")}}),e._v('".\n    The talk marks the starting point of my\n    '),n("NuxtLink",{staticClass:"text-gray-800 underline hover:text-gray-500",attrs:{to:"/speaking/",rel:"noreferrer noopener"},domProps:{textContent:e._s("speaking journey")}}),e._v("!"),n("br"),n("br"),e._v(" "),n("b",[e._v("Used Technologies")]),n("br"),e._v("\n    Ruby on Rails, Liquid, Jekyll\n  ")],1),e._v(" "),n("TimelineItem",{attrs:{title:"Created an Online Resume",when:"January 2020"}},[e._v("\n    Before applying to companies all over the world for my upcoming semester abroad in 2018, I wanted to\n    have a unique way of displaying my CV. So why not creating an adapted version online?\n    "),n("a",{staticClass:"text-gray-700 hover:text-gray",attrs:{href:"https://bigboss424.github.com/jones-resume",rel:"noreferrer noopener",target:"_blank"},domProps:{textContent:e._s("did it")}}),e._v("!\n    "),n("br"),n("br"),e._v(" "),n("b",[e._v("Used Technologies")]),n("br"),e._v("\n    Jekyll, Github Pages, SCSS, Ruby on Rails\n  ")]),e._v(" "),n("TimelineItem",{attrs:{title:"Created a Galaga Emulation in JS",when:"November 2019"}},[e._v("\n    Built a site with the emulation of Galaga, an 80's arcade classic. To which, is my father's\n    favorite video game. I did this for his birthday as a gift and plan on further developing the\n    site for him to cater to his favorite things.\n    "),n("a",{staticClass:"text-gray-700 hover:text-gray",attrs:{href:"https://www.mjones.tk/",rel:"noreferrer noopener",target:"_blank"},domProps:{textContent:e._s("did it")}}),e._v("!\n    "),n("br"),n("br"),e._v(" "),n("b",[e._v("Used Technologies")]),n("br"),e._v("\n    JavaScript, HTML5, CSS3, EMCA\n  ")]),e._v(" "),n("TimelineItem",{attrs:{title:"Enrolled in WGU",when:"October 2019"}},[e._v("\n    I decided in October to register and continue my Bachelors in Science Degree in the field of\n    Computer Science. I made the transition from attending California State University,\n    Los Angeles to Western Governors University an Online University. As making the transit\n    and attending school became to financially difficult and I like the concept of taking as\n    many classes during each term and testing out of classes that I am competent in.\n  ")]),e._v(" "),n("TimelineItem",{attrs:{title:"Joined the Eastern Washington University Delta Chi Chapter",when:"December 2013"}},[e._v("\n    As I became accustomed to College life at EWU, I received a Bid for the Eastern Washington University\n    Chapter of Delta Chi Fraternity. A social fraternity that operates in the US and Canada. I held the\n    executive officer positions of Alumni Relations Officer amd Treasurer. I also held the following Committee\n    chairman positions, Head of IT Committee, PR Committee, Homecoming Committee and Recruitment Committee.\n  ")]),e._v(" "),n("TimelineItem",{attrs:{period:"",title:"Transferred to Eastern Washington University ",when:"September 2013"}},[e._v("\n    I gained acceptance to transfer at EWU, and continue my pursuit of my BS in Computer Science.\n    "),n("strong",[e._v("Interested?")])]),e._v(" "),n("TimelineItem",{attrs:{title:"Transferred to Walla Walla Community College",when:"September 2011"}},[e._v("\n    After taking a six-month hiatus for work, I re-enrolled into college at\n    "),n("em",[e._v("Walla Walla Community College")]),e._v(" completed over 60 credits in 3 quarter time span.\n    To have credits to transfer to Eastern Washington University, since my credits from Walla\n    Walla University were unaccredited.\n  ")]),e._v(" "),n("TimelineItem",{attrs:{title:"Started Summer Session at Walla Walla University",when:"July 2010"}},[e._v("\n    I started college shortly after graduating to begin Summer Session at\n    "),n("em",[e._v("Walla Walla University")]),e._v(" and became a Junior Systems Administrator for the\n    Computer Science and Engineering Computer Labs.\n  ")]),e._v(" "),n("TimelineItem",{attrs:{title:"Graduated Glendale Adventist Academy",when:"June 06 2010"}},[e._v("\n    In 2010 I finished my high school education at Glendale Adventist Academy. In\n    "),n("em",[e._v("Forest Lawn Cemetery")]),e._v(" with a final grade of "),n("strong",[e._v("2.98")])]),e._v(" "),n("TimelineItem",{attrs:{title:"Built my First Computer",when:"December 2009"}},[e._v("\n    In the 12th grade, I was the only student in my Advanced Computers class. As all my classmates\n    believed that the course was too difficult. This allowed me the opportunity to be lectured and\n    mentored, one on one, with Erwin Gonzales not only my teacher but the entire schools Systems Administrator.\n    "),n("br"),n("br"),e._v("\n    As we completed the courses material rather quickly towards the beginning of December, my final\n    was to build a computer. I told my Dad this and asked him if it was possible for me to get my own\n    parts and build my own computer, since I was bottlenecked using a G5 Mac Pro. Thus, BigBoss, my first\n    computer was born. An AMD Quad-Core System with a Windows 7 and Ubuntu 10.04 dual boot. Still works to\n    this day.\n    "),n("br"),n("br"),e._v(" "),n("b",[e._v("Used Technologies")]),n("br"),e._v("\n    Windows 7, Ubuntu 10.04, Bash\n  ")]),e._v(" "),n("TimelineItem",{attrs:{title:"Used a Apple computer the first time",when:"1998"}},[e._v("\n    Played Age of Empires on my father's G3 PowerMac, and first used a Mac computer.\n  ")]),e._v(" "),n("TimelineItem",{attrs:{period:"",title:"I was born 🤰🏼👶🏼",when:"June 1992"}})],1)}),[],!1,null,null,null).exports},head:function(){var e="Some of the most important achievements and events in my life, mostly with a career and work perspective.";return{title:"My Timeline",meta:[{hid:"og:title",name:"og:title",content:"My Timeline"},{hid:"description",name:"description",content:e},{hid:"og:description",name:"og:description",content:e}]}}}),d=Object(r.a)(m,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{background:"linear-gradient(to bottom, #eee, #fff 15%)"}},[t("section",{staticClass:"container mx-auto pt-16"},[t("div",{staticClass:"w-5/6 sm:w-2/3 mx-auto"},[t("h1",{staticClass:"text-2xl font-bold text-center"},[this._v("\n        My Timeline\n      ")]),this._v(" "),t("Timeline")],1)])])}),[],!1,null,null,null);t.default=d.exports}}]);