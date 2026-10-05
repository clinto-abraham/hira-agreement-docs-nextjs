import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ciyo Software Enterprises",
  description: "Generated for Hira Farms Service Agreement and Commercial Proposal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
