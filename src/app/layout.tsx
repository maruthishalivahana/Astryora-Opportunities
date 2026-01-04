import Footer from "@/components/landingComponents/Footer";
import "./global.css";
import Header from "@/components/landingComponents/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Astryora Opportunities",
  description: "Platform for talent & startups",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
