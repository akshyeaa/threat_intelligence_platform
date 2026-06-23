from pathlib import Path

from app.services.parser.registry import PARSER_REGISTRY


class ParserService:
    """
    Selects the correct parser based on file extension.
    """

    def parse(self, file_path: Path):

        extension = file_path.suffix.lower()

        parser_class = PARSER_REGISTRY.get(extension)

        if parser_class is None:
            raise ValueError(f"Unsupported file type: {extension}")

        parser = parser_class()

        return parser.extract_text(file_path)