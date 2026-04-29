import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const Auth: Metadata = {
  title: "My App",
  description: "My Next.js App",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* ✅ Header */}
        <header className="bg-black text-white p-4 flex justify-between">
          <h1 className="font-bold text-lg">My App</h1>
          <nav className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/review/1">Review</Link>
          </nav>
        </header>

        {/* ✅ Main Content */}
        <main className="flex-grow p-4">
          {children}
        </main>

        {/* ✅ Footer */}
        <footer className="bg-gray-200 text-center p-4">
          <p>© 2026 My App. All rights reserved.</p>
        </footer>

      </body>
    </html>
  );
}