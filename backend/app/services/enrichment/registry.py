from app.constants.ioc_types import (
    CVE,
    IPV4,
    DOMAIN,
    URL,
    EMAIL,
)

from app.services.enrichment.cve_service import CVEService
from app.services.enrichment.ip_service import IPService
from app.services.enrichment.domain_service import (
    DomainService,
)

from app.services.enrichment.url_service import (
    URLService,
)

from app.services.enrichment.email_service import (
    EmailService,
)


ENRICHMENT_REGISTRY = {
    CVE: CVEService(),
    IPV4: IPService(),
    DOMAIN: DomainService(),
    URL: URLService(),
    EMAIL: EmailService(),
}