from app.schemas.ioc import IOCExtractionResponse
from app.services.ai.groq_provider import GroqProvider

from app.services.ai.provider import (
    GeminiProvider,
)
from app.services.ai.prompt_builder import (
    PromptBuilder,
)


class AIService:

    def __init__(self):

        # self.provider = GeminiProvider()
        self.gemini = GeminiProvider()
        self.groq = GroqProvider()

    def generate_report(
        self,
        response: IOCExtractionResponse,
    ):

        prompt = PromptBuilder.build(
            response
        )

        try:
            return self.gemini.generate(
                prompt
            )

        except Exception as e:

            print(
                f"Gemini failed: {e}"
            )

            return self.groq.generate(
                prompt
            )