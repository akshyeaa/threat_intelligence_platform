from app.constants.paths import CVE_DATASET
from app.services.clients.nvd_client import NVDClient
from app.utils.json_loader import JSONLoader


class CVEService:
    """
    Provides CVE enrichment from local dataset
    with NVD API fallback.
    """

    def __init__(self):

        self.dataset = JSONLoader.load(CVE_DATASET)

        self.nvd_client = NVDClient()

    def find(self, cve: str):

        cve = cve.upper()

        for item in self.dataset:

            if item["cve"] == cve:
                return item

        return self.find_from_nvd(cve)

    def find_from_nvd(self, cve: str):

        try:
            return self.nvd_client.get_cve(cve)

        except Exception:

            return None