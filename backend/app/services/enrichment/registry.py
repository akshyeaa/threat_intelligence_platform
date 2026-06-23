from app.constants.ioc_types import CVE

from app.services.enrichment.cve_service import CVEService


ENRICHMENT_REGISTRY = {
    CVE: CVEService(),
}