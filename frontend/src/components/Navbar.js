"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Dashboard", href: "/" },
    { name: "Analyze", href: "/analyze" },
    { name: "History", href: "/history" },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-panel border-b-0 border-t-0 border-l-0 border-r-0 border-b-[1px] border-[var(--glass-border)] px-8 py-4 flex justify-between items-center transition-all">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold font-fira text-gray-200">
          Threat Intelligence
        </h1>
      </div>

      <div className="flex gap-1 bg-black/20 p-1 rounded-lg border border-[var(--glass-border)] backdrop-blur-md">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-white/10 text-white shadow-sm"
                  : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}