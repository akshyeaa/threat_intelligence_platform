from app.schemas.ioc import IOCItem


class SigmaGenerator:

    @staticmethod
    def generate(ioc: IOCItem) -> str:

        title = (
            f"Detect {ioc.type.upper()} IOC"
        )

        value = ioc.value

        level = "medium"

        if ioc.risk_score:

            if ioc.risk_score.level == "Critical":
                level = "critical"

            elif ioc.risk_score.level == "High":
                level = "high"

            elif ioc.risk_score.level == "Medium":
                level = "medium"

            elif ioc.risk_score.level == "Low":
                level = "low"

        return f"""
title: {title}

status: experimental

logsource:
  product: windows

detection:
  selection:
    CommandLine|contains:
      - "{value}"

condition: selection

level: {level}
"""