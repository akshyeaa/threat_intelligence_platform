from app.services.ai.groq_provider import (
    GroqProvider,
)

provider = GroqProvider()

result = provider.generate(
    "Explain CVE-2023-3519 in two sentences."
)

print(result)