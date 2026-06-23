from app.schemas.ioc import IOCItem, IOCExtractionResponse

from app.services.ioc.extractor import IOCExtractor
from app.services.ioc.validator import IOCValidator
from app.services.ioc.normalizer import IOCNormalizer


class IOCService:
    """
    Orchestrates IOC extraction, validation,
    normalization and response generation.
    """

    def __init__(self):
        self.extractor = IOCExtractor()
        self.validator = IOCValidator()
        self.normalizer = IOCNormalizer()

    def extract_iocs(self, text: str) -> IOCExtractionResponse:

        raw_matches = self.extractor.extract(text)

        iocs = []
        seen = set()
        counter = 1

        for match in raw_matches:

            ioc_type = match["type"]
            value = match["value"]

            if not self.validator.validate(ioc_type, value):
                continue

            value = self.normalizer.normalize(ioc_type, value)

            unique_key = (ioc_type, value)

            if unique_key in seen:
                continue

            seen.add(unique_key)

            iocs.append(
                IOCItem(
                    id=f"ioc-{counter}",
                    type=ioc_type,
                    value=value,
                )
            )

            counter += 1

        return IOCExtractionResponse(iocs=iocs)