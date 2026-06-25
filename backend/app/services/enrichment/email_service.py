from app.services.enrichment.base import (
    BaseEnrichmentService,
)


class EmailService(
    BaseEnrichmentService
):

    def enrich(
        self,
        email: str,
    ):

        domain = (
            email.split("@")[1]
            if "@" in email
            else ""
        )

        return {
            "domain": domain,
            "source": "Local Rules",
        }