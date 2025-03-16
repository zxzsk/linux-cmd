"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1269],{1315:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>t,frontMatter:()=>i,metadata:()=>d,toc:()=>o});const d=JSON.parse('{"id":"command/\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406/fg","title":"fg","description":"\u2b50\u4efb\u52a1\u5207\u6362\u5230\u524d\u53f0\u8fd0\u884c","source":"@site/docs/02-command/40-\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406/fg.md","sourceDirName":"02-command/40-\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406","slug":"/bdc3db88","permalink":"/bdc3db88","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/02-command/40-\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406/fg.md","tags":[],"version":"current","frontMatter":{"slug":"/bdc3db88"},"sidebar":"tutorialSidebar","previous":{"title":"bg","permalink":"/925b3ddf"},"next":{"title":"jobs","permalink":"/67f07e74"}}');var c=s(4848),l=s(8453);const i={slug:"/bdc3db88"},r=void 0,h={},o=[{value:"1. \u7b80\u4ecb",id:"1-\u7b80\u4ecb",level:2},{value:"2. \u67e5\u770b\u5f53\u524d\u4f5c\u4e1a",id:"2-\u67e5\u770b\u5f53\u524d\u4f5c\u4e1a",level:2},{value:"3. \u4f7f\u7528 fg \u547d\u4ee4",id:"3-\u4f7f\u7528-fg-\u547d\u4ee4",level:2},{value:"3.1 \u5c06\u6700\u540e\u4e00\u4e2a\u540e\u53f0\u4f5c\u4e1a\u5207\u6362\u5230\u524d\u53f0",id:"31-\u5c06\u6700\u540e\u4e00\u4e2a\u540e\u53f0\u4f5c\u4e1a\u5207\u6362\u5230\u524d\u53f0",level:3},{value:"3.2 \u6307\u5b9a\u4f5c\u4e1a\u7f16\u53f7\u5207\u6362\u5230\u524d\u53f0",id:"32-\u6307\u5b9a\u4f5c\u4e1a\u7f16\u53f7\u5207\u6362\u5230\u524d\u53f0",level:3},{value:"3.3 \u6307\u5b9a\u8fdb\u7a0b ID (PID)",id:"33-\u6307\u5b9a\u8fdb\u7a0b-id-pid",level:3},{value:"4. \u5e38\u89c1\u7528\u9014 \ud83d\udcdd",id:"4-\u5e38\u89c1\u7528\u9014-",level:2},{value:"5. \u5c0f\u8d34\u58eb \ud83d\udca1",id:"5-\u5c0f\u8d34\u58eb-",level:2},{value:"6. \u603b\u7ed3 \ud83c\udfaf",id:"6-\u603b\u7ed3-",level:2}];function x(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"\u2b50\u4efb\u52a1\u5207\u6362\u5230\u524d\u53f0\u8fd0\u884c"}),"\n",(0,c.jsx)(n.h2,{id:"1-\u7b80\u4ecb",children:"1. \u7b80\u4ecb"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"fg"}),"\uff08foreground\uff09\u547d\u4ee4\u7528\u4e8e\u5c06\u4e00\u4e2a\u540e\u53f0\u4f5c\u4e1a\u5e26\u5230\u524d\u53f0\u8fd0\u884c\u3002\u5728 Linux \u4e2d\uff0c\u4f5c\u4e1a\u63a7\u5236\u5141\u8bb8\u4f60\u5c06\u6b63\u5728\u8fd0\u884c\u7684\u8fdb\u7a0b\u653e\u7f6e\u5728\u540e\u53f0\u6216\u524d\u53f0\uff0c\u4ee5\u4fbf\u4f60\u53ef\u4ee5\u7075\u6d3b\u5730\u7ba1\u7406\u4efb\u52a1\u3002",(0,c.jsx)(n.code,{children:"fg"})," \u547d\u4ee4\u662f\u4f5c\u4e1a\u63a7\u5236\u7684\u4e00\u90e8\u5206\uff0c\u7528\u4e8e\u4ece\u540e\u53f0\u5c06\u6307\u5b9a\u4f5c\u4e1a\u8f6c\u79fb\u5230\u524d\u53f0\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"2-\u67e5\u770b\u5f53\u524d\u4f5c\u4e1a",children:"2. \u67e5\u770b\u5f53\u524d\u4f5c\u4e1a"}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"fg"})," \u547d\u4ee4\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u77e5\u9053\u5f53\u524d\u7cfb\u7edf\u4e2d\u7684\u4f5c\u4e1a\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"jobs"})," \u547d\u4ee4\u5217\u51fa\u5f53\u524d\u7684\u4f5c\u4e1a\u53ca\u5176\u72b6\u6001\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ jobs\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u793a\u4f8b\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"[1] 12345 + Running     sleep 100 &\n[2] 12346 - Stopped     nano\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"[1]"})," \u548c ",(0,c.jsx)(n.code,{children:"[2]"})," \u662f\u4f5c\u4e1a\u7f16\u53f7\uff0c",(0,c.jsx)(n.code,{children:"12345"})," \u548c ",(0,c.jsx)(n.code,{children:"12346"})," \u662f\u8fdb\u7a0b ID\uff08PID\uff09\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"3-\u4f7f\u7528-fg-\u547d\u4ee4",children:"3. \u4f7f\u7528 fg \u547d\u4ee4"}),"\n",(0,c.jsx)(n.h3,{id:"31-\u5c06\u6700\u540e\u4e00\u4e2a\u540e\u53f0\u4f5c\u4e1a\u5207\u6362\u5230\u524d\u53f0",children:"3.1 \u5c06\u6700\u540e\u4e00\u4e2a\u540e\u53f0\u4f5c\u4e1a\u5207\u6362\u5230\u524d\u53f0"}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u4f60\u53ea\u5e0c\u671b\u5c06\u6700\u540e\u4e00\u4e2a\u540e\u53f0\u4f5c\u4e1a\u5e26\u5230\u524d\u53f0\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ fg\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8be5\u547d\u4ee4\u4f1a\u5c06\u6700\u8fd1\u7684\u540e\u53f0\u4f5c\u4e1a\uff08\u901a\u5e38\u662f\u6700\u540e\u4e00\u4e2a\u542f\u52a8\u7684\uff09\u5e26\u5230\u524d\u53f0\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"32-\u6307\u5b9a\u4f5c\u4e1a\u7f16\u53f7\u5207\u6362\u5230\u524d\u53f0",children:"3.2 \u6307\u5b9a\u4f5c\u4e1a\u7f16\u53f7\u5207\u6362\u5230\u524d\u53f0"}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u6709\u591a\u4e2a\u540e\u53f0\u4f5c\u4e1a\uff0c\u53ef\u4ee5\u6307\u5b9a\u4f5c\u4e1a\u7f16\u53f7\u5c06\u7279\u5b9a\u7684\u4f5c\u4e1a\u5e26\u5230\u524d\u53f0\u3002\u4f5c\u4e1a\u7f16\u53f7\u662f\u7531 ",(0,c.jsx)(n.code,{children:"jobs"})," \u547d\u4ee4\u5217\u51fa\u7684\u6570\u5b57\uff08\u4f8b\u5982 ",(0,c.jsx)(n.code,{children:"[1]"}),"\u3001",(0,c.jsx)(n.code,{children:"[2]"})," \u7b49\uff09\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ fg %1\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u5c06\u628a\u4f5c\u4e1a\u7f16\u53f7\u4e3a ",(0,c.jsx)(n.code,{children:"1"})," \u7684\u4f5c\u4e1a\u5e26\u5230\u524d\u53f0\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"33-\u6307\u5b9a\u8fdb\u7a0b-id-pid",children:"3.3 \u6307\u5b9a\u8fdb\u7a0b ID (PID)"}),"\n",(0,c.jsxs)(n.p,{children:["\u4f60\u8fd8\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u8fdb\u7a0b ID\uff08PID\uff09\u6765\u6307\u5b9a\u8981\u8f6c\u5230\u524d\u53f0\u7684\u4f5c\u4e1a\u3002\u9996\u5148\uff0c\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"ps"})," \u6216 ",(0,c.jsx)(n.code,{children:"jobs"})," \u547d\u4ee4\u83b7\u53d6\u8fdb\u7a0b ID\uff0c\u7136\u540e\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ fg %12345\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u91cc\uff0c",(0,c.jsx)(n.code,{children:"12345"})," \u662f\u8fdb\u7a0b ID\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"4-\u5e38\u89c1\u7528\u9014-",children:"4. \u5e38\u89c1\u7528\u9014 \ud83d\udcdd"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u6062\u590d\u6682\u505c\u7684\u4f5c\u4e1a"}),"\uff1a\u5982\u679c\u4f60\u5728\u540e\u53f0\u8fd0\u884c\u4e86\u4e00\u4e2a\u4f5c\u4e1a\u5e76\u5c06\u5176\u6682\u505c\uff08\u4f8b\u5982\uff0c\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"Ctrl + Z"}),"\uff09\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"fg"})," \u5c06\u5176\u6062\u590d\u5230\u524d\u53f0\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ htop\n[\u6682\u505c\u540e]\n$ fg\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u5207\u6362\u4f5c\u4e1a"}),"\uff1a\u4f60\u53ef\u4ee5\u5728\u591a\u4e2a\u540e\u53f0\u4f5c\u4e1a\u4e4b\u95f4\u5207\u6362\uff0c\u5148\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"jobs"})," \u67e5\u770b\u4f5c\u4e1a\u7f16\u53f7\uff0c\u7136\u540e\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"fg %1"})," \u6216 ",(0,c.jsx)(n.code,{children:"fg %2"})," \u7b49\u547d\u4ee4\u5207\u6362\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"5-\u5c0f\u8d34\u58eb-",children:"5. \u5c0f\u8d34\u58eb \ud83d\udca1"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\u591a\u4efb\u52a1\u64cd\u4f5c"}),"\uff1a",(0,c.jsx)(n.code,{children:"fg"})," \u547d\u4ee4\u4e0e ",(0,c.jsx)(n.code,{children:"bg"}),"\uff08\u5c06\u4f5c\u4e1a\u653e\u5165\u540e\u53f0\u8fd0\u884c\uff09\u4e00\u8d77\u4f7f\u7528\u65f6\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u5728\u524d\u540e\u53f0\u5207\u6362\u4f5c\u4e1a\uff0c\u5e2e\u52a9\u4f60\u6709\u6548\u7ba1\u7406\u591a\u4e2a\u4efb\u52a1\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\u7ec4\u5408\u4f7f\u7528"}),"\uff1a\u4f60\u53ef\u4ee5\u7ed3\u5408\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"ctrl + z"}),"\uff08\u6682\u505c\uff09\u548c ",(0,c.jsx)(n.code,{children:"bg"}),"\uff08\u540e\u53f0\u8fd0\u884c\uff09\u6765\u4f18\u5316\u4f5c\u4e1a\u7ba1\u7406\uff0c\u7136\u540e\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"fg"})," \u5c06\u5b83\u4eec\u5e26\u5230\u524d\u53f0\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"6-\u603b\u7ed3-",children:"6. \u603b\u7ed3 \ud83c\udfaf"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"fg"})," \u547d\u4ee4\u662f Linux \u4e2d\u975e\u5e38\u5b9e\u7528\u7684\u4f5c\u4e1a\u63a7\u5236\u5de5\u5177\uff0c\u5b83\u53ef\u4ee5\u5e2e\u52a9\u4f60\u5c06\u540e\u53f0\u4f5c\u4e1a\u5e26\u56de\u524d\u53f0\u6267\u884c\uff0c\u4fbf\u4e8e\u7528\u6237\u4e0e\u7a0b\u5e8f\u7684\u4ea4\u4e92\u3002\u638c\u63e1 ",(0,c.jsx)(n.code,{children:"fg"})," \u547d\u4ee4\uff0c\u80fd\u591f\u8ba9\u4f60\u66f4\u9ad8\u6548\u5730\u7ba1\u7406\u7cfb\u7edf\u4e0a\u7684\u8fdb\u7a0b\u548c\u4efb\u52a1\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5e0c\u671b\u8fd9\u7bc7\u6559\u7a0b\u5e2e\u52a9\u4f60\u638c\u63e1 ",(0,c.jsx)(n.code,{children:"fg"})," \u547d\u4ee4\uff01\u522b\u5fd8\u4e86\u6536\u85cf",(0,c.jsx)(n.strong,{children:"\u5728\u7ebf\u77e5\u8bc6\u5e93"}),"\uff08 ",(0,c.jsx)(n.a,{href:"http://www.zxzsk.com",children:"www.zxzsk.com"})," \uff09\u54e6\uff01\ud83d\ude0a"]})]})}function t(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(x,{...e})}):x(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var d=s(6540);const c={},l=d.createContext(c);function i(e){const n=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);