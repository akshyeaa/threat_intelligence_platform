from pathlib import Path

from PyPDF2 import PdfReader

from app.schemas.parser import ParsedDocument
from app.services.parser.base import BaseParser


class PDFParser(BaseParser):
    """
    Parser for PDF files.
    """

    def extract_text(self, file_path: Path) -> ParsedDocument:

        reader = PdfReader(file_path)

        content = "\n".join(
            page.extract_text() or ""
            for page in reader.pages
        )

        return ParsedDocument(
            filename=file_path.name,
            file_type="pdf",
            content=content,
        )