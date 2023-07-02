import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import { Footer } from "@/components";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RCB Software",
  description:
    "Crafting innovative and impactful software solutions for the modern world.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
