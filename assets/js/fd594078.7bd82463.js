"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3418],{7114:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>h,contentTitle:()=>r,default:()=>o,frontMatter:()=>c,metadata:()=>l,toc:()=>t});const l=JSON.parse('{"id":"command/\u6587\u4ef6\u7cfb\u7edf/blkid","title":"blkid","description":"\u2b50\u67e5\u770b\u78c1\u76d8\u5c5e\u6027","source":"@site/docs/02-command/60-\u6587\u4ef6\u7cfb\u7edf/blkid.md","sourceDirName":"02-command/60-\u6587\u4ef6\u7cfb\u7edf","slug":"/command/\u6587\u4ef6\u7cfb\u7edf/blkid","permalink":"/command/\u6587\u4ef6\u7cfb\u7edf/blkid","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/02-command/60-\u6587\u4ef6\u7cfb\u7edf/blkid.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"badblocks","permalink":"/command/\u6587\u4ef6\u7cfb\u7edf/badblocks"},"next":{"title":"df","permalink":"/command/\u6587\u4ef6\u7cfb\u7edf/df"}}');var s=n(4848),i=n(8453);const c={},r=void 0,h={},t=[{value:"\u57fa\u7840\u8bed\u6cd5",id:"\u57fa\u7840\u8bed\u6cd5",level:2},{value:"\u5e38\u7528\u9009\u9879",id:"\u5e38\u7528\u9009\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b 1: \u5217\u51fa\u6240\u6709\u8bbe\u5907\u7684\u5c5e\u6027",id:"\u793a\u4f8b-1-\u5217\u51fa\u6240\u6709\u8bbe\u5907\u7684\u5c5e\u6027",level:3},{value:"\u793a\u4f8b 2: \u67e5\u8be2\u7279\u5b9a\u8bbe\u5907\u7684\u4fe1\u606f",id:"\u793a\u4f8b-2-\u67e5\u8be2\u7279\u5b9a\u8bbe\u5907\u7684\u4fe1\u606f",level:3},{value:"\u793a\u4f8b 3: \u4ec5\u663e\u793a\u8bbe\u5907\u7684 UUID",id:"\u793a\u4f8b-3-\u4ec5\u663e\u793a\u8bbe\u5907\u7684-uuid",level:3},{value:"\u793a\u4f8b 4: \u6309\u6761\u4ef6\u8fc7\u6ee4\u8bbe\u5907",id:"\u793a\u4f8b-4-\u6309\u6761\u4ef6\u8fc7\u6ee4\u8bbe\u5907",level:3},{value:"\u793a\u4f8b 5: \u4f7f\u7528\u81ea\u5b9a\u4e49\u8f93\u51fa\u683c\u5f0f",id:"\u793a\u4f8b-5-\u4f7f\u7528\u81ea\u5b9a\u4e49\u8f93\u51fa\u683c\u5f0f",level:3},{value:"\u793a\u4f8b 6: \u5c06\u4fe1\u606f\u5199\u5165\u7f13\u5b58\u6587\u4ef6",id:"\u793a\u4f8b-6-\u5c06\u4fe1\u606f\u5199\u5165\u7f13\u5b58\u6587\u4ef6",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u4e0e\u5176\u4ed6\u547d\u4ee4\u7684\u5173\u7cfb",id:"\u4e0e\u5176\u4ed6\u547d\u4ee4\u7684\u5173\u7cfb",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function x(e){const d={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.p,{children:"\u2b50\u67e5\u770b\u78c1\u76d8\u5c5e\u6027"}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"blkid"})," \u662f Linux \u7cfb\u7edf\u4e2d\u7684\u4e00\u4e2a\u547d\u4ee4\uff0c\u7528\u4e8e\u663e\u793a\u53ef\u7528\u5757\u8bbe\u5907\uff08\u5982\u786c\u76d8\u5206\u533a\u3001U\u76d8\u7b49\uff09\u7684\u5c5e\u6027\u4fe1\u606f\uff0c\u5305\u62ec UUID\uff08\u901a\u7528\u552f\u4e00\u6807\u8bc6\u7b26\uff09\u3001LABEL\uff08\u5206\u533a\u6807\u7b7e\uff09\u3001\u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b\u7b49\u3002\u5b83\u662f\u7cfb\u7edf\u7ba1\u7406\u5458\u7ba1\u7406\u5b58\u50a8\u8bbe\u5907\u7684\u91cd\u8981\u5de5\u5177\u3002"]}),"\n",(0,s.jsx)(d.h2,{id:"\u57fa\u7840\u8bed\u6cd5",children:"\u57fa\u7840\u8bed\u6cd5"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-bash",children:"blkid [\u9009\u9879] [\u8bbe\u5907...]\n"})}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.strong,{children:"\u8bbe\u5907"}),": \u53ef\u9009\u53c2\u6570\uff0c\u6307\u5b9a\u8981\u67e5\u8be2\u7684\u8bbe\u5907\u8def\u5f84\uff08\u5982 ",(0,s.jsx)(d.code,{children:"/dev/sda1"}),"\uff09\u3002\u5982\u679c\u672a\u6307\u5b9a\uff0c\u5c06\u5217\u51fa\u6240\u6709\u8bbe\u5907\u7684\u4fe1\u606f\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.strong,{children:"\u9009\u9879"}),": \u4fee\u6539 ",(0,s.jsx)(d.code,{children:"blkid"})," \u547d\u4ee4\u7684\u884c\u4e3a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(d.h2,{id:"\u5e38\u7528\u9009\u9879",children:"\u5e38\u7528\u9009\u9879"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"\u9009\u9879"}),(0,s.jsx)(d.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"-o format"})}),(0,s.jsxs)(d.td,{children:["\u8bbe\u7f6e\u8f93\u51fa\u683c\u5f0f\uff0c\u4f8b\u5982 ",(0,s.jsx)(d.code,{children:"export"}),"\u3001",(0,s.jsx)(d.code,{children:"full"})," \u7b49\u3002"]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"-s tag"})}),(0,s.jsx)(d.td,{children:"\u6307\u5b9a\u4ec5\u663e\u793a\u7279\u5b9a\u7684\u6807\u7b7e\uff08\u5982 UUID \u6216 LABEL\uff09\u3002"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"-t NAME=VAL"})}),(0,s.jsxs)(d.td,{children:["\u6309\u6761\u4ef6\u8fc7\u6ee4\u8bbe\u5907\u4fe1\u606f\uff0c\u4f8b\u5982 ",(0,s.jsx)(d.code,{children:"UUID=xxxx"}),"\u3002"]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"-p"})}),(0,s.jsx)(d.td,{children:"\u5bf9\u666e\u901a\u6587\u4ef6\u800c\u975e\u8bbe\u5907\u6587\u4ef6\u6267\u884c\u63a2\u6d4b\u64cd\u4f5c\u3002"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"-c file"})}),(0,s.jsxs)(d.td,{children:["\u4f7f\u7528\u81ea\u5b9a\u4e49\u7f13\u5b58\u6587\u4ef6\uff08\u9ed8\u8ba4 ",(0,s.jsx)(d.code,{children:"/etc/blkid.tab"}),"\uff09\u3002"]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"-w file"})}),(0,s.jsx)(d.td,{children:"\u5199\u5165\u8bbe\u5907\u4fe1\u606f\u5230\u6307\u5b9a\u7684\u7f13\u5b58\u6587\u4ef6\u3002"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"-h"})}),(0,s.jsx)(d.td,{children:"\u663e\u793a\u5e2e\u52a9\u4fe1\u606f\u5e76\u9000\u51fa\u3002"})]})]})]}),"\n",(0,s.jsx)(d.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(d.h3,{id:"\u793a\u4f8b-1-\u5217\u51fa\u6240\u6709\u8bbe\u5907\u7684\u5c5e\u6027",children:"\u793a\u4f8b 1: \u5217\u51fa\u6240\u6709\u8bbe\u5907\u7684\u5c5e\u6027"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-bash",children:"blkid\n"})}),"\n",(0,s.jsx)(d.p,{children:"\u8f93\u51fa\u7c7b\u4f3c\uff1a"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{children:'/dev/sda1: UUID="1234-5678" TYPE="ext4" PARTLABEL="primary"\r\n/dev/sda2: UUID="ABCD-EF01" TYPE="vfat" PARTUUID="0001-0002"\n'})}),"\n",(0,s.jsx)(d.h3,{id:"\u793a\u4f8b-2-\u67e5\u8be2\u7279\u5b9a\u8bbe\u5907\u7684\u4fe1\u606f",children:"\u793a\u4f8b 2: \u67e5\u8be2\u7279\u5b9a\u8bbe\u5907\u7684\u4fe1\u606f"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-bash",children:"blkid /dev/sda1\n"})}),"\n",(0,s.jsx)(d.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{children:'/dev/sda1: UUID="1234-5678" TYPE="ext4" PARTLABEL="primary"\n'})}),"\n",(0,s.jsx)(d.h3,{id:"\u793a\u4f8b-3-\u4ec5\u663e\u793a\u8bbe\u5907\u7684-uuid",children:"\u793a\u4f8b 3: \u4ec5\u663e\u793a\u8bbe\u5907\u7684 UUID"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-bash",children:"blkid -s UUID /dev/sda1\n"})}),"\n",(0,s.jsx)(d.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{children:'/dev/sda1: UUID="1234-5678"\n'})}),"\n",(0,s.jsx)(d.h3,{id:"\u793a\u4f8b-4-\u6309\u6761\u4ef6\u8fc7\u6ee4\u8bbe\u5907",children:"\u793a\u4f8b 4: \u6309\u6761\u4ef6\u8fc7\u6ee4\u8bbe\u5907"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-bash",children:"blkid -t UUID=1234-5678\n"})}),"\n",(0,s.jsx)(d.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{children:'/dev/sda1: UUID="1234-5678" TYPE="ext4"\n'})}),"\n",(0,s.jsx)(d.h3,{id:"\u793a\u4f8b-5-\u4f7f\u7528\u81ea\u5b9a\u4e49\u8f93\u51fa\u683c\u5f0f",children:"\u793a\u4f8b 5: \u4f7f\u7528\u81ea\u5b9a\u4e49\u8f93\u51fa\u683c\u5f0f"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-bash",children:"blkid -o export\n"})}),"\n",(0,s.jsx)(d.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{children:"DEVNAME=/dev/sda1\r\nUUID=1234-5678\r\nTYPE=ext4\r\nPARTLABEL=primary\n"})}),"\n",(0,s.jsx)(d.h3,{id:"\u793a\u4f8b-6-\u5c06\u4fe1\u606f\u5199\u5165\u7f13\u5b58\u6587\u4ef6",children:"\u793a\u4f8b 6: \u5c06\u4fe1\u606f\u5199\u5165\u7f13\u5b58\u6587\u4ef6"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-bash",children:"blkid -w /tmp/blkid-cache.tab\n"})}),"\n",(0,s.jsxs)(d.p,{children:["\u6b64\u547d\u4ee4\u4f1a\u5c06\u8bbe\u5907\u4fe1\u606f\u5199\u5165 ",(0,s.jsx)(d.code,{children:"/tmp/blkid-cache.tab"}),"\u3002"]}),"\n",(0,s.jsx)(d.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsxs)(d.ol,{children:["\n",(0,s.jsxs)(d.li,{children:["\u9700\u8981\u5177\u5907\u9002\u5f53\u6743\u9650\uff08\u901a\u5e38\u662f root \u6743\u9650\uff09\u624d\u80fd\u6267\u884c ",(0,s.jsx)(d.code,{children:"blkid"})," \u547d\u4ee4\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:["\u5982\u679c\u8bbe\u5907\u672a\u88ab\u6302\u8f7d\uff0c",(0,s.jsx)(d.code,{children:"blkid"})," \u4ecd\u7136\u53ef\u4ee5\u68c0\u6d4b\u5176\u5c5e\u6027\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:["\u4f7f\u7528 ",(0,s.jsx)(d.code,{children:"blkid"})," \u67e5\u8be2\u4fe1\u606f\u65f6\u4e0d\u4f1a\u4fee\u6539\u8bbe\u5907\uff0c\u4f46\u67d0\u4e9b\u9009\u9879\uff08\u5982 ",(0,s.jsx)(d.code,{children:"-w"}),"\uff09\u53ef\u80fd\u4f1a\u66f4\u65b0\u7f13\u5b58\u6587\u4ef6\u3002"]}),"\n"]}),"\n",(0,s.jsx)(d.h2,{id:"\u4e0e\u5176\u4ed6\u547d\u4ee4\u7684\u5173\u7cfb",children:"\u4e0e\u5176\u4ed6\u547d\u4ee4\u7684\u5173\u7cfb"}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.strong,{children:(0,s.jsx)(d.code,{children:"lsblk"})}),": \u7528\u4e8e\u663e\u793a\u5757\u8bbe\u5907\u7684\u6811\u72b6\u7ed3\u6784\u548c\u6302\u8f7d\u70b9\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.strong,{children:(0,s.jsx)(d.code,{children:"df"})}),": \u7528\u4e8e\u663e\u793a\u6302\u8f7d\u7684\u6587\u4ef6\u7cfb\u7edf\u7684\u78c1\u76d8\u4f7f\u7528\u60c5\u51b5\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:[(0,s.jsxs)(d.strong,{children:[(0,s.jsx)(d.code,{children:"mount"})," \u548c ",(0,s.jsx)(d.code,{children:"umount"})]}),": \u7528\u4e8e\u6302\u8f7d\u548c\u5378\u8f7d\u8bbe\u5907\u3002"]}),"\n"]}),"\n",(0,s.jsx)(d.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"blkid"})," \u662f\u4e00\u4e2a\u5feb\u901f\u3001\u7b80\u5355\u7684\u5de5\u5177\uff0c\u7528\u4e8e\u83b7\u53d6\u5757\u8bbe\u5907\u7684\u8be6\u7ec6\u4fe1\u606f\u3002\u5728\u6587\u4ef6\u7cfb\u7edf\u7ba1\u7406\u3001\u8bbe\u5907\u6302\u8f7d\u548c\u6545\u969c\u6392\u9664\u8fc7\u7a0b\u4e2d\uff0c\u719f\u7ec3\u4f7f\u7528 ",(0,s.jsx)(d.code,{children:"blkid"})," \u53ef\u4ee5\u5927\u5927\u63d0\u9ad8\u6548\u7387\u3002"]})]})}function o(e={}){const{wrapper:d}={...(0,i.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},8453:(e,d,n)=>{n.d(d,{R:()=>c,x:()=>r});var l=n(6540);const s={},i=l.createContext(s);function c(e){const d=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function r(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),l.createElement(i.Provider,{value:d},e.children)}}}]);