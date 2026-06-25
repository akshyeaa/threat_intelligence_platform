"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="
      flex
      justify-between
      items-center
      px-8
      py-5
      border-b
      border-neutral-800
      "
    >
      <h1 className="text-2xl font-bold">
        AI Threat Intelligence
      </h1>

      <div className="flex gap-8">

        <Link href="/">
          Dashboard
        </Link>

        <Link href="/analyze">
          Analyze
        </Link>

        <Link href="/history">
          History
        </Link>

      </div>

    </nav>
  );
}