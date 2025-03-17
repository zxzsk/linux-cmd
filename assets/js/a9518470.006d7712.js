"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7394],{1616:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>h,contentTitle:()=>i,default:()=>x,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"\u6587\u4ef6\u7ba1\u7406/\u67e5\u770b\u3001\u67e5\u627e\u3001\u6bd4\u8f83/pwd","title":"pwd","description":"\u2b50\u67e5\u770b\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55","source":"@site/docs/20-\u6587\u4ef6\u7ba1\u7406/\u67e5\u770b\u3001\u67e5\u627e\u3001\u6bd4\u8f83/pwd.md","sourceDirName":"20-\u6587\u4ef6\u7ba1\u7406/\u67e5\u770b\u3001\u67e5\u627e\u3001\u6bd4\u8f83","slug":"/8fd5956c","permalink":"/8fd5956c","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/20-\u6587\u4ef6\u7ba1\u7406/\u67e5\u770b\u3001\u67e5\u627e\u3001\u6bd4\u8f83/pwd.md","tags":[],"version":"current","lastUpdatedAt":1742246204000,"frontMatter":{"slug":"/8fd5956c"},"sidebar":"\u6587\u4ef6\u7ba1\u7406","previous":{"title":"ls","permalink":"/e614e147"},"next":{"title":"stat","permalink":"/82ae4c93"}}');var c=d(4848),r=d(8453);const l={slug:"/8fd5956c"},i=void 0,h={},o=[{value:"1. \u547d\u4ee4\u7b80\u4ecb",id:"1-\u547d\u4ee4\u7b80\u4ecb",level:2},{value:"2. \u547d\u4ee4\u683c\u5f0f",id:"2-\u547d\u4ee4\u683c\u5f0f",level:2},{value:"3. \u547d\u4ee4\u793a\u4f8b",id:"3-\u547d\u4ee4\u793a\u4f8b",level:2},{value:"3.1 <strong>\u67e5\u770b\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55</strong>",id:"31-\u67e5\u770b\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55",level:3},{value:"3.2 <strong>\u5728\u5d4c\u5957\u76ee\u5f55\u4e2d\u4f7f\u7528 <code>pwd</code></strong>",id:"32-\u5728\u5d4c\u5957\u76ee\u5f55\u4e2d\u4f7f\u7528-pwd",level:3},{value:"3.3 <strong><code>pwd</code> \u4e0e <code>cd</code> \u914d\u5408\u4f7f\u7528</strong>",id:"33-pwd-\u4e0e-cd-\u914d\u5408\u4f7f\u7528",level:3},{value:"4. \u9009\u9879\u4e0e\u53c2\u6570",id:"4-\u9009\u9879\u4e0e\u53c2\u6570",level:2},{value:"4.1 <strong><code>-L</code>\uff08\u9ed8\u8ba4\u9009\u9879\uff09</strong>",id:"41--l\u9ed8\u8ba4\u9009\u9879",level:3},{value:"4.2 <strong><code>-P</code>  \u5b9e\u9645\u8def\u5f84</strong>",id:"42--p--\u5b9e\u9645\u8def\u5f84",level:3},{value:"5. \u5c0f\u6280\u5de7\u4e0e\u6ce8\u610f\u4e8b\u9879",id:"5-\u5c0f\u6280\u5de7\u4e0e\u6ce8\u610f\u4e8b\u9879",level:2},{value:"5.1 <strong>\u67e5\u770b\u5f53\u524d\u8def\u5f84\u65f6\u7684\u5feb\u6377\u65b9\u5f0f</strong>",id:"51-\u67e5\u770b\u5f53\u524d\u8def\u5f84\u65f6\u7684\u5feb\u6377\u65b9\u5f0f",level:3},{value:"5.2 <strong>\u7ed3\u5408\u5176\u4ed6\u547d\u4ee4\u4f7f\u7528</strong>",id:"52-\u7ed3\u5408\u5176\u4ed6\u547d\u4ee4\u4f7f\u7528",level:3},{value:"5.3 <strong>\u811a\u672c\u4e2d\u4f7f\u7528 <code>pwd</code></strong>",id:"53-\u811a\u672c\u4e2d\u4f7f\u7528-pwd",level:3},{value:"6. \u603b\u7ed3",id:"6-\u603b\u7ed3",level:2}];function t(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"\u2b50\u67e5\u770b\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55"}),"\n",(0,c.jsx)(n.h2,{id:"1-\u547d\u4ee4\u7b80\u4ecb",children:"1. \u547d\u4ee4\u7b80\u4ecb"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"pwd"}),"\uff08print working directory\uff09\u662f Linux \u548c\u7c7b Unix \u7cfb\u7edf\u4e2d\u7684\u4e00\u4e2a\u975e\u5e38\u7b80\u5355\u4f46\u91cd\u8981\u7684\u547d\u4ee4\u3002\u5b83\u7528\u4e8e\u663e\u793a\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u7684\u7edd\u5bf9\u8def\u5f84\u3002\ud83d\udee4\ufe0f \u5728\u4f60\u8fdb\u884c\u6587\u4ef6\u64cd\u4f5c\u65f6\uff0c\u65f6\u523b\u77e5\u9053\u81ea\u5df1\u6240\u5728\u7684\u76ee\u5f55\u975e\u5e38\u91cd\u8981\uff0c\u800c ",(0,c.jsx)(n.code,{children:"pwd"})," \u5c31\u662f\u8ba9\u4f60\u4e86\u89e3\u5f53\u524d\u76ee\u5f55\u7684\u5de5\u5177\uff01\ud83d\ude80"]}),"\n",(0,c.jsx)(n.h2,{id:"2-\u547d\u4ee4\u683c\u5f0f",children:"2. \u547d\u4ee4\u683c\u5f0f"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"pwd\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u6267\u884c\u8be5\u547d\u4ee4\u540e\uff0c\u7cfb\u7edf\u4f1a\u663e\u793a\u4f60\u5f53\u524d\u6240\u5728\u7684\u76ee\u5f55\u7684\u5b8c\u6574\u8def\u5f84\u3002\u5b83\u662f\u4e00\u4e2a\u975e\u5e38\u57fa\u7840\u7684\u547d\u4ee4\uff0c\u4f46\u5374\u662f\u4f60\u5bfc\u822a\u6587\u4ef6\u7cfb\u7edf\u65f6\u7684\u5fc5\u5907\u5de5\u5177\uff01\ud83d\udcc2"}),"\n",(0,c.jsx)(n.h2,{id:"3-\u547d\u4ee4\u793a\u4f8b",children:"3. \u547d\u4ee4\u793a\u4f8b"}),"\n",(0,c.jsxs)(n.h3,{id:"31-\u67e5\u770b\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55",children:["3.1 ",(0,c.jsx)(n.strong,{children:"\u67e5\u770b\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ pwd\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"/home/user/projects\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6267\u884c ",(0,c.jsx)(n.code,{children:"pwd"})," \u540e\uff0c\u5b83\u4f1a\u8f93\u51fa\u5f53\u524d\u76ee\u5f55\u7684\u7edd\u5bf9\u8def\u5f84\u3002\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u5f53\u524d\u76ee\u5f55\u662f ",(0,c.jsx)(n.code,{children:"/home/user/projects"}),"\u3002\u4f60\u53ef\u4ee5\u770b\u5230\u8fd9\u4e2a\u76ee\u5f55\u5728\u6574\u4e2a\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u4f4d\u7f6e\u3002"]}),"\n",(0,c.jsxs)(n.h3,{id:"32-\u5728\u5d4c\u5957\u76ee\u5f55\u4e2d\u4f7f\u7528-pwd",children:["3.2 ",(0,c.jsxs)(n.strong,{children:["\u5728\u5d4c\u5957\u76ee\u5f55\u4e2d\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"pwd"})]})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ cd /home/user/projects/website\n$ pwd\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"/home/user/projects/website\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u8fdb\u5165\u4e00\u4e2a\u5b50\u76ee\u5f55\u540e\uff0c\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"pwd"})," \u4f1a\u663e\u793a\u8be5\u5b50\u76ee\u5f55\u7684\u7edd\u5bf9\u8def\u5f84\u3002\u8fd9\u6837\u65e0\u8bba\u4f60\u8eab\u5904\u54ea\u4e2a\u76ee\u5f55\uff0c\u90fd\u80fd\u6e05\u695a\u77e5\u9053\u81ea\u5df1\u6240\u5728\u7684\u4f4d\u7f6e\uff01\ud83d\udd0d"]}),"\n",(0,c.jsxs)(n.h3,{id:"33-pwd-\u4e0e-cd-\u914d\u5408\u4f7f\u7528",children:["3.3 ",(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:"pwd"})," \u4e0e ",(0,c.jsx)(n.code,{children:"cd"})," \u914d\u5408\u4f7f\u7528"]})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ cd /var/log\n$ pwd\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"/var/log\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u5148\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"cd"})," \u547d\u4ee4\u6539\u53d8\u5f53\u524d\u76ee\u5f55\uff0c\u518d\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"pwd"})," \u547d\u4ee4\u786e\u8ba4\u81ea\u5df1\u662f\u5426\u6210\u529f\u8fdb\u5165\u4e86\u76ee\u6807\u76ee\u5f55\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"4-\u9009\u9879\u4e0e\u53c2\u6570",children:"4. \u9009\u9879\u4e0e\u53c2\u6570"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"pwd"})," \u547d\u4ee4\u672c\u8eab\u6ca1\u6709\u590d\u6742\u7684\u53c2\u6570\uff0c\u4f46\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e9b\u5e38\u89c1\u7684\u9009\u9879\u6765\u6539\u53d8\u8f93\u51fa\u65b9\u5f0f\u3002"]}),"\n",(0,c.jsxs)(n.h3,{id:"41--l\u9ed8\u8ba4\u9009\u9879",children:["4.1 ",(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:"-L"}),"\uff08\u9ed8\u8ba4\u9009\u9879\uff09"]})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ pwd -L\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"-L"})," \u9009\u9879\u8868\u793a\u663e\u793a\u903b\u8f91\u8def\u5f84\uff08\u9ed8\u8ba4\u884c\u4e3a\uff09\u3002\u5b83\u663e\u793a\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u7684\u7b26\u53f7\u94fe\u63a5\u8def\u5f84\uff0c\u800c\u4e0d\u662f\u7269\u7406\u8def\u5f84\u3002\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e2a\u9009\u9879\u4e0d\u9700\u8981\u663e\u5f0f\u4f7f\u7528\uff0c\u56e0\u4e3a ",(0,c.jsx)(n.code,{children:"pwd"})," \u9ed8\u8ba4\u5c31\u662f\u8fd9\u4e2a\u884c\u4e3a\u3002\ud83d\udd04"]}),"\n",(0,c.jsxs)(n.h3,{id:"42--p--\u5b9e\u9645\u8def\u5f84",children:["4.2 ",(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:"-P"}),"  \u5b9e\u9645\u8def\u5f84"]})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ pwd -P\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"-P"})," \u9009\u9879\u8868\u793a\u663e\u793a\u5b9e\u9645\u8def\u5f84\uff0c\u9075\u5faa\u7b26\u53f7\u94fe\u63a5\u8def\u5f84\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\uff0c\u800c\u4e0d\u662f\u663e\u793a\u7b26\u53f7\u94fe\u63a5\u7684\u8def\u5f84\u3002\u8fd9\u5bf9\u4e8e\u4f60\u60f3\u4e86\u89e3\u76ee\u5f55\u7684\u771f\u5b9e\u7269\u7406\u4f4d\u7f6e\u65f6\u5f88\u6709\u7528\u3002\ud83d\udd17"]}),"\n",(0,c.jsx)(n.h2,{id:"5-\u5c0f\u6280\u5de7\u4e0e\u6ce8\u610f\u4e8b\u9879",children:"5. \u5c0f\u6280\u5de7\u4e0e\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,c.jsxs)(n.h3,{id:"51-\u67e5\u770b\u5f53\u524d\u8def\u5f84\u65f6\u7684\u5feb\u6377\u65b9\u5f0f",children:["5.1 ",(0,c.jsx)(n.strong,{children:"\u67e5\u770b\u5f53\u524d\u8def\u5f84\u65f6\u7684\u5feb\u6377\u65b9\u5f0f"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"pwd"})," \u662f\u7528\u6765\u67e5\u770b\u5f53\u524d\u8def\u5f84\u7684\u57fa\u672c\u5de5\u5177\u3002\u5982\u679c\u4f60\u60f3\u5feb\u901f\u77e5\u9053\u81ea\u5df1\u5728\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u4f4d\u7f6e\uff0c",(0,c.jsx)(n.code,{children:"pwd"})," \u5c31\u662f\u6700\u7b80\u5355\u3001\u6700\u76f4\u89c2\u7684\u65b9\u5f0f\u3002\ud83d\udccd"]}),"\n",(0,c.jsxs)(n.h3,{id:"52-\u7ed3\u5408\u5176\u4ed6\u547d\u4ee4\u4f7f\u7528",children:["5.2 ",(0,c.jsx)(n.strong,{children:"\u7ed3\u5408\u5176\u4ed6\u547d\u4ee4\u4f7f\u7528"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"pwd"})," \u901a\u5e38\u4e0e\u5176\u4ed6\u547d\u4ee4\u4e00\u8d77\u4f7f\u7528\uff0c\u5e2e\u52a9\u4f60\u7406\u89e3\u4f60\u5728\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u4f4d\u7f6e\u3002\u4f8b\u5982\uff0c\u5728\u6267\u884c ",(0,c.jsx)(n.code,{children:"cd"})," \u547d\u4ee4\u540e\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"pwd"})," \u53ef\u4ee5\u786e\u8ba4\u662f\u5426\u6210\u529f\u8fdb\u5165\u4e86\u76ee\u6807\u76ee\u5f55\u3002"]}),"\n",(0,c.jsxs)(n.h3,{id:"53-\u811a\u672c\u4e2d\u4f7f\u7528-pwd",children:["5.3 ",(0,c.jsxs)(n.strong,{children:["\u811a\u672c\u4e2d\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"pwd"})]})]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u7f16\u5199\u811a\u672c\u65f6\uff0c",(0,c.jsx)(n.code,{children:"pwd"})," \u53ef\u4ee5\u5e2e\u52a9\u4f60\u786e\u5b9a\u5f53\u524d\u76ee\u5f55\uff0c\u7279\u522b\u662f\u5728\u9700\u8981\u76f8\u5bf9\u8def\u5f84\u6216\u8005\u6587\u4ef6\u64cd\u4f5c\u65f6\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\necho "\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u662f\uff1a$(pwd)"\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u6837\u5728\u811a\u672c\u6267\u884c\u65f6\uff0c",(0,c.jsx)(n.code,{children:"pwd"})," \u4f1a\u663e\u793a\u811a\u672c\u6240\u5728\u7684\u76ee\u5f55\uff0c\u65b9\u4fbf\u540e\u7eed\u6587\u4ef6\u64cd\u4f5c\u3002\ud83d\udcdc"]}),"\n",(0,c.jsx)(n.h2,{id:"6-\u603b\u7ed3",children:"6. \u603b\u7ed3"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"pwd"})," \u547d\u4ee4\u662f\u975e\u5e38\u57fa\u7840\u4f46\u6781\u5176\u91cd\u8981\u7684\u547d\u4ee4\u4e4b\u4e00\uff0c\u5e2e\u52a9\u4f60\u968f\u65f6\u4e86\u89e3\u5f53\u524d\u7684\u5de5\u4f5c\u76ee\u5f55\u3002\u65e0\u8bba\u4f60\u5728\u6587\u4ef6\u7cfb\u7edf\u7684\u54ea\u4e2a\u4f4d\u7f6e\uff0c",(0,c.jsx)(n.code,{children:"pwd"})," \u90fd\u80fd\u8ba9\u4f60\u6e05\u6670\u5730\u77e5\u9053\u81ea\u5df1\u6240\u5728\u7684\u8def\u5f84\u3002\u5b83\u5728\u65e5\u5e38\u5de5\u4f5c\u4e2d\u5e38\u5e38\u4e0e\u5176\u4ed6\u547d\u4ee4\u4e00\u8d77\u4f7f\u7528\uff0c\u63d0\u4f9b\u4e86\u76ee\u5f55\u5bfc\u822a\u7684\u4fbf\u6377\u6027\u3002\ud83d\udcc2"]}),"\n",(0,c.jsxs)(n.p,{children:["\u638c\u63e1\u4e86 ",(0,c.jsx)(n.code,{children:"pwd"}),"\uff0c\u4f60\u5c31\u53ef\u4ee5\u968f\u65f6\u77e5\u9053\u81ea\u5df1\u7684\u4f4d\u7f6e\uff0c\u907f\u514d\u8ff7\u5931\u5728\u6587\u4ef6\u7cfb\u7edf\u7684\u201c\u8ff7\u5bab\u201d\u91cc\u3002\ud83c\udfaf"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsxs)(n.p,{children:["\u52a0\u6cb9\uff0c\u7ee7\u7eed\u5728\u547d\u4ee4\u884c\u4e2d\u63a2\u7d22\u65b0\u6280\u80fd\uff01\ud83d\udcaa\ud83c\udffb \u522b\u5fd8\u4e86\u6536\u85cf\u5728\u7ebf\u77e5\u8bc6\u5e93\uff08",(0,c.jsx)(n.a,{href:"http://www.zxzsk.com",children:"www.zxzsk.com"}),"\uff09\uff0c\u8ba9\u66f4\u591a\u6709\u7528\u7684\u77e5\u8bc6\u4e3a\u4f60\u63d0\u4f9b\u5e2e\u52a9\uff01\ud83d\ude0a"]}),"\n",(0,c.jsx)(n.p,{children:"\u7ee7\u7eed\u63a2\u7d22\uff0c\u4f60\u5df2\u7ecf\u5f88\u68d2\u5566\uff01\ud83c\udf1f"})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(t,{...e})}):t(e)}},8453:(e,n,d)=>{d.d(n,{R:()=>l,x:()=>i});var s=d(6540);const c={},r=s.createContext(c);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);