---
slug: /8a084b12
---

⭐⭐Debian 系统包管理器，比 dpkg 包管理器更现代化。

```bash
➜  ~ sudo apt update                               
[sudo] soulio 的密码： 
命中:1 https://packages.microsoft.com/repos/edge stable InRelease              
获取:2 http://security.ubuntu.com/ubuntu noble-security InRelease [126 kB]     
命中:3 https://packages.microsoft.com/repos/code stable InRelease
命中:4 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble InRelease              
获取:5 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates InRelease [126 kB]
获取:6 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-backports InRelease [126 kB]
获取:7 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates/main amd64 Components [151 kB]
获取:8 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates/restricted amd64 Components [212 B]
获取:9 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates/universe amd64 Components [364 kB]
获取:10 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates/multiverse amd64 Components [940 B]
获取:11 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-backports/main amd64 Components [208 B]
获取:12 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-backports/restricted amd64 Components [212 B]
获取:13 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-backports/universe amd64 Components [20.0 kB]
获取:14 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-backports/multiverse amd64 Components [212 B]
命中:15 https://ppa.launchpadcontent.net/rodsmith/refind/ubuntu noble InRelease
获取:16 http://security.ubuntu.com/ubuntu noble-security/main amd64 Components [8,992 B]
获取:17 http://security.ubuntu.com/ubuntu noble-security/restricted amd64 Components [212 B]
获取:18 http://security.ubuntu.com/ubuntu noble-security/universe amd64 Components [51.9 kB]
获取:19 http://security.ubuntu.com/ubuntu noble-security/multiverse amd64 Components [208 B]
已下载 976 kB，耗时 5秒 (187 kB/s)                                       
正在读取软件包列表... 完成
正在分析软件包的依赖关系树... 完成
正在读取状态信息... 完成                 
有 1 个软件包可以升级。请执行 ‘apt list --upgradable’ 来查看它们。

```



## 1. 简介

`apt` 命令是 Debian 和 Ubuntu 系统中用于管理软件包的工具。通过 `apt`，用户可以轻松地安装、更新、卸载和管理软件包。它集成了多个功能，能够简化包管理过程。📦

## 2. 常见操作概览 📋

| 操作                             | 命令格式                          | 说明                                |
|----------------------------------|-----------------------------------|-------------------------------------|
| 更新软件包列表                   | `sudo apt update`                 | 更新本地软件包列表。                |
| 升级所有软件包                   | `sudo apt upgrade`                | 升级所有已安装的软件包。            |
| 安装软件包                        | `sudo apt install <软件包名>`     | 安装指定的软件包。                  |
| 卸载软件包                        | `sudo apt remove <软件包名>`      | 卸载指定的软件包。                  |
| 完全卸载软件包                    | `sudo apt purge <软件包名>`       | 完全卸载软件包，包括配置文件。      |
| 清理不再使用的包                  | `sudo apt autoremove`             | 自动删除不再需要的依赖包。          |
| 搜索软件包                        | `apt search <关键词>`             | 根据关键词搜索软件包。              |
| 显示软件包信息                    | `apt show <软件包名>`             | 显示指定软件包的详细信息。          |

## 3. 命令示例 ⚡

### 3.1 更新软件包列表

执行 `sudo apt update` 命令来更新本地软件包的索引：

```bash
$ sudo apt update
```

输出示例：

```bash
Hit:1 http://archive.ubuntu.com/ubuntu focal InRelease
Hit:2 http://archive.ubuntu.com/ubuntu focal-updates InRelease
...
```

### 3.2 升级所有软件包

要升级所有已安装的软件包，可以使用 `sudo apt upgrade`：

```bash
$ sudo apt upgrade
```

此命令将列出所有需要升级的软件包，并询问是否继续。

### 3.3 安装软件包

安装一个软件包，如安装 `vim` 编辑器：

```bash
$ sudo apt install vim
```

系统会自动下载并安装该软件包及其依赖。

### 3.4 卸载软件包

如果不再需要某个软件包，可以使用 `sudo apt remove` 卸载它：

```bash
$ sudo apt remove vim
```

### 3.5 完全卸载软件包

如果你希望完全卸载软件包，并删除其所有配置文件，使用 `sudo apt purge`：

```bash
$ sudo apt purge vim
```

### 3.6 清理不再使用的包

执行 `sudo apt autoremove` 命令来删除不再需要的依赖包，保持系统整洁：

```bash
$ sudo apt autoremove
```

### 3.7 搜索软件包

如果你不确定软件包的名称，可以使用 `apt search` 来搜索软件包。例如，搜索与 `git` 相关的软件包：

```bash
$ apt search git
```

输出示例：

```bash
Sorting... Done
Full Text Search... Done
git/focal,now 1:2.25.1-1ubuntu3.2 amd64 [installed]
  fast, scalable, distributed revision control system
```

### 3.8 显示软件包信息

要查看某个软件包的详细信息，可以使用 `apt show`：

```bash
$ apt show vim
```

输出示例：

```bash
Package: vim
Version: 2:8.1.2269-1ubuntu5.4
Priority: optional
Section: editors
...
```

## 4. apt 与 apt-get 的简单比较 🔍

虽然 `apt` 和 `apt-get` 都是 Debian 和 Ubuntu 系统中常用的包管理工具，它们有些许差异，适用于不同的场景。以下是它们的简单比较：

| 特性                      | **apt**                                                        | **apt-get**                                                   |
|---------------------------|----------------------------------------------------------------|---------------------------------------------------------------|
| **命令功能**              | 提供更简化、更易用的包管理命令，适合普通用户。                    | 功能完整，适合需要详细控制的系统管理员。                        |
| **输出格式**              | 输出更简洁，适合终端交互操作。                                  | 输出更详细，适合脚本化操作。                                   |
| **更新操作**              | `apt update` 和 `apt upgrade` 集成了多个操作，更适合日常使用。   | `apt-get update` 和 `apt-get upgrade` 需要分别执行，适合复杂任务。 |
| **高级选项**              | 适用于常见的包管理任务，适合用户进行日常的安装和卸载操作。       | 提供更强大的选项，适合系统管理员进行系统维护和升级。            |
| **适用场景**              | 适合普通用户和日常操作，快速安装、升级和清理包。                  | 适合复杂的系统管理任务，例如脚本化操作、升级整个发行版等。      |

### 4.1 apt 适用场景

- **日常包管理任务**：例如安装、升级、清理软件包。
- **普通用户操作**：如果你是普通用户，`apt` 提供了更简洁的命令和输出。

### 4.2 apt-get 适用场景

- **复杂系统管理任务**：例如批量安装、卸载、自动化脚本化操作。
- **需要更多控制的任务**：对于需要更详细输出或细粒度控制的操作，`apt-get` 是更合适的选择。

## 5. 小贴士 💡

- **`sudo` 权限**：大多数 `apt` 命令需要管理员权限，因此需要使用 `sudo`。
- **定期更新**：定期运行 `sudo apt update` 和 `sudo apt upgrade`，确保系统和软件包保持最新。
- **自动清理**：使用 `sudo apt autoremove` 定期清理不再需要的包，保持系统简洁。

## 6. 总结 🎯

`apt` 是 Debian 和 Ubuntu 系统中非常强大的包管理工具，通过它，你可以轻松地安装、升级、卸载和管理软件包。它简化了常见的包管理操作，非常适合普通用户。如果你需要更多的控制和复杂操作，`apt-get` 提供了更丰富的功能。

希望这篇教程帮助你更好地使用 `apt` 命令！别忘了收藏 **在线知识库**（ [www.zxzsk.com](http://www.zxzsk.com) ）哦！😊
