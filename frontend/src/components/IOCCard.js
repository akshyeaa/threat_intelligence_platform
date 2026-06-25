import RiskBadge from "./RiskBadge";
import MitreCard from "./MitreCard";

export default function IOCCard({ ioc }) {
  return (
    <div className="glass-panel rounded-2xl p-6 glow-hover flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1 pr-4">
            <h3 className="text-lg font-fira text-gray-100 tracking-tight break-all mb-1 font-medium">
              {ioc.value}
            </h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
              {ioc.type}
            </p>
          </div>
          {ioc.risk_score && (
            <div className="flex-shrink-0">
              <RiskBadge level={ioc.risk_score.level} />
            </div>
          )}
        </div>
      </div>
      
      {ioc.mitre && (
        <div className="mt-auto">
          <MitreCard mitre={ioc.mitre} />
        </div>
      )}
    </div>
  );
}