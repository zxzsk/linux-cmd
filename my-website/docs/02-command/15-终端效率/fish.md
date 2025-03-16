---
slug: /2b00637e
---
`fish`（Friendly Interactive SHell）是一个现代化的、用户友好的命令行 shell，旨在提供更好的用户体验和更直观的交互。它是 `bash`、`zsh` 等传统 shell 的替代品，具有语法高亮、自动建议、更友好的脚本语法等特性。选择 fish 的唯一原因是“开箱即用”。

https://fishshell.com/




## 安装 `fish`
在大多数 Linux 发行版和 macOS 上，可以通过包管理器安装 `fish`。

- **Debian/Ubuntu**:
  
  ```bash
  sudo apt install fish
  ```
  
- **Fedora**:
  ```bash
  sudo dnf install fish
  ```

- **macOS** (使用 Homebrew):
  ```bash
  brew install fish
  ```

- **Arch Linux**:
  ```bash
  sudo pacman -S fish
  ```


## 启动 `fish`
安装完成后，可以通过以下命令启动 `fish`：
```bash
fish
```

## 将 `fish` 设为默认 shell
如果你想将 `fish` 设为默认 shell，可以使用以下命令：
```bash
chsh -s $(which fish)
```
注意：在某些系统上，`fish` 可能不在 `/etc/shells` 中，需要手动添加。

## `fish` 的主要特性
1. **语法高亮**：
   
   - 输入命令时，`fish` 会自动高亮显示有效的命令、路径和选项，帮助你快速发现错误。
   
2. **自动建议**：
   - 输入命令时，`fish` 会根据历史记录和当前目录内容提供自动建议，按 `→` 或 `Tab` 可以接受建议。

3. **更友好的脚本语法**：
   
   - `fish` 的脚本语法更简洁直观，例如：
     
     ```fish
     for i in (seq 1 10)
       echo "Number $i"
     end
     ```
     
     坏处是大多数.sh 脚本都是 bash 格式，不能直接用 fish 执行。
   
4. **内置帮助**：
   
   - 使用 `help` 命令可以打开 `fish` 的交互式帮助文档。
   
5. **更智能的命令补全**：
   - `fish` 提供了更强大的命令补全功能，支持命令、参数和文件路径的补全。

## 常用命令
- **设置环境变量**：
  ```fish
  set -x MY_VAR "value"
  ```

- **查看环境变量**：
  ```fish
  echo $MY_VAR
  ```

- **编辑 `fish` 配置**：
  ```fish
  fish_config
  ```
  这会打开一个网页界面，用于配置 `fish` 的外观和行为。

- **查看历史记录**：
  ```fish
  history
  ```

- **退出 `fish`**：
  ```fish
  exit
  ```

## 自定义配置
`fish` 的配置文件位于 `~/.config/fish/config.fish`，你可以在这里添加自定义配置。例如：
```fish
# 设置别名
alias ll="ls -la"

# 设置环境变量
set -x PATH $PATH ~/my_custom_path
```

## 与其他 shell 的区别
- `fish` 的脚本语法与 `bash` 不同，例如：
  - `fish` 使用 `and` 和 `or` 代替 `&&` 和 `||`。
  - `fish` 的变量不需要 `$` 符号来引用。
  - `fish` 的循环和条件语句更简洁。

## 总结
`fish` 是一个非常适合交互式使用的 shell，特别适合那些希望提高命令行效率的用户。如果你对传统 shell 的复杂语法感到困扰，`fish` 是一个值得尝试的替代品。
