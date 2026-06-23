import pandas as pd
from pathlib import Path

from app.schemas.parser import ParsedDocument
from app.services.parser.base import BaseParser


class CSVParser(BaseParser):
    """
    Parser for CSV files.
    """

    def extract_text(self, file_path: Path) -> ParsedDocument:

        dataframe = pd.read_csv(file_path)

        content = dataframe.to_string(index=False)

        return ParsedDocument(
            filename=file_path.name,
            file_type="csv",
            content=content,
        )