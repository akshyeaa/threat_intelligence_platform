export default function RiskBadge({
  level,
}) {
  let color =
    "bg-gray-500";

  if (level === "Critical")
    color = "bg-red-600";

  else if (level === "High")
    color = "bg-orange-500";

  else if (level === "Medium")
    color = "bg-yellow-500";

  else if (level === "Low")
    color = "bg-green-600";

  return (
    <span
      className={`${color} text-white px-3 py-1 rounded`}
    >
      {level}
    </span>
  );
}