class AbuseIPDBParser:
    """
    Converts AbuseIPDB responses into the
    application's enrichment format.
    """

    @staticmethod
    def parse(data: dict):

        result = data.get("data")

        if result is None:
            return None

        return {
            "reputation": (
                "Malicious"
                if result["abuseConfidenceScore"] >= 50
                else "Safe"
            ),
            "confidence": result["abuseConfidenceScore"],
            "country": result.get("countryCode"),
            "usage_type": result.get("usageType"),
            "reports": result.get("totalReports"),
            "source": "AbuseIPDB",
        }