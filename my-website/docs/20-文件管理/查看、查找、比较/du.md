---
slug: /a94600cb
---
⭐⭐查看磁盘使用情况

## 1. 简介

`du`（Disk Usage）命令用于查看文件和目录的磁盘使用情况。它能够显示某个目录或文件所占用的磁盘空间大小，帮助用户管理和监控磁盘使用，尤其是在磁盘空间有限的环境中非常有用。🛠️

## 2. 常见操作概览 📋

| 操作                  | 命令格式                         | 说明                               |
|-----------------------|--------------------------------|------------------------------------|
| 查看当前目录磁盘使用情况 | `du`                           | 显示当前目录及子目录的磁盘使用情况。 |
| 查看指定目录磁盘使用情况 | `du <目录路径>`                | 查看指定目录及其子目录的磁盘使用情况。 |
| 以可读格式显示磁盘使用情况 | `du -h`                        | 以人类可读格式（KB, MB, GB）显示使用情况。 |
| 查看目录总磁盘使用量     | `du -s`                        | 1.只列出 **指定目录**。2.统计指定目录下所有 **文件 + 文件夹** 占用的容量  |
| 查看目录总磁盘使用量     | `du -S`                        | 1.列出 **指定目录 + 所有子目录** 2.统计每个目录中 **文件（不含文件夹）** 占用的容量。   |
| 查看目录详细磁盘使用情况 | `du -ah`                       | 显示目录及其中每个文件的磁盘使用情况。 |

## 3. 命令示例 ⚡

### 3.1 查看当前目录磁盘使用情况

在当前目录中运行 `du`，它会递归地列出该目录及其子目录的磁盘使用情况：

```bash
$ du
8       ./dir1
4       ./dir2
12      .
```

### 3.2 查看指定目录磁盘使用情况

通过指定目录路径，查看该目录及其子目录的磁盘使用情况：

```bash
$ du /path/to/directory
8       /path/to/directory/dir1
4       /path/to/directory/dir2
12      /path/to/directory
```

输出排序:
```bash
du -sh /* | sort -rh
```

### 3.3 以人类可读格式显示磁盘使用情况

使用 `-h` 选项可以以人类可读的格式（如 KB、MB、GB）显示磁盘使用情况：

```bash
$ du -h
8.0K    ./dir1
4.0K    ./dir2
12K     .
```

### 3.4 查看目录总磁盘使用量

使用 `-s` 选项只显示指定目录的总磁盘使用量，不显示每个子目录的使用情况：

```bash
$ du -s /path/to/directory
12      /path/to/directory
```

### 3.5 查看详细的磁盘使用情况

使用 `-ah` 选项可以显示目录中每个文件及其子目录的磁盘使用情况：

```bash
$ du -ah /path/to/directory
4.0K    /path/to/directory/file1.txt
8.0K    /path/to/directory/dir1
12K     /path/to/directory
```

### 3.6 排除文件目录
如果你想排除某些文件目录可以使用--exclude选项：
```bash
du -sh --exclude=/proc --exclude=/sys --exclude=/dev /*
```

## 4. 常用选项 📝

- `-h`：以人类可读的格式显示磁盘使用情况（自动选择合适的单位，如 KB、MB、GB）。
- `-s`：仅显示目录的总磁盘使用量，而不显示每个子目录的使用情况。
- `-a`：显示目录和文件的磁盘使用情况，而不仅仅是目录。
- `-c`：在输出的最后显示所有结果的总和。
- `-d <层级>`：显示指定层级的子目录使用情况。`<层级>` 是一个数字，表示递归的深度。

## 5. 小贴士 💡

- **清理磁盘**：你可以使用 `du -sh *` 命令查看当前目录下每个文件和子目录的磁盘使用情况，快速找出占用大量空间的文件，帮助清理不必要的文件。
- **指定层级查看**：使用 `du -d 1` 限制递归深度，只查看当前目录及其一层子目录的磁盘使用情况。
- **查看磁盘总使用量**：使用 `du -sh` 仅查看当前目录的总磁盘使用量。

## 6. 总结 🎯

`du` 命令是 Linux 中非常有用的工具，可以帮助用户查看磁盘使用情况，优化系统存储。通过它，你可以清楚地了解文件和目录的磁盘占用情况，避免磁盘空间的浪费。💡

希望这篇教程帮助你了解如何使用 `du` 命令查看磁盘使用情况！别忘了收藏**在线知识库**（ [www.zxzsk.com](http://www.zxzsk.com) ）哦！😊
