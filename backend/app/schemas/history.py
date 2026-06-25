from datetime import datetime

from pydantic import BaseModel


class HistoryItem(BaseModel):

    id: int

    input_type: str

    filename: str | None

    ioc_count: int

    highest_risk: str

    analysis_json: str | None = None

    report: str | None = None

    created_at: datetime

    class Config:
        from_attributes = True