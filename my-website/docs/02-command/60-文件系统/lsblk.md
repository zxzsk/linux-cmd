⭐查看磁盘信息（分区、挂载点）

## 1. 简介  

`lsblk` 是一个 Linux 系统下用于显示存储设备信息的命令，常用于查看硬盘分区、挂载点以及相关属性。它通过读取 `/sys` 文件系统中的信息，提供了比传统 `fdisk` 或 `parted` 更直观的输出。  

**特点**：
- 快速、只读，不修改系统状态。
- 提供块设备的树状视图。
- 支持丰富的参数，显示详细设备信息。

## 2. 基本用法  

运行 `lsblk` 命令不带任何参数时，将以树状结构列出系统中的所有块设备。  

```bash
lsblk
```

示例输出：
```plaintext
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda      8:0    0   500G  0 disk 
├─sda1   8:1    0   300G  0 part /
└─sda2   8:2    0   200G  0 part /home
sdb      8:16   0    10G  0 disk 
└─sdb1   8:17   0    10G  0 part /data
```

**表格解读**：  
| 字段        | 含义                 |
|-------------|----------------------|
| NAME        | 设备名称             |
| MAJ:MIN     | 主从设备号           |
| RM          | 是否为可移动设备     |
| SIZE        | 设备大小             |
| RO          | 是否为只读设备       |
| TYPE        | 设备类型（disk、part 等） |
| MOUNTPOINT  | 挂载点               |

## 3. 常用选项  

### 3.1 显示所有设备  
默认情况下，`lsblk` 只显示块设备。加上 `-a` 参数后，会显示所有设备，包括空设备：  

```bash
lsblk -a
```

### 3.2 显示详细信息  
使用 `-f` 参数可以查看设备的文件系统类型、标签等信息：  

```bash
lsblk -f
```

示例输出（添加了中文注释）：  
```bash
NAME        FSTYPE FSVER LABEL UUID                                 FSAVAIL FSUSE% MOUNTPOINT
# 磁盘设备和分区信息

nvme0n1                                                                          
# NVMe驱动器0（可能是系统盘）
├─nvme0n1p1 vfat   FAT32       1271-89DF                               2.5G     1% /boot/efi
# EFI系统分区（ESP），用于启动引导程序，格式为FAT32，挂载到/boot/efi
├─nvme0n1p2 ext4   1.0         79290418-252d-4e4b-8513-c53975d6d641   32.7G    35% /
# 根分区，挂载到/，存储了系统文件
└─nvme0n1p3 ext4   1.0         d8757ba3-ee4f-4177-9de7-50c53ff8bf6f    8.4G    53% /home
# 用户的主目录分区，挂载到/home

# 省略了其他分区的显示    
```

**字段说明**：  
| 字段     | 含义                    |
|----------|-------------------------|
| FSTYPE   | 文件系统类型            |
| FSVER   | 文件系统版本            |
| LABEL    | 分区标签                |
| UUID     | 唯一标识符              |
| FSAVAIL     | 剩余空间              |
| FSUSE     | 已用空间%          |
| MOUNTPOINT | 挂载点                |

### 3.3 显示设备模型和厂商信息  
使用 `-p` 和 `-o` 参数可以组合显示更多设备信息，例如设备的物理路径、厂商等：  

```bash
lsblk -o NAME,MODEL,SERIAL
```

示例输出：  
```plaintext
NAME        MODEL                   SERIAL
sda         Samsung_SSD_860         S3Z7NB0M501234T
sdb         WD_Blue_1TB             WD-WX21D12F6789
nvme1n1     WDC WDS500G2B0C-00PXH0  21033S800497
```
:::note -o 支持查询的参数
参数太多记不住，Tab 补全来帮忙。
:::

### 3.4 隐藏特定类型设备  
使用 `-e` 参数可以隐藏指定的设备类型，例如隐藏 `loop` 设备：  

```bash
lsblk -e 7
```

其中，`7` 是 `loop` 设备的主设备号。

### 3.5 按树状或列表显示  
- 树状显示（默认）：  
  ```bash
  lsblk
  ```
- 列表显示：  
  ```bash
  lsblk -l
  ```

列表模式更适合处理脚本输出。  

## 4. 高级使用  

### 4.1 查看挂载点占用情况  
结合 `df` 命令，可以检查挂载点的磁盘使用情况：  

```bash
lsblk -o NAME,FSTYPE,MOUNTPOINT,SIZE | grep '/'
```

### 4.2 检查设备挂载状态  
使用 `-n` 参数可以隐藏标题行，仅显示设备信息：  

```bash
lsblk -n
```

## 5. 小技巧  

- **快速定位设备**：通过 `grep` 过滤设备名称：
  ```bash
  lsblk | grep sda
  ```
- **排查挂载问题**：使用 `-f` 查看设备是否正确挂载。

## 6. 总结  

`lsblk` 是一个功能强大的命令，用于快速了解磁盘和分区信息。通过学习和实践，你可以更高效地管理 Linux 系统中的存储设备！希望这篇教程帮助你掌握 `lsblk` 的使用技巧！别忘了收藏**在线知识库**（ [www.zxzsk.com](https://www.zxzsk.com) ）哦！😊
