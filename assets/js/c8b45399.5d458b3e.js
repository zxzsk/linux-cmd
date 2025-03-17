"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9134],{284:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>j,frontMatter:()=>i,metadata:()=>d,toc:()=>t});const d=JSON.parse('{"id":"\u6587\u4ef6\u7ba1\u7406/\u67e5\u770b\u3001\u67e5\u627e\u3001\u6bd4\u8f83/cmp","title":"cmp","description":"\u6bd4\u8f83\u6587\u4ef6\u5dee\u5f02","source":"@site/docs/20-\u6587\u4ef6\u7ba1\u7406/\u67e5\u770b\u3001\u67e5\u627e\u3001\u6bd4\u8f83/cmp.md","sourceDirName":"20-\u6587\u4ef6\u7ba1\u7406/\u67e5\u770b\u3001\u67e5\u627e\u3001\u6bd4\u8f83","slug":"/a1268a24","permalink":"/a1268a24","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/20-\u6587\u4ef6\u7ba1\u7406/\u67e5\u770b\u3001\u67e5\u627e\u3001\u6bd4\u8f83/cmp.md","tags":[],"version":"current","lastUpdatedAt":1742246204000,"frontMatter":{"slug":"/a1268a24"},"sidebar":"\u6587\u4ef6\u7ba1\u7406","previous":{"title":"cd","permalink":"/b7e9a012"},"next":{"title":"diff","permalink":"/cf851f19"}}');var s=c(4848),l=c(8453);const i={slug:"/a1268a24"},r=void 0,h={},t=[{value:"1. \u7b80\u4ecb",id:"1-\u7b80\u4ecb",level:2},{value:"<code>cmp</code> \u7684\u57fa\u672c\u8bed\u6cd5",id:"cmp-\u7684\u57fa\u672c\u8bed\u6cd5",level:3},{value:"2. \u5e38\u89c1\u64cd\u4f5c\u6982\u89c8 \ud83d\udccb",id:"2-\u5e38\u89c1\u64cd\u4f5c\u6982\u89c8-",level:2},{value:"3. \u547d\u4ee4\u793a\u4f8b \u26a1",id:"3-\u547d\u4ee4\u793a\u4f8b-",level:2},{value:"3.1 \u6bd4\u8f83\u4e24\u4e2a\u6587\u4ef6",id:"31-\u6bd4\u8f83\u4e24\u4e2a\u6587\u4ef6",level:3},{value:"3.2 \u663e\u793a\u4e0d\u540c\u5b57\u8282\u7684\u504f\u79fb\u91cf",id:"32-\u663e\u793a\u4e0d\u540c\u5b57\u8282\u7684\u504f\u79fb\u91cf",level:3},{value:"3.3 \u663e\u793a\u6587\u4ef6\u4e4b\u95f4\u7684\u6240\u6709\u5dee\u5f02",id:"33-\u663e\u793a\u6587\u4ef6\u4e4b\u95f4\u7684\u6240\u6709\u5dee\u5f02",level:3},{value:"3.4 \u53ea\u68c0\u67e5\u6587\u4ef6\u662f\u5426\u76f8\u540c",id:"34-\u53ea\u68c0\u67e5\u6587\u4ef6\u662f\u5426\u76f8\u540c",level:3},{value:"3.5 \u4ece\u7279\u5b9a\u4f4d\u7f6e\u5f00\u59cb\u6bd4\u8f83",id:"35-\u4ece\u7279\u5b9a\u4f4d\u7f6e\u5f00\u59cb\u6bd4\u8f83",level:3},{value:"4. \u5e38\u7528\u9009\u9879 \ud83d\udcdd",id:"4-\u5e38\u7528\u9009\u9879-",level:2},{value:"5. \u5c0f\u8d34\u58eb \ud83d\udca1",id:"5-\u5c0f\u8d34\u58eb-",level:2},{value:"6. \u603b\u7ed3 \ud83c\udfaf",id:"6-\u603b\u7ed3-",level:2}];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u6bd4\u8f83\u6587\u4ef6\u5dee\u5f02"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"cmp"})," \u547d\u4ee4\u5728 Linux \u4e2d\u7528\u4e8e\u6bd4\u8f83\u4e24\u4e2a\u6587\u4ef6\uff0c\u9010\u5b57\u8282\u68c0\u67e5\u5b83\u4eec\u7684\u5dee\u5f02\u3002\u8fd9\u4e2a\u547d\u4ee4\u7279\u522b\u9002\u7528\u4e8e\u4e8c\u8fdb\u5236\u6587\u4ef6\u6bd4\u8f83\uff0c\u56e0\u4e3a\u5b83\u80fd\u51c6\u786e\u5730\u627e\u5230\u6587\u4ef6\u4e2d\u4e0d\u540c\u4e4b\u5904\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u6587\u672c\u5dee\u5f02\u3002",(0,s.jsx)(n.code,{children:"cmp"})," \u5e38\u7528\u4e8e\u6587\u4ef6\u5bf9\u6bd4\u3001\u6570\u636e\u9a8c\u8bc1\u548c\u6587\u4ef6\u540c\u6b65\u7b49\u573a\u666f\u3002\ud83d\udcc1"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"1-\u7b80\u4ecb",children:"1. \u7b80\u4ecb"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"cmp"})," \u547d\u4ee4\u7528\u4e8e\u9010\u5b57\u8282\u6bd4\u8f83\u4e24\u4e2a\u6587\u4ef6\uff0c\u663e\u793a\u7b2c\u4e00\u4e2a\u4e0d\u540c\u5b57\u8282\u7684\u504f\u79fb\u91cf\u548c\u6240\u5728\u884c\u3002\u5982\u679c\u6587\u4ef6\u5b8c\u5168\u76f8\u540c\uff0c",(0,s.jsx)(n.code,{children:"cmp"})," \u4e0d\u4f1a\u8f93\u51fa\u4efb\u4f55\u4fe1\u606f\u3002\u8be5\u547d\u4ee4\u7279\u522b\u9002\u7528\u4e8e\u4e8c\u8fdb\u5236\u6587\u4ef6\u7684\u6bd4\u8f83\uff0c\u56e0\u4e3a\u5b83\u80fd\u51c6\u786e\u5730\u663e\u793a\u6587\u4ef6\u5185\u5bb9\u7684\u5dee\u5f02\u3002"]}),"\n",(0,s.jsxs)(n.h3,{id:"cmp-\u7684\u57fa\u672c\u8bed\u6cd5",children:[(0,s.jsx)(n.code,{children:"cmp"})," \u7684\u57fa\u672c\u8bed\u6cd5"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cmp [\u9009\u9879] <\u6587\u4ef61> <\u6587\u4ef62>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"2-\u5e38\u89c1\u64cd\u4f5c\u6982\u89c8-",children:"2. \u5e38\u89c1\u64cd\u4f5c\u6982\u89c8 \ud83d\udccb"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u64cd\u4f5c"}),(0,s.jsx)(n.th,{children:"\u547d\u4ee4\u683c\u5f0f"}),(0,s.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u6bd4\u8f83\u4e24\u4e2a\u6587\u4ef6"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"cmp <\u6587\u4ef61> <\u6587\u4ef62>"})}),(0,s.jsxs)(n.td,{children:["\u6bd4\u8f83 ",(0,s.jsx)(n.code,{children:"\u6587\u4ef61"})," \u548c ",(0,s.jsx)(n.code,{children:"\u6587\u4ef62"}),"\uff0c\u5e76\u8f93\u51fa\u5dee\u5f02\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u663e\u793a\u5dee\u5f02\u7684\u5b57\u8282\u504f\u79fb"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"cmp -b <\u6587\u4ef61> <\u6587\u4ef62>"})}),(0,s.jsx)(n.td,{children:"\u663e\u793a\u4e24\u4e2a\u6587\u4ef6\u4e2d\u4e0d\u540c\u5b57\u8282\u7684\u504f\u79fb\u91cf\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u663e\u793a\u8be6\u7ec6\u5dee\u5f02"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"cmp -l <\u6587\u4ef61> <\u6587\u4ef62>"})}),(0,s.jsx)(n.td,{children:"\u5217\u51fa\u6587\u4ef6\u4e4b\u95f4\u6240\u6709\u4e0d\u540c\u5b57\u8282\u7684\u504f\u79fb\u548c\u5185\u5bb9\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u5ffd\u7565\u7a7a\u683c\u5b57\u7b26"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"cmp -i <\u504f\u79fb\u91cf> <\u6587\u4ef61> <\u6587\u4ef62>"})}),(0,s.jsx)(n.td,{children:"\u4ece\u6307\u5b9a\u504f\u79fb\u91cf\u4f4d\u7f6e\u5f00\u59cb\u6bd4\u8f83\u4e24\u4e2a\u6587\u4ef6\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u53ea\u663e\u793a\u662f\u5426\u76f8\u540c"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"cmp -s <\u6587\u4ef61> <\u6587\u4ef62>"})}),(0,s.jsx)(n.td,{children:"\u53ea\u8f93\u51fa\u6587\u4ef6\u662f\u5426\u76f8\u540c\uff0c\u4e0d\u663e\u793a\u5176\u4ed6\u4fe1\u606f\u3002"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"3-\u547d\u4ee4\u793a\u4f8b-",children:"3. \u547d\u4ee4\u793a\u4f8b \u26a1"}),"\n",(0,s.jsx)(n.h3,{id:"31-\u6bd4\u8f83\u4e24\u4e2a\u6587\u4ef6",children:"3.1 \u6bd4\u8f83\u4e24\u4e2a\u6587\u4ef6"}),"\n",(0,s.jsxs)(n.p,{children:["\u6700\u57fa\u672c\u7684\u7528\u6cd5\u662f\u76f4\u63a5\u6bd4\u8f83\u4e24\u4e2a\u6587\u4ef6\uff0c",(0,s.jsx)(n.code,{children:"cmp"})," \u4f1a\u8f93\u51fa\u7b2c\u4e00\u4e2a\u4e0d\u540c\u5b57\u8282\u7684\u504f\u79fb\u91cf\u548c\u6240\u5728\u884c\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# highlight-start\n$ echo aa >a.txt\n$ echo ab >b.txt\n$ cmp a.txt b.txt\n# highlight-end\na.txt b.txt \u4e0d\u540c\uff1a\u7b2c 2 \u5b57\u8282\uff0c\u7b2c 1 \u884c\n"})}),"\n",(0,s.jsx)(n.h3,{id:"32-\u663e\u793a\u4e0d\u540c\u5b57\u8282\u7684\u504f\u79fb\u91cf",children:"3.2 \u663e\u793a\u4e0d\u540c\u5b57\u8282\u7684\u504f\u79fb\u91cf"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"-b"})," \u9009\u9879\u53ef\u4ee5\u663e\u793a\u4e0d\u540c\u5b57\u8282\u7684\u504f\u79fb\u91cf\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# highlight-next-line\n$ cmp -b a.txt b.txt\na.txt b.txt \u4e0d\u540c\uff1a\u7b2c 1 \u884c\uff0c\u7b2c 2 \u5b57\u8282\u4e3a 141 a 142 b\n"})}),"\n",(0,s.jsx)(n.h3,{id:"33-\u663e\u793a\u6587\u4ef6\u4e4b\u95f4\u7684\u6240\u6709\u5dee\u5f02",children:"3.3 \u663e\u793a\u6587\u4ef6\u4e4b\u95f4\u7684\u6240\u6709\u5dee\u5f02"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"-l"})," \u9009\u9879\uff0c",(0,s.jsx)(n.code,{children:"cmp"})," \u4f1a\u5217\u51fa\u6587\u4ef6\u4e4b\u95f4\u6240\u6709\u4e0d\u540c\u5b57\u8282\u7684\u504f\u79fb\u91cf\u548c\u5185\u5bb9\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ echo aaa >a.txt\n$ echo abc >b.txt\n$ cmp -l a.txt b.txt\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"2 141 142\n3 141 143\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8868\u793a\u5728\u7b2c 2 \u5b57\u8282\u4f4d\u7f6e\uff0c\u6587\u4ef6 ",(0,s.jsx)(n.code,{children:"a.txt"})," \u7684\u5b57\u8282\u662f 141\uff0c\u800c ",(0,s.jsx)(n.code,{children:"b.txt"})," \u7684\u5b57\u8282\u662f 142\uff0c\u4f9d\u6b64\u7c7b\u63a8\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"34-\u53ea\u68c0\u67e5\u6587\u4ef6\u662f\u5426\u76f8\u540c",children:"3.4 \u53ea\u68c0\u67e5\u6587\u4ef6\u662f\u5426\u76f8\u540c"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"-s"})," \u9009\u9879\uff0c",(0,s.jsx)(n.code,{children:"cmp"})," \u4f1a\u53ea\u8f93\u51fa\u662f\u5426\u76f8\u540c\uff0c\u800c\u4e0d\u4f1a\u663e\u793a\u8be6\u7ec6\u7684\u5dee\u5f02\uff1a"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u6587\u4ef6\u76f8\u540c\uff0c",(0,s.jsx)(n.code,{children:"cmp"})," \u4e0d\u4f1a\u8f93\u51fa\u4efb\u4f55\u5185\u5bb9\u3002\u5982\u679c\u6587\u4ef6\u4e0d\u540c\uff0c\u5b83\u4f1a\u8fd4\u56de\u4e00\u4e2a\u975e\u96f6\u7684\u9000\u51fa\u72b6\u6001\uff0c\u65b9\u4fbf\u811a\u672c\u4f7f\u7528\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# highlight-start\n$ cmp -s a.txt b.txt\n$ echo $?\n# highlight-end\n1  # \u5982\u679c\u6587\u4ef6\u4e0d\u540c\n"})}),"\n",(0,s.jsx)(n.h3,{id:"35-\u4ece\u7279\u5b9a\u4f4d\u7f6e\u5f00\u59cb\u6bd4\u8f83",children:"3.5 \u4ece\u7279\u5b9a\u4f4d\u7f6e\u5f00\u59cb\u6bd4\u8f83"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"-i"})," \u9009\u9879\uff0c\u53ef\u4ee5\u4ece\u6307\u5b9a\u504f\u79fb\u91cf\u7684\u4f4d\u7f6e\u5f00\u59cb\u6bd4\u8f83\u4e24\u4e2a\u6587\u4ef6\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ cmp -i 10 a.txt b.txt\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6b64\u547d\u4ee4\u5c06\u4ece\u7b2c 10 \u5b57\u8282\u5f00\u59cb\u6bd4\u8f83 ",(0,s.jsx)(n.code,{children:"a.txt"})," \u548c ",(0,s.jsx)(n.code,{children:"b.txt"}),"\uff0c\u8df3\u8fc7\u524d 10 \u4e2a\u5b57\u8282\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"4-\u5e38\u7528\u9009\u9879-",children:"4. \u5e38\u7528\u9009\u9879 \ud83d\udcdd"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-b"}),"\uff1a\u663e\u793a\u4e0d\u540c\u5b57\u8282\u7684\u504f\u79fb\u91cf\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-l"}),"\uff1a\u5217\u51fa\u6240\u6709\u4e0d\u540c\u5b57\u8282\u7684\u504f\u79fb\u91cf\u548c\u5185\u5bb9\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-s"}),"\uff1a\u53ea\u663e\u793a\u6587\u4ef6\u662f\u5426\u76f8\u540c\uff0c\u4e0d\u8f93\u51fa\u8be6\u7ec6\u4fe1\u606f\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-i <\u504f\u79fb\u91cf>"}),"\uff1a\u4ece\u6307\u5b9a\u7684\u5b57\u8282\u504f\u79fb\u91cf\u5f00\u59cb\u6bd4\u8f83\u6587\u4ef6\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-n <\u5b57\u8282\u6570>"}),"\uff1a\u6bd4\u8f83\u524d n \u4e2a\u5b57\u8282\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-v"}),"\uff1a\u663e\u793a\u7248\u672c\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"5-\u5c0f\u8d34\u58eb-",children:"5. \u5c0f\u8d34\u58eb \ud83d\udca1"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cmp"})," \u547d\u4ee4\u7279\u522b\u9002\u7528\u4e8e\u4e8c\u8fdb\u5236\u6587\u4ef6\u6bd4\u8f83\uff0c\u5bf9\u4e8e\u6587\u672c\u6587\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"diff"})," \u547d\u4ee4\u8fdb\u884c\u66f4\u65b9\u4fbf\u7684\u5bf9\u6bd4\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cmp"})," \u9002\u5408\u7528\u4e8e\u9a8c\u8bc1\u6587\u4ef6\u662f\u5426\u5b8c\u5168\u4e00\u81f4\uff0c\u7279\u522b\u662f\u5728\u6587\u4ef6\u4f20\u8f93\u540e\u6216\u5907\u4efd\u6062\u590d\u65f6\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c\u4f60\u60f3\u68c0\u67e5\u4e24\u4e2a\u6587\u4ef6\u662f\u5426\u76f8\u540c\uff0c\u5e76\u4e14\u53ea\u5173\u5fc3\u7ed3\u679c\u800c\u4e0d\u9700\u8981\u770b\u5230\u5dee\u5f02\uff0c",(0,s.jsx)(n.code,{children:"-s"})," \u9009\u9879\u975e\u5e38\u6709\u7528\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"6-\u603b\u7ed3-",children:"6. \u603b\u7ed3 \ud83c\udfaf"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"cmp"})," \u547d\u4ee4\u662f\u4e00\u4e2a\u7b80\u5355\u800c\u5f3a\u5927\u7684\u5de5\u5177\uff0c\u7279\u522b\u9002\u5408\u5728 Linux \u4e2d\u8fdb\u884c\u6587\u4ef6\u6bd4\u8f83\u3002\u65e0\u8bba\u662f\u68c0\u67e5\u4e8c\u8fdb\u5236\u6587\u4ef6\u7684\u5dee\u5f02\uff0c\u8fd8\u662f\u9a8c\u8bc1\u6587\u4ef6\u5728\u4f20\u8f93\u8fc7\u7a0b\u4e2d\u662f\u5426\u53d1\u751f\u53d8\u5316\uff0c",(0,s.jsx)(n.code,{children:"cmp"})," \u90fd\u80fd\u5e2e\u4f60\u5feb\u901f\u5b9a\u4f4d\u4e0d\u540c\u4e4b\u5904\u3002\u901a\u8fc7\u7ed3\u5408\u4e0d\u540c\u7684\u9009\u9879\uff0c",(0,s.jsx)(n.code,{children:"cmp"})," \u63d0\u4f9b\u4e86\u7075\u6d3b\u591a\u6837\u7684\u6bd4\u8f83\u65b9\u5f0f\uff0c\u8ba9\u4f60\u53ef\u4ee5\u8f7b\u677e\u5b8c\u6210\u5404\u79cd\u6587\u4ef6\u5bf9\u6bd4\u4efb\u52a1\u3002\ud83c\udfaf"]}),"\n",(0,s.jsx)(n.p,{children:"\u603b\u7684\u6765\u8bf4\u7528\u9014\u975e\u5e38\u51b7\u95e8\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u5e0c\u671b\u8fd9\u7bc7\u6559\u7a0b\u5e2e\u52a9\u4f60\u638c\u63e1\u5982\u4f55\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"cmp"})," \u547d\u4ee4\uff01\u522b\u5fd8\u4e86\u6536\u85cf",(0,s.jsx)(n.strong,{children:"\u5728\u7ebf\u77e5\u8bc6\u5e93"}),"\uff08 ",(0,s.jsx)(n.a,{href:"http://www.zxzsk.com",children:"www.zxzsk.com"})," \uff09\u54e6\uff01\ud83d\ude0a"]})]})}function j(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},8453:(e,n,c)=>{c.d(n,{R:()=>i,x:()=>r});var d=c(6540);const s={},l=d.createContext(s);function i(e){const n=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);