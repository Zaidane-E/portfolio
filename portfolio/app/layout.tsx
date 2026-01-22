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
    default: "Zaidane El Haouari - Software Engineer",
    template: "%s | Zaidane El Haouari",
  },
  description:
    "Software Engineering New Grad with professional CO-OP experience in DevOps, backend development, automation, and web systems.",
  keywords: [
    "software engineer",
    "full-stack developer",
    "DevOps",
    "Python",
    "React",
    "C#",
  ],
  authors: [{ name: "Zaidane El Haouari" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Zaidane El Haouari",
    title: "Zaidane El Haouari - Software Engineer",
    description:
      "Software Engineering New Grad with professional CO-OP experience in DevOps, backend development, automation, and web systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaidane El Haouari - Software Engineer",
    description:
      "Software Engineering New Grad with professional CO-OP experience in DevOps, backend development, automation, and web systems.",
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
