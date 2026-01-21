# 常见问题 (FAQ)



### Q: AI 抠图功能需要联网吗？
**A: 不需要。**
TabPaint 的 AI 抠图功能完全基于本地模型运行。联网仅在下载运行库时可能需要。

### Q: 为什么点击 AI 抠图没有反应或报错？
**A: 缺少必要的系统运行库。**
AI 抠图功能依赖微软的 C++ 运行库。请安装下方组件后重试：

::: tip 解决方案
**Visual C++ Redistributable for Visual Studio 2015-2022 (x64)**

[👉 点击下载官方安装包 (vc_redist.x64.exe)](https://aka.ms/vs/17/release/vc_redist.x64.exe)
:::

### Q: OCR 文字识别无法使用？
A: 
OCR 功能调用了 Windows 原生的视觉 API。此功能要求操作系统版本至少为 **Windows 10 (1809版本)** 或更高。

---


### Q: 画笔绘图时感觉有延迟或卡顿？
**A: 请尝试调整显卡设置。**

1. 打开 Windows **设置** -> **系统** -> **屏幕** -> **显示卡**。
2. 在列表中找到 TabPaint（如果没有，请手动浏览添加 `TabPaint.exe`）。
3. 点击 **选项**，将其设置为 **“高性能”** (使用独立显卡)。
4. 重启软件。

### Q: 软件支持哪些图片格式？
**A: 支持目前绝大多数主流格式。**
TabPaint 能够打开和编辑以下格式：
*   **常用格式**: JPG, PNG, BMP, WEBP, TIF, ICO, HEIC
*   **动图**: GIF (支持查看与播放)

---

## 🔧 其他

### Q: 遇到了其他 Bug 或有功能建议？
欢迎在 GitHub 上提交 Issue，我们会尽快跟进。

[👉 前往 GitHub 提交反馈](https://github.com/zouxiaofei1/TabPaint/issues)
