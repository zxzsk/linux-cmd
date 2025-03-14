"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3689],{8453:(e,n,c)=>{c.d(n,{R:()=>i,x:()=>a});var s=c(6540);const d={},r=s.createContext(d);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(r.Provider,{value:n},e.children)}},9987:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>o,frontMatter:()=>i,metadata:()=>s,toc:()=>t});const s=JSON.parse('{"id":"command/\u5305\u7ba1\u7406\u5668/apt-cache","title":"apt-cache","description":"\u2b50apt-cache \u67e5\u8be2\u548c\u7ba1\u7406 APT \u7684\u5305\u7f13\u5b58\u3002","source":"@site/docs/02-command/10-\u5305\u7ba1\u7406\u5668/12-apt-cache.md","sourceDirName":"02-command/10-\u5305\u7ba1\u7406\u5668","slug":"/command/\u5305\u7ba1\u7406\u5668/apt-cache","permalink":"/command/\u5305\u7ba1\u7406\u5668/apt-cache","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/02-command/10-\u5305\u7ba1\u7406\u5668/12-apt-cache.md","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"apt-get","permalink":"/command/\u5305\u7ba1\u7406\u5668/apt-get"},"next":{"title":"dpkg","permalink":"/command/\u5305\u7ba1\u7406\u5668/dpkg"}}');var d=c(4848),r=c(8453);const i={},a=void 0,l={},t=[{value:"1. \u7b80\u4ecb",id:"1-\u7b80\u4ecb",level:2},{value:"2. \u5e38\u89c1\u64cd\u4f5c\u6982\u89c8 \ud83d\udccb",id:"2-\u5e38\u89c1\u64cd\u4f5c\u6982\u89c8-",level:2},{value:"3. \u547d\u4ee4\u793a\u4f8b \u26a1",id:"3-\u547d\u4ee4\u793a\u4f8b-",level:2},{value:"3.1 \u641c\u7d22\u8f6f\u4ef6\u5305",id:"31-\u641c\u7d22\u8f6f\u4ef6\u5305",level:3},{value:"3.2 \u663e\u793a\u8f6f\u4ef6\u5305\u8be6\u7ec6\u4fe1\u606f",id:"32-\u663e\u793a\u8f6f\u4ef6\u5305\u8be6\u7ec6\u4fe1\u606f",level:3},{value:"3.3 \u663e\u793a\u8f6f\u4ef6\u5305\u7684\u4f9d\u8d56\u5173\u7cfb",id:"33-\u663e\u793a\u8f6f\u4ef6\u5305\u7684\u4f9d\u8d56\u5173\u7cfb",level:3},{value:"3.4 \u663e\u793a\u5305\u7684\u53cd\u5411\u4f9d\u8d56\u5173\u7cfb",id:"34-\u663e\u793a\u5305\u7684\u53cd\u5411\u4f9d\u8d56\u5173\u7cfb",level:3},{value:"3.5 \u663e\u793a\u8f6f\u4ef6\u5305\u7684\u7248\u672c\u4fe1\u606f",id:"35-\u663e\u793a\u8f6f\u4ef6\u5305\u7684\u7248\u672c\u4fe1\u606f",level:3},{value:"3.6 \u663e\u793a\u5df2\u5b89\u88c5\u5305\u7684\u4fe1\u606f",id:"36-\u663e\u793a\u5df2\u5b89\u88c5\u5305\u7684\u4fe1\u606f",level:3},{value:"4. \u5c0f\u8d34\u58eb \ud83d\udca1",id:"4-\u5c0f\u8d34\u58eb-",level:2},{value:"5. \u603b\u7ed3 \ud83c\udfaf",id:"5-\u603b\u7ed3-",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["\u2b50",(0,d.jsx)(n.code,{children:"apt-cache"})," \u67e5\u8be2\u548c\u7ba1\u7406 APT \u7684\u5305\u7f13\u5b58\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"1-\u7b80\u4ecb",children:"1. \u7b80\u4ecb"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"apt-cache"})," \u547d\u4ee4\u7528\u4e8e\u67e5\u8be2\u548c\u7ba1\u7406 APT \u7cfb\u7edf\u7684\u5305\u7f13\u5b58\u3002\u901a\u8fc7\u5b83\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b\u8f6f\u4ef6\u5305\u7684\u8be6\u7ec6\u4fe1\u606f\u3001\u641c\u7d22\u5df2\u7f13\u5b58\u7684\u8f6f\u4ef6\u5305\uff0c\u751a\u81f3\u7ba1\u7406\u5305\u7684\u72b6\u6001\u3002\u4e0e ",(0,d.jsx)(n.code,{children:"apt"})," \u548c ",(0,d.jsx)(n.code,{children:"apt-get"})," \u547d\u4ee4\u76f8\u6bd4\uff0c",(0,d.jsx)(n.code,{children:"apt-cache"})," \u66f4\u4e13\u6ce8\u4e8e\u7f13\u5b58\u7684\u67e5\u8be2\u548c\u4fe1\u606f\u7684\u83b7\u53d6\u3002\ud83d\udca1"]}),"\n",(0,d.jsx)(n.h2,{id:"2-\u5e38\u89c1\u64cd\u4f5c\u6982\u89c8-",children:"2. \u5e38\u89c1\u64cd\u4f5c\u6982\u89c8 \ud83d\udccb"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u64cd\u4f5c"}),(0,d.jsx)(n.th,{children:"\u547d\u4ee4\u683c\u5f0f"}),(0,d.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u641c\u7d22\u8f6f\u4ef6\u5305"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"apt-cache search <\u5173\u952e\u8bcd>"})}),(0,d.jsx)(n.td,{children:"\u5728\u672c\u5730\u7f13\u5b58\u4e2d\u641c\u7d22\u5305\u542b\u5173\u952e\u8bcd\u7684\u8f6f\u4ef6\u5305\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u663e\u793a\u8f6f\u4ef6\u5305\u8be6\u7ec6\u4fe1\u606f"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"apt-cache show <\u8f6f\u4ef6\u5305\u540d>"})}),(0,d.jsx)(n.td,{children:"\u663e\u793a\u6307\u5b9a\u8f6f\u4ef6\u5305\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u663e\u793a\u5305\u7684\u4f9d\u8d56\u5173\u7cfb"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"apt-cache depends <\u8f6f\u4ef6\u5305\u540d>"})}),(0,d.jsx)(n.td,{children:"\u663e\u793a\u6307\u5b9a\u8f6f\u4ef6\u5305\u7684\u4f9d\u8d56\u5173\u7cfb\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u663e\u793a\u5305\u7684\u53cd\u5411\u4f9d\u8d56\u5173\u7cfb"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"apt-cache rdepends <\u8f6f\u4ef6\u5305\u540d>"})}),(0,d.jsx)(n.td,{children:"\u663e\u793a\u4f9d\u8d56\u6307\u5b9a\u8f6f\u4ef6\u5305\u7684\u5176\u4ed6\u5305\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u663e\u793a\u8f6f\u4ef6\u5305\u7684\u7248\u672c\u4fe1\u606f"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"apt-cache showpkg <\u8f6f\u4ef6\u5305\u540d>"})}),(0,d.jsx)(n.td,{children:"\u663e\u793a\u6307\u5b9a\u8f6f\u4ef6\u5305\u7684\u7248\u672c\u4fe1\u606f\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u663e\u793a\u5df2\u5b89\u88c5\u5305\u7684\u4fe1\u606f"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"apt-cache stats"})}),(0,d.jsx)(n.td,{children:"\u663e\u793a\u5305\u7f13\u5b58\u7684\u7edf\u8ba1\u4fe1\u606f\u3002"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"3-\u547d\u4ee4\u793a\u4f8b-",children:"3. \u547d\u4ee4\u793a\u4f8b \u26a1"}),"\n",(0,d.jsx)(n.h3,{id:"31-\u641c\u7d22\u8f6f\u4ef6\u5305",children:"3.1 \u641c\u7d22\u8f6f\u4ef6\u5305"}),"\n",(0,d.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"apt-cache search"})," \u6765\u641c\u7d22\u67d0\u4e2a\u5173\u952e\u8bcd\u76f8\u5173\u7684\u8f6f\u4ef6\u5305\u3002\u4f8b\u5982\uff0c\u641c\u7d22\u5305\u542b ",(0,d.jsx)(n.code,{children:"git"})," \u7684\u8f6f\u4ef6\u5305\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ apt-cache search git\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"git - fast, scalable, distributed revision control system\r\ngit-man - Git manual pages\r\ngit-doc - Git documentation\r\n...\n"})}),"\n",(0,d.jsx)(n.h3,{id:"32-\u663e\u793a\u8f6f\u4ef6\u5305\u8be6\u7ec6\u4fe1\u606f",children:"3.2 \u663e\u793a\u8f6f\u4ef6\u5305\u8be6\u7ec6\u4fe1\u606f"}),"\n",(0,d.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"apt-cache show"})," \u6765\u67e5\u770b\u67d0\u4e2a\u8f6f\u4ef6\u5305\u7684\u8be6\u7ec6\u4fe1\u606f\u3002\u4f8b\u5982\uff0c\u67e5\u770b ",(0,d.jsx)(n.code,{children:"git"})," \u7684\u4fe1\u606f\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ apt-cache show git\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"Package: git\r\nVersion: 1:2.25.1-1ubuntu3.2\r\nPriority: optional\r\nSection: vcs\r\nMaintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>\r\n...\r\nDescription: fast, scalable, distributed revision control system\n"})}),"\n",(0,d.jsx)(n.h3,{id:"33-\u663e\u793a\u8f6f\u4ef6\u5305\u7684\u4f9d\u8d56\u5173\u7cfb",children:"3.3 \u663e\u793a\u8f6f\u4ef6\u5305\u7684\u4f9d\u8d56\u5173\u7cfb"}),"\n",(0,d.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"apt-cache depends"})," \u67e5\u770b\u67d0\u4e2a\u8f6f\u4ef6\u5305\u7684\u4f9d\u8d56\u5173\u7cfb\u3002\u4f8b\u5982\uff0c\u67e5\u770b ",(0,d.jsx)(n.code,{children:"git"})," \u7684\u4f9d\u8d56\u5173\u7cfb\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ apt-cache depends git\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"git\r\n  Depends: git-man\r\n  Depends: libc6\r\n  Depends: libcurl4\r\n  Depends: libssl1.1\r\n  Depends: ...\n"})}),"\n",(0,d.jsx)(n.h3,{id:"34-\u663e\u793a\u5305\u7684\u53cd\u5411\u4f9d\u8d56\u5173\u7cfb",children:"3.4 \u663e\u793a\u5305\u7684\u53cd\u5411\u4f9d\u8d56\u5173\u7cfb"}),"\n",(0,d.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"apt-cache rdepends"})," \u6765\u67e5\u770b\u54ea\u4e9b\u8f6f\u4ef6\u5305\u4f9d\u8d56\u4e8e\u67d0\u4e2a\u8f6f\u4ef6\u5305\u3002\u4f8b\u5982\uff0c\u67e5\u770b\u4f9d\u8d56 ",(0,d.jsx)(n.code,{children:"git"})," \u7684\u8f6f\u4ef6\u5305\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ apt-cache rdepends git\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"git\r\n  Reverse Depends:\r\n    depends: git-core\r\n    depends: git-doc\r\n    depends: git-man\r\n    ...\n"})}),"\n",(0,d.jsx)(n.h3,{id:"35-\u663e\u793a\u8f6f\u4ef6\u5305\u7684\u7248\u672c\u4fe1\u606f",children:"3.5 \u663e\u793a\u8f6f\u4ef6\u5305\u7684\u7248\u672c\u4fe1\u606f"}),"\n",(0,d.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"apt-cache showpkg"})," \u67e5\u770b\u8f6f\u4ef6\u5305\u7684\u7248\u672c\u4fe1\u606f\u3002\u4f8b\u5982\uff0c\u67e5\u770b ",(0,d.jsx)(n.code,{children:"git"})," \u7684\u7248\u672c\u4fe1\u606f\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ apt-cache showpkg git\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"Package: git\r\nVersions: \r\n1:2.25.1-1ubuntu3.2\r\n...\n"})}),"\n",(0,d.jsx)(n.h3,{id:"36-\u663e\u793a\u5df2\u5b89\u88c5\u5305\u7684\u4fe1\u606f",children:"3.6 \u663e\u793a\u5df2\u5b89\u88c5\u5305\u7684\u4fe1\u606f"}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u5e0c\u671b\u67e5\u770b\u5305\u7f13\u5b58\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"apt-cache stats"}),"\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ apt-cache stats\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"Package cache statistics:\r\n  123 packages\r\n  5671 packages are installed\r\n  7896 packages can be upgraded\n"})}),"\n",(0,d.jsx)(n.h2,{id:"4-\u5c0f\u8d34\u58eb-",children:"4. \u5c0f\u8d34\u58eb \ud83d\udca1"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u7f13\u5b58\u7ba1\u7406"}),"\uff1a",(0,d.jsx)(n.code,{children:"apt-cache"})," \u662f\u67e5\u8be2\u672c\u5730\u5305\u7f13\u5b58\u7684\u5de5\u5177\uff0c\u9002\u5408\u67e5\u770b\u5df2\u7ecf\u4e0b\u8f7d\u7684\u5305\u7684\u4fe1\u606f\u3002\u5982\u679c\u4f60\u9700\u8981\u4e0e\u8fdc\u7a0b\u6e90\u8fdb\u884c\u4ea4\u4e92\uff0c\u5e94\u8be5\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"apt"})," \u6216 ",(0,d.jsx)(n.code,{children:"apt-get"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u4f9d\u8d56\u5206\u6790"}),"\uff1a\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"apt-cache depends"})," \u548c ",(0,d.jsx)(n.code,{children:"apt-cache rdepends"})," \u53ef\u4ee5\u5e2e\u52a9\u4f60\u66f4\u597d\u5730\u7406\u89e3\u5305\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u8f6f\u4ef6\u51b2\u7a81\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"5-\u603b\u7ed3-",children:"5. \u603b\u7ed3 \ud83c\udfaf"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"apt-cache"})," \u662f\u4e00\u4e2a\u975e\u5e38\u6709\u7528\u7684\u5de5\u5177\uff0c\u5c24\u5176\u9002\u7528\u4e8e\u67e5\u8be2\u548c\u7ba1\u7406\u8f6f\u4ef6\u5305\u7f13\u5b58\u3002\u5b83\u53ef\u4ee5\u5e2e\u52a9\u4f60\u5feb\u901f\u4e86\u89e3\u8f6f\u4ef6\u5305\u7684\u8be6\u7ec6\u4fe1\u606f\u3001\u4f9d\u8d56\u5173\u7cfb\u53ca\u7248\u672c\u7b49\u3002\u638c\u63e1 ",(0,d.jsx)(n.code,{children:"apt-cache"})," \u547d\u4ee4\u5c06\u63d0\u5347\u4f60\u5728 Debian \u548c Ubuntu \u7cfb\u7edf\u4e2d\u7ba1\u7406\u8f6f\u4ef6\u5305\u7684\u6548\u7387\u3002\ud83d\udda5\ufe0f"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5e0c\u671b\u8fd9\u7bc7\u6559\u7a0b\u5e2e\u52a9\u4f60\u66f4\u597d\u5730\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"apt-cache"})," \u547d\u4ee4\uff01\u522b\u5fd8\u4e86\u6536\u85cf ",(0,d.jsx)(n.strong,{children:"\u5728\u7ebf\u77e5\u8bc6\u5e93"}),"\uff08 ",(0,d.jsx)(n.a,{href:"http://www.zxzsk.com",children:"www.zxzsk.com"})," \uff09\u54e6\uff01\ud83d\ude0a"]})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}}}]);