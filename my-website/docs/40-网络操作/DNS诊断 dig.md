---
description: 本文介绍了 `dig` 命令的使用方法，帮助你查询 DNS 记录并进行 DNS 问题诊断。  
keywords:  
  - dig  
  - DNS  
  - 查询工具  
  - 网络调试  
  - 域名解析  
  - DNS 记录  
---

## 1. `dig` 命令概述 

`dig`（Domain Information Groper）是一个 DNS 查询工具，可以帮助你查询域名系统（DNS）的详细信息。它常用于调试 DNS 问题，也可以查看各种类型的 DNS 记录。🎯

### 1.1 常见用法
最基本的 `dig` 命令格式如下：

```bash
dig <domain>
```

例如，查询 `example.com` 的 A 记录：

```bash
dig example.com
```

这将显示域名 `example.com` 的 A 记录（即 IPv4 地址）🌐。

### 1.2 查询不同类型的 DNS 记录 📜
你可以使用 `dig` 查询不同类型的 DNS 记录，以下是常用的一些记录类型：

- **A 记录**：域名到 IPv4 地址的映射。
- **AAAA 记录**：域名到 IPv6 地址的映射。
- **MX 记录**：邮件交换记录。
- **CNAME 记录**：别名记录。
- **NS 记录**：域名服务器记录。
- **TXT 记录**：文本记录，通常用于 SPF 或其他验证。

查询 A 记录：

```bash
dig example.com A
```

查询 MX 记录：

```bash
dig example.com MX
```

查询 NS 记录：

```bash
dig example.com NS
```

查询 TXT 记录：

```bash
dig example.com TXT
```

### 1.3 查询特定 DNS 服务器 🌍
如果你想查询某个特定 DNS 服务器的记录，可以通过指定服务器来进行查询。例如，使用 Google 的公共 DNS 服务器 `8.8.8.8` 来查询：

```bash
dig @8.8.8.8 example.com
```

### 1.4 使用 +short 输出简洁结果 📄
`dig` 默认会输出详细的查询信息，如果你只想看到简单的查询结果，可以使用 `+short` 选项：

```bash
dig example.com +short
```

这将只显示 `example.com` 的 IP 地址，而不显示详细的查询过程。🌟

## 2. 高级选项 🚀

### 2.1 查询反向 DNS 🔄
反向 DNS 查询是将 IP 地址转换为域名。假设你有一个 IP 地址 `8.8.8.8`，想要查询其对应的域名，可以使用反向查询：

```bash
dig -x 8.8.8.8
```

### 2.2 使用 `+trace` 跟踪 DNS 查询过程 🧭
使用 `+trace` 选项可以显示从根 DNS 服务器开始的完整查询过程，帮助你查看 DNS 查询是如何一步步进行的。

```bash
dig example.com +trace
```


```bash title='示例'
$ dig www.serv00.com +short
128.204.218.63

$ dig -x 128.204.218.63 +short
cache0.serv00.com.

$ dig cache0.serv00.com +short
128.204.218.63
```

### 2.3 显示所有记录 📋
如果你想查看一个域名的所有 DNS 记录，可以使用 `ANY` 类型：

```bash
dig example.com ANY
```

注意：某些 DNS 服务器可能会限制 `ANY` 查询返回的结果。

## 3. 解析输出结果 🔍

`dig` 命令的输出通常包含以下几部分：

以 `dig www.serv00.com` 为例

### 3.1 头部信息（Header）
头部信息会显示查询的状态（如是否成功），查询的数量等信息。
```text
; <<>> DiG 9.18.28-1~deb12u2-Debian <<>> www.serv00.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 977
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0
```

### 3.2 问题部分（Question Section）
显示你查询的域名和记录类型。

```text
;; QUESTION SECTION:
;www.serv00.com.                        IN      A
```

### 3.3 答案部分（Answer Section）
列出查询到的 DNS 记录。如果查询多个记录类型，答案部分会显示所有相关的记录。
```text
;; ANSWER SECTION:
www.serv00.com.         789     IN      A       128.204.218.63
```

### 3.4 权威部分（Authority Section）
显示负责管理该域名的 DNS 服务器。
```text
;; Query time: 0 msec
;; SERVER: 192.168.10.1#53(192.168.10.1) (UDP)
;; WHEN: Mon Dec 02 00:53:43 CST 2024
;; MSG SIZE  rcvd: 48
```

### 3.5 附加部分（Additional Section）
显示与查询相关的附加信息，例如额外的域名服务器信息等。

## 4. 常用命令示例 🔧

### 4.1 查询域名的 IP 地址（A 记录） 🌐
```bash
dig example.com A
```

### 4.2 查询域名的 MX 记录（邮件交换记录） 📧
```bash
dig example.com MX
```

### 4.3 查询域名的 NS 记录（域名服务器记录） 🌍
```bash
dig example.com NS
```

### 4.4 使用 Google DNS 查询域名 🧑‍💻
```bash
dig @8.8.8.8 example.com
```

### 4.5 查询反向 DNS（IP 地址到域名） 🔄
```bash
dig -x 8.8.8.8
```

## 5. 总结 🎉

`dig` 是一个强大的 DNS 查询工具，适合用来诊断 DNS 问题并检查域名相关的 DNS 记录。掌握 `dig` 命令可以帮助你深入了解 DNS 系统的工作原理。

别忘了收藏**在线知识库**（ [www.zxzsk.com](http://www.zxzsk.com) ）哦！😊