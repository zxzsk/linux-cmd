"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6924],{7259:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>r,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"command/\u6587\u4ef6\u7cfb\u7edf/mdadm-fault-correcting","title":"mdadm-fault-correcting","description":"\u2b50\u2b50mdadm \u6545\u969c\u4fee\u590d\u6d41\u7a0b","source":"@site/docs/02-command/60-\u6587\u4ef6\u7cfb\u7edf/mdadm-fault-correcting.md","sourceDirName":"02-command/60-\u6587\u4ef6\u7cfb\u7edf","slug":"/a18038f7","permalink":"/a18038f7","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/02-command/60-\u6587\u4ef6\u7cfb\u7edf/mdadm-fault-correcting.md","tags":[],"version":"current","frontMatter":{"slug":"/a18038f7"},"sidebar":"tutorialSidebar","previous":{"title":"mdadm-fault-correcting-practice","permalink":"/1af12adf"},"next":{"title":"mdadm","permalink":"/57b3a18a"}}');var l=n(4848),c=n(8453);const a={slug:"/a18038f7"},i="mdadm \u6545\u969c\u4fee\u590d\u6d41\u7a0b",r={},h=[{value:"1. RAID \u5e38\u89c1\u6545\u969c\u7c7b\u578b",id:"1-raid-\u5e38\u89c1\u6545\u969c\u7c7b\u578b",level:3},{value:"2. \u68c0\u67e5 RAID \u72b6\u6001",id:"2-\u68c0\u67e5-raid-\u72b6\u6001",level:3},{value:"2.1 \u4f7f\u7528 <code>cat /proc/mdstat</code>",id:"21-\u4f7f\u7528-cat-procmdstat",level:4},{value:"2.2 \u67e5\u770b\u8be6\u7ec6\u4fe1\u606f",id:"22-\u67e5\u770b\u8be6\u7ec6\u4fe1\u606f",level:4},{value:"3. \u4fee\u590d\u964d\u7ea7\u7684 RAID \u9635\u5217",id:"3-\u4fee\u590d\u964d\u7ea7\u7684-raid-\u9635\u5217",level:3},{value:"3.1 \u6807\u8bb0\u6545\u969c\u78c1\u76d8",id:"31-\u6807\u8bb0\u6545\u969c\u78c1\u76d8",level:4},{value:"3.2 \u79fb\u9664\u6545\u969c\u78c1\u76d8",id:"32-\u79fb\u9664\u6545\u969c\u78c1\u76d8",level:4},{value:"3.3 \u66ff\u6362\u78c1\u76d8\u5e76\u6dfb\u52a0\u5230\u9635\u5217",id:"33-\u66ff\u6362\u78c1\u76d8\u5e76\u6dfb\u52a0\u5230\u9635\u5217",level:4},{value:"3.4 \u81ea\u52a8\u91cd\u5efa",id:"34-\u81ea\u52a8\u91cd\u5efa",level:4},{value:"4. \u91cd\u5efa RAID \u9635\u5217",id:"4-\u91cd\u5efa-raid-\u9635\u5217",level:3},{value:"4.1 \u9635\u5217\u672a\u542f\u52a8\uff08Inactive\uff09",id:"41-\u9635\u5217\u672a\u542f\u52a8inactive",level:4},{value:"4.2 \u624b\u52a8\u6307\u5b9a\u78c1\u76d8",id:"42-\u624b\u52a8\u6307\u5b9a\u78c1\u76d8",level:4},{value:"4.3 \u91cd\u5efa\u7f3a\u5931\u914d\u7f6e",id:"43-\u91cd\u5efa\u7f3a\u5931\u914d\u7f6e",level:4},{value:"5. \u6570\u636e\u6062\u590d",id:"5-\u6570\u636e\u6062\u590d",level:3},{value:"5.1 \u4f7f\u7528 RAID \u5de5\u5177\u6062\u590d\u6570\u636e",id:"51-\u4f7f\u7528-raid-\u5de5\u5177\u6062\u590d\u6570\u636e",level:4},{value:"5.2 \u4f7f\u7528 <code>fsck</code> \u68c0\u67e5\u6587\u4ef6\u7cfb\u7edf",id:"52-\u4f7f\u7528-fsck-\u68c0\u67e5\u6587\u4ef6\u7cfb\u7edf",level:4},{value:"6. \u5220\u9664\u5e76\u91cd\u65b0\u521b\u5efa RAID \u9635\u5217",id:"6-\u5220\u9664\u5e76\u91cd\u65b0\u521b\u5efa-raid-\u9635\u5217",level:3},{value:"6.1 \u505c\u6b62\u9635\u5217",id:"61-\u505c\u6b62\u9635\u5217",level:4},{value:"6.2 \u5220\u9664\u8d85\u7ea7\u5757",id:"62-\u5220\u9664\u8d85\u7ea7\u5757",level:4},{value:"6.3 \u91cd\u65b0\u521b\u5efa\u9635\u5217",id:"63-\u91cd\u65b0\u521b\u5efa\u9635\u5217",level:4},{value:"7. \u603b\u7ed3 \ud83d\ude0a",id:"7-\u603b\u7ed3-",level:3}];function t(e){const d={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d.p,{children:"\u2b50\u2b50mdadm \u6545\u969c\u4fee\u590d\u6d41\u7a0b"}),"\n",(0,l.jsx)(d.header,{children:(0,l.jsx)(d.h1,{id:"mdadm-\u6545\u969c\u4fee\u590d\u6d41\u7a0b",children:"mdadm \u6545\u969c\u4fee\u590d\u6d41\u7a0b"})}),"\n",(0,l.jsx)(d.h3,{id:"1-raid-\u5e38\u89c1\u6545\u969c\u7c7b\u578b",children:"1. RAID \u5e38\u89c1\u6545\u969c\u7c7b\u578b"}),"\n",(0,l.jsx)(d.p,{children:"RAID \u9635\u5217\u53ef\u80fd\u9047\u5230\u4ee5\u4e0b\u5e38\u89c1\u95ee\u9898\uff1a"}),"\n",(0,l.jsxs)(d.ol,{children:["\n",(0,l.jsx)(d.li,{children:"RAID \u9635\u5217\u964d\u7ea7\uff08Degraded\uff09\uff1a\u4e00\u4e2a\u6216\u591a\u4e2a\u78c1\u76d8\u5931\u6548\u3002"}),"\n",(0,l.jsx)(d.li,{children:"RAID \u9635\u5217\u4e0d\u53ef\u7528\uff08Inactive\uff09\uff1aRAID \u914d\u7f6e\u635f\u574f\u6216\u672a\u6b63\u786e\u7ec4\u88c5\u3002"}),"\n",(0,l.jsx)(d.li,{children:"RAID \u9635\u5217\u5d29\u6e83\uff1a\u591a\u4e2a\u78c1\u76d8\u5931\u6548\uff0c\u6570\u636e\u4e0d\u53ef\u6062\u590d\u3002"}),"\n"]}),"\n",(0,l.jsx)(d.h3,{id:"2-\u68c0\u67e5-raid-\u72b6\u6001",children:"2. \u68c0\u67e5 RAID \u72b6\u6001"}),"\n",(0,l.jsxs)(d.h4,{id:"21-\u4f7f\u7528-cat-procmdstat",children:["2.1 \u4f7f\u7528 ",(0,l.jsx)(d.code,{children:"cat /proc/mdstat"})]}),"\n",(0,l.jsx)(d.pre,{children:(0,l.jsx)(d.code,{className:"language-bash",children:"cat /proc/mdstat\n"})}),"\n",(0,l.jsx)(d.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff08\u964d\u7ea7\u9635\u5217\uff09\uff1a"}),"\n",(0,l.jsx)(d.pre,{children:(0,l.jsx)(d.code,{children:"md0 : active raid1 sdb[1]\n      1048576 blocks [2/1] [U_]\n"})}),"\n",(0,l.jsx)(d.h4,{id:"22-\u67e5\u770b\u8be6\u7ec6\u4fe1\u606f",children:"2.2 \u67e5\u770b\u8be6\u7ec6\u4fe1\u606f"}),"\n",(0,l.jsx)(d.pre,{children:(0,l.jsx)(d.code,{className:"language-bash",children:"sudo mdadm --detail /dev/md0\n"})}),"\n",(0,l.jsx)(d.p,{children:"\u8f93\u51fa\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(d.pre,{children:(0,l.jsx)(d.code,{children:"/dev/md0:\n        State : clean, degraded\n"})}),"\n",(0,l.jsx)(d.h3,{id:"3-\u4fee\u590d\u964d\u7ea7\u7684-raid-\u9635\u5217",children:"3. \u4fee\u590d\u964d\u7ea7\u7684 RAID \u9635\u5217"}),"\n",(0,l.jsx)(d.h4,{id:"31-\u6807\u8bb0\u6545\u969c\u78c1\u76d8",children:"3.1 \u6807\u8bb0\u6545\u969c\u78c1\u76d8"}),"\n",(0,l.jsx)(d.p,{children:"\u5982\u679c RAID \u9635\u5217\u4e2d\u6709\u6545\u969c\u78c1\u76d8\uff0c\u9996\u5148\u6807\u8bb0\u8be5\u78c1\u76d8\u4e3a\u6545\u969c\uff1a"}),"\n",(0,l.jsx)(d.pre,{children:(0,l.jsx)(d.code,{className:"language-bash",children:"sudo mdadm --fail /dev/md0 /dev/sdc\n"})}),"\n",(0,l.jsx)(d.h4,{id:"32-\u79fb\u9664\u6545\u969c\u78c1\u76d8",children:"3.2 \u79fb\u9664\u6545\u969c\u78c1\u76d8"}),"\n",(0,l.jsx)(d.pre,{children:(0,l.jsx)(d.code,{className:"language-bash",children:"sudo mdadm --remove /dev/md0 /dev/sdc\n"})}),"\n",(0,l.jsx)(d.h4,{id:"33-\u66ff\u6362\u78c1\u76d8\u5e76\u6dfb\u52a0\u5230\u9635\u5217",children:"3.3 \u66ff\u6362\u78c1\u76d8\u5e76\u6dfb\u52a0\u5230\u9635\u5217"}),"\n",(0,l.jsx)(d.p,{children:"\u5c06\u65b0\u7684\u78c1\u76d8\u6dfb\u52a0\u5230\u9635\u5217\u4e2d\uff1a"}),"\n",(0,l.jsx)(d.pre,{children:(0,l.jsx)(d.code,{className:"language-bash",children:"sudo mdadm --add /dev/md0 /dev/sdc\n"})}),"\n",(0,l.jsx)(d.h4,{id:"34-\u81ea\u52a8\u91cd\u5efa",children:"3.4 \u81ea\u52a8\u91cd\u5efa"}),"\n",(0,l.jsx)(d.p,{children:"RAID \u9635\u5217\u4f1a\u81ea\u52a8\u5f00\u59cb\u91cd\u5efa\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u8fdb\u5ea6\uff1a"}),"\n",(0,l.jsx)(d.pre,{children:(0,l.jsx)(d.code,{className:"language-bash",children:"cat /proc/mdstat\n"})}),"\n",(0,l.jsx)(d.h3,{id:"4-\u91cd\u5efa-raid-\u9635\u5217",children:"4. \u91cd\u5efa RAID \u9635\u5217"}),"\n",(0,l.jsx)(d.h4,{id:"41-\u9635\u5217\u672a\u542f\u52a8inactive",children:"4.1 \u9635\u5217\u672a\u542f\u52a8\uff08Inactive\uff09"}),"\n",(0,l.jsxs)(d.p,{children:["\u5982\u679c RAID \u9635\u5217\u72b6\u6001\u4e3a ",(0,l.jsx)(d.code,{children:"inactive"}),"\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u91cd\u65b0\u7ec4\u88c5\uff1a"]}),"\n",(0,l.jsx)(d.pre,{children:(0,l.jsx)(d.code,{className:"language-bash",children:"sudo mdadm --assemble --scan\n"})}),"\n",(0,l.jsx)(d.h4,{id:"42-\u624b\u52a8\u6307\u5b9a\u78c1\u76d8",children:"4.2 \u624b\u52a8\u6307\u5b9a\u78c1\u76d8"}),"\n",(0,l.jsx)(d.p,{children:"\u82e5\u81ea\u52a8\u7ec4\u88c5\u5931\u8d25\uff0c\u53ef\u4ee5\u624b\u52a8\u6307\u5b9a\u53c2\u4e0e\u7684\u78c1\u76d8\uff1a"}),"\n",(0,l.jsx)(d.pre,{children:(0,l.jsx)(d.code,{className:"language-bash",children:"sudo mdadm --assemble /dev/md0 /dev/sdb /dev/sdc\n"})}),"\n",(0,l.jsx)(d.h4,{id:"43-\u91cd\u5efa\u7f3a\u5931\u914d\u7f6e",children:"4.3 \u91cd\u5efa\u7f3a\u5931\u914d\u7f6e"}),"\n",(0,l.jsxs)(d.p,{children:["\u5982\u679c ",(0,l.jsx)(d.code,{children:"/etc/mdadm/mdadm.conf"})," \u914d\u7f6e\u4e22\u5931\uff0c\u53ef\u91cd\u65b0\u751f\u6210\uff1a"]}),"\n",(0,l.jsx)(d.pre,{children:(0,l.jsx)(d.code,{className:"language-bash",children:"sudo mdadm --detail --scan >> /etc/mdadm/mdadm.conf\n"})}),"\n",(0,l.jsx)(d.h3,{id:"5-\u6570\u636e\u6062\u590d",children:"5. \u6570\u636e\u6062\u590d"}),"\n",(0,l.jsx)(d.h4,{id:"51-\u4f7f\u7528-raid-\u5de5\u5177\u6062\u590d\u6570\u636e",children:"5.1 \u4f7f\u7528 RAID \u5de5\u5177\u6062\u590d\u6570\u636e"}),"\n",(0,l.jsxs)(d.ul,{children:["\n",(0,l.jsxs)(d.li,{children:["\u786e\u8ba4 RAID \u9635\u5217\u7684\u7ea7\u522b\u548c\u5e03\u5c40\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a\n",(0,l.jsx)(d.pre,{children:(0,l.jsx)(d.code,{className:"language-bash",children:"sudo mdadm --examine /dev/sdX\n"})}),"\n"]}),"\n",(0,l.jsx)(d.li,{children:"\u6839\u636e\u8f93\u51fa\u4fe1\u606f\uff0c\u624b\u52a8\u7ec4\u88c5\u9635\u5217\u6062\u590d\u6570\u636e\u3002"}),"\n"]}),"\n",(0,l.jsxs)(d.h4,{id:"52-\u4f7f\u7528-fsck-\u68c0\u67e5\u6587\u4ef6\u7cfb\u7edf",children:["5.2 \u4f7f\u7528 ",(0,l.jsx)(d.code,{children:"fsck"})," \u68c0\u67e5\u6587\u4ef6\u7cfb\u7edf"]}),"\n",(0,l.jsx)(d.p,{children:"RAID \u9635\u5217\u6062\u590d\u540e\uff0c\u68c0\u67e5\u6587\u4ef6\u7cfb\u7edf\u662f\u5426\u635f\u574f\uff1a"}),"\n",(0,l.jsx)(d.pre,{children:(0,l.jsx)(d.code,{className:"language-bash",children:"sudo fsck /dev/md0\n"})}),"\n",(0,l.jsx)(d.h3,{id:"6-\u5220\u9664\u5e76\u91cd\u65b0\u521b\u5efa-raid-\u9635\u5217",children:"6. \u5220\u9664\u5e76\u91cd\u65b0\u521b\u5efa RAID \u9635\u5217"}),"\n",(0,l.jsx)(d.p,{children:"\u5728\u65e0\u6cd5\u4fee\u590d\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u9009\u62e9\u5220\u9664\u73b0\u6709\u9635\u5217\u5e76\u91cd\u65b0\u521b\u5efa\uff1a"}),"\n",(0,l.jsx)(d.h4,{id:"61-\u505c\u6b62\u9635\u5217",children:"6.1 \u505c\u6b62\u9635\u5217"}),"\n",(0,l.jsx)(d.pre,{children:(0,l.jsx)(d.code,{className:"language-bash",children:"sudo mdadm --stop /dev/md0\n"})}),"\n",(0,l.jsx)(d.h4,{id:"62-\u5220\u9664\u8d85\u7ea7\u5757",children:"6.2 \u5220\u9664\u8d85\u7ea7\u5757"}),"\n",(0,l.jsx)(d.pre,{children:(0,l.jsx)(d.code,{className:"language-bash",children:"sudo mdadm --zero-superblock /dev/sdb /dev/sdc\n"})}),"\n",(0,l.jsx)(d.h4,{id:"63-\u91cd\u65b0\u521b\u5efa\u9635\u5217",children:"6.3 \u91cd\u65b0\u521b\u5efa\u9635\u5217"}),"\n",(0,l.jsxs)(d.p,{children:["\u6309\u7167\u5e38\u89c4\u65b9\u6cd5\u91cd\u65b0\u521b\u5efa RAID \u9635\u5217\uff08\u53c2\u8003 ",(0,l.jsx)(d.a,{href:"https://www.zxzsk.com",children:"\u521b\u5efa RAID \u9635\u5217"}),"\uff09\u3002"]}),"\n",(0,l.jsx)(d.h3,{id:"7-\u603b\u7ed3-",children:"7. \u603b\u7ed3 \ud83d\ude0a"}),"\n",(0,l.jsxs)(d.p,{children:["mdadm \u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u5de5\u5177\u6765\u5e94\u5bf9 RAID \u9635\u5217\u7684\u6545\u969c\uff0c\u4f46\u65e5\u5e38\u5907\u4efd\u4ecd\u7136\u662f\u6700\u53ef\u9760\u7684\u4fdd\u62a4\u63aa\u65bd\u3002\u5e0c\u671b\u8fd9\u7bc7\u6559\u7a0b\u5bf9\u4f60\u6709\u6240\u5e2e\u52a9\uff01\u522b\u5fd8\u4e86\u6536\u85cf",(0,l.jsx)(d.strong,{children:"\u5728\u7ebf\u77e5\u8bc6\u5e93"}),"\uff08 ",(0,l.jsx)(d.a,{href:"https://www.zxzsk.com",children:"www.zxzsk.com"})," \uff09\u54e6\uff01\ud83d\ude0a"]})]})}function m(e={}){const{wrapper:d}={...(0,c.R)(),...e.components};return d?(0,l.jsx)(d,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},8453:(e,d,n)=>{n.d(d,{R:()=>a,x:()=>i});var s=n(6540);const l={},c=s.createContext(l);function a(e){const d=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function i(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(c.Provider,{value:d},e.children)}}}]);