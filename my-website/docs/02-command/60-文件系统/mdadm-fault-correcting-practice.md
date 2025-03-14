⭐⭐mdadm 故障修改实践

# mdadm 故障修复实践

相信在家里 DIY NAS的朋友可能都经历过类似的场景：
>我的 nas 是使用 笔记本 + 硬盘柜 + mdadm（软件） 组成的，有时候不小心碰掉了 usb 数据线，插回数据线 RAID 已经降级或丢失。



## 1. 问题分析

### 1.1 查看 RAID 配置信息
```BASH
$ cat /etc/mdadm/mdadm.conf | sed '/#/d'

HOMEHOST <system>

MAILADDR root

ARRAY /dev/md/1 metadata=1.2 spares=1 name=k455l:1 UUID=7629c5bd:aa805db6:7f1a7d44:6f16df3d
ARRAY /dev/md127 metadata=1.2 name=k455l:2T UUID=af486467:ad28f90a:b8060fab:ef151473

```
在这个系统上有两个 RAID1 阵列： `md1` 和 `md127`

### 1.2 查看 RAID 当前状态
```bash
$ sudo mdadm -D /dev/md127 /dev/md1
# 阵列 md127
/dev/md127:
           Version : 1.2
     Creation Time : Sun Apr  7 11:45:07 2024
#highlight-next-line
        Raid Level : raid1
        Array Size : 1953381440 (1862.89 GiB 2000.26 GB)
     Used Dev Size : 1953381440 (1862.89 GiB 2000.26 GB)
      Raid Devices : 2
     Total Devices : 1
       Persistence : Superblock is persistent

     Intent Bitmap : Internal

       Update Time : Mon Nov 25 13:33:18 2024
# FAILED 不可用的状态
# highlight-next-line
             State : clean, FAILED 
    Active Devices : 1
   Working Devices : 1
    Failed Devices : 0
     Spare Devices : 0

Consistency Policy : bitmap

# 这个阵列的两块硬盘都掉线了（硬盘柜中的）
    Number   Major   Minor   RaidDevice State
#highlight-next-line
       0       8       49        0      active sync   missing
#highlight-next-line
       -       0        0        1      removed


# 阵列 md1
/dev/md1:
           Version : 1.2
     Creation Time : Sat Dec 30 00:24:11 2023
#highlight-next-line
        Raid Level : raid1
        Array Size : 838728704 (799.87 GiB 858.86 GB)
     Used Dev Size : 838728704 (799.87 GiB 858.86 GB)
      Raid Devices : 2
     Total Devices : 1
       Persistence : Superblock is persistent

     Intent Bitmap : Internal

       Update Time : Thu Nov 28 13:58:25 2024
# 这个阵列处于降级状态，仍然可用
#highlight-next-line
             State : clean, degraded 
    Active Devices : 1
   Working Devices : 1
    Failed Devices : 0
     Spare Devices : 0

Consistency Policy : bitmap

              Name : k455l:1  (local to host k455l)
              UUID : 7629c5bd:aa805db6:7f1a7d44:6f16df3d
            Events : 3358793

# 阵列中的一块硬盘正常工作（笔记本内置硬盘），另一块则掉线（硬盘柜中的）
    Number   Major   Minor   RaidDevice State
       0       8       17        0      active sync   /dev/sdb1
# highlight-next-line
       -       0        0        1      removed

```

### 1.3 查看 RAID 挂载情况
查看RAID应该挂载在哪个目录
```bash
$ cat /etc/fstab 
...
/dev/md1       /mnt/raid1          ext4   defaults      0       0
...
/dev/md127     /mnt/raid2T         ext4   defaults      0       0
```
:::tip
正常情况下，我们创建 RAID 后会在 `/etc/fstab` 中设置挂载目录，所以此刻从该文件查看 RAID 的挂载目录
:::

查看实际挂载情况
```bash
$ lsblk
...
sdb         8:16   0 931.5G  0 disk  
├─sdb1      8:17   0   800G  0 part  
# highlight-next-line
│ └─md1     9:1    0 799.9G  0 raid1 /mnt/raid1
└─sdb2      8:18   0   120G  0 part  /mnt/hd1
sdc         8:32   0 931.5G  0 disk  
# highlight-next-line
├─sdc1      8:33   0   800G  0 part  
└─sdc2      8:34   0   120G  0 part  
sdf         8:80   0   1.8T  0 disk  
└─sdf1      8:81   0   1.8T  0 part  
sdf       8:80   0   1.8T  0 disk  
# highlight-next-line
└─sdf1    8:81   0   1.8T  0 part  
sdg       8:96   0   1.8T  0 disk  
# highlight-next-line
└─sdg1    8:97   0   1.8T  0 part  
```
实际情况：
- `md1` 降级：一块盘在工作，一块盘丢失。
- `md127` 丢失：两块盘都掉了。
---

### 1.4 总结

`/dev/md1` 状态
- **RAID 类型**：RAID 1（镜像）。  
- **状态**：降级 (`clean, degraded`)。  
- **问题**：设备 `/dev/sdb1` 仍然正常，但 RAID 缺失一个设备（`removed`）。  

`/dev/md127` 状态
- **RAID 类型**：RAID 1（镜像）。  
- **状态**：失败 (`clean, FAILED`)。  
- **问题**：显示阵列中只剩一个活动设备（实际也丢失了），另一个设备完全丢失（`missing` 和 `removed`）。


## 2. 修复步骤

### 2.1 修复 `/dev/md1` 阵列

:::tip 分析
现在的情况（硬盘已经插回来，并且被识别了）是很好修复的，修复 md1 只需要一步：
- 执行 `mdadm re-add ...` 将硬盘重新添加到 md1 就可以了。
:::


1.确认即将加入阵列的硬盘  
根据前面查到的配置信息，`md1` 掉盘是 `\dev\sdc1`，现在使用 `lsblk` 确认一下硬盘插回来后还是不是`\dev\sdc1`。
```bash
$ lsblk
...
sdb         8:16   0 931.5G  0 disk  
├─sdb1      8:17   0   800G  0 part  
│ └─md1     9:1    0 799.9G  0 raid1 /mnt/raid1
└─sdb2      8:18   0   120G  0 part  /mnt/hd1
sdc         8:32   0 931.5G  0 disk  
#highlight-next-line
├─sdc1      8:33   0   800G  0 part  
└─sdc2      8:34   0   120G  0 part  
```
确认无误。

2.恢复阵列  
使用 `--re-add` 将 `/dev/sdc1` 重新添加到阵列 `/dev/md1` 
```bash
$ sudo mdadm /dev/md1 --re-add /dev/sdc1
```
输出：`mdadm: re-added /dev/sdc1` 说明添加成功，阵列会自动恢复。

:::tip 查看恢复进度


1.恢复状态（数个小时～数天）
```bash
$ sudo mdadm -D /dev/md1
/dev/md1:
...
     Intent Bitmap : Internal

       Update Time : Thu Nov 28 14:00:05 2024
#highlight-next-line
             State : clean, degraded, recovering 
...

Consistency Policy : bitmap

#highlight-next-line
    Rebuild Status : 0% complete
...

    Number   Major   Minor   RaidDevice State
       0       8       17        0      active sync   /dev/sdb1
#highlight-next-line
       1       8       33        1      spare rebuilding   /dev/sdc1

```

2.正常状态（重建完成）
```bash
$ sudo mdadm -D /dev/md1
/dev/md1:
...
     Intent Bitmap : Internal

       Update Time : Thu Nov 28 15:55:06 2024
#highlight-next-line
             State : clean 
...

Consistency Policy : bitmap

...

    Number   Major   Minor   RaidDevice State
       0       8       17        0      active sync   /dev/sdb1
#highlight-next-line
       1       8       33        1      active sync   /dev/sdc1

```
:::
---
:::warning
如果你的硬盘是真坏了，需要更换硬盘。可以按下面的步骤操作：

1. 检查可用设备  
    列出系统中的所有磁盘和分区：
    ```bash
    lsblk
    ```
    确认是否有新的磁盘可用以替换丢失的设备。假设 `/dev/sdh1` 是新磁盘。

2. 标记故障磁盘（可选）  
    如果丢失设备曾出现在阵列中但状态为故障，可以标记为故障：
    ```bash
    sudo mdadm --fail /dev/md1 /dev/sdh1
    ```

3. 添加新磁盘  
    将新磁盘添加到阵列：
    ```bash
    sudo mdadm --add /dev/md1 /dev/sdh1
    ```

4. 检查重建状态  
    RAID 阵列会自动开始重建，查看重建进度：
    ```bash
    cat /proc/mdstat
    ```
    :::



### 2.2 修复 `/dev/md127` 阵列

:::info 分析
修复 md127 需要两步：
1. 重新装配 `/dev/md127`
2. 将 `/dev/md127` 重新挂载到原来的目录 
:::

1. 确认 `/dev/md127` 当前的情况  
    使用 `lsblk` 命令查看硬盘情况，阵列 `/dev/md127` 丢失，需要重新装配
    ```bash
    $ lsblk
    ...
    sdf       8:80   0   1.8T  0 disk  
    # highlight-next-line
    └─sdf1    8:81   0   1.8T  0 part  
    sdg       8:96   0   1.8T  0 disk  
    # highlight-next-line
    └─sdg1    8:97   0   1.8T  0 part  
    ```

2. 停止 `/dev/md127`  
    ```bash
    $ sudo mdadm --stop /dev/md127
    ```
    输出提示：`mdadm: stopped /dev/md127`

3. 重新组装 `/dev/md127`  
    ```bash
    $ sudo mdadm --assemble /dev/md127 /dev/sdf1 /dev/sdg1
    ```
    输出提示：`mdadm: /dev/md127 has been started with 2 drives.`

4. 确认 `/dev/md127` 恢复无虞  
    ```bash
    $ sudo mdadm -D /dev/md127 
    /dev/md127:
    ...
        Intent Bitmap : Internal
    
          Update Time : Mon Nov 25 13:02:01 2024
    # 因为是同时掉线的且掉线时没有读写数据，所以装配后直接是完成同步的状态。
    # highlight-next-line
                State : clean 
    
    Consistency Policy : bitmap
    
    ...
    
        Number   Major   Minor   RaidDevice State
    # highlight-start
          0       8       81        0      active sync   /dev/sdf1
          1       8       97        1      active sync   /dev/sdg1
    # highlight-end
    ```

    用 `lsblk` 可以看到这个阵列 `/dev/md127` 已经装配成功。
    ```bash
    sdf         8:80   0   1.8T  0 disk  
    └─sdf1      8:81   0   1.8T  0 part  
    # highlight-next-line
      └─md127   9:127  0   1.8T  0 raid1 
    sdg         8:96   0   1.8T  0 disk  
    └─sdg1      8:97   0   1.8T  0 part  
    # highlight-next-line
      └─md127   9:127  0   1.8T  0 raid1 
    ```

<br />

---

<br />

:::warning
如果你的硬盘是真坏了，可以按照下面的步骤操作：  
1. 确认磁盘状态
列出系统分区，检查是否有新磁盘（例如 `/dev/sdd1`）可以替换丢失的设备：
```bash
lsblk
```

2. 尝试手动组装
如果阵列未被组装，尝试手动组装：
```bash
sudo mdadm --assemble --scan
```

3. 手动指定设备组装
如果自动组装失败，手动指定设备：
```bash
sudo mdadm --assemble /dev/md127 /dev/sdb1 /dev/sdd1
```

4. 替换丢失设备
如果设备丢失，先标记丢失设备为故障并移除：
```bash
sudo mdadm --fail /dev/md127 missing
sudo mdadm --remove /dev/md127 missing
```

添加新设备：
```bash
sudo mdadm --add /dev/md127 /dev/sdd1
```

5. 检查状态
查看阵列状态确认重建成功：
```bash
sudo mdadm --detail /dev/md127
```
:::

## 3. 配置更新

### 3.1 更新 `/etc/mdadm/mdadm.conf`
确保新设备配置被保存到配置文件中：
```bash
sudo mdadm --detail --scan >> /etc/mdadm/mdadm.conf
```

### 3.2 更新 `initramfs`
在 Debian/Ubuntu 系统中，更新 `initramfs` 以确保 RAID 阵列在引导时正确组装：
```bash
sudo update-initramfs -u
```

## 4. 验证与挂载

### 4.1 验证文件系统
对重建后的阵列运行文件系统检查：
```bash
sudo fsck -n /dev/md1
sudo fsck -n /dev/md127
```

<details>
<summary>示例输出</summary>
<p>
```bash
...
/dev/md1: 没有问题，108858/52420608 文件，91619291/209682176 块
...
/dev/md127: 没有问题，32468/122093568 文件，175628102/488345360 块
```
</p>
</details>

### 4.2 挂载 RAID 阵列

自动挂载：  
```bash
sudo mount -a
```
:::tip
正常情况下，我们创建 RAID 后会在 /etc/fstab 中设置挂载目录，所以此刻从可以使用 `mount -a` 恢复 RAID 的挂载。
:::
    
如果未自动挂载，手动挂载：
```bash
sudo mount /dev/md127 /mnt/raid2T
```

### 4.3 验证挂载
确认挂载是否成功：
```bash
df -h
```

## 5. 总结 😊

通过以上步骤，你可以修复 RAID 阵列中设备丢失或降级的问题。未来建议定期备份数据，以减少因磁盘故障带来的风险。希望这篇实践教程对你有所帮助！别忘了收藏**在线知识库**（ [www.zxzsk.com](https://www.zxzsk.com) ）哦！🎉