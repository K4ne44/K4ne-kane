import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Muvunyi Hidjazi (K4NE) | Software Developer Portfolio",
  description:
    "Hi, I'm Muvunyi Hidjazi (K4NE), a 19-year-old Software Development student at SJITC, Rwanda. Building modern web applications, solving real-world problems through technology.",
  keywords: [
    "Muvunyi Hidjazi",
    "K4NE",
    "KANE",
    "Software Developer",
    "React Developer",
    "Full Stack Developer",
    "Rwanda",
    "SJITC",
    "Portfolio",
  ],
  openGraph: {
    title: "Muvunyi Hidjazi (K4NE) | Software Developer",
    description:
      "Software Development student at SJITC, Rwanda. Building modern web applications with React, Next.js, Node.js.",
    type: "website",
    locale: "en_US",
  },
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
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
