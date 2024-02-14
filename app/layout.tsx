import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {Toaster} from "sonner";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Walmart clone",
  description: "Walmart clone next js",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="flex">
          {modal}
          {children}
        </div>
      </body>
    </html>
  );
}
