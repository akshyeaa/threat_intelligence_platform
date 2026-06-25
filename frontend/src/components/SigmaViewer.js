export default function SigmaViewer({
  rules,
}) {
  if (!rules?.length) return null;

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
      <h2 className="text-2xl font-bold mb-4">
        Sigma Rules
      </h2>

      {rules.map(
        (rule, index) => (
          <pre
            key={index}
            className="bg-black
                    border
                    border-gray-800
                    rounded-xl
                    p-4
                    overflow-auto"
          >
            {rule}
          </pre>
        )
      )}
    </div>
  );
}