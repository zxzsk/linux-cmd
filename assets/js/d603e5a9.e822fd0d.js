"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7906],{6126:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>j,frontMatter:()=>d,metadata:()=>l,toc:()=>t});const l=JSON.parse('{"id":"command/\u6587\u4ef6\u7ba1\u7406/\u67e5\u770b\u3001\u67e5\u627e\u3001\u6bd4\u8f83/file","title":"file","description":"\u2b50\u786e\u5b9a\u6587\u4ef6\u7c7b\u578b","source":"@site/docs/02-command/20-\u6587\u4ef6\u7ba1\u7406/\u67e5\u770b\u3001\u67e5\u627e\u3001\u6bd4\u8f83/file.md","sourceDirName":"02-command/20-\u6587\u4ef6\u7ba1\u7406/\u67e5\u770b\u3001\u67e5\u627e\u3001\u6bd4\u8f83","slug":"/2e8f7a9d","permalink":"/2e8f7a9d","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/02-command/20-\u6587\u4ef6\u7ba1\u7406/\u67e5\u770b\u3001\u67e5\u627e\u3001\u6bd4\u8f83/file.md","tags":[],"version":"current","frontMatter":{"slug":"/2e8f7a9d"},"sidebar":"tutorialSidebar","previous":{"title":"du","permalink":"/a94600cb"},"next":{"title":"find","permalink":"/59035de5"}}');var i=s(4848),r=s(8453);const d={slug:"/2e8f7a9d"},c=void 0,h={},t=[{value:"1. \u5e38\u89c1\u6587\u4ef6\u7c7b\u578b \ud83d\uddc3\ufe0f",id:"1-\u5e38\u89c1\u6587\u4ef6\u7c7b\u578b-\ufe0f",level:2},{value:"2. file \u547d\u4ee4\u53c2\u6570 \ud83d\udd27",id:"2-file-\u547d\u4ee4\u53c2\u6570-",level:2},{value:"\u5e38\u7528\u9009\u9879 \ud83c\udf1f",id:"\u5e38\u7528\u9009\u9879-",level:3},{value:"3. file \u547d\u4ee4\u793a\u4f8b \ud83d\ude80",id:"3-file-\u547d\u4ee4\u793a\u4f8b-",level:2},{value:"3.1 \u67e5\u770b\u6587\u4ef6\u7c7b\u578b",id:"31-\u67e5\u770b\u6587\u4ef6\u7c7b\u578b",level:3},{value:"3.2 \u663e\u793a MIME \u7c7b\u578b",id:"32-\u663e\u793a-mime-\u7c7b\u578b",level:3},{value:"3.3 \u5bf9\u7b26\u53f7\u94fe\u63a5\u89e3\u5f15\u7528",id:"33-\u5bf9\u7b26\u53f7\u94fe\u63a5\u89e3\u5f15\u7528",level:3},{value:"3.4 \u7981\u7528\u538b\u7f29\u68c0\u67e5",id:"34-\u7981\u7528\u538b\u7f29\u68c0\u67e5",level:3},{value:"4. \u4e3a\u4ec0\u4e48\u9009\u62e9 file \u547d\u4ee4\uff1f\ud83e\udd14",id:"4-\u4e3a\u4ec0\u4e48\u9009\u62e9-file-\u547d\u4ee4",level:2}];function x(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u2b50\u786e\u5b9a\u6587\u4ef6\u7c7b\u578b"}),"\n",(0,i.jsx)(n.h2,{id:"1-\u5e38\u89c1\u6587\u4ef6\u7c7b\u578b-\ufe0f",children:"1. \u5e38\u89c1\u6587\u4ef6\u7c7b\u578b \ud83d\uddc3\ufe0f"}),"\n",(0,i.jsx)(n.p,{children:"\u5728 Linux \u7cfb\u7edf\u4e2d\uff0c\u6587\u4ef6\u4e0d\u4ec5\u4ec5\u662f\u7b80\u5355\u7684\u5b58\u50a8\uff0c\u5b83\u4eec\u8fd8\u6709\u4e0d\u540c\u7684\u7c7b\u578b\u548c\u7528\u9014\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u666e\u901a\u6587\u4ef6\uff08Regular File\uff09"}),(0,i.jsx)(n.br,{}),"\n\u6700\u5e38\u89c1\u7684\u6587\u4ef6\u7c7b\u578b\uff0c\u5305\u62ec\u6587\u672c\u6587\u4ef6\u548c\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002\u666e\u901a\u6587\u4ef6\u53ef\u4ee5\u6267\u884c\u3001\u8bfb\u53d6\u6216\u5199\u5165\u3002",(0,i.jsx)(n.br,{}),"\n\ud83c\udf1f ",(0,i.jsx)(n.strong,{children:"\u793a\u4f8b"}),"\uff1a\u7a0b\u5e8f\u6587\u4ef6\u3001\u914d\u7f6e\u6587\u4ef6\u7b49\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u76ee\u5f55\u6587\u4ef6\uff08Directory File\uff09"}),(0,i.jsx)(n.br,{}),"\n\u7528\u4e8e\u5b58\u50a8\u5176\u4ed6\u6587\u4ef6\u548c\u76ee\u5f55\u7684\u5217\u8868\uff0c\u76f8\u5f53\u4e8e\u6587\u4ef6\u5939\u7684\u529f\u80fd\u3002",(0,i.jsx)(n.br,{}),"\n\ud83c\udf1f ",(0,i.jsx)(n.strong,{children:"\u793a\u4f8b"}),"\uff1a",(0,i.jsx)(n.code,{children:"/home"}),"\u3001",(0,i.jsx)(n.code,{children:"/etc"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u7b26\u53f7\u94fe\u63a5\u6587\u4ef6\uff08Symbolic Link\uff09"}),(0,i.jsx)(n.br,{}),"\n\u6307\u5411\u53e6\u4e00\u4e2a\u6587\u4ef6\u6216\u76ee\u5f55\u7684\u5feb\u6377\u65b9\u5f0f\uff0c\u7c7b\u4f3c\u4e8e Windows \u7cfb\u7edf\u4e2d\u7684\u201c\u5feb\u6377\u65b9\u5f0f\u201d\u3002",(0,i.jsx)(n.br,{}),"\n\ud83c\udf1f ",(0,i.jsx)(n.strong,{children:"\u793a\u4f8b"}),"\uff1a",(0,i.jsx)(n.code,{children:"ln -s target link"})," \u521b\u5efa\u7684\u94fe\u63a5\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u8bbe\u5907\u6587\u4ef6\uff08Device File\uff09"}),(0,i.jsx)(n.br,{}),"\n\u7528\u4e8e\u4e0e\u7cfb\u7edf\u8bbe\u5907\u901a\u4fe1\uff0c\u5206\u4e3a\u5b57\u7b26\u8bbe\u5907\u6587\u4ef6\u548c\u5757\u8bbe\u5907\u6587\u4ef6\u3002",(0,i.jsx)(n.br,{}),"\n\ud83c\udf1f ",(0,i.jsx)(n.strong,{children:"\u793a\u4f8b"}),"\uff1a",(0,i.jsx)(n.code,{children:"/dev/sda"}),"\uff08\u78c1\u76d8\u8bbe\u5907\uff09\uff0c",(0,i.jsx)(n.code,{children:"/dev/tty"}),"\uff08\u7ec8\u7aef\u8bbe\u5907\uff09\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u7ba1\u9053\u6587\u4ef6\uff08Named Pipe\uff09"}),(0,i.jsx)(n.br,{}),"\n\u8fdb\u7a0b\u95f4\u901a\u4fe1\u7684\u6865\u6881\uff0c\u8ba9\u4e00\u4e2a\u8fdb\u7a0b\u7684\u8f93\u51fa\u53ef\u4ee5\u76f4\u63a5\u4f20\u9012\u7ed9\u53e6\u4e00\u4e2a\u8fdb\u7a0b\u3002",(0,i.jsx)(n.br,{}),"\n\ud83c\udf1f ",(0,i.jsx)(n.strong,{children:"\u793a\u4f8b"}),"\uff1a",(0,i.jsx)(n.code,{children:"mkfifo pipe_name"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u5957\u63a5\u5b57\u6587\u4ef6\uff08Socket File\uff09"}),(0,i.jsx)(n.br,{}),"\n\u652f\u6301\u7f51\u7edc\u901a\u4fe1\u7684\u6587\u4ef6\u7c7b\u578b\uff0c\u7528\u4e8e\u8fdb\u7a0b\u95f4\u7684\u6570\u636e\u4ea4\u6362\u3002",(0,i.jsx)(n.br,{}),"\n\ud83c\udf1f ",(0,i.jsx)(n.strong,{children:"\u793a\u4f8b"}),"\uff1a",(0,i.jsx)(n.code,{children:"/var/run/docker.sock"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u7279\u6b8a\u6587\u4ef6\uff08Special File\uff09"}),(0,i.jsx)(n.br,{}),"\n\u5305\u62ec\u8bbe\u5907\u6587\u4ef6\u3001\u7ba1\u9053\u6587\u4ef6\u548c\u5957\u63a5\u5b57\u6587\u4ef6\uff0c\u4e3b\u8981\u7528\u4e8e\u7cfb\u7edf\u7ea7\u8f93\u5165/\u8f93\u51fa\u64cd\u4f5c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u901a\u8fc7\u7406\u89e3\u8fd9\u4e9b\u6587\u4ef6\u7c7b\u578b\uff0c\u53ef\u4ee5\u5e2e\u52a9\u4f60\u66f4\u9ad8\u6548\u5730\u7ba1\u7406\u7cfb\u7edf\u6587\u4ef6\uff01\ud83d\ude80"}),"\n",(0,i.jsx)(n.h2,{id:"2-file-\u547d\u4ee4\u53c2\u6570-",children:"2. file \u547d\u4ee4\u53c2\u6570 \ud83d\udd27"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"file [\u9009\u9879] \u6587\u4ef6\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u5e38\u7528\u9009\u9879-",children:"\u5e38\u7528\u9009\u9879 \ud83c\udf1f"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-b"}),"\uff1a\u7b80\u77ed\u8f93\u51fa\uff0c\u53ea\u663e\u793a\u6587\u4ef6\u7c7b\u578b\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-i"}),"\uff1a\u663e\u793a\u6587\u4ef6\u7684 MIME \u7c7b\u578b\uff0c\u9002\u5408\u7528\u4e8e\u7f51\u9875\u6216\u7f51\u7edc\u670d\u52a1\u7684\u5f00\u53d1\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-L"}),"\uff1a\u89e3\u6790\u7b26\u53f7\u94fe\u63a5\uff0c\u663e\u793a\u94fe\u63a5\u76ee\u6807\u7684\u6587\u4ef6\u7c7b\u578b\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-z"}),"\uff1a\u7981\u7528\u538b\u7f29\u68c0\u67e5\uff0c\u4e0d\u6df1\u5165\u68c0\u67e5\u538b\u7f29\u6587\u4ef6\u5185\u5bb9\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5c0f\u6280\u5de7\uff1a\u5728\u4e0d\u786e\u5b9a\u6587\u4ef6\u5185\u5bb9\u65f6\uff0c\u5148\u8bd5\u8bd5 ",(0,i.jsx)(n.code,{children:"file"}),"\uff0c\u5b83\u4f1a\u4e3a\u4f60\u63ed\u793a\u7b54\u6848\uff01\ud83e\uddd0"]}),"\n",(0,i.jsx)(n.h2,{id:"3-file-\u547d\u4ee4\u793a\u4f8b-",children:"3. file \u547d\u4ee4\u793a\u4f8b \ud83d\ude80"}),"\n",(0,i.jsx)(n.h3,{id:"31-\u67e5\u770b\u6587\u4ef6\u7c7b\u578b",children:"3.1 \u67e5\u770b\u6587\u4ef6\u7c7b\u578b"}),"\n",(0,i.jsx)(n.p,{children:"\u547d\u4ee4\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"file filename\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"filename: ASCII text\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u8868\u683c - \u5e38\u89c1\u7684\u6587\u4ef6\u683c\u5f0f\u5728file\u547d\u4ee4\u4e0b\u7684\u8f93\u51fa"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u6587\u4ef6\u7c7b\u578b"}),(0,i.jsx)(n.th,{children:"\u793a\u4f8b\u8f93\u51fa"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u6587\u672c\u6587\u4ef6"}),(0,i.jsx)(n.td,{children:"ASCII text"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u53ef\u6267\u884c\u6587\u4ef6"}),(0,i.jsx)(n.td,{children:"ELF 64-bit LSB executable, x86-64"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u538b\u7f29\u6587\u4ef6"}),(0,i.jsx)(n.td,{children:"gzip compressed data"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u56fe\u50cf\u6587\u4ef6"}),(0,i.jsx)(n.td,{children:"JPEG image data"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u97f3\u89c6\u9891\u6587\u4ef6"}),(0,i.jsx)(n.td,{children:"ISO Media, MP4 Base Media v1, MPEG ADTS, layer III"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u7b26\u53f7\u94fe\u63a5"}),(0,i.jsx)(n.td,{children:"symbolic link to 'target_file'"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u76ee\u5f55"}),(0,i.jsx)(n.td,{children:"directory"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u811a\u672c\u6587\u4ef6"}),(0,i.jsx)(n.td,{children:"Python script, ASCII text executable"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"32-\u663e\u793a-mime-\u7c7b\u578b",children:"3.2 \u663e\u793a MIME \u7c7b\u578b"}),"\n",(0,i.jsx)(n.p,{children:"\u547d\u4ee4\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"file -i filename\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"filename: text/plain; charset=us-ascii\n"})}),"\n",(0,i.jsx)(n.h3,{id:"33-\u5bf9\u7b26\u53f7\u94fe\u63a5\u89e3\u5f15\u7528",children:"3.3 \u5bf9\u7b26\u53f7\u94fe\u63a5\u89e3\u5f15\u7528"}),"\n",(0,i.jsx)(n.p,{children:"\u547d\u4ee4\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"file -L symlink\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"symlink: symbolic link to 'target_file'\n"})}),"\n",(0,i.jsx)(n.h3,{id:"34-\u7981\u7528\u538b\u7f29\u68c0\u67e5",children:"3.4 \u7981\u7528\u538b\u7f29\u68c0\u67e5"}),"\n",(0,i.jsx)(n.p,{children:"\u547d\u4ee4\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"file -z compressed_file.gz\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"compressed_file.gz: gzip compressed data\n"})}),"\n",(0,i.jsx)(n.h2,{id:"4-\u4e3a\u4ec0\u4e48\u9009\u62e9-file-\u547d\u4ee4",children:"4. \u4e3a\u4ec0\u4e48\u9009\u62e9 file \u547d\u4ee4\uff1f\ud83e\udd14"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"file"})," \u547d\u4ee4\u662f\u5feb\u901f\u8bc6\u522b\u6587\u4ef6\u7c7b\u578b\u7684\u9996\u9009\u5de5\u5177\uff0c\u7279\u522b\u662f\u5728\u9762\u5bf9\u964c\u751f\u6587\u4ef6\u65f6\u3002\u5b83\u80fd\u8ba9\u4f60\u5feb\u901f\u4e86\u89e3\u6587\u4ef6\u662f\u5426\u4e3a\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u53ef\u6267\u884c\u6587\u4ef6\uff08\u662f\u5426\u53ef\u4ee5\u8fd0\u884c\uff09"}),"\n",(0,i.jsx)(n.li,{children:"\u6587\u672c\u6587\u4ef6\uff08\u7f16\u7801\u683c\u5f0f\u3001\u5185\u5bb9\u7c7b\u578b\uff09"}),"\n",(0,i.jsx)(n.li,{children:"\u538b\u7f29\u6587\u4ef6\uff08\u538b\u7f29\u7b97\u6cd5\u7c7b\u578b\uff09"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\ud83c\udfaf ",(0,i.jsx)(n.strong,{children:"\u73b0\u4ee3\u66ff\u4ee3\u65b9\u6848\uff1f"}),(0,i.jsx)(n.br,{}),"\n\u5728\u4e00\u4e9b\u5f00\u53d1\u73af\u5883\u4e2d\uff0c\u5c24\u5176\u662f\u6d89\u53ca\u7248\u672c\u63a7\u5236\u7684\u573a\u666f\u4e0b\uff0c",(0,i.jsx)(n.code,{children:"file"})," \u547d\u4ee4\u53ef\u80fd\u4f1a\u88ab ",(0,i.jsx)(n.code,{children:"git"})," \u7b49\u5de5\u5177\u53d6\u4ee3\u3002\u4f8b\u5982\uff0c",(0,i.jsx)(n.code,{children:"git"})," \u80fd\u76f4\u63a5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"git diff"})," \u548c ",(0,i.jsx)(n.code,{children:"git status"})," \u6765\u5904\u7406\u6587\u4ef6\u7c7b\u578b\u548c\u72b6\u6001\u5dee\u5f02\u3002",(0,i.jsx)(n.br,{}),"\n\u4f46\u5728\u5355\u673a\u4efb\u52a1\u6216\u7cfb\u7edf\u6392\u67e5\u4e2d\uff0c",(0,i.jsx)(n.code,{children:"file"})," \u4f9d\u7136\u662f\u4e0d\u53ef\u66ff\u4ee3\u7684\u5229\u5668\uff01\ud83d\udd27"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.p,{children:["\u2728 ",(0,i.jsx)(n.strong,{children:"\u603b\u7ed3"}),"\uff1a",(0,i.jsx)(n.br,{}),"\n\u901a\u8fc7\u638c\u63e1 ",(0,i.jsx)(n.code,{children:"file"})," \u547d\u4ee4\uff0c\u4f60\u53ef\u4ee5\u8f7b\u677e\u5e94\u5bf9\u5404\u79cd\u6587\u4ef6\u7ba1\u7406\u9700\u6c42\uff0c\u65e0\u8bba\u662f\u89e3\u5bc6\u6587\u4ef6\u7c7b\u578b\u8fd8\u662f\u5206\u6790\u6587\u4ef6\u5185\u5bb9\u3002\u5e0c\u671b\u8fd9\u7bc7\u6559\u7a0b\u5bf9\u4f60\u6709\u6240\u5e2e\u52a9\uff01\u5982\u679c\u89c9\u5f97\u6709\u7528\uff0c\u522b\u5fd8\u4e86\u6536\u85cf ",(0,i.jsx)(n.strong,{children:"\u5728\u7ebf\u77e5\u8bc6\u5e93"}),"\uff08",(0,i.jsx)(n.a,{href:"http://www.zxzsk.com",children:"www.zxzsk.com"}),"\uff09\u54e6\uff01\ud83d\ude0a"]})]})}function j(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var l=s(6540);const i={},r=l.createContext(i);function d(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);