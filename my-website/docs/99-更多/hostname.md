---
slug: /48e8df19
---
**`hostname` 命令**：查看或临时修改系统主机名。  

- **查看**：  
  
  ```bash
  hostname
  ```
  
- **临时修改**（需 root，重启失效）:  
  ```bash
  sudo hostname new-name
  ```

- **永久修改**：  
  
  - **Systemd 系统**:  
    
    ```bash
    sudo hostnamectl hostname new-name
    ```
  - **其他 Linux**：编辑 `/etc/hostname`，重启生效。  
  
- **配套操作**：  
  更新 `/etc/hosts`：  
  ```bash
  127.0.0.1 localhost new-name
  ```
