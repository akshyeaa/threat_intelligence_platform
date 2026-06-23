from app.services.ioc.service import IOCService
from app.services.enrichment.service import EnrichmentService


text = """
Exploited vulnerability:
CVE-2023-3519
"""

ioc_service = IOCService()
enrichment_service = EnrichmentService()

result = ioc_service.extract_iocs(text)

result = enrichment_service.enrich(result)

print(result.model_dump_json(indent=4))