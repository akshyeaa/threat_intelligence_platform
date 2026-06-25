"use client";

import { useState } from "react";

export default function ThreatInput({
  onAnalyze,
}) {
  const [text, setText] =
    useState("");

  return (
    <div className="mt-6 border rounded-xl p-6">
      <textarea
        className="w-full border p-3 rounded"
        rows={8}
        placeholder="Paste threat report..."
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
      />

      <button
        className="mt-4 px-4 py-2 border rounded"
        onClick={() =>
          onAnalyze(text)
        }
      >
        Analyze Threat
      </button>
    </div>
  );
}