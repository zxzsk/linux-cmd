---
slug: /7f092b40
---
⭐操作简单的防火墙

## 一、命令简介

`ufw`（Uncomplicated Firewall）是一个为 Linux 系统提供简单易用的命令行界面的防火墙管理工具。它是基于 `iptables` 的，但提供了更简洁的语法和更直观的操作方式，使得配置防火墙变得更加简单，特别适合那些希望快速设置基本防火墙的用户，同时也支持更高级的配置需求。

### 安装 ufw

```bash
sudo apt update
sudo apt install ufw
```

---

## 二、命令参数

命令格式：

```bash
sudo ufw 子命令 [选项] [规则]
```

* `[子命令]`：如 `enable`、`disable`、`allow`、`deny`、`limit`、`delete` 等，用于执行特定的防火墙操作。
* `[选项]`：这是子命令的可选参数，用于进一步定义或修改子命令的行为。
* `[规则]`：这是指定防火墙规则的部分，通常包括流量来源、目的地、使用的协议和端口等信息。

### 子命令

* `enable`: 启用UFW。
* `disable`: 禁用UFW。
* `allow`: 允许特定的连接或服务。
* `deny`: 拒绝特定的连接或服务。
* `reject`: 拒绝特定的连接或服务，并返回一个错误信息给客户端。
* `limit`: 限制特定连接的速率。
* `delete`: 删除一个特定的规则。
* `insert`: 在规则列表中的特定位置插入一条规则。
* `status`: 显示当前的防火墙规则状态。
* `status numbered`: 显示当前防火墙规则的状态，并带上规则的编号。
* `reset`: 重置UFW的规则，即删除所有规则。

### 选项

* `--dry-run`: 显示规则更改，但不实际应用它们。
* `--force`: 强制执行命令，不进行任何提示。
* `in`: 指定规则应用于进入的连接。
* `out`: 指定规则应用于输出的连接。
* `on`: 指定规则应用于特定的网络接口。

### 规则

* `ssh`: 允许或拒绝SSH连接。
* `80/tcp`: 指定TCP端口80的规则。
* `53/udp`: 指定UDP端口53的规则。
* `from 192.168.1.100`: 指定来自特定IP地址的规则。
* `to any`: 指定目标为任何地址的规则。

---

## 三、命令示例

1. 启用 ufw：

    ```bash
    sudo ufw enable
    ```
2. 禁用 ufw：

    ```bash
    sudo ufw disable
    ```
3. 允许所有传入流量：

    ```bash
    sudo ufw default allow incoming
    ```

    * `default`：这个关键字用于设置默认的策略，而不是针对特定的服务或端口。

    * `allow`：允许。
    * `incoming`：这个关键字指定了规则的类型，这里是针对传入的流量。
4. 拒绝所有传入流量：

    ```bash
    sudo ufw default deny incoming
    ```

    * `deny`：拒绝。
5. 允许所有传出流量：

    ```bash
    sudo ufw default allow outgoing
    ```

    * `outgoing`：这个关键字指定了规则的类型，这里是针对传出的流量。
6. 拒绝所有传出流量：

    ```bash
    sudo ufw default deny outgoing
    ```
7. 允许来自特定 IP 地址的流量：

    ```bash
    sudo ufw allow from 192.168.1.100
    ```
8. 拒绝来自特定 IP 地址的流量：

    ```bash
    sudo ufw deny from 192.168.1.200
    ```
9. 允许特定端口的流量（例如，TCP 端口 80）：

    ```bash
    sudo ufw allow 80/tcp
    ```
10. 拒绝特定端口的流量（例如，UDP 端口 53）：

     ```bash
     sudo ufw deny 53/udp
     ```
11. 允许特定服务的流量（例如，SSH）：

     ```bash
     sudo ufw allow ssh
     ```
12. 拒绝特定服务的流量（例如，MySQL）：

     ```bash
     sudo ufw deny mysql
     ```
13. 限制特定端口的连接尝试（例如，每分钟不超过 20 次）：

     ```bash
     sudo ufw limit 22/tcp
     ```
14. 删除特定规则的编号（例如，删除编号为 3 的规则）：

     ```bash
     sudo ufw delete 3
     ```
15. 在特定位置插入规则（例如，在编号 5 的位置插入规则）：

     ```bash
     sudo ufw insert 5 allow 2222/tcp
     ```
16. 在规则列表的开头添加规则（例如，允许 TCP 端口 443）：

     ```bash
     sudo ufw prepend allow 443/tcp
     ```
17. 重新加载 ufw 的规则：

     ```bash
     sudo ufw reload
     ```
18. 重置 ufw 的规则到默认状态：

     ```bash
     sudo ufw reset
     ```
19. 显示 ufw 的当前状态：

     ```bash
     sudo ufw status
     ```
20. 显示 ufw 的当前状态，包括规则编号：

     ```bash
     sudo ufw status numbered
     ```
21. 显示 ufw 的详细状态：

     ```bash
     sudo ufw status verbose
     ```
22. 显示 ufw 的版本信息：

     ```bash
     sudo ufw version
     ```
23. 列出所有应用程序配置文件：

     ```bash
     sudo ufw app list
     ```
24. 显示特定应用程序配置文件的详细信息（例如，SSH）：

     ```bash
     sudo ufw app info ssh
     ```
25. 更新特定应用程序配置文件（例如，SSH）：

     ```bash
     sudo ufw app update ssh
     ```
26. 设置默认的应用程序策略（例如，允许 Dovecot）：

     ```bash
     sudo ufw app default allow dovecot
     ```


## 四、规则生效顺序

存在多条规则时，如果规则间有冲突，则前者优先生效。

```bash
To                         Action      From
--                         ------      ----
22                         ALLOW       192.168.10.0/24  #第1条始终有效，因为它在最前面。
22                         DENY        Anywhere         #与前面的规则冲突，只能部分生效，DENY对规则1描述的网段不生效。
22 (v6)                    DENY        Anywhere (v6)	#生效
```

* 第一条规则始终有效
* 第二条规则，与第一条规则冲突的部分无效，不冲突的部分有效。
* 第三条规则有效。


**练习：** 限制端口 22 每分钟只能尝试连接 5 次，但不限制来自192.168.10.0/24 网段的连接？

1. 限制默认连接次数。编辑 `/etc/ufw/ufw.conf` 文件，设置参数 `LIMIT = "5/minute"`，保存。执行 `sudo ufw reload` 重载 ufw 配置。
2. 允许特例。

```bash
# 允许内网192.168.10.0/24网段无限连接尝试
sudo ufw allow from 192.168.10.0/24 to any port 22

# 限制端口连接频率
sudo ufw limit proto tcp to any port 22
```


**注意：添加规则的顺序很重要。** 因为规则列表的顺序就是ufw生效顺序。应先添加特例，再添加默认行为。
