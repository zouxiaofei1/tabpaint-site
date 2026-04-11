#!/usr/bin/env python3
"""
图片批量转换为同名 WebP 格式脚本
支持格式: PNG, JPG, JPEG, BMP, TIFF, GIF
用法: python convert_to_webp.py [目录路径] [--quality 80] [--recursive] [--delete-original]
"""

import argparse
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("❌ 请先安装 Pillow: pip install Pillow")
    sys.exit(1)

# 支持的图片扩展名
SUPPORTED_EXTENSIONS = {".png", ".jpg", ".jpeg", ".bmp", ".tiff", ".tif", ".gif"}


def convert_to_webp(
    image_path: Path,
    quality: int = 80,
    delete_original: bool = False,
) -> bool:
    """将单张图片转换为同名 webp 文件"""
    output_path = image_path.with_suffix(".webp")

    # 跳过已存在的 webp 文件
    if output_path.exists():
        print(f"⏭️  跳过 (已存在): {output_path.name}")
        return False

    try:
        with Image.open(image_path) as img:
            # 处理 RGBA 模式（透明通道）
            if img.mode in ("RGBA", "LA") or (
                img.mode == "P" and "transparency" in img.info
            ):
                img = img.convert("RGBA")
            else:
                img = img.convert("RGB")

            # 保存为 webp
            img.save(output_path, "WEBP", quality=quality, method=6)

        # 计算压缩信息
        original_size = image_path.stat().st_size
        new_size = output_path.stat().st_size
        ratio = (1 - new_size / original_size) * 100 if original_size > 0 else 0

        print(
            f"✅ {image_path.name} -> {output_path.name} "
            f"({format_size(original_size)} -> {format_size(new_size)}, "
            f"{'节省' if ratio > 0 else '增加'} {abs(ratio):.1f}%)"
        )

        # 删除原文件
        if delete_original:
            image_path.unlink()
            print(f"   🗑️  已删除原文件: {image_path.name}")

        return True

    except Exception as e:
        print(f"❌ 转换失败 {image_path.name}: {e}")
        return False


def format_size(size_bytes: int) -> str:
    """格式化文件大小"""
    for unit in ("B", "KB", "MB", "GB"):
        if size_bytes < 1024:
            return f"{size_bytes:.1f}{unit}"
        size_bytes /= 1024
    return f"{size_bytes:.1f}TB"


def main():
    parser = argparse.ArgumentParser(description="批量将图片转换为 WebP 格式")
    parser.add_argument(
        "directory",
        nargs="?",
        default=".",
        help="图片所在目录 (默认: 当前目录)",
    )
    parser.add_argument(
        "-q", "--quality",
        type=int,
        default=80,
        help="WebP 质量 1-100 (默认: 80)",
    )
    parser.add_argument(
        "-r", "--recursive",
        action="store_true",
        help="递归处理子目录",
    )
    parser.add_argument(
        "-d", "--delete-original",
        action="store_true",
        help="转换成功后删除原文件",
    )

    args = parser.parse_args()
    directory = Path(args.directory)

    if not directory.is_dir():
        print(f"❌ 目录不存在: {directory}")
        sys.exit(1)

    # 收集所有图片文件
    if args.recursive:
        files = [
            f for f in directory.rglob("*")
            if f.suffix.lower() in SUPPORTED_EXTENSIONS
        ]
    else:
        files = [
            f for f in directory.iterdir()
            if f.is_file() and f.suffix.lower() in SUPPORTED_EXTENSIONS
        ]

    if not files:
        print(f"⚠️  在 {directory} 中未找到支持的图片文件")
        print(f"   支持的格式: {', '.join(SUPPORTED_EXTENSIONS)}")
        sys.exit(0)

    files.sort()

    print(f"📁 目录: {directory.resolve()}")
    print(f"🔍 找到 {len(files)} 个图片文件")
    print(f"⚙️  质量: {args.quality}")
    print("-" * 60)

    success_count = 0
    for f in files:
        if convert_to_webp(f, args.quality, args.delete_original):
            success_count += 1

    print("-" * 60)
    print(f"🎉 完成! 成功转换 {success_count}/{len(files)} 个文件")


if __name__ == "__main__":
    main()
