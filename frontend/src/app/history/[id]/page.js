"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getAnalysis } from "@/services/api";
import AnalysisResult from "@/components/AnalysisResult";
import AIReport from "@/components/AIReport";

export default function AnalysisPage() {
  const { id } = useParams();
  const router = useRouter();
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const data = await getAnalysis(id);
      data.analysis_json = JSON.parse(data.analysis_json);
      setAnalysis(data);
    } catch (e) {
      console.error(e);
    }
  }

  if (!analysis) {
    return (
      <main className="max-w-7xl mx-auto p-8 lg:p-12 flex justify-center items-center h-[50vh]">
        <div className="w-8 h-8 border-4 border-gray-600 border-t-white rounded-full animate-spin"></div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto p-8 lg:p-12 fade-in pb-24">
      <div className="mb-12 border-b border-[var(--glass-border)] pb-8 flex items-center justify-between">
        <div>
          <button 
            onClick={() => router.push('/history')}
            className="text-sm text-gray-500 hover:text-white mb-4 flex items-center gap-2 transition-colors"
          >
            &larr; Back to History
          </button>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2 flex items-center gap-4">
            Analysis Record
            <span className="text-gray-600 font-fira text-2xl">#{id.toString().padStart(4, '0')}</span>
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="glass-panel rounded-2xl p-6">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">Input Source</p>
          <p className="text-xl font-bold text-gray-200">{analysis.input_type.toUpperCase()}</p>
        </div>
        <div className="glass-panel rounded-2xl p-6">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">Filename</p>
          <p className="text-xl font-bold text-gray-200 truncate">{analysis.filename || "N/A"}</p>
        </div>
        <div className="glass-panel rounded-2xl p-6">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">Total Indicators</p>
          <p className="text-xl font-bold text-white font-fira">{analysis.ioc_count}</p>
        </div>
        <div className="glass-panel rounded-2xl p-6">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">Severity Risk</p>
          <p className="text-xl font-bold text-white">{analysis.highest_risk}</p>
        </div>
      </div>

      <AnalysisResult result={analysis.analysis_json} />

      <AIReport report={analysis.report} />
    </main>
  );
}