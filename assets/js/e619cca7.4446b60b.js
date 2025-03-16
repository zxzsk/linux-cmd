"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1994],{6676:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>p});const d=JSON.parse('{"id":"command/\u5305\u7ba1\u7406\u5668/Debian/dpkg","title":"dpkg","description":"\u2b50Debian \u7cfb\u7edf\u5305\u7ba1\u7406\u5668\uff0c\u6bd4 apt \u5305\u7ba1\u7406\u5668\u66f4\u504f\u5e95\u5c42\u3002","source":"@site/docs/02-command/10-\u5305\u7ba1\u7406\u5668/Debian/13-dpkg.md","sourceDirName":"02-command/10-\u5305\u7ba1\u7406\u5668/Debian","slug":"/command/\u5305\u7ba1\u7406\u5668/Debian/dpkg","permalink":"/command/\u5305\u7ba1\u7406\u5668/Debian/dpkg","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/02-command/10-\u5305\u7ba1\u7406\u5668/Debian/13-dpkg.md","tags":[],"version":"current","sidebarPosition":13,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"apt-cache","permalink":"/command/\u5305\u7ba1\u7406\u5668/Debian/apt-cache"},"next":{"title":"Red Hat","permalink":"/category/red-hat"}}');var s=r(4848),c=r(8453);const l={},a=void 0,i={},p=[{value:"1. \u5b89\u88c5\u8f6f\u4ef6\u5305 \ud83d\udd27",id:"1-\u5b89\u88c5\u8f6f\u4ef6\u5305-",level:2},{value:"1.1 \u4f7f\u7528 dpkg \u5b89\u88c5 <code>.deb</code> \u8f6f\u4ef6\u5305",id:"11-\u4f7f\u7528-dpkg-\u5b89\u88c5-deb-\u8f6f\u4ef6\u5305",level:3},{value:"\u4e0e apt \u7684\u5bf9\u6bd4 \ud83d\udd0d",id:"\u4e0e-apt-\u7684\u5bf9\u6bd4-",level:4},{value:"2. \u5220\u9664\u8f6f\u4ef6\u5305 \u274c",id:"2-\u5220\u9664\u8f6f\u4ef6\u5305-",level:2},{value:"2.1 \u4f7f\u7528 dpkg \u5220\u9664\u8f6f\u4ef6\u5305",id:"21-\u4f7f\u7528-dpkg-\u5220\u9664\u8f6f\u4ef6\u5305",level:3},{value:"2.2 \u5b8c\u5168\u5220\u9664\u8f6f\u4ef6\u5305\u53ca\u5176\u914d\u7f6e\u6587\u4ef6",id:"22-\u5b8c\u5168\u5220\u9664\u8f6f\u4ef6\u5305\u53ca\u5176\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u4e0e apt \u7684\u5bf9\u6bd4 \ud83e\uddf9",id:"\u4e0e-apt-\u7684\u5bf9\u6bd4--1",level:4},{value:"3. \u67e5\u770b\u5df2\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305 \ud83d\udcc2",id:"3-\u67e5\u770b\u5df2\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305-",level:2},{value:"3.1 \u4f7f\u7528 dpkg \u67e5\u770b\u5df2\u5b89\u88c5\u7684\u6240\u6709\u8f6f\u4ef6\u5305",id:"31-\u4f7f\u7528-dpkg-\u67e5\u770b\u5df2\u5b89\u88c5\u7684\u6240\u6709\u8f6f\u4ef6\u5305",level:3},{value:"3.2 \u67e5\u770b\u5355\u4e2a\u8f6f\u4ef6\u5305\u7684\u8be6\u7ec6\u4fe1\u606f",id:"32-\u67e5\u770b\u5355\u4e2a\u8f6f\u4ef6\u5305\u7684\u8be6\u7ec6\u4fe1\u606f",level:3},{value:"\u4e0e apt \u7684\u5bf9\u6bd4 \ud83d\udc40",id:"\u4e0e-apt-\u7684\u5bf9\u6bd4--2",level:4},{value:"4. \u67e5\u8be2\u8f6f\u4ef6\u5305\u7684\u5185\u5bb9 \ud83e\uddd0",id:"4-\u67e5\u8be2\u8f6f\u4ef6\u5305\u7684\u5185\u5bb9-",level:2},{value:"4.1 \u67e5\u770b\u8f6f\u4ef6\u5305\u4e2d\u7684\u6587\u4ef6",id:"41-\u67e5\u770b\u8f6f\u4ef6\u5305\u4e2d\u7684\u6587\u4ef6",level:3},{value:"4.2 \u67e5\u627e\u6587\u4ef6\u5c5e\u4e8e\u54ea\u4e2a\u8f6f\u4ef6\u5305",id:"42-\u67e5\u627e\u6587\u4ef6\u5c5e\u4e8e\u54ea\u4e2a\u8f6f\u4ef6\u5305",level:3},{value:"\u4e0e apt \u7684\u5bf9\u6bd4 \ud83d\udd04",id:"\u4e0e-apt-\u7684\u5bf9\u6bd4--3",level:4},{value:"5. \u4fee\u590d\u635f\u574f\u7684\u8f6f\u4ef6\u5305 \ud83d\udd27",id:"5-\u4fee\u590d\u635f\u574f\u7684\u8f6f\u4ef6\u5305-",level:2},{value:"6. \u603b\u7ed3 \ud83c\udf1f",id:"6-\u603b\u7ed3-",level:2}];function t(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u2b50Debian \u7cfb\u7edf\u5305\u7ba1\u7406\u5668\uff0c\u6bd4 apt \u5305\u7ba1\u7406\u5668\u66f4\u504f\u5e95\u5c42\u3002"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"dpkg"})," \u662f Debian \u53ca\u5176\u884d\u751f\u7248\u672c\uff08\u5982 Ubuntu\uff09\u4e2d\u4f7f\u7528\u7684\u4f4e\u7ea7\u8f6f\u4ef6\u5305\u7ba1\u7406\u5de5\u5177\u3002\u5b83\u7528\u4e8e\u5b89\u88c5\u3001\u6784\u5efa\u3001\u5220\u9664\u548c\u7ba1\u7406 ",(0,s.jsx)(n.code,{children:".deb"})," \u683c\u5f0f\u7684\u8f6f\u4ef6\u5305\u3002\u867d\u7136 ",(0,s.jsx)(n.code,{children:"dpkg"})," \u662f\u5f3a\u5927\u7684\u5305\u7ba1\u7406\u5de5\u5177\uff0c\u4f46\u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\uff0c",(0,s.jsx)(n.code,{children:"apt"})," \u547d\u4ee4\uff08\u9ad8\u7ea7\u5305\u5de5\u5177\uff09\u5e38\u5e38\u4f5c\u4e3a\u66f4\u9ad8\u7ea7\u7684\u5de5\u5177\uff0c\u7b80\u5316\u4e86\u5305\u7ba1\u7406\u7684\u8fc7\u7a0b\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"1-\u5b89\u88c5\u8f6f\u4ef6\u5305-",children:"1. \u5b89\u88c5\u8f6f\u4ef6\u5305 \ud83d\udd27"}),"\n",(0,s.jsxs)(n.h3,{id:"11-\u4f7f\u7528-dpkg-\u5b89\u88c5-deb-\u8f6f\u4ef6\u5305",children:["1.1 \u4f7f\u7528 dpkg \u5b89\u88c5 ",(0,s.jsx)(n.code,{children:".deb"})," \u8f6f\u4ef6\u5305"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"dpkg"})," \u7528\u4e8e\u76f4\u63a5\u5904\u7406 ",(0,s.jsx)(n.code,{children:".deb"})," \u5305\u6587\u4ef6\u3002\u8981\u5b89\u88c5 ",(0,s.jsx)(n.code,{children:".deb"})," \u5305\uff0c\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"-i"})," \u9009\u9879\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo dpkg -i <package-file.deb>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u5b89\u88c5 ",(0,s.jsx)(n.code,{children:"vim"})," \u7684 ",(0,s.jsx)(n.code,{children:".deb"})," \u5305\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo dpkg -i vim_8.0.deb\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5b89\u88c5\u8fc7\u7a0b\u4e2d\uff0c",(0,s.jsx)(n.code,{children:"dpkg"})," \u53ea\u4f1a\u5b89\u88c5 ",(0,s.jsx)(n.code,{children:".deb"})," \u6587\u4ef6\uff0c\u800c\u4e0d\u4f1a\u81ea\u52a8\u5904\u7406\u7f3a\u5931\u7684\u4f9d\u8d56\u3002\u5982\u679c\u7f3a\u5c11\u4f9d\u8d56\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"apt-get"})," \u6765\u4fee\u590d\u5b83\u4eec\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install -f\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u4e0e-apt-\u7684\u5bf9\u6bd4-",children:"\u4e0e apt \u7684\u5bf9\u6bd4 \ud83d\udd0d"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"apt"})," \u5728\u5b89\u88c5\u8f6f\u4ef6\u5305\u65f6\u81ea\u52a8\u5904\u7406\u4f9d\u8d56\u5173\u7cfb\uff0c\u7528\u6237\u4e0d\u9700\u8981\u624b\u52a8\u4fee\u590d\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt install <package-name>\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"apt"})," \u8fd8\u53ef\u4ee5\u4ece\u8f6f\u4ef6\u4ed3\u5e93\u4e2d\u76f4\u63a5\u5b89\u88c5\u8f6f\u4ef6\u5305\uff0c\u800c\u4e0d\u9700\u8981\u4e0b\u8f7d ",(0,s.jsx)(n.code,{children:".deb"})," \u6587\u4ef6\u3002\ud83d\udc4f"]}),"\n",(0,s.jsx)(n.h2,{id:"2-\u5220\u9664\u8f6f\u4ef6\u5305-",children:"2. \u5220\u9664\u8f6f\u4ef6\u5305 \u274c"}),"\n",(0,s.jsx)(n.h3,{id:"21-\u4f7f\u7528-dpkg-\u5220\u9664\u8f6f\u4ef6\u5305",children:"2.1 \u4f7f\u7528 dpkg \u5220\u9664\u8f6f\u4ef6\u5305"}),"\n",(0,s.jsxs)(n.p,{children:["\u8981\u5220\u9664\u5df2\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"-r"}),"\uff08remove\uff09\u9009\u9879\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo dpkg -r <package-name>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u5220\u9664 ",(0,s.jsx)(n.code,{children:"vim"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo dpkg -r vim\n"})}),"\n",(0,s.jsx)(n.h3,{id:"22-\u5b8c\u5168\u5220\u9664\u8f6f\u4ef6\u5305\u53ca\u5176\u914d\u7f6e\u6587\u4ef6",children:"2.2 \u5b8c\u5168\u5220\u9664\u8f6f\u4ef6\u5305\u53ca\u5176\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u5e0c\u671b\u5220\u9664\u8f6f\u4ef6\u5305\u53ca\u5176\u6240\u6709\u914d\u7f6e\u6587\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"-P"}),"\uff08purge\uff09\u9009\u9879\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo dpkg -P <package-name>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u5b8c\u5168\u5220\u9664 ",(0,s.jsx)(n.code,{children:"vim"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo dpkg -P vim\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u4e0e-apt-\u7684\u5bf9\u6bd4--1",children:"\u4e0e apt \u7684\u5bf9\u6bd4 \ud83e\uddf9"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"apt"})," \u63d0\u4f9b\u4e86\u7c7b\u4f3c\u7684\u529f\u80fd\u6765\u5220\u9664\u5305\u53ca\u5176\u914d\u7f6e\u6587\u4ef6\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt remove <package-name>  # \u5220\u9664\u5305\r\nsudo apt purge <package-name>   # \u5b8c\u5168\u5220\u9664\u5305\u53ca\u914d\u7f6e\u6587\u4ef6\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"apt"})," \u4f1a\u5904\u7406\u4f9d\u8d56\u5173\u7cfb\uff0c\u5e76\u786e\u4fdd\u5220\u9664\u4e0d\u518d\u9700\u8981\u7684\u5305\u54e6\uff01\ud83e\uddd8\u200d\u2640\ufe0f"]}),"\n",(0,s.jsx)(n.h2,{id:"3-\u67e5\u770b\u5df2\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305-",children:"3. \u67e5\u770b\u5df2\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305 \ud83d\udcc2"}),"\n",(0,s.jsx)(n.h3,{id:"31-\u4f7f\u7528-dpkg-\u67e5\u770b\u5df2\u5b89\u88c5\u7684\u6240\u6709\u8f6f\u4ef6\u5305",children:"3.1 \u4f7f\u7528 dpkg \u67e5\u770b\u5df2\u5b89\u88c5\u7684\u6240\u6709\u8f6f\u4ef6\u5305"}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"dpkg -l"})," \u547d\u4ee4\u53ef\u4ee5\u5217\u51fa\u6240\u6709\u5df2\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dpkg -l\n"})}),"\n",(0,s.jsx)(n.h3,{id:"32-\u67e5\u770b\u5355\u4e2a\u8f6f\u4ef6\u5305\u7684\u8be6\u7ec6\u4fe1\u606f",children:"3.2 \u67e5\u770b\u5355\u4e2a\u8f6f\u4ef6\u5305\u7684\u8be6\u7ec6\u4fe1\u606f"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"-s"}),"\uff08status\uff09\u9009\u9879\u67e5\u770b\u67d0\u4e2a\u5305\u7684\u8be6\u7ec6\u4fe1\u606f\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dpkg -s <package-name>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u67e5\u770b ",(0,s.jsx)(n.code,{children:"vim"})," \u5305\u7684\u8be6\u7ec6\u4fe1\u606f\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dpkg -s vim\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u4e0e-apt-\u7684\u5bf9\u6bd4--2",children:"\u4e0e apt \u7684\u5bf9\u6bd4 \ud83d\udc40"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"apt"})," \u63d0\u4f9b\u4e86\u76f8\u4f3c\u7684\u529f\u80fd\uff0c\u4f46\u66f4\u52a0\u7b80\u6d01\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"apt list --installed   # \u67e5\u770b\u5df2\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305\r\napt show <package-name>  # \u67e5\u770b\u67d0\u4e2a\u8f6f\u4ef6\u5305\u7684\u8be6\u7ec6\u4fe1\u606f\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"apt"})," \u63d0\u4f9b\u4e86\u66f4\u76f4\u89c2\u7684\u547d\u4ee4\u8f93\u51fa\uff0c\u7279\u522b\u9002\u5408\u5bf9\u5305\u8fdb\u884c\u67e5\u8be2\u548c\u7ba1\u7406\u3002\ud83d\udcd1"]}),"\n",(0,s.jsx)(n.h2,{id:"4-\u67e5\u8be2\u8f6f\u4ef6\u5305\u7684\u5185\u5bb9-",children:"4. \u67e5\u8be2\u8f6f\u4ef6\u5305\u7684\u5185\u5bb9 \ud83e\uddd0"}),"\n",(0,s.jsx)(n.h3,{id:"41-\u67e5\u770b\u8f6f\u4ef6\u5305\u4e2d\u7684\u6587\u4ef6",children:"4.1 \u67e5\u770b\u8f6f\u4ef6\u5305\u4e2d\u7684\u6587\u4ef6"}),"\n",(0,s.jsxs)(n.p,{children:["\u8981\u67e5\u770b\u67d0\u4e2a\u5305\u4e2d\u5305\u542b\u7684\u6240\u6709\u6587\u4ef6\uff0c\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"dpkg -L"})," \u547d\u4ee4\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dpkg -L <package-name>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u67e5\u770b ",(0,s.jsx)(n.code,{children:"vim"})," \u5305\u7684\u6240\u6709\u6587\u4ef6\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dpkg -L vim\n"})}),"\n",(0,s.jsx)(n.h3,{id:"42-\u67e5\u627e\u6587\u4ef6\u5c5e\u4e8e\u54ea\u4e2a\u8f6f\u4ef6\u5305",children:"4.2 \u67e5\u627e\u6587\u4ef6\u5c5e\u4e8e\u54ea\u4e2a\u8f6f\u4ef6\u5305"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u60f3\u77e5\u9053\u67d0\u4e2a\u6587\u4ef6\u5c5e\u4e8e\u54ea\u4e2a\u8f6f\u4ef6\u5305\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"dpkg -S"})," \u547d\u4ee4\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dpkg -S <file-path>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u67e5\u627e ",(0,s.jsx)(n.code,{children:"/usr/bin/vim"})," \u5c5e\u4e8e\u54ea\u4e2a\u8f6f\u4ef6\u5305\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dpkg -S /usr/bin/vim\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u4e0e-apt-\u7684\u5bf9\u6bd4--3",children:"\u4e0e apt \u7684\u5bf9\u6bd4 \ud83d\udd04"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"apt"})," \u4e5f\u652f\u6301\u7c7b\u4f3c\u7684\u529f\u80fd\uff0c\u4f46\u8bed\u6cd5\u66f4\u7b80\u6d01\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"apt-file list <package-name>  # \u67e5\u770b\u5305\u4e2d\u7684\u6587\u4ef6\r\napt-file search <file-path>   # \u67e5\u627e\u6587\u4ef6\u5c5e\u4e8e\u54ea\u4e2a\u5305\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,s.jsx)(n.code,{children:"apt-file"})," \u662f\u4e00\u4e2a\u5355\u72ec\u7684\u5de5\u5177\uff0c\u5728\u9996\u6b21\u4f7f\u7528\u65f6\u53ef\u80fd\u9700\u8981\u66f4\u65b0\u7d22\u5f15\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt update\r\nsudo apt install apt-file\n"})}),"\n",(0,s.jsx)(n.h2,{id:"5-\u4fee\u590d\u635f\u574f\u7684\u8f6f\u4ef6\u5305-",children:"5. \u4fee\u590d\u635f\u574f\u7684\u8f6f\u4ef6\u5305 \ud83d\udd27"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u5728\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"dpkg"})," \u65f6\u9047\u5230\u4f9d\u8d56\u95ee\u9898\u6216\u635f\u574f\u7684\u5305\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u4fee\u590d\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install -f\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u547d\u4ee4\u4f1a\u81ea\u52a8\u4fee\u590d\u4f9d\u8d56\u95ee\u9898\uff0c\u5e76\u786e\u4fdd\u7cfb\u7edf\u4e2d\u7684\u5305\u80fd\u591f\u6b63\u786e\u5b89\u88c5\u3002\u2699\ufe0f"}),"\n",(0,s.jsx)(n.h2,{id:"6-\u603b\u7ed3-",children:"6. \u603b\u7ed3 \ud83c\udf1f"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"dpkg"})," \u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u5de5\u5177\uff0c\u9002\u7528\u4e8e\u76f4\u63a5\u5904\u7406 ",(0,s.jsx)(n.code,{children:".deb"})," \u5305\u6587\u4ef6\uff0c\u5b83\u5141\u8bb8\u4f60\u5b89\u88c5\u3001\u5220\u9664\u3001\u67e5\u8be2\u548c\u7ba1\u7406\u5305\u3002\u867d\u7136 ",(0,s.jsx)(n.code,{children:"dpkg"})," \u63d0\u4f9b\u4e86\u5e95\u5c42\u64cd\u4f5c\u7684\u7075\u6d3b\u6027\uff0c\u4f46\u5728\u65e5\u5e38\u4f7f\u7528\u4e2d\uff0c",(0,s.jsx)(n.code,{children:"apt"})," \u63d0\u4f9b\u4e86\u66f4\u9ad8\u5c42\u6b21\u7684\u5c01\u88c5\uff0c\u81ea\u52a8\u5904\u7406\u4f9d\u8d56\u548c\u66f4\u65b0\u5305\u3002\u56e0\u6b64\uff0c\u5bf9\u4e8e\u5927\u591a\u6570\u7528\u6237\u6765\u8bf4\uff0c",(0,s.jsx)(n.code,{children:"apt"})," \u66f4\u52a0\u65b9\u4fbf\u548c\u6613\u7528\u3002\ud83d\ude0a"]}),"\n",(0,s.jsxs)(n.p,{children:["\u7136\u800c\uff0c",(0,s.jsx)(n.code,{children:"dpkg"})," \u5728\u9700\u8981\u76f4\u63a5\u64cd\u4f5c ",(0,s.jsx)(n.code,{children:".deb"})," \u5305\u6587\u4ef6\u65f6\u4ecd\u7136\u4e0d\u53ef\u6216\u7f3a\u3002\u5982\u679c\u4f60\u9700\u8981\u66f4\u7cbe\u7ec6\u5730\u63a7\u5236\u5305\u7ba1\u7406\uff0c",(0,s.jsx)(n.code,{children:"dpkg"})," \u4f1a\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u9009\u62e9\u3002\u5e0c\u671b\u8fd9\u7bc7\u6559\u7a0b\u5e2e\u52a9\u4f60\u66f4\u597d\u5730\u7406\u89e3 ",(0,s.jsx)(n.code,{children:"dpkg"})," \u548c ",(0,s.jsx)(n.code,{children:"apt"})," \u7684\u533a\u522b\u4e0e\u4f7f\u7528\u573a\u666f\uff0c\u8ba9\u4f60\u5728\u8f6f\u4ef6\u5305\u7ba1\u7406\u4e2d\u5f97\u5fc3\u5e94\u624b\uff01\ud83c\udf08"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5e0c\u671b\u8fd9\u7bc7\u6559\u7a0b\u5bf9\u4f60\u6709\u6240\u5e2e\u52a9\uff01\u522b\u5fd8\u4e86\u6536\u85cf ",(0,s.jsx)(n.strong,{children:"\u5728\u7ebf\u77e5\u8bc6\u5e93"}),"\uff08 ",(0,s.jsx)(n.a,{href:"http://www.zxzsk.com",children:"www.zxzsk.com"})," \uff09\u54e6\uff01\ud83d\ude0a\ud83c\udf89"]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:" dpkg --help "}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ dpkg --help\r\n\u7528\u6cd5\uff1adpkg [<\u9009\u9879>...] <\u547d\u4ee4>\r\n\r\n\u547d\u4ee4\uff1a\r\n  -i|--install       <.deb \u6587\u4ef6\u540d> ... | -R|--recursive <\u76ee\u5f55> ...\r\n  --unpack           <.deb \u6587\u4ef6\u540d> ... | -R|--recursive <\u76ee\u5f55> ...\r\n  -A|--record-avail  <.deb \u6587\u4ef6\u540d> ... | -R|--recursive <\u76ee\u5f55> ...\r\n  --configure        <\u8f6f\u4ef6\u5305\u540d>    ... | -a|--pending\r\n  --triggers-only    <\u8f6f\u4ef6\u5305\u540d>    ... | -a|--pending\r\n  -r|--remove        <\u8f6f\u4ef6\u5305\u540d>    ... | -a|--pending\r\n  -P|--purge         <\u8f6f\u4ef6\u5305\u540d>    ... | -a|--pending\r\n  -V|--verify <\u8f6f\u4ef6\u5305\u540d> ...       \u68c0\u67e5\u5305\u7684\u5b8c\u6574\u6027\u3002  \r\n  --get-selections [<\u8868\u8fbe\u5f0f> ...]  \u628a\u5df2\u9009\u4e2d\u7684\u8f6f\u4ef6\u5305\u5217\u8868\u6253\u5370\u5230\u6807\u51c6\u8f93\u51fa\u3002  \r\n  --set-selections                 \u4ece\u6807\u51c6\u8f93\u5165\u91cc\u8bfb\u51fa\u8981\u9009\u62e9\u7684\u8f6f\u4ef6\u3002  \r\n  --clear-selections               \u53d6\u6d88\u9009\u4e2d\u6240\u6709\u975e\u5fc5\u9700\u7684\u8f6f\u4ef6\u5305\u3002  \r\n  --update-avail <\u8f6f\u4ef6\u5305\u6587\u4ef6>      \u66ff\u6362\u73b0\u6709\u53ef\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305\u4fe1\u606f\u3002  \r\n  --merge-avail  <\u8f6f\u4ef6\u5305\u6587\u4ef6>      \u628a\u6587\u4ef6\u4e2d\u7684\u4fe1\u606f\u5408\u5e76\u5230\u7cfb\u7edf\u4e2d\u3002  \r\n  --clear-avail                    \u6e05\u9664\u73b0\u6709\u7684\u8f6f\u4ef6\u5305\u4fe1\u606f\u3002  \r\n  --forget-old-unavail             \u5fd8\u5374\u5df2\u88ab\u5378\u8f7d\u7684\u4e0d\u53ef\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305\u3002  \r\n  -s|--status      <\u8f6f\u4ef6\u5305\u540d> ...  \u663e\u793a\u6307\u5b9a\u8f6f\u4ef6\u5305\u7684\u8be6\u7ec6\u72b6\u6001\u3002  \r\n  -p|--print-avail <\u8f6f\u4ef6\u5305\u540d> ...  \u663e\u793a\u53ef\u4f9b\u5b89\u88c5\u7684\u8f6f\u4ef6\u7248\u672c\u3002  \r\n  -L|--listfiles   <\u8f6f\u4ef6\u5305\u540d> ...  \u5217\u51fa\u5c5e\u4e8e\u6307\u5b9a\u8f6f\u4ef6\u5305\u7684\u6587\u4ef6\u3002  \r\n  -l|--list  [<\u8868\u8fbe\u5f0f> ...]        \u7b80\u660e\u5730\u5217\u51fa\u8f6f\u4ef6\u5305\u7684\u72b6\u6001\u3002  \r\n  # highlight-next-line\r\n  -S|--search <\u8868\u8fbe\u5f0f> ...         \u641c\u7d22\u542b\u6709\u6307\u5b9a\u6587\u4ef6\u7684\u8f6f\u4ef6\u5305\u3002  \r\n  -C|--audit [<\u8868\u8fbe\u5f0f> ...]        \u68c0\u67e5\u662f\u5426\u6709\u8f6f\u4ef6\u5305\u6b8b\u635f\u3002  \r\n  --yet-to-unpack                  \u5217\u51fa\u6807\u8bb0\u4e3a\u5f85\u89e3\u538b\u7684\u8f6f\u4ef6\u5305\u3002  \r\n  --predep-package                 \u5217\u51fa\u5f85\u89e3\u538b\u7684\u9884\u4f9d\u8d56\u3002  \r\n  --add-architecture    <\u4f53\u7cfb\u7ed3\u6784> \u6dfb\u52a0 <\u4f53\u7cfb\u7ed3\u6784> \u5230\u4f53\u7cfb\u7ed3\u6784\u5217\u8868\u3002  \r\n  --remove-architecture <\u4f53\u7cfb\u7ed3\u6784> \u4ece\u4f53\u7cfb\u7ed3\u6784\u5217\u8868\u4e2d\u79fb\u9664 <\u4f53\u7cfb\u7ed3\u6784>\u3002  \r\n  --print-architecture             \u663e\u793a dpkg \u4f53\u7cfb\u7ed3\u6784\u3002  \r\n  --print-foreign-architectures    \u663e\u793a\u5df2\u542f\u7528\u7684\u5f02\u8d28\u4f53\u7cfb\u7ed3\u6784\u3002  \r\n  --assert-<\u7279\u6027>                  \u5bf9\u6307\u5b9a\u7279\u6027\u542f\u7528\u65ad\u8a00\u652f\u6301\u3002  \r\n  --validate-<\u5c5e\u6027> <\u5b57\u7b26\u4e32>       \u9a8c\u8bc1\u4e00\u4e2a <\u5c5e\u6027>\u7684 <\u5b57\u7b26\u4e32>\u3002  \r\n  --compare-versions <a> <\u5173\u7cfb> <b> \u6bd4\u8f83\u7248\u672c\u53f7 - \u89c1\u4e0b\u3002  \r\n  --force-help                     \u663e\u793a\u672c\u5f3a\u5236\u9009\u9879\u7684\u5e2e\u52a9\u4fe1\u606f\u3002  \r\n  -Dh|--debug=help                 \u663e\u793a\u6709\u5173\u51fa\u9519\u8c03\u8bd5\u7684\u5e2e\u52a9\u4fe1\u606f\u3002  \r\n  -?, --help                       \u663e\u793a\u672c\u5e2e\u52a9\u4fe1\u606f\u3002      \r\n  --version                    \u663e\u793a\u7248\u672c\u4fe1\u606f\u3002\r\n\r\n\u53ef\u9a8c\u8bc1\u7684\u5c5e\u6027\uff1apkgname, archname, trigname, version.\r\n\r\n\u8c03\u7528 dpkg \u5e76\u5e26\u53c2\u6570 -b, --build, -c, --contents, -e, --control, -I, --info,\r\n  -f, --field, -x, --extract, -X, --vextract, --ctrl-tarfile, --fsys-tarfile\r\n\u662f\u9488\u5bf9\u5f52\u6863\u6587\u4ef6\u7684\u3002 (\u8f93\u5165 dpkg-deb --help \u83b7\u53d6\u5e2e\u52a9)\r\n\r\n\u9009\u9879\uff1a  \r\n  --admindir=<\u76ee\u5f55>          \u4f7f\u7528\u6307\u5b9a <\u76ee\u5f55> \u800c\u975e /var/lib/dpkg\u3002  \r\n  --root=<\u76ee\u5f55>              \u5b89\u88c5\u5230\u53e6\u4e00\u4e2a\u6839\u76ee\u5f55\u4e0b\u3002  \r\n  --instdir=<\u76ee\u5f55>           \u6539\u53d8\u5b89\u88c5\u76ee\u5f55\u7684\u540c\u65f6\u4fdd\u6301\u7ba1\u7406\u76ee\u5f55\u4e0d\u53d8\u3002  \r\n  --pre-invoke=<\u547d\u4ee4>        \u8bbe\u7f6e\u8c03\u7528\u524d\u94a9\u5b50\u3002  \r\n  --post-invoke=<\u547d\u4ee4>       \u8bbe\u7f6e\u8c03\u7528\u540e\u94a9\u5b50\u3002  \r\n  --path-exclude=<\u8868\u8fbe\u5f0f>    \u4e0d\u8981\u5b89\u88c5\u5339\u914dShell\u8868\u8fbe\u5f0f\u7684\u8def\u5f84\u3002  \r\n  --path-include=<\u8868\u8fbe\u5f0f>    \u5728\u6392\u9664\u6a21\u5f0f\u540e\u518d\u5305\u542b\u4e00\u4e2a\u6a21\u5f0f\u3002  \r\n  -O|--selected-only         \u8df3\u8fc7\u6ca1\u6709\u88ab\u9009\u4e2d\u5b89\u88c5\u6216\u5347\u7ea7\u7684\u8f6f\u4ef6\u5305\u3002  \r\n  -E|--skip-same-version     \u8df3\u8fc7\u7248\u672c\u4e0e\u5df2\u5b89\u88c5\u8f6f\u4ef6\u7248\u672c\u76f8\u540c\u7684\u8f6f\u4ef6\u5305\u3002  \r\n  -G|--refuse-downgrade      \u8df3\u8fc7\u7248\u672c\u65e9\u4e8e\u5df2\u5b89\u88c5\u8f6f\u4ef6\u7248\u672c\u7684\u7684\u8f6f\u4ef6\u5305\u3002  \r\n  -B|--auto-deconfigure      \u5c31\u7b97\u4f1a\u635f\u574f\u5176\u4ed6\u8f6f\u4ef6\u5305\uff0c\u4e5f\u8981\u5b89\u88c5\u3002  \r\n  --[no-]triggers            \u8df3\u8fc7\u6216\u5f3a\u5236\u968f\u4e4b\u53d1\u751f\u7684\u89e6\u53d1\u5668\u5904\u7406\u3002  \r\n  --verify-format=<\u683c\u5f0f>     \u68c0\u67e5\u8f93\u51fa\u683c\u5f0f\uff08\u652f\u6301\u7684\u503c\uff1a'rpm'\uff09  \r\n  --no-pager                 \u7981\u7528\u4efb\u4f55\u5206\u9875\u5668\u3002  \r\n  --no-debsig                \u4e0d\u53bb\u5c1d\u8bd5\u9a8c\u8bc1\u8f6f\u4ef6\u5305\u7684\u7b7e\u540d\u3002  \r\n  --no-act|--dry-run|--simulate\r\n                             \u4ec5\u62a5\u544a\u8981\u6267\u884c\u7684\u64cd\u4f5c - \u4f46\u662f\u4e0d\u6267\u884c\u3002  \r\n  -D|--debug=<\u516b\u8fdb\u5236\u6570>      \u5f00\u542f\u8c03\u8bd5(\u53c2\u89c1 -Dhelp \u6216\u8005 --debug=help)\u3002  \r\n  --status-fd <n>            \u53d1\u9001\u72b6\u6001\u66f4\u65b0\u5230\u6587\u4ef6\u63cf\u8ff0\u7b26<n>\u3002  \r\n  --status-logger=<\u547d\u4ee4>     \u53d1\u9001\u72b6\u6001\u66f4\u65b0\u5230 <\u547d\u4ee4> \u7684\u6807\u51c6\u8f93\u5165\u3002  \r\n  --log=<\u6587\u4ef6\u540d>             \u5c06\u72b6\u6001\u66f4\u65b0\u548c\u64cd\u4f5c\u4fe1\u606f\u5230 <\u6587\u4ef6\u540d>\u3002  \r\n  --ignore-depends=<\u8f6f\u4ef6\u5305>[,...]\r\n                             \u5ffd\u7565\u5173\u4e8e <\u8f6f\u4ef6\u5305> \u7684\u6240\u6709\u4f9d\u8d56\u5173\u7cfb\u3002  \r\n  --force-<\u9879\u76ee>...          \u5ffd\u89c6\u9047\u5230\u7684\u95ee\u9898(\u53c2\u89c1 --force-help)\u3002  \r\n  --no-force-<\u9879\u76ee>[,...]    \u9047\u5230\u6307\u5b9a\u95ee\u9898\u65f6\u505c\u6b62\u3002  \r\n  --refuse-<\u9879\u76ee>[,...]      \u540c\u4e0a\u3002  \r\n  --abort-after <n>          \u7d2f\u8ba1\u9047\u5230 <n> \u4e2a\u9519\u8bef\u540e\u4e2d\u6b62\u3002  \r\n  --robot                    \u5bf9\u67d0\u4e9b\u547d\u4ee4\u4f7f\u7528\u673a\u5668\u53ef\u8bfb\u7684\u8f93\u51fa\u3002\r\n\r\n\u53ef\u4f9b--compare-versions \u4f7f\u7528\u7684\u6bd4\u8f83\u8fd0\u7b97\u7b26\u6709\uff1a\r\n lt le eq ne ge gt        (\u5982\u679c\u7248\u672c\u53f7\u4e3a\u7a7a\uff0c\u90a3\u4e48\u5c31\u8ba4\u4e3a\u5b83\u5148\u4e8e\u4efb\u610f\u7248\u672c\u53f7)\uff1b\r\n lt-nl le-nl ge-nl gt-nl  (\u5982\u679c\u7248\u672c\u53f7\u4e3a\u7a7a\uff0c\u90a3\u4e48\u5c31\u8ba4\u4e3a\u5b83\u540e\u4e8e\u4efb\u610f\u7248\u672c\u53f7)\uff1b\r\n  < << <= = >= >> >        (\u4ec5\u4ec5\u662f\u4e3a\u4e86\u4e0e\u4e3b\u63a7\u6587\u4ef6\u7684\u8bed\u6cd5\u517c\u5bb9)\u3002\r\n\r\n'apt' \u548c 'aptitude' \u63d0\u4f9b\u4e86\u66f4\u4e3a\u4fbf\u5229\u7684\u8f6f\u4ef6\u5305\u7ba1\u7406\u3002\r\n\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var d=r(6540);const s={},c=d.createContext(s);function l(e){const n=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);