"use client";

import { useEffect, useState } from "react";

import { getHistory } from "@/services/api";

import HistoryCard from "@/components/HistoryCard";

export default function HistoryPage() {

  const [history, setHistory] =
    useState([]);

  useEffect(() => {

    load();

  }, []);

  async function load() {

    const data =
      await getHistory();

    setHistory(data);

  }

  return (

    <main className="max-w-6xl mx-auto p-8">

      <h1 className="text-5xl font-bold mb-10">

        Analysis History

      </h1>

      <div className="space-y-6">

        {history.map((item) => (

          <HistoryCard
            key={item.id}
            item={item}
          />

        ))}

      </div>

    </main>

  );

}