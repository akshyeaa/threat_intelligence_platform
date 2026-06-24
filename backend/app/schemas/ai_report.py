from pydantic import BaseModel


class AIReport(BaseModel):

    executive_summary: str

    threat_assessment: str

    mitre_analysis: str

    risk_analysis: str

    mitigation_recommendations: str