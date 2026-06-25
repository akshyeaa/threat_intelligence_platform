import IOCCard from "./IOCCard";

export default function AnalysisResult({
  result,
}) {
  if (!result) return null;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">
        Indicators of Compromise
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {result.iocs.map(
          (ioc) => (
            <IOCCard
              key={ioc.id}
              ioc={ioc}
            />
          )
        )}
      </div>
    </div>
  );
}