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

  const high = history.filter(
    h => h.highest_risk === "High"
  ).length;

  const medium = history.filter(
    h => h.highest_risk === "Medium"
  ).length;

  const low = history.filter(
    h => h.highest_risk === "Low"
  ).length;

  return (
    <div
      className="mt-10"
      style={{
        width: "400px",
        height: "400px",
      }}
    >
      <Pie
        data={{
          labels: ["High", "Medium", "Low"],
          datasets: [
            {
              label: "Threats",
              data: [high, medium, low],
              backgroundColor: [
                "#ef4444",
                "#f59e0b",
                "#22c55e",
              ],
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}