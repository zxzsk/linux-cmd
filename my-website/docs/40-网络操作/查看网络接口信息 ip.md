---
description: 学习如何使用 ip 命令管理网络配置
---



`ip` 命令是 Linux 系统中一个功能强大的网络管理工具，用于显示和配置网络接口、路由、地址、链路等。它是 `ifconfig` 和 `route` 命令的现代替代工具，提供了更加丰富和灵活的网络管理功能。🛠️

今天，我们将带你一起探索 `ip` 命令的常用功能，让你快速掌握它的使用技巧！🚀

## 1. 基本用法：查看网络接口

### 查看所有网络接口

要查看系统中所有网络接口的详细信息，可以使用 `ip a` 或 `ip addr` 命令：

```bash
ip a
```

模拟输出：

```bash
3: eth0: <BROADCAST,MULTICAST> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    inet 192.168.1.100/24 brd 192.168.1.255 scope global eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::d4a8:abcd:5678:efgh/64 scope link
       valid_lft forever preferred_lft forever
```

输出解释：
- **eth0**：网络接口名称。
- **inet**：IPv4 地址，后面是子网掩码。
- **inet6**：IPv6 地址。

### 查看单个网络接口

如果你只关心某个特定接口的详细信息，可以指定接口名：

```bash
ip addr show eth0
```

## 2. 配置 IP 地址

### 设置 IPv4 地址

要为某个网络接口配置 IP 地址，使用 `ip addr add` 命令：

```bash
sudo ip addr add 192.168.1.200/24 dev eth0
```

这个命令为 `eth0` 接口配置了 `192.168.1.200` 的 IPv4 地址。

### 删除 IP 地址

如果你需要删除已配置的 IP 地址，可以使用 `ip addr del` 命令：

```bash
sudo ip addr del 192.168.1.200/24 dev eth0
```

## 3. 配置网络接口

### 启动网络接口

使用 `ip link set` 命令启动网络接口：

```bash
sudo ip link set eth0 up
```

### 禁用网络接口

如果需要禁用接口，使用：

```bash
sudo ip link set eth0 down
```

## 4. 配置路由

### 查看当前路由表

要查看系统当前的路由表，可以使用 `ip route` 命令：

```bash
ip route
```

模拟输出：

```bash
default via 192.168.1.1 dev eth0
192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.100
```

### 添加路由

要添加新的路由，可以使用以下命令：

```bash
sudo ip route add 10.0.0.0/24 via 192.168.1.1
```

这个命令会将 `10.0.0.0/24` 网络的流量通过 `192.168.1.1` 网关发送。

### 删除路由

如果你需要删除某个路由，可以使用 `ip route del` 命令：

```bash
sudo ip route del 10.0.0.0/24
```

## 5. 配置默认网关

要设置默认网关，可以使用以下命令：

```bash
sudo ip route add default via 192.168.1.1
```

这将会把默认网关设置为 `192.168.1.1`。

<details>
<summary>删除默认路由</summary>
```bash
sudo ip route del default via 192.168.1.1
```
</details>


:::info 科学上网
    假设你已经在内网搭建了旁路由（v2rayA），并将其IP设置为192.168.10.2（随便），只需将上网设备的网关指向该IP，就能实现科学上网。

    电脑可以通过执行 `ip route add default via 192.168.10.2` 来切换到旁路由，使用完毕后，执行 `ip route del default via 192.168.10.2` 即可恢复到主路由。
:::


## 6. 配置和查看 ARP 缓存

### 查看 ARP 缓存

ARP（地址解析协议）缓存保存了 IP 地址与物理地址（MAC 地址）的映射。查看 ARP 缓存可以使用：

```bash
ip neigh
```

模拟输出：

```bash
192.168.1.1 dev eth0 lladdr 00:1a:2b:3c:4d:5e REACHABLE
```

### 删除 ARP 缓存

要删除指定的 ARP 缓存条目，可以使用：

```bash
sudo ip neigh del 192.168.1.1 dev eth0
```

## 7. 配置 IPv6 地址

### 设置 IPv6 地址

配置 IPv6 地址的方式与 IPv4 类似：

```bash
sudo ip addr add 2001:db8::1/64 dev eth0
```

### 删除 IPv6 地址

删除 IPv6 地址：

```bash
sudo ip addr del 2001:db8::1/64 dev eth0
```

## 8. 高级用法

### 配置多个 IP 地址

`ip` 命令支持为一个接口配置多个 IP 地址。例如：

```bash
sudo ip addr add 192.168.1.201/24 dev eth0
sudo ip addr add 192.168.1.202/24 dev eth0
```

### 设置路由策略

`ip` 命令允许你为不同的流量设置路由策略。例如，路由到 `10.0.0.0/24` 网络的流量使用不同的路由表：

```bash
sudo ip route add 10.0.0.0/24 via 192.168.1.1 table 100
```

## 9. 总结

`ip` 命令是 Linux 中一个强大且灵活的网络管理工具。它不仅可以查看和配置网络接口、IP 地址、路由等，还支持复杂的网络管理操作。通过掌握 `ip` 命令，你将能够更加高效地管理和调试 Linux 系统中的网络配置。

希望这篇教程帮助你快速掌握 `ip` 命令的基本用法，并激发你探索更多高级功能！🚀

希望这篇教程对你有所帮助！别忘了收藏**在线知识库**（ [www.zxzsk.com](http://www.zxzsk.com) ）哦！😊

