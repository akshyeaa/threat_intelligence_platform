"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { getAnalysis } from "@/services/api";

import AnalysisResult from "@/components/AnalysisResult";
import AIReport from "@/components/AIReport";
import SigmaViewer from "@/components/SigmaViewer";

export default function AnalysisPage() {

  const { id } = useParams();

  const [analysis, setAnalysis] =
    useState(null);

  useEffect(() => {

    load();

  }, []);

  async function load() {

    const data =
      await getAnalysis(id);

    data.analysis_json =
      JSON.parse(
        data.analysis_json
      );

    setAnalysis(data);

  }

  if (!analysis) {

    return (

      <main className="p-8">

        Loading...

      </main>

    );

  }

  return (

    <main className="max-w-7xl mx-auto p-8">

      <h1
        className="
        text-5xl
        font-bold
        mb-8
        "
      >

        Analysis #{id}

      </h1>

      <div className="mb-8">

        <p>

          Input Type:
          {" "}
          <b>{analysis.input_type}</b>

        </p>

        <p>

          Filename:
          {" "}
          <b>

            {analysis.filename || "N/A"}

          </b>

        </p>

        <p>

          IOC Count:
          {" "}
          <b>

            {analysis.ioc_count}

          </b>

        </p>

        <p>

          Highest Risk:
          {" "}
          <b>

            {analysis.highest_risk}

          </b>

        </p>

      </div>

      <AnalysisResult
        result={analysis.analysis_json}
      />

      <div className="mt-10">

        <AIReport
          report={analysis.report}
        />

      </div>

      <div className="mt-10">

        {analysis.analysis_json?.iocs?.length > 0 && (

<div
className="mt-10 p-6 rounded-xl border border-neutral-800"
>

<h2 className="text-2xl font-bold mb-4">

Sigma Rules

</h2>

<p className="text-neutral-400">

Regenerate Sigma Rules
from the Analyze page.

</p>

</div>

)}

      </div>

    </main>

  );

}