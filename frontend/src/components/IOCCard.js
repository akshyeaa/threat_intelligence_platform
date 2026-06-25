import RiskBadge from "./RiskBadge";
import MitreCard from "./MitreCard";

export default function IOCCard({
  ioc,
}) {
  return (
    <div className="
      border
      border-gray-800
      rounded-2xl
      p-5
      bg-[#111111]
      hover:border-gray-600
      transition-all
      duration-300
    ">
      <div className="
        flex
        justify-between
        items-start
        mb-4
      ">
        <div>
          <h3 className="
            text-xl
            font-bold
            break-all
          ">
            {ioc.value}
          </h3>

          <p className="
            text-gray-400
            text-sm
            mt-1
            uppercase
          ">
            {ioc.type}
          </p>
        </div>

        {ioc.risk_score && (
          <RiskBadge
            level={
              ioc.risk_score.level
            }
          />
        )}
      </div>

      <MitreCard
        mitre={ioc.mitre}
      />
    </div>
  );
}