import { Inter } from "next/font/google";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Threat Intelligence Platform",
  description:
    "Automated Threat Intelligence & Analysis",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <Navbar/>{children}
        </body>
    </html>
  );
}
