import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Background3D from "@/components/Background3D";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "devs-prompt | Transform Ideas into Developer-Grade Prompts",
  description: "Transform your raw ideas into world-class developer prompts using AI. Get precise, professional prompts that follow software engineering best practices.",
  keywords: ["AI", "prompts", "developer tools", "software engineering", "GPT", "prompt engineering"],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased flex flex-col min-h-screen`}>
        <Background3D />
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
