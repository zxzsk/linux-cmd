"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[159],{8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>i});var c=s(6540);const l={},r=c.createContext(l);function d(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),c.createElement(r.Provider,{value:n},e.children)}},9657:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>a});const c=JSON.parse('{"id":"command/\u7f51\u7edc/rsync","title":"rsync","description":"\u2b50\u2b50\u2b50\u6587\u4ef6\u540c\u6b65/\u6587\u4ef6\u4f20\u8f93","source":"@site/docs/02-command/50-\u7f51\u7edc/rsync.md","sourceDirName":"02-command/50-\u7f51\u7edc","slug":"/453dbec3","permalink":"/453dbec3","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/02-command/50-\u7f51\u7edc/rsync.md","tags":[],"version":"current","frontMatter":{"slug":"/453dbec3"},"sidebar":"tutorialSidebar","previous":{"title":"ping","permalink":"/d16b107b"},"next":{"title":"scp","permalink":"/4fc28e92"}}');var l=s(4848),r=s(8453);const d={slug:"/453dbec3"},i=void 0,h={},a=[{value:"1. \u4ec0\u4e48\u662f rsync\uff1f\ud83d\udcbb",id:"1-\u4ec0\u4e48\u662f-rsync",level:2},{value:"2. rsync \u7684\u7279\u70b9 \ud83d\udcdd",id:"2-rsync-\u7684\u7279\u70b9-",level:2},{value:"3. \u5b89\u88c5 rsync \ud83d\udee0\ufe0f",id:"3-\u5b89\u88c5-rsync-\ufe0f",level:2},{value:"4. rsync \u7684\u57fa\u672c\u8bed\u6cd5 \ud83d\udd27",id:"4-rsync-\u7684\u57fa\u672c\u8bed\u6cd5-",level:2},{value:"4.1 \u57fa\u672c\u7528\u6cd5\u793a\u4f8b",id:"41-\u57fa\u672c\u7528\u6cd5\u793a\u4f8b",level:3},{value:"5. \u5e38\u89c1\u9009\u9879\u4ecb\u7ecd \ud83d\udca1",id:"5-\u5e38\u89c1\u9009\u9879\u4ecb\u7ecd-",level:2},{value:"5.1 <code>-a</code>\uff1a\u5f52\u6863\u6a21\u5f0f",id:"51--a\u5f52\u6863\u6a21\u5f0f",level:3},{value:"5.2 <code>-v</code>\uff1a\u8be6\u7ec6\u6a21\u5f0f",id:"52--v\u8be6\u7ec6\u6a21\u5f0f",level:3},{value:"5.3 <code>-z</code>\uff1a\u542f\u7528\u538b\u7f29",id:"53--z\u542f\u7528\u538b\u7f29",level:3},{value:"5.4 <code>--delete</code>\uff1a\u5220\u9664\u76ee\u6807\u76ee\u5f55\u4e2d\u591a\u4f59\u7684\u6587\u4ef6",id:"54---delete\u5220\u9664\u76ee\u6807\u76ee\u5f55\u4e2d\u591a\u4f59\u7684\u6587\u4ef6",level:3},{value:"5.5 <code>-n</code>\uff1a\u8bd5\u8fd0\u884c\uff08\u6a21\u62df\uff09",id:"55--n\u8bd5\u8fd0\u884c\u6a21\u62df",level:3},{value:"6. \u8fdc\u7a0b\u540c\u6b65\u548c SSH \u914d\u7f6e \ud83d\udd10",id:"6-\u8fdc\u7a0b\u540c\u6b65\u548c-ssh-\u914d\u7f6e-",level:2},{value:"6.1 \u914d\u7f6e\u514d\u5bc6\u767b\u5f55",id:"61-\u914d\u7f6e\u514d\u5bc6\u767b\u5f55",level:3},{value:"7. \u8fdb\u9636\u7528\u6cd5 \ud83d\udd27",id:"7-\u8fdb\u9636\u7528\u6cd5-",level:2},{value:"7.1 \u4f7f\u7528 <code>--link-dest</code> \u589e\u91cf\u5907\u4efd",id:"71-\u4f7f\u7528---link-dest-\u589e\u91cf\u5907\u4efd",level:3},{value:"7.2 \u4f7f\u7528 <code>--bwlimit</code> \u9650\u5236\u5e26\u5bbd",id:"72-\u4f7f\u7528---bwlimit-\u9650\u5236\u5e26\u5bbd",level:3},{value:"8. \u5c0f\u7ed3 \ud83d\udcda",id:"8-\u5c0f\u7ed3-",level:2}];function o(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"\u2b50\u2b50\u2b50\u6587\u4ef6\u540c\u6b65/\u6587\u4ef6\u4f20\u8f93"}),"\n",(0,l.jsx)(n.h2,{id:"1-\u4ec0\u4e48\u662f-rsync",children:"1. \u4ec0\u4e48\u662f rsync\uff1f\ud83d\udcbb"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"rsync"})," \u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u7528\u4e8e\u9ad8\u6548\u5730\u5728\u672c\u5730\u6216\u8fdc\u7a0b\u7cfb\u7edf\u4e4b\u95f4\u540c\u6b65\u6587\u4ef6\u548c\u76ee\u5f55\u3002\u76f8\u6bd4\u4f20\u7edf\u7684\u6587\u4ef6\u590d\u5236\u65b9\u6cd5\uff0c",(0,l.jsx)(n.code,{children:"rsync"})," \u901a\u8fc7\u4ec5\u4f20\u8f93\u5dee\u5f02\u90e8\u5206\u6765\u8282\u7701\u5e26\u5bbd\uff0c\u901f\u5ea6\u66f4\u5feb\uff0c\u4e5f\u80fd\u8282\u7ea6\u65f6\u95f4\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"2-rsync-\u7684\u7279\u70b9-",children:"2. rsync \u7684\u7279\u70b9 \ud83d\udcdd"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u589e\u91cf\u4f20\u8f93"}),"\uff1a",(0,l.jsx)(n.code,{children:"rsync"})," \u53ea\u4f1a\u4f20\u8f93\u6e90\u548c\u76ee\u6807\u6587\u4ef6\u4e4b\u95f4\u7684\u5dee\u5f02\u90e8\u5206\uff0c\u5927\u5927\u63d0\u9ad8\u4f20\u8f93\u6548\u7387\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u652f\u6301\u672c\u5730\u4e0e\u8fdc\u7a0b\u540c\u6b65"}),"\uff1a\u4e0d\u4ec5\u53ef\u4ee5\u5728\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u4e4b\u95f4\u540c\u6b65\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7 SSH \u8fde\u63a5\u8fdc\u7a0b\u670d\u52a1\u5668\u8fdb\u884c\u6587\u4ef6\u540c\u6b65\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u4fdd\u7559\u6587\u4ef6\u5c5e\u6027"}),"\uff1a\u53ef\u4ee5\u4fdd\u7559\u6587\u4ef6\u7684\u6743\u9650\u3001\u65f6\u95f4\u6233\u7b49\u5c5e\u6027\uff0c\u786e\u4fdd\u6e90\u548c\u76ee\u6807\u6587\u4ef6\u4e00\u81f4\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u652f\u6301\u538b\u7f29"}),"\uff1a\u53ef\u4ee5\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:"-z"})," \u53c2\u6570\u542f\u7528\u538b\u7f29\uff0c\u8fdb\u4e00\u6b65\u8282\u7701\u5e26\u5bbd\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"3-\u5b89\u88c5-rsync-\ufe0f",children:"3. \u5b89\u88c5 rsync \ud83d\udee0\ufe0f"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u5927\u591a\u6570 Linux \u53d1\u884c\u7248\u4e2d\uff0c",(0,l.jsx)(n.code,{children:"rsync"})," \u9ed8\u8ba4\u5df2\u5b89\u88c5\u3002\u5982\u679c\u672a\u5b89\u88c5\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u5b89\u88c5\uff1a"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Debian/Ubuntu"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install rsync\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"CentOS/RHEL"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo yum install rsync\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Fedora"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo dnf install rsync\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"rsync"})," \u4e0e\u8fdc\u7a0b\u670d\u52a1\u5668\u540c\u6b65\u6587\u4ef6\uff0c\u9700\u8981\u672c\u5730\u548c\u670d\u52a1\u5668\u540c\u65f6\u5b89\u88c5 ",(0,l.jsx)(n.code,{children:"rsync"})," \u547d\u4ee4\u3002"]})}),"\n",(0,l.jsx)(n.h2,{id:"4-rsync-\u7684\u57fa\u672c\u8bed\u6cd5-",children:"4. rsync \u7684\u57fa\u672c\u8bed\u6cd5 \ud83d\udd27"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"rsync"})," \u7684\u57fa\u672c\u8bed\u6cd5\u5982\u4e0b\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"rsync [\u9009\u9879] \u6e90\u8def\u5f84 \u76ee\u6807\u8def\u5f84\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5176\u4e2d\uff0c\u6e90\u8def\u5f84\u53ef\u4ee5\u662f\u672c\u5730\u8def\u5f84\u6216\u8fdc\u7a0b\u8def\u5f84\uff0c\u76ee\u6807\u8def\u5f84\u540c\u6837\u53ef\u4ee5\u662f\u672c\u5730\u6216\u8fdc\u7a0b\u8def\u5f84\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"41-\u57fa\u672c\u7528\u6cd5\u793a\u4f8b",children:"4.1 \u57fa\u672c\u7528\u6cd5\u793a\u4f8b"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u672c\u5730\u6587\u4ef6\u590d\u5236"}),"\uff1a"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5c06\u672c\u5730\u7684 ",(0,l.jsx)(n.code,{children:"folder1"})," \u76ee\u5f55\u590d\u5236\u5230 ",(0,l.jsx)(n.code,{children:"folder2"}),"\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"rsync -av folder1/ folder2/\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u8fd9\u6761\u547d\u4ee4\u4f1a\u9012\u5f52\u5730\u5c06 ",(0,l.jsx)(n.code,{children:"folder1"})," \u4e2d\u7684\u6240\u6709\u6587\u4ef6\u548c\u5b50\u76ee\u5f55\u590d\u5236\u5230 ",(0,l.jsx)(n.code,{children:"folder2"}),"\uff0c\u5e76\u4fdd\u6301\u6587\u4ef6\u7684\u5c5e\u6027\uff08",(0,l.jsx)(n.code,{children:"-a"})," \u8868\u793a\u5f52\u6863\u6a21\u5f0f\uff0c\u4fdd\u7559\u7b26\u53f7\u94fe\u63a5\u3001\u6587\u4ef6\u6743\u9650\u3001\u65f6\u95f4\u6233\u7b49\uff09\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u8fdc\u7a0b\u6587\u4ef6\u540c\u6b65"}),"\uff1a"]}),"\n",(0,l.jsx)(n.p,{children:"\u4ece\u672c\u5730\u673a\u5668\u5c06\u6587\u4ef6\u540c\u6b65\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"rsync -av /local/path/ user@remote:/remote/path/\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u540c\u6837\uff0c",(0,l.jsx)(n.code,{children:"user@remote:/remote/path/"})," \u662f\u8fdc\u7a0b\u670d\u52a1\u5668\u7684\u8def\u5f84\uff0c",(0,l.jsx)(n.code,{children:"user"})," \u662f\u7528\u6237\u540d\uff0c",(0,l.jsx)(n.code,{children:"remote"})," \u662f\u670d\u52a1\u5668\u5730\u5740\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u4ece\u8fdc\u7a0b\u540c\u6b65\u5230\u672c\u5730"}),"\uff1a"]}),"\n",(0,l.jsx)(n.p,{children:"\u5c06\u8fdc\u7a0b\u6587\u4ef6\u540c\u6b65\u5230\u672c\u5730\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"rsync -av user@remote:/remote/path/ /local/path/\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"5-\u5e38\u89c1\u9009\u9879\u4ecb\u7ecd-",children:"5. \u5e38\u89c1\u9009\u9879\u4ecb\u7ecd \ud83d\udca1"}),"\n",(0,l.jsxs)(n.h3,{id:"51--a\u5f52\u6863\u6a21\u5f0f",children:["5.1 ",(0,l.jsx)(n.code,{children:"-a"}),"\uff1a\u5f52\u6863\u6a21\u5f0f"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"-a"})," \u9009\u9879\u662f ",(0,l.jsx)(n.code,{children:"rsync"})," \u4e2d\u6700\u5e38\u7528\u7684\u9009\u9879\u4e4b\u4e00\uff0c\u5b83\u542f\u7528\u5f52\u6863\u6a21\u5f0f\uff0c\u8868\u793a\u4ee5\u9012\u5f52\u7684\u65b9\u5f0f\u590d\u5236\u6587\u4ef6\uff0c\u5e76\u4fdd\u7559\u6587\u4ef6\u7684\u6743\u9650\u3001\u65f6\u95f4\u6233\u3001\u7b26\u53f7\u94fe\u63a5\u7b49\u5c5e\u6027\u3002\u57fa\u672c\u4e0a\uff0c\u5b83\u7b49\u540c\u4e8e ",(0,l.jsx)(n.code,{children:"-rlptgoD"})," \u7684\u7ec4\u5408\u3002"]}),"\n",(0,l.jsxs)(n.h3,{id:"52--v\u8be6\u7ec6\u6a21\u5f0f",children:["5.2 ",(0,l.jsx)(n.code,{children:"-v"}),"\uff1a\u8be6\u7ec6\u6a21\u5f0f"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"-v"})," \u9009\u9879\u542f\u7528\u8be6\u7ec6\u6a21\u5f0f\uff0c\u663e\u793a\u6b63\u5728\u4f20\u8f93\u7684\u6587\u4ef6\u540d\u548c\u8fdb\u5ea6\u4fe1\u606f\u3002\u7ed3\u5408 ",(0,l.jsx)(n.code,{children:"-a"})," \u4e00\u8d77\u4f7f\u7528\uff0c\u80fd\u591f\u63d0\u4f9b\u66f4\u8be6\u7ec6\u7684\u8f93\u51fa\u3002"]}),"\n",(0,l.jsxs)(n.h3,{id:"53--z\u542f\u7528\u538b\u7f29",children:["5.3 ",(0,l.jsx)(n.code,{children:"-z"}),"\uff1a\u542f\u7528\u538b\u7f29"]}),"\n",(0,l.jsx)(n.p,{children:"\u542f\u7528\u538b\u7f29\u529f\u80fd\uff0c\u9002\u7528\u4e8e\u7f51\u7edc\u5e26\u5bbd\u8f83\u6162\u7684\u60c5\u51b5\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"rsync -avz /local/path/ user@remote:/remote/path/\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"54---delete\u5220\u9664\u76ee\u6807\u76ee\u5f55\u4e2d\u591a\u4f59\u7684\u6587\u4ef6",children:["5.4 ",(0,l.jsx)(n.code,{children:"--delete"}),"\uff1a\u5220\u9664\u76ee\u6807\u76ee\u5f55\u4e2d\u591a\u4f59\u7684\u6587\u4ef6"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0crsync \u4e0d\u4f1a\u540c\u6b65\u5220\u9664\u52a8\u4f5c\u3002\u9664\u975e\u4f7f\u7528--delete\u53c2\u6570\uff0c\u8fd9\u5c06\u5220\u9664\u53ea\u5b58\u5728\u4e8e\u76ee\u6807\u76ee\u5f55\u3001\u4e0d\u5b58\u5728\u4e8e\u6e90\u76ee\u5f55\u7684\u6587\u4ef6\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"rsync -av --delete /local/path/ user@remote:/remote/path/\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"55--n\u8bd5\u8fd0\u884c\u6a21\u62df",children:["5.5 ",(0,l.jsx)(n.code,{children:"-n"}),"\uff1a\u8bd5\u8fd0\u884c\uff08\u6a21\u62df\uff09"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"-n"})," \u9009\u9879\u7528\u4e8e\u6a21\u62df\u8fd0\u884c\uff0c\u4e0d\u4f1a\u5b9e\u9645\u6267\u884c\u4efb\u4f55\u540c\u6b65\u64cd\u4f5c\u3002\u8fd9\u53ef\u4ee5\u5e2e\u52a9\u4f60\u68c0\u67e5\u5c06\u8981\u6267\u884c\u7684\u64cd\u4f5c\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"rsync -avz -n /local/path/ user@remote:/remote/path/\n"})}),"\n",(0,l.jsx)(n.h2,{id:"6-\u8fdc\u7a0b\u540c\u6b65\u548c-ssh-\u914d\u7f6e-",children:"6. \u8fdc\u7a0b\u540c\u6b65\u548c SSH \u914d\u7f6e \ud83d\udd10"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"-e ssh"})," \u6307\u5b9a ",(0,l.jsx)(n.code,{children:"rsync"})," \u4f7f\u7528 SSH \u6765\u8fdb\u884c\u8fdc\u7a0b\u540c\u6b65\u3002\u4e0d\u8fc7\u73b0\u5728 ",(0,l.jsx)(n.code,{children:"rsync"})," \u9ed8\u8ba4\u4f7f\u7528 SSH \u534f\u8bae\u8fdb\u884c\u4f20\u8f93\u4e86\uff0c\u53ef\u4ee5\u4e0d\u5199 ",(0,l.jsx)(n.code,{children:"-e"})," \u53c2\u6570\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"rsync -av /local/path/ user@remote:/remote/path/\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u6307\u5b9a SSH \u7684\u53c2\u6570\u5c31\u5fc5\u987b ",(0,l.jsx)(n.code,{children:"-e"})," \u53c2\u6570"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-BASH",children:"rsync -av -e 'ssh -p 2234' /local/path/ user@remote:/remote/path/\n"})}),"\n",(0,l.jsx)(n.h3,{id:"61-\u914d\u7f6e\u514d\u5bc6\u767b\u5f55",children:"6.1 \u914d\u7f6e\u514d\u5bc6\u767b\u5f55"}),"\n",(0,l.jsxs)(n.p,{children:["\u4e3a\u4e86\u7b80\u5316\u64cd\u4f5c\uff0c\u53ef\u4ee5\u914d\u7f6e SSH \u7684\u514d\u5bc6\u767b\u5f55\u3002\u901a\u8fc7\u751f\u6210 SSH \u5bc6\u94a5\u5bf9\u5e76\u5c06\u516c\u94a5\u6dfb\u52a0\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\u7684 ",(0,l.jsx)(n.code,{children:"~/.ssh/authorized_keys"})," \u6587\u4ef6\u4e2d\uff0c\u5b9e\u73b0\u514d\u5bc6\u767b\u5f55\u3002\u6b65\u9aa4\u5982\u4e0b\uff1a"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u751f\u6210 SSH \u5bc6\u94a5\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"ssh-keygen\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5c06\u516c\u94a5\u590d\u5236\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"ssh-copy-id user@remote\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u914d\u7f6e\u5b8c\u514d\u5bc6\u767b\u5f55\u540e\uff0c\u4f60\u5c31\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"rsync"})," \u547d\u4ee4\u8fdb\u884c\u65e0\u5bc6\u7801\u7684\u6587\u4ef6\u540c\u6b65\u3002"]}),"\n",(0,l.jsxs)(n.admonition,{title:"\u4f7f\u7528 rsync \u7ba1\u7406\u9759\u6001\u7f51\u7ad9",type:"tip",children:[(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u7f51\u7ad9\u5f00\u53d1"}),(0,l.jsx)(n.br,{}),"\n\u4f60\u53ef\u4ee5\u4f7f\u7528\u591a\u79cd\u5de5\u5177\uff0c\u4f8b\u5982 docusaurus",(0,l.jsx)(n.br,{}),"\n\u7f16\u8f91\u5e76\u9884\u89c8\u7f51\u7ad9\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"npm start\n"})}),"\n\u751f\u6210\u7f51\u7ad9\u6e90\u6587\u4ef6\u5230 build \u76ee\u5f55\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"npm build\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u7f51\u7ad9\u53d1\u5e03"}),(0,l.jsx)(n.br,{}),"\n\u4f7f\u7528 rsync \u5c06 build \u76ee\u5f55\u540c\u6b65\u5230\u7f51\u7ad9\u6839\u76ee\u5f55\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"rsync -avz --delete /path/to/build/ user@remote:/path/to/www.zxzsk.com/\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"-z\uff1a\u538b\u7f29\u6570\u636e\u4f20\u8f93\u4ee5\u51cf\u5c11\u7f51\u7edc\u6d41\u91cf\u3002"}),"\n",(0,l.jsx)(n.li,{children:"--delete\uff1a\u540c\u6b65\u5220\u9664\u52a8\u4f5c\u3002"}),"\n"]}),"\n"]}),"\n"]}),(0,l.jsxs)(n.p,{children:["\u6700\u4f73\u5b9e\u8df5\uff1a\u7528 alias \u5c06 rsync \u540c\u6b65\u7f51\u7ad9\u6587\u4ef6\u7684\u547d\u4ee4\u5b9a\u4e49\u4e3a\u522b\u540d ",(0,l.jsx)(n.code,{children:"pushweb"})," \uff0c\u53ea\u9700\u8981\u5728\u7ec8\u7aef\u6267\u884c ",(0,l.jsx)(n.code,{children:"pushweb"})," \u5c31\u53ef\u4ee5\u66f4\u65b0\u7f51\u7ad9\u5185\u5bb9\u5566\uff01"]})]}),"\n",(0,l.jsx)(n.h2,{id:"7-\u8fdb\u9636\u7528\u6cd5-",children:"7. \u8fdb\u9636\u7528\u6cd5 \ud83d\udd27"}),"\n",(0,l.jsxs)(n.h3,{id:"71-\u4f7f\u7528---link-dest-\u589e\u91cf\u5907\u4efd",children:["7.1 \u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"--link-dest"})," \u589e\u91cf\u5907\u4efd"]}),"\n",(0,l.jsxs)(n.p,{children:["\u589e\u91cf\u5907\u4efd\u662f\u6307\u53ea\u5907\u4efd\u81ea\u4e0a\u6b21\u5907\u4efd\u4ee5\u6765\u53d1\u751f\u53d8\u5316\u7684\u6587\u4ef6\u3002",(0,l.jsx)(n.code,{children:"rsync"})," \u7684\u589e\u91cf\u5907\u4efd\u529f\u80fd\u901a\u8fc7\u6bd4\u8f83\u6587\u4ef6\u7684\u65f6\u95f4\u6233\u548c\u5927\u5c0f\u6765\u5b9e\u73b0\u3002\u53ef\u4ee5\u5c06\u5907\u4efd\u5b58\u50a8\u5230\u4e0d\u540c\u7684\u76ee\u5f55\u4e2d\uff0c\u6bcf\u6b21\u5907\u4efd\u53ea\u590d\u5236\u65b0\u53d8\u5316\u7684\u90e8\u5206\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u8bf4\u767d\u4e86\u5c31\u662f\u7c7b\u4f3c ",(0,l.jsx)(n.strong,{children:"\u5feb\u7167"})," \u529f\u80fd\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u7b2c\u4e00\u6b21\u5907\u4efd\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"rsync -av /data/ /backup/backup1/\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u5c06\u628a /data \u7684\u5185\u5bb9\u590d\u5236\u5230 /backup/backup1\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u7b2c\u4e8c\u6b21\u5907\u4efd\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"rsync -av --link-dest=/backup/backup1 /data/ /backup/backup2/\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u5c06\u628a /data \u4e2d\u7684\u65b0\u5185\u5bb9\u5907\u4efd\u5230 /backup/backup2\uff0c\u76f8\u540c\u7684\u6587\u4ef6\u5c06\u521b\u5efa\u786c\u94fe\u63a5\u3002"}),"\n",(0,l.jsxs)(n.admonition,{type:"tip",children:[(0,l.jsxs)(n.p,{children:["\u7b2c\u4e00\u6b21\u5907\u4efd\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"--link-dest"})," \u53c2\u6570\u53ef\u4ee5\u5417?"]}),(0,l.jsx)(n.p,{children:"\u4e0d\u53ef\u4ee5\uff1a\u56e0\u4e3a --link-dest \u53ea\u80fd\u7528\u4e8e\u589e\u91cf\u5907\u4efd\uff0c\u5b83\u9700\u8981\u4e00\u4e2a\u5df2\u7ecf\u5b58\u5728\u7684\u76ee\u5f55\u4f5c\u4e3a\u53c2\u8003\uff0c\u4ee5\u4fbf\u8fdb\u884c\u786c\u94fe\u63a5\u64cd\u4f5c\u3002\u5982\u679c\u76ee\u6807\u76ee\u5f55 /backup/backup1 \u662f\u7a7a\u7684\uff0crsync \u65e0\u6cd5\u901a\u8fc7\u786c\u94fe\u63a5\u65b9\u5f0f\u521b\u5efa\u6587\u4ef6\u3002"})]}),"\n",(0,l.jsxs)(n.h3,{id:"72-\u4f7f\u7528---bwlimit-\u9650\u5236\u5e26\u5bbd",children:["7.2 \u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"--bwlimit"})," \u9650\u5236\u5e26\u5bbd"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u4e0d\u5e0c\u671b ",(0,l.jsx)(n.code,{children:"rsync"})," \u5360\u7528\u5168\u90e8\u7f51\u7edc\u5e26\u5bbd\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"--bwlimit"})," \u9650\u5236\u6700\u5927\u5e26\u5bbd\u3002\u5355\u4f4d\u4e3a KB/s\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"rsync -av --bwlimit=100 /local/path/ user@remote:/remote/path/\n"})}),"\n",(0,l.jsx)(n.h2,{id:"8-\u5c0f\u7ed3-",children:"8. \u5c0f\u7ed3 \ud83d\udcda"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"rsync"})," \u662f\u4e00\u4e2a\u975e\u5e38\u5f3a\u5927\u548c\u9ad8\u6548\u7684\u6587\u4ef6\u540c\u6b65\u5de5\u5177\uff0c\u5e7f\u6cdb\u5e94\u7528\u4e8e\u6570\u636e\u5907\u4efd\u3001\u7cfb\u7edf\u8fc1\u79fb\u7b49\u573a\u666f\u3002\u5b83\u4e0d\u4ec5\u53ef\u4ee5\u5728\u672c\u5730\u673a\u5668\u4e4b\u95f4\u540c\u6b65\u6587\u4ef6\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7 SSH \u4e0e\u8fdc\u7a0b\u670d\u52a1\u5668\u8fdb\u884c\u540c\u6b65\uff0c\u652f\u6301\u589e\u91cf\u4f20\u8f93\u548c\u591a\u79cd\u4f18\u5316\u9009\u9879\u3002\u638c\u63e1 ",(0,l.jsx)(n.code,{children:"rsync"})," \u7684\u4f7f\u7528\u65b9\u6cd5\uff0c\u5c06\u5927\u5927\u63d0\u9ad8\u6587\u4ef6\u4f20\u8f93\u548c\u5907\u4efd\u7684\u6548\u7387\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5e0c\u671b\u8fd9\u7bc7\u6559\u7a0b\u5e2e\u52a9\u4f60\u66f4\u597d\u5730\u7406\u89e3\u5e76\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"rsync"}),"\uff01\u522b\u5fd8\u4e86\u6536\u85cf",(0,l.jsx)(n.strong,{children:"\u5728\u7ebf\u77e5\u8bc6\u5e93"}),"\uff08 ",(0,l.jsx)(n.a,{href:"http://www.zxzsk.com",children:"www.zxzsk.com"})," \uff09\u54e6\uff01\ud83d\ude0a"]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}}}]);