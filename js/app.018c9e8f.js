(function(t){function e(e){for(var o,i,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)i=r[d],s[i]&&p.push(s[i][0]),s[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],o=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(o=!1)}o&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},s={app:0},n=[];function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0f43":function(t,e,a){"use strict";var o=a("d4ed"),s=a.n(o);s.a},"1e37":function(t,e,a){t.exports=a.p+"img/phone.6212edc7.png"},"30ea":function(t,e,a){},"46d4":function(t,e,a){},"52f3":function(t,e,a){"use strict";var o=a("b045"),s=a.n(o);s.a},"546a":function(t,e,a){t.exports=a.p+"img/5.4738acaf.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var o=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper",class:{open:t.openMenu},attrs:{id:"app"}},[a("Header",{on:{open:t.toggleMenu}}),a("router-view",{attrs:{openMenu:t.openMenu}}),a("Footer")],1)},n=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container h-wrap"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12"},[o("div",{staticClass:"header"},[o("router-link",{staticClass:"logo",attrs:{to:"/"}},[o("img",{attrs:{src:a("9d64"),alt:""}})]),o("div",{staticClass:"header__menu",class:{open:t.mobileMenuStatus}},[o("router-link",{attrs:{to:"/"}},[t._v("Home")]),o("router-link",{attrs:{to:"/tutorial-videos"}},[t._v("Tutorial Videos")]),o("router-link",{attrs:{to:"/user-guide"}},[t._v("User Guide")]),o("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._m(0)],1),o("a",{staticClass:"header__menu-open",class:{open:t.mobileMenuStatus},attrs:{href:"javascript:void(0)"},on:{click:t.mobileMenuToggle}})],1)])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"https://www.myetherwallet.com/"}},[t._v("MyEtherWallet "),a("span",{staticClass:"header__menu-arrow"})])}],c={name:"Header",data:function(){return{mobileMenuStatus:!1}},props:{},methods:{mobileMenuToggle:function(){this.mobileMenuStatus=!this.mobileMenuStatus,this.$emit("open",this.mobileMenuStatus)}},watch:{$route:function(){this.mobileMenuStatus=!1,this.$emit("open",this.mobileMenuStatus)}}},l=c,u=(a("52f3"),a("2877")),d=Object(u["a"])(l,i,r,!1,null,null,null);d.options.__file="Header.vue";var p=d.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer",class:{open:t.openMenu}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-lg-3"},[a("router-link",{staticClass:"footer__link",attrs:{to:"/about"}},[t._v("About")]),a("router-link",{staticClass:"footer__link",attrs:{to:"/user-guide"}},[t._v("User Guide")]),a("a",{staticClass:"footer__link",attrs:{href:"https://kb.myetherwallet.com"}},[t._v("Knowledge Base")])],1),t._m(1),t._m(2)]),t._m(3)])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-3"},[a("a",{staticClass:"footer__logo",attrs:{href:"https://www.myetherwallet.com"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-3"},[a("a",{staticClass:"footer__link",attrs:{href:"https://www.myetherwallet.com/"}},[t._v("MyEtherWallet.com")]),a("a",{staticClass:"footer__link",attrs:{href:"https://team.myetherwallet.com/"}},[t._v("Team")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-3"},[a("a",{staticClass:"footer__link",attrs:{href:"mailto:support@myetherwallet.com?subject=MEWconnect website support request"}},[t._v("Support")]),a("a",{staticClass:"footer__link",attrs:{href:"https://www.myetherwallet.com/privacy-policy.html"}},[t._v("Privacy policy")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"footer__copy"},[t._v("© 2018 MyEtherWallet, Inc")])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"footer__social"},[a("a",{staticClass:"fb",attrs:{href:"https://www.facebook.com/MyEtherWallet/"}}),a("a",{staticClass:"tw",attrs:{href:"https://twitter.com/myetherwallet"}}),a("a",{staticClass:"inst",attrs:{href:"https://www.instagram.com/myetherwallet/"}}),a("a",{staticClass:"lin",attrs:{href:"https://www.linkedin.com/company/myetherwallet"}}),a("a",{staticClass:"gh",attrs:{href:"https://github.com/MyEtherWallet"}}),a("a",{staticClass:"rt",attrs:{href:"https://www.reddit.com/r/MyEtherWallet/"}}),a("a",{staticClass:"md",attrs:{href:"https://medium.com/@myetherwallet"}})])])])}],v={name:"Footer",props:["openMenu"]},f=v,_=(a("e5f0"),Object(u["a"])(f,h,m,!1,null,"144ad428",null));_.options.__file="Footer.vue";var w=_.exports,y={name:"App",data:function(){return{openMenu:!1}},components:{Header:p,Footer:w},methods:{toggleMenu:function(t){this.openMenu=t}}},b=y,g=(a("5c0b"),Object(u["a"])(b,s,n,!1,null,null,null));g.options.__file="App.vue";var C=g.exports,E=a("8c4f"),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("TopIntro"),a("UserGuide"),a("Security"),a("Protect"),a("Phishers"),a("Decentralized"),a("Mewteam"),a("Comingsoon")],1)},M=[],k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"topintro"},[t._m(0),o("div",{staticClass:"app"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12"},[o("div",{staticClass:"app__video"},[o("video",{ref:"player",attrs:{poster:a("e886"),loop:"loop",muted:""},domProps:{muted:!0}},[o("source",{attrs:{src:a("7557"),type:"video/mp4"}}),o("source",{attrs:{src:a("910b"),type:"video/webm"}})]),o("a",{directives:[{name:"show",rawName:"v-show",value:!t.autoPlay,expression:"!autoPlay"}],staticClass:"app__play",attrs:{href:"javascript:void(0)"},on:{click:t.Play}})]),o("div",{staticClass:"app__download"},[o("div",{staticClass:"app__download-buttons"},[t.iPad?o("a",{staticClass:"add-store",attrs:{href:"javascript:void(0)"},on:{click:t.toStore}},[o("img",{attrs:{src:a("c056"),height:"47"}})]):o("a",{staticClass:"add-store",attrs:{href:"https://itunes.apple.com/us/app/mewconnect/id1391097156"}},[o("img",{attrs:{src:a("c056"),height:"47"}})]),t._m(1)]),t._m(2)])])])])])])},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"title"},[a("h1",[t._v("Finally, a ‘hardware wallet’ without all the hardware")]),a("p",[t._v("An official, free companion app for MyEtherWallet that helps you secure your funds as never before.")])])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a",{staticClass:"add-store",attrs:{href:"https://play.google.com/store/apps/details?id=com.myetherwallet.mewconnect"}},[o("img",{attrs:{src:a("6710"),height:"47"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app__download-desc"},[t._v("\n              Psst...MEWconnect is here, so let us know what you think? If you have any feedback for us,\n              "),a("a",{attrs:{href:"mailto:support@MyEtherWallet.com?subject=MEWconnect Android Request"}},[t._v("get in touch")]),t._v("! MEWconnect belongs to you, so help us make it better.\n            ")])}],T=a("faac"),O=a.n(T),P={name:"topintro",data:function(){return{autoPlay:!1,iPad:!1}},mounted:function(){window.innerWidth>1024&&this.Play(),this.iPad="iPad"===O.a.product},methods:{Play:function(){var t=this.$refs.player;t.play(),this.autoPlay=!0,t.addEventListener("ended",function(){this.autoPlay=!1},!1)},toStore:function(){window.confirm("MEWconnect is not optimized for iPad, we don't recommend using the app on this device")&&(window.location.href="https://itunes.apple.com/us/app/mewconnect/id1391097156")}}},j=P,S=(a("b05d"),Object(u["a"])(j,k,W,!1,null,null,null));S.options.__file="TopIntro.vue";var $=S.exports,I=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"user-guide-home"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12"},[o("router-link",{staticClass:"user-guide-home__link",attrs:{to:"/tutorial-videos"}},[o("img",{attrs:{src:a("f697"),alt:""}})]),o("div",{staticClass:"user-guide-home__text"},[o("h3",[t._v("Tutorial Videos")]),o("p",[t._v("This is our informational series dedicated to showing users all the workings of our MEWconnect smartphone app.\n            "),o("router-link",{attrs:{to:"/tutorial-videos"}},[t._v("Learn more.")])],1)])],1)])])])},A=[],U={name:"user-guide-home",data:function(){return{autoPlay:!1}},components:{},mounted:function(){},methods:{}},N=U,G=(a("c091"),Object(u["a"])(N,I,A,!1,null,null,null));G.options.__file="UserGuide.vue";var H=G.exports,Y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hardware"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"text-block text-block--hardware"},[a("div",{staticClass:"text-block__icon text-block__icon--hardware"}),a("h2",[t._v("Hardware wallet-style security features")]),a("p",[t._v("MEWconnect stores your private keys safely in a "),a("b",[t._v("local")]),t._v(", "),a("b",[t._v("isolated")]),t._v(", "),a("b",[t._v("and secure vault")]),t._v(" on your device to protect your account like the ELEVENTEEN GOOGILLION dollars it will one day be worth (probably).")])])])])])])}],L={name:"security",components:{}},R=L,D=(a("f224"),Object(u["a"])(R,Y,F,!1,null,"0381e457",null));D.options.__file="Security.vue";var V=D.exports,B=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"secure"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"text-block text-block--secure"},[a("div",{staticClass:"text-block__icon text-block__icon--secure"}),a("h2",[t._v("Two step verification to protect your every transaction")]),a("p",[t._v("In the World of Crypto, you are your own bank. MEWconnect helps to ensure that you are you, and then that you are you again. You know, just in case.")])])])])])])}],q={name:"protect",components:{}},K=q,Q=(a("f6a7"),Object(u["a"])(K,B,z,!1,null,"f2ef94a6",null));Q.options.__file="Protect.vue";var Z=Q.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"protect"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"text-block text-block--protect"},[a("div",{staticClass:"text-block__icon text-block__icon--protect"}),a("h2",[t._v("Phishers will have to phish somewhere else")]),a("p",[t._v("No one can obtain your private key."),a("br"),t._v("MEWconnect is official MyEtherWallet software. You can "),a("a",{attrs:{href:"https://github.com/MyEtherWallet/MEWconnect"}},[t._v("check the validity of the app")]),t._v(" yourself. ")])])])])])])}],tt={name:"phishers",components:{}},et=tt,at=(a("edb9"),Object(u["a"])(et,J,X,!1,null,"c1256c1c",null));at.options.__file="Phishers.vue";var ot=at.exports,st=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},nt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p2p"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-lg-12"},[a("h2",{staticClass:"p2p__title"},[t._v("Think de-centralized")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"p2p__item"},[a("div",{staticClass:"p2p__item-icon p2p__item-icon--p2p"}),a("h4",[t._v("No centralized servers for communication")]),a("p",[t._v("No databases. MEWconnect and MyEtherWallet talk via P2P communication.")])])]),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"p2p__item"},[a("div",{staticClass:"p2p__item-icon p2p__item-icon--no-data"}),a("h4",[t._v("No data collection")]),a("p",[t._v("MyEtherWallet can’t collect your personal data even if we wanted to."),a("br"),t._v("Don’t believe us?"),a("br"),t._v("Check out our "),a("a",{attrs:{href:"https://www.myetherwallet.com/privacy-policy.html"}},[t._v("privacy policy")]),t._v(".")])])]),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"p2p__item p2p__item--last"},[a("div",{staticClass:"p2p__item-icon p2p__item-icon--comunity"}),a("h4",[t._v("Open source")]),a("p",[t._v("Transparent, free, and open source. We serve the community. Also, all our software is independently audited by the community."),a("br"),t._v("Check out our "),a("a",{attrs:{href:"https://github.com/MyEtherWallet/MEWconnect"}},[t._v("source code")]),t._v(".")])])])])])])])])}],it={name:"decentralized",components:{}},rt=it,ct=(a("f08f"),Object(u["a"])(rt,st,nt,!1,null,"4b901613",null));ct.options.__file="Decentralized.vue";var lt=ct.exports,ut=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},dt=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"team"},[o("img",{attrs:{src:a("a24a"),alt:""}}),o("div",{staticClass:"team__text"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12"},[o("h2",[t._v("Built and maintained"),o("br"),t._v("by the MyEtherWallet team")]),o("p",[t._v("The team that brought you the Ethereum’s original and most trusted wallet interface.")])])])])])])}],pt={name:"mewteam",components:{}},ht=pt,mt=(a("0f43"),Object(u["a"])(ht,ut,dt,!1,null,"29548eb3",null));mt.options.__file="Mewteam.vue";var vt=mt.exports,ft=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"last"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row align-items-end"},[t._m(0),o("div",{staticClass:"col-lg-6"},[o("div",{staticClass:"app__download"},[o("div",{staticClass:"app__download-coming"},[t._v("Get the app")]),o("div",{staticClass:"app__download-buttons"},[t.iPad?o("a",{attrs:{href:"javascript:void(0)"},on:{click:t.toStore}},[o("img",{attrs:{src:a("c056"),height:"47"}})]):o("a",{attrs:{href:"https://itunes.apple.com/us/app/mewconnect/id1391097156"}},[o("img",{attrs:{src:a("c056"),height:"47"}})]),t._m(1)]),o("div",{staticClass:"app__download-desc"})])])])])])},_t=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-lg-6"},[o("div",{staticClass:"last__phone"},[o("img",{attrs:{src:a("1e37"),alt:""}})])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.myetherwallet.mewconnect"}},[o("img",{attrs:{src:a("6710"),height:"47"}})])}],wt={name:"comingsoon",data:function(){return{iPad:!1}},mounted:function(){this.iPad="iPad"===O.a.product},methods:{toStore:function(){window.confirm("MEWconnect is not optimized for iPad, we don't recommend using the app on this device")&&(window.location.href="https://itunes.apple.com/us/app/mewconnect/id1391097156")}}},yt=wt,bt=(a("a74e"),Object(u["a"])(yt,ft,_t,!1,null,null,null));bt.options.__file="Comingsoon.vue";var gt=bt.exports,Ct={name:"home",components:{Header:p,TopIntro:$,UserGuide:H,Security:V,Protect:Z,Phishers:ot,Decentralized:lt,Mewteam:vt,Comingsoon:gt,Footer:w}},Et=Ct,xt=(a("d01b"),Object(u["a"])(Et,x,M,!1,null,"3237c0ba",null));xt.options.__file="Home.vue";var Mt=xt.exports,kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("AboutText")],1)},Wt=[],Tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ot=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about-text"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("h2",[t._v("About MEWconnect")]),a("div",{staticClass:"about-text__text"},[a("p",[t._v("MEWconnect is a simple, powerful new app for your smartphone that enables a better,more secure way of managing your Ethereum assets and ERC-20 Tokens. It is an official mobile software brought by MyEtherWallet Inc, currently available for Android and iOS smartphones.")]),a("p",[t._v("MEWconnect generates a new wallet then encrypts your private key and then stores it in isolation using your phone’s built-in security architecture. The app establishes a secure connection while keeping your private key separate from the browser. The software implements two-factor authentication, protecting you from unauthorized transaction broadcasting on the blockchain. Only you will be able to verify and sign the transaction. MyEtherWallet will never collect any of your personal data, all of your information will only be stored on your smartphone.")]),a("p",[t._v("With added layers of security, MEWconnect puts you in total control of your crypto assets.")]),a("h4",[t._v("Minimum requirements:")]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"about-text__feautures-item"},[a("ul",{staticStyle:{"list-style-type":"disc"}},[a("li",[a("h5",[t._v("iOS 10, iPhone 5s and above")])]),a("li",[a("h5",[t._v("Android 6.0 and above")])])])])])]),a("div",{staticClass:"about-text__feautures"},[a("h3",[t._v("Features:")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"about-text__feautures-item"},[a("h4",[t._v("Client-side Encryption")]),a("p",[t._v("An encrypted version of your private key will be stored in isolation on your device. MEWconnect will never expose your private key to any browser!")])])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"about-text__feautures-item"},[a("h4",[t._v("2-way Transaction Verification")]),a("p",[t._v("With MEWconnect you will always be able to verify the amount you are sending, and to whom before signing the transaction and broadcasting it to the blockchain.")])])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"about-text__feautures-item"},[a("h4",[t._v("Back Up Your Account")]),a("p",[t._v("You will never lose access to your Accounts and Funds. If you get a new phone, you can always retrieve your backup with your 24-word Mnemonic phrase.")])])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"about-text__feautures-item"},[a("h4",[t._v("Safeguard from Phishing and Malware")]),a("p",[t._v("Onboarding, restoration, connection and transaction signing are exclusive to the phone environment. No phishers or malware will be able to obtain your private key!")])])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"about-text__feautures-item"},[a("h4",[t._v("Free and Open Source")]),a("p",[t._v("This phone app will be free to use and open source. You will always be able see and audit all of the code that runs MEWconnect and MyEtherWallet.")])])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"about-text__feautures-item"},[a("h4",[t._v("P2P Communication — no Data Collection")]),a("p",[t._v("Your phone will establish an encrypted channel with the browser. With no need for a database, only you will have have access to your personal data!")])])])])]),a("div",{staticClass:"about-text__help"},[t._v("\n          To get help, please visit\n          "),a("a",{attrs:{href:"https://myetherwallet.github.io/knowledge-base/"}},[t._v("Knowledge Base")]),t._v(" or send email to:\n          "),a("a",{attrs:{href:"mailto:support@myetherwallet.com"}},[t._v("support@myetherwallet.com")]),t._v(" To learn more, please visit our official page:\n          "),a("a",{attrs:{href:"https://mewconnect.myetherwallet.com/"}},[t._v("mewconnect.myetherwallet.com")])])])])])])}],Pt={name:"AboutText",components:{}},jt=Pt,St=(a("e3b6"),Object(u["a"])(jt,Tt,Ot,!1,null,"1c332bbc",null));St.options.__file="AboutText.vue";var $t=St.exports,It={name:"about",components:{Header:p,Footer:w,AboutText:$t}},At=It,Ut=(a("e1bb"),Object(u["a"])(At,kt,Wt,!1,null,null,null));Ut.options.__file="About.vue";var Nt=Ut.exports,Gt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"user-guide"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12"},[o("h2",[t._v("MEWconnect User Guide")]),t._l(t.items,function(t,e){return o("UserGuideItem",{key:e,attrs:{item:t,index:e}})}),o("div",{staticClass:"user-guide__help"},[o("div",{staticClass:"app__download"},[o("div",{staticClass:"app__download-buttons"},[t.iPad?o("a",{attrs:{href:"javascript:void(0)"},on:{click:t.toStore}},[o("img",{attrs:{src:a("c056"),height:"47"}})]):o("a",{attrs:{href:"https://itunes.apple.com/us/app/mewconnect/id1391097156"}},[o("img",{attrs:{src:a("c056"),height:"47"}})]),t._m(0)]),o("div",{staticClass:"app__download-desc"})]),o("h3",[t._v("Questions or Concerns?")]),t._m(1)])],2)])])])},Ht=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.myetherwallet.mewconnect"}},[o("img",{attrs:{src:a("6710"),height:"47"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("\n            Email us at:\n            "),a("a",{attrs:{href:"mailto:support@myetherwallet.com?subject=MEWconnect Android Request"}},[t._v("support@myetherwallet.com")])])}],Yt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"user-guide-item",class:{reverse:(t.index+1)%2==0}},[o("div",{staticClass:"user-guide-item__text"},[o("h3",[t._v(t._s(t.item.name))]),t._l(t.item.list,function(t,e){return o("ListItem",{key:e,attrs:{item:t,index:e}})})],2),o("div",{staticClass:"user-guide-item__image"},[1===t.item.image?o("img",{attrs:{src:a("98a8"),alt:""}}):t._e(),2===t.item.image?o("img",{attrs:{src:a("593c"),alt:""}}):t._e(),3===t.item.image?o("img",{attrs:{src:a("6800"),alt:""}}):t._e(),4===t.item.image?o("img",{attrs:{src:a("ffd7"),alt:""}}):t._e(),5===t.item.image?o("img",{attrs:{src:a("546a"),alt:""}}):t._e()])])},Ft=[],Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list-item"},[a("div",{staticClass:"list-item__text"},[a("span",[t._v(t._s(t.index+1)+".")]),a("div",{domProps:{innerHTML:t._s(t.item.text)}})]),t.item.description.length>0?a("div",{staticClass:"list-item__description",domProps:{innerHTML:t._s(t.item.description)}}):t._e()])},Rt=[],Dt={name:"ListItem",props:["item","index"]},Vt=Dt,Bt=(a("d456"),Object(u["a"])(Vt,Lt,Rt,!1,null,null,null));Bt.options.__file="ListItem.vue";var zt=Bt.exports,qt={name:"UserGuideItem",props:["item","index"],components:{ListItem:zt}},Kt=qt,Qt=(a("b2a7"),Object(u["a"])(Kt,Yt,Ft,!1,null,null,null));Qt.options.__file="UserGuideItem.vue";var Zt=Qt.exports,Jt={name:"user-guide",data:function(){return{items:[{name:"Create a Wallet",image:1,list:[{text:"Open your MEWconnect app.",description:""},{text:"Click ‘Create New Wallet’.",description:""},{text:"Pick a strong password.",description:"This step is very important. Make sure you pick a password that is not easy to guess, but also write it down with pen and paper. If you forget it, we cannot recover it for you. There is only one other way to recover a wallet, and we’ll get to that soon."},{text:"Type it again.",description:""},{text:"Click ‘Start using MEWconnect’.",description:"You’re done! You’ll be taken to a screen that shows your new wallet's address backed by a unique color-code. On this screen you’ll find all your ETH and tokens. There is also a handy ‘Share’ button next to your address, in case you want to send it to someone."}]},{name:"Back it Up",image:2,list:[{text:"Click ‘Back Up Now’.",description:""},{text:"Click ‘Create New Wallet’.",description:""},{text:"Get a pen and paper ready. Then press ‘Start’.",description:""},{text:"Enter in your password to verify you’re you.",description:""},{text:"WRITE DOWN YOUR SEED WORDS.",description:"This is the single most important piece of information about your wallet. These 12 words will decide the future of your funds. Do not lose them, and do not screenshot them. Pass the seed word check test."},{text:"You’re done!",description:"All backed up and ready to connect to MEW."}]},{name:"Connect with MEW",image:3,list:[{text:"Unlock your wallet on MEWconnect.",description:""},{text:'Find a desktop computer. Head to the <a href="https://mcbeta.myetherwallet.com/">MEW site</a>.',description:"Check for the SSL certification that states ‘MyEtherWallet Inc [US]’ in the URL. We recommend the Google Chrome browser."},{text:"Choose the ‘Send Ether & Tokens’ tab..",description:""},{text:"Click ‘MEW Connect’ as the method of access.",description:""},{text:"On the app, click ‘Scan to Connect’.",description:""},{text:"Now use MEWconnect to scan the QR code.",description:"You’re done! You can now use our interface as usual, with the MEWconnect app as your main method of access. Congratulations!"}]},{name:"Send a Transaction",image:4,list:[{text:"Unlock your wallet on MEWconnect.",description:""},{text:'Connect to the <a href="https://mcbeta.myetherwallet.com/">MEW site</a>, as shown above.',description:""},{text:"Follow the process of a regular transaction.",description:'Fill in the ‘To Address’, ‘Amount to Send’, and ‘Gas Limit’ fields. If you have any questions, refer to our article on <a href="https://kb.myetherwallet.com/send/how-to-send-transaction.html">How to Send a Transaction</a>.'},{text:"Confirm your transaction on the MEWconnect app.",description:"You’re done! Your transaction is broadcasting to the network, and you’ll be able to check its status shortly with a provided transaction ID."}]},{name:"Overview of the Wallet",image:5,list:[{text:"Where to see tokens",description:"These can be found at the bottom of the wallet screen."},{text:"Where to contact us",description:" There is an information button in the top-left, that offers a contact resource and other links of interest."},{text:"Where to buy ETH",description:"You can purchase ETH in the MEWconnect app by choosing the top-right button labelled ‘Buy Ether’."},{text:"How to share your address",description:" You can share your address with anyone you’d like by clicking the arrow button to the right of your address. It will give you different options like text, email, twitter, etc.."}]}]}},components:{UserGuideItem:Zt}},Xt=Jt,te=(a("a0c3"),Object(u["a"])(Xt,Gt,Ht,!1,null,null,null));te.options.__file="UserGuide.vue";var ee=te.exports,ae=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tutorial-videos"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("h2",[t._v("MEWconnect Tutorial Videos")]),t._l(t.items,function(t,e){return a("TutorialVideoItem",{key:e,attrs:{item:t,index:e}})})],2)])])])},oe=[],se=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tutorial-video-item"},[a("h3",[t._v(t._s(t.item.name))]),a("div",{staticClass:"tutorial-video-item__video"},[a("iframe",{attrs:{width:"100%",src:t.item.code,frameborder:"0",allowfullscreen:""}})]),a("p",[t._v(t._s(t.item.text))])])},ne=[],ie={name:"TutorialVideoItem",props:["item","index"]},re=ie,ce=(a("5c2d"),Object(u["a"])(re,se,ne,!1,null,null,null));ce.options.__file="TutorialVideoItem.vue";var le=ce.exports,ue={name:"tutorial-videos",data:function(){return{items:[{name:"MEWconnect 101: Create a wallet",code:"https://www.youtube.com/embed/p2q6qrcKtj8",text:"In this video, we teach users how to create a new Ethereum wallet on our MEWconnect smartphone app."},{name:"MEWconnect 101: Back up your wallet",code:"https://www.youtube.com/embed/1aZANjFEQ7I",text:"In this video, we teach users how to back up their MEWconnect wallet. WRITE DOWN THOSE RECOVERY WORDS! "},{name:"MEWconnect 101: Connect to MEW",code:"https://www.youtube.com/embed/IuyfpsYTZrI",text:"In this video, we teach users how to connect their MEWconnect wallet with our interface, MyEtherWallet! "},{name:"MEWconnect 101: Make a transaction",code:"https://www.youtube.com/embed/nMefcCPr2ZU",text:"In this video, we teach users how to transfer funds using their MEWconnect wallet and our interface, MyEtherWallet! "},{name:"MEWconnect 101: Wallet overview",code:"https://www.youtube.com/embed/RjgxxNgTBGM",text:"In this video, we explore the in's and out's of the MEWconnect app.  "}]}},components:{TutorialVideoItem:le}},de=ue,pe=(a("625c"),Object(u["a"])(de,ae,oe,!1,null,null,null));pe.options.__file="TutorialVideos.vue";var he=pe.exports,me=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ve=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-not-found"},[a("div",{staticClass:"container"},[a("h2",[t._v("404")]),a("p",[t._v("Page Not Found")])])])}],fe={name:"pageNotFound"},_e=fe,we=(a("5749"),Object(u["a"])(_e,me,ve,!1,null,null,null));we.options.__file="PageNotFound.vue";var ye=we.exports;o["a"].use(E["a"]);var be=new E["a"]({mode:"hash",routes:[{path:"/",name:"home",component:Mt,meta:{title:"MEWconnect"}},{path:"/about",name:"about",component:Nt,meta:{title:"MEWconnect About"}},{path:"/user-guide",name:"user-guide",component:ee,meta:{title:"MEWconnect User Guide"}},{path:"/tutorial-videos",name:"tutorial-videos",component:he,meta:{title:"MEWconnect Tutorial Videos"}},{path:"*",component:ye}],scrollBehavior:function(){return{x:0,y:0}}});be.beforeEach(function(t,e,a){document.title=t.meta.title,a()});var ge=be,Ce=a("2f62");o["a"].use(Ce["a"]);var Ee=new Ce["a"].Store({state:{},mutations:{},actions:{}});o["a"].config.productionTip=!1,new o["a"]({router:ge,store:Ee,render:function(t){return t(C)}}).$mount("#app")},5749:function(t,e,a){"use strict";var o=a("f8f9"),s=a.n(o);s.a},"578a":function(t,e,a){},"593c":function(t,e,a){t.exports=a.p+"img/2.93ac5d7f.jpg"},"5c0b":function(t,e,a){"use strict";var o=a("5e27"),s=a.n(o);s.a},"5c2d":function(t,e,a){"use strict";var o=a("7782"),s=a.n(o);s.a},"5e27":function(t,e,a){},"625c":function(t,e,a){"use strict";var o=a("578a"),s=a.n(o);s.a},"668f":function(t,e,a){},6710:function(t,e,a){t.exports=a.p+"img/google-play-badge-2.7efb7ee2.svg"},6800:function(t,e,a){t.exports=a.p+"img/3.d127577f.jpg"},7155:function(t,e,a){},7557:function(t,e,a){t.exports=a.p+"media/app-video.08f8251f.mp4"},7782:function(t,e,a){},"7c1f":function(t,e,a){},"86c9":function(t,e,a){},"910b":function(t,e,a){t.exports=a.p+"media/app-video.a53d6091.webm"},"98a8":function(t,e,a){t.exports=a.p+"img/1.67df6930.jpg"},"9d64":function(t,e,a){t.exports=a.p+"img/logo.b6a010df.png"},a0c3:function(t,e,a){"use strict";var o=a("7155"),s=a.n(o);s.a},a24a:function(t,e,a){t.exports=a.p+"img/team.80423f42.jpg"},a74e:function(t,e,a){"use strict";var o=a("7c1f"),s=a.n(o);s.a},b045:function(t,e,a){},b05d:function(t,e,a){"use strict";var o=a("46d4"),s=a.n(o);s.a},b18f:function(t,e,a){},b2a7:function(t,e,a){"use strict";var o=a("f553"),s=a.n(o);s.a},bfb4:function(t,e,a){},c056:function(t,e,a){t.exports=a.p+"img/App_Store_Badge.84ab2769.svg"},c091:function(t,e,a){"use strict";var o=a("bfb4"),s=a.n(o);s.a},c1de:function(t,e,a){},c46d:function(t,e,a){},d01b:function(t,e,a){"use strict";var o=a("30ea"),s=a.n(o);s.a},d456:function(t,e,a){"use strict";var o=a("b18f"),s=a.n(o);s.a},d4ed:function(t,e,a){},e1bb:function(t,e,a){"use strict";var o=a("c1de"),s=a.n(o);s.a},e3b6:function(t,e,a){"use strict";var o=a("ef27"),s=a.n(o);s.a},e4a8:function(t,e,a){},e5f0:function(t,e,a){"use strict";var o=a("c46d"),s=a.n(o);s.a},e886:function(t,e,a){t.exports=a.p+"img/app.4943a07c.png"},edb9:function(t,e,a){"use strict";var o=a("e4a8"),s=a.n(o);s.a},ef27:function(t,e,a){},f07a:function(t,e,a){},f08f:function(t,e,a){"use strict";var o=a("86c9"),s=a.n(o);s.a},f224:function(t,e,a){"use strict";var o=a("f07a"),s=a.n(o);s.a},f553:function(t,e,a){},f697:function(t,e,a){t.exports=a.p+"img/user-guide.3cb8fc2e.png"},f6a7:function(t,e,a){"use strict";var o=a("668f"),s=a.n(o);s.a},f8f9:function(t,e,a){},ffd7:function(t,e,a){t.exports=a.p+"img/4.3a218b4b.jpg"}});
//# sourceMappingURL=app.018c9e8f.js.map