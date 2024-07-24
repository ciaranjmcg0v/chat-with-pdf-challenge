import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { FilePlus2, FileText  } from "lucide-react";

function Header() {
  return (
    <div className="w-[95%] mx-auto mt-2 flex justify-between items-center bg-gray-100 rounded-full drop-shadow-sm p-5 border-b">
      <Link href="/dashboard" className="flex items-center text-2xl rounded-full border border-gray-200">
       
       <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white mr-2">
        <FileText className="text-indigo-600" />
       </div>
       
       <span className="pr-1">Chat to </span><span className="text-indigo-600 pr-2">PDF</span>
      </Link>

      <SignedIn>
        <div className="flex items-center space-x-2">
          <Button asChild variant="link" className="hidden md:flex">
            <Link href="/dashboard/upgrade">Documents</Link>
          </Button>

          <Button asChild variant="outline" className="hidden md:flex">
            <Link href="/dashboard/upgrade">Pricing</Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/dashboard">Documents</Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/dashboard/upload">
              <FilePlus2 className="text-indigo-600" />
            </Link>
          </Button>

          {/* Upgrade Button */}
          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}

export default Header;
