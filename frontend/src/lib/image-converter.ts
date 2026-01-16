import { saveAs } from 'file-saver';

/**
 * Load image file as HTMLImageElement
 */
export function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = URL.createObjectURL(file);
  });
}

/**
 * Convert image to canvas
 */
function imageToCanvas(img: HTMLImageElement): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not get canvas context');
  ctx.drawImage(img, 0, 0);
  return canvas;
}

/**
 * Convert canvas to blob
 */
function canvasToBlob(
  canvas: HTMLCanvasElement,
  format: 'png' | 'jpeg' | 'webp',
  quality: number = 0.92
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const mimeType = format === 'png' ? 'image/png' : format === 'jpeg' ? 'image/jpeg' : 'image/webp';
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error(`Failed to convert canvas to ${format}`));
        }
      },
      mimeType,
      quality
    );
  });
}

/**
 * Master image format converter
 */
export async function convertImageFormat(
  file: File,
  targetFormat: 'png' | 'jpeg' | 'webp',
  quality: number = 0.92
): Promise<Blob> {
  const img = await loadImage(file);
  const canvas = imageToCanvas(img);
  return canvasToBlob(canvas, targetFormat, quality);
}

/**
 * Convert JPEG to PNG
 */
export async function jpegToPng(file: File): Promise<void> {
  const blob = await convertImageFormat(file, 'png', 1.0);
  const fileName = file.name.replace(/\.(jpg|jpeg)$/i, '.png');
  saveAs(blob, fileName);
}

/**
 * Convert PNG to JPEG
 */
export async function pngToJpeg(file: File, quality: number = 0.92): Promise<void> {
  const blob = await convertImageFormat(file, 'jpeg', quality);
  const fileName = file.name.replace(/\.png$/i, '.jpg');
  saveAs(blob, fileName);
}

/**
 * Convert any image to WebP
 */
export async function toWebP(file: File, quality: number = 0.92): Promise<void> {
  const blob = await convertImageFormat(file, 'webp', quality);
  const fileName = file.name.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  saveAs(blob, fileName);
}

/**
 * Resize image to specific dimensions
 */
export async function resizeImage(
  file: File,
  maxWidth: number,
  maxHeight: number,
  quality: number = 0.92
): Promise<void> {
  const img = await loadImage(file);
  
  let width = img.naturalWidth;
  let height = img.naturalHeight;
  
  // Calculate new dimensions maintaining aspect ratio
  if (width > maxWidth || height > maxHeight) {
    const aspectRatio = width / height;
    if (width > height) {
      width = maxWidth;
      height = Math.round(width / aspectRatio);
    } else {
      height = maxHeight;
      width = Math.round(height * aspectRatio);
    }
  }
  
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not get canvas context');
  
  ctx.drawImage(img, 0, 0, width, height);
  
  // Determine output format from original file
  const isJpeg = /\.(jpg|jpeg)$/i.test(file.name);
  const format = isJpeg ? 'jpeg' : 'png';
  
  const blob = await canvasToBlob(canvas, format, quality);
  const fileName = file.name.replace(/\.(jpg|jpeg|png)$/i, `_resized.${format === 'jpeg' ? 'jpg' : 'png'}`);
  saveAs(blob, fileName);
}

/**
 * Get image dimensions
 */
export async function getImageDimensions(file: File): Promise<{ width: number; height: number }> {
  const img = await loadImage(file);
  return {
    width: img.naturalWidth,
    height: img.naturalHeight,
  };
}
