from app.services.ioc.patterns import IOC_PATTERNS
from app.constants.ioc_priority import PATTERN_ORDER

class IOCExtractor:
    """
    Extract raw IOCs while preserving order and
    preventing overlapping matches.
    """

    def extract(self, text: str):

        matches = []
        occupied = []

        for ioc_type in PATTERN_ORDER:

            pattern = IOC_PATTERNS[ioc_type]

            for match in pattern.finditer(text):

                start = match.start()
                end = match.end()

                overlap = any(
                    not (end <= s or start >= e)
                    for s, e in occupied
                )

                if overlap:
                    continue

                occupied.append((start, end))

                matches.append(
                    {
                        "type": ioc_type,
                        "value": match.group(),
                        "position": start,
                    }
                )

        matches.sort(key=lambda item: item["position"])

        return matches