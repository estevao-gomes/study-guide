import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Study Guide",
  description: "Study Guide",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="mt-8 flex min-h-screen flex-col items-center">
          <h1 className="my-4 text-3xl">Study Guide</h1>
          <nav className="w-full rounded-md border border-red-400 flex gap-4 py-2">
            <Link href="/" className="hover:opacity-50">Home</Link>
            <Link href="/studyCards" className="hover:opacity-50">Cards</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
