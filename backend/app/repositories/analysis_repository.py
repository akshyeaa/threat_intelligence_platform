from sqlalchemy.orm import Session

from app.models.analysis import Analysis


class AnalysisRepository:

    @staticmethod
    def create(
        db: Session,
        input_type: str,
        filename: str | None,
        ioc_count: int,
        highest_risk: str = "Low",
        analysis_json: str | None = None,
        report: str | None = None,
    ):

        analysis = Analysis(
            input_type=input_type,
            filename=filename,
            ioc_count=ioc_count,
            highest_risk=highest_risk,
            analysis_json=analysis_json,
            report=report,
        )

        db.add(analysis)

        db.commit()

        db.refresh(analysis)

        return analysis

    @staticmethod
    def get_all(
        db: Session,
    ):

        return (
            db.query(Analysis)
            .order_by(
                Analysis.created_at.desc()
            )
            .all()
        )
    
    @staticmethod
    def get_by_id(
        db: Session,
        analysis_id: int,
    ):
        return (
            db.query(Analysis)
            .filter(
                Analysis.id == analysis_id
            )
            .first()
        )