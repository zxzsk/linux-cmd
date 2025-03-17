---
slug: /cd0d2e5a
---
⭐查看系统多项信息

`uname` 命令用于显示有关当前系统的基本信息，包括操作系统类型、主机名、内核版本等。

## 1. `uname` 命令

`uname` 命令主要用于显示有关当前操作系统的信息。常用选项包括：

### 1.1 查看操作系统名称
```bash
uname
```
示例输出：
```bash
Linux
```

### 1.2 查看内核名称和版本
```bash
uname -r
```
示例输出：
```bash
5.4.0-72-generic
```

### 1.3 查看系统架构
```bash
uname -m
```
示例输出：
```bash
x86_64
```

### 1.4 查看所有信息
```bash
uname -a
```
示例输出：
```bash
Linux myhostname 5.4.0-72-generic #80-Ubuntu SMP Fri May 7 18:18:51 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux
```

## 2. 与 `uname` 作用类似的其他命令

### 2.1 `hostname` 命令
`hostname` 命令用于显示或设置当前系统的主机名。与 `uname` 提供的主机名信息相似，但 `hostname` 命令更直接地控制主机名。

#### 查看主机名：
```bash
hostname
```
示例输出：
```bash
myhostname
```

#### 显示完整的主机名（包括域名）：
```bash
hostname -f
```

### 2.2 `lsb_release` 命令
`lsb_release` 命令用于显示系统的发行版信息，如发行版名称、版本和代号。它提供比 `uname` 更多关于操作系统的信息。

#### 查看发行版信息：
```bash
lsb_release -a
```
示例输出：
```bash
Distributor ID: Ubuntu
Description:    Ubuntu 20.04 LTS
Release:        20.04
Codename:       focal
```

#### 仅查看发行版描述：
```bash
lsb_release -d
```

### 2.3 `arch` 命令
`arch` 命令用于显示当前系统的架构类型（如 `x86_64` 或 `i386`）。

#### 查看系统架构：
```bash
arch
```
示例输出：
```bash
x86_64
```

### 2.4 `cat /etc/os-release` 命令
`/etc/os-release` 文件包含操作系统的详细信息，`cat /etc/os-release` 命令可以快速查看这些信息。

#### 查看操作系统详细信息：
```bash
cat /etc/os-release
```
示例输出：
```bash
NAME="Ubuntu"
VERSION="20.04 LTS (Focal Fossa)"
ID=ubuntu
ID_LIKE=debian
VERSION_ID="20.04"
VERSION_CODENAME=focal
```

### 2.5 `uptime` 命令
`uptime` 命令显示系统的运行时间（即系统从上次启动以来的运行时长）、当前时间、登录用户数量和系统负载等信息。

#### 查看系统运行时间和负载：
```bash
uptime
```
示例输出：
```bash
14:50:25 up 1 day,  3:40,  3 users,  load average: 0.10, 0.15, 0.13
```

### 2.6 `top` 命令
`top` 命令用于实时显示系统的性能数据，包括 CPU 使用率、内存使用情况、进程信息等。与 `uname` 和 `hostname` 不同，`top` 更侧重于实时监控。

#### 查看系统性能：
```bash
top
```

### 2.7 `dmesg` 命令
`dmesg` 命令显示系统的内核日志，主要包含系统引导过程中的信息和硬件设备信息。通过 `dmesg`，你可以获得系统初始化时的详细日志。

#### 查看内核日志：
```bash
dmesg | less
```

### 2.8 `hwinfo` 命令
`hwinfo` 命令提供详细的硬件信息，包括 CPU、内存、硬盘、网络接口等。对于查看系统硬件配置非常有用。

#### 查看硬件信息：
```bash
hwinfo
```

### 2.9 `lscpu` 命令
`lscpu` 命令用于显示 CPU 架构信息，包括核心数、线程数、架构类型等。

#### 查看 CPU 信息：
```bash
lscpu
```
示例输出：
```bash
Architecture:        x86_64
CPU op-mode(s):      32-bit, 64-bit
CPU(s):              4
Core(s) per socket:  2
Socket(s):           1
```

### 2.10 `free` 命令
`free` 命令用于显示系统的内存使用情况，包括已用内存、空闲内存、缓存和交换空间等。

#### 查看内存使用情况：
```bash
free -h
```
示例输出：
```bash
              total        used        free      shared  buff/cache   available
Mem:            8.0G        3.1G        2.4G        146M        2.5G        4.4G
Swap:           1.0G        0.0G        1.0G
```

## 3. 总结 🌟

通过 `uname` 命令和其他类似的命令，我们可以轻松获取关于系统、硬件和操作系统的关键信息。每个命令都有其独特的作用和优势，根据需求选择合适的命令，能够帮助你快速了解系统的各个方面。🎯

希望这篇教程对你有所帮助！别忘了收藏**在线知识库**（ [www.zxzsk.com](http://www.zxzsk.com) ）哦！😊
