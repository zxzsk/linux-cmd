"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8944],{718:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>l,toc:()=>h});const l=JSON.parse('{"id":"command/\u6587\u4ef6\u7ba1\u7406/\u79fb\u52a8\u3001\u590d\u5236\u3001\u94fe\u63a5/mv","title":"mv","description":"\u2b50\u79fb\u52a8\u6216\u91cd\u547d\u540d\u6587\u4ef6","source":"@site/docs/02-command/20-\u6587\u4ef6\u7ba1\u7406/\u79fb\u52a8\u3001\u590d\u5236\u3001\u94fe\u63a5/mv.md","sourceDirName":"02-command/20-\u6587\u4ef6\u7ba1\u7406/\u79fb\u52a8\u3001\u590d\u5236\u3001\u94fe\u63a5","slug":"/command/\u6587\u4ef6\u7ba1\u7406/\u79fb\u52a8\u3001\u590d\u5236\u3001\u94fe\u63a5/mv","permalink":"/command/\u6587\u4ef6\u7ba1\u7406/\u79fb\u52a8\u3001\u590d\u5236\u3001\u94fe\u63a5/mv","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/02-command/20-\u6587\u4ef6\u7ba1\u7406/\u79fb\u52a8\u3001\u590d\u5236\u3001\u94fe\u63a5/mv.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"mkdir","permalink":"/command/\u6587\u4ef6\u7ba1\u7406/\u79fb\u52a8\u3001\u590d\u5236\u3001\u94fe\u63a5/mkdir"},"next":{"title":"\u91cd\u547d\u540d","permalink":"/category/\u91cd\u547d\u540d"}}');var d=s(4848),i=s(8453);const r={},c=void 0,t={},h=[{value:"1. \u547d\u4ee4\u7b80\u4ecb",id:"1-\u547d\u4ee4\u7b80\u4ecb",level:2},{value:"2. \u547d\u4ee4\u683c\u5f0f",id:"2-\u547d\u4ee4\u683c\u5f0f",level:2},{value:"3. \u5e38\u7528\u9009\u9879",id:"3-\u5e38\u7528\u9009\u9879",level:2},{value:"3.1 <strong>\u57fa\u672c\u7528\u6cd5</strong>",id:"31-\u57fa\u672c\u7528\u6cd5",level:3},{value:"3.2 <strong>\u79fb\u52a8\u6587\u4ef6\u5230\u6307\u5b9a\u76ee\u5f55</strong>",id:"32-\u79fb\u52a8\u6587\u4ef6\u5230\u6307\u5b9a\u76ee\u5f55",level:3},{value:"3.3 <strong>\u79fb\u52a8\u591a\u4e2a\u6587\u4ef6\u5230\u76ee\u5f55</strong>",id:"33-\u79fb\u52a8\u591a\u4e2a\u6587\u4ef6\u5230\u76ee\u5f55",level:3},{value:"3.4 <strong>\u4ea4\u4e92\u6a21\u5f0f</strong>",id:"34-\u4ea4\u4e92\u6a21\u5f0f",level:3},{value:"3.5 <strong>\u5f3a\u5236\u8986\u76d6</strong>",id:"35-\u5f3a\u5236\u8986\u76d6",level:3},{value:"3.6 <strong>\u4fdd\u6301\u6587\u4ef6\u5c5e\u6027</strong>",id:"36-\u4fdd\u6301\u6587\u4ef6\u5c5e\u6027",level:3},{value:"3.7 <strong>\u663e\u793a\u8be6\u7ec6\u4fe1\u606f</strong>",id:"37-\u663e\u793a\u8be6\u7ec6\u4fe1\u606f",level:3},{value:"4. \u547d\u4ee4\u793a\u4f8b",id:"4-\u547d\u4ee4\u793a\u4f8b",level:2},{value:"4.1 <strong>\u91cd\u547d\u540d\u6587\u4ef6</strong>",id:"41-\u91cd\u547d\u540d\u6587\u4ef6",level:3},{value:"4.2 <strong>\u79fb\u52a8\u6587\u4ef6\u5230\u76ee\u6807\u76ee\u5f55</strong>",id:"42-\u79fb\u52a8\u6587\u4ef6\u5230\u76ee\u6807\u76ee\u5f55",level:3},{value:"4.3 <strong>\u79fb\u52a8\u591a\u4e2a\u6587\u4ef6</strong>",id:"43-\u79fb\u52a8\u591a\u4e2a\u6587\u4ef6",level:3},{value:"4.4 <strong>\u4f7f\u7528\u4ea4\u4e92\u6a21\u5f0f\u907f\u514d\u8986\u76d6</strong>",id:"44-\u4f7f\u7528\u4ea4\u4e92\u6a21\u5f0f\u907f\u514d\u8986\u76d6",level:3},{value:"4.5 <strong>\u5f3a\u5236\u8986\u76d6\u6587\u4ef6</strong>",id:"45-\u5f3a\u5236\u8986\u76d6\u6587\u4ef6",level:3},{value:"4.6 <strong>\u4fdd\u7559\u6587\u4ef6\u5c5e\u6027</strong>",id:"46-\u4fdd\u7559\u6587\u4ef6\u5c5e\u6027",level:3},{value:"4.7 <strong>\u663e\u793a\u8be6\u7ec6\u4fe1\u606f</strong>",id:"47-\u663e\u793a\u8be6\u7ec6\u4fe1\u606f",level:3},{value:"5. \u5c0f\u6280\u5de7\u4e0e\u6ce8\u610f\u4e8b\u9879",id:"5-\u5c0f\u6280\u5de7\u4e0e\u6ce8\u610f\u4e8b\u9879",level:2},{value:"5.1 <strong>\u79fb\u52a8\u6587\u4ef6\u5e76\u91cd\u547d\u540d</strong>",id:"51-\u79fb\u52a8\u6587\u4ef6\u5e76\u91cd\u547d\u540d",level:3},{value:"5.2 <strong>\u907f\u514d\u610f\u5916\u8986\u76d6</strong>",id:"52-\u907f\u514d\u610f\u5916\u8986\u76d6",level:3},{value:"5.3 <strong>\u67e5\u770b\u79fb\u52a8\u540e\u7684\u6587\u4ef6</strong>",id:"53-\u67e5\u770b\u79fb\u52a8\u540e\u7684\u6587\u4ef6",level:3},{value:"6. \u603b\u7ed3",id:"6-\u603b\u7ed3",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"\u2b50\u79fb\u52a8\u6216\u91cd\u547d\u540d\u6587\u4ef6"}),"\n",(0,d.jsx)(n.h2,{id:"1-\u547d\u4ee4\u7b80\u4ecb",children:"1. \u547d\u4ee4\u7b80\u4ecb"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"mv"}),"\uff08move\uff09\u662f Linux \u4e2d\u7528\u6765\u79fb\u52a8\u548c\u91cd\u547d\u540d\u6587\u4ef6\u6216\u76ee\u5f55\u7684\u547d\u4ee4\u3002\ud83d\udcc2 \u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"mv"})," \u547d\u4ee4\u5c06\u6587\u4ef6\u6216\u76ee\u5f55\u4ece\u4e00\u4e2a\u4f4d\u7f6e\u79fb\u52a8\u5230\u53e6\u4e00\u4e2a\u4f4d\u7f6e\uff0c\u6216\u8005\u66f4\u6539\u6587\u4ef6\u540d\u3002\u5b83\u662f\u6587\u4ef6\u7ba1\u7406\u4e2d\u4e0d\u53ef\u6216\u7f3a\u7684\u5de5\u5177\uff0c\u65e0\u8bba\u662f\u6574\u7406\u6587\u4ef6\u5939\u3001\u91cd\u547d\u540d\u6587\u4ef6\u8fd8\u662f\u8c03\u6574\u76ee\u5f55\u7ed3\u6784\uff0c\u90fd\u79bb\u4e0d\u5f00\u5b83\uff01"]}),"\n",(0,d.jsx)(n.h2,{id:"2-\u547d\u4ee4\u683c\u5f0f",children:"2. \u547d\u4ee4\u683c\u5f0f"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"mv [\u9009\u9879] \u6e90\u6587\u4ef6 \u76ee\u6807\u6587\u4ef6/\u76ee\u5f55\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u6e90\u6587\u4ef6/\u76ee\u5f55"}),"\uff1a\u9700\u8981\u79fb\u52a8\u6216\u91cd\u547d\u540d\u7684\u6587\u4ef6\u6216\u76ee\u5f55\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u76ee\u6807\u6587\u4ef6/\u76ee\u5f55"}),"\uff1a\u76ee\u6807\u8def\u5f84\u6216\u65b0\u7684\u6587\u4ef6\u540d\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"3-\u5e38\u7528\u9009\u9879",children:"3. \u5e38\u7528\u9009\u9879"}),"\n",(0,d.jsxs)(n.h3,{id:"31-\u57fa\u672c\u7528\u6cd5",children:["3.1 ",(0,d.jsx)(n.strong,{children:"\u57fa\u672c\u7528\u6cd5"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ mv oldfile.txt newfile.txt\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u8fd9\u6761\u547d\u4ee4\u4f1a\u5c06\u6587\u4ef6 ",(0,d.jsx)(n.code,{children:"oldfile.txt"})," \u91cd\u547d\u540d\u4e3a ",(0,d.jsx)(n.code,{children:"newfile.txt"}),"\u3002\ud83d\udcdd"]}),"\n",(0,d.jsxs)(n.h3,{id:"32-\u79fb\u52a8\u6587\u4ef6\u5230\u6307\u5b9a\u76ee\u5f55",children:["3.2 ",(0,d.jsx)(n.strong,{children:"\u79fb\u52a8\u6587\u4ef6\u5230\u6307\u5b9a\u76ee\u5f55"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ mv myfile.txt /path/to/destination/\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u8fd9\u6761\u547d\u4ee4\u4f1a\u5c06 ",(0,d.jsx)(n.code,{children:"myfile.txt"})," \u6587\u4ef6\u79fb\u52a8\u5230\u6307\u5b9a\u7684\u76ee\u5f55 ",(0,d.jsx)(n.code,{children:"/path/to/destination/"}),"\u3002\ud83d\udcc2"]}),"\n",(0,d.jsxs)(n.h3,{id:"33-\u79fb\u52a8\u591a\u4e2a\u6587\u4ef6\u5230\u76ee\u5f55",children:["3.3 ",(0,d.jsx)(n.strong,{children:"\u79fb\u52a8\u591a\u4e2a\u6587\u4ef6\u5230\u76ee\u5f55"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ mv file1.txt file2.txt /path/to/destination/\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u8fd9\u6761\u547d\u4ee4\u4f1a\u5c06 ",(0,d.jsx)(n.code,{children:"file1.txt"})," \u548c ",(0,d.jsx)(n.code,{children:"file2.txt"})," \u4e24\u4e2a\u6587\u4ef6\u4e00\u8d77\u79fb\u52a8\u5230\u76ee\u6807\u76ee\u5f55 ",(0,d.jsx)(n.code,{children:"/path/to/destination/"}),"\u3002\ud83d\udcc1"]}),"\n",(0,d.jsxs)(n.h3,{id:"34-\u4ea4\u4e92\u6a21\u5f0f",children:["3.4 ",(0,d.jsx)(n.strong,{children:"\u4ea4\u4e92\u6a21\u5f0f"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"-i"})," \u9009\u9879\u65f6\uff0c",(0,d.jsx)(n.code,{children:"mv"})," \u4f1a\u5728\u8986\u76d6\u6587\u4ef6\u524d\u8fdb\u884c\u786e\u8ba4\u3002\u5982\u679c\u76ee\u6807\u4f4d\u7f6e\u5df2\u7ecf\u6709\u540c\u540d\u6587\u4ef6\uff0c\u7cfb\u7edf\u4f1a\u63d0\u793a\u662f\u5426\u8986\u76d6\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ mv -i myfile.txt /path/to/destination/\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8fd9\u6761\u547d\u4ee4\u4f1a\u5728\u76ee\u6807\u76ee\u5f55\u5df2\u6709\u6587\u4ef6\u65f6\uff0c\u63d0\u793a\u4f60\u662f\u5426\u8986\u76d6\u8be5\u6587\u4ef6\u3002\ud83d\udd12"}),"\n",(0,d.jsxs)(n.h3,{id:"35-\u5f3a\u5236\u8986\u76d6",children:["3.5 ",(0,d.jsx)(n.strong,{children:"\u5f3a\u5236\u8986\u76d6"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"-f"})," \u9009\u9879\u65f6\uff0c",(0,d.jsx)(n.code,{children:"mv"})," \u4f1a\u5f3a\u5236\u8986\u76d6\u76ee\u6807\u4f4d\u7f6e\u5df2\u6709\u7684\u6587\u4ef6\uff0c\u800c\u4e0d\u8fdb\u884c\u4efb\u4f55\u63d0\u793a\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ mv -f myfile.txt /path/to/destination/\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8fd9\u6761\u547d\u4ee4\u4f1a\u76f4\u63a5\u8986\u76d6\u76ee\u6807\u76ee\u5f55\u4e2d\u7684\u540c\u540d\u6587\u4ef6\uff0c\u4e0d\u4f1a\u8be2\u95ee\u7528\u6237\u3002\u26a0\ufe0f"}),"\n",(0,d.jsxs)(n.h3,{id:"36-\u4fdd\u6301\u6587\u4ef6\u5c5e\u6027",children:["3.6 ",(0,d.jsx)(n.strong,{children:"\u4fdd\u6301\u6587\u4ef6\u5c5e\u6027"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"-u"})," \u9009\u9879\u65f6\uff0c",(0,d.jsx)(n.code,{children:"mv"})," \u53ea\u6709\u5728\u6e90\u6587\u4ef6\u6bd4\u76ee\u6807\u6587\u4ef6\u65b0\u65f6\u624d\u4f1a\u79fb\u52a8\u6587\u4ef6\uff0c\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u6587\u4ef6\u66ff\u6362\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ mv -u myfile.txt /path/to/destination/\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u8fd9\u6761\u547d\u4ee4\u4ec5\u5f53\u6e90\u6587\u4ef6 ",(0,d.jsx)(n.code,{children:"myfile.txt"})," \u6bd4\u76ee\u6807\u4f4d\u7f6e\u7684\u6587\u4ef6\u66f4\u65b0\u65f6\u624d\u4f1a\u79fb\u52a8\u6587\u4ef6\u3002\ud83d\udd52"]}),"\n",(0,d.jsxs)(n.h3,{id:"37-\u663e\u793a\u8be6\u7ec6\u4fe1\u606f",children:["3.7 ",(0,d.jsx)(n.strong,{children:"\u663e\u793a\u8be6\u7ec6\u4fe1\u606f"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"-v"})," \u9009\u9879\u65f6\uff0c",(0,d.jsx)(n.code,{children:"mv"})," \u4f1a\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u663e\u793a\u8be6\u7ec6\u7684\u4fe1\u606f\uff0c\u5e2e\u52a9\u4f60\u66f4\u597d\u5730\u4e86\u89e3\u6b63\u5728\u53d1\u751f\u7684\u64cd\u4f5c\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ mv -v myfile.txt /path/to/destination/\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8fd9\u6761\u547d\u4ee4\u4f1a\u8f93\u51fa\u6bcf\u4e2a\u6587\u4ef6\u7684\u79fb\u52a8\u8fc7\u7a0b\uff0c\u544a\u8bc9\u4f60\u54ea\u4e9b\u6587\u4ef6\u88ab\u79fb\u52a8\u5230\u4e86\u54ea\u91cc\u3002\ud83d\udce3"}),"\n",(0,d.jsx)(n.h2,{id:"4-\u547d\u4ee4\u793a\u4f8b",children:"4. \u547d\u4ee4\u793a\u4f8b"}),"\n",(0,d.jsxs)(n.h3,{id:"41-\u91cd\u547d\u540d\u6587\u4ef6",children:["4.1 ",(0,d.jsx)(n.strong,{children:"\u91cd\u547d\u540d\u6587\u4ef6"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ mv oldfile.txt newfile.txt\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ ls\r\nnewfile.txt\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u8fd9\u6761\u547d\u4ee4\u5c06 ",(0,d.jsx)(n.code,{children:"oldfile.txt"})," \u91cd\u547d\u540d\u4e3a ",(0,d.jsx)(n.code,{children:"newfile.txt"}),"\uff0c\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"ls"})," \u67e5\u770b\u65f6\uff0c\u6587\u4ef6\u540d\u5df2\u7ecf\u66f4\u65b0\u3002\ud83c\udf89"]}),"\n",(0,d.jsxs)(n.h3,{id:"42-\u79fb\u52a8\u6587\u4ef6\u5230\u76ee\u6807\u76ee\u5f55",children:["4.2 ",(0,d.jsx)(n.strong,{children:"\u79fb\u52a8\u6587\u4ef6\u5230\u76ee\u6807\u76ee\u5f55"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ mv myfile.txt /home/user/documents/\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ ls /home/user/documents/\r\nmyfile.txt\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u8fd9\u6761\u547d\u4ee4\u5c06 ",(0,d.jsx)(n.code,{children:"myfile.txt"})," \u6587\u4ef6\u4ece\u5f53\u524d\u76ee\u5f55\u79fb\u52a8\u5230 ",(0,d.jsx)(n.code,{children:"/home/user/documents/"})," \u76ee\u5f55\u3002\ud83d\udcc2"]}),"\n",(0,d.jsxs)(n.h3,{id:"43-\u79fb\u52a8\u591a\u4e2a\u6587\u4ef6",children:["4.3 ",(0,d.jsx)(n.strong,{children:"\u79fb\u52a8\u591a\u4e2a\u6587\u4ef6"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ mv file1.txt file2.txt /home/user/documents/\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ ls /home/user/documents/\r\nfile1.txt  file2.txt\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u8fd9\u6761\u547d\u4ee4\u5c06 ",(0,d.jsx)(n.code,{children:"file1.txt"})," \u548c ",(0,d.jsx)(n.code,{children:"file2.txt"})," \u4e24\u4e2a\u6587\u4ef6\u4e00\u8d77\u79fb\u52a8\u5230 ",(0,d.jsx)(n.code,{children:"/home/user/documents/"})," \u76ee\u5f55\u3002\ud83d\udcc1"]}),"\n",(0,d.jsxs)(n.h3,{id:"44-\u4f7f\u7528\u4ea4\u4e92\u6a21\u5f0f\u907f\u514d\u8986\u76d6",children:["4.4 ",(0,d.jsx)(n.strong,{children:"\u4f7f\u7528\u4ea4\u4e92\u6a21\u5f0f\u907f\u514d\u8986\u76d6"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ mv -i file1.txt /path/to/destination/\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"mv: overwrite '/path/to/destination/file1.txt'? \n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"-i"})," \u9009\u9879\u65f6\uff0c\u5982\u679c\u76ee\u6807\u76ee\u5f55\u5df2\u5b58\u5728\u540c\u540d\u6587\u4ef6\uff0c",(0,d.jsx)(n.code,{children:"mv"})," \u4f1a\u63d0\u793a\u662f\u5426\u8986\u76d6\u3002\ud83d\udc40"]}),"\n",(0,d.jsxs)(n.h3,{id:"45-\u5f3a\u5236\u8986\u76d6\u6587\u4ef6",children:["4.5 ",(0,d.jsx)(n.strong,{children:"\u5f3a\u5236\u8986\u76d6\u6587\u4ef6"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ mv -f file1.txt /path/to/destination/\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ ls /path/to/destination/\r\nfile1.txt\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"-f"})," \u9009\u9879\u65f6\uff0c",(0,d.jsx)(n.code,{children:"mv"})," \u4f1a\u5f3a\u5236\u8986\u76d6\u76ee\u6807\u76ee\u5f55\u4e2d\u7684\u540c\u540d\u6587\u4ef6\uff0c\u800c\u4e0d\u4f1a\u63d0\u793a\u786e\u8ba4\u3002\u26a1"]}),"\n",(0,d.jsxs)(n.h3,{id:"46-\u4fdd\u7559\u6587\u4ef6\u5c5e\u6027",children:["4.6 ",(0,d.jsx)(n.strong,{children:"\u4fdd\u7559\u6587\u4ef6\u5c5e\u6027"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ mv -u myfile.txt /path/to/destination/\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ ls /path/to/destination/\r\nmyfile.txt\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"-u"})," \u9009\u9879\u65f6\uff0c\u6587\u4ef6\u53ea\u6709\u5728\u6e90\u6587\u4ef6\u6bd4\u76ee\u6807\u6587\u4ef6\u65b0\u65f6\u624d\u4f1a\u88ab\u79fb\u52a8\u3002\ud83d\udd52"]}),"\n",(0,d.jsxs)(n.h3,{id:"47-\u663e\u793a\u8be6\u7ec6\u4fe1\u606f",children:["4.7 ",(0,d.jsx)(n.strong,{children:"\u663e\u793a\u8be6\u7ec6\u4fe1\u606f"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ mv -v myfile.txt /path/to/destination/\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"mv: renamed 'myfile.txt' -> '/path/to/destination/myfile.txt'\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"-v"})," \u9009\u9879\u65f6\uff0c",(0,d.jsx)(n.code,{children:"mv"})," \u4f1a\u663e\u793a\u64cd\u4f5c\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5e2e\u52a9\u4f60\u4e86\u89e3\u6587\u4ef6\u5982\u4f55\u88ab\u79fb\u52a8\u3002\ud83d\udce3"]}),"\n",(0,d.jsx)(n.h2,{id:"5-\u5c0f\u6280\u5de7\u4e0e\u6ce8\u610f\u4e8b\u9879",children:"5. \u5c0f\u6280\u5de7\u4e0e\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,d.jsxs)(n.h3,{id:"51-\u79fb\u52a8\u6587\u4ef6\u5e76\u91cd\u547d\u540d",children:["5.1 ",(0,d.jsx)(n.strong,{children:"\u79fb\u52a8\u6587\u4ef6\u5e76\u91cd\u547d\u540d"})]}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u679c\u4f60\u4e0d\u4ec5\u60f3\u79fb\u52a8\u6587\u4ef6\uff0c\u8fd8\u60f3\u91cd\u547d\u540d\u6587\u4ef6\uff0c\u53ef\u4ee5\u76f4\u63a5\u6307\u5b9a\u65b0\u6587\u4ef6\u540d\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ mv myfile.txt /home/user/documents/newfile.txt\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u8fd9\u6761\u547d\u4ee4\u4f1a\u5c06 ",(0,d.jsx)(n.code,{children:"myfile.txt"})," \u79fb\u52a8\u5230\u76ee\u6807\u76ee\u5f55\uff0c\u5e76\u91cd\u547d\u540d\u4e3a ",(0,d.jsx)(n.code,{children:"newfile.txt"}),"\u3002\ud83d\udcc2\ud83d\udd04"]}),"\n",(0,d.jsxs)(n.h3,{id:"52-\u907f\u514d\u610f\u5916\u8986\u76d6",children:["5.2 ",(0,d.jsx)(n.strong,{children:"\u907f\u514d\u610f\u5916\u8986\u76d6"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u5728\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"mv"})," \u65f6\uff0c\u8981\u5c0f\u5fc3\u907f\u514d\u8986\u76d6\u91cd\u8981\u6587\u4ef6\u3002\u53ef\u4ee5\u5728\u79fb\u52a8\u6587\u4ef6\u524d\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"-i"})," \u6216 ",(0,d.jsx)(n.code,{children:"-u"})," \u9009\u9879\uff0c\u786e\u4fdd\u4e0d\u4f1a\u4e0d\u5c0f\u5fc3\u8986\u76d6\u5df2\u7ecf\u5b58\u5728\u7684\u6587\u4ef6\u3002\u26a0\ufe0f"]}),"\n",(0,d.jsxs)(n.h3,{id:"53-\u67e5\u770b\u79fb\u52a8\u540e\u7684\u6587\u4ef6",children:["5.3 ",(0,d.jsx)(n.strong,{children:"\u67e5\u770b\u79fb\u52a8\u540e\u7684\u6587\u4ef6"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u79fb\u52a8\u6587\u4ef6\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"ls"})," \u547d\u4ee4\u68c0\u67e5\u6587\u4ef6\u662f\u5426\u5df2\u6b63\u786e\u79fb\u52a8\u5230\u76ee\u6807\u4f4d\u7f6e\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ ls /path/to/destination/\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8fd9\u6837\uff0c\u4f60\u5c31\u53ef\u4ee5\u786e\u8ba4\u6587\u4ef6\u662f\u5426\u6210\u529f\u79fb\u52a8\u5230\u65b0\u7684\u4f4d\u7f6e\u3002\ud83c\udfaf"}),"\n",(0,d.jsx)(n.h2,{id:"6-\u603b\u7ed3",children:"6. \u603b\u7ed3"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"mv"})," \u547d\u4ee4\u662f Linux \u6587\u4ef6\u7ba1\u7406\u4e2d\u7684\u4e00\u9879\u5f3a\u5927\u5de5\u5177\u3002\u65e0\u8bba\u662f\u6587\u4ef6\u7684\u79fb\u52a8\u8fd8\u662f\u91cd\u547d\u540d\uff0c",(0,d.jsx)(n.code,{children:"mv"})," \u90fd\u80fd\u591f\u9ad8\u6548\u5b8c\u6210\u4efb\u52a1\u3002\u638c\u63e1\u4e86\u5b83\uff0c\u4f60\u5c31\u80fd\u66f4\u597d\u5730\u7ba1\u7406\u6587\u4ef6\u7cfb\u7edf\u3001\u6574\u7406\u6587\u4ef6\u7ed3\u6784\u3002\ud83d\udcdd"]}),"\n",(0,d.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"mv"})," \u547d\u4ee4\uff0c\u4f60\u53ef\u4ee5\u8f7b\u677e\u5730\u79fb\u52a8\u6587\u4ef6\u5230\u6307\u5b9a\u4f4d\u7f6e\uff0c\u907f\u514d\u9519\u8bef\u64cd\u4f5c\uff0c\u5e76\u4e3a\u4f60\u7684\u6587\u4ef6\u7ba1\u7406\u63d0\u4f9b\u66f4\u591a\u7075\u6d3b\u6027\u3002\u5feb\u53bb\u8bd5\u8bd5\u5427\uff01\ud83d\ude80"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.p,{children:["\u52a0\u6cb9\uff0c\u7ee7\u7eed\u5728\u547d\u4ee4\u884c\u4e2d\u63a2\u7d22\u65b0\u6280\u80fd\uff01\ud83d\udcaa\ud83c\udffb \u522b\u5fd8\u4e86\u6536\u85cf\u5728\u7ebf\u77e5\u8bc6\u5e93\uff08",(0,d.jsx)(n.a,{href:"http://www.zxzsk.com",children:"www.zxzsk.com"}),"\uff09\uff0c\u8ba9\u66f4\u591a\u6709\u7528\u7684\u77e5\u8bc6\u4e3a\u4f60\u63d0\u4f9b\u5e2e\u52a9\uff01\ud83d\ude0a"]}),"\n",(0,d.jsx)(n.p,{children:"\u7ee7\u7eed\u63a2\u7d22\uff0c\u4f60\u5df2\u7ecf\u5f88\u68d2\u5566\uff01\ud83c\udf1f"})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var l=s(6540);const d={},i=l.createContext(d);function r(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);