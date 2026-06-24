from app.schemas.ioc import (
    IOCExtractionResponse,
)

from app.services.sigma.generator import (
    SigmaGenerator,
)


class SigmaService:

    def generate(
        self,
        response: IOCExtractionResponse,
    ) -> list[str]:

        rules = []

        for ioc in response.iocs:

            rules.append(
                SigmaGenerator.generate(ioc)
            )

        return rules