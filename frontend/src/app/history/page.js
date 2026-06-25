"use client";

import { useEffect, useState } from "react";
import { getHistory } from "@/services/api";
import HistoryCard from "@/components/HistoryCard";

export default function HistoryPage() {
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const data = await getHistory();
      setHistory(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="max-w-7xl mx-auto p-8 lg:p-12 fade-in">
      <div className="mb-12 border-b border-[var(--glass-border)] pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-4">
          Analysis History
        </h1>
        <p className="text-gray-400 max-w-2xl text-lg">
          Complete log of all previous threat intelligence scans, automated reports, and extracted IOCs.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl">
        {isLoading ? (
          <div className="text-gray-500 animate-pulse font-fira">Loading history database...</div>
        ) : history.length > 0 ? (
          history.map((item) => (
            <HistoryCard key={item.id} item={item} />
          ))
        ) : (
          <div className="text-gray-500">No analysis history found.</div>
        )}
      </div>
    </main>
  );
}