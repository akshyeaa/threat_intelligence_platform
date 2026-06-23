from app.services.enrichment.cve_service import CVEService

service = CVEService()

print(service.find("CVE-2023-3519"))