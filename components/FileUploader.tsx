"use client";
import { CircleArrowDown, RocketIcon } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const formatFileSize = (size: number): string => {
  if (size < 1024) return `${size} bytes`;
  const i = Math.floor(Math.log(size) / Math.log(1024));
  const sizes = ["bytes", "KB", "MB", "GB", "TB"];
  return `${(size / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
};

const determineFileType = (type: string): string => {
  if (type.startsWith("image/")) return "Image";
  if (type.startsWith("video/")) return "Video";
  if (type.startsWith("audio/")) return "Audio";
  if (type.startsWith("text/")) return "Text";
  return "Other";
};

function FileUploader() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const { lastModified, name, size, type } = file;

      const fileDetails = {
        name,
        "last modified": new Date(lastModified).toISOString(),
        size: formatFileSize(size),
        type: determineFileType(type),
      };

      console.log(fileDetails);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } =
    useDropzone({
      onDrop,
    });
  return (
    <div className="flex flex-col gap-4 items-center max-w-7xl mx-auto">
      {/* Loading section - Tomorrow! */}
      <div
        {...getRootProps()}
        className={`p-10 border-2 border-dashed mt-10 w-[90%] border-indigo-600 text-indigo-600 rounded-lg h-96 flex items-center justify-center ${
          isFocused || isDragAccept ? "bg-indigo-300" : "bg-indigo-100"
        }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center">
          {isDragActive ? (
            <>
              <RocketIcon className="h-20 w-20 animate-ping" />
              <p>Drop the files here..</p>
            </>
          ) : (
            <>
              <CircleArrowDown className="h-20 w-20 animate-bounce" />
              <p>Drag 'n' Drop some files here, or click to select files</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FileUploader;
