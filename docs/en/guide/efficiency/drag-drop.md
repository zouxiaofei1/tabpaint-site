# Drag & Drop and Clipboard

TabPaint allows data flow between the desktop and Office software via drag-and-drop and the clipboard.

## 1. From TabPaint to External Apps

### Drag Selection
Dragging a selected area outside the program window can trigger these actions:

- **Drag to Desktop/Folder**: Generates a temporary image file (`.png`) containing the selection.
- **Drag to Word/PPT/WeChat**: Inserts the selection as an image into the document.

![Drag & Drop](/drag-drop-1.gif)

### Drag Full Image (Thumbnail)
Dragging an image tab outside the program window can trigger these actions:

- **Drag to Desktop**: Equivalent to "copying the file" to the desktop.
- **Drag to Word/PPT**: Inserts the entire image directly.

::: tip 💡 Single Image Mode
When only one image is open, you can directly **drag the TabPaint Logo** in the top-left corner; it functions the same as dragging a thumbnail.
:::

## 2. From External Apps to TabPaint

### Dragging Files into the Window
When dragging image files from the desktop or File Explorer into TabPaint:

| Release Location | Effect |
| :--- | :--- |
| **Canvas Area** | Adds the image as a **new selection** to the current image. |
| **Image Bar Area** | Opens the image as a **new tab**. |
| **Title Bar Area** | **Switches Workspace**, loading the folder containing the image as the current working directory. |

![Drag & Drop](/drag-drop-2.gif)

### Clipboard Listening
After enabling listening mode with `Ctrl + Alt + P`, TabPaint will automatically open new screenshots as new tabs.

## 3. Internal Data Flow

### Carrying Selection Across Tabs

1. Create a **selection** on Image A.
2. Drag the selection and move it over the **thumbnail of Image B**.
3. **Wait for 1s**, the view will switch to Image B, carrying the selected content.

![Drag & Drop](/drag-drop-3.gif)

### Dragging Other Image Tabs to Canvas
Adds the image as a selection.
