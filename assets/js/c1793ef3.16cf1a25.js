"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4454],{967:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"\u7f51\u7edc/traceroute","title":"traceroute","description":"\u2b50\u8def\u7531\u8ffd\u8e2a","source":"@site/docs/50-\u7f51\u7edc/traceroute.md","sourceDirName":"50-\u7f51\u7edc","slug":"/2457e6f5","permalink":"/2457e6f5","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/50-\u7f51\u7edc/traceroute.md","tags":[],"version":"current","lastUpdatedAt":1742246204000,"frontMatter":{"slug":"/2457e6f5"},"sidebar":"\u7f51\u7edc","previous":{"title":"telnet","permalink":"/1b4f963f"},"next":{"title":"wget","permalink":"/1a9db24d"}}');var c=s(4848),l=s(8453);const i={slug:"/2457e6f5"},t=void 0,d={},o=[{value:"1. <strong>\u5b89\u88c5 <code>traceroute</code></strong> \ud83d\udee0\ufe0f",id:"1-\u5b89\u88c5-traceroute-\ufe0f",level:2},{value:"\u5728 Ubuntu/Debian \u4e0a\u5b89\u88c5",id:"\u5728-ubuntudebian-\u4e0a\u5b89\u88c5",level:3},{value:"\u5728 CentOS/RHEL \u4e0a\u5b89\u88c5",id:"\u5728-centosrhel-\u4e0a\u5b89\u88c5",level:3},{value:"2. <strong>\u57fa\u672c\u7528\u6cd5</strong> \ud83d\udce1",id:"2-\u57fa\u672c\u7528\u6cd5-",level:2},{value:"1. \u8ffd\u8e2a\u76ee\u6807\u4e3b\u673a",id:"1-\u8ffd\u8e2a\u76ee\u6807\u4e3b\u673a",level:3},{value:"\u6bcf\u4e00\u884c\u7684\u5185\u5bb9\u89e3\u6790\uff1a",id:"\u6bcf\u4e00\u884c\u7684\u5185\u5bb9\u89e3\u6790",level:4},{value:"2. \u8ffd\u8e2a\u76ee\u6807IP",id:"2-\u8ffd\u8e2a\u76ee\u6807ip",level:3},{value:"3. <strong>\u5e38\u7528\u9009\u9879</strong> \ud83e\uddd1\u200d\ud83d\udcbb",id:"3-\u5e38\u7528\u9009\u9879-",level:2},{value:"1. \u8bbe\u7f6e\u6700\u5927\u8df3\u6570",id:"1-\u8bbe\u7f6e\u6700\u5927\u8df3\u6570",level:3},{value:"2. \u6539\u53d8\u8d85\u65f6\u8bbe\u7f6e",id:"2-\u6539\u53d8\u8d85\u65f6\u8bbe\u7f6e",level:3},{value:"3. \u4f7f\u7528ICMP\u534f\u8bae",id:"3-\u4f7f\u7528icmp\u534f\u8bae",level:3},{value:"4. \u63a7\u5236\u67e5\u8be2\u6b21\u6570",id:"4-\u63a7\u5236\u67e5\u8be2\u6b21\u6570",level:3},{value:"4. <strong>\u5de5\u4f5c\u539f\u7406</strong> \ud83e\uddd0",id:"4-\u5de5\u4f5c\u539f\u7406-",level:2},{value:"5. <strong><code>traceroute</code> \u547d\u4ee4\u5931\u6548\u7684\u60c5\u51b5</strong> \ud83d\udca1",id:"5-traceroute-\u547d\u4ee4\u5931\u6548\u7684\u60c5\u51b5-",level:2}];function a(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"\u2b50\u8def\u7531\u8ffd\u8e2a"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"traceroute"})," \u7528\u4e8e\u663e\u793a\u6570\u636e\u5305\u4ece\u672c\u5730\u8ba1\u7b97\u673a\u5230\u76ee\u6807\u4e3b\u673a\u7684\u8def\u5f84\uff0c\u5e76\u5e2e\u52a9\u5206\u6790\u7f51\u7edc\u4e2d\u7684\u5ef6\u8fdf\u548c\u8df3\u6570\u3002\u5b83\u662f\u7f51\u7edc\u6545\u969c\u6392\u67e5\u7684\u91cd\u8981\u5de5\u5177\u4e4b\u4e00\u3002"]}),"\n",(0,c.jsxs)(n.h2,{id:"1-\u5b89\u88c5-traceroute-\ufe0f",children:["1. ",(0,c.jsxs)(n.strong,{children:["\u5b89\u88c5 ",(0,c.jsx)(n.code,{children:"traceroute"})]})," \ud83d\udee0\ufe0f"]}),"\n",(0,c.jsx)(n.h3,{id:"\u5728-ubuntudebian-\u4e0a\u5b89\u88c5",children:"\u5728 Ubuntu/Debian \u4e0a\u5b89\u88c5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"sudo apt install traceroute\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u5728-centosrhel-\u4e0a\u5b89\u88c5",children:"\u5728 CentOS/RHEL \u4e0a\u5b89\u88c5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"sudo yum install traceroute\n"})}),"\n",(0,c.jsxs)(n.h2,{id:"2-\u57fa\u672c\u7528\u6cd5-",children:["2. ",(0,c.jsx)(n.strong,{children:"\u57fa\u672c\u7528\u6cd5"})," \ud83d\udce1"]}),"\n",(0,c.jsx)(n.h3,{id:"1-\u8ffd\u8e2a\u76ee\u6807\u4e3b\u673a",children:"1. \u8ffd\u8e2a\u76ee\u6807\u4e3b\u673a"}),"\n",(0,c.jsx)(n.p,{children:"\u663e\u793a\u4ece\u672c\u5730\u8ba1\u7b97\u673a\u5230\u76ee\u6807\u4e3b\u673a\u7684\u8def\u5f84\u548c\u5ef6\u8fdf\ud83c\udf0d:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ traceroute www.zxzsk.com\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u793a\u4f8b\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"traceroute to www.zxzsk.com (172.67.177.192), 64 hops max\n  1   192.168.10.1  0.399ms  0.357ms  0.341ms \n  2   192.168.1.1  1.210ms  0.978ms  0.806ms \n  3   100.104.0.1  3.096ms  2.310ms  2.419ms \n  4   112.45.104.117  4.104ms  3.377ms  3.477ms \n  5   223.86.15.73  5.258ms  4.848ms  4.748ms \n  6   221.183.47.113  3.879ms  3.250ms  3.180ms \n  7   221.183.41.45  35.971ms  35.473ms  35.500ms \n  8   221.183.167.26  43.663ms  43.071ms  42.884ms \n  9   221.183.92.206  46.726ms  46.147ms  46.236ms \n 10   221.183.89.173  58.786ms  58.142ms  58.186ms \n 11   223.120.17.9  193.167ms  192.708ms  192.702ms \n 12   223.120.6.218  184.744ms  184.082ms  184.220ms \n 13   *  223.119.64.110  196.363ms  202.144ms \n 14   172.68.188.94  201.198ms  192.829ms  181.756ms \n 15   172.67.177.192  190.035ms  *  189.527ms\n"})}),"\n",(0,c.jsx)(n.h4,{id:"\u6bcf\u4e00\u884c\u7684\u5185\u5bb9\u89e3\u6790",children:"\u6bcf\u4e00\u884c\u7684\u5185\u5bb9\u89e3\u6790\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u8df3\u6570\uff08Hop Number\uff09\uff1a \u6bcf\u4e00\u884c\u7684\u5f00\u5934\u662f\u8df3\u6570\uff08\u4f8b\u5982\uff0c\u7b2c1\u8df3\u3001\u7b2c2\u8df3\u7b49\uff09\u3002\u8fd9\u662f\u6570\u636e\u5305\u7ecf\u8fc7\u7684\u8def\u7531\u5668\u6570\u91cf\uff0c\u8868\u793a\u6570\u636e\u5305\u4ece\u6e90\u4e3b\u673a\u5230\u76ee\u6807\u4e3b\u673a\u7684\u7ecf\u8fc7\u8282\u70b9\u6570\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u8def\u7531\u5668\u7684IP\u5730\u5740\u6216\u57df\u540d\uff1a \u6bcf\u4e2a\u8def\u7531\u5668\u7684IP\u5730\u5740\uff08\u4f8b\u5982 192.168.1.1\uff09\u4f1a\u663e\u793a\u5728\u62ec\u53f7\u4e2d\u3002\u5982\u679c\u542f\u7528\u4e86 -n \u9009\u9879\uff0c\u7ed3\u679c\u4f1a\u4ec5\u663e\u793aIP\u5730\u5740\u3002\u5982\u679c\u6ca1\u6709\u542f\u7528 -n\uff0c\u5219\u53ef\u80fd\u663e\u793a\u57df\u540d\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u5ef6\u8fdf\uff08Latency\uff09\uff1a \u6bcf\u4e2a\u8df3\u6570\u540e\u9762\u4f1a\u663e\u793a\u4e09\u4e2a\u5ef6\u8fdf\u503c\uff08\u5355\u4f4d\uff1a\u6beb\u79d2ms\uff09\uff0c\u6bcf\u4e2a\u503c\u5bf9\u5e94\u4e00\u6b21\u63a2\u6d4b\u5305\u7684\u54cd\u5e94\u65f6\u95f4\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u661f\u53f7\uff08*\uff09\uff1a \u5982\u679c\u67d0\u4e00\u8df3\u7684\u63a2\u6d4b\u5305\u6ca1\u6709\u5f97\u5230\u54cd\u5e94\uff0c\u8f93\u51fa\u4f1a\u663e\u793a *\uff0c\u8868\u793a\u8d85\u65f6\u6216\u672a\u54cd\u5e94\u3002\u8fd9\u53ef\u80fd\u662f\u56e0\u4e3a\u8be5\u8def\u7531\u5668\u6216\u9632\u706b\u5899\u8bbe\u7f6e\u4e86\u4e0d\u56de\u5e94 traceroute \u8bf7\u6c42\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"2-\u8ffd\u8e2a\u76ee\u6807ip",children:"2. \u8ffd\u8e2a\u76ee\u6807IP"}),"\n",(0,c.jsx)(n.p,{children:"\u76f4\u63a5\u4f7f\u7528IP\u5730\u5740\u4e5f\u662f\u53ef\u4ee5\u7684\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ traceroute 172.67.177.192 \n"})}),"\n",(0,c.jsx)(n.p,{children:"\u793a\u4f8b\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"traceroute to 172.67.177.192 (172.67.177.192), 64 hops max\n  1   192.168.10.1  0.486ms  0.433ms  0.365ms \n  2   192.168.1.1  0.962ms  0.799ms  0.899ms \n  3   100.104.0.1  3.558ms  2.445ms  2.457ms \n  4   112.45.104.117  4.102ms  3.234ms  8.281ms \n  5   *  *  * \n  6   221.183.47.113  5.161ms  3.613ms  3.910ms \n  7   221.183.136.249  30.773ms  30.337ms  30.518ms \n  8   221.183.167.26  42.761ms  43.356ms  42.071ms \n  9   221.183.92.206  45.714ms  45.549ms  45.419ms \n 10   221.183.92.194  44.189ms  43.363ms  43.388ms \n 11   223.120.16.241  201.334ms  200.938ms  200.907ms \n 12   223.120.6.218  190.852ms  189.978ms  190.063ms \n 13   *  *  * \n 14   141.101.72.19  197.911ms  201.960ms  197.388ms \n 15   172.67.177.192  190.903ms  190.354ms  190.454ms \n"})}),"\n",(0,c.jsxs)(n.h2,{id:"3-\u5e38\u7528\u9009\u9879-",children:["3. ",(0,c.jsx)(n.strong,{children:"\u5e38\u7528\u9009\u9879"})," \ud83e\uddd1\u200d\ud83d\udcbb"]}),"\n",(0,c.jsx)(n.h3,{id:"1-\u8bbe\u7f6e\u6700\u5927\u8df3\u6570",children:"1. \u8bbe\u7f6e\u6700\u5927\u8df3\u6570"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ traceroute -m 20 www.zxzsk.com\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-m"})," \u8bbe\u7f6e\u6700\u5927\u8df3\u6570\uff0c\u907f\u514d\u67e5\u8be2\u8fc7\u591a\u8df3\u6570\u5bfc\u81f4\u8f93\u51fa\u5197\u957f\uff0c\u5feb\u901f\u5b9a\u4f4d\u95ee\u9898\uff01\u23f1\ufe0f"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"2-\u6539\u53d8\u8d85\u65f6\u8bbe\u7f6e",children:"2. \u6539\u53d8\u8d85\u65f6\u8bbe\u7f6e"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ traceroute -w 2 www.zxzsk.com\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-w"})," \u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\uff08\u9ed8\u8ba4\u4e3a5\u79d2\uff09\u3002\u23f3"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"3-\u4f7f\u7528icmp\u534f\u8bae",children:"3. \u4f7f\u7528ICMP\u534f\u8bae"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ traceroute -I www.zxzsk.com\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-I"})," \u4f7f\u7528ICMP\u534f\u8bae\uff0c\u7c7b\u4f3c\u4e8eping\u547d\u4ee4\uff0c\u9002\u7528\u4e8e\u9632\u706b\u5899\u8fc7\u6ee4\u60c5\u51b5\uff01\ud83d\udd10"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"4-\u63a7\u5236\u67e5\u8be2\u6b21\u6570",children:"4. \u63a7\u5236\u67e5\u8be2\u6b21\u6570"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ traceroute -q 1 www.zxzsk.com\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-q"})," \u8bbe\u7f6e\u6bcf\u8df3\u67e5\u8be2\u6b21\u6570\uff0c\u9ed8\u8ba4\u4e3a3\u6b21\uff0c\u51cf\u5c11\u6b21\u6570\u63d0\u9ad8\u901f\u5ea6\uff01\u26a1"]}),"\n"]}),"\n",(0,c.jsxs)(n.h2,{id:"4-\u5de5\u4f5c\u539f\u7406-",children:["4. ",(0,c.jsx)(n.strong,{children:"\u5de5\u4f5c\u539f\u7406"})," \ud83e\uddd0"]}),"\n",(0,c.jsx)(n.p,{children:"traceroute \u547d\u4ee4\u901a\u8fc7\u9010\u8df3\u63a2\u6d4b\u7684\u65b9\u5f0f\u8ffd\u8e2a\u6570\u636e\u5305\u4ece\u6e90\u4e3b\u673a\u5230\u76ee\u6807\u4e3b\u673a\u7684\u8def\u5f84\uff0c\u5b83\u5229\u7528\u4e86**TTL\uff08\u751f\u5b58\u65f6\u95f4\uff09\u548cICMP\uff08Internet Control Message Protocol\uff09**\u6765\u9010\u6b65\u663e\u793a\u8def\u7531\u8def\u5f84\u3002"}),"\n",(0,c.jsxs)(s,{children:[(0,c.jsx)("summary",{children:"TTL"}),(0,c.jsxs)("p",{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"TTL\uff08Time To Live\uff09\u7684\u4f5c\u7528\u548c\u539f\u7406\u6982\u62ec"}),"\uff1a"]}),(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u4f5c\u7528"}),"\uff1aTTL \u7528\u4e8e\u9650\u5236\u6570\u636e\u5305\u5728\u7f51\u7edc\u4e2d\u7684\u751f\u5b58\u5468\u671f\uff0c\u9632\u6b62\u6570\u636e\u5305\u5728\u7f51\u7edc\u4e2d\u65e0\u9650\u5faa\u73af\uff0c\u4ece\u800c\u907f\u514d\u7f51\u7edc\u62e5\u585e\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u539f\u7406"}),"\uff1a"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u6bcf\u4e2a\u6570\u636e\u5305\u5728\u53d1\u9001\u65f6\u4f1a\u88ab\u8d4b\u4e88\u4e00\u4e2a TTL \u503c\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u6bcf\u7ecf\u8fc7\u4e00\u4e2a\u8def\u7531\u5668\u6216\u7f51\u7edc\u8bbe\u5907\uff0cTTL \u503c\u51cf 1\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u5f53 TTL \u503c\u53d8\u4e3a 0 \u65f6\uff0c\u6570\u636e\u5305\u88ab\u4e22\u5f03\uff0c\u6e90\u4e3b\u673a\u4f1a\u6536\u5230\u4e00\u4e2a ICMP \u8d85\u65f6\u6d88\u606f\uff0c\u901a\u77e5\u6570\u636e\u5305\u5df2\u88ab\u4e22\u5f03\u3002"}),"\n"]}),"\n"]}),(0,c.jsx)(n.p,{children:"TTL \u673a\u5236\u5e2e\u52a9\u7f51\u7edc\u8bbe\u5907\u7ba1\u7406\u6570\u636e\u5305\u6d41\u52a8\uff0c\u786e\u4fdd\u7f51\u7edc\u7684\u7a33\u5b9a\u6027\u548c\u6027\u80fd\uff0c\u540c\u65f6\u4e3a\u7f51\u7edc\u8bca\u65ad\u5de5\u5177\u63d0\u4f9b\u57fa\u7840\u3002"})]})]}),"\n",(0,c.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant Src as \u6e90\u4e3b\u673a (TTL=1)\n    participant R1 as \u8def\u7531\u5668A (TTL=0)\n    participant R2 as \u8def\u7531\u5668B (TTL=0)\n    participant R3 as \u8def\u7531\u5668C (TTL=0)\n    participant Dest as \u76ee\u6807\u4e3b\u673a (TTL=0)\n    \n    Src->>R1: TTL=1 (\u5ef6\u65f6 3ms)\n    R1--\x3e>Src: ICMP \u8d85\u65f6 (1st \u8df3) \u5ef6\u65f6 3ms\n\n    Src->>R1: TTL=2 (\u5ef6\u65f6 5ms)\n    R1->>R2: TTL=1 (\u5ef6\u65f6 2ms)\n    R2--\x3e>Src: ICMP \u8d85\u65f6 (2nd \u8df3) \u5ef6\u65f6 7ms\n\n    Src->>R1: TTL=3 (\u5ef6\u65f6 4ms)\n    R1->>R2: TTL=2 (\u5ef6\u65f6 6ms)\n    R2->>R3: TTL=1 (\u5ef6\u65f6 8ms)\n    R3--\x3e>Src: ICMP \u8d85\u65f6 (3rd \u8df3) \u5ef6\u65f6 18ms\n\n    Src->>R1: TTL=4 (\u5ef6\u65f6 2ms)\n    R1->>R2: TTL=3 (\u5ef6\u65f6 4ms)\n    R2->>R3: TTL=2 (\u5ef6\u65f6 3ms)\n    R3->>Dest: TTL=1 (\u5ef6\u65f6 5ms)\n    Dest--\x3e>Src: ICMP \u7aef\u53e3\u4e0d\u53ef\u8fbe (\u76ee\u6807) \u5ef6\u65f6 14ms"}),"\n",(0,c.jsxs)(n.h2,{id:"5-traceroute-\u547d\u4ee4\u5931\u6548\u7684\u60c5\u51b5-",children:["5. ",(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:"traceroute"})," \u547d\u4ee4\u5931\u6548\u7684\u60c5\u51b5"]})," \ud83d\udca1"]}),"\n",(0,c.jsx)(n.p,{children:"traceroute \u547d\u4ee4\u5728\u4ee5\u4e0b\u51e0\u79cd\u60c5\u51b5\u4e0b\u53ef\u80fd\u5931\u6548\u6216\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u9632\u706b\u5899\u963b\u6b62\uff1a","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u5982\u679c\u76ee\u6807\u7f51\u7edc\u6216\u4e2d\u95f4\u8282\u70b9\u7684\u9632\u706b\u5899\u914d\u7f6e\u963b\u6b62\u4e86 ICMP \u6216 UDP \u6570\u636e\u5305\uff0ctraceroute \u53ef\u80fd\u65e0\u6cd5\u83b7\u5f97\u54cd\u5e94\u6216\u8def\u5f84\u4fe1\u606f\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u5982\u679c\u76ee\u6807\u4e3b\u673a\u4e0d\u54cd\u5e94 ICMP \u6216 UDP \u8bf7\u6c42\uff0ctraceroute \u5c06\u663e\u793a\u8d85\u65f6\uff08timeout\uff09\u4fe1\u606f\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.li,{children:"\u7f51\u7edc\u8bbe\u5907\u4e0d\u54cd\u5e94\uff1a\u67d0\u4e9b\u7f51\u7edc\u8bbe\u5907\u53ef\u80fd\u914d\u7f6e\u4e3a\u4e0d\u54cd\u5e94 traceroute \u8bf7\u6c42\uff0c\u5bfc\u81f4\u8def\u5f84\u4fe1\u606f\u4e0d\u5b8c\u6574\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u7f51\u7edc\u5206\u6bb5\uff1a\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u7f51\u7edc\u8def\u5f84\u53ef\u80fd\u7ecf\u8fc7\u591a\u4e2a\u7f51\u7edc\u5206\u6bb5\uff0c\u5bfc\u81f4 traceroute \u65e0\u6cd5\u8ddf\u8e2a\u6574\u4e2a\u8def\u5f84\u3002"}),"\n",(0,c.jsx)(n.li,{children:"TTL \u8d85\u65f6\uff1a\u5982\u679c\u7f51\u7edc\u8def\u5f84\u975e\u5e38\u957f\uff0c\u8d85\u8fc7\u4e86 traceroute \u547d\u4ee4\u7684\u6700\u5927\u8df3\u6570\u9650\u5236\uff08\u9ed8\u8ba4 30\uff09\uff0c\u5219\u53ef\u80fd\u65e0\u6cd5\u5230\u8fbe\u76ee\u6807\u4e3b\u673a\u3002"}),"\n",(0,c.jsx)(n.li,{children:"VPN \u6216\u4ee3\u7406\uff1a\u901a\u8fc7 VPN \u6216\u4ee3\u7406\u670d\u52a1\u5668\u8fdb\u884c\u8fde\u63a5\u65f6\uff0ctraceroute \u53ef\u80fd\u53ea\u663e\u793a\u5230 VPN \u670d\u52a1\u5668\u6216\u4ee3\u7406\u670d\u52a1\u5668\u7684\u8def\u5f84\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u7f51\u7edc\u62e5\u585e\uff1a\u5728\u7f51\u7edc\u62e5\u585e\u7684\u60c5\u51b5\u4e0b\uff0ctraceroute \u8bf7\u6c42\u53ef\u80fd\u4f1a\u8d85\u65f6\uff0c\u5bfc\u81f4\u8def\u5f84\u4fe1\u606f\u4e0d\u51c6\u786e\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u7f51\u7edc\u62d3\u6251\u53d8\u5316\uff1a\u7f51\u7edc\u62d3\u6251\u7ed3\u6784\u53ef\u80fd\u968f\u65f6\u95f4\u53d8\u5316\uff0ctraceroute \u7ed3\u679c\u53ef\u80fd\u4e0d\u4e00\u81f4\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.p,{children:"\u5e0c\u671b\u8fd9\u4e2a\u66f4\u65b0\u540e\u7684\u6559\u7a0b\u80fd\u5e2e\u52a9\u4f60\u5feb\u901f\u638c\u63e1 traceroute \u547d\u4ee4\uff01\ud83c\udf89 \u4efb\u4f55\u95ee\u9898\u90fd\u53ef\u4ee5\u968f\u65f6\u95ee\u6211\u54e6\uff01\ud83d\ude0a"})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>t});var r=s(6540);const c={},l=r.createContext(c);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);