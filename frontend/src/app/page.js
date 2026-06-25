"use client";

import { useEffect, useState } from "react";
import DashboardCard from "@/components/DashboardCard";
import HistoryCard from "@/components/HistoryCard";
import PieChart from "@/components/PieChart";
import { getHistory } from "@/services/api";

export default function Dashboard() {
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

  const total = history.length;
  const high = history.filter(h => h.highest_risk === "High" || h.highest_risk === "Critical").length;
  const iocs = history.reduce((sum, item) => sum + item.ioc_count, 0);

  return (
    <main className="max-w-7xl mx-auto p-8 lg:p-12 fade-in">
      <div className="mb-12 border-b border-[var(--glass-border)] pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-4">
          Command Center
        </h1>
        <p className="text-gray-400 max-w-2xl text-lg">
          Overview of all automated threat analysis operations and active indicator extractions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <DashboardCard title="Total Scans" value={total} />
        <DashboardCard title="High Risk Threats" value={high} />
        <DashboardCard title="IOCs Extracted" value={iocs} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-medium tracking-wide text-gray-300 uppercase">
              Recent Activity
            </h2>
            <div className="h-px bg-[var(--glass-border)] flex-1 ml-4"></div>
          </div>
          
          <div className="space-y-6">
            {isLoading ? (
              <div className="text-gray-500 animate-pulse font-fira">Loading recent scans...</div>
            ) : history.length > 0 ? (
              history.slice(0, 5).map((item) => (
                <HistoryCard key={item.id} item={item} />
              ))
            ) : (
              <div className="text-gray-500">No analysis history found.</div>
            )}
          </div>
        </div>

        <div className="lg:col-span-1">
           <PieChart history={history} />
        </div>
      </div>
    </main>
  );
}