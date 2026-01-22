import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Alex Chen - Software Engineer",
    template: "%s | Alex Chen",
  },
  description:
    "Software engineer focused on building performant, accessible, and maintainable applications. Specializing in full-stack development, distributed systems, and developer tooling.",
  keywords: [
    "software engineer",
    "full-stack developer",
    "TypeScript",
    "Go",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Alex Chen" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Alex Chen",
    title: "Alex Chen - Software Engineer",
    description:
      "Software engineer focused on building performant, accessible, and maintainable applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Chen - Software Engineer",
    description:
      "Software engineer focused on building performant, accessible, and maintainable applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white font-sans text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100`}
      >
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
