"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[268],{2879:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>i,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>t});const r=JSON.parse('{"id":"command/\u66f4\u591a/watch","title":"watch","description":"\u5b9a\u65f6\u6267\u884c\u547d\u4ee4\u5e76\u76d1\u63a7\u8f93\u51fa","source":"@site/docs/02-command/99-\u66f4\u591a/watch.md","sourceDirName":"02-command/99-\u66f4\u591a","slug":"/462ceb5b","permalink":"/462ceb5b","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/02-command/99-\u66f4\u591a/watch.md","tags":[],"version":"current","frontMatter":{"slug":"/462ceb5b"},"sidebar":"tutorialSidebar","previous":{"title":"uuid","permalink":"/b6084e6b"}}');var c=s(4848),d=s(8453);const l={slug:"/462ceb5b"},i=void 0,h={},t=[{value:"1. \u547d\u4ee4\u7b80\u4ecb",id:"1-\u547d\u4ee4\u7b80\u4ecb",level:2},{value:"2. \u547d\u4ee4\u683c\u5f0f",id:"2-\u547d\u4ee4\u683c\u5f0f",level:2},{value:"3. \u5b9e\u7528\u6280\u5de7",id:"3-\u5b9e\u7528\u6280\u5de7",level:2},{value:"3.1 <strong>\u76d1\u63a7\u7cfb\u7edf\u8d1f\u8f7d</strong>",id:"31-\u76d1\u63a7\u7cfb\u7edf\u8d1f\u8f7d",level:3},{value:"3.2 <strong>\u76d1\u63a7\u7279\u5b9a\u6587\u4ef6\u7684\u53d8\u5316</strong>",id:"32-\u76d1\u63a7\u7279\u5b9a\u6587\u4ef6\u7684\u53d8\u5316",level:3},{value:"3.3 <strong>\u65e0\u6807\u9898\u76d1\u63a7</strong>",id:"33-\u65e0\u6807\u9898\u76d1\u63a7",level:3},{value:"3.4 <strong>\u76d1\u63a7\u7279\u5b9a\u8fdb\u7a0b</strong>",id:"34-\u76d1\u63a7\u7279\u5b9a\u8fdb\u7a0b",level:3},{value:"3.5 <strong>\u76d1\u63a7\u7f51\u7edc\u8fde\u63a5</strong>",id:"35-\u76d1\u63a7\u7f51\u7edc\u8fde\u63a5",level:3},{value:"3.6 <strong>\u76d1\u63a7\u78c1\u76d8\u7a7a\u95f4</strong>",id:"36-\u76d1\u63a7\u78c1\u76d8\u7a7a\u95f4",level:3},{value:"3.7 <strong>\u76d1\u63a7\u65e5\u5fd7\u6587\u4ef6</strong>",id:"37-\u76d1\u63a7\u65e5\u5fd7\u6587\u4ef6",level:3},{value:"4. \u5c0f\u6280\u5de7\u4e0e\u6ce8\u610f\u4e8b\u9879",id:"4-\u5c0f\u6280\u5de7\u4e0e\u6ce8\u610f\u4e8b\u9879",level:2},{value:"4.1 <strong>\u9000\u51fa <code>watch</code> \u547d\u4ee4</strong>",id:"41-\u9000\u51fa-watch-\u547d\u4ee4",level:3},{value:"4.2 <strong>\u6682\u505c\u4e0e\u6062\u590d</strong>",id:"42-\u6682\u505c\u4e0e\u6062\u590d",level:3},{value:"4.3 <strong>\u811a\u672c\u4e2d\u4f7f\u7528 <code>watch</code></strong>",id:"43-\u811a\u672c\u4e2d\u4f7f\u7528-watch",level:3},{value:"5. \u603b\u7ed3",id:"5-\u603b\u7ed3",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"\u5b9a\u65f6\u6267\u884c\u547d\u4ee4\u5e76\u76d1\u63a7\u8f93\u51fa"}),"\n",(0,c.jsx)(n.h2,{id:"1-\u547d\u4ee4\u7b80\u4ecb",children:"1. \u547d\u4ee4\u7b80\u4ecb"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"watch"})," \u547d\u4ee4\u662f\u4e00\u4e2a\u975e\u5e38\u5b9e\u7528\u7684\u5de5\u5177\uff0c\u5b83\u53ef\u4ee5\u8ba9\u4f60\u5b9a\u671f\u6267\u884c\u4e00\u4e2a\u547d\u4ee4\uff0c\u5e76\u663e\u793a\u5176\u6267\u884c\u7ed3\u679c\u5728\u7ec8\u7aef\u4e2d\u3002\u8fd9\u5bf9\u4e8e\u76d1\u63a7\u7cfb\u7edf\u72b6\u6001\u3001\u6587\u4ef6\u53d8\u5316\u3001\u6216\u8005\u4efb\u4f55\u9700\u8981\u6301\u7eed\u89c2\u5bdf\u7684\u4efb\u52a1\u90fd\u975e\u5e38\u6709\u7528\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"2-\u547d\u4ee4\u683c\u5f0f",children:"2. \u547d\u4ee4\u683c\u5f0f"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"watch [options] command\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"command"})," \u662f\u4f60\u60f3\u8981\u6267\u884c\u7684\u547d\u4ee4\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"options"})," \u662f\u53ef\u9009\u7684\u53c2\u6570\uff0c\u7528\u6765\u63a7\u5236 ",(0,c.jsx)(n.code,{children:"watch"})," \u7684\u884c\u4e3a\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"3-\u5b9e\u7528\u6280\u5de7",children:"3. \u5b9e\u7528\u6280\u5de7"}),"\n",(0,c.jsxs)(n.h3,{id:"31-\u76d1\u63a7\u7cfb\u7edf\u8d1f\u8f7d",children:["3.1 ",(0,c.jsx)(n.strong,{children:"\u76d1\u63a7\u7cfb\u7edf\u8d1f\u8f7d"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"watch -n 2 uptime\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"Every 2.0s: uptime                       \u4f60\u7684\u4e3b\u673a\u540d: Tue Nov 20 09:45:01 2024\n\n09:45:01 up 3 days, 12:34,  3 users,  load average: 0.00, 0.01, 0.05\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u91cc\u7684 ",(0,c.jsx)(n.code,{children:"-n 2"})," \u8868\u793a\u6bcf2\u79d2\u6267\u884c\u4e00\u6b21 ",(0,c.jsx)(n.code,{children:"uptime"})," \u547d\u4ee4\uff0c\u663e\u793a\u7cfb\u7edf\u5f53\u524d\u7684\u8d1f\u8f7d\u60c5\u51b5\u3002\ud83d\ude0e"]}),"\n",(0,c.jsxs)(n.h3,{id:"32-\u76d1\u63a7\u7279\u5b9a\u6587\u4ef6\u7684\u53d8\u5316",children:["3.2 ",(0,c.jsx)(n.strong,{children:"\u76d1\u63a7\u7279\u5b9a\u6587\u4ef6\u7684\u53d8\u5316"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"watch -d ls -l file.txt\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"Every 2.0s: ls -l file.txt               \u4f60\u7684\u4e3b\u673a\u540d: Tue Nov 20 09:47:03 2024\n\n-rw-r--r-- 1 user user 1024 Nov 20 09:47 file.txt\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"-d"})," \u9009\u9879\u4f1a\u9ad8\u4eae\u663e\u793a\u8f93\u51fa\u4e2d\u7684\u53d8\u5316\u90e8\u5206\u3002\u5047\u8bbe\u4f60\u60f3\u76d1\u63a7\u67d0\u4e2a\u6587\u4ef6\u7684\u5927\u5c0f\u53d8\u5316\uff0c\u8fd9\u4e2a\u547d\u4ee4\u5c31\u5f88\u5408\u9002\u3002\ud83d\udcdd"]}),"\n",(0,c.jsxs)(n.h3,{id:"33-\u65e0\u6807\u9898\u76d1\u63a7",children:["3.3 ",(0,c.jsx)(n.strong,{children:"\u65e0\u6807\u9898\u76d1\u63a7"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"watch -t free -m\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"              total        used        free      shared  buff/cache   available\nMem:           15989        2534        5776          11        7679       12983\nSwap:          10239           0       10239\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u76d1\u63a7\u7cfb\u7edf\u7684\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\uff0c\u5e76\u4e14\u4e0d\u663e\u793a\u6807\u9898\u680f\u3002\ud83d\ude09"}),"\n",(0,c.jsxs)(n.h3,{id:"34-\u76d1\u63a7\u7279\u5b9a\u8fdb\u7a0b",children:["3.4 ",(0,c.jsx)(n.strong,{children:"\u76d1\u63a7\u7279\u5b9a\u8fdb\u7a0b"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"watch 'ps -ef | grep [f]irefox'\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"UID          PID    PPID  C STIME TTY          TIME CMD\nuser       1234    1232  0 09:40 ?        00:00:00 /usr/lib/firefox/firefox\nuser       1235    1234  0 09:40 ?        00:00:00 /usr/lib/firefox/firefox -contentproc -childID 1 -isForBrowser\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u91cc\u4f7f\u7528\u4e86 ",(0,c.jsx)(n.code,{children:"grep"})," \u547d\u4ee4\u6765\u8fc7\u6ee4\u8fdb\u7a0b\u5217\u8868\uff0c\u663e\u793a\u4e0e ",(0,c.jsx)(n.code,{children:"firefox"})," \u76f8\u5173\u7684\u8fdb\u7a0b\u4fe1\u606f\u3002\ud83d\udd0d"]}),"\n",(0,c.jsxs)(n.h3,{id:"35-\u76d1\u63a7\u7f51\u7edc\u8fde\u63a5",children:["3.5 ",(0,c.jsx)(n.strong,{children:"\u76d1\u63a7\u7f51\u7edc\u8fde\u63a5"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"watch -n 5 'netstat -tuln | grep LISTEN'\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"Every 5.0s: netstat -tuln | grep LISTEN   \u4f60\u7684\u4e3b\u673a\u540d: Tue Nov 20 09:50:05 2024\n\ntcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN\ntcp6       0      0 :::22                   :::*                    LISTEN\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u4e2a\u547d\u4ee4\u53ef\u4ee5\u76d1\u63a7\u6b63\u5728\u76d1\u542c\u7684\u7f51\u7edc\u7aef\u53e3\uff0c",(0,c.jsx)(n.code,{children:"-n 5"})," \u8868\u793a\u6bcf5\u79d2\u66f4\u65b0\u4e00\u6b21\u3002\ud83d\udce1"]}),"\n",(0,c.jsxs)(n.h3,{id:"36-\u76d1\u63a7\u78c1\u76d8\u7a7a\u95f4",children:["3.6 ",(0,c.jsx)(n.strong,{children:"\u76d1\u63a7\u78c1\u76d8\u7a7a\u95f4"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"watch -n 10 'df -h | grep /dev/sda1'\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"Every 10.0s: df -h | grep /dev/sda1      \u4f60\u7684\u4e3b\u673a\u540d: Tue Nov 20 09:52:15 2024\n\n/dev/sda1       20G   15G  3.8G  80% /home\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8fd9\u4e2a\u547d\u4ee4\u53ef\u4ee5\u76d1\u63a7\u7279\u5b9a\u5206\u533a\u7684\u78c1\u76d8\u7a7a\u95f4\u4f7f\u7528\u60c5\u51b5\u3002\ud83d\udce6"}),"\n",(0,c.jsxs)(n.h3,{id:"37-\u76d1\u63a7\u65e5\u5fd7\u6587\u4ef6",children:["3.7 ",(0,c.jsx)(n.strong,{children:"\u76d1\u63a7\u65e5\u5fd7\u6587\u4ef6"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"watch -n 1 'tail -n 5 /var/log/syslog'\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"Every 1.0s: tail -n 5 /var/log/syslog    \u4f60\u7684\u4e3b\u673a\u540d: Tue Nov 20 09:55:26 2024\n\nNov 20 09:55:25 your-hostname systemd[1]: Starting User Slice of user user...\nNov 20 09:55:25 your-hostname systemd[1]: Created slice User Slice of user user.\nNov 20 09:55:25 your-hostname systemd[1]: Starting User Runtime Directory /run/user/1000...\nNov 20 09:55:25 your-hostname systemd[1]: Created slice User Runtime Directory /run/user/1000.\nNov 20 09:55:26 your-hostname systemd[1]: Starting User Manager for UID 1000...\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u4e2a\u547d\u4ee4\u53ef\u4ee5\u5b9e\u65f6\u76d1\u63a7\u7cfb\u7edf\u65e5\u5fd7\u7684\u53d8\u5316\uff0c",(0,c.jsx)(n.code,{children:"-n 1"})," \u8868\u793a\u6bcf\u79d2\u66f4\u65b0\u4e00\u6b21\u3002\ud83d\udcdc"]}),"\n",(0,c.jsx)(n.h2,{id:"4-\u5c0f\u6280\u5de7\u4e0e\u6ce8\u610f\u4e8b\u9879",children:"4. \u5c0f\u6280\u5de7\u4e0e\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,c.jsxs)(n.h3,{id:"41-\u9000\u51fa-watch-\u547d\u4ee4",children:["4.1 ",(0,c.jsxs)(n.strong,{children:["\u9000\u51fa ",(0,c.jsx)(n.code,{children:"watch"})," \u547d\u4ee4"]})]}),"\n",(0,c.jsxs)(n.p,{children:["\u8981\u9000\u51fa ",(0,c.jsx)(n.code,{children:"watch"})," \u547d\u4ee4\uff0c\u6309 ",(0,c.jsx)(n.code,{children:"Ctrl + C"}),"\u3002\u270b"]}),"\n",(0,c.jsxs)(n.h3,{id:"42-\u6682\u505c\u4e0e\u6062\u590d",children:["4.2 ",(0,c.jsx)(n.strong,{children:"\u6682\u505c\u4e0e\u6062\u590d"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u60f3\u6682\u505c\u76d1\u63a7\uff0c\u53ef\u4ee5\u6309 ",(0,c.jsx)(n.code,{children:"Ctrl + Z"}),"\uff0c\u7136\u540e\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"fg"})," \u6062\u590d\u3002\ud83d\udd04"]}),"\n",(0,c.jsxs)(n.h3,{id:"43-\u811a\u672c\u4e2d\u4f7f\u7528-watch",children:["4.3 ",(0,c.jsxs)(n.strong,{children:["\u811a\u672c\u4e2d\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"watch"})]})]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u7f16\u5199\u811a\u672c\u65f6\uff0c",(0,c.jsx)(n.code,{children:"watch"})," \u53ef\u4ee5\u7528\u6765\u76d1\u63a7\u811a\u672c\u6267\u884c\u8fc7\u7a0b\u4e2d\u67d0\u4e9b\u53d8\u91cf\u6216\u6587\u4ef6\u7684\u53d8\u5316\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"#!/bin/bash\nwatch -n 5 'echo \"\u76d1\u63a7\u53d8\u91cf $VARIABLE\"'\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u6837\u6bcf5\u79d2\u4f1a\u8f93\u51fa\u53d8\u91cf ",(0,c.jsx)(n.code,{children:"$VARIABLE"})," \u7684\u503c\u3002\ud83d\udcdc"]}),"\n",(0,c.jsx)(n.h2,{id:"5-\u603b\u7ed3",children:"5. \u603b\u7ed3"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"watch"})," \u547d\u4ee4\u662f\u7cfb\u7edf\u7ba1\u7406\u5458\u548c\u5f00\u53d1\u8005\u7684\u597d\u5e2e\u624b\uff0c\u5b83\u8ba9\u4f60\u53ef\u4ee5\u8f7b\u677e\u5730\u76d1\u63a7\u7cfb\u7edf\u7684\u5404\u79cd\u53d8\u5316\u3002\u65e0\u8bba\u662f\u7cfb\u7edf\u8d1f\u8f7d\u3001\u6587\u4ef6\u53d8\u5316\u3001\u7f51\u7edc\u8fde\u63a5\u3001\u78c1\u76d8\u7a7a\u95f4\u8fd8\u662f\u65e5\u5fd7\u6587\u4ef6\uff0c",(0,c.jsx)(n.code,{children:"watch"})," \u90fd\u80fd\u5e2e\u4f60\u5b9e\u65f6\u638c\u63e1\u60c5\u51b5\u3002\ud83d\udcc2"]}),"\n",(0,c.jsxs)(n.p,{children:["\u638c\u63e1\u4e86 ",(0,c.jsx)(n.code,{children:"watch"}),"\uff0c\u4f60\u5c31\u53ef\u4ee5\u968f\u65f6\u4e86\u89e3\u7cfb\u7edf\u7684\u52a8\u6001\uff0c\u786e\u4fdd\u4e00\u5207\u90fd\u5728\u4f60\u7684\u638c\u63a7\u4e4b\u4e2d\u3002\ud83c\udfaf"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsxs)(n.p,{children:["\u52a0\u6cb9\uff0c\u7ee7\u7eed\u5728\u547d\u4ee4\u884c\u4e2d\u63a2\u7d22\u65b0\u6280\u80fd\uff01\ud83d\udcaa\ud83c\udffb \u522b\u5fd8\u4e86\u6536\u85cf\u5728\u7ebf\u77e5\u8bc6\u5e93\uff08",(0,c.jsx)(n.a,{href:"http://www.zxzsk.com",children:"www.zxzsk.com"}),"\uff09\uff0c\u8ba9\u66f4\u591a\u6709\u7528\u7684\u77e5\u8bc6\u4e3a\u4f60\u63d0\u4f9b\u5e2e\u52a9\uff01\ud83d\ude0a"]}),"\n",(0,c.jsx)(n.p,{children:"\u7ee7\u7eed\u63a2\u7d22\uff0c\u4f60\u5df2\u7ecf\u5f88\u68d2\u5566\uff01\ud83c\udf1f"})]})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var r=s(6540);const c={},d=r.createContext(c);function l(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);