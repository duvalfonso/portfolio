import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Duvan Alfonso | Fullstack Developer",
  description:
    "Portafolio web de Duvan Alfonso. Desarrollo de aplicaciones web fullstack.",
  keywords: [
    "Duvan Alfonso",
    "Fullstack Developer",
    "Next.js",
    "Django",
    "Python",
    "React",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
