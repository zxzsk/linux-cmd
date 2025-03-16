"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2090],{4777:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>h,contentTitle:()=>i,default:()=>j,frontMatter:()=>r,metadata:()=>s,toc:()=>t});const s=JSON.parse('{"id":"command/\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/\u7cfb\u7edf\u65e5\u5fd7/dmesg","title":"dmesg","description":"\u2b50\u67e5\u770b\u548c\u7ba1\u7406\u5185\u6838\u6d88\u606f","source":"@site/docs/02-command/40-\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/\u7cfb\u7edf\u65e5\u5fd7/dmesg.md","sourceDirName":"02-command/40-\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/\u7cfb\u7edf\u65e5\u5fd7","slug":"/command/\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/\u7cfb\u7edf\u65e5\u5fd7/dmesg","permalink":"/command/\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/\u7cfb\u7edf\u65e5\u5fd7/dmesg","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/02-command/40-\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/\u7cfb\u7edf\u65e5\u5fd7/dmesg.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u7cfb\u7edf\u65e5\u5fd7","permalink":"/category/\u7cfb\u7edf\u65e5\u5fd7"},"next":{"title":"journalctl","permalink":"/command/\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/\u7cfb\u7edf\u65e5\u5fd7/journalctl"}}');var c=n(4848),l=n(8453);const r={},i=void 0,h={},t=[{value:"1. \u7b80\u4ecb",id:"1-\u7b80\u4ecb",level:2},{value:"2. \u5e38\u89c1\u64cd\u4f5c\u6982\u89c8 \ud83d\udccb",id:"2-\u5e38\u89c1\u64cd\u4f5c\u6982\u89c8-",level:2},{value:"3. \u547d\u4ee4\u793a\u4f8b \u26a1",id:"3-\u547d\u4ee4\u793a\u4f8b-",level:2},{value:"3.1 \u663e\u793a\u5185\u6838\u6d88\u606f",id:"31-\u663e\u793a\u5185\u6838\u6d88\u606f",level:3},{value:"3.2 \u5b9e\u65f6\u76d1\u63a7\u5185\u6838\u6d88\u606f",id:"32-\u5b9e\u65f6\u76d1\u63a7\u5185\u6838\u6d88\u606f",level:3},{value:"3.3 \u6e05\u9664\u5185\u6838\u6d88\u606f\u7f13\u5b58",id:"33-\u6e05\u9664\u5185\u6838\u6d88\u606f\u7f13\u5b58",level:3},{value:"3.4 \u6309\u65f6\u95f4\u6233\u6392\u5e8f\u5185\u6838\u6d88\u606f",id:"34-\u6309\u65f6\u95f4\u6233\u6392\u5e8f\u5185\u6838\u6d88\u606f",level:3},{value:"3.5 \u8fc7\u6ee4\u7279\u5b9a\u7c7b\u578b\u7684\u6d88\u606f",id:"35-\u8fc7\u6ee4\u7279\u5b9a\u7c7b\u578b\u7684\u6d88\u606f",level:3},{value:"4. \u5e38\u7528\u9009\u9879 \ud83d\udcdd",id:"4-\u5e38\u7528\u9009\u9879-",level:2},{value:"5. \u5c0f\u8d34\u58eb \ud83d\udca1",id:"5-\u5c0f\u8d34\u58eb-",level:2},{value:"6. \u603b\u7ed3 \ud83c\udfaf",id:"6-\u603b\u7ed3-",level:2}];function x(e){const d={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d.p,{children:"\u2b50\u67e5\u770b\u548c\u7ba1\u7406\u5185\u6838\u6d88\u606f"}),"\n",(0,c.jsx)(d.h2,{id:"1-\u7b80\u4ecb",children:"1. \u7b80\u4ecb"}),"\n",(0,c.jsxs)(d.p,{children:[(0,c.jsx)(d.code,{children:"dmesg"})," \u547d\u4ee4\u662f Linux \u4e2d\u7528\u4e8e\u67e5\u770b\u548c\u7ba1\u7406\u5185\u6838\u6d88\u606f\u7684\u5de5\u5177\u3002\u5b83\u5141\u8bb8\u4f60\u67e5\u770b\u7cfb\u7edf\u542f\u52a8\u65f6\u4ee5\u53ca\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u5185\u6838\u8f93\u51fa\u7684\u6d88\u606f\uff0c\u8fd9\u4e9b\u6d88\u606f\u5305\u542b\u4e86\u7cfb\u7edf\u786c\u4ef6\u68c0\u6d4b\u3001\u9a71\u52a8\u52a0\u8f7d\u3001\u5185\u6838\u6a21\u5757\u4fe1\u606f\u7b49\u91cd\u8981\u65e5\u5fd7\u4fe1\u606f\ud83d\udda5\ufe0f\u3002"]}),"\n",(0,c.jsxs)(d.p,{children:[(0,c.jsx)(d.code,{children:"dmesg"})," \u662f \u663e\u793a\u5185\u6838\u6d88\u606f\uff08Display Kernel Messages\uff09\u548c \u6d88\u606f\u751f\u6210\u5668\uff08Message Generator\uff09\u7684\u7b80\u5199\u3002"]}),"\n",(0,c.jsx)(d.h2,{id:"2-\u5e38\u89c1\u64cd\u4f5c\u6982\u89c8-",children:"2. \u5e38\u89c1\u64cd\u4f5c\u6982\u89c8 \ud83d\udccb"}),"\n",(0,c.jsxs)(d.table,{children:[(0,c.jsx)(d.thead,{children:(0,c.jsxs)(d.tr,{children:[(0,c.jsx)(d.th,{children:"\u64cd\u4f5c"}),(0,c.jsx)(d.th,{children:"\u547d\u4ee4\u683c\u5f0f"}),(0,c.jsx)(d.th,{children:"\u8bf4\u660e"})]})}),(0,c.jsxs)(d.tbody,{children:[(0,c.jsxs)(d.tr,{children:[(0,c.jsx)(d.td,{children:"\u663e\u793a\u5185\u6838\u6d88\u606f"}),(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"dmesg"})}),(0,c.jsx)(d.td,{children:"\u663e\u793a\u6240\u6709\u5185\u6838\u6d88\u606f\u3002"})]}),(0,c.jsxs)(d.tr,{children:[(0,c.jsx)(d.td,{children:"\u5b9e\u65f6\u76d1\u63a7\u5185\u6838\u6d88\u606f"}),(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"dmesg -w"})}),(0,c.jsx)(d.td,{children:"\u5b9e\u65f6\u76d1\u63a7\u5185\u6838\u6d88\u606f\u8f93\u51fa\u3002"})]}),(0,c.jsxs)(d.tr,{children:[(0,c.jsx)(d.td,{children:"\u6e05\u9664\u5185\u6838\u6d88\u606f\u7f13\u5b58"}),(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"dmesg -C"})}),(0,c.jsx)(d.td,{children:"\u6e05\u9664\u5185\u6838\u6d88\u606f\u7f13\u5b58\u3002"})]}),(0,c.jsxs)(d.tr,{children:[(0,c.jsx)(d.td,{children:"\u6309\u65f6\u95f4\u6233\u6392\u5e8f\u5185\u6838\u6d88\u606f"}),(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"dmesg --time-format ctime"})}),(0,c.jsx)(d.td,{children:"\u6309\u53ef\u8bfb\u7684\u65f6\u95f4\u6233\u6392\u5e8f\u663e\u793a\u5185\u6838\u6d88\u606f\u3002"})]}),(0,c.jsxs)(d.tr,{children:[(0,c.jsx)(d.td,{children:"\u8fc7\u6ee4\u7279\u5b9a\u7c7b\u578b\u7684\u6d88\u606f"}),(0,c.jsx)(d.td,{children:(0,c.jsx)(d.code,{children:"dmesg | grep <\u5173\u952e\u8bcd>"})}),(0,c.jsxs)(d.td,{children:["\u4f7f\u7528 ",(0,c.jsx)(d.code,{children:"grep"})," \u8fc7\u6ee4\u5185\u6838\u6d88\u606f\u3002"]})]})]})]}),"\n",(0,c.jsx)(d.h2,{id:"3-\u547d\u4ee4\u793a\u4f8b-",children:"3. \u547d\u4ee4\u793a\u4f8b \u26a1"}),"\n",(0,c.jsx)(d.h3,{id:"31-\u663e\u793a\u5185\u6838\u6d88\u606f",children:"3.1 \u663e\u793a\u5185\u6838\u6d88\u606f"}),"\n",(0,c.jsx)(d.p,{children:"\u67e5\u770b\u6240\u6709\u5185\u6838\u6d88\u606f\uff1a"}),"\n",(0,c.jsx)(d.pre,{children:(0,c.jsx)(d.code,{className:"language-bash",children:"$ dmesg\n"})}),"\n",(0,c.jsx)(d.p,{children:"\u6b64\u547d\u4ee4\u4f1a\u8f93\u51fa\u7cfb\u7edf\u5185\u6838\u6d88\u606f\u3002"}),"\n",(0,c.jsx)(d.h3,{id:"32-\u5b9e\u65f6\u76d1\u63a7\u5185\u6838\u6d88\u606f",children:"3.2 \u5b9e\u65f6\u76d1\u63a7\u5185\u6838\u6d88\u606f"}),"\n",(0,c.jsx)(d.p,{children:"\u5b9e\u65f6\u76d1\u63a7\u5185\u6838\u6d88\u606f\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(d.pre,{children:(0,c.jsx)(d.code,{className:"language-bash",children:"$ dmesg -w\n"})}),"\n",(0,c.jsxs)(d.p,{children:["\u6b64\u547d\u4ee4\u4f1a\u6301\u7eed\u663e\u793a\u5185\u6838\u6d88\u606f\u7684\u8f93\u51fa\uff0c\u7c7b\u4f3c\u4e8e ",(0,c.jsx)(d.code,{children:"tail -f"}),"\u3002"]}),"\n",(0,c.jsx)(d.h3,{id:"33-\u6e05\u9664\u5185\u6838\u6d88\u606f\u7f13\u5b58",children:"3.3 \u6e05\u9664\u5185\u6838\u6d88\u606f\u7f13\u5b58"}),"\n",(0,c.jsx)(d.p,{children:"\u6e05\u9664\u5185\u6838\u6d88\u606f\u7f13\u5b58\uff1a"}),"\n",(0,c.jsx)(d.pre,{children:(0,c.jsx)(d.code,{className:"language-bash",children:"$ sudo dmesg -C\n"})}),"\n",(0,c.jsx)(d.p,{children:"\u6b64\u547d\u4ee4\u4f1a\u6e05\u9664\u5185\u6838\u6d88\u606f\u7f13\u5b58\uff0c\u9002\u7528\u4e8e\u9700\u8981\u6e05\u7406\u65e5\u5fd7\u7684\u573a\u666f\u3002"}),"\n",(0,c.jsx)(d.h3,{id:"34-\u6309\u65f6\u95f4\u6233\u6392\u5e8f\u5185\u6838\u6d88\u606f",children:"3.4 \u6309\u65f6\u95f4\u6233\u6392\u5e8f\u5185\u6838\u6d88\u606f"}),"\n",(0,c.jsx)(d.p,{children:"\u6309\u53ef\u8bfb\u7684\u65f6\u95f4\u6233\u6392\u5e8f\u663e\u793a\u5185\u6838\u6d88\u606f\uff1a"}),"\n",(0,c.jsx)(d.pre,{children:(0,c.jsx)(d.code,{className:"language-bash",children:"$ dmesg --time-format ctime\n"})}),"\n",(0,c.jsx)(d.p,{children:"\u6b64\u547d\u4ee4\u4f1a\u663e\u793a\u5e26\u6709\u53ef\u8bfb\u65f6\u95f4\u6233\u7684\u5185\u6838\u6d88\u606f\u3002"}),"\n",(0,c.jsx)(d.h3,{id:"35-\u8fc7\u6ee4\u7279\u5b9a\u7c7b\u578b\u7684\u6d88\u606f",children:"3.5 \u8fc7\u6ee4\u7279\u5b9a\u7c7b\u578b\u7684\u6d88\u606f"}),"\n",(0,c.jsxs)(d.p,{children:["\u4f7f\u7528 ",(0,c.jsx)(d.code,{children:"grep"})," \u8fc7\u6ee4\u5185\u6838\u6d88\u606f\uff1a"]}),"\n",(0,c.jsx)(d.pre,{children:(0,c.jsx)(d.code,{className:"language-bash",children:'$ dmesg | grep -i "error"\n'})}),"\n",(0,c.jsx)(d.p,{children:'\u6b64\u547d\u4ee4\u4f1a\u663e\u793a\u6240\u6709\u5305\u542b "error"\uff08\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff09\u7684\u5185\u6838\u6d88\u606f\u3002'}),"\n",(0,c.jsx)(d.h2,{id:"4-\u5e38\u7528\u9009\u9879-",children:"4. \u5e38\u7528\u9009\u9879 \ud83d\udcdd"}),"\n",(0,c.jsxs)(d.ul,{children:["\n",(0,c.jsxs)(d.li,{children:[(0,c.jsx)(d.code,{children:"-C"}),"\uff1a\u6e05\u9664\u5185\u6838\u6d88\u606f\u7f13\u5b58\u3002"]}),"\n",(0,c.jsxs)(d.li,{children:[(0,c.jsx)(d.code,{children:"-c"}),"\uff1a\u6e05\u9664\u5185\u6838\u6d88\u606f\u7f13\u5b58\u5e76\u663e\u793a\u6e05\u9664\u524d\u7684\u6d88\u606f\u3002"]}),"\n",(0,c.jsxs)(d.li,{children:[(0,c.jsx)(d.code,{children:"-w"}),"\uff1a\u5b9e\u65f6\u76d1\u63a7\u5185\u6838\u6d88\u606f\u8f93\u51fa\u3002"]}),"\n",(0,c.jsxs)(d.li,{children:[(0,c.jsx)(d.code,{children:"--time-format"}),"\uff1a\u6307\u5b9a\u65f6\u95f4\u6233\u683c\u5f0f\uff0c\u53ef\u7528\u9009\u9879\u5305\u62ec ",(0,c.jsx)(d.code,{children:"ctime"}),"\u3001",(0,c.jsx)(d.code,{children:"iso"}),"\u3001",(0,c.jsx)(d.code,{children:"delta"})," \u7b49\u3002"]}),"\n",(0,c.jsxs)(d.li,{children:[(0,c.jsx)(d.code,{children:"-H"}),"\uff1a\u663e\u793a\u4eba\u7c7b\u53ef\u8bfb\u7684\u65f6\u95f4\u683c\u5f0f\u3002"]}),"\n",(0,c.jsxs)(d.li,{children:[(0,c.jsx)(d.code,{children:"-T"}),"\uff1a\u663e\u793a\u5b8c\u6574\u7684\u65e5\u671f\u548c\u65f6\u95f4\u3002"]}),"\n",(0,c.jsxs)(d.li,{children:[(0,c.jsx)(d.code,{children:"-L"}),"\uff1a\u5217\u51fa\u5185\u6838\u6d88\u606f\u7684\u7ea7\u522b\uff08\u5982\u9519\u8bef\u3001\u8b66\u544a\u3001\u4fe1\u606f\u7b49\uff09\u3002"]}),"\n",(0,c.jsxs)(d.li,{children:[(0,c.jsx)(d.code,{children:"-P"}),"\uff1a\u4ec5\u663e\u793a\u6307\u5b9a\u4f18\u5148\u7ea7\u7684\u5185\u6838\u6d88\u606f\u3002"]}),"\n"]}),"\n",(0,c.jsx)(d.h2,{id:"5-\u5c0f\u8d34\u58eb-",children:"5. \u5c0f\u8d34\u58eb \ud83d\udca1"}),"\n",(0,c.jsxs)(d.ul,{children:["\n",(0,c.jsxs)(d.li,{children:[(0,c.jsx)(d.code,{children:"dmesg"})," \u7684\u8f93\u51fa\u901a\u5e38\u975e\u5e38\u8be6\u7ec6\uff0c\u5efa\u8bae\u7ed3\u5408 ",(0,c.jsx)(d.code,{children:"grep"})," \u6216 ",(0,c.jsx)(d.code,{children:"less"})," \u547d\u4ee4\u6765\u8fc7\u6ee4\u6216\u5206\u9875\u67e5\u770b\u3002"]}),"\n",(0,c.jsxs)(d.li,{children:["\u4f7f\u7528 ",(0,c.jsx)(d.code,{children:"-w"})," \u9009\u9879\u8fdb\u884c\u5b9e\u65f6\u76d1\u63a7\u65f6\uff0c\u53ef\u4ee5\u5728\u53e6\u4e00\u4e2a\u7ec8\u7aef\u6267\u884c ",(0,c.jsx)(d.code,{children:"dmesg -C"})," \u6765\u6e05\u9664\u7f13\u5b58\u3002"]}),"\n",(0,c.jsxs)(d.li,{children:[(0,c.jsx)(d.code,{children:"dmesg"})," \u547d\u4ee4\u7684\u8f93\u51fa\u53ef\u4ee5\u91cd\u5b9a\u5411\u5230\u6587\u4ef6\u4e2d\uff0c\u5982 ",(0,c.jsx)(d.code,{children:"dmesg > kernel_messages.txt"}),"\uff0c\u65b9\u4fbf\u540e\u7eed\u5206\u6790\u3002"]}),"\n",(0,c.jsxs)(d.li,{children:["\u5185\u6838\u6d88\u606f\u7684\u4f18\u5148\u7ea7\u53ef\u4ee5\u7528 ",(0,c.jsx)(d.code,{children:"-L"})," \u9009\u9879\u67e5\u770b\uff0c\u5e38\u89c1\u7684\u4f18\u5148\u7ea7\u5305\u62ec ",(0,c.jsx)(d.code,{children:"err"}),"\uff08\u9519\u8bef\uff09\u3001",(0,c.jsx)(d.code,{children:"warn"}),"\uff08\u8b66\u544a\uff09\u3001",(0,c.jsx)(d.code,{children:"info"}),"\uff08\u4fe1\u606f\uff09\u7b49\u3002"]}),"\n",(0,c.jsxs)(d.li,{children:["\u5982\u679c\u5185\u6838\u6d88\u606f\u8fc7\u591a\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(d.code,{children:"dmesg | less"})," \u6216 ",(0,c.jsx)(d.code,{children:"dmesg | more"})," \u6765\u5206\u9875\u67e5\u770b\u3002"]}),"\n"]}),"\n",(0,c.jsx)(d.h2,{id:"6-\u603b\u7ed3-",children:"6. \u603b\u7ed3 \ud83c\udfaf"}),"\n",(0,c.jsxs)(d.p,{children:[(0,c.jsx)(d.code,{children:"dmesg"})," \u547d\u4ee4\u662f Linux \u7cfb\u7edf\u7ba1\u7406\u4e2d\u975e\u5e38\u91cd\u8981\u7684\u5de5\u5177\u3002\u5b83\u5141\u8bb8\u4f60\u67e5\u770b\u7cfb\u7edf\u5185\u6838\u7684\u6d88\u606f\uff0c\u5e2e\u52a9\u8bca\u65ad\u786c\u4ef6\u95ee\u9898\u3001\u9a71\u52a8\u52a0\u8f7d\u95ee\u9898\u6216\u5176\u4ed6\u5185\u6838\u7ea7\u522b\u7684\u65e5\u5fd7\u4fe1\u606f\ud83d\udda5\ufe0f\u3002\u5728\u5b9e\u9645\u64cd\u4f5c\u4e2d\uff0c\u6839\u636e\u9700\u6c42\u9009\u62e9\u5408\u9002\u7684\u9009\u9879\u548c\u8fc7\u6ee4\u65b9\u6cd5\u53ef\u4ee5\u6709\u6548\u5730\u7ba1\u7406\u548c\u5206\u6790\u5185\u6838\u6d88\u606f\u3002"]}),"\n",(0,c.jsxs)(d.p,{children:["\u5e0c\u671b\u8fd9\u7bc7\u6559\u7a0b\u5e2e\u52a9\u4f60\u638c\u63e1\u5982\u4f55\u4f7f\u7528 ",(0,c.jsx)(d.code,{children:"dmesg"})," \u547d\u4ee4\uff01\u522b\u5fd8\u4e86\u6536\u85cf",(0,c.jsx)(d.strong,{children:"\u5728\u7ebf\u77e5\u8bc6\u5e93"}),"\uff08 ",(0,c.jsx)(d.a,{href:"http://www.zxzsk.com",children:"www.zxzsk.com"})," \uff09\u54e6\uff01\ud83d\ude0a"]})]})}function j(e={}){const{wrapper:d}={...(0,l.R)(),...e.components};return d?(0,c.jsx)(d,{...e,children:(0,c.jsx)(x,{...e})}):x(e)}},8453:(e,d,n)=>{n.d(d,{R:()=>r,x:()=>i});var s=n(6540);const c={},l=s.createContext(c);function r(e){const d=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function i(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(l.Provider,{value:d},e.children)}}}]);