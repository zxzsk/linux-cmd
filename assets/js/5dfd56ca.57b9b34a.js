"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6075],{678:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>j,frontMatter:()=>s,metadata:()=>d,toc:()=>x});const d=JSON.parse('{"id":"command/\u538b\u7f29\u548c\u89e3\u538b\u7f29/bzip2","title":"bzip2","description":"\u2b50 \u89e3\u538b.bz2 \u683c\u5f0f","source":"@site/docs/02-command/70-\u538b\u7f29\u548c\u89e3\u538b\u7f29/bzip2.md","sourceDirName":"02-command/70-\u538b\u7f29\u548c\u89e3\u538b\u7f29","slug":"/424cca30","permalink":"/424cca30","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/02-command/70-\u538b\u7f29\u548c\u89e3\u538b\u7f29/bzip2.md","tags":[],"version":"current","frontMatter":{"slug":"/424cca30"},"sidebar":"tutorialSidebar","previous":{"title":"bunzip2","permalink":"/7e1007b9"},"next":{"title":"gunzip","permalink":"/fbb99eba"}}');var l=i(4848),c=i(8453);const s={slug:"/424cca30"},r=void 0,h={},x=[{value:"1. \u7b80\u4ecb",id:"1-\u7b80\u4ecb",level:2},{value:"2. \u5e38\u89c1\u64cd\u4f5c\u6982\u89c8 \ud83d\udccb",id:"2-\u5e38\u89c1\u64cd\u4f5c\u6982\u89c8-",level:2},{value:"3. \u547d\u4ee4\u793a\u4f8b \u26a1",id:"3-\u547d\u4ee4\u793a\u4f8b-",level:2},{value:"3.1 \u538b\u7f29\u6587\u4ef6",id:"31-\u538b\u7f29\u6587\u4ef6",level:3},{value:"3.2 \u89e3\u538b\u7f29\u6587\u4ef6",id:"32-\u89e3\u538b\u7f29\u6587\u4ef6",level:3},{value:"3.3 \u67e5\u770b\u538b\u7f29\u6587\u4ef6\u5185\u5bb9",id:"33-\u67e5\u770b\u538b\u7f29\u6587\u4ef6\u5185\u5bb9",level:3},{value:"3.4 \u4fdd\u7559\u539f\u6587\u4ef6\u7684\u538b\u7f29",id:"34-\u4fdd\u7559\u539f\u6587\u4ef6\u7684\u538b\u7f29",level:3},{value:"3.5 \u538b\u7f29\u591a\u4e2a\u6587\u4ef6",id:"35-\u538b\u7f29\u591a\u4e2a\u6587\u4ef6",level:3},{value:"4. \u5e38\u7528\u9009\u9879 \ud83d\udcdd",id:"4-\u5e38\u7528\u9009\u9879-",level:2},{value:"5. \u5c0f\u8d34\u58eb \ud83d\udca1",id:"5-\u5c0f\u8d34\u58eb-",level:2},{value:"6. \u4e0e\u5176\u4ed6\u538b\u7f29\u5de5\u5177\u7684\u6bd4\u8f83 \ud83d\udcca",id:"6-\u4e0e\u5176\u4ed6\u538b\u7f29\u5de5\u5177\u7684\u6bd4\u8f83-",level:2},{value:"\u4f18\u70b9\uff1a",id:"\u4f18\u70b9",level:3},{value:"\u7f3a\u70b9\uff1a",id:"\u7f3a\u70b9",level:3},{value:"\u9002\u7528\u573a\u666f\uff1a",id:"\u9002\u7528\u573a\u666f",level:3},{value:"7. \u603b\u7ed3 \ud83c\udfaf",id:"7-\u603b\u7ed3-",level:2}];function t(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"\u2b50 \u89e3\u538b.bz2 \u683c\u5f0f"}),"\n",(0,l.jsx)(n.h2,{id:"1-\u7b80\u4ecb",children:"1. \u7b80\u4ecb"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"bzip2"})," \u547d\u4ee4\u662f Linux \u4e2d\u7528\u4e8e\u6587\u4ef6\u538b\u7f29\u548c\u89e3\u538b\u7f29\u7684\u9ad8\u6548\u5de5\u5177\u3002\u5b83\u4f7f\u7528 Burrows-Wheeler \u53d8\u6362\uff08BWT\uff09\u548c Huffman \u7f16\u7801\u6765\u5b9e\u73b0\u6bd4 ",(0,l.jsx)(n.code,{children:"gzip"})," \u66f4\u597d\u7684\u538b\u7f29\u6bd4\uff0c\u540c\u65f6\u4fdd\u6301\u6587\u4ef6\u7684\u539f\u6709\u5185\u5bb9\u548c\u6743\u9650 \ud83d\udddc\ufe0f\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"2-\u5e38\u89c1\u64cd\u4f5c\u6982\u89c8-",children:"2. \u5e38\u89c1\u64cd\u4f5c\u6982\u89c8 \ud83d\udccb"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u64cd\u4f5c"}),(0,l.jsx)(n.th,{children:"\u547d\u4ee4\u683c\u5f0f"}),(0,l.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u538b\u7f29\u6587\u4ef6"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"bzip2 <\u6587\u4ef6>"})}),(0,l.jsxs)(n.td,{children:["\u538b\u7f29\u6307\u5b9a\u6587\u4ef6\uff0c\u751f\u6210\u4e00\u4e2a ",(0,l.jsx)(n.code,{children:".bz2"})," \u6269\u5c55\u540d\u7684\u538b\u7f29\u6587\u4ef6\u3002"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u89e3\u538b\u7f29\u6587\u4ef6"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"bunzip2 <\u6587\u4ef6.bz2>"})}),(0,l.jsxs)(n.td,{children:["\u89e3\u538b\u7f29 ",(0,l.jsx)(n.code,{children:".bz2"})," \u6587\u4ef6\u3002"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u67e5\u770b\u538b\u7f29\u6587\u4ef6\u5185\u5bb9"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"bzcat <\u6587\u4ef6.bz2>"})}),(0,l.jsx)(n.td,{children:"\u5728\u4e0d\u89e3\u538b\u7684\u60c5\u51b5\u4e0b\u67e5\u770b\u538b\u7f29\u6587\u4ef6\u7684\u5185\u5bb9\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u4fdd\u7559\u539f\u6587\u4ef6\u7684\u538b\u7f29"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"bzip2 -k <\u6587\u4ef6>"})}),(0,l.jsx)(n.td,{children:"\u538b\u7f29\u6587\u4ef6\u5e76\u4fdd\u7559\u539f\u59cb\u6587\u4ef6\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u538b\u7f29\u591a\u4e2a\u6587\u4ef6"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"bzip2 <\u6587\u4ef61> <\u6587\u4ef62>"})}),(0,l.jsx)(n.td,{children:"\u540c\u65f6\u538b\u7f29\u591a\u4e2a\u6587\u4ef6\u3002"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"3-\u547d\u4ee4\u793a\u4f8b-",children:"3. \u547d\u4ee4\u793a\u4f8b \u26a1"}),"\n",(0,l.jsx)(n.h3,{id:"31-\u538b\u7f29\u6587\u4ef6",children:"3.1 \u538b\u7f29\u6587\u4ef6"}),"\n",(0,l.jsx)(n.p,{children:"\u538b\u7f29\u5355\u4e2a\u6587\u4ef6\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"$ bzip2 file.txt\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u6b64\u547d\u4ee4\u5c06 ",(0,l.jsx)(n.code,{children:"file.txt"})," \u538b\u7f29\u4e3a ",(0,l.jsx)(n.code,{children:"file.txt.bz2"}),"\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"32-\u89e3\u538b\u7f29\u6587\u4ef6",children:"3.2 \u89e3\u538b\u7f29\u6587\u4ef6"}),"\n",(0,l.jsxs)(n.p,{children:["\u89e3\u538b\u7f29 ",(0,l.jsx)(n.code,{children:".bz2"})," \u6587\u4ef6\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"$ bunzip2 file.txt.bz2\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u6b64\u547d\u4ee4\u5c06 ",(0,l.jsx)(n.code,{children:"file.txt.bz2"})," \u89e3\u538b\u7f29\u56de ",(0,l.jsx)(n.code,{children:"file.txt"}),"\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"33-\u67e5\u770b\u538b\u7f29\u6587\u4ef6\u5185\u5bb9",children:"3.3 \u67e5\u770b\u538b\u7f29\u6587\u4ef6\u5185\u5bb9"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u4e0d\u89e3\u538b\u7684\u60c5\u51b5\u4e0b\u67e5\u770b\u538b\u7f29\u6587\u4ef6\u5185\u5bb9\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"$ bzcat file.txt.bz2\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u6b64\u547d\u4ee4\u5c06\u663e\u793a ",(0,l.jsx)(n.code,{children:"file.txt.bz2"})," \u7684\u5185\u5bb9\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"34-\u4fdd\u7559\u539f\u6587\u4ef6\u7684\u538b\u7f29",children:"3.4 \u4fdd\u7559\u539f\u6587\u4ef6\u7684\u538b\u7f29"}),"\n",(0,l.jsx)(n.p,{children:"\u538b\u7f29\u6587\u4ef6\u5e76\u4fdd\u7559\u539f\u59cb\u6587\u4ef6\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"$ bzip2 -k file.txt\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u6b64\u547d\u4ee4\u4f1a\u751f\u6210 ",(0,l.jsx)(n.code,{children:"file.txt.bz2"})," \u5e76\u4fdd\u7559 ",(0,l.jsx)(n.code,{children:"file.txt"}),"\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"35-\u538b\u7f29\u591a\u4e2a\u6587\u4ef6",children:"3.5 \u538b\u7f29\u591a\u4e2a\u6587\u4ef6"}),"\n",(0,l.jsx)(n.p,{children:"\u540c\u65f6\u538b\u7f29\u591a\u4e2a\u6587\u4ef6\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"$ bzip2 file1.txt file2.txt\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u6b64\u547d\u4ee4\u4f1a\u751f\u6210 ",(0,l.jsx)(n.code,{children:"file1.txt.bz2"})," \u548c ",(0,l.jsx)(n.code,{children:"file2.txt.bz2"}),"\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"4-\u5e38\u7528\u9009\u9879-",children:"4. \u5e38\u7528\u9009\u9879 \ud83d\udcdd"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"-k"})," \u6216 ",(0,l.jsx)(n.code,{children:"--keep"}),"\uff1a\u5728\u538b\u7f29\u6216\u89e3\u538b\u7f29\u65f6\u4fdd\u7559\u539f\u59cb\u6587\u4ef6\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"-v"})," \u6216 ",(0,l.jsx)(n.code,{children:"--verbose"}),"\uff1a\u663e\u793a\u8be6\u7ec6\u7684\u538b\u7f29\u6216\u89e3\u538b\u7f29\u8fc7\u7a0b\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"-f"})," \u6216 ",(0,l.jsx)(n.code,{children:"--force"}),"\uff1a\u5f3a\u5236\u538b\u7f29\u6216\u89e3\u538b\u7f29\uff0c\u5373\u4f7f\u76ee\u6807\u6587\u4ef6\u5df2\u5b58\u5728\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"-t"})," \u6216 ",(0,l.jsx)(n.code,{children:"--test"}),"\uff1a\u6d4b\u8bd5\u538b\u7f29\u6587\u4ef6\u7684\u5b8c\u6574\u6027\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"-1"})," \u5230 ",(0,l.jsx)(n.code,{children:"-9"}),"\uff1a\u6307\u5b9a\u538b\u7f29\u7ea7\u522b\uff0c\u6570\u5b57\u8d8a\u5927\u538b\u7f29\u6bd4\u8d8a\u9ad8\uff0c\u4f46\u5904\u7406\u65f6\u95f4\u4e5f\u8d8a\u957f\uff0c\u9ed8\u8ba4\u662f ",(0,l.jsx)(n.code,{children:"-9"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"5-\u5c0f\u8d34\u58eb-",children:"5. \u5c0f\u8d34\u58eb \ud83d\udca1"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"bzip2"})," \u538b\u7f29\u6bd4\u901a\u5e38\u6bd4 ",(0,l.jsx)(n.code,{children:"gzip"})," \u9ad8\uff0c\u7279\u522b\u662f\u5728\u5904\u7406\u6587\u672c\u6587\u4ef6\u65f6\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u4e0e ",(0,l.jsx)(n.code,{children:"gzip"})," \u4e0d\u540c\uff0c",(0,l.jsx)(n.code,{children:"bzip2"})," \u4e0d\u80fd\u76f4\u63a5\u538b\u7f29\u76ee\u5f55\uff0c\u9700\u8981\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"tar"})," \u547d\u4ee4\u7ed3\u5408 ",(0,l.jsx)(n.code,{children:"bzip2"}),"\uff0c\u5982 ",(0,l.jsx)(n.code,{children:"tar -cjvf archive.tar.bz2 /path/to/directory"}),"\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5bf9\u4e8e ",(0,l.jsx)(n.code,{children:".tar.bz2"})," \u6587\u4ef6\uff0c\u901a\u5e38\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"tar"})," \u547d\u4ee4\u8fdb\u884c\u89e3\u538b\u7f29\uff0c\u5982 ",(0,l.jsx)(n.code,{children:"tar -xjvf archive.tar.bz2"}),"\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5982\u679c\u9700\u8981\u67e5\u770b\u538b\u7f29\u6587\u4ef6\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"bzip2 -v"})," \u9009\u9879\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"6-\u4e0e\u5176\u4ed6\u538b\u7f29\u5de5\u5177\u7684\u6bd4\u8f83-",children:"6. \u4e0e\u5176\u4ed6\u538b\u7f29\u5de5\u5177\u7684\u6bd4\u8f83 \ud83d\udcca"}),"\n",(0,l.jsx)(n.h3,{id:"\u4f18\u70b9",children:"\u4f18\u70b9\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u538b\u7f29\u6bd4\u9ad8"}),"\uff1a",(0,l.jsx)(n.code,{children:"bzip2"})," \u63d0\u4f9b\u6bd4 ",(0,l.jsx)(n.code,{children:"gzip"})," \u66f4\u9ad8\u7684\u538b\u7f29\u6bd4\uff0c\u7279\u522b\u9002\u5408\u5904\u7406\u6587\u672c\u6570\u636e\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u5185\u5b58\u4f7f\u7528"}),"\uff1a",(0,l.jsx)(n.code,{children:"bzip2"})," \u5728\u538b\u7f29\u5927\u6587\u4ef6\u65f6\u5185\u5b58\u4f7f\u7528\u6548\u7387\u8f83\u9ad8\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u7f3a\u70b9",children:"\u7f3a\u70b9\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u538b\u7f29\u901f\u5ea6"}),"\uff1a",(0,l.jsx)(n.code,{children:"bzip2"})," \u7684\u538b\u7f29\u901f\u5ea6\u901a\u5e38\u6bd4 ",(0,l.jsx)(n.code,{children:"gzip"})," \u6162\uff0c\u5c24\u5176\u662f\u4f7f\u7528\u9ad8\u538b\u7f29\u7ea7\u522b\u65f6\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u89e3\u538b\u901f\u5ea6"}),"\uff1a\u89e3\u538b\u7f29\u901f\u5ea6\u4e5f\u6bd4 ",(0,l.jsx)(n.code,{children:"gzip"})," \u6162\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u517c\u5bb9\u6027"}),"\uff1a\u867d\u7136\u5e7f\u6cdb\u652f\u6301\uff0c\u4f46\u67d0\u4e9b\u7cfb\u7edf\u53ef\u80fd\u9ed8\u8ba4\u4e0d\u652f\u6301 ",(0,l.jsx)(n.code,{children:"bzip2"}),"\uff0c\u9700\u8981\u989d\u5916\u5b89\u88c5\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u9002\u7528\u573a\u666f",children:"\u9002\u7528\u573a\u666f\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u6587\u672c\u6587\u4ef6\u538b\u7f29"}),"\uff1a",(0,l.jsx)(n.code,{children:"bzip2"})," \u7279\u522b\u9002\u5408\u538b\u7f29\u6587\u672c\u6587\u4ef6\u6216\u6e90\u4ee3\u7801\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u5907\u4efd"}),"\uff1a\u5bf9\u4e8e\u9700\u8981\u957f\u671f\u5b58\u50a8\u548c\u9ad8\u538b\u7f29\u6bd4\u7684\u5907\u4efd\uff0c",(0,l.jsx)(n.code,{children:"bzip2"})," \u662f\u7406\u60f3\u7684\u9009\u62e9\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u5f52\u6863"}),"\uff1a\u5f53\u6587\u4ef6\u5927\u5c0f\u548c\u538b\u7f29\u6bd4\u662f\u4f18\u5148\u8003\u8651\u7684\u56e0\u7d20\u65f6\uff0c",(0,l.jsx)(n.code,{children:"bzip2"})," \u6bd4 ",(0,l.jsx)(n.code,{children:"gzip"})," \u66f4\u5408\u9002\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u538b\u7f29\u5927\u6587\u4ef6"}),"\uff1a",(0,l.jsx)(n.code,{children:"bzip2"})," \u9002\u5408\u538b\u7f29\u5927\u6587\u4ef6\uff0c\u56e0\u4e3a\u5176\u5185\u5b58\u4f7f\u7528\u6548\u7387\u8f83\u9ad8\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"7-\u603b\u7ed3-",children:"7. \u603b\u7ed3 \ud83c\udfaf"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"bzip2"})," \u547d\u4ee4\u662f Linux \u4e2d\u975e\u5e38\u5b9e\u7528\u7684\u6587\u4ef6\u538b\u7f29\u548c\u89e3\u538b\u7f29\u5de5\u5177\u3002\u5b83\u63d0\u4f9b\u9ad8\u6548\u7684\u538b\u7f29\u6bd4\uff0c\u9002\u5408\u9700\u8981\u9ad8\u538b\u7f29\u6bd4\u7684\u573a\u666f \ud83d\uddc3\ufe0f\u3002\u5728\u5b9e\u9645\u64cd\u4f5c\u4e2d\uff0c\u6839\u636e\u6587\u4ef6\u7c7b\u578b\u3001\u538b\u7f29\u9700\u6c42\u548c\u5904\u7406\u901f\u5ea6\u7684\u8981\u6c42\uff0c\u9009\u62e9\u5408\u9002\u7684\u538b\u7f29\u5de5\u5177\u662f\u5173\u952e\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5e0c\u671b\u8fd9\u7bc7\u6559\u7a0b\u5e2e\u52a9\u4f60\u638c\u63e1\u5982\u4f55\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"bzip2"})," \u547d\u4ee4\uff0c\u5e76\u4e86\u89e3\u5176\u5728\u4e0d\u540c\u573a\u666f\u4e0b\u7684\u9002\u7528\u6027\uff01\u522b\u5fd8\u4e86\u6536\u85cf ",(0,l.jsx)(n.strong,{children:"\u5728\u7ebf\u77e5\u8bc6\u5e93"}),"\uff08 ",(0,l.jsx)(n.a,{href:"http://www.zxzsk.com",children:"www.zxzsk.com"})," \uff09\u54e6\uff01\ud83d\ude0a"]})]})}function j(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>r});var d=i(6540);const l={},c=d.createContext(l);function s(e){const n=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);