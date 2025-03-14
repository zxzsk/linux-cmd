⭐查看磁盘使用情况

`df` 命令是 Linux 系统中用来查看文件系统磁盘空间使用情况的工具。它可以显示磁盘的总容量、已用容量、剩余容量以及挂载点等信息。🖥️

掌握 `df` 命令，能帮助你实时监控磁盘空间使用情况，避免磁盘满溢导致系统崩溃。📉

## 1. 基本用法

```bash
df
```

执行后，会输出当前系统所有挂载的文件系统的磁盘使用情况。示例如下：

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="中文" label="中文" >
```bash
文件系统    1K的块      已用        可用           已用%        挂载点
/dev/sda1   1024000     500000      524000      50%         /
tmpfs       1024000     200         1023800     1%          /dev/shm
/dev/sdb1   2048000     1024000     1024000     50%         /mnt/data
```
</TabItem>
<TabItem value="英文" label="English" default>
```
Filesystem     1K-blocks    Used Available Use% Mounted on
/dev/sda1        1024000   500000   524000  50% /
tmpfs            1024000      200   1023800   1% /dev/shm
/dev/sdb1        2048000  1024000   1024000  50% /mnt/data
```
</TabItem>
</Tabs>

- **Filesystem**：文件系统名称
- **1K-blocks**：总容量（以 1KB 为单位）
- **Used**：已用空间
- **Available**：可用空间
- **Use%**：已用空间百分比
- **Mounted on**：挂载点

## 2. 查看指定文件系统的磁盘使用情况

如果你只想查看某个特定文件系统的使用情况，可以指定路径。例如：

```bash
df /mnt/data
```

输出示例：

```
Filesystem     1K-blocks    Used Available Use% Mounted on
/dev/sdb1        2048000  1024000   1024000  50% /mnt/data
```

## 3. 以人类可读的格式显示

为了让输出更易读，使用 `-h` 选项。这样，`df` 会以适合人类阅读的单位（如 KB、MB、GB）显示磁盘空间：

```bash
df -h
```

输出示例：

```
Filesystem      Size  Used Avail Use% Mounted on
/dev/sda1        1000M 500M  500M  50% /
tmpfs            1000M  200K 1000M   1% /dev/shm
/dev/sdb1        2000M 1000M 1000M  50% /mnt/data
```

## 4. 显示所有文件系统（包括虚拟文件系统）

使用 `-a` 选项可以查看所有的文件系统，包括虚拟文件系统（如 `tmpfs`）：

```bash
df -a
```

## 5. 显示文件系统的类型

查看本机所有文件系统的类型：
```bash
$ df -T
文件系统                       类型       1K的块     已用     可用 已用% 挂载点udev                           devtmpfs 16349320        0 16349320    0% /dev
tmpfs                          tmpfs     3277072     1772  3275300    1% /run
/dev/nvme0n1p7                 ext4     57094708 19906024 34242616   37% /
/dev/nvme0n1p1                 vfat      2615308    27376  2587932    2% /boot/efi
192.168.10.61:/mnt/shared_data nfs4     39987712  7999744 29924352   22% /mnt/nfs_client
...
```

## 6. 显示特定文件系统类型

如果你只想查看特定类型的文件系统（比如 ext4 或 tmpfs），可以使用 `-t` 选项。例如，查看所有 `ext4` 类型的文件系统：

```bash
df -t ext4
```

## 7. 显示 inode 使用情况

`df` 默认显示的是磁盘空间使用情况。如果你需要查看 inode 使用情况（特别是在文件系统中有大量小文件时），可以使用 `-i` 选项：

```bash
df -i
```

输出示例：

```
Filesystem      Inodes   IUsed   IFree IUse% Mounted on
/dev/sda1       655360  102400  552960    16% /
tmpfs            655360      200  655160     1% /dev/shm
/dev/sdb1       131072  51200   79872    39% /mnt/data
```

- **Inodes**：文件系统支持的 inode 数量
- **IUsed**：已使用的 inode 数量
- **IFree**：剩余的 inode 数量
- **IUse%**：已用 inode 百分比

## 7. 总结 🌟

`df` 命令是一个简单但强大的工具，帮助你监控和管理 Linux 系统的磁盘空间。通过熟练掌握不同的选项，你可以更高效地管理系统磁盘资源，确保系统稳定运行。🔧

希望这篇教程帮助你快速了解 `df` 命令的使用方法！别忘了收藏**在线知识库**（ [www.zxzsk.com](http://www.zxzsk.com) ）哦！😊