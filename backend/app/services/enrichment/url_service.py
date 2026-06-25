from app.services.enrichment.base import (
    BaseEnrichmentService,
)


class URLService(
    BaseEnrichmentService
):

    def enrich(
        self,
        url: str,
    ):

        suspicious = any(
            keyword in url.lower()
            for keyword in [
                "login",
                "verify",
                "update",
                "password",
            ]
        )

        return {
            "reputation": (
                "Suspicious"
                if suspicious
                else "Unknown"
            ),
            "source": "Local Rules",
        }