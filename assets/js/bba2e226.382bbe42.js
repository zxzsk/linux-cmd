"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8883],{8023:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>i,default:()=>j,frontMatter:()=>r,metadata:()=>d,toc:()=>t});const d=JSON.parse('{"id":"\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406/pgrep","title":"pgrep","description":"\u2b50\u641c\u7d22\u8fdb\u7a0b","source":"@site/docs/40-\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406/pgrep.md","sourceDirName":"40-\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406","slug":"/f16a31cf","permalink":"/f16a31cf","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/40-\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406/pgrep.md","tags":[],"version":"current","lastUpdatedAt":1742246204000,"frontMatter":{"slug":"/f16a31cf"},"sidebar":"\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173","previous":{"title":"nice","permalink":"/2e0fa874"}}');var l=s(4848),c=s(8453);const r={slug:"/f16a31cf"},i=void 0,h={},t=[{value:"\u57fa\u7840\u8bed\u6cd5",id:"\u57fa\u7840\u8bed\u6cd5",level:2},{value:"\u5e38\u7528\u9009\u9879",id:"\u5e38\u7528\u9009\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b 1: \u67e5\u627e\u7279\u5b9a\u8fdb\u7a0b",id:"\u793a\u4f8b-1-\u67e5\u627e\u7279\u5b9a\u8fdb\u7a0b",level:3},{value:"\u793a\u4f8b 2: \u663e\u793a\u5339\u914d\u8fdb\u7a0b\u7684\u540d\u79f0\u548c PID",id:"\u793a\u4f8b-2-\u663e\u793a\u5339\u914d\u8fdb\u7a0b\u7684\u540d\u79f0\u548c-pid",level:3},{value:"\u793a\u4f8b 3: \u5339\u914d\u7279\u5b9a\u7528\u6237\u7684\u8fdb\u7a0b",id:"\u793a\u4f8b-3-\u5339\u914d\u7279\u5b9a\u7528\u6237\u7684\u8fdb\u7a0b",level:3},{value:"\u793a\u4f8b 4: \u5339\u914d\u5b8c\u6574\u547d\u4ee4\u884c",id:"\u793a\u4f8b-4-\u5339\u914d\u5b8c\u6574\u547d\u4ee4\u884c",level:3},{value:"\u793a\u4f8b 5: \u663e\u793a\u5339\u914d\u7684\u8fdb\u7a0b\u6570\u91cf",id:"\u793a\u4f8b-5-\u663e\u793a\u5339\u914d\u7684\u8fdb\u7a0b\u6570\u91cf",level:3},{value:"\u793a\u4f8b 6: \u83b7\u53d6\u6700\u65b0\u5339\u914d\u8fdb\u7a0b\u7684 PID",id:"\u793a\u4f8b-6-\u83b7\u53d6\u6700\u65b0\u5339\u914d\u8fdb\u7a0b\u7684-pid",level:3},{value:"\u4e0e <code>pkill</code> \u914d\u5408\u4f7f\u7528",id:"\u4e0e-pkill-\u914d\u5408\u4f7f\u7528",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function x(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"\u2b50\u641c\u7d22\u8fdb\u7a0b"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"pgrep"})," \u662f Linux \u548c Unix \u7cfb\u7edf\u4e2d\u7684\u4e00\u4e2a\u5b9e\u7528\u547d\u4ee4\uff0c\u7528\u4e8e\u6839\u636e\u540d\u79f0\u6216\u5176\u4ed6\u5c5e\u6027\u641c\u7d22\u5339\u914d\u7684\u8fdb\u7a0b\u5e76\u8fd4\u56de\u5176\u8fdb\u7a0b ID\uff08PID\uff09\u3002\u4e0e ",(0,l.jsx)(n.code,{children:"ps"})," \u548c ",(0,l.jsx)(n.code,{children:"grep"})," \u7684\u7ec4\u5408\u76f8\u6bd4\uff0c",(0,l.jsx)(n.code,{children:"pgrep"})," \u66f4\u52a0\u7b80\u6d01\u4e14\u76f4\u89c2\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u57fa\u7840\u8bed\u6cd5",children:"\u57fa\u7840\u8bed\u6cd5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pgrep [\u9009\u9879] \u6a21\u5f0f\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u6a21\u5f0f"}),": \u9700\u8981\u5339\u914d\u7684\u8fdb\u7a0b\u540d\u79f0\u6216\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u9009\u9879"}),": \u4fee\u6539 ",(0,l.jsx)(n.code,{children:"pgrep"})," \u7684\u884c\u4e3a\u4ee5\u6ee1\u8db3\u7279\u5b9a\u9700\u6c42\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5e38\u7528\u9009\u9879",children:"\u5e38\u7528\u9009\u9879"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u9009\u9879"}),(0,l.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"-l"})}),(0,l.jsx)(n.td,{children:"\u663e\u793a\u5339\u914d\u8fdb\u7a0b\u7684\u540d\u79f0\u548c PID"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"-a"})}),(0,l.jsx)(n.td,{children:"\u663e\u793a\u5339\u914d\u8fdb\u7a0b\u7684\u5b8c\u6574\u547d\u4ee4\u884c"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"-u \u7528\u6237\u540d"})}),(0,l.jsx)(n.td,{children:"\u53ea\u5339\u914d\u7279\u5b9a\u7528\u6237\u7684\u8fdb\u7a0b"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"-f"})}),(0,l.jsx)(n.td,{children:"\u5339\u914d\u5b8c\u6574\u547d\u4ee4\u884c\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u8fdb\u7a0b\u540d\u79f0"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"-v"})}),(0,l.jsx)(n.td,{children:"\u53cd\u5411\u5339\u914d\uff0c\u8fd4\u56de\u4e0d\u7b26\u5408\u6a21\u5f0f\u7684\u8fdb\u7a0b"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"-c"})}),(0,l.jsx)(n.td,{children:"\u663e\u793a\u5339\u914d\u7684\u8fdb\u7a0b\u6570"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"-n"})}),(0,l.jsx)(n.td,{children:"\u4ec5\u8fd4\u56de\u6700\u65b0\u7684\u5339\u914d\u8fdb\u7a0b"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"-o"})}),(0,l.jsx)(n.td,{children:"\u4ec5\u8fd4\u56de\u6700\u65e9\u7684\u5339\u914d\u8fdb\u7a0b"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(n.h3,{id:"\u793a\u4f8b-1-\u67e5\u627e\u7279\u5b9a\u8fdb\u7a0b",children:"\u793a\u4f8b 1: \u67e5\u627e\u7279\u5b9a\u8fdb\u7a0b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pgrep ssh\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u8f93\u51fa\u8be5\u7cfb\u7edf\u4e2d\u4e0e ",(0,l.jsx)(n.code,{children:"ssh"})," \u540d\u79f0\u5339\u914d\u7684\u6240\u6709\u8fdb\u7a0b\u7684 PID\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"1234\n5678\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u793a\u4f8b-2-\u663e\u793a\u5339\u914d\u8fdb\u7a0b\u7684\u540d\u79f0\u548c-pid",children:"\u793a\u4f8b 2: \u663e\u793a\u5339\u914d\u8fdb\u7a0b\u7684\u540d\u79f0\u548c PID"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pgrep -l ssh\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"1234 ssh\n5678 ssh\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u793a\u4f8b-3-\u5339\u914d\u7279\u5b9a\u7528\u6237\u7684\u8fdb\u7a0b",children:"\u793a\u4f8b 3: \u5339\u914d\u7279\u5b9a\u7528\u6237\u7684\u8fdb\u7a0b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pgrep -u john python\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u53ea\u663e\u793a\u7528\u6237\u540d\u4e3a ",(0,l.jsx)(n.code,{children:"john"})," \u7684\u7528\u6237\u8fd0\u884c\u7684 Python \u76f8\u5173\u8fdb\u7a0b\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u793a\u4f8b-4-\u5339\u914d\u5b8c\u6574\u547d\u4ee4\u884c",children:"\u793a\u4f8b 4: \u5339\u914d\u5b8c\u6574\u547d\u4ee4\u884c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'pgrep -f "/usr/bin/python3 script.py"\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u5339\u914d\u5305\u542b\u5b8c\u6574\u8def\u5f84\u6216\u53c2\u6570\u7684\u8fdb\u7a0b\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u793a\u4f8b-5-\u663e\u793a\u5339\u914d\u7684\u8fdb\u7a0b\u6570\u91cf",children:"\u793a\u4f8b 5: \u663e\u793a\u5339\u914d\u7684\u8fdb\u7a0b\u6570\u91cf"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pgrep -c ssh\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u8f93\u51fa\u4e0e ",(0,l.jsx)(n.code,{children:"ssh"})," \u5339\u914d\u7684\u8fdb\u7a0b\u6570\u91cf\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"2\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u793a\u4f8b-6-\u83b7\u53d6\u6700\u65b0\u5339\u914d\u8fdb\u7a0b\u7684-pid",children:"\u793a\u4f8b 6: \u83b7\u53d6\u6700\u65b0\u5339\u914d\u8fdb\u7a0b\u7684 PID"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pgrep -n ssh\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u53ea\u8fd4\u56de\u6700\u65b0\u542f\u52a8\u7684 ",(0,l.jsx)(n.code,{children:"ssh"})," \u8fdb\u7a0b\u7684 PID\u3002"]}),"\n",(0,l.jsxs)(n.h2,{id:"\u4e0e-pkill-\u914d\u5408\u4f7f\u7528",children:["\u4e0e ",(0,l.jsx)(n.code,{children:"pkill"})," \u914d\u5408\u4f7f\u7528"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"pgrep"})," \u7684\u59d0\u59b9\u547d\u4ee4\u662f ",(0,l.jsx)(n.code,{children:"pkill"}),"\uff0c\u7528\u4e8e\u6839\u636e\u540d\u79f0\u6216\u5176\u4ed6\u5c5e\u6027\u7ec8\u6b62\u8fdb\u7a0b\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pkill ssh\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u8be5\u547d\u4ee4\u4f1a\u7ec8\u6b62\u6240\u6709\u4e0e ",(0,l.jsx)(n.code,{children:"ssh"})," \u5339\u914d\u7684\u8fdb\u7a0b\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5982\u679c ",(0,l.jsx)(n.code,{children:"pgrep"})," \u6ca1\u6709\u627e\u5230\u5339\u914d\u7684\u8fdb\u7a0b\uff0c\u5b83\u4e0d\u4f1a\u8f93\u51fa\u4efb\u4f55\u5185\u5bb9\uff0c\u4f46\u9000\u51fa\u72b6\u6001\u7801\u4e3a 1\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"-f"})," \u65f6\u9700\u8981\u5c0f\u5fc3\uff0c\u53ef\u80fd\u4f1a\u5339\u914d\u66f4\u591a\u7684\u8fdb\u7a0b\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u7ba1\u7406\u6743\u9650\uff08\u5982 ",(0,l.jsx)(n.code,{children:"sudo"}),"\uff09\u53ef\u80fd\u4f1a\u5f71\u54cd\u547d\u4ee4\u7684\u7ed3\u679c\uff0c\u5c24\u5176\u662f\u6d89\u53ca\u5176\u4ed6\u7528\u6237\u7684\u8fdb\u7a0b\u65f6\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"pgrep"})," \u662f\u4e00\u4e2a\u529f\u80fd\u5f3a\u5927\u7684\u5de5\u5177\uff0c\u53ef\u7528\u4e8e\u5feb\u901f\u3001\u6709\u6548\u5730\u67e5\u627e\u8fd0\u884c\u7684\u8fdb\u7a0b\uff0c\u7279\u522b\u662f\u5728\u9700\u8981\u7ed3\u5408\u540d\u79f0\u6216\u6b63\u5219\u8868\u8fbe\u5f0f\u65f6\u3002\u901a\u8fc7\u719f\u7ec3\u638c\u63e1 ",(0,l.jsx)(n.code,{children:"pgrep"})," \u548c\u5176\u9009\u9879\uff0c\u53ef\u4ee5\u663e\u8457\u63d0\u9ad8\u7cfb\u7edf\u7ba1\u7406\u7684\u6548\u7387\u3002"]})]})}function j(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var d=s(6540);const l={},c=d.createContext(l);function r(e){const n=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);