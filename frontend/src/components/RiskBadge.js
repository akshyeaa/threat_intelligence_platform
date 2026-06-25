export default function RiskBadge({ level }) {
  let style = "bg-gray-800 text-gray-300 border-gray-600";

  if (level === "Critical" || level === "High") {
    style = "bg-red-900/60 text-red-200 border-red-700/50 shadow-[0_0_10px_rgba(220,38,38,0.2)]";
  } else if (level === "Medium") {
    style = "bg-amber-900/60 text-amber-200 border-amber-700/50 shadow-[0_0_10px_rgba(217,119,6,0.2)]";
  } else if (level === "Low") {
    style = "bg-emerald-900/60 text-emerald-200 border-emerald-700/50 shadow-[0_0_10px_rgba(16,185,129,0.2)]";
  }

  return (
    <span
      className={`px-3 py-1 rounded text-xs font-semibold tracking-wide uppercase border ${style} backdrop-blur-sm transition-all`}
    >
      {level}
    </span>
  );
}