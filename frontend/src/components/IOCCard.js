import RiskBadge from "./RiskBadge";
import MitreCard from "./MitreCard";

export default function IOCCard({ ioc }) {
  const getFlagEmoji = (countryCode) => {
    if (!countryCode) return null;
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  const getSeverityColor = (severity) => {
    const s = severity?.toLowerCase();
    if (s === 'critical') return 'bg-red-900/60 text-red-200 border-red-700/50';
    if (s === 'high') return 'bg-orange-900/60 text-orange-200 border-orange-700/50';
    if (s === 'medium') return 'bg-yellow-900/60 text-yellow-200 border-yellow-700/50';
    if (s === 'low') return 'bg-green-900/60 text-green-200 border-green-700/50';
    return 'bg-gray-800 text-gray-300 border-gray-600';
  };

  const enrichment = ioc.enrichment;
  const score = ioc.risk_score?.score;
  const isIP = ioc.type?.toLowerCase() === 'ip' || ioc.type?.toLowerCase() === 'ipv4';

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
        
        {/* Enrichment Details */}
        <div className="flex flex-col gap-4 mb-6">
          {score !== undefined && (
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-400 uppercase tracking-wider">Risk Score</span>
                <span className="font-fira text-gray-200">{score}/100</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1.5">
                <div 
                  className={`h-1.5 rounded-full ${
                    score >= 80 ? 'bg-red-500' :
                    score >= 60 ? 'bg-orange-500' :
                    score >= 40 ? 'bg-yellow-500' : 'bg-green-500'
                  }`} 
                  style={{ width: `${score}%` }}
                ></div>
              </div>
            </div>
          )}

          {enrichment && (
            <div className="grid grid-cols-2 gap-4">
              {enrichment.severity && (
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Severity</div>
                  <span className={`px-2 py-0.5 rounded text-xs border ${getSeverityColor(enrichment.severity)}`}>
                    {enrichment.severity}
                  </span>
                </div>
              )}
              {enrichment.cvss !== undefined && enrichment.cvss !== null && (
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">CVSS Score</div>
                  <div className="text-sm text-gray-200 font-fira">{enrichment.cvss}</div>
                </div>
              )}
              {enrichment.source && (
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Source</div>
                  <div className="text-sm text-gray-200 truncate" title={enrichment.source}>{enrichment.source}</div>
                </div>
              )}
              {enrichment.confidence !== undefined && enrichment.confidence !== null && (
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Confidence</div>
                  <div className="text-sm text-gray-200 font-fira">{enrichment.confidence}%</div>
                </div>
              )}
              {enrichment.exploit !== undefined && enrichment.exploit !== null && (
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Exploit</div>
                  <span className={`px-2 py-0.5 rounded text-xs border ${enrichment.exploit ? 'bg-red-900/60 text-red-200 border-red-700/50' : 'bg-green-900/60 text-green-200 border-green-700/50'}`}>
                    {enrichment.exploit ? 'Yes' : 'No'}
                  </span>
                </div>
              )}
              {enrichment.country && isIP && (
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Country</div>
                  <div className="text-sm text-gray-200 flex items-center gap-1">
                    <span className="text-base leading-none">{getFlagEmoji(enrichment.country)}</span> {enrichment.country}
                  </div>
                </div>
              )}
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