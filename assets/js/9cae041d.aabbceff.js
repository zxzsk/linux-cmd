"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1662],{4346:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>d,toc:()=>t});const d=JSON.parse('{"id":"command/\u4e0e\u7528\u6237\u76f8\u5173/groups","title":"groups","description":"\u2b50\u67e5\u770b\u7528\u6237\u7684\u5c5e\u7ec4\u548c\u5c5e\u4e3b","source":"@site/docs/02-command/30-\u4e0e\u7528\u6237\u76f8\u5173/groups.md","sourceDirName":"02-command/30-\u4e0e\u7528\u6237\u76f8\u5173","slug":"/command/\u4e0e\u7528\u6237\u76f8\u5173/groups","permalink":"/command/\u4e0e\u7528\u6237\u76f8\u5173/groups","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/02-command/30-\u4e0e\u7528\u6237\u76f8\u5173/groups.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"groupdel","permalink":"/command/\u4e0e\u7528\u6237\u76f8\u5173/groupdel"},"next":{"title":"passwd","permalink":"/command/\u4e0e\u7528\u6237\u76f8\u5173/passwd"}}');var r=s(4848),l=s(8453);const c={},i=void 0,o={},t=[{value:"1. \u7b80\u4ecb \ud83d\udd11",id:"1-\u7b80\u4ecb-",level:2},{value:"2. \u5e38\u89c1\u7528\u6cd5 \ud83d\udccb",id:"2-\u5e38\u89c1\u7528\u6cd5-",level:2},{value:"3. \u547d\u4ee4\u793a\u4f8b \u26a1",id:"3-\u547d\u4ee4\u793a\u4f8b-",level:2},{value:"3.1 \u67e5\u770b\u5f53\u524d\u7528\u6237\u6240\u5c5e\u7684\u7528\u6237\u7ec4",id:"31-\u67e5\u770b\u5f53\u524d\u7528\u6237\u6240\u5c5e\u7684\u7528\u6237\u7ec4",level:3},{value:"3.2 \u67e5\u770b\u6307\u5b9a\u7528\u6237\u6240\u5c5e\u7684\u7528\u6237\u7ec4",id:"32-\u67e5\u770b\u6307\u5b9a\u7528\u6237\u6240\u5c5e\u7684\u7528\u6237\u7ec4",level:3},{value:"4. \u5173\u952e\u70b9 \ud83d\udcdd",id:"4-\u5173\u952e\u70b9-",level:2},{value:"5. \u5c0f\u8d34\u58eb \ud83d\udca1",id:"5-\u5c0f\u8d34\u58eb-",level:2},{value:"6. \u603b\u7ed3 \ud83c\udfaf",id:"6-\u603b\u7ed3-",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u2b50\u67e5\u770b\u7528\u6237\u7684\u5c5e\u7ec4\u548c\u5c5e\u4e3b"}),"\n",(0,r.jsx)(n.h2,{id:"1-\u7b80\u4ecb-",children:"1. \u7b80\u4ecb \ud83d\udd11"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"groups"})," \u547d\u4ee4\u7528\u4e8e\u663e\u793a\u5f53\u524d\u7528\u6237\u6216\u6307\u5b9a\u7528\u6237\u6240\u5c5e\u7684\u6240\u6709\u7528\u6237\u7ec4\u3002\u5728 Linux \u7cfb\u7edf\u4e2d\uff0c\u6bcf\u4e2a\u7528\u6237\u53ef\u80fd\u5c5e\u4e8e\u591a\u4e2a\u7528\u6237\u7ec4\uff0c",(0,r.jsx)(n.code,{children:"groups"})," \u547d\u4ee4\u5e2e\u52a9\u4f60\u5feb\u901f\u67e5\u770b\u8fd9\u4e9b\u4fe1\u606f\u3002\ud83d\udd0d"]}),"\n",(0,r.jsx)(n.h2,{id:"2-\u5e38\u89c1\u7528\u6cd5-",children:"2. \u5e38\u89c1\u7528\u6cd5 \ud83d\udccb"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u64cd\u4f5c"}),(0,r.jsx)(n.th,{children:"\u547d\u4ee4\u683c\u5f0f"}),(0,r.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u67e5\u770b\u5f53\u524d\u7528\u6237\u6240\u5c5e\u7684\u7528\u6237\u7ec4"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"groups"})}),(0,r.jsx)(n.td,{children:"\u663e\u793a\u5f53\u524d\u7528\u6237\u6240\u5c5e\u7684\u6240\u6709\u7528\u6237\u7ec4\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u67e5\u770b\u6307\u5b9a\u7528\u6237\u6240\u5c5e\u7684\u7528\u6237\u7ec4"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"groups <\u7528\u6237\u540d>"})}),(0,r.jsx)(n.td,{children:"\u663e\u793a\u6307\u5b9a\u7528\u6237\u6240\u5c5e\u7684\u7528\u6237\u7ec4\u3002"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"3-\u547d\u4ee4\u793a\u4f8b-",children:"3. \u547d\u4ee4\u793a\u4f8b \u26a1"}),"\n",(0,r.jsx)(n.h3,{id:"31-\u67e5\u770b\u5f53\u524d\u7528\u6237\u6240\u5c5e\u7684\u7528\u6237\u7ec4",children:"3.1 \u67e5\u770b\u5f53\u524d\u7528\u6237\u6240\u5c5e\u7684\u7528\u6237\u7ec4"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ groups\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"user1 dialout cdrom audio video\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53\u524d\u7528\u6237 ",(0,r.jsx)(n.code,{children:"user1"})," \u5c5e\u4e8e ",(0,r.jsx)(n.code,{children:"dialout"}),"\u3001",(0,r.jsx)(n.code,{children:"cdrom"}),"\u3001",(0,r.jsx)(n.code,{children:"audio"})," \u548c ",(0,r.jsx)(n.code,{children:"video"})," \u7528\u6237\u7ec4\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"32-\u67e5\u770b\u6307\u5b9a\u7528\u6237\u6240\u5c5e\u7684\u7528\u6237\u7ec4",children:"3.2 \u67e5\u770b\u6307\u5b9a\u7528\u6237\u6240\u5c5e\u7684\u7528\u6237\u7ec4"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ groups username\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"username wheel audio\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"username"})," \u7528\u6237\u5c5e\u4e8e ",(0,r.jsx)(n.code,{children:"wheel"})," \u548c ",(0,r.jsx)(n.code,{children:"audio"})," \u7528\u6237\u7ec4\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"4-\u5173\u952e\u70b9-",children:"4. \u5173\u952e\u70b9 \ud83d\udcdd"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u4e0d\u6307\u5b9a\u7528\u6237\u540d\uff0c",(0,r.jsx)(n.code,{children:"groups"})," \u9ed8\u8ba4\u663e\u793a\u5f53\u524d\u767b\u5f55\u7528\u6237\u7684\u6240\u5c5e\u7ec4\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u6bcf\u4e2a\u7528\u6237\u53ef\u4ee5\u5c5e\u4e8e\u591a\u4e2a\u7528\u6237\u7ec4\uff0c\u7ec4\u5185\u7684\u6743\u9650\u51b3\u5b9a\u7528\u6237\u5bf9\u7cfb\u7edf\u8d44\u6e90\u7684\u8bbf\u95ee\u80fd\u529b\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"5-\u5c0f\u8d34\u58eb-",children:"5. \u5c0f\u8d34\u58eb \ud83d\udca1"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5728\u8fdb\u884c\u6743\u9650\u914d\u7f6e\u65f6\uff0c\u67e5\u770b\u7528\u6237\u6240\u5c5e\u7684\u7528\u6237\u7ec4\u6709\u52a9\u4e8e\u786e\u4fdd\u8be5\u7528\u6237\u5177\u6709\u5fc5\u8981\u7684\u8bbf\u95ee\u6743\u9650\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u7ba1\u7406\u7528\u6237\u7ec4\u65f6\uff0c\u8bb0\u5f97\u9002\u65f6\u4fee\u6539\u7528\u6237\u7ec4\u914d\u7f6e\uff0c\u907f\u514d\u7528\u6237\u7ec4\u6743\u9650\u8fc7\u591a\u6216\u8fc7\u5c11\uff0c\u786e\u4fdd\u7cfb\u7edf\u5b89\u5168\u3002\ud83d\udd12"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"6-\u603b\u7ed3-",children:"6. \u603b\u7ed3 \ud83c\udfaf"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"groups"})," \u547d\u4ee4\u7b80\u6d01\u660e\u4e86\uff0c\u662f\u67e5\u770b\u7528\u6237\u6240\u5c5e\u7ec4\u7684\u6709\u6548\u5de5\u5177\u3002\u5b83\u6709\u52a9\u4e8e\u7cfb\u7edf\u7ba1\u7406\u5458\u5feb\u901f\u638c\u63e1\u7528\u6237\u6743\u9650\u4fe1\u606f\uff0c\u786e\u4fdd\u7cfb\u7edf\u5b89\u5168\u548c\u8d44\u6e90\u7ba1\u7406\u5f97\u5f53\u3002\ud83d\udc69\u200d\ud83d\udcbb"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5e0c\u671b\u8fd9\u7bc7\u6559\u7a0b\u5e2e\u52a9\u4f60\u66f4\u597d\u5730\u7406\u89e3 ",(0,r.jsx)(n.code,{children:"groups"})," \u547d\u4ee4\u7684\u4f7f\u7528\uff01\u522b\u5fd8\u4e86\u6536\u85cf",(0,r.jsx)(n.strong,{children:"\u5728\u7ebf\u77e5\u8bc6\u5e93"}),"\uff08 ",(0,r.jsx)(n.a,{href:"http://www.zxzsk.com",children:"www.zxzsk.com"})," \uff09\u54e6\uff01\ud83d\ude0a"]})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var d=s(6540);const r={},l=d.createContext(r);function c(e){const n=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);