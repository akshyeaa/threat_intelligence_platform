"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export default function BarChart({ result }) {
  if (!result || !result.iocs || result.iocs.length === 0) {
    return null;
  }

  const counts = {};
  result.iocs.forEach(i => {
    counts[i.type] = (counts[i.type] || 0) + 1;
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(15, 15, 15, 0.9)",
        titleColor: "#fff",
        bodyColor: "#ccc",
        borderColor: "rgba(255,255,255,0.1)",
        borderWidth: 1,
        padding: 12,
        boxPadding: 4,
      }
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.05)",
          drawBorder: false,
        },
        ticks: {
          color: "#888",
          font: { family: "'Fira Code', monospace" }
        }
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.05)",
          drawBorder: false,
        },
        ticks: {
          color: "#888",
          font: { family: "'Fira Code', monospace" },
          stepSize: 1
        }
      }
    }
  };

  const colors = [
    "rgba(59, 130, 246, 0.8)", // blue-500
    "rgba(16, 185, 129, 0.8)", // emerald-500
    "rgba(245, 158, 11, 0.8)", // amber-500
    "rgba(239, 68, 68, 0.8)",  // red-500
    "rgba(139, 92, 246, 0.8)", // violet-500
    "rgba(236, 72, 153, 0.8)", // pink-500
  ];

  const data = {
    labels: Object.keys(counts),
    datasets: [
      {
        label: "IOC Count",
        data: Object.values(counts),
        backgroundColor: Object.keys(counts).map((_, i) => colors[i % colors.length]),
        hoverBackgroundColor: Object.keys(counts).map((_, i) => colors[i % colors.length].replace("0.8", "1")),
        borderRadius: 4,
        barPercentage: 0.6,
      },
    ],
  };

  return (
    <div className="mt-8 glass-panel rounded-2xl p-6 glow-hover">
      <h3 className="text-sm text-gray-400 mb-6 font-medium uppercase tracking-wider">IOC Distribution</h3>
      <div className="h-[300px] w-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}