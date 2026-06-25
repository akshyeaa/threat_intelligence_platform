from app.database.database import (
    SessionLocal,
)

from app.repositories.analysis_repository import (
    AnalysisRepository,
)


class HistoryService:

    def save_analysis(
        self,
        input_type: str,
        filename: str | None,
        ioc_count: int,
        highest_risk: str = "Low",
        analysis_json: str | None = None,
        report: str | None = None,
    ):

        db = SessionLocal()

        try:

            return (
                AnalysisRepository.create(
                    db=db,
                    input_type=input_type,
                    filename=filename,
                    ioc_count=ioc_count,
                    highest_risk=highest_risk,
                    analysis_json=analysis_json,
                    report=report,
                )
            )

        finally:
            db.close()

    def get_history(self):

        db = SessionLocal()

        try:

            return (
                AnalysisRepository.get_all(
                    db
                )
            )

        finally:
            db.close()

    def get_analysis(
        self,
        analysis_id: int,
    ):

        db = SessionLocal()

        try:

            return (
                AnalysisRepository.get_by_id(
                    db,
                    analysis_id,
                )
            )

        finally:
            db.close()