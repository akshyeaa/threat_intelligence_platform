from fastapi import APIRouter

from app.services.history.service import (
    HistoryService,
)

from app.schemas.history import (
    HistoryItem,
)

router = APIRouter(
    prefix="/api/history",
    tags=["History"],
)

history_service = HistoryService()


@router.get(
    "",
    response_model=list[HistoryItem],
)
def get_history():

    return history_service.get_history()


@router.get(
    "/{analysis_id}",
    response_model=HistoryItem,
)
def get_analysis(
    analysis_id: int,
):

    return history_service.get_analysis(
        analysis_id
    )