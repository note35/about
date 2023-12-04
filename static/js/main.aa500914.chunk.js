(this.webpackJsonpabout=this.webpackJsonpabout||[]).push([[0],{77:function(e,t,a){e.exports=a(91)},82:function(e,t,a){},83:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),i=a.n(o),l=a(26),s=a(67),c=a(146),u=(a(82),a(10)),p=a(94),h=(a(83),a(148)),m=a(129);function b(e){var t=e.prefix,a=Object(u.f)().color,n="text.".concat(a);return r.a.createElement(h.a,{color:n,clone:!0},r.a.createElement(m.a,{variant:"contained",color:a},t,"-",a))}var d=a(68),y=a(51),g=a(131),k=a(132),f=a(133),w=a(134),E=a(135),v=a(149),S=a(147),C=a(62),P=a.n(C),G=(a(89),a(59)),T=a.n(G),x=a(60),_=a.n(x),L=a(61),j=a.n(L),A=[{name:"about",text:"About",icon:r.a.createElement(T.a,null),path:"/"},{name:"talks",text:"Talks",icon:r.a.createElement(_.a,null),path:"/talks"},{name:"toys",text:"Toys",icon:r.a.createElement(j.a,null),path:"/toys"}],I=Object(g.a)((function(e){return{grow:{flexGrow:1},sectionDesktop:Object(y.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(y.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function M(){var e=I(),t=r.a.useState(null),a=Object(d.a)(t,2),n=a[0],o=a[1],i=Boolean(n);return r.a.createElement("div",{className:e.grow},r.a.createElement(k.a,{position:"static"},r.a.createElement(f.a,null,r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.sectionDesktop},A.map((function(e){return r.a.createElement(l.b,{key:e.name,className:"disable-default",to:e.path},r.a.createElement(w.a,{"aria-label":e.name,color:"inherit"},r.a.createElement(E.a,{color:"secondary"},e.icon)),e.text)}))),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement(w.a,{"aria-label":"show more","aria-controls":"navigator-mobile","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)},color:"inherit"},r.a.createElement(P.a,null))))),r.a.createElement(S.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:"navigator-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:function(){o(null)}},A.map((function(e){return r.a.createElement(v.a,{key:e.name},r.a.createElement(l.b,{className:"disable-default",to:e.path},r.a.createElement(w.a,{"aria-label":e.name,color:"inherit"},r.a.createElement(E.a,{color:"secondary"},e.icon)),e.text))}))))}var D=a(138),B=a(139),O=a(137),R=a(136);function W(e){return function(e){for(var t=[],a="",n=0;n<e.length;){if("["===e[n]){t.push(a),a="";var r={url:"",text:""};for(n+=1;"]"!==e[n];)a+=e[n],n+=1;for("("===e[n+=1]&&(n+=1),r.text=a,a="";")"!==e[n];)a+=e[n],n+=1;r.url=a,a="",t.push(r)}else a+=e[n];n+=1}return a.length>0&&t.push(a),t}(e).map((function(e){return(t=e)&&"object"===typeof t&&"string"===typeof t.url&&"string"===typeof t.text?r.a.createElement(R.a,{target:"_blank",href:e.url},e.text):e;var t}))}var Y=a(43),z=a.n(Y),N=a(63),U=a.n(N),J=a(64),F=a.n(J),H=a(44),V=a.n(H),q=[{name:"Github",icon:r.a.createElement(z.a,null),url:"https://github.com/note35"},{name:"Twitter",icon:r.a.createElement(U.a,null),url:"https://twitter.com/k1rch0u"},{name:"Linkedin",icon:r.a.createElement(F.a,null),url:"https://www.linkedin.com/in/kirchou/"},{name:"StackOverflow",icon:r.a.createElement(V.a,null),url:"https://stackoverflow.com/users/2740386/kir-chou"}],K=[{name:"Brief Bio",description:"Thanks for your interest! I\u2019m Kir (a kind of cocktail\ud83c\udf78), a Software Engineer at [Google Japan](https://en.wikipedia.org/wiki/Google). I've worked for [A9 (Amazon Search)](https://en.wikipedia.org/wiki/A9.com), [IBM Security](https://en.wikipedia.org/wiki/IBM), and interned for [Marvell](https://en.wikipedia.org/wiki/Marvell_Technology_Group). Outside of work, I have been a part of the [PyCon Taiwan](https://tw.pycon.org/) organization since 2017 and focusing on both reviewing agenda and giving talks. I have a master\u2019s degree in Computer Science from [NCTU](https://www.nctu.edu.tw/) (merged to NYCU)."},{name:"Career Focuses",description:"Python, JavaScript, C++, Build System, and Software Development Life Cycle, Web Application."},{name:"Offline Studies",description:"Type theory, Gradual typing, Paxos, a little bit Web3."},{name:"Past Studies",description:"PEG, absl::flat_hash_map, History of Python dict and hash, and Python Virtual Machine."},{name:"Recommended Tech Podcasts",description:"[PyCast (mandarin only)](https://pycast.firstory.io/), [core.py](https://podcasts.apple.com/us/podcast/core-py/id1712665877), [Python Bytes](https://pythonbytes.fm/), [The Python Podcast.__init__](https://www.pythonpodcast.com/), [CppCast](https://cppcast.com/), [Acquired](https://www.acquired.fm/)."}];function Q(){return r.a.createElement(O.a,{container:!0,spacing:1},r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(p.a,{variant:"h4",component:"h2"},"Kir Chou"),q.map((function(e,t){return r.a.createElement(R.a,{key:t,target:"_blank",href:e.url},e.icon)}))),K.map((function(e,t){return r.a.createElement(O.a,{key:t,item:!0,xs:12},r.a.createElement(D.a,null,r.a.createElement(B.a,null,r.a.createElement(p.a,{variant:"h5",component:"h2"},e.name),r.a.createElement(p.a,{variant:"body2",component:"p"},W(e.description)))))})))}var X=a(141),Z=a(145),$=a(144),ee=a(140),te=a(142),ae=a(143),ne=a(70),re=a(150),oe=a(66),ie=a.n(oe),le=a(65),se=a.n(le),ce={Code:r.a.createElement(V.a,null),Github:r.a.createElement(z.a,null),SlideShare:r.a.createElement(se.a,null),Youtube:r.a.createElement(ie.a,null)};function ue(e){var t=e.name,a=e.headers,n=e.rowItems;return r.a.createElement(ee.a,{component:ne.a},r.a.createElement(X.a,{"aria-label":t},r.a.createElement(te.a,null,r.a.createElement(ae.a,null,a.map((function(e,t){return r.a.createElement($.a,{key:t,align:"center"},e)})))),r.a.createElement(Z.a,null,n.map((function(e,t){return r.a.createElement(ae.a,{key:t},r.a.createElement($.a,{component:"th",scope:"row",align:"center"},e.year),r.a.createElement($.a,{align:"center"},e.reason),r.a.createElement($.a,{align:"center"},e.title,void 0===e.tags?null:r.a.createElement("br",null),void 0===e.tags?null:e.tags.map((function(e,t){return r.a.createElement(re.a,{key:t,size:"small",label:e})}))),r.a.createElement($.a,{align:"center"},e.links.map((function(e,t){return r.a.createElement(R.a,{key:t,target:"_blank",href:e.url},ce[e.source])}))))})))))}var pe=[{year:"2023",reason:"PyCon TW",title:"How to Design a Successful (Intern) Project with Apache Beam?",links:[{source:"Youtube",url:"https://www.youtube.com/watch?v=ecUVZMFEdQU"},{source:"SlideShare",url:"https://github.com/note35/about/blob/dev/public/slides/2023-apache_beam.pdf"},{source:"Code",url:"https://colab.research.google.com/drive/1KT-0pNQbvxjNoLa1me_09uvQSDDwVz0q?usp=sharing"}]},{year:"2023",reason:"PyCon US Education Summit",title:"What a Great Software Engineer Intern Host Looks Like",links:[{source:"SlideShare",url:"https://github.com/note35/about/blob/dev/public/slides/2023-intern_host.pdf"}]},{year:"2022",reason:"PyCon APAC",title:"Type Erasure in Python",links:[{source:"Youtube",url:"https://www.youtube.com/watch?v=vhwWcPzvRvk"},{source:"SlideShare",url:"https://github.com/note35/about/blob/dev/public/slides/2022-type_erasure.pdf"}],tags:["cpython"]},{year:"2021",reason:"EuroPython, PyCon TW/APAC",title:"Learn from LL(1) to PEG parser the hard way",links:[{source:"Youtube",url:"https://www.youtube.com/watch?v=rlULA4PthKw"},{source:"SlideShare",url:"https://github.com/note35/about/blob/dev/public/slides/2021-PEG.pdf"}],tags:["pep617"]},{year:"2020",reason:"PyCon TW/JP",title:"Time travel: Let\u2019s learn from the history of Python packaging!",links:[{source:"Youtube",url:"https://www.youtube.com/watch?v=TvFwG2VkpFU"},{source:"SlideShare",url:"https://github.com/note35/about/blob/dev/public/slides/2020-packaging.pdf"}],tags:["pep241","pep314","pep345","pep566"]},{year:"2019",reason:"PyCon TW",title:"The str/bytes nightmare before python2 EOL",links:[{source:"Youtube",url:"https://www.youtube.com/watch?v=M5CGocevX9Q"},{source:"SlideShare",url:"https://github.com/note35/about/blob/dev/public/slides/2019-str_bytes.pdf"}]},{year:"2019",reason:"PyCon JP",title:"SupportingPython3 in Large Scale Project",links:[{source:"Youtube",url:"https://www.youtube.com/watch?v=BS-HyV3V7GI"},{source:"SlideShare",url:"https://github.com/note35/about/blob/dev/public/slides/2019-python3migration.pdf"},{source:"Github",url:"https://github.com/note35/SupportingPython3-notes"}]},{year:"2018",reason:"PyCon TW",title:"A Python Engineer Under Giant Umbrella",links:[{source:"SlideShare",url:"https://github.com/note35/about/blob/dev/public/slides/2018-work.pdf"}]},{year:"2017",reason:"Meetup Coffee with Science @ Tokyo",title:"Introduction of CTF and CGC",links:[{source:"SlideShare",url:"https://github.com/note35/about/blob/dev/public/slides/2017-ctf_cgc.pdf"}]},{year:"2017",reason:"Master Research",title:"CRAXTriage: A coverage based triage system",links:[{source:"SlideShare",url:"https://ieeexplore.ieee.org/document/8073859/"}],tags:["IEEE DSC"]},{year:"2017",reason:"PyCon TW",title:"Why do projects fail? Let's talk about the story of Sinon.PY",links:[{source:"Youtube",url:"https://www.youtube.com/watch?v=5kvgbdC7Bdk"},{source:"SlideShare",url:"https://github.com/note35/about/blob/dev/public/slides/2017-sinon.pdf"},{source:"Github",url:"https://github.com/note35/sinon"}]},{year:"2015",reason:"Master Research",title:"Using code coverage as a triage method",links:[{source:"SlideShare",url:"https://github.com/note35/about/blob/dev/public/slides/2015-master_research.pdf"},{source:"Youtube",url:"https://youtu.be/bKJtygkpJMs"}]},{year:"2014",reason:"Marvell Taiwan",title:"GCC",links:[{source:"SlideShare",url:"https://github.com/note35/about/blob/dev/public/slides/2014-GCC.pdf"}]}];function he(){return r.a.createElement(O.a,{container:!0,spacing:3},r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(p.a,{variant:"h4",component:"h2"},"Talks"),r.a.createElement(p.a,{variant:"body2",component:"h2"},"I like to speak about Python and things related to Computer Science, contributing my passion to the community. My current goal is to give at least one PyCon talk per year. My topic is mostly about language itself, it can be something from my real working experience in the company, or private research. You can find my previous talks in the table.")),r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(ue,{name:"talks table",headers:["Year","Location","Title","Links"],rowItems:pe})))}var me=[{year:"2022",reason:"\ud83e\udd13 CPython",title:"Type Erasure",links:[{source:"Github",url:"https://github.com/note35/TypeErasure-Learning"}],tags:["cpython"]},{year:"2021",reason:"\ud83e\udd13 PEP 617",title:"Parser for Basic Calculator II",links:[{source:"Github",url:"https://github.com/note35/Parser-Learning"}],tags:["python","pep617","leetcode"]},{year:"2020",reason:"\ud83e\udd13 Data Analysis",title:"GCJ 2020 Anaylsis",links:[{source:"Github",url:"https://github.com/note35/GCJ2020-analysis"}],tags:["jupyter","pandas","matplotlib","crawler","pipenv"]},{year:"2020",reason:"\ud83d\udc8e Docker",title:"GRPC + Redis",links:[{source:"Github",url:"https://github.com/note35/grpc-redis"}],tags:["docker","python","grpc","redis"]},{year:"2020",reason:"\ud83d\udc8e Docker",title:"Celery + Flask + Nginx",links:[{source:"Github",url:"https://github.com/note35/celery-rds-sqs-flask-uwsgi-nginx"}],tags:["docker","python","sqs","rds","dynamodb","flask","ngix","uwsgi"]},{year:"2020",reason:"\ud83e\udd13 Deep Learning",title:"Snake Deep Learning",links:[{source:"Github",url:"https://github.com/note35/Snake-DeepLearning"}],tags:["python","pygame","numpy","keras","tensorflow","poetry"]},{year:"2019",reason:"\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbb AngelHack \ud83c\uddef\ud83c\uddf5",title:"Libra Shell Wrapper",links:[{source:"Github",url:"https://github.com/note35/angelhack/tree/master/ah2019_endpoint"}],tags:["python","libra"]},{year:"2018",reason:"\ud83d\udc8e Web Development",title:"Flact (Flask + React)",links:[{source:"Github",url:"https://github.com/note35/flact"}],tags:["python","flask","javascript","react"]},{year:"2018",reason:"\ud83e\udd13 Type Hints",title:"Osu Map Parser",links:[{source:"Github",url:"https://github.com/note35/osu_map_parser"}],tags:["python","mypy","osu"]},{year:"2017",reason:"\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbb IETF \ud83c\uddf8\ud83c\uddec",title:"Starbucks Captive Portal Checker",links:[{source:"Github",url:"https://github.com/note35/starbucks_captive_portal_checker"},{source:"SlideShare",url:"https://github.com/capport-wg/wg-materials/blob/master/ietf100/hackathon_capport-quick-checker.pdf"}],tags:["python","scapy"]},{year:"2017",reason:"\ud83e\udd13 React",title:"Osu Map Viewer",links:[{source:"Github",url:"https://github.com/note35/osu-map-viewer"}],tags:["python","crawler","javascript","react","chartjs","docker","osu"]},{year:"2017",reason:"\ud83c\udfae",title:"Osu Bonus Performance Point Calculator",links:[{source:"Github",url:"https://github.com/note35/osu-pp-bonus"}],tags:["python","osu"]},{year:"2017",reason:"\ud83e\udd13 Async",title:"Echo Server based on talk by David Beazley in Python Brasil 2015",links:[{source:"Github",url:"https://github.com/note35/echo_server"}],tags:["python","asyncio"]},{year:"2017",reason:"\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbb Booking.com \ud83c\uddf9\ud83c\uddfc",title:"City Color Analyzer",links:[{source:"Github",url:"https://github.com/note35/booking_taipeihacks"}],tags:["python","crawler","javascript","react"]},{year:"2016",reason:"\ud83e\udd13 Open Source",title:"Sinon Py",links:[{source:"Github",url:"https://github.com/note35/sinon"}],tags:["python","pypi","mock","sinonjs"]},{year:"2015",reason:"Security Research",title:"Demo of paper: Software fault localization using DStar (D*)",links:[{source:"SlideShare",url:"https://people.cs.nctu.edu.tw/~wschou/d3js/dataset/loadjson.html"}],tags:["javascript","d3js","code coverage"]}];function be(){return r.a.createElement(O.a,{container:!0,spacing:3},r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(p.a,{variant:"h4",component:"h2"},"Toys"),r.a.createElement(p.a,{variant:"body2",component:"h2"},"A list of toys I developed previously. Some of them may still be useful now, but most of them are not actively maintained but for reference only.",r.a.createElement("br",null),["\ud83e\udd13 Study","\ud83d\udc8e Template","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbb Hackathon","\ud83c\udfae Game"].map((function(e,t){return r.a.createElement(re.a,{key:t,size:"small",label:e})})))),r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(ue,{name:"toys table",headers:["Year","Reason","Title","Links"],rowItems:me})))}function de(){var e=Object(s.a)({typography:{body2:{fontSize:16,paddingLeft:3,paddingRight:3,"@media (min-width:1024px)":{fontSize:18,paddingLeft:30,paddingRight:30}}}});return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,{theme:e},r.a.createElement(M,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",children:r.a.createElement(Q,null)}),r.a.createElement(u.a,{path:"/talks",children:r.a.createElement(he,null)}),r.a.createElement(u.a,{path:"/toys",children:r.a.createElement(be,null)}),r.a.createElement(u.a,{path:"/:color",children:r.a.createElement(b,{prefix:"test"})}),r.a.createElement(u.a,{children:r.a.createElement("div",null,"home")})),r.a.createElement(p.a,{variant:"body2",component:"h2",style:{color:"grey",paddingTop:30}},["\xa9 Kir 2023 (Last updated: 2023 Dec 4th)","The [site](https://github.com/note35/about) is made by [TypeScript](https://www.typescriptlang.org/), [React (CRA)](https://reactjs.org/docs/create-a-new-react-app.html), [Material UI](https://material-ui.com/), and hosted by [Github](https://github.com/)"].map((function(e,t){return r.a.createElement("div",{key:t},W(e))})))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ye=Object(s.a)({palette:{type:"light"}});i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{theme:ye},r.a.createElement(l.a,{basename:"/about"},r.a.createElement(de,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[77,1,2]]]);
//# sourceMappingURL=main.aa500914.chunk.js.map