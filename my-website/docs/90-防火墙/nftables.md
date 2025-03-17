---
slug: /e023aa4f
---
现代防火墙

`nftables` 是 Linux 内核中用于包过滤、网络地址转换（NAT）、流量控制等的工具。它取代了 `iptables`，成为 Linux 默认的防火墙框架，从 Linux 内核 3.13 版本开始引入。`nftables` 提供了一种统一的方式来管理网络流量，并且通过简化规则集、减少重复工作，提供了比 `iptables` 更高的灵活性和效率。

### `nftables` 的基本概念

- **表（Table）**：`nftables` 的规则集存放在表中，每个表包含多个链。
  - 常见的表：
    - `inet`：既支持 IPv4 也支持 IPv6。
    - `filter`：默认用于包过滤。
    - `nat`：用于网络地址转换（NAT）。
    - `mangle`：用于修改包。
  
- **链（Chain）**：链是规则的集合，用来定义包处理的过程。常见的链：
  - `input`：处理进入本地系统的流量。
  - `output`：处理从本地系统发出的流量。
  - `forward`：处理经过本地系统转发的流量。

- **规则（Rule）**：规则是链中的实际过滤指令，指定了包的匹配条件以及如何处理这些包。

### 常用的 `nftables` 命令

#### 1. **查看 `nftables` 配置**

- **查看所有规则集**：
  ```bash
  sudo nft list ruleset
  ```

#### 2. **创建表**

创建一个新的表。例如，创建一个支持 IPv4 和 IPv6 的 `inet` 表：
```bash
sudo nft add table inet filter
```

#### 3. **创建链**

在表中创建一个新的链。比如在 `filter` 表中创建 `input`、`output` 和 `forward` 链：
```bash
sudo nft add chain inet filter input { type filter hook input priority 0 \; }
sudo nft add chain inet filter output { type filter hook output priority 0 \; }
sudo nft add chain inet filter forward { type filter hook forward priority 0 \; }
```
其中：
- `type filter` 表示这是一个包过滤链。
- `hook input` 表示链与输入流量挂钩。
- `priority 0` 表示链的优先级，数字越小，优先级越高。

#### 4. **添加规则**

- **允许某个 IP 地址的访问**（例如允许 IP 地址 `192.168.1.100` 访问 `input` 链）：
  ```bash
  sudo nft add rule inet filter input ip saddr 192.168.1.100 accept
  ```

- **允许指定端口的流量**（例如允许 HTTP 流量）：
  ```bash
  sudo nft add rule inet filter input tcp dport 80 accept
  ```

- **拒绝某个端口的流量**（例如拒绝 SSH 端口 22）：
  ```bash
  sudo nft add rule inet filter input tcp dport 22 drop
  ```

- **默认丢弃未匹配的流量**（在 `input` 链上）：
  ```bash
  sudo nft add rule inet filter input drop
  ```

#### 5. **查看链规则**

查看某个链的规则。例如，查看 `input` 链的规则：
```bash
sudo nft list chain inet filter input
```

#### 6. **删除规则**

删除指定的规则。例如，删除允许某个 IP 地址的规则：
```bash
sudo nft delete rule inet filter input handle <rule-handle>
```
其中 `<rule-handle>` 是规则的句柄（编号），可以通过 `nft list chain` 获取。

#### 7. **删除链**

删除某个链。例如，删除 `input` 链：
```bash
sudo nft delete chain inet filter input
```

#### 8. **删除表**

删除表，删除表时会删除表中的所有链和规则。例如，删除 `filter` 表：
```bash
sudo nft delete table inet filter
```

#### 9. **保存和加载规则集**

- **保存规则集**：
  将规则集保存到文件（例如 `/etc/nftables.conf`）：
  ```bash
  sudo nft list ruleset > /etc/nftables.conf
  ```

- **加载规则集**：
  从文件加载规则集：
  ```bash
  sudo nft -f /etc/nftables.conf
  ```

#### 10. **启用和禁用 IP 转发**

- **启用 IP 转发**（例如，为网络共享配置转发）：
  ```bash
  sudo nft add rule inet filter forward accept
  ```

- **禁用 IP 转发**：
  ```bash
  sudo nft add rule inet filter forward drop
  ```

#### 11. **创建 NAT 规则**

- **创建一个 `nat` 表**：
  ```bash
  sudo nft add table inet nat
  ```

- **在 `nat` 表中创建 `prerouting` 链并添加 DNAT 规则**（用于修改目标 IP 地址）：
  ```bash
  sudo nft add chain inet nat prerouting { type nat hook prerouting priority -100 \; }
  sudo nft add rule inet nat prerouting ip daddr 192.168.1.1 dnat to 192.168.1.100
  ```

- **创建一个 `postrouting` 链并添加 SNAT 规则**（用于修改源 IP 地址）：
  ```bash
  sudo nft add chain inet nat postrouting { type nat hook postrouting priority 100 \; }
  sudo nft add rule inet nat postrouting ip saddr 192.168.1.100 snat to 192.168.1.1
  ```

#### 12. **使用 `nft` 配置 NAT 转发（共享网络）**

- 启用内核的 IP 转发（通过 sysctl）：
  ```bash
  sudo sysctl -w net.ipv4.ip_forward=1
  ```

- 配置源地址转换（SNAT）：
  ```bash
  sudo nft add rule inet nat postrouting oif "eth0" masquerade
  ```

### 小结

`nftables` 提供了一种更现代、更灵活的防火墙管理方式，它集成了 `iptables`、`ip6tables`、`arptables` 和 `ebtables` 的功能，简化了配置过程并提高了性能。`nftables` 通过统一的命令集和更直观的语法，让防火墙规则的管理变得更加易用。
