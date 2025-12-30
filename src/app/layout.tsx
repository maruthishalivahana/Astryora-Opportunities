import "./global.css";
import Header from "@/components/landingComponents/header";

export const metadata = {
  title: "Astryora Opportunities",
  description: "Platform for talent & startups",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
