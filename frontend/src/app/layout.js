import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
});

export const metadata = {
  title: "AI Threat Intelligence Platform",
  description: "Advanced Automated Threat Analysis & Intelligence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className={`${inter.variable} ${firaCode.variable} font-sans min-h-full flex flex-col`}>
        <Navbar />
        <div className="flex-1 w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
