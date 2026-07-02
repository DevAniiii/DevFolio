import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono, Syncopate, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import TargetCursor from "@/components/TargetCursor";
import ClickSpark from "@/components/ClickSpark";
import GSAPProvider from "@/components/GSAPProvider";
import Warp from "@/components/ui/Warp";
import Navbar from "@/components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syncopate = Syncopate({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-syncopate",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "800"],
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const siteUrl = "https://anirbanbanerjee.dev";
const siteName = "Anirban Banerjee Portfolio";
const defaultTitle = "Anirban Banerjee | Full Stack & MERN Developer";
const description =
  "Portfolio of Anirban Banerjee, a Full Stack and MERN Stack developer building modern, scalable web applications, internship projects, and interactive digital experiences.";
const socialImage = "/assets/images/common/portfoliov2.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description,
  applicationName: siteName,
  keywords: [
    "Anirban Banerjee",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js portfolio",
    "React developer portfolio",
    "web developer",
    "software developer",
    "internship portfolio",
  ],
  authors: [{ name: "Anirban Banerjee" }],
  creator: "Anirban Banerjee",
  publisher: "Anirban Banerjee",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description,
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Anirban Banerjee portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description,
    images: [socialImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syncopate.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0A0A0F]">
        <Warp />
        <ClickSpark
          sparkColor="#39579d"
          sparkSize={8}
          sparkRadius={10}
          sparkCount={6}
          duration={400}
        >
          <Navbar />
          <TargetCursor
            spinDuration={2}
            hideDefaultCursor
            parallaxOn
            hoverDuration={0.2}
            cursorColor="#2167AB"
            cursorColorOnTarget="#2167AB"
          />

          <GSAPProvider>{children}</GSAPProvider>
        </ClickSpark>
      </body>
    </html>
  );
}
