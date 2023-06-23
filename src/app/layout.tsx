import "@/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RCB Software",
  description:
    "Crafting innovative and impactful software solutions for the modern world.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="">
      <body className={`${inter.className} mx-auto max-w-6xl antialiased`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
