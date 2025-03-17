"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[343],{7322:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>t,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"\u7f51\u7edc/\u5e38\u7528\u7f51\u7edc\u5de5\u5177","title":"\u5e38\u7528\u7f51\u7edc\u5de5\u5177","description":"\u4ecb\u7ecd\u5e38\u7528","source":"@site/docs/50-\u7f51\u7edc/\u5e38\u7528\u7f51\u7edc\u5de5\u5177.md","sourceDirName":"50-\u7f51\u7edc","slug":"/d3c1dfe7","permalink":"/d3c1dfe7","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/50-\u7f51\u7edc/\u5e38\u7528\u7f51\u7edc\u5de5\u5177.md","tags":[],"version":"current","lastUpdatedAt":1742246204000,"frontMatter":{"slug":"/d3c1dfe7"},"sidebar":"\u7f51\u7edc","previous":{"title":"wget","permalink":"/1a9db24d"}}');var r=e(4848),i=e(8453);const d={slug:"/d3c1dfe7"},c="Linux \u5e38\u7528\u7f51\u7edc\u7ba1\u7406\u5de5\u5177",t={},o=[{value:"1. <strong>ifconfig</strong>",id:"1-ifconfig",level:2},{value:"2. <strong>ip</strong>",id:"2-ip",level:2},{value:"3. <strong>netstat</strong>",id:"3-netstat",level:2},{value:"4. <strong>ss</strong>",id:"4-ss",level:2},{value:"5. <strong>ping</strong>",id:"5-ping",level:2},{value:"6. <strong>traceroute</strong>",id:"6-traceroute",level:2},{value:"7. <strong>nslookup</strong>",id:"7-nslookup",level:2},{value:"8. <strong>dig</strong>",id:"8-dig",level:2},{value:"9. <strong>route</strong>",id:"9-route",level:2},{value:"10. <strong>nmcli</strong>",id:"10-nmcli",level:2},{value:"11. <strong>systemd-networkd</strong>",id:"11-systemd-networkd",level:2},{value:"12. <strong>ethtool</strong>",id:"12-ethtool",level:2},{value:"13. <strong>iwconfig</strong>",id:"13-iwconfig",level:2},{value:"14. <strong>firewalld</strong>",id:"14-firewalld",level:2}];function h(n){const s={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"\u4ecb\u7ecd\u5e38\u7528"}),"\n",(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"linux-\u5e38\u7528\u7f51\u7edc\u7ba1\u7406\u5de5\u5177",children:"Linux \u5e38\u7528\u7f51\u7edc\u7ba1\u7406\u5de5\u5177"})}),"\n",(0,r.jsx)(s.p,{children:"\u5728Linux\u4e2d\uff0c\u7f51\u7edc\u7ba1\u7406\u5de5\u5177\u975e\u5e38\u4e30\u5bcc\uff0c\u5e2e\u52a9\u7528\u6237\u914d\u7f6e\u3001\u76d1\u63a7\u548c\u7ba1\u7406\u7f51\u7edc\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u89c1\u7684\u7f51\u7edc\u7ba1\u7406\u5de5\u5177\uff1a"}),"\n",(0,r.jsxs)(s.h2,{id:"1-ifconfig",children:["1. ",(0,r.jsx)(s.strong,{children:"ifconfig"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u529f\u80fd"}),"\uff1a\u7528\u4e8e\u67e5\u770b\u548c\u914d\u7f6e\u7f51\u7edc\u63a5\u53e3\u3002\u5b83\u53ef\u4ee5\u67e5\u770bIP\u5730\u5740\u3001MAC\u5730\u5740\u3001\u7f51\u7edc\u63a5\u53e3\u7684\u72b6\u6001\u7b49\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u4f7f\u7528\u793a\u4f8b"}),"\uff1a","\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"ifconfig\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"2-ip",children:["2. ",(0,r.jsx)(s.strong,{children:"ip"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u529f\u80fd"}),"\uff1a\u66ff\u4ee3ifconfig\uff0c\u7528\u4e8e\u914d\u7f6e\u548c\u7ba1\u7406IP\u5730\u5740\u3001\u8def\u7531\u3001\u7f51\u7edc\u63a5\u53e3\u7b49\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u4f7f\u7528\u793a\u4f8b"}),"\uff1a","\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"ip addr show      # \u67e5\u770b\u7f51\u7edc\u63a5\u53e3\u7684IP\u5730\u5740\nip link set eth0 up   # \u542f\u52a8\u7f51\u7edc\u63a5\u53e3eth0\nip route show      # \u67e5\u770b\u8def\u7531\u8868\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"3-netstat",children:["3. ",(0,r.jsx)(s.strong,{children:"netstat"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u529f\u80fd"}),"\uff1a\u663e\u793a\u7f51\u7edc\u8fde\u63a5\u3001\u8def\u7531\u8868\u3001\u63a5\u53e3\u7edf\u8ba1\u7b49\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u4f7f\u7528\u793a\u4f8b"}),"\uff1a","\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"netstat -tuln   # \u67e5\u770b\u76d1\u542c\u7684\u7aef\u53e3\u548c\u670d\u52a1\nnetstat -i      # \u67e5\u770b\u7f51\u7edc\u63a5\u53e3\u7edf\u8ba1\u4fe1\u606f\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"4-ss",children:["4. ",(0,r.jsx)(s.strong,{children:"ss"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u529f\u80fd"}),"\uff1a\u66f4\u5feb\u901f\u3001\u66f4\u73b0\u4ee3\u7684\u66ff\u4ee3\u54c1\uff0c\u7528\u4e8e\u67e5\u770bTCP/UDP\u8fde\u63a5\u548c\u76d1\u542c\u7aef\u53e3\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u4f7f\u7528\u793a\u4f8b"}),"\uff1a","\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"ss -tuln   # \u67e5\u770bTCP\u548cUDP\u7684\u76d1\u542c\u7aef\u53e3\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"5-ping",children:["5. ",(0,r.jsx)(s.strong,{children:"ping"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u529f\u80fd"}),"\uff1a\u6d4b\u8bd5\u7f51\u7edc\u8fde\u901a\u6027\uff0c\u5e38\u7528\u4e8e\u68c0\u67e5\u76ee\u6807\u4e3b\u673a\u662f\u5426\u53ef\u8fbe\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u4f7f\u7528\u793a\u4f8b"}),"\uff1a","\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"ping www.google.com\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"6-traceroute",children:["6. ",(0,r.jsx)(s.strong,{children:"traceroute"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u529f\u80fd"}),"\uff1a\u663e\u793a\u4ece\u5f53\u524d\u4e3b\u673a\u5230\u76ee\u6807\u4e3b\u673a\u7684\u8def\u5f84\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u4f7f\u7528\u793a\u4f8b"}),"\uff1a","\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"traceroute www.google.com\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"7-nslookup",children:["7. ",(0,r.jsx)(s.strong,{children:"nslookup"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u529f\u80fd"}),"\uff1a\u7528\u4e8e\u67e5\u8be2DNS\u8bb0\u5f55\uff0c\u6d4b\u8bd5\u57df\u540d\u89e3\u6790\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u4f7f\u7528\u793a\u4f8b"}),"\uff1a","\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"nslookup www.google.com\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"8-dig",children:["8. ",(0,r.jsx)(s.strong,{children:"dig"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u529f\u80fd"}),"\uff1a\u529f\u80fd\u66f4\u5f3a\u5927\u7684DNS\u67e5\u8be2\u5de5\u5177\uff0c\u6bd4nslookup\u66f4\u7075\u6d3b\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u4f7f\u7528\u793a\u4f8b"}),"\uff1a","\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"dig www.google.com\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"9-route",children:["9. ",(0,r.jsx)(s.strong,{children:"route"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u529f\u80fd"}),"\uff1a\u67e5\u770b\u548c\u914d\u7f6eLinux\u8def\u7531\u8868\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u4f7f\u7528\u793a\u4f8b"}),"\uff1a","\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"route -n   # \u67e5\u770b\u8def\u7531\u8868\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"10-nmcli",children:["10. ",(0,r.jsx)(s.strong,{children:"nmcli"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u529f\u80fd"}),"\uff1aNetworkManager\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u7528\u4e8e\u914d\u7f6e\u7f51\u7edc\u8fde\u63a5\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u4f7f\u7528\u793a\u4f8b"}),"\uff1a","\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"nmcli dev status    # \u67e5\u770b\u7f51\u7edc\u8bbe\u5907\u72b6\u6001\nnmcli con show      # \u67e5\u770b\u8fde\u63a5\u4fe1\u606f\nnmcli con up eth0   # \u542f\u52a8eth0\u8fde\u63a5\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"11-systemd-networkd",children:["11. ",(0,r.jsx)(s.strong,{children:"systemd-networkd"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u529f\u80fd"}),"\uff1a\u7528\u4e8e\u7ba1\u7406\u7f51\u7edc\u8fde\u63a5\u7684\u7cfb\u7edf\u670d\u52a1\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u4f7f\u7528\u793a\u4f8b"}),"\uff1a\u7f16\u8f91\u914d\u7f6e\u6587\u4ef6\uff08\u5982",(0,r.jsx)(s.code,{children:"/etc/systemd/network/"}),"\uff09\u4ee5\u8bbe\u7f6e\u9759\u6001IP\u3001\u8def\u7531\u7b49\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"12-ethtool",children:["12. ",(0,r.jsx)(s.strong,{children:"ethtool"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u529f\u80fd"}),"\uff1a\u67e5\u8be2\u548c\u66f4\u6539\u7f51\u7edc\u63a5\u53e3\u7684\u786c\u4ef6\u8bbe\u7f6e\uff0c\u5982\u7f51\u5361\u901f\u5ea6\u3001\u53cc\u5de5\u6a21\u5f0f\u7b49\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u4f7f\u7528\u793a\u4f8b"}),"\uff1a","\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"ethtool eth0   # \u67e5\u770beth0\u7684\u7f51\u5361\u8bbe\u7f6e\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"13-iwconfig",children:["13. ",(0,r.jsx)(s.strong,{children:"iwconfig"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u529f\u80fd"}),"\uff1a\u7528\u4e8e\u914d\u7f6e\u65e0\u7ebf\u7f51\u7edc\u63a5\u53e3\uff0c\u7c7b\u4f3c\u4e8eifconfig\uff0c\u4f46\u4e13\u7528\u4e8e\u65e0\u7ebf\u7f51\u7edc\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u4f7f\u7528\u793a\u4f8b"}),"\uff1a","\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'iwconfig wlan0 essid "MyNetwork"\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"14-firewalld",children:["14. ",(0,r.jsx)(s.strong,{children:"firewalld"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u529f\u80fd"}),"\uff1a\u7528\u4e8e\u7ba1\u7406Linux\u9632\u706b\u5899\uff0c\u652f\u6301\u52a8\u6001\u7ba1\u7406\u7f51\u7edc\u89c4\u5219\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u4f7f\u7528\u793a\u4f8b"}),"\uff1a","\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"firewall-cmd --state         # \u67e5\u770b\u9632\u706b\u5899\u72b6\u6001\nfirewall-cmd --list-all      # \u67e5\u770b\u6240\u6709\u7684\u9632\u706b\u5899\u89c4\u5219\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\u8fd9\u4e9b\u5de5\u5177\u5e2e\u52a9\u7ba1\u7406\u5458\u548c\u7528\u6237\u66f4\u9ad8\u6548\u5730\u7ba1\u7406\u548c\u914d\u7f6e\u7f51\u7edc\u3002"})]})}function x(n={}){const{wrapper:s}={...(0,i.R)(),...n.components};return s?(0,r.jsx)(s,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},8453:(n,s,e)=>{e.d(s,{R:()=>d,x:()=>c});var l=e(6540);const r={},i=l.createContext(r);function d(n){const s=l.useContext(i);return l.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function c(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),l.createElement(i.Provider,{value:s},n.children)}}}]);