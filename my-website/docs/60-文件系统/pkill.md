---
slug: /7e55e58c
---
⭐终止进程（PID）

在 Linux 中，`pkill` 命令是一个非常方便的进程管理工具，它允许你根据进程名称、用户、会话等多种条件来终止进程。与 `kill` 不同的是，`pkill` 允许你用进程名称而非 PID 来操作，这使得它在管理多个相同程序的进程时特别高效！

# Linux pkill 命令教程：通过模式杀死进程 ⚡

`pkill` 是 Linux 系统中的一个强大命令，可以根据进程名称、用户、会话等条件杀死（终止）进程。与 `kill` 命令相比，`pkill` 提供了更灵活的匹配方式，支持通过正则表达式匹配多个进程。让我们来学习一下如何高效使用 `pkill` 命令吧！🚀

## 1. 基本用法

### 1.1. 根据进程名称杀死进程

最简单的用法是根据进程的名称来杀死它：

```bash
pkill <process-name>
```

例如，杀死所有名为 `firefox` 的进程：

```bash
pkill firefox
```

### 1.2. 使用信号杀死进程

默认情况下，`pkill` 会发送 `SIGTERM` 信号终止进程。如果你需要强制杀死进程，可以使用 `-9` 信号（即 `SIGKILL`）：

```bash
pkill -9 firefox
```

这会强制杀死所有名为 `firefox` 的进程。

### 1.3. 区分大小写匹配

默认情况下，`pkill` 是大小写不敏感的。如果你希望匹配时区分大小写，可以使用 `-i` 选项：

```bash
pkill -i Firefox
```

这只会杀死进程名为 `Firefox` 的进程，而不会杀死 `firefox`。

## 2. 高级用法

### 2.1. 使用完整进程名匹配

有时，进程名称可能包含多个部分。通过 `-f` 选项，你可以匹配完整的命令行（不仅仅是进程名称）：

```bash
pkill -f "firefox --private"
```

这会杀死所有包含 `firefox --private` 作为命令行参数的进程。

### 2.2. 按用户杀死进程

如果你只想终止某个用户的进程，可以使用 `-u` 选项指定用户名：

```bash
pkill -u username firefox
```

这将只杀死 `username` 用户下的所有 `firefox` 进程。

### 2.3. 按进程组杀死进程

如果你需要根据进程组 ID（PGID）来匹配进程，可以使用 `-g` 选项：

```bash
pkill -g <PGID> firefox
```

### 2.4. 显示被杀死的进程

使用 `-e` 选项，`pkill` 会显示所有被终止的进程的信息，方便查看执行了哪些操作：

```bash
pkill -e firefox
```

### 2.5. 选择最近或最久启动的进程

你可以通过 `-n` 或 `-o` 选项来分别选择最近启动或最久启动的进程：

- `-n`：选择最近启动的进程
- `-o`：选择最久启动的进程

例如，选择最久启动的 `firefox` 进程并终止它：

```bash
pkill -o firefox
```

## 3. 其他选项

### 3.1. 按进程 ID (PID) 从文件读取

如果你有一个包含进程 ID 的文件，并希望通过文件中的 PID 来终止进程，可以使用 `-F` 选项：

```bash
pkill -F <file>
```

### 3.2. 查看与进程相关的日志

你还可以通过 `-L` 选项启用日志功能，记录并显示进程终止操作的详细信息：

```bash
pkill -L
```

### 3.3. 查看进程的依赖关系

使用 `-P` 选项，你可以仅杀死某个进程的子进程：

```bash
pkill -P <PPID> firefox
```

### 3.4. 排除祖先进程

通过 `--ignore-ancestors` 选项，你可以排除祖先进程，以确保不会错误地杀死父进程或祖先进程：

```bash
pkill --ignore-ancestors firefox
```

## 4. pkill 示例

### 4.1. 杀死指定名称的进程

```bash
pkill firefox
```

### 4.2. 强制杀死进程

```bash
pkill -9 firefox
```

### 4.3. 按用户名杀死进程

```bash
pkill -u username firefox
```

### 4.4. 匹配完整进程名

```bash
pkill -f "firefox --private"
```

### 4.5. 显示被杀死的进程

```bash
pkill -e firefox
```

### 4.6. 杀死最久启动的进程

```bash
pkill -o firefox
```

## 5. 总结 🌟

`pkill` 是一个非常强大的进程管理工具，提供了多种灵活的选项来终止进程。无论是根据进程名称、用户、会话、进程组等条件，`pkill` 都可以帮助你高效地管理系统中的进程。希望这篇教程能帮助你掌握 `pkill` 的使用技巧，让你在 Linux 系统管理中更加得心应手！😊

希望这篇教程对你有所帮助！别忘了收藏**在线知识库**（ [www.zxzsk.com](http://www.zxzsk.com) ）哦！🌟

