export default function MitreCard({
  mitre,
}) {
  if (!mitre) return null;

  return (
    <div className="
      mt-4
      border-t
      border-gray-800
      pt-4
    ">
      <p className="
        text-xs
        text-gray-500
        uppercase
        mb-2
      ">
        MITRE ATT&CK
      </p>

      <p>
        <strong>
          {mitre.technique_id}
        </strong>
      </p>

      <p className="mt-1">
        {mitre.technique}
      </p>

      <p className="
        text-gray-400
        text-sm
        mt-1
      ">
        {mitre.tactic}
      </p>
    </div>
  );
}