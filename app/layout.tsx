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
  title: "Twist — 3D Puzzle Studio",
  description: "Explore and solve interactive 3D twisty puzzles from 2×2 to 5×5.",

  icons: {
    icon: "/rubiks.png",
    shortcut: "/rubiks.png",
    apple: "/rubiks.png",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}

