"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8455],{4301:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"command/\u7f51\u7edc/telnet","title":"telnet","description":"\u2b50\u7f51\u7edc\u6d4b\u8bd5\u3001\u7f51\u7edc\u8fde\u63a5","source":"@site/docs/02-command/50-\u7f51\u7edc/telnet.md","sourceDirName":"02-command/50-\u7f51\u7edc","slug":"/1b4f963f","permalink":"/1b4f963f","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/02-command/50-\u7f51\u7edc/telnet.md","tags":[],"version":"current","frontMatter":{"slug":"/1b4f963f"},"sidebar":"tutorialSidebar","previous":{"title":"ssh","permalink":"/c62ea92b"},"next":{"title":"traceroute","permalink":"/2457e6f5"}}');var s=l(4848),c=l(8453);const d={slug:"/1b4f963f"},r=void 0,i={},o=[{value:"1. telnet \u547d\u4ee4\u7b80\u4ecb \ud83c\udf10",id:"1-telnet-\u547d\u4ee4\u7b80\u4ecb-",level:2},{value:"2. \u57fa\u672c\u7528\u6cd5 \ud83d\ude80",id:"2-\u57fa\u672c\u7528\u6cd5-",level:2},{value:"2.1 \u8fde\u63a5\u5230\u8fdc\u7a0b\u4e3b\u673a",id:"21-\u8fde\u63a5\u5230\u8fdc\u7a0b\u4e3b\u673a",level:3},{value:"2.2 \u9000\u51fa telnet \u4f1a\u8bdd",id:"22-\u9000\u51fa-telnet-\u4f1a\u8bdd",level:3},{value:"3. \u5b9e\u9645\u7528\u9014 \ud83c\udf1f",id:"3-\u5b9e\u9645\u7528\u9014-",level:2},{value:"3.1 \u68c0\u67e5\u7aef\u53e3\u662f\u5426\u5f00\u653e \ud83d\udd13",id:"31-\u68c0\u67e5\u7aef\u53e3\u662f\u5426\u5f00\u653e-",level:3},{value:"3.2 \u8c03\u8bd5 SMTP\uff08\u90ae\u4ef6\u534f\u8bae\uff09\u7aef\u53e3 \ud83d\udce7",id:"32-\u8c03\u8bd5-smtp\u90ae\u4ef6\u534f\u8bae\u7aef\u53e3-",level:3},{value:"4. \u6ce8\u610f\u4e8b\u9879 \u26a0\ufe0f",id:"4-\u6ce8\u610f\u4e8b\u9879-\ufe0f",level:2},{value:"5. \u603b\u7ed3 \u2728",id:"5-\u603b\u7ed3-",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u2b50\u7f51\u7edc\u6d4b\u8bd5\u3001\u7f51\u7edc\u8fde\u63a5"}),"\n",(0,s.jsx)(n.h2,{id:"1-telnet-\u547d\u4ee4\u7b80\u4ecb-",children:"1. telnet \u547d\u4ee4\u7b80\u4ecb \ud83c\udf10"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"telnet"})," \u662f\u4e00\u4e2a\u7528\u4e8e\u901a\u8fc7 TCP/IP \u7f51\u7edc\u8fde\u63a5\u8fdc\u7a0b\u4e3b\u673a\u7684\u547d\u4ee4\u884c\u5de5\u5177\u3002\u5b83\u901a\u5e38\u7528\u4e8e\u6d4b\u8bd5\u548c\u6392\u67e5\u7f51\u7edc\u95ee\u9898\uff0c\u5c3d\u7ba1\u73b0\u5728\u5f88\u591a\u7cfb\u7edf\u63a8\u8350\u4f7f\u7528\u66f4\u5b89\u5168\u7684 ",(0,s.jsx)(n.code,{children:"ssh"})," \u6765\u8fdb\u884c\u8fdc\u7a0b\u767b\u5f55\u3002",(0,s.jsx)(n.code,{children:"telnet"})," \u5e38\u7528\u4e8e\u4e0e\u8fdc\u7a0b\u670d\u52a1\u5668\u8fdb\u884c\u8c03\u8bd5\u548c\u68c0\u67e5\u7aef\u53e3\u5f00\u653e\u60c5\u51b5\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"2-\u57fa\u672c\u7528\u6cd5-",children:"2. \u57fa\u672c\u7528\u6cd5 \ud83d\ude80"}),"\n",(0,s.jsx)(n.h3,{id:"21-\u8fde\u63a5\u5230\u8fdc\u7a0b\u4e3b\u673a",children:"2.1 \u8fde\u63a5\u5230\u8fdc\u7a0b\u4e3b\u673a"}),"\n",(0,s.jsx)(n.p,{children:"\u8981\u8fde\u63a5\u5230\u8fdc\u7a0b\u4e3b\u673a\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ telnet <hostname> <port>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u8fde\u63a5\u5230 ",(0,s.jsx)(n.code,{children:"example.com"})," \u7684 HTTP \u7aef\u53e3\uff0880\uff09\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ telnet example.com 80\n"})}),"\n",(0,s.jsx)(n.h3,{id:"22-\u9000\u51fa-telnet-\u4f1a\u8bdd",children:"2.2 \u9000\u51fa telnet \u4f1a\u8bdd"}),"\n",(0,s.jsxs)(n.p,{children:["\u9000\u51fa ",(0,s.jsx)(n.code,{children:"telnet"})," \u4f1a\u8bdd\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Ctrl + ]  # \u8fdb\u5165 telnet \u547d\u4ee4\u884c\u6a21\u5f0f\nquit      # \u9000\u51fa telnet \u4f1a\u8bdd\n"})}),"\n",(0,s.jsx)(n.h2,{id:"3-\u5b9e\u9645\u7528\u9014-",children:"3. \u5b9e\u9645\u7528\u9014 \ud83c\udf1f"}),"\n",(0,s.jsx)(n.h3,{id:"31-\u68c0\u67e5\u7aef\u53e3\u662f\u5426\u5f00\u653e-",children:"3.1 \u68c0\u67e5\u7aef\u53e3\u662f\u5426\u5f00\u653e \ud83d\udd13"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"telnet"})," \u662f\u4e00\u4e2a\u975e\u5e38\u5b9e\u7528\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u5e2e\u52a9\u4f60\u6d4b\u8bd5\u670d\u52a1\u5668\u7684\u7279\u5b9a\u7aef\u53e3\u662f\u5426\u5f00\u653e\u3002\u6bd4\u5982\u4f60\u60f3\u6d4b\u8bd5 Web \u670d\u52a1\u5668\u7684\u7aef\u53e3 80 \u662f\u5426\u5f00\u653e\uff0c\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ telnet example.com 80\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u7aef\u53e3\u5f00\u653e\uff0c\u4f60\u4f1a\u770b\u5230\u7c7b\u4f3c\u4e0b\u9762\u7684\u4fe1\u606f\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Trying 93.184.216.34...\nConnected to example.com.\nEscape character is '^]'.\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u7aef\u53e3\u6ca1\u6709\u5f00\u653e\uff0c\u53ef\u80fd\u4f1a\u770b\u5230 ",(0,s.jsx)(n.code,{children:"Connection refused"})," \u9519\u8bef\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"32-\u8c03\u8bd5-smtp\u90ae\u4ef6\u534f\u8bae\u7aef\u53e3-",children:"3.2 \u8c03\u8bd5 SMTP\uff08\u90ae\u4ef6\u534f\u8bae\uff09\u7aef\u53e3 \ud83d\udce7"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"telnet"})," \u6765\u8fde\u63a5\u5230\u90ae\u4ef6\u670d\u52a1\u5668\uff0c\u8c03\u8bd5 SMTP \u670d\u52a1\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ telnet smtp.example.com 25\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u6837\u53ef\u4ee5\u624b\u52a8\u8fdb\u884c SMTP \u547d\u4ee4\u4ea4\u4e92\uff0c\u7528\u4e8e\u90ae\u4ef6\u670d\u52a1\u5668\u8bca\u65ad\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"4-\u6ce8\u610f\u4e8b\u9879-\ufe0f",children:"4. \u6ce8\u610f\u4e8b\u9879 \u26a0\ufe0f"}),"\n",(0,s.jsxs)(n.p,{children:["\u867d\u7136 ",(0,s.jsx)(n.code,{children:"telnet"})," \u5f88\u65b9\u4fbf\uff0c\u4f46\u5b83\u7684\u901a\u4fe1\u662f\u4e0d\u52a0\u5bc6\u7684\uff0c\u4efb\u4f55\u5728\u7f51\u7edc\u4e2d\u4f20\u8f93\u7684\u6570\u636e\u90fd\u53ef\u4ee5\u88ab\u622a\u83b7\u3002\u4e3a\u4e86\u66f4\u5b89\u5168\u7684\u8fdc\u7a0b\u767b\u5f55\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"ssh"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"5-\u603b\u7ed3-",children:"5. \u603b\u7ed3 \u2728"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"telnet"})," \u662f\u4e00\u4e2a\u7b80\u5355\u4f46\u5f3a\u5927\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u7279\u522b\u9002\u5408\u7f51\u7edc\u8c03\u8bd5\u548c\u7aef\u53e3\u68c0\u67e5\u3002\u867d\u7136\u5b83\u5df2\u7ecf\u9010\u6e10\u88ab\u66f4\u5b89\u5168\u7684\u5de5\u5177\u53d6\u4ee3\uff0c\u4f46\u5728\u6392\u67e5\u7f51\u7edc\u95ee\u9898\u65f6\uff0c",(0,s.jsx)(n.code,{children:"telnet"})," \u4f9d\u7136\u975e\u5e38\u6709\u7528\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u522b\u5fd8\u4e86\u8bbf\u95ee\u6211\u4eec\u7684\u5728\u7ebf\u77e5\u8bc6\u5e93 ",(0,s.jsx)(n.a,{href:"http://www.zxzsk.com",children:"www.zxzsk.com"}),"\uff0c\u5b66\u4e60\u66f4\u591a\u5b9e\u7528\u7684 Linux \u6280\u5de7\uff01\ud83d\udcda"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>d,x:()=>r});var t=l(6540);const s={},c=t.createContext(s);function d(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);