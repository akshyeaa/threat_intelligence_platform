from typing import Literal

from pydantic import BaseModel, Field


class AnalysisRequest(BaseModel):
    input_type: Literal["text"] = Field(
        default="text",
        description="Input source type",
    )

    content: str = Field(
        ...,
        description="Threat report text",
    )