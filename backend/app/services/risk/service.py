from app.schemas.ioc import IOCExtractionResponse

from app.services.risk.calculator import (
    RiskCalculator,
)

from app.schemas.risk import RiskScore

class RiskService:

    def score(
        self,
        response: IOCExtractionResponse,
    ) -> IOCExtractionResponse:

        for ioc in response.iocs:

            if not ioc.enrichment:
                continue

            ioc.risk_score = RiskScore(
                **RiskCalculator.calculate(
                    ioc.enrichment,
                    ioc.mitre,
                )
            )

        return response