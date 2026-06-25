"use client";

import { useState } from "react";

export default function ThreatInput({ onAnalyze }) {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`mt-8 glass-panel rounded-2xl p-6 transition-all duration-300 ${isFocused ? 'border-gray-500 shadow-[0_0_20px_rgba(255,255,255,0.05)]' : ''}`}>
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
        </div>
        <span className="text-xs text-gray-500 font-fira ml-2">threat_analyzer.sh</span>
      </div>
      
      <textarea
        className="w-full bg-black/40 border border-[var(--glass-border)] p-4 rounded-xl text-gray-300 font-fira text-sm focus:outline-none focus:border-gray-600 transition-colors resize-y min-h-[200px]"
        placeholder="Paste raw threat intelligence report, logs, or payload here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <div className="flex justify-end mt-4">
        <button
          className="px-6 py-2.5 bg-white text-black hover:bg-gray-200 font-medium rounded-lg transition-colors flex items-center gap-2"
          onClick={() => onAnalyze(text)}
          disabled={!text.trim()}
        >
          <span>Analyze Content</span>
          <span className="font-fira text-xs bg-black/10 px-1.5 py-0.5 rounded">⏎</span>
        </button>
      </div>
    </div>
  );
}