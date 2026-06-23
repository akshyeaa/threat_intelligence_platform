class IOCNormalizer:
    """
    Normalizes IOC values into a standard format.
    """

    @staticmethod
    def normalize(ioc_type: str, value: str) -> str:
        value = value.strip()

        if ioc_type in ("domain", "email"):
            value = value.lower()

        elif ioc_type == "url":
            value = value.rstrip("/")

        elif ioc_type == "cve":
            value = value.upper()

        return value