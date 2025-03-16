"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5419],{879:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>h,contentTitle:()=>r,default:()=>t,frontMatter:()=>s,metadata:()=>d,toc:()=>x});const d=JSON.parse('{"id":"command/\u538b\u7f29\u548c\u89e3\u538b\u7f29/zip","title":"zip","description":"\u2b50 \u538b\u7f29.zip \u683c\u5f0f","source":"@site/docs/02-command/70-\u538b\u7f29\u548c\u89e3\u538b\u7f29/zip.md","sourceDirName":"02-command/70-\u538b\u7f29\u548c\u89e3\u538b\u7f29","slug":"/90cddf9d","permalink":"/90cddf9d","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/02-command/70-\u538b\u7f29\u548c\u89e3\u538b\u7f29/zip.md","tags":[],"version":"current","frontMatter":{"slug":"/90cddf9d"},"sidebar":"tutorialSidebar","previous":{"title":"unzip","permalink":"/91e310c4"},"next":{"title":"\u5b9a\u65f6\u4efb\u52a1","permalink":"/category/\u5b9a\u65f6\u4efb\u52a1"}}');var l=n(4848),c=n(8453);const s={slug:"/90cddf9d"},r=void 0,h={},x=[{value:"1. \u7b80\u4ecb",id:"1-\u7b80\u4ecb",level:2},{value:"2. \u5e38\u89c1\u64cd\u4f5c\u6982\u89c8 \ud83d\udccb",id:"2-\u5e38\u89c1\u64cd\u4f5c\u6982\u89c8-",level:2},{value:"3. \u547d\u4ee4\u793a\u4f8b \u26a1",id:"3-\u547d\u4ee4\u793a\u4f8b-",level:2},{value:"3.1 \u521b\u5efa zip \u6587\u4ef6",id:"31-\u521b\u5efa-zip-\u6587\u4ef6",level:3},{value:"3.2 \u6dfb\u52a0\u6587\u4ef6\u5230 zip \u6587\u4ef6",id:"32-\u6dfb\u52a0\u6587\u4ef6\u5230-zip-\u6587\u4ef6",level:3},{value:"3.3 \u5220\u9664 zip \u6587\u4ef6\u4e2d\u7684\u6587\u4ef6",id:"33-\u5220\u9664-zip-\u6587\u4ef6\u4e2d\u7684\u6587\u4ef6",level:3},{value:"3.4 \u67e5\u770b zip \u6587\u4ef6\u5185\u5bb9",id:"34-\u67e5\u770b-zip-\u6587\u4ef6\u5185\u5bb9",level:3},{value:"3.5 \u89e3\u538b zip \u6587\u4ef6",id:"35-\u89e3\u538b-zip-\u6587\u4ef6",level:3},{value:"4. \u5e38\u7528\u9009\u9879 \ud83d\udcdd",id:"4-\u5e38\u7528\u9009\u9879-",level:2},{value:"5. \u5c0f\u8d34\u58eb \ud83d\udca1",id:"5-\u5c0f\u8d34\u58eb-",level:2},{value:"6. \u4e0e\u5176\u4ed6\u538b\u7f29\u5de5\u5177\u7684\u6bd4\u8f83 \ud83d\udcca",id:"6-\u4e0e\u5176\u4ed6\u538b\u7f29\u5de5\u5177\u7684\u6bd4\u8f83-",level:2},{value:"\u4f18\u70b9\uff1a",id:"\u4f18\u70b9",level:3},{value:"\u7f3a\u70b9\uff1a",id:"\u7f3a\u70b9",level:3},{value:"\u9002\u7528\u573a\u666f\uff1a",id:"\u9002\u7528\u573a\u666f",level:3},{value:"7. \u603b\u7ed3 \ud83c\udfaf",id:"7-\u603b\u7ed3-",level:2}];function j(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.p,{children:"\u2b50 \u538b\u7f29.zip \u683c\u5f0f"}),"\n",(0,l.jsx)(i.h2,{id:"1-\u7b80\u4ecb",children:"1. \u7b80\u4ecb"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"zip"})," \u547d\u4ee4\u662f Linux \u4e2d\u7528\u4e8e\u521b\u5efa\u548c\u7ba1\u7406 ZIP \u538b\u7f29\u6587\u4ef6\u7684\u5de5\u5177\u3002\u901a\u8fc7 ",(0,l.jsx)(i.code,{children:"zip"}),"\uff0c\u4f60\u53ef\u4ee5\u5c06\u591a\u4e2a\u6587\u4ef6\u548c\u76ee\u5f55\u6253\u5305\u5e76\u538b\u7f29\u6210\u4e00\u4e2a ",(0,l.jsx)(i.code,{children:".zip"})," \u683c\u5f0f\u7684\u6587\u4ef6\uff0c\u65b9\u4fbf\u6587\u4ef6\u4f20\u8f93\u548c\u5b58\u50a8 \ud83d\udddc\ufe0f\u3002"]}),"\n",(0,l.jsx)(i.h2,{id:"2-\u5e38\u89c1\u64cd\u4f5c\u6982\u89c8-",children:"2. \u5e38\u89c1\u64cd\u4f5c\u6982\u89c8 \ud83d\udccb"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"\u64cd\u4f5c"}),(0,l.jsx)(i.th,{children:"\u547d\u4ee4\u683c\u5f0f"}),(0,l.jsx)(i.th,{children:"\u8bf4\u660e"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"\u521b\u5efa zip \u6587\u4ef6"}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"zip <\u5305\u540d.zip> <\u6587\u4ef6\u6216\u76ee\u5f55>"})}),(0,l.jsx)(i.td,{children:"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 zip \u6587\u4ef6\u3002"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"\u6dfb\u52a0\u6587\u4ef6\u5230 zip \u6587\u4ef6"}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"zip -u <\u5305\u540d.zip> <\u6587\u4ef6>"})}),(0,l.jsx)(i.td,{children:"\u5c06\u6587\u4ef6\u6dfb\u52a0\u5230\u5df2\u5b58\u5728\u7684 zip \u6587\u4ef6\u4e2d\u3002"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"\u5220\u9664 zip \u6587\u4ef6\u4e2d\u7684\u6587\u4ef6"}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"zip -d <\u5305\u540d.zip> <\u6587\u4ef6>"})}),(0,l.jsx)(i.td,{children:"\u4ece zip \u6587\u4ef6\u4e2d\u5220\u9664\u6307\u5b9a\u7684\u6587\u4ef6\u3002"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"\u67e5\u770b zip \u6587\u4ef6\u5185\u5bb9"}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"unzip -l <\u5305\u540d.zip>"})}),(0,l.jsx)(i.td,{children:"\u5217\u51fa zip \u6587\u4ef6\u4e2d\u7684\u6587\u4ef6\u548c\u76ee\u5f55\u3002"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"\u89e3\u538b zip \u6587\u4ef6"}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"unzip <\u5305\u540d.zip>"})}),(0,l.jsx)(i.td,{children:"\u89e3\u538b zip \u6587\u4ef6\u5230\u5f53\u524d\u76ee\u5f55\u3002"})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"3-\u547d\u4ee4\u793a\u4f8b-",children:"3. \u547d\u4ee4\u793a\u4f8b \u26a1"}),"\n",(0,l.jsx)(i.h3,{id:"31-\u521b\u5efa-zip-\u6587\u4ef6",children:"3.1 \u521b\u5efa zip \u6587\u4ef6"}),"\n",(0,l.jsx)(i.p,{children:"\u521b\u5efa\u4e00\u4e2a\u5305\u542b\u591a\u4e2a\u6587\u4ef6\u7684 zip \u6587\u4ef6\uff1a"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"$ zip myarchive.zip file1.txt file2.txt directory/\n"})}),"\n",(0,l.jsxs)(i.p,{children:["\u6b64\u547d\u4ee4\u4f1a\u5c06 ",(0,l.jsx)(i.code,{children:"file1.txt"}),"\u3001",(0,l.jsx)(i.code,{children:"file2.txt"})," \u548c ",(0,l.jsx)(i.code,{children:"directory/"})," \u6253\u5305\u5e76\u538b\u7f29\u4e3a ",(0,l.jsx)(i.code,{children:"myarchive.zip"}),"\u3002"]}),"\n",(0,l.jsx)(i.h3,{id:"32-\u6dfb\u52a0\u6587\u4ef6\u5230-zip-\u6587\u4ef6",children:"3.2 \u6dfb\u52a0\u6587\u4ef6\u5230 zip \u6587\u4ef6"}),"\n",(0,l.jsx)(i.p,{children:"\u5c06\u6587\u4ef6\u6dfb\u52a0\u5230\u5df2\u5b58\u5728\u7684 zip \u6587\u4ef6\u4e2d\uff1a"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"$ zip -u myarchive.zip newfile.txt\n"})}),"\n",(0,l.jsxs)(i.p,{children:["\u6b64\u547d\u4ee4\u4f1a\u5c06 ",(0,l.jsx)(i.code,{children:"newfile.txt"})," \u6dfb\u52a0\u5230 ",(0,l.jsx)(i.code,{children:"myarchive.zip"})," \u4e2d\u3002"]}),"\n",(0,l.jsx)(i.h3,{id:"33-\u5220\u9664-zip-\u6587\u4ef6\u4e2d\u7684\u6587\u4ef6",children:"3.3 \u5220\u9664 zip \u6587\u4ef6\u4e2d\u7684\u6587\u4ef6"}),"\n",(0,l.jsx)(i.p,{children:"\u4ece zip \u6587\u4ef6\u4e2d\u5220\u9664\u6307\u5b9a\u7684\u6587\u4ef6\uff1a"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"$ zip -d myarchive.zip file1.txt\n"})}),"\n",(0,l.jsxs)(i.p,{children:["\u6b64\u547d\u4ee4\u4f1a\u4ece ",(0,l.jsx)(i.code,{children:"myarchive.zip"})," \u4e2d\u5220\u9664 ",(0,l.jsx)(i.code,{children:"file1.txt"}),"\u3002"]}),"\n",(0,l.jsx)(i.h3,{id:"34-\u67e5\u770b-zip-\u6587\u4ef6\u5185\u5bb9",children:"3.4 \u67e5\u770b zip \u6587\u4ef6\u5185\u5bb9"}),"\n",(0,l.jsx)(i.p,{children:"\u5217\u51fa zip \u6587\u4ef6\u4e2d\u7684\u6587\u4ef6\u548c\u76ee\u5f55\uff1a"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"$ unzip -l myarchive.zip\n"})}),"\n",(0,l.jsxs)(i.p,{children:["\u6b64\u547d\u4ee4\u4f1a\u663e\u793a ",(0,l.jsx)(i.code,{children:"myarchive.zip"})," \u4e2d\u7684\u6240\u6709\u6587\u4ef6\u548c\u76ee\u5f55\u3002"]}),"\n",(0,l.jsx)(i.h3,{id:"35-\u89e3\u538b-zip-\u6587\u4ef6",children:"3.5 \u89e3\u538b zip \u6587\u4ef6"}),"\n",(0,l.jsx)(i.p,{children:"\u89e3\u538b zip \u6587\u4ef6\u5230\u5f53\u524d\u76ee\u5f55\uff1a"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"$ unzip myarchive.zip\n"})}),"\n",(0,l.jsxs)(i.p,{children:["\u6b64\u547d\u4ee4\u4f1a\u5c06 ",(0,l.jsx)(i.code,{children:"myarchive.zip"})," \u4e2d\u7684\u6587\u4ef6\u548c\u76ee\u5f55\u89e3\u538b\u5230\u5f53\u524d\u76ee\u5f55\u3002"]}),"\n",(0,l.jsx)(i.h2,{id:"4-\u5e38\u7528\u9009\u9879-",children:"4. \u5e38\u7528\u9009\u9879 \ud83d\udcdd"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"-r"}),"\uff1a\u9012\u5f52\u5730\u538b\u7f29\u76ee\u5f55\u3002"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"-u"}),"\uff1a\u66f4\u65b0 zip \u6587\u4ef6\uff0c\u6dfb\u52a0\u6216\u66ff\u6362\u6587\u4ef6\u3002"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"-d"}),"\uff1a\u4ece zip \u6587\u4ef6\u4e2d\u5220\u9664\u6587\u4ef6\u3002"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"-l"}),"\uff1a\u5217\u51fa zip \u6587\u4ef6\u4e2d\u7684\u6587\u4ef6\u548c\u76ee\u5f55\u3002"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"-j"}),"\uff1a\u53ea\u5b58\u50a8\u6587\u4ef6\u540d\uff0c\u4e0d\u5305\u542b\u76ee\u5f55\u7ed3\u6784\u3002"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"-m"}),"\uff1a\u5728\u6dfb\u52a0\u6587\u4ef6\u5230 zip \u6587\u4ef6\u540e\uff0c\u5220\u9664\u539f\u59cb\u6587\u4ef6\u3002"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"-P"}),"\uff1a\u4f7f\u7528\u5bc6\u7801\u4fdd\u62a4 zip \u6587\u4ef6\u3002"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"-q"}),"\uff1a\u5b89\u9759\u6a21\u5f0f\uff0c\u4e0d\u663e\u793a\u4efb\u4f55\u4fe1\u606f\u3002"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"-v"}),"\uff1a\u663e\u793a\u8be6\u7ec6\u7684\u538b\u7f29\u8fc7\u7a0b\u3002"]}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"5-\u5c0f\u8d34\u58eb-",children:"5. \u5c0f\u8d34\u58eb \ud83d\udca1"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"zip"})," \u547d\u4ee4\u53ef\u4ee5\u76f4\u63a5\u538b\u7f29\u76ee\u5f55\uff0c\u9012\u5f52\u5730\u5305\u542b\u5b50\u76ee\u5f55\u548c\u6587\u4ef6\u3002"]}),"\n",(0,l.jsxs)(i.li,{children:["\u4f7f\u7528 ",(0,l.jsx)(i.code,{children:"-r"})," \u9009\u9879\u53ef\u4ee5\u9012\u5f52\u5730\u538b\u7f29\u76ee\u5f55\uff0c\u4f8b\u5982 ",(0,l.jsx)(i.code,{children:"zip -r myarchive.zip /path/to/directory"}),"\u3002"]}),"\n",(0,l.jsxs)(i.li,{children:["\u5982\u679c\u9700\u8981\u5c06\u6587\u4ef6\u89e3\u538b\u5230\u7279\u5b9a\u76ee\u5f55\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(i.code,{children:"unzip"})," \u547d\u4ee4\u7684 ",(0,l.jsx)(i.code,{children:"-d"})," \u9009\u9879\uff0c\u4f8b\u5982 ",(0,l.jsx)(i.code,{children:"unzip myarchive.zip -d /path/to/destination"}),"\u3002"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"zip"})," \u547d\u4ee4\u652f\u6301\u4f7f\u7528\u5bc6\u7801\u4fdd\u62a4\u538b\u7f29\u6587\u4ef6\uff0c",(0,l.jsx)(i.code,{children:"-P"})," \u9009\u9879\u53ef\u4ee5\u6307\u5b9a\u5bc6\u7801\u3002"]}),"\n",(0,l.jsxs)(i.li,{children:["\u5982\u679c\u4f60\u60f3\u5728\u6dfb\u52a0\u6587\u4ef6\u5230 zip \u6587\u4ef6\u540e\u5220\u9664\u539f\u59cb\u6587\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(i.code,{children:"-m"})," \u9009\u9879\u3002"]}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"6-\u4e0e\u5176\u4ed6\u538b\u7f29\u5de5\u5177\u7684\u6bd4\u8f83-",children:"6. \u4e0e\u5176\u4ed6\u538b\u7f29\u5de5\u5177\u7684\u6bd4\u8f83 \ud83d\udcca"}),"\n",(0,l.jsx)(i.h3,{id:"\u4f18\u70b9",children:"\u4f18\u70b9\uff1a"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"\u8de8\u5e73\u53f0\u517c\u5bb9\u6027"}),"\uff1a",(0,l.jsx)(i.code,{children:"zip"})," \u683c\u5f0f\u5728 Windows\u3001macOS \u548c Linux \u4e0a\u90fd\u5e7f\u6cdb\u652f\u6301\uff0c\u65b9\u4fbf\u6587\u4ef6\u5728\u4e0d\u540c\u7cfb\u7edf\u95f4\u4f20\u8f93\u3002"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"\u7b80\u5355\u6027"}),"\uff1a",(0,l.jsx)(i.code,{children:"zip"})," \u547d\u4ee4\u4f7f\u7528\u7b80\u5355\uff0c\u9002\u5408\u65e5\u5e38\u6587\u4ef6\u538b\u7f29\u548c\u89e3\u538b\u7f29\u3002"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"\u7075\u6d3b\u6027"}),"\uff1a\u53ef\u4ee5\u6dfb\u52a0\u3001\u5220\u9664\u548c\u66f4\u65b0 zip \u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\u3002"]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"\u7f3a\u70b9",children:"\u7f3a\u70b9\uff1a"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"\u538b\u7f29\u6bd4"}),"\uff1a\u76f8\u6bd4\u4e8e ",(0,l.jsx)(i.code,{children:"bzip2"})," \u548c ",(0,l.jsx)(i.code,{children:"xz"}),"\uff0c",(0,l.jsx)(i.code,{children:"zip"})," \u7684\u538b\u7f29\u6bd4\u76f8\u5bf9\u8f83\u4f4e\u3002"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"\u538b\u7f29\u901f\u5ea6"}),"\uff1a\u5bf9\u4e8e\u5927\u6587\u4ef6\uff0c",(0,l.jsx)(i.code,{children:"zip"})," \u7684\u538b\u7f29\u901f\u5ea6\u4e0d\u5982 ",(0,l.jsx)(i.code,{children:"gzip"})," \u548c ",(0,l.jsx)(i.code,{children:"bzip2"})," \u5feb\u3002"]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"\u9002\u7528\u573a\u666f",children:"\u9002\u7528\u573a\u666f\uff1a"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"\u6587\u4ef6\u4f20\u8f93"}),"\uff1a",(0,l.jsx)(i.code,{children:"zip"})," \u9002\u5408\u5c06\u6587\u4ef6\u6253\u5305\u5e76\u4f20\u8f93\u5230\u4e0d\u540c\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u3002"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"\u5907\u4efd"}),"\uff1a\u7b80\u5355\u5907\u4efd\u6587\u4ef6\u6216\u76ee\u5f55\u3002"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"\u6587\u6863\u7ba1\u7406"}),"\uff1a\u538b\u7f29\u548c\u7ba1\u7406\u6587\u6863\u3001\u6e90\u4ee3\u7801\u7b49\u6587\u4ef6\u3002"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"\u8f6f\u4ef6\u5206\u53d1"}),"\uff1a\u67d0\u4e9b\u8f6f\u4ef6\u4ee5 ",(0,l.jsx)(i.code,{children:".zip"})," \u683c\u5f0f\u53d1\u5e03\u3002"]}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"7-\u603b\u7ed3-",children:"7. \u603b\u7ed3 \ud83c\udfaf"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"zip"})," \u547d\u4ee4\u662f Linux \u4e2d\u975e\u5e38\u5b9e\u7528\u7684\u6587\u4ef6\u538b\u7f29\u548c\u89e3\u538b\u7f29\u5de5\u5177\u3002\u5b83\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5355\u4e14\u5e7f\u6cdb\u652f\u6301\u7684\u538b\u7f29\u683c\u5f0f\uff0c\u9002\u5408\u5404\u79cd\u9700\u8981\u8de8\u5e73\u53f0\u4f20\u8f93\u548c\u7ba1\u7406\u6587\u4ef6\u7684\u573a\u666f \ud83d\uddc3\ufe0f\u3002\u5728\u5b9e\u9645\u64cd\u4f5c\u4e2d\uff0c\u6839\u636e\u9700\u6c42\u9009\u62e9\u5408\u9002\u7684\u9009\u9879\u548c\u538b\u7f29\u65b9\u6cd5\u662f\u5173\u952e\u3002"]}),"\n",(0,l.jsxs)(i.p,{children:["\u5e0c\u671b\u8fd9\u7bc7\u6559\u7a0b\u5e2e\u52a9\u4f60\u638c\u63e1\u5982\u4f55\u4f7f\u7528 ",(0,l.jsx)(i.code,{children:"zip"})," \u547d\u4ee4\uff0c\u5e76\u4e86\u89e3\u5176\u5728\u4e0d\u540c\u573a\u666f\u4e0b\u7684\u9002\u7528\u6027\uff01\u522b\u5fd8\u4e86\u6536\u85cf ",(0,l.jsx)(i.strong,{children:"\u5728\u7ebf\u77e5\u8bc6\u5e93"}),"\uff08 ",(0,l.jsx)(i.a,{href:"http://www.zxzsk.com",children:"www.zxzsk.com"})," \uff09\u54e6\uff01\ud83d\ude0a"]})]})}function t(e={}){const{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(j,{...e})}):j(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>r});var d=n(6540);const l={},c=d.createContext(l);function s(e){const i=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),d.createElement(c.Provider,{value:i},e.children)}}}]);