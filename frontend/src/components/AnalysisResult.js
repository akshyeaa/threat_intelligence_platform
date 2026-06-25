import IOCCard from "./IOCCard";

export default function AnalysisResult({ result }) {
  if (!result || !result.iocs || result.iocs.length === 0) return null;

  return (
    <div className="mt-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px bg-[var(--glass-border)] flex-1"></div>
        <h2 className="text-xl font-medium tracking-wide text-gray-300 uppercase">
          Extracted Indicators
        </h2>
        <div className="h-px bg-[var(--glass-border)] flex-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {result.iocs.map((ioc) => (
          <IOCCard key={ioc.id || ioc.value} ioc={ioc} />
        ))}
      </div>
    </div>
  );
}