"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8161],{5560:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>h,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"command/\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406/kill","title":"kill","description":"\u2b50\u7ec8\u6b62\u8fdb\u7a0b","source":"@site/docs/02-command/40-\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406/kill.md","sourceDirName":"02-command/40-\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406","slug":"/command/\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406/kill","permalink":"/command/\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406/kill","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/02-command/40-\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406/kill.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"jobs","permalink":"/command/\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406/jobs"},"next":{"title":"killall","permalink":"/command/\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406/killall"}}');var c=n(4848),d=n(8453);const i={},r=void 0,h={},o=[{value:"1. \u57fa\u672c\u7528\u6cd5",id:"1-\u57fa\u672c\u7528\u6cd5",level:2},{value:"1.1 \u4f7f\u7528 PID \u7ec8\u6b62\u8fdb\u7a0b",id:"11-\u4f7f\u7528-pid-\u7ec8\u6b62\u8fdb\u7a0b",level:3},{value:"1.2 \u5f3a\u5236\u7ec8\u6b62\u8fdb\u7a0b",id:"12-\u5f3a\u5236\u7ec8\u6b62\u8fdb\u7a0b",level:3},{value:"2. \u67e5\u627e\u8fdb\u7a0b ID (PID)",id:"2-\u67e5\u627e\u8fdb\u7a0b-id-pid",level:2},{value:"2.1 \u4f7f\u7528 <code>ps</code> \u547d\u4ee4",id:"21-\u4f7f\u7528-ps-\u547d\u4ee4",level:3},{value:"2.2 \u4f7f\u7528 <code>pgrep</code> \u67e5\u627e\u8fdb\u7a0b",id:"22-\u4f7f\u7528-pgrep-\u67e5\u627e\u8fdb\u7a0b",level:3},{value:"3. \u53d1\u9001\u4e0d\u540c\u7684\u4fe1\u53f7",id:"3-\u53d1\u9001\u4e0d\u540c\u7684\u4fe1\u53f7",level:2},{value:"3.1 <code>SIGTERM</code>\uff08\u9ed8\u8ba4\u4fe1\u53f7\uff09",id:"31-sigterm\u9ed8\u8ba4\u4fe1\u53f7",level:3},{value:"3.2 <code>SIGKILL</code>\uff08\u5f3a\u5236\u7ec8\u6b62\uff09",id:"32-sigkill\u5f3a\u5236\u7ec8\u6b62",level:3},{value:"3.3 <code>SIGSTOP</code> \u548c <code>SIGCONT</code>",id:"33-sigstop-\u548c-sigcont",level:3},{value:"4. \u603b\u7ed3\u4e0e\u6280\u5de7 \ud83c\udf1f",id:"4-\u603b\u7ed3\u4e0e\u6280\u5de7-",level:2}];function x(e){const l={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.p,{children:"\u2b50\u7ec8\u6b62\u8fdb\u7a0b"}),"\n",(0,c.jsxs)(l.p,{children:["\u5728 Linux \u7cfb\u7edf\u4e2d\uff0c",(0,c.jsx)(l.code,{children:"kill"})," \u547d\u4ee4\u662f\u7528\u6765\u7ec8\u6b62\u6216\u63a7\u5236\u6b63\u5728\u8fd0\u884c\u7684\u8fdb\u7a0b\u7684\u5f3a\u5927\u5de5\u5177\u3002\u5b83\u5141\u8bb8\u4f60\u901a\u8fc7\u8fdb\u7a0b ID\uff08PID\uff09\u53d1\u9001\u4fe1\u53f7\uff0c\u544a\u8bc9\u64cd\u4f5c\u7cfb\u7edf\u6267\u884c\u67d0\u79cd\u64cd\u4f5c\uff08\u4f8b\u5982\u7ed3\u675f\u8fdb\u7a0b\uff09\u3002\ud83d\udd25"]}),"\n",(0,c.jsxs)(l.p,{children:["\u65e0\u8bba\u662f\u7cfb\u7edf\u7ba1\u7406\u8fd8\u662f\u65e5\u5e38\u64cd\u4f5c\uff0c",(0,c.jsx)(l.code,{children:"kill"})," \u547d\u4ee4\u90fd\u662f\u975e\u5e38\u5e38\u7528\u4e14\u5fc5\u5907\u7684\u6280\u80fd\uff01\u8ba9\u6211\u4eec\u5feb\u901f\u638c\u63e1\u5b83\u7684\u5173\u952e\u7528\u6cd5\u5427\uff01\ud83d\ude80"]}),"\n",(0,c.jsx)(l.h2,{id:"1-\u57fa\u672c\u7528\u6cd5",children:"1. \u57fa\u672c\u7528\u6cd5"}),"\n",(0,c.jsx)(l.h3,{id:"11-\u4f7f\u7528-pid-\u7ec8\u6b62\u8fdb\u7a0b",children:"1.1 \u4f7f\u7528 PID \u7ec8\u6b62\u8fdb\u7a0b"}),"\n",(0,c.jsxs)(l.p,{children:["\u6700\u5e38\u89c1\u7684 ",(0,c.jsx)(l.code,{children:"kill"})," \u547d\u4ee4\u7528\u6cd5\u662f\u901a\u8fc7\u6307\u5b9a\u8fdb\u7a0b ID\uff08PID\uff09\u6765\u7ec8\u6b62\u8fdb\u7a0b\uff1a"]}),"\n",(0,c.jsx)(l.pre,{children:(0,c.jsx)(l.code,{className:"language-bash",children:"kill <PID>\n"})}),"\n",(0,c.jsx)(l.p,{children:"\u4f8b\u5982\uff0c\u82e5\u8981\u7ec8\u6b62\u8fdb\u7a0b ID \u4e3a 1234 \u7684\u8fdb\u7a0b\uff0c\u53ef\u4ee5\u4f7f\u7528\uff1a"}),"\n",(0,c.jsx)(l.pre,{children:(0,c.jsx)(l.code,{className:"language-bash",children:"kill 1234\n"})}),"\n",(0,c.jsxs)(l.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,c.jsx)(l.code,{children:"kill"})," \u4f1a\u53d1\u9001 ",(0,c.jsx)(l.code,{children:"SIGTERM"})," \u4fe1\u53f7\uff0c\u8fd9\u5c06\u8bf7\u6c42\u8fdb\u7a0b\u6b63\u5e38\u7ed3\u675f\u3002\u5982\u679c\u8fdb\u7a0b\u54cd\u5e94\u5e76\u9000\u51fa\uff0c\u64cd\u4f5c\u6210\u529f\uff1b\u5982\u679c\u8fdb\u7a0b\u6ca1\u6709\u54cd\u5e94\uff0c\u53ef\u80fd\u9700\u8981\u4f7f\u7528\u66f4\u5f3a\u529b\u7684\u4fe1\u53f7\u3002"]}),"\n",(0,c.jsx)(l.h3,{id:"12-\u5f3a\u5236\u7ec8\u6b62\u8fdb\u7a0b",children:"1.2 \u5f3a\u5236\u7ec8\u6b62\u8fdb\u7a0b"}),"\n",(0,c.jsxs)(l.p,{children:["\u5982\u679c\u666e\u901a\u7684 ",(0,c.jsx)(l.code,{children:"kill"})," \u547d\u4ee4\u4e0d\u8d77\u4f5c\u7528\uff0c\u53ef\u4ee5\u901a\u8fc7\u53d1\u9001 ",(0,c.jsx)(l.code,{children:"SIGKILL"})," \u4fe1\u53f7\u6765\u5f3a\u5236\u7ec8\u6b62\u8fdb\u7a0b\uff1a"]}),"\n",(0,c.jsx)(l.pre,{children:(0,c.jsx)(l.code,{className:"language-bash",children:"kill -9 <PID>\n"})}),"\n",(0,c.jsx)(l.p,{children:"\u4f8b\u5982\uff1a"}),"\n",(0,c.jsx)(l.pre,{children:(0,c.jsx)(l.code,{className:"language-bash",children:"kill -9 1234\n"})}),"\n",(0,c.jsxs)(l.p,{children:[(0,c.jsx)(l.code,{children:"-9"})," \u662f ",(0,c.jsx)(l.code,{children:"SIGKILL"})," \u4fe1\u53f7\u7684\u9009\u9879\uff0c\u8868\u793a\u5f3a\u5236\u6740\u6b7b\u8fdb\u7a0b\uff0c\u8fdb\u7a0b\u65e0\u6cd5\u5ffd\u89c6\u8fd9\u4e2a\u4fe1\u53f7\uff0c\u56e0\u6b64\u80fd\u7acb\u5373\u7ec8\u6b62\u3002"]}),"\n",(0,c.jsx)(l.h2,{id:"2-\u67e5\u627e\u8fdb\u7a0b-id-pid",children:"2. \u67e5\u627e\u8fdb\u7a0b ID (PID)"}),"\n",(0,c.jsxs)(l.h3,{id:"21-\u4f7f\u7528-ps-\u547d\u4ee4",children:["2.1 \u4f7f\u7528 ",(0,c.jsx)(l.code,{children:"ps"})," \u547d\u4ee4"]}),"\n",(0,c.jsxs)(l.p,{children:["\u9996\u5148\uff0c\u83b7\u53d6\u8fdb\u7a0b ID\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(l.code,{children:"ps"})," \u6216 ",(0,c.jsx)(l.code,{children:"top"})," \u547d\u4ee4\u6765\u5217\u51fa\u6b63\u5728\u8fd0\u884c\u7684\u8fdb\u7a0b\u3002"]}),"\n",(0,c.jsx)(l.p,{children:"\u4f8b\u5982\uff0c\u67e5\u770b\u6240\u6709\u7528\u6237\u7684\u8fdb\u7a0b\uff1a"}),"\n",(0,c.jsx)(l.pre,{children:(0,c.jsx)(l.code,{className:"language-bash",children:"ps aux\n"})}),"\n",(0,c.jsx)(l.p,{children:"\u8fd9\u5c06\u5217\u51fa\u7cfb\u7edf\u4e2d\u6240\u6709\u8fdb\u7a0b\u7684\u4fe1\u606f\uff0c\u5305\u62ec\u8fdb\u7a0b ID\uff08PID\uff09\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u8fdb\u7a0b\u7684\u540d\u79f0\u6216\u5176\u4ed6\u4fe1\u606f\u627e\u5230\u76ee\u6807\u8fdb\u7a0b\u3002"}),"\n",(0,c.jsxs)(l.h3,{id:"22-\u4f7f\u7528-pgrep-\u67e5\u627e\u8fdb\u7a0b",children:["2.2 \u4f7f\u7528 ",(0,c.jsx)(l.code,{children:"pgrep"})," \u67e5\u627e\u8fdb\u7a0b"]}),"\n",(0,c.jsxs)(l.p,{children:["\u5982\u679c\u4f60\u77e5\u9053\u8fdb\u7a0b\u7684\u540d\u79f0\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(l.code,{children:"pgrep"})," \u547d\u4ee4\u76f4\u63a5\u67e5\u627e\u5bf9\u5e94\u7684 PID\u3002\u4f8b\u5982\uff0c\u67e5\u627e ",(0,c.jsx)(l.code,{children:"firefox"})," \u8fdb\u7a0b\u7684 PID\uff1a"]}),"\n",(0,c.jsx)(l.pre,{children:(0,c.jsx)(l.code,{className:"language-bash",children:"pgrep firefox\n"})}),"\n",(0,c.jsxs)(l.p,{children:["\u8f93\u51fa\u5c06\u663e\u793a\u4e0e ",(0,c.jsx)(l.code,{children:"firefox"})," \u76f8\u5173\u7684 PID\u3002"]}),"\n",(0,c.jsx)(l.h2,{id:"3-\u53d1\u9001\u4e0d\u540c\u7684\u4fe1\u53f7",children:"3. \u53d1\u9001\u4e0d\u540c\u7684\u4fe1\u53f7"}),"\n",(0,c.jsxs)(l.h3,{id:"31-sigterm\u9ed8\u8ba4\u4fe1\u53f7",children:["3.1 ",(0,c.jsx)(l.code,{children:"SIGTERM"}),"\uff08\u9ed8\u8ba4\u4fe1\u53f7\uff09"]}),"\n",(0,c.jsxs)(l.p,{children:["\u8fd9\u662f ",(0,c.jsx)(l.code,{children:"kill"})," \u547d\u4ee4\u7684\u9ed8\u8ba4\u4fe1\u53f7\uff0c\u5b83\u8bf7\u6c42\u8fdb\u7a0b\u8fdb\u884c\u5e72\u51c0\u7684\u9000\u51fa\u3002\u5927\u591a\u6570\u7a0b\u5e8f\u4f1a\u54cd\u5e94\u6b64\u4fe1\u53f7\u5e76\u6b63\u5e38\u5173\u95ed\u3002"]}),"\n",(0,c.jsx)(l.pre,{children:(0,c.jsx)(l.code,{className:"language-bash",children:"kill <PID>\n"})}),"\n",(0,c.jsxs)(l.h3,{id:"32-sigkill\u5f3a\u5236\u7ec8\u6b62",children:["3.2 ",(0,c.jsx)(l.code,{children:"SIGKILL"}),"\uff08\u5f3a\u5236\u7ec8\u6b62\uff09"]}),"\n",(0,c.jsxs)(l.p,{children:["\u4f7f\u7528 ",(0,c.jsx)(l.code,{children:"-9"})," \u53d1\u9001 ",(0,c.jsx)(l.code,{children:"SIGKILL"})," \u4fe1\u53f7\uff0c\u8fd9\u4f1a\u5f3a\u5236\u7ec8\u6b62\u8fdb\u7a0b\uff0c\u4e0d\u4f1a\u7ed9\u8fdb\u7a0b\u4efb\u4f55\u6e05\u7406\u8d44\u6e90\u7684\u673a\u4f1a\u3002\u9002\u7528\u4e8e\u8fdb\u7a0b\u65e0\u6cd5\u6b63\u5e38\u5173\u95ed\u65f6\u3002"]}),"\n",(0,c.jsx)(l.pre,{children:(0,c.jsx)(l.code,{className:"language-bash",children:"kill -9 <PID>\n"})}),"\n",(0,c.jsxs)(l.h3,{id:"33-sigstop-\u548c-sigcont",children:["3.3 ",(0,c.jsx)(l.code,{children:"SIGSTOP"})," \u548c ",(0,c.jsx)(l.code,{children:"SIGCONT"})]}),"\n",(0,c.jsxs)(l.p,{children:["\u5982\u679c\u4f60\u60f3\u6682\u65f6\u505c\u6b62\u4e00\u4e2a\u8fdb\u7a0b\uff0c\u53ef\u4ee5\u53d1\u9001 ",(0,c.jsx)(l.code,{children:"SIGSTOP"})," \u4fe1\u53f7\uff1a"]}),"\n",(0,c.jsx)(l.pre,{children:(0,c.jsx)(l.code,{className:"language-bash",children:"kill -STOP <PID>\n"})}),"\n",(0,c.jsxs)(l.p,{children:["\u8981\u6062\u590d\u6682\u505c\u7684\u8fdb\u7a0b\uff0c\u4f7f\u7528 ",(0,c.jsx)(l.code,{children:"SIGCONT"})," \u4fe1\u53f7\uff1a"]}),"\n",(0,c.jsx)(l.pre,{children:(0,c.jsx)(l.code,{className:"language-bash",children:"kill -CONT <PID>\n"})}),"\n",(0,c.jsx)(l.h2,{id:"4-\u603b\u7ed3\u4e0e\u6280\u5de7-",children:"4. \u603b\u7ed3\u4e0e\u6280\u5de7 \ud83c\udf1f"}),"\n",(0,c.jsxs)(l.ul,{children:["\n",(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:"kill"})," \u547d\u4ee4\u4e0d\u4ec5\u4ec5\u7528\u4e8e\u6740\u6b7b\u8fdb\u7a0b\uff0c\u5b83\u53ef\u4ee5\u901a\u8fc7\u53d1\u9001\u4e0d\u540c\u7684\u4fe1\u53f7\u6765\u63a7\u5236\u8fdb\u7a0b\u7684\u884c\u4e3a\u3002"]}),"\n",(0,c.jsxs)(l.li,{children:["\u82e5\u8981\u6b63\u5e38\u7ec8\u6b62\u8fdb\u7a0b\uff0c\u9996\u5148\u5c1d\u8bd5\u4f7f\u7528 ",(0,c.jsx)(l.code,{children:"kill <PID>"})," \u6216 ",(0,c.jsx)(l.code,{children:"kill -15 <PID>"}),"\uff08",(0,c.jsx)(l.code,{children:"SIGTERM"}),"\uff09\u3002"]}),"\n",(0,c.jsxs)(l.li,{children:["\u5982\u679c\u8fdb\u7a0b\u4e0d\u54cd\u5e94\uff0c\u4f7f\u7528 ",(0,c.jsx)(l.code,{children:"kill -9 <PID>"})," \u5f3a\u5236\u7ec8\u6b62\u8fdb\u7a0b\uff08",(0,c.jsx)(l.code,{children:"SIGKILL"}),"\uff09\u3002"]}),"\n",(0,c.jsxs)(l.li,{children:["\u4f7f\u7528 ",(0,c.jsx)(l.code,{children:"pgrep"})," \u67e5\u627e\u8fdb\u7a0b ID \u6765\u907f\u514d\u624b\u52a8\u67e5\u627e PID\u3002"]}),"\n",(0,c.jsxs)(l.li,{children:["\u5bf9\u4e8e\u67d0\u4e9b\u8fdb\u7a0b\uff0c\u4f7f\u7528 ",(0,c.jsx)(l.code,{children:"SIGSTOP"})," \u548c ",(0,c.jsx)(l.code,{children:"SIGCONT"})," \u53ef\u4ee5\u6682\u505c\u548c\u6062\u590d\u5b83\u4eec\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(l.p,{children:["\u638c\u63e1 ",(0,c.jsx)(l.code,{children:"kill"})," \u547d\u4ee4\uff0c\u53ef\u4ee5\u5e2e\u52a9\u4f60\u9ad8\u6548\u5730\u7ba1\u7406\u7cfb\u7edf\u8fdb\u7a0b\uff0c\u4fdd\u6301\u7cfb\u7edf\u7684\u7a33\u5b9a\u6027\u548c\u5b89\u5168\u6027\u3002\ud83c\udfaf"]}),"\n",(0,c.jsxs)(l.p,{children:["\u5e0c\u671b\u8fd9\u4e2a\u6559\u7a0b\u5e2e\u52a9\u4f60\u66f4\u597d\u5730\u4f7f\u7528 ",(0,c.jsx)(l.code,{children:"kill"})," \u547d\u4ee4\uff01\u522b\u5fd8\u4e86\u6536\u85cf ",(0,c.jsx)(l.strong,{children:"\u5728\u7ebf\u77e5\u8bc6\u5e93"}),"\uff08 ",(0,c.jsx)(l.a,{href:"http://www.zxzsk.com",children:"www.zxzsk.com"})," \uff09\u54e6\uff01\ud83d\ude0a"]})]})}function a(e={}){const{wrapper:l}={...(0,d.R)(),...e.components};return l?(0,c.jsx)(l,{...e,children:(0,c.jsx)(x,{...e})}):x(e)}},8453:(e,l,n)=>{n.d(l,{R:()=>i,x:()=>r});var s=n(6540);const c={},d=s.createContext(c);function i(e){const l=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function r(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(d.Provider,{value:l},e.children)}}}]);