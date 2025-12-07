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
  title: "Nelson Medel | Product Manager Digital & Desarrollador IA",
  description: "Portafolio de Nelson Medel - Uniendo la Visión de Producto con la Ejecución Inteligente.",
};

import ThemePicker from "@/components/theme-picker";
import ChatInterface from "@/components/chat-interface";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground transition-colors duration-500`}
      >
        <ThemePicker />
        <ChatInterface />
        {children}
      </body>
    </html>
  );
}
