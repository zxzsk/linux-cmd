---
description: 学习如何使用 mdadm 工具创建、管理和监控 Linux 系统中的 RAID 阵列  
keywords:  
  - mdadm  
  - RAID  
  - Linux  
  - 数据冗余  
  - RAID 配置  
---

# Linux mdadm 使用：轻松管理 RAID 阵列 

## 1. mdadm 简介

**`mdadm`** 是一个 Linux 系统中的软件 RAID（冗余磁盘阵列）管理工具。它可以帮助创建、管理和监控 RAID 设备，以提升磁盘性能或实现数据冗余。

### 1.1 基础命令格式

`mdadm` 命令的通用格式如下：
```bash
mdadm [操作] <阵列>
```

- 模式：创建、组装、管理等。

---

### 1.2 常用模式与参数对照表

| 模式/参数           | 功能描述                                       | 示例命令                                     |
|----------------------|-----------------------------------------------|---------------------------------------------|
| **`--create`**      | 创建新的 RAID 阵列                             | `mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sd[b-c]1` |
| **`--assemble`**    | 组装现有 RAID 阵列并激活                       | `mdadm --assemble /dev/md0 /dev/sd[b-c]1`   |
| **`--add`**         | 添加新设备到现有阵列                           | `mdadm --add /dev/md0 /dev/sdd1`            |
| **`--re-add`**         | 掉线设备重新添加到现有阵列                           | `mdadm --re-add /dev/md0 /dev/sdd1`            |
| **`--remove`**      | 从 RAID 阵列中移除设备                         | `mdadm --remove /dev/md0 /dev/sdc1`         |
| **`--fail`**        | 标记 RAID 中某设备为故障状态                   | `mdadm --fail /dev/md0 /dev/sdc1`           |
| **`--detail`**      | 显示 RAID 阵列的详细状态信息                   | `mdadm --detail /dev/md0`                   |
| **`--scan`**        | 扫描系统中的 RAID 阵列                         | `mdadm --detail --scan`                     |
| **`--stop`**        | 停止运行中的 RAID 阵列                         | `mdadm --stop /dev/md0`                     |
                   |

<details>
<summary>--help</summary>
```bash
$ mdadm --help

# mdadm工具描述
# mdadm用于构建、管理和监控Linux的md设备（即RAID阵列）

# 使用概述
使用方法：
    # 创建新的RAID阵列
    mdadm --create device options...
            从未使用的设备创建新阵列。
    
    # 组装现有的RAID阵列
    mdadm --assemble device options...
            组装之前创建的阵列。
    
    # 在没有标准元数据的情况下构建或组装阵列
    mdadm --build device options...
            在没有元数据的情况下创建或组装阵列。
    
    # 管理现有的RAID阵列
    mdadm --manage device options...
            对现有阵列进行更改。
    
    # 处理md设备的杂项操作
    mdadm --misc options... devices
            报告或修改与md相关的各种设备。
    
    # 调整或重塑活动的RAID阵列
    mdadm --grow options device
            调整/重塑活动阵列
    
    # 增量添加或移除设备
    mdadm --incremental device
            根据需要添加或移除设备到阵列中
    
    # 监控RAID阵列的变化
    mdadm --monitor options...
            监控一个或多个阵列的显著变化。
    
    # 管理阵列的简写
    mdadm device options...
            简写为 --manage。

# 设备名称处理的解释
# 任何不以'-'开头的参数都被视为设备名，
# 或者对于--examine-bitmap来说，是文件名。
# 第一个这样的名称通常是md设备的名称。随后的名称通常是组件设备的名称。

# 获得更详细帮助的说明
# 对于上述主要模式的详细帮助，请在模式后使用 --help
# 例如：
#         mdadm --assemble --help
# 对于选项的通用帮助，请使用
#         mdadm --help-options
```
</details>

<details>
<summary> --add 区别 --re-add </summary>
<p>
在 `mdadm` 命令中，`--add` 和 `--re-add` 选项用于向 RAID 阵列添加或重新添加设备，但它们有不同的使用场景：

1. **--add**：
   - **用途**：用于将一个新的或未使用的设备添加到现有的 RAID 阵列中。
   - **场景**：当你想扩展阵列的容量或者替换一个损坏的设备时使用。添加的设备必须是新的或未使用过的，不包含任何 RAID 元数据。
   - **例子**：
     ```bash
     sudo mdadm --manage /dev/md0 --add /dev/sdb1
     ```
   - **注意**：如果设备已经包含了与阵列不匹配的元数据，`--add` 可能会失败。

2. **--re-add**：
   - **用途**：用于将一个之前属于 RAID 阵列但由于某种原因被移除或失败的设备重新添加到阵列中。
   - **场景**：当你修复或更换了阵列中的一个设备，并希望它重新加入到阵列中时使用。设备必须包含与阵列匹配的 RAID 元数据。
   - **例子**：
     ```bash
     sudo mdadm --manage /dev/md0 --re-add /dev/sdb1
     ```
   - **注意**：如果设备不包含正确的元数据或已经被其他阵列使用，`--re-add` 操作将不会成功。

**区别总结**：

- **--add** 用于添加新的设备，适合扩展阵列或替换损坏设备。
- **--re-add** 用于重新添加之前属于阵列的设备，通常在设备修复或更换后使用。

在使用这两个选项时，确保你清楚设备的状态以及阵列的当前配置。错误地使用这些选项可能会导致数据丢失或阵列配置问题。使用 `mdadm --detail /dev/md0` 查看阵列的详细信息来确保你添加的设备与阵列的配置匹配。
</p>
</details>


## 2. 安装 mdadm

### 2.1 确认是否已安装
在大多数 Linux 发行版中，`mdadm` 并不默认安装。可以通过以下命令检查是否已安装：

```bash
mdadm --version
```

### 2.2 安装 mdadm
根据系统的包管理工具，运行以下命令：

- **Debian/Ubuntu:**
  ```bash
  sudo apt update && sudo apt install mdadm -y
  ```

- **CentOS/RHEL:**
  ```bash
  sudo yum install mdadm -y
  ```

- **Arch Linux:**
  ```bash
  sudo pacman -S mdadm
  ```

## 3. 创建 RAID 阵列

以下以 RAID 0（条带化）和 RAID 1（镜像）为例说明操作步骤。

### 3.1 确认可用磁盘
列出系统中的所有磁盘：

```bash
lsblk
```

选择未分区的磁盘（例如 `/dev/sdb` 和 `/dev/sdc`）。

### 3.2 创建 RAID
**RAID 0 示例：**

```bash
sudo mdadm --create /dev/md0 --level=0 --raid-devices=2 /dev/sdb /dev/sdc
```

**RAID 1 示例：**

```bash
sudo mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sdb /dev/sdc
```

### 参数说明：
- `/dev/md0`：创建的 RAID 设备。*设备名：前缀`md` + 数字`0～127`。*
- `--level`：指定 RAID 级别。*1就是RAID1，0就是RAID0...*
- `--raid-devices`：磁盘数量。
- `/dev/sdb /dev/sdc`：参与 RAID 的磁盘。

## 4. 配置 RAID 文件系统

### 4.1 创建文件系统
例如创建 ext4 文件系统：

```bash
sudo mkfs.ext4 /dev/md0
```

### 4.2 挂载 RAID 设备
创建挂载点并挂载：

```bash
sudo mkdir /mnt/raid
sudo mount /dev/md0 /mnt/raid
```

验证挂载：

```bash
df -h | grep /mnt/raid
```

### 4.3 配置开机自动挂载
编辑 `/etc/fstab` 文件，添加以下内容：

```bash
/dev/md0   /mnt/raid   ext4   defaults   0   0
```

## 5. 查看和监控 RAID 阵列

### 5.1 查看 RAID 信息
```bash
cat /proc/mdstat
```
<details>
以下是`/proc/mdstat`文件内容的中文翻译：

```bash
$ cat /proc/mdstat
Personality : [raid1] [raid0] [raid6] [raid5] [raid4] [raid10] 
md127 : 活动的 raid1 sdf1[0] sdg1[1]
      1953381440 个块，超级块版本 1.2 [2/2] [UU]
      位图: 0/15 页 [0KB]，65536KB 块大小

md1 : 活动的 raid1 sdc1[1] sdb1[0]
      838728704 个块，超级块版本 1.2 [2/2] [UU]
      位图: 3/7 页 [12KB]，65536KB 块大小

未使用的设备: <none>
```

### 解释：

- **Personality**：这里列出了系统支持的RAID类型（或称为RAID级别）。
  
- **md127** 和 **md1**：
  - **活动的 raid1**：表示这是一个活跃的RAID 1阵列（镜像）。
  - **sdf1[0] sdg1[1]** 和 **sdc1[1] sdb1[0]**：列出了阵列中的磁盘和它们的顺序。
  - **块数**：显示了阵列的总块数，块是存储的最小单位。
  - **超级块版本**：指的是RAID阵列的超级块版本，这里是1.2。
  - **[2/2] [UU]**：表示阵列有2个成员，并且它们都处于活动状态（U表示Up，活动状态）。
  - **位图**：表示阵列中用于跟踪同步状态的位图大小和使用情况。
  - **块大小**：表示阵列中使用的块大小。

- **未使用的设备**：这里显示没有未使用的设备。

这个文件提供了系统中所有RAID阵列的当前状态信息，包括阵列的类型、成员、状态和大小等。
</details>

### 5.2 查看详细信息
```bash
sudo mdadm --detail /dev/md0
```

<details>
以下是`sudo mdadm --detail /dev/md1`命令输出内容的中文翻译：

```bash
$ sudo mdadm --detail /dev/md1
/dev/md1:
           版本 : 1.2
     创建时间 : 2023年12月30日 星期六 00:24:11
        RAID级别 : raid1
        阵列大小 : 838728704 (799.87 GiB 858.86 GB)
     使用设备大小 : 838728704 (799.87 GiB 858.86 GB)
      RAID设备数 : 2
     总设备数 : 2
       持久性 : 超级块是持久的

     意图位图 : 内部

       更新时间 : 2024年11月28日 星期四 23:26:41
             状态 : 清洁 
    活动设备 : 2
   工作设备 : 2
    故障设备 : 0
     备用设备 : 0

一致性策略 : 位图

              名称 : k455l:1  (本地主机k455l)
              UUID : 7629c5bd:aa805db6:7f1a7d44:6f16df3d
            事件 : 3359356

    编号   主设备号   次设备号   RAID设备 状态
       0       8       17        0      活动同步   /dev/sdb1
       1       8       33        1      活动同步   /dev/sdc1
```

**解释：**

- **版本**：RAID阵列的超级块版本，这里是1.2。
- **创建时间**：阵列的创建时间。
- **RAID级别**：这里是RAID 1（镜像）。
- **阵列大小**：阵列的总大小，显示为字节、GiB和GB。
- **使用设备大小**：每个设备在阵列中的使用大小。
- **RAID设备数**和**总设备数**：表示阵列中使用的设备数量和总设备数量。
- **持久性**：表示超级块是否持久存储。
- **意图位图**：用于跟踪同步状态的位图类型。
- **更新时间**：阵列最后一次更新的时间。
- **状态**：当前阵列的状态，这里是“清洁”，表示没有未同步的数据。
- **活动设备**、**工作设备**、**故障设备**、**备用设备**：显示当前阵列中设备的状态信息。
- **一致性策略**：使用位图来确保数据的一致性。
- **名称**：阵列的名称和所属主机。
- **UUID**：阵列的唯一标识符。
- **事件**：阵列中发生的事件数量。
- **编号、主设备号、次设备号、RAID设备、状态**：列出阵列中每个设备的详细信息，包括其在阵列中的状态和位置。
</details>

## 6. 停止和移除 RAID

### 6.1 停止 RAID
安全停止 RAID 阵列，通常用于维护或故障修复。
```bash
sudo mdadm --stop /dev/md0
```
### 6.2 组装 RAID
将现有的 RAID 阵列组装并激活。
示例

sudo mdadm --assemble /dev/md0 /dev/sd[b-c]1

参数说明

    /dev/md0：要组装的阵列名称。
    /dev/sd[b-c]1：组装 RAID 所需的设备。

:::info
`组装RAID`说白了就是重新启动停止的 RAID 。
RAID的启动方式有两种，一是手动（创建、组装 RAID），二是开机自启动（配置文件）。
:::

### 6.3 删除 RAID
```bash
sudo mdadm --remove /dev/md0
sudo mdadm --zero-superblock /dev/sdb /dev/sdc
```
:::warning 数据无价
掉盘？RAID 降级？还能再抢救一下！  
:::

## 7. 配置 RAID 自动组装

### 7.1 生成配置文件
扫描系统中所有可用的 RAID 阵列，写入 /etc/mdadm/mdadm.conf 配置文件：

```bash
sudo mdadm --detail --scan >> /etc/mdadm/mdadm.conf
```

:::warning
不保存配置的话，下次开机就不会自动装配 RAID ，也就是不存在 /dev/md[0-127]。你可以再手动装配一次，然后保存配置。
:::

### 7.2 更新 initramfs
确保 RAID 阵列在系统引导时正常加载（适用于 Debian/Ubuntu 系统）：

```bash
sudo update-initramfs -u
```

## 8 常见故障处理方式

### 8.1 **磁盘故障**
- **症状**：阵列状态显示有故障设备，系统日志有错误信息。
- **处理**：
  ```bash
  sudo mdadm /dev/mdX --remove failed_disk
  sudo mdadm /dev/mdX --add new_disk
  sudo mdadm --misc --action=repair /dev/mdX
  ```

### 8.2 **阵列降级**
- **症状**：阵列状态显示为“降级”，设备失效。
- **处理**：检查状态，替换和重建磁盘。

### 8.3 **数据同步问题**
- **症状**：同步进程问题。
- **处理**：检查状态，重新启动同步，确保磁盘健康。

### 8.4 **阵列无法启动**
- **症状**：启动时阵列不被组装。
- **处理**：
  ```bash
  sudo mdadm --assemble --scan
  sudo mdadm --assemble /dev/mdX /dev/sdX1 /dev/sdY1
  ```

### 8.5 **性能问题**
- **症状**：阵列性能低。
- **处理**：检查磁盘性能，调整阵列参数，确保无瓶颈。

### 8.6 **阵列丢失**
- **症状**：系统无法识别RAID。
- **处理**：检查配置，手动创建阵列。

### 8.7 **假故障**
假故障是指非硬盘故障导致的阵列降级、丢失，比如：我的 nas 是使用笔记本 + 硬盘柜 组成的，有时候不小心碰掉到 usb 数据线，插回数据线 RAID 已经降级或丢失。
- **症状**：数据线松动导致的阵列降级。
- **处理**：把掉线的盘重新加入阵列。
```bash
sudo mdadm /dev/mdX --re-add /dev/sdcX1
```
---
- **症状**：数据线松动导致的阵列丢失。
- **处理**：重新装配阵列。
```bash
sudo mdadm --assemble /dev/mdX /dev/sdX1 /dev/sdY1
```

### 注意事项：
- **备份数据**：操作前备份。
- **监控日志**：定期检查系统日志。
- **RAID冗余**：确保有足够冗余。

## 9. 总结 😊

使用 `mdadm` 配置 RAID 是一种高效的方式来优化磁盘性能或增加数据冗余。希望本教程对你有所帮助！别忘了收藏**在线知识库**（ [www.zxzsk.com](https://www.zxzsk.com) ）哦！😊