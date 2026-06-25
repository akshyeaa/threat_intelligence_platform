import Link from "next/link";

export default function HistoryCard({ item }) {
  return (
    <div className="border border-neutral-800 rounded-xl p-5 bg-neutral-950">

      <div className="flex justify-between">

        <h2 className="text-xl font-semibold">
          Analysis #{item.id}
        </h2>

        <span
          className={`px-3 py-1 rounded-full text-sm
          ${
            item.highest_risk === "High"
              ? "bg-red-600"
              : item.highest_risk === "Medium"
              ? "bg-yellow-600"
              : "bg-green-700"
          }`}
        >
          {item.highest_risk}
        </span>

      </div>

      <p className="mt-3 text-neutral-400">
        {item.input_type.toUpperCase()}
      </p>

      <p>{item.ioc_count} IOC(s)</p>

      <p className="text-sm text-neutral-500 mt-2">
        {new Date(item.created_at).toLocaleString()}
      </p>

      <Link
href={`/history/${item.id}`}
className="block"
>

<div
className="
mt-5
rounded-lg
bg-neutral-900
hover:bg-neutral-800
transition
p-3
text-center
"
>

View Full Analysis →

</div>

</Link>

    </div>
  );
}