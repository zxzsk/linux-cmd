---
slug: /71a90b23
---
## lscpu用途

lscpu 用于查看主机CPU信息

```bash
➜  ~ lscpu
架构：                    x86_64
  CPU 运行模式：          32-bit, 64-bit
  Address sizes:          43 bits physical, 48 bits virtual
  字节序：                Little Endian
CPU:                      12
  在线 CPU 列表：         0-11
厂商 ID：                 AuthenticAMD
  型号名称：              AMD Ryzen 5 3600 6-Core Processor
    CPU 系列：            23
    型号：                113
    每个核的线程数：      2
    每个座的核数：        6
    座：                  1
    步进：                0
    Frequency boost:      enabled
    CPU(s) scaling MHz:   55%
    CPU 最大 MHz：        4208.2031
    CPU 最小 MHz：        2200.0000
    BogoMIPS：            7186.99
    标记：                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat
                           pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pd
                          pe1gb rdtscp lm constant_tsc rep_good nopl xtopology nonstop_tsc 
                          cpuid extd_apicid aperfmperf rapl pni pclmulqdq monitor ssse3 fma
                           cx16 sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand lahf_l
                          m cmp_legacy svm extapic cr8_legacy abm sse4a misalignsse 3dnowpr
                          efetch osvw ibs skinit wdt tce topoext perfctr_core perfctr_nb bp
                          ext perfctr_llc mwaitx cpb cat_l3 cdp_l3 hw_pstate ssbd mba ibpb 
                          stibp vmmcall fsgsbase bmi1 avx2 smep bmi2 cqm rdt_a rdseed adx s
                          map clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 cqm_llc cqm_oc
                          cup_llc cqm_mbm_total cqm_mbm_local clzero irperf xsaveerptr rdpr
                          u wbnoinvd arat npt lbrv svm_lock nrip_save tsc_scale vmcb_clean 
                          flushbyasid decodeassists pausefilter pfthreshold avic v_vmsave_v
                          mload vgif v_spec_ctrl umip rdpid overflow_recov succor smca sev 
                          sev_es
Virtualization features:  
  虚拟化：                AMD-V
Caches (sum of all):      
  L1d:                    192 KiB (6 instances)
  L1i:                    192 KiB (6 instances)
  L2:                     3 MiB (6 instances)
  L3:                     32 MiB (2 instances)
NUMA:                     
  NUMA 节点：             1
  NUMA 节点0 CPU：        0-11
Vulnerabilities:          
  Gather data sampling:   Not affected
  Itlb multihit:          Not affected
  L1tf:                   Not affected
  Mds:                    Not affected
  Meltdown:               Not affected
  Mmio stale data:        Not affected
  Reg file data sampling: Not affected
  Retbleed:               Mitigation; untrained return thunk; SMT enabled with STIBP protec
                          tion
  Spec rstack overflow:   Mitigation; Safe RET
  Spec store bypass:      Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:             Mitigation; usercopy/swapgs barriers and __user pointer sanitizat
                          ion
  Spectre v2:             Mitigation; Retpolines; IBPB conditional; STIBP always-on; RSB fi
                          lling; PBRSB-eIBRS Not affected; BHI Not affected
  Srbds:                  Not affected
  Tsx async abort:        Not affected

```

## 结果分析

### 基本信息
- **架构**：显示 CPU 的架构类型，例如 `x86_64` 表示 64 位架构。
- **CPU 运行模式**：支持的运行模式，例如 32 位和 64 位。
- **字节序**：指示 CPU 的字节序，`Little Endian` 表示低字节在前。

### CPU 配置
- **CPU 数量**：显示逻辑 CPU 的总数。
- **每个核的线程数**：每个物理核心支持的线程数。
- **每个座的核数**：每个 CPU 插槽的核心数量。
- **频率**：显示 CPU 的最大和最小频率，以及当前的频率缩放比例。

### 缓存信息
- **L1d/L1i/L2/L3**：显示各级缓存的大小和实例数量。

### 虚拟化支持
- **虚拟化**：显示 CPU 是否支持虚拟化技术，例如 `AMD-V`。

### NUMA 配置
- **NUMA 节点**：显示 NUMA（非统一内存访问）节点的数量和分配的 CPU。

### 安全漏洞
- **Vulnerabilities**：列出 CPU 的已知安全漏洞及其缓解措施。例如：
  - **Retbleed**：已通过未训练返回 thunk 和 SMT 的 STIBP 保护进行缓解。
  - **Spectre v1/v2**：通过用户拷贝屏障和 Retpolines 等技术进行缓解。
  - **Meltdown**：未受影响。
