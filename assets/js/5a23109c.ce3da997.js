"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2683],{8453:(e,n,l)=>{l.d(n,{R:()=>c,x:()=>i});var s=l(6540);const r={},d=s.createContext(r);function c(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(d.Provider,{value:n},e.children)}},9776:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>h,contentTitle:()=>i,default:()=>j,frontMatter:()=>c,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"\u6587\u672c\u5904\u7406/grep","title":"grep","description":"\u2b50\u2b50\u2b50\u6587\u672c\u4e09\u5251\u5ba2\u4e4b\u4e00\uff0c\u6587\u672c\u641c\u7d22\u5de5\u5177\u3002","source":"@site/docs/25-\u6587\u672c\u5904\u7406/grep.md","sourceDirName":"25-\u6587\u672c\u5904\u7406","slug":"/cc13f84a","permalink":"/cc13f84a","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/25-\u6587\u672c\u5904\u7406/grep.md","tags":[],"version":"current","lastUpdatedAt":1742246204000,"frontMatter":{"slug":"/cc13f84a"},"sidebar":"\u6587\u672c\u5904\u7406","previous":{"title":"echo","permalink":"/383990fd"},"next":{"title":"head","permalink":"/a499fb00"}}');var r=l(4848),d=l(8453);const c={slug:"/cc13f84a"},i=void 0,h={},o=[{value:"1. \u547d\u4ee4\u7b80\u4ecb",id:"1-\u547d\u4ee4\u7b80\u4ecb",level:2},{value:"2. \u547d\u4ee4\u8bed\u6cd5",id:"2-\u547d\u4ee4\u8bed\u6cd5",level:2},{value:"3. \u5e38\u89c1\u9009\u9879",id:"3-\u5e38\u89c1\u9009\u9879",level:2},{value:"4. \u57fa\u672c\u7528\u6cd5",id:"4-\u57fa\u672c\u7528\u6cd5",level:2},{value:"4.1 <strong>\u57fa\u672c\u641c\u7d22</strong>",id:"41-\u57fa\u672c\u641c\u7d22",level:3},{value:"4.2 <strong>\u5ffd\u7565\u5927\u5c0f\u5199</strong>",id:"42-\u5ffd\u7565\u5927\u5c0f\u5199",level:3},{value:"4.3 <strong>\u663e\u793a\u5339\u914d\u884c\u7684\u884c\u53f7</strong>",id:"43-\u663e\u793a\u5339\u914d\u884c\u7684\u884c\u53f7",level:3},{value:"4.4 <strong>\u9012\u5f52\u641c\u7d22</strong>",id:"44-\u9012\u5f52\u641c\u7d22",level:3},{value:"4.5 <strong>\u663e\u793a\u5339\u914d\u7684\u6587\u4ef6\u540d</strong>",id:"45-\u663e\u793a\u5339\u914d\u7684\u6587\u4ef6\u540d",level:3},{value:"4.6 <strong>\u53ea\u663e\u793a\u5339\u914d\u7684\u90e8\u5206</strong>",id:"46-\u53ea\u663e\u793a\u5339\u914d\u7684\u90e8\u5206",level:3},{value:"4.7 <strong>\u53cd\u8f6c\u5339\u914d</strong>",id:"47-\u53cd\u8f6c\u5339\u914d",level:3},{value:"4.8 <strong>\u5339\u914d\u6574\u4e2a\u5355\u8bcd</strong>",id:"48-\u5339\u914d\u6574\u4e2a\u5355\u8bcd",level:3},{value:"4.9 <strong>\u663e\u793a\u5339\u914d\u884c\u524d\u540e\u7684\u5185\u5bb9</strong>",id:"49-\u663e\u793a\u5339\u914d\u884c\u524d\u540e\u7684\u5185\u5bb9",level:3},{value:"5. \u547d\u4ee4\u793a\u4f8b",id:"5-\u547d\u4ee4\u793a\u4f8b",level:2},{value:"5.1 <strong>\u641c\u7d22\u5355\u4e2a\u6587\u4ef6</strong>",id:"51-\u641c\u7d22\u5355\u4e2a\u6587\u4ef6",level:3},{value:"5.2 <strong>\u5ffd\u7565\u5927\u5c0f\u5199</strong>",id:"52-\u5ffd\u7565\u5927\u5c0f\u5199",level:3},{value:"5.3 <strong>\u9012\u5f52\u641c\u7d22\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6</strong>",id:"53-\u9012\u5f52\u641c\u7d22\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6",level:3},{value:"5.4 <strong>\u663e\u793a\u5339\u914d\u884c\u7684\u884c\u53f7</strong>",id:"54-\u663e\u793a\u5339\u914d\u884c\u7684\u884c\u53f7",level:3},{value:"5.5 <strong>\u53ea\u663e\u793a\u5339\u914d\u7684\u6587\u4ef6\u540d</strong>",id:"55-\u53ea\u663e\u793a\u5339\u914d\u7684\u6587\u4ef6\u540d",level:3},{value:"5.6 <strong>\u53cd\u8f6c\u5339\u914d</strong>",id:"56-\u53cd\u8f6c\u5339\u914d",level:3},{value:"6. \u603b\u7ed3",id:"6-\u603b\u7ed3",level:2}];function x(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u2b50\u2b50\u2b50\u6587\u672c\u4e09\u5251\u5ba2\u4e4b\u4e00\uff0c\u6587\u672c\u641c\u7d22\u5de5\u5177\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"1-\u547d\u4ee4\u7b80\u4ecb",children:"1. \u547d\u4ee4\u7b80\u4ecb"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"grep"})," \u662f Linux \u7cfb\u7edf\u4e2d\u6700\u5e38\u7528\u7684\u6587\u672c\u641c\u7d22\u5de5\u5177\u4e4b\u4e00\uff0c\u5b83\u80fd\u591f\u5728\u6307\u5b9a\u7684\u6587\u4ef6\u4e2d\u67e5\u627e\u7b26\u5408\u6761\u4ef6\u7684\u884c\uff0c\u5e76\u8f93\u51fa\u5339\u914d\u7ed3\u679c\u3002\ud83d\udca1"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"grep"})," \u7684\u540d\u5b57\u6765\u6e90\u4e8e \u201cGlobal Regular Expression Print\u201d\uff0c\u610f\u601d\u662f\u5168\u5c40\u6b63\u5219\u8868\u8fbe\u5f0f\u6253\u5370\u3002\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"grep"}),"\uff0c\u4f60\u53ef\u4ee5\u975e\u5e38\u9ad8\u6548\u5730\u5728\u6d77\u91cf\u6587\u672c\u4e2d\u627e\u5230\u81ea\u5df1\u9700\u8981\u7684\u4fe1\u606f\uff0c\u5c24\u5176\u5728\u65e5\u5fd7\u5206\u6790\u548c\u6570\u636e\u5904\u7406\u65f6\u7279\u522b\u6709\u7528\u3002\ud83d\udd0d"]}),"\n",(0,r.jsxs)(n.p,{children:["\u638c\u63e1 ",(0,r.jsx)(n.code,{children:"grep"}),"\uff0c\u8ba9\u4f60\u5728\u547d\u4ee4\u884c\u4e2d\u641c\u7d22\u6587\u672c\u7684\u80fd\u529b\u66f4\u4e0a\u4e00\u5c42\u697c\uff01\ud83d\ude80"]}),"\n",(0,r.jsx)(n.h2,{id:"2-\u547d\u4ee4\u8bed\u6cd5",children:"2. \u547d\u4ee4\u8bed\u6cd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"grep [\u9009\u9879] 'pattern' [\u6587\u4ef6]\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pattern"}),"\uff1a\u4f60\u60f3\u8981\u641c\u7d22\u7684\u6a21\u5f0f\uff08\u6b63\u5219\u8868\u8fbe\u5f0f\u6216\u5b57\u7b26\u4e32\uff09\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"\u6587\u4ef6"}),"\uff1a\u8981\u641c\u7d22\u7684\u6587\u4ef6\uff0c\u5982\u679c\u7701\u7565\u6587\u4ef6\u53c2\u6570\uff0c",(0,r.jsx)(n.code,{children:"grep"})," \u4f1a\u4ece\u6807\u51c6\u8f93\u5165\u4e2d\u8bfb\u53d6\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"3-\u5e38\u89c1\u9009\u9879",children:"3. \u5e38\u89c1\u9009\u9879"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-i"}),"\uff1a\u5ffd\u7565\u5927\u5c0f\u5199\u8fdb\u884c\u5339\u914d\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-v"}),"\uff1a\u53cd\u8f6c\u5339\u914d\uff0c\u8f93\u51fa\u4e0d\u5339\u914d\u6a21\u5f0f\u7684\u884c\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-r"})," \u6216 ",(0,r.jsx)(n.code,{children:"-R"}),"\uff1a\u9012\u5f52\u5730\u641c\u7d22\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-l"}),"\uff1a\u53ea\u8f93\u51fa\u5339\u914d\u5230\u7684\u6587\u4ef6\u540d\uff0c\u4e0d\u663e\u793a\u5177\u4f53\u5339\u914d\u5185\u5bb9\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-n"}),"\uff1a\u663e\u793a\u5339\u914d\u884c\u7684\u884c\u53f7\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-c"}),"\uff1a\u663e\u793a\u5339\u914d\u884c\u7684\u6570\u91cf\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-H"}),"\uff1a\u8f93\u51fa\u6587\u4ef6\u540d\uff0c\u5373\u4f7f\u53ea\u6307\u5b9a\u4e86\u4e00\u4e2a\u6587\u4ef6\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-o"}),"\uff1a\u53ea\u8f93\u51fa\u5339\u914d\u7684\u90e8\u5206\uff0c\u800c\u4e0d\u662f\u6574\u884c\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-w"}),"\uff1a\u53ea\u5339\u914d\u6574\u4e2a\u5355\u8bcd\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"4-\u57fa\u672c\u7528\u6cd5",children:"4. \u57fa\u672c\u7528\u6cd5"}),"\n",(0,r.jsxs)(n.h3,{id:"41-\u57fa\u672c\u641c\u7d22",children:["4.1 ",(0,r.jsx)(n.strong,{children:"\u57fa\u672c\u641c\u7d22"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u6700\u57fa\u672c\u7684\u7528\u6cd5\u5c31\u662f\u641c\u7d22\u67d0\u4e2a\u5b57\u7b26\u4e32\u6216\u6b63\u5219\u8868\u8fbe\u5f0f\u3002\u6bd4\u5982\uff0c\u641c\u7d22\u6587\u4ef6 ",(0,r.jsx)(n.code,{children:"file.txt"})," \u4e2d\u5305\u542b ",(0,r.jsx)(n.code,{children:"hello"})," \u7684\u884c\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ grep 'hello' file.txt\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u8f93\u51fa\u6240\u6709\u5305\u542b ",(0,r.jsx)(n.code,{children:"hello"})," \u7684\u884c\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"42-\u5ffd\u7565\u5927\u5c0f\u5199",children:["4.2 ",(0,r.jsx)(n.strong,{children:"\u5ffd\u7565\u5927\u5c0f\u5199"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"-i"})," \u9009\u9879\u6765\u5ffd\u7565\u5927\u5c0f\u5199\uff0c\u8fdb\u884c\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u7684\u5339\u914d\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ grep -i 'hello' file.txt\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u65e0\u8bba\u662f ",(0,r.jsx)(n.code,{children:"hello"}),"\u3001",(0,r.jsx)(n.code,{children:"HELLO"})," \u8fd8\u662f ",(0,r.jsx)(n.code,{children:"HeLlO"}),"\uff0c\u90fd\u4f1a\u5339\u914d\u5230\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"43-\u663e\u793a\u5339\u914d\u884c\u7684\u884c\u53f7",children:["4.3 ",(0,r.jsx)(n.strong,{children:"\u663e\u793a\u5339\u914d\u884c\u7684\u884c\u53f7"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"-n"})," \u9009\u9879\u53ef\u4ee5\u663e\u793a\u5339\u914d\u884c\u7684\u884c\u53f7\uff0c\u5e2e\u52a9\u4f60\u5feb\u901f\u5b9a\u4f4d\u5339\u914d\u7684\u4f4d\u7f6e\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ grep -n 'hello' file.txt\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8f93\u51fa\u4f1a\u663e\u793a\u884c\u53f7\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"3:hello world\n5:hello again\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"44-\u9012\u5f52\u641c\u7d22",children:["4.4 ",(0,r.jsx)(n.strong,{children:"\u9012\u5f52\u641c\u7d22"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u60f3\u5728\u6574\u4e2a\u76ee\u5f55\u4e2d\u641c\u7d22\u67d0\u4e2a\u6587\u672c\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"-r"})," \u6216 ",(0,r.jsx)(n.code,{children:"-R"})," \u9009\u9879\u6765\u9012\u5f52\u641c\u7d22\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ grep -r 'hello' /path/to/directory\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u4f1a\u641c\u7d22\u76ee\u5f55\u4e0b\u6240\u6709\u6587\u4ef6\u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"hello"}),"\uff0c\u5305\u62ec\u5b50\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"45-\u663e\u793a\u5339\u914d\u7684\u6587\u4ef6\u540d",children:["4.5 ",(0,r.jsx)(n.strong,{children:"\u663e\u793a\u5339\u914d\u7684\u6587\u4ef6\u540d"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u53ea\u5173\u5fc3\u54ea\u4e9b\u6587\u4ef6\u4e2d\u5305\u542b\u5339\u914d\u9879\uff0c\u800c\u4e0d\u5173\u5fc3\u5177\u4f53\u5339\u914d\u7684\u5185\u5bb9\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"-l"})," \u9009\u9879\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ grep -l 'hello' *.txt\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u4f1a\u663e\u793a\u6240\u6709\u5305\u542b ",(0,r.jsx)(n.code,{children:"hello"})," \u7684\u6587\u4ef6\u540d\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"46-\u53ea\u663e\u793a\u5339\u914d\u7684\u90e8\u5206",children:["4.6 ",(0,r.jsx)(n.strong,{children:"\u53ea\u663e\u793a\u5339\u914d\u7684\u90e8\u5206"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u6709\u65f6\u5019\uff0c\u4f60\u53ea\u5173\u5fc3\u5339\u914d\u7684\u5185\u5bb9\uff0c\u800c\u4e0d\u5173\u5fc3\u6574\u884c\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"-o"})," \u9009\u9879\uff0c\u5b83\u4f1a\u53ea\u8f93\u51fa\u5339\u914d\u7684\u90e8\u5206\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ grep -o 'hello' file.txt\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"47-\u53cd\u8f6c\u5339\u914d",children:["4.7 ",(0,r.jsx)(n.strong,{children:"\u53cd\u8f6c\u5339\u914d"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"-v"})," \u9009\u9879\u53ef\u4ee5\u7528\u4e8e\u8f93\u51fa\u6240\u6709\u4e0d\u5339\u914d\u7684\u884c\u3002\u4f8b\u5982\uff0c\u67e5\u627e\u4e0d\u5305\u542b ",(0,r.jsx)(n.code,{children:"hello"})," \u7684\u884c\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ grep -v 'hello' file.txt\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"48-\u5339\u914d\u6574\u4e2a\u5355\u8bcd",children:["4.8 ",(0,r.jsx)(n.strong,{children:"\u5339\u914d\u6574\u4e2a\u5355\u8bcd"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u6709\u65f6\u4f60\u53ea\u60f3\u5339\u914d\u5b8c\u6574\u7684\u5355\u8bcd\uff0c\u800c\u4e0d\u662f\u5339\u914d\u5b57\u7b26\u4e32\u7684\u4e00\u90e8\u5206\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"-w"})," \u9009\u9879\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ grep -w 'hello' file.txt\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u4f1a\u786e\u4fdd\u53ea\u5339\u914d ",(0,r.jsx)(n.code,{children:"hello"})," \u4f5c\u4e3a\u72ec\u7acb\u5355\u8bcd\u51fa\u73b0\u7684\u884c\uff0c\u800c\u4e0d\u4f1a\u5339\u914d\u5982 ",(0,r.jsx)(n.code,{children:"hello123"})," \u8fd9\u6837\u7684\u90e8\u5206\u5339\u914d\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"49-\u663e\u793a\u5339\u914d\u884c\u524d\u540e\u7684\u5185\u5bb9",children:["4.9 ",(0,r.jsx)(n.strong,{children:"\u663e\u793a\u5339\u914d\u884c\u524d\u540e\u7684\u5185\u5bb9"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u6709\u65f6\u5019\uff0c\u4f60\u53ef\u80fd\u60f3\u67e5\u770b\u5339\u914d\u884c\u7684\u4e0a\u4e0b\u6587\uff08\u5373\u524d\u540e\u51e0\u884c\uff09\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"-A"}),"\u3001",(0,r.jsx)(n.code,{children:"-B"})," \u6216 ",(0,r.jsx)(n.code,{children:"-C"})," \u9009\u9879\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-A N"}),"\uff1a\u663e\u793a\u5339\u914d\u884c\u53ca\u5176\u540e N \u884c\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-B N"}),"\uff1a\u663e\u793a\u5339\u914d\u884c\u53ca\u5176\u524d N \u884c\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-C N"}),"\uff1a\u663e\u793a\u5339\u914d\u884c\u53ca\u5176\u524d\u540e N \u884c\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u663e\u793a\u5339\u914d ",(0,r.jsx)(n.code,{children:"hello"})," \u884c\u4ee5\u53ca\u540e\u4e24\u884c\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ grep -A 2 'hello' file.txt\n"})}),"\n",(0,r.jsx)(n.h2,{id:"5-\u547d\u4ee4\u793a\u4f8b",children:"5. \u547d\u4ee4\u793a\u4f8b"}),"\n",(0,r.jsxs)(n.h3,{id:"51-\u641c\u7d22\u5355\u4e2a\u6587\u4ef6",children:["5.1 ",(0,r.jsx)(n.strong,{children:"\u641c\u7d22\u5355\u4e2a\u6587\u4ef6"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5047\u8bbe\u6587\u4ef6 ",(0,r.jsx)(n.code,{children:"data.txt"})," \u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"hello world\nhi there\nhello again\ngoodbye world\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"grep"})," \u641c\u7d22 ",(0,r.jsx)(n.code,{children:"hello"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ grep 'hello' data.txt\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"hello world\nhello again\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"52-\u5ffd\u7565\u5927\u5c0f\u5199",children:["5.2 ",(0,r.jsx)(n.strong,{children:"\u5ffd\u7565\u5927\u5c0f\u5199"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"-i"})," \u9009\u9879\u5ffd\u7565\u5927\u5c0f\u5199\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ grep -i 'hello' data.txt\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"hello world\nhello again\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"53-\u9012\u5f52\u641c\u7d22\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6",children:["5.3 ",(0,r.jsx)(n.strong,{children:"\u9012\u5f52\u641c\u7d22\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5047\u8bbe\u4f60\u60f3\u5728\u5f53\u524d\u76ee\u5f55\u53ca\u5176\u5b50\u76ee\u5f55\u4e2d\u67e5\u627e ",(0,r.jsx)(n.code,{children:"error"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ grep -r 'error' .\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"54-\u663e\u793a\u5339\u914d\u884c\u7684\u884c\u53f7",children:["5.4 ",(0,r.jsx)(n.strong,{children:"\u663e\u793a\u5339\u914d\u884c\u7684\u884c\u53f7"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"-n"})," \u663e\u793a\u884c\u53f7\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ grep -n 'hello' data.txt\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"1:hello world\n3:hello again\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"55-\u53ea\u663e\u793a\u5339\u914d\u7684\u6587\u4ef6\u540d",children:["5.5 ",(0,r.jsx)(n.strong,{children:"\u53ea\u663e\u793a\u5339\u914d\u7684\u6587\u4ef6\u540d"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u53ea\u663e\u793a\u5305\u542b ",(0,r.jsx)(n.code,{children:"error"})," \u7684\u6587\u4ef6\u540d\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ grep -l 'error' *.log\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"56-\u53cd\u8f6c\u5339\u914d",children:["5.6 ",(0,r.jsx)(n.strong,{children:"\u53cd\u8f6c\u5339\u914d"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u67e5\u627e\u4e0d\u5305\u542b ",(0,r.jsx)(n.code,{children:"hello"})," \u7684\u884c\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ grep -v 'hello' data.txt\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"hi there\ngoodbye world\n"})}),"\n",(0,r.jsx)(n.h2,{id:"6-\u603b\u7ed3",children:"6. \u603b\u7ed3"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"grep"})," \u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u6587\u672c\u641c\u7d22\u5de5\u5177\uff0c\u5b83\u4e0d\u4ec5\u80fd\u5e2e\u52a9\u4f60\u9ad8\u6548\u5730\u67e5\u627e\u6587\u672c\uff0c\u8fd8\u80fd\u7ed3\u5408\u5404\u79cd\u9009\u9879\u8fdb\u884c\u7075\u6d3b\u7684\u6587\u672c\u5904\u7406\u3002\u65e0\u8bba\u662f\u65e5\u5e38\u7684\u65e5\u5fd7\u5206\u6790\u3001\u4ee3\u7801\u67e5\u627e\uff0c\u8fd8\u662f\u6570\u636e\u63d0\u53d6\uff0c",(0,r.jsx)(n.code,{children:"grep"})," \u90fd\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684\u5de5\u5177\u4e4b\u4e00\u3002\ud83c\udfaf"]}),"\n",(0,r.jsxs)(n.p,{children:["\u638c\u63e1\u4e86 ",(0,r.jsx)(n.code,{children:"grep"}),"\uff0c\u4f60\u5c31\u80fd\u5728\u6d77\u91cf\u6570\u636e\u4e2d\u5feb\u901f\u627e\u5230\u5173\u952e\u4fe1\u606f\uff0c\u8ba9\u5de5\u4f5c\u53d8\u5f97\u66f4\u52a0\u9ad8\u6548\uff01\ud83d\udcbc"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5e0c\u671b\u8fd9\u7bc7\u6559\u7a0b\u80fd\u5e2e\u52a9\u4f60\u66f4\u597d\u5730\u7406\u89e3\u5e76\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"grep"}),"\uff01\u7ee7\u7eed\u63a2\u7d22\uff0c\u4f60\u4f1a\u53d1\u73b0\u66f4\u591a\u547d\u4ee4\u884c\u7684\u5965\u79d8\uff01\ud83d\udcaa"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:["\u8bb0\u5f97\u6536\u85cf",(0,r.jsx)(n.strong,{children:"\u5728\u7ebf\u77e5\u8bc6\u5e93"})," ",(0,r.jsx)(n.a,{href:"http://www.zxzsk.com",children:"www.zxzsk.com"}),"\uff0c\u83b7\u53d6\u66f4\u591a\u5b9e\u7528\u7684 Linux \u547d\u4ee4\u6280\u5de7\uff01\ud83d\udcda"]})]})}function j(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}}}]);