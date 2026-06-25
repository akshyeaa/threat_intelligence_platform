from datetime import datetime

from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    DateTime,
)

from app.database.database import Base


class Analysis(Base):

    __tablename__ = "analyses"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    input_type = Column(
        String,
        nullable=False,
    )

    filename = Column(
        String,
        nullable=True,
    )

    ioc_count = Column(
        Integer,
        default=0,
    )

    highest_risk = Column(
        String,
        default="Low",
    )

    analysis_json = Column(
        Text,
        nullable=True,
    )

    report = Column(
        Text,
        nullable=True,
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
    )