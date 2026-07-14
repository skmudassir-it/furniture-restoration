import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "RevivalCraft Furniture Restoration — Expert Wood Restoration & Refinishing",
    template: "%s | RevivalCraft Furniture Restoration",
  },
  description:
    "RevivalCraft brings antique and modern furniture back to life with expert restoration, refinishing, and repair. Serving homeowners and collectors with craftsmanship since 1998.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
