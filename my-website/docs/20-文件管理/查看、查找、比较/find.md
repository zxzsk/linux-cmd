---
slug: /59035de5
---
⭐⭐ 查找文件



## 1. 命令简介

`find` 命令是用来在文件系统中查找文件和目录，类似命令还有`locate`和`whereis`。



## 2. 命令参数

```bash
find [起始目录] [匹配模式] [条件]
```

* `-name pattern`：根据文件名模式查找文件 📝
* `-type type`：根据文件类型查找文件（比如 `f` 代表普通文件，`d` 代表目录）📂
* `-exec command {} \;`：找到文件后，来个“操作指令”！
* `-size [+/-]size`：根据文件大小查找文件（用 `M` 表示 MB，`k` 表示 KB，`c` 表示字节，大小随你定！）
* `-mtime n`：找到最近 `n` 天修改的文件，搞定“追溯”工作！📅
* `-delete`：小心！这可不是玩笑——它能删除找到的文件！⚠️



## 3. 命令示例

### 1. 按名称查找文件

```sh
find /path/to/search -name "filename"
```

示例：

```sh
find /home/user -name "test.txt"
```

在 `/home/user` 目录下查找名为 `test.txt` 的文件。

### 2. 忽略大小写查找文件

```sh
find /path/to/search -iname "filename"
```

示例：

```sh
find /home/user -iname "test.txt"
```

查找 `test.txt`，忽略大小写（如 `Test.txt` 也会匹配）。

### 3. 按类型查找文件

```sh
find /path/to/search -type f   # 查找普通文件  
find /path/to/search -type d   # 查找目录  
```

示例：

```sh
find /home/user -type d -name "docs"
```

查找 `/home/user` 目录下名为 `docs` 的目录。

### 4. 按大小查找文件

```sh
find /path/to/search -size +10M   # 查找大于 10MB 的文件  
find /path/to/search -size -500k  # 查找小于 500KB 的文件  
find /path/to/search -size 100M   # 查找正好 100MB 的文件  
```

### 5. 按修改时间查找文件

```sh
find /path/to/search -mtime -7   # 查找最近 7 天内修改过的文件  
find /path/to/search -mtime +30  # 查找 30 天前修改的文件  
find /path/to/search -atime -1   # 查找最近 1 天内访问过的文件  
```

### 6. 按权限查找文件

```sh
find /path/to/search -perm 644   # 查找权限为 644 的文件  
find /path/to/search -perm -755  # 查找包含 755 权限的文件  
find /path/to/search -user username  # 查找属于某个用户的文件  
find /path/to/search -group groupname  # 查找属于某个组的文件  
```

### 7. 查找并执行操作

```sh
find /path/to/search -name "*.log" -exec rm {} \;  # 删除所有 `.log` 文件  
find /path/to/search -name "*.sh" -exec chmod +x {} \;  # 给 `.sh` 文件添加执行权限  
find /path/to/search -type f -name "*.txt" -exec mv {} /backup/ \;  # 移动 `.txt` 文件到 `/backup/`  
```

### 8. 使用 `xargs` 批量处理查找结果

```sh
find /path/to/search -name "*.log" | xargs rm  
find /path/to/search -name "*.jpg" | xargs -I {} cp {} /backup/  
```

### 9. 结合 `prune` 排除目录

```sh
find /path/to/search -name ".git" -prune -o -name "*.py" -print  
```

排除 `.git` 目录，查找所有 `.py` 文件。

