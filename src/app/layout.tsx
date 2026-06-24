import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "K4NE | Software Developer Portfolio",
  description:
    "K4NE (Muvunyi Hidjazi) – Software developer crafting futuristic digital experiences. Explore projects, skills, and interactive 3D playground.",
  keywords: [
    "K4NE",
    "Muvunyi Hidjazi",
    "Software Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Rwanda",
  ],
  openGraph: {
    title: "K4NE | Software Developer Portfolio",
    description:
      "Software developer crafting futuristic digital experiences.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
