"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6167],{6081:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>h,contentTitle:()=>r,default:()=>t,frontMatter:()=>c,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"command/\u6587\u672c\u5904\u7406/head","title":"head","description":"\u2b50\u4ece\u5934\u67e5\u770b\u6587\u672c","source":"@site/docs/02-command/25-\u6587\u672c\u5904\u7406/head.md","sourceDirName":"02-command/25-\u6587\u672c\u5904\u7406","slug":"/a499fb00","permalink":"/a499fb00","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/02-command/25-\u6587\u672c\u5904\u7406/head.md","tags":[],"version":"current","frontMatter":{"slug":"/a499fb00"},"sidebar":"tutorialSidebar","previous":{"title":"grep","permalink":"/cc13f84a"},"next":{"title":"less","permalink":"/01e158f5"}}');var i=l(4848),d=l(8453);const c={slug:"/a499fb00"},r=void 0,h={},a=[{value:"1. \u547d\u4ee4\u7b80\u4ecb",id:"1-\u547d\u4ee4\u7b80\u4ecb",level:2},{value:"2. \u547d\u4ee4\u683c\u5f0f",id:"2-\u547d\u4ee4\u683c\u5f0f",level:2},{value:"2.1 <strong>\u5e38\u7528\u9009\u9879</strong>\uff1a",id:"21-\u5e38\u7528\u9009\u9879",level:3},{value:"3. \u547d\u4ee4\u793a\u4f8b",id:"3-\u547d\u4ee4\u793a\u4f8b",level:2},{value:"3.1 <strong>\u67e5\u770b\u6587\u4ef6\u7684\u524d 10 \u884c</strong>",id:"31-\u67e5\u770b\u6587\u4ef6\u7684\u524d-10-\u884c",level:3},{value:"3.2 <strong>\u67e5\u770b\u6587\u4ef6\u7684\u524d N \u884c</strong>",id:"32-\u67e5\u770b\u6587\u4ef6\u7684\u524d-n-\u884c",level:3},{value:"3.3 <strong>\u67e5\u770b\u6587\u4ef6\u7684\u524d N \u4e2a\u5b57\u8282</strong>",id:"33-\u67e5\u770b\u6587\u4ef6\u7684\u524d-n-\u4e2a\u5b57\u8282",level:3},{value:"3.4 <strong>\u67e5\u770b\u591a\u4e2a\u6587\u4ef6\u7684\u524d N \u884c</strong>",id:"34-\u67e5\u770b\u591a\u4e2a\u6587\u4ef6\u7684\u524d-n-\u884c",level:3},{value:"3.5 <strong>\u663e\u793a\u6587\u4ef6\u540d</strong>",id:"35-\u663e\u793a\u6587\u4ef6\u540d",level:3},{value:"3.6 <strong>\u4e0d\u663e\u793a\u6587\u4ef6\u540d</strong>",id:"36-\u4e0d\u663e\u793a\u6587\u4ef6\u540d",level:3},{value:"4. head \u4e0e\u5176\u4ed6\u547d\u4ee4\u7684\u7b80\u7565\u6bd4\u8f83 \ud83e\uddd0",id:"4-head-\u4e0e\u5176\u4ed6\u547d\u4ee4\u7684\u7b80\u7565\u6bd4\u8f83-",level:2},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:3},{value:"5. \u603b\u7ed3",id:"5-\u603b\u7ed3",level:2}];function x(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"\u2b50\u4ece\u5934\u67e5\u770b\u6587\u672c"}),"\n",(0,i.jsx)(e.h2,{id:"1-\u547d\u4ee4\u7b80\u4ecb",children:"1. \u547d\u4ee4\u7b80\u4ecb"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"head"})," \u662f Linux \u4e2d\u4e00\u4e2a\u975e\u5e38\u7b80\u5355\u4f46\u5b9e\u7528\u7684\u547d\u4ee4\uff0c\u7528\u4e8e\u67e5\u770b\u6587\u4ef6\u7684\u524d\u51e0\u884c\u3002\u5b83\u7279\u522b\u9002\u5408\u5feb\u901f\u9884\u89c8\u6587\u4ef6\u5185\u5bb9\uff0c\u5c24\u5176\u662f\u5728\u6587\u4ef6\u8f83\u5927\u65f6\uff0c\u53ef\u4ee5\u907f\u514d\u6253\u5f00\u6574\u4e2a\u6587\u4ef6\u3002\ud83d\udcc4\u2728"]}),"\n",(0,i.jsxs)(e.p,{children:["\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"head"})," \u547d\u4ee4\uff0c\u4f60\u53ef\u4ee5\u8f7b\u677e\u83b7\u53d6\u6587\u4ef6\u7684\u5f00\u5934\u90e8\u5206\uff0c\u5e2e\u52a9\u4f60\u5feb\u901f\u4e86\u89e3\u6587\u4ef6\u7684\u5927\u6982\u5185\u5bb9\uff0c\u5c24\u5176\u662f\u5728\u65e5\u5fd7\u6587\u4ef6\u548c\u914d\u7f6e\u6587\u4ef6\u4e2d\u975e\u5e38\u6709\u7528\uff01\ud83d\udccb"]}),"\n",(0,i.jsx)(e.h2,{id:"2-\u547d\u4ee4\u683c\u5f0f",children:"2. \u547d\u4ee4\u683c\u5f0f"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"head [\u9009\u9879] [\u6587\u4ef6]\n"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"head"})," \u4f1a\u9ed8\u8ba4\u663e\u793a\u6587\u4ef6\u7684\u524d 10 \u884c\u3002\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528\u9009\u9879\u6765\u8c03\u6574\u663e\u793a\u7684\u884c\u6570\uff0c\u6216\u901a\u8fc7\u7ba1\u9053\u4e0e\u5176\u4ed6\u547d\u4ee4\u7ec4\u5408\u4f7f\u7528\uff01\ud83d\udd04"]}),"\n",(0,i.jsxs)(e.h3,{id:"21-\u5e38\u7528\u9009\u9879",children:["2.1 ",(0,i.jsx)(e.strong,{children:"\u5e38\u7528\u9009\u9879"}),"\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"-n N"}),"\uff1a\u663e\u793a\u6587\u4ef6\u7684\u524d N \u884c\uff08\u9ed8\u8ba4\u662f 10 \u884c\uff09\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"-c N"}),"\uff1a\u663e\u793a\u6587\u4ef6\u7684\u524d N \u4e2a\u5b57\u8282\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"-q"}),"\uff1a\u4e0d\u663e\u793a\u6587\u4ef6\u540d\uff08\u5728\u5904\u7406\u591a\u4e2a\u6587\u4ef6\u65f6\uff09\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"-v"}),"\uff1a\u603b\u662f\u663e\u793a\u6587\u4ef6\u540d\uff0c\u5373\u4f7f\u53ea\u6709\u4e00\u4e2a\u6587\u4ef6\u65f6\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"3-\u547d\u4ee4\u793a\u4f8b",children:"3. \u547d\u4ee4\u793a\u4f8b"}),"\n",(0,i.jsxs)(e.h3,{id:"31-\u67e5\u770b\u6587\u4ef6\u7684\u524d-10-\u884c",children:["3.1 ",(0,i.jsx)(e.strong,{children:"\u67e5\u770b\u6587\u4ef6\u7684\u524d 10 \u884c"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,i.jsx)(e.code,{children:"head"})," \u663e\u793a\u6587\u4ef6\u7684\u524d 10 \u884c\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"$ head file.txt\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"line 1\nline 2\nline 3\nline 4\nline 5\nline 6\nline 7\nline 8\nline 9\nline 10\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u8f93\u51fa\u6587\u4ef6 ",(0,i.jsx)(e.code,{children:"file.txt"})," \u7684\u524d 10 \u884c\u5185\u5bb9\u3002\ud83d\udcdd"]}),"\n",(0,i.jsxs)(e.h3,{id:"32-\u67e5\u770b\u6587\u4ef6\u7684\u524d-n-\u884c",children:["3.2 ",(0,i.jsx)(e.strong,{children:"\u67e5\u770b\u6587\u4ef6\u7684\u524d N \u884c"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"-n"})," \u9009\u9879\u6765\u6307\u5b9a\u663e\u793a\u7684\u884c\u6570\u3002\u4f8b\u5982\uff0c\u67e5\u770b\u524d 5 \u884c\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"$ head -n 5 file.txt\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"line 1\nline 2\nline 3\nline 4\nline 5\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u6837\uff0c\u4f60\u5c31\u80fd\u5feb\u901f\u67e5\u770b\u6587\u4ef6\u7684\u5f00\u5934\u90e8\u5206\uff0c\u5e2e\u52a9\u4f60\u5feb\u901f\u6d4f\u89c8\u5185\u5bb9\uff01\ud83d\udc40"}),"\n",(0,i.jsxs)(e.h3,{id:"33-\u67e5\u770b\u6587\u4ef6\u7684\u524d-n-\u4e2a\u5b57\u8282",children:["3.3 ",(0,i.jsx)(e.strong,{children:"\u67e5\u770b\u6587\u4ef6\u7684\u524d N \u4e2a\u5b57\u8282"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u4f60\u66f4\u5173\u5fc3\u6587\u4ef6\u7684\u5927\u5c0f\u800c\u4e0d\u662f\u884c\u6570\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"-c"})," \u9009\u9879\u67e5\u770b\u524d N \u4e2a\u5b57\u8282\u3002\u4f8b\u5982\uff0c\u67e5\u770b\u524d 50 \u5b57\u8282\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"$ head -c 50 file.txt\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"line 1 line 2 line 3 line 4 line 5\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u663e\u793a\u6587\u4ef6 ",(0,i.jsx)(e.code,{children:"file.txt"})," \u7684\u524d 50 \u4e2a\u5b57\u8282\u3002\ud83d\udd20"]}),"\n",(0,i.jsxs)(e.h3,{id:"34-\u67e5\u770b\u591a\u4e2a\u6587\u4ef6\u7684\u524d-n-\u884c",children:["3.4 ",(0,i.jsx)(e.strong,{children:"\u67e5\u770b\u591a\u4e2a\u6587\u4ef6\u7684\u524d N \u884c"})]}),"\n",(0,i.jsx)(e.p,{children:"\u4f60\u8fd8\u53ef\u4ee5\u4e00\u6b21\u6027\u67e5\u770b\u591a\u4e2a\u6587\u4ef6\u7684\u524d\u51e0\u884c\u3002\u6bd4\u5982\uff0c\u67e5\u770b\u4e24\u4e2a\u6587\u4ef6\u7684\u524d 5 \u884c\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"$ head -n 5 file1.txt file2.txt\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"==> file1.txt <==\nline 1\nline 2\nline 3\nline 4\nline 5\n\n==> file2.txt <==\nline 1\nline 2\nline 3\nline 4\nline 5\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u8fd9\u6837\uff0c",(0,i.jsx)(e.code,{children:"head"})," \u4f1a\u4e3a\u6bcf\u4e2a\u6587\u4ef6\u663e\u793a\u6587\u4ef6\u540d\uff0c\u5e76\u663e\u793a\u6bcf\u4e2a\u6587\u4ef6\u7684\u524d N \u884c\u5185\u5bb9\u3002\ud83d\udcc2"]}),"\n",(0,i.jsxs)(e.h3,{id:"35-\u663e\u793a\u6587\u4ef6\u540d",children:["3.5 ",(0,i.jsx)(e.strong,{children:"\u663e\u793a\u6587\u4ef6\u540d"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u4f60\u5e0c\u671b\u5373\u4f7f\u53ea\u6709\u4e00\u4e2a\u6587\u4ef6\u65f6\u4e5f\u663e\u793a\u6587\u4ef6\u540d\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"-v"})," \u9009\u9879\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"$ head -v file.txt\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"==> file.txt <==\nline 1\nline 2\nline 3\nline 4\nline 5\nline 6\nline 7\nline 8\nline 9\nline 10\n"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"-v"})," \u9009\u9879\u786e\u4fdd\u5728\u663e\u793a\u5185\u5bb9\u4e4b\u524d\u4f1a\u663e\u793a\u6587\u4ef6\u540d\u3002\ud83d\udccb"]}),"\n",(0,i.jsxs)(e.h3,{id:"36-\u4e0d\u663e\u793a\u6587\u4ef6\u540d",children:["3.6 ",(0,i.jsx)(e.strong,{children:"\u4e0d\u663e\u793a\u6587\u4ef6\u540d"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u4f60\u4e0d\u5e0c\u671b\u5728\u663e\u793a\u591a\u4e2a\u6587\u4ef6\u5185\u5bb9\u65f6\u663e\u793a\u6587\u4ef6\u540d\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"-q"})," \u9009\u9879\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"$ head -q file1.txt file2.txt\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"line 1\nline 2\nline 3\nline 4\nline 5\nline 1\nline 2\nline 3\nline 4\nline 5\n"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"-q"})," \u4f1a\u8ba9\u4f60\u5728\u591a\u4e2a\u6587\u4ef6\u7684\u8f93\u51fa\u4e2d\u53bb\u6389\u6587\u4ef6\u540d\uff0c\u76f4\u63a5\u663e\u793a\u5185\u5bb9\u3002\ud83d\udd0d"]}),"\n",(0,i.jsx)(e.h2,{id:"4-head-\u4e0e\u5176\u4ed6\u547d\u4ee4\u7684\u7b80\u7565\u6bd4\u8f83-",children:"4. head \u4e0e\u5176\u4ed6\u547d\u4ee4\u7684\u7b80\u7565\u6bd4\u8f83 \ud83e\uddd0"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"head"})," \u662f\u4e00\u4e2a\u975e\u5e38\u57fa\u7840\u7684\u547d\u4ee4\uff0c\u901a\u5e38\u548c\u5176\u4ed6\u547d\u4ee4\u7ed3\u5408\u4f7f\u7528\u3002\u8fd9\u91cc\u662f\u5b83\u4e0e\u4e00\u4e9b\u5e38\u89c1\u547d\u4ee4\u7684\u7b80\u7565\u5bf9\u6bd4\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"head"})}),"\uff1a\u7528\u4e8e\u67e5\u770b\u6587\u4ef6\u7684\u5f00\u5934\u90e8\u5206\u3002\u5b83\u975e\u5e38\u9002\u5408\u9884\u89c8\u5927\u6587\u4ef6\u7684\u5185\u5bb9\u6216\u8005\u53ea\u67e5\u770b\u6587\u4ef6\u7684\u524d\u51e0\u884c\uff0c\u8282\u7701\u4e86\u4e0d\u5fc5\u8981\u7684\u52a0\u8f7d\u65f6\u95f4\u3002\ud83d\udd50"]}),"\n",(0,i.jsx)(e.p,{children:"\u793a\u4f8b\uff1a\u67e5\u770b\u6587\u4ef6\u5f00\u5934\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"$ head file.txt\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"tail"})}),"\uff1a\u4e0e ",(0,i.jsx)(e.code,{children:"head"})," \u76f8\u5bf9\uff0c",(0,i.jsx)(e.code,{children:"tail"})," \u7528\u4e8e\u67e5\u770b\u6587\u4ef6\u7684\u6700\u540e\u51e0\u884c\uff0c\u7279\u522b\u9002\u5408\u67e5\u770b\u65e5\u5fd7\u6587\u4ef6\u7684\u6700\u65b0\u5185\u5bb9\u3002\ud83d\udcdd"]}),"\n",(0,i.jsx)(e.p,{children:"\u793a\u4f8b\uff1a\u67e5\u770b\u6587\u4ef6\u672b\u5c3e\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"$ tail file.txt\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"cat"})}),"\uff1a\u7528\u4e8e\u663e\u793a\u6587\u4ef6\u7684\u5b8c\u6574\u5185\u5bb9\u3002\u5982\u679c\u4f60\u9700\u8981\u67e5\u770b\u6574\u4e2a\u6587\u4ef6\uff0c",(0,i.jsx)(e.code,{children:"cat"})," \u662f\u6700\u76f4\u63a5\u7684\u9009\u62e9\u3002\u4f46\u5728\u6587\u4ef6\u8f83\u5927\u7684\u60c5\u51b5\u4e0b\uff0c",(0,i.jsx)(e.code,{children:"head"})," \u66f4\u9002\u5408\u7528\u6765\u5feb\u901f\u9884\u89c8\u3002\ud83d\udcdc"]}),"\n",(0,i.jsx)(e.p,{children:"\u793a\u4f8b\uff1a\u663e\u793a\u6574\u4e2a\u6587\u4ef6\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"$ cat file.txt\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u4f7f\u7528\u573a\u666f",children:"\u4f7f\u7528\u573a\u666f"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5982\u679c\u4f60\u9700\u8981\u67e5\u770b",(0,i.jsx)(e.strong,{children:"\u6587\u4ef6\u7684\u524d\u51e0\u884c"}),"\uff0c",(0,i.jsx)(e.code,{children:"head"})," \u662f\u6700\u7b80\u5355\u5feb\u6377\u7684\u9009\u62e9\u3002\ud83d\udca8"]}),"\n",(0,i.jsxs)(e.li,{children:["\u5982\u679c\u4f60\u9700\u8981\u67e5\u770b",(0,i.jsx)(e.strong,{children:"\u6587\u4ef6\u7684\u6700\u540e\u51e0\u884c"}),"\uff0c",(0,i.jsx)(e.code,{children:"tail"})," \u662f\u66f4\u5408\u9002\u7684\u5de5\u5177\u3002\ud83d\udd1a"]}),"\n",(0,i.jsxs)(e.li,{children:["\u5982\u679c\u4f60\u9700\u8981\u67e5\u770b",(0,i.jsx)(e.strong,{children:"\u6574\u4e2a\u6587\u4ef6"}),"\uff0c",(0,i.jsx)(e.code,{children:"cat"})," \u5c06\u662f\u6700\u4f73\u9009\u62e9\u3002\ud83d\udcd6"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"5-\u603b\u7ed3",children:"5. \u603b\u7ed3"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"head"})," \u662f\u4e00\u4e2a\u975e\u5e38\u5b9e\u7528\u7684\u547d\u4ee4\uff0c\u5c24\u5176\u9002\u5408\u5feb\u901f\u9884\u89c8\u6587\u4ef6\u5185\u5bb9\u3002\u5b83\u4e0d\u4ec5\u53ef\u4ee5\u7528\u6765\u67e5\u770b\u6587\u4ef6\u7684\u524d N \u884c\uff0c\u8fd8\u53ef\u4ee5\u6309\u5b57\u8282\u67e5\u770b\u6587\u4ef6\u5185\u5bb9\uff0c\u975e\u5e38\u9ad8\u6548\uff01\ud83c\udfaf"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5feb\u53bb\u8bd5\u8bd5 ",(0,i.jsx)(e.code,{children:"head"})," \u547d\u4ee4\uff0c\u8ba9\u4f60\u8f7b\u677e\u5feb\u901f\u5730\u83b7\u53d6\u6587\u4ef6\u7684\u5f00\u5934\u90e8\u5206\uff01\ud83d\ude80"]}),"\n",(0,i.jsxs)(e.p,{children:["\u522b\u5fd8\u4e86\u6536\u85cf\u6211\u4eec\u7684\u5728\u7ebf\u77e5\u8bc6\u5e93 ",(0,i.jsx)(e.a,{href:"http://www.zxzsk.com",children:"www.zxzsk.com"}),"\uff0c\u7ee7\u7eed\u5b66\u4e60\u66f4\u591a\u5b9e\u7528\u7684 Linux \u6280\u5de7\uff01\ud83d\udcda"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsxs)(e.p,{children:["\u5e0c\u671b\u8fd9\u4e2a\u6559\u7a0b\u8ba9\u4f60\u8f7b\u677e\u638c\u63e1 ",(0,i.jsx)(e.code,{children:"head"})," \u547d\u4ee4\uff01\ud83c\udf89"]})]})}function t(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(x,{...n})}):x(n)}},8453:(n,e,l)=>{l.d(e,{R:()=>c,x:()=>r});var s=l(6540);const i={},d=s.createContext(i);function c(n){const e=s.useContext(d);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);