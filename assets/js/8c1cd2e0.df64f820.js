"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7465],{6270:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>h,toc:()=>t});const h=JSON.parse('{"id":"command/\u7ec8\u7aef\u6548\u7387/zsh","title":"\u6d4b\u8bd5","description":"Zsh\uff08Z Shell\uff09\u662f\u4e00\u4e2a\u529f\u80fd\u5f3a\u5927\u7684 Unix/Linux shell\uff0c\u5b83\u662f Bourne Shell\uff08sh\uff09\u7684\u6269\u5c55\u7248\u672c\uff0c\u63d0\u4f9b\u4e86\u8bb8\u591a\u589e\u5f3a\u529f\u80fd\uff0c\u5982\u66f4\u597d\u7684\u81ea\u52a8\u8865\u5168\u3001\u4e3b\u9898\u652f\u6301\u3001\u63d2\u4ef6\u7cfb\u7edf\u7b49\u3002","source":"@site/docs/02-command/15-\u7ec8\u7aef\u6548\u7387/zsh.md","sourceDirName":"02-command/15-\u7ec8\u7aef\u6548\u7387","slug":"/a51875bd","permalink":"/a51875bd","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/02-command/15-\u7ec8\u7aef\u6548\u7387/zsh.md","tags":[],"version":"current","frontMatter":{"title":"\u6d4b\u8bd5","slug":"/a51875bd"},"sidebar":"tutorialSidebar","previous":{"title":"fish","permalink":"/2b00637e"},"next":{"title":"\u6587\u4ef6\u7ba1\u7406","permalink":"/category/\u6587\u4ef6\u7ba1\u7406"}}');var l=n(4848),i=n(8453);const c={title:"\u6d4b\u8bd5",slug:"/a51875bd"},r=void 0,d={},t=[{value:"\u5b89\u88c5 Zsh",id:"\u5b89\u88c5-zsh",level:3},{value:"\u8bbe\u7f6e Zsh \u4e3a\u9ed8\u8ba4 Shell",id:"\u8bbe\u7f6e-zsh-\u4e3a\u9ed8\u8ba4-shell",level:3},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u63d2\u4ef6\u548c\u4e3b\u9898",id:"\u63d2\u4ef6\u548c\u4e3b\u9898",level:3},{value:"\u5b89\u88c5 Oh My Zsh",id:"\u5b89\u88c5-oh-my-zsh",level:4},{value:"\u4f7f\u7528\u63d2\u4ef6",id:"\u4f7f\u7528\u63d2\u4ef6",level:4},{value:"\u4f7f\u7528\u4e3b\u9898",id:"\u4f7f\u7528\u4e3b\u9898",level:4},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:3},{value:"\u5176\u4ed6\u5de5\u5177",id:"\u5176\u4ed6\u5de5\u5177",level:3},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",level:3}];function o(s){const e={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.p,{children:"Zsh\uff08Z Shell\uff09\u662f\u4e00\u4e2a\u529f\u80fd\u5f3a\u5927\u7684 Unix/Linux shell\uff0c\u5b83\u662f Bourne Shell\uff08sh\uff09\u7684\u6269\u5c55\u7248\u672c\uff0c\u63d0\u4f9b\u4e86\u8bb8\u591a\u589e\u5f3a\u529f\u80fd\uff0c\u5982\u66f4\u597d\u7684\u81ea\u52a8\u8865\u5168\u3001\u4e3b\u9898\u652f\u6301\u3001\u63d2\u4ef6\u7cfb\u7edf\u7b49\u3002"}),"\n",(0,l.jsx)(e.p,{children:"Zsh \u7684\u4f18\u70b9\u662f\u5bf9\u811a\u672c\u517c\u5bb9\u597d\uff0c\u7f3a\u70b9\u662f\u9700\u8981\u914d\u7f6e git\u3001oh my zsh\u3001\u9ad8\u4eae\u3001\u81ea\u52a8\u8865\u5168\u7b49\u63d2\u4ef6\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u5b89\u88c5-zsh",children:"\u5b89\u88c5 Zsh"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u5927\u591a\u6570 Linux \u53d1\u884c\u7248\u548c macOS \u4e0a\uff0cZsh \u53ef\u4ee5\u901a\u8fc7\u5305\u7ba1\u7406\u5668\u5b89\u88c5\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"Debian/Ubuntu"}),":"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo apt-get install zsh\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"Fedora"}),":"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo dnf install zsh\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"macOS"}),":"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"brew install zsh\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u8bbe\u7f6e-zsh-\u4e3a\u9ed8\u8ba4-shell",children:"\u8bbe\u7f6e Zsh \u4e3a\u9ed8\u8ba4 Shell"}),"\n",(0,l.jsx)(e.p,{children:"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u5c06 Zsh \u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u7684 shell\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"chsh -s $(which zsh)\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u914d\u7f6e\u6587\u4ef6",children:"\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,l.jsxs)(e.p,{children:["Zsh \u7684\u914d\u7f6e\u6587\u4ef6\u662f ",(0,l.jsx)(e.code,{children:"~/.zshrc"}),"\u3002\u4f60\u53ef\u4ee5\u5728\u8fd9\u4e2a\u6587\u4ef6\u4e2d\u6dfb\u52a0\u81ea\u5b9a\u4e49\u914d\u7f6e\u3001\u522b\u540d\u3001\u51fd\u6570\u7b49\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"\u63d2\u4ef6\u548c\u4e3b\u9898",children:"\u63d2\u4ef6\u548c\u4e3b\u9898"}),"\n",(0,l.jsx)(e.p,{children:"Zsh \u652f\u6301\u4e30\u5bcc\u7684\u63d2\u4ef6\u548c\u4e3b\u9898\uff0c\u53ef\u4ee5\u901a\u8fc7 Oh My Zsh \u6765\u7ba1\u7406\u3002"}),"\n",(0,l.jsx)(e.h4,{id:"\u5b89\u88c5-oh-my-zsh",children:"\u5b89\u88c5 Oh My Zsh"}),"\n",(0,l.jsx)(e.p,{children:"Oh My Zsh \u662f\u4e00\u4e2a\u793e\u533a\u9a71\u52a8\u7684\u6846\u67b6\uff0c\u7528\u4e8e\u7ba1\u7406 Zsh \u914d\u7f6e\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"\n'})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"DNS \u52ab\u6301\u5bfc\u81f4\u65e0\u6cd5\u4e0b\u8f7d\uff1f\u66ff\u6362 DNS \u914d\u7f6e"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"# \u5224\u65ad DNS \u52ab\u6301\nnslookup raw.githubusercontent.com\n\n# \u66ff\u6362 nameserver\n\u279c  ~ sed '/^#/d;/^$/d' /etc/resolv.conf\noptions edns0 trust-ad\nsearch wifi\nnameserver 8.8.8.8\nnameserver 1.1.1.1\n"})}),"\n"]}),"\n",(0,l.jsx)(e.h4,{id:"\u4f7f\u7528\u63d2\u4ef6",children:"\u4f7f\u7528\u63d2\u4ef6"}),"\n",(0,l.jsxs)(e.p,{children:["\u5b89\u88c5 ",(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.code,{children:"zsh-autosuggestions"})})," \u548c ",(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.code,{children:"zsh-syntax-highlighting"})})]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions\ngit clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5728 ",(0,l.jsx)(e.code,{children:"~/.zshrc"})," \u4e2d\uff0c\u4f60\u53ef\u4ee5\u542f\u7528\u63d2\u4ef6\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"plugins=(git zsh-autosuggestions zsh-syntax-highlighting)\n"})}),"\n",(0,l.jsx)(e.h4,{id:"\u4f7f\u7528\u4e3b\u9898",children:"\u4f7f\u7528\u4e3b\u9898"}),"\n",(0,l.jsxs)(e.p,{children:["\u540c\u6837\u5728 ",(0,l.jsx)(e.code,{children:"~/.zshrc"})," \u4e2d\uff0c\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u4e3b\u9898\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'ZSH_THEME="robbyrussell"\n'})}),"\n",(0,l.jsx)(e.h3,{id:"\u5e38\u7528\u547d\u4ee4",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u67e5\u770b\u5f53\u524d\u4f7f\u7528\u7684 shell"}),":"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"echo $SHELL\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsxs)(e.strong,{children:["\u91cd\u65b0\u52a0\u8f7d ",(0,l.jsx)(e.code,{children:".zshrc"})," \u6587\u4ef6"]}),":"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"source ~/.zshrc\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u5176\u4ed6\u5de5\u5177",children:"\u5176\u4ed6\u5de5\u5177"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"zsh-autosuggestions"}),": \u63d0\u4f9b\u547d\u4ee4\u81ea\u52a8\u8865\u5168\u5efa\u8bae\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"zsh-syntax-highlighting"}),": \u63d0\u4f9b\u547d\u4ee4\u8bed\u6cd5\u9ad8\u4eae\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u53c2\u8003\u6587\u6863",children:"\u53c2\u8003\u6587\u6863"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://zsh.sourceforge.io/Doc/",children:"Zsh \u5b98\u65b9\u6587\u6863"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://github.com/ohmyzsh/ohmyzsh",children:"Oh My Zsh GitHub"})}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u901a\u8fc7\u8fd9\u4e9b\u5de5\u5177\u548c\u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u6781\u5927\u5730\u63d0\u5347\u547d\u4ee4\u884c\u64cd\u4f5c\u7684\u6548\u7387\u548c\u4f53\u9a8c\u3002"})]})}function a(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(o,{...s})}):o(s)}},8453:(s,e,n)=>{n.d(e,{R:()=>c,x:()=>r});var h=n(6540);const l={},i=h.createContext(l);function c(s){const e=h.useContext(i);return h.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:c(s.components),h.createElement(i.Provider,{value:e},s.children)}}}]);