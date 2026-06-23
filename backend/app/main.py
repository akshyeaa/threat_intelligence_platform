from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.config.settings import settings
from app.database.init_db import init_db


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