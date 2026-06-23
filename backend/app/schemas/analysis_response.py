from pydantic import BaseModel

from app.schemas.ioc import IOCItem


class AnalysisResponse(BaseModel):

    success: bool

    input_type: str

    filename: str | None = None

    ioc_count: int

    iocs: list[IOCItem]