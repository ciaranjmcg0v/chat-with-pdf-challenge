"use client";

import { deleteDocument } from "@/actions/deleteDocument";
import useSubscription from "@/hooks/useSubscription";
import { ArrowRight, DownloadCloud, Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Document, pdfjs, Thumbnail } from "react-pdf";
import { Button } from "./ui/button";
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
  const [isDeleting, startTransition] = useTransition();
  const { hasActiveMembership } = useSubscription();

  return (
    <div className="relative flex flex-col w-72 h-80 rounded-xl bg-gray-100 border dark:bg-gray-600 drop-shadow-md justify-evenly p-4 transition-all transform cursor-pointer group">
      <div className="flex flex-col">
        <p className="font-semibold line-clamp-2">{name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-300">{size}</p>
      </div>

      {/* Document */}
      <div className="flex rounded-lg h-48">
        <Document
          loading={null}
          file={downloadUrl}
          className="h-full w-full overflow-hidden rounded-lg hover:border-indigo-600/40 dark:hover:border-indigo-600/80"
        >
          <Thumbnail
            className="shadow-lg flex justify-center items-center"
            pageNumber={1}
            scale={0.3}
          />
        </Document>
      </div>

      {/* Actions */}
      <div className="absolute -top-6 -left-6 -right-6 flex items-center justify-between z-50 space-x-2">
        <Button
          variant="outline"
          asChild
          title="Download"
          className="bg-transparent h-8 w-8 p-0 rounded-full hover:bg-white"
        >
          <a href={downloadUrl} download target="_blank" rel="no-reffer">
            <DownloadCloud className="h-4 w-4 text-indigo-600" />
          </a>
        </Button>

        <Button
          title={!hasActiveMembership ? "PRO feature" : "Delete"}
          className={`flex items-center justify-center w-8 h-8 p-0 ${
            !hasActiveMembership
              ? "bg-gray-400"
              : "bg-transparent hover:bg-white"
          } rounded-full shadow-none border`}
          disabled={isDeleting}
          onClick={() => {
            if (!hasActiveMembership) {
              alert("Upgrade to delete documents");
            } else {
              const prompt = window.confirm(
                "Are you sure you want to delete this document?"
              );
              if (prompt) {
                // delete document
                startTransition(async () => {
                  // Delete the document from Firestore
                  await deleteDocument(id);
                });
              }
            }
          }}
        >
          {isDeleting ? (
            <span className="loading loading-spinner text-primary"></span>
          ) : (
            <Trash2Icon className="h-4 w-4 text-red-500 z-50" />
          )}
        </Button>
      </div>

      {/* Select document */}
      <div className="absolute -bottom-5 -right-5 z-50">
        <Button
          variant="outline"
          asChild
          title="View"
          className="bg-transparent h-6 w-6 p-0 rounded-full hover:text-white hover:bg-indigo-600"
          onClick={() => {
            router.push(`/dashboard/files/${id}`);
          }}
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
export default DocumentViewer;
