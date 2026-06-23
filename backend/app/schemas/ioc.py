from typing import Any

from pydantic import BaseModel, Field


class IOCItem(BaseModel):
    id: str = Field(..., description="Unique IOC ID")
    type: str = Field(..., description="IOC type")
    value: str = Field(..., description="Extracted IOC value")

    enrichment: dict[str, Any] | None = Field(
        default=None,
        description="Threat intelligence enrichment data"
    )

    mitre: dict[str, Any] | None = Field(
        default=None,
        description="Mapped MITRE ATT&CK information"
    )

    risk_score: int | None = Field(
        default=None,
        description="Calculated risk score"
    )


class IOCExtractionResponse(BaseModel):
    iocs: list[IOCItem]