⭐⭐mdadm 故障修复流程

# mdadm 故障修复流程

### 1. RAID 常见故障类型

RAID 阵列可能遇到以下常见问题：

1. RAID 阵列降级（Degraded）：一个或多个磁盘失效。
2. RAID 阵列不可用（Inactive）：RAID 配置损坏或未正确组装。
3. RAID 阵列崩溃：多个磁盘失效，数据不可恢复。

### 2. 检查 RAID 状态

#### 2.1 使用 `cat /proc/mdstat`
```bash
cat /proc/mdstat
```

输出示例（降级阵列）：
```
md0 : active raid1 sdb[1]
      1048576 blocks [2/1] [U_]
```

#### 2.2 查看详细信息
```bash
sudo mdadm --detail /dev/md0
```

输出示例：
```
/dev/md0:
        State : clean, degraded
```

### 3. 修复降级的 RAID 阵列

#### 3.1 标记故障磁盘
如果 RAID 阵列中有故障磁盘，首先标记该磁盘为故障：
```bash
sudo mdadm --fail /dev/md0 /dev/sdc
```

#### 3.2 移除故障磁盘
```bash
sudo mdadm --remove /dev/md0 /dev/sdc
```

#### 3.3 替换磁盘并添加到阵列
将新的磁盘添加到阵列中：
```bash
sudo mdadm --add /dev/md0 /dev/sdc
```

#### 3.4 自动重建
RAID 阵列会自动开始重建，使用以下命令查看进度：
```bash
cat /proc/mdstat
```

### 4. 重建 RAID 阵列

#### 4.1 阵列未启动（Inactive）
如果 RAID 阵列状态为 `inactive`，可以尝试重新组装：

```bash
sudo mdadm --assemble --scan
```

#### 4.2 手动指定磁盘
若自动组装失败，可以手动指定参与的磁盘：

```bash
sudo mdadm --assemble /dev/md0 /dev/sdb /dev/sdc
```

#### 4.3 重建缺失配置
如果 `/etc/mdadm/mdadm.conf` 配置丢失，可重新生成：
```bash
sudo mdadm --detail --scan >> /etc/mdadm/mdadm.conf
```

### 5. 数据恢复

#### 5.1 使用 RAID 工具恢复数据
- 确认 RAID 阵列的级别和布局，执行以下命令：
  ```bash
  sudo mdadm --examine /dev/sdX
  ```
- 根据输出信息，手动组装阵列恢复数据。

#### 5.2 使用 `fsck` 检查文件系统
RAID 阵列恢复后，检查文件系统是否损坏：
```bash
sudo fsck /dev/md0
```

### 6. 删除并重新创建 RAID 阵列

在无法修复的情况下，可选择删除现有阵列并重新创建：

#### 6.1 停止阵列
```bash
sudo mdadm --stop /dev/md0
```

#### 6.2 删除超级块
```bash
sudo mdadm --zero-superblock /dev/sdb /dev/sdc
```

#### 6.3 重新创建阵列
按照常规方法重新创建 RAID 阵列（参考 [创建 RAID 阵列](https://www.zxzsk.com)）。

### 7. 总结 😊

mdadm 提供了强大的工具来应对 RAID 阵列的故障，但日常备份仍然是最可靠的保护措施。希望这篇教程对你有所帮助！别忘了收藏**在线知识库**（ [www.zxzsk.com](https://www.zxzsk.com) ）哦！😊