from app.schemas.ioc import IOCExtractionResponse


class PromptBuilder:

    @staticmethod
    def build(
        response: IOCExtractionResponse,
    ) -> str:

        return f"""
You are a senior cybersecurity threat analyst.

Analyze the following threat intelligence data and generate a professional report.

IOC Data:

{response.model_dump_json(indent=2)}

Generate the report with the following sections:

1. Executive Summary
2. Threat Assessment
3. MITRE ATT&CK Analysis
4. Risk Analysis
5. Mitigation Recommendations

Keep the response concise, professional, and actionable.
"""