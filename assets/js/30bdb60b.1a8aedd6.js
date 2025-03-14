"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7514],{8453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>c});var i=n(6540);const r={},l=i.createContext(r);function d(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(l.Provider,{value:s},e.children)}},8496:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>c,default:()=>j,frontMatter:()=>d,metadata:()=>i,toc:()=>t});const i=JSON.parse('{"id":"command/\u7f51\u7edc/ftp","title":"ftp","description":"\u2b50\u6587\u4ef6\u4f20\u8f93","source":"@site/docs/02-command/50-\u7f51\u7edc/ftp.md","sourceDirName":"02-command/50-\u7f51\u7edc","slug":"/command/\u7f51\u7edc/ftp","permalink":"/command/\u7f51\u7edc/ftp","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/02-command/50-\u7f51\u7edc/ftp.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"dig","permalink":"/command/\u7f51\u7edc/dig"},"next":{"title":"ifconfig","permalink":"/command/\u7f51\u7edc/ifconfig"}}');var r=n(4848),l=n(8453);const d={},c=void 0,h={},t=[{value:"1. FTP \u548c SFTP \u547d\u4ee4\u7b80\u4ecb \ud83c\udf10",id:"1-ftp-\u548c-sftp-\u547d\u4ee4\u7b80\u4ecb-",level:2},{value:"1.1 FTP (File Transfer Protocol) \ud83d\udcc2",id:"11-ftp-file-transfer-protocol-",level:3},{value:"1.2 SFTP (SSH File Transfer Protocol) \ud83d\udd12",id:"12-sftp-ssh-file-transfer-protocol-",level:3},{value:"1.3 \u5982\u4f55\u4f7f\u7528ftp/sftp\u547d\u4ee4",id:"13-\u5982\u4f55\u4f7f\u7528ftpsftp\u547d\u4ee4",level:3},{value:"2. \u5e38\u7528 ftp \u548c sftp \u547d\u4ee4\u5bf9\u6bd4 \ud83c\udd9a",id:"2-\u5e38\u7528-ftp-\u548c-sftp-\u547d\u4ee4\u5bf9\u6bd4-",level:2},{value:"3. FTP \u547d\u4ee4\u6559\u7a0b \ud83d\udcdc",id:"3-ftp-\u547d\u4ee4\u6559\u7a0b-",level:2},{value:"4. SFTP \u547d\u4ee4\u6848\u4f8b \ud83d\udd11",id:"4-sftp-\u547d\u4ee4\u6848\u4f8b-",level:2},{value:"4.1 \u8fde\u63a5\u5230 SFTP \u670d\u52a1\u5668",id:"41-\u8fde\u63a5\u5230-sftp-\u670d\u52a1\u5668",level:3},{value:"4.2 \u5217\u51fa\u8fdc\u7a0b\u76ee\u5f55",id:"42-\u5217\u51fa\u8fdc\u7a0b\u76ee\u5f55",level:3},{value:"4.3 \u4e0a\u4f20\u548c\u4e0b\u8f7d\u6587\u4ef6",id:"43-\u4e0a\u4f20\u548c\u4e0b\u8f7d\u6587\u4ef6",level:3},{value:"4.4 \u5207\u6362\u76ee\u5f55",id:"44-\u5207\u6362\u76ee\u5f55",level:3},{value:"4.5 \u9000\u51fa SFTP \u4f1a\u8bdd",id:"45-\u9000\u51fa-sftp-\u4f1a\u8bdd",level:3},{value:"5. \u603b\u7ed3 \u2728",id:"5-\u603b\u7ed3-",level:2},{value:"6. \u756a\u5916\u7bc7",id:"6-\u756a\u5916\u7bc7",level:2},{value:"6.1 FTP/SFTP\u5ba2\u6237\u7aef",id:"61-ftpsftp\u5ba2\u6237\u7aef",level:3},{value:"6.2 lftp\u4ecb\u7ecd",id:"62-lftp\u4ecb\u7ecd",level:3}];function x(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"\u2b50\u6587\u4ef6\u4f20\u8f93"}),"\n",(0,r.jsx)(s.h2,{id:"1-ftp-\u548c-sftp-\u547d\u4ee4\u7b80\u4ecb-",children:"1. FTP \u548c SFTP \u547d\u4ee4\u7b80\u4ecb \ud83c\udf10"}),"\n",(0,r.jsx)(s.h3,{id:"11-ftp-file-transfer-protocol-",children:"1.1 FTP (File Transfer Protocol) \ud83d\udcc2"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"FTP \u662f\u4e00\u79cd\u5e38\u7528\u7684\u6587\u4ef6\u4f20\u8f93\u534f\u8bae\uff0c\u5141\u8bb8\u4f60\u901a\u8fc7 TCP/IP \u7f51\u7edc\u4e0a\u4f20\u6216\u4e0b\u8f7d\u6587\u4ef6\u3002"}),"\n",(0,r.jsx)(s.li,{children:"FTP \u6587\u4ef6\u4f20\u8f93\u8fc7\u7a0b\u4e2d\u7684\u6570\u636e\u4e0d\u52a0\u5bc6\uff0c\u6613\u53d7\u5230\u4e2d\u95f4\u4eba\u653b\u51fb\u3002"}),"\n",(0,r.jsx)(s.li,{children:"FTP \u4f7f\u7528\u4e24\u4e2a\u8fde\u63a5\uff0c\u4e00\u4e2a\u7528\u4e8e\u53d1\u9001\u547d\u4ee4\uff08\u63a7\u5236\u8fde\u63a5\uff09\uff0c\u53e6\u4e00\u4e2a\u7528\u4e8e\u4f20\u8f93\u6570\u636e\uff08\u6570\u636e\u8fde\u63a5\uff09\u3002"}),"\n",(0,r.jsx)(s.li,{children:"FTP \u9ed8\u8ba4\u7aef\u53e3\u662f 21\u3002"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"12-sftp-ssh-file-transfer-protocol-",children:"1.2 SFTP (SSH File Transfer Protocol) \ud83d\udd12"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"SFTP \u7684\u8bde\u751f\u662f\u4e3a\u4e86\u89e3\u51b3\u4e86 FTP \u7684\u5b89\u5168\u95ee\u9898\u3002"}),"\n",(0,r.jsxs)(s.li,{children:["SFTP \u662f\u57fa\u4e8e ",(0,r.jsx)(s.code,{children:"SSH"})," \u534f\u8bae\u7684\u6587\u4ef6\u4f20\u8f93\u534f\u8bae\uff0c\u4f7f\u7528\u52a0\u5bc6\u8fde\u63a5\u6765\u786e\u4fdd\u6570\u636e\u7684\u5b89\u5168\u6027\u3002"]}),"\n",(0,r.jsx)(s.li,{children:"SFTP \u9ed8\u8ba4\u7aef\u53e3\u662f 22\u3002"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"13-\u5982\u4f55\u4f7f\u7528ftpsftp\u547d\u4ee4",children:"1.3 \u5982\u4f55\u4f7f\u7528ftp/sftp\u547d\u4ee4"}),"\n",(0,r.jsx)(s.p,{children:"\u4f7f\u7528 ftp/sftp \u6709\u70b9\u7c7b\u4f3c ssh \u547d\u4ee4\uff1a\u5148\u4e0e\u8fdc\u7a0b\u4e3b\u673a\u5efa\u7acb\u8fde\u63a5\uff0c\u518d\u53bb\u6267\u884c\u4e00\u4e9b\u64cd\u4f5c\u3002\u4e0d\u540c\u7684\u662f ftp/sftp \u5efa\u7acb\u8fde\u63a5\u540e\u53ea\u53ef\u4ee5\u6267\u884c\u6709\u9650\u7684\u51e0\u6761\u547d\u4ee4\uff0c\u901a\u8fc7\u8fd9\u51e0\u6761\u547d\u4ee4\u53ef\u4ee5\u6bd4\u8f83\u65b9\u4fbf\u7684\u4e0a\u4f20\u548c\u4e0b\u8f7d\u6587\u4ef6\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u73b0\u5728\u8bb8\u591aLinux\u53d1\u884c\u7248\u9ed8\u8ba4\u5b89\u88c5\u7684\u662f sftp \u547d\u4ee4\u3002\u7531\u4e8e ftp \u4e0d\u591f\u5b89\u5168\uff0c\u56e0\u6b64\u54b1\u4e5f\u4e0d\u7231\u4f7f\u7528\u5b83\u3002"}),"\n",(0,r.jsx)(s.h2,{id:"2-\u5e38\u7528-ftp-\u548c-sftp-\u547d\u4ee4\u5bf9\u6bd4-",children:"2. \u5e38\u7528 ftp \u548c sftp \u547d\u4ee4\u5bf9\u6bd4 \ud83c\udd9a"}),"\n",(0,r.jsx)(s.p,{children:"1.\u5efa\u7acb\u8fde\u63a5"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u529f\u80fd"}),(0,r.jsx)(s.th,{children:"FTP \u547d\u4ee4"}),(0,r.jsx)(s.th,{children:"SFTP \u547d\u4ee4"}),(0,r.jsx)(s.th,{children:"\u5907\u6ce8"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u8fde\u63a5\u670d\u52a1\u5668"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"ftp <hostname>"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"sftp <username>@<hostname>"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"SFTP"})," \u9700\u8981\u63d0\u4f9b\u7528\u6237\u540d\uff0c",(0,r.jsx)(s.code,{children:"FTP"})," \u53ea\u9700\u4e3b\u673a\u540d"]})]})})]}),"\n",(0,r.jsx)(s.p,{children:"2.\u5efa\u7acb\u8fde\u63a5\u540e\u53ef\u6267\u884c\u64cd\u4f5c"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u529f\u80fd"}),(0,r.jsx)(s.th,{children:"FTP \u547d\u4ee4"}),(0,r.jsx)(s.th,{children:"SFTP \u547d\u4ee4"}),(0,r.jsx)(s.th,{children:"\u5907\u6ce8"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u5217\u51fa\u8fdc\u7a0b\u76ee\u5f55\u5185\u5bb9"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ls"})," \u6216 ",(0,r.jsx)(s.code,{children:"ls -l"})]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"ls"})}),(0,r.jsx)(s.td,{children:"\u4e24\u8005\u90fd\u652f\u6301\u5217\u51fa\u76ee\u5f55\u5185\u5bb9"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u5207\u6362\u8fdc\u7a0b\u76ee\u5f55"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"cd <dir>"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"cd <dir>"})}),(0,r.jsx)(s.td,{children:"\u76f8\u540c\u529f\u80fd"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u4e0a\u4f20\u6587\u4ef6"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"put <local-file> <remote-file>"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"put <local-file> <remote-file>"})}),(0,r.jsx)(s.td,{children:"\u76f8\u540c\u529f\u80fd"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u4e0b\u8f7d\u6587\u4ef6"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"get <remote-file> <local-file>"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"get <remote-file> <local-file>"})}),(0,r.jsx)(s.td,{children:"\u76f8\u540c\u529f\u80fd"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u67e5\u770b\u5f53\u524d\u76ee\u5f55"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"pwd"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"pwd"})}),(0,r.jsx)(s.td,{children:"\u76f8\u540c\u529f\u80fd"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u4f20\u8f93\u6a21\u5f0f"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ascii"})," \u6216 ",(0,r.jsx)(s.code,{children:"binary"})]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"-"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"SFTP"})," \u81ea\u52a8\u4f7f\u7528\u52a0\u5bc6\u8fde\u63a5\uff0cFTP \u53ef\u9009\u62e9\u4f20\u8f93\u6a21\u5f0f"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u663e\u793a\u8fdc\u7a0b\u6587\u4ef6\u5185\u5bb9"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"get <file>"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"cat <remote-file>"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"SFTP"})," \u901a\u8fc7 ",(0,r.jsx)(s.code,{children:"cat"})," \u663e\u793a\u6587\u4ef6\u5185\u5bb9"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u4e0a\u4f20\u591a\u4e2a\u6587\u4ef6"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"mput <files>"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"mput <files>"})}),(0,r.jsx)(s.td,{children:"\u76f8\u540c\u529f\u80fd"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"3.\u9000\u51fa\u8fde\u63a5"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u529f\u80fd"}),(0,r.jsx)(s.th,{children:"FTP \u547d\u4ee4"}),(0,r.jsx)(s.th,{children:"SFTP \u547d\u4ee4"}),(0,r.jsx)(s.th,{children:"\u5907\u6ce8"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u9000\u51fa\u8fde\u63a5"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"quit"})," \u6216 ",(0,r.jsx)(s.code,{children:"bye"})]}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"exit"})," \u6216 ",(0,r.jsx)(s.code,{children:"quit"})]}),(0,r.jsx)(s.td,{children:"\u76f8\u540c\u529f\u80fd"})]})})]}),"\n",(0,r.jsx)(s.h2,{id:"3-ftp-\u547d\u4ee4\u6559\u7a0b-",children:"3. FTP \u547d\u4ee4\u6559\u7a0b \ud83d\udcdc"}),"\n",(0,r.jsx)(s.p,{children:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u767b\u5f55 ftp \u670d\u52a1\u5668\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"ftp ftp.example.com\n"})}),"\n",(0,r.jsxs)(s.admonition,{type:"note",children:[(0,r.jsx)(s.p,{children:"\u767b\u5f55\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u6587\u4ef6\u64cd\u4f5c\uff1a"}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"ls"}),"\uff1a\u5217\u51fa\u8fdc\u7a0b\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"lls"}),"\uff1a\u5217\u51fa\u672c\u5730\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"cd"}),"\uff1a\u66f4\u6539\u8fdc\u7a0b\u76ee\u5f55\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"get filename"}),"\uff1a\u4ece\u670d\u52a1\u5668\u4e0b\u8f7d\u6587\u4ef6\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"put filename"}),"\uff1a\u4e0a\u4f20\u6587\u4ef6\u5230\u670d\u52a1\u5668\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"bye"})," \u6216 ",(0,r.jsx)(s.code,{children:"quit"}),"\uff1a\u9000\u51fa FTP \u4f1a\u8bdd\u3002"]}),"\n"]}),(0,r.jsx)(s.p,{children:"\u66f4\u591a..."})]}),"\n",(0,r.jsx)(s.admonition,{type:"warning",children:(0,r.jsx)(s.p,{children:"\u7531\u4e8e FTP \u4e0d\u591f\u5b89\u5168\uff0c\u53ea\u9002\u5408\u5728\u5c40\u57df\u7f51\u6216\u8005\u6587\u4ef6\u4e0d\u6d89\u5bc6\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\u3002"})}),"\n",(0,r.jsx)(s.h2,{id:"4-sftp-\u547d\u4ee4\u6848\u4f8b-",children:"4. SFTP \u547d\u4ee4\u6848\u4f8b \ud83d\udd11"}),"\n",(0,r.jsxs)(s.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"sftp"})," \u547d\u4ee4\u8fde\u63a5\u5230 serv00 \u670d\u52a1\u5668\uff0c\u5e76\u4e0a\u4f20\u3001\u4e0b\u8f7d\u6587\u4ef6\u3002"]}),"\n",(0,r.jsx)(s.h3,{id:"41-\u8fde\u63a5\u5230-sftp-\u670d\u52a1\u5668",children:"4.1 \u8fde\u63a5\u5230 SFTP \u670d\u52a1\u5668"}),"\n",(0,r.jsxs)(s.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"sftp"})," \u547d\u4ee4\u8fde\u63a5\u5230\u8fdc\u7a0b SFTP \u670d\u52a1\u5668\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"sftp <username>@<hostname>\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u5efa\u7acb\u8fde\u63a5\u540e\uff0c\u63d0\u793a\u7b26\u53d8\u6210 ",(0,r.jsx)(s.code,{children:"sftp>"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"# highlight-next-line\r\n$ sftp axio@s6.serv00.com\r\nConnected to s6.serv00.com.\r\n# highlight-next-line\r\nsftp>\n"})}),"\n",(0,r.jsxs)(s.admonition,{type:"note",children:[(0,r.jsx)(s.p,{children:"\u4f7f\u7528\u4e0e ftp \u76f8\u540c\u7684\u547d\u4ee4\u8fdb\u884c\u6587\u4ef6\u64cd\u4f5c\uff1a"}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"ls"}),"\uff1a\u5217\u51fa\u8fdc\u7a0b\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"lls"}),"\uff1a\u5217\u51fa\u672c\u5730\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"cd"}),"\uff1a\u66f4\u6539\u8fdc\u7a0b\u76ee\u5f55\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"get filename"}),"\uff1a\u4ece\u670d\u52a1\u5668\u4e0b\u8f7d\u6587\u4ef6\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"put filename"}),"\uff1a\u4e0a\u4f20\u6587\u4ef6\u5230\u670d\u52a1\u5668\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"bye"})," \u6216 ",(0,r.jsx)(s.code,{children:"quit"}),"\uff1a\u9000\u51fa FTP \u4f1a\u8bdd\u3002"]}),"\n"]}),(0,r.jsx)(s.p,{children:"\u66f4\u591a..."})]}),"\n",(0,r.jsx)(s.h3,{id:"42-\u5217\u51fa\u8fdc\u7a0b\u76ee\u5f55",children:"4.2 \u5217\u51fa\u8fdc\u7a0b\u76ee\u5f55"}),"\n",(0,r.jsxs)(s.p,{children:["\u4e0e FTP \u76f8\u540c\uff0c\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"ls"})," \u67e5\u770b\u8fdc\u7a0b\u76ee\u5f55\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"# highlight-next-line\r\nsftp> ls\r\n1562561404.zip            2578097974.zip            Typecho-Joe-Theme.zip     \r\nbackups                   bin                       domains    \r\n...\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u8fd9\u91cc\u5217\u51fa\u4e86\u8fdc\u7a0b\u4e3b\u673a\u7684\u5bb6\u76ee\u5f55\u3002"}),"\n",(0,r.jsxs)(s.p,{children:["\u60f3\u8981\u67e5\u770b\u672c\u5730\u76ee\u5f55\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"lls"})," \u547d\u4ee4\u3002"]}),"\n",(0,r.jsx)(s.h3,{id:"43-\u4e0a\u4f20\u548c\u4e0b\u8f7d\u6587\u4ef6",children:"4.3 \u4e0a\u4f20\u548c\u4e0b\u8f7d\u6587\u4ef6"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u4e0a\u4f20\u6587\u4ef6\uff1a"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"put <local-file> <remote-file>\n"})}),"\n",(0,r.jsxs)(s.admonition,{type:"note",children:[(0,r.jsx)(s.p,{children:"\u9ed8\u8ba4\u4e0a\u4f20\u5230\u5de5\u4f5c\u76ee\u5f55"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"# highlight-next-line\r\nsftp> put \u5723\u8bde\u96ea\u5e3d.jpg \r\nUploading \u5723\u8bde\u96ea\u5e3d.jpg to /home/soulio/\u5723\u8bde\u96ea\u5e3d.jpg\r\n\u5723\u8bde\u96ea\u5e3d.jpg \r\n100% 7352     4.5MB/s   00:00  \n"})}),(0,r.jsx)(s.p,{children:"\u4e0a\u4f20\u5230\u6307\u5b9a\u76ee\u5f55"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"sftp> put \u5723\u8bde\u96ea\u5e3d.jpg \u516c\u5171/\r\nUploading \u5723\u8bde\u96ea\u5e3d.jpg to /home/soulio/\u516c\u5171/\u5723\u8bde\u96ea\u5e3d.jpg\r\n\u5723\u8bde\u96ea\u5e3d.jpg\r\n100% 7352     5.8MB/s   00:00  \n"})})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u4e0b\u8f7d\u6587\u4ef6\uff1a"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"get <remote-file> <local-file>\n"})}),"\n",(0,r.jsxs)(s.admonition,{type:"note",children:[(0,r.jsxs)(s.p,{children:["\u76f8\u5bf9\u76ee\u5f55\uff1a\u53ef\u4ee5\u4f7f\u7528",(0,r.jsx)(s.code,{children:"."}),"\u8868\u793a\u8868\u793a\u5f53\u524d\u76ee\u5f55\uff0c\u4e0d\u80fd\u4f7f\u7528",(0,r.jsx)(s.code,{children:"~"}),"\u8868\u793a\u5bb6\u76ee\u5f55\u3002"]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"# highlight-next-line\r\nsftp> get wiki.sh .\r\nFetching /usr/home/axio/wiki.sh to .\r\nwiki.sh                                       100%   89     0.1KB/s   00:00   \n"})}),(0,r.jsx)(s.p,{children:"\u7edd\u5bf9\u76ee\u5f55\uff1a"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'# highlight-next-line\r\nsftp> get wiki.sh /home/soulio/test/\r\nFetching /usr/home/axio/wiki.sh to /home/soulio/test/wiki.sh\r\nwiki.sh                                       100%   89     0.1KB/s   00:00    \r\n# highlight-next-line\r\nsftp> get wiki.sh ~/test/\r\nFetching /usr/home/axio/wiki.sh to ~/test/\r\nopen local "~/test/": Not a directory\n'})})]}),"\n",(0,r.jsx)(s.h3,{id:"44-\u5207\u6362\u76ee\u5f55",children:"4.4 \u5207\u6362\u76ee\u5f55"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u5207\u6362\u8fdc\u7a0b\u76ee\u5f55\uff1a"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"# highlight-start\r\nsftp> cd domains/\r\nsftp> pwd\r\n# highlight-end\r\nRemote working directory: /usr/home/axio/domains\n"})}),"\n",(0,r.jsx)(s.p,{children:"tab \u8865\u5168\u4e5f\u53ef\u4ee5\u4f7f\u7528\u3002"}),"\n",(0,r.jsx)(s.h3,{id:"45-\u9000\u51fa-sftp-\u4f1a\u8bdd",children:"4.5 \u9000\u51fa SFTP \u4f1a\u8bdd"}),"\n",(0,r.jsxs)(s.p,{children:["\u9000\u51fa SFTP \u4f1a\u8bdd\uff0c\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"bye"})," \u6216\u8005 ",(0,r.jsx)(s.code,{children:"exit"}),"\u547d\u4ee4\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"sftp> exit\n"})}),"\n",(0,r.jsx)(s.h2,{id:"5-\u603b\u7ed3-",children:"5. \u603b\u7ed3 \u2728"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"FTP"})," \u662f\u4e00\u4e2a\u7ecf\u5178\u7684\u6587\u4ef6\u4f20\u8f93\u534f\u8bae\uff0c\u4f46\u5b83\u6ca1\u6709\u52a0\u5bc6\uff0c\u4f20\u8f93\u8fc7\u7a0b\u4e2d\u7684\u6570\u636e\u5bb9\u6613\u88ab\u7a83\u53d6\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"SFTP"})," \u662f\u57fa\u4e8e ",(0,r.jsx)(s.code,{children:"SSH"})," \u7684\u52a0\u5bc6\u6587\u4ef6\u4f20\u8f93\u534f\u8bae\uff0c\u5b89\u5168\u6027\u66f4\u9ad8\uff0c\u9002\u5408\u9700\u8981\u4f20\u8f93\u654f\u611f\u6570\u636e\u7684\u573a\u666f\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u65e0\u8bba\u4f60\u9009\u62e9 ",(0,r.jsx)(s.code,{children:"ftp"})," \u8fd8\u662f ",(0,r.jsx)(s.code,{children:"sftp"}),"\uff0c\u638c\u63e1\u8fd9\u4e9b\u5e38\u7528\u547d\u4ee4\u90fd\u80fd\u5e2e\u52a9\u4f60\u66f4\u9ad8\u6548\u5730\u8fdb\u884c\u6587\u4ef6\u4f20\u8f93\u5de5\u4f5c\uff01\u5e0c\u671b\u8fd9\u7bc7\u6559\u7a0b\u5bf9\u4f60\u6709\u6240\u5e2e\u52a9\uff01\ud83d\ude0a"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"6-\u756a\u5916\u7bc7",children:"6. \u756a\u5916\u7bc7"}),"\n",(0,r.jsx)(s.h3,{id:"61-ftpsftp\u5ba2\u6237\u7aef",children:"6.1 FTP/SFTP\u5ba2\u6237\u7aef"}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"FTP/SFTP\u5ba2\u6237\u7aef"}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"\u5f00\u6e90/\u514d\u8d39\u5ba2\u6237\u7aef"}),"\uff1a"]}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://filezilla-project.org/",children:"FileZilla"})})," - \u53ef\u80fd\u662f\u6700\u8457\u540d\u7684\u5f00\u6e90FTP/SFTP\u5ba2\u6237\u7aef\uff0c\u652f\u6301Windows\u3001Mac\u548cLinux\u3002\u529f\u80fd\u5168\u9762\uff0c\u5305\u62ec\u652f\u6301\u591a\u79cd\u4f20\u8f93\u534f\u8bae\u3001\u7ad9\u70b9\u7ba1\u7406\u3001\u62d6\u653e\u6587\u4ef6\u4f20\u8f93\u7b49\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://winscp.net/eng/index.php",children:"WinSCP"})})," - \u4e13\u4e3aWindows\u8bbe\u8ba1\u7684\u514d\u8d39SFTP\u548cFTP\u5ba2\u6237\u7aef\uff0c\u63d0\u4f9b\u56fe\u5f62\u7528\u6237\u754c\u9762\u548c\u547d\u4ee4\u884c\u63a5\u53e3\uff0c\u652f\u6301\u6587\u4ef6\u540c\u6b65\u3001\u811a\u672c\u81ea\u52a8\u5316\u7b49\u529f\u80fd\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://cyberduck.io/",children:"Cyberduck"})})," - \u5f00\u6e90\uff0c\u652f\u6301Mac\u548cWindows\uff0c\u63d0\u4f9bFTP\u3001SFTP\u3001WebDAV\u3001Amazon S3\u7b49\u591a\u79cd\u534f\u8bae\u652f\u6301\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://lftp.yar.ru/",children:"lftp"})})," - \u4e00\u4e2a\u547d\u4ee4\u884cFTP/SFTP\u5ba2\u6237\u7aef\uff0c\u9002\u7528\u4e8eUnix/Linux\u7cfb\u7edf\uff0c\u652f\u6301\u591a\u79cd\u534f\u8bae\uff0c\u975e\u5e38\u9002\u5408\u811a\u672c\u548c\u81ea\u52a8\u5316\u4efb\u52a1\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://addons.mozilla.org/en-US/firefox/addon/fireftp/",children:"FireFTP"})})," - \u4e00\u4e2aFirefox\u7684\u6269\u5c55\u63d2\u4ef6\uff0c\u63d0\u4f9b\u4e00\u4e2a\u5185\u7f6e\u7684FTP/SFTP\u5ba2\u6237\u7aef\uff0c\u4f46\u968f\u7740Firefox\u5bf9\u6269\u5c55\u63d2\u4ef6\u7684\u653f\u7b56\u53d8\u5316\uff0c\u5b83\u7684\u4f7f\u7528\u53ef\u80fd\u4f1a\u53d7\u5230\u9650\u5236\u3002"]}),"\n"]}),"\n"]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"\u5546\u4e1a\u5ba2\u6237\u7aef"}),"\uff1a"]}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://panic.com/transmit/",children:"Transmit"})})," - \u4e13\u4e3aMac\u7528\u6237\u8bbe\u8ba1\u7684FTP/SFTP\u5ba2\u6237\u7aef\uff0c\u63d0\u4f9b\u7b80\u6d01\u7684\u754c\u9762\u548c\u5f3a\u5927\u7684\u529f\u80fd\uff0c\u5305\u62ec\u4e91\u5b58\u50a8\u96c6\u6210\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"http://www.coreftp.com/",children:"Core FTP"})})," - \u4e00\u4e2a\u529f\u80fd\u4e30\u5bcc\u7684Windows FTP/SFTP\u5ba2\u6237\u7aef\uff0c\u63d0\u4f9b\u5546\u4e1a\u7248\u548c\u514d\u8d39\u7248\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://www.flashfxp.com/",children:"FlashFXP"})})," - \u4e00\u4e2aWindows\u4e0b\u7684FTP/SFTP\u5ba2\u6237\u7aef\uff0c\u652f\u6301\u591a\u79cd\u534f\u8bae\uff0c\u9002\u5408\u4e13\u4e1a\u7528\u6237\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://www.globalscape.com/cuteftp",children:"CuteFTP"})})," - \u63d0\u4f9b\u4e13\u4e1a\u7ea7\u522b\u7684FTP/SFTP\u529f\u80fd\uff0c\u9002\u7528\u4e8e\u4f01\u4e1a\u7528\u6237\uff0c\u652f\u6301Windows\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://www.smartftp.com/",children:"SmartFTP"})})," - \u4e00\u4e2a\u529f\u80fd\u5f3a\u5927\u7684Windows FTP/SFTP\u5ba2\u6237\u7aef\uff0c\u652f\u6301\u591a\u79cd\u534f\u8bae\u548c\u9ad8\u7ea7\u529f\u80fd\u5982FTP\u4ee3\u7406\u3001\u52a0\u5bc6\u4f20\u8f93\u7b49\u3002"]}),"\n"]}),"\n"]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"\u652f\u6301FTP/SFTP\u7684\u7ec8\u7aef\u6a21\u62df\u5668"}),"\uff1a"]}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://termius.com/",children:"Termius"})})," - \u4e00\u4e2a\u8de8\u5e73\u53f0\u7684\u7ec8\u7aef\u5de5\u5177\uff0c\u754c\u9762\u7f8e\u89c2\uff0c\u652f\u6301SSH\u3001Telnet\u3001SFTP\u7b49\u534f\u8bae\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://www.chiark.greenend.org.uk/~sgtatham/putty/",children:"PuTTY"})})," - \u4e00\u4e2a\u514d\u8d39\u4e14\u5f00\u6e90\u7684SSH\u548cTelnet\u5ba2\u6237\u7aef\uff0c\u9002\u7528\u4e8eWindows\u3002\u5b83\u652f\u6301SSH\u3001Telnet\u3001rlogin\u548c\u539f\u59cbTCP\u8fde\u63a5\uff0c\u5e76\u53ef\u4ee5\u4fdd\u5b58\u4f1a\u8bdd\u8bbe\u7f6e\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://iterm2.com/",children:"iTerm2"})})," - \u4e13\u4e3aMac\u8bbe\u8ba1\u7684\u7ec8\u7aef\u6a21\u62df\u5668\uff0c\u63d0\u4f9b\u6bd4\u7cfb\u7edf\u9ed8\u8ba4\u7ec8\u7aef\u66f4\u4e30\u5bcc\u7684\u529f\u80fd\uff0c\u5982\u5206\u5272\u7a97\u53e3\u3001\u641c\u7d22\u3001\u81ea\u52a8\u8865\u5168\u3001\u914d\u8272\u65b9\u6848\u7b49\uff0c\u652f\u6301SFTP\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://github.com/microsoft/terminal",children:"Windows Terminal"})})," - \u7531Microsoft\u5f00\u53d1\u7684\u5f00\u6e90\u7ec8\u7aef\u5e94\u7528\u7a0b\u5e8f\uff0c\u9002\u7528\u4e8eWindows 10\u548cWindows 11\uff0c\u652f\u6301\u591a\u6807\u7b7e\u3001\u5206\u5272\u7a97\u53e3\u3001\u81ea\u5b9a\u4e49\u914d\u8272\u7b49\u529f\u80fd\uff0c\u5e76\u96c6\u6210\u4e86PowerShell\u3001Command Prompt\u3001WSL\u7b49\uff0c\u652f\u6301SFTP\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://mobaxterm.mobatek.net/",children:"MobaXterm"})})," - \u4e00\u4e2a\u5f3a\u5927\u7684Windows\u7ec8\u7aef\u6a21\u62df\u5668\uff0c\u63d0\u4f9bX11\u670d\u52a1\u5668\u3001SSH\u3001SFTP\u3001\u8fdc\u7a0b\u684c\u9762\u7b49\u591a\u79cd\u529f\u80fd\uff0c\u975e\u5e38\u9002\u5408\u9700\u8981\u8fdc\u7a0b\u8bbf\u95ee\u548c\u7ba1\u7406\u7684\u7528\u6237\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://wiki.gnome.org/Apps/Terminal",children:"GNOME Terminal"})})," - Linux\u7cfb\u7edf\u4e0a\u5e7f\u6cdb\u4f7f\u7528\u7684\u7ec8\u7aef\u6a21\u62df\u5668\uff0c\u57fa\u4e8eGNOME\u684c\u9762\u73af\u5883\uff0c\u652f\u6301\u6807\u7b7e\u9875\u3001\u81ea\u5b9a\u4e49\u914d\u8272\u3001\u900f\u660e\u5ea6\u7b49\uff0c\u652f\u6301SFTP\u3002"]}),"\n"]}),"\n"]}),(0,r.jsx)(s.p,{children:"\u53ea\u7528\u8fc7 WinSC P\u548c Termius \u7684 SFTP \u3002\u76f8\u4fe1\u76f8\u6bd4\u4e8e\u547d\u4ee4\u884c\uff0c\u5927\u591a\u6570\u4eba\u8fd8\u662f\u66f4\u613f\u610f\u4f7f\u7528\u56fe\u5f62\u5316\u7684 FTP/SFTP \u5ba2\u6237\u7aef\u4e00\u4e9b\uff0c\u4f60\u53ef\u4ee5\u5c1d\u8bd5\u4ece\u4ee5\u4e0a\u627e\u51fa\u4e00\u6b3e\u9002\u5408\u4f60\u7684\u56fe\u5f62\u5ba2\u6237\u7aef\u3002"})]}),"\n",(0,r.jsx)(s.h3,{id:"62-lftp\u4ecb\u7ecd",children:"6.2 lftp\u4ecb\u7ecd"}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"ltfp"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u7279\u6027"}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"lftp"})}),(0,r.jsxs)(s.th,{children:[(0,r.jsx)(s.strong,{children:"sftp"})," (Linux\u9ed8\u8ba4)"]})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u534f\u8bae\u652f\u6301"})}),(0,r.jsx)(s.td,{children:"FTP, SFTP, HTTP, HTTPS, FTPS, FISH\u7b49"}),(0,r.jsx)(s.td,{children:"\u4ec5SFTP"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u529f\u80fd\u96c6"})}),(0,r.jsxs)(s.td,{children:["- \u591a\u7ebf\u7a0b\u4e0b\u8f7d",(0,r.jsx)("br",{}),"- \u65ad\u70b9\u7eed\u4f20",(0,r.jsx)("br",{}),"- \u6587\u4ef6\u540c\u6b65",(0,r.jsx)("br",{}),"- \u961f\u5217\u7ba1\u7406",(0,r.jsx)("br",{}),"- \u811a\u672c\u652f\u6301",(0,r.jsx)("br",{}),"- \u76ee\u5f55\u6bd4\u8f83",(0,r.jsx)("br",{}),"- \u81ea\u52a8\u767b\u5f55",(0,r.jsx)("br",{}),"- \u6587\u4ef6\u5217\u8868\u7f13\u5b58",(0,r.jsx)("br",{}),"- \u4e66\u7b7e\u7b49"]}),(0,r.jsxs)(s.td,{children:["- \u57fa\u672c\u6587\u4ef6\u64cd\u4f5c\uff08\u4e0a\u4f20\u3001\u4e0b\u8f7d\u3001\u5220\u9664\u3001\u91cd\u547d\u540d\u3001\u6743\u9650\u7ba1\u7406\u7b49\uff09",(0,r.jsx)("br",{}),"- \u57fa\u672c\u547d\u4ee4\u884c\u64cd\u4f5c"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u7528\u6237\u4f53\u9a8c"})}),(0,r.jsxs)(s.td,{children:["- \u66f4\u53cb\u597d\u7684\u7528\u6237\u754c\u9762",(0,r.jsx)("br",{}),"- \u4e30\u5bcc\u7684\u4ea4\u4e92\u5f0f\u547d\u4ee4",(0,r.jsx)("br",{}),"- \u9002\u5408\u81ea\u52a8\u5316\u811a\u672c\u548c\u6279\u5904\u7406\u4efb\u52a1"]}),(0,r.jsxs)(s.td,{children:["- \u7b80\u6d01\u7684\u7528\u6237\u754c\u9762",(0,r.jsx)("br",{}),"- \u4f9d\u8d56\u4e8e\u57fa\u672c\u7684\u547d\u4ee4\u884c\u64cd\u4f5c"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u517c\u5bb9\u6027"})}),(0,r.jsxs)(s.td,{children:["- \u9700\u8981\u989d\u5916\u5b89\u88c5",(0,r.jsx)("br",{}),"- \u652f\u6301\u591a\u79cd\u64cd\u4f5c\u7cfb\u7edf"]}),(0,r.jsxs)(s.td,{children:["- \u4f5c\u4e3aOpenSSH\u7684\u4e00\u90e8\u5206\uff0c\u901a\u5e38\u9ed8\u8ba4\u5b89\u88c5",(0,r.jsx)("br",{}),"- \u4ec5\u652f\u6301Linux\u548c\u7c7bUnix\u7cfb\u7edf"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u914d\u7f6e\u548c\u6269\u5c55\u6027"})}),(0,r.jsxs)(s.td,{children:["- \u4e30\u5bcc\u7684\u914d\u7f6e\u9009\u9879",(0,r.jsx)("br",{}),"- \u652f\u6301\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u548c\u547d\u4ee4\u884c\u53c2\u6570\u9ad8\u5ea6\u5b9a\u5236\u5316"]}),(0,r.jsxs)(s.td,{children:["- \u914d\u7f6e\u9009\u9879\u8f83\u5c11",(0,r.jsx)("br",{}),"- \u4e3b\u8981\u901a\u8fc7",(0,r.jsx)(s.code,{children:".ssh/config"}),"\u6587\u4ef6\u8fdb\u884c\u914d\u7f6e"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u6027\u80fd"})}),(0,r.jsxs)(s.td,{children:["- \u652f\u6301\u591a\u7ebf\u7a0b\u4e0b\u8f7d\uff0c\u63d0\u9ad8\u4f20\u8f93\u901f\u5ea6",(0,r.jsx)("br",{}),"- \u65ad\u70b9\u7eed\u4f20\u529f\u80fd"]}),(0,r.jsxs)(s.td,{children:["- \u5355\u7ebf\u7a0b\u4f20\u8f93",(0,r.jsx)("br",{}),"- \u901f\u5ea6\u53ef\u80fd\u4e0d\u5982",(0,r.jsx)(s.code,{children:"lftp"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u811a\u672c\u548c\u81ea\u52a8\u5316"})}),(0,r.jsxs)(s.td,{children:["- \u7279\u522b\u9002\u5408\u811a\u672c\u548c\u81ea\u52a8\u5316\u4efb\u52a1",(0,r.jsx)("br",{}),"- \u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u547d\u4ee4\u548c\u811a\u672c\u529f\u80fd"]}),(0,r.jsxs)(s.td,{children:["- \u53ef\u4ee5\u7528\u4e8e\u811a\u672c\uff0c\u4f46\u529f\u80fd\u4e0d\u5982",(0,r.jsx)(s.code,{children:"lftp"}),"\u4e30\u5bcc",(0,r.jsx)("br",{}),"- \u9002\u5408\u57fa\u672c\u7684\u81ea\u52a8\u5316\u4efb\u52a1"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u5b89\u88c5"})}),(0,r.jsxs)(s.td,{children:["- \u53ef\u80fd\u9700\u8981\u989d\u5916\u5b89\u88c5",(0,r.jsx)("br",{}),"- \u901a\u5e38\u901a\u8fc7\u5305\u7ba1\u7406\u5668\u5b89\u88c5"]}),(0,r.jsx)(s.td,{children:"- \u9ed8\u8ba4\u5b89\u88c5\u5728\u5927\u591a\u6570Linux\u7cfb\u7edf\u4e2d"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u9002\u5408\u7528\u6237\u573a\u666f"})}),(0,r.jsxs)(s.td,{children:["- \u9700\u8981\u9ad8\u7ea7\u6587\u4ef6\u64cd\u4f5c\u548c\u81ea\u52a8\u5316\u7684\u7528\u6237",(0,r.jsx)("br",{}),"- \u591a\u534f\u8bae\u652f\u6301\u9700\u6c42",(0,r.jsx)("br",{}),"- \u5927\u6587\u4ef6\u6216\u6279\u91cf\u6587\u4ef6\u4f20\u8f93\u4efb\u52a1",(0,r.jsx)("br",{}),"- \u9700\u8981\u65ad\u70b9\u7eed\u4f20\u529f\u80fd\u7684\u7528\u6237"]}),(0,r.jsxs)(s.td,{children:["- \u4ec5\u9700\u57fa\u672cSFTP\u529f\u80fd\u7684\u7528\u6237",(0,r.jsx)("br",{}),"- \u7b80\u5355\u6587\u4ef6\u4f20\u8f93\u4efb\u52a1",(0,r.jsx)("br",{}),"- \u7cfb\u7edf\u9ed8\u8ba4\u5de5\u5177\u5373\u53ef\u6ee1\u8db3\u9700\u6c42\u7684\u7528\u6237",(0,r.jsx)("br",{}),"- \u719f\u6089\u547d\u4ee4\u884c\u64cd\u4f5c\u7684\u7528\u6237"]})]})]})]})]})]})}function j(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}}}]);