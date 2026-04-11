# FAQ

### Q: Does the AI Background Removal feature require an internet connection?
**A: No.**
TabPaint's AI background removal runs entirely on a local model. Internet access is only needed if you need to download the runtime libraries.

### Q: Why is there no response or an error when clicking AI Background Removal?
**A: Missing necessary system runtime libraries.**
The AI removal feature depends on Microsoft C++ runtime libraries. Please install the following component and try again:

::: tip Solution
**Visual C++ Redistributable for Visual Studio 2015-2022 (x64)**

[👉 Click to download official installer (vc_redist.x64.exe)](https://aka.ms/vs/17/release/vc_redist.x64.exe)
:::

### Q: Why is OCR Text Recognition not working?
**A:**
The OCR feature calls the native Windows Vision API. This requires an operating system version of at least **Windows 10 (version 1809)** or higher.

---

### Q: Feeling lag or stuttering during painting?
**A: Please try adjusting your graphics card settings.**

1. Open Windows **Settings** -> **System** -> **Display** -> **Graphics**.
2. Find TabPaint in the list (if not present, manually browse and add `TabPaint.exe`).
3. Click **Options** and set it to **"High Performance"** (use discrete graphics).
4. Restart the software.

### Q: Which image formats are supported?
**A: Most mainstream formats are supported.**
TabPaint can open and edit the following formats:
*   **Common Formats**: JPG, PNG, BMP, WEBP, TIF, ICO, HEIC
*   **Animated**: GIF (supports viewing and playback)

---

## 🔧 Others

### Q: Encountered other bugs or have feature suggestions?
Feel free to submit an Issue on GitHub; we will follow up as soon as possible.

[👉 Submit feedback on GitHub](https://github.com/zouxiaofei1/TabPaint/issues)
