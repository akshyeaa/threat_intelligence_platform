from pydantic import BaseModel, Field


class IOCItem(BaseModel):
    id: str = Field(..., description="Unique IOC identifier")
    type: str = Field(..., description="IOC type (ipv4, domain, url, email, cve, etc.)")
    value: str = Field(..., description="Extracted IOC value")


class IOCExtractionResponse(BaseModel):
    iocs: list[IOCItem] = Field(default_factory=list)