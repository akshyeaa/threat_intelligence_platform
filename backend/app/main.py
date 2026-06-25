from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.config.settings import settings
from app.database.init_db import init_db
from app.api.analysis import router as analysis_router
from fastapi.middleware.cors import CORSMiddleware
from app.api.history import (
    router as history_router,
)


@asynccontextmanager
async def lifespan(app: FastAPI):
    print(" Starting AI Threat Intelligence Platform...")

    init_db()

    print(" Database initialized.")

    yield

    print(" Application shutdown.")


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.API_VERSION,
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(analysis_router)
app.include_router(history_router)


@app.get("/")
def home():
    return {
        "message": "AI Threat Intelligence Platform API",
        "status": "running",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
        "app": settings.APP_NAME,
        "version": settings.API_VERSION,
    }