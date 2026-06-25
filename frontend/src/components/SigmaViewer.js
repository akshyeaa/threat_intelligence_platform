export default function SigmaViewer({ rules }) {
  if (!rules?.length) return null;

  return (
    <div className="mt-12 glass-panel rounded-2xl p-8 glow-hover">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-xl font-medium tracking-wide text-gray-300 uppercase">
          Generated Sigma Rules
        </h2>
        <div className="h-px bg-[var(--glass-border)] flex-1 ml-4"></div>
      </div>

      <div className="space-y-6">
        {rules.map((rule, index) => (
          <div key={index} className="rounded-xl overflow-hidden border border-gray-800 bg-[#0a0a0a]">
            <div className="flex items-center px-4 py-2 border-b border-gray-800 bg-[#111111]">
              <div className="flex gap-1.5 mr-4">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
              </div>
              <span className="text-xs text-gray-500 font-fira">rule_{index + 1}.yml</span>
            </div>
            <pre className="p-5 overflow-auto text-sm text-gray-300 font-fira leading-relaxed">
              <code>{rule}</code>
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}