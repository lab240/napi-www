"use strict";(self.webpackChunknapi_www=self.webpackChunknapi_www||[]).push([[933],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(4137));const i={sidebar_position:1},o="\u041c\u043e\u0434\u0443\u043b\u044c NAPI",l={unversionedId:"napi-intro",id:"napi-intro",title:"\u041c\u043e\u0434\u0443\u043b\u044c NAPI",description:'\u041f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u043d\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043c\u043e\u0449\u043d\u043e\u0433\u043e ARM \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u0430 Rockchip RK3308. \u0418\u043c\u0435\u0435\u0442 512\u041c\u0431 \u041e\u0417\u0423 \u0438 4\u0413\u0431 NAND Flash, 1\u0445Ethernet, 2xUSB, \u0441\u043b\u043e\u0442 \u0434\u043b\u044f SD-\u043a\u0430\u0440\u0442\u044b. \u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d \u043a\u0430\u043a \u043e\u0441\u043d\u043e\u0432\u0430 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 (\u041f\u041b\u041a, \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0441\u0431\u043e\u0440\u0430, \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f \u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0434\u0430\u043d\u043d\u044b\u0445). \u0418\u043c\u0435\u0435\u0442 \u043c\u0430\u043b\u044b\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u044b (43\u044543\u043c\u043c), \u043c\u0430\u043b\u043e\u0435 \u044d\u043d\u0435\u0440\u0433\u043e\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u0435, \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u043e\u0445\u043b\u0430\u0436\u0434\u0435\u043d\u0438\u044f. \u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043f\u043e\u0440\u0442\u043e\u0432 (Ethernet, USB, P\u043eE) \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0431\u044b\u0441\u0442\u0440\u043e \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0441\u0430\u043c\u044b\u0435 \u0440\u0430\u0437\u043d\u044b\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043c\u043e\u0434\u0443\u043b\u044f. \u041f\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441 \u041e\u0421 NapiLinux - \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u041e\u0421 Linux \u0441 \u0440\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435\u043c (\u0442\u0430\u043a\u0436\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f Ubuntu, Debian, DietPi). \u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 NAPI: \u0422\u043e\u043a\u043e-\u0441\u0431\u043e\u0440\u0449\u0438\u043a, \u0421\u0431\u043e\u0440\u0449\u0438\u043a-\u043a\u043e\u043c\u043f\u0430\u043a\u0442, \u041f\u041b\u041a "\u041d\u0430\u0443\u0442\u0438\u043b\u0443\u0441".',source:"@site/docs/napi-intro.md",sourceDirName:".",slug:"/napi-intro",permalink:"/en/docs/napi-intro",draft:!1,tags:[],version:"current",lastUpdatedAt:1692820719,formattedLastUpdatedAt:"Aug 23, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\u041f\u0440\u043e\u0448\u0438\u0432\u043a\u0430 \u041f\u041e (Linux Host)",permalink:"/en/docs/install_nl"}},p={},c=[{value:"\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",id:"\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435-\u0434\u0430\u043d\u043d\u044b\u0435",level:2},{value:"NAPI GPIO (\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435 \u0433\u0440\u0435\u0431\u0435\u043d\u043a\u0438 \u0434\u043b\u044f \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0441 \u043d\u0435\u0441\u0443\u0449\u0435\u0439 \u043f\u043b\u0430\u0442\u043e\u0439)",id:"napi-gpio-\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435-\u0433\u0440\u0435\u0431\u0435\u043d\u043a\u0438-\u0434\u043b\u044f-\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f-\u0441-\u043d\u0435\u0441\u0443\u0449\u0435\u0439-\u043f\u043b\u0430\u0442\u043e\u0439",level:2},{value:"\u0420\u0430\u0437\u043c\u0435\u0440\u044b \u0438 \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u044b",id:"\u0440\u0430\u0437\u043c\u0435\u0440\u044b-\u0438-\u0433\u0430\u0431\u0430\u0440\u0438\u0442\u044b",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u043c\u043e\u0434\u0443\u043b\u044c-napi"},"\u041c\u043e\u0434\u0443\u043b\u044c NAPI"),(0,a.kt)("p",null,'\u041f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u043d\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043c\u043e\u0449\u043d\u043e\u0433\u043e ARM \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u0430 Rockchip RK3308. \u0418\u043c\u0435\u0435\u0442 512\u041c\u0431 \u041e\u0417\u0423 \u0438 4\u0413\u0431 NAND Flash, 1\u0445Ethernet, 2xUSB, \u0441\u043b\u043e\u0442 \u0434\u043b\u044f SD-\u043a\u0430\u0440\u0442\u044b. \u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d \u043a\u0430\u043a \u043e\u0441\u043d\u043e\u0432\u0430 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 (\u041f\u041b\u041a, \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0441\u0431\u043e\u0440\u0430, \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f \u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0434\u0430\u043d\u043d\u044b\u0445). \u0418\u043c\u0435\u0435\u0442 \u043c\u0430\u043b\u044b\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u044b (43\u044543\u043c\u043c), \u043c\u0430\u043b\u043e\u0435 \u044d\u043d\u0435\u0440\u0433\u043e\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u0435, \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u043e\u0445\u043b\u0430\u0436\u0434\u0435\u043d\u0438\u044f. \u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043f\u043e\u0440\u0442\u043e\u0432 (Ethernet, USB, P\u043eE) \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0431\u044b\u0441\u0442\u0440\u043e \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0441\u0430\u043c\u044b\u0435 \u0440\u0430\u0437\u043d\u044b\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043c\u043e\u0434\u0443\u043b\u044f. \u041f\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441 \u041e\u0421 NapiLinux - \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u041e\u0421 Linux \u0441 \u0440\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435\u043c (\u0442\u0430\u043a\u0436\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f Ubuntu, Debian, DietPi). \u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 NAPI: \u0422\u043e\u043a\u043e-\u0441\u0431\u043e\u0440\u0449\u0438\u043a, \u0421\u0431\u043e\u0440\u0449\u0438\u043a-\u043a\u043e\u043c\u043f\u0430\u043a\u0442, \u041f\u041b\u041a "\u041d\u0430\u0443\u0442\u0438\u043b\u0443\u0441".'),(0,a.kt)("h2",{id:"\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435-\u0434\u0430\u043d\u043d\u044b\u0435"},"\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RK3308 processor (Cortex- A35 quard core)"),(0,a.kt)("li",{parentName:"ul"},"NAPI Linux \\ Ubuntu 20.04 \\Debian 10 \\ Yocto Linux (kernel 4.4)"),(0,a.kt)("li",{parentName:"ul"},"512\u041c\u0431 \u041e\u0417\u0423"),(0,a.kt)("li",{parentName:"ul"},"4\u0413\u0431 \u041f\u0417\u0423 (NAND)"),(0,a.kt)("li",{parentName:"ul"},"1\u0445Ethernet 100\u041c\u0431\u0438\u0442"),(0,a.kt)("li",{parentName:"ul"},"2xUSB 2.0"),(0,a.kt)("li",{parentName:"ul"},"\u041f\u0438\u0442\u0430\u043d\u0438\u0435 +5\u0412 (\u0447\u0435\u0440\u0435\u0437 GPIO \u0438\u043b\u0438 USB Type-C)"),(0,a.kt)("li",{parentName:"ul"},"POE Ready"),(0,a.kt)("li",{parentName:"ul"},"2.4\u043c\u043c GPIO"),(0,a.kt)("li",{parentName:"ul"},"\u261d\ufe0f \u041a\u043e\u043c\u043f\u0430\u043a\u0442\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440: 43\u044543 \u043c\u043c")),(0,a.kt)("h2",{id:"napi-gpio-\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435-\u0433\u0440\u0435\u0431\u0435\u043d\u043a\u0438-\u0434\u043b\u044f-\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f-\u0441-\u043d\u0435\u0441\u0443\u0449\u0435\u0439-\u043f\u043b\u0430\u0442\u043e\u0439"},"NAPI GPIO (\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435 \u0433\u0440\u0435\u0431\u0435\u043d\u043a\u0438 \u0434\u043b\u044f \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0441 \u043d\u0435\u0441\u0443\u0449\u0435\u0439 \u043f\u043b\u0430\u0442\u043e\u0439)"),(0,a.kt)("p",null,'\u26a0\ufe0f \u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u043d\u0435\u0441\u043c\u043e\u0442\u0440\u044f \u043d\u0430 "\u043f\u043e\u0445\u043e\u0436\u0435\u0441\u0442\u044c" \u0441 Rockpi S, GPIO \u043e\u0442\u043b\u0438\u0447\u0430\u044e\u0442\u0441\u044f'),(0,a.kt)("p",null," ",(0,a.kt)("img",{alt:"Napi front view",src:n(5942).Z,width:"603",height:"437"})),(0,a.kt)("p",null," ",(0,a.kt)("img",{alt:"Napi front view",src:n(2186).Z,width:"980",height:"380"})),(0,a.kt)("h2",{id:"\u0440\u0430\u0437\u043c\u0435\u0440\u044b-\u0438-\u0433\u0430\u0431\u0430\u0440\u0438\u0442\u044b"},"\u0420\u0430\u0437\u043c\u0435\u0440\u044b \u0438 \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u044b"),(0,a.kt)("p",null,' \u0414\u043b\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f "Carrier board" \u0438 \u043a\u043e\u0440\u043f\u0443\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u043c \u0442\u043e\u0447\u043d\u044b\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u044b (\u0441 \u0432\u044b\u0441\u0442\u0443\u043f\u0430\u044e\u0449\u0438\u043c\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438 \u0438 \u0431\u0435\u0437).\n\u0438 \u043f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432. '),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Napi front view",src:n(9216).Z,width:"909",height:"484"}),"\n",(0,a.kt)("img",{alt:"Napi front view",src:n(8714).Z,width:"678",height:"408"}),"  "),(0,a.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0445\u0435\u043c\u0430"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Napi front view",src:n(9431).Z,width:"848",height:"566"}),"  "),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(4286).Z},"\u0421\u043a\u0430\u0447\u0430\u0442\u044c")," \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 PDF"))}d.isMDXComponent=!0},4286:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/function_scheme-59317c909e42abc334ca0b436d82de56.pdf"},5942:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gpio1-1-2-cba024170531f24cd2e4a34122e326a6.png"},2186:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gpio2-2-0586e643ccce3cee29996ea2910317d6.png"},9431:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scheme1-2cc2a8a40fffea172e32801db2cfca5b.png"},9216:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sizes1-92f93e162ea17df48d0151d307935928.png"},8714:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sizes2-e5467a38b45b93cbf37cc285866daa70.png"}}]);