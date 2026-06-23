from pathlib import Path
from typing import Union

from app.schemas.parser import ParsedDocument
from app.schemas.ioc import IOCExtractionResponse

from app.services.ioc.service import IOCService
from app.services.parser.service import ParserService


class AnalysisService:
    """
    Orchestrates the threat analysis pipeline.
    """

    def __init__(self):
        self.parser = ParserService()
        self.ioc_service = IOCService()

    def analyze_text(self, text: str) -> IOCExtractionResponse:
        """
        Analyze raw text input.
        """
        return self.ioc_service.extract_iocs(text)

    def analyze_file(self, file_path: Path) -> IOCExtractionResponse:
        """
        Analyze uploaded file.
        """
        document: ParsedDocument = self.parser.parse(file_path)

        return self.ioc_service.extract_iocs(document.content)