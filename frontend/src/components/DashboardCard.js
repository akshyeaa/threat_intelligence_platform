export default function DashboardCard({ title, value }) {
  return (
    <div className="glass-panel rounded-2xl p-6 glow-hover flex flex-col justify-between">
      <p className="text-sm text-gray-400 font-medium tracking-wider uppercase mb-2">
        {title}
      </p>
      <h2 className="text-4xl font-bold tracking-tight text-white font-fira">
        {value}
      </h2>
    </div>
  );
}