from pydantic import BaseModel


class ReportRequest(BaseModel):
    content: str