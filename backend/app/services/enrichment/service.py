from app.schemas.ioc import IOCExtractionResponse

from app.services.enrichment.registry import (
    ENRICHMENT_REGISTRY,
)


class EnrichmentService:
    """
    Orchestrates IOC enrichment.
    """

    def enrich(
        self,
        response: IOCExtractionResponse,
    ) -> IOCExtractionResponse:

        for ioc in response.iocs:
            
            service = ENRICHMENT_REGISTRY.get(ioc.type)

            if service is None:
                continue

            ioc.enrichment = service.enrich(ioc.value)

        return response