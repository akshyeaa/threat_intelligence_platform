from app.constants.ioc_types import CVE, IPV4

from app.services.enrichment.cve_service import CVEService
from app.services.enrichment.ip_service import IPService


ENRICHMENT_REGISTRY = {
    CVE: CVEService(),
    IPV4: IPService(),
}