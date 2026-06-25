"use client";

import { useState } from "react";
import ThreatInput from "@/components/ThreatInput";
import AnalysisResult from "@/components/AnalysisResult";
import AIReport from "@/components/AIReport";
import {
  analyzeText,
  generateReport,
  generateSigma,
  analyzeFile,
} from "@/services/api";
import SigmaViewer from "@/components/SigmaViewer";
import StatsBar from "@/components/StatsBar";
import FileUpload from "@/components/FileUpload";
import BarChart from "@/components/BarChart";

export default function AnalyzePage() {
  const [result, setResult] = useState(null);
  const [report, setReport] = useState("");
  const [rules, setRules] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  async function handleAnalyze(text) {
    if (!text.trim()) return;
    setIsProcessing(true);
    try {
      const data = await analyzeText(text);
      setResult(data);

      const reportData = await generateReport(text);
      setReport(reportData.report);

      const sigmaData = await generateSigma(text);
      setRules(sigmaData.rules);
    } catch (e) {
      console.error(e);
    } finally {
      setIsProcessing(false);
    }
  }

  async function handleUpload(file) {
    if (!file) return;
    setIsProcessing(true);
    try {
      const data = await analyzeFile(file);
      setResult(data);

      const iocText = data.iocs.map((ioc) => ioc.value).join("\n");
      const reportData = await generateReport(iocText);
      setReport(reportData.report);

      const sigmaData = await generateSigma(iocText);
      setRules(sigmaData.rules);
    } catch (e) {
      console.error(e);
    } finally {
      setIsProcessing(false);
    }
  }

  return (
    <main className="max-w-7xl mx-auto p-8 lg:p-12 fade-in">
      <div className="mb-12 border-b border-[var(--glass-border)] pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-4">
          Analysis Engine
        </h1>
        <p className="text-gray-400 max-w-2xl text-lg">
          Process raw threat intelligence, logs, or payload files. Our AI engine automatically extracts IOCs, maps MITRE tactics, and generates Sigma rules.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            <h2 className="text-sm font-medium tracking-widest text-gray-400 uppercase">Text Analysis</h2>
          </div>
          <ThreatInput onAnalyze={handleAnalyze} />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-4 lg:mt-0 mt-8">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
            <h2 className="text-sm font-medium tracking-widest text-gray-400 uppercase">File Analysis</h2>
          </div>
          <FileUpload onUpload={handleUpload} />
        </div>
      </div>

      {isProcessing && (
        <div className="my-12 flex flex-col items-center justify-center p-12 glass-panel rounded-2xl">
          <div className="w-8 h-8 border-4 border-gray-600 border-t-white rounded-full animate-spin mb-4"></div>
          <p className="text-gray-400 font-fira animate-pulse">Running analysis heuristics...</p>
        </div>
      )}

      {!isProcessing && result && (
        <div className="fade-in space-y-12 pb-24">
          <div>
            <StatsBar result={result} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <BarChart result={result} />
            </div>
            <div className="lg:col-span-2">
              <AnalysisResult result={result} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AIReport report={report} />
            <SigmaViewer rules={rules} />
          </div>
        </div>
      )}
    </main>
  );
}