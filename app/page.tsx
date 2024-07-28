import { Button } from "@/components/ui/button";
import { features } from "@/data/landing";
import {
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex-1 overflow-y-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-[#7c3aed] select-none">
      <div className="py-12 sm:py-16 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-6xl sm:text-7xl font-semibold leading-7 text-[#7c3aed]">
              PDF Toolkit
            </h2>

            {/* Custom Font - handwriting style */}
            <p className="mt-12 text-5xl font-deliciousHandrawn tracking-tight text-red-500 sm:text-4xl">
              Transform your PDFs into interactive conversations
            </p>

            <div className="mt-6">
              <div className="opacity-70 transition-opacity duration-1000 bg-gradient-to-r from-purple-100 to-gray-200 p-6 rounded-lg shadow-lg hover:opacity-100">
                <p className="text-black">
                  Upload your document and let our intelligent chatbot transform
                  your experience. It will answer your questions, summarize
                  content, and provide detailed insights effortlessly. Perfect
                  for anyone,{" "}
                  <span className="text-[#7c3aed] font-bold">PDF Toolkit</span>{" "}
                  brings your static documents to life, turning them into{" "}
                  <span className="font-bold">dynamic conversations</span>.
                  Enhance your productivity tenfold with features like real-time
                  Q&A, detailed summaries, content extraction, and more.
                </p>
              </div>
            </div>
          </div>

          <Button
            asChild
            className="mt-10 hover:border border-white hover:bg-purple-500 hover:scale-110 transition-all transform hover:animate-bounce"
          >
            <Link href="/dashboard">
              Get Started <ArrowRight className="w-5 h-5 text-white dark:text-black ml-2" />{" "}
            </Link>
          </Button>
        </div>

        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              src="https://i.imgur.com/VciRSTI.jpeg"
              alt="App Screenshot"
              width={2432}
              height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute bottom-0 left-0 right-0 rounded-lg -inset-x-32 bg-gradient-to-t from-purple-400/60 pt-[5%]" />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none 
          lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"
          >
            {/* Feature Cards */}
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col items-center justify-center border border-indigo-500/30 rounded-lg shadow-lg cursor-pointer select-none hover:scale-105 transition-all bg-white/70 p-4"
              >
                <dt className="flex items-center justify-center p-2 font-semibold text-gray-900">
                  <feature.icon
                    aria-hidden="true"
                    className="h-5 w-5 text-[#7c3aed]"
                  />
                </dt>
                <dd className="pb-2 text-center">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
