export default function StatsBar({ result }) {
  if (!result) return null;

  const highRisk =
    result.iocs.filter(
      (ioc) =>
        ioc.risk_score?.level === "High" ||
        ioc.risk_score?.level === "Critical"
    ).length;

  const mitreCount =
    result.iocs.filter(
      (ioc) => ioc.mitre
    ).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <div className="glass-panel rounded-2xl p-6 glow-hover flex flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        <h3 className="text-sm text-gray-400 font-medium tracking-wider uppercase mb-2">
          Total Indicators
        </h3>
        <p className="text-5xl font-bold text-white font-fira tracking-tight">
          {result.ioc_count}
        </p>
      </div>

      <div className="glass-panel rounded-2xl p-6 glow-hover flex flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        <h3 className="text-sm text-gray-400 font-medium tracking-wider uppercase mb-2">
          High Risk Threats
        </h3>
        <p className="text-5xl font-bold text-white font-fira tracking-tight">
          {highRisk}
        </p>
      </div>

      <div className="glass-panel rounded-2xl p-6 glow-hover flex flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        <h3 className="text-sm text-gray-400 font-medium tracking-wider uppercase mb-2">
          MITRE Tactics
        </h3>
        <p className="text-5xl font-bold text-white font-fira tracking-tight">
          {mitreCount}
        </p>
      </div>
    </div>
  );
}