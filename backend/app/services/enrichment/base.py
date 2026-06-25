class BaseEnrichmentService:
    """
    Base class for enrichment services.
    """

    def enrich(self, value: str):
        raise NotImplementedError