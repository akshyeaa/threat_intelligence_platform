export default function MitreCard({ mitre }) {
  if (!mitre) return null;

  return (
    <div className="mt-5 border-t border-[var(--glass-border)] pt-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
        <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
          MITRE ATT&CK
        </p>
      </div>

      <div className="bg-black/20 rounded-md p-3 border border-[var(--glass-border)]">
        <div className="flex justify-between items-start">
          <p className="font-fira text-sm text-gray-300 font-medium">
            {mitre.technique_id}
          </p>
          <p className="text-xs text-gray-500 uppercase tracking-wide bg-white/5 px-2 py-0.5 rounded">
            {mitre.tactic}
          </p>
        </div>
        <p className="mt-2 text-sm text-gray-200">
          {mitre.technique}
        </p>
      </div>
    </div>
  );
}