"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4651],{4727:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>t,frontMatter:()=>d,metadata:()=>l,toc:()=>h});const l=JSON.parse('{"id":"\u6587\u672c\u5904\u7406/awk","title":"awk","description":"\u2b50\u2b50\u2b50\u6587\u672c\u4e09\u5251\u5ba2\u4e4b\u4e00\uff0c\u529f\u80fd\u590d\u6742\u7684\u6587\u672c\u5904\u7406\u5de5\u5177\u3002","source":"@site/docs/25-\u6587\u672c\u5904\u7406/awk.md","sourceDirName":"25-\u6587\u672c\u5904\u7406","slug":"/fb550a2c","permalink":"/fb550a2c","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/25-\u6587\u672c\u5904\u7406/awk.md","tags":[],"version":"current","lastUpdatedAt":1742246204000,"frontMatter":{"slug":"/fb550a2c"},"sidebar":"\u6587\u672c\u5904\u7406","previous":{"title":"\u6587\u672c\u5904\u7406","permalink":"/b87589f6"},"next":{"title":"cat","permalink":"/e7b38355"}}');var c=s(4848),r=s(8453);const d={slug:"/fb550a2c"},i=void 0,a={},h=[{value:"1. \u547d\u4ee4\u7b80\u4ecb",id:"1-\u547d\u4ee4\u7b80\u4ecb",level:2},{value:"2. \u547d\u4ee4\u8bed\u6cd5",id:"2-\u547d\u4ee4\u8bed\u6cd5",level:2},{value:"2.1 <strong>\u57fa\u672c\u7528\u6cd5</strong>",id:"21-\u57fa\u672c\u7528\u6cd5",level:3},{value:"3. \u5e38\u89c1\u9009\u9879",id:"3-\u5e38\u89c1\u9009\u9879",level:2},{value:"4. \u547d\u4ee4\u793a\u4f8b",id:"4-\u547d\u4ee4\u793a\u4f8b",level:2},{value:"4.1 <strong>\u6253\u5370\u6bcf\u884c\u7684\u7b2c\u4e00\u4e2a\u5b57\u6bb5</strong>",id:"41-\u6253\u5370\u6bcf\u884c\u7684\u7b2c\u4e00\u4e2a\u5b57\u6bb5",level:3},{value:"4.2 <strong>\u6253\u5370\u6bcf\u884c\u7684\u7b2c\u4e00\u4e2a\u548c\u7b2c\u4e8c\u4e2a\u5b57\u6bb5</strong>",id:"42-\u6253\u5370\u6bcf\u884c\u7684\u7b2c\u4e00\u4e2a\u548c\u7b2c\u4e8c\u4e2a\u5b57\u6bb5",level:3},{value:"4.3 <strong>\u4f7f\u7528\u5206\u9694\u7b26</strong>",id:"43-\u4f7f\u7528\u5206\u9694\u7b26",level:3},{value:"4.4 <strong>\u6761\u4ef6\u8bed\u53e5</strong>",id:"44-\u6761\u4ef6\u8bed\u53e5",level:3},{value:"4.5 <strong>\u4f7f\u7528\u5185\u5efa\u53d8\u91cf</strong>",id:"45-\u4f7f\u7528\u5185\u5efa\u53d8\u91cf",level:3},{value:"4.6 <strong>\u8ba1\u7b97\u603b\u548c</strong>",id:"46-\u8ba1\u7b97\u603b\u548c",level:3},{value:"4.7 <strong>\u4f7f\u7528 <code>awk</code> \u5904\u7406\u590d\u6742\u7684\u683c\u5f0f</strong>",id:"47-\u4f7f\u7528-awk-\u5904\u7406\u590d\u6742\u7684\u683c\u5f0f",level:3},{value:"5. \u603b\u7ed3",id:"5-\u603b\u7ed3",level:2}];function x(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"\u2b50\u2b50\u2b50\u6587\u672c\u4e09\u5251\u5ba2\u4e4b\u4e00\uff0c\u529f\u80fd\u590d\u6742\u7684\u6587\u672c\u5904\u7406\u5de5\u5177\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"1-\u547d\u4ee4\u7b80\u4ecb",children:"1. \u547d\u4ee4\u7b80\u4ecb"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"awk"})," \u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u6587\u672c\u5904\u7406\u5de5\u5177\uff0c\u5b83\u7528\u4e8e\u5728 Linux \u548c Unix \u7cfb\u7edf\u4e2d\u8fdb\u884c\u6a21\u5f0f\u626b\u63cf\u548c\u5904\u7406\u3002\ud83d\udee0\ufe0f \u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"awk"}),"\uff0c\u4f60\u53ef\u4ee5\u8f7b\u677e\u5730\u4ece\u6587\u4ef6\u6216\u6807\u51c6\u8f93\u5165\u4e2d\u63d0\u53d6\u548c\u5904\u7406\u6570\u636e\uff0c\u5e76\u8fdb\u884c\u590d\u6742\u7684\u6587\u672c\u64cd\u4f5c\u3002\u5b83\u975e\u5e38\u9002\u5408\u5904\u7406\u7ed3\u6784\u5316\u7684\u6587\u672c\u6570\u636e\uff0c\u5982 CSV \u6587\u4ef6\u3001\u65e5\u5fd7\u6587\u4ef6\u3001\u8868\u683c\u6570\u636e\u7b49\u3002\ud83d\udcca"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"awk"})," \u652f\u6301\u6761\u4ef6\u5224\u65ad\u3001\u5faa\u73af\u3001\u53d8\u91cf\u548c\u5185\u5efa\u51fd\u6570\uff0c\u4f7f\u5b83\u6210\u4e3a\u6587\u672c\u5904\u7406\u548c\u62a5\u544a\u751f\u6210\u7684\u5229\u5668\uff01\ud83d\udcaa"]}),"\n",(0,c.jsx)(n.h2,{id:"2-\u547d\u4ee4\u8bed\u6cd5",children:"2. \u547d\u4ee4\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"awk 'pattern { action }' file\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"pattern"}),"\uff1a\u5b9a\u4e49\u8981\u5339\u914d\u7684\u6a21\u5f0f\uff0c\u53ef\u4ee5\u662f\u5b57\u7b26\u4e32\u3001\u6b63\u5219\u8868\u8fbe\u5f0f\u6216\u6761\u4ef6\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"action"}),"\uff1a\u5728\u5339\u914d\u5230\u6a21\u5f0f\u65f6\u6267\u884c\u7684\u64cd\u4f5c\uff0c\u901a\u5e38\u662f\u6253\u5370\u6216\u5904\u7406\u67d0\u4e9b\u5b57\u6bb5\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"file"}),"\uff1a\u8f93\u5165\u7684\u6587\u4ef6\uff0c\u53ef\u4ee5\u7701\u7565\uff0c\u8868\u793a\u4ece\u6807\u51c6\u8f93\u5165\u8bfb\u53d6\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"21-\u57fa\u672c\u7528\u6cd5",children:["2.1 ",(0,c.jsx)(n.strong,{children:"\u57fa\u672c\u7528\u6cd5"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"awk '{print $1}'"}),"\uff1a\u6253\u5370\u6bcf\u884c\u7684\u7b2c\u4e00\u4e2a\u5b57\u6bb5\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"awk '{print $1, $3}'"}),"\uff1a\u6253\u5370\u6bcf\u884c\u7684\u7b2c\u4e00\u4e2a\u548c\u7b2c\u4e09\u4e2a\u5b57\u6bb5\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"awk '{print $0}'"}),"\uff1a\u6253\u5370\u6bcf\u884c\u7684\u6240\u6709\u5185\u5bb9\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"3-\u5e38\u89c1\u9009\u9879",children:"3. \u5e38\u89c1\u9009\u9879"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-F"}),"\uff1a\u6307\u5b9a\u5b57\u6bb5\u5206\u9694\u7b26\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u683c\u6216\u5236\u8868\u7b26\uff08tab\uff09\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-v"}),"\uff1a\u5b9a\u4e49\u53d8\u91cf\u5e76\u4f20\u9012\u7ed9 ",(0,c.jsx)(n.code,{children:"awk"})," \u811a\u672c\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-f"}),"\uff1a\u4ece\u6587\u4ef6\u4e2d\u52a0\u8f7d ",(0,c.jsx)(n.code,{children:"awk"})," \u811a\u672c\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"4-\u547d\u4ee4\u793a\u4f8b",children:"4. \u547d\u4ee4\u793a\u4f8b"}),"\n",(0,c.jsxs)(n.h3,{id:"41-\u6253\u5370\u6bcf\u884c\u7684\u7b2c\u4e00\u4e2a\u5b57\u6bb5",children:["4.1 ",(0,c.jsx)(n.strong,{children:"\u6253\u5370\u6bcf\u884c\u7684\u7b2c\u4e00\u4e2a\u5b57\u6bb5"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u5047\u8bbe\u6709\u4e00\u4e2a\u6587\u4ef6 ",(0,c.jsx)(n.code,{children:"data.txt"}),"\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"Alice 30\nBob 25\nCharlie 35\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"awk"})," \u6253\u5370\u6bcf\u884c\u7684\u7b2c\u4e00\u4e2a\u5b57\u6bb5\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ awk '{print $1}' data.txt\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"Alice\nBob\nCharlie\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"42-\u6253\u5370\u6bcf\u884c\u7684\u7b2c\u4e00\u4e2a\u548c\u7b2c\u4e8c\u4e2a\u5b57\u6bb5",children:["4.2 ",(0,c.jsx)(n.strong,{children:"\u6253\u5370\u6bcf\u884c\u7684\u7b2c\u4e00\u4e2a\u548c\u7b2c\u4e8c\u4e2a\u5b57\u6bb5"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ awk '{print $1, $2}' data.txt\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"Alice 30\nBob 25\nCharlie 35\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"43-\u4f7f\u7528\u5206\u9694\u7b26",children:["4.3 ",(0,c.jsx)(n.strong,{children:"\u4f7f\u7528\u5206\u9694\u7b26"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,c.jsx)(n.code,{children:"awk"})," \u4f7f\u7528\u7a7a\u683c\u6216\u5236\u8868\u7b26\u4f5c\u4e3a\u5b57\u6bb5\u5206\u9694\u7b26\u3002\u5982\u679c\u6570\u636e\u4f7f\u7528\u9017\u53f7\u5206\u9694\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"-F"})," \u9009\u9879\u6307\u5b9a\u5206\u9694\u7b26\u3002\u4f8b\u5982\uff0c\u5047\u8bbe\u6587\u4ef6 ",(0,c.jsx)(n.code,{children:"data.csv"})," \u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-csv",children:"Alice,30\nBob,25\nCharlie,35\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4f7f\u7528\u9017\u53f7\u4f5c\u4e3a\u5b57\u6bb5\u5206\u9694\u7b26\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ awk -F, '{print $1, $2}' data.csv\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"Alice 30\nBob 25\nCharlie 35\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"44-\u6761\u4ef6\u8bed\u53e5",children:["4.4 ",(0,c.jsx)(n.strong,{children:"\u6761\u4ef6\u8bed\u53e5"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"awk"})," \u53ef\u4ee5\u7ed3\u5408\u6761\u4ef6\u8bed\u53e5\u6765\u5904\u7406\u6570\u636e\u3002\u4f8b\u5982\uff0c\u5047\u8bbe\u4f60\u53ea\u60f3\u6253\u5370\u5e74\u9f84\u5927\u4e8e 30 \u7684\u4eba\u7684\u540d\u5b57\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ awk '$2 > 30 {print $1}' data.txt\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"Charlie\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"45-\u4f7f\u7528\u5185\u5efa\u53d8\u91cf",children:["4.5 ",(0,c.jsx)(n.strong,{children:"\u4f7f\u7528\u5185\u5efa\u53d8\u91cf"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"awk"})," \u63d0\u4f9b\u4e86\u591a\u4e2a\u5185\u5efa\u53d8\u91cf\uff0c\u53ef\u4ee5\u5e2e\u52a9\u4f60\u5904\u7406\u6570\u636e\uff1a"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"NR"}),"\uff1a\u5f53\u524d\u8bb0\u5f55\u7684\u884c\u53f7\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"NF"}),"\uff1a\u5f53\u524d\u8bb0\u5f55\u7684\u5b57\u6bb5\u6570\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"$0"}),"\uff1a\u6574\u884c\u6587\u672c\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u6253\u5370\u6587\u4ef6\u7684\u6bcf\u4e00\u884c\u5e76\u9644\u52a0\u884c\u53f7\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ awk '{print NR \": \" $0}' data.txt\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"1: Alice 30\n2: Bob 25\n3: Charlie 35\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"46-\u8ba1\u7b97\u603b\u548c",children:["4.6 ",(0,c.jsx)(n.strong,{children:"\u8ba1\u7b97\u603b\u548c"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u5047\u8bbe\u4f60\u6709\u4e00\u4e2a\u5305\u542b\u6570\u503c\u7684\u6587\u4ef6 ",(0,c.jsx)(n.code,{children:"scores.txt"}),"\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"50\n75\n80\n60\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u7528 ",(0,c.jsx)(n.code,{children:"awk"})," \u6765\u8ba1\u7b97\u603b\u548c\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ awk '{sum += $1} END {print sum}' scores.txt\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"265\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u91cc\uff0c",(0,c.jsx)(n.code,{children:"sum += $1"})," \u8868\u793a\u7d2f\u52a0\u6bcf\u4e00\u884c\u7684\u6570\u503c\uff0c",(0,c.jsx)(n.code,{children:"END"})," \u5757\u8868\u793a\u5728\u6587\u4ef6\u7ed3\u675f\u65f6\u6253\u5370\u7ed3\u679c\u3002"]}),"\n",(0,c.jsxs)(n.h3,{id:"47-\u4f7f\u7528-awk-\u5904\u7406\u590d\u6742\u7684\u683c\u5f0f",children:["4.7 ",(0,c.jsxs)(n.strong,{children:["\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"awk"})," \u5904\u7406\u590d\u6742\u7684\u683c\u5f0f"]})]}),"\n",(0,c.jsxs)(n.p,{children:["\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"awk"})," \u6765\u751f\u6210\u66f4\u590d\u6742\u7684\u8f93\u51fa\u683c\u5f0f\u3002\u4f8b\u5982\uff0c\u5047\u8bbe\u4f60\u6709\u4e00\u4e2a\u6587\u4ef6 ",(0,c.jsx)(n.code,{children:"students.txt"}),"\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"Alice 90 80 85\nBob 75 60 70\nCharlie 85 95 90\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u8ba1\u7b97\u6bcf\u4e2a\u5b66\u751f\u7684\u5e73\u5747\u5206\uff0c\u5e76\u6309\u683c\u5f0f\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ awk '{avg = ($2 + $3 + $4) / 3; print $1, \"Average:\", avg}' students.txt\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"Alice Average: 85\nBob Average: 68.3333\nCharlie Average: 90\n"})}),"\n",(0,c.jsx)(n.h2,{id:"5-\u603b\u7ed3",children:"5. \u603b\u7ed3"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"awk"})," \u662f\u4e00\u4e2a\u975e\u5e38\u5f3a\u5927\u7684\u5de5\u5177\uff0c\u7528\u4e8e\u6587\u672c\u6570\u636e\u7684\u5904\u7406\u548c\u5206\u6790\u3002\u5b83\u4e0d\u4ec5\u53ef\u4ee5\u7528\u6765\u7b5b\u9009\u3001\u683c\u5f0f\u5316\u6587\u672c\uff0c\u8fd8\u53ef\u4ee5\u8fdb\u884c\u590d\u6742\u7684\u6570\u636e\u8ba1\u7b97\u548c\u62a5\u544a\u751f\u6210\u3002\ud83d\udcca \u901a\u8fc7\u7ed3\u5408\u6761\u4ef6\u8bed\u53e5\u3001\u5185\u5efa\u53d8\u91cf\u4ee5\u53ca\u591a\u79cd\u529f\u80fd\u9009\u9879\uff0c",(0,c.jsx)(n.code,{children:"awk"})," \u80fd\u591f\u8ba9\u4f60\u5728\u547d\u4ee4\u884c\u4e2d\u8f7b\u677e\u5730\u8fdb\u884c\u6570\u636e\u5904\u7406\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0d\u8bba\u662f\u7b80\u5355\u7684\u5b57\u6bb5\u63d0\u53d6\uff0c\u8fd8\u662f\u590d\u6742\u7684\u8ba1\u7b97\u548c\u683c\u5f0f\u5316\u8f93\u51fa\uff0c",(0,c.jsx)(n.code,{children:"awk"})," \u90fd\u80fd\u5e2e\u52a9\u4f60\u9ad8\u6548\u5730\u5b8c\u6210\u4efb\u52a1\u3002\ud83d\ude80"]}),"\n",(0,c.jsxs)(n.p,{children:["\u522b\u5fd8\u4e86\uff0c\u638c\u63e1 ",(0,c.jsx)(n.code,{children:"awk"})," \u547d\u4ee4\uff0c\u4f60\u5c06\u6210\u4e3a\u6587\u672c\u5904\u7406\u7684\u5927\u5e08\uff01\ud83c\udf1f"]}),"\n",(0,c.jsxs)(n.p,{children:["\u7ee7\u7eed\u63a2\u7d22\uff0c\u5b66\u4e60\u66f4\u591a\u7684 Linux \u5de5\u5177\uff0c\u63d0\u5347\u4f60\u7684\u5de5\u4f5c\u6548\u7387\uff01\u522b\u5fd8\u4e86\u6536\u85cf\u6211\u4eec\u7684\u5728\u7ebf\u77e5\u8bc6\u5e93 ",(0,c.jsx)(n.a,{href:"http://www.zxzsk.com",children:"www.zxzsk.com"}),"\uff01\ud83d\udcda"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsxs)(n.p,{children:["\u52a0\u6cb9\uff0c",(0,c.jsx)(n.code,{children:"awk"})," \u4f1a\u8ba9\u4f60\u5728\u6587\u672c\u5904\u7406\u7684\u4e16\u754c\u4e2d\u5982\u9c7c\u5f97\u6c34\uff01\ud83e\uddd1\u200d\ud83d\udcbb"]})]})}function t(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(x,{...e})}):x(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>i});var l=s(6540);const c={},r=l.createContext(c);function d(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);