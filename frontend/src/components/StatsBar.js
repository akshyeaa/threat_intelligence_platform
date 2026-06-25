export default function StatsBar({
  result,
}) {
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
    <div className="grid grid-cols-3 gap-4 mt-8">
      <div className="
            bg-[#111111]
            border
            border-gray-800
            rounded-2xl
            p-5
            hover:border-gray-600
            transition-all
            ">
        <h3 className="text-sm text-gray-400">
          IOC Count
        </h3>

        <p className="text-4xl font-bold mt-2">
          {result.ioc_count}
        </p>
      </div>

      <div className="border rounded-xl p-4">
        <h3 className="text-sm text-gray-400">
          High Risk
        </h3>

        <p className="text-3xl font-bold">
          {highRisk}
        </p>
      </div>

      <div className="border rounded-xl p-4">
        <h3 className="text-sm text-gray-400">
          MITRE Mappings
        </h3>

        <p className="text-3xl font-bold">
          {mitreCount}
        </p>
      </div>
    </div>
  );
}