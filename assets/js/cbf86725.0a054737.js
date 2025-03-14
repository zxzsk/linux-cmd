"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4728],{4282:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>r,contentTitle:()=>d,default:()=>t,frontMatter:()=>i,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"command/\u4e0e\u7528\u6237\u76f8\u5173/chsh","title":"chsh","description":"\u2b50\u4fee\u6539\u767b\u5f55Shell","source":"@site/docs/02-command/30-\u4e0e\u7528\u6237\u76f8\u5173/chsh.md","sourceDirName":"02-command/30-\u4e0e\u7528\u6237\u76f8\u5173","slug":"/command/\u4e0e\u7528\u6237\u76f8\u5173/chsh","permalink":"/command/\u4e0e\u7528\u6237\u76f8\u5173/chsh","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/02-command/30-\u4e0e\u7528\u6237\u76f8\u5173/chsh.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"chown","permalink":"/command/\u4e0e\u7528\u6237\u76f8\u5173/chown"},"next":{"title":"groupadd","permalink":"/command/\u4e0e\u7528\u6237\u76f8\u5173/groupadd"}}');var h=n(4848),c=n(8453);const i={},d=void 0,r={},o=[{value:"1. \u4ec0\u4e48\u662f\u767b\u5f55Shell\uff1f\ud83e\udd14",id:"1-\u4ec0\u4e48\u662f\u767b\u5f55shell",level:2},{value:"2. \u5982\u4f55\u4f7f\u7528 <code>chsh</code> \u547d\u4ee4\uff1f\ud83d\udcdd",id:"2-\u5982\u4f55\u4f7f\u7528-chsh-\u547d\u4ee4",level:2},{value:"2.1 \u67e5\u770b\u5f53\u524dShell",id:"21-\u67e5\u770b\u5f53\u524dshell",level:3},{value:"2.2 \u66f4\u6539\u767b\u5f55Shell",id:"22-\u66f4\u6539\u767b\u5f55shell",level:3},{value:"2.3 \u67e5\u770b\u4fee\u6539\u7ed3\u679c",id:"23-\u67e5\u770b\u4fee\u6539\u7ed3\u679c",level:3},{value:"3. \u5e38\u7528\u9009\u9879 \ud83d\udcdd",id:"3-\u5e38\u7528\u9009\u9879-",level:2},{value:"4. \u9009\u62e9\u9002\u5408\u7684Shell \ud83d\ude0e",id:"4-\u9009\u62e9\u9002\u5408\u7684shell-",level:2},{value:"5. \u5c0f\u8d34\u58eb \ud83d\udca1",id:"5-\u5c0f\u8d34\u58eb-",level:2},{value:"6. \u603b\u7ed3 \ud83c\udfaf",id:"6-\u603b\u7ed3-",level:2}];function a(e){const l={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.p,{children:"\u2b50\u4fee\u6539\u767b\u5f55Shell"}),"\n",(0,h.jsxs)(l.p,{children:[(0,h.jsx)(l.code,{children:"chsh"})," \u547d\u4ee4\u7528\u4e8e\u66f4\u6539\u5f53\u524d\u7528\u6237\u7684\u767b\u5f55Shell\uff0c\u5b83\u53ef\u4ee5\u5e2e\u52a9\u4f60\u5207\u6362\u4e0d\u540c\u7684Shell\u73af\u5883\uff0c\u5982\u4ece\u9ed8\u8ba4\u7684 Bash \u5207\u6362\u5230 Zsh \u6216 Fish\u3002\u66f4\u6539\u767b\u5f55Shell\u540e\uff0c\u4f60\u7684\u7cfb\u7edf\u5c06\u4f7f\u7528\u65b0\u7684Shell\u6765\u6267\u884c\u547d\u4ee4\u3002\ud83c\udf89"]}),"\n",(0,h.jsx)(l.h2,{id:"1-\u4ec0\u4e48\u662f\u767b\u5f55shell",children:"1. \u4ec0\u4e48\u662f\u767b\u5f55Shell\uff1f\ud83e\udd14"}),"\n",(0,h.jsx)(l.p,{children:"\u767b\u5f55Shell\u662f\u4f60\u767b\u5f55\u5230\u7cfb\u7edf\u65f6\u6240\u4f7f\u7528\u7684Shell\u7a0b\u5e8f\uff0c\u901a\u5e38\u662f Bash\uff08Bourne Again Shell\uff09\uff0c\u4f46\u4e5f\u53ef\u4ee5\u662f\u5176\u4ed6\u7c7b\u578b\u7684Shell\uff0c\u5982 Zsh\u3001Fish\u3001Sh \u7b49\u3002"}),"\n",(0,h.jsxs)(l.h2,{id:"2-\u5982\u4f55\u4f7f\u7528-chsh-\u547d\u4ee4",children:["2. \u5982\u4f55\u4f7f\u7528 ",(0,h.jsx)(l.code,{children:"chsh"})," \u547d\u4ee4\uff1f\ud83d\udcdd"]}),"\n",(0,h.jsxs)(l.p,{children:[(0,h.jsx)(l.code,{children:"chsh"})," \u547d\u4ee4\u7684\u57fa\u672c\u8bed\u6cd5\u5982\u4e0b\uff1a"]}),"\n",(0,h.jsx)(l.pre,{children:(0,h.jsx)(l.code,{className:"language-bash",children:"chsh -s <\u65b0\u7684Shell\u8def\u5f84>\n"})}),"\n",(0,h.jsx)(l.h3,{id:"21-\u67e5\u770b\u5f53\u524dshell",children:"2.1 \u67e5\u770b\u5f53\u524dShell"}),"\n",(0,h.jsxs)(l.p,{children:["\u5728\u66f4\u6539Shell\u4e4b\u524d\uff0c\u4f60\u53ef\u80fd\u60f3\u77e5\u9053\u5f53\u524d\u4f7f\u7528\u7684\u662f\u54ea\u4e2aShell\u3002\u53ef\u4ee5\u4f7f\u7528 ",(0,h.jsx)(l.code,{children:"echo $SHELL"})," \u6765\u67e5\u770b\uff1a"]}),"\n",(0,h.jsx)(l.pre,{children:(0,h.jsx)(l.code,{className:"language-bash",children:"echo $SHELL\n"})}),"\n",(0,h.jsx)(l.p,{children:"\u793a\u4f8b\u8f93\u51fa\uff1a"}),"\n",(0,h.jsx)(l.pre,{children:(0,h.jsx)(l.code,{className:"language-bash",children:"/bin/bash\n"})}),"\n",(0,h.jsx)(l.h3,{id:"22-\u66f4\u6539\u767b\u5f55shell",children:"2.2 \u66f4\u6539\u767b\u5f55Shell"}),"\n",(0,h.jsx)(l.p,{children:"\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u60f3\u5c06\u9ed8\u8ba4\u7684 Bash \u66f4\u6539\u4e3a Zsh\uff0c\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,h.jsx)(l.pre,{children:(0,h.jsx)(l.code,{className:"language-bash",children:"chsh -s /bin/zsh\n"})}),"\n",(0,h.jsx)(l.p,{children:"\u5728\u6267\u884c\u8be5\u547d\u4ee4\u540e\uff0c\u7cfb\u7edf\u4f1a\u8981\u6c42\u4f60\u8f93\u5165\u5bc6\u7801\u4ee5\u786e\u8ba4\u66f4\u6539\u3002"}),"\n",(0,h.jsx)(l.h3,{id:"23-\u67e5\u770b\u4fee\u6539\u7ed3\u679c",children:"2.3 \u67e5\u770b\u4fee\u6539\u7ed3\u679c"}),"\n",(0,h.jsxs)(l.p,{children:["\u4fee\u6539\u6210\u529f\u540e\uff0c\u4f60\u53ef\u4ee5\u91cd\u65b0\u767b\u5f55\u5230\u7cfb\u7edf\uff0c\u4f7f\u7528 ",(0,h.jsx)(l.code,{children:"echo $SHELL"})," \u6765\u67e5\u770b\u662f\u5426\u5df2\u6210\u529f\u5207\u6362\u5230\u65b0\u7684Shell\uff1a"]}),"\n",(0,h.jsx)(l.pre,{children:(0,h.jsx)(l.code,{className:"language-bash",children:"echo $SHELL\n"})}),"\n",(0,h.jsxs)(l.p,{children:["\u5982\u679c\u663e\u793a\u7684\u662f ",(0,h.jsx)(l.code,{children:"/bin/zsh"}),"\uff0c\u90a3\u5c31\u8868\u793a\u5df2\u7ecf\u5207\u6362\u6210\u529f\u5566\uff01\u2728"]}),"\n",(0,h.jsx)(l.h2,{id:"3-\u5e38\u7528\u9009\u9879-",children:"3. \u5e38\u7528\u9009\u9879 \ud83d\udcdd"}),"\n",(0,h.jsxs)(l.ul,{children:["\n",(0,h.jsxs)(l.li,{children:[(0,h.jsx)(l.code,{children:"-s"}),"\uff1a\u6307\u5b9a\u65b0\u7684Shell\u8def\u5f84\u3002\u8fd9\u4e2a\u9009\u9879\u540e\u9762\u8981\u8ddf\u4e0aShell\u7684\u5b8c\u6574\u8def\u5f84\uff08\u4f8b\u5982 ",(0,h.jsx)(l.code,{children:"/bin/zsh"})," \u6216 ",(0,h.jsx)(l.code,{children:"/usr/bin/fish"}),"\uff09\u3002"]}),"\n",(0,h.jsxs)(l.li,{children:[(0,h.jsx)(l.code,{children:"-l"}),"\uff1a\u67e5\u770b\u7cfb\u7edf\u652f\u6301\u7684Shell\u5217\u8868\u3002"]}),"\n"]}),"\n",(0,h.jsx)(l.h2,{id:"4-\u9009\u62e9\u9002\u5408\u7684shell-",children:"4. \u9009\u62e9\u9002\u5408\u7684Shell \ud83d\ude0e"}),"\n",(0,h.jsx)(l.p,{children:"Linux \u7cfb\u7edf\u9ed8\u8ba4\u5b89\u88c5\u4e86\u51e0\u4e2a\u5e38\u7528\u7684Shell\uff0c\u5176\u4e2d\u6700\u5e38\u89c1\u7684\u5305\u62ec\uff1a"}),"\n",(0,h.jsxs)(l.ul,{children:["\n",(0,h.jsxs)(l.li,{children:[(0,h.jsx)(l.strong,{children:"Bash"})," (",(0,h.jsx)(l.code,{children:"/bin/bash"}),")\uff1aLinux\u7684\u9ed8\u8ba4Shell\uff0c\u975e\u5e38\u7a33\u5b9a\uff0c\u9002\u5408\u5927\u591a\u6570\u7528\u6237\u3002"]}),"\n",(0,h.jsxs)(l.li,{children:[(0,h.jsx)(l.strong,{children:"Zsh"})," (",(0,h.jsx)(l.code,{children:"/bin/zsh"}),")\uff1a\u63d0\u4f9b\u66f4\u591a\u7684\u529f\u80fd\uff0c\u9002\u5408\u90a3\u4e9b\u60f3\u8981\u66f4\u591a\u81ea\u5b9a\u4e49\u9009\u9879\u7684\u7528\u6237\u3002"]}),"\n",(0,h.jsxs)(l.li,{children:[(0,h.jsx)(l.strong,{children:"Fish"})," (",(0,h.jsx)(l.code,{children:"/usr/bin/fish"}),")\uff1a\u4e00\u4e2a\u529f\u80fd\u5f3a\u5927\u4e14\u6613\u4e8e\u4f7f\u7528\u7684Shell\uff0c\u9002\u5408\u521d\u5b66\u8005\u548c\u9ad8\u7ea7\u7528\u6237\u3002"]}),"\n"]}),"\n",(0,h.jsx)(l.p,{children:"\u4f60\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u9009\u62e9\u5408\u9002\u7684Shell\u54e6\uff01\ud83d\udc96"}),"\n",(0,h.jsx)(l.h2,{id:"5-\u5c0f\u8d34\u58eb-",children:"5. \u5c0f\u8d34\u58eb \ud83d\udca1"}),"\n",(0,h.jsxs)(l.ul,{children:["\n",(0,h.jsxs)(l.li,{children:["\u5982\u679c\u4f60\u4e0d\u786e\u5b9a\u7cfb\u7edf\u4e2d\u662f\u5426\u5b89\u88c5\u4e86\u67d0\u4e2aShell\uff0c\u53ef\u4ee5\u8fd0\u884c ",(0,h.jsx)(l.code,{children:"cat /etc/shells"})," \u6765\u67e5\u770b\u7cfb\u7edf\u4e2d\u6240\u6709\u5df2\u5b89\u88c5\u7684Shell\u5217\u8868\u3002"]}),"\n",(0,h.jsxs)(l.li,{children:["\u4fee\u6539 ",(0,h.jsx)(l.code,{children:"chsh"})," \u540e\u9700\u8981\u91cd\u65b0\u767b\u5f55\uff0c\u6216\u8005\u9000\u51fa\u5f53\u524d\u4f1a\u8bdd\u518d\u91cd\u65b0\u8fdb\u5165\u624d\u80fd\u751f\u6548\u3002"]}),"\n"]}),"\n",(0,h.jsx)(l.h2,{id:"6-\u603b\u7ed3-",children:"6. \u603b\u7ed3 \ud83c\udfaf"}),"\n",(0,h.jsxs)(l.p,{children:[(0,h.jsx)(l.code,{children:"chsh"})," \u547d\u4ee4\u662f\u4e00\u4e2a\u975e\u5e38\u6709\u7528\u7684\u5c0f\u5de5\u5177\uff0c\u53ef\u4ee5\u8ba9\u4f60\u66f4\u7075\u6d3b\u5730\u5207\u6362\u4e0d\u540c\u7684Shell\uff0c\u4ee5\u9002\u5e94\u4e0d\u540c\u7684\u5de5\u4f5c\u4e60\u60ef\u548c\u9700\u6c42\u3002\u638c\u63e1\u4e86\u5b83\uff0c\u4f60\u5c31\u80fd\u66f4\u81ea\u7531\u5730\u5b9a\u5236\u81ea\u5df1\u7684Linux\u73af\u5883\u5566\uff01\ud83d\udcab"]}),"\n",(0,h.jsxs)(l.p,{children:["\u5e0c\u671b\u8fd9\u7bc7\u6559\u7a0b\u5e2e\u52a9\u4f60\u4e86\u89e3\u5982\u4f55\u4f7f\u7528 ",(0,h.jsx)(l.code,{children:"chsh"})," \u547d\u4ee4\u66f4\u6539\u767b\u5f55Shell\uff01\u522b\u5fd8\u4e86\u6536\u85cf",(0,h.jsx)(l.strong,{children:"\u5728\u7ebf\u77e5\u8bc6\u5e93"}),"\uff08 ",(0,h.jsx)(l.a,{href:"http://www.zxzsk.com",children:"www.zxzsk.com"})," \uff09\u54e6\uff01\ud83d\ude0a"]})]})}function t(e={}){const{wrapper:l}={...(0,c.R)(),...e.components};return l?(0,h.jsx)(l,{...e,children:(0,h.jsx)(a,{...e})}):a(e)}},8453:(e,l,n)=>{n.d(l,{R:()=>i,x:()=>d});var s=n(6540);const h={},c=s.createContext(h);function i(e){const l=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function d(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(h):e.components||h:i(e.components),s.createElement(c.Provider,{value:l},e.children)}}}]);