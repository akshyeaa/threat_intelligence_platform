"use client";

import { useState } from "react";

export default function FileUpload({
  onUpload,
}) {
  const [file, setFile] =
    useState(null);

  return (
    <div className="
      border
      border-gray-800
      rounded-xl
      p-6
      mt-6
    ">
      <h2 className="
        text-xl
        font-semibold
        mb-4
      ">
        Upload Threat File
      </h2>

      <input
        type="file"
        onChange={(e) =>
          setFile(
            e.target.files[0]
          )
        }
      />

      <button
        className="
          mt-4
          px-4
          py-2
          bg-white
          text-black
          rounded-lg
        "
        onClick={() =>
          onUpload(file)
        }
      >
        Upload & Analyze
      </button>
    </div>
  );
}