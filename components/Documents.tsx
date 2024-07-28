import { adminDb } from "@/firebaseAdmin";
import { auth } from "@clerk/nextjs/server";
import DocumentViewer from "./Document";
import PlaceholderDocument from "./PlaceholderDocument";
import { pdfjs } from "react-pdf";

async function Documents() {
  auth().protect();

  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not found");
  }

  const documentSnapshot = await adminDb
    .collection("users")
    .doc(userId)
    .collection("files")
    .get();

  return (
    <div className="flex flex-wrap p-10 justify-center lg:justify-start rounded-sm gap-20 max-w-7xl mx-auto">
      {/* Map through the documents */}

      {documentSnapshot.docs.map((doc) => {
        const { name, downloadUrl, size } = doc.data();

        return (
          <DocumentViewer
            key={doc.id}
            id={doc.id}
            name={name}
            size={size}
            // file={downloadUrl}
            downloadUrl={downloadUrl}
          />
        );
      })}

      <PlaceholderDocument />
    </div>
  );
}

export default Documents;
