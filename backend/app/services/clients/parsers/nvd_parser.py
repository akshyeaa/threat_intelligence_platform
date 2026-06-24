from typing import Any


class NVDParser:
    """
    Converts raw NVD API responses into
    the application's enrichment format.
    """

    @staticmethod
    def parse(data: dict[str, Any]) -> dict | None:

        vulnerabilities = data.get("vulnerabilities", [])

        if not vulnerabilities:
            return None

        cve = vulnerabilities[0]["cve"]

        metrics = cve.get("metrics", {})

        severity = None
        cvss = None

        if "cvssMetricV31" in metrics:

            metric = metrics["cvssMetricV31"][0]

            severity = (
                metric["cvssData"]["baseSeverity"]
                .title()
            )

            cvss = metric["cvssData"]["baseScore"]

        descriptions = cve.get("descriptions", [])

        description = ""

        for item in descriptions:

            if item["lang"] == "en":

                description = item["value"]

                break

        return {
            "severity": severity,
            "cvss": cvss,
            "exploit": False,
            "description": description,
            "source": "NVD",
            "mitigation": None,
        }