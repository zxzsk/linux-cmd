---
slug: /891e5c0e
---
终端复用、后台任务

`tmux` 是一个终端复用器，可以让进程在后台运行，即使关闭终端，任务仍然不会被终止。



在服务端安装 `tmux` ：

```
apt install tmux
```



### 1. **启动一个新会话**

```bash
tmux new -s mysession
```

这将创建一个名为 `mysession` 的 tmux 会话。

------

### 2. **分离（退出但保持运行）**

在 tmux 会话中，按：

```bash
Ctrl + B，然后按 D
```

这会将你从 `tmux` 会话中分离，但任务仍然在后台运行。

------

### 3. **重新连接到会话**

```bash
tmux attach -t mysession
```

如果你有多个会话，可以先查看：

```bash
tmux ls
```

然后连接到相应的会话：

```bash
tmux attach -t <session_name>
```

------

### 4. **关闭会话**

在 `tmux` 会话中运行：

```bash
exit
```

或者使用：

```bash
tmux kill-session -t mysession
```

------

### 5. **创建多个窗口**

在 `tmux` 会话中：

- **新建窗口**：`Ctrl + B`，然后 `C`
- **切换窗口**：`Ctrl + B`，然后 `N`（下一个） 或 `P`（上一个）
- **关闭窗口**：`exit`

------

### 6. **分割窗口**

- **水平分割**（上下）：`Ctrl + B`，然后 `"`
- **垂直分割**（左右）：`Ctrl + B`，然后 `%`
- **切换面板**：`Ctrl + B`，然后 `方向键`

------

`tmux` 适用于长时间运行的任务，如服务器管理、编译代码等。



### 7. 使用案例

#### 硬盘坏道检测

硬盘坏道检测通常需要很长的时间，以东芝mg08 14TB为例，全盘写入耗时12~14小时。为了避免中途退出终端，导致检测中止，最好使用 tmux 。



全盘写入测试

```bash
# 创建tmux会话
tmux new -s mysession

# 查看分区，确定要检测的硬盘
root@pve:~# lsblk
NAME      MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda         8:0    0  12.7T  0 disk 
├─sda1      8:1    0    16M  0 part 
└─sda2      8:2    0  12.7T  0 part 

# 使用此命令检测容量<=2TB的硬盘
root@pve:~# badblocks -wsv /dev/sda
badblocks: Value too large for defined data type invalid end block (13672382464): must be 32-bit value

# 使用此命令检测容量>2TB的硬盘
root@pve:~# badblocks -wsv -b 4096 /dev/sda
Checking for bad blocks in read-write mode
From block 0 to 3418095615
Testing with pattern 0xaa:   0.10% done, 0:51 elapsed. (0/0/0 errors)

# 分离会话：按ctrl+B，再按D
[detached (from session mysession)]

# 重新连接到会话
root@pve:~# tmux attach -t mysession
```







