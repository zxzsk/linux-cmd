"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5876],{727:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>h});const d=JSON.parse('{"id":"\u6587\u4ef6\u7ba1\u7406/\u67e5\u770b\u3001\u67e5\u627e\u3001\u6bd4\u8f83/find","title":"find","description":"\u2b50\u2b50\u67e5\u627e\u6587\u4ef6","source":"@site/docs/20-\u6587\u4ef6\u7ba1\u7406/\u67e5\u770b\u3001\u67e5\u627e\u3001\u6bd4\u8f83/find.md","sourceDirName":"20-\u6587\u4ef6\u7ba1\u7406/\u67e5\u770b\u3001\u67e5\u627e\u3001\u6bd4\u8f83","slug":"/59035de5","permalink":"/59035de5","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/20-\u6587\u4ef6\u7ba1\u7406/\u67e5\u770b\u3001\u67e5\u627e\u3001\u6bd4\u8f83/find.md","tags":[],"version":"current","lastUpdatedAt":1742246204000,"frontMatter":{"slug":"/59035de5"},"sidebar":"\u6587\u4ef6\u7ba1\u7406","previous":{"title":"file","permalink":"/2e8f7a9d"},"next":{"title":"locate","permalink":"/d720c7ab"}}');var i=s(4848),c=s(8453);const r={slug:"/59035de5"},l=void 0,t={},h=[{value:"1. \u547d\u4ee4\u7b80\u4ecb",id:"1-\u547d\u4ee4\u7b80\u4ecb",level:2},{value:"2. \u547d\u4ee4\u53c2\u6570",id:"2-\u547d\u4ee4\u53c2\u6570",level:2},{value:"3. \u547d\u4ee4\u793a\u4f8b",id:"3-\u547d\u4ee4\u793a\u4f8b",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u2b50\u2b50\u67e5\u627e\u6587\u4ef6"}),"\n",(0,i.jsx)(n.h2,{id:"1-\u547d\u4ee4\u7b80\u4ecb",children:"1. \u547d\u4ee4\u7b80\u4ecb"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"find"})," \u547d\u4ee4\u662f\u7528\u6765\u5728\u6587\u4ef6\u7cfb\u7edf\u4e2d\u201c\u6316\u6398\u201d\u6587\u4ef6\u548c\u76ee\u5f55\u7684\u795e\u5668\uff01\ud83d\udd75\ufe0f\u200d\u2642\ufe0f\u53ea\u9700\u544a\u8bc9\u5b83\u8d77\u70b9\u548c\u6761\u4ef6\uff0c\u5b83\u5c31\u80fd\u5e2e\u4f60\u627e\u5230\u6240\u6709\u60f3\u8981\u7684\u6587\u4ef6\u3002\u662f\u4e0d\u662f\u5f88\u795e\u5947\uff1f\u2728"]}),"\n",(0,i.jsxs)(n.p,{children:["\u76f8\u5173\u547d\u4ee4\uff1a",(0,i.jsx)(n.code,{children:"locate"}),"\u3001",(0,i.jsx)(n.code,{children:"whereis"}),"\u2014\u2014\u627e\u6587\u4ef6\u7684\u65b9\u5f0f\u591a\u79cd\u591a\u6837\uff0c\u4f46 ",(0,i.jsx)(n.code,{children:"find"})," \u547d\u4ee4\u6c38\u8fdc\u662f\u6700\u53ef\u9760\u7684\u90a3\u4e00\u4e2a\uff01\ud83d\ude09"]}),"\n",(0,i.jsx)(n.h2,{id:"2-\u547d\u4ee4\u53c2\u6570",children:"2. \u547d\u4ee4\u53c2\u6570"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"find [\u8d77\u59cb\u76ee\u5f55] [\u5339\u914d\u6a21\u5f0f] [\u6761\u4ef6]\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5e38\u7528\u9009\u9879\u548c\u53c2\u6570\uff0c\u51c6\u5907\u597d\u4e86\u5417\uff1f\ud83d\ude80"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-name pattern"}),"\uff1a\u6839\u636e\u6587\u4ef6\u540d\u6a21\u5f0f\u67e5\u627e\u6587\u4ef6 \ud83d\udcdd"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-type type"}),"\uff1a\u6839\u636e\u6587\u4ef6\u7c7b\u578b\u67e5\u627e\u6587\u4ef6\uff08\u6bd4\u5982 ",(0,i.jsx)(n.code,{children:"f"})," \u4ee3\u8868\u666e\u901a\u6587\u4ef6\uff0c",(0,i.jsx)(n.code,{children:"d"})," \u4ee3\u8868\u76ee\u5f55\uff09\ud83d\udcc2"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-exec command {} \\;"}),"\uff1a\u627e\u5230\u6587\u4ef6\u540e\uff0c\u6765\u4e2a\u201c\u64cd\u4f5c\u6307\u4ee4\u201d\uff01\ud83d\ude80"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-size [+/-]size"}),"\uff1a\u6839\u636e\u6587\u4ef6\u5927\u5c0f\u67e5\u627e\u6587\u4ef6\uff08\u7528 ",(0,i.jsx)(n.code,{children:"M"})," \u8868\u793aMB\uff0c",(0,i.jsx)(n.code,{children:"k"})," \u8868\u793aKB\uff0c",(0,i.jsx)(n.code,{children:"c"})," \u8868\u793a\u5b57\u8282\uff0c\u5927\u5c0f\u968f\u4f60\u5b9a\uff01\ud83d\udccf\uff09"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-mtime n"}),"\uff1a\u627e\u5230\u6700\u8fd1 ",(0,i.jsx)(n.code,{children:"n"})," \u5929\u4fee\u6539\u7684\u6587\u4ef6\uff0c\u641e\u5b9a\u201c\u8ffd\u6eaf\u201d\u5de5\u4f5c\uff01\ud83d\udcc5"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-delete"}),"\uff1a\u5c0f\u5fc3\uff01\u8fd9\u53ef\u4e0d\u662f\u73a9\u7b11\u2014\u2014\u5b83\u80fd\u5220\u9664\u627e\u5230\u7684\u6587\u4ef6\uff01\u26a0\ufe0f\u2620\ufe0f"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"3-\u547d\u4ee4\u793a\u4f8b",children:"3. \u547d\u4ee4\u793a\u4f8b"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u6309\u6587\u4ef6\u540d\u67e5\u627e"}),"\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'find /path/to/directory -name "filename"\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u53ea\u8981\u7ed9\u4e2a\u540d\u5b57\uff0c\u5b83\u5c31\u80fd\u201c\u7cbe\u51c6\u5b9a\u4f4d\u201d\uff0c\u6587\u4ef6\u8f7b\u677e\u5230\u624b\uff01\ud83d\udd0d"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u6309\u6587\u4ef6\u7c7b\u578b\u67e5\u627e"}),"\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"find /path/to/directory -type f # \u67e5\u627e\u6587\u4ef6\nfind /path/to/directory -type d # \u67e5\u627e\u76ee\u5f55\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u96be\u9053\u4f60\u4e0d\u60f3\u77e5\u9053\u6587\u4ef6\u662f\u6587\u4ef6\uff0c\u8fd8\u662f\u76ee\u5f55\u5417\uff1f\u53ea\u9700\u4e00\u952e\uff0c\u4e86\u89e3\u4e00\u5207\uff01\ud83d\udd11"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u6309\u6743\u9650\u67e5\u627e"}),"\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"find /path/to/directory -perm 644 # \u67e5\u627e\u6743\u9650\u4e3a 644 \u7684\u6587\u4ef6\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5fd8\u8bb0\u4e86\u6587\u4ef6\u6743\u9650\uff1f\u6ca1\u5173\u7cfb\uff0c",(0,i.jsx)(n.code,{children:"find"})," \u547d\u4ee4\u6765\u5e2e\u4f60\u6574\u7406\uff01\ud83d\udd12"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u6309\u5927\u5c0f\u67e5\u627e"}),"\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"find /path/to/directory -size +1M # \u67e5\u627e\u5927\u4e8e 1MB \u7684\u6587\u4ef6\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e0d\u60f3\u6587\u4ef6\u53d8\u5f97\u201c\u80d6\u201d\u5f97\u8d85\u51fa\u9884\u671f\uff1f\u6765\u5427\uff0c\u6309\u5927\u5c0f\u67e5\u627e\uff0c\u51cf\u8f7b\u7cfb\u7edf\u8d1f\u62c5\uff01\ud83d\udccf\ud83d\udcaa"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u6309\u65f6\u95f4\u67e5\u627e"}),"\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"find /path/to/directory -mtime -7 # \u67e5\u627e\u6700\u8fd17\u5929\u5185\u4fee\u6539\u8fc7\u7684\u6587\u4ef6\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u521a\u521a\u4fee\u6539\u8fc7\u7684\u6587\u4ef6\u5df2\u7ecf\u4e0d\u89c1\u4e86\uff1f\u653e\u5fc3\uff0c",(0,i.jsx)(n.code,{children:"find"})," \u4f1a\u5e2e\u4f60\u8ffd\u6eaf\u5230\u6700\u65b0\u7684\u53d8\u5316\uff01\u23f0"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u7ec4\u5408\u6761\u4ef6\u67e5\u627e"}),"\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'find /path/to/directory -name "*.txt" -type f -size +100k # \u67e5\u627e\u5927\u4e8e100KB\u7684txt\u6587\u4ef6\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u60f3\u8981\u7cbe\u51c6\u641c\u7d22\u5417\uff1f\u7ec4\u5408\u6761\u4ef6\uff0c\u8ba9\u4f60\u4e0d\u518d\u8ff7\u8def\uff01\ud83c\udfaf"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u6267\u884c\u64cd\u4f5c"}),"\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'find /path/to/directory -name "*.log" -exec rm {} \\; # \u5220\u9664\u6240\u6709\u4ee5 .log \u7ed3\u5c3e\u7684\u6587\u4ef6\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u627e\u5230\u6587\u4ef6\u540e\uff0c\u7acb\u523b\u6267\u884c\u64cd\u4f5c\uff01\u60f3\u5220\u5c31\u5220\uff0c\u60f3\u505a\u4ec0\u4e48\u90fd\u884c\uff01\ud83d\udd25"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u67e5\u627e\u76ee\u5f55\u5e76\u6392\u9664\u7279\u5b9a\u76ee\u5f55"}),"\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'find /path/to/directory -type d -name "dir*" -not -path "*/dir_to_exclude/*"\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u4e0d\u60f3\u5728\u67d0\u4e9b\u76ee\u5f55\u4e2d\u6d6a\u8d39\u65f6\u95f4\uff1f\u8f7b\u677e\u6392\u9664\u5b83\u4eec\uff01\ud83d\udeab"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u6309\u6df1\u5ea6\u67e5\u627e"}),"\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"find /path/to/directory -maxdepth 2 -type f # \u9650\u5236\u67e5\u627e\u6df1\u5ea6\u4e3a2\u5c42\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e0d\u60f3\u7ffb\u5f97\u592a\u6df1\uff1f\u9650\u5236\u67e5\u627e\u6df1\u5ea6\uff0c\u907f\u514d\u9677\u5165\u201c\u65e0\u5e95\u6d1e\u201d\uff01\ud83c\udf31"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u901a\u8fc7\u638c\u63e1 ",(0,i.jsx)(n.code,{children:"find"})," \u547d\u4ee4\uff0c\u4f60\u53ef\u4ee5\u8f7b\u677e\u5e94\u5bf9\u5404\u79cd\u6587\u4ef6\u641c\u7d22\u9700\u6c42\uff0c\u4e0d\u6015\u627e\u4e0d\u5230\uff0c\u6015\u4f60\u6ca1\u6709\u7528\u5bf9\u65b9\u6cd5\uff01\ud83d\ude0f\u5e0c\u671b\u8fd9\u7bc7\u6559\u7a0b\u80fd\u5e2e\u4f60\u5728\u201c\u8ff7\u5bab\u201d\u4e2d\u627e\u5230\u6b63\u786e\u7684\u51fa\u53e3\uff01\ud83d\uddfa\ufe0f\u522b\u5fd8\u4e86\u6536\u85cf",(0,i.jsx)(n.strong,{children:"\u5728\u7ebf\u77e5\u8bc6\u5e93"}),"\uff08 ",(0,i.jsx)(n.a,{href:"http://www.zxzsk.com",children:"www.zxzsk.com"})," \uff09\u54e6\uff01\ud83d\ude0a"]})]})}function x(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var d=s(6540);const i={},c=d.createContext(i);function r(e){const n=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);