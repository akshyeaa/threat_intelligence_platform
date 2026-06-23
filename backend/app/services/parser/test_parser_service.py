from pathlib import Path

from app.services.parser.service import ParserService

BASE_DIR = Path(__file__).resolve().parents[3]

sample_file = BASE_DIR / "sample_data" / "sample.txt"

service = ParserService()

document = service.parse(sample_file)

print(document.model_dump_json(indent=4))