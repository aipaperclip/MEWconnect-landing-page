(function(t){function e(e){for(var s,i,r=e[0],c=e[1],l=e[2],p=0,d=[];p<r.length;p++)i=r[p],o[i]&&d.push(o[i][0]),o[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},o={0:0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;n.push([0,1]),a()})({"+pNS":function(t,e,a){},"/9dW":function(t,e,a){t.exports=a.p+"img/4.3a218b4b.jpg"},0:function(t,e,a){t.exports=a("Vtdi")},"0CM3":function(t,e,a){},"1Fau":function(t,e,a){"use strict";var s=a("jHkb"),o=a.n(s);o.a},"1N9+":function(t,e,a){},"4bvy":function(t,e,a){"use strict";var s=a("eMzH"),o=a.n(s);o.a},"6IaZ":function(t,e,a){t.exports=a.p+"img/app.4943a07c.png"},"8iSi":function(t,e,a){"use strict";var s=a("sujE"),o=a.n(s);o.a},"8xDP":function(t,e,a){},"9qfE":function(t,e,a){"use strict";var s=a("XkZ/"),o=a.n(s);o.a},D0Nq:function(t,e,a){"use strict";var s=a("nxrr"),o=a.n(s);o.a},"EG/1":function(t,e,a){},HjcO:function(t,e,a){t.exports=a.p+"img/phone.e3eb92f0.png"},Iqo6:function(t,e,a){"use strict";var s=a("8xDP"),o=a.n(s);o.a},LJVw:function(t,e,a){"use strict";var s=a("1N9+"),o=a.n(s);o.a},NZSl:function(t,e,a){t.exports=a.p+"img/appstore.75c18b83.png"},Omas:function(t,e,a){},UvN3:function(t,e,a){"use strict";var s=a("+pNS"),o=a.n(s);o.a},V0k4:function(t,e,a){"use strict";var s=a("bdLh"),o=a.n(s);o.a},VGoG:function(t,e,a){t.exports=a.p+"img/5.4738acaf.jpg"},Vtdi:function(t,e,a){"use strict";a.r(e);a("yt8O"),a("VRzm");var s=a("Kw5r"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper",class:{open:t.openMenu},attrs:{id:"app"}},[a("Header",{on:{open:t.toggleMenu}}),a("router-view",{attrs:{openMenu:t.openMenu}}),a("Footer")],1)},n=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container h-wrap"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"header"},[s("router-link",{staticClass:"logo",attrs:{to:"/"}},[s("img",{attrs:{src:a("nWR2"),alt:""}})]),s("div",{staticClass:"header__menu",class:{open:t.mobileMenuStatus}},[s("router-link",{attrs:{to:"/user-guide"}},[t._v("User Guide")]),s("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._m(0)],1),s("a",{staticClass:"header__menu-open",class:{open:t.mobileMenuStatus},attrs:{href:"javascript:void(0)"},on:{click:t.mobileMenuToggle}})],1)])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"https://www.myetherwallet.com/"}},[t._v("MyEtherWallet "),a("span",{staticClass:"header__menu-arrow"})])}],c={name:"Header",data:function(){return{mobileMenuStatus:!1}},props:{},methods:{mobileMenuToggle:function(){this.mobileMenuStatus=!this.mobileMenuStatus,this.$emit("open",this.mobileMenuStatus)}},watch:{$route:function(t,e){this.mobileMenuStatus=!1,this.$emit("open",this.mobileMenuStatus)}}},l=c,u=(a("UvN3"),a("KHd+")),p=Object(u["a"])(l,i,r,!1,null,null,null),d=p.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer",class:{open:t.openMenu}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-lg-3"},[a("router-link",{staticClass:"footer__link",attrs:{to:"/about"}},[t._v("About")]),a("router-link",{staticClass:"footer__link",attrs:{to:"/user-guide"}},[t._v("User Guide")]),a("a",{staticClass:"footer__link",attrs:{href:"https://kb.myetherwallet.com"}},[t._v("Knowledge Base")])],1),t._m(1),t._m(2)]),t._m(3)])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-3"},[a("a",{staticClass:"footer__logo",attrs:{href:"https://www.myetherwallet.com"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-3"},[a("a",{staticClass:"footer__link",attrs:{href:"https://www.myetherwallet.com/"}},[t._v("MyEtherWallet.com")]),a("a",{staticClass:"footer__link",attrs:{href:"https://team.myetherwallet.com/"}},[t._v("Team")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-3"},[a("a",{staticClass:"footer__link",attrs:{href:"mailto:support@myetherwallet.com?subject=MEWconnect website support request"}},[t._v("Support")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"footer__copy"},[t._v("© 2018 MyEtherWallet, Inc")])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"footer__social"},[a("a",{staticClass:"fb",attrs:{href:"https://www.facebook.com/MyEtherWallet/"}}),a("a",{staticClass:"tw",attrs:{href:"https://twitter.com/myetherwallet"}}),a("a",{staticClass:"inst",attrs:{href:"https://www.instagram.com/myetherwallet/"}}),a("a",{staticClass:"lin",attrs:{href:"https://www.linkedin.com/company/myetherwallet"}}),a("a",{staticClass:"gh",attrs:{href:"https://github.com/MyEtherWallet"}}),a("a",{staticClass:"rt",attrs:{href:"https://www.reddit.com/r/MyEtherWallet/"}}),a("a",{staticClass:"md",attrs:{href:"https://medium.com/@myetherwallet"}})])])])}],v={name:"Footer",props:["openMenu"]},f=v,_=(a("LJVw"),Object(u["a"])(f,h,m,!1,null,"6fbdf6c4",null)),y=_.exports,w={name:"App",data:function(){return{openMenu:!1}},components:{Header:d,Footer:y},methods:{toggleMenu:function(t){this.openMenu=t}}},b=w,g=(a("XAuw"),Object(u["a"])(b,o,n,!1,null,null,null)),C=g.exports,E=a("jE9Z"),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("TopIntro"),a("Security"),a("Protect"),a("Phishers"),a("Decentralized"),a("Mewteam"),a("Comingsoon")],1)},k=[],M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"topintro"},[t._m(0),s("div",{staticClass:"app"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"app__video"},[s("video",{ref:"player",attrs:{poster:a("6IaZ"),loop:"loop",muted:""},domProps:{muted:!0}},[s("source",{attrs:{src:a("dVfm"),type:"video/mp4"}}),s("source",{attrs:{src:a("kQt7"),type:"video/webm"}})]),s("a",{directives:[{name:"show",rawName:"v-show",value:!t.autoPlay,expression:"!autoPlay"}],staticClass:"app__play",attrs:{href:"javascript:void(0)"},on:{click:t.Play}})]),t._m(1)])])])])])},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"title"},[a("h1",[t._v("Finally, a ‘hardware wallet’ without all the hardware")]),a("p",[t._v("An official, free companion app for MyEtherWallet that helps you secure your funds as never before.")])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app__download"},[s("div",{staticClass:"app__download-buttons"},[s("a",{staticClass:"add-store",attrs:{href:"https://itunes.apple.com/us/app/mewconnect/id1391097156"}},[s("img",{attrs:{src:a("NZSl"),height:"47"}})]),s("a",{staticClass:"google-play",attrs:{href:"#"}})]),s("div",{staticClass:"app__download-desc"},[t._v("\n              Psst... while we are working hard to prepare MEWconnect for iOS for final release, you can "),s("a",{attrs:{href:"mailto:mewconnectBeta@MyEtherWallet.com?subject=MEWconnect iOS beta test request"}},[t._v("drop us a line")]),t._v(" and we will invite you to test our iOS Beta version.\n            ")])])}],O={name:"topintro",data:function(){return{autoPlay:!1}},components:{},mounted:function(){this.$refs.player;window.innerWidth>1024&&this.Play()},methods:{Play:function(){var t=this.$refs.player;t.play(),this.autoPlay=!0,t.addEventListener("ended",function(){this.autoPlay=!1},!1)}}},T=O,j=(a("sF3o"),Object(u["a"])(T,M,W,!1,null,null,null)),S=j.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hardware"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"text-block text-block--hardware"},[a("div",{staticClass:"text-block__icon text-block__icon--hardware"}),a("h2",[t._v("Hardware wallet-style security features")]),a("p",[t._v("MEWconnect stores your private keys safely in a "),a("b",[t._v("local")]),t._v(", "),a("b",[t._v("isolated")]),t._v(", "),a("b",[t._v("and secure vault")]),t._v(" on your device to protect your account like the ELEVENTEEN GOOGILLION dollars it will one day be worth (probably).")])])])])])])}],I={name:"security",components:{}},N=I,A=(a("8iSi"),Object(u["a"])(N,P,$,!1,null,"0381e457",null)),H=A.exports,U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"secure"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"text-block text-block--secure"},[a("div",{staticClass:"text-block__icon text-block__icon--secure"}),a("h2",[t._v("Two step verification to protect your every transaction")]),a("p",[t._v("In the World of Crypto, you are your own bank. MEWconnect helps to ensure that you are you, and then that you are you again. You know, just in case.")])])])])])])}],B={name:"protect",components:{}},G=B,L=(a("9qfE"),Object(u["a"])(G,U,F,!1,null,"f2ef94a6",null)),D=L.exports,Y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"protect"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"text-block text-block--protect"},[a("div",{staticClass:"text-block__icon text-block__icon--protect"}),a("h2",[t._v("Phishers will have to phish somewhere else")]),a("p",[t._v("No one can obtain your private key."),a("br"),t._v("MEWconnect is official MyEtherWallet software. You can "),a("a",{attrs:{href:"#"}},[t._v("check the validity of the app")]),t._v(" yourself. ")])])])])])])}],q={name:"phishers",components:{}},z=q,Z=(a("mZdR"),Object(u["a"])(z,Y,V,!1,null,"79857624",null)),R=Z.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p2p"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-lg-12"},[a("h2",{staticClass:"p2p__title"},[t._v("Think de-centralized")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"p2p__item"},[a("div",{staticClass:"p2p__item-icon p2p__item-icon--p2p"}),a("h4",[t._v("No centralized servers for communication")]),a("p",[t._v("No databases. MEWconnect and MyEtherWallet talk via P2P communication.")])])]),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"p2p__item"},[a("div",{staticClass:"p2p__item-icon p2p__item-icon--no-data"}),a("h4",[t._v("No data collection")]),a("p",[t._v("MyEtherWallet can’t collect your personal data even if we wanted to."),a("br"),t._v("Don’t believe us?"),a("br"),t._v("Check out our "),a("a",{attrs:{href:"#"}},[t._v("privacy policy")]),t._v(".")])])]),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"p2p__item p2p__item--last"},[a("div",{staticClass:"p2p__item-icon p2p__item-icon--comunity"}),a("h4",[t._v("Open source")]),a("p",[t._v("Transparent, free, and open source. We serve the community. Also, all our software is independently audited by the community."),a("br"),t._v("Check out our "),a("a",{attrs:{href:"https://github.com/MyEtherWallet/MEWconnect"}},[t._v("source code")]),t._v(".")])])])])])])])])}],X={name:"decentralized",components:{}},Q=X,tt=(a("kVWf"),Object(u["a"])(Q,J,K,!1,null,"dda0ae3a",null)),et=tt.exports,at=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},st=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"team"},[s("img",{attrs:{src:a("oko+"),alt:""}}),s("div",{staticClass:"team__text"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("h2",[t._v("Built and maintained"),s("br"),t._v("by the MyEtherWallet team")]),s("p",[t._v("The team that brought you the Ethereum’s original and most trusted wallet interface.")])])])])])])}],ot={name:"mewteam",components:{}},nt=ot,it=(a("D0Nq"),Object(u["a"])(nt,at,st,!1,null,"29548eb3",null)),rt=it.exports,ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},lt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"last"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row align-items-end"},[s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"last__phone"},[s("img",{attrs:{src:a("HjcO"),alt:""}})])]),s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"app__download"},[s("div",{staticClass:"app__download-coming"},[t._v("Download from:")]),s("div",{staticClass:"app__download-buttons"},[s("a",{attrs:{href:"https://itunes.apple.com/us/app/mewconnect/id1391097156"}},[s("img",{attrs:{src:a("NZSl"),height:"47"}})]),s("a",{staticClass:"google-play",attrs:{href:"#"}})]),s("div",{staticClass:"app__download-desc"},[s("a",{attrs:{href:"mailto:mewconnectBeta@MyEtherWallet.com?subject=MEWconnect iOS beta test request"}},[t._v("Email us")]),t._v(" if you want to check out MEWconnect Beta.")])])])])])])}],ut={name:"comingsoon",components:{}},pt=ut,dt=(a("p04e"),Object(u["a"])(pt,ct,lt,!1,null,null,null)),ht=dt.exports,mt={name:"home",components:{Header:d,TopIntro:S,Security:H,Protect:D,Phishers:R,Decentralized:et,Mewteam:rt,Comingsoon:ht,Footer:y}},vt=mt,ft=(a("Iqo6"),Object(u["a"])(vt,x,k,!1,null,"01860c26",null)),_t=ft.exports,yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("AboutText")],1)},wt=[],bt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},gt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about-text"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("h2",[t._v("About MEWconnect ")]),a("div",{staticClass:"about-text__text"},[a("p",[t._v("MEWconnect is a simple, powerful new app for your mobile device that enables a better, more secure way of managing your Ethereum assets and ERC-20 Tokens. It is an official mobile software brought by MyEtherWallet Inc, currently available only on IOS for iPhone 5 and above.")]),a("p",[t._v("MEWconnect generates a new wallet then encrypts your private key and then stores it in isolation using your device’s built-in security architecture. The app establishes a secure connection while keeping your private key separate from the browser. The software implements two-factor authentication, protecting you from unauthorized transaction broadcasting on the blockchain. Only you will be able to verify and sign the transaction. MyEtherWallet will never collect any of your personal data, all of your information will only be stored on your mobile device. ")]),a("p",[t._v("With added layers of security, MEWconnect puts you in total control of your crypto assets.")]),a("p",[t._v("Please review Terms and Privacy Policy. Use of MEWconnect constitutes acceptance of these provisions.")])]),a("div",{staticClass:"about-text__feautures"},[a("h3",[t._v("Feautures:")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"about-text__feautures-item"},[a("h4",[t._v("Client-side Encryption")]),a("p",[t._v("An encrypted version of your private key will be stored in isolation on your device. MEWconnect will never expose your private key to any browser!")])])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"about-text__feautures-item"},[a("h4",[t._v("2-way Transaction Verification")]),a("p",[t._v("With MEWconnect you will always be able to verify the amount you are sending, and to whom before signing the transaction and broadcasting it to the blockchain.")])])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"about-text__feautures-item"},[a("h4",[t._v("Back Up Your Account")]),a("p",[t._v("You will never lose access to your Accounts and Funds. If you get a new phone, you can always retrieve your backup with your 24-word Mnemonic phrase.")])])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"about-text__feautures-item"},[a("h4",[t._v("Safeguard from Phishing and Malware")]),a("p",[t._v("Onboarding, restoration, connection and transaction signing are exclusive to the phone environment. No phishers or malware will be able to obtain your private key!")])])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"about-text__feautures-item"},[a("h4",[t._v("Free and Open Source")]),a("p",[t._v("This phone app will be free to use and open source. You will always be able see and audit all of the code that runs MEWconnect and MyEtherWallet.")])])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"about-text__feautures-item"},[a("h4",[t._v("P2P Communication — no Data Collection ")]),a("p",[t._v("Your phone will establish an encrypted channel with the browser. With no need for a database, only you will have have access to your personal data!")])])])])]),a("div",{staticClass:"about-text__help"},[t._v("\n            To get help, please visit "),a("a",{attrs:{href:"https://myetherwallet.github.io/knowledge-base/"}},[t._v("Knowledge Base")]),t._v(" or send email to: "),a("a",{attrs:{href:"mailto:support@myetherwallet.com"}},[t._v("support@myetherwallet.com")]),t._v(" To learn more, please visit our official page: "),a("a",{attrs:{href:"https://mewconnect.myetherwallet.com/"}},[t._v("mewconnect.myetherwallet.com")])])])])])])}],Ct={name:"AboutText",components:{}},Et=Ct,xt=(a("gcE0"),Object(u["a"])(Et,bt,gt,!1,null,"59c42237",null)),kt=xt.exports,Mt={name:"about",components:{Header:d,Footer:y,AboutText:kt}},Wt=Mt,Ot=(a("4bvy"),Object(u["a"])(Wt,yt,wt,!1,null,null,null)),Tt=Ot.exports,jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-guide"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("h2",[t._v("MEWconnect User Guide")]),t._l(t.items,function(t,e){return a("UserGuideItem",{key:e,attrs:{item:t,index:e}})}),t._m(0)],2)])])])},St=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-guide__help"},[a("p",[t._v("To download the MEWconnect app, visit "),a("a",{attrs:{href:"https://mewconnect.myetherwallet.com/"}},[t._v("mewconnect.myetherwallet.com")]),t._v(".")]),a("h3",[t._v("Questions or Concerns?")]),a("p",[t._v(" Email us at: "),a("a",{attrs:{href:"mailto:mewconnectBeta@MyEtherWallet.com?subject=MEWconnect iOS beta test request"}},[t._v("MEWconnectsupport@myetherwallet.com")])])])}],Pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-guide-item",class:{reverse:(t.index+1)%2==0}},[s("div",{staticClass:"user-guide-item__text"},[s("h3",[t._v(t._s(t.item.name))]),t._l(t.item.list,function(t,e){return s("ListItem",{key:e,attrs:{item:t,index:e}})})],2),s("div",{staticClass:"user-guide-item__image"},[1===t.item.image?s("img",{attrs:{src:a("mKg0"),alt:""}}):t._e(),2===t.item.image?s("img",{attrs:{src:a("WTxJ"),alt:""}}):t._e(),3===t.item.image?s("img",{attrs:{src:a("aADz"),alt:""}}):t._e(),4===t.item.image?s("img",{attrs:{src:a("/9dW"),alt:""}}):t._e(),5===t.item.image?s("img",{attrs:{src:a("VGoG"),alt:""}}):t._e()])])},$t=[],It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list-item"},[a("div",{staticClass:"list-item__text"},[a("span",[t._v(t._s(t.index+1)+".")]),a("div",{domProps:{innerHTML:t._s(t.item.text)}})]),t.item.description.length>0?a("div",{staticClass:"list-item__description",domProps:{innerHTML:t._s(t.item.description)}}):t._e()])},Nt=[],At={name:"ListItem",props:["item","index"]},Ht=At,Ut=(a("1Fau"),Object(u["a"])(Ht,It,Nt,!1,null,null,null)),Ft=Ut.exports,Bt={name:"UserGuideItem",props:["item","index"],components:{ListItem:Ft}},Gt=Bt,Lt=(a("sqe4"),Object(u["a"])(Gt,Pt,$t,!1,null,null,null)),Dt=Lt.exports,Yt={name:"user-guide",data:function(){return{items:[{name:"Create a Wallet",image:1,list:[{text:"Open your MEWconnect app.",description:""},{text:"Click ‘Create New Wallet’.",description:""},{text:"Pick a strong password.",description:"This step is very important. Make sure you pick a password that is not easy to guess, but also write it down with pen and paper. If you forget it, we cannot recover it for you. There is only one other way to recover a wallet, and we’ll get to that soon."},{text:"Type it again.",description:""},{text:"Click ‘Start using MEWconnect’.",description:"You’re done! You’ll be taken to a screen that shows your new wallets address backed by a unique color-code. On this screen you’ll find all your ETH and tokens. There is also a handy ‘Share’ button next to your address, in case you want to send it to someone."}]},{name:"Back it Up",image:2,list:[{text:"Click ‘Back Up Now’.",description:""},{text:"Click ‘Create New Wallet’.",description:""},{text:"Get a pen and paper ready. Then press ‘Start’.",description:""},{text:"Enter in your password to verify you’re you.",description:""},{text:"WRITE DOWN YOUR SEED WORDS.",description:"This is the single most important piece of information about your wallet. These 12 words will decide the future of your funds. Do not lose them, and do not screenshot them. Pass the seed word check test."},{text:"You’re done!",description:"All backed up and ready to connect to MEW."}]},{name:"Connect with MEW",image:3,list:[{text:"Unlock your wallet on MEWconnect.",description:""},{text:'Find a desktop computer. Head to the <a href="https://mcbeta.myetherwallet.com/">MEW site</a>.',description:"Check for the SSL certification that states ‘MyEtherWallet Inc [US]’ in the URL. We recommend the Google Chrome browser."},{text:"Choose the ‘Send Ether & Tokens’ tab..",description:""},{text:"Click ‘MEW Connect’ as the method of access.",description:""},{text:"On the app, click ‘Scan to Connect’.",description:""},{text:"Now use MEWconnect to scan the QR code.",description:"You’re done! You can now use our interface as usual, with the MEWconnect app as your main method of access. Congratulations!"}]},{name:"Send a Transaction",image:4,list:[{text:"Unlock your wallet on MEWconnect.",description:""},{text:'Connect to the <a href="https://mcbeta.myetherwallet.com/">MEW site</a>, as shown above.',description:""},{text:"Follow the process of a regular transaction.",description:'Fill in the ‘To Address’, ‘Amount to Send’, and ‘Gas Limit’ fields. If you have any questions, refer to our article on <a href="https://kb.myetherwallet.com/send/how-to-send-transaction.html">How to Send a Transaction</a>.'},{text:"Confirm your transaction on the MEWconnect app.",description:"You’re done! Your transaction is broadcasting to the network, and you’ll be able to check it’s status shortly with a provided transaction ID."}]},{name:"Overview of the Wallet",image:5,list:[{text:"Where to see tokens",description:"These can be found at the bottom of the wallet screen."},{text:"Where to contact us",description:" There is an information button in the top-left, that offers a contact resource and other links of interest."},{text:"Where to buy ETH",description:"You can purchase ETH in the MEWconnect app by choosing the top-right button labelled ‘Buy Ether’."},{text:"How to share your address",description:" You can share your address with anyone you’d like by clicking the arrow button to the right of your address. It will give you different options like text, email, twitter, etc.."}]}]}},components:{UserGuideItem:Dt}},Vt=Yt,qt=(a("oMMk"),Object(u["a"])(Vt,jt,St,!1,null,null,null)),zt=qt.exports,Zt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Rt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-not-found"},[a("div",{staticClass:"container"},[a("h2",[t._v("404")]),a("p",[t._v("Page Not Found")])])])}],Jt={name:"pageNotFound"},Kt=Jt,Xt=(a("V0k4"),Object(u["a"])(Kt,Zt,Rt,!1,null,null,null)),Qt=Xt.exports;s["a"].use(E["a"]);var te=new E["a"]({mode:"hash",routes:[{path:"/",name:"home",component:_t,meta:{title:"MEWconnect"}},{path:"/about",name:"about",component:Tt,meta:{title:"MEWconnect"}},{path:"/user-guide",name:"user-guide",component:zt,meta:{title:"MEWconnect"}},{path:"*",component:Qt}],scrollBehavior:function(){return{x:0,y:0}}});te.beforeEach(function(t,e,a){document.title=t.meta.title,a()});var ee=te,ae=a("L2JU");s["a"].use(ae["a"]);var se=new ae["a"].Store({state:{},mutations:{},actions:{}});s["a"].config.productionTip=!1,new s["a"]({router:ee,store:se,render:function(t){return t(C)}}).$mount("#app")},WTxJ:function(t,e,a){t.exports=a.p+"img/2.93ac5d7f.jpg"},XAuw:function(t,e,a){"use strict";var s=a("EG/1"),o=a.n(s);o.a},"XkZ/":function(t,e,a){},ZX2A:function(t,e,a){},aADz:function(t,e,a){t.exports=a.p+"img/3.d127577f.jpg"},bdLh:function(t,e,a){},dVfm:function(t,e,a){t.exports=a.p+"media/app-video.08f8251f.mp4"},eMzH:function(t,e,a){},eUiB:function(t,e,a){},gcE0:function(t,e,a){"use strict";var s=a("Omas"),o=a.n(s);o.a},jHkb:function(t,e,a){},kQt7:function(t,e,a){t.exports=a.p+"media/app-video.a53d6091.webm"},kVWf:function(t,e,a){"use strict";var s=a("sIzc"),o=a.n(s);o.a},mKg0:function(t,e,a){t.exports=a.p+"img/1.67df6930.jpg"},mZdR:function(t,e,a){"use strict";var s=a("0CM3"),o=a.n(s);o.a},nWR2:function(t,e,a){t.exports=a.p+"img/logo.b6a010df.png"},nxrr:function(t,e,a){},oMMk:function(t,e,a){"use strict";var s=a("ZX2A"),o=a.n(s);o.a},"oko+":function(t,e,a){t.exports=a.p+"img/team.80423f42.jpg"},p04e:function(t,e,a){"use strict";var s=a("sWt8"),o=a.n(s);o.a},p4BP:function(t,e,a){},sF3o:function(t,e,a){"use strict";var s=a("p4BP"),o=a.n(s);o.a},sIzc:function(t,e,a){},sWt8:function(t,e,a){},sqe4:function(t,e,a){"use strict";var s=a("eUiB"),o=a.n(s);o.a},sujE:function(t,e,a){}});
//# sourceMappingURL=app.38792af2.js.map