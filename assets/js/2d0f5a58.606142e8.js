"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7474],{6875:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>i,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>t});const c=JSON.parse('{"id":"\u4e0e\u7528\u6237\u76f8\u5173/\u5bc6\u7801\u76f8\u5173/chage","title":"chage","description":"\u2b50\u7528\u6237\u5bc6\u7801\u6548\u671f\u7ba1\u7406","source":"@site/docs/30-\u4e0e\u7528\u6237\u76f8\u5173/\u5bc6\u7801\u76f8\u5173/chage.md","sourceDirName":"30-\u4e0e\u7528\u6237\u76f8\u5173/\u5bc6\u7801\u76f8\u5173","slug":"/0ad1e58f","permalink":"/0ad1e58f","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/30-\u4e0e\u7528\u6237\u76f8\u5173/\u5bc6\u7801\u76f8\u5173/chage.md","tags":[],"version":"current","lastUpdatedAt":1742246204000,"frontMatter":{"slug":"/0ad1e58f"},"sidebar":"\u4e0e\u7528\u6237\u76f8\u5173","previous":{"title":"\u5bc6\u7801\u76f8\u5173","permalink":"/category/\u5bc6\u7801\u76f8\u5173"},"next":{"title":"passwd","permalink":"/1b51ecae"}}');var d=s(4848),r=s(8453);const l={slug:"/0ad1e58f"},i=void 0,h={},t=[{value:"Linux <code>chage</code> \u547d\u4ee4",id:"linux-chage-\u547d\u4ee4",level:2},{value:"1. \u7b80\u4ecb",id:"1-\u7b80\u4ecb",level:3},{value:"2. \u8bed\u6cd5",id:"2-\u8bed\u6cd5",level:3},{value:"3. \u5e38\u7528\u793a\u4f8b",id:"3-\u5e38\u7528\u793a\u4f8b",level:3},{value:"4. \u5feb\u901f\u53c2\u8003",id:"4-\u5feb\u901f\u53c2\u8003",level:3}];function x(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"\u2b50\u7528\u6237\u5bc6\u7801\u6548\u671f\u7ba1\u7406"}),"\n",(0,d.jsxs)(n.h2,{id:"linux-chage-\u547d\u4ee4",children:["Linux ",(0,d.jsx)(n.code,{children:"chage"})," \u547d\u4ee4"]}),"\n",(0,d.jsx)(n.h3,{id:"1-\u7b80\u4ecb",children:"1. \u7b80\u4ecb"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"chage"})," \u7528\u4e8e\u7ba1\u7406\u7528\u6237\u5bc6\u7801\u7684\u6709\u6548\u671f\u548c\u8d26\u6237\u8fc7\u671f\u8bbe\u7f6e\u3002\u7ba1\u7406\u5458\u53ef\u901a\u8fc7\u8be5\u547d\u4ee4\u8bbe\u7f6e\u5bc6\u7801\u5230\u671f\u65f6\u95f4\u3001\u8b66\u544a\u671f\u3001\u8d26\u6237\u5931\u6548\u65f6\u95f4\u7b49\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"2-\u8bed\u6cd5",children:"2. \u8bed\u6cd5"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"chage [\u9009\u9879] \u7528\u6237\u540d\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u5e38\u7528\u9009\u9879"}),"\uff1a","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"-l"}),"\uff1a\u663e\u793a\u7528\u6237\u5bc6\u7801\u548c\u8d26\u6237\u4fe1\u606f\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"-m"}),"\uff1a\u8bbe\u7f6e\u5bc6\u7801\u4fee\u6539\u7684\u6700\u5c0f\u95f4\u9694\u5929\u6570\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"-M"}),"\uff1a\u8bbe\u7f6e\u5bc6\u7801\u7684\u6700\u5927\u6709\u6548\u5929\u6570\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"-W"}),"\uff1a\u8bbe\u7f6e\u5bc6\u7801\u8fc7\u671f\u524d\u7684\u8b66\u544a\u5929\u6570\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"-E"}),"\uff1a\u8bbe\u7f6e\u8d26\u6237\u5931\u6548\u65e5\u671f\uff08\u683c\u5f0f\u4e3a ",(0,d.jsx)(n.code,{children:"YYYY-MM-DD"})," \u6216 ",(0,d.jsx)(n.code,{children:"-1"})," \u8868\u793a\u6c38\u4e0d\u8fc7\u671f\uff09\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"-I"}),"\uff1a\u8bbe\u7f6e\u5bc6\u7801\u8fc7\u671f\u540e\u8d26\u6237\u88ab\u9501\u5b9a\u524d\u7684\u5bbd\u9650\u5929\u6570\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"3-\u5e38\u7528\u793a\u4f8b",children:"3. \u5e38\u7528\u793a\u4f8b"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u67e5\u770b\u7528\u6237\u5bc6\u7801\u548c\u8d26\u6237\u4fe1\u606f"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"chage -l \u7528\u6237\u540d\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"Last password change          : Dec 30, 2024\nPassword expires              : Never\nPassword inactive             : Never\nAccount expires               : Never\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u8bbe\u7f6e\u5bc6\u7801\u7684\u6709\u6548\u671f\u4e3a 90 \u5929"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"chage -M 90 \u7528\u6237\u540d\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u8bbe\u7f6e\u5bc6\u7801\u8fc7\u671f\u524d\u8b66\u544a\u671f\u4e3a 7 \u5929"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"chage -W 7 \u7528\u6237\u540d\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u8bbe\u7f6e\u8d26\u6237\u5728 2025-12-31 \u5931\u6548"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"chage -E 2025-12-31 \u7528\u6237\u540d\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u53d6\u6d88\u8d26\u6237\u5931\u6548\u9650\u5236"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"chage -E -1 \u7528\u6237\u540d\n"})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"4-\u5feb\u901f\u53c2\u8003",children:"4. \u5feb\u901f\u53c2\u8003"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u529f\u80fd"}),(0,d.jsx)(n.th,{children:"\u547d\u4ee4\u793a\u4f8b"}),(0,d.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u67e5\u770b\u8d26\u6237\u4fe1\u606f"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"chage -l \u7528\u6237\u540d"})}),(0,d.jsx)(n.td,{children:"\u663e\u793a\u5bc6\u7801\u4e0e\u8d26\u6237\u76f8\u5173\u4fe1\u606f"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u8bbe\u7f6e\u5bc6\u7801\u6700\u5927\u6709\u6548\u671f"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"chage -M \u5929\u6570 \u7528\u6237\u540d"})}),(0,d.jsx)(n.td,{children:"\u5bc6\u7801\u5728\u8bbe\u5b9a\u5929\u6570\u540e\u8fc7\u671f"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u8bbe\u7f6e\u8b66\u544a\u5929\u6570"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"chage -W \u5929\u6570 \u7528\u6237\u540d"})}),(0,d.jsx)(n.td,{children:"\u5bc6\u7801\u8fc7\u671f\u524d\u7684\u8b66\u544a\u5929\u6570"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u8bbe\u7f6e\u8d26\u6237\u5931\u6548\u65e5\u671f"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"chage -E \u65e5\u671f \u7528\u6237\u540d"})}),(0,d.jsxs)(n.td,{children:["\u683c\u5f0f\u4e3a ",(0,d.jsx)(n.code,{children:"YYYY-MM-DD"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u53d6\u6d88\u8d26\u6237\u5931\u6548\u9650\u5236"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"chage -E -1 \u7528\u6237\u540d"})}),(0,d.jsx)(n.td,{children:"\u8bbe\u7f6e\u8d26\u6237\u6c38\u4e0d\u8fc7\u671f"})]})]})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.p,{children:["\u5e0c\u671b\u8fd9\u7bc7\u6559\u7a0b\u5e2e\u52a9\u4f60\u638c\u63e1 ",(0,d.jsx)(n.code,{children:"chage"})," \u547d\u4ee4\uff01\u8bb0\u5f97\u6536\u85cf ",(0,d.jsx)(n.a,{href:"https://www.zxzsk.com",children:(0,d.jsx)(n.strong,{children:"\u5728\u7ebf\u77e5\u8bc6\u5e93"})}),"\uff01\ud83d\ude0a"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var c=s(6540);const d={},r=c.createContext(d);function l(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);