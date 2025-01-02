"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { usePathname } from "next/navigation";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  let pathname = usePathname();

  return (
    <html lang="en">
      <body
        className={`${inter.className} ${
          pathname.startsWith("/admin") ? "flex flex-col md:flex-row" : ""
        } min-h-screen`}
      >
        {pathname.startsWith("/admin") ? <Sidebar /> : <Navbar />}
        {/* <Navbar /> */}
        {children}
        {!pathname.startsWith("/admin") && <Footer />}
      </body>
    </html>
  );
}
