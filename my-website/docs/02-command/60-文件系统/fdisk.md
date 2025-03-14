⭐磁盘分区（老工具）

## 1. 简介

`fdisk` 是 Linux 系统中用于管理磁盘分区的工具。它允许你创建、删除、修改和显示磁盘分区表。

## 2. 常见操作概览

| 操作                       | 命令格式                                  | 说明                               |
|----------------------------|-----------------------------------------|------------------------------------|
| 列出所有磁盘设备             | `sudo fdisk -l`                         | 显示所有磁盘设备及其分区信息。       |
| 启动分区工具                | `sudo fdisk <设备名>`                   | 进入交互式分区管理界面。            |
| 打印分区表                  | `p`                                     | 在交互式界面中打印分区表。          |
| 新建分区                    | `n`                                     | 在交互式界面中创建新的分区。        |
| 删除分区                    | `d`                                     | 在交互式界面中删除分区。            |
| 保存更改并退出              | `w`                                     | 保存分区表更改并退出。              |
| 退出而不保存                | `q`                                     | 退出而不保存更改。                  |

## 3. 命令示例

### 3.1 列出所有磁盘设备

要列出所有磁盘设备及其分区信息：

```bash
$ sudo fdisk -l
```

终端输出：

```
Disk /dev/sda: 21.5 GB, 21474836480 bytes, 41943040 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk label type: dos
Disk identifier: 0x0006888d

   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *        2048    41943039    20970496   83  Linux
```

这会列出所有连接的磁盘设备及其分区信息。🔍

### 3.2 启动分区工具

要进入交互式分区管理界面：

```bash
$ sudo fdisk /dev/sda
```

这会启动 `fdisk` 并进入交互式界面。🎮

### 3.3 在交互式界面中操作

在交互式界面中，你可以输入以下命令来操作：

- **打印分区表**：

```bash
Command (m for help): p
```

这会显示当前磁盘的分区表。

- **新建分区**：

```bash
Command (m for help): n
```

然后按照提示创建新的分区。

- **删除分区**：

```bash
Command (m for help): d
```

然后选择你要删除的分区号。

- **保存更改并退出**：

```bash
Command (m for help): w
```

这会保存更改并退出 `fdisk`。

- **退出而不保存**：

```bash
Command (m for help): q
```

这会退出 `fdisk` 而不保存任何更改。

## 4. 常见选项说明

- **`-l` 或 `--list`**：列出所有磁盘设备及其分区信息。
- **`-u` 或 `--units`**：指定显示的单位（如 `sectors` 或 `cylinders`）。
- **`-h` 或 `--help`**：显示帮助信息，帮助你了解 `fdisk` 命令的用法。

### 示例：在交互式界面中创建新分区

```bash
$ sudo fdisk /dev/sda
Command (m for help): n
Partition type:
   p   primary (1 primary, 0 extended, 3 free)
   e   extended
Select (default p): p
Partition number (2-4, default 2): 
First sector (41943040-41943039, default 41943040): 
Last sector, +sectors or +size{K,M,G,T,P} (41943040-41943039, default 41943039): +1G
```

这会创建一个新的1GB主分区。📈

## 5. 使用 fdisk 时的注意事项

- **备份数据**：在进行分区操作之前，务必备份重要数据，以防分区操作导致数据丢失。💾
- **分区大小**：注意分区大小，确保新建分区的大小符合你的需求。
- **分区类型**：选择合适的分区类型，如主分区、扩展分区等。
- **磁盘标识符**：`fdisk` 会生成一个唯一的磁盘标识符（Disk identifier），在分区操作后可能会改变。
- **文件系统**：创建分区后，需要使用 `mkfs` 命令创建文件系统才能使用。

## 6. 小贴士

- **使用 `fdisk -l` 查看分区信息**：这是快速了解系统磁盘和分区情况的好方法。🔍
- **交互式界面中的帮助**：在 `fdisk` 交互式界面中，输入 `m` 可以查看帮助信息。📖

## 7. 搭配使用 fdisk 的常用命令

`fdisk` 命令通常与其他命令搭配使用，以实现更复杂的磁盘管理任务。以下是一些常见的搭配使用命令：

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

- **parted**：更高级的分区工具，可以创建、调整和删除分区：

```bash
$ sudo parted /dev/sda
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

`fdisk` 命令是 Linux 系统中用于管理磁盘分区的强大工具。它允许你创建、删除、修改和显示磁盘分区表，帮助你更好地管理系统的存储资源。通过与其他命令搭配使用，你可以更灵活地管理磁盘分区，确保系统的存储资源合理分配和使用。🎯

掌握了 `fdisk` 和相关命令，你就可以更有效地管理系统磁盘，确保存储资源的合理分配和使用。🔒

---

加油，继续在命令行中探索新技能！💪🏻 别忘了收藏在线知识库（[www.zxzsk.com](http://www.zxzsk.com)），让更多有用的知识为你提供帮助！😊

继续探索，你已经很棒啦！🌟