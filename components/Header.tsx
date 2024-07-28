"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import { FilePlus2, FileText } from "lucide-react";
import Link from "next/link";
import { DarkMode } from "./DarkMode";
import { Button } from "./ui/button";
import UpgradeButton from "./UpgradeButton";
import useSubscription from "@/hooks/useSubscription";

function Header() {
  const { hasActiveMembership } = useSubscription();
  return (
    <div className="w-[95%] mx-auto mt-2 flex justify-between items-center sm:border sm:rounded-full drop-shadow-sm p-3 border-b mb-2 dark:drop-shadow-gray-200">
      <Link
        href="/dashboard"
        className="flex items-center text-2xl rounded-full border-2 border-gray-200 dark:border-gray-400"
      >
        <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white dark:bg-gray-400 mr-2">
          <FileText className="text-indigo-600" />
        </div>

        <span className="pr-1">PDF</span>
        <span className="text-indigo-600 pr-4">ToolKit</span>
      </Link>

      <SignedIn>
        <div className="flex items-center space-x-3">
          <Button
            asChild
            variant="link"
            className="hidden md:flex"
            title="View documents"
          >
            <Link href="/dashboard">Documents</Link>
          </Button>

          {!hasActiveMembership && (
            <Button
              asChild
              variant="outline"
              className="hidden md:flex"
              title="See Pricing Details"
            >
              <Link href="/dashboard/upgrade">Pricing</Link>
            </Button>
          )}

          <Button asChild variant="outline" title="Upload document">
            <Link href="/dashboard/upload">
              <FilePlus2 className="text-indigo-600" />
            </Link>
          </Button>

          {/* Upgrade Button */}
          <UpgradeButton />

          {/* Settings Cog - Toggle Theme */}
          <DarkMode />

          {/* User Account */}
          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}

export default Header;
