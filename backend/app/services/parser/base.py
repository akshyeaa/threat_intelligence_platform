from abc import ABC, abstractmethod
from pathlib import Path
from app.schemas.parser import ParsedDocument


class BaseParser(ABC):
    """
    Base interface for all file parsers.
    """

    @abstractmethod
    def extract_text(self, file_path: Path) -> ParsedDocument:
        """
        Extract plain text from a file.
        """
        pass