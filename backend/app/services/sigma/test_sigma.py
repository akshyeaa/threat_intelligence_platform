from app.services.analysis.service import (
    AnalysisService,
)

from app.services.sigma.service import (
    SigmaService,
)


text = """
Remote code execution attack.

CVE-2023-3519

185.199.108.153
"""

analysis = (
    AnalysisService()
    .analyze_text(text)
)

rules = SigmaService().generate(
    analysis
)

for rule in rules:

    print(rule)

    print("=" * 50)

