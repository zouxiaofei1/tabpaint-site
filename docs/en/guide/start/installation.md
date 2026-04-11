# Installation and System Requirements

This page will guide you through the installation and configuration process.

## System Requirements

TabPaint supports **Windows 10** and **Windows 11** operating systems.

- **Basic Runtime Environment**: Requires [.NET 8.0 Desktop Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or higher.

## Edition Selection

| Filename | Edition Type | Description & Recommendations |
| :--- | :--- | :--- |
| **TabPaint_Setup_Full.exe** | Full Installer | **Includes** runtime libraries, slightly larger file size. |
| **TabPaint_Setup_Lite.exe** | Online Installer | Small file size, automatically downloads runtime from Microsoft servers. |
| **TabPaint_Portable.zip** | Portable Version | Extract and run, requires manual installation of runtime. |

## Installation Steps

### Using Installer (Setup)
1. Download `Setup_Full.exe` or `Setup_Lite.exe`.
2. Double-click to run the installer.
3. Follow the prompts to complete installation. Once finished, you can find the TabPaint icon in the Start menu or on your desktop.

![TabPaint Main Interface](/en/installation.webp)

### Using Portable Version
1. Download `TabPaint_Portable.zip`.
2. Extract the archive to any folder.
3. Open the folder and double-click `TabPaint.exe` to run.

## Feature Dependencies

Some advanced features of TabPaint (AI Background Removal and OCR) depend on specific system components. If these features do not work, please check the following:

### 1. AI Intelligent Background Removal
The AI removal feature depends on Microsoft C++ runtime libraries. If clicking the removal button yields no response or an error, please try installing the following component:

::: info Download C++ Runtime
**Visual C++ Redistributable for Visual Studio 2015-2022 (x64)**  
👉 [Click to download official installer (vc_redist.x64.exe)](https://aka.ms/vs/17/release/vc_redist.x64.exe)
:::

### 2. OCR Text Recognition
The OCR feature calls the built-in recognition engine of the Windows system.

::: warning System Version Notice
OCR requires **Windows 10 (version 1809)** and above.
If you are using an older version of Win10 or a "Lite/Simplified" OS edition, this feature may not function correctly.
:::

---

**Encountering installation issues?**
Please visit the [FAQ](/en/guide/faq) page for solutions or submit an Issue on GitHub.
