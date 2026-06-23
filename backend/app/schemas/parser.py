from pydantic import BaseModel, Field


class ParsedDocument(BaseModel):
    filename: str = Field(..., description="Original file name")
    file_type: str = Field(..., description="Detected file type")
    content: str = Field(..., description="Extracted plain text")