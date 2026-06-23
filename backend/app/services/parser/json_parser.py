import json
from pathlib import Path

from app.schemas.parser import ParsedDocument
from app.services.parser.base import BaseParser


class JSONParser(BaseParser):
    """
    Parser for JSON files.
    """

    def extract_text(self, file_path: Path) -> ParsedDocument:

        with file_path.open("r", encoding="utf-8") as file:
            data = json.load(file)

        content = json.dumps(data, indent=2)

        return ParsedDocument(
            filename=file_path.name,
            file_type="json",
            content=content,
        )