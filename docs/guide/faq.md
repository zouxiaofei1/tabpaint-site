# 常见问题 (FAQ)



### 程序需要联网吗？
画图和AI功能完全支持本地运行。下载模型时需要联网。

### 点击 AI 抠图时没有反应或报错？
AI 抠图功能依赖微软的 C++ 运行库。安装下方组件后重试：

[Visual C++ Redistributable for Visual Studio 2015-2022 (x64) (vc_redist.x64.exe)](https://aka.ms/vs/17/release/vc_redist.x64.exe)


### OCR 文字识别无法使用
A: 
OCR 功能调用了 Windows 原生的视觉 API。操作系统版本需要为 **Windows 10 (1809)** 或更高。

PaddleOCR 正在调试中，不稳定是正常的。

---


### 画笔绘图时感觉有延迟或卡顿
尝试调整显卡设置

1. 打开 Windows **设置** -> **系统** -> **屏幕** -> **显示卡**。
2. 在列表中找到 TabPaint（如果没有，请手动浏览添加 `TabPaint.exe`）。
3. 点击 **选项**，将其设置为 **“高性能”** (使用独立显卡)。
4. 重启软件。

### 支持图片格式列表
完全支持: JPG, PNG, BMP, WEBP, TIF, ICO, HEIC, HEIF

仅查看，无法正确保存: GIF, SVG, PSD

### 是否支持Win7 - Win8.1
安装额外运行库后可支持大多数功能
[链接](https://wwauw.lanzouu.com/iTuS63mns0qd)

使用中如遇到问题，我们会尽可能解决

###  遇到了其他 Bug 或有功能建议？
[欢迎在 GitHub 上提交 Issue，我们会尽快跟进。](https://github.com/zouxiaofei1/TabPaint/issues)
