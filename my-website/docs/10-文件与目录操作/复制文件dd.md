---
description: 强大的文件复制与转换工具  
keywords:
  - Linux命令行
  - 教程
  - 复制
  - 文件
---

## 1. dd 命令简介

`dd` 命令是 Unix 和类 Unix 系统中的一款强大工具，广泛用于复制文件和转换文件。它的应用场景非常广泛，包括创建镜像文件、备份和恢复数据、以及复制数据等。💾

`dd` 通常用于低级别的操作，比如复制整个磁盘或分区，它不关心文件系统结构，因此无法用于复制目录或文件夹。这个命令适合处理块级数据，比如复制硬盘、分区或处理单个文件。🚀

## 2. dd 命令参数

```bash
dd if=<输入文件> of=<输出文件> [bs=<块大小>] [count=<块数量>] [conv=<转换选项>] [status=<进度显示>]
```

常用选项：

* `if=input_file`：指定输入文件。📂
* `of=output_file`：指定输出文件。📁
* `bs=block_size`：指定块大小，默认值为 512 字节。⚙️
* `count=blocks`：指定要复制的块数（每块大小由 `bs` 决定）。🔢
* `status=progress`：显示复制进度。⏳
* `seek=blocks`：在输出文件中跳过指定块数。⏭️
* `skip=blocks`：在输入文件中跳过指定块数。⏮️

## 3. dd 命令示例

### 3.1 示例 1：dd 命令复制文件

使用 `dd` 命令复制文件，只需指定输入和输出文件：

```bash
dd if=输入文件 of=输出文件
```

示例输出：

```bash
$ dd if=test_file of=new_file
819200+0 records in
819200+0 records out
419430400 bytes (419 MB, 400 MiB) copied, 2.55206 s, 164 MB/s
```

### 3.2 示例 2：dd 命令测试硬盘读写速度

使用 `dd` 命令测试硬盘读写速度十分简单，只需指定输入、输出文件和相关参数：

```bash
dd if=输入文件 of=输出文件 [块大小] [块数量]
```

测试硬盘写入速度：⚡

```bash
$ dd if=/dev/zero of=test_file bs=4M count=1000
1000+0 records in
1000+0 records out
4194304000 bytes (4.2 GB, 3.9 GiB) copied, 5.23438 s, 801 MB/s
```

:::tip 零设备
`/dev/zero` 是 Linux 和类 Unix 系统中的一个特殊文件，通常被称为“零设备”。它是一个伪设备，提供无限的零字节（0），用于数据流的输入或输出。
:::

测试硬盘读取速度：⚡

```bash
$ dd if=test_file of=/dev/null
8192000+0 records in
8192000+0 records out
4194304000 bytes (4.2 GB, 3.9 GiB) copied, 8.98496 s, 467 MB/s
```

:::tip 空设备
`/dev/null` 是 Linux 和类 Unix 系统中的另一个特殊设备，通常被称为“空设备”或“黑洞”。它用于丢弃不需要的输出或输入数据，任何写入到 `/dev/null` 的数据都会被丢弃，且不会返回任何错误。
:::

### 3.3 示例 3：dd 命令显示进度

使用 `status=progress` 参数显示进度：

```bash
$ dd if=/dev/zero of=大测试文件 bs=4M count=1000 status=progress
```

示例输出：

![图片示例：dd命令显示进度](https://img.zxzsk.com/1/recording-20240914170418-zylcjf7.webp)

### 3.4 示例 4：dd 命令写入系统镜像

将系统镜像写入 U 盘（或移动硬盘）：

```bash
sudo dd if=镜像目录 of=U盘目录
```

例如，将 Ubuntu 22.04 镜像写入 U 盘（或移动硬盘）：

```bash
$ dd if=debian-12.6.0-amd64-netinst.iso of=/dev/sdc status=progress
659137024 bytes (659 MB, 629 MiB) copied, 292 s, 2.3 MB/s
1292288+0 records in
1292288+0 records out
661651456 bytes (662 MB, 631 MiB) copied, 303.586 s, 2.2 MB/s
```

完成后，可以用这个 U 盘安装系统。🔧

### 3.5 示例 5：dd 命令其他用法

* **备份磁盘或分区**：
  ```bash
  dd if=/dev/sda1 of=/path/to/backup.img bs=4M
  ```

  这会备份 `/dev/sda1` 分区到 `/path/to/backup.img` 文件，使用 4MB 的块大小。🛡️

* **格式化 USB 驱动器**：
  ```bash
  dd if=/dev/zero of=/dev/sdb bs=512 count=1
  ```

  **注意**：这会擦除 USB 驱动器上的所有数据，请谨慎操作。⚠️

* **从备份文件恢复磁盘或分区**：
  ```bash
  dd if=/path/to/backup.img of=/dev/sda1 bs=4M
  ```

  将备份映像恢复到 `/dev/sda1` 分区。🔄

* **复制光盘到 ISO 文件**：
  ```bash
  dd if=/dev/cdrom of=/path/to/cdrom.iso bs=4M
  ```

## 4. 注意事项

* 使用 `dd` 命令时要格外小心。它的功能非常强大，但也容易导致数据丢失或文件覆盖。⚠️
* 确保在执行命令之前仔细检查命令参数，避免意外的数据损坏。🧐
* `dd` 默认不会显示进度，若需要监控进度，请使用 `status=progress` 选项。📊

希望你通过这篇教程了解了 date 命令的常用技巧！别忘了收藏在线知识库（ www.zxzsk.com ）哦！⭐