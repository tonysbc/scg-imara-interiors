import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Imara Interiors Design Co. | Conscious Luxury Interiors",
  description: "Bespoke interior design specializing in 'Conscious Luxury' and sustainable, timeless functionality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-brand-green selection:bg-brand-gold/30 selection:text-white`}
        suppressHydrationWarning
      >
        {/* Texture Overlay for the entire site - Persistent Global Layer */}
        <div className="fixed inset-0 -z-50 pointer-events-none opacity-[0.08] bg-grain mix-blend-overlay"></div>
        
        <Header />
        
        {children}
        
        <Footer />
      </body>
    </html>
  );
}
