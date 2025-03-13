



`firewalld` 是 Linux 系统中用于管理防火墙的工具，基于区域和服务进行控制，提供动态的管理方式。与传统的 `iptables` 不同，`firewalld` 更加灵活和简便，支持即时应用配置而不需要重启防火墙。

## 基础概念 🛡️

`firewalld` 采用区域（Zone）和服务（Service）的方法来定义防火墙规则。每个区域包含一组规则，这些规则适用于该区域内的网络接口。

- **区域（Zone）**: 定义了不同类型的网络环境，如家庭网络、工作网络等，每个区域有不同的默认防火墙规则。
- **服务（Service）**: 定义了应用层协议，如 HTTP、SSH 等，可以通过指定服务名来允许或拒绝流量。

## 基础语法 📜

```bash
firewall-cmd [选项]
```

`firewall-cmd` 是与 `firewalld` 交互的命令行工具，常用来查看状态、配置规则、添加或删除服务等。

## 常用命令 🔧

| 命令                         | 描述                                                     |
|------------------------------|----------------------------------------------------------|
| `firewall-cmd --state`        | 查看 `firewalld` 的当前状态（是否运行中）。               |
| `firewall-cmd --get-active-zones` | 查看当前活动的区域。                                   |
| `firewall-cmd --list-all`     | 查看当前区域的所有防火墙规则。                           |
| `firewall-cmd --zone=zone --add-service=service` | 启用指定区域的指定服务（如 HTTP）。               |
| `firewall-cmd --zone=zone --remove-service=service` | 禁用指定区域的指定服务。                            |
| `firewall-cmd --zone=zone --add-port=port` | 启用指定端口。                                        |
| `firewall-cmd --zone=zone --remove-port=port` | 禁用指定端口。                                        |
| `firewall-cmd --reload`       | 重新加载防火墙配置。                                   |
| `firewall-cmd --permanent`    | 永久生效，防止重启后失效。                             |

## 示例 🌟

### 示例 1: 查看防火墙状态 🔄

```bash
firewall-cmd --state
```
输出示例：
```
running
```
此命令显示 `firewalld` 的当前状态，如果返回 `running`，表示防火墙正在运行。

### 示例 2: 查看当前活动区域 🏙️

```bash
firewall-cmd --get-active-zones
```
输出示例：
```
public
  interfaces: ens33
```
此命令显示当前活动的区域（如 `public`）及其所关联的网络接口。

### 示例 3: 查看当前区域的所有规则 📜

```bash
firewall-cmd --zone=public --list-all
```
输出示例：
```
public (active)
  target: default
  icmp-block-inversion: no
  interfaces: ens33
  sources: 
  services: ssh dhcpv6-client http
  ports: 8080/tcp
  protocols: 
  masquerade: no
  forward-ports: 
  rich rules: 
```
此命令显示 `public` 区域的所有防火墙规则。

### 示例 4: 启用 HTTP 服务 🌐

```bash
firewall-cmd --zone=public --add-service=http
```
此命令将 HTTP 服务添加到 `public` 区域，允许 HTTP 流量通过防火墙。

### 示例 5: 禁用 HTTP 服务 🚫

```bash
firewall-cmd --zone=public --remove-service=http
```
此命令将 HTTP 服务从 `public` 区域移除，禁止 HTTP 流量通过防火墙。

### 示例 6: 启用端口 8080 🔓

```bash
firewall-cmd --zone=public --add-port=8080/tcp
```
此命令将端口 8080/tcp 添加到 `public` 区域，允许 TCP 流量通过该端口。

### 示例 7: 重新加载防火墙配置 🔄

```bash
firewall-cmd --reload
```
此命令重新加载防火墙配置，使所有更改生效。

### 示例 8: 永久添加服务 🏅

```bash
firewall-cmd --zone=public --add-service=http --permanent
```
此命令将 HTTP 服务永久添加到 `public` 区域，即使系统重启后仍然生效。

## 注意事项 ⚠️

1. **`--permanent` 参数**: 使用该参数时，配置更改会在防火墙重新加载后永久生效。没有此参数时，配置更改仅在当前会话有效。
2. **权限要求**: 修改防火墙配置需要 root 权限。
3. **查看更改**: 配置更改后，使用 `firewall-cmd --list-all` 查看当前区域的规则。
4. **防火墙重载**: 每次配置更改后，最好执行 `firewall-cmd --reload` 来应用配置。

## 总结 ✅

`firewalld` 是一个功能强大的防火墙管理工具，采用了基于区域和服务的灵活控制方式。通过掌握 `firewall-cmd` 命令，系统管理员可以有效地管理和配置 Linux 系统的防火墙，保障系统的安全性。

---

希望这篇教程对您有所帮助！如有任何修改需求，请随时告知！ 😊