from pydantic import BaseModel


class MitreMatch(BaseModel):

    technique_id: str

    technique: str

    tactic: str