import re

from app.constants.ioc_types import (
    IPV4,
    DOMAIN,
    URL,
    EMAIL,
    MD5,
    SHA1,
    SHA256,
    CVE,
)


IOC_PATTERNS = {
    IPV4: re.compile(
        r"\b(?:25[0-5]|2[0-4]\d|1?\d?\d)"
        r"(?:\.(?:25[0-5]|2[0-4]\d|1?\d?\d)){3}\b"
    ),

    DOMAIN: re.compile(
        r"\b(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}\b"
    ),

    URL: re.compile(
        r"https?://[^\s]+"
    ),

    EMAIL: re.compile(
        r"\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b"
    ),

    MD5: re.compile(
        r"\b[a-fA-F0-9]{32}\b"
    ),

    SHA1: re.compile(
        r"\b[a-fA-F0-9]{40}\b"
    ),

    SHA256: re.compile(
        r"\b[a-fA-F0-9]{64}\b"
    ),

    CVE: re.compile(
        r"\bCVE-\d{4}-\d{4,7}\b",
        re.IGNORECASE,
    ),
}