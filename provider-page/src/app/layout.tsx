import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope, } from "next/font/google";
import "../styles/globals.css";

// Import Manrope instead of Inter
const manrope = Manrope({ subsets: ['latin'], weight: ['200', '400', '700'] });

// Geist Fonts for additional styles
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for SEO
export const metadata: Metadata = {
  title: "Provider Page",
  description: "Discover and learn more about our test.",
};

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
