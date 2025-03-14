⭐文件传输

## 1. FTP 和 SFTP 命令简介 🌐

### 1.1 FTP (File Transfer Protocol) 📂

- FTP 是一种常用的文件传输协议，允许你通过 TCP/IP 网络上传或下载文件。
- FTP 文件传输过程中的数据不加密，易受到中间人攻击。
- FTP 使用两个连接，一个用于发送命令（控制连接），另一个用于传输数据（数据连接）。
- FTP 默认端口是 21。
  
### 1.2 SFTP (SSH File Transfer Protocol) 🔒

- SFTP 的诞生是为了解决了 FTP 的安全问题。
- SFTP 是基于 `SSH` 协议的文件传输协议，使用加密连接来确保数据的安全性。
- SFTP 默认端口是 22。

### 1.3 如何使用ftp/sftp命令

使用 ftp/sftp 有点类似 ssh 命令：先与远程主机建立连接，再去执行一些操作。不同的是 ftp/sftp 建立连接后只可以执行有限的几条命令，通过这几条命令可以比较方便的上传和下载文件。

现在许多Linux发行版默认安装的是 sftp 命令。由于 ftp 不够安全，因此咱也不爱使用它。

## 2. 常用 ftp 和 sftp 命令对比 🆚

1.建立连接
| 功能                   | FTP 命令                           | SFTP 命令                        | 备注                                   |
|------------------------|------------------------------------|----------------------------------|----------------------------------------|
| **连接服务器**          | `ftp <hostname>`                   | `sftp <username>@<hostname>`      | `SFTP` 需要提供用户名，`FTP` 只需主机名 |

2.建立连接后可执行操作
| 功能                   | FTP 命令                           | SFTP 命令                        | 备注                                   |
|------------------------|------------------------------------|----------------------------------|----------------------------------------|
| **列出远程目录内容**     | `ls` 或 `ls -l`                    | `ls`                             | 两者都支持列出目录内容                |
| **切换远程目录**         | `cd <dir>`                         | `cd <dir>`                       | 相同功能                               |
| **上传文件**            | `put <local-file> <remote-file>`    | `put <local-file> <remote-file>`  | 相同功能                               |
| **下载文件**            | `get <remote-file> <local-file>`    | `get <remote-file> <local-file>`  | 相同功能                               |
| **查看当前目录**        | `pwd`                              | `pwd`                            | 相同功能                               |
| **传输模式**            | `ascii` 或 `binary`                | `-`                              | `SFTP` 自动使用加密连接，FTP 可选择传输模式 |
| **显示远程文件内容**    | `get <file>`                       | `cat <remote-file>`               | `SFTP` 通过 `cat` 显示文件内容         |
| **上传多个文件**        | `mput <files>`                     | `mput <files>`                   | 相同功能                               |

3.退出连接
| 功能                   | FTP 命令                           | SFTP 命令                        | 备注                                   |
|------------------------|------------------------------------|----------------------------------|----------------------------------------|
| **退出连接**                | `quit` 或 `bye`                    | `exit` 或 `quit`                 | 相同功能                               |

## 3. FTP 命令教程 📜

使用以下命令登录 ftp 服务器：
```bash
ftp ftp.example.com
```

:::note
登录后，可以使用以下命令进行文件操作：

- `ls`：列出远程目录中的文件。
- `lls`：列出本地目录中的文件。
- `cd`：更改远程目录。
- `get filename`：从服务器下载文件。
- `put filename`：上传文件到服务器。
- `bye` 或 `quit`：退出 FTP 会话。

更多...
:::

:::warning
由于 FTP 不够安全，只适合在局域网或者文件不涉密的情况下使用。
:::

## 4. SFTP 命令案例 🔑

使用 `sftp` 命令连接到 serv00 服务器，并上传、下载文件。

### 4.1 连接到 SFTP 服务器

使用 `sftp` 命令连接到远程 SFTP 服务器：

```bash
sftp <username>@<hostname>
```

建立连接后，提示符变成 `sftp>` 

```bash
# highlight-next-line
$ sftp axio@s6.serv00.com
Connected to s6.serv00.com.
# highlight-next-line
sftp>
```


:::note
使用与 ftp 相同的命令进行文件操作：

- `ls`：列出远程目录中的文件。
- `lls`：列出本地目录中的文件。
- `cd`：更改远程目录。
- `get filename`：从服务器下载文件。
- `put filename`：上传文件到服务器。
- `bye` 或 `quit`：退出 FTP 会话。

更多...
:::


### 4.2 列出远程目录

与 FTP 相同，使用 `ls` 查看远程目录：

```bash
# highlight-next-line
sftp> ls
1562561404.zip            2578097974.zip            Typecho-Joe-Theme.zip     
backups                   bin                       domains    
...
```
这里列出了远程主机的家目录。

想要查看本地目录可以使用 `lls` 命令。

### 4.3 上传和下载文件

- 上传文件：

```bash
put <local-file> <remote-file>
```
:::note
默认上传到工作目录
```bash
# highlight-next-line
sftp> put 圣诞雪帽.jpg 
Uploading 圣诞雪帽.jpg to /home/soulio/圣诞雪帽.jpg
圣诞雪帽.jpg 
100% 7352     4.5MB/s   00:00  
```
上传到指定目录
```bash
sftp> put 圣诞雪帽.jpg 公共/
Uploading 圣诞雪帽.jpg to /home/soulio/公共/圣诞雪帽.jpg
圣诞雪帽.jpg
100% 7352     5.8MB/s   00:00  
```
:::

- 下载文件：

```bash
get <remote-file> <local-file>
```
:::note
相对目录：可以使用`.`表示表示当前目录，不能使用`~`表示家目录。
```bash
# highlight-next-line
sftp> get wiki.sh .
Fetching /usr/home/axio/wiki.sh to .
wiki.sh                                       100%   89     0.1KB/s   00:00   
```

绝对目录：
```bash
# highlight-next-line
sftp> get wiki.sh /home/soulio/test/
Fetching /usr/home/axio/wiki.sh to /home/soulio/test/wiki.sh
wiki.sh                                       100%   89     0.1KB/s   00:00    
# highlight-next-line
sftp> get wiki.sh ~/test/
Fetching /usr/home/axio/wiki.sh to ~/test/
open local "~/test/": Not a directory
```
:::

### 4.4 切换目录

- 切换远程目录：

```bash
# highlight-start
sftp> cd domains/
sftp> pwd
# highlight-end
Remote working directory: /usr/home/axio/domains
```

tab 补全也可以使用。

### 4.5 退出 SFTP 会话

退出 SFTP 会话，使用 `bye` 或者 `exit`命令：

```bash
sftp> exit
```

## 5. 总结 ✨

- `FTP` 是一个经典的文件传输协议，但它没有加密，传输过程中的数据容易被窃取。
- `SFTP` 是基于 `SSH` 的加密文件传输协议，安全性更高，适合需要传输敏感数据的场景。

无论你选择 `ftp` 还是 `sftp`，掌握这些常用命令都能帮助你更高效地进行文件传输工作！希望这篇教程对你有所帮助！😊

---

## 6. 番外篇

### 6.1 FTP/SFTP客户端

<details>
<summary>FTP/SFTP客户端</summary>

**开源/免费客户端**：

- **[FileZilla](https://filezilla-project.org/)** - 可能是最著名的开源FTP/SFTP客户端，支持Windows、Mac和Linux。功能全面，包括支持多种传输协议、站点管理、拖放文件传输等。

- **[WinSCP](https://winscp.net/eng/index.php)** - 专为Windows设计的免费SFTP和FTP客户端，提供图形用户界面和命令行接口，支持文件同步、脚本自动化等功能。

- **[Cyberduck](https://cyberduck.io/)** - 开源，支持Mac和Windows，提供FTP、SFTP、WebDAV、Amazon S3等多种协议支持。

- **[lftp](https://lftp.yar.ru/)** - 一个命令行FTP/SFTP客户端，适用于Unix/Linux系统，支持多种协议，非常适合脚本和自动化任务。

- **[FireFTP](https://addons.mozilla.org/en-US/firefox/addon/fireftp/)** - 一个Firefox的扩展插件，提供一个内置的FTP/SFTP客户端，但随着Firefox对扩展插件的政策变化，它的使用可能会受到限制。

**商业客户端**：

- **[Transmit](https://panic.com/transmit/)** - 专为Mac用户设计的FTP/SFTP客户端，提供简洁的界面和强大的功能，包括云存储集成。

- **[Core FTP](http://www.coreftp.com/)** - 一个功能丰富的Windows FTP/SFTP客户端，提供商业版和免费版。

- **[FlashFXP](https://www.flashfxp.com/)** - 一个Windows下的FTP/SFTP客户端，支持多种协议，适合专业用户。

- **[CuteFTP](https://www.globalscape.com/cuteftp)** - 提供专业级别的FTP/SFTP功能，适用于企业用户，支持Windows。

- **[SmartFTP](https://www.smartftp.com/)** - 一个功能强大的Windows FTP/SFTP客户端，支持多种协议和高级功能如FTP代理、加密传输等。

**支持FTP/SFTP的终端模拟器**：

- **[Termius](https://termius.com/)** - 一个跨平台的终端工具，界面美观，支持SSH、Telnet、SFTP等协议。

- **[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/)** - 一个免费且开源的SSH和Telnet客户端，适用于Windows。它支持SSH、Telnet、rlogin和原始TCP连接，并可以保存会话设置。

- **[iTerm2](https://iterm2.com/)** - 专为Mac设计的终端模拟器，提供比系统默认终端更丰富的功能，如分割窗口、搜索、自动补全、配色方案等，支持SFTP。

- **[Windows Terminal](https://github.com/microsoft/terminal)** - 由Microsoft开发的开源终端应用程序，适用于Windows 10和Windows 11，支持多标签、分割窗口、自定义配色等功能，并集成了PowerShell、Command Prompt、WSL等，支持SFTP。

- **[MobaXterm](https://mobaxterm.mobatek.net/)** - 一个强大的Windows终端模拟器，提供X11服务器、SSH、SFTP、远程桌面等多种功能，非常适合需要远程访问和管理的用户。

- **[GNOME Terminal](https://wiki.gnome.org/Apps/Terminal)** - Linux系统上广泛使用的终端模拟器，基于GNOME桌面环境，支持标签页、自定义配色、透明度等，支持SFTP。

只用过 WinSC P和 Termius 的 SFTP 。相信相比于命令行，大多数人还是更愿意使用图形化的 FTP/SFTP 客户端一些，你可以尝试从以上找出一款适合你的图形客户端。

</details>

### 6.2 lftp介绍


<details>
<summary>ltfp</summary>


| 特性                | **lftp**                                                                                                                                 | **sftp** (Linux默认)                                                                                                               |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **协议支持**        | FTP, SFTP, HTTP, HTTPS, FTPS, FISH等                                                                                                     | 仅SFTP                                                                                                                             |
| **功能集**          | - 多线程下载<br />- 断点续传<br />- 文件同步<br />- 队列管理<br />- 脚本支持<br />- 目录比较<br />- 自动登录<br />- 文件列表缓存<br />- 书签等            | - 基本文件操作（上传、下载、删除、重命名、权限管理等）<br />- 基本命令行操作                                                                 |
| **用户体验**        | - 更友好的用户界面<br />- 丰富的交互式命令<br />- 适合自动化脚本和批处理任务                                                                  | - 简洁的用户界面<br />- 依赖于基本的命令行操作                                                                                       |
| **兼容性**          | - 需要额外安装<br />- 支持多种操作系统                                                                                                      | - 作为OpenSSH的一部分，通常默认安装<br />- 仅支持Linux和类Unix系统                                                                   |
| **配置和扩展性**    | - 丰富的配置选项<br />- 支持通过配置文件和命令行参数高度定制化                                                                                | - 配置选项较少<br />- 主要通过`.ssh/config`文件进行配置                                                                              |
| **性能**            | - 支持多线程下载，提高传输速度<br />- 断点续传功能                                                                                          | - 单线程传输<br />- 速度可能不如`lftp`                                                                                              |
| **脚本和自动化**    | - 特别适合脚本和自动化任务<br />- 提供了丰富的命令和脚本功能                                                                                | - 可以用于脚本，但功能不如`lftp`丰富<br />- 适合基本的自动化任务                                                                      |
| **安装**            | - 可能需要额外安装<br />- 通常通过包管理器安装                                                                                              | - 默认安装在大多数Linux系统中                                                                                                     |
| **适合用户场景**    | - 需要高级文件操作和自动化的用户<br />- 多协议支持需求<br />- 大文件或批量文件传输任务<br />- 需要断点续传功能的用户                           | - 仅需基本SFTP功能的用户<br />- 简单文件传输任务<br />- 系统默认工具即可满足需求的用户<br />- 熟悉命令行操作的用户                         |
</details>