"use strict";(self.webpackChunknapi_www=self.webpackChunknapi_www||[]).push([[6313],{24517:(A,n,e)=>{e.r(n),e.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>a,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var s=e(74848),i=e(28453);const t={sidebar_position:54},d="\u0428\u043b\u044e\u0437 Modbus RTU - Modbus TCP",l={id:"sensors/mgate/index",title:"\u0428\u043b\u044e\u0437 Modbus RTU - Modbus TCP",description:"\u0417\u0430\u0447\u0430\u0441\u0442\u0443\u044e \u0432 \u0434\u0430\u0442\u0447\u0438\u043a\u0430\u0445 \u0438\u043c\u0435\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0440\u0442 \u0434\u043b\u044f \u043e\u043f\u0440\u043e\u0441\u0430 (RS485). \u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0438\u043c\u0435\u043b\u0430\u0441\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043e\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0442\u0430\u043a\u0438\u0435 \u0434\u0430\u0442\u0447\u0438\u043a\u0438 \u043f\u043e \u0441\u0435\u0442\u0438 (Modbus TCP) \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0448\u043b\u044e\u0437\u044b Modbus RTU-Modbus TCP.",source:"@site/software/sensors/mgate/index.md",sourceDirName:"sensors/mgate",slug:"/sensors/mgate/",permalink:"/software/sensors/mgate/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:54,frontMatter:{sidebar_position:54},sidebar:"tutorialSidebar",previous:{title:"\u041e\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c \u0434\u0430\u0442\u0447\u0438\u043a \u043f\u043e Modbus TCP",permalink:"/software/sensors/modbus-tcp/"},next:{title:"\u0421\u0431\u043e\u0440 \u0434\u0430\u043d\u043d\u044b\u0445 c Modbus-\u0434\u0430\u0442\u0447\u0438\u043a\u043e\u0432 \u0447\u0435\u0440\u0435\u0437 Telegraf",permalink:"/software/sensors/telegraf-modbus/"}},r={},o=[{value:"\u041a\u0430\u043a \u044d\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442",id:"\u043a\u0430\u043a-\u044d\u0442\u043e-\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442",level:2},{value:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 mbusd",id:"\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430-\u0441\u0435\u0440\u0432\u0438\u0441\u0430-mbusd",level:2},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0421\u0431\u043e\u0440\u0449\u0438\u043a\u0430",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0441\u0431\u043e\u0440\u0449\u0438\u043a\u0430",level:2},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u043e\u0440\u0442\u0430",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438-\u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e-\u043f\u043e\u0440\u0442\u0430",level:3},{value:"\u0421\u0435\u0442\u0435\u0432\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",id:"\u0441\u0435\u0442\u0435\u0432\u044b\u0435-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",level:3},{value:"\u0422\u044e\u043d\u0438\u043d\u0433",id:"\u0442\u044e\u043d\u0438\u043d\u0433",level:3},{value:"\u041f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a \u0441\u043b\u0443\u0436\u0431\u044b \u043f\u043e\u0441\u043b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432",id:"\u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a-\u0441\u043b\u0443\u0436\u0431\u044b-\u043f\u043e\u0441\u043b\u0435-\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432",level:2},{value:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0440\u0430\u0431\u043e\u0442\u044b: \u0447\u0438\u0442\u0430\u0435\u043c \u0434\u0430\u0442\u0447\u0438\u043a",id:"\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430-\u0440\u0430\u0431\u043e\u0442\u044b-\u0447\u0438\u0442\u0430\u0435\u043c-\u0434\u0430\u0442\u0447\u0438\u043a",level:2},{value:"\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u043c \u043e\u043f\u0440\u043e\u0441 \u0434\u0430\u0442\u0447\u0438\u043a\u0430",id:"\u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u043c-\u043e\u043f\u0440\u043e\u0441-\u0434\u0430\u0442\u0447\u0438\u043a\u0430",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u0431\u043b\u0435\u043c",level:2}];function c(A){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...A.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u0448\u043b\u044e\u0437-modbus-rtu---modbus-tcp",children:"\u0428\u043b\u044e\u0437 Modbus RTU - Modbus TCP"}),"\n",(0,s.jsx)(n.p,{children:"\u0417\u0430\u0447\u0430\u0441\u0442\u0443\u044e \u0432 \u0434\u0430\u0442\u0447\u0438\u043a\u0430\u0445 \u0438\u043c\u0435\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0440\u0442 \u0434\u043b\u044f \u043e\u043f\u0440\u043e\u0441\u0430 (RS485). \u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0438\u043c\u0435\u043b\u0430\u0441\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043e\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0442\u0430\u043a\u0438\u0435 \u0434\u0430\u0442\u0447\u0438\u043a\u0438 \u043f\u043e \u0441\u0435\u0442\u0438 (Modbus TCP) \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0448\u043b\u044e\u0437\u044b Modbus RTU-Modbus TCP."}),"\n",(0,s.jsx)(n.p,{children:"\u0421\u0431\u043e\u0440\u0449\u0438\u043a-\u043a\u043e\u043c\u043f\u0430\u043a\u0442 \u0438\u043c\u0435\u0435\u0442 \u043f\u043e\u0440\u0442 RS485 \u0438 Ethernet \u0438 \u0445\u043e\u0440\u043e\u0448\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0442\u0430\u043a\u043e\u0433\u043e \u0448\u043b\u044e\u0437\u0430."}),"\n",(0,s.jsx)(n.h2,{id:"\u043a\u0430\u043a-\u044d\u0442\u043e-\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442",children:"\u041a\u0430\u043a \u044d\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u041e\u043f\u0440\u043e\u0441 \u043e\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0438\u0434\u0435\u0442 \u043d\u0430 \u0441\u0431\u043e\u0440\u0449\u0438\u043a \u043f\u043e IP \u0441\u0431\u043e\u0440\u0449\u0438\u043a\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 Modbus TCP."}),"\n",(0,s.jsx)(n.li,{children:"\u0421\u0431\u043e\u0440\u0449\u0438\u043a \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441 \u0432 Modbus RTU, \u043e\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u0434\u0430\u0442\u0447\u0438\u043a(\u0438) \u043f\u043e RS485 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043e\u0442\u0432\u0435\u0442\u044b \u043f\u043e Modbus TCP \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u0421\u0445\u0435\u043c\u0430 \u043a\u043e\u043c\u043c\u0443\u0442\u0430\u0446\u0438\u0438 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430 \u043d\u0430 \u0441\u0445\u0435\u043c\u0435."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u0414\u0430\u0442\u0447\u0438\u043a\u0438 \u0441\u043e\u0435\u0434\u0438\u043d\u044f\u044e\u0442\u0441\u044f \u0441 \u0421\u0431\u043e\u0440\u0449\u0438\u043a\u043e\u043c \u0447\u0435\u0440\u0435\u0437 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0440\u0442."}),"\n",(0,s.jsx)(n.li,{children:"\u0421\u0431\u043e\u0440\u0449\u0438\u043a \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d \u0441 \u0441\u0435\u0442\u044c\u044e, \u0438\u043c\u0435\u0435\u0442 IP-\u0430\u0434\u0440\u0435\u0441"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"mgate",src:e(18243).A+"",width:"502",height:"627"})}),"\n",(0,s.jsx)(n.h2,{id:"\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430-\u0441\u0435\u0440\u0432\u0438\u0441\u0430-mbusd",children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 mbusd"}),"\n",(0,s.jsx)(n.p,{children:'\u0412 NapiConfig \u0437\u0430\u0439\u0434\u0438\u0442\u0435 \u0432 \u043c\u0435\u043d\u044e "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 - \u041e\u0431\u0449\u0438\u0435". \u0412 \u0441\u043f\u0438\u0441\u043a\u0435 "\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u0421\u043b\u0443\u0436\u0431\u044b" \u0421\u0435\u0440\u0432\u0438\u0441 mbusd \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0432 \u0441\u0442\u0430\u0442\u0443\u0441\u0435 "Enabled", "Active".'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:e(45601).A+"",width:"1058",height:"478"})}),"\n",(0,s.jsx)(n.p,{children:'\u0415\u0441\u043b\u0438 \u0441\u0435\u0440\u0432\u0438\u0441 \u043d\u0435 \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u043d\u0430 \u043f\u043e\u043b\u0435 "Disabled" (1), \u0437\u0430\u0442\u0435\u043c "Inactive" (2)'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"mgate",src:e(78093).A+"",width:"1040",height:"71"})}),"\n",(0,s.jsx)(n.p,{children:"\u0421\u0442\u0430\u0442\u0443\u0441 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c\u0441\u044f."}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"\u0411\u0435\u0437 \u0412\u0435\u0431-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u0440\u0430\u0431\u043e\u0442\u0430 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u043c\u0438"}),(0,s.jsx)(n.p,{children:"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0441\u0435\u0440\u0432\u0438\u0441"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"systemctl enable mbusd"})}),(0,s.jsx)(n.p,{children:"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0441\u0435\u0440\u0432\u0438\u0441 (\u043f\u0440\u0438 \u0441\u0442\u0430\u0440\u0442\u0435 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c\u0441\u044f \u0432\u0440\u0443\u0447\u043d\u0443\u044e)"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"systemctl start mbusd"})}),(0,s.jsx)(n.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0430 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0441\u0435\u0440\u0432\u0438\u0441"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"systemctl restart mbusd"})}),(0,s.jsx)(n.p,{children:"\u041e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0435\u0440\u0432\u0438\u0441"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"systemctl stop mbusd"})}),(0,s.jsx)(n.p,{children:"\u0412\u044b\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0441\u0435\u0440\u0432\u0438\u0441"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"systemctl disable mbusd"})})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u26a0\ufe0f",' \u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0412\u0435\u0431-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u043c, \u0432 \u043d\u0435\u043c \u043d\u0435\u043b\u044c\u0437\u044f "\u0438\u0441\u043f\u043e\u0440\u0442\u0438\u0442\u044c" \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b.']}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0441\u0431\u043e\u0440\u0449\u0438\u043a\u0430",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0421\u0431\u043e\u0440\u0449\u0438\u043a\u0430"}),"\n",(0,s.jsxs)(n.p,{children:["\u0412 \u0421\u0431\u043e\u0440\u0449\u0438\u043a\u0435 \u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0435 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u0435 mbusd ",(0,s.jsx)(n.a,{href:"https://github.com/3cky/mbusd",children:"https://github.com/3cky/mbusd"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u0412 \u0441\u0431\u043e\u0440\u043a\u0435 NapiLinux \u0438 \u0432 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u043d\u043e\u043c ARMbian \u044d\u0442\u043e\u0442 \u043f\u0430\u043a\u0435\u0442 \u0443\u0436\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d, \u0435\u0441\u043b\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u043a\u0435\u0442 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e, \u044d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u043e ",(0,s.jsx)(n.a,{href:"/software/notes/armbian-tuning/#%D1%81%D0%BA%D0%BE%D0%BC%D0%BF%D0%B8%D0%BB%D0%B8%D1%80%D1%83%D0%B5%D0%BC-mbusd",children:"\u043d\u0430\u0448\u0435\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 mbusd \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u0444\u0430\u0439\u043b /etc/mbusd.conf \u0438\u043b\u0438 \u0447\u0435\u0440\u0435\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u0443 NapiConfig (\u0433\u0434\u0435 \u043c\u044b \u0432\u044b\u0432\u043e\u0434\u0438\u043c \u0432\u0441\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u044d\u0442\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0430 \u0432 \u0412\u0435\u0431-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441)."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"mgate",src:e(78988).A+"",width:"1111",height:"782"})}),"\n",(0,s.jsx)(n.h3,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438-\u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e-\u043f\u043e\u0440\u0442\u0430",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u043e\u0440\u0442\u0430"}),"\n",(0,s.jsx)(n.p,{children:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c - \u044d\u0442\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043f\u043e\u0440\u0442\u0430 (\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 1,2). \u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c, \u0447\u0435\u0442\u043d\u043e\u0441\u0442\u044c, \u0441\u0442\u043e\u043f-\u0431\u0438\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043a\u0430\u043a \u0432 \u0434\u0430\u0442\u0447\u0438\u043a\u0430\u0445."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u26a0\ufe0f"," \u0412 90% \u0441\u043b\u0443\u0447\u0430\u0435\u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0434\u0430\u0442\u0447\u0438\u043a\u0430 9600\\8n1 \u0438\u043b\u0438 115200\\8n1"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u0415\u0441\u043b\u0438 \u0434\u0430\u0442\u0447\u0438\u043a\u043e\u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e, \u0442\u043e \u0443 \u043d\u0438\u0445 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043f\u043e\u0440\u0442\u0430 \u0438 \u0440\u0430\u0437\u043d\u044b\u0435 modbus \u0430\u0434\u0440\u0435\u0441\u0430 ! \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0434\u0430\u0442\u0447\u0438\u043a\u0430, modbus \u0430\u0434\u0440\u0435\u0441 \u0437\u043d\u0430\u0442\u044c \u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"\u041f\u043e \u0431\u043e\u043b\u044c\u0448\u043e\u043c\u0443 \u0441\u0447\u0435\u0442\u0443, \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043c\u043e\u0436\u043d\u043e \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u0435\u0441\u043b\u0438 \u043d\u0435\u0442 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u044b\u0445 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u0439."})}),"\n",(0,s.jsx)(n.h3,{id:"\u0441\u0435\u0442\u0435\u0432\u044b\u0435-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",children:"\u0421\u0435\u0442\u0435\u0432\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),"\n",(0,s.jsxs)(n.p,{children:["\u26a0\ufe0f"," \u0412 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u043c\u0435\u043d\u044f\u0442\u044c \u0441\u0435\u0442\u0435\u0432\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043d\u0435\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438."]}),"\n",(0,s.jsx)(n.p,{children:'\u0410\u0434\u0440\u0435\u0441 TCP-\u0441\u0435\u0440\u0432\u0435\u0440\u0430 (3) \u044d\u0442\u043e IP, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 "\u0441\u043b\u0443\u0448\u0430\u0435\u0442" \u0441\u0435\u0440\u0432\u0438\u0441. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e (0.0.0.0), \u0441\u0435\u0440\u0432\u0438\u0441 \u0441\u043b\u0443\u0448\u0430\u0435\u0442 \u0432\u0441\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b.'}),"\n",(0,s.jsx)(n.p,{children:"\u041f\u043e\u0440\u0442 (4) \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0441\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439. \u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u044c\u0441\u044f, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043f\u043e\u0434\u043e\u0431\u043d\u044b\u0445 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432."}),"\n",(0,s.jsx)(n.h3,{id:"\u0442\u044e\u043d\u0438\u043d\u0433",children:"\u0422\u044e\u043d\u0438\u043d\u0433"}),"\n",(0,s.jsxs)(n.p,{children:["\u26a0\ufe0f"," \u0412 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u043c\u0435\u043d\u044f\u0442\u044c \u0441\u0435\u0442\u0435\u0432\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043d\u0435\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438."]}),"\n",(0,s.jsx)(n.p,{children:'\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e TCP-\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0439 (5) \u043c\u043e\u0436\u043d\u043e \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c, \u0435\u0441\u043b\u0438 \u0434\u0430\u0442\u0447\u0438\u043a\u043e\u0432 \u043e\u0447\u0435\u043d\u044c \u043c\u043d\u043e\u0433\u043e \u0438 \u0434\u0430\u043d\u043d\u044b\u0435 "\u0437\u0430\u0441\u0442\u0440\u0435\u0432\u0430\u044e\u0442".'}),"\n",(0,s.jsx)(n.p,{children:"\u041c\u043e\u0436\u043d\u043e \u0442\u0430\u043a\u0436\u0435 \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043f\u0430\u0443\u0437\u0443 \u043c\u0435\u0436\u0434\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c\u0438 (6), \u0435\u0441\u043b\u0438 \u044d\u0442\u043e\u0433\u043e \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f."}),"\n",(0,s.jsx)(n.h2,{id:"\u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a-\u0441\u043b\u0443\u0436\u0431\u044b-\u043f\u043e\u0441\u043b\u0435-\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432",children:"\u041f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a \u0441\u043b\u0443\u0436\u0431\u044b \u043f\u043e\u0441\u043b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432"}),"\n",(0,s.jsx)(n.p,{children:"\u041f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a \u0441\u043b\u0443\u0436\u0431\u044b \u043f\u043e\u0441\u043b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438."}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["\u0411\u0435\u0437 \u0412\u0435\u0431-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0444\u0430\u0439\u043b ",(0,s.jsx)(n.code,{children:"/etc/mbusd/mbusd.conf"})]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"nano /etc/mbusd/mbusd.conf"})}),(0,s.jsx)(n.p,{children:"\u0438 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0441\u043b\u0443\u0436\u0431\u0443 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"systemctl restart mbusd"})}),(0,s.jsx)(n.p,{children:"\u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"systemctl status mbusd"})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430-\u0440\u0430\u0431\u043e\u0442\u044b-\u0447\u0438\u0442\u0430\u0435\u043c-\u0434\u0430\u0442\u0447\u0438\u043a",children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0440\u0430\u0431\u043e\u0442\u044b: \u0447\u0438\u0442\u0430\u0435\u043c \u0434\u0430\u0442\u0447\u0438\u043a"}),"\n",(0,s.jsx)(n.p,{children:"\u0418\u0442\u0430\u043a, \u0434\u0430\u0442\u0447\u0438\u043a \u043f\u043e\u0434\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d \u043a \u0421\u0431\u043e\u0440\u0449\u0438\u043a\u0443 \u0441 \u0432\u0435\u0440\u043d\u044b\u043c\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438 \u043f\u043e RS485.  \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0435\u043c \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u0435\u0433\u043e \u0447\u0435\u0440\u0435\u0437 \u0448\u043b\u044e\u0437."}),"\n",(0,s.jsx)(n.p,{children:"\u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440 \u0441 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u043e\u0439 \u0443\u0442\u0438\u043b\u0438\u0442\u043e\u0439 modpoll (\u0438\u043b\u0438 mbpoll)."}),"\n",(0,s.jsx)(n.p,{children:"\u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c, IP \u0430\u0434\u0440\u0435\u0441 \u0421\u0431\u043e\u0440\u0449\u0438\u043a\u0430: 10.10.10.114"}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u043b\u0438 \u0421\u0431\u043e\u0440\u0449\u0438\u043a \u043f\u043e \u0441\u0435\u0442\u0438 \u043c\u043e\u0436\u043d\u043e \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 ping"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dmn@hp:~$ ping  10.10.10.114\nPING 10.10.10.114 (10.10.10.114) 56(84) bytes of data.\n64 bytes from 10.10.10.114: icmp_seq=1 ttl=63 time=3.56 ms\n64 bytes from 10.10.10.114: icmp_seq=2 ttl=63 time=3.60 ms\n^C\n--- 10.10.10.114 ping statistics ---\n2 packets transmitted, 2 received, 0% packet loss, time 1002ms\nrtt min/avg/max/mdev = 3.560/3.581/3.603/0.021 ms\n"})}),(0,s.jsx)(n.p,{children:"\u0411\u044b\u0432\u0430\u0435\u0442, \u0447\u0442\u043e ping \u0437\u0430\u043a\u0440\u044b\u0442 \u0444\u0430\u0439\u0440\u0432\u043e\u043b\u043e\u043c, \u0442\u043e\u0433\u0434\u0430 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 telnet \u043d\u0430 \u043f\u043e\u0440\u0442 \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 mbusd"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dmn@hp:~$ telnet 10.10.10.114 502\nTrying 10.10.10.114...\nConnected to 10.10.10.114.\nEscape character is '^]'.\n"})})]}),"\n",(0,s.jsx)(n.h3,{id:"\u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u043c-\u043e\u043f\u0440\u043e\u0441-\u0434\u0430\u0442\u0447\u0438\u043a\u0430",children:"\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u043c \u043e\u043f\u0440\u043e\u0441 \u0434\u0430\u0442\u0447\u0438\u043a\u0430"}),"\n",(0,s.jsx)(n.p,{children:"\u041d\u0430 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0435 (\u041d\u0415 \u041d\u0410 \u0421\u0431\u043e\u0440\u0449\u0438\u043a\u0435) \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u043c \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u043e\u043f\u0440\u043e\u0441\u0430 \u0421\u0431\u043e\u0440\u0449\u0438\u043a\u0430 \u043f\u043e Modbus TCP"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dmn@hp:~$ modpoll -m tcp -a 1 -r 1 -c 5 -t 3 10.10.10.114\nmodpoll 3.10 - FieldTalk(tm) Modbus(R) Master Simulator\nCopyright (c) 2002-2021 proconX Pty Ltd\nVisit https://www.modbusdriver.com for Modbus libraries and tools.\n\nProtocol configuration: MODBUS/TCP, FC4\nSlave configuration...: address = 1, start reference = 1, count = 5\nCommunication.........: 10.10.10.114, port 502, t/o 1.00 s, poll rate 1000 ms\nData type.............: 16-bit register, input register table\n\n-- Polling slave... (Ctrl-C to stop)\n[1]: 0\n[2]: 1102\n[3]: 2797\n[4]: 2717\n[5]: 8090\n-- Polling slave... (Ctrl-C to stop)\n[1]: 0\n[2]: 1102\n[3]: 2798\n[4]: 2716\n[5]: 8088\n-- Polling slave... (Ctrl-C to stop\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c, \u0448\u043b\u044e\u0437 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 !"}),"\n",(0,s.jsx)(n.h2,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u0431\u043b\u0435\u043c",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c"}),"\n",(0,s.jsx)(n.p,{children:"\u0415\u0441\u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u0438\u0434\u0443\u0442, \u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u043b\u0438 \u0434\u0430\u0442\u0447\u0438\u043a \u0441\u043e \u0421\u0431\u043e\u0440\u0449\u0438\u043a\u0430 \u043f\u043e Modbus RTU"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u0417\u0430\u0439\u0434\u0438\u0442\u0435 \u043f\u043e ssh \u043d\u0430 \u0421\u0431\u043e\u0440\u0449\u0438\u043a"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u041e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0435\u0440\u0432\u0438\u0441 mbusd"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"systemctl stop mbusd\n\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u043e\u043f\u0440\u043e\u0441\u0430 \u043f\u043e modbus rtu \u0441 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u043c\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"root@napi-rk3308b-s:~# modpoll -m rtu -b 115200 -p none -d 8 -a 1 -r 1  -c 5 -t 3 /dev/ttyS3\nmodpoll 3.10 - FieldTalk(tm) Modbus(R) Master Simulator\nCopyright (c) 2002-2021 proconX Pty Ltd\nVisit https://www.modbusdriver.com for Modbus libraries and tools.\n\nProtocol configuration: Modbus RTU, FC4\nSlave configuration...: address = 1, start reference = 1, count = 5\nCommunication.........: /dev/ttyS3, 115200, 8, 1, none, t/o 1.00 s, poll rate 1000 ms\nData type.............: 16-bit register, input register table\n\n-- Polling slave... (Ctrl-C to stop)\n[1]: 0\n[2]: 1100\n[3]: 2801\n[4]: 2729\n[5]: 8112\n-- Polling slave... (Ctrl-C to stop)\n[1]: 0\n[2]: 1100\n[3]: 2802\n[4]: 2726\n[5]: 8106\n-- Polling slave... (Ctrl-C to stop)\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043e\u0431\u0438\u0442\u044c\u0441\u044f, \u0447\u0442\u043e\u0431\u044b \u0434\u0430\u043d\u043d\u044b\u0435 \u0448\u043b\u0438 !"}),"\n",(0,s.jsx)(n.p,{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0439\u0442\u0435 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0438 \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u043f\u043e\u0440\u0442\u0430 RS485 \u0441 \u0434\u0430\u0442\u0447\u0438\u043a\u043e\u043c"}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"\u041a\u043e\u0433\u0434\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u044b \u043d\u0430\u0447\u043d\u0443\u0442 \u0447\u0438\u0442\u0430\u0442\u044c\u0441\u044f, \u0441\u043d\u043e\u0432\u0430 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 mbusd"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"systemctl start mbusd\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 mbusd \u0432\u0435\u0440\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043f\u043e\u0440\u0442\u0430 !"}),"\n"]})]})}function a(A={}){const{wrapper:n}={...(0,i.R)(),...A.components};return n?(0,s.jsx)(n,{...A,children:(0,s.jsx)(c,{...A})}):c(A)}},78093:(A,n,e)=>{e.d(n,{A:()=>s});const s="data:image/jpeg;base64,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da3Vv3MEpQMIbKWeQg+VFZrGi4hVmZQ7lmYk3Z3Y/idjzZj1P6WA9j218NxpG89zcwN/hv05/hYq4osYNTEssfEtjZhfmPb/AMJ6wafw1f8AjS/NPInRurVMzqgsi3sqD5KOgH6CpHjkXoyMQR9xTomrdviI3uRa2/hL4Bz4S2v5rrQdY5h+CReF0YEhkYeDKwII/O38Ggf/AFzRA/yT2aPStPLLxyTvHdgniGPlFBAgsshSwUuOtrUSrKbgjwNfwa7UhfoZWa32vb2MynWPHpbqbMqyuqOQfmFZjShFdvdReiL4KP0AsBWpg0y8Jd5Jm4VVR1+9TSyo+mWVnfzFmHKw9nSaOLVc/OS8T+vdK31dvYyY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY70yY706Yb06Y71zRg+jc+RpCjRn7yRon+ZQII5EGoteuo1T/ABJ9LwBuGwsoYsDUerTTcA4xquHi47npYnlan7uBAXnk8kai7t9gDSGHUTs+plidbtG8rtIU/wDXi4adMN6sV0+rglc+VO8UOx68gpY0vDJGxRh8iDY+z/p0f7n9n/K0USXPmeSRyMO6yplI/Rbf/fa6iSS/Avi1hc2+3tdUUsFuxtzPID83alYYYpmRUEStyU1Mmq0cy8E0DxraRT1BIAI+oIIqc2UXbVy8x9JyB7jjz24H6ko1aKaSMi6yRL3iMPmGW4P2NINHGTwh9V8ME/JQebHmOSgk/KkZeBgyxSoVeV1N1aRf4EVgCsZ95mUM4UWQ9of7KV2h/spU6arSSqUngeFQsqHkymwvYimaacpcP46lFteT/uKLCReoPvi6t7YXkR3KxRJZW1DAXKqTyAA5s55IOZrUxKXcvPIkV1lkPK68QuEACoo8qLVu+uysV5A2NvZ2t3ELdrvoBENMjBEBsGBPO9doiHV6fWauE6tYVuwRPKfduR1qdCjrqkd1UBZmjZQrDatW8HZxVu/nhgR7N3hUBwearbxArXrFptL2tFANEIluwV195mPO5vflYW/N396k/ca1MSJ8NV79muzugawsp/nU4jnguSqsyyLY2NjYD+df1Y04iaSSRdMA6svndVDN6mk0Omug45NHCI5JFLFQSwVWIvbkTTwXTjCqC134etuVuX6kV9udEhZHCkr1tXe/AnVJYp3uGDEgEMov4fKngeKaVXEDcdgQSA4ZeasPBlYMLm1aqAIsYl73VQM5YE2HvxmNskY/NqGlLmRY7JpnkvxDiDBnk4QLfNGqaIRPF7+rd2LMit+FjwjhUNayIqp4haKlBGjAqSQSVBJF/mSa/tH/AHH2aWMfH/pH+b5vrWgide8aax87fiP1NaGJoIecaWtwfS1aCIpALRqb2UXv0vWhifUghu8I53HQn5kfm7+9SfuNRx3V4nwUKKiQFlZQ4LDkzE9L2J59TWlh43Vll/F8QEWNxfl9rVBEFhRkEfMggm/P6HnXvi5IfjZSCevQ8/uPYoZo2DAHpWmhhXvRI6pc94w6XJN7C5rTwi0gdixLXIv4E8vtWkheNowhRnc3Aa/W9+tJGG71XSwI4OEcIA/S3KoVMciFHid2YEE38WJHrUax+6qhV6AAWHX6V/aP+4/nTVTxGZi7ItrXNa/Vei12hqvRa7Q1Xotdoar0Wu0NV6LXaGq9FrtDVei12hqvRa7Q1Xotdoar0Wu0NV6LXaGq9FrtDU/6aPw09SfEn/wF/8QAKhEAAgIBBAEEAQMFAAAAAAAAAAECAxEEBRITMRAhImAyI0FwQlFScYH/2gAIAQIBAT8A+6VVdtiRotP0wOSkuTeBLHlm7aLtjzRL8seu3bb3vlIr08aliJKEZfGw3LbMLlUNY+LPH3XalnUom8SwblRBw7LZY/sjaoTWn/V/4WYdckWw42S9ILMkaerrikjU3y065YybffPWZc/2Y/8AFG41dWoaP6vuuhuVNyZGXNcka7Sai+1Th4Ro438ONuDVTVFTJyU7G/SprkimXKCwSykzZsrn/sWYSyjdJqeqbF5+5y8E7mhXPHM23evhxZVrqcfFlu4U1e7ZuO5yteBWuPuO5kb2jadyUvZnKMj4Z9jX7hHTJonqXZY2QeYt+qZkwY+3TjmQ6yMMEbJL9yVkmOIxLIqyuVlbyindbqyzeLpltllhPyVfj6pGDJn7dOWJDsFYOaFNDmMUsCsFZMdjOxnZMl5KvH3NjrydKOlHQjoR0I6EdCOhHQjoR0I6EKkSx/AWf4D/AP/EACkRAAIBAwIFBAIDAAAAAAAAAAABAgMEERUhBRIiMWAQIDJBExQjcIH/2gAIAQMBAT8A80RD1qL2QgYME4GPNoCJECSJesRsjIZNC8z7SN+bJDlZ1L4jRFDTSE02YfpHGBNwZH0mvNO5a8JhUoqbJ8EpyXQXNvVtngTG39Fjw+rW+XYXBaK+RotAfBaGCtSdKWDmTQjGS24Lz0+Zl7SVCo4+3Jny1dyzni2Qr+SSeCrXjKXK49ypbUJZfKW9G3pveIrxN4QupFVzjSbiK6qRWJldULhYlH/SrZVIv+I/SqPeb2LWlRpLrWWWtVzgjiu1y/bgx5aiygnbIdonFRTJWLlLmyRtHjufpuX2Kz5ZC6UVIzlSxEjZTkszJWnN3eBWD+mPh7j3ewrTbfuUaP44I4pvcvzNdJQ4pOksGt1TW6xrdY1usa3WNbrGt1jW6xrdY1usa3WNbrD43MuK7rvPmu5v7Nzc3Nzc3Nx4Ylj+g//Z"},45601:(A,n,e)=>{e.d(n,{A:()=>s});const s=e.p+"assets/images/mbusd-servicejpg-c12047cc703a66ce88149f6d8f650135.jpg"},78988:(A,n,e)=>{e.d(n,{A:()=>s});const s=e.p+"assets/images/mbusd-settings-ec2df8200faf5a6be6646c848ab5d8b0.jpg"},18243:(A,n,e)=>{e.d(n,{A:()=>s});const s=e.p+"assets/images/mgate-1c448e2322642901b4af89a1eed314de.jpg"},28453:(A,n,e)=>{e.d(n,{R:()=>d,x:()=>l});var s=e(96540);const i={},t=s.createContext(i);function d(A){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof A?A(n):{...n,...A}}),[n,A])}function l(A){let n;return n=A.disableParentContext?"function"==typeof A.components?A.components(i):A.components||i:d(A.components),s.createElement(t.Provider,{value:n},A.children)}}}]);