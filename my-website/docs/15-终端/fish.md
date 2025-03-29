---
slug: /2b00637e
---
`fish`（Friendly Interactive SHell）是一个开箱即用的、现代化的、用户友好的的命令行 shell，旨在提供更好的用户体验和更直观的交互。它是 `bash`、`zsh` 等传统 shell 的替代品，具有语法高亮、自动建议、更友好的脚本语法等特性。

https://fishshell.com/



## **Fish Shell 基础命令与使用**  

---

### **1. 安装 Fish**  
**Ubuntu/Debian**:  

```bash  
sudo apt install fish  
```
**macOS (Homebrew)**:  
```bash  
brew install fish  
```

---

### **2. 设为默认 Shell**  
```bash  
# 查看 fish 路径  
which fish  

# 修改默认 Shell（需路径，如 /usr/bin/fish）  
chsh -s /usr/bin/fish  
```
**注**: 重启终端生效。

---

### **3. 基础操作**  
| 功能         | 命令                           |
| ------------ | ------------------------------ |
| **自动补全** | 输入命令后按 `Tab`             |
| **历史搜索** | 输入关键词后按 `↑` 或 `Ctrl+R` |
| **语法高亮** | 默认启用，错误命令显示红色     |

---

### **4. 配置 Fish**  
- **配置文件**: `~/.config/fish/config.fish`  
- **示例配置**:  
  ```bash  
  # 设置别名  
  alias ll "ls -lh"  
  
  # 环境变量  
  set -x PATH $PATH ~/my-tools  
  
  # 主题（需安装工具）  
  fish_config theme choose "Dracula"  
  ```
  
  [oh-my-fish](https://github.com/oh-my-fish/oh-my-fish/blob/master/docs/Themes.md)

---

### **5. 插件管理（fisher）**  
1. **安装 fisher**:  
   
   ```bash  
   curl -sL https://git.io/fisher | source && fisher install jorgebucaran/fisher  
   ```
2. **常用插件**:  
   ```bash  
   fisher install edc/bass         # 兼容 Bash 命令  
   fisher install jethrokuan/z     # 目录快速跳转  
   ```

---

### **6. 与 Bash 的差异**  
- **变量赋值**: `set var "value"`（非 `VAR=value`）  
- **条件语句**:  
  ```bash  
  if grep "key" file.txt  
    echo "Found"  
  end  
  ```
- **函数定义**:  
  ```bash  
  function hello  
    echo "Hello $argv"  
  end  
  ```

---

### **常见问题**  
- **脚本兼容性**: 使用 `bash -c "command"` 执行 Bash 命令。  
- **恢复默认 Shell**:  
  ```bash  
  chsh -s /bin/bash  
  ```

---

按需调整配置或插件，提升终端体验。



参考：https://www.cnblogs.com/aaroncoding/p/17118251.html
