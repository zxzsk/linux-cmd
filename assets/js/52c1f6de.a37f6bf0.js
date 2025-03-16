"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9019],{236:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});const l=JSON.parse('{"id":"command/\u9632\u706b\u5899/openssl","title":"openssl","description":"\u751f\u6210\u79d8\u94a5\u5bf9\u3001SSL/TLS\u52a0\u5bc6","source":"@site/docs/02-command/90-\u9632\u706b\u5899/openssl.md","sourceDirName":"02-command/90-\u9632\u706b\u5899","slug":"/7a057d56","permalink":"/7a057d56","draft":false,"unlisted":false,"editUrl":"https://github.com/zxzsk/linux-cmd/docs/02-command/90-\u9632\u706b\u5899/openssl.md","tags":[],"version":"current","frontMatter":{"slug":"/7a057d56"},"sidebar":"tutorialSidebar","previous":{"title":"nftables","permalink":"/e023aa4f"},"next":{"title":"ufw","permalink":"/7f092b40"}}');var r=s(4848),c=s(8453);const i={slug:"/7a057d56"},d=void 0,t={},a=[{value:"1. <strong>\u68c0\u67e5 OpenSSL \u7248\u672c</strong>",id:"1-\u68c0\u67e5-openssl-\u7248\u672c",level:3},{value:"2. <strong>\u751f\u6210 RSA \u5bc6\u94a5\u5bf9</strong>",id:"2-\u751f\u6210-rsa-\u5bc6\u94a5\u5bf9",level:3},{value:"3. <strong>\u751f\u6210\u8bc1\u4e66\u7b7e\u540d\u8bf7\u6c42\uff08CSR\uff09</strong>",id:"3-\u751f\u6210\u8bc1\u4e66\u7b7e\u540d\u8bf7\u6c42csr",level:3},{value:"4. <strong>\u81ea\u7b7e\u540d SSL \u8bc1\u4e66</strong>",id:"4-\u81ea\u7b7e\u540d-ssl-\u8bc1\u4e66",level:3},{value:"5. <strong>\u67e5\u770b\u8bc1\u4e66\u5185\u5bb9</strong>",id:"5-\u67e5\u770b\u8bc1\u4e66\u5185\u5bb9",level:3},{value:"6. <strong>\u9a8c\u8bc1\u8bc1\u4e66</strong>",id:"6-\u9a8c\u8bc1\u8bc1\u4e66",level:3},{value:"7. <strong>\u4ece\u8bc1\u4e66\u4e2d\u63d0\u53d6\u516c\u94a5</strong>",id:"7-\u4ece\u8bc1\u4e66\u4e2d\u63d0\u53d6\u516c\u94a5",level:3},{value:"8. <strong>\u8bc1\u4e66\u8f6c\u6362</strong>",id:"8-\u8bc1\u4e66\u8f6c\u6362",level:3},{value:"9. <strong>\u521b\u5efa\u52a0\u5bc6\u6587\u4ef6</strong>",id:"9-\u521b\u5efa\u52a0\u5bc6\u6587\u4ef6",level:3},{value:"10. <strong>\u751f\u6210\u5bf9\u79f0\u52a0\u5bc6\u5bc6\u94a5</strong>",id:"10-\u751f\u6210\u5bf9\u79f0\u52a0\u5bc6\u5bc6\u94a5",level:3},{value:"11. <strong>\u6587\u4ef6\u52a0\u5bc6\u4e0e\u89e3\u5bc6</strong>",id:"11-\u6587\u4ef6\u52a0\u5bc6\u4e0e\u89e3\u5bc6",level:3},{value:"12. <strong>\u8ba1\u7b97\u6587\u4ef6\u54c8\u5e0c</strong>",id:"12-\u8ba1\u7b97\u6587\u4ef6\u54c8\u5e0c",level:3},{value:"13. <strong>\u751f\u6210 HMAC</strong>",id:"13-\u751f\u6210-hmac",level:3},{value:"14. <strong>\u9a8c\u8bc1\u79c1\u94a5</strong>",id:"14-\u9a8c\u8bc1\u79c1\u94a5",level:3},{value:"15. <strong>\u751f\u6210 Diffie-Hellman \u53c2\u6570</strong>",id:"15-\u751f\u6210-diffie-hellman-\u53c2\u6570",level:3},{value:"16. <strong>\u521b\u5efa PFX\uff08PKCS#12\uff09\u6587\u4ef6</strong>",id:"16-\u521b\u5efa-pfxpkcs12\u6587\u4ef6",level:3},{value:"17. <strong>\u751f\u6210 EC \u5bc6\u94a5\u5bf9</strong>",id:"17-\u751f\u6210-ec-\u5bc6\u94a5\u5bf9",level:3},{value:"18. <strong>\u4f7f\u7528 OpenSSL \u8fdb\u884c TLS \u63e1\u624b</strong>",id:"18-\u4f7f\u7528-openssl-\u8fdb\u884c-tls-\u63e1\u624b",level:3},{value:"19. <strong>\u63d0\u53d6 PEM \u683c\u5f0f\u7684\u8bc1\u4e66</strong>",id:"19-\u63d0\u53d6-pem-\u683c\u5f0f\u7684\u8bc1\u4e66",level:3},{value:"20. <strong>\u8bc1\u4e66\u64a4\u9500\u5217\u8868\uff08CRL\uff09</strong>",id:"20-\u8bc1\u4e66\u64a4\u9500\u5217\u8868crl",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:3}];function o(e){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u751f\u6210\u79d8\u94a5\u5bf9\u3001SSL/TLS\u52a0\u5bc6"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"OpenSSL"})," \u662f\u4e00\u4e2a\u5e7f\u6cdb\u4f7f\u7528\u7684\u5de5\u5177\u548c\u5e93\uff0c\u7528\u4e8e\u5904\u7406\u5b89\u5168\u534f\u8bae\uff08\u5982 SSL/TLS\uff09\u548c\u8fdb\u884c\u52a0\u5bc6\u64cd\u4f5c\u3002\u5b83\u63d0\u4f9b\u4e86\u8bb8\u591a\u547d\u4ee4\u884c\u529f\u80fd\uff0c\u652f\u6301\u8bc1\u4e66\u751f\u6210\u3001\u79c1\u94a5/\u516c\u94a5\u751f\u6210\u3001\u52a0\u5bc6/\u89e3\u5bc6\u64cd\u4f5c\u3001\u54c8\u5e0c\u8ba1\u7b97\u7b49\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0b\u9762\u662f\u5e38\u89c1\u7684 ",(0,r.jsx)(n.code,{children:"openssl"})," \u547d\u4ee4\u548c\u64cd\u4f5c\u793a\u4f8b\uff1a"]}),"\n",(0,r.jsxs)(n.h3,{id:"1-\u68c0\u67e5-openssl-\u7248\u672c",children:["1. ",(0,r.jsx)(n.strong,{children:"\u68c0\u67e5 OpenSSL \u7248\u672c"})]}),"\n",(0,r.jsx)(n.p,{children:"\u67e5\u770b\u5df2\u5b89\u88c5\u7684 OpenSSL \u7248\u672c\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl version\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"2-\u751f\u6210-rsa-\u5bc6\u94a5\u5bf9",children:["2. ",(0,r.jsx)(n.strong,{children:"\u751f\u6210 RSA \u5bc6\u94a5\u5bf9"})]}),"\n",(0,r.jsx)(n.p,{children:"\u751f\u6210 RSA \u79c1\u94a5\u548c\u516c\u94a5\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u751f\u6210 2048 \u4f4d\u7684\u79c1\u94a5\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl genpkey -algorithm RSA -out private.key -aes256\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u4f1a\u751f\u6210\u4e00\u4e2a\u52a0\u5bc6\u7684\u79c1\u94a5\u6587\u4ef6 ",(0,r.jsx)(n.code,{children:"private.key"}),"\uff0c\u5e76\u8981\u6c42\u8f93\u5165\u5bc6\u7801\uff08\u53ef\u4ee5\u7701\u7565 ",(0,r.jsx)(n.code,{children:"-aes256"}),"\uff0c\u53ea\u751f\u6210\u672a\u52a0\u5bc6\u7684\u79c1\u94a5\uff09\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4ece\u79c1\u94a5\u4e2d\u63d0\u53d6\u516c\u94a5\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl rsa -pubout -in private.key -out public.key\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"3-\u751f\u6210\u8bc1\u4e66\u7b7e\u540d\u8bf7\u6c42csr",children:["3. ",(0,r.jsx)(n.strong,{children:"\u751f\u6210\u8bc1\u4e66\u7b7e\u540d\u8bf7\u6c42\uff08CSR\uff09"})]}),"\n",(0,r.jsx)(n.p,{children:"\u751f\u6210\u4e00\u4e2a CSR \u8bf7\u6c42\u6587\u4ef6\uff0c\u7528\u4e8e\u7533\u8bf7 SSL \u8bc1\u4e66\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl req -new -key private.key -out request.csr\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6b64\u547d\u4ee4\u4f1a\u63d0\u793a\u4f60\u8f93\u5165\u8bc1\u4e66\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5982\u56fd\u5bb6\u3001\u7ec4\u7ec7\u3001\u516c\u5171\u57df\u540d\u7b49\u3002"}),"\n",(0,r.jsxs)(n.h3,{id:"4-\u81ea\u7b7e\u540d-ssl-\u8bc1\u4e66",children:["4. ",(0,r.jsx)(n.strong,{children:"\u81ea\u7b7e\u540d SSL \u8bc1\u4e66"})]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u4f60\u9700\u8981\u4e00\u4e2a\u81ea\u7b7e\u540d\u8bc1\u4e66\uff08\u901a\u5e38\u7528\u4e8e\u6d4b\u8bd5\u73af\u5883\uff09\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl req -x509 -new -key private.key -out certificate.crt -days 365\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u5c06\u4f7f\u7528\u4f60\u7684\u79c1\u94a5\u751f\u6210\u4e00\u4e2a\u6709\u6548\u671f\u4e3a 365 \u5929\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66\u3002"}),"\n",(0,r.jsxs)(n.h3,{id:"5-\u67e5\u770b\u8bc1\u4e66\u5185\u5bb9",children:["5. ",(0,r.jsx)(n.strong,{children:"\u67e5\u770b\u8bc1\u4e66\u5185\u5bb9"})]}),"\n",(0,r.jsx)(n.p,{children:"\u67e5\u770b\u8bc1\u4e66\u6587\u4ef6\u7684\u8be6\u7ec6\u4fe1\u606f\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl x509 -in certificate.crt -text -noout\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6b64\u547d\u4ee4\u5c06\u8f93\u51fa\u8bc1\u4e66\u7684\u8be6\u7ec6\u5185\u5bb9\uff0c\u5982\u516c\u94a5\u3001\u6709\u6548\u671f\u3001\u9881\u53d1\u8005\u7b49\u3002"}),"\n",(0,r.jsxs)(n.h3,{id:"6-\u9a8c\u8bc1\u8bc1\u4e66",children:["6. ",(0,r.jsx)(n.strong,{children:"\u9a8c\u8bc1\u8bc1\u4e66"})]}),"\n",(0,r.jsx)(n.p,{children:"\u9a8c\u8bc1\u8bc1\u4e66\u94fe\u662f\u5426\u6709\u6548\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl verify -CAfile ca-certificates.crt certificate.crt\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"-CAfile"})," \u53c2\u6570\u6307\u5411\u4e00\u4e2a\u5305\u542b\u6839\u8bc1\u4e66\u7684\u6587\u4ef6\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"7-\u4ece\u8bc1\u4e66\u4e2d\u63d0\u53d6\u516c\u94a5",children:["7. ",(0,r.jsx)(n.strong,{children:"\u4ece\u8bc1\u4e66\u4e2d\u63d0\u53d6\u516c\u94a5"})]}),"\n",(0,r.jsx)(n.p,{children:"\u4ece\u4e00\u4e2a\u8bc1\u4e66\u4e2d\u63d0\u53d6\u516c\u94a5\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl x509 -pubkey -noout -in certificate.crt > pubkey.pem\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"8-\u8bc1\u4e66\u8f6c\u6362",children:["8. ",(0,r.jsx)(n.strong,{children:"\u8bc1\u4e66\u8f6c\u6362"})]}),"\n",(0,r.jsx)(n.p,{children:"\u5c06\u8bc1\u4e66\u683c\u5f0f\u8fdb\u884c\u8f6c\u6362\uff0c\u4f8b\u5982\u4ece PEM \u8f6c\u6362\u4e3a DER \u683c\u5f0f\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl x509 -in certificate.crt -outform DER -out certificate.der\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5c06\u8bc1\u4e66\u4ece PEM \u683c\u5f0f\u8f6c\u6362\u4e3a PFX \u683c\u5f0f\uff08\u7528\u4e8e Windows \u73af\u5883\uff09\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl pkcs12 -export -out certificate.pfx -inkey private.key -in certificate.crt\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"9-\u521b\u5efa\u52a0\u5bc6\u6587\u4ef6",children:["9. ",(0,r.jsx)(n.strong,{children:"\u521b\u5efa\u52a0\u5bc6\u6587\u4ef6"})]}),"\n",(0,r.jsx)(n.p,{children:"\u7528\u516c\u94a5\u52a0\u5bc6\u4e00\u4e2a\u6587\u4ef6\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl rsautl -encrypt -inkey public.key -pubin -in plaintext.txt -out encrypted.bin\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u79c1\u94a5\u89e3\u5bc6\u6587\u4ef6\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl rsautl -decrypt -inkey private.key -in encrypted.bin -out decrypted.txt\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"10-\u751f\u6210\u5bf9\u79f0\u52a0\u5bc6\u5bc6\u94a5",children:["10. ",(0,r.jsx)(n.strong,{children:"\u751f\u6210\u5bf9\u79f0\u52a0\u5bc6\u5bc6\u94a5"})]}),"\n",(0,r.jsx)(n.p,{children:"\u751f\u6210\u4e00\u4e2a AES \u5bc6\u94a5\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl rand -base64 32\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u5c06\u751f\u6210\u4e00\u4e2a 256 \u4f4d\u7684 AES \u5bc6\u94a5\u3002"}),"\n",(0,r.jsxs)(n.h3,{id:"11-\u6587\u4ef6\u52a0\u5bc6\u4e0e\u89e3\u5bc6",children:["11. ",(0,r.jsx)(n.strong,{children:"\u6587\u4ef6\u52a0\u5bc6\u4e0e\u89e3\u5bc6"})]}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u5bf9\u79f0\u52a0\u5bc6\u7b97\u6cd5\uff08\u5982 AES\uff09\u52a0\u5bc6\u6587\u4ef6\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl enc -aes-256-cbc -salt -in plaintext.txt -out encrypted.bin\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,r.jsx)(n.code,{children:"-aes-256-cbc"})," \u8868\u793a\u4f7f\u7528 AES \u7b97\u6cd5\u548c CBC \u6a21\u5f0f\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u89e3\u5bc6\u6587\u4ef6\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl enc -d -aes-256-cbc -in encrypted.bin -out decrypted.txt\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"12-\u8ba1\u7b97\u6587\u4ef6\u54c8\u5e0c",children:["12. ",(0,r.jsx)(n.strong,{children:"\u8ba1\u7b97\u6587\u4ef6\u54c8\u5e0c"})]}),"\n",(0,r.jsx)(n.p,{children:"\u8ba1\u7b97\u6587\u4ef6\u7684\u54c8\u5e0c\u503c\uff08\u5982 SHA-256\uff09\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl dgst -sha256 filename\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"13-\u751f\u6210-hmac",children:["13. ",(0,r.jsx)(n.strong,{children:"\u751f\u6210 HMAC"})]}),"\n",(0,r.jsx)(n.p,{children:"\u751f\u6210\u5e26\u6709\u5bc6\u94a5\u7684\u54c8\u5e0c\u503c\uff08HMAC\uff09\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl dgst -sha256 -mac HMAC -macopt key:secretkey file.txt\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"14-\u9a8c\u8bc1\u79c1\u94a5",children:["14. ",(0,r.jsx)(n.strong,{children:"\u9a8c\u8bc1\u79c1\u94a5"})]}),"\n",(0,r.jsx)(n.p,{children:"\u9a8c\u8bc1\u79c1\u94a5\u6587\u4ef6\u662f\u5426\u6709\u6548\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl rsa -in private.key -check\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"15-\u751f\u6210-diffie-hellman-\u53c2\u6570",children:["15. ",(0,r.jsx)(n.strong,{children:"\u751f\u6210 Diffie-Hellman \u53c2\u6570"})]}),"\n",(0,r.jsx)(n.p,{children:"\u751f\u6210 Diffie-Hellman \u5bc6\u94a5\u4ea4\u6362\u6240\u9700\u7684\u53c2\u6570\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl dhparam -out dhparam.pem 2048\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"16-\u521b\u5efa-pfxpkcs12\u6587\u4ef6",children:["16. ",(0,r.jsx)(n.strong,{children:"\u521b\u5efa PFX\uff08PKCS#12\uff09\u6587\u4ef6"})]}),"\n",(0,r.jsx)(n.p,{children:"\u5c06\u516c\u94a5\u8bc1\u4e66\u548c\u79c1\u94a5\u6253\u5305\u6210 PFX \u683c\u5f0f\uff08\u7528\u4e8e Windows\uff09\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl pkcs12 -export -out mycert.pfx -inkey private.key -in certificate.crt -certfile CA.crt\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"17-\u751f\u6210-ec-\u5bc6\u94a5\u5bf9",children:["17. ",(0,r.jsx)(n.strong,{children:"\u751f\u6210 EC \u5bc6\u94a5\u5bf9"})]}),"\n",(0,r.jsx)(n.p,{children:"\u751f\u6210\u692d\u5706\u66f2\u7ebf\uff08EC\uff09\u5bc6\u94a5\u5bf9\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl ecparam -name prime256v1 -genkey -noout -out ec_private.key\nopenssl ec -in ec_private.key -pubout -out ec_public.key\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"18-\u4f7f\u7528-openssl-\u8fdb\u884c-tls-\u63e1\u624b",children:["18. ",(0,r.jsx)(n.strong,{children:"\u4f7f\u7528 OpenSSL \u8fdb\u884c TLS \u63e1\u624b"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"s_client"})," \u547d\u4ee4\u6765\u6a21\u62df\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668\u7684 TLS \u63e1\u624b\uff0c\u8bca\u65ad SSL/TLS \u8fde\u63a5\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl s_client -connect example.com:443\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"19-\u63d0\u53d6-pem-\u683c\u5f0f\u7684\u8bc1\u4e66",children:["19. ",(0,r.jsx)(n.strong,{children:"\u63d0\u53d6 PEM \u683c\u5f0f\u7684\u8bc1\u4e66"})]}),"\n",(0,r.jsx)(n.p,{children:"\u4ece PFX \u6587\u4ef6\u4e2d\u63d0\u53d6\u8bc1\u4e66\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl pkcs12 -in certificate.pfx -clcerts -nokeys -out certificate.crt\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"20-\u8bc1\u4e66\u64a4\u9500\u5217\u8868crl",children:["20. ",(0,r.jsx)(n.strong,{children:"\u8bc1\u4e66\u64a4\u9500\u5217\u8868\uff08CRL\uff09"})]}),"\n",(0,r.jsx)(n.p,{children:"\u68c0\u67e5\u8bc1\u4e66\u64a4\u9500\u5217\u8868\uff08CRL\uff09\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl crl -in crl.pem -text\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u5c0f\u7ed3",children:"\u5c0f\u7ed3"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"openssl"})," \u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u5de5\u5177\uff0c\u652f\u6301\u591a\u79cd\u52a0\u5bc6\u548c\u8bc1\u4e66\u7ba1\u7406\u64cd\u4f5c\u3002\u4ece\u5bc6\u94a5\u751f\u6210\u5230\u8bc1\u4e66\u7ba1\u7406\uff0c\u518d\u5230\u6570\u636e\u52a0\u5bc6\u548c\u54c8\u5e0c\u8ba1\u7b97\uff0c",(0,r.jsx)(n.code,{children:"openssl"})," \u80fd\u591f\u5b8c\u6210\u51e0\u4e4e\u6240\u6709\u4e0e\u52a0\u5bc6\u76f8\u5173\u7684\u4efb\u52a1\u3002\u5982\u679c\u4f60\u9700\u8981\u6267\u884c\u5b89\u5168\u76f8\u5173\u7684\u64cd\u4f5c\uff0c",(0,r.jsx)(n.code,{children:"openssl"})," \u662f\u4e00\u4e2a\u975e\u5e38\u6709\u7528\u7684\u5de5\u5177\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var l=s(6540);const r={},c=l.createContext(r);function i(e){const n=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);