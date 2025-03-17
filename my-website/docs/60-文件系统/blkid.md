---
slug: /e9de02d1
---
⭐查看磁盘属性

`blkid` 是 Linux 系统中的一个命令，用于显示可用块设备（如硬盘分区、U盘等）的属性信息，包括 UUID（通用唯一标识符）、LABEL（分区标签）、文件系统类型等。它是系统管理员管理存储设备的重要工具。

## 基础语法

```bash
blkid [选项] [设备...]
```

- **设备**: 可选参数，指定要查询的设备路径（如 `/dev/sda1`）。如果未指定，将列出所有设备的信息。
- **选项**: 修改 `blkid` 命令的行为。

## 常用选项

| 选项         | 描述                                      |
|--------------|-------------------------------------------|
| `-o format`  | 设置输出格式，例如 `export`、`full` 等。  |
| `-s tag`     | 指定仅显示特定的标签（如 UUID 或 LABEL）。|
| `-t NAME=VAL`| 按条件过滤设备信息，例如 `UUID=xxxx`。   |
| `-p`         | 对普通文件而非设备文件执行探测操作。      |
| `-c file`    | 使用自定义缓存文件（默认 `/etc/blkid.tab`）。|
| `-w file`    | 写入设备信息到指定的缓存文件。            |
| `-h`         | 显示帮助信息并退出。                      |

## 示例

### 示例 1: 列出所有设备的属性

```bash
blkid
```
输出类似：
```
/dev/sda1: UUID="1234-5678" TYPE="ext4" PARTLABEL="primary"
/dev/sda2: UUID="ABCD-EF01" TYPE="vfat" PARTUUID="0001-0002"
```

### 示例 2: 查询特定设备的信息

```bash
blkid /dev/sda1
```
输出：
```
/dev/sda1: UUID="1234-5678" TYPE="ext4" PARTLABEL="primary"
```

### 示例 3: 仅显示设备的 UUID

```bash
blkid -s UUID /dev/sda1
```
输出：
```
/dev/sda1: UUID="1234-5678"
```

### 示例 4: 按条件过滤设备

```bash
blkid -t UUID=1234-5678
```
输出：
```
/dev/sda1: UUID="1234-5678" TYPE="ext4"
```

### 示例 5: 使用自定义输出格式

```bash
blkid -o export
```
输出：
```
DEVNAME=/dev/sda1
UUID=1234-5678
TYPE=ext4
PARTLABEL=primary
```

### 示例 6: 将信息写入缓存文件

```bash
blkid -w /tmp/blkid-cache.tab
```
此命令会将设备信息写入 `/tmp/blkid-cache.tab`。

## 注意事项

1. 需要具备适当权限（通常是 root 权限）才能执行 `blkid` 命令。
2. 如果设备未被挂载，`blkid` 仍然可以检测其属性。
3. 使用 `blkid` 查询信息时不会修改设备，但某些选项（如 `-w`）可能会更新缓存文件。

## 与其他命令的关系

- **`lsblk`**: 用于显示块设备的树状结构和挂载点。
- **`df`**: 用于显示挂载的文件系统的磁盘使用情况。
- **`mount` 和 `umount`**: 用于挂载和卸载设备。

## 总结

`blkid` 是一个快速、简单的工具，用于获取块设备的详细信息。在文件系统管理、设备挂载和故障排除过程中，熟练使用 `blkid` 可以大大提高效率。
