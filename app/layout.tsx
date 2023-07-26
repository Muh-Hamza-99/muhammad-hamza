"use client";

import { ThemeProvider } from "next-themes";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="dark:bg-stone-900 scrollbar-thin scrollbar-track-white scrollbar-thumb-teal-500 dark:scrollbar-track-stone-900">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};