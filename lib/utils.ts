import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatFileSize = (size: number): string => {
  if (size < 1024) return `${size} bytes`;
  const i = Math.floor(Math.log(size) / Math.log(1024));
  const sizes = ["bytes", "KB", "MB", "GB", "TB"];
  return `${(size / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
};

export const determineFileType = (type: string): string => {
  if (type.startsWith("image/")) return "Image";
  if (type.startsWith("video/")) return "Video";
  if (type.startsWith("audio/")) return "Audio";
  if (type.startsWith("text/")) return "Text";
  if (type.startsWith("pdf/")) return "PDF";
  return "Other";
};