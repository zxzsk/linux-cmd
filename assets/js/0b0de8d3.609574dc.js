"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9685],{4397:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>h,contentTitle:()=>i,default:()=>x,frontMatter:()=>r,metadata:()=>n,toc:()=>t});const n=JSON.parse('{"id":"command/\u4e0e\u7528\u6237\u76f8\u5173/\u5bc6\u7801\u76f8\u5173/passwd","title":"passwd","description":"\u2b50\u4fee\u6539\u7528\u6237\u5bc6\u7801","source":"@site/docs/02-command/30-\u4e0e\u7528\u6237\u76f8\u5173/\u5bc6\u7801\u76f8\u5173/passwd.md","sourceDirName":"02-command/30-\u4e0e\u7528\u6237\u76f8\u5173/\u5bc6\u7801\u76f8\u5173","slug":"/command/\u4e0e\u7528\u6237\u76f8\u5173/\u5bc6\u7801\u76f8\u5173/passwd","permalink":"/command/\u4e0e\u7528\u6237\u76f8\u5173/\u5bc6\u7801\u76f8\u5173/passwd","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/02-command/30-\u4e0e\u7528\u6237\u76f8\u5173/\u5bc6\u7801\u76f8\u5173/passwd.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"chage","permalink":"/command/\u4e0e\u7528\u6237\u76f8\u5173/\u5bc6\u7801\u76f8\u5173/chage"},"next":{"title":"su","permalink":"/command/\u4e0e\u7528\u6237\u76f8\u5173/\u5bc6\u7801\u76f8\u5173/su"}}');var l=d(4848),c=d(8453);const r={},i=void 0,h={},t=[{value:"1. \u7b80\u4ecb",id:"1-\u7b80\u4ecb",level:2},{value:"2. \u5e38\u89c1\u64cd\u4f5c\u6982\u89c8",id:"2-\u5e38\u89c1\u64cd\u4f5c\u6982\u89c8",level:2},{value:"3. \u547d\u4ee4\u793a\u4f8b",id:"3-\u547d\u4ee4\u793a\u4f8b",level:2},{value:"3.1 \u4fee\u6539\u5f53\u524d\u7528\u6237\u5bc6\u7801",id:"31-\u4fee\u6539\u5f53\u524d\u7528\u6237\u5bc6\u7801",level:3},{value:"3.2 \u4fee\u6539\u5176\u4ed6\u7528\u6237\u5bc6\u7801",id:"32-\u4fee\u6539\u5176\u4ed6\u7528\u6237\u5bc6\u7801",level:3},{value:"3.3 \u9501\u5b9a\u7528\u6237\u8d26\u6237",id:"33-\u9501\u5b9a\u7528\u6237\u8d26\u6237",level:3},{value:"3.4 \u89e3\u9501\u7528\u6237\u8d26\u6237",id:"34-\u89e3\u9501\u7528\u6237\u8d26\u6237",level:3},{value:"3.5 \u8bbe\u7f6e\u5bc6\u7801\u8fc7\u671f\u65f6\u95f4",id:"35-\u8bbe\u7f6e\u5bc6\u7801\u8fc7\u671f\u65f6\u95f4",level:3},{value:"3.6 \u5f3a\u5236\u7528\u6237\u4fee\u6539\u5bc6\u7801",id:"36-\u5f3a\u5236\u7528\u6237\u4fee\u6539\u5bc6\u7801",level:3},{value:"3.7 \u67e5\u770b\u7528\u6237\u5bc6\u7801\u72b6\u6001",id:"37-\u67e5\u770b\u7528\u6237\u5bc6\u7801\u72b6\u6001",level:3},{value:"4. \u5c0f\u8d34\u58eb",id:"4-\u5c0f\u8d34\u58eb",level:2},{value:"5. \u603b\u7ed3",id:"5-\u603b\u7ed3",level:2}];function a(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.p,{children:"\u2b50\u4fee\u6539\u7528\u6237\u5bc6\u7801"}),"\n",(0,l.jsx)(s.h2,{id:"1-\u7b80\u4ecb",children:"1. \u7b80\u4ecb"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"passwd"})," \u547d\u4ee4\u662f Linux \u4e2d\u7528\u6765\u4fee\u6539\u7528\u6237\u5bc6\u7801\u7684\u4e3b\u8981\u5de5\u5177\u3002\u65e0\u8bba\u662f\u666e\u901a\u7528\u6237\u8fd8\u662f\u7ba1\u7406\u5458\uff0c\u90fd\u53ef\u4ee5\u7528\u5b83\u6765\u66f4\u6539\u5bc6\u7801\u3001\u9501\u5b9a\u8d26\u6237\u3001\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\u7b49\u3002\u638c\u63e1 ",(0,l.jsx)(s.code,{children:"passwd"})," \u547d\u4ee4\u53ef\u4ee5\u5e2e\u52a9\u4f60\u66f4\u597d\u5730\u7ba1\u7406\u7cfb\u7edf\u7528\u6237\u548c\u63d0\u5347\u5b89\u5168\u6027\u3002\ud83d\udd11"]}),"\n",(0,l.jsx)(s.h2,{id:"2-\u5e38\u89c1\u64cd\u4f5c\u6982\u89c8",children:"2. \u5e38\u89c1\u64cd\u4f5c\u6982\u89c8"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"\u64cd\u4f5c"}),(0,l.jsx)(s.th,{children:"\u547d\u4ee4\u683c\u5f0f"}),(0,l.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"\u4fee\u6539\u5f53\u524d\u7528\u6237\u5bc6\u7801"}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"passwd"})}),(0,l.jsx)(s.td,{children:"\u4fee\u6539\u5f53\u524d\u767b\u5f55\u7528\u6237\u7684\u5bc6\u7801\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"\u4fee\u6539\u5176\u4ed6\u7528\u6237\u5bc6\u7801"}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"sudo passwd <\u7528\u6237\u540d>"})}),(0,l.jsx)(s.td,{children:"\u7ba1\u7406\u5458\u4fee\u6539\u5176\u4ed6\u7528\u6237\u7684\u5bc6\u7801\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"\u9501\u5b9a\u7528\u6237\u8d26\u6237"}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"sudo passwd -l <\u7528\u6237\u540d>"})}),(0,l.jsx)(s.td,{children:"\u7981\u6b62\u6307\u5b9a\u7528\u6237\u767b\u5f55\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"\u89e3\u9501\u7528\u6237\u8d26\u6237"}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"sudo passwd -u <\u7528\u6237\u540d>"})}),(0,l.jsx)(s.td,{children:"\u6062\u590d\u7528\u6237\u767b\u5f55\u6743\u9650\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"\u8bbe\u7f6e\u5bc6\u7801\u8fc7\u671f\u65f6\u95f4"}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"sudo passwd -x <\u5929\u6570> <\u7528\u6237\u540d>"})}),(0,l.jsx)(s.td,{children:"\u8bbe\u7f6e\u7528\u6237\u5bc6\u7801\u7684\u6709\u6548\u671f\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"\u5f3a\u5236\u7528\u6237\u4fee\u6539\u5bc6\u7801"}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"sudo passwd -e <\u7528\u6237\u540d>"})}),(0,l.jsx)(s.td,{children:"\u5f3a\u5236\u7528\u6237\u4e0b\u6b21\u767b\u5f55\u65f6\u4fee\u6539\u5bc6\u7801\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"\u67e5\u770b\u7528\u6237\u5bc6\u7801\u72b6\u6001"}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"sudo chage -l <\u7528\u6237\u540d>"})}),(0,l.jsx)(s.td,{children:"\u67e5\u770b\u5bc6\u7801\u72b6\u6001\uff08\u8fc7\u671f\u3001\u9501\u5b9a\u7b49\uff09\u3002"})]})]})]}),"\n",(0,l.jsx)(s.h2,{id:"3-\u547d\u4ee4\u793a\u4f8b",children:"3. \u547d\u4ee4\u793a\u4f8b"}),"\n",(0,l.jsx)(s.h3,{id:"31-\u4fee\u6539\u5f53\u524d\u7528\u6237\u5bc6\u7801",children:"3.1 \u4fee\u6539\u5f53\u524d\u7528\u6237\u5bc6\u7801"}),"\n",(0,l.jsxs)(s.p,{children:["\u53ea\u9700\u8fd0\u884c ",(0,l.jsx)(s.code,{children:"passwd"}),"\uff0c\u7cfb\u7edf\u4f1a\u63d0\u793a\u4f60\u8f93\u5165\u5f53\u524d\u5bc6\u7801\u548c\u65b0\u5bc6\u7801\uff1a"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ passwd\n"})}),"\n",(0,l.jsx)(s.h3,{id:"32-\u4fee\u6539\u5176\u4ed6\u7528\u6237\u5bc6\u7801",children:"3.2 \u4fee\u6539\u5176\u4ed6\u7528\u6237\u5bc6\u7801"}),"\n",(0,l.jsxs)(s.p,{children:["\u7ba1\u7406\u5458\u53ef\u4ee5\u901a\u8fc7 ",(0,l.jsx)(s.code,{children:"sudo"})," \u4fee\u6539\u5176\u4ed6\u7528\u6237\u7684\u5bc6\u7801\uff1a"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ sudo passwd <\u7528\u6237\u540d>\n"})}),"\n",(0,l.jsx)(s.h3,{id:"33-\u9501\u5b9a\u7528\u6237\u8d26\u6237",children:"3.3 \u9501\u5b9a\u7528\u6237\u8d26\u6237"}),"\n",(0,l.jsx)(s.p,{children:"\u7981\u7528\u6307\u5b9a\u7528\u6237\u7684\u767b\u5f55\u6743\u9650\uff1a"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ sudo passwd -l <\u7528\u6237\u540d>\n"})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"\u9501\u5b9a\u8d26\u6237\u7684\u4f5c\u7528\uff1a"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\u9501\u5b9a\u7528\u6237\u5bc6\u7801\u540e\uff0c",(0,l.jsx)(s.strong,{children:"\u8be5\u7528\u6237\u5c06\u65e0\u6cd5\u4f7f\u7528\u5bc6\u7801\u767b\u5f55"}),"\u3002\u4f46\u662f\uff0c\u5982\u679c\u8be5\u7528\u6237\u5df2\u914d\u7f6e SSH \u5bc6\u94a5\u767b\u5f55\uff0c",(0,l.jsx)(s.strong,{children:"SSH \u5bc6\u94a5\u4f9d\u7136\u6709\u6548"}),"\uff0c\u8be5\u7528\u6237\u53ef\u4ee5\u7ee7\u7eed\u901a\u8fc7\u5bc6\u94a5\u8fdb\u884c\u8fdc\u7a0b\u767b\u5f55\u3002"]}),"\n",(0,l.jsx)(s.li,{children:"\u82e5\u8981\u5b8c\u5168\u7981\u7528\u8d26\u6237\u767b\u5f55\uff0c\u4f60\u53ef\u4ee5\u540c\u65f6\u7981\u7528\u8be5\u7528\u6237\u7684 shell\uff0c\u6216\u8c03\u6574 SSH \u914d\u7f6e\uff0c\u7981\u6b62\u6240\u6709\u767b\u5f55\u65b9\u5f0f\u3002\ud83d\udd12"}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"34-\u89e3\u9501\u7528\u6237\u8d26\u6237",children:"3.4 \u89e3\u9501\u7528\u6237\u8d26\u6237"}),"\n",(0,l.jsx)(s.p,{children:"\u6062\u590d\u5df2\u9501\u5b9a\u7528\u6237\u7684\u767b\u5f55\u6743\u9650\uff1a"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ sudo passwd -u <\u7528\u6237\u540d>\n"})}),"\n",(0,l.jsx)(s.h3,{id:"35-\u8bbe\u7f6e\u5bc6\u7801\u8fc7\u671f\u65f6\u95f4",children:"3.5 \u8bbe\u7f6e\u5bc6\u7801\u8fc7\u671f\u65f6\u95f4"}),"\n",(0,l.jsx)(s.p,{children:"\u8bbe\u7f6e\u7528\u6237\u5bc6\u7801\u5728\u4e00\u5b9a\u5929\u6570\u540e\u8fc7\u671f\uff0c\u5f3a\u5236\u7528\u6237\u66f4\u6362\u5bc6\u7801\uff1a"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ sudo passwd -x 30 <\u7528\u6237\u540d>\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u8fd9\u5c06\u4f7f\u5bc6\u7801\u5728 30 \u5929\u540e\u8fc7\u671f\u3002"}),"\n",(0,l.jsx)(s.h3,{id:"36-\u5f3a\u5236\u7528\u6237\u4fee\u6539\u5bc6\u7801",children:"3.6 \u5f3a\u5236\u7528\u6237\u4fee\u6539\u5bc6\u7801"}),"\n",(0,l.jsx)(s.p,{children:"\u5f3a\u5236\u7528\u6237\u5728\u4e0b\u6b21\u767b\u5f55\u65f6\u4fee\u6539\u5bc6\u7801\uff1a"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ sudo passwd -e <\u7528\u6237\u540d>\n"})}),"\n",(0,l.jsx)(s.h3,{id:"37-\u67e5\u770b\u7528\u6237\u5bc6\u7801\u72b6\u6001",children:"3.7 \u67e5\u770b\u7528\u6237\u5bc6\u7801\u72b6\u6001"}),"\n",(0,l.jsxs)(s.p,{children:["\u901a\u8fc7 ",(0,l.jsx)(s.code,{children:"chage"})," \u67e5\u770b\u7528\u6237\u7684\u5bc6\u7801\u72b6\u6001\uff0c\u5305\u62ec\u8fc7\u671f\u4fe1\u606f\uff1a"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ sudo chage -l <\u7528\u6237\u540d>\n"})}),"\n",(0,l.jsx)(s.h2,{id:"4-\u5c0f\u8d34\u58eb",children:"4. \u5c0f\u8d34\u58eb"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"\u5bc6\u7801\u590d\u6742\u5ea6"}),"\uff1a\u786e\u4fdd\u5bc6\u7801\u7b26\u5408\u7cfb\u7edf\u8981\u6c42\u7684\u590d\u6742\u6027\uff08\u957f\u5ea6\u3001\u5b57\u7b26\u79cd\u7c7b\u7b49\uff09\u3002"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"\u5b89\u5168\u6027"}),"\uff1a\u5b9a\u671f\u66f4\u6362\u5bc6\u7801\uff0c\u5e76\u4e3a\u91cd\u8981\u8d26\u6237\u8bbe\u7f6e\u8f83\u77ed\u7684\u5bc6\u7801\u8fc7\u671f\u65f6\u95f4\u3002\ud83d\udd04"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"\u9501\u5b9a\u8d26\u6237"}),"\uff1a\u5f53\u4e0d\u518d\u9700\u8981\u67d0\u4e2a\u7528\u6237\u8bbf\u95ee\u7cfb\u7edf\u65f6\uff0c\u53ef\u4ee5\u9501\u5b9a\u5176\u8d26\u6237\u3002\ud83d\udd12"]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"5-\u603b\u7ed3",children:"5. \u603b\u7ed3"}),"\n",(0,l.jsxs)(s.p,{children:["\u638c\u63e1 ",(0,l.jsx)(s.code,{children:"passwd"})," \u547d\u4ee4\u662f Linux \u7cfb\u7edf\u7ba1\u7406\u7684\u91cd\u8981\u6b65\u9aa4\u3002\u5b83\u4e0d\u4ec5\u7528\u4e8e\u4fee\u6539\u5bc6\u7801\uff0c\u8fd8\u652f\u6301\u8d26\u6237\u9501\u5b9a\u3001\u8fc7\u671f\u8bbe\u7f6e\u3001\u5f3a\u5236\u5bc6\u7801\u66f4\u6539\u7b49\u529f\u80fd\uff0c\u5e2e\u52a9\u4f60\u63d0\u5347\u7cfb\u7edf\u7684\u5b89\u5168\u6027\u3002\ud83d\udca1"]}),"\n",(0,l.jsx)(s.p,{children:"\u901a\u8fc7\u5408\u7406\u914d\u7f6e\u5bc6\u7801\u7b56\u7565\uff0c\u53ef\u4ee5\u786e\u4fdd\u7cfb\u7edf\u7528\u6237\u7684\u5b89\u5168\u3002\ud83d\ude0c"}),"\n",(0,l.jsxs)(s.p,{children:["\u522b\u5fd8\u4e86\u6536\u85cf\u6211\u4eec\u7684\u5728\u7ebf\u77e5\u8bc6\u5e93 ",(0,l.jsx)(s.a,{href:"http://www.zxzsk.com",children:"www.zxzsk.com"}),"\uff0c\u53d1\u73b0\u66f4\u591a\u6709\u7528\u7684\u6280\u5de7\uff01\ud83d\udcda"]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsxs)(s.p,{children:["\u5e0c\u671b\u8fd9\u7bc7\u7b80\u6d01\u660e\u4e86\u7684\u6559\u7a0b\u80fd\u5e2e\u52a9\u4f60\u5feb\u901f\u638c\u63e1 ",(0,l.jsx)(s.code,{children:"passwd"})," \u547d\u4ee4\uff0c\u7ba1\u7406\u4f60\u7684\u7cfb\u7edf\u7528\u6237\u5bc6\u7801\uff01\ud83c\udf89"]})]})}function x(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},8453:(e,s,d)=>{d.d(s,{R:()=>r,x:()=>i});var n=d(6540);const l={},c=n.createContext(l);function r(e){const s=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);