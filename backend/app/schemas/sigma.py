from pydantic import BaseModel


class SigmaRequest(BaseModel):
    content: str