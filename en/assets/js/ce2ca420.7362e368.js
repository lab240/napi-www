"use strict";(self.webpackChunknapi_www=self.webpackChunknapi_www||[]).push([[4884],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(n),m=o,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(b,a(a({ref:t},c),{},{components:n})):r.createElement(b,a({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var i=2;i<l;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const l={sidebar_position:52},a="\u041e\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c \u0434\u0430\u0442\u0447\u0438\u043a \u043f\u043e Modbus TCP",p={unversionedId:"sensors/modbus-tcp/index",id:"sensors/modbus-tcp/index",title:"\u041e\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c \u0434\u0430\u0442\u0447\u0438\u043a \u043f\u043e Modbus TCP",description:"\u042d\u0442\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u043b\u044e\u0431\u043e\u0433\u043e \u0421\u0431\u043e\u0440\u0449\u0438\u043a\u0430",source:"@site/software/sensors/modbus-tcp/index.md",sourceDirName:"sensors/modbus-tcp",slug:"/sensors/modbus-tcp/",permalink:"/en/software/sensors/modbus-tcp/",draft:!1,tags:[],version:"current",sidebarPosition:52,frontMatter:{sidebar_position:52},sidebar:"tutorialSidebar",previous:{title:"\u041e\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c \u0434\u0430\u0442\u0447\u0438\u043a \u043f\u043e Modbus RTU \u0447\u0435\u0440\u0435\u0437 RS485",permalink:"/en/software/sensors/modbus-rtu/"},next:{title:"\u0428\u043b\u044e\u0437 Modbus RTU - Modbus TCP",permalink:"/en/software/sensors/mgate/"}},s={},i=[{value:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c \u0434\u0430\u0442\u0447\u0438\u043a \u043f\u043e IP",id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c-\u0434\u0430\u0442\u0447\u0438\u043a-\u043f\u043e-ip",level:2},{value:"\u041e\u043f\u0440\u043e\u0441 \u0434\u0430\u0442\u0447\u0438\u043a\u0430",id:"\u043e\u043f\u0440\u043e\u0441-\u0434\u0430\u0442\u0447\u0438\u043a\u0430",level:2},{value:"\u041e\u043f\u0440\u043e\u0441 \u0434\u0430\u0442\u0447\u0438\u043a\u0430 \u0443\u0442\u0438\u043b\u0438\u0442\u043e\u0439 mbpoll",id:"\u043e\u043f\u0440\u043e\u0441-\u0434\u0430\u0442\u0447\u0438\u043a\u0430-\u0443\u0442\u0438\u043b\u0438\u0442\u043e\u0439-mbpoll",level:3},{value:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0438 \u0434\u0430\u0442\u0447\u0438\u043a\u0430",id:"\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430-\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0438-\u0434\u0430\u0442\u0447\u0438\u043a\u0430",level:3}],c={toc:i},u="wrapper";function d(e){let{components:t,...l}=e;return(0,o.kt)(u,(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u043e\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c-\u0434\u0430\u0442\u0447\u0438\u043a-\u043f\u043e-modbus-tcp"},"\u041e\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c \u0434\u0430\u0442\u0447\u0438\u043a \u043f\u043e Modbus TCP"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u042d\u0442\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u043b\u044e\u0431\u043e\u0433\u043e \u0421\u0431\u043e\u0440\u0449\u0438\u043a\u0430")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u041a\u0430\u043a \u044d\u0442\u043e \u043d\u0438 \u0441\u0442\u0440\u0430\u043d\u043d\u043e, \u043e\u043f\u0440\u043e\u0441 \u0434\u0430\u0442\u0447\u0438\u043a\u043e\u0432 \u043f\u043e ModBus TCP \u043f\u0440\u043e\u0449\u0435, \u0447\u0435\u043c \u043f\u043e\u0434 ModBus RTU. \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 Modbus TCP, \u043d\u0430\u0441 \u043d\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u044e\u0442 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b RS485 \u0438 \u0430\u0434\u0440\u0435\u0441 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 -  \u0443 \u043d\u0430\u0441 \u0430\u0434\u0440\u0435\u0441\u043e\u043c \u0434\u0430\u0442\u0447\u0438\u043a\u0430 \u0441\u043b\u0443\u0436\u0438\u0442 \u0435\u0433\u043e IP \u0430\u0434\u0440\u0435\u0441. \u0414\u0440\u0443\u0433\u043e\u0435 \u0434\u0435\u043b\u043e, \u0434\u0430\u0442\u0447\u0438\u043a \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u043c\u0435\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c Ethernet c \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439 TCP\\IP")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u041c\u044b \u0431\u0443\u0434\u0435\u043c \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0434\u0430\u0442\u0447\u0438\u043a \u0432\u043d\u0435\u0448\u043d\u0435\u0439 \u0441\u0440\u0435\u0434\u044b IPCDAS DL-303. \u041c\u044b \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e \u043e\u043f\u0438\u0441\u0430\u043b\u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u0442\u0447\u0438\u043a\u0430 \u043f\u043e RS485 \u0438 \u043e\u043f\u0440\u043e\u0441 \u043f\u043e Modbus RTU \u0432 ",(0,o.kt)("a",{parentName:"p",href:"../modbus-rtu/"},"\u0434\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0430\u0442\u044c\u0435"),". ")),(0,o.kt)("h2",{id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c-\u0434\u0430\u0442\u0447\u0438\u043a-\u043f\u043e-ip"},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c \u0434\u0430\u0442\u0447\u0438\u043a \u043f\u043e IP"),(0,o.kt)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b IP \u0434\u0430\u0442\u0447\u0438\u043a\u0430. IP \u0430\u0434\u0440\u0435\u0441 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0437\u043d\u0430\u0447\u0430\u0442\u044c\u0441\u044f \u0438\u043b\u0438 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 (\u0442\u043e\u0433\u0434\u0430 \u043d\u0430\u043c \u043d\u0430\u0434\u043e \u044f\u0432\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c IP \u0430\u0434\u0440\u0435\u0441, \u043c\u0430\u0441\u043a\u0443, \u0448\u043b\u044e\u0437) \u0438\u043b\u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0430\u0434\u0440\u0435\u0441 \u043f\u043e DHCP. "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'\u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u0432\u044b\u0434\u0430\u0447\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 IP \u043f\u043e DHCP \u0435\u0441\u0442\u044c \u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c, \u0447\u0442\u043e DHCP \u0441\u0435\u0440\u0432\u0435\u0440 \u043c\u043e\u0436\u0435\u0442 \u0432 \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u043c\u043e\u043c\u0435\u043d\u0442 \u0441\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u044b\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0439 IP. \u0414\u043b\u044f "\u0431\u043e\u0440\u044c\u0431\u044b" \u0441 \u044d\u0442\u0438\u043c \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430 \u0441\u0435\u0442\u0438 \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u0442\u044c \u0432\u044b\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0439 IP \u043f\u043e MAC \u0430\u0434\u0440\u0435\u0441\u0443.')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f \u0412 \u043b\u044e\u0431\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435\u043c \u043d\u0430\u043c \u043d\u0443\u0436\u0435\u043d IP \u0430\u0434\u0440\u0435\u0441 \u0434\u0430\u0442\u0447\u0438\u043a\u0430.")),(0,o.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435 \u0432 \u0434\u0430\u0442\u0447\u0438\u043a\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c tcp \u043f\u043e\u0440\u0442 (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e 502), \u0445\u043e\u0442\u044f \u0437\u0430\u0447\u0435\u043c \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u044c\u0441\u044f \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0442\u044c \u043f\u043e\u0440\u0442 \u043d\u0430 \u043d\u0435\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439, \u043a\u0440\u043e\u043c\u0435 \u043e\u0431\u0445\u043e\u0434\u0430 \u0444\u0430\u0435\u0440\u0432\u043e\u043b\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0442\u0440\u0443\u0434\u043d\u043e."),(0,o.kt)("p",null,"\u041a\u0430\u043a \u043f\u0440\u0438\u043c\u0435\u0440, \u0432\u043e\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 IP \u0434\u0430\u0442\u0447\u0438\u043a\u0430 DL-303"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"modbus tcp",src:n(35207).Z,width:"541",height:"325"})),(0,o.kt)("p",null,"\u0418 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e IP"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"modbus tcp",src:n(67807).Z,width:"763",height:"316"})),(0,o.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043c\u043e\u0436\u043d\u043e \u0441\u043c\u0435\u043d\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u0412\u0435\u0431-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"modbus tcp",src:n(13066).Z,width:"1063",height:"554"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,o.kt)("strong",{parentName:"p"},"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0437\u0443\u0447\u0438\u0442\u044c \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044e \u043f\u043e \u0434\u0430\u0442\u0447\u0438\u043a\u0443, \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043d\u044f\u0442\u044c \u043a\u0430\u043a \u0437\u0430\u0434\u0430\u044e\u0442\u0441\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b IP"))),(0,o.kt)("h2",{id:"\u043e\u043f\u0440\u043e\u0441-\u0434\u0430\u0442\u0447\u0438\u043a\u0430"},"\u041e\u043f\u0440\u043e\u0441 \u0434\u0430\u0442\u0447\u0438\u043a\u0430"),(0,o.kt)("p",null,"\u0412\u0441\u0435, \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0434\u043b\u044f \u043e\u043f\u0440\u043e\u0441\u0430 \u0434\u0430\u0442\u0447\u0438\u043a\u0430, \u044d\u0442\u043e \u0447\u0442\u043e\u0431\u044b \u0441\u043e \u0441\u0431\u043e\u0440\u0449\u0438\u043a\u0430 \u0431\u044b\u043b \u0434\u043e\u0441\u0442\u0443\u043f \u043a IP \u0434\u0430\u0442\u0447\u0438\u043a\u0430 \u043f\u043e \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0443 TCP \u043f\u043e 502 \u043f\u043e\u0440\u0442\u0443."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f \u0410\u0434\u0440\u0435\u0441 \u043d\u0430\u0448\u0435\u0433\u043e \u0434\u0430\u0442\u0447\u0438\u043a\u0430 \u0432\u044b\u0434\u0430\u043d \u043f\u043e DHCP, \u043c\u044b \u0437\u043d\u0430\u0435\u043c \u0447\u0442\u043e \u043e\u043d 10.10.10.108")),(0,o.kt)("h3",{id:"\u043e\u043f\u0440\u043e\u0441-\u0434\u0430\u0442\u0447\u0438\u043a\u0430-\u0443\u0442\u0438\u043b\u0438\u0442\u043e\u0439-mbpoll"},"\u041e\u043f\u0440\u043e\u0441 \u0434\u0430\u0442\u0447\u0438\u043a\u0430 \u0443\u0442\u0438\u043b\u0438\u0442\u043e\u0439 mbpoll"),(0,o.kt)("p",null,"\u0417\u0430\u0439\u0434\u0435\u043c \u043d\u0430 \u0441\u0431\u043e\u0440\u0449\u0438\u043a \u043f\u043e ssh."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"modbus tcp",src:n(49825).Z,width:"756",height:"412"})),(0,o.kt)("p",null,"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u043c \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,o.kt)("inlineCode",{parentName:"p"},"mbpoll")," \u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438 Modbus TCP. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u0417\u0430\u043f\u0440\u043e\u0441 \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u043f\u0440\u043e\u0449\u0435 \u0447\u0435\u043c \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 ModBus RTU \u043f\u043e RS485 !")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"modpoll -m tcp -a 1 -r 1 -c 5 -t 3 10.10.10.108\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"modbus tcp",src:n(38279).Z,width:"745",height:"286"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c, \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e Modbus TCP !")),(0,o.kt)("h3",{id:"\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430-\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0438-\u0434\u0430\u0442\u0447\u0438\u043a\u0430"},"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0438 \u0434\u0430\u0442\u0447\u0438\u043a\u0430"),(0,o.kt)("p",null,"\u041e\u0434\u043d\u0430\u043a\u043e, \u043d\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u0434\u0430\u0442\u0447\u0438\u043a \u0432 \u0442\u043e\u0439 \u0436\u0435 \u0441\u0435\u0442\u0438, \u0447\u0442\u043e \u0438 \u0421\u0431\u043e\u0440\u0449\u0438\u043a. \u0412 IP-\u0441\u0435\u0442\u044f\u0445 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u044e\u0442\u0441\u044f \u0444\u0430\u0439\u0440\u0432\u043e\u043b\u043b\u043b\u044b, NAT-\u044b, \u043c\u0430\u043f\u043f\u0438\u043d\u0433 \u0430\u0434\u0440\u0435\u0441\u043e\u0432 \u0438 \u043f\u043e\u0440\u0442\u043e\u0432. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u0432\u044b\u043d\u0435\u0441\u0435\u043c \u0447\u0430\u0441\u0442\u044c, \u043a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c \u0434\u0430\u0442\u0447\u0438\u043a\u0430 \u043f\u043e IP."),(0,o.kt)("p",null,"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u043c \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c \u0430\u0434\u0440\u0435\u0441\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 ",(0,o.kt)("inlineCode",{parentName:"p"},"ping")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"modbus tcp",src:n(99915).Z,width:"652",height:"193"})),(0,o.kt)("p",null,'\u0415\u0441\u043b\u0438 "\u043f\u0438\u043d\u0433\u0443\u0435\u0442\u0441\u044f", \u0442\u043e \u0441\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u0435\u0441\u043b\u0438 \u0430\u0434\u0440\u0435\u0441 "\u043d\u0435 \u043f\u0438\u043d\u0433\u0443\u0435\u0442\u0441\u044f", \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043f\u0440\u044f\u043c\u043e \u043f\u043e\u0440\u0442 502 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 ',(0,o.kt)("inlineCode",{parentName:"p"},"telnet")),(0,o.kt)("p",null,"\u041d\u0430 \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u0435 \u0432\u0438\u0434\u043d\u043e \u043a\u0430\u043a \u043e\u0442\u043a\u043b\u0438\u043a\u0430\u0435\u0442\u0441\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043d\u0430 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0442\u0435\u0440\u044b \u0438 \u043d\u0430 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0435 (\u0438p\u043c\u0435\u043d\u0435\u043d IP)"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"modbus tcp",src:n(81928).Z,width:"621",height:"381"})))}d.isMDXComponent=!0},49825:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/term1-028f6011d5ba41db36e22288b3cd62df.jpg"},35207:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dl-303-1-88cd5248e2d104c1bf25ce8b2dec5678.jpg"},67807:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dl-303-2-65c8282464cb0b70f7ceff3363a09454.jpg"},13066:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dl-303-3-13ab08381bb40f0e9390496e9dc65161.jpg"},99915:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/term-1-15c124b6ec1335488ea5175b89504e13.jpg"},81928:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/term-2-47dad544cf929c447cc591d8f64e727a.jpg"},38279:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/term-3-308564614e0299a4bdc46a4c212f716c.jpg"}}]);