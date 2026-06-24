from pathlib import Path
from typing import Union

from app.schemas.parser import ParsedDocument
from app.schemas.ioc import IOCExtractionResponse

from app.services.ioc.service import IOCService
from app.services.parser.service import ParserService
from app.services.enrichment.service import EnrichmentService


class AnalysisService:
    """
    Orchestrates the threat analysis pipeline.
    """

    def __init__(self):
        self.parser = ParserService()
        self.ioc_service = IOCService()
        self.enrichment_service = EnrichmentService()

    def analyze_text(self, text: str) -> IOCExtractionResponse:
        """
        Analyze raw text input.
        """
        result = self.ioc_service.extract_iocs(text)

        result = self.enrichment_service.enrich(result)

        return result

    def analyze_file(self, file_path: Path) -> IOCExtractionResponse:
        """
        Analyze uploaded file.
        """
        document: ParsedDocument = self.parser.parse(file_path)

        result = self.ioc_service.extract_iocs(
            document.content
        )

        result = self.enrichment_service.enrich(result)

        return result