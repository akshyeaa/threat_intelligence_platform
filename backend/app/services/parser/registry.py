from app.services.parser.txt_parser import TXTParser
from app.services.parser.json_parser import JSONParser
from app.services.parser.csv_parser import CSVParser
from app.services.parser.docx_parser import DOCXParser
from app.services.parser.pdf_parser import PDFParser


PARSER_REGISTRY = {
    ".txt": TXTParser,
    ".json": JSONParser,
    ".csv": CSVParser,
    ".docx": DOCXParser,
    ".pdf": PDFParser,
}