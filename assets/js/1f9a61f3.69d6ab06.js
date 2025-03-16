"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9458],{3613:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>j,frontMatter:()=>i,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"command/\u6587\u672c\u5904\u7406/sed","title":"sed","description":"\u2b50\u2b50\u2b50\u6587\u672c\u4e09\u5251\u5ba2\u4e4b\u4e00\uff0c\u6d41\u7f16\u8f91\u5de5\u5177\u3002","source":"@site/docs/02-command/25-\u6587\u672c\u5904\u7406/sed.md","sourceDirName":"02-command/25-\u6587\u672c\u5904\u7406","slug":"/0d603a79","permalink":"/0d603a79","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/02-command/25-\u6587\u672c\u5904\u7406/sed.md","tags":[],"version":"current","frontMatter":{"slug":"/0d603a79"},"sidebar":"tutorialSidebar","previous":{"title":"more","permalink":"/d7184b3f"},"next":{"title":"sort","permalink":"/116d1b5b"}}');var d=s(4848),c=s(8453);const i={slug:"/0d603a79"},r=void 0,h={},o=[{value:"1. \u547d\u4ee4\u7b80\u4ecb",id:"1-\u547d\u4ee4\u7b80\u4ecb",level:2},{value:"2. \u547d\u4ee4\u8bed\u6cd5",id:"2-\u547d\u4ee4\u8bed\u6cd5",level:2},{value:"3. \u5e38\u89c1\u9009\u9879",id:"3-\u5e38\u89c1\u9009\u9879",level:2},{value:"4. \u57fa\u672c\u7528\u6cd5",id:"4-\u57fa\u672c\u7528\u6cd5",level:2},{value:"4.1 <strong>\u66ff\u6362\u64cd\u4f5c</strong>",id:"41-\u66ff\u6362\u64cd\u4f5c",level:3},{value:"4.2 <strong>\u66ff\u6362\u6240\u6709\u5339\u914d\u9879</strong>",id:"42-\u66ff\u6362\u6240\u6709\u5339\u914d\u9879",level:3},{value:"4.3 <strong>\u76f4\u63a5\u4fee\u6539\u6587\u4ef6</strong>",id:"43-\u76f4\u63a5\u4fee\u6539\u6587\u4ef6",level:3},{value:"4.4 <strong>\u663e\u793a\u6307\u5b9a\u884c\u7684\u5185\u5bb9</strong>",id:"44-\u663e\u793a\u6307\u5b9a\u884c\u7684\u5185\u5bb9",level:3},{value:"4.5 <strong>\u5220\u9664\u884c</strong>",id:"45-\u5220\u9664\u884c",level:3},{value:"4.6 <strong>\u66ff\u6362\u6587\u672c\u5e76\u4fdd\u7559\u539f\u884c</strong>",id:"46-\u66ff\u6362\u6587\u672c\u5e76\u4fdd\u7559\u539f\u884c",level:3},{value:"4.7 <strong>\u6309\u884c\u53f7\u64cd\u4f5c</strong>",id:"47-\u6309\u884c\u53f7\u64cd\u4f5c",level:3},{value:"4.8 <strong>\u63d2\u5165\u548c\u8ffd\u52a0\u6587\u672c</strong>",id:"48-\u63d2\u5165\u548c\u8ffd\u52a0\u6587\u672c",level:3},{value:"4.9 <strong>\u591a\u6761\u547d\u4ee4\u6267\u884c</strong>",id:"49-\u591a\u6761\u547d\u4ee4\u6267\u884c",level:3},{value:"5. \u547d\u4ee4\u793a\u4f8b",id:"5-\u547d\u4ee4\u793a\u4f8b",level:2},{value:"5.1 <strong>\u66ff\u6362\u5e76\u663e\u793a\u4fee\u6539\u540e\u7684\u5185\u5bb9</strong>",id:"51-\u66ff\u6362\u5e76\u663e\u793a\u4fee\u6539\u540e\u7684\u5185\u5bb9",level:3},{value:"5.2 <strong>\u5220\u9664\u5305\u542b\u7279\u5b9a\u6587\u672c\u7684\u884c</strong>",id:"52-\u5220\u9664\u5305\u542b\u7279\u5b9a\u6587\u672c\u7684\u884c",level:3},{value:"5.3 <strong>\u4fee\u6539\u6587\u4ef6\u5e76\u4fdd\u5b58\u66f4\u6539</strong>",id:"53-\u4fee\u6539\u6587\u4ef6\u5e76\u4fdd\u5b58\u66f4\u6539",level:3},{value:"6. \u603b\u7ed3",id:"6-\u603b\u7ed3",level:2}];function x(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"\u2b50\u2b50\u2b50\u6587\u672c\u4e09\u5251\u5ba2\u4e4b\u4e00\uff0c\u6d41\u7f16\u8f91\u5de5\u5177\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"1-\u547d\u4ee4\u7b80\u4ecb",children:"1. \u547d\u4ee4\u7b80\u4ecb"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"sed"}),"\uff08Stream Editor\uff0c\u6d41\u7f16\u8f91\u5668\uff09\u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u6587\u672c\u5904\u7406\u5de5\u5177\uff0c\u5e7f\u6cdb\u7528\u4e8e\u5728\u547d\u4ee4\u884c\u4e2d\u8fdb\u884c\u6587\u672c\u66ff\u6362\u3001\u63d2\u5165\u3001\u5220\u9664\u548c\u4fee\u6539\u7b49\u64cd\u4f5c\u3002\u5b83\u53ef\u4ee5\u8bfb\u53d6\u8f93\u5165\u6d41\uff08\u5982\u6587\u4ef6\u6216\u6807\u51c6\u8f93\u5165\uff09\uff0c\u8fdb\u884c\u7f16\u8f91\u5e76\u5c06\u7ed3\u679c\u8f93\u51fa\u3002\ud83d\udca1 ",(0,d.jsx)(n.code,{children:"sed"})," \u662f\u975e\u5e38\u9ad8\u6548\u7684\u6587\u672c\u5904\u7406\u5de5\u5177\uff0c\u5c24\u5176\u5728\u81ea\u52a8\u5316\u811a\u672c\u4e2d\u6709\u7740\u91cd\u8981\u7684\u4f5c\u7528\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u901a\u8fc7\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"sed"}),"\uff0c\u4f60\u53ef\u4ee5\u5feb\u901f\u5904\u7406\u6587\u672c\u6587\u4ef6\uff0c\u8fdb\u884c\u67e5\u627e\u66ff\u6362\u3001\u884c\u5220\u9664\u3001\u6587\u672c\u683c\u5f0f\u5316\u7b49\u64cd\u4f5c\uff01\ud83d\udee0\ufe0f"]}),"\n",(0,d.jsx)(n.h2,{id:"2-\u547d\u4ee4\u8bed\u6cd5",children:"2. \u547d\u4ee4\u8bed\u6cd5"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"sed [\u9009\u9879] 'command' [\u6587\u4ef6]\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"command"}),"\uff1a\u8981\u6267\u884c\u7684\u64cd\u4f5c\uff08\u5982\u66ff\u6362\u3001\u5220\u9664\u7b49\uff09\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"\u9009\u9879"}),"\uff1a",(0,d.jsx)(n.code,{children:"sed"})," \u63d0\u4f9b\u4e86\u4e00\u4e9b\u9009\u9879\u6765\u5b9a\u5236\u547d\u4ee4\u7684\u884c\u4e3a\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"\u6587\u4ef6"}),"\uff1a\u8981\u5904\u7406\u7684\u6587\u4ef6\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\u6587\u4ef6\uff0c",(0,d.jsx)(n.code,{children:"sed"})," \u4f1a\u4ece\u6807\u51c6\u8f93\u5165\u8bfb\u53d6\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"3-\u5e38\u89c1\u9009\u9879",children:"3. \u5e38\u89c1\u9009\u9879"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"-e"}),"\uff1a\u6307\u5b9a\u8981\u6267\u884c\u7684\u7f16\u8f91\u547d\u4ee4\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"-i"}),"\uff1a\u76f4\u63a5\u4fee\u6539\u6587\u4ef6\uff0c\u800c\u4e0d\u662f\u8f93\u51fa\u5230\u6807\u51c6\u8f93\u51fa\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"-n"}),"\uff1a\u7981\u6b62\u9ed8\u8ba4\u8f93\u51fa\uff0c\u53ea\u6709\u5728\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"p"})," \u547d\u4ee4\u65f6\u624d\u8f93\u51fa\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"-f"}),"\uff1a\u4ece\u6587\u4ef6\u4e2d\u8bfb\u53d6 ",(0,d.jsx)(n.code,{children:"sed"})," \u547d\u4ee4\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"4-\u57fa\u672c\u7528\u6cd5",children:"4. \u57fa\u672c\u7528\u6cd5"}),"\n",(0,d.jsxs)(n.h3,{id:"41-\u66ff\u6362\u64cd\u4f5c",children:["4.1 ",(0,d.jsx)(n.strong,{children:"\u66ff\u6362\u64cd\u4f5c"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u6700\u5e38\u89c1\u7684 ",(0,d.jsx)(n.code,{children:"sed"})," \u7528\u6cd5\u5c31\u662f\u6587\u672c\u66ff\u6362\u3002\u4ee5\u4e0b\u547d\u4ee4\u5c06\u6587\u4ef6\u4e2d\u7684\u7b2c\u4e00\u4e2a ",(0,d.jsx)(n.code,{children:"hello"})," \u66ff\u6362\u4e3a ",(0,d.jsx)(n.code,{children:"hi"}),"\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ sed 's/hello/hi/' file.txt\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"s"}),"\uff1a\u8868\u793a\u66ff\u6362\uff08substitute\uff09\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"/hello/"}),"\uff1a\u8981\u88ab\u66ff\u6362\u7684\u6587\u672c\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"/hi/"}),"\uff1a\u66ff\u6362\u6210\u7684\u6587\u672c\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"42-\u66ff\u6362\u6240\u6709\u5339\u914d\u9879",children:["4.2 ",(0,d.jsx)(n.strong,{children:"\u66ff\u6362\u6240\u6709\u5339\u914d\u9879"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,d.jsx)(n.code,{children:"sed"})," \u53ea\u66ff\u6362\u6bcf\u884c\u7684\u7b2c\u4e00\u4e2a\u5339\u914d\u9879\u3002\u5982\u679c\u60f3\u66ff\u6362\u6bcf\u4e00\u884c\u4e2d\u6240\u6709\u5339\u914d\u7684\u6587\u672c\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"g"})," \u6807\u5fd7\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ sed 's/hello/hi/g' file.txt\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"g"}),"\uff1a\u8868\u793a\u5168\u5c40\u66ff\u6362\uff0c\u5373\u66ff\u6362\u8be5\u884c\u4e2d\u6240\u6709\u7684 ",(0,d.jsx)(n.code,{children:"hello"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"43-\u76f4\u63a5\u4fee\u6539\u6587\u4ef6",children:["4.3 ",(0,d.jsx)(n.strong,{children:"\u76f4\u63a5\u4fee\u6539\u6587\u4ef6"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u5e0c\u671b\u76f4\u63a5\u4fee\u6539\u6587\u4ef6\u5185\u5bb9\u800c\u4e0d\u662f\u8f93\u51fa\u7ed3\u679c\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"-i"})," \u9009\u9879\u3002\u4ee5\u4e0b\u547d\u4ee4\u4f1a\u76f4\u63a5\u5728\u6587\u4ef6\u4e2d\u6267\u884c\u66ff\u6362\u64cd\u4f5c\uff0c\u800c\u4e0d\u5c06\u7ed3\u679c\u6253\u5370\u5230\u7ec8\u7aef\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ sed -i 's/hello/hi/g' file.txt\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"44-\u663e\u793a\u6307\u5b9a\u884c\u7684\u5185\u5bb9",children:["4.4 ",(0,d.jsx)(n.strong,{children:"\u663e\u793a\u6307\u5b9a\u884c\u7684\u5185\u5bb9"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u53ef\u4ee5\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"-n"})," \u9009\u9879\u6765\u7981\u6b62 ",(0,d.jsx)(n.code,{children:"sed"})," \u9ed8\u8ba4\u7684\u8f93\u51fa\u884c\u4e3a\uff0c\u53ea\u6253\u5370\u7b26\u5408\u6761\u4ef6\u7684\u884c\u3002\u6bd4\u5982\uff0c\u6253\u5370\u5305\u542b ",(0,d.jsx)(n.code,{children:"hello"})," \u7684\u884c\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ sed -n '/hello/p' file.txt\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"/hello/"}),"\uff1a\u8868\u793a\u5339\u914d\u5305\u542b ",(0,d.jsx)(n.code,{children:"hello"})," \u7684\u884c\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"p"}),"\uff1a\u8868\u793a\u6253\u5370\u5339\u914d\u7684\u884c\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"45-\u5220\u9664\u884c",children:["4.5 ",(0,d.jsx)(n.strong,{children:"\u5220\u9664\u884c"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"d"})," \u547d\u4ee4\u53ef\u4ee5\u5220\u9664\u7279\u5b9a\u7684\u884c\u3002\u4f8b\u5982\uff0c\u5220\u9664\u5305\u542b ",(0,d.jsx)(n.code,{children:"hello"})," \u7684\u6240\u6709\u884c\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ sed '/hello/d' file.txt\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"/hello/"}),"\uff1a\u8868\u793a\u5339\u914d\u5305\u542b ",(0,d.jsx)(n.code,{children:"hello"})," \u7684\u884c\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"d"}),"\uff1a\u8868\u793a\u5220\u9664\u5339\u914d\u7684\u884c\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"46-\u66ff\u6362\u6587\u672c\u5e76\u4fdd\u7559\u539f\u884c",children:["4.6 ",(0,d.jsx)(n.strong,{children:"\u66ff\u6362\u6587\u672c\u5e76\u4fdd\u7559\u539f\u884c"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u60f3\u66ff\u6362\u67d0\u4e9b\u6587\u672c\u5e76\u5728\u66ff\u6362\u540e\u4fdd\u7559\u539f\u884c\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"p"})," \u547d\u4ee4\u3002\u4f8b\u5982\uff0c\u66ff\u6362 ",(0,d.jsx)(n.code,{children:"hello"})," \u4e3a ",(0,d.jsx)(n.code,{children:"hi"}),"\uff0c\u5e76\u5728\u8f93\u51fa\u4e2d\u663e\u793a\u539f\u59cb\u884c\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ sed 's/hello/hi/p' file.txt\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"p"}),"\uff1a\u8868\u793a\u6253\u5370\u66ff\u6362\u540e\u7684\u884c\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"47-\u6309\u884c\u53f7\u64cd\u4f5c",children:["4.7 ",(0,d.jsx)(n.strong,{children:"\u6309\u884c\u53f7\u64cd\u4f5c"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u4f60\u8fd8\u53ef\u4ee5\u6307\u5b9a\u6309\u884c\u53f7\u8fdb\u884c\u64cd\u4f5c\u3002\u6bd4\u5982\uff0c\u53ea\u66ff\u6362\u7b2c 2 \u884c\u7684 ",(0,d.jsx)(n.code,{children:"hello"}),"\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ sed '2s/hello/hi/' file.txt\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"2"}),"\uff1a\u8868\u793a\u64cd\u4f5c\u7b2c 2 \u884c\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"s/hello/hi/"}),"\uff1a\u8868\u793a\u5728\u7b2c 2 \u884c\u4e2d\u5c06 ",(0,d.jsx)(n.code,{children:"hello"})," \u66ff\u6362\u4e3a ",(0,d.jsx)(n.code,{children:"hi"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"48-\u63d2\u5165\u548c\u8ffd\u52a0\u6587\u672c",children:["4.8 ",(0,d.jsx)(n.strong,{children:"\u63d2\u5165\u548c\u8ffd\u52a0\u6587\u672c"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"sed"})," \u8fd8\u53ef\u4ee5\u5728\u7279\u5b9a\u4f4d\u7f6e\u63d2\u5165\u6216\u8ffd\u52a0\u6587\u672c\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"i"})," \u6765\u63d2\u5165\u6587\u672c\uff0c\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"a"})," \u6765\u8ffd\u52a0\u6587\u672c\u3002"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5728\u7b2c 2 \u884c\u524d\u63d2\u5165\u6587\u672c\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ sed '2i This is a new line' file.txt\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5728\u7b2c 2 \u884c\u540e\u8ffd\u52a0\u6587\u672c\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ sed '2a This is an appended line' file.txt\n"})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"49-\u591a\u6761\u547d\u4ee4\u6267\u884c",children:["4.9 ",(0,d.jsx)(n.strong,{children:"\u591a\u6761\u547d\u4ee4\u6267\u884c"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c\u9700\u8981\u5728\u540c\u4e00\u547d\u4ee4\u4e2d\u6267\u884c\u591a\u6761 ",(0,d.jsx)(n.code,{children:"sed"})," \u547d\u4ee4\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"-e"})," \u9009\u9879\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ sed -e 's/hello/hi/' -e '/bye/d' file.txt\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"-e"}),"\uff1a\u8868\u793a\u6267\u884c\u591a\u6761\u547d\u4ee4\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"s/hello/hi/"}),"\uff1a\u66ff\u6362 ",(0,d.jsx)(n.code,{children:"hello"})," \u4e3a ",(0,d.jsx)(n.code,{children:"hi"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"/bye/d"}),"\uff1a\u5220\u9664\u5305\u542b ",(0,d.jsx)(n.code,{children:"bye"})," \u7684\u884c\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"5-\u547d\u4ee4\u793a\u4f8b",children:"5. \u547d\u4ee4\u793a\u4f8b"}),"\n",(0,d.jsxs)(n.h3,{id:"51-\u66ff\u6362\u5e76\u663e\u793a\u4fee\u6539\u540e\u7684\u5185\u5bb9",children:["5.1 ",(0,d.jsx)(n.strong,{children:"\u66ff\u6362\u5e76\u663e\u793a\u4fee\u6539\u540e\u7684\u5185\u5bb9"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u5047\u8bbe\u6587\u4ef6 ",(0,d.jsx)(n.code,{children:"data.txt"})," \u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-text",children:"hello world\nhello again\ngoodbye world\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"sed"})," \u66ff\u6362 ",(0,d.jsx)(n.code,{children:"hello"})," \u4e3a ",(0,d.jsx)(n.code,{children:"hi"}),"\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ sed 's/hello/hi/' data.txt\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-text",children:"hi world\nhi again\ngoodbye world\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"52-\u5220\u9664\u5305\u542b\u7279\u5b9a\u6587\u672c\u7684\u884c",children:["5.2 ",(0,d.jsx)(n.strong,{children:"\u5220\u9664\u5305\u542b\u7279\u5b9a\u6587\u672c\u7684\u884c"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u5220\u9664\u6587\u4ef6\u4e2d\u5305\u542b ",(0,d.jsx)(n.code,{children:"goodbye"})," \u7684\u884c\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ sed '/goodbye/d' data.txt\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-text",children:"hello world\nhello again\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"53-\u4fee\u6539\u6587\u4ef6\u5e76\u4fdd\u5b58\u66f4\u6539",children:["5.3 ",(0,d.jsx)(n.strong,{children:"\u4fee\u6539\u6587\u4ef6\u5e76\u4fdd\u5b58\u66f4\u6539"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u76f4\u63a5\u4fee\u6539\u6587\u4ef6 ",(0,d.jsx)(n.code,{children:"data.txt"}),"\uff0c\u5c06 ",(0,d.jsx)(n.code,{children:"hello"})," \u66ff\u6362\u4e3a ",(0,d.jsx)(n.code,{children:"hi"}),"\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ sed -i 's/hello/hi/g' data.txt\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u6587\u4ef6\u5185\u5bb9\u66f4\u65b0\u4e3a\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-text",children:"hi world\nhi again\ngoodbye world\n"})}),"\n",(0,d.jsx)(n.h2,{id:"6-\u603b\u7ed3",children:"6. \u603b\u7ed3"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"sed"})," \u662f\u4e00\u4e2a\u529f\u80fd\u5f3a\u5927\u7684\u6d41\u7f16\u8f91\u5668\uff0c\u5b83\u53ef\u4ee5\u5728\u4e0d\u6253\u5f00\u7f16\u8f91\u5668\u7684\u60c5\u51b5\u4e0b\u5904\u7406\u6587\u672c\uff0c\u5feb\u901f\u8fdb\u884c\u66ff\u6362\u3001\u5220\u9664\u3001\u63d2\u5165\u3001\u683c\u5f0f\u5316\u7b49\u64cd\u4f5c\u3002\u638c\u63e1\u4e86 ",(0,d.jsx)(n.code,{children:"sed"}),"\uff0c\u4f60\u5c31\u80fd\u5728\u547d\u4ee4\u884c\u4e2d\u9ad8\u6548\u5730\u5904\u7406\u5404\u79cd\u6587\u672c\u6587\u4ef6\uff0c\u63d0\u5347\u5de5\u4f5c\u6548\u7387\u3002\u23f3"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"sed"})," \u7684\u5e94\u7528\u573a\u666f\u975e\u5e38\u5e7f\u6cdb\uff0c\u5c24\u5176\u9002\u7528\u4e8e\u65e5\u5fd7\u5904\u7406\u3001\u6587\u672c\u6587\u4ef6\u6279\u91cf\u4fee\u6539\u7b49\u4efb\u52a1\u3002\ud83d\ude80"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5e0c\u671b\u8fd9\u7bc7\u6559\u7a0b\u5e2e\u52a9\u4f60\u638c\u63e1\u4e86 ",(0,d.jsx)(n.code,{children:"sed"})," \u7684\u57fa\u7840\u4f7f\u7528\u65b9\u6cd5\uff01\u52a0\u6cb9\uff0c\u5728\u6587\u672c\u5904\u7406\u7684\u9053\u8def\u4e0a\u8d8a\u8d70\u8d8a\u8fdc\uff01\ud83d\udcaa"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.p,{children:["\u8bb0\u5f97\u6536\u85cf\u5728\u7ebf\u77e5\u8bc6\u5e93 ",(0,d.jsx)(n.a,{href:"http://www.zxzsk.com",children:"www.zxzsk.com"}),"\uff0c\u4e86\u89e3\u66f4\u591a\u5b9e\u7528\u7684 Linux \u547d\u4ee4\u6280\u5de7\uff01\ud83d\udcda"]})]})}function j(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var l=s(6540);const d={},c=l.createContext(d);function i(e){const n=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);