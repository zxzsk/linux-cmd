---
description: 高级分区管理
---

# Linux parted 命令：高级分区管理

## 1. 简介

`parted` 是一个高级的 Linux 磁盘分区工具，提供了比 `fdisk` 更强大的分区管理功能。🔧 它支持更多的分区表类型，如 GPT（GUID Partition Table），并且可以创建、调整、删除分区以及调整文件系统大小。

## 2. 常见操作概览

| 操作                       | 命令格式                                  | 说明                               |
|----------------------------|-----------------------------------------|------------------------------------|
| 列出所有磁盘设备             | `sudo parted -l`                        | 显示所有磁盘设备及其分区信息。       |
| 启动分区工具                | `sudo parted <设备名>`                  | 进入交互式分区管理界面。            |
| 打印分区表                  | `print`                                 | 在交互式界面中打印分区表。          |
| 新建分区                    | `mkpart`                                | 在交互式界面中创建新的分区。        |
| 删除分区                    | `rm`                                    | 在交互式界面中删除分区。            |
| 调整分区大小                | `resizepart`                            | 调整分区大小。                      |
| 调整文件系统大小            | `resize`                                | 调整文件系统大小。                  |
| 保存更改并退出              | `quit`                                  | 退出 `parted`。                     |

## 3. 命令示例

### 3.1 列出所有磁盘设备

要列出所有磁盘设备及其分区信息：

```bash
$ sudo parted -l
```

终端输出：

```
Model: ATA WDC WD10EZEX-00B (scsi)
Disk /dev/sda: 1000GB
Sector size (logical/physical): 512B/4096B
Partition Table: gpt
Disk Flags: 

Number  Start   End     Size    File system  Name  Flags
 1      1049kB  106MB   105MB   fat32              boot, esp
 2      106MB   1000GB  999GB   ext4
```

这会列出所有连接的磁盘设备及其分区信息。🔍

### 3.2 启动分区工具

要进入交互式分区管理界面：

```bash
$ sudo parted /dev/sda
```

这会启动 `parted` 并进入交互式界面。🎮

### 3.3 在交互式界面中操作

在交互式界面中，你可以输入以下命令来操作：

- **打印分区表**：

```bash
(parted) print
```

这会显示当前磁盘的分区表。

- **新建分区**：

```bash
(parted) mkpart primary ext4 1000GB 1000GB
```

这里创建一个新的1GB的 ext4 主分区。📈

- **删除分区**：

```bash
(parted) rm 2
```

这会删除编号为2的分区。

- **调整分区大小**：

```bash
(parted) resizepart 2 900GB
```

这会将编号为2的分区调整到900GB大小。

- **调整文件系统大小**：

```bash
(parted) resize 2 100GB 900GB
```

这会将编号为2的分区上的文件系统调整到100GB到900GB之间。

- **保存更改并退出**：

```bash
(parted) quit
```

这会退出 `parted`。

## 4. 常见选项说明

- **`-l` 或 `--list`**：列出所有磁盘设备及其分区信息。
- **`-a` 或 `--align`**：指定分区对齐方式。
- **`-s` 或 `--script`**：以脚本模式运行 `parted`。
- **`-h` 或 `--help`**：显示帮助信息，帮助你了解 `parted` 命令的用法。

### 示例：在交互式界面中创建新分区

```bash
$ sudo parted /dev/sda
(parted) mkpart primary ext4 1000GB 1000GB
```

这会创建一个新的1GB的 ext4 主分区。📈

## 5. 使用 parted 时的注意事项

- **备份数据**：在进行分区操作之前，务必备份重要数据，以防分区操作导致数据丢失。💾
- **分区表类型**：`parted` 支持多种分区表类型，确保选择适合你的需求。
- **分区大小**：注意分区大小，确保新建分区的大小符合你的需求。
- **文件系统**：创建分区后，需要使用 `mkfs` 命令创建文件系统才能使用。
- **分区对齐**：分区对齐可以提高磁盘性能，通常建议使用 `-a` 选项指定对齐方式。

## 6. 小贴士

- **使用 `parted -l` 查看分区信息**：这是快速了解系统磁盘和分区情况的好方法。🔍
- **交互式界面中的帮助**：在 `parted` 交互式界面中，输入 `help` 可以查看帮助信息。📖

## 7. 搭配使用 parted 的常用命令

`parted` 命令通常与其他命令搭配使用，以实现更复杂的磁盘管理任务。以下是一些常见的搭配使用命令：

- **mkfs**：用于在新创建的分区上创建文件系统：

```bash
$ sudo mkfs -t ext4 /dev/sda2
```

- **mount**：用于挂载分区到文件系统：

```bash
$ sudo mount /dev/sda2 /mnt
```

- **umount**：用于卸载分区：

```bash
$ sudo umount /mnt
```

- **fdisk**：用于管理传统的 MBR 分区表：

```bash
$ sudo fdisk /dev/sda
```

- **lsblk**：列出块设备及其分区信息：

```bash
$ lsblk
```

- **blkid**：显示块设备的 UUID 和标签信息：

```bash
$ sudo blkid
```

- **e2label**：设置或更改分区的标签：

```bash
$ sudo e2label /dev/sda2 new_label
```

- **resize2fs**：调整 ext2、ext3 或 ext4 文件系统的大小：

```bash
$ sudo resize2fs /dev/sda2 [大小]
```

- **dd**：用于创建分区的备份或克隆：

```bash
$ sudo dd if=/dev/sda of=/path/to/backup.img
```

- **df**：显示文件系统的磁盘空间使用情况：

```bash
$ df -h
```

## 8. 总结

`parted` 命令是 Linux 系统中用于管理磁盘分区的高级工具。它提供了比 `fdisk` 更强大的分区管理功能，支持更多的分区表类型，并可以进行分区和文件系统的调整。通过与其他命令搭配使用，你可以更灵活地管理磁盘分区，确保系统的存储资源合理分配和使用。🎯

掌握了 `parted` 和相关命令，你就可以更有效地管理系统磁盘，确保存储资源的合理分配和使用。🔒

---

加油，继续在命令行中探索新技能！💪🏻 别忘了收藏在线知识库（[www.zxzsk.com](http://www.zxzsk.com)），让更多有用的知识为你提供帮助！😊

继续探索，你已经很棒啦！🌟