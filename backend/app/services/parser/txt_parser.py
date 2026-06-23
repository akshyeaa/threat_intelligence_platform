from pathlib import Path

from app.schemas.parser import ParsedDocument
from app.services.parser.base import BaseParser


class TXTParser(BaseParser):
    """
    Parser for plain text files.
    """

    def extract_text(self, file_path: Path) -> ParsedDocument:
        

        content = file_path.read_text(encoding="utf-8")

        return ParsedDocument(
            filename=file_path.name,
            file_type="txt",
            content=content,
        )