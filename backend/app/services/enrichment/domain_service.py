from app.services.enrichment.base import (
    BaseEnrichmentService,
)


class DomainService(
    BaseEnrichmentService
):

    SUSPICIOUS_KEYWORDS = [
        "login",
        "secure",
        "update",
        "verify",
        "account",
        "bank",
        "password",
    ]

    def enrich(
        self,
        domain: str,
    ):

        matches = [
            keyword
            for keyword in self.SUSPICIOUS_KEYWORDS
            if keyword in domain.lower()
        ]

        return {
            "reputation": (
                "Suspicious"
                if matches
                else "Unknown"
            ),
            "matched_keywords": matches,
            "source": "Local Rules",
        }