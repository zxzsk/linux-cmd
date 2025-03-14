经典防火墙（正在被替代）



**iptables** 是 Linux 操作系统中最常用的防火墙工具。

## 1. 什么是 iptables？ 🤔

**iptables** 是 Linux 操作系统中最常用的防火墙工具，它用于过滤和管理网络流量。iptables 基于规则集来控制进出 Linux 系统的网络流量。它能够根据 IP 地址、端口、协议等条件过滤数据包，并为系统提供强大的安全性保护。🚀

| 特点           | 描述                                                |
| ---------------- | ----------------------------------------------------- |
| 高度可定制     | 允许根据不同的网络需求和安全策略来定制规则。        |
| 性能高效       | 直接操作内核的网络栈，具有极低的性能开销。          |
| 强大的规则支持 | 支持多种协议（TCP、UDP、ICMP 等）和各种网络层过滤。 |

## 2. 安装 iptables 📥

### 2.1 安装 iptables

在大多数 Linux 发行版中，iptables 通常是预装的。如果没有安装，你可以使用以下命令安装它：

在 Ubuntu 或 Debian 系统上：

```bash
sudo apt update
sudo apt install iptables
```

在 CentOS 或 RHEL 系统上：

```bash
sudo yum install iptables
```

### 2.2 检查 iptables 状态

安装完成后，你可以通过以下命令检查 iptables 服务的状态：

```bash
sudo systemctl status iptables
```

如果没有安装或未启用，你可以启动 iptables 服务：

```bash
sudo systemctl start iptables
```

## 3. 配置 iptables 防火墙 ⚙️

### 3.1 基本命令格式

iptables 的命令格式如下：

```bash
sudo iptables -A <CHAIN> -p <PROTOCOL> --dport <PORT> -j <ACTION>
```

*  **-A**: 添加规则（Append）。
*  **-p**: 指定协议，如 `tcp`、`udp` 或 `icmp`。
*  **--dport**: 目标端口。
*  **-j**: 指定动作（如 ACCEPT、DROP、REJECT 等）。

### 3.2 配置常见的防火墙规则

#### 3.2.1 允许 SSH 访问

默认情况下，Linux 防火墙会阻止所有传入的连接。要允许 SSH（端口 22）的连接，可以使用以下命令：

```bash
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
```

#### 3.2.2 允许 HTTP 和 HTTPS 访问

要允许 HTTP（端口 80）和 HTTPS（端口 443）的访问：

```bash
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT
```

#### 3.2.3 拒绝 ICMP（Ping）请求

为了增强系统的安全性，可能需要禁用 Ping 请求（ICMP）。可以使用以下命令拒绝所有传入的 ICMP 请求：

```bash
sudo iptables -A INPUT -p icmp --icmp-type echo-request -j REJECT
```

#### 3.2.4 允许来自特定 IP 地址的流量

如果你希望只允许来自特定 IP 地址的访问，可以使用：

```bash
sudo iptables -A INPUT -p tcp -s 192.168.1.100 --dport 22 -j ACCEPT
```

#### 3.2.5 默认拒绝所有流量

为了提高安全性，建议设置默认规则为拒绝所有传入连接：

```bash
sudo iptables -P INPUT DROP
```

这将阻止所有未明确允许的流量。

### 3.3 配置规则链

iptables 使用规则链（Chain）来组织不同的规则。常见的规则链有：

* **INPUT**：处理进入系统的流量。
* **OUTPUT**：处理从系统发出的流量。
* **FORWARD**：处理转发流量。

你可以通过以下命令查看当前规则：

```bash
sudo iptables -L
```

如果想要删除某条规则，可以使用以下命令：

```bash
sudo iptables -D INPUT -p tcp --dport 22 -j ACCEPT
```

## 4. 保存和恢复 iptables 规则 🔧

### 4.1 保存规则

在系统重启后，iptables 配置会丢失。因此，必须保存规则：

在 Ubuntu 或 Debian 系统上：

```bash
sudo iptables-save > /etc/iptables/rules.v4
```

在 CentOS 或 RHEL 系统上：

```bash
sudo service iptables save
```

### 4.2 恢复规则

如果你需要恢复保存的规则，可以使用以下命令：

在 Ubuntu 或 Debian 系统上：

```bash
sudo iptables-restore < /etc/iptables/rules.v4
```

在 CentOS 或 RHEL 系统上：

```bash
sudo service iptables restart
```

## 5. 配置防火墙开机自启 ⚡

### 5.1 启动 iptables 开机自启

为了确保系统重启后 iptables 自动启用，可以使用以下命令：

```bash
sudo systemctl enable iptables
```

### 5.2 确保 iptables 服务正在运行

使用以下命令确保 iptables 服务正在运行：

```bash
sudo systemctl start iptables
```

## 6. 查看和调试 iptables 规则 🛠️

### 6.1 查看现有规则

要查看当前的所有 iptables 规则，可以使用以下命令：

```bash
sudo iptables -L -v
```

该命令会列出所有规则，并显示详细的流量计数信息。

### 6.2 查看 NAT 表规则

如果你配置了 NAT（例如端口转发），可以查看 NAT 表规则：

```bash
sudo iptables -t nat -L -v
```

### 6.3 启用日志记录

你可以使用 iptables 进行日志记录，例如记录被拒绝的连接：

```bash
sudo iptables -A INPUT -j LOG --log-prefix "iptables denied: "
```

日志会写入 `/var/log/syslog`，你可以查看被拒绝的连接。

## 7. 高级 iptables 配置 🌐

### 7.1 配置端口转发

如果你需要将外部的某个端口流量转发到内部的另一个端口，可以使用以下命令：

例如，将所有来自外部端口 8080 的流量转发到内部端口 80：

```bash
sudo iptables -t nat -A PREROUTING -p tcp --dport 8080 -j REDIRECT --to-port 80
```

### 7.2 配置状态跟踪

iptables 支持基于连接状态的过滤。你可以通过以下命令仅允许已经建立的连接：

```bash
sudo iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
```

### 7.3 限制连接速率

为了防止暴力破解，可以限制某些服务的连接速率，例如限制 SSH 每秒的连接次数：

```bash
sudo iptables -A INPUT -p tcp --dport 22 -m limit --limit 5/min -j ACCEPT
```

## 8. 小结 🎉

通过本教程，你已经了解了如何安装、配置和管理 iptables 防火墙，增强了 Linux 系统的安全性。iptables 是一个强大的工具，能够帮助你精细地控制流量、提高系统的安全性。希望这篇教程对你有所帮助！🚀 别忘了收藏 **在线知识库**（ [www.zxzsk.com](http://www.zxzsk.com/) ）哦！😊