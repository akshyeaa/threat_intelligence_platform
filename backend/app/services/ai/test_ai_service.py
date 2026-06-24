from app.services.analysis.service import (
    AnalysisService,
)

from app.services.ai.service import (
    AIService,
)


text = """
A remote code execution vulnerability
allows attackers to exploit the application.

CVE-2023-3519
"""

analysis_response = (
    AnalysisService().analyze_text(text)
)

report = AIService().generate_report(
    analysis_response
)

print(report)