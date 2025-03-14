"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4116],{4879:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"command/\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/iotop","title":"iotop","description":"\u2b50\u67e5\u770b\u78c1\u76d8I/O\u4f7f\u7528\u60c5\u51b5","source":"@site/docs/02-command/40-\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/iotop.md","sourceDirName":"02-command/40-\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173","slug":"/command/\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/iotop","permalink":"/command/\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/iotop","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/02-command/40-\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/iotop.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"htop","permalink":"/command/\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/htop"},"next":{"title":"jobs","permalink":"/command/\u7cfb\u7edf\u7ba1\u7406\u76f8\u5173/jobs"}}');var s=d(4848),c=d(8453);const l={},o=void 0,r={},h=[{value:"1. \u7b80\u4ecb",id:"1-\u7b80\u4ecb",level:2},{value:"iotop \u7684\u57fa\u672c\u8bed\u6cd5",id:"iotop-\u7684\u57fa\u672c\u8bed\u6cd5",level:3},{value:"2. \u5e38\u89c1\u64cd\u4f5c\u6982\u89c8 \ud83d\udccb",id:"2-\u5e38\u89c1\u64cd\u4f5c\u6982\u89c8-",level:2},{value:"3. \u547d\u4ee4\u793a\u4f8b \u26a1",id:"3-\u547d\u4ee4\u793a\u4f8b-",level:2},{value:"3.1 \u542f\u52a8 iotop",id:"31-\u542f\u52a8-iotop",level:3},{value:"3.2 \u663e\u793a\u7279\u5b9a\u8fdb\u7a0b\u7684 I/O \u4fe1\u606f",id:"32-\u663e\u793a\u7279\u5b9a\u8fdb\u7a0b\u7684-io-\u4fe1\u606f",level:3},{value:"3.3 \u542f\u52a8\u6279\u5904\u7406\u6a21\u5f0f",id:"33-\u542f\u52a8\u6279\u5904\u7406\u6a21\u5f0f",level:3},{value:"3.4 \u663e\u793a\u6b63\u5728\u8fdb\u884c I/O \u64cd\u4f5c\u7684\u8fdb\u7a0b",id:"34-\u663e\u793a\u6b63\u5728\u8fdb\u884c-io-\u64cd\u4f5c\u7684\u8fdb\u7a0b",level:3},{value:"3.5 \u8bbe\u7f6e\u5237\u65b0\u95f4\u9694",id:"35-\u8bbe\u7f6e\u5237\u65b0\u95f4\u9694",level:3},{value:"3.6 \u663e\u793a\u6240\u6709 I/O \u6d3b\u52a8",id:"36-\u663e\u793a\u6240\u6709-io-\u6d3b\u52a8",level:3},{value:"4. \u5e2e\u52a9\u4fe1\u606f\ud83d\udcdd",id:"4-\u5e2e\u52a9\u4fe1\u606f",level:2},{value:"5. \u5c0f\u8d34\u58eb \ud83d\udca1",id:"5-\u5c0f\u8d34\u58eb-",level:2},{value:"6. \u603b\u7ed3 \ud83c\udfaf",id:"6-\u603b\u7ed3-",level:2}];function t(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u2b50\u67e5\u770b\u78c1\u76d8I/O\u4f7f\u7528\u60c5\u51b5"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"iotop"})," \u662f\u4e00\u4e2a Linux \u547d\u4ee4\u884c\u5de5\u5177\uff0c\u7528\u4e8e\u5b9e\u65f6\u76d1\u63a7\u7cfb\u7edf\u7684\u78c1\u76d8 I/O\uff08\u8f93\u5165/\u8f93\u51fa\uff09\u6d3b\u52a8\u3002\u5b83\u7c7b\u4f3c\u4e8e ",(0,s.jsx)(n.code,{children:"top"})," \u547d\u4ee4\uff0c\u4f46\u4e13\u6ce8\u4e8e\u663e\u793a\u4e0e\u78c1\u76d8 I/O \u76f8\u5173\u7684\u8fdb\u7a0b\u53ca\u5176\u884c\u4e3a\u3002\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"iotop"}),"\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b\u54ea\u4e2a\u8fdb\u7a0b\u6b63\u5728\u5360\u7528\u78c1\u76d8\u5e26\u5bbd\uff0c\u6709\u52a9\u4e8e\u8fdb\u884c\u6027\u80fd\u5206\u6790\u548c\u6545\u969c\u6392\u9664\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"1-\u7b80\u4ecb",children:"1. \u7b80\u4ecb"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"iotop"})," \u53ef\u4ee5\u5b9e\u65f6\u663e\u793a\u5404\u4e2a\u8fdb\u7a0b\u5bf9\u78c1\u76d8\u7684\u8bfb\u53d6\u4e0e\u5199\u5165\u6d3b\u52a8\u3002\u5b83\u975e\u5e38\u9002\u7528\u4e8e\u7cfb\u7edf\u7ba1\u7406\u5458\u548c\u5f00\u53d1\u8005\uff0c\u5e2e\u52a9\u4ed6\u4eec\u8bc6\u522b\u54ea\u4e9b\u8fdb\u7a0b\u53ef\u80fd\u4f1a\u5bfc\u81f4\u78c1\u76d8\u6027\u80fd\u95ee\u9898\uff0c\u6216\u8005\u67e5\u627e I/O \u5bc6\u96c6\u578b\u5e94\u7528\u3002\ud83d\udcbb"]}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u60dc\u754c\u9762\u592a\u53e4\u8001\uff0c\u4e0d\u592a\u73b0\u4ee3\u5316\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"apt install iotop"})," \u5b89\u88c5\u5b83\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"iotop-\u7684\u57fa\u672c\u8bed\u6cd5",children:"iotop \u7684\u57fa\u672c\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo iotop [\u9009\u9879]\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a",(0,s.jsx)(n.code,{children:"iotop"})," \u9700\u8981 root \u6743\u9650\u624d\u80fd\u83b7\u53d6\u7cfb\u7edf\u7684 I/O \u6d3b\u52a8\u4fe1\u606f\uff0c\u56e0\u6b64\u9700\u8981\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"sudo"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"2-\u5e38\u89c1\u64cd\u4f5c\u6982\u89c8-",children:"2. \u5e38\u89c1\u64cd\u4f5c\u6982\u89c8 \ud83d\udccb"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u64cd\u4f5c"}),(0,s.jsx)(n.th,{children:"\u547d\u4ee4\u683c\u5f0f"}),(0,s.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u542f\u52a8 iotop"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"sudo iotop"})}),(0,s.jsxs)(n.td,{children:["\u542f\u52a8 ",(0,s.jsx)(n.code,{children:"iotop"})," \u547d\u4ee4\uff0c\u5b9e\u65f6\u663e\u793a\u78c1\u76d8 I/O \u6d3b\u52a8\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u663e\u793a\u7279\u5b9a\u8fdb\u7a0b\u7684 I/O \u4fe1\u606f"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"sudo iotop -p <PID>"})}),(0,s.jsx)(n.td,{children:"\u663e\u793a\u6307\u5b9a\u8fdb\u7a0b\uff08\u7531\u8fdb\u7a0b\u53f7 PID \u786e\u5b9a\uff09\u7684 I/O \u6d3b\u52a8\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u4ee5\u6279\u5904\u7406\u6a21\u5f0f\u8fd0\u884c"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"sudo iotop -b"})}),(0,s.jsx)(n.td,{children:"\u542f\u52a8\u6279\u5904\u7406\u6a21\u5f0f\uff0c\u9002\u7528\u4e8e\u5c06\u8f93\u51fa\u4fdd\u5b58\u5230\u6587\u4ef6\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u663e\u793a\u66f4\u8be6\u7ec6\u7684\u4fe1\u606f"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"sudo iotop -o"})}),(0,s.jsx)(n.td,{children:"\u53ea\u663e\u793a\u6b63\u5728\u8fdb\u884c I/O \u64cd\u4f5c\u7684\u8fdb\u7a0b\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u5237\u65b0\u95f4\u9694\u8bbe\u7f6e"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"sudo iotop -d <\u79d2\u6570>"})}),(0,s.jsx)(n.td,{children:"\u8bbe\u7f6e\u663e\u793a\u5237\u65b0\u65f6\u95f4\u95f4\u9694\uff08\u5355\u4f4d\u4e3a\u79d2\uff09\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u663e\u793a\u6240\u6709 I/O \u6d3b\u52a8"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"sudo iotop -a"})}),(0,s.jsx)(n.td,{children:"\u663e\u793a\u6240\u6709\u8fdb\u884c I/O \u64cd\u4f5c\u7684\u8fdb\u7a0b\uff0c\u5305\u62ec\u540e\u53f0\u8fdb\u7a0b\u3002"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"3-\u547d\u4ee4\u793a\u4f8b-",children:"3. \u547d\u4ee4\u793a\u4f8b \u26a1"}),"\n",(0,s.jsx)(n.h3,{id:"31-\u542f\u52a8-iotop",children:"3.1 \u542f\u52a8 iotop"}),"\n",(0,s.jsxs)(n.p,{children:["\u57fa\u672c\u7684\u547d\u4ee4\u683c\u5f0f\u662f\u76f4\u63a5\u8fd0\u884c ",(0,s.jsx)(n.code,{children:"iotop"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo iotop\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u5c06\u663e\u793a\u4e00\u4e2a\u5b9e\u65f6\u66f4\u65b0\u7684\u8fdb\u7a0b\u5217\u8868\uff0c\u5176\u4e2d\u5305\u542b\u6bcf\u4e2a\u8fdb\u7a0b\u7684\u78c1\u76d8 I/O \u6d3b\u52a8\uff0c\u5982\u8bfb\u53d6\u901f\u5ea6\uff08",(0,s.jsx)(n.code,{children:"READ"}),"\uff09\u3001\u5199\u5165\u901f\u5ea6\uff08",(0,s.jsx)(n.code,{children:"WRITE"}),"\uff09\u4ee5\u53ca\u603b I/O \u6d88\u8017\uff08",(0,s.jsx)(n.code,{children:"IO"}),"\uff09\u3002\u4f60\u53ef\u4ee5\u6309 ",(0,s.jsx)(n.code,{children:"q"})," \u952e\u9000\u51fa\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"32-\u663e\u793a\u7279\u5b9a\u8fdb\u7a0b\u7684-io-\u4fe1\u606f",children:"3.2 \u663e\u793a\u7279\u5b9a\u8fdb\u7a0b\u7684 I/O \u4fe1\u606f"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u53ea\u5173\u5fc3\u67d0\u4e2a\u8fdb\u7a0b\u7684 I/O \u6d3b\u52a8\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"-p"})," \u9009\u9879\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo iotop -p 1234\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u663e\u793a\u8fdb\u7a0b ID \u4e3a 1234 \u7684\u8fdb\u7a0b\u7684\u78c1\u76d8 I/O \u6d3b\u52a8\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"33-\u542f\u52a8\u6279\u5904\u7406\u6a21\u5f0f",children:"3.3 \u542f\u52a8\u6279\u5904\u7406\u6a21\u5f0f"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u60f3\u5c06 ",(0,s.jsx)(n.code,{children:"iotop"})," \u7684\u8f93\u51fa\u4fdd\u5b58\u5230\u6587\u4ef6\u4e2d\u8fdb\u884c\u540e\u7eed\u5206\u6790\uff0c\u53ef\u4ee5\u4f7f\u7528\u6279\u5904\u7406\u6a21\u5f0f ",(0,s.jsx)(n.code,{children:"-b"})," \u9009\u9879\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo iotop -b -n 10 > iotop_output.txt\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u4ee5\u6279\u5904\u7406\u6a21\u5f0f\u8fd0\u884c ",(0,s.jsx)(n.code,{children:"iotop"}),"\uff0c\u5e76\u5c06\u8f93\u51fa\u4fdd\u5b58\u5230 ",(0,s.jsx)(n.code,{children:"iotop_output.txt"})," \u6587\u4ef6\u4e2d\u3002",(0,s.jsx)(n.code,{children:"-n 10"})," \u6307\u5b9a\u4e86\u8fd0\u884c\u7684\u6b21\u6570\uff0810 \u6b21\uff09\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"34-\u663e\u793a\u6b63\u5728\u8fdb\u884c-io-\u64cd\u4f5c\u7684\u8fdb\u7a0b",children:"3.4 \u663e\u793a\u6b63\u5728\u8fdb\u884c I/O \u64cd\u4f5c\u7684\u8fdb\u7a0b"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u53ea\u5173\u5fc3\u5f53\u524d\u6b63\u5728\u8fdb\u884c\u78c1\u76d8 I/O \u64cd\u4f5c\u7684\u8fdb\u7a0b\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"-o"})," \u9009\u9879\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo iotop -o\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6b64\u547d\u4ee4\u53ea\u4f1a\u663e\u793a\u5f53\u524d\u6b63\u5728\u6267\u884c\u78c1\u76d8 I/O \u64cd\u4f5c\u7684\u8fdb\u7a0b\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"35-\u8bbe\u7f6e\u5237\u65b0\u95f4\u9694",children:"3.5 \u8bbe\u7f6e\u5237\u65b0\u95f4\u9694"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u8bbe\u7f6e ",(0,s.jsx)(n.code,{children:"iotop"})," \u5237\u65b0\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d\u4e3a\u79d2\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,s.jsx)(n.code,{children:"iotop"})," \u6bcf\u79d2\u5237\u65b0\u4e00\u6b21\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo iotop -d 2\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u5c06\u4f7f\u5f97\u663e\u793a\u7684\u5185\u5bb9\u6bcf 2 \u79d2\u5237\u65b0\u4e00\u6b21\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"36-\u663e\u793a\u6240\u6709-io-\u6d3b\u52a8",children:"3.6 \u663e\u793a\u6240\u6709 I/O \u6d3b\u52a8"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u60f3\u67e5\u770b\u6240\u6709\u8fdb\u884c I/O \u64cd\u4f5c\u7684\u8fdb\u7a0b\uff08\u5305\u62ec\u540e\u53f0\u8fdb\u7a0b\uff09\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"-a"})," \u9009\u9879\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo iotop -a\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u663e\u793a\u6240\u6709\u6b63\u5728\u8fdb\u884c I/O \u64cd\u4f5c\u7684\u8fdb\u7a0b\uff0c\u5305\u62ec\u90a3\u4e9b\u5904\u4e8e\u540e\u53f0\u7684\u8fdb\u7a0b\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"4-\u5e2e\u52a9\u4fe1\u606f",children:"4. \u5e2e\u52a9\u4fe1\u606f\ud83d\udcdd"}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.mdxAdmonitionTitle,{children:["\u4ee5\u4e0b\u662f ",(0,s.jsx)(n.code,{children:"sudo iotop -h"})," \u7ed9\u51fa\u7684\u5e2e\u52a9\u4fe1\u606f"]}),(0,s.jsx)(n.p,{children:"\u4f7f\u7528\uff1a/usr/sbin/iotop [\u9009\u9879]"}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DISK READ"})," \u548c ",(0,s.jsx)(n.strong,{children:"DISK WRITE"})," \u8868\u793a\u5728\u91c7\u6837\u671f\u95f4\u4f7f\u7528\u7684\u5757I/O\u5e26\u5bbd\u3002",(0,s.jsx)(n.strong,{children:"SWAPIN"})," \u548c ",(0,s.jsx)(n.strong,{children:"IO"})," \u5206\u522b\u8868\u793a\u7ebf\u7a0b\u5728\u4ea4\u6362\u5185\u5b58\uff08swapping in\uff09\u548c\u7b49\u5f85I/O\u65f6\u6240\u82b1\u8d39\u7684\u65f6\u95f4\u767e\u5206\u6bd4\u3002",(0,s.jsx)(n.strong,{children:"PRIO"})," \u8868\u793a\u7ebf\u7a0b\u8fd0\u884c\u7684I/O\u4f18\u5148\u7ea7\uff08\u4f7f\u7528",(0,s.jsx)(n.code,{children:"ionice"}),"\u547d\u4ee4\u8bbe\u7f6e\uff09\u3002"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u63a7\u5236\uff1a"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5de6\u53f3\u7bad\u5934\u952e\u6539\u53d8\u6392\u5e8f\u5217"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"r"}),"\u952e\u53cd\u8f6c\u6392\u5e8f\u987a\u5e8f"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"o"}),"\u952e\u5207\u6362",(0,s.jsx)(n.code,{children:"--only"}),"\u9009\u9879"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"p"}),"\u952e\u5207\u6362",(0,s.jsx)(n.code,{children:"--processes"}),"\u9009\u9879"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"a"}),"\u952e\u5207\u6362",(0,s.jsx)(n.code,{children:"--accumulated"}),"\u9009\u9879"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"i"}),"\u952e\u66f4\u6539I/O\u4f18\u5148\u7ea7"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"q"}),"\u952e\u9000\u51fa"]}),"\n",(0,s.jsx)(n.li,{children:"\u4efb\u4f55\u5176\u4ed6\u952e\u5f3a\u5236\u5237\u65b0"}),"\n"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u9009\u9879\uff1a"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--version"})," \u663e\u793a\u7a0b\u5e8f\u7684\u7248\u672c\u53f7\u5e76\u9000\u51fa"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-h, --help"})," \u663e\u793a\u6b64\u5e2e\u52a9\u4fe1\u606f\u5e76\u9000\u51fa"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-o, --only"})," \u53ea\u663e\u793a\u5b9e\u9645\u6267\u884cI/O\u7684\u8fdb\u7a0b\u6216\u7ebf\u7a0b"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-b, --batch"})," \u975e\u4ea4\u4e92\u6a21\u5f0f"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-n NUM, --iter=NUM"})," \u7ed3\u675f\u524d\u7684\u8fed\u4ee3\u6b21\u6570 [\u65e0\u9650]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-d SEC, --delay=SEC"})," \u8fed\u4ee3\u4e4b\u95f4\u7684\u5ef6\u8fdf [1\u79d2]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-p PID, --pid=PID"})," \u8981\u76d1\u63a7\u7684\u8fdb\u7a0b/\u7ebf\u7a0b [\u5168\u90e8]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-u USER, --user=USER"})," \u8981\u76d1\u63a7\u7684\u7528\u6237 [\u5168\u90e8]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-P, --processes"})," \u53ea\u663e\u793a\u8fdb\u7a0b\uff0c\u4e0d\u663e\u793a\u6240\u6709\u7ebf\u7a0b"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-a, --accumulated"})," \u663e\u793a\u7d2f\u79ef\u7684I/O\u800c\u4e0d\u662f\u5e26\u5bbd"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-k, --kilobytes"})," \u4f7f\u7528\u5343\u5b57\u8282\u800c\u4e0d\u662f\u4eba\u7c7b\u53cb\u597d\u7684\u5355\u4f4d"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-t, --time"})," \u5728\u6bcf\u4e00\u884c\u4e0a\u6dfb\u52a0\u65f6\u95f4\u6233\uff08\u6697\u793a",(0,s.jsx)(n.code,{children:"--batch"}),"\uff09"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-q, --quiet"})," \u538b\u5236\u5934\u90e8\u7684\u4e00\u4e9b\u884c\uff08\u6697\u793a",(0,s.jsx)(n.code,{children:"--batch"}),"\uff09"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--no-help"})," \u538b\u5236\u5feb\u6377\u65b9\u5f0f\u5217\u8868"]}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"5-\u5c0f\u8d34\u58eb-",children:"5. \u5c0f\u8d34\u58eb \ud83d\udca1"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u6743\u9650\u8981\u6c42"}),"\uff1a\u7531\u4e8e ",(0,s.jsx)(n.code,{children:"iotop"})," \u9700\u8981\u8bbf\u95ee\u7cfb\u7edf\u7684 I/O \u5b50\u7cfb\u7edf\uff0c\u56e0\u6b64\u9700\u8981 root \u6743\u9650\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"sudo"})," \u8fd0\u884c\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:["\u4e0e ",(0,s.jsx)(n.code,{children:"top"})," \u7ed3\u5408\u4f7f\u7528"]}),"\uff1a",(0,s.jsx)(n.code,{children:"iotop"})," \u4e0e ",(0,s.jsx)(n.code,{children:"top"})," \u7c7b\u4f3c\uff0c\u53ef\u4ee5\u5b9e\u65f6\u76d1\u63a7\u78c1\u76d8 I/O\u3002\u4f60\u53ef\u4ee5\u7ed3\u5408\u4e24\u8005\u4f7f\u7528\uff0c\u4ee5\u4fbf\u5168\u9762\u76d1\u63a7\u7cfb\u7edf\u7684\u8d44\u6e90\u4f7f\u7528\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u9002\u5408\u8bca\u65ad I/O \u95ee\u9898"}),"\uff1a\u5982\u679c\u4f60\u53d1\u73b0\u7cfb\u7edf\u54cd\u5e94\u53d8\u6162\uff0c",(0,s.jsx)(n.code,{children:"iotop"})," \u662f\u6392\u67e5\u78c1\u76d8 I/O \u95ee\u9898\u7684\u5229\u5668\u3002\u5b83\u80fd\u591f\u5e2e\u52a9\u4f60\u8bc6\u522b\u54ea\u4e9b\u8fdb\u7a0b\u5360\u7528\u4e86\u8fc7\u591a\u7684\u78c1\u76d8\u5e26\u5bbd\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"6-\u603b\u7ed3-",children:"6. \u603b\u7ed3 \ud83c\udfaf"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"iotop"})," \u662f\u4e00\u4e2a\u529f\u80fd\u5f3a\u5927\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u4e13\u95e8\u7528\u4e8e\u76d1\u63a7 Linux \u7cfb\u7edf\u4e2d\u7684\u78c1\u76d8 I/O \u6d3b\u52a8\u3002\u901a\u8fc7\u5b9e\u65f6\u663e\u793a\u8fdb\u7a0b\u7684\u78c1\u76d8\u8bfb\u5199\u884c\u4e3a\uff0c\u5b83\u53ef\u4ee5\u5e2e\u52a9\u4f60\u5feb\u901f\u8bc6\u522b\u54ea\u4e9b\u8fdb\u7a0b\u53ef\u80fd\u5bfc\u81f4\u7cfb\u7edf\u6027\u80fd\u4e0b\u964d\uff0c\u5c24\u5176\u662f\u78c1\u76d8 I/O \u5bc6\u96c6\u578b\u5e94\u7528\u3002\u638c\u63e1 ",(0,s.jsx)(n.code,{children:"iotop"}),"\uff0c\u4f60\u53ef\u4ee5\u66f4\u9ad8\u6548\u5730\u7ba1\u7406\u548c\u4f18\u5316\u7cfb\u7edf\u6027\u80fd\uff0c\u6392\u67e5\u6f5c\u5728\u7684\u74f6\u9888\u3002\u2699\ufe0f"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5e0c\u671b\u8fd9\u7bc7\u6559\u7a0b\u5e2e\u52a9\u4f60\u66f4\u597d\u5730\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"iotop"})," \u547d\u4ee4\uff01\u522b\u5fd8\u4e86\u6536\u85cf",(0,s.jsx)(n.strong,{children:"\u5728\u7ebf\u77e5\u8bc6\u5e93"}),"\uff08 ",(0,s.jsx)(n.a,{href:"http://www.zxzsk.com",children:"www.zxzsk.com"})," \uff09\u54e6\uff01\ud83d\ude0a"]})]})}function x(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},8453:(e,n,d)=>{d.d(n,{R:()=>l,x:()=>o});var i=d(6540);const s={},c=i.createContext(s);function l(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);