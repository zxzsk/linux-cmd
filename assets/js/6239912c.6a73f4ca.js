"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7532],{1824:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>h,contentTitle:()=>r,default:()=>o,frontMatter:()=>l,metadata:()=>s,toc:()=>t});const s=JSON.parse('{"id":"command/\u7f51\u7edc/ping","title":"ping","description":"\u2b50\u7f51\u7edc\u8fde\u901a\u6027\u6d4b\u8bd5","source":"@site/docs/02-command/50-\u7f51\u7edc/ping.md","sourceDirName":"02-command/50-\u7f51\u7edc","slug":"/command/\u7f51\u7edc/ping","permalink":"/command/\u7f51\u7edc/ping","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/02-command/50-\u7f51\u7edc/ping.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"nmap","permalink":"/command/\u7f51\u7edc/nmap"},"next":{"title":"rsync","permalink":"/command/\u7f51\u7edc/rsync"}}');var c=i(4848),d=i(8453);const l={},r=void 0,h={},t=[{value:"1. \u7b80\u4ecb",id:"1-\u7b80\u4ecb",level:2},{value:"2. \u5e38\u89c1\u64cd\u4f5c\u6982\u89c8",id:"2-\u5e38\u89c1\u64cd\u4f5c\u6982\u89c8",level:2},{value:"3. \u547d\u4ee4\u793a\u4f8b",id:"3-\u547d\u4ee4\u793a\u4f8b",level:2},{value:"3.1 \u57fa\u672c ping \u6d4b\u8bd5",id:"31-\u57fa\u672c-ping-\u6d4b\u8bd5",level:3},{value:"3.2 \u6307\u5b9a\u6b21\u6570\u7684 ping \u6d4b\u8bd5",id:"32-\u6307\u5b9a\u6b21\u6570\u7684-ping-\u6d4b\u8bd5",level:3},{value:"3.3 \u6301\u7eed ping \u6d4b\u8bd5",id:"33-\u6301\u7eed-ping-\u6d4b\u8bd5",level:3},{value:"3.4 \u591a\u76ee\u6807 ping \u6d4b\u8bd5",id:"34-\u591a\u76ee\u6807-ping-\u6d4b\u8bd5",level:3},{value:"3.5 \u6d4b\u8bd5 DNS \u89e3\u6790",id:"35-\u6d4b\u8bd5-dns-\u89e3\u6790",level:3},{value:"4. \u5e38\u89c1\u9009\u9879\u8bf4\u660e",id:"4-\u5e38\u89c1\u9009\u9879\u8bf4\u660e",level:2},{value:"\u793a\u4f8b\uff1a\u6307\u5b9a\u6b21\u6570\u548c\u65f6\u95f4\u95f4\u9694\u7684 ping \u6d4b\u8bd5",id:"\u793a\u4f8b\u6307\u5b9a\u6b21\u6570\u548c\u65f6\u95f4\u95f4\u9694\u7684-ping-\u6d4b\u8bd5",level:3},{value:"\u793a\u4f8b\uff1a\u6d4b\u8bd5\u591a\u76ee\u6807",id:"\u793a\u4f8b\u6d4b\u8bd5\u591a\u76ee\u6807",level:3},{value:"5. \u4f7f\u7528 ping \u65f6\u7684\u6ce8\u610f\u4e8b\u9879",id:"5-\u4f7f\u7528-ping-\u65f6\u7684\u6ce8\u610f\u4e8b\u9879",level:2},{value:"6. \u5c0f\u8d34\u58eb",id:"6-\u5c0f\u8d34\u58eb",level:2},{value:"7. \u603b\u7ed3",id:"7-\u603b\u7ed3",level:2}];function x(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.p,{children:"\u2b50\u7f51\u7edc\u8fde\u901a\u6027\u6d4b\u8bd5"}),"\n",(0,c.jsx)(e.h2,{id:"1-\u7b80\u4ecb",children:"1. \u7b80\u4ecb"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"ping"})," \u547d\u4ee4\u662f Linux \u7cfb\u7edf\u4e2d\u7528\u4e8e\u6d4b\u8bd5\u7f51\u7edc\u8fde\u901a\u6027\u7684\u5de5\u5177\u3002\ud83d\udd27 \u5b83\u901a\u8fc7\u5411\u6307\u5b9a\u7684 IP \u5730\u5740\u6216\u57df\u540d\u53d1\u9001 ICMP \u56de\u663e\u8bf7\u6c42\uff08Echo Request\uff09\u5e76\u7b49\u5f85\u54cd\u5e94\uff08Echo Reply\uff09\u6765\u68c0\u6d4b\u7f51\u7edc\u662f\u5426\u8fde\u901a\u3002",(0,c.jsx)(e.code,{children:"ping"})," \u547d\u4ee4\u662f\u7f51\u7edc\u8bca\u65ad\u548c\u6545\u969c\u6392\u9664\u7684\u57fa\u672c\u5de5\u5177\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"2-\u5e38\u89c1\u64cd\u4f5c\u6982\u89c8",children:"2. \u5e38\u89c1\u64cd\u4f5c\u6982\u89c8"}),"\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"\u64cd\u4f5c"}),(0,c.jsx)(e.th,{children:"\u547d\u4ee4\u683c\u5f0f"}),(0,c.jsx)(e.th,{children:"\u8bf4\u660e"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"\u57fa\u672c ping \u6d4b\u8bd5"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"ping <\u76ee\u6807>"})}),(0,c.jsx)(e.td,{children:"\u5411\u6307\u5b9a\u76ee\u6807\u53d1\u9001 ICMP \u56de\u663e\u8bf7\u6c42\u3002"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"\u6307\u5b9a\u6b21\u6570\u7684 ping \u6d4b\u8bd5"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"ping -c <\u6b21\u6570> <\u76ee\u6807>"})}),(0,c.jsx)(e.td,{children:"\u53d1\u9001\u6307\u5b9a\u6b21\u6570\u7684 ICMP \u56de\u663e\u8bf7\u6c42\u3002"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"\u6301\u7eed ping \u6d4b\u8bd5"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"ping <\u76ee\u6807>"})}),(0,c.jsx)(e.td,{children:"\u6301\u7eed\u53d1\u9001 ICMP \u56de\u663e\u8bf7\u6c42\uff0c\u76f4\u5230\u624b\u52a8\u505c\u6b62\u3002"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"\u663e\u793a\u5e2e\u52a9\u4fe1\u606f"}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"ping -h"})}),(0,c.jsxs)(e.td,{children:["\u663e\u793a ",(0,c.jsx)(e.code,{children:"ping"})," \u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f\u3002"]})]})]})]}),"\n",(0,c.jsx)(e.h2,{id:"3-\u547d\u4ee4\u793a\u4f8b",children:"3. \u547d\u4ee4\u793a\u4f8b"}),"\n",(0,c.jsx)(e.h3,{id:"31-\u57fa\u672c-ping-\u6d4b\u8bd5",children:"3.1 \u57fa\u672c ping \u6d4b\u8bd5"}),"\n",(0,c.jsx)(e.p,{children:"\u8981\u5411\u767e\u5ea6\u670d\u52a1\u5668\u53d1\u9001 ICMP \u56de\u663e\u8bf7\u6c42\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"$ ping baidu.com\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"PING baidu.com (180.97.33.107) 56(84) bytes of data.\r\n64 bytes from 180.97.33.107 (180.97.33.107): icmp_seq=1 ttl=54 time=30.3 ms\r\n64 bytes from 180.97.33.107 (180.97.33.107): icmp_seq=2 ttl=54 time=30.4 ms\r\n...\n"})}),"\n",(0,c.jsx)(e.h3,{id:"32-\u6307\u5b9a\u6b21\u6570\u7684-ping-\u6d4b\u8bd5",children:"3.2 \u6307\u5b9a\u6b21\u6570\u7684 ping \u6d4b\u8bd5"}),"\n",(0,c.jsx)(e.p,{children:"\u8981\u5411\u767e\u5ea6\u670d\u52a1\u5668\u53d1\u9001 5 \u6b21 ICMP \u56de\u663e\u8bf7\u6c42\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"$ ping -c 5 baidu.com\n"})}),"\n",(0,c.jsx)(e.h3,{id:"33-\u6301\u7eed-ping-\u6d4b\u8bd5",children:"3.3 \u6301\u7eed ping \u6d4b\u8bd5"}),"\n",(0,c.jsxs)(e.p,{children:["\u8981\u6301\u7eed\u5411\u767e\u5ea6\u670d\u52a1\u5668\u53d1\u9001 ICMP \u56de\u663e\u8bf7\u6c42\uff0c\u76f4\u5230\u624b\u52a8\u505c\u6b62\uff08\u4f7f\u7528 ",(0,c.jsx)(e.code,{children:"Ctrl+C"}),"\uff09\uff1a"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"$ ping baidu.com\n"})}),"\n",(0,c.jsx)(e.h3,{id:"34-\u591a\u76ee\u6807-ping-\u6d4b\u8bd5",children:"3.4 \u591a\u76ee\u6807 ping \u6d4b\u8bd5"}),"\n",(0,c.jsx)(e.p,{children:"\u8981\u540c\u65f6 ping \u591a\u4e2a\u76ee\u6807\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"$ ping -c 5 baidu.com google.com 8.8.8.8\n"})}),"\n",(0,c.jsx)(e.h3,{id:"35-\u6d4b\u8bd5-dns-\u89e3\u6790",children:"3.5 \u6d4b\u8bd5 DNS \u89e3\u6790"}),"\n",(0,c.jsx)(e.p,{children:"\u8981\u6d4b\u8bd5 DNS \u89e3\u6790\u662f\u5426\u6b63\u5e38\uff0c\u53ef\u4ee5 ping \u4e00\u4e2a\u57df\u540d\u5e76\u67e5\u770b IP \u5730\u5740\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"$ ping -c 1 example.com\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"PING example.com (93.184.216.34) 56(84) bytes of data.\r\n64 bytes from 93.184.216.34 (93.184.216.34): icmp_seq=1 ttl=53 time=29.6 ms\r\n\r\n--- example.com ping statistics ---\r\n1 packets transmitted, 1 received, 0% packet loss, time 0ms\r\nrtt min/avg/max/mdev = 29.629/29.629/29.629/0.000 ms\n"})}),"\n",(0,c.jsx)(e.h2,{id:"4-\u5e38\u89c1\u9009\u9879\u8bf4\u660e",children:"4. \u5e38\u89c1\u9009\u9879\u8bf4\u660e"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsxs)(e.strong,{children:[(0,c.jsx)(e.code,{children:"-c"})," \u6216 ",(0,c.jsx)(e.code,{children:"--count"})]}),"\uff1a\u6307\u5b9a\u53d1\u9001 ICMP \u56de\u663e\u8bf7\u6c42\u7684\u6b21\u6570\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsxs)(e.strong,{children:[(0,c.jsx)(e.code,{children:"-i"})," \u6216 ",(0,c.jsx)(e.code,{children:"--interval"})]}),"\uff1a\u6307\u5b9a\u53d1\u9001 ICMP \u56de\u663e\u8bf7\u6c42\u7684\u65f6\u95f4\u95f4\u9694\uff08\u79d2\uff09\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsxs)(e.strong,{children:[(0,c.jsx)(e.code,{children:"-t"})," \u6216 ",(0,c.jsx)(e.code,{children:"--ttl"})]}),"\uff1a\u8bbe\u7f6e IP \u5305\u7684 TTL\uff08\u751f\u5b58\u65f6\u95f4\uff09\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsxs)(e.strong,{children:[(0,c.jsx)(e.code,{children:"-s"})," \u6216 ",(0,c.jsx)(e.code,{children:"--size"})]}),"\uff1a\u6307\u5b9a ICMP \u56de\u663e\u8bf7\u6c42\u7684\u6570\u636e\u5305\u5927\u5c0f\uff08\u5b57\u8282\uff09\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsxs)(e.strong,{children:[(0,c.jsx)(e.code,{children:"-h"})," \u6216 ",(0,c.jsx)(e.code,{children:"--help"})]}),"\uff1a\u663e\u793a\u5e2e\u52a9\u4fe1\u606f\uff0c\u5e2e\u52a9\u4f60\u4e86\u89e3 ",(0,c.jsx)(e.code,{children:"ping"})," \u547d\u4ee4\u7684\u7528\u6cd5\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"\u793a\u4f8b\u6307\u5b9a\u6b21\u6570\u548c\u65f6\u95f4\u95f4\u9694\u7684-ping-\u6d4b\u8bd5",children:"\u793a\u4f8b\uff1a\u6307\u5b9a\u6b21\u6570\u548c\u65f6\u95f4\u95f4\u9694\u7684 ping \u6d4b\u8bd5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"$ ping -c 5 -i 2 baidu.com\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u8fd9\u4f1a\u5411\u767e\u5ea6\u670d\u52a1\u5668\u53d1\u9001 5 \u6b21 ICMP \u56de\u663e\u8bf7\u6c42\uff0c\u6bcf\u6b21\u95f4\u9694 2 \u79d2\u3002"}),"\n",(0,c.jsx)(e.h3,{id:"\u793a\u4f8b\u6d4b\u8bd5\u591a\u76ee\u6807",children:"\u793a\u4f8b\uff1a\u6d4b\u8bd5\u591a\u76ee\u6807"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"$ ping -c 3 -i 1 192.168.1.1 192.168.1.2 192.168.1.3\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u8fd9\u4f1a\u5411\u4e09\u4e2a\u5c40\u57df\u7f51\u5185\u7684 IP \u5730\u5740\u53d1\u9001 3 \u6b21 ICMP \u56de\u663e\u8bf7\u6c42\uff0c\u6bcf\u6b21\u95f4\u9694 1 \u79d2\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"5-\u4f7f\u7528-ping-\u65f6\u7684\u6ce8\u610f\u4e8b\u9879",children:"5. \u4f7f\u7528 ping \u65f6\u7684\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\u7f51\u7edc\u9632\u706b\u5899"}),"\uff1a\u67d0\u4e9b\u9632\u706b\u5899\u53ef\u80fd\u963b\u6b62 ICMP \u56de\u663e\u8bf7\u6c42\uff0c\u5bfc\u81f4 ",(0,c.jsx)(e.code,{children:"ping"})," \u6d4b\u8bd5\u5931\u8d25\u3002\ud83d\udd25"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\u7f51\u7edc\u5ef6\u8fdf"}),"\uff1a",(0,c.jsx)(e.code,{children:"ping"})," \u547d\u4ee4\u53ef\u4ee5\u663e\u793a\u7f51\u7edc\u5ef6\u8fdf\uff08RTT - Round-Trip Time\uff09\uff0c\u4f46\u4e0d\u4e00\u5b9a\u53cd\u6620\u5b9e\u9645\u5e94\u7528\u7684\u7f51\u7edc\u6027\u80fd\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\u76ee\u6807\u5730\u5740"}),"\uff1a\u53ef\u4ee5\u4f7f\u7528 IP \u5730\u5740\u6216\u57df\u540d\u4f5c\u4e3a\u76ee\u6807\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\u8d85\u65f6"}),"\uff1a\u5982\u679c\u6ca1\u6709\u6536\u5230\u54cd\u5e94\uff0c",(0,c.jsx)(e.code,{children:"ping"})," \u4f1a\u62a5\u544a\u8d85\u65f6\uff08timeout\uff09\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\u7f51\u7edc\u8d1f\u8f7d"}),"\uff1a\u5728\u7f51\u7edc\u8d1f\u8f7d\u9ad8\u5cf0\u65f6\uff0c",(0,c.jsx)(e.code,{children:"ping"})," \u6d4b\u8bd5\u53ef\u80fd\u4f1a\u53d7\u5230\u5f71\u54cd\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"6-\u5c0f\u8d34\u58eb",children:"6. \u5c0f\u8d34\u58eb"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsxs)(e.strong,{children:["\u4f7f\u7528 ",(0,c.jsx)(e.code,{children:"ping"})," \u6d4b\u8bd5\u7f51\u7edc\u8fde\u63a5"]}),"\uff1a\u8fd9\u662f\u5feb\u901f\u68c0\u67e5\u7f51\u7edc\u662f\u5426\u8fde\u901a\u7684\u597d\u65b9\u6cd5\u3002\ud83d\udd0d"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\u67e5\u770b\u7f51\u7edc\u7edf\u8ba1"}),"\uff1a\u5728 ",(0,c.jsx)(e.code,{children:"ping"})," \u6d4b\u8bd5\u5b8c\u6210\u540e\uff0c\u7ec8\u7aef\u4f1a\u663e\u793a\u7edf\u8ba1\u4fe1\u606f\uff0c\u5305\u62ec\u53d1\u9001\u548c\u63a5\u6536\u7684\u6570\u636e\u5305\u6570\u3001\u4e22\u5305\u7387\u3001\u5e73\u5747\u5ef6\u8fdf\u7b49\uff1a"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"$ ping -c 5 baidu.com\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"PING baidu.com (180.97.33.107) 56(84) bytes of data.\r\n64 bytes from 180.97.33.107 (180.97.33.107): icmp_seq=1 ttl=54 time=30.3 ms\r\n...\r\n--- baidu.com ping statistics ---\r\n5 packets transmitted, 5 received, 0% packet loss, time 4004ms\r\nrtt min/avg/max/mdev = 30.331/30.433/30.515/0.078 ms\n"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\u6d4b\u8bd5 DNS \u89e3\u6790"}),"\uff1a",(0,c.jsx)(e.code,{children:"ping"})," \u53ef\u4ee5\u7528\u6765\u6d4b\u8bd5 DNS \u89e3\u6790\u662f\u5426\u6b63\u5e38\uff0c\u67e5\u770b\u89e3\u6790\u5f97\u5230\u7684 IP \u5730\u5740\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\u6307\u5b9a\u5305\u5927\u5c0f"}),"\uff1a\u4f7f\u7528 ",(0,c.jsx)(e.code,{children:"-s"})," \u9009\u9879\u53ef\u4ee5\u53d1\u9001\u4e0d\u540c\u5927\u5c0f\u7684\u6570\u636e\u5305\uff0c\u6d4b\u8bd5\u7f51\u7edc\u5bf9\u4e0d\u540c\u5927\u5c0f\u6570\u636e\u5305\u7684\u5904\u7406\u80fd\u529b\uff1a"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"$ ping -c 5 -s 1000 baidu.com\n"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\u67e5\u770b TTL"}),"\uff1aTTL\uff08\u751f\u5b58\u65f6\u95f4\uff09\u53ef\u4ee5\u53cd\u6620\u7f51\u7edc\u8def\u5f84\u4e2d\u7684\u8df3\u6570\uff0c\u8f83\u4f4e\u7684 TTL \u503c\u53ef\u80fd\u8868\u660e\u7f51\u7edc\u8def\u5f84\u8f83\u957f\uff1a"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"$ ping -c 5 -t 64 baidu.com\n"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\u8bb0\u5f55\u8def\u7531"}),"\uff1a\u4f7f\u7528 ",(0,c.jsx)(e.code,{children:"traceroute"})," \u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u4ece\u672c\u5730\u5230\u76ee\u6807\u7684\u7f51\u7edc\u8def\u5f84\uff1a"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"$ traceroute baidu.com\n"})}),"\n",(0,c.jsx)(e.h2,{id:"7-\u603b\u7ed3",children:"7. \u603b\u7ed3"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"ping"})," \u547d\u4ee4\u662f Linux \u7cfb\u7edf\u4e2d\u7528\u4e8e\u6d4b\u8bd5\u7f51\u7edc\u8fde\u901a\u6027\u7684\u57fa\u672c\u5de5\u5177\u3002\u5b83\u901a\u8fc7\u53d1\u9001 ICMP \u56de\u663e\u8bf7\u6c42\u5e76\u7b49\u5f85\u54cd\u5e94\u6765\u68c0\u6d4b\u7f51\u7edc\u662f\u5426\u8fde\u901a\uff0c\u662f\u7f51\u7edc\u8bca\u65ad\u548c\u6545\u969c\u6392\u9664\u7684\u9996\u9009\u65b9\u6cd5\u3002\u65e0\u8bba\u662f\u6d4b\u8bd5\u672c\u5730\u7f51\u7edc\u8fd8\u662f\u8fdc\u7a0b\u670d\u52a1\u5668\uff0c",(0,c.jsx)(e.code,{children:"ping"})," \u90fd\u80fd\u5e2e\u4f60\u5feb\u901f\u5b9e\u73b0\u3002\ud83c\udfaf"]}),"\n",(0,c.jsxs)(e.p,{children:["\u638c\u63e1\u4e86 ",(0,c.jsx)(e.code,{children:"ping"}),"\uff0c\u4f60\u5c31\u50cf\u4e00\u4e2a\u7f51\u7edc\u63a2\u6d4b\u5458\uff0c\u53ef\u4ee5\u968f\u65f6\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5\u72b6\u6001\uff0c\u786e\u4fdd\u7f51\u7edc\u7684\u7a33\u5b9a\u548c\u8fde\u901a\u6027\u3002\ud83d\udd12"]}),"\n",(0,c.jsx)(e.hr,{}),"\n",(0,c.jsxs)(e.p,{children:["\u52a0\u6cb9\uff0c\u7ee7\u7eed\u5728\u547d\u4ee4\u884c\u4e2d\u63a2\u7d22\u65b0\u6280\u80fd\uff01\ud83d\udcaa\ud83c\udffb \u522b\u5fd8\u4e86\u6536\u85cf\u5728\u7ebf\u77e5\u8bc6\u5e93\uff08",(0,c.jsx)(e.a,{href:"http://www.zxzsk.com",children:"www.zxzsk.com"}),"\uff09\uff0c\u8ba9\u66f4\u591a\u6709\u7528\u7684\u77e5\u8bc6\u4e3a\u4f60\u63d0\u4f9b\u5e2e\u52a9\uff01\ud83d\ude0a"]}),"\n",(0,c.jsx)(e.p,{children:"\u7ee7\u7eed\u63a2\u7d22\uff0c\u4f60\u5df2\u7ecf\u5f88\u68d2\u5566\uff01\ud83c\udf1f"})]})}function o(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(x,{...n})}):x(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>r});var s=i(6540);const c={},d=s.createContext(c);function l(n){const e=s.useContext(d);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:l(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);