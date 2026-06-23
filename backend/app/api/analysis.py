# from pathlib import Path
# import shutil
# from fastapi import APIRouter

# from app.schemas.analysis import AnalysisRequest
# from app.schemas.analysis_response import AnalysisResponse

# from app.services.analysis.service import AnalysisService

# from fastapi import UploadFile, File, HTTPException
# from app.constants.paths import UPLOAD_DIR
# from app.constants.file_types import SUPPORTED_FILE_TYPES
from pathlib import Path
import shutil

from fastapi import APIRouter, File, HTTPException, UploadFile

from app.constants.file_types import SUPPORTED_FILE_TYPES
from app.constants.paths import UPLOAD_DIR

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

@router.post(
    "/file",
    response_model=AnalysisResponse,
)
async def analyze_file(
    file: UploadFile = File(...)
):

    suffix = Path(file.filename).suffix.lower()

    if suffix not in SUPPORTED_FILE_TYPES:
        raise HTTPException(
            status_code=400,
            detail="Unsupported file type."
        )

    UPLOAD_DIR.mkdir(
        exist_ok=True
    )

    destination = UPLOAD_DIR / file.filename

    with destination.open("wb") as buffer:
        shutil.copyfileobj(
            file.file,
            buffer,
        )

    result = analysis_service.analyze_file(
        destination
    )

    return AnalysisResponse(
        success=True,
        input_type="file",
        filename=file.filename,
        ioc_count=len(result.iocs),
        iocs=result.iocs,
    )