---
slug: /56a693d9
---
⭐列出 at 创建的任务

## 1. 简介

`atq` 命令在 Linux 中用于列出当前排定的任务。`atq` 是 `at` 命令的附属工具，专门用于显示那些已经排定但尚未执行的任务。通过使用 `atq`，你可以方便地查看所有排定的任务并进行管理。它适用于那些需要在未来某个特定时间点执行的一次性任务🔧。

你可以使用 `sudo apt install at` 命令安装它。

## 2. 常见操作概览 📋

| 操作                    | 命令格式                           | 说明                                 |
|-------------------------|-----------------------------------|--------------------------------------|
| 查看当前用户排定的任务  | `atq`                             | 列出当前用户排定的所有任务。         |
| 查看所有用户排定的任务  | `sudo atq`                        | 查看系统中所有用户排定的任务。      |
| 删除排定的任务          | `atrm <任务ID>`                   | 删除指定任务ID的排定任务。           |
| 查看任务详细信息        | `at -c <任务ID>`                  | 查看指定任务的执行命令。             |

## 3. 命令示例 ⚡

### 3.1 查看当前用户排定的任务

使用 `atq` 命令可以列出当前用户排定的所有任务：

```bash
$ atq
```

输出结果将显示任务ID、排定的时间和任务状态。例如：

```
1       2024-11-22 14:30 a user
2       2024-11-22 16:00 a user
```

### 3.2 查看所有用户排定的任务

要查看系统中所有用户排定的任务，使用 `sudo` 执行 `atq` 命令：

```bash
$ sudo atq
```

此命令将列出所有排定的任务，包括其他用户的任务。

### 3.3 删除已排定的任务

如果你希望删除已排定的任务，可以使用 `atrm` 命令，并指定任务ID：

```bash
$ atrm 1
```

这将删除任务ID为1的排定任务。

### 3.4 查看任务的详细信息

使用 `at -c <任务ID>` 查看某个排定任务的详细信息。例如：

```bash
$ at -c 1
```

此命令将显示任务ID为1的具体执行命令。

## 4. 常用选项 📝

- `-v`：显示排定任务的详细信息，包括任务的时间和状态。
- `-l`：列出所有用户的排定任务（与 `atq` 命令类似，但更详细）。
- `-c <任务ID>`：查看排定任务的命令内容。

## 5. 小贴士 💡

- `atq` 只会显示当前尚未执行的任务。如果任务已经执行，它将不再出现在 `atq` 列表中。
- 若你想要删除某个任务，记得使用 `atrm <任务ID>` 来进行删除，避免任务继续排队等待执行。
- 若你希望查看某个任务的具体执行命令，可以使用 `at -c <任务ID>`。

## 6. 总结 🎯

`atq` 是 Linux 系统中管理排定任务的实用工具。通过 `atq`，你可以轻松查看排定的任务以及它们的状态，确保你能够高效地管理所有即将执行的任务。结合 `at` 命令，它为你提供了强大的一次性任务调度能力。

希望这篇教程帮助你掌握如何使用 `atq` 命令！别忘了收藏**在线知识库**（ [www.zxzsk.com](http://www.zxzsk.com) ）哦！😊

---

通过学习 `atq` 命令，你现在可以轻松查看和管理系统中的排定任务了！
