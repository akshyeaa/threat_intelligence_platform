import requests

from app.config.settings import settings
from app.services.clients.parsers.abuseipdb_parser import AbuseIPDBParser

class AbuseIPDBClient:
    """
    Client for AbuseIPDB API.
    """

    BASE_URL = "https://api.abuseipdb.com/api/v2/check"

    def check_ip(self, ip: str):

        headers = {
            "Key": settings.ABUSEIPDB_API_KEY,
            "Accept": "application/json",
        }

        params = {
            "ipAddress": ip,
            "maxAgeInDays": 90,
        }

        response = requests.get(
            self.BASE_URL,
            headers=headers,
            params=params,
            timeout=10,
        )

        response.raise_for_status()

        return AbuseIPDBParser.parse(response.json())