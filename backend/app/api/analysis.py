from fastapi import APIRouter

from app.schemas.analysis import AnalysisRequest
from app.schemas.analysis_response import AnalysisResponse

from app.services.analysis.service import AnalysisService


router = APIRouter(
    prefix="/api/analyze-threat",
    tags=["Threat Analysis"],
)

analysis_service = AnalysisService()


@router.post(
    "/text",
    response_model=AnalysisResponse,
)
def analyze_text(
    request: AnalysisRequest,
):

    result = analysis_service.analyze_text(
        request.content
    )

    return AnalysisResponse(
        success=True,
        input_type="text",
        filename=None,
        ioc_count=len(result.iocs),
        iocs=result.iocs,
    )