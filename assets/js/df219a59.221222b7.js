"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2662],{8453:(s,e,n)=>{n.d(e,{R:()=>h,x:()=>d});var l=n(6540);const i={},c=l.createContext(i);function h(s){const e=l.useContext(c);return l.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function d(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:h(s.components),l.createElement(c.Provider,{value:e},s.children)}},8608:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>d,default:()=>o,frontMatter:()=>h,metadata:()=>l,toc:()=>x});const l=JSON.parse('{"id":"command/\u7ec8\u7aef\u6548\u7387/fish","title":"fish","description":"fish\uff08Friendly Interactive SHell\uff09\u662f\u4e00\u4e2a\u73b0\u4ee3\u5316\u7684\u3001\u7528\u6237\u53cb\u597d\u7684\u547d\u4ee4\u884c shell\uff0c\u65e8\u5728\u63d0\u4f9b\u66f4\u597d\u7684\u7528\u6237\u4f53\u9a8c\u548c\u66f4\u76f4\u89c2\u7684\u4ea4\u4e92\u3002\u5b83\u662f bash\u3001zsh \u7b49\u4f20\u7edf shell \u7684\u66ff\u4ee3\u54c1\uff0c\u5177\u6709\u8bed\u6cd5\u9ad8\u4eae\u3001\u81ea\u52a8\u5efa\u8bae\u3001\u66f4\u53cb\u597d\u7684\u811a\u672c\u8bed\u6cd5\u7b49\u7279\u6027\u3002\u9009\u62e9 fish \u7684\u552f\u4e00\u539f\u56e0\u662f\u201c\u5f00\u7bb1\u5373\u7528\u201d\u3002","source":"@site/docs/02-command/15-\u7ec8\u7aef\u6548\u7387/fish.md","sourceDirName":"02-command/15-\u7ec8\u7aef\u6548\u7387","slug":"/2b00637e","permalink":"/2b00637e","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/02-command/15-\u7ec8\u7aef\u6548\u7387/fish.md","tags":[],"version":"current","frontMatter":{"slug":"/2b00637e"},"sidebar":"tutorialSidebar","previous":{"title":"\u7ec8\u7aef\u6548\u7387","permalink":"/category/\u7ec8\u7aef\u6548\u7387"},"next":{"title":"\u6d4b\u8bd5","permalink":"/a51875bd"}}');var i=n(4848),c=n(8453);const h={slug:"/2b00637e"},d=void 0,r={},x=[{value:"\u5b89\u88c5 <code>fish</code>",id:"\u5b89\u88c5-fish",level:2},{value:"\u542f\u52a8 <code>fish</code>",id:"\u542f\u52a8-fish",level:2},{value:"\u5c06 <code>fish</code> \u8bbe\u4e3a\u9ed8\u8ba4 shell",id:"\u5c06-fish-\u8bbe\u4e3a\u9ed8\u8ba4-shell",level:2},{value:"<code>fish</code> \u7684\u4e3b\u8981\u7279\u6027",id:"fish-\u7684\u4e3b\u8981\u7279\u6027",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2},{value:"\u81ea\u5b9a\u4e49\u914d\u7f6e",id:"\u81ea\u5b9a\u4e49\u914d\u7f6e",level:2},{value:"\u4e0e\u5176\u4ed6 shell \u7684\u533a\u522b",id:"\u4e0e\u5176\u4ed6-shell-\u7684\u533a\u522b",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function j(s){const e={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...s.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"fish"}),"\uff08Friendly Interactive SHell\uff09\u662f\u4e00\u4e2a\u73b0\u4ee3\u5316\u7684\u3001\u7528\u6237\u53cb\u597d\u7684\u547d\u4ee4\u884c shell\uff0c\u65e8\u5728\u63d0\u4f9b\u66f4\u597d\u7684\u7528\u6237\u4f53\u9a8c\u548c\u66f4\u76f4\u89c2\u7684\u4ea4\u4e92\u3002\u5b83\u662f ",(0,i.jsx)(e.code,{children:"bash"}),"\u3001",(0,i.jsx)(e.code,{children:"zsh"})," \u7b49\u4f20\u7edf shell \u7684\u66ff\u4ee3\u54c1\uff0c\u5177\u6709\u8bed\u6cd5\u9ad8\u4eae\u3001\u81ea\u52a8\u5efa\u8bae\u3001\u66f4\u53cb\u597d\u7684\u811a\u672c\u8bed\u6cd5\u7b49\u7279\u6027\u3002\u9009\u62e9 fish \u7684\u552f\u4e00\u539f\u56e0\u662f\u201c\u5f00\u7bb1\u5373\u7528\u201d\u3002"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://fishshell.com/",children:"https://fishshell.com/"})}),"\n",(0,i.jsxs)(e.h2,{id:"\u5b89\u88c5-fish",children:["\u5b89\u88c5 ",(0,i.jsx)(e.code,{children:"fish"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u5927\u591a\u6570 Linux \u53d1\u884c\u7248\u548c macOS \u4e0a\uff0c\u53ef\u4ee5\u901a\u8fc7\u5305\u7ba1\u7406\u5668\u5b89\u88c5 ",(0,i.jsx)(e.code,{children:"fish"}),"\u3002"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Debian/Ubuntu"}),":"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo apt install fish\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Fedora"}),":"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo dnf install fish\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"macOS"})," (\u4f7f\u7528 Homebrew):"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"brew install fish\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Arch Linux"}),":"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo pacman -S fish\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.h2,{id:"\u542f\u52a8-fish",children:["\u542f\u52a8 ",(0,i.jsx)(e.code,{children:"fish"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8 ",(0,i.jsx)(e.code,{children:"fish"}),"\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"fish\n"})}),"\n",(0,i.jsxs)(e.h2,{id:"\u5c06-fish-\u8bbe\u4e3a\u9ed8\u8ba4-shell",children:["\u5c06 ",(0,i.jsx)(e.code,{children:"fish"})," \u8bbe\u4e3a\u9ed8\u8ba4 shell"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u4f60\u60f3\u5c06 ",(0,i.jsx)(e.code,{children:"fish"})," \u8bbe\u4e3a\u9ed8\u8ba4 shell\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"chsh -s $(which fish)\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u6ce8\u610f\uff1a\u5728\u67d0\u4e9b\u7cfb\u7edf\u4e0a\uff0c",(0,i.jsx)(e.code,{children:"fish"})," \u53ef\u80fd\u4e0d\u5728 ",(0,i.jsx)(e.code,{children:"/etc/shells"})," \u4e2d\uff0c\u9700\u8981\u624b\u52a8\u6dfb\u52a0\u3002"]}),"\n",(0,i.jsxs)(e.h2,{id:"fish-\u7684\u4e3b\u8981\u7279\u6027",children:[(0,i.jsx)(e.code,{children:"fish"})," \u7684\u4e3b\u8981\u7279\u6027"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u8bed\u6cd5\u9ad8\u4eae"}),"\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u8f93\u5165\u547d\u4ee4\u65f6\uff0c",(0,i.jsx)(e.code,{children:"fish"})," \u4f1a\u81ea\u52a8\u9ad8\u4eae\u663e\u793a\u6709\u6548\u7684\u547d\u4ee4\u3001\u8def\u5f84\u548c\u9009\u9879\uff0c\u5e2e\u52a9\u4f60\u5feb\u901f\u53d1\u73b0\u9519\u8bef\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u81ea\u52a8\u5efa\u8bae"}),"\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u8f93\u5165\u547d\u4ee4\u65f6\uff0c",(0,i.jsx)(e.code,{children:"fish"})," \u4f1a\u6839\u636e\u5386\u53f2\u8bb0\u5f55\u548c\u5f53\u524d\u76ee\u5f55\u5185\u5bb9\u63d0\u4f9b\u81ea\u52a8\u5efa\u8bae\uff0c\u6309 ",(0,i.jsx)(e.code,{children:"\u2192"})," \u6216 ",(0,i.jsx)(e.code,{children:"Tab"})," \u53ef\u4ee5\u63a5\u53d7\u5efa\u8bae\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u66f4\u53cb\u597d\u7684\u811a\u672c\u8bed\u6cd5"}),"\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"fish"})," \u7684\u811a\u672c\u8bed\u6cd5\u66f4\u7b80\u6d01\u76f4\u89c2\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-fish",children:'for i in (seq 1 10)\n  echo "Number $i"\nend\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u574f\u5904\u662f\u5927\u591a\u6570.sh \u811a\u672c\u90fd\u662f bash \u683c\u5f0f\uff0c\u4e0d\u80fd\u76f4\u63a5\u7528 fish \u6267\u884c\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u5185\u7f6e\u5e2e\u52a9"}),"\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"help"})," \u547d\u4ee4\u53ef\u4ee5\u6253\u5f00 ",(0,i.jsx)(e.code,{children:"fish"})," \u7684\u4ea4\u4e92\u5f0f\u5e2e\u52a9\u6587\u6863\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u66f4\u667a\u80fd\u7684\u547d\u4ee4\u8865\u5168"}),"\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"fish"})," \u63d0\u4f9b\u4e86\u66f4\u5f3a\u5927\u7684\u547d\u4ee4\u8865\u5168\u529f\u80fd\uff0c\u652f\u6301\u547d\u4ee4\u3001\u53c2\u6570\u548c\u6587\u4ef6\u8def\u5f84\u7684\u8865\u5168\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u5e38\u7528\u547d\u4ee4",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf"}),"\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-fish",children:'set -x MY_VAR "value"\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u67e5\u770b\u73af\u5883\u53d8\u91cf"}),"\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-fish",children:"echo $MY_VAR\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsxs)(e.strong,{children:["\u7f16\u8f91 ",(0,i.jsx)(e.code,{children:"fish"})," \u914d\u7f6e"]}),"\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-fish",children:"fish_config\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u8fd9\u4f1a\u6253\u5f00\u4e00\u4e2a\u7f51\u9875\u754c\u9762\uff0c\u7528\u4e8e\u914d\u7f6e ",(0,i.jsx)(e.code,{children:"fish"})," \u7684\u5916\u89c2\u548c\u884c\u4e3a\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u67e5\u770b\u5386\u53f2\u8bb0\u5f55"}),"\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-fish",children:"history\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsxs)(e.strong,{children:["\u9000\u51fa ",(0,i.jsx)(e.code,{children:"fish"})]}),"\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-fish",children:"exit\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u81ea\u5b9a\u4e49\u914d\u7f6e",children:"\u81ea\u5b9a\u4e49\u914d\u7f6e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"fish"})," \u7684\u914d\u7f6e\u6587\u4ef6\u4f4d\u4e8e ",(0,i.jsx)(e.code,{children:"~/.config/fish/config.fish"}),"\uff0c\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u6dfb\u52a0\u81ea\u5b9a\u4e49\u914d\u7f6e\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-fish",children:'# \u8bbe\u7f6e\u522b\u540d\nalias ll="ls -la"\n\n# \u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\nset -x PATH $PATH ~/my_custom_path\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u4e0e\u5176\u4ed6-shell-\u7684\u533a\u522b",children:"\u4e0e\u5176\u4ed6 shell \u7684\u533a\u522b"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"fish"})," \u7684\u811a\u672c\u8bed\u6cd5\u4e0e ",(0,i.jsx)(e.code,{children:"bash"})," \u4e0d\u540c\uff0c\u4f8b\u5982\uff1a\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"fish"})," \u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"and"})," \u548c ",(0,i.jsx)(e.code,{children:"or"})," \u4ee3\u66ff ",(0,i.jsx)(e.code,{children:"&&"})," \u548c ",(0,i.jsx)(e.code,{children:"||"}),"\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"fish"})," \u7684\u53d8\u91cf\u4e0d\u9700\u8981 ",(0,i.jsx)(e.code,{children:"$"})," \u7b26\u53f7\u6765\u5f15\u7528\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"fish"})," \u7684\u5faa\u73af\u548c\u6761\u4ef6\u8bed\u53e5\u66f4\u7b80\u6d01\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"fish"})," \u662f\u4e00\u4e2a\u975e\u5e38\u9002\u5408\u4ea4\u4e92\u5f0f\u4f7f\u7528\u7684 shell\uff0c\u7279\u522b\u9002\u5408\u90a3\u4e9b\u5e0c\u671b\u63d0\u9ad8\u547d\u4ee4\u884c\u6548\u7387\u7684\u7528\u6237\u3002\u5982\u679c\u4f60\u5bf9\u4f20\u7edf shell \u7684\u590d\u6742\u8bed\u6cd5\u611f\u5230\u56f0\u6270\uff0c",(0,i.jsx)(e.code,{children:"fish"})," \u662f\u4e00\u4e2a\u503c\u5f97\u5c1d\u8bd5\u7684\u66ff\u4ee3\u54c1\u3002"]})]})}function o(s={}){const{wrapper:e}={...(0,c.R)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(j,{...s})}):j(s)}}}]);