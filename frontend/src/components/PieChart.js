"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function PieChart({ history }) {
  if (!history || history.length === 0) return null;

  const high = history.filter(
    h => h.highest_risk === "High" || h.highest_risk === "Critical"
  ).length;

  const medium = history.filter(
    h => h.highest_risk === "Medium"
  ).length;

  const low = history.filter(
    h => h.highest_risk === "Low" || !h.highest_risk
  ).length;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#888',
          font: { family: 'Inter, sans-serif', size: 12 },
          usePointStyle: true,
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: "rgba(15, 15, 15, 0.9)",
        titleColor: "#fff",
        bodyColor: "#ccc",
        borderColor: "rgba(255,255,255,0.1)",
        borderWidth: 1,
        padding: 12,
      }
    }
  };

  const data = {
    labels: ["High Risk", "Medium Risk", "Low Risk"],
    datasets: [
      {
        label: "Analyses",
        data: [high, medium, low],
        backgroundColor: [
          "rgba(239, 68, 68, 0.8)", // red-500
          "rgba(245, 158, 11, 0.8)", // amber-500
          "rgba(16, 185, 129, 0.8)", // emerald-500
        ],
        borderColor: [
          "rgba(255, 255, 255, 0.1)",
          "rgba(255, 255, 255, 0.1)",
          "rgba(255, 255, 255, 0.1)",
        ],
        borderWidth: 1,
        hoverOffset: 4
      },
    ],
  };

  return (
    <div className="glass-panel rounded-2xl p-6 glow-hover mt-8">
      <h3 className="text-sm text-gray-400 mb-6 font-medium uppercase tracking-wider">Risk Distribution</h3>
      <div className="h-[300px] w-full flex justify-center">
        <div style={{ width: "100%", maxWidth: "400px" }}>
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
}