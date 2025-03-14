"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7707],{4348:(e,c,d)=>{d.r(c),d.d(c,{assets:()=>h,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>n,toc:()=>x});const n=JSON.parse('{"id":"command/\u6587\u4ef6\u7ba1\u7406/\u79fb\u52a8\u3001\u590d\u5236\u3001\u94fe\u63a5/cp","title":"cp","description":"\u2b50\u590d\u5236\u6587\u4ef6\u548c\u76ee\u5f55","source":"@site/docs/02-command/20-\u6587\u4ef6\u7ba1\u7406/\u79fb\u52a8\u3001\u590d\u5236\u3001\u94fe\u63a5/cp.md","sourceDirName":"02-command/20-\u6587\u4ef6\u7ba1\u7406/\u79fb\u52a8\u3001\u590d\u5236\u3001\u94fe\u63a5","slug":"/command/\u6587\u4ef6\u7ba1\u7406/\u79fb\u52a8\u3001\u590d\u5236\u3001\u94fe\u63a5/cp","permalink":"/command/\u6587\u4ef6\u7ba1\u7406/\u79fb\u52a8\u3001\u590d\u5236\u3001\u94fe\u63a5/cp","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/02-command/20-\u6587\u4ef6\u7ba1\u7406/\u79fb\u52a8\u3001\u590d\u5236\u3001\u94fe\u63a5/cp.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u79fb\u52a8\u3001\u590d\u5236\u3001\u94fe\u63a5","permalink":"/category/\u79fb\u52a8\u590d\u5236\u94fe\u63a5"},"next":{"title":"dd","permalink":"/command/\u6587\u4ef6\u7ba1\u7406/\u79fb\u52a8\u3001\u590d\u5236\u3001\u94fe\u63a5/dd"}}');var l=d(4848),s=d(8453);const i={},r=void 0,h={},x=[{value:"1. <code>cp</code> \u547d\u4ee4\u7684\u57fa\u672c\u8bed\u6cd5 \ud83d\udccb",id:"1-cp-\u547d\u4ee4\u7684\u57fa\u672c\u8bed\u6cd5-",level:2},{value:"2. \u57fa\u672c\u64cd\u4f5c \ud83d\udee0\ufe0f",id:"2-\u57fa\u672c\u64cd\u4f5c-\ufe0f",level:2},{value:"2.1 \u590d\u5236\u5355\u4e2a\u6587\u4ef6 \ud83d\udcc4\u27a1\ufe0f\ud83d\udcc4",id:"21-\u590d\u5236\u5355\u4e2a\u6587\u4ef6-\ufe0f",level:3},{value:"2.2 \u590d\u5236\u591a\u4e2a\u6587\u4ef6\u5230\u76ee\u6807\u76ee\u5f55 \ud83d\udcc2",id:"22-\u590d\u5236\u591a\u4e2a\u6587\u4ef6\u5230\u76ee\u6807\u76ee\u5f55-",level:3},{value:"2.3 \u9012\u5f52\u590d\u5236\u76ee\u5f55 \ud83d\udd04",id:"23-\u9012\u5f52\u590d\u5236\u76ee\u5f55-",level:3},{value:"3. \u5e38\u7528\u9009\u9879 \ud83d\udd27",id:"3-\u5e38\u7528\u9009\u9879-",level:2},{value:"3.1 <code>-i</code>\uff1a\u4ea4\u4e92\u5f0f\u64cd\u4f5c \ud83e\uddd0",id:"31--i\u4ea4\u4e92\u5f0f\u64cd\u4f5c-",level:3},{value:"3.2 <code>-u</code>\uff1a\u4ec5\u590d\u5236\u6e90\u6587\u4ef6\u8f83\u65b0\u7684\u6587\u4ef6 \u23f3",id:"32--u\u4ec5\u590d\u5236\u6e90\u6587\u4ef6\u8f83\u65b0\u7684\u6587\u4ef6-",level:3},{value:"3.3 <code>-v</code>\uff1a\u663e\u793a\u590d\u5236\u8fc7\u7a0b \ud83d\udcdd",id:"33--v\u663e\u793a\u590d\u5236\u8fc7\u7a0b-",level:3},{value:"3.4 <code>-a</code>\uff1a\u5f52\u6863\u6a21\u5f0f\uff08\u4fdd\u7559\u6587\u4ef6\u5c5e\u6027\uff09 \ud83d\udce6",id:"34--a\u5f52\u6863\u6a21\u5f0f\u4fdd\u7559\u6587\u4ef6\u5c5e\u6027-",level:3},{value:"3.5 <code>-p</code>\uff1a\u4fdd\u7559\u6587\u4ef6\u5c5e\u6027 \ud83d\uddc2\ufe0f",id:"35--p\u4fdd\u7559\u6587\u4ef6\u5c5e\u6027-\ufe0f",level:3},{value:"3.6 <code>-l</code>\uff1a\u521b\u5efa\u786c\u94fe\u63a5 \ud83d\udd17",id:"36--l\u521b\u5efa\u786c\u94fe\u63a5-",level:3},{value:"3.7 <code>-R</code>\uff1a\u9012\u5f52\u590d\u5236\uff08\u4e0e <code>-r</code> \u76f8\u540c\uff09 \ud83d\udd04",id:"37--r\u9012\u5f52\u590d\u5236\u4e0e--r-\u76f8\u540c-",level:3},{value:"4. \u5b9e\u9645\u5e94\u7528 \ud83c\udf1f",id:"4-\u5b9e\u9645\u5e94\u7528-",level:2},{value:"4.1 \u590d\u5236\u6587\u4ef6\u5230\u5907\u4efd\u76ee\u5f55 \ud83d\uddc3\ufe0f",id:"41-\u590d\u5236\u6587\u4ef6\u5230\u5907\u4efd\u76ee\u5f55-\ufe0f",level:3},{value:"4.2 \u590d\u5236\u6574\u4e2a\u76ee\u5f55\u7ed3\u6784 \ud83d\udcc2\u27a1\ufe0f\ud83d\udcc2",id:"42-\u590d\u5236\u6574\u4e2a\u76ee\u5f55\u7ed3\u6784-\ufe0f",level:3},{value:"4.3 \u8986\u76d6\u5df2\u6709\u6587\u4ef6\u65f6\u8be2\u95ee\u786e\u8ba4 \u2753",id:"43-\u8986\u76d6\u5df2\u6709\u6587\u4ef6\u65f6\u8be2\u95ee\u786e\u8ba4-",level:3},{value:"4.4 \u663e\u793a\u590d\u5236\u8fc7\u7a0b \ud83d\udd04",id:"44-\u663e\u793a\u590d\u5236\u8fc7\u7a0b-",level:3},{value:"5. \u603b\u7ed3 \ud83c\udfaf",id:"5-\u603b\u7ed3-",level:2}];function o(e){const c={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.p,{children:"\u2b50\u590d\u5236\u6587\u4ef6\u548c\u76ee\u5f55"}),"\n",(0,l.jsxs)(c.p,{children:["\u5728 Linux \u7cfb\u7edf\u4e2d\uff0c",(0,l.jsx)(c.code,{children:"cp"})," \u547d\u4ee4\u662f\u7528\u4e8e\u590d\u5236\u6587\u4ef6\u548c\u76ee\u5f55\u7684\u57fa\u7840\u5de5\u5177\u3002\u65e0\u8bba\u662f\u65e5\u5e38\u7684\u6587\u4ef6\u7ba1\u7406\u3001\u5907\u4efd\uff0c\u8fd8\u662f\u7cfb\u7edf\u8fc1\u79fb\uff0c",(0,l.jsx)(c.code,{children:"cp"})," \u90fd\u626e\u6f14\u7740\u4e0d\u53ef\u6216\u7f3a\u7684\u89d2\u8272\u3002\u901a\u8fc7\u7075\u6d3b\u4f7f\u7528\u4e0d\u540c\u7684\u9009\u9879\uff0c",(0,l.jsx)(c.code,{children:"cp"})," \u547d\u4ee4\u80fd\u591f\u6ee1\u8db3\u4e0d\u540c\u7684\u9700\u6c42\u3002\ud83d\udcc2\ud83d\udca8"]}),"\n",(0,l.jsxs)(c.h2,{id:"1-cp-\u547d\u4ee4\u7684\u57fa\u672c\u8bed\u6cd5-",children:["1. ",(0,l.jsx)(c.code,{children:"cp"})," \u547d\u4ee4\u7684\u57fa\u672c\u8bed\u6cd5 \ud83d\udccb"]}),"\n",(0,l.jsx)(c.pre,{children:(0,l.jsx)(c.code,{className:"language-bash",children:"cp [\u9009\u9879] \u6e90\u6587\u4ef6 \u76ee\u6807\u6587\u4ef6\n"})}),"\n",(0,l.jsxs)(c.ul,{children:["\n",(0,l.jsxs)(c.li,{children:[(0,l.jsx)(c.strong,{children:"\u6e90\u6587\u4ef6"}),"\uff1a\u9700\u8981\u590d\u5236\u7684\u6587\u4ef6\u6216\u76ee\u5f55\u3002"]}),"\n",(0,l.jsxs)(c.li,{children:[(0,l.jsx)(c.strong,{children:"\u76ee\u6807\u6587\u4ef6"}),"\uff1a\u590d\u5236\u7684\u76ee\u6807\u6587\u4ef6\u6216\u76ee\u5f55\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(c.p,{children:["\u901a\u8fc7 ",(0,l.jsx)(c.code,{children:"cp"})," \u547d\u4ee4\uff0c\u7528\u6237\u53ef\u4ee5\u5feb\u901f\u5730\u5c06\u6587\u4ef6\u4ece\u4e00\u4e2a\u5730\u65b9\u590d\u5236\u5230\u53e6\u4e00\u4e2a\u5730\u65b9\uff0c\u652f\u6301\u591a\u4e2a\u6587\u4ef6\u3001\u76ee\u5f55\u4ee5\u53ca\u4fdd\u7559\u6587\u4ef6\u7684\u5c5e\u6027\u7b49\u64cd\u4f5c\u3002"]}),"\n",(0,l.jsx)(c.h2,{id:"2-\u57fa\u672c\u64cd\u4f5c-\ufe0f",children:"2. \u57fa\u672c\u64cd\u4f5c \ud83d\udee0\ufe0f"}),"\n",(0,l.jsx)(c.h3,{id:"21-\u590d\u5236\u5355\u4e2a\u6587\u4ef6-\ufe0f",children:"2.1 \u590d\u5236\u5355\u4e2a\u6587\u4ef6 \ud83d\udcc4\u27a1\ufe0f\ud83d\udcc4"}),"\n",(0,l.jsxs)(c.p,{children:["\u6700\u7b80\u5355\u7684\u590d\u5236\u64cd\u4f5c\u662f\u590d\u5236\u5355\u4e2a\u6587\u4ef6\u3002\u4f8b\u5982\uff0c\u5c06 ",(0,l.jsx)(c.code,{children:"file1.txt"})," \u590d\u5236\u4e3a ",(0,l.jsx)(c.code,{children:"file2.txt"}),"\uff1a"]}),"\n",(0,l.jsx)(c.pre,{children:(0,l.jsx)(c.code,{className:"language-bash",children:"cp file1.txt file2.txt\n"})}),"\n",(0,l.jsxs)(c.p,{children:["\u8fd9\u4f1a\u5c06 ",(0,l.jsx)(c.code,{children:"file1.txt"})," \u590d\u5236\u4e3a ",(0,l.jsx)(c.code,{children:"file2.txt"}),"\u3002\u5982\u679c ",(0,l.jsx)(c.code,{children:"file2.txt"})," \u5df2\u5b58\u5728\uff0c\u7cfb\u7edf\u4f1a\u76f4\u63a5\u8986\u76d6\u5b83\u3002"]}),"\n",(0,l.jsx)(c.h3,{id:"22-\u590d\u5236\u591a\u4e2a\u6587\u4ef6\u5230\u76ee\u6807\u76ee\u5f55-",children:"2.2 \u590d\u5236\u591a\u4e2a\u6587\u4ef6\u5230\u76ee\u6807\u76ee\u5f55 \ud83d\udcc2"}),"\n",(0,l.jsx)(c.p,{children:"\u5982\u679c\u4f60\u9700\u8981\u5c06\u591a\u4e2a\u6587\u4ef6\u590d\u5236\u5230\u4e00\u4e2a\u76ee\u6807\u76ee\u5f55\uff0c\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\u6e90\u6587\u4ef6\u548c\u4e00\u4e2a\u76ee\u6807\u76ee\u5f55\uff1a"}),"\n",(0,l.jsx)(c.pre,{children:(0,l.jsx)(c.code,{className:"language-bash",children:"cp file1.txt file2.txt /home/user/backup/\n"})}),"\n",(0,l.jsxs)(c.p,{children:["\u6b64\u547d\u4ee4\u5c06 ",(0,l.jsx)(c.code,{children:"file1.txt"})," \u548c ",(0,l.jsx)(c.code,{children:"file2.txt"})," \u590d\u5236\u5230 ",(0,l.jsx)(c.code,{children:"/home/user/backup/"})," \u76ee\u5f55\u4e0b\u3002"]}),"\n",(0,l.jsx)(c.h3,{id:"23-\u9012\u5f52\u590d\u5236\u76ee\u5f55-",children:"2.3 \u9012\u5f52\u590d\u5236\u76ee\u5f55 \ud83d\udd04"}),"\n",(0,l.jsxs)(c.p,{children:["\u5982\u679c\u4f60\u9700\u8981\u590d\u5236\u4e00\u4e2a\u76ee\u5f55\u53ca\u5176\u6240\u6709\u5185\u5bb9\uff0c\u4f7f\u7528 ",(0,l.jsx)(c.code,{children:"-r"})," \u6216 ",(0,l.jsx)(c.code,{children:"-R"})," \u9009\u9879\u8fdb\u884c\u9012\u5f52\u590d\u5236\u3002\u4f8b\u5982\uff0c\u5c06\u76ee\u5f55 ",(0,l.jsx)(c.code,{children:"dir1/"})," \u590d\u5236\u5230 ",(0,l.jsx)(c.code,{children:"dir2/"}),"\uff1a"]}),"\n",(0,l.jsx)(c.pre,{children:(0,l.jsx)(c.code,{className:"language-bash",children:"cp -r dir1/ dir2/\n"})}),"\n",(0,l.jsxs)(c.p,{children:["\u8fd9\u4f1a\u5c06 ",(0,l.jsx)(c.code,{children:"dir1/"})," \u76ee\u5f55\u53ca\u5176\u4e2d\u7684\u6240\u6709\u6587\u4ef6\u548c\u5b50\u76ee\u5f55\u590d\u5236\u5230 ",(0,l.jsx)(c.code,{children:"dir2/"}),"\u3002\u5982\u679c ",(0,l.jsx)(c.code,{children:"dir2/"})," \u5df2\u5b58\u5728\uff0c",(0,l.jsx)(c.code,{children:"dir1/"})," \u5c06\u4f5c\u4e3a ",(0,l.jsx)(c.code,{children:"dir2/"})," \u7684\u5b50\u76ee\u5f55\u8fdb\u884c\u590d\u5236\u3002"]}),"\n",(0,l.jsx)(c.h2,{id:"3-\u5e38\u7528\u9009\u9879-",children:"3. \u5e38\u7528\u9009\u9879 \ud83d\udd27"}),"\n",(0,l.jsxs)(c.h3,{id:"31--i\u4ea4\u4e92\u5f0f\u64cd\u4f5c-",children:["3.1 ",(0,l.jsx)(c.code,{children:"-i"}),"\uff1a\u4ea4\u4e92\u5f0f\u64cd\u4f5c \ud83e\uddd0"]}),"\n",(0,l.jsxs)(c.p,{children:["\u4f7f\u7528 ",(0,l.jsx)(c.code,{children:"-i"})," \u9009\u9879\u53ef\u4ee5\u5728\u76ee\u6807\u6587\u4ef6\u5df2\u5b58\u5728\u65f6\u63d0\u793a\u786e\u8ba4\uff0c\u4ee5\u9632\u6b62\u4e0d\u5c0f\u5fc3\u8986\u76d6\u6587\u4ef6\uff1a"]}),"\n",(0,l.jsx)(c.pre,{children:(0,l.jsx)(c.code,{className:"language-bash",children:"cp -i file1.txt file2.txt\n"})}),"\n",(0,l.jsxs)(c.p,{children:["\u5982\u679c ",(0,l.jsx)(c.code,{children:"file2.txt"})," \u5df2\u5b58\u5728\uff0c\u7cfb\u7edf\u4f1a\u63d0\u793a\u4f60\u662f\u5426\u8986\u76d6\uff1a"]}),"\n",(0,l.jsx)(c.pre,{children:(0,l.jsx)(c.code,{children:"overwrite file2.txt? (y/n)\n"})}),"\n",(0,l.jsxs)(c.h3,{id:"32--u\u4ec5\u590d\u5236\u6e90\u6587\u4ef6\u8f83\u65b0\u7684\u6587\u4ef6-",children:["3.2 ",(0,l.jsx)(c.code,{children:"-u"}),"\uff1a\u4ec5\u590d\u5236\u6e90\u6587\u4ef6\u8f83\u65b0\u7684\u6587\u4ef6 \u23f3"]}),"\n",(0,l.jsxs)(c.p,{children:[(0,l.jsx)(c.code,{children:"-u"})," \u9009\u9879\u4f1a\u8ba9 ",(0,l.jsx)(c.code,{children:"cp"})," \u4ec5\u590d\u5236\u6e90\u6587\u4ef6\u4e2d\u8f83\u65b0\u7684\u6587\u4ef6\uff08\u6bd4\u76ee\u6807\u6587\u4ef6\u66f4\u65b0\u65f6\u624d\u4f1a\u590d\u5236\uff09\uff1a"]}),"\n",(0,l.jsx)(c.pre,{children:(0,l.jsx)(c.code,{className:"language-bash",children:"cp -u file1.txt /home/user/backup/\n"})}),"\n",(0,l.jsxs)(c.p,{children:["\u5982\u679c\u6e90\u6587\u4ef6 ",(0,l.jsx)(c.code,{children:"file1.txt"})," \u6bd4\u76ee\u6807\u76ee\u5f55\u4e2d\u5df2\u6709\u7684\u6587\u4ef6\u66f4\u65b0\uff0c\u5219\u590d\u5236\u8be5\u6587\u4ef6\u3002"]}),"\n",(0,l.jsxs)(c.h3,{id:"33--v\u663e\u793a\u590d\u5236\u8fc7\u7a0b-",children:["3.3 ",(0,l.jsx)(c.code,{children:"-v"}),"\uff1a\u663e\u793a\u590d\u5236\u8fc7\u7a0b \ud83d\udcdd"]}),"\n",(0,l.jsxs)(c.p,{children:["\u4f7f\u7528 ",(0,l.jsx)(c.code,{children:"-v"})," \u9009\u9879\uff0c",(0,l.jsx)(c.code,{children:"cp"})," \u4f1a\u663e\u793a\u590d\u5236\u8fc7\u7a0b\u4e2d\u7684\u8be6\u7ec6\u4fe1\u606f\uff1a"]}),"\n",(0,l.jsx)(c.pre,{children:(0,l.jsx)(c.code,{className:"language-bash",children:"cp -v file1.txt /home/user/backup/\n"})}),"\n",(0,l.jsx)(c.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(c.pre,{children:(0,l.jsx)(c.code,{children:"'file1.txt' -> '/home/user/backup/file1.txt'\n"})}),"\n",(0,l.jsx)(c.p,{children:"\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u4f60\u53ef\u4ee5\u770b\u5230\u6bcf\u4e2a\u6587\u4ef6\u88ab\u590d\u5236\u7684\u76ee\u6807\u4f4d\u7f6e\u3002\ud83c\udfaf"}),"\n",(0,l.jsxs)(c.h3,{id:"34--a\u5f52\u6863\u6a21\u5f0f\u4fdd\u7559\u6587\u4ef6\u5c5e\u6027-",children:["3.4 ",(0,l.jsx)(c.code,{children:"-a"}),"\uff1a\u5f52\u6863\u6a21\u5f0f\uff08\u4fdd\u7559\u6587\u4ef6\u5c5e\u6027\uff09 \ud83d\udce6"]}),"\n",(0,l.jsxs)(c.p,{children:[(0,l.jsx)(c.code,{children:"-a"}),"\uff08\u5f52\u6863\u6a21\u5f0f\uff09\u9009\u9879\u662f ",(0,l.jsx)(c.code,{children:"-r"}),"\u3001",(0,l.jsx)(c.code,{children:"-p"})," \u548c ",(0,l.jsx)(c.code,{children:"-d"})," \u7684\u7ec4\u5408\uff0c\u4e0d\u4ec5\u4f1a\u9012\u5f52\u590d\u5236\u76ee\u5f55\uff0c\u8fd8\u4f1a\u4fdd\u7559\u6587\u4ef6\u7684\u6240\u6709\u5c5e\u6027\uff0c\u5982\u6743\u9650\u3001\u65f6\u95f4\u6233\u7b49\u3002\u5e38\u7528\u4e8e\u5907\u4efd\u548c\u6062\u590d\u64cd\u4f5c\uff1a"]}),"\n",(0,l.jsx)(c.pre,{children:(0,l.jsx)(c.code,{className:"language-bash",children:"cp -a /home/user/documents /home/user/backup/\n"})}),"\n",(0,l.jsxs)(c.p,{children:["\u8fd9\u4f1a\u5b8c\u6574\u5730\u590d\u5236 ",(0,l.jsx)(c.code,{children:"documents"})," \u76ee\u5f55\u53ca\u5176\u6240\u6709\u5185\u5bb9\uff0c\u5e76\u4fdd\u7559\u6587\u4ef6\u7684\u539f\u59cb\u5c5e\u6027\u3002\ud83d\udee0\ufe0f"]}),"\n",(0,l.jsxs)(c.h3,{id:"35--p\u4fdd\u7559\u6587\u4ef6\u5c5e\u6027-\ufe0f",children:["3.5 ",(0,l.jsx)(c.code,{children:"-p"}),"\uff1a\u4fdd\u7559\u6587\u4ef6\u5c5e\u6027 \ud83d\uddc2\ufe0f"]}),"\n",(0,l.jsxs)(c.p,{children:[(0,l.jsx)(c.code,{children:"-p"})," \u9009\u9879\u5141\u8bb8\u4f60\u5728\u590d\u5236\u6587\u4ef6\u65f6\u4fdd\u7559\u5176\u539f\u59cb\u5c5e\u6027\uff08\u5982\u6743\u9650\u3001\u65f6\u95f4\u6233\u7b49\uff09\uff1a"]}),"\n",(0,l.jsx)(c.pre,{children:(0,l.jsx)(c.code,{className:"language-bash",children:"cp -p file1.txt /home/user/backup/\n"})}),"\n",(0,l.jsxs)(c.h3,{id:"36--l\u521b\u5efa\u786c\u94fe\u63a5-",children:["3.6 ",(0,l.jsx)(c.code,{children:"-l"}),"\uff1a\u521b\u5efa\u786c\u94fe\u63a5 \ud83d\udd17"]}),"\n",(0,l.jsxs)(c.p,{children:["\u5982\u679c\u4e0d\u60f3\u590d\u5236\u6587\u4ef6\u7684\u5185\u5bb9\uff0c\u800c\u662f\u5e0c\u671b\u521b\u5efa\u4e00\u4e2a\u786c\u94fe\u63a5\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(c.code,{children:"-l"})," \u9009\u9879\uff1a"]}),"\n",(0,l.jsx)(c.pre,{children:(0,l.jsx)(c.code,{className:"language-bash",children:"cp -l file1.txt file2.txt\n"})}),"\n",(0,l.jsxs)(c.p,{children:["\u8fd9\u5c06\u521b\u5efa\u4e00\u4e2a\u786c\u94fe\u63a5\uff0c",(0,l.jsx)(c.code,{children:"file2.txt"})," \u5c06\u6307\u5411 ",(0,l.jsx)(c.code,{children:"file1.txt"}),"\uff0c\u5b83\u4eec\u5171\u4eab\u540c\u4e00\u6570\u636e\u5757\u3002"]}),"\n",(0,l.jsxs)(c.h3,{id:"37--r\u9012\u5f52\u590d\u5236\u4e0e--r-\u76f8\u540c-",children:["3.7 ",(0,l.jsx)(c.code,{children:"-R"}),"\uff1a\u9012\u5f52\u590d\u5236\uff08\u4e0e ",(0,l.jsx)(c.code,{children:"-r"})," \u76f8\u540c\uff09 \ud83d\udd04"]}),"\n",(0,l.jsxs)(c.p,{children:[(0,l.jsx)(c.code,{children:"-R"})," \u9009\u9879\u4e0e ",(0,l.jsx)(c.code,{children:"-r"})," \u9009\u9879\u76f8\u540c\uff0c\u90fd\u662f\u7528\u4e8e\u9012\u5f52\u590d\u5236\u76ee\u5f55\u53ca\u5176\u5185\u5bb9\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e24\u4e2a\u9009\u9879\u53ef\u4ee5\u4e92\u6362\u4f7f\u7528\uff1a"]}),"\n",(0,l.jsx)(c.pre,{children:(0,l.jsx)(c.code,{className:"language-bash",children:"cp -R dir1/ dir2/\n"})}),"\n",(0,l.jsx)(c.h2,{id:"4-\u5b9e\u9645\u5e94\u7528-",children:"4. \u5b9e\u9645\u5e94\u7528 \ud83c\udf1f"}),"\n",(0,l.jsx)(c.h3,{id:"41-\u590d\u5236\u6587\u4ef6\u5230\u5907\u4efd\u76ee\u5f55-\ufe0f",children:"4.1 \u590d\u5236\u6587\u4ef6\u5230\u5907\u4efd\u76ee\u5f55 \ud83d\uddc3\ufe0f"}),"\n",(0,l.jsxs)(c.p,{children:["\u5047\u8bbe\u4f60\u9700\u8981\u5c06 ",(0,l.jsx)(c.code,{children:".txt"})," \u6587\u4ef6\u590d\u5236\u5230\u5907\u4efd\u76ee\u5f55\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"]}),"\n",(0,l.jsx)(c.pre,{children:(0,l.jsx)(c.code,{className:"language-bash",children:"cp *.txt /home/user/backup/\n"})}),"\n",(0,l.jsxs)(c.p,{children:["\u8fd9\u4f1a\u590d\u5236\u5f53\u524d\u76ee\u5f55\u4e0b\u6240\u6709 ",(0,l.jsx)(c.code,{children:".txt"})," \u6587\u4ef6\u5230 ",(0,l.jsx)(c.code,{children:"/home/user/backup/"})," \u76ee\u5f55\u3002"]}),"\n",(0,l.jsx)(c.h3,{id:"42-\u590d\u5236\u6574\u4e2a\u76ee\u5f55\u7ed3\u6784-\ufe0f",children:"4.2 \u590d\u5236\u6574\u4e2a\u76ee\u5f55\u7ed3\u6784 \ud83d\udcc2\u27a1\ufe0f\ud83d\udcc2"}),"\n",(0,l.jsxs)(c.p,{children:["\u82e5\u9700\u8981\u590d\u5236\u6574\u4e2a\u76ee\u5f55\u53ca\u5176\u5185\u5bb9\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(c.code,{children:"-r"})," \u6216 ",(0,l.jsx)(c.code,{children:"-a"})," \u9009\u9879\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,l.jsx)(c.pre,{children:(0,l.jsx)(c.code,{className:"language-bash",children:"cp -a /home/user/documents /home/user/backup/\n"})}),"\n",(0,l.jsxs)(c.p,{children:["\u8fd9\u4f1a\u5c06 ",(0,l.jsx)(c.code,{children:"documents"})," \u76ee\u5f55\u53ca\u5176\u6240\u6709\u5b50\u76ee\u5f55\u548c\u6587\u4ef6\u590d\u5236\u5230 ",(0,l.jsx)(c.code,{children:"backup"})," \u76ee\u5f55\u3002"]}),"\n",(0,l.jsx)(c.h3,{id:"43-\u8986\u76d6\u5df2\u6709\u6587\u4ef6\u65f6\u8be2\u95ee\u786e\u8ba4-",children:"4.3 \u8986\u76d6\u5df2\u6709\u6587\u4ef6\u65f6\u8be2\u95ee\u786e\u8ba4 \u2753"}),"\n",(0,l.jsxs)(c.p,{children:["\u82e5\u4f60\u4e0d\u5e0c\u671b\u610f\u5916\u8986\u76d6\u6587\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(c.code,{children:"-i"})," \u9009\u9879\uff0c\u786e\u4fdd\u6bcf\u6b21\u8986\u76d6\u6587\u4ef6\u65f6\u90fd\u4f1a\u63d0\u793a\u786e\u8ba4\uff1a"]}),"\n",(0,l.jsx)(c.pre,{children:(0,l.jsx)(c.code,{className:"language-bash",children:"cp -i file1.txt /home/user/backup/\n"})}),"\n",(0,l.jsx)(c.h3,{id:"44-\u663e\u793a\u590d\u5236\u8fc7\u7a0b-",children:"4.4 \u663e\u793a\u590d\u5236\u8fc7\u7a0b \ud83d\udd04"}),"\n",(0,l.jsxs)(c.p,{children:["\u5982\u679c\u4f60\u5e0c\u671b\u5728\u590d\u5236\u65f6\u67e5\u770b\u8be6\u7ec6\u8fc7\u7a0b\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(c.code,{children:"-v"})," \u9009\u9879\uff1a"]}),"\n",(0,l.jsx)(c.pre,{children:(0,l.jsx)(c.code,{className:"language-bash",children:"cp -v file1.txt /home/user/backup/\n"})}),"\n",(0,l.jsx)(c.h2,{id:"5-\u603b\u7ed3-",children:"5. \u603b\u7ed3 \ud83c\udfaf"}),"\n",(0,l.jsxs)(c.p,{children:[(0,l.jsx)(c.code,{children:"cp"})," \u547d\u4ee4\u662f Linux \u7cfb\u7edf\u4e2d\u975e\u5e38\u57fa\u7840\u4e14\u5f3a\u5927\u7684\u5de5\u5177\u3002\u901a\u8fc7\u638c\u63e1\u4e0d\u540c\u7684\u9009\u9879\uff0c\u4f60\u53ef\u4ee5\u66f4\u52a0\u9ad8\u6548\u5730\u8fdb\u884c\u6587\u4ef6\u548c\u76ee\u5f55\u7684\u590d\u5236\u4efb\u52a1\u3002\u5e38\u7528\u7684\u9009\u9879\u5982 ",(0,l.jsx)(c.code,{children:"-r"}),"\u3001",(0,l.jsx)(c.code,{children:"-i"}),"\u3001",(0,l.jsx)(c.code,{children:"-v"})," \u548c ",(0,l.jsx)(c.code,{children:"-a"}),"\uff0c\u80fd\u591f\u5927\u5927\u63d0\u5347\u4f60\u7684\u5de5\u4f5c\u6548\u7387\u548c\u5b89\u5168\u6027\u3002"]}),"\n",(0,l.jsxs)(c.p,{children:["\u5e0c\u671b\u8fd9\u7bc7\u6559\u7a0b\u80fd\u5e2e\u52a9\u4f60\u66f4\u597d\u5730\u7406\u89e3\u548c\u4f7f\u7528 ",(0,l.jsx)(c.code,{children:"cp"})," \u547d\u4ee4\uff01\ud83d\ude80"]})]})}function a(e={}){const{wrapper:c}={...(0,s.R)(),...e.components};return c?(0,l.jsx)(c,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},8453:(e,c,d)=>{d.d(c,{R:()=>i,x:()=>r});var n=d(6540);const l={},s=n.createContext(l);function i(e){const c=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function r(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(s.Provider,{value:c},e.children)}}}]);