"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7679],{5843:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>h,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>s,toc:()=>x});const s=JSON.parse('{"id":"\u5305\u7ba1\u7406\u5668/Arch/pacman","title":"pacman","description":"pacman \u662f Arch Linux \u548c Manjaro \u7b49\u57fa\u4e8e Arch \u7684\u53d1\u884c\u7248\u4f7f\u7528\u7684\u5305\u7ba1\u7406\u5668\u3002\u901a\u8fc7 pacman\uff0c\u4f60\u53ef\u4ee5\u8f7b\u677e\u5b89\u88c5\u3001\u66f4\u65b0\u3001\u5378\u8f7d\u548c\u7ba1\u7406\u8f6f\u4ef6\u5305\u3002","source":"@site/docs/10-\u5305\u7ba1\u7406\u5668/Arch/pacman.md","sourceDirName":"10-\u5305\u7ba1\u7406\u5668/Arch","slug":"/85de21d2","permalink":"/85de21d2","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/10-\u5305\u7ba1\u7406\u5668/Arch/pacman.md","tags":[],"version":"current","lastUpdatedAt":1742246204000,"frontMatter":{"slug":"/85de21d2"},"sidebar":"\u5305\u7ba1\u7406\u5668","previous":{"title":"Arch","permalink":"/category/arch"},"next":{"title":"Debian","permalink":"/category/debian"}}');var c=d(4848),l=d(8453);const r={slug:"/85de21d2"},i=void 0,h={},x=[{value:"1. \u7b80\u4ecb",id:"1-\u7b80\u4ecb",level:2},{value:"2. \u5e38\u89c1\u64cd\u4f5c\u6982\u89c8 \ud83d\udccb",id:"2-\u5e38\u89c1\u64cd\u4f5c\u6982\u89c8-",level:2},{value:"3. \u547d\u4ee4\u793a\u4f8b \u26a1",id:"3-\u547d\u4ee4\u793a\u4f8b-",level:2},{value:"3.1 \u5b89\u88c5\u8f6f\u4ef6\u5305",id:"31-\u5b89\u88c5\u8f6f\u4ef6\u5305",level:3},{value:"3.2 \u5347\u7ea7\u6240\u6709\u8f6f\u4ef6\u5305",id:"32-\u5347\u7ea7\u6240\u6709\u8f6f\u4ef6\u5305",level:3},{value:"3.3 \u5220\u9664\u8f6f\u4ef6\u5305",id:"33-\u5220\u9664\u8f6f\u4ef6\u5305",level:3},{value:"3.4 \u5220\u9664\u8f6f\u4ef6\u5305\u53ca\u5176\u4f9d\u8d56",id:"34-\u5220\u9664\u8f6f\u4ef6\u5305\u53ca\u5176\u4f9d\u8d56",level:3},{value:"3.5 \u67e5\u770b\u5df2\u5b89\u88c5\u8f6f\u4ef6\u5305",id:"35-\u67e5\u770b\u5df2\u5b89\u88c5\u8f6f\u4ef6\u5305",level:3},{value:"3.6 \u641c\u7d22\u8f6f\u4ef6\u5305",id:"36-\u641c\u7d22\u8f6f\u4ef6\u5305",level:3},{value:"4. \u5e38\u7528\u9009\u9879 \ud83d\udcdd",id:"4-\u5e38\u7528\u9009\u9879-",level:2},{value:"4.1 <code>-S</code>\uff1a\u5b89\u88c5\u6216\u5347\u7ea7\u8f6f\u4ef6\u5305",id:"41--s\u5b89\u88c5\u6216\u5347\u7ea7\u8f6f\u4ef6\u5305",level:3},{value:"4.2 <code>-Sy</code>\uff1a\u66f4\u65b0\u5305\u6570\u636e\u5e93",id:"42--sy\u66f4\u65b0\u5305\u6570\u636e\u5e93",level:3},{value:"4.3 <code>-Syu</code>\uff1a\u540c\u6b65\u6570\u636e\u5e93\u5e76\u5347\u7ea7\u6240\u6709\u8f6f\u4ef6\u5305",id:"43--syu\u540c\u6b65\u6570\u636e\u5e93\u5e76\u5347\u7ea7\u6240\u6709\u8f6f\u4ef6\u5305",level:3},{value:"4.4 <code>-R</code>\uff1a\u5220\u9664\u8f6f\u4ef6\u5305",id:"44--r\u5220\u9664\u8f6f\u4ef6\u5305",level:3},{value:"4.5 <code>-Rns</code>\uff1a\u5220\u9664\u8f6f\u4ef6\u5305\u53ca\u5176\u4f9d\u8d56",id:"45--rns\u5220\u9664\u8f6f\u4ef6\u5305\u53ca\u5176\u4f9d\u8d56",level:3},{value:"4.6 <code>-Qi</code>\uff1a\u67e5\u770b\u5df2\u5b89\u88c5\u8f6f\u4ef6\u5305\u7684\u8be6\u7ec6\u4fe1\u606f",id:"46--qi\u67e5\u770b\u5df2\u5b89\u88c5\u8f6f\u4ef6\u5305\u7684\u8be6\u7ec6\u4fe1\u606f",level:3},{value:"4.7 <code>-Qdt</code>\uff1a\u67e5\u770b\u5b64\u7acb\u8f6f\u4ef6\u5305",id:"47--qdt\u67e5\u770b\u5b64\u7acb\u8f6f\u4ef6\u5305",level:3},{value:"4.8 <code>-Sl</code>\uff1a\u67e5\u770b\u4ed3\u5e93\u4fe1\u606f",id:"48--sl\u67e5\u770b\u4ed3\u5e93\u4fe1\u606f",level:3},{value:"5. \u5c0f\u8d34\u58eb \ud83d\udca1",id:"5-\u5c0f\u8d34\u58eb-",level:2},{value:"6. \u603b\u7ed3 \ud83c\udfaf",id:"6-\u603b\u7ed3-",level:2}];function j(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"pacman"})," \u662f Arch Linux \u548c Manjaro \u7b49\u57fa\u4e8e Arch \u7684\u53d1\u884c\u7248\u4f7f\u7528\u7684\u5305\u7ba1\u7406\u5668\u3002\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"pacman"}),"\uff0c\u4f60\u53ef\u4ee5\u8f7b\u677e\u5b89\u88c5\u3001\u66f4\u65b0\u3001\u5378\u8f7d\u548c\u7ba1\u7406\u8f6f\u4ef6\u5305\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"1-\u7b80\u4ecb",children:"1. \u7b80\u4ecb"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"pacman"}),"\uff08",(0,c.jsx)(n.strong,{children:"P"}),"ackage ",(0,c.jsx)(n.strong,{children:"A"}),"rchiver ",(0,c.jsx)(n.strong,{children:"Man"}),"ager\uff09\u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u5e7f\u6cdb\u7528\u4e8e Arch \u548c Manjaro \u7b49 Linux \u7cfb\u7edf\u4e2d\u3002\u5b83\u901a\u8fc7\u7b80\u5355\u7684\u547d\u4ee4\u5b8c\u6210\u8f6f\u4ef6\u5305\u7684\u5b89\u88c5\u3001\u66f4\u65b0\u3001\u5220\u9664\u7b49\u4efb\u52a1\uff0c\u652f\u6301\u672c\u5730\u548c\u8fdc\u7a0b\u4ed3\u5e93\u7684\u8f6f\u4ef6\u7ba1\u7406\u3002\u8ba9\u6211\u4eec\u6765\u4e00\u8d77\u63a2\u7d22\u4e00\u4e0b\u5427\uff01\ud83d\udd0d"]}),"\n",(0,c.jsx)(n.h2,{id:"2-\u5e38\u89c1\u64cd\u4f5c\u6982\u89c8-",children:"2. \u5e38\u89c1\u64cd\u4f5c\u6982\u89c8 \ud83d\udccb"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u64cd\u4f5c"}),(0,c.jsx)(n.th,{children:"\u547d\u4ee4\u683c\u5f0f"}),(0,c.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u5b89\u88c5\u8f6f\u4ef6\u5305"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"pacman -S <\u8f6f\u4ef6\u5305\u540d>"})}),(0,c.jsx)(n.td,{children:"\u5b89\u88c5\u6307\u5b9a\u7684\u8f6f\u4ef6\u5305\u3002\ud83c\udf1f"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u5347\u7ea7\u6240\u6709\u8f6f\u4ef6\u5305"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"pacman -Syu"})}),(0,c.jsx)(n.td,{children:"\u540c\u6b65\u5305\u6570\u636e\u5e93\u5e76\u5347\u7ea7\u7cfb\u7edf\u4e2d\u6240\u6709\u5df2\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305\u3002\ud83d\udd04"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u5220\u9664\u8f6f\u4ef6\u5305"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"pacman -R <\u8f6f\u4ef6\u5305\u540d>"})}),(0,c.jsx)(n.td,{children:"\u5378\u8f7d\u6307\u5b9a\u7684\u8f6f\u4ef6\u5305\u3002\ud83d\uddd1\ufe0f"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u5220\u9664\u8f6f\u4ef6\u5305\u53ca\u5176\u4f9d\u8d56"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"pacman -Rns <\u8f6f\u4ef6\u5305\u540d>"})}),(0,c.jsx)(n.td,{children:"\u5378\u8f7d\u8f6f\u4ef6\u5305\u5e76\u5220\u9664\u4e0d\u518d\u9700\u8981\u7684\u4f9d\u8d56\u53ca\u914d\u7f6e\u6587\u4ef6\u3002\ud83d\udeae"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u67e5\u770b\u5df2\u5b89\u88c5\u8f6f\u4ef6\u5305"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"pacman -Q"})}),(0,c.jsx)(n.td,{children:"\u5217\u51fa\u6240\u6709\u5df2\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305\u53ca\u5176\u7248\u672c\u3002\ud83d\udcdc"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u641c\u7d22\u8f6f\u4ef6\u5305"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"pacman -Ss <\u641c\u7d22\u5173\u952e\u5b57>"})}),(0,c.jsx)(n.td,{children:"\u6839\u636e\u5173\u952e\u5b57\u641c\u7d22\u53ef\u7528\u7684\u8f6f\u4ef6\u5305\u3002\ud83d\udd0d"})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"3-\u547d\u4ee4\u793a\u4f8b-",children:"3. \u547d\u4ee4\u793a\u4f8b \u26a1"}),"\n",(0,c.jsx)(n.h3,{id:"31-\u5b89\u88c5\u8f6f\u4ef6\u5305",children:"3.1 \u5b89\u88c5\u8f6f\u4ef6\u5305"}),"\n",(0,c.jsx)(n.p,{children:"\u5b89\u88c5\u4e00\u4e2a\u6307\u5b9a\u7684\u8f6f\u4ef6\u5305\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ sudo pacman -S vim\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6b64\u547d\u4ee4\u5c06\u5b89\u88c5 ",(0,c.jsx)(n.code,{children:"vim"})," \u7f16\u8f91\u5668\u3002",(0,c.jsx)(n.code,{children:"-S"})," \u662f ",(0,c.jsx)(n.strong,{children:"Sync"}),"\uff08\u540c\u6b65\uff09\u7684\u7f29\u5199\uff0c\u8868\u793a\u5c06\u4ece\u8fdc\u7a0b\u4ed3\u5e93\u540c\u6b65\u5e76\u5b89\u88c5\u8f6f\u4ef6\u5305\u3002\u5b89\u88c5\u5b8c\u6bd5\u540e\uff0c\u4f60\u5c31\u80fd\u4eab\u53d7\u5f3a\u5927\u7684\u6587\u672c\u7f16\u8f91\u529f\u80fd\u4e86\uff01\ud83c\udf89"]}),"\n",(0,c.jsx)(n.h3,{id:"32-\u5347\u7ea7\u6240\u6709\u8f6f\u4ef6\u5305",children:"3.2 \u5347\u7ea7\u6240\u6709\u8f6f\u4ef6\u5305"}),"\n",(0,c.jsx)(n.p,{children:"\u8981\u5347\u7ea7\u7cfb\u7edf\u4e2d\u6240\u6709\u5df2\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305\uff0c\u4f7f\u7528\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ sudo pacman -Syu\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6b64\u547d\u4ee4\u4f1a\u540c\u6b65\u5305\u6570\u636e\u5e93\u5e76\u5347\u7ea7\u6240\u6709\u5df2\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305\u3002",(0,c.jsx)(n.code,{children:"-S"})," \u8868\u793a\u540c\u6b65\uff0c",(0,c.jsx)(n.code,{children:"-y"})," \u8868\u793a\u5237\u65b0\u5305\u6570\u636e\u5e93\uff0c",(0,c.jsx)(n.code,{children:"-u"})," \u8868\u793a\u5347\u7ea7\u5df2\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305\u3002\u4fdd\u6301\u7cfb\u7edf\u6700\u65b0\uff0c\u5b89\u5168\u53c8\u7a33\u5b9a\uff01\ud83d\ude80"]}),"\n",(0,c.jsx)(n.h3,{id:"33-\u5220\u9664\u8f6f\u4ef6\u5305",children:"3.3 \u5220\u9664\u8f6f\u4ef6\u5305"}),"\n",(0,c.jsx)(n.p,{children:"\u8981\u5378\u8f7d\u4e00\u4e2a\u5df2\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305\uff0c\u4f7f\u7528\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ sudo pacman -R vim\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u5c06\u5220\u9664 ",(0,c.jsx)(n.code,{children:"vim"})," \u8f6f\u4ef6\u5305\u3002",(0,c.jsx)(n.code,{children:"-R"})," \u662f ",(0,c.jsx)(n.strong,{children:"Remove"}),"\uff08\u5220\u9664\uff09\u7684\u7f29\u5199\uff0c\u8868\u793a\u5220\u9664\u6307\u5b9a\u7684\u8f6f\u4ef6\u5305\u3002\u5378\u8f7d\u540e\uff0c\u4f60\u4f1a\u91ca\u653e\u4e00\u4e9b\u7a7a\u95f4\uff01\ud83d\udcbe"]}),"\n",(0,c.jsx)(n.h3,{id:"34-\u5220\u9664\u8f6f\u4ef6\u5305\u53ca\u5176\u4f9d\u8d56",children:"3.4 \u5220\u9664\u8f6f\u4ef6\u5305\u53ca\u5176\u4f9d\u8d56"}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u4f60\u5e0c\u671b\u5220\u9664\u8f6f\u4ef6\u5305\u53ca\u5176\u4e0d\u518d\u9700\u8981\u7684\u4f9d\u8d56\uff0c\u4f7f\u7528\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ sudo pacman -Rns vim\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"-n"})," \u8868\u793a\u540c\u65f6\u5220\u9664\u8f6f\u4ef6\u5305\u7684\u914d\u7f6e\u6587\u4ef6\uff0c",(0,c.jsx)(n.code,{children:"-s"})," \u8868\u793a\u5220\u9664\u4e0d\u518d\u9700\u8981\u7684\u4f9d\u8d56\u9879\u3002",(0,c.jsx)(n.code,{children:"-Rns"})," \u662f ",(0,c.jsx)(n.strong,{children:"Remove"})," + ",(0,c.jsx)(n.strong,{children:"No Dependencies"})," + ",(0,c.jsx)(n.strong,{children:"Sync"})," \u7684\u7f29\u5199\u3002\u8ba9\u4f60\u7684\u7cfb\u7edf\u66f4\u52a0\u5e72\u51c0\u6574\u6d01\uff01\u2728"]}),"\n",(0,c.jsx)(n.h3,{id:"35-\u67e5\u770b\u5df2\u5b89\u88c5\u8f6f\u4ef6\u5305",children:"3.5 \u67e5\u770b\u5df2\u5b89\u88c5\u8f6f\u4ef6\u5305"}),"\n",(0,c.jsx)(n.p,{children:"\u5217\u51fa\u6240\u6709\u5df2\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305\u53ca\u5176\u7248\u672c\uff0c\u4f7f\u7528\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ pacman -Q\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"-Q"})," \u662f ",(0,c.jsx)(n.strong,{children:"Query"}),"\uff08\u67e5\u8be2\uff09\u7684\u7f29\u5199\uff0c\u8868\u793a\u67e5\u8be2\u7cfb\u7edf\u4e2d\u5df2\u5b89\u88c5\u7684\u6240\u6709\u8f6f\u4ef6\u5305\u3002\u4f60\u53ef\u4ee5\u5feb\u901f\u67e5\u770b\u7cfb\u7edf\u4e2d\u5df2\u5b89\u88c5\u7684\u6240\u6709\u5de5\u5177\u548c\u8f6f\u4ef6\u3002\ud83d\udd27"]}),"\n",(0,c.jsx)(n.h3,{id:"36-\u641c\u7d22\u8f6f\u4ef6\u5305",children:"3.6 \u641c\u7d22\u8f6f\u4ef6\u5305"}),"\n",(0,c.jsxs)(n.p,{children:["\u641c\u7d22\u67d0\u4e2a\u8f6f\u4ef6\u5305\uff0c\u4f8b\u5982\u67e5\u627e\u5305\u542b ",(0,c.jsx)(n.code,{children:"python"})," \u7684\u8f6f\u4ef6\u5305\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ pacman -Ss python\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"-Ss"})," \u662f ",(0,c.jsx)(n.strong,{children:"Sync Search"}),"\uff08\u540c\u6b65\u641c\u7d22\uff09\u7684\u7f29\u5199\uff0c\u7528\u4e8e\u5728\u8fdc\u7a0b\u4ed3\u5e93\u4e2d\u67e5\u627e\u7b26\u5408\u6761\u4ef6\u7684\u8f6f\u4ef6\u5305\u3002\u901a\u8fc7\u641c\u7d22\uff0c\u4f60\u80fd\u5feb\u901f\u627e\u5230\u81ea\u5df1\u9700\u8981\u7684\u5e94\u7528\u3002\ud83d\udd0d"]}),"\n",(0,c.jsx)(n.h2,{id:"4-\u5e38\u7528\u9009\u9879-",children:"4. \u5e38\u7528\u9009\u9879 \ud83d\udcdd"}),"\n",(0,c.jsxs)(n.h3,{id:"41--s\u5b89\u88c5\u6216\u5347\u7ea7\u8f6f\u4ef6\u5305",children:["4.1 ",(0,c.jsx)(n.code,{children:"-S"}),"\uff1a\u5b89\u88c5\u6216\u5347\u7ea7\u8f6f\u4ef6\u5305"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"S"}),"\uff1aSync\uff08\u540c\u6b65\uff09\u662f\u7528\u4e8e\u5b89\u88c5\u548c\u5347\u7ea7\u8f6f\u4ef6\u5305\u7684\u4e3b\u8981\u9009\u9879\u3002\u5b83\u4f7f ",(0,c.jsx)(n.code,{children:"pacman"})," \u80fd\u591f\u4ece\u8fdc\u7a0b\u4ed3\u5e93\u540c\u6b65\u8f6f\u4ef6\u5305\u6570\u636e\u5e93\u5e76\u8fdb\u884c\u64cd\u4f5c\u3002\u8ba9\u5b89\u88c5\u53d8\u5f97\u8f7b\u677e\u53c8\u5feb\u901f\uff01\u26a1"]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"42--sy\u66f4\u65b0\u5305\u6570\u636e\u5e93",children:["4.2 ",(0,c.jsx)(n.code,{children:"-Sy"}),"\uff1a\u66f4\u65b0\u5305\u6570\u636e\u5e93"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Sy"}),"\uff1aSync + Refresh\uff08\u540c\u6b65 + \u5237\u65b0\uff09\u9009\u9879\u7528\u4e8e\u540c\u6b65\u672c\u5730\u5305\u6570\u636e\u5e93\u548c\u8fdc\u7a0b\u4ed3\u5e93\u3002\u786e\u4fdd\u4f60\u5b89\u88c5\u7684\u662f\u6700\u65b0\u7248\u672c\u7684\u8f6f\u4ef6\u5305\u3002\u4fdd\u6301\u6700\u65b0\uff0c\u5b89\u88c5\u66f4\u5feb\uff01\u23e9"]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"43--syu\u540c\u6b65\u6570\u636e\u5e93\u5e76\u5347\u7ea7\u6240\u6709\u8f6f\u4ef6\u5305",children:["4.3 ",(0,c.jsx)(n.code,{children:"-Syu"}),"\uff1a\u540c\u6b65\u6570\u636e\u5e93\u5e76\u5347\u7ea7\u6240\u6709\u8f6f\u4ef6\u5305"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Syu"}),"\uff1aSync + Refresh + Upgrade\uff08\u540c\u6b65 + \u5237\u65b0 + \u5347\u7ea7\uff09\u7528\u4e8e\u540c\u6b65\u5305\u6570\u636e\u5e93\u5e76\u81ea\u52a8\u5347\u7ea7\u6240\u6709\u8f6f\u4ef6\u5305\u3002\u5b9a\u671f\u5347\u7ea7\uff0c\u8ba9\u4f60\u7684\u7cfb\u7edf\u4fdd\u6301\u6700\u4f73\u72b6\u6001\uff01\ud83d\udd04"]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"44--r\u5220\u9664\u8f6f\u4ef6\u5305",children:["4.4 ",(0,c.jsx)(n.code,{children:"-R"}),"\uff1a\u5220\u9664\u8f6f\u4ef6\u5305"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"R"}),"\uff1aRemove\uff08\u5220\u9664\uff09\u7528\u4e8e\u5378\u8f7d\u6307\u5b9a\u7684\u8f6f\u4ef6\u5305\u3002\u5982\u679c\u4f60\u7684\u786c\u76d8\u7a7a\u95f4\u6ee1\u4e86\uff0c\u8bb0\u5f97\u5b9a\u671f\u6e05\u7406\u4e0d\u518d\u9700\u8981\u7684\u8f6f\u4ef6\uff01\ud83d\uddd1\ufe0f"]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"45--rns\u5220\u9664\u8f6f\u4ef6\u5305\u53ca\u5176\u4f9d\u8d56",children:["4.5 ",(0,c.jsx)(n.code,{children:"-Rns"}),"\uff1a\u5220\u9664\u8f6f\u4ef6\u5305\u53ca\u5176\u4f9d\u8d56"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Rns"}),"\uff1aRemove + No Dependencies + Sync\uff08\u5220\u9664 + \u65e0\u4f9d\u8d56 + \u540c\u6b65\uff09\u7528\u4e8e\u5b8c\u5168\u5220\u9664\u8f6f\u4ef6\u5305\u53ca\u5176\u4e0d\u518d\u9700\u8981\u7684\u4f9d\u8d56\u548c\u914d\u7f6e\u6587\u4ef6\u3002\u8ba9\u7cfb\u7edf\u66f4\u52a0\u7cbe\u7b80\uff0c\u8282\u7701\u66f4\u591a\u7a7a\u95f4\uff01\ud83d\udca1"]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"46--qi\u67e5\u770b\u5df2\u5b89\u88c5\u8f6f\u4ef6\u5305\u7684\u8be6\u7ec6\u4fe1\u606f",children:["4.6 ",(0,c.jsx)(n.code,{children:"-Qi"}),"\uff1a\u67e5\u770b\u5df2\u5b89\u88c5\u8f6f\u4ef6\u5305\u7684\u8be6\u7ec6\u4fe1\u606f"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Qi"}),"\uff1aQuery Info\uff08\u67e5\u8be2\u4fe1\u606f\uff09\u7528\u4e8e\u67e5\u770b\u5df2\u5b89\u88c5\u8f6f\u4ef6\u5305\u7684\u8be6\u7ec6\u4fe1\u606f\u3002\u4f60\u53ef\u4ee5\u5feb\u901f\u4e86\u89e3\u8f6f\u4ef6\u5305\u7684\u7248\u672c\u3001\u4f9d\u8d56\u7b49\u4fe1\u606f\u3002\ud83d\udd0d"]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"47--qdt\u67e5\u770b\u5b64\u7acb\u8f6f\u4ef6\u5305",children:["4.7 ",(0,c.jsx)(n.code,{children:"-Qdt"}),"\uff1a\u67e5\u770b\u5b64\u7acb\u8f6f\u4ef6\u5305"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Qdt"}),"\uff1aQuery Orphans\uff08\u67e5\u8be2\u5b64\u7acb\u5305\uff09\u7528\u4e8e\u5217\u51fa\u7cfb\u7edf\u4e2d\u4e0d\u518d\u9700\u8981\u7684\u5b64\u7acb\u8f6f\u4ef6\u5305\u3002\u5e2e\u4f60\u6e05\u7406\u90a3\u4e9b\u5df2\u7ecf\u4e0d\u518d\u9700\u8981\u7684\u5305\uff0c\u4fdd\u6301\u7cfb\u7edf\u6574\u6d01\uff01\ud83e\uddf9"]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"48--sl\u67e5\u770b\u4ed3\u5e93\u4fe1\u606f",children:["4.8 ",(0,c.jsx)(n.code,{children:"-Sl"}),"\uff1a\u67e5\u770b\u4ed3\u5e93\u4fe1\u606f"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Sl"}),"\uff1aSync List\uff08\u540c\u6b65\u5217\u8868\uff09\u7528\u4e8e\u5217\u51fa\u5df2\u542f\u7528\u7684\u6240\u6709\u4ed3\u5e93\u53ca\u5176\u5305\u542b\u7684\u8f6f\u4ef6\u5305\u3002\u4f60\u53ef\u4ee5\u67e5\u770b\u54ea\u4e9b\u8f6f\u4ef6\u5305\u6765\u81ea\u54ea\u4e9b\u4ed3\u5e93\uff0c\u7075\u6d3b\u7ba1\u7406\u6e90\uff01\ud83c\udf10"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"5-\u5c0f\u8d34\u58eb-",children:"5. \u5c0f\u8d34\u58eb \ud83d\udca1"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"-Syu"})," \u65f6\uff0c\u786e\u4fdd\u4f60\u7684\u7f51\u7edc\u8fde\u63a5\u7a33\u5b9a\uff0c\u56e0\u4e3a\u8be5\u547d\u4ee4\u4f1a\u8fdb\u884c\u8f6f\u4ef6\u5305\u540c\u6b65\u5e76\u5347\u7ea7\u6240\u6709\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305\u3002\u4fdd\u6301\u7cfb\u7edf\u6700\u65b0\uff0c\u4eab\u53d7\u6700\u4f73\u6027\u80fd\uff01\ud83d\ude80"]}),"\n",(0,c.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"-Rns"})," \u65f6\u8981\u5c0f\u5fc3\uff0c\u786e\u4fdd\u4e0d\u4f1a\u8bef\u5220\u91cd\u8981\u7684\u4f9d\u8d56\u5305\u3002\u5c0f\u5fc3\u64cd\u4f5c\uff0c\u786e\u4fdd\u7cfb\u7edf\u5b89\u5168\uff01\ud83d\udd12"]}),"\n",(0,c.jsxs)(n.li,{children:["\u5982\u679c\u4f60\u62c5\u5fc3\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u7684\u6f5c\u5728\u95ee\u9898\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"-Sy"})," \u5148\u66f4\u65b0\u6570\u636e\u5e93\uff0c\u518d\u624b\u52a8\u67e5\u770b\u9700\u8981\u5347\u7ea7\u7684\u8f6f\u4ef6\u5305\uff0c\u6700\u540e\u518d\u6267\u884c ",(0,c.jsx)(n.code,{children:"-Syu"})," \u5347\u7ea7\u3002\u8fd9\u6837\u4f1a\u66f4\u6709\u628a\u63e1\uff01\u26a1"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"6-\u603b\u7ed3-",children:"6. \u603b\u7ed3 \ud83c\udfaf"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"pacman"})," \u662f Arch \u548c Manjaro \u7cfb\u7edf\u4e2d\u4e0d\u53ef\u6216\u7f3a\u7684\u5305\u7ba1\u7406\u5de5\u5177\u3002\u901a\u8fc7\u719f\u7ec3\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"pacman"}),"\uff0c\u4f60\u53ef\u4ee5\u8f7b\u677e\u7ba1\u7406\u548c\u7ef4\u62a4\u7cfb\u7edf\u4e2d\u7684\u8f6f\u4ef6\u5305\uff0c\u786e\u4fdd\u7cfb\u7edf\u59cb\u7ec8\u4fdd\u6301\u6700\u65b0\u72b6\u6001\u3002\u638c\u63e1\u5e38\u7528\u547d\u4ee4\u548c\u9009\u9879\uff0c\u5c06\u5927\u5927\u63d0\u9ad8\u4f60\u7684\u5de5\u4f5c\u6548\u7387\uff01\ud83d\udcaa"]}),"\n",(0,c.jsxs)(n.p,{children:["\u672c\u6587\u8be6\u7ec6\u4ecb\u7ecd\u4e86 ",(0,c.jsx)(n.code,{children:"pacman"})," \u5305\u7ba1\u7406\u5668\u7684\u5e38\u7528\u547d\u4ee4\u53ca\u5176\u9009\u9879\uff0c\u5e2e\u52a9\u4f60\u9ad8\u6548\u7ba1\u7406 Manjaro \u6216 Arch \u7cfb\u7edf\u4e2d\u7684\u8f6f\u4ef6\u5305\u3002\u52a0\u6cb9\u54e6\uff0c\u795d\u4f60\u5728 Linux \u4e16\u754c\u4e2d\u73a9\u5f97\u5f00\u5fc3\uff01\ud83c\udf89 \u522b\u5fd8\u4e86\u6536\u85cf",(0,c.jsx)(n.strong,{children:"\u5728\u7ebf\u77e5\u8bc6\u5e93"}),"\uff08 ",(0,c.jsx)(n.a,{href:"http://www.zxzsk.com",children:"www.zxzsk.com"})," \uff09\u54e6\uff01\ud83d\ude0a"]})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(j,{...e})}):j(e)}},8453:(e,n,d)=>{d.d(n,{R:()=>r,x:()=>i});var s=d(6540);const c={},l=s.createContext(c);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);