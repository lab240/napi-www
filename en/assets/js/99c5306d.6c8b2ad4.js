"use strict";(self.webpackChunknapi_www=self.webpackChunknapi_www||[]).push([[7494],{4137:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>w});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},A=Object.keys(e);for(a=0;a<A.length;a++)n=A[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(a=0;a<A.length;a++)n=A[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,A=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,w=d["".concat(p,".").concat(c)]||d[c]||u[c]||A;return n?a.createElement(w,i(i({ref:t},l),{},{components:n})):a.createElement(w,i({ref:t},l))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var A=n.length,i=new Array(A);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<A;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>A,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(4137));const A={sidebar_position:54},i="\u041e\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c NAPI (C\u0431\u043e\u0440\u0449\u0438\u043a) \u043f\u043e SNMP",o={unversionedId:"snmp-req",id:"snmp-req",title:"\u041e\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c NAPI (C\u0431\u043e\u0440\u0449\u0438\u043a) \u043f\u043e SNMP",description:"\u042d\u0442\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u043b\u044e\u0431\u043e\u0433\u043e \u0421\u0431\u043e\u0440\u0449\u0438\u043a\u0430",source:"@site/software/snmp-req.md",sourceDirName:".",slug:"/snmp-req",permalink:"/en/software/snmp-req",draft:!1,tags:[],version:"current",sidebarPosition:54,frontMatter:{sidebar_position:54},sidebar:"tutorialSidebar",previous:{title:"\u041e\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c \u0434\u0430\u0442\u0447\u0438\u043a \u043f\u043e Modbus TCP",permalink:"/en/software/connect-modbus-ip"},next:{title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 gpiod \u0438 \u043f\u0440\u0438\u043c\u0435\u0440\u044b \u0440\u0430\u0431\u043e\u0442\u044b c GPIO",permalink:"/en/software/gpiod2"}},p={},s=[{value:"\u0417\u0430\u043f\u0443\u0441\u043a \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 snmpd",id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u0438-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-snmpd",level:2},{value:"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435 OID-\u044b \u0438\u0437 &quot;\u0432\u0435\u0442\u043a\u0438&quot; ISO.",id:"\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435-oid-\u044b-\u0438\u0437-\u0432\u0435\u0442\u043a\u0438-iso",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u043e\u043f\u0440\u043e\u0441\u0430 NAPI",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-\u043e\u043f\u0440\u043e\u0441\u0430-napi",level:2},{value:"\u0423\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u0434\u043b\u044f \u043e\u043f\u0440\u043e\u0441\u0430",id:"\u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c-\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439-\u0430\u0434\u0440\u0435\u0441-\u0434\u043b\u044f-\u043e\u043f\u0440\u043e\u0441\u0430",level:3},{value:"\u0412\u044b\u0431\u0438\u0440\u0430\u0435\u043c OID \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f",id:"\u0432\u044b\u0431\u0438\u0440\u0430\u0435\u043c-oid-\u0438-\u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f",level:3},{value:"\u0427\u0438\u0442\u0430\u0435\u043c \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u0447\u0438\u0442\u0430\u0435\u043c-\u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:3},{value:"\u0427\u0438\u0442\u0430\u0435\u043c \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443",id:"\u0447\u0438\u0442\u0430\u0435\u043c-\u0447\u0435\u0440\u0435\u0437-\u043a\u043e\u043c\u0430\u043d\u0434\u043d\u0443\u044e-\u0441\u0442\u0440\u043e\u043a\u0443",level:2}],l={toc:s},d="wrapper";function u(e){let{components:t,...A}=e;return(0,r.kt)(d,(0,a.Z)({},l,A,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u043e\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c-napi-c\u0431\u043e\u0440\u0449\u0438\u043a-\u043f\u043e-snmp"},"\u041e\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c NAPI (C\u0431\u043e\u0440\u0449\u0438\u043a) \u043f\u043e SNMP"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u042d\u0442\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u043b\u044e\u0431\u043e\u0433\u043e \u0421\u0431\u043e\u0440\u0449\u0438\u043a\u0430")),(0,r.kt)("h2",{id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u0438-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-snmpd"},"\u0417\u0430\u043f\u0443\u0441\u043a \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 snmpd"),(0,r.kt)("p",null,"\u041a\u0430\u043a \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c snmpd \u043d\u0430 NAPI \u043e\u043f\u0438\u0441\u0430\u043d\u043e \u0432 (\u044d\u0442\u043e\u043c)","[armbian-tune#\u043d\u0430\u0441\u0442\u0440\u043e\u0438\u043c-snmpd]"," \u0440\u0430\u0437\u0434\u0435\u043b\u0435 (\u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0430)","[armbian-tune]"," \u043f\u043e \u0442\u044e\u043d\u0438\u043d\u0433\u0443 ARMbian"),(0,r.kt)("p",null,'\u041a\u0430\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 NAPI \u0431\u0443\u0434\u0435\u0442 "\u043e\u0442\u0434\u0430\u0432\u0430\u0442\u044c" \u043f\u043e SNMP \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c\n\u0440\u0435\u0433\u0443\u043b\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0432 snmpd.conf. '),(0,r.kt)("p",null,'\u0412\u043e\u0442 \u0447\u0430\u0441\u0442\u044c \u0444\u0430\u0439\u043b\u0430 \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043c\u043e\u0436\u043d\u043e "\u043e\u0442\u043a\u0440\u044b\u0442\u044c" \u0432\u0435\u0442\u043a\u0438 OID-\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c. '),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\n# Views \n#   arguments viewname included [oid]\n\n#  system + hrSystem groups only\nview   systemonly  included   .1.3.6.1.2.1.1\nview   systemonly  included   .1.3.6.1.2.1.25.1\nview   systemonly  included   .1.3.6.1.2.1.25.2\n\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u041f\u043e\u0441\u043b\u0435 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0444\u0430\u0439\u043b\u0430 snmpd.conf \u043d\u0435 \u0437\u0430\u0431\u044b\u0432\u0430\u0435\u043c \u043f\u0435\u0440\u0435\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0441\u0435\u0440\u0432\u0438\u0441 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 "),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"systemctl restart snmpd"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f \u0414\u043b\u044f \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u044f OID-\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u043c\u044b \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u043b\u044e\u0431\u0443\u044e \u0445\u043e\u0441\u0442-\u043c\u0430\u0448\u0438\u043d\u0443 \u041f\u041e iReasoning Mib Browser: ",(0,r.kt)("a",{parentName:"p",href:"https://www.ireasoning.com/mibbrowser.shtml"},"https://www.ireasoning.com/mibbrowser.shtml"),". \u041e\u043d \u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044f \u043a\u0430\u043a \u043f\u043e\u0434 Linux, \u0442\u0430\u043a \u0438 \u043f\u043e\u0434 Windows. ")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u0414\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0433\u043e \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0432\u0435\u0442\u043e\u043a, \u0432 Mib Browser \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043e 2 MIB \u0444\u0430\u0439\u043b\u0430 (\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e) "),(0,r.kt)("p",{parentName:"admonition"},"![snmp napi]","](img-snmp-req/mibbr1.jpg)"),(0,r.kt)("p",{parentName:"admonition"},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\\\u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043c\u043e\u0436\u043d\u043e \u0447\u0435\u0440\u0435\u0437 \u043c\u0435\u043d\u044e ",(0,r.kt)("inlineCode",{parentName:"p"},"File - Load Mibs  \\ File - Unload Mibs"),". "),(0,r.kt)("p",{parentName:"admonition"},"\u0424\u0430\u0439\u043b\u044b \u0441 MIB-\u0430\u043c\u0438 \u0438\u0434\u0443\u0442 \u0432 \u0441\u043e\u0441\u0442\u0430\u0432\u0435 Mib Browser.")),(0,r.kt)("h2",{id:"\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435-oid-\u044b-\u0438\u0437-\u0432\u0435\u0442\u043a\u0438-iso"},'\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435 OID-\u044b \u0438\u0437 "\u0432\u0435\u0442\u043a\u0438" ISO.'),(0,r.kt)("p",null,'\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435 OID-\u044b \u0438\u0437 "\u0432\u0435\u0442\u043a\u0438" ISO. \u0412\u0441\u0435 \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u044b \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u044b \u0438\u0437 Mib Browser.'),(0,r.kt)("p",null,"\u0412\u0435\u0442\u043a\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},".1.3.6.1.2.1.1"),' \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 "\u0441\u0435\u043a\u0446\u0438\u0438" \u0432 \u0434\u0435\u0440\u0435\u0432\u0435 OID'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snmp napi",src:n(2762).Z,width:"421",height:"291"})),(0,r.kt)("p",null,"\u0412\u0435\u0442\u043a\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},".1.3.6.1.2.1.4")," \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e\u0431 IP"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snmp napi",src:n(6745).Z,width:"606",height:"308"})),(0,r.kt)("p",null,"\u0412\u0435\u0442\u043a\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},".1.3.6.1.2.1.25")," \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u0445 \u0445\u043e\u0441\u0442\u0430"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snmp napi",src:n(1365).Z,width:"573",height:"485"})),(0,r.kt)("p",null,"\u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u0432\u0435\u0442\u043a\u0438 \u0438 \u043e\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0432\u0443\u044e\u0449\u0438\u0435 OID"),(0,r.kt)("p",null,"\u0414\u043b\u044f \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f \u0432\u0435\u0442\u043e\u043a \u0438 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0445 OID-\u043e\u0432, MIB Browser \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0447\u0438\u0441\u043b\u043e\u0432\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f OID \u0430 \u0442\u0430\u043a\u0436\u0435 \u0444\u0430\u0439\u043b \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043e\u043f\u0438\u0441\u0430\u043d MIB (\u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 RFC1213-MIB)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snmp napi",src:n(4835).Z,width:"560",height:"514"})),(0,r.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-\u043e\u043f\u0440\u043e\u0441\u0430-napi"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u043e\u043f\u0440\u043e\u0441\u0430 NAPI"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f \u0412 \u043d\u0430\u0448\u0435\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 NAPI \u0438\u043c\u0435\u0435\u0442 IP 10.10.10.118")),(0,r.kt)("h3",{id:"\u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c-\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439-\u0430\u0434\u0440\u0435\u0441-\u0434\u043b\u044f-\u043e\u043f\u0440\u043e\u0441\u0430"},"\u0423\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u0434\u043b\u044f \u043e\u043f\u0440\u043e\u0441\u0430"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snmp napi",src:n(9608).Z,width:"381",height:"61"})),(0,r.kt)("h3",{id:"\u0432\u044b\u0431\u0438\u0440\u0430\u0435\u043c-oid-\u0438-\u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f"},"\u0412\u044b\u0431\u0438\u0440\u0430\u0435\u043c OID \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f"),(0,r.kt)("p",null,"\u041d\u0430\u0447\u043d\u0435\u043c \u0441 \u0441\u0430\u043c\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u043e\u0433\u043e - \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0438\u043c\u0435\u043d\u0438 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0440\u0430\u0431\u043e\u0442\u044b"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snmp napi",src:n(2807).Z,width:"776",height:"309"})),(0,r.kt)("p",null,"\u0412\u044b\u044f\u0441\u043d\u0438\u043c \u043a\u0430\u043a\u0438\u0435 \u0443 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snmp napi",src:n(1471).Z,width:"906",height:"321"})),(0,r.kt)("p",null,"\u041a\u0430\u043a\u0438\u0435 \u043d\u0430 \u043d\u0438\u0445 IP"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snmp napi",src:n(8960).Z,width:"904",height:"372"})),(0,r.kt)("h3",{id:"\u0447\u0438\u0442\u0430\u0435\u043c-\u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"},"\u0427\u0438\u0442\u0430\u0435\u043c \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,r.kt)("p",null,"\u041f\u0430\u043c\u044f\u0442\u044c \u0438 \u0434\u0438\u0441\u043a\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0435"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snmp napi",src:n(8422).Z,width:"833",height:"747"})),(0,r.kt)("h2",{id:"\u0447\u0438\u0442\u0430\u0435\u043c-\u0447\u0435\u0440\u0435\u0437-\u043a\u043e\u043c\u0430\u043d\u0434\u043d\u0443\u044e-\u0441\u0442\u0440\u043e\u043a\u0443"},"\u0427\u0438\u0442\u0430\u0435\u043c \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u0412 linux \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u0430\u043a\u0435\u0442\u044b"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"apt install snmp \n\n")),(0,r.kt)("p",{parentName:"admonition"},"snmp-tools \u0435\u0441\u0442\u044c \u0438 \u0434\u043b\u044f Windows: ",(0,r.kt)("a",{parentName:"p",href:"https://sourceforge.net/projects/net-snmp/files/net-snmp%20binaries/5.7-binaries/"},"https://sourceforge.net/projects/net-snmp/files/net-snmp%20binaries/5.7-binaries/"))),(0,r.kt)("p",null,"Mib Browser \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043d\u0430\u0433\u043b\u044f\u0434\u043d\u043e \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0435\u0442\u043a\u0438 \u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432. \u041e\u0434\u043d\u0430\u043a\u043e \u0447\u0430\u0441\u0442\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043f\u043e SNMP \u0434\u0435\u043b\u0430\u044e\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u0441\u043a\u0440\u0438\u043f\u0442\u044b \u0438\u043b\u0438 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0435\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0435 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u0435 (Zabbix)."),(0,r.kt)("p",null,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043c\u043e\u0436\u043d\u043e \u043e\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u043c\u0430\u043d\u0434\u044b snmpwalk "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\ndmn@hp:~$ snmpwalk -v 2c -c public 10.10.10.118 .1.3.6.1.2.1.25.2.3.1.3\n\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snmp napi",src:n(7415).Z,width:"669",height:"316"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\ndmn@hp:~$ snmpwalk -v 2c -c public 10.10.10.118 .1.3.6.1.2.1.25.2.3.1.5\n\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snmp napi",src:n(3361).Z,width:"658",height:"316"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"snmp-tools \u0435\u0441\u0442\u044c \u0438 \u0434\u043b\u044f Windows: ",(0,r.kt)("a",{parentName:"p",href:"https://sourceforge.net/projects/net-snmp/files/net-snmp%20binaries/5.7-binaries/"},"https://sourceforge.net/projects/net-snmp/files/net-snmp%20binaries/5.7-binaries/"))),(0,r.kt)("p",null,"\u041d\u0430\u0434\u0435\u0435\u043c\u0441\u044f \u044d\u0442\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0431\u044b\u043b\u0430 \u043f\u043e\u043b\u0435\u0437\u043d\u0430 \u0438 \u0412\u0430\u043c \u0441\u0442\u0430\u043b\u043e \u043b\u0435\u0433\u0447\u0435 \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u043c\u0438\u0440\u0435 SNMP."))}u.isMDXComponent=!0},2762:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/oid1-8189a96e66bba97edfb34f6531f4ea6b.jpg"},6745:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/oid2-0da2fa658f5913b82f2024158e307762.jpg"},1365:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/oid3-d6d9f018edb31afa4d752175cf708acb.jpg"},4835:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/oid4-ce073eb84fc578f3d597eedee96b9f55.jpg"},9608:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/jpeg;base64,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"},2807:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/req2-294759a7810a580c9c3fef2489a63ddb.jpg"},1471:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/req3-1c1270b873db2aa6be0da3a760a20631.jpg"},8960:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/req4-968571fccdd243f968a370a8aa0a26b8.jpg"},8422:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/req5-bfef4a886b3e5bbd680de310c93f4bb3.jpg"},7415:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/snmpwalk01-84ba930c0feb283ed00953b7902308ca.jpg"},3361:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/snmpwalk1-e94da965b6b54bd1a4b6c72621389e6a.jpg"}}]);