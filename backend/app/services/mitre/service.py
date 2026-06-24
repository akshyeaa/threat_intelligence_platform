from app.schemas.ioc import IOCExtractionResponse

from app.services.mitre.mapper import MitreMapper


class MitreService:
    """
    Applies MITRE ATT&CK mappings.
    """

    def __init__(self):

        self.mapper = MitreMapper()

    def map_attack(
        self,
        response: IOCExtractionResponse,
        text: str,
    ) -> IOCExtractionResponse:

        matches = self.mapper.map_text(text)

        if not matches:
            return response

        primary_match = matches[0]

        for ioc in response.iocs:

            ioc.mitre = {
                "technique_id": primary_match["technique_id"],
                "technique": primary_match["technique"],
                "tactic": primary_match["tactic"],
            }

        return response