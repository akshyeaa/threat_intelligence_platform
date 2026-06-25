export default function AIReport({
  report,
}) {
  if (!report) return null;

  return (
    <div
            className="
            mt-8
            bg-[#111111]
            border
            border-gray-800
            rounded-2xl
            p-6
            "
            >
      <h2 className="text-2xl font-bold mb-6">
        AI Threat Report
      </h2>

      <div className="whitespace-pre-wrap">
        {report}
      </div>
    </div>
  );
}