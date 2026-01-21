# 安装与系统需求

本页将指导完成安装配置。

## 系统需求

TabPaint 支持 **Windows 10** 和 **Windows 11** 操作系统。

- **基础运行环境**: 需要 [.NET 8.0 Desktop Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) 或更高版本。

## 版本选择

为了满足不同用户的需求，我们提供了三个版本的安装包。请根据您的网络环境和使用习惯选择：

| 文件名 | 版本类型 | 说明与建议 |
| :--- | :--- | :--- |
| **TabPaint_Setup_Full.exe** | 完整安装包 | **✅ 推荐 **<br>安装包内**已包含**运行库，体积稍大 |
| **TabPaint_Setup_Lite.exe** | 在线安装包 | **轻量级**<br>安装包体积小。安装过程中会自动从微软服务器下载所需的运行库。 |
| **TabPaint_Portable.zip** | 绿色便携版 | **免安装**<br>解压即用，需要手动确保系统已安装 .NET 8.0 运行库。 |

## 安装步骤

### 使用安装包 (Setup)
1. 下载 `Setup_Full.exe` 或 `Setup_Lite.exe`。
2. 双击运行安装程序。
3. 按照提示完成安装，安装完成后可在开始菜单或桌面找到 TabPaint 图标。

### 使用便携版 (Portable)
1. 下载 `TabPaint_Portable.zip`。
2. 将压缩包解压到任意文件夹（建议不要放在 C 盘根目录以免权限不足）。
3. 进入文件夹，找到 `TabPaint.exe` 双击运行。

## 功能依赖组件

TabPaint 的部分高级功能（AI 抠图和 OCR）依赖特定的系统组件。如果这些功能无法使用，请检查以下配置：

### 1. AI 智能抠图
AI 抠图功能依赖微软的 C++ 运行库。如果您点击抠图没有反应或报错，请尝试安装下方组件：

::: info 下载 C++ 运行库
**Visual C++ Redistributable for Visual Studio 2015-2022 (x64)**  
👉 [点击下载官方安装包 (vc_redist.x64.exe)](https://aka.ms/vs/17/release/vc_redist.x64.exe)
:::

### 2. OCR 文字识别
OCR 功能直接调用 Windows 系统内置的识别引擎。

::: warning 系统版本提示
OCR 功能要求 **Windows 10 (1809版本)** 及以上。
如果您使用的是旧版 Win10 或精简版系统，该功能可能无法正常工作。
:::

---

**遇到安装问题？**
请前往 [常见问题](/guide/faq) 页面查看解决方案，或在 GitHub 上提交 Issue。
