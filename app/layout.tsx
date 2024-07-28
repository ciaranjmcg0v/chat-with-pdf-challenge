import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from '@/components/ui/toaster'
import "./globals.css";

// metadata for title
export const metadata = {
  title: "PDF Toolkit",
  description:
    "PDF Toolkit is a SaaS that allows users to upload and interact with PDF files utilizing the power of AI.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Delicious+Handrawn&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen h-screen overflow-hidden flex flex-col font-montserrat font-medium">
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
};

export default RootLayout;