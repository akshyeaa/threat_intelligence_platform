from typing import Any

from pydantic import BaseModel, Field


class EnrichmentData(BaseModel):
    source: str | None = Field(default=None)

    severity: str | None = Field(default=None)

    cvss: float | None = Field(default=None)

    exploit: bool | None = Field(default=None)

    description: str | None = Field(default=None)

    mitigation: str | None = Field(default=None)

    reputation: str | None = Field(default=None)

    confidence: int | None = Field(default=None)

    raw: dict[str, Any] | None = Field(default=None)