import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shilpa Kumari — Full Stack Developer | TCS Digital Offer Holder",
  description:
    "Portfolio of Shilpa Kumari, Full Stack MERN Developer & Computer Science Engineer at LPU. TCS Digital Offer Holder (₹7 LPA), 500+ DSA Solved, Contest Tracker & SociaLink Creator.",
  keywords: [
    "Shilpa Kumari",
    "Full Stack Developer",
    "Software Engineer",
    "MERN Stack",
    "React",
    "Node.js",
    "TCS Digital",
    "LPU",
    "Portfolio"
  ],
  authors: [{ name: "Shilpa Kumari" }],
  metadataBase: new URL("https://shilpabytes.vercel.app"),
  openGraph: {
    title: "Shilpa Kumari — Full Stack Developer",
    description:
      "Full Stack MERN Developer, TCS Digital Offer Holder (₹7 LPA), 500+ DSA Problems Solved.",
    url: "https://shilpabytes.vercel.app",
    siteName: "Shilpa Kumari Portfolio",
    images: [
      {
        url: "/shilpa.jpg",
        width: 1200,
        height: 630,
        alt: "Shilpa Kumari Portrait",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shilpa Kumari — Full Stack Developer",
    description:
      "Full Stack MERN Developer, TCS Digital Offer Holder (₹7 LPA), 500+ DSA Problems Solved.",
    images: ["/shilpa.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${mono.variable} dark scroll-smooth`}>
      <body className="font-sans bg-[#09090b] text-[#fafafa] antialiased">
        {children}
      </body>
    </html>
  );
}
