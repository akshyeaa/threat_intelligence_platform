from app.constants.paths import IP_REPUTATION_DATASET

from app.services.clients.abuseipdb_client import AbuseIPDBClient
from app.utils.json_loader import JSONLoader


class IPService:
    """
    IP reputation enrichment.
    """

    def __init__(self):

        self.dataset = JSONLoader.load(
            IP_REPUTATION_DATASET
        )

        self.client = AbuseIPDBClient()

    def enrich(self, ip: str):

        # print(f"Checking IP: {ip}")

        for item in self.dataset:

            if item["ip"] == ip:
                return item

        return self.fetch_live(ip)

    def fetch_live(self, ip: str):
        try:
            result = self.client.check_ip(ip)
            return result

        except Exception:
            return None