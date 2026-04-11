# Multi-tab and Workspace Management

## 1. Image Loading

By default, TabPaint automatically loads all images in the folder.
- This feature can be disabled in `Settings`.

::: info Difference in `File` Menu Open Modes
- **Open**: Opens a single image and adds it to the Image Bar.
- **Open New Workspace**: Closes all images currently in the Image Bar and loads all content from the target folder.
:::

## 2. Files and Autosave Mechanism

- Every edit is automatically saved in real-time to the system cache directory:
  `C:\Users\Username\AppData\Local\TabPaint`. Changes are automatically restored **on the next startup**. When you press <kbd>Ctrl</kbd> + <kbd>S</kbd>, the modifications will finally overwrite the original image file.
- Press <kbd>Ctrl</kbd> + <kbd>N</kbd> or click the **`+`** icon on the ImageBar to create a new canvas.

::: info 💾 Original File Protection
When doodling, cropping, or adjusting in TabPaint, all modifications **are not immediately written to the original file**.
:::

## 3. Batch Management Tools

| Button Function | Description |
| :--- | :--- |
| **💾 Save All Edited Images** | Writes all modifications to the original files. |
| **❌ Close All Unedited Images** | Cleans up the workspace, keeping only the modified images. |
| **↩️ Discard All Changes** | Clears the cache and resets to the original state on disk. |
