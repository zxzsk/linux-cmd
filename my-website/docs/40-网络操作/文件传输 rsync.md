---
description: 本文介绍了 rsync 命令的基本使用方法，如何利用 rsync 在本地和远程服务器之间进行文件同步，以及一些常见的用法和优化技巧。  
keywords:  
  - rsync  
  - 文件同步  
  - 备份  
  - Linux  
  - 远程同步  
---



## 1. 什么是 rsync？💻

`rsync` 是一个强大的命令行工具，用于高效地在本地或远程系统之间同步文件和目录。相比传统的文件复制方法，`rsync` 通过仅传输差异部分来节省带宽，速度更快，也能节约时间。

## 2. rsync 的特点 📝

- **增量传输**：`rsync` 只会传输源和目标文件之间的差异部分，大大提高传输效率。
- **支持本地与远程同步**：不仅可以在本地文件系统之间同步，还可以通过 SSH 连接远程服务器进行文件同步。
- **保留文件属性**：可以保留文件的权限、时间戳等属性，确保源和目标文件一致。
- **支持压缩**：可以通过 `-z` 参数启用压缩，进一步节省带宽。

## 3. 安装 rsync 🛠️

在大多数 Linux 发行版中，`rsync` 默认已安装。如果未安装，可以通过以下命令进行安装：

- **Debian/Ubuntu**:

  ```bash
  sudo apt update
  sudo apt install rsync
  ```

- **CentOS/RHEL**:

  ```bash
  sudo yum install rsync
  ```

- **Fedora**:

  ```bash
  sudo dnf install rsync
  ```

:::info
使用 `rsync` 与远程服务器同步文件，需要本地和服务器同时安装 `rsync` 命令。
:::

## 4. rsync 的基本语法 🔧

`rsync` 的基本语法如下：

```bash
rsync [选项] 源路径 目标路径
```

其中，源路径可以是本地路径或远程路径，目标路径同样可以是本地或远程路径。

### 4.1 基本用法示例

1. **本地文件复制**：

   将本地的 `folder1` 目录复制到 `folder2`：

   ```bash
   rsync -av folder1/ folder2/
   ```

   这条命令会递归地将 `folder1` 中的所有文件和子目录复制到 `folder2`，并保持文件的属性（`-a` 表示归档模式，保留符号链接、文件权限、时间戳等）。

2. **远程文件同步**：

   从本地机器将文件同步到远程服务器：

   ```bash
   rsync -av /local/path/ user@remote:/remote/path/
   ```

   同样，`user@remote:/remote/path/` 是远程服务器的路径，`user` 是用户名，`remote` 是服务器地址。

3. **从远程同步到本地**：

   将远程文件同步到本地：

   ```bash
   rsync -av user@remote:/remote/path/ /local/path/
   ```

## 5. 常见选项介绍 💡

### 5.1 `-a`：归档模式

`-a` 选项是 `rsync` 中最常用的选项之一，它启用归档模式，表示以递归的方式复制文件，并保留文件的权限、时间戳、符号链接等属性。基本上，它等同于 `-rlptgoD` 的组合。

### 5.2 `-v`：详细模式

`-v` 选项启用详细模式，显示正在传输的文件名和进度信息。结合 `-a` 一起使用，能够提供更详细的输出。

### 5.3 `-z`：启用压缩

启用压缩功能，适用于网络带宽较慢的情况：

```bash
rsync -avz /local/path/ user@remote:/remote/path/
```

### 5.4 `--delete`：删除目标目录中多余的文件

> 默认情况下，rsync 不会同步删除动作。除非使用--delete参数，这将删除只存在于目标目录、不存在于源目录的文件。

```bash
rsync -av --delete /local/path/ user@remote:/remote/path/
```

### 5.5 `-n`：试运行（模拟）

`-n` 选项用于模拟运行，不会实际执行任何同步操作。这可以帮助你检查将要执行的操作：

```bash
rsync -avz -n /local/path/ user@remote:/remote/path/
```

## 6. 远程同步和 SSH 配置 🔐

`-e ssh` 指定 `rsync` 使用 SSH 来进行远程同步。不过现在 `rsync` 默认使用 SSH 协议进行传输了，可以不写 `-e` 参数。
```bash
rsync -av /local/path/ user@remote:/remote/path/
```
指定 SSH 的参数就必须 `-e` 参数
```BASH
rsync -av -e 'ssh -p 2234' /local/path/ user@remote:/remote/path/
```

### 6.1 配置免密登录

为了简化操作，可以配置 SSH 的免密登录。通过生成 SSH 密钥对并将公钥添加到远程服务器的 `~/.ssh/authorized_keys` 文件中，实现免密登录。步骤如下：

1. 生成 SSH 密钥：

   ```bash
   ssh-keygen
   ```

2. 将公钥复制到远程服务器：

   ```bash
   ssh-copy-id user@remote
   ```

配置完免密登录后，你就可以使用 `rsync` 命令进行无密码的文件同步。


:::tip 使用 rsync 管理静态网站
1. **网站开发**  
你可以使用多种工具，例如 docusaurus   
   编辑并预览网站
   ```bash
   npm start
   ```
   生成网站源文件到 build 目录
   ```bash
   npm build
   ```
2. **网站发布**  
   使用 rsync 将 build 目录同步到网站根目录
   ```bash
   rsync -avz --delete /path/to/build/ user@remote:/path/to/www.zxzsk.com/
   ```
   - -z：压缩数据传输以减少网络流量。  
   - --delete：同步删除动作。

最佳实践：用 alias 将 rsync 同步网站文件的命令定义为别名 `pushweb` ，只需要在终端执行 `pushweb` 就可以更新网站内容啦！
:::

## 7. 进阶用法 🔧

### 7.1 使用 `--link-dest` 增量备份

增量备份是指只备份自上次备份以来发生变化的文件。`rsync` 的增量备份功能通过比较文件的时间戳和大小来实现。可以将备份存储到不同的目录中，每次备份只复制新变化的部分。

说白了就是类似 **快照** 功能。

第一次备份：
```bash
rsync -av /data/ /backup/backup1/
```
这将把 /data 的内容复制到 /backup/backup1。

第二次备份：
```bash
rsync -av --link-dest=/backup/backup1 /data/ /backup/backup2/
```
这将把 /data 中的新内容备份到 /backup/backup2，相同的文件将创建硬链接。

:::tip
第一次备份使用 `--link-dest` 参数可以吗?

不可以：因为 --link-dest 只能用于增量备份，它需要一个已经存在的目录作为参考，以便进行硬链接操作。如果目标目录 /backup/backup1 是空的，rsync 无法通过硬链接方式创建文件。
:::

### 7.2 使用 `--bwlimit` 限制带宽

如果你不希望 `rsync` 占用全部网络带宽，可以使用 `--bwlimit` 限制最大带宽。单位为 KB/s：

```bash
rsync -av --bwlimit=100 /local/path/ user@remote:/remote/path/
```

## 8. 小结 📚

`rsync` 是一个非常强大和高效的文件同步工具，广泛应用于数据备份、系统迁移等场景。它不仅可以在本地机器之间同步文件，还可以通过 SSH 与远程服务器进行同步，支持增量传输和多种优化选项。掌握 `rsync` 的使用方法，将大大提高文件传输和备份的效率。

希望这篇教程帮助你更好地理解并使用 `rsync`！别忘了收藏**在线知识库**（ www.zxzsk.com ）哦！😊

