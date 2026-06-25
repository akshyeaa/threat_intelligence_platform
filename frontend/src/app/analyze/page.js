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
import BarChart
from "@/components/BarChart";

export default function AnalyzePage() {
  const [result, setResult] =
    useState(null);
  const [report, setReport] =
    useState("");
  const [rules, setRules] =
    useState([]);

  async function handleAnalyze(
    text
  ) {
    const data =
      await analyzeText(text);

    setResult(data);

    const reportData =
      await generateReport(text);

    setReport(
      reportData.report
    );

    const sigmaData =
      await generateSigma(text);

    setRules(
      sigmaData.rules
    );
  }

  async function handleUpload(
    file
  ) {
    if (!file) return;

    const data =
      await analyzeFile(file);

    setResult(data);

    // Extract only IOC values
    const iocText =
      data.iocs
        .map((ioc) => ioc.value)
        .join("\n");

    const reportData =
      await generateReport(
        iocText
      );

    setReport(
      reportData.report
    );

    const sigmaData =
      await generateSigma(
        iocText
      );

    setRules(
      sigmaData.rules
    );
  }

return (
  <main className="min-h-screen max-w-7xl mx-auto p-8">

    <div className="mb-10">
      <h1 className="text-5xl font-bold">
        AI Threat Intelligence Platform
      </h1>

      <p className="mt-3 text-gray-400">
        Automated IOC Extraction,
        Threat Intelligence,
        MITRE Mapping,
        Risk Scoring &
        AI Reporting
      </p>
    </div>

    <ThreatInput className="w-full
        border
        rounded-lg
        p-4
        bg-black
        "
      onAnalyze={handleAnalyze}
    />
    <FileUpload
      onUpload={handleUpload}
    />
    <StatsBar result={result} />
    <BarChart
    result={result}
    />
    <AnalysisResult className="
          mt-10
          px-6
          py-3
          rounded-lg
          bg-white
          text-black
          font-semibold
          "
      result={result}
    />

    <div className="mt-10">
      <AIReport report={report} />
    </div>

    <div className="mt-10">
      <SigmaViewer rules={rules} />
    </div>

  </main>
);

}