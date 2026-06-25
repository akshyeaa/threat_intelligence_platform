"use client";

import { useState } from "react";

export default function FileUpload({ onUpload }) {
  const [file, setFile] = useState(null);

  return (
    <div className="glass-panel rounded-2xl p-6 mt-6 glow-hover">
      <h3 className="text-sm text-gray-400 font-medium tracking-wider uppercase mb-4">
        Upload Threat File
      </h3>

      <div className="relative border-2 border-dashed border-[var(--glass-border)] rounded-xl p-8 bg-black/20 hover:bg-white/5 transition-colors group flex flex-col items-center justify-center min-h-[160px]">
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          onChange={(e) => setFile(e.target.files[0])}
        />
        
        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
        </div>
        
        <p className="text-gray-300 font-medium text-sm">
          {file ? file.name : "Click or drag file to this area to upload"}
        </p>
        {!file && <p className="text-xs text-gray-500 mt-1">Supports txt, json, csv, log formats</p>}
      </div>

      {file && (
        <div className="flex justify-end mt-4">
          <button
            className="px-6 py-2.5 bg-white text-black hover:bg-gray-200 font-medium rounded-lg transition-colors"
            onClick={() => onUpload(file)}
          >
            Process File
          </button>
        </div>
      )}
    </div>
  );
}