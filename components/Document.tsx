"use client";

import { useRouter } from "next/navigation";
import { Document, pdfjs, Thumbnail } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function DocumentViewer({
  id,
  //   file,
  name,
  size,
  downloadUrl,
}: {
  id: string;
  //   file: string;
  name: string;
  size: string;
  downloadUrl: string;
}) {
  const router = useRouter();

  return (
    <div className="flex flex-col w-64 h-80 rounded-xl bg-white drop-shadow-md justify-between p-4 transition-all transform hover:scale-105 hover:bg-indigo-600 hover:text-white cursor-pointer group">
      <div
        className="flex-1"
        onClick={() => {
          router.push(`/dashboard/files/${id}`);
        }}
      >
        <p className="font-semibold line-clamp-2">{name}</p>
        <p className="text-sm text-gray-500 group-hover:text-indigo-100">
          {size}
        </p>
      </div>
      <div className="flex rounded-lg">
        <Document
          loading={null}
          file={downloadUrl}
          className="h-60 w-52 overflow-hidden rounded-lg"
        >
          <Thumbnail className="shadow-lg" pageNumber={1} />
        </Document>
      </div>
    </div>
  );
}
export default DocumentViewer;
