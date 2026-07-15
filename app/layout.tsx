import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import BookNowBanner from "@/app/components/BookNowBanner";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { BRAND } from "@/app/lib/site-config";

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
    default: `${BRAND.name} | ${BRAND.tagline}`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    "Integrative medicine in Geneva, IL — chiropractic, regenerative medicine, PRP, peptide weight loss, cold laser, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-brand-ink">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
        <BookNowBanner />
      </body>
    </html>
  );
}
