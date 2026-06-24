import requests

from app.config.settings import settings
from app.services.clients.parsers.nvd_parser import NVDParser

class NVDClient:
    """
    Client for the NVD API.
    """

    BASE_URL = "https://services.nvd.nist.gov/rest/json/cves/2.0"

    def get_cve(self, cve_id: str):

        headers = {}

        if settings.NVD_API_KEY:
            headers["apiKey"] = settings.NVD_API_KEY

        response = requests.get(
            self.BASE_URL,
            params={"cveId": cve_id},
            headers=headers,
            timeout=10,
        )

        response.raise_for_status()

        return NVDParser.parse(response.json())