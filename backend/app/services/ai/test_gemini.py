from app.services.ai.provider import (
    GeminiProvider,
)


provider = GeminiProvider()

result = provider.generate(
    "Explain CVE-2023-3519 in two sentences."
)

print(result)