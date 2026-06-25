from app.database.database import (
    Base,
    engine,
)

from app.models import Analysis

def init_db():
    Base.metadata.create_all(bind=engine)