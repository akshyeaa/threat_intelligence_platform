import Link from "next/link";

export default function HistoryCard({ item }) {
  const getRiskColor = (risk) => {
    if (risk === "Critical" || risk === "High") return "bg-red-900/40 text-red-300 border-red-800";
    if (risk === "Medium") return "bg-amber-900/40 text-amber-300 border-amber-800";
    if (risk === "Low") return "bg-emerald-900/40 text-emerald-300 border-emerald-800";
    return "bg-transparent text-gray-400 border-gray-700";
  };

  return (
    <div className="glass-panel rounded-xl p-6 glow-hover group relative overflow-hidden">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight mb-1 text-white flex items-center gap-2">
            <span className="text-gray-500 font-fira text-sm">#{item.id.toString().padStart(4, '0')}</span>
            Analysis Record
          </h2>
          <p className="text-sm text-gray-400">
            {new Date(item.created_at).toLocaleString(undefined, {
              year: 'numeric', month: 'short', day: 'numeric',
              hour: '2-digit', minute: '2-digit'
            })}
          </p>
        </div>
        <span className={`px-3 py-1 rounded border text-xs font-medium tracking-wide uppercase ${getRiskColor(item.highest_risk)}`}>
          {item.highest_risk || "Unknown"} Risk
        </span>
      </div>

      <div className="flex items-center gap-6 mb-6">
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Source</p>
          <p className="font-medium text-gray-200">{item.input_type.toUpperCase()}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Extracted IOCs</p>
          <p className="font-fira text-gray-200">{item.ioc_count}</p>
        </div>
      </div>

      <Link href={`/history/${item.id}`} className="block">
        <div className="w-full rounded bg-white/5 hover:bg-white/10 border border-[var(--glass-border)] transition-all duration-300 p-3 text-center text-sm font-medium text-gray-200 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.05)]">
          View Full Analysis &rarr;
        </div>
      </Link>
    </div>
  );
}