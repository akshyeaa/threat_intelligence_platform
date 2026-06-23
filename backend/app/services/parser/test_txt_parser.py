from app.services.parser.txt_parser import TXTParser
from pathlib import Path

parser = TXTParser()
BASE_DIR = Path(__file__).resolve().parents[3]

sample_file = BASE_DIR / "sample_data" / "sample.txt"

document = parser.extract_text(sample_file)

print(document.model_dump_json(indent=4))


