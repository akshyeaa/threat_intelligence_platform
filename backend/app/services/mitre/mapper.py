from app.constants.paths import MITRE_DATASET
from app.utils.json_loader import JSONLoader


class MitreMapper:

    def __init__(self):

        self.dataset = JSONLoader.load(
            MITRE_DATASET
        )

    def map_text(self, text: str):

        text = text.lower()

        matches = []

        for rule in self.dataset:

            for keyword in rule["keywords"]:

                if keyword.lower() in text:

                    matches.append(rule)

                    break

        return matches